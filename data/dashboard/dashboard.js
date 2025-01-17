! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b69537d8-2146-5c77-8d27-a3e8b79c0355")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				J8: function() {
					return s
				},
				Jd: function() {
					return c
				},
				QY: function() {
					return f
				},
				Qw: function() {
					return i
				},
				ki: function() {
					return d
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/utils/url.ts"),
				a = t("../../../../node_modules/query-string/query-string.js"),
				p = t.n(a),
				u = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m;
			const i = () => Object.keys(u.Z).reduce((_, A) => (A.indexOf("cf_beta.") === 0 && u.Z.get(A) === "true" && _.push(A.split(".").slice(1).join(".")), _), []),
				d = () => {
					var _, A, S;
					return ((_ = window) === null || _ === void 0 || (A = _.bootstrap) === null || A === void 0 || (S = A.data) === null || S === void 0 ? void 0 : S.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((m = window) === null || m === void 0 ? void 0 : m.location) && u.Z) {
				const _ = p().parse(window.location.search);
				_.beta_on && u.Z.set(`cf_beta.${_.beta_on}`, !0), _.beta_off && u.Z.set(`cf_beta.${_.beta_off}`, !1)
			}
			const E = {},
				n = _ => {
					var A, S, h;
					return Object.prototype.hasOwnProperty.call(E, _) ? E[_] : ((A = window) === null || A === void 0 || (S = A.bootstrap) === null || S === void 0 || (h = S.data) === null || h === void 0 ? void 0 : h.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(R => R === _) ? (E[_] = !0, !0) : (E[_] = !1, !1)
				},
				r = _ => u.Z ? u.Z.get(`cf_beta.${_}`) === !0 : !1,
				s = _ => r(_) || n(_),
				l = () => !0,
				c = () => {
					var _, A, S;
					return ((_ = window) === null || _ === void 0 || (A = _.bootstrap) === null || A === void 0 || (S = A.data) === null || S === void 0 ? void 0 : S.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				f = _ => {
					const A = (0, e.uF)(_),
						S = (A == null ? void 0 : A.roles) || [];
					return (0, o.qR)(location.pathname) && S.length === 1 && S.some(h => h === "Administrator Read Only")
				}
		},
		"../init.ts": function(F, y, t) {
			"use strict";
			t.r(y);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				a = t("../libs/init/initGlobal.ts"),
				p = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				u = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function m(D) {
				for (var U = 1; U < arguments.length; U++) {
					var Q = arguments[U] != null ? Object(arguments[U]) : {},
						ue = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(Q).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(Q, _e).enumerable
					})), ue.forEach(function(_e) {
						i(D, _e, Q[_e])
					})
				}
				return D
			}

			function i(D, U, Q) {
				return U = d(U), U in D ? Object.defineProperty(D, U, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[U] = Q, D
			}

			function d(D) {
				var U = E(D, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function E(D, U) {
				if (typeof D != "object" || D === null) return D;
				var Q = D[Symbol.toPrimitive];
				if (Q !== void 0) {
					var ue = Q.call(D, U || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(D)
			}
			const n = D => {
				const U = D && D.headers || {},
					Q = new Headers(U);
				return Q.append("X-Cross-Site-Security", "dash"), m({}, D, {
					headers: Q
				})
			};
			(0, u.register)({
				request: (D, U) => {
					try {
						return new URL(D), D === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", U] : [D, U]
					} catch {
						return [D, n(U)]
					}
				}
			});
			var r = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				s = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = t("../react/app/providers/storeContainer.js");
			let c = "";
			const f = 61;

			function _(D) {
				const U = D.substr(1);
				if (U && c !== U) {
					const Q = document.getElementById(U);
					if (Q) {
						const ue = Q.getBoundingClientRect().top;
						if (ue > 0) {
							const _e = ue - f;
							document.documentElement.scrollTop = _e
						}
					}
				}
				c = U
			}

			function A(D) {
				D.listen(U => _(U.hash))
			}
			var S = t("../../../../node_modules/cookie/index.js"),
				h = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const R = "CF_dash_version",
				v = "cf_fv_preview",
				C = "current",
				N = "hash",
				b = "deploymentPreview",
				M = "fragmentPreview",
				T = D => D === C ? P() : L(),
				P = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				L = (D = 72) => {
					const U = 36e5;
					return new Date(Date.now() + D * U)
				},
				H = D => {
					switch (D) {
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
				X = (D, U = !1) => {
					var Q;
					const ue = H(D),
						_e = `
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
    <h1 id="error-title">${ue.title}</h1>
    <p id="error-description">${ue.description}</p>
  </div>
  `,
						De = U ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${h.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(Q=window.build)===null||Q===void 0?void 0:Q.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return _e + De
				},
				ne = D => {
					var U;
					const Q = document.getElementById(D);
					!Q || (U = Q.parentNode) === null || U === void 0 || U.removeChild(Q)
				};

			function ae() {
				const D = document.getElementById("loading-state");
				D == null || D.classList.add("hide"), D == null || D.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(ne)
				})
			}

			function Y(D) {
				var U;
				const Q = document.getElementById("loading-state"),
					ue = !!((U = S.parse(document.cookie)) === null || U === void 0 ? void 0 : U[R]);
				!Q || (Q.innerHTML = X(D == null ? void 0 : D.code, ue))
			}
			var K = t("../utils/initStyles.ts"),
				me = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				q = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				G = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				V = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				x = t("../../../../node_modules/history/esm/history.js"),
				oe = (0, x.lX)(),
				j = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				O = t("../react/utils/url.ts");
			const k = (0, j.Rf)();
			let W;

			function se(D) {
				return de(D, "react-router-v5")
			}

			function de(D, U) {
				return (Q, ue = !0, _e = !0) => {
					ue && k && k.location && (W = Q({
						name: (0, O.Fl)(k.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": U
						}
					})), _e && D.listen && D.listen((De, Pe) => {
						if (Pe && (Pe === "PUSH" || Pe === "POP")) {
							W && W.finish();
							const ot = {
								"routing.instrumentation": U
							};
							W = Q({
								name: (0, O.Fl)(De.pathname),
								op: "navigation",
								tags: ot
							})
						}
					})
				}
			}
			var Ce = t("../react/common/selectors/languagePreferenceSelector.ts"),
				be = t("../flags.ts"),
				we = t("../utils/getDashVersion.ts"),
				Be = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				We = t.n(Be),
				Ue = t("../../../common/intl/intl-core/src/errors.ts"),
				Ge = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Qe = t("../react/common/middleware/sparrow/errors.ts");
			const Z = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ie = !0,
				w = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				te = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/];

			function he(D, U, Q) {
				return U = ze(U), U in D ? Object.defineProperty(D, U, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[U] = Q, D
			}

			function ze(D) {
				var U = Fe(D, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function Fe(D, U) {
				if (typeof D != "object" || D === null) return D;
				var Q = D[Symbol.toPrimitive];
				if (Q !== void 0) {
					var ue = Q.call(D, U || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(D)
			}
			class xe {
				constructor() {
					he(this, "name", xe.id)
				}
				setupOnce() {
					t.g.console && (0, Ge.hl)(t.g.console, "error", U => (...Q) => {
						const ue = Q.find(_e => _e instanceof Error);
						if (Z && ue) {
							let _e, De = !0;
							if (ue instanceof Qe.ez) {
								const Pe = ue instanceof Qe.oV ? ue.invalidProperties : void 0;
								_e = {
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
								}, De = !1
							} else if (ue instanceof Be.SparrowIdCookieError) _e = {
								extra: {
									sparrowIdCookie: ue.cookie
								},
								fingerprint: [ue.name ? ue.name : "SparrowIdCookieError"]
							};
							else if (ue.name === "ChunkLoadError") {
								_e = {
									fingerprint: [ue.name]
								};
								try {
									_e.tags = {
										chunkId: ue.message.split(" ")[2],
										chunkUrl: ue.request
									}
								} catch {}
							} else ue instanceof Ue.YB && (_e = {
								fingerprint: ["TranslatorError", ue.translationKey]
							});
							De && r.Tb(ue, _e)
						}
						typeof U == "function" && U.apply(t.g.console, Q)
					})
				}
			}
			he(xe, "id", "ConsoleErrorIntegration");
			var Ie = null,
				Re = t("../utils/sentry/lastSentEventId.ts"),
				Ne = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				Ke = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const Xe = D => {
					const U = async Q => {
						var ue, _e;
						const De = {
							envelope: Q.body,
							url: D.url,
							isPreviewDeploy: (ue = window) === null || ue === void 0 || (_e = ue.build) === null || _e === void 0 ? void 0 : _e.isPreviewDeploy,
							release: (0, we.t)()
						};
						try {
							const Pe = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(De)
							});
							return {
								statusCode: Pe.status,
								headers: {
									"x-sentry-rate-limits": Pe.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": Pe.headers.get("Retry-After")
								}
							}
						} catch (Pe) {
							return console.log(Pe), (0, Ke.$2)(Pe)
						}
					};
					return Ne.q(D, U)
				},
				Ze = () => {
					if (Z && ie) {
						var D, U, Q, ue, _e, De, Pe, ot, mt, et;
						let Nt = "production";
						((D = window) === null || D === void 0 || (U = D.build) === null || U === void 0 ? void 0 : U.isPreviewDeploy) && (Nt += "-preview"), q.S({
							dsn: Z,
							release: (0, we.t)(),
							environment: Nt,
							ignoreErrors: te,
							allowUrls: w,
							autoSessionTracking: !1,
							integrations: [new G.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new xe, new V.jK.BrowserTracing({
								routingInstrumentation: se(oe)
							})],
							tracesSampleRate: 0,
							transport: Xe,
							beforeSend: vt => (Re.e.setEventId(vt.event_id), vt)
						});
						const ht = (0, l.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, be.Qw)(),
							USER_BETA_FLAGS: (0, be.ki)(),
							meta: {
								connection: {
									type: (Q = window) === null || Q === void 0 || (ue = Q.navigator) === null || ue === void 0 || (_e = ue.connection) === null || _e === void 0 ? void 0 : _e.effectiveType,
									bandwidth: (De = window) === null || De === void 0 || (Pe = De.navigator) === null || Pe === void 0 || (ot = Pe.connection) === null || ot === void 0 ? void 0 : ot.downlink
								},
								languagePreference: (0, Ce.r)(ht),
								isPreviewDeploy: (mt = window) === null || mt === void 0 || (et = mt.build) === null || et === void 0 ? void 0 : et.isPreviewDeploy
							},
							utilGates: (0, me.T2)(ht)
						}), window.addEventListener("unhandledrejection", function(vt) {})
					}
				},
				z = D => {
					D ? r.av({
						id: D
					}) : r.av(null)
				};
			var J = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Se = () => {
					let D;
					try {
						D = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), D = window.location.search
					}
					if (!D.includes("remote[")) return;
					const U = new URLSearchParams(D),
						Q = {};
					for (let [ue, _e] of U) ue.includes("remote") && (Q[ue.replace(/remote\[|\]/g, "")] = _e);
					J.Z.set("mfe-remotes", JSON.stringify(Q))
				},
				ke = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				Ve = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const Ye = "ANON_USER_ID";

			function lt() {
				var D, U, Q, ue;
				let _e = (D = t.g) === null || D === void 0 || (U = D.bootstrap) === null || U === void 0 || (Q = U.data) === null || Q === void 0 || (ue = Q.user) === null || ue === void 0 ? void 0 : ue.id;
				if (!_e) {
					let De = J.Z.get(Ye);
					if (!De) {
						let Pe = (0, Ve.Z)();
						J.Z.set(Ye, Pe), De = Pe
					}
					return De
				}
				return _e
			}
			async function ut() {
				const D = (0, l.bh)();
				D.dispatch((0, ke.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await D.dispatch((0, me.UL)({
					userId: lt()
				}))
			}
			class _t extends Error {
				constructor(U, Q) {
					super(Q);
					this.name = `${U} ${Q}`
				}
			}
			const gt = () => {
					document.cookie.split(";").forEach(U => {
						const [Q] = U.trim().split("=");
						document.cookie = `${Q}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				it = async () => {
					let D = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!D.ok) throw D.headers.get("content-type") === "text/html" && (await D.text()).toLowerCase().includes("cookie too large") && (r.$e(function(_e) {
						_e.setTag("init", "cookieTooLarge"), r.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), gt(), window.location.reload()), new _t("Bootstrap API Failure", D == null ? void 0 : D.status);
					return (await D.json()).result.data
				};
			var je = t("webpack/sharing/consume/default/react/react"),
				Te = t.n(je),
				qe = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				dt = t("webpack/sharing/consume/default/react-dom/react-dom"),
				ct = t("webpack/sharing/consume/default/react-redux/react-redux"),
				$ = t("../../../../node_modules/swr/core/dist/index.mjs"),
				ce = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				ve = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Ae = t("../react/shims/focus-visible.js"),
				le = t("../react/app/components/DeepLink/index.ts"),
				pe = t("../../../../node_modules/prop-types/index.js"),
				ye = t.n(pe),
				B = t("../react/utils/translator.tsx"),
				re = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				fe = t("../../../dash/intl/intl-translations/src/index.ts"),
				Le = t("../../../../node_modules/query-string/query-string.js"),
				Me = t.n(Le),
				He = t("../react/common/actions/userActions.ts"),
				tt = t("../react/common/selectors/userSelectors.ts"),
				Je = t("../react/utils/i18n.ts"),
				ft = t("../react/utils/bootstrap.ts");

			function st(D) {
				for (var U = 1; U < arguments.length; U++) {
					var Q = arguments[U] != null ? Object(arguments[U]) : {},
						ue = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(Q).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(Q, _e).enumerable
					})), ue.forEach(function(_e) {
						rt(D, _e, Q[_e])
					})
				}
				return D
			}

			function rt(D, U, Q) {
				return U = $t(U), U in D ? Object.defineProperty(D, U, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[U] = Q, D
			}

			function $t(D) {
				var U = jt(D, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function jt(D, U) {
				if (typeof D != "object" || D === null) return D;
				var Q = D[Symbol.toPrimitive];
				if (Q !== void 0) {
					var ue = Q.call(D, U || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(D)
			}
			let at = Me().parse(location.search);
			const kt = D => {
					const U = (0, ft.$8)() ? [(0, fe.Fy)(fe.if.changes), (0, fe.Fy)(fe.if.common), (0, fe.Fy)(fe.if.navigation), (0, fe.Fy)(fe.if.overview), (0, fe.Fy)(fe.if.onboarding), (0, fe.Fy)(fe.if.invite), (0, fe.Fy)(fe.if.login), (0, fe.Fy)(fe.if.dns), (0, fe.Fy)(fe.n4.ssl_tls), (0, fe.Fy)(fe.if.message_inbox), (0, fe.Fy)(fe.if.welcome)] : [(0, fe.Fy)(fe.if.common), (0, fe.Fy)(fe.if.invite), (0, fe.Fy)(fe.if.login), (0, fe.Fy)(fe.if.onboarding)];
					at.lang ? Wt(D) : J.Z.get(Je.th) && Tt(D, (0, Je.Kd)());
					const Q = async ue => (await Promise.all(U.map(De => De(ue)))).reduce((De, Pe) => st({}, De, Pe), {});
					return Te().createElement(re.LocaleContext.Provider, {
						value: D.languagePreference
					}, Te().createElement(re.I18nProvider, {
						translator: B.Vb,
						locale: D.languagePreference
					}, Te().createElement(re.I18nLoader, {
						loadPhrases: Q
					}, D.children)))
				},
				Wt = async D => {
					let U = at.lang.substring(0, at.lang.length - 2) + at.lang.substring(at.lang.length - 2, at.lang.length).toUpperCase();
					if (!(0, Ce.v)(U)) {
						console.warn(`${U} is not a supported locale.`), delete at.lang, D.history.replace({
							search: Me().stringify(at)
						});
						return
					}(0, Je.i_)(U), delete at.lang, Tt(D, U), D.isAuthenticated || D.history.replace({
						search: Me().stringify(at)
					})
				}, Tt = async (D, U) => {
					if (D.isAuthenticated) try {
						await D.setUserCommPreferences({
							"language-locale": U
						}, {
							hideErrorAlert: !0
						}), J.Z.remove(Je.th), D.history.replace({
							search: Me().stringify(at)
						})
					} catch (Q) {
						J.Z.set(Je.th, !0), console.error(Q)
					} else J.Z.set(Je.th, !0)
				}, zt = D => {
					const U = (0, tt.PR)(D);
					return {
						isAuthenticated: !!(U && U.id),
						languagePreference: (0, Je.Kd)() || (0, Ce.r)(D)
					}
				}, bt = {
					setUserCommPreferences: He.V_
				};
			var Gt = (0, qe.withRouter)((0, ct.connect)(zt, bt)(kt));
			kt.propTypes = {
				history: ye().object,
				languagePreference: ye().string.isRequired,
				children: ye().node.isRequired,
				isAuthenticated: ye().bool,
				setUserCommPreferences: ye().func.isRequired
			};
			var Ht = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Kt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let At;
			const Bt = ({
				selectorPrefix: D = "c_"
			} = {}) => (At || (At = (0, Kt.Z)({
				dev: !1,
				selectorPrefix: D
			})), At);
			var Vt = t("../react/common/components/ModalManager.tsx"),
				Zt = t("../react/app/components/ErrorBoundary.tsx"),
				Yt = t("../react/common/actions/notificationsActions.ts");
			const g = (t.g.bootstrap || {}).data || {};
			class I extends Te().Component {
				componentDidMount() {
					g.messages && this.dispatchNotificationActions(g.messages)
				}
				dispatchNotificationActions(U) {
					U.forEach(Q => {
						const {
							type: ue,
							message: _e,
							persist: De
						} = Q;
						["success", "info", "warn", "error"].includes(ue) && this.props.notifyAdd(ue, (0, B.ZP)(_e), {
							persist: !!De
						})
					})
				}
				render() {
					return null
				}
			}
			var Oe = (0, qe.withRouter)((0, ct.connect)(null, {
				notifyAdd: Yt.IH
			})(I));
			I.propTypes = {
				notifyAdd: ye().func.isRequired
			};
			var $e = t("../react/app/redux/index.ts");

			function pt() {
				var D;
				const U = (0, $e.p4)(tt.PR),
					Q = (U == null || (D = U.email) === null || D === void 0 ? void 0 : D.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ue = (0, ke.Yc)();
				(0, je.useEffect)(() => {
					ue({
						userType: Q
					})
				}, [Q, ue])
			}
			var yt = t("../react/common/selectors/entitlementsSelectors.ts"),
				Ct = t("../react/common/selectors/accountSelectors.ts");
			const Ot = ["accountId", "is_ent"];

			function It() {
				const D = (0, ke.f7)(),
					U = (0, qe.useHistory)(),
					Q = (0, O.uW)(U.location.pathname),
					ue = (0, ke.Yc)(),
					_e = (0, ke.O$)(),
					De = (0, $e.p4)(yt.u1),
					Pe = !De.isRequesting && !!De.data,
					ot = (0, $e.p4)(yt.p1),
					mt = (0, $e.p4)(Ct.Xu),
					et = (0, $e.p4)(Ct.uF),
					Nt = !mt.isRequesting && !!mt.data;
				(0, je.useEffect)(() => {
					if (Q && Nt && et && Pe && Q === et.account.id) {
						var ht, vt, Qt;
						ue({
							accountId: et.account.id,
							is_ent: ot,
							is_free_account: !ot && !(et == null || (ht = et.account.meta) === null || ht === void 0 ? void 0 : ht.has_business_zones) && !(et == null || (vt = et.account.meta) === null || vt === void 0 ? void 0 : vt.has_pro_zones) && !(et == null || (Qt = et.account.meta) === null || Qt === void 0 ? void 0 : Qt.has_enterprise_zones)
						})
					} else(!Q || Q in D && D.accountId !== Q) && _e(Ot)
				}, [Nt, et, ue, _e, Pe, ot, Q, D])
			}
			var Pt = t("../react/common/selectors/zoneSelectors.ts");

			function St() {
				const D = (0, $e.p4)(Pt.nA),
					U = (0, ke.Yc)();
				(0, je.useEffect)(() => {
					var Q;
					U({
						zone_id: D == null ? void 0 : D.id,
						zone_plan: D == null || (Q = D.plan) === null || Q === void 0 ? void 0 : Q.legacy_id
					})
				}, [D, U])
			}
			const Lt = () => (pt(), It(), St(), null);
			var Dt = t("../react/app/components/Persistence/index.tsx"),
				wt = t("../node_modules/@cloudflare/elements/es/index.js"),
				Mt = t("../react/app/components/LoadingSuspense.tsx");
			const nt = Te().lazy(() => Promise.all([t.e(39074), t.e(2480), t.e(10008), t.e(73598), t.e(94012), t.e(24074), t.e(72019), t.e(73267), t.e(5668), t.e(60091), t.e(3538), t.e(77216), t.e(39760), t.e(94923), t.e(37685), t.e(52421), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var Ut = () => Te().createElement(Mt.Z, null, Te().createElement(nt, null));
			const an = () => (je.useEffect(() => ae, []), null);
			var sn = t("../../../../node_modules/moment/moment.js"),
				qt = t.n(sn);
			const cn = D => {
					switch (D) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return D.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return D.toLowerCase();
						default:
							return "en"
					}
				},
				ln = () => {
					const D = (0, $e.p4)(Ce.r);
					(0, je.useEffect)(() => {
						const U = cn(D);
						U !== qt().locale() && qt().locale(U), document.documentElement.lang = D
					}, [D])
				},
				un = () => {
					(0, je.useEffect)(() => {
						async function D() {
							var U, Q;
							let ue;
							if (((U = window) === null || U === void 0 || (Q = U.build) === null || Q === void 0 ? void 0 : Q.isPreviewDeploy) && (ue = "cookie"), !!ue) try {
								const _e = document.head.querySelector("link[rel=icon]");
								_e && (_e.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${ue}.ico`)).default)
							} catch {}
						}
						D()
					}, [])
				};
			var dn = t("../react/common/constants/constants.ts");
			const pn = () => {
					var D;
					const U = (0, qe.useLocation)(),
						[Q, ue] = (0, je.useState)(((D = window) === null || D === void 0 ? void 0 : D.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, je.useEffect)(() => {
						const _e = Me().parse(U.search);
						if (_e.pt && J.Z.set(dn.sJ, _e.pt), _e == null ? void 0 : _e.devPanel) {
							var De, Pe;
							(De = window) === null || De === void 0 || (Pe = De.localStorage) === null || Pe === void 0 || Pe.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ue(!0)
						}
					}, [U.search]), {
						devPanelEnabled: Q
					}
				},
				mn = ({
					id: D,
					customDataLayer: U = [],
					dataLayerName: Q = "dataLayer"
				}) => {
					const ue = `<iframe src="https://www.googletagmanager.com/ns.html?id=${D}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						_e = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${Q}', '${D}')`,
						De = `
    window.${Q} = window.${Q} || [];
    window.${Q}.push(${JSON.stringify(U)})
  `;
					return {
						iframe: ue,
						script: _e,
						dataLayerHTML: De
					}
				},
				gn = D => {
					const U = document.createElement("script");
					return U.innerHTML = D, U.async = !0, U
				},
				fn = D => {
					const U = document.createElement("noscript");
					return U.innerHTML = D, U
				},
				en = D => {
					const U = document.createElement("script");
					return U.innerHTML = D, U
				},
				Rn = ({
					dataLayer: D,
					dataLayerName: U
				}) => {
					if (window[U]) return window[U].push(D);
					const Q = `
      window.${U} = window.${U} || [];
      window.${U}.push(${JSON.stringify(D)})`,
						ue = en(Q);
					document.head.insertBefore(ue, document.head.childNodes[0])
				},
				_n = ({
					containerId: D,
					customDataLayer: U,
					gtmFeatureFlag: Q = !0
				}) => {
					(0, je.useEffect)(() => {
						(() => {
							if (!Q) return null;
							const {
								iframe: _e,
								script: De,
								dataLayerHTML: Pe
							} = mn({
								id: D,
								customDataLayer: U
							});
							document.head.insertBefore(en(Pe), document.head.childNodes[0]), document.head.insertBefore(gn(De), document.head.childNodes[0]), document.body.insertBefore(fn(_e), document.body.childNodes[0])
						})()
					}, [])
				};
			var tn = t("../react/common/hooks/useGate.ts");
			const En = ({
				isDev: D,
				gtmFeatureFlag: U
			}) => {
				(0, je.useEffect)(() => {
					(() => {
						if (!U) return null;
						let ue;
						D ? ue = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ue = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const _e = document.createElement("script");
						_e.async = !0, _e.src = ue, document.head.insertBefore(_e, document.head.childNodes[0])
					})()
				}, [])
			};
			var vn = t("../react/utils/useDomainConnectRedirect.ts");
			const yn = "GTM-NDGPDFZ",
				Cn = Te().lazy(() => Promise.all([t.e(39074), t.e(2480), t.e(10008), t.e(73598), t.e(94012), t.e(24074), t.e(72019), t.e(73267), t.e(16339), t.e(74862), t.e(60091), t.e(3538), t.e(77216), t.e(39760), t.e(94923), t.e(37685), t.e(52421), t.e(64124), t.e(20263), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				hn = Te().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(39074), t.e(24074), t.e(16339), t.e(60091), t.e(37685), t.e(69088), t.e(64124), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var Tn = ({
					userIsAuthed: D
				}) => {
					ln(), un(), (0, vn.y)();
					const {
						devPanelEnabled: U
					} = pn();
					return _n({
						containerId: yn,
						gtmFeatureFlag: !!(0, tn.Z)("dx-enable-google-tag-manager")
					}), En({
						isDev: !1,
						gtmFeatureFlag: !!(0, tn.Z)("dx-enable-google-tag-manager")
					}), Te().createElement(je.Suspense, {
						fallback: Te().createElement(an, null)
					}, Te().createElement(qe.Switch, null, !D && !0 && Te().createElement(qe.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Te().createElement(hn, null)), Te().createElement(qe.Route, {
						render: () => Te().createElement(wt.ZC, {
							minHeight: "100vh"
						}, Te().createElement(Cn, null))
					})), U && Te().createElement(Ut, null))
				},
				Ft = t("../../../../node_modules/yup/es/index.js"),
				bn = t("../../../common/util/types/src/utils/index.ts");
			const nn = {
				cfEmail: () => Ft.Z_().email((0, B.ZP)("common.validation.email")).required((0, B.ZP)("common.validation.email")),
				cfPassword: () => Ft.Z_().required((0, B.ZP)("common.validation.required"))
			};
			(0, bn.Yd)(nn).forEach(D => {
				Ft.kM(Ft.Z_, D, nn[D])
			});
			const on = Te().lazy(() => Promise.all([t.e(10008), t.e(94012), t.e(6368), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx"))),
				An = () => {
					const D = (0, ft.$8)(),
						[U, Q] = (0, je.useState)(D ? on : Te().Fragment),
						[ue, _e] = (0, je.useState)((0, h.Yc)());
					(0, je.useEffect)(() => {
						(0, h.fF)(() => _e((0, h.Yc)()))
					}, []);
					const De = Pe => {
						_e(Pe), (0, h.C8)(Pe), document.cookie = `dark-mode=${Pe};Path=/;Max-Age=31536000`
					};
					return (0, je.useEffect)(() => {
						Q(D ? on : Te().Fragment)
					}, [D]), (0, je.useEffect)(() => {
						const Pe = () => De(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Pe), () => {
							window.removeEventListener("storage", Pe)
						}
					}, []), Te().createElement(je.Suspense, {
						fallback: null
					}, Te().createElement(ct.Provider, {
						store: (0, l.bh)()
					}, Te().createElement(qe.Router, {
						history: oe
					}, Te().createElement(U, null, Te().createElement(Ht.Z, {
						renderer: Bt()
					}, Te().createElement(Gt, null, Te().createElement(Zt.Z, {
						sentryTag: "Root"
					}, Te().createElement($.J$, {
						value: {
							fetcher: Pe => fetch(Pe).then(ot => ot.json())
						}
					}, Te().createElement(Lt, null), Te().createElement(Oe, null), Te().createElement(Dt.Z_, {
						onDarkModeChangeCb: De
					}, Te().createElement(le.ZP, null, Te().createElement(Tn, {
						userIsAuthed: D
					}))), Te().createElement(Vt.ZP, null), Te().createElement(ce.F0, null)))))))))
				},
				On = () => {
					(0, dt.render)(Te().createElement(An, null), document.getElementById("react-app"))
				};
			var Et = t("../utils/initSparrow.ts"),
				Rt = t("../utils/zaraz.ts");
			const In = () => {
					const D = (0, tt.PR)((0, l.bh)().getState());
					Pn(), (0, Et.Ug)(), (0, Rt.bM)(), (D == null ? void 0 : D.id) && We().setUserId(D == null ? void 0 : D.id), (0, Et.yV)(), !(0, Et.Wi)() && (0, Et.IM)(), D ? (0, Rt.yn)(D) : (0, Rt.Ro)()
				},
				Pn = () => {
					var D, U;
					(D = window) === null || D === void 0 || (U = D.OneTrust) === null || U === void 0 || U.OnConsentChanged(() => {
						const Q = (0, tt.PR)((0, l.bh)().getState());
						(0, Et.Wi)() ? (We().setEnabled(!0), (Q == null ? void 0 : Q.id) ? (We().setUserId(Q.id), (0, Rt.yn)(Q)) : (0, Rt.Ro)(), (0, Et.yV)()) : (We().setEnabled(!1), (0, Et.IM)())
					})
				};

			function Sn(D) {
				for (var U = 1; U < arguments.length; U++) {
					var Q = arguments[U] != null ? Object(arguments[U]) : {},
						ue = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(Q).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(Q, _e).enumerable
					})), ue.forEach(function(_e) {
						Ln(D, _e, Q[_e])
					})
				}
				return D
			}

			function Ln(D, U, Q) {
				return U = Dn(U), U in D ? Object.defineProperty(D, U, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[U] = Q, D
			}

			function Dn(D) {
				var U = wn(D, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function wn(D, U) {
				if (typeof D != "object" || D === null) return D;
				var Q = D[Symbol.toPrimitive];
				if (Q !== void 0) {
					var ue = Q.call(D, U || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(D)
			}
			const Mn = "init",
				rn = (D, U) => {
					r.$e(function(Q) {
						Q.setTag(Mn, U), r.Tb(D)
					}), Y(D)
				},
				xt = async (D, U) => {
					try {
						return await D(), !0
					} catch (Q) {
						return rn(Q, U), !1
					}
				};
			(async () => {
				try {
					var D, U, Q;
					t.g.build = Sn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "197b59cfdbd39ba971076d8bd19a8bdc582e379b",
						dashVersion: "30408601",
						env: "production",
						builtAt: 1737120457143,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, we.p)()
					}), Ze();
					const ue = [{
						fn: () => t.e(4374).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => A(oe),
						tag: "hashScroll"
					}, {
						fn: K.Z,
						tag: "styles"
					}, {
						fn: Se,
						tag: "mfePreviewData"
					}];
					for (const mt of ue)
						if (!await xt(mt.fn, mt.tag)) return;
					let _e;
					if (!await xt(async () => {
							_e = await it()
						}, "bootstrap")) return;
					const De = (0, l.bh)(),
						Pe = ((D = _e) === null || D === void 0 ? void 0 : D.data) || {};
					De.dispatch((0, s.mW)("user", Pe == null ? void 0 : Pe.user));
					const ot = (U = _e) === null || U === void 0 || (Q = U.data) === null || Q === void 0 ? void 0 : Q.user;
					return t.g.bootstrap = _e, ot && ot.id && z(ot.id), !await xt(ut, "gates") || !await xt(In, "tracking") ? void 0 : On()
				} catch (ue) {
					rn(ue, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				p = t("../react/common/selectors/userSelectors.ts"),
				u = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/common/utils/isGuards.ts"),
				d = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				E = t.n(d);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(l) {
					for (var c = 1; c < arguments.length; c++) {
						var f = arguments[c];
						for (var _ in f) Object.prototype.hasOwnProperty.call(f, _) && (l[_] = f[_])
					}
					return l
				}, n.apply(this, arguments)
			}
			const r = l => {
				function c(f) {
					const _ = (0, a.UM)(),
						A = (0, d.useHistory)(),
						S = (0, d.useLocation)(),
						h = (0, d.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						R = (0, a.p4)(p.PR) || null,
						v = (0, a.p4)(u.nA) || null,
						C = (0, a.p4)(m.uF),
						N = C ? C.account : null;
					if (!h) return null;
					const {
						accountId: b,
						app: M,
						tab: T
					} = h.params, P = h.params.zoneName && ((0, i.v5)(h.params.zoneName) || h.params.zoneName.indexOf(".") > 0) ? h.params.zoneName : void 0;
					return o().createElement(l, n({
						dispatch: _,
						history: A,
						location: S,
						match: h,
						user: R,
						membership: b ? C : null,
						account: b ? N : null,
						accountId: b || null,
						zone: P ? v : null,
						zoneName: P || null,
						app: P ? M : null,
						tab: P ? T : null
					}, f))
				}
				return c.displayName = `withEntities(${s(l)})`, c
			};

			function s(l) {
				return l.displayName || l.name || "Component"
			}
			y.Z = r
		},
		"../react/app/components/AccountHome/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$$: function() {
					return c
				},
				QV: function() {
					return l
				},
				Yt: function() {
					return r
				},
				bA: function() {
					return s
				},
				gX: function() {
					return d
				},
				tw: function() {
					return E
				},
				xD: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			const a = "projects table click",
				p = "click create application",
				u = "account home dev plat - product card click",
				m = "account home dev plat - empty state CTA click",
				i = "account home dev plat - view all projects click",
				d = {
					SPARROW_PROJECTS_TABLE_CLICK: a,
					SPARROW_CREATE_PROJECT_CLICK: p,
					SPARROW_PRODUCT_CARD_CLICK: u,
					SPARROW_EMPTY_STATE_CTA_CLICK: m,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: i
				},
				E = f => {
					o().sendEvent(a, {
						component: f
					})
				},
				n = f => {
					o().sendEvent(a, {
						component: "menu",
						subcomponent: f
					})
				},
				r = () => {
					o().sendEvent(p, {
						category: "Projects Table"
					})
				},
				s = ({
					category: f,
					product: _
				}) => {
					o().sendEvent(u, {
						category: f,
						product: _
					})
				},
				l = () => {
					o().sendEvent(m)
				},
				c = () => {
					o().sendEvent(i)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return d
				},
				Bh: function() {
					return m
				},
				CM: function() {
					return E
				},
				MF: function() {
					return o
				},
				TS: function() {
					return s
				},
				WF: function() {
					return u
				},
				Wz: function() {
					return n
				},
				bk: function() {
					return i
				},
				fj: function() {
					return r
				},
				r4: function() {
					return p
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
				a = (0, e.R)(o.ADD_SITE, l => ({
					payload: l
				})),
				p = (0, e.R)(o.RESOLVING_START),
				u = (0, e.R)(o.RESOLVING_COMPLETE),
				m = (0, e.R)(o.SELECT_ZONE, l => ({
					payload: l
				})),
				i = (0, e.R)(o.SELECT_ACCOUNT, l => ({
					payload: l
				})),
				d = (0, e.R)(o.SELECT_PAGES_PROJECT, l => ({
					payload: l
				})),
				E = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, l => ({
					payload: l
				})),
				n = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, l => ({
					accountIds: l
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				s = (0, e.R)(o.SELECT_WORKER, l => ({
					payload: l
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BV: function() {
					return e
				},
				Dz: function() {
					return E
				},
				Fj: function() {
					return p
				},
				Kt: function() {
					return m
				},
				O5: function() {
					return u
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
				p = "deepLinkQueryParams",
				u = "resolvedDeepLinkQueryParams",
				m = "add",
				i = "multiSkuProducts",
				d = "/:account/billing/checkout",
				E = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return T
				},
				U: function() {
					return i.U
				},
				dd: function() {
					return i.dd
				},
				bk: function() {
					return m.bk
				},
				Bh: function() {
					return m.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../react/app/redux/index.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = t("../react/app/components/DeepLink/utils.ts"),
				u = t("../react/utils/bootstrap.ts"),
				m = t("../react/app/components/DeepLink/actions.ts"),
				i = t("../react/app/components/DeepLink/selectors.ts"),
				d = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = t.n(d);

			function n(P) {
				for (var L = 1; L < arguments.length; L++) {
					var H = arguments[L] != null ? Object(arguments[L]) : {},
						X = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(H).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(H, ne).enumerable
					})), X.forEach(function(ne) {
						r(P, ne, H[ne])
					})
				}
				return P
			}

			function r(P, L, H) {
				return L = s(L), L in P ? Object.defineProperty(P, L, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[L] = H, P
			}

			function s(P) {
				var L = l(P, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function l(P, L) {
				if (typeof P != "object" || P === null) return P;
				var H = P[Symbol.toPrimitive];
				if (H !== void 0) {
					var X = H.call(P, L || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(P)
			}
			class c {
				constructor(L, H) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", X => {
						this.resolvers.set(X, {
							name: X,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", X => {
						const ne = this.resolvers.get(X);
						ne && (ne.endTime = Date.now(), this.resolvers.set(X, ne))
					}), r(this, "resolverCancel", X => {
						this.resolverDone(X), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", X => {
						const ne = "NO_ACTION",
							ae = {
								actionType: ne,
								startTime: 0
							};
						return {
							start: (Y = ne) => {
								const K = this.resolvers.get(X);
								ae.actionType = Y, ae.startTime = Date.now(), K && K.userActions.push(ae)
							},
							finish: (Y = ne) => {
								ae.actionType = Y, ae.endTime = Date.now()
							},
							cancel: (Y = ne) => {
								ae.actionType = Y, ae.endTime = Date.now(), this.resolverCancel(X)
							}
						}
					}), this.deepLink = L, this.legacyDeepLink = H, this.resolvers = new Map
				}
				track(L) {
					try {
						if (this._done) return;
						this._done = !0;
						const H = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: f(this.startTime, this.endTime),
								totalCpuTime: f(this.startTime, this.endTime)
							},
							X = this.resolvers.size === 0 ? H : Array.from(this.resolvers.values()).reduce((ne, ae) => {
								const Y = f(ae.startTime, ae.endTime),
									K = ae.userActions.reduce((q, G) => {
										const V = f(G.startTime, G.endTime);
										return {
											totalTime: q.totalTime + V,
											actions: q.actions.set(G.actionType, V)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									me = Y - K.totalTime;
								return n({}, ne, {
									totalTime: ne.totalTime + Y,
									totalUserActionsTime: ne.totalUserActionsTime + K.totalTime,
									totalCpuTime: ne.totalCpuTime + me,
									[`${ae.name}ResolverTotalTime`]: Y,
									[`${ae.name}ResolverTotalCpuTime`]: me,
									[`${ae.name}ResolverTotalUserActionsTime`]: K.totalTime
								}, Array.from(K.actions.keys()).reduce((q, G) => n({}, q, {
									[`${ae.name}Resolver/${G}`]: K.actions.get(G)
								}), {}))
							}, n({}, H, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						E().sendEvent(L, X)
					} catch (H) {
						console.error(H)
					}
				}
			}

			function f(P = Date.now(), L = Date.now()) {
				return (L - P) / 1e3
			}
			var _ = t("../react/app/components/DeepLink/constants.ts"),
				A = t("../react/common/hooks/useCachedState.ts"),
				S = t("../react/common/hooks/usePrevious.ts");

			function h(P) {
				for (var L = 1; L < arguments.length; L++) {
					var H = arguments[L] != null ? Object(arguments[L]) : {},
						X = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(H).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(H, ne).enumerable
					})), X.forEach(function(ne) {
						R(P, ne, H[ne])
					})
				}
				return P
			}

			function R(P, L, H) {
				return L = v(L), L in P ? Object.defineProperty(P, L, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[L] = H, P
			}

			function v(P) {
				var L = C(P, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function C(P, L) {
				if (typeof P != "object" || P === null) return P;
				var H = P[Symbol.toPrimitive];
				if (H !== void 0) {
					var X = H.call(P, L || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(P)
			}
			var b = ({
					children: P
				}) => {
					const L = (0, o.TZ)(),
						H = (0, a.useHistory)(),
						X = (0, S.Z)(H.location.pathname),
						ne = (0, o.p4)(i.dd),
						[ae, Y] = (0, e.useState)(!0),
						[K, me] = (0, A.j)(void 0, {
							key: _.Fj
						}),
						[q, G] = (0, A.j)(void 0, {
							key: _.O5
						}),
						[V, x] = (0, A.j)(void 0, {
							key: _.s$
						}),
						ee = (0, u.$8)();
					let oe = new URLSearchParams(H.location.search);
					const j = (0, p.mL)(H.location.pathname, oe);
					let O = null,
						k = null;
					if (oe.has(_.Tc) && oe.delete(_.Tc), oe.get(_.BV)) O = oe.get(_.BV), H.location.hash && (k = H.location.hash);
					else if (K) {
						const se = new URLSearchParams(K);
						se.get(_.BV) && (O = se.get(_.BV), oe = se)
					} else j && (oe.set(_.BV, j), O = j);
					if (O && _._h.test(O)) {
						const se = oe.getAll(_.Kt),
							de = JSON.stringify(se);
						se.length && de !== V && x(de), oe.has(_.Tc) && oe.delete(_.Tc), oe.delete(_.Kt)
					}!ee && K === void 0 && O && me(oe.toString());
					const W = async () => {
						try {
							if ((0, p.I3)(O) && ee && !ne) {
								K && me(void 0), L.dispatch((0, m.r4)()), Y(!0), O && O !== q && G(O);
								const se = await (0, p.py)(O, Y, L, H, X, new c(O, j ? `${H.location.pathname}${H.location.search}` : void 0));
								oe.delete(_.BV);
								const de = oe.toString();
								H.replace(h({}, H.location, {
									pathname: se,
									search: de
								}, k ? {
									hash: k
								} : {})), L.dispatch((0, m.WF)())
							}
						} catch (se) {
							L.dispatch((0, m.WF)()), console.error(se)
						} finally {
							Y(!1)
						}
					};
					return (0, e.useEffect)(() => {
						W()
					}, [H.location.pathname, H.location.search, ne]), (ae || (0, p.I3)(O)) && ee ? null : P
				},
				M = t("../react/app/components/DeepLink/reducer.ts"),
				T = b
		},
		"../react/app/components/DeepLink/reducer.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return p
				},
				r: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				a = t("../react/app/components/DeepLink/actions.ts");
			const p = null,
				u = o().from({
					lastAction: p,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function m(i = u, d) {
				if (d.type === a.MF.RESOLVING_COMPLETE) return u;
				if (d.type === a.MF.RESOLVING_START) return i.set("isResolving", !0);
				if (i.isResolving) {
					if (d.type === a.MF.RESOLVING_COMPLETE) return i.set("isResolving", !1);
					if (d.type === a.MF.SET_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", d.accountIds);
					if (d.type === a.MF.DELETE_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", void 0);
					{
						let E = i;
						try {
							E = i.set("lastAction", d)
						} catch {
							E = i.set("lastAction", {
								type: d.type
							})
						}
						return E
					}
				} else return i
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
			const e = p => p.deepLink.lastAction,
				o = p => p.deepLink.isResolving,
				a = p => p.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				I3: function() {
					return l
				},
				X1: function() {
					return r
				},
				mL: function() {
					return S
				},
				py: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/components/DeepLink/reducer.ts"),
				a = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const p = h => h.replace(a.default.endsWithSlash, ""),
				u = h => {
					const R = p(h).split("/").slice(3);
					return R.length ? "/" + R.join("/") : ""
				},
				m = h => {
					const R = p(h).split("/").slice(2);
					return R.length ? `apps/${R.join("/")}` : "apps"
				};
			var i = t("../react/app/components/DeepLink/selectors.ts"),
				d = t("../react/app/components/DeepLink/constants.ts"),
				E = t("../react/common/validators/index.js"),
				n = t("../react/common/utils/isGuards.ts");
			const r = h => (0, E.Lb)(h) && (h.split(".").length > 1 || (0, n.v5)(h)),
				s = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				l = h => typeof h == "string" && h.startsWith("/"),
				c = (h, R) => v => new Promise((C, N) => {
					R.start();
					const b = h.subscribe(() => {
						const M = (0, i.yI)(h.getState());
						M === o.E ? (R.cancel(), b(), N("DeepLink: waitForAction out of context.")) : v(M) && (R.finish(M.type), b(), C(M))
					})
				}),
				f = (h, R, v) => (C, N) => new Promise((b, M) => {
					v.start();
					const T = R.location.pathname;
					C = new URL(C, window.location.href).pathname, T !== C && (v.cancel(), M(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${C}", but on "${T}". You need to redirect to "${C}", and unblockRouter in your Resolver, before you use this function.`));
					const P = h.subscribe(() => {
						const L = (0, i.yI)(h.getState()),
							H = R.location.pathname,
							ne = new URLSearchParams(R.location.search).get(d.BV);
						(H !== C || !!ne) && (v.cancel(), P(), M(`DeepLink: waitForPageAction user navigated away from "${C}" to "${H}${ne?R.location.search:""}"`)), L === o.E ? (v.cancel(), P(), M("DeepLink: waitForPageAction out of context.")) : N(L) && (v.finish(L.type), P(), b(L))
					})
				});

			function _(h) {
				const R = [],
					v = h.split("?")[0].split("/");
				for (let C of v) C.length !== 0 && (C.startsWith(":") ? R.push({
					value: C.substring(1),
					type: "dynamic"
				}) : R.push({
					value: C,
					type: "static"
				}));
				return R
			}
			async function A(h, R, v, C, N, b) {
				b.start();
				const M = _(h),
					P = await (await Promise.all([t.e(32375), t.e(72019), t.e(78839), t.e(60091), t.e(94923), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					L = {};
				let H = "";
				for (const [X, ne] of M.entries())
					if (ne.type === "static") H = [H, ne.value].join("/");
					else if (ne.type === "dynamic" && s.is(ne.value) && ne.value in P) {
					b.resolverStart(ne.value);
					const ae = await P[ne.value]({
						deepLink: h,
						blockRouter: () => R(!0),
						unblockRouter: () => R(!1),
						routerHistory: C,
						resolvedValues: L,
						store: v,
						referringRoute: N,
						uri: {
							currentPartIdx: X,
							parts: M
						},
						waitForAction: c(v, b.createUserActionTracker(ne.value)),
						waitForPageAction: f(v, C, b.createUserActionTracker(ne.value))
					});
					b.resolverDone(ne.value), H = [H, ae].join("/"), L[ne.value] = ae
				} else throw b.cancel(), new Error(`DeepLink: Resolver with name '${ne.value}' is not supported.`);
				return b.done(), H
			}

			function S(h, R) {
				const v = ":account",
					C = ":zone",
					N = R.get("zone");
				if (N) return R.delete("zone"), `/${v}/${C}/${N}`;
				const b = R.get("account");
				if (b) return R.delete("account"), `/${v}/${b}`;
				if (h === "/overview") return `/${v}/${C}`;
				if (h === "/apps") return `/${v}/${C}/${m(h)}`;
				const M = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const T of M) {
					const P = T.length;
					if (h.startsWith(T) && (h.length === P || h[P] === "/")) return `/${v}/${C}${h}`
				}
				switch (h) {
					case "/account/billing":
						return `/${v}/billing`;
					case "/account/subscriptions":
						return `/${v}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${v}/dns-firewall`;
					case "/account/audit-log":
						return `/${v}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				p = t("../react/app/components/SomethingWrong.jsx"),
				u = t("../utils/sentry/lastSentEventId.ts"),
				m = t("../react/utils/zaraz.ts"),
				i = t("../react/utils/url.ts");
			const d = ({
				sentryTag: E,
				children: n
			}) => o().createElement(a.SV, {
				beforeCapture: r => {
					E && r.setTag("errorBoundary", E), m.tg === null || m.tg === void 0 || m.tg.track("page-error", {
						page: (0, i.Fl)(window.location.pathname)
					})
				},
				onError: r => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(r)
				},
				fallback: ({
					error: r,
					eventId: s
				}) => {
					const l = u.e.getEventId() || s;
					return o().createElement(p.Z, {
						type: "page",
						error: r,
						eventId: l
					})
				}
			}, n);
			y.Z = d
		},
		"../react/app/components/Footer.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return V
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = t.n(i),
				E = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				r = t("../react/utils/translator.tsx"),
				s = t("../../../../node_modules/moment/moment.js"),
				l = t.n(s);
			const c = () => {
					const x = l()().format("YYYY"),
						ee = oe => {
							d().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: oe
							})
						};
					return o().createElement(f, {
						marginTop: "auto"
					}, o().createElement(_, null, o().createElement(A, null, o().createElement(S, null, "\xA9 ", x, " Cloudflare, Inc."), o().createElement(S, null, o().createElement(h, null, o().createElement(R, {
						showOnDeskTop: !1
					}, o().createElement(v, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => ee("Support")
					}, o().createElement(r.cC, {
						id: "common.support"
					}))), o().createElement(R, null, o().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => ee("Privacy Policy")
					}, o().createElement(r.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(R, null, o().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => ee("Terms of Use")
					}, o().createElement(r.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(R, null, o().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => ee("Cookie Preferences")
					}, o().createElement(r.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(R, null, o().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => ee("Trademark")
					}, o().createElement(r.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(h, null, o().createElement(R, null, o().createElement(v, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => ee("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(r.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				f = (0, u.createComponent)(({
					theme: x,
					marginTop: ee
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: ee
				})),
				_ = (0, u.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				A = (0, u.createComponent)(({
					theme: x
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${x.space[3]}px`
					}
				})),
				S = (0, u.createComponent)(({
					theme: x
				}) => ({
					width: "100%",
					color: x.colors.white,
					fontSize: x.fontSizes[1],
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
				h = (0, u.createComponent)(({
					theme: x
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: x.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				R = (0, u.createComponent)(({
					showOnDeskTop: x = !0,
					theme: ee
				}) => ({
					color: ee.colors.white,
					fontSize: ee.fontSizes[1],
					height: "20px",
					display: x ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: ee.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: ee.space[3],
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
					theme: x
				}) => ({
					textDecoration: "none",
					color: x.colors.white,
					"&:hover": {
						color: x.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var C = c,
				N = t("../react/pages/welcome/routes.ts"),
				b = t("../react/utils/cookiePreferences.ts"),
				M = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				P = () => {
					const [x, ee] = (0, e.useState)(!1), oe = (0, b.wV)(), j = () => {
						ee(!0)
					}, O = () => {
						ee(!1)
					}, k = oe && oe === "US" ? (0, r.ZP)("footer.cpra_cta.privacy_choices") : (0, r.ZP)("footer.cpra_cta.cookie_preferences"), W = {
						background: "transparent",
						borderRadius: "none",
						color: x ? (0, m.Yc)() ? "#ee730a" : "#003681" : (0, m.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: x ? "underline" : "none",
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
					return o().createElement(p.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: W,
						onMouseEnter: j,
						onMouseLeave: O
					}, o().createElement(p.Ei, {
						height: 15,
						src: M,
						mr: 2,
						alt: k
					}), k)
				};

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(x) {
					for (var ee = 1; ee < arguments.length; ee++) {
						var oe = arguments[ee];
						for (var j in oe) Object.prototype.hasOwnProperty.call(oe, j) && (x[j] = oe[j])
					}
					return x
				}, L.apply(this, arguments)
			}

			function H(x, ee) {
				if (x == null) return {};
				var oe = X(x, ee),
					j, O;
				if (Object.getOwnPropertySymbols) {
					var k = Object.getOwnPropertySymbols(x);
					for (O = 0; O < k.length; O++) j = k[O], !(ee.indexOf(j) >= 0) && (!Object.prototype.propertyIsEnumerable.call(x, j) || (oe[j] = x[j]))
				}
				return oe
			}

			function X(x, ee) {
				if (x == null) return {};
				var oe = {},
					j = Object.keys(x),
					O, k;
				for (k = 0; k < j.length; k++) O = j[k], !(ee.indexOf(O) >= 0) && (oe[O] = x[O]);
				return oe
			}
			const ne = (0, u.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,m.Yc)()?m.rS.colors.orange[6]:m.rS.colors.blue[4]}`
					}
				}), p.A),
				ae = (0, u.createStyledComponent)(({
					theme: x
				}) => ({
					color: x.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, E.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: x.colors.gray[4]
					}
				}), p.A),
				Y = x => {
					let {
						onClick: ee
					} = x, oe = H(x, ["onClick"]);
					return React.createElement(ne, L({
						onClick: j => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: oe.href
							}), ee && ee(j)
						}
					}, oe))
				},
				K = x => {
					let {
						children: ee,
						target: oe,
						rel: j
					} = x, O = H(x, ["children", "target", "rel"]);
					return o().createElement(ae, L({
						target: oe || "_blank",
						rel: j || "noopener noreferrer"
					}, O), ee)
				},
				me = (0, u.createStyledComponent)(({
					theme: x
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, E.tq)() ? "8px" : "16px",
					"& > li": {
						listStyleType: "none",
						"& > a": {
							fontSize: x.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: x.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), p.Ul),
				q = (0, u.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, E.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), p.ZC);
			var V = () => {
				const x = [N.d.root.pattern].some(oe => (0, a.matchPath)(location.pathname, {
					path: oe
				}));
				if ((0, n.PP)()) return o().createElement(C, null);
				if (x) return null;
				const ee = new Date().getFullYear();
				return o().createElement(p.$_, {
					height: (0, E.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto"
				}, o().createElement(q, null, o().createElement(me, null, o().createElement(p.Li, null, o().createElement(K, {
					href: "https://support.cloudflare.com"
				}, (0, r.ZP)("common.support"))), o().createElement(p.Li, null, o().createElement(K, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(p.Dr, {
					textTransform: "capitalize"
				}, (0, r.ZP)("footer.system_status")))), o().createElement(p.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, r.ZP)("footer.careers"))), o().createElement(p.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, r.ZP)("footer.tos_reduced"))), o().createElement(p.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, r.ZP)("footer.security_issues"))), o().createElement(p.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, r.ZP)("footer.privacy_policy"))), o().createElement(p.Li, null, o().createElement(P, null)), o().createElement(p.Li, null, o().createElement(p.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", ee, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/components/ErrorStatus.tsx"),
				p = t("../react/utils/translator.tsx");
			const u = m => o().createElement(a.Z, m, (0, p.ZP)("error.forbidden"));
			y.Z = u
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return l
				},
				Z: function() {
					return oe
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				d = t("../react/common/components/AccessControl/index.js"),
				E = t("../react/common/components/ButtonWithDropdown.tsx"),
				n = t("../react/common/components/Dropdown/index.tsx"),
				r = t("../react/utils/translator.tsx"),
				s = t("../react/common/hooks/useGate.ts");
			const l = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				c = () => {
					const j = (0, s.Z)("super-add-button-copy-change"),
						O = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: l.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/domains/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: l.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: l.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: l.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: l.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: l.ACCOUNT_MEMBERS,
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
								trackingEvent: l.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...O];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: l.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...O];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: l.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...O];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: l.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...O];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: l.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...O];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: l.EXISTING_DOMAIN,
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
								trackingEvent: l.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/domains/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: l.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: l.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: l.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: l.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: l.ACCOUNT_MEMBERS,
								icon: "user-outline",
								url: "?to=/:account/members/invite",
								description: {
									id: "onboarding.add_product.account_member.description"
								},
								permissionCheck: "#member:edit"
							}]
					}
				},
				f = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: l.EXISTING_DOMAIN,
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
					trackingEvent: l.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/domains/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: l.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: l.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: l.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: l.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: l.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var _ = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				A = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				S = t.n(A);

			function h(j) {
				for (var O = 1; O < arguments.length; O++) {
					var k = arguments[O] != null ? Object(arguments[O]) : {},
						W = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(k).filter(function(se) {
						return Object.getOwnPropertyDescriptor(k, se).enumerable
					})), W.forEach(function(se) {
						R(j, se, k[se])
					})
				}
				return j
			}

			function R(j, O, k) {
				return O = v(O), O in j ? Object.defineProperty(j, O, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[O] = k, j
			}

			function v(j) {
				var O = C(j, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function C(j, O) {
				if (typeof j != "object" || j === null) return j;
				var k = j[Symbol.toPrimitive];
				if (k !== void 0) {
					var W = k.call(j, O || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(j)
			}

			function N() {
				return N = Object.assign ? Object.assign.bind() : function(j) {
					for (var O = 1; O < arguments.length; O++) {
						var k = arguments[O];
						for (var W in k) Object.prototype.hasOwnProperty.call(k, W) && (j[W] = k[W])
					}
					return j
				}, N.apply(this, arguments)
			}

			function b(j, O) {
				if (j == null) return {};
				var k = M(j, O),
					W, se;
				if (Object.getOwnPropertySymbols) {
					var de = Object.getOwnPropertySymbols(j);
					for (se = 0; se < de.length; se++) W = de[se], !(O.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(j, W) || (k[W] = j[W]))
				}
				return k
			}

			function M(j, O) {
				if (j == null) return {};
				var k = {},
					W = Object.keys(j),
					se, de;
				for (de = 0; de < W.length; de++) se = W[de], !(O.indexOf(se) >= 0) && (k[se] = j[se]);
				return k
			}
			const T = j => {
					let {
						title: O,
						trackingEvent: k,
						icon: W,
						url: se,
						description: de,
						disabled: Ce
					} = j, be = b(j, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(P, N({
						to: !Ce && se || "#",
						"aria-disabled": Ce,
						onClick: () => {
							S().sendEvent(k, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, be), o().createElement(p.ZC, {
						display: "flex"
					}, o().createElement(a.J, {
						type: W,
						size: 24,
						mr: 2
					}), o().createElement(p.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(p.ZC, {
						fontSize: 3
					}, o().createElement(r.cC, O)), o().createElement(p.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(r.cC, de)))))
				},
				P = (0, m.createStyledComponent)(({
					theme: j
				}) => {
					const O = {
						cursor: "pointer",
						backgroundColor: (0, u.Yc)() ? j.colors.gray[8] : j.colors.gray[9],
						color: j.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: j.colors.background,
						color: j.colors.gray[2],
						fontSize: j.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': O,
						':focus-within:not([aria-disabled="true"])': h({}, O, {
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
				}, _.Link);
			var L = T;

			function H() {
				return H = Object.assign ? Object.assign.bind() : function(j) {
					for (var O = 1; O < arguments.length; O++) {
						var k = arguments[O];
						for (var W in k) Object.prototype.hasOwnProperty.call(k, W) && (j[W] = k[W])
					}
					return j
				}, H.apply(this, arguments)
			}

			function X(j) {
				for (var O = 1; O < arguments.length; O++) {
					var k = arguments[O] != null ? Object(arguments[O]) : {},
						W = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(k).filter(function(se) {
						return Object.getOwnPropertyDescriptor(k, se).enumerable
					})), W.forEach(function(se) {
						ne(j, se, k[se])
					})
				}
				return j
			}

			function ne(j, O, k) {
				return O = ae(O), O in j ? Object.defineProperty(j, O, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[O] = k, j
			}

			function ae(j) {
				var O = Y(j, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function Y(j, O) {
				if (typeof j != "object" || j === null) return j;
				var k = j[Symbol.toPrimitive];
				if (k !== void 0) {
					var W = k.call(j, O || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(j)
			}

			function K(j, O) {
				if (j == null) return {};
				var k = me(j, O),
					W, se;
				if (Object.getOwnPropertySymbols) {
					var de = Object.getOwnPropertySymbols(j);
					for (se = 0; se < de.length; se++) W = de[se], !(O.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(j, W) || (k[W] = j[W]))
				}
				return k
			}

			function me(j, O) {
				if (j == null) return {};
				var k = {},
					W = Object.keys(j),
					se, de;
				for (de = 0; de < W.length; de++) se = W[de], !(O.indexOf(se) >= 0) && (k[se] = j[se]);
				return k
			}
			const q = "GLOBAL_ADD_DROPDOWN",
				G = ({
					disableProducts: j
				}) => {
					const O = c();
					return o().createElement(V, {
						role: "group",
						"data-testid": q
					}, o().createElement(n.Lt, {
						trigger: o().createElement(x, null, o().createElement(a.J, {
							label: "plus",
							type: "plus"
						}), !(0, i.tq)() && o().createElement(o().Fragment, null, o().createElement(r.cC, {
							id: "common.add"
						}), " ", o().createElement(a.J, {
							label: "arrow",
							type: "caret-down"
						}))),
						menu: o().createElement(E.v2, {
							overflow: "auto",
							maxHeight: "80vh",
							width: "min(50vw, 340px)",
							whiteSpace: "normal",
							mr: 1,
							p: "8px 0",
							bottom: "auto",
							zIndex: 1200
						}, O.map(k => {
							const W = k || {},
								{
									disableOn: se,
									permissionCheck: de
								} = W,
								Ce = K(W, ["disableOn", "permissionCheck"]),
								be = se && j[se],
								we = X({}, Ce, {
									disabled: be
								});
							return de ? o().createElement(d.Z, {
								key: k.title.id,
								edit: de
							}, ({
								isEditable: Be
							}) => Be && o().createElement(L, we)) : o().createElement(L, H({
								key: k.url
							}, we))
						}))
					}))
				},
				V = (0, m.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				x = (0, m.createStyledComponent)(({
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
					color: (0, u.Yc)() ? j.colors.gray[1] : j.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, u.Yc)() ? j.colors.gray[8] : j.colors.gray[9]
					}
				}), p.zx);
			var ee = G,
				oe = ee
		},
		"../react/app/components/LoadingSuspense.tsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../react/utils/translator.tsx"),
				m = t("../react/app/components/ErrorStatus.tsx"),
				i = t("../react/common/components/EmptyPage.jsx"),
				d = t("../react/common/hooks/suspenseHelpers.ts");

			function E(s) {
				const [l, c] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const f = window.setTimeout(() => c(!0), s);
					return () => window.clearTimeout(f)
				}, []), l
			}
			const n = ({
					loadingTimeout: s = 1e3,
					stillLoadingTimeout: l = 9e3
				}) => {
					const c = E(s),
						f = E(l);
					if ((0, d.nW)(), !c && !f) return o().createElement(i.Z, null);
					const _ = f ? o().createElement(u.cC, {
						id: "common.still_loading"
					}) : c ? o().createElement(u.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(m.Z, {
						size: 5
					}, o().createElement(p.ZC, {
						mr: 3
					}, o().createElement(a.g, {
						size: "2x"
					})), _)
				},
				r = ({
					children: s
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(n, null)
				}, s);
			y.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				C8: function() {
					return d
				},
				dr: function() {
					return u
				},
				lt: function() {
					return m
				},
				m6: function() {
					return n
				},
				n: function() {
					return E
				},
				yl: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const a = "/persistence/user",
				p = async () => {
					try {
						return await (await e.get(a, {
							hideErrorAlert: !0
						})).body
					} catch (r) {
						console.error(r)
					}
				}, u = async r => {
					try {
						return await (await e.get(`/accounts/${r}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (s) {
						console.error(s)
					}
				}, m = async (r, s) => {
					try {
						return await (await e.post(`${a}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: s
							}),
							hideErrorAlert: !0
						})).body
					} catch (l) {
						return console.error(l), []
					}
				}, i = async (r, s) => {
					try {
						return await http.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: s
							}),
							hideErrorAlert: !0
						}), !0
					} catch (l) {
						return console.error(l), !1
					}
				}, d = async r => {
					try {
						return await (await e.post(a, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (s) {
						console.error(s)
					}
				}, E = async r => {
					try {
						return await (await e.post(`${a}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						console.error(s)
					}
				}, n = async r => {
					try {
						return await (await e.post(`${a}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						throw console.error(s), s
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Wl: function() {
					return E
				},
				lp: function() {
					return _
				},
				Z_: function() {
					return S
				},
				r7: function() {
					return P
				},
				Tv: function() {
					return me
				},
				yZ: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(p),
				m = t("../react/utils/bootstrap.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				d = t("../react/app/components/Persistence/api.ts");
			const E = 10;

			function n(q) {
				for (var G = 1; G < arguments.length; G++) {
					var V = arguments[G] != null ? Object(arguments[G]) : {},
						x = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(V).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(V, ee).enumerable
					})), x.forEach(function(ee) {
						r(q, ee, V[ee])
					})
				}
				return q
			}

			function r(q, G, V) {
				return G = s(G), G in q ? Object.defineProperty(q, G, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : q[G] = V, q
			}

			function s(q) {
				var G = l(q, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function l(q, G) {
				if (typeof q != "object" || q === null) return q;
				var V = q[Symbol.toPrimitive];
				if (V !== void 0) {
					var x = V.call(q, G || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(q)
			}
			const c = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				f = n({}, c, {
					isLoading: !0,
					remainingStarSlots: 10,
					actions: {
						starZone: () => null,
						setDarkMode: () => null,
						isZoneStarred: () => !1,
						canAccountStarZone: () => !0,
						logRouteVisited: () => null,
						viewChange: () => null
					}
				}),
				_ = (0, e.createContext)(f),
				A = _.Consumer,
				S = ({
					children: q,
					onDarkModeChangeCb: G
				}) => {
					const [V, x] = (0, e.useState)(c), [ee, oe] = (0, e.useState)(f.isLoading), j = (0, m.$8)(), O = (0, a.p4)(de => (0, i.wH)(de));
					(0, e.useEffect)(() => {
						j ? (0, d.yl)().then(de => {
							de && (x(de), G(de.darkMode))
						}).finally(() => oe(!1)) : oe(!1)
					}, [j]);
					const k = (de, Ce) => !!V.favorites.find(be => be.type === "zone" && be.name === de && be.accountId === Ce),
						W = E - V.favorites.length,
						se = de => V.favorites.filter(be => be.type === "zone" && be.accountId === de).length < E;
					return o().createElement(_.Provider, {
						value: n({}, V, {
							isLoading: ee,
							remainingStarSlots: W,
							actions: {
								canAccountStarZone: se,
								isZoneStarred: k,
								starZone: async (de, Ce) => {
									var be;
									const we = !k(de, Ce),
										Be = se(Ce);
									if (we && !Be) {
										console.log("can not star zone - account is at limit");
										return
									}
									const We = await (0, d.lt)(de, Ce);
									u().sendEvent("click star zone", {
										isStarring: we,
										totalStarredZones: We.filter(Ue => Ue.accountId === Ce && Ue.type === "zone").length,
										totalZones: O == null || (be = O.paginationData) === null || be === void 0 ? void 0 : be.info.total_count
									}), x(n({}, V, {
										favorites: We
									}))
								},
								setDarkMode: async de => {
									const Ce = await (0, d.C8)(de);
									x(Ce), G(Ce.darkMode)
								},
								logRouteVisited: async de => {
									var Ce;
									const be = await (0, d.n)(de);
									x((Ce = be) !== null && Ce !== void 0 ? Ce : n({}, V))
								},
								viewChange: async de => {
									const Ce = await (0, d.m6)(de);
									x(n({}, V, {
										viewedChanges: Ce
									}))
								}
							}
						})
					}, q)
				},
				h = () => (0, e.useContext)(_);
			var R = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				v = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function C() {
				return C = Object.assign ? Object.assign.bind() : function(q) {
					for (var G = 1; G < arguments.length; G++) {
						var V = arguments[G];
						for (var x in V) Object.prototype.hasOwnProperty.call(V, x) && (q[x] = V[x])
					}
					return q
				}, C.apply(this, arguments)
			}

			function N(q, G) {
				if (q == null) return {};
				var V = b(q, G),
					x, ee;
				if (Object.getOwnPropertySymbols) {
					var oe = Object.getOwnPropertySymbols(q);
					for (ee = 0; ee < oe.length; ee++) x = oe[ee], !(G.indexOf(x) >= 0) && (!Object.prototype.propertyIsEnumerable.call(q, x) || (V[x] = q[x]))
				}
				return V
			}

			function b(q, G) {
				if (q == null) return {};
				var V = {},
					x = Object.keys(q),
					ee, oe;
				for (oe = 0; oe < x.length; oe++) ee = x[oe], !(G.indexOf(ee) >= 0) && (V[ee] = q[ee]);
				return V
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
			var P = q => {
					let {
						isStarred: G,
						size: V = 16
					} = q, x = N(q, ["isStarred", "size"]);
					const ee = M[(0, R.Yc)() ? "dark" : "light"];
					return o().createElement(v.J, C({
						type: G ? "star" : "star-outline",
						color: G ? ee.gold : ee.gray,
						size: V
					}, x))
				},
				L = t("../node_modules/@cloudflare/elements/es/index.js");

			function H(q) {
				for (var G = 1; G < arguments.length; G++) {
					var V = arguments[G] != null ? Object(arguments[G]) : {},
						x = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(V).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(V, ee).enumerable
					})), x.forEach(function(ee) {
						X(q, ee, V[ee])
					})
				}
				return q
			}

			function X(q, G, V) {
				return G = ne(G), G in q ? Object.defineProperty(q, G, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : q[G] = V, q
			}

			function ne(q) {
				var G = ae(q, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function ae(q, G) {
				if (typeof q != "object" || q === null) return q;
				var V = q[Symbol.toPrimitive];
				if (V !== void 0) {
					var x = V.call(q, G || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(q)
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
			var me = (0, e.forwardRef)(({
				featurePreview: q = !1,
				isStarred: G,
				onClickFn: V,
				isDisabled: x,
				testId: ee,
				buttonText: oe,
				size: j = "large",
				variant: O = "pill"
			}, k) => {
				const [W, se] = (0, e.useState)(!1), de = Y[(0, R.Yc)() ? "dark" : "light"][G && !q ? "active" : "default"], Ce = H({}, j === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, j === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, j === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), be = {
					pill: "50vh",
					button: 4
				};
				return o().createElement(L.zx, {
					onMouseEnter: () => se(!0),
					onMouseLeave: () => se(!1),
					innerRef: k,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: Ce.paddingRight,
					gap: 1,
					pl: Ce.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: be[O],
					border: "1px solid",
					cursor: q || x ? "default" : "pointer",
					backgroundColor: W ? de.bgHover : de.bg,
					color: de.text,
					borderColor: de.border,
					onClick: V,
					opacity: x ? .5 : 1,
					disabled: x,
					fontSize: Ce.fontSize,
					height: Ce.height,
					"data-testid": ee
				}, o().createElement(P, {
					isStarred: q ? !1 : G,
					size: Ce.starIconSize
				}), oe)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$n: function() {
					return l
				},
				IU: function() {
					return f
				},
				Wq: function() {
					return N
				},
				dL: function() {
					return _
				},
				fO: function() {
					return C
				},
				gw: function() {
					return M
				},
				hv: function() {
					return c
				},
				iY: function() {
					return r
				},
				o_: function() {
					return h
				},
				us: function() {
					return v
				},
				wB: function() {
					return s
				},
				zJ: function() {
					return R
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/common/selectors/accountSelectors.ts"),
				u = t("../react/utils/zoneLevelAccess.ts"),
				m = t("../react/pages/stream/selectors.ts"),
				i = t("../react/pages/home/domain-registration/selectors.ts"),
				d = t("../react/pages/images/selectors.ts"),
				E = t("../react/pages/r2/selectors.ts");
			const n = T => !!(0, u.b)(T),
				r = T => n(T) ? (0, e.hT)(T) : !0,
				s = (T, P, L, H = "read") => {
					const X = (0, a.nA)(T);
					return n(T) ? (0, e.WL)(T, (0, e.W9)(L, e.ZZ[H]), (0, e.j)(X == null ? void 0 : X.id)) : (0, p.Yj)(T)(P)[H]
				},
				l = (T, P, L, H = "read") => {
					const X = (0, a.nA)(T),
						ne = e.zs.includes(L);
					return n(T) ? (0, e.WL)(T, ne ? L : (0, e.my)(L, e.ZZ[H === "edit" ? "update" : H]), (0, e.j)(X == null ? void 0 : X.id)) : (0, p.Yj)(T)(P)[H === "update" ? "edit" : H]
				},
				c = T => !!(0, m._Q)(T),
				f = T => (0, d.pT)(T),
				_ = T => (0, d.pT)(T) && (0, d.GH)(T),
				A = T => sourcingKitEnabledSelector(T),
				S = T => !!r2EnabledSelector(T),
				h = T => (0, E.Mv)(T),
				R = T => (0, o.$f)(T, "rulesets.magic_transit_allowed"),
				v = T => (0, o.$f)(T, "flowtrackd.magic_custom_config_allowed"),
				C = T => (0, o.$f)(T, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				N = T => (0, p.Le)(T, "ddos_protection", "l4_rulesets"),
				b = T => hasAccountEntitlements(T, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				M = T => (0, i.HO)(T)
		},
		"../react/app/components/SomethingWrong.jsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = t.n(a),
				u = t("../../../../node_modules/prop-types/index.js"),
				m = t.n(u),
				i = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				d = t.n(i),
				E = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				n = t("../node_modules/@cloudflare/component-button/es/index.js"),
				r = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				s = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				l = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				_ = t.n(f),
				A = t("../react/utils/url.ts"),
				S = t("../react/app/components/Footer.tsx");

			function h(ae) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var K = arguments[Y] != null ? Object(arguments[Y]) : {},
						me = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && me.push.apply(me, Object.getOwnPropertySymbols(K).filter(function(q) {
						return Object.getOwnPropertyDescriptor(K, q).enumerable
					})), me.forEach(function(q) {
						R(ae, q, K[q])
					})
				}
				return ae
			}

			function R(ae, Y, K) {
				return Y = v(Y), Y in ae ? Object.defineProperty(ae, Y, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ae[Y] = K, ae
			}

			function v(ae) {
				var Y = C(ae, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function C(ae, Y) {
				if (typeof ae != "object" || ae === null) return ae;
				var K = ae[Symbol.toPrimitive];
				if (K !== void 0) {
					var me = K.call(ae, Y || "default");
					if (typeof me != "object") return me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(ae)
			}
			const N = (0, E.createComponent)(({
					type: ae
				}) => ({
					height: ae !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				b = (0, E.createComponent)(({
					theme: ae,
					margin: Y,
					size: K = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: ae.colors.gray[3],
					height: Y ? "auto" : "100%",
					padding: Y ? 0 : ae.space[K > 1 ? K - 2 : 0],
					margin: Y,
					justifyContent: "center",
					alignItems: "center"
				})),
				M = (0, E.createComponent)(() => ({
					textAlign: "left"
				})),
				T = (0, E.createComponent)(() => ({
					textAlign: "right"
				})),
				P = (0, E.createComponent)(({
					theme: ae
				}) => ({
					fontSize: ae.fontSizes[6]
				})),
				L = (0, E.createComponent)(({
					theme: ae
				}) => ({
					fontSize: ae.fontSizes[4]
				})),
				H = (0, E.createComponent)(({
					theme: ae
				}) => ({
					fontSize: ae.fontSizes[3]
				})),
				X = (0, E.createComponent)(({
					theme: ae
				}) => ({
					width: "100%",
					height: 125,
					marginTop: ae.space[4],
					padding: ae.space[2]
				}), "textarea");
			class ne extends o().Component {
				constructor(...Y) {
					super(...Y);
					R(this, "state", {
						value: "",
						submitted: !1
					}), R(this, "handleTextareaChange", K => {
						this.setState({
							value: K.target.value
						})
					}), R(this, "sendErrToSentry10", async () => {
						try {
							var K, me, q, G;
							const V = ((K = window) === null || K === void 0 || (me = K.bootstrap) === null || me === void 0 || (q = me.data) === null || q === void 0 || (G = q.user) === null || G === void 0 ? void 0 : G.id) || "Unknown",
								x = this.props.eventId || r.eW(),
								ee = {
									name: V,
									email: `${V}@userid.com`,
									comments: this.state.value,
									eventId: x,
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
								body: JSON.stringify(ee)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (V) {
							console.error(V)
						}
					}), R(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), R(this, "renderContent", K => o().createElement(i.I18n, null, me => o().createElement(N, {
						type: K
					}, o().createElement(b, null, o().createElement(M, null, o().createElement(P, null, me.t("error.internal_issues")), o().createElement(L, null, me.t("error.help_us")), o().createElement(X, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: q => this.handleTextareaChange(q),
						disabled: this.state.submitted,
						placeholder: me.t("error.give_feedback")
					}), o().createElement(T, null, !this.state.submitted && o().createElement(n.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, me.t("common.submit")), this.state.submitted && o().createElement(H, null, me.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const Y = this.props.error;
					console.error(`SomethingWrong: ${Y}`), s.YA("user_feedback_form_displayed", "yes"), s.YA("normalizedPath", (0, A.Fl)(window.location.pathname)), _().sendEvent("something wrong", {
						error: Y
					})
				}
				render() {
					const {
						type: Y
					} = this.props;
					return Y === "fullscreen" ? o().createElement("div", null, o().createElement(l.h4, null, o().createElement(a.Link, {
						to: "/"
					}, o().createElement(c.TR, null))), this.renderContent(Y), o().createElement(S.Z, null)) : this.renderContent(Y)
				}
			}
			ne.propTypes = {
				type: m().oneOf(["fullscreen", "page"]),
				error: m().oneOfType([m().string, m().object]),
				eventId: m().string
			}, y.Z = ne
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
					return p
				},
				p4: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e);
			const a = () => (0, e.useStore)(),
				p = () => a().getState(),
				u = () => (0, e.useDispatch)(),
				m = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				P1: function() {
					return E
				},
				jQ: function() {
					return i
				},
				qR: function() {
					return n
				},
				uc: function() {
					return d
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				o = t("../react/pages/workers/entityTypes.ts"),
				a = t("../react/pages/email/types.ts"),
				p = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				m = t.n(u);
			const i = u.static.from([{
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
					entityType: "hostnameRegions"
				}, {
					entityType: "http2ToOrigin"
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
					entityType: "languagePreference"
				}, {
					entityType: "loadBalancers",
					to: "loadBalancer"
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
				d = r => r.entities,
				E = (...r) => (0, p.P1)(i, d, ...r),
				n = (0, p.QB)(i)
		},
		"../react/app/redux/utils.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return a
				},
				_: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const o = p => (u, m, i) => (0, e.SC)(u, m, i, {
					hideErrorAlert: !0
				}).catch(p),
				a = p => u => {
					if (u.status === p) return u;
					throw u
				}
		},
		"../react/common/actionTypes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Cm: function() {
					return m
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return i
				},
				Li: function() {
					return E
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return a
				},
				Yc: function() {
					return r
				},
				gM: function() {
					return p
				},
				lV: function() {
					return u
				},
				s1: function() {
					return d
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				a = "MODAL_OPEN",
				p = "MODAL_CLOSE",
				u = "TOGGLE_ON",
				m = "TOGGLE_OFF",
				i = "SET_ACTIVE",
				d = "CLEAR_ACTIVE",
				E = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(s) {
				return s.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", s.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", s.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", s.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", s.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", s.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", s.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", s.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", s.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", s
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return s
				},
				YT: function() {
					return E
				},
				ct: function() {
					return i
				},
				d6: function() {
					return n
				},
				kt: function() {
					return r
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/common/constants/index.ts");

			function a(l) {
				for (var c = 1; c < arguments.length; c++) {
					var f = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(f).filter(function(A) {
						return Object.getOwnPropertyDescriptor(f, A).enumerable
					})), _.forEach(function(A) {
						p(l, A, f[A])
					})
				}
				return l
			}

			function p(l, c, f) {
				return c = u(c), c in l ? Object.defineProperty(l, c, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[c] = f, l
			}

			function u(l) {
				var c = m(l, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function m(l, c) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var _ = f.call(l, c || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(l)
			}
			const i = l => {
					const c = l.payload.map(f => a({}, f, {
						membershipId: f.id,
						id: f.account.id
					}));
					return a({}, l, {
						payload: c
					})
				},
				d = l => {
					const c = i(l);
					return Array.isArray(c.payload) ? a({}, l, {
						payload: c.payload[0]
					}) : a({}, l, {
						payload: null
					})
				},
				E = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", i),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...l) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: l
				}),
				s = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", d)
		},
		"../react/common/actions/modalActions.ts": function(F, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				closeModal: function() {
					return p
				},
				openModal: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function a(u, m, i = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: u,
						props: m
					},
					options: i
				}
			}

			function p(u) {
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
			t.d(y, {
				IH: function() {
					return u
				},
				Vp: function() {
					return m
				},
				ZK: function() {
					return d
				},
				um: function() {
					return i
				},
				vU: function() {
					return E
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
			let p = 0;

			function u(n, r, s = {}) {
				return s = s || {},
					function(l) {
						let c = p++,
							f = {
								id: c,
								type: n,
								message: r,
								delay: s.delay,
								persist: s.persist === void 0 ? !1 : s.persist,
								closable: s.closable === void 0 ? !0 : s.closable,
								onClose() {
									l(a(c)), s.onClose && s.onClose.apply(null, arguments)
								}
							};
						l(o(f))
					}
			}

			function m(n, r) {
				return u("success", n, r)
			}

			function i(n, r) {
				return u("info", n, r)
			}

			function d(n, r) {
				return u("warning", n, r)
			}

			function E(n, r) {
				return u("error", n, r)
			}
		},
		"../react/common/actions/userActions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BT: function() {
					return i
				},
				Ut: function() {
					return A
				},
				V_: function() {
					return S
				},
				Y9: function() {
					return f
				},
				Z0: function() {
					return R
				},
				mp: function() {
					return _
				},
				r3: function() {
					return h
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/app/redux/utils.ts");

			function a(v) {
				for (var C = 1; C < arguments.length; C++) {
					var N = arguments[C] != null ? Object(arguments[C]) : {},
						b = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(N).filter(function(M) {
						return Object.getOwnPropertyDescriptor(N, M).enumerable
					})), b.forEach(function(M) {
						p(v, M, N[M])
					})
				}
				return v
			}

			function p(v, C, N) {
				return C = u(C), C in v ? Object.defineProperty(v, C, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[C] = N, v
			}

			function u(v) {
				var C = m(v, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function m(v, C) {
				if (typeof v != "object" || v === null) return v;
				var N = v[Symbol.toPrimitive];
				if (N !== void 0) {
					var b = N.call(v, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(v)
			}
			const i = (0, e.C)("user").get`/user`,
				d = (0, e.C)("user").patch`/user`,
				E = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/two_factor_authentication`,
				l = (0, e.C)("user").delete`/user/two_factor_authentication`,
				c = (0, e.C)("user").put`/user/email`;

			function f(...v) {
				return c(...v)
			}
			const _ = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				A = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(v => a({}, v, {
					body: a({}, v.body, {
						result: {}
					})
				}))),
				S = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				h = (0, e.C)("userDetails").get`/user/details`,
				R = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(F, y, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/utils/zoneLevelAccess.ts");
			const a = ({
				legacyPermission: p,
				canAccess: u,
				children: m,
				render: i
			}) => {
				const d = !!(0, o.P)();
				let E;
				typeof u == "boolean" && u !== void 0 && d ? E = {
					read: u,
					list: u,
					create: u,
					update: u,
					delete: u,
					sign: u
				} : E = (0, e.Z)(p);
				const n = i || m;
				return n ? n(E) : null
			};
			y.Z = a
		},
		"../react/common/components/AccessCheck/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				L8: function() {
					return n
				},
				W9: function() {
					return E
				},
				ZZ: function() {
					return m
				},
				j: function() {
					return r
				},
				jX: function() {
					return i
				},
				my: function() {
					return d
				},
				u1: function() {
					return e
				},
				zs: function() {
					return u
				}
			});
			const e = "com.cloudflare.api.account",
				o = "com.cloudflare.api.account.",
				a = "com.cloudflare.edge.",
				p = "com.cloudflare.api.account.zone.",
				u = ["com.cloudflare.api.app.manage"];
			let m = function(s) {
				return s.read = "read", s.list = "list", s.create = "create", s.update = "update", s.delete = "delete", s.sign = "sign", s.refresh = "refresh", s
			}({});
			const i = (s, l) => `${o}${s?s+".":""}${l}`,
				d = (s, l) => `${p}${s?s+".":""}${l}`,
				E = (s, l) => `${a}${s}.${l}`,
				n = (s = "") => `${o}${s}`,
				r = (s = "") => `${p}${s}`
		},
		"../react/common/components/AccessCheck/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				L8: function() {
					return p.L8
				},
				W9: function() {
					return p.W9
				},
				WL: function() {
					return a.WL
				},
				ZP: function() {
					return o.Z
				},
				ZZ: function() {
					return p.ZZ
				},
				hT: function() {
					return a.hT
				},
				j: function() {
					return p.j
				},
				jX: function() {
					return p.jX
				},
				my: function() {
					return p.my
				},
				xk: function() {
					return e.Z
				},
				zs: function() {
					return p.zs
				}
			});
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/common/components/AccessCheck/AccessCheck.tsx"),
				a = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				p = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				p = t("../react/common/selectors/accountSelectors.ts"),
				u = t("../react/pages/zone-versioning/selectors.ts");

			function m(i) {
				const {
					read: d,
					edit: E
				} = (0, a.p4)(p.Yj)(i);
				let n = E;
				if (i != "zone_versioning") {
					const s = (0, a.p4)(u.G);
					(s == null ? void 0 : s.isLocked) && (n = !1)
				}
				return (0, e.useMemo)(() => ({
					read: d,
					list: d,
					create: n,
					update: n,
					delete: n,
					sign: n
				}), [d, n])
			}
			y.Z = m
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				WL: function() {
					return s
				},
				hT: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				a = t("../react/pages/home/members/utils.ts"),
				p = t("../react/common/components/AccessCheck/constants.ts"),
				u = t("../react/pages/zone-versioning/selectors.ts");
			const m = {
					allow: "allow",
					deny: "deny"
				},
				i = 0,
				d = 1,
				E = 2,
				n = 3;

			function r(C, N, b, M) {
				let T = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					P;
				for (P in T) T[P] = s(C, `${N}.${P}`, b, M);
				return T
			}

			function s(C, N, b, M) {
				var T;
				if (l(N) && !c(N)) {
					const ne = (0, u.G)(C);
					if (ne == null ? void 0 : ne.isLocked) return !1
				}
				const P = (T = (0, o.D0)(C)) === null || T === void 0 ? void 0 : T.id,
					L = P ? [`com.cloudflare.api.account.${P}`] : void 0,
					H = (0, a.vq)(P);
				return !!_(C, H, N, b, M || L)
			}

			function l(C) {
				return ![p.ZZ.read, p.ZZ.list].some(N => C.endsWith(N))
			}

			function c(C) {
				return C.includes("zone.versioning")
			}

			function f(C) {
				const N = (0, o.Ko)(C);
				let b = !1;
				return N == null || N.forEach(M => {
					M.access === m.allow && M.permission_groups.forEach(T => {
						var P;
						(T == null || (P = T.meta) === null || P === void 0 ? void 0 : P.scopes) === p.u1 && (b = !0)
					})
				}), b
			}

			function _(C, N, b, M, T) {
				const P = (0, o.Ko)(C),
					L = {};
				P == null || P.forEach(ae => {
					var Y;
					const K = ae.access;
					let me = i;
					if (b && ae.permission_groups.forEach(q => {
							var G, V;
							N == null || (G = N.find(x => x.id === q.id)) === null || G === void 0 || (V = G.permissions) === null || V === void 0 || V.forEach(x => {
								me = Math.max(me, A(x, b))
							})
						}), me !== i && !!M) {
						let q = i;
						ae.resource_groups.forEach(G => {
							q = Math.max(q, h(G.scope, M, T))
						}), me = q === i ? q : me + q
					}(L == null || (Y = L[K]) === null || Y === void 0 ? void 0 : Y[me]) || (0, e.Z)(L, [K, me], []), L[K][me].push(ae)
				});
				const H = L[m.allow] && Object.keys(L[m.allow]).map(ae => parseInt(ae)),
					X = L[m.deny] && Object.keys(L[m.deny]).map(ae => parseInt(ae)),
					ne = Math.max.apply(Math, H);
				return ne === i || Math.max.apply(Math, X) >= ne ? null : L[m.allow][ne]
			}

			function A(C, N) {
				if (C.key === N || S(C.key, N)) return n;
				for (const b of (C == null ? void 0 : C.implies) || []) {
					let M = A(b, N);
					if (M > i) return M
				}
				return i
			}

			function S(C, N) {
				const b = N == null ? void 0 : N.lastIndexOf(".");
				return b === -1 ? !1 : (N == null ? void 0 : N.substring(0, b)) + ".*" === C
			}

			function h(C, N, b) {
				var M;
				let T = i;
				if (C == null || (M = C.objects) === null || M === void 0 || M.forEach(P => {
						T = Math.max(T, v(P, N))
					}), T === i) return T;
				if (C.key !== "*") switch (!0) {
					case R(C.key, b) > i:
					case (!(b == null ? void 0 : b.length) && T === n):
						break;
					case (T === d && R(C.key, [N]) > i):
						T = R(C.key, [N]);
						break;
					default:
						return i
				}
				for (const P of C.subset_of || [])
					if (R(P.key, b) === i) return i;
				return T
			}

			function R(C, N = []) {
				for (const b of N || []) {
					if (C === b) return n;
					if (S(C, b)) return E
				}
				return i
			}

			function v(C, N) {
				return C.key === N ? n : C.key === "*" ? d : S(C.key, N) ? E : i
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				a: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				a = t("../react/common/selectors/accountSelectors.ts");
			const p = m => {
					if (typeof m != "string") throw new Error("invalid Param Type provided");
					const i = m.slice(1).split(":");
					if (i.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: i[0],
						value: i[1]
					}
				},
				u = (m, i) => {
					const {
						resourceId: d,
						accountId: E,
						legacyPermission: n
					} = i;
					let {
						read: r,
						edit: s
					} = i;
					const l = {};
					n && (s = `#${n}:edit`, r = `#${n}:read`);
					const c = d || E;
					if (r) {
						const f = Array.isArray(r) ? r : [r];
						l.isReadable = f.some(_ => {
							const A = p(_);
							return (0, a.DT)(m, c, S => !!(S[A.key] && S[A.key][A.value]))
						})
					}
					if (s) {
						const f = Array.isArray(s) ? s : [s];
						l.isEditable = f.some(_ => {
							const A = p(_);
							return (0, a.DT)(m, c, S => !!(S[A.key] && S[A.key][A.value]))
						})
					}
					return l
				};
			y.Z = (0, e.connect)(u)
		},
		"../react/common/components/AccessControl/index.js": function(F, y, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				o = t.n(e),
				a = t("../react/app/HoCs/withEntities.tsx"),
				p = t("../react/common/components/AccessControl/SAAConnect.js");

			function u(r) {
				for (var s = 1; s < arguments.length; s++) {
					var l = arguments[s] != null ? Object(arguments[s]) : {},
						c = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), c.forEach(function(f) {
						m(r, f, l[f])
					})
				}
				return r
			}

			function m(r, s, l) {
				return s = i(s), s in r ? Object.defineProperty(r, s, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = l, r
			}

			function i(r) {
				var s = d(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function d(r, s) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var c = l.call(r, s || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}

			function E(r) {
				const l = ["isReadable", "isEditable"].reduce((c, f) => r.hasOwnProperty(f) ? u({}, c, {
					[f]: r[f]
				}) : c, {});
				return r.children(l)
			}
			E.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const n = (0, a.Z)((0, p.Z)(E));
			n.displayName = "AccessControl", y.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				PP: function() {
					return r
				},
				RJ: function() {
					return i
				},
				tz: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const m = () => d.test(window.location.pathname) || a.E.has(p.Qq),
				i = () => a.E.get(p.Qq),
				d = /^\/login\/apple(\/)?/,
				n = [d, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let l = !1;
					n.forEach(f => {
						if (f.test(window.location.pathname)) {
							l = !0;
							return
						}
					});
					const c = m() && l;
					return c && (0, u.C8)(u.LF.OFF), c
				},
				s = l => {
					l && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let c = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					l && (c = c + `&jwt=${l}`), window.location.href = c
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				oG: function() {
					return c
				},
				sN: function() {
					return d.sN
				},
				v2: function() {
					return d.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				p = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				m = t.n(u),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = t("../react/common/components/Dropdown/index.tsx"),
				E = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(f) {
					for (var _ = 1; _ < arguments.length; _++) {
						var A = arguments[_];
						for (var S in A) Object.prototype.hasOwnProperty.call(A, S) && (f[S] = A[S])
					}
					return f
				}, n.apply(this, arguments)
			}

			function r(f, _) {
				if (f == null) return {};
				var A = s(f, _),
					S, h;
				if (Object.getOwnPropertySymbols) {
					var R = Object.getOwnPropertySymbols(f);
					for (h = 0; h < R.length; h++) S = R[h], !(_.indexOf(S) >= 0) && (!Object.prototype.propertyIsEnumerable.call(f, S) || (A[S] = f[S]))
				}
				return A
			}

			function s(f, _) {
				if (f == null) return {};
				var A = {},
					S = Object.keys(f),
					h, R;
				for (R = 0; R < S.length; R++) h = S[R], !(_.indexOf(h) >= 0) && (A[h] = f[h]);
				return A
			}
			const l = (0, i.createStyledComponent)(({
				theme: f
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${f.radii[2]}px 0 0 ${f.radii[2]}px`,
					borderRight: `1px solid ${f.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${f.radii[2]}px ${f.radii[2]}px 0`,
					paddingRight: f.space[2],
					paddingLeft: f.space[2]
				},
				"& button": {
					color: (0, E.Yc)() ? f.colors.text : void 0
				},
				"& button:hover": {
					color: (0, E.Yc)() ? f.colors.text : void 0
				}
			}));

			function c(f) {
				let {
					menu: _,
					containerProps: A,
					disabled: S,
					disabledDropdown: h = S
				} = f, R = r(f, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: v
				} = (0, u.useI18n)();
				return o().createElement(l, n({}, A, {
					role: "group"
				}), o().createElement(a.zx, n({}, R, {
					disabled: S
				})), o().createElement(d.Lt, {
					trigger: o().createElement(a.zx, {
						type: R.type,
						"aria-haspopup": "menu",
						disabled: h
					}, o().createElement(p.J, {
						type: "caret-down",
						label: v("common.more"),
						size: 12
					})),
					menu: _
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/prop-types/index.js"),
				p = t.n(a),
				u = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const m = ({
				children: i
			}) => o().createElement(u.xu, {
				height: 411
			}, i);
			m.propTypes = {
				children: p().node
			}, y.Z = m
		},
		"../react/common/components/ModalManager.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return c
				},
				dd: function() {
					return s
				},
				vR: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react-redux/react-redux");
			const p = f => f.application.modals;
			var u = t("../react/common/actions/modalActions.ts"),
				m = t("../../../../node_modules/swr/core/dist/index.mjs"),
				i = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function d() {
				return d = Object.assign ? Object.assign.bind() : function(f) {
					for (var _ = 1; _ < arguments.length; _++) {
						var A = arguments[_];
						for (var S in A) Object.prototype.hasOwnProperty.call(A, S) && (f[S] = A[S])
					}
					return f
				}, d.apply(this, arguments)
			}
			const E = o().createContext(null);
			class n extends o().Component {
				render() {
					const {
						modals: _,
						closeModal: A
					} = this.props;
					return o().createElement(o().Fragment, null, _.map(({
						ModalComponent: S,
						props: h = {},
						id: R
					}) => {
						const v = () => {
							typeof h.onClose == "function" && h.onClose(), A(S)
						};
						return o().createElement(E.Provider, {
							key: R,
							value: {
								closeModal: v
							}
						}, o().createElement(m.J$, {
							value: i.ZP
						}, o().createElement(S, d({}, h, {
							isOpen: !0,
							closeModal: v
						}))))
					}))
				}
			}

			function r() {
				const f = o().useContext(E);
				if (!f) throw new Error("useModalContext must be used within a ModalContext");
				return f
			}

			function s() {
				const f = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(..._) {
						return f(u.openModal(..._))
					}, [f]),
					closeModal: (0, e.useCallback)(function(..._) {
						return f(u.closeModal(..._))
					}, [f])
				}
			}
			var c = (0, a.connect)(f => ({
				modals: p(f)
			}), u)(n)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return d
				},
				JR: function() {
					return E
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return m
				},
				ZI: function() {
					return u
				},
				if: function() {
					return o
				},
				q6: function() {
					return a
				},
				w_: function() {
					return p
				},
				zl: function() {
					return i
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				a = "date-from",
				p = "date-to",
				u = "from",
				m = "to",
				i = "all",
				d = {
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
			let E = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				n = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				v: function() {
					return e
				}
			});
			let e = function(o) {
				return o.FIELD = "change field", o.OPERATOR = "change operator", o
			}({})
		},
		"../react/common/constants/analytics/botScoreSrc.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				EG: function() {
					return a
				},
				Me: function() {
					return u
				},
				sk: function() {
					return p
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let a = function(m) {
				return m.NOT_COMPUTED = "not_computed", m.MACHINE_LEARNING = "machine_learning", m.HEURISTICS = "heuristics", m.BEHAVIORAL_ANALYSIS = "behavioral_analysis", m.JS_FINGERPRINTING = "js_fingerprinting", m.VERIFIED_BOT = "verified_bot", m.CLOUDFLARE_SERVICE = "cloudflare_service", m
			}({});
			const p = {
					[a.NOT_COMPUTED]: "Not Computed",
					[a.MACHINE_LEARNING]: "Machine Learning",
					[a.HEURISTICS]: "Heuristics",
					[a.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[a.JS_FINGERPRINTING]: "JS Fingerprinting",
					[a.VERIFIED_BOT]: "Verified Bot",
					[a.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				u = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [a.NOT_COMPUTED, a.MACHINE_LEARNING, a.HEURISTICS, a.BEHAVIORAL_ANALYSIS, a.JS_FINGERPRINTING, a.VERIFIED_BOT, a.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Gq: function() {
					return p
				},
				g$: function() {
					return a
				},
				WX: function() {
					return e
				},
				E0: function() {
					return E
				},
				Hw: function() {
					return m
				},
				Ed: function() {
					return u
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return l
				},
				hQ: function() {
					return i
				},
				SP: function() {
					return d
				}
			});
			let e = function(c) {
				return c.page_rules = "page_rules", c.automatic_platform_optimization = "automatic_platform_optimization", c
			}({});
			const o = "page_rules",
				a = "automatic_platform_optimization",
				p = {
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
				m = {
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
				d = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					ubb_frequency: 1e3,
					ubb_storage_price: 5,
					ubb_streaming_price: 1,
					ubb_unit: "minute"
				},
				E = {
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
				r = t("../react/common/constants/billing/tracking.ts"),
				s = t("../react/common/constants/billing/workers.ts");
			const l = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
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
				p = {
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
					return l
				},
				Dy: function() {
					return c
				},
				E_: function() {
					return m
				},
				K$: function() {
					return S
				},
				Lv: function() {
					return f
				},
				S4: function() {
					return u
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return E
				},
				Y1: function() {
					return i
				},
				p6: function() {
					return d
				},
				q0: function() {
					return p
				},
				rg: function() {
					return _
				},
				sJ: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const p = "healthy",
				u = "degraded",
				m = "critical",
				i = "unknown",
				d = "not-monitored",
				E = o().from({
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
				r = {
					f: E.FREE,
					p: E.PRO,
					b: E.BIZ
				},
				s = "marketing-pt",
				l = () => {
					const h = a.Z.get(s);
					if (!!h) return r[h]
				},
				c = ["gov"],
				f = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				_ = "banner-notification-interactions",
				A = null;
			let S = function(h) {
				return h.SUPER_ADMIN = "Super Administrator - All Privileges", h.ADMIN = "Administrator", h.ADMIN_READ_ONLY = "Administrator Read Only", h
			}({})
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
					return o.E0
				},
				E_: function() {
					return e.E_
				},
				K$: function() {
					return e.K$
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
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
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
					return p
				}
			});
			let e = function(u) {
				return u.DELETE = "delete", u.CREATE = "create", u.GET = "get", u.UPDATE = "update", u
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
				a = (u, m, i = !1) => {
					var d;
					return `${m} ${(d=o[u])!==null&&d!==void 0?d:u} ${i?"ruleset":"rule"}${m===e.GET?"s":""}`
				},
				p = () => {
					var u;
					return (u = Object.keys(o).reduce((m, i) => {
						const d = Object.values(e).reduce((E, n) => (E.push(a(i, n)), E.push(a(i, n, !0)), E), []);
						return m.concat(d)
					}, [])) === null || u === void 0 ? void 0 : u.flat()
				}
		},
		"../react/common/hooks/suspenseHelpers.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				bt: function() {
					return i
				},
				nW: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const p = "suspenseComplete";

			function u() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(p))
				}, [])
			}

			function m(d) {
				(0, a.OR)(p, () => {
					window.setTimeout(d, 0)
				}, {
					target: window
				})
			}

			function i(...d) {
				const [E, n] = d;
				o().useLayoutEffect(E, n), m(E)
			}
		},
		"../react/common/hooks/useAccountEntitlement.ts": function(F, y, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(p) {
				return (0, e.p4)(u => (0, o.BF)(u, p))
			}
			y.Z = a
		},
		"../react/common/hooks/useAccountId.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return u
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = t.n(a);

			function u() {
				var m;
				const {
					accountId: i
				} = (0, a.useParams)(), d = (0, e.p4)(o.D0);
				if (i === void 0 && !d) throw new Error("Account ID not found in URL params");
				return (m = i) !== null && m !== void 0 ? m : d == null ? void 0 : d.id
			}
		},
		"../react/common/hooks/useCachedState.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				j: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function p(u, {
				key: m,
				cache: i = a.E,
				ttl: d
			} = {}) {
				var E;
				const n = m !== void 0 && i.get(m),
					[r, s] = (0, e.useState)((E = n) !== null && E !== void 0 ? E : u);
				return [r, c => {
					s(f => (c instanceof Function && (c = c(f)), m !== void 0 && i.set(m, c, d), c))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(F, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(a) {
				return (0, e.qf)(a)
			}
			y.Z = o
		},
		"../react/common/hooks/usePrevious.ts": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function a(p) {
				const u = (0, e.useRef)(p);
				return (0, e.useEffect)(() => {
					u.current = p
				}, [p]), u.current
			}
			y.Z = a
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(F, y, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(p) {
				return (0, e.p4)(u => (0, o.rV)(u, p))
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
					return p
				},
				oV: function() {
					return m
				}
			});

			function e(i, d, E) {
				return d = o(d), d in i ? Object.defineProperty(i, d, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = E, i
			}

			function o(i) {
				var d = a(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function a(i, d) {
				if (typeof i != "object" || i === null) return i;
				var E = i[Symbol.toPrimitive];
				if (E !== void 0) {
					var n = E.call(i, d || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			class p extends Error {
				constructor(d, E) {
					super(E);
					e(this, "eventName", void 0), this.eventName = d, this.name = "SparrowValidationError"
				}
			}
			class u extends p {
				constructor(d) {
					super(d, `Event not allowed: "${d}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class m extends p {
				constructor(d, E) {
					super(d, `Found invalid properties on event: "${d}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = E
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AC: function() {
					return Ie
				},
				Au: function() {
					return z
				},
				B: function() {
					return ie
				},
				B3: function() {
					return ze
				},
				BG: function() {
					return b
				},
				Bp: function() {
					return qe
				},
				D0: function() {
					return R
				},
				DT: function() {
					return W
				},
				EL: function() {
					return oe
				},
				EU: function() {
					return de
				},
				GE: function() {
					return gt
				},
				Ko: function() {
					return k
				},
				Kx: function() {
					return P
				},
				Le: function() {
					return L
				},
				O4: function() {
					return Fe
				},
				Ou: function() {
					return G
				},
				Py: function() {
					return Re
				},
				QI: function() {
					return ut
				},
				RO: function() {
					return Qe
				},
				T3: function() {
					return Xe
				},
				T8: function() {
					return N
				},
				UX: function() {
					return ee
				},
				VP: function() {
					return Ye
				},
				Xo: function() {
					return Ke
				},
				Xu: function() {
					return K
				},
				Yi: function() {
					return dt
				},
				Yj: function() {
					return O
				},
				Zu: function() {
					return j
				},
				bC: function() {
					return Ce
				},
				f8: function() {
					return ne
				},
				hI: function() {
					return ct
				},
				hN: function() {
					return T
				},
				hX: function() {
					return Z
				},
				iq: function() {
					return he
				},
				nE: function() {
					return M
				},
				oD: function() {
					return x
				},
				oI: function() {
					return X
				},
				oJ: function() {
					return Ze
				},
				tM: function() {
					return V
				},
				uF: function() {
					return me
				},
				ut: function() {
					return Ne
				},
				vU: function() {
					return it
				},
				wQ: function() {
					return Be
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				a = t.n(o),
				p = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				u = t.n(p),
				m = t("../../../../node_modules/reselect/lib/index.js"),
				i = t("../../../../node_modules/moment/moment.js"),
				d = t.n(i),
				E = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				r = t("../react/common/selectors/userSelectors.ts"),
				s = t("../react/common/selectors/entitlementsSelectors.ts"),
				l = t("../react/app/components/DeepLink/selectors.ts"),
				c = t("../react/common/constants/index.ts"),
				f = t("../react/common/utils/hasRole.ts");

			function _($) {
				for (var ce = 1; ce < arguments.length; ce++) {
					var ve = arguments[ce] != null ? Object(arguments[ce]) : {},
						Ae = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && Ae.push.apply(Ae, Object.getOwnPropertySymbols(ve).filter(function(le) {
						return Object.getOwnPropertyDescriptor(ve, le).enumerable
					})), Ae.forEach(function(le) {
						A($, le, ve[le])
					})
				}
				return $
			}

			function A($, ce, ve) {
				return ce = S(ce), ce in $ ? Object.defineProperty($, ce, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[ce] = ve, $
			}

			function S($) {
				var ce = h($, "string");
				return typeof ce == "symbol" ? ce : String(ce)
			}

			function h($, ce) {
				if (typeof $ != "object" || $ === null) return $;
				var ve = $[Symbol.toPrimitive];
				if (ve !== void 0) {
					var Ae = ve.call($, ce || "default");
					if (typeof Ae != "object") return Ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ce === "string" ? String : Number)($)
			}
			const R = $ => {
					const ce = me($);
					return ce == null ? void 0 : ce.account
				},
				v = $ => {
					const ce = (0, r.PR)($);
					if (ce) {
						const ve = ce.id;
						return $.accountAccess[ve] || {}
					}
					return {}
				},
				C = $ => $.accountsDetailed,
				N = (0, n.P1)("accountsDetailed", C),
				b = $ => $.memberships,
				M = (0, m.P1)((0, n.P1)("memberships", b), l.U, ($, ce) => !!ce && !!$ ? $.filter(ve => ce.includes(ve.id)) : $),
				T = $ => $.accountFlags && $.accountFlags.data,
				P = $ => $.accountFlags,
				L = ($, ce, ve) => {
					const Ae = T($);
					return !Ae || !Ae[ce] ? null : Ae[ce][ve]
				},
				H = $ => $.accountFlags.isRequesting,
				X = ($, ...ce) => a()($, ["accountFlagsChanges", "data", ...ce]),
				ne = $ => $.accountFlagsChanges.isRequesting,
				ae = (0, m.P1)(T, P, ($, ce) => ({
					data: $,
					meta: ce
				})),
				Y = ($, ce, ve) => !!(isEnterpriseSSEnabledSelector($) && L($, ce, ve)),
				K = $ => $.membership,
				me = (0, n.P1)("membership", K),
				q = (0, m.P1)(me, K, ($, ce) => ({
					data: $,
					meta: ce
				})),
				G = $ => {
					const {
						roles: ce = []
					} = me($) || {};
					return Boolean(ce.find(ve => ve === "Super Administrator - All Privileges" || ve === "Billing"))
				},
				V = $ => {
					const ce = [c.K$.SUPER_ADMIN];
					return (0, f.n)($, ce)
				},
				x = $ => {
					const ce = v($),
						ve = Te.getMemberships($) ? u().asMutable(Te.getMemberships($)) : [];
					if (!!ve) return u().from(ve.map(Ae => _({}, Ae, {
						lastSeen: ce[Ae.account.id] ? ce[Ae.account.id].lastSeen : null
					})).sort((Ae, le) => Ae.lastSeen && le.lastSeen ? le.lastSeen - Ae.lastSeen : 0))
				},
				ee = $ => $.filteredMemberships,
				oe = (0, n.P1)("filteredMemberships", ee),
				j = (0, m.P1)(me, $ => $ == null ? void 0 : $.permissions),
				O = (0, m.P1)(j, $ => (0, e.Z)(ce => {
					var ve;
					return (ve = $ == null ? void 0 : $[ce]) !== null && ve !== void 0 ? ve : {
						read: !1,
						edit: !1
					}
				})),
				k = (0, m.P1)(me, $ => $ == null ? void 0 : $.policies),
				W = ($, ce, ve) => {
					let Ae = Te.getMembership($);
					if (!Ae) {
						const le = Te.getMemberships($);
						if (!le || !ce) return !1;
						Ae = le.find(pe => pe.account.id === ce)
					}
					if (!Ae || !ve) return !1;
					try {
						return ve(Ae.permissions)
					} catch {
						return !1
					}
				},
				se = $ => {
					var ce, ve;
					return (ce = (ve = R($)) === null || ve === void 0 ? void 0 : ve.meta.has_pro_zones) !== null && ce !== void 0 ? ce : !1
				},
				de = $ => {
					var ce, ve;
					return (ce = (ve = R($)) === null || ve === void 0 ? void 0 : ve.meta.has_business_zones) !== null && ce !== void 0 ? ce : !1
				},
				Ce = $ => de($) || se($),
				be = ($, ce) => {
					const ve = we($, ce);
					return !!ve && !!ve.enabled
				},
				we = ($, ce) => {
					const ve = Te.getMembership($),
						Ae = ve && ve.account;
					return Ae && Ae.legacy_flags && Ae.legacy_flags[ce]
				},
				Be = $ => be($, "custom_pages"),
				We = $ => !!$ && $["webhooks.webhooks.enabled"],
				Ue = $ => L($, "bots", "enabled"),
				Ge = $ => L($, "billing", "annual_subscriptions_enable"),
				Qe = $ => $ ? Boolean(L($, "ConstellationAI", "v2_ui")) : !1,
				Z = $ => $ ? Boolean(L($, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				ie = $ => $ ? Boolean(L($, "AIgateway", "enabled")) : !1,
				w = $ => we($, "enterprise_zone_quota"),
				te = $ => {
					const ce = w($);
					return !ce || !ce.available ? -1 : ce.available
				},
				he = $ => $.accountMembers,
				ze = (0, n.P1)("accountMembers", he),
				Fe = $ => $.accountMember && $.accountMember.isRequesting,
				xe = $ => $.accountRoles,
				Ie = (0, n.P1)("accountRoles", xe),
				Re = ($, ce) => {
					const ve = Te.getMemberships($),
						Ae = ve && ve.find(ye => ye.account.id === ce);
					if (Ae) return Ae.account.name.replace(" Account", " account");
					const le = Te.getMembership($),
						pe = le && le.account;
					return pe && pe.id === ce ? pe.name : null
				},
				Ne = ($, ce) => {
					const ve = Te.getMemberships($),
						Ae = ve && ve.find(ye => ye.account.id === ce);
					if (Ae) return Ae.account.settings.access_approval_expiry;
					const le = Te.getMembership($),
						pe = le && le.account;
					return pe && pe.id === ce ? pe.settings.access_approval_expiry : null
				},
				Ke = ($, ce) => {
					const ve = Ne($, ce);
					return ve ? d().utc(ve).isAfter() : !1
				},
				Xe = ($, ce, ve) => {
					const Ae = Ne($, ce);
					let le = Ae ? d().utc(Ae) : null;
					return !le || !le.isAfter() ? "" : le && le.year() === 3e3 ? ve("account.access_approval.card_expiration_forever") : ve("account.access_approval.card_expiration_text", {
						expiryTimestamp: le.local().format(E.U.DateTime)
					})
				},
				Ze = $ => $ && $.member && $.member.edit,
				z = ($, ce) => {
					const ve = Te.getMembership($),
						Ae = ve && ve.account;
					return Ae ? Ae.id !== ce : !1
				},
				J = $ => $.dpa,
				Ee = (0, n.P1)("dpa", J),
				Se = $ => $.webhook,
				ke = $ => $.webhooks,
				Ve = (0, n.P1)("webhook", ke),
				Ye = $ => $.accountLegoContract,
				lt = (0, n.P1)("accountLegoContract", Ye),
				ut = $ => {
					const ce = lt($);
					return (ce == null ? void 0 : ce.lego_state) ? ce.lego_state : ""
				},
				_t = $ => ut($) === "signed",
				gt = $ => Ye($).isRequesting,
				it = $ => {
					const ce = lt($);
					return ce && ce.subscription_type ? ce.subscription_type : ""
				},
				je = $ => it($) !== "",
				Te = {
					getMembership: me,
					getMemberships: M,
					getFilteredMemberships: oe,
					getAccountMembers: ze,
					getAccountRoles: Ie
				},
				qe = $ => $.accountSingle,
				dt = (0, n.P1)("accountSingle", qe),
				ct = $ => {
					const ce = [c.K$.SUPER_ADMIN, c.K$.ADMIN];
					return (0, f.n)($, ce)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$f: function() {
					return c
				},
				AD: function() {
					return u
				},
				BF: function() {
					return l
				},
				Bs: function() {
					return R
				},
				Ci: function() {
					return j
				},
				DA: function() {
					return Qe
				},
				E6: function() {
					return s
				},
				Gy: function() {
					return We
				},
				Hq: function() {
					return Be
				},
				Ms: function() {
					return N
				},
				Pj: function() {
					return Ge
				},
				Q2: function() {
					return m
				},
				Qq: function() {
					return Ce
				},
				Td: function() {
					return S
				},
				Z: function() {
					return W
				},
				a: function() {
					return h
				},
				a5: function() {
					return de
				},
				c7: function() {
					return be
				},
				du: function() {
					return d
				},
				ec: function() {
					return ne
				},
				f: function() {
					return we
				},
				hL: function() {
					return se
				},
				ji: function() {
					return O
				},
				jo: function() {
					return b
				},
				l9: function() {
					return ie
				},
				lI: function() {
					return p
				},
				p1: function() {
					return _
				},
				pK: function() {
					return Ue
				},
				pf: function() {
					return n
				},
				qR: function() {
					return A
				},
				rV: function() {
					return i
				},
				u1: function() {
					return E
				},
				w4: function() {
					return r
				},
				yD: function() {
					return k
				}
			});
			var e = t("../react/utils/url.ts");

			function o(w, te) {
				return w && w[te]
			}
			const a = w => !p(w).isRequesting;

			function p(w) {
				return w.entitlements.zone
			}

			function u(w) {
				return p(w).data
			}
			const m = w => {
				var te, he;
				return ((te = p(w).paginationData) === null || te === void 0 || (he = te.options) === null || he === void 0 ? void 0 : he.editedDate) || {}
			};

			function i(w, te) {
				const he = u(w);
				return he ? o(he, te) : void 0
			}
			const d = (w, te) => i(w, te) === !0;

			function E(w) {
				return w.entitlements.account
			}

			function n(w) {
				return E(w).data
			}
			const r = w => {
				var te, he;
				return ((te = E(w).paginationData) === null || te === void 0 || (he = te.options) === null || he === void 0 ? void 0 : he.editedDate) || {}
			};

			function s(w) {
				return !E(w).isRequesting
			}

			function l(w, te) {
				const he = n(w);
				return he ? o(he, te) : void 0
			}

			function c(w, te) {
				return l(w, te) === !0
			}

			function f(w, te) {
				return te.every(he => c(w, he))
			}

			function _(w) {
				return c(w, "contract.customer_enabled")
			}

			function A(w) {
				return c(w, "contract.self_service_allowed")
			}

			function S(w) {
				return c(w, "billing.partners_managed")
			}
			const h = w => _(w) && A(w),
				R = w => c(w, "enterprise.ecp_allowed");

			function v(w) {
				return C(w) || c(w, "argo.allow_smart_routing") || c(w, "argo.allow_tiered_caching") || c(w, "rate_limiting.enabled") || c(w, "ctm.enabled") || c(w, "workers.enabled") || c(w, "workers.kv_store.enabled") || c(w, "stream.enabled")
			}
			const C = w => d(w, "argo.allow_smart_routing") || d(w, "argo.allow_tiered_caching"),
				N = w => c(w, "zone.cname_setup_allowed") || c(w, "zone.partial_setup_allowed") || d(w, "zone.partial_setup_allowed"),
				b = w => c(w, "argo.allow_smart_routing") || d(w, "argo.allow_smart_routing"),
				M = w => c(w, "argo.allow_tiered_caching") || d(w, "argo.allow_tiered_caching"),
				T = w => b(w) || M(w),
				P = w => c(w, "ctm.enabled"),
				L = w => {
					const te = l(w, "ctm.load_balancers");
					return typeof te == "number" ? te : 0
				},
				H = w => {
					const te = l(w, "ctm.pools");
					return typeof te == "number" ? te : 0
				},
				X = w => {
					const te = l(w, "ctm.origins");
					return typeof te == "number" ? te : 0
				},
				ne = w => c(w, "workers.enabled"),
				ae = w => c(w, "stream.enabled"),
				Y = w => {
					const te = l(w, "access.users_allowed");
					return typeof te == "number" ? te : 0
				},
				K = w => Y(w) > 0,
				me = w => {
					const te = i(w, "dedicated_certificates");
					return typeof te == "number" ? te : 0
				},
				q = w => me(w) > 0,
				G = w => {
					const te = i(w, "rate_limiting.max_rules");
					return typeof te == "number" ? te : 0
				},
				V = w => c(w, "rate_limiting.enabled"),
				x = w => {
					const te = i(w, "page_rules");
					return typeof te == "number" ? te : 0
				},
				ee = w => x(w) > 0,
				oe = w => {
					const te = l(w, "dns_firewall.max_clusters_allowed");
					return typeof te == "number" ? te : 0
				},
				j = w => oe(w) > 0,
				O = w => d(w, "zone.advanced_certificate_manager") || c(w, "zone.advanced_certificate_manager"),
				k = w => i(w, "authoritative_dns.proxy_record_allowed") === !1 || l(w, "authoritative_dns.proxy_record_allowed") === !1,
				W = w => c(w, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				se = w => i(w, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				de = w => {
					const te = i(w, "authoritative_dns.min_record_ttl_allowed");
					return typeof te == "number" && te > 1 ? te : 60
				},
				Ce = w => c(w, "foundation_dns.advanced_nameservers_allowed") || d(w, "foundation_dns.advanced_nameservers_allowed"),
				be = w => c(w, "account_custom_ns.allowed"),
				we = (w, te) => ((0, e.el)(window.location.pathname) ? i : l)(w, te),
				Be = w => c(w, "authoritative_dns.multi_provider_allowed") || d(w, "authoritative_dns.multi_provider_allowed"),
				We = w => d(w, "authoritative_dns.cname_flattening_allowed"),
				Ue = w => c(w, "secondary_dns.secondary_overrides") || d(w, "secondary_dns.secondary_overrides"),
				Ge = w => c(w, "authoritative_dns.custom_soa_allowed") || d(w, "authoritative_dns.custom_soa_allowed"),
				Qe = w => c(w, "authoritative_dns.custom_ns_ttl_allowed") || d(w, "authoritative_dns.custom_ns_ttl_allowed"),
				Z = w => c(w, "secondary.create_zone"),
				ie = w => Ce(w) || be(w) || Be(w) || Z(w) || Ue(w) || Ge(w) || Qe(w)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return u
				},
				v: function() {
					return m
				}
			});
			var e = t("../react/utils/i18n.ts"),
				o = t("../../../common/intl/intl-types/src/index.ts"),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = t("../react/utils/bootstrap.ts");
			const u = i => {
				if ((0, p.gm)()) return a.Z.set(e.ly, e.ZW), e.ZW;
				const d = i.userCommPreferences.data;
				if (d == null ? void 0 : d["language-locale"]) return (0, e.i_)(d["language-locale"]), d["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const E = (0, e.Kd)();
					return m(E) ? E : e.ZW
				}
			};

			function m(i) {
				const d = Object.keys(o.Q).find(E => o.Q[E] === i);
				return !!i && typeof i == "string" && d != null && (0, e.S8)(d)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return u
				},
				BG: function() {
					return E
				},
				BY: function() {
					return h
				},
				GP: function() {
					return c
				},
				GU: function() {
					return R
				},
				PR: function() {
					return a
				},
				h$: function() {
					return A
				},
				h8: function() {
					return n
				},
				kk: function() {
					return _
				},
				l8: function() {
					return i
				},
				mV: function() {
					return f
				},
				vW: function() {
					return m
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const o = v => v.user,
				a = (0, e.P1)("user", o),
				p = v => {
					var C;
					return (C = a(v)) === null || C === void 0 ? void 0 : C.email.endsWith("@cloudflare.com")
				},
				u = v => {
					var C;
					return !!((C = a(v)) === null || C === void 0 ? void 0 : C.id)
				},
				m = v => {
					const C = a(v);
					if (!!C) return C.first_name && C.last_name ? `${C.first_name} ${C.last_name}` : C.email
				},
				i = v => {
					const C = a(v);
					return C && C.has_enterprise_zones
				},
				d = v => v.userCommPreferences,
				E = (0, e.P1)("userCommPreferences", d),
				n = v => {
					const C = a(v);
					return C && C.email_verified
				},
				r = v => {
					const C = E(v);
					return C && C.preferences.marketing_communication
				},
				s = v => v.userDetails,
				l = (0, e.P1)("userDetails", s),
				c = v => {
					const C = l(v);
					return C && C["2FA-RECOVERY"] === "scheduled"
				},
				f = v => {
					const C = l(v);
					return C && C["2FA-RECOVERY"] === "interrupted"
				},
				_ = v => {
					const C = l(v);
					return C == null ? void 0 : C["NEW-USER-EMAIL"]
				},
				A = v => v.gates.assignments,
				S = (v, C) => v && v[C];

			function h(v, C) {
				const N = A(v);
				return N ? S(N, C) : void 0
			}
			const R = (v, C) => h(v, C) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return N
				},
				$t: function() {
					return Re
				},
				A4: function() {
					return _
				},
				Cu: function() {
					return A
				},
				DQ: function() {
					return be
				},
				Ej: function() {
					return M
				},
				FH: function() {
					return h
				},
				ID: function() {
					return V
				},
				Ko: function() {
					return Z
				},
				Le: function() {
					return We
				},
				Ly: function() {
					return j
				},
				M3: function() {
					return ze
				},
				N8: function() {
					return he
				},
				NY: function() {
					return se
				},
				Ns: function() {
					return ee
				},
				Ox: function() {
					return Xe
				},
				P4: function() {
					return T
				},
				RO: function() {
					return q
				},
				SX: function() {
					return de
				},
				Tr: function() {
					return Qe
				},
				U: function() {
					return S
				},
				Ug: function() {
					return v
				},
				V6: function() {
					return Fe
				},
				WR: function() {
					return Ze
				},
				Xg: function() {
					return f
				},
				ZB: function() {
					return Be
				},
				_y: function() {
					return x
				},
				cU: function() {
					return ie
				},
				cg: function() {
					return Ce
				},
				d2: function() {
					return ae
				},
				il: function() {
					return oe
				},
				jN: function() {
					return L
				},
				jg: function() {
					return k
				},
				kC: function() {
					return b
				},
				kf: function() {
					return xe
				},
				ko: function() {
					return me
				},
				mK: function() {
					return Ne
				},
				nA: function() {
					return c
				},
				oY: function() {
					return P
				},
				qM: function() {
					return Ue
				},
				rq: function() {
					return W
				},
				tS: function() {
					return C
				},
				tU: function() {
					return X
				},
				vB: function() {
					return Ke
				},
				vM: function() {
					return H
				},
				wH: function() {
					return R
				},
				wn: function() {
					return we
				},
				xU: function() {
					return ne
				},
				xw: function() {
					return Ge
				},
				z5: function() {
					return G
				},
				zO: function() {
					return w
				},
				zW: function() {
					return Ie
				},
				zh: function() {
					return Y
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				a = t("../../../../node_modules/lodash/get.js"),
				p = t.n(a),
				u = t("../../../../node_modules/moment/moment.js"),
				m = t.n(u),
				i = t("../react/common/constants/billing/index.ts");

			function d(z) {
				for (var J = 1; J < arguments.length; J++) {
					var Ee = arguments[J] != null ? Object(arguments[J]) : {},
						Se = Object.keys(Ee);
					typeof Object.getOwnPropertySymbols == "function" && Se.push.apply(Se, Object.getOwnPropertySymbols(Ee).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(Ee, ke).enumerable
					})), Se.forEach(function(ke) {
						E(z, ke, Ee[ke])
					})
				}
				return z
			}

			function E(z, J, Ee) {
				return J = n(J), J in z ? Object.defineProperty(z, J, {
					value: Ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[J] = Ee, z
			}

			function n(z) {
				var J = r(z, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function r(z, J) {
				if (typeof z != "object" || z === null) return z;
				var Ee = z[Symbol.toPrimitive];
				if (Ee !== void 0) {
					var Se = Ee.call(z, J || "default");
					if (typeof Se != "object") return Se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(z)
			}
			const s = (0, o.P1)("zone", z => z.zone),
				l = z => {
					var J;
					return (J = z.zoneVersioning) === null || J === void 0 ? void 0 : J.zoneVersionSelector
				},
				c = (0, e.P1)(s, l, (z, J) => {
					var Ee, Se, ke;
					let Ve;
					if (Array.isArray(z) && z.length === 1 ? Ve = z[0] : z && !Array.isArray(z) && (Ve = z), !Ve) return;
					const Ye = !!(J == null ? void 0 : J.enabled);
					return d({}, Ve, Ve.name && {
						name: Ye ? J.rootZoneName : Ve.name
					}, {
						versioning: {
							enabled: Ye,
							isRoot: !((Ee = Ve.name) === null || Ee === void 0 ? void 0 : Ee.endsWith(".config.cfdata.org")),
							version: Ye ? J.selectedVersion : 0,
							rootZoneId: Ye ? J.rootZoneId : (Se = (ke = Ve) === null || ke === void 0 ? void 0 : ke.id) !== null && Se !== void 0 ? Se : ""
						}
					})
				}),
				f = z => z.zone,
				_ = (0, e.P1)(c, f, (z, J) => ({
					data: z,
					meta: J
				})),
				A = z => {
					var J, Ee;
					return (J = (Ee = c(z)) === null || Ee === void 0 ? void 0 : Ee.id) !== null && J !== void 0 ? J : ""
				},
				S = z => z.zones,
				h = z => z.zonesRoot,
				R = z => z.zonesAccount,
				v = (0, o.P1)("zones", S),
				C = (0, o.P1)("zonesRoot", h),
				N = (0, o.P1)("zonesAccount", R);

			function b(z) {
				const J = c(z);
				return J ? J.created_on : null
			}

			function M(z, J, Ee) {
				const Se = b(z);
				if (!Se) return;
				const ke = m().duration(J, Ee),
					Ve = new Date(Se),
					Ye = new Date(new Date().getTime() - ke.asMilliseconds());
				return Ve.getTime() > Ye.getTime()
			}

			function T(z) {
				const J = c(z);
				return J ? J.status : null
			}

			function P(z) {
				const J = c(z);
				return J ? J.type : null
			}

			function L(z) {
				return z.plan_pending ? z.plan_pending : z.plan
			}

			function H(z) {
				const J = c(z);
				if (!J) return;
				const Ee = L(J);
				return Ee && Ee.legacy_id
			}

			function X(z, J) {
				const Ee = L(z);
				return !!Ee && i.Gs.indexOf(Ee.legacy_id) >= i.Gs.indexOf(J)
			}

			function ne(z) {
				return !!z && z.status === "initializing"
			}

			function ae(z) {
				return !!z && z.status === "pending"
			}

			function Y(z) {
				return !!z && z.status === "active"
			}

			function K(z, J) {
				if (!z) return !1;
				const Ee = L(z);
				return !!Ee && Ee.legacy_id === J
			}

			function me(z) {
				return K(z, "enterprise")
			}
			const q = z => me(c(z));

			function G(z) {
				return K(z, "business")
			}
			const V = z => G(c(z));

			function x(z) {
				return K(z, "pro")
			}

			function ee(z) {
				return K(z, "free")
			}
			const oe = z => ee(c(z));

			function j(z) {
				return !me(z)
			}

			function O(z) {
				return z && z.owner
			}

			function k(z, J) {
				const Ee = O(J);
				return !!Ee && Ee.type === "user" && Ee.id === z.id
			}

			function W(z) {
				const J = c(z);
				return !!J && J.type === "partial"
			}

			function se(z) {
				const J = c(z);
				return !!J && J.type === "secondary"
			}

			function de(z) {
				const J = c(z);
				return J && W(z) && J.host
			}
			const Ce = z => {
					var J;
					const Ee = c(z);
					return !!(Ee == null ? void 0 : Ee.host) && !!((J = Ee.plan) === null || J === void 0 ? void 0 : J.externally_managed)
				},
				be = z => {
					const J = v(z);
					return J && J.some(me)
				},
				we = (z, J) => {
					const Ee = c(z);
					return Ee && Ee.betas ? Ee.betas.includes(J) : !1
				},
				Be = (z, ...J) => p()(z, ["zoneFlags", "data", ...J]),
				We = (z, ...J) => p()(z, ["accountFlags", "data", ...J]),
				Ue = z => z.accountFlags.isRequesting,
				Ge = z => z.zoneFlags.isRequesting,
				Qe = (z, ...J) => p()(z, ["zoneFlagsChanges", "data", ...J]),
				Z = z => z.zoneFlagsChanges.isRequesting,
				ie = z => z.zoneFlags && z.zoneFlags.data,
				w = z => z.zoneFlags,
				te = (0, e.P1)(ie, w, (z, J) => ({
					data: z,
					meta: J
				})),
				he = (0, o.P1)("abuseUrls", z => z.overview.abuseUrls),
				ze = z => {
					const J = c(z);
					return J ? `/${J.account.id}/${J.name}` : null
				},
				Fe = z => z.zoneMarketingCampaigns,
				xe = z => z.overview.zoneBlocks.data,
				Ie = z => z.overview.zoneBlocks.isRequesting,
				Re = z => z.overview.zoneBlocks.hasData,
				Ne = z => {
					var J, Ee;
					return (z == null || (J = z.overview.zoneBlocks) === null || J === void 0 || (Ee = J.paginationData) === null || Ee === void 0 ? void 0 : Ee.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				Ke = z => z.overview.zoneBlocksReview.isRequesting,
				Xe = z => z.overview.zoneHold,
				Ze = (0, o.P1)("zoneHold", Xe)
		},
		"../react/common/utils/formatDate.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (o, a, p = !1) => (0, e.p6)(o, a, p)
		},
		"../react/common/utils/hasRole.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				n: function() {
					return o
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const o = (a, p) => {
				const {
					roles: u = []
				} = (0, e.uF)(a) || {};
				return p.some(m => u.includes(m))
			}
		},
		"../react/common/utils/isGuards.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Q$: function() {
					return a
				},
				t: function() {
					return m
				},
				v5: function() {
					return p
				},
				zE: function() {
					return u
				}
			});
			var e = t("../react/common/constants/index.ts"),
				o = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const a = i => i ? ["page", "per_page", "count", "total_count"].every(E => E in i && i[E]) : !1,
				p = (i = "") => e.Dy.includes(i.toLowerCase()),
				u = i => i !== null && typeof i == "object" && "name" in i && "size" in i && "type" in i && typeof i.slice == "function",
				m = i => (0, o.Z)(i)
		},
		"../react/common/utils/useQueryCache.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				o: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(i) {
				for (var d = 1; d < arguments.length; d++) {
					var E = arguments[d] != null ? Object(arguments[d]) : {},
						n = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(E).filter(function(r) {
						return Object.getOwnPropertyDescriptor(E, r).enumerable
					})), n.forEach(function(r) {
						a(i, r, E[r])
					})
				}
				return i
			}

			function a(i, d, E) {
				return d = p(d), d in i ? Object.defineProperty(i, d, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = E, i
			}

			function p(i) {
				var d = u(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(i, d) {
				if (typeof i != "object" || i === null) return i;
				var E = i[Symbol.toPrimitive];
				if (E !== void 0) {
					var n = E.call(i, d || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			const m = i => {
				const d = (0, e.useQueryClient)(),
					E = h => {
						var R;
						return d.getQueriesData((R = h) !== null && R !== void 0 ? R : i)
					},
					n = h => {
						var R;
						return d.getQueryData((R = h) !== null && R !== void 0 ? R : i)
					},
					r = h => {
						var R;
						return d.getQueriesData({
							queryKey: (R = h) !== null && R !== void 0 ? R : i,
							stale: !0
						})
					},
					s = (h, R) => {
						var v;
						d.setQueryData((v = R) !== null && v !== void 0 ? v : i, h)
					},
					l = async h => {
						var R;
						await d.refetchQueries((R = h) !== null && R !== void 0 ? R : i)
					}, c = async (h, R) => {
						var v, C;
						await d.invalidateQueries((v = h) !== null && v !== void 0 ? v : i, o({
							refetchActive: !1
						}, (C = R) !== null && C !== void 0 ? C : {}))
					}, f = async (h, R) => {
						const v = h || (C => {
							var N;
							return (C == null || (N = C.queryKey) === null || N === void 0 ? void 0 : N[0]) === i
						});
						await d.invalidateQueries(o({
							predicate: v,
							refetchActive: !1,
							refetchInactive: !1
						}, R))
					};
				return {
					refetch: l,
					cancelData: async () => {
						await d.cancelQueries(i)
					},
					invalidate: c,
					setData: s,
					getDataStale: r,
					getData: E,
					prefetchQuery: (h, R) => {
						var v;
						return d.prefetchQuery((v = R) !== null && v !== void 0 ? v : i, h)
					},
					getQueryData: n,
					predicateInvalidate: f,
					batchInvalidate: async ({
						queryKeysToInvalidate: h = [],
						queryKeysToPredicateInvalidate: R = [],
						refetchActive: v = !1,
						refetchInactive: C = !1
					}) => {
						const N = h.map(M => c(M)),
							b = R.map(M => f(T => {
								var P;
								return (T == null || (P = T.queryKey) === null || P === void 0 ? void 0 : P[0]) === M
							}, {
								refetchActive: v,
								refetchInactive: C
							}));
						await Promise.all([...N, ...b])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				K2: function() {
					return o
				},
				Lb: function() {
					return a
				},
				XI: function() {
					return p
				},
				bK: function() {
					return d
				},
				jk: function() {
					return i
				},
				wb: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = E => /^https?:\/\/(.*)/.test(E),
				a = E => e.default.hostname.test(E),
				p = E => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(E),
				u = E => /^[!-~]+$/.test(E),
				m = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				i = E => m.test(E),
				d = E => !!E && !!E.length && /^[ -~]+$/.test(E)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				DZ: function() {
					return p
				},
				GA: function() {
					return E
				},
				hT: function() {
					return m
				},
				p6: function() {
					return a
				},
				qc: function() {
					return u
				},
				w9: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e);
			const a = s => o().utc(s).format("YYYY-MM-DD"),
				p = s => o().utc(s).format(),
				u = s => o().utc(s).startOf("minute").format(),
				m = s => new Date(s),
				i = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				d = s => {
					const l = s / 60 / 60 / 1e3;
					return i[Object.keys(i).sort((c, f) => f - c).find(c => l >= c)]
				},
				E = (s, l = c => c.avg && c.avg.sampleInterval ? c.avg.sampleInterval : 1) => s.length === 0 ? 1 : s.reduce((c, f) => c + l(f), 0) / s.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = s => n[s]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Jz: function() {
					return E
				},
				OK: function() {
					return u
				},
				_Y: function() {
					return i
				},
				fD: function() {
					return r
				},
				h_: function() {
					return d
				},
				w6: function() {
					return s
				},
				yc: function() {
					return n
				}
			});

			function e(c) {
				for (var f = 1; f < arguments.length; f++) {
					var _ = arguments[f] != null ? Object(arguments[f]) : {},
						A = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(_).filter(function(S) {
						return Object.getOwnPropertyDescriptor(_, S).enumerable
					})), A.forEach(function(S) {
						o(c, S, _[S])
					})
				}
				return c
			}

			function o(c, f, _) {
				return f = a(f), f in c ? Object.defineProperty(c, f, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[f] = _, c
			}

			function a(c) {
				var f = p(c, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function p(c, f) {
				if (typeof c != "object" || c === null) return c;
				var _ = c[Symbol.toPrimitive];
				if (_ !== void 0) {
					var A = _.call(c, f || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(c)
			}
			let u = function(c) {
					return c.Sending = "sending", c.Success = "success", c.Failed = "failed", c.Latent = "latent", c
				}({}),
				m = function(c) {
					return c[c.Success = 200] = "Success", c[c.BadRequest = 400] = "BadRequest", c
				}({});
			const i = {
					status: u.Latent,
					statusCode: void 0
				},
				d = {
					status: u.Sending
				},
				E = {
					status: u.Success,
					statusCode: m.Success
				},
				n = {
					status: u.Failed,
					statusCode: m.BadRequest
				},
				r = {
					token: null,
					zone: null,
					isTokenValid: !1,
					user: null
				},
				s = {
					appsList: e({
						value: []
					}, i),
					installsList: e({
						value: []
					}, i),
					categoriesList: e({
						value: []
					}, i),
					recommendedAppsList: e({
						value: []
					}, i),
					metadata: e({
						value: null
					}, i),
					app: e({
						value: null
					}, i),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, i)
				},
				l = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Ux: function() {
					return r
				},
				cz: function() {
					return l
				},
				im: function() {
					return i
				},
				pG: function() {
					return s
				},
				t$: function() {
					return c
				}
			});
			var e = t("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(_) {
				for (var A = 1; A < arguments.length; A++) {
					var S = arguments[A] != null ? Object(arguments[A]) : {},
						h = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(S).filter(function(R) {
						return Object.getOwnPropertyDescriptor(S, R).enumerable
					})), h.forEach(function(R) {
						a(_, R, S[R])
					})
				}
				return _
			}

			function a(_, A, S) {
				return A = p(A), A in _ ? Object.defineProperty(_, A, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[A] = S, _
			}

			function p(_) {
				var A = u(_, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function u(_, A) {
				if (typeof _ != "object" || _ === null) return _;
				var S = _[Symbol.toPrimitive];
				if (S !== void 0) {
					var h = S.call(_, A || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(_)
			}
			const m = _ => _.test(window.location.hostname),
				i = () => m(e.j9),
				d = () => m(MARKETPLACE_LOCAL_URL_REGEXP),
				E = (_, A) => {
					const S = random(0, 1) ? -1 : 1;
					return _.points === A.points || _.points >= APP_POINTS_THRESHOLD && A.points >= APP_POINTS_THRESHOLD ? S : _.points < 0 || A.points < 0 || _.points >= APP_POINTS_THRESHOLD || A.points >= APP_POINTS_THRESHOLD ? A.points - _.points : S
				},
				n = (_, A, S) => {
					const h = get(A, S),
						R = get(_, S);
					return h && !isEqual(h, R)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (_, A) => A.map(S => _.find(h => h.id === S)),
						addAppVersionInfo: (_, A) => o({}, A, {
							currentVersion: A.versions.find(S => S.tag === _.versionTag),
							latestVersion: A.versions.find(S => S.tag === A.infoVersion)
						}),
						addCurrentSiteInstall: (_, A) => o({}, A, {
							currentSiteInstall: _.find(S => S.appId === A.id)
						})
					}
				},
				s = (_, A, S) => o({}, _, A, S ? {
					value: S
				} : {}),
				l = _ => _.map(A => A.status),
				c = _ => _.apps ? _.apps : _,
				f = _ => {
					let A = ["by-cloudflare"];
					return _.filter(S => !A.includes(S.id) && S.visible).sort((S, h) => S.points < h.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(F, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				categorySlugTranslationKey: function() {
					return u
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return p
				},
				translations: function() {
					return a
				}
			});
			var e = t("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: a,
				namespace: p
			} = (0, e.x)("marketplace", {
				markets_metadata_label_popular: "Just show me the most popular apps",
				markets_metadata_label_blog: "Improve my blog or portfolio",
				markets_metadata_label_store: "Supercharge my online store",
				markets_metadata_label_marketing: "Improve my marketing and lead generation",
				nav_bar_explore_apps: "Explore Apps",
				nav_bar_installed_apps: "Your Installed Apps",
				nav_bar_developed_apps: "Your Developed Apps",
				common_card_button_show_all: "Show All",
				app_card_untitled_app: "Untitled App",
				app_card_installed_flag: "Installed",
				developer_footer_card_title: "developers",
				developer_footer_card_header: "Ship your code to 13 million sites.",
				developer_footer_card_body: "With Cloudflare Apps, getting your tool or service onto millions of sites has never been easier. Any Cloudflare user can preview & install your code on their site in seconds.",
				developer_footer_learn_more: "Learn more \u203A",
				recommended_apps_personalize_save: "Save",
				recommended_apps_personalize_customize: "Customize",
				recommended_apps_card_error_loading: "There was a problem loading popular apps.",
				angular_app_iframe_content: "Could not load content",
				home_page_errored: "There was an error!",
				home_page_apps_search_label: "Search Apps",
				home_page_categories_filter_label: "Filter Apps",
				home_page_categories_filter_options_all: "All",
				home_page_categories_filter_options_popular: "Popular",
				category_card_popular_title: "Popular<0> apps\u203A</0>",
				category_card_popular_subtitle: "Our most popular and highly rated apps.",
				home_page_categories_filter_options_ui_and_design: "UI & Design",
				home_page_categories_filter_options_widgets_and_plugins: "Widgets & Plugins",
				home_page_categories_filter_options_security: "Security",
				home_page_categories_filter_options_performance: "Performance",
				home_page_categories_filter_options_insights: "Insights",
				home_page_categories_filter_options_social_and_communication: "Social & Communication",
				category_card_ui_and_design_title: "UI & Design<0> apps\u203A</0>",
				category_card_ui_and_design_subtitle: "Apps that make your website more beautiful and user friendly.",
				category_card_widgets_and_plugins_title: "Widgets & Plugins<0> apps\u203A</0>",
				category_card_widgets_and_plugins_subtitle: "Apps that add functionality and services to your website.",
				category_card_security_title: "Security<0> apps\u203A</0>",
				category_card_security_subtitle: "Apps which make your site safer and protect you from threats.",
				category_card_insights_title: "Insights<0> apps\u203A</0>",
				category_card_insights_subtitle: "Apps that provide insight into your visitors.",
				category_card_performance_title: "Performance<0> apps\u203A</0>",
				category_card_performance_subtitle: "Improve the speed or perceived responsiveness of your website.",
				category_card_social_and_communication_title: "Social & Communication<0> apps\u203A</0>",
				category_card_social_and_communication_subtitle: "Apps that make it easier to communicate with your customers.",
				home_page_categories_filter_options_powr: "POWR",
				home_page_categories_filter_options_grow_your_email_list: "Grow Your Email List",
				home_page_categories_filter_options_make_money_on_your_site: "Make Money On Your Site",
				home_page_categories_filter_options_recommended_for_all_sites: "Recommended for All Sites",
				home_page_categories_filter_options_performance_and_security: "Performance & Security",
				home_page_categories_filter_options_recommended_for_stores: "Recommended For Stores",
				home_page_categories_filter_options_by_cloudflare: "Cloudflare Labs",
				home_page_categories_filter_options_get_more_customers: "Get More Customers",
				home_page_categories_filter_options_getting_started_apps: "Getting Started",
				home_page_categories_filter_options_recommended_for_marketing_sites: "Recommended for Marketing Sites",
				home_page_categories_filter_options_add_on: "Add-ons",
				home_page_categories_filter_options_communication: "Communication",
				home_page_categories_filter_options_humor: "Humor",
				home_page_categories_filter_options_design: "Design & Polish",
				home_page_categories_filter_options_for_developers: "For Developers",
				home_page_categories_filter_options_recommended_for_blogs: "Recommended for Blogs",
				home_page_categories_filter_options_marketing: "Marketing",
				home_page_categories_filter_options_social_media: "Social Media",
				home_page_categories_filter_options_e_commerce: "E-Commerce",
				home_page_categories_filter_options_analytics: "Analytics",
				category_card_recommended_all_sites_subtitle: "These apps are recommended for all site types.",
				category_card_powr_title: "POWR<0> apps\u203A</0>",
				category_card_powr_subtitle: "Apps created by POWR",
				category_card_grow_your_email_list_title: "Grow Your Email List<0> \u203A</0>",
				category_card_grow_your_email_list_subtitle: "Apps to help you grow your email subscribers.",
				category_card_make_money_on_your_site_title: "Make Money On Your Site<0> \u203A</0>",
				category_card_make_money_on_your_site_subtitle: "Apps to help you make money from your website.",
				category_card_recommended_for_all_sites_title: "Recommended for All Sites<0> \u203A</0>",
				category_card_recommended_for_all_sites_subtitle: "Apps that are recommended for all sites.",
				category_card_performance_and_security_title: "Performance & Security<0> apps\u203A</0>",
				category_card_performance_and_security_subtitle: "Apps that make your website faster and more secure.",
				category_card_recommended_for_stores_title: "Recommended For Stores<0> \u203A</0>",
				category_card_recommended_for_stores_subtitle: "Apps for stores in the recommendation engine.",
				category_card_by_cloudflare_title: "Cloudflare Labs<0> apps\u203A</0>",
				category_card_by_cloudflare_subtitle: "Apps made by Cloudflare.",
				category_card_get_more_customers_title: "Get More Customers<0> \u203A</0>",
				category_card_get_more_customers_subtitle: "Apps to help you grow your customer base.",
				category_card_getting_started_apps_title: "Getting Started<0> apps\u203A</0>",
				category_card_recommended_for_marketing_sites_title: "Recommended for Marketing Sites<0> \u203A</0>",
				category_card_recommended_for_marketing_sites_subtitle: "Apps for marketing sites in the recommendation engine.",
				category_card_add_on_title: "Add-ons<0> \u203A</0>",
				category_card_add_on_subtitle: "Drop-in components to add to your website.",
				category_card_communication_title: "Communication<0> apps\u203A</0>",
				category_card_communication_subtitle: "Communicate with and provide support to your website visitors.",
				category_card_humor_title: "Humor<0> apps\u203A</0>",
				category_card_humor_subtitle: "Apps that add fun widgets and Easter eggs to your site.",
				category_card_design_title: "Design & Polish<0> apps\u203A</0>",
				category_card_design_subtitle: "Improve the look & feel and ease-of-use of your website.",
				category_card_for_developers_title: "For Developers<0> \u203A</0>",
				category_card_for_developers_subtitle: "Apps made for web developers and designers.",
				category_card_recommended_for_blogs_title: "Recommended for Blogs<0> \u203A</0>",
				category_card_recommended_for_blogs_subtitle: "Apps for blogs in the recommendation engine.",
				category_card_marketing_title: "Marketing<0> apps\u203A</0>",
				category_card_marketing_subtitle: "Promote content, collect email addresses, and increase engagement.",
				category_card_social_media_title: "Social Media<0> apps\u203A</0>",
				category_card_social_media_subtitle: "Integrate your website with Twitter, Facebook, and other networks.",
				category_card_e_commerce_title: "E-Commerce<0> apps\u203A</0>",
				category_card_e_commerce_subtitle: "Tools to help your online business.",
				category_card_analytics_title: "Analytics<0> apps\u203A</0>",
				category_card_analytics_subtitle: "Collect and analyze data from your site visitors.",
				app_edit_install: "Edit Install",
				app_uninstall: "Uninstall",
				app_installed: "Installed",
				app_cancel: "Cancel",
				app_retry: "Retry",
				app_info_about: "About",
				app_info_no_description: "This app has no description.",
				app_info_no_description_link: "This app has no description.  <0>Add one here</0>.",
				app_info_try_on_your_site: "Try it out on your site now!",
				app_info_preview: "Preview",
				app_info_header_preview: "Preview on your site",
				app_info_starting_price: "Starting at %{appStartingPrice}",
				app_info_install_free: "Install for FREE",
				app_info_details: "Details",
				app_info_rating: "Rating",
				app_info_feedback_rating_error: "There was an error with your rating. Please try again and <0>contact us</0> if the issue persists.",
				app_info_installed_version: "%{appInstalledVersion} on %{appInstalledDate}",
				app_info_developer: "Developer",
				app_info_support_contact: "Support Contact",
				app_info_category: "Category",
				app_info_categories: "Categories",
				app_info_elsewhere: "Elsewhere",
				app_info_external_link_website: "Website \u203A",
				app_info_external_link_tos: "Terms of Service \u203A",
				app_info_external_link_privacy: "Privacy Policy \u203A",
				app_info_external_link_source: "Source Code \u203A",
				developed_app_card_configure: "Configure",
				developed_app_card_metrics: "Metrics",
				developed_app_card_status_approved: "Approved",
				developed_app_card_status_hidden: "Hidden",
				developed_app_card_status_draft: "Draft",
				developed_app_card_status_pending: "Awaiting approval...",
				installed_app_card_installed_date: "Installed %{appCreatedRelativeTime}",
				installed_app_card_leave_feedback: "Leave Feedback",
				installed_app_card_visit_vendor_site: "Visit vendor site",
				installed_app_card_visit_vendor: "Visit %{title}",
				installed_app_card_external_link: "External Link",
				installed_app_card_upgrade_version: "Upgrade version",
				installed_app_card_update: "Update",
				installed_app_card_default_release_notes: "Bugfixes and stability improvements.",
				installed_apps_group_title_all: "Installed on all pages",
				installed_apps_group_title_page: "Installed on <0>%{page}</0>",
				installed_apps_group_title_page_and_other: "Installed on <0>%{page}</0> and 1 other location",
				installed_apps_group_title_page_and_others: "Installed on <0>%{page}</0> and %{length} other locations",
				uninstall_confirm_all_sites: "Are you sure you want to uninstall %{title} from all sites?",
				uninstall_confirm_sites: "Are you sure you want to uninstall %{title} from the following sites and pages?",
				uninstall_error: "There was an error removing the app. Please try again later or <0>contact us</0> for assistance.",
				page_loading_error: "There was an error loading the page.",
				developed_apps_installed_toast: "Your developed apps can be fully installed and tested on any site managed by your Cloudflare account.",
				developed_apps_no_apps: "No apps were found.",
				developed_apps_create_app: "Create an App",
				developed_apps_banner_title: "Developers",
				developed_apps_banner_body: "To configure, manage, and monitor your developed apps, go to the Developer Dashboard.",
				developed_apps_banner_dashboard: "Developer Dashboard",
				installed_apps_heading: "Apps",
				installed_apps_update_toast: "You have 1 app with pending updates.",
				installed_apps_updates_toast: "You have %{length} apps with pending updates.",
				installed_apps_no_apps_installed_section: "No apps installed on <0>%{section}</0>.",
				installed_apps_no_apps_insatlled_site: "You haven't installed any apps on your site yet."
			});

			function u(m) {
				const i = m.replace(/-/g, "_");
				return Object.keys(o).includes(i) ? i : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				L: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/url-join/lib/url-join.js"),
				o = t.n(e),
				a = t("../../../../node_modules/lodash-es/defaults.js"),
				p = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function u(l) {
				for (var c = 1; c < arguments.length; c++) {
					var f = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(f).filter(function(A) {
						return Object.getOwnPropertyDescriptor(f, A).enumerable
					})), _.forEach(function(A) {
						d(l, A, f[A])
					})
				}
				return l
			}

			function m(l, c) {
				if (l == null) return {};
				var f = i(l, c),
					_, A;
				if (Object.getOwnPropertySymbols) {
					var S = Object.getOwnPropertySymbols(l);
					for (A = 0; A < S.length; A++) _ = S[A], !(c.indexOf(_) >= 0) && (!Object.prototype.propertyIsEnumerable.call(l, _) || (f[_] = l[_]))
				}
				return f
			}

			function i(l, c) {
				if (l == null) return {};
				var f = {},
					_ = Object.keys(l),
					A, S;
				for (S = 0; S < _.length; S++) A = _[S], !(c.indexOf(A) >= 0) && (f[A] = l[A]);
				return f
			}

			function d(l, c, f) {
				return c = E(c), c in l ? Object.defineProperty(l, c, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[c] = f, l
			}

			function E(l) {
				var c = n(l, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function n(l, c) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var _ = f.call(l, c || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(l)
			}
			class r {
				constructor(c) {
					d(this, "token", void 0), d(this, "options", void 0), d(this, "setAuthHeader", f => {
						this.token = f
					}), this.token = "", this.options = (0, a.Z)(c, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(c = "GET", f, _ = {}) {
					const {
						body: A
					} = _, S = m(_, ["body"]);
					return fetch(o()(this.options.baseUrl, f), u({
						method: c
					}, S, A ? {
						body: JSON.stringify(A)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(u({
							Accept: "application/json, text/plain, */*"
						}, _.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(c, f = {}) {
					const _ = await this.request("GET", c, f);
					return this.parseJSONResponse(_)
				}
				async postJSON(c, f = {}) {
					const _ = await this.request("POST", c, u({}, f, {
						headers: u({}, f.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(_)
				}
				parseJSONResponse(c) {
					return c.json()
				}
			}
			d(r, "defaults", {
				baseUrl: (0, p.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const s = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				JX: function() {
					return E
				},
				Jb: function() {
					return r
				},
				RX: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/lodash-es/upperFirst.js"),
				o = t("../../../../node_modules/lodash-es/isEmpty.js"),
				a = t("../../../../node_modules/query-string/query-string.js"),
				p = t.n(a),
				u = t("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				m = t("../react/pages/apps/marketplace/requests/Requester.ts"),
				i = t("../react/pages/apps/marketplace/libraries/resource.ts");

			function* d(c, f, _, A) {
				const S = (0, e.Z)(f),
					[h, R, v] = [`get${S}Sending`, `get${S}Success`, `get${S}Failed`];
				try {
					yield(0, u.gz)(c[h]());
					const C = yield(0, u.RE)(s, _);
					let N = C;
					if (N.error) {
						yield(0, u.gz)(c[v]());
						return
					}
					return A && (N = yield A(C)), yield(0, u.gz)(c[R](N)), N
				} catch {
					yield(0, u.gz)(c[v]())
				}
			}

			function* E(c, f, _, A) {
				const S = (0, e.Z)(f),
					h = `get${S}Sending`,
					R = `get${S}Success`,
					v = `get${S}Failed`;
				try {
					yield(0, u.gz)(c[h]());
					const C = yield(0, u.RE)(l, {
						url: _,
						data: A
					});
					return yield(0, u.gz)(c[R](C)), C
				} catch {
					yield(0, u.gz)(c[v]())
				}
			}
			const n = c => (0, o.Z)(c) ? "" : `?${a.stringify(c)}`,
				r = {
					app: new i.c({
						name: "app",
						url: (c, f) => `apps/${c}${n(f)}`
					}),
					apps: new i.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new i.c({
							name: "installs",
							url: c => `sites/${c}/installs`
						}),
						delete: new i.c({
							name: "installs",
							url: c => `installs/${c}`
						})
					},
					categories: new i.c({
						name: "categories",
						url: (c = {}) => "categories" + n(c)
					}),
					metadata: {
						get: new i.c({
							name: "metadata",
							url: c => `sites/${c}/metadata`
						}),
						post: new i.c({
							name: "metadata",
							url: c => `sites/${c}/metadata`
						})
					},
					ratings: {
						default: new i.c({
							name: "ratings",
							url: (c = {}) => "ratings" + n(c)
						}),
						delete: new i.c({
							name: "ratings",
							url: c => `ratings/${c}`
						})
					},
					recommendedApps: new i.c({
						name: "recommendedApps",
						url: (c = {}) => "apps/recommend" + n(c)
					}),
					developedApps: new i.c({
						name: "developedApps",
						url: c => `user/${c}/apps`
					})
				},
				s = async c => m.L.fetchJSON(c), l = async c => {
					const {
						url: f,
						data: _
					} = c;
					return m.L.postJSON(f, {
						body: _
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Nw: function() {
					return d
				},
				U4: function() {
					return i
				},
				XO: function() {
					return m
				},
				ZP: function() {
					return E
				}
			});
			var e = t("../react/pages/apps/marketplace/config/initialState.ts");

			function o(n) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(s).filter(function(c) {
						return Object.getOwnPropertyDescriptor(s, c).enumerable
					})), l.forEach(function(c) {
						a(n, c, s[c])
					})
				}
				return n
			}

			function a(n, r, s) {
				return r = p(r), r in n ? Object.defineProperty(n, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = s, n
			}

			function p(n) {
				var r = u(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function u(n, r) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var l = s.call(n, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let m = function(n) {
					return n.SetCurrentUser = "user.set", n
				}({}),
				i = function(n) {
					return n.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", n.SetZone = "MARKETPLACE/AUTH/SET_ZONE", n.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", n.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", n.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", n.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", n.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", n.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", n.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", n.ResetState = "MARKETPLACE/AUTH/RESET_STATE", n
				}({});
			const d = {
				resetState: () => ({
					type: i.ResetState
				}),
				initSaga: n => ({
					type: i.InitSaga,
					zoneId: n
				}),
				setZone: n => ({
					type: i.SetZone,
					zone: n
				}),
				setToken: n => ({
					type: i.SetToken,
					token: n
				}),
				clearToken: () => ({
					type: i.ClearToken
				}),
				setTokenValid: n => ({
					type: i.SetTokenValid,
					isTokenValid: n
				}),
				getCurrentUserSaga: () => ({
					type: i.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: i.CurrentUserSending
				}),
				getCurrentUserSuccess: n => ({
					type: i.CurrentUserSuccess,
					user: n
				}),
				getCurrentUserFailed: () => ({
					type: i.CurrentUserFailed
				})
			};

			function E(n = e.fD, r) {
				switch (r.type) {
					case i.ResetState:
						return o({}, e.fD);
					case i.CurrentUserSending:
						return o({}, n);
					case i.CurrentUserSuccess:
						const {
							user: s
						} = r;
						return o({}, n, {
							user: s
						});
					case i.CurrentUserFailed:
						return o({}, n);
					case i.SetZone:
						const {
							zone: l
						} = r;
						return o({}, n, {
							zone: l
						});
					case i.SetToken:
						const {
							token: c
						} = r;
						return o({}, n, {
							token: c
						});
					case i.ClearToken:
						return o({}, n, {
							token: null
						});
					case i.SetTokenValid:
						const {
							isTokenValid: f
						} = r;
						return o({}, n, {
							isTokenValid: f
						});
					default:
						return n
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Nw: function() {
					return E
				},
				U4: function() {
					return d
				},
				ZP: function() {
					return n
				},
				dg: function() {
					return i
				}
			});
			var e = t("../react/pages/apps/marketplace/config/initialState.ts"),
				o = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function a(r) {
				for (var s = 1; s < arguments.length; s++) {
					var l = arguments[s] != null ? Object(arguments[s]) : {},
						c = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), c.forEach(function(f) {
						p(r, f, l[f])
					})
				}
				return r
			}

			function p(r, s, l) {
				return s = u(s), s in r ? Object.defineProperty(r, s, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = l, r
			}

			function u(r) {
				var s = m(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function m(r, s) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var c = l.call(r, s || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			let i = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				d = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const E = {
				resetState: () => ({
					type: d.ResetState
				}),
				zoneChangedSaga: () => ({
					type: d.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, s) => ({
					type: d.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: s
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: d.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, s) => ({
					type: d.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: s
				}),
				getDevelopedAppsSending: () => ({
					type: d.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: r => ({
					type: d.GetDevelopedAppsSuccess,
					developedApps: r
				}),
				getDevelopedAppsFailed: () => ({
					type: d.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (r, s, l) => ({
					type: d.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: s,
					version: l
				}),
				setUpdatableInstalls: r => ({
					type: d.SetUpdatableInstalls,
					updatableInstallsList: r
				}),
				getAppSaga: r => ({
					type: d.GetAppSaga,
					appIdentifier: r
				}),
				getAppSending: () => ({
					type: d.GetAppSending
				}),
				getAppSuccess: r => ({
					type: d.GetAppSuccess,
					app: r
				}),
				getAppFailed: () => ({
					type: d.GetAppFailed
				}),
				clearApp: () => ({
					type: d.ClearApp
				}),
				getAppsSaga: () => ({
					type: d.GetAppsSaga
				}),
				getAppsSending: () => ({
					type: d.GetAppsSending
				}),
				getAppsSuccess: r => ({
					type: d.GetAppsSuccess,
					appsList: r
				}),
				getAppsFailed: () => ({
					type: d.GetAppsFailed
				}),
				getInstallsSaga: r => ({
					type: d.GetInstallsSaga,
					zoneId: r
				}),
				getInstallsSending: () => ({
					type: d.GetInstallsSending
				}),
				getInstallsSuccess: r => ({
					type: d.GetInstallsSuccess,
					installsList: r
				}),
				getInstallsFailed: () => ({
					type: d.GetInstallsFailed
				}),
				getCategoriesSaga: r => ({
					type: d.GetCategoriesSaga,
					queryParams: r
				}),
				getCategoriesSending: () => ({
					type: d.GetCategoriesSending
				}),
				getCategoriesSuccess: r => ({
					type: d.GetCategoriesSuccess,
					categoriesList: r
				}),
				getCategoriesFailed: () => ({
					type: d.GetCategoriesFailed
				}),
				getMetadataSaga: r => ({
					type: d.GetMetadataSaga,
					zoneId: r
				}),
				getMetadataSending: () => ({
					type: d.GetMetadataSending
				}),
				getMetadataSuccess: r => ({
					type: d.GetMetadataSuccess,
					metadata: r
				}),
				getMetadataFailed: () => ({
					type: d.GetMetadataFailed
				}),
				postMetadataSaga: (r, s) => ({
					type: d.PostMetadataSaga,
					zoneId: r,
					data: s
				}),
				postMetadataSending: () => ({
					type: d.PostMetadataSending
				}),
				postMetadataSuccess: r => ({
					type: d.PostMetadataSuccess,
					metadata: r
				}),
				postMetadataFailed: () => ({
					type: d.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (r, s, l) => ({
					type: d.GetRecommendedAppsSaga,
					appsList: r,
					installsList: s,
					metadata: l
				}),
				getRecommendedAppsSending: () => ({
					type: d.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: r => ({
					type: d.GetRecommendedAppsSuccess,
					recommendedAppsList: r
				}),
				getRecommendedAppsFailed: () => ({
					type: d.GetRecommendedAppsFailed
				})
			};

			function n(r = e.w6, s) {
				switch (s.type) {
					case d.ResetState:
						return a({}, e.w6);
					case d.ZoneChangedSaga:
						return a({}, r, {
							installsList: a({}, e.w6.installsList),
							recommendedAppsList: a({}, e.w6.recommendedAppsList),
							metadata: a({}, e.w6.metadata)
						});
					case d.GetAppsSending:
						return a({}, r, {
							appsList: a({}, (0, o.pG)(r.appsList, e.h_))
						});
					case d.GetAppsSuccess:
						return a({}, r, {
							appsList: a({}, (0, o.pG)(r.appsList, e.Jz, s.appsList))
						});
					case d.GetAppsFailed:
						return a({}, r, {
							appsList: a({}, (0, o.pG)(r.appsList, e.yc))
						});
					case d.GetInstallsSending:
						return a({}, r, {
							installsList: a({}, (0, o.pG)(r.installsList, e.h_))
						});
					case d.GetInstallsSuccess:
						return a({}, r, {
							installsList: a({}, (0, o.pG)(r.installsList, e.Jz, s.installsList))
						});
					case d.GetInstallsFailed:
						return a({}, r, {
							installsList: a({}, (0, o.pG)(r.installsList, e.yc))
						});
					case d.GetCategoriesSending:
						return a({}, r, {
							categoriesList: a({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case d.GetCategoriesSuccess:
						return a({}, r, {
							categoriesList: a({}, (0, o.pG)(r.categoriesList, e.Jz, s.categoriesList))
						});
					case d.GetCategoriesFailed:
						return a({}, r, {
							categoriesList: a({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case d.GetMetadataSending:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.h_))
						});
					case d.GetMetadataSuccess:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.Jz, s.metadata))
						});
					case d.GetMetadataFailed:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.yc))
						});
					case d.PostMetadataSending:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.h_))
						});
					case d.PostMetadataSuccess:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.Jz, s.metadata))
						});
					case d.PostMetadataFailed:
						return a({}, r, {
							metadata: a({}, (0, o.pG)(r.metadata, e.yc))
						});
					case d.GetRecommendedAppsSending:
						return a({}, r, {
							recommendedAppsList: a({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case d.GetRecommendedAppsSuccess:
						return a({}, r, {
							recommendedAppsList: a({}, (0, o.pG)(r.recommendedAppsList, e.Jz, s.recommendedAppsList))
						});
					case d.GetRecommendedAppsFailed:
						return a({}, r, {
							recommendedAppsList: a({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case d.GetAppSending:
						return a({}, r, {
							app: a({}, (0, o.pG)(r.app, e.h_))
						});
					case d.GetAppSuccess:
						return a({}, r, {
							app: a({}, (0, o.pG)(r.app, e.Jz, s.app))
						});
					case d.GetAppFailed:
						return a({}, r, {
							app: a({}, (0, o.pG)(r.app, e.yc))
						});
					case d.ClearApp:
						return a({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case d.SetUpdatableInstalls:
						return a({}, r, {
							updatableInstallsList: s.updatableInstallsList
						});
					case d.GetDevelopedAppsSending:
						return a({}, r, {
							developedApps: a({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case d.GetDevelopedAppsSuccess:
						return a({}, r, {
							developedApps: a({}, (0, o.pG)(r.developedApps, e.Jz, s.developedApps))
						});
					case d.GetDevelopedAppsFailed:
						return a({}, r, {
							developedApps: a({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/d1/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
		"../react/pages/dns/dns-records/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
		"../react/pages/email/types.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
			let e = function(u) {
				return u.ROOT = "root", u.DSTADDRS_CARD = "dstaddrs_card", u.RULES_CARD = "rules_card", u.CATCHALL_CARD = "catchall_card", u.SETTINGS_PAGE = "settings_page", u.WORKERS_PAGE = "workers_page", u
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
			let a = function(u) {
				return u[u.Verified = 0] = "Verified", u[u.Pending = 1] = "Pending", u[u.Missing = 2] = "Missing", u[u.WorkerNotFound = 3] = "WorkerNotFound", u[u.Unknown = 4] = "Unknown", u[u.Loading = 5] = "Loading", u
			}({});
			const p = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/config.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				jk: function() {
					return A
				},
				w8: function() {
					return S
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				p = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function u(h) {
				for (var R = 1; R < arguments.length; R++) {
					var v = arguments[R] != null ? Object(arguments[R]) : {},
						C = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(v).filter(function(N) {
						return Object.getOwnPropertyDescriptor(v, N).enumerable
					})), C.forEach(function(N) {
						m(h, N, v[N])
					})
				}
				return h
			}

			function m(h, R, v) {
				return R = i(R), R in h ? Object.defineProperty(h, R, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[R] = v, h
			}

			function i(h) {
				var R = d(h, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function d(h, R) {
				if (typeof h != "object" || h === null) return h;
				var v = h[Symbol.toPrimitive];
				if (v !== void 0) {
					var C = v.call(h, R || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(h)
			}
			const E = "Notifications",
				n = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${r}/notifications`,
				l = (0, e.BC)`${s}/destinations`,
				c = (0, e.BC)`${s}/create`,
				f = (0, e.BC)`${c}/${"alertType"}`,
				_ = (0, e.BC)`${s}/edit/${"alertId"}`,
				A = u({
					account: r,
					alerts: s,
					destinations: l,
					createAlert: c,
					createAlertWithSelection: f,
					editAlert: _
				}, o._j, a._j),
				S = u({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, p.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				_j: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				a = (0, e.BC)`${o}/pagerduty/connect`,
				p = (0, e.BC)`${o}/pagerduty/register`,
				u = (0, e.BC)`${o}/pagerduty`,
				m = {
					pagerDutyConnect: a,
					pagerDutyRegister: p,
					pagerDutyList: u
				};
			var i = null
		},
		"../react/pages/home/alerts/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AA: function() {
					return de
				},
				AN: function() {
					return pe
				},
				AY: function() {
					return fe
				},
				Ac: function() {
					return st
				},
				Am: function() {
					return S
				},
				B2: function() {
					return x
				},
				BB: function() {
					return T
				},
				BF: function() {
					return Ve
				},
				BQ: function() {
					return ve
				},
				E8: function() {
					return B
				},
				Fl: function() {
					return Me
				},
				Fu: function() {
					return H
				},
				Gc: function() {
					return qe
				},
				Hc: function() {
					return zt
				},
				IO: function() {
					return Ae
				},
				JK: function() {
					return he
				},
				K: function() {
					return N
				},
				LI: function() {
					return ce
				},
				LX: function() {
					return Se
				},
				L_: function() {
					return Ie
				},
				Ly: function() {
					return $t
				},
				MR: function() {
					return oe
				},
				Mj: function() {
					return O
				},
				NB: function() {
					return at
				},
				Oe: function() {
					return At
				},
				Or: function() {
					return W
				},
				P5: function() {
					return jt
				},
				PE: function() {
					return Qe
				},
				Pd: function() {
					return kt
				},
				Pk: function() {
					return ie
				},
				Pp: function() {
					return Ke
				},
				Q1: function() {
					return L
				},
				Qr: function() {
					return ke
				},
				Qv: function() {
					return Z
				},
				Rp: function() {
					return rt
				},
				S7: function() {
					return bt
				},
				Sh: function() {
					return He
				},
				Sl: function() {
					return Kt
				},
				TZ: function() {
					return se
				},
				Tg: function() {
					return ze
				},
				Tp: function() {
					return Te
				},
				Uy: function() {
					return Tt
				},
				Vw: function() {
					return ne
				},
				W3: function() {
					return z
				},
				WR: function() {
					return le
				},
				WX: function() {
					return Be
				},
				XF: function() {
					return ye
				},
				Xb: function() {
					return Ce
				},
				ZB: function() {
					return P
				},
				Zs: function() {
					return xe
				},
				_f: function() {
					return Ye
				},
				_k: function() {
					return je
				},
				b4: function() {
					return we
				},
				bc: function() {
					return Xt
				},
				c2: function() {
					return ee
				},
				cE: function() {
					return ft
				},
				dh: function() {
					return Ne
				},
				fE: function() {
					return Re
				},
				g7: function() {
					return Ge
				},
				hO: function() {
					return Ze
				},
				hV: function() {
					return Wt
				},
				hk: function() {
					return h
				},
				hr: function() {
					return be
				},
				it: function() {
					return Xe
				},
				j3: function() {
					return Gt
				},
				jN: function() {
					return te
				},
				jo: function() {
					return Vt
				},
				k3: function() {
					return Ht
				},
				m8: function() {
					return q
				},
				nm: function() {
					return tt
				},
				oW: function() {
					return re
				},
				pH: function() {
					return G
				},
				pi: function() {
					return me
				},
				r4: function() {
					return Yt
				},
				rI: function() {
					return j
				},
				s7: function() {
					return dt
				},
				sO: function() {
					return it
				},
				sg: function() {
					return Je
				},
				tB: function() {
					return _
				},
				tN: function() {
					return Ue
				},
				u_: function() {
					return Zt
				},
				vV: function() {
					return lt
				},
				vc: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				a = t("../../../../node_modules/moment/moment.js"),
				p = t.n(a),
				u = t("../../../common/util/types/src/api/domain.ts"),
				m = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				i = t("../react/utils/translator.tsx"),
				d = t("../react/utils/url.ts"),
				E = t("../react/pages/home/domain-registration/config.ts"),
				n = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = t("../react/pages/home/domain-registration/types.ts");

			function s(g) {
				for (var I = 1; I < arguments.length; I++) {
					var ge = arguments[I] != null ? Object(arguments[I]) : {},
						Oe = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && Oe.push.apply(Oe, Object.getOwnPropertySymbols(ge).filter(function($e) {
						return Object.getOwnPropertyDescriptor(ge, $e).enumerable
					})), Oe.forEach(function($e) {
						l(g, $e, ge[$e])
					})
				}
				return g
			}

			function l(g, I, ge) {
				return I = c(I), I in g ? Object.defineProperty(g, I, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[I] = ge, g
			}

			function c(g) {
				var I = f(g, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function f(g, I) {
				if (typeof g != "object" || g === null) return g;
				var ge = g[Symbol.toPrimitive];
				if (ge !== void 0) {
					var Oe = ge.call(g, I || "default");
					if (typeof Oe != "object") return Oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(g)
			}

			function _(g) {
				return g.filter(I => I.isSelected).reduce((I, {
					name: ge,
					fees: Oe,
					isZoneEntitlementPresent: $e
				}) => $e || !(0, e.isNumber)(Oe == null ? void 0 : Oe.transfer_fee) ? I : st(ge) ? I + (Oe == null ? void 0 : Oe.transfer_fee) * 2 : I + (Oe == null ? void 0 : Oe.transfer_fee), 0)
			}

			function A(g) {
				return g.filter(I => I.registrar.toLowerCase() === "godaddy")
			}
			const S = "MMM D, YYYY";

			function h(g, I, ge, Oe) {
				var $e, pt, yt, Ct, Ot, It, Pt, St, Lt, Dt, wt, Mt;
				const nt = g[I.name],
					Jt = () => st(I.name) ? p()(I.expires_at).add(2, "years").format(S) : p()(I.expires_at).add(1, "year").format(S);
				return s({
					name: I.name,
					zone: nt,
					entitlements: ge,
					registryCheck: Oe,
					nameservers: I.name_servers,
					isAvailable: I.available,
					lastKnownStatus: I.last_known_status,
					authCode: I.auth_code,
					isEnterpriseZone: (nt == null || ($e = nt.plan) === null || $e === void 0 ? void 0 : $e.legacy_id) === "enterprise",
					isActiveZone: (nt == null ? void 0 : nt.status) === "active",
					corResponsesPending: I.cor_responses_pending,
					isCorLocked: I.cor_locked,
					corLockedUntil: I.cor_locked_until ? p()(I.cor_locked_until).format(S) : null,
					isFullZone: (nt == null ? void 0 : nt.type) == r.xd.Full,
					isLocked: I.locked,
					registrar: I.current_registrar || E.JM,
					zoneId: nt == null ? void 0 : nt.id,
					currentExpiration: p()(I.expires_at).format(S),
					newExpiration: Jt(),
					lastEntitledAt: I.last_entitled_at ? new Date(I.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ge) && !!ge.find(Ut => Ut.id === E.g5 && Ut.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: I.transfer_in && C(I.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: I.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: I.transfer_in,
					transferOut: I.transfer_out,
					autoRenew: I.auto_renew === !0,
					lastTransferredAt: I.last_transferred_at,
					createdAt: I.created_at,
					paymentExpiresAt: p()(I.payment_expires_at).isValid() ? p()(I.payment_expires_at) : p()(I.expires_at).isValid() ? p()(I.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (pt = I.contacts) === null || pt === void 0 || (yt = pt.administrator) === null || yt === void 0 ? void 0 : yt.id,
						[r.l2.Billing]: (Ct = I.contacts) === null || Ct === void 0 || (Ot = Ct.billing) === null || Ot === void 0 ? void 0 : Ot.id,
						[r.l2.Registrant]: (It = I.contacts) === null || It === void 0 || (Pt = It.registrant) === null || Pt === void 0 ? void 0 : Pt.id,
						[r.l2.Technical]: (St = I.contacts) === null || St === void 0 || (Lt = St.technical) === null || Lt === void 0 ? void 0 : Lt.id
					},
					landing: I.landing,
					privacy: I.privacy,
					whois: I.whois,
					emailVerified: I.email_verified,
					materialChanges: b(I.material_changes),
					corChanges: I.cor_changes ? T(Object.assign(s({}, v), I.cor_changes)) : {},
					registryStatuses: I.registry_statuses ? I.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Dt = I.domain_protection_services) === null || Dt === void 0 ? void 0 : Dt.status
					},
					deletion: {
						isDeletable: I == null || (wt = I.deletion) === null || wt === void 0 ? void 0 : wt.is_deletable
					},
					premiumType: I == null ? void 0 : I.premium_type,
					fees: I == null ? void 0 : I.fees
				}, I.domain_move && {
					domainMove: {
						ineligibilityReasons: (Mt = I.domain_move) === null || Mt === void 0 ? void 0 : Mt.ineligibility_reasons
					}
				}, I.actionable_metadata && {
					actionableMetadata: R(I.actionable_metadata)
				}, I.policies && {
					policies: s({}, I.policies.suspension && {
						suspension: {
							parked: I.policies.suspension.parked,
							parkingReason: I.policies.suspension.parking_reason,
							paymentExpired: I.policies.suspension.payment_expired
						}
					})
				})
			}

			function R(g) {
				return g.map(I => ({
					accountContext: I.account_context,
					createdAt: I.created_at,
					expiresAt: I.expires_at,
					sentAt: I.sent_at,
					status: I.status,
					type: I.type
				}))
			}
			const v = {
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

			function C(g) {
				switch (g.enter_auth_code) {
					case r.lW.OK:
						return r.BJ.Valid;
					case r.lW.NEEDED:
						return r.BJ.Pending;
					case r.lW.UNKNOWN:
						return r.BJ.Pending;
					case r.lW.REJECTED:
						return r.BJ.Error;
					case r.lW.TRYING:
						return r.BJ.Pending
				}
				return r.BJ.Pending
			}

			function N(g) {
				let I = g.extensions;
				(I == null ? void 0 : I.application_purpose) && (I == null ? void 0 : I.nexus_category) && (g.extensions = {
					nexusCategory: I.nexus_category,
					applicationPurpose: I.application_purpose
				});
				let ge = s({}, typeof g.id == "string" ? {
					id: g.id
				} : {}, {
					first_name: g.firstName,
					organization: g.organization,
					address: g.address1,
					city: g.city,
					state: g.state || "N/A",
					zip: g.zip,
					country: g.country,
					phone: g.phone,
					email: g.email,
					fax: "",
					last_name: g.lastName,
					address2: g.address2,
					email_verified: g.emailVerified
				}, g.extensions ? {
					extensions: {
						nexus_category: g.extensions.nexusCategory,
						application_purpose: g.extensions.applicationPurpose
					}
				} : {});
				return Fe(ge)
			}

			function b(g) {
				let I = [];
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
				for (const Oe in g) {
					const $e = g[Oe],
						pt = ge[$e];
					I.push(pt)
				}
				return I
			}
			const M = g => {
				if (!g) return null;
				let I = g;
				return g.includes("C31") && (I = "C31"), g.includes("C32") && (I = "C32"), I
			};

			function T(g) {
				return s({}, typeof g.id == "string" ? {
					id: g.id
				} : {}, {
					firstName: g.first_name,
					organization: g.organization,
					address1: g.address,
					city: g.city,
					state: g.state,
					zip: g.zip,
					country: g.country,
					phone: g.phone.trim(),
					email: g.email.trim(),
					lastName: g.last_name,
					address2: g.address2,
					emailVerified: g.email_verified
				}, g.extensions ? {
					extensions: {
						nexusCategory: M(g.extensions.nexus_category),
						applicationPurpose: g.extensions.application_purpose
					}
				} : {})
			}

			function P(g = {}) {
				const I = {
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
						}, g.zone && g.zone.plan || {}),
						type: r.xd.Full
					}, g.zone || {}),
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
					autoTransferStatus: r._n.Pending,
					transferAuthCode: "",
					authCodeStatus: r.BJ.Pending,
					transferApiCallStatus: r.Yh.Pending,
					transferConditions: s({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, g.transferConditions || {}),
					transferIn: s({
						unlock_domain: r.lW.UNKNOWN,
						disable_privacy: r.lW.UNKNOWN,
						enter_auth_code: r.lW.UNKNOWN,
						approve_transfer: r.lW.UNKNOWN,
						accept_foa: r.lW.UNKNOWN,
						can_cancel_transfer: !1
					}, g.transferIn || {}),
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
					premiumType: r.Vs.Not_Premium,
					fees: null,
					policies: {
						suspension: {
							parked: !1,
							parkingReason: null,
							paymentExpired: !1
						}
					}
				};
				return Object.assign(I, g)
			}

			function L(g = {}) {
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
				}, g)
			}

			function H(g) {
				const I = E.Py.concat(E.ui).reduce((ge, Oe) => s({}, ge, {
					[Oe]: []
				}), {});
				return g.forEach(ge => {
					let Oe = X(ge.registrar);
					Oe in I || (Oe = E.ui), Je(ge.name) && (Oe = "uk"), I[Oe].push(ge)
				}), Object.keys(I).sort((ge, Oe) => ge.localeCompare(Oe)).map(ge => ({
					registrar: ge,
					domains: I[ge]
				})).filter(ge => ge.domains.length > 0)
			}

			function X(g) {
				return g == null ? void 0 : g.toLowerCase().replace(/\s|,|\./g, "")
			}

			function ne(g) {
				if (!g || !g.registrar) return "unknown";
				if (Je(g.name)) return "uk";
				const I = X(g.registrar);
				return I in E.gM ? I : "unknown"
			}
			const ae = [];

			function Y(g) {
				return ae.some(I => g.endsWith("." + I))
			}

			function K(g) {
				return !g.isEnterpriseZone || !Array.isArray(g.entitlements) ? !1 : !!g.entitlements.find(({
					id: I,
					allocation: ge
				}) => I === E.g5 && ge.value === !0)
			}

			function me(g) {
				var I;
				const ge = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let Oe = !1,
					$e = null;
				return (I = g.registryStatuses) === null || I === void 0 || I.some(pt => {
					ge.includes(pt) && ($e = pt, Oe = !0)
				}), [Oe, $e]
			}

			function q(g, I = !1) {
				if (!g) return [!1, n.keys.cannot_transfer_default];
				if (g.zone.status !== "active") return [!1, n.keys.cannot_transfer_zone_not_active];
				if (!g.isFullZone && !K(g)) return [!1, n.keys.cannot_transfer_zone_not_eligible];
				if (g.registrar === "Cloudflare") return [!1, n.keys.cannot_transfer_domain_on_cf];
				if (g.isAvailable) return [!1, n.keys.cannot_transfer_domain_available];
				if (!g.transferConditions) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (!I && Tt(g == null ? void 0 : g.premiumType)) return [!1, n.keys.cannot_transfer_domain_premium];
				if (G(g)) return [!1, n.keys.cannot_transfer_domain_transfer_in_progress];
				let ge;
				for (ge in g.transferConditions)
					if (ge !== "not_premium" && !g.transferConditions[ge]) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (Y(g.name)) return [!1, n.keys.cannot_transfer_domain_tld_not_supported];
				const [Oe, $e] = me(g);
				return Oe && $e ? [!1, n.keys.cannot_transfer_domain_registry_status[$e]] : [!0, ""]
			}

			function G(g) {
				var I, ge;
				return !!g.transferIn && !((I = g.transferConditions) === null || I === void 0 ? void 0 : I.not_started) && !!(Je(g.name) || ((ge = g.registryStatuses) === null || ge === void 0 ? void 0 : ge.includes(r.rj.PENDING_TRANSFER)))
			}

			function V(g) {
				return !!g.registrar && !!g.currentExpiration
			}

			function x(g, I = !1) {
				const [ge] = q(g, I);
				return V(g) ? We(g) ? r.M5.InProgressOrOnCF : ge ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function ee(g) {
				return g.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(g.transferIn.enter_auth_code) || !1
			}

			function oe(g) {
				return g.registrar === "Cloudflare"
			}

			function j(g) {
				return !!(g == null ? void 0 : g.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function O(g) {
				return !!(g == null ? void 0 : g.includes(r.rj.PENDING_TRANSFER))
			}
			const k = "Invalid date";

			function W(g) {
				return g.newExpiration === k ? "Unavailable" : g.newExpiration
			}

			function se(g) {
				return g.currentExpiration === k ? "Unavailable" : g.currentExpiration
			}

			function de(g) {
				return g.substring(g.indexOf("."))
			}

			function Ce(g = "") {
				return g.indexOf(".") !== -1 ? g.substring(0, g.indexOf(".")) : g
			}

			function be(g) {
				return g.map(I => I.name).map(I => de(I)).filter((I, ge, Oe) => !Oe.includes(I, ge + 1))
			}

			function we(g) {
				if (E.no) return [!0, ""];
				if (!oe(g)) return [!1, r.ok.NotOnCF];
				if (g.isCorLocked) return [!1, g.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (g.lastTransferredAt) {
					const I = p()(g.lastTransferredAt),
						ge = p().duration(p()().diff(I)).as("days"),
						Oe = Je(g.name);
					if (ge < (Oe ? 1 : 60)) return [!1, Oe ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (g.createdAt) {
					const I = p()(g.createdAt);
					if (p().duration(p()().diff(I)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Be(g) {
				return !!(E.Bc || g.transferOut)
			}

			function We(g) {
				return Ge(g) || oe(g)
			}

			function Ue(g) {
				return !Ge(g) && oe(g)
			}

			function Ge(g) {
				return !g || g.lastKnownStatus === "pendingTransfer" || g.lastKnownStatus === "transferFOAPending" || !oe(g) && g.transferConditions && !g.transferConditions.not_started || !1
			}

			function Qe(g) {
				return !(Y(g.name) || g.transferConditions && !g.transferConditions.supported_tld)
			}

			function Z(g) {
				return (g == null ? void 0 : g.includes("/")) ? !0 : g.split("").some(I => I.charCodeAt(0) > 123)
			}

			function ie(g) {
				switch (g) {
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

			function w(g) {
				return p()(g.paymentExpiresAt).isBefore(p()())
			}

			function te(g) {
				return g.transferIn && g.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function he(g) {
				const I = ["CU", "KP", "IR", "SY"];
				return g.filter(ge => !I.includes(ge.code))
			}

			function ze(g) {
				if (!!g) return `${g.charAt(0).toUpperCase()}${g.slice(1)}${g.charAt(g.length-1)==="."?"":"."}`
			}

			function Fe(g) {
				const I = {};
				for (const [ge, Oe] of Object.entries(g)) {
					if (Oe && typeof Oe == "string") {
						Object.assign(I, {
							[ge]: Oe.trim()
						});
						continue
					}
					Object.assign(I, {
						[ge]: Oe
					})
				}
				return I
			}

			function xe(g) {
				return p()(g).add(40, "days")
			}

			function Ie(g) {
				const I = g.paymentExpiresAt || g.payment_expires_at,
					ge = xe(I);
				return p()().isBetween(I, ge)
			}

			function Re(g) {
				var I;
				return !(g == null ? void 0 : g.registryStatuses) || !Array.isArray(g == null ? void 0 : g.registryStatuses) && !(0, e.isString)(g == null ? void 0 : g.registryStatuses) ? !1 : (I = g.registryStatuses) === null || I === void 0 ? void 0 : I.includes(r.rj.REDEMPTION_PERIOD)
			}

			function Ne(g) {
				var I;
				return !(g == null ? void 0 : g.registryStatuses) || !Array.isArray(g == null ? void 0 : g.registryStatuses) && !(0, e.isString)(g == null ? void 0 : g.registryStatuses) ? !1 : (I = g.registryStatuses) === null || I === void 0 ? void 0 : I.includes(r.rj.PENDING_DELETE)
			}

			function Ke(g) {
				return [".us"].includes(g)
			}

			function Xe(g) {
				return [".us"].includes(g)
			}

			function Ze(g) {
				switch (g) {
					case ".us":
						return Ee();
					default:
						return []
				}
			}

			function z(g) {
				switch (g) {
					case ".us":
						return J;
					default:
						return {}
				}
			}
			const J = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function Ee() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([g, I]) => ({
						value: g,
						label: I
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([g, I]) => ({
						value: g,
						label: I
					}))
				}]
			}

			function Se(g, I, ge) {
				return I[I.length - 1][ge] === g[ge]
			}

			function ke(g) {
				return Boolean(Object.keys(g).length === 0)
			}

			function Ve(g) {
				return p()().add(g, "year").format(S)
			}

			function Ye({
				accountName: g
			}) {
				var I;
				const ge = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((I = g.toLowerCase().match(ge)) === null || I === void 0 ? void 0 : I[0]) || ""
			}

			function lt(g) {
				return !!g.match(m.default.email)
			}

			function ut(g) {
				return g === "Registration banned zone error"
			}

			function _t(g) {
				return g == null ? void 0 : g.startsWith("Quote error")
			}

			function gt(g) {
				return g == null ? void 0 : g.startsWith("Invalid acknowledgement")
			}

			function it(g) {
				return g === (0, i.ZP)(n.keys.registration_checkout_trademark_notice_error_message)
			}

			function je(g) {
				return g === "DNS conflict"
			}

			function Te(g) {
				return g === u.W7.PENDING_UPDATE
			}

			function qe(g) {
				return g ? Object.values(u.wR).filter(I => I !== u.wR.OFFBOARDED).includes(g) : !1
			}

			function dt(g) {
				return g ? [u.wR.LOCKED, u.wR.ONBOARDED, u.wR.ONBOARDING_INITIATED, u.wR.PENDING_REGISTRY_LOCK, u.wR.PENDING_REGISTRY_UNLOCK, u.wR.PENDING_UNLOCK_APPROVAL].includes(g) : !1
			}

			function ct(g) {
				return g ? u.wR.UNLOCKED === g : !1
			}

			function $(g) {
				return g ? u.wR.LOCKED === g : !1
			}

			function ce(g) {
				return g ? u.wR.PENDING_REGISTRY_LOCK === g : !1
			}

			function ve(g) {
				return g ? [u.wR.PENDING_REGISTRY_UNLOCK, u.wR.PENDING_UNLOCK_APPROVAL].includes(g) : !1
			}

			function Ae(g) {
				var I;
				return !1
			}

			function le(g) {
				var I;
				return !1
			}

			function pe(g) {
				var I;
				return !1
			}

			function ye(g) {
				var I;
				return !1
			}

			function B(g) {
				var I;
				return !1
			}

			function re(g) {
				return Object.keys(u.wR).find(I => u.wR[I].toLowerCase() === g.toLowerCase())
			}

			function fe(g) {
				var I;
				const ge = (I = re(g)) === null || I === void 0 ? void 0 : I.toLowerCase();
				return ge ? n.keys.protection_status[ge] : n.keys.protection_status.unknown
			}

			function Le(g) {
				return ["com", "net"].includes(g)
			}

			function Me(g) {
				const I = (0, d.pu)(g);
				return Le(I) ? u.wR.PENDING_REGISTRY_LOCK : u.wR.LOCKED
			}

			function He(g) {
				return (0, d.pu)(g) === "co" ? 5 : 10
			}

			function tt(g, I) {
				return I ? 1 : (0, d.pu)(g) === "co" ? 5 : (0, d.pu)(g) === "org" ? 1 : 10
			}

			function Je(g) {
				return (0, d.pu)(g) === "uk"
			}

			function ft(g) {
				return (0, d.pu)(g) === "us"
			}

			function st(g) {
				return (0, d.pu)(g) === "ai"
			}

			function rt(g) {
				return p()(g).isValid()
			}

			function $t(g) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(g)
			}

			function jt(g) {
				return !!(g == null ? void 0 : g.id)
			}

			function at(g) {
				return g ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(g) : !1
			}

			function kt(g) {
				return g ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(g) : !1
			}

			function Wt(g) {
				var I;
				return (g == null ? void 0 : g.lastKnownStatus) ? (I = g.lastKnownStatus) === null || I === void 0 ? void 0 : I.includes("deletionIrredeemable") : !1
			}

			function Tt(g) {
				switch (g) {
					case r.Vs.NonStandard_NonStandard:
					case r.Vs.NonStandard_Standard:
					case r.Vs.Standard_Standard:
					case r.Vs.Standard_NonStandard:
						return !0;
					case r.Vs.Not_Premium:
					default:
						return !1
				}
			}

			function zt(g) {
				if (!g || !g.message) return r.OJ.DEFAULT;
				const {
					message: I
				} = g;
				switch (!0) {
					case I.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case I.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case I.includes("account blocked"):
						return r.OJ.ACCOUNT_BLOCKED;
					default:
						return r.OJ.DEFAULT
				}
			}

			function bt(g) {
				var I, ge;
				return !!(((I = g.policies) === null || I === void 0 || (ge = I.suspension) === null || ge === void 0 ? void 0 : ge.parked) && g.policies.suspension.parkingReason)
			}

			function Gt(g) {
				var I, ge;
				return bt(g) && ((I = g.policies) === null || I === void 0 || (ge = I.suspension) === null || ge === void 0 ? void 0 : ge.parkingReason) === r.qK.EMAIL_VERIFICATION
			}

			function Ht(g) {
				var I, ge;
				return bt(g) && ((I = g.policies) === null || I === void 0 || (ge = I.suspension) === null || ge === void 0 ? void 0 : ge.parkingReason) === r.qK.TRUST_AND_SAFETY
			}

			function Kt(g) {
				var I;
				return !((I = g.domainMove) === null || I === void 0 ? void 0 : I.ineligibilityReasons.length)
			}

			function At(g) {
				var I, ge;
				return !!((I = g.domainMove) === null || I === void 0 || (ge = I.ineligibilityReasons) === null || ge === void 0 ? void 0 : ge.includes(r.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Bt(g) {
				var I;
				return (I = g.actionableMetadata) === null || I === void 0 ? void 0 : I.find(ge => ge.type === r.wg.DOMAIN_MOVE)
			}

			function Vt(g) {
				const I = Bt(g);
				return (I == null ? void 0 : I.status) === "pending" && I.accountContext === r._5.GAINING
			}

			function Zt(g) {
				const I = Bt(g);
				return (I == null ? void 0 : I.status) === "pending" && I.accountContext === r._5.LOSING
			}

			function Yt(g) {
				const I = de(g.name);
				return !E.Pf.includes(I)
			}

			function Xt(g) {
				return E.QZ.includes(g)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Bc: function() {
					return E
				},
				Hv: function() {
					return V
				},
				JM: function() {
					return a
				},
				Pf: function() {
					return c
				},
				Py: function() {
					return m
				},
				QZ: function() {
					return f
				},
				WK: function() {
					return r
				},
				g5: function() {
					return s
				},
				gM: function() {
					return u
				},
				gf: function() {
					return d
				},
				jk: function() {
					return G
				},
				no: function() {
					return n
				},
				uY: function() {
					return i
				},
				ui: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../flags.ts");
			const a = "Unknown",
				p = "unknown",
				u = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				m = Object.keys(u),
				i = !0,
				d = (0, o.J8)("registrar_mock_data") || !1,
				E = (0, o.J8)("registrar_mock_transfer_out") || !1,
				n = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				s = "cf_registrar.enabled",
				l = "@abcABC1234567890123456",
				c = [".us"],
				f = [".travel", ".us"],
				_ = (0, e.BC)`/${"accountId"}`,
				A = (0, e.BC)`${_}/add-site`,
				S = (0, e.BC)`${_}/domains`,
				h = (0, e.BC)`${S}/action-center`,
				R = (0, e.BC)`${S}/${"zoneName"}`,
				v = (0, e.BC)`${R}/configuration`,
				C = (0, e.BC)`${R}/contacts`,
				N = (0, e.BC)`${S}/pricing`,
				b = (0, e.BC)`${S}/protection`,
				M = (0, e.BC)`${S}/register`,
				T = (0, e.BC)`${M}/checkout`,
				P = (0, e.BC)`${M}/checkout/${"token"}`,
				L = (0, e.BC)`${M}/success`,
				H = (0, e.BC)`${S}/tlds`,
				X = (0, e.BC)`${S}/transfer`,
				ne = (0, e.BC)`${S}/transfer/${"zoneName"}`,
				ae = (0, e.BC)`/registrar/accounts/verify_email`,
				Y = (0, e.BC)`/registrar/domains/verify_email`,
				K = (0, e.BC)`/sign-up/registrar`,
				me = (0, e.BC)`${S}/verify-email`,
				q = (0, e.BC)`${_}/${"zoneName"}`,
				G = {
					addSite: A,
					domains: S,
					domainsActionCenter: h,
					domainsDomain: R,
					domainsDomainConfiguration: v,
					domainsDomainContacts: C,
					domainsPricing: N,
					domainsProtection: b,
					domainsRegister: M,
					domainsRegisterCheckout: T,
					domainsRegisterCheckoutToken: P,
					domainsRegisterSuccess: L,
					domainsTlds: H,
					domainsTransfer: X,
					domainsTransferZone: ne,
					registrarAccountsVerifyEmail: ae,
					registrarDomainsVerifyEmail: Y,
					signup: K,
					verifyEmail: me,
					zone: q
				},
				V = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				HO: function() {
					return i
				},
				NW: function() {
					return d
				},
				ZQ: function() {
					return p
				},
				b_: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");
			const a = E => {
					const n = E && E.accountFlags && E.accountFlags.data && E.accountFlags.data.registrar && E.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(r => r.trim()) : []
				},
				p = E => {
					var n, r, s;
					return ((n = E.accountFlags) === null || n === void 0 || (r = n.data) === null || r === void 0 || (s = r.registrar) === null || s === void 0 ? void 0 : s["registrar-managed"]) || !1
				},
				u = E => E.account ? E.account.email : "",
				m = E => !1,
				i = E => m(E) && (0, e.oJ)((0, e.Zu)(E)),
				d = E => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: r
					} = E.registrar.registrations;
					return n && !(r.accepted_date || r.id || r.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				J: function() {
					return r
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(a),
				u = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function m(s) {
				for (var l = 1; l < arguments.length; l++) {
					var c = arguments[l] != null ? Object(arguments[l]) : {},
						f = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(c).filter(function(_) {
						return Object.getOwnPropertyDescriptor(c, _).enumerable
					})), f.forEach(function(_) {
						i(s, _, c[_])
					})
				}
				return s
			}

			function i(s, l, c) {
				return l = d(l), l in s ? Object.defineProperty(s, l, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[l] = c, s
			}

			function d(s) {
				var l = E(s, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function E(s, l) {
				if (typeof s != "object" || s === null) return s;
				var c = s[Symbol.toPrimitive];
				if (c !== void 0) {
					var f = c.call(s, l || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(s)
			}
			let n = function(s) {
				return s.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", s.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", s.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", s.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", s.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", s.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", s.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", s.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", s.RENEW_DOMAIN_COMPLETED = "domain renewal completed", s.RESTORE_DOMAIN_INIT = "click to open domain restore modal", s.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", s.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", s.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", s.RESTORE_DOMAIN_FAILURE = "domain restore failed", s.RESTORE_DOMAIN_COMPLETED = "domain restore completed", s.DOMAIN_DELETE_INIT = "click to begin domain delete", s.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", s.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", s.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", s.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", s.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", s.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", s.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", s.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", s.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", s.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", s.DOMAIN_MOVE_START_FLOW = "Start domain move flow", s.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", s.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", s.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", s.DOMAIN_MOVE_SUBMIT = "Submit domain move", s.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", s.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", s.DOMAIN_MOVE_CANCEL = "Domain move cancel", s.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", s.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", s.ACTION_CENTER_NAVIGATE = "Navigate to actions center", s.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", s.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", s.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", s
			}({});

			function r(s, l, c) {
				if (!(l == null ? void 0 : l.name)) return null;
				p().sendEvent(s, m({
					domain: {
						name: l.name,
						premium: (0, u.Uy)(l == null ? void 0 : l.premiumType),
						paymentExpiresAt: o()(l == null ? void 0 : l.paymentExpiresAt).format()
					},
					category: "registrar"
				}, c))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				f6: function() {
					return m
				},
				s_: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/redux/makeAction.js");
			const p = [{
					value: {
						workers: "workers"
					}.workers,
					label: "Workers",
					scopeKeyPrefix: "com.cloudflare.edge.worker.script",
					scopeSubsetOfPrefix: "com.cloudflare.api.account"
				}],
				u = e.eg.object({
					id: e.eg.string,
					name: e.eg.string,
					description: e.eg.string
				}),
				m = (0, o.ZP)("granularResources", "get", "/accounts/(accountId)/demoproducts")
		},
		"../react/pages/home/members/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Ey: function() {
					return i
				},
				F4: function() {
					return c
				},
				Go: function() {
					return r
				},
				Lc: function() {
					return R
				},
				Np: function() {
					return E
				},
				Rl: function() {
					return n
				},
				Sb: function() {
					return s
				},
				Sw: function() {
					return h
				},
				Sz: function() {
					return S
				},
				Ti: function() {
					return v
				},
				Uw: function() {
					return _
				},
				Zl: function() {
					return f
				},
				jk: function() {
					return A
				},
				r6: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${o}/members`,
				p = (0, e.BC)`${a}/invite`,
				u = (0, e.BC)`${a}/invite/${"memberId"}`,
				m = (0, e.BC)`${a}/add-policy/${"memberId"}`,
				i = "com.cloudflare.api.account",
				E = i + "." + "zone",
				n = E + ".",
				r = 100,
				s = 200,
				l = 5,
				c = 300,
				f = "INVITE_TOAST",
				_ = "00000000000000000000000000000000",
				A = {
					account: o,
					members: a,
					inviteMembers: p,
					editMember: u,
					addPolicy: m
				},
				S = {
					allow: "allow",
					deny: "deny"
				},
				h = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				R = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				v = {
					accountId: "",
					effect: S.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return h
				},
				Co: function() {
					return A
				},
				JP: function() {
					return S
				},
				Ld: function() {
					return s
				},
				YW: function() {
					return d
				},
				_k: function() {
					return l
				},
				c$: function() {
					return E
				},
				rC: function() {
					return N
				},
				vq: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				o = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				a = t("../react/pages/home/members/constants.ts");

			function p(b) {
				for (var M = 1; M < arguments.length; M++) {
					var T = arguments[M] != null ? Object(arguments[M]) : {},
						P = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(T).filter(function(L) {
						return Object.getOwnPropertyDescriptor(T, L).enumerable
					})), P.forEach(function(L) {
						u(b, L, T[L])
					})
				}
				return b
			}

			function u(b, M, T) {
				return M = m(M), M in b ? Object.defineProperty(b, M, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[M] = T, b
			}

			function m(b) {
				var M = i(b, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function i(b, M) {
				if (typeof b != "object" || b === null) return b;
				var T = b[Symbol.toPrimitive];
				if (T !== void 0) {
					var P = T.call(b, M || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(b)
			}
			const d = () => p({}, a.Ti),
				E = () => p({}, a.Lc, {
					scopes: [d()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = b => b.map(M => ({
					scope: {
						key: M,
						objects: [{
							key: "*"
						}]
					}
				})),
				r = (b, M, T) => {
					var P;
					let L = [],
						H = [];
					const X = [],
						ne = [];
					b.scopes.forEach(K => {
						if (K.mode === a.Sw.all) T ? L.push({
							id: T
						}) : L.push({
							scope: {
								key: `com.cloudflare.api.account.${M}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (K.mode === a.Sw.domain_group) {
							const G = {
								id: K.resourceGroupId
							};
							K.effect === a.Sz.allow ? L.push(G) : H.push(G)
						} else if (K.mode === a.Sw.zone) {
							const G = `${a.Rl}${K.zoneId}`;
							K.effect === a.Sz.allow ? X.push(G) : ne.push(G)
						} else if (K.mode === a.Sw.granular && K.granularResourceId) {
							var me, q;
							const G = K.granularProduct,
								x = `${(me=o.s_.find(j=>j.value==G))===null||me===void 0?void 0:me.scopeKeyPrefix}.${K.granularResourceId}`,
								oe = `${(q=o.s_.find(j=>j.value===G))===null||q===void 0?void 0:q.scopeSubsetOfPrefix}.${M}`;
							L.push({
								scope: {
									key: `${x}`,
									subset_of: [{
										key: `${oe}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), X.length && (L = L.concat(n(X))), ne.length && (H = H.concat(n(ne)));
					const ae = (P = b.permission_groups) === null || P === void 0 ? void 0 : P.map(K => ({
							id: K
						})),
						Y = [];
					return Y.push({
						access: a.Sz.allow,
						permission_groups: ae,
						resource_groups: L
					}), H.length && Y.push({
						access: a.Sz.deny,
						permission_groups: ae,
						resource_groups: H
					}), Y
				},
				s = b => b.map(M => {
					var T;
					return {
						access: M.access,
						permission_groups: M.permission_groups.map(P => ({
							id: P.id
						})),
						resource_groups: (T = M.resource_groups) === null || T === void 0 ? void 0 : T.map(P => ({
							scope: {
								key: P.scope.key,
								objects: P.scope.objects
							},
							id: P.id
						}))
					}
				}),
				l = (b, M, T, P) => {
					const L = b.auto_accept;
					let H = [];
					return H = H.concat(r(b, M, T)), P && (H = H.concat(s(P))), {
						auto_accept: L,
						status: L ? "accepted" : "pending",
						policies: H
					}
				},
				c = b => {
					const M = b.split(".");
					return M[M.length - 1]
				},
				f = b => {
					var M, T;
					const P = b == null ? void 0 : b.access;
					let L = [],
						H = b == null || (M = b.resource_groups) === null || M === void 0 ? void 0 : M.map(X => {
							var ne;
							const ae = _(X);
							if ((X == null || (ne = X.meta) === null || ne === void 0 ? void 0 : ne.editable) === "false") return {
								effect: P,
								mode: a.Sw.all,
								accountId: c(X.id)
							};
							if (ae) {
								var Y;
								const K = X == null || (Y = X.scope) === null || Y === void 0 ? void 0 : Y.key.split(".").pop();
								return {
									effect: P,
									mode: a.Sw.granular,
									granularProduct: ae.value,
									granularResourceId: K
								}
							} else if (!X.name) X.scope.key.startsWith(a.Rl) ? L.push({
								key: X.scope.key
							}) : L = L.concat(X.scope.objects);
							else return {
								effect: P,
								mode: a.Sw.domain_group,
								resourceGroupId: c(X.id)
							}
						}).filter(X => X);
					if ((T = L) === null || T === void 0 ? void 0 : T.length) {
						let X = L.map(ne => {
							const ae = c(ne.key);
							return {
								effect: P,
								mode: a.Sw.zone,
								zoneId: ae
							}
						});
						H = H.length ? X.concat(H) : X
					}
					return H
				},
				_ = b => {
					var M, T, P, L;
					const H = b == null || (M = b.scope) === null || M === void 0 ? void 0 : M.key.split(".").slice(0, -1).join("."),
						X = b == null || (T = b.scope) === null || T === void 0 || (P = T.subset_of) === null || P === void 0 || (L = P[0]) === null || L === void 0 ? void 0 : L.key.split(".").slice(0, -1).join(".");
					return o.s_.find(ne => ne.scopeKeyPrefix === H && ne.scopeSubsetOfPrefix === X)
				},
				A = b => {
					if (!(b == null ? void 0 : b.length)) return [];
					const M = [];
					return b.forEach(T => {
						var P;
						(P = T.resource_groups) === null || P === void 0 || P.forEach(L => {
							var H, X;
							((H = L.scope) === null || H === void 0 || (X = H.key) === null || X === void 0 ? void 0 : X.startsWith(a.Rl)) && M.push(c(L.scope.key))
						})
					}), M
				},
				S = b => {
					if (!(b == null ? void 0 : b.length)) return [];
					const M = [];
					return b.forEach(T => {
						var P;
						(P = T.resource_groups) === null || P === void 0 || P.forEach(L => {
							var H, X;
							if (!((H = L.scope) === null || H === void 0 || (X = H.key) === null || X === void 0 ? void 0 : X.startsWith(a.Rl))) {
								var ne;
								const Y = (ne = L.scope) === null || ne === void 0 ? void 0 : ne.objects;
								for (let K = 0; K < (Y == null ? void 0 : Y.length) && K < a.r6; K++) {
									var ae;
									((ae = Y[K].key) === null || ae === void 0 ? void 0 : ae.startsWith(a.Rl)) && M.push(c(Y[K].key))
								}
							}
						})
					}), M
				},
				h = b => {
					var M;
					if (!(b == null ? void 0 : b.length)) return null;
					const T = (M = b[0]) === null || M === void 0 ? void 0 : M.permission_groups.map(X => X.id);
					let P, L;
					b == null || b.forEach(X => {
						X.access === a.Sz.allow && (P = X), X.access === a.Sz.deny && (L = X)
					});
					let H = [];
					return P && (H = f(P)), L && (H = H.concat(f(L))), {
						permission_groups: T,
						scopes: H
					}
				},
				R = "permission-groups-",
				v = new Map,
				C = b => {
					if (!b) return [];
					const M = v.get(b);
					if (M) return M;
					const T = e.E.get(`${R}${b}`);
					return v.set(b, T), T
				},
				N = (b, M) => {
					const T = [];
					for (let P = 0; P < sessionStorage.length; P++) {
						const L = sessionStorage.key(P);
						(L == null ? void 0 : L.startsWith(R)) && T.push(L)
					}
					return T.length >= 5 && e.E.remove(T[0]), e.E.set(`${R}${b}`, M)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return i
				},
				L9: function() {
					return n
				},
				N3: function() {
					return E
				},
				zE: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(r) {
				for (var s = 1; s < arguments.length; s++) {
					var l = arguments[s] != null ? Object(arguments[s]) : {},
						c = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), c.forEach(function(f) {
						p(r, f, l[f])
					})
				}
				return r
			}

			function p(r, s, l) {
				return s = u(s), s in r ? Object.defineProperty(r, s, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = l, r
			}

			function u(r) {
				var s = m(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function m(r, s) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var c = l.call(r, s || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			let i = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.SEARCH_CONFIGS = "search hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r.CLICK_DISCORD = "click hyperdrive discord", r.CLICK_COMMUNITY = "click hyperdrive community", r
				}({}),
				d = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				E = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const n = (r, s = {}) => {
				o().sendEvent(r, a({}, s, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return p
				},
				GH: function() {
					return c
				},
				JZ: function() {
					return _
				},
				aR: function() {
					return s
				},
				db: function() {
					return m
				},
				ib: function() {
					return A
				},
				lW: function() {
					return v
				},
				mo: function() {
					return R
				},
				pT: function() {
					return l
				},
				po: function() {
					return f
				},
				wj: function() {
					return h
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const p = "sourcing_kit_enabled",
				u = "sourcing_kit_waitlist",
				m = "images",
				i = "unified_images_enabled",
				d = "transformations_allowed_origins_enabled",
				E = "c2pa",
				n = "c2pa_polish",
				r = "CloudflareImages",
				s = C => !!(0, o.BF)(C, "images.transformations_enabled"),
				l = C => Boolean((0, o.BF)(C, "images.enabled")),
				c = C => {
					const N = (0, o.BF)(C, "images.storage");
					return typeof N == "number" && N > 0
				},
				f = C => Boolean((0, o.BF)(C, "contract.customer_enabled")),
				_ = C => Boolean((0, e.oI)(C, m, p)),
				A = C => Boolean((0, a.Le)(C, r, p)),
				S = C => Boolean(getAccountFlipperFlag(C, r, i)),
				h = C => Boolean((0, a.Le)(C, r, d)),
				R = C => Boolean((0, a.Le)(C, r, E)),
				v = C => Boolean((0, a.Le)(C, r, n))
		},
		"../react/pages/magic/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				GF: function() {
					return l
				},
				H3: function() {
					return i
				},
				H8: function() {
					return u
				},
				J: function() {
					return f
				},
				Nz: function() {
					return d
				},
				UQ: function() {
					return A
				},
				Up: function() {
					return p
				},
				W8: function() {
					return E
				},
				Ws: function() {
					return S
				},
				Xg: function() {
					return r
				},
				Y_: function() {
					return s
				},
				_j: function() {
					return a
				},
				a4: function() {
					return c
				},
				jS: function() {
					return _
				},
				rF: function() {
					return m
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
					tunnelHealthCheckTunnels: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels`,
					tunnelHealthCheckTunnelsList: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/list`,
					tunnelHealthCheckTunnelsHighlight: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight`,
					tunnelHealthCheckTunnelsHighlightDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight/${"tunnelId"}`,
					tunnelHealthCheckTunnelsDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/${"tunnelId"}`,
					asn: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/asn`,
					quickSearchAsn: (0, e.BC)`/configuration/asn`
				},
				p = () => [{
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
				u = h => [{
					value: "low",
					label: h("setting.low")
				}, {
					value: "mid",
					label: h("setting.medium")
				}, {
					value: "high",
					label: h("setting.high")
				}],
				m = h => [{
					value: "request",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				i = h => [{
					value: "unidirectional",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				d = "magic-transit",
				E = "magic-wan",
				n = "gre_tunnel",
				r = "ipsec_tunnel",
				s = "interconnect",
				l = 64,
				c = 1476,
				f = "mid",
				_ = "reply",
				A = h => [{
					value: void 0,
					label: h("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: h("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: h("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				S = h => [{
					value: "all",
					label: h("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: h("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: h("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
		"../react/pages/magic/overview/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				VZ: function() {
					return p
				},
				lC: function() {
					return a
				},
				r8: function() {
					return o
				},
				uB: function() {
					return u
				}
			});
			var e = t("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				a = "user journey",
				p = {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				gb: function() {
					return n
				},
				iP: function() {
					return b
				},
				xL: function() {
					return S
				},
				rD: function() {
					return T
				},
				oT: function() {
					return c
				},
				i2: function() {
					return P
				},
				x1: function() {
					return m
				},
				lW: function() {
					return d
				},
				UA: function() {
					return C
				},
				K5: function() {
					return s
				},
				Ii: function() {
					return R
				},
				PJ: function() {
					return M
				},
				bK: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				u = t("../node_modules/@cloudflare/elements/es/index.js");
			const m = () => o().createElement(i, null, o().createElement("svg", {
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
				d = () => o().createElement(E, null, o().createElement("svg", {
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
				E = (0, a.createComponent)(({
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
				n = () => o().createElement(r, null, o().createElement(u.Ei, {
					alt: "airplane",
					src: p,
					width: "85%"
				})),
				r = (0, a.createComponent)(({
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
				s = () => o().createElement(l, null, o().createElement("svg", {
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
				l = (0, a.createComponent)(({
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
				c = () => o().createElement(f, null, o().createElement("svg", {
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
				f = (0, a.createComponent)(({
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
				_ = () => o().createElement(A, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				A = (0, a.createComponent)(({
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
				S = () => o().createElement(h, null, o().createElement("svg", {
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
				h = (0, a.createComponent)(({
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
				R = () => o().createElement(v, null, o().createElement("svg", {
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
				v = (0, a.createComponent)(({
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
				C = () => o().createElement(N, null, o().createElement("svg", {
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
				N = (0, a.createComponent)(({
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
				b = () => o().createElement("svg", {
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
				M = () => o().createElement("svg", {
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
				T = () => o().createElement("svg", {
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
				P = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				A2: function() {
					return i
				},
				He: function() {
					return u
				},
				N$: function() {
					return m
				},
				Qq: function() {
					return a
				},
				ST: function() {
					return p
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
				p = "cf-test",
				u = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				m = d => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: d ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: d ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: d ? e.rD : e.PJ
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
		"../react/pages/page-rules/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return a
				},
				c: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let a = function(u) {
				return u.TEMPLATE_SELECTED = "template selected", u.TEMPLATE_PRODUCT_SELECTED = "template product selected", u.TEMPLATE_SAVE_DRAFT = "template save draft", u.TEMPLATE_CANCEL = "template cancel", u.TEMPLATE_DEPLOY = "template deploy", u
			}({});
			const p = (u, m) => o().sendEvent(u, {
				template_name: m
			})
		},
		"../react/pages/pages/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				A: function() {
					return _
				},
				C1: function() {
					return E
				},
				Dp: function() {
					return L
				},
				GF: function() {
					return T
				},
				HD: function() {
					return h
				},
				IK: function() {
					return u
				},
				L7: function() {
					return a
				},
				Li: function() {
					return f
				},
				Ni: function() {
					return N
				},
				OG: function() {
					return Y
				},
				QF: function() {
					return ne
				},
				QV: function() {
					return C
				},
				Sx: function() {
					return R
				},
				Ub: function() {
					return X
				},
				X3: function() {
					return r
				},
				aP: function() {
					return i
				},
				eO: function() {
					return s
				},
				fH: function() {
					return c
				},
				fQ: function() {
					return A
				},
				fR: function() {
					return e
				},
				hE: function() {
					return H
				},
				iS: function() {
					return S
				},
				ku: function() {
					return P
				},
				nY: function() {
					return v
				},
				w3: function() {
					return p
				},
				wJ: function() {
					return d
				},
				wp: function() {
					return l
				},
				yu: function() {
					return n
				},
				zF: function() {
					return M
				},
				zG: function() {
					return b
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
						newInstallation: `https://github.com/apps/${o}/installations/new`
					},
					gitlab: {
						authorize: "https://gitlab.com/oauth/authorize",
						manage: "https://gitlab.com/-/profile/applications"
					},
					webAnalytics: "https://developers.cloudflare.com/analytics/web-analytics/",
					feedbackSurvey: "https://forms.gle/dfM8YfpzY4aV3gv56"
				},
				p = "Allow Members - Cloudflare Pages",
				u = 58,
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
				i = "production",
				d = 2e3,
				E = 100,
				n = 350,
				r = 1e7,
				s = ["Success:", "Error:", "Failed:"],
				l = 10,
				c = "_headers",
				f = "_redirects",
				_ = "_routes.json",
				A = "_worker.js",
				S = "do-a-barrel-roll",
				h = [c, f, _, A],
				R = 1024 * 1024 * 25,
				v = 1e3,
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
				N = 1e5,
				b = 75e3,
				M = 2e5,
				T = 15e4,
				P = "workers",
				L = "cloudflare_pages_build_caching",
				H = 2;
			let X = function(K) {
				return K[K.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", K[K.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", K[K.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", K[K.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", K[K.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", K[K.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", K
			}({});
			const ne = 1,
				ae = 2,
				Y = 2
		},
		"../react/pages/pages/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return a
				},
				_j: function() {
					return o
				},
				zE: function() {
					return u
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
				p = m => `${m.subdomain}.pages.dev`,
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
					return i
				},
				L9: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(s).filter(function(c) {
						return Object.getOwnPropertyDescriptor(s, c).enumerable
					})), l.forEach(function(c) {
						p(n, c, s[c])
					})
				}
				return n
			}

			function p(n, r, s) {
				return r = u(r), r in n ? Object.defineProperty(n, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = s, n
			}

			function u(n) {
				var r = m(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(n, r) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var l = s.call(n, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let i = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				d = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const E = (n, r = {}) => {
				o().sendEvent(n, a({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return a
				},
				Jg: function() {
					return m
				},
				_j: function() {
					return o
				},
				vF: function() {
					return u
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
					bucketLifecycle: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lifecycle`,
					bucketMultipartUploads: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/uploads`,
					bucketSippy: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/sippy`,
					apiTokens: (0, e.BC)`/user/tokens`,
					apiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					rollApiToken: (0, e.BC)`/user/tokens/${"tokenId"}/value`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					zones: (0, e.BC)`/zones`
				},
				p = i => {
					const d = "r2.cloudflarestorage.com";
					switch (i) {
						case "default":
							return d;
						case "eu":
							return `eu.${d}`;
						case "fedramp":
							return `fedramp.${d}`
					}
				},
				u = (i, d) => {
					const E = p(d);
					return `https://${i}.${E}`
				},
				m = (i, d, E) => `${u(i,d)}/${E}`
		},
		"../react/pages/r2/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const p = "r2_migrator_waitlist",
				u = "r2migrator",
				m = "r2",
				i = "r2_storage_migrator",
				d = "r2_storage_migrator",
				E = s => getAccountEntitlement(s, "r2.enabled"),
				n = s => Boolean((0, a.Le)(s, i, p)),
				r = s => Boolean(getAccountFlipperFlagsChanges(s, d, u))
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Gk: function() {
					return s
				},
				LA: function() {
					return E
				},
				Wk: function() {
					return r
				},
				_V: function() {
					return i
				},
				c5: function() {
					return n
				},
				om: function() {
					return d
				}
			});
			var e = t("../react/pages/security-center/BlockedContent/types.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(l) {
				for (var c = 1; c < arguments.length; c++) {
					var f = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(f).filter(function(A) {
						return Object.getOwnPropertyDescriptor(f, A).enumerable
					})), _.forEach(function(A) {
						p(l, A, f[A])
					})
				}
				return l
			}

			function p(l, c, f) {
				return c = u(c), c in l ? Object.defineProperty(l, c, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[c] = f, l
			}

			function u(l) {
				var c = m(l, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function m(l, c) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var _ = f.call(l, c || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(l)
			}
			const i = "blocked-content-table-tooltip",
				d = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					canceled: "gray"
				},
				E = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				n = {
					[e.$E.Active]: [e.M3.Active, e.M3.InReview],
					[e.$E.Pending]: [e.M3.Pending, e.M3.Canceled]
				},
				r = {
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
					filters: Object.values(e.GH).reduce((l, c) => a({}, l, {
						[c]: c
					}), {})
				};
			let s = function(l) {
				return l.COPY_URL = "copy blocked content url", l.REQUEST_REVIEW = "request blocked content review", l.ADD_FILTER = "Add filter", l.REMOVE_FILTER = "Remove filter", l
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
					return p
				}
			});
			let e = function(m) {
					return m.Pending = "pending", m.Active = "active", m
				}({}),
				o = function(m) {
					return m.Active = "active", m.InReview = "in_review", m.Pending = "pending", m.Canceled = "canceled", m
				}({}),
				a = function(m) {
					return m.Domain = "domain", m.Status = "status", m.BlockType = "blockType", m
				}({}),
				p = function(m) {
					return m.EnforcementDate = "enforcementDate", m.BlockType = "blockType", m.Hostname = "hostname", m.Status = "status", m
				}({}),
				u = function(m) {
					return m.Removed = "removed", m.Misclassified = "misclassified", m
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				R: function() {
					return e
				},
				v: function() {
					return o
				}
			});
			let e = function(a) {
				return a.LOAD_SCAN_INFO = "load url scan information", a.INITIATE_URL_SCAN = "initiate url scan", a
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
			}
		},
		"../react/pages/security/analytics/labels.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
					return p
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
				p = {
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
		"../react/pages/security/api-shield/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AB: function() {
					return r
				},
				API_SHIELD_TOAST: function() {
					return S
				},
				CR: function() {
					return A
				},
				Cg: function() {
					return E
				},
				L8: function() {
					return l
				},
				Ps: function() {
					return d
				},
				_i: function() {
					return n
				},
				ac: function() {
					return a
				},
				k1: function() {
					return u
				},
				k2: function() {
					return _
				},
				mU: function() {
					return f
				},
				sM: function() {
					return p
				},
				tA: function() {
					return o
				},
				uv: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = ["log", "block"],
				a = [...o, "disable"],
				p = 10,
				u = "header",
				m = "api-shield",
				i = {
					addEndpoints: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/add-endpoints`,
					addFromDiscovery: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/add-endpoints/discovery`,
					addSchemaEndpointMgmt: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/add-endpoints/upload`,
					discovery: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/discovery`,
					editSessionIdentifiers: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/discovery/session-identifiers`,
					endpointManagement: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield`,
					operationDetails: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/operation`,
					settings: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/settings`,
					sequences: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/sequences`,
					schemaValidation: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/schema-validation`,
					developerPortal: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/developer-portal`,
					apiRules: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/api-rules`,
					updateJWTRules: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/jwt-rules`,
					updateJWTConfiguration: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/jwt-configuration`,
					sequenceRules: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/sequence-rules`,
					routingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/routing`,
					upgrade: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/upgrade`
				},
				d = "sess_ids_last_updated",
				E = "all";
			let n = function(h) {
				return h.DISCOVERY_FILTER = "discovery-filter-state", h.ADD_JWT_RULES_FILTER = "add-jwt-rules-state", h.ENDPOINT_MANAGEMENT_FILTER = "endpoint-management-filter-cache-key", h
			}({});
			const r = 63,
				s = 0,
				l = 10,
				c = {
					id: "method",
					desc: !0
				};
			let f = function(h) {
				return h.JWT_CONFIGURATIONS = "API_SHIELD_JWT_CONFIGURATIONS", h
			}({});
			const _ = {
					METHOD: "method.listbox_filter",
					HOSTNAME: "hostname.listbox_filter",
					LABELS: "labels.listbox_filter"
				},
				A = "api-shield-schema-validation-for-all-customers";
			let S = function(h) {
				return h.UPLOAD_SCHEMA = "schemaName", h.ADDED_ENDPOINT = "addedEndpoint", h.DEPLOYED_ROUTE = "deployedRoute", h.DELETED_ROUTE = "deletedRoute", h.UPDATED_LABELS_SINGLE_ENDPOINT = "updateLabelsSingle", h.UPDATED_LABELS_MULTI_ENDPOINT = "updateLabelsMulti", h
			}({})
		},
		"../react/pages/security/api-shield/entitlements.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				$0: function() {
					return r
				},
				CR: function() {
					return n
				},
				DM: function() {
					return Y
				},
				DN: function() {
					return L
				},
				Dc: function() {
					return K
				},
				Dg: function() {
					return ne
				},
				FV: function() {
					return H
				},
				LG: function() {
					return h
				},
				Mz: function() {
					return X
				},
				OL: function() {
					return i
				},
				St: function() {
					return A
				},
				UG: function() {
					return s
				},
				Wy: function() {
					return l
				},
				iU: function() {
					return b
				},
				jI: function() {
					return u
				},
				qK: function() {
					return P
				},
				qN: function() {
					return E
				},
				r6: function() {
					return me
				},
				sK: function() {
					return f
				},
				t1: function() {
					return v
				},
				yk: function() {
					return d
				},
				yo: function() {
					return ae
				},
				zo: function() {
					return C
				},
				zt: function() {
					return m
				}
			});
			var e = t("../react/pages/security/api-shield/types.ts"),
				o = t("../react/common/hooks/useZoneEntitlement.ts"),
				a = t("../react/common/hooks/useAccountEntitlement.ts"),
				p = t("../react/pages/security/api-shield/settings/constants.tsx");
			const u = {
					[e.H.CONFIGURATION]: {
						maxApiShields: "rulesets.max_api_shields",
						centralEndpointsListAllowed: "central_endpoint_list.allowed",
						maxRulesetSize: "central_endpoint_list.api_gateway_phases_max_ruleset_size",
						apiRouting: "api_routing.allowed",
						endpointMatchingAllowed: "endpoint_matching.allowed"
					},
					[e.H.DISCOVERY]: {
						discoveryAllowed: "api_discovery.allowed",
						discoveryThresholdsAllowed: "endpoint_abuse_detection.volumetric_allowed"
					},
					[e.H.JWT]: {
						tokenValidationAllowed: "token_validation.allowed",
						maxTokenValidationRules: "token_validation.max_rules_per_zone",
						maxTokenValidationConfigs: "token_validation.max_configs_per_zone"
					},
					[e.H.OPERATIONS]: {
						maxOperationsAllowed: "central_endpoint_list.max_endpoints_per_zone"
					},
					[e.H.SCHEMA_VALIDATION]: {
						schemaValidationAllowed: "central_endpoint_list.schema_validation_allowed",
						maxValidatedSchemasAllowed: "central_endpoint_list.max_validated_schemas_per_zone",
						maxSchemaBytes: "central_endpoint_list.max_translated_schema_bytes_per_zone"
					},
					[e.H.USER_SCHEMAS]: {
						maxUserSchemasAllowed: "central_endpoint_list.max_schemas_per_zone",
						maxSchemaBytesAllowed: "central_endpoint_list.max_translated_schema_bytes_per_zone"
					},
					[e.H.LEARNED_SCHEMAS]: {
						maxLearnedSchemasAllowed: "central_endpoint_list.max_learned_schemas_per_zone"
					},
					[e.H.SEQUENCE]: {
						sequenceAllowed: "endpoint_abuse_detection.sequential_allowed"
					},
					[e.H.SEQUENCE_RULES]: {
						maxSequenceRules: "endpoint_abuse_detection.sequential_max_rules"
					}
				},
				m = {
					dlpAllowed: "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed",
					logAllowed: "rulesets.log_action_allowed",
					regexOperatorAllowed: "rulesets.regex_operator_allowed",
					sequencesAllowed: "rulesets.sequences_allowed",
					contractEnabled: "contract.customer_enabled"
				},
				i = u[e.H.DISCOVERY],
				d = () => !!(0, o.Z)(i.discoveryAllowed),
				E = () => !!(0, o.Z)(i.discoveryThresholdsAllowed),
				n = u[e.H.JWT],
				r = () => !!(0, o.Z)(n.tokenValidationAllowed),
				s = () => (0, o.Z)(n.maxTokenValidationRules),
				l = () => (0, o.Z)(n.maxTokenValidationConfigs),
				c = u[e.H.SEQUENCE],
				f = () => !!(0, o.Z)(c.sequenceAllowed),
				_ = u[e.H.SEQUENCE_RULES],
				A = () => (0, o.Z)(_.maxSequenceRules),
				S = u[e.H.OPERATIONS],
				h = () => (0, o.Z)(S.maxOperationsAllowed),
				R = u[e.H.USER_SCHEMAS],
				v = () => {
					const q = (0, o.Z)(R.maxUserSchemasAllowed);
					return typeof q == "number" ? q : p.Hs
				},
				C = () => {
					const q = (0, o.Z)(R.maxSchemaBytesAllowed);
					return typeof q == "number" ? q : p.x5
				},
				N = u[e.H.LEARNED_SCHEMAS],
				b = () => (0, o.Z)(N.maxLearnedSchemasAllowed),
				M = u[e.H.SCHEMA_VALIDATION],
				T = () => useZoneEntitlement(M.schemaValidationAllowed),
				P = () => (0, o.Z)(M.maxSchemaBytes),
				L = u[e.H.CONFIGURATION],
				H = () => (0, o.Z)(L.maxApiShields),
				X = () => (0, o.Z)(L.apiRouting),
				ne = () => (0, o.Z)(L.centralEndpointsListAllowed),
				ae = () => !!(0, o.Z)(m.logAllowed),
				Y = () => !!(0, o.Z)(m.regexOperatorAllowed),
				K = () => !!(0, o.Z)(m.dlpAllowed),
				me = () => !!(0, a.Z)(m.sequencesAllowed)
		},
		"../react/pages/security/api-shield/settings/constants.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Cl: function() {
					return n
				},
				Hs: function() {
					return d
				},
				PD: function() {
					return l
				},
				Sk: function() {
					return c
				},
				TD: function() {
					return E
				},
				Ye: function() {
					return m
				},
				ZR: function() {
					return s
				},
				a2: function() {
					return r
				},
				x5: function() {
					return i
				},
				y$: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/utils/translator.tsx"),
				p = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let u = function(_) {
				return _.JWT_SECTION = "JWT_SECTION", _.ENDPOINT_SETTINGS = "ENDPOINT_SETTINGS", _.SCHEMA_SETTINGS = "SCHEMA_SETTINGS", _
			}({});
			const m = {
					page: 1,
					perPage: 5,
					totalCount: 0
				},
				i = 2e5,
				d = 5,
				E = {
					name: "created_at",
					direction: p.Sr.desc
				},
				n = {
					title: o().createElement(a.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.userSchemas.empty.title"
					}),
					description: o().createElement(a.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.userSchemas.empty.description"
					})
				},
				r = {
					title: o().createElement(a.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.learnedSchemas.empty.title"
					}),
					description: o().createElement(a.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.learnedSchemas.empty.description"
					})
				},
				s = {
					title: o().createElement(a.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.sessionIdentifiers.empty.title"
					}),
					description: o().createElement(a.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.sessionIdentifiers.empty.description"
					})
				},
				l = {
					MENUBOX_WRAPPER: "menuBox.wrapper",
					JWT_INFOBOX: "settings.infobox.jwt",
					ENDPOINT_INFOBOX: "settings.infobox.endpoint",
					SCHEMA_VALIDATION_INFOBOX: "settings.infobox.schemaValidation",
					FALLTHROUGH_INFOBOX: "settings.infobox.fallthrough",
					MTLS_RULES_CARD_TITLE: "mtls.rulesCard.title",
					MTLS_RULES_CARD_DOC_LINK: "mtls.rulesCard.docLink",
					JWT_CONFIGURATION_TABLE_WRAPPER: "jwt.configuration.tableWrapper",
					JWT_CONFIGURATION_TABLE_ERROR: "jwt.configuration.table.error",
					JWT_CONFIGURATION_ITEM: "jwt.configuration.item",
					SESSION_IDENTIFIERS_LOADING: "sessionsIdentifiers.state.loading",
					SESSION_IDENTIFIERS_TABLE_WRAPPER: "sessionsIdentifiers.table.wrapper",
					SESSION_IDENTIFIERS_ADD_IDENTIFIER_BANNER: "sessionIdentifiers.addIdentifier.banner",
					SESSION_IDENTIFIERS_EDIT_IDENTIFIERS_BUTTON: "sessionIdentifiers.editIdentifiers.button",
					SCHEMA_VALIDATION_NEW_TABLE_FILE_SIZE_CELL: "schemaValidation.newTable.fileSize.cell",
					SCHEMA_VALIDATION_NEW_TABLE_HOSTNAME_CELL: "schemaValidation.newTable.hostname.cell",
					SCHEMA_VALIDATION_NEW_TABLE_FILTER_BUTTON: "schemaValidation.newTable.filter.button"
				},
				c = {
					FALLTHROUGH_SECTION_HEADING: "fallthroughSection.heading",
					FALLTHROUGH_SECTION_DESCRIPTION: "fallthroughSection.description",
					FALLTHROUGH_SECTION_USE_TEMPLATE_BUTTON: "fallthroughSection.button",
					FALLTHROUGH_SECTION_HOSTNAME_NAME: "fallthroughSection.hostname.div",
					FALLTHROUGH_SECTION_SCHEMA_NAME: "fallthroughSection.schema.div",
					FALLTHROUGH_DELETE_HOSTNAME_BUTTON: "fallthroughSection.delete_hostname.button",
					TEMPLATE_MODAL_TITLE: "fallthroughSection.template_modal.title",
					TEMPLATE_MODAL_DESCRIPTION: "fallthroughSection.template_modal.description",
					TEMPLATE_MODAL_LOADING: "fallthroughSection.template_modal.loading",
					TEMPLATE_MODAL_SELECT: "fallthroughSection.template_modal.select",
					TEMPLATE_MODAL_TITLE_LIST: "fallthroughSection.template_modal.title.list",
					TEMPLATE_MODAL_CANCEL_BUTTON: "fallthroughSection.template_modal.button.cancel",
					TEMPLATE_MODAL_REDIRECT_BUTTON: "fallthroughSection.template_modal.button.redirect"
				},
				f = {
					DEVELOPER_PORTAL: "Mocked DeveloperPortalSection",
					JWT_CONFIGURATION: "Mocked JWTConfigurationSection",
					MTLS: "Mocked MTLSSection",
					SESSION_IDENTIFIERS: "Mocked SessionIdentifiersSection",
					SESSION_IDENTIFIERS_TABLE: "Mocked Session Identifiers Table",
					MENUBOX: "Mocked MenuBox",
					SCHEMA_VALIDATION: "Mocked SV2SettingsSection",
					SCHEMAS_TABLE_NEW: "Mocked New Schemas Table",
					RULESET_ENTRYPOINT_TABLE: "Mocked RulesetEntrypointTable",
					TEMPLATE_MODAL: "Mocked TemplateModal",
					FALLTHROUGH_RULES: "Mocked Fallthrough Rules"
				}
		},
		"../react/pages/security/api-shield/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Fj: function() {
					return d
				},
				kq: function() {
					return i
				},
				xr: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(s).filter(function(c) {
						return Object.getOwnPropertyDescriptor(s, c).enumerable
					})), l.forEach(function(c) {
						p(n, c, s[c])
					})
				}
				return n
			}

			function p(n, r, s) {
				return r = u(r), r in n ? Object.defineProperty(n, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = s, n
			}

			function u(n) {
				var r = m(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(n, r) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var l = s.call(n, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let i = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const d = {
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
				E = ({
					name: n,
					category: r = "user journey",
					product: s = i.MAIN,
					productName: l,
					additionalData: c
				}) => {
					o().sendEvent(n, a({
						category: r,
						product: s,
						productName: l
					}, c || {}))
				}
		},
		"../react/pages/security/api-shield/types.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				H: function() {
					return o
				}
			});
			let e = function(a) {
					return a.LIST_OF_JUST_ADDED_IDENTIFIERS = "LIST_OF_JUST_ADDED_IDENTIFIERS", a
				}({}),
				o = function(a) {
					return a.OPERATIONS = "operations", a.JWT = "jwt", a.SCHEMA_VALIDATION = "schemaValidation", a.USER_SCHEMAS = "userSchemas", a.LEARNED_SCHEMAS = "learnedSchemas", a.DISCOVERY = "discovery", a.CONFIGURATION = "configuration", a.SEQUENCE = "sequence", a.SEQUENCE_RULES = "sequenceRules", a.FALLTHROUGH_RULES = "fallThroughRules", a
				}({})
		},
		"../react/pages/security/api-shield/utils/useApiShield.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				R: function() {
					return i
				}
			});
			var e = t("../react/pages/security/api-shield/entitlements.tsx"),
				o = t("../react/pages/security/api-shield/constants.ts"),
				a = t("../react/common/hooks/useGate.ts");
			const p = () => !!(0, a.Z)(o.CR);
			var u = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/app/redux/index.ts");
			const i = () => {
				const d = ((0, e.FV)() || 0) > 0,
					E = p(),
					n = (0, e.yk)(),
					r = (0, e.yo)(),
					s = (0, m.p4)(u.nA),
					l = (0, u.Ns)(s),
					c = (0, u._y)(s),
					f = (0, u.z5)(s),
					_ = (0, u.ko)(s);
				return {
					isFreeZone: l,
					isProZone: c,
					isBiz: f,
					isEnterpriseZone: _,
					hasLogAction: r,
					hasApiShields: d,
					hasApiDiscovery: n,
					hasFreeTier: E && !d,
					hasApiShieldsAndApiDiscovery: n && d,
					isEnableFreeTier: E
				}
			}
		},
		"../react/pages/security/bots/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
			let e = function(p) {
					return p.INITIAL_FETCH_SCORES = "view bots scores distribution", p.FETCH_CONFIGURATION = "view bots configuration page", p.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", p.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", p.UPDATE_SETTINGS = "update bots settings", p.DELETE_RULE = "delete bots ruleset", p.UPDATE_RULE = "update bots ruleset", p.FETCH_RULES = "view bots ruleset", p.CONFIGURE_BOT_MANAGEMENT = "view bots management", p.WAF_RULES_REDIRECT = "redirect waf rules", p
				}({}),
				o = function(p) {
					return p.PROVIDED_TEMPLATE = "provided template link in detection card", p.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", p.USE_TEMPLATE = "use template", p.CREATE_FIREWALL_RULE = "create firewall rule", p.WAF_RULES = "waf rules", p
				}({});
			const a = "user journey"
		},
		"../react/pages/security/page-shield/resources/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return x
				},
				Ks: function() {
					return Be
				},
				sV: function() {
					return ee
				},
				SI: function() {
					return be
				},
				v5: function() {
					return N
				},
				xg: function() {
					return k
				},
				YC: function() {
					return O
				},
				MC: function() {
					return b
				},
				Xe: function() {
					return r
				},
				u8: function() {
					return T
				},
				Oq: function() {
					return V
				},
				VT: function() {
					return P
				},
				qc: function() {
					return H
				},
				V0: function() {
					return C
				},
				Lj: function() {
					return we
				},
				k2: function() {
					return _
				},
				$g: function() {
					return c
				},
				SJ: function() {
					return X
				},
				KH: function() {
					return G
				},
				Mq: function() {
					return q
				},
				FV: function() {
					return de
				},
				j$: function() {
					return ne
				},
				I1: function() {
					return n
				},
				Wq: function() {
					return l
				},
				jf: function() {
					return s
				},
				sW: function() {
					return Ce
				},
				Uq: function() {
					return v
				},
				yd: function() {
					return Y
				},
				QM: function() {
					return K
				},
				Uc: function() {
					return me
				},
				R$: function() {
					return f
				},
				pG: function() {
					return xe
				},
				Ar: function() {
					return Fe
				},
				Sk: function() {
					return j
				},
				gY: function() {
					return Ie
				},
				SE: function() {
					return We
				},
				m: function() {
					return ie
				},
				xP: function() {
					return Z
				},
				CI: function() {
					return te
				},
				p0: function() {
					return he
				},
				xl: function() {
					return Qe
				},
				Tb: function() {
					return Ge
				},
				h3: function() {
					return Re
				},
				xq: function() {
					return ye
				},
				SQ: function() {
					return $
				},
				C0: function() {
					return ce
				},
				av: function() {
					return Ze
				},
				W3: function() {
					return Ke
				},
				WO: function() {
					return Se
				},
				Dk: function() {
					return ut
				},
				we: function() {
					return je
				},
				Yt: function() {
					return dt
				},
				ex: function() {
					return qe
				},
				E1: function() {
					return Te
				},
				e0: function() {
					return gt
				},
				UH: function() {
					return ke
				},
				Qt: function() {
					return it
				},
				K$: function() {
					return Ve
				},
				dm: function() {
					return J
				},
				oK: function() {
					return Ye
				},
				qZ: function() {
					return ct
				},
				_4: function() {
					return ve
				},
				qo: function() {
					return Ae
				},
				CB: function() {
					return Ue
				},
				ti: function() {
					return ze
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(o),
				p = t("../../../common/component/component-filter-bar/src/index.js"),
				u = t("../react/common/components/analytics/AnalyticsReport/constants.ts");

			function m(B) {
				for (var re = 1; re < arguments.length; re++) {
					var fe = arguments[re] != null ? Object(arguments[re]) : {},
						Le = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Le.push.apply(Le, Object.getOwnPropertySymbols(fe).filter(function(Me) {
						return Object.getOwnPropertyDescriptor(fe, Me).enumerable
					})), Le.forEach(function(Me) {
						i(B, Me, fe[Me])
					})
				}
				return B
			}

			function i(B, re, fe) {
				return re = d(re), re in B ? Object.defineProperty(B, re, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[re] = fe, B
			}

			function d(B) {
				var re = E(B, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function E(B, re) {
				if (typeof B != "object" || B === null) return B;
				var fe = B[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Le = fe.call(B, re || "default");
					if (typeof Le != "object") return Le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(B)
			}
			let n = function(B) {
				return B.BASE_URI = "base-uri", B.CHILD = "child-src", B.CONNECT = "connect-src", B.DEFAULT = "default-src", B.FONT = "font-src", B.FORM_ACTION = "form-action", B.FRAME = "frame-src", B.FRAME_ANCESTORS = "frame-ancestors", B.IMAGE = "img-src", B.MANIFEST = "manifest-src", B.MEDIA = "media-src", B.OBJECT = "object-src", B.SCRIPT = "script-src", B.STYLE = "style-src", B.WORKER = "worker-src", B.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", B
			}({});
			const r = m({}, n, {
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
			let s = function(B) {
					return B.MONITOR = "monitor", B.POLICIES = "policies", B.SETTINGS = "settings", B
				}({}),
				l = function(B) {
					return B.SCRIPT_MONITOR = "script", B.CONNECTION_MONITOR = "connection", B.COOKIE_MONITOR = "cookie", B
				}({}),
				c = function(B) {
					return B.CryptominingScore = "cryptomining_score", B.MalwareScore = "malware_score", B.MagecartScore = "magecart_score", B
				}({}),
				f = function(B) {
					return B.DataflowScore = "dataflow_score", B.ObfuscationScore = "obfuscation_score", B
				}({}),
				_ = function(B) {
					return B.DomainMalicious = "domain_reported_malicious", B.UrlMalicious = "url_reported_malicious", B
				}({});

			function A(B) {
				for (var re = 1; re < arguments.length; re++) {
					var fe = arguments[re] != null ? Object(arguments[re]) : {},
						Le = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Le.push.apply(Le, Object.getOwnPropertySymbols(fe).filter(function(Me) {
						return Object.getOwnPropertyDescriptor(fe, Me).enumerable
					})), Le.forEach(function(Me) {
						S(B, Me, fe[Me])
					})
				}
				return B
			}

			function S(B, re, fe) {
				return re = h(re), re in B ? Object.defineProperty(B, re, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[re] = fe, B
			}

			function h(B) {
				var re = R(B, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function R(B, re) {
				if (typeof B != "object" || B === null) return B;
				var fe = B[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Le = fe.call(B, re || "default");
					if (typeof Le != "object") return Le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(B)
			}
			const v = 50,
				C = 9,
				N = "copy script url page shield",
				b = "disable page shield",
				M = "click documentation link",
				T = "enable page shield",
				P = "filter search page shield",
				L = "filter search view all page shield",
				H = "hover score tooltip page shield",
				X = "open alert modal page shield",
				ne = "change pagination page shield",
				ae = "close script modal page shield",
				Y = "open script modal page shield",
				K = "select alert type page shield",
				me = "sort column page shield",
				q = {
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
				G = {
					STARTS_WITH: u.Gn.startsWith,
					ENDS_WITH: u.Gn.endsWith,
					EQUALS: u.Gn.equals,
					CONTAINS: u.Gn.contains,
					DOES_NOT_CONTAIN: u.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: u.Gn.in
				},
				V = {
					status: {
						example: "active",
						type: p.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [G.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: p.kE.string,
						options: ["true", "false"],
						operators: [G.CONTAINS, G.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [G.EQUALS],
						type: p.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: p.kE.string,
						operators: [G.INCLUDES, G.ENDS_WITH, G.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				x = A({}, V, {
					urls: A({}, V.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				ee = {
					type: {
						example: "first_party",
						type: p.kE.select,
						options: ["first_party", "unknown"],
						label: "common.type",
						urlParam: "type",
						operators: [u.Gn.equals]
					},
					name: {
						example: "cookie_1",
						operators: [u.Gn.equals],
						type: p.kE.string,
						label: "firewall.page_shield.name",
						urlParam: "name"
					},
					domain: {
						example: "hostname.com",
						operators: [u.Gn.equals],
						type: p.kE.string,
						label: "firewall.page_shield.domain",
						urlParam: "domain"
					},
					path: {
						example: "/",
						operators: [u.Gn.equals],
						type: p.kE.string,
						label: "firewall.page_shield.path",
						urlParam: "path"
					},
					same_site: {
						operators: [u.Gn.equals],
						type: p.kE.select,
						options: ["lax", "strict", "none"],
						label: "firewall.page_shield.same_site",
						urlParam: "same_site"
					},
					http_only: {
						operators: [u.Gn.equals],
						type: p.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.http_only",
						urlParam: "http_only"
					},
					secure: {
						operators: [u.Gn.equals],
						type: p.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.secure",
						urlParam: "secure"
					}
				};
			let oe = function(B) {
				return B.SECURITY_THREATS = "Security Threats", B.C2_BOTNET = "C2 & Botnet", B.CRYPTOMINING = "Cryptomining", B.MALWARE = "Malware", B.PHISHING = "Phishing", B.SPYWARE = "Spyware", B.DGA_DOMAINS = "DGA Domains", B.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", B
			}({});
			const j = "https://www.cloudflare.com/plans/enterprise/contact/",
				O = {
					[n.BASE_URI]: "page_shield.policies.form.base_uri",
					[n.CHILD]: "page_shield.policies.form.child",
					[n.CONNECT]: "page_shield.policies.form.connections",
					[n.DEFAULT]: "page_shield.policies.form.default",
					[n.FONT]: "page_shield.policies.form.font",
					[n.FORM_ACTION]: "page_shield.policies.form.form",
					[n.FRAME]: "page_shield.policies.form.frame",
					[n.FRAME_ANCESTORS]: "page_shield.policies.form.frame_ancestors",
					[n.IMAGE]: "page_shield.policies.form.img",
					[n.MANIFEST]: "page_shield.policies.form.manifest",
					[n.MEDIA]: "page_shield.policies.form.media",
					[n.OBJECT]: "page_shield.policies.form.object",
					[n.SCRIPT]: "page_shield.policies.form.script",
					[n.STYLE]: "page_shield.policies.form.style",
					[n.UPGRADE_INSECURE_REQUESTS]: "page_shield.policies.form.upgrade_insecure_requests",
					[n.WORKER]: "page_shield.policies.form.worker"
				},
				k = {
					[n.BASE_URI]: "firewall.page_shield.policies.table.base_uri",
					[n.CHILD]: "firewall.page_shield.policies.table.child",
					[n.CONNECT]: "firewall.page_shield.policies.table.connections",
					[n.DEFAULT]: "firewall.page_shield.policies.table.default",
					[n.FONT]: "firewall.page_shield.policies.table.font",
					[n.FORM_ACTION]: "firewall.page_shield.policies.table.form",
					[n.FRAME]: "firewall.page_shield.policies.table.frame",
					[n.FRAME_ANCESTORS]: "firewall.page_shield.policies.table.frame_ancestors",
					[n.IMAGE]: "firewall.page_shield.policies.table.img",
					[n.MANIFEST]: "firewall.page_shield.policies.table.manifest",
					[n.MEDIA]: "firewall.page_shield.policies.table.media",
					[n.OBJECT]: "firewall.page_shield.policies.table.object",
					[n.SCRIPT]: "firewall.page_shield.policies.table.script",
					[n.STYLE]: "firewall.page_shield.policies.table.style",
					[n.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[n.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				W = {
					[c.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[c.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[c.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[f.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[f.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				se = {
					[_.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[_.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				de = {
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
				Ce = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				be = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				we = {
					[l.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[l.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[l.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				Be = {
					[l.SCRIPT_MONITOR]: "script_monitor.description",
					[l.CONNECTION_MONITOR]: "connection_monitor.description",
					[l.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				We = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", B => (a().sendEvent(de.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), B)),
				Ue = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", B => (a().sendEvent(de.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), B)),
				Ge = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", B => (a().sendEvent(de.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), B)),
				Qe = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				Z = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", B => (a().sendEvent(de.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), B)),
				ie = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				w = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", B => (a().sendEvent(de.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), B)),
				te = (0, e.ZP)("pageShieldPolicies", "get", "/zones/(zoneId)/page_shield/policies").on("success", B => (a().sendEvent(de.VIEW_PAGE_SHIELD_POLICIES, {
					category: "user journey",
					product: "Page shield"
				}), B)),
				he = (0, e.ZP)("pageShieldPolicy", "get", "/zones/(zoneId)/page_shield/policies/(policiesId)"),
				ze = (0, e.ZP)("pageShieldPolicy", "put", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", B => (a().sendEvent(de.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "update"
				}), B)),
				Fe = (0, e.ZP)("pageShieldPolicy", "delete", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", B => (a().sendEvent(de.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "delete"
				}), B)),
				xe = (0, e.ZP)("pageShieldPolicy", "post", "/zones/(zoneId)/page_shield/policies").on("success", B => (a().sendEvent(de.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "create"
				}), B)),
				Ie = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				Re = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var Ne = t("../react/app/redux/normalizer.js");
			const Ke = B => B.pageShield.configuration,
				Xe = B => {
					var re;
					return (re = B.pageShield.configuration.data) === null || re === void 0 ? void 0 : re.enabled
				},
				Ze = B => {
					var re;
					return (re = Ke(B)) === null || re === void 0 ? void 0 : re.data
				},
				z = B => B.pageShield.scripts,
				J = B => B.pageShield.script,
				Ee = B => B.pageShield.connections,
				Se = B => B.pageShield.connection,
				ke = B => B.pageShield.policies,
				Ve = B => B.pageShield.policy,
				Ye = (0, Ne.P1)("pageShieldScripts", z),
				lt = (0, Ne.P1)("pageShieldScript", J),
				ut = (0, Ne.P1)("pageShieldConnections", Ee),
				_t = (0, Ne.P1)("pageShieldConnection", Se),
				gt = (0, Ne.P1)("pageShieldPolicies", ke),
				it = (0, Ne.P1)("pageShieldPolicy", Ve),
				je = (B, re) => B === l.SCRIPT_MONITOR ? Ye(re) || [] : ut(re) || [],
				Te = (B, re) => B === l.SCRIPT_MONITOR ? z(re) || [] : Ee(re) || [],
				qe = (B, re) => B === l.SCRIPT_MONITOR ? lt(re) : _t(re),
				dt = B => B.pageShield.domainIntel,
				ct = B => B.pageShield.whoIsRecord,
				$ = (B, re, fe) => {
					var Le;
					const Me = Object.values(fe).map(He => ({
						key: He,
						label: W[He],
						score: B[He]
					})).filter(He => He.score !== void 0 && He.score <= re);
					return re === C && Me.length === 0 && ((Le = B.js_integrity_score) !== null && Le !== void 0 ? Le : 100) <= re && Me.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), Me
				},
				ce = (B, re) => Object.values(re).filter(fe => B[fe] === !0).map(fe => se[fe]),
				ve = B => B === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				Ae = (B, re) => B[c.MagecartScore] !== void 0 && B[c.MagecartScore] <= re || B[c.MalwareScore] !== void 0 && B[c.MalwareScore] <= re || B[c.CryptominingScore] !== void 0 && B[c.CryptominingScore] <= re || B.js_integrity_score !== void 0 && B.js_integrity_score <= re,
				le = ["cdn.jsdelivr.net", "unpkg.com"],
				pe = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				ye = B => {
					if (B.includes("@latest")) {
						const fe = B.split("@latest");
						if (fe.length != 2) return;
						const Le = fe[0].length,
							Me = Le + "@latest".length;
						return [Le, Me]
					}
					if (!!le.some(fe => B.includes(fe)))
						for (const fe of pe) {
							const Le = B.match(fe);
							if (!Le) continue;
							const Me = Le.index;
							if (Me === 0) return null;
							const He = Me + Le[0].length;
							return [Me, He]
						}
				}
		},
		"../react/pages/security/resources/constants.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				_C: function() {
					return l
				},
				_R: function() {
					return c
				},
				dY: function() {
					return _
				},
				fy: function() {
					return h
				},
				ji: function() {
					return s
				},
				pR: function() {
					return f
				},
				pV: function() {
					return R
				},
				rj: function() {
					return S
				},
				zf: function() {
					return A
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				o = t("../../../common/util/types/src/api/phases/fields.tsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				p = t.n(a),
				u = t("../react/utils/translator.tsx"),
				m = t("../react/pages/security/resources/types.ts"),
				i = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx");

			function d(v) {
				for (var C = 1; C < arguments.length; C++) {
					var N = arguments[C] != null ? Object(arguments[C]) : {},
						b = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(N).filter(function(M) {
						return Object.getOwnPropertyDescriptor(N, M).enumerable
					})), b.forEach(function(M) {
						E(v, M, N[M])
					})
				}
				return v
			}

			function E(v, C, N) {
				return C = n(C), C in v ? Object.defineProperty(v, C, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[C] = N, v
			}

			function n(v) {
				var C = r(v, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function r(v, C) {
				if (typeof v != "object" || v === null) return v;
				var N = v[Symbol.toPrimitive];
				if (N !== void 0) {
					var b = N.call(v, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(v)
			}
			const s = 10;
			let l = function(v) {
					return v.MTLS_ACCESS = "mTLS-enforced authentication", v.ZONE_LOCKDOWN = "Zone lockdown", v.USER_AGENT = "User agent blocking", v.EMAIL_VALIDITY = "Disposable email checks", v.IP_BASED = "IP-based rule", v.GEOGRAPHY_BASE = "Geography-based rule", v
				}({}),
				c = function(v) {
					return v.LEAKED_CREDENTIALS = "Leaked Credentials Checks", v
				}({});
			const f = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				_ = [{
					title: "firewall.tools.toast.geography",
					template: l.GEOGRAPHY_BASE,
					trackedEvent: f.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					template: l.IP_BASED,
					trackedEvent: f.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					template: l.USER_AGENT,
					trackedEvent: f.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					template: l.ZONE_LOCKDOWN,
					trackedEvent: f.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				A = {
					[m.X.UI_SECTION]: v => ({
						[l.MTLS_ACCESS]: {
							ruleName: l.MTLS_ACCESS,
							displayName: p().createElement(u.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: p().createElement(u.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${v.account.id}/${v.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[l.ZONE_LOCKDOWN]: {
							ruleName: l.ZONE_LOCKDOWN,
							displayName: p().createElement(u.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							wafRulesOverview: p().createElement(u.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${v.account.id}/configurations/lists`
								}]
							})
						},
						[l.USER_AGENT]: {
							ruleName: l.USER_AGENT,
							displayName: p().createElement(u.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							wafRulesOverview: p().createElement(u.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${v.account.id}/configurations/lists`
								}]
							})
						},
						[l.EMAIL_VALIDITY]: {
							ruleName: l.EMAIL_VALIDITY,
							displayName: p().createElement(u.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: p().createElement(u.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[m.X.WAF_RULES]: {
						[l.MTLS_ACCESS]: {
							description: "custom-rules.templates.rule.mtls_access.name",
							expression: '(not cf.tls_client_auth.cert_verified and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.mtls_access.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[l.ZONE_LOCKDOWN]: {
							description: "custom-rules.templates.rule.zone_lockdown.name",
							expression: '(not ip.src in $0 and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.zone_lockdown.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[l.USER_AGENT]: {
							description: "custom-rules.templates.rule.user_agent.name",
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot))"',
							helper: {
								text: "custom-rules.templates.rule.user_agent.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[l.EMAIL_VALIDITY]: {
							description: "custom-rules.templates.rule.disposable_email.name",
							expression: "(cf.fraud_detection.disposable_email)",
							defaultAction: "block",
							emptySelectValue: !0
						},
						[l.GEOGRAPHY_BASE]: {
							description: "custom-rules.templates.rule.geography.name",
							expression: '(ip.src.asnum eq "") or (ip.src.country eq "") or (ip.src.continent eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						},
						[l.IP_BASED]: {
							description: "firewall.tools.toast.ip",
							expression: '(ip.src eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						}
					}
				},
				S = {
					[m.X.WAF_RULES]: {
						[c.LEAKED_CREDENTIALS]: {
							ruleName: c.LEAKED_CREDENTIALS,
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
						[c.LEAKED_CREDENTIALS]: {
							ruleName: c.LEAKED_CREDENTIALS,
							displayName: p().createElement(u.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: p().createElement(u.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let h = function(v) {
				return v.DISCOVERY = "discovery", v.SEQUENCES = "sequences", v.SCHEMA_VALIDATION = "schema-validation", v.SETTINGS = "settings", v.API_RULES = "api-rules", v.UPGRADE = "upgrade", v
			}({});
			const R = d({}, i.g, {
				[o.df.HttpRequestFirewallManaged]: d({}, i.g[o.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[o.df.HttpRequestFirewallCustom]: d({}, i.g[o.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[o.df.HttpRateLimit]: d({}, i.g[o.df.HttpRateLimit], {
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
			})
		},
		"../react/pages/security/resources/types.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				X: function() {
					return e
				}
			});
			let e = function(o) {
				return o.UI_SECTION = "UI_SECTION", o.WAF_RULES = "WAF_RULES", o
			}({})
		},
		"../react/pages/security/security-analytics/logs/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AS: function() {
					return m
				},
				IK: function() {
					return r
				},
				Ki: function() {
					return a
				},
				Lz: function() {
					return s
				},
				nT: function() {
					return d
				},
				o4: function() {
					return l
				},
				oY: function() {
					return p
				},
				qH: function() {
					return n
				},
				x3: function() {
					return i
				}
			});
			var e = t("../react/pages/security/analytics/labels.ts"),
				o = t("../react/common/constants/analytics/botScoreSrc.ts");
			const a = ["block", "challenge", "jschallenge", "managedChallenge"],
				p = ["miss", "expired", "bypass", "dynamic"],
				u = c => Object.fromEntries(Object.entries(c).map(([f, _]) => [_, f])),
				m = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				i = u(m),
				d = {
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
				E = u(d),
				n = u(o.EG);
			let r = function(c) {
				return c.SAMPLED = "sampled", c.RAW = "raw", c
			}({});
			const s = "security-analytics-log-explorer";
			let l = function(c) {
				return c.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', c.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', c.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', c.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', c.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', c
			}({})
		},
		"../react/pages/security/settings/hooks/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Xu: function() {
					return K
				},
				Io: function() {
					return O
				},
				FQ: function() {
					return Qe
				},
				vU: function() {
					return Y
				},
				M: function() {
					return q
				},
				d7: function() {
					return me
				},
				Oz: function() {
					return j
				},
				Np: function() {
					return We
				},
				WR: function() {
					return M
				},
				vE: function() {
					return X
				},
				bE: function() {
					return Ue
				},
				u_: function() {
					return ae
				},
				kU: function() {
					return ne
				},
				pf: function() {
					return k
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http");
			const a = async Z => {
				var ie, w;
				const te = await (0, o.get)(`/zones/${Z}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((ie = te == null ? void 0 : te.body) === null || ie === void 0 || (w = ie.result) === null || w === void 0 ? void 0 : w.value) === "enabled"
			}, p = async (Z, ie) => (await (0, o.post)(`/zones/${Z}/content-upload-scan/${ie?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), ie), u = async Z => {
				var ie;
				const w = await (0, o.get)(`/zones/${Z}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((ie = w == null ? void 0 : w.body) === null || ie === void 0 ? void 0 : ie.result) || []
			}, m = async (Z, ie) => {
				var w;
				const te = await (0, o.post)(`/zones/${Z}/content-upload-scan/payloads`, {
					body: [ie]
				});
				return (w = te == null ? void 0 : te.body) === null || w === void 0 ? void 0 : w.result
			}, i = async (Z, ie) => (await (0, o.del)(`/zones/${Z}/content-upload-scan/payloads/${ie}`, {
				hideErrorAlert: !0
			}), ie), d = async Z => {
				var ie, w;
				const te = await (0, o.get)(`/zones/${Z}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((ie = te == null ? void 0 : te.body) === null || ie === void 0 || (w = ie.result) === null || w === void 0 ? void 0 : w.enabled)
			}, E = async (Z, ie) => {
				var w, te;
				const he = await (0, o.post)(`/zones/${Z}/leaked-credential-checks`, {
					body: {
						enabled: ie
					}
				});
				return !!((w = he == null ? void 0 : he.body) === null || w === void 0 || (te = w.result) === null || te === void 0 ? void 0 : te.enabled)
			}, n = async Z => {
				var ie;
				const w = await (0, o.get)(`/zones/${Z}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (ie = w == null ? void 0 : w.body) === null || ie === void 0 ? void 0 : ie.result
			}, r = async (Z, ie) => {
				var w;
				const te = await (0, o.post)(`/zones/${Z}/leaked-credential-checks/detections`, {
					body: ie
				});
				return (w = te == null ? void 0 : te.body) === null || w === void 0 ? void 0 : w.result
			}, s = async (Z, ie) => (await (0, o.del)(`/zones/${Z}/leaked-credential-checks/detections/${ie}`, {
				hideErrorAlert: !0
			}), ie), l = async (Z, ie) => {
				await (0, o.put)(`/zones/${Z}/security-center/securitytxt`, {
					body: ie
				})
			}, c = async Z => {
				await (0, o.del)(`/zones/${Z}/security-center/securitytxt`)
			}, f = async Z => (await (0, o.get)(`/zones/${Z}/security-center/securitytxt`)).body;
			var _ = t("webpack/sharing/consume/default/react/react"),
				A = t("webpack/sharing/consume/default/react-redux/react-redux"),
				S = t("../react/pages/security/settings/resources/index.ts"),
				h = t("../react/common/hooks/useZoneEntitlement.ts"),
				R = t("../react/common/hooks/useGate.ts"),
				v = t("../react/pages/security/api-shield/utils/useApiShield.tsx"),
				C = t("../react/pages/security/api-shield/entitlements.tsx"),
				N = t("../../../../node_modules/yup/es/index.js"),
				b = t("../react/utils/translator.tsx");
			const M = () => (0, A.useSelector)(S.ui),
				T = "central_endpoint_list.endpoint_labels_allowed",
				P = "system-and-user-generated-labels",
				L = () => !!(0, R.Z)(P),
				H = () => !!(0, h.Z)(T),
				X = () => {
					const Z = L(),
						ie = H();
					return {
						isLabelsGateOpen: Z,
						hasEndpointLabelsEntitlement: ie,
						hasLabels: Z && ie
					}
				},
				ne = () => {
					const {
						hasApiShields: Z
					} = (0, v.R)(), {
						hasLabels: ie
					} = X(), w = (0, C.Dg)();
					return ie && w && Z
				},
				ae = () => {
					const {
						t: Z
					} = (0, b.QT)(), ie = N.Z_().required(Z("common.field_is_required")).max(24, Z("labels.apply.form.name.error.max_characters")).matches(S.DG, Z("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", Z("labels.apply.form.name.error.cf_forbidden"), he => !S.aW.test(he)), w = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: he => N.Ry().shape({
							[S.n5.NAME]: he ? N.Z_() : ie,
							[S.n5.DESCRIPTION]: he ? N.Z_().optional() : N.Z_().max(150, Z("labels.apply.form.description.error.max_characters"))
						})
					}, te = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[S.N2.NAME]: "",
							[S.N2.SOURCE]: S.W3,
							[S.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => N.Ry().shape({
							[S.N2.NEW_LABEL_NAME]: ie
						})
					};
					return {
						LABELS_APPLY_FORM: w,
						EDIT_LABELS_MODAL_FORM: te
					}
				},
				Y = ({
					modalHeaderFixedHeight: Z = 62,
					modalDefaultPaddings: ie = 16
				} = {}) => {
					const w = (0, _.useRef)(null),
						te = (0, _.useRef)(null),
						[he, ze] = (0, _.useState)(0),
						[Fe, xe] = (0, _.useState)(0),
						Ie = `calc(100vh - ${he}px - ${Fe}px - ${ie}px)`,
						[Re, Ne] = (0, _.useState)("");
					return (0, _.useEffect)(() => {
						const Ke = () => {
							var Xe, Ze, z, J;
							const Ee = w == null || (Xe = w.current) === null || Xe === void 0 ? void 0 : Xe.offsetHeight,
								Se = te == null || (Ze = te.current) === null || Ze === void 0 ? void 0 : Ze.offsetHeight,
								ke = ((z = Ee) !== null && z !== void 0 ? z : 0) + Z,
								Ve = (J = Se) !== null && J !== void 0 ? J : 0;
							ze(ke), xe(Ve)
						};
						return Ke(), window.addEventListener("resize", Ke), () => window.removeEventListener("resize", Ke)
					}, []), {
						searchTerm: Re,
						setSearchTerm: Ne,
						scrollableSectionMaxHeight: Ie,
						topMenuRef: w,
						bottomMenuRef: te
					}
				},
				K = Z => {
					const ie = M(),
						w = (0, e.useQueryClient)(),
						te = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${Z}`,
							queryFn: () => a(Z),
							enabled: ie
						}),
						he = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${Z}`,
							queryFn: () => u(Z),
							enabled: ie && !!(te == null ? void 0 : te.data)
						}),
						ze = (0, e.useMutation)({
							mutationFn: async ({
								enabled: Ie
							}) => await p(Z, Ie),
							onSuccess: Ie => {
								w.setQueryData([`content-scanning-enabled-${Z}`], Ie)
							}
						}),
						Fe = (0, e.useMutation)({
							mutationFn: Ie => m(Z, Ie),
							onSuccess: Ie => {
								w.setQueryData([`content-scanning-detections-${Z}`], Ie)
							}
						}),
						xe = (0, e.useMutation)({
							mutationFn: Ie => i(Z, Ie),
							onSuccess: Ie => {
								var Re;
								const Ne = (Re = w.getQueryData(`content-scanning-detections-${Z}`)) !== null && Re !== void 0 ? Re : [];
								w.setQueryData([`content-scanning-detections-${Z}`], Ne.filter(({
									id: Ke
								}) => Ke !== Ie))
							}
						});
					return {
						entitled: ie,
						loading: te.isLoading || he.isLoading,
						error: te.isError || he.isError,
						enabled: {
							data: te.data,
							toggleEnabled: async Ie => ze.mutateAsync({
								enabled: Ie
							})
						},
						detections: {
							data: he.data,
							add: Fe.mutateAsync,
							delete: xe.mutateAsync,
							loading: Fe.isLoading || xe.isLoading
						}
					}
				},
				me = () => {
					const Z = (0, R.Z)(S.dC),
						ie = (0, A.useSelector)(S.cN),
						w = (0, A.useSelector)(S.bH),
						te = (0, A.useSelector)(S.P3),
						he = (0, A.useSelector)(S.Ri);
					return {
						hasEditPermission: Z && ie,
						isEnabled: Z && te && (w.hasSimilarLeaked || w.hasUsernameAndPasswordLeaked || he)
					}
				},
				q = Z => {
					const ie = me(),
						w = (0, e.useQueryClient)(),
						te = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${Z}`,
							queryFn: () => d(Z),
							enabled: !!ie.isEnabled
						}),
						he = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${Z}`,
							queryFn: () => n(Z),
							enabled: !!ie.isEnabled && !!(te == null ? void 0 : te.data)
						}),
						ze = (0, e.useMutation)({
							mutationFn: ({
								enabled: Ie
							}) => E(Z, Ie),
							onSuccess: Ie => {
								w.setQueryData([`leaked-credentials-enabled-${Z}`], Ie)
							}
						}),
						Fe = (0, e.useMutation)({
							mutationFn: async Ie => await r(Z, Ie),
							onSuccess: Ie => {
								var Re;
								const Ne = (Re = w.getQueryData(`leaked-credentials-detections-${Z}`)) !== null && Re !== void 0 ? Re : [];
								w.setQueryData([`leaked-credentials-detections-${Z}`], [...Ne, Ie])
							}
						}),
						xe = (0, e.useMutation)({
							mutationFn: Ie => s(Z, Ie),
							onSuccess: Ie => {
								var Re;
								const Ne = (Re = w.getQueryData(`leaked-credentials-detections-${Z}`)) !== null && Re !== void 0 ? Re : [];
								w.setQueryData([`leaked-credentials-detections-${Z}`], Ne.filter(({
									id: Ke
								}) => Ke !== Ie))
							}
						});
					return {
						entitled: ie.isEnabled,
						hasEditPermissions: ie.hasEditPermission,
						loading: te.isLoading || he.isLoading,
						error: te.isError || te.isError,
						enabled: {
							data: te.data,
							toggleEnabled: async Ie => ze.mutateAsync({
								enabled: Ie
							})
						},
						detections: {
							data: he.data,
							add: Fe.mutateAsync,
							delete: xe.mutateAsync,
							loading: Fe.isLoading || xe.isLoading
						}
					}
				};
			var G = t("../react/common/selectors/zoneSelectors.ts"),
				V = t("../react/common/utils/useQueryCache.ts"),
				x = t("../react/app/redux/index.ts");
			const ee = "security-txt",
				oe = {
					securityTxt: ({
						zoneId: Z
					}) => [ee, Z]
				},
				j = Z => (0, e.useQuery)({
					queryKey: oe.securityTxt({
						zoneId: Z
					}),
					queryFn: () => f(Z),
					select: ie => ie.result
				}),
				O = () => {
					const Z = (0, x.p4)(G.Cu),
						{
							invalidate: ie
						} = (0, V.o)(oe.securityTxt({
							zoneId: Z
						}));
					return (0, e.useMutation)({
						mutationFn: () => c(Z),
						onSuccess: async () => {
							await ie(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				k = Z => {
					const {
						invalidate: ie
					} = (0, V.o)(oe.securityTxt({
						zoneId: Z
					}));
					return (0, e.useMutation)({
						mutationFn: w => l(Z, w),
						onSuccess: async () => {
							await ie(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var W = t("../../../../node_modules/lodash/isEqual.js"),
				se = t.n(W),
				de = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function Ce(Z) {
				for (var ie = 1; ie < arguments.length; ie++) {
					var w = arguments[ie] != null ? Object(arguments[ie]) : {},
						te = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(w).filter(function(he) {
						return Object.getOwnPropertyDescriptor(w, he).enumerable
					})), te.forEach(function(he) {
						be(Z, he, w[he])
					})
				}
				return Z
			}

			function be(Z, ie, w) {
				return ie = we(ie), ie in Z ? Object.defineProperty(Z, ie, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[ie] = w, Z
			}

			function we(Z) {
				var ie = Be(Z, "string");
				return typeof ie == "symbol" ? ie : String(ie)
			}

			function Be(Z, ie) {
				if (typeof Z != "object" || Z === null) return Z;
				var w = Z[Symbol.toPrimitive];
				if (w !== void 0) {
					var te = w.call(Z, ie || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ie === "string" ? String : Number)(Z)
			}
			const We = Z => {
					const {
						queryKey: ie,
						zoneId: w
					} = (0, de.hL)(Z), {
						isLoading: te,
						isError: he,
						isSuccess: ze,
						data: Fe,
						refetch: xe,
						isRefetching: Ie
					} = (0, e.useQuery)({
						queryKey: ie,
						queryFn: () => de.Mi.getLabels(Ce({
							zoneId: w
						}, Z)),
						onSuccess: () => {
							var Re;
							const Ne = Z == null || (Re = Z.filters) === null || Re === void 0 ? void 0 : Re.source;
							(Ne === S.LABEL_SOURCES.MANAGED || Ne === S.LABEL_SOURCES.USER) && (0, S.Tf)({
								name: S.QJ.FILTER_USER_MANAGED_LABELS,
								product: S.Iv.SECURITY_SETTINGS,
								pageName: S.R.LABELS_LIST,
								type: Ne
							})
						}
					});
					return {
						data: Fe == null ? void 0 : Fe.result,
						errors: Fe == null ? void 0 : Fe.errors,
						paginationData: Fe == null ? void 0 : Fe.result_info,
						isLoading: te,
						isError: he,
						isSuccess: ze,
						refetch: xe,
						isRefetching: Ie
					}
				},
				Ue = ({
					labels: Z,
					preselectedLabels: ie
				}) => {
					const {
						USER: w,
						MANAGED: te
					} = S.LABEL_SOURCES, [he, ze] = (0, _.useState)({
						[w]: [],
						[te]: []
					}), [Fe, xe] = (0, _.useState)(new Set), Ie = Fe.size > 0, [Re, Ne] = (0, _.useState)(!1), Ke = J => {
						xe(Ee => {
							const Se = new Set(Ee);
							return Se.has(J.name) ? Se.delete(J.name) : Se.add(J.name), Se
						})
					}, Xe = J => Fe.has(J.name), Ze = (J, Ee) => {
						const Se = Xe(J) ? 1 : 0;
						return (Xe(Ee) ? 1 : 0) - Se
					}, z = J => {
						ze(Ee => ({
							[w]: [...J ? J[w] : Ee[w]].sort(Ze),
							[te]: [...J ? J[te] : Ee[te]].sort(Ze)
						}))
					};
					return (0, _.useEffect)(() => {
						if (Z && !Re) {
							if (ie) {
								const J = new Set;
								Z.forEach(Ee => {
									ie.some(Se => se()(Se, Ee)) && J.add(Ee.name)
								}), xe(J)
							}
							Ne(!0)
						}
					}, [Z, ie, Re]), (0, _.useEffect)(() => {
						if (Z && Re) {
							const J = Z.reduce((Se, ke) => (ke.source === w ? Se[w].push(ke) : ke.source === te && Se[te].push(ke), Se), {
									[w]: [],
									[te]: []
								}),
								Ee = {
									[w]: J[w].sort(Ze),
									[te]: J[te].sort(Ze)
								};
							ze(Ee)
						}
					}, [w, te, Z, Re]), {
						userAndManagedLabels: he,
						setUserAndManagedLabels: ze,
						toggleSelectedLabel: Ke,
						isLabelSelected: Xe,
						sortLabelsBySelectedStatus: z,
						hasLabelsSelected: Ie
					}
				};
			var Ge = t("../react/pages/security/settings/resources/selectors.ts");
			const Qe = (Z = "") => {
				const ie = (0, x.p4)(Ge.Xs),
					w = ie && (Z == null ? void 0 : Z.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: ie,
					hasDeprecatedParameter: w
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				FQ: function() {
					return d.FQ
				},
				Iv: function() {
					return E.Iv
				},
				M: function() {
					return d.M
				},
				Np: function() {
					return d.Np
				},
				Oz: function() {
					return d.Oz
				},
				QJ: function() {
					return E.QJ
				},
				R: function() {
					return E.R
				},
				Tf: function() {
					return E.Tf
				},
				WR: function() {
					return d.WR
				},
				Xs: function() {
					return E.Xs
				},
				Xu: function() {
					return d.Xu
				},
				ZF: function() {
					return E.ZF
				},
				bE: function() {
					return d.bE
				},
				bH: function() {
					return E.bH
				},
				dC: function() {
					return E.dC
				},
				eC: function() {
					return E.eC
				},
				kU: function() {
					return d.kU
				},
				m8: function() {
					return E.m8
				},
				pf: function() {
					return d.pf
				},
				ui: function() {
					return E.ui
				},
				vE: function() {
					return d.vE
				},
				vc: function() {
					return E.vc
				},
				zF: function() {
					return E.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/app/components/Forbidden.jsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				p = t.n(a),
				u = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = t.n(m),
				d = t("../react/pages/security/settings/hooks/index.ts"),
				E = t("../react/pages/security/settings/resources/index.ts");
			const n = p().lazy(() => Promise.all([t.e(37800), t.e(39074), t.e(2480), t.e(10008), t.e(73598), t.e(94012), t.e(24074), t.e(72019), t.e(73267), t.e(4e4), t.e(3391), t.e(68204), t.e(2515), t.e(60091), t.e(3538), t.e(77216), t.e(39760), t.e(60911), t.e(94923), t.e(37685), t.e(52421), t.e(71449), t.e(9147), t.e(44753), t.e(20263), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				r = () => {
					const {
						t: s
					} = (0, m.useI18n)(), l = (0, e.xk)("waf");
					return p().createElement(u.T3, {
						parentPageLabel: s("navigation.zone.security"),
						title: s("navigation.zone.security.settings"),
						type: "narrow"
					}, l.read ? p().createElement(n, null) : p().createElement(o.Z, null))
				};
			y.ZP = r
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Mi: function() {
					return h
				},
				hL: function() {
					return S
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				a = t("../react/common/utils/useQueryCache.ts"),
				p = t("../react/pages/security/settings/resources/constants.ts"),
				u = t("../react/common/hooks/useAccountId.ts"),
				m = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				i = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const d = {
				labels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var E = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function s(v, C) {
				if (v == null) return {};
				var N = l(v, C),
					b, M;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(v);
					for (M = 0; M < T.length; M++) b = T[M], !(C.indexOf(b) >= 0) && (!Object.prototype.propertyIsEnumerable.call(v, b) || (N[b] = v[b]))
				}
				return N
			}

			function l(v, C) {
				if (v == null) return {};
				var N = {},
					b = Object.keys(v),
					M, T;
				for (T = 0; T < b.length; T++) M = b[T], !(C.indexOf(M) >= 0) && (N[M] = v[M]);
				return N
			}

			function c(v) {
				for (var C = 1; C < arguments.length; C++) {
					var N = arguments[C] != null ? Object(arguments[C]) : {},
						b = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(N).filter(function(M) {
						return Object.getOwnPropertyDescriptor(N, M).enumerable
					})), b.forEach(function(M) {
						f(v, M, N[M])
					})
				}
				return v
			}

			function f(v, C, N) {
				return C = _(C), C in v ? Object.defineProperty(v, C, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[C] = N, v
			}

			function _(v) {
				var C = A(v, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function A(v, C) {
				if (typeof v != "object" || v === null) return v;
				var N = v[Symbol.toPrimitive];
				if (N !== void 0) {
					var b = N.call(v, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(v)
			}
			const S = v => {
					const C = (0, e.p4)(o.Cu),
						N = (0, u.F)(),
						b = R.labels(c({
							accountId: N,
							zoneId: C
						}, v ? c({}, v) : {})),
						M = (0, a.o)(b);
					return c({
						zoneId: C,
						queryKey: b,
						batchInvalidateLabels: async () => {
							await M.batchInvalidate({
								queryKeysToPredicateInvalidate: [p.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, M)
				},
				h = {
					getLabels: async v => {
						var C, N, b, M;
						let {
							zoneId: T,
							hideErrorAlert: P = !0
						} = v, L = s(v, ["zoneId", "hideErrorAlert"]);
						return (await m.get(d.labels.toUrl({
							zoneId: T
						}), {
							parameters: {
								page: L == null ? void 0 : L.page,
								per_page: L == null ? void 0 : L.per_page,
								with_mapped_resource_counts: L == null ? void 0 : L.with_mapped_resource_counts,
								filter: L == null || (C = L.filters) === null || C === void 0 ? void 0 : C.search,
								source: (0, n.sQ)(L == null || (N = L.filters) === null || N === void 0 ? void 0 : N.source),
								order: L == null || (b = L.sort) === null || b === void 0 ? void 0 : b.id,
								direction: (L == null ? void 0 : L.sort) ? (L == null || (M = L.sort) === null || M === void 0 ? void 0 : M.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: P
						})).body
					},
					getLabel: async v => {
						let {
							zoneId: C,
							labelName: N,
							hideErrorAlert: b = !0
						} = v, M = s(v, ["zoneId", "labelName", "hideErrorAlert"]);
						const T = (0, n.mm)(N) ? d.managedLabel.toUrl({
							zoneId: C,
							labelName: N
						}) : d.userLabel.toUrl({
							zoneId: C,
							labelName: N
						});
						return (await m.get(T, {
							parameters: {
								with_mapped_resource_counts: M == null ? void 0 : M.with_mapped_resource_counts
							},
							hideErrorAlert: b
						})).body
					},
					editLabel: async ({
						zoneId: v,
						label: C,
						replace: N
					}) => {
						const {
							name: b
						} = C, M = s(C, ["name"]);
						return (await (N ? m.put : m.patch)(d.userLabel.toUrl({
							zoneId: v,
							labelName: C.name
						}), {
							body: M
						})).body
					},
					deleteLabel: async ({
						zoneId: v,
						labelName: C
					}) => (await m.del(d.userLabel.toUrl({
						zoneId: v,
						labelName: C
					}))).body,
					createLabel: async v => {
						let {
							zoneId: C
						} = v, N = s(v, ["zoneId"]);
						const {
							product: b
						} = N, M = s(N, ["product"]);
						return (await m.post(d.userLabels.toUrl({
							zoneId: C
						}), {
							body: [M]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: v,
						user: C,
						managed: N,
						operationIds: b,
						replace: M
					}) => (await (M ? m.put : m.post)(d.operationsLinkedToLabels.toUrl({
						zoneId: v
					}), {
						body: c({}, C ? {
							user: {
								labels: C
							}
						} : {}, N ? {
							managed: {
								labels: N
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: b
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: v,
						labelName: C,
						operationIds: N
					}) => {
						const b = (0, n.mm)(C) ? d.managedLabelOperations.toUrl({
							zoneId: v,
							labelName: C
						}) : d.userLabelOperations.toUrl({
							zoneId: v,
							labelName: C
						});
						return (await m.put(b, {
							body: {
								selector: {
									include: {
										operation_ids: N
									}
								}
							}
						})).body
					}
				},
				R = {
					labels: v => {
						let {
							accountId: C,
							zoneId: N
						} = v, b = s(v, ["accountId", "zoneId"]);
						return [p.IQ.LABELS, C, N, ...(0, E.isEmpty)(b) ? [] : [b]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return _
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return i
				},
				GE: function() {
					return N
				},
				IQ: function() {
					return p
				},
				KV: function() {
					return m
				},
				LABELS_LIST_TOASTS: function() {
					return l
				},
				LABEL_SOURCES: function() {
					return u
				},
				QH: function() {
					return c
				},
				V: function() {
					return R
				},
				W3: function() {
					return a
				},
				_8: function() {
					return s
				},
				_c: function() {
					return v
				},
				aW: function() {
					return A
				},
				dC: function() {
					return M
				},
				gY: function() {
					return C
				},
				j8: function() {
					return d
				},
				jz: function() {
					return f
				},
				n5: function() {
					return S
				},
				om: function() {
					return E
				},
				w: function() {
					return o
				},
				zF: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let o = function(T) {
				return T.EXPOSED_CREDENTIALS = "exposed_credentials", T.CONTENT_SCANNING = "content_scanning", T
			}({});
			const a = "all";
			let p = function(T) {
					return T.LABELS = "labels", T
				}({}),
				u = function(T) {
					return T.USER = "user", T.MANAGED = "managed", T
				}({}),
				m = function(T) {
					return T.SOURCE = "source", T
				}({}),
				i = function(T) {
					return T.NAME = "name", T.SOURCE = "source", T.NEW_LABEL_NAME = "newLabelName", T
				}({}),
				d = function(T) {
					return T.ENDPOINT = "endpoint", T.METHOD = "method", T.OPERATION_ID = "operationId", T
				}({}),
				E = function(T) {
					return T.NAME = "name", T.MAPPED_RESOURCES = "mapped_resources.operations", T.SOURCE = "source", T.APPLY = "apply", T
				}({});
			const s = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: E.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[m.SOURCE]: a
					}
				},
				filters: m,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let l = function(T) {
				return T.CREATED_LABEL = "createdLabel", T.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", T.DELETED_LABEL = "deletedLabel", T.APPLIED_LABEL = "appliedLabel", T.EDITED_LABEL = "editedLabel", T.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", T
			}({});
			const c = "650px",
				f = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				_ = /^[A-Za-z0-9-]+$/,
				A = /^cf-/;
			let S = function(T) {
				return T.NAME = "name", T.DESCRIPTION = "description", T
			}({});
			const h = "all";
			let R = function(T) {
				return T.METHOD = "method", T.HOSTNAME = "hostname", T
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
						[R.METHOD]: h,
						[R.HOSTNAME]: h
					}
				},
				filters: R
			};
			let C = function(T) {
				return T.TITLE = "title", T.DESCRIPTION = "description", T.SUBMIT = "submit", T
			}({});
			const N = 1e3,
				b = {
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
				M = "exposed-credentials-module"
		},
		"../react/pages/security/settings/resources/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return l
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
					return r
				},
				zF: function() {
					return e.zF
				},
				QJ: function() {
					return f
				},
				R: function() {
					return n
				},
				LABEL_SOURCES: function() {
					return e.LABEL_SOURCES
				},
				eC: function() {
					return c
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
					return s
				},
				Xs: function() {
					return S.Xs
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
					return S.bH
				},
				Mb: function() {
					return a.Mb
				},
				ui: function() {
					return S.ui
				},
				P3: function() {
					return S.P3
				},
				Ri: function() {
					return S.Ri
				},
				cN: function() {
					return S.cN
				},
				m8: function() {
					return A
				},
				Tf: function() {
					return _
				},
				$E: function() {
					return a.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				o = t("../react/pages/security/settings/resources/types.ts"),
				a = t("../react/pages/security/settings/resources/utils.ts"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(p);

			function m(h) {
				for (var R = 1; R < arguments.length; R++) {
					var v = arguments[R] != null ? Object(arguments[R]) : {},
						C = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(v).filter(function(N) {
						return Object.getOwnPropertyDescriptor(v, N).enumerable
					})), C.forEach(function(N) {
						i(h, N, v[N])
					})
				}
				return h
			}

			function i(h, R, v) {
				return R = d(R), R in h ? Object.defineProperty(h, R, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[R] = v, h
			}

			function d(h) {
				var R = E(h, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function E(h, R) {
				if (typeof h != "object" || h === null) return h;
				var v = h[Symbol.toPrimitive];
				if (v !== void 0) {
					var C = v.call(h, R || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(h)
			}
			let n = function(h) {
					return h.LABELS_LIST = "Labels List page", h.LABELS_APPLY = "Labels Apply page", h.LABELS_SIDE_MODAL = "Labels Side Modal", h.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", h.LABELS_OPERATION_DETAILS = "Operation Details page", h
				}({}),
				r = function(h) {
					return h.API_SHIELD = "API Shield", h.SECURITY_SETTINGS = "Security Settings", h
				}({}),
				s = function(h) {
					return h.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", h.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", h.OPERATIONS_TABLE_ROW = "Operations table row", h.OPERATION_DETAILS_PAGE = "Operation details page", h
				}({}),
				l = function(h) {
					return h.UPSERT = "upsert", h.OVERWRITE = "overwrite", h
				}({}),
				c = function(h) {
					return h.SINGLE = "single", h.MULTIPLE = "multiple", h
				}({}),
				f = function(h) {
					return h.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", h.DELETE_LABEL = "delete a user label in the settings page", h.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", h.CREATE_LABEL_CLICKED = "click create label button in the settings page", h.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", h.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", h.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", h.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", h.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", h.OPEN_LABELS_SIDE_MODAL = "open labels side modal", h.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", h.CREATE_NEW_LABEL = "create a new label", h
				}({});
			const _ = ({
					name: h,
					product: R,
					category: v = "user journey",
					pageName: C,
					from: N,
					write_strategy: b,
					type: M,
					target: T
				}) => {
					u().sendEvent(h, m({
						category: v,
						pageName: C,
						product: R
					}, N ? {
						from: N
					} : {}, b ? {
						write_strategy: b
					} : {}, M ? {
						type: M
					} : {}, T ? {
						target: T
					} : {}))
				},
				A = () => {
					var h;
					return (h = Object.values(f)) === null || h === void 0 ? void 0 : h.flat()
				};
			var S = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				P3: function() {
					return d
				},
				Ri: function() {
					return E
				},
				Xs: function() {
					return r
				},
				bH: function() {
					return n
				},
				cN: function() {
					return i
				},
				ui: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				o = t("../react/utils/url.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				p = t("../react/pages/security/settings/resources/constants.ts"),
				u = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const m = s => {
					const l = (0, e.RO)(s),
						c = !!(0, a.rV)(s, "rulesets.file_upload_scan_allowed"),
						f = !!(0, a.BF)(s, "rulesets.file_upload_scan_allowed");
					return (0, o.el)(window.location.pathname) ? l && (c || f) : f
				},
				i = s => Number((0, a.rV)(s, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				d = s => (0, a.rV)(s, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				E = s => (0, a.rV)(s, "rulesets.leaked_credential_checks_allowed"),
				n = s => (0, u.z1)(p.dC)(s) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, a.rV)(s, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, a.rV)(s, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				r = s => !!(0, u.z1)("deprecate-security-level")(s)
		},
		"../react/pages/security/settings/resources/types.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				T: function() {
					return o
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let o = function(a) {
				return a.ENABLED = "enabled", a.CONTACT = "contact", a.EXPIRES = "expires", a.ENCRYPTION = "encryption", a.ACKNOWLEDGMENTS = "acknowledgments", a.CANONICAL = "canonical", a.HIRING = "hiring", a.POLICY = "policy", a.PREFERRED_LANGUAGES = "preferred_languages", a
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return s
				},
				Mb: function() {
					return l
				},
				N2: function() {
					return R
				},
				Q4: function() {
					return f
				},
				QF: function() {
					return r
				},
				Vy: function() {
					return A
				},
				Wv: function() {
					return c
				},
				mm: function() {
					return h
				},
				sQ: function() {
					return S
				},
				vc: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				a = t("../react/pages/security/settings/routes.tsx"),
				p = t("../react/pages/security/settings/resources/constants.ts"),
				u = t("../react/pages/security/settings/resources/types.ts"),
				m = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function i(v) {
				for (var C = 1; C < arguments.length; C++) {
					var N = arguments[C] != null ? Object(arguments[C]) : {},
						b = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(N).filter(function(M) {
						return Object.getOwnPropertyDescriptor(N, M).enumerable
					})), b.forEach(function(M) {
						d(v, M, N[M])
					})
				}
				return v
			}

			function d(v, C, N) {
				return C = E(C), C in v ? Object.defineProperty(v, C, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[C] = N, v
			}

			function E(v) {
				var C = n(v, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function n(v, C) {
				if (typeof v != "object" || v === null) return v;
				var N = v[Symbol.toPrimitive];
				if (N !== void 0) {
					var b = N.call(v, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(v)
			}
			const r = {
					[u.T.ENABLED]: !0,
					[u.T.CONTACT]: [""],
					[u.T.EXPIRES]: ""
				},
				s = {
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
				l = v => e.Ry({
					[u.T.CONTACT]: e.IX().of(e.Z_().required(v("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, v("security_txt.fields.contact.format_error"))),
					[u.T.EXPIRES]: e.hT().required(v("common.required")).min(new Date, v("security_txt.fields.expires.min_error"))
				}),
				c = v => {
					const C = {};
					for (const N in v) C[N] = Array.isArray(v[N]) ? v[N].filter(b => !!b) : v[N];
					return i({}, C, {
						expires: (0, m.DZ)(v.expires)
					})
				},
				f = (v, C, N) => {
					const b = [...new Set([u.T.CONTACT, u.T.EXPIRES, ...Object.values(u.T)])],
						M = Object.entries(v).sort(([T], [P]) => b.indexOf(T) - b.indexOf(P)).filter(([T, P]) => !!s[T] && !!P && (!Array.isArray(P) || !!P.length)).map(([T, P]) => Array.isArray(P) ? P.map(L => `${N(s[T].label)}: ${L}`).join(`
`) : `${N(s[T].label)}: ${P}`).join(`
`);
					(0, o.yH)(`Cloudflare_${C}_security.txt`, M, "text/plain;charset=utf-8")
				};
			let _ = function(v) {
				return v.CREATED = "created security.txt", v.ENABLED = "enabled security.txt", v.DISABLED = "disabled security.txt", v.DOWNLOADED = "downloaded security.txt", v.UPDATED = "updated security.txt", v.DELETED = "deleted security.txt", v
			}({});
			const A = v => (v == null ? void 0 : v.source) === p.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (v == null ? void 0 : v.source) === p.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				S = v => v === p.W3 ? void 0 : v,
				h = v => p.aW.test(v),
				R = v => {
					switch (v) {
						case p.w.CONTENT_SCANNING:
							return a.Z.CONTENT_SCANNING;
						case p.w.EXPOSED_CREDENTIALS:
							return a.Z.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Sb: function() {
					return E
				},
				Vj: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(n) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(s).filter(function(c) {
						return Object.getOwnPropertyDescriptor(s, c).enumerable
					})), l.forEach(function(c) {
						p(n, c, s[c])
					})
				}
				return n
			}

			function p(n, r, s) {
				return r = u(r), r in n ? Object.defineProperty(n, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = s, n
			}

			function u(n) {
				var r = m(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(n, r) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var l = s.call(n, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			const i = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				d = {
					product: "WAF Managed Rules"
				},
				E = ({
					event: n,
					category: r = "user journey",
					product: s = "waf",
					productName: l = "Managed Rules",
					additionalData: c
				}) => {
					o().sendEvent(n, a({
						category: r,
						product: s,
						productName: l
					}, c || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				D: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CLICK_MENU_ITEM_SHARE = "click on share item", o.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", o.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", o.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", o.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", o.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", o.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", o.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", o.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", o.CLICK_ON_DELETE_RULESET = "click on delete ruleset", o.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", o
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/stream/actionTypes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ReplaceVideos = "stream.replace_videos", o.PrependVideo = "stream.prepend_video", o.UpdateVideo = "stream.update_video", o.UpdateVideoPending = "steam.update_video_pending", o.RemoveVideos = "stream.remove_videos", o.StoreUploader = "stream.store_uploader", o.UpsertUploads = "stream.upsert_uploads", o.RemoveUploads = "stream.remove_uploads", o.UpdateUploadProgress = "stream.update_upload_progress", o.UploadViaUrl = "stream.upload_via_url", o.SetLoading = "stream.set_loading", o.SetStorageLoading = "stream.set_storage_loading", o.SetStorage = "stream.set_storage", o.SetPage = "stream.set_page", o.SetPausedUploads = "stream.set_paused_uploads", o.RemovePausedUpload = "stream.remove_paused_upload", o.SetRequestTimestamp = "stream.set_request_timestamp", o.ResetState = "stream.reset_state", o
			}({})
		},
		"../react/pages/stream/reducer.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return n
				},
				nY: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				o = t("../react/pages/stream/actionTypes.ts"),
				a = t("../react/pages/stream/util/pager.ts");

			function p(r) {
				for (var s = 1; s < arguments.length; s++) {
					var l = arguments[s] != null ? Object(arguments[s]) : {},
						c = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), c.forEach(function(f) {
						u(r, f, l[f])
					})
				}
				return r
			}

			function u(r, s, l) {
				return s = m(s), s in r ? Object.defineProperty(r, s, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = l, r
			}

			function m(r) {
				var s = i(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function i(r, s) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var c = l.call(r, s || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			const d = "stream",
				E = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(r = E, s) {
				switch (s.type) {
					case o.U.ResetState:
						return E;
					case o.U.SetStorageLoading:
						const {
							storageLoading: l
						} = s;
						return p({}, r, {
							storageLoading: l
						});
					case o.U.SetStorage:
						return p({}, r, {
							storage: s.payload ? p({}, r.storage, s.payload) : void 0
						});
					case o.U.ReplaceVideos:
						return p({}, r, {
							videos: s.videos
						});
					case o.U.PrependVideo:
						return p({}, r, {
							videos: [s.video, ...r.videos].filter((c, f) => f < a.FJ)
						});
					case o.U.UpdateVideo:
						return p({}, r, {
							videos: r.videos.map(c => c.uid === s.video.uid ? s.video : c)
						});
					case o.U.UpdateVideoPending:
						return p({}, r, {
							videoUpdateStatuses: p({}, r.videoUpdateStatuses, {
								[s.uid]: s.status
							})
						});
					case o.U.RemoveVideos:
						return p({}, r, {
							videos: r.videos.filter(c => !s.ids.includes(c.uid))
						});
					case o.U.SetLoading:
						return p({}, r, {
							loading: s.loading
						});
					case o.U.SetRequestTimestamp:
						return p({}, r, {
							requestTimestamp: s.requestTimestamp
						});
					case o.U.UploadViaUrl:
						return r;
					default:
						return (0, e.h)(s, r)
				}
			}
		},
		"../react/pages/stream/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Id: function() {
					return p
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return u
				},
				QL: function() {
					return d
				},
				_A: function() {
					return f
				},
				_Q: function() {
					return r
				},
				aM: function() {
					return c
				},
				bM: function() {
					return i
				},
				bO: function() {
					return s
				},
				bm: function() {
					return l
				},
				mX: function() {
					return _
				},
				pW: function() {
					return m
				},
				xW: function() {
					return E
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/pages/stream/reducer.ts");
			const p = A => A[a.nY],
				u = A => p(A).videos,
				m = A => p(A).videoUpdateStatuses,
				i = A => p(A).loading,
				d = A => p(A).requestTimestamp,
				E = A => p(A).storageLoading,
				n = A => p(A).storage,
				r = A => (0, o.BF)(A, "stream.enabled") || (0, e.bC)(A),
				s = A => (0, e.Le)(A, "stream", "connect"),
				l = A => (0, e.Le)(A, "stream", "stream-4371"),
				c = A => (0, e.Le)(A, "stream", "public-details-enabled"),
				f = A => !!(0, e.Le)(A, "stream", "llhls"),
				_ = A => {
					const S = n(A);
					return S !== void 0 && S.limitMins > S.currentMins
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
					return o
				}
			});
			const e = 30;

			function o(p, u, m) {
				const i = {
					search: m,
					limit: e.toString()
				};
				return u !== void 0 && (i.end = u), i
			}

			function a(p, u, m) {
				return {
					limit: e.toString(),
					search: m,
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
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", o.POOL_TABLE = "click on expandable row on pool", o.CREATE_MONITOR_LINK = "click on create a monitor", o.EDIT_MONITOR_LINK = "click on edit a monitor", o.EDIT_MONITOR = "edit monitor", o.CREATE_MONITOR = "create monitor", o.CREATE_POOL_LINK = "click on create a pool", o.EDIT_POOL_LINK = "click on edit a pool", o.EDIT_POOL = "edit pool", o.CREATE_POOL = "create pool", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return a
				},
				X: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let a = function(u) {
				return u.CREATE = "create waiting room", u.UPDATE = "update waiting room", u.EVENTS = "view waiting rooms events", u.ANALYTICS = "view waiting room analytics", u.GENERATE_PREVIEW = "generate waiting room preview link", u
			}({});
			const p = async u => {
				await o().sendEvent(u, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				N3: function() {
					return d
				},
				P: function() {
					return n
				},
				Xh: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function a(r) {
				for (var s = 1; s < arguments.length; s++) {
					var l = arguments[s] != null ? Object(arguments[s]) : {},
						c = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), c.forEach(function(f) {
						p(r, f, l[f])
					})
				}
				return r
			}

			function p(r, s, l) {
				return s = u(s), s in r ? Object.defineProperty(r, s, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = l, r
			}

			function u(r) {
				var s = m(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function m(r, s) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var c = l.call(r, s || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			const i = "TURNSTILE";
			let d = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const E = ({
					name: r,
					product: s = i,
					category: l = "user journey",
					page: c,
					additionalData: f = {}
				}) => {
					o().sendEvent(r, a({
						category: l,
						page: c,
						product: s
					}, f || {}))
				},
				n = () => {
					var r;
					return (r = Object.values(d)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				d: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				default: (0, e.BC)`/${"accountId"}/`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zone-versioning/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$e: function() {
					return N
				},
				$h: function() {
					return h
				},
				G: function() {
					return C
				},
				M3: function() {
					return M
				},
				Tr: function() {
					return A
				},
				UY: function() {
					return f
				},
				bH: function() {
					return r
				},
				fv: function() {
					return T
				},
				hF: function() {
					return R
				},
				iw: function() {
					return l
				},
				m7: function() {
					return n
				},
				re: function() {
					return v
				},
				tp: function() {
					return c
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				o = t("../../../../node_modules/reselect/lib/index.js"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/app/components/SidebarNav/permissions.ts"),
				u = t("../react/common/selectors/entitlementsSelectors.ts");

			function m(P) {
				for (var L = 1; L < arguments.length; L++) {
					var H = arguments[L] != null ? Object(arguments[L]) : {},
						X = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(H).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(H, ne).enumerable
					})), X.forEach(function(ne) {
						i(P, ne, H[ne])
					})
				}
				return P
			}

			function i(P, L, H) {
				return L = d(L), L in P ? Object.defineProperty(P, L, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[L] = H, P
			}

			function d(P) {
				var L = E(P, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function E(P, L) {
				if (typeof P != "object" || P === null) return P;
				var H = P[Symbol.toPrimitive];
				if (H !== void 0) {
					var X = H.call(P, L || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(P)
			}
			const n = P => (0, a.nA)(P) ? (0, u.p1)(P) && (0, p.$n)(P, "zone_versioning", "versioning") : !1,
				r = P => P.zoneVersioning.zoneApplications,
				s = (0, e.P1)("zoneApplications", r),
				l = P => P.zoneVersioning.zoneVersions,
				c = (0, e.P1)("zoneVersions", l),
				f = (0, o.P1)(c, P => {
					if (P) return P.filter(L => L.status == "V")
				}),
				_ = P => P.zoneVersioning.environments,
				A = P => P.zoneVersioning.environments.isRequesting,
				S = (0, e.P1)("environments", _),
				h = (0, o.P1)(s, P => {
					if (P) {
						if (P.length === 1) return P[0];
						P.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${P.length}`))
					}
					return null
				}),
				R = (0, o.P1)(S, P => P ? P.environments : []),
				v = P => {
					var L;
					return (L = P.zoneVersioning) === null || L === void 0 ? void 0 : L.zoneVersionSelector
				},
				C = (0, o.P1)(v, c, (P, L) => {
					if (!(P == null ? void 0 : P.isVersion) || !L) return null;
					const H = L.find(X => {
						if (X.version === P.selectedVersion && X.locked) return !0
					});
					return H ? m({}, H, {
						isLocked: !0
					}) : null
				}),
				N = (0, o.P1)(c, R, (P, L) => !L || !P ? [] : P.map(H => {
					const X = [];
					for (const ne in L) L[ne].version === H.version && X.push(L[ne]);
					return m({}, H, {
						environments: X
					})
				})),
				b = P => P.zoneVersioning.WAFMigrationStatus,
				M = (0, e.P1)("WAFMigrationStatus", b),
				T = P => P.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$2: function() {
					return N
				},
				CI: function() {
					return v
				},
				IS: function() {
					return i
				},
				L7: function() {
					return u
				},
				Oj: function() {
					return s
				},
				QV: function() {
					return c
				},
				X$: function() {
					return h
				},
				X6: function() {
					return E
				},
				d4: function() {
					return l
				},
				fE: function() {
					return d
				},
				im: function() {
					return A
				},
				lv: function() {
					return f
				},
				rL: function() {
					return n
				},
				wW: function() {
					return m
				}
			});

			function e(b) {
				for (var M = 1; M < arguments.length; M++) {
					var T = arguments[M] != null ? Object(arguments[M]) : {},
						P = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(T).filter(function(L) {
						return Object.getOwnPropertyDescriptor(T, L).enumerable
					})), P.forEach(function(L) {
						o(b, L, T[L])
					})
				}
				return b
			}

			function o(b, M, T) {
				return M = a(M), M in b ? Object.defineProperty(b, M, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[M] = T, b
			}

			function a(b) {
				var M = p(b, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function p(b, M) {
				if (typeof b != "object" || b === null) return b;
				var T = b[Symbol.toPrimitive];
				if (T !== void 0) {
					var P = T.call(b, M || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(b)
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
							kv: "https://developers.cloudflare.com/kv",
							mTLS: "https://developers.cloudflare.com/workers/runtime-apis/bindings/mtls",
							queues: "https://developers.cloudflare.com/queues/configuration/javascript-apis",
							r2: "https://developers.cloudflare.com/r2/api/workers/workers-api-reference",
							rateLimiting: "https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit",
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
				i = "40rem",
				d = {
					pricing: {
						requests: .15,
						duration: 12.5,
						egress: .045,
						storage: .2,
						read_units: .2,
						write_units: 1,
						delete: 1,
						currency: "USD"
					}
				},
				E = {
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
				r = {
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
					}, r),
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
				l = {
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
				c = {
					enableWorkers: "enable workers",
					setupSubdomain: "set up subdomain",
					selectPlan: "select workers plan",
					selectTemplate: "select workers template",
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
					clickSubmitError: "WCI:attempt invalid build configuration"
				},
				f = {
					insufficientData: "insufficient data to create/update trigger",
					createRepoConnectionError: "error creating repo connection",
					createTokenError: "error creating token",
					createUpdateTriggerError: "error creating/updating trigger",
					updateEnvironmentVariablesError: "error updating trigger environment variables",
					createWorkerError: "error creating worker",
					buildWorkerError: "error building worker"
				},
				_ = "workers.dev",
				A = "YYYY-MM-DD HH:mm:SS ZZ",
				S = "active",
				h = ["bundled", "unbound", "standard"],
				R = null,
				v = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let C = function(b) {
				return b[b.NONE = 0] = "NONE", b[b.MISS = 1] = "MISS", b[b.EXPIRED = 2] = "EXPIRED", b[b.UPDATING = 3] = "UPDATING", b[b.STALE = 4] = "STALE", b[b.HIT = 5] = "HIT", b[b.IGNORED = 6] = "IGNORED", b[b.BYPASS = 7] = "BYPASS", b[b.REVALIDATED = 8] = "REVALIDATED", b[b.DYNAMIC = 9] = "DYNAMIC", b[b.STREAM_HIT = 10] = "STREAM_HIT", b[b.DEFERRED = 11] = "DEFERRED", b
			}({});
			const N = [C.HIT, C.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return i
				},
				L: function() {
					return a
				},
				Q9: function() {
					return p
				},
				_j: function() {
					return u
				},
				ky: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = d => `${d}.workers.dev`,
				a = (d, E, n) => `${n?`${n}.`:""}${d}.${o(E)}`,
				p = (d, E, n) => `https://${a(d,E,n)}`,
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
					serviceDetailsSettingsObservabilityV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#observability`,
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
				m = "https://cron-triggers.cloudflareworkers.com",
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
						workerTriggers: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/triggers`
					},
					certificates: (0, e.BC)`/zones/${"zoneId"}/ssl/certificate_packs/${"certId"}`,
					createApiToken: (0, e.BC)`/user/tokens`,
					createTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails`,
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
					enableDurableObjects: (0, e.BC)`/accounts/${"accountId"}/flags/products/edgeworker/changes`,
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
					return p
				},
				l3: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const a = async ([i, d]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: i,
					variables: d
				})
			})).body, p = async (...i) => (await e.get(...i)).body, u = i => async (d, E) => {
				const n = await fetch(d, E).then(r => r.json());
				return i.assertDecode(n)
			}, m = async (...i) => (await p(...i)).result;
			y.ZP = {
				fetcher: i => Array.isArray(i) ? m(...i) : m(i)
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

					function p(_) {
						return !!(_ && _ !== document && _.nodeName !== "HTML" && _.nodeName !== "BODY" && "classList" in _ && "contains" in _.classList)
					}

					function u(_) {
						var A = _.type,
							S = _.tagName;
						return !!(S == "INPUT" && a[A] && !_.readOnly || S == "TEXTAREA" && !_.readOnly || _.isContentEditable)
					}

					function m(_) {
						_.getAttribute("is-focus-visible") !== "" && _.setAttribute("is-focus-visible", "")
					}

					function i(_) {
						_.getAttribute("is-focus-visible") === "" && _.removeAttribute("is-focus-visible")
					}

					function d(_) {
						p(document.activeElement) && m(document.activeElement), t = !0
					}

					function E(_) {
						t = !1
					}

					function n(_) {
						!p(_.target) || (t || u(_.target)) && m(_.target)
					}

					function r(_) {
						!p(_.target) || _.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), i(_.target))
					}

					function s(_) {
						document.visibilityState == "hidden" && (e && (t = !0), l())
					}

					function l() {
						document.addEventListener("mousemove", f), document.addEventListener("mousedown", f), document.addEventListener("mouseup", f), document.addEventListener("pointermove", f), document.addEventListener("pointerdown", f), document.addEventListener("pointerup", f), document.addEventListener("touchmove", f), document.addEventListener("touchstart", f), document.addEventListener("touchend", f)
					}

					function c() {
						document.removeEventListener("mousemove", f), document.removeEventListener("mousedown", f), document.removeEventListener("mouseup", f), document.removeEventListener("pointermove", f), document.removeEventListener("pointerdown", f), document.removeEventListener("pointerup", f), document.removeEventListener("touchmove", f), document.removeEventListener("touchstart", f), document.removeEventListener("touchend", f)
					}

					function f(_) {
						_.target.nodeName.toLowerCase() !== "html" && (t = !1, c())
					}
					document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", E, !0), document.addEventListener("pointerdown", E, !0), document.addEventListener("touchstart", E, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", s, !0), l(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function y(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && y(F)
			})
		},
		"../react/utils/bootstrap.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return o
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return p
				},
				gm: function() {
					return a
				}
			});
			const e = () => {
					var u, m, i;
					return (u = window) === null || u === void 0 || (m = u.bootstrap) === null || m === void 0 || (i = m.data) === null || i === void 0 ? void 0 : i.security_token
				},
				o = () => {
					var u, m, i;
					return !!((u = t.g.bootstrap) === null || u === void 0 || (m = u.data) === null || m === void 0 || (i = m.user) === null || i === void 0 ? void 0 : i.id)
				},
				a = () => {
					var u, m;
					return !!((u = t.g.bootstrap) === null || u === void 0 || (m = u.data) === null || m === void 0 ? void 0 : m.is_kendo)
				},
				p = () => {
					var u, m, i, d;
					return (u = window) === null || u === void 0 || (m = u.bootstrap) === null || m === void 0 || (i = m.data) === null || i === void 0 || (d = i.user) === null || d === void 0 ? void 0 : d.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				O5: function() {
					return p
				},
				Xm: function() {
					return a
				},
				kT: function() {
					return i
				},
				wV: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				a = () => (o() || "").indexOf("C0002") !== -1,
				p = () => (o() || "").indexOf("C0003") !== -1,
				u = () => (o() || "").indexOf("C0004") !== -1,
				m = () => (o() || "").indexOf("C0005") !== -1,
				i = n => {
					const r = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				d = () => {
					var n;
					const r = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				E = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AI: function() {
					return R
				},
				Kd: function() {
					return r
				},
				S8: function() {
					return h
				},
				ZW: function() {
					return d
				},
				ay: function() {
					return v
				},
				fh: function() {
					return C
				},
				i_: function() {
					return s
				},
				ly: function() {
					return n
				},
				th: function() {
					return i
				},
				ti: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				a = t("../../../common/intl/intl-types/src/index.ts"),
				p = t("../../../common/util/types/src/utils/index.ts"),
				u = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m = t("../../../../node_modules/cookie/index.js");
			const i = "cf-sync-locale-with-cps",
				d = a.Q.en_US,
				E = "en_US",
				n = "cf-locale";

			function r() {
				const M = (0, m.parse)(document.cookie);
				return u.Z.get(n) || M[n] || null
			}

			function s(M) {
				document.cookie = (0, m.serialize)(n, M, {
					path: "/",
					maxAge: 31536e3
				}), u.Z.set(n, M)
			}

			function l() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const c = M => (0, p.Yd)(a.Q).find(T => a.Q[T] === M) || E,
				f = [],
				_ = [],
				A = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				S = {
					test: [...A, ..._, ...f],
					development: [...A, ..._, ...f],
					staging: [...A, ..._, ...f],
					production: [...A, ..._]
				},
				h = M => {
					const T = a.Q[M];
					return S.production.includes(T)
				},
				R = () => Object.keys(a.Q).filter(M => h(M)),
				v = M => {
					const T = a.Q[M];
					return _.includes(T)
				},
				C = M => N[M],
				N = {
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
				b = o().locale();
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
			}), o().locale(b)
		},
		"../react/utils/translator.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				QT: function() {
					return c
				},
				Vb: function() {
					return d
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return i
				},
				_m: function() {
					return r
				},
				cC: function() {
					return s
				},
				oc: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = t("../../../common/intl/intl-core/src/Translator.ts"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				p = t.n(a),
				u = t("../flags.ts");
			const m = new o.Z({
				pseudoLoc: (0, u.J8)("is_pseudo_loc")
			});

			function i(f, ..._) {
				return m.t(f, ..._)
			}
			const d = m;

			function E(f, ..._) {
				return markdown(i(f, _))
			}

			function n(f) {
				if (Number(f) !== 0) {
					if (f % 86400 == 0) return i("time.num_days", {
						smart_count: f / 86400
					});
					if (f % 3600 == 0) return i("time.num_hours", {
						smart_count: f / 3600
					});
					if (f % 60 == 0) return i("time.num_minutes", {
						smart_count: f / 60
					})
				}
				return i("time.num_seconds", {
					smart_count: f
				})
			}

			function r(f, _) {
				return f in _ ? _[f] : void 0
			}
			const s = a.Trans,
				l = a.I18n,
				c = a.useI18n
		},
		"../react/utils/url.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Ct: function() {
					return v
				},
				Fl: function() {
					return ee
				},
				KT: function() {
					return j
				},
				NF: function() {
					return _
				},
				Nw: function() {
					return h
				},
				Pd: function() {
					return S
				},
				Uh: function() {
					return G
				},
				Y_: function() {
					return f
				},
				e1: function() {
					return R
				},
				el: function() {
					return H
				},
				hW: function() {
					return ne
				},
				pu: function() {
					return oe
				},
				qR: function() {
					return L
				},
				td: function() {
					return A
				},
				uW: function() {
					return Y
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				p = t("../react/pages/stream/routes.ts"),
				u = t("../react/pages/r2/routes.ts"),
				m = t("../react/pages/zoneless-workers/routes.ts"),
				i = t("../react/pages/pages/routes.ts"),
				d = t("../react/pages/d1/routes.ts");

			function E(O) {
				for (var k = 1; k < arguments.length; k++) {
					var W = arguments[k] != null ? Object(arguments[k]) : {},
						se = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && se.push.apply(se, Object.getOwnPropertySymbols(W).filter(function(de) {
						return Object.getOwnPropertyDescriptor(W, de).enumerable
					})), se.forEach(function(de) {
						n(O, de, W[de])
					})
				}
				return O
			}

			function n(O, k, W) {
				return k = r(k), k in O ? Object.defineProperty(O, k, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[k] = W, O
			}

			function r(O) {
				var k = s(O, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function s(O, k) {
				if (typeof O != "object" || O === null) return O;
				var W = O[Symbol.toPrimitive];
				if (W !== void 0) {
					var se = W.call(O, k || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(O)
			}
			const {
				endsWithSlash: l
			} = a.default, c = (O, k) => {
				const W = O.replace(l, "").split("/");
				return W.slice(0, 2).concat([k]).concat(W.slice(3)).join("/")
			}, f = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), _ = O => `/${O.replace(l,"").replace(/^\//,"")}`, A = O => h("add-site", O), S = O => h("billing", O), h = (O, k) => k ? `/${k}${O?`/${O}`:""}` : `/?to=/:account/${O}`, R = () => {
				const O = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return O ? O[1] : null
			}, v = (O, k) => o().stringify(E({}, o().parse(O), k)), C = (O = "") => O.toString().replace(/([\/]{1,})$/, ""), N = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], b = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, M = /^\/(\w{32,})(\/[^.]*)?/, T = O => N.includes(O), P = O => !T(O), L = O => !T(O) && M.test(O), H = O => !T(O) && b.test(O), X = O => b.exec(O), ne = O => {
				if (H(O)) return O.split("/").filter(k => k.length > 0)[1]
			}, ae = O => M.exec(O), Y = O => {
				if (L(O)) {
					const k = ae(O);
					if (k) return k[1]
				}
			}, K = O => L(O) && O.split("/")[2] === "register-domain", me = O => K(O) ? O.split("/") : null, q = O => {
				if (H(O)) {
					const [, , , k, W, se, de, Ce] = O.split("/");
					return k === "traffic" && W === "load-balancing" && se === "pools" && de === "edit" && Ce
				}
			}, G = O => {
				const k = me(O);
				if (k) return k[3]
			}, V = (O, k) => {
				var W, se;
				return ((W = O.pattern.match(/\:/g)) !== null && W !== void 0 ? W : []).length - ((se = k.pattern.match(/\:/g)) !== null && se !== void 0 ? se : []).length
			}, x = [...Object.values(p.C), ...Object.values(u._j), ...Object.values(m._j), ...Object.values(i._j), ...Object.values(d._)].sort(V);

			function ee(O) {
				if (!P(O)) return O;
				for (const Ce of x)
					if (Ce.expression.test(O)) return Ce.pattern;
				const k = me(O);
				if (k) {
					const [, , Ce, , ...be] = k;
					return `/:accountId/${Ce}/:domainName/${be.join("/")}`
				}
				if (q(O)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const se = X(O);
				if (se) {
					const [, , , , Ce] = se;
					return `/:accountId/:zoneName${Ce||""}`
				}
				const de = ae(O);
				if (de) {
					const [, , Ce] = de;
					return `/:accountId${Ce||""}`
				}
				return O
			}

			function oe(O) {
				if (!!O) try {
					const W = O.split(".").pop();
					if (W && W.length > 0) return W
				} catch {}
			}

			function j(O, k = document.location.href) {
				try {
					const W = new URL(O),
						se = new URL(k);
					if (W.origin === se.origin) return `${W.pathname}${W.search}${W.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return d
				},
				y: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = t("../react/common/hooks/useGate.ts"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				m = t.n(u);
			const i = /^\/domainconnect\/v2\/domaintemplates\//i,
				d = "domain-connect-redirect",
				E = () => {
					const n = !!(0, p.Z)("domain-connect-redirect-gate"),
						r = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						!n || i.test(r.pathname) && a.Z.set(d, r, 60 * 1e3)
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
					return p
				},
				b: function() {
					return u
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				o = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function a() {
				var m, i, d, E, n, r;
				return (m = window) === null || m === void 0 || (i = m.bootstrap) === null || i === void 0 || (d = i.data) === null || d === void 0 || (E = d.user) === null || E === void 0 || (n = E.betas) === null || n === void 0 || (r = n.some) === null || r === void 0 ? void 0 : r.call(n, s => s === "zone_level_access_beta")
			}

			function p() {
				const m = !!(0, e.Z)("zone-level-access");
				return a() || m
			}

			function u(m) {
				const i = !!(0, o.z1)("zone-level-access")(m);
				return a() || i
			}
		},
		"../utils/getDashVersion.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				p: function() {
					return a
				},
				t: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var p, u;
					return (p = window) === null || p === void 0 || (u = p.build) === null || u === void 0 ? void 0 : u.dashVersion
				},
				a = () => {
					var p;
					return ((0, e.parse)((p = document) === null || p === void 0 ? void 0 : p.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Wi: function() {
					return Ae
				},
				IM: function() {
					return ve
				},
				yV: function() {
					return $
				},
				Ug: function() {
					return ct
				},
				v_: function() {
					return ce
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				a = t("../react/utils/bootstrap.ts"),
				p = t("../react/app/providers/storeContainer.js"),
				u = t("../react/common/selectors/languagePreferenceSelector.ts"),
				m = t("../flags.ts"),
				i = t("../../../../node_modules/cookie/index.js"),
				d = t("../react/utils/url.ts"),
				E = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../../../../node_modules/lodash-es/memoize.js"),
				s = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				l = t("../utils/getDashVersion.ts"),
				c = t("../react/common/selectors/accountSelectors.ts"),
				f = t("../react/common/selectors/entitlementsSelectors.ts");

			function _(le) {
				for (var pe = 1; pe < arguments.length; pe++) {
					var ye = arguments[pe] != null ? Object(arguments[pe]) : {},
						B = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(ye).filter(function(re) {
						return Object.getOwnPropertyDescriptor(ye, re).enumerable
					})), B.forEach(function(re) {
						A(le, re, ye[re])
					})
				}
				return le
			}

			function A(le, pe, ye) {
				return pe = S(pe), pe in le ? Object.defineProperty(le, pe, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : le[pe] = ye, le
			}

			function S(le) {
				var pe = h(le, "string");
				return typeof pe == "symbol" ? pe : String(pe)
			}

			function h(le, pe) {
				if (typeof le != "object" || le === null) return le;
				var ye = le[Symbol.toPrimitive];
				if (ye !== void 0) {
					var B = ye.call(le, pe || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (pe === "string" ? String : Number)(le)
			}
			const R = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				v = (0, r.Z)(le => {
					try {
						return R.assertDecode((0, i.parse)(le))
					} catch (pe) {
						return console.error(pe), {}
					}
				}),
				C = le => (pe, ye, B) => {
					try {
						const He = window.location.pathname,
							tt = (0, p.bh)().getState(),
							Je = v(document.cookie),
							ft = _({
								page: (0, d.Fl)(B.page || window.location.pathname),
								dashVersion: (0, l.t)()
							}, Je);
						if (pe === "identify") {
							var re, fe;
							const st = {
								gates: (0, s.T2)(tt) || {},
								country: (re = t.g) === null || re === void 0 || (fe = re.bootstrap) === null || fe === void 0 ? void 0 : fe.ip_country
							};
							return le(pe, ye, _({}, ft, st, B))
						} else {
							const st = {
								accountId: (0, d.uW)(He),
								zoneName: (0, d.hW)(He),
								domainName: (0, d.Uh)(He)
							};
							if ((0, d.qR)(He)) {
								var Le;
								const rt = (0, c.D0)(tt);
								st.isEntAccount = !!(rt == null || (Le = rt.meta) === null || Le === void 0 ? void 0 : Le.has_enterprise_zones) || (0, f.p1)(tt)
							}
							if ((0, d.el)(He)) {
								var Me;
								const rt = (0, E.nA)(tt);
								st.zoneId = rt == null ? void 0 : rt.id, st.plan = rt == null || (Me = rt.plan) === null || Me === void 0 ? void 0 : Me.legacy_id
							}
							return le(pe, ye, _({}, ft, st, B))
						}
					} catch (He) {
						return console.error(He), le(pe, ye, B)
					}
				},
				N = le => async (pe, ye, B) => {
					try {
						return await le(pe, ye, B)
					} catch (re) {
						if (console.error(re), !ce()) throw re;
						return {
							status: "rejected",
							reason: re
						}
					}
				};
			var b = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				M = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				T = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				P = t("../react/common/middleware/sparrow/errors.ts"),
				L = t("../react/pages/caching/tracking.tsx"),
				H = t("../react/pages/dns/dns-records/tracking.ts"),
				X = t("../react/pages/home/alerts/tracking.ts"),
				ne = t("../react/pages/home/configurations/lists/tracking.ts"),
				ae = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				Y = t("../react/pages/home/domain-registration/tracking.ts"),
				K = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				me = t("../react/pages/hyperdrive/tracking.ts"),
				q = t("../react/pages/magic/network-monitoring/constants.ts"),
				G = t("../react/pages/magic/overview/tracking.ts"),
				V = t("../react/pages/magic/packet-captures/constants.ts"),
				x = t("../react/pages/page-rules/tracking.ts"),
				ee = t("../react/pages/pages/constants.ts"),
				oe = t("../react/pages/pipelines/tracking.ts"),
				j = t("../react/pages/security-center/BlockedContent/constants.ts"),
				O = t("../react/pages/security-center/tracking.ts"),
				k = t("../react/pages/security/api-shield/tracking.ts"),
				W = t("../react/pages/security/bots/tracking.ts"),
				se = t("../react/pages/security/resources/constants.tsx"),
				de = t("../react/pages/security/page-shield/resources/index.ts"),
				Ce = t("../react/pages/security/security-analytics/logs/constants.ts"),
				be = t("../react/pages/security/settings/index.tsx"),
				we = t("../react/pages/shared-config/sparrowEvents.tsx"),
				Be = t("../react/pages/spectrum/tracking.tsx"),
				We = t("../react/pages/traffic/argo/tracking.ts"),
				Ue = t("../react/pages/traffic/load-balancing/tracking.ts"),
				Ge = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Qe = t("../react/pages/turnstile/tracking.ts"),
				Z = t("../react/pages/zoneless-workers/constants.ts"),
				ie = t("../react/app/components/AccountHome/tracking.ts"),
				w = t("../react/pages/security/waf/managed-rules/resources/tracking.ts");
			const he = ((le, pe, ...ye) => n.eg.union([n.eg.literal(le), n.eg.literal(pe), ...ye.map(B => n.eg.literal(B))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", ie.gX.SPARROW_PROJECTS_TABLE_CLICK, ie.gX.SPARROW_EMPTY_STATE_CTA_CLICK, ie.gX.SPARROW_PRODUCT_CARD_CLICK, ie.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Z.QV.clickedDownloadAnalytics, Z.QV.clickedPrintAnalytics, Z.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Z.QV.addWCITriggerToExistingWorker, Z.QV.updateWCITrigger, Z.QV.deleteWCITrigger, Z.QV.addWCITriggerToNewWorker, Z.QV.createWCIBuildForNewWorker, Z.QV.completedWCIBuildForNewWorker, Z.QV.changedDefaultConfigurations, ee.QV.toggledPagesSmartPlacement, ee.QV.downloadDemoProject, Z.QV.clickCreateWorkerFromRepoNextStep, Z.QV.clickCreateWorkerFromRepoPreviousStep, Z.QV.clickCreateNewSCMConnection, Z.QV.redirectFromSCMOAuth, Z.QV.clickSubmitError, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", W.N3.INITIAL_FETCH_SCORES, W.N3.FETCH_CONFIGURATION, W.N3.INITIAL_FETCH_TIME_SERIES, W.N3.INITIAL_FETCH_ATTRIBUTES, W.N3.UPDATE_SETTINGS, W.N3.DELETE_RULE, W.N3.UPDATE_RULE, W.N3.FETCH_RULES, W.N3.CONFIGURE_BOT_MANAGEMENT, W.N3.WAF_RULES_REDIRECT, K.F.TOGGLE_TCP_PROTECTION, K.F.GET_TCP_PROTECTION_PREFIXES, K.F.CREATE_TCP_PROTECTION_PREFIXES, K.F.CREATE_TCP_PROTECTION_PREFIX, K.F.UPDATE_TCP_PROTECTION_PREFIX, K.F.DELETE_TCP_PROTECTION_PREFIX, K.F.DELETE_TCP_PROTECTION_PREFIXES, K.F.GET_TCP_PROTECTION_ALLOWLIST, K.F.CREATE_TCP_PROTECTION_ALLOWLIST, K.F.UPDATE_TCP_PROTECTION_ALLOWLIST, K.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, K.F.DELETE_TCP_PROTECTION_ALLOWLIST, K.F.GET_SYN_PROTECTION_RULES, K.F.GET_SYN_PROTECTION_RULE, K.F.CREATE_SYN_PROTECTION_RULE, K.F.UPDATE_SYN_PROTECTION_RULE, K.F.DELETE_SYN_PROTECTION_RULE, K.F.GET_TCP_FLOW_PROTECTION_RULES, K.F.GET_TCP_FLOW_PROTECTION_RULE, K.F.CREATE_TCP_FLOW_PROTECTION_RULE, K.F.UPDATE_TCP_FLOW_PROTECTION_RULE, K.F.DELETE_TCP_FLOW_PROTECTION_RULE, K.F.GET_SYN_PROTECTION_FILTERS, K.F.GET_SYN_PROTECTION_FILTER, K.F.CREATE_SYN_PROTECTION_FILTER, K.F.UPDATE_SYN_PROTECTION_FILTER, K.F.DELETE_SYN_PROTECTION_FILTER, K.F.GET_TCP_FLOW_PROTECTION_FILTERS, K.F.GET_TCP_FLOW_PROTECTION_FILTER, K.F.CREATE_TCP_FLOW_PROTECTION_FILTER, K.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, K.F.DELETE_TCP_FLOW_PROTECTION_FILTER, K.F.GET_DNS_PROTECTION_RULES, K.F.GET_DNS_PROTECTION_RULE, K.F.CREATE_DNS_PROTECTION_RULE, K.F.UPDATE_DNS_PROTECTION_RULE, K.F.DELETE_DNS_PROTECTION_RULE, de.FV.MANAGE_PAGE_SHIELD_POLICY, de.FV.CONFIGURE_PAGE_SHIELD, de.FV.VIEW_DETECTED_CONNECTIONS, de.FV.VIEW_DETECTED_SCRIPTS, de.FV.VIEW_PAGE_SHIELD_POLICIES, de.FV.VIEW_PAGE_SHIELD_SETTINGS, de.FV.OPEN_MUTABLE_VERSION_TOOLTIP, de.FV.SHOW_MUTABLE_VERSION_TOOLTIP, ne.y.CREATE_LIST, ne.y.DELETE_LIST, ne.y.ADD_LIST_ITEM, ne.y.DELETE_LIST_ITEM, me.KO.PURCHASE_WORKERS_PAID, me.KO.LIST_CONFIGS, me.KO.CREATE_HYPERDRIVE_CONFIG, me.KO.VIEW_CONFIG_DETAILS, me.KO.UPDATE_CACHING_SETTINGS, me.KO.DELETE_HYPERDRIVE_CONFIG, me.KO.CLICK_HYPERDRIVE_DOCUMENTATION, me.KO.CLICK_GET_STARTED_GUIDE, me.KO.CLICK_CONNECTIVITY_GUIDES, me.KO.CLICK_QUICK_LINK, Be.N.CNAME, Be.N.IP_ADDRESS, Be.N.LB, Be.N.UPDATE_CNAME, Be.N.UPDATE_IP_ADDRESS, Be.N.UPDATE_LB, Be.N.DISABLE, L.N.TIERED_CACHE, L.N.CACHE_PURGE, L.N.CACHE_ANALYTICS, ...(0, Qe.P)(), ...(0, T.x4)(), ...(0, be.m8)(), Ge.N.CREATE, Ge.N.EVENTS, Ge.N.ANALYTICS, Ge.N.UPDATE, Ge.N.GENERATE_PREVIEW, O.R.INITIATE_URL_SCAN, O.R.LOAD_SCAN_INFO, O.v.EXPAND_INSIGHT_ROW, O.v.ONE_CLICK_RESOLVE_BUTTON, O.v.FOLLOW_RESOLVE_URL, O.v.MANAGE_INSIGHT, O.v.CLICK_SCAN_NOW, O.v.CLICK_EXPORT_INSIGHTS, O.v.BULK_ARCHIVE, O.v.CLICK_DETAILS_BUTTON, k.Fj[k.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, k.Fj[k.kq.ENDPOINT_MANAGEMENT].detailedMetrics, k.Fj[k.kq.ENDPOINT_MANAGEMENT].createEndpoint, k.Fj[k.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, k.Fj[k.kq.ENDPOINT_MANAGEMENT].deployRouting, k.Fj[k.kq.ENDPOINT_MANAGEMENT].deleteRouting, k.Fj[k.kq.API_DISCOVERY].viewDiscoveredEndpoints, k.Fj[k.kq.API_DISCOVERY].saveDiscoveredEndpoint, k.Fj[k.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, k.Fj[k.kq.SCHEMA_VALIDATION].viewSchemasList, k.Fj[k.kq.SCHEMA_VALIDATION].uploadSchema, k.Fj[k.kq.SCHEMA_VALIDATION].viewSchemaAdoption, k.Fj[k.kq.SCHEMA_VALIDATION].downloadSchema, k.Fj[k.kq.SCHEMA_VALIDATION].deleteSchema, k.Fj[k.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, k.Fj[k.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, k.Fj[k.kq.SEQUENCE_ANALYTICS].viewSequencesPage, k.Fj[k.kq.JWT_VALIDATION].viewJWTRules, k.Fj[k.kq.JWT_VALIDATION].addJWTRule, k.Fj[k.kq.JWT_VALIDATION].editJWTRule, k.Fj[k.kq.JWT_VALIDATION].deleteJWTRule, k.Fj[k.kq.JWT_VALIDATION].reprioritizeJWTRule, k.Fj[k.kq.JWT_VALIDATION].viewJWTConfigs, k.Fj[k.kq.JWT_VALIDATION].addJWTConfig, k.Fj[k.kq.JWT_VALIDATION].editJWTConfig, k.Fj[k.kq.JWT_VALIDATION].deleteJWTConfig, k.Fj[k.kq.SETTINGS].redirectToFirewallRulesTemplate, k.Fj[k.kq.SETTINGS].redirectToPages, k.Fj[k.kq.SETTINGS].listSessionIdentifiers, k.Fj[k.kq.SETTINGS].listRequestsContainingSessionIdentifiers, k.Fj[k.kq.SETTINGS].addOrRemoveSessionIdentifiers, k.Fj[k.kq.SETTINGS].redirectToCustomRules, k.Fj[k.kq.SETTINGS].listAllFallthroughSchemas, k.Fj[k.kq.SEQUENCE_RULES].listSequenceRules, k.Fj[k.kq.SEQUENCE_RULES].deleteSequenceRule, k.Fj[k.kq.SEQUENCE_RULES].reorderSequenceRule, k.Fj[k.kq.SEQUENCE_RULES].createSequenceRule, k.Fj[k.kq.SEQUENCE_RULES].editSequenceRule, Ue.Z.ANALYTICS, Ue.Z.CREATE_AND_DEPLOY, Ue.Z.CREATE_MONITOR_LINK, Ue.Z.CREATE_MONITOR, Ue.Z.CREATE_POOL_LINK, Ue.Z.CREATE_POOL, Ue.Z.EDIT_MONITOR, Ue.Z.EDIT_POOL, Ue.Z.LOAD_BALANCING_TABLE, Ue.Z.POOL_TABLE, Ue.Z.EDIT_MONITOR_LINK, Ue.Z.EDIT_POOL_LINK, X.y.SECONDARY_DNS_NOTIFICATION_CREATE, X.y.SECONDARY_DNS_NOTIFICATION_UPDATE, X.y.SECONDARY_DNS_NOTIFICATION_DELETE, H.U.ZONE_TRANSFER_SUCCESS, H.U.DNS_RECORD_CREATE, H.U.DNS_RECORD_UPDATE, H.U.DNS_RECORD_DELETE, ae.Y.PEER_DNS_CREATE, ae.Y.PEER_DNS_UPDATE, ae.Y.PEER_DNS_DELETE, ae.Y.ZONE_TRANSFER_ENABLE, ae.Y.ZONE_TRANSFER_DISABLE, We.V.ARGO_ENABLEMENT, We.V.ARGO_GEO_ANALYTICS_FETCH, We.V.ARGO_GLOBAL_ANALYTICS_FETCH, V.X.VIEW_BUCKETS_LIST, V.X.CREATE_BUCKET, V.X.VALIDATE_BUCKET, V.X.DELETE_BUCKET, V.X.VIEW_CAPTURES_LIST, V.X.CREATE_SIMPLE_CAPTURE, V.X.CREATE_FULL_CAPTURE, V.X.VIEW_FULL_CAPTURE, V.X.DOWNLOAD_SIMPLE_CAPTURE, q.bK.VIEW_RULES, q.bK.CREATE_RULE, q.bK.UPDATE_RULE, q.bK.DELETE_RULE, q.bK.VIEW_CONFIGURATION, q.bK.CREATE_CONFIGURATION, q.bK.UPDATE_CONFIGURATION, q.bK.DELETE_CONFIGURATION, G.r8.VIEW_ALERTS, G.r8.VIEW_ALERTS_HISTORY, G.r8.MAGIC_OVERVIEW_ANALYTICS, G.VZ.CREATE_SITE, G.VZ.CREATE_TUNNEL, G.VZ.CREATE_STATIC_ROUTE, Ce.o4.CLICK_ADAPTIVE_SAMPLING, Ce.o4.CLICK_TO_LOG_EXPLORER_BANNER, Ce.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, Ce.o4.CLICK_SWITCH_TO_RAW_LOGS, Ce.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", Y.U.REGISTER_DOMAIN_SEARCH_SUBMIT, Y.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, Y.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, Y.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, Y.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, Y.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, Y.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, Y.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, Y.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, Y.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, Y.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, Y.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, Y.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, Y.U.REGISTER_DOMAIN_CHECKOUT_ERROR, Y.U.TRANSFER_DOMAIN_CHANGE_STEP, Y.U.RENEW_DOMAIN_COMPLETED, Y.U.RESTORE_DOMAIN_INIT, Y.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, Y.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, Y.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, Y.U.RESTORE_DOMAIN_FAILURE, Y.U.RESTORE_DOMAIN_COMPLETED, Y.U.DOMAIN_DELETE_INIT, Y.U.DOMAIN_DELETE_COMPLETED, Y.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, Y.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, Y.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, Y.U.DOMAIN_DELETE_CONFIRM_DELETE, Y.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, Y.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, Y.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, Y.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, Y.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, Y.U.DOMAIN_MOVE_START_FLOW, Y.U.DOMAIN_MOVE_OPEN_DOCS, Y.U.DOMAIN_MOVE_CLOSE_FLOW, Y.U.DOMAIN_MOVE_PROGRESS_FLOW, Y.U.DOMAIN_MOVE_SUBMIT, Y.U.DOMAIN_MOVE_INITIATE_SUCCESS, Y.U.DOMAIN_MOVE_INITIATE_ERROR, Y.U.DOMAIN_MOVE_CANCEL, Y.U.DOMAIN_MOVE_CANCEL_SUCCESS, Y.U.DOMAIN_MOVE_CANCEL_ERROR, Y.U.ACTION_CENTER_NAVIGATE, Y.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, Y.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, Y.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, oe.KO.CLICK_GET_STARTED_GUIDE, oe.KO.CLICK_PIPELINE_DOCUMENTATION, oe.KO.CLICK_QUICK_LINK, oe.KO.CREATE_PIPELINE, oe.KO.DELETE_PIPELINE, oe.KO.LIST_PIPELINES, oe.KO.VIEW_PIPELINE, b.S.EXISTING_DOMAIN, b.S.NEW_DOMAIN, b.S.WAF_RULESET, b.S.WORKERS, b.S.PAGES, b.S.R2, b.S.ACCOUNT_MEMBERS, x._.TEMPLATE_PRODUCT_SELECTED, x._.TEMPLATE_SELECTED, x._.TEMPLATE_SAVE_DRAFT, x._.TEMPLATE_CANCEL, x._.TEMPLATE_DEPLOY, we.D.CLICK_GO_BACK_SHARE_MODAL, we.D.CLICK_MENU_ITEM_SHARE, we.D.CLICK_ON_CANCEL_SHARE_MODAL, we.D.CLICK_ON_CLOSE_SHARE_MODAL, we.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, we.D.CLICK_ON_DELETE_RULESET, we.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, we.D.CLICK_ON_EDIT_SHARE_PERMISSION, we.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, we.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, we.D.CLICK_ON_SHARE_TABLE_ROW, se.pR.CLICK_GEOGRAPHICAL_TEMPLATE, se.pR.CLICK_IP_TEMPLATE, se.pR.CLICK_USER_AGENT_TEMPLATE, se.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, be.vc.CREATED, be.vc.ENABLED, be.vc.DISABLED, be.vc.DELETED, be.vc.UPDATED, be.vc.DOWNLOADED, j.Gk.REQUEST_REVIEW, j.Gk.COPY_URL, M.v.FIELD, M.v.OPERATOR, w.Vj.SHOW_LCC_MIGRATION_BANNER, w.Vj.CLICK_LCC_DOCUMENTATION, w.Vj.CLICK_LCC_UPGRADE_GUIDE, w.Vj.SHOW_LCC_MIGRATION_WARNING),
				ze = n.eg.exactStrict(n.eg.object({
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
					isStripeBilling: n.eg.boolean.optional,
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
					referring_domain: n.eg.any.optional,
					referrer: n.eg.any.optional,
					registrationPeriod: n.eg.any.optional,
					registrationStatus: n.eg.any.optional,
					rel: n.eg.any.optional,
					relativeTimeRange: n.eg.any.optional,
					resultRank: n.eg.number.optional,
					"rocket_loader-recommendation": n.eg.any.optional,
					role: n.eg.any.optional,
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
					scm_type: n.eg.any.optional,
					existing_connection_total: n.eg.any.optional,
					invalid_fields: n.eg.any.optional,
					is_retry: n.eg.any.optional,
					changed_fields: n.eg.any.optional,
					rulesetName: n.eg.string.optional,
					isECCRuleset: n.eg.boolean.optional,
					isLCCEnabled: n.eg.boolean.optional,
					isECCEnabled: n.eg.boolean.optional
				})),
				Fe = (le, pe) => {
					const [ye, B] = xe(pe);
					let re, fe;
					return (0, n.nM)(he.decode(le)) && (re = new P.Uh(le)), B && B.length > 0 && (fe = new P.oV(le, B)), [ye, re, fe]
				},
				xe = le => {
					const pe = ze.decode(le);
					if ((0, n.nM)(pe)) {
						const ye = pe.left.map(({
							context: B
						}) => B.map(({
							key: re
						}) => re)).reduce((B, re) => B.concat(re), []).filter(B => B in le);
						return [Ie(ye, le), ye]
					}
					return [le, []]
				},
				Ie = (le, pe) => Object.entries(pe).reduce((ye, [B, re]) => (le.includes(B) || (ye[B] = re), ye), {}),
				Re = le => (pe, ye, B) => {
					const [re, fe, Le] = Fe(ye, B);
					if (fe) throw fe;
					return Le && console.error(Le), le(pe, ye, re)
				};
			var Ne = t("../react/utils/zaraz.ts");
			const Ke = {
					identify: !0
				},
				Xe = le => (pe, ye, B) => (Ke[ye] || Ne.tg === null || Ne.tg === void 0 || Ne.tg.track(ye, B), le(pe, ye, B));
			var Ze = t("../react/common/selectors/userSelectors.ts");
			const z = "pageview",
				J = "create zone",
				Ee = "create user",
				Se = {
					[z]: !0,
					[J]: !0,
					[Ee]: !0
				},
				ke = le => {
					var pe;
					return !!((pe = le.gates.assignments) === null || pe === void 0 ? void 0 : pe["dx-enable-google-tag-manager"])
				},
				Ve = le => {
					const pe = /\|MCMID\|([0-9]+)\|/,
						ye = le.match(pe);
					return ye ? ye[1] : void 0
				},
				Ye = le => {
					var pe;
					const {
						deviceViewport: ye,
						page: B,
						previousPage: re,
						pageName: fe,
						utm_campaign: Le,
						_ga: Me,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": He
					} = le, {
						origin: tt
					} = window.location, Je = (0, Ze.PR)((0, p.bh)().getState());
					return {
						event: re !== void 0 && B !== re ? "virtual_page_view" : "page_load",
						device_type: ye,
						hostname: tt,
						language: navigator.language,
						locale: (0, u.r)((0, p.bh)().getState()),
						page_location: B ? `${tt}${B}` : "[redacted]",
						page_path: B ? `${B}` : "[redacted]",
						page_referrer: re ? `${tt}/${re}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: fe || "[redacted]",
						page_url: B ? `${tt}${B}` : "[redacted]",
						query: Le ? `?utm_campaign=${Le}` : "[redacted]",
						user_properties: {
							ga_client_id: (pe = Me) !== null && pe !== void 0 ? pe : void 0,
							ga_client_id_s: Me ? `s${Me}` : void 0,
							user_id: Ae() ? Je == null ? void 0 : Je.id : void 0,
							ecid: He ? Ve(He) : void 0
						}
					}
				},
				lt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				ut = le => {
					const {
						status: pe
					} = le;
					return pe === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				_t = (le, pe) => {
					switch (le) {
						case "pageview":
							return Ye(pe);
						case "create zone":
							return lt();
						case "create user":
							return ut(pe);
						default:
							return
					}
				},
				gt = le => (pe, ye, B) => {
					if (Se[ye]) {
						var re;
						const fe = _t(ye, B);
						fe && ((re = window.dataLayer) === null || re === void 0 || re.push(fe))
					}
					return le(pe, ye, B)
				};
			var it = t("../react/utils/cookiePreferences.ts");

			function je(le) {
				for (var pe = 1; pe < arguments.length; pe++) {
					var ye = arguments[pe] != null ? Object(arguments[pe]) : {},
						B = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(ye).filter(function(re) {
						return Object.getOwnPropertyDescriptor(ye, re).enumerable
					})), B.forEach(function(re) {
						Te(le, re, ye[re])
					})
				}
				return le
			}

			function Te(le, pe, ye) {
				return pe = qe(pe), pe in le ? Object.defineProperty(le, pe, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : le[pe] = ye, le
			}

			function qe(le) {
				var pe = dt(le, "string");
				return typeof pe == "symbol" ? pe : String(pe)
			}

			function dt(le, pe) {
				if (typeof le != "object" || le === null) return le;
				var ye = le[Symbol.toPrimitive];
				if (ye !== void 0) {
					var B = ye.call(le, pe || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (pe === "string" ? String : Number)(le)
			}
			const ct = le => {
					const pe = ke((0, p.bh)().getState());
					o().init(je({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: ce() && !(0, a.gm)() && Ae(),
						middlewares: [N, Re, C, Xe, ...pe ? [gt] : []]
					}, le))
				},
				$ = () => {
					o().identify(je({}, (0, e.getAttribution)(), {
						locale: (0, u.r)((0, p.bh)().getState()),
						isCloudflare: !!(0, m.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				ce = () => !0,
				ve = () => {
					(0, it.kT)("sparrow_id")
				},
				Ae = () => (0, it.Xm)()
		},
		"../utils/initStyles.ts": function(F, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				p = document.head || document.getElementsByTagName("head")[0],
				u = i => {
					const d = [];
					for (let E in i.colors) {
						const n = i.colors[E];
						if (Array.isArray(n) && E !== "categorical")
							for (let r = 0; r < n.length; ++r) d.push(`--cf-${E}-${r}:${n[r]};`)
					}
					return d.join(`
`)
				},
				m = () => {
					const i = (0, e.Yc)(),
						d = `
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
      ${u(e.Rl)}
    }
    
    .mode-transition *,
    .mode-transition body,
    .mode-transition input,
    .mode-transition button,
    .mode-transition footer,
    .mode-transition header,
    .mode-transition div {
      transition-duration: ${e.Rl.modeTransitionTime}ms !important;
      transition-property: color, background, background-color, fill, opacity, border, border-color !important;
      transition-timing-function: ease-out !important;
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
					let E = document.getElementById(a);
					E ? E.innerText = "" : (E = document.createElement("style"), E.id = a, p.appendChild(E)), E.appendChild(document.createTextNode(d)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(m), y.Z = m
		},
		"../utils/sentry/lastSentEventId.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let a = "";
				return {
					setEventId: m => (!m || typeof m != "string" || (a = m), a),
					getEventId: () => a
				}
			})()
		},
		"../utils/zaraz.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Ro: function() {
					return r
				},
				bM: function() {
					return d
				},
				tg: function() {
					return i
				},
				yn: function() {
					return n
				}
			});

			function e(s) {
				for (var l = 1; l < arguments.length; l++) {
					var c = arguments[l] != null ? Object(arguments[l]) : {},
						f = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(c).filter(function(_) {
						return Object.getOwnPropertyDescriptor(c, _).enumerable
					})), f.forEach(function(_) {
						o(s, _, c[_])
					})
				}
				return s
			}

			function o(s, l, c) {
				return l = a(l), l in s ? Object.defineProperty(s, l, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[l] = c, s
			}

			function a(s) {
				var l = p(s, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function p(s, l) {
				if (typeof s != "object" || s === null) return s;
				var c = s[Symbol.toPrimitive];
				if (c !== void 0) {
					var f = c.call(s, l || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(s)
			}
			const u = {
					track: (s, l) => null,
					set: (s, l) => console.log(`zaraz.set(${s}, ${l})`)
				},
				m = {
					track: (s, l) => {
						var c;
						(c = window.zaraz) === null || c === void 0 || c.track(s, e({}, l, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (s, l) => {
						var c;
						return (c = window.zaraz) === null || c === void 0 ? void 0 : c.set(s, l)
					}
				};
			let i;
			const d = () => {
					window.zaraz, i = m
				},
				E = ["email", "first_name", "last_name"],
				n = s => {
					E.forEach(l => {
						var c;
						(c = i) === null || c === void 0 || c.set(l, s[l])
					})
				},
				r = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				p = t.n(a),
				u = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = t.n(m),
				d = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				E = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				r = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				f = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				_ = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				A = t("../../../common/component/component-filter-bar/src/constants.js"),
				S = t("../../../common/component/component-filter-bar/src/utils.js");

			function h(G) {
				for (var V = 1; V < arguments.length; V++) {
					var x = arguments[V] != null ? Object(arguments[V]) : {},
						ee = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(x).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(x, oe).enumerable
					})), ee.forEach(function(oe) {
						R(G, oe, x[oe])
					})
				}
				return G
			}

			function R(G, V, x) {
				return V = v(V), V in G ? Object.defineProperty(G, V, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[V] = x, G
			}

			function v(G) {
				var V = C(G, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function C(G, V) {
				if (typeof G != "object" || G === null) return G;
				var x = G[Symbol.toPrimitive];
				if (x !== void 0) {
					var ee = x.call(G, V || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(G)
			}
			const N = 70,
				b = (0, u.createStyledComponent)(({
					showOverflow: G
				}) => h({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, G ? {} : {
					maxHeight: N,
					overflow: "hidden"
				})),
				M = (0, u.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				T = (0, u.createStyledComponent)(({
					theme: G
				}) => ({
					backgroundColor: G.colors.background,
					py: 1,
					px: 2,
					borderRadius: G.radii[2],
					border: `1px solid ${G.colors.gray[7]}`,
					fontSize: G.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: G.colors.gray[4]
					}
				}), "div"),
				P = (0, u.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				L = (0, u.createStyledComponent)(({
					theme: G
				}) => ({
					color: G.colors.gray[4],
					mr: 1
				}), "span"),
				H = (0, u.createStyledComponent)(() => ({
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
				X = (0, u.createStyledComponent)(({
					buttonStyle: G
				}) => h({
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
				}, G), E.zx),
				ne = (0, u.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				ae = (0, u.createStyledComponent)(({
					theme: G
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: G.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: G.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: G.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: G.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				Y = (0, u.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				K = G => G.current ? [...G.current.children].reduce((V, x) => (x.offsetTop >= N && V++, V), 0) : 0;
			let me = 0;
			class q extends e.Component {
				constructor() {
					super();
					R(this, "overflowWrapper", (0, e.createRef)()), R(this, "hasOverflowed", V => {
						const x = K(this.overflowWrapper);
						V.scrollHeight > N && x >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (V.scrollHeight < N || x === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), R(this, "addNewFilter", () => {
						const {
							filterDefinitions: V
						} = this.props, x = (0, S.TE)(V), ee = Object.keys(x)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: ee,
								operator: (0, S.uv)(ee, x),
								value: (0, S.TT)(ee, x)
							}
						})
					}), R(this, "handleOpenFilterEdit", V => {
						this.setState({
							openFilter: V,
							filterChanges: h({}, this.props.filters[V])
						})
					}), R(this, "handleRemoveFilterClick", (V, x) => {
						V.stopPropagation(), this.removeFilter(x)
					}), R(this, "removeFilter", V => {
						const {
							handleFiltersChange: x
						} = this.props, ee = [...this.props.filters], oe = ee[V];
						ee.splice(V, 1), x(ee), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: oe.key,
							operator: oe.operator,
							value: oe.value
						})
					}), R(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), R(this, "handleFilterSubmit", V => {
						const {
							filterDefinitions: x
						} = this.props;
						V.preventDefault();
						const {
							filterChanges: ee
						} = this.state, oe = typeof x[ee.key].parse == "function" ? Array.isArray(ee.value) ? ee.value.map(x[ee.key].parse) : x[ee.key].parse(ee.value) : ee.value;
						if (x[ee.key].validate && (Array.isArray(oe) ? !oe.every(x[ee.key].validate) : !x[ee.key].validate(oe))) return this.setState({
							invalid: !0
						});
						const j = [...this.props.filters],
							O = h({}, ee, {
								value: oe
							}),
							k = !j[this.state.openFilter];
						k ? j.push(O) : j[this.state.openFilter] = h({}, ee), this.props.handleFiltersChange(j, O), (k ? this.props.onAddFilter : this.props.onEditFilter)({
							field: O.key,
							operator: O.operator,
							value: O.value
						}), this.closeOpenFilterChanges()
					}), R(this, "handlePendingKeyChange", ({
						value: V
					}) => {
						const {
							filterDefinitions: x
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: V,
								operator: (0, S.uv)(V, x),
								value: (0, S.TT)(V, x)
							}
						})
					}), R(this, "handlePendingOperatorChange", ({
						value: V
					}) => {
						let x = h({}, this.state.filterChanges, {
							operator: V
						});
						if ((0, S.dr)(V)) {
							var ee, oe;
							((ee = this.state.filterChanges) === null || ee === void 0 ? void 0 : ee.value) && !Array.isArray((oe = this.state.filterChanges) === null || oe === void 0 ? void 0 : oe.value) && (x.value = [this.state.filterChanges.value])
						} else {
							var j, O, k;
							((j = this.state.filterChanges) === null || j === void 0 ? void 0 : j.value) && Array.isArray((O = this.state.filterChanges) === null || O === void 0 ? void 0 : O.value) && ((k = this.state.filterChanges) === null || k === void 0 ? void 0 : k.value.length) > 0 && (x.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: x
						})
					}), R(this, "handlePendingValueChange", V => {
						this.setState({
							invalid: !1,
							filterChanges: h({}, this.state.filterChanges, {
								value: V
							})
						})
					}), R(this, "handleShowOverflow", () => {
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
						id: ++me
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(V) {
					V.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(V) {
					const {
						formatLabel: x,
						filterDefinitions: ee
					} = this.props, {
						operator: oe
					} = this.state.filterChanges, j = ee[this.state.filterChanges.key], O = this.state.filterChanges.value, k = W => Array.isArray(W) ? W.map(se => se.value) : (W == null ? void 0 : W.value) || null;
					if (j.renderValueComponent) return j.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (j.type) {
						case A.k.select:
							return (0, S.dr)(oe) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !j.options,
								value: typeof O.split == "function" ? O == null ? void 0 : O.split(",") : Array.isArray(O) ? O : [],
								options: j.options ? j.options.map(W => ({
									value: W.value || W,
									label: W.label || x(this.state.filterChanges.key, W, V)
								})) : O ? (Array.isArray(O) ? O : O.split(",")).map(W => ({
									label: W,
									value: W
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(m.Trans, {
									id: j.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: j.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: W => {
									this.handlePendingValueChange(k(W))
								},
								isValidNewOption: W => {
									const se = j.validate;
									return !se && W || W && se([W])
								},
								getNewOptionData: (W, se) => ({
									value: W,
									label: se
								})
							}) : o().createElement(s.hQ, {
								hideLabel: !0,
								value: O,
								options: j.options.map(W => ({
									value: W,
									label: x(this.state.filterChanges.key, W, V)
								})),
								onChange: ({
									value: W
								}) => this.handlePendingValueChange(W)
							});
						case A.k.string:
						default:
							return (0, S.dr)(oe) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof O.split == "function" ? O == null ? void 0 : O.split(",") : Array.isArray(O) ? O : [],
								options: O ? (Array.isArray(O) ? O : O.split(",")).map(W => ({
									label: W,
									value: W
								})) : [],
								noOptionsMessage: () => null,
								placeholder: V.t("analytics.report.filters.labels.placeholder", {
									example: ee[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: W => {
									this.handlePendingValueChange(k(W))
								},
								isValidNewOption: W => {
									const se = j.validate;
									return !se && W || W && se([W])
								},
								getNewOptionData: (W, se) => ({
									value: W,
									label: se
								}),
								formatCreateLabel: W => V.t("filter_editor.value_create_label", {
									value: W
								})
							}) : o().createElement(m.I18n, null, W => o().createElement(d.I, {
								value: this.state.filterChanges.value,
								onChange: se => this.handlePendingValueChange(se.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: W.t("analytics.report.filters.labels.placeholder", {
									example: ee[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: V,
						filterDefinitions: x,
						modalStyles: ee,
						filterIconType: oe,
						buttonStyle: j
					} = this.props, O = K(this.overflowWrapper), k = `filterPanel${this.state.id}`, W = this.state.openFilter !== null;
					return o().createElement(m.I18n, null, se => o().createElement(l.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(Y, null, o().createElement(X, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": W,
						"aria-controls": k,
						inverted: !0,
						buttonStyle: j
					}, o().createElement(n.J, {
						type: oe || "add",
						mr: 1,
						label: se.t("common.add", {
							_: "Add"
						})
					}), o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(ne, null, o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(b, {
						innerRef: this.overflowWrapper,
						overflowLimit: N,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((de, Ce) => {
						const {
							key: be,
							operator: we,
							value: Be
						} = de, We = x[be].ignoreLabelTranslation ? x[be].label : se.t(x[be].label), Ue = se.t(`analytics.report.filters.operators.${we}`), Ge = Array.isArray(Be) ? Be.map(Z => V(be, Z, se)).join(", ") : V(be, Be, se), Qe = `${We} ${Ue} ${Ge}`;
						return o().createElement(M, {
							key: `${be}-${we}-${Be}`,
							title: Qe
						}, o().createElement(T, {
							onClick: () => this.handleOpenFilterEdit(Ce)
						}, o().createElement(l.ZC, {
							display: "flex"
						}, o().createElement(P, null, We), o().createElement(L, null, Ue), o().createElement(H, null, Ge), (0, S.oN)(de, x) ? o().createElement(r.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(ae, {
							onClick: Z => this.handleRemoveFilterClick(Z, Ce),
							"aria-label": "remove"
						}, o().createElement(n.J, {
							type: "remove"
						})))))
					})), W && o().createElement(_.Z, {
						id: k,
						filterDefinitions: x,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, S.oN)(this.state.filterChanges, x),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: V,
						modalStyles: ee
					}), this.state.hasOverflowed && o().createElement(f.Z, {
						count: O,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			R(q, "propTypes", {
				filterDefinitions: p().shape({}),
				filters: p().arrayOf(p().shape({
					key: p().string,
					operator: p().string,
					value: p().string
				})),
				handleFiltersChange: p().func.isRequired,
				formatLabel: p().func.isRequired,
				onAddFilter: p().func,
				onEditFilter: p().func,
				onRemoveFilter: p().func,
				children: p().node,
				modalStyles: p().object,
				filterIconType: p().string,
				buttonStyle: p().object
			}), y.Z = q
		},
		"../../../common/component/component-filter-bar/src/index.js": function(F, y, t) {
			"use strict";
			t.d(y, {
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
					return p.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				a = t("../../../common/component/component-filter-bar/src/constants.js"),
				p = t("../../../common/component/component-filter-bar/src/utils.js"),
				u = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				OZ: function() {
					return u
				},
				YB: function() {
					return p
				}
			});

			function e(i, d, E) {
				return d = o(d), d in i ? Object.defineProperty(i, d, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = E, i
			}

			function o(i) {
				var d = a(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function a(i, d) {
				if (typeof i != "object" || i === null) return i;
				var E = i[Symbol.toPrimitive];
				if (E !== void 0) {
					var n = E.call(i, d || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			class p extends Error {
				constructor(d, E) {
					super(E);
					e(this, "translationKey", void 0), this.translationKey = d, this.name = "TranslatorError"
				}
			}
			class u extends p {
				constructor(d) {
					super(d, `Translation key not found: ${d}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var m = null
		},
		"../../../common/util/types/src/api/domain.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Aw: function() {
					return N
				},
				Ib: function() {
					return v
				},
				Ks: function() {
					return b
				},
				MS: function() {
					return C
				},
				PN: function() {
					return f
				},
				Pp: function() {
					return p
				},
				Q3: function() {
					return l
				},
				TS: function() {
					return c
				},
				W7: function() {
					return S
				},
				dN: function() {
					return M
				},
				eF: function() {
					return R
				},
				qp: function() {
					return n
				},
				wR: function() {
					return E
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				a = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				p = e.eg.object({
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
				m = e.eg.object({
					registrant: p.optional,
					technical: p.optional,
					administrator: p.optional,
					billing: p.optional
				}),
				i = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: m.optional,
					years: e.eg.number
				}),
				d = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let E = function(T) {
				return T.ONBOARDING_INITIATED = "Onboarding Initiated", T.ONBOARDED = "Onboarded", T.PENDING_REGISTRY_LOCK = "Pending Registry Lock", T.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", T.REGISTRY_UNLOCKED = "Registry Unlocked", T.LOCKED = "Locked", T.FAILED_TO_LOCK = "Failed To Lock", T.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", T.UNLOCKED = "Unlocked", T.OFFBOARDED = "Offboarded", T
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
						status: e.eg.enum(E).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: d.optional,
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
				r = e.eg.object({
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
				l = e.eg.object({
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
				c = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let f = function(T) {
				return T.PENDING = "pending", T.VERIFIED = "verified", T.REJECTED = "rejected", T.PENDING_DELETE = "pending_delete", T.DELETED = "deleted", T
			}({});
			const _ = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(f),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				A = e.eg.object({
					designated_approvers: e.eg.array(_)
				});
			let S = function(T) {
				return T.PENDING = "pending", T.PENDING_UPDATE = "pending_update", T.ENABLED = "enabled", T.DISABLED = "disabled", T
			}({});
			const h = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(S)
				}),
				R = e.eg.intersection([h, A]),
				v = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let C = function(T) {
				return T.UNLOCK_APPROVAL = "UnlockApprovalRequest", T.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", T.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", T.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", T
			}({});
			const N = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				b = e.eg.object({
					message: e.eg.string
				}),
				M = e.eg.object({
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
					return o
				},
				eX: function() {
					return a
				},
				fG: function() {
					return u
				},
				jI: function() {
					return p
				},
				qu: function() {
					return e
				},
				zc: function() {
					return m
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
				p = function(i) {
					return i.ZONE_LOCKDOWN = "zoneLockdown", i.UA_BLOCK = "uaBlock", i.BIC = "bic", i.HOT = "hot", i.SECURITY_LEVEL = "securityLevel", i.RATE_LIMIT = "rateLimit", i.WAF = "waf", i
				}({}),
				u = function(i) {
					return i.DEFAULT = "default", i.MEDIUM = "medium", i.LOW = "low", i.EOFF = "eoff", i.HIGH = "high", i.VERY_HIGH = "very_high", i
				}({}),
				m = function(i) {
					return i.DEFAULT = "", i.XML = "text/xml", i.JSON = "application/json", i.TEXT = "text/plain", i.HTML = "text/html", i
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
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
			const o = (a, p) => {
				if (p !== void 0) throw new Error("Unexpected object: " + a);
				return p
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(F, y, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(a) {
				if (!t.o(e, a)) return Promise.resolve().then(function() {
					var m = new Error("Cannot find module '" + a + "'");
					throw m.code = "MODULE_NOT_FOUND", m
				});
				var p = e[a],
					u = p[0];
				return t.e(p[1]).then(function() {
					return t.t(u, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", F.exports = o
		}
	}
]);

//# debugId=b69537d8-2146-5c77-8d27-a3e8b79c0355