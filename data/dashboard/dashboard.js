! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "98a9e0e8-0d54-5a6a-9456-57475e89fee4")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				J8: function() {
					return o
				},
				Jd: function() {
					return a
				},
				QY: function() {
					return m
				},
				Qw: function() {
					return c
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
				i = t("../../../../node_modules/query-string/query-string.js"),
				u = t.n(i),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f;
			const c = () => Object.keys(l.Z).reduce((C, _) => (_.indexOf("cf_beta.") === 0 && l.Z.get(_) === "true" && C.push(_.split(".").slice(1).join(".")), C), []),
				p = () => {
					var C, _, O;
					return ((C = window) === null || C === void 0 || (_ = C.bootstrap) === null || _ === void 0 || (O = _.data) === null || O === void 0 ? void 0 : O.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((f = window) === null || f === void 0 ? void 0 : f.location) && l.Z) {
				const C = u().parse(window.location.search);
				C.beta_on && l.Z.set(`cf_beta.${C.beta_on}`, !0), C.beta_off && l.Z.set(`cf_beta.${C.beta_off}`, !1)
			}
			const v = {},
				n = C => {
					var _, O, E;
					return Object.prototype.hasOwnProperty.call(v, C) ? v[C] : ((_ = window) === null || _ === void 0 || (O = _.bootstrap) === null || O === void 0 || (E = O.data) === null || E === void 0 ? void 0 : E.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(T => T === C) ? (v[C] = !0, !0) : (v[C] = !1, !1)
				},
				s = C => l.Z ? l.Z.get(`cf_beta.${C}`) === !0 : !1,
				o = C => s(C) || n(C),
				g = () => !0,
				a = () => {
					var C, _, O;
					return ((C = window) === null || C === void 0 || (_ = C.bootstrap) === null || _ === void 0 || (O = _.data) === null || O === void 0 ? void 0 : O.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				m = C => {
					const _ = (0, e.uF)(C),
						O = (_ == null ? void 0 : _.roles) || [];
					return (0, r.qR)(location.pathname) && O.length === 1 && O.some(E => E === "Administrator Read Only")
				},
				I = () => {
					var C, _, O;
					return ((C = window) === null || C === void 0 || (_ = C.location) === null || _ === void 0 || (O = _.origin) === null || O === void 0 ? void 0 : O.includes("fed.cloudflare.com")) ? "fed" : "global"
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
				i = "cf_pv",
				u = "current",
				l = "hash",
				f = "deploymentPreview",
				c = "fragmentPreview",
				p = s => s === u ? v() : n(),
				v = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (s = 72) => {
					const o = 36e5;
					return new Date(Date.now() + s * o)
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

			function r(C) {
				for (var _ = 1; _ < arguments.length; _++) {
					var O = arguments[_] != null ? Object(arguments[_]) : {},
						E = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(O).filter(function(T) {
						return Object.getOwnPropertyDescriptor(O, T).enumerable
					})), E.forEach(function(T) {
						i(C, T, O[T])
					})
				}
				return C
			}

			function i(C, _, O) {
				return _ = u(_), _ in C ? Object.defineProperty(C, _, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[_] = O, C
			}

			function u(C) {
				var _ = l(C, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function l(C, _) {
				if (typeof C != "object" || C === null) return C;
				var O = C[Symbol.toPrimitive];
				if (O !== void 0) {
					var E = O.call(C, _ || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(C)
			}
			const f = e.z.string().regex(/^((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))$/g),
				c = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				p = e.z.string(),
				v = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(p, v),
				s = e.z.enum(["live", "previews"]),
				o = (C, _) => {
					const O = C.data.cookies[_],
						E = {
							[PREVIEW_VERSIONING_COOKIE]: f,
							[DEPLOYMENT_VERSION_COOKIE]: c
						};
					try {
						return E[_].parse(O)
					} catch {
						return null
					}
				},
				g = C => {
					try {
						return decodeURIComponent(C).split(",").reduce((_, O) => {
							const E = O.split(":"),
								T = p.parse(E[0]),
								L = v.parse(E[1]);
							return r({}, _, {
								[T]: L
							})
						}, {})
					} catch {
						return {}
					}
				},
				a = C => {
					const _ = C.data.cookies[FRAGMENT_VERSIONING_PREVIEW_COOKIE],
						O = g(_);
					try {
						return n.parse(O)
					} catch {
						return null
					}
				},
				m = C => {
					const _ = f.parse(C),
						[O, ...E] = _.split("-"),
						T = E.join("-");
					return {
						projectType: O,
						deploymentId: T
					}
				},
				I = (C, _) => {
					if (!_) return "";
					try {
						var O;
						const {
							projectType: E,
							deploymentId: T
						} = m(_), L = {
							live: C.env.PAGES_WORKERS_LIVE_HOST,
							previews: C.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: S,
							pathname: k,
							search: M
						} = new URL(C.request.url), y = S == null || (O = S.split(".")) === null || O === void 0 ? void 0 : O[0];
						if (T && T !== y && s.safeParse(E).success) {
							const D = L[E];
							return `https://${T}.${D}${k}${M}`
						}
					} catch (E) {
						console.log(E)
					}
					return ""
				},
				P = (C, _) => {
					if (!_) return "";
					try {
						var O;
						const E = C.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: T,
								pathname: L,
								search: S
							} = new URL(C.request.url),
							k = T == null || (O = T.split(".")) === null || O === void 0 ? void 0 : O[0],
							{
								deploymentSHA: M
							} = parsePagesDevUrl(C.env.CF_PAGES_URL),
							y = C.request.headers.get("sec-fetch-dest") === "document";
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
				i = t("../libs/init/initGlobal.ts"),
				u = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function f(R) {
				for (var W = 1; W < arguments.length; W++) {
					var J = arguments[W] != null ? Object(arguments[W]) : {},
						ae = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(J).filter(function(ge) {
						return Object.getOwnPropertyDescriptor(J, ge).enumerable
					})), ae.forEach(function(ge) {
						c(R, ge, J[ge])
					})
				}
				return R
			}

			function c(R, W, J) {
				return W = p(W), W in R ? Object.defineProperty(R, W, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[W] = J, R
			}

			function p(R) {
				var W = v(R, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function v(R, W) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ae = J.call(R, W || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(R)
			}
			const n = R => {
				const W = R && R.headers || {},
					J = new Headers(W);
				return J.append("X-Cross-Site-Security", "dash"), f({}, R, {
					headers: J
				})
			};
			(0, l.register)({
				request: (R, W) => {
					try {
						return new URL(R), R === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", W] : [R, W]
					} catch {
						var J, ae;
						return typeof R == "object" && ((J = R) === null || J === void 0 || (ae = J.url) === null || ae === void 0 ? void 0 : ae.startsWith("https://platform.dash.cloudflare.com/map-tiles/")) ? [R, W] : [R, n(W)]
					}
				}
			});
			var s = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				o = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				g = t("../react/app/providers/storeContainer.js");
			let a = "";
			const m = 61;

			function I(R) {
				const W = R.substr(1);
				if (W && a !== W) {
					const J = document.getElementById(W);
					if (J) {
						const ae = J.getBoundingClientRect().top;
						if (ae > 0) {
							const ge = ae - m;
							document.documentElement.scrollTop = ge
						}
					}
				}
				a = W
			}

			function P(R) {
				R.listen(W => I(W.hash))
			}
			var C = t("../../../../node_modules/cookie/index.js"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				O = t("../functions/utils/constants.ts");
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
				T = (R, W = !1) => {
					var J;
					const ae = E(R),
						ge = `
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
    <h1 id="error-title">${ae.title}</h1>
    <p id="error-description">${ae.description}</p>
  </div>
  `,
						we = W ? `
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
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(J=window.build)===null||J===void 0?void 0:J.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return ge + we
				},
				L = R => {
					var W;
					const J = document.getElementById(R);
					!J || (W = J.parentNode) === null || W === void 0 || W.removeChild(J)
				};

			function S() {
				const R = document.getElementById("loading-state");
				R == null || R.classList.add("hide"), R == null || R.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(L)
				})
			}

			function k(R) {
				var W;
				const J = document.getElementById("loading-state"),
					ae = !!((W = C.parse(document.cookie)) === null || W === void 0 ? void 0 : W[O.b1]);
				!J || (J.innerHTML = T(R == null ? void 0 : R.code, ae))
			}
			var M = t("../utils/initStyles.ts"),
				y = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				D = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				N = t("../react/common/selectors/languagePreferenceSelector.ts"),
				x = t("../flags.ts"),
				G = t("../utils/getDashVersion.ts");
			const oe = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				de = !0,
				se = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				K = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var Q = t("../utils/sentry/lastSentEventId.ts"),
				z = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				j = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const A = R => {
				const W = async J => {
					var ae, ge;
					const we = {
						envelope: J.body,
						url: R.url,
						isPreviewDeploy: (ae = window) === null || ae === void 0 || (ge = ae.build) === null || ge === void 0 ? void 0 : ge.isPreviewDeploy,
						release: (0, G.t)()
					};
					try {
						const Ie = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(we)
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
				return z.q(R, W)
			};
			var w = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				F = t("../../../../node_modules/history/esm/history.js"),
				q = (0, F.lX)(),
				re = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Z = t("../react/utils/url.ts");
			const B = (0, re.Rf)();
			let V;

			function ee(R) {
				return le(R, "react-router-v5")
			}

			function le(R, W) {
				return (J, ae = !0, ge = !0) => {
					ae && B && B.location && (V = J({
						name: (0, Z.Fl)(B.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": W
						}
					})), ge && R.listen && R.listen((we, Ie) => {
						if (Ie && (Ie === "PUSH" || Ie === "POP")) {
							V && V.finish();
							const Me = {
								"routing.instrumentation": W
							};
							V = J({
								name: (0, Z.Fl)(we.pathname),
								op: "navigation",
								tags: Me
							})
						}
					})
				}
			}
			var pe = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ce = t.n(pe),
				_e = t("../../../common/intl/intl-core/src/errors.ts"),
				be = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Te = t("../react/common/middleware/sparrow/errors.ts");

			function Pe(R, W, J) {
				return W = ve(W), W in R ? Object.defineProperty(R, W, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[W] = J, R
			}

			function ve(R) {
				var W = De(R, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function De(R, W) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ae = J.call(R, W || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(R)
			}
			class ke {
				constructor() {
					Pe(this, "name", ke.id)
				}
				setupOnce() {
					t.g.console && (0, be.hl)(t.g.console, "error", W => (...J) => {
						const ae = J.find(ge => ge instanceof Error);
						if (oe && ae) {
							let ge, we = !0;
							if (ae instanceof Te.ez) {
								const Ie = ae instanceof Te.oV ? ae.invalidProperties : void 0;
								ge = {
									tags: {
										"sparrow.eventName": ae.eventName
									},
									extra: {
										sparrow: {
											eventName: ae.eventName,
											invalidProperties: Ie
										}
									},
									fingerprint: [ae.name ? ae.name : "SparrowValidationError"]
								}, we = !1
							} else if (ae instanceof pe.SparrowIdCookieError) ge = {
								extra: {
									sparrowIdCookie: ae.cookie
								},
								fingerprint: [ae.name ? ae.name : "SparrowIdCookieError"]
							};
							else if (ae.name === "ChunkLoadError") {
								ge = {
									fingerprint: [ae.name]
								};
								try {
									ge.tags = {
										chunkId: ae.message.split(" ")[2],
										chunkUrl: ae.request
									}
								} catch {}
							} else ae instanceof _e.YB && (ge = {
								fingerprint: ["TranslatorError", ae.translationKey]
							});
							we && s.Tb(ae, ge)
						}
						typeof W == "function" && W.apply(t.g.console, J)
					})
				}
			}
			Pe(ke, "id", "ConsoleErrorIntegration");
			var Xe = null,
				Je = t("../react/common/utils/getEnvironment.ts");
			const Y = () => {
					if (oe && de) {
						var R, W, J, ae, ge, we, Ie, Me, ot, Fe;
						const Vt = (0, Je.Z)();
						let Ct = "production";
						((R = window) === null || R === void 0 || (W = R.build) === null || W === void 0 ? void 0 : W.isPreviewDeploy) && (Ct += "-preview"), Vt === "canary" && (Ct = "canary"), D.S({
							dsn: oe,
							release: (0, G.t)(),
							environment: Ct,
							ignoreErrors: K,
							allowUrls: se,
							autoSessionTracking: !1,
							integrations: pt => [...pt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new ke, new w.jK.BrowserTracing({
								routingInstrumentation: ee(q)
							})],
							tracesSampleRate: 0,
							transport: A,
							beforeSend: pt => (Q.e.setEventId(pt.event_id), pt)
						});
						const Dt = (0, g.bh)().getState();
						s.rJ({
							LOCAL_STORAGE_FLAGS: (0, x.Qw)(),
							USER_BETA_FLAGS: (0, x.ki)(),
							meta: {
								connection: {
									type: (J = window) === null || J === void 0 || (ae = J.navigator) === null || ae === void 0 || (ge = ae.connection) === null || ge === void 0 ? void 0 : ge.effectiveType,
									bandwidth: (we = window) === null || we === void 0 || (Ie = we.navigator) === null || Ie === void 0 || (Me = Ie.connection) === null || Me === void 0 ? void 0 : Me.downlink
								},
								languagePreference: (0, N.r)(Dt),
								isPreviewDeploy: (ot = window) === null || ot === void 0 || (Fe = ot.build) === null || Fe === void 0 ? void 0 : Fe.isPreviewDeploy
							},
							utilGates: (0, y.T2)(Dt)
						}), window.addEventListener("unhandledrejection", function(pt) {})
					}
				},
				Ee = R => {
					R ? s.av({
						id: R
					}) : s.av(null)
				};
			var Oe = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Ue = () => {
					let R;
					try {
						R = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), R = window.location.search
					}
					if (!R.includes("remote[")) return;
					const W = new URLSearchParams(R),
						J = {};
					for (let [ae, ge] of W) ae.includes("remote") && (J[ae.replace(/remote\[|\]/g, "")] = ge);
					Oe.Z.set("mfe-remotes", JSON.stringify(J))
				},
				xe = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				We = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const at = "ANON_USER_ID";

			function ct() {
				var R, W, J, ae;
				let ge = (R = t.g) === null || R === void 0 || (W = R.bootstrap) === null || W === void 0 || (J = W.data) === null || J === void 0 || (ae = J.user) === null || ae === void 0 ? void 0 : ae.id;
				if (!ge) {
					let we = Oe.Z.get(at);
					if (!we) {
						let Ie = (0, We.Z)();
						Oe.Z.set(at, Ie), we = Ie
					}
					return we
				}
				return ge
			}
			async function X() {
				const R = (0, g.bh)();
				R.dispatch((0, xe.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await R.dispatch((0, y.UL)({
					userId: ct()
				}))
			}
			class ue extends Error {
				constructor(W, J) {
					super(J);
					this.name = `${W} ${J}`
				}
			}
			const he = () => {
					document.cookie.split(";").forEach(W => {
						const [J] = W.trim().split("=");
						document.cookie = `${J}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				Be = async () => {
					let R = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!R.ok) throw R.headers.get("content-type") === "text/html" && (await R.text()).toLowerCase().includes("cookie too large") && (s.$e(function(ge) {
						ge.setTag("init", "cookieTooLarge"), s.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), he(), window.location.reload()), new ue("Bootstrap API Failure", R == null ? void 0 : R.status);
					return (await R.json()).result.data
				};
			var Ae = t("webpack/sharing/consume/default/react/react"),
				ye = t.n(Ae),
				Re = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				gt = t("webpack/sharing/consume/default/react-dom/react-dom"),
				tt = t("webpack/sharing/consume/default/react-redux/react-redux"),
				_t = t("../../../../node_modules/swr/core/dist/index.mjs"),
				it = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				Et = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Lt = t("../react/shims/focus-visible.js"),
				$e = t("../react/app/components/DeepLink/index.ts"),
				lt = t("../../../../node_modules/prop-types/index.js"),
				Ye = t.n(lt),
				Ze = t("../react/utils/translator.tsx"),
				ut = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				U = t("../../../dash/intl/intl-translations/src/index.ts"),
				ie = t("../../../../node_modules/query-string/query-string.js"),
				fe = t.n(ie),
				Ce = t("../react/common/actions/userActions.ts"),
				Le = t("../react/common/selectors/userSelectors.ts"),
				Ne = t("../react/utils/i18n.ts"),
				nt = t("../react/utils/bootstrap.ts");

			function st(R) {
				for (var W = 1; W < arguments.length; W++) {
					var J = arguments[W] != null ? Object(arguments[W]) : {},
						ae = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(J).filter(function(ge) {
						return Object.getOwnPropertyDescriptor(J, ge).enumerable
					})), ae.forEach(function(ge) {
						Tt(R, ge, J[ge])
					})
				}
				return R
			}

			function Tt(R, W, J) {
				return W = mt(W), W in R ? Object.defineProperty(R, W, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[W] = J, R
			}

			function mt(R) {
				var W = St(R, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function St(R, W) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ae = J.call(R, W || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(R)
			}
			let Ve = fe().parse(location.search);
			const Ot = R => {
					const W = (0, nt.$8)() ? [(0, U.Fy)(U.if.changes), (0, U.Fy)(U.if.common), (0, U.Fy)(U.if.navigation), (0, U.Fy)(U.if.overview), (0, U.Fy)(U.if.onboarding), (0, U.Fy)(U.if.invite), (0, U.Fy)(U.if.login), (0, U.Fy)(U.if.dns), (0, U.Fy)(U.n4.ssl_tls), (0, U.Fy)(U.if.message_inbox), (0, U.Fy)(U.if.welcome)] : [(0, U.Fy)(U.if.common), (0, U.Fy)(U.if.invite), (0, U.Fy)(U.if.login), (0, U.Fy)(U.if.onboarding)];
					Ve.lang ? kt(R) : Oe.Z.get(Ne.th) && wt(R, (0, Ne.Kd)());
					const J = async ae => (await Promise.all(W.map(we => we(ae)))).reduce((we, Ie) => st({}, we, Ie), {});
					return ye().createElement(ut.LocaleContext.Provider, {
						value: R.languagePreference
					}, ye().createElement(ut.I18nProvider, {
						translator: Ze.Vb,
						locale: R.languagePreference
					}, ye().createElement(ut.I18nLoader, {
						loadPhrases: J
					}, R.children)))
				},
				kt = async R => {
					let W = Ve.lang.substring(0, Ve.lang.length - 2) + Ve.lang.substring(Ve.lang.length - 2, Ve.lang.length).toUpperCase();
					if (!(0, N.v)(W)) {
						console.warn(`${W} is not a supported locale.`), delete Ve.lang, R.history.replace({
							search: fe().stringify(Ve)
						});
						return
					}(0, Ne.i_)(W), delete Ve.lang, wt(R, W), R.isAuthenticated || R.history.replace({
						search: fe().stringify(Ve)
					})
				}, wt = async (R, W) => {
					if (R.isAuthenticated) try {
						await R.setUserCommPreferences({
							"language-locale": W
						}, {
							hideErrorAlert: !0
						}), Oe.Z.remove(Ne.th), R.history.replace({
							search: fe().stringify(Ve)
						})
					} catch (J) {
						Oe.Z.set(Ne.th, !0), console.error(J)
					} else Oe.Z.set(Ne.th, !0)
				}, Mt = R => {
					const W = (0, Le.PR)(R);
					return {
						isAuthenticated: !!(W && W.id),
						languagePreference: (0, Ne.Kd)() || (0, N.r)(R)
					}
				}, It = {
					setUserCommPreferences: Ce.V_
				};
			var Rt = (0, Re.withRouter)((0, tt.connect)(Mt, It)(Ot));
			Ot.propTypes = {
				history: Ye().object,
				languagePreference: Ye().string.isRequired,
				children: Ye().node.isRequired,
				isAuthenticated: Ye().bool,
				setUserCommPreferences: Ye().func.isRequired
			};
			var ft = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				At = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let yt;
			const Nt = ({
				selectorPrefix: R = "c_"
			} = {}) => (yt || (yt = (0, At.Z)({
				dev: !1,
				selectorPrefix: R
			})), yt);
			var $t = t("../react/common/out.css"),
				Pt = t("../react/common/components/ModalManager.tsx"),
				xt = t("../react/app/components/ErrorBoundary.tsx"),
				ht = t("../react/common/actions/notificationsActions.ts");
			const vt = (t.g.bootstrap || {}).data || {};
			class d extends ye().Component {
				componentDidMount() {
					vt.messages && this.dispatchNotificationActions(vt.messages)
				}
				dispatchNotificationActions(W) {
					W.forEach(J => {
						const {
							type: ae,
							message: ge,
							persist: we
						} = J;
						["success", "info", "warn", "error"].includes(ae) && this.props.notifyAdd(ae, (0, Ze.ZP)(ge), {
							persist: !!we
						})
					})
				}
				render() {
					return null
				}
			}
			var H = (0, Re.withRouter)((0, tt.connect)(null, {
				notifyAdd: ht.add
			})(d));
			d.propTypes = {
				notifyAdd: Ye().func.isRequired
			};
			var ne = t("../react/app/redux/index.ts");

			function me() {
				var R;
				const W = (0, ne.p4)(Le.PR),
					J = (W == null || (R = W.email) === null || R === void 0 ? void 0 : R.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ae = (0, xe.Yc)();
				(0, Ae.useEffect)(() => {
					ae({
						userType: J
					})
				}, [J, ae])
			}
			var Se = t("../react/common/selectors/entitlementsSelectors.ts"),
				je = t("../react/common/selectors/accountSelectors.ts");
			const Qe = ["accountId", "is_ent"];

			function ze() {
				const R = (0, xe.f7)(),
					W = (0, Re.useHistory)(),
					J = (0, Z.uW)(W.location.pathname),
					ae = (0, xe.Yc)(),
					ge = (0, xe.O$)(),
					we = (0, ne.p4)(Se.u1),
					Ie = !we.isRequesting && !!we.data,
					Me = (0, ne.p4)(Se.p1),
					ot = (0, ne.p4)(je.Xu),
					Fe = (0, ne.p4)(je.uF),
					Vt = !ot.isRequesting && !!ot.data;
				(0, Ae.useEffect)(() => {
					if (J && Vt && Fe && Ie && J === Fe.account.id) {
						var Ct, Dt, pt;
						ae({
							accountId: Fe.account.id,
							is_ent: Me,
							is_free_account: !Me && !(Fe == null || (Ct = Fe.account.meta) === null || Ct === void 0 ? void 0 : Ct.has_business_zones) && !(Fe == null || (Dt = Fe.account.meta) === null || Dt === void 0 ? void 0 : Dt.has_pro_zones) && !(Fe == null || (pt = Fe.account.meta) === null || pt === void 0 ? void 0 : pt.has_enterprise_zones)
						})
					} else(!J || J in R && R.accountId !== J) && ge(Qe)
				}, [Vt, Fe, ae, ge, Ie, Me, J, R])
			}
			var Ge = t("../react/common/selectors/zoneSelectors.ts");

			function rt() {
				const R = (0, ne.p4)(Ge.nA),
					W = (0, xe.Yc)();
				(0, Ae.useEffect)(() => {
					var J;
					W({
						zone_id: R == null ? void 0 : R.id,
						zone_plan: R == null || (J = R.plan) === null || J === void 0 ? void 0 : J.legacy_id
					})
				}, [R, W])
			}
			const dt = () => (me(), ze(), rt(), null);
			var et = t("../react/app/components/Persistence/index.tsx"),
				Ke = t("../node_modules/@cloudflare/elements/es/index.js"),
				Bt = t("../react/app/components/LoadingSuspense.tsx");
			const jt = ye().lazy(() => Promise.all([t.e(16691), t.e(64484), t.e(12409), t.e(12174), t.e(1091), t.e(8612), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var Gt = () => ye().createElement(Bt.Z, null, ye().createElement(jt, null));
			const Wt = () => (Ae.useEffect(() => S, []), null);
			var en = t("../../../../node_modules/moment/moment.js"),
				Zt = t.n(en);
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
					const R = (0, ne.p4)(N.r);
					(0, Ae.useEffect)(() => {
						const W = tn(R);
						W !== Zt().locale() && Zt().locale(W), document.documentElement.lang = R
					}, [R])
				},
				rn = () => {
					(0, Ae.useEffect)(() => {
						async function R() {
							var W, J, ae, ge;
							let we;
							if (((W = window) === null || W === void 0 || (J = W.build) === null || J === void 0 ? void 0 : J.isPreviewDeploy) && ((ae = window) === null || ae === void 0 || (ge = ae.build) === null || ge === void 0 ? void 0 : ge.branch) !== "staging" && (we = "cookie"), !!we) try {
								const Ie = document.head.querySelector("link[rel=icon]");
								Ie && (Ie.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${we}.ico`)).default)
							} catch {}
						}
						R()
					}, [])
				};
			var on = t("../react/common/constants/constants.ts");
			const an = () => {
					var R;
					const W = (0, Re.useLocation)(),
						[J, ae] = (0, Ae.useState)(((R = window) === null || R === void 0 ? void 0 : R.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Ae.useEffect)(() => {
						const ge = fe().parse(W.search);
						if (ge.pt && Oe.Z.set(on.sJ, ge.pt), ge == null ? void 0 : ge.devPanel) {
							var we, Ie;
							(we = window) === null || we === void 0 || (Ie = we.localStorage) === null || Ie === void 0 || Ie.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ae(!0)
						}
					}, [W.search]), {
						devPanelEnabled: J
					}
				},
				sn = ({
					id: R,
					customDataLayer: W = [],
					dataLayerName: J = "dataLayer"
				}) => {
					const ae = `<iframe src="https://www.googletagmanager.com/ns.html?id=${R}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						ge = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${J}', '${R}')`,
						we = `
    window.${J} = window.${J} || [];
    window.${J}.push(${JSON.stringify(W)})
  `;
					return {
						iframe: ae,
						script: ge,
						dataLayerHTML: we
					}
				},
				cn = R => {
					const W = document.createElement("script");
					return W.innerHTML = R, W.async = !0, W
				},
				ln = R => {
					const W = document.createElement("noscript");
					return W.innerHTML = R, W
				},
				Ht = R => {
					const W = document.createElement("script");
					return W.innerHTML = R, W
				},
				Dn = ({
					dataLayer: R,
					dataLayerName: W
				}) => {
					if (window[W]) return window[W].push(R);
					const J = `
      window.${W} = window.${W} || [];
      window.${W}.push(${JSON.stringify(R)})`,
						ae = Ht(J);
					document.head.insertBefore(ae, document.head.childNodes[0])
				},
				un = ({
					containerId: R,
					customDataLayer: W,
					gtmFeatureFlag: J = !0
				}) => {
					(0, Ae.useEffect)(() => {
						(() => {
							if (!J) return null;
							const {
								iframe: ge,
								script: we,
								dataLayerHTML: Ie
							} = sn({
								id: R,
								customDataLayer: W
							});
							document.head.insertBefore(Ht(Ie), document.head.childNodes[0]), document.head.insertBefore(cn(we), document.head.childNodes[0]), document.body.insertBefore(ln(ge), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const dn = ({
				isDev: R,
				gtmFeatureFlag: W
			}) => {
				(0, Ae.useEffect)(() => {
					(() => {
						if (!W) return null;
						let ae;
						R ? ae = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ae = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const ge = document.createElement("script");
						ge.async = !0, ge.src = ae, document.head.insertBefore(ge, document.head.childNodes[0])
					})()
				}, [])
			};
			var pn = t("../react/utils/useDomainConnectRedirect.ts");
			const gn = "GTM-NDGPDFZ",
				mn = ye().lazy(() => Promise.all([t.e(16691), t.e(64484), t.e(12409), t.e(12174), t.e(1091), t.e(8612), t.e(51436), t.e(47386), t.e(7580), t.e(70618), t.e(26122), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(83276), t.e(91262), t.e(52215), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				fn = ye().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(1091), t.e(7580), t.e(91018), t.e(69088), t.e(91262), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var vn = ({
					userIsAuthed: R
				}) => {
					nn(), rn(), (0, pn.y)();
					const {
						devPanelEnabled: W
					} = an();
					return un({
						containerId: gn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), dn({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), ye().createElement(Ae.Suspense, {
						fallback: ye().createElement(Wt, null)
					}, ye().createElement(Re.Switch, null, !R && !0 && ye().createElement(Re.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, ye().createElement(fn, null)), ye().createElement(Re.Route, {
						render: () => ye().createElement(Ke.ZC, {
							minHeight: "100vh"
						}, ye().createElement(mn, null))
					})), W && ye().createElement(Gt, null))
				},
				zt = t("../../../../node_modules/yup/es/index.js"),
				_n = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => zt.Z_().email((0, Ze.ZP)("common.validation.email")).required((0, Ze.ZP)("common.validation.email")),
				cfPassword: () => zt.Z_().required((0, Ze.ZP)("common.validation.required"))
			};
			(0, _n.Yd)(Qt).forEach(R => {
				zt.kM(zt.Z_, R, Qt[R])
			});
			var En = t("../react/common/utils/startViewTransition.ts");
			const Xt = ye().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function yn() {
				const [R, W] = (0, Ae.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, Ae.useEffect)(() => {
					const J = window.matchMedia("(prefers-color-scheme: dark)"),
						ae = ge => {
							W(ge.matches ? "dark" : "light")
						};
					return J.addEventListener("change", ae), () => {
						J.removeEventListener("change", ae)
					}
				}, []), R
			}
			const hn = () => {
					const R = (0, nt.$8)(),
						[W, J] = (0, Ae.useState)(R ? Xt : ye().Fragment),
						ae = yn(),
						[ge, we] = (0, Ae.useState)((0, _.Yc)());
					(0, Ae.useEffect)(() => {
						(0, _.fF)(() => we((0, _.Yc)()))
					}, []);
					const Ie = Me => {
						we(Me), (0, En.o)(() => {
							(0, _.C8)(Me)
						}), document.cookie = `dark-mode=${Me};Path=/;Max-Age=31536000`, Me === "dark" || Me === "on" || Me === "system" && ae === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
					};
					return (0, Ae.useEffect)(() => {
						J(R ? Xt : ye().Fragment)
					}, [R]), (0, Ae.useEffect)(() => {
						const Me = () => Ie(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Me), () => {
							window.removeEventListener("storage", Me)
						}
					}, []), ye().createElement(Ae.Suspense, {
						fallback: null
					}, ye().createElement(tt.Provider, {
						store: (0, g.bh)()
					}, ye().createElement(Re.Router, {
						history: q
					}, ye().createElement(W, null, ye().createElement(ft.Z, {
						renderer: Nt()
					}, ye().createElement(Rt, null, ye().createElement(xt.S, {
						sentryTag: "Root"
					}, ye().createElement(_t.J$, {
						value: {
							fetcher: Me => fetch(Me).then(ot => ot.json())
						}
					}, ye().createElement(dt, null), ye().createElement(H, null), ye().createElement(et.Z_, {
						onDarkModeChangeCb: Ie
					}, ye().createElement($e.ZP, null, ye().createElement(vn, {
						userIsAuthed: R
					}))), ye().createElement(Pt.ZP, null), ye().createElement(it.F0, null)))))))))
				},
				bn = () => {
					(0, gt.render)(ye().createElement(hn, null), document.getElementById("react-app"))
				};
			var bt = t("../utils/initSparrow.ts"),
				Ut = t("../utils/zaraz.ts");
			const Cn = () => {
					const R = (0, Le.PR)((0, g.bh)().getState());
					Tn(), (0, bt.Ug)(), (0, Ut.bM)(), (R == null ? void 0 : R.id) && ce().setUserId(R == null ? void 0 : R.id), (0, bt.yV)(), !(0, bt.Wi)() && (0, bt.IM)(), R ? (0, Ut.yn)(R) : (0, Ut.Ro)()
				},
				Tn = () => {
					var R, W;
					(R = window) === null || R === void 0 || (W = R.OneTrust) === null || W === void 0 || W.OnConsentChanged(() => {
						const J = (0, Le.PR)((0, g.bh)().getState());
						(0, bt.Wi)() ? (ce().setEnabled(!0), (J == null ? void 0 : J.id) ? (ce().setUserId(J.id), (0, Ut.yn)(J)) : (0, Ut.Ro)(), (0, bt.yV)()) : (ce().setEnabled(!1), (0, bt.IM)())
					})
				};

			function On(R) {
				for (var W = 1; W < arguments.length; W++) {
					var J = arguments[W] != null ? Object(arguments[W]) : {},
						ae = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(J).filter(function(ge) {
						return Object.getOwnPropertyDescriptor(J, ge).enumerable
					})), ae.forEach(function(ge) {
						wn(R, ge, J[ge])
					})
				}
				return R
			}

			function wn(R, W, J) {
				return W = In(W), W in R ? Object.defineProperty(R, W, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[W] = J, R
			}

			function In(R) {
				var W = An(R, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function An(R, W) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ae = J.call(R, W || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)(R)
			}
			const Pn = "init",
				Jt = (R, W) => {
					s.$e(function(J) {
						J.setTag(Pn, W), s.Tb(R)
					}), k(R)
				},
				Kt = async (R, W) => {
					try {
						return await R(), !0
					} catch (J) {
						return Jt(J, W), !1
					}
				};
			(async () => {
				try {
					var R, W, J;
					t.g.build = On({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "a8556a052fbc3b11a82277880e20d26581b988ea",
						dashVersion: "33625057",
						env: "production",
						builtAt: 1748641707126,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, G.p)()
					}), Y();
					const ae = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => P(q),
						tag: "hashScroll"
					}, {
						fn: M.Z,
						tag: "styles"
					}, {
						fn: Ue,
						tag: "mfePreviewData"
					}];
					for (const ot of ae)
						if (!await Kt(ot.fn, ot.tag)) return;
					let ge;
					if (!await Kt(async () => {
							ge = await Be()
						}, "bootstrap")) return;
					const we = (0, g.bh)(),
						Ie = ((R = ge) === null || R === void 0 ? void 0 : R.data) || {};
					we.dispatch((0, o.mW)("user", Ie == null ? void 0 : Ie.user));
					const Me = (W = ge) === null || W === void 0 || (J = W.data) === null || J === void 0 ? void 0 : J.user;
					return t.g.bootstrap = ge, Me && Me.id && Ee(Me.id), !await Kt(X, "gates") || !await Kt(Cn, "tracking") ? void 0 : bn()
				} catch (ae) {
					Jt(ae, "global")
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
				i = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/userSelectors.ts"),
				l = t("../react/common/selectors/zoneSelectors.ts"),
				f = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/common/utils/isGuards.ts"),
				p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				v = t.n(p);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(g) {
					for (var a = 1; a < arguments.length; a++) {
						var m = arguments[a];
						for (var I in m) Object.prototype.hasOwnProperty.call(m, I) && (g[I] = m[I])
					}
					return g
				}, n.apply(this, arguments)
			}
			const s = g => {
				function a(m) {
					const I = (0, i.UM)(),
						P = (0, p.useHistory)(),
						C = (0, p.useLocation)(),
						_ = (0, p.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						O = (0, i.p4)(u.PR) || null,
						E = (0, i.p4)(l.nA) || null,
						T = (0, i.p4)(f.uF),
						L = T ? T.account : null;
					if (!_) return null;
					const {
						accountId: S,
						app: k,
						tab: M
					} = _.params, y = _.params.zoneName && ((0, c.v5)(_.params.zoneName) || _.params.zoneName.indexOf(".") > 0) ? _.params.zoneName : void 0;
					return r().createElement(g, n({
						dispatch: I,
						history: P,
						location: C,
						match: _,
						user: O,
						membership: S ? T : null,
						account: S ? L : null,
						accountId: S || null,
						zone: y ? E : null,
						zoneName: y || null,
						app: y ? k : null,
						tab: y ? M : null
					}, m))
				}
				return a.displayName = `withEntities(${o(g)})`, a
			};

			function o(g) {
				return g.displayName || g.name || "Component"
			}
			h.Z = s
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
					return O
				},
				Yt: function() {
					return C
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
				i = t("../react/utils/url.ts");
			const u = "projects table click",
				l = "click create application",
				f = "account home dev plat - product card click",
				c = "account home dev plat - empty state CTA click",
				p = "account home dev plat - view all projects click",
				v = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				s = "account home zero trust - analytics link click",
				o = "account home zero trust - product card click",
				g = "account home zero trust - plan pill click",
				a = "account home zero trust - plan fallback link click",
				m = {
					SPARROW_PROJECTS_TABLE_CLICK: u,
					SPARROW_CREATE_PROJECT_CLICK: l,
					SPARROW_PRODUCT_CARD_CLICK: f,
					SPARROW_EMPTY_STATE_CTA_CLICK: c,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: p,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: v,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: s,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: o,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: g,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: a
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
				C = () => {
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
				O = () => {
					r().sendEvent(c)
				},
				E = () => {
					r().sendEvent(p)
				},
				T = D => {
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
						href: (0, i.cm)(N)
					})
				},
				S = ({
					category: D,
					href: N
				}) => {
					r().sendEvent(s, {
						category: D,
						href: (0, i.cm)(N)
					})
				},
				k = ({
					category: D,
					product: N,
					href: x
				}) => {
					r().sendEvent(o, {
						category: D,
						product: N,
						href: (0, i.cm)(x)
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
					r().sendEvent(a)
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
					return o
				},
				WF: function() {
					return l
				},
				Wz: function() {
					return n
				},
				bk: function() {
					return c
				},
				fj: function() {
					return s
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
				i = (0, e.R)(r.ADD_SITE, g => ({
					payload: g
				})),
				u = (0, e.R)(r.RESOLVING_START),
				l = (0, e.R)(r.RESOLVING_COMPLETE),
				f = (0, e.R)(r.SELECT_ZONE, g => ({
					payload: g
				})),
				c = (0, e.R)(r.SELECT_ACCOUNT, g => ({
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
				s = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				o = (0, e.R)(r.SELECT_WORKER, g => ({
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
				l = "resolvedDeepLinkQueryParams",
				f = "add",
				c = "multiSkuProducts",
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
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../react/app/components/DeepLink/utils.ts"),
				l = t("../react/utils/bootstrap.ts"),
				f = t("../react/app/components/DeepLink/actions.ts"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(c);

			function v(y) {
				for (var D = 1; D < arguments.length; D++) {
					var N = arguments[D] != null ? Object(arguments[D]) : {},
						x = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(N).filter(function(G) {
						return Object.getOwnPropertyDescriptor(N, G).enumerable
					})), x.forEach(function(G) {
						n(y, G, N[G])
					})
				}
				return y
			}

			function n(y, D, N) {
				return D = s(D), D in y ? Object.defineProperty(y, D, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[D] = N, y
			}

			function s(y) {
				var D = o(y, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function o(y, D) {
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
						const G = this.resolvers.get(x);
						G && (G.endTime = Date.now(), this.resolvers.set(x, G))
					}), n(this, "resolverCancel", x => {
						this.resolverDone(x), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", x => {
						const G = "NO_ACTION",
							oe = {
								actionType: G,
								startTime: 0
							};
						return {
							start: (de = G) => {
								const se = this.resolvers.get(x);
								oe.actionType = de, oe.startTime = Date.now(), se && se.userActions.push(oe)
							},
							finish: (de = G) => {
								oe.actionType = de, oe.endTime = Date.now()
							},
							cancel: (de = G) => {
								oe.actionType = de, oe.endTime = Date.now(), this.resolverCancel(x)
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
								totalTime: a(this.startTime, this.endTime),
								totalCpuTime: a(this.startTime, this.endTime)
							},
							x = this.resolvers.size === 0 ? N : Array.from(this.resolvers.values()).reduce((G, oe) => {
								const de = a(oe.startTime, oe.endTime),
									se = oe.userActions.reduce((Q, z) => {
										const j = a(z.startTime, z.endTime);
										return {
											totalTime: Q.totalTime + j,
											actions: Q.actions.set(z.actionType, j)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									K = de - se.totalTime;
								return v({}, G, {
									totalTime: G.totalTime + de,
									totalUserActionsTime: G.totalUserActionsTime + se.totalTime,
									totalCpuTime: G.totalCpuTime + K,
									[`${oe.name}ResolverTotalTime`]: de,
									[`${oe.name}ResolverTotalCpuTime`]: K,
									[`${oe.name}ResolverTotalUserActionsTime`]: se.totalTime
								}, Array.from(se.actions.keys()).reduce((Q, z) => v({}, Q, {
									[`${oe.name}Resolver/${z}`]: se.actions.get(z)
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

			function a(y = Date.now(), D = Date.now()) {
				return (D - y) / 1e3
			}
			var m = t("../react/app/components/DeepLink/constants.ts"),
				I = t("../react/common/hooks/useCachedState.ts"),
				P = t("../react/common/hooks/usePrevious.ts");

			function C(y) {
				for (var D = 1; D < arguments.length; D++) {
					var N = arguments[D] != null ? Object(arguments[D]) : {},
						x = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(N).filter(function(G) {
						return Object.getOwnPropertyDescriptor(N, G).enumerable
					})), x.forEach(function(G) {
						_(y, G, N[G])
					})
				}
				return y
			}

			function _(y, D, N) {
				return D = O(D), D in y ? Object.defineProperty(y, D, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[D] = N, y
			}

			function O(y) {
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
						N = (0, i.useHistory)(),
						x = (0, P.Z)(N.location.pathname),
						[G, oe] = (0, e.useState)(!0),
						[de, se] = (0, I.j)(void 0, {
							key: m.Fj
						}),
						[K, Q] = (0, I.j)(void 0, {
							key: m.O5
						}),
						[z, j] = (0, I.j)(void 0, {
							key: m.s$
						}),
						A = (0, l.$8)();
					let w = new URLSearchParams(N.location.search);
					const F = (0, u.mL)(N.location.pathname, w);
					let te = null,
						q = null;
					if (w.has(m.Tc) && w.delete(m.Tc), w.get(m.BV)) te = w.get(m.BV), N.location.hash && (q = N.location.hash);
					else if (de) {
						const Z = new URLSearchParams(de);
						Z.get(m.BV) && (te = Z.get(m.BV), w = Z)
					} else F && (w.set(m.BV, F), te = F);
					if (te && m._h.test(te)) {
						const Z = w.getAll(m.Kt),
							B = JSON.stringify(Z);
						Z.length && B !== z && j(B), w.has(m.Tc) && w.delete(m.Tc), w.delete(m.Kt)
					}!A && de === void 0 && te && se(w.toString());
					const re = async () => {
						try {
							if ((0, u.I3)(te) && A) {
								de && se(void 0), D.dispatch((0, f.r4)()), oe(!0), te && te !== K && Q(te);
								const Z = await (0, u.py)(te, oe, D, N, x, new g(te, F ? `${N.location.pathname}${N.location.search}` : void 0));
								w.delete(m.BV);
								const B = w.toString();
								N.replace(C({}, N.location, {
									pathname: Z,
									search: B
								}, q ? {
									hash: q
								} : {})), D.dispatch((0, f.WF)())
							}
						} catch (Z) {
							D.dispatch((0, f.WF)()), console.error(Z)
						} finally {
							oe(!1)
						}
					};
					return (0, e.useEffect)(() => {
						re()
					}, [N.location.pathname, N.location.search]), (G || (0, u.I3)(te)) && A ? null : y
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
				i = t("../react/app/components/DeepLink/actions.ts");
			const u = null,
				l = r().from({
					lastAction: u,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function f(c = l, p) {
				if (p.type === i.MF.RESOLVING_COMPLETE) return l;
				if (p.type === i.MF.RESOLVING_START) return c.set("isResolving", !0);
				if (c.isResolving) {
					if (p.type === i.MF.RESOLVING_COMPLETE) return c.set("isResolving", !1);
					if (p.type === i.MF.SET_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", p.accountIds);
					if (p.type === i.MF.DELETE_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", void 0);
					{
						let v = c;
						try {
							v = c.set("lastAction", p)
						} catch {
							v = c.set("lastAction", {
								type: p.type
							})
						}
						return v
					}
				} else return c
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/app/components/DeepLink/utils.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				I3: function() {
					return v
				},
				X1: function() {
					return c
				},
				mL: function() {
					return a
				},
				py: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../react/app/components/DeepLink/reducer.ts"),
				i = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/app/components/DeepLink/constants.ts"),
				l = t("../react/common/validators/index.js"),
				f = t("../react/common/utils/isGuards.ts");
			const c = m => (0, l.Lb)(m) && (m.split(".").length > 1 || (0, f.v5)(m)),
				p = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				v = m => typeof m == "string" && m.startsWith("/"),
				n = (m, I) => P => new Promise((C, _) => {
					I.start();
					const O = m.subscribe(() => {
						const E = (0, i.yI)(m.getState());
						E === r.E ? (I.cancel(), O(), _("DeepLink: waitForAction out of context.")) : P(E) && (I.finish(E.type), O(), C(E))
					})
				}),
				s = (m, I, P) => (C, _) => new Promise((O, E) => {
					P.start();
					const T = I.location.pathname;
					C = new URL(C, window.location.href).pathname, T !== C && (P.cancel(), E(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${C}", but on "${T}". You need to redirect to "${C}", and unblockRouter in your Resolver, before you use this function.`));
					const L = m.subscribe(() => {
						const S = (0, i.yI)(m.getState()),
							k = I.location.pathname,
							y = new URLSearchParams(I.location.search).get(u.BV);
						(k !== C || !!y) && (P.cancel(), L(), E(`DeepLink: waitForPageAction user navigated away from "${C}" to "${k}${y?I.location.search:""}"`)), S === r.E ? (P.cancel(), L(), E("DeepLink: waitForPageAction out of context.")) : _(S) && (P.finish(S.type), L(), O(S))
					})
				});

			function o(m) {
				const I = [],
					P = m.split("?")[0].split("/");
				for (let C of P) C.length !== 0 && (C.startsWith(":") ? I.push({
					value: C.substring(1),
					type: "dynamic"
				}) : I.push({
					value: C,
					type: "static"
				}));
				return I
			}
			async function g(m, I, P, C, _, O) {
				O.start();
				const E = o(m),
					L = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					S = {};
				let k = "";
				for (const [M, y] of E.entries())
					if (y.type === "static") k = [k, y.value].join("/");
					else if (y.type === "dynamic" && p.is(y.value) && y.value in L) {
					O.resolverStart(y.value);
					const D = await L[y.value]({
						deepLink: m,
						blockRouter: () => I(!0),
						unblockRouter: () => I(!1),
						routerHistory: C,
						resolvedValues: S,
						store: P,
						referringRoute: _,
						uri: {
							currentPartIdx: M,
							parts: E
						},
						waitForAction: n(P, O.createUserActionTracker(y.value)),
						waitForPageAction: s(P, C, O.createUserActionTracker(y.value))
					});
					O.resolverDone(y.value), k = [k, D].join("/"), S[y.value] = D
				} else throw O.cancel(), new Error(`DeepLink: Resolver with name '${y.value}' is not supported.`);
				return O.done(), k
			}

			function a(m, I) {
				const P = ":account",
					C = ":zone",
					_ = I.get("zone");
				if (_) return I.delete("zone"), `/${P}/${C}/${_}`;
				const O = I.get("account");
				if (O) return I.delete("account"), `/${P}/${O}`;
				if (m === "/overview") return `/${P}/${C}`;
				const E = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const T of E) {
					const L = T.length;
					if (m.startsWith(T) && (m.length === L || m[L] === "/")) return `/${P}/${C}${m}`
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
				i = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				u = t("../react/app/components/SomethingWrong.jsx"),
				l = t("../utils/sentry/lastSentEventId.ts"),
				f = t("../react/utils/zaraz.ts"),
				c = t("../react/utils/url.ts"),
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				v = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(s),
				g = t("../react/common/components/Page.tsx"),
				a = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function m() {
				return (0, e.useEffect)(() => {
					o().sendEvent("new page available refresh cta")
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
					src: a,
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
				children: C,
				fallbackComponent: _
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
					var T;
					if (_) return _;
					const L = l.e.getEventId() || E;
					return (O == null || (T = O.message) === null || T === void 0 ? void 0 : T.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(m, null)) : r().createElement(u.Z, {
						type: "page",
						error: O,
						eventId: L,
						sentryTag: P
					})
				}
			}, C)
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
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(c),
				v = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				s = t("../react/utils/translator.tsx"),
				o = t("../../../../node_modules/moment/moment.js"),
				g = t.n(o);
			const a = () => {
					const A = g()().format("YYYY"),
						w = F => {
							p().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: F
							})
						};
					return r().createElement(m, {
						marginTop: "auto"
					}, r().createElement(I, null, r().createElement(P, null, r().createElement(C, null, "\xA9 ", A, " Cloudflare, Inc."), r().createElement(C, null, r().createElement(_, null, r().createElement(O, {
						showOnDeskTop: !1
					}, r().createElement(E, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => w("Support")
					}, r().createElement(s.cC, {
						id: "common.support"
					}))), r().createElement(O, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => w("Privacy Policy")
					}, r().createElement(s.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(O, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => w("Terms of Use")
					}, r().createElement(s.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(O, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => w("Cookie Preferences")
					}, r().createElement(s.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(O, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => w("Trademark")
					}, r().createElement(s.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(_, null, r().createElement(O, null, r().createElement(E, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => w("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(s.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				m = (0, l.createComponent)(({
					theme: A,
					marginTop: w
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: w
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
				C = (0, l.createComponent)(({
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
				O = (0, l.createComponent)(({
					showOnDeskTop: A = !0,
					theme: w
				}) => ({
					color: w.colors.white,
					fontSize: w.fontSizes[1],
					height: "20px",
					display: A ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: w.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: w.space[3],
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
			var T = a,
				L = t("../react/pages/welcome/routes.ts"),
				S = t("../react/utils/cookiePreferences.ts"),
				k = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				y = () => {
					const [A, w] = (0, e.useState)(!1), F = (0, S.wV)(), te = () => {
						w(!0)
					}, q = () => {
						w(!1)
					}, re = F && F === "US" ? (0, s.ZP)("footer.cpra_cta.privacy_choices") : (0, s.ZP)("footer.cpra_cta.cookie_preferences"), Z = {
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
						style: Z,
						onMouseEnter: te,
						onMouseLeave: q
					}, r().createElement(u.Ei, {
						height: 15,
						src: k,
						mr: 2,
						alt: re
					}), re)
				};

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(A) {
					for (var w = 1; w < arguments.length; w++) {
						var F = arguments[w];
						for (var te in F) Object.prototype.hasOwnProperty.call(F, te) && (A[te] = F[te])
					}
					return A
				}, D.apply(this, arguments)
			}

			function N(A, w) {
				if (A == null) return {};
				var F = x(A, w),
					te, q;
				if (Object.getOwnPropertySymbols) {
					var re = Object.getOwnPropertySymbols(A);
					for (q = 0; q < re.length; q++) te = re[q], !(w.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call(A, te) || (F[te] = A[te]))
				}
				return F
			}

			function x(A, w) {
				if (A == null) return {};
				var F = {},
					te = Object.keys(A),
					q, re;
				for (re = 0; re < te.length; re++) q = te[re], !(w.indexOf(q) >= 0) && (F[q] = A[q]);
				return F
			}
			const G = (0, l.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,f.Yc)()?f.rS.colors.orange[6]:f.rS.colors.blue[4]}`
					}
				}), u.A),
				oe = (0, l.createStyledComponent)(({
					theme: A
				}) => ({
					color: A.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, v.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: A.colors.gray[4]
					}
				}), u.A),
				de = A => {
					let {
						onClick: w
					} = A, F = N(A, ["onClick"]);
					return React.createElement(G, D({
						onClick: te => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: F.href
							}), w && w(te)
						}
					}, F))
				},
				se = A => {
					let {
						children: w,
						target: F,
						rel: te
					} = A, q = N(A, ["children", "target", "rel"]);
					return r().createElement(oe, D({
						target: F || "_blank",
						rel: te || "noopener noreferrer"
					}, q), w)
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
				const A = [L.d.root.pattern].some(F => (0, i.matchPath)(location.pathname, {
					path: F
				}));
				if ((0, n.PP)()) return r().createElement(T, null);
				if (A) return null;
				const w = new Date().getFullYear();
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
				}, r().createElement(Q, null, r().createElement(K, null, r().createElement(u.Li, null, r().createElement(se, {
					href: "https://support.cloudflare.com"
				}, (0, s.ZP)("common.support"))), r().createElement(u.Li, null, r().createElement(se, {
					href: "https://www.cloudflarestatus.com"
				}, r().createElement(u.Dr, {
					textTransform: "capitalize"
				}, (0, s.ZP)("footer.system_status")))), r().createElement(u.Li, null, r().createElement(se, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, s.ZP)("footer.careers"))), r().createElement(u.Li, null, r().createElement(se, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, s.ZP)("footer.tos_reduced"))), r().createElement(u.Li, null, r().createElement(se, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, s.ZP)("footer.security_issues"))), r().createElement(u.Li, null, r().createElement(se, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, s.ZP)("footer.privacy_policy"))), r().createElement(u.Li, null, r().createElement(y, null)), r().createElement(u.Li, null, r().createElement(u.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", w, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function($, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/components/ErrorStatus.tsx"),
				u = t("../react/utils/translator.tsx");
			const l = f => r().createElement(i.Z, f, (0, u.ZP)("error.forbidden"));
			h.Z = l
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				S: function() {
					return I
				},
				Z: function() {
					return re
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../node_modules/@cloudflare/component-button/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				v = t.n(p),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				s = t("../react/common/components/AccessControl/index.js"),
				o = t("../react/common/components/ButtonWithDropdown.tsx"),
				g = t("../react/common/components/Dropdown/index.tsx"),
				a = t("../react/utils/translator.tsx"),
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
					const Z = (0, m.Z)("super-add-button-copy-change"),
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
					switch (Z) {
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
				C = [{
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

			function O(Z) {
				for (var B = 1; B < arguments.length; B++) {
					var V = arguments[B] != null ? Object(arguments[B]) : {},
						ee = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(V).filter(function(le) {
						return Object.getOwnPropertyDescriptor(V, le).enumerable
					})), ee.forEach(function(le) {
						E(Z, le, V[le])
					})
				}
				return Z
			}

			function E(Z, B, V) {
				return B = T(B), B in Z ? Object.defineProperty(Z, B, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[B] = V, Z
			}

			function T(Z) {
				var B = L(Z, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function L(Z, B) {
				if (typeof Z != "object" || Z === null) return Z;
				var V = Z[Symbol.toPrimitive];
				if (V !== void 0) {
					var ee = V.call(Z, B || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(Z)
			}

			function S() {
				return S = Object.assign ? Object.assign.bind() : function(Z) {
					for (var B = 1; B < arguments.length; B++) {
						var V = arguments[B];
						for (var ee in V) Object.prototype.hasOwnProperty.call(V, ee) && (Z[ee] = V[ee])
					}
					return Z
				}, S.apply(this, arguments)
			}

			function k(Z, B) {
				if (Z == null) return {};
				var V = M(Z, B),
					ee, le;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(Z);
					for (le = 0; le < pe.length; le++) ee = pe[le], !(B.indexOf(ee) >= 0) && (!Object.prototype.propertyIsEnumerable.call(Z, ee) || (V[ee] = Z[ee]))
				}
				return V
			}

			function M(Z, B) {
				if (Z == null) return {};
				var V = {},
					ee = Object.keys(Z),
					le, pe;
				for (pe = 0; pe < ee.length; pe++) le = ee[pe], !(B.indexOf(le) >= 0) && (V[le] = Z[le]);
				return V
			}
			const y = Z => {
					let {
						title: B,
						trackingEvent: V,
						icon: ee,
						url: le,
						description: pe,
						disabled: ce
					} = Z, _e = k(Z, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(D, S({
						to: !ce && le || "#",
						"aria-disabled": ce,
						onClick: () => {
							v().sendEvent(V, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, _e), r().createElement(u.ZC, {
						display: "flex"
					}, r().createElement(i.J, {
						type: ee,
						size: 24,
						mr: 2,
						mt: 1
					}), r().createElement(u.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, r().createElement(u.ZC, {
						fontSize: 3
					}, r().createElement(a.cC, B)), r().createElement(u.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, r().createElement(a.cC, pe)))))
				},
				D = (0, n.createStyledComponent)(({
					theme: Z
				}) => {
					const B = {
						cursor: "pointer",
						backgroundColor: (0, f.Yc)() ? Z.colors.gray[8] : Z.colors.gray[9],
						color: Z.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: Z.colors.background,
						color: Z.colors.gray[2],
						fontSize: Z.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': B,
						':focus-within:not([aria-disabled="true"])': O({}, B, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: Z.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, _.Link);
			var N = y;

			function x() {
				return x = Object.assign ? Object.assign.bind() : function(Z) {
					for (var B = 1; B < arguments.length; B++) {
						var V = arguments[B];
						for (var ee in V) Object.prototype.hasOwnProperty.call(V, ee) && (Z[ee] = V[ee])
					}
					return Z
				}, x.apply(this, arguments)
			}

			function G(Z) {
				for (var B = 1; B < arguments.length; B++) {
					var V = arguments[B] != null ? Object(arguments[B]) : {},
						ee = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(V).filter(function(le) {
						return Object.getOwnPropertyDescriptor(V, le).enumerable
					})), ee.forEach(function(le) {
						oe(Z, le, V[le])
					})
				}
				return Z
			}

			function oe(Z, B, V) {
				return B = de(B), B in Z ? Object.defineProperty(Z, B, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[B] = V, Z
			}

			function de(Z) {
				var B = se(Z, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function se(Z, B) {
				if (typeof Z != "object" || Z === null) return Z;
				var V = Z[Symbol.toPrimitive];
				if (V !== void 0) {
					var ee = V.call(Z, B || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(Z)
			}

			function K(Z, B) {
				if (Z == null) return {};
				var V = Q(Z, B),
					ee, le;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(Z);
					for (le = 0; le < pe.length; le++) ee = pe[le], !(B.indexOf(ee) >= 0) && (!Object.prototype.propertyIsEnumerable.call(Z, ee) || (V[ee] = Z[ee]))
				}
				return V
			}

			function Q(Z, B) {
				if (Z == null) return {};
				var V = {},
					ee = Object.keys(Z),
					le, pe;
				for (pe = 0; pe < ee.length; pe++) le = ee[pe], !(B.indexOf(le) >= 0) && (V[le] = Z[le]);
				return V
			}
			const z = "GLOBAL_ADD_DROPDOWN",
				j = (0, n.createStyledComponent)(({
					theme: Z
				}) => ({
					"background-color": Z.colors.blue[5]
				}), l.zx),
				A = ({
					disableProducts: Z
				}) => {
					const B = P();
					return (0, e.useEffect)(() => (v().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						v().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), r().createElement(o.v2, {
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
						const ee = V || {},
							{
								disableOn: le,
								permissionCheck: pe
							} = ee,
							ce = K(ee, ["disableOn", "permissionCheck"]),
							_e = le && Z[le],
							be = G({}, ce, {
								disabled: _e
							});
						return pe ? r().createElement(s.Z, {
							key: V.title.id,
							edit: pe
						}, ({
							isEditable: Te
						}) => Te && r().createElement(N, be)) : r().createElement(N, x({
							key: V.url
						}, be))
					}))
				},
				w = ({
					disableProducts: Z,
					topNavType: B
				}) => {
					const V = () => (0, c.tq)() || B === "icon-only" ? r().createElement(u.ZC, {
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
					}, r().createElement(r().Fragment, null, r().createElement(i.J, {
						label: "plus",
						type: "plus"
					}), " ", r().createElement(a.cC, {
						id: "common.add"
					}))) : r().createElement(l.zx, {
						type: "primary",
						mr: 2
					}, r().createElement(a.cC, {
						id: "common.add"
					}), " ", r().createElement(i.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return r().createElement(F, {
						role: "group",
						"data-testid": z
					}, r().createElement(g.Lt, {
						trigger: B === "baseline" ? r().createElement(te, null, r().createElement(i.J, {
							label: "plus",
							type: "plus"
						}), !(0, c.tq)() && r().createElement(r().Fragment, null, r().createElement(a.cC, {
							id: "common.add"
						}), " ", r().createElement(i.J, {
							label: "arrow",
							type: "caret-down"
						}))) : V(),
						menu: r().createElement(A, {
							disableProducts: Z
						})
					}))
				},
				F = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				te = (0, n.createStyledComponent)(({
					theme: Z
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: Z.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, f.Yc)() ? Z.colors.gray[1] : Z.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, f.Yc)() ? Z.colors.gray[8] : Z.colors.gray[9]
					}
				}), u.zx);
			var q = w,
				re = q
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
				i = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../react/utils/translator.tsx"),
				f = t("../react/app/components/ErrorStatus.tsx"),
				c = t("../react/common/components/EmptyPage.jsx"),
				p = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const v = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(v))
				}, [])
			}

			function s(P) {
				useEventListener(v, () => {
					window.setTimeout(P, 0)
				}, {
					target: window
				})
			}

			function o(...P) {
				const [C, _] = P;
				React.useLayoutEffect(C, _), s(C)
			}

			function g(P) {
				const [C, _] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const O = window.setTimeout(() => _(!0), P);
					return () => window.clearTimeout(O)
				}, []), C
			}
			const a = ({
				loadingTimeout: P = 1e3,
				stillLoadingTimeout: C = 9e3
			}) => {
				const _ = g(P),
					O = g(C);
				if (n(), !_ && !O) return r().createElement(c.Z, null);
				const E = O ? r().createElement(l.cC, {
					id: "common.still_loading"
				}) : _ ? r().createElement(l.cC, {
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
			var I = ({
				children: P
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(a, null)
			}, P)
		},
		"../react/app/components/Persistence/api.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				C8: function() {
					return p
				},
				Mn: function() {
					return o
				},
				Sp: function() {
					return s
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
			const i = "/persistence/user",
				u = async () => {
					try {
						return await (await e.get(i, {
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
					} catch (a) {
						console.error(a)
					}
				}, f = async (g, a) => {
					try {
						return await (await e.post(`${i}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: g,
								accountId: a
							}),
							hideErrorAlert: !0
						})).body
					} catch (m) {
						return console.error(m), []
					}
				}, c = async (g, a) => {
					try {
						return await http.post(`/accounts/${g}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: a
							}),
							hideErrorAlert: !0
						}), !0
					} catch (m) {
						return console.error(m), !1
					}
				}, p = async g => {
					try {
						return await (await e.post(i, {
							body: JSON.stringify({
								darkMode: g
							})
						})).body
					} catch (a) {
						console.error(a)
					}
				}, v = async g => {
					try {
						return await (await e.post(`${i}/recents`, {
							body: JSON.stringify(g),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, n = async g => {
					try {
						return await (await e.post(`${i}/viewed-changes`, {
							body: JSON.stringify(g),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						throw console.error(a), a
					}
				}, s = async g => {
					try {
						return await (await e.post(i + "/flags", {
							body: JSON.stringify(g)
						})).body
					} catch (a) {
						throw console.error(a), a
					}
				}, o = async (g, a) => {
					try {
						return await (await e.post(`${i}/dismissed-tasks`, {
							body: JSON.stringify({
								name: g,
								accountId: a
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
				i = t("../react/app/components/Persistence/index.tsx");
			const u = () => (0, e.useContext)(i.lp)
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
					return O.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/redux/index.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(u),
				f = t("../react/utils/bootstrap.ts"),
				c = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/app/components/Persistence/api.ts");
			const v = 10;
			var n = t("../react/common/hooks/useActiveState.ts");

			function s(z) {
				for (var j = 1; j < arguments.length; j++) {
					var A = arguments[j] != null ? Object(arguments[j]) : {},
						w = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(A).filter(function(F) {
						return Object.getOwnPropertyDescriptor(A, F).enumerable
					})), w.forEach(function(F) {
						o(z, F, A[F])
					})
				}
				return z
			}

			function o(z, j, A) {
				return j = g(j), j in z ? Object.defineProperty(z, j, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[j] = A, z
			}

			function g(z) {
				var j = a(z, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function a(z, j) {
				if (typeof z != "object" || z === null) return z;
				var A = z[Symbol.toPrimitive];
				if (A !== void 0) {
					var w = A.call(z, j || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(z)
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
				I = s({}, m, {
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
				C = P.Consumer,
				_ = ({
					children: z,
					onDarkModeChangeCb: j
				}) => {
					const [A, w] = (0, e.useState)(m), [F, te] = (0, e.useState)(I.isLoading), [q, re] = (0, e.useState)(!1), Z = (0, f.$8)(), B = (0, i.p4)(ce => (0, c.wH)(ce)), [, V] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						Z ? (0, p.yl)().then(ce => {
							if (ce) {
								var _e;
								w(ce), V(ce == null || (_e = ce.flags) === null || _e === void 0 ? void 0 : _e.hasEnabledSecurityNavigation), l().identify({
									hasEnabledSecurityNavigation: ce.flags.hasEnabledSecurityNavigation
								}), j(ce.darkMode)
							}
						}).finally(() => te(!1)) : te(!1)
					}, [Z]);
					const ee = (ce, _e) => !!A.favorites.find(be => be.type === "zone" && be.name === ce && be.accountId === _e),
						le = v - A.favorites.length,
						pe = ce => A.favorites.filter(be => be.type === "zone" && be.accountId === ce).length < v;
					return r().createElement(P.Provider, {
						value: s({}, A, {
							isLoading: F,
							remainingStarSlots: le,
							isUpdatingFlags: q,
							actions: {
								canAccountStarZone: pe,
								isZoneStarred: ee,
								starZone: async (ce, _e) => {
									var be;
									const Te = !ee(ce, _e),
										Pe = pe(_e);
									if (Te && !Pe) {
										console.log("can not star zone - account is at limit");
										return
									}
									const ve = await (0, p.lt)(ce, _e);
									l().sendEvent("click star zone", {
										isStarring: Te,
										totalStarredZones: ve.filter(De => De.accountId === _e && De.type === "zone").length,
										totalZones: B == null || (be = B.paginationData) === null || be === void 0 ? void 0 : be.info.total_count
									}), w(s({}, A, {
										favorites: ve
									}))
								},
								toggleSecurityNavigation: async ce => {
									re(!0), await (0, p.Sp)({
										hasEnabledSecurityNavigation: ce
									}), l().identify({
										hasEnabledSecurityNavigation: ce
									}), re(!1), V(ce), w(s({}, A, {
										flags: {
											hasEnabledSecurityNavigation: ce
										}
									}))
								},
								setDarkMode: async ce => {
									const _e = await (0, p.C8)(ce);
									w(_e), j(_e.darkMode)
								},
								logRouteVisited: async ce => {
									var _e;
									const be = await (0, p.n)(ce);
									w((_e = be) !== null && _e !== void 0 ? _e : s({}, A))
								},
								viewChange: async ce => {
									const _e = await (0, p.m6)(ce);
									w(s({}, A, {
										viewedChanges: _e
									}))
								},
								dismissTask: async (ce, _e) => {
									const be = await (0, p.Mn)(ce, _e);
									w(s({}, A, {
										dismissedTasks: be
									}))
								}
							}
						})
					}, z)
				};
			var O = t("../react/app/components/Persistence/hooks.ts"),
				E = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				T = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(z) {
					for (var j = 1; j < arguments.length; j++) {
						var A = arguments[j];
						for (var w in A) Object.prototype.hasOwnProperty.call(A, w) && (z[w] = A[w])
					}
					return z
				}, L.apply(this, arguments)
			}

			function S(z, j) {
				if (z == null) return {};
				var A = k(z, j),
					w, F;
				if (Object.getOwnPropertySymbols) {
					var te = Object.getOwnPropertySymbols(z);
					for (F = 0; F < te.length; F++) w = te[F], !(j.indexOf(w) >= 0) && (!Object.prototype.propertyIsEnumerable.call(z, w) || (A[w] = z[w]))
				}
				return A
			}

			function k(z, j) {
				if (z == null) return {};
				var A = {},
					w = Object.keys(z),
					F, te;
				for (te = 0; te < w.length; te++) F = w[te], !(j.indexOf(F) >= 0) && (A[F] = z[F]);
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
			var D = z => {
					let {
						isStarred: j,
						size: A = 16
					} = z, w = S(z, ["isStarred", "size"]);
					const F = M[(0, E.Yc)() ? "dark" : "light"];
					return r().createElement(T.J, L({
						type: j ? "star" : "star-outline",
						color: j ? F.gold : F.gray,
						size: A
					}, w))
				},
				N = t("../node_modules/@cloudflare/elements/es/index.js");

			function x(z) {
				for (var j = 1; j < arguments.length; j++) {
					var A = arguments[j] != null ? Object(arguments[j]) : {},
						w = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(A).filter(function(F) {
						return Object.getOwnPropertyDescriptor(A, F).enumerable
					})), w.forEach(function(F) {
						G(z, F, A[F])
					})
				}
				return z
			}

			function G(z, j, A) {
				return j = oe(j), j in z ? Object.defineProperty(z, j, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[j] = A, z
			}

			function oe(z) {
				var j = de(z, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function de(z, j) {
				if (typeof z != "object" || z === null) return z;
				var A = z[Symbol.toPrimitive];
				if (A !== void 0) {
					var w = A.call(z, j || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(z)
			}
			const se = {
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
				featurePreview: z = !1,
				isStarred: j,
				onClickFn: A,
				isDisabled: w,
				testId: F,
				buttonText: te,
				size: q = "large",
				variant: re = "pill"
			}, Z) => {
				const [B, V] = (0, e.useState)(!1), ee = se[(0, E.Yc)() ? "dark" : "light"][j && !z ? "active" : "default"], le = x({}, q === "large" && {
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
				}), pe = {
					pill: "50vh",
					button: 4
				};
				return r().createElement(N.zx, {
					onMouseEnter: () => V(!0),
					onMouseLeave: () => V(!1),
					innerRef: Z,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: le.paddingRight,
					gap: 1,
					pl: le.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: pe[re],
					border: "1px solid",
					cursor: z || w ? "default" : "pointer",
					backgroundColor: B ? ee.bgHover : ee.bg,
					color: ee.text,
					borderColor: ee.border,
					onClick: A,
					opacity: w ? .5 : 1,
					disabled: w,
					fontSize: le.fontSize,
					height: le.height,
					"data-testid": F
				}, r().createElement(D, {
					isStarred: z ? !1 : j,
					size: le.starIconSize
				}), te)
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
					return T
				},
				gw: function() {
					return k
				},
				hv: function() {
					return a
				},
				iY: function() {
					return s
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
					return o
				},
				zJ: function() {
					return O
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/utils/zoneLevelAccess.ts"),
				f = t("../react/pages/stream/selectors.ts"),
				c = t("../react/pages/home/domain-registration/selectors.ts"),
				p = t("../react/pages/images/selectors.ts"),
				v = t("../react/pages/r2/selectors.ts");
			const n = y => !!(0, l.b)(y),
				s = y => n(y) ? (0, e.hT)(y) : !0,
				o = (y, D, N, x = "read") => {
					const G = (0, i.nA)(y);
					return n(y) ? (0, e.WL)(y, (0, e.W9)(N, e.ZZ[x]), (0, e.j)(G == null ? void 0 : G.id)) : (0, u.Yj)(y)(D)[x]
				},
				g = (y, D, N, x = "read") => {
					const G = (0, i.nA)(y),
						oe = e.zs.includes(N);
					return n(y) ? (0, e.WL)(y, oe ? N : (0, e.my)(N, e.ZZ[x === "edit" ? "update" : x]), (0, e.j)(G == null ? void 0 : G.id)) : (0, u.Yj)(y)(D)[x === "update" ? "edit" : x]
				},
				a = y => !!(0, f._Q)(y),
				m = y => (0, p.pT)(y),
				I = y => (0, p.pT)(y) && (0, p.GH)(y),
				P = y => sourcingKitEnabledSelector(y),
				C = y => !!r2EnabledSelector(y),
				_ = y => (0, v.Mv)(y),
				O = y => (0, r.$f)(y, "rulesets.magic_transit_allowed"),
				E = y => (0, r.$f)(y, "flowtrackd.magic_custom_config_allowed"),
				T = y => (0, r.$f)(y, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				L = y => (0, u.Le)(y, "ddos_protection", "l4_rulesets"),
				S = y => hasAccountEntitlements(y, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				k = y => (0, c.HO)(y),
				M = y => !(0, r.yD)(y) && !!g(y, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function($, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(i),
				l = t("../../../../node_modules/prop-types/index.js"),
				f = t.n(l),
				c = t("webpack/sharing/consume/default/react-redux/react-redux"),
				p = t.n(c),
				v = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(v),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				o = t("../node_modules/@cloudflare/component-button/es/index.js"),
				g = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				a = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				m = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				I = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				P = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				C = t.n(P),
				_ = t("../react/common/actions/membershipActions.ts"),
				O = t("../react/utils/url.ts"),
				E = t("../react/app/components/Footer.tsx");

			function T(K) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var z = arguments[Q] != null ? Object(arguments[Q]) : {},
						j = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(z).filter(function(A) {
						return Object.getOwnPropertyDescriptor(z, A).enumerable
					})), j.forEach(function(A) {
						L(K, A, z[A])
					})
				}
				return K
			}

			function L(K, Q, z) {
				return Q = S(Q), Q in K ? Object.defineProperty(K, Q, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[Q] = z, K
			}

			function S(K) {
				var Q = k(K, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function k(K, Q) {
				if (typeof K != "object" || K === null) return K;
				var z = K[Symbol.toPrimitive];
				if (z !== void 0) {
					var j = z.call(K, Q || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(K)
			}
			const M = (0, s.createComponent)(({
					type: K
				}) => ({
					height: K !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				y = (0, s.createComponent)(({
					theme: K,
					margin: Q,
					size: z = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: K.colors.gray[3],
					height: Q ? "auto" : "100%",
					padding: Q ? 0 : K.space[z > 1 ? z - 2 : 0],
					margin: Q,
					justifyContent: "center",
					alignItems: "center"
				})),
				D = (0, s.createComponent)(() => ({
					textAlign: "left"
				})),
				N = (0, s.createComponent)(() => ({
					textAlign: "right"
				})),
				x = (0, s.createComponent)(({
					theme: K
				}) => ({
					fontSize: K.fontSizes[6]
				})),
				G = (0, s.createComponent)(({
					theme: K
				}) => ({
					fontSize: K.fontSizes[4]
				})),
				oe = (0, s.createComponent)(({
					theme: K
				}) => ({
					fontSize: K.fontSizes[3]
				})),
				de = (0, s.createComponent)(({
					theme: K
				}) => ({
					width: "100%",
					height: 125,
					marginTop: K.space[4],
					padding: K.space[2]
				}), "textarea");
			class se extends r().Component {
				constructor(...Q) {
					super(...Q);
					L(this, "state", {
						value: "",
						submitted: !1
					}), L(this, "handleTextareaChange", z => {
						this.setState({
							value: z.target.value
						})
					}), L(this, "sendErrToSentry10", async () => {
						try {
							var z, j, A, w;
							const F = ((z = window) === null || z === void 0 || (j = z.bootstrap) === null || j === void 0 || (A = j.data) === null || A === void 0 || (w = A.user) === null || w === void 0 ? void 0 : w.id) || "Unknown",
								te = this.props.eventId || g.eW(),
								q = {
									name: F,
									email: `${F}@userid.com`,
									comments: this.state.value,
									eventId: te,
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
						} catch (F) {
							console.error(F)
						}
					}), L(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), L(this, "renderContent", z => r().createElement(v.I18n, null, j => r().createElement(M, {
						type: z
					}, r().createElement(y, null, r().createElement(D, null, r().createElement(x, null, j.t("error.internal_issues")), r().createElement(G, null, j.t("error.help_us")), r().createElement(de, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: A => this.handleTextareaChange(A),
						disabled: this.state.submitted,
						placeholder: j.t("error.give_feedback")
					}), r().createElement(N, null, !this.state.submitted && r().createElement(o.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, j.t("common.submit")), this.state.submitted && r().createElement(oe, null, j.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: Q,
						sentryTag: z,
						membershipsList: j
					} = this.props;
					console.error(`SomethingWrong: ${Q}`);
					let A = "";
					const w = (0, O.e1)();
					if (w) {
						var F;
						const q = await j({
								parameters: {
									status: "accepted"
								}
							}),
							re = q == null || (F = q.find(Z => Z.id === w)) === null || F === void 0 ? void 0 : F.roles;
						re && re.length && (A = re.join(", "))
					}
					const te = `ErrorBoundary - ${Q}`;
					a.Tb(te, {
						tags: {
							errorBoundary: z,
							normalizedPath: (0, O.Fl)(window.location.pathname),
							roles: A.length ? A : void 0
						}
					}), C().sendEvent("something wrong", {
						error: Q,
						roles: A.length ? A : void 0
					})
				}
				render() {
					const {
						type: Q
					} = this.props;
					return Q === "fullscreen" ? r().createElement("div", null, r().createElement(m.h4, null, r().createElement(i.Link, {
						to: "/"
					}, r().createElement(I.TR, null))), this.renderContent(Q), r().createElement(E.Z, null)) : this.renderContent(Q)
				}
			}
			se.propTypes = {
				type: f().oneOf(["fullscreen", "page"]),
				error: f().oneOfType([f().string, f().object]),
				eventId: f().string,
				sentryTag: f().string,
				membershipsList: f().func
			}, h.Z = (0, c.connect)(() => ({}), {
				membershipsList: _.YT
			})(se)
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
				i = t.n(r),
				u = t("../../../../node_modules/redux-thunk/es/index.js"),
				l = t("../../../../node_modules/redux-persist/es/index.js"),
				f = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				c = t("../react/app/rootReducer.js"),
				p = t("../react/app/redux/normalizer.js"),
				v = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				s = t("../react/app/reducerRegistry.js"),
				o = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				g = t("../react/common/sagas/index.js"),
				a = t("../react/app/redux/processActionMiddleware.js"),
				m = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				I = t("../../../../node_modules/is-promise/index.js"),
				P = t.n(I);

			function C(x) {
				for (var G = 1; G < arguments.length; G++) {
					var oe = arguments[G] != null ? Object(arguments[G]) : {},
						de = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(oe).filter(function(se) {
						return Object.getOwnPropertyDescriptor(oe, se).enumerable
					})), de.forEach(function(se) {
						_(x, se, oe[se])
					})
				}
				return x
			}

			function _(x, G, oe) {
				return G = O(G), G in x ? Object.defineProperty(x, G, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[G] = oe, x
			}

			function O(x) {
				var G = E(x, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function E(x, G) {
				if (typeof x != "object" || x === null) return x;
				var oe = x[Symbol.toPrimitive];
				if (oe !== void 0) {
					var de = oe.call(x, G || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(x)
			}
			const T = {
					key: "cf-redux-store",
					storage: f.Z,
					whitelist: ["accountAccess", "invite"]
				},
				L = (0, o.ZP)(),
				k = [({
					dispatch: x
				}) => G => oe => P()(oe) ? oe.then(de => x(de)) : G(oe), L, u.Z, a.Z, p.qR],
				M = x => (0, l.Wq)(T, C({}, c.Z, x));

			function y() {
				const x = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					oe = e.compose((0, e.applyMiddleware)(...k), v.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					de = {},
					se = (0, e.createStore)(M(s.Z.getReducers()), de, oe);
				L.run(g.Z), (0, l.p5)(se);
				const Q = (t.g.bootstrap || {}).data || {};
				return se.dispatch((0, m.mW)("user", Q.user)), se
			}
			let D;
			s.Z.setChangeListener(x => {
				var G;
				D && ((G = D) === null || G === void 0 ? void 0 : G.replaceReducer) && (D.replaceReducer(M(x)), (0, l.p5)(D))
			});

			function N() {
				return D || (D = y()), D
			}
		},
		"../react/app/redux/index.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				TZ: function() {
					return i
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
			const i = () => (0, e.useStore)(),
				u = () => i().getState(),
				l = () => (0, e.useDispatch)(),
				f = e.useSelector
		},
		"../react/app/redux/makeAction.js": function($, h, t) {
			"use strict";
			t.d(h, {
				$J: function() {
					return o
				},
				Oy: function() {
					return s
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
				i = t.n(r);

			function u(a) {
				for (var m = 1; m < arguments.length; m++) {
					var I = arguments[m] != null ? Object(arguments[m]) : {},
						P = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(I).filter(function(C) {
						return Object.getOwnPropertyDescriptor(I, C).enumerable
					})), P.forEach(function(C) {
						l(a, C, I[C])
					})
				}
				return a
			}

			function l(a, m, I) {
				return m = f(m), m in a ? Object.defineProperty(a, m, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[m] = I, a
			}

			function f(a) {
				var m = c(a, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function c(a, m) {
				if (typeof a != "object" || a === null) return a;
				var I = a[Symbol.toPrimitive];
				if (I !== void 0) {
					var P = I.call(a, m || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(a)
			}
			const p = u({}, r),
				v = (a, m, I, P = {}) => {
					const C = a === "delete" ? "del" : a.toLowerCase();
					return I && C !== "del" && (P.body = I), p[C](m, P)
				},
				n = (a, m) => (a.meta.params = m, a),
				s = (a, m, I, P, {
					body: C = {}
				}) => {
					const {
						result: _,
						messages: O,
						result_info: E
					} = C, T = Object.values(m);
					if (a.meta.method === "delete") {
						const L = T[T.length - 1];
						a.meta.id = typeof L == "object" ? L.id : L
					}
					return a.payload = _, O && (a.meta.messages = O), T.length && (a.meta.params = m), E && (a.meta.paginationData = {
						info: E,
						actionParameters: T,
						options: I[0],
						insertionOffset: 0
					}), a
				},
				o = (a, m, I, P, C) => (a.payload = C && C.body && C.body.errors, a.meta.messages = C && C.body && C.body.messages, a.meta.params = m, a.apiError = C, a);

			function g(a, m, I, P) {
				const C = (0, e.RM)(a, m, I, P).apiFetch(v).on("start", n).on("success", s).on("error", o),
					_ = C.mock;
				return C.mock = O => (_((...E) => {
					const T = O(...E);
					return T && typeof T == "object" && "result" in T ? T : {
						result: T
					}
				}), C), C
			}
		},
		"../react/app/redux/normalizer.js": function($, h, t) {
			"use strict";
			t.d(h, {
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
					return p
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				r = t("../react/pages/workers/entityTypes.ts"),
				i = t("../react/pages/email/types.ts"),
				u = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				f = t.n(l);
			const c = l.static.from([{
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
				p = s => s.entities,
				v = (...s) => (0, u.P1)(c, p, ...s),
				n = (0, u.QB)(c)
		},
		"../react/app/redux/utils.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				F: function() {
					return i
				},
				_: function() {
					return r
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const r = u => (l, f, c) => (0, e.SC)(l, f, c, {
					hideErrorAlert: !0
				}).catch(u),
				i = u => l => {
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
					return s
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
				i = "MODAL_OPEN",
				u = "MODAL_CLOSE",
				l = "TOGGLE_ON",
				f = "TOGGLE_OFF",
				c = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				v = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let s = function(o) {
				return o.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", o.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", o.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", o.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", o.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", o.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", o.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", o.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", o.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", o
			}({})
		},
		"../react/common/actions/activeActions.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				I: function() {
					return r
				},
				n: function() {
					return i
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = (u, l) => ({
					type: e.HI,
					activeKey: u,
					activeValue: l
				}),
				i = u => ({
					type: e.s1,
					activeKey: u
				})
		},
		"../react/common/actions/membershipActions.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				AX: function() {
					return o
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
					return s
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/common/constants/index.ts");

			function i(g) {
				for (var a = 1; a < arguments.length; a++) {
					var m = arguments[a] != null ? Object(arguments[a]) : {},
						I = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(m).filter(function(P) {
						return Object.getOwnPropertyDescriptor(m, P).enumerable
					})), I.forEach(function(P) {
						u(g, P, m[P])
					})
				}
				return g
			}

			function u(g, a, m) {
				return a = l(a), a in g ? Object.defineProperty(g, a, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[a] = m, g
			}

			function l(g) {
				var a = f(g, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(g, a) {
				if (typeof g != "object" || g === null) return g;
				var m = g[Symbol.toPrimitive];
				if (m !== void 0) {
					var I = m.call(g, a || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(g)
			}
			const c = g => {
					const a = g.payload.map(m => i({}, m, {
						membershipId: m.id,
						id: m.account.id
					}));
					return i({}, g, {
						payload: a
					})
				},
				p = g => {
					const a = c(g);
					return Array.isArray(a.payload) ? i({}, g, {
						payload: a.payload[0]
					}) : i({}, g, {
						payload: null
					})
				},
				v = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", c),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				s = (...g) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: g
				}),
				o = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function($, h, t) {
			"use strict";
			t.r(h), t.d(h, {
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

			function i(l, f, c = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: l,
						props: f
					},
					options: c
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
					return c
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

			function i(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let u = 0;

			function l(n, s, o = {}) {
				return o = o || {},
					function(g) {
						let a = u++,
							m = {
								id: a,
								type: n,
								message: s,
								delay: o.delay,
								persist: o.persist === void 0 ? !1 : o.persist,
								closable: o.closable === void 0 ? !0 : o.closable,
								onClose() {
									g(i(a)), o.onClose && o.onClose.apply(null, arguments)
								}
							};
						g(r(m))
					}
			}

			function f(n, s) {
				return l("success", n, s)
			}

			function c(n, s) {
				return l("info", n, s)
			}

			function p(n, s) {
				return l("warning", n, s)
			}

			function v(n, s) {
				return l("error", n, s)
			}
		},
		"../react/common/actions/userActions.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				BT: function() {
					return c
				},
				Ut: function() {
					return P
				},
				V_: function() {
					return C
				},
				Y9: function() {
					return m
				},
				Z0: function() {
					return O
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

			function i(E) {
				for (var T = 1; T < arguments.length; T++) {
					var L = arguments[T] != null ? Object(arguments[T]) : {},
						S = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(L).filter(function(k) {
						return Object.getOwnPropertyDescriptor(L, k).enumerable
					})), S.forEach(function(k) {
						u(E, k, L[k])
					})
				}
				return E
			}

			function u(E, T, L) {
				return T = l(T), T in E ? Object.defineProperty(E, T, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[T] = L, E
			}

			function l(E) {
				var T = f(E, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function f(E, T) {
				if (typeof E != "object" || E === null) return E;
				var L = E[Symbol.toPrimitive];
				if (L !== void 0) {
					var S = L.call(E, T || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(E)
			}
			const c = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				v = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				s = (0, e.C)("user").post`/user/two_factor_authentication`,
				o = (0, e.C)("user").put`/user/two_factor_authentication`,
				g = (0, e.C)("user").delete`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/email`;

			function m(...E) {
				return a(...E)
			}
			const I = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				P = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(E => i({}, E, {
					body: i({}, E.body, {
						result: {}
					})
				}))),
				C = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				_ = (0, e.C)("userDetails").get`/user/details`,
				O = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function($, h, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				r = t("../react/utils/zoneLevelAccess.ts");
			const i = ({
				legacyPermission: u,
				canAccess: l,
				children: f,
				render: c
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
				const n = c || f;
				return n ? n(v) : null
			};
			h.Z = i
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
					return s
				},
				jX: function() {
					return c
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
				i = "com.cloudflare.edge.",
				u = "com.cloudflare.api.account.zone.",
				l = ["com.cloudflare.api.app.manage"];
			let f = function(o) {
				return o.read = "read", o.list = "list", o.create = "create", o.update = "update", o.delete = "delete", o.sign = "sign", o.refresh = "refresh", o
			}({});
			const c = (o, g) => `${r}${o?o+".":""}${g}`,
				p = (o, g) => `${u}${o?o+".":""}${g}`,
				v = (o, g) => `${i}${o}.${g}`,
				n = (o = "") => `${r}${o}`,
				s = (o = "") => `${u}${o}`
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
					return i.WL
				},
				ZP: function() {
					return r.Z
				},
				ZZ: function() {
					return u.ZZ
				},
				hT: function() {
					return i.hT
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
				i = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function($, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");

			function f(c) {
				const {
					read: p,
					edit: v
				} = (0, i.p4)(u.Yj)(c);
				let n = v;
				if (c != "zone_versioning") {
					const o = (0, i.p4)(l.G);
					(o == null ? void 0 : o.isLocked) && (n = !1)
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
					return o
				},
				hT: function() {
					return m
				},
				kd: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/pages/home/members/utils.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");
			const f = {
					allow: "allow",
					deny: "deny"
				},
				c = 0,
				p = 1,
				v = 2,
				n = 3;

			function s(T, L, S, k) {
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
				for (y in M) M[y] = o(T, `${L}.${y}`, S, k);
				return M
			}

			function o(T, L, S, k) {
				var M;
				if (g(L) && !a(L)) {
					const G = (0, l.G)(T);
					if (G == null ? void 0 : G.isLocked) return !1
				}
				const y = (M = (0, r.D0)(T)) === null || M === void 0 ? void 0 : M.id,
					D = y ? [`com.cloudflare.api.account.${y}`] : void 0,
					N = (0, i.vq)(y);
				return !!I(T, N, L, S, k || D)
			}

			function g(T) {
				return ![u.ZZ.read, u.ZZ.list].some(L => T.endsWith(L))
			}

			function a(T) {
				return T.includes("zone.versioning")
			}

			function m(T) {
				const L = (0, r.Ko)(T);
				let S = !1;
				return L == null || L.forEach(k => {
					k.access === f.allow && k.permission_groups.forEach(M => {
						var y;
						(M == null || (y = M.meta) === null || y === void 0 ? void 0 : y.scopes) === u.u1 && (S = !0)
					})
				}), S
			}

			function I(T, L, S, k, M) {
				const y = (0, r.Ko)(T),
					D = {};
				y == null || y.forEach(oe => {
					var de;
					const se = oe.access;
					let K = c;
					if (S && oe.permission_groups.forEach(Q => {
							var z, j;
							L == null || (z = L.find(A => A.id === Q.id)) === null || z === void 0 || (j = z.permissions) === null || j === void 0 || j.forEach(A => {
								K = Math.max(K, P(A, S))
							})
						}), K !== c && !!k) {
						let Q = c;
						oe.resource_groups.forEach(z => {
							Q = Math.max(Q, _(z.scope, k, M))
						}), K = Q === c ? Q : K + Q
					}(D == null || (de = D[se]) === null || de === void 0 ? void 0 : de[K]) || (0, e.Z)(D, [se, K], []), D[se][K].push(oe)
				});
				const N = D[f.allow] && Object.keys(D[f.allow]).map(oe => parseInt(oe)),
					x = D[f.deny] && Object.keys(D[f.deny]).map(oe => parseInt(oe)),
					G = Math.max.apply(Math, N);
				return G === c || Math.max.apply(Math, x) >= G ? null : D[f.allow][G]
			}

			function P(T, L) {
				if (T.key === L || C(T.key, L)) return n;
				for (const S of (T == null ? void 0 : T.implies) || []) {
					let k = P(S, L);
					if (k > c) return k
				}
				return c
			}

			function C(T, L) {
				const S = L == null ? void 0 : L.lastIndexOf(".");
				return S === -1 ? !1 : (L == null ? void 0 : L.substring(0, S)) + ".*" === T
			}

			function _(T, L, S) {
				var k;
				let M = c;
				if (T == null || (k = T.objects) === null || k === void 0 || k.forEach(y => {
						M = Math.max(M, E(y, L))
					}), M === c) return M;
				if (T.key !== "*") switch (!0) {
					case O(T.key, S) > c:
					case (!(S == null ? void 0 : S.length) && M === n):
						break;
					case (M === p && O(T.key, [L]) > c):
						M = O(T.key, [L]);
						break;
					default:
						return c
				}
				for (const y of T.subset_of || [])
					if (O(y.key, S) === c) return c;
				return M
			}

			function O(T, L = []) {
				for (const S of L || []) {
					if (T === S) return n;
					if (C(T, S)) return v
				}
				return c
			}

			function E(T, L) {
				return T.key === L ? n : T.key === "*" ? p : C(T.key, L) ? v : c
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
				l = (f, c) => {
					const {
						resourceId: p,
						accountId: v,
						legacyPermission: n
					} = c;
					let {
						read: s,
						edit: o
					} = c;
					const g = {};
					n && (o = `#${n}:edit`, s = `#${n}:read`);
					const a = p || v;
					if (s) {
						const m = Array.isArray(s) ? s : [s];
						g.isReadable = m.some(I => {
							const P = u(I);
							return (0, i.DT)(f, a, C => !!(C[P.key] && C[P.key][P.value]))
						})
					}
					if (o) {
						const m = Array.isArray(o) ? o : [o];
						g.isEditable = m.some(I => {
							const P = u(I);
							return (0, i.DT)(f, a, C => !!(C[P.key] && C[P.key][P.value]))
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
				i = t("../react/app/HoCs/withEntities.tsx"),
				u = t("../react/common/components/AccessControl/SAAConnect.js");

			function l(s) {
				for (var o = 1; o < arguments.length; o++) {
					var g = arguments[o] != null ? Object(arguments[o]) : {},
						a = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(g).filter(function(m) {
						return Object.getOwnPropertyDescriptor(g, m).enumerable
					})), a.forEach(function(m) {
						f(s, m, g[m])
					})
				}
				return s
			}

			function f(s, o, g) {
				return o = c(o), o in s ? Object.defineProperty(s, o, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[o] = g, s
			}

			function c(s) {
				var o = p(s, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function p(s, o) {
				if (typeof s != "object" || s === null) return s;
				var g = s[Symbol.toPrimitive];
				if (g !== void 0) {
					var a = g.call(s, o || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(s)
			}

			function v(s) {
				const g = ["isReadable", "isEditable"].reduce((a, m) => s.hasOwnProperty(m) ? l({}, a, {
					[m]: s[m]
				}) : a, {});
				return s.children(g)
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
			n.displayName = "AccessControl", h.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				PP: function() {
					return s
				},
				RJ: function() {
					return c
				},
				tz: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const f = () => p.test(window.location.pathname) || i.E.has(u.Qq),
				c = () => i.E.get(u.Qq),
				p = /^\/login\/apple(\/)?/,
				n = [p, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				s = () => {
					let g = !1;
					n.forEach(m => {
						if (m.test(window.location.pathname)) {
							g = !0;
							return
						}
					});
					const a = f() && g;
					return a && (0, l.C8)(l.LF.OFF), a
				},
				o = g => {
					g && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let a = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					g && (a = a + `&jwt=${g}`), window.location.href = a
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				oG: function() {
					return a
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
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				f = t.n(l),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = t("../react/common/components/Dropdown/index.tsx"),
				v = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(m) {
					for (var I = 1; I < arguments.length; I++) {
						var P = arguments[I];
						for (var C in P) Object.prototype.hasOwnProperty.call(P, C) && (m[C] = P[C])
					}
					return m
				}, n.apply(this, arguments)
			}

			function s(m, I) {
				if (m == null) return {};
				var P = o(m, I),
					C, _;
				if (Object.getOwnPropertySymbols) {
					var O = Object.getOwnPropertySymbols(m);
					for (_ = 0; _ < O.length; _++) C = O[_], !(I.indexOf(C) >= 0) && (!Object.prototype.propertyIsEnumerable.call(m, C) || (P[C] = m[C]))
				}
				return P
			}

			function o(m, I) {
				if (m == null) return {};
				var P = {},
					C = Object.keys(m),
					_, O;
				for (O = 0; O < C.length; O++) _ = C[O], !(I.indexOf(_) >= 0) && (P[_] = m[_]);
				return P
			}
			const g = (0, c.createStyledComponent)(({
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

			function a(m) {
				let {
					menu: I,
					containerProps: P,
					disabled: C,
					disabledDropdown: _ = C
				} = m, O = s(m, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: E
				} = (0, l.useI18n)();
				return r().createElement(g, n({}, P, {
					role: "group"
				}), r().createElement(i.zx, n({}, O, {
					disabled: C
				})), r().createElement(p.Lt, {
					trigger: r().createElement(i.zx, {
						type: O.type,
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
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = t("../react/common/hooks/useIntersectionObserver.ts");

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(p) {
					for (var v = 1; v < arguments.length; v++) {
						var n = arguments[v];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (p[s] = n[s])
					}
					return p
				}, f.apply(this, arguments)
			}

			function c(p) {
				const v = (0, e.useRef)(null),
					[n, s] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const g = v.current;
					if (g) {
						const {
							bottom: a
						} = g.getBoundingClientRect();
						a > window.innerHeight && s(!0)
					}
				}, []);
				const o = (0, l.S)(g => {
					for (const a of g) a.intersectionRatio < 1 && s(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const g = v.current;
					if (g && o) return o.observe(g), () => {
						o.unobserve(g)
					}
				}, [o]), r().createElement(i.ZC, f({
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
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(u);

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(P) {
					for (var C = 1; C < arguments.length; C++) {
						var _ = arguments[C];
						for (var O in _) Object.prototype.hasOwnProperty.call(_, O) && (P[O] = _[O])
					}
					return P
				}, f.apply(this, arguments)
			}

			function c(P, C) {
				if (P == null) return {};
				var _ = p(P, C),
					O, E;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(P);
					for (E = 0; E < T.length; E++) O = T[E], !(C.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(P, O) || (_[O] = P[O]))
				}
				return _
			}

			function p(P, C) {
				if (P == null) return {};
				var _ = {},
					O = Object.keys(P),
					E, T;
				for (T = 0; T < O.length; T++) E = O[T], !(C.indexOf(E) >= 0) && (_[E] = P[E]);
				return _
			}

			function v(P) {
				for (var C = 1; C < arguments.length; C++) {
					var _ = arguments[C] != null ? Object(arguments[C]) : {},
						O = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(_).filter(function(E) {
						return Object.getOwnPropertyDescriptor(_, E).enumerable
					})), O.forEach(function(E) {
						n(P, E, _[E])
					})
				}
				return P
			}

			function n(P, C, _) {
				return C = s(C), C in P ? Object.defineProperty(P, C, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[C] = _, P
			}

			function s(P) {
				var C = o(P, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function o(P, C) {
				if (typeof P != "object" || P === null) return P;
				var _ = P[Symbol.toPrimitive];
				if (_ !== void 0) {
					var O = _.call(P, C || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(P)
			}
			const g = ({
					theme: P
				}) => {
					const C = {
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
						'&:hover:not(:disabled):not([aria-disabled="true"])': C,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': v({}, C, {
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
				a = (0, i.createComponent)(g, "a"),
				m = (0, i.createComponent)(g, "button");

			function I(P) {
				let {
					disabled: C = !1
				} = P, _ = c(P, ["disabled"]);
				const O = (0, u.useHistory)(),
					E = {
						role: "menuitem"
					};
				if ("href" in _ && typeof _.href == "string") return r().createElement(a, f({
					"aria-disabled": C
				}, E, _, {
					href: C ? void 0 : _.href,
					onClick: L => {
						var S;
						if (C) return L.stopPropagation();
						L.preventDefault(), (S = _.onClick) === null || S === void 0 || S.call(_, L), O.push(_.href)
					}
				}));
				var T;
				return r().createElement(m, f({
					type: (T = _.type) !== null && T !== void 0 ? T : "button"
				}, E, _, {
					disabled: C
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function($, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/prop-types/index.js"),
				u = t.n(i),
				l = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const f = ({
				children: c
			}) => r().createElement(l.xu, {
				height: 411
			}, c);
			f.propTypes = {
				children: u().node
			}, h.Z = f
		},
		"../react/common/components/ModalManager.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				ZP: function() {
					return a
				},
				dd: function() {
					return o
				},
				vR: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/react-redux/react-redux");
			const u = m => m.application.modals;
			var l = t("../react/common/actions/modalActions.ts"),
				f = t("../../../../node_modules/swr/core/dist/index.mjs"),
				c = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function p() {
				return p = Object.assign ? Object.assign.bind() : function(m) {
					for (var I = 1; I < arguments.length; I++) {
						var P = arguments[I];
						for (var C in P) Object.prototype.hasOwnProperty.call(P, C) && (m[C] = P[C])
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
						ModalComponent: C,
						props: _ = {},
						id: O
					}) => {
						const E = () => {
							typeof _.onClose == "function" && _.onClose(), P(C)
						};
						return r().createElement(v.Provider, {
							key: O,
							value: {
								closeModal: E
							}
						}, r().createElement(f.J$, {
							value: c.ZP
						}, r().createElement(C, p({}, _, {
							isOpen: !0,
							closeModal: E
						}))))
					}))
				}
			}

			function s() {
				const m = r().useContext(v);
				if (!m) throw new Error("useModalContext must be used within a ModalContext");
				return m
			}

			function o() {
				const m = (0, i.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...I) {
						return m(l.openModal(...I))
					}, [m]),
					closeModal: (0, e.useCallback)(function(...I) {
						return m(l.closeModal(...I))
					}, [m])
				}
			}
			var a = (0, i.connect)(m => ({
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
				i = t("../node_modules/@cloudflare/component-page/es/index.js");

			function u(l) {
				return r().createElement(i.T3, l)
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
				l = "from",
				f = "to",
				c = "all",
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
			let v = function(s) {
					return s.ADD_FILTER = "Add filter", s.EDIT_FILTER = "Edit filter", s.REMOVE_FILTER = "Remove filter", s.REMOVE_ALL_FILTERS = "Remove all filters", s.CHANGE_TIME = "Change time window", s.FEED_PAGE_FORWARD = "Activity feed next page", s.FEED_PAGE_BACKWARD = "Activity feed previous page", s.FEED_EXPAND_EVENT = "Activity feed expand event", s.FEED_CLOSE_EVENT = "Activity feed close event", s.FEED_EXPAND_MATCHES = "Activity feed expand matches", s.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", s.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", s.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", s.DOWNLOAD_FEED = "Activity feed download", s
				}({}),
				n = function(s) {
					return s.TIMESERIES = "Timeseries Chart", s.DISTRIBUTION = "Source Distribution Chart", s.TOP_N = "Top N", s.FILTER_BAR = "Filter Bar", s.SCORES_DISTRIBUTIONS = "Scores Distributions", s.INSIGHTS = "Insights", s.RL_HISTOGRAM = "Rate Limit Histogram", s
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
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var s = 1; s < arguments.length; s++) {
					var o = arguments[s] != null ? Object(arguments[s]) : {},
						g = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(o).filter(function(a) {
						return Object.getOwnPropertyDescriptor(o, a).enumerable
					})), g.forEach(function(a) {
						u(n, a, o[a])
					})
				}
				return n
			}

			function u(n, s, o) {
				return s = l(s), s in n ? Object.defineProperty(n, s, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = o, n
			}

			function l(n) {
				var s = f(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(n, s) {
				if (typeof n != "object" || n === null) return n;
				var o = n[Symbol.toPrimitive];
				if (o !== void 0) {
					var g = o.call(n, s || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const p = ({
					name: n,
					additionalData: s = {}
				}) => {
					r().sendEvent(n, i({}, s || {}))
				},
				v = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
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
					return i
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
					return c
				},
				SP: function() {
					return p
				}
			});
			let e = function(a) {
				return a.page_rules = "page_rules", a.automatic_platform_optimization = "automatic_platform_optimization", a
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
				c = {
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
				s = t("../react/common/constants/billing/tracking.ts"),
				o = t("../react/common/constants/billing/workers.ts");
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
					return a
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
					return c
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
					return o
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = "healthy",
				l = "degraded",
				f = "critical",
				c = "unknown",
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
				s = {
					f: v.FREE,
					p: v.PRO,
					b: v.BIZ
				},
				o = "marketing-pt",
				g = () => {
					const C = i.Z.get(o);
					if (!!C) return s[C]
				},
				a = ["gov"],
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
					return i
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
				i = (l, f, c = !1) => {
					var p;
					return `${f} ${(p=r[l])!==null&&p!==void 0?p:l} ${c?"ruleset":"rule"}${f===e.GET?"s":""}`
				},
				u = () => {
					var l;
					return (l = Object.keys(r).reduce((f, c) => {
						const p = Object.values(e).reduce((v, n) => (v.push(i(c, n)), v.push(i(c, n, !0)), v), []);
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
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(i);

			function l() {
				var f;
				const {
					accountId: c
				} = (0, i.useParams)(), p = (0, e.p4)(r.D0);
				if (c === void 0 && !p) throw new Error("Account ID not found in URL params");
				return (f = c) !== null && f !== void 0 ? f : p == null ? void 0 : p.id
			}
		},
		"../react/common/hooks/useActiveState.ts": function($, h, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				i = t.n(r),
				u = t("../react/common/selectors/commonSelectors.ts");
			const l = f => {
				const c = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, u.cZ)(f)), n => {
					c((0, e.I)(f, n))
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
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(l, {
				key: f,
				cache: c = i.E,
				ttl: p
			} = {}) {
				var v;
				const n = f !== void 0 && c.get(f),
					[s, o] = (0, e.useState)((v = n) !== null && v !== void 0 ? v : l);
				return [s, a => {
					o(m => (a instanceof Function && (a = a(m)), f !== void 0 && c.set(f, a, p), a))
				}]
			}
		},
		"../react/common/hooks/useIntersectionObserver.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				S: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function i(u, {
				root: l,
				rootMargin: f,
				threshold: c
			} = {}) {
				const p = (0, e.useRef)(null);

				function v() {
					return p.current === null && (p.current = new IntersectionObserver(u, {
						root: l,
						rootMargin: f,
						threshold: c
					})), p.current
				}
				return (0, e.useEffect)(() => (p.current = new IntersectionObserver(u, {
					root: l,
					rootMargin: f,
					threshold: c
				}), () => {
					var n;
					(n = p.current) === null || n === void 0 || n.disconnect()
				}), [u, l, f, c]), v()
			}
		},
		"../react/common/hooks/usePrevious.ts": function($, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function i(u) {
				const l = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					l.current = u
				}, [u]), l.current
			}
			h.Z = i
		},
		"../react/common/hooks/useZoneEntitlement.ts": function($, h, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function i(u) {
				return (0, e.p4)(l => (0, r.rV)(l, u))
			}
			h.Z = i
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

			function e(c, p, v) {
				return p = r(p), p in c ? Object.defineProperty(c, p, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[p] = v, c
			}

			function r(c) {
				var p = i(c, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function i(c, p) {
				if (typeof c != "object" || c === null) return c;
				var v = c[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(c, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(c)
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
					return lt
				},
				CV: function() {
					return ut
				},
				D0: function() {
					return O
				},
				DT: function() {
					return Z
				},
				EL: function() {
					return F
				},
				EU: function() {
					return V
				},
				GE: function() {
					return it
				},
				Ko: function() {
					return re
				},
				Kx: function() {
					return y
				},
				Le: function() {
					return D
				},
				O4: function() {
					return Ee
				},
				Ou: function() {
					return z
				},
				Py: function() {
					return Ue
				},
				QI: function() {
					return tt
				},
				Qf: function() {
					return T
				},
				RO: function() {
					return Pe
				},
				T3: function() {
					return at
				},
				T8: function() {
					return L
				},
				UX: function() {
					return w
				},
				VP: function() {
					return Re
				},
				Xo: function() {
					return We
				},
				Xu: function() {
					return se
				},
				Yi: function() {
					return Ye
				},
				Yj: function() {
					return q
				},
				Zu: function() {
					return te
				},
				bC: function() {
					return ee
				},
				f8: function() {
					return G
				},
				hI: function() {
					return Ze
				},
				hN: function() {
					return M
				},
				hX: function() {
					return ve
				},
				iq: function() {
					return Je
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
					return ct
				},
				tM: function() {
					return j
				},
				uF: function() {
					return K
				},
				ut: function() {
					return xe
				},
				vU: function() {
					return Et
				},
				wQ: function() {
					return ce
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/lodash/get.js"),
				i = t.n(r),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = t.n(u),
				f = t("../../../../node_modules/reselect/lib/index.js"),
				c = t("../../../../node_modules/moment/moment.js"),
				p = t.n(c),
				v = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				s = t("../react/common/selectors/userSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				g = t("../react/app/components/DeepLink/selectors.ts"),
				a = t("../react/common/constants/roles.ts"),
				m = t("../react/common/utils/hasRole.ts");

			function I(U) {
				for (var ie = 1; ie < arguments.length; ie++) {
					var fe = arguments[ie] != null ? Object(arguments[ie]) : {},
						Ce = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Ce.push.apply(Ce, Object.getOwnPropertySymbols(fe).filter(function(Le) {
						return Object.getOwnPropertyDescriptor(fe, Le).enumerable
					})), Ce.forEach(function(Le) {
						P(U, Le, fe[Le])
					})
				}
				return U
			}

			function P(U, ie, fe) {
				return ie = C(ie), ie in U ? Object.defineProperty(U, ie, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[ie] = fe, U
			}

			function C(U) {
				var ie = _(U, "string");
				return typeof ie == "symbol" ? ie : String(ie)
			}

			function _(U, ie) {
				if (typeof U != "object" || U === null) return U;
				var fe = U[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Ce = fe.call(U, ie || "default");
					if (typeof Ce != "object") return Ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ie === "string" ? String : Number)(U)
			}
			const O = U => {
					const ie = K(U);
					return ie == null ? void 0 : ie.account
				},
				E = U => {
					const ie = (0, s.PR)(U);
					if (ie) {
						const fe = ie.id;
						return U.accountAccess[fe] || {}
					}
					return {}
				},
				T = U => U.accountsDetailed,
				L = (0, n.P1)("accountsDetailed", T),
				S = U => U.memberships,
				k = (0, f.P1)((0, n.P1)("memberships", S), g.U, (U, ie) => !!ie && !!U ? U.filter(fe => ie.includes(fe.id)) : U),
				M = U => U.accountFlags && U.accountFlags.data,
				y = U => U.accountFlags,
				D = (U, ie, fe) => {
					const Ce = M(U);
					return !Ce || !Ce[ie] ? null : Ce[ie][fe]
				},
				N = U => U.accountFlags.isRequesting,
				x = (U, ...ie) => i()(U, ["accountFlagsChanges", "data", ...ie]),
				G = U => U.accountFlagsChanges.isRequesting,
				oe = (0, f.P1)(M, y, (U, ie) => ({
					data: U,
					meta: ie
				})),
				de = (U, ie, fe) => !!(isEnterpriseSSEnabledSelector(U) && D(U, ie, fe)),
				se = U => U.membership,
				K = (0, n.P1)("membership", se),
				Q = (0, f.P1)(K, se, (U, ie) => ({
					data: U,
					meta: ie
				})),
				z = U => {
					const {
						roles: ie = []
					} = K(U) || {};
					return Boolean(ie.find(fe => fe === "Super Administrator - All Privileges" || fe === "Billing"))
				},
				j = U => {
					const ie = [a.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, m.n)(U, ie)
				},
				A = U => {
					const ie = E(U),
						fe = $e.getMemberships(U) ? l().asMutable($e.getMemberships(U)) : [];
					if (!!fe) return l().from(fe.map(Ce => I({}, Ce, {
						lastSeen: ie[Ce.account.id] ? ie[Ce.account.id].lastSeen : null
					})).sort((Ce, Le) => Ce.lastSeen && Le.lastSeen ? Le.lastSeen - Ce.lastSeen : 0))
				},
				w = U => U.filteredMemberships,
				F = (0, n.P1)("filteredMemberships", w),
				te = (0, f.P1)(K, U => U == null ? void 0 : U.permissions),
				q = (0, f.P1)(te, U => (0, e.Z)(ie => {
					var fe;
					return (fe = U == null ? void 0 : U[ie]) !== null && fe !== void 0 ? fe : {
						read: !1,
						edit: !1
					}
				})),
				re = (0, f.P1)(K, U => U == null ? void 0 : U.policies),
				Z = (U, ie, fe) => {
					let Ce = $e.getMembership(U);
					if (!Ce) {
						const Le = $e.getMemberships(U);
						if (!Le || !ie) return !1;
						Ce = Le.find(Ne => Ne.account.id === ie)
					}
					if (!Ce || !fe) return !1;
					try {
						return fe(Ce.permissions)
					} catch {
						return !1
					}
				},
				B = U => {
					var ie, fe;
					return (ie = (fe = O(U)) === null || fe === void 0 ? void 0 : fe.meta.has_pro_zones) !== null && ie !== void 0 ? ie : !1
				},
				V = U => {
					var ie, fe;
					return (ie = (fe = O(U)) === null || fe === void 0 ? void 0 : fe.meta.has_business_zones) !== null && ie !== void 0 ? ie : !1
				},
				ee = U => V(U) || B(U),
				le = (U, ie) => {
					const fe = pe(U, ie);
					return !!fe && !!fe.enabled
				},
				pe = (U, ie) => {
					const fe = $e.getMembership(U),
						Ce = fe && fe.account;
					return Ce && Ce.legacy_flags && Ce.legacy_flags[ie]
				},
				ce = U => le(U, "custom_pages"),
				_e = U => !!U && U["webhooks.webhooks.enabled"],
				be = U => D(U, "bots", "enabled"),
				Te = U => D(U, "billing", "annual_subscriptions_enable"),
				Pe = U => U ? Boolean(D(U, "ConstellationAI", "v2_ui")) : !1,
				ve = U => U ? Boolean(D(U, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				De = U => U ? Boolean(D(U, "AIgateway", "enabled")) : !1,
				ke = U => pe(U, "enterprise_zone_quota"),
				Xe = U => {
					const ie = ke(U);
					return !ie || !ie.available ? -1 : ie.available
				},
				Je = U => U.accountMembers,
				Y = (0, n.P1)("accountMembers", Je),
				Ee = U => U.accountMember && U.accountMember.isRequesting,
				Oe = U => U.accountRoles,
				qe = (0, n.P1)("accountRoles", Oe),
				Ue = (U, ie) => {
					const fe = $e.getMemberships(U),
						Ce = fe && fe.find(nt => nt.account.id === ie);
					if (Ce) return Ce.account.name.replace(" Account", " account");
					const Le = $e.getMembership(U),
						Ne = Le && Le.account;
					return Ne && Ne.id === ie ? Ne.name : null
				},
				xe = (U, ie) => {
					const fe = $e.getMemberships(U),
						Ce = fe && fe.find(nt => nt.account.id === ie);
					if (Ce) return Ce.account.settings.access_approval_expiry;
					const Le = $e.getMembership(U),
						Ne = Le && Le.account;
					return Ne && Ne.id === ie ? Ne.settings.access_approval_expiry : null
				},
				We = (U, ie) => {
					const fe = xe(U, ie);
					return fe ? p().utc(fe).isAfter() : !1
				},
				at = (U, ie, fe) => {
					const Ce = xe(U, ie);
					let Le = Ce ? p().utc(Ce) : null;
					return !Le || !Le.isAfter() ? "" : Le && Le.year() === 3e3 ? fe("account.access_approval.card_expiration_forever") : fe("account.access_approval.card_expiration_text", {
						expiryTimestamp: Le.local().format(v.U.DateTime)
					})
				},
				ct = U => U && U.member && U.member.edit,
				X = (U, ie) => {
					const fe = $e.getMembership(U),
						Ce = fe && fe.account;
					return Ce ? Ce.id !== ie : !1
				},
				ue = U => U.dpa,
				he = (0, n.P1)("dpa", ue),
				Be = U => U.webhook,
				Ae = U => U.webhooks,
				ye = (0, n.P1)("webhook", Ae),
				Re = U => U.accountLegoContract,
				gt = (0, n.P1)("accountLegoContract", Re),
				tt = U => {
					const ie = gt(U);
					return (ie == null ? void 0 : ie.lego_state) ? ie.lego_state : ""
				},
				_t = U => tt(U) === "signed",
				it = U => Re(U).isRequesting,
				Et = U => {
					const ie = gt(U);
					return ie && ie.subscription_type ? ie.subscription_type : ""
				},
				Lt = U => Et(U) !== "",
				$e = {
					getMembership: K,
					getMemberships: k,
					getFilteredMemberships: F,
					getAccountMembers: Y,
					getAccountRoles: qe
				},
				lt = U => U.accountSingle,
				Ye = (0, n.P1)("accountSingle", lt),
				Ze = U => {
					const ie = [a.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, a.V.ADMINISTRATOR];
					return (0, m.n)(U, ie)
				},
				ut = U => (0, m.n)(U, [a.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/commonSelectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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

			function e(l) {
				const f = `__ACTIVE__${l}`;
				return c => {
					const p = c.application;
					return p && p.active[f]
				}
			}

			function r(l) {
				const f = `__TOGGLE__${l}`;
				return c => {
					const p = c.application;
					return p && p.toggles[f]
				}
			}

			function i(l) {
				return l && l.paginationData && l.paginationData.info && l.paginationData.info.total_count ? l.paginationData.info.total_count : 0
			}
			const u = l => l.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$f: function() {
					return a
				},
				AD: function() {
					return l
				},
				BF: function() {
					return g
				},
				Bs: function() {
					return O
				},
				Ci: function() {
					return te
				},
				DA: function() {
					return ke
				},
				E6: function() {
					return o
				},
				Gy: function() {
					return Pe
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
					return ee
				},
				Td: function() {
					return C
				},
				Z: function() {
					return Z
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
					return G
				},
				f: function() {
					return _e
				},
				fo: function() {
					return ce
				},
				hL: function() {
					return B
				},
				ji: function() {
					return q
				},
				jo: function() {
					return S
				},
				l9: function() {
					return Je
				},
				lI: function() {
					return u
				},
				p1: function() {
					return I
				},
				pK: function() {
					return ve
				},
				pf: function() {
					return n
				},
				qR: function() {
					return P
				},
				rV: function() {
					return c
				},
				u1: function() {
					return v
				},
				w4: function() {
					return s
				},
				yD: function() {
					return re
				}
			});
			var e = t("../react/utils/url.ts");

			function r(Y, Ee) {
				return Y && Y[Ee]
			}
			const i = Y => !u(Y).isRequesting;

			function u(Y) {
				return Y.entitlements.zone
			}

			function l(Y) {
				return u(Y).data
			}
			const f = Y => {
				var Ee, Oe;
				return ((Ee = u(Y).paginationData) === null || Ee === void 0 || (Oe = Ee.options) === null || Oe === void 0 ? void 0 : Oe.editedDate) || {}
			};

			function c(Y, Ee) {
				const Oe = l(Y);
				return Oe ? r(Oe, Ee) : void 0
			}
			const p = (Y, Ee) => c(Y, Ee) === !0;

			function v(Y) {
				return Y.entitlements.account
			}

			function n(Y) {
				return v(Y).data
			}
			const s = Y => {
				var Ee, Oe;
				return ((Ee = v(Y).paginationData) === null || Ee === void 0 || (Oe = Ee.options) === null || Oe === void 0 ? void 0 : Oe.editedDate) || {}
			};

			function o(Y) {
				return !v(Y).isRequesting
			}

			function g(Y, Ee) {
				const Oe = n(Y);
				return Oe ? r(Oe, Ee) : void 0
			}

			function a(Y, Ee) {
				return g(Y, Ee) === !0
			}

			function m(Y, Ee) {
				return Ee.every(Oe => a(Y, Oe))
			}

			function I(Y) {
				return a(Y, "contract.customer_enabled")
			}

			function P(Y) {
				return a(Y, "contract.self_service_allowed")
			}

			function C(Y) {
				return a(Y, "billing.partners_managed")
			}
			const _ = Y => I(Y) && P(Y),
				O = Y => a(Y, "enterprise.ecp_allowed");

			function E(Y) {
				return T(Y) || a(Y, "argo.allow_smart_routing") || a(Y, "argo.allow_tiered_caching") || a(Y, "rate_limiting.enabled") || a(Y, "ctm.enabled") || a(Y, "workers.enabled") || a(Y, "workers.kv_store.enabled") || a(Y, "stream.enabled")
			}
			const T = Y => p(Y, "argo.allow_smart_routing") || p(Y, "argo.allow_tiered_caching"),
				L = Y => a(Y, "zone.cname_setup_allowed") || a(Y, "zone.partial_setup_allowed") || p(Y, "zone.partial_setup_allowed"),
				S = Y => a(Y, "argo.allow_smart_routing") || p(Y, "argo.allow_smart_routing"),
				k = Y => a(Y, "argo.allow_tiered_caching") || p(Y, "argo.allow_tiered_caching"),
				M = Y => S(Y) || k(Y),
				y = Y => a(Y, "ctm.enabled"),
				D = Y => {
					const Ee = g(Y, "ctm.load_balancers");
					return typeof Ee == "number" ? Ee : 0
				},
				N = Y => {
					const Ee = g(Y, "ctm.pools");
					return typeof Ee == "number" ? Ee : 0
				},
				x = Y => {
					const Ee = g(Y, "ctm.origins");
					return typeof Ee == "number" ? Ee : 0
				},
				G = Y => a(Y, "workers.enabled"),
				oe = Y => a(Y, "stream.enabled"),
				de = Y => {
					const Ee = g(Y, "access.users_allowed");
					return typeof Ee == "number" ? Ee : 0
				},
				se = Y => de(Y) > 0,
				K = Y => {
					const Ee = c(Y, "dedicated_certificates");
					return typeof Ee == "number" ? Ee : 0
				},
				Q = Y => K(Y) > 0,
				z = Y => {
					const Ee = c(Y, "rate_limiting.max_rules");
					return typeof Ee == "number" ? Ee : 0
				},
				j = Y => a(Y, "rate_limiting.enabled"),
				A = Y => {
					const Ee = c(Y, "page_rules");
					return typeof Ee == "number" ? Ee : 0
				},
				w = Y => A(Y) > 0,
				F = Y => {
					const Ee = g(Y, "dns_firewall.max_clusters_allowed");
					return typeof Ee == "number" ? Ee : 0
				},
				te = Y => F(Y) > 0,
				q = Y => p(Y, "zone.advanced_certificate_manager") || a(Y, "zone.advanced_certificate_manager"),
				re = Y => c(Y, "authoritative_dns.proxy_record_allowed") === !1 || g(Y, "authoritative_dns.proxy_record_allowed") === !1,
				Z = Y => a(Y, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				B = Y => c(Y, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				V = Y => {
					const Ee = c(Y, "authoritative_dns.min_record_ttl_allowed");
					return typeof Ee == "number" && Ee > 1 ? Ee : 60
				},
				ee = Y => a(Y, "foundation_dns.advanced_nameservers_allowed") || p(Y, "foundation_dns.advanced_nameservers_allowed"),
				le = Y => a(Y, "authoritative_dns.account_custom_nameservers_allowed"),
				pe = Y => p(Y, "authoritative_dns.zone_custom_nameservers_allowed"),
				ce = Y => pe(Y) || le(Y),
				_e = (Y, Ee) => ((0, e.el)(window.location.pathname) ? c : g)(Y, Ee),
				be = Y => ((0, e.el)(window.location.pathname) ? l : n)(Y),
				Te = Y => a(Y, "authoritative_dns.multi_provider_allowed") || p(Y, "authoritative_dns.multi_provider_allowed"),
				Pe = Y => p(Y, "authoritative_dns.cname_flattening_allowed"),
				ve = Y => a(Y, "secondary_dns.secondary_overrides") || p(Y, "secondary_dns.secondary_overrides"),
				De = Y => a(Y, "authoritative_dns.custom_soa_allowed") || p(Y, "authoritative_dns.custom_soa_allowed"),
				ke = Y => a(Y, "authoritative_dns.custom_ns_ttl_allowed") || p(Y, "authoritative_dns.custom_ns_ttl_allowed"),
				Xe = Y => a(Y, "secondary.create_zone"),
				Je = Y => ee(Y) || le(Y) || Te(Y) || Xe(Y) || ve(Y) || De(Y) || ke(Y)
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
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/utils/bootstrap.ts");
			const l = c => {
				if ((0, u.gm)()) return i.Z.set(e.ly, e.ZW), e.ZW;
				const p = c.userCommPreferences.data;
				if (p == null ? void 0 : p["language-locale"]) return (0, e.i_)(p["language-locale"]), p["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const v = (0, e.Kd)();
					return f(v) ? v : e.ZW
				}
			};

			function f(c) {
				const p = Object.keys(r.Q).find(v => r.Q[v] === c);
				return !!c && typeof c == "string" && p != null && (0, e.S8)(p)
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
					return a
				},
				GU: function() {
					return O
				},
				PR: function() {
					return i
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
					return c
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
				i = (0, e.P1)("user", r),
				u = E => {
					var T;
					return (T = i(E)) === null || T === void 0 ? void 0 : T.email.endsWith("@cloudflare.com")
				},
				l = E => {
					var T;
					return !!((T = i(E)) === null || T === void 0 ? void 0 : T.id)
				},
				f = E => {
					const T = i(E);
					if (!!T) return T.first_name && T.last_name ? `${T.first_name} ${T.last_name}` : T.email
				},
				c = E => {
					const T = i(E);
					return T && T.has_enterprise_zones
				},
				p = E => E.userCommPreferences,
				v = (0, e.P1)("userCommPreferences", p),
				n = E => {
					const T = i(E);
					return T && T.email_verified
				},
				s = E => {
					const T = v(E);
					return T && T.preferences.marketing_communication
				},
				o = E => E.userDetails,
				g = (0, e.P1)("userDetails", o),
				a = E => {
					const T = g(E);
					return T && T["2FA-RECOVERY"] === "scheduled"
				},
				m = E => {
					const T = g(E);
					return T && T["2FA-RECOVERY"] === "interrupted"
				},
				I = E => {
					const T = g(E);
					return T == null ? void 0 : T["NEW-USER-EMAIL"]
				},
				P = E => E.gates.assignments,
				C = (E, T) => E && E[T];

			function _(E, T) {
				const L = P(E);
				return L ? C(L, T) : void 0
			}
			const O = (E, T) => _(E, T) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$4: function() {
					return S
				},
				$t: function() {
					return Ue
				},
				A4: function() {
					return P
				},
				Cu: function() {
					return C
				},
				DQ: function() {
					return le
				},
				Ej: function() {
					return M
				},
				FH: function() {
					return O
				},
				ID: function() {
					return A
				},
				Iu: function() {
					return I
				},
				Ko: function() {
					return ve
				},
				Le: function() {
					return _e
				},
				Ly: function() {
					return q
				},
				M3: function() {
					return Y
				},
				N8: function() {
					return Je
				},
				NY: function() {
					return V
				},
				Ns: function() {
					return F
				},
				Ox: function() {
					return at
				},
				P4: function() {
					return y
				},
				RO: function() {
					return z
				},
				Tr: function() {
					return Pe
				},
				U: function() {
					return _
				},
				Ug: function() {
					return T
				},
				V6: function() {
					return Ee
				},
				WR: function() {
					return ct
				},
				Xg: function() {
					return m
				},
				ZB: function() {
					return ce
				},
				_y: function() {
					return w
				},
				cU: function() {
					return De
				},
				cg: function() {
					return ee
				},
				d2: function() {
					return de
				},
				il: function() {
					return te
				},
				jN: function() {
					return N
				},
				jg: function() {
					return Z
				},
				kC: function() {
					return k
				},
				kf: function() {
					return Oe
				},
				ko: function() {
					return Q
				},
				mK: function() {
					return xe
				},
				nA: function() {
					return a
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
					return G
				},
				vB: function() {
					return We
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
					return oe
				},
				xw: function() {
					return Te
				},
				z5: function() {
					return j
				},
				zO: function() {
					return ke
				},
				zW: function() {
					return qe
				},
				zh: function() {
					return se
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				i = t("../../../../node_modules/lodash/get.js"),
				u = t.n(i),
				l = t("../../../../node_modules/moment/moment.js"),
				f = t.n(l),
				c = t("../react/common/constants/billing/index.ts");

			function p(X) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var he = arguments[ue] != null ? Object(arguments[ue]) : {},
						Be = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && Be.push.apply(Be, Object.getOwnPropertySymbols(he).filter(function(Ae) {
						return Object.getOwnPropertyDescriptor(he, Ae).enumerable
					})), Be.forEach(function(Ae) {
						v(X, Ae, he[Ae])
					})
				}
				return X
			}

			function v(X, ue, he) {
				return ue = n(ue), ue in X ? Object.defineProperty(X, ue, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[ue] = he, X
			}

			function n(X) {
				var ue = s(X, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function s(X, ue) {
				if (typeof X != "object" || X === null) return X;
				var he = X[Symbol.toPrimitive];
				if (he !== void 0) {
					var Be = he.call(X, ue || "default");
					if (typeof Be != "object") return Be;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(X)
			}
			const o = (0, r.P1)("zone", X => X.zone),
				g = X => {
					var ue;
					return (ue = X.zoneVersioning) === null || ue === void 0 ? void 0 : ue.zoneVersionSelector
				},
				a = (0, e.P1)(o, g, (X, ue) => {
					var he, Be, Ae;
					let ye;
					if (Array.isArray(X) && X.length === 1 ? ye = X[0] : X && !Array.isArray(X) && (ye = X), !ye) return;
					const Re = !!(ue == null ? void 0 : ue.enabled);
					return p({}, ye, ye.name && {
						name: Re ? ue.rootZoneName : ye.name
					}, {
						versioning: {
							enabled: Re,
							isRoot: !((he = ye.name) === null || he === void 0 ? void 0 : he.endsWith(".config.cfdata.org")),
							version: Re ? ue.selectedVersion : 0,
							rootZoneId: Re ? ue.rootZoneId : (Be = (Ae = ye) === null || Ae === void 0 ? void 0 : Ae.id) !== null && Be !== void 0 ? Be : ""
						}
					})
				}),
				m = X => X.zone,
				I = X => X.zone.isRequesting,
				P = (0, e.P1)(a, m, (X, ue) => ({
					data: X,
					meta: ue
				})),
				C = X => {
					var ue, he;
					return (ue = (he = a(X)) === null || he === void 0 ? void 0 : he.id) !== null && ue !== void 0 ? ue : ""
				},
				_ = X => X.zones,
				O = X => X.zonesRoot,
				E = X => X.zonesAccount,
				T = (0, r.P1)("zones", _),
				L = (0, r.P1)("zonesRoot", O),
				S = (0, r.P1)("zonesAccount", E);

			function k(X) {
				const ue = a(X);
				return ue ? ue.created_on : null
			}

			function M(X, ue, he) {
				const Be = k(X);
				if (!Be) return;
				const Ae = f().duration(ue, he),
					ye = new Date(Be),
					Re = new Date(new Date().getTime() - Ae.asMilliseconds());
				return ye.getTime() > Re.getTime()
			}

			function y(X) {
				const ue = a(X);
				return ue ? ue.status : null
			}

			function D(X) {
				const ue = a(X);
				return ue ? ue.type : null
			}

			function N(X) {
				return (X == null ? void 0 : X.plan_pending) ? X == null ? void 0 : X.plan_pending : X == null ? void 0 : X.plan
			}

			function x(X) {
				const ue = a(X);
				if (!ue) return;
				const he = N(ue);
				return he && he.legacy_id
			}

			function G(X, ue) {
				const he = N(X);
				return !!he && c.Gs.indexOf(he.legacy_id) >= c.Gs.indexOf(ue)
			}

			function oe(X) {
				return !!X && X.status === "initializing"
			}

			function de(X) {
				return !!X && X.status === "pending"
			}

			function se(X) {
				return !!X && X.status === "active"
			}

			function K(X, ue) {
				if (!X) return !1;
				const he = N(X);
				return !!he && he.legacy_id === ue
			}

			function Q(X) {
				return K(X, "enterprise")
			}
			const z = X => Q(a(X));

			function j(X) {
				return K(X, "business")
			}
			const A = X => j(a(X));

			function w(X) {
				return K(X, "pro")
			}

			function F(X) {
				return K(X, "free")
			}
			const te = X => F(a(X));

			function q(X) {
				return !Q(X)
			}

			function re(X) {
				return X && X.owner
			}

			function Z(X, ue) {
				const he = re(ue);
				return !!he && he.type === "user" && he.id === X.id
			}

			function B(X) {
				const ue = a(X);
				return !!ue && ue.type === "partial"
			}

			function V(X) {
				const ue = a(X);
				return !!ue && ue.type === "secondary"
			}
			const ee = X => {
					var ue;
					const he = a(X);
					return !!(he == null ? void 0 : he.host) && !!((ue = he.plan) === null || ue === void 0 ? void 0 : ue.externally_managed)
				},
				le = X => {
					const ue = T(X);
					return ue && ue.some(Q)
				},
				pe = (X, ue) => {
					const he = a(X);
					return he && he.betas ? he.betas.includes(ue) : !1
				},
				ce = (X, ...ue) => u()(X, ["zoneFlags", "data", ...ue]),
				_e = (X, ...ue) => u()(X, ["accountFlags", "data", ...ue]),
				be = X => X.accountFlags.isRequesting,
				Te = X => X.zoneFlags.isRequesting,
				Pe = (X, ...ue) => u()(X, ["zoneFlagsChanges", "data", ...ue]),
				ve = X => X.zoneFlagsChanges.isRequesting,
				De = X => X.zoneFlags && X.zoneFlags.data,
				ke = X => X.zoneFlags,
				Xe = (0, e.P1)(De, ke, (X, ue) => ({
					data: X,
					meta: ue
				})),
				Je = (0, r.P1)("abuseUrls", X => X.overview.abuseUrls),
				Y = X => {
					const ue = a(X);
					return ue ? `/${ue.account.id}/${ue.name}` : null
				},
				Ee = X => X.zoneMarketingCampaigns,
				Oe = X => X.overview.zoneBlocks.data,
				qe = X => X.overview.zoneBlocks.isRequesting,
				Ue = X => X.overview.zoneBlocks.hasData,
				xe = X => {
					var ue, he;
					return (X == null || (ue = X.overview.zoneBlocks) === null || ue === void 0 || (he = ue.paginationData) === null || he === void 0 ? void 0 : he.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				We = X => X.overview.zoneBlocksReview.isRequesting,
				at = X => X.overview.zoneHold,
				ct = (0, r.P1)("zoneHold", at)
		},
		"../react/common/utils/formatDate.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			h.Z = (r, i, u = !1) => (0, e.p6)(r, i, u)
		},
		"../react/common/utils/getEnvironment.ts": function($, h, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				r = t("../functions/utils/preview-deploy-helpers.ts"),
				i = t("../functions/utils/constants.ts");
			const u = () => {
				var l, f, c, p;
				const n = e.parse(document.cookie)[i.b1];
				let s = null;
				n && (s = (0, r.E9)(n));
				let o = "production";
				switch (!0) {
					case (((l = s) === null || l === void 0 ? void 0 : l.projectType) === "previews" && ((f = s) === null || f === void 0 ? void 0 : f.deploymentId) === "staging"):
						o = "canary";
						break;
					case ((c = window) === null || c === void 0 || (p = c.build) === null || p === void 0 ? void 0 : p.isPreviewDeploy):
						o = "preview";
						break
				}
				return o
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
			const r = (i, u) => {
				const {
					roles: l = []
				} = (0, e.uF)(i) || {};
				return u.some(f => l.includes(f))
			}
		},
		"../react/common/utils/isGuards.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
					return l
				}
			});
			var e = t("../react/common/constants/index.ts"),
				r = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const i = c => c ? ["page", "per_page", "count", "total_count"].every(v => v in c && c[v]) : !1,
				u = (c = "") => e.Dy.includes(c.toLowerCase()),
				l = c => c !== null && typeof c == "object" && "name" in c && "size" in c && "type" in c && typeof c.slice == "function",
				f = c => (0, r.Z)(c)
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

			function r(c) {
				for (var p = 1; p < arguments.length; p++) {
					var v = arguments[p] != null ? Object(arguments[p]) : {},
						n = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(v).filter(function(s) {
						return Object.getOwnPropertyDescriptor(v, s).enumerable
					})), n.forEach(function(s) {
						i(c, s, v[s])
					})
				}
				return c
			}

			function i(c, p, v) {
				return p = u(p), p in c ? Object.defineProperty(c, p, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[p] = v, c
			}

			function u(c) {
				var p = l(c, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function l(c, p) {
				if (typeof c != "object" || c === null) return c;
				var v = c[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(c, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(c)
			}
			const f = c => {
				const p = (0, e.useQueryClient)(),
					v = _ => {
						var O;
						return p.getQueriesData((O = _) !== null && O !== void 0 ? O : c)
					},
					n = _ => {
						var O;
						return p.getQueryData((O = _) !== null && O !== void 0 ? O : c)
					},
					s = _ => {
						var O;
						return p.getQueriesData({
							queryKey: (O = _) !== null && O !== void 0 ? O : c,
							stale: !0
						})
					},
					o = (_, O) => {
						var E;
						p.setQueryData((E = O) !== null && E !== void 0 ? E : c, _)
					},
					g = async _ => {
						var O;
						await p.refetchQueries((O = _) !== null && O !== void 0 ? O : c)
					}, a = async (_, O) => {
						var E, T;
						await p.invalidateQueries((E = _) !== null && E !== void 0 ? E : c, r({
							refetchActive: !1
						}, (T = O) !== null && T !== void 0 ? T : {}))
					}, m = async (_, O) => {
						const E = _ || (T => {
							var L;
							return (T == null || (L = T.queryKey) === null || L === void 0 ? void 0 : L[0]) === c
						});
						await p.invalidateQueries(r({
							predicate: E,
							refetchActive: !1,
							refetchInactive: !1
						}, O))
					};
				return {
					refetch: g,
					cancelData: async () => {
						await p.cancelQueries(c)
					},
					invalidate: a,
					setData: o,
					getDataStale: s,
					getData: v,
					prefetchQuery: (_, O) => {
						var E;
						return p.prefetchQuery((E = O) !== null && E !== void 0 ? E : c, _)
					},
					getQueryData: n,
					predicateInvalidate: m,
					batchInvalidate: async ({
						queryKeysToInvalidate: _ = [],
						queryKeysToPredicateInvalidate: O = [],
						refetchActive: E = !1,
						refetchInactive: T = !1
					}) => {
						const L = _.map(k => a(k)),
							S = O.map(k => m(M => {
								var y;
								return (M == null || (y = M.queryKey) === null || y === void 0 ? void 0 : y[0]) === k
							}, {
								refetchActive: E,
								refetchInactive: T
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
					return i
				},
				XI: function() {
					return u
				},
				bK: function() {
					return p
				},
				jk: function() {
					return c
				},
				wb: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = v => /^https?:\/\/(.*)/.test(v),
				i = v => e.default.hostname.test(v),
				u = v => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(v),
				l = v => /^[!-~]+$/.test(v),
				f = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				c = v => f.test(v),
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
					return i
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
			const i = o => r().utc(o).format("YYYY-MM-DD"),
				u = o => r().utc(o).format(),
				l = o => r().utc(o).startOf("minute").format(),
				f = o => new Date(o),
				c = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				p = o => {
					const g = o / 60 / 60 / 1e3;
					return c[Object.keys(c).sort((a, m) => m - a).find(a => g >= a)]
				},
				v = (o, g = a => a.avg && a.avg.sampleInterval ? a.avg.sampleInterval : 1) => o.length === 0 ? 1 : o.reduce((a, m) => a + g(m), 0) / o.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				s = o => n[o]
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
			let e = function(i) {
				return i.DNS_RECORD_CREATE = "create DNS records", i.DNS_RECORD_UPDATE = "update DNS records", i.DNS_RECORD_DELETE = "delete DNS records", i.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", i
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
					return i
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
			let i = function(l) {
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
					return T
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/pages/home/alerts/routes.ts");
			const i = r._.createAlertWithSelection,
				u = r._.editAlert,
				l = (0, e.BC)`${i}/subtype`,
				f = (0, e.BC)`${i}/stepper`,
				c = (0, e.BC)`${f}/${"stepName"}`,
				p = (0, e.BC)`${f}/details`,
				v = (0, e.BC)`${f}/data-centers`,
				n = (0, e.BC)`${f}/ramps`,
				s = (0, e.BC)`${f}/threshold`,
				o = (0, e.BC)`${f}/review`,
				g = (0, e.BC)`${f}/confirm`,
				a = (0, e.BC)`${u}/stepper`,
				m = (0, e.BC)`${a}/${"stepName"}`,
				I = (0, e.BC)`${a}/details`,
				P = (0, e.BC)`${a}/data-centers`,
				C = (0, e.BC)`${a}/ramps`,
				_ = (0, e.BC)`${a}/threshold`,
				O = (0, e.BC)`${a}/review`,
				E = (0, e.BC)`${a}/confirm`,
				T = {
					magicTunnelHealthChooseSubType: l,
					magicTunnelHealthCreateStepperBase: f,
					magicTunnelHealthCreateStepper: c,
					magicTunnelHealthCreateDetails: p,
					magicTunnelHealthCreateSelectDataCenter: v,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: s,
					magicTunnelHealthCreateReview: o,
					magicTunnelHealthCreateConfirm: g,
					magicTunnelHealthEditStepperBase: a,
					magicTunnelHealthEditStepper: m,
					magicTunnelHealthEditDetails: I,
					magicTunnelHealthEditSelectDataCenter: P,
					magicTunnelHealthEditSelectRamps: C,
					magicTunnelHealthEditSetThreshold: _,
					magicTunnelHealthEditReview: O,
					magicTunnelHealthEditConfirm: E
				};
			h.Z = T
		},
		"../react/pages/home/alerts/config.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				jk: function() {
					return o
				},
				w8: function() {
					return g
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				r = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				i = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				l = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function f(a) {
				for (var m = 1; m < arguments.length; m++) {
					var I = arguments[m] != null ? Object(arguments[m]) : {},
						P = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(I).filter(function(C) {
						return Object.getOwnPropertyDescriptor(I, C).enumerable
					})), P.forEach(function(C) {
						c(a, C, I[C])
					})
				}
				return a
			}

			function c(a, m, I) {
				return m = p(m), m in a ? Object.defineProperty(a, m, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[m] = I, a
			}

			function p(a) {
				var m = v(a, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function v(a, m) {
				if (typeof a != "object" || a === null) return a;
				var I = a[Symbol.toPrimitive];
				if (I !== void 0) {
					var P = I.call(a, m || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(a)
			}
			const n = "Notifications",
				s = "notification",
				o = f({}, e._, r._j, i._j, u._),
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
				i = (0, e.BC)`${r}/pagerduty/connect`,
				u = (0, e.BC)`${r}/pagerduty/register`,
				l = (0, e.BC)`${r}/pagerduty`,
				f = {
					pagerDutyConnect: i,
					pagerDutyRegister: u,
					pagerDutyList: l
				};
			var c = null
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
				i = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${i}/destinations`,
				l = (0, e.BC)`${i}/create`,
				f = (0, e.BC)`${l}/${"alertType"}`,
				c = (0, e.BC)`${i}/edit/${"alertId"}`,
				p = {
					account: r,
					alerts: i,
					destinations: u,
					createAlert: l,
					createAlertWithSelection: f,
					editAlert: c
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
					return Ze
				},
				AY: function() {
					return fe
				},
				Ac: function() {
					return mt
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
					return $e
				},
				E8: function() {
					return U
				},
				Fl: function() {
					return Le
				},
				Fu: function() {
					return D
				},
				Gc: function() {
					return tt
				},
				Hc: function() {
					return Rt
				},
				IO: function() {
					return lt
				},
				JK: function() {
					return Xe
				},
				K: function() {
					return T
				},
				LI: function() {
					return Lt
				},
				LX: function() {
					return he
				},
				L_: function() {
					return Oe
				},
				Ly: function() {
					return Ve
				},
				MR: function() {
					return w
				},
				Mj: function() {
					return te
				},
				NB: function() {
					return kt
				},
				Oe: function() {
					return $t
				},
				Or: function() {
					return re
				},
				P5: function() {
					return Ot
				},
				PE: function() {
					return Te
				},
				Pd: function() {
					return wt
				},
				Pk: function() {
					return ve
				},
				Pp: function() {
					return xe
				},
				Q1: function() {
					return y
				},
				Qr: function() {
					return Be
				},
				Qv: function() {
					return Pe
				},
				Rp: function() {
					return St
				},
				S7: function() {
					return ft
				},
				Sh: function() {
					return Ne
				},
				Sl: function() {
					return Nt
				},
				TZ: function() {
					return Z
				},
				Tg: function() {
					return Je
				},
				Tp: function() {
					return gt
				},
				Uy: function() {
					return It
				},
				Vw: function() {
					return x
				},
				W3: function() {
					return ct
				},
				WR: function() {
					return Ye
				},
				WX: function() {
					return pe
				},
				XF: function() {
					return ut
				},
				Xb: function() {
					return V
				},
				Zs: function() {
					return Ee
				},
				_f: function() {
					return ye
				},
				b4: function() {
					return le
				},
				bc: function() {
					return vt
				},
				c2: function() {
					return A
				},
				cE: function() {
					return Tt
				},
				dh: function() {
					return Ue
				},
				fE: function() {
					return qe
				},
				g7: function() {
					return be
				},
				hO: function() {
					return at
				},
				hV: function() {
					return Mt
				},
				hk: function() {
					return C
				},
				hr: function() {
					return ee
				},
				it: function() {
					return We
				},
				j3: function() {
					return At
				},
				jN: function() {
					return ke
				},
				jo: function() {
					return xt
				},
				k3: function() {
					return yt
				},
				m8: function() {
					return K
				},
				nm: function() {
					return nt
				},
				oW: function() {
					return ie
				},
				pH: function() {
					return Q
				},
				pi: function() {
					return se
				},
				r4: function() {
					return Ft
				},
				rI: function() {
					return F
				},
				s7: function() {
					return _t
				},
				sg: function() {
					return st
				},
				tB: function() {
					return m
				},
				tN: function() {
					return _e
				},
				u_: function() {
					return ht
				},
				vV: function() {
					return Re
				},
				vc: function() {
					return De
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				i = t("../../../../node_modules/moment/moment.js"),
				u = t.n(i),
				l = t("../../../common/util/types/src/api/domain.ts"),
				f = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				c = t("../react/utils/url.ts"),
				p = t("../react/pages/home/domain-registration/config.ts"),
				v = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function s(d) {
				for (var b = 1; b < arguments.length; b++) {
					var H = arguments[b] != null ? Object(arguments[b]) : {},
						ne = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(H).filter(function(me) {
						return Object.getOwnPropertyDescriptor(H, me).enumerable
					})), ne.forEach(function(me) {
						o(d, me, H[me])
					})
				}
				return d
			}

			function o(d, b, H) {
				return b = g(b), b in d ? Object.defineProperty(d, b, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[b] = H, d
			}

			function g(d) {
				var b = a(d, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function a(d, b) {
				if (typeof d != "object" || d === null) return d;
				var H = d[Symbol.toPrimitive];
				if (H !== void 0) {
					var ne = H.call(d, b || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(d)
			}

			function m(d) {
				return d.filter(b => b.isSelected).reduce((b, {
					name: H,
					fees: ne,
					isZoneEntitlementPresent: me
				}) => me || !(0, e.isNumber)(ne == null ? void 0 : ne.transfer_fee) ? b : mt(H) ? b + (ne == null ? void 0 : ne.transfer_fee) * 2 : b + (ne == null ? void 0 : ne.transfer_fee), 0)
			}

			function I(d) {
				return d.filter(b => b.registrar.toLowerCase() === "godaddy")
			}
			const P = "MMM D, YYYY";

			function C(d, b, H, ne) {
				var me, Se, je, Qe, ze, Ge, rt, dt, et, Ke, Bt, jt;
				const He = d[b.name],
					Gt = () => mt(b.name) ? u()(b.expires_at).add(2, "years").format(P) : u()(b.expires_at).add(1, "year").format(P);
				return s({
					name: b == null ? void 0 : b.name,
					zone: He,
					entitlements: H,
					registryCheck: ne,
					nameservers: b.name_servers,
					isAvailable: b.available,
					lastKnownStatus: b.last_known_status,
					authCode: b.auth_code,
					isEnterpriseZone: (He == null || (me = He.plan) === null || me === void 0 ? void 0 : me.legacy_id) === "enterprise",
					isActiveZone: (He == null ? void 0 : He.status) === "active",
					corResponsesPending: b.cor_responses_pending,
					isCorLocked: b.cor_locked,
					corLockedUntil: b.cor_locked_until ? u()(b.cor_locked_until).format(P) : null,
					isFullZone: (He == null ? void 0 : He.type) == n.xd.Full,
					isLocked: b.locked,
					registrar: b.current_registrar || p.JM,
					zoneId: He == null ? void 0 : He.id,
					currentExpiration: u()(b.expires_at).format(P),
					newExpiration: Gt(),
					lastEntitledAt: b.last_entitled_at ? new Date(b.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(H) && !!H.find(Wt => Wt.id === p.g5 && Wt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: b.transfer_in && E(b.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: b.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: b.transfer_in,
					transferOut: b.transfer_out,
					autoRenew: b.auto_renew === !0,
					lastTransferredAt: b.last_transferred_at,
					createdAt: b.created_at,
					paymentExpiresAt: u()(b.payment_expires_at).isValid() ? u()(b.payment_expires_at) : u()(b.expires_at).isValid() ? u()(b.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (Se = b.contacts) === null || Se === void 0 || (je = Se.administrator) === null || je === void 0 ? void 0 : je.id,
						[n.l2.Billing]: (Qe = b.contacts) === null || Qe === void 0 || (ze = Qe.billing) === null || ze === void 0 ? void 0 : ze.id,
						[n.l2.Registrant]: (Ge = b.contacts) === null || Ge === void 0 || (rt = Ge.registrant) === null || rt === void 0 ? void 0 : rt.id,
						[n.l2.Technical]: (dt = b.contacts) === null || dt === void 0 || (et = dt.technical) === null || et === void 0 ? void 0 : et.id
					},
					landing: b.landing,
					privacy: b.privacy,
					whois: b.whois,
					emailVerified: b.email_verified,
					materialChanges: L(b.material_changes),
					corChanges: b.cor_changes ? k(Object.assign(s({}, O), b.cor_changes)) : {},
					registryStatuses: b.registry_statuses ? b.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Ke = b.domain_protection_services) === null || Ke === void 0 ? void 0 : Ke.status
					},
					deletion: {
						isDeletable: b == null || (Bt = b.deletion) === null || Bt === void 0 ? void 0 : Bt.is_deletable
					},
					premiumType: b == null ? void 0 : b.premium_type,
					fees: b == null ? void 0 : b.fees
				}, b.domain_move && {
					domainMove: {
						ineligibilityReasons: (jt = b.domain_move) === null || jt === void 0 ? void 0 : jt.ineligibility_reasons
					}
				}, b.actionable_metadata && {
					actionableMetadata: _(b.actionable_metadata)
				}, b.policies && {
					policies: s({}, b.policies.suspension && {
						suspension: {
							parked: b.policies.suspension.parked,
							parkingReason: b.policies.suspension.parking_reason,
							paymentExpired: b.policies.suspension.payment_expired
						}
					})
				})
			}

			function _(d) {
				return d.map(b => ({
					accountContext: b.account_context,
					createdAt: b.created_at,
					expiresAt: b.expires_at,
					sentAt: b.sent_at,
					status: b.status,
					type: b.type
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

			function T(d) {
				let b = d.extensions;
				(b == null ? void 0 : b.application_purpose) && (b == null ? void 0 : b.nexus_category) && (d.extensions = {
					nexusCategory: b.nexus_category,
					applicationPurpose: b.application_purpose
				});
				let H = s({}, typeof d.id == "string" ? {
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
				let b = [];
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
				for (const ne in d) {
					const me = d[ne],
						Se = H[me];
					b.push(Se)
				}
				return b
			}
			const S = d => {
				if (!d) return null;
				let b = d;
				return d.includes("C31") && (b = "C31"), d.includes("C32") && (b = "C32"), b
			};

			function k(d) {
				return s({}, typeof d.id == "string" ? {
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
				const b = {
					name: "",
					zoneId: "",
					zone: s({
						id: "",
						name: "",
						status: "pending",
						plan: s({
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
					transferConditions: s({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, d.transferConditions || {}),
					transferIn: s({
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
				return Object.assign(b, d)
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
				const b = p.Py.concat(p.ui).reduce((H, ne) => s({}, H, {
					[ne]: []
				}), {});
				return d.forEach(H => {
					let ne = N(H.registrar);
					ne in b || (ne = p.ui), st(H.name) && (ne = "uk"), b[ne].push(H)
				}), Object.keys(b).sort((H, ne) => H.localeCompare(ne)).map(H => ({
					registrar: H,
					domains: b[H]
				})).filter(H => H.domains.length > 0)
			}

			function N(d) {
				return d == null ? void 0 : d.toLowerCase().replace(/\s|,|\./g, "")
			}

			function x(d) {
				if (!d || !d.registrar) return "unknown";
				if (st(d.name)) return "uk";
				const b = N(d.registrar);
				return b in p.gM ? b : "unknown"
			}
			const G = [];

			function oe(d) {
				return G.some(b => d.endsWith("." + b))
			}

			function de(d) {
				return !d.isEnterpriseZone || !Array.isArray(d.entitlements) ? !1 : !!d.entitlements.find(({
					id: b,
					allocation: H
				}) => b === p.g5 && H.value === !0)
			}

			function se(d) {
				var b;
				const H = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let ne = !1,
					me = null;
				return (b = d.registryStatuses) === null || b === void 0 || b.some(Se => {
					H.includes(Se) && (me = Se, ne = !0)
				}), [ne, me]
			}

			function K(d, b = !1) {
				if (!d) return [!1, v.keys.cannot_transfer_default];
				if (d.zone.status !== "active") return [!1, v.keys.cannot_transfer_zone_not_active];
				if (!d.isFullZone && !de(d)) return [!1, v.keys.cannot_transfer_zone_not_eligible];
				if (d.registrar === "Cloudflare") return [!1, v.keys.cannot_transfer_domain_on_cf];
				if (d.isAvailable) return [!1, v.keys.cannot_transfer_domain_available];
				if (!d.transferConditions) return [!1, v.keys.cannot_transfer_domain_transfer_conditions];
				if (!b && It(d == null ? void 0 : d.premiumType)) return [!1, v.keys.cannot_transfer_domain_premium];
				if (Q(d)) return [!1, v.keys.cannot_transfer_domain_transfer_in_progress];
				let H;
				for (H in d.transferConditions)
					if (H !== "not_premium" && !d.transferConditions[H]) return [!1, v.keys.cannot_transfer_domain_transfer_conditions];
				if (oe(d.name)) return [!1, v.keys.cannot_transfer_domain_tld_not_supported];
				const [ne, me] = se(d);
				return ne && me ? [!1, v.keys.cannot_transfer_domain_registry_status[me]] : [!0, ""]
			}

			function Q(d) {
				var b, H;
				return !!d.transferIn && !((b = d.transferConditions) === null || b === void 0 ? void 0 : b.not_started) && !!(st(d.name) || ((H = d.registryStatuses) === null || H === void 0 ? void 0 : H.includes(n.rj.PENDING_TRANSFER)))
			}

			function z(d) {
				return !!d.registrar && !!d.currentExpiration
			}

			function j(d, b = !1) {
				const [H] = K(d, b);
				return z(d) ? ce(d) ? n.M5.InProgressOrOnCF : H ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function A(d) {
				return d.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(d.transferIn.enter_auth_code) || !1
			}

			function w(d) {
				return d.registrar === "Cloudflare"
			}

			function F(d) {
				return !!(d == null ? void 0 : d.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function te(d) {
				return !!(d == null ? void 0 : d.includes(n.rj.PENDING_TRANSFER))
			}
			const q = "Invalid date";

			function re(d) {
				return d.newExpiration === q ? "Unavailable" : d.newExpiration
			}

			function Z(d) {
				return d.currentExpiration === q ? "Unavailable" : d.currentExpiration
			}

			function B(d) {
				return d.substring(d.indexOf("."))
			}

			function V(d = "") {
				return d.indexOf(".") !== -1 ? d.substring(0, d.indexOf(".")) : d
			}

			function ee(d) {
				return d.map(b => b.name).map(b => B(b)).filter((b, H, ne) => !ne.includes(b, H + 1))
			}

			function le(d) {
				if (p.no) return [!0, ""];
				if (!w(d)) return [!1, n.ok.NotOnCF];
				if (d.isCorLocked) return [!1, d.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (d.lastTransferredAt) {
					const b = u()(d.lastTransferredAt),
						H = u().duration(u()().diff(b)).as("days"),
						ne = st(d.name);
					if (H < (ne ? 1 : 60)) return [!1, ne ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (d.createdAt) {
					const b = u()(d.createdAt);
					if (u().duration(u()().diff(b)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function pe(d) {
				return !!(p.Bc || d.transferOut)
			}

			function ce(d) {
				return be(d) || w(d)
			}

			function _e(d) {
				return !be(d) && w(d)
			}

			function be(d) {
				return !d || d.lastKnownStatus === n.kd.PENDING_TRANSFER || d.lastKnownStatus === n.kd.TRANSFER_FOA_PENDING || !w(d) && d.transferConditions && !d.transferConditions.not_started || !1
			}

			function Te(d) {
				return !(oe(d.name) || d.transferConditions && !d.transferConditions.supported_tld)
			}

			function Pe(d) {
				return (d == null ? void 0 : d.includes("/")) ? !0 : d.split("").some(b => b.charCodeAt(0) > 123)
			}

			function ve(d) {
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

			function ke(d) {
				return d.transferIn && d.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function Xe(d) {
				const b = ["CU", "KP", "IR", "SY"];
				return d.filter(H => !b.includes(H.code))
			}

			function Je(d) {
				if (!!d) return `${d.charAt(0).toUpperCase()}${d.slice(1)}${d.charAt(d.length-1)==="."?"":"."}`
			}

			function Y(d) {
				const b = {};
				for (const [H, ne] of Object.entries(d)) {
					if (ne && typeof ne == "string") {
						Object.assign(b, {
							[H]: ne.trim()
						});
						continue
					}
					Object.assign(b, {
						[H]: ne
					})
				}
				return b
			}

			function Ee(d) {
				return u()(d).add(40, "days")
			}

			function Oe(d) {
				const b = d.paymentExpiresAt || d.payment_expires_at,
					H = Ee(b);
				return u()().isBetween(b, H)
			}

			function qe(d) {
				var b;
				return !(d == null ? void 0 : d.registryStatuses) || !Array.isArray(d == null ? void 0 : d.registryStatuses) && !(0, e.isString)(d == null ? void 0 : d.registryStatuses) ? !1 : (b = d.registryStatuses) === null || b === void 0 ? void 0 : b.includes(n.rj.REDEMPTION_PERIOD)
			}

			function Ue(d) {
				var b;
				return !(d == null ? void 0 : d.registryStatuses) || !Array.isArray(d == null ? void 0 : d.registryStatuses) && !(0, e.isString)(d == null ? void 0 : d.registryStatuses) ? !1 : (b = d.registryStatuses) === null || b === void 0 ? void 0 : b.includes(n.rj.PENDING_DELETE)
			}

			function xe(d) {
				return [".us"].includes(d)
			}

			function We(d) {
				return [".us"].includes(d)
			}

			function at(d) {
				switch (d) {
					case ".us":
						return ue();
					default:
						return []
				}
			}

			function ct(d) {
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

			function ue() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([d, b]) => ({
						value: d,
						label: b
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([d, b]) => ({
						value: d,
						label: b
					}))
				}]
			}

			function he(d, b, H) {
				return b[b.length - 1][H] === d[H]
			}

			function Be(d) {
				return Boolean(Object.keys(d).length === 0)
			}

			function Ae(d) {
				return u()().add(d, "year").format(P)
			}

			function ye({
				accountName: d
			}) {
				var b;
				const H = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((b = d.toLowerCase().match(H)) === null || b === void 0 ? void 0 : b[0]) || ""
			}

			function Re(d) {
				return !!d.match(f.default.email)
			}

			function gt(d) {
				return d === l.W7.PENDING_UPDATE
			}

			function tt(d) {
				return d ? Object.values(l.wR).filter(b => b !== l.wR.OFFBOARDED).includes(d) : !1
			}

			function _t(d) {
				return d ? [l.wR.LOCKED, l.wR.ONBOARDED, l.wR.ONBOARDING_INITIATED, l.wR.PENDING_REGISTRY_LOCK, l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(d) : !1
			}

			function it(d) {
				return d ? l.wR.UNLOCKED === d : !1
			}

			function Et(d) {
				return d ? l.wR.LOCKED === d : !1
			}

			function Lt(d) {
				return d ? l.wR.PENDING_REGISTRY_LOCK === d : !1
			}

			function $e(d) {
				return d ? [l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(d) : !1
			}

			function lt(d) {
				var b;
				return !1
			}

			function Ye(d) {
				var b;
				return !1
			}

			function Ze(d) {
				var b;
				return !1
			}

			function ut(d) {
				var b;
				return !1
			}

			function U(d) {
				var b;
				return !1
			}

			function ie(d) {
				return Object.keys(l.wR).find(b => l.wR[b].toLowerCase() === d.toLowerCase())
			}

			function fe(d) {
				var b;
				const H = (b = ie(d)) === null || b === void 0 ? void 0 : b.toLowerCase();
				return H ? v.keys.protection_status[H] : v.keys.protection_status.unknown
			}

			function Ce(d) {
				return ["com", "net"].includes(d)
			}

			function Le(d) {
				const b = (0, c.pu)(d);
				return Ce(b) ? l.wR.PENDING_REGISTRY_LOCK : l.wR.LOCKED
			}

			function Ne(d) {
				return (0, c.pu)(d) === "co" ? 5 : 10
			}

			function nt(d, b) {
				return b ? 1 : (0, c.pu)(d) === "co" ? 5 : (0, c.pu)(d) === "org" ? 1 : 10
			}

			function st(d) {
				return (0, c.pu)(d) === "uk"
			}

			function Tt(d) {
				return (0, c.pu)(d) === "us"
			}

			function mt(d) {
				return (0, c.pu)(d) === "ai"
			}

			function St(d) {
				return u()(d).isValid()
			}

			function Ve(d) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(d)
			}

			function Ot(d) {
				return !!(d == null ? void 0 : d.id)
			}

			function kt(d) {
				return d ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(d) : !1
			}

			function wt(d) {
				return d ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(d) : !1
			}

			function Mt(d) {
				var b;
				return (d == null ? void 0 : d.lastKnownStatus) ? (b = d.lastKnownStatus) === null || b === void 0 ? void 0 : b.includes("deletionIrredeemable") : !1
			}

			function It(d) {
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

			function Rt(d) {
				if (!d || !d.message) return n.OJ.DEFAULT;
				const {
					message: b
				} = d;
				switch (!0) {
					case b.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case b.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case b.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function ft(d) {
				var b, H;
				return !!(((b = d.policies) === null || b === void 0 || (H = b.suspension) === null || H === void 0 ? void 0 : H.parked) && d.policies.suspension.parkingReason)
			}

			function At(d) {
				var b, H;
				return ft(d) && ((b = d.policies) === null || b === void 0 || (H = b.suspension) === null || H === void 0 ? void 0 : H.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function yt(d) {
				var b, H;
				return ft(d) && ((b = d.policies) === null || b === void 0 || (H = b.suspension) === null || H === void 0 ? void 0 : H.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function Nt(d) {
				var b;
				return !((b = d.domainMove) === null || b === void 0 ? void 0 : b.ineligibilityReasons.length)
			}

			function $t(d) {
				var b, H;
				return !!((b = d.domainMove) === null || b === void 0 || (H = b.ineligibilityReasons) === null || H === void 0 ? void 0 : H.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Pt(d) {
				var b;
				return (b = d.actionableMetadata) === null || b === void 0 ? void 0 : b.find(H => H.type === n.wg.DOMAIN_MOVE)
			}

			function xt(d) {
				const b = Pt(d);
				return (b == null ? void 0 : b.status) === "pending" && b.accountContext === n._5.GAINING
			}

			function ht(d) {
				const b = Pt(d);
				return (b == null ? void 0 : b.status) === "pending" && b.accountContext === n._5.LOSING
			}

			function Ft(d) {
				const b = B(d.name);
				return !p.Pf.includes(b)
			}

			function vt(d) {
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
					return i
				},
				Pf: function() {
					return g
				},
				Py: function() {
					return f
				},
				QZ: function() {
					return a
				},
				WK: function() {
					return n
				},
				g5: function() {
					return s
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
				l = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				f = Object.keys(l),
				c = !0,
				p = (0, r.J8)("registrar_mock_transfer_out") || !1,
				v = (0, r.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				s = "cf_registrar.enabled",
				o = "@abcABC1234567890123456",
				g = [".us"],
				a = [".travel", ".us", ".ong", ".ngo"],
				m = (0, e.BC)`/${"accountId"}`,
				I = (0, e.BC)`${m}/add-site`,
				P = (0, e.BC)`${m}/registrar`,
				C = (0, e.BC)`${P}/domains`,
				_ = (0, e.BC)`${P}/action-center`,
				O = (0, e.BC)`${P}/domain/${"zoneName"}`,
				E = (0, e.BC)`${O}/configuration`,
				T = (0, e.BC)`${O}/contacts`,
				L = (0, e.BC)`${P}/pricing`,
				S = (0, e.BC)`${P}/protection`,
				k = (0, e.BC)`${P}/register`,
				M = (0, e.BC)`${k}/checkout`,
				y = (0, e.BC)`${k}/checkout/${"token"}`,
				D = (0, e.BC)`${k}/success`,
				N = (0, e.BC)`${P}/tlds`,
				x = (0, e.BC)`${P}/transfer`,
				G = (0, e.BC)`${P}/transfer/${"zoneName"}`,
				oe = (0, e.BC)`/registrar/accounts/verify_email`,
				de = (0, e.BC)`/registrar/domains/verify_email`,
				se = (0, e.BC)`/sign-up/registrar`,
				K = (0, e.BC)`${P}/verify-email`,
				Q = (0, e.BC)`${m}/${"zoneName"}`,
				z = (0, e.BC)`${m}/domains`,
				j = (0, e.BC)`${z}/action-center`,
				A = (0, e.BC)`${z}/${"zoneName"}`,
				w = (0, e.BC)`${A}/configuration`,
				F = (0, e.BC)`${A}/contacts`,
				te = (0, e.BC)`${z}/pricing`,
				q = (0, e.BC)`${z}/protection`,
				re = (0, e.BC)`${z}/register`,
				Z = (0, e.BC)`${re}/checkout`,
				B = (0, e.BC)`${re}/checkout/${"token"}`,
				V = (0, e.BC)`${re}/success`,
				ee = (0, e.BC)`${z}/tlds`,
				le = (0, e.BC)`${z}/transfer`,
				pe = (0, e.BC)`${z}/transfer/${"zoneName"}`,
				ce = (0, e.BC)`${z}/verify-email`,
				_e = {
					addSite: I,
					domains: C,
					domainsActionCenter: _,
					domainsDomain: O,
					domainsDomainConfiguration: E,
					domainsDomainContacts: T,
					domainsPricing: L,
					domainsProtection: S,
					domainsRegister: k,
					domainsRegisterCheckout: M,
					domainsRegisterCheckoutToken: y,
					domainsRegisterSuccess: D,
					domainsTlds: N,
					domainsTransfer: x,
					domainsTransferZone: G,
					registrar: P,
					registrarAccountsVerifyEmail: oe,
					registrarDomainsVerifyEmail: de,
					signup: se,
					verifyEmail: K,
					zone: Q
				},
				be = {
					LEGACY_domains: z,
					LEGACY_domainsActionCenter: j,
					LEGACY_domainsDomain: A,
					LEGACY_domainsDomainConfiguration: w,
					LEGACY_domainsDomainContacts: F,
					LEGACY_domainsPricing: te,
					LEGACY_domainsProtection: q,
					LEGACY_domainsRegister: re,
					LEGACY_domainsRegisterCheckout: Z,
					LEGACY_domainsRegisterCheckoutToken: B,
					LEGACY_domainsRegisterSuccess: V,
					LEGACY_domainsTlds: ee,
					LEGACY_domainsTransfer: le,
					LEGACY_domainsTransferZone: pe,
					LEGACY_verifyEmail: ce
				},
				Te = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				HO: function() {
					return c
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
			const i = v => {
					const n = v && v.accountFlags && v.accountFlags.data && v.accountFlags.data.registrar && v.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(s => s.trim()) : []
				},
				u = v => {
					var n, s, o;
					return ((n = v.accountFlags) === null || n === void 0 || (s = n.data) === null || s === void 0 || (o = s.registrar) === null || o === void 0 ? void 0 : o["registrar-managed"]) || !1
				},
				l = v => v.account ? v.account.email : "",
				f = v => !1,
				c = v => f(v) && (0, e.oJ)((0, e.Zu)(v)),
				p = v => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: s
					} = v.registrar.registrations;
					return n && !(s.accepted_date || s.id || s.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				J: function() {
					return s
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(i),
				l = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function f(o) {
				for (var g = 1; g < arguments.length; g++) {
					var a = arguments[g] != null ? Object(arguments[g]) : {},
						m = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(a).filter(function(I) {
						return Object.getOwnPropertyDescriptor(a, I).enumerable
					})), m.forEach(function(I) {
						c(o, I, a[I])
					})
				}
				return o
			}

			function c(o, g, a) {
				return g = p(g), g in o ? Object.defineProperty(o, g, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[g] = a, o
			}

			function p(o) {
				var g = v(o, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function v(o, g) {
				if (typeof o != "object" || o === null) return o;
				var a = o[Symbol.toPrimitive];
				if (a !== void 0) {
					var m = a.call(o, g || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(o)
			}
			let n = function(o) {
				return o.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", o.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", o.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", o.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", o.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", o.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", o.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", o.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", o.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", o.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", o.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", o.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", o.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", o.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", o.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", o.RENEW_DOMAIN_COMPLETED = "domain renewal completed", o.RESTORE_DOMAIN_INIT = "click to open domain restore modal", o.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", o.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", o.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", o.RESTORE_DOMAIN_FAILURE = "domain restore failed", o.RESTORE_DOMAIN_COMPLETED = "domain restore completed", o.DOMAIN_DELETE_INIT = "click to begin domain delete", o.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", o.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", o.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", o.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", o.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", o.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", o.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", o.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", o.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", o.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", o.DOMAIN_MOVE_START_FLOW = "Start domain move flow", o.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", o.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", o.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", o.DOMAIN_MOVE_SUBMIT = "Submit domain move", o.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", o.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", o.DOMAIN_MOVE_CANCEL = "Domain move cancel", o.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", o.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", o.ACTION_CENTER_NAVIGATE = "Navigate to actions center", o.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", o.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", o.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", o
			}({});

			function s(o, g, a) {
				if (!(g == null ? void 0 : g.name)) return null;
				u().sendEvent(o, f({
					domain: {
						name: g.name,
						premium: (0, l.Uy)(g == null ? void 0 : g.premiumType),
						paymentExpiresAt: r()(g == null ? void 0 : g.paymentExpiresAt).format()
					},
					category: "registrar"
				}, a))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				HX: function() {
					return c
				},
				Re: function() {
					return C
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
				i = t("webpack/sharing/consume/default/react/react"),
				u = t.n(i),
				l = t("../react/pages/home/members/utils.ts"),
				f = t("../react/utils/translator.tsx");
			let c = function(_) {
				return _.UNKNOWN = "unknown", _.WORKERS = "workers", _.ACCESS_APPS = "access_apps", _.ACCESS_IDP = "access_ipd", _
			}({});
			const p = [{
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

			function v(_) {
				return {
					key: "com.cloudflare.edge.worker.script." + _.id,
					name: _.name + (_.environment ? ` (${_.environment})` : ""),
					type: c.WORKERS
				}
			}

			function n(_) {
				const O = _;
				return {
					key: "com.cloudflare.edge.access.app." + O.id,
					name: O.name,
					type: c.ACCESS_APPS
				}
			}
			const s = {
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

			function o(_) {
				const O = _,
					E = s[O.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + O.id,
					name: `${E||"Unknown Type"}${O.name?" - "+O.name:""}`,
					type: c.ACCESS_IDP
				}
			}
			const g = async (_, O, E) => O == c.WORKERS ? (await a(`/accounts/${_}/workers/scripts-search?name=${E}&perPage=10`)).body.result.map(T => ({
				id: T.id,
				name: T.service_name || T.script_name,
				environment: T.environment_name
			})).map(v) : O == c.ACCESS_APPS ? (await a(`/accounts/${_}/access/apps?name=${E}`)).body.result.map(n) : O == c.ACCESS_IDP ? (await a(`/accounts/${_}/access/identity_providers`)).body.result.map(o) : [];
			async function a(_) {
				try {
					return await (0, e.get)(_, {
						hideErrorAlert: !0
					})
				} catch (T) {
					var O, E;
					throw ((O = T.body) === null || O === void 0 ? void 0 : O.errors) ? T.body.errors[0].message : T.text ? T.text : ((E = T.response) === null || E === void 0 ? void 0 : E.statusText) ? T.response.statusText : "Unexpected error response"
				}
			}
			const m = async (_, O) => {
				const E = O.split("."),
					T = E.pop(),
					L = E.join(".");
				let S;
				switch (L) {
					case "com.cloudflare.edge.worker.script":
						const k = (await a(`/accounts/${_}/workers/scripts-search/${T}`)).body.result;
						return v({
							id: k.id,
							name: k.service_name || k.script_name,
							environment: k.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return S = await a(`/accounts/${_}/access/identity_providers/${T}`), o(S.body.result);
					case "com.cloudflare.edge.access.app":
						return S = await a(`/accounts/${_}/access/apps/${T}`), n(S.body.result)
				}
			}, I = {
				loading: !0,
				isDisabled: !0
			}, P = () => "production";

			function C(_) {
				const O = (0, l.vq)(_),
					[E, T] = (0, i.useState)(!0),
					[L, S] = (0, i.useState)(p.filter(k => O.find(M => M.meta.scopes === k.scopeKeyPrefix)).map(k => {
						const M = k.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							y = O.filter(D => D.meta.scopes === k.scopeKeyPrefix).find(D => !D.meta.visibility || D.meta.visibility !== "beta");
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
				return (0, i.useEffect)(() => {
					(async () => {
						try {
							await g(_, c.ACCESS_APPS, ""), I.isDisabled = !1
						} catch (k) {
							k.startsWith("access.api.error.not_enabled") ? I.disableInfo = (0, f.ZP)("policy.granular_resources.type.access.not_enabled") : I.error = k
						}
						I.loading = !1, S([...L])
					})()
				}, []), (0, i.useEffect)(() => {
					const k = L.find(M => M.state.loading);
					T(!!k)
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
					return T
				},
				Np: function() {
					return s
				},
				Rl: function() {
					return o
				},
				Sb: function() {
					return a
				},
				Sw: function() {
					return E
				},
				Sz: function() {
					return O
				},
				Ti: function() {
					return L
				},
				Uw: function() {
					return C
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
				i = (0, e.BC)`${r}/members`,
				u = (0, e.BC)`${i}/invite`,
				l = (0, e.BC)`${i}/invite/${"memberId"}`,
				f = (0, e.BC)`${i}/add-policy/${"memberId"}`,
				c = (0, e.BC)`${i}/user-groups`,
				p = (0, e.BC)`${i}/user-groups/${"userGroupId"}`,
				v = "com.cloudflare.api.account",
				s = v + "." + "zone",
				o = s + ".",
				g = 100,
				a = 200,
				m = 5,
				I = 300,
				P = "INVITE_TOAST",
				C = "00000000000000000000000000000000",
				_ = {
					account: r,
					members: i,
					groups: c,
					group: p,
					inviteMembers: u,
					editMember: l,
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
				T = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				L = {
					accountId: "",
					effect: O.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/sparrowEvents.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Bz: function() {
					return p
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
				for (var s = 1; s < arguments.length; s++) {
					var o = arguments[s] != null ? Object(arguments[s]) : {},
						g = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(o).filter(function(a) {
						return Object.getOwnPropertyDescriptor(o, a).enumerable
					})), g.forEach(function(a) {
						u(n, a, o[a])
					})
				}
				return n
			}

			function u(n, s, o) {
				return s = l(s), s in n ? Object.defineProperty(n, s, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = o, n
			}

			function l(n) {
				var s = f(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(n, s) {
				if (typeof n != "object" || n === null) return n;
				var o = n[Symbol.toPrimitive];
				if (o !== void 0) {
					var g = o.call(n, s || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CLICK_USERGROUP_BETA_BUTTON = "click usergroup beta button", n.MEMBERS_TAB_NAVIGATE = "nagivate members tab", n
			}({});
			const p = ({
					name: n,
					additionalData: s = {}
				}) => {
					r().sendEvent(n, i({}, s || {}))
				},
				v = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
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
					return C
				},
				Ld: function() {
					return o
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
					return T
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				r = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				i = t("../react/pages/home/members/constants.ts");

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
				var k = c(S, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function c(S, k) {
				if (typeof S != "object" || S === null) return S;
				var M = S[Symbol.toPrimitive];
				if (M !== void 0) {
					var y = M.call(S, k || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(S)
			}
			const p = () => u({}, i.Ti),
				v = () => u({}, i.Lc, {
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
				s = (S, k, M) => {
					var y;
					let D = [],
						N = [];
					const x = [],
						G = [];
					S.scopes.forEach(se => {
						if (se.mode === i.Sw.all) M ? D.push({
							id: M
						}) : D.push({
							scope: {
								key: `com.cloudflare.api.account.${k}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (se.mode === i.Sw.domain_group) {
							const Q = {
								id: se.resourceGroupId
							};
							se.effect === i.Sz.allow ? D.push(Q) : N.push(Q)
						} else if (se.mode === i.Sw.zone) {
							const Q = `${i.Rl}${se.zoneId}`;
							se.effect === i.Sz.allow ? x.push(Q) : G.push(Q)
						} else if (se.mode === i.Sw.granular && se.granularResourceKey) {
							var K;
							const Q = se.granularProduct,
								j = `${(K=r.s_.find(A=>A.value===Q))===null||K===void 0?void 0:K.scopeSubsetOfPrefix}.${k}`;
							D.push({
								scope: {
									key: `${se.granularResourceKey}`,
									subset_of: [{
										key: `${j}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), x.length && (D = D.concat(n(x))), G.length && (N = N.concat(n(G)));
					const oe = (y = S.permission_groups) === null || y === void 0 ? void 0 : y.map(se => ({
							id: se
						})),
						de = [];
					return de.push({
						access: i.Sz.allow,
						permission_groups: oe,
						resource_groups: D
					}), N.length && de.push({
						access: i.Sz.deny,
						permission_groups: oe,
						resource_groups: N
					}), de
				},
				o = S => S.map(k => {
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
					return N = N.concat(s(S, k, M)), y && (N = N.concat(o(y))), {
						auto_accept: D,
						status: D ? "accepted" : "pending",
						policies: N
					}
				},
				a = S => {
					const k = S.split(".");
					return k[k.length - 1]
				},
				m = S => {
					var k, M;
					const y = S == null ? void 0 : S.access;
					let D = [],
						N = S == null || (k = S.resource_groups) === null || k === void 0 ? void 0 : k.map(x => {
							var G;
							const oe = I(x);
							if ((x == null || (G = x.meta) === null || G === void 0 ? void 0 : G.editable) === "false") return {
								effect: y,
								mode: i.Sw.all,
								accountId: a(x.id)
							};
							if (oe) {
								var de;
								return {
									effect: y,
									mode: i.Sw.granular,
									granularProduct: oe.value,
									granularResourceKey: x == null || (de = x.scope) === null || de === void 0 ? void 0 : de.key
								}
							} else if (!x.name) x.scope.key.startsWith(i.Rl) ? D.push({
								key: x.scope.key
							}) : D = D.concat(x.scope.objects);
							else return {
								effect: y,
								mode: i.Sw.domain_group,
								resourceGroupId: a(x.id)
							}
						}).filter(x => x);
					if ((M = D) === null || M === void 0 ? void 0 : M.length) {
						let x = D.map(G => {
							const oe = a(G.key);
							return {
								effect: y,
								mode: i.Sw.zone,
								zoneId: oe
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
					return r.s_.find(G => G.scopeKeyPrefix === N && G.scopeSubsetOfPrefix === x)
				},
				P = S => {
					if (!(S == null ? void 0 : S.length)) return [];
					const k = [];
					return S.forEach(M => {
						var y;
						(y = M.resource_groups) === null || y === void 0 || y.forEach(D => {
							var N, x;
							((N = D.scope) === null || N === void 0 || (x = N.key) === null || x === void 0 ? void 0 : x.startsWith(i.Rl)) && k.push(a(D.scope.key))
						})
					}), k
				},
				C = S => {
					if (!(S == null ? void 0 : S.length)) return [];
					const k = [];
					return S.forEach(M => {
						var y;
						(y = M.resource_groups) === null || y === void 0 || y.forEach(D => {
							var N, x;
							if (!((N = D.scope) === null || N === void 0 || (x = N.key) === null || x === void 0 ? void 0 : x.startsWith(i.Rl))) {
								var G;
								const de = (G = D.scope) === null || G === void 0 ? void 0 : G.objects;
								for (let se = 0; se < (de == null ? void 0 : de.length) && se < i.r6; se++) {
									var oe;
									((oe = de[se].key) === null || oe === void 0 ? void 0 : oe.startsWith(i.Rl)) && k.push(a(de[se].key))
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
						x.access === i.Sz.allow && (y = x), x.access === i.Sz.deny && (D = x)
					});
					let N = [];
					return y && (N = m(y)), D && (N = N.concat(m(D))), {
						permission_groups: M,
						scopes: N
					}
				},
				O = "permission-groups-",
				E = new Map,
				T = S => {
					if (!S) return [];
					const k = E.get(S);
					if (k) return k;
					const M = e.E.get(`${O}${S}`);
					return E.set(S, M), M
				},
				L = (S, k) => {
					const M = [];
					for (let y = 0; y < sessionStorage.length; y++) {
						const D = sessionStorage.key(y);
						(D == null ? void 0 : D.startsWith(O)) && M.push(D)
					}
					return M.length >= 5 && e.E.remove(M[0]), e.E.set(`${O}${S}`, k)
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
					return c
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

			function i(s) {
				for (var o = 1; o < arguments.length; o++) {
					var g = arguments[o] != null ? Object(arguments[o]) : {},
						a = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(g).filter(function(m) {
						return Object.getOwnPropertyDescriptor(g, m).enumerable
					})), a.forEach(function(m) {
						u(s, m, g[m])
					})
				}
				return s
			}

			function u(s, o, g) {
				return o = l(o), o in s ? Object.defineProperty(s, o, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[o] = g, s
			}

			function l(s) {
				var o = f(s, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(s, o) {
				if (typeof s != "object" || s === null) return s;
				var g = s[Symbol.toPrimitive];
				if (g !== void 0) {
					var a = g.call(s, o || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(s)
			}
			let c = function(s) {
					return s.PURCHASE_WORKERS_PAID = "navigate to workers plan page", s.LIST_CONFIGS = "list hyperdrive configs", s.SEARCH_CONFIGS = "search hyperdrive configs", s.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", s.VIEW_CONFIG_DETAILS = "view hyperdrive config details", s.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", s.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", s.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", s.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", s.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", s.CLICK_QUICK_LINK = "click hyperdrive quick link", s.CLICK_DISCORD = "click hyperdrive discord", s.CLICK_COMMUNITY = "click hyperdrive community", s
				}({}),
				p = function(s) {
					return s[s["connection string"] = 0] = "connection string", s[s.manual = 1] = "manual", s
				}({}),
				v = function(s) {
					return s[s.success = 0] = "success", s[s.failure = 1] = "failure", s
				}({});
			const n = (s, o = {}) => {
				r().sendEvent(s, i({}, o, {
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
				for (var Pe = 1; Pe < arguments.length; Pe++) {
					var ve = arguments[Pe] != null ? Object(arguments[Pe]) : {},
						De = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && De.push.apply(De, Object.getOwnPropertySymbols(ve).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(ve, ke).enumerable
					})), De.forEach(function(ke) {
						i(Te, ke, ve[ke])
					})
				}
				return Te
			}

			function i(Te, Pe, ve) {
				return Pe = u(Pe), Pe in Te ? Object.defineProperty(Te, Pe, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Te[Pe] = ve, Te
			}

			function u(Te) {
				var Pe = l(Te, "string");
				return typeof Pe == "symbol" ? Pe : String(Pe)
			}

			function l(Te, Pe) {
				if (typeof Te != "object" || Te === null) return Te;
				var ve = Te[Symbol.toPrimitive];
				if (ve !== void 0) {
					var De = ve.call(Te, Pe || "default");
					if (typeof De != "object") return De;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Pe === "string" ? String : Number)(Te)
			}
			const f = (0, e.BC)`/${"accountId"}/images`,
				c = (0, e.BC)`${f}/images`,
				p = (0, e.BC)`${f}/variants`,
				v = (0, e.BC)`${f}/keys`,
				n = (0, e.BC)`${f}/bundle-checkout-success`,
				s = (0, e.BC)`${c}/${"imageId"}`,
				o = (0, e.BC)`${c}/detail`,
				g = (0, e.BC)`${c}/edit`,
				a = (0, e.BC)`${p}/create`,
				m = (0, e.BC)`${p}/edit/${"variantId"}`,
				I = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				P = (0, e.BC)`${f}/sourcing-kit`,
				C = (0, e.BC)`${f}/delivery-zones`,
				_ = (0, e.BC)`${C}/${"zoneId"}/settings`,
				O = (0, e.BC)`${f}/plans`,
				E = (0, e.BC)`${f}/manage-plan`,
				T = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				L = {
					root: f,
					images: c,
					variants: p,
					keys: v,
					legacyImageDetailPage: s,
					imageDetailPage: o,
					imageEditPage: g,
					bundleCheckoutSuccess: n,
					variantCreatePage: a,
					variantEditPage: m,
					sourcingKit: P,
					subscriptions: I,
					deliveryZones: C,
					deliveryZoneSettings: _,
					plansPage: O,
					managePlan: E
				},
				S = r({}, L, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: T
				}),
				k = (0, e.BC)`/accounts/${"accountId"}`,
				M = (0, e.BC)`${k}/images/v2`,
				y = (0, e.BC)`/zones/${"zoneId"}`,
				D = (0, e.BC)`${M}/sourcingkit`,
				N = (0, e.BC)`${D}/migrations`,
				x = (0, e.BC)`${D}/migrations/${"migrationId"}`,
				G = (0, e.BC)`${D}/migrations/${"migrationId"}/logs`,
				oe = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle/start`,
				de = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle/abort`,
				se = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle`,
				K = (0, e.BC)`${D}/sources`,
				Q = (0, e.BC)`${D}/sources/${"sourceId"}`,
				z = (0, e.BC)`${D}/sources/${"sourceId"}/connectivity`,
				j = (0, e.BC)`${D}/sources/connectivity_precheck`,
				A = (0, e.BC)`/zones?account.id=${"accountId"}`,
				w = {
					migrationList: N,
					migration: x,
					migrationLogs: G,
					sourceList: K,
					migrationStart: oe,
					migrationAbort: de,
					migrationProgress: se,
					source: Q,
					sourceConnectivityCheck: z,
					sourceConnectivityPreCheck: j
				},
				F = (0, e.BC)`/billing/upgrade-subscription`,
				te = (0, e.BC)`${k}/settings/transformations`,
				q = (0, e.BC)`${y}/settings/transformations`,
				re = (0, e.BC)`${y}/settings/transformations_allowed_origins`,
				Z = (0, e.BC)`${y}/settings/transformations_c2pa`,
				B = (0, e.BC)`${k}/settings/ut-billing`,
				V = (0, e.BC)`${y}`,
				ee = (0, e.BC)`${y}/entitlements`,
				le = (0, e.BC)`${y}/settings`,
				pe = (0, e.BC)`${y}/flags`,
				ce = (0, e.BC)`${y}/subscription`,
				be = {
					sourcingKitEndpoints: w,
					deliveryZonesEndpoints: {
						transformationsConfigList: te,
						transformationsZoneConfig: q,
						allowedOriginsZoneConfig: re,
						preserveContentCredentialsZoneConfig: Z,
						upgradeSubscription: F,
						utBillingConfig: B
					},
					zones: {
						zones: A,
						zoneDetail: V,
						zoneSettings: le,
						zoneEntitlements: ee,
						zoneFlags: pe,
						zoneSubscription: ce
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
					return o
				},
				JZ: function() {
					return a
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
					return s
				},
				po: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts");
			const u = "sourcing_kit_enabled",
				l = "sourcing_kit_waitlist",
				f = "images",
				c = "unified_images_enabled",
				p = "c2pa_polish",
				v = "CloudflareImages",
				n = C => !!(0, r.BF)(C, "images.transformations_enabled"),
				s = C => Boolean((0, r.BF)(C, "images.enabled")),
				o = C => {
					const _ = (0, r.BF)(C, "images.storage");
					return typeof _ == "number" && _ > 0
				},
				g = C => Boolean((0, r.BF)(C, "contract.customer_enabled")),
				a = C => Boolean((0, e.oI)(C, f, u)),
				m = C => Boolean((0, i.Le)(C, v, u)),
				I = C => Boolean(getAccountFlipperFlag(C, v, c)),
				P = C => Boolean((0, i.Le)(C, v, p))
		},
		"../react/pages/magic/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				GF: function() {
					return g
				},
				H3: function() {
					return c
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
					return C
				},
				Xg: function() {
					return s
				},
				Y_: function() {
					return o
				},
				_j: function() {
					return i
				},
				a4: function() {
					return a
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
				c = _ => [{
					value: "unidirectional",
					label: _("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: _("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				p = "magic-transit",
				v = "magic-wan",
				n = "gre_tunnel",
				s = "ipsec_tunnel",
				o = "interconnect",
				g = 64,
				a = 1476,
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
				C = _ => [{
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
				i = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
					return l
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
					return C
				},
				rD: function() {
					return M
				},
				oT: function() {
					return a
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
					return T
				},
				K5: function() {
					return o
				},
				Ii: function() {
					return O
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
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				l = t("../node_modules/@cloudflare/elements/es/index.js");
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
				c = (0, i.createComponent)(({
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
				v = (0, i.createComponent)(({
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
				n = () => r().createElement(s, null, r().createElement(l.Ei, {
					alt: "airplane",
					src: u,
					width: "85%"
				})),
				s = (0, i.createComponent)(({
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
				o = () => r().createElement(g, null, r().createElement("svg", {
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
				g = (0, i.createComponent)(({
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
				a = () => r().createElement(m, null, r().createElement("svg", {
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
				m = (0, i.createComponent)(({
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
				P = (0, i.createComponent)(({
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
				C = () => r().createElement(_, null, r().createElement("svg", {
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
				_ = (0, i.createComponent)(({
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
				E = (0, i.createComponent)(({
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
				T = () => r().createElement(L, null, r().createElement("svg", {
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
				L = (0, i.createComponent)(({
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
					return c
				},
				He: function() {
					return l
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
				c = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				_: function() {
					return i
				},
				c: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let i = function(l) {
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
					return i
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
					return de
				},
				QV: function() {
					return T
				},
				Sx: function() {
					return O
				},
				Ub: function() {
					return oe
				},
				X3: function() {
					return s
				},
				bA: function() {
					return D
				},
				eO: function() {
					return o
				},
				fH: function() {
					return a
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
					return C
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
				c = "production",
				p = 2e3,
				v = 100,
				n = 350,
				s = 1e7,
				o = ["Success:", "Error:", "Failed:"],
				g = 10,
				a = "_headers",
				m = "_redirects",
				I = "_routes.json",
				P = "_worker.js",
				C = "do-a-barrel-roll",
				_ = [a, m, I, P],
				O = 1024 * 1024 * 25,
				E = 1e3,
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
				L = 1e5,
				S = 75e3,
				k = 2e5,
				M = 15e4,
				y = 3e3,
				D = 2250,
				N = "workers",
				x = "cloudflare_pages_build_caching",
				G = 2;
			let oe = function(Q) {
				return Q[Q.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", Q[Q.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", Q[Q.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", Q[Q.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", Q[Q.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", Q[Q.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", Q
			}({});
			const de = 1,
				se = 2,
				K = 2
		},
		"../react/pages/pages/routes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Hv: function() {
					return i
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
					return c
				},
				L9: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var s = 1; s < arguments.length; s++) {
					var o = arguments[s] != null ? Object(arguments[s]) : {},
						g = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(o).filter(function(a) {
						return Object.getOwnPropertyDescriptor(o, a).enumerable
					})), g.forEach(function(a) {
						u(n, a, o[a])
					})
				}
				return n
			}

			function u(n, s, o) {
				return s = l(s), s in n ? Object.defineProperty(n, s, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = o, n
			}

			function l(n) {
				var s = f(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(n, s) {
				if (typeof n != "object" || n === null) return n;
				var o = n[Symbol.toPrimitive];
				if (o !== void 0) {
					var g = o.call(n, s || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			let c = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				p = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const v = (n, s = {}) => {
				r().sendEvent(n, i({}, s, {
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
		"../react/pages/r2/routes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
					const p = "r2.cloudflarestorage.com";
					switch (c) {
						case "default":
							return p;
						case "eu":
							return `eu.${p}`;
						case "fedramp":
							return `fedramp.${p}`
					}
				},
				l = (c, p) => {
					const v = u(p);
					return `https://${c}.${v}`
				},
				f = (c, p, v) => `${l(c,p)}/${v}`
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
				i = t("../react/common/selectors/zoneSelectors.ts");
			const u = "r2_migrator_waitlist",
				l = "r2migrator",
				f = "r2",
				c = "r2_storage_migrator",
				p = "r2_storage_migrator",
				v = o => getAccountEntitlement(o, "r2.enabled"),
				n = o => Boolean((0, i.Le)(o, c, u)),
				s = o => Boolean(getAccountFlipperFlagsChanges(o, p, l))
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
					return o
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
					return c
				},
				Zl: function() {
					return M
				},
				dv: function() {
					return l
				},
				fp: function() {
					return s
				},
				jx: function() {
					return T
				},
				nQ: function() {
					return g
				},
				px: function() {
					return C
				},
				tP: function() {
					return i
				},
				vh: function() {
					return a
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
			const i = "secrets-store-account-level",
				u = "https://developers.cloudflare.com/secrets-store/",
				l = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				f = 1,
				c = 10,
				p = 100;
			let v = function(N) {
					return N.NAME = "name", N
				}({}),
				n = function(N) {
					return N.NAME = "name", N
				}({});
			const s = {
				initialPaginationState: {
					page: f,
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
			let o = function(N) {
					return N.NAME = "name", N.COMMENT = "comment", N.TAGS = "tags", N.SERVICES = "services", N.STATUS = "status", N
				}({}),
				g = function(N) {
					return N.PENDING = "pending", N.ACTIVE = "active", N.DELETED = "deleted", N
				}({}),
				a = function(N) {
					return N.LIST_SECRETS_STORES = "listSecretsStores", N.LIST_SECRETS = "listSecrets", N.GET_SECRET = "getSecret", N.SECRETS_QUOTA = "secretsQuota", N
				}({}),
				m = function(N) {
					return N.CREATE = "create", N.EDIT = "edit", N.DUPLICATE = "duplicate", N
				}({}),
				I = function(N) {
					return N.WORKERS = "workers", N
				}({});
			const P = "default_secrets_store";
			let C = function(N) {
				return N.CREATE = "create", N.EDIT = "edit", N.DUPLICATE = "duplicate", N.VIEW = "view", N
			}({});
			const _ = "delete_operation",
				O = /^[a-zA-Z0-9_-]+$/,
				E = (N, x, G, oe, de) => r.Ry().shape({
					name: r.Z_().required(N("secrets_store.form.create.errors.name.required")).matches(O, N("secrets_store.form.create.errors.name.invalid_characters")).max(255, N("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", N("secrets_store.form.create.errors.value.required"), se => x || de ? !!se : !0).max(1024, N("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, N("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(I), N("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				T = (N, x, G, oe, de) => r.Ry().shape({
					secrets: r.IX().of(E(N, x, G, oe, de))
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
					return o
				},
				LA: function() {
					return v
				},
				Wk: function() {
					return s
				},
				_V: function() {
					return c
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

			function i(g) {
				for (var a = 1; a < arguments.length; a++) {
					var m = arguments[a] != null ? Object(arguments[a]) : {},
						I = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(m).filter(function(P) {
						return Object.getOwnPropertyDescriptor(m, P).enumerable
					})), I.forEach(function(P) {
						u(g, P, m[P])
					})
				}
				return g
			}

			function u(g, a, m) {
				return a = l(a), a in g ? Object.defineProperty(g, a, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[a] = m, g
			}

			function l(g) {
				var a = f(g, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(g, a) {
				if (typeof g != "object" || g === null) return g;
				var m = g[Symbol.toPrimitive];
				if (m !== void 0) {
					var I = m.call(g, a || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(g)
			}
			const c = "blocked-content-table-tooltip",
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
				s = {
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
					filters: Object.values(e.GH).reduce((g, a) => i({}, g, {
						[a]: a
					}), {})
				};
			let o = function(g) {
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
					return i
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
				i = function(f) {
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
		"../react/pages/security/analytics/resources/labels.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				DC: function() {
					return g
				},
				Ff: function() {
					return c
				},
				Lz: function() {
					return o
				},
				RM: function() {
					return v
				},
				Ss: function() {
					return s
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
				i = t("../react/pages/security/analytics/resources/labels.ts");
			const u = ["block", "challenge", "jschallenge", "managed_challenge"],
				l = {
					label: "security_analytics.filters.mitigated",
					parse: a => a === "true" || a === !0,
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
					options: Object.keys(i.Bt),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securityAction"
				},
				c = {
					label: "security_analytics.filters.security_source",
					urlParam: "mitigation-service",
					type: e.kE.select,
					options: Object.keys(i.e_).filter(a => a !== "unknown"),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securitySources"
				};
			let p = function(a) {
				return a.MITIGATED_BY_WAF = "mitigatedByWAF", a.SERVED_BY_CLOUDFLARE = "servedByCloudflare", a.SERVED_BY_ORIGIN = "servedByOrigin", a
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
				s = {
					suspicious_login_failure: 201326592,
					suspicious_login_attempt: 201326593
				},
				o = "security-analytics-log-explorer";
			let g = function(a) {
				return a.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', a.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', a.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', a.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', a.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', a.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", a.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", a.OPEN_SIDE_DRAWER = "open security analytics side drawer", a.CLOSE_SIDE_DRAWER = "close security analytics side drawer", a
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Fj: function() {
					return p
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
				for (var s = 1; s < arguments.length; s++) {
					var o = arguments[s] != null ? Object(arguments[s]) : {},
						g = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(o).filter(function(a) {
						return Object.getOwnPropertyDescriptor(o, a).enumerable
					})), g.forEach(function(a) {
						u(n, a, o[a])
					})
				}
				return n
			}

			function u(n, s, o) {
				return s = l(s), s in n ? Object.defineProperty(n, s, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = o, n
			}

			function l(n) {
				var s = f(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(n, s) {
				if (typeof n != "object" || n === null) return n;
				var o = n[Symbol.toPrimitive];
				if (o !== void 0) {
					var g = o.call(n, s || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const p = {
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
					category: s = "user journey",
					product: o = c.MAIN,
					productName: g,
					additionalData: a
				}) => {
					r().sendEvent(n, i({
						category: s,
						product: o,
						productName: g
					}, a || {}))
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
					return i
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
			const i = "user journey",
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
			let e = function(p) {
				return p.NAME = "description", p.SOURCE = "source", p.LAST_UPDATE = "lastUpdatedAt", p.ACTIVITY = "activity", p
			}({});
			const r = 5;
			let i = function(p) {
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
			let c = function(p) {
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
					return se
				},
				KH: function() {
					return S
				},
				Ks: function() {
					return j
				},
				Lj: function() {
					return z
				},
				MC: function() {
					return s
				},
				Mq: function() {
					return L
				},
				OV: function() {
					return de
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
					return T
				},
				Uq: function() {
					return p
				},
				Uv: function() {
					return oe
				},
				V0: function() {
					return v
				},
				VT: function() {
					return a
				},
				YC: function() {
					return x
				},
				j$: function() {
					return C
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
					return G
				},
				yd: function() {
					return O
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				i = t("../react/pages/security/page-shield/resources/types.ts");

			function u(w) {
				for (var F = 1; F < arguments.length; F++) {
					var te = arguments[F] != null ? Object(arguments[F]) : {},
						q = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(te).filter(function(re) {
						return Object.getOwnPropertyDescriptor(te, re).enumerable
					})), q.forEach(function(re) {
						l(w, re, te[re])
					})
				}
				return w
			}

			function l(w, F, te) {
				return F = f(F), F in w ? Object.defineProperty(w, F, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[F] = te, w
			}

			function f(w) {
				var F = c(w, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function c(w, F) {
				if (typeof w != "object" || w === null) return w;
				var te = w[Symbol.toPrimitive];
				if (te !== void 0) {
					var q = te.call(w, F || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(w)
			}
			const p = 50,
				v = 9,
				n = "copy script url page shield",
				s = "disable page shield",
				o = "click documentation link",
				g = "enable page shield",
				a = "filter search page shield",
				m = "filter search view all page shield",
				I = "hover score tooltip page shield",
				P = "open alert modal page shield",
				C = "change pagination page shield",
				_ = "close script modal page shield",
				O = "open script modal page shield",
				E = "select alert type page shield",
				T = "sort column page shield",
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
			let D = function(w) {
				return w.SECURITY_THREATS = "Security Threats", w.C2_BOTNET = "C2 & Botnet", w.CRYPTOMINING = "Cryptomining", w.MALWARE = "Malware", w.PHISHING = "Phishing", w.SPYWARE = "Spyware", w.DGA_DOMAINS = "DGA Domains", w.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", w
			}({});
			const N = "https://www.cloudflare.com/plans/enterprise/contact/",
				x = {
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
				oe = {
					[i.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[i.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[i.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[i.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[i.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				de = {
					[i.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[i.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				se = {
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
				z = {
					[i.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[i.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[i.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				j = {
					[i.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[i.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[i.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				A = {
					[i.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[i.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[i.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
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
					return o
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
					return c
				},
				h3: function() {
					return g
				},
				xq: function() {
					return j
				},
				SQ: function() {
					return oe
				},
				C0: function() {
					return de
				},
				av: function() {
					return C
				},
				W3: function() {
					return I
				},
				WO: function() {
					return T
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
					return O
				},
				oK: function() {
					return L
				},
				qZ: function() {
					return G
				},
				_4: function() {
					return se
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
				i = t.n(r),
				u = t("../react/pages/security/page-shield/resources/constants.ts");
			const l = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", A => (i().sendEvent(u.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), A)),
				f = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", A => (i().sendEvent(u.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), A)),
				c = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", A => (i().sendEvent(u.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), A)),
				p = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				v = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", A => (i().sendEvent(u.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), A)),
				n = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				s = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", A => (i().sendEvent(u.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), A)),
				o = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				g = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var a = t("../react/app/redux/normalizer.js"),
				m = t("../react/pages/security/page-shield/resources/types.ts");
			const I = A => A.pageShield.configuration,
				P = A => {
					var w;
					return (w = A.pageShield.configuration.data) === null || w === void 0 ? void 0 : w.enabled
				},
				C = A => {
					var w;
					return (w = I(A)) === null || w === void 0 ? void 0 : w.data
				},
				_ = A => A.pageShield.scripts,
				O = A => A.pageShield.script,
				E = A => A.pageShield.connections,
				T = A => A.pageShield.connection,
				L = (0, a.P1)("pageShieldScripts", _),
				S = (0, a.P1)("pageShieldScript", O),
				k = (0, a.P1)("pageShieldConnections", E),
				M = (0, a.P1)("pageShieldConnection", T),
				y = (A, w) => A === m.Wq.SCRIPT_MONITOR ? L(w) || [] : k(w) || [],
				D = (A, w) => A === m.Wq.SCRIPT_MONITOR ? _(w) || [] : E(w) || [],
				N = (A, w) => A === m.Wq.SCRIPT_MONITOR ? S(w) : M(w),
				x = A => A.pageShield.domainIntel,
				G = A => A.pageShield.whoIsRecord,
				oe = (A, w, F) => {
					var te;
					const q = Object.values(F).map(re => ({
						key: re,
						label: u.Uv[re],
						score: A[re]
					})).filter(re => re.score !== void 0 && re.score <= w);
					return w === u.V0 && q.length === 0 && ((te = A.js_integrity_score) !== null && te !== void 0 ? te : 100) <= w && q.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), q
				},
				de = (A, w) => Object.values(w).filter(F => A[F] === !0).map(F => u.OV[F]),
				se = A => A === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				K = (A, w) => A[m.$g.MagecartScore] !== void 0 && A[m.$g.MagecartScore] <= w || A[m.$g.MalwareScore] !== void 0 && A[m.$g.MalwareScore] <= w || A[m.$g.CryptominingScore] !== void 0 && A[m.$g.CryptominingScore] <= w || A.js_integrity_score !== void 0 && A.js_integrity_score <= w,
				Q = ["cdn.jsdelivr.net", "unpkg.com"],
				z = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				j = A => {
					if (A.includes("@latest")) {
						const F = A.split("@latest");
						if (F.length != 2) return;
						const te = F[0].length,
							q = te + "@latest".length;
						return [te, q]
					}
					if (!!Q.some(F => A.includes(F)))
						for (const F of z) {
							const te = A.match(F);
							if (!te) continue;
							const q = te.index;
							if (q === 0) return null;
							const re = q + te[0].length;
							return [q, re]
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
					return c
				},
				k2: function() {
					return s
				}
			});

			function e(o) {
				for (var g = 1; g < arguments.length; g++) {
					var a = arguments[g] != null ? Object(arguments[g]) : {},
						m = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(a).filter(function(I) {
						return Object.getOwnPropertyDescriptor(a, I).enumerable
					})), m.forEach(function(I) {
						r(o, I, a[I])
					})
				}
				return o
			}

			function r(o, g, a) {
				return g = i(g), g in o ? Object.defineProperty(o, g, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[g] = a, o
			}

			function i(o) {
				var g = u(o, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function u(o, g) {
				if (typeof o != "object" || o === null) return o;
				var a = o[Symbol.toPrimitive];
				if (a !== void 0) {
					var m = a.call(o, g || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(o)
			}
			let l = function(o) {
				return o.BASE_URI = "base-uri", o.CHILD = "child-src", o.CONNECT = "connect-src", o.DEFAULT = "default-src", o.FONT = "font-src", o.FORM_ACTION = "form-action", o.FRAME = "frame-src", o.FRAME_ANCESTORS = "frame-ancestors", o.IMAGE = "img-src", o.MANIFEST = "manifest-src", o.MEDIA = "media-src", o.OBJECT = "object-src", o.SCRIPT = "script-src", o.SCRIPT_ELEM = "script-src-elem", o.STYLE = "style-src", o.STYLE_ELEM = "style-src-elem", o.WORKER = "worker-src", o.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", o
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
			let c = function(o) {
					return o.MONITOR = "monitor", o.POLICIES = "policies", o.SETTINGS = "settings", o
				}({}),
				p = function(o) {
					return o.SCRIPT_MONITOR = "script", o.CONNECTION_MONITOR = "connection", o.COOKIE_MONITOR = "cookie", o
				}({}),
				v = function(o) {
					return o.CryptominingScore = "cryptomining_score", o.MalwareScore = "malware_score", o.MagecartScore = "magecart_score", o
				}({}),
				n = function(o) {
					return o.DataflowScore = "dataflow_score", o.ObfuscationScore = "obfuscation_score", o
				}({}),
				s = function(o) {
					return o.DomainMalicious = "domain_reported_malicious", o.UrlMalicious = "url_reported_malicious", o
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				_C: function() {
					return a
				},
				_R: function() {
					return m
				},
				dY: function() {
					return P
				},
				fy: function() {
					return O
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
					return T
				},
				zf: function() {
					return C
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				r = t("../../../common/util/types/src/api/phases/fields.tsx"),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t.n(i),
				l = t("../react/utils/translator.tsx"),
				f = t("../react/pages/security/resources/types.ts"),
				c = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
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
				return S = s(S), S in L ? Object.defineProperty(L, S, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[S] = k, L
			}

			function s(L) {
				var S = o(L, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function o(L, S) {
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
			let a = function(L) {
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
					template: a.GEOGRAPHY_BASE,
					trackedEvent: I.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: a.IP_BASED,
					trackedEvent: I.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: a.USER_AGENT,
					trackedEvent: I.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: a.ZONE_LOCKDOWN,
					trackedEvent: I.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				C = {
					[f.X.UI_SECTION]: L => ({
						[a.MTLS_ACCESS]: {
							ruleName: a.MTLS_ACCESS,
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
						[a.ZONE_LOCKDOWN]: {
							ruleName: a.ZONE_LOCKDOWN,
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
						[a.GEOGRAPHY_BASE]: {
							ruleName: a.GEOGRAPHY_BASE,
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[a.IP_BASED]: {
							ruleName: a.IP_BASED,
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
						[a.USER_AGENT]: {
							ruleName: a.USER_AGENT,
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
						[a.EMAIL_VALIDITY]: {
							ruleName: a.EMAIL_VALIDITY,
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
						[a.MTLS_ACCESS]: {
							description: "custom-rules.templates.rule.mtls_access.name",
							expression: '(not cf.tls_client_auth.cert_verified and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.mtls_access.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[a.ZONE_LOCKDOWN]: {
							description: "custom-rules.templates.rule.zone_lockdown.name",
							expression: '(not ip.src in $0 and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.zone_lockdown.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[a.USER_AGENT]: {
							description: "custom-rules.templates.rule.user_agent.name",
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot)")',
							helper: {
								text: "custom-rules.templates.rule.user_agent.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[a.EMAIL_VALIDITY]: {
							description: "custom-rules.templates.rule.disposable_email.name",
							expression: "(cf.fraud_detection.disposable_email)",
							defaultAction: "block",
							emptySelectValue: !0
						},
						[a.GEOGRAPHY_BASE]: {
							description: "custom-rules.templates.rule.geography.name",
							expression: '(ip.src.asnum eq "") or (ip.src.country eq "") or (ip.src.continent eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						},
						[a.IP_BASED]: {
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
			let O = function(L) {
				return L.DISCOVERY = "discovery", L.SEQUENCES = "sequences", L.SCHEMA_VALIDATION = "schema-validation", L.SETTINGS = "settings", L.API_RULES = "api-rules", L.UPGRADE = "upgrade", L
			}({});
			const E = v({}, c.g, {
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
			let T = function(L) {
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
			let e = function(i) {
					return i.UI_SECTION = "UI_SECTION", i.WAF_RULES = "WAF_RULES", i
				}({}),
				r = function(i) {
					return i.Low = "low", i.Medium = "medium", i.Critical = "critical", i
				}({})
		},
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				j: function() {
					return p
				},
				y: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(v) {
				for (var n = 1; n < arguments.length; n++) {
					var s = arguments[n] != null ? Object(arguments[n]) : {},
						o = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && o.push.apply(o, Object.getOwnPropertySymbols(s).filter(function(g) {
						return Object.getOwnPropertyDescriptor(s, g).enumerable
					})), o.forEach(function(g) {
						u(v, g, s[g])
					})
				}
				return v
			}

			function u(v, n, s) {
				return n = l(n), n in v ? Object.defineProperty(v, n, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[n] = s, v
			}

			function l(v) {
				var n = f(v, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function f(v, n) {
				if (typeof v != "object" || v === null) return v;
				var s = v[Symbol.toPrimitive];
				if (s !== void 0) {
					var o = s.call(v, n || "default");
					if (typeof o != "object") return o;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(v)
			}
			let c = function(v) {
				return v.CLICK_OPT_IN = "click opt in security navigation", v.CLICK_OPT_IN_BUTTON = "click opt in button", v.CLICK_OPT_OUT_BUTTON = "click opt out button", v.CLICK_NEXT_STEP = "click opt in next step", v.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", v.DISPLAY_MODAL = "display opt in modal", v.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", v.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", v.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", v
			}({});
			const p = (v, n = {}) => {
				r().sendEvent(v, i({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$y: function() {
					return a
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
					return i
				},
				O_: function() {
					return s
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
					return c
				},
				tw: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const i = async C => {
				var _, O;
				const E = await (0, e.get)(`/zones/${C}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((_ = E == null ? void 0 : E.body) === null || _ === void 0 || (O = _.result) === null || O === void 0 ? void 0 : O.value) === "enabled"
			}, u = async (C, _) => (await (0, e.post)(`/zones/${C}/content-upload-scan/${_?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), _), l = async C => {
				var _;
				const O = await (0, e.get)(`/zones/${C}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((_ = O == null ? void 0 : O.body) === null || _ === void 0 ? void 0 : _.result) || []
			}, f = async (C, _) => {
				var O;
				const E = await (0, e.post)(`/zones/${C}/content-upload-scan/payloads`, {
					body: [_]
				});
				return (O = E == null ? void 0 : E.body) === null || O === void 0 ? void 0 : O.result
			}, c = async (C, _) => (await (0, e.del)(`/zones/${C}/content-upload-scan/payloads/${_}`, {
				hideErrorAlert: !0
			}), _), p = async C => {
				var _;
				const O = await (0, e.get)(`/zones/${C}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((_ = O == null ? void 0 : O.body) === null || _ === void 0 ? void 0 : _.pii_detection_enabled)
			}, v = async (C, _) => (await (0, e.put)(`/zones/${C}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: _
				}
			}), _), n = async C => {
				var _, O;
				const E = await (0, e.get)(`/zones/${C}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((_ = E == null ? void 0 : E.body) === null || _ === void 0 || (O = _.result) === null || O === void 0 ? void 0 : O.enabled)
			}, s = async (C, _) => {
				var O, E;
				const T = await (0, e.post)(`/zones/${C}/leaked-credential-checks`, {
					body: {
						enabled: _
					}
				});
				return !!((O = T == null ? void 0 : T.body) === null || O === void 0 || (E = O.result) === null || E === void 0 ? void 0 : E.enabled)
			}, o = async C => {
				var _;
				const O = await (0, e.get)(`/zones/${C}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (_ = O == null ? void 0 : O.body) === null || _ === void 0 ? void 0 : _.result
			}, g = async (C, _) => {
				var O;
				const E = await (0, e.post)(`/zones/${C}/leaked-credential-checks/detections`, {
					body: _
				});
				return (O = E == null ? void 0 : E.body) === null || O === void 0 ? void 0 : O.result
			}, a = async (C, _) => (await (0, e.del)(`/zones/${C}/leaked-credential-checks/detections/${_}`, {
				hideErrorAlert: !0
			}), _), m = async (C, _) => {
				await (0, e.put)(`/zones/${C}/security-center/securitytxt`, {
					body: _
				})
			}, I = async C => {
				await (0, e.del)(`/zones/${C}/security-center/securitytxt`)
			}, P = async C => (await (0, e.get)(`/zones/${C}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Xu: function() {
					return a
				},
				Io: function() {
					return E
				},
				FQ: function() {
					return se
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
					return O
				},
				Np: function() {
					return x
				},
				WR: function() {
					return v
				},
				bE: function() {
					return G
				},
				u_: function() {
					return o
				},
				pf: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/pages/security/settings/hooks/api.ts"),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t("webpack/sharing/consume/default/react-redux/react-redux"),
				l = t("../react/pages/security/settings/resources/index.ts"),
				f = t("../react/common/hooks/useZoneEntitlement.ts"),
				c = t("../../../../node_modules/yup/es/index.js"),
				p = t("../react/utils/translator.tsx");
			const v = () => (0, u.useSelector)(l.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				s = () => !!useZoneEntitlement(n),
				o = () => {
					const {
						t: K
					} = (0, p.QT)(), Q = c.Z_().required(K("common.field_is_required")).max(24, K("labels.apply.form.name.error.max_characters")).matches(l.DG, K("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", K("labels.apply.form.name.error.cf_forbidden"), A => !l.aW.test(A)), z = {
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
							[l.n5.NAME]: A ? c.Z_() : Q,
							[l.n5.DESCRIPTION]: A ? c.Z_().optional() : c.Z_().max(150, K("labels.apply.form.description.error.max_characters"))
						})
					}, j = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[l.N2.NAME]: "",
							[l.N2.SOURCE]: l.W3,
							[l.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => c.Ry().shape({
							[l.N2.NEW_LABEL_NAME]: Q
						})
					};
					return {
						LABELS_APPLY_FORM: z,
						EDIT_LABELS_MODAL_FORM: j
					}
				},
				g = ({
					modalHeaderFixedHeight: K = 62,
					modalDefaultPaddings: Q = 16
				} = {}) => {
					const z = (0, i.useRef)(null),
						j = (0, i.useRef)(null),
						[A, w] = (0, i.useState)(0),
						[F, te] = (0, i.useState)(0),
						q = `calc(100vh - ${A}px - ${F}px - ${Q}px)`,
						[re, Z] = (0, i.useState)("");
					return (0, i.useEffect)(() => {
						const B = () => {
							var V, ee, le, pe;
							const ce = z == null || (V = z.current) === null || V === void 0 ? void 0 : V.offsetHeight,
								_e = j == null || (ee = j.current) === null || ee === void 0 ? void 0 : ee.offsetHeight,
								be = ((le = ce) !== null && le !== void 0 ? le : 0) + K,
								Te = (pe = _e) !== null && pe !== void 0 ? pe : 0;
							w(be), te(Te)
						};
						return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B)
					}, []), {
						searchTerm: re,
						setSearchTerm: Z,
						scrollableSectionMaxHeight: q,
						topMenuRef: z,
						bottomMenuRef: j
					}
				},
				a = K => {
					const Q = v(),
						z = (0, e.useQueryClient)(),
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
						w = (0, e.useMutation)({
							mutationFn: async ({
								enabled: q
							}) => await (0, r.X2)(K, q),
							onSuccess: q => {
								z.setQueryData([`content-scanning-enabled-${K}`], q)
							}
						}),
						F = (0, e.useMutation)({
							mutationFn: q => (0, r.ll)(K, q),
							onSuccess: q => {
								z.setQueryData([`content-scanning-detections-${K}`], q)
							}
						}),
						te = (0, e.useMutation)({
							mutationFn: q => (0, r.qD)(K, q),
							onSuccess: q => {
								var re;
								const Z = (re = z.getQueryData(`content-scanning-detections-${K}`)) !== null && re !== void 0 ? re : [];
								z.setQueryData([`content-scanning-detections-${K}`], Z.filter(({
									id: B
								}) => B !== q))
							}
						});
					return {
						entitled: Q,
						loading: j.isLoading || A.isLoading,
						error: j.isError || A.isError,
						enabled: {
							data: j.data,
							isToggling: w.isLoading,
							toggleEnabled: async q => w.mutateAsync({
								enabled: q
							})
						},
						detections: {
							data: A.data,
							add: F.mutateAsync,
							delete: te.mutateAsync,
							loading: F.isLoading || te.isLoading
						}
					}
				},
				m = () => {
					const K = (0, u.useSelector)(l.cN),
						Q = (0, u.useSelector)(l.bH),
						z = (0, u.useSelector)(l.P3),
						j = (0, u.useSelector)(l.Ri);
					return {
						hasEditPermission: K,
						isEnabled: z && (Q.hasSimilarLeaked || Q.hasUsernameAndPasswordLeaked || j)
					}
				},
				I = K => {
					const Q = m(),
						z = (0, e.useQueryClient)(),
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
						w = (0, e.useMutation)({
							mutationFn: ({
								enabled: q
							}) => (0, r.O_)(K, q),
							onSuccess: q => {
								z.setQueryData([`leaked-credentials-enabled-${K}`], q)
							}
						}),
						F = (0, e.useMutation)({
							mutationFn: async q => await (0, r.je)(K, q),
							onSuccess: q => {
								var re;
								const Z = (re = z.getQueryData(`leaked-credentials-detections-${K}`)) !== null && re !== void 0 ? re : [];
								z.setQueryData([`leaked-credentials-detections-${K}`], [...Z, q])
							}
						}),
						te = (0, e.useMutation)({
							mutationFn: q => (0, r.$y)(K, q),
							onSuccess: q => {
								var re;
								const Z = (re = z.getQueryData(`leaked-credentials-detections-${K}`)) !== null && re !== void 0 ? re : [];
								z.setQueryData([`leaked-credentials-detections-${K}`], Z.filter(({
									id: B
								}) => B !== q))
							}
						});
					return {
						entitled: Q.isEnabled,
						hasEditPermissions: Q.hasEditPermission,
						loading: j.isLoading || A.isLoading,
						error: j.isError || j.isError,
						enabled: {
							data: j.data,
							isToggling: w.isLoading,
							toggleEnabled: async q => w.mutateAsync({
								enabled: q
							})
						},
						detections: {
							data: A.data,
							add: F.mutateAsync,
							delete: te.mutateAsync,
							loading: F.isLoading || te.isLoading
						}
					}
				};
			var P = t("../react/common/utils/useQueryCache.ts");
			const C = "security-txt",
				_ = {
					securityTxt: ({
						zoneId: K
					}) => [C, K]
				},
				O = K => (0, e.useQuery)({
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
				T = K => {
					const {
						invalidate: Q
					} = (0, P.o)(_.securityTxt({
						zoneId: K
					}));
					return (0, e.useMutation)({
						mutationFn: z => (0, r.F3)(K, z),
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
					var z = arguments[Q] != null ? Object(arguments[Q]) : {},
						j = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(z).filter(function(A) {
						return Object.getOwnPropertyDescriptor(z, A).enumerable
					})), j.forEach(function(A) {
						y(K, A, z[A])
					})
				}
				return K
			}

			function y(K, Q, z) {
				return Q = D(Q), Q in K ? Object.defineProperty(K, Q, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[Q] = z, K
			}

			function D(K) {
				var Q = N(K, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function N(K, Q) {
				if (typeof K != "object" || K === null) return K;
				var z = K[Symbol.toPrimitive];
				if (z !== void 0) {
					var j = z.call(K, Q || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(K)
			}
			const x = K => {
					const {
						queryKey: Q,
						zoneId: z
					} = (0, k.hL)(K), {
						isLoading: j,
						isError: A,
						isSuccess: w,
						data: F,
						refetch: te,
						isRefetching: q
					} = (0, e.useQuery)({
						queryKey: Q,
						queryFn: () => k.Mi.getLabels(M({
							zoneId: z
						}, K)),
						onSuccess: () => {
							var re;
							const Z = K == null || (re = K.filters) === null || re === void 0 ? void 0 : re.source;
							(Z === l.LABEL_SOURCES.MANAGED || Z === l.LABEL_SOURCES.USER) && (0, l.Tf)({
								name: l.QJ.FILTER_USER_MANAGED_LABELS,
								product: l.Iv.SECURITY_SETTINGS,
								pageName: l.R.LABELS_LIST,
								type: Z
							})
						}
					});
					return {
						data: F == null ? void 0 : F.result,
						errors: F == null ? void 0 : F.errors,
						paginationData: F == null ? void 0 : F.result_info,
						isLoading: j,
						isError: A,
						isSuccess: w,
						refetch: te,
						isRefetching: q
					}
				},
				G = ({
					labels: K,
					preselectedLabels: Q
				}) => {
					const {
						USER: z,
						MANAGED: j
					} = l.LABEL_SOURCES, [A, w] = (0, i.useState)({
						[z]: [],
						[j]: []
					}), [F, te] = (0, i.useState)(new Set), q = F.size > 0, [re, Z] = (0, i.useState)(!1), B = pe => {
						te(ce => {
							const _e = new Set(ce);
							return _e.has(pe.name) ? _e.delete(pe.name) : _e.add(pe.name), _e
						})
					}, V = pe => F.has(pe.name), ee = (pe, ce) => {
						const _e = V(pe) ? 1 : 0;
						return (V(ce) ? 1 : 0) - _e
					}, le = pe => {
						w(ce => ({
							[z]: [...pe ? pe[z] : ce[z]].sort(ee),
							[j]: [...pe ? pe[j] : ce[j]].sort(ee)
						}))
					};
					return (0, i.useEffect)(() => {
						if (K && !re) {
							if (Q) {
								const pe = new Set;
								K.forEach(ce => {
									Q.some(_e => S()(_e, ce)) && pe.add(ce.name)
								}), te(pe)
							}
							Z(!0)
						}
					}, [K, Q, re]), (0, i.useEffect)(() => {
						if (K && re) {
							const pe = K.reduce((_e, be) => (be.source === z ? _e[z].push(be) : be.source === j && _e[j].push(be), _e), {
									[z]: [],
									[j]: []
								}),
								ce = {
									[z]: pe[z].sort(ee),
									[j]: pe[j].sort(ee)
								};
							w(ce)
						}
					}, [z, j, K, re]), {
						userAndManagedLabels: A,
						setUserAndManagedLabels: w,
						toggleSelectedLabel: B,
						isLabelSelected: V,
						sortLabelsBySelectedStatus: le,
						hasLabelsSelected: q
					}
				};
			var oe = t("../react/app/redux/index.ts"),
				de = t("../react/pages/security/settings/resources/selectors.ts");
			const se = (K = "") => {
				const Q = (0, oe.p4)(de.Xs),
					z = Q && (K == null ? void 0 : K.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: Q,
					hasDeprecatedParameter: z
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
				i = t("webpack/sharing/consume/default/react/react"),
				u = t.n(i),
				l = t("../node_modules/@cloudflare/component-page/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(f),
				p = t("../react/pages/security/settings/hooks/index.ts"),
				v = t("../react/pages/security/settings/resources/index.ts");
			const n = u().lazy(() => Promise.all([t.e(16691), t.e(64484), t.e(12409), t.e(12174), t.e(1091), t.e(8612), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(83276), t.e(5756), t.e(28861), t.e(52215), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				s = () => {
					const {
						t: o
					} = (0, f.useI18n)(), g = (0, e.xk)("waf");
					return u().createElement(l.T3, {
						parentPageLabel: o("navigation.zone.security"),
						title: o("navigation.zone.security.settings"),
						type: "narrow"
					}, g.read ? u().createElement(n, null) : u().createElement(r.Z, null))
				};
			h.ZP = s
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Mi: function() {
					return _
				},
				hL: function() {
					return C
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/zoneSelectors.ts"),
				i = t("../react/common/utils/useQueryCache.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/common/hooks/useAccountId.ts"),
				f = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				c = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const p = {
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
				s = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function o(E, T) {
				if (E == null) return {};
				var L = g(E, T),
					S, k;
				if (Object.getOwnPropertySymbols) {
					var M = Object.getOwnPropertySymbols(E);
					for (k = 0; k < M.length; k++) S = M[k], !(T.indexOf(S) >= 0) && (!Object.prototype.propertyIsEnumerable.call(E, S) || (L[S] = E[S]))
				}
				return L
			}

			function g(E, T) {
				if (E == null) return {};
				var L = {},
					S = Object.keys(E),
					k, M;
				for (M = 0; M < S.length; M++) k = S[M], !(T.indexOf(k) >= 0) && (L[k] = E[k]);
				return L
			}

			function a(E) {
				for (var T = 1; T < arguments.length; T++) {
					var L = arguments[T] != null ? Object(arguments[T]) : {},
						S = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(L).filter(function(k) {
						return Object.getOwnPropertyDescriptor(L, k).enumerable
					})), S.forEach(function(k) {
						m(E, k, L[k])
					})
				}
				return E
			}

			function m(E, T, L) {
				return T = I(T), T in E ? Object.defineProperty(E, T, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[T] = L, E
			}

			function I(E) {
				var T = P(E, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function P(E, T) {
				if (typeof E != "object" || E === null) return E;
				var L = E[Symbol.toPrimitive];
				if (L !== void 0) {
					var S = L.call(E, T || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(E)
			}
			const C = E => {
					const T = (0, e.p4)(r.Cu),
						L = (0, l.F)(),
						S = O.labels(a({
							accountId: L,
							zoneId: T
						}, E ? a({}, E) : {})),
						k = (0, i.o)(S);
					return a({
						zoneId: T,
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
						var T, L, S, k;
						let {
							zoneId: M,
							hideErrorAlert: y = !0
						} = E, D = o(E, ["zoneId", "hideErrorAlert"]);
						return (await f.get(p.labels.toUrl({
							zoneId: M
						}), {
							parameters: {
								page: D == null ? void 0 : D.page,
								per_page: D == null ? void 0 : D.per_page,
								with_mapped_resource_counts: D == null ? void 0 : D.with_mapped_resource_counts,
								filter: D == null || (T = D.filters) === null || T === void 0 ? void 0 : T.search,
								source: (0, n.sQ)(D == null || (L = D.filters) === null || L === void 0 ? void 0 : L.source),
								order: D == null || (S = D.sort) === null || S === void 0 ? void 0 : S.id,
								direction: (D == null ? void 0 : D.sort) ? (D == null || (k = D.sort) === null || k === void 0 ? void 0 : k.desc) ? s.Sr.desc : s.Sr.asc : void 0
							},
							hideErrorAlert: y
						})).body
					},
					getLabel: async E => {
						let {
							zoneId: T,
							labelName: L,
							hideErrorAlert: S = !0
						} = E, k = o(E, ["zoneId", "labelName", "hideErrorAlert"]);
						const M = (0, n.mm)(L) ? p.managedLabel.toUrl({
							zoneId: T,
							labelName: L
						}) : p.userLabel.toUrl({
							zoneId: T,
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
						label: T,
						replace: L
					}) => {
						const {
							name: S
						} = T, k = o(T, ["name"]);
						return (await (L ? f.put : f.patch)(p.userLabel.toUrl({
							zoneId: E,
							labelName: T.name
						}), {
							body: k
						})).body
					},
					deleteLabel: async ({
						zoneId: E,
						labelName: T
					}) => (await f.del(p.userLabel.toUrl({
						zoneId: E,
						labelName: T
					}))).body,
					createLabel: async E => {
						let {
							zoneId: T
						} = E, L = o(E, ["zoneId"]);
						const {
							product: S
						} = L, k = o(L, ["product"]);
						return (await f.post(p.userLabels.toUrl({
							zoneId: T
						}), {
							body: [k]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: E,
						user: T,
						managed: L,
						operationIds: S,
						replace: k
					}) => (await (k ? f.put : f.post)(p.operationsLinkedToLabels.toUrl({
						zoneId: E
					}), {
						body: a({}, T ? {
							user: {
								labels: T
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
						labelName: T,
						operationIds: L
					}) => {
						const S = (0, n.mm)(T) ? p.managedLabelOperations.toUrl({
							zoneId: E,
							labelName: T
						}) : p.userLabelOperations.toUrl({
							zoneId: E,
							labelName: T
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
				O = {
					labels: E => {
						let {
							accountId: T,
							zoneId: L
						} = E, S = o(E, ["accountId", "zoneId"]);
						return [u.IQ.LABELS, T, L, ...(0, v.isEmpty)(S) ? [] : [S]]
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
					return c
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
					return a
				},
				V: function() {
					return O
				},
				W3: function() {
					return i
				},
				Yn: function() {
					return M
				},
				_8: function() {
					return o
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
					return T
				},
				j8: function() {
					return p
				},
				jz: function() {
					return m
				},
				n5: function() {
					return C
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
			const i = "all";
			let u = function(y) {
					return y.LABELS = "labels", y
				}({}),
				l = function(y) {
					return y.USER = "user", y.MANAGED = "managed", y
				}({}),
				f = function(y) {
					return y.SOURCE = "source", y
				}({}),
				c = function(y) {
					return y.NAME = "name", y.SOURCE = "source", y.NEW_LABEL_NAME = "newLabelName", y
				}({}),
				p = function(y) {
					return y.ENDPOINT = "endpoint", y.METHOD = "method", y.OPERATION_ID = "operationId", y
				}({}),
				v = function(y) {
					return y.NAME = "name", y.MAPPED_RESOURCES = "mapped_resources.operations", y.SOURCE = "source", y.APPLY = "apply", y
				}({});
			const o = {
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
			let g = function(y) {
				return y.CREATED_LABEL = "createdLabel", y.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", y.DELETED_LABEL = "deletedLabel", y.APPLIED_LABEL = "appliedLabel", y.EDITED_LABEL = "editedLabel", y.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", y
			}({});
			const a = "650px",
				m = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				I = /^[A-Za-z0-9-]+$/,
				P = /^cf-/;
			let C = function(y) {
				return y.NAME = "name", y.DESCRIPTION = "description", y
			}({});
			const _ = "all";
			let O = function(y) {
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
						[O.METHOD]: _,
						[O.HOSTNAME]: _
					}
				},
				filters: O
			};
			let T = function(y) {
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
					return s
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
					return a
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
					return o
				},
				Xs: function() {
					return C.Xs
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
					return C.bH
				},
				Mb: function() {
					return i.Mb
				},
				ui: function() {
					return C.ui
				},
				P3: function() {
					return C.P3
				},
				Ri: function() {
					return C.Ri
				},
				cN: function() {
					return C.cN
				},
				m8: function() {
					return P
				},
				Tf: function() {
					return I
				},
				$E: function() {
					return i.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				r = t("../react/pages/security/settings/resources/types.ts"),
				i = t("../react/pages/security/settings/resources/utils.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(u);

			function f(_) {
				for (var O = 1; O < arguments.length; O++) {
					var E = arguments[O] != null ? Object(arguments[O]) : {},
						T = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(E).filter(function(L) {
						return Object.getOwnPropertyDescriptor(E, L).enumerable
					})), T.forEach(function(L) {
						c(_, L, E[L])
					})
				}
				return _
			}

			function c(_, O, E) {
				return O = p(O), O in _ ? Object.defineProperty(_, O, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[O] = E, _
			}

			function p(_) {
				var O = v(_, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function v(_, O) {
				if (typeof _ != "object" || _ === null) return _;
				var E = _[Symbol.toPrimitive];
				if (E !== void 0) {
					var T = E.call(_, O || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(_)
			}
			let n = function(_) {
					return _.LABELS_LIST = "Labels List page", _.LABELS_APPLY = "Labels Apply page", _.LABELS_SIDE_MODAL = "Labels Side Modal", _.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", _.LABELS_OPERATION_DETAILS = "Operation Details page", _
				}({}),
				s = function(_) {
					return _.API_SHIELD = "API Shield", _.SECURITY_SETTINGS = "Security Settings", _
				}({}),
				o = function(_) {
					return _.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", _.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", _.OPERATIONS_TABLE_ROW = "Operations table row", _.OPERATION_DETAILS_PAGE = "Operation details page", _
				}({}),
				g = function(_) {
					return _.UPSERT = "upsert", _.OVERWRITE = "overwrite", _
				}({}),
				a = function(_) {
					return _.SINGLE = "single", _.MULTIPLE = "multiple", _
				}({}),
				m = function(_) {
					return _.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", _.DELETE_LABEL = "delete a user label in the settings page", _.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", _.CREATE_LABEL_CLICKED = "click create label button in the settings page", _.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", _.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", _.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", _.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", _.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", _.OPEN_LABELS_SIDE_MODAL = "open labels side modal", _.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", _.REMOVE_RISK_LABELS_FROM_OPERATION = "remove risk label(s) from operation(s) in the labels side modal", _.CREATE_NEW_LABEL = "create a new label", _
				}({});
			const I = ({
					name: _,
					product: O,
					category: E = "user journey",
					pageName: T,
					from: L,
					write_strategy: S,
					type: k,
					target: M,
					selected: y
				}) => {
					l().sendEvent(_, f({
						category: E,
						pageName: T,
						product: O
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
			var C = t("../react/pages/security/settings/resources/selectors.ts")
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
					return s
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
				l = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const f = o => {
					const g = (0, e.RO)(o),
						a = !!(0, i.rV)(o, "rulesets.file_upload_scan_allowed"),
						m = !!(0, i.BF)(o, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? g && (a || m) : m
				},
				c = o => Number((0, i.rV)(o, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				p = o => (0, i.rV)(o, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				v = o => (0, i.rV)(o, "rulesets.leaked_credential_checks_allowed"),
				n = o => (0, l.z1)(u.dC)(o) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, i.rV)(o, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, i.rV)(o, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				s = o => !!(0, l.z1)("deprecate-security-level")(o)
		},
		"../react/pages/security/settings/resources/types.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				T: function() {
					return r
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let r = function(i) {
				return i.ENABLED = "enabled", i.CONTACT = "contact", i.EXPIRES = "expires", i.ENCRYPTION = "encryption", i.ACKNOWLEDGMENTS = "acknowledgments", i.CANONICAL = "canonical", i.HIRING = "hiring", i.POLICY = "policy", i.PREFERRED_LANGUAGES = "preferred_languages", i.MODIFIED_ON = "modified_on", i
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$E: function() {
					return o
				},
				Mb: function() {
					return g
				},
				N2: function() {
					return O
				},
				Q4: function() {
					return m
				},
				QF: function() {
					return s
				},
				Vy: function() {
					return P
				},
				Wv: function() {
					return a
				},
				mm: function() {
					return _
				},
				sQ: function() {
					return C
				},
				vc: function() {
					return I
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				i = t("../react/pages/security/settings/routes.tsx"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/pages/security/settings/resources/types.ts"),
				f = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function c(E) {
				for (var T = 1; T < arguments.length; T++) {
					var L = arguments[T] != null ? Object(arguments[T]) : {},
						S = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(L).filter(function(k) {
						return Object.getOwnPropertyDescriptor(L, k).enumerable
					})), S.forEach(function(k) {
						p(E, k, L[k])
					})
				}
				return E
			}

			function p(E, T, L) {
				return T = v(T), T in E ? Object.defineProperty(E, T, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[T] = L, E
			}

			function v(E) {
				var T = n(E, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function n(E, T) {
				if (typeof E != "object" || E === null) return E;
				var L = E[Symbol.toPrimitive];
				if (L !== void 0) {
					var S = L.call(E, T || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(E)
			}
			const s = {
					[l.T.ENABLED]: !1,
					[l.T.CONTACT]: [""],
					[l.T.EXPIRES]: ""
				},
				o = {
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
				a = E => {
					const T = {};
					for (const L in E) T[L] = Array.isArray(E[L]) ? E[L].filter(S => !!S) : E[L];
					return c({}, T, {
						expires: (0, f.DZ)(E.expires)
					})
				},
				m = (E, T, L) => {
					const S = [...new Set([l.T.CONTACT, l.T.EXPIRES, ...Object.values(l.T)])],
						k = Object.entries(E).sort(([M], [y]) => S.indexOf(M) - S.indexOf(y)).filter(([M, y]) => !!o[M] && !!y && (!Array.isArray(y) || !!y.length)).map(([M, y]) => Array.isArray(y) ? y.map(D => `${L(o[M].label)}: ${D}`).join(`
`) : `${L(o[M].label)}: ${y}`).join(`
`);
					(0, r.yH)(`Cloudflare_${T}_security.txt`, k, "text/plain;charset=utf-8")
				};
			let I = function(E) {
				return E.CREATED = "created security.txt", E.ENABLED = "enabled security.txt", E.DISABLED = "disabled security.txt", E.DOWNLOADED = "downloaded security.txt", E.UPDATED = "updated security.txt", E.DELETED = "deleted security.txt", E
			}({});
			const P = E => (E == null ? void 0 : E.source) === u.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (E == null ? void 0 : E.source) === u.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				C = E => E === u.W3 ? void 0 : E,
				_ = E => u.aW.test(E),
				O = E => {
					switch (E) {
						case u.w.CONTENT_SCANNING:
							return i.ROUTES.CONTENT_SCANNING;
						case u.w.EXPOSED_CREDENTIALS:
							return i.ROUTES.EXPOSED_CREDENTIALS
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
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var s = 1; s < arguments.length; s++) {
					var o = arguments[s] != null ? Object(arguments[s]) : {},
						g = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(o).filter(function(a) {
						return Object.getOwnPropertyDescriptor(o, a).enumerable
					})), g.forEach(function(a) {
						u(n, a, o[a])
					})
				}
				return n
			}

			function u(n, s, o) {
				return s = l(s), s in n ? Object.defineProperty(n, s, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = o, n
			}

			function l(n) {
				var s = f(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(n, s) {
				if (typeof n != "object" || n === null) return n;
				var o = n[Symbol.toPrimitive];
				if (o !== void 0) {
					var g = o.call(n, s || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			const c = {
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
					category: s = "user journey",
					product: o = "waf",
					productName: g = "Managed Rules",
					additionalData: a
				}) => {
					r().sendEvent(n, i({
						category: s,
						product: o,
						productName: g
					}, a || {}))
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
				i = t("../react/pages/stream/util/pager.ts");

			function u(s) {
				for (var o = 1; o < arguments.length; o++) {
					var g = arguments[o] != null ? Object(arguments[o]) : {},
						a = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(g).filter(function(m) {
						return Object.getOwnPropertyDescriptor(g, m).enumerable
					})), a.forEach(function(m) {
						l(s, m, g[m])
					})
				}
				return s
			}

			function l(s, o, g) {
				return o = f(o), o in s ? Object.defineProperty(s, o, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[o] = g, s
			}

			function f(s) {
				var o = c(s, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function c(s, o) {
				if (typeof s != "object" || s === null) return s;
				var g = s[Symbol.toPrimitive];
				if (g !== void 0) {
					var a = g.call(s, o || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(s)
			}
			const p = "stream",
				v = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(s = v, o) {
				switch (o.type) {
					case r.U.ResetState:
						return v;
					case r.U.SetStorageLoading:
						const {
							storageLoading: g
						} = o;
						return u({}, s, {
							storageLoading: g
						});
					case r.U.SetStorage:
						return u({}, s, {
							storage: o.payload ? u({}, s.storage, o.payload) : void 0
						});
					case r.U.ReplaceVideos:
						return u({}, s, {
							videos: o.videos
						});
					case r.U.PrependVideo:
						return u({}, s, {
							videos: [o.video, ...s.videos].filter((a, m) => m < i.FJ)
						});
					case r.U.UpdateVideo:
						return u({}, s, {
							videos: s.videos.map(a => a.uid === o.video.uid ? o.video : a)
						});
					case r.U.UpdateVideoPending:
						return u({}, s, {
							videoUpdateStatuses: u({}, s.videoUpdateStatuses, {
								[o.uid]: o.status
							})
						});
					case r.U.RemoveVideos:
						return u({}, s, {
							videos: s.videos.filter(a => !o.ids.includes(a.uid))
						});
					case r.U.SetLoading:
						return u({}, s, {
							loading: o.loading
						});
					case r.U.SetRequestTimestamp:
						return u({}, s, {
							requestTimestamp: o.requestTimestamp
						});
					case r.U.UploadViaUrl:
						return s;
					default:
						return (0, e.h)(o, s)
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
				i = (0, e.BC)`${r}/inputs`,
				u = (0, e.BC)`${r}/videos`,
				l = (0, e.BC)`${r}/analytics`,
				f = (0, e.BC)`${u}/${"videoId"}`,
				c = (0, e.BC)`${r}/video-transformations`,
				p = {
					root: r,
					inputs: i,
					configureInputs: (0, e.BC)`${i}/custom-hostnames`,
					videos: u,
					analytics: l,
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
					return s
				},
				aM: function() {
					return a
				},
				bM: function() {
					return c
				},
				bO: function() {
					return o
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
				i = t("../react/pages/stream/reducer.ts");
			const u = P => P[i.nY],
				l = P => u(P).videos,
				f = P => u(P).videoUpdateStatuses,
				c = P => u(P).loading,
				p = P => u(P).requestTimestamp,
				v = P => u(P).storageLoading,
				n = P => u(P).storage,
				s = P => (0, r.BF)(P, "stream.enabled") || (0, e.bC)(P),
				o = P => (0, e.Le)(P, "stream", "connect"),
				g = P => (0, e.Le)(P, "stream", "stream-4371"),
				a = P => (0, e.Le)(P, "stream", "public-details-enabled"),
				m = P => !!(0, e.Le)(P, "stream", "llhls"),
				I = P => {
					const C = n(P);
					return C !== void 0 && C.limitMins > C.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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

			function r(u, l, f) {
				const c = {
					search: f,
					limit: e.toString()
				};
				return l !== void 0 && (c.end = l), c
			}

			function i(u, l, f) {
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
					return c
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
					return o
				},
				mm: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(a) {
				for (var m = 1; m < arguments.length; m++) {
					var I = arguments[m] != null ? Object(arguments[m]) : {},
						P = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(I).filter(function(C) {
						return Object.getOwnPropertyDescriptor(I, C).enumerable
					})), P.forEach(function(C) {
						u(a, C, I[C])
					})
				}
				return a
			}

			function u(a, m, I) {
				return m = l(m), m in a ? Object.defineProperty(a, m, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[m] = I, a
			}

			function l(a) {
				var m = f(a, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function f(a, m) {
				if (typeof a != "object" || a === null) return a;
				var I = a[Symbol.toPrimitive];
				if (I !== void 0) {
					var P = I.call(a, m || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(a)
			}
			let c = function(a) {
					return a.CREATE_BUTTON_CLICK = "click create load balancer", a.TOGGLE_STATUS = "load balancer toggle status", a.REVIEW_PAGE_CLICK = "click load balancer table review link", a.EDIT_CLICK = "click load balancer table edit button", a.DELETE_CLICK = "click load balancer table delete button", a
				}({}),
				p = function(a) {
					return a.EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", a.EDIT_IP_CLICK = "click edit load balancer IP", a.EDIT_POOLS_CLICK = "click edit load balancer pools", a.EDIT_MONITORS_CLICK = "click edit load balancer monitors", a.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", a.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", a
				}({}),
				v = function(a) {
					return a.GO_TO_STEP = "click load balancer step", a.BACK_TO_STEP = "click load balancer back to step", a.SAVE = "save load balancer", a.SAVE_AS_DRAFT = "save load balancer as draft", a.SAVE_AND_DEPLOY = "save and deploy load balancer", a.NAVIGATION_CHANGE = "click load balancer wizard navigation link", a.CLICK_PRIVATE_LB_DOCUMENTATION = "click link to private load balancing documentation", a
				}({}),
				n = function(a) {
					return a.OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", a
				}({});
			const o = Object.values({
					LOAD_BALANCERS_TABLE: c,
					REVIEW: p,
					WIZARD: v,
					USAGE: n
				}).flatMap(Object.values),
				g = (a, m) => r().sendEvent(a, i({
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
					return i
				},
				X: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let i = function(l) {
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

			function i(s) {
				for (var o = 1; o < arguments.length; o++) {
					var g = arguments[o] != null ? Object(arguments[o]) : {},
						a = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(g).filter(function(m) {
						return Object.getOwnPropertyDescriptor(g, m).enumerable
					})), a.forEach(function(m) {
						u(s, m, g[m])
					})
				}
				return s
			}

			function u(s, o, g) {
				return o = l(o), o in s ? Object.defineProperty(s, o, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[o] = g, s
			}

			function l(s) {
				var o = f(s, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(s, o) {
				if (typeof s != "object" || s === null) return s;
				var g = s[Symbol.toPrimitive];
				if (g !== void 0) {
					var a = g.call(s, o || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(s)
			}
			const c = "TURNSTILE";
			let p = function(s) {
				return s.OVERVIEW_PAGE = "view the overview page", s.LIST_OF_WIDGETS = "list of widgets", s.SOLVE_EVENTS = "list solve events", s.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", s.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", s.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", s.OPEN_DELETE_MODAL = "view the delete modal for one widget", s.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", s.DELETE_WIDGET = "delete successfully widgets", s.LIST_OF_HOSTNAMES = "list hostnames", s.OPEN_ADD_WIDGET_PAGE = "view page to add widget", s.FEEDBACK_ADD = "view Feedback Add", s.SAVE_WIDGET = "save widget", s.ROTATE_KEYS = "rotate keys", s.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", s.GET_WIDGETS = "get widget details", s.OPEN_ANALYTICS_PAGE = "view analytics page", s.ANALYTICS_DATA = "list the analytics data", s
			}({});
			const v = ({
					name: s,
					product: o = c,
					category: g = "user journey",
					page: a,
					additionalData: m = {}
				}) => {
					r().sendEvent(s, i({
						category: g,
						page: a,
						product: o
					}, m || {}))
				},
				n = () => {
					var s;
					return (s = Object.values(p)) === null || s === void 0 ? void 0 : s.flat()
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
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var s = 1; s < arguments.length; s++) {
					var o = arguments[s] != null ? Object(arguments[s]) : {},
						g = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(o).filter(function(a) {
						return Object.getOwnPropertyDescriptor(o, a).enumerable
					})), g.forEach(function(a) {
						u(n, a, o[a])
					})
				}
				return n
			}

			function u(n, s, o) {
				return s = l(s), s in n ? Object.defineProperty(n, s, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = o, n
			}

			function l(n) {
				var s = f(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(n, s) {
				if (typeof n != "object" || n === null) return n;
				var o = n[Symbol.toPrimitive];
				if (o !== void 0) {
					var g = o.call(n, s || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.GROUP_TABLE_ROW_CLICK = "user group table row click", n.GROUP_TABLE_ROW_MEMBERS_CLICK = "user group table row members click", n.GROUP_TABLE_ROW_POLICIES_CLICK = "user group table row policies click", n.GROUP_TABLE_ROW_SETTINGS_CLICK = "user group table row settings click", n.BACK_BUTTON = "clicked back from user group detail", n.MEMBER_ADD = "add user group member", n.MEMBER_DELETE = "delete user group member", n.POLICY_SAVE = "user group policies save", n.POLICY_DELETE = "user group policies delete", n
			}({});
			const p = ({
					name: n,
					additionalData: s = {}
				}) => {
					r().sendEvent(n, i({}, s || {}))
				},
				v = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
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
					return T
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
					return s
				},
				fv: function() {
					return M
				},
				hF: function() {
					return O
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
					return a
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../../../../node_modules/reselect/lib/index.js"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/SidebarNav/permissions.ts"),
				l = t("../react/common/selectors/entitlementsSelectors.ts");

			function f(y) {
				for (var D = 1; D < arguments.length; D++) {
					var N = arguments[D] != null ? Object(arguments[D]) : {},
						x = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(N).filter(function(G) {
						return Object.getOwnPropertyDescriptor(N, G).enumerable
					})), x.forEach(function(G) {
						c(y, G, N[G])
					})
				}
				return y
			}

			function c(y, D, N) {
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
			const n = y => (0, i.nA)(y) ? (0, l.p1)(y) && (0, u.$n)(y, "zone_versioning", "versioning") : !1,
				s = y => y.zoneVersioning.zoneApplications,
				o = (0, e.P1)("zoneApplications", s),
				g = y => y.zoneVersioning.zoneVersions,
				a = (0, e.P1)("zoneVersions", g),
				m = (0, r.P1)(a, y => {
					if (y) return y.filter(D => D.status == "V")
				}),
				I = y => y.zoneVersioning.environments,
				P = y => y.zoneVersioning.environments.isRequesting,
				C = (0, e.P1)("environments", I),
				_ = (0, r.P1)(o, y => {
					if (y) {
						if (y.length === 1) return y[0];
						y.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${y.length}`))
					}
					return null
				}),
				O = (0, r.P1)(C, y => y ? y.environments : []),
				E = y => {
					var D;
					return (D = y.zoneVersioning) === null || D === void 0 ? void 0 : D.zoneVersionSelector
				},
				T = (0, r.P1)(E, a, (y, D) => {
					if (!(y == null ? void 0 : y.isVersion) || !D) return null;
					const N = D.find(x => {
						if (x.version === y.selectedVersion && x.locked) return !0
					});
					return N ? f({}, N, {
						isLocked: !0
					}) : null
				}),
				L = (0, r.P1)(a, O, (y, D) => !D || !y ? [] : y.map(N => {
					const x = [];
					for (const G in D) D[G].version === N.version && x.push(D[G]);
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
					return T
				},
				IS: function() {
					return c
				},
				L7: function() {
					return l
				},
				Lt: function() {
					return a
				},
				Oj: function() {
					return o
				},
				QV: function() {
					return m
				},
				S6: function() {
					return k
				},
				X$: function() {
					return O
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
					return C
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
				return y = i(y), y in M ? Object.defineProperty(M, y, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[y] = D, M
			}

			function i(M) {
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
				c = "40rem",
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
				s = {
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
				o = {
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
					}, s),
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
				a = {
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
				C = "YYYY-MM-DD HH:mm:SS ZZ",
				_ = "active",
				O = ["bundled", "unbound", "standard"],
				E = null,
				T = {
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
					return c
				},
				L: function() {
					return i
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
				i = (p, v, n) => `${n?`${n}.`:""}${p}.${r(v)}`,
				u = (p, v, n) => `https://${i(p,v,n)}`,
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
					return i
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
			const i = async ([c, p]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: c,
					variables: p
				})
			})).body, u = async (...c) => (await e.get(...c)).body, l = c => async (p, v) => {
				const n = await fetch(p, v).then(s => s.json());
				return c.assertDecode(n)
			}, f = async (...c) => (await u(...c)).result;
			h.ZP = {
				fetcher: c => Array.isArray(c) ? f(...c) : f(c)
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

					function u(I) {
						return !!(I && I !== document && I.nodeName !== "HTML" && I.nodeName !== "BODY" && "classList" in I && "contains" in I.classList)
					}

					function l(I) {
						var P = I.type,
							C = I.tagName;
						return !!(C == "INPUT" && i[P] && !I.readOnly || C == "TEXTAREA" && !I.readOnly || I.isContentEditable)
					}

					function f(I) {
						I.getAttribute("is-focus-visible") !== "" && I.setAttribute("is-focus-visible", "")
					}

					function c(I) {
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

					function s(I) {
						!u(I.target) || I.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), c(I.target))
					}

					function o(I) {
						document.visibilityState == "hidden" && (e && (t = !0), g())
					}

					function g() {
						document.addEventListener("mousemove", m), document.addEventListener("mousedown", m), document.addEventListener("mouseup", m), document.addEventListener("pointermove", m), document.addEventListener("pointerdown", m), document.addEventListener("pointerup", m), document.addEventListener("touchmove", m), document.addEventListener("touchstart", m), document.addEventListener("touchend", m)
					}

					function a() {
						document.removeEventListener("mousemove", m), document.removeEventListener("mousedown", m), document.removeEventListener("mouseup", m), document.removeEventListener("pointermove", m), document.removeEventListener("pointerdown", m), document.removeEventListener("pointerup", m), document.removeEventListener("touchmove", m), document.removeEventListener("touchstart", m), document.removeEventListener("touchend", m)
					}

					function m(I) {
						I.target.nodeName.toLowerCase() !== "html" && (t = !1, a())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", v, !0), document.addEventListener("pointerdown", v, !0), document.addEventListener("touchstart", v, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", s, !0), document.addEventListener("visibilitychange", o, !0), g(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
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
					return i
				}
			});
			const e = () => {
					var l, f, c;
					return (l = window) === null || l === void 0 || (f = l.bootstrap) === null || f === void 0 || (c = f.data) === null || c === void 0 ? void 0 : c.security_token
				},
				r = () => {
					var l, f, c;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (f = l.data) === null || f === void 0 || (c = f.user) === null || c === void 0 ? void 0 : c.id)
				},
				i = () => {
					var l, f;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (f = l.data) === null || f === void 0 ? void 0 : f.is_kendo)
				},
				u = () => {
					var l, f, c, p;
					return (l = window) === null || l === void 0 || (f = l.bootstrap) === null || f === void 0 || (c = f.data) === null || c === void 0 || (p = c.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
					return p
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				i = () => (r() || "").indexOf("C0002") !== -1,
				u = () => (r() || "").indexOf("C0003") !== -1,
				l = () => (r() || "").indexOf("C0004") !== -1,
				f = () => (r() || "").indexOf("C0005") !== -1,
				c = n => {
					const s = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${s}`
				},
				p = () => {
					var n;
					const s = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (s == null ? void 0 : s.country) || ""
				},
				v = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				AI: function() {
					return O
				},
				Kd: function() {
					return s
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
					return T
				},
				i_: function() {
					return o
				},
				ly: function() {
					return n
				},
				th: function() {
					return c
				},
				ti: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				i = t("../../../common/intl/intl-types/src/index.ts"),
				u = t("../../../common/util/types/src/utils/index.ts"),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f = t("../../../../node_modules/cookie/index.js");
			const c = "cf-sync-locale-with-cps",
				p = i.Q.en_US,
				v = "en_US",
				n = "cf-locale";

			function s() {
				const k = (0, f.parse)(document.cookie);
				return l.Z.get(n) || k[n] || null
			}

			function o(k) {
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
			const a = k => (0, u.Yd)(i.Q).find(M => i.Q[M] === k) || v,
				m = [],
				I = [],
				P = [i.Q.de_DE, i.Q.en_US, i.Q.es_ES, i.Q.fr_FR, i.Q.it_IT, i.Q.pt_BR, i.Q.ko_KR, i.Q.ja_JP, i.Q.zh_CN, i.Q.zh_TW],
				C = {
					test: [...P, ...I, ...m],
					development: [...P, ...I, ...m],
					staging: [...P, ...I, ...m],
					production: [...P, ...I]
				},
				_ = k => {
					const M = i.Q[k];
					return C.production.includes(M)
				},
				O = () => Object.keys(i.Q).filter(k => _(k)),
				E = k => {
					const M = i.Q[k];
					return I.includes(M)
				},
				T = k => L[k],
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
					return a
				},
				Vb: function() {
					return p
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return c
				},
				_m: function() {
					return s
				},
				cC: function() {
					return o
				},
				oc: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = t("../../../common/intl/intl-core/src/Translator.ts"),
				i = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				u = t.n(i),
				l = t("../flags.ts");
			const f = new r.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
			});

			function c(m, ...I) {
				return f.t(m, ...I)
			}
			const p = f;

			function v(m, ...I) {
				return markdown(c(m, I))
			}

			function n(m) {
				if (Number(m) !== 0) {
					if (m % 86400 == 0) return c("time.num_days", {
						smart_count: m / 86400
					});
					if (m % 3600 == 0) return c("time.num_hours", {
						smart_count: m / 3600
					});
					if (m % 60 == 0) return c("time.num_minutes", {
						smart_count: m / 60
					})
				}
				return c("time.num_seconds", {
					smart_count: m
				})
			}

			function s(m, I) {
				return m in I ? I[m] : void 0
			}
			const o = i.Trans,
				g = i.I18n,
				a = i.useI18n
		},
		"../react/utils/url.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Ct: function() {
					return S
				},
				Fl: function() {
					return q
				},
				KT: function() {
					return Z
				},
				NF: function() {
					return _
				},
				Nw: function() {
					return T
				},
				Pd: function() {
					return E
				},
				Uh: function() {
					return w
				},
				cm: function() {
					return I
				},
				e1: function() {
					return L
				},
				el: function() {
					return oe
				},
				hW: function() {
					return se
				},
				pu: function() {
					return re
				},
				qR: function() {
					return G
				},
				td: function() {
					return O
				},
				uW: function() {
					return Q
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/r2/routes.ts"),
				f = t("../react/pages/zoneless-workers/routes.ts"),
				c = t("../react/pages/pages/routes.ts"),
				p = t("../react/pages/d1/routes.ts"),
				v = t("../react/pages/images/routes.ts");

			function n(B) {
				for (var V = 1; V < arguments.length; V++) {
					var ee = arguments[V] != null ? Object(arguments[V]) : {},
						le = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(ee).filter(function(pe) {
						return Object.getOwnPropertyDescriptor(ee, pe).enumerable
					})), le.forEach(function(pe) {
						s(B, pe, ee[pe])
					})
				}
				return B
			}

			function s(B, V, ee) {
				return V = o(V), V in B ? Object.defineProperty(B, V, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[V] = ee, B
			}

			function o(B) {
				var V = g(B, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function g(B, V) {
				if (typeof B != "object" || B === null) return B;
				var ee = B[Symbol.toPrimitive];
				if (ee !== void 0) {
					var le = ee.call(B, V || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(B)
			}
			const {
				endsWithSlash: a
			} = i.default, m = new RegExp(/([0-9a-z]{32})/g), I = B => B == null ? void 0 : B.replace(m, ":id"), P = (B, V) => {
				const ee = B.replace(a, "").split("/");
				return ee.slice(0, 2).concat([V]).concat(ee.slice(3)).join("/")
			}, C = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), _ = B => `/${B.replace(a,"").replace(/^\//,"")}`, O = B => T("add-site", B), E = B => T("billing", B), T = (B, V) => V ? `/${V}${B?`/${B}`:""}` : `/?to=/:account/${B}`, L = () => {
				const B = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return B ? B[1] : null
			}, S = (B, V) => r().stringify(n({}, r().parse(B), V)), k = (B = "") => B.toString().replace(/([\/]{1,})$/, ""), M = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], y = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, D = /^\/(\w{32,})(\/[^.]*)?/, N = B => M.includes(B), x = B => !N(B), G = B => !N(B) && D.test(B), oe = B => !N(B) && y.test(B), de = B => y.exec(B), se = B => {
				if (oe(B)) return B.split("/").filter(V => V.length > 0)[1]
			}, K = B => D.exec(B), Q = B => {
				if (G(B)) {
					const V = K(B);
					if (V) return V[1]
				}
			}, z = B => G(B) && B.split("/")[2] === "register-domain", j = B => z(B) ? B.split("/") : null, A = B => {
				if (oe(B)) {
					const [, , , V, ee, le, pe, ce] = B.split("/");
					return V === "traffic" && ee === "load-balancing" && le === "pools" && pe === "edit" && ce
				}
			}, w = B => {
				const V = j(B);
				if (V) return V[3]
			}, F = (B, V) => {
				var ee, le;
				return ((ee = B.pattern.match(/\:/g)) !== null && ee !== void 0 ? ee : []).length - ((le = V.pattern.match(/\:/g)) !== null && le !== void 0 ? le : []).length
			}, te = [...Object.values(u.C), ...Object.values(v.KJ), ...Object.values(l._j), ...Object.values(f._j), ...Object.values(c._j), ...Object.values(p._)].sort(F);

			function q(B) {
				if (!x(B)) return B;
				for (const ce of te)
					if (ce.expression.test(B)) return ce.pattern;
				const V = j(B);
				if (V) {
					const [, , ce, , ..._e] = V;
					return `/:accountId/${ce}/:domainName/${_e.join("/")}`
				}
				if (A(B)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const le = de(B);
				if (le) {
					const [, , , , ce] = le;
					return `/:accountId/:zoneName${ce||""}`
				}
				const pe = K(B);
				if (pe) {
					const [, , ce] = pe;
					return `/:accountId${ce||""}`
				}
				return B
			}

			function re(B) {
				if (!!B) try {
					const ee = B.split(".").pop();
					if (ee && ee.length > 0) return ee
				} catch {}
			}

			function Z(B, V = document.location.href) {
				try {
					const ee = new URL(B),
						le = new URL(V);
					if (ee.origin === le.origin) return `${ee.pathname}${ee.search}${ee.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				r: function() {
					return c
				},
				y: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(u);
			const f = /^\/domainconnect\/v2\/domaintemplates\//i,
				c = "domain-connect-redirect",
				p = () => {
					const v = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						f.test(v.pathname) && i.Z.set(c, v, 60 * 1e3)
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

			function i() {
				var f, c, p, v, n, s;
				return (f = window) === null || f === void 0 || (c = f.bootstrap) === null || c === void 0 || (p = c.data) === null || p === void 0 || (v = p.user) === null || v === void 0 || (n = v.betas) === null || n === void 0 || (s = n.some) === null || s === void 0 ? void 0 : s.call(n, o => o === "zone_level_access_beta")
			}

			function u() {
				const f = !!(0, e.Z)("zone-level-access");
				return i() || f
			}

			function l(f) {
				const c = !!(0, r.z1)("zone-level-access")(f);
				return i() || c
			}
		},
		"../utils/getDashVersion.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				p: function() {
					return i
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
				i = () => {
					var u;
					return ((0, e.parse)((u = document) === null || u === void 0 ? void 0 : u.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Wi: function() {
					return vt
				},
				IM: function() {
					return Ft
				},
				yV: function() {
					return xt
				},
				Ug: function() {
					return Pt
				},
				v_: function() {
					return ht
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				i = t("../react/utils/bootstrap.ts"),
				u = t("../react/app/providers/storeContainer.js"),
				l = t("../react/common/selectors/languagePreferenceSelector.ts"),
				f = t("../flags.ts"),
				c = t("../../../../node_modules/cookie/index.js"),
				p = t("../react/utils/url.ts"),
				v = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				s = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				g = t("../utils/getDashVersion.ts"),
				a = t("../react/common/selectors/accountSelectors.ts"),
				m = t("../react/common/selectors/entitlementsSelectors.ts"),
				I = t("../react/common/utils/getEnvironment.ts");

			function P(d) {
				for (var b = 1; b < arguments.length; b++) {
					var H = arguments[b] != null ? Object(arguments[b]) : {},
						ne = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(H).filter(function(me) {
						return Object.getOwnPropertyDescriptor(H, me).enumerable
					})), ne.forEach(function(me) {
						C(d, me, H[me])
					})
				}
				return d
			}

			function C(d, b, H) {
				return b = _(b), b in d ? Object.defineProperty(d, b, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[b] = H, d
			}

			function _(d) {
				var b = O(d, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function O(d, b) {
				if (typeof d != "object" || d === null) return d;
				var H = d[Symbol.toPrimitive];
				if (H !== void 0) {
					var ne = H.call(d, b || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(d)
			}
			const E = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				T = (0, s.Z)(d => {
					try {
						return E.assertDecode((0, c.parse)(d))
					} catch (b) {
						return console.error(b), {}
					}
				}),
				L = d => (b, H, ne) => {
					try {
						const ze = window.location.pathname,
							Ge = (0, u.bh)().getState(),
							rt = T(document.cookie),
							dt = P({
								page: (0, p.Fl)(ne.page || window.location.pathname),
								dashVersion: (0, g.t)(),
								environment: (0, I.Z)()
							}, rt);
						if (b === "identify") {
							var me, Se;
							const et = {
								gates: (0, o.T2)(Ge) || {},
								country: (me = t.g) === null || me === void 0 || (Se = me.bootstrap) === null || Se === void 0 ? void 0 : Se.ip_country
							};
							return d(b, H, P({}, dt, et, ne))
						} else {
							const et = {
								accountId: (0, p.uW)(ze),
								zoneName: (0, p.hW)(ze),
								domainName: (0, p.Uh)(ze)
							};
							if ((0, p.qR)(ze)) {
								var je;
								const Ke = (0, a.D0)(Ge);
								et.isEntAccount = !!(Ke == null || (je = Ke.meta) === null || je === void 0 ? void 0 : je.has_enterprise_zones) || (0, m.p1)(Ge)
							}
							if ((0, p.el)(ze)) {
								var Qe;
								const Ke = (0, v.nA)(Ge);
								et.zoneId = Ke == null ? void 0 : Ke.id, et.plan = Ke == null || (Qe = Ke.plan) === null || Qe === void 0 ? void 0 : Qe.legacy_id
							}
							return d(b, H, P({}, dt, et, ne))
						}
					} catch (ze) {
						return console.error(ze), d(b, H, ne)
					}
				},
				S = d => async (b, H, ne) => {
					try {
						return await d(b, H, ne)
					} catch (me) {
						if (console.error(me), !ht()) throw me;
						return {
							status: "rejected",
							reason: me
						}
					}
				};
			var k = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				M = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				y = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				D = t("../react/common/middleware/sparrow/errors.ts"),
				N = t("../react/pages/caching/tracking.tsx"),
				x = t("../react/pages/home/domain-registration/tracking.ts"),
				G = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				oe = t("../react/pages/hyperdrive/tracking.ts"),
				de = t("../react/pages/magic/overview/tracking.ts"),
				se = t("../react/pages/magic/packet-captures/constants.ts"),
				K = t("../react/pages/page-rules/tracking.ts"),
				Q = t("../react/pages/pages/constants.ts"),
				z = t("../react/pages/pipelines/tracking.ts"),
				j = t("../react/pages/security-center/BlockedContent/constants.ts"),
				A = t("../react/pages/security-center/tracking.ts"),
				w = t("../react/pages/security/api-shield/tracking.ts"),
				F = t("../react/pages/security/bots/tracking.ts"),
				te = t("../react/pages/security/resources/constants.tsx"),
				q = t("../react/pages/security/page-shield/resources/index.ts"),
				re = t("../react/pages/home/configurations/lists/tracking.ts"),
				Z = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				B = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				V = t("../react/pages/home/alerts/tracking.ts"),
				ee = t("../react/pages/dns/dns-records/tracking.ts"),
				le = t("../react/pages/magic/network-monitoring/constants.ts"),
				pe = t("../react/pages/security/settings/index.tsx"),
				ce = t("../react/pages/shared-config/sparrowEvents.tsx"),
				_e = t("../react/pages/spectrum/tracking.tsx"),
				be = t("../react/pages/traffic/argo/tracking.ts"),
				Te = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Pe = t("../react/pages/turnstile/tracking.ts"),
				ve = t("../react/pages/zoneless-workers/constants.ts"),
				De = t("../react/app/components/AccountHome/tracking.ts"),
				ke = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Xe = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				Je = t("../react/pages/user-groups/sparrowEvents.ts"),
				Y = t("../react/pages/home/members/sparrowEvents.ts"),
				Ee = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				Oe = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				qe = t("../react/pages/security/overview/resources/constants.ts"),
				Ue = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				xe = t("../react/pages/secrets-store/resources/constants.ts"),
				We = t("../react/pages/profile/tracking.ts");
			const ct = ((d, b, ...H) => n.eg.union([n.eg.literal(d), n.eg.literal(b), ...H.map(ne => n.eg.literal(ne))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", De.gX.SPARROW_PROJECTS_TABLE_CLICK, De.gX.SPARROW_EMPTY_STATE_CTA_CLICK, De.gX.SPARROW_PRODUCT_CARD_CLICK, De.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, De.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, De.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, De.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, De.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, De.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, De.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", ve.QV.clickedDownloadAnalytics, ve.QV.clickedPrintAnalytics, ve.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", ve.QV.addWCITriggerToExistingWorker, ve.QV.updateWCITrigger, ve.QV.deleteWCITrigger, ve.QV.addWCITriggerToNewWorker, ve.QV.createWCIBuildForNewWorker, ve.QV.completedWCIBuildForNewWorker, ve.QV.changedDefaultConfigurations, ve.QV.clickElement, Q.QV.toggledPagesSmartPlacement, Q.QV.downloadDemoProject, ve.QV.clickCreateWorkerFromRepoNextStep, ve.QV.clickCreateWorkerFromRepoPreviousStep, ve.QV.clickCreateNewSCMConnection, ve.QV.redirectFromSCMOAuth, ve.QV.clickSubmitError, ve.QV.selectTemplate, ve.QV.clickedListTemplates, ve.QV.clickedImportRepository, ve.QV.clickedClonePublicRepositoryFromUrl, ve.QV.templateStubWorkerCreated, ve.QV.templateStubWorkerCreationFailed, ve.QV.templateRepositoryCreated, ve.QV.templateRepositoryCreationFailed, ve.QV.copyTemplateC3Command, ve.QV.templateDeployClick, ve.QV.reauthenticateGithubModalShown, ve.QV.updateGithubPermissionsClicked, ve.QV.D2W_importRepository, ve.QV.D2W_stubWorkerCreated, ve.QV.D2W_stubWorkerCreationFailed, ve.QV.D2W_repositoryCreated, ve.QV.D2W_repositoryCreationFailed, ve.QV.D2W_resourcesProvisioned, ve.QV.D2W_resourceProvisioningFailed, ve.QV.D2W_githubAPIRateLimitReached, ve.QV.createResource, ve.QV.deleteResource, ve.QV.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", F.N3.INITIAL_FETCH_SCORES, F.N3.FETCH_CONFIGURATION, F.N3.INITIAL_FETCH_TIME_SERIES, F.N3.INITIAL_FETCH_ATTRIBUTES, F.N3.UPDATE_SETTINGS, F.N3.DELETE_RULE, F.N3.UPDATE_RULE, F.N3.FETCH_RULES, F.N3.CONFIGURE_BOT_MANAGEMENT, F.N3.WAF_RULES_REDIRECT, G.F.TOGGLE_TCP_PROTECTION, G.F.GET_TCP_PROTECTION_PREFIXES, G.F.CREATE_TCP_PROTECTION_PREFIXES, G.F.CREATE_TCP_PROTECTION_PREFIX, G.F.UPDATE_TCP_PROTECTION_PREFIX, G.F.DELETE_TCP_PROTECTION_PREFIX, G.F.DELETE_TCP_PROTECTION_PREFIXES, G.F.GET_TCP_PROTECTION_ALLOWLIST, G.F.CREATE_TCP_PROTECTION_ALLOWLIST, G.F.UPDATE_TCP_PROTECTION_ALLOWLIST, G.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, G.F.DELETE_TCP_PROTECTION_ALLOWLIST, G.F.GET_SYN_PROTECTION_RULES, G.F.GET_SYN_PROTECTION_RULE, G.F.CREATE_SYN_PROTECTION_RULE, G.F.UPDATE_SYN_PROTECTION_RULE, G.F.DELETE_SYN_PROTECTION_RULE, G.F.GET_TCP_FLOW_PROTECTION_RULES, G.F.GET_TCP_FLOW_PROTECTION_RULE, G.F.CREATE_TCP_FLOW_PROTECTION_RULE, G.F.UPDATE_TCP_FLOW_PROTECTION_RULE, G.F.DELETE_TCP_FLOW_PROTECTION_RULE, G.F.GET_SYN_PROTECTION_FILTERS, G.F.GET_SYN_PROTECTION_FILTER, G.F.CREATE_SYN_PROTECTION_FILTER, G.F.UPDATE_SYN_PROTECTION_FILTER, G.F.DELETE_SYN_PROTECTION_FILTER, G.F.GET_TCP_FLOW_PROTECTION_FILTERS, G.F.GET_TCP_FLOW_PROTECTION_FILTER, G.F.CREATE_TCP_FLOW_PROTECTION_FILTER, G.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, G.F.DELETE_TCP_FLOW_PROTECTION_FILTER, G.F.GET_DNS_PROTECTION_RULES, G.F.GET_DNS_PROTECTION_RULE, G.F.CREATE_DNS_PROTECTION_RULE, G.F.UPDATE_DNS_PROTECTION_RULE, G.F.DELETE_DNS_PROTECTION_RULE, q.FV.MANAGE_PAGE_SHIELD_POLICY, q.FV.CONFIGURE_PAGE_SHIELD, q.FV.VIEW_DETECTED_CONNECTIONS, q.FV.VIEW_DETECTED_SCRIPTS, q.FV.VIEW_PAGE_SHIELD_POLICIES, q.FV.VIEW_PAGE_SHIELD_SETTINGS, q.FV.OPEN_MUTABLE_VERSION_TOOLTIP, q.FV.SHOW_MUTABLE_VERSION_TOOLTIP, re.y.CREATE_LIST, re.y.DELETE_LIST, re.y.ADD_LIST_ITEM, re.y.DELETE_LIST_ITEM, oe.KO.PURCHASE_WORKERS_PAID, oe.KO.LIST_CONFIGS, oe.KO.SEARCH_CONFIGS, oe.KO.CREATE_HYPERDRIVE_CONFIG, oe.KO.VIEW_CONFIG_DETAILS, oe.KO.UPDATE_CACHING_SETTINGS, oe.KO.DELETE_HYPERDRIVE_CONFIG, oe.KO.CLICK_HYPERDRIVE_DOCUMENTATION, oe.KO.CLICK_GET_STARTED_GUIDE, oe.KO.CLICK_CONNECTIVITY_GUIDES, oe.KO.CLICK_QUICK_LINK, oe.KO.CLICK_DISCORD, oe.KO.CLICK_COMMUNITY, _e.N.CNAME, _e.N.IP_ADDRESS, _e.N.LB, _e.N.UPDATE_CNAME, _e.N.UPDATE_IP_ADDRESS, _e.N.UPDATE_LB, _e.N.DISABLE, N.N.TIERED_CACHE, N.N.CACHE_PURGE, N.N.CACHE_ANALYTICS, ...(0, Pe.P)(), ...(0, y.x4)(), ...(0, pe.m8)(), ...(0, Y.SH)(), ...(0, Je.Ky)(), ...(0, Ee.Cf)(), Te.N.CREATE, Te.N.EVENTS, Te.N.ANALYTICS, Te.N.UPDATE, Te.N.GENERATE_PREVIEW, A.RY.INITIATE_URL_SCAN, A.RY.LOAD_SCAN_INFO, A.Ev.LOAD_THREAT_EVENTS, A.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, A.Ev.THREAT_EVENTS_FILTERS, A.Ev.ABUSE_REPORT_BUTTON_CLICK, A.Ev.ABUSE_REPORT_SUBMIT_CLICK, A.Ev.ABUSE_REPORT_SUBMIT_FAILED, A.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, A.v9.EXPAND_INSIGHT_ROW, A.v9.ONE_CLICK_RESOLVE_BUTTON, A.v9.FOLLOW_RESOLVE_URL, A.v9.MANAGE_INSIGHT, A.v9.CLICK_SCAN_NOW, A.v9.CLICK_EXPORT_INSIGHTS, A.v9.BULK_ARCHIVE, A.v9.CLICK_DETAILS_BUTTON, w.Fj[w.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, w.Fj[w.kq.ENDPOINT_MANAGEMENT].detailedMetrics, w.Fj[w.kq.ENDPOINT_MANAGEMENT].createEndpoint, w.Fj[w.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, w.Fj[w.kq.ENDPOINT_MANAGEMENT].deployRouting, w.Fj[w.kq.ENDPOINT_MANAGEMENT].deleteRouting, w.Fj[w.kq.API_DISCOVERY].viewDiscoveredEndpoints, w.Fj[w.kq.API_DISCOVERY].saveDiscoveredEndpoint, w.Fj[w.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, w.Fj[w.kq.SCHEMA_VALIDATION].viewSchemasList, w.Fj[w.kq.SCHEMA_VALIDATION].uploadSchema, w.Fj[w.kq.SCHEMA_VALIDATION].viewSchemaAdoption, w.Fj[w.kq.SCHEMA_VALIDATION].downloadSchema, w.Fj[w.kq.SCHEMA_VALIDATION].deleteSchema, w.Fj[w.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, w.Fj[w.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, w.Fj[w.kq.SEQUENCE_ANALYTICS].viewSequencesPage, w.Fj[w.kq.JWT_VALIDATION].viewJWTRules, w.Fj[w.kq.JWT_VALIDATION].addJWTRule, w.Fj[w.kq.JWT_VALIDATION].editJWTRule, w.Fj[w.kq.JWT_VALIDATION].deleteJWTRule, w.Fj[w.kq.JWT_VALIDATION].reprioritizeJWTRule, w.Fj[w.kq.JWT_VALIDATION].viewJWTConfigs, w.Fj[w.kq.JWT_VALIDATION].addJWTConfig, w.Fj[w.kq.JWT_VALIDATION].editJWTConfig, w.Fj[w.kq.JWT_VALIDATION].deleteJWTConfig, w.Fj[w.kq.SETTINGS].redirectToFirewallRulesTemplate, w.Fj[w.kq.SETTINGS].redirectToPages, w.Fj[w.kq.SETTINGS].listSessionIdentifiers, w.Fj[w.kq.SETTINGS].listRequestsContainingSessionIdentifiers, w.Fj[w.kq.SETTINGS].addOrRemoveSessionIdentifiers, w.Fj[w.kq.SETTINGS].redirectToCustomRules, w.Fj[w.kq.SETTINGS].listAllFallthroughSchemas, w.Fj[w.kq.SEQUENCE_RULES].listSequenceRules, w.Fj[w.kq.SEQUENCE_RULES].deleteSequenceRule, w.Fj[w.kq.SEQUENCE_RULES].reorderSequenceRule, w.Fj[w.kq.SEQUENCE_RULES].createSequenceRule, w.Fj[w.kq.SEQUENCE_RULES].editSequenceRule, Z.Z.ANALYTICS, Z.Z.CREATE_AND_DEPLOY, Z.Z.CREATE_MONITOR_LINK, Z.Z.CREATE_MONITOR, Z.Z.CREATE_POOL_LINK, Z.Z.CREATE_POOL, Z.Z.EDIT_MONITOR, Z.Z.EDIT_POOL, Z.Z.LOAD_BALANCING_TABLE, Z.Z.POOL_TABLE, Z.Z.EDIT_MONITOR_LINK, Z.Z.EDIT_POOL_LINK, ...B.eT, V.y.SECONDARY_DNS_NOTIFICATION_CREATE, V.y.SECONDARY_DNS_NOTIFICATION_UPDATE, V.y.SECONDARY_DNS_NOTIFICATION_DELETE, ee.U.ZONE_TRANSFER_SUCCESS, ee.U.DNS_RECORD_CREATE, ee.U.DNS_RECORD_UPDATE, ee.U.DNS_RECORD_DELETE, Xe.Y.PEER_DNS_CREATE, Xe.Y.PEER_DNS_UPDATE, Xe.Y.PEER_DNS_DELETE, Xe.Y.ZONE_TRANSFER_ENABLE, Xe.Y.ZONE_TRANSFER_DISABLE, be.V.ARGO_ENABLEMENT, be.V.ARGO_GEO_ANALYTICS_FETCH, be.V.ARGO_GLOBAL_ANALYTICS_FETCH, se.X.VIEW_BUCKETS_LIST, se.X.CREATE_BUCKET, se.X.VALIDATE_BUCKET, se.X.DELETE_BUCKET, se.X.VIEW_CAPTURES_LIST, se.X.CREATE_SIMPLE_CAPTURE, se.X.CREATE_FULL_CAPTURE, se.X.VIEW_FULL_CAPTURE, se.X.DOWNLOAD_SIMPLE_CAPTURE, le.bK.VIEW_RULES, le.bK.CREATE_RULE, le.bK.UPDATE_RULE, le.bK.DELETE_RULE, le.bK.VIEW_CONFIGURATION, le.bK.CREATE_CONFIGURATION, le.bK.UPDATE_CONFIGURATION, le.bK.DELETE_CONFIGURATION, de.r8.VIEW_ALERTS, de.r8.VIEW_ALERTS_HISTORY, de.r8.MAGIC_OVERVIEW_ANALYTICS, de.VZ.CREATE_SITE, de.VZ.CREATE_TUNNEL, de.VZ.CREATE_STATIC_ROUTE, Ue.DC.CLICK_ADAPTIVE_SAMPLING, Ue.DC.CLICK_TO_LOG_EXPLORER_BANNER, Ue.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, Ue.DC.CLICK_SWITCH_TO_RAW_LOGS, Ue.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", x.U.REGISTER_DOMAIN_SEARCH_SUBMIT, x.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, x.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, x.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, x.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, x.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, x.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, x.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, x.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, x.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, x.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, x.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, x.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, x.U.REGISTER_DOMAIN_CHECKOUT_ERROR, x.U.TRANSFER_DOMAIN_CHANGE_STEP, x.U.RENEW_DOMAIN_COMPLETED, x.U.RESTORE_DOMAIN_INIT, x.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, x.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, x.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, x.U.RESTORE_DOMAIN_FAILURE, x.U.RESTORE_DOMAIN_COMPLETED, x.U.DOMAIN_DELETE_INIT, x.U.DOMAIN_DELETE_COMPLETED, x.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, x.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, x.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, x.U.DOMAIN_DELETE_CONFIRM_DELETE, x.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, x.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, x.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, x.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, x.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, x.U.DOMAIN_MOVE_START_FLOW, x.U.DOMAIN_MOVE_OPEN_DOCS, x.U.DOMAIN_MOVE_CLOSE_FLOW, x.U.DOMAIN_MOVE_PROGRESS_FLOW, x.U.DOMAIN_MOVE_SUBMIT, x.U.DOMAIN_MOVE_INITIATE_SUCCESS, x.U.DOMAIN_MOVE_INITIATE_ERROR, x.U.DOMAIN_MOVE_CANCEL, x.U.DOMAIN_MOVE_CANCEL_SUCCESS, x.U.DOMAIN_MOVE_CANCEL_ERROR, x.U.ACTION_CENTER_NAVIGATE, x.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, x.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, x.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, xe.z3.CREATE_SECRET, xe.z3.DELETE_SECRET, xe.z3.BIND_SECRET, xe.z3.DUPLICATE_SECRET, xe.z3.EDIT_SECRET, z.KO.CLICK_GET_STARTED_GUIDE, z.KO.CLICK_PIPELINE_DOCUMENTATION, z.KO.CLICK_QUICK_LINK, z.KO.CREATE_PIPELINE, z.KO.DELETE_PIPELINE, z.KO.LIST_PIPELINES, z.KO.VIEW_PIPELINE, k.S.EXISTING_DOMAIN, k.S.NEW_DOMAIN, k.S.WAF_RULESET, k.S.WORKERS, k.S.PAGES, k.S.R2, k.S.ACCOUNT_MEMBERS, K._.TEMPLATE_PRODUCT_SELECTED, K._.TEMPLATE_SELECTED, K._.TEMPLATE_SAVE_DRAFT, K._.TEMPLATE_CANCEL, K._.TEMPLATE_DEPLOY, ce.D.CLICK_GO_BACK_SHARE_MODAL, ce.D.CLICK_MENU_ITEM_SHARE, ce.D.CLICK_ON_CANCEL_SHARE_MODAL, ce.D.CLICK_ON_CLOSE_SHARE_MODAL, ce.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, ce.D.CLICK_ON_DELETE_RULESET, ce.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, ce.D.CLICK_ON_EDIT_SHARE_PERMISSION, ce.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, ce.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, ce.D.CLICK_ON_SHARE_TABLE_ROW, te.pR.CLICK_GEOGRAPHICAL_TEMPLATE, te.pR.CLICK_IP_TEMPLATE, te.pR.CLICK_USER_AGENT_TEMPLATE, te.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, pe.vc.CREATED, pe.vc.ENABLED, pe.vc.DISABLED, pe.vc.DELETED, pe.vc.UPDATED, pe.vc.DOWNLOADED, j.Gk.REQUEST_REVIEW, j.Gk.COPY_URL, M.v.FIELD, M.v.OPERATOR, ke.Vj.SHOW_LCC_MIGRATION_BANNER, ke.Vj.CLICK_LCC_DOCUMENTATION, ke.Vj.CLICK_LCC_UPGRADE_GUIDE, ke.Vj.SHOW_LCC_MIGRATION_WARNING, Oe.y.CLICK_DISMISS_INELIGIBILITY, Oe.y.CLICK_NEXT_STEP, Oe.y.CLICK_OPT_IN, Oe.y.CLICK_OPT_IN_BUTTON, Oe.y.CLICK_OPT_OUT_BUTTON, Oe.y.DISPLAY_MODAL, Oe.y.DISPLAY_OPT_OUT_MODAL, Oe.y.DISPLAY_TOOLTIP_NOT_AVAILABLE, Oe.y.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, qe.AZ.LOAD_INSIGHTS, qe.AZ.OPEN_SIDE_MODAL_INSIGHT, qe.AZ.CLOSE_SIDE_MODAL_INSIGHT, qe.AZ.CLICK_ACTION_INSIGHT, Ue.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, Ue.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, Ue.DC.OPEN_SIDE_DRAWER, Ue.DC.CLOSE_SIDE_DRAWER, We.QV[We.Xn].clickLoginFromMobileApp2fa, We.QV[We.Xn].clickTryOther2FAMethodOrBackupCode, We.QV[We.Xn].clickTryRecovery, We.QV[We.xq].clickRegenerateBackupCodes),
				X = n.eg.exactStrict(n.eg.object({
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
				ue = (d, b) => {
					const [H, ne] = he(b);
					let me, Se;
					return (0, n.nM)(ct.decode(d)) && (me = new D.Uh(d)), ne && ne.length > 0 && (Se = new D.oV(d, ne)), [H, me, Se]
				},
				he = d => {
					const b = X.decode(d);
					if ((0, n.nM)(b)) {
						const H = b.left.map(({
							context: ne
						}) => ne.map(({
							key: me
						}) => me)).reduce((ne, me) => ne.concat(me), []).filter(ne => ne in d);
						return [Be(H, d), H]
					}
					return [d, []]
				},
				Be = (d, b) => Object.entries(b).reduce((H, [ne, me]) => (d.includes(ne) || (H[ne] = me), H), {}),
				Ae = d => (b, H, ne) => {
					const [me, Se, je] = ue(H, ne);
					if (Se) throw Se;
					return je && console.error(je), d(b, H, me)
				};
			var ye = t("../react/utils/zaraz.ts");
			const Re = {
					identify: !0
				},
				gt = d => (b, H, ne) => (Re[H] || ye.tg === null || ye.tg === void 0 || ye.tg.track(H, ne), d(b, H, ne));
			var tt = t("../react/common/selectors/userSelectors.ts"),
				_t = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function it(d) {
				for (var b = 1; b < arguments.length; b++) {
					var H = arguments[b] != null ? Object(arguments[b]) : {},
						ne = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(H).filter(function(me) {
						return Object.getOwnPropertyDescriptor(H, me).enumerable
					})), ne.forEach(function(me) {
						Et(d, me, H[me])
					})
				}
				return d
			}

			function Et(d, b, H) {
				return b = Lt(b), b in d ? Object.defineProperty(d, b, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[b] = H, d
			}

			function Lt(d) {
				var b = $e(d, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function $e(d, b) {
				if (typeof d != "object" || d === null) return d;
				var H = d[Symbol.toPrimitive];
				if (H !== void 0) {
					var ne = H.call(d, b || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(d)
			}
			const lt = new Set(["cf_argo", "load_balancing_basic_plus"]),
				Ye = new Set(["pro", "business"]),
				Ze = ({
					price: d,
					ratePlanId: b,
					ratePlanName: H,
					frequency: ne,
					isNewSubscription: me
				}) => ({
					event: "purchase",
					new_subscription: me,
					ecommerce: {
						transaction_id: (0, _t.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: d
					},
					items: [{
						item_id: b,
						item_name: H || b,
						frequency: ne,
						price: d
					}]
				}),
				ut = d => {
					const {
						price: b,
						frequency: H,
						plan: ne,
						ratePlanId: me,
						ratePlanName: Se
					} = d;
					return Ye.has(ne) ? it({}, Ze({
						price: b,
						ratePlanId: me,
						ratePlanName: Se,
						frequency: H,
						isNewSubscription: !0
					}), {
						label: ne
					}) : void 0
				},
				U = d => {
					const {
						price: b,
						frequency: H,
						ratePlan: ne,
						ratePlanName: me
					} = d;
					return lt.has(ne) ? it({}, Ze({
						price: b,
						ratePlanId: ne,
						ratePlanName: me,
						frequency: H,
						isNewSubscription: !0
					}), {
						label: ne
					}) : void 0
				},
				ie = d => {
					const {
						price: b,
						frequency: H,
						plan: ne,
						ratePlanId: me,
						ratePlanName: Se,
						label: je
					} = d;
					return Ye.has(ne) ? it({}, Ze({
						price: b,
						frequency: H,
						ratePlanId: me,
						ratePlanName: Se,
						isNewSubscription: !1
					}), {
						label: je || ne
					}) : void 0
				},
				fe = d => {
					const {
						price: b,
						frequency: H,
						ratePlan: ne,
						ratePlanName: me,
						oldRatePlan: Se
					} = d;
					return lt.has(ne) ? it({}, Ze({
						price: b,
						frequency: H,
						ratePlanId: ne,
						ratePlanName: me,
						isNewSubscription: !1
					}), {
						label: `${Se}->${ne}`
					}) : void 0
				},
				Ce = "pageview",
				Le = "create zone",
				Ne = "create user",
				nt = "Plan Purchase Success",
				st = "Product Purchase Success",
				Tt = "Plan Update Success",
				mt = "Product Update Success",
				St = {
					[Ce]: !0,
					[Le]: !0,
					[Ne]: !0,
					[nt]: !0,
					[st]: !0,
					[Tt]: !0,
					[mt]: !0
				},
				Ve = d => {
					var b;
					return !!((b = d.gates.assignments) === null || b === void 0 ? void 0 : b["dx-enable-google-tag-manager"])
				},
				Ot = d => {
					const b = /\|MCMID\|([0-9]+)\|/,
						H = d.match(b);
					return H ? H[1] : void 0
				},
				kt = d => {
					var b;
					const {
						deviceViewport: H,
						page: ne,
						previousPage: me,
						pageName: Se,
						utm_campaign: je,
						_ga: Qe,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": ze
					} = d, {
						origin: Ge
					} = window.location, rt = (0, tt.PR)((0, u.bh)().getState());
					return {
						event: me !== void 0 && ne !== me ? "virtual_page_view" : "page_load",
						device_type: H,
						hostname: Ge,
						language: navigator.language,
						locale: (0, l.r)((0, u.bh)().getState()),
						page_location: ne ? `${Ge}${ne}` : "[redacted]",
						page_path: ne ? `${ne}` : "[redacted]",
						page_referrer: me ? `${Ge}/${me}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: Se || "[redacted]",
						page_url: ne ? `${Ge}${ne}` : "[redacted]",
						query: je ? `?utm_campaign=${je}` : "[redacted]",
						user_properties: {
							ga_client_id: (b = Qe) !== null && b !== void 0 ? b : void 0,
							ga_client_id_s: Qe ? `s${Qe}` : void 0,
							user_id: vt() ? rt == null ? void 0 : rt.id : void 0,
							ecid: ze ? Ot(ze) : void 0
						}
					}
				},
				wt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				Mt = d => {
					const {
						status: b
					} = d;
					return b === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				It = (d, b) => {
					switch (d) {
						case Ce:
							return kt(b);
						case Le:
							return wt();
						case Ne:
							return Mt(b);
						case nt:
							return ut(b);
						case st:
							return U(b);
						case Tt:
							return ie(b);
						case mt:
							return fe(b);
						default:
							return
					}
				},
				Rt = d => (b, H, ne) => {
					if (St[H]) {
						var me;
						const Se = It(H, ne);
						Se && ((me = window.dataLayer) === null || me === void 0 || me.push(Se))
					}
					return d(b, H, ne)
				};
			var ft = t("../react/utils/cookiePreferences.ts");

			function At(d) {
				for (var b = 1; b < arguments.length; b++) {
					var H = arguments[b] != null ? Object(arguments[b]) : {},
						ne = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(H).filter(function(me) {
						return Object.getOwnPropertyDescriptor(H, me).enumerable
					})), ne.forEach(function(me) {
						yt(d, me, H[me])
					})
				}
				return d
			}

			function yt(d, b, H) {
				return b = Nt(b), b in d ? Object.defineProperty(d, b, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[b] = H, d
			}

			function Nt(d) {
				var b = $t(d, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function $t(d, b) {
				if (typeof d != "object" || d === null) return d;
				var H = d[Symbol.toPrimitive];
				if (H !== void 0) {
					var ne = H.call(d, b || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(d)
			}
			const Pt = d => {
					const b = Ve((0, u.bh)().getState());
					r().init(At({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: ht() && !(0, i.gm)() && vt(),
						middlewares: [S, Ae, L, gt, ...b ? [Rt] : []]
					}, d))
				},
				xt = () => {
					r().identify(At({}, (0, e.getAttribution)(), {
						locale: (0, l.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, f.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				ht = () => !0,
				Ft = () => {
					(0, ft.kT)("sparrow_id")
				},
				vt = () => (0, ft.Xm)()
		},
		"../utils/initStyles.ts": function($, h, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = t("../react/app/providers/storeContainer.js");
			const i = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				l = c => {
					const p = [];
					for (let v in c.colors) {
						const n = c.colors[v];
						if (Array.isArray(n) && v !== "categorical")
							for (let s = 0; s < n.length; ++s) p.push(`--cf-${v}-${s}:${n[s]};`)
					}
					return p.join(`
`)
				},
				f = () => {
					const c = (0, e.Yc)(),
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
					let v = document.getElementById(i);
					v ? v.innerText = "" : (v = document.createElement("style"), v.id = i, u.appendChild(v)), v.appendChild(document.createTextNode(p)), (0, r.bh)().dispatch({
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
				let i = "";
				return {
					setEventId: f => (!f || typeof f != "string" || (i = f), i),
					getEventId: () => i
				}
			})()
		},
		"../utils/zaraz.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Ro: function() {
					return s
				},
				bM: function() {
					return p
				},
				tg: function() {
					return c
				},
				yn: function() {
					return n
				}
			});

			function e(o) {
				for (var g = 1; g < arguments.length; g++) {
					var a = arguments[g] != null ? Object(arguments[g]) : {},
						m = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(a).filter(function(I) {
						return Object.getOwnPropertyDescriptor(a, I).enumerable
					})), m.forEach(function(I) {
						r(o, I, a[I])
					})
				}
				return o
			}

			function r(o, g, a) {
				return g = i(g), g in o ? Object.defineProperty(o, g, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[g] = a, o
			}

			function i(o) {
				var g = u(o, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function u(o, g) {
				if (typeof o != "object" || o === null) return o;
				var a = o[Symbol.toPrimitive];
				if (a !== void 0) {
					var m = a.call(o, g || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(o)
			}
			const l = {
					track: (o, g) => null,
					set: (o, g) => console.log(`zaraz.set(${o}, ${g})`)
				},
				f = {
					track: (o, g) => {
						var a;
						(a = window.zaraz) === null || a === void 0 || a.track(o, e({}, g, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (o, g) => {
						var a;
						return (a = window.zaraz) === null || a === void 0 ? void 0 : a.set(o, g)
					}
				};
			let c;
			const p = () => {
					window.zaraz, c = f
				},
				v = ["email", "first_name", "last_name"],
				n = o => {
					v.forEach(g => {
						var a;
						(a = c) === null || a === void 0 || a.set(g, o[g])
					})
				},
				s = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function($, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = t.n(i),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(f),
				p = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				v = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				a = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				m = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				I = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				P = t("../../../common/component/component-filter-bar/src/constants.js"),
				C = t("../../../common/component/component-filter-bar/src/utils.js");

			function _() {
				return _ = Object.assign ? Object.assign.bind() : function(j) {
					for (var A = 1; A < arguments.length; A++) {
						var w = arguments[A];
						for (var F in w) Object.prototype.hasOwnProperty.call(w, F) && (j[F] = w[F])
					}
					return j
				}, _.apply(this, arguments)
			}

			function O(j) {
				for (var A = 1; A < arguments.length; A++) {
					var w = arguments[A] != null ? Object(arguments[A]) : {},
						F = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(w).filter(function(te) {
						return Object.getOwnPropertyDescriptor(w, te).enumerable
					})), F.forEach(function(te) {
						E(j, te, w[te])
					})
				}
				return j
			}

			function E(j, A, w) {
				return A = T(A), A in j ? Object.defineProperty(j, A, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[A] = w, j
			}

			function T(j) {
				var A = L(j, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function L(j, A) {
				if (typeof j != "object" || j === null) return j;
				var w = j[Symbol.toPrimitive];
				if (w !== void 0) {
					var F = w.call(j, A || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(j)
			}
			const S = 70,
				k = (0, l.createStyledComponent)(({
					showOverflow: j
				}) => O({
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
				G = (0, l.createStyledComponent)(({
					buttonStyle: j
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
				}, j), v.zx),
				oe = (0, l.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				de = (0, l.createStyledComponent)(({
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
				se = (0, l.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				K = j => j.current ? [...j.current.children].reduce((A, w) => (w.offsetTop >= S && A++, A), 0) : 0;
			let Q = 0;
			class z extends e.Component {
				constructor() {
					super();
					E(this, "overflowWrapper", (0, e.createRef)()), E(this, "hasOverflowed", A => {
						const w = K(this.overflowWrapper);
						A.scrollHeight > S && w >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (A.scrollHeight < S || w === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), E(this, "addNewFilter", () => {
						const {
							filterDefinitions: A
						} = this.props, w = (0, C.TE)(A), F = Object.keys(w)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: F,
								operator: (0, C.uv)(F, w),
								value: (0, C.TT)(F, w)
							}
						})
					}), E(this, "handleOpenFilterEdit", A => {
						this.setState({
							openFilter: A,
							filterChanges: O({}, this.props.filters[A])
						})
					}), E(this, "handleRemoveFilterClick", (A, w) => {
						A.stopPropagation(), this.removeFilter(w)
					}), E(this, "removeFilter", A => {
						const {
							handleFiltersChange: w
						} = this.props, F = [...this.props.filters], te = F[A];
						F.splice(A, 1), w(F), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: te.key,
							operator: te.operator,
							value: te.value
						})
					}), E(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), E(this, "handleFilterSubmit", A => {
						const {
							filterDefinitions: w
						} = this.props;
						A.preventDefault();
						const {
							filterChanges: F
						} = this.state, te = typeof w[F.key].parse == "function" ? Array.isArray(F.value) ? F.value.map(w[F.key].parse) : w[F.key].parse(F.value) : F.value;
						if (w[F.key].validate && (Array.isArray(te) ? !te.every(w[F.key].validate) : !w[F.key].validate(te))) return this.setState({
							invalid: !0
						});
						const q = [...this.props.filters],
							re = O({}, F, {
								value: te
							}),
							Z = !q[this.state.openFilter];
						Z ? q.push(re) : q[this.state.openFilter] = O({}, re), this.props.handleFiltersChange(q, re), (Z ? this.props.onAddFilter : this.props.onEditFilter)({
							field: re.key,
							operator: re.operator,
							value: re.value
						}), this.closeOpenFilterChanges()
					}), E(this, "handlePendingKeyChange", ({
						value: A
					}) => {
						const {
							filterDefinitions: w
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: A,
								operator: (0, C.uv)(A, w),
								value: (0, C.TT)(A, w)
							}
						})
					}), E(this, "handlePendingOperatorChange", ({
						value: A
					}) => {
						let w = O({}, this.state.filterChanges, {
							operator: A
						});
						if ((0, C.dr)(A)) {
							var F, te;
							((F = this.state.filterChanges) === null || F === void 0 ? void 0 : F.value) && !Array.isArray((te = this.state.filterChanges) === null || te === void 0 ? void 0 : te.value) && (w.value = [this.state.filterChanges.value])
						} else {
							var q, re, Z;
							((q = this.state.filterChanges) === null || q === void 0 ? void 0 : q.value) && Array.isArray((re = this.state.filterChanges) === null || re === void 0 ? void 0 : re.value) && ((Z = this.state.filterChanges) === null || Z === void 0 ? void 0 : Z.value.length) > 0 && (w.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: w
						})
					}), E(this, "handlePendingValueChange", A => {
						this.setState({
							invalid: !1,
							filterChanges: O({}, this.state.filterChanges, {
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
						formatLabel: w,
						filterDefinitions: F
					} = this.props, {
						operator: te
					} = this.state.filterChanges, q = F[this.state.filterChanges.key], re = this.state.filterChanges.value, Z = V => Array.isArray(V) ? V.map(ee => ee.value) : (V == null ? void 0 : V.value) || null;
					if (q.renderValueComponent) return q.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (q.type) {
						case P.k.custom: {
							var B;
							return r().createElement(q.CustomComponent, _({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (B = q == null ? void 0 : q.customProps) !== null && B !== void 0 ? B : {}))
						}
						case P.k.select:
							return (0, C.dr)(te) ? r().createElement(a.Z, {
								searchable: !0,
								multi: !0,
								creatable: !q.options,
								value: typeof re.split == "function" ? re == null ? void 0 : re.split(",") : Array.isArray(re) ? re : [],
								options: q.options ? q.options.map(V => ({
									value: V.value || V,
									label: V.label || w(this.state.filterChanges.key, V, A)
								})) : re ? (Array.isArray(re) ? re : re.split(",")).map(V => ({
									label: V,
									value: V
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(f.Trans, {
									id: q.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: q.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: V => {
									this.handlePendingValueChange(Z(V))
								},
								isValidNewOption: V => {
									const ee = q.validate;
									return !ee && V || V && ee([V])
								},
								getNewOptionData: (V, ee) => ({
									value: V,
									label: ee
								})
							}) : r().createElement(o.hQ, {
								hideLabel: !0,
								value: re,
								options: q.options.map(V => ({
									value: V,
									label: w(this.state.filterChanges.key, V, A)
								})),
								onChange: ({
									value: V
								}) => this.handlePendingValueChange(V)
							});
						case P.k.string:
						default:
							return (0, C.dr)(te) ? r().createElement(a.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof re.split == "function" ? re == null ? void 0 : re.split(",") : Array.isArray(re) ? re : [],
								options: re ? (Array.isArray(re) ? re : re.split(",")).map(V => ({
									label: V,
									value: V
								})) : [],
								noOptionsMessage: () => null,
								placeholder: A.t("analytics.report.filters.labels.placeholder", {
									example: F[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: V => {
									this.handlePendingValueChange(Z(V))
								},
								isValidNewOption: V => {
									const ee = q.validate;
									return !ee && V || V && ee([V])
								},
								getNewOptionData: (V, ee) => ({
									value: V,
									label: ee
								}),
								formatCreateLabel: V => A.t("filter_editor.value_create_label", {
									value: V
								})
							}) : r().createElement(f.I18n, null, V => r().createElement(p.I, {
								value: this.state.filterChanges.value,
								onChange: ee => this.handlePendingValueChange(ee.target.value),
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
						filterDefinitions: w,
						modalStyles: F,
						filterIconType: te,
						buttonStyle: q,
						secondaryActionComponent: re
					} = this.props, Z = K(this.overflowWrapper), B = `filterPanel${this.state.id}`, V = this.state.openFilter !== null;
					return r().createElement(f.I18n, null, ee => r().createElement(g.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(se, null, r().createElement(g.ZC, {
						display: "flex",
						flexDirection: "row"
					}, r().createElement(G, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": V,
						"aria-controls": B,
						inverted: !0,
						buttonStyle: q
					}, r().createElement(n.J, {
						type: te || "add",
						mr: 1,
						label: ee.t("common.add", {
							_: "Add"
						})
					}), r().createElement(f.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), !!re && r().createElement(g.ZC, null, re)), this.props.filters.length > 0 && r().createElement(oe, null, r().createElement(f.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(k, {
						innerRef: this.overflowWrapper,
						overflowLimit: S,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((le, pe) => {
						const {
							key: ce,
							operator: _e,
							value: be
						} = le, Te = w[ce].ignoreLabelTranslation ? w[ce].label : ee.t(w[ce].label), Pe = ee.t(`analytics.report.filters.operators.${_e}`), ve = Array.isArray(be) ? be.map(ke => A(ce, ke, ee)).join(", ") : A(ce, be, ee), De = `${Te} ${Pe} ${ve}`;
						return r().createElement(M, {
							key: `${ce}-${_e}-${be}`,
							title: De
						}, r().createElement(y, {
							onClick: () => this.handleOpenFilterEdit(pe)
						}, r().createElement(g.ZC, {
							display: "flex"
						}, r().createElement(D, null, Te), r().createElement(N, null, Pe), r().createElement(x, null, ve), (0, C.oN)(le, w) ? r().createElement(s.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(de, {
							onClick: ke => this.handleRemoveFilterClick(ke, pe),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), V && r().createElement(I.Z, {
						id: B,
						filterDefinitions: w,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, C.oN)(this.state.filterChanges, w),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: A,
						modalStyles: F
					}), this.state.hasOverflowed && r().createElement(m.Z, {
						count: Z,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			E(z, "propTypes", {
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
			}), h.Z = z
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

			function e(c, p, v) {
				return p = r(p), p in c ? Object.defineProperty(c, p, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[p] = v, c
			}

			function r(c) {
				var p = i(c, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function i(c, p) {
				if (typeof c != "object" || c === null) return c;
				var v = c[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(c, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(c)
			}
			class u extends Error {
				constructor(p, v) {
					super(v);
					e(this, "translationKey", void 0), this.translationKey = p, this.name = "TranslatorError"
				}
			}
			class l extends u {
				constructor(p, v) {
					super(p, `Translation key not found: ${p}, locale: ${v}`);
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
					return T
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
					return a
				},
				W7: function() {
					return C
				},
				dN: function() {
					return k
				},
				eF: function() {
					return O
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
				c = e.eg.object({
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
					transfer_conditions: l.optional,
					updated_at: e.eg.union([e.eg.string, e.eg.null]).optional,
					updated_registrar: e.eg.string.optional,
					using_created_registrar_nameservers: e.eg.boolean.optional,
					using_current_registrar_nameservers: e.eg.boolean.optional,
					using_previous_registrar_nameservers: e.eg.boolean.optional,
					using_updated_registrar_nameservers: e.eg.boolean.optional,
					whois: e.eg.unknown.optional
				}),
				s = e.eg.object({
					available: e.eg.boolean
				}),
				o = e.eg.object({
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
				a = e.eg.object({
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
			let C = function(M) {
				return M.PENDING = "pending", M.PENDING_UPDATE = "pending_update", M.ENABLED = "enabled", M.DISABLED = "disabled", M
			}({});
			const _ = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(C)
				}),
				O = e.eg.intersection([_, P]),
				E = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let T = function(M) {
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
					return i
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
				l = function(c) {
					return c.DEFAULT = "default", c.MEDIUM = "medium", c.LOW = "low", c.EOFF = "eoff", c.HIGH = "high", c.VERY_HIGH = "very_high", c
				}({}),
				f = function(c) {
					return c.DEFAULT = "", c.XML = "text/xml", c.JSON = "application/json", c.TEXT = "text/plain", c.HTML = "text/html", c
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

			function e(i) {
				return Object.keys(i)
			}
			const r = (i, u) => {
				if (u !== void 0) throw new Error("Unexpected object: " + i);
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
					return i.Z
				},
				n4: function() {
					return r.n
				}
			});
			var e = t("../../../dash/intl/intl-translations/src/makeLoadPhrases.ts"),
				r = t("../../../dash/intl/intl-translations/src/catalogMap.ts"),
				i = t("../../../dash/intl/intl-translations/src/supportedCatalogs.ts")
		},
		"../react/common/out.css": function($, h, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[$.id, e, ""]
			]);
			var r, i, u = {
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
  .max-w-8\\/10 {
    max-width: calc(8/10 * 100%);
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

			function r(i) {
				if (!t.o(e, i)) return Promise.resolve().then(function() {
					var f = new Error("Cannot find module '" + i + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				});
				var u = e[i],
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

//# debugId=98a9e0e8-0d54-5a6a-9456-57475e89fee4