! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "30e15747-69af-5ea4-9ea0-7d64614e2f7b")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(z, v, t) {
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
					return s
				},
				ki: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/utils/url.ts"),
				i = t("../../../../node_modules/query-string/query-string.js"),
				l = t.n(i),
				c = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g;
			const s = () => Object.keys(c.Z).reduce((h, I) => (I.indexOf("cf_beta.") === 0 && c.Z.get(I) === "true" && h.push(I.split(".").slice(1).join(".")), h), []),
				m = () => {
					var h, I, O;
					return ((h = window) === null || h === void 0 || (I = h.bootstrap) === null || I === void 0 || (O = I.data) === null || O === void 0 ? void 0 : O.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((g = window) === null || g === void 0 ? void 0 : g.location) && c.Z) {
				const h = l().parse(window.location.search);
				h.beta_on && c.Z.set(`cf_beta.${h.beta_on}`, !0), h.beta_off && c.Z.set(`cf_beta.${h.beta_off}`, !1)
			}
			const f = {},
				n = h => {
					var I, O, C;
					return Object.prototype.hasOwnProperty.call(f, h) ? f[h] : ((I = window) === null || I === void 0 || (O = I.bootstrap) === null || O === void 0 || (C = O.data) === null || C === void 0 ? void 0 : C.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(w => w === h) ? (f[h] = !0, !0) : (f[h] = !1, !1)
				},
				a = h => c.Z ? c.Z.get(`cf_beta.${h}`) === !0 : !1,
				r = h => a(h) || n(h),
				d = () => !0,
				u = () => {
					var h, I, O;
					return ((h = window) === null || h === void 0 || (I = h.bootstrap) === null || I === void 0 || (O = I.data) === null || O === void 0 ? void 0 : O.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				_ = h => {
					const I = (0, e.uF)(h),
						O = (I == null ? void 0 : I.roles) || [];
					return (0, o.qR)(location.pathname) && O.length === 1 && O.some(C => C === "Administrator Read Only")
				}
		},
		"../init.ts": function(z, v, t) {
			"use strict";
			t.r(v);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				i = t("../libs/init/initGlobal.ts"),
				l = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				c = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function g(R) {
				for (var F = 1; F < arguments.length; F++) {
					var J = arguments[F] != null ? Object(arguments[F]) : {},
						ie = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(J).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(J, fe).enumerable
					})), ie.forEach(function(fe) {
						s(R, fe, J[fe])
					})
				}
				return R
			}

			function s(R, F, J) {
				return F = m(F), F in R ? Object.defineProperty(R, F, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[F] = J, R
			}

			function m(R) {
				var F = f(R, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function f(R, F) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ie = J.call(R, F || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(R)
			}
			const n = R => {
				const F = R && R.headers || {},
					J = new Headers(F);
				return J.append("X-Cross-Site-Security", "dash"), g({}, R, {
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
			var a = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				r = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				d = t("../react/app/providers/storeContainer.js");
			let u = "";
			const _ = 61;

			function h(R) {
				const F = R.substr(1);
				if (F && u !== F) {
					const J = document.getElementById(F);
					if (J) {
						const ie = J.getBoundingClientRect().top;
						if (ie > 0) {
							const fe = ie - _;
							document.documentElement.scrollTop = fe
						}
					}
				}
				u = F
			}

			function I(R) {
				R.listen(F => h(F.hash))
			}
			var O = t("../../../../node_modules/cookie/index.js"),
				C = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const w = "CF_dash_version",
				E = "cf_fv_preview",
				y = "cf_pv",
				M = "current",
				S = "hash",
				B = "deploymentPreview",
				P = "fragmentPreview",
				b = R => R === M ? D() : L(),
				D = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				L = (R = 72) => {
					const F = 36e5;
					return new Date(Date.now() + R * F)
				},
				j = R => {
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
					const ie = j(R),
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
    <h1 id="error-title">${ie.title}</h1>
    <p id="error-description">${ie.description}</p>
  </div>
  `,
						Ae = F ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${C.fk.orange[9]};
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
					ie = !!((F = O.parse(document.cookie)) === null || F === void 0 ? void 0 : F[w]);
				!J || (J.innerHTML = Q(R == null ? void 0 : R.code, ie))
			}
			var le = t("../utils/initStyles.ts"),
				x = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				$ = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				U = t("../react/common/selectors/languagePreferenceSelector.ts"),
				T = t("../flags.ts"),
				k = t("../utils/getDashVersion.ts");
			const Z = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				X = !0,
				ae = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				q = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var N = t("../utils/sentry/lastSentEventId.ts"),
				K = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				V = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const W = R => {
				const F = async J => {
					var ie, fe;
					const Ae = {
						envelope: J.body,
						url: R.url,
						isPreviewDeploy: (ie = window) === null || ie === void 0 || (fe = ie.build) === null || fe === void 0 ? void 0 : fe.isPreviewDeploy,
						release: (0, k.t)()
					};
					try {
						const be = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(Ae)
						});
						return {
							statusCode: be.status,
							headers: {
								"x-sentry-rate-limits": be.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": be.headers.get("Retry-After")
							}
						}
					} catch (be) {
						return console.log(be), (0, V.$2)(be)
					}
				};
				return K.q(R, F)
			};
			var ee = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				pe = t("../../../../node_modules/history/esm/history.js"),
				_e = (0, pe.lX)(),
				ye = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Le = t("../react/utils/url.ts");
			const Ie = (0, ye.Rf)();
			let Se;

			function ke(R) {
				return He(R, "react-router-v5")
			}

			function He(R, F) {
				return (J, ie = !0, fe = !0) => {
					ie && Ie && Ie.location && (Se = J({
						name: (0, Le.Fl)(Ie.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": F
						}
					})), fe && R.listen && R.listen((Ae, be) => {
						if (be && (be === "PUSH" || be === "POP")) {
							Se && Se.finish();
							const Ze = {
								"routing.instrumentation": F
							};
							Se = J({
								name: (0, Le.Fl)(Ae.pathname),
								op: "navigation",
								tags: Ze
							})
						}
					})
				}
			}
			var H = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ve = t.n(H),
				Pe = t("../../../common/intl/intl-core/src/errors.ts"),
				Ye = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				tt = t("../react/common/middleware/sparrow/errors.ts");

			function ze(R, F, J) {
				return F = mt(F), F in R ? Object.defineProperty(R, F, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[F] = J, R
			}

			function mt(R) {
				var F = nt(R, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function nt(R, F) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ie = J.call(R, F || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(R)
			}
			class Xe {
				constructor() {
					ze(this, "name", Xe.id)
				}
				setupOnce() {
					t.g.console && (0, Ye.hl)(t.g.console, "error", F => (...J) => {
						const ie = J.find(fe => fe instanceof Error);
						if (Z && ie) {
							let fe, Ae = !0;
							if (ie instanceof tt.ez) {
								const be = ie instanceof tt.oV ? ie.invalidProperties : void 0;
								fe = {
									tags: {
										"sparrow.eventName": ie.eventName
									},
									extra: {
										sparrow: {
											eventName: ie.eventName,
											invalidProperties: be
										}
									},
									fingerprint: [ie.name ? ie.name : "SparrowValidationError"]
								}, Ae = !1
							} else if (ie instanceof H.SparrowIdCookieError) fe = {
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
							} else ie instanceof Pe.YB && (fe = {
								fingerprint: ["TranslatorError", ie.translationKey]
							});
							Ae && a.Tb(ie, fe)
						}
						typeof F == "function" && F.apply(t.g.console, J)
					})
				}
			}
			ze(Xe, "id", "ConsoleErrorIntegration");
			var gt = null;
			const Y = () => {
					if (Z && X) {
						var R, F, J, ie, fe, Ae, be, Ze, dt, $e;
						let $t = "production";
						((R = window) === null || R === void 0 || (F = R.build) === null || F === void 0 ? void 0 : F.isPreviewDeploy) && ($t += "-preview"), $.S({
							dsn: Z,
							release: (0, k.t)(),
							environment: $t,
							ignoreErrors: q,
							allowUrls: ae,
							autoSessionTracking: !1,
							integrations: pt => [...pt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new Xe, new ee.jK.BrowserTracing({
								routingInstrumentation: ke(_e)
							})],
							tracesSampleRate: 0,
							transport: W,
							beforeSend: pt => (N.e.setEventId(pt.event_id), pt)
						});
						const Nt = (0, d.bh)().getState();
						a.rJ({
							LOCAL_STORAGE_FLAGS: (0, T.Qw)(),
							USER_BETA_FLAGS: (0, T.ki)(),
							meta: {
								connection: {
									type: (J = window) === null || J === void 0 || (ie = J.navigator) === null || ie === void 0 || (fe = ie.connection) === null || fe === void 0 ? void 0 : fe.effectiveType,
									bandwidth: (Ae = window) === null || Ae === void 0 || (be = Ae.navigator) === null || be === void 0 || (Ze = be.connection) === null || Ze === void 0 ? void 0 : Ze.downlink
								},
								languagePreference: (0, U.r)(Nt),
								isPreviewDeploy: (dt = window) === null || dt === void 0 || ($e = dt.build) === null || $e === void 0 ? void 0 : $e.isPreviewDeploy
							},
							utilGates: (0, x.T2)(Nt)
						}), window.addEventListener("unhandledrejection", function(pt) {})
					}
				},
				ue = R => {
					R ? a.av({
						id: R
					}) : a.av(null)
				};
			var Ce = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Fe = () => {
					let R;
					try {
						R = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), R = window.location.search
					}
					if (!R.includes("remote[")) return;
					const F = new URLSearchParams(R),
						J = {};
					for (let [ie, fe] of F) ie.includes("remote") && (J[ie.replace(/remote\[|\]/g, "")] = fe);
					Ce.Z.set("mfe-remotes", JSON.stringify(J))
				},
				Re = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				Je = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const at = "ANON_USER_ID";

			function ot() {
				var R, F, J, ie;
				let fe = (R = t.g) === null || R === void 0 || (F = R.bootstrap) === null || F === void 0 || (J = F.data) === null || J === void 0 || (ie = J.user) === null || ie === void 0 ? void 0 : ie.id;
				if (!fe) {
					let Ae = Ce.Z.get(at);
					if (!Ae) {
						let be = (0, Je.Z)();
						Ce.Z.set(at, be), Ae = be
					}
					return Ae
				}
				return fe
			}
			async function st() {
				const R = (0, d.bh)();
				R.dispatch((0, Re.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await R.dispatch((0, x.UL)({
					userId: ot()
				}))
			}
			class vt extends Error {
				constructor(F, J) {
					super(J);
					this.name = `${F} ${J}`
				}
			}
			const yt = () => {
					document.cookie.split(";").forEach(F => {
						const [J] = F.trim().split("=");
						document.cookie = `${J}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				ct = async () => {
					let R = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!R.ok) throw R.headers.get("content-type") === "text/html" && (await R.text()).toLowerCase().includes("cookie too large") && (a.$e(function(fe) {
						fe.setTag("init", "cookieTooLarge"), a.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), yt(), window.location.reload()), new vt("Bootstrap API Failure", R == null ? void 0 : R.status);
					return (await R.json()).result.data
				};
			var Ne = t("webpack/sharing/consume/default/react/react"),
				Te = t.n(Ne),
				Ke = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Ct = t("webpack/sharing/consume/default/react-dom/react-dom"),
				lt = t("webpack/sharing/consume/default/react-redux/react-redux"),
				ht = t("../../../../node_modules/swr/core/dist/index.mjs"),
				G = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				se = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Ee = t("../react/shims/focus-visible.js"),
				Oe = t("../react/app/components/DeepLink/index.ts"),
				we = t("../../../../node_modules/prop-types/index.js"),
				je = t.n(we),
				Qe = t("../react/utils/translator.tsx"),
				rt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				De = t("../../../dash/intl/intl-translations/src/index.ts"),
				Tt = t("../../../../node_modules/query-string/query-string.js"),
				ut = t.n(Tt),
				Rt = t("../react/common/actions/userActions.ts"),
				ft = t("../react/common/selectors/userSelectors.ts"),
				it = t("../react/utils/i18n.ts"),
				Pt = t("../react/utils/bootstrap.ts");

			function Dt(R) {
				for (var F = 1; F < arguments.length; F++) {
					var J = arguments[F] != null ? Object(arguments[F]) : {},
						ie = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(J).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(J, fe).enumerable
					})), ie.forEach(function(fe) {
						It(R, fe, J[fe])
					})
				}
				return R
			}

			function It(R, F, J) {
				return F = kt(F), F in R ? Object.defineProperty(R, F, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[F] = J, R
			}

			function kt(R) {
				var F = Ot(R, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function Ot(R, F) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ie = J.call(R, F || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(R)
			}
			let Ve = ut().parse(location.search);
			const Lt = R => {
					const F = (0, Pt.$8)() ? [(0, De.Fy)(De.if.changes), (0, De.Fy)(De.if.common), (0, De.Fy)(De.if.navigation), (0, De.Fy)(De.if.overview), (0, De.Fy)(De.if.onboarding), (0, De.Fy)(De.if.invite), (0, De.Fy)(De.if.login), (0, De.Fy)(De.if.dns), (0, De.Fy)(De.n4.ssl_tls), (0, De.Fy)(De.if.message_inbox), (0, De.Fy)(De.if.welcome)] : [(0, De.Fy)(De.if.common), (0, De.Fy)(De.if.invite), (0, De.Fy)(De.if.login), (0, De.Fy)(De.if.onboarding)];
					Ve.lang ? Bt(R) : Ce.Z.get(it.th) && _t(R, (0, it.Kd)());
					const J = async ie => (await Promise.all(F.map(Ae => Ae(ie)))).reduce((Ae, be) => Dt({}, Ae, be), {});
					return Te().createElement(rt.LocaleContext.Provider, {
						value: R.languagePreference
					}, Te().createElement(rt.I18nProvider, {
						translator: Qe.Vb,
						locale: R.languagePreference
					}, Te().createElement(rt.I18nLoader, {
						loadPhrases: J
					}, R.children)))
				},
				Bt = async R => {
					let F = Ve.lang.substring(0, Ve.lang.length - 2) + Ve.lang.substring(Ve.lang.length - 2, Ve.lang.length).toUpperCase();
					if (!(0, U.v)(F)) {
						console.warn(`${F} is not a supported locale.`), delete Ve.lang, R.history.replace({
							search: ut().stringify(Ve)
						});
						return
					}(0, it.i_)(F), delete Ve.lang, _t(R, F), R.isAuthenticated || R.history.replace({
						search: ut().stringify(Ve)
					})
				}, _t = async (R, F) => {
					if (R.isAuthenticated) try {
						await R.setUserCommPreferences({
							"language-locale": F
						}, {
							hideErrorAlert: !0
						}), Ce.Z.remove(it.th), R.history.replace({
							search: ut().stringify(Ve)
						})
					} catch (J) {
						Ce.Z.set(it.th, !0), console.error(J)
					} else Ce.Z.set(it.th, !0)
				}, St = R => {
					const F = (0, ft.PR)(R);
					return {
						isAuthenticated: !!(F && F.id),
						languagePreference: (0, it.Kd)() || (0, U.r)(R)
					}
				}, bt = {
					setUserCommPreferences: Rt.V_
				};
			var oe = (0, Ke.withRouter)((0, lt.connect)(St, bt)(Lt));
			Lt.propTypes = {
				history: je().object,
				languagePreference: je().string.isRequired,
				children: je().node.isRequired,
				isAuthenticated: je().bool,
				setUserCommPreferences: je().func.isRequired
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
			var ne = t("../react/common/components/ModalManager.tsx"),
				he = t("../react/app/components/ErrorBoundary.tsx"),
				Me = t("../react/common/actions/notificationsActions.ts");
			const We = (t.g.bootstrap || {}).data || {};
			class qe extends Te().Component {
				componentDidMount() {
					We.messages && this.dispatchNotificationActions(We.messages)
				}
				dispatchNotificationActions(F) {
					F.forEach(J => {
						const {
							type: ie,
							message: fe,
							persist: Ae
						} = J;
						["success", "info", "warn", "error"].includes(ie) && this.props.notifyAdd(ie, (0, Qe.ZP)(fe), {
							persist: !!Ae
						})
					})
				}
				render() {
					return null
				}
			}
			var et = (0, Ke.withRouter)((0, lt.connect)(null, {
				notifyAdd: Me.add
			})(qe));
			qe.propTypes = {
				notifyAdd: je().func.isRequired
			};
			var Be = t("../react/app/redux/index.ts");

			function Ut() {
				var R;
				const F = (0, Be.p4)(ft.PR),
					J = (F == null || (R = F.email) === null || R === void 0 ? void 0 : R.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ie = (0, Re.Yc)();
				(0, Ne.useEffect)(() => {
					ie({
						userType: J
					})
				}, [J, ie])
			}
			var wt = t("../react/common/selectors/entitlementsSelectors.ts"),
				Mt = t("../react/common/selectors/accountSelectors.ts");
			const jt = ["accountId", "is_ent"];

			function xt() {
				const R = (0, Re.f7)(),
					F = (0, Ke.useHistory)(),
					J = (0, Le.uW)(F.location.pathname),
					ie = (0, Re.Yc)(),
					fe = (0, Re.O$)(),
					Ae = (0, Be.p4)(wt.u1),
					be = !Ae.isRequesting && !!Ae.data,
					Ze = (0, Be.p4)(wt.p1),
					dt = (0, Be.p4)(Mt.Xu),
					$e = (0, Be.p4)(Mt.uF),
					$t = !dt.isRequesting && !!dt.data;
				(0, Ne.useEffect)(() => {
					if (J && $t && $e && be && J === $e.account.id) {
						var Nt, pt, Vt;
						ie({
							accountId: $e.account.id,
							is_ent: Ze,
							is_free_account: !Ze && !($e == null || (Nt = $e.account.meta) === null || Nt === void 0 ? void 0 : Nt.has_business_zones) && !($e == null || (pt = $e.account.meta) === null || pt === void 0 ? void 0 : pt.has_pro_zones) && !($e == null || (Vt = $e.account.meta) === null || Vt === void 0 ? void 0 : Vt.has_enterprise_zones)
						})
					} else(!J || J in R && R.accountId !== J) && fe(jt)
				}, [$t, $e, ie, fe, be, Ze, J, R])
			}
			var Ge = t("../react/common/selectors/zoneSelectors.ts");

			function Gt() {
				const R = (0, Be.p4)(Ge.nA),
					F = (0, Re.Yc)();
				(0, Ne.useEffect)(() => {
					var J;
					F({
						zone_id: R == null ? void 0 : R.id,
						zone_plan: R == null || (J = R.plan) === null || J === void 0 ? void 0 : J.legacy_id
					})
				}, [R, F])
			}
			const Wt = () => (Ut(), xt(), Gt(), null);
			var en = t("../react/app/components/Persistence/index.tsx"),
				tn = t("../node_modules/@cloudflare/elements/es/index.js"),
				nn = t("../react/app/components/LoadingSuspense.tsx");
			const on = Te().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(50038), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var rn = () => Te().createElement(nn.Z, null, Te().createElement(on, null));
			const an = () => (Ne.useEffect(() => me, []), null);
			var sn = t("../../../../node_modules/moment/moment.js"),
				Zt = t.n(sn);
			const cn = R => {
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
				ln = () => {
					const R = (0, Be.p4)(U.r);
					(0, Ne.useEffect)(() => {
						const F = cn(R);
						F !== Zt().locale() && Zt().locale(F), document.documentElement.lang = R
					}, [R])
				},
				un = () => {
					(0, Ne.useEffect)(() => {
						async function R() {
							var F, J;
							let ie;
							if (((F = window) === null || F === void 0 || (J = F.build) === null || J === void 0 ? void 0 : J.isPreviewDeploy) && (ie = "cookie"), !!ie) try {
								const fe = document.head.querySelector("link[rel=icon]");
								fe && (fe.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${ie}.ico`)).default)
							} catch {}
						}
						R()
					}, [])
				};
			var dn = t("../react/common/constants/constants.ts");
			const pn = () => {
					var R;
					const F = (0, Ke.useLocation)(),
						[J, ie] = (0, Ne.useState)(((R = window) === null || R === void 0 ? void 0 : R.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Ne.useEffect)(() => {
						const fe = ut().parse(F.search);
						if (fe.pt && Ce.Z.set(dn.sJ, fe.pt), fe == null ? void 0 : fe.devPanel) {
							var Ae, be;
							(Ae = window) === null || Ae === void 0 || (be = Ae.localStorage) === null || be === void 0 || be.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ie(!0)
						}
					}, [F.search]), {
						devPanelEnabled: J
					}
				},
				mn = ({
					id: R,
					customDataLayer: F = [],
					dataLayerName: J = "dataLayer"
				}) => {
					const ie = `<iframe src="https://www.googletagmanager.com/ns.html?id=${R}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						fe = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${J}', '${R}')`,
						Ae = `
    window.${J} = window.${J} || [];
    window.${J}.push(${JSON.stringify(F)})
  `;
					return {
						iframe: ie,
						script: fe,
						dataLayerHTML: Ae
					}
				},
				gn = R => {
					const F = document.createElement("script");
					return F.innerHTML = R, F.async = !0, F
				},
				fn = R => {
					const F = document.createElement("noscript");
					return F.innerHTML = R, F
				},
				Ht = R => {
					const F = document.createElement("script");
					return F.innerHTML = R, F
				},
				kn = ({
					dataLayer: R,
					dataLayerName: F
				}) => {
					if (window[F]) return window[F].push(R);
					const J = `
      window.${F} = window.${F} || [];
      window.${F}.push(${JSON.stringify(R)})`,
						ie = Ht(J);
					document.head.insertBefore(ie, document.head.childNodes[0])
				},
				_n = ({
					containerId: R,
					customDataLayer: F,
					gtmFeatureFlag: J = !0
				}) => {
					(0, Ne.useEffect)(() => {
						(() => {
							if (!J) return null;
							const {
								iframe: fe,
								script: Ae,
								dataLayerHTML: be
							} = mn({
								id: R,
								customDataLayer: F
							});
							document.head.insertBefore(Ht(be), document.head.childNodes[0]), document.head.insertBefore(gn(Ae), document.head.childNodes[0]), document.body.insertBefore(fn(fe), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const En = ({
				isDev: R,
				gtmFeatureFlag: F
			}) => {
				(0, Ne.useEffect)(() => {
					(() => {
						if (!F) return null;
						let ie;
						R ? ie = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ie = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const fe = document.createElement("script");
						fe.async = !0, fe.src = ie, document.head.insertBefore(fe, document.head.childNodes[0])
					})()
				}, [])
			};
			var vn = t("../react/utils/useDomainConnectRedirect.ts");
			const yn = "GTM-NDGPDFZ",
				Cn = Te().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(50038), t.e(51436), t.e(3292), t.e(47386), t.e(70618), t.e(44450), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(18527), t.e(87940), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				hn = Te().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(39074), t.e(57062), t.e(3292), t.e(55879), t.e(69088), t.e(18527), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var Tn = ({
					userIsAuthed: R
				}) => {
					ln(), un(), (0, vn.y)();
					const {
						devPanelEnabled: F
					} = pn();
					return _n({
						containerId: yn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), En({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), Te().createElement(Ne.Suspense, {
						fallback: Te().createElement(an, null)
					}, Te().createElement(Ke.Switch, null, !R && !0 && Te().createElement(Ke.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Te().createElement(hn, null)), Te().createElement(Ke.Route, {
						render: () => Te().createElement(tn.ZC, {
							minHeight: "100vh"
						}, Te().createElement(Cn, null))
					})), F && Te().createElement(rn, null))
				},
				zt = t("../../../../node_modules/yup/es/index.js"),
				In = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => zt.Z_().email((0, Qe.ZP)("common.validation.email")).required((0, Qe.ZP)("common.validation.email")),
				cfPassword: () => zt.Z_().required((0, Qe.ZP)("common.validation.required"))
			};
			(0, In.Yd)(Qt).forEach(R => {
				zt.kM(zt.Z_, R, Qt[R])
			});
			var On = t("../react/common/utils/startViewTransition.ts");
			const Xt = Te().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx"))),
				bn = () => {
					const R = (0, Pt.$8)(),
						[F, J] = (0, Ne.useState)(R ? Xt : Te().Fragment),
						[ie, fe] = (0, Ne.useState)((0, C.Yc)());
					(0, Ne.useEffect)(() => {
						(0, C.fF)(() => fe((0, C.Yc)()))
					}, []);
					const Ae = be => {
						fe(be), (0, On.o)(() => {
							(0, C.C8)(be)
						}), document.cookie = `dark-mode=${be};Path=/;Max-Age=31536000`
					};
					return (0, Ne.useEffect)(() => {
						J(R ? Xt : Te().Fragment)
					}, [R]), (0, Ne.useEffect)(() => {
						const be = () => Ae(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", be), () => {
							window.removeEventListener("storage", be)
						}
					}, []), Te().createElement(Ne.Suspense, {
						fallback: null
					}, Te().createElement(lt.Provider, {
						store: (0, d.bh)()
					}, Te().createElement(Ke.Router, {
						history: _e
					}, Te().createElement(F, null, Te().createElement(te.Z, {
						renderer: A()
					}, Te().createElement(oe, null, Te().createElement(he.S, {
						sentryTag: "Root"
					}, Te().createElement(ht.J$, {
						value: {
							fetcher: be => fetch(be).then(Ze => Ze.json())
						}
					}, Te().createElement(Wt, null), Te().createElement(et, null), Te().createElement(en.Z_, {
						onDarkModeChangeCb: Ae
					}, Te().createElement(Oe.ZP, null, Te().createElement(Tn, {
						userIsAuthed: R
					}))), Te().createElement(ne.ZP, null), Te().createElement(G.F0, null)))))))))
				},
				An = () => {
					(0, Ct.render)(Te().createElement(bn, null), document.getElementById("react-app"))
				};
			var At = t("../utils/initSparrow.ts"),
				Ft = t("../utils/zaraz.ts");
			const Pn = () => {
					const R = (0, ft.PR)((0, d.bh)().getState());
					Dn(), (0, At.Ug)(), (0, Ft.bM)(), (R == null ? void 0 : R.id) && ve().setUserId(R == null ? void 0 : R.id), (0, At.yV)(), !(0, At.Wi)() && (0, At.IM)(), R ? (0, Ft.yn)(R) : (0, Ft.Ro)()
				},
				Dn = () => {
					var R, F;
					(R = window) === null || R === void 0 || (F = R.OneTrust) === null || F === void 0 || F.OnConsentChanged(() => {
						const J = (0, ft.PR)((0, d.bh)().getState());
						(0, At.Wi)() ? (ve().setEnabled(!0), (J == null ? void 0 : J.id) ? (ve().setUserId(J.id), (0, Ft.yn)(J)) : (0, Ft.Ro)(), (0, At.yV)()) : (ve().setEnabled(!1), (0, At.IM)())
					})
				};

			function Ln(R) {
				for (var F = 1; F < arguments.length; F++) {
					var J = arguments[F] != null ? Object(arguments[F]) : {},
						ie = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(J).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(J, fe).enumerable
					})), ie.forEach(function(fe) {
						Sn(R, fe, J[fe])
					})
				}
				return R
			}

			function Sn(R, F, J) {
				return F = wn(F), F in R ? Object.defineProperty(R, F, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[F] = J, R
			}

			function wn(R) {
				var F = Mn(R, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function Mn(R, F) {
				if (typeof R != "object" || R === null) return R;
				var J = R[Symbol.toPrimitive];
				if (J !== void 0) {
					var ie = J.call(R, F || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(R)
			}
			const Nn = "init",
				Jt = (R, F) => {
					a.$e(function(J) {
						J.setTag(Nn, F), a.Tb(R)
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
					t.g.build = Ln({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "3c7110c1fb6fb8120b4d7e007ee04c1605b07b35",
						dashVersion: "32239774",
						env: "production",
						builtAt: 1743684427722,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, k.p)()
					}), Y();
					const ie = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => I(_e),
						tag: "hashScroll"
					}, {
						fn: le.Z,
						tag: "styles"
					}, {
						fn: Fe,
						tag: "mfePreviewData"
					}];
					for (const dt of ie)
						if (!await Kt(dt.fn, dt.tag)) return;
					let fe;
					if (!await Kt(async () => {
							fe = await ct()
						}, "bootstrap")) return;
					const Ae = (0, d.bh)(),
						be = ((R = fe) === null || R === void 0 ? void 0 : R.data) || {};
					Ae.dispatch((0, r.mW)("user", be == null ? void 0 : be.user));
					const Ze = (F = fe) === null || F === void 0 || (J = F.data) === null || J === void 0 ? void 0 : J.user;
					return t.g.bootstrap = fe, Ze && Ze.id && ue(Ze.id), !await Kt(st, "gates") || !await Kt(Pn, "tracking") ? void 0 : An()
				} catch (ie) {
					Jt(ie, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(z, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../react/app/redux/index.ts"),
				l = t("../react/common/selectors/userSelectors.ts"),
				c = t("../react/common/selectors/zoneSelectors.ts"),
				g = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/common/utils/isGuards.ts"),
				m = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = t.n(m);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(d) {
					for (var u = 1; u < arguments.length; u++) {
						var _ = arguments[u];
						for (var h in _) Object.prototype.hasOwnProperty.call(_, h) && (d[h] = _[h])
					}
					return d
				}, n.apply(this, arguments)
			}
			const a = d => {
				function u(_) {
					const h = (0, i.UM)(),
						I = (0, m.useHistory)(),
						O = (0, m.useLocation)(),
						C = (0, m.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						w = (0, i.p4)(l.PR) || null,
						E = (0, i.p4)(c.nA) || null,
						y = (0, i.p4)(g.uF),
						M = y ? y.account : null;
					if (!C) return null;
					const {
						accountId: S,
						app: B,
						tab: P
					} = C.params, b = C.params.zoneName && ((0, s.v5)(C.params.zoneName) || C.params.zoneName.indexOf(".") > 0) ? C.params.zoneName : void 0;
					return o().createElement(d, n({
						dispatch: h,
						history: I,
						location: O,
						match: C,
						user: w,
						membership: S ? y : null,
						account: S ? M : null,
						accountId: S || null,
						zone: b ? E : null,
						zoneName: b || null,
						app: b ? B : null,
						tab: b ? P : null
					}, _))
				}
				return u.displayName = `withEntities(${r(d)})`, u
			};

			function r(d) {
				return d.displayName || d.name || "Component"
			}
			v.Z = a
		},
		"../react/app/components/AccountHome/tracking.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				$$: function() {
					return E
				},
				CK: function() {
					return B
				},
				KV: function() {
					return M
				},
				OX: function() {
					return S
				},
				QV: function() {
					return w
				},
				Yt: function() {
					return O
				},
				bA: function() {
					return C
				},
				fu: function() {
					return b
				},
				gX: function() {
					return _
				},
				hh: function() {
					return P
				},
				o1: function() {
					return y
				},
				tw: function() {
					return h
				},
				xD: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				i = t("../react/utils/url.ts");
			const l = "projects table click",
				c = "click create application",
				g = "account home dev plat - product card click",
				s = "account home dev plat - empty state CTA click",
				m = "account home dev plat - view all projects click",
				f = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				a = "account home zero trust - analytics link click",
				r = "account home zero trust - product card click",
				d = "account home zero trust - plan pill click",
				u = "account home zero trust - plan fallback link click",
				_ = {
					SPARROW_PROJECTS_TABLE_CLICK: l,
					SPARROW_CREATE_PROJECT_CLICK: c,
					SPARROW_PRODUCT_CARD_CLICK: g,
					SPARROW_EMPTY_STATE_CTA_CLICK: s,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: m,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: f,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: a,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: r,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: d,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: u
				},
				h = D => {
					o().sendEvent(l, {
						component: D
					})
				},
				I = D => {
					o().sendEvent(l, {
						component: "menu",
						subcomponent: D
					})
				},
				O = () => {
					o().sendEvent(c, {
						category: "Projects Table"
					})
				},
				C = ({
					category: D,
					product: L
				}) => {
					o().sendEvent(g, {
						category: D,
						product: L
					})
				},
				w = () => {
					o().sendEvent(s)
				},
				E = () => {
					o().sendEvent(m)
				},
				y = D => {
					o().sendEvent(n, {
						category: D
					})
				},
				M = ({
					category: D,
					href: L
				}) => {
					o().sendEvent(f, {
						category: D,
						href: (0, i.cm)(L)
					})
				},
				S = ({
					category: D,
					href: L
				}) => {
					o().sendEvent(a, {
						category: D,
						href: (0, i.cm)(L)
					})
				},
				B = ({
					category: D,
					product: L,
					href: j
				}) => {
					o().sendEvent(r, {
						category: D,
						product: L,
						href: (0, i.cm)(j)
					})
				},
				P = ({
					plan: D
				}) => {
					o().sendEvent(d, {
						plan: D
					})
				},
				b = () => {
					o().sendEvent(u)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				BQ: function() {
					return m
				},
				Bh: function() {
					return g
				},
				CM: function() {
					return f
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
					return s
				},
				fj: function() {
					return a
				},
				r4: function() {
					return l
				},
				zq: function() {
					return i
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
				i = (0, e.R)(o.ADD_SITE, d => ({
					payload: d
				})),
				l = (0, e.R)(o.RESOLVING_START),
				c = (0, e.R)(o.RESOLVING_COMPLETE),
				g = (0, e.R)(o.SELECT_ZONE, d => ({
					payload: d
				})),
				s = (0, e.R)(o.SELECT_ACCOUNT, d => ({
					payload: d
				})),
				m = (0, e.R)(o.SELECT_PAGES_PROJECT, d => ({
					payload: d
				})),
				f = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, d => ({
					payload: d
				})),
				n = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, d => ({
					accountIds: d
				})),
				a = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				r = (0, e.R)(o.SELECT_WORKER, d => ({
					payload: d
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				BV: function() {
					return e
				},
				Dz: function() {
					return f
				},
				Fj: function() {
					return l
				},
				Kt: function() {
					return g
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
					return i
				},
				s$: function() {
					return s
				}
			});
			const e = "to",
				o = "_gl",
				i = "freeTrial",
				l = "deepLinkQueryParams",
				c = "resolvedDeepLinkQueryParams",
				g = "add",
				s = "multiSkuProducts",
				m = "/:account/billing/checkout",
				f = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				ZP: function() {
					return P
				},
				U: function() {
					return B.U
				},
				dd: function() {
					return B.dd
				},
				bk: function() {
					return g.bk
				},
				Bh: function() {
					return g.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../react/app/redux/index.ts"),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t("../react/app/components/DeepLink/utils.ts"),
				c = t("../react/utils/bootstrap.ts"),
				g = t("../react/app/components/DeepLink/actions.ts"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = t.n(s);

			function f(b) {
				for (var D = 1; D < arguments.length; D++) {
					var L = arguments[D] != null ? Object(arguments[D]) : {},
						j = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(L).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(L, Q).enumerable
					})), j.forEach(function(Q) {
						n(b, Q, L[Q])
					})
				}
				return b
			}

			function n(b, D, L) {
				return D = a(D), D in b ? Object.defineProperty(b, D, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = L, b
			}

			function a(b) {
				var D = r(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function r(b, D) {
				if (typeof b != "object" || b === null) return b;
				var L = b[Symbol.toPrimitive];
				if (L !== void 0) {
					var j = L.call(b, D || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}
			class d {
				constructor(D, L) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", j => {
						this.resolvers.set(j, {
							name: j,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", j => {
						const Q = this.resolvers.get(j);
						Q && (Q.endTime = Date.now(), this.resolvers.set(j, Q))
					}), n(this, "resolverCancel", j => {
						this.resolverDone(j), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", j => {
						const Q = "NO_ACTION",
							re = {
								actionType: Q,
								startTime: 0
							};
						return {
							start: (me = Q) => {
								const ce = this.resolvers.get(j);
								re.actionType = me, re.startTime = Date.now(), ce && ce.userActions.push(re)
							},
							finish: (me = Q) => {
								re.actionType = me, re.endTime = Date.now()
							},
							cancel: (me = Q) => {
								re.actionType = me, re.endTime = Date.now(), this.resolverCancel(j)
							}
						}
					}), this.deepLink = D, this.legacyDeepLink = L, this.resolvers = new Map
				}
				track(D) {
					try {
						if (this._done) return;
						this._done = !0;
						const L = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: u(this.startTime, this.endTime),
								totalCpuTime: u(this.startTime, this.endTime)
							},
							j = this.resolvers.size === 0 ? L : Array.from(this.resolvers.values()).reduce((Q, re) => {
								const me = u(re.startTime, re.endTime),
									ce = re.userActions.reduce((x, $) => {
										const U = u($.startTime, $.endTime);
										return {
											totalTime: x.totalTime + U,
											actions: x.actions.set($.actionType, U)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									le = me - ce.totalTime;
								return f({}, Q, {
									totalTime: Q.totalTime + me,
									totalUserActionsTime: Q.totalUserActionsTime + ce.totalTime,
									totalCpuTime: Q.totalCpuTime + le,
									[`${re.name}ResolverTotalTime`]: me,
									[`${re.name}ResolverTotalCpuTime`]: le,
									[`${re.name}ResolverTotalUserActionsTime`]: ce.totalTime
								}, Array.from(ce.actions.keys()).reduce((x, $) => f({}, x, {
									[`${re.name}Resolver/${$}`]: ce.actions.get($)
								}), {}))
							}, f({}, L, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						m().sendEvent(D, j)
					} catch (L) {
						console.error(L)
					}
				}
			}

			function u(b = Date.now(), D = Date.now()) {
				return (D - b) / 1e3
			}
			var _ = t("../react/app/components/DeepLink/constants.ts"),
				h = t("../react/common/hooks/useCachedState.ts"),
				I = t("../react/common/hooks/usePrevious.ts");

			function O(b) {
				for (var D = 1; D < arguments.length; D++) {
					var L = arguments[D] != null ? Object(arguments[D]) : {},
						j = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(L).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(L, Q).enumerable
					})), j.forEach(function(Q) {
						C(b, Q, L[Q])
					})
				}
				return b
			}

			function C(b, D, L) {
				return D = w(D), D in b ? Object.defineProperty(b, D, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = L, b
			}

			function w(b) {
				var D = E(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function E(b, D) {
				if (typeof b != "object" || b === null) return b;
				var L = b[Symbol.toPrimitive];
				if (L !== void 0) {
					var j = L.call(b, D || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}
			var M = ({
					children: b
				}) => {
					const D = (0, o.TZ)(),
						L = (0, i.useHistory)(),
						j = (0, I.Z)(L.location.pathname),
						[Q, re] = (0, e.useState)(!0),
						[me, ce] = (0, h.j)(void 0, {
							key: _.Fj
						}),
						[le, x] = (0, h.j)(void 0, {
							key: _.O5
						}),
						[$, U] = (0, h.j)(void 0, {
							key: _.s$
						}),
						T = (0, c.$8)();
					let k = new URLSearchParams(L.location.search);
					const Z = (0, l.mL)(L.location.pathname, k);
					let X = null,
						ae = null;
					if (k.has(_.Tc) && k.delete(_.Tc), k.get(_.BV)) X = k.get(_.BV), L.location.hash && (ae = L.location.hash);
					else if (me) {
						const N = new URLSearchParams(me);
						N.get(_.BV) && (X = N.get(_.BV), k = N)
					} else Z && (k.set(_.BV, Z), X = Z);
					if (X && _._h.test(X)) {
						const N = k.getAll(_.Kt),
							K = JSON.stringify(N);
						N.length && K !== $ && U(K), k.has(_.Tc) && k.delete(_.Tc), k.delete(_.Kt)
					}!T && me === void 0 && X && ce(k.toString());
					const q = async () => {
						try {
							if ((0, l.I3)(X) && T) {
								me && ce(void 0), D.dispatch((0, g.r4)()), re(!0), X && X !== le && x(X);
								const N = await (0, l.py)(X, re, D, L, j, new d(X, Z ? `${L.location.pathname}${L.location.search}` : void 0));
								k.delete(_.BV);
								const K = k.toString();
								L.replace(O({}, L.location, {
									pathname: N,
									search: K
								}, ae ? {
									hash: ae
								} : {})), D.dispatch((0, g.WF)())
							}
						} catch (N) {
							D.dispatch((0, g.WF)()), console.error(N)
						} finally {
							re(!1)
						}
					};
					return (0, e.useEffect)(() => {
						q()
					}, [L.location.pathname, L.location.search]), (Q || (0, l.I3)(X)) && T ? null : b
				},
				S = t("../react/app/components/DeepLink/reducer.ts"),
				B = t("../react/app/components/DeepLink/selectors.ts"),
				P = M
		},
		"../react/app/components/DeepLink/reducer.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				E: function() {
					return l
				},
				r: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				i = t("../react/app/components/DeepLink/actions.ts");
			const l = null,
				c = o().from({
					lastAction: l,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function g(s = c, m) {
				if (m.type === i.MF.RESOLVING_COMPLETE) return c;
				if (m.type === i.MF.RESOLVING_START) return s.set("isResolving", !0);
				if (s.isResolving) {
					if (m.type === i.MF.RESOLVING_COMPLETE) return s.set("isResolving", !1);
					if (m.type === i.MF.SET_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", m.accountIds);
					if (m.type === i.MF.DELETE_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", void 0);
					{
						let f = s;
						try {
							f = s.set("lastAction", m)
						} catch {
							f = s.set("lastAction", {
								type: m.type
							})
						}
						return f
					}
				} else return s
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return i
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
				i = l => l.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
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
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/components/DeepLink/reducer.ts"),
				i = t("../react/app/components/DeepLink/selectors.ts"),
				l = t("../react/app/components/DeepLink/constants.ts"),
				c = t("../react/common/validators/index.js"),
				g = t("../react/common/utils/isGuards.ts");
			const s = _ => (0, c.Lb)(_) && (_.split(".").length > 1 || (0, g.v5)(_)),
				m = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				f = _ => typeof _ == "string" && _.startsWith("/"),
				n = (_, h) => I => new Promise((O, C) => {
					h.start();
					const w = _.subscribe(() => {
						const E = (0, i.yI)(_.getState());
						E === o.E ? (h.cancel(), w(), C("DeepLink: waitForAction out of context.")) : I(E) && (h.finish(E.type), w(), O(E))
					})
				}),
				a = (_, h, I) => (O, C) => new Promise((w, E) => {
					I.start();
					const y = h.location.pathname;
					O = new URL(O, window.location.href).pathname, y !== O && (I.cancel(), E(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${O}", but on "${y}". You need to redirect to "${O}", and unblockRouter in your Resolver, before you use this function.`));
					const M = _.subscribe(() => {
						const S = (0, i.yI)(_.getState()),
							B = h.location.pathname,
							b = new URLSearchParams(h.location.search).get(l.BV);
						(B !== O || !!b) && (I.cancel(), M(), E(`DeepLink: waitForPageAction user navigated away from "${O}" to "${B}${b?h.location.search:""}"`)), S === o.E ? (I.cancel(), M(), E("DeepLink: waitForPageAction out of context.")) : C(S) && (I.finish(S.type), M(), w(S))
					})
				});

			function r(_) {
				const h = [],
					I = _.split("?")[0].split("/");
				for (let O of I) O.length !== 0 && (O.startsWith(":") ? h.push({
					value: O.substring(1),
					type: "dynamic"
				}) : h.push({
					value: O,
					type: "static"
				}));
				return h
			}
			async function d(_, h, I, O, C, w) {
				w.start();
				const E = r(_),
					M = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					S = {};
				let B = "";
				for (const [P, b] of E.entries())
					if (b.type === "static") B = [B, b.value].join("/");
					else if (b.type === "dynamic" && m.is(b.value) && b.value in M) {
					w.resolverStart(b.value);
					const D = await M[b.value]({
						deepLink: _,
						blockRouter: () => h(!0),
						unblockRouter: () => h(!1),
						routerHistory: O,
						resolvedValues: S,
						store: I,
						referringRoute: C,
						uri: {
							currentPartIdx: P,
							parts: E
						},
						waitForAction: n(I, w.createUserActionTracker(b.value)),
						waitForPageAction: a(I, O, w.createUserActionTracker(b.value))
					});
					w.resolverDone(b.value), B = [B, D].join("/"), S[b.value] = D
				} else throw w.cancel(), new Error(`DeepLink: Resolver with name '${b.value}' is not supported.`);
				return w.done(), B
			}

			function u(_, h) {
				const I = ":account",
					O = ":zone",
					C = h.get("zone");
				if (C) return h.delete("zone"), `/${I}/${O}/${C}`;
				const w = h.get("account");
				if (w) return h.delete("account"), `/${I}/${w}`;
				if (_ === "/overview") return `/${I}/${O}`;
				const E = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const y of E) {
					const M = y.length;
					if (_.startsWith(y) && (_.length === M || _[M] === "/")) return `/${I}/${O}${_}`
				}
				switch (_) {
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
		"../react/app/components/ErrorBoundary.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				l = t("../react/app/components/SomethingWrong.jsx"),
				c = t("../utils/sentry/lastSentEventId.ts"),
				g = t("../react/utils/zaraz.ts"),
				s = t("../react/utils/url.ts"),
				m = t("../node_modules/@cloudflare/elements/es/index.js"),
				f = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				a = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(a),
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
				})), o().createElement(f.zx, {
					mt: 3,
					type: "primary",
					iconType: "refresh",
					onClick: () => window.location.reload()
				}, o().createElement(n.Trans, {
					id: "common.refresh"
				})))
			}
			const h = ({
				sentryTag: I,
				children: O
			}) => o().createElement(i.SV, {
				beforeCapture: C => {
					g.tg === null || g.tg === void 0 || g.tg.track("page-error", {
						page: (0, s.Fl)(window.location.pathname)
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
					eventId: w
				}) => {
					var E;
					const y = c.e.getEventId() || w;
					return (C == null || (E = C.message) === null || E === void 0 ? void 0 : E.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), o().createElement(_, null)) : o().createElement(l.Z, {
						type: "page",
						error: C,
						eventId: y,
						sentryTag: I
					})
				}
			}, O)
		},
		"../react/app/components/Footer.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				Z: function() {
					return U
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = t.n(s),
				f = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				a = t("../react/utils/translator.tsx"),
				r = t("../../../../node_modules/moment/moment.js"),
				d = t.n(r);
			const u = () => {
					const T = d()().format("YYYY"),
						k = Z => {
							m().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: Z
							})
						};
					return o().createElement(_, {
						marginTop: "auto"
					}, o().createElement(h, null, o().createElement(I, null, o().createElement(O, null, "\xA9 ", T, " Cloudflare, Inc."), o().createElement(O, null, o().createElement(C, null, o().createElement(w, {
						showOnDeskTop: !1
					}, o().createElement(E, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => k("Support")
					}, o().createElement(a.cC, {
						id: "common.support"
					}))), o().createElement(w, null, o().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => k("Privacy Policy")
					}, o().createElement(a.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(w, null, o().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => k("Terms of Use")
					}, o().createElement(a.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(w, null, o().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => k("Cookie Preferences")
					}, o().createElement(a.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(w, null, o().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => k("Trademark")
					}, o().createElement(a.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(C, null, o().createElement(w, null, o().createElement(E, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => k("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(a.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				_ = (0, c.createComponent)(({
					theme: T,
					marginTop: k
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: k
				})),
				h = (0, c.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				I = (0, c.createComponent)(({
					theme: T
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${T.space[3]}px`
					}
				})),
				O = (0, c.createComponent)(({
					theme: T
				}) => ({
					width: "100%",
					color: T.colors.white,
					fontSize: T.fontSizes[1],
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
				C = (0, c.createComponent)(({
					theme: T
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: T.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				w = (0, c.createComponent)(({
					showOnDeskTop: T = !0,
					theme: k
				}) => ({
					color: k.colors.white,
					fontSize: k.fontSizes[1],
					height: "20px",
					display: T ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: k.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: k.space[3],
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
					theme: T
				}) => ({
					textDecoration: "none",
					color: T.colors.white,
					"&:hover": {
						color: T.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var y = u,
				M = t("../react/pages/welcome/routes.ts"),
				S = t("../react/utils/cookiePreferences.ts"),
				B = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				b = () => {
					const [T, k] = (0, e.useState)(!1), Z = (0, S.wV)(), X = () => {
						k(!0)
					}, ae = () => {
						k(!1)
					}, q = Z && Z === "US" ? (0, a.ZP)("footer.cpra_cta.privacy_choices") : (0, a.ZP)("footer.cpra_cta.cookie_preferences"), N = {
						background: "transparent",
						borderRadius: "none",
						color: T ? (0, g.Yc)() ? "#ee730a" : "#003681" : (0, g.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: T ? "underline" : "none",
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
						style: N,
						onMouseEnter: X,
						onMouseLeave: ae
					}, o().createElement(l.Ei, {
						height: 15,
						src: B,
						mr: 2,
						alt: q
					}), q)
				};

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(T) {
					for (var k = 1; k < arguments.length; k++) {
						var Z = arguments[k];
						for (var X in Z) Object.prototype.hasOwnProperty.call(Z, X) && (T[X] = Z[X])
					}
					return T
				}, D.apply(this, arguments)
			}

			function L(T, k) {
				if (T == null) return {};
				var Z = j(T, k),
					X, ae;
				if (Object.getOwnPropertySymbols) {
					var q = Object.getOwnPropertySymbols(T);
					for (ae = 0; ae < q.length; ae++) X = q[ae], !(k.indexOf(X) >= 0) && (!Object.prototype.propertyIsEnumerable.call(T, X) || (Z[X] = T[X]))
				}
				return Z
			}

			function j(T, k) {
				if (T == null) return {};
				var Z = {},
					X = Object.keys(T),
					ae, q;
				for (q = 0; q < X.length; q++) ae = X[q], !(k.indexOf(ae) >= 0) && (Z[ae] = T[ae]);
				return Z
			}
			const Q = (0, c.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,g.Yc)()?g.rS.colors.orange[6]:g.rS.colors.blue[4]}`
					}
				}), l.A),
				re = (0, c.createStyledComponent)(({
					theme: T
				}) => ({
					color: T.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, f.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: T.colors.gray[4]
					}
				}), l.A),
				me = T => {
					let {
						onClick: k
					} = T, Z = L(T, ["onClick"]);
					return React.createElement(Q, D({
						onClick: X => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: Z.href
							}), k && k(X)
						}
					}, Z))
				},
				ce = T => {
					let {
						children: k,
						target: Z,
						rel: X
					} = T, ae = L(T, ["children", "target", "rel"]);
					return o().createElement(re, D({
						target: Z || "_blank",
						rel: X || "noopener noreferrer"
					}, ae), k)
				},
				le = (0, c.createStyledComponent)(({
					theme: T
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
							fontSize: T.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: T.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), l.Ul),
				x = (0, c.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, f.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), l.ZC);
			var U = () => {
				const T = [M.d.root.pattern].some(Z => (0, i.matchPath)(location.pathname, {
					path: Z
				}));
				if ((0, n.PP)()) return o().createElement(y, null);
				if (T) return null;
				const k = new Date().getFullYear();
				return o().createElement(l.$_, {
					height: (0, f.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto"
				}, o().createElement(x, null, o().createElement(le, null, o().createElement(l.Li, null, o().createElement(ce, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("common.support"))), o().createElement(l.Li, null, o().createElement(ce, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(l.Dr, {
					textTransform: "capitalize"
				}, (0, a.ZP)("footer.system_status")))), o().createElement(l.Li, null, o().createElement(ce, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, a.ZP)("footer.careers"))), o().createElement(l.Li, null, o().createElement(ce, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos_reduced"))), o().createElement(l.Li, null, o().createElement(ce, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, a.ZP)("footer.security_issues"))), o().createElement(l.Li, null, o().createElement(ce, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))), o().createElement(l.Li, null, o().createElement(b, null)), o().createElement(l.Li, null, o().createElement(l.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", k, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(z, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../react/app/components/ErrorStatus.tsx"),
				l = t("../react/utils/translator.tsx");
			const c = g => o().createElement(i.Z, g, (0, l.ZP)("error.forbidden"));
			v.Z = c
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return h
				},
				Z: function() {
					return q
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../node_modules/@cloudflare/component-button/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				f = t.n(m),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				a = t("../react/common/components/AccessControl/index.js"),
				r = t("../react/common/components/ButtonWithDropdown.tsx"),
				d = t("../react/common/components/Dropdown/index.tsx"),
				u = t("../react/utils/translator.tsx"),
				_ = t("../react/common/hooks/useGate.ts");
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
					const N = (0, _.Z)("super-add-button-copy-change"),
						K = [{
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
							}, ...K];
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
							}, ...K];
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
							}, ...K];
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
							}, ...K];
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
							}, ...K];
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
				O = [{
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
			var C = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function w(N) {
				for (var K = 1; K < arguments.length; K++) {
					var V = arguments[K] != null ? Object(arguments[K]) : {},
						W = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(V).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(V, ee).enumerable
					})), W.forEach(function(ee) {
						E(N, ee, V[ee])
					})
				}
				return N
			}

			function E(N, K, V) {
				return K = y(K), K in N ? Object.defineProperty(N, K, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[K] = V, N
			}

			function y(N) {
				var K = M(N, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function M(N, K) {
				if (typeof N != "object" || N === null) return N;
				var V = N[Symbol.toPrimitive];
				if (V !== void 0) {
					var W = V.call(N, K || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(N)
			}

			function S() {
				return S = Object.assign ? Object.assign.bind() : function(N) {
					for (var K = 1; K < arguments.length; K++) {
						var V = arguments[K];
						for (var W in V) Object.prototype.hasOwnProperty.call(V, W) && (N[W] = V[W])
					}
					return N
				}, S.apply(this, arguments)
			}

			function B(N, K) {
				if (N == null) return {};
				var V = P(N, K),
					W, ee;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(N);
					for (ee = 0; ee < pe.length; ee++) W = pe[ee], !(K.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, W) || (V[W] = N[W]))
				}
				return V
			}

			function P(N, K) {
				if (N == null) return {};
				var V = {},
					W = Object.keys(N),
					ee, pe;
				for (pe = 0; pe < W.length; pe++) ee = W[pe], !(K.indexOf(ee) >= 0) && (V[ee] = N[ee]);
				return V
			}
			const b = N => {
					let {
						title: K,
						trackingEvent: V,
						icon: W,
						url: ee,
						description: pe,
						disabled: de
					} = N, _e = B(N, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(D, S({
						to: !de && ee || "#",
						"aria-disabled": de,
						onClick: () => {
							f().sendEvent(V, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, _e), o().createElement(l.ZC, {
						display: "flex"
					}, o().createElement(i.J, {
						type: W,
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
				D = (0, n.createStyledComponent)(({
					theme: N
				}) => {
					const K = {
						cursor: "pointer",
						backgroundColor: (0, g.Yc)() ? N.colors.gray[8] : N.colors.gray[9],
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
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': K,
						':focus-within:not([aria-disabled="true"])': w({}, K, {
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
				}, C.Link);
			var L = b;

			function j() {
				return j = Object.assign ? Object.assign.bind() : function(N) {
					for (var K = 1; K < arguments.length; K++) {
						var V = arguments[K];
						for (var W in V) Object.prototype.hasOwnProperty.call(V, W) && (N[W] = V[W])
					}
					return N
				}, j.apply(this, arguments)
			}

			function Q(N) {
				for (var K = 1; K < arguments.length; K++) {
					var V = arguments[K] != null ? Object(arguments[K]) : {},
						W = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(V).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(V, ee).enumerable
					})), W.forEach(function(ee) {
						re(N, ee, V[ee])
					})
				}
				return N
			}

			function re(N, K, V) {
				return K = me(K), K in N ? Object.defineProperty(N, K, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[K] = V, N
			}

			function me(N) {
				var K = ce(N, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function ce(N, K) {
				if (typeof N != "object" || N === null) return N;
				var V = N[Symbol.toPrimitive];
				if (V !== void 0) {
					var W = V.call(N, K || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(N)
			}

			function le(N, K) {
				if (N == null) return {};
				var V = x(N, K),
					W, ee;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(N);
					for (ee = 0; ee < pe.length; ee++) W = pe[ee], !(K.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, W) || (V[W] = N[W]))
				}
				return V
			}

			function x(N, K) {
				if (N == null) return {};
				var V = {},
					W = Object.keys(N),
					ee, pe;
				for (pe = 0; pe < W.length; pe++) ee = W[pe], !(K.indexOf(ee) >= 0) && (V[ee] = N[ee]);
				return V
			}
			const $ = "GLOBAL_ADD_DROPDOWN",
				U = (0, n.createStyledComponent)(({
					theme: N
				}) => ({
					"background-color": N.colors.blue[5]
				}), c.zx),
				T = ({
					disableProducts: N
				}) => {
					const K = I();
					return (0, e.useEffect)(() => (f().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						f().sendEvent("close add product dropdown", {
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
						const W = V || {},
							{
								disableOn: ee,
								permissionCheck: pe
							} = W,
							de = le(W, ["disableOn", "permissionCheck"]),
							_e = ee && N[ee],
							ye = Q({}, de, {
								disabled: _e
							});
						return pe ? o().createElement(a.Z, {
							key: V.title.id,
							edit: pe
						}, ({
							isEditable: Le
						}) => Le && o().createElement(L, ye)) : o().createElement(L, j({
							key: V.url
						}, ye))
					}))
				},
				k = ({
					disableProducts: N,
					topNavType: K
				}) => {
					const V = () => (0, s.tq)() || K === "icon-only" ? o().createElement(l.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, o().createElement(U, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : K === "text-icon" || K === "icon-only-with-add-button" ? o().createElement(c.zx, {
						type: "primary",
						mr: K === "text-icon" ? 2 : 3
					}, o().createElement(o().Fragment, null, o().createElement(i.J, {
						label: "plus",
						type: "plus"
					}), " ", o().createElement(u.cC, {
						id: "common.add"
					}))) : o().createElement(c.zx, {
						type: "primary",
						mr: 2
					}, o().createElement(u.cC, {
						id: "common.add"
					}), " ", o().createElement(i.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return o().createElement(Z, {
						role: "group",
						"data-testid": $
					}, o().createElement(d.Lt, {
						trigger: K === "baseline" ? o().createElement(X, null, o().createElement(i.J, {
							label: "plus",
							type: "plus"
						}), !(0, s.tq)() && o().createElement(o().Fragment, null, o().createElement(u.cC, {
							id: "common.add"
						}), " ", o().createElement(i.J, {
							label: "arrow",
							type: "caret-down"
						}))) : V(),
						menu: o().createElement(T, {
							disableProducts: N
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
					color: (0, g.Yc)() ? N.colors.gray[1] : N.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, g.Yc)() ? N.colors.gray[8] : N.colors.gray[9]
					}
				}), l.zx);
			var ae = k,
				q = ae
		},
		"../react/app/components/LoadingSuspense.tsx": function(z, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../react/utils/translator.tsx"),
				g = t("../react/app/components/ErrorStatus.tsx"),
				s = t("../react/common/components/EmptyPage.jsx"),
				m = t("../react/common/hooks/suspenseHelpers.ts");

			function f(r) {
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
					const u = f(r),
						_ = f(d);
					if ((0, m.nW)(), !u && !_) return o().createElement(s.Z, null);
					const h = _ ? o().createElement(c.cC, {
						id: "common.still_loading"
					}) : u ? o().createElement(c.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(g.Z, {
						size: 5
					}, o().createElement(l.ZC, {
						mr: 3
					}, o().createElement(i.g, {
						size: "2x"
					})), h)
				},
				a = ({
					children: r
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(n, null)
				}, r);
			v.Z = a
		},
		"../react/app/components/Persistence/api.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				C8: function() {
					return m
				},
				Mn: function() {
					return r
				},
				Sp: function() {
					return a
				},
				dr: function() {
					return c
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
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const i = "/persistence/user",
				l = async () => {
					try {
						return await (await e.get(i, {
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
				}, g = async (d, u) => {
					try {
						return await (await e.post(`${i}/favorites`, {
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
				}, s = async (d, u) => {
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
						return await (await e.post(i, {
							body: JSON.stringify({
								darkMode: d
							})
						})).body
					} catch (u) {
						console.error(u)
					}
				}, f = async d => {
					try {
						return await (await e.post(`${i}/recents`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						console.error(u)
					}
				}, n = async d => {
					try {
						return await (await e.post(`${i}/viewed-changes`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						throw console.error(u), u
					}
				}, a = async d => {
					try {
						return await (await e.post(i + "/flags", {
							body: JSON.stringify(d)
						})).body
					} catch (u) {
						throw console.error(u), u
					}
				}, r = async (d, u) => {
					try {
						return await (await e.post(`${i}/dismissed-tasks`, {
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
		"../react/app/components/Persistence/hooks.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				y: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../react/app/components/Persistence/index.tsx");
			const l = () => (0, e.useContext)(i.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				Wl: function() {
					return f
				},
				lp: function() {
					return I
				},
				Z_: function() {
					return C
				},
				r7: function() {
					return D
				},
				Tv: function() {
					return x
				},
				yZ: function() {
					return w.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../react/app/redux/index.ts"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(l),
				g = t("../react/utils/bootstrap.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/app/components/Persistence/api.ts");
			const f = 10;
			var n = t("../react/common/hooks/useActiveState.ts");

			function a($) {
				for (var U = 1; U < arguments.length; U++) {
					var T = arguments[U] != null ? Object(arguments[U]) : {},
						k = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(T).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(T, Z).enumerable
					})), k.forEach(function(Z) {
						r($, Z, T[Z])
					})
				}
				return $
			}

			function r($, U, T) {
				return U = d(U), U in $ ? Object.defineProperty($, U, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[U] = T, $
			}

			function d($) {
				var U = u($, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function u($, U) {
				if (typeof $ != "object" || $ === null) return $;
				var T = $[Symbol.toPrimitive];
				if (T !== void 0) {
					var k = T.call($, U || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)($)
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
				h = a({}, _, {
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
				I = (0, e.createContext)(h),
				O = I.Consumer,
				C = ({
					children: $,
					onDarkModeChangeCb: U
				}) => {
					const [T, k] = (0, e.useState)(_), [Z, X] = (0, e.useState)(h.isLoading), [ae, q] = (0, e.useState)(!1), N = (0, g.$8)(), K = (0, i.p4)(de => (0, s.wH)(de)), [, V] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						N ? (0, m.yl)().then(de => {
							if (de) {
								var _e;
								k(de), V(de == null || (_e = de.flags) === null || _e === void 0 ? void 0 : _e.hasEnabledSecurityNavigation), c().identify({
									hasEnabledSecurityNavigation: de.flags.hasEnabledSecurityNavigation
								}), U(de.darkMode)
							}
						}).finally(() => X(!1)) : X(!1)
					}, [N]);
					const W = (de, _e) => !!T.favorites.find(ye => ye.type === "zone" && ye.name === de && ye.accountId === _e),
						ee = f - T.favorites.length,
						pe = de => T.favorites.filter(ye => ye.type === "zone" && ye.accountId === de).length < f;
					return o().createElement(I.Provider, {
						value: a({}, T, {
							isLoading: Z,
							remainingStarSlots: ee,
							isUpdatingFlags: ae,
							actions: {
								canAccountStarZone: pe,
								isZoneStarred: W,
								starZone: async (de, _e) => {
									var ye;
									const Le = !W(de, _e),
										Ie = pe(_e);
									if (Le && !Ie) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Se = await (0, m.lt)(de, _e);
									c().sendEvent("click star zone", {
										isStarring: Le,
										totalStarredZones: Se.filter(ke => ke.accountId === _e && ke.type === "zone").length,
										totalZones: K == null || (ye = K.paginationData) === null || ye === void 0 ? void 0 : ye.info.total_count
									}), k(a({}, T, {
										favorites: Se
									}))
								},
								toggleSecurityNavigation: async de => {
									q(!0), await (0, m.Sp)({
										hasEnabledSecurityNavigation: de
									}), c().identify({
										hasEnabledSecurityNavigation: de
									}), q(!1), V(de), k(a({}, T, {
										flags: {
											hasEnabledSecurityNavigation: de
										}
									}))
								},
								setDarkMode: async de => {
									const _e = await (0, m.C8)(de);
									k(_e), U(_e.darkMode)
								},
								logRouteVisited: async de => {
									var _e;
									const ye = await (0, m.n)(de);
									k((_e = ye) !== null && _e !== void 0 ? _e : a({}, T))
								},
								viewChange: async de => {
									const _e = await (0, m.m6)(de);
									k(a({}, T, {
										viewedChanges: _e
									}))
								},
								dismissTask: async (de, _e) => {
									const ye = await (0, m.Mn)(de, _e);
									k(a({}, T, {
										dismissedTasks: ye
									}))
								}
							}
						})
					}, $)
				};
			var w = t("../react/app/components/Persistence/hooks.ts"),
				E = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				y = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function M() {
				return M = Object.assign ? Object.assign.bind() : function($) {
					for (var U = 1; U < arguments.length; U++) {
						var T = arguments[U];
						for (var k in T) Object.prototype.hasOwnProperty.call(T, k) && ($[k] = T[k])
					}
					return $
				}, M.apply(this, arguments)
			}

			function S($, U) {
				if ($ == null) return {};
				var T = B($, U),
					k, Z;
				if (Object.getOwnPropertySymbols) {
					var X = Object.getOwnPropertySymbols($);
					for (Z = 0; Z < X.length; Z++) k = X[Z], !(U.indexOf(k) >= 0) && (!Object.prototype.propertyIsEnumerable.call($, k) || (T[k] = $[k]))
				}
				return T
			}

			function B($, U) {
				if ($ == null) return {};
				var T = {},
					k = Object.keys($),
					Z, X;
				for (X = 0; X < k.length; X++) Z = k[X], !(U.indexOf(Z) >= 0) && (T[Z] = $[Z]);
				return T
			}
			const P = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var D = $ => {
					let {
						isStarred: U,
						size: T = 16
					} = $, k = S($, ["isStarred", "size"]);
					const Z = P[(0, E.Yc)() ? "dark" : "light"];
					return o().createElement(y.J, M({
						type: U ? "star" : "star-outline",
						color: U ? Z.gold : Z.gray,
						size: T
					}, k))
				},
				L = t("../node_modules/@cloudflare/elements/es/index.js");

			function j($) {
				for (var U = 1; U < arguments.length; U++) {
					var T = arguments[U] != null ? Object(arguments[U]) : {},
						k = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(T).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(T, Z).enumerable
					})), k.forEach(function(Z) {
						Q($, Z, T[Z])
					})
				}
				return $
			}

			function Q($, U, T) {
				return U = re(U), U in $ ? Object.defineProperty($, U, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[U] = T, $
			}

			function re($) {
				var U = me($, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function me($, U) {
				if (typeof $ != "object" || $ === null) return $;
				var T = $[Symbol.toPrimitive];
				if (T !== void 0) {
					var k = T.call($, U || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)($)
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
			var x = (0, e.forwardRef)(({
				featurePreview: $ = !1,
				isStarred: U,
				onClickFn: T,
				isDisabled: k,
				testId: Z,
				buttonText: X,
				size: ae = "large",
				variant: q = "pill"
			}, N) => {
				const [K, V] = (0, e.useState)(!1), W = ce[(0, E.Yc)() ? "dark" : "light"][U && !$ ? "active" : "default"], ee = j({}, ae === "large" && {
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
				}), pe = {
					pill: "50vh",
					button: 4
				};
				return o().createElement(L.zx, {
					onMouseEnter: () => V(!0),
					onMouseLeave: () => V(!1),
					innerRef: N,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: ee.paddingRight,
					gap: 1,
					pl: ee.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: pe[q],
					border: "1px solid",
					cursor: $ || k ? "default" : "pointer",
					backgroundColor: K ? W.bgHover : W.bg,
					color: W.text,
					borderColor: W.border,
					onClick: T,
					opacity: k ? .5 : 1,
					disabled: k,
					fontSize: ee.fontSize,
					height: ee.height,
					"data-testid": Z
				}, o().createElement(D, {
					isStarred: $ ? !1 : U,
					size: ee.starIconSize
				}), X)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				$n: function() {
					return d
				},
				IU: function() {
					return _
				},
				Wq: function() {
					return M
				},
				dL: function() {
					return h
				},
				fO: function() {
					return y
				},
				gw: function() {
					return B
				},
				hv: function() {
					return u
				},
				iY: function() {
					return a
				},
				jq: function() {
					return P
				},
				o_: function() {
					return C
				},
				us: function() {
					return E
				},
				wB: function() {
					return r
				},
				zJ: function() {
					return w
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				l = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/utils/zoneLevelAccess.ts"),
				g = t("../react/pages/stream/selectors.ts"),
				s = t("../react/pages/home/domain-registration/selectors.ts"),
				m = t("../react/pages/images/selectors.ts"),
				f = t("../react/pages/r2/selectors.ts");
			const n = b => !!(0, c.b)(b),
				a = b => n(b) ? (0, e.hT)(b) : !0,
				r = (b, D, L, j = "read") => {
					const Q = (0, i.nA)(b);
					return n(b) ? (0, e.WL)(b, (0, e.W9)(L, e.ZZ[j]), (0, e.j)(Q == null ? void 0 : Q.id)) : (0, l.Yj)(b)(D)[j]
				},
				d = (b, D, L, j = "read") => {
					const Q = (0, i.nA)(b),
						re = e.zs.includes(L);
					return n(b) ? (0, e.WL)(b, re ? L : (0, e.my)(L, e.ZZ[j === "edit" ? "update" : j]), (0, e.j)(Q == null ? void 0 : Q.id)) : (0, l.Yj)(b)(D)[j === "update" ? "edit" : j]
				},
				u = b => !!(0, g._Q)(b),
				_ = b => (0, m.pT)(b),
				h = b => (0, m.pT)(b) && (0, m.GH)(b),
				I = b => sourcingKitEnabledSelector(b),
				O = b => !!r2EnabledSelector(b),
				C = b => (0, f.Mv)(b),
				w = b => (0, o.$f)(b, "rulesets.magic_transit_allowed"),
				E = b => (0, o.$f)(b, "flowtrackd.magic_custom_config_allowed"),
				y = b => (0, o.$f)(b, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				M = b => (0, l.Le)(b, "ddos_protection", "l4_rulesets"),
				S = b => hasAccountEntitlements(b, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				B = b => (0, s.HO)(b),
				P = b => !(0, o.yD)(b) && !!d(b, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function(z, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(i),
				c = t("../../../../node_modules/prop-types/index.js"),
				g = t.n(c),
				s = t("webpack/sharing/consume/default/react-redux/react-redux"),
				m = t.n(s),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(f),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				r = t("../node_modules/@cloudflare/component-button/es/index.js"),
				d = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				u = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				_ = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				h = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				I = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				O = t.n(I),
				C = t("../react/common/actions/membershipActions.ts"),
				w = t("../react/utils/url.ts"),
				E = t("../react/app/components/Footer.tsx");

			function y(le) {
				for (var x = 1; x < arguments.length; x++) {
					var $ = arguments[x] != null ? Object(arguments[x]) : {},
						U = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols($).filter(function(T) {
						return Object.getOwnPropertyDescriptor($, T).enumerable
					})), U.forEach(function(T) {
						M(le, T, $[T])
					})
				}
				return le
			}

			function M(le, x, $) {
				return x = S(x), x in le ? Object.defineProperty(le, x, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : le[x] = $, le
			}

			function S(le) {
				var x = B(le, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function B(le, x) {
				if (typeof le != "object" || le === null) return le;
				var $ = le[Symbol.toPrimitive];
				if ($ !== void 0) {
					var U = $.call(le, x || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(le)
			}
			const P = (0, a.createComponent)(({
					type: le
				}) => ({
					height: le !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				b = (0, a.createComponent)(({
					theme: le,
					margin: x,
					size: $ = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: le.colors.gray[3],
					height: x ? "auto" : "100%",
					padding: x ? 0 : le.space[$ > 1 ? $ - 2 : 0],
					margin: x,
					justifyContent: "center",
					alignItems: "center"
				})),
				D = (0, a.createComponent)(() => ({
					textAlign: "left"
				})),
				L = (0, a.createComponent)(() => ({
					textAlign: "right"
				})),
				j = (0, a.createComponent)(({
					theme: le
				}) => ({
					fontSize: le.fontSizes[6]
				})),
				Q = (0, a.createComponent)(({
					theme: le
				}) => ({
					fontSize: le.fontSizes[4]
				})),
				re = (0, a.createComponent)(({
					theme: le
				}) => ({
					fontSize: le.fontSizes[3]
				})),
				me = (0, a.createComponent)(({
					theme: le
				}) => ({
					width: "100%",
					height: 125,
					marginTop: le.space[4],
					padding: le.space[2]
				}), "textarea");
			class ce extends o().Component {
				constructor(...x) {
					super(...x);
					M(this, "state", {
						value: "",
						submitted: !1
					}), M(this, "handleTextareaChange", $ => {
						this.setState({
							value: $.target.value
						})
					}), M(this, "sendErrToSentry10", async () => {
						try {
							var $, U, T, k;
							const Z = (($ = window) === null || $ === void 0 || (U = $.bootstrap) === null || U === void 0 || (T = U.data) === null || T === void 0 || (k = T.user) === null || k === void 0 ? void 0 : k.id) || "Unknown",
								X = this.props.eventId || d.eW(),
								ae = {
									name: Z,
									email: `${Z}@userid.com`,
									comments: this.state.value,
									eventId: X,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: y({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(ae)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (Z) {
							console.error(Z)
						}
					}), M(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), M(this, "renderContent", $ => o().createElement(f.I18n, null, U => o().createElement(P, {
						type: $
					}, o().createElement(b, null, o().createElement(D, null, o().createElement(j, null, U.t("error.internal_issues")), o().createElement(Q, null, U.t("error.help_us")), o().createElement(me, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: T => this.handleTextareaChange(T),
						disabled: this.state.submitted,
						placeholder: U.t("error.give_feedback")
					}), o().createElement(L, null, !this.state.submitted && o().createElement(r.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, U.t("common.submit")), this.state.submitted && o().createElement(re, null, U.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: x,
						sentryTag: $,
						membershipsList: U
					} = this.props;
					console.error(`SomethingWrong: ${x}`);
					let T = "";
					const k = (0, w.e1)();
					if (k) {
						var Z;
						const ae = await U({
								parameters: {
									status: "accepted"
								}
							}),
							q = ae == null || (Z = ae.find(N => N.id === k)) === null || Z === void 0 ? void 0 : Z.roles;
						q && q.length && (T = q.join(", "))
					}
					const X = `ErrorBoundary - ${x}`;
					u.Tb(X, {
						tags: {
							errorBoundary: $,
							normalizedPath: (0, w.Fl)(window.location.pathname),
							roles: T.length ? T : void 0
						}
					}), O().sendEvent("something wrong", {
						error: x,
						roles: T.length ? T : void 0
					})
				}
				render() {
					const {
						type: x
					} = this.props;
					return x === "fullscreen" ? o().createElement("div", null, o().createElement(_.h4, null, o().createElement(i.Link, {
						to: "/"
					}, o().createElement(h.TR, null))), this.renderContent(x), o().createElement(E.Z, null)) : this.renderContent(x)
				}
			}
			ce.propTypes = {
				type: g().oneOf(["fullscreen", "page"]),
				error: g().oneOfType([g().string, g().object]),
				eventId: g().string,
				sentryTag: g().string,
				membershipsList: g().func
			}, v.Z = (0, s.connect)(() => ({}), {
				membershipsList: C.YT
			})(ce)
		},
		"../react/app/providers/storeContainer.js": function(z, v, t) {
			"use strict";
			t.d(v, {
				bh: function() {
					return L
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				o = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				i = t.n(o),
				l = t("../../../../node_modules/redux-thunk/es/index.js"),
				c = t("../../../../node_modules/redux-persist/es/index.js"),
				g = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				s = t("../react/app/rootReducer.js"),
				m = t("../react/app/redux/normalizer.js"),
				f = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				a = t("../react/app/reducerRegistry.js"),
				r = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				d = t("../react/common/sagas/index.js"),
				u = t("../react/app/redux/processActionMiddleware.js"),
				_ = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				h = t("../../../../node_modules/is-promise/index.js"),
				I = t.n(h);

			function O(j) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var re = arguments[Q] != null ? Object(arguments[Q]) : {},
						me = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && me.push.apply(me, Object.getOwnPropertySymbols(re).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(re, ce).enumerable
					})), me.forEach(function(ce) {
						C(j, ce, re[ce])
					})
				}
				return j
			}

			function C(j, Q, re) {
				return Q = w(Q), Q in j ? Object.defineProperty(j, Q, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[Q] = re, j
			}

			function w(j) {
				var Q = E(j, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function E(j, Q) {
				if (typeof j != "object" || j === null) return j;
				var re = j[Symbol.toPrimitive];
				if (re !== void 0) {
					var me = re.call(j, Q || "default");
					if (typeof me != "object") return me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(j)
			}
			const y = {
					key: "cf-redux-store",
					storage: g.Z,
					whitelist: ["accountAccess", "invite"]
				},
				M = (0, r.ZP)(),
				B = [({
					dispatch: j
				}) => Q => re => I()(re) ? re.then(me => j(me)) : Q(re), M, l.Z, u.Z, m.qR],
				P = j => (0, c.Wq)(y, O({}, s.Z, j));

			function b() {
				const j = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					re = e.compose((0, e.applyMiddleware)(...B), f.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					me = {},
					ce = (0, e.createStore)(P(a.Z.getReducers()), me, re);
				M.run(d.Z), (0, c.p5)(ce);
				const x = (t.g.bootstrap || {}).data || {};
				return ce.dispatch((0, _.mW)("user", x.user)), ce
			}
			let D;
			a.Z.setChangeListener(j => {
				var Q;
				D && ((Q = D) === null || Q === void 0 ? void 0 : Q.replaceReducer) && (D.replaceReducer(P(j)), (0, c.p5)(D))
			});

			function L() {
				return D || (D = b()), D
			}
		},
		"../react/app/redux/index.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				TZ: function() {
					return i
				},
				UM: function() {
					return c
				},
				ZS: function() {
					return l
				},
				p4: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e);
			const i = () => (0, e.useStore)(),
				l = () => i().getState(),
				c = () => (0, e.useDispatch)(),
				g = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(z, v, t) {
			"use strict";
			t.d(v, {
				$J: function() {
					return r
				},
				Oy: function() {
					return a
				},
				SC: function() {
					return f
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
				i = t.n(o);

			function l(u) {
				for (var _ = 1; _ < arguments.length; _++) {
					var h = arguments[_] != null ? Object(arguments[_]) : {},
						I = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(h).filter(function(O) {
						return Object.getOwnPropertyDescriptor(h, O).enumerable
					})), I.forEach(function(O) {
						c(u, O, h[O])
					})
				}
				return u
			}

			function c(u, _, h) {
				return _ = g(_), _ in u ? Object.defineProperty(u, _, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[_] = h, u
			}

			function g(u) {
				var _ = s(u, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function s(u, _) {
				if (typeof u != "object" || u === null) return u;
				var h = u[Symbol.toPrimitive];
				if (h !== void 0) {
					var I = h.call(u, _ || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(u)
			}
			const m = l({}, o),
				f = (u, _, h, I = {}) => {
					const O = u === "delete" ? "del" : u.toLowerCase();
					return h && O !== "del" && (I.body = h), m[O](_, I)
				},
				n = (u, _) => (u.meta.params = _, u),
				a = (u, _, h, I, {
					body: O = {}
				}) => {
					const {
						result: C,
						messages: w,
						result_info: E
					} = O, y = Object.values(_);
					if (u.meta.method === "delete") {
						const M = y[y.length - 1];
						u.meta.id = typeof M == "object" ? M.id : M
					}
					return u.payload = C, w && (u.meta.messages = w), y.length && (u.meta.params = _), E && (u.meta.paginationData = {
						info: E,
						actionParameters: y,
						options: h[0],
						insertionOffset: 0
					}), u
				},
				r = (u, _, h, I, O) => (u.payload = O && O.body && O.body.errors, u.meta.messages = O && O.body && O.body.messages, u.meta.params = _, u.apiError = O, u);

			function d(u, _, h, I) {
				const O = (0, e.RM)(u, _, h, I).apiFetch(f).on("start", n).on("success", a).on("error", r),
					C = O.mock;
				return O.mock = w => (C((...E) => {
					const y = w(...E);
					return y && typeof y == "object" && "result" in y ? y : {
						result: y
					}
				}), O), O
			}
		},
		"../react/app/redux/normalizer.js": function(z, v, t) {
			"use strict";
			t.d(v, {
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
					return m
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				o = t("../react/pages/workers/entityTypes.ts"),
				i = t("../react/pages/email/types.ts"),
				l = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				c = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				g = t.n(c);
			const s = c.static.from([{
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
				m = a => a.entities,
				f = (...a) => (0, l.P1)(s, m, ...a),
				n = (0, l.QB)(s)
		},
		"../react/app/redux/utils.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				F: function() {
					return i
				},
				_: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const o = l => (c, g, s) => (0, e.SC)(c, g, s, {
					hideErrorAlert: !0
				}).catch(l),
				i = l => c => {
					if (c.status === l) return c;
					throw c
				}
		},
		"../react/common/actionTypes.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Cm: function() {
					return g
				},
				Cz: function() {
					return o
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
					return i
				},
				Yc: function() {
					return a
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
				i = "MODAL_OPEN",
				l = "MODAL_CLOSE",
				c = "TOGGLE_ON",
				g = "TOGGLE_OFF",
				s = "SET_ACTIVE",
				m = "CLEAR_ACTIVE",
				f = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let a = function(r) {
				return r.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", r.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", r.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", r.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", r.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", r.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", r.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", r.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", r.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", r
			}({})
		},
		"../react/common/actions/activeActions.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				I: function() {
					return o
				},
				n: function() {
					return i
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = (l, c) => ({
					type: e.HI,
					activeKey: l,
					activeValue: c
				}),
				i = l => ({
					type: e.s1,
					activeKey: l
				})
		},
		"../react/common/actions/membershipActions.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				AX: function() {
					return r
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
				o = t("../react/common/constants/index.ts");

			function i(d) {
				for (var u = 1; u < arguments.length; u++) {
					var _ = arguments[u] != null ? Object(arguments[u]) : {},
						h = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(_).filter(function(I) {
						return Object.getOwnPropertyDescriptor(_, I).enumerable
					})), h.forEach(function(I) {
						l(d, I, _[I])
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
				var u = g(d, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function g(d, u) {
				if (typeof d != "object" || d === null) return d;
				var _ = d[Symbol.toPrimitive];
				if (_ !== void 0) {
					var h = _.call(d, u || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(d)
			}
			const s = d => {
					const u = d.payload.map(_ => i({}, _, {
						membershipId: _.id,
						id: _.account.id
					}));
					return i({}, d, {
						payload: u
					})
				},
				m = d => {
					const u = s(d);
					return Array.isArray(u.payload) ? i({}, d, {
						payload: u.payload[0]
					}) : i({}, d, {
						payload: null
					})
				},
				f = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", s),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				a = (...d) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: d
				}),
				r = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", m)
		},
		"../react/common/actions/modalActions.ts": function(z, v, t) {
			"use strict";
			t.r(v), t.d(v, {
				closeModal: function() {
					return l
				},
				openModal: function() {
					return i
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function i(c, g, s = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: c,
						props: g
					},
					options: s
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
		"../react/common/actions/notificationsActions.ts": function(z, v, t) {
			"use strict";
			t.r(v), t.d(v, {
				add: function() {
					return c
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

			function i(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let l = 0;

			function c(n, a, r = {}) {
				return r = r || {},
					function(d) {
						let u = l++,
							_ = {
								id: u,
								type: n,
								message: a,
								delay: r.delay,
								persist: r.persist === void 0 ? !1 : r.persist,
								closable: r.closable === void 0 ? !0 : r.closable,
								onClose() {
									d(i(u)), r.onClose && r.onClose.apply(null, arguments)
								}
							};
						d(o(_))
					}
			}

			function g(n, a) {
				return c("success", n, a)
			}

			function s(n, a) {
				return c("info", n, a)
			}

			function m(n, a) {
				return c("warning", n, a)
			}

			function f(n, a) {
				return c("error", n, a)
			}
		},
		"../react/common/actions/userActions.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				BT: function() {
					return s
				},
				Ut: function() {
					return I
				},
				V_: function() {
					return O
				},
				Y9: function() {
					return _
				},
				Z0: function() {
					return w
				},
				mp: function() {
					return h
				},
				r3: function() {
					return C
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/app/redux/utils.ts");

			function i(E) {
				for (var y = 1; y < arguments.length; y++) {
					var M = arguments[y] != null ? Object(arguments[y]) : {},
						S = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(M).filter(function(B) {
						return Object.getOwnPropertyDescriptor(M, B).enumerable
					})), S.forEach(function(B) {
						l(E, B, M[B])
					})
				}
				return E
			}

			function l(E, y, M) {
				return y = c(y), y in E ? Object.defineProperty(E, y, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[y] = M, E
			}

			function c(E) {
				var y = g(E, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function g(E, y) {
				if (typeof E != "object" || E === null) return E;
				var M = E[Symbol.toPrimitive];
				if (M !== void 0) {
					var S = M.call(E, y || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(E)
			}
			const s = (0, e.C)("user").get`/user`,
				m = (0, e.C)("user").patch`/user`,
				f = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				a = (0, e.C)("user").post`/user/two_factor_authentication`,
				r = (0, e.C)("user").put`/user/two_factor_authentication`,
				d = (0, e.C)("user").delete`/user/two_factor_authentication`,
				u = (0, e.C)("user").put`/user/email`;

			function _(...E) {
				return u(...E)
			}
			const h = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				I = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(E => i({}, E, {
					body: i({}, E.body, {
						result: {}
					})
				}))),
				O = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				C = (0, e.C)("userDetails").get`/user/details`,
				w = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(z, v, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/utils/zoneLevelAccess.ts");
			const i = ({
				legacyPermission: l,
				canAccess: c,
				children: g,
				render: s
			}) => {
				const m = !!(0, o.P)();
				let f;
				typeof c == "boolean" && c !== void 0 && m ? f = {
					read: c,
					list: c,
					create: c,
					update: c,
					delete: c,
					sign: c
				} : f = (0, e.Z)(l);
				const n = s || g;
				return n ? n(f) : null
			};
			v.Z = i
		},
		"../react/common/components/AccessCheck/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				E1: function() {
					return o
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
				i = "com.cloudflare.edge.",
				l = "com.cloudflare.api.account.zone.",
				c = ["com.cloudflare.api.app.manage"];
			let g = function(r) {
				return r.read = "read", r.list = "list", r.create = "create", r.update = "update", r.delete = "delete", r.sign = "sign", r.refresh = "refresh", r
			}({});
			const s = (r, d) => `${o}${r?r+".":""}${d}`,
				m = (r, d) => `${l}${r?r+".":""}${d}`,
				f = (r, d) => `${i}${r}.${d}`,
				n = (r = "") => `${o}${r}`,
				a = (r = "") => `${l}${r}`
		},
		"../react/common/components/AccessCheck/index.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				L8: function() {
					return l.L8
				},
				W9: function() {
					return l.W9
				},
				WL: function() {
					return i.WL
				},
				ZP: function() {
					return o.Z
				},
				ZZ: function() {
					return l.ZZ
				},
				hT: function() {
					return i.hT
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
				i = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				l = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(z, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../react/app/redux/index.ts"),
				l = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/pages/zone-versioning/selectors.ts");

			function g(s) {
				const {
					read: m,
					edit: f
				} = (0, i.p4)(l.Yj)(s);
				let n = f;
				if (s != "zone_versioning") {
					const r = (0, i.p4)(c.G);
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
			v.Z = g
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				WL: function() {
					return r
				},
				hT: function() {
					return _
				},
				kd: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/pages/home/members/utils.ts"),
				l = t("../react/common/components/AccessCheck/constants.ts"),
				c = t("../react/pages/zone-versioning/selectors.ts");
			const g = {
					allow: "allow",
					deny: "deny"
				},
				s = 0,
				m = 1,
				f = 2,
				n = 3;

			function a(y, M, S, B) {
				let P = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					b;
				for (b in P) P[b] = r(y, `${M}.${b}`, S, B);
				return P
			}

			function r(y, M, S, B) {
				var P;
				if (d(M) && !u(M)) {
					const Q = (0, c.G)(y);
					if (Q == null ? void 0 : Q.isLocked) return !1
				}
				const b = (P = (0, o.D0)(y)) === null || P === void 0 ? void 0 : P.id,
					D = b ? [`com.cloudflare.api.account.${b}`] : void 0,
					L = (0, i.vq)(b);
				return !!h(y, L, M, S, B || D)
			}

			function d(y) {
				return ![l.ZZ.read, l.ZZ.list].some(M => y.endsWith(M))
			}

			function u(y) {
				return y.includes("zone.versioning")
			}

			function _(y) {
				const M = (0, o.Ko)(y);
				let S = !1;
				return M == null || M.forEach(B => {
					B.access === g.allow && B.permission_groups.forEach(P => {
						var b;
						(P == null || (b = P.meta) === null || b === void 0 ? void 0 : b.scopes) === l.u1 && (S = !0)
					})
				}), S
			}

			function h(y, M, S, B, P) {
				const b = (0, o.Ko)(y),
					D = {};
				b == null || b.forEach(re => {
					var me;
					const ce = re.access;
					let le = s;
					if (S && re.permission_groups.forEach(x => {
							var $, U;
							M == null || ($ = M.find(T => T.id === x.id)) === null || $ === void 0 || (U = $.permissions) === null || U === void 0 || U.forEach(T => {
								le = Math.max(le, I(T, S))
							})
						}), le !== s && !!B) {
						let x = s;
						re.resource_groups.forEach($ => {
							x = Math.max(x, C($.scope, B, P))
						}), le = x === s ? x : le + x
					}(D == null || (me = D[ce]) === null || me === void 0 ? void 0 : me[le]) || (0, e.Z)(D, [ce, le], []), D[ce][le].push(re)
				});
				const L = D[g.allow] && Object.keys(D[g.allow]).map(re => parseInt(re)),
					j = D[g.deny] && Object.keys(D[g.deny]).map(re => parseInt(re)),
					Q = Math.max.apply(Math, L);
				return Q === s || Math.max.apply(Math, j) >= Q ? null : D[g.allow][Q]
			}

			function I(y, M) {
				if (y.key === M || O(y.key, M)) return n;
				for (const S of (y == null ? void 0 : y.implies) || []) {
					let B = I(S, M);
					if (B > s) return B
				}
				return s
			}

			function O(y, M) {
				const S = M == null ? void 0 : M.lastIndexOf(".");
				return S === -1 ? !1 : (M == null ? void 0 : M.substring(0, S)) + ".*" === y
			}

			function C(y, M, S) {
				var B;
				let P = s;
				if (y == null || (B = y.objects) === null || B === void 0 || B.forEach(b => {
						P = Math.max(P, E(b, M))
					}), P === s) return P;
				if (y.key !== "*") switch (!0) {
					case w(y.key, S) > s:
					case (!(S == null ? void 0 : S.length) && P === n):
						break;
					case (P === m && w(y.key, [M]) > s):
						P = w(y.key, [M]);
						break;
					default:
						return s
				}
				for (const b of y.subset_of || [])
					if (w(b.key, S) === s) return s;
				return P
			}

			function w(y, M = []) {
				for (const S of M || []) {
					if (y === S) return n;
					if (O(y, S)) return f
				}
				return s
			}

			function E(y, M) {
				return y.key === M ? n : y.key === "*" ? m : O(y.key, M) ? f : s
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(z, v, t) {
			"use strict";
			t.d(v, {
				a: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				i = t("../react/common/selectors/accountSelectors.ts");
			const l = g => {
					if (typeof g != "string") throw new Error("invalid Param Type provided");
					const s = g.slice(1).split(":");
					if (s.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: s[0],
						value: s[1]
					}
				},
				c = (g, s) => {
					const {
						resourceId: m,
						accountId: f,
						legacyPermission: n
					} = s;
					let {
						read: a,
						edit: r
					} = s;
					const d = {};
					n && (r = `#${n}:edit`, a = `#${n}:read`);
					const u = m || f;
					if (a) {
						const _ = Array.isArray(a) ? a : [a];
						d.isReadable = _.some(h => {
							const I = l(h);
							return (0, i.DT)(g, u, O => !!(O[I.key] && O[I.key][I.value]))
						})
					}
					if (r) {
						const _ = Array.isArray(r) ? r : [r];
						d.isEditable = _.some(h => {
							const I = l(h);
							return (0, i.DT)(g, u, O => !!(O[I.key] && O[I.key][I.value]))
						})
					}
					return d
				};
			v.Z = (0, e.connect)(c)
		},
		"../react/common/components/AccessControl/index.js": function(z, v, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				o = t.n(e),
				i = t("../react/app/HoCs/withEntities.tsx"),
				l = t("../react/common/components/AccessControl/SAAConnect.js");

			function c(a) {
				for (var r = 1; r < arguments.length; r++) {
					var d = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(d).filter(function(_) {
						return Object.getOwnPropertyDescriptor(d, _).enumerable
					})), u.forEach(function(_) {
						g(a, _, d[_])
					})
				}
				return a
			}

			function g(a, r, d) {
				return r = s(r), r in a ? Object.defineProperty(a, r, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[r] = d, a
			}

			function s(a) {
				var r = m(a, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(a, r) {
				if (typeof a != "object" || a === null) return a;
				var d = a[Symbol.toPrimitive];
				if (d !== void 0) {
					var u = d.call(a, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(a)
			}

			function f(a) {
				const d = ["isReadable", "isEditable"].reduce((u, _) => a.hasOwnProperty(_) ? c({}, u, {
					[_]: a[_]
				}) : u, {});
				return a.children(d)
			}
			f.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const n = (0, i.Z)((0, l.Z)(f));
			n.displayName = "AccessControl", v.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				PP: function() {
					return a
				},
				RJ: function() {
					return s
				},
				tz: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				l = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				c = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const g = () => m.test(window.location.pathname) || i.E.has(l.Qq),
				s = () => i.E.get(l.Qq),
				m = /^\/login\/apple(\/)?/,
				n = [m, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				a = () => {
					let d = !1;
					n.forEach(_ => {
						if (_.test(window.location.pathname)) {
							d = !0;
							return
						}
					});
					const u = g() && d;
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
		"../react/common/components/ButtonWithDropdown.tsx": function(z, v, t) {
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
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				g = t.n(c),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("../react/common/components/Dropdown/index.tsx"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(_) {
					for (var h = 1; h < arguments.length; h++) {
						var I = arguments[h];
						for (var O in I) Object.prototype.hasOwnProperty.call(I, O) && (_[O] = I[O])
					}
					return _
				}, n.apply(this, arguments)
			}

			function a(_, h) {
				if (_ == null) return {};
				var I = r(_, h),
					O, C;
				if (Object.getOwnPropertySymbols) {
					var w = Object.getOwnPropertySymbols(_);
					for (C = 0; C < w.length; C++) O = w[C], !(h.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, O) || (I[O] = _[O]))
				}
				return I
			}

			function r(_, h) {
				if (_ == null) return {};
				var I = {},
					O = Object.keys(_),
					C, w;
				for (w = 0; w < O.length; w++) C = O[w], !(h.indexOf(C) >= 0) && (I[C] = _[C]);
				return I
			}
			const d = (0, s.createStyledComponent)(({
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
					color: (0, f.Yc)() ? _.colors.text : void 0
				},
				"& button:hover": {
					color: (0, f.Yc)() ? _.colors.text : void 0
				}
			}));

			function u(_) {
				let {
					menu: h,
					containerProps: I,
					disabled: O,
					disabledDropdown: C = O
				} = _, w = a(_, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: E
				} = (0, c.useI18n)();
				return o().createElement(d, n({}, I, {
					role: "group"
				}), o().createElement(i.zx, n({}, w, {
					disabled: O
				})), o().createElement(m.Lt, {
					trigger: o().createElement(i.zx, {
						type: w.type,
						"aria-haspopup": "menu",
						disabled: C
					}, o().createElement(l.J, {
						type: "caret-down",
						label: E("common.more"),
						size: 12
					})),
					menu: h
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				v: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("../react/common/hooks/useIntersectionObserver.ts");

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(m) {
					for (var f = 1; f < arguments.length; f++) {
						var n = arguments[f];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (m[a] = n[a])
					}
					return m
				}, g.apply(this, arguments)
			}

			function s(m) {
				const f = (0, e.useRef)(null),
					[n, a] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const d = f.current;
					if (d) {
						const {
							bottom: u
						} = d.getBoundingClientRect();
						u > window.innerHeight && a(!0)
					}
				}, []);
				const r = (0, c.S)(d => {
					for (const u of d) u.intersectionRatio < 1 && a(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const d = f.current;
					if (d && r) return r.observe(d), () => {
						r.unobserve(d)
					}
				}, [r]), o().createElement(i.ZC, g({
					role: "menu",
					innerRef: f,
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
		"../react/common/components/Dropdown/MenuItem.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				s: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(l);

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(I) {
					for (var O = 1; O < arguments.length; O++) {
						var C = arguments[O];
						for (var w in C) Object.prototype.hasOwnProperty.call(C, w) && (I[w] = C[w])
					}
					return I
				}, g.apply(this, arguments)
			}

			function s(I, O) {
				if (I == null) return {};
				var C = m(I, O),
					w, E;
				if (Object.getOwnPropertySymbols) {
					var y = Object.getOwnPropertySymbols(I);
					for (E = 0; E < y.length; E++) w = y[E], !(O.indexOf(w) >= 0) && (!Object.prototype.propertyIsEnumerable.call(I, w) || (C[w] = I[w]))
				}
				return C
			}

			function m(I, O) {
				if (I == null) return {};
				var C = {},
					w = Object.keys(I),
					E, y;
				for (y = 0; y < w.length; y++) E = w[y], !(O.indexOf(E) >= 0) && (C[E] = I[E]);
				return C
			}

			function f(I) {
				for (var O = 1; O < arguments.length; O++) {
					var C = arguments[O] != null ? Object(arguments[O]) : {},
						w = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(C).filter(function(E) {
						return Object.getOwnPropertyDescriptor(C, E).enumerable
					})), w.forEach(function(E) {
						n(I, E, C[E])
					})
				}
				return I
			}

			function n(I, O, C) {
				return O = a(O), O in I ? Object.defineProperty(I, O, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[O] = C, I
			}

			function a(I) {
				var O = r(I, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function r(I, O) {
				if (typeof I != "object" || I === null) return I;
				var C = I[Symbol.toPrimitive];
				if (C !== void 0) {
					var w = C.call(I, O || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(I)
			}
			const d = ({
					theme: I
				}) => {
					const O = {
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
						'&:hover:not(:disabled):not([aria-disabled="true"])': O,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': f({}, O, {
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
				u = (0, i.createComponent)(d, "a"),
				_ = (0, i.createComponent)(d, "button");

			function h(I) {
				let {
					disabled: O = !1
				} = I, C = s(I, ["disabled"]);
				const w = (0, l.useHistory)(),
					E = {
						role: "menuitem"
					};
				if ("href" in C && typeof C.href == "string") return o().createElement(u, g({
					"aria-disabled": O
				}, E, C, {
					href: O ? void 0 : C.href,
					onClick: M => {
						var S;
						if (O) return M.stopPropagation();
						M.preventDefault(), (S = C.onClick) === null || S === void 0 || S.call(C, M), w.push(C.href)
					}
				}));
				var y;
				return o().createElement(_, g({
					type: (y = C.type) !== null && y !== void 0 ? y : "button"
				}, E, C, {
					disabled: O
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(z, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../../../../node_modules/prop-types/index.js"),
				l = t.n(i),
				c = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const g = ({
				children: s
			}) => o().createElement(c.xu, {
				height: 411
			}, s);
			g.propTypes = {
				children: l().node
			}, v.Z = g
		},
		"../react/common/components/ModalManager.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				ZP: function() {
					return u
				},
				dd: function() {
					return r
				},
				vR: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("webpack/sharing/consume/default/react-redux/react-redux");
			const l = _ => _.application.modals;
			var c = t("../react/common/actions/modalActions.ts"),
				g = t("../../../../node_modules/swr/core/dist/index.mjs"),
				s = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(_) {
					for (var h = 1; h < arguments.length; h++) {
						var I = arguments[h];
						for (var O in I) Object.prototype.hasOwnProperty.call(I, O) && (_[O] = I[O])
					}
					return _
				}, m.apply(this, arguments)
			}
			const f = o().createContext(null);
			class n extends o().Component {
				render() {
					const {
						modals: h,
						closeModal: I
					} = this.props;
					return o().createElement(o().Fragment, null, h.map(({
						ModalComponent: O,
						props: C = {},
						id: w
					}) => {
						const E = () => {
							typeof C.onClose == "function" && C.onClose(), I(O)
						};
						return o().createElement(f.Provider, {
							key: w,
							value: {
								closeModal: E
							}
						}, o().createElement(g.J$, {
							value: s.ZP
						}, o().createElement(O, m({}, C, {
							isOpen: !0,
							closeModal: E
						}))))
					}))
				}
			}

			function a() {
				const _ = o().useContext(f);
				if (!_) throw new Error("useModalContext must be used within a ModalContext");
				return _
			}

			function r() {
				const _ = (0, i.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...h) {
						return _(c.openModal(...h))
					}, [_]),
					closeModal: (0, e.useCallback)(function(...h) {
						return _(c.closeModal(...h))
					}, [_])
				}
			}
			var u = (0, i.connect)(_ => ({
				modals: l(_)
			}), c)(n)
		},
		"../react/common/components/Page.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				Z: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function l(c) {
				return o().createElement(i.T3, c)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return m
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
					return c
				},
				if: function() {
					return o
				},
				q6: function() {
					return i
				},
				w_: function() {
					return l
				},
				zl: function() {
					return s
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				i = "date-from",
				l = "date-to",
				c = "from",
				g = "to",
				s = "all",
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
			let f = function(a) {
					return a.ADD_FILTER = "Add filter", a.EDIT_FILTER = "Edit filter", a.REMOVE_FILTER = "Remove filter", a.CHANGE_TIME = "Change time window", a.FEED_PAGE_FORWARD = "Activity feed next page", a.FEED_PAGE_BACKWARD = "Activity feed previous page", a.FEED_EXPAND_EVENT = "Activity feed expand event", a.FEED_CLOSE_EVENT = "Activity feed close event", a.FEED_EXPAND_MATCHES = "Activity feed expand matches", a.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", a.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", a.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", a.DOWNLOAD_FEED = "Activity feed download", a.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', a.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', a.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', a.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', a.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', a.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", a.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", a
				}({}),
				n = function(a) {
					return a.TIMESERIES = "Timeseries Chart", a.DISTRIBUTION = "Source Distribution Chart", a.TOP_N = "Top N", a.FILTER_BAR = "Filter Bar", a.SCORES_DISTRIBUTIONS = "Scores Distributions", a.INSIGHTS = "Insights", a.RL_HISTOGRAM = "Rate Limit Histogram", a
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Cf: function() {
					return f
				},
				hJ: function() {
					return m
				},
				ys: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function i(n) {
				for (var a = 1; a < arguments.length; a++) {
					var r = arguments[a] != null ? Object(arguments[a]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(u) {
						return Object.getOwnPropertyDescriptor(r, u).enumerable
					})), d.forEach(function(u) {
						l(n, u, r[u])
					})
				}
				return n
			}

			function l(n, a, r) {
				return a = c(a), a in n ? Object.defineProperty(n, a, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[a] = r, n
			}

			function c(n) {
				var a = g(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(n, a) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, a || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const m = ({
					name: n,
					additionalData: a = {}
				}) => {
					o().sendEvent(n, i({}, a || {}))
				},
				f = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(z, v, t) {
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
		"../react/common/constants/analytics/botScoreSrc.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				EG: function() {
					return i
				},
				Me: function() {
					return g
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
			let i = function(s) {
				return s.NOT_COMPUTED = "not_computed", s.MACHINE_LEARNING = "machine_learning", s.HEURISTICS = "heuristics", s.BEHAVIORAL_ANALYSIS = "behavioral_analysis", s.JS_FINGERPRINTING = "js_fingerprinting", s.VERIFIED_BOT = "verified_bot", s.CLOUDFLARE_SERVICE = "cloudflare_service", s
			}({});
			const l = {
					[i.NOT_COMPUTED]: "Not Computed",
					[i.MACHINE_LEARNING]: "Machine Learning",
					[i.HEURISTICS]: "Heuristics",
					[i.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[i.JS_FINGERPRINTING]: "JS Fingerprinting",
					[i.VERIFIED_BOT]: "Verified Bot",
					[i.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				c = s => Array.isArray(s) ? s.map(m => {
					var f;
					return (f = l[m]) !== null && f !== void 0 ? f : m
				}) : l[s],
				g = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [i.NOT_COMPUTED, i.MACHINE_LEARNING, i.HEURISTICS, i.BEHAVIORAL_ANALYSIS, i.JS_FINGERPRINTING, i.VERIFIED_BOT, i.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Gq: function() {
					return l
				},
				g$: function() {
					return i
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
					return c
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return d
				},
				hQ: function() {
					return s
				},
				SP: function() {
					return m
				}
			});
			let e = function(u) {
				return u.page_rules = "page_rules", u.automatic_platform_optimization = "automatic_platform_optimization", u
			}({});
			const o = "page_rules",
				i = "automatic_platform_optimization",
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
				r = t("../react/common/constants/billing/workers.ts");
			const d = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				FP: function() {
					return e
				},
				Nl: function() {
					return c
				},
				SO: function() {
					return i
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
				i = {
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
		"../react/common/constants/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Dk: function() {
					return d
				},
				Dy: function() {
					return u
				},
				E_: function() {
					return g
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
					return f
				},
				Y1: function() {
					return s
				},
				p6: function() {
					return m
				},
				q0: function() {
					return l
				},
				rg: function() {
					return h
				},
				sJ: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const l = "healthy",
				c = "degraded",
				g = "critical",
				s = "unknown",
				m = "not-monitored",
				f = o().from({
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
				r = "marketing-pt",
				d = () => {
					const O = i.Z.get(r);
					if (!!O) return a[O]
				},
				u = ["gov"],
				_ = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				h = "banner-notification-interactions",
				I = null
		},
		"../react/common/constants/index.ts": function(z, v, t) {
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
		"../react/common/constants/roles.ts": function(z, v, t) {
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
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				QK: function() {
					return e
				},
				dy: function() {
					return o
				},
				sO: function() {
					return i
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
				i = (c, g, s = !1) => {
					var m;
					return `${g} ${(m=o[c])!==null&&m!==void 0?m:c} ${s?"ruleset":"rule"}${g===e.GET?"s":""}`
				},
				l = () => {
					var c;
					return (c = Object.keys(o).reduce((g, s) => {
						const m = Object.values(e).reduce((f, n) => (f.push(i(s, n)), f.push(i(s, n, !0)), f), []);
						return g.concat(m)
					}, [])) === null || c === void 0 ? void 0 : c.flat()
				}
		},
		"../react/common/hooks/suspenseHelpers.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				bt: function() {
					return s
				},
				nW: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const l = "suspenseComplete";

			function c() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(l))
				}, [])
			}

			function g(m) {
				(0, i.OR)(l, () => {
					window.setTimeout(m, 0)
				}, {
					target: window
				})
			}

			function s(...m) {
				const [f, n] = m;
				o().useLayoutEffect(f, n), g(f)
			}
		},
		"../react/common/hooks/useAccountId.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				F: function() {
					return c
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(i);

			function c() {
				var g;
				const {
					accountId: s
				} = (0, i.useParams)(), m = (0, e.p4)(o.D0);
				if (s === void 0 && !m) throw new Error("Account ID not found in URL params");
				return (g = s) !== null && g !== void 0 ? g : m == null ? void 0 : m.id
			}
		},
		"../react/common/hooks/useActiveState.ts": function(z, v, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				o = t("webpack/sharing/consume/default/react-redux/react-redux"),
				i = t.n(o),
				l = t("../react/common/selectors/commonSelectors.ts");
			const c = g => {
				const s = (0, o.useDispatch)();
				return [(0, o.useSelector)((0, l.cZ)(g)), n => {
					s((0, e.I)(g, n))
				}]
			};
			v.Z = c
		},
		"../react/common/hooks/useCachedState.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				j: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function l(c, {
				key: g,
				cache: s = i.E,
				ttl: m
			} = {}) {
				var f;
				const n = g !== void 0 && s.get(g),
					[a, r] = (0, e.useState)((f = n) !== null && f !== void 0 ? f : c);
				return [a, u => {
					r(_ => (u instanceof Function && (u = u(_)), g !== void 0 && s.set(g, u, m), u))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(z, v, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(i) {
				return (0, e.qf)(i)
			}
			v.Z = o
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function i(l, {
				root: c,
				rootMargin: g,
				threshold: s
			} = {}) {
				const m = (0, e.useRef)(null);

				function f() {
					return m.current === null && (m.current = new IntersectionObserver(l, {
						root: c,
						rootMargin: g,
						threshold: s
					})), m.current
				}
				return (0, e.useEffect)(() => (m.current = new IntersectionObserver(l, {
					root: c,
					rootMargin: g,
					threshold: s
				}), () => {
					var n;
					(n = m.current) === null || n === void 0 || n.disconnect()
				}), [l, c, g, s]), f()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(z, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function i(l) {
				const c = (0, e.useRef)(l);
				return (0, e.useEffect)(() => {
					c.current = l
				}, [l]), c.current
			}
			v.Z = i
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(z, v, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function i(l) {
				return (0, e.p4)(c => (0, o.rV)(c, l))
			}
			v.Z = i
		},
		"../react/common/middleware/sparrow/errors.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Uh: function() {
					return c
				},
				ez: function() {
					return l
				},
				oV: function() {
					return g
				}
			});

			function e(s, m, f) {
				return m = o(m), m in s ? Object.defineProperty(s, m, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[m] = f, s
			}

			function o(s) {
				var m = i(s, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function i(s, m) {
				if (typeof s != "object" || s === null) return s;
				var f = s[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(s, m || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(s)
			}
			class l extends Error {
				constructor(m, f) {
					super(f);
					e(this, "eventName", void 0), this.eventName = m, this.name = "SparrowValidationError"
				}
			}
			class c extends l {
				constructor(m) {
					super(m, `Event not allowed: "${m}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class g extends l {
				constructor(m, f) {
					super(m, `Found invalid properties on event: "${m}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = f
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				AC: function() {
					return ze
				},
				Au: function() {
					return ue
				},
				B: function() {
					return ke
				},
				B3: function() {
					return Pe
				},
				BG: function() {
					return S
				},
				Bp: function() {
					return Ke
				},
				CV: function() {
					return ht
				},
				D0: function() {
					return w
				},
				DT: function() {
					return N
				},
				EL: function() {
					return Z
				},
				EU: function() {
					return V
				},
				GE: function() {
					return yt
				},
				Ko: function() {
					return q
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
					return $
				},
				Py: function() {
					return mt
				},
				QI: function() {
					return st
				},
				Qf: function() {
					return y
				},
				RO: function() {
					return Ie
				},
				T3: function() {
					return gt
				},
				T8: function() {
					return M
				},
				UX: function() {
					return k
				},
				VP: function() {
					return at
				},
				Xo: function() {
					return Xe
				},
				Xu: function() {
					return ce
				},
				Yi: function() {
					return Ct
				},
				Yj: function() {
					return ae
				},
				Zu: function() {
					return X
				},
				bC: function() {
					return W
				},
				f8: function() {
					return Q
				},
				hI: function() {
					return lt
				},
				hN: function() {
					return P
				},
				hX: function() {
					return Se
				},
				iq: function() {
					return ve
				},
				nE: function() {
					return B
				},
				oD: function() {
					return T
				},
				oI: function() {
					return j
				},
				oJ: function() {
					return Y
				},
				tM: function() {
					return U
				},
				uF: function() {
					return le
				},
				ut: function() {
					return nt
				},
				vU: function() {
					return ct
				},
				wQ: function() {
					return de
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				i = t.n(o),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				c = t.n(l),
				g = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../../../../node_modules/moment/moment.js"),
				m = t.n(s),
				f = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				a = t("../react/common/selectors/userSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				d = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/common/constants/roles.ts"),
				_ = t("../react/common/utils/hasRole.ts");

			function h(G) {
				for (var se = 1; se < arguments.length; se++) {
					var Ee = arguments[se] != null ? Object(arguments[se]) : {},
						Oe = Object.keys(Ee);
					typeof Object.getOwnPropertySymbols == "function" && Oe.push.apply(Oe, Object.getOwnPropertySymbols(Ee).filter(function(we) {
						return Object.getOwnPropertyDescriptor(Ee, we).enumerable
					})), Oe.forEach(function(we) {
						I(G, we, Ee[we])
					})
				}
				return G
			}

			function I(G, se, Ee) {
				return se = O(se), se in G ? Object.defineProperty(G, se, {
					value: Ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[se] = Ee, G
			}

			function O(G) {
				var se = C(G, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function C(G, se) {
				if (typeof G != "object" || G === null) return G;
				var Ee = G[Symbol.toPrimitive];
				if (Ee !== void 0) {
					var Oe = Ee.call(G, se || "default");
					if (typeof Oe != "object") return Oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(G)
			}
			const w = G => {
					const se = le(G);
					return se == null ? void 0 : se.account
				},
				E = G => {
					const se = (0, a.PR)(G);
					if (se) {
						const Ee = se.id;
						return G.accountAccess[Ee] || {}
					}
					return {}
				},
				y = G => G.accountsDetailed,
				M = (0, n.P1)("accountsDetailed", y),
				S = G => G.memberships,
				B = (0, g.P1)((0, n.P1)("memberships", S), d.U, (G, se) => !!se && !!G ? G.filter(Ee => se.includes(Ee.id)) : G),
				P = G => G.accountFlags && G.accountFlags.data,
				b = G => G.accountFlags,
				D = (G, se, Ee) => {
					const Oe = P(G);
					return !Oe || !Oe[se] ? null : Oe[se][Ee]
				},
				L = G => G.accountFlags.isRequesting,
				j = (G, ...se) => i()(G, ["accountFlagsChanges", "data", ...se]),
				Q = G => G.accountFlagsChanges.isRequesting,
				re = (0, g.P1)(P, b, (G, se) => ({
					data: G,
					meta: se
				})),
				me = (G, se, Ee) => !!(isEnterpriseSSEnabledSelector(G) && D(G, se, Ee)),
				ce = G => G.membership,
				le = (0, n.P1)("membership", ce),
				x = (0, g.P1)(le, ce, (G, se) => ({
					data: G,
					meta: se
				})),
				$ = G => {
					const {
						roles: se = []
					} = le(G) || {};
					return Boolean(se.find(Ee => Ee === "Super Administrator - All Privileges" || Ee === "Billing"))
				},
				U = G => {
					const se = [u.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, _.n)(G, se)
				},
				T = G => {
					const se = E(G),
						Ee = Te.getMemberships(G) ? c().asMutable(Te.getMemberships(G)) : [];
					if (!!Ee) return c().from(Ee.map(Oe => h({}, Oe, {
						lastSeen: se[Oe.account.id] ? se[Oe.account.id].lastSeen : null
					})).sort((Oe, we) => Oe.lastSeen && we.lastSeen ? we.lastSeen - Oe.lastSeen : 0))
				},
				k = G => G.filteredMemberships,
				Z = (0, n.P1)("filteredMemberships", k),
				X = (0, g.P1)(le, G => G == null ? void 0 : G.permissions),
				ae = (0, g.P1)(X, G => (0, e.Z)(se => {
					var Ee;
					return (Ee = G == null ? void 0 : G[se]) !== null && Ee !== void 0 ? Ee : {
						read: !1,
						edit: !1
					}
				})),
				q = (0, g.P1)(le, G => G == null ? void 0 : G.policies),
				N = (G, se, Ee) => {
					let Oe = Te.getMembership(G);
					if (!Oe) {
						const we = Te.getMemberships(G);
						if (!we || !se) return !1;
						Oe = we.find(je => je.account.id === se)
					}
					if (!Oe || !Ee) return !1;
					try {
						return Ee(Oe.permissions)
					} catch {
						return !1
					}
				},
				K = G => {
					var se, Ee;
					return (se = (Ee = w(G)) === null || Ee === void 0 ? void 0 : Ee.meta.has_pro_zones) !== null && se !== void 0 ? se : !1
				},
				V = G => {
					var se, Ee;
					return (se = (Ee = w(G)) === null || Ee === void 0 ? void 0 : Ee.meta.has_business_zones) !== null && se !== void 0 ? se : !1
				},
				W = G => V(G) || K(G),
				ee = (G, se) => {
					const Ee = pe(G, se);
					return !!Ee && !!Ee.enabled
				},
				pe = (G, se) => {
					const Ee = Te.getMembership(G),
						Oe = Ee && Ee.account;
					return Oe && Oe.legacy_flags && Oe.legacy_flags[se]
				},
				de = G => ee(G, "custom_pages"),
				_e = G => !!G && G["webhooks.webhooks.enabled"],
				ye = G => D(G, "bots", "enabled"),
				Le = G => D(G, "billing", "annual_subscriptions_enable"),
				Ie = G => G ? Boolean(D(G, "ConstellationAI", "v2_ui")) : !1,
				Se = G => G ? Boolean(D(G, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				ke = G => G ? Boolean(D(G, "AIgateway", "enabled")) : !1,
				He = G => pe(G, "enterprise_zone_quota"),
				H = G => {
					const se = He(G);
					return !se || !se.available ? -1 : se.available
				},
				ve = G => G.accountMembers,
				Pe = (0, n.P1)("accountMembers", ve),
				Ye = G => G.accountMember && G.accountMember.isRequesting,
				tt = G => G.accountRoles,
				ze = (0, n.P1)("accountRoles", tt),
				mt = (G, se) => {
					const Ee = Te.getMemberships(G),
						Oe = Ee && Ee.find(Qe => Qe.account.id === se);
					if (Oe) return Oe.account.name.replace(" Account", " account");
					const we = Te.getMembership(G),
						je = we && we.account;
					return je && je.id === se ? je.name : null
				},
				nt = (G, se) => {
					const Ee = Te.getMemberships(G),
						Oe = Ee && Ee.find(Qe => Qe.account.id === se);
					if (Oe) return Oe.account.settings.access_approval_expiry;
					const we = Te.getMembership(G),
						je = we && we.account;
					return je && je.id === se ? je.settings.access_approval_expiry : null
				},
				Xe = (G, se) => {
					const Ee = nt(G, se);
					return Ee ? m().utc(Ee).isAfter() : !1
				},
				gt = (G, se, Ee) => {
					const Oe = nt(G, se);
					let we = Oe ? m().utc(Oe) : null;
					return !we || !we.isAfter() ? "" : we && we.year() === 3e3 ? Ee("account.access_approval.card_expiration_forever") : Ee("account.access_approval.card_expiration_text", {
						expiryTimestamp: we.local().format(f.U.DateTime)
					})
				},
				Y = G => G && G.member && G.member.edit,
				ue = (G, se) => {
					const Ee = Te.getMembership(G),
						Oe = Ee && Ee.account;
					return Oe ? Oe.id !== se : !1
				},
				Ce = G => G.dpa,
				Ue = (0, n.P1)("dpa", Ce),
				Fe = G => G.webhook,
				Re = G => G.webhooks,
				Je = (0, n.P1)("webhook", Re),
				at = G => G.accountLegoContract,
				ot = (0, n.P1)("accountLegoContract", at),
				st = G => {
					const se = ot(G);
					return (se == null ? void 0 : se.lego_state) ? se.lego_state : ""
				},
				vt = G => st(G) === "signed",
				yt = G => at(G).isRequesting,
				ct = G => {
					const se = ot(G);
					return se && se.subscription_type ? se.subscription_type : ""
				},
				Ne = G => ct(G) !== "",
				Te = {
					getMembership: le,
					getMemberships: B,
					getFilteredMemberships: Z,
					getAccountMembers: Pe,
					getAccountRoles: ze
				},
				Ke = G => G.accountSingle,
				Ct = (0, n.P1)("accountSingle", Ke),
				lt = G => {
					const se = [u.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, u.V.ADMINISTRATOR];
					return (0, _.n)(G, se)
				},
				ht = G => (0, _.n)(G, [u.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/commonSelectors.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				FX: function() {
					return i
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
				const g = `__ACTIVE__${c}`;
				return s => {
					const m = s.application;
					return m && m.active[g]
				}
			}

			function o(c) {
				const g = `__TOGGLE__${c}`;
				return s => {
					const m = s.application;
					return m && m.toggles[g]
				}
			}

			function i(c) {
				return c && c.paginationData && c.paginationData.info && c.paginationData.info.total_count ? c.paginationData.info.total_count : 0
			}
			const l = c => c.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(z, v, t) {
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
					return w
				},
				Ci: function() {
					return X
				},
				DA: function() {
					return Se
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
					return M
				},
				Nb: function() {
					return de
				},
				Pj: function() {
					return Ie
				},
				Q2: function() {
					return g
				},
				Qq: function() {
					return W
				},
				Td: function() {
					return O
				},
				Z: function() {
					return N
				},
				a: function() {
					return C
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
					return ae
				},
				jo: function() {
					return S
				},
				l9: function() {
					return He
				},
				lI: function() {
					return l
				},
				p1: function() {
					return h
				},
				pK: function() {
					return Le
				},
				pf: function() {
					return n
				},
				qR: function() {
					return I
				},
				rV: function() {
					return s
				},
				u1: function() {
					return f
				},
				w4: function() {
					return a
				},
				yD: function() {
					return q
				}
			});
			var e = t("../react/utils/url.ts");

			function o(H, ve) {
				return H && H[ve]
			}
			const i = H => !l(H).isRequesting;

			function l(H) {
				return H.entitlements.zone
			}

			function c(H) {
				return l(H).data
			}
			const g = H => {
				var ve, Pe;
				return ((ve = l(H).paginationData) === null || ve === void 0 || (Pe = ve.options) === null || Pe === void 0 ? void 0 : Pe.editedDate) || {}
			};

			function s(H, ve) {
				const Pe = c(H);
				return Pe ? o(Pe, ve) : void 0
			}
			const m = (H, ve) => s(H, ve) === !0;

			function f(H) {
				return H.entitlements.account
			}

			function n(H) {
				return f(H).data
			}
			const a = H => {
				var ve, Pe;
				return ((ve = f(H).paginationData) === null || ve === void 0 || (Pe = ve.options) === null || Pe === void 0 ? void 0 : Pe.editedDate) || {}
			};

			function r(H) {
				return !f(H).isRequesting
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

			function h(H) {
				return u(H, "contract.customer_enabled")
			}

			function I(H) {
				return u(H, "contract.self_service_allowed")
			}

			function O(H) {
				return u(H, "billing.partners_managed")
			}
			const C = H => h(H) && I(H),
				w = H => u(H, "enterprise.ecp_allowed");

			function E(H) {
				return y(H) || u(H, "argo.allow_smart_routing") || u(H, "argo.allow_tiered_caching") || u(H, "rate_limiting.enabled") || u(H, "ctm.enabled") || u(H, "workers.enabled") || u(H, "workers.kv_store.enabled") || u(H, "stream.enabled")
			}
			const y = H => m(H, "argo.allow_smart_routing") || m(H, "argo.allow_tiered_caching"),
				M = H => u(H, "zone.cname_setup_allowed") || u(H, "zone.partial_setup_allowed") || m(H, "zone.partial_setup_allowed"),
				S = H => u(H, "argo.allow_smart_routing") || m(H, "argo.allow_smart_routing"),
				B = H => u(H, "argo.allow_tiered_caching") || m(H, "argo.allow_tiered_caching"),
				P = H => S(H) || B(H),
				b = H => u(H, "ctm.enabled"),
				D = H => {
					const ve = d(H, "ctm.load_balancers");
					return typeof ve == "number" ? ve : 0
				},
				L = H => {
					const ve = d(H, "ctm.pools");
					return typeof ve == "number" ? ve : 0
				},
				j = H => {
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
					const ve = s(H, "dedicated_certificates");
					return typeof ve == "number" ? ve : 0
				},
				x = H => le(H) > 0,
				$ = H => {
					const ve = s(H, "rate_limiting.max_rules");
					return typeof ve == "number" ? ve : 0
				},
				U = H => u(H, "rate_limiting.enabled"),
				T = H => {
					const ve = s(H, "page_rules");
					return typeof ve == "number" ? ve : 0
				},
				k = H => T(H) > 0,
				Z = H => {
					const ve = d(H, "dns_firewall.max_clusters_allowed");
					return typeof ve == "number" ? ve : 0
				},
				X = H => Z(H) > 0,
				ae = H => m(H, "zone.advanced_certificate_manager") || u(H, "zone.advanced_certificate_manager"),
				q = H => s(H, "authoritative_dns.proxy_record_allowed") === !1 || d(H, "authoritative_dns.proxy_record_allowed") === !1,
				N = H => u(H, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				K = H => s(H, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				V = H => {
					const ve = s(H, "authoritative_dns.min_record_ttl_allowed");
					return typeof ve == "number" && ve > 1 ? ve : 60
				},
				W = H => u(H, "foundation_dns.advanced_nameservers_allowed") || m(H, "foundation_dns.advanced_nameservers_allowed"),
				ee = H => u(H, "account_custom_ns.allowed"),
				pe = (H, ve) => ((0, e.el)(window.location.pathname) ? s : d)(H, ve),
				de = H => ((0, e.el)(window.location.pathname) ? c : n)(H),
				_e = H => u(H, "authoritative_dns.multi_provider_allowed") || m(H, "authoritative_dns.multi_provider_allowed"),
				ye = H => m(H, "authoritative_dns.cname_flattening_allowed"),
				Le = H => u(H, "secondary_dns.secondary_overrides") || m(H, "secondary_dns.secondary_overrides"),
				Ie = H => u(H, "authoritative_dns.custom_soa_allowed") || m(H, "authoritative_dns.custom_soa_allowed"),
				Se = H => u(H, "authoritative_dns.custom_ns_ttl_allowed") || m(H, "authoritative_dns.custom_ns_ttl_allowed"),
				ke = H => u(H, "secondary.create_zone"),
				He = H => W(H) || ee(H) || _e(H) || ke(H) || Le(H) || Ie(H) || Se(H)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				r: function() {
					return c
				},
				v: function() {
					return g
				}
			});
			var e = t("../react/utils/i18n.ts"),
				o = t("../../../common/intl/intl-types/src/index.ts"),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				l = t("../react/utils/bootstrap.ts");
			const c = s => {
				if ((0, l.gm)()) return i.Z.set(e.ly, e.ZW), e.ZW;
				const m = s.userCommPreferences.data;
				if (m == null ? void 0 : m["language-locale"]) return (0, e.i_)(m["language-locale"]), m["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const f = (0, e.Kd)();
					return g(f) ? f : e.ZW
				}
			};

			function g(s) {
				const m = Object.keys(o.Q).find(f => o.Q[f] === s);
				return !!s && typeof s == "string" && m != null && (0, e.S8)(m)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				$8: function() {
					return c
				},
				BG: function() {
					return f
				},
				BY: function() {
					return C
				},
				GP: function() {
					return u
				},
				GU: function() {
					return w
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
					return s
				},
				mV: function() {
					return _
				},
				vW: function() {
					return g
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const o = E => E.user,
				i = (0, e.P1)("user", o),
				l = E => {
					var y;
					return (y = i(E)) === null || y === void 0 ? void 0 : y.email.endsWith("@cloudflare.com")
				},
				c = E => {
					var y;
					return !!((y = i(E)) === null || y === void 0 ? void 0 : y.id)
				},
				g = E => {
					const y = i(E);
					if (!!y) return y.first_name && y.last_name ? `${y.first_name} ${y.last_name}` : y.email
				},
				s = E => {
					const y = i(E);
					return y && y.has_enterprise_zones
				},
				m = E => E.userCommPreferences,
				f = (0, e.P1)("userCommPreferences", m),
				n = E => {
					const y = i(E);
					return y && y.email_verified
				},
				a = E => {
					const y = f(E);
					return y && y.preferences.marketing_communication
				},
				r = E => E.userDetails,
				d = (0, e.P1)("userDetails", r),
				u = E => {
					const y = d(E);
					return y && y["2FA-RECOVERY"] === "scheduled"
				},
				_ = E => {
					const y = d(E);
					return y && y["2FA-RECOVERY"] === "interrupted"
				},
				h = E => {
					const y = d(E);
					return y == null ? void 0 : y["NEW-USER-EMAIL"]
				},
				I = E => E.gates.assignments,
				O = (E, y) => E && E[y];

			function C(E, y) {
				const M = I(E);
				return M ? O(M, y) : void 0
			}
			const w = (E, y) => C(E, y) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				$4: function() {
					return M
				},
				$t: function() {
					return ze
				},
				A4: function() {
					return h
				},
				Cu: function() {
					return I
				},
				DQ: function() {
					return W
				},
				Ej: function() {
					return B
				},
				FH: function() {
					return C
				},
				ID: function() {
					return U
				},
				Ko: function() {
					return Ie
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
					return k
				},
				Ox: function() {
					return Xe
				},
				P4: function() {
					return P
				},
				RO: function() {
					return x
				},
				Tr: function() {
					return Le
				},
				U: function() {
					return O
				},
				Ug: function() {
					return E
				},
				V6: function() {
					return Pe
				},
				WR: function() {
					return gt
				},
				Xg: function() {
					return _
				},
				ZB: function() {
					return pe
				},
				_y: function() {
					return T
				},
				cU: function() {
					return Se
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
					return D
				},
				jg: function() {
					return q
				},
				kC: function() {
					return S
				},
				kf: function() {
					return Ye
				},
				ko: function() {
					return le
				},
				mK: function() {
					return mt
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
					return N
				},
				tS: function() {
					return y
				},
				tU: function() {
					return j
				},
				vB: function() {
					return nt
				},
				vM: function() {
					return L
				},
				wH: function() {
					return w
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
					return ke
				},
				zW: function() {
					return tt
				},
				zh: function() {
					return me
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				i = t("../../../../node_modules/lodash/get.js"),
				l = t.n(i),
				c = t("../../../../node_modules/moment/moment.js"),
				g = t.n(c),
				s = t("../react/common/constants/billing/index.ts");

			function m(Y) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var Ce = arguments[ue] != null ? Object(arguments[ue]) : {},
						Ue = Object.keys(Ce);
					typeof Object.getOwnPropertySymbols == "function" && Ue.push.apply(Ue, Object.getOwnPropertySymbols(Ce).filter(function(Fe) {
						return Object.getOwnPropertyDescriptor(Ce, Fe).enumerable
					})), Ue.forEach(function(Fe) {
						f(Y, Fe, Ce[Fe])
					})
				}
				return Y
			}

			function f(Y, ue, Ce) {
				return ue = n(ue), ue in Y ? Object.defineProperty(Y, ue, {
					value: Ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[ue] = Ce, Y
			}

			function n(Y) {
				var ue = a(Y, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function a(Y, ue) {
				if (typeof Y != "object" || Y === null) return Y;
				var Ce = Y[Symbol.toPrimitive];
				if (Ce !== void 0) {
					var Ue = Ce.call(Y, ue || "default");
					if (typeof Ue != "object") return Ue;
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
					var Ce, Ue, Fe;
					let Re;
					if (Array.isArray(Y) && Y.length === 1 ? Re = Y[0] : Y && !Array.isArray(Y) && (Re = Y), !Re) return;
					const Je = !!(ue == null ? void 0 : ue.enabled);
					return m({}, Re, Re.name && {
						name: Je ? ue.rootZoneName : Re.name
					}, {
						versioning: {
							enabled: Je,
							isRoot: !((Ce = Re.name) === null || Ce === void 0 ? void 0 : Ce.endsWith(".config.cfdata.org")),
							version: Je ? ue.selectedVersion : 0,
							rootZoneId: Je ? ue.rootZoneId : (Ue = (Fe = Re) === null || Fe === void 0 ? void 0 : Fe.id) !== null && Ue !== void 0 ? Ue : ""
						}
					})
				}),
				_ = Y => Y.zone,
				h = (0, e.P1)(u, _, (Y, ue) => ({
					data: Y,
					meta: ue
				})),
				I = Y => {
					var ue, Ce;
					return (ue = (Ce = u(Y)) === null || Ce === void 0 ? void 0 : Ce.id) !== null && ue !== void 0 ? ue : ""
				},
				O = Y => Y.zones,
				C = Y => Y.zonesRoot,
				w = Y => Y.zonesAccount,
				E = (0, o.P1)("zones", O),
				y = (0, o.P1)("zonesRoot", C),
				M = (0, o.P1)("zonesAccount", w);

			function S(Y) {
				const ue = u(Y);
				return ue ? ue.created_on : null
			}

			function B(Y, ue, Ce) {
				const Ue = S(Y);
				if (!Ue) return;
				const Fe = g().duration(ue, Ce),
					Re = new Date(Ue),
					Je = new Date(new Date().getTime() - Fe.asMilliseconds());
				return Re.getTime() > Je.getTime()
			}

			function P(Y) {
				const ue = u(Y);
				return ue ? ue.status : null
			}

			function b(Y) {
				const ue = u(Y);
				return ue ? ue.type : null
			}

			function D(Y) {
				return (Y == null ? void 0 : Y.plan_pending) ? Y == null ? void 0 : Y.plan_pending : Y == null ? void 0 : Y.plan
			}

			function L(Y) {
				const ue = u(Y);
				if (!ue) return;
				const Ce = D(ue);
				return Ce && Ce.legacy_id
			}

			function j(Y, ue) {
				const Ce = D(Y);
				return !!Ce && s.Gs.indexOf(Ce.legacy_id) >= s.Gs.indexOf(ue)
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
				const Ce = D(Y);
				return !!Ce && Ce.legacy_id === ue
			}

			function le(Y) {
				return ce(Y, "enterprise")
			}
			const x = Y => le(u(Y));

			function $(Y) {
				return ce(Y, "business")
			}
			const U = Y => $(u(Y));

			function T(Y) {
				return ce(Y, "pro")
			}

			function k(Y) {
				return ce(Y, "free")
			}
			const Z = Y => k(u(Y));

			function X(Y) {
				return !le(Y)
			}

			function ae(Y) {
				return Y && Y.owner
			}

			function q(Y, ue) {
				const Ce = ae(ue);
				return !!Ce && Ce.type === "user" && Ce.id === Y.id
			}

			function N(Y) {
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
				W = Y => {
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
				Ie = Y => Y.zoneFlagsChanges.isRequesting,
				Se = Y => Y.zoneFlags && Y.zoneFlags.data,
				ke = Y => Y.zoneFlags,
				He = (0, e.P1)(Se, ke, (Y, ue) => ({
					data: Y,
					meta: ue
				})),
				H = (0, o.P1)("abuseUrls", Y => Y.overview.abuseUrls),
				ve = Y => {
					const ue = u(Y);
					return ue ? `/${ue.account.id}/${ue.name}` : null
				},
				Pe = Y => Y.zoneMarketingCampaigns,
				Ye = Y => Y.overview.zoneBlocks.data,
				tt = Y => Y.overview.zoneBlocks.isRequesting,
				ze = Y => Y.overview.zoneBlocks.hasData,
				mt = Y => {
					var ue, Ce;
					return (Y == null || (ue = Y.overview.zoneBlocks) === null || ue === void 0 || (Ce = ue.paginationData) === null || Ce === void 0 ? void 0 : Ce.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				nt = Y => Y.overview.zoneBlocksReview.isRequesting,
				Xe = Y => Y.overview.zoneHold,
				gt = (0, o.P1)("zoneHold", Xe)
		},
		"../react/common/utils/formatDate.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			v.Z = (o, i, l = !1) => (0, e.p6)(o, i, l)
		},
		"../react/common/utils/hasRole.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				n: function() {
					return o
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const o = (i, l) => {
				const {
					roles: c = []
				} = (0, e.uF)(i) || {};
				return l.some(g => c.includes(g))
			}
		},
		"../react/common/utils/isGuards.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Q$: function() {
					return i
				},
				t: function() {
					return g
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
			const i = s => s ? ["page", "per_page", "count", "total_count"].every(f => f in s && s[f]) : !1,
				l = (s = "") => e.Dy.includes(s.toLowerCase()),
				c = s => s !== null && typeof s == "object" && "name" in s && "size" in s && "type" in s && typeof s.slice == "function",
				g = s => (0, o.Z)(s)
		},
		"../react/common/utils/startViewTransition.ts": function(z, v, t) {
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
		"../react/common/utils/useQueryCache.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				o: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(s) {
				for (var m = 1; m < arguments.length; m++) {
					var f = arguments[m] != null ? Object(arguments[m]) : {},
						n = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(f).filter(function(a) {
						return Object.getOwnPropertyDescriptor(f, a).enumerable
					})), n.forEach(function(a) {
						i(s, a, f[a])
					})
				}
				return s
			}

			function i(s, m, f) {
				return m = l(m), m in s ? Object.defineProperty(s, m, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[m] = f, s
			}

			function l(s) {
				var m = c(s, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function c(s, m) {
				if (typeof s != "object" || s === null) return s;
				var f = s[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(s, m || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(s)
			}
			const g = s => {
				const m = (0, e.useQueryClient)(),
					f = C => {
						var w;
						return m.getQueriesData((w = C) !== null && w !== void 0 ? w : s)
					},
					n = C => {
						var w;
						return m.getQueryData((w = C) !== null && w !== void 0 ? w : s)
					},
					a = C => {
						var w;
						return m.getQueriesData({
							queryKey: (w = C) !== null && w !== void 0 ? w : s,
							stale: !0
						})
					},
					r = (C, w) => {
						var E;
						m.setQueryData((E = w) !== null && E !== void 0 ? E : s, C)
					},
					d = async C => {
						var w;
						await m.refetchQueries((w = C) !== null && w !== void 0 ? w : s)
					}, u = async (C, w) => {
						var E, y;
						await m.invalidateQueries((E = C) !== null && E !== void 0 ? E : s, o({
							refetchActive: !1
						}, (y = w) !== null && y !== void 0 ? y : {}))
					}, _ = async (C, w) => {
						const E = C || (y => {
							var M;
							return (y == null || (M = y.queryKey) === null || M === void 0 ? void 0 : M[0]) === s
						});
						await m.invalidateQueries(o({
							predicate: E,
							refetchActive: !1,
							refetchInactive: !1
						}, w))
					};
				return {
					refetch: d,
					cancelData: async () => {
						await m.cancelQueries(s)
					},
					invalidate: u,
					setData: r,
					getDataStale: a,
					getData: f,
					prefetchQuery: (C, w) => {
						var E;
						return m.prefetchQuery((E = w) !== null && E !== void 0 ? E : s, C)
					},
					getQueryData: n,
					predicateInvalidate: _,
					batchInvalidate: async ({
						queryKeysToInvalidate: C = [],
						queryKeysToPredicateInvalidate: w = [],
						refetchActive: E = !1,
						refetchInactive: y = !1
					}) => {
						const M = C.map(B => u(B)),
							S = w.map(B => _(P => {
								var b;
								return (P == null || (b = P.queryKey) === null || b === void 0 ? void 0 : b[0]) === B
							}, {
								refetchActive: E,
								refetchInactive: y
							}));
						await Promise.all([...M, ...S])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(z, v, t) {
			"use strict";
			t.d(v, {
				K2: function() {
					return o
				},
				Lb: function() {
					return i
				},
				XI: function() {
					return l
				},
				bK: function() {
					return m
				},
				jk: function() {
					return s
				},
				wb: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = f => /^https?:\/\/(.*)/.test(f),
				i = f => e.default.hostname.test(f),
				l = f => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(f),
				c = f => /^[!-~]+$/.test(f),
				g = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				s = f => g.test(f),
				m = f => !!f && !!f.length && /^[ -~]+$/.test(f)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(z, v, t) {
			"use strict";
			t.d(v, {
				DZ: function() {
					return l
				},
				GA: function() {
					return f
				},
				hT: function() {
					return g
				},
				p6: function() {
					return i
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
			const i = r => o().utc(r).format("YYYY-MM-DD"),
				l = r => o().utc(r).format(),
				c = r => o().utc(r).startOf("minute").format(),
				g = r => new Date(r),
				s = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				m = r => {
					const d = r / 60 / 60 / 1e3;
					return s[Object.keys(s).sort((u, _) => _ - u).find(u => d >= u)]
				},
				f = (r, d = u => u.avg && u.avg.sampleInterval ? u.avg.sampleInterval : 1) => r.length === 0 ? 1 : r.reduce((u, _) => u + d(_), 0) / r.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				a = r => n[r]
		},
		"../react/pages/caching/tracking.tsx": function(z, v, t) {
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
		"../react/pages/d1/routes.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				H: function() {
					return i
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
		"../react/pages/dns/dns-records/tracking.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return e
				},
				X: function() {
					return o
				}
			});
			let e = function(i) {
				return i.DNS_RECORD_CREATE = "create DNS records", i.DNS_RECORD_UPDATE = "update DNS records", i.DNS_RECORD_DELETE = "delete DNS records", i.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", i
			}({});
			const o = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				BB: function() {
					return o
				},
				Pm: function() {
					return i
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
			let i = function(c) {
				return c[c.Verified = 0] = "Verified", c[c.Pending = 1] = "Pending", c[c.Missing = 2] = "Missing", c[c.WorkerNotFound = 3] = "WorkerNotFound", c[c.Unknown = 4] = "Unknown", c[c.Loading = 5] = "Loading", c
			}({});
			const l = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/config.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				jk: function() {
					return I
				},
				w8: function() {
					return O
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				i = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				l = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function c(C) {
				for (var w = 1; w < arguments.length; w++) {
					var E = arguments[w] != null ? Object(arguments[w]) : {},
						y = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(E).filter(function(M) {
						return Object.getOwnPropertyDescriptor(E, M).enumerable
					})), y.forEach(function(M) {
						g(C, M, E[M])
					})
				}
				return C
			}

			function g(C, w, E) {
				return w = s(w), w in C ? Object.defineProperty(C, w, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[w] = E, C
			}

			function s(C) {
				var w = m(C, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function m(C, w) {
				if (typeof C != "object" || C === null) return C;
				var E = C[Symbol.toPrimitive];
				if (E !== void 0) {
					var y = E.call(C, w || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(C)
			}
			const f = "Notifications",
				n = "notification",
				a = (0, e.BC)`/${"accountId"}`,
				r = (0, e.BC)`${a}/notifications`,
				d = (0, e.BC)`${r}/destinations`,
				u = (0, e.BC)`${r}/create`,
				_ = (0, e.BC)`${u}/${"alertType"}`,
				h = (0, e.BC)`${r}/edit/${"alertId"}`,
				I = c({
					account: a,
					alerts: r,
					destinations: d,
					createAlert: u,
					createAlertWithSelection: _,
					editAlert: h
				}, o._j, i._j),
				O = c({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, l.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				_j: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				i = (0, e.BC)`${o}/pagerduty/connect`,
				l = (0, e.BC)`${o}/pagerduty/register`,
				c = (0, e.BC)`${o}/pagerduty`,
				g = {
					pagerDutyConnect: i,
					pagerDutyRegister: l,
					pagerDutyList: c
				};
			var s = null
		},
		"../react/pages/home/alerts/tracking.ts": function(z, v, t) {
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
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(z, v, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(z, v, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				AA: function() {
					return K
				},
				AN: function() {
					return lt
				},
				AY: function() {
					return Ee
				},
				Ac: function() {
					return Tt
				},
				Am: function() {
					return I
				},
				B2: function() {
					return U
				},
				BB: function() {
					return B
				},
				BF: function() {
					return Re
				},
				BQ: function() {
					return Te
				},
				E8: function() {
					return G
				},
				Fl: function() {
					return we
				},
				Fu: function() {
					return D
				},
				Gc: function() {
					return st
				},
				Hc: function() {
					return kt
				},
				IO: function() {
					return Ke
				},
				JK: function() {
					return H
				},
				K: function() {
					return y
				},
				LI: function() {
					return Ne
				},
				LX: function() {
					return Ue
				},
				L_: function() {
					return tt
				},
				Ly: function() {
					return Rt
				},
				MR: function() {
					return k
				},
				Mj: function() {
					return X
				},
				NB: function() {
					return it
				},
				Oe: function() {
					return _t
				},
				Or: function() {
					return q
				},
				P5: function() {
					return ft
				},
				PE: function() {
					return Le
				},
				Pd: function() {
					return Pt
				},
				Pk: function() {
					return Se
				},
				Pp: function() {
					return nt
				},
				Q1: function() {
					return b
				},
				Qr: function() {
					return Fe
				},
				Qv: function() {
					return Ie
				},
				Rp: function() {
					return ut
				},
				S7: function() {
					return Ot
				},
				Sh: function() {
					return je
				},
				Sl: function() {
					return Bt
				},
				TZ: function() {
					return N
				},
				Tg: function() {
					return ve
				},
				Tp: function() {
					return ot
				},
				Uy: function() {
					return It
				},
				Vw: function() {
					return j
				},
				W3: function() {
					return Y
				},
				WR: function() {
					return Ct
				},
				WX: function() {
					return pe
				},
				XF: function() {
					return ht
				},
				Xb: function() {
					return V
				},
				Zs: function() {
					return Ye
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
					return T
				},
				cE: function() {
					return De
				},
				dh: function() {
					return mt
				},
				fE: function() {
					return ze
				},
				g7: function() {
					return ye
				},
				hO: function() {
					return gt
				},
				hV: function() {
					return Dt
				},
				hk: function() {
					return O
				},
				hr: function() {
					return W
				},
				it: function() {
					return Xe
				},
				j3: function() {
					return Ve
				},
				jN: function() {
					return He
				},
				jo: function() {
					return bt
				},
				k3: function() {
					return Lt
				},
				m8: function() {
					return le
				},
				nm: function() {
					return Qe
				},
				oW: function() {
					return se
				},
				pH: function() {
					return x
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
					return vt
				},
				sg: function() {
					return rt
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
					return at
				},
				vc: function() {
					return ke
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				i = t("../../../../node_modules/moment/moment.js"),
				l = t.n(i),
				c = t("../../../common/util/types/src/api/domain.ts"),
				g = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				s = t("../react/utils/url.ts"),
				m = t("../react/pages/home/domain-registration/config.ts"),
				f = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function a(p) {
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

			function h(p) {
				return p.filter(A => A.registrar.toLowerCase() === "godaddy")
			}
			const I = "MMM D, YYYY";

			function O(p, A, ne, he) {
				var Me, xe, We, qe, Et, et, Be, Ut, wt, Mt, jt, xt;
				const Ge = p[A.name],
					Gt = () => Tt(A.name) ? l()(A.expires_at).add(2, "years").format(I) : l()(A.expires_at).add(1, "year").format(I);
				return a({
					name: A.name,
					zone: Ge,
					entitlements: ne,
					registryCheck: he,
					nameservers: A.name_servers,
					isAvailable: A.available,
					lastKnownStatus: A.last_known_status,
					authCode: A.auth_code,
					isEnterpriseZone: (Ge == null || (Me = Ge.plan) === null || Me === void 0 ? void 0 : Me.legacy_id) === "enterprise",
					isActiveZone: (Ge == null ? void 0 : Ge.status) === "active",
					corResponsesPending: A.cor_responses_pending,
					isCorLocked: A.cor_locked,
					corLockedUntil: A.cor_locked_until ? l()(A.cor_locked_until).format(I) : null,
					isFullZone: (Ge == null ? void 0 : Ge.type) == n.xd.Full,
					isLocked: A.locked,
					registrar: A.current_registrar || m.JM,
					zoneId: Ge == null ? void 0 : Ge.id,
					currentExpiration: l()(A.expires_at).format(I),
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
						[n.l2.Administrator]: (xe = A.contacts) === null || xe === void 0 || (We = xe.administrator) === null || We === void 0 ? void 0 : We.id,
						[n.l2.Billing]: (qe = A.contacts) === null || qe === void 0 || (Et = qe.billing) === null || Et === void 0 ? void 0 : Et.id,
						[n.l2.Registrant]: (et = A.contacts) === null || et === void 0 || (Be = et.registrant) === null || Be === void 0 ? void 0 : Be.id,
						[n.l2.Technical]: (Ut = A.contacts) === null || Ut === void 0 || (wt = Ut.technical) === null || wt === void 0 ? void 0 : wt.id
					},
					landing: A.landing,
					privacy: A.privacy,
					whois: A.whois,
					emailVerified: A.email_verified,
					materialChanges: M(A.material_changes),
					corChanges: A.cor_changes ? B(Object.assign(a({}, w), A.cor_changes)) : {},
					registryStatuses: A.registry_statuses ? A.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Mt = A.domain_protection_services) === null || Mt === void 0 ? void 0 : Mt.status
					},
					deletion: {
						isDeletable: A == null || (jt = A.deletion) === null || jt === void 0 ? void 0 : jt.is_deletable
					},
					premiumType: A == null ? void 0 : A.premium_type,
					fees: A == null ? void 0 : A.fees
				}, A.domain_move && {
					domainMove: {
						ineligibilityReasons: (xt = A.domain_move) === null || xt === void 0 ? void 0 : xt.ineligibility_reasons
					}
				}, A.actionable_metadata && {
					actionableMetadata: C(A.actionable_metadata)
				}, A.policies && {
					policies: a({}, A.policies.suspension && {
						suspension: {
							parked: A.policies.suspension.parked,
							parkingReason: A.policies.suspension.parking_reason,
							paymentExpired: A.policies.suspension.payment_expired
						}
					})
				})
			}

			function C(p) {
				return p.map(A => ({
					accountContext: A.account_context,
					createdAt: A.created_at,
					expiresAt: A.expires_at,
					sentAt: A.sent_at,
					status: A.status,
					type: A.type
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

			function y(p) {
				let A = p.extensions;
				(A == null ? void 0 : A.application_purpose) && (A == null ? void 0 : A.nexus_category) && (p.extensions = {
					nexusCategory: A.nexus_category,
					applicationPurpose: A.application_purpose
				});
				let ne = a({}, typeof p.id == "string" ? {
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

			function M(p) {
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
						xe = ne[Me];
					A.push(xe)
				}
				return A
			}
			const S = p => {
				if (!p) return null;
				let A = p;
				return p.includes("C31") && (A = "C31"), p.includes("C32") && (A = "C32"), A
			};

			function B(p) {
				return a({}, typeof p.id == "string" ? {
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

			function P(p = {}) {
				const A = {
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
					transferConditions: a({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, p.transferConditions || {}),
					transferIn: a({
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

			function D(p) {
				const A = m.Py.concat(m.ui).reduce((ne, he) => a({}, ne, {
					[he]: []
				}), {});
				return p.forEach(ne => {
					let he = L(ne.registrar);
					he in A || (he = m.ui), rt(ne.name) && (he = "uk"), A[he].push(ne)
				}), Object.keys(A).sort((ne, he) => ne.localeCompare(he)).map(ne => ({
					registrar: ne,
					domains: A[ne]
				})).filter(ne => ne.domains.length > 0)
			}

			function L(p) {
				return p == null ? void 0 : p.toLowerCase().replace(/\s|,|\./g, "")
			}

			function j(p) {
				if (!p || !p.registrar) return "unknown";
				if (rt(p.name)) return "uk";
				const A = L(p.registrar);
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
				return (A = p.registryStatuses) === null || A === void 0 || A.some(xe => {
					ne.includes(xe) && (Me = xe, he = !0)
				}), [he, Me]
			}

			function le(p, A = !1) {
				if (!p) return [!1, f.keys.cannot_transfer_default];
				if (p.zone.status !== "active") return [!1, f.keys.cannot_transfer_zone_not_active];
				if (!p.isFullZone && !me(p)) return [!1, f.keys.cannot_transfer_zone_not_eligible];
				if (p.registrar === "Cloudflare") return [!1, f.keys.cannot_transfer_domain_on_cf];
				if (p.isAvailable) return [!1, f.keys.cannot_transfer_domain_available];
				if (!p.transferConditions) return [!1, f.keys.cannot_transfer_domain_transfer_conditions];
				if (!A && It(p == null ? void 0 : p.premiumType)) return [!1, f.keys.cannot_transfer_domain_premium];
				if (x(p)) return [!1, f.keys.cannot_transfer_domain_transfer_in_progress];
				let ne;
				for (ne in p.transferConditions)
					if (ne !== "not_premium" && !p.transferConditions[ne]) return [!1, f.keys.cannot_transfer_domain_transfer_conditions];
				if (re(p.name)) return [!1, f.keys.cannot_transfer_domain_tld_not_supported];
				const [he, Me] = ce(p);
				return he && Me ? [!1, f.keys.cannot_transfer_domain_registry_status[Me]] : [!0, ""]
			}

			function x(p) {
				var A, ne;
				return !!p.transferIn && !((A = p.transferConditions) === null || A === void 0 ? void 0 : A.not_started) && !!(rt(p.name) || ((ne = p.registryStatuses) === null || ne === void 0 ? void 0 : ne.includes(n.rj.PENDING_TRANSFER)))
			}

			function $(p) {
				return !!p.registrar && !!p.currentExpiration
			}

			function U(p, A = !1) {
				const [ne] = le(p, A);
				return $(p) ? de(p) ? n.M5.InProgressOrOnCF : ne ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function T(p) {
				return p.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(p.transferIn.enter_auth_code) || !1
			}

			function k(p) {
				return p.registrar === "Cloudflare"
			}

			function Z(p) {
				return !!(p == null ? void 0 : p.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function X(p) {
				return !!(p == null ? void 0 : p.includes(n.rj.PENDING_TRANSFER))
			}
			const ae = "Invalid date";

			function q(p) {
				return p.newExpiration === ae ? "Unavailable" : p.newExpiration
			}

			function N(p) {
				return p.currentExpiration === ae ? "Unavailable" : p.currentExpiration
			}

			function K(p) {
				return p.substring(p.indexOf("."))
			}

			function V(p = "") {
				return p.indexOf(".") !== -1 ? p.substring(0, p.indexOf(".")) : p
			}

			function W(p) {
				return p.map(A => A.name).map(A => K(A)).filter((A, ne, he) => !he.includes(A, ne + 1))
			}

			function ee(p) {
				if (m.no) return [!0, ""];
				if (!k(p)) return [!1, n.ok.NotOnCF];
				if (p.isCorLocked) return [!1, p.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (p.lastTransferredAt) {
					const A = l()(p.lastTransferredAt),
						ne = l().duration(l()().diff(A)).as("days"),
						he = rt(p.name);
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
				return ye(p) || k(p)
			}

			function _e(p) {
				return !ye(p) && k(p)
			}

			function ye(p) {
				return !p || p.lastKnownStatus === "pendingTransfer" || p.lastKnownStatus === "transferFOAPending" || !k(p) && p.transferConditions && !p.transferConditions.not_started || !1
			}

			function Le(p) {
				return !(re(p.name) || p.transferConditions && !p.transferConditions.supported_tld)
			}

			function Ie(p) {
				return (p == null ? void 0 : p.includes("/")) ? !0 : p.split("").some(A => A.charCodeAt(0) > 123)
			}

			function Se(p) {
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

			function ke(p) {
				return l()(p.paymentExpiresAt).isBefore(l()())
			}

			function He(p) {
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

			function Ye(p) {
				return l()(p).add(40, "days")
			}

			function tt(p) {
				const A = p.paymentExpiresAt || p.payment_expires_at,
					ne = Ye(A);
				return l()().isBetween(A, ne)
			}

			function ze(p) {
				var A;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (A = p.registryStatuses) === null || A === void 0 ? void 0 : A.includes(n.rj.REDEMPTION_PERIOD)
			}

			function mt(p) {
				var A;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (A = p.registryStatuses) === null || A === void 0 ? void 0 : A.includes(n.rj.PENDING_DELETE)
			}

			function nt(p) {
				return [".us"].includes(p)
			}

			function Xe(p) {
				return [".us"].includes(p)
			}

			function gt(p) {
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

			function Ue(p, A, ne) {
				return A[A.length - 1][ne] === p[ne]
			}

			function Fe(p) {
				return Boolean(Object.keys(p).length === 0)
			}

			function Re(p) {
				return l()().add(p, "year").format(I)
			}

			function Je({
				accountName: p
			}) {
				var A;
				const ne = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((A = p.toLowerCase().match(ne)) === null || A === void 0 ? void 0 : A[0]) || ""
			}

			function at(p) {
				return !!p.match(g.default.email)
			}

			function ot(p) {
				return p === c.W7.PENDING_UPDATE
			}

			function st(p) {
				return p ? Object.values(c.wR).filter(A => A !== c.wR.OFFBOARDED).includes(p) : !1
			}

			function vt(p) {
				return p ? [c.wR.LOCKED, c.wR.ONBOARDED, c.wR.ONBOARDING_INITIATED, c.wR.PENDING_REGISTRY_LOCK, c.wR.PENDING_REGISTRY_UNLOCK, c.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function yt(p) {
				return p ? c.wR.UNLOCKED === p : !1
			}

			function ct(p) {
				return p ? c.wR.LOCKED === p : !1
			}

			function Ne(p) {
				return p ? c.wR.PENDING_REGISTRY_LOCK === p : !1
			}

			function Te(p) {
				return p ? [c.wR.PENDING_REGISTRY_UNLOCK, c.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function Ke(p) {
				var A;
				return !1
			}

			function Ct(p) {
				var A;
				return !1
			}

			function lt(p) {
				var A;
				return !1
			}

			function ht(p) {
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
				return ne ? f.keys.protection_status[ne] : f.keys.protection_status.unknown
			}

			function Oe(p) {
				return ["com", "net"].includes(p)
			}

			function we(p) {
				const A = (0, s.pu)(p);
				return Oe(A) ? c.wR.PENDING_REGISTRY_LOCK : c.wR.LOCKED
			}

			function je(p) {
				return (0, s.pu)(p) === "co" ? 5 : 10
			}

			function Qe(p, A) {
				return A ? 1 : (0, s.pu)(p) === "co" ? 5 : (0, s.pu)(p) === "org" ? 1 : 10
			}

			function rt(p) {
				return (0, s.pu)(p) === "uk"
			}

			function De(p) {
				return (0, s.pu)(p) === "us"
			}

			function Tt(p) {
				return (0, s.pu)(p) === "ai"
			}

			function ut(p) {
				return l()(p).isValid()
			}

			function Rt(p) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(p)
			}

			function ft(p) {
				return !!(p == null ? void 0 : p.id)
			}

			function it(p) {
				return p ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(p) : !1
			}

			function Pt(p) {
				return p ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(p) : !1
			}

			function Dt(p) {
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

			function kt(p) {
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

			function Ve(p) {
				var A, ne;
				return Ot(p) && ((A = p.policies) === null || A === void 0 || (ne = A.suspension) === null || ne === void 0 ? void 0 : ne.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function Lt(p) {
				var A, ne;
				return Ot(p) && ((A = p.policies) === null || A === void 0 || (ne = A.suspension) === null || ne === void 0 ? void 0 : ne.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function Bt(p) {
				var A;
				return !((A = p.domainMove) === null || A === void 0 ? void 0 : A.ineligibilityReasons.length)
			}

			function _t(p) {
				var A, ne;
				return !!((A = p.domainMove) === null || A === void 0 || (ne = A.ineligibilityReasons) === null || ne === void 0 ? void 0 : ne.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function St(p) {
				var A;
				return (A = p.actionableMetadata) === null || A === void 0 ? void 0 : A.find(ne => ne.type === n.wg.DOMAIN_MOVE)
			}

			function bt(p) {
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
		"../react/pages/home/domain-registration/config.ts": function(z, v, t) {
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
					return i
				},
				Pf: function() {
					return d
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
					return c
				},
				jk: function() {
					return _e
				},
				no: function() {
					return f
				},
				uY: function() {
					return s
				},
				ui: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../flags.ts");
			const i = "Unknown",
				l = "unknown",
				c = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				g = Object.keys(c),
				s = !0,
				m = (0, o.J8)("registrar_mock_transfer_out") || !1,
				f = (0, o.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				a = "cf_registrar.enabled",
				r = "@abcABC1234567890123456",
				d = [".us"],
				u = [".travel", ".us", ".ong", ".ngo"],
				_ = (0, e.BC)`/${"accountId"}`,
				h = (0, e.BC)`${_}/add-site`,
				I = (0, e.BC)`${_}/registrar`,
				O = (0, e.BC)`${I}/domains`,
				C = (0, e.BC)`${I}/action-center`,
				w = (0, e.BC)`${I}/domain/${"zoneName"}`,
				E = (0, e.BC)`${w}/configuration`,
				y = (0, e.BC)`${w}/contacts`,
				M = (0, e.BC)`${I}/pricing`,
				S = (0, e.BC)`${I}/protection`,
				B = (0, e.BC)`${I}/register`,
				P = (0, e.BC)`${B}/checkout`,
				b = (0, e.BC)`${B}/checkout/${"token"}`,
				D = (0, e.BC)`${B}/success`,
				L = (0, e.BC)`${I}/tlds`,
				j = (0, e.BC)`${I}/transfer`,
				Q = (0, e.BC)`${I}/transfer/${"zoneName"}`,
				re = (0, e.BC)`/registrar/accounts/verify_email`,
				me = (0, e.BC)`/registrar/domains/verify_email`,
				ce = (0, e.BC)`/sign-up/registrar`,
				le = (0, e.BC)`${I}/verify-email`,
				x = (0, e.BC)`${_}/${"zoneName"}`,
				$ = (0, e.BC)`${_}/domains`,
				U = (0, e.BC)`${$}/action-center`,
				T = (0, e.BC)`${$}/${"zoneName"}`,
				k = (0, e.BC)`${T}/configuration`,
				Z = (0, e.BC)`${T}/contacts`,
				X = (0, e.BC)`${$}/pricing`,
				ae = (0, e.BC)`${$}/protection`,
				q = (0, e.BC)`${$}/register`,
				N = (0, e.BC)`${q}/checkout`,
				K = (0, e.BC)`${q}/checkout/${"token"}`,
				V = (0, e.BC)`${q}/success`,
				W = (0, e.BC)`${$}/tlds`,
				ee = (0, e.BC)`${$}/transfer`,
				pe = (0, e.BC)`${$}/transfer/${"zoneName"}`,
				de = (0, e.BC)`${$}/verify-email`,
				_e = {
					addSite: h,
					domains: O,
					domainsActionCenter: C,
					domainsDomain: w,
					domainsDomainConfiguration: E,
					domainsDomainContacts: y,
					domainsPricing: M,
					domainsProtection: S,
					domainsRegister: B,
					domainsRegisterCheckout: P,
					domainsRegisterCheckoutToken: b,
					domainsRegisterSuccess: D,
					domainsTlds: L,
					domainsTransfer: j,
					domainsTransferZone: Q,
					registrar: I,
					registrarAccountsVerifyEmail: re,
					registrarDomainsVerifyEmail: me,
					signup: ce,
					verifyEmail: le,
					zone: x
				},
				ye = {
					LEGACY_domains: $,
					LEGACY_domainsActionCenter: U,
					LEGACY_domainsDomain: T,
					LEGACY_domainsDomainConfiguration: k,
					LEGACY_domainsDomainContacts: Z,
					LEGACY_domainsPricing: X,
					LEGACY_domainsProtection: ae,
					LEGACY_domainsRegister: q,
					LEGACY_domainsRegisterCheckout: N,
					LEGACY_domainsRegisterCheckoutToken: K,
					LEGACY_domainsRegisterSuccess: V,
					LEGACY_domainsTlds: W,
					LEGACY_domainsTransfer: ee,
					LEGACY_domainsTransferZone: pe,
					LEGACY_verifyEmail: de
				},
				Le = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				HO: function() {
					return s
				},
				NW: function() {
					return m
				},
				ZQ: function() {
					return l
				},
				b_: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");
			const i = f => {
					const n = f && f.accountFlags && f.accountFlags.data && f.accountFlags.data.registrar && f.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(a => a.trim()) : []
				},
				l = f => {
					var n, a, r;
					return ((n = f.accountFlags) === null || n === void 0 || (a = n.data) === null || a === void 0 || (r = a.registrar) === null || r === void 0 ? void 0 : r["registrar-managed"]) || !1
				},
				c = f => f.account ? f.account.email : "",
				g = f => !1,
				s = f => g(f) && (0, e.oJ)((0, e.Zu)(f)),
				m = f => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: a
					} = f.registrar.registrations;
					return n && !(a.accepted_date || a.id || a.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				J: function() {
					return a
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				i = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(i),
				c = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function g(r) {
				for (var d = 1; d < arguments.length; d++) {
					var u = arguments[d] != null ? Object(arguments[d]) : {},
						_ = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(u).filter(function(h) {
						return Object.getOwnPropertyDescriptor(u, h).enumerable
					})), _.forEach(function(h) {
						s(r, h, u[h])
					})
				}
				return r
			}

			function s(r, d, u) {
				return d = m(d), d in r ? Object.defineProperty(r, d, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[d] = u, r
			}

			function m(r) {
				var d = f(r, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function f(r, d) {
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

			function a(r, d, u) {
				if (!(d == null ? void 0 : d.name)) return null;
				l().sendEvent(r, g({
					domain: {
						name: d.name,
						premium: (0, c.Uy)(d == null ? void 0 : d.premiumType),
						paymentExpiresAt: o()(d == null ? void 0 : d.paymentExpiresAt).format()
					},
					category: "registrar"
				}, u))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				HX: function() {
					return g
				},
				Re: function() {
					return I
				},
				Rh: function() {
					return u
				},
				hX: function() {
					return r
				},
				s_: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e),
				i = t("webpack/sharing/consume/default/react/react"),
				l = t.n(i),
				c = t("../react/utils/translator.tsx");
			let g = function(O) {
				return O.UNKNOWN = "unknown", O.WORKERS = "workers", O.ACCESS_APPS = "access_apps", O.ACCESS_IDP = "access_ipd", O
			}({});
			const s = [{
				value: g.WORKERS,
				label_i18n: "policy.granular_resources.type.workers",
				scopeKeyPrefix: "com.cloudflare.edge.worker.script",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: g.ACCESS_APPS,
				label_i18n: "policy.granular_resources.type.access_apps",
				scopeKeyPrefix: "com.cloudflare.edge.access.app",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: g.ACCESS_IDP,
				label_i18n: "policy.granular_resources.type.access_idp",
				scopeKeyPrefix: "com.cloudflare.edge.access.identity-provider",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}];

			function m(O) {
				return {
					key: "com.cloudflare.edge.worker.script." + O.id,
					name: O.name + (O.environment ? ` (${O.environment})` : ""),
					type: g.WORKERS
				}
			}

			function f(O) {
				const C = O;
				return {
					key: "com.cloudflare.edge.access.app." + C.id,
					name: C.name,
					type: g.ACCESS_APPS
				}
			}
			const n = {
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

			function a(O) {
				const C = O,
					w = n[C.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + C.id,
					name: `${w||"Unknown Type"}${C.name?" - "+C.name:""}`,
					type: g.ACCESS_IDP
				}
			}
			const r = async (O, C, w) => C == g.WORKERS ? (await d(`/accounts/${O}/workers/scripts-search?name=${w}&perPage=10`)).body.result.map(E => ({
				id: E.id,
				name: E.service_name || E.script_name,
				environment: E.environment_name
			})).map(m) : C == g.ACCESS_APPS ? (await d(`/accounts/${O}/access/apps?name=${w}`)).body.result.map(f) : C == g.ACCESS_IDP ? (await d(`/accounts/${O}/access/identity_providers`)).body.result.map(a) : [];
			async function d(O) {
				try {
					return await (0, e.get)(O, {
						hideErrorAlert: !0
					})
				} catch (E) {
					var C, w;
					throw ((C = E.body) === null || C === void 0 ? void 0 : C.errors) ? E.body.errors[0].message : E.text ? E.text : ((w = E.response) === null || w === void 0 ? void 0 : w.statusText) ? E.response.statusText : "Unexpected error response"
				}
			}
			const u = async (O, C) => {
				const w = C.split("."),
					E = w.pop(),
					y = w.join(".");
				let M;
				switch (y) {
					case "com.cloudflare.edge.worker.script":
						const S = (await d(`/accounts/${O}/workers/scripts-search/${E}`)).body.result;
						return m({
							id: S.id,
							name: S.service_name || S.script_name,
							environment: S.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return M = await d(`/accounts/${O}/access/identity_providers/${E}`), a(M.body.result);
					case "com.cloudflare.edge.access.app":
						return M = await d(`/accounts/${O}/access/apps/${E}`), f(M.body.result)
				}
			}, _ = {
				loading: !0,
				isDisabled: !0
			}, h = () => "production";

			function I(O) {
				const [C, w] = (0, i.useState)(!0), [E, y] = (0, i.useState)(s.map(M => {
					const S = M.scopeKeyPrefix.startsWith("com.cloudflare.edge.access.");
					return {
						value: M.value,
						label: (0, c.ZP)(M.label_i18n),
						state: S ? _ : {
							loading: !1,
							isDisabled: !1
						}
					}
				}));
				return (0, i.useEffect)(() => {
					(async () => {
						try {
							await r(O, g.ACCESS_APPS, ""), _.isDisabled = !1
						} catch (M) {
							M.startsWith("access.api.error.not_enabled") ? _.disableInfo = (0, c.ZP)("policy.granular_resources.type.access.not_enabled") : _.error = M
						}
						_.loading = !1, y([...E])
					})()
				}, []), (0, i.useEffect)(() => {
					const M = E.find(S => S.state.loading);
					w(!!M)
				}, [E]), {
					types: E,
					isLoading: C
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Ey: function() {
					return s
				},
				F4: function() {
					return u
				},
				Fq: function() {
					return I
				},
				Go: function() {
					return a
				},
				Lc: function() {
					return E
				},
				Np: function() {
					return f
				},
				Rl: function() {
					return n
				},
				Sb: function() {
					return r
				},
				Sw: function() {
					return w
				},
				Sz: function() {
					return C
				},
				Ti: function() {
					return y
				},
				Uw: function() {
					return h
				},
				Zl: function() {
					return _
				},
				jk: function() {
					return O
				},
				r6: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				i = (0, e.BC)`${o}/members`,
				l = (0, e.BC)`${i}/invite`,
				c = (0, e.BC)`${i}/invite/${"memberId"}`,
				g = (0, e.BC)`${i}/add-policy/${"memberId"}`,
				s = "com.cloudflare.api.account",
				f = s + "." + "zone",
				n = f + ".",
				a = 100,
				r = 200,
				d = 5,
				u = 300,
				_ = "INVITE_TOAST",
				h = "00000000000000000000000000000000",
				I = "usergroups-ui",
				O = {
					account: o,
					members: i,
					inviteMembers: l,
					editMember: c,
					addPolicy: g
				},
				C = {
					allow: "allow",
					deny: "deny"
				},
				w = {
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
				y = {
					accountId: "",
					effect: C.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				AX: function() {
					return C
				},
				Co: function() {
					return I
				},
				JP: function() {
					return O
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
					return f
				},
				rC: function() {
					return M
				},
				vq: function() {
					return y
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				o = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				i = t("../react/pages/home/members/constants.ts");

			function l(S) {
				for (var B = 1; B < arguments.length; B++) {
					var P = arguments[B] != null ? Object(arguments[B]) : {},
						b = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(P).filter(function(D) {
						return Object.getOwnPropertyDescriptor(P, D).enumerable
					})), b.forEach(function(D) {
						c(S, D, P[D])
					})
				}
				return S
			}

			function c(S, B, P) {
				return B = g(B), B in S ? Object.defineProperty(S, B, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[B] = P, S
			}

			function g(S) {
				var B = s(S, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function s(S, B) {
				if (typeof S != "object" || S === null) return S;
				var P = S[Symbol.toPrimitive];
				if (P !== void 0) {
					var b = P.call(S, B || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(S)
			}
			const m = () => l({}, i.Ti),
				f = () => l({}, i.Lc, {
					scopes: [m()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = S => S.map(B => ({
					scope: {
						key: B,
						objects: [{
							key: "*"
						}]
					}
				})),
				a = (S, B, P) => {
					var b;
					let D = [],
						L = [];
					const j = [],
						Q = [];
					S.scopes.forEach(ce => {
						if (ce.mode === i.Sw.all) P ? D.push({
							id: P
						}) : D.push({
							scope: {
								key: `com.cloudflare.api.account.${B}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (ce.mode === i.Sw.domain_group) {
							const x = {
								id: ce.resourceGroupId
							};
							ce.effect === i.Sz.allow ? D.push(x) : L.push(x)
						} else if (ce.mode === i.Sw.zone) {
							const x = `${i.Rl}${ce.zoneId}`;
							ce.effect === i.Sz.allow ? j.push(x) : Q.push(x)
						} else if (ce.mode === i.Sw.granular && ce.granularResourceKey) {
							var le;
							const x = ce.granularProduct,
								U = `${(le=o.s_.find(T=>T.value===x))===null||le===void 0?void 0:le.scopeSubsetOfPrefix}.${B}`;
							D.push({
								scope: {
									key: `${ce.granularResourceKey}`,
									subset_of: [{
										key: `${U}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), j.length && (D = D.concat(n(j))), Q.length && (L = L.concat(n(Q)));
					const re = (b = S.permission_groups) === null || b === void 0 ? void 0 : b.map(ce => ({
							id: ce
						})),
						me = [];
					return me.push({
						access: i.Sz.allow,
						permission_groups: re,
						resource_groups: D
					}), L.length && me.push({
						access: i.Sz.deny,
						permission_groups: re,
						resource_groups: L
					}), me
				},
				r = S => S.map(B => {
					var P;
					return {
						access: B.access,
						permission_groups: B.permission_groups.map(b => ({
							id: b.id
						})),
						resource_groups: (P = B.resource_groups) === null || P === void 0 ? void 0 : P.map(b => ({
							scope: {
								key: b.scope.key,
								objects: b.scope.objects
							},
							id: b.id
						}))
					}
				}),
				d = (S, B, P, b) => {
					const D = S.auto_accept;
					let L = [];
					return L = L.concat(a(S, B, P)), b && (L = L.concat(r(b))), {
						auto_accept: D,
						status: D ? "accepted" : "pending",
						policies: L
					}
				},
				u = S => {
					const B = S.split(".");
					return B[B.length - 1]
				},
				_ = S => {
					var B, P;
					const b = S == null ? void 0 : S.access;
					let D = [],
						L = S == null || (B = S.resource_groups) === null || B === void 0 ? void 0 : B.map(j => {
							var Q;
							const re = h(j);
							if ((j == null || (Q = j.meta) === null || Q === void 0 ? void 0 : Q.editable) === "false") return {
								effect: b,
								mode: i.Sw.all,
								accountId: u(j.id)
							};
							if (re) {
								var me;
								return {
									effect: b,
									mode: i.Sw.granular,
									granularProduct: re.value,
									granularResourceKey: j == null || (me = j.scope) === null || me === void 0 ? void 0 : me.key
								}
							} else if (!j.name) j.scope.key.startsWith(i.Rl) ? D.push({
								key: j.scope.key
							}) : D = D.concat(j.scope.objects);
							else return {
								effect: b,
								mode: i.Sw.domain_group,
								resourceGroupId: u(j.id)
							}
						}).filter(j => j);
					if ((P = D) === null || P === void 0 ? void 0 : P.length) {
						let j = D.map(Q => {
							const re = u(Q.key);
							return {
								effect: b,
								mode: i.Sw.zone,
								zoneId: re
							}
						});
						L = L.length ? j.concat(L) : j
					}
					return L
				},
				h = S => {
					var B, P, b, D;
					const L = S == null || (B = S.scope) === null || B === void 0 ? void 0 : B.key.split(".").slice(0, -1).join("."),
						j = S == null || (P = S.scope) === null || P === void 0 || (b = P.subset_of) === null || b === void 0 || (D = b[0]) === null || D === void 0 ? void 0 : D.key.split(".").slice(0, -1).join(".");
					return o.s_.find(Q => Q.scopeKeyPrefix === L && Q.scopeSubsetOfPrefix === j)
				},
				I = S => {
					if (!(S == null ? void 0 : S.length)) return [];
					const B = [];
					return S.forEach(P => {
						var b;
						(b = P.resource_groups) === null || b === void 0 || b.forEach(D => {
							var L, j;
							((L = D.scope) === null || L === void 0 || (j = L.key) === null || j === void 0 ? void 0 : j.startsWith(i.Rl)) && B.push(u(D.scope.key))
						})
					}), B
				},
				O = S => {
					if (!(S == null ? void 0 : S.length)) return [];
					const B = [];
					return S.forEach(P => {
						var b;
						(b = P.resource_groups) === null || b === void 0 || b.forEach(D => {
							var L, j;
							if (!((L = D.scope) === null || L === void 0 || (j = L.key) === null || j === void 0 ? void 0 : j.startsWith(i.Rl))) {
								var Q;
								const me = (Q = D.scope) === null || Q === void 0 ? void 0 : Q.objects;
								for (let ce = 0; ce < (me == null ? void 0 : me.length) && ce < i.r6; ce++) {
									var re;
									((re = me[ce].key) === null || re === void 0 ? void 0 : re.startsWith(i.Rl)) && B.push(u(me[ce].key))
								}
							}
						})
					}), B
				},
				C = S => {
					var B;
					if (!(S == null ? void 0 : S.length)) return null;
					const P = (B = S[0]) === null || B === void 0 ? void 0 : B.permission_groups.map(j => j.id);
					let b, D;
					S == null || S.forEach(j => {
						j.access === i.Sz.allow && (b = j), j.access === i.Sz.deny && (D = j)
					});
					let L = [];
					return b && (L = _(b)), D && (L = L.concat(_(D))), {
						permission_groups: P,
						scopes: L
					}
				},
				w = "permission-groups-",
				E = new Map,
				y = S => {
					if (!S) return [];
					const B = E.get(S);
					if (B) return B;
					const P = e.E.get(`${w}${S}`);
					return E.set(S, P), P
				},
				M = (S, B) => {
					const P = [];
					for (let b = 0; b < sessionStorage.length; b++) {
						const D = sessionStorage.key(b);
						(D == null ? void 0 : D.startsWith(w)) && P.push(D)
					}
					return P.length >= 5 && e.E.remove(P[0]), e.E.set(`${w}${S}`, B)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(z, v, t) {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(z, v, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
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
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function i(a) {
				for (var r = 1; r < arguments.length; r++) {
					var d = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(d).filter(function(_) {
						return Object.getOwnPropertyDescriptor(d, _).enumerable
					})), u.forEach(function(_) {
						l(a, _, d[_])
					})
				}
				return a
			}

			function l(a, r, d) {
				return r = c(r), r in a ? Object.defineProperty(a, r, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[r] = d, a
			}

			function c(a) {
				var r = g(a, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(a, r) {
				if (typeof a != "object" || a === null) return a;
				var d = a[Symbol.toPrimitive];
				if (d !== void 0) {
					var u = d.call(a, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(a)
			}
			let s = function(a) {
					return a.PURCHASE_WORKERS_PAID = "navigate to workers plan page", a.LIST_CONFIGS = "list hyperdrive configs", a.SEARCH_CONFIGS = "search hyperdrive configs", a.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", a.VIEW_CONFIG_DETAILS = "view hyperdrive config details", a.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", a.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", a.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", a.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", a.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", a.CLICK_QUICK_LINK = "click hyperdrive quick link", a.CLICK_DISCORD = "click hyperdrive discord", a.CLICK_COMMUNITY = "click hyperdrive community", a
				}({}),
				m = function(a) {
					return a[a["connection string"] = 0] = "connection string", a[a.manual = 1] = "manual", a
				}({}),
				f = function(a) {
					return a[a.success = 0] = "success", a[a.failure = 1] = "failure", a
				}({});
			const n = (a, r = {}) => {
				o().sendEvent(a, i({}, r, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/selectors.ts": function(z, v, t) {
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
					return g
				},
				ib: function() {
					return _
				},
				lW: function() {
					return I
				},
				pT: function() {
					return a
				},
				po: function() {
					return d
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts");
			const l = "sourcing_kit_enabled",
				c = "sourcing_kit_waitlist",
				g = "images",
				s = "unified_images_enabled",
				m = "c2pa_polish",
				f = "CloudflareImages",
				n = O => !!(0, o.BF)(O, "images.transformations_enabled"),
				a = O => Boolean((0, o.BF)(O, "images.enabled")),
				r = O => {
					const C = (0, o.BF)(O, "images.storage");
					return typeof C == "number" && C > 0
				},
				d = O => Boolean((0, o.BF)(O, "contract.customer_enabled")),
				u = O => Boolean((0, e.oI)(O, g, l)),
				_ = O => Boolean((0, i.Le)(O, f, l)),
				h = O => Boolean(getAccountFlipperFlag(O, f, s)),
				I = O => Boolean((0, i.Le)(O, f, m))
		},
		"../react/pages/magic/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				GF: function() {
					return d
				},
				H3: function() {
					return s
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
					return I
				},
				Up: function() {
					return l
				},
				W8: function() {
					return f
				},
				Ws: function() {
					return O
				},
				Xg: function() {
					return a
				},
				Y_: function() {
					return r
				},
				_j: function() {
					return i
				},
				a4: function() {
					return u
				},
				jS: function() {
					return h
				},
				rF: function() {
					return g
				},
				rG: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/utils/translator.tsx");
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
				c = C => [{
					value: "low",
					label: C("setting.low")
				}, {
					value: "mid",
					label: C("setting.medium")
				}, {
					value: "high",
					label: C("setting.high")
				}],
				g = C => [{
					value: "request",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				s = C => [{
					value: "unidirectional",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				m = "magic-transit",
				f = "magic-wan",
				n = "gre_tunnel",
				a = "ipsec_tunnel",
				r = "interconnect",
				d = 64,
				u = 1476,
				_ = "mid",
				h = "reply",
				I = C => [{
					value: void 0,
					label: C("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: C("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: C("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				O = C => [{
					value: "all",
					label: C("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: C("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: C("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				_u: function() {
					return o
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
				o = "Magic network monitoring",
				i = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				VZ: function() {
					return l
				},
				lC: function() {
					return i
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
				i = "user journey",
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
		"../react/pages/magic/packet-captures/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				W_: function() {
					return o
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
				o = "Magic packet captures",
				i = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				gb: function() {
					return n
				},
				iP: function() {
					return S
				},
				xL: function() {
					return O
				},
				rD: function() {
					return P
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
					return m
				},
				UA: function() {
					return y
				},
				K5: function() {
					return r
				},
				Ii: function() {
					return w
				},
				PJ: function() {
					return B
				},
				bK: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				c = t("../node_modules/@cloudflare/elements/es/index.js");
			const g = () => o().createElement(s, null, o().createElement("svg", {
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
				s = (0, i.createComponent)(({
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
				m = () => o().createElement(f, null, o().createElement("svg", {
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
				f = (0, i.createComponent)(({
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
				n = () => o().createElement(a, null, o().createElement(c.Ei, {
					alt: "airplane",
					src: l,
					width: "85%"
				})),
				a = (0, i.createComponent)(({
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
				d = (0, i.createComponent)(({
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
				_ = (0, i.createComponent)(({
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
				h = () => o().createElement(I, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				I = (0, i.createComponent)(({
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
				O = () => o().createElement(C, null, o().createElement("svg", {
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
				C = (0, i.createComponent)(({
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
				w = () => o().createElement(E, null, o().createElement("svg", {
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
				y = () => o().createElement(M, null, o().createElement("svg", {
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
				M = (0, i.createComponent)(({
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
				B = () => o().createElement("svg", {
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
				P = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				A2: function() {
					return s
				},
				He: function() {
					return c
				},
				N$: function() {
					return g
				},
				Qq: function() {
					return i
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
				i = "login-apple-jwt",
				l = "cf-test",
				c = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				g = m => [{
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
				s = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				_: function() {
					return i
				},
				c: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let i = function(c) {
				return c.TEMPLATE_SELECTED = "template selected", c.TEMPLATE_PRODUCT_SELECTED = "template product selected", c.TEMPLATE_SAVE_DRAFT = "template save draft", c.TEMPLATE_CANCEL = "template cancel", c.TEMPLATE_DEPLOY = "template deploy", c
			}({});
			const l = (c, g) => o().sendEvent(c, {
				template_name: g
			})
		},
		"../react/pages/pages/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				A: function() {
					return h
				},
				C1: function() {
					return f
				},
				Dp: function() {
					return j
				},
				GF: function() {
					return P
				},
				HD: function() {
					return C
				},
				IK: function() {
					return c
				},
				L7: function() {
					return i
				},
				Li: function() {
					return _
				},
				Ni: function() {
					return M
				},
				OG: function() {
					return le
				},
				QF: function() {
					return me
				},
				QV: function() {
					return y
				},
				Sx: function() {
					return w
				},
				Ub: function() {
					return re
				},
				X3: function() {
					return a
				},
				aP: function() {
					return s
				},
				bA: function() {
					return D
				},
				eO: function() {
					return r
				},
				fH: function() {
					return u
				},
				fQ: function() {
					return I
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
					return O
				},
				ku: function() {
					return L
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
					return B
				},
				zG: function() {
					return S
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-workers-and-pages",
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
				m = 2e3,
				f = 100,
				n = 350,
				a = 1e7,
				r = ["Success:", "Error:", "Failed:"],
				d = 10,
				u = "_headers",
				_ = "_redirects",
				h = "_routes.json",
				I = "_worker.js",
				O = "do-a-barrel-roll",
				C = [u, _, h, I],
				w = 1024 * 1024 * 25,
				E = 1e3,
				y = {
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
				S = 75e3,
				B = 2e5,
				P = 15e4,
				b = 3e3,
				D = 2250,
				L = "workers",
				j = "cloudflare_pages_build_caching",
				Q = 2;
			let re = function(x) {
				return x[x.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", x[x.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", x[x.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", x[x.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", x[x.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", x[x.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", x
			}({});
			const me = 1,
				ce = 2,
				le = 2
		},
		"../react/pages/pages/routes.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Hv: function() {
					return i
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
				l = g => `${g.subdomain}.pages.dev`,
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
		"../react/pages/pipelines/tracking.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				KO: function() {
					return s
				},
				L9: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function i(n) {
				for (var a = 1; a < arguments.length; a++) {
					var r = arguments[a] != null ? Object(arguments[a]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(u) {
						return Object.getOwnPropertyDescriptor(r, u).enumerable
					})), d.forEach(function(u) {
						l(n, u, r[u])
					})
				}
				return n
			}

			function l(n, a, r) {
				return a = c(a), a in n ? Object.defineProperty(n, a, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[a] = r, n
			}

			function c(n) {
				var a = g(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(n, a) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, a || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(n)
			}
			let s = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				m = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const f = (n, a = {}) => {
				o().sendEvent(n, i({}, a, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Hv: function() {
					return i
				},
				Jg: function() {
					return g
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
				l = s => {
					const m = "r2.cloudflarestorage.com";
					switch (s) {
						case "default":
							return m;
						case "eu":
							return `eu.${m}`;
						case "fedramp":
							return `fedramp.${m}`
					}
				},
				c = (s, m) => {
					const f = l(m);
					return `https://${s}.${f}`
				},
				g = (s, m, f) => `${c(s,m)}/${f}`
		},
		"../react/pages/r2/selectors.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts");
			const l = "r2_migrator_waitlist",
				c = "r2migrator",
				g = "r2",
				s = "r2_storage_migrator",
				m = "r2_storage_migrator",
				f = r => getAccountEntitlement(r, "r2.enabled"),
				n = r => Boolean((0, i.Le)(r, s, l)),
				a = r => Boolean(getAccountFlipperFlagsChanges(r, m, c))
		},
		"../react/pages/secrets-store/resources/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Hf: function() {
					return M
				},
				JJ: function() {
					return g
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
					return I
				},
				Q2: function() {
					return B
				},
				QF: function() {
					return h
				},
				RR: function() {
					return C
				},
				T_: function() {
					return S
				},
				Xm: function() {
					return s
				},
				Zl: function() {
					return P
				},
				dv: function() {
					return c
				},
				fp: function() {
					return a
				},
				jx: function() {
					return y
				},
				nQ: function() {
					return d
				},
				px: function() {
					return O
				},
				tP: function() {
					return i
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
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				o = t("../../../../node_modules/yup/es/index.js");
			const i = "secrets-store-account-level",
				l = "https://developers.cloudflare.com/secrets-store/",
				c = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				g = 1,
				s = 10,
				m = 100;
			let f = function(L) {
					return L.NAME = "name", L
				}({}),
				n = function(L) {
					return L.NAME = "name", L
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
					autoClearQs: !0
				}
			};
			let r = function(L) {
					return L.NAME = "name", L.COMMENT = "comment", L.TAGS = "tags", L.SERVICES = "services", L.STATUS = "status", L
				}({}),
				d = function(L) {
					return L.PENDING = "pending", L.ACTIVE = "active", L.DELETED = "deleted", L
				}({}),
				u = function(L) {
					return L.LIST_SECRETS_STORES = "listSecretsStores", L.LIST_SECRETS = "listSecrets", L.GET_SECRET = "getSecret", L.SECRETS_QUOTA = "secretsQuota", L
				}({}),
				_ = function(L) {
					return L.CREATE = "create", L.EDIT = "edit", L.DUPLICATE = "duplicate", L
				}({}),
				h = function(L) {
					return L.WORKERS = "workers", L
				}({});
			const I = "default_secrets_store";
			let O = function(L) {
				return L.CREATE = "create", L.EDIT = "edit", L.DUPLICATE = "duplicate", L.VIEW = "view", L
			}({});
			const C = "delete_operation",
				w = /^[a-zA-Z0-9_-]+$/,
				E = (L, j, Q, re, me) => o.Ry().shape({
					name: o.Z_().required(L("secrets_store.form.create.errors.name.required")).matches(w, L("secrets_store.form.create.errors.name.invalid_characters")).max(255, L("secrets_store.form.create.errors.name.max")),
					value: o.Z_().test("required-if-creating", L("secrets_store.form.create.errors.value.required"), ce => j || me ? !!ce : !0).max(1024, L("secrets_store.form.create.errors.value.max")),
					comment: o.Z_().max(1024, L("secrets_store.form.create.errors.comment.max")),
					scopes: o.Z_().required().oneOf(Object.values(h), L("secrets_store.form.create.errors.scopes.invalid")),
					labels: o.IX().of(o.Z_())
				}),
				y = (L, j, Q, re, me) => o.Ry().shape({
					secrets: o.IX().of(E(L, j, Q, re, me))
				}),
				M = {
					name: "",
					value: "",
					scopes: h.WORKERS,
					comment: ""
				},
				S = "secrets-store.store.secret";
			let B = function(L) {
				return L.DUPLICATE = "duplicate", L.DEPLOY = "deploy", L
			}({});
			const P = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let b = function(L) {
					return L.CREATE_SECRET = "create secrets store secret", L.EDIT_SECRET = "edit secrets store secret", L.DUPLICATE_SECRET = "duplicate secrets store secret", L.DELETE_SECRET = "delete secrets store secret", L.BIND_SECRET = "open secrets store binding drawer", L
				}({}),
				D = function(L) {
					return L.SECRETS_STORE = "secrets store main", L.WORKERS_BINDING = "workers binding drawer", L
				}({})
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Gk: function() {
					return r
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
					return m
				}
			});
			var e = t("../react/pages/security-center/BlockedContent/types.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function i(d) {
				for (var u = 1; u < arguments.length; u++) {
					var _ = arguments[u] != null ? Object(arguments[u]) : {},
						h = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(_).filter(function(I) {
						return Object.getOwnPropertyDescriptor(_, I).enumerable
					})), h.forEach(function(I) {
						l(d, I, _[I])
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
				var u = g(d, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function g(d, u) {
				if (typeof d != "object" || d === null) return d;
				var _ = d[Symbol.toPrimitive];
				if (_ !== void 0) {
					var h = _.call(d, u || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(d)
			}
			const s = "blocked-content-table-tooltip",
				m = {
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
						direction: o.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(e.GH)
					},
					filters: Object.values(e.GH).reduce((d, u) => i({}, d, {
						[u]: u
					}), {})
				};
			let r = function(d) {
				return d.COPY_URL = "copy blocked content url", d.REQUEST_REVIEW = "request blocked content review", d.ADD_FILTER = "Add filter", d.REMOVE_FILTER = "Remove filter", d
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				$E: function() {
					return e
				},
				GH: function() {
					return i
				},
				M3: function() {
					return o
				},
				fL: function() {
					return l
				}
			});
			let e = function(g) {
					return g.Pending = "pending", g.Active = "active", g
				}({}),
				o = function(g) {
					return g.Active = "active", g.InReview = "in_review", g.Pending = "pending", g.Canceled = "canceled", g
				}({}),
				i = function(g) {
					return g.Domain = "domain", g.Status = "status", g.BlockType = "blockType", g
				}({}),
				l = function(g) {
					return g.EnforcementDate = "enforcementDate", g.BlockType = "blockType", g.Hostname = "hostname", g.Status = "status", g
				}({}),
				c = function(g) {
					return g.Removed = "removed", g.Misclassified = "misclassified", g
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Ev: function() {
					return i
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
			let i = function(l) {
				return l.LOAD_THREAT_EVENTS = "load threat events", l.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", l.THREAT_EVENTS_FILTERS = "threat events filters applied", l.ABUSE_REPORT_BUTTON_CLICK = "clicked abuse report button", l.ABUSE_REPORT_SUBMIT_CLICK = "clicked submit abuse report button", l.ABUSE_REPORT_SUBMIT_FAILED = "abuse report submission failed", l.ABUSE_REPORT_SUBMIT_SUCCESS = "abuse report submitted successfully", l
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				AU: function() {
					return i
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
				l = {
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
		"../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				AS: function() {
					return g
				},
				IK: function() {
					return a
				},
				Ki: function() {
					return i
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
					return s
				}
			});
			var e = t("../react/pages/security/analytics/resources/labels.ts"),
				o = t("../react/common/constants/analytics/botScoreSrc.ts");
			const i = ["block", "challenge", "jschallenge", "managedChallenge"],
				l = ["miss", "expired", "bypass", "dynamic"],
				c = u => Object.fromEntries(Object.entries(u).map(([_, h]) => [h, _])),
				g = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				s = c(g),
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
				f = c(m),
				n = c(o.EG);
			let a = function(u) {
				return u.SAMPLED = "sampled", u.RAW = "raw", u
			}({});
			const r = "security-analytics-log-explorer";
			let d = function(u) {
				return u.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', u.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', u.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', u.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', u.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', u
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Fj: function() {
					return m
				},
				kq: function() {
					return s
				},
				xr: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function i(n) {
				for (var a = 1; a < arguments.length; a++) {
					var r = arguments[a] != null ? Object(arguments[a]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(u) {
						return Object.getOwnPropertyDescriptor(r, u).enumerable
					})), d.forEach(function(u) {
						l(n, u, r[u])
					})
				}
				return n
			}

			function l(n, a, r) {
				return a = c(a), a in n ? Object.defineProperty(n, a, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[a] = r, n
			}

			function c(n) {
				var a = g(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(n, a) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, a || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const m = {
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
					product: r = s.MAIN,
					productName: d,
					additionalData: u
				}) => {
					o().sendEvent(n, i({
						category: a,
						product: r,
						productName: d
					}, u || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Fm: function() {
					return l
				},
				N3: function() {
					return e
				},
				UN: function() {
					return i
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
			const i = "user journey",
				l = "Bots"
		},
		"../react/pages/security/overview/resources/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				AZ: function() {
					return l
				},
				Ht: function() {
					return i
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
			let i = function(c) {
					return c.EXTERNAL_DOCUMENTATION = "external_documentation", c.LINK_TO_MANAGED = "link_to_managed_rules", c.LINK_TO_EVENTS = "link_to_security_events", c.LINK_TO_DDOS = "link_to_ddos", c.LINK_BOT_MGMT = "link_to_bot_mgmt", c.LINK_TO_AI_AUDIT = "link_to_ai_audit", c.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", c.LINK_TO_PAGE_SHIELD = "link_to_page_shield", c.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", c.LINK_TO_SECURITY_EVENTS = "link_to_security_events", c.LINK_TO_IP_RULE = "link_to_ip_rule", c.LINK_TO_CONFIGURATION = "link_to_configuration", c
				}({}),
				l = function(c) {
					return c.LOAD_INSIGHTS = "load overview action items", c.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", c.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", c.CLICK_ACTION_INSIGHT = "click overview action item suggestion", c
				}({})
		},
		"../react/pages/security/page-shield/resources/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				CP: function() {
					return P
				},
				FV: function() {
					return ce
				},
				KH: function() {
					return S
				},
				Ks: function() {
					return U
				},
				Lj: function() {
					return $
				},
				MC: function() {
					return a
				},
				Mq: function() {
					return M
				},
				OV: function() {
					return me
				},
				Oq: function() {
					return B
				},
				QM: function() {
					return E
				},
				SI: function() {
					return x
				},
				SJ: function() {
					return I
				},
				Sk: function() {
					return L
				},
				Ti: function() {
					return T
				},
				Uc: function() {
					return y
				},
				Uq: function() {
					return m
				},
				Uv: function() {
					return re
				},
				V0: function() {
					return f
				},
				VT: function() {
					return u
				},
				YC: function() {
					return j
				},
				j$: function() {
					return O
				},
				qc: function() {
					return h
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
					return w
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				i = t("../react/pages/security/page-shield/resources/types.ts");

			function l(k) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var X = arguments[Z] != null ? Object(arguments[Z]) : {},
						ae = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(X).filter(function(q) {
						return Object.getOwnPropertyDescriptor(X, q).enumerable
					})), ae.forEach(function(q) {
						c(k, q, X[q])
					})
				}
				return k
			}

			function c(k, Z, X) {
				return Z = g(Z), Z in k ? Object.defineProperty(k, Z, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[Z] = X, k
			}

			function g(k) {
				var Z = s(k, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function s(k, Z) {
				if (typeof k != "object" || k === null) return k;
				var X = k[Symbol.toPrimitive];
				if (X !== void 0) {
					var ae = X.call(k, Z || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(k)
			}
			const m = 50,
				f = 9,
				n = "copy script url page shield",
				a = "disable page shield",
				r = "click documentation link",
				d = "enable page shield",
				u = "filter search page shield",
				_ = "filter search view all page shield",
				h = "hover score tooltip page shield",
				I = "open alert modal page shield",
				O = "change pagination page shield",
				C = "close script modal page shield",
				w = "open script modal page shield",
				E = "select alert type page shield",
				y = "sort column page shield",
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
				S = {
					STARTS_WITH: o.Gn.startsWith,
					ENDS_WITH: o.Gn.endsWith,
					EQUALS: o.Gn.equals,
					CONTAINS: o.Gn.contains,
					DOES_NOT_CONTAIN: o.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: o.Gn.in
				},
				B = {
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
				P = l({}, B, {
					urls: l({}, B.urls, {
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
			let D = function(k) {
				return k.SECURITY_THREATS = "Security Threats", k.C2_BOTNET = "C2 & Botnet", k.CRYPTOMINING = "Cryptomining", k.MALWARE = "Malware", k.PHISHING = "Phishing", k.SPYWARE = "Spyware", k.DGA_DOMAINS = "DGA Domains", k.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", k
			}({});
			const L = "https://www.cloudflare.com/plans/enterprise/contact/",
				j = {
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
				Q = {
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
					[i.I1.STYLE]: "firewall.page_shield.policies.table.style",
					[i.I1.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[i.I1.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				re = {
					[i.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[i.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[i.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[i.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[i.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				me = {
					[i.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[i.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
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
				x = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				$ = {
					[i.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[i.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[i.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				U = {
					[i.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[i.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[i.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				T = {
					[i.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[i.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[i.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(z, v, t) {
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
					return w.Xe
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
					return w.k2
				},
				$g: function() {
					return w.$g
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
					return w.I1
				},
				Wq: function() {
					return w.Wq
				},
				jf: function() {
					return w.jf
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
					return w.R$
				},
				pG: function() {
					return h
				},
				Ar: function() {
					return _
				},
				Sk: function() {
					return l.Sk
				},
				gY: function() {
					return I
				},
				SE: function() {
					return c
				},
				m: function() {
					return n
				},
				xP: function() {
					return f
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
					return s
				},
				h3: function() {
					return O
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
					return M
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
					return x
				},
				Yt: function() {
					return T
				},
				ex: function() {
					return U
				},
				E1: function() {
					return $
				},
				e0: function() {
					return ce
				},
				UH: function() {
					return D
				},
				Qt: function() {
					return le
				},
				K$: function() {
					return L
				},
				dm: function() {
					return B
				},
				oK: function() {
					return j
				},
				qZ: function() {
					return k
				},
				_4: function() {
					return ae
				},
				qo: function() {
					return q
				},
				CB: function() {
					return g
				},
				ti: function() {
					return u
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(o),
				l = t("../react/pages/security/page-shield/resources/constants.ts");
			const c = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", W => (i().sendEvent(l.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), W)),
				g = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", W => (i().sendEvent(l.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), W)),
				s = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", W => (i().sendEvent(l.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), W)),
				m = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				f = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", W => (i().sendEvent(l.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), W)),
				n = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				a = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", W => (i().sendEvent(l.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), W)),
				r = (0, e.ZP)("pageShieldPolicies", "get", "/zones/(zoneId)/page_shield/policies").on("success", W => (i().sendEvent(l.FV.VIEW_PAGE_SHIELD_POLICIES, {
					category: "user journey",
					product: "Page shield"
				}), W)),
				d = (0, e.ZP)("pageShieldPolicy", "get", "/zones/(zoneId)/page_shield/policies/(policiesId)"),
				u = (0, e.ZP)("pageShieldPolicy", "put", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", W => (i().sendEvent(l.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "update"
				}), W)),
				_ = (0, e.ZP)("pageShieldPolicy", "delete", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", W => (i().sendEvent(l.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "delete"
				}), W)),
				h = (0, e.ZP)("pageShieldPolicy", "post", "/zones/(zoneId)/page_shield/policies").on("success", W => (i().sendEvent(l.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "create"
				}), W)),
				I = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				O = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var C = t("../react/app/redux/normalizer.js"),
				w = t("../react/pages/security/page-shield/resources/types.ts");
			const E = W => W.pageShield.configuration,
				y = W => {
					var ee;
					return (ee = W.pageShield.configuration.data) === null || ee === void 0 ? void 0 : ee.enabled
				},
				M = W => {
					var ee;
					return (ee = E(W)) === null || ee === void 0 ? void 0 : ee.data
				},
				S = W => W.pageShield.scripts,
				B = W => W.pageShield.script,
				P = W => W.pageShield.connections,
				b = W => W.pageShield.connection,
				D = W => W.pageShield.policies,
				L = W => W.pageShield.policy,
				j = (0, C.P1)("pageShieldScripts", S),
				Q = (0, C.P1)("pageShieldScript", B),
				re = (0, C.P1)("pageShieldConnections", P),
				me = (0, C.P1)("pageShieldConnection", b),
				ce = (0, C.P1)("pageShieldPolicies", D),
				le = (0, C.P1)("pageShieldPolicy", L),
				x = (W, ee) => W === w.Wq.SCRIPT_MONITOR ? j(ee) || [] : re(ee) || [],
				$ = (W, ee) => W === w.Wq.SCRIPT_MONITOR ? S(ee) || [] : P(ee) || [],
				U = (W, ee) => W === w.Wq.SCRIPT_MONITOR ? Q(ee) : me(ee),
				T = W => W.pageShield.domainIntel,
				k = W => W.pageShield.whoIsRecord,
				Z = (W, ee, pe) => {
					var de;
					const _e = Object.values(pe).map(ye => ({
						key: ye,
						label: l.Uv[ye],
						score: W[ye]
					})).filter(ye => ye.score !== void 0 && ye.score <= ee);
					return ee === l.V0 && _e.length === 0 && ((de = W.js_integrity_score) !== null && de !== void 0 ? de : 100) <= ee && _e.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), _e
				},
				X = (W, ee) => Object.values(ee).filter(pe => W[pe] === !0).map(pe => l.OV[pe]),
				ae = W => W === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				q = (W, ee) => W[w.$g.MagecartScore] !== void 0 && W[w.$g.MagecartScore] <= ee || W[w.$g.MalwareScore] !== void 0 && W[w.$g.MalwareScore] <= ee || W[w.$g.CryptominingScore] !== void 0 && W[w.$g.CryptominingScore] <= ee || W.js_integrity_score !== void 0 && W.js_integrity_score <= ee,
				N = ["cdn.jsdelivr.net", "unpkg.com"],
				K = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				V = W => {
					if (W.includes("@latest")) {
						const pe = W.split("@latest");
						if (pe.length != 2) return;
						const de = pe[0].length,
							_e = de + "@latest".length;
						return [de, _e]
					}
					if (!!N.some(pe => W.includes(pe)))
						for (const pe of K) {
							const de = W.match(pe);
							if (!de) continue;
							const _e = de.index;
							if (_e === 0) return null;
							const ye = _e + de[0].length;
							return [_e, ye]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				$g: function() {
					return f
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
					return g
				},
				jf: function() {
					return s
				},
				k2: function() {
					return a
				}
			});

			function e(r) {
				for (var d = 1; d < arguments.length; d++) {
					var u = arguments[d] != null ? Object(arguments[d]) : {},
						_ = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(u).filter(function(h) {
						return Object.getOwnPropertyDescriptor(u, h).enumerable
					})), _.forEach(function(h) {
						o(r, h, u[h])
					})
				}
				return r
			}

			function o(r, d, u) {
				return d = i(d), d in r ? Object.defineProperty(r, d, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[d] = u, r
			}

			function i(r) {
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
			const g = e({}, c, {
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
			let s = function(r) {
					return r.MONITOR = "monitor", r.POLICIES = "policies", r.SETTINGS = "settings", r
				}({}),
				m = function(r) {
					return r.SCRIPT_MONITOR = "script", r.CONNECTION_MONITOR = "connection", r.COOKIE_MONITOR = "cookie", r
				}({}),
				f = function(r) {
					return r.CryptominingScore = "cryptomining_score", r.MalwareScore = "malware_score", r.MagecartScore = "magecart_score", r
				}({}),
				n = function(r) {
					return r.DataflowScore = "dataflow_score", r.ObfuscationScore = "obfuscation_score", r
				}({}),
				a = function(r) {
					return r.DomainMalicious = "domain_reported_malicious", r.UrlMalicious = "url_reported_malicious", r
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				_C: function() {
					return d
				},
				_R: function() {
					return u
				},
				dY: function() {
					return h
				},
				fy: function() {
					return C
				},
				ji: function() {
					return r
				},
				pR: function() {
					return _
				},
				pV: function() {
					return w
				},
				rj: function() {
					return O
				},
				yR: function() {
					return E
				},
				zf: function() {
					return I
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				o = t("../../../common/util/types/src/api/phases/fields.tsx"),
				i = t("webpack/sharing/consume/default/react/react"),
				l = t.n(i),
				c = t("../react/utils/translator.tsx"),
				g = t("../react/pages/security/resources/types.ts"),
				s = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx");

			function m(y) {
				for (var M = 1; M < arguments.length; M++) {
					var S = arguments[M] != null ? Object(arguments[M]) : {},
						B = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(S).filter(function(P) {
						return Object.getOwnPropertyDescriptor(S, P).enumerable
					})), B.forEach(function(P) {
						f(y, P, S[P])
					})
				}
				return y
			}

			function f(y, M, S) {
				return M = n(M), M in y ? Object.defineProperty(y, M, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[M] = S, y
			}

			function n(y) {
				var M = a(y, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function a(y, M) {
				if (typeof y != "object" || y === null) return y;
				var S = y[Symbol.toPrimitive];
				if (S !== void 0) {
					var B = S.call(y, M || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(y)
			}
			const r = 10;
			let d = function(y) {
					return y.MTLS_ACCESS = "mTLS-enforced authentication", y.ZONE_LOCKDOWN = "Zone lockdown", y.USER_AGENT = "User agent blocking", y.EMAIL_VALIDITY = "Disposable email checks", y.IP_BASED = "IP-based rule", y.GEOGRAPHY_BASE = "Geography-based rule", y
				}({}),
				u = function(y) {
					return y.LEAKED_CREDENTIALS = "Leaked Credentials Checks", y
				}({});
			const _ = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				h = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: d.GEOGRAPHY_BASE,
					trackedEvent: _.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: d.IP_BASED,
					trackedEvent: _.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: d.USER_AGENT,
					trackedEvent: _.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: d.ZONE_LOCKDOWN,
					trackedEvent: _.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				I = {
					[g.X.UI_SECTION]: y => ({
						[d.MTLS_ACCESS]: {
							ruleName: d.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${y.account.id}/${y.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[d.ZONE_LOCKDOWN]: {
							ruleName: d.ZONE_LOCKDOWN,
							displayName: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${y.account.id}/configurations/lists`
								}]
							})
						},
						[d.USER_AGENT]: {
							ruleName: d.USER_AGENT,
							displayName: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: l().createElement(c.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${y.account.id}/configurations/lists`
								}]
							})
						},
						[d.EMAIL_VALIDITY]: {
							ruleName: d.EMAIL_VALIDITY,
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
					[g.X.WAF_RULES]: {
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
				O = {
					[g.X.WAF_RULES]: {
						[u.LEAKED_CREDENTIALS]: {
							ruleName: u.LEAKED_CREDENTIALS,
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
						[u.LEAKED_CREDENTIALS]: {
							ruleName: u.LEAKED_CREDENTIALS,
							displayName: l().createElement(c.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: l().createElement(c.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let C = function(y) {
				return y.DISCOVERY = "discovery", y.SEQUENCES = "sequences", y.SCHEMA_VALIDATION = "schema-validation", y.SETTINGS = "settings", y.API_RULES = "api-rules", y.UPGRADE = "upgrade", y
			}({});
			const w = m({}, s.g, {
				[o.df.HttpRequestFirewallManaged]: m({}, s.g[o.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[o.df.HttpRequestFirewallCustom]: m({}, s.g[o.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[o.df.HttpRateLimit]: m({}, s.g[o.df.HttpRateLimit], {
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
			let E = function(y) {
				return y.APP_SEC_MVP = "app-security-navigation-mvp", y
			}({})
		},
		"../react/pages/security/resources/types.ts": function(z, v, t) {
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
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				j: function() {
					return m
				},
				y: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function i(f) {
				for (var n = 1; n < arguments.length; n++) {
					var a = arguments[n] != null ? Object(arguments[n]) : {},
						r = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && r.push.apply(r, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), r.forEach(function(d) {
						l(f, d, a[d])
					})
				}
				return f
			}

			function l(f, n, a) {
				return n = c(n), n in f ? Object.defineProperty(f, n, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[n] = a, f
			}

			function c(f) {
				var n = g(f, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function g(f, n) {
				if (typeof f != "object" || f === null) return f;
				var a = f[Symbol.toPrimitive];
				if (a !== void 0) {
					var r = a.call(f, n || "default");
					if (typeof r != "object") return r;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(f)
			}
			let s = function(f) {
				return f.CLICK_OPT_IN = "click opt in security navigation", f.CLICK_OPT_IN_BUTTON = "click opt in button", f.CLICK_OPT_OUT_BUTTON = "click opt out button", f.CLICK_NEXT_STEP = "click opt in next step", f.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", f.DISPLAY_MODAL = "display opt in modal", f.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", f
			}({});
			const m = (f, n = {}) => {
				o().sendEvent(f, i({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				$y: function() {
					return r
				},
				Ai: function() {
					return m
				},
				BT: function() {
					return c
				},
				F3: function() {
					return d
				},
				JP: function() {
					return i
				},
				O_: function() {
					return f
				},
				X2: function() {
					return l
				},
				YO: function() {
					return u
				},
				_c: function() {
					return _
				},
				je: function() {
					return a
				},
				ll: function() {
					return g
				},
				qD: function() {
					return s
				},
				tw: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const i = async h => {
				var I, O;
				const C = await (0, e.get)(`/zones/${h}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((I = C == null ? void 0 : C.body) === null || I === void 0 || (O = I.result) === null || O === void 0 ? void 0 : O.value) === "enabled"
			}, l = async (h, I) => (await (0, e.post)(`/zones/${h}/content-upload-scan/${I?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), I), c = async h => {
				var I;
				const O = await (0, e.get)(`/zones/${h}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((I = O == null ? void 0 : O.body) === null || I === void 0 ? void 0 : I.result) || []
			}, g = async (h, I) => {
				var O;
				const C = await (0, e.post)(`/zones/${h}/content-upload-scan/payloads`, {
					body: [I]
				});
				return (O = C == null ? void 0 : C.body) === null || O === void 0 ? void 0 : O.result
			}, s = async (h, I) => (await (0, e.del)(`/zones/${h}/content-upload-scan/payloads/${I}`, {
				hideErrorAlert: !0
			}), I), m = async h => {
				var I, O;
				const C = await (0, e.get)(`/zones/${h}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((I = C == null ? void 0 : C.body) === null || I === void 0 || (O = I.result) === null || O === void 0 ? void 0 : O.enabled)
			}, f = async (h, I) => {
				var O, C;
				const w = await (0, e.post)(`/zones/${h}/leaked-credential-checks`, {
					body: {
						enabled: I
					}
				});
				return !!((O = w == null ? void 0 : w.body) === null || O === void 0 || (C = O.result) === null || C === void 0 ? void 0 : C.enabled)
			}, n = async h => {
				var I;
				const O = await (0, e.get)(`/zones/${h}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (I = O == null ? void 0 : O.body) === null || I === void 0 ? void 0 : I.result
			}, a = async (h, I) => {
				var O;
				const C = await (0, e.post)(`/zones/${h}/leaked-credential-checks/detections`, {
					body: I
				});
				return (O = C == null ? void 0 : C.body) === null || O === void 0 ? void 0 : O.result
			}, r = async (h, I) => (await (0, e.del)(`/zones/${h}/leaked-credential-checks/detections/${I}`, {
				hideErrorAlert: !0
			}), I), d = async (h, I) => {
				await (0, e.put)(`/zones/${h}/security-center/securitytxt`, {
					body: I
				})
			}, u = async h => {
				await (0, e.del)(`/zones/${h}/security-center/securitytxt`)
			}, _ = async h => (await (0, e.get)(`/zones/${h}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Xu: function() {
					return u
				},
				Io: function() {
					return M
				},
				FQ: function() {
					return le
				},
				vU: function() {
					return d
				},
				M: function() {
					return h
				},
				d7: function() {
					return _
				},
				Oz: function() {
					return y
				},
				Np: function() {
					return re
				},
				WR: function() {
					return f
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
				i = t("webpack/sharing/consume/default/react/react"),
				l = t("webpack/sharing/consume/default/react-redux/react-redux"),
				c = t("../react/pages/security/settings/resources/index.ts"),
				g = t("../react/common/hooks/useZoneEntitlement.ts"),
				s = t("../../../../node_modules/yup/es/index.js"),
				m = t("../react/utils/translator.tsx");
			const f = () => (0, l.useSelector)(c.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				a = () => !!useZoneEntitlement(n),
				r = () => {
					const {
						t: x
					} = (0, m.QT)(), $ = s.Z_().required(x("common.field_is_required")).max(24, x("labels.apply.form.name.error.max_characters")).matches(c.DG, x("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", x("labels.apply.form.name.error.cf_forbidden"), k => !c.aW.test(k)), U = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: k => s.Ry().shape({
							[c.n5.NAME]: k ? s.Z_() : $,
							[c.n5.DESCRIPTION]: k ? s.Z_().optional() : s.Z_().max(150, x("labels.apply.form.description.error.max_characters"))
						})
					}, T = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[c.N2.NAME]: "",
							[c.N2.SOURCE]: c.W3,
							[c.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => s.Ry().shape({
							[c.N2.NEW_LABEL_NAME]: $
						})
					};
					return {
						LABELS_APPLY_FORM: U,
						EDIT_LABELS_MODAL_FORM: T
					}
				},
				d = ({
					modalHeaderFixedHeight: x = 62,
					modalDefaultPaddings: $ = 16
				} = {}) => {
					const U = (0, i.useRef)(null),
						T = (0, i.useRef)(null),
						[k, Z] = (0, i.useState)(0),
						[X, ae] = (0, i.useState)(0),
						q = `calc(100vh - ${k}px - ${X}px - ${$}px)`,
						[N, K] = (0, i.useState)("");
					return (0, i.useEffect)(() => {
						const V = () => {
							var W, ee, pe, de;
							const _e = U == null || (W = U.current) === null || W === void 0 ? void 0 : W.offsetHeight,
								ye = T == null || (ee = T.current) === null || ee === void 0 ? void 0 : ee.offsetHeight,
								Le = ((pe = _e) !== null && pe !== void 0 ? pe : 0) + x,
								Ie = (de = ye) !== null && de !== void 0 ? de : 0;
							Z(Le), ae(Ie)
						};
						return V(), window.addEventListener("resize", V), () => window.removeEventListener("resize", V)
					}, []), {
						searchTerm: N,
						setSearchTerm: K,
						scrollableSectionMaxHeight: q,
						topMenuRef: U,
						bottomMenuRef: T
					}
				},
				u = x => {
					const $ = f(),
						U = (0, e.useQueryClient)(),
						T = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${x}`,
							queryFn: () => (0, o.JP)(x),
							enabled: $
						}),
						k = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${x}`,
							queryFn: () => (0, o.BT)(x),
							enabled: $ && !!(T == null ? void 0 : T.data)
						}),
						Z = (0, e.useMutation)({
							mutationFn: async ({
								enabled: q
							}) => await (0, o.X2)(x, q),
							onSuccess: q => {
								U.setQueryData([`content-scanning-enabled-${x}`], q)
							}
						}),
						X = (0, e.useMutation)({
							mutationFn: q => (0, o.ll)(x, q),
							onSuccess: q => {
								U.setQueryData([`content-scanning-detections-${x}`], q)
							}
						}),
						ae = (0, e.useMutation)({
							mutationFn: q => (0, o.qD)(x, q),
							onSuccess: q => {
								var N;
								const K = (N = U.getQueryData(`content-scanning-detections-${x}`)) !== null && N !== void 0 ? N : [];
								U.setQueryData([`content-scanning-detections-${x}`], K.filter(({
									id: V
								}) => V !== q))
							}
						});
					return {
						entitled: $,
						loading: T.isLoading || k.isLoading,
						error: T.isError || k.isError,
						enabled: {
							data: T.data,
							isToggling: Z.isLoading,
							toggleEnabled: async q => Z.mutateAsync({
								enabled: q
							})
						},
						detections: {
							data: k.data,
							add: X.mutateAsync,
							delete: ae.mutateAsync,
							loading: X.isLoading || ae.isLoading
						}
					}
				},
				_ = () => {
					const x = (0, l.useSelector)(c.cN),
						$ = (0, l.useSelector)(c.bH),
						U = (0, l.useSelector)(c.P3),
						T = (0, l.useSelector)(c.Ri);
					return {
						hasEditPermission: x,
						isEnabled: U && ($.hasSimilarLeaked || $.hasUsernameAndPasswordLeaked || T)
					}
				},
				h = x => {
					const $ = _(),
						U = (0, e.useQueryClient)(),
						T = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${x}`,
							queryFn: () => (0, o.Ai)(x),
							enabled: !!$.isEnabled,
							retry: 1
						}),
						k = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${x}`,
							queryFn: () => (0, o.tw)(x),
							enabled: !!$.isEnabled && !!(T == null ? void 0 : T.data)
						}),
						Z = (0, e.useMutation)({
							mutationFn: ({
								enabled: q
							}) => (0, o.O_)(x, q),
							onSuccess: q => {
								U.setQueryData([`leaked-credentials-enabled-${x}`], q)
							}
						}),
						X = (0, e.useMutation)({
							mutationFn: async q => await (0, o.je)(x, q),
							onSuccess: q => {
								var N;
								const K = (N = U.getQueryData(`leaked-credentials-detections-${x}`)) !== null && N !== void 0 ? N : [];
								U.setQueryData([`leaked-credentials-detections-${x}`], [...K, q])
							}
						}),
						ae = (0, e.useMutation)({
							mutationFn: q => (0, o.$y)(x, q),
							onSuccess: q => {
								var N;
								const K = (N = U.getQueryData(`leaked-credentials-detections-${x}`)) !== null && N !== void 0 ? N : [];
								U.setQueryData([`leaked-credentials-detections-${x}`], K.filter(({
									id: V
								}) => V !== q))
							}
						});
					return {
						entitled: $.isEnabled,
						hasEditPermissions: $.hasEditPermission,
						loading: T.isLoading || k.isLoading,
						error: T.isError || T.isError,
						enabled: {
							data: T.data,
							isToggling: Z.isLoading,
							toggleEnabled: async q => Z.mutateAsync({
								enabled: q
							})
						},
						detections: {
							data: k.data,
							add: X.mutateAsync,
							delete: ae.mutateAsync,
							loading: X.isLoading || ae.isLoading
						}
					}
				};
			var I = t("../react/common/selectors/zoneSelectors.ts"),
				O = t("../react/common/utils/useQueryCache.ts"),
				C = t("../react/app/redux/index.ts");
			const w = "security-txt",
				E = {
					securityTxt: ({
						zoneId: x
					}) => [w, x]
				},
				y = x => (0, e.useQuery)({
					queryKey: E.securityTxt({
						zoneId: x
					}),
					queryFn: () => (0, o._c)(x),
					select: $ => $.result
				}),
				M = () => {
					const x = (0, C.p4)(I.Cu),
						{
							invalidate: $
						} = (0, O.o)(E.securityTxt({
							zoneId: x
						}));
					return (0, e.useMutation)({
						mutationFn: () => (0, o.YO)(x),
						onSuccess: async () => {
							await $(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				S = x => {
					const {
						invalidate: $
					} = (0, O.o)(E.securityTxt({
						zoneId: x
					}));
					return (0, e.useMutation)({
						mutationFn: U => (0, o.F3)(x, U),
						onSuccess: async () => {
							await $(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var B = t("../../../../node_modules/lodash/isEqual.js"),
				P = t.n(B),
				b = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function D(x) {
				for (var $ = 1; $ < arguments.length; $++) {
					var U = arguments[$] != null ? Object(arguments[$]) : {},
						T = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(U).filter(function(k) {
						return Object.getOwnPropertyDescriptor(U, k).enumerable
					})), T.forEach(function(k) {
						L(x, k, U[k])
					})
				}
				return x
			}

			function L(x, $, U) {
				return $ = j($), $ in x ? Object.defineProperty(x, $, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[$] = U, x
			}

			function j(x) {
				var $ = Q(x, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function Q(x, $) {
				if (typeof x != "object" || x === null) return x;
				var U = x[Symbol.toPrimitive];
				if (U !== void 0) {
					var T = U.call(x, $ || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(x)
			}
			const re = x => {
					const {
						queryKey: $,
						zoneId: U
					} = (0, b.hL)(x), {
						isLoading: T,
						isError: k,
						isSuccess: Z,
						data: X,
						refetch: ae,
						isRefetching: q
					} = (0, e.useQuery)({
						queryKey: $,
						queryFn: () => b.Mi.getLabels(D({
							zoneId: U
						}, x)),
						onSuccess: () => {
							var N;
							const K = x == null || (N = x.filters) === null || N === void 0 ? void 0 : N.source;
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
						isLoading: T,
						isError: k,
						isSuccess: Z,
						refetch: ae,
						isRefetching: q
					}
				},
				me = ({
					labels: x,
					preselectedLabels: $
				}) => {
					const {
						USER: U,
						MANAGED: T
					} = c.LABEL_SOURCES, [k, Z] = (0, i.useState)({
						[U]: [],
						[T]: []
					}), [X, ae] = (0, i.useState)(new Set), q = X.size > 0, [N, K] = (0, i.useState)(!1), V = de => {
						ae(_e => {
							const ye = new Set(_e);
							return ye.has(de.name) ? ye.delete(de.name) : ye.add(de.name), ye
						})
					}, W = de => X.has(de.name), ee = (de, _e) => {
						const ye = W(de) ? 1 : 0;
						return (W(_e) ? 1 : 0) - ye
					}, pe = de => {
						Z(_e => ({
							[U]: [...de ? de[U] : _e[U]].sort(ee),
							[T]: [...de ? de[T] : _e[T]].sort(ee)
						}))
					};
					return (0, i.useEffect)(() => {
						if (x && !N) {
							if ($) {
								const de = new Set;
								x.forEach(_e => {
									$.some(ye => P()(ye, _e)) && de.add(_e.name)
								}), ae(de)
							}
							K(!0)
						}
					}, [x, $, N]), (0, i.useEffect)(() => {
						if (x && N) {
							const de = x.reduce((ye, Le) => (Le.source === U ? ye[U].push(Le) : Le.source === T && ye[T].push(Le), ye), {
									[U]: [],
									[T]: []
								}),
								_e = {
									[U]: de[U].sort(ee),
									[T]: de[T].sort(ee)
								};
							Z(_e)
						}
					}, [U, T, x, N]), {
						userAndManagedLabels: k,
						setUserAndManagedLabels: Z,
						toggleSelectedLabel: V,
						isLabelSelected: W,
						sortLabelsBySelectedStatus: pe,
						hasLabelsSelected: q
					}
				};
			var ce = t("../react/pages/security/settings/resources/selectors.ts");
			const le = (x = "") => {
				const $ = (0, C.p4)(ce.Xs),
					U = $ && (x == null ? void 0 : x.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: $,
					hasDeprecatedParameter: U
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				FQ: function() {
					return m.FQ
				},
				Io: function() {
					return m.Io
				},
				Iv: function() {
					return f.Iv
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
					return f.QJ
				},
				R: function() {
					return f.R
				},
				Tf: function() {
					return f.Tf
				},
				WR: function() {
					return m.WR
				},
				Xs: function() {
					return f.Xs
				},
				Xu: function() {
					return m.Xu
				},
				ZF: function() {
					return f.ZF
				},
				bE: function() {
					return m.bE
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
					return m.pf
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
				o = t("../react/app/components/Forbidden.jsx"),
				i = t("webpack/sharing/consume/default/react/react"),
				l = t.n(i),
				c = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(g),
				m = t("../react/pages/security/settings/hooks/index.ts"),
				f = t("../react/pages/security/settings/resources/index.ts");
			const n = l().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(50038), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(63779), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(68665), t.e(87940), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				a = () => {
					const {
						t: r
					} = (0, g.useI18n)(), d = (0, e.xk)("waf");
					return l().createElement(c.T3, {
						parentPageLabel: r("navigation.zone.security"),
						title: r("navigation.zone.security.settings"),
						type: "narrow"
					}, d.read ? l().createElement(n, null) : l().createElement(o.Z, null))
				};
			v.ZP = a
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Mi: function() {
					return C
				},
				hL: function() {
					return O
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				i = t("../react/common/utils/useQueryCache.ts"),
				l = t("../react/pages/security/settings/resources/constants.ts"),
				c = t("../react/common/hooks/useAccountId.ts"),
				g = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				s = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const m = {
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

			function r(E, y) {
				if (E == null) return {};
				var M = d(E, y),
					S, B;
				if (Object.getOwnPropertySymbols) {
					var P = Object.getOwnPropertySymbols(E);
					for (B = 0; B < P.length; B++) S = P[B], !(y.indexOf(S) >= 0) && (!Object.prototype.propertyIsEnumerable.call(E, S) || (M[S] = E[S]))
				}
				return M
			}

			function d(E, y) {
				if (E == null) return {};
				var M = {},
					S = Object.keys(E),
					B, P;
				for (P = 0; P < S.length; P++) B = S[P], !(y.indexOf(B) >= 0) && (M[B] = E[B]);
				return M
			}

			function u(E) {
				for (var y = 1; y < arguments.length; y++) {
					var M = arguments[y] != null ? Object(arguments[y]) : {},
						S = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(M).filter(function(B) {
						return Object.getOwnPropertyDescriptor(M, B).enumerable
					})), S.forEach(function(B) {
						_(E, B, M[B])
					})
				}
				return E
			}

			function _(E, y, M) {
				return y = h(y), y in E ? Object.defineProperty(E, y, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[y] = M, E
			}

			function h(E) {
				var y = I(E, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function I(E, y) {
				if (typeof E != "object" || E === null) return E;
				var M = E[Symbol.toPrimitive];
				if (M !== void 0) {
					var S = M.call(E, y || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(E)
			}
			const O = E => {
					const y = (0, e.p4)(o.Cu),
						M = (0, c.F)(),
						S = w.labels(u({
							accountId: M,
							zoneId: y
						}, E ? u({}, E) : {})),
						B = (0, i.o)(S);
					return u({
						zoneId: y,
						queryKey: S,
						batchInvalidateLabels: async () => {
							await B.batchInvalidate({
								queryKeysToPredicateInvalidate: [l.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, B)
				},
				C = {
					getLabels: async E => {
						var y, M, S, B;
						let {
							zoneId: P,
							hideErrorAlert: b = !0
						} = E, D = r(E, ["zoneId", "hideErrorAlert"]);
						return (await g.get(m.labels.toUrl({
							zoneId: P
						}), {
							parameters: {
								page: D == null ? void 0 : D.page,
								per_page: D == null ? void 0 : D.per_page,
								with_mapped_resource_counts: D == null ? void 0 : D.with_mapped_resource_counts,
								filter: D == null || (y = D.filters) === null || y === void 0 ? void 0 : y.search,
								source: (0, n.sQ)(D == null || (M = D.filters) === null || M === void 0 ? void 0 : M.source),
								order: D == null || (S = D.sort) === null || S === void 0 ? void 0 : S.id,
								direction: (D == null ? void 0 : D.sort) ? (D == null || (B = D.sort) === null || B === void 0 ? void 0 : B.desc) ? a.Sr.desc : a.Sr.asc : void 0
							},
							hideErrorAlert: b
						})).body
					},
					getLabel: async E => {
						let {
							zoneId: y,
							labelName: M,
							hideErrorAlert: S = !0
						} = E, B = r(E, ["zoneId", "labelName", "hideErrorAlert"]);
						const P = (0, n.mm)(M) ? m.managedLabel.toUrl({
							zoneId: y,
							labelName: M
						}) : m.userLabel.toUrl({
							zoneId: y,
							labelName: M
						});
						return (await g.get(P, {
							parameters: {
								with_mapped_resource_counts: B == null ? void 0 : B.with_mapped_resource_counts
							},
							hideErrorAlert: S
						})).body
					},
					editLabel: async ({
						zoneId: E,
						label: y,
						replace: M
					}) => {
						const {
							name: S
						} = y, B = r(y, ["name"]);
						return (await (M ? g.put : g.patch)(m.userLabel.toUrl({
							zoneId: E,
							labelName: y.name
						}), {
							body: B
						})).body
					},
					deleteLabel: async ({
						zoneId: E,
						labelName: y
					}) => (await g.del(m.userLabel.toUrl({
						zoneId: E,
						labelName: y
					}))).body,
					createLabel: async E => {
						let {
							zoneId: y
						} = E, M = r(E, ["zoneId"]);
						const {
							product: S
						} = M, B = r(M, ["product"]);
						return (await g.post(m.userLabels.toUrl({
							zoneId: y
						}), {
							body: [B]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: E,
						user: y,
						managed: M,
						operationIds: S,
						replace: B
					}) => (await (B ? g.put : g.post)(m.operationsLinkedToLabels.toUrl({
						zoneId: E
					}), {
						body: u({}, y ? {
							user: {
								labels: y
							}
						} : {}, M ? {
							managed: {
								labels: M
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
						labelName: y,
						operationIds: M
					}) => {
						const S = (0, n.mm)(y) ? m.managedLabelOperations.toUrl({
							zoneId: E,
							labelName: y
						}) : m.userLabelOperations.toUrl({
							zoneId: E,
							labelName: y
						});
						return (await g.put(S, {
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
				w = {
					labels: E => {
						let {
							accountId: y,
							zoneId: M
						} = E, S = r(E, ["accountId", "zoneId"]);
						return [l.IQ.LABELS, y, M, ...(0, f.isEmpty)(S) ? [] : [S]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				DG: function() {
					return h
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
					return g
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
					return w
				},
				W3: function() {
					return i
				},
				_8: function() {
					return r
				},
				_c: function() {
					return E
				},
				aW: function() {
					return I
				},
				dC: function() {
					return B
				},
				gY: function() {
					return y
				},
				j8: function() {
					return m
				},
				jz: function() {
					return _
				},
				n5: function() {
					return O
				},
				om: function() {
					return f
				},
				w: function() {
					return o
				},
				zF: function() {
					return S
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let o = function(P) {
				return P.EXPOSED_CREDENTIALS = "exposed_credentials", P.CONTENT_SCANNING = "content_scanning", P
			}({});
			const i = "all";
			let l = function(P) {
					return P.LABELS = "labels", P
				}({}),
				c = function(P) {
					return P.USER = "user", P.MANAGED = "managed", P
				}({}),
				g = function(P) {
					return P.SOURCE = "source", P
				}({}),
				s = function(P) {
					return P.NAME = "name", P.SOURCE = "source", P.NEW_LABEL_NAME = "newLabelName", P
				}({}),
				m = function(P) {
					return P.ENDPOINT = "endpoint", P.METHOD = "method", P.OPERATION_ID = "operationId", P
				}({}),
				f = function(P) {
					return P.NAME = "name", P.MAPPED_RESOURCES = "mapped_resources.operations", P.SOURCE = "source", P.APPLY = "apply", P
				}({});
			const r = {
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
						[g.SOURCE]: i
					}
				},
				filters: g,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let d = function(P) {
				return P.CREATED_LABEL = "createdLabel", P.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", P.DELETED_LABEL = "deletedLabel", P.APPLIED_LABEL = "appliedLabel", P.EDITED_LABEL = "editedLabel", P.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", P
			}({});
			const u = "650px",
				_ = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				h = /^[A-Za-z0-9-]+$/,
				I = /^cf-/;
			let O = function(P) {
				return P.NAME = "name", P.DESCRIPTION = "description", P
			}({});
			const C = "all";
			let w = function(P) {
				return P.METHOD = "method", P.HOSTNAME = "hostname", P
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
						[w.METHOD]: C,
						[w.HOSTNAME]: C
					}
				},
				filters: w
			};
			let y = function(P) {
				return P.TITLE = "title", P.DESCRIPTION = "description", P.SUBMIT = "submit", P
			}({});
			const M = 1e3,
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
				B = "exposed-credentials-module"
		},
		"../react/pages/security/settings/resources/index.ts": function(z, v, t) {
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
					return a
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
					return i.QF
				},
				vc: function() {
					return i.vc
				},
				ZF: function() {
					return r
				},
				Xs: function() {
					return O.Xs
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
					return O.bH
				},
				Mb: function() {
					return i.Mb
				},
				ui: function() {
					return O.ui
				},
				P3: function() {
					return O.P3
				},
				Ri: function() {
					return O.Ri
				},
				cN: function() {
					return O.cN
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
				o = t("../react/pages/security/settings/resources/types.ts"),
				i = t("../react/pages/security/settings/resources/utils.ts"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(l);

			function g(C) {
				for (var w = 1; w < arguments.length; w++) {
					var E = arguments[w] != null ? Object(arguments[w]) : {},
						y = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(E).filter(function(M) {
						return Object.getOwnPropertyDescriptor(E, M).enumerable
					})), y.forEach(function(M) {
						s(C, M, E[M])
					})
				}
				return C
			}

			function s(C, w, E) {
				return w = m(w), w in C ? Object.defineProperty(C, w, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[w] = E, C
			}

			function m(C) {
				var w = f(C, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function f(C, w) {
				if (typeof C != "object" || C === null) return C;
				var E = C[Symbol.toPrimitive];
				if (E !== void 0) {
					var y = E.call(C, w || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(C)
			}
			let n = function(C) {
					return C.LABELS_LIST = "Labels List page", C.LABELS_APPLY = "Labels Apply page", C.LABELS_SIDE_MODAL = "Labels Side Modal", C.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", C.LABELS_OPERATION_DETAILS = "Operation Details page", C
				}({}),
				a = function(C) {
					return C.API_SHIELD = "API Shield", C.SECURITY_SETTINGS = "Security Settings", C
				}({}),
				r = function(C) {
					return C.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", C.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", C.OPERATIONS_TABLE_ROW = "Operations table row", C.OPERATION_DETAILS_PAGE = "Operation details page", C
				}({}),
				d = function(C) {
					return C.UPSERT = "upsert", C.OVERWRITE = "overwrite", C
				}({}),
				u = function(C) {
					return C.SINGLE = "single", C.MULTIPLE = "multiple", C
				}({}),
				_ = function(C) {
					return C.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", C.DELETE_LABEL = "delete a user label in the settings page", C.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", C.CREATE_LABEL_CLICKED = "click create label button in the settings page", C.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", C.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", C.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", C.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", C.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", C.OPEN_LABELS_SIDE_MODAL = "open labels side modal", C.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", C.CREATE_NEW_LABEL = "create a new label", C
				}({});
			const h = ({
					name: C,
					product: w,
					category: E = "user journey",
					pageName: y,
					from: M,
					write_strategy: S,
					type: B,
					target: P
				}) => {
					c().sendEvent(C, g({
						category: E,
						pageName: y,
						product: w
					}, M ? {
						from: M
					} : {}, S ? {
						write_strategy: S
					} : {}, B ? {
						type: B
					} : {}, P ? {
						target: P
					} : {}))
				},
				I = () => {
					var C;
					return (C = Object.values(_)) === null || C === void 0 ? void 0 : C.flat()
				};
			var O = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				P3: function() {
					return m
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
				o = t("../react/utils/url.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				l = t("../react/pages/security/settings/resources/constants.ts"),
				c = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const g = r => {
					const d = (0, e.RO)(r),
						u = !!(0, i.rV)(r, "rulesets.file_upload_scan_allowed"),
						_ = !!(0, i.BF)(r, "rulesets.file_upload_scan_allowed");
					return (0, o.el)(window.location.pathname) ? d && (u || _) : _
				},
				s = r => Number((0, i.rV)(r, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				m = r => (0, i.rV)(r, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				f = r => (0, i.rV)(r, "rulesets.leaked_credential_checks_allowed"),
				n = r => (0, c.z1)(l.dC)(r) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, i.rV)(r, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, i.rV)(r, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				a = r => !!(0, c.z1)("deprecate-security-level")(r)
		},
		"../react/pages/security/settings/resources/types.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				T: function() {
					return o
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let o = function(i) {
				return i.ENABLED = "enabled", i.CONTACT = "contact", i.EXPIRES = "expires", i.ENCRYPTION = "encryption", i.ACKNOWLEDGMENTS = "acknowledgments", i.CANONICAL = "canonical", i.HIRING = "hiring", i.POLICY = "policy", i.PREFERRED_LANGUAGES = "preferred_languages", i
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				$E: function() {
					return r
				},
				Mb: function() {
					return d
				},
				N2: function() {
					return w
				},
				Q4: function() {
					return _
				},
				QF: function() {
					return a
				},
				Vy: function() {
					return I
				},
				Wv: function() {
					return u
				},
				mm: function() {
					return C
				},
				sQ: function() {
					return O
				},
				vc: function() {
					return h
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				i = t("../react/pages/security/settings/routes.tsx"),
				l = t("../react/pages/security/settings/resources/constants.ts"),
				c = t("../react/pages/security/settings/resources/types.ts"),
				g = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function s(E) {
				for (var y = 1; y < arguments.length; y++) {
					var M = arguments[y] != null ? Object(arguments[y]) : {},
						S = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(M).filter(function(B) {
						return Object.getOwnPropertyDescriptor(M, B).enumerable
					})), S.forEach(function(B) {
						m(E, B, M[B])
					})
				}
				return E
			}

			function m(E, y, M) {
				return y = f(y), y in E ? Object.defineProperty(E, y, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[y] = M, E
			}

			function f(E) {
				var y = n(E, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function n(E, y) {
				if (typeof E != "object" || E === null) return E;
				var M = E[Symbol.toPrimitive];
				if (M !== void 0) {
					var S = M.call(E, y || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(E)
			}
			const a = {
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
					const y = {};
					for (const M in E) y[M] = Array.isArray(E[M]) ? E[M].filter(S => !!S) : E[M];
					return s({}, y, {
						expires: (0, g.DZ)(E.expires)
					})
				},
				_ = (E, y, M) => {
					const S = [...new Set([c.T.CONTACT, c.T.EXPIRES, ...Object.values(c.T)])],
						B = Object.entries(E).sort(([P], [b]) => S.indexOf(P) - S.indexOf(b)).filter(([P, b]) => !!r[P] && !!b && (!Array.isArray(b) || !!b.length)).map(([P, b]) => Array.isArray(b) ? b.map(D => `${M(r[P].label)}: ${D}`).join(`
`) : `${M(r[P].label)}: ${b}`).join(`
`);
					(0, o.yH)(`Cloudflare_${y}_security.txt`, B, "text/plain;charset=utf-8")
				};
			let h = function(E) {
				return E.CREATED = "created security.txt", E.ENABLED = "enabled security.txt", E.DISABLED = "disabled security.txt", E.DOWNLOADED = "downloaded security.txt", E.UPDATED = "updated security.txt", E.DELETED = "deleted security.txt", E
			}({});
			const I = E => (E == null ? void 0 : E.source) === l.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (E == null ? void 0 : E.source) === l.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				O = E => E === l.W3 ? void 0 : E,
				C = E => l.aW.test(E),
				w = E => {
					switch (E) {
						case l.w.CONTENT_SCANNING:
							return i.ROUTES.CONTENT_SCANNING;
						case l.w.EXPOSED_CREDENTIALS:
							return i.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(z, v, t) {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Sb: function() {
					return f
				},
				Vj: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function i(n) {
				for (var a = 1; a < arguments.length; a++) {
					var r = arguments[a] != null ? Object(arguments[a]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(u) {
						return Object.getOwnPropertyDescriptor(r, u).enumerable
					})), d.forEach(function(u) {
						l(n, u, r[u])
					})
				}
				return n
			}

			function l(n, a, r) {
				return a = c(a), a in n ? Object.defineProperty(n, a, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[a] = r, n
			}

			function c(n) {
				var a = g(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(n, a) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, a || "default");
					if (typeof d != "object") return d;
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
				m = {
					product: "WAF Managed Rules"
				},
				f = ({
					event: n,
					category: a = "user journey",
					product: r = "waf",
					productName: d = "Managed Rules",
					additionalData: u
				}) => {
					o().sendEvent(n, i({
						category: a,
						product: r,
						productName: d
					}, u || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(z, v, t) {
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
		"../react/pages/spectrum/tracking.tsx": function(z, v, t) {
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
		"../react/pages/stream/actionTypes.ts": function(z, v, t) {
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
		"../react/pages/stream/reducer.ts": function(z, v, t) {
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
				i = t("../react/pages/stream/util/pager.ts");

			function l(a) {
				for (var r = 1; r < arguments.length; r++) {
					var d = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(d).filter(function(_) {
						return Object.getOwnPropertyDescriptor(d, _).enumerable
					})), u.forEach(function(_) {
						c(a, _, d[_])
					})
				}
				return a
			}

			function c(a, r, d) {
				return r = g(r), r in a ? Object.defineProperty(a, r, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[r] = d, a
			}

			function g(a) {
				var r = s(a, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function s(a, r) {
				if (typeof a != "object" || a === null) return a;
				var d = a[Symbol.toPrimitive];
				if (d !== void 0) {
					var u = d.call(a, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(a)
			}
			const m = "stream",
				f = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(a = f, r) {
				switch (r.type) {
					case o.U.ResetState:
						return f;
					case o.U.SetStorageLoading:
						const {
							storageLoading: d
						} = r;
						return l({}, a, {
							storageLoading: d
						});
					case o.U.SetStorage:
						return l({}, a, {
							storage: r.payload ? l({}, a.storage, r.payload) : void 0
						});
					case o.U.ReplaceVideos:
						return l({}, a, {
							videos: r.videos
						});
					case o.U.PrependVideo:
						return l({}, a, {
							videos: [r.video, ...a.videos].filter((u, _) => _ < i.FJ)
						});
					case o.U.UpdateVideo:
						return l({}, a, {
							videos: a.videos.map(u => u.uid === r.video.uid ? r.video : u)
						});
					case o.U.UpdateVideoPending:
						return l({}, a, {
							videoUpdateStatuses: l({}, a.videoUpdateStatuses, {
								[r.uid]: r.status
							})
						});
					case o.U.RemoveVideos:
						return l({}, a, {
							videos: a.videos.filter(u => !r.ids.includes(u.uid))
						});
					case o.U.SetLoading:
						return l({}, a, {
							loading: r.loading
						});
					case o.U.SetRequestTimestamp:
						return l({}, a, {
							requestTimestamp: r.requestTimestamp
						});
					case o.U.UploadViaUrl:
						return a;
					default:
						return (0, e.h)(r, a)
				}
			}
		},
		"../react/pages/stream/selectors.ts": function(z, v, t) {
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
					return a
				},
				aM: function() {
					return u
				},
				bM: function() {
					return s
				},
				bO: function() {
					return r
				},
				bm: function() {
					return d
				},
				mX: function() {
					return h
				},
				pW: function() {
					return g
				},
				xW: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				i = t("../react/pages/stream/reducer.ts");
			const l = I => I[i.nY],
				c = I => l(I).videos,
				g = I => l(I).videoUpdateStatuses,
				s = I => l(I).loading,
				m = I => l(I).requestTimestamp,
				f = I => l(I).storageLoading,
				n = I => l(I).storage,
				a = I => (0, o.BF)(I, "stream.enabled") || (0, e.bC)(I),
				r = I => (0, e.Le)(I, "stream", "connect"),
				d = I => (0, e.Le)(I, "stream", "stream-4371"),
				u = I => (0, e.Le)(I, "stream", "public-details-enabled"),
				_ = I => !!(0, e.Le)(I, "stream", "llhls"),
				h = I => {
					const O = n(I);
					return O !== void 0 && O.limitMins > O.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				FJ: function() {
					return e
				},
				d6: function() {
					return i
				},
				wL: function() {
					return o
				}
			});
			const e = 30;

			function o(l, c, g) {
				const s = {
					search: g,
					limit: e.toString()
				};
				return c !== void 0 && (s.end = c), s
			}

			function i(l, c, g) {
				return {
					limit: e.toString(),
					search: g,
					asc: "true",
					start_comp: "gt",
					start: c
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(z, v, t) {
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
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(z, v, t) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				N: function() {
					return i
				},
				X: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let i = function(c) {
				return c.CREATE = "create waiting room", c.UPDATE = "update waiting room", c.EVENTS = "view waiting rooms events", c.ANALYTICS = "view waiting room analytics", c.GENERATE_PREVIEW = "generate waiting room preview link", c
			}({});
			const l = async c => {
				await o().sendEvent(c, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				N3: function() {
					return m
				},
				P: function() {
					return n
				},
				Xh: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function i(a) {
				for (var r = 1; r < arguments.length; r++) {
					var d = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(d).filter(function(_) {
						return Object.getOwnPropertyDescriptor(d, _).enumerable
					})), u.forEach(function(_) {
						l(a, _, d[_])
					})
				}
				return a
			}

			function l(a, r, d) {
				return r = c(r), r in a ? Object.defineProperty(a, r, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[r] = d, a
			}

			function c(a) {
				var r = g(a, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(a, r) {
				if (typeof a != "object" || a === null) return a;
				var d = a[Symbol.toPrimitive];
				if (d !== void 0) {
					var u = d.call(a, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(a)
			}
			const s = "TURNSTILE";
			let m = function(a) {
				return a.OVERVIEW_PAGE = "view the overview page", a.LIST_OF_WIDGETS = "list of widgets", a.SOLVE_EVENTS = "list solve events", a.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", a.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", a.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", a.OPEN_DELETE_MODAL = "view the delete modal for one widget", a.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", a.DELETE_WIDGET = "delete successfully widgets", a.LIST_OF_HOSTNAMES = "list hostnames", a.OPEN_ADD_WIDGET_PAGE = "view page to add widget", a.FEEDBACK_ADD = "view Feedback Add", a.SAVE_WIDGET = "save widget", a.ROTATE_KEYS = "rotate keys", a.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", a.GET_WIDGETS = "get widget details", a.OPEN_ANALYTICS_PAGE = "view analytics page", a.ANALYTICS_DATA = "list the analytics data", a
			}({});
			const f = ({
					name: a,
					product: r = s,
					category: d = "user journey",
					page: u,
					additionalData: _ = {}
				}) => {
					o().sendEvent(a, i({
						category: d,
						page: u,
						product: r
					}, _ || {}))
				},
				n = () => {
					var a;
					return (a = Object.values(m)) === null || a === void 0 ? void 0 : a.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				E: function() {
					return m
				},
				Ky: function() {
					return f
				},
				RJ: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function i(n) {
				for (var a = 1; a < arguments.length; a++) {
					var r = arguments[a] != null ? Object(arguments[a]) : {},
						d = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(r).filter(function(u) {
						return Object.getOwnPropertyDescriptor(r, u).enumerable
					})), d.forEach(function(u) {
						l(n, u, r[u])
					})
				}
				return n
			}

			function l(n, a, r) {
				return a = c(a), a in n ? Object.defineProperty(n, a, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[a] = r, n
			}

			function c(n) {
				var a = g(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(n, a) {
				if (typeof n != "object" || n === null) return n;
				var r = n[Symbol.toPrimitive];
				if (r !== void 0) {
					var d = r.call(n, a || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.BACK_BUTTON = "clicked back from user group detail", n.ADD_MEMBER_BUTTON = "click add member button", n.MEMBER_ADD = "add user group member", n.MEMBER_DETAIL_MENU = "click user group member detail menu", n.MEMBER_DETAIL_VIEW = "click view in user group member detail menu", n.MEMBER_DETAIL_EDIT = "click edit in user group member detail menu", n.MEMBER_DETAIL_DELETE = "click delete in user group member detail menu", n.MEMBER_DELETE = "delete user group member", n.MEMBER_DETAIL_DELETE_CANCEL = "click cancel delete user group member", n.ADD_POLICY_BUTTON = "click add user group policy button", n
			}({});
			const m = ({
					name: n,
					additionalData: a = {}
				}) => {
					o().sendEvent(n, i({}, a || {}))
				},
				f = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(z, v, t) {
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
		"../react/pages/zone-versioning/selectors.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				$e: function() {
					return M
				},
				$h: function() {
					return C
				},
				G: function() {
					return y
				},
				M3: function() {
					return B
				},
				Tr: function() {
					return I
				},
				UY: function() {
					return _
				},
				bH: function() {
					return a
				},
				fv: function() {
					return P
				},
				hF: function() {
					return w
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
				i = t("../react/common/selectors/zoneSelectors.ts"),
				l = t("../react/app/components/SidebarNav/permissions.ts"),
				c = t("../react/common/selectors/entitlementsSelectors.ts");

			function g(b) {
				for (var D = 1; D < arguments.length; D++) {
					var L = arguments[D] != null ? Object(arguments[D]) : {},
						j = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(L).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(L, Q).enumerable
					})), j.forEach(function(Q) {
						s(b, Q, L[Q])
					})
				}
				return b
			}

			function s(b, D, L) {
				return D = m(D), D in b ? Object.defineProperty(b, D, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = L, b
			}

			function m(b) {
				var D = f(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function f(b, D) {
				if (typeof b != "object" || b === null) return b;
				var L = b[Symbol.toPrimitive];
				if (L !== void 0) {
					var j = L.call(b, D || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}
			const n = b => (0, i.nA)(b) ? (0, c.p1)(b) && (0, l.$n)(b, "zone_versioning", "versioning") : !1,
				a = b => b.zoneVersioning.zoneApplications,
				r = (0, e.P1)("zoneApplications", a),
				d = b => b.zoneVersioning.zoneVersions,
				u = (0, e.P1)("zoneVersions", d),
				_ = (0, o.P1)(u, b => {
					if (b) return b.filter(D => D.status == "V")
				}),
				h = b => b.zoneVersioning.environments,
				I = b => b.zoneVersioning.environments.isRequesting,
				O = (0, e.P1)("environments", h),
				C = (0, o.P1)(r, b => {
					if (b) {
						if (b.length === 1) return b[0];
						b.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${b.length}`))
					}
					return null
				}),
				w = (0, o.P1)(O, b => b ? b.environments : []),
				E = b => {
					var D;
					return (D = b.zoneVersioning) === null || D === void 0 ? void 0 : D.zoneVersionSelector
				},
				y = (0, o.P1)(E, u, (b, D) => {
					if (!(b == null ? void 0 : b.isVersion) || !D) return null;
					const L = D.find(j => {
						if (j.version === b.selectedVersion && j.locked) return !0
					});
					return L ? g({}, L, {
						isLocked: !0
					}) : null
				}),
				M = (0, o.P1)(u, w, (b, D) => !D || !b ? [] : b.map(L => {
					const j = [];
					for (const Q in D) D[Q].version === L.version && j.push(D[Q]);
					return g({}, L, {
						environments: j
					})
				})),
				S = b => b.zoneVersioning.WAFMigrationStatus,
				B = (0, e.P1)("WAFMigrationStatus", S),
				P = b => b.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				$2: function() {
					return S
				},
				CI: function() {
					return y
				},
				IS: function() {
					return s
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
					return B
				},
				X$: function() {
					return w
				},
				X6: function() {
					return f
				},
				d4: function() {
					return d
				},
				fE: function() {
					return m
				},
				im: function() {
					return O
				},
				lv: function() {
					return h
				},
				rL: function() {
					return n
				},
				wW: function() {
					return g
				}
			});

			function e(P) {
				for (var b = 1; b < arguments.length; b++) {
					var D = arguments[b] != null ? Object(arguments[b]) : {},
						L = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(D).filter(function(j) {
						return Object.getOwnPropertyDescriptor(D, j).enumerable
					})), L.forEach(function(j) {
						o(P, j, D[j])
					})
				}
				return P
			}

			function o(P, b, D) {
				return b = i(b), b in P ? Object.defineProperty(P, b, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[b] = D, P
			}

			function i(P) {
				var b = l(P, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function l(P, b) {
				if (typeof P != "object" || P === null) return P;
				var D = P[Symbol.toPrimitive];
				if (D !== void 0) {
					var L = D.call(P, b || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(P)
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
							versionMetadata: "https://developers.cloudflare.com/workers/runtime-apis/bindings/version-metadata"
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
				m = {
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
					D2W_resourceProvisioningFailed: "D2W: resource provisioning failed"
				},
				h = {
					insufficientData: "insufficient data to create/update trigger",
					createRepoConnectionError: "error creating repo connection",
					createTokenError: "error creating token",
					createUpdateTriggerError: "error creating/updating trigger",
					updateEnvironmentVariablesError: "error updating trigger environment variables",
					createWorkerError: "error creating worker",
					buildWorkerError: "error building worker"
				},
				I = "workers.dev",
				O = "YYYY-MM-DD HH:mm:SS ZZ",
				C = "active",
				w = ["bundled", "unbound", "standard"],
				E = null,
				y = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let M = function(P) {
				return P[P.NONE = 0] = "NONE", P[P.MISS = 1] = "MISS", P[P.EXPIRED = 2] = "EXPIRED", P[P.UPDATING = 3] = "UPDATING", P[P.STALE = 4] = "STALE", P[P.HIT = 5] = "HIT", P[P.IGNORED = 6] = "IGNORED", P[P.BYPASS = 7] = "BYPASS", P[P.REVALIDATED = 8] = "REVALIDATED", P[P.DYNAMIC = 9] = "DYNAMIC", P[P.STREAM_HIT = 10] = "STREAM_HIT", P[P.DEFERRED = 11] = "DEFERRED", P
			}({});
			const S = [M.HIT, M.STREAM_HIT];
			let B = function(P) {
				return P.SECRETS_STORE_ID = "store_id", P.SECRET_NAME = "secret_name", P
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Hv: function() {
					return s
				},
				L: function() {
					return i
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
				i = (m, f, n) => `${n?`${n}.`:""}${m}.${o(f)}`,
				l = (m, f, n) => `https://${i(m,f,n)}`,
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
					members: (0, e.BC)`/${"accountId"}/members`
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
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				MN: function() {
					return i
				},
				Yg: function() {
					return c
				},
				i$: function() {
					return l
				},
				l3: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const i = async ([s, m]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: s,
					variables: m
				})
			})).body, l = async (...s) => (await e.get(...s)).body, c = s => async (m, f) => {
				const n = await fetch(m, f).then(a => a.json());
				return s.assertDecode(n)
			}, g = async (...s) => (await l(...s)).result;
			v.ZP = {
				fetcher: s => Array.isArray(s) ? g(...s) : g(s)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(z, v) {
				v()
			})(this, function() {
				"use strict";

				function z() {
					var t = !0,
						e = !1,
						o = null,
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

					function l(h) {
						return !!(h && h !== document && h.nodeName !== "HTML" && h.nodeName !== "BODY" && "classList" in h && "contains" in h.classList)
					}

					function c(h) {
						var I = h.type,
							O = h.tagName;
						return !!(O == "INPUT" && i[I] && !h.readOnly || O == "TEXTAREA" && !h.readOnly || h.isContentEditable)
					}

					function g(h) {
						h.getAttribute("is-focus-visible") !== "" && h.setAttribute("is-focus-visible", "")
					}

					function s(h) {
						h.getAttribute("is-focus-visible") === "" && h.removeAttribute("is-focus-visible")
					}

					function m(h) {
						l(document.activeElement) && g(document.activeElement), t = !0
					}

					function f(h) {
						t = !1
					}

					function n(h) {
						!l(h.target) || (t || c(h.target)) && g(h.target)
					}

					function a(h) {
						!l(h.target) || h.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), s(h.target))
					}

					function r(h) {
						document.visibilityState == "hidden" && (e && (t = !0), d())
					}

					function d() {
						document.addEventListener("mousemove", _), document.addEventListener("mousedown", _), document.addEventListener("mouseup", _), document.addEventListener("pointermove", _), document.addEventListener("pointerdown", _), document.addEventListener("pointerup", _), document.addEventListener("touchmove", _), document.addEventListener("touchstart", _), document.addEventListener("touchend", _)
					}

					function u() {
						document.removeEventListener("mousemove", _), document.removeEventListener("mousedown", _), document.removeEventListener("mouseup", _), document.removeEventListener("pointermove", _), document.removeEventListener("pointerdown", _), document.removeEventListener("pointerup", _), document.removeEventListener("touchmove", _), document.removeEventListener("touchstart", _), document.removeEventListener("touchend", _)
					}

					function _(h) {
						h.target.nodeName.toLowerCase() !== "html" && (t = !1, u())
					}
					document.addEventListener("keydown", m, !0), document.addEventListener("mousedown", f, !0), document.addEventListener("pointerdown", f, !0), document.addEventListener("touchstart", f, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", a, !0), document.addEventListener("visibilitychange", r, !0), d(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function v(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && v(z)
			})
		},
		"../react/utils/bootstrap.ts": function(z, v, t) {
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
					return i
				}
			});
			const e = () => {
					var c, g, s;
					return (c = window) === null || c === void 0 || (g = c.bootstrap) === null || g === void 0 || (s = g.data) === null || s === void 0 ? void 0 : s.security_token
				},
				o = () => {
					var c, g, s;
					return !!((c = t.g.bootstrap) === null || c === void 0 || (g = c.data) === null || g === void 0 || (s = g.user) === null || s === void 0 ? void 0 : s.id)
				},
				i = () => {
					var c, g;
					return !!((c = t.g.bootstrap) === null || c === void 0 || (g = c.data) === null || g === void 0 ? void 0 : g.is_kendo)
				},
				l = () => {
					var c, g, s, m;
					return (c = window) === null || c === void 0 || (g = c.bootstrap) === null || g === void 0 || (s = g.data) === null || s === void 0 || (m = s.user) === null || m === void 0 ? void 0 : m.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				O5: function() {
					return l
				},
				Xm: function() {
					return i
				},
				kT: function() {
					return s
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
				i = () => (o() || "").indexOf("C0002") !== -1,
				l = () => (o() || "").indexOf("C0003") !== -1,
				c = () => (o() || "").indexOf("C0004") !== -1,
				g = () => (o() || "").indexOf("C0005") !== -1,
				s = n => {
					const a = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${a}`
				},
				m = () => {
					var n;
					const a = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (a == null ? void 0 : a.country) || ""
				},
				f = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				AI: function() {
					return w
				},
				Kd: function() {
					return a
				},
				S8: function() {
					return C
				},
				ZW: function() {
					return m
				},
				ay: function() {
					return E
				},
				fh: function() {
					return y
				},
				i_: function() {
					return r
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
				o = t.n(e),
				i = t("../../../common/intl/intl-types/src/index.ts"),
				l = t("../../../common/util/types/src/utils/index.ts"),
				c = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g = t("../../../../node_modules/cookie/index.js");
			const s = "cf-sync-locale-with-cps",
				m = i.Q.en_US,
				f = "en_US",
				n = "cf-locale";

			function a() {
				const B = (0, g.parse)(document.cookie);
				return c.Z.get(n) || B[n] || null
			}

			function r(B) {
				document.cookie = (0, g.serialize)(n, B, {
					path: "/",
					maxAge: 31536e3
				}), c.Z.set(n, B)
			}

			function d() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const u = B => (0, l.Yd)(i.Q).find(P => i.Q[P] === B) || f,
				_ = [],
				h = [],
				I = [i.Q.de_DE, i.Q.en_US, i.Q.es_ES, i.Q.fr_FR, i.Q.it_IT, i.Q.pt_BR, i.Q.ko_KR, i.Q.ja_JP, i.Q.zh_CN, i.Q.zh_TW],
				O = {
					test: [...I, ...h, ..._],
					development: [...I, ...h, ..._],
					staging: [...I, ...h, ..._],
					production: [...I, ...h]
				},
				C = B => {
					const P = i.Q[B];
					return O.production.includes(P)
				},
				w = () => Object.keys(i.Q).filter(B => C(B)),
				E = B => {
					const P = i.Q[B];
					return h.includes(P)
				},
				y = B => M[B],
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
		"../react/utils/translator.tsx": function(z, v, t) {
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
					return s
				},
				_m: function() {
					return a
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
				i = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				l = t.n(i),
				c = t("../flags.ts");
			const g = new o.Z({
				pseudoLoc: (0, c.J8)("is_pseudo_loc")
			});

			function s(_, ...h) {
				return g.t(_, ...h)
			}
			const m = g;

			function f(_, ...h) {
				return markdown(s(_, h))
			}

			function n(_) {
				if (Number(_) !== 0) {
					if (_ % 86400 == 0) return s("time.num_days", {
						smart_count: _ / 86400
					});
					if (_ % 3600 == 0) return s("time.num_hours", {
						smart_count: _ / 3600
					});
					if (_ % 60 == 0) return s("time.num_minutes", {
						smart_count: _ / 60
					})
				}
				return s("time.num_seconds", {
					smart_count: _
				})
			}

			function a(_, h) {
				return _ in h ? h[_] : void 0
			}
			const r = i.Trans,
				d = i.I18n,
				u = i.useI18n
		},
		"../react/utils/url.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Ct: function() {
					return M
				},
				Fl: function() {
					return X
				},
				KT: function() {
					return q
				},
				NF: function() {
					return O
				},
				Nw: function() {
					return E
				},
				Pd: function() {
					return w
				},
				Uh: function() {
					return T
				},
				cm: function() {
					return _
				},
				e1: function() {
					return y
				},
				el: function() {
					return Q
				},
				hW: function() {
					return me
				},
				pu: function() {
					return ae
				},
				qR: function() {
					return j
				},
				td: function() {
					return C
				},
				uW: function() {
					return le
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				o = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				l = t("../react/pages/stream/routes.ts"),
				c = t("../react/pages/r2/routes.ts"),
				g = t("../react/pages/zoneless-workers/routes.ts"),
				s = t("../react/pages/pages/routes.ts"),
				m = t("../react/pages/d1/routes.ts");

			function f(N) {
				for (var K = 1; K < arguments.length; K++) {
					var V = arguments[K] != null ? Object(arguments[K]) : {},
						W = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(V).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(V, ee).enumerable
					})), W.forEach(function(ee) {
						n(N, ee, V[ee])
					})
				}
				return N
			}

			function n(N, K, V) {
				return K = a(K), K in N ? Object.defineProperty(N, K, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[K] = V, N
			}

			function a(N) {
				var K = r(N, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function r(N, K) {
				if (typeof N != "object" || N === null) return N;
				var V = N[Symbol.toPrimitive];
				if (V !== void 0) {
					var W = V.call(N, K || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(N)
			}
			const {
				endsWithSlash: d
			} = i.default, u = new RegExp(/([0-9a-z]{32})/g), _ = N => N == null ? void 0 : N.replace(u, ":id"), h = (N, K) => {
				const V = N.replace(d, "").split("/");
				return V.slice(0, 2).concat([K]).concat(V.slice(3)).join("/")
			}, I = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), O = N => `/${N.replace(d,"").replace(/^\//,"")}`, C = N => E("add-site", N), w = N => E("billing", N), E = (N, K) => K ? `/${K}${N?`/${N}`:""}` : `/?to=/:account/${N}`, y = () => {
				const N = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return N ? N[1] : null
			}, M = (N, K) => o().stringify(f({}, o().parse(N), K)), S = (N = "") => N.toString().replace(/([\/]{1,})$/, ""), B = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], P = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, b = /^\/(\w{32,})(\/[^.]*)?/, D = N => B.includes(N), L = N => !D(N), j = N => !D(N) && b.test(N), Q = N => !D(N) && P.test(N), re = N => P.exec(N), me = N => {
				if (Q(N)) return N.split("/").filter(K => K.length > 0)[1]
			}, ce = N => b.exec(N), le = N => {
				if (j(N)) {
					const K = ce(N);
					if (K) return K[1]
				}
			}, x = N => j(N) && N.split("/")[2] === "register-domain", $ = N => x(N) ? N.split("/") : null, U = N => {
				if (Q(N)) {
					const [, , , K, V, W, ee, pe] = N.split("/");
					return K === "traffic" && V === "load-balancing" && W === "pools" && ee === "edit" && pe
				}
			}, T = N => {
				const K = $(N);
				if (K) return K[3]
			}, k = (N, K) => {
				var V, W;
				return ((V = N.pattern.match(/\:/g)) !== null && V !== void 0 ? V : []).length - ((W = K.pattern.match(/\:/g)) !== null && W !== void 0 ? W : []).length
			}, Z = [...Object.values(l.C), ...Object.values(c._j), ...Object.values(g._j), ...Object.values(s._j), ...Object.values(m._)].sort(k);

			function X(N) {
				if (!L(N)) return N;
				for (const pe of Z)
					if (pe.expression.test(N)) return pe.pattern;
				const K = $(N);
				if (K) {
					const [, , pe, , ...de] = K;
					return `/:accountId/${pe}/:domainName/${de.join("/")}`
				}
				if (U(N)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const W = re(N);
				if (W) {
					const [, , , , pe] = W;
					return `/:accountId/:zoneName${pe||""}`
				}
				const ee = ce(N);
				if (ee) {
					const [, , pe] = ee;
					return `/:accountId${pe||""}`
				}
				return N
			}

			function ae(N) {
				if (!!N) try {
					const V = N.split(".").pop();
					if (V && V.length > 0) return V
				} catch {}
			}

			function q(N, K = document.location.href) {
				try {
					const V = new URL(N),
						W = new URL(K);
					if (V.origin === W.origin) return `${V.pathname}${V.search}${V.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				r: function() {
					return s
				},
				y: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(l);
			const g = /^\/domainconnect\/v2\/domaintemplates\//i,
				s = "domain-connect-redirect",
				m = () => {
					const f = (0, l.useLocation)();
					(0, e.useEffect)(() => {
						g.test(f.pathname) && i.Z.set(s, f, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(z, v, t) {
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
		"../react/utils/zoneLevelAccess.ts": function(z, v, t) {
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

			function i() {
				var g, s, m, f, n, a;
				return (g = window) === null || g === void 0 || (s = g.bootstrap) === null || s === void 0 || (m = s.data) === null || m === void 0 || (f = m.user) === null || f === void 0 || (n = f.betas) === null || n === void 0 || (a = n.some) === null || a === void 0 ? void 0 : a.call(n, r => r === "zone_level_access_beta")
			}

			function l() {
				const g = !!(0, e.Z)("zone-level-access");
				return i() || g
			}

			function c(g) {
				const s = !!(0, o.z1)("zone-level-access")(g);
				return i() || s
			}
		},
		"../utils/getDashVersion.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				p: function() {
					return i
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
				i = () => {
					var l;
					return ((0, e.parse)((l = document) === null || l === void 0 ? void 0 : l.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Wi: function() {
					return bt
				},
				IM: function() {
					return St
				},
				yV: function() {
					return Bt
				},
				Ug: function() {
					return Lt
				},
				v_: function() {
					return _t
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				i = t("../react/utils/bootstrap.ts"),
				l = t("../react/app/providers/storeContainer.js"),
				c = t("../react/common/selectors/languagePreferenceSelector.ts"),
				g = t("../flags.ts"),
				s = t("../../../../node_modules/cookie/index.js"),
				m = t("../react/utils/url.ts"),
				f = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				a = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				d = t("../utils/getDashVersion.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				_ = t("../react/common/selectors/entitlementsSelectors.ts");

			function h(oe) {
				for (var te = 1; te < arguments.length; te++) {
					var ge = arguments[te] != null ? Object(arguments[te]) : {},
						p = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(ge).filter(function(A) {
						return Object.getOwnPropertyDescriptor(ge, A).enumerable
					})), p.forEach(function(A) {
						I(oe, A, ge[A])
					})
				}
				return oe
			}

			function I(oe, te, ge) {
				return te = O(te), te in oe ? Object.defineProperty(oe, te, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : oe[te] = ge, oe
			}

			function O(oe) {
				var te = C(oe, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function C(oe, te) {
				if (typeof oe != "object" || oe === null) return oe;
				var ge = oe[Symbol.toPrimitive];
				if (ge !== void 0) {
					var p = ge.call(oe, te || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(oe)
			}
			const w = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				E = (0, a.Z)(oe => {
					try {
						return w.assertDecode((0, s.parse)(oe))
					} catch (te) {
						return console.error(te), {}
					}
				}),
				y = oe => (te, ge, p) => {
					try {
						const xe = window.location.pathname,
							We = (0, l.bh)().getState(),
							qe = E(document.cookie),
							Et = h({
								page: (0, m.Fl)(p.page || window.location.pathname),
								dashVersion: (0, d.t)()
							}, qe);
						if (te === "identify") {
							var A, ne;
							const et = {
								gates: (0, r.T2)(We) || {},
								country: (A = t.g) === null || A === void 0 || (ne = A.bootstrap) === null || ne === void 0 ? void 0 : ne.ip_country
							};
							return oe(te, ge, h({}, Et, et, p))
						} else {
							const et = {
								accountId: (0, m.uW)(xe),
								zoneName: (0, m.hW)(xe),
								domainName: (0, m.Uh)(xe)
							};
							if ((0, m.qR)(xe)) {
								var he;
								const Be = (0, u.D0)(We);
								et.isEntAccount = !!(Be == null || (he = Be.meta) === null || he === void 0 ? void 0 : he.has_enterprise_zones) || (0, _.p1)(We)
							}
							if ((0, m.el)(xe)) {
								var Me;
								const Be = (0, f.nA)(We);
								et.zoneId = Be == null ? void 0 : Be.id, et.plan = Be == null || (Me = Be.plan) === null || Me === void 0 ? void 0 : Me.legacy_id
							}
							return oe(te, ge, h({}, Et, et, p))
						}
					} catch (xe) {
						return console.error(xe), oe(te, ge, p)
					}
				},
				M = oe => async (te, ge, p) => {
					try {
						return await oe(te, ge, p)
					} catch (A) {
						if (console.error(A), !_t()) throw A;
						return {
							status: "rejected",
							reason: A
						}
					}
				};
			var S = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				B = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				P = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				b = t("../react/common/middleware/sparrow/errors.ts"),
				D = t("../react/pages/caching/tracking.tsx"),
				L = t("../react/pages/home/domain-registration/tracking.ts"),
				j = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				Q = t("../react/pages/hyperdrive/tracking.ts"),
				re = t("../react/pages/magic/overview/tracking.ts"),
				me = t("../react/pages/magic/packet-captures/constants.ts"),
				ce = t("../react/pages/page-rules/tracking.ts"),
				le = t("../react/pages/pages/constants.ts"),
				x = t("../react/pages/pipelines/tracking.ts"),
				$ = t("../react/pages/security-center/BlockedContent/constants.ts"),
				U = t("../react/pages/security-center/tracking.ts"),
				T = t("../react/pages/security/api-shield/tracking.ts"),
				k = t("../react/pages/security/bots/tracking.ts"),
				Z = t("../react/pages/security/resources/constants.tsx"),
				X = t("../react/pages/security/page-shield/resources/index.ts"),
				ae = t("../react/pages/home/configurations/lists/tracking.ts"),
				q = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				N = t("../react/pages/home/alerts/tracking.ts"),
				K = t("../react/pages/dns/dns-records/tracking.ts"),
				V = t("../react/pages/magic/network-monitoring/constants.ts"),
				W = t("../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts"),
				ee = t("../react/pages/security/settings/index.tsx"),
				pe = t("../react/pages/shared-config/sparrowEvents.tsx"),
				de = t("../react/pages/spectrum/tracking.tsx"),
				_e = t("../react/pages/traffic/argo/tracking.ts"),
				ye = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Le = t("../react/pages/turnstile/tracking.ts"),
				Ie = t("../react/pages/zoneless-workers/constants.ts"),
				Se = t("../react/app/components/AccountHome/tracking.ts"),
				ke = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				He = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				H = t("../react/pages/user-groups/sparrowEvents.ts"),
				ve = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				Pe = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				Ye = t("../react/pages/security/overview/resources/constants.ts"),
				tt = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				ze = t("../react/pages/secrets-store/resources/constants.ts");
			const nt = ((oe, te, ...ge) => n.eg.union([n.eg.literal(oe), n.eg.literal(te), ...ge.map(p => n.eg.literal(p))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", Se.gX.SPARROW_PROJECTS_TABLE_CLICK, Se.gX.SPARROW_EMPTY_STATE_CTA_CLICK, Se.gX.SPARROW_PRODUCT_CARD_CLICK, Se.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, Se.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, Se.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, Se.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, Se.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, Se.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, Se.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ie.QV.clickedDownloadAnalytics, Ie.QV.clickedPrintAnalytics, Ie.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ie.QV.addWCITriggerToExistingWorker, Ie.QV.updateWCITrigger, Ie.QV.deleteWCITrigger, Ie.QV.addWCITriggerToNewWorker, Ie.QV.createWCIBuildForNewWorker, Ie.QV.completedWCIBuildForNewWorker, Ie.QV.changedDefaultConfigurations, le.QV.toggledPagesSmartPlacement, le.QV.downloadDemoProject, Ie.QV.clickCreateWorkerFromRepoNextStep, Ie.QV.clickCreateWorkerFromRepoPreviousStep, Ie.QV.clickCreateNewSCMConnection, Ie.QV.redirectFromSCMOAuth, Ie.QV.clickSubmitError, Ie.QV.selectTemplate, Ie.QV.templateStubWorkerCreated, Ie.QV.templateStubWorkerCreationFailed, Ie.QV.templateRepositoryCreated, Ie.QV.templateRepositoryCreationFailed, Ie.QV.copyTemplateC3Command, Ie.QV.templateDeployClick, Ie.QV.reauthenticateGithubModalShown, Ie.QV.updateGithubPermissionsClicked, Ie.QV.D2W_importRepository, Ie.QV.D2W_stubWorkerCreated, Ie.QV.D2W_stubWorkerCreationFailed, Ie.QV.D2W_repositoryCreated, Ie.QV.D2W_repositoryCreationFailed, Ie.QV.D2W_resourcesProvisioned, Ie.QV.D2W_resourceProvisioningFailed, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", k.N3.INITIAL_FETCH_SCORES, k.N3.FETCH_CONFIGURATION, k.N3.INITIAL_FETCH_TIME_SERIES, k.N3.INITIAL_FETCH_ATTRIBUTES, k.N3.UPDATE_SETTINGS, k.N3.DELETE_RULE, k.N3.UPDATE_RULE, k.N3.FETCH_RULES, k.N3.CONFIGURE_BOT_MANAGEMENT, k.N3.WAF_RULES_REDIRECT, j.F.TOGGLE_TCP_PROTECTION, j.F.GET_TCP_PROTECTION_PREFIXES, j.F.CREATE_TCP_PROTECTION_PREFIXES, j.F.CREATE_TCP_PROTECTION_PREFIX, j.F.UPDATE_TCP_PROTECTION_PREFIX, j.F.DELETE_TCP_PROTECTION_PREFIX, j.F.DELETE_TCP_PROTECTION_PREFIXES, j.F.GET_TCP_PROTECTION_ALLOWLIST, j.F.CREATE_TCP_PROTECTION_ALLOWLIST, j.F.UPDATE_TCP_PROTECTION_ALLOWLIST, j.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, j.F.DELETE_TCP_PROTECTION_ALLOWLIST, j.F.GET_SYN_PROTECTION_RULES, j.F.GET_SYN_PROTECTION_RULE, j.F.CREATE_SYN_PROTECTION_RULE, j.F.UPDATE_SYN_PROTECTION_RULE, j.F.DELETE_SYN_PROTECTION_RULE, j.F.GET_TCP_FLOW_PROTECTION_RULES, j.F.GET_TCP_FLOW_PROTECTION_RULE, j.F.CREATE_TCP_FLOW_PROTECTION_RULE, j.F.UPDATE_TCP_FLOW_PROTECTION_RULE, j.F.DELETE_TCP_FLOW_PROTECTION_RULE, j.F.GET_SYN_PROTECTION_FILTERS, j.F.GET_SYN_PROTECTION_FILTER, j.F.CREATE_SYN_PROTECTION_FILTER, j.F.UPDATE_SYN_PROTECTION_FILTER, j.F.DELETE_SYN_PROTECTION_FILTER, j.F.GET_TCP_FLOW_PROTECTION_FILTERS, j.F.GET_TCP_FLOW_PROTECTION_FILTER, j.F.CREATE_TCP_FLOW_PROTECTION_FILTER, j.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, j.F.DELETE_TCP_FLOW_PROTECTION_FILTER, j.F.GET_DNS_PROTECTION_RULES, j.F.GET_DNS_PROTECTION_RULE, j.F.CREATE_DNS_PROTECTION_RULE, j.F.UPDATE_DNS_PROTECTION_RULE, j.F.DELETE_DNS_PROTECTION_RULE, X.FV.MANAGE_PAGE_SHIELD_POLICY, X.FV.CONFIGURE_PAGE_SHIELD, X.FV.VIEW_DETECTED_CONNECTIONS, X.FV.VIEW_DETECTED_SCRIPTS, X.FV.VIEW_PAGE_SHIELD_POLICIES, X.FV.VIEW_PAGE_SHIELD_SETTINGS, X.FV.OPEN_MUTABLE_VERSION_TOOLTIP, X.FV.SHOW_MUTABLE_VERSION_TOOLTIP, ae.y.CREATE_LIST, ae.y.DELETE_LIST, ae.y.ADD_LIST_ITEM, ae.y.DELETE_LIST_ITEM, Q.KO.PURCHASE_WORKERS_PAID, Q.KO.LIST_CONFIGS, Q.KO.SEARCH_CONFIGS, Q.KO.CREATE_HYPERDRIVE_CONFIG, Q.KO.VIEW_CONFIG_DETAILS, Q.KO.UPDATE_CACHING_SETTINGS, Q.KO.DELETE_HYPERDRIVE_CONFIG, Q.KO.CLICK_HYPERDRIVE_DOCUMENTATION, Q.KO.CLICK_GET_STARTED_GUIDE, Q.KO.CLICK_CONNECTIVITY_GUIDES, Q.KO.CLICK_QUICK_LINK, Q.KO.CLICK_DISCORD, Q.KO.CLICK_COMMUNITY, de.N.CNAME, de.N.IP_ADDRESS, de.N.LB, de.N.UPDATE_CNAME, de.N.UPDATE_IP_ADDRESS, de.N.UPDATE_LB, de.N.DISABLE, D.N.TIERED_CACHE, D.N.CACHE_PURGE, D.N.CACHE_ANALYTICS, ...(0, Le.P)(), ...(0, P.x4)(), ...(0, ee.m8)(), ...(0, H.Ky)(), ...(0, ve.Cf)(), ye.N.CREATE, ye.N.EVENTS, ye.N.ANALYTICS, ye.N.UPDATE, ye.N.GENERATE_PREVIEW, U.RY.INITIATE_URL_SCAN, U.RY.LOAD_SCAN_INFO, U.Ev.LOAD_THREAT_EVENTS, U.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, U.Ev.THREAT_EVENTS_FILTERS, U.Ev.ABUSE_REPORT_BUTTON_CLICK, U.Ev.ABUSE_REPORT_SUBMIT_CLICK, U.Ev.ABUSE_REPORT_SUBMIT_FAILED, U.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, U.v9.EXPAND_INSIGHT_ROW, U.v9.ONE_CLICK_RESOLVE_BUTTON, U.v9.FOLLOW_RESOLVE_URL, U.v9.MANAGE_INSIGHT, U.v9.CLICK_SCAN_NOW, U.v9.CLICK_EXPORT_INSIGHTS, U.v9.BULK_ARCHIVE, U.v9.CLICK_DETAILS_BUTTON, T.Fj[T.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, T.Fj[T.kq.ENDPOINT_MANAGEMENT].detailedMetrics, T.Fj[T.kq.ENDPOINT_MANAGEMENT].createEndpoint, T.Fj[T.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, T.Fj[T.kq.ENDPOINT_MANAGEMENT].deployRouting, T.Fj[T.kq.ENDPOINT_MANAGEMENT].deleteRouting, T.Fj[T.kq.API_DISCOVERY].viewDiscoveredEndpoints, T.Fj[T.kq.API_DISCOVERY].saveDiscoveredEndpoint, T.Fj[T.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, T.Fj[T.kq.SCHEMA_VALIDATION].viewSchemasList, T.Fj[T.kq.SCHEMA_VALIDATION].uploadSchema, T.Fj[T.kq.SCHEMA_VALIDATION].viewSchemaAdoption, T.Fj[T.kq.SCHEMA_VALIDATION].downloadSchema, T.Fj[T.kq.SCHEMA_VALIDATION].deleteSchema, T.Fj[T.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, T.Fj[T.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, T.Fj[T.kq.SEQUENCE_ANALYTICS].viewSequencesPage, T.Fj[T.kq.JWT_VALIDATION].viewJWTRules, T.Fj[T.kq.JWT_VALIDATION].addJWTRule, T.Fj[T.kq.JWT_VALIDATION].editJWTRule, T.Fj[T.kq.JWT_VALIDATION].deleteJWTRule, T.Fj[T.kq.JWT_VALIDATION].reprioritizeJWTRule, T.Fj[T.kq.JWT_VALIDATION].viewJWTConfigs, T.Fj[T.kq.JWT_VALIDATION].addJWTConfig, T.Fj[T.kq.JWT_VALIDATION].editJWTConfig, T.Fj[T.kq.JWT_VALIDATION].deleteJWTConfig, T.Fj[T.kq.SETTINGS].redirectToFirewallRulesTemplate, T.Fj[T.kq.SETTINGS].redirectToPages, T.Fj[T.kq.SETTINGS].listSessionIdentifiers, T.Fj[T.kq.SETTINGS].listRequestsContainingSessionIdentifiers, T.Fj[T.kq.SETTINGS].addOrRemoveSessionIdentifiers, T.Fj[T.kq.SETTINGS].redirectToCustomRules, T.Fj[T.kq.SETTINGS].listAllFallthroughSchemas, T.Fj[T.kq.SEQUENCE_RULES].listSequenceRules, T.Fj[T.kq.SEQUENCE_RULES].deleteSequenceRule, T.Fj[T.kq.SEQUENCE_RULES].reorderSequenceRule, T.Fj[T.kq.SEQUENCE_RULES].createSequenceRule, T.Fj[T.kq.SEQUENCE_RULES].editSequenceRule, q.Z.ANALYTICS, q.Z.CREATE_AND_DEPLOY, q.Z.CREATE_MONITOR_LINK, q.Z.CREATE_MONITOR, q.Z.CREATE_POOL_LINK, q.Z.CREATE_POOL, q.Z.EDIT_MONITOR, q.Z.EDIT_POOL, q.Z.LOAD_BALANCING_TABLE, q.Z.POOL_TABLE, q.Z.EDIT_MONITOR_LINK, q.Z.EDIT_POOL_LINK, N.y.SECONDARY_DNS_NOTIFICATION_CREATE, N.y.SECONDARY_DNS_NOTIFICATION_UPDATE, N.y.SECONDARY_DNS_NOTIFICATION_DELETE, K.U.ZONE_TRANSFER_SUCCESS, K.U.DNS_RECORD_CREATE, K.U.DNS_RECORD_UPDATE, K.U.DNS_RECORD_DELETE, He.Y.PEER_DNS_CREATE, He.Y.PEER_DNS_UPDATE, He.Y.PEER_DNS_DELETE, He.Y.ZONE_TRANSFER_ENABLE, He.Y.ZONE_TRANSFER_DISABLE, _e.V.ARGO_ENABLEMENT, _e.V.ARGO_GEO_ANALYTICS_FETCH, _e.V.ARGO_GLOBAL_ANALYTICS_FETCH, me.X.VIEW_BUCKETS_LIST, me.X.CREATE_BUCKET, me.X.VALIDATE_BUCKET, me.X.DELETE_BUCKET, me.X.VIEW_CAPTURES_LIST, me.X.CREATE_SIMPLE_CAPTURE, me.X.CREATE_FULL_CAPTURE, me.X.VIEW_FULL_CAPTURE, me.X.DOWNLOAD_SIMPLE_CAPTURE, V.bK.VIEW_RULES, V.bK.CREATE_RULE, V.bK.UPDATE_RULE, V.bK.DELETE_RULE, V.bK.VIEW_CONFIGURATION, V.bK.CREATE_CONFIGURATION, V.bK.UPDATE_CONFIGURATION, V.bK.DELETE_CONFIGURATION, re.r8.VIEW_ALERTS, re.r8.VIEW_ALERTS_HISTORY, re.r8.MAGIC_OVERVIEW_ANALYTICS, re.VZ.CREATE_SITE, re.VZ.CREATE_TUNNEL, re.VZ.CREATE_STATIC_ROUTE, W.o4.CLICK_ADAPTIVE_SAMPLING, W.o4.CLICK_TO_LOG_EXPLORER_BANNER, W.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, W.o4.CLICK_SWITCH_TO_RAW_LOGS, W.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", L.U.REGISTER_DOMAIN_SEARCH_SUBMIT, L.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, L.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, L.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, L.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, L.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, L.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, L.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, L.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, L.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, L.U.REGISTER_DOMAIN_CHECKOUT_ERROR, L.U.TRANSFER_DOMAIN_CHANGE_STEP, L.U.RENEW_DOMAIN_COMPLETED, L.U.RESTORE_DOMAIN_INIT, L.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, L.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, L.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, L.U.RESTORE_DOMAIN_FAILURE, L.U.RESTORE_DOMAIN_COMPLETED, L.U.DOMAIN_DELETE_INIT, L.U.DOMAIN_DELETE_COMPLETED, L.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, L.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, L.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, L.U.DOMAIN_DELETE_CONFIRM_DELETE, L.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, L.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, L.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, L.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, L.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, L.U.DOMAIN_MOVE_START_FLOW, L.U.DOMAIN_MOVE_OPEN_DOCS, L.U.DOMAIN_MOVE_CLOSE_FLOW, L.U.DOMAIN_MOVE_PROGRESS_FLOW, L.U.DOMAIN_MOVE_SUBMIT, L.U.DOMAIN_MOVE_INITIATE_SUCCESS, L.U.DOMAIN_MOVE_INITIATE_ERROR, L.U.DOMAIN_MOVE_CANCEL, L.U.DOMAIN_MOVE_CANCEL_SUCCESS, L.U.DOMAIN_MOVE_CANCEL_ERROR, L.U.ACTION_CENTER_NAVIGATE, L.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, L.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, L.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, ze.z3.CREATE_SECRET, ze.z3.DELETE_SECRET, ze.z3.BIND_SECRET, ze.z3.DUPLICATE_SECRET, ze.z3.EDIT_SECRET, x.KO.CLICK_GET_STARTED_GUIDE, x.KO.CLICK_PIPELINE_DOCUMENTATION, x.KO.CLICK_QUICK_LINK, x.KO.CREATE_PIPELINE, x.KO.DELETE_PIPELINE, x.KO.LIST_PIPELINES, x.KO.VIEW_PIPELINE, S.S.EXISTING_DOMAIN, S.S.NEW_DOMAIN, S.S.WAF_RULESET, S.S.WORKERS, S.S.PAGES, S.S.R2, S.S.ACCOUNT_MEMBERS, ce._.TEMPLATE_PRODUCT_SELECTED, ce._.TEMPLATE_SELECTED, ce._.TEMPLATE_SAVE_DRAFT, ce._.TEMPLATE_CANCEL, ce._.TEMPLATE_DEPLOY, pe.D.CLICK_GO_BACK_SHARE_MODAL, pe.D.CLICK_MENU_ITEM_SHARE, pe.D.CLICK_ON_CANCEL_SHARE_MODAL, pe.D.CLICK_ON_CLOSE_SHARE_MODAL, pe.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, pe.D.CLICK_ON_DELETE_RULESET, pe.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, pe.D.CLICK_ON_EDIT_SHARE_PERMISSION, pe.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, pe.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, pe.D.CLICK_ON_SHARE_TABLE_ROW, Z.pR.CLICK_GEOGRAPHICAL_TEMPLATE, Z.pR.CLICK_IP_TEMPLATE, Z.pR.CLICK_USER_AGENT_TEMPLATE, Z.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, ee.vc.CREATED, ee.vc.ENABLED, ee.vc.DISABLED, ee.vc.DELETED, ee.vc.UPDATED, ee.vc.DOWNLOADED, $.Gk.REQUEST_REVIEW, $.Gk.COPY_URL, B.v.FIELD, B.v.OPERATOR, ke.Vj.SHOW_LCC_MIGRATION_BANNER, ke.Vj.CLICK_LCC_DOCUMENTATION, ke.Vj.CLICK_LCC_UPGRADE_GUIDE, ke.Vj.SHOW_LCC_MIGRATION_WARNING, Pe.y.CLICK_DISMISS_INELIGIBILITY, Pe.y.CLICK_NEXT_STEP, Pe.y.CLICK_OPT_IN, Pe.y.CLICK_OPT_IN_BUTTON, Pe.y.CLICK_OPT_OUT_BUTTON, Pe.y.DISPLAY_MODAL, Pe.y.DISPLAY_OPT_OUT_MODAL, Ye.AZ.LOAD_INSIGHTS, Ye.AZ.OPEN_SIDE_MODAL_INSIGHT, Ye.AZ.CLOSE_SIDE_MODAL_INSIGHT, Ye.AZ.CLICK_ACTION_INSIGHT, tt.JR.ADD_SUSPICIOUS_ACTIVITY_FILTER, tt.JR.REMOVE_SUSPICIOUS_ACTIVITY_FILTER),
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
				gt = (oe, te) => {
					const [ge, p] = Y(te);
					let A, ne;
					return (0, n.nM)(nt.decode(oe)) && (A = new b.Uh(oe)), p && p.length > 0 && (ne = new b.oV(oe, p)), [ge, A, ne]
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
					const [A, ne, he] = gt(ge, p);
					if (ne) throw ne;
					return he && console.error(he), oe(te, ge, A)
				};
			var Ue = t("../react/utils/zaraz.ts");
			const Fe = {
					identify: !0
				},
				Re = oe => (te, ge, p) => (Fe[ge] || Ue.tg === null || Ue.tg === void 0 || Ue.tg.track(ge, p), oe(te, ge, p));
			var Je = t("../react/common/selectors/userSelectors.ts"),
				at = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function ot(oe) {
				for (var te = 1; te < arguments.length; te++) {
					var ge = arguments[te] != null ? Object(arguments[te]) : {},
						p = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(ge).filter(function(A) {
						return Object.getOwnPropertyDescriptor(ge, A).enumerable
					})), p.forEach(function(A) {
						st(oe, A, ge[A])
					})
				}
				return oe
			}

			function st(oe, te, ge) {
				return te = vt(te), te in oe ? Object.defineProperty(oe, te, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : oe[te] = ge, oe
			}

			function vt(oe) {
				var te = yt(oe, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function yt(oe, te) {
				if (typeof oe != "object" || oe === null) return oe;
				var ge = oe[Symbol.toPrimitive];
				if (ge !== void 0) {
					var p = ge.call(oe, te || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(oe)
			}
			const ct = new Set(["cf_argo", "load_balancing_basic_plus"]),
				Ne = new Set(["pro", "business"]),
				Te = ({
					price: oe,
					ratePlanId: te,
					ratePlanName: ge,
					frequency: p,
					isNewSubscription: A
				}) => ({
					event: "purchase",
					new_subscription: A,
					ecommerce: {
						transaction_id: (0, at.Z)(),
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
				Ke = oe => {
					const {
						price: te,
						frequency: ge,
						plan: p,
						ratePlanId: A,
						ratePlanName: ne
					} = oe;
					return Ne.has(p) ? ot({}, Te({
						price: te,
						ratePlanId: A,
						ratePlanName: ne,
						frequency: ge,
						isNewSubscription: !0
					}), {
						label: p
					}) : void 0
				},
				Ct = oe => {
					const {
						price: te,
						frequency: ge,
						ratePlan: p,
						ratePlanName: A
					} = oe;
					return ct.has(p) ? ot({}, Te({
						price: te,
						ratePlanId: p,
						ratePlanName: A,
						frequency: ge,
						isNewSubscription: !0
					}), {
						label: p
					}) : void 0
				},
				lt = oe => {
					const {
						price: te,
						frequency: ge,
						plan: p,
						ratePlanId: A,
						ratePlanName: ne,
						label: he
					} = oe;
					return Ne.has(p) ? ot({}, Te({
						price: te,
						frequency: ge,
						ratePlanId: A,
						ratePlanName: ne,
						isNewSubscription: !1
					}), {
						label: he || p
					}) : void 0
				},
				ht = oe => {
					const {
						price: te,
						frequency: ge,
						ratePlan: p,
						ratePlanName: A,
						oldRatePlan: ne
					} = oe;
					return ct.has(p) ? ot({}, Te({
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
				Oe = "Plan Purchase Success",
				we = "Product Purchase Success",
				je = "Plan Update Success",
				Qe = "Product Update Success",
				rt = {
					[G]: !0,
					[se]: !0,
					[Ee]: !0,
					[Oe]: !0,
					[we]: !0,
					[je]: !0,
					[Qe]: !0
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
				ut = oe => {
					var te;
					const {
						deviceViewport: ge,
						page: p,
						previousPage: A,
						pageName: ne,
						utm_campaign: he,
						_ga: Me,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": xe
					} = oe, {
						origin: We
					} = window.location, qe = (0, Je.PR)((0, l.bh)().getState());
					return {
						event: A !== void 0 && p !== A ? "virtual_page_view" : "page_load",
						device_type: ge,
						hostname: We,
						language: navigator.language,
						locale: (0, c.r)((0, l.bh)().getState()),
						page_location: p ? `${We}${p}` : "[redacted]",
						page_path: p ? `${p}` : "[redacted]",
						page_referrer: A ? `${We}/${A}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: ne || "[redacted]",
						page_url: p ? `${We}${p}` : "[redacted]",
						query: he ? `?utm_campaign=${he}` : "[redacted]",
						user_properties: {
							ga_client_id: (te = Me) !== null && te !== void 0 ? te : void 0,
							ga_client_id_s: Me ? `s${Me}` : void 0,
							user_id: bt() ? qe == null ? void 0 : qe.id : void 0,
							ecid: xe ? Tt(xe) : void 0
						}
					}
				},
				Rt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				ft = oe => {
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
				it = (oe, te) => {
					switch (oe) {
						case G:
							return ut(te);
						case se:
							return Rt();
						case Ee:
							return ft(te);
						case Oe:
							return Ke(te);
						case we:
							return Ct(te);
						case je:
							return lt(te);
						case Qe:
							return ht(te);
						default:
							return
					}
				},
				Pt = oe => (te, ge, p) => {
					if (rt[ge]) {
						var A;
						const ne = it(ge, p);
						ne && ((A = window.dataLayer) === null || A === void 0 || A.push(ne))
					}
					return oe(te, ge, p)
				};
			var Dt = t("../react/utils/cookiePreferences.ts");

			function It(oe) {
				for (var te = 1; te < arguments.length; te++) {
					var ge = arguments[te] != null ? Object(arguments[te]) : {},
						p = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(ge).filter(function(A) {
						return Object.getOwnPropertyDescriptor(ge, A).enumerable
					})), p.forEach(function(A) {
						kt(oe, A, ge[A])
					})
				}
				return oe
			}

			function kt(oe, te, ge) {
				return te = Ot(te), te in oe ? Object.defineProperty(oe, te, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : oe[te] = ge, oe
			}

			function Ot(oe) {
				var te = Ve(oe, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function Ve(oe, te) {
				if (typeof oe != "object" || oe === null) return oe;
				var ge = oe[Symbol.toPrimitive];
				if (ge !== void 0) {
					var p = ge.call(oe, te || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(oe)
			}
			const Lt = oe => {
					const te = De((0, l.bh)().getState());
					o().init(It({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: _t() && !(0, i.gm)() && bt(),
						middlewares: [M, Ce, y, Re, ...te ? [Pt] : []]
					}, oe))
				},
				Bt = () => {
					o().identify(It({}, (0, e.getAttribution)(), {
						locale: (0, c.r)((0, l.bh)().getState()),
						isCloudflare: !!(0, g.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				_t = () => !0,
				St = () => {
					(0, Dt.kT)("sparrow_id")
				},
				bt = () => (0, Dt.Xm)()
		},
		"../utils/initStyles.ts": function(z, v, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const i = "cfBaseStyles",
				l = document.head || document.getElementsByTagName("head")[0],
				c = s => {
					const m = [];
					for (let f in s.colors) {
						const n = s.colors[f];
						if (Array.isArray(n) && f !== "categorical")
							for (let a = 0; a < n.length; ++a) m.push(`--cf-${f}-${a}:${n[a]};`)
					}
					return m.join(`
`)
				},
				g = () => {
					const s = (0, e.Yc)(),
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
					let f = document.getElementById(i);
					f ? f.innerText = "" : (f = document.createElement("style"), f.id = i, l.appendChild(f)), f.appendChild(document.createTextNode(m)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(g), v.Z = g
		},
		"../utils/sentry/lastSentEventId.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let i = "";
				return {
					setEventId: g => (!g || typeof g != "string" || (i = g), i),
					getEventId: () => i
				}
			})()
		},
		"../utils/zaraz.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Ro: function() {
					return a
				},
				bM: function() {
					return m
				},
				tg: function() {
					return s
				},
				yn: function() {
					return n
				}
			});

			function e(r) {
				for (var d = 1; d < arguments.length; d++) {
					var u = arguments[d] != null ? Object(arguments[d]) : {},
						_ = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(u).filter(function(h) {
						return Object.getOwnPropertyDescriptor(u, h).enumerable
					})), _.forEach(function(h) {
						o(r, h, u[h])
					})
				}
				return r
			}

			function o(r, d, u) {
				return d = i(d), d in r ? Object.defineProperty(r, d, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[d] = u, r
			}

			function i(r) {
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
				g = {
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
			let s;
			const m = () => {
					window.zaraz, s = g
				},
				f = ["email", "first_name", "last_name"],
				n = r => {
					f.forEach(d => {
						var u;
						(u = s) === null || u === void 0 || u.set(d, r[d])
					})
				},
				a = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(z, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				i = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				l = t.n(i),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(g),
				m = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				f = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				a = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				_ = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				h = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				I = t("../../../common/component/component-filter-bar/src/constants.js"),
				O = t("../../../common/component/component-filter-bar/src/utils.js");

			function C() {
				return C = Object.assign ? Object.assign.bind() : function(U) {
					for (var T = 1; T < arguments.length; T++) {
						var k = arguments[T];
						for (var Z in k) Object.prototype.hasOwnProperty.call(k, Z) && (U[Z] = k[Z])
					}
					return U
				}, C.apply(this, arguments)
			}

			function w(U) {
				for (var T = 1; T < arguments.length; T++) {
					var k = arguments[T] != null ? Object(arguments[T]) : {},
						Z = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(k).filter(function(X) {
						return Object.getOwnPropertyDescriptor(k, X).enumerable
					})), Z.forEach(function(X) {
						E(U, X, k[X])
					})
				}
				return U
			}

			function E(U, T, k) {
				return T = y(T), T in U ? Object.defineProperty(U, T, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[T] = k, U
			}

			function y(U) {
				var T = M(U, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function M(U, T) {
				if (typeof U != "object" || U === null) return U;
				var k = U[Symbol.toPrimitive];
				if (k !== void 0) {
					var Z = k.call(U, T || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(U)
			}
			const S = 70,
				B = (0, c.createStyledComponent)(({
					showOverflow: U
				}) => w({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, U ? {} : {
					maxHeight: S,
					overflow: "hidden"
				})),
				P = (0, c.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				b = (0, c.createStyledComponent)(({
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
				D = (0, c.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				L = (0, c.createStyledComponent)(({
					theme: U
				}) => ({
					color: U.colors.gray[4],
					mr: 1
				}), "span"),
				j = (0, c.createStyledComponent)(() => ({
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
					buttonStyle: U
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
				}, U), f.zx),
				re = (0, c.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				me = (0, c.createStyledComponent)(({
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
				ce = (0, c.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				le = U => U.current ? [...U.current.children].reduce((T, k) => (k.offsetTop >= S && T++, T), 0) : 0;
			let x = 0;
			class $ extends e.Component {
				constructor() {
					super();
					E(this, "overflowWrapper", (0, e.createRef)()), E(this, "hasOverflowed", T => {
						const k = le(this.overflowWrapper);
						T.scrollHeight > S && k >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (T.scrollHeight < S || k === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), E(this, "addNewFilter", () => {
						const {
							filterDefinitions: T
						} = this.props, k = (0, O.TE)(T), Z = Object.keys(k)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: Z,
								operator: (0, O.uv)(Z, k),
								value: (0, O.TT)(Z, k)
							}
						})
					}), E(this, "handleOpenFilterEdit", T => {
						this.setState({
							openFilter: T,
							filterChanges: w({}, this.props.filters[T])
						})
					}), E(this, "handleRemoveFilterClick", (T, k) => {
						T.stopPropagation(), this.removeFilter(k)
					}), E(this, "removeFilter", T => {
						const {
							handleFiltersChange: k
						} = this.props, Z = [...this.props.filters], X = Z[T];
						Z.splice(T, 1), k(Z), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
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
					}), E(this, "handleFilterSubmit", T => {
						const {
							filterDefinitions: k
						} = this.props;
						T.preventDefault();
						const {
							filterChanges: Z
						} = this.state, X = typeof k[Z.key].parse == "function" ? Array.isArray(Z.value) ? Z.value.map(k[Z.key].parse) : k[Z.key].parse(Z.value) : Z.value;
						if (k[Z.key].validate && (Array.isArray(X) ? !X.every(k[Z.key].validate) : !k[Z.key].validate(X))) return this.setState({
							invalid: !0
						});
						const ae = [...this.props.filters],
							q = w({}, Z, {
								value: X
							}),
							N = !ae[this.state.openFilter];
						N ? ae.push(q) : ae[this.state.openFilter] = w({}, q), this.props.handleFiltersChange(ae, q), (N ? this.props.onAddFilter : this.props.onEditFilter)({
							field: q.key,
							operator: q.operator,
							value: q.value
						}), this.closeOpenFilterChanges()
					}), E(this, "handlePendingKeyChange", ({
						value: T
					}) => {
						const {
							filterDefinitions: k
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: T,
								operator: (0, O.uv)(T, k),
								value: (0, O.TT)(T, k)
							}
						})
					}), E(this, "handlePendingOperatorChange", ({
						value: T
					}) => {
						let k = w({}, this.state.filterChanges, {
							operator: T
						});
						if ((0, O.dr)(T)) {
							var Z, X;
							((Z = this.state.filterChanges) === null || Z === void 0 ? void 0 : Z.value) && !Array.isArray((X = this.state.filterChanges) === null || X === void 0 ? void 0 : X.value) && (k.value = [this.state.filterChanges.value])
						} else {
							var ae, q, N;
							((ae = this.state.filterChanges) === null || ae === void 0 ? void 0 : ae.value) && Array.isArray((q = this.state.filterChanges) === null || q === void 0 ? void 0 : q.value) && ((N = this.state.filterChanges) === null || N === void 0 ? void 0 : N.value.length) > 0 && (k.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: k
						})
					}), E(this, "handlePendingValueChange", T => {
						this.setState({
							invalid: !1,
							filterChanges: w({}, this.state.filterChanges, {
								value: T
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
						id: ++x
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(T) {
					T.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(T) {
					const {
						formatLabel: k,
						filterDefinitions: Z
					} = this.props, {
						operator: X
					} = this.state.filterChanges, ae = Z[this.state.filterChanges.key], q = this.state.filterChanges.value, N = V => Array.isArray(V) ? V.map(W => W.value) : (V == null ? void 0 : V.value) || null;
					if (ae.renderValueComponent) return ae.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (ae.type) {
						case I.k.custom: {
							var K;
							return o().createElement(ae.CustomComponent, C({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (K = ae == null ? void 0 : ae.customProps) !== null && K !== void 0 ? K : {}))
						}
						case I.k.select:
							return (0, O.dr)(X) ? o().createElement(u.Z, {
								searchable: !0,
								multi: !0,
								creatable: !ae.options,
								value: typeof q.split == "function" ? q == null ? void 0 : q.split(",") : Array.isArray(q) ? q : [],
								options: ae.options ? ae.options.map(V => ({
									value: V.value || V,
									label: V.label || k(this.state.filterChanges.key, V, T)
								})) : q ? (Array.isArray(q) ? q : q.split(",")).map(V => ({
									label: V,
									value: V
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(g.Trans, {
									id: ae.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: ae.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: V => {
									this.handlePendingValueChange(N(V))
								},
								isValidNewOption: V => {
									const W = ae.validate;
									return !W && V || V && W([V])
								},
								getNewOptionData: (V, W) => ({
									value: V,
									label: W
								})
							}) : o().createElement(r.hQ, {
								hideLabel: !0,
								value: q,
								options: ae.options.map(V => ({
									value: V,
									label: k(this.state.filterChanges.key, V, T)
								})),
								onChange: ({
									value: V
								}) => this.handlePendingValueChange(V)
							});
						case I.k.string:
						default:
							return (0, O.dr)(X) ? o().createElement(u.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof q.split == "function" ? q == null ? void 0 : q.split(",") : Array.isArray(q) ? q : [],
								options: q ? (Array.isArray(q) ? q : q.split(",")).map(V => ({
									label: V,
									value: V
								})) : [],
								noOptionsMessage: () => null,
								placeholder: T.t("analytics.report.filters.labels.placeholder", {
									example: Z[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: V => {
									this.handlePendingValueChange(N(V))
								},
								isValidNewOption: V => {
									const W = ae.validate;
									return !W && V || V && W([V])
								},
								getNewOptionData: (V, W) => ({
									value: V,
									label: W
								}),
								formatCreateLabel: V => T.t("filter_editor.value_create_label", {
									value: V
								})
							}) : o().createElement(g.I18n, null, V => o().createElement(m.I, {
								value: this.state.filterChanges.value,
								onChange: W => this.handlePendingValueChange(W.target.value),
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
						formatLabel: T,
						filterDefinitions: k,
						modalStyles: Z,
						filterIconType: X,
						buttonStyle: ae
					} = this.props, q = le(this.overflowWrapper), N = `filterPanel${this.state.id}`, K = this.state.openFilter !== null;
					return o().createElement(g.I18n, null, V => o().createElement(d.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(ce, null, o().createElement(Q, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": K,
						"aria-controls": N,
						inverted: !0,
						buttonStyle: ae
					}, o().createElement(n.J, {
						type: X || "add",
						mr: 1,
						label: V.t("common.add", {
							_: "Add"
						})
					}), o().createElement(g.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(re, null, o().createElement(g.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(B, {
						innerRef: this.overflowWrapper,
						overflowLimit: S,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((W, ee) => {
						const {
							key: pe,
							operator: de,
							value: _e
						} = W, ye = k[pe].ignoreLabelTranslation ? k[pe].label : V.t(k[pe].label), Le = V.t(`analytics.report.filters.operators.${de}`), Ie = Array.isArray(_e) ? _e.map(ke => T(pe, ke, V)).join(", ") : T(pe, _e, V), Se = `${ye} ${Le} ${Ie}`;
						return o().createElement(P, {
							key: `${pe}-${de}-${_e}`,
							title: Se
						}, o().createElement(b, {
							onClick: () => this.handleOpenFilterEdit(ee)
						}, o().createElement(d.ZC, {
							display: "flex"
						}, o().createElement(D, null, ye), o().createElement(L, null, Le), o().createElement(j, null, Ie), (0, O.oN)(W, k) ? o().createElement(a.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(me, {
							onClick: ke => this.handleRemoveFilterClick(ke, ee),
							"aria-label": "remove"
						}, o().createElement(n.J, {
							type: "remove"
						})))))
					})), K && o().createElement(h.Z, {
						id: N,
						filterDefinitions: k,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, O.oN)(this.state.filterChanges, k),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: T,
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
		"../../../common/component/component-filter-bar/src/index.js": function(z, v, t) {
			"use strict";
			t.d(v, {
				ME: function() {
					return o.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return i.k
				},
				oN: function() {
					return l.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				i = t("../../../common/component/component-filter-bar/src/constants.js"),
				l = t("../../../common/component/component-filter-bar/src/utils.js"),
				c = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				OZ: function() {
					return c
				},
				YB: function() {
					return l
				}
			});

			function e(s, m, f) {
				return m = o(m), m in s ? Object.defineProperty(s, m, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[m] = f, s
			}

			function o(s) {
				var m = i(s, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function i(s, m) {
				if (typeof s != "object" || s === null) return s;
				var f = s[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(s, m || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(s)
			}
			class l extends Error {
				constructor(m, f) {
					super(f);
					e(this, "translationKey", void 0), this.translationKey = m, this.name = "TranslatorError"
				}
			}
			class c extends l {
				constructor(m) {
					super(m, `Translation key not found: ${m}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var g = null
		},
		"../../../common/util/types/src/api/domain.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Aw: function() {
					return M
				},
				Ib: function() {
					return E
				},
				Ks: function() {
					return S
				},
				MS: function() {
					return y
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
					return O
				},
				dN: function() {
					return B
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
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				i = e.eg.object({
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
				g = e.eg.object({
					registrant: l.optional,
					technical: l.optional,
					administrator: l.optional,
					billing: l.optional
				}),
				s = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: g.optional,
					years: e.eg.number
				}),
				m = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let f = function(P) {
				return P.ONBOARDING_INITIATED = "Onboarding Initiated", P.ONBOARDED = "Onboarded", P.PENDING_REGISTRY_LOCK = "Pending Registry Lock", P.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", P.REGISTRY_UNLOCKED = "Registry Unlocked", P.LOCKED = "Locked", P.FAILED_TO_LOCK = "Failed To Lock", P.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", P.UNLOCKED = "Unlocked", P.OFFBOARDED = "Offboarded", P
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
					fees: m.optional,
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
					transfer_conditions: c.optional,
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
			let _ = function(P) {
				return P.PENDING = "pending", P.VERIFIED = "verified", P.REJECTED = "rejected", P.PENDING_DELETE = "pending_delete", P.DELETED = "deleted", P
			}({});
			const h = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(_),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				I = e.eg.object({
					designated_approvers: e.eg.array(h)
				});
			let O = function(P) {
				return P.PENDING = "pending", P.PENDING_UPDATE = "pending_update", P.ENABLED = "enabled", P.DISABLED = "disabled", P
			}({});
			const C = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(O)
				}),
				w = e.eg.intersection([C, I]),
				E = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let y = function(P) {
				return P.UNLOCK_APPROVAL = "UnlockApprovalRequest", P.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", P.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", P.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", P
			}({});
			const M = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				S = e.eg.object({
					message: e.eg.string
				}),
				B = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(z, v, t) {
			"use strict";
			t.d(v, {
				df: function() {
					return o
				},
				eX: function() {
					return i
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
					return g
				}
			});
			let e = function(s) {
					return s.Custom = "custom", s.Root = "root", s.Managed = "managed", s.Zone = "zone", s.RateLimit = "ratelimit", s
				}({}),
				o = function(s) {
					return s.Cache = "http_request_cache_settings", s.HttpConfigSettings = "http_config_settings", s.HttpLogCustomFields = "http_log_custom_fields", s.HttpRateLimit = "http_ratelimit", s.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", s.HttpRequestFirewallCustom = "http_request_firewall_custom", s.HttpRequestFirewallManaged = "http_request_firewall_managed", s.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", s.HttpRequestLateTransform = "http_request_late_transform", s.HttpRequestMain = "http_request_main", s.HttpRequestOrigin = "http_request_origin", s.HttpRequestRedirect = "http_request_redirect", s.HttpRequestSanitize = "http_request_sanitize", s.HttpRequestSBFM = "http_request_sbfm", s.HttpRequestsSnippets = "http_request_snippets", s.HttpRequestTransform = "http_request_transform", s.HttpResponseCompression = "http_response_compression", s.HttpResponseFirewallManaged = "http_response_firewall_managed", s.HttpResponseTransform = "http_response_headers_transform", s.L4DDoS = "ddos_l4", s.L7DDoS = "ddos_l7", s.MagicIDS = "magic_transit_ids_managed", s.MagicManaged = "magic_transit_managed", s.MagicTransit = "magic_transit", s.MagicTransitRateLimit = "magic_transit_ratelimit", s
				}({}),
				i = function(s) {
					return s.Execute = "execute", s.All = "all", s.Block = "block", s.JSChallenge = "js_challenge", s.Challenge = "challenge", s.Allow = "allow", s.Bypass = "bypass", s.Log = "log", s.Rewrite = "rewrite", s.Score = "score", s.Skip = "skip", s.Managed_Challenge = "managed_challenge", s.DDoS_Dynamic = "ddos_dynamic", s.Select_Config = "select_config", s.Set_Config = "set_config", s.Reset = "reset", s.Redirect = "redirect", s.Cache = "set_cache_settings", s
				}({}),
				l = function(s) {
					return s.ZONE_LOCKDOWN = "zoneLockdown", s.UA_BLOCK = "uaBlock", s.BIC = "bic", s.HOT = "hot", s.SECURITY_LEVEL = "securityLevel", s.RATE_LIMIT = "rateLimit", s.WAF = "waf", s
				}({}),
				c = function(s) {
					return s.DEFAULT = "default", s.MEDIUM = "medium", s.LOW = "low", s.EOFF = "eoff", s.HIGH = "high", s.VERY_HIGH = "very_high", s
				}({}),
				g = function(s) {
					return s.DEFAULT = "", s.XML = "text/xml", s.JSON = "application/json", s.TEXT = "text/plain", s.HTML = "text/html", s
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Yd: function() {
					return e
				},
				vE: function() {
					return o
				}
			});

			function e(i) {
				return Object.keys(i)
			}
			const o = (i, l) => {
				if (l !== void 0) throw new Error("Unexpected object: " + i);
				return l
			}
		},
		"../../../dash/intl/intl-translations/src/index.ts": function(z, v, t) {
			"use strict";
			t.d(v, {
				Fy: function() {
					return e.Z
				},
				if: function() {
					return i.Z
				},
				n4: function() {
					return o.n
				}
			});
			var e = t("../../../dash/intl/intl-translations/src/makeLoadPhrases.ts"),
				o = t("../../../dash/intl/intl-translations/src/catalogMap.ts"),
				i = t("../../../dash/intl/intl-translations/src/supportedCatalogs.ts")
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(z, v, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(i) {
				if (!t.o(e, i)) return Promise.resolve().then(function() {
					var g = new Error("Cannot find module '" + i + "'");
					throw g.code = "MODULE_NOT_FOUND", g
				});
				var l = e[i],
					c = l[0];
				return t.e(l[1]).then(function() {
					return t.t(c, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", z.exports = o
		}
	}
]);

//# debugId=30e15747-69af-5ea4-9ea0-7d64614e2f7b