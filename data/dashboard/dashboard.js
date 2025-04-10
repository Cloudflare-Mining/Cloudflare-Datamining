! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cd93e50e-e4e0-5105-a457-6d57f717d7da")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				J8: function() {
					return r
				},
				Jd: function() {
					return u
				},
				QY: function() {
					return _
				},
				Qw: function() {
					return i
				},
				ki: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/utils/url.ts"),
				a = t("../../../../node_modules/query-string/query-string.js"),
				l = t.n(a),
				c = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f;
			const i = () => Object.keys(c.Z).reduce((T, D) => (D.indexOf("cf_beta.") === 0 && c.Z.get(D) === "true" && T.push(D.split(".").slice(1).join(".")), T), []),
				m = () => {
					var T, D, P;
					return ((T = window) === null || T === void 0 || (D = T.bootstrap) === null || D === void 0 || (P = D.data) === null || P === void 0 ? void 0 : P.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((f = window) === null || f === void 0 ? void 0 : f.location) && c.Z) {
				const T = l().parse(window.location.search);
				T.beta_on && c.Z.set(`cf_beta.${T.beta_on}`, !0), T.beta_off && c.Z.set(`cf_beta.${T.beta_off}`, !1)
			}
			const g = {},
				n = T => {
					var D, P, y;
					return Object.prototype.hasOwnProperty.call(g, T) ? g[T] : ((D = window) === null || D === void 0 || (P = D.bootstrap) === null || P === void 0 || (y = P.data) === null || y === void 0 ? void 0 : y.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(I => I === T) ? (g[T] = !0, !0) : (g[T] = !1, !1)
				},
				s = T => c.Z ? c.Z.get(`cf_beta.${T}`) === !0 : !1,
				r = T => s(T) || n(T),
				d = () => !0,
				u = () => {
					var T, D, P;
					return ((T = window) === null || T === void 0 || (D = T.bootstrap) === null || D === void 0 || (P = D.data) === null || P === void 0 ? void 0 : P.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				_ = T => {
					const D = (0, e.uF)(T),
						P = (D == null ? void 0 : D.roles) || [];
					return (0, o.qR)(location.pathname) && P.length === 1 && P.some(y => y === "Administrator Read Only")
				}
		},
		"../init.ts": function(W, v, t) {
			"use strict";
			t.r(v);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				a = t("../libs/init/initGlobal.ts"),
				l = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				c = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function f(R) {
				for (var F = 1; F < arguments.length; F++) {
					var J = arguments[F] != null ? Object(arguments[F]) : {},
						ae = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(J).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(J, fe).enumerable
					})), ae.forEach(function(fe) {
						i(R, fe, J[fe])
					})
				}
				return R
			}

			function i(R, F, J) {
				return F = m(F), F in R ? Object.defineProperty(R, F, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[F] = J, R
			}

			function m(R) {
				var F = g(R, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function g(R, F) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ae = J.call(R, F || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(R)
			}
			const n = R => {
				const F = R && R.headers || {},
					J = new Headers(F);
				return J.append("X-Cross-Site-Security", "dash"), f({}, R, {
					headers: J
				})
			};
			(0, c.register)({
				request: (R, F) => {
					try {
						return new URL(R), R === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", F] : [R, F]
					} catch {
						return [R, n(F)]
					}
				}
			});
			var s = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				r = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				d = t("../react/app/providers/storeContainer.js");
			let u = "";
			const _ = 61;

			function T(R) {
				const F = R.substr(1);
				if (F && u !== F) {
					const J = document.getElementById(F);
					if (J) {
						const ae = J.getBoundingClientRect().top;
						if (ae > 0) {
							const fe = ae - _;
							document.documentElement.scrollTop = fe
						}
					}
				}
				u = F
			}

			function D(R) {
				R.listen(F => T(F.hash))
			}
			var P = t("../../../../node_modules/cookie/index.js"),
				y = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const I = "CF_dash_version",
				E = "cf_fv_preview",
				h = "cf_pv",
				L = "current",
				S = "hash",
				N = "deploymentPreview",
				O = "fragmentPreview",
				b = R => R === L ? w() : M(),
				w = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				M = (R = 72) => {
					const F = 36e5;
					return new Date(Date.now() + R * F)
				},
				U = R => {
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
				Q = (R, F = !1) => {
					var J;
					const ae = U(R),
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
      background-color: #1d1d1d;
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
						Ae = F ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${y.fk.orange[9]};
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
					return fe + Ae
				},
				re = R => {
					var F;
					const J = document.getElementById(R);
					!J || (F = J.parentNode) === null || F === void 0 || F.removeChild(J)
				};

			function me() {
				const R = document.getElementById("loading-state");
				R == null || R.classList.add("hide"), R == null || R.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(re)
				})
			}

			function ce(R) {
				var F;
				const J = document.getElementById("loading-state"),
					ae = !!((F = P.parse(document.cookie)) === null || F === void 0 ? void 0 : F[I]);
				!J || (J.innerHTML = Q(R == null ? void 0 : R.code, ae))
			}
			var le = t("../utils/initStyles.ts"),
				j = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				$ = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				x = t("../react/common/selectors/languagePreferenceSelector.ts"),
				C = t("../flags.ts"),
				B = t("../utils/getDashVersion.ts");
			const Z = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				X = !0,
				ie = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				q = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var k = t("../utils/sentry/lastSentEventId.ts"),
				K = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				V = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const z = R => {
				const F = async J => {
					var ae, fe;
					const Ae = {
						envelope: J.body,
						url: R.url,
						isPreviewDeploy: (ae = window) === null || ae === void 0 || (fe = ae.build) === null || fe === void 0 ? void 0 : fe.isPreviewDeploy,
						release: (0, B.t)()
					};
					try {
						const Oe = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(Ae)
						});
						return {
							statusCode: Oe.status,
							headers: {
								"x-sentry-rate-limits": Oe.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": Oe.headers.get("Retry-After")
							}
						}
					} catch (Oe) {
						return console.log(Oe), (0, V.$2)(Oe)
					}
				};
				return K.q(R, F)
			};
			var ee = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				pe = t("../../../../node_modules/history/esm/history.js"),
				_e = (0, pe.lX)(),
				ye = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Le = t("../react/utils/url.ts");
			const Te = (0, ye.Rf)();
			let we;

			function Re(R) {
				return Ze(R, "react-router-v5")
			}

			function Ze(R, F) {
				return (J, ae = !0, fe = !0) => {
					ae && Te && Te.location && (we = J({
						name: (0, Le.Fl)(Te.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": F
						}
					})), fe && R.listen && R.listen((Ae, Oe) => {
						if (Oe && (Oe === "PUSH" || Oe === "POP")) {
							we && we.finish();
							const Ge = {
								"routing.instrumentation": F
							};
							we = J({
								name: (0, Le.Fl)(Ae.pathname),
								op: "navigation",
								tags: Ge
							})
						}
					})
				}
			}
			var H = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ve = t.n(H),
				Pe = t("../../../common/intl/intl-core/src/errors.ts"),
				He = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				et = t("../react/common/middleware/sparrow/errors.ts");

			function We(R, F, J) {
				return F = ft(F), F in R ? Object.defineProperty(R, F, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[F] = J, R
			}

			function ft(R) {
				var F = tt(R, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function tt(R, F) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ae = J.call(R, F || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(R)
			}
			class Xe {
				constructor() {
					We(this, "name", Xe.id)
				}
				setupOnce() {
					t.g.console && (0, He.hl)(t.g.console, "error", F => (...J) => {
						const ae = J.find(fe => fe instanceof Error);
						if (Z && ae) {
							let fe, Ae = !0;
							if (ae instanceof et.ez) {
								const Oe = ae instanceof et.oV ? ae.invalidProperties : void 0;
								fe = {
									tags: {
										"sparrow.eventName": ae.eventName
									},
									extra: {
										sparrow: {
											eventName: ae.eventName,
											invalidProperties: Oe
										}
									},
									fingerprint: [ae.name ? ae.name : "SparrowValidationError"]
								}, Ae = !1
							} else if (ae instanceof H.SparrowIdCookieError) fe = {
								extra: {
									sparrowIdCookie: ae.cookie
								},
								fingerprint: [ae.name ? ae.name : "SparrowIdCookieError"]
							};
							else if (ae.name === "ChunkLoadError") {
								fe = {
									fingerprint: [ae.name]
								};
								try {
									fe.tags = {
										chunkId: ae.message.split(" ")[2],
										chunkUrl: ae.request
									}
								} catch {}
							} else ae instanceof Pe.YB && (fe = {
								fingerprint: ["TranslatorError", ae.translationKey]
							});
							Ae && s.Tb(ae, fe)
						}
						typeof F == "function" && F.apply(t.g.console, J)
					})
				}
			}
			We(Xe, "id", "ConsoleErrorIntegration");
			var _t = null;
			const Y = () => {
					if (Z && X) {
						var R, F, J, ae, fe, Ae, Oe, Ge, mt, Fe;
						let $t = "production";
						((R = window) === null || R === void 0 || (F = R.build) === null || F === void 0 ? void 0 : F.isPreviewDeploy) && ($t += "-preview"), $.S({
							dsn: Z,
							release: (0, B.t)(),
							environment: $t,
							ignoreErrors: q,
							allowUrls: ie,
							autoSessionTracking: !1,
							integrations: gt => [...gt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new Xe, new ee.jK.BrowserTracing({
								routingInstrumentation: Re(_e)
							})],
							tracesSampleRate: 0,
							transport: z,
							beforeSend: gt => (k.e.setEventId(gt.event_id), gt)
						});
						const Nt = (0, d.bh)().getState();
						s.rJ({
							LOCAL_STORAGE_FLAGS: (0, C.Qw)(),
							USER_BETA_FLAGS: (0, C.ki)(),
							meta: {
								connection: {
									type: (J = window) === null || J === void 0 || (ae = J.navigator) === null || ae === void 0 || (fe = ae.connection) === null || fe === void 0 ? void 0 : fe.effectiveType,
									bandwidth: (Ae = window) === null || Ae === void 0 || (Oe = Ae.navigator) === null || Oe === void 0 || (Ge = Oe.connection) === null || Ge === void 0 ? void 0 : Ge.downlink
								},
								languagePreference: (0, x.r)(Nt),
								isPreviewDeploy: (mt = window) === null || mt === void 0 || (Fe = mt.build) === null || Fe === void 0 ? void 0 : Fe.isPreviewDeploy
							},
							utilGates: (0, j.T2)(Nt)
						}), window.addEventListener("unhandledrejection", function(gt) {})
					}
				},
				ue = R => {
					R ? s.av({
						id: R
					}) : s.av(null)
				};
			var Ce = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				je = () => {
					let R;
					try {
						R = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), R = window.location.search
					}
					if (!R.includes("remote[")) return;
					const F = new URLSearchParams(R),
						J = {};
					for (let [ae, fe] of F) ae.includes("remote") && (J[ae.replace(/remote\[|\]/g, "")] = fe);
					Ce.Z.set("mfe-remotes", JSON.stringify(J))
				},
				Ne = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				Je = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const st = "ANON_USER_ID";

			function nt() {
				var R, F, J, ae;
				let fe = (R = t.g) === null || R === void 0 || (F = R.bootstrap) === null || F === void 0 || (J = F.data) === null || J === void 0 || (ae = J.user) === null || ae === void 0 ? void 0 : ae.id;
				if (!fe) {
					let Ae = Ce.Z.get(st);
					if (!Ae) {
						let Oe = (0, Je.Z)();
						Ce.Z.set(st, Oe), Ae = Oe
					}
					return Ae
				}
				return fe
			}
			async function lt() {
				const R = (0, d.bh)();
				R.dispatch((0, Ne.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await R.dispatch((0, j.UL)({
					userId: nt()
				}))
			}
			class yt extends Error {
				constructor(F, J) {
					super(J);
					this.name = `${F} ${J}`
				}
			}
			const Ct = () => {
					document.cookie.split(";").forEach(F => {
						const [J] = F.trim().split("=");
						document.cookie = `${J}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				ut = async () => {
					let R = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!R.ok) throw R.headers.get("content-type") === "text/html" && (await R.text()).toLowerCase().includes("cookie too large") && (s.$e(function(fe) {
						fe.setTag("init", "cookieTooLarge"), s.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), Ct(), window.location.reload()), new yt("Bootstrap API Failure", R == null ? void 0 : R.status);
					return (await R.json()).result.data
				};
			var ke = t("webpack/sharing/consume/default/react/react"),
				be = t.n(ke),
				ze = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				ht = t("webpack/sharing/consume/default/react-dom/react-dom"),
				dt = t("webpack/sharing/consume/default/react-redux/react-redux"),
				bt = t("../../../../node_modules/swr/core/dist/index.mjs"),
				G = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				se = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Ee = t("../react/shims/focus-visible.js"),
				Ie = t("../react/app/components/DeepLink/index.ts"),
				Se = t("../../../../node_modules/prop-types/index.js"),
				xe = t.n(Se),
				Ye = t("../react/utils/translator.tsx"),
				ot = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				De = t("../../../dash/intl/intl-translations/src/index.ts"),
				Tt = t("../../../../node_modules/query-string/query-string.js"),
				pt = t.n(Tt),
				Rt = t("../react/common/actions/userActions.ts"),
				Et = t("../react/common/selectors/userSelectors.ts"),
				rt = t("../react/utils/i18n.ts"),
				Dt = t("../react/utils/bootstrap.ts");

			function Lt(R) {
				for (var F = 1; F < arguments.length; F++) {
					var J = arguments[F] != null ? Object(arguments[F]) : {},
						ae = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(J).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(J, fe).enumerable
					})), ae.forEach(function(fe) {
						It(R, fe, J[fe])
					})
				}
				return R
			}

			function It(R, F, J) {
				return F = Bt(F), F in R ? Object.defineProperty(R, F, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[F] = J, R
			}

			function Bt(R) {
				var F = Ot(R, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function Ot(R, F) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ae = J.call(R, F || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(R)
			}
			let Ke = pt().parse(location.search);
			const wt = R => {
					const F = (0, Dt.$8)() ? [(0, De.Fy)(De.if.changes), (0, De.Fy)(De.if.common), (0, De.Fy)(De.if.navigation), (0, De.Fy)(De.if.overview), (0, De.Fy)(De.if.onboarding), (0, De.Fy)(De.if.invite), (0, De.Fy)(De.if.login), (0, De.Fy)(De.if.dns), (0, De.Fy)(De.n4.ssl_tls), (0, De.Fy)(De.if.message_inbox), (0, De.Fy)(De.if.welcome)] : [(0, De.Fy)(De.if.common), (0, De.Fy)(De.if.invite), (0, De.Fy)(De.if.login), (0, De.Fy)(De.if.onboarding)];
					Ke.lang ? xt(R) : Ce.Z.get(rt.th) && vt(R, (0, rt.Kd)());
					const J = async ae => (await Promise.all(F.map(Ae => Ae(ae)))).reduce((Ae, Oe) => Lt({}, Ae, Oe), {});
					return be().createElement(ot.LocaleContext.Provider, {
						value: R.languagePreference
					}, be().createElement(ot.I18nProvider, {
						translator: Ye.Vb,
						locale: R.languagePreference
					}, be().createElement(ot.I18nLoader, {
						loadPhrases: J
					}, R.children)))
				},
				xt = async R => {
					let F = Ke.lang.substring(0, Ke.lang.length - 2) + Ke.lang.substring(Ke.lang.length - 2, Ke.lang.length).toUpperCase();
					if (!(0, x.v)(F)) {
						console.warn(`${F} is not a supported locale.`), delete Ke.lang, R.history.replace({
							search: pt().stringify(Ke)
						});
						return
					}(0, rt.i_)(F), delete Ke.lang, vt(R, F), R.isAuthenticated || R.history.replace({
						search: pt().stringify(Ke)
					})
				}, vt = async (R, F) => {
					if (R.isAuthenticated) try {
						await R.setUserCommPreferences({
							"language-locale": F
						}, {
							hideErrorAlert: !0
						}), Ce.Z.remove(rt.th), R.history.replace({
							search: pt().stringify(Ke)
						})
					} catch (J) {
						Ce.Z.set(rt.th, !0), console.error(J)
					} else Ce.Z.set(rt.th, !0)
				}, St = R => {
					const F = (0, Et.PR)(R);
					return {
						isAuthenticated: !!(F && F.id),
						languagePreference: (0, rt.Kd)() || (0, x.r)(R)
					}
				}, At = {
					setUserCommPreferences: Rt.V_
				};
			var oe = (0, ze.withRouter)((0, dt.connect)(St, At)(wt));
			wt.propTypes = {
				history: xe().object,
				languagePreference: xe().string.isRequired,
				children: xe().node.isRequired,
				isAuthenticated: xe().bool,
				setUserCommPreferences: xe().func.isRequired
			};
			var te = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				ge = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let p;
			const A = ({
				selectorPrefix: R = "c_"
			} = {}) => (p || (p = (0, ge.Z)({
				dev: !1,
				selectorPrefix: R
			})), p);
			var ne = t("../react/common/styles/styles.css"),
				he = t("../react/common/components/ModalManager.tsx"),
				Me = t("../react/app/components/ErrorBoundary.tsx"),
				Ue = t("../react/common/actions/notificationsActions.ts");
			const qe = (t.g.bootstrap || {}).data || {};
			class ct extends be().Component {
				componentDidMount() {
					qe.messages && this.dispatchNotificationActions(qe.messages)
				}
				dispatchNotificationActions(F) {
					F.forEach(J => {
						const {
							type: ae,
							message: fe,
							persist: Ae
						} = J;
						["success", "info", "warn", "error"].includes(ae) && this.props.notifyAdd(ae, (0, Ye.ZP)(fe), {
							persist: !!Ae
						})
					})
				}
				render() {
					return null
				}
			}
			var $e = (0, ze.withRouter)((0, dt.connect)(null, {
				notifyAdd: Ue.add
			})(ct));
			ct.propTypes = {
				notifyAdd: xe().func.isRequired
			};
			var it = t("../react/app/redux/index.ts");

			function Ut() {
				var R;
				const F = (0, it.p4)(Et.PR),
					J = (F == null || (R = F.email) === null || R === void 0 ? void 0 : R.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ae = (0, Ne.Yc)();
				(0, ke.useEffect)(() => {
					ae({
						userType: J
					})
				}, [J, ae])
			}
			var Mt = t("../react/common/selectors/entitlementsSelectors.ts"),
				kt = t("../react/common/selectors/accountSelectors.ts");
			const jt = ["accountId", "is_ent"];

			function Ve() {
				const R = (0, Ne.f7)(),
					F = (0, ze.useHistory)(),
					J = (0, Le.uW)(F.location.pathname),
					ae = (0, Ne.Yc)(),
					fe = (0, Ne.O$)(),
					Ae = (0, it.p4)(Mt.u1),
					Oe = !Ae.isRequesting && !!Ae.data,
					Ge = (0, it.p4)(Mt.p1),
					mt = (0, it.p4)(kt.Xu),
					Fe = (0, it.p4)(kt.uF),
					$t = !mt.isRequesting && !!mt.data;
				(0, ke.useEffect)(() => {
					if (J && $t && Fe && Oe && J === Fe.account.id) {
						var Nt, gt, Vt;
						ae({
							accountId: Fe.account.id,
							is_ent: Ge,
							is_free_account: !Ge && !(Fe == null || (Nt = Fe.account.meta) === null || Nt === void 0 ? void 0 : Nt.has_business_zones) && !(Fe == null || (gt = Fe.account.meta) === null || gt === void 0 ? void 0 : gt.has_pro_zones) && !(Fe == null || (Vt = Fe.account.meta) === null || Vt === void 0 ? void 0 : Vt.has_enterprise_zones)
						})
					} else(!J || J in R && R.accountId !== J) && fe(jt)
				}, [$t, Fe, ae, fe, Oe, Ge, J, R])
			}
			var Gt = t("../react/common/selectors/zoneSelectors.ts");

			function Wt() {
				const R = (0, it.p4)(Gt.nA),
					F = (0, Ne.Yc)();
				(0, ke.useEffect)(() => {
					var J;
					F({
						zone_id: R == null ? void 0 : R.id,
						zone_plan: R == null || (J = R.plan) === null || J === void 0 ? void 0 : J.legacy_id
					})
				}, [R, F])
			}
			const en = () => (Ut(), Ve(), Wt(), null);
			var tn = t("../react/app/components/Persistence/index.tsx"),
				nn = t("../node_modules/@cloudflare/elements/es/index.js"),
				on = t("../react/app/components/LoadingSuspense.tsx");
			const rn = be().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(50038), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var an = () => be().createElement(on.Z, null, be().createElement(rn, null));
			const sn = () => (ke.useEffect(() => me, []), null);
			var cn = t("../../../../node_modules/moment/moment.js"),
				Zt = t.n(cn);
			const ln = R => {
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
				un = () => {
					const R = (0, it.p4)(x.r);
					(0, ke.useEffect)(() => {
						const F = ln(R);
						F !== Zt().locale() && Zt().locale(F), document.documentElement.lang = R
					}, [R])
				},
				dn = () => {
					(0, ke.useEffect)(() => {
						async function R() {
							var F, J;
							let ae;
							if (((F = window) === null || F === void 0 || (J = F.build) === null || J === void 0 ? void 0 : J.isPreviewDeploy) && (ae = "cookie"), !!ae) try {
								const fe = document.head.querySelector("link[rel=icon]");
								fe && (fe.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${ae}.ico`)).default)
							} catch {}
						}
						R()
					}, [])
				};
			var pn = t("../react/common/constants/constants.ts");
			const mn = () => {
					var R;
					const F = (0, ze.useLocation)(),
						[J, ae] = (0, ke.useState)(((R = window) === null || R === void 0 ? void 0 : R.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, ke.useEffect)(() => {
						const fe = pt().parse(F.search);
						if (fe.pt && Ce.Z.set(pn.sJ, fe.pt), fe == null ? void 0 : fe.devPanel) {
							var Ae, Oe;
							(Ae = window) === null || Ae === void 0 || (Oe = Ae.localStorage) === null || Oe === void 0 || Oe.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ae(!0)
						}
					}, [F.search]), {
						devPanelEnabled: J
					}
				},
				gn = ({
					id: R,
					customDataLayer: F = [],
					dataLayerName: J = "dataLayer"
				}) => {
					const ae = `<iframe src="https://www.googletagmanager.com/ns.html?id=${R}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						fe = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${J}', '${R}')`,
						Ae = `
    window.${J} = window.${J} || [];
    window.${J}.push(${JSON.stringify(F)})
  `;
					return {
						iframe: ae,
						script: fe,
						dataLayerHTML: Ae
					}
				},
				fn = R => {
					const F = document.createElement("script");
					return F.innerHTML = R, F.async = !0, F
				},
				_n = R => {
					const F = document.createElement("noscript");
					return F.innerHTML = R, F
				},
				Ht = R => {
					const F = document.createElement("script");
					return F.innerHTML = R, F
				},
				Bn = ({
					dataLayer: R,
					dataLayerName: F
				}) => {
					if (window[F]) return window[F].push(R);
					const J = `
      window.${F} = window.${F} || [];
      window.${F}.push(${JSON.stringify(R)})`,
						ae = Ht(J);
					document.head.insertBefore(ae, document.head.childNodes[0])
				},
				En = ({
					containerId: R,
					customDataLayer: F,
					gtmFeatureFlag: J = !0
				}) => {
					(0, ke.useEffect)(() => {
						(() => {
							if (!J) return null;
							const {
								iframe: fe,
								script: Ae,
								dataLayerHTML: Oe
							} = gn({
								id: R,
								customDataLayer: F
							});
							document.head.insertBefore(Ht(Oe), document.head.childNodes[0]), document.head.insertBefore(fn(Ae), document.head.childNodes[0]), document.body.insertBefore(_n(fe), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const vn = ({
				isDev: R,
				gtmFeatureFlag: F
			}) => {
				(0, ke.useEffect)(() => {
					(() => {
						if (!F) return null;
						let ae;
						R ? ae = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ae = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const fe = document.createElement("script");
						fe.async = !0, fe.src = ae, document.head.insertBefore(fe, document.head.childNodes[0])
					})()
				}, [])
			};
			var yn = t("../react/utils/useDomainConnectRedirect.ts");
			const Cn = "GTM-NDGPDFZ",
				hn = be().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(50038), t.e(51436), t.e(3292), t.e(47386), t.e(70618), t.e(19910), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(18527), t.e(87940), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				bn = be().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(39074), t.e(57062), t.e(3292), t.e(55879), t.e(69088), t.e(18527), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var Tn = ({
					userIsAuthed: R
				}) => {
					un(), dn(), (0, yn.y)();
					const {
						devPanelEnabled: F
					} = mn();
					return En({
						containerId: Cn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), vn({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), be().createElement(ke.Suspense, {
						fallback: be().createElement(sn, null)
					}, be().createElement(ze.Switch, null, !R && !0 && be().createElement(ze.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, be().createElement(bn, null)), be().createElement(ze.Route, {
						render: () => be().createElement(nn.ZC, {
							minHeight: "100vh"
						}, be().createElement(hn, null))
					})), F && be().createElement(an, null))
				},
				zt = t("../../../../node_modules/yup/es/index.js"),
				In = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => zt.Z_().email((0, Ye.ZP)("common.validation.email")).required((0, Ye.ZP)("common.validation.email")),
				cfPassword: () => zt.Z_().required((0, Ye.ZP)("common.validation.required"))
			};
			(0, In.Yd)(Qt).forEach(R => {
				zt.kM(zt.Z_, R, Qt[R])
			});
			var On = t("../react/common/utils/startViewTransition.ts");
			const Xt = be().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(37200), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx"))),
				An = () => {
					const R = (0, Dt.$8)(),
						[F, J] = (0, ke.useState)(R ? Xt : be().Fragment),
						[ae, fe] = (0, ke.useState)((0, y.Yc)());
					(0, ke.useEffect)(() => {
						(0, y.fF)(() => fe((0, y.Yc)()))
					}, []);
					const Ae = Oe => {
						fe(Oe), (0, On.o)(() => {
							(0, y.C8)(Oe)
						}), document.cookie = `dark-mode=${Oe};Path=/;Max-Age=31536000`, Oe !== "off" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
					};
					return (0, ke.useEffect)(() => {
						J(R ? Xt : be().Fragment)
					}, [R]), (0, ke.useEffect)(() => {
						const Oe = () => Ae(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Oe), () => {
							window.removeEventListener("storage", Oe)
						}
					}, []), be().createElement(ke.Suspense, {
						fallback: null
					}, be().createElement(dt.Provider, {
						store: (0, d.bh)()
					}, be().createElement(ze.Router, {
						history: _e
					}, be().createElement(F, null, be().createElement(te.Z, {
						renderer: A()
					}, be().createElement(oe, null, be().createElement(Me.S, {
						sentryTag: "Root"
					}, be().createElement(bt.J$, {
						value: {
							fetcher: Oe => fetch(Oe).then(Ge => Ge.json())
						}
					}, be().createElement(en, null), be().createElement($e, null), be().createElement(tn.Z_, {
						onDarkModeChangeCb: Ae
					}, be().createElement(Ie.ZP, null, be().createElement(Tn, {
						userIsAuthed: R
					}))), be().createElement(he.ZP, null), be().createElement(G.F0, null)))))))))
				},
				Pn = () => {
					(0, ht.render)(be().createElement(An, null), document.getElementById("react-app"))
				};
			var Pt = t("../utils/initSparrow.ts"),
				Ft = t("../utils/zaraz.ts");
			const Dn = () => {
					const R = (0, Et.PR)((0, d.bh)().getState());
					Ln(), (0, Pt.Ug)(), (0, Ft.bM)(), (R == null ? void 0 : R.id) && ve().setUserId(R == null ? void 0 : R.id), (0, Pt.yV)(), !(0, Pt.Wi)() && (0, Pt.IM)(), R ? (0, Ft.yn)(R) : (0, Ft.Ro)()
				},
				Ln = () => {
					var R, F;
					(R = window) === null || R === void 0 || (F = R.OneTrust) === null || F === void 0 || F.OnConsentChanged(() => {
						const J = (0, Et.PR)((0, d.bh)().getState());
						(0, Pt.Wi)() ? (ve().setEnabled(!0), (J == null ? void 0 : J.id) ? (ve().setUserId(J.id), (0, Ft.yn)(J)) : (0, Ft.Ro)(), (0, Pt.yV)()) : (ve().setEnabled(!1), (0, Pt.IM)())
					})
				};

			function wn(R) {
				for (var F = 1; F < arguments.length; F++) {
					var J = arguments[F] != null ? Object(arguments[F]) : {},
						ae = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(J).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(J, fe).enumerable
					})), ae.forEach(function(fe) {
						Sn(R, fe, J[fe])
					})
				}
				return R
			}

			function Sn(R, F, J) {
				return F = Mn(F), F in R ? Object.defineProperty(R, F, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[F] = J, R
			}

			function Mn(R) {
				var F = kn(R, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function kn(R, F) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ae = J.call(R, F || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(R)
			}
			const Nn = "init",
				Jt = (R, F) => {
					s.$e(function(J) {
						J.setTag(Nn, F), s.Tb(R)
					}), ce(R)
				},
				Kt = async (R, F) => {
					try {
						return await R(), !0
					} catch (J) {
						return Jt(J, F), !1
					}
				};
			(async () => {
				try {
					var R, F, J;
					t.g.build = wn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "0608d2208bfa0845f1df970e3224f5dc1700ac3d",
						dashVersion: "32451880",
						env: "production",
						builtAt: 1744377061159,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, B.p)()
					}), Y();
					const ae = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => D(_e),
						tag: "hashScroll"
					}, {
						fn: le.Z,
						tag: "styles"
					}, {
						fn: je,
						tag: "mfePreviewData"
					}];
					for (const mt of ae)
						if (!await Kt(mt.fn, mt.tag)) return;
					let fe;
					if (!await Kt(async () => {
							fe = await ut()
						}, "bootstrap")) return;
					const Ae = (0, d.bh)(),
						Oe = ((R = fe) === null || R === void 0 ? void 0 : R.data) || {};
					Ae.dispatch((0, r.mW)("user", Oe == null ? void 0 : Oe.user));
					const Ge = (F = fe) === null || F === void 0 || (J = F.data) === null || J === void 0 ? void 0 : J.user;
					return t.g.bootstrap = fe, Ge && Ge.id && ue(Ge.id), !await Kt(lt, "gates") || !await Kt(Dn, "tracking") ? void 0 : Pn()
				} catch (ae) {
					Jt(ae, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				l = t("../react/common/selectors/userSelectors.ts"),
				c = t("../react/common/selectors/zoneSelectors.ts"),
				f = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/common/utils/isGuards.ts"),
				m = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = t.n(m);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(d) {
					for (var u = 1; u < arguments.length; u++) {
						var _ = arguments[u];
						for (var T in _) Object.prototype.hasOwnProperty.call(_, T) && (d[T] = _[T])
					}
					return d
				}, n.apply(this, arguments)
			}
			const s = d => {
				function u(_) {
					const T = (0, a.UM)(),
						D = (0, m.useHistory)(),
						P = (0, m.useLocation)(),
						y = (0, m.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						I = (0, a.p4)(l.PR) || null,
						E = (0, a.p4)(c.nA) || null,
						h = (0, a.p4)(f.uF),
						L = h ? h.account : null;
					if (!y) return null;
					const {
						accountId: S,
						app: N,
						tab: O
					} = y.params, b = y.params.zoneName && ((0, i.v5)(y.params.zoneName) || y.params.zoneName.indexOf(".") > 0) ? y.params.zoneName : void 0;
					return o().createElement(d, n({
						dispatch: T,
						history: D,
						location: P,
						match: y,
						user: I,
						membership: S ? h : null,
						account: S ? L : null,
						accountId: S || null,
						zone: b ? E : null,
						zoneName: b || null,
						app: b ? N : null,
						tab: b ? O : null
					}, _))
				}
				return u.displayName = `withEntities(${r(d)})`, u
			};

			function r(d) {
				return d.displayName || d.name || "Component"
			}
			v.Z = s
		},
		"../react/app/components/AccountHome/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$$: function() {
					return E
				},
				CK: function() {
					return N
				},
				KV: function() {
					return L
				},
				OX: function() {
					return S
				},
				QV: function() {
					return I
				},
				Yt: function() {
					return P
				},
				bA: function() {
					return y
				},
				fu: function() {
					return b
				},
				gX: function() {
					return _
				},
				hh: function() {
					return O
				},
				o1: function() {
					return h
				},
				tw: function() {
					return T
				},
				xD: function() {
					return D
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				a = t("../react/utils/url.ts");
			const l = "projects table click",
				c = "click create application",
				f = "account home dev plat - product card click",
				i = "account home dev plat - empty state CTA click",
				m = "account home dev plat - view all projects click",
				g = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				s = "account home zero trust - analytics link click",
				r = "account home zero trust - product card click",
				d = "account home zero trust - plan pill click",
				u = "account home zero trust - plan fallback link click",
				_ = {
					SPARROW_PROJECTS_TABLE_CLICK: l,
					SPARROW_CREATE_PROJECT_CLICK: c,
					SPARROW_PRODUCT_CARD_CLICK: f,
					SPARROW_EMPTY_STATE_CTA_CLICK: i,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: m,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: g,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: s,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: r,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: d,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: u
				},
				T = w => {
					o().sendEvent(l, {
						component: w
					})
				},
				D = w => {
					o().sendEvent(l, {
						component: "menu",
						subcomponent: w
					})
				},
				P = () => {
					o().sendEvent(c, {
						category: "Projects Table"
					})
				},
				y = ({
					category: w,
					product: M
				}) => {
					o().sendEvent(f, {
						category: w,
						product: M
					})
				},
				I = () => {
					o().sendEvent(i)
				},
				E = () => {
					o().sendEvent(m)
				},
				h = w => {
					o().sendEvent(n, {
						category: w
					})
				},
				L = ({
					category: w,
					href: M
				}) => {
					o().sendEvent(g, {
						category: w,
						href: (0, a.cm)(M)
					})
				},
				S = ({
					category: w,
					href: M
				}) => {
					o().sendEvent(s, {
						category: w,
						href: (0, a.cm)(M)
					})
				},
				N = ({
					category: w,
					product: M,
					href: U
				}) => {
					o().sendEvent(r, {
						category: w,
						product: M,
						href: (0, a.cm)(U)
					})
				},
				O = ({
					plan: w
				}) => {
					o().sendEvent(d, {
						plan: w
					})
				},
				b = () => {
					o().sendEvent(u)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				BQ: function() {
					return m
				},
				Bh: function() {
					return f
				},
				CM: function() {
					return g
				},
				MF: function() {
					return o
				},
				TS: function() {
					return r
				},
				WF: function() {
					return c
				},
				Wz: function() {
					return n
				},
				bk: function() {
					return i
				},
				fj: function() {
					return s
				},
				r4: function() {
					return l
				},
				zq: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js");
			const o = {
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
				a = (0, e.R)(o.ADD_SITE, d => ({
					payload: d
				})),
				l = (0, e.R)(o.RESOLVING_START),
				c = (0, e.R)(o.RESOLVING_COMPLETE),
				f = (0, e.R)(o.SELECT_ZONE, d => ({
					payload: d
				})),
				i = (0, e.R)(o.SELECT_ACCOUNT, d => ({
					payload: d
				})),
				m = (0, e.R)(o.SELECT_PAGES_PROJECT, d => ({
					payload: d
				})),
				g = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, d => ({
					payload: d
				})),
				n = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, d => ({
					accountIds: d
				})),
				s = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				r = (0, e.R)(o.SELECT_WORKER, d => ({
					payload: d
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				BV: function() {
					return e
				},
				Dz: function() {
					return g
				},
				Fj: function() {
					return l
				},
				Kt: function() {
					return f
				},
				O5: function() {
					return c
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return n
				},
				dB: function() {
					return a
				},
				s$: function() {
					return i
				}
			});
			const e = "to",
				o = "_gl",
				a = "freeTrial",
				l = "deepLinkQueryParams",
				c = "resolvedDeepLinkQueryParams",
				f = "add",
				i = "multiSkuProducts",
				m = "/:account/billing/checkout",
				g = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				ZP: function() {
					return O
				},
				U: function() {
					return N.U
				},
				dd: function() {
					return N.dd
				},
				bk: function() {
					return f.bk
				},
				Bh: function() {
					return f.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../react/app/redux/index.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t("../react/app/components/DeepLink/utils.ts"),
				c = t("../react/utils/bootstrap.ts"),
				f = t("../react/app/components/DeepLink/actions.ts"),
				i = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = t.n(i);

			function g(b) {
				for (var w = 1; w < arguments.length; w++) {
					var M = arguments[w] != null ? Object(arguments[w]) : {},
						U = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(M).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(M, Q).enumerable
					})), U.forEach(function(Q) {
						n(b, Q, M[Q])
					})
				}
				return b
			}

			function n(b, w, M) {
				return w = s(w), w in b ? Object.defineProperty(b, w, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[w] = M, b
			}

			function s(b) {
				var w = r(b, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function r(b, w) {
				if (typeof b != "object" || b === null) return b;
				var M = b[Symbol.toPrimitive];
				if (M !== void 0) {
					var U = M.call(b, w || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(b)
			}
			class d {
				constructor(w, M) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", U => {
						this.resolvers.set(U, {
							name: U,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", U => {
						const Q = this.resolvers.get(U);
						Q && (Q.endTime = Date.now(), this.resolvers.set(U, Q))
					}), n(this, "resolverCancel", U => {
						this.resolverDone(U), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", U => {
						const Q = "NO_ACTION",
							re = {
								actionType: Q,
								startTime: 0
							};
						return {
							start: (me = Q) => {
								const ce = this.resolvers.get(U);
								re.actionType = me, re.startTime = Date.now(), ce && ce.userActions.push(re)
							},
							finish: (me = Q) => {
								re.actionType = me, re.endTime = Date.now()
							},
							cancel: (me = Q) => {
								re.actionType = me, re.endTime = Date.now(), this.resolverCancel(U)
							}
						}
					}), this.deepLink = w, this.legacyDeepLink = M, this.resolvers = new Map
				}
				track(w) {
					try {
						if (this._done) return;
						this._done = !0;
						const M = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: u(this.startTime, this.endTime),
								totalCpuTime: u(this.startTime, this.endTime)
							},
							U = this.resolvers.size === 0 ? M : Array.from(this.resolvers.values()).reduce((Q, re) => {
								const me = u(re.startTime, re.endTime),
									ce = re.userActions.reduce((j, $) => {
										const x = u($.startTime, $.endTime);
										return {
											totalTime: j.totalTime + x,
											actions: j.actions.set($.actionType, x)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									le = me - ce.totalTime;
								return g({}, Q, {
									totalTime: Q.totalTime + me,
									totalUserActionsTime: Q.totalUserActionsTime + ce.totalTime,
									totalCpuTime: Q.totalCpuTime + le,
									[`${re.name}ResolverTotalTime`]: me,
									[`${re.name}ResolverTotalCpuTime`]: le,
									[`${re.name}ResolverTotalUserActionsTime`]: ce.totalTime
								}, Array.from(ce.actions.keys()).reduce((j, $) => g({}, j, {
									[`${re.name}Resolver/${$}`]: ce.actions.get($)
								}), {}))
							}, g({}, M, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						m().sendEvent(w, U)
					} catch (M) {
						console.error(M)
					}
				}
			}

			function u(b = Date.now(), w = Date.now()) {
				return (w - b) / 1e3
			}
			var _ = t("../react/app/components/DeepLink/constants.ts"),
				T = t("../react/common/hooks/useCachedState.ts"),
				D = t("../react/common/hooks/usePrevious.ts");

			function P(b) {
				for (var w = 1; w < arguments.length; w++) {
					var M = arguments[w] != null ? Object(arguments[w]) : {},
						U = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(M).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(M, Q).enumerable
					})), U.forEach(function(Q) {
						y(b, Q, M[Q])
					})
				}
				return b
			}

			function y(b, w, M) {
				return w = I(w), w in b ? Object.defineProperty(b, w, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[w] = M, b
			}

			function I(b) {
				var w = E(b, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function E(b, w) {
				if (typeof b != "object" || b === null) return b;
				var M = b[Symbol.toPrimitive];
				if (M !== void 0) {
					var U = M.call(b, w || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(b)
			}
			var L = ({
					children: b
				}) => {
					const w = (0, o.TZ)(),
						M = (0, a.useHistory)(),
						U = (0, D.Z)(M.location.pathname),
						[Q, re] = (0, e.useState)(!0),
						[me, ce] = (0, T.j)(void 0, {
							key: _.Fj
						}),
						[le, j] = (0, T.j)(void 0, {
							key: _.O5
						}),
						[$, x] = (0, T.j)(void 0, {
							key: _.s$
						}),
						C = (0, c.$8)();
					let B = new URLSearchParams(M.location.search);
					const Z = (0, l.mL)(M.location.pathname, B);
					let X = null,
						ie = null;
					if (B.has(_.Tc) && B.delete(_.Tc), B.get(_.BV)) X = B.get(_.BV), M.location.hash && (ie = M.location.hash);
					else if (me) {
						const k = new URLSearchParams(me);
						k.get(_.BV) && (X = k.get(_.BV), B = k)
					} else Z && (B.set(_.BV, Z), X = Z);
					if (X && _._h.test(X)) {
						const k = B.getAll(_.Kt),
							K = JSON.stringify(k);
						k.length && K !== $ && x(K), B.has(_.Tc) && B.delete(_.Tc), B.delete(_.Kt)
					}!C && me === void 0 && X && ce(B.toString());
					const q = async () => {
						try {
							if ((0, l.I3)(X) && C) {
								me && ce(void 0), w.dispatch((0, f.r4)()), re(!0), X && X !== le && j(X);
								const k = await (0, l.py)(X, re, w, M, U, new d(X, Z ? `${M.location.pathname}${M.location.search}` : void 0));
								B.delete(_.BV);
								const K = B.toString();
								M.replace(P({}, M.location, {
									pathname: k,
									search: K
								}, ie ? {
									hash: ie
								} : {})), w.dispatch((0, f.WF)())
							}
						} catch (k) {
							w.dispatch((0, f.WF)()), console.error(k)
						} finally {
							re(!1)
						}
					};
					return (0, e.useEffect)(() => {
						q()
					}, [M.location.pathname, M.location.search]), (Q || (0, l.I3)(X)) && C ? null : b
				},
				S = t("../react/app/components/DeepLink/reducer.ts"),
				N = t("../react/app/components/DeepLink/selectors.ts"),
				O = L
		},
		"../react/app/components/DeepLink/reducer.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				E: function() {
					return l
				},
				r: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				a = t("../react/app/components/DeepLink/actions.ts");
			const l = null,
				c = o().from({
					lastAction: l,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function f(i = c, m) {
				if (m.type === a.MF.RESOLVING_COMPLETE) return c;
				if (m.type === a.MF.RESOLVING_START) return i.set("isResolving", !0);
				if (i.isResolving) {
					if (m.type === a.MF.RESOLVING_COMPLETE) return i.set("isResolving", !1);
					if (m.type === a.MF.SET_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", m.accountIds);
					if (m.type === a.MF.DELETE_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", void 0);
					{
						let g = i;
						try {
							g = i.set("lastAction", m)
						} catch {
							g = i.set("lastAction", {
								type: m.type
							})
						}
						return g
					}
				} else return i
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return a
				},
				dd: function() {
					return o
				},
				yI: function() {
					return e
				}
			});
			const e = l => l.deepLink.lastAction,
				o = l => l.deepLink.isResolving,
				a = l => l.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				I3: function() {
					return g
				},
				X1: function() {
					return i
				},
				mL: function() {
					return u
				},
				py: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/components/DeepLink/reducer.ts"),
				a = t("../react/app/components/DeepLink/selectors.ts"),
				l = t("../react/app/components/DeepLink/constants.ts"),
				c = t("../react/common/validators/index.js"),
				f = t("../react/common/utils/isGuards.ts");
			const i = _ => (0, c.Lb)(_) && (_.split(".").length > 1 || (0, f.v5)(_)),
				m = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				g = _ => typeof _ == "string" && _.startsWith("/"),
				n = (_, T) => D => new Promise((P, y) => {
					T.start();
					const I = _.subscribe(() => {
						const E = (0, a.yI)(_.getState());
						E === o.E ? (T.cancel(), I(), y("DeepLink: waitForAction out of context.")) : D(E) && (T.finish(E.type), I(), P(E))
					})
				}),
				s = (_, T, D) => (P, y) => new Promise((I, E) => {
					D.start();
					const h = T.location.pathname;
					P = new URL(P, window.location.href).pathname, h !== P && (D.cancel(), E(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${P}", but on "${h}". You need to redirect to "${P}", and unblockRouter in your Resolver, before you use this function.`));
					const L = _.subscribe(() => {
						const S = (0, a.yI)(_.getState()),
							N = T.location.pathname,
							b = new URLSearchParams(T.location.search).get(l.BV);
						(N !== P || !!b) && (D.cancel(), L(), E(`DeepLink: waitForPageAction user navigated away from "${P}" to "${N}${b?T.location.search:""}"`)), S === o.E ? (D.cancel(), L(), E("DeepLink: waitForPageAction out of context.")) : y(S) && (D.finish(S.type), L(), I(S))
					})
				});

			function r(_) {
				const T = [],
					D = _.split("?")[0].split("/");
				for (let P of D) P.length !== 0 && (P.startsWith(":") ? T.push({
					value: P.substring(1),
					type: "dynamic"
				}) : T.push({
					value: P,
					type: "static"
				}));
				return T
			}
			async function d(_, T, D, P, y, I) {
				I.start();
				const E = r(_),
					L = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					S = {};
				let N = "";
				for (const [O, b] of E.entries())
					if (b.type === "static") N = [N, b.value].join("/");
					else if (b.type === "dynamic" && m.is(b.value) && b.value in L) {
					I.resolverStart(b.value);
					const w = await L[b.value]({
						deepLink: _,
						blockRouter: () => T(!0),
						unblockRouter: () => T(!1),
						routerHistory: P,
						resolvedValues: S,
						store: D,
						referringRoute: y,
						uri: {
							currentPartIdx: O,
							parts: E
						},
						waitForAction: n(D, I.createUserActionTracker(b.value)),
						waitForPageAction: s(D, P, I.createUserActionTracker(b.value))
					});
					I.resolverDone(b.value), N = [N, w].join("/"), S[b.value] = w
				} else throw I.cancel(), new Error(`DeepLink: Resolver with name '${b.value}' is not supported.`);
				return I.done(), N
			}

			function u(_, T) {
				const D = ":account",
					P = ":zone",
					y = T.get("zone");
				if (y) return T.delete("zone"), `/${D}/${P}/${y}`;
				const I = T.get("account");
				if (I) return T.delete("account"), `/${D}/${I}`;
				if (_ === "/overview") return `/${D}/${P}`;
				const E = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const h of E) {
					const L = h.length;
					if (_.startsWith(h) && (_.length === L || _[L] === "/")) return `/${D}/${P}${_}`
				}
				switch (_) {
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
		"../react/app/components/ErrorBoundary.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return T
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				l = t("../react/app/components/SomethingWrong.jsx"),
				c = t("../utils/sentry/lastSentEventId.ts"),
				f = t("../react/utils/zaraz.ts"),
				i = t("../react/utils/url.ts"),
				m = t("../node_modules/@cloudflare/elements/es/index.js"),
				g = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(s),
				d = t("../react/common/components/Page.tsx"),
				u = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function _() {
				return (0, e.useEffect)(() => {
					r().sendEvent("new page available refresh cta")
				}, []), o().createElement(d.Z, {
					type: "narrow",
					textAlign: "center",
					title: o().createElement(m.ZC, {
						textAlign: "center",
						fontSize: 5,
						fontWeight: 400
					}, o().createElement(n.Trans, {
						id: "error.new_page_version_available.title"
					})),
					description: o().createElement(n.Trans, {
						id: "error.new_page_version_available.description"
					})
				}, o().createElement(m.ZC, null, o().createElement(m.Ei, {
					height: 116,
					src: u,
					"aria-hidden": !0
				})), o().createElement(g.zx, {
					mt: 3,
					type: "primary",
					iconType: "refresh",
					onClick: () => window.location.reload()
				}, o().createElement(n.Trans, {
					id: "common.refresh"
				})))
			}
			const T = ({
				sentryTag: D,
				children: P,
				fallbackComponent: y
			}) => o().createElement(a.SV, {
				beforeCapture: I => {
					f.tg === null || f.tg === void 0 || f.tg.track("page-error", {
						page: (0, i.Fl)(window.location.pathname)
					})
				},
				onError: I => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(I)
				},
				fallback: ({
					error: I,
					eventId: E
				}) => {
					var h;
					if (y) return y;
					const L = c.e.getEventId() || E;
					return (I == null || (h = I.message) === null || h === void 0 ? void 0 : h.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), o().createElement(_, null)) : o().createElement(l.Z, {
						type: "page",
						error: I,
						eventId: L,
						sentryTag: D
					})
				}
			}, P)
		},
		"../react/app/components/Footer.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				Z: function() {
					return x
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = t.n(i),
				g = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				s = t("../react/utils/translator.tsx"),
				r = t("../../../../node_modules/moment/moment.js"),
				d = t.n(r);
			const u = () => {
					const C = d()().format("YYYY"),
						B = Z => {
							m().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: Z
							})
						};
					return o().createElement(_, {
						marginTop: "auto"
					}, o().createElement(T, null, o().createElement(D, null, o().createElement(P, null, "\xA9 ", C, " Cloudflare, Inc."), o().createElement(P, null, o().createElement(y, null, o().createElement(I, {
						showOnDeskTop: !1
					}, o().createElement(E, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => B("Support")
					}, o().createElement(s.cC, {
						id: "common.support"
					}))), o().createElement(I, null, o().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => B("Privacy Policy")
					}, o().createElement(s.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(I, null, o().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => B("Terms of Use")
					}, o().createElement(s.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(I, null, o().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => B("Cookie Preferences")
					}, o().createElement(s.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(I, null, o().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => B("Trademark")
					}, o().createElement(s.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(y, null, o().createElement(I, null, o().createElement(E, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => B("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(s.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				_ = (0, c.createComponent)(({
					theme: C,
					marginTop: B
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: B
				})),
				T = (0, c.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				D = (0, c.createComponent)(({
					theme: C
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${C.space[3]}px`
					}
				})),
				P = (0, c.createComponent)(({
					theme: C
				}) => ({
					width: "100%",
					color: C.colors.white,
					fontSize: C.fontSizes[1],
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
				y = (0, c.createComponent)(({
					theme: C
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: C.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				I = (0, c.createComponent)(({
					showOnDeskTop: C = !0,
					theme: B
				}) => ({
					color: B.colors.white,
					fontSize: B.fontSizes[1],
					height: "20px",
					display: C ? "flex" : "none",
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
				E = (0, c.createStyledComponent)(({
					theme: C
				}) => ({
					textDecoration: "none",
					color: C.colors.white,
					"&:hover": {
						color: C.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var h = u,
				L = t("../react/pages/welcome/routes.ts"),
				S = t("../react/utils/cookiePreferences.ts"),
				N = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				b = () => {
					const [C, B] = (0, e.useState)(!1), Z = (0, S.wV)(), X = () => {
						B(!0)
					}, ie = () => {
						B(!1)
					}, q = Z && Z === "US" ? (0, s.ZP)("footer.cpra_cta.privacy_choices") : (0, s.ZP)("footer.cpra_cta.cookie_preferences"), k = {
						background: "transparent",
						borderRadius: "none",
						color: C ? (0, f.Yc)() ? "#ee730a" : "#003681" : (0, f.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: C ? "underline" : "none",
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
					return o().createElement(l.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: k,
						onMouseEnter: X,
						onMouseLeave: ie
					}, o().createElement(l.Ei, {
						height: 15,
						src: N,
						mr: 2,
						alt: q
					}), q)
				};

			function w() {
				return w = Object.assign ? Object.assign.bind() : function(C) {
					for (var B = 1; B < arguments.length; B++) {
						var Z = arguments[B];
						for (var X in Z) Object.prototype.hasOwnProperty.call(Z, X) && (C[X] = Z[X])
					}
					return C
				}, w.apply(this, arguments)
			}

			function M(C, B) {
				if (C == null) return {};
				var Z = U(C, B),
					X, ie;
				if (Object.getOwnPropertySymbols) {
					var q = Object.getOwnPropertySymbols(C);
					for (ie = 0; ie < q.length; ie++) X = q[ie], !(B.indexOf(X) >= 0) && (!Object.prototype.propertyIsEnumerable.call(C, X) || (Z[X] = C[X]))
				}
				return Z
			}

			function U(C, B) {
				if (C == null) return {};
				var Z = {},
					X = Object.keys(C),
					ie, q;
				for (q = 0; q < X.length; q++) ie = X[q], !(B.indexOf(ie) >= 0) && (Z[ie] = C[ie]);
				return Z
			}
			const Q = (0, c.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,f.Yc)()?f.rS.colors.orange[6]:f.rS.colors.blue[4]}`
					}
				}), l.A),
				re = (0, c.createStyledComponent)(({
					theme: C
				}) => ({
					color: C.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, g.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: C.colors.gray[4]
					}
				}), l.A),
				me = C => {
					let {
						onClick: B
					} = C, Z = M(C, ["onClick"]);
					return React.createElement(Q, w({
						onClick: X => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: Z.href
							}), B && B(X)
						}
					}, Z))
				},
				ce = C => {
					let {
						children: B,
						target: Z,
						rel: X
					} = C, ie = M(C, ["children", "target", "rel"]);
					return o().createElement(re, w({
						target: Z || "_blank",
						rel: X || "noopener noreferrer"
					}, ie), B)
				},
				le = (0, c.createStyledComponent)(({
					theme: C
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
							fontSize: C.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: C.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), l.Ul),
				j = (0, c.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, g.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), l.ZC);
			var x = () => {
				const C = [L.d.root.pattern].some(Z => (0, a.matchPath)(location.pathname, {
					path: Z
				}));
				if ((0, n.PP)()) return o().createElement(h, null);
				if (C) return null;
				const B = new Date().getFullYear();
				return o().createElement(l.$_, {
					height: (0, g.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto",
					id: "site-footer"
				}, o().createElement(j, null, o().createElement(le, null, o().createElement(l.Li, null, o().createElement(ce, {
					href: "https://support.cloudflare.com"
				}, (0, s.ZP)("common.support"))), o().createElement(l.Li, null, o().createElement(ce, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(l.Dr, {
					textTransform: "capitalize"
				}, (0, s.ZP)("footer.system_status")))), o().createElement(l.Li, null, o().createElement(ce, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, s.ZP)("footer.careers"))), o().createElement(l.Li, null, o().createElement(ce, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, s.ZP)("footer.tos_reduced"))), o().createElement(l.Li, null, o().createElement(ce, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, s.ZP)("footer.security_issues"))), o().createElement(l.Li, null, o().createElement(ce, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, s.ZP)("footer.privacy_policy"))), o().createElement(l.Li, null, o().createElement(b, null)), o().createElement(l.Li, null, o().createElement(l.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", B, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/components/ErrorStatus.tsx"),
				l = t("../react/utils/translator.tsx");
			const c = f => o().createElement(a.Z, f, (0, l.ZP)("error.forbidden"));
			v.Z = c
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return T
				},
				Z: function() {
					return q
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../node_modules/@cloudflare/component-button/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = t.n(m),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				s = t("../react/common/components/AccessControl/index.js"),
				r = t("../react/common/components/ButtonWithDropdown.tsx"),
				d = t("../react/common/components/Dropdown/index.tsx"),
				u = t("../react/utils/translator.tsx"),
				_ = t("../react/common/hooks/useGate.ts");
			const T = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				D = () => {
					const k = (0, _.Z)("super-add-button-copy-change"),
						K = [{
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
					switch (k) {
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
							}, ...K];
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
							}, ...K];
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
							}, ...K];
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
							}, ...K];
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
							}, ...K];
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
				P = [{
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
			var y = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function I(k) {
				for (var K = 1; K < arguments.length; K++) {
					var V = arguments[K] != null ? Object(arguments[K]) : {},
						z = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(V).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(V, ee).enumerable
					})), z.forEach(function(ee) {
						E(k, ee, V[ee])
					})
				}
				return k
			}

			function E(k, K, V) {
				return K = h(K), K in k ? Object.defineProperty(k, K, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[K] = V, k
			}

			function h(k) {
				var K = L(k, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function L(k, K) {
				if (typeof k != "object" || k === null) return k;
				var V = k[Symbol.toPrimitive];
				if (V !== void 0) {
					var z = V.call(k, K || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(k)
			}

			function S() {
				return S = Object.assign ? Object.assign.bind() : function(k) {
					for (var K = 1; K < arguments.length; K++) {
						var V = arguments[K];
						for (var z in V) Object.prototype.hasOwnProperty.call(V, z) && (k[z] = V[z])
					}
					return k
				}, S.apply(this, arguments)
			}

			function N(k, K) {
				if (k == null) return {};
				var V = O(k, K),
					z, ee;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(k);
					for (ee = 0; ee < pe.length; ee++) z = pe[ee], !(K.indexOf(z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(k, z) || (V[z] = k[z]))
				}
				return V
			}

			function O(k, K) {
				if (k == null) return {};
				var V = {},
					z = Object.keys(k),
					ee, pe;
				for (pe = 0; pe < z.length; pe++) ee = z[pe], !(K.indexOf(ee) >= 0) && (V[ee] = k[ee]);
				return V
			}
			const b = k => {
					let {
						title: K,
						trackingEvent: V,
						icon: z,
						url: ee,
						description: pe,
						disabled: de
					} = k, _e = N(k, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(w, S({
						to: !de && ee || "#",
						"aria-disabled": de,
						onClick: () => {
							g().sendEvent(V, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, _e), o().createElement(l.ZC, {
						display: "flex"
					}, o().createElement(a.J, {
						type: z,
						size: 24,
						mr: 2,
						mt: 1
					}), o().createElement(l.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, o().createElement(l.ZC, {
						fontSize: 3
					}, o().createElement(u.cC, K)), o().createElement(l.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(u.cC, pe)))))
				},
				w = (0, n.createStyledComponent)(({
					theme: k
				}) => {
					const K = {
						cursor: "pointer",
						backgroundColor: (0, f.Yc)() ? k.colors.gray[8] : k.colors.gray[9],
						color: k.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: k.colors.background,
						color: k.colors.gray[2],
						fontSize: k.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': K,
						':focus-within:not([aria-disabled="true"])': I({}, K, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: k.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, y.Link);
			var M = b;

			function U() {
				return U = Object.assign ? Object.assign.bind() : function(k) {
					for (var K = 1; K < arguments.length; K++) {
						var V = arguments[K];
						for (var z in V) Object.prototype.hasOwnProperty.call(V, z) && (k[z] = V[z])
					}
					return k
				}, U.apply(this, arguments)
			}

			function Q(k) {
				for (var K = 1; K < arguments.length; K++) {
					var V = arguments[K] != null ? Object(arguments[K]) : {},
						z = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(V).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(V, ee).enumerable
					})), z.forEach(function(ee) {
						re(k, ee, V[ee])
					})
				}
				return k
			}

			function re(k, K, V) {
				return K = me(K), K in k ? Object.defineProperty(k, K, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[K] = V, k
			}

			function me(k) {
				var K = ce(k, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function ce(k, K) {
				if (typeof k != "object" || k === null) return k;
				var V = k[Symbol.toPrimitive];
				if (V !== void 0) {
					var z = V.call(k, K || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(k)
			}

			function le(k, K) {
				if (k == null) return {};
				var V = j(k, K),
					z, ee;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(k);
					for (ee = 0; ee < pe.length; ee++) z = pe[ee], !(K.indexOf(z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(k, z) || (V[z] = k[z]))
				}
				return V
			}

			function j(k, K) {
				if (k == null) return {};
				var V = {},
					z = Object.keys(k),
					ee, pe;
				for (pe = 0; pe < z.length; pe++) ee = z[pe], !(K.indexOf(ee) >= 0) && (V[ee] = k[ee]);
				return V
			}
			const $ = "GLOBAL_ADD_DROPDOWN",
				x = (0, n.createStyledComponent)(({
					theme: k
				}) => ({
					"background-color": k.colors.blue[5]
				}), c.zx),
				C = ({
					disableProducts: k
				}) => {
					const K = D();
					return (0, e.useEffect)(() => (g().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						g().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), o().createElement(r.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200,
						minWidth: 240
					}, K.map(V => {
						const z = V || {},
							{
								disableOn: ee,
								permissionCheck: pe
							} = z,
							de = le(z, ["disableOn", "permissionCheck"]),
							_e = ee && k[ee],
							ye = Q({}, de, {
								disabled: _e
							});
						return pe ? o().createElement(s.Z, {
							key: V.title.id,
							edit: pe
						}, ({
							isEditable: Le
						}) => Le && o().createElement(M, ye)) : o().createElement(M, U({
							key: V.url
						}, ye))
					}))
				},
				B = ({
					disableProducts: k,
					topNavType: K
				}) => {
					const V = () => (0, i.tq)() || K === "icon-only" ? o().createElement(l.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, o().createElement(x, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : K === "text-icon" || K === "icon-only-with-add-button" ? o().createElement(c.zx, {
						type: "primary",
						mr: K === "text-icon" ? 2 : 3
					}, o().createElement(o().Fragment, null, o().createElement(a.J, {
						label: "plus",
						type: "plus"
					}), " ", o().createElement(u.cC, {
						id: "common.add"
					}))) : o().createElement(c.zx, {
						type: "primary",
						mr: 2
					}, o().createElement(u.cC, {
						id: "common.add"
					}), " ", o().createElement(a.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return o().createElement(Z, {
						role: "group",
						"data-testid": $
					}, o().createElement(d.Lt, {
						trigger: K === "baseline" ? o().createElement(X, null, o().createElement(a.J, {
							label: "plus",
							type: "plus"
						}), !(0, i.tq)() && o().createElement(o().Fragment, null, o().createElement(u.cC, {
							id: "common.add"
						}), " ", o().createElement(a.J, {
							label: "arrow",
							type: "caret-down"
						}))) : V(),
						menu: o().createElement(C, {
							disableProducts: k
						})
					}))
				},
				Z = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				X = (0, n.createStyledComponent)(({
					theme: k
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: k.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, f.Yc)() ? k.colors.gray[1] : k.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, f.Yc)() ? k.colors.gray[8] : k.colors.gray[9]
					}
				}), l.zx);
			var ie = B,
				q = ie
		},
		"../react/app/components/LoadingSuspense.tsx": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../react/utils/translator.tsx"),
				f = t("../react/app/components/ErrorStatus.tsx"),
				i = t("../react/common/components/EmptyPage.jsx"),
				m = t("../react/common/hooks/suspenseHelpers.ts");

			function g(r) {
				const [d, u] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const _ = window.setTimeout(() => u(!0), r);
					return () => window.clearTimeout(_)
				}, []), d
			}
			const n = ({
					loadingTimeout: r = 1e3,
					stillLoadingTimeout: d = 9e3
				}) => {
					const u = g(r),
						_ = g(d);
					if ((0, m.nW)(), !u && !_) return o().createElement(i.Z, null);
					const T = _ ? o().createElement(c.cC, {
						id: "common.still_loading"
					}) : u ? o().createElement(c.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(f.Z, {
						size: 5
					}, o().createElement(l.ZC, {
						mr: 3
					}, o().createElement(a.g, {
						size: "2x"
					})), T)
				},
				s = ({
					children: r
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(n, null)
				}, r);
			v.Z = s
		},
		"../react/app/components/Persistence/api.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				C8: function() {
					return m
				},
				Mn: function() {
					return r
				},
				Sp: function() {
					return s
				},
				dr: function() {
					return c
				},
				lt: function() {
					return f
				},
				m6: function() {
					return n
				},
				n: function() {
					return g
				},
				yl: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const a = "/persistence/user",
				l = async () => {
					try {
						return await (await e.get(a, {
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, c = async d => {
					try {
						return await (await e.get(`/accounts/${d}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (u) {
						console.error(u)
					}
				}, f = async (d, u) => {
					try {
						return await (await e.post(`${a}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: d,
								accountId: u
							}),
							hideErrorAlert: !0
						})).body
					} catch (_) {
						return console.error(_), []
					}
				}, i = async (d, u) => {
					try {
						return await http.post(`/accounts/${d}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: u
							}),
							hideErrorAlert: !0
						}), !0
					} catch (_) {
						return console.error(_), !1
					}
				}, m = async d => {
					try {
						return await (await e.post(a, {
							body: JSON.stringify({
								darkMode: d
							})
						})).body
					} catch (u) {
						console.error(u)
					}
				}, g = async d => {
					try {
						return await (await e.post(`${a}/recents`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						console.error(u)
					}
				}, n = async d => {
					try {
						return await (await e.post(`${a}/viewed-changes`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						throw console.error(u), u
					}
				}, s = async d => {
					try {
						return await (await e.post(a + "/flags", {
							body: JSON.stringify(d)
						})).body
					} catch (u) {
						throw console.error(u), u
					}
				}, r = async (d, u) => {
					try {
						return await (await e.post(`${a}/dismissed-tasks`, {
							body: JSON.stringify({
								name: d,
								accountId: u
							}),
							hideErrorAlert: !0
						})).body
					} catch (_) {
						throw console.error(_), _
					}
				}
		},
		"../react/app/components/Persistence/hooks.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				y: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/components/Persistence/index.tsx");
			const l = () => (0, e.useContext)(a.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				Wl: function() {
					return g
				},
				lp: function() {
					return D
				},
				Z_: function() {
					return y
				},
				r7: function() {
					return w
				},
				Tv: function() {
					return j
				},
				yZ: function() {
					return I.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(l),
				f = t("../react/utils/bootstrap.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/app/components/Persistence/api.ts");
			const g = 10;
			var n = t("../react/common/hooks/useActiveState.ts");

			function s($) {
				for (var x = 1; x < arguments.length; x++) {
					var C = arguments[x] != null ? Object(arguments[x]) : {},
						B = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(C).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(C, Z).enumerable
					})), B.forEach(function(Z) {
						r($, Z, C[Z])
					})
				}
				return $
			}

			function r($, x, C) {
				return x = d(x), x in $ ? Object.defineProperty($, x, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[x] = C, $
			}

			function d($) {
				var x = u($, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function u($, x) {
				if (typeof $ != "object" || $ === null) return $;
				var C = $[Symbol.toPrimitive];
				if (C !== void 0) {
					var B = C.call($, x || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)($)
			}
			const _ = {
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
				T = s({}, _, {
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
				D = (0, e.createContext)(T),
				P = D.Consumer,
				y = ({
					children: $,
					onDarkModeChangeCb: x
				}) => {
					const [C, B] = (0, e.useState)(_), [Z, X] = (0, e.useState)(T.isLoading), [ie, q] = (0, e.useState)(!1), k = (0, f.$8)(), K = (0, a.p4)(de => (0, i.wH)(de)), [, V] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						k ? (0, m.yl)().then(de => {
							if (de) {
								var _e;
								B(de), V(de == null || (_e = de.flags) === null || _e === void 0 ? void 0 : _e.hasEnabledSecurityNavigation), c().identify({
									hasEnabledSecurityNavigation: de.flags.hasEnabledSecurityNavigation
								}), x(de.darkMode)
							}
						}).finally(() => X(!1)) : X(!1)
					}, [k]);
					const z = (de, _e) => !!C.favorites.find(ye => ye.type === "zone" && ye.name === de && ye.accountId === _e),
						ee = g - C.favorites.length,
						pe = de => C.favorites.filter(ye => ye.type === "zone" && ye.accountId === de).length < g;
					return o().createElement(D.Provider, {
						value: s({}, C, {
							isLoading: Z,
							remainingStarSlots: ee,
							isUpdatingFlags: ie,
							actions: {
								canAccountStarZone: pe,
								isZoneStarred: z,
								starZone: async (de, _e) => {
									var ye;
									const Le = !z(de, _e),
										Te = pe(_e);
									if (Le && !Te) {
										console.log("can not star zone - account is at limit");
										return
									}
									const we = await (0, m.lt)(de, _e);
									c().sendEvent("click star zone", {
										isStarring: Le,
										totalStarredZones: we.filter(Re => Re.accountId === _e && Re.type === "zone").length,
										totalZones: K == null || (ye = K.paginationData) === null || ye === void 0 ? void 0 : ye.info.total_count
									}), B(s({}, C, {
										favorites: we
									}))
								},
								toggleSecurityNavigation: async de => {
									q(!0), await (0, m.Sp)({
										hasEnabledSecurityNavigation: de
									}), c().identify({
										hasEnabledSecurityNavigation: de
									}), q(!1), V(de), B(s({}, C, {
										flags: {
											hasEnabledSecurityNavigation: de
										}
									}))
								},
								setDarkMode: async de => {
									const _e = await (0, m.C8)(de);
									B(_e), x(_e.darkMode)
								},
								logRouteVisited: async de => {
									var _e;
									const ye = await (0, m.n)(de);
									B((_e = ye) !== null && _e !== void 0 ? _e : s({}, C))
								},
								viewChange: async de => {
									const _e = await (0, m.m6)(de);
									B(s({}, C, {
										viewedChanges: _e
									}))
								},
								dismissTask: async (de, _e) => {
									const ye = await (0, m.Mn)(de, _e);
									B(s({}, C, {
										dismissedTasks: ye
									}))
								}
							}
						})
					}, $)
				};
			var I = t("../react/app/components/Persistence/hooks.ts"),
				E = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				h = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function L() {
				return L = Object.assign ? Object.assign.bind() : function($) {
					for (var x = 1; x < arguments.length; x++) {
						var C = arguments[x];
						for (var B in C) Object.prototype.hasOwnProperty.call(C, B) && ($[B] = C[B])
					}
					return $
				}, L.apply(this, arguments)
			}

			function S($, x) {
				if ($ == null) return {};
				var C = N($, x),
					B, Z;
				if (Object.getOwnPropertySymbols) {
					var X = Object.getOwnPropertySymbols($);
					for (Z = 0; Z < X.length; Z++) B = X[Z], !(x.indexOf(B) >= 0) && (!Object.prototype.propertyIsEnumerable.call($, B) || (C[B] = $[B]))
				}
				return C
			}

			function N($, x) {
				if ($ == null) return {};
				var C = {},
					B = Object.keys($),
					Z, X;
				for (X = 0; X < B.length; X++) Z = B[X], !(x.indexOf(Z) >= 0) && (C[Z] = $[Z]);
				return C
			}
			const O = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var w = $ => {
					let {
						isStarred: x,
						size: C = 16
					} = $, B = S($, ["isStarred", "size"]);
					const Z = O[(0, E.Yc)() ? "dark" : "light"];
					return o().createElement(h.J, L({
						type: x ? "star" : "star-outline",
						color: x ? Z.gold : Z.gray,
						size: C
					}, B))
				},
				M = t("../node_modules/@cloudflare/elements/es/index.js");

			function U($) {
				for (var x = 1; x < arguments.length; x++) {
					var C = arguments[x] != null ? Object(arguments[x]) : {},
						B = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(C).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(C, Z).enumerable
					})), B.forEach(function(Z) {
						Q($, Z, C[Z])
					})
				}
				return $
			}

			function Q($, x, C) {
				return x = re(x), x in $ ? Object.defineProperty($, x, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[x] = C, $
			}

			function re($) {
				var x = me($, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function me($, x) {
				if (typeof $ != "object" || $ === null) return $;
				var C = $[Symbol.toPrimitive];
				if (C !== void 0) {
					var B = C.call($, x || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)($)
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
			var j = (0, e.forwardRef)(({
				featurePreview: $ = !1,
				isStarred: x,
				onClickFn: C,
				isDisabled: B,
				testId: Z,
				buttonText: X,
				size: ie = "large",
				variant: q = "pill"
			}, k) => {
				const [K, V] = (0, e.useState)(!1), z = ce[(0, E.Yc)() ? "dark" : "light"][x && !$ ? "active" : "default"], ee = U({}, ie === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, ie === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, ie === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), pe = {
					pill: "50vh",
					button: 4
				};
				return o().createElement(M.zx, {
					onMouseEnter: () => V(!0),
					onMouseLeave: () => V(!1),
					innerRef: k,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: ee.paddingRight,
					gap: 1,
					pl: ee.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: pe[q],
					border: "1px solid",
					cursor: $ || B ? "default" : "pointer",
					backgroundColor: K ? z.bgHover : z.bg,
					color: z.text,
					borderColor: z.border,
					onClick: C,
					opacity: B ? .5 : 1,
					disabled: B,
					fontSize: ee.fontSize,
					height: ee.height,
					"data-testid": Z
				}, o().createElement(w, {
					isStarred: $ ? !1 : x,
					size: ee.starIconSize
				}), X)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$n: function() {
					return d
				},
				IU: function() {
					return _
				},
				Wq: function() {
					return L
				},
				dL: function() {
					return T
				},
				fO: function() {
					return h
				},
				gw: function() {
					return N
				},
				hv: function() {
					return u
				},
				iY: function() {
					return s
				},
				jq: function() {
					return O
				},
				o_: function() {
					return y
				},
				us: function() {
					return E
				},
				wB: function() {
					return r
				},
				zJ: function() {
					return I
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				l = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/utils/zoneLevelAccess.ts"),
				f = t("../react/pages/stream/selectors.ts"),
				i = t("../react/pages/home/domain-registration/selectors.ts"),
				m = t("../react/pages/images/selectors.ts"),
				g = t("../react/pages/r2/selectors.ts");
			const n = b => !!(0, c.b)(b),
				s = b => n(b) ? (0, e.hT)(b) : !0,
				r = (b, w, M, U = "read") => {
					const Q = (0, a.nA)(b);
					return n(b) ? (0, e.WL)(b, (0, e.W9)(M, e.ZZ[U]), (0, e.j)(Q == null ? void 0 : Q.id)) : (0, l.Yj)(b)(w)[U]
				},
				d = (b, w, M, U = "read") => {
					const Q = (0, a.nA)(b),
						re = e.zs.includes(M);
					return n(b) ? (0, e.WL)(b, re ? M : (0, e.my)(M, e.ZZ[U === "edit" ? "update" : U]), (0, e.j)(Q == null ? void 0 : Q.id)) : (0, l.Yj)(b)(w)[U === "update" ? "edit" : U]
				},
				u = b => !!(0, f._Q)(b),
				_ = b => (0, m.pT)(b),
				T = b => (0, m.pT)(b) && (0, m.GH)(b),
				D = b => sourcingKitEnabledSelector(b),
				P = b => !!r2EnabledSelector(b),
				y = b => (0, g.Mv)(b),
				I = b => (0, o.$f)(b, "rulesets.magic_transit_allowed"),
				E = b => (0, o.$f)(b, "flowtrackd.magic_custom_config_allowed"),
				h = b => (0, o.$f)(b, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				L = b => (0, l.Le)(b, "ddos_protection", "l4_rulesets"),
				S = b => hasAccountEntitlements(b, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				N = b => (0, i.HO)(b),
				O = b => !(0, o.yD)(b) && !!d(b, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(a),
				c = t("../../../../node_modules/prop-types/index.js"),
				f = t.n(c),
				i = t("webpack/sharing/consume/default/react-redux/react-redux"),
				m = t.n(i),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(g),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				r = t("../node_modules/@cloudflare/component-button/es/index.js"),
				d = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				u = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				_ = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				T = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				D = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				P = t.n(D),
				y = t("../react/common/actions/membershipActions.ts"),
				I = t("../react/utils/url.ts"),
				E = t("../react/app/components/Footer.tsx");

			function h(le) {
				for (var j = 1; j < arguments.length; j++) {
					var $ = arguments[j] != null ? Object(arguments[j]) : {},
						x = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols($).filter(function(C) {
						return Object.getOwnPropertyDescriptor($, C).enumerable
					})), x.forEach(function(C) {
						L(le, C, $[C])
					})
				}
				return le
			}

			function L(le, j, $) {
				return j = S(j), j in le ? Object.defineProperty(le, j, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : le[j] = $, le
			}

			function S(le) {
				var j = N(le, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function N(le, j) {
				if (typeof le != "object" || le === null) return le;
				var $ = le[Symbol.toPrimitive];
				if ($ !== void 0) {
					var x = $.call(le, j || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(le)
			}
			const O = (0, s.createComponent)(({
					type: le
				}) => ({
					height: le !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				b = (0, s.createComponent)(({
					theme: le,
					margin: j,
					size: $ = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: le.colors.gray[3],
					height: j ? "auto" : "100%",
					padding: j ? 0 : le.space[$ > 1 ? $ - 2 : 0],
					margin: j,
					justifyContent: "center",
					alignItems: "center"
				})),
				w = (0, s.createComponent)(() => ({
					textAlign: "left"
				})),
				M = (0, s.createComponent)(() => ({
					textAlign: "right"
				})),
				U = (0, s.createComponent)(({
					theme: le
				}) => ({
					fontSize: le.fontSizes[6]
				})),
				Q = (0, s.createComponent)(({
					theme: le
				}) => ({
					fontSize: le.fontSizes[4]
				})),
				re = (0, s.createComponent)(({
					theme: le
				}) => ({
					fontSize: le.fontSizes[3]
				})),
				me = (0, s.createComponent)(({
					theme: le
				}) => ({
					width: "100%",
					height: 125,
					marginTop: le.space[4],
					padding: le.space[2]
				}), "textarea");
			class ce extends o().Component {
				constructor(...j) {
					super(...j);
					L(this, "state", {
						value: "",
						submitted: !1
					}), L(this, "handleTextareaChange", $ => {
						this.setState({
							value: $.target.value
						})
					}), L(this, "sendErrToSentry10", async () => {
						try {
							var $, x, C, B;
							const Z = (($ = window) === null || $ === void 0 || (x = $.bootstrap) === null || x === void 0 || (C = x.data) === null || C === void 0 || (B = C.user) === null || B === void 0 ? void 0 : B.id) || "Unknown",
								X = this.props.eventId || d.eW(),
								ie = {
									name: Z,
									email: `${Z}@userid.com`,
									comments: this.state.value,
									eventId: X,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: h({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(ie)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (Z) {
							console.error(Z)
						}
					}), L(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), L(this, "renderContent", $ => o().createElement(g.I18n, null, x => o().createElement(O, {
						type: $
					}, o().createElement(b, null, o().createElement(w, null, o().createElement(U, null, x.t("error.internal_issues")), o().createElement(Q, null, x.t("error.help_us")), o().createElement(me, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: C => this.handleTextareaChange(C),
						disabled: this.state.submitted,
						placeholder: x.t("error.give_feedback")
					}), o().createElement(M, null, !this.state.submitted && o().createElement(r.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, x.t("common.submit")), this.state.submitted && o().createElement(re, null, x.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: j,
						sentryTag: $,
						membershipsList: x
					} = this.props;
					console.error(`SomethingWrong: ${j}`);
					let C = "";
					const B = (0, I.e1)();
					if (B) {
						var Z;
						const ie = await x({
								parameters: {
									status: "accepted"
								}
							}),
							q = ie == null || (Z = ie.find(k => k.id === B)) === null || Z === void 0 ? void 0 : Z.roles;
						q && q.length && (C = q.join(", "))
					}
					const X = `ErrorBoundary - ${j}`;
					u.Tb(X, {
						tags: {
							errorBoundary: $,
							normalizedPath: (0, I.Fl)(window.location.pathname),
							roles: C.length ? C : void 0
						}
					}), P().sendEvent("something wrong", {
						error: j,
						roles: C.length ? C : void 0
					})
				}
				render() {
					const {
						type: j
					} = this.props;
					return j === "fullscreen" ? o().createElement("div", null, o().createElement(_.h4, null, o().createElement(a.Link, {
						to: "/"
					}, o().createElement(T.TR, null))), this.renderContent(j), o().createElement(E.Z, null)) : this.renderContent(j)
				}
			}
			ce.propTypes = {
				type: f().oneOf(["fullscreen", "page"]),
				error: f().oneOfType([f().string, f().object]),
				eventId: f().string,
				sentryTag: f().string,
				membershipsList: f().func
			}, v.Z = (0, i.connect)(() => ({}), {
				membershipsList: y.YT
			})(ce)
		},
		"../react/app/providers/storeContainer.js": function(W, v, t) {
			"use strict";
			t.d(v, {
				bh: function() {
					return M
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				o = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				a = t.n(o),
				l = t("../../../../node_modules/redux-thunk/es/index.js"),
				c = t("../../../../node_modules/redux-persist/es/index.js"),
				f = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				i = t("../react/app/rootReducer.js"),
				m = t("../react/app/redux/normalizer.js"),
				g = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				s = t("../react/app/reducerRegistry.js"),
				r = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				d = t("../react/common/sagas/index.js"),
				u = t("../react/app/redux/processActionMiddleware.js"),
				_ = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				T = t("../../../../node_modules/is-promise/index.js"),
				D = t.n(T);

			function P(U) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var re = arguments[Q] != null ? Object(arguments[Q]) : {},
						me = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && me.push.apply(me, Object.getOwnPropertySymbols(re).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(re, ce).enumerable
					})), me.forEach(function(ce) {
						y(U, ce, re[ce])
					})
				}
				return U
			}

			function y(U, Q, re) {
				return Q = I(Q), Q in U ? Object.defineProperty(U, Q, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[Q] = re, U
			}

			function I(U) {
				var Q = E(U, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function E(U, Q) {
				if (typeof U != "object" || U === null) return U;
				var re = U[Symbol.toPrimitive];
				if (re !== void 0) {
					var me = re.call(U, Q || "default");
					if (typeof me != "object") return me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(U)
			}
			const h = {
					key: "cf-redux-store",
					storage: f.Z,
					whitelist: ["accountAccess", "invite"]
				},
				L = (0, r.ZP)(),
				N = [({
					dispatch: U
				}) => Q => re => D()(re) ? re.then(me => U(me)) : Q(re), L, l.Z, u.Z, m.qR],
				O = U => (0, c.Wq)(h, P({}, i.Z, U));

			function b() {
				const U = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					re = e.compose((0, e.applyMiddleware)(...N), g.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					me = {},
					ce = (0, e.createStore)(O(s.Z.getReducers()), me, re);
				L.run(d.Z), (0, c.p5)(ce);
				const j = (t.g.bootstrap || {}).data || {};
				return ce.dispatch((0, _.mW)("user", j.user)), ce
			}
			let w;
			s.Z.setChangeListener(U => {
				var Q;
				w && ((Q = w) === null || Q === void 0 ? void 0 : Q.replaceReducer) && (w.replaceReducer(O(U)), (0, c.p5)(w))
			});

			function M() {
				return w || (w = b()), w
			}
		},
		"../react/app/redux/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				TZ: function() {
					return a
				},
				UM: function() {
					return c
				},
				ZS: function() {
					return l
				},
				p4: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e);
			const a = () => (0, e.useStore)(),
				l = () => a().getState(),
				c = () => (0, e.useDispatch)(),
				f = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(W, v, t) {
			"use strict";
			t.d(v, {
				$J: function() {
					return r
				},
				Oy: function() {
					return s
				},
				SC: function() {
					return g
				},
				ZP: function() {
					return d
				},
				dJ: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				a = t.n(o);

			function l(u) {
				for (var _ = 1; _ < arguments.length; _++) {
					var T = arguments[_] != null ? Object(arguments[_]) : {},
						D = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(T).filter(function(P) {
						return Object.getOwnPropertyDescriptor(T, P).enumerable
					})), D.forEach(function(P) {
						c(u, P, T[P])
					})
				}
				return u
			}

			function c(u, _, T) {
				return _ = f(_), _ in u ? Object.defineProperty(u, _, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[_] = T, u
			}

			function f(u) {
				var _ = i(u, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function i(u, _) {
				if (typeof u != "object" || u === null) return u;
				var T = u[Symbol.toPrimitive];
				if (T !== void 0) {
					var D = T.call(u, _ || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(u)
			}
			const m = l({}, o),
				g = (u, _, T, D = {}) => {
					const P = u === "delete" ? "del" : u.toLowerCase();
					return T && P !== "del" && (D.body = T), m[P](_, D)
				},
				n = (u, _) => (u.meta.params = _, u),
				s = (u, _, T, D, {
					body: P = {}
				}) => {
					const {
						result: y,
						messages: I,
						result_info: E
					} = P, h = Object.values(_);
					if (u.meta.method === "delete") {
						const L = h[h.length - 1];
						u.meta.id = typeof L == "object" ? L.id : L
					}
					return u.payload = y, I && (u.meta.messages = I), h.length && (u.meta.params = _), E && (u.meta.paginationData = {
						info: E,
						actionParameters: h,
						options: T[0],
						insertionOffset: 0
					}), u
				},
				r = (u, _, T, D, P) => (u.payload = P && P.body && P.body.errors, u.meta.messages = P && P.body && P.body.messages, u.meta.params = _, u.apiError = P, u);

			function d(u, _, T, D) {
				const P = (0, e.RM)(u, _, T, D).apiFetch(g).on("start", n).on("success", s).on("error", r),
					y = P.mock;
				return P.mock = I => (y((...E) => {
					const h = I(...E);
					return h && typeof h == "object" && "result" in h ? h : {
						result: h
					}
				}), P), P
			}
		},
		"../react/app/redux/normalizer.js": function(W, v, t) {
			"use strict";
			t.d(v, {
				P1: function() {
					return g
				},
				jQ: function() {
					return i
				},
				qR: function() {
					return n
				},
				uc: function() {
					return m
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				o = t("../react/pages/workers/entityTypes.ts"),
				a = t("../react/pages/email/types.ts"),
				l = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				c = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				f = t.n(c);
			const i = c.static.from([{
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
					entityType: "customerMetadataBoundary"
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
					entityType: o.D.route
				}, {
					entityType: o.D.routes,
					to: o.D.route
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
				m = s => s.entities,
				g = (...s) => (0, l.P1)(i, m, ...s),
				n = (0, l.QB)(i)
		},
		"../react/app/redux/utils.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				F: function() {
					return a
				},
				_: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const o = l => (c, f, i) => (0, e.SC)(c, f, i, {
					hideErrorAlert: !0
				}).catch(l),
				a = l => c => {
					if (c.status === l) return c;
					throw c
				}
		},
		"../react/common/actionTypes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Cm: function() {
					return f
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return i
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
					return s
				},
				gM: function() {
					return l
				},
				lV: function() {
					return c
				},
				s1: function() {
					return m
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				a = "MODAL_OPEN",
				l = "MODAL_CLOSE",
				c = "TOGGLE_ON",
				f = "TOGGLE_OFF",
				i = "SET_ACTIVE",
				m = "CLEAR_ACTIVE",
				g = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let s = function(r) {
				return r.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", r.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", r.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", r.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", r.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", r.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", r.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", r.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", r.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", r
			}({})
		},
		"../react/common/actions/activeActions.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				I: function() {
					return o
				},
				n: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = (l, c) => ({
					type: e.HI,
					activeKey: l,
					activeValue: c
				}),
				a = l => ({
					type: e.s1,
					activeKey: l
				})
		},
		"../react/common/actions/membershipActions.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AX: function() {
					return r
				},
				YT: function() {
					return g
				},
				ct: function() {
					return i
				},
				d6: function() {
					return n
				},
				kt: function() {
					return s
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/common/constants/index.ts");

			function a(d) {
				for (var u = 1; u < arguments.length; u++) {
					var _ = arguments[u] != null ? Object(arguments[u]) : {},
						T = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(_).filter(function(D) {
						return Object.getOwnPropertyDescriptor(_, D).enumerable
					})), T.forEach(function(D) {
						l(d, D, _[D])
					})
				}
				return d
			}

			function l(d, u, _) {
				return u = c(u), u in d ? Object.defineProperty(d, u, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[u] = _, d
			}

			function c(d) {
				var u = f(d, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function f(d, u) {
				if (typeof d != "object" || d === null) return d;
				var _ = d[Symbol.toPrimitive];
				if (_ !== void 0) {
					var T = _.call(d, u || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(d)
			}
			const i = d => {
					const u = d.payload.map(_ => a({}, _, {
						membershipId: _.id,
						id: _.account.id
					}));
					return a({}, d, {
						payload: u
					})
				},
				m = d => {
					const u = i(d);
					return Array.isArray(u.payload) ? a({}, d, {
						payload: u.payload[0]
					}) : a({}, d, {
						payload: null
					})
				},
				g = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", i),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				s = (...d) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: d
				}),
				r = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", m)
		},
		"../react/common/actions/modalActions.ts": function(W, v, t) {
			"use strict";
			t.r(v), t.d(v, {
				closeModal: function() {
					return l
				},
				openModal: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function a(c, f, i = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: c,
						props: f
					},
					options: i
				}
			}

			function l(c) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: c
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(W, v, t) {
			"use strict";
			t.r(v), t.d(v, {
				add: function() {
					return c
				},
				error: function() {
					return g
				},
				info: function() {
					return i
				},
				success: function() {
					return f
				},
				warn: function() {
					return m
				}
			});
			var e = t("../react/common/actionTypes.ts");

			function o(n) {
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

			function c(n, s, r = {}) {
				return r = r || {},
					function(d) {
						let u = l++,
							_ = {
								id: u,
								type: n,
								message: s,
								delay: r.delay,
								persist: r.persist === void 0 ? !1 : r.persist,
								closable: r.closable === void 0 ? !0 : r.closable,
								onClose() {
									d(a(u)), r.onClose && r.onClose.apply(null, arguments)
								}
							};
						d(o(_))
					}
			}

			function f(n, s) {
				return c("success", n, s)
			}

			function i(n, s) {
				return c("info", n, s)
			}

			function m(n, s) {
				return c("warning", n, s)
			}

			function g(n, s) {
				return c("error", n, s)
			}
		},
		"../react/common/actions/userActions.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				BT: function() {
					return i
				},
				Ut: function() {
					return D
				},
				V_: function() {
					return P
				},
				Y9: function() {
					return _
				},
				Z0: function() {
					return I
				},
				mp: function() {
					return T
				},
				r3: function() {
					return y
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/app/redux/utils.ts");

			function a(E) {
				for (var h = 1; h < arguments.length; h++) {
					var L = arguments[h] != null ? Object(arguments[h]) : {},
						S = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(L).filter(function(N) {
						return Object.getOwnPropertyDescriptor(L, N).enumerable
					})), S.forEach(function(N) {
						l(E, N, L[N])
					})
				}
				return E
			}

			function l(E, h, L) {
				return h = c(h), h in E ? Object.defineProperty(E, h, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[h] = L, E
			}

			function c(E) {
				var h = f(E, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function f(E, h) {
				if (typeof E != "object" || E === null) return E;
				var L = E[Symbol.toPrimitive];
				if (L !== void 0) {
					var S = L.call(E, h || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(E)
			}
			const i = (0, e.C)("user").get`/user`,
				m = (0, e.C)("user").patch`/user`,
				g = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				s = (0, e.C)("user").post`/user/two_factor_authentication`,
				r = (0, e.C)("user").put`/user/two_factor_authentication`,
				d = (0, e.C)("user").delete`/user/two_factor_authentication`,
				u = (0, e.C)("user").put`/user/email`;

			function _(...E) {
				return u(...E)
			}
			const T = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				D = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(E => a({}, E, {
					body: a({}, E.body, {
						result: {}
					})
				}))),
				P = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				y = (0, e.C)("userDetails").get`/user/details`,
				I = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(W, v, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/utils/zoneLevelAccess.ts");
			const a = ({
				legacyPermission: l,
				canAccess: c,
				children: f,
				render: i
			}) => {
				const m = !!(0, o.P)();
				let g;
				typeof c == "boolean" && c !== void 0 && m ? g = {
					read: c,
					list: c,
					create: c,
					update: c,
					delete: c,
					sign: c
				} : g = (0, e.Z)(l);
				const n = i || f;
				return n ? n(g) : null
			};
			v.Z = a
		},
		"../react/common/components/AccessCheck/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				E1: function() {
					return o
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
					return s
				},
				jX: function() {
					return i
				},
				my: function() {
					return m
				},
				u1: function() {
					return e
				},
				zs: function() {
					return c
				}
			});
			const e = "com.cloudflare.api.account",
				o = "com.cloudflare.api.account.",
				a = "com.cloudflare.edge.",
				l = "com.cloudflare.api.account.zone.",
				c = ["com.cloudflare.api.app.manage"];
			let f = function(r) {
				return r.read = "read", r.list = "list", r.create = "create", r.update = "update", r.delete = "delete", r.sign = "sign", r.refresh = "refresh", r
			}({});
			const i = (r, d) => `${o}${r?r+".":""}${d}`,
				m = (r, d) => `${l}${r?r+".":""}${d}`,
				g = (r, d) => `${a}${r}.${d}`,
				n = (r = "") => `${o}${r}`,
				s = (r = "") => `${l}${r}`
		},
		"../react/common/components/AccessCheck/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				L8: function() {
					return l.L8
				},
				W9: function() {
					return l.W9
				},
				WL: function() {
					return a.WL
				},
				ZP: function() {
					return o.Z
				},
				ZZ: function() {
					return l.ZZ
				},
				hT: function() {
					return a.hT
				},
				j: function() {
					return l.j
				},
				jX: function() {
					return l.jX
				},
				my: function() {
					return l.my
				},
				xk: function() {
					return e.Z
				},
				zs: function() {
					return l.zs
				}
			});
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/common/components/AccessCheck/AccessCheck.tsx"),
				a = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				l = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				l = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/pages/zone-versioning/selectors.ts");

			function f(i) {
				const {
					read: m,
					edit: g
				} = (0, a.p4)(l.Yj)(i);
				let n = g;
				if (i != "zone_versioning") {
					const r = (0, a.p4)(c.G);
					(r == null ? void 0 : r.isLocked) && (n = !1)
				}
				return (0, e.useMemo)(() => ({
					read: m,
					list: m,
					create: n,
					update: n,
					delete: n,
					sign: n
				}), [m, n])
			}
			v.Z = f
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				WL: function() {
					return r
				},
				hT: function() {
					return _
				},
				kd: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				a = t("../react/pages/home/members/utils.ts"),
				l = t("../react/common/components/AccessCheck/constants.ts"),
				c = t("../react/pages/zone-versioning/selectors.ts");
			const f = {
					allow: "allow",
					deny: "deny"
				},
				i = 0,
				m = 1,
				g = 2,
				n = 3;

			function s(h, L, S, N) {
				let O = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					b;
				for (b in O) O[b] = r(h, `${L}.${b}`, S, N);
				return O
			}

			function r(h, L, S, N) {
				var O;
				if (d(L) && !u(L)) {
					const Q = (0, c.G)(h);
					if (Q == null ? void 0 : Q.isLocked) return !1
				}
				const b = (O = (0, o.D0)(h)) === null || O === void 0 ? void 0 : O.id,
					w = b ? [`com.cloudflare.api.account.${b}`] : void 0,
					M = (0, a.vq)(b);
				return !!T(h, M, L, S, N || w)
			}

			function d(h) {
				return ![l.ZZ.read, l.ZZ.list].some(L => h.endsWith(L))
			}

			function u(h) {
				return h.includes("zone.versioning")
			}

			function _(h) {
				const L = (0, o.Ko)(h);
				let S = !1;
				return L == null || L.forEach(N => {
					N.access === f.allow && N.permission_groups.forEach(O => {
						var b;
						(O == null || (b = O.meta) === null || b === void 0 ? void 0 : b.scopes) === l.u1 && (S = !0)
					})
				}), S
			}

			function T(h, L, S, N, O) {
				const b = (0, o.Ko)(h),
					w = {};
				b == null || b.forEach(re => {
					var me;
					const ce = re.access;
					let le = i;
					if (S && re.permission_groups.forEach(j => {
							var $, x;
							L == null || ($ = L.find(C => C.id === j.id)) === null || $ === void 0 || (x = $.permissions) === null || x === void 0 || x.forEach(C => {
								le = Math.max(le, D(C, S))
							})
						}), le !== i && !!N) {
						let j = i;
						re.resource_groups.forEach($ => {
							j = Math.max(j, y($.scope, N, O))
						}), le = j === i ? j : le + j
					}(w == null || (me = w[ce]) === null || me === void 0 ? void 0 : me[le]) || (0, e.Z)(w, [ce, le], []), w[ce][le].push(re)
				});
				const M = w[f.allow] && Object.keys(w[f.allow]).map(re => parseInt(re)),
					U = w[f.deny] && Object.keys(w[f.deny]).map(re => parseInt(re)),
					Q = Math.max.apply(Math, M);
				return Q === i || Math.max.apply(Math, U) >= Q ? null : w[f.allow][Q]
			}

			function D(h, L) {
				if (h.key === L || P(h.key, L)) return n;
				for (const S of (h == null ? void 0 : h.implies) || []) {
					let N = D(S, L);
					if (N > i) return N
				}
				return i
			}

			function P(h, L) {
				const S = L == null ? void 0 : L.lastIndexOf(".");
				return S === -1 ? !1 : (L == null ? void 0 : L.substring(0, S)) + ".*" === h
			}

			function y(h, L, S) {
				var N;
				let O = i;
				if (h == null || (N = h.objects) === null || N === void 0 || N.forEach(b => {
						O = Math.max(O, E(b, L))
					}), O === i) return O;
				if (h.key !== "*") switch (!0) {
					case I(h.key, S) > i:
					case (!(S == null ? void 0 : S.length) && O === n):
						break;
					case (O === m && I(h.key, [L]) > i):
						O = I(h.key, [L]);
						break;
					default:
						return i
				}
				for (const b of h.subset_of || [])
					if (I(b.key, S) === i) return i;
				return O
			}

			function I(h, L = []) {
				for (const S of L || []) {
					if (h === S) return n;
					if (P(h, S)) return g
				}
				return i
			}

			function E(h, L) {
				return h.key === L ? n : h.key === "*" ? m : P(h.key, L) ? g : i
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(W, v, t) {
			"use strict";
			t.d(v, {
				a: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				a = t("../react/common/selectors/accountSelectors.ts");
			const l = f => {
					if (typeof f != "string") throw new Error("invalid Param Type provided");
					const i = f.slice(1).split(":");
					if (i.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: i[0],
						value: i[1]
					}
				},
				c = (f, i) => {
					const {
						resourceId: m,
						accountId: g,
						legacyPermission: n
					} = i;
					let {
						read: s,
						edit: r
					} = i;
					const d = {};
					n && (r = `#${n}:edit`, s = `#${n}:read`);
					const u = m || g;
					if (s) {
						const _ = Array.isArray(s) ? s : [s];
						d.isReadable = _.some(T => {
							const D = l(T);
							return (0, a.DT)(f, u, P => !!(P[D.key] && P[D.key][D.value]))
						})
					}
					if (r) {
						const _ = Array.isArray(r) ? r : [r];
						d.isEditable = _.some(T => {
							const D = l(T);
							return (0, a.DT)(f, u, P => !!(P[D.key] && P[D.key][D.value]))
						})
					}
					return d
				};
			v.Z = (0, e.connect)(c)
		},
		"../react/common/components/AccessControl/index.js": function(W, v, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				o = t.n(e),
				a = t("../react/app/HoCs/withEntities.tsx"),
				l = t("../react/common/components/AccessControl/SAAConnect.js");

			function c(s) {
				for (var r = 1; r < arguments.length; r++) {
					var d = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(d).filter(function(_) {
						return Object.getOwnPropertyDescriptor(d, _).enumerable
					})), u.forEach(function(_) {
						f(s, _, d[_])
					})
				}
				return s
			}

			function f(s, r, d) {
				return r = i(r), r in s ? Object.defineProperty(s, r, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[r] = d, s
			}

			function i(s) {
				var r = m(s, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(s, r) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var u = d.call(s, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(s)
			}

			function g(s) {
				const d = ["isReadable", "isEditable"].reduce((u, _) => s.hasOwnProperty(_) ? c({}, u, {
					[_]: s[_]
				}) : u, {});
				return s.children(d)
			}
			g.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const n = (0, a.Z)((0, l.Z)(g));
			n.displayName = "AccessControl", v.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				PP: function() {
					return s
				},
				RJ: function() {
					return i
				},
				tz: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				l = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				c = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const f = () => m.test(window.location.pathname) || a.E.has(l.Qq),
				i = () => a.E.get(l.Qq),
				m = /^\/login\/apple(\/)?/,
				n = [m, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				s = () => {
					let d = !1;
					n.forEach(_ => {
						if (_.test(window.location.pathname)) {
							d = !0;
							return
						}
					});
					const u = f() && d;
					return u && (0, c.C8)(c.LF.OFF), u
				},
				r = d => {
					d && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let u = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					d && (u = u + `&jwt=${d}`), window.location.href = u
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				oG: function() {
					return u
				},
				sN: function() {
					return m.sN
				},
				v2: function() {
					return m.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				f = t.n(c),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("../react/common/components/Dropdown/index.tsx"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(_) {
					for (var T = 1; T < arguments.length; T++) {
						var D = arguments[T];
						for (var P in D) Object.prototype.hasOwnProperty.call(D, P) && (_[P] = D[P])
					}
					return _
				}, n.apply(this, arguments)
			}

			function s(_, T) {
				if (_ == null) return {};
				var D = r(_, T),
					P, y;
				if (Object.getOwnPropertySymbols) {
					var I = Object.getOwnPropertySymbols(_);
					for (y = 0; y < I.length; y++) P = I[y], !(T.indexOf(P) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, P) || (D[P] = _[P]))
				}
				return D
			}

			function r(_, T) {
				if (_ == null) return {};
				var D = {},
					P = Object.keys(_),
					y, I;
				for (I = 0; I < P.length; I++) y = P[I], !(T.indexOf(y) >= 0) && (D[y] = _[y]);
				return D
			}
			const d = (0, i.createStyledComponent)(({
				theme: _
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${_.radii[2]}px 0 0 ${_.radii[2]}px`,
					borderRight: `1px solid ${_.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${_.radii[2]}px ${_.radii[2]}px 0`,
					paddingRight: _.space[2],
					paddingLeft: _.space[2]
				},
				"& button": {
					color: (0, g.Yc)() ? _.colors.text : void 0
				},
				"& button:hover": {
					color: (0, g.Yc)() ? _.colors.text : void 0
				}
			}));

			function u(_) {
				let {
					menu: T,
					containerProps: D,
					disabled: P,
					disabledDropdown: y = P
				} = _, I = s(_, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: E
				} = (0, c.useI18n)();
				return o().createElement(d, n({}, D, {
					role: "group"
				}), o().createElement(a.zx, n({}, I, {
					disabled: P
				})), o().createElement(m.Lt, {
					trigger: o().createElement(a.zx, {
						type: I.type,
						"aria-haspopup": "menu",
						disabled: y
					}, o().createElement(l.J, {
						type: "caret-down",
						label: E("common.more"),
						size: 12
					})),
					menu: T
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				v: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("../react/common/hooks/useIntersectionObserver.ts");

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(m) {
					for (var g = 1; g < arguments.length; g++) {
						var n = arguments[g];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (m[s] = n[s])
					}
					return m
				}, f.apply(this, arguments)
			}

			function i(m) {
				const g = (0, e.useRef)(null),
					[n, s] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const d = g.current;
					if (d) {
						const {
							bottom: u
						} = d.getBoundingClientRect();
						u > window.innerHeight && s(!0)
					}
				}, []);
				const r = (0, c.S)(d => {
					for (const u of d) u.intersectionRatio < 1 && s(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const d = g.current;
					if (d && r) return r.observe(d), () => {
						r.unobserve(d)
					}
				}, [r]), o().createElement(a.ZC, f({
					role: "menu",
					innerRef: g,
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
				}, m))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				s: function() {
					return T
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(l);

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(D) {
					for (var P = 1; P < arguments.length; P++) {
						var y = arguments[P];
						for (var I in y) Object.prototype.hasOwnProperty.call(y, I) && (D[I] = y[I])
					}
					return D
				}, f.apply(this, arguments)
			}

			function i(D, P) {
				if (D == null) return {};
				var y = m(D, P),
					I, E;
				if (Object.getOwnPropertySymbols) {
					var h = Object.getOwnPropertySymbols(D);
					for (E = 0; E < h.length; E++) I = h[E], !(P.indexOf(I) >= 0) && (!Object.prototype.propertyIsEnumerable.call(D, I) || (y[I] = D[I]))
				}
				return y
			}

			function m(D, P) {
				if (D == null) return {};
				var y = {},
					I = Object.keys(D),
					E, h;
				for (h = 0; h < I.length; h++) E = I[h], !(P.indexOf(E) >= 0) && (y[E] = D[E]);
				return y
			}

			function g(D) {
				for (var P = 1; P < arguments.length; P++) {
					var y = arguments[P] != null ? Object(arguments[P]) : {},
						I = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(y).filter(function(E) {
						return Object.getOwnPropertyDescriptor(y, E).enumerable
					})), I.forEach(function(E) {
						n(D, E, y[E])
					})
				}
				return D
			}

			function n(D, P, y) {
				return P = s(P), P in D ? Object.defineProperty(D, P, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[P] = y, D
			}

			function s(D) {
				var P = r(D, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function r(D, P) {
				if (typeof D != "object" || D === null) return D;
				var y = D[Symbol.toPrimitive];
				if (y !== void 0) {
					var I = y.call(D, P || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(D)
			}
			const d = ({
					theme: D
				}) => {
					const P = {
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
						'&:hover:not(:disabled):not([aria-disabled="true"])': P,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': g({}, P, {
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
				u = (0, a.createComponent)(d, "a"),
				_ = (0, a.createComponent)(d, "button");

			function T(D) {
				let {
					disabled: P = !1
				} = D, y = i(D, ["disabled"]);
				const I = (0, l.useHistory)(),
					E = {
						role: "menuitem"
					};
				if ("href" in y && typeof y.href == "string") return o().createElement(u, f({
					"aria-disabled": P
				}, E, y, {
					href: P ? void 0 : y.href,
					onClick: L => {
						var S;
						if (P) return L.stopPropagation();
						L.preventDefault(), (S = y.onClick) === null || S === void 0 || S.call(y, L), I.push(y.href)
					}
				}));
				var h;
				return o().createElement(_, f({
					type: (h = y.type) !== null && h !== void 0 ? h : "button"
				}, E, y, {
					disabled: P
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/prop-types/index.js"),
				l = t.n(a),
				c = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const f = ({
				children: i
			}) => o().createElement(c.xu, {
				height: 411
			}, i);
			f.propTypes = {
				children: l().node
			}, v.Z = f
		},
		"../react/common/components/ModalManager.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				ZP: function() {
					return u
				},
				dd: function() {
					return r
				},
				vR: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react-redux/react-redux");
			const l = _ => _.application.modals;
			var c = t("../react/common/actions/modalActions.ts"),
				f = t("../../../../node_modules/swr/core/dist/index.mjs"),
				i = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(_) {
					for (var T = 1; T < arguments.length; T++) {
						var D = arguments[T];
						for (var P in D) Object.prototype.hasOwnProperty.call(D, P) && (_[P] = D[P])
					}
					return _
				}, m.apply(this, arguments)
			}
			const g = o().createContext(null);
			class n extends o().Component {
				render() {
					const {
						modals: T,
						closeModal: D
					} = this.props;
					return o().createElement(o().Fragment, null, T.map(({
						ModalComponent: P,
						props: y = {},
						id: I
					}) => {
						const E = () => {
							typeof y.onClose == "function" && y.onClose(), D(P)
						};
						return o().createElement(g.Provider, {
							key: I,
							value: {
								closeModal: E
							}
						}, o().createElement(f.J$, {
							value: i.ZP
						}, o().createElement(P, m({}, y, {
							isOpen: !0,
							closeModal: E
						}))))
					}))
				}
			}

			function s() {
				const _ = o().useContext(g);
				if (!_) throw new Error("useModalContext must be used within a ModalContext");
				return _
			}

			function r() {
				const _ = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...T) {
						return _(c.openModal(...T))
					}, [_]),
					closeModal: (0, e.useCallback)(function(...T) {
						return _(c.closeModal(...T))
					}, [_])
				}
			}
			var u = (0, a.connect)(_ => ({
				modals: l(_)
			}), c)(n)
		},
		"../react/common/components/Page.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				Z: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function l(c) {
				return o().createElement(a.T3, c)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return m
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
					return c
				},
				if: function() {
					return o
				},
				q6: function() {
					return a
				},
				w_: function() {
					return l
				},
				zl: function() {
					return i
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				a = "date-from",
				l = "date-to",
				c = "from",
				f = "to",
				i = "all",
				m = {
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
			let g = function(s) {
					return s.ADD_FILTER = "Add filter", s.EDIT_FILTER = "Edit filter", s.REMOVE_FILTER = "Remove filter", s.CHANGE_TIME = "Change time window", s.FEED_PAGE_FORWARD = "Activity feed next page", s.FEED_PAGE_BACKWARD = "Activity feed previous page", s.FEED_EXPAND_EVENT = "Activity feed expand event", s.FEED_CLOSE_EVENT = "Activity feed close event", s.FEED_EXPAND_MATCHES = "Activity feed expand matches", s.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", s.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", s.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", s.DOWNLOAD_FEED = "Activity feed download", s.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', s.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', s.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', s.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', s.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', s.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", s.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", s
				}({}),
				n = function(s) {
					return s.TIMESERIES = "Timeseries Chart", s.DISTRIBUTION = "Source Distribution Chart", s.TOP_N = "Top N", s.FILTER_BAR = "Filter Bar", s.SCORES_DISTRIBUTIONS = "Scores Distributions", s.INSIGHTS = "Insights", s.RL_HISTOGRAM = "Rate Limit Histogram", s
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Cf: function() {
					return g
				},
				hJ: function() {
					return m
				},
				ys: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var s = 1; s < arguments.length; s++) {
					var r = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(u) {
						return Object.getOwnPropertyDescriptor(r, u).enumerable
					})), d.forEach(function(u) {
						l(n, u, r[u])
					})
				}
				return n
			}

			function l(n, s, r) {
				return s = c(s), s in n ? Object.defineProperty(n, s, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = r, n
			}

			function c(n) {
				var s = f(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(n, s) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			let i = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const m = ({
					name: n,
					additionalData: s = {}
				}) => {
					o().sendEvent(n, a({}, s || {}))
				},
				g = () => {
					var n;
					return (n = Object.values(i)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				v: function() {
					return e
				}
			});
			let e = function(o) {
				return o.FIELD = "change field", o.OPERATOR = "change operator", o
			}({})
		},
		"../react/common/constants/analytics/botScoreSrc.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				EG: function() {
					return a
				},
				Me: function() {
					return f
				},
				Vv: function() {
					return c
				},
				sk: function() {
					return l
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let a = function(i) {
				return i.NOT_COMPUTED = "not_computed", i.MACHINE_LEARNING = "machine_learning", i.HEURISTICS = "heuristics", i.BEHAVIORAL_ANALYSIS = "behavioral_analysis", i.JS_FINGERPRINTING = "js_fingerprinting", i.VERIFIED_BOT = "verified_bot", i.CLOUDFLARE_SERVICE = "cloudflare_service", i
			}({});
			const l = {
					[a.NOT_COMPUTED]: "Not Computed",
					[a.MACHINE_LEARNING]: "Machine Learning",
					[a.HEURISTICS]: "Heuristics",
					[a.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[a.JS_FINGERPRINTING]: "JS Fingerprinting",
					[a.VERIFIED_BOT]: "Verified Bot",
					[a.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				c = i => Array.isArray(i) ? i.map(m => {
					var g;
					return (g = l[m]) !== null && g !== void 0 ? g : m
				}) : l[i],
				f = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [a.NOT_COMPUTED, a.MACHINE_LEARNING, a.HEURISTICS, a.BEHAVIORAL_ANALYSIS, a.JS_FINGERPRINTING, a.VERIFIED_BOT, a.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
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
					return g
				},
				Hw: function() {
					return f
				},
				Ed: function() {
					return c
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return d
				},
				hQ: function() {
					return i
				},
				SP: function() {
					return m
				}
			});
			let e = function(u) {
				return u.page_rules = "page_rules", u.automatic_platform_optimization = "automatic_platform_optimization", u
			}({});
			const o = "page_rules",
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
				c = {
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
				i = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e4,
					ubb_frequency: 1e4,
					ubb_price: .05
				},
				m = {
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
				s = t("../react/common/constants/billing/tracking.ts"),
				r = t("../react/common/constants/billing/workers.ts");
			const d = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				FP: function() {
					return e
				},
				Nl: function() {
					return c
				},
				SO: function() {
					return a
				},
				aA: function() {
					return o
				}
			});
			const e = {
					NOTIFICATION_CLICK: "Notification link click",
					CANCELED_SUBSCRIPTION: "Canceled subscription"
				},
				o = {
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
				c = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Dk: function() {
					return d
				},
				Dy: function() {
					return u
				},
				E_: function() {
					return f
				},
				Lv: function() {
					return _
				},
				S4: function() {
					return c
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return g
				},
				Y1: function() {
					return i
				},
				p6: function() {
					return m
				},
				q0: function() {
					return l
				},
				rg: function() {
					return T
				},
				sJ: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const l = "healthy",
				c = "degraded",
				f = "critical",
				i = "unknown",
				m = "not-monitored",
				g = o().from({
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
					f: g.FREE,
					p: g.PRO,
					b: g.BIZ
				},
				r = "marketing-pt",
				d = () => {
					const P = a.Z.get(r);
					if (!!P) return s[P]
				},
				u = ["gov"],
				_ = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				T = "banner-notification-interactions",
				D = null
		},
		"../react/common/constants/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Dk: function() {
					return e.Dk
				},
				Dy: function() {
					return e.Dy
				},
				E0: function() {
					return o.E0
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
					return o.WX
				},
				Y1: function() {
					return e.Y1
				},
				bi: function() {
					return o.bi
				},
				g$: function() {
					return o.g$
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
				o = t("../react/common/constants/billing/index.ts")
		},
		"../react/common/constants/roles.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", o.CLOUDFLARE_ACCESS = "Cloudflare Access", o.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", o.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", o.ADMINISTRATOR = "Administrator", o.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", o.ANALYTICS = "Analytics", o.API_GATEWAY = "API Gateway", o.API_GATEWAY_READ = "API Gateway Read", o.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", o.BILLING = "Billing", o.BOT_MANAGEMENT = "Bot Management", o.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", o.CACHE_DOMAIN_PURGE = "Cache Domain Purge", o.CACHE_PURGE = "Cache Purge", o.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", o.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", o.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", o.EMAIL_SECURITY_ANALYST = "Email Security Analyst", o.EMAIL_SECURITY_READONLY = "Email Security Readonly", o.EMAIL_SECURITY_REPORTING = "Email Security Reporting", o.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", o.CLOUDFORCE_ONE_READ = "Cloudforce One Read", o.DNS = "DNS", o.DOMAIN_ADMINISTRATOR = "Domain Administrator", o.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", o.DOMAIN_API_GATEWAY = "Domain API Gateway", o.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", o.DOMAIN_DNS = "Domain DNS", o.DOMAIN_PAGE_SHIELD = "Domain Page Shield", o.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", o.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", o.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", o.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", o.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", o.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", o.HTTP_APPLICATIONS = "HTTP Applications", o.HTTP_APPLICATIONS_READ = "HTTP Applications Read", o.CLOUDFLARE_IMAGES = "Cloudflare Images", o.LOAD_BALANCER = "Load Balancer", o.LOG_SHARE = "Log Share", o.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", o.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", o.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", o.PAGE_SHIELD = "Page Shield", o.PAGE_SHIELD_READ = "Page Shield Read", o.HYPERDRIVE_ADMIN = "Hyperdrive Admin", o.HYPERDRIVE_READONLY = "Hyperdrive Readonly", o.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", o.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", o.LOG_SHARE_READER = "Log Share Reader", o.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", o.CLOUDFLARE_STREAM = "Cloudflare Stream", o.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", o.CLOUDFLARE_DEX = "Cloudflare DEX", o.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", o.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", o.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", o.TRANSFORM_RULES = "Transform Rules", o.TRUST_AND_SAFETY = "Trust and Safety", o.TURNSTILE = "Turnstile", o.TURNSTILE_READ = "Turnstile Read", o.VECTORIZE_ADMIN = "Vectorize Admin", o.VECTORIZE_READONLY = "Vectorize Readonly", o.FIREWALL = "Firewall", o.WAITING_ROOM_ADMIN = "Waiting Room Admin", o.WAITING_ROOM_READ = "Waiting Room Read", o.WORKERS_ADMIN = "Workers Admin", o.ZARAZ_ADMIN = "Zaraz Admin", o.ZARAZ_EDIT = "Zaraz Edit", o.ZARAZ_READONLY = "Zaraz Readonly", o.ZONE_VERSIONING = "Zone Versioning", o.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", o.ZONE_VERSIONING_READ = "Zone Versioning Read", o.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", o.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", o.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", o.BRAND_PROTECTION = "Brand Protection", o
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				QK: function() {
					return e
				},
				dy: function() {
					return o
				},
				sO: function() {
					return a
				},
				x4: function() {
					return l
				}
			});
			let e = function(c) {
				return c.DELETE = "delete", c.CREATE = "create", c.GET = "get", c.UPDATE = "update", c
			}({});
			const o = {
					http_config_settings: "configuration",
					http_request_dynamic_redirect: "redirect",
					http_request_cache_settings: "cache",
					http_request_origin: "origin",
					http_request_late_transform: "modify request header",
					http_request_transform: "rewrite url",
					http_response_headers_transform: "modify response header",
					http_response_compression: "compression",
					http_ratelimit: "rate limiting",
					http_request_firewall_custom: "custom",
					http_request_firewall_managed: "managed"
				},
				a = (c, f, i = !1) => {
					var m;
					return `${f} ${(m=o[c])!==null&&m!==void 0?m:c} ${i?"ruleset":"rule"}${f===e.GET?"s":""}`
				},
				l = () => {
					var c;
					return (c = Object.keys(o).reduce((f, i) => {
						const m = Object.values(e).reduce((g, n) => (g.push(a(i, n)), g.push(a(i, n, !0)), g), []);
						return f.concat(m)
					}, [])) === null || c === void 0 ? void 0 : c.flat()
				}
		},
		"../react/common/hooks/suspenseHelpers.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				bt: function() {
					return i
				},
				nW: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const l = "suspenseComplete";

			function c() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(l))
				}, [])
			}

			function f(m) {
				(0, a.OR)(l, () => {
					window.setTimeout(m, 0)
				}, {
					target: window
				})
			}

			function i(...m) {
				const [g, n] = m;
				o().useLayoutEffect(g, n), f(g)
			}
		},
		"../react/common/hooks/useAccountId.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				F: function() {
					return c
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(a);

			function c() {
				var f;
				const {
					accountId: i
				} = (0, a.useParams)(), m = (0, e.p4)(o.D0);
				if (i === void 0 && !m) throw new Error("Account ID not found in URL params");
				return (f = i) !== null && f !== void 0 ? f : m == null ? void 0 : m.id
			}
		},
		"../react/common/hooks/useActiveState.ts": function(W, v, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				o = t("webpack/sharing/consume/default/react-redux/react-redux"),
				a = t.n(o),
				l = t("../react/common/selectors/commonSelectors.ts");
			const c = f => {
				const i = (0, o.useDispatch)();
				return [(0, o.useSelector)((0, l.cZ)(f)), n => {
					i((0, e.I)(f, n))
				}]
			};
			v.Z = c
		},
		"../react/common/hooks/useCachedState.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				j: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function l(c, {
				key: f,
				cache: i = a.E,
				ttl: m
			} = {}) {
				var g;
				const n = f !== void 0 && i.get(f),
					[s, r] = (0, e.useState)((g = n) !== null && g !== void 0 ? g : c);
				return [s, u => {
					r(_ => (u instanceof Function && (u = u(_)), f !== void 0 && i.set(f, u, m), u))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(W, v, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(a) {
				return (0, e.qf)(a)
			}
			v.Z = o
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function a(l, {
				root: c,
				rootMargin: f,
				threshold: i
			} = {}) {
				const m = (0, e.useRef)(null);

				function g() {
					return m.current === null && (m.current = new IntersectionObserver(l, {
						root: c,
						rootMargin: f,
						threshold: i
					})), m.current
				}
				return (0, e.useEffect)(() => (m.current = new IntersectionObserver(l, {
					root: c,
					rootMargin: f,
					threshold: i
				}), () => {
					var n;
					(n = m.current) === null || n === void 0 || n.disconnect()
				}), [l, c, f, i]), g()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function a(l) {
				const c = (0, e.useRef)(l);
				return (0, e.useEffect)(() => {
					c.current = l
				}, [l]), c.current
			}
			v.Z = a
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(W, v, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(l) {
				return (0, e.p4)(c => (0, o.rV)(c, l))
			}
			v.Z = a
		},
		"../react/common/middleware/sparrow/errors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Uh: function() {
					return c
				},
				ez: function() {
					return l
				},
				oV: function() {
					return f
				}
			});

			function e(i, m, g) {
				return m = o(m), m in i ? Object.defineProperty(i, m, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[m] = g, i
			}

			function o(i) {
				var m = a(i, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function a(i, m) {
				if (typeof i != "object" || i === null) return i;
				var g = i[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(i, m || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(i)
			}
			class l extends Error {
				constructor(m, g) {
					super(g);
					e(this, "eventName", void 0), this.eventName = m, this.name = "SparrowValidationError"
				}
			}
			class c extends l {
				constructor(m) {
					super(m, `Event not allowed: "${m}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class f extends l {
				constructor(m, g) {
					super(m, `Found invalid properties on event: "${m}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = g
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AC: function() {
					return We
				},
				Au: function() {
					return ue
				},
				B: function() {
					return Re
				},
				B3: function() {
					return Pe
				},
				BG: function() {
					return S
				},
				Bp: function() {
					return ze
				},
				CV: function() {
					return bt
				},
				D0: function() {
					return I
				},
				DT: function() {
					return k
				},
				EL: function() {
					return Z
				},
				EU: function() {
					return V
				},
				GE: function() {
					return Ct
				},
				Ko: function() {
					return q
				},
				Kx: function() {
					return b
				},
				Le: function() {
					return w
				},
				O4: function() {
					return He
				},
				Ou: function() {
					return $
				},
				Py: function() {
					return ft
				},
				QI: function() {
					return lt
				},
				Qf: function() {
					return h
				},
				RO: function() {
					return Te
				},
				T3: function() {
					return _t
				},
				T8: function() {
					return L
				},
				UX: function() {
					return B
				},
				VP: function() {
					return st
				},
				Xo: function() {
					return Xe
				},
				Xu: function() {
					return ce
				},
				Yi: function() {
					return ht
				},
				Yj: function() {
					return ie
				},
				Zu: function() {
					return X
				},
				bC: function() {
					return z
				},
				f8: function() {
					return Q
				},
				hI: function() {
					return dt
				},
				hN: function() {
					return O
				},
				hX: function() {
					return we
				},
				iq: function() {
					return ve
				},
				nE: function() {
					return N
				},
				oD: function() {
					return C
				},
				oI: function() {
					return U
				},
				oJ: function() {
					return Y
				},
				tM: function() {
					return x
				},
				uF: function() {
					return le
				},
				ut: function() {
					return tt
				},
				vU: function() {
					return ut
				},
				wQ: function() {
					return de
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				a = t.n(o),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				c = t.n(l),
				f = t("../../../../node_modules/reselect/lib/index.js"),
				i = t("../../../../node_modules/moment/moment.js"),
				m = t.n(i),
				g = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				s = t("../react/common/selectors/userSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				d = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/common/constants/roles.ts"),
				_ = t("../react/common/utils/hasRole.ts");

			function T(G) {
				for (var se = 1; se < arguments.length; se++) {
					var Ee = arguments[se] != null ? Object(arguments[se]) : {},
						Ie = Object.keys(Ee);
					typeof Object.getOwnPropertySymbols == "function" && Ie.push.apply(Ie, Object.getOwnPropertySymbols(Ee).filter(function(Se) {
						return Object.getOwnPropertyDescriptor(Ee, Se).enumerable
					})), Ie.forEach(function(Se) {
						D(G, Se, Ee[Se])
					})
				}
				return G
			}

			function D(G, se, Ee) {
				return se = P(se), se in G ? Object.defineProperty(G, se, {
					value: Ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[se] = Ee, G
			}

			function P(G) {
				var se = y(G, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function y(G, se) {
				if (typeof G != "object" || G === null) return G;
				var Ee = G[Symbol.toPrimitive];
				if (Ee !== void 0) {
					var Ie = Ee.call(G, se || "default");
					if (typeof Ie != "object") return Ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(G)
			}
			const I = G => {
					const se = le(G);
					return se == null ? void 0 : se.account
				},
				E = G => {
					const se = (0, s.PR)(G);
					if (se) {
						const Ee = se.id;
						return G.accountAccess[Ee] || {}
					}
					return {}
				},
				h = G => G.accountsDetailed,
				L = (0, n.P1)("accountsDetailed", h),
				S = G => G.memberships,
				N = (0, f.P1)((0, n.P1)("memberships", S), d.U, (G, se) => !!se && !!G ? G.filter(Ee => se.includes(Ee.id)) : G),
				O = G => G.accountFlags && G.accountFlags.data,
				b = G => G.accountFlags,
				w = (G, se, Ee) => {
					const Ie = O(G);
					return !Ie || !Ie[se] ? null : Ie[se][Ee]
				},
				M = G => G.accountFlags.isRequesting,
				U = (G, ...se) => a()(G, ["accountFlagsChanges", "data", ...se]),
				Q = G => G.accountFlagsChanges.isRequesting,
				re = (0, f.P1)(O, b, (G, se) => ({
					data: G,
					meta: se
				})),
				me = (G, se, Ee) => !!(isEnterpriseSSEnabledSelector(G) && w(G, se, Ee)),
				ce = G => G.membership,
				le = (0, n.P1)("membership", ce),
				j = (0, f.P1)(le, ce, (G, se) => ({
					data: G,
					meta: se
				})),
				$ = G => {
					const {
						roles: se = []
					} = le(G) || {};
					return Boolean(se.find(Ee => Ee === "Super Administrator - All Privileges" || Ee === "Billing"))
				},
				x = G => {
					const se = [u.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, _.n)(G, se)
				},
				C = G => {
					const se = E(G),
						Ee = be.getMemberships(G) ? c().asMutable(be.getMemberships(G)) : [];
					if (!!Ee) return c().from(Ee.map(Ie => T({}, Ie, {
						lastSeen: se[Ie.account.id] ? se[Ie.account.id].lastSeen : null
					})).sort((Ie, Se) => Ie.lastSeen && Se.lastSeen ? Se.lastSeen - Ie.lastSeen : 0))
				},
				B = G => G.filteredMemberships,
				Z = (0, n.P1)("filteredMemberships", B),
				X = (0, f.P1)(le, G => G == null ? void 0 : G.permissions),
				ie = (0, f.P1)(X, G => (0, e.Z)(se => {
					var Ee;
					return (Ee = G == null ? void 0 : G[se]) !== null && Ee !== void 0 ? Ee : {
						read: !1,
						edit: !1
					}
				})),
				q = (0, f.P1)(le, G => G == null ? void 0 : G.policies),
				k = (G, se, Ee) => {
					let Ie = be.getMembership(G);
					if (!Ie) {
						const Se = be.getMemberships(G);
						if (!Se || !se) return !1;
						Ie = Se.find(xe => xe.account.id === se)
					}
					if (!Ie || !Ee) return !1;
					try {
						return Ee(Ie.permissions)
					} catch {
						return !1
					}
				},
				K = G => {
					var se, Ee;
					return (se = (Ee = I(G)) === null || Ee === void 0 ? void 0 : Ee.meta.has_pro_zones) !== null && se !== void 0 ? se : !1
				},
				V = G => {
					var se, Ee;
					return (se = (Ee = I(G)) === null || Ee === void 0 ? void 0 : Ee.meta.has_business_zones) !== null && se !== void 0 ? se : !1
				},
				z = G => V(G) || K(G),
				ee = (G, se) => {
					const Ee = pe(G, se);
					return !!Ee && !!Ee.enabled
				},
				pe = (G, se) => {
					const Ee = be.getMembership(G),
						Ie = Ee && Ee.account;
					return Ie && Ie.legacy_flags && Ie.legacy_flags[se]
				},
				de = G => ee(G, "custom_pages"),
				_e = G => !!G && G["webhooks.webhooks.enabled"],
				ye = G => w(G, "bots", "enabled"),
				Le = G => w(G, "billing", "annual_subscriptions_enable"),
				Te = G => G ? Boolean(w(G, "ConstellationAI", "v2_ui")) : !1,
				we = G => G ? Boolean(w(G, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Re = G => G ? Boolean(w(G, "AIgateway", "enabled")) : !1,
				Ze = G => pe(G, "enterprise_zone_quota"),
				H = G => {
					const se = Ze(G);
					return !se || !se.available ? -1 : se.available
				},
				ve = G => G.accountMembers,
				Pe = (0, n.P1)("accountMembers", ve),
				He = G => G.accountMember && G.accountMember.isRequesting,
				et = G => G.accountRoles,
				We = (0, n.P1)("accountRoles", et),
				ft = (G, se) => {
					const Ee = be.getMemberships(G),
						Ie = Ee && Ee.find(Ye => Ye.account.id === se);
					if (Ie) return Ie.account.name.replace(" Account", " account");
					const Se = be.getMembership(G),
						xe = Se && Se.account;
					return xe && xe.id === se ? xe.name : null
				},
				tt = (G, se) => {
					const Ee = be.getMemberships(G),
						Ie = Ee && Ee.find(Ye => Ye.account.id === se);
					if (Ie) return Ie.account.settings.access_approval_expiry;
					const Se = be.getMembership(G),
						xe = Se && Se.account;
					return xe && xe.id === se ? xe.settings.access_approval_expiry : null
				},
				Xe = (G, se) => {
					const Ee = tt(G, se);
					return Ee ? m().utc(Ee).isAfter() : !1
				},
				_t = (G, se, Ee) => {
					const Ie = tt(G, se);
					let Se = Ie ? m().utc(Ie) : null;
					return !Se || !Se.isAfter() ? "" : Se && Se.year() === 3e3 ? Ee("account.access_approval.card_expiration_forever") : Ee("account.access_approval.card_expiration_text", {
						expiryTimestamp: Se.local().format(g.U.DateTime)
					})
				},
				Y = G => G && G.member && G.member.edit,
				ue = (G, se) => {
					const Ee = be.getMembership(G),
						Ie = Ee && Ee.account;
					return Ie ? Ie.id !== se : !1
				},
				Ce = G => G.dpa,
				Be = (0, n.P1)("dpa", Ce),
				je = G => G.webhook,
				Ne = G => G.webhooks,
				Je = (0, n.P1)("webhook", Ne),
				st = G => G.accountLegoContract,
				nt = (0, n.P1)("accountLegoContract", st),
				lt = G => {
					const se = nt(G);
					return (se == null ? void 0 : se.lego_state) ? se.lego_state : ""
				},
				yt = G => lt(G) === "signed",
				Ct = G => st(G).isRequesting,
				ut = G => {
					const se = nt(G);
					return se && se.subscription_type ? se.subscription_type : ""
				},
				ke = G => ut(G) !== "",
				be = {
					getMembership: le,
					getMemberships: N,
					getFilteredMemberships: Z,
					getAccountMembers: Pe,
					getAccountRoles: We
				},
				ze = G => G.accountSingle,
				ht = (0, n.P1)("accountSingle", ze),
				dt = G => {
					const se = [u.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, u.V.ADMINISTRATOR];
					return (0, _.n)(G, se)
				},
				bt = G => (0, _.n)(G, [u.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/commonSelectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				FX: function() {
					return a
				},
				QG: function() {
					return o
				},
				TH: function() {
					return l
				},
				cZ: function() {
					return e
				}
			});

			function e(c) {
				const f = `__ACTIVE__${c}`;
				return i => {
					const m = i.application;
					return m && m.active[f]
				}
			}

			function o(c) {
				const f = `__TOGGLE__${c}`;
				return i => {
					const m = i.application;
					return m && m.toggles[f]
				}
			}

			function a(c) {
				return c && c.paginationData && c.paginationData.info && c.paginationData.info.total_count ? c.paginationData.info.total_count : 0
			}
			const l = c => c.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$f: function() {
					return u
				},
				AD: function() {
					return c
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return I
				},
				Ci: function() {
					return X
				},
				DA: function() {
					return we
				},
				E6: function() {
					return r
				},
				Gy: function() {
					return ye
				},
				Hq: function() {
					return _e
				},
				Ms: function() {
					return L
				},
				Nb: function() {
					return de
				},
				Pj: function() {
					return Te
				},
				Q2: function() {
					return f
				},
				Qq: function() {
					return z
				},
				Td: function() {
					return P
				},
				Z: function() {
					return k
				},
				a: function() {
					return y
				},
				a5: function() {
					return V
				},
				c7: function() {
					return ee
				},
				du: function() {
					return m
				},
				ec: function() {
					return Q
				},
				f: function() {
					return pe
				},
				hL: function() {
					return K
				},
				ji: function() {
					return ie
				},
				jo: function() {
					return S
				},
				l9: function() {
					return Ze
				},
				lI: function() {
					return l
				},
				p1: function() {
					return T
				},
				pK: function() {
					return Le
				},
				pf: function() {
					return n
				},
				qR: function() {
					return D
				},
				rV: function() {
					return i
				},
				u1: function() {
					return g
				},
				w4: function() {
					return s
				},
				yD: function() {
					return q
				}
			});
			var e = t("../react/utils/url.ts");

			function o(H, ve) {
				return H && H[ve]
			}
			const a = H => !l(H).isRequesting;

			function l(H) {
				return H.entitlements.zone
			}

			function c(H) {
				return l(H).data
			}
			const f = H => {
				var ve, Pe;
				return ((ve = l(H).paginationData) === null || ve === void 0 || (Pe = ve.options) === null || Pe === void 0 ? void 0 : Pe.editedDate) || {}
			};

			function i(H, ve) {
				const Pe = c(H);
				return Pe ? o(Pe, ve) : void 0
			}
			const m = (H, ve) => i(H, ve) === !0;

			function g(H) {
				return H.entitlements.account
			}

			function n(H) {
				return g(H).data
			}
			const s = H => {
				var ve, Pe;
				return ((ve = g(H).paginationData) === null || ve === void 0 || (Pe = ve.options) === null || Pe === void 0 ? void 0 : Pe.editedDate) || {}
			};

			function r(H) {
				return !g(H).isRequesting
			}

			function d(H, ve) {
				const Pe = n(H);
				return Pe ? o(Pe, ve) : void 0
			}

			function u(H, ve) {
				return d(H, ve) === !0
			}

			function _(H, ve) {
				return ve.every(Pe => u(H, Pe))
			}

			function T(H) {
				return u(H, "contract.customer_enabled")
			}

			function D(H) {
				return u(H, "contract.self_service_allowed")
			}

			function P(H) {
				return u(H, "billing.partners_managed")
			}
			const y = H => T(H) && D(H),
				I = H => u(H, "enterprise.ecp_allowed");

			function E(H) {
				return h(H) || u(H, "argo.allow_smart_routing") || u(H, "argo.allow_tiered_caching") || u(H, "rate_limiting.enabled") || u(H, "ctm.enabled") || u(H, "workers.enabled") || u(H, "workers.kv_store.enabled") || u(H, "stream.enabled")
			}
			const h = H => m(H, "argo.allow_smart_routing") || m(H, "argo.allow_tiered_caching"),
				L = H => u(H, "zone.cname_setup_allowed") || u(H, "zone.partial_setup_allowed") || m(H, "zone.partial_setup_allowed"),
				S = H => u(H, "argo.allow_smart_routing") || m(H, "argo.allow_smart_routing"),
				N = H => u(H, "argo.allow_tiered_caching") || m(H, "argo.allow_tiered_caching"),
				O = H => S(H) || N(H),
				b = H => u(H, "ctm.enabled"),
				w = H => {
					const ve = d(H, "ctm.load_balancers");
					return typeof ve == "number" ? ve : 0
				},
				M = H => {
					const ve = d(H, "ctm.pools");
					return typeof ve == "number" ? ve : 0
				},
				U = H => {
					const ve = d(H, "ctm.origins");
					return typeof ve == "number" ? ve : 0
				},
				Q = H => u(H, "workers.enabled"),
				re = H => u(H, "stream.enabled"),
				me = H => {
					const ve = d(H, "access.users_allowed");
					return typeof ve == "number" ? ve : 0
				},
				ce = H => me(H) > 0,
				le = H => {
					const ve = i(H, "dedicated_certificates");
					return typeof ve == "number" ? ve : 0
				},
				j = H => le(H) > 0,
				$ = H => {
					const ve = i(H, "rate_limiting.max_rules");
					return typeof ve == "number" ? ve : 0
				},
				x = H => u(H, "rate_limiting.enabled"),
				C = H => {
					const ve = i(H, "page_rules");
					return typeof ve == "number" ? ve : 0
				},
				B = H => C(H) > 0,
				Z = H => {
					const ve = d(H, "dns_firewall.max_clusters_allowed");
					return typeof ve == "number" ? ve : 0
				},
				X = H => Z(H) > 0,
				ie = H => m(H, "zone.advanced_certificate_manager") || u(H, "zone.advanced_certificate_manager"),
				q = H => i(H, "authoritative_dns.proxy_record_allowed") === !1 || d(H, "authoritative_dns.proxy_record_allowed") === !1,
				k = H => u(H, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				K = H => i(H, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				V = H => {
					const ve = i(H, "authoritative_dns.min_record_ttl_allowed");
					return typeof ve == "number" && ve > 1 ? ve : 60
				},
				z = H => u(H, "foundation_dns.advanced_nameservers_allowed") || m(H, "foundation_dns.advanced_nameservers_allowed"),
				ee = H => u(H, "account_custom_ns.allowed"),
				pe = (H, ve) => ((0, e.el)(window.location.pathname) ? i : d)(H, ve),
				de = H => ((0, e.el)(window.location.pathname) ? c : n)(H),
				_e = H => u(H, "authoritative_dns.multi_provider_allowed") || m(H, "authoritative_dns.multi_provider_allowed"),
				ye = H => m(H, "authoritative_dns.cname_flattening_allowed"),
				Le = H => u(H, "secondary_dns.secondary_overrides") || m(H, "secondary_dns.secondary_overrides"),
				Te = H => u(H, "authoritative_dns.custom_soa_allowed") || m(H, "authoritative_dns.custom_soa_allowed"),
				we = H => u(H, "authoritative_dns.custom_ns_ttl_allowed") || m(H, "authoritative_dns.custom_ns_ttl_allowed"),
				Re = H => u(H, "secondary.create_zone"),
				Ze = H => z(H) || ee(H) || _e(H) || Re(H) || Le(H) || Te(H) || we(H)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				r: function() {
					return c
				},
				v: function() {
					return f
				}
			});
			var e = t("../react/utils/i18n.ts"),
				o = t("../../../common/intl/intl-types/src/index.ts"),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				l = t("../react/utils/bootstrap.ts");
			const c = i => {
				if ((0, l.gm)()) return a.Z.set(e.ly, e.ZW), e.ZW;
				const m = i.userCommPreferences.data;
				if (m == null ? void 0 : m["language-locale"]) return (0, e.i_)(m["language-locale"]), m["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const g = (0, e.Kd)();
					return f(g) ? g : e.ZW
				}
			};

			function f(i) {
				const m = Object.keys(o.Q).find(g => o.Q[g] === i);
				return !!i && typeof i == "string" && m != null && (0, e.S8)(m)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$8: function() {
					return c
				},
				BG: function() {
					return g
				},
				BY: function() {
					return y
				},
				GP: function() {
					return u
				},
				GU: function() {
					return I
				},
				PR: function() {
					return a
				},
				h$: function() {
					return D
				},
				h8: function() {
					return n
				},
				kk: function() {
					return T
				},
				l8: function() {
					return i
				},
				mV: function() {
					return _
				},
				vW: function() {
					return f
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const o = E => E.user,
				a = (0, e.P1)("user", o),
				l = E => {
					var h;
					return (h = a(E)) === null || h === void 0 ? void 0 : h.email.endsWith("@cloudflare.com")
				},
				c = E => {
					var h;
					return !!((h = a(E)) === null || h === void 0 ? void 0 : h.id)
				},
				f = E => {
					const h = a(E);
					if (!!h) return h.first_name && h.last_name ? `${h.first_name} ${h.last_name}` : h.email
				},
				i = E => {
					const h = a(E);
					return h && h.has_enterprise_zones
				},
				m = E => E.userCommPreferences,
				g = (0, e.P1)("userCommPreferences", m),
				n = E => {
					const h = a(E);
					return h && h.email_verified
				},
				s = E => {
					const h = g(E);
					return h && h.preferences.marketing_communication
				},
				r = E => E.userDetails,
				d = (0, e.P1)("userDetails", r),
				u = E => {
					const h = d(E);
					return h && h["2FA-RECOVERY"] === "scheduled"
				},
				_ = E => {
					const h = d(E);
					return h && h["2FA-RECOVERY"] === "interrupted"
				},
				T = E => {
					const h = d(E);
					return h == null ? void 0 : h["NEW-USER-EMAIL"]
				},
				D = E => E.gates.assignments,
				P = (E, h) => E && E[h];

			function y(E, h) {
				const L = D(E);
				return L ? P(L, h) : void 0
			}
			const I = (E, h) => y(E, h) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$4: function() {
					return L
				},
				$t: function() {
					return We
				},
				A4: function() {
					return T
				},
				Cu: function() {
					return D
				},
				DQ: function() {
					return z
				},
				Ej: function() {
					return N
				},
				FH: function() {
					return y
				},
				ID: function() {
					return x
				},
				Ko: function() {
					return Te
				},
				Le: function() {
					return de
				},
				Ly: function() {
					return X
				},
				M3: function() {
					return ve
				},
				N8: function() {
					return H
				},
				NY: function() {
					return K
				},
				Ns: function() {
					return B
				},
				Ox: function() {
					return Xe
				},
				P4: function() {
					return O
				},
				RO: function() {
					return j
				},
				Tr: function() {
					return Le
				},
				U: function() {
					return P
				},
				Ug: function() {
					return E
				},
				V6: function() {
					return Pe
				},
				WR: function() {
					return _t
				},
				Xg: function() {
					return _
				},
				ZB: function() {
					return pe
				},
				_y: function() {
					return C
				},
				cU: function() {
					return we
				},
				cg: function() {
					return V
				},
				d2: function() {
					return re
				},
				il: function() {
					return Z
				},
				jN: function() {
					return w
				},
				jg: function() {
					return q
				},
				kC: function() {
					return S
				},
				kf: function() {
					return He
				},
				ko: function() {
					return le
				},
				mK: function() {
					return ft
				},
				nA: function() {
					return u
				},
				oY: function() {
					return b
				},
				qM: function() {
					return _e
				},
				rq: function() {
					return k
				},
				tS: function() {
					return h
				},
				tU: function() {
					return U
				},
				vB: function() {
					return tt
				},
				vM: function() {
					return M
				},
				wH: function() {
					return I
				},
				wn: function() {
					return ee
				},
				xU: function() {
					return Q
				},
				xw: function() {
					return ye
				},
				z5: function() {
					return $
				},
				zO: function() {
					return Re
				},
				zW: function() {
					return et
				},
				zh: function() {
					return me
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				a = t("../../../../node_modules/lodash/get.js"),
				l = t.n(a),
				c = t("../../../../node_modules/moment/moment.js"),
				f = t.n(c),
				i = t("../react/common/constants/billing/index.ts");

			function m(Y) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var Ce = arguments[ue] != null ? Object(arguments[ue]) : {},
						Be = Object.keys(Ce);
					typeof Object.getOwnPropertySymbols == "function" && Be.push.apply(Be, Object.getOwnPropertySymbols(Ce).filter(function(je) {
						return Object.getOwnPropertyDescriptor(Ce, je).enumerable
					})), Be.forEach(function(je) {
						g(Y, je, Ce[je])
					})
				}
				return Y
			}

			function g(Y, ue, Ce) {
				return ue = n(ue), ue in Y ? Object.defineProperty(Y, ue, {
					value: Ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[ue] = Ce, Y
			}

			function n(Y) {
				var ue = s(Y, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function s(Y, ue) {
				if (typeof Y != "object" || Y === null) return Y;
				var Ce = Y[Symbol.toPrimitive];
				if (Ce !== void 0) {
					var Be = Ce.call(Y, ue || "default");
					if (typeof Be != "object") return Be;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(Y)
			}
			const r = (0, o.P1)("zone", Y => Y.zone),
				d = Y => {
					var ue;
					return (ue = Y.zoneVersioning) === null || ue === void 0 ? void 0 : ue.zoneVersionSelector
				},
				u = (0, e.P1)(r, d, (Y, ue) => {
					var Ce, Be, je;
					let Ne;
					if (Array.isArray(Y) && Y.length === 1 ? Ne = Y[0] : Y && !Array.isArray(Y) && (Ne = Y), !Ne) return;
					const Je = !!(ue == null ? void 0 : ue.enabled);
					return m({}, Ne, Ne.name && {
						name: Je ? ue.rootZoneName : Ne.name
					}, {
						versioning: {
							enabled: Je,
							isRoot: !((Ce = Ne.name) === null || Ce === void 0 ? void 0 : Ce.endsWith(".config.cfdata.org")),
							version: Je ? ue.selectedVersion : 0,
							rootZoneId: Je ? ue.rootZoneId : (Be = (je = Ne) === null || je === void 0 ? void 0 : je.id) !== null && Be !== void 0 ? Be : ""
						}
					})
				}),
				_ = Y => Y.zone,
				T = (0, e.P1)(u, _, (Y, ue) => ({
					data: Y,
					meta: ue
				})),
				D = Y => {
					var ue, Ce;
					return (ue = (Ce = u(Y)) === null || Ce === void 0 ? void 0 : Ce.id) !== null && ue !== void 0 ? ue : ""
				},
				P = Y => Y.zones,
				y = Y => Y.zonesRoot,
				I = Y => Y.zonesAccount,
				E = (0, o.P1)("zones", P),
				h = (0, o.P1)("zonesRoot", y),
				L = (0, o.P1)("zonesAccount", I);

			function S(Y) {
				const ue = u(Y);
				return ue ? ue.created_on : null
			}

			function N(Y, ue, Ce) {
				const Be = S(Y);
				if (!Be) return;
				const je = f().duration(ue, Ce),
					Ne = new Date(Be),
					Je = new Date(new Date().getTime() - je.asMilliseconds());
				return Ne.getTime() > Je.getTime()
			}

			function O(Y) {
				const ue = u(Y);
				return ue ? ue.status : null
			}

			function b(Y) {
				const ue = u(Y);
				return ue ? ue.type : null
			}

			function w(Y) {
				return (Y == null ? void 0 : Y.plan_pending) ? Y == null ? void 0 : Y.plan_pending : Y == null ? void 0 : Y.plan
			}

			function M(Y) {
				const ue = u(Y);
				if (!ue) return;
				const Ce = w(ue);
				return Ce && Ce.legacy_id
			}

			function U(Y, ue) {
				const Ce = w(Y);
				return !!Ce && i.Gs.indexOf(Ce.legacy_id) >= i.Gs.indexOf(ue)
			}

			function Q(Y) {
				return !!Y && Y.status === "initializing"
			}

			function re(Y) {
				return !!Y && Y.status === "pending"
			}

			function me(Y) {
				return !!Y && Y.status === "active"
			}

			function ce(Y, ue) {
				if (!Y) return !1;
				const Ce = w(Y);
				return !!Ce && Ce.legacy_id === ue
			}

			function le(Y) {
				return ce(Y, "enterprise")
			}
			const j = Y => le(u(Y));

			function $(Y) {
				return ce(Y, "business")
			}
			const x = Y => $(u(Y));

			function C(Y) {
				return ce(Y, "pro")
			}

			function B(Y) {
				return ce(Y, "free")
			}
			const Z = Y => B(u(Y));

			function X(Y) {
				return !le(Y)
			}

			function ie(Y) {
				return Y && Y.owner
			}

			function q(Y, ue) {
				const Ce = ie(ue);
				return !!Ce && Ce.type === "user" && Ce.id === Y.id
			}

			function k(Y) {
				const ue = u(Y);
				return !!ue && ue.type === "partial"
			}

			function K(Y) {
				const ue = u(Y);
				return !!ue && ue.type === "secondary"
			}
			const V = Y => {
					var ue;
					const Ce = u(Y);
					return !!(Ce == null ? void 0 : Ce.host) && !!((ue = Ce.plan) === null || ue === void 0 ? void 0 : ue.externally_managed)
				},
				z = Y => {
					const ue = E(Y);
					return ue && ue.some(le)
				},
				ee = (Y, ue) => {
					const Ce = u(Y);
					return Ce && Ce.betas ? Ce.betas.includes(ue) : !1
				},
				pe = (Y, ...ue) => l()(Y, ["zoneFlags", "data", ...ue]),
				de = (Y, ...ue) => l()(Y, ["accountFlags", "data", ...ue]),
				_e = Y => Y.accountFlags.isRequesting,
				ye = Y => Y.zoneFlags.isRequesting,
				Le = (Y, ...ue) => l()(Y, ["zoneFlagsChanges", "data", ...ue]),
				Te = Y => Y.zoneFlagsChanges.isRequesting,
				we = Y => Y.zoneFlags && Y.zoneFlags.data,
				Re = Y => Y.zoneFlags,
				Ze = (0, e.P1)(we, Re, (Y, ue) => ({
					data: Y,
					meta: ue
				})),
				H = (0, o.P1)("abuseUrls", Y => Y.overview.abuseUrls),
				ve = Y => {
					const ue = u(Y);
					return ue ? `/${ue.account.id}/${ue.name}` : null
				},
				Pe = Y => Y.zoneMarketingCampaigns,
				He = Y => Y.overview.zoneBlocks.data,
				et = Y => Y.overview.zoneBlocks.isRequesting,
				We = Y => Y.overview.zoneBlocks.hasData,
				ft = Y => {
					var ue, Ce;
					return (Y == null || (ue = Y.overview.zoneBlocks) === null || ue === void 0 || (Ce = ue.paginationData) === null || Ce === void 0 ? void 0 : Ce.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				tt = Y => Y.overview.zoneBlocksReview.isRequesting,
				Xe = Y => Y.overview.zoneHold,
				_t = (0, o.P1)("zoneHold", Xe)
		},
		"../react/common/utils/formatDate.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			v.Z = (o, a, l = !1) => (0, e.p6)(o, a, l)
		},
		"../react/common/utils/hasRole.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				n: function() {
					return o
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const o = (a, l) => {
				const {
					roles: c = []
				} = (0, e.uF)(a) || {};
				return l.some(f => c.includes(f))
			}
		},
		"../react/common/utils/isGuards.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Q$: function() {
					return a
				},
				t: function() {
					return f
				},
				v5: function() {
					return l
				},
				zE: function() {
					return c
				}
			});
			var e = t("../react/common/constants/index.ts"),
				o = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const a = i => i ? ["page", "per_page", "count", "total_count"].every(g => g in i && i[g]) : !1,
				l = (i = "") => e.Dy.includes(i.toLowerCase()),
				c = i => i !== null && typeof i == "object" && "name" in i && "size" in i && "type" in i && typeof i.slice == "function",
				f = i => (0, o.Z)(i)
		},
		"../react/common/utils/startViewTransition.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				o: function() {
					return e
				}
			});
			const e = o => {
				if (!document.startViewTransition) {
					o();
					return
				}
				document.startViewTransition(() => o())
			}
		},
		"../react/common/utils/useQueryCache.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				o: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(i) {
				for (var m = 1; m < arguments.length; m++) {
					var g = arguments[m] != null ? Object(arguments[m]) : {},
						n = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(g).filter(function(s) {
						return Object.getOwnPropertyDescriptor(g, s).enumerable
					})), n.forEach(function(s) {
						a(i, s, g[s])
					})
				}
				return i
			}

			function a(i, m, g) {
				return m = l(m), m in i ? Object.defineProperty(i, m, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[m] = g, i
			}

			function l(i) {
				var m = c(i, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function c(i, m) {
				if (typeof i != "object" || i === null) return i;
				var g = i[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(i, m || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(i)
			}
			const f = i => {
				const m = (0, e.useQueryClient)(),
					g = y => {
						var I;
						return m.getQueriesData((I = y) !== null && I !== void 0 ? I : i)
					},
					n = y => {
						var I;
						return m.getQueryData((I = y) !== null && I !== void 0 ? I : i)
					},
					s = y => {
						var I;
						return m.getQueriesData({
							queryKey: (I = y) !== null && I !== void 0 ? I : i,
							stale: !0
						})
					},
					r = (y, I) => {
						var E;
						m.setQueryData((E = I) !== null && E !== void 0 ? E : i, y)
					},
					d = async y => {
						var I;
						await m.refetchQueries((I = y) !== null && I !== void 0 ? I : i)
					}, u = async (y, I) => {
						var E, h;
						await m.invalidateQueries((E = y) !== null && E !== void 0 ? E : i, o({
							refetchActive: !1
						}, (h = I) !== null && h !== void 0 ? h : {}))
					}, _ = async (y, I) => {
						const E = y || (h => {
							var L;
							return (h == null || (L = h.queryKey) === null || L === void 0 ? void 0 : L[0]) === i
						});
						await m.invalidateQueries(o({
							predicate: E,
							refetchActive: !1,
							refetchInactive: !1
						}, I))
					};
				return {
					refetch: d,
					cancelData: async () => {
						await m.cancelQueries(i)
					},
					invalidate: u,
					setData: r,
					getDataStale: s,
					getData: g,
					prefetchQuery: (y, I) => {
						var E;
						return m.prefetchQuery((E = I) !== null && E !== void 0 ? E : i, y)
					},
					getQueryData: n,
					predicateInvalidate: _,
					batchInvalidate: async ({
						queryKeysToInvalidate: y = [],
						queryKeysToPredicateInvalidate: I = [],
						refetchActive: E = !1,
						refetchInactive: h = !1
					}) => {
						const L = y.map(N => u(N)),
							S = I.map(N => _(O => {
								var b;
								return (O == null || (b = O.queryKey) === null || b === void 0 ? void 0 : b[0]) === N
							}, {
								refetchActive: E,
								refetchInactive: h
							}));
						await Promise.all([...L, ...S])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(W, v, t) {
			"use strict";
			t.d(v, {
				K2: function() {
					return o
				},
				Lb: function() {
					return a
				},
				XI: function() {
					return l
				},
				bK: function() {
					return m
				},
				jk: function() {
					return i
				},
				wb: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = g => /^https?:\/\/(.*)/.test(g),
				a = g => e.default.hostname.test(g),
				l = g => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(g),
				c = g => /^[!-~]+$/.test(g),
				f = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				i = g => f.test(g),
				m = g => !!g && !!g.length && /^[ -~]+$/.test(g)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(W, v, t) {
			"use strict";
			t.d(v, {
				DZ: function() {
					return l
				},
				GA: function() {
					return g
				},
				hT: function() {
					return f
				},
				p6: function() {
					return a
				},
				qc: function() {
					return c
				},
				w9: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e);
			const a = r => o().utc(r).format("YYYY-MM-DD"),
				l = r => o().utc(r).format(),
				c = r => o().utc(r).startOf("minute").format(),
				f = r => new Date(r),
				i = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				m = r => {
					const d = r / 60 / 60 / 1e3;
					return i[Object.keys(i).sort((u, _) => _ - u).find(u => d >= u)]
				},
				g = (r, d = u => u.avg && u.avg.sampleInterval ? u.avg.sampleInterval : 1) => r.length === 0 ? 1 : r.reduce((u, _) => u + d(_), 0) / r.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				s = r => n[r]
		},
		"../react/pages/caching/tracking.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o.CHANGED_ZONE_SETTINGS = "change zone setting", o
			}({})
		},
		"../react/pages/d1/routes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				H: function() {
					return a
				},
				_: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
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
					tableUpdateData: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables/${"tableName"}/${"primaryKeyName"}/${"primaryKeyId"}`
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
		"../react/pages/dns/dns-records/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return e
				},
				X: function() {
					return o
				}
			});
			let e = function(a) {
				return a.DNS_RECORD_CREATE = "create DNS records", a.DNS_RECORD_UPDATE = "update DNS records", a.DNS_RECORD_DELETE = "delete DNS records", a.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", a
			}({});
			const o = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				BB: function() {
					return o
				},
				Pm: function() {
					return a
				},
				UZ: function() {
					return e
				}
			});
			let e = function(c) {
				return c.ROOT = "root", c.DSTADDRS_CARD = "dstaddrs_card", c.RULES_CARD = "rules_card", c.CATCHALL_CARD = "catchall_card", c.SETTINGS_PAGE = "settings_page", c.WORKERS_PAGE = "workers_page", c
			}({});
			const o = {
				zone: "emailRoutingZone",
				catchAllRule: "emailRoutingCatchAllRule",
				rule: "emailRoutingRule",
				rules: "emailRoutingRules",
				dstAddress: "emailRoutingDestinationAddress",
				dstAddresses: "emailRoutingDestinationAddresses",
				dnsRecord: "emailRoutingDnsRecord",
				dnsRecords: "emailRoutingDnsRecords"
			};
			let a = function(c) {
				return c[c.Verified = 0] = "Verified", c[c.Pending = 1] = "Pending", c[c.Missing = 2] = "Missing", c[c.WorkerNotFound = 3] = "WorkerNotFound", c[c.Unknown = 4] = "Unknown", c[c.Loading = 5] = "Loading", c
			}({});
			const l = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/config.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				jk: function() {
					return D
				},
				w8: function() {
					return P
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				l = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function c(y) {
				for (var I = 1; I < arguments.length; I++) {
					var E = arguments[I] != null ? Object(arguments[I]) : {},
						h = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(E).filter(function(L) {
						return Object.getOwnPropertyDescriptor(E, L).enumerable
					})), h.forEach(function(L) {
						f(y, L, E[L])
					})
				}
				return y
			}

			function f(y, I, E) {
				return I = i(I), I in y ? Object.defineProperty(y, I, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[I] = E, y
			}

			function i(y) {
				var I = m(y, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function m(y, I) {
				if (typeof y != "object" || y === null) return y;
				var E = y[Symbol.toPrimitive];
				if (E !== void 0) {
					var h = E.call(y, I || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(y)
			}
			const g = "Notifications",
				n = "notification",
				s = (0, e.BC)`/${"accountId"}`,
				r = (0, e.BC)`${s}/notifications`,
				d = (0, e.BC)`${r}/destinations`,
				u = (0, e.BC)`${r}/create`,
				_ = (0, e.BC)`${u}/${"alertType"}`,
				T = (0, e.BC)`${r}/edit/${"alertId"}`,
				D = c({
					account: s,
					alerts: r,
					destinations: d,
					createAlert: u,
					createAlertWithSelection: _,
					editAlert: T
				}, o._j, a._j),
				P = c({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, l.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				_j: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				a = (0, e.BC)`${o}/pagerduty/connect`,
				l = (0, e.BC)`${o}/pagerduty/register`,
				c = (0, e.BC)`${o}/pagerduty`,
				f = {
					pagerDutyConnect: a,
					pagerDutyRegister: l,
					pagerDutyList: c
				};
			var i = null
		},
		"../react/pages/home/alerts/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AA: function() {
					return K
				},
				AN: function() {
					return dt
				},
				AY: function() {
					return Ee
				},
				Ac: function() {
					return Tt
				},
				Am: function() {
					return D
				},
				B2: function() {
					return x
				},
				BB: function() {
					return N
				},
				BF: function() {
					return Ne
				},
				BQ: function() {
					return be
				},
				E8: function() {
					return G
				},
				Fl: function() {
					return Se
				},
				Fu: function() {
					return w
				},
				Gc: function() {
					return lt
				},
				Hc: function() {
					return Bt
				},
				IO: function() {
					return ze
				},
				JK: function() {
					return H
				},
				K: function() {
					return h
				},
				LI: function() {
					return ke
				},
				LX: function() {
					return Be
				},
				L_: function() {
					return et
				},
				Ly: function() {
					return Rt
				},
				MR: function() {
					return B
				},
				Mj: function() {
					return X
				},
				NB: function() {
					return rt
				},
				Oe: function() {
					return vt
				},
				Or: function() {
					return q
				},
				P5: function() {
					return Et
				},
				PE: function() {
					return Le
				},
				Pd: function() {
					return Dt
				},
				Pk: function() {
					return we
				},
				Pp: function() {
					return tt
				},
				Q1: function() {
					return b
				},
				Qr: function() {
					return je
				},
				Qv: function() {
					return Te
				},
				Rp: function() {
					return pt
				},
				S7: function() {
					return Ot
				},
				Sh: function() {
					return xe
				},
				Sl: function() {
					return xt
				},
				TZ: function() {
					return k
				},
				Tg: function() {
					return ve
				},
				Tp: function() {
					return nt
				},
				Uy: function() {
					return It
				},
				Vw: function() {
					return U
				},
				W3: function() {
					return Y
				},
				WR: function() {
					return ht
				},
				WX: function() {
					return pe
				},
				XF: function() {
					return bt
				},
				Xb: function() {
					return V
				},
				Zs: function() {
					return He
				},
				_f: function() {
					return Je
				},
				b4: function() {
					return ee
				},
				bc: function() {
					return ge
				},
				c2: function() {
					return C
				},
				cE: function() {
					return De
				},
				dh: function() {
					return ft
				},
				fE: function() {
					return We
				},
				g7: function() {
					return ye
				},
				hO: function() {
					return _t
				},
				hV: function() {
					return Lt
				},
				hk: function() {
					return P
				},
				hr: function() {
					return z
				},
				it: function() {
					return Xe
				},
				j3: function() {
					return Ke
				},
				jN: function() {
					return Ze
				},
				jo: function() {
					return At
				},
				k3: function() {
					return wt
				},
				m8: function() {
					return le
				},
				nm: function() {
					return Ye
				},
				oW: function() {
					return se
				},
				pH: function() {
					return j
				},
				pi: function() {
					return ce
				},
				r4: function() {
					return te
				},
				rI: function() {
					return Z
				},
				s7: function() {
					return yt
				},
				sg: function() {
					return ot
				},
				tB: function() {
					return _
				},
				tN: function() {
					return _e
				},
				u_: function() {
					return oe
				},
				vV: function() {
					return st
				},
				vc: function() {
					return Re
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				a = t("../../../../node_modules/moment/moment.js"),
				l = t.n(a),
				c = t("../../../common/util/types/src/api/domain.ts"),
				f = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				i = t("../react/utils/url.ts"),
				m = t("../react/pages/home/domain-registration/config.ts"),
				g = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function s(p) {
				for (var A = 1; A < arguments.length; A++) {
					var ne = arguments[A] != null ? Object(arguments[A]) : {},
						he = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && he.push.apply(he, Object.getOwnPropertySymbols(ne).filter(function(Me) {
						return Object.getOwnPropertyDescriptor(ne, Me).enumerable
					})), he.forEach(function(Me) {
						r(p, Me, ne[Me])
					})
				}
				return p
			}

			function r(p, A, ne) {
				return A = d(A), A in p ? Object.defineProperty(p, A, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[A] = ne, p
			}

			function d(p) {
				var A = u(p, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function u(p, A) {
				if (typeof p != "object" || p === null) return p;
				var ne = p[Symbol.toPrimitive];
				if (ne !== void 0) {
					var he = ne.call(p, A || "default");
					if (typeof he != "object") return he;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(p)
			}

			function _(p) {
				return p.filter(A => A.isSelected).reduce((A, {
					name: ne,
					fees: he,
					isZoneEntitlementPresent: Me
				}) => Me || !(0, e.isNumber)(he == null ? void 0 : he.transfer_fee) ? A : Tt(ne) ? A + (he == null ? void 0 : he.transfer_fee) * 2 : A + (he == null ? void 0 : he.transfer_fee), 0)
			}

			function T(p) {
				return p.filter(A => A.registrar.toLowerCase() === "godaddy")
			}
			const D = "MMM D, YYYY";

			function P(p, A, ne, he) {
				var Me, Ue, Qe, qe, ct, at, $e, it, Ut, Mt, kt, jt;
				const Ve = p[A.name],
					Gt = () => Tt(A.name) ? l()(A.expires_at).add(2, "years").format(D) : l()(A.expires_at).add(1, "year").format(D);
				return s({
					name: A.name,
					zone: Ve,
					entitlements: ne,
					registryCheck: he,
					nameservers: A.name_servers,
					isAvailable: A.available,
					lastKnownStatus: A.last_known_status,
					authCode: A.auth_code,
					isEnterpriseZone: (Ve == null || (Me = Ve.plan) === null || Me === void 0 ? void 0 : Me.legacy_id) === "enterprise",
					isActiveZone: (Ve == null ? void 0 : Ve.status) === "active",
					corResponsesPending: A.cor_responses_pending,
					isCorLocked: A.cor_locked,
					corLockedUntil: A.cor_locked_until ? l()(A.cor_locked_until).format(D) : null,
					isFullZone: (Ve == null ? void 0 : Ve.type) == n.xd.Full,
					isLocked: A.locked,
					registrar: A.current_registrar || m.JM,
					zoneId: Ve == null ? void 0 : Ve.id,
					currentExpiration: l()(A.expires_at).format(D),
					newExpiration: Gt(),
					lastEntitledAt: A.last_entitled_at ? new Date(A.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ne) && !!ne.find(Wt => Wt.id === m.g5 && Wt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: A.transfer_in && E(A.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: A.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: A.transfer_in,
					transferOut: A.transfer_out,
					autoRenew: A.auto_renew === !0,
					lastTransferredAt: A.last_transferred_at,
					createdAt: A.created_at,
					paymentExpiresAt: l()(A.payment_expires_at).isValid() ? l()(A.payment_expires_at) : l()(A.expires_at).isValid() ? l()(A.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (Ue = A.contacts) === null || Ue === void 0 || (Qe = Ue.administrator) === null || Qe === void 0 ? void 0 : Qe.id,
						[n.l2.Billing]: (qe = A.contacts) === null || qe === void 0 || (ct = qe.billing) === null || ct === void 0 ? void 0 : ct.id,
						[n.l2.Registrant]: (at = A.contacts) === null || at === void 0 || ($e = at.registrant) === null || $e === void 0 ? void 0 : $e.id,
						[n.l2.Technical]: (it = A.contacts) === null || it === void 0 || (Ut = it.technical) === null || Ut === void 0 ? void 0 : Ut.id
					},
					landing: A.landing,
					privacy: A.privacy,
					whois: A.whois,
					emailVerified: A.email_verified,
					materialChanges: L(A.material_changes),
					corChanges: A.cor_changes ? N(Object.assign(s({}, I), A.cor_changes)) : {},
					registryStatuses: A.registry_statuses ? A.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Mt = A.domain_protection_services) === null || Mt === void 0 ? void 0 : Mt.status
					},
					deletion: {
						isDeletable: A == null || (kt = A.deletion) === null || kt === void 0 ? void 0 : kt.is_deletable
					},
					premiumType: A == null ? void 0 : A.premium_type,
					fees: A == null ? void 0 : A.fees
				}, A.domain_move && {
					domainMove: {
						ineligibilityReasons: (jt = A.domain_move) === null || jt === void 0 ? void 0 : jt.ineligibility_reasons
					}
				}, A.actionable_metadata && {
					actionableMetadata: y(A.actionable_metadata)
				}, A.policies && {
					policies: s({}, A.policies.suspension && {
						suspension: {
							parked: A.policies.suspension.parked,
							parkingReason: A.policies.suspension.parking_reason,
							paymentExpired: A.policies.suspension.payment_expired
						}
					})
				})
			}

			function y(p) {
				return p.map(A => ({
					accountContext: A.account_context,
					createdAt: A.created_at,
					expiresAt: A.expires_at,
					sentAt: A.sent_at,
					status: A.status,
					type: A.type
				}))
			}
			const I = {
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

			function E(p) {
				switch (p.enter_auth_code) {
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

			function h(p) {
				let A = p.extensions;
				(A == null ? void 0 : A.application_purpose) && (A == null ? void 0 : A.nexus_category) && (p.extensions = {
					nexusCategory: A.nexus_category,
					applicationPurpose: A.application_purpose
				});
				let ne = s({}, typeof p.id == "string" ? {
					id: p.id
				} : {}, {
					first_name: p.firstName,
					organization: p.organization,
					address: p.address1,
					city: p.city,
					state: p.state || "N/A",
					zip: p.zip,
					country: p.country,
					phone: p.phone,
					email: p.email,
					fax: "",
					last_name: p.lastName,
					address2: p.address2,
					email_verified: p.emailVerified
				}, p.extensions ? {
					extensions: {
						nexus_category: p.extensions.nexusCategory,
						application_purpose: p.extensions.applicationPurpose
					}
				} : {});
				return Pe(ne)
			}

			function L(p) {
				let A = [];
				const ne = {
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
				for (const he in p) {
					const Me = p[he],
						Ue = ne[Me];
					A.push(Ue)
				}
				return A
			}
			const S = p => {
				if (!p) return null;
				let A = p;
				return p.includes("C31") && (A = "C31"), p.includes("C32") && (A = "C32"), A
			};

			function N(p) {
				return s({}, typeof p.id == "string" ? {
					id: p.id
				} : {}, {
					firstName: p.first_name,
					organization: p.organization,
					address1: p.address,
					city: p.city,
					state: p.state,
					zip: p.zip,
					country: p.country,
					phone: p.phone.trim(),
					email: p.email.trim(),
					lastName: p.last_name,
					address2: p.address2,
					emailVerified: p.email_verified
				}, p.extensions ? {
					extensions: {
						nexusCategory: S(p.extensions.nexus_category),
						applicationPurpose: p.extensions.application_purpose
					}
				} : {})
			}

			function O(p = {}) {
				const A = {
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
						}, p.zone && p.zone.plan || {}),
						type: EZoneType.Full
					}, p.zone || {}),
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
					}, p.transferConditions || {}),
					transferIn: s({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, p.transferIn || {}),
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
				return Object.assign(A, p)
			}

			function b(p = {}) {
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
				}, p)
			}

			function w(p) {
				const A = m.Py.concat(m.ui).reduce((ne, he) => s({}, ne, {
					[he]: []
				}), {});
				return p.forEach(ne => {
					let he = M(ne.registrar);
					he in A || (he = m.ui), ot(ne.name) && (he = "uk"), A[he].push(ne)
				}), Object.keys(A).sort((ne, he) => ne.localeCompare(he)).map(ne => ({
					registrar: ne,
					domains: A[ne]
				})).filter(ne => ne.domains.length > 0)
			}

			function M(p) {
				return p == null ? void 0 : p.toLowerCase().replace(/\s|,|\./g, "")
			}

			function U(p) {
				if (!p || !p.registrar) return "unknown";
				if (ot(p.name)) return "uk";
				const A = M(p.registrar);
				return A in m.gM ? A : "unknown"
			}
			const Q = [];

			function re(p) {
				return Q.some(A => p.endsWith("." + A))
			}

			function me(p) {
				return !p.isEnterpriseZone || !Array.isArray(p.entitlements) ? !1 : !!p.entitlements.find(({
					id: A,
					allocation: ne
				}) => A === m.g5 && ne.value === !0)
			}

			function ce(p) {
				var A;
				const ne = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let he = !1,
					Me = null;
				return (A = p.registryStatuses) === null || A === void 0 || A.some(Ue => {
					ne.includes(Ue) && (Me = Ue, he = !0)
				}), [he, Me]
			}

			function le(p, A = !1) {
				if (!p) return [!1, g.keys.cannot_transfer_default];
				if (p.zone.status !== "active") return [!1, g.keys.cannot_transfer_zone_not_active];
				if (!p.isFullZone && !me(p)) return [!1, g.keys.cannot_transfer_zone_not_eligible];
				if (p.registrar === "Cloudflare") return [!1, g.keys.cannot_transfer_domain_on_cf];
				if (p.isAvailable) return [!1, g.keys.cannot_transfer_domain_available];
				if (!p.transferConditions) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (!A && It(p == null ? void 0 : p.premiumType)) return [!1, g.keys.cannot_transfer_domain_premium];
				if (j(p)) return [!1, g.keys.cannot_transfer_domain_transfer_in_progress];
				let ne;
				for (ne in p.transferConditions)
					if (ne !== "not_premium" && !p.transferConditions[ne]) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (re(p.name)) return [!1, g.keys.cannot_transfer_domain_tld_not_supported];
				const [he, Me] = ce(p);
				return he && Me ? [!1, g.keys.cannot_transfer_domain_registry_status[Me]] : [!0, ""]
			}

			function j(p) {
				var A, ne;
				return !!p.transferIn && !((A = p.transferConditions) === null || A === void 0 ? void 0 : A.not_started) && !!(ot(p.name) || ((ne = p.registryStatuses) === null || ne === void 0 ? void 0 : ne.includes(n.rj.PENDING_TRANSFER)))
			}

			function $(p) {
				return !!p.registrar && !!p.currentExpiration
			}

			function x(p, A = !1) {
				const [ne] = le(p, A);
				return $(p) ? de(p) ? n.M5.InProgressOrOnCF : ne ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function C(p) {
				return p.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(p.transferIn.enter_auth_code) || !1
			}

			function B(p) {
				return p.registrar === "Cloudflare"
			}

			function Z(p) {
				return !!(p == null ? void 0 : p.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function X(p) {
				return !!(p == null ? void 0 : p.includes(n.rj.PENDING_TRANSFER))
			}
			const ie = "Invalid date";

			function q(p) {
				return p.newExpiration === ie ? "Unavailable" : p.newExpiration
			}

			function k(p) {
				return p.currentExpiration === ie ? "Unavailable" : p.currentExpiration
			}

			function K(p) {
				return p.substring(p.indexOf("."))
			}

			function V(p = "") {
				return p.indexOf(".") !== -1 ? p.substring(0, p.indexOf(".")) : p
			}

			function z(p) {
				return p.map(A => A.name).map(A => K(A)).filter((A, ne, he) => !he.includes(A, ne + 1))
			}

			function ee(p) {
				if (m.no) return [!0, ""];
				if (!B(p)) return [!1, n.ok.NotOnCF];
				if (p.isCorLocked) return [!1, p.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (p.lastTransferredAt) {
					const A = l()(p.lastTransferredAt),
						ne = l().duration(l()().diff(A)).as("days"),
						he = ot(p.name);
					if (ne < (he ? 1 : 60)) return [!1, he ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (p.createdAt) {
					const A = l()(p.createdAt);
					if (l().duration(l()().diff(A)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function pe(p) {
				return !!(m.Bc || p.transferOut)
			}

			function de(p) {
				return ye(p) || B(p)
			}

			function _e(p) {
				return !ye(p) && B(p)
			}

			function ye(p) {
				return !p || p.lastKnownStatus === "pendingTransfer" || p.lastKnownStatus === "transferFOAPending" || !B(p) && p.transferConditions && !p.transferConditions.not_started || !1
			}

			function Le(p) {
				return !(re(p.name) || p.transferConditions && !p.transferConditions.supported_tld)
			}

			function Te(p) {
				return (p == null ? void 0 : p.includes("/")) ? !0 : p.split("").some(A => A.charCodeAt(0) > 123)
			}

			function we(p) {
				switch (p) {
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

			function Re(p) {
				return l()(p.paymentExpiresAt).isBefore(l()())
			}

			function Ze(p) {
				return p.transferIn && p.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function H(p) {
				const A = ["CU", "KP", "IR", "SY"];
				return p.filter(ne => !A.includes(ne.code))
			}

			function ve(p) {
				if (!!p) return `${p.charAt(0).toUpperCase()}${p.slice(1)}${p.charAt(p.length-1)==="."?"":"."}`
			}

			function Pe(p) {
				const A = {};
				for (const [ne, he] of Object.entries(p)) {
					if (he && typeof he == "string") {
						Object.assign(A, {
							[ne]: he.trim()
						});
						continue
					}
					Object.assign(A, {
						[ne]: he
					})
				}
				return A
			}

			function He(p) {
				return l()(p).add(40, "days")
			}

			function et(p) {
				const A = p.paymentExpiresAt || p.payment_expires_at,
					ne = He(A);
				return l()().isBetween(A, ne)
			}

			function We(p) {
				var A;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (A = p.registryStatuses) === null || A === void 0 ? void 0 : A.includes(n.rj.REDEMPTION_PERIOD)
			}

			function ft(p) {
				var A;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (A = p.registryStatuses) === null || A === void 0 ? void 0 : A.includes(n.rj.PENDING_DELETE)
			}

			function tt(p) {
				return [".us"].includes(p)
			}

			function Xe(p) {
				return [".us"].includes(p)
			}

			function _t(p) {
				switch (p) {
					case ".us":
						return Ce();
					default:
						return []
				}
			}

			function Y(p) {
				switch (p) {
					case ".us":
						return ue;
					default:
						return {}
				}
			}
			const ue = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function Ce() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([p, A]) => ({
						value: p,
						label: A
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([p, A]) => ({
						value: p,
						label: A
					}))
				}]
			}

			function Be(p, A, ne) {
				return A[A.length - 1][ne] === p[ne]
			}

			function je(p) {
				return Boolean(Object.keys(p).length === 0)
			}

			function Ne(p) {
				return l()().add(p, "year").format(D)
			}

			function Je({
				accountName: p
			}) {
				var A;
				const ne = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((A = p.toLowerCase().match(ne)) === null || A === void 0 ? void 0 : A[0]) || ""
			}

			function st(p) {
				return !!p.match(f.default.email)
			}

			function nt(p) {
				return p === c.W7.PENDING_UPDATE
			}

			function lt(p) {
				return p ? Object.values(c.wR).filter(A => A !== c.wR.OFFBOARDED).includes(p) : !1
			}

			function yt(p) {
				return p ? [c.wR.LOCKED, c.wR.ONBOARDED, c.wR.ONBOARDING_INITIATED, c.wR.PENDING_REGISTRY_LOCK, c.wR.PENDING_REGISTRY_UNLOCK, c.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function Ct(p) {
				return p ? c.wR.UNLOCKED === p : !1
			}

			function ut(p) {
				return p ? c.wR.LOCKED === p : !1
			}

			function ke(p) {
				return p ? c.wR.PENDING_REGISTRY_LOCK === p : !1
			}

			function be(p) {
				return p ? [c.wR.PENDING_REGISTRY_UNLOCK, c.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function ze(p) {
				var A;
				return !1
			}

			function ht(p) {
				var A;
				return !1
			}

			function dt(p) {
				var A;
				return !1
			}

			function bt(p) {
				var A;
				return !1
			}

			function G(p) {
				var A;
				return !1
			}

			function se(p) {
				return Object.keys(c.wR).find(A => c.wR[A].toLowerCase() === p.toLowerCase())
			}

			function Ee(p) {
				var A;
				const ne = (A = se(p)) === null || A === void 0 ? void 0 : A.toLowerCase();
				return ne ? g.keys.protection_status[ne] : g.keys.protection_status.unknown
			}

			function Ie(p) {
				return ["com", "net"].includes(p)
			}

			function Se(p) {
				const A = (0, i.pu)(p);
				return Ie(A) ? c.wR.PENDING_REGISTRY_LOCK : c.wR.LOCKED
			}

			function xe(p) {
				return (0, i.pu)(p) === "co" ? 5 : 10
			}

			function Ye(p, A) {
				return A ? 1 : (0, i.pu)(p) === "co" ? 5 : (0, i.pu)(p) === "org" ? 1 : 10
			}

			function ot(p) {
				return (0, i.pu)(p) === "uk"
			}

			function De(p) {
				return (0, i.pu)(p) === "us"
			}

			function Tt(p) {
				return (0, i.pu)(p) === "ai"
			}

			function pt(p) {
				return l()(p).isValid()
			}

			function Rt(p) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(p)
			}

			function Et(p) {
				return !!(p == null ? void 0 : p.id)
			}

			function rt(p) {
				return p ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(p) : !1
			}

			function Dt(p) {
				return p ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(p) : !1
			}

			function Lt(p) {
				var A;
				return (p == null ? void 0 : p.lastKnownStatus) ? (A = p.lastKnownStatus) === null || A === void 0 ? void 0 : A.includes("deletionIrredeemable") : !1
			}

			function It(p) {
				switch (p) {
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

			function Bt(p) {
				if (!p || !p.message) return n.OJ.DEFAULT;
				const {
					message: A
				} = p;
				switch (!0) {
					case A.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case A.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case A.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function Ot(p) {
				var A, ne;
				return !!(((A = p.policies) === null || A === void 0 || (ne = A.suspension) === null || ne === void 0 ? void 0 : ne.parked) && p.policies.suspension.parkingReason)
			}

			function Ke(p) {
				var A, ne;
				return Ot(p) && ((A = p.policies) === null || A === void 0 || (ne = A.suspension) === null || ne === void 0 ? void 0 : ne.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function wt(p) {
				var A, ne;
				return Ot(p) && ((A = p.policies) === null || A === void 0 || (ne = A.suspension) === null || ne === void 0 ? void 0 : ne.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function xt(p) {
				var A;
				return !((A = p.domainMove) === null || A === void 0 ? void 0 : A.ineligibilityReasons.length)
			}

			function vt(p) {
				var A, ne;
				return !!((A = p.domainMove) === null || A === void 0 || (ne = A.ineligibilityReasons) === null || ne === void 0 ? void 0 : ne.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function St(p) {
				var A;
				return (A = p.actionableMetadata) === null || A === void 0 ? void 0 : A.find(ne => ne.type === n.wg.DOMAIN_MOVE)
			}

			function At(p) {
				const A = St(p);
				return (A == null ? void 0 : A.status) === "pending" && A.accountContext === n._5.GAINING
			}

			function oe(p) {
				const A = St(p);
				return (A == null ? void 0 : A.status) === "pending" && A.accountContext === n._5.LOSING
			}

			function te(p) {
				const A = K(p.name);
				return !m.Pf.includes(A)
			}

			function ge(p) {
				return m.QZ.includes(p)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Bc: function() {
					return m
				},
				HG: function() {
					return ye
				},
				Hv: function() {
					return Le
				},
				JM: function() {
					return a
				},
				Pf: function() {
					return d
				},
				Py: function() {
					return f
				},
				QZ: function() {
					return u
				},
				WK: function() {
					return n
				},
				g5: function() {
					return s
				},
				gM: function() {
					return c
				},
				jk: function() {
					return _e
				},
				no: function() {
					return g
				},
				uY: function() {
					return i
				},
				ui: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../flags.ts");
			const a = "Unknown",
				l = "unknown",
				c = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				f = Object.keys(c),
				i = !0,
				m = (0, o.J8)("registrar_mock_transfer_out") || !1,
				g = (0, o.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				s = "cf_registrar.enabled",
				r = "@abcABC1234567890123456",
				d = [".us"],
				u = [".travel", ".us", ".ong", ".ngo"],
				_ = (0, e.BC)`/${"accountId"}`,
				T = (0, e.BC)`${_}/add-site`,
				D = (0, e.BC)`${_}/registrar`,
				P = (0, e.BC)`${D}/domains`,
				y = (0, e.BC)`${D}/action-center`,
				I = (0, e.BC)`${D}/domain/${"zoneName"}`,
				E = (0, e.BC)`${I}/configuration`,
				h = (0, e.BC)`${I}/contacts`,
				L = (0, e.BC)`${D}/pricing`,
				S = (0, e.BC)`${D}/protection`,
				N = (0, e.BC)`${D}/register`,
				O = (0, e.BC)`${N}/checkout`,
				b = (0, e.BC)`${N}/checkout/${"token"}`,
				w = (0, e.BC)`${N}/success`,
				M = (0, e.BC)`${D}/tlds`,
				U = (0, e.BC)`${D}/transfer`,
				Q = (0, e.BC)`${D}/transfer/${"zoneName"}`,
				re = (0, e.BC)`/registrar/accounts/verify_email`,
				me = (0, e.BC)`/registrar/domains/verify_email`,
				ce = (0, e.BC)`/sign-up/registrar`,
				le = (0, e.BC)`${D}/verify-email`,
				j = (0, e.BC)`${_}/${"zoneName"}`,
				$ = (0, e.BC)`${_}/domains`,
				x = (0, e.BC)`${$}/action-center`,
				C = (0, e.BC)`${$}/${"zoneName"}`,
				B = (0, e.BC)`${C}/configuration`,
				Z = (0, e.BC)`${C}/contacts`,
				X = (0, e.BC)`${$}/pricing`,
				ie = (0, e.BC)`${$}/protection`,
				q = (0, e.BC)`${$}/register`,
				k = (0, e.BC)`${q}/checkout`,
				K = (0, e.BC)`${q}/checkout/${"token"}`,
				V = (0, e.BC)`${q}/success`,
				z = (0, e.BC)`${$}/tlds`,
				ee = (0, e.BC)`${$}/transfer`,
				pe = (0, e.BC)`${$}/transfer/${"zoneName"}`,
				de = (0, e.BC)`${$}/verify-email`,
				_e = {
					addSite: T,
					domains: P,
					domainsActionCenter: y,
					domainsDomain: I,
					domainsDomainConfiguration: E,
					domainsDomainContacts: h,
					domainsPricing: L,
					domainsProtection: S,
					domainsRegister: N,
					domainsRegisterCheckout: O,
					domainsRegisterCheckoutToken: b,
					domainsRegisterSuccess: w,
					domainsTlds: M,
					domainsTransfer: U,
					domainsTransferZone: Q,
					registrar: D,
					registrarAccountsVerifyEmail: re,
					registrarDomainsVerifyEmail: me,
					signup: ce,
					verifyEmail: le,
					zone: j
				},
				ye = {
					LEGACY_domains: $,
					LEGACY_domainsActionCenter: x,
					LEGACY_domainsDomain: C,
					LEGACY_domainsDomainConfiguration: B,
					LEGACY_domainsDomainContacts: Z,
					LEGACY_domainsPricing: X,
					LEGACY_domainsProtection: ie,
					LEGACY_domainsRegister: q,
					LEGACY_domainsRegisterCheckout: k,
					LEGACY_domainsRegisterCheckoutToken: K,
					LEGACY_domainsRegisterSuccess: V,
					LEGACY_domainsTlds: z,
					LEGACY_domainsTransfer: ee,
					LEGACY_domainsTransferZone: pe,
					LEGACY_verifyEmail: de
				},
				Le = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				HO: function() {
					return i
				},
				NW: function() {
					return m
				},
				ZQ: function() {
					return l
				},
				b_: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");
			const a = g => {
					const n = g && g.accountFlags && g.accountFlags.data && g.accountFlags.data.registrar && g.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(s => s.trim()) : []
				},
				l = g => {
					var n, s, r;
					return ((n = g.accountFlags) === null || n === void 0 || (s = n.data) === null || s === void 0 || (r = s.registrar) === null || r === void 0 ? void 0 : r["registrar-managed"]) || !1
				},
				c = g => g.account ? g.account.email : "",
				f = g => !1,
				i = g => f(g) && (0, e.oJ)((0, e.Zu)(g)),
				m = g => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: s
					} = g.registrar.registrations;
					return n && !(s.accepted_date || s.id || s.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				J: function() {
					return s
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(a),
				c = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function f(r) {
				for (var d = 1; d < arguments.length; d++) {
					var u = arguments[d] != null ? Object(arguments[d]) : {},
						_ = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(u).filter(function(T) {
						return Object.getOwnPropertyDescriptor(u, T).enumerable
					})), _.forEach(function(T) {
						i(r, T, u[T])
					})
				}
				return r
			}

			function i(r, d, u) {
				return d = m(d), d in r ? Object.defineProperty(r, d, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[d] = u, r
			}

			function m(r) {
				var d = g(r, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function g(r, d) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var _ = u.call(r, d || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(r)
			}
			let n = function(r) {
				return r.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", r.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", r.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", r.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", r.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", r.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", r.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", r.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", r.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", r.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", r.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", r.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", r.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", r.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", r.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", r.RENEW_DOMAIN_COMPLETED = "domain renewal completed", r.RESTORE_DOMAIN_INIT = "click to open domain restore modal", r.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", r.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", r.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", r.RESTORE_DOMAIN_FAILURE = "domain restore failed", r.RESTORE_DOMAIN_COMPLETED = "domain restore completed", r.DOMAIN_DELETE_INIT = "click to begin domain delete", r.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", r.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", r.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", r.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", r.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", r.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", r.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", r.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", r.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", r.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", r.DOMAIN_MOVE_START_FLOW = "Start domain move flow", r.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", r.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", r.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", r.DOMAIN_MOVE_SUBMIT = "Submit domain move", r.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", r.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", r.DOMAIN_MOVE_CANCEL = "Domain move cancel", r.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", r.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", r.ACTION_CENTER_NAVIGATE = "Navigate to actions center", r.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", r.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", r.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", r
			}({});

			function s(r, d, u) {
				if (!(d == null ? void 0 : d.name)) return null;
				l().sendEvent(r, f({
					domain: {
						name: d.name,
						premium: (0, c.Uy)(d == null ? void 0 : d.premiumType),
						paymentExpiresAt: o()(d == null ? void 0 : d.paymentExpiresAt).format()
					},
					category: "registrar"
				}, u))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				HX: function() {
					return i
				},
				Re: function() {
					return P
				},
				Rh: function() {
					return _
				},
				hX: function() {
					return d
				},
				s_: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t.n(a),
				c = t("../react/pages/home/members/utils.ts"),
				f = t("../react/utils/translator.tsx");
			let i = function(y) {
				return y.UNKNOWN = "unknown", y.WORKERS = "workers", y.ACCESS_APPS = "access_apps", y.ACCESS_IDP = "access_ipd", y
			}({});
			const m = [{
				value: i.WORKERS,
				label_i18n: "policy.granular_resources.type.workers",
				scopeKeyPrefix: "com.cloudflare.edge.worker.script",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: i.ACCESS_APPS,
				label_i18n: "policy.granular_resources.type.access_apps",
				scopeKeyPrefix: "com.cloudflare.edge.access.app",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: i.ACCESS_IDP,
				label_i18n: "policy.granular_resources.type.access_idp",
				scopeKeyPrefix: "com.cloudflare.edge.access.identity-provider",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}];

			function g(y) {
				return {
					key: "com.cloudflare.edge.worker.script." + y.id,
					name: y.name + (y.environment ? ` (${y.environment})` : ""),
					type: i.WORKERS
				}
			}

			function n(y) {
				const I = y;
				return {
					key: "com.cloudflare.edge.access.app." + I.id,
					name: I.name,
					type: i.ACCESS_APPS
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

			function r(y) {
				const I = y,
					E = s[I.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + I.id,
					name: `${E||"Unknown Type"}${I.name?" - "+I.name:""}`,
					type: i.ACCESS_IDP
				}
			}
			const d = async (y, I, E) => I == i.WORKERS ? (await u(`/accounts/${y}/workers/scripts-search?name=${E}&perPage=10`)).body.result.map(h => ({
				id: h.id,
				name: h.service_name || h.script_name,
				environment: h.environment_name
			})).map(g) : I == i.ACCESS_APPS ? (await u(`/accounts/${y}/access/apps?name=${E}`)).body.result.map(n) : I == i.ACCESS_IDP ? (await u(`/accounts/${y}/access/identity_providers`)).body.result.map(r) : [];
			async function u(y) {
				try {
					return await (0, e.get)(y, {
						hideErrorAlert: !0
					})
				} catch (h) {
					var I, E;
					throw ((I = h.body) === null || I === void 0 ? void 0 : I.errors) ? h.body.errors[0].message : h.text ? h.text : ((E = h.response) === null || E === void 0 ? void 0 : E.statusText) ? h.response.statusText : "Unexpected error response"
				}
			}
			const _ = async (y, I) => {
				const E = I.split("."),
					h = E.pop(),
					L = E.join(".");
				let S;
				switch (L) {
					case "com.cloudflare.edge.worker.script":
						const N = (await u(`/accounts/${y}/workers/scripts-search/${h}`)).body.result;
						return g({
							id: N.id,
							name: N.service_name || N.script_name,
							environment: N.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return S = await u(`/accounts/${y}/access/identity_providers/${h}`), r(S.body.result);
					case "com.cloudflare.edge.access.app":
						return S = await u(`/accounts/${y}/access/apps/${h}`), n(S.body.result)
				}
			}, T = {
				loading: !0,
				isDisabled: !0
			}, D = () => "production";

			function P(y) {
				const I = (0, c.vq)(y),
					[E, h] = (0, a.useState)(!0),
					[L, S] = (0, a.useState)(m.filter(N => I.find(O => O.meta.scopes === N.scopeKeyPrefix)).map(N => {
						const O = N.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							b = I.filter(w => w.meta.scopes === N.scopeKeyPrefix).find(w => !w.meta.visibility || w.meta.visibility !== "beta");
						return {
							value: N.value,
							label: (0, f.ZP)(N.label_i18n),
							state: O ? T : {
								loading: !1,
								isDisabled: !1
							},
							beta: !b
						}
					}));
				return (0, a.useEffect)(() => {
					(async () => {
						try {
							await d(y, i.ACCESS_APPS, ""), T.isDisabled = !1
						} catch (N) {
							N.startsWith("access.api.error.not_enabled") ? T.disableInfo = (0, f.ZP)("policy.granular_resources.type.access.not_enabled") : T.error = N
						}
						T.loading = !1, S([...L])
					})()
				}, []), (0, a.useEffect)(() => {
					const N = L.find(O => O.state.loading);
					h(!!N)
				}, [L]), {
					types: L,
					isLoading: E
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Ey: function() {
					return i
				},
				F4: function() {
					return u
				},
				Fq: function() {
					return D
				},
				Go: function() {
					return s
				},
				Lc: function() {
					return E
				},
				Np: function() {
					return g
				},
				Rl: function() {
					return n
				},
				Sb: function() {
					return r
				},
				Sw: function() {
					return I
				},
				Sz: function() {
					return y
				},
				Ti: function() {
					return h
				},
				Uw: function() {
					return T
				},
				Zl: function() {
					return _
				},
				jk: function() {
					return P
				},
				r6: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${o}/members`,
				l = (0, e.BC)`${a}/invite`,
				c = (0, e.BC)`${a}/invite/${"memberId"}`,
				f = (0, e.BC)`${a}/add-policy/${"memberId"}`,
				i = "com.cloudflare.api.account",
				g = i + "." + "zone",
				n = g + ".",
				s = 100,
				r = 200,
				d = 5,
				u = 300,
				_ = "INVITE_TOAST",
				T = "00000000000000000000000000000000",
				D = "usergroups-ui",
				P = {
					account: o,
					members: a,
					inviteMembers: l,
					editMember: c,
					addPolicy: f
				},
				y = {
					allow: "allow",
					deny: "deny"
				},
				I = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				E = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				h = {
					accountId: "",
					effect: y.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AX: function() {
					return y
				},
				Co: function() {
					return D
				},
				JP: function() {
					return P
				},
				Ld: function() {
					return r
				},
				YW: function() {
					return m
				},
				_k: function() {
					return d
				},
				c$: function() {
					return g
				},
				rC: function() {
					return L
				},
				vq: function() {
					return h
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				o = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				a = t("../react/pages/home/members/constants.ts");

			function l(S) {
				for (var N = 1; N < arguments.length; N++) {
					var O = arguments[N] != null ? Object(arguments[N]) : {},
						b = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(O).filter(function(w) {
						return Object.getOwnPropertyDescriptor(O, w).enumerable
					})), b.forEach(function(w) {
						c(S, w, O[w])
					})
				}
				return S
			}

			function c(S, N, O) {
				return N = f(N), N in S ? Object.defineProperty(S, N, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[N] = O, S
			}

			function f(S) {
				var N = i(S, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function i(S, N) {
				if (typeof S != "object" || S === null) return S;
				var O = S[Symbol.toPrimitive];
				if (O !== void 0) {
					var b = O.call(S, N || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(S)
			}
			const m = () => l({}, a.Ti),
				g = () => l({}, a.Lc, {
					scopes: [m()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = S => S.map(N => ({
					scope: {
						key: N,
						objects: [{
							key: "*"
						}]
					}
				})),
				s = (S, N, O) => {
					var b;
					let w = [],
						M = [];
					const U = [],
						Q = [];
					S.scopes.forEach(ce => {
						if (ce.mode === a.Sw.all) O ? w.push({
							id: O
						}) : w.push({
							scope: {
								key: `com.cloudflare.api.account.${N}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (ce.mode === a.Sw.domain_group) {
							const j = {
								id: ce.resourceGroupId
							};
							ce.effect === a.Sz.allow ? w.push(j) : M.push(j)
						} else if (ce.mode === a.Sw.zone) {
							const j = `${a.Rl}${ce.zoneId}`;
							ce.effect === a.Sz.allow ? U.push(j) : Q.push(j)
						} else if (ce.mode === a.Sw.granular && ce.granularResourceKey) {
							var le;
							const j = ce.granularProduct,
								x = `${(le=o.s_.find(C=>C.value===j))===null||le===void 0?void 0:le.scopeSubsetOfPrefix}.${N}`;
							w.push({
								scope: {
									key: `${ce.granularResourceKey}`,
									subset_of: [{
										key: `${x}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), U.length && (w = w.concat(n(U))), Q.length && (M = M.concat(n(Q)));
					const re = (b = S.permission_groups) === null || b === void 0 ? void 0 : b.map(ce => ({
							id: ce
						})),
						me = [];
					return me.push({
						access: a.Sz.allow,
						permission_groups: re,
						resource_groups: w
					}), M.length && me.push({
						access: a.Sz.deny,
						permission_groups: re,
						resource_groups: M
					}), me
				},
				r = S => S.map(N => {
					var O;
					return {
						access: N.access,
						permission_groups: N.permission_groups.map(b => ({
							id: b.id
						})),
						resource_groups: (O = N.resource_groups) === null || O === void 0 ? void 0 : O.map(b => ({
							scope: {
								key: b.scope.key,
								objects: b.scope.objects
							},
							id: b.id
						}))
					}
				}),
				d = (S, N, O, b) => {
					const w = S.auto_accept;
					let M = [];
					return M = M.concat(s(S, N, O)), b && (M = M.concat(r(b))), {
						auto_accept: w,
						status: w ? "accepted" : "pending",
						policies: M
					}
				},
				u = S => {
					const N = S.split(".");
					return N[N.length - 1]
				},
				_ = S => {
					var N, O;
					const b = S == null ? void 0 : S.access;
					let w = [],
						M = S == null || (N = S.resource_groups) === null || N === void 0 ? void 0 : N.map(U => {
							var Q;
							const re = T(U);
							if ((U == null || (Q = U.meta) === null || Q === void 0 ? void 0 : Q.editable) === "false") return {
								effect: b,
								mode: a.Sw.all,
								accountId: u(U.id)
							};
							if (re) {
								var me;
								return {
									effect: b,
									mode: a.Sw.granular,
									granularProduct: re.value,
									granularResourceKey: U == null || (me = U.scope) === null || me === void 0 ? void 0 : me.key
								}
							} else if (!U.name) U.scope.key.startsWith(a.Rl) ? w.push({
								key: U.scope.key
							}) : w = w.concat(U.scope.objects);
							else return {
								effect: b,
								mode: a.Sw.domain_group,
								resourceGroupId: u(U.id)
							}
						}).filter(U => U);
					if ((O = w) === null || O === void 0 ? void 0 : O.length) {
						let U = w.map(Q => {
							const re = u(Q.key);
							return {
								effect: b,
								mode: a.Sw.zone,
								zoneId: re
							}
						});
						M = M.length ? U.concat(M) : U
					}
					return M
				},
				T = S => {
					var N, O, b, w;
					const M = S == null || (N = S.scope) === null || N === void 0 ? void 0 : N.key.split(".").slice(0, -1).join("."),
						U = S == null || (O = S.scope) === null || O === void 0 || (b = O.subset_of) === null || b === void 0 || (w = b[0]) === null || w === void 0 ? void 0 : w.key.split(".").slice(0, -1).join(".");
					return o.s_.find(Q => Q.scopeKeyPrefix === M && Q.scopeSubsetOfPrefix === U)
				},
				D = S => {
					if (!(S == null ? void 0 : S.length)) return [];
					const N = [];
					return S.forEach(O => {
						var b;
						(b = O.resource_groups) === null || b === void 0 || b.forEach(w => {
							var M, U;
							((M = w.scope) === null || M === void 0 || (U = M.key) === null || U === void 0 ? void 0 : U.startsWith(a.Rl)) && N.push(u(w.scope.key))
						})
					}), N
				},
				P = S => {
					if (!(S == null ? void 0 : S.length)) return [];
					const N = [];
					return S.forEach(O => {
						var b;
						(b = O.resource_groups) === null || b === void 0 || b.forEach(w => {
							var M, U;
							if (!((M = w.scope) === null || M === void 0 || (U = M.key) === null || U === void 0 ? void 0 : U.startsWith(a.Rl))) {
								var Q;
								const me = (Q = w.scope) === null || Q === void 0 ? void 0 : Q.objects;
								for (let ce = 0; ce < (me == null ? void 0 : me.length) && ce < a.r6; ce++) {
									var re;
									((re = me[ce].key) === null || re === void 0 ? void 0 : re.startsWith(a.Rl)) && N.push(u(me[ce].key))
								}
							}
						})
					}), N
				},
				y = S => {
					var N;
					if (!(S == null ? void 0 : S.length)) return null;
					const O = (N = S[0]) === null || N === void 0 ? void 0 : N.permission_groups.map(U => U.id);
					let b, w;
					S == null || S.forEach(U => {
						U.access === a.Sz.allow && (b = U), U.access === a.Sz.deny && (w = U)
					});
					let M = [];
					return b && (M = _(b)), w && (M = M.concat(_(w))), {
						permission_groups: O,
						scopes: M
					}
				},
				I = "permission-groups-",
				E = new Map,
				h = S => {
					if (!S) return [];
					const N = E.get(S);
					if (N) return N;
					const O = e.E.get(`${I}${S}`);
					return E.set(S, O), O
				},
				L = (S, N) => {
					const O = [];
					for (let b = 0; b < sessionStorage.length; b++) {
						const w = sessionStorage.key(b);
						(w == null ? void 0 : w.startsWith(I)) && O.push(w)
					}
					return O.length >= 5 && e.E.remove(O[0]), e.E.set(`${I}${S}`, N)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				g: function() {
					return o
				}
			});
			var e = t("../../../common/util/types/src/api/phases/fields.tsx");
			const o = {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				KO: function() {
					return i
				},
				L9: function() {
					return n
				},
				N3: function() {
					return g
				},
				zE: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(s) {
				for (var r = 1; r < arguments.length; r++) {
					var d = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(d).filter(function(_) {
						return Object.getOwnPropertyDescriptor(d, _).enumerable
					})), u.forEach(function(_) {
						l(s, _, d[_])
					})
				}
				return s
			}

			function l(s, r, d) {
				return r = c(r), r in s ? Object.defineProperty(s, r, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[r] = d, s
			}

			function c(s) {
				var r = f(s, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function f(s, r) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var u = d.call(s, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(s)
			}
			let i = function(s) {
					return s.PURCHASE_WORKERS_PAID = "navigate to workers plan page", s.LIST_CONFIGS = "list hyperdrive configs", s.SEARCH_CONFIGS = "search hyperdrive configs", s.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", s.VIEW_CONFIG_DETAILS = "view hyperdrive config details", s.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", s.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", s.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", s.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", s.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", s.CLICK_QUICK_LINK = "click hyperdrive quick link", s.CLICK_DISCORD = "click hyperdrive discord", s.CLICK_COMMUNITY = "click hyperdrive community", s
				}({}),
				m = function(s) {
					return s[s["connection string"] = 0] = "connection string", s[s.manual = 1] = "manual", s
				}({}),
				g = function(s) {
					return s[s.success = 0] = "success", s[s.failure = 1] = "failure", s
				}({});
			const n = (s, r = {}) => {
				o().sendEvent(s, a({}, r, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$4: function() {
					return l
				},
				GH: function() {
					return r
				},
				JZ: function() {
					return u
				},
				aR: function() {
					return n
				},
				db: function() {
					return f
				},
				ib: function() {
					return _
				},
				lW: function() {
					return D
				},
				pT: function() {
					return s
				},
				po: function() {
					return d
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const l = "sourcing_kit_enabled",
				c = "sourcing_kit_waitlist",
				f = "images",
				i = "unified_images_enabled",
				m = "c2pa_polish",
				g = "CloudflareImages",
				n = P => !!(0, o.BF)(P, "images.transformations_enabled"),
				s = P => Boolean((0, o.BF)(P, "images.enabled")),
				r = P => {
					const y = (0, o.BF)(P, "images.storage");
					return typeof y == "number" && y > 0
				},
				d = P => Boolean((0, o.BF)(P, "contract.customer_enabled")),
				u = P => Boolean((0, e.oI)(P, f, l)),
				_ = P => Boolean((0, a.Le)(P, g, l)),
				T = P => Boolean(getAccountFlipperFlag(P, g, i)),
				D = P => Boolean((0, a.Le)(P, g, m))
		},
		"../react/pages/magic/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				GF: function() {
					return d
				},
				H3: function() {
					return i
				},
				H8: function() {
					return c
				},
				J: function() {
					return _
				},
				Nz: function() {
					return m
				},
				UQ: function() {
					return D
				},
				Up: function() {
					return l
				},
				W8: function() {
					return g
				},
				Ws: function() {
					return P
				},
				Xg: function() {
					return s
				},
				Y_: function() {
					return r
				},
				_j: function() {
					return a
				},
				a4: function() {
					return u
				},
				jS: function() {
					return T
				},
				rF: function() {
					return f
				},
				rG: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/utils/translator.tsx");
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
					label: (0, o.ZP)("account.magic_transit.configuration.static_routes.all_regions")
				}, {
					value: "AFR",
					label: (0, o.ZP)("common.regions.africa")
				}, {
					value: "SAM",
					label: (0, o.ZP)("common.regions.south_america")
				}, {
					value: "APAC",
					label: (0, o.ZP)("common.regions.asia_pacific")
				}, {
					value: "WEUR",
					label: (0, o.ZP)("common.regions.western_europe")
				}, {
					value: "EEUR",
					label: (0, o.ZP)("common.regions.eastern_europe")
				}, {
					value: "WNAM",
					label: (0, o.ZP)("common.regions.western_north_america")
				}, {
					value: "ENAM",
					label: (0, o.ZP)("common.regions.eastern_north_america")
				}, {
					value: "ME",
					label: (0, o.ZP)("common.regions.middle_east")
				}, {
					value: "OC",
					label: (0, o.ZP)("common.regions.oceania")
				}],
				c = y => [{
					value: "low",
					label: y("setting.low")
				}, {
					value: "mid",
					label: y("setting.medium")
				}, {
					value: "high",
					label: y("setting.high")
				}],
				f = y => [{
					value: "request",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				i = y => [{
					value: "unidirectional",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				m = "magic-transit",
				g = "magic-wan",
				n = "gre_tunnel",
				s = "ipsec_tunnel",
				r = "interconnect",
				d = 64,
				u = 1476,
				_ = "mid",
				T = "reply",
				D = y => [{
					value: void 0,
					label: y("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: y("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: y("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				P = y => [{
					value: "all",
					label: y("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: y("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: y("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				_u: function() {
					return o
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
				o = "Magic network monitoring",
				a = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				VZ: function() {
					return l
				},
				lC: function() {
					return a
				},
				r8: function() {
					return o
				},
				uB: function() {
					return c
				}
			});
			var e = t("../react/pages/magic/constants.ts");
			const o = {
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
				c = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				W_: function() {
					return o
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
				o = "Magic packet captures",
				a = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				gb: function() {
					return n
				},
				iP: function() {
					return S
				},
				xL: function() {
					return P
				},
				rD: function() {
					return O
				},
				oT: function() {
					return u
				},
				i2: function() {
					return b
				},
				x1: function() {
					return f
				},
				lW: function() {
					return m
				},
				UA: function() {
					return h
				},
				K5: function() {
					return r
				},
				Ii: function() {
					return I
				},
				PJ: function() {
					return N
				},
				bK: function() {
					return T
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				c = t("../node_modules/@cloudflare/elements/es/index.js");
			const f = () => o().createElement(i, null, o().createElement("svg", {
					width: "94",
					height: "5",
					viewBox: "0 0 94 5",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M48.416 2.2002L1.99976 2.20021",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M66.3115 2.2002L59.3767 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M78.7949 2.2002L76.021 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M91.2773 2.2002L88.5034 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				i = (0, a.createComponent)(({
					theme: w
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
				m = () => o().createElement(g, null, o().createElement("svg", {
					width: "211",
					height: "71",
					viewBox: "0 0 211 71",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("circle", {
					cx: "175.5",
					cy: "35.5",
					r: "35.5",
					fill: "#044096"
				}), o().createElement("path", {
					d: "M48.7492 28L2.33298 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M66.6457 28L59.7109 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M79.1281 28L76.3542 28",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M91.6106 28.0005L88.8366 28.0005",
					stroke: "#E2F5FA",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M164.092 28.2002L100.767 28.2002",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				g = (0, a.createComponent)(({
					theme: w
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
				n = () => o().createElement(s, null, o().createElement(c.Ei, {
					alt: "airplane",
					src: l,
					width: "85%"
				})),
				s = (0, a.createComponent)(({
					theme: w
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
				r = () => o().createElement(d, null, o().createElement("svg", {
					width: "104",
					height: "23",
					viewBox: "0 0 104 23",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M93.7248 0H90.2837V7.74245H93.7248V0Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M103.187 9.4624H95.4448V12.9035H103.187V9.4624Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M93.7248 14.6245H90.2837V22.367H93.7248V14.6245Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M88.5632 9.4624H80.8208V12.9035H88.5632V9.4624Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M36.0259 10.627L2.00024 10.627",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M56.8198 10.627L44.5328 10.627",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M72.8872 10.627L65.326 10.627",
					stroke: "#C3E9F3",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				d = (0, a.createComponent)(({
					theme: w
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
				u = () => o().createElement(_, null, o().createElement("svg", {
					width: "13",
					height: "13",
					viewBox: "0 0 13 13",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("ellipse", {
					cx: "6.33672",
					cy: "6.34376",
					rx: "6.33672",
					ry: "6.34376",
					fill: "#086FFF"
				}))),
				_ = (0, a.createComponent)(({
					theme: w
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
				T = () => o().createElement(D, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				D = (0, a.createComponent)(({
					theme: w
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
				P = () => o().createElement(y, null, o().createElement("svg", {
					width: "22",
					height: "22",
					viewBox: "0 0 22 22",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M12.6922 0H9.30762V7.61541H12.6922V0Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M22.0002 9.30762H14.3848V12.6922H22.0002V9.30762Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M12.6922 14.3848H9.30762V22.0002H12.6922V14.3848Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M7.61542 9.30762H0V12.6922H7.61542V9.30762Z",
					fill: "#C5EBF5"
				}))),
				y = (0, a.createComponent)(({
					theme: w
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
				I = () => o().createElement(E, null, o().createElement("svg", {
					width: "32",
					height: "32",
					viewBox: "0 0 32 32",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M18.0868 0H13.2637V10.852H18.0868V0Z",
					fill: "#FBAD41"
				}), o().createElement("path", {
					d: "M31.35 13.2637H20.498V18.0868H31.35V13.2637Z",
					fill: "#FBAD41"
				}), o().createElement("path", {
					d: "M18.0868 20.498H13.2637V31.35H18.0868V20.498Z",
					fill: "#FBAD41"
				}), o().createElement("path", {
					d: "M10.852 13.2637H0V18.0868H10.852V13.2637Z",
					fill: "#FBAD41"
				}))),
				E = (0, a.createComponent)(({
					theme: w
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
				h = () => o().createElement(L, null, o().createElement("svg", {
					width: "48",
					height: "15",
					viewBox: "0 0 48 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M40.25 3.0781e-07L33.1902 7.05981L40.25 14.1196L47.3098 7.05981L40.25 3.0781e-07Z",
					fill: "#6ECCE5"
				}), o().createElement("path", {
					d: "M20.9031 6.61694L1.99994 6.61694",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				L = (0, a.createComponent)(({
					theme: w
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
				S = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 40",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M12.4025 16.0001L10.265 13.8927L8.015 16.1427C8.86952 12.6096 10.8668 9.45753 13.6967 7.17612C16.5265 4.8947 20.0305 3.6116 23.6645 3.52609C27.2984 3.44059 30.8589 4.55747 33.7929 6.70326C36.3879 8.60112 38.3644 11.2099 39.492 14.2014L40.339 13.9224L41.5646 13.5186L42.4174 13.2377C41.0751 9.5683 38.6567 6.37586 35.4641 4.08759C31.9041 1.53603 27.5888 0.257281 23.2134 0.457383C18.838 0.657484 14.6574 2.32478 11.3452 5.19063C8.03295 8.05648 5.78199 11.954 4.955 16.2551L2.63 13.9151L0.5 16.0001L6.5 22.0001L12.4025 16.0001Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M47.5646 24.0049L41.5646 18.0049L35.6471 24.0049L37.7846 26.1124L40.0346 23.8624C39.1898 27.4009 37.1992 30.561 34.3725 32.851C31.5458 35.1411 28.0415 36.4328 24.4048 36.5252C20.768 36.6176 17.2027 35.5055 14.2634 33.3619C11.5162 31.3585 9.45991 28.559 8.36721 25.3515L7.54721 25.6183L6.37385 26.0001L5.5 26.2845C6.79997 30.1536 9.28442 33.5247 12.6114 35.9135C16.1663 38.4659 20.4765 39.7483 24.8486 39.5544C29.2206 39.3605 33.4003 37.7015 36.7153 34.8443C40.0303 31.9872 42.2878 28.098 43.1246 23.8024L45.4346 26.1199L47.5646 24.0049Z",
					fill: "#C5EBF5"
				})),
				N = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 39 41",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M31.1271 6.20742L32.7396 3.67992C25.4571 -1.00008 13.5396 -1.00008 6.17465 3.67992L7.74965 6.21492C14.2521 2.11242 24.7221 2.11242 31.1271 6.20742Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M19.3896 4.67742C15.6941 4.70925 12.0606 5.63105 8.79679 7.36478C5.533 9.09851 2.73499 11.5931 0.639648 14.6374L3.16715 16.2499C5.00538 13.6448 7.43278 11.5105 10.2518 10.0209C13.0708 8.53125 16.2017 7.7283 19.3896 7.67742C28.3896 7.67742 34.1496 13.2724 35.9496 16.2274L38.4996 14.6749C36.4146 11.2174 29.7171 4.67742 19.3896 4.67742Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M19.3971 9.31242C13.4646 9.31242 8.46965 11.8849 5.34215 16.5574C3.6804 19.123 2.6668 22.0539 2.38852 25.0979C2.11024 28.142 2.57563 31.2081 3.74465 34.0324L6.51965 32.8924C5.53401 30.5237 5.1385 27.951 5.36713 25.3956C5.59576 22.8402 6.44168 20.3786 7.83215 18.2224C9.10397 16.3409 10.8316 14.8121 12.8539 13.7787C14.8762 12.7453 17.1272 12.2408 19.3971 12.3124C29.8296 12.3124 32.6421 20.8699 32.8446 24.1699C33.0771 28.0399 30.8646 28.4974 30.4446 28.5424L30.2046 28.5874C29.0973 28.8301 27.9393 28.6509 26.9571 28.0849C26.1096 27.4924 25.5846 26.4049 25.4046 24.8599C24.9171 20.6224 21.6546 18.8599 18.8796 19.0249C15.8271 19.2049 12.5421 21.6724 12.5421 26.6824C12.5421 33.9049 19.1721 39.7174 25.2921 40.9324L25.8921 37.9924C21.5646 37.1449 15.5421 32.7499 15.5421 26.6824C15.5421 23.5999 17.3046 22.1224 19.0521 22.0249C20.4246 21.9424 22.1421 22.7299 22.4271 25.2049C22.7121 27.6799 23.6721 29.4649 25.2771 30.5674C26.9271 31.5879 28.9083 31.9293 30.8046 31.5199C32.7547 31.3024 36.1746 29.4799 35.8372 24.0199C35.5896 19.9024 32.1471 9.31242 19.3971 9.31242Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M11.0346 23.1199C12.2496 19.2499 15.0771 16.9474 18.6471 16.9474C27.0396 16.9474 27.6921 24.1774 27.6921 26.3899H30.6921C30.6921 20.6524 27.5421 13.9474 18.6471 13.9474C13.7646 13.9474 9.75215 17.1274 8.14715 22.1974C7.17854 25.4217 7.25631 28.8699 8.3693 32.0471C9.4823 35.2244 11.5733 37.9674 14.3421 39.8824L16.0296 37.3999C13.7995 35.8488 12.116 33.6332 11.2191 31.069C10.3222 28.5048 10.2576 25.7229 11.0346 23.1199Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M22.9371 31.3399C22.1161 30.5273 21.4749 29.5512 21.055 28.475C20.6351 27.3988 20.4459 26.2464 20.4996 25.0924H17.4996C17.4514 26.6502 17.7256 28.2012 18.3051 29.648C18.8846 31.0948 19.7568 32.4062 20.8671 33.4999C23.4992 35.8335 26.9209 37.0778 30.4371 36.9799C30.7071 36.9799 30.9846 36.9799 31.2546 36.9799L31.1121 33.9799C27.8421 34.1299 24.8571 33.1699 22.9371 31.3399Z",
					fill: "#C5EBF5"
				})),
				O = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 28",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M24.0165 14.6841C25.4257 14.6841 26.8032 14.2662 27.9749 13.4833C29.1466 12.7004 30.0598 11.5876 30.5991 10.2857C31.1384 8.98378 31.2795 7.55118 31.0046 6.16907C30.7296 4.78695 30.051 3.5174 29.0546 2.52095C28.0581 1.5245 26.7886 0.84591 25.4065 0.57099C24.0244 0.29607 22.5918 0.437169 21.2898 0.976444C19.9879 1.51572 18.8751 2.42895 18.0922 3.60065C17.3093 4.77235 16.8915 6.14989 16.8915 7.55908C16.893 9.44827 17.6442 11.2596 18.9801 12.5955C20.3159 13.9313 22.1273 14.6825 24.0165 14.6841ZM24.0165 3.43783C24.8323 3.43783 25.6298 3.67976 26.3082 4.13302C26.9865 4.58628 27.5153 5.23052 27.8275 5.98427C28.1397 6.73801 28.2214 7.56741 28.0622 8.36758C27.903 9.16775 27.5102 9.90276 26.9333 10.4796C26.3564 11.0565 25.6214 11.4494 24.8212 11.6086C24.021 11.7677 23.1916 11.686 22.4379 11.3738C21.6841 11.0616 21.0399 10.5329 20.5866 9.85456C20.1334 9.17621 19.8915 8.37868 19.8915 7.56283C19.8915 6.46882 20.3261 5.41961 21.0996 4.64602C21.8732 3.87243 22.9224 3.43783 24.0165 3.43783Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M9.03896 17.7928C10.0773 17.7928 11.0923 17.4849 11.9557 16.9081C12.8191 16.3312 13.492 15.5112 13.8893 14.5519C14.2867 13.5926 14.3907 12.537 14.1881 11.5186C13.9855 10.5002 13.4855 9.56475 12.7513 8.83052C12.017 8.0963 11.0816 7.59628 10.0632 7.39371C9.04478 7.19114 7.98918 7.29511 7.02987 7.69247C6.07056 8.08983 5.25062 8.76273 4.67374 9.62609C4.09687 10.4894 3.78896 11.5045 3.78896 12.5428C3.79035 13.9348 4.34392 15.2693 5.32818 16.2536C6.31245 17.2379 7.647 17.7914 9.03896 17.7928ZM9.03896 10.2928C9.48397 10.2928 9.91898 10.4248 10.289 10.672C10.659 10.9193 10.9474 11.2707 11.1177 11.6818C11.288 12.0929 11.3325 12.5453 11.2457 12.9818C11.1589 13.4182 10.9446 13.8192 10.63 14.1338C10.3153 14.4485 9.91437 14.6628 9.47791 14.7496C9.04146 14.8364 8.58906 14.7919 8.17792 14.6216C7.76679 14.4513 7.41539 14.1629 7.16815 13.7929C6.92092 13.4229 6.78896 12.9878 6.78896 12.5428C6.78956 11.9465 7.02687 11.3748 7.44876 10.9533C7.87066 10.5318 8.44261 10.2951 9.03896 10.2951V10.2928Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M40.5112 18.5751H37.4865C36.3725 18.5741 35.2726 18.8238 34.2682 19.3056C33.2866 18.1392 32.0619 17.2014 30.6798 16.5581C29.2977 15.9147 27.7917 15.5813 26.2672 15.5811H21.7327C20.2109 15.5814 18.7076 15.9137 17.3275 16.5549C15.9474 17.1961 14.7238 18.1308 13.7422 19.2936C12.7413 18.8193 11.6473 18.5739 10.5397 18.5751H7.51571C5.5307 18.5773 3.62759 19.3667 2.22384 20.7701C0.820079 22.1736 0.0302906 24.0766 0.02771 26.0616L1.52771 27.5616H46.5L48 26.0616C47.9976 24.0764 47.2077 22.1732 45.8038 20.7697C44.3998 19.3661 42.4964 18.5769 40.5112 18.5751ZM7.51571 21.5751H10.5397C11.083 21.5778 11.6213 21.6794 12.1282 21.8751C11.7558 22.7322 11.5008 23.6356 11.37 24.5608H3.28571C3.59698 23.6878 4.17049 22.9323 4.92771 22.3978C5.68493 21.8634 6.58885 21.576 7.51571 21.5751ZM14.4007 24.5623C14.7489 22.8744 15.6681 21.358 17.0036 20.2685C18.3391 19.1791 20.0092 18.5831 21.7327 18.5811H26.2672C27.9907 18.5829 29.6609 19.1787 30.9966 20.268C32.3322 21.3573 33.2516 22.8736 33.6 24.5616L14.4007 24.5623ZM36.63 24.5623C36.4999 23.6397 36.2462 22.7389 35.8755 21.8841C36.3887 21.6824 36.935 21.5776 37.4865 21.5751H40.5112C41.4382 21.576 42.3422 21.8636 43.0993 22.3984C43.8564 22.9332 44.4297 23.689 44.7405 24.5623H36.63Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M39.0105 17.7928C40.0488 17.7928 41.0638 17.4849 41.9272 16.9081C42.7906 16.3312 43.4635 15.5112 43.8608 14.5519C44.2582 13.5926 44.3622 12.537 44.1596 11.5186C43.957 10.5002 43.457 9.56475 42.7228 8.83052C41.9885 8.0963 41.0531 7.59628 40.0347 7.39371C39.0163 7.19114 37.9607 7.29511 37.0014 7.69247C36.0421 8.08983 35.2221 8.76273 34.6452 9.62609C34.0684 10.4894 33.7605 11.5045 33.7605 12.5428C33.7619 13.9348 34.3154 15.2693 35.2997 16.2536C36.284 17.2379 37.6185 17.7914 39.0105 17.7928ZM39.0105 10.2928C39.4555 10.2928 39.8905 10.4248 40.2605 10.672C40.6305 10.9193 40.9189 11.2707 41.0892 11.6818C41.2595 12.0929 41.304 12.5453 41.2172 12.9818C41.1304 13.4182 40.9161 13.8192 40.6014 14.1338C40.2868 14.4485 39.8859 14.6628 39.4494 14.7496C39.013 14.8364 38.5606 14.7919 38.1494 14.6216C37.7383 14.4513 37.3869 14.1629 37.1397 13.7929C36.8924 13.4229 36.7605 12.9878 36.7605 12.5428C36.7611 11.9465 36.9984 11.3748 37.4203 10.9533C37.8422 10.5318 38.4141 10.2951 39.0105 10.2951V10.2928Z",
					fill: "#C5EBF5"
				})),
				b = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 40 46",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M26.4256 15.404C26.4243 15.3512 26.4193 15.2986 26.4106 15.2465C26.4031 15.1415 26.3956 15.0365 26.3806 14.939C26.38 14.9109 26.3749 14.8831 26.3656 14.8565C26.3665 14.8288 26.364 14.8011 26.3581 14.774C26.2831 13.9865 26.1781 13.214 26.0731 12.4715C26.0656 12.4715 26.0506 12.479 26.0506 12.4865C25.1206 12.839 24.1756 13.244 23.2081 13.6865C23.2606 14.084 23.3131 14.504 23.3581 14.9315L23.3656 14.939C23.388 15.0806 23.403 15.2233 23.4106 15.3665C23.4406 15.6065 23.4631 15.8465 23.4856 16.094C23.4931 16.214 23.5156 16.334 23.5156 16.4615C23.5156 16.589 23.5381 16.7165 23.5456 16.8365L23.5606 16.829C24.5581 16.349 25.5256 15.929 26.4406 15.5615H26.4481C26.4406 15.509 26.4331 15.464 26.4256 15.404ZM22.0531 16.3565C21.8356 16.229 21.6181 16.109 21.3931 15.9965C20.9731 15.764 20.5531 15.539 20.1256 15.329C20.0814 15.2982 20.0335 15.273 19.9831 15.254C19.9831 15.239 19.9831 15.239 19.9756 15.2465C18.9181 15.794 17.8581 16.3765 16.7956 16.994H16.7656C16.7131 17.0315 16.6531 17.0615 16.5931 17.099C16.5331 17.1365 16.4656 17.174 16.4131 17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856C12.2581 19.784 11.2756 20.444 10.3381 21.1115C9.46812 21.734 8.63562 22.3565 7.86312 22.9865C6.68838 23.9077 5.56424 24.8916 4.49562 25.934C1.00812 29.354 -0.199384 32.0765 0.918116 34.0115H0.925616C2.03562 35.939 4.99062 36.2465 9.70061 34.9415C10.4806 34.724 11.2981 34.469 12.1456 34.169C11.9956 33.1865 11.8606 32.1815 11.7481 31.124C7.11312 32.8115 4.08312 33.104 3.52062 32.519C3.49539 32.0868 3.62281 31.6594 3.88062 31.3115C4.70562 29.894 6.85062 27.5615 10.3306 24.854C10.6606 24.6065 10.9831 24.3515 11.3356 24.104C11.4481 24.014 11.5681 23.9315 11.6881 23.849C11.8831 23.7065 12.0781 23.564 12.2806 23.4215C12.3856 23.3465 12.4981 23.264 12.6106 23.1815C12.7006 23.114 12.7981 23.0465 12.8881 22.979C12.9931 22.904 13.0981 22.8365 13.1956 22.7615L13.2031 22.769C14.1331 22.124 15.1456 21.464 16.2181 20.804C16.8181 20.444 17.4481 20.069 18.0931 19.694C18.7381 19.319 19.3681 18.974 19.9831 18.6365C21.0931 18.0365 22.1731 17.4965 23.2006 16.994C22.8181 16.775 22.4356 16.5665 22.0531 16.3565ZM16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C15.4306 29.624 14.4706 30.0515 13.5556 30.419C13.5516 30.4231 13.5463 30.4257 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C13.9306 33.509 13.9306 33.5015 13.9456 33.5015C14.8681 33.1415 15.8131 32.7365 16.7806 32.2865C16.7356 31.889 16.6756 31.475 16.6306 31.049ZM39.0781 11.975H39.0706C37.9606 10.04 34.9981 9.72502 30.2881 11.03C29.5081 11.2475 28.6981 11.5025 27.8506 11.8025V11.8175C28.0006 12.7925 28.1356 13.805 28.2481 14.855C32.8531 13.1825 35.8756 12.8975 36.4756 13.475C36.7006 14.39 34.4431 17.405 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006C27.0031 23.06 26.8981 23.1275 26.7931 23.2025C25.8631 23.8475 24.8506 24.5 23.7706 25.175C23.1706 25.5425 22.5481 25.91 21.9031 26.285C21.2581 26.66 20.6206 27.005 20.0056 27.3425C18.8881 27.9425 17.8156 28.4975 16.7881 28.985C17.1631 29.2025 17.5381 29.4125 17.9131 29.615C18.0781 29.7125 18.2431 29.8025 18.4081 29.885C18.4883 29.9342 18.5709 29.9793 18.6556 30.02C19.0381 30.23 19.4206 30.4325 19.7956 30.6275C19.8631 30.665 19.9306 30.695 19.9981 30.725L20.0056 30.7325C21.0631 30.1925 22.1281 29.6 23.2006 28.9925L23.2156 28.985L23.2231 28.9775L23.5831 28.7675V28.76L23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1856 27.1925 26.4031 27.0575 26.6131 26.915L26.6956 26.855H26.7031C26.7707 26.8195 26.8359 26.7794 26.8981 26.735C27.3331 26.4575 27.7531 26.1725 28.1731 25.8875C28.3006 25.805 28.4281 25.715 28.5556 25.625C28.8031 25.46 29.0431 25.295 29.2831 25.1225C29.3956 25.0475 29.5006 24.965 29.6131 24.89L29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23C33.3003 22.0761 34.4244 21.0897 35.4931 20.045C36.6912 18.9223 37.7357 17.6463 38.5996 16.25C39.0383 15.5378 39.329 14.7445 39.4546 13.9175C39.5395 13.2464 39.4076 12.5658 39.0781 11.975Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M26.7931 22.784V22.775C26.7931 22.34 26.7856 21.9125 26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13V19.115C26.6956 19.04 26.6956 18.965 26.6881 18.89C26.6868 18.8198 26.6818 18.7497 26.6731 18.68C26.6656 18.545 26.6581 18.41 26.6581 18.275C26.6281 17.795 26.5981 17.33 26.5606 16.865C26.5531 16.775 26.5456 16.685 26.5381 16.6025C26.5156 16.3475 26.4931 16.1075 26.4706 15.86L26.4481 15.6125C26.442 15.5983 26.4394 15.5829 26.4406 15.5675L26.4481 15.56C26.4406 15.5075 26.4331 15.4625 26.4256 15.4025C26.4243 15.3497 26.4193 15.2971 26.4106 15.245C26.4031 15.14 26.3956 15.035 26.3806 14.9375C26.3799 14.9094 26.3749 14.8816 26.3656 14.855C26.3665 14.8273 26.364 14.7996 26.3581 14.7725C26.2831 13.985 26.1781 13.2125 26.0731 12.47C25.8559 10.9959 25.5631 9.534 25.1956 8.09002C23.9731 3.35752 22.2256 0.95752 19.9981 0.95752C17.7706 0.95752 16.0156 3.36502 14.7931 8.09752C14.5906 8.88502 14.4106 9.71752 14.2381 10.6025C15.1681 10.9625 16.1131 11.3525 17.0806 11.78C17.4032 9.38634 18.0991 7.05805 19.1431 4.88002C19.4581 4.34002 19.7506 4.03252 19.9981 3.96502C20.9056 4.22002 22.3831 7.68502 23.2081 13.685C23.2606 14.0825 23.3131 14.5025 23.3581 14.93L23.3656 14.9375C23.388 15.0791 23.403 15.2218 23.4106 15.365C23.4406 15.605 23.4631 15.845 23.4856 16.0925C23.4931 16.2125 23.5156 16.3325 23.5156 16.46C23.5156 16.5875 23.5381 16.715 23.5456 16.835C23.5531 16.955 23.5681 17.0825 23.5831 17.21V17.2175C23.6731 18.3575 23.7406 19.5575 23.7706 20.825C23.7856 21.53 23.8006 22.25 23.8006 22.9925C23.8006 23.735 23.7931 24.4625 23.7706 25.175C23.7331 26.435 23.6806 27.6275 23.5831 28.76V28.7675C23.6506 28.73 23.7181 28.685 23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1481 27.215 26.3356 27.1025 26.5081 26.99C26.5444 26.9668 26.5794 26.9418 26.6131 26.915L26.6956 26.855H26.7031C26.7631 25.67 26.7931 24.455 26.7931 23.2175L26.7931 23.2025C26.7995 23.1302 26.802 23.0576 26.8006 22.985V22.7975L26.7931 22.784ZM25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144L23.5531 29.1515C23.4631 30.269 23.3431 31.3115 23.2156 32.2865C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494L26.0731 33.4865C26.2231 32.504 26.3506 31.4765 26.4481 30.404C26.0746 30.2615 25.6996 30.104 25.3081 29.9315ZM25.7506 35.384C24.8281 35.024 23.8831 34.634 22.9231 34.2065C22.0606 39.0665 20.7931 41.819 20.0131 42.0215C19.1056 41.804 17.6056 38.339 16.7806 32.2865C16.7356 31.889 16.6756 31.4765 16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C16.4281 29.024 16.4206 28.8965 16.4056 28.769C16.3156 27.629 16.2556 26.429 16.2181 25.1615C16.2031 24.4565 16.1956 23.7365 16.1881 22.9865C16.1806 22.2365 16.2031 21.5165 16.2181 20.804C16.2556 19.5515 16.3156 18.359 16.4131 17.2265V17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856L13.2931 19.1315C13.2331 20.3165 13.1956 21.524 13.1956 22.7615L13.2031 22.769C13.2011 22.769 13.1992 22.7698 13.1978 22.7712C13.1964 22.7726 13.1956 22.7745 13.1956 22.7765C13.1919 22.8465 13.1919 22.9166 13.1956 22.9865V23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864C13.3381 28.0865 13.4281 29.2715 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C14.1329 34.982 14.4209 36.442 14.7931 37.8815C16.0081 42.6215 17.7706 45.0215 19.9906 45.0215H19.9996C21.3346 45.0215 22.4821 44.1665 23.4646 42.4715C24.2378 41.0254 24.8202 39.485 25.1971 37.889C25.3996 37.094 25.5946 36.2615 25.7596 35.384H25.7506ZM15.3406 13.064L14.6206 12.7715C14.3881 12.674 14.1556 12.5765 13.9231 12.4865L13.9156 12.494C13.7731 13.4765 13.6531 14.504 13.5481 15.569C13.9156 15.7265 14.2906 15.884 14.6881 16.0565H14.6956C15.2581 16.2965 15.8356 16.5665 16.4356 16.8515V16.829C16.5331 15.7115 16.6456 14.6765 16.7806 13.7015C16.2931 13.475 15.8206 13.274 15.3406 13.064Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M35.4331 25.904C34.8706 25.3415 34.2631 24.7865 33.6031 24.209H33.5956C32.8231 24.8315 32.0206 25.4465 31.1731 26.069L31.1656 26.0765C31.1581 26.0765 31.1581 26.084 31.1506 26.0915C34.8856 29.219 36.6181 31.6715 36.4006 32.444C35.7631 33.119 32.0506 32.6915 26.4481 30.404C26.0731 30.2615 25.6981 30.104 25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144C23.4406 29.084 23.3356 29.0315 23.2231 28.979L23.2156 28.9865C22.1881 28.4915 21.1231 27.944 20.0056 27.344C19.3756 27.0065 18.7456 26.654 18.0931 26.279C17.4406 25.904 16.8181 25.529 16.2181 25.1615C15.1456 24.494 14.1406 23.8415 13.2031 23.204L13.1956 23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864L13.3006 26.8565C14.2981 27.5065 15.3331 28.144 16.4056 28.769L16.7881 28.9865C17.1631 29.204 17.5381 29.414 17.9131 29.6165C18.0781 29.714 18.2431 29.804 18.4081 29.8865C18.4883 29.9357 18.5709 29.9808 18.6556 30.0215C19.0381 30.2315 19.4206 30.434 19.7956 30.629C19.8631 30.6665 19.9306 30.6965 19.9981 30.7265L20.0056 30.734C20.0731 30.7715 20.1406 30.809 20.2081 30.839C20.6656 31.079 21.1231 31.304 21.5806 31.5215C22.1131 31.784 22.6456 32.0315 23.1631 32.2715C23.1791 32.2731 23.1944 32.2782 23.2081 32.2865H23.2156C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494C26.4256 33.6365 26.7856 33.7715 27.1381 33.899C27.4906 34.0265 27.8356 34.1465 28.1806 34.2665C28.2068 34.2695 28.2322 34.2771 28.2556 34.289C28.5931 34.4015 28.9231 34.514 29.2381 34.604C29.5756 34.7165 29.9056 34.814 30.2356 34.904C30.5281 34.9865 30.8131 35.054 31.0906 35.1215C31.3681 35.189 31.6531 35.2565 31.9156 35.309C32.2081 35.369 32.4931 35.429 32.7706 35.474C33.3256 35.564 33.8506 35.6315 34.3306 35.6615C35.2141 35.7338 36.1035 35.6603 36.9631 35.444C37.2573 35.3636 37.5416 35.2504 37.8106 35.1065C38.301 34.8394 38.7084 34.4424 38.9881 33.959C40.1056 32.0315 38.9056 29.324 35.4331 25.904ZM10.3531 21.125H10.3456V21.1175L10.3381 21.11C9.46812 21.7325 8.63562 22.355 7.86312 22.985L7.88561 23C8.65811 23.615 9.46812 24.23 10.3306 24.8525C10.6606 24.605 10.9831 24.35 11.3356 24.1025C11.4481 24.0125 11.5681 23.93 11.6881 23.8475C11.8831 23.705 12.0781 23.5625 12.2806 23.42C12.3781 23.3525 12.4756 23.2775 12.5806 23.21C12.6856 23.1425 12.7756 23.0675 12.8806 22.9925C12.8826 22.9925 12.8845 22.9917 12.8859 22.9903C12.8873 22.9889 12.8881 22.987 12.8881 22.985V22.9775C11.9746 22.3415 11.1331 21.734 10.3531 21.125ZM26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13C25.6981 18.4775 24.6556 17.8475 23.5906 17.2175H23.5831V17.21L23.2006 16.9925C22.8181 16.775 22.4356 16.565 22.0531 16.355C21.8356 16.2275 21.6181 16.1075 21.3931 15.995C20.9731 15.7625 20.5531 15.5375 20.1256 15.3275C20.0814 15.2967 20.0335 15.2715 19.9831 15.2525C19.9831 15.2375 19.9831 15.2375 19.9756 15.245C19.4506 14.9675 18.9331 14.7125 18.4156 14.465C17.8681 14.195 17.3281 13.94 16.7881 13.7H16.7806C16.2931 13.475 15.8206 13.2725 15.3406 13.0625L14.6206 12.77C14.3881 12.6725 14.1556 12.575 13.9231 12.485C13.1956 12.2 12.4831 11.9375 11.7856 11.7125C11.0881 11.4725 10.4056 11.2625 9.75311 11.075C9.46811 11 9.17562 10.925 8.90562 10.865C8.62062 10.7975 8.34311 10.73 8.07311 10.67C7.60812 10.5725 7.16562 10.4975 6.73812 10.4375C6.34812 10.385 5.96562 10.3475 5.61312 10.325C5.31312 10.3025 5.02062 10.3025 4.75062 10.3025C4.48981 10.3046 4.22935 10.3221 3.97062 10.355L3.96312 10.3475C3.63076 10.3889 3.30223 10.4566 2.98062 10.55C2.86812 10.5875 2.75562 10.625 2.65062 10.6625C2.47191 10.7314 2.29888 10.8141 2.13312 10.91C1.89763 11.04 1.68278 11.2043 1.49562 11.3975C1.3031 11.5844 1.1366 11.7963 1.00062 12.0275C-0.116884 13.955 1.08312 16.6625 4.55562 20.0825C5.13312 20.6375 5.74062 21.2075 6.40812 21.77C7.18062 21.1475 7.98312 20.5325 8.83062 19.91C8.83812 19.91 8.83812 19.9025 8.84562 19.9025C5.13312 16.7825 3.39312 14.33 3.59562 13.5275C4.27062 12.875 7.97562 13.3025 13.5481 15.5675C13.9156 15.725 14.2906 15.8825 14.6881 16.055H14.6956C15.2581 16.295 15.8356 16.565 16.4356 16.85C16.5481 16.895 16.6531 16.9475 16.7656 16.9925C16.7697 16.9966 16.7749 16.9992 16.7806 17C17.8081 17.495 18.8756 18.04 19.9831 18.635C20.6131 18.9725 21.2431 19.3325 21.8881 19.7C22.5331 20.0675 23.1631 20.45 23.7706 20.825C24.8506 21.4925 25.8581 22.145 26.7931 22.7825L26.7931 22.775C26.7931 22.3415 26.7856 21.914 26.7781 21.4865L26.7781 21.485ZM32.1106 22.985C31.3381 22.37 30.5131 21.7475 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006L27.1081 23C28.0156 23.6375 28.8631 24.26 29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23L32.1106 22.985Z",
					fill: "#C5EBF5"
				}))
		},
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				A2: function() {
					return i
				},
				He: function() {
					return c
				},
				N$: function() {
					return f
				},
				Qq: function() {
					return a
				},
				ST: function() {
					return l
				},
				wM: function() {
					return o
				}
			});
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				a = "login-apple-jwt",
				l = "cf-test",
				c = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				f = m => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: m ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: m ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: m ? e.rD : e.PJ
				}, {
					title: "apple.sign_in_with_apple.impact.title",
					description: "apple.sign_in_with_apple.impact.description",
					icon: e.i2
				}],
				i = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				_: function() {
					return a
				},
				c: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let a = function(c) {
				return c.TEMPLATE_SELECTED = "template selected", c.TEMPLATE_PRODUCT_SELECTED = "template product selected", c.TEMPLATE_SAVE_DRAFT = "template save draft", c.TEMPLATE_CANCEL = "template cancel", c.TEMPLATE_DEPLOY = "template deploy", c
			}({});
			const l = (c, f) => o().sendEvent(c, {
				template_name: f
			})
		},
		"../react/pages/pages/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				A: function() {
					return T
				},
				C1: function() {
					return g
				},
				Dp: function() {
					return U
				},
				GF: function() {
					return O
				},
				HD: function() {
					return y
				},
				IK: function() {
					return c
				},
				L7: function() {
					return a
				},
				Li: function() {
					return _
				},
				Ni: function() {
					return L
				},
				OG: function() {
					return le
				},
				QF: function() {
					return me
				},
				QV: function() {
					return h
				},
				Sx: function() {
					return I
				},
				Ub: function() {
					return re
				},
				X3: function() {
					return s
				},
				aP: function() {
					return i
				},
				bA: function() {
					return w
				},
				eO: function() {
					return r
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
				hE: function() {
					return Q
				},
				iS: function() {
					return P
				},
				ku: function() {
					return M
				},
				nY: function() {
					return E
				},
				w3: function() {
					return l
				},
				wJ: function() {
					return m
				},
				wp: function() {
					return d
				},
				yu: function() {
					return n
				},
				zF: function() {
					return N
				},
				zG: function() {
					return S
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-workers-and-pages",
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
						gettingStarted: "https://developers.cloudflare.com/pages/getting-started",
						configuringBuilds: "https://developers.cloudflare.com/pages/platform/build-configuration",
						supportedFrameworks: "https://developers.cloudflare.com/pages/platform/build-configuration#framework-presets",
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
						configFile: "https://developers.cloudflare.com/pages/functions/wrangler-configuration/"
					},
					github: {
						appHomepage: `https://github.com/apps/${o}`,
						installations: "https://github.com/settings/installations",
						newInstallation: `https://github.com/apps/${o}/installations/new`,
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
				c = 58,
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
				i = "production",
				m = 2e3,
				g = 100,
				n = 350,
				s = 1e7,
				r = ["Success:", "Error:", "Failed:"],
				d = 10,
				u = "_headers",
				_ = "_redirects",
				T = "_routes.json",
				D = "_worker.js",
				P = "do-a-barrel-roll",
				y = [u, _, T, D],
				I = 1024 * 1024 * 25,
				E = 1e3,
				h = {
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
				N = 2e5,
				O = 15e4,
				b = 3e3,
				w = 2250,
				M = "workers",
				U = "cloudflare_pages_build_caching",
				Q = 2;
			let re = function(j) {
				return j[j.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", j[j.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", j[j.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", j[j.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", j[j.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", j[j.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", j
			}({});
			const me = 1,
				ce = 2,
				le = 2
		},
		"../react/pages/pages/routes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Hv: function() {
					return a
				},
				_j: function() {
					return o
				},
				zE: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
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
				l = f => `${f.subdomain}.pages.dev`,
				c = {
					installation: {
						github: {
							user: (0, e.BC)`https://github.com/settings/installations/${"installation_id"}`,
							organization: (0, e.BC)`https://github.com/organizations/${"organization_name"}/settings/installations/${"installation_id"}`
						},
						gitlab: (0, e.BC)`https://gitlab.com/${"username"}/${"repo"}/-/hooks/`
					}
				}
		},
		"../react/pages/pipelines/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				KO: function() {
					return i
				},
				L9: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var s = 1; s < arguments.length; s++) {
					var r = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(u) {
						return Object.getOwnPropertyDescriptor(r, u).enumerable
					})), d.forEach(function(u) {
						l(n, u, r[u])
					})
				}
				return n
			}

			function l(n, s, r) {
				return s = c(s), s in n ? Object.defineProperty(n, s, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = r, n
			}

			function c(n) {
				var s = f(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(n, s) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			let i = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				m = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const g = (n, s = {}) => {
				o().sendEvent(n, a({}, s, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Hv: function() {
					return a
				},
				Jg: function() {
					return f
				},
				_j: function() {
					return o
				},
				vF: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
					root: (0, e.BC)`/${"accountId"}/r2`,
					overview: (0, e.BC)`/${"accountId"}/r2/overview`,
					cliQuickStart: (0, e.BC)`/${"accountId"}/r2/cli`,
					createBucket: (0, e.BC)`/${"accountId"}/r2/new`,
					bucketDetails: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}`,
					bucketDetailsSettings: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/settings`,
					createBucketEventNotification: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/notifications/new`,
					bucketDetailsCors: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/cors/${"op"}`,
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
				l = i => {
					const m = "r2.cloudflarestorage.com";
					switch (i) {
						case "default":
							return m;
						case "eu":
							return `eu.${m}`;
						case "fedramp":
							return `fedramp.${m}`
					}
				},
				c = (i, m) => {
					const g = l(m);
					return `https://${i}.${g}`
				},
				f = (i, m, g) => `${c(i,m)}/${g}`
		},
		"../react/pages/r2/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const l = "r2_migrator_waitlist",
				c = "r2migrator",
				f = "r2",
				i = "r2_storage_migrator",
				m = "r2_storage_migrator",
				g = r => getAccountEntitlement(r, "r2.enabled"),
				n = r => Boolean((0, a.Le)(r, i, l)),
				s = r => Boolean(getAccountFlipperFlagsChanges(r, m, c))
		},
		"../react/pages/secrets-store/resources/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Hf: function() {
					return L
				},
				JJ: function() {
					return f
				},
				Js: function() {
					return l
				},
				LN: function() {
					return _
				},
				Nm: function() {
					return r
				},
				Oh: function() {
					return D
				},
				Q2: function() {
					return N
				},
				QF: function() {
					return T
				},
				RR: function() {
					return y
				},
				T_: function() {
					return S
				},
				Xm: function() {
					return i
				},
				Zl: function() {
					return O
				},
				dv: function() {
					return c
				},
				fp: function() {
					return s
				},
				jx: function() {
					return h
				},
				nQ: function() {
					return d
				},
				px: function() {
					return P
				},
				tP: function() {
					return a
				},
				vh: function() {
					return u
				},
				wB: function() {
					return w
				},
				z3: function() {
					return b
				},
				zt: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				o = t("../../../../node_modules/yup/es/index.js");
			const a = "secrets-store-account-level",
				l = "https://developers.cloudflare.com/secrets-store/",
				c = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				f = 1,
				i = 10,
				m = 100;
			let g = function(M) {
					return M.NAME = "name", M
				}({}),
				n = function(M) {
					return M.NAME = "name", M
				}({});
			const s = {
				initialPaginationState: {
					page: f,
					perPage: i
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
					autoClearQs: !0
				}
			};
			let r = function(M) {
					return M.NAME = "name", M.COMMENT = "comment", M.TAGS = "tags", M.SERVICES = "services", M.STATUS = "status", M
				}({}),
				d = function(M) {
					return M.PENDING = "pending", M.ACTIVE = "active", M.DELETED = "deleted", M
				}({}),
				u = function(M) {
					return M.LIST_SECRETS_STORES = "listSecretsStores", M.LIST_SECRETS = "listSecrets", M.GET_SECRET = "getSecret", M.SECRETS_QUOTA = "secretsQuota", M
				}({}),
				_ = function(M) {
					return M.CREATE = "create", M.EDIT = "edit", M.DUPLICATE = "duplicate", M
				}({}),
				T = function(M) {
					return M.WORKERS = "workers", M
				}({});
			const D = "default_secrets_store";
			let P = function(M) {
				return M.CREATE = "create", M.EDIT = "edit", M.DUPLICATE = "duplicate", M.VIEW = "view", M
			}({});
			const y = "delete_operation",
				I = /^[a-zA-Z0-9_-]+$/,
				E = (M, U, Q, re, me) => o.Ry().shape({
					name: o.Z_().required(M("secrets_store.form.create.errors.name.required")).matches(I, M("secrets_store.form.create.errors.name.invalid_characters")).max(255, M("secrets_store.form.create.errors.name.max")),
					value: o.Z_().test("required-if-creating", M("secrets_store.form.create.errors.value.required"), ce => U || me ? !!ce : !0).max(1024, M("secrets_store.form.create.errors.value.max")),
					comment: o.Z_().max(1024, M("secrets_store.form.create.errors.comment.max")),
					scopes: o.Z_().required().oneOf(Object.values(T), M("secrets_store.form.create.errors.scopes.invalid")),
					labels: o.IX().of(o.Z_())
				}),
				h = (M, U, Q, re, me) => o.Ry().shape({
					secrets: o.IX().of(E(M, U, Q, re, me))
				}),
				L = {
					name: "",
					value: "",
					scopes: T.WORKERS,
					comment: ""
				},
				S = "secrets-store.store.secret";
			let N = function(M) {
				return M.DUPLICATE = "duplicate", M.DEPLOY = "deploy", M
			}({});
			const O = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let b = function(M) {
					return M.CREATE_SECRET = "create secrets store secret", M.EDIT_SECRET = "edit secrets store secret", M.DUPLICATE_SECRET = "duplicate secrets store secret", M.DELETE_SECRET = "delete secrets store secret", M.BIND_SECRET = "open secrets store binding drawer", M
				}({}),
				w = function(M) {
					return M.SECRETS_STORE = "secrets store main", M.WORKERS_BINDING = "workers binding drawer", M
				}({})
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Gk: function() {
					return r
				},
				LA: function() {
					return g
				},
				Wk: function() {
					return s
				},
				_V: function() {
					return i
				},
				c5: function() {
					return n
				},
				om: function() {
					return m
				}
			});
			var e = t("../react/pages/security-center/BlockedContent/types.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(d) {
				for (var u = 1; u < arguments.length; u++) {
					var _ = arguments[u] != null ? Object(arguments[u]) : {},
						T = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(_).filter(function(D) {
						return Object.getOwnPropertyDescriptor(_, D).enumerable
					})), T.forEach(function(D) {
						l(d, D, _[D])
					})
				}
				return d
			}

			function l(d, u, _) {
				return u = c(u), u in d ? Object.defineProperty(d, u, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[u] = _, d
			}

			function c(d) {
				var u = f(d, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function f(d, u) {
				if (typeof d != "object" || d === null) return d;
				var _ = d[Symbol.toPrimitive];
				if (_ !== void 0) {
					var T = _.call(d, u || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(d)
			}
			const i = "blocked-content-table-tooltip",
				m = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					canceled: "gray"
				},
				g = ["phishing_interstitial", "malware_interstitial", "legal_block"],
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
						direction: o.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(e.GH)
					},
					filters: Object.values(e.GH).reduce((d, u) => a({}, d, {
						[u]: u
					}), {})
				};
			let r = function(d) {
				return d.COPY_URL = "copy blocked content url", d.REQUEST_REVIEW = "request blocked content review", d.ADD_FILTER = "Add filter", d.REMOVE_FILTER = "Remove filter", d
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$E: function() {
					return e
				},
				GH: function() {
					return a
				},
				M3: function() {
					return o
				},
				fL: function() {
					return l
				}
			});
			let e = function(f) {
					return f.Pending = "pending", f.Active = "active", f
				}({}),
				o = function(f) {
					return f.Active = "active", f.InReview = "in_review", f.Pending = "pending", f.Canceled = "canceled", f
				}({}),
				a = function(f) {
					return f.Domain = "domain", f.Status = "status", f.BlockType = "blockType", f
				}({}),
				l = function(f) {
					return f.EnforcementDate = "enforcementDate", f.BlockType = "blockType", f.Hostname = "hostname", f.Status = "status", f
				}({}),
				c = function(f) {
					return f.Removed = "removed", f.Misclassified = "misclassified", f
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Ev: function() {
					return a
				},
				RY: function() {
					return e
				},
				v9: function() {
					return o
				}
			});
			let e = function(l) {
				return l.LOAD_SCAN_INFO = "load url scan information", l.INITIATE_URL_SCAN = "initiate url scan", l
			}({});
			const o = {
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
		"../react/pages/security/analytics/resources/labels.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AU: function() {
					return a
				},
				Bc: function() {
					return o
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
				o = {
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
		"../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AS: function() {
					return f
				},
				IK: function() {
					return s
				},
				Ki: function() {
					return a
				},
				Lz: function() {
					return r
				},
				nT: function() {
					return m
				},
				o4: function() {
					return d
				},
				oY: function() {
					return l
				},
				qH: function() {
					return n
				},
				x3: function() {
					return i
				}
			});
			var e = t("../react/pages/security/analytics/resources/labels.ts"),
				o = t("../react/common/constants/analytics/botScoreSrc.ts");
			const a = ["block", "challenge", "jschallenge", "managedChallenge"],
				l = ["miss", "expired", "bypass", "dynamic"],
				c = u => Object.fromEntries(Object.entries(u).map(([_, T]) => [T, _])),
				f = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				i = c(f),
				m = {
					asn: e.AU.ASN,
					country: e.AU.COUNTRY,
					ip: e.AU.IP,
					ipRange: e.AU.IP_RANGE,
					securityLevel: e.AU.SECURITY_LEVEL,
					validation: e.AU.VALIDATION,
					zoneLockdown: e.AU.ZONE_LOCKDOWN,
					waf: e.AU.WAF,
					rateLimit: e.AU.RATE_LIMIT,
					firewallRules: e.AU.FIREWALL_RULES,
					bic: e.AU.BIC,
					hot: e.AU.HOT,
					unknown: e.AU.UNKNOWN,
					l7ddos: e.AU.L7DOS,
					botFight: e.AU.BOT_FIGHT_MODE,
					apiShield: e.AU.API_SHIELD,
					apiShieldSchemaValidation: e.AU.API_SHIELD_SCHEMA_VALIDATION,
					apiShieldTokenValidation: e.AU.API_SHIELD_TOKEN_VALIDATION,
					firewallCustom: e.AU.FIREWALL_CUSTOM,
					firewallManaged: e.AU.FIREWALL_MANAGED,
					dlp: e.AU.DLP,
					botManagement: e.AU.BOT_MANAGEMENT,
					uaBlock: e.AU.UA_BLOCK
				},
				g = c(m),
				n = c(o.EG);
			let s = function(u) {
				return u.SAMPLED = "sampled", u.RAW = "raw", u
			}({});
			const r = "security-analytics-log-explorer";
			let d = function(u) {
				return u.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', u.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', u.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', u.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', u.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', u
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Fj: function() {
					return m
				},
				kq: function() {
					return i
				},
				xr: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var s = 1; s < arguments.length; s++) {
					var r = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(u) {
						return Object.getOwnPropertyDescriptor(r, u).enumerable
					})), d.forEach(function(u) {
						l(n, u, r[u])
					})
				}
				return n
			}

			function l(n, s, r) {
				return s = c(s), s in n ? Object.defineProperty(n, s, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = r, n
			}

			function c(n) {
				var s = f(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(n, s) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			let i = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const m = {
					[i.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[i.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[i.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[i.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[i.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[i.JWT_VALIDATION]: {
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
					[i.SETTINGS]: {
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
					category: s = "user journey",
					product: r = i.MAIN,
					productName: d,
					additionalData: u
				}) => {
					o().sendEvent(n, a({
						category: s,
						product: r,
						productName: d
					}, u || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
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
					return o
				}
			});
			let e = function(c) {
					return c.INITIAL_FETCH_SCORES = "view bots scores distribution", c.FETCH_CONFIGURATION = "view bots configuration page", c.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", c.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", c.UPDATE_SETTINGS = "update bots settings", c.DELETE_RULE = "delete bots ruleset", c.UPDATE_RULE = "update bots ruleset", c.FETCH_RULES = "view bots ruleset", c.CONFIGURE_BOT_MANAGEMENT = "view bots management", c.WAF_RULES_REDIRECT = "redirect waf rules", c.CHANGED_ZONE_SETTINGS = "change zone setting", c
				}({}),
				o = function(c) {
					return c.PROVIDED_TEMPLATE = "provided template link in detection card", c.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", c.USE_TEMPLATE = "use template", c.CREATE_FIREWALL_RULE = "create firewall rule", c.WAF_RULES = "waf rules", c
				}({});
			const a = "user journey",
				l = "Bots"
		},
		"../react/pages/security/overview/resources/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AZ: function() {
					return l
				},
				Ht: function() {
					return a
				},
				Kx: function() {
					return e
				},
				S: function() {
					return o
				}
			});
			let e = function(c) {
				return c.NAME = "description", c.SOURCE = "source", c.LAST_UPDATE = "lastUpdatedAt", c.ACTIVITY = "activity", c
			}({});
			const o = 5;
			let a = function(c) {
					return c.EXTERNAL_DOCUMENTATION = "external_documentation", c.LINK_TO_MANAGED = "link_to_managed_rules", c.LINK_TO_EVENTS = "link_to_security_events", c.LINK_TO_DDOS = "link_to_ddos", c.LINK_BOT_MGMT = "link_to_bot_mgmt", c.LINK_TO_AI_AUDIT = "link_to_ai_audit", c.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", c.LINK_TO_PAGE_SHIELD = "link_to_page_shield", c.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", c.LINK_TO_SECURITY_EVENTS = "link_to_security_events", c.LINK_TO_IP_RULE = "link_to_ip_rule", c.LINK_TO_CONFIGURATION = "link_to_configuration", c
				}({}),
				l = function(c) {
					return c.LOAD_INSIGHTS = "load overview action items", c.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", c.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", c.CLICK_ACTION_INSIGHT = "click overview action item suggestion", c
				}({})
		},
		"../react/pages/security/page-shield/resources/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				CP: function() {
					return O
				},
				FV: function() {
					return ce
				},
				KH: function() {
					return S
				},
				Ks: function() {
					return x
				},
				Lj: function() {
					return $
				},
				MC: function() {
					return s
				},
				Mq: function() {
					return L
				},
				OV: function() {
					return me
				},
				Oq: function() {
					return N
				},
				QM: function() {
					return E
				},
				SI: function() {
					return j
				},
				SJ: function() {
					return D
				},
				Sk: function() {
					return M
				},
				Ti: function() {
					return C
				},
				Uc: function() {
					return h
				},
				Uq: function() {
					return m
				},
				Uv: function() {
					return re
				},
				V0: function() {
					return g
				},
				VT: function() {
					return u
				},
				YC: function() {
					return U
				},
				j$: function() {
					return P
				},
				qc: function() {
					return T
				},
				sV: function() {
					return b
				},
				sW: function() {
					return le
				},
				u8: function() {
					return d
				},
				v5: function() {
					return n
				},
				xg: function() {
					return Q
				},
				yd: function() {
					return I
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				a = t("../react/pages/security/page-shield/resources/types.ts");

			function l(B) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var X = arguments[Z] != null ? Object(arguments[Z]) : {},
						ie = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(X).filter(function(q) {
						return Object.getOwnPropertyDescriptor(X, q).enumerable
					})), ie.forEach(function(q) {
						c(B, q, X[q])
					})
				}
				return B
			}

			function c(B, Z, X) {
				return Z = f(Z), Z in B ? Object.defineProperty(B, Z, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[Z] = X, B
			}

			function f(B) {
				var Z = i(B, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function i(B, Z) {
				if (typeof B != "object" || B === null) return B;
				var X = B[Symbol.toPrimitive];
				if (X !== void 0) {
					var ie = X.call(B, Z || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(B)
			}
			const m = 50,
				g = 9,
				n = "copy script url page shield",
				s = "disable page shield",
				r = "click documentation link",
				d = "enable page shield",
				u = "filter search page shield",
				_ = "filter search view all page shield",
				T = "hover score tooltip page shield",
				D = "open alert modal page shield",
				P = "change pagination page shield",
				y = "close script modal page shield",
				I = "open script modal page shield",
				E = "select alert type page shield",
				h = "sort column page shield",
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
					STARTS_WITH: o.Gn.startsWith,
					ENDS_WITH: o.Gn.endsWith,
					EQUALS: o.Gn.equals,
					CONTAINS: o.Gn.contains,
					DOES_NOT_CONTAIN: o.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: o.Gn.in
				},
				N = {
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
				O = l({}, N, {
					urls: l({}, N.urls, {
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
						operators: [o.Gn.equals]
					},
					name: {
						example: "cookie_1",
						operators: [o.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.name",
						urlParam: "name"
					},
					domain: {
						example: "hostname.com",
						operators: [o.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.domain",
						urlParam: "domain"
					},
					path: {
						example: "/",
						operators: [o.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.path",
						urlParam: "path"
					},
					same_site: {
						operators: [o.Gn.equals],
						type: e.kE.select,
						options: ["lax", "strict", "none"],
						label: "firewall.page_shield.same_site",
						urlParam: "same_site"
					},
					http_only: {
						operators: [o.Gn.equals],
						type: e.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.http_only",
						urlParam: "http_only"
					},
					secure: {
						operators: [o.Gn.equals],
						type: e.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.secure",
						urlParam: "secure"
					}
				};
			let w = function(B) {
				return B.SECURITY_THREATS = "Security Threats", B.C2_BOTNET = "C2 & Botnet", B.CRYPTOMINING = "Cryptomining", B.MALWARE = "Malware", B.PHISHING = "Phishing", B.SPYWARE = "Spyware", B.DGA_DOMAINS = "DGA Domains", B.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", B
			}({});
			const M = "https://www.cloudflare.com/plans/enterprise/contact/",
				U = {
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
				Q = {
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
					[a.I1.STYLE]: "firewall.page_shield.policies.table.style",
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
				me = {
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
				le = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				j = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				$ = {
					[a.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[a.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[a.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				x = {
					[a.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[a.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[a.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				C = {
					[a.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[a.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[a.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
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
					return I.Xe
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
					return I.k2
				},
				$g: function() {
					return I.$g
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
					return I.I1
				},
				Wq: function() {
					return I.Wq
				},
				jf: function() {
					return I.jf
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
					return I.R$
				},
				pG: function() {
					return T
				},
				Ar: function() {
					return _
				},
				Sk: function() {
					return l.Sk
				},
				gY: function() {
					return D
				},
				SE: function() {
					return c
				},
				m: function() {
					return n
				},
				xP: function() {
					return g
				},
				CI: function() {
					return r
				},
				p0: function() {
					return d
				},
				xl: function() {
					return m
				},
				Tb: function() {
					return i
				},
				h3: function() {
					return P
				},
				xq: function() {
					return V
				},
				SQ: function() {
					return Z
				},
				C0: function() {
					return X
				},
				av: function() {
					return L
				},
				W3: function() {
					return E
				},
				WO: function() {
					return b
				},
				Dk: function() {
					return re
				},
				we: function() {
					return j
				},
				Yt: function() {
					return C
				},
				ex: function() {
					return x
				},
				E1: function() {
					return $
				},
				e0: function() {
					return ce
				},
				UH: function() {
					return w
				},
				Qt: function() {
					return le
				},
				K$: function() {
					return M
				},
				dm: function() {
					return N
				},
				oK: function() {
					return U
				},
				qZ: function() {
					return B
				},
				_4: function() {
					return ie
				},
				qo: function() {
					return q
				},
				CB: function() {
					return f
				},
				ti: function() {
					return u
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(o),
				l = t("../react/pages/security/page-shield/resources/constants.ts");
			const c = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", z => (a().sendEvent(l.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), z)),
				f = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", z => (a().sendEvent(l.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), z)),
				i = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", z => (a().sendEvent(l.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), z)),
				m = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				g = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", z => (a().sendEvent(l.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), z)),
				n = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				s = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", z => (a().sendEvent(l.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), z)),
				r = (0, e.ZP)("pageShieldPolicies", "get", "/zones/(zoneId)/page_shield/policies").on("success", z => (a().sendEvent(l.FV.VIEW_PAGE_SHIELD_POLICIES, {
					category: "user journey",
					product: "Page shield"
				}), z)),
				d = (0, e.ZP)("pageShieldPolicy", "get", "/zones/(zoneId)/page_shield/policies/(policiesId)"),
				u = (0, e.ZP)("pageShieldPolicy", "put", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", z => (a().sendEvent(l.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "update"
				}), z)),
				_ = (0, e.ZP)("pageShieldPolicy", "delete", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", z => (a().sendEvent(l.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "delete"
				}), z)),
				T = (0, e.ZP)("pageShieldPolicy", "post", "/zones/(zoneId)/page_shield/policies").on("success", z => (a().sendEvent(l.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "create"
				}), z)),
				D = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				P = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var y = t("../react/app/redux/normalizer.js"),
				I = t("../react/pages/security/page-shield/resources/types.ts");
			const E = z => z.pageShield.configuration,
				h = z => {
					var ee;
					return (ee = z.pageShield.configuration.data) === null || ee === void 0 ? void 0 : ee.enabled
				},
				L = z => {
					var ee;
					return (ee = E(z)) === null || ee === void 0 ? void 0 : ee.data
				},
				S = z => z.pageShield.scripts,
				N = z => z.pageShield.script,
				O = z => z.pageShield.connections,
				b = z => z.pageShield.connection,
				w = z => z.pageShield.policies,
				M = z => z.pageShield.policy,
				U = (0, y.P1)("pageShieldScripts", S),
				Q = (0, y.P1)("pageShieldScript", N),
				re = (0, y.P1)("pageShieldConnections", O),
				me = (0, y.P1)("pageShieldConnection", b),
				ce = (0, y.P1)("pageShieldPolicies", w),
				le = (0, y.P1)("pageShieldPolicy", M),
				j = (z, ee) => z === I.Wq.SCRIPT_MONITOR ? U(ee) || [] : re(ee) || [],
				$ = (z, ee) => z === I.Wq.SCRIPT_MONITOR ? S(ee) || [] : O(ee) || [],
				x = (z, ee) => z === I.Wq.SCRIPT_MONITOR ? Q(ee) : me(ee),
				C = z => z.pageShield.domainIntel,
				B = z => z.pageShield.whoIsRecord,
				Z = (z, ee, pe) => {
					var de;
					const _e = Object.values(pe).map(ye => ({
						key: ye,
						label: l.Uv[ye],
						score: z[ye]
					})).filter(ye => ye.score !== void 0 && ye.score <= ee);
					return ee === l.V0 && _e.length === 0 && ((de = z.js_integrity_score) !== null && de !== void 0 ? de : 100) <= ee && _e.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), _e
				},
				X = (z, ee) => Object.values(ee).filter(pe => z[pe] === !0).map(pe => l.OV[pe]),
				ie = z => z === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				q = (z, ee) => z[I.$g.MagecartScore] !== void 0 && z[I.$g.MagecartScore] <= ee || z[I.$g.MalwareScore] !== void 0 && z[I.$g.MalwareScore] <= ee || z[I.$g.CryptominingScore] !== void 0 && z[I.$g.CryptominingScore] <= ee || z.js_integrity_score !== void 0 && z.js_integrity_score <= ee,
				k = ["cdn.jsdelivr.net", "unpkg.com"],
				K = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				V = z => {
					if (z.includes("@latest")) {
						const pe = z.split("@latest");
						if (pe.length != 2) return;
						const de = pe[0].length,
							_e = de + "@latest".length;
						return [de, _e]
					}
					if (!!k.some(pe => z.includes(pe)))
						for (const pe of K) {
							const de = z.match(pe);
							if (!de) continue;
							const _e = de.index;
							if (_e === 0) return null;
							const ye = _e + de[0].length;
							return [_e, ye]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$g: function() {
					return g
				},
				I1: function() {
					return c
				},
				R$: function() {
					return n
				},
				Wq: function() {
					return m
				},
				Xe: function() {
					return f
				},
				jf: function() {
					return i
				},
				k2: function() {
					return s
				}
			});

			function e(r) {
				for (var d = 1; d < arguments.length; d++) {
					var u = arguments[d] != null ? Object(arguments[d]) : {},
						_ = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(u).filter(function(T) {
						return Object.getOwnPropertyDescriptor(u, T).enumerable
					})), _.forEach(function(T) {
						o(r, T, u[T])
					})
				}
				return r
			}

			function o(r, d, u) {
				return d = a(d), d in r ? Object.defineProperty(r, d, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[d] = u, r
			}

			function a(r) {
				var d = l(r, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function l(r, d) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var _ = u.call(r, d || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(r)
			}
			let c = function(r) {
				return r.BASE_URI = "base-uri", r.CHILD = "child-src", r.CONNECT = "connect-src", r.DEFAULT = "default-src", r.FONT = "font-src", r.FORM_ACTION = "form-action", r.FRAME = "frame-src", r.FRAME_ANCESTORS = "frame-ancestors", r.IMAGE = "img-src", r.MANIFEST = "manifest-src", r.MEDIA = "media-src", r.OBJECT = "object-src", r.SCRIPT = "script-src", r.STYLE = "style-src", r.WORKER = "worker-src", r.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", r
			}({});
			const f = e({}, c, {
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
			let i = function(r) {
					return r.MONITOR = "monitor", r.POLICIES = "policies", r.SETTINGS = "settings", r
				}({}),
				m = function(r) {
					return r.SCRIPT_MONITOR = "script", r.CONNECTION_MONITOR = "connection", r.COOKIE_MONITOR = "cookie", r
				}({}),
				g = function(r) {
					return r.CryptominingScore = "cryptomining_score", r.MalwareScore = "malware_score", r.MagecartScore = "magecart_score", r
				}({}),
				n = function(r) {
					return r.DataflowScore = "dataflow_score", r.ObfuscationScore = "obfuscation_score", r
				}({}),
				s = function(r) {
					return r.DomainMalicious = "domain_reported_malicious", r.UrlMalicious = "url_reported_malicious", r
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				_C: function() {
					return u
				},
				_R: function() {
					return _
				},
				dY: function() {
					return D
				},
				fy: function() {
					return I
				},
				ji: function() {
					return d
				},
				pR: function() {
					return T
				},
				pV: function() {
					return E
				},
				rj: function() {
					return y
				},
				yR: function() {
					return h
				},
				zf: function() {
					return P
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				o = t("../../../common/util/types/src/api/phases/fields.tsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t.n(a),
				c = t("../react/utils/translator.tsx"),
				f = t("../react/pages/security/resources/types.ts"),
				i = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				m = t("../node_modules/@cloudflare/elements/es/index.js");

			function g(L) {
				for (var S = 1; S < arguments.length; S++) {
					var N = arguments[S] != null ? Object(arguments[S]) : {},
						O = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(N).filter(function(b) {
						return Object.getOwnPropertyDescriptor(N, b).enumerable
					})), O.forEach(function(b) {
						n(L, b, N[b])
					})
				}
				return L
			}

			function n(L, S, N) {
				return S = s(S), S in L ? Object.defineProperty(L, S, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[S] = N, L
			}

			function s(L) {
				var S = r(L, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function r(L, S) {
				if (typeof L != "object" || L === null) return L;
				var N = L[Symbol.toPrimitive];
				if (N !== void 0) {
					var O = N.call(L, S || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(L)
			}
			const d = 10;
			let u = function(L) {
					return L.MTLS_ACCESS = "mTLS-enforced authentication", L.ZONE_LOCKDOWN = "Zone lockdown", L.USER_AGENT = "User agent blocking", L.EMAIL_VALIDITY = "Disposable email checks", L.IP_BASED = "IP-based rule", L.GEOGRAPHY_BASE = "Geography-based rule", L
				}({}),
				_ = function(L) {
					return L.LEAKED_CREDENTIALS = "Leaked Credentials Checks", L
				}({});
			const T = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				D = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: u.GEOGRAPHY_BASE,
					trackedEvent: T.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: u.IP_BASED,
					trackedEvent: T.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: u.USER_AGENT,
					trackedEvent: T.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: u.ZONE_LOCKDOWN,
					trackedEvent: T.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				P = {
					[f.X.UI_SECTION]: L => ({
						[u.MTLS_ACCESS]: {
							ruleName: u.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${L.account.id}/${L.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[u.ZONE_LOCKDOWN]: {
							ruleName: u.ZONE_LOCKDOWN,
							displayName: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [m.ZC, e.QV],
								applyMarkdown: !0,
								componentProps: [{
									display: "inline"
								}, {
									to: `/${L.account.id}/configurations/lists`
								}]
							})
						},
						[u.GEOGRAPHY_BASE]: {
							ruleName: u.GEOGRAPHY_BASE,
							displayName: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[u.IP_BASED]: {
							ruleName: u.IP_BASED,
							displayName: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.ip_base.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.ip_base.wafRulesOverview",
								applyMarkdown: !0,
								Components: [m.ZC, e.QV],
								componentProps: [{
									display: "inline"
								}, {
									to: `/${L.account.id}/configurations/lists`
								}]
							})
						},
						[u.USER_AGENT]: {
							ruleName: u.USER_AGENT,
							displayName: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${L.account.id}/configurations/lists`
								}]
							})
						},
						[u.EMAIL_VALIDITY]: {
							ruleName: u.EMAIL_VALIDITY,
							capability: "security_rules.rules.capability.fraud",
							displayName: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[f.X.WAF_RULES]: {
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
				y = {
					[f.X.WAF_RULES]: {
						[_.LEAKED_CREDENTIALS]: {
							ruleName: _.LEAKED_CREDENTIALS,
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
						[_.LEAKED_CREDENTIALS]: {
							ruleName: _.LEAKED_CREDENTIALS,
							displayName: l().createElement(c.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: l().createElement(c.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let I = function(L) {
				return L.DISCOVERY = "discovery", L.SEQUENCES = "sequences", L.SCHEMA_VALIDATION = "schema-validation", L.SETTINGS = "settings", L.API_RULES = "api-rules", L.UPGRADE = "upgrade", L
			}({});
			const E = g({}, i.g, {
				[o.df.HttpRequestFirewallManaged]: g({}, i.g[o.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[o.df.HttpRequestFirewallCustom]: g({}, i.g[o.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[o.df.HttpRateLimit]: g({}, i.g[o.df.HttpRateLimit], {
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
			let h = function(L) {
				return L.APP_SEC_MVP = "app-security-navigation-mvp", L
			}({})
		},
		"../react/pages/security/resources/types.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				X: function() {
					return e
				}
			});
			let e = function(o) {
				return o.UI_SECTION = "UI_SECTION", o.WAF_RULES = "WAF_RULES", o
			}({})
		},
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				j: function() {
					return m
				},
				y: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(g) {
				for (var n = 1; n < arguments.length; n++) {
					var s = arguments[n] != null ? Object(arguments[n]) : {},
						r = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && r.push.apply(r, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), r.forEach(function(d) {
						l(g, d, s[d])
					})
				}
				return g
			}

			function l(g, n, s) {
				return n = c(n), n in g ? Object.defineProperty(g, n, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[n] = s, g
			}

			function c(g) {
				var n = f(g, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function f(g, n) {
				if (typeof g != "object" || g === null) return g;
				var s = g[Symbol.toPrimitive];
				if (s !== void 0) {
					var r = s.call(g, n || "default");
					if (typeof r != "object") return r;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(g)
			}
			let i = function(g) {
				return g.CLICK_OPT_IN = "click opt in security navigation", g.CLICK_OPT_IN_BUTTON = "click opt in button", g.CLICK_OPT_OUT_BUTTON = "click opt out button", g.CLICK_NEXT_STEP = "click opt in next step", g.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", g.DISPLAY_MODAL = "display opt in modal", g.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", g
			}({});
			const m = (g, n = {}) => {
				o().sendEvent(g, a({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$y: function() {
					return u
				},
				Ai: function() {
					return n
				},
				B: function() {
					return g
				},
				BT: function() {
					return c
				},
				CK: function() {
					return m
				},
				F3: function() {
					return _
				},
				JP: function() {
					return a
				},
				O_: function() {
					return s
				},
				X2: function() {
					return l
				},
				YO: function() {
					return T
				},
				_c: function() {
					return D
				},
				je: function() {
					return d
				},
				ll: function() {
					return f
				},
				qD: function() {
					return i
				},
				tw: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const a = async P => {
				var y, I;
				const E = await (0, e.get)(`/zones/${P}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((y = E == null ? void 0 : E.body) === null || y === void 0 || (I = y.result) === null || I === void 0 ? void 0 : I.value) === "enabled"
			}, l = async (P, y) => (await (0, e.post)(`/zones/${P}/content-upload-scan/${y?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), y), c = async P => {
				var y;
				const I = await (0, e.get)(`/zones/${P}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((y = I == null ? void 0 : I.body) === null || y === void 0 ? void 0 : y.result) || []
			}, f = async (P, y) => {
				var I;
				const E = await (0, e.post)(`/zones/${P}/content-upload-scan/payloads`, {
					body: [y]
				});
				return (I = E == null ? void 0 : E.body) === null || I === void 0 ? void 0 : I.result
			}, i = async (P, y) => (await (0, e.del)(`/zones/${P}/content-upload-scan/payloads/${y}`, {
				hideErrorAlert: !0
			}), y), m = async P => {
				var y;
				const I = await (0, e.get)(`/zones/${P}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((y = I == null ? void 0 : I.body) === null || y === void 0 ? void 0 : y.pii_detection_enabled)
			}, g = async (P, y) => (await (0, e.put)(`/zones/${P}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: y
				}
			}), y), n = async P => {
				var y, I;
				const E = await (0, e.get)(`/zones/${P}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((y = E == null ? void 0 : E.body) === null || y === void 0 || (I = y.result) === null || I === void 0 ? void 0 : I.enabled)
			}, s = async (P, y) => {
				var I, E;
				const h = await (0, e.post)(`/zones/${P}/leaked-credential-checks`, {
					body: {
						enabled: y
					}
				});
				return !!((I = h == null ? void 0 : h.body) === null || I === void 0 || (E = I.result) === null || E === void 0 ? void 0 : E.enabled)
			}, r = async P => {
				var y;
				const I = await (0, e.get)(`/zones/${P}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (y = I == null ? void 0 : I.body) === null || y === void 0 ? void 0 : y.result
			}, d = async (P, y) => {
				var I;
				const E = await (0, e.post)(`/zones/${P}/leaked-credential-checks/detections`, {
					body: y
				});
				return (I = E == null ? void 0 : E.body) === null || I === void 0 ? void 0 : I.result
			}, u = async (P, y) => (await (0, e.del)(`/zones/${P}/leaked-credential-checks/detections/${y}`, {
				hideErrorAlert: !0
			}), y), _ = async (P, y) => {
				await (0, e.put)(`/zones/${P}/security-center/securitytxt`, {
					body: y
				})
			}, T = async P => {
				await (0, e.del)(`/zones/${P}/security-center/securitytxt`)
			}, D = async P => (await (0, e.get)(`/zones/${P}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Xu: function() {
					return u
				},
				Io: function() {
					return L
				},
				FQ: function() {
					return le
				},
				vU: function() {
					return d
				},
				M: function() {
					return T
				},
				d7: function() {
					return _
				},
				Oz: function() {
					return h
				},
				Np: function() {
					return re
				},
				WR: function() {
					return g
				},
				bE: function() {
					return me
				},
				u_: function() {
					return r
				},
				pf: function() {
					return S
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				o = t("../react/pages/security/settings/hooks/api.ts"),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t("webpack/sharing/consume/default/react-redux/react-redux"),
				c = t("../react/pages/security/settings/resources/index.ts"),
				f = t("../react/common/hooks/useZoneEntitlement.ts"),
				i = t("../../../../node_modules/yup/es/index.js"),
				m = t("../react/utils/translator.tsx");
			const g = () => (0, l.useSelector)(c.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				s = () => !!useZoneEntitlement(n),
				r = () => {
					const {
						t: j
					} = (0, m.QT)(), $ = i.Z_().required(j("common.field_is_required")).max(24, j("labels.apply.form.name.error.max_characters")).matches(c.DG, j("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", j("labels.apply.form.name.error.cf_forbidden"), B => !c.aW.test(B)), x = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: B => i.Ry().shape({
							[c.n5.NAME]: B ? i.Z_() : $,
							[c.n5.DESCRIPTION]: B ? i.Z_().optional() : i.Z_().max(150, j("labels.apply.form.description.error.max_characters"))
						})
					}, C = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[c.N2.NAME]: "",
							[c.N2.SOURCE]: c.W3,
							[c.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => i.Ry().shape({
							[c.N2.NEW_LABEL_NAME]: $
						})
					};
					return {
						LABELS_APPLY_FORM: x,
						EDIT_LABELS_MODAL_FORM: C
					}
				},
				d = ({
					modalHeaderFixedHeight: j = 62,
					modalDefaultPaddings: $ = 16
				} = {}) => {
					const x = (0, a.useRef)(null),
						C = (0, a.useRef)(null),
						[B, Z] = (0, a.useState)(0),
						[X, ie] = (0, a.useState)(0),
						q = `calc(100vh - ${B}px - ${X}px - ${$}px)`,
						[k, K] = (0, a.useState)("");
					return (0, a.useEffect)(() => {
						const V = () => {
							var z, ee, pe, de;
							const _e = x == null || (z = x.current) === null || z === void 0 ? void 0 : z.offsetHeight,
								ye = C == null || (ee = C.current) === null || ee === void 0 ? void 0 : ee.offsetHeight,
								Le = ((pe = _e) !== null && pe !== void 0 ? pe : 0) + j,
								Te = (de = ye) !== null && de !== void 0 ? de : 0;
							Z(Le), ie(Te)
						};
						return V(), window.addEventListener("resize", V), () => window.removeEventListener("resize", V)
					}, []), {
						searchTerm: k,
						setSearchTerm: K,
						scrollableSectionMaxHeight: q,
						topMenuRef: x,
						bottomMenuRef: C
					}
				},
				u = j => {
					const $ = g(),
						x = (0, e.useQueryClient)(),
						C = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${j}`,
							queryFn: () => (0, o.JP)(j),
							enabled: $
						}),
						B = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${j}`,
							queryFn: () => (0, o.BT)(j),
							enabled: $ && !!(C == null ? void 0 : C.data)
						}),
						Z = (0, e.useMutation)({
							mutationFn: async ({
								enabled: q
							}) => await (0, o.X2)(j, q),
							onSuccess: q => {
								x.setQueryData([`content-scanning-enabled-${j}`], q)
							}
						}),
						X = (0, e.useMutation)({
							mutationFn: q => (0, o.ll)(j, q),
							onSuccess: q => {
								x.setQueryData([`content-scanning-detections-${j}`], q)
							}
						}),
						ie = (0, e.useMutation)({
							mutationFn: q => (0, o.qD)(j, q),
							onSuccess: q => {
								var k;
								const K = (k = x.getQueryData(`content-scanning-detections-${j}`)) !== null && k !== void 0 ? k : [];
								x.setQueryData([`content-scanning-detections-${j}`], K.filter(({
									id: V
								}) => V !== q))
							}
						});
					return {
						entitled: $,
						loading: C.isLoading || B.isLoading,
						error: C.isError || B.isError,
						enabled: {
							data: C.data,
							isToggling: Z.isLoading,
							toggleEnabled: async q => Z.mutateAsync({
								enabled: q
							})
						},
						detections: {
							data: B.data,
							add: X.mutateAsync,
							delete: ie.mutateAsync,
							loading: X.isLoading || ie.isLoading
						}
					}
				},
				_ = () => {
					const j = (0, l.useSelector)(c.cN),
						$ = (0, l.useSelector)(c.bH),
						x = (0, l.useSelector)(c.P3),
						C = (0, l.useSelector)(c.Ri);
					return {
						hasEditPermission: j,
						isEnabled: x && ($.hasSimilarLeaked || $.hasUsernameAndPasswordLeaked || C)
					}
				},
				T = j => {
					const $ = _(),
						x = (0, e.useQueryClient)(),
						C = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${j}`,
							queryFn: () => (0, o.Ai)(j),
							enabled: !!$.isEnabled,
							retry: 1
						}),
						B = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${j}`,
							queryFn: () => (0, o.tw)(j),
							enabled: !!$.isEnabled && !!(C == null ? void 0 : C.data)
						}),
						Z = (0, e.useMutation)({
							mutationFn: ({
								enabled: q
							}) => (0, o.O_)(j, q),
							onSuccess: q => {
								x.setQueryData([`leaked-credentials-enabled-${j}`], q)
							}
						}),
						X = (0, e.useMutation)({
							mutationFn: async q => await (0, o.je)(j, q),
							onSuccess: q => {
								var k;
								const K = (k = x.getQueryData(`leaked-credentials-detections-${j}`)) !== null && k !== void 0 ? k : [];
								x.setQueryData([`leaked-credentials-detections-${j}`], [...K, q])
							}
						}),
						ie = (0, e.useMutation)({
							mutationFn: q => (0, o.$y)(j, q),
							onSuccess: q => {
								var k;
								const K = (k = x.getQueryData(`leaked-credentials-detections-${j}`)) !== null && k !== void 0 ? k : [];
								x.setQueryData([`leaked-credentials-detections-${j}`], K.filter(({
									id: V
								}) => V !== q))
							}
						});
					return {
						entitled: $.isEnabled,
						hasEditPermissions: $.hasEditPermission,
						loading: C.isLoading || B.isLoading,
						error: C.isError || C.isError,
						enabled: {
							data: C.data,
							isToggling: Z.isLoading,
							toggleEnabled: async q => Z.mutateAsync({
								enabled: q
							})
						},
						detections: {
							data: B.data,
							add: X.mutateAsync,
							delete: ie.mutateAsync,
							loading: X.isLoading || ie.isLoading
						}
					}
				};
			var D = t("../react/common/selectors/zoneSelectors.ts"),
				P = t("../react/common/utils/useQueryCache.ts"),
				y = t("../react/app/redux/index.ts");
			const I = "security-txt",
				E = {
					securityTxt: ({
						zoneId: j
					}) => [I, j]
				},
				h = j => (0, e.useQuery)({
					queryKey: E.securityTxt({
						zoneId: j
					}),
					queryFn: () => (0, o._c)(j),
					select: $ => $.result
				}),
				L = () => {
					const j = (0, y.p4)(D.Cu),
						{
							invalidate: $
						} = (0, P.o)(E.securityTxt({
							zoneId: j
						}));
					return (0, e.useMutation)({
						mutationFn: () => (0, o.YO)(j),
						onSuccess: async () => {
							await $(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				S = j => {
					const {
						invalidate: $
					} = (0, P.o)(E.securityTxt({
						zoneId: j
					}));
					return (0, e.useMutation)({
						mutationFn: x => (0, o.F3)(j, x),
						onSuccess: async () => {
							await $(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var N = t("../../../../node_modules/lodash/isEqual.js"),
				O = t.n(N),
				b = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function w(j) {
				for (var $ = 1; $ < arguments.length; $++) {
					var x = arguments[$] != null ? Object(arguments[$]) : {},
						C = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(x).filter(function(B) {
						return Object.getOwnPropertyDescriptor(x, B).enumerable
					})), C.forEach(function(B) {
						M(j, B, x[B])
					})
				}
				return j
			}

			function M(j, $, x) {
				return $ = U($), $ in j ? Object.defineProperty(j, $, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[$] = x, j
			}

			function U(j) {
				var $ = Q(j, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function Q(j, $) {
				if (typeof j != "object" || j === null) return j;
				var x = j[Symbol.toPrimitive];
				if (x !== void 0) {
					var C = x.call(j, $ || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(j)
			}
			const re = j => {
					const {
						queryKey: $,
						zoneId: x
					} = (0, b.hL)(j), {
						isLoading: C,
						isError: B,
						isSuccess: Z,
						data: X,
						refetch: ie,
						isRefetching: q
					} = (0, e.useQuery)({
						queryKey: $,
						queryFn: () => b.Mi.getLabels(w({
							zoneId: x
						}, j)),
						onSuccess: () => {
							var k;
							const K = j == null || (k = j.filters) === null || k === void 0 ? void 0 : k.source;
							(K === c.LABEL_SOURCES.MANAGED || K === c.LABEL_SOURCES.USER) && (0, c.Tf)({
								name: c.QJ.FILTER_USER_MANAGED_LABELS,
								product: c.Iv.SECURITY_SETTINGS,
								pageName: c.R.LABELS_LIST,
								type: K
							})
						}
					});
					return {
						data: X == null ? void 0 : X.result,
						errors: X == null ? void 0 : X.errors,
						paginationData: X == null ? void 0 : X.result_info,
						isLoading: C,
						isError: B,
						isSuccess: Z,
						refetch: ie,
						isRefetching: q
					}
				},
				me = ({
					labels: j,
					preselectedLabels: $
				}) => {
					const {
						USER: x,
						MANAGED: C
					} = c.LABEL_SOURCES, [B, Z] = (0, a.useState)({
						[x]: [],
						[C]: []
					}), [X, ie] = (0, a.useState)(new Set), q = X.size > 0, [k, K] = (0, a.useState)(!1), V = de => {
						ie(_e => {
							const ye = new Set(_e);
							return ye.has(de.name) ? ye.delete(de.name) : ye.add(de.name), ye
						})
					}, z = de => X.has(de.name), ee = (de, _e) => {
						const ye = z(de) ? 1 : 0;
						return (z(_e) ? 1 : 0) - ye
					}, pe = de => {
						Z(_e => ({
							[x]: [...de ? de[x] : _e[x]].sort(ee),
							[C]: [...de ? de[C] : _e[C]].sort(ee)
						}))
					};
					return (0, a.useEffect)(() => {
						if (j && !k) {
							if ($) {
								const de = new Set;
								j.forEach(_e => {
									$.some(ye => O()(ye, _e)) && de.add(_e.name)
								}), ie(de)
							}
							K(!0)
						}
					}, [j, $, k]), (0, a.useEffect)(() => {
						if (j && k) {
							const de = j.reduce((ye, Le) => (Le.source === x ? ye[x].push(Le) : Le.source === C && ye[C].push(Le), ye), {
									[x]: [],
									[C]: []
								}),
								_e = {
									[x]: de[x].sort(ee),
									[C]: de[C].sort(ee)
								};
							Z(_e)
						}
					}, [x, C, j, k]), {
						userAndManagedLabels: B,
						setUserAndManagedLabels: Z,
						toggleSelectedLabel: V,
						isLabelSelected: z,
						sortLabelsBySelectedStatus: pe,
						hasLabelsSelected: q
					}
				};
			var ce = t("../react/pages/security/settings/resources/selectors.ts");
			const le = (j = "") => {
				const $ = (0, y.p4)(ce.Xs),
					x = $ && (j == null ? void 0 : j.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: $,
					hasDeprecatedParameter: x
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				FQ: function() {
					return m.FQ
				},
				Iv: function() {
					return g.Iv
				},
				M: function() {
					return m.M
				},
				Np: function() {
					return m.Np
				},
				Oz: function() {
					return m.Oz
				},
				QJ: function() {
					return g.QJ
				},
				R: function() {
					return g.R
				},
				Tf: function() {
					return g.Tf
				},
				WR: function() {
					return m.WR
				},
				Xs: function() {
					return g.Xs
				},
				Xu: function() {
					return m.Xu
				},
				ZF: function() {
					return g.ZF
				},
				bE: function() {
					return m.bE
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
					return m.pf
				},
				ui: function() {
					return g.ui
				},
				vc: function() {
					return g.vc
				},
				zF: function() {
					return g.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/app/components/Forbidden.jsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t.n(a),
				c = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = t.n(f),
				m = t("../react/pages/security/settings/hooks/index.ts"),
				g = t("../react/pages/security/settings/resources/index.ts");
			const n = l().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(50038), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(63779), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(28861), t.e(87940), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				s = () => {
					const {
						t: r
					} = (0, f.useI18n)(), d = (0, e.xk)("waf");
					return l().createElement(c.T3, {
						parentPageLabel: r("navigation.zone.security"),
						title: r("navigation.zone.security.settings"),
						type: "narrow"
					}, d.read ? l().createElement(n, null) : l().createElement(o.Z, null))
				};
			v.ZP = s
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Mi: function() {
					return y
				},
				hL: function() {
					return P
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				a = t("../react/common/utils/useQueryCache.ts"),
				l = t("../react/pages/security/settings/resources/constants.ts"),
				c = t("../react/common/hooks/useAccountId.ts"),
				f = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				i = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const m = {
				labels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var g = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				s = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function r(E, h) {
				if (E == null) return {};
				var L = d(E, h),
					S, N;
				if (Object.getOwnPropertySymbols) {
					var O = Object.getOwnPropertySymbols(E);
					for (N = 0; N < O.length; N++) S = O[N], !(h.indexOf(S) >= 0) && (!Object.prototype.propertyIsEnumerable.call(E, S) || (L[S] = E[S]))
				}
				return L
			}

			function d(E, h) {
				if (E == null) return {};
				var L = {},
					S = Object.keys(E),
					N, O;
				for (O = 0; O < S.length; O++) N = S[O], !(h.indexOf(N) >= 0) && (L[N] = E[N]);
				return L
			}

			function u(E) {
				for (var h = 1; h < arguments.length; h++) {
					var L = arguments[h] != null ? Object(arguments[h]) : {},
						S = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(L).filter(function(N) {
						return Object.getOwnPropertyDescriptor(L, N).enumerable
					})), S.forEach(function(N) {
						_(E, N, L[N])
					})
				}
				return E
			}

			function _(E, h, L) {
				return h = T(h), h in E ? Object.defineProperty(E, h, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[h] = L, E
			}

			function T(E) {
				var h = D(E, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function D(E, h) {
				if (typeof E != "object" || E === null) return E;
				var L = E[Symbol.toPrimitive];
				if (L !== void 0) {
					var S = L.call(E, h || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(E)
			}
			const P = E => {
					const h = (0, e.p4)(o.Cu),
						L = (0, c.F)(),
						S = I.labels(u({
							accountId: L,
							zoneId: h
						}, E ? u({}, E) : {})),
						N = (0, a.o)(S);
					return u({
						zoneId: h,
						queryKey: S,
						batchInvalidateLabels: async () => {
							await N.batchInvalidate({
								queryKeysToPredicateInvalidate: [l.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, N)
				},
				y = {
					getLabels: async E => {
						var h, L, S, N;
						let {
							zoneId: O,
							hideErrorAlert: b = !0
						} = E, w = r(E, ["zoneId", "hideErrorAlert"]);
						return (await f.get(m.labels.toUrl({
							zoneId: O
						}), {
							parameters: {
								page: w == null ? void 0 : w.page,
								per_page: w == null ? void 0 : w.per_page,
								with_mapped_resource_counts: w == null ? void 0 : w.with_mapped_resource_counts,
								filter: w == null || (h = w.filters) === null || h === void 0 ? void 0 : h.search,
								source: (0, n.sQ)(w == null || (L = w.filters) === null || L === void 0 ? void 0 : L.source),
								order: w == null || (S = w.sort) === null || S === void 0 ? void 0 : S.id,
								direction: (w == null ? void 0 : w.sort) ? (w == null || (N = w.sort) === null || N === void 0 ? void 0 : N.desc) ? s.Sr.desc : s.Sr.asc : void 0
							},
							hideErrorAlert: b
						})).body
					},
					getLabel: async E => {
						let {
							zoneId: h,
							labelName: L,
							hideErrorAlert: S = !0
						} = E, N = r(E, ["zoneId", "labelName", "hideErrorAlert"]);
						const O = (0, n.mm)(L) ? m.managedLabel.toUrl({
							zoneId: h,
							labelName: L
						}) : m.userLabel.toUrl({
							zoneId: h,
							labelName: L
						});
						return (await f.get(O, {
							parameters: {
								with_mapped_resource_counts: N == null ? void 0 : N.with_mapped_resource_counts
							},
							hideErrorAlert: S
						})).body
					},
					editLabel: async ({
						zoneId: E,
						label: h,
						replace: L
					}) => {
						const {
							name: S
						} = h, N = r(h, ["name"]);
						return (await (L ? f.put : f.patch)(m.userLabel.toUrl({
							zoneId: E,
							labelName: h.name
						}), {
							body: N
						})).body
					},
					deleteLabel: async ({
						zoneId: E,
						labelName: h
					}) => (await f.del(m.userLabel.toUrl({
						zoneId: E,
						labelName: h
					}))).body,
					createLabel: async E => {
						let {
							zoneId: h
						} = E, L = r(E, ["zoneId"]);
						const {
							product: S
						} = L, N = r(L, ["product"]);
						return (await f.post(m.userLabels.toUrl({
							zoneId: h
						}), {
							body: [N]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: E,
						user: h,
						managed: L,
						operationIds: S,
						replace: N
					}) => (await (N ? f.put : f.post)(m.operationsLinkedToLabels.toUrl({
						zoneId: E
					}), {
						body: u({}, h ? {
							user: {
								labels: h
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
						labelName: h,
						operationIds: L
					}) => {
						const S = (0, n.mm)(h) ? m.managedLabelOperations.toUrl({
							zoneId: E,
							labelName: h
						}) : m.userLabelOperations.toUrl({
							zoneId: E,
							labelName: h
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
				I = {
					labels: E => {
						let {
							accountId: h,
							zoneId: L
						} = E, S = r(E, ["accountId", "zoneId"]);
						return [l.IQ.LABELS, h, L, ...(0, g.isEmpty)(S) ? [] : [S]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				DG: function() {
					return T
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return i
				},
				GE: function() {
					return L
				},
				IQ: function() {
					return l
				},
				KV: function() {
					return f
				},
				LABELS_LIST_TOASTS: function() {
					return d
				},
				LABEL_SOURCES: function() {
					return c
				},
				QH: function() {
					return u
				},
				V: function() {
					return I
				},
				W3: function() {
					return a
				},
				_8: function() {
					return r
				},
				_c: function() {
					return E
				},
				aW: function() {
					return D
				},
				dC: function() {
					return N
				},
				gY: function() {
					return h
				},
				j8: function() {
					return m
				},
				jz: function() {
					return _
				},
				n5: function() {
					return P
				},
				om: function() {
					return g
				},
				w: function() {
					return o
				},
				zF: function() {
					return S
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let o = function(O) {
				return O.EXPOSED_CREDENTIALS = "exposed_credentials", O.CONTENT_SCANNING = "content_scanning", O
			}({});
			const a = "all";
			let l = function(O) {
					return O.LABELS = "labels", O
				}({}),
				c = function(O) {
					return O.USER = "user", O.MANAGED = "managed", O
				}({}),
				f = function(O) {
					return O.SOURCE = "source", O
				}({}),
				i = function(O) {
					return O.NAME = "name", O.SOURCE = "source", O.NEW_LABEL_NAME = "newLabelName", O
				}({}),
				m = function(O) {
					return O.ENDPOINT = "endpoint", O.METHOD = "method", O.OPERATION_ID = "operationId", O
				}({}),
				g = function(O) {
					return O.NAME = "name", O.MAPPED_RESOURCES = "mapped_resources.operations", O.SOURCE = "source", O.APPLY = "apply", O
				}({});
			const r = {
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
			let d = function(O) {
				return O.CREATED_LABEL = "createdLabel", O.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", O.DELETED_LABEL = "deletedLabel", O.APPLIED_LABEL = "appliedLabel", O.EDITED_LABEL = "editedLabel", O.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", O
			}({});
			const u = "650px",
				_ = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				T = /^[A-Za-z0-9-]+$/,
				D = /^cf-/;
			let P = function(O) {
				return O.NAME = "name", O.DESCRIPTION = "description", O
			}({});
			const y = "all";
			let I = function(O) {
				return O.METHOD = "method", O.HOSTNAME = "hostname", O
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
						[I.METHOD]: y,
						[I.HOSTNAME]: y
					}
				},
				filters: I
			};
			let h = function(O) {
				return O.TITLE = "title", O.DESCRIPTION = "description", O.SUBMIT = "submit", O
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
				N = "exposed-credentials-module"
		},
		"../react/pages/security/settings/resources/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return d
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
					return _
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
					return o.T
				},
				QF: function() {
					return a.QF
				},
				vc: function() {
					return a.vc
				},
				ZF: function() {
					return r
				},
				Xs: function() {
					return P.Xs
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
					return P.bH
				},
				Mb: function() {
					return a.Mb
				},
				ui: function() {
					return P.ui
				},
				P3: function() {
					return P.P3
				},
				Ri: function() {
					return P.Ri
				},
				cN: function() {
					return P.cN
				},
				m8: function() {
					return D
				},
				Tf: function() {
					return T
				},
				$E: function() {
					return a.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				o = t("../react/pages/security/settings/resources/types.ts"),
				a = t("../react/pages/security/settings/resources/utils.ts"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(l);

			function f(y) {
				for (var I = 1; I < arguments.length; I++) {
					var E = arguments[I] != null ? Object(arguments[I]) : {},
						h = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(E).filter(function(L) {
						return Object.getOwnPropertyDescriptor(E, L).enumerable
					})), h.forEach(function(L) {
						i(y, L, E[L])
					})
				}
				return y
			}

			function i(y, I, E) {
				return I = m(I), I in y ? Object.defineProperty(y, I, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[I] = E, y
			}

			function m(y) {
				var I = g(y, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function g(y, I) {
				if (typeof y != "object" || y === null) return y;
				var E = y[Symbol.toPrimitive];
				if (E !== void 0) {
					var h = E.call(y, I || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(y)
			}
			let n = function(y) {
					return y.LABELS_LIST = "Labels List page", y.LABELS_APPLY = "Labels Apply page", y.LABELS_SIDE_MODAL = "Labels Side Modal", y.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", y.LABELS_OPERATION_DETAILS = "Operation Details page", y
				}({}),
				s = function(y) {
					return y.API_SHIELD = "API Shield", y.SECURITY_SETTINGS = "Security Settings", y
				}({}),
				r = function(y) {
					return y.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", y.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", y.OPERATIONS_TABLE_ROW = "Operations table row", y.OPERATION_DETAILS_PAGE = "Operation details page", y
				}({}),
				d = function(y) {
					return y.UPSERT = "upsert", y.OVERWRITE = "overwrite", y
				}({}),
				u = function(y) {
					return y.SINGLE = "single", y.MULTIPLE = "multiple", y
				}({}),
				_ = function(y) {
					return y.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", y.DELETE_LABEL = "delete a user label in the settings page", y.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", y.CREATE_LABEL_CLICKED = "click create label button in the settings page", y.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", y.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", y.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", y.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", y.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", y.OPEN_LABELS_SIDE_MODAL = "open labels side modal", y.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", y.CREATE_NEW_LABEL = "create a new label", y
				}({});
			const T = ({
					name: y,
					product: I,
					category: E = "user journey",
					pageName: h,
					from: L,
					write_strategy: S,
					type: N,
					target: O
				}) => {
					c().sendEvent(y, f({
						category: E,
						pageName: h,
						product: I
					}, L ? {
						from: L
					} : {}, S ? {
						write_strategy: S
					} : {}, N ? {
						type: N
					} : {}, O ? {
						target: O
					} : {}))
				},
				D = () => {
					var y;
					return (y = Object.values(_)) === null || y === void 0 ? void 0 : y.flat()
				};
			var P = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				P3: function() {
					return m
				},
				Ri: function() {
					return g
				},
				Xs: function() {
					return s
				},
				bH: function() {
					return n
				},
				cN: function() {
					return i
				},
				ui: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				o = t("../react/utils/url.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				l = t("../react/pages/security/settings/resources/constants.ts"),
				c = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const f = r => {
					const d = (0, e.RO)(r),
						u = !!(0, a.rV)(r, "rulesets.file_upload_scan_allowed"),
						_ = !!(0, a.BF)(r, "rulesets.file_upload_scan_allowed");
					return (0, o.el)(window.location.pathname) ? d && (u || _) : _
				},
				i = r => Number((0, a.rV)(r, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				m = r => (0, a.rV)(r, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				g = r => (0, a.rV)(r, "rulesets.leaked_credential_checks_allowed"),
				n = r => (0, c.z1)(l.dC)(r) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, a.rV)(r, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, a.rV)(r, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				s = r => !!(0, c.z1)("deprecate-security-level")(r)
		},
		"../react/pages/security/settings/resources/types.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				T: function() {
					return o
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let o = function(a) {
				return a.ENABLED = "enabled", a.CONTACT = "contact", a.EXPIRES = "expires", a.ENCRYPTION = "encryption", a.ACKNOWLEDGMENTS = "acknowledgments", a.CANONICAL = "canonical", a.HIRING = "hiring", a.POLICY = "policy", a.PREFERRED_LANGUAGES = "preferred_languages", a
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$E: function() {
					return r
				},
				Mb: function() {
					return d
				},
				N2: function() {
					return I
				},
				Q4: function() {
					return _
				},
				QF: function() {
					return s
				},
				Vy: function() {
					return D
				},
				Wv: function() {
					return u
				},
				mm: function() {
					return y
				},
				sQ: function() {
					return P
				},
				vc: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				a = t("../react/pages/security/settings/routes.tsx"),
				l = t("../react/pages/security/settings/resources/constants.ts"),
				c = t("../react/pages/security/settings/resources/types.ts"),
				f = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function i(E) {
				for (var h = 1; h < arguments.length; h++) {
					var L = arguments[h] != null ? Object(arguments[h]) : {},
						S = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(L).filter(function(N) {
						return Object.getOwnPropertyDescriptor(L, N).enumerable
					})), S.forEach(function(N) {
						m(E, N, L[N])
					})
				}
				return E
			}

			function m(E, h, L) {
				return h = g(h), h in E ? Object.defineProperty(E, h, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[h] = L, E
			}

			function g(E) {
				var h = n(E, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function n(E, h) {
				if (typeof E != "object" || E === null) return E;
				var L = E[Symbol.toPrimitive];
				if (L !== void 0) {
					var S = L.call(E, h || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(E)
			}
			const s = {
					[c.T.ENABLED]: !0,
					[c.T.CONTACT]: [""],
					[c.T.EXPIRES]: ""
				},
				r = {
					[c.T.CONTACT]: {
						label: "security_txt.fields.contact",
						tooltip: "security_txt.fields.contact.description",
						placeholder: "security_txt.fields.contact.placeholder"
					},
					[c.T.EXPIRES]: {
						label: "security_txt.fields.expires",
						tooltip: "security_txt.fields.expires.description",
						placeholder: "security_txt.fields.expires.placeholder"
					},
					[c.T.ENCRYPTION]: {
						label: "security_txt.fields.encryption",
						tooltip: "security_txt.fields.encryption.description",
						placeholder: "security_txt.fields.encryption.placeholder"
					},
					[c.T.ACKNOWLEDGMENTS]: {
						label: "security_txt.fields.acknowledgements",
						tooltip: "security_txt.fields.acknowledgements.description",
						placeholder: "security_txt.fields.acknowledgements.placeholder"
					},
					[c.T.CANONICAL]: {
						label: "security_txt.fields.canonical",
						tooltip: "security_txt.fields.canonical.description",
						placeholder: "security_txt.fields.canonical.placeholder"
					},
					[c.T.POLICY]: {
						label: "security_txt.fields.policy",
						tooltip: "security_txt.fields.policy.description",
						placeholder: "security_txt.fields.policy.placeholder"
					},
					[c.T.HIRING]: {
						label: "security_txt.fields.hiring",
						tooltip: "security_txt.fields.hiring.description",
						placeholder: "security_txt.fields.hiring.placeholder"
					},
					[c.T.PREFERRED_LANGUAGES]: {
						label: "security_txt.fields.preferred_languages",
						tooltip: "security_txt.fields.preferred_languages.description",
						placeholder: "security_txt.fields.preferred_languages.placeholder"
					}
				},
				d = E => e.Ry({
					[c.T.CONTACT]: e.IX().of(e.Z_().required(E("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, E("security_txt.fields.contact.format_error"))),
					[c.T.EXPIRES]: e.hT().required(E("common.required")).min(new Date, E("security_txt.fields.expires.min_error"))
				}),
				u = E => {
					const h = {};
					for (const L in E) h[L] = Array.isArray(E[L]) ? E[L].filter(S => !!S) : E[L];
					return i({}, h, {
						expires: (0, f.DZ)(E.expires)
					})
				},
				_ = (E, h, L) => {
					const S = [...new Set([c.T.CONTACT, c.T.EXPIRES, ...Object.values(c.T)])],
						N = Object.entries(E).sort(([O], [b]) => S.indexOf(O) - S.indexOf(b)).filter(([O, b]) => !!r[O] && !!b && (!Array.isArray(b) || !!b.length)).map(([O, b]) => Array.isArray(b) ? b.map(w => `${L(r[O].label)}: ${w}`).join(`
`) : `${L(r[O].label)}: ${b}`).join(`
`);
					(0, o.yH)(`Cloudflare_${h}_security.txt`, N, "text/plain;charset=utf-8")
				};
			let T = function(E) {
				return E.CREATED = "created security.txt", E.ENABLED = "enabled security.txt", E.DISABLED = "disabled security.txt", E.DOWNLOADED = "downloaded security.txt", E.UPDATED = "updated security.txt", E.DELETED = "deleted security.txt", E
			}({});
			const D = E => (E == null ? void 0 : E.source) === l.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (E == null ? void 0 : E.source) === l.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				P = E => E === l.W3 ? void 0 : E,
				y = E => l.aW.test(E),
				I = E => {
					switch (E) {
						case l.w.CONTENT_SCANNING:
							return a.ROUTES.CONTENT_SCANNING;
						case l.w.EXPOSED_CREDENTIALS:
							return a.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				ROUTES: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				ROOT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings`,
				DETECTIONS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections`,
				EXPOSED_CREDENTIALS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/exposed-credentials`,
				CONTENT_SCANNING: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/malicious-content`,
				LABELS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels`,
				LABEL_APPLY: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels/apply/:labelName?`,
				SECURITY_TXT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/security-txt`
			}
		},
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Sb: function() {
					return g
				},
				Vj: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var s = 1; s < arguments.length; s++) {
					var r = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(u) {
						return Object.getOwnPropertyDescriptor(r, u).enumerable
					})), d.forEach(function(u) {
						l(n, u, r[u])
					})
				}
				return n
			}

			function l(n, s, r) {
				return s = c(s), s in n ? Object.defineProperty(n, s, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = r, n
			}

			function c(n) {
				var s = f(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(n, s) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			const i = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				m = {
					product: "WAF Managed Rules"
				},
				g = ({
					event: n,
					category: s = "user journey",
					product: r = "waf",
					productName: d = "Managed Rules",
					additionalData: u
				}) => {
					o().sendEvent(n, a({
						category: s,
						product: r,
						productName: d
					}, u || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				D: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CLICK_MENU_ITEM_SHARE = "click on share item", o.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", o.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", o.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", o.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", o.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", o.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", o.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", o.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", o.CLICK_ON_DELETE_RULESET = "click on delete ruleset", o.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", o
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/stream/actionTypes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ReplaceVideos = "stream.replace_videos", o.PrependVideo = "stream.prepend_video", o.UpdateVideo = "stream.update_video", o.UpdateVideoPending = "steam.update_video_pending", o.RemoveVideos = "stream.remove_videos", o.StoreUploader = "stream.store_uploader", o.UpsertUploads = "stream.upsert_uploads", o.RemoveUploads = "stream.remove_uploads", o.UpdateUploadProgress = "stream.update_upload_progress", o.UploadViaUrl = "stream.upload_via_url", o.SetLoading = "stream.set_loading", o.SetStorageLoading = "stream.set_storage_loading", o.SetStorage = "stream.set_storage", o.SetPage = "stream.set_page", o.SetPausedUploads = "stream.set_paused_uploads", o.RemovePausedUpload = "stream.remove_paused_upload", o.SetRequestTimestamp = "stream.set_request_timestamp", o.ResetState = "stream.reset_state", o
			}({})
		},
		"../react/pages/stream/reducer.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				ZP: function() {
					return n
				},
				nY: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				o = t("../react/pages/stream/actionTypes.ts"),
				a = t("../react/pages/stream/util/pager.ts");

			function l(s) {
				for (var r = 1; r < arguments.length; r++) {
					var d = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(d).filter(function(_) {
						return Object.getOwnPropertyDescriptor(d, _).enumerable
					})), u.forEach(function(_) {
						c(s, _, d[_])
					})
				}
				return s
			}

			function c(s, r, d) {
				return r = f(r), r in s ? Object.defineProperty(s, r, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[r] = d, s
			}

			function f(s) {
				var r = i(s, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function i(s, r) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var u = d.call(s, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(s)
			}
			const m = "stream",
				g = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(s = g, r) {
				switch (r.type) {
					case o.U.ResetState:
						return g;
					case o.U.SetStorageLoading:
						const {
							storageLoading: d
						} = r;
						return l({}, s, {
							storageLoading: d
						});
					case o.U.SetStorage:
						return l({}, s, {
							storage: r.payload ? l({}, s.storage, r.payload) : void 0
						});
					case o.U.ReplaceVideos:
						return l({}, s, {
							videos: r.videos
						});
					case o.U.PrependVideo:
						return l({}, s, {
							videos: [r.video, ...s.videos].filter((u, _) => _ < a.FJ)
						});
					case o.U.UpdateVideo:
						return l({}, s, {
							videos: s.videos.map(u => u.uid === r.video.uid ? r.video : u)
						});
					case o.U.UpdateVideoPending:
						return l({}, s, {
							videoUpdateStatuses: l({}, s.videoUpdateStatuses, {
								[r.uid]: r.status
							})
						});
					case o.U.RemoveVideos:
						return l({}, s, {
							videos: s.videos.filter(u => !r.ids.includes(u.uid))
						});
					case o.U.SetLoading:
						return l({}, s, {
							loading: r.loading
						});
					case o.U.SetRequestTimestamp:
						return l({}, s, {
							requestTimestamp: r.requestTimestamp
						});
					case o.U.UploadViaUrl:
						return s;
					default:
						return (0, e.h)(r, s)
				}
			}
		},
		"../react/pages/stream/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Id: function() {
					return l
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return c
				},
				QL: function() {
					return m
				},
				_A: function() {
					return _
				},
				_Q: function() {
					return s
				},
				aM: function() {
					return u
				},
				bM: function() {
					return i
				},
				bO: function() {
					return r
				},
				bm: function() {
					return d
				},
				mX: function() {
					return T
				},
				pW: function() {
					return f
				},
				xW: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/pages/stream/reducer.ts");
			const l = D => D[a.nY],
				c = D => l(D).videos,
				f = D => l(D).videoUpdateStatuses,
				i = D => l(D).loading,
				m = D => l(D).requestTimestamp,
				g = D => l(D).storageLoading,
				n = D => l(D).storage,
				s = D => (0, o.BF)(D, "stream.enabled") || (0, e.bC)(D),
				r = D => (0, e.Le)(D, "stream", "connect"),
				d = D => (0, e.Le)(D, "stream", "stream-4371"),
				u = D => (0, e.Le)(D, "stream", "public-details-enabled"),
				_ = D => !!(0, e.Le)(D, "stream", "llhls"),
				T = D => {
					const P = n(D);
					return P !== void 0 && P.limitMins > P.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				FJ: function() {
					return e
				},
				d6: function() {
					return a
				},
				wL: function() {
					return o
				}
			});
			const e = 30;

			function o(l, c, f) {
				const i = {
					search: f,
					limit: e.toString()
				};
				return c !== void 0 && (i.end = c), i
			}

			function a(l, c, f) {
				return {
					limit: e.toString(),
					search: f,
					asc: "true",
					start_comp: "gt",
					start: c
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", o.POOL_TABLE = "click on expandable row on pool", o.CREATE_MONITOR_LINK = "click on create a monitor", o.EDIT_MONITOR_LINK = "click on edit a monitor", o.EDIT_MONITOR = "edit monitor", o.CREATE_MONITOR = "create monitor", o.CREATE_POOL_LINK = "click on create a pool", o.EDIT_POOL_LINK = "click on edit a pool", o.EDIT_POOL = "edit pool", o.CREATE_POOL = "create pool", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				N: function() {
					return a
				},
				X: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let a = function(c) {
				return c.CREATE = "create waiting room", c.UPDATE = "update waiting room", c.EVENTS = "view waiting rooms events", c.ANALYTICS = "view waiting room analytics", c.GENERATE_PREVIEW = "generate waiting room preview link", c
			}({});
			const l = async c => {
				await o().sendEvent(c, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				N3: function() {
					return m
				},
				P: function() {
					return n
				},
				Xh: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(s) {
				for (var r = 1; r < arguments.length; r++) {
					var d = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(d).filter(function(_) {
						return Object.getOwnPropertyDescriptor(d, _).enumerable
					})), u.forEach(function(_) {
						l(s, _, d[_])
					})
				}
				return s
			}

			function l(s, r, d) {
				return r = c(r), r in s ? Object.defineProperty(s, r, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[r] = d, s
			}

			function c(s) {
				var r = f(s, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function f(s, r) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var u = d.call(s, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(s)
			}
			const i = "TURNSTILE";
			let m = function(s) {
				return s.OVERVIEW_PAGE = "view the overview page", s.LIST_OF_WIDGETS = "list of widgets", s.SOLVE_EVENTS = "list solve events", s.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", s.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", s.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", s.OPEN_DELETE_MODAL = "view the delete modal for one widget", s.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", s.DELETE_WIDGET = "delete successfully widgets", s.LIST_OF_HOSTNAMES = "list hostnames", s.OPEN_ADD_WIDGET_PAGE = "view page to add widget", s.FEEDBACK_ADD = "view Feedback Add", s.SAVE_WIDGET = "save widget", s.ROTATE_KEYS = "rotate keys", s.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", s.GET_WIDGETS = "get widget details", s.OPEN_ANALYTICS_PAGE = "view analytics page", s.ANALYTICS_DATA = "list the analytics data", s
			}({});
			const g = ({
					name: s,
					product: r = i,
					category: d = "user journey",
					page: u,
					additionalData: _ = {}
				}) => {
					o().sendEvent(s, a({
						category: d,
						page: u,
						product: r
					}, _ || {}))
				},
				n = () => {
					var s;
					return (s = Object.values(m)) === null || s === void 0 ? void 0 : s.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				E: function() {
					return m
				},
				Ky: function() {
					return g
				},
				RJ: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var s = 1; s < arguments.length; s++) {
					var r = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(u) {
						return Object.getOwnPropertyDescriptor(r, u).enumerable
					})), d.forEach(function(u) {
						l(n, u, r[u])
					})
				}
				return n
			}

			function l(n, s, r) {
				return s = c(s), s in n ? Object.defineProperty(n, s, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[s] = r, n
			}

			function c(n) {
				var s = f(n, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(n, s) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(n)
			}
			let i = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.BACK_BUTTON = "clicked back from user group detail", n.ADD_MEMBER_BUTTON = "click add member button", n.MEMBER_ADD = "add user group member", n.MEMBER_DETAIL_MENU = "click user group member detail menu", n.MEMBER_DETAIL_VIEW = "click view in user group member detail menu", n.MEMBER_DETAIL_EDIT = "click edit in user group member detail menu", n.MEMBER_DETAIL_DELETE = "click delete in user group member detail menu", n.MEMBER_DELETE = "delete user group member", n.MEMBER_DETAIL_DELETE_CANCEL = "click cancel delete user group member", n.ADD_POLICY_BUTTON = "click add user group policy button", n
			}({});
			const m = ({
					name: n,
					additionalData: s = {}
				}) => {
					o().sendEvent(n, a({}, s || {}))
				},
				g = () => {
					var n;
					return (n = Object.values(i)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				d: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				default: (0, e.BC)`/${"accountId"}/`,
				home: (0, e.BC)`/${"accountId"}/home`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zone-versioning/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$e: function() {
					return L
				},
				$h: function() {
					return y
				},
				G: function() {
					return h
				},
				M3: function() {
					return N
				},
				Tr: function() {
					return D
				},
				UY: function() {
					return _
				},
				bH: function() {
					return s
				},
				fv: function() {
					return O
				},
				hF: function() {
					return I
				},
				iw: function() {
					return d
				},
				m7: function() {
					return n
				},
				re: function() {
					return E
				},
				tp: function() {
					return u
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				o = t("../../../../node_modules/reselect/lib/index.js"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				l = t("../react/app/components/SidebarNav/permissions.ts"),
				c = t("../react/common/selectors/entitlementsSelectors.ts");

			function f(b) {
				for (var w = 1; w < arguments.length; w++) {
					var M = arguments[w] != null ? Object(arguments[w]) : {},
						U = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(M).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(M, Q).enumerable
					})), U.forEach(function(Q) {
						i(b, Q, M[Q])
					})
				}
				return b
			}

			function i(b, w, M) {
				return w = m(w), w in b ? Object.defineProperty(b, w, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[w] = M, b
			}

			function m(b) {
				var w = g(b, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function g(b, w) {
				if (typeof b != "object" || b === null) return b;
				var M = b[Symbol.toPrimitive];
				if (M !== void 0) {
					var U = M.call(b, w || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(b)
			}
			const n = b => (0, a.nA)(b) ? (0, c.p1)(b) && (0, l.$n)(b, "zone_versioning", "versioning") : !1,
				s = b => b.zoneVersioning.zoneApplications,
				r = (0, e.P1)("zoneApplications", s),
				d = b => b.zoneVersioning.zoneVersions,
				u = (0, e.P1)("zoneVersions", d),
				_ = (0, o.P1)(u, b => {
					if (b) return b.filter(w => w.status == "V")
				}),
				T = b => b.zoneVersioning.environments,
				D = b => b.zoneVersioning.environments.isRequesting,
				P = (0, e.P1)("environments", T),
				y = (0, o.P1)(r, b => {
					if (b) {
						if (b.length === 1) return b[0];
						b.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${b.length}`))
					}
					return null
				}),
				I = (0, o.P1)(P, b => b ? b.environments : []),
				E = b => {
					var w;
					return (w = b.zoneVersioning) === null || w === void 0 ? void 0 : w.zoneVersionSelector
				},
				h = (0, o.P1)(E, u, (b, w) => {
					if (!(b == null ? void 0 : b.isVersion) || !w) return null;
					const M = w.find(U => {
						if (U.version === b.selectedVersion && U.locked) return !0
					});
					return M ? f({}, M, {
						isLocked: !0
					}) : null
				}),
				L = (0, o.P1)(u, I, (b, w) => !w || !b ? [] : b.map(M => {
					const U = [];
					for (const Q in w) w[Q].version === M.version && U.push(w[Q]);
					return f({}, M, {
						environments: U
					})
				})),
				S = b => b.zoneVersioning.WAFMigrationStatus,
				N = (0, e.P1)("WAFMigrationStatus", S),
				O = b => b.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$2: function() {
					return S
				},
				CI: function() {
					return h
				},
				IS: function() {
					return i
				},
				L7: function() {
					return c
				},
				Lt: function() {
					return u
				},
				Oj: function() {
					return r
				},
				QV: function() {
					return _
				},
				S6: function() {
					return N
				},
				X$: function() {
					return I
				},
				X6: function() {
					return g
				},
				d4: function() {
					return d
				},
				fE: function() {
					return m
				},
				im: function() {
					return P
				},
				lv: function() {
					return T
				},
				rL: function() {
					return n
				},
				wW: function() {
					return f
				}
			});

			function e(O) {
				for (var b = 1; b < arguments.length; b++) {
					var w = arguments[b] != null ? Object(arguments[b]) : {},
						M = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(w).filter(function(U) {
						return Object.getOwnPropertyDescriptor(w, U).enumerable
					})), M.forEach(function(U) {
						o(O, U, w[U])
					})
				}
				return O
			}

			function o(O, b, w) {
				return b = a(b), b in O ? Object.defineProperty(O, b, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[b] = w, O
			}

			function a(O) {
				var b = l(O, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function l(O, b) {
				if (typeof O != "object" || O === null) return O;
				var w = O[Symbol.toPrimitive];
				if (w !== void 0) {
					var M = w.call(O, b || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(O)
			}
			const c = {
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
				i = "40rem",
				m = {
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
				r = {
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
				d = {
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
				_ = {
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
					buildWorkerError: "error building worker"
				},
				D = "workers.dev",
				P = "YYYY-MM-DD HH:mm:SS ZZ",
				y = "active",
				I = ["bundled", "unbound", "standard"],
				E = null,
				h = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let L = function(O) {
				return O[O.NONE = 0] = "NONE", O[O.MISS = 1] = "MISS", O[O.EXPIRED = 2] = "EXPIRED", O[O.UPDATING = 3] = "UPDATING", O[O.STALE = 4] = "STALE", O[O.HIT = 5] = "HIT", O[O.IGNORED = 6] = "IGNORED", O[O.BYPASS = 7] = "BYPASS", O[O.REVALIDATED = 8] = "REVALIDATED", O[O.DYNAMIC = 9] = "DYNAMIC", O[O.STREAM_HIT = 10] = "STREAM_HIT", O[O.DEFERRED = 11] = "DEFERRED", O
			}({});
			const S = [L.HIT, L.STREAM_HIT];
			let N = function(O) {
				return O.SECRETS_STORE_ID = "store_id", O.SECRET_NAME = "secret_name", O
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Hv: function() {
					return i
				},
				L: function() {
					return a
				},
				Q9: function() {
					return l
				},
				_j: function() {
					return c
				},
				ky: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = m => `${m}.workers.dev`,
				a = (m, g, n) => `${n?`${n}.`:""}${m}.${o(g)}`,
				l = (m, g, n) => `https://${a(m,g,n)}`,
				c = {
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
				i = {
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				MN: function() {
					return a
				},
				Yg: function() {
					return c
				},
				i$: function() {
					return l
				},
				l3: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const a = async ([i, m]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: i,
					variables: m
				})
			})).body, l = async (...i) => (await e.get(...i)).body, c = i => async (m, g) => {
				const n = await fetch(m, g).then(s => s.json());
				return i.assertDecode(n)
			}, f = async (...i) => (await l(...i)).result;
			v.ZP = {
				fetcher: i => Array.isArray(i) ? f(...i) : f(i)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(W, v) {
				v()
			})(this, function() {
				"use strict";

				function W() {
					var t = !0,
						e = !1,
						o = null,
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

					function c(T) {
						var D = T.type,
							P = T.tagName;
						return !!(P == "INPUT" && a[D] && !T.readOnly || P == "TEXTAREA" && !T.readOnly || T.isContentEditable)
					}

					function f(T) {
						T.getAttribute("is-focus-visible") !== "" && T.setAttribute("is-focus-visible", "")
					}

					function i(T) {
						T.getAttribute("is-focus-visible") === "" && T.removeAttribute("is-focus-visible")
					}

					function m(T) {
						l(document.activeElement) && f(document.activeElement), t = !0
					}

					function g(T) {
						t = !1
					}

					function n(T) {
						!l(T.target) || (t || c(T.target)) && f(T.target)
					}

					function s(T) {
						!l(T.target) || T.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), i(T.target))
					}

					function r(T) {
						document.visibilityState == "hidden" && (e && (t = !0), d())
					}

					function d() {
						document.addEventListener("mousemove", _), document.addEventListener("mousedown", _), document.addEventListener("mouseup", _), document.addEventListener("pointermove", _), document.addEventListener("pointerdown", _), document.addEventListener("pointerup", _), document.addEventListener("touchmove", _), document.addEventListener("touchstart", _), document.addEventListener("touchend", _)
					}

					function u() {
						document.removeEventListener("mousemove", _), document.removeEventListener("mousedown", _), document.removeEventListener("mouseup", _), document.removeEventListener("pointermove", _), document.removeEventListener("pointerdown", _), document.removeEventListener("pointerup", _), document.removeEventListener("touchmove", _), document.removeEventListener("touchstart", _), document.removeEventListener("touchend", _)
					}

					function _(T) {
						T.target.nodeName.toLowerCase() !== "html" && (t = !1, u())
					}
					document.addEventListener("keydown", m, !0), document.addEventListener("mousedown", g, !0), document.addEventListener("pointerdown", g, !0), document.addEventListener("touchstart", g, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", s, !0), document.addEventListener("visibilitychange", r, !0), d(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function v(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && v(W)
			})
		},
		"../react/utils/bootstrap.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$8: function() {
					return o
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
					var c, f, i;
					return (c = window) === null || c === void 0 || (f = c.bootstrap) === null || f === void 0 || (i = f.data) === null || i === void 0 ? void 0 : i.security_token
				},
				o = () => {
					var c, f, i;
					return !!((c = t.g.bootstrap) === null || c === void 0 || (f = c.data) === null || f === void 0 || (i = f.user) === null || i === void 0 ? void 0 : i.id)
				},
				a = () => {
					var c, f;
					return !!((c = t.g.bootstrap) === null || c === void 0 || (f = c.data) === null || f === void 0 ? void 0 : f.is_kendo)
				},
				l = () => {
					var c, f, i, m;
					return (c = window) === null || c === void 0 || (f = c.bootstrap) === null || f === void 0 || (i = f.data) === null || i === void 0 || (m = i.user) === null || m === void 0 ? void 0 : m.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				O5: function() {
					return l
				},
				Xm: function() {
					return a
				},
				kT: function() {
					return i
				},
				wV: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				a = () => (o() || "").indexOf("C0002") !== -1,
				l = () => (o() || "").indexOf("C0003") !== -1,
				c = () => (o() || "").indexOf("C0004") !== -1,
				f = () => (o() || "").indexOf("C0005") !== -1,
				i = n => {
					const s = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${s}`
				},
				m = () => {
					var n;
					const s = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (s == null ? void 0 : s.country) || ""
				},
				g = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AI: function() {
					return I
				},
				Kd: function() {
					return s
				},
				S8: function() {
					return y
				},
				ZW: function() {
					return m
				},
				ay: function() {
					return E
				},
				fh: function() {
					return h
				},
				i_: function() {
					return r
				},
				ly: function() {
					return n
				},
				th: function() {
					return i
				},
				ti: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				a = t("../../../common/intl/intl-types/src/index.ts"),
				l = t("../../../common/util/types/src/utils/index.ts"),
				c = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f = t("../../../../node_modules/cookie/index.js");
			const i = "cf-sync-locale-with-cps",
				m = a.Q.en_US,
				g = "en_US",
				n = "cf-locale";

			function s() {
				const N = (0, f.parse)(document.cookie);
				return c.Z.get(n) || N[n] || null
			}

			function r(N) {
				document.cookie = (0, f.serialize)(n, N, {
					path: "/",
					maxAge: 31536e3
				}), c.Z.set(n, N)
			}

			function d() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const u = N => (0, l.Yd)(a.Q).find(O => a.Q[O] === N) || g,
				_ = [],
				T = [],
				D = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				P = {
					test: [...D, ...T, ..._],
					development: [...D, ...T, ..._],
					staging: [...D, ...T, ..._],
					production: [...D, ...T]
				},
				y = N => {
					const O = a.Q[N];
					return P.production.includes(O)
				},
				I = () => Object.keys(a.Q).filter(N => y(N)),
				E = N => {
					const O = a.Q[N];
					return T.includes(O)
				},
				h = N => L[N],
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
				S = o().locale();
			o().defineLocale("es-cl", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD-MM-YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), o().defineLocale("es-ec", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), o().defineLocale("es-mx", {
				parentLocale: "es",
				longDateFormat: {
					LT: "h:mm a",
					LTS: "h:mm:ss a",
					L: "D/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY h:mm a",
					LLLL: "dddd, D [de] MMMM [de] YYYY h:mm a"
				}
			}), o().defineLocale("es-pe", {
				parentLocale: "es",
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY HH:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
				}
			}), o().locale(S)
		},
		"../react/utils/translator.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				QT: function() {
					return u
				},
				Vb: function() {
					return m
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return i
				},
				_m: function() {
					return s
				},
				cC: function() {
					return r
				},
				oc: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = t("../../../common/intl/intl-core/src/Translator.ts"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				l = t.n(a),
				c = t("../flags.ts");
			const f = new o.Z({
				pseudoLoc: (0, c.J8)("is_pseudo_loc")
			});

			function i(_, ...T) {
				return f.t(_, ...T)
			}
			const m = f;

			function g(_, ...T) {
				return markdown(i(_, T))
			}

			function n(_) {
				if (Number(_) !== 0) {
					if (_ % 86400 == 0) return i("time.num_days", {
						smart_count: _ / 86400
					});
					if (_ % 3600 == 0) return i("time.num_hours", {
						smart_count: _ / 3600
					});
					if (_ % 60 == 0) return i("time.num_minutes", {
						smart_count: _ / 60
					})
				}
				return i("time.num_seconds", {
					smart_count: _
				})
			}

			function s(_, T) {
				return _ in T ? T[_] : void 0
			}
			const r = a.Trans,
				d = a.I18n,
				u = a.useI18n
		},
		"../react/utils/url.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Ct: function() {
					return L
				},
				Fl: function() {
					return X
				},
				KT: function() {
					return q
				},
				NF: function() {
					return P
				},
				Nw: function() {
					return E
				},
				Pd: function() {
					return I
				},
				Uh: function() {
					return C
				},
				cm: function() {
					return _
				},
				e1: function() {
					return h
				},
				el: function() {
					return Q
				},
				hW: function() {
					return me
				},
				pu: function() {
					return ie
				},
				qR: function() {
					return U
				},
				td: function() {
					return y
				},
				uW: function() {
					return le
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				l = t("../react/pages/stream/routes.ts"),
				c = t("../react/pages/r2/routes.ts"),
				f = t("../react/pages/zoneless-workers/routes.ts"),
				i = t("../react/pages/pages/routes.ts"),
				m = t("../react/pages/d1/routes.ts");

			function g(k) {
				for (var K = 1; K < arguments.length; K++) {
					var V = arguments[K] != null ? Object(arguments[K]) : {},
						z = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(V).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(V, ee).enumerable
					})), z.forEach(function(ee) {
						n(k, ee, V[ee])
					})
				}
				return k
			}

			function n(k, K, V) {
				return K = s(K), K in k ? Object.defineProperty(k, K, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[K] = V, k
			}

			function s(k) {
				var K = r(k, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function r(k, K) {
				if (typeof k != "object" || k === null) return k;
				var V = k[Symbol.toPrimitive];
				if (V !== void 0) {
					var z = V.call(k, K || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(k)
			}
			const {
				endsWithSlash: d
			} = a.default, u = new RegExp(/([0-9a-z]{32})/g), _ = k => k == null ? void 0 : k.replace(u, ":id"), T = (k, K) => {
				const V = k.replace(d, "").split("/");
				return V.slice(0, 2).concat([K]).concat(V.slice(3)).join("/")
			}, D = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), P = k => `/${k.replace(d,"").replace(/^\//,"")}`, y = k => E("add-site", k), I = k => E("billing", k), E = (k, K) => K ? `/${K}${k?`/${k}`:""}` : `/?to=/:account/${k}`, h = () => {
				const k = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return k ? k[1] : null
			}, L = (k, K) => o().stringify(g({}, o().parse(k), K)), S = (k = "") => k.toString().replace(/([\/]{1,})$/, ""), N = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], O = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, b = /^\/(\w{32,})(\/[^.]*)?/, w = k => N.includes(k), M = k => !w(k), U = k => !w(k) && b.test(k), Q = k => !w(k) && O.test(k), re = k => O.exec(k), me = k => {
				if (Q(k)) return k.split("/").filter(K => K.length > 0)[1]
			}, ce = k => b.exec(k), le = k => {
				if (U(k)) {
					const K = ce(k);
					if (K) return K[1]
				}
			}, j = k => U(k) && k.split("/")[2] === "register-domain", $ = k => j(k) ? k.split("/") : null, x = k => {
				if (Q(k)) {
					const [, , , K, V, z, ee, pe] = k.split("/");
					return K === "traffic" && V === "load-balancing" && z === "pools" && ee === "edit" && pe
				}
			}, C = k => {
				const K = $(k);
				if (K) return K[3]
			}, B = (k, K) => {
				var V, z;
				return ((V = k.pattern.match(/\:/g)) !== null && V !== void 0 ? V : []).length - ((z = K.pattern.match(/\:/g)) !== null && z !== void 0 ? z : []).length
			}, Z = [...Object.values(l.C), ...Object.values(c._j), ...Object.values(f._j), ...Object.values(i._j), ...Object.values(m._)].sort(B);

			function X(k) {
				if (!M(k)) return k;
				for (const pe of Z)
					if (pe.expression.test(k)) return pe.pattern;
				const K = $(k);
				if (K) {
					const [, , pe, , ...de] = K;
					return `/:accountId/${pe}/:domainName/${de.join("/")}`
				}
				if (x(k)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const z = re(k);
				if (z) {
					const [, , , , pe] = z;
					return `/:accountId/:zoneName${pe||""}`
				}
				const ee = ce(k);
				if (ee) {
					const [, , pe] = ee;
					return `/:accountId${pe||""}`
				}
				return k
			}

			function ie(k) {
				if (!!k) try {
					const V = k.split(".").pop();
					if (V && V.length > 0) return V
				} catch {}
			}

			function q(k, K = document.location.href) {
				try {
					const V = new URL(k),
						z = new URL(K);
					if (V.origin === z.origin) return `${V.pathname}${V.search}${V.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				r: function() {
					return i
				},
				y: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(l);
			const f = /^\/domainconnect\/v2\/domaintemplates\//i,
				i = "domain-connect-redirect",
				m = () => {
					const g = (0, l.useLocation)();
					(0, e.useEffect)(() => {
						f.test(g.pathname) && a.Z.set(i, g, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = t("../utils/zaraz.ts")
		},
		"../react/utils/zoneLevelAccess.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				P: function() {
					return l
				},
				b: function() {
					return c
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				o = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function a() {
				var f, i, m, g, n, s;
				return (f = window) === null || f === void 0 || (i = f.bootstrap) === null || i === void 0 || (m = i.data) === null || m === void 0 || (g = m.user) === null || g === void 0 || (n = g.betas) === null || n === void 0 || (s = n.some) === null || s === void 0 ? void 0 : s.call(n, r => r === "zone_level_access_beta")
			}

			function l() {
				const f = !!(0, e.Z)("zone-level-access");
				return a() || f
			}

			function c(f) {
				const i = !!(0, o.z1)("zone-level-access")(f);
				return a() || i
			}
		},
		"../utils/getDashVersion.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				p: function() {
					return a
				},
				t: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var l, c;
					return (l = window) === null || l === void 0 || (c = l.build) === null || c === void 0 ? void 0 : c.dashVersion
				},
				a = () => {
					var l;
					return ((0, e.parse)((l = document) === null || l === void 0 ? void 0 : l.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Wi: function() {
					return At
				},
				IM: function() {
					return St
				},
				yV: function() {
					return xt
				},
				Ug: function() {
					return wt
				},
				v_: function() {
					return vt
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				a = t("../react/utils/bootstrap.ts"),
				l = t("../react/app/providers/storeContainer.js"),
				c = t("../react/common/selectors/languagePreferenceSelector.ts"),
				f = t("../flags.ts"),
				i = t("../../../../node_modules/cookie/index.js"),
				m = t("../react/utils/url.ts"),
				g = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				s = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				d = t("../utils/getDashVersion.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				_ = t("../react/common/selectors/entitlementsSelectors.ts");

			function T(oe) {
				for (var te = 1; te < arguments.length; te++) {
					var ge = arguments[te] != null ? Object(arguments[te]) : {},
						p = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(ge).filter(function(A) {
						return Object.getOwnPropertyDescriptor(ge, A).enumerable
					})), p.forEach(function(A) {
						D(oe, A, ge[A])
					})
				}
				return oe
			}

			function D(oe, te, ge) {
				return te = P(te), te in oe ? Object.defineProperty(oe, te, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : oe[te] = ge, oe
			}

			function P(oe) {
				var te = y(oe, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function y(oe, te) {
				if (typeof oe != "object" || oe === null) return oe;
				var ge = oe[Symbol.toPrimitive];
				if (ge !== void 0) {
					var p = ge.call(oe, te || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(oe)
			}
			const I = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				E = (0, s.Z)(oe => {
					try {
						return I.assertDecode((0, i.parse)(oe))
					} catch (te) {
						return console.error(te), {}
					}
				}),
				h = oe => (te, ge, p) => {
					try {
						const Ue = window.location.pathname,
							Qe = (0, l.bh)().getState(),
							qe = E(document.cookie),
							ct = T({
								page: (0, m.Fl)(p.page || window.location.pathname),
								dashVersion: (0, d.t)()
							}, qe);
						if (te === "identify") {
							var A, ne;
							const at = {
								gates: (0, r.T2)(Qe) || {},
								country: (A = t.g) === null || A === void 0 || (ne = A.bootstrap) === null || ne === void 0 ? void 0 : ne.ip_country
							};
							return oe(te, ge, T({}, ct, at, p))
						} else {
							const at = {
								accountId: (0, m.uW)(Ue),
								zoneName: (0, m.hW)(Ue),
								domainName: (0, m.Uh)(Ue)
							};
							if ((0, m.qR)(Ue)) {
								var he;
								const $e = (0, u.D0)(Qe);
								at.isEntAccount = !!($e == null || (he = $e.meta) === null || he === void 0 ? void 0 : he.has_enterprise_zones) || (0, _.p1)(Qe)
							}
							if ((0, m.el)(Ue)) {
								var Me;
								const $e = (0, g.nA)(Qe);
								at.zoneId = $e == null ? void 0 : $e.id, at.plan = $e == null || (Me = $e.plan) === null || Me === void 0 ? void 0 : Me.legacy_id
							}
							return oe(te, ge, T({}, ct, at, p))
						}
					} catch (Ue) {
						return console.error(Ue), oe(te, ge, p)
					}
				},
				L = oe => async (te, ge, p) => {
					try {
						return await oe(te, ge, p)
					} catch (A) {
						if (console.error(A), !vt()) throw A;
						return {
							status: "rejected",
							reason: A
						}
					}
				};
			var S = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				N = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				O = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				b = t("../react/common/middleware/sparrow/errors.ts"),
				w = t("../react/pages/caching/tracking.tsx"),
				M = t("../react/pages/home/domain-registration/tracking.ts"),
				U = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				Q = t("../react/pages/hyperdrive/tracking.ts"),
				re = t("../react/pages/magic/overview/tracking.ts"),
				me = t("../react/pages/magic/packet-captures/constants.ts"),
				ce = t("../react/pages/page-rules/tracking.ts"),
				le = t("../react/pages/pages/constants.ts"),
				j = t("../react/pages/pipelines/tracking.ts"),
				$ = t("../react/pages/security-center/BlockedContent/constants.ts"),
				x = t("../react/pages/security-center/tracking.ts"),
				C = t("../react/pages/security/api-shield/tracking.ts"),
				B = t("../react/pages/security/bots/tracking.ts"),
				Z = t("../react/pages/security/resources/constants.tsx"),
				X = t("../react/pages/security/page-shield/resources/index.ts"),
				ie = t("../react/pages/home/configurations/lists/tracking.ts"),
				q = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				k = t("../react/pages/home/alerts/tracking.ts"),
				K = t("../react/pages/dns/dns-records/tracking.ts"),
				V = t("../react/pages/magic/network-monitoring/constants.ts"),
				z = t("../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts"),
				ee = t("../react/pages/security/settings/index.tsx"),
				pe = t("../react/pages/shared-config/sparrowEvents.tsx"),
				de = t("../react/pages/spectrum/tracking.tsx"),
				_e = t("../react/pages/traffic/argo/tracking.ts"),
				ye = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Le = t("../react/pages/turnstile/tracking.ts"),
				Te = t("../react/pages/zoneless-workers/constants.ts"),
				we = t("../react/app/components/AccountHome/tracking.ts"),
				Re = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Ze = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				H = t("../react/pages/user-groups/sparrowEvents.ts"),
				ve = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				Pe = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				He = t("../react/pages/security/overview/resources/constants.ts"),
				et = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				We = t("../react/pages/secrets-store/resources/constants.ts");
			const tt = ((oe, te, ...ge) => n.eg.union([n.eg.literal(oe), n.eg.literal(te), ...ge.map(p => n.eg.literal(p))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", we.gX.SPARROW_PROJECTS_TABLE_CLICK, we.gX.SPARROW_EMPTY_STATE_CTA_CLICK, we.gX.SPARROW_PRODUCT_CARD_CLICK, we.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, we.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, we.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, we.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, we.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, we.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, we.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Te.QV.clickedDownloadAnalytics, Te.QV.clickedPrintAnalytics, Te.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Te.QV.addWCITriggerToExistingWorker, Te.QV.updateWCITrigger, Te.QV.deleteWCITrigger, Te.QV.addWCITriggerToNewWorker, Te.QV.createWCIBuildForNewWorker, Te.QV.completedWCIBuildForNewWorker, Te.QV.changedDefaultConfigurations, le.QV.toggledPagesSmartPlacement, le.QV.downloadDemoProject, Te.QV.clickCreateWorkerFromRepoNextStep, Te.QV.clickCreateWorkerFromRepoPreviousStep, Te.QV.clickCreateNewSCMConnection, Te.QV.redirectFromSCMOAuth, Te.QV.clickSubmitError, Te.QV.selectTemplate, Te.QV.templateStubWorkerCreated, Te.QV.templateStubWorkerCreationFailed, Te.QV.templateRepositoryCreated, Te.QV.templateRepositoryCreationFailed, Te.QV.copyTemplateC3Command, Te.QV.templateDeployClick, Te.QV.reauthenticateGithubModalShown, Te.QV.updateGithubPermissionsClicked, Te.QV.D2W_importRepository, Te.QV.D2W_stubWorkerCreated, Te.QV.D2W_stubWorkerCreationFailed, Te.QV.D2W_repositoryCreated, Te.QV.D2W_repositoryCreationFailed, Te.QV.D2W_resourcesProvisioned, Te.QV.D2W_resourceProvisioningFailed, Te.QV.D2W_githubAPIRateLimitReached, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", B.N3.INITIAL_FETCH_SCORES, B.N3.FETCH_CONFIGURATION, B.N3.INITIAL_FETCH_TIME_SERIES, B.N3.INITIAL_FETCH_ATTRIBUTES, B.N3.UPDATE_SETTINGS, B.N3.DELETE_RULE, B.N3.UPDATE_RULE, B.N3.FETCH_RULES, B.N3.CONFIGURE_BOT_MANAGEMENT, B.N3.WAF_RULES_REDIRECT, U.F.TOGGLE_TCP_PROTECTION, U.F.GET_TCP_PROTECTION_PREFIXES, U.F.CREATE_TCP_PROTECTION_PREFIXES, U.F.CREATE_TCP_PROTECTION_PREFIX, U.F.UPDATE_TCP_PROTECTION_PREFIX, U.F.DELETE_TCP_PROTECTION_PREFIX, U.F.DELETE_TCP_PROTECTION_PREFIXES, U.F.GET_TCP_PROTECTION_ALLOWLIST, U.F.CREATE_TCP_PROTECTION_ALLOWLIST, U.F.UPDATE_TCP_PROTECTION_ALLOWLIST, U.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, U.F.DELETE_TCP_PROTECTION_ALLOWLIST, U.F.GET_SYN_PROTECTION_RULES, U.F.GET_SYN_PROTECTION_RULE, U.F.CREATE_SYN_PROTECTION_RULE, U.F.UPDATE_SYN_PROTECTION_RULE, U.F.DELETE_SYN_PROTECTION_RULE, U.F.GET_TCP_FLOW_PROTECTION_RULES, U.F.GET_TCP_FLOW_PROTECTION_RULE, U.F.CREATE_TCP_FLOW_PROTECTION_RULE, U.F.UPDATE_TCP_FLOW_PROTECTION_RULE, U.F.DELETE_TCP_FLOW_PROTECTION_RULE, U.F.GET_SYN_PROTECTION_FILTERS, U.F.GET_SYN_PROTECTION_FILTER, U.F.CREATE_SYN_PROTECTION_FILTER, U.F.UPDATE_SYN_PROTECTION_FILTER, U.F.DELETE_SYN_PROTECTION_FILTER, U.F.GET_TCP_FLOW_PROTECTION_FILTERS, U.F.GET_TCP_FLOW_PROTECTION_FILTER, U.F.CREATE_TCP_FLOW_PROTECTION_FILTER, U.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, U.F.DELETE_TCP_FLOW_PROTECTION_FILTER, U.F.GET_DNS_PROTECTION_RULES, U.F.GET_DNS_PROTECTION_RULE, U.F.CREATE_DNS_PROTECTION_RULE, U.F.UPDATE_DNS_PROTECTION_RULE, U.F.DELETE_DNS_PROTECTION_RULE, X.FV.MANAGE_PAGE_SHIELD_POLICY, X.FV.CONFIGURE_PAGE_SHIELD, X.FV.VIEW_DETECTED_CONNECTIONS, X.FV.VIEW_DETECTED_SCRIPTS, X.FV.VIEW_PAGE_SHIELD_POLICIES, X.FV.VIEW_PAGE_SHIELD_SETTINGS, X.FV.OPEN_MUTABLE_VERSION_TOOLTIP, X.FV.SHOW_MUTABLE_VERSION_TOOLTIP, ie.y.CREATE_LIST, ie.y.DELETE_LIST, ie.y.ADD_LIST_ITEM, ie.y.DELETE_LIST_ITEM, Q.KO.PURCHASE_WORKERS_PAID, Q.KO.LIST_CONFIGS, Q.KO.SEARCH_CONFIGS, Q.KO.CREATE_HYPERDRIVE_CONFIG, Q.KO.VIEW_CONFIG_DETAILS, Q.KO.UPDATE_CACHING_SETTINGS, Q.KO.DELETE_HYPERDRIVE_CONFIG, Q.KO.CLICK_HYPERDRIVE_DOCUMENTATION, Q.KO.CLICK_GET_STARTED_GUIDE, Q.KO.CLICK_CONNECTIVITY_GUIDES, Q.KO.CLICK_QUICK_LINK, Q.KO.CLICK_DISCORD, Q.KO.CLICK_COMMUNITY, de.N.CNAME, de.N.IP_ADDRESS, de.N.LB, de.N.UPDATE_CNAME, de.N.UPDATE_IP_ADDRESS, de.N.UPDATE_LB, de.N.DISABLE, w.N.TIERED_CACHE, w.N.CACHE_PURGE, w.N.CACHE_ANALYTICS, ...(0, Le.P)(), ...(0, O.x4)(), ...(0, ee.m8)(), ...(0, H.Ky)(), ...(0, ve.Cf)(), ye.N.CREATE, ye.N.EVENTS, ye.N.ANALYTICS, ye.N.UPDATE, ye.N.GENERATE_PREVIEW, x.RY.INITIATE_URL_SCAN, x.RY.LOAD_SCAN_INFO, x.Ev.LOAD_THREAT_EVENTS, x.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, x.Ev.THREAT_EVENTS_FILTERS, x.Ev.ABUSE_REPORT_BUTTON_CLICK, x.Ev.ABUSE_REPORT_SUBMIT_CLICK, x.Ev.ABUSE_REPORT_SUBMIT_FAILED, x.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, x.v9.EXPAND_INSIGHT_ROW, x.v9.ONE_CLICK_RESOLVE_BUTTON, x.v9.FOLLOW_RESOLVE_URL, x.v9.MANAGE_INSIGHT, x.v9.CLICK_SCAN_NOW, x.v9.CLICK_EXPORT_INSIGHTS, x.v9.BULK_ARCHIVE, x.v9.CLICK_DETAILS_BUTTON, C.Fj[C.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, C.Fj[C.kq.ENDPOINT_MANAGEMENT].detailedMetrics, C.Fj[C.kq.ENDPOINT_MANAGEMENT].createEndpoint, C.Fj[C.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, C.Fj[C.kq.ENDPOINT_MANAGEMENT].deployRouting, C.Fj[C.kq.ENDPOINT_MANAGEMENT].deleteRouting, C.Fj[C.kq.API_DISCOVERY].viewDiscoveredEndpoints, C.Fj[C.kq.API_DISCOVERY].saveDiscoveredEndpoint, C.Fj[C.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, C.Fj[C.kq.SCHEMA_VALIDATION].viewSchemasList, C.Fj[C.kq.SCHEMA_VALIDATION].uploadSchema, C.Fj[C.kq.SCHEMA_VALIDATION].viewSchemaAdoption, C.Fj[C.kq.SCHEMA_VALIDATION].downloadSchema, C.Fj[C.kq.SCHEMA_VALIDATION].deleteSchema, C.Fj[C.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, C.Fj[C.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, C.Fj[C.kq.SEQUENCE_ANALYTICS].viewSequencesPage, C.Fj[C.kq.JWT_VALIDATION].viewJWTRules, C.Fj[C.kq.JWT_VALIDATION].addJWTRule, C.Fj[C.kq.JWT_VALIDATION].editJWTRule, C.Fj[C.kq.JWT_VALIDATION].deleteJWTRule, C.Fj[C.kq.JWT_VALIDATION].reprioritizeJWTRule, C.Fj[C.kq.JWT_VALIDATION].viewJWTConfigs, C.Fj[C.kq.JWT_VALIDATION].addJWTConfig, C.Fj[C.kq.JWT_VALIDATION].editJWTConfig, C.Fj[C.kq.JWT_VALIDATION].deleteJWTConfig, C.Fj[C.kq.SETTINGS].redirectToFirewallRulesTemplate, C.Fj[C.kq.SETTINGS].redirectToPages, C.Fj[C.kq.SETTINGS].listSessionIdentifiers, C.Fj[C.kq.SETTINGS].listRequestsContainingSessionIdentifiers, C.Fj[C.kq.SETTINGS].addOrRemoveSessionIdentifiers, C.Fj[C.kq.SETTINGS].redirectToCustomRules, C.Fj[C.kq.SETTINGS].listAllFallthroughSchemas, C.Fj[C.kq.SEQUENCE_RULES].listSequenceRules, C.Fj[C.kq.SEQUENCE_RULES].deleteSequenceRule, C.Fj[C.kq.SEQUENCE_RULES].reorderSequenceRule, C.Fj[C.kq.SEQUENCE_RULES].createSequenceRule, C.Fj[C.kq.SEQUENCE_RULES].editSequenceRule, q.Z.ANALYTICS, q.Z.CREATE_AND_DEPLOY, q.Z.CREATE_MONITOR_LINK, q.Z.CREATE_MONITOR, q.Z.CREATE_POOL_LINK, q.Z.CREATE_POOL, q.Z.EDIT_MONITOR, q.Z.EDIT_POOL, q.Z.LOAD_BALANCING_TABLE, q.Z.POOL_TABLE, q.Z.EDIT_MONITOR_LINK, q.Z.EDIT_POOL_LINK, k.y.SECONDARY_DNS_NOTIFICATION_CREATE, k.y.SECONDARY_DNS_NOTIFICATION_UPDATE, k.y.SECONDARY_DNS_NOTIFICATION_DELETE, K.U.ZONE_TRANSFER_SUCCESS, K.U.DNS_RECORD_CREATE, K.U.DNS_RECORD_UPDATE, K.U.DNS_RECORD_DELETE, Ze.Y.PEER_DNS_CREATE, Ze.Y.PEER_DNS_UPDATE, Ze.Y.PEER_DNS_DELETE, Ze.Y.ZONE_TRANSFER_ENABLE, Ze.Y.ZONE_TRANSFER_DISABLE, _e.V.ARGO_ENABLEMENT, _e.V.ARGO_GEO_ANALYTICS_FETCH, _e.V.ARGO_GLOBAL_ANALYTICS_FETCH, me.X.VIEW_BUCKETS_LIST, me.X.CREATE_BUCKET, me.X.VALIDATE_BUCKET, me.X.DELETE_BUCKET, me.X.VIEW_CAPTURES_LIST, me.X.CREATE_SIMPLE_CAPTURE, me.X.CREATE_FULL_CAPTURE, me.X.VIEW_FULL_CAPTURE, me.X.DOWNLOAD_SIMPLE_CAPTURE, V.bK.VIEW_RULES, V.bK.CREATE_RULE, V.bK.UPDATE_RULE, V.bK.DELETE_RULE, V.bK.VIEW_CONFIGURATION, V.bK.CREATE_CONFIGURATION, V.bK.UPDATE_CONFIGURATION, V.bK.DELETE_CONFIGURATION, re.r8.VIEW_ALERTS, re.r8.VIEW_ALERTS_HISTORY, re.r8.MAGIC_OVERVIEW_ANALYTICS, re.VZ.CREATE_SITE, re.VZ.CREATE_TUNNEL, re.VZ.CREATE_STATIC_ROUTE, z.o4.CLICK_ADAPTIVE_SAMPLING, z.o4.CLICK_TO_LOG_EXPLORER_BANNER, z.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, z.o4.CLICK_SWITCH_TO_RAW_LOGS, z.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", M.U.REGISTER_DOMAIN_SEARCH_SUBMIT, M.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, M.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, M.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, M.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, M.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, M.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, M.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, M.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, M.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, M.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, M.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, M.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, M.U.REGISTER_DOMAIN_CHECKOUT_ERROR, M.U.TRANSFER_DOMAIN_CHANGE_STEP, M.U.RENEW_DOMAIN_COMPLETED, M.U.RESTORE_DOMAIN_INIT, M.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, M.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, M.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, M.U.RESTORE_DOMAIN_FAILURE, M.U.RESTORE_DOMAIN_COMPLETED, M.U.DOMAIN_DELETE_INIT, M.U.DOMAIN_DELETE_COMPLETED, M.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, M.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, M.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, M.U.DOMAIN_DELETE_CONFIRM_DELETE, M.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, M.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, M.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, M.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, M.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, M.U.DOMAIN_MOVE_START_FLOW, M.U.DOMAIN_MOVE_OPEN_DOCS, M.U.DOMAIN_MOVE_CLOSE_FLOW, M.U.DOMAIN_MOVE_PROGRESS_FLOW, M.U.DOMAIN_MOVE_SUBMIT, M.U.DOMAIN_MOVE_INITIATE_SUCCESS, M.U.DOMAIN_MOVE_INITIATE_ERROR, M.U.DOMAIN_MOVE_CANCEL, M.U.DOMAIN_MOVE_CANCEL_SUCCESS, M.U.DOMAIN_MOVE_CANCEL_ERROR, M.U.ACTION_CENTER_NAVIGATE, M.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, M.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, M.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, We.z3.CREATE_SECRET, We.z3.DELETE_SECRET, We.z3.BIND_SECRET, We.z3.DUPLICATE_SECRET, We.z3.EDIT_SECRET, j.KO.CLICK_GET_STARTED_GUIDE, j.KO.CLICK_PIPELINE_DOCUMENTATION, j.KO.CLICK_QUICK_LINK, j.KO.CREATE_PIPELINE, j.KO.DELETE_PIPELINE, j.KO.LIST_PIPELINES, j.KO.VIEW_PIPELINE, S.S.EXISTING_DOMAIN, S.S.NEW_DOMAIN, S.S.WAF_RULESET, S.S.WORKERS, S.S.PAGES, S.S.R2, S.S.ACCOUNT_MEMBERS, ce._.TEMPLATE_PRODUCT_SELECTED, ce._.TEMPLATE_SELECTED, ce._.TEMPLATE_SAVE_DRAFT, ce._.TEMPLATE_CANCEL, ce._.TEMPLATE_DEPLOY, pe.D.CLICK_GO_BACK_SHARE_MODAL, pe.D.CLICK_MENU_ITEM_SHARE, pe.D.CLICK_ON_CANCEL_SHARE_MODAL, pe.D.CLICK_ON_CLOSE_SHARE_MODAL, pe.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, pe.D.CLICK_ON_DELETE_RULESET, pe.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, pe.D.CLICK_ON_EDIT_SHARE_PERMISSION, pe.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, pe.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, pe.D.CLICK_ON_SHARE_TABLE_ROW, Z.pR.CLICK_GEOGRAPHICAL_TEMPLATE, Z.pR.CLICK_IP_TEMPLATE, Z.pR.CLICK_USER_AGENT_TEMPLATE, Z.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, ee.vc.CREATED, ee.vc.ENABLED, ee.vc.DISABLED, ee.vc.DELETED, ee.vc.UPDATED, ee.vc.DOWNLOADED, $.Gk.REQUEST_REVIEW, $.Gk.COPY_URL, N.v.FIELD, N.v.OPERATOR, Re.Vj.SHOW_LCC_MIGRATION_BANNER, Re.Vj.CLICK_LCC_DOCUMENTATION, Re.Vj.CLICK_LCC_UPGRADE_GUIDE, Re.Vj.SHOW_LCC_MIGRATION_WARNING, Pe.y.CLICK_DISMISS_INELIGIBILITY, Pe.y.CLICK_NEXT_STEP, Pe.y.CLICK_OPT_IN, Pe.y.CLICK_OPT_IN_BUTTON, Pe.y.CLICK_OPT_OUT_BUTTON, Pe.y.DISPLAY_MODAL, Pe.y.DISPLAY_OPT_OUT_MODAL, He.AZ.LOAD_INSIGHTS, He.AZ.OPEN_SIDE_MODAL_INSIGHT, He.AZ.CLOSE_SIDE_MODAL_INSIGHT, He.AZ.CLICK_ACTION_INSIGHT, et.JR.ADD_SUSPICIOUS_ACTIVITY_FILTER, et.JR.REMOVE_SUSPICIOUS_ACTIVITY_FILTER),
				Xe = n.eg.exactStrict(n.eg.object({
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
				_t = (oe, te) => {
					const [ge, p] = Y(te);
					let A, ne;
					return (0, n.nM)(tt.decode(oe)) && (A = new b.Uh(oe)), p && p.length > 0 && (ne = new b.oV(oe, p)), [ge, A, ne]
				},
				Y = oe => {
					const te = Xe.decode(oe);
					if ((0, n.nM)(te)) {
						const ge = te.left.map(({
							context: p
						}) => p.map(({
							key: A
						}) => A)).reduce((p, A) => p.concat(A), []).filter(p => p in oe);
						return [ue(ge, oe), ge]
					}
					return [oe, []]
				},
				ue = (oe, te) => Object.entries(te).reduce((ge, [p, A]) => (oe.includes(p) || (ge[p] = A), ge), {}),
				Ce = oe => (te, ge, p) => {
					const [A, ne, he] = _t(ge, p);
					if (ne) throw ne;
					return he && console.error(he), oe(te, ge, A)
				};
			var Be = t("../react/utils/zaraz.ts");
			const je = {
					identify: !0
				},
				Ne = oe => (te, ge, p) => (je[ge] || Be.tg === null || Be.tg === void 0 || Be.tg.track(ge, p), oe(te, ge, p));
			var Je = t("../react/common/selectors/userSelectors.ts"),
				st = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function nt(oe) {
				for (var te = 1; te < arguments.length; te++) {
					var ge = arguments[te] != null ? Object(arguments[te]) : {},
						p = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(ge).filter(function(A) {
						return Object.getOwnPropertyDescriptor(ge, A).enumerable
					})), p.forEach(function(A) {
						lt(oe, A, ge[A])
					})
				}
				return oe
			}

			function lt(oe, te, ge) {
				return te = yt(te), te in oe ? Object.defineProperty(oe, te, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : oe[te] = ge, oe
			}

			function yt(oe) {
				var te = Ct(oe, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function Ct(oe, te) {
				if (typeof oe != "object" || oe === null) return oe;
				var ge = oe[Symbol.toPrimitive];
				if (ge !== void 0) {
					var p = ge.call(oe, te || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(oe)
			}
			const ut = new Set(["cf_argo", "load_balancing_basic_plus"]),
				ke = new Set(["pro", "business"]),
				be = ({
					price: oe,
					ratePlanId: te,
					ratePlanName: ge,
					frequency: p,
					isNewSubscription: A
				}) => ({
					event: "purchase",
					new_subscription: A,
					ecommerce: {
						transaction_id: (0, st.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: oe
					},
					items: [{
						item_id: te,
						item_name: ge || te,
						frequency: p,
						price: oe
					}]
				}),
				ze = oe => {
					const {
						price: te,
						frequency: ge,
						plan: p,
						ratePlanId: A,
						ratePlanName: ne
					} = oe;
					return ke.has(p) ? nt({}, be({
						price: te,
						ratePlanId: A,
						ratePlanName: ne,
						frequency: ge,
						isNewSubscription: !0
					}), {
						label: p
					}) : void 0
				},
				ht = oe => {
					const {
						price: te,
						frequency: ge,
						ratePlan: p,
						ratePlanName: A
					} = oe;
					return ut.has(p) ? nt({}, be({
						price: te,
						ratePlanId: p,
						ratePlanName: A,
						frequency: ge,
						isNewSubscription: !0
					}), {
						label: p
					}) : void 0
				},
				dt = oe => {
					const {
						price: te,
						frequency: ge,
						plan: p,
						ratePlanId: A,
						ratePlanName: ne,
						label: he
					} = oe;
					return ke.has(p) ? nt({}, be({
						price: te,
						frequency: ge,
						ratePlanId: A,
						ratePlanName: ne,
						isNewSubscription: !1
					}), {
						label: he || p
					}) : void 0
				},
				bt = oe => {
					const {
						price: te,
						frequency: ge,
						ratePlan: p,
						ratePlanName: A,
						oldRatePlan: ne
					} = oe;
					return ut.has(p) ? nt({}, be({
						price: te,
						frequency: ge,
						ratePlanId: p,
						ratePlanName: A,
						isNewSubscription: !1
					}), {
						label: `${ne}->${p}`
					}) : void 0
				},
				G = "pageview",
				se = "create zone",
				Ee = "create user",
				Ie = "Plan Purchase Success",
				Se = "Product Purchase Success",
				xe = "Plan Update Success",
				Ye = "Product Update Success",
				ot = {
					[G]: !0,
					[se]: !0,
					[Ee]: !0,
					[Ie]: !0,
					[Se]: !0,
					[xe]: !0,
					[Ye]: !0
				},
				De = oe => {
					var te;
					return !!((te = oe.gates.assignments) === null || te === void 0 ? void 0 : te["dx-enable-google-tag-manager"])
				},
				Tt = oe => {
					const te = /\|MCMID\|([0-9]+)\|/,
						ge = oe.match(te);
					return ge ? ge[1] : void 0
				},
				pt = oe => {
					var te;
					const {
						deviceViewport: ge,
						page: p,
						previousPage: A,
						pageName: ne,
						utm_campaign: he,
						_ga: Me,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Ue
					} = oe, {
						origin: Qe
					} = window.location, qe = (0, Je.PR)((0, l.bh)().getState());
					return {
						event: A !== void 0 && p !== A ? "virtual_page_view" : "page_load",
						device_type: ge,
						hostname: Qe,
						language: navigator.language,
						locale: (0, c.r)((0, l.bh)().getState()),
						page_location: p ? `${Qe}${p}` : "[redacted]",
						page_path: p ? `${p}` : "[redacted]",
						page_referrer: A ? `${Qe}/${A}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: ne || "[redacted]",
						page_url: p ? `${Qe}${p}` : "[redacted]",
						query: he ? `?utm_campaign=${he}` : "[redacted]",
						user_properties: {
							ga_client_id: (te = Me) !== null && te !== void 0 ? te : void 0,
							ga_client_id_s: Me ? `s${Me}` : void 0,
							user_id: At() ? qe == null ? void 0 : qe.id : void 0,
							ecid: Ue ? Tt(Ue) : void 0
						}
					}
				},
				Rt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				Et = oe => {
					const {
						status: te
					} = oe;
					return te === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				rt = (oe, te) => {
					switch (oe) {
						case G:
							return pt(te);
						case se:
							return Rt();
						case Ee:
							return Et(te);
						case Ie:
							return ze(te);
						case Se:
							return ht(te);
						case xe:
							return dt(te);
						case Ye:
							return bt(te);
						default:
							return
					}
				},
				Dt = oe => (te, ge, p) => {
					if (ot[ge]) {
						var A;
						const ne = rt(ge, p);
						ne && ((A = window.dataLayer) === null || A === void 0 || A.push(ne))
					}
					return oe(te, ge, p)
				};
			var Lt = t("../react/utils/cookiePreferences.ts");

			function It(oe) {
				for (var te = 1; te < arguments.length; te++) {
					var ge = arguments[te] != null ? Object(arguments[te]) : {},
						p = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(ge).filter(function(A) {
						return Object.getOwnPropertyDescriptor(ge, A).enumerable
					})), p.forEach(function(A) {
						Bt(oe, A, ge[A])
					})
				}
				return oe
			}

			function Bt(oe, te, ge) {
				return te = Ot(te), te in oe ? Object.defineProperty(oe, te, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : oe[te] = ge, oe
			}

			function Ot(oe) {
				var te = Ke(oe, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function Ke(oe, te) {
				if (typeof oe != "object" || oe === null) return oe;
				var ge = oe[Symbol.toPrimitive];
				if (ge !== void 0) {
					var p = ge.call(oe, te || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(oe)
			}
			const wt = oe => {
					const te = De((0, l.bh)().getState());
					o().init(It({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: vt() && !(0, a.gm)() && At(),
						middlewares: [L, Ce, h, Ne, ...te ? [Dt] : []]
					}, oe))
				},
				xt = () => {
					o().identify(It({}, (0, e.getAttribution)(), {
						locale: (0, c.r)((0, l.bh)().getState()),
						isCloudflare: !!(0, f.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				vt = () => !0,
				St = () => {
					(0, Lt.kT)("sparrow_id")
				},
				At = () => (0, Lt.Xm)()
		},
		"../utils/initStyles.ts": function(W, v, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				l = document.head || document.getElementsByTagName("head")[0],
				c = i => {
					const m = [];
					for (let g in i.colors) {
						const n = i.colors[g];
						if (Array.isArray(n) && g !== "categorical")
							for (let s = 0; s < n.length; ++s) m.push(`--cf-${g}-${s}:${n[s]};`)
					}
					return m.join(`
`)
				},
				f = () => {
					const i = (0, e.Yc)(),
						m = `
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
      background-color: ${i?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${i?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${i?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${i?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${i?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${i?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
      ${c(e.Rl)}
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
					g ? g.innerText = "" : (g = document.createElement("style"), g.id = a, l.appendChild(g)), g.appendChild(document.createTextNode(m)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(f), v.Z = f
		},
		"../utils/sentry/lastSentEventId.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let a = "";
				return {
					setEventId: f => (!f || typeof f != "string" || (a = f), a),
					getEventId: () => a
				}
			})()
		},
		"../utils/zaraz.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Ro: function() {
					return s
				},
				bM: function() {
					return m
				},
				tg: function() {
					return i
				},
				yn: function() {
					return n
				}
			});

			function e(r) {
				for (var d = 1; d < arguments.length; d++) {
					var u = arguments[d] != null ? Object(arguments[d]) : {},
						_ = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(u).filter(function(T) {
						return Object.getOwnPropertyDescriptor(u, T).enumerable
					})), _.forEach(function(T) {
						o(r, T, u[T])
					})
				}
				return r
			}

			function o(r, d, u) {
				return d = a(d), d in r ? Object.defineProperty(r, d, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[d] = u, r
			}

			function a(r) {
				var d = l(r, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function l(r, d) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var _ = u.call(r, d || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(r)
			}
			const c = {
					track: (r, d) => null,
					set: (r, d) => console.log(`zaraz.set(${r}, ${d})`)
				},
				f = {
					track: (r, d) => {
						var u;
						(u = window.zaraz) === null || u === void 0 || u.track(r, e({}, d, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (r, d) => {
						var u;
						return (u = window.zaraz) === null || u === void 0 ? void 0 : u.set(r, d)
					}
				};
			let i;
			const m = () => {
					window.zaraz, i = f
				},
				g = ["email", "first_name", "last_name"],
				n = r => {
					g.forEach(d => {
						var u;
						(u = i) === null || u === void 0 || u.set(d, r[d])
					})
				},
				s = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				l = t.n(a),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = t.n(f),
				m = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				g = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				_ = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				T = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				D = t("../../../common/component/component-filter-bar/src/constants.js"),
				P = t("../../../common/component/component-filter-bar/src/utils.js");

			function y() {
				return y = Object.assign ? Object.assign.bind() : function(x) {
					for (var C = 1; C < arguments.length; C++) {
						var B = arguments[C];
						for (var Z in B) Object.prototype.hasOwnProperty.call(B, Z) && (x[Z] = B[Z])
					}
					return x
				}, y.apply(this, arguments)
			}

			function I(x) {
				for (var C = 1; C < arguments.length; C++) {
					var B = arguments[C] != null ? Object(arguments[C]) : {},
						Z = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(B).filter(function(X) {
						return Object.getOwnPropertyDescriptor(B, X).enumerable
					})), Z.forEach(function(X) {
						E(x, X, B[X])
					})
				}
				return x
			}

			function E(x, C, B) {
				return C = h(C), C in x ? Object.defineProperty(x, C, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[C] = B, x
			}

			function h(x) {
				var C = L(x, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function L(x, C) {
				if (typeof x != "object" || x === null) return x;
				var B = x[Symbol.toPrimitive];
				if (B !== void 0) {
					var Z = B.call(x, C || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(x)
			}
			const S = 70,
				N = (0, c.createStyledComponent)(({
					showOverflow: x
				}) => I({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, x ? {} : {
					maxHeight: S,
					overflow: "hidden"
				})),
				O = (0, c.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				b = (0, c.createStyledComponent)(({
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
				w = (0, c.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				M = (0, c.createStyledComponent)(({
					theme: x
				}) => ({
					color: x.colors.gray[4],
					mr: 1
				}), "span"),
				U = (0, c.createStyledComponent)(() => ({
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
				Q = (0, c.createStyledComponent)(({
					buttonStyle: x
				}) => I({
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
				re = (0, c.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				me = (0, c.createStyledComponent)(({
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
				ce = (0, c.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				le = x => x.current ? [...x.current.children].reduce((C, B) => (B.offsetTop >= S && C++, C), 0) : 0;
			let j = 0;
			class $ extends e.Component {
				constructor() {
					super();
					E(this, "overflowWrapper", (0, e.createRef)()), E(this, "hasOverflowed", C => {
						const B = le(this.overflowWrapper);
						C.scrollHeight > S && B >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (C.scrollHeight < S || B === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), E(this, "addNewFilter", () => {
						const {
							filterDefinitions: C
						} = this.props, B = (0, P.TE)(C), Z = Object.keys(B)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: Z,
								operator: (0, P.uv)(Z, B),
								value: (0, P.TT)(Z, B)
							}
						})
					}), E(this, "handleOpenFilterEdit", C => {
						this.setState({
							openFilter: C,
							filterChanges: I({}, this.props.filters[C])
						})
					}), E(this, "handleRemoveFilterClick", (C, B) => {
						C.stopPropagation(), this.removeFilter(B)
					}), E(this, "removeFilter", C => {
						const {
							handleFiltersChange: B
						} = this.props, Z = [...this.props.filters], X = Z[C];
						Z.splice(C, 1), B(Z), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
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
					}), E(this, "handleFilterSubmit", C => {
						const {
							filterDefinitions: B
						} = this.props;
						C.preventDefault();
						const {
							filterChanges: Z
						} = this.state, X = typeof B[Z.key].parse == "function" ? Array.isArray(Z.value) ? Z.value.map(B[Z.key].parse) : B[Z.key].parse(Z.value) : Z.value;
						if (B[Z.key].validate && (Array.isArray(X) ? !X.every(B[Z.key].validate) : !B[Z.key].validate(X))) return this.setState({
							invalid: !0
						});
						const ie = [...this.props.filters],
							q = I({}, Z, {
								value: X
							}),
							k = !ie[this.state.openFilter];
						k ? ie.push(q) : ie[this.state.openFilter] = I({}, q), this.props.handleFiltersChange(ie, q), (k ? this.props.onAddFilter : this.props.onEditFilter)({
							field: q.key,
							operator: q.operator,
							value: q.value
						}), this.closeOpenFilterChanges()
					}), E(this, "handlePendingKeyChange", ({
						value: C
					}) => {
						const {
							filterDefinitions: B
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: C,
								operator: (0, P.uv)(C, B),
								value: (0, P.TT)(C, B)
							}
						})
					}), E(this, "handlePendingOperatorChange", ({
						value: C
					}) => {
						let B = I({}, this.state.filterChanges, {
							operator: C
						});
						if ((0, P.dr)(C)) {
							var Z, X;
							((Z = this.state.filterChanges) === null || Z === void 0 ? void 0 : Z.value) && !Array.isArray((X = this.state.filterChanges) === null || X === void 0 ? void 0 : X.value) && (B.value = [this.state.filterChanges.value])
						} else {
							var ie, q, k;
							((ie = this.state.filterChanges) === null || ie === void 0 ? void 0 : ie.value) && Array.isArray((q = this.state.filterChanges) === null || q === void 0 ? void 0 : q.value) && ((k = this.state.filterChanges) === null || k === void 0 ? void 0 : k.value.length) > 0 && (B.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: B
						})
					}), E(this, "handlePendingValueChange", C => {
						this.setState({
							invalid: !1,
							filterChanges: I({}, this.state.filterChanges, {
								value: C
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
						id: ++j
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(C) {
					C.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(C) {
					const {
						formatLabel: B,
						filterDefinitions: Z
					} = this.props, {
						operator: X
					} = this.state.filterChanges, ie = Z[this.state.filterChanges.key], q = this.state.filterChanges.value, k = V => Array.isArray(V) ? V.map(z => z.value) : (V == null ? void 0 : V.value) || null;
					if (ie.renderValueComponent) return ie.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (ie.type) {
						case D.k.custom: {
							var K;
							return o().createElement(ie.CustomComponent, y({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (K = ie == null ? void 0 : ie.customProps) !== null && K !== void 0 ? K : {}))
						}
						case D.k.select:
							return (0, P.dr)(X) ? o().createElement(u.Z, {
								searchable: !0,
								multi: !0,
								creatable: !ie.options,
								value: typeof q.split == "function" ? q == null ? void 0 : q.split(",") : Array.isArray(q) ? q : [],
								options: ie.options ? ie.options.map(V => ({
									value: V.value || V,
									label: V.label || B(this.state.filterChanges.key, V, C)
								})) : q ? (Array.isArray(q) ? q : q.split(",")).map(V => ({
									label: V,
									value: V
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(f.Trans, {
									id: ie.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: ie.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: V => {
									this.handlePendingValueChange(k(V))
								},
								isValidNewOption: V => {
									const z = ie.validate;
									return !z && V || V && z([V])
								},
								getNewOptionData: (V, z) => ({
									value: V,
									label: z
								})
							}) : o().createElement(r.hQ, {
								hideLabel: !0,
								value: q,
								options: ie.options.map(V => ({
									value: V,
									label: B(this.state.filterChanges.key, V, C)
								})),
								onChange: ({
									value: V
								}) => this.handlePendingValueChange(V)
							});
						case D.k.string:
						default:
							return (0, P.dr)(X) ? o().createElement(u.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof q.split == "function" ? q == null ? void 0 : q.split(",") : Array.isArray(q) ? q : [],
								options: q ? (Array.isArray(q) ? q : q.split(",")).map(V => ({
									label: V,
									value: V
								})) : [],
								noOptionsMessage: () => null,
								placeholder: C.t("analytics.report.filters.labels.placeholder", {
									example: Z[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: V => {
									this.handlePendingValueChange(k(V))
								},
								isValidNewOption: V => {
									const z = ie.validate;
									return !z && V || V && z([V])
								},
								getNewOptionData: (V, z) => ({
									value: V,
									label: z
								}),
								formatCreateLabel: V => C.t("filter_editor.value_create_label", {
									value: V
								})
							}) : o().createElement(f.I18n, null, V => o().createElement(m.I, {
								value: this.state.filterChanges.value,
								onChange: z => this.handlePendingValueChange(z.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: V.t("analytics.report.filters.labels.placeholder", {
									example: Z[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: C,
						filterDefinitions: B,
						modalStyles: Z,
						filterIconType: X,
						buttonStyle: ie
					} = this.props, q = le(this.overflowWrapper), k = `filterPanel${this.state.id}`, K = this.state.openFilter !== null;
					return o().createElement(f.I18n, null, V => o().createElement(d.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(ce, null, o().createElement(Q, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": K,
						"aria-controls": k,
						inverted: !0,
						buttonStyle: ie
					}, o().createElement(n.J, {
						type: X || "add",
						mr: 1,
						label: V.t("common.add", {
							_: "Add"
						})
					}), o().createElement(f.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(re, null, o().createElement(f.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(N, {
						innerRef: this.overflowWrapper,
						overflowLimit: S,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((z, ee) => {
						const {
							key: pe,
							operator: de,
							value: _e
						} = z, ye = B[pe].ignoreLabelTranslation ? B[pe].label : V.t(B[pe].label), Le = V.t(`analytics.report.filters.operators.${de}`), Te = Array.isArray(_e) ? _e.map(Re => C(pe, Re, V)).join(", ") : C(pe, _e, V), we = `${ye} ${Le} ${Te}`;
						return o().createElement(O, {
							key: `${pe}-${de}-${_e}`,
							title: we
						}, o().createElement(b, {
							onClick: () => this.handleOpenFilterEdit(ee)
						}, o().createElement(d.ZC, {
							display: "flex"
						}, o().createElement(w, null, ye), o().createElement(M, null, Le), o().createElement(U, null, Te), (0, P.oN)(z, B) ? o().createElement(s.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(me, {
							onClick: Re => this.handleRemoveFilterClick(Re, ee),
							"aria-label": "remove"
						}, o().createElement(n.J, {
							type: "remove"
						})))))
					})), K && o().createElement(T.Z, {
						id: k,
						filterDefinitions: B,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, P.oN)(this.state.filterChanges, B),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: C,
						modalStyles: Z
					}), this.state.hasOverflowed && o().createElement(_.Z, {
						count: q,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			E($, "propTypes", {
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
				buttonStyle: l().object
			}), v.Z = $
		},
		"../../../common/component/component-filter-bar/src/index.js": function(W, v, t) {
			"use strict";
			t.d(v, {
				ME: function() {
					return o.Z
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
				o = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				a = t("../../../common/component/component-filter-bar/src/constants.js"),
				l = t("../../../common/component/component-filter-bar/src/utils.js"),
				c = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				OZ: function() {
					return c
				},
				YB: function() {
					return l
				}
			});

			function e(i, m, g) {
				return m = o(m), m in i ? Object.defineProperty(i, m, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[m] = g, i
			}

			function o(i) {
				var m = a(i, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function a(i, m) {
				if (typeof i != "object" || i === null) return i;
				var g = i[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(i, m || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(i)
			}
			class l extends Error {
				constructor(m, g) {
					super(g);
					e(this, "translationKey", void 0), this.translationKey = m, this.name = "TranslatorError"
				}
			}
			class c extends l {
				constructor(m) {
					super(m, `Translation key not found: ${m}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var f = null
		},
		"../../../common/util/types/src/api/domain.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
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
					return h
				},
				PN: function() {
					return _
				},
				Pp: function() {
					return l
				},
				Q3: function() {
					return d
				},
				TS: function() {
					return u
				},
				W7: function() {
					return P
				},
				dN: function() {
					return N
				},
				eF: function() {
					return I
				},
				qp: function() {
					return n
				},
				wR: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
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
				c = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				f = e.eg.object({
					registrant: l.optional,
					technical: l.optional,
					administrator: l.optional,
					billing: l.optional
				}),
				i = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: f.optional,
					years: e.eg.number
				}),
				m = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let g = function(O) {
				return O.ONBOARDING_INITIATED = "Onboarding Initiated", O.ONBOARDED = "Onboarded", O.PENDING_REGISTRY_LOCK = "Pending Registry Lock", O.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", O.REGISTRY_UNLOCKED = "Registry Unlocked", O.LOCKED = "Locked", O.FAILED_TO_LOCK = "Failed To Lock", O.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", O.UNLOCKED = "Unlocked", O.OFFBOARDED = "Offboarded", O
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
					fees: m.optional,
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
					transfer_conditions: c.optional,
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
				r = e.eg.object({
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
				d = e.eg.object({
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
			let _ = function(O) {
				return O.PENDING = "pending", O.VERIFIED = "verified", O.REJECTED = "rejected", O.PENDING_DELETE = "pending_delete", O.DELETED = "deleted", O
			}({});
			const T = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(_),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				D = e.eg.object({
					designated_approvers: e.eg.array(T)
				});
			let P = function(O) {
				return O.PENDING = "pending", O.PENDING_UPDATE = "pending_update", O.ENABLED = "enabled", O.DISABLED = "disabled", O
			}({});
			const y = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(P)
				}),
				I = e.eg.intersection([y, D]),
				E = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let h = function(O) {
				return O.UNLOCK_APPROVAL = "UnlockApprovalRequest", O.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", O.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", O.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", O
			}({});
			const L = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				S = e.eg.object({
					message: e.eg.string
				}),
				N = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				df: function() {
					return o
				},
				eX: function() {
					return a
				},
				fG: function() {
					return c
				},
				jI: function() {
					return l
				},
				qu: function() {
					return e
				},
				zc: function() {
					return f
				}
			});
			let e = function(i) {
					return i.Custom = "custom", i.Root = "root", i.Managed = "managed", i.Zone = "zone", i.RateLimit = "ratelimit", i
				}({}),
				o = function(i) {
					return i.Cache = "http_request_cache_settings", i.HttpConfigSettings = "http_config_settings", i.HttpLogCustomFields = "http_log_custom_fields", i.HttpRateLimit = "http_ratelimit", i.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", i.HttpRequestFirewallCustom = "http_request_firewall_custom", i.HttpRequestFirewallManaged = "http_request_firewall_managed", i.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", i.HttpRequestLateTransform = "http_request_late_transform", i.HttpRequestMain = "http_request_main", i.HttpRequestOrigin = "http_request_origin", i.HttpRequestRedirect = "http_request_redirect", i.HttpRequestSanitize = "http_request_sanitize", i.HttpRequestSBFM = "http_request_sbfm", i.HttpRequestsSnippets = "http_request_snippets", i.HttpRequestTransform = "http_request_transform", i.HttpResponseCompression = "http_response_compression", i.HttpResponseFirewallManaged = "http_response_firewall_managed", i.HttpResponseTransform = "http_response_headers_transform", i.L4DDoS = "ddos_l4", i.L7DDoS = "ddos_l7", i.MagicIDS = "magic_transit_ids_managed", i.MagicManaged = "magic_transit_managed", i.MagicTransit = "magic_transit", i.MagicTransitRateLimit = "magic_transit_ratelimit", i
				}({}),
				a = function(i) {
					return i.Execute = "execute", i.All = "all", i.Block = "block", i.JSChallenge = "js_challenge", i.Challenge = "challenge", i.Allow = "allow", i.Bypass = "bypass", i.Log = "log", i.Rewrite = "rewrite", i.Score = "score", i.Skip = "skip", i.Managed_Challenge = "managed_challenge", i.DDoS_Dynamic = "ddos_dynamic", i.Select_Config = "select_config", i.Set_Config = "set_config", i.Reset = "reset", i.Redirect = "redirect", i.Cache = "set_cache_settings", i
				}({}),
				l = function(i) {
					return i.ZONE_LOCKDOWN = "zoneLockdown", i.UA_BLOCK = "uaBlock", i.BIC = "bic", i.HOT = "hot", i.SECURITY_LEVEL = "securityLevel", i.RATE_LIMIT = "rateLimit", i.WAF = "waf", i
				}({}),
				c = function(i) {
					return i.DEFAULT = "default", i.MEDIUM = "medium", i.LOW = "low", i.EOFF = "eoff", i.HIGH = "high", i.VERY_HIGH = "very_high", i
				}({}),
				f = function(i) {
					return i.DEFAULT = "", i.XML = "text/xml", i.JSON = "application/json", i.TEXT = "text/plain", i.HTML = "text/html", i
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Yd: function() {
					return e
				},
				vE: function() {
					return o
				}
			});

			function e(a) {
				return Object.keys(a)
			}
			const o = (a, l) => {
				if (l !== void 0) throw new Error("Unexpected object: " + a);
				return l
			}
		},
		"../../../dash/intl/intl-translations/src/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Fy: function() {
					return e.Z
				},
				if: function() {
					return a.Z
				},
				n4: function() {
					return o.n
				}
			});
			var e = t("../../../dash/intl/intl-translations/src/makeLoadPhrases.ts"),
				o = t("../../../dash/intl/intl-translations/src/catalogMap.ts"),
				a = t("../../../dash/intl/intl-translations/src/supportedCatalogs.ts")
		},
		"../react/common/styles/styles.css": function(W, v, t) {
			var e = t("../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/dist/cjs.js!../react/common/styles/styles.css");
			typeof e == "string" && (e = [
				[W.id, e, ""]
			]);
			var o, a, l = {
				hmr: !0
			};
			l.transform = o, l.insertInto = void 0;
			var c = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, l);
			e.locals && (W.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/dist/cjs.js!../react/common/styles/styles.css": function(W, v, t) {
			v = W.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), v.push([W.id, `*, ::before, ::after {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x:  ;
    --tw-pan-y:  ;
    --tw-pinch-zoom:  ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position:  ;
    --tw-gradient-via-position:  ;
    --tw-gradient-to-position:  ;
    --tw-ordinal:  ;
    --tw-slashed-zero:  ;
    --tw-numeric-figure:  ;
    --tw-numeric-spacing:  ;
    --tw-numeric-fraction:  ;
    --tw-ring-inset:  ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur:  ;
    --tw-brightness:  ;
    --tw-contrast:  ;
    --tw-grayscale:  ;
    --tw-hue-rotate:  ;
    --tw-invert:  ;
    --tw-saturate:  ;
    --tw-sepia:  ;
    --tw-drop-shadow:  ;
    --tw-backdrop-blur:  ;
    --tw-backdrop-brightness:  ;
    --tw-backdrop-contrast:  ;
    --tw-backdrop-grayscale:  ;
    --tw-backdrop-hue-rotate:  ;
    --tw-backdrop-invert:  ;
    --tw-backdrop-opacity:  ;
    --tw-backdrop-saturate:  ;
    --tw-backdrop-sepia:  ;
    --tw-contain-size:  ;
    --tw-contain-layout:  ;
    --tw-contain-paint:  ;
    --tw-contain-style:  
}
::-webkit-backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x:  ;
    --tw-pan-y:  ;
    --tw-pinch-zoom:  ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position:  ;
    --tw-gradient-via-position:  ;
    --tw-gradient-to-position:  ;
    --tw-ordinal:  ;
    --tw-slashed-zero:  ;
    --tw-numeric-figure:  ;
    --tw-numeric-spacing:  ;
    --tw-numeric-fraction:  ;
    --tw-ring-inset:  ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur:  ;
    --tw-brightness:  ;
    --tw-contrast:  ;
    --tw-grayscale:  ;
    --tw-hue-rotate:  ;
    --tw-invert:  ;
    --tw-saturate:  ;
    --tw-sepia:  ;
    --tw-drop-shadow:  ;
    --tw-backdrop-blur:  ;
    --tw-backdrop-brightness:  ;
    --tw-backdrop-contrast:  ;
    --tw-backdrop-grayscale:  ;
    --tw-backdrop-hue-rotate:  ;
    --tw-backdrop-invert:  ;
    --tw-backdrop-opacity:  ;
    --tw-backdrop-saturate:  ;
    --tw-backdrop-sepia:  ;
    --tw-contain-size:  ;
    --tw-contain-layout:  ;
    --tw-contain-paint:  ;
    --tw-contain-style:  
}
::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x:  ;
    --tw-pan-y:  ;
    --tw-pinch-zoom:  ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position:  ;
    --tw-gradient-via-position:  ;
    --tw-gradient-to-position:  ;
    --tw-ordinal:  ;
    --tw-slashed-zero:  ;
    --tw-numeric-figure:  ;
    --tw-numeric-spacing:  ;
    --tw-numeric-fraction:  ;
    --tw-ring-inset:  ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur:  ;
    --tw-brightness:  ;
    --tw-contrast:  ;
    --tw-grayscale:  ;
    --tw-hue-rotate:  ;
    --tw-invert:  ;
    --tw-saturate:  ;
    --tw-sepia:  ;
    --tw-drop-shadow:  ;
    --tw-backdrop-blur:  ;
    --tw-backdrop-brightness:  ;
    --tw-backdrop-contrast:  ;
    --tw-backdrop-grayscale:  ;
    --tw-backdrop-hue-rotate:  ;
    --tw-backdrop-invert:  ;
    --tw-backdrop-opacity:  ;
    --tw-backdrop-saturate:  ;
    --tw-backdrop-sepia:  ;
    --tw-contain-size:  ;
    --tw-contain-layout:  ;
    --tw-contain-paint:  ;
    --tw-contain-style:  
}
.\\!container {
    width: 100% !important
}
.container {
    width: 100%
}
@media (min-width: 640px) {
    .\\!container {
        max-width: 640px !important
    }
    .container {
        max-width: 640px
    }
}
@media (min-width: 768px) {
    .\\!container {
        max-width: 768px !important
    }
    .container {
        max-width: 768px
    }
}
@media (min-width: 1024px) {
    .\\!container {
        max-width: 1024px !important
    }
    .container {
        max-width: 1024px
    }
}
@media (min-width: 1280px) {
    .\\!container {
        max-width: 1280px !important
    }
    .container {
        max-width: 1280px
    }
}
@media (min-width: 1536px) {
    .\\!container {
        max-width: 1536px !important
    }
    .container {
        max-width: 1536px
    }
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
    border-width: 0
}
.\\!visible {
    visibility: visible !important
}
.visible {
    visibility: visible
}
.invisible {
    visibility: hidden
}
.collapse {
    visibility: collapse
}
.static {
    position: static
}
.fixed {
    position: fixed
}
.absolute {
    position: absolute
}
.relative {
    position: relative
}
.sticky {
    position: sticky
}
.isolate {
    isolation: isolate
}
.block {
    display: block
}
.inline-block {
    display: inline-block
}
.inline {
    display: inline
}
.flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}
.inline-flex {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex
}
.table {
    display: table
}
.table-cell {
    display: table-cell
}
.table-row {
    display: table-row
}
.grid {
    display: grid
}
.inline-grid {
    display: inline-grid
}
.contents {
    display: contents
}
.list-item {
    display: list-item
}
.\\!hidden {
    display: none !important
}
.hidden {
    display: none
}
.flex-shrink {
    -ms-flex-negative: 1;
        flex-shrink: 1
}
.shrink {
    -ms-flex-negative: 1;
        flex-shrink: 1
}
.flex-grow {
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1
}
.grow {
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1
}
.border-collapse {
    border-collapse: collapse
}
.transform {
    -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
.select-all {
    -webkit-user-select: all;
       -moz-user-select: all;
        -ms-user-select: all;
            user-select: all
}
.resize {
    resize: both
}
.flex-wrap {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap
}
.self-start {
    -ms-flex-item-align: start;
        align-self: flex-start
}
.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}
.overflow-ellipsis {
    text-overflow: ellipsis
}
.break-all {
    word-break: break-all
}
.rounded {
    border-radius: 0.25rem
}
.border {
    border-width: 1px
}
.bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1))
}
.uppercase {
    text-transform: uppercase
}
.lowercase {
    text-transform: lowercase
}
.capitalize {
    text-transform: capitalize
}
.italic {
    font-style: italic
}
.tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)
}
.text-black {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity, 1))
}
.text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity, 1))
}
.underline {
    -webkit-text-decoration-line: underline;
            text-decoration-line: underline
}
.line-through {
    -webkit-text-decoration-line: line-through;
            text-decoration-line: line-through
}
.antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}
.shadow {
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
.outline {
    outline-style: solid
}
.ring {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
            box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
}
.blur {
    --tw-blur: blur(8px);
    -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
.drop-shadow {
    --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
    -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
.grayscale {
    --tw-grayscale: grayscale(100%);
    -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
.invert {
    --tw-invert: invert(100%);
    -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
.\\!filter {
    -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important
}
.filter {
    -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
.\\!transition {
    -webkit-transition-property: color, background-color, border-color, fill, stroke, opacity, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter !important;
    transition-property: color, background-color, border-color, fill, stroke, opacity, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter !important;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter !important;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter !important;
    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
    -webkit-transition-duration: 150ms !important;
            transition-duration: 150ms !important
}
.transition {
    -webkit-transition-property: color, background-color, border-color, fill, stroke, opacity, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, fill, stroke, opacity, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;
    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transition-duration: 150ms;
            transition-duration: 150ms
}
.ease-in {
    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
            transition-timing-function: cubic-bezier(0.4, 0, 1, 1)
}
.ease-in-out {
    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}
.ease-out {
    -webkit-transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
            transition-timing-function: cubic-bezier(0, 0, 0.2, 1)
}
.\\[a-f0-9\\:\\.\\\\\\/\\] {
    a-f0-9: .\\/
}
.\\[a-zA-Z\\:_\\] {
    a-z-a--z: 
}
`, ""])
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(W, v, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(a) {
				if (!t.o(e, a)) return Promise.resolve().then(function() {
					var f = new Error("Cannot find module '" + a + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				});
				var l = e[a],
					c = l[0];
				return t.e(l[1]).then(function() {
					return t.t(c, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", W.exports = o
		}
	}
]);

//# debugId=cd93e50e-e4e0-5105-a457-6d57f717d7da