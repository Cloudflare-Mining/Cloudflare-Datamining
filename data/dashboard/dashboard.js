! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ac66161f-c15a-58b6-94dc-225cc83533fe")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
			const i = () => Object.keys(u.Z).reduce((E, O) => (O.indexOf("cf_beta.") === 0 && u.Z.get(O) === "true" && E.push(O.split(".").slice(1).join(".")), E), []),
				d = () => {
					var E, O, L;
					return ((E = window) === null || E === void 0 || (O = E.bootstrap) === null || O === void 0 || (L = O.data) === null || L === void 0 ? void 0 : L.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((m = window) === null || m === void 0 ? void 0 : m.location) && u.Z) {
				const E = p().parse(window.location.search);
				E.beta_on && u.Z.set(`cf_beta.${E.beta_on}`, !0), E.beta_off && u.Z.set(`cf_beta.${E.beta_off}`, !1)
			}
			const _ = {},
				n = E => {
					var O, L, h;
					return Object.prototype.hasOwnProperty.call(_, E) ? _[E] : ((O = window) === null || O === void 0 || (L = O.bootstrap) === null || L === void 0 || (h = L.data) === null || h === void 0 ? void 0 : h.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(R => R === E) ? (_[E] = !0, !0) : (_[E] = !1, !1)
				},
				r = E => u.Z ? u.Z.get(`cf_beta.${E}`) === !0 : !1,
				s = E => r(E) || n(E),
				l = () => !0,
				c = () => {
					var E, O, L;
					return ((E = window) === null || E === void 0 || (O = E.bootstrap) === null || O === void 0 || (L = O.data) === null || L === void 0 ? void 0 : L.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				f = E => {
					const O = (0, e.uF)(E),
						L = (O == null ? void 0 : O.roles) || [];
					return (0, o.qR)(location.pathname) && L.length === 1 && L.some(h => h === "Administrator Read Only")
				}
		},
		"../init.ts": function(F, v, t) {
			"use strict";
			t.r(v);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				a = t("../libs/init/initGlobal.ts"),
				p = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				u = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function m(D) {
				for (var U = 1; U < arguments.length; U++) {
					var X = arguments[U] != null ? Object(arguments[U]) : {},
						le = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(X).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(X, _e).enumerable
					})), le.forEach(function(_e) {
						i(D, _e, X[_e])
					})
				}
				return D
			}

			function i(D, U, X) {
				return U = d(U), U in D ? Object.defineProperty(D, U, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[U] = X, D
			}

			function d(D) {
				var U = _(D, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function _(D, U) {
				if (typeof D != "object" || D === null) return D;
				var X = D[Symbol.toPrimitive];
				if (X !== void 0) {
					var le = X.call(D, U || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(D)
			}
			const n = D => {
				const U = D && D.headers || {},
					X = new Headers(U);
				return X.append("X-Cross-Site-Security", "dash"), m({}, D, {
					headers: X
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

			function E(D) {
				const U = D.substr(1);
				if (U && c !== U) {
					const X = document.getElementById(U);
					if (X) {
						const le = X.getBoundingClientRect().top;
						if (le > 0) {
							const _e = le - f;
							document.documentElement.scrollTop = _e
						}
					}
				}
				c = U
			}

			function O(D) {
				D.listen(U => E(U.hash))
			}
			var L = t("../../../../node_modules/cookie/index.js"),
				h = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const R = "CF_dash_version",
				y = "cf_fv_preview",
				C = "current",
				N = "hash",
				A = "deploymentPreview",
				M = "fragmentPreview",
				T = D => D === C ? I() : S(),
				I = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				S = (D = 72) => {
					const U = 36e5;
					return new Date(Date.now() + D * U)
				},
				K = D => {
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
				q = (D, U = !1) => {
					var X;
					const le = K(D),
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
    <h1 id="error-title">${le.title}</h1>
    <p id="error-description">${le.description}</p>
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
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(X=window.build)===null||X===void 0?void 0:X.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return _e + De
				},
				ne = D => {
					var U;
					const X = document.getElementById(D);
					!X || (U = X.parentNode) === null || U === void 0 || U.removeChild(X)
				};

			function re() {
				const D = document.getElementById("loading-state");
				D == null || D.classList.add("hide"), D == null || D.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(ne)
				})
			}

			function Q(D) {
				var U;
				const X = document.getElementById("loading-state"),
					le = !!((U = L.parse(document.cookie)) === null || U === void 0 ? void 0 : U[R]);
				!X || (X.innerHTML = q(D == null ? void 0 : D.code, le))
			}
			var V = t("../utils/initStyles.ts"),
				me = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				te = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				G = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				Z = t("../../../../node_modules/history/esm/history.js"),
				J = (0, Z.lX)(),
				ie = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				$ = t("../react/utils/url.ts");
			const b = (0, ie.Rf)();
			let k;

			function z(D) {
				return oe(D, "react-router-v5")
			}

			function oe(D, U) {
				return (X, le = !0, _e = !0) => {
					le && b && b.location && (k = X({
						name: (0, $.Fl)(b.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": U
						}
					})), _e && D.listen && D.listen((De, Se) => {
						if (Se && (Se === "PUSH" || Se === "POP")) {
							k && k.finish();
							const ot = {
								"routing.instrumentation": U
							};
							k = X({
								name: (0, $.Fl)(De.pathname),
								op: "navigation",
								tags: ot
							})
						}
					})
				}
			}
			var de = t("../react/common/selectors/languagePreferenceSelector.ts"),
				ye = t("../flags.ts"),
				Te = t("../utils/getDashVersion.ts"),
				Me = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				Ne = t.n(Me),
				He = t("../../../common/intl/intl-core/src/errors.ts"),
				ke = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				ze = t("../react/common/middleware/sparrow/errors.ts");
			const Ze = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				H = !0,
				se = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				w = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/];

			function ee(D, U, X) {
				return U = Ce(U), U in D ? Object.defineProperty(D, U, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[U] = X, D
			}

			function Ce(D) {
				var U = Ge(D, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function Ge(D, U) {
				if (typeof D != "object" || D === null) return D;
				var X = D[Symbol.toPrimitive];
				if (X !== void 0) {
					var le = X.call(D, U || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(D)
			}
			class Re {
				constructor() {
					ee(this, "name", Re.id)
				}
				setupOnce() {
					t.g.console && (0, ke.hl)(t.g.console, "error", U => (...X) => {
						const le = X.find(_e => _e instanceof Error);
						if (Ze && le) {
							let _e, De = !0;
							if (le instanceof ze.ez) {
								const Se = le instanceof ze.oV ? le.invalidProperties : void 0;
								_e = {
									tags: {
										"sparrow.eventName": le.eventName
									},
									extra: {
										sparrow: {
											eventName: le.eventName,
											invalidProperties: Se
										}
									},
									fingerprint: [le.name ? le.name : "SparrowValidationError"]
								}, De = !1
							} else if (le instanceof Me.SparrowIdCookieError) _e = {
								extra: {
									sparrowIdCookie: le.cookie
								},
								fingerprint: [le.name ? le.name : "SparrowIdCookieError"]
							};
							else if (le.name === "ChunkLoadError") {
								_e = {
									fingerprint: [le.name]
								};
								try {
									_e.tags = {
										chunkId: le.message.split(" ")[2],
										chunkUrl: le.request
									}
								} catch {}
							} else le instanceof He.YB && (_e = {
								fingerprint: ["TranslatorError", le.translationKey]
							});
							De && r.Tb(le, _e)
						}
						typeof U == "function" && U.apply(t.g.console, X)
					})
				}
			}
			ee(Re, "id", "ConsoleErrorIntegration");
			var Ke = null,
				Oe = t("../utils/sentry/lastSentEventId.ts"),
				Be = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				Ue = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const Ve = D => {
					const U = async X => {
						var le, _e;
						const De = {
							envelope: X.body,
							url: D.url,
							isPreviewDeploy: (le = window) === null || le === void 0 || (_e = le.build) === null || _e === void 0 ? void 0 : _e.isPreviewDeploy,
							release: (0, Te.t)()
						};
						try {
							const Se = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(De)
							});
							return {
								statusCode: Se.status,
								headers: {
									"x-sentry-rate-limits": Se.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": Se.headers.get("Retry-After")
								}
							}
						} catch (Se) {
							return console.log(Se), (0, Ue.$2)(Se)
						}
					};
					return Be.q(D, U)
				},
				Je = () => {
					if (Ze && H) {
						var D, U, X, le, _e, De, Se, ot, _t, qe;
						let wt = "production";
						((D = window) === null || D === void 0 || (U = D.build) === null || U === void 0 ? void 0 : U.isPreviewDeploy) && (wt += "-preview"), te.S({
							dsn: Ze,
							release: (0, Te.t)(),
							environment: wt,
							ignoreErrors: w,
							allowUrls: se,
							autoSessionTracking: !1,
							defaultIntegrations: !1,
							integrations: [new Re, new G.jK.BrowserTracing({
								routingInstrumentation: z(J)
							})],
							tracesSampleRate: 0,
							transport: Ve,
							beforeSend: yt => (Oe.e.setEventId(yt.event_id), yt)
						});
						const At = (0, l.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, ye.Qw)(),
							USER_BETA_FLAGS: (0, ye.ki)(),
							meta: {
								connection: {
									type: (X = window) === null || X === void 0 || (le = X.navigator) === null || le === void 0 || (_e = le.connection) === null || _e === void 0 ? void 0 : _e.effectiveType,
									bandwidth: (De = window) === null || De === void 0 || (Se = De.navigator) === null || Se === void 0 || (ot = Se.connection) === null || ot === void 0 ? void 0 : ot.downlink
								},
								languagePreference: (0, de.r)(At),
								isPreviewDeploy: (_t = window) === null || _t === void 0 || (qe = _t.build) === null || qe === void 0 ? void 0 : qe.isPreviewDeploy
							},
							utilGates: (0, me.T2)(At)
						}), window.addEventListener("unhandledrejection", function(yt) {})
					}
				},
				W = D => {
					D ? r.av({
						id: D
					}) : r.av(null)
				};
			var ae = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				we = () => {
					let D;
					try {
						D = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), D = window.location.search
					}
					if (!D.includes("remote[")) return;
					const U = new URLSearchParams(D),
						X = {};
					for (let [le, _e] of U) le.includes("remote") && (X[le.replace(/remote\[|\]/g, "")] = _e);
					ae.Z.set("mfe-remotes", JSON.stringify(X))
				},
				Le = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				xe = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const Qe = "ANON_USER_ID";

			function rt() {
				var D, U, X, le;
				let _e = (D = t.g) === null || D === void 0 || (U = D.bootstrap) === null || U === void 0 || (X = U.data) === null || X === void 0 || (le = X.user) === null || le === void 0 ? void 0 : le.id;
				if (!_e) {
					let De = ae.Z.get(Qe);
					if (!De) {
						let Se = (0, xe.Z)();
						ae.Z.set(Qe, Se), De = Se
					}
					return De
				}
				return _e
			}
			async function lt() {
				const D = (0, l.bh)();
				D.dispatch((0, Le.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await D.dispatch((0, me.UL)({
					userId: rt()
				}))
			}
			class at extends Error {
				constructor(U, X) {
					super(X);
					this.name = `${U} ${X}`
				}
			}
			const mt = () => {
					document.cookie.split(";").forEach(U => {
						const [X] = U.trim().split("=");
						document.cookie = `${X}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				gt = async () => {
					let D = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!D.ok) throw D.headers.get("content-type") === "text/html" && (await D.text()).toLowerCase().includes("cookie too large") && (r.$e(function(_e) {
						_e.setTag("init", "cookieTooLarge"), r.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), mt(), window.location.reload()), new at("Bootstrap API Failure", D == null ? void 0 : D.status);
					return (await D.json()).result.data
				};
			var $e = t("webpack/sharing/consume/default/react/react"),
				Ie = t.n($e),
				je = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				ut = t("webpack/sharing/consume/default/react-dom/react-dom"),
				st = t("webpack/sharing/consume/default/react-redux/react-redux"),
				ft = t("../../../../node_modules/swr/core/dist/index.mjs"),
				j = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				ue = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Ee = t("../react/shims/focus-visible.js"),
				Ae = t("../react/app/components/DeepLink/index.ts"),
				ce = t("../../../../node_modules/prop-types/index.js"),
				pe = t.n(ce),
				ve = t("../react/utils/translator.tsx"),
				B = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				Y = t("../../../dash/intl/intl-translations/src/index.ts"),
				he = t("../../../../node_modules/query-string/query-string.js"),
				Pe = t.n(he),
				Fe = t("../react/common/actions/userActions.ts"),
				We = t("../react/common/selectors/userSelectors.ts"),
				Xe = t("../react/utils/i18n.ts"),
				dt = t("../react/utils/bootstrap.ts");

			function Et(D) {
				for (var U = 1; U < arguments.length; U++) {
					var X = arguments[U] != null ? Object(arguments[U]) : {},
						le = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(X).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(X, _e).enumerable
					})), le.forEach(function(_e) {
						pt(D, _e, X[_e])
					})
				}
				return D
			}

			function pt(D, U, X) {
				return U = et(U), U in D ? Object.defineProperty(D, U, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[U] = X, D
			}

			function et(D) {
				var U = xt(D, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function xt(D, U) {
				if (typeof D != "object" || D === null) return D;
				var X = D[Symbol.toPrimitive];
				if (X !== void 0) {
					var le = X.call(D, U || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(D)
			}
			let tt = Pe().parse(location.search);
			const Mt = D => {
					const U = (0, dt.$8)() ? [(0, Y.Fy)(Y.if.changes), (0, Y.Fy)(Y.if.common), (0, Y.Fy)(Y.if.navigation), (0, Y.Fy)(Y.if.overview), (0, Y.Fy)(Y.if.onboarding), (0, Y.Fy)(Y.if.invite), (0, Y.Fy)(Y.if.login), (0, Y.Fy)(Y.if.dns), (0, Y.Fy)(Y.n4.ssl_tls), (0, Y.Fy)(Y.if.message_inbox), (0, Y.Fy)(Y.if.welcome)] : [(0, Y.Fy)(Y.if.common), (0, Y.Fy)(Y.if.invite), (0, Y.Fy)(Y.if.login), (0, Y.Fy)(Y.if.onboarding)];
					tt.lang ? $t(D) : ae.Z.get(Xe.th) && Rt(D, (0, Xe.Kd)());
					const X = async le => (await Promise.all(U.map(De => De(le)))).reduce((De, Se) => Et({}, De, Se), {});
					return Ie().createElement(B.LocaleContext.Provider, {
						value: D.languagePreference
					}, Ie().createElement(B.I18nProvider, {
						translator: ve.Vb,
						locale: D.languagePreference
					}, Ie().createElement(B.I18nLoader, {
						loadPhrases: X
					}, D.children)))
				},
				$t = async D => {
					let U = tt.lang.substring(0, tt.lang.length - 2) + tt.lang.substring(tt.lang.length - 2, tt.lang.length).toUpperCase();
					if (!(0, de.v)(U)) {
						console.warn(`${U} is not a supported locale.`), delete tt.lang, D.history.replace({
							search: Pe().stringify(tt)
						});
						return
					}(0, Xe.i_)(U), delete tt.lang, Rt(D, U), D.isAuthenticated || D.history.replace({
						search: Pe().stringify(tt)
					})
				}, Rt = async (D, U) => {
					if (D.isAuthenticated) try {
						await D.setUserCommPreferences({
							"language-locale": U
						}, {
							hideErrorAlert: !0
						}), ae.Z.remove(Xe.th), D.history.replace({
							search: Pe().stringify(tt)
						})
					} catch (X) {
						ae.Z.set(Xe.th, !0), console.error(X)
					} else ae.Z.set(Xe.th, !0)
				}, jt = D => {
					const U = (0, We.PR)(D);
					return {
						isAuthenticated: !!(U && U.id),
						languagePreference: (0, Xe.Kd)() || (0, de.r)(D)
					}
				}, Nt = {
					setUserCommPreferences: Fe.V_
				};
			var Wt = (0, je.withRouter)((0, st.connect)(jt, Nt)(Mt));
			Mt.propTypes = {
				history: pe().object,
				languagePreference: pe().string.isRequired,
				children: pe().node.isRequired,
				isAuthenticated: pe().bool,
				setUserCommPreferences: pe().func.isRequired
			};
			var Gt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				zt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let Ot;
			const g = ({
				selectorPrefix: D = "c_"
			} = {}) => (Ot || (Ot = (0, zt.Z)({
				dev: !1,
				selectorPrefix: D
			})), Ot);
			var P = t("../react/common/components/ModalManager.tsx"),
				ge = t("../react/app/components/ErrorBoundary.tsx"),
				be = t("../react/common/actions/notificationsActions.ts");
			const it = (t.g.bootstrap || {}).data || {};
			class Ct extends Ie().Component {
				componentDidMount() {
					it.messages && this.dispatchNotificationActions(it.messages)
				}
				dispatchNotificationActions(U) {
					U.forEach(X => {
						const {
							type: le,
							message: _e,
							persist: De
						} = X;
						["success", "info", "warn", "error"].includes(le) && this.props.notifyAdd(le, (0, ve.ZP)(_e), {
							persist: !!De
						})
					})
				}
				render() {
					return null
				}
			}
			var bt = (0, je.withRouter)((0, st.connect)(null, {
				notifyAdd: be.IH
			})(Ct));
			Ct.propTypes = {
				notifyAdd: pe().func.isRequired
			};
			var ct = t("../react/app/redux/index.ts");

			function It() {
				var D;
				const U = (0, ct.p4)(We.PR),
					X = (U == null || (D = U.email) === null || D === void 0 ? void 0 : D.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					le = (0, Le.Yc)();
				(0, $e.useEffect)(() => {
					le({
						userType: X
					})
				}, [X, le])
			}
			var ht = t("../react/common/selectors/entitlementsSelectors.ts"),
				Tt = t("../react/common/selectors/accountSelectors.ts");
			const Pt = ["accountId", "is_ent"];

			function St() {
				const D = (0, Le.f7)(),
					U = (0, je.useHistory)(),
					X = (0, $.uW)(U.location.pathname),
					le = (0, Le.Yc)(),
					_e = (0, Le.O$)(),
					De = (0, ct.p4)(ht.u1),
					Se = !De.isRequesting && !!De.data,
					ot = (0, ct.p4)(ht.p1),
					_t = (0, ct.p4)(Tt.Xu),
					qe = (0, ct.p4)(Tt.uF),
					wt = !_t.isRequesting && !!_t.data;
				(0, $e.useEffect)(() => {
					if (X && wt && qe && Se && X === qe.account.id) {
						var At, yt, Vt;
						le({
							accountId: qe.account.id,
							is_ent: ot,
							is_free_account: !ot && !(qe == null || (At = qe.account.meta) === null || At === void 0 ? void 0 : At.has_business_zones) && !(qe == null || (yt = qe.account.meta) === null || yt === void 0 ? void 0 : yt.has_pro_zones) && !(qe == null || (Vt = qe.account.meta) === null || Vt === void 0 ? void 0 : Vt.has_enterprise_zones)
						})
					} else(!X || X in D && D.accountId !== X) && _e(Pt)
				}, [wt, qe, le, _e, Se, ot, X, D])
			}
			var Lt = t("../react/common/selectors/zoneSelectors.ts");

			function nt() {
				const D = (0, ct.p4)(Lt.nA),
					U = (0, Le.Yc)();
				(0, $e.useEffect)(() => {
					var X;
					U({
						zone_id: D == null ? void 0 : D.id,
						zone_plan: D == null || (X = D.plan) === null || X === void 0 ? void 0 : X.legacy_id
					})
				}, [D, U])
			}
			const Kt = () => (It(), St(), nt(), null);
			var Bt = t("../react/app/components/Persistence/index.tsx"),
				qt = t("../node_modules/@cloudflare/elements/es/index.js"),
				en = t("../react/app/components/LoadingSuspense.tsx");
			const tn = Ie().lazy(() => Promise.all([t.e(39074), t.e(2480), t.e(10008), t.e(73598), t.e(94012), t.e(24074), t.e(72019), t.e(73267), t.e(5668), t.e(60091), t.e(3538), t.e(77216), t.e(39760), t.e(94923), t.e(60734), t.e(40912), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var nn = () => Ie().createElement(en.Z, null, Ie().createElement(tn, null));
			const on = () => ($e.useEffect(() => re, []), null);
			var rn = t("../../../../node_modules/moment/moment.js"),
				Ht = t.n(rn);
			const an = D => {
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
				sn = () => {
					const D = (0, ct.p4)(de.r);
					(0, $e.useEffect)(() => {
						const U = an(D);
						U !== Ht().locale() && Ht().locale(U), document.documentElement.lang = D
					}, [D])
				},
				cn = () => {
					(0, $e.useEffect)(() => {
						async function D() {
							var U, X;
							let le;
							if (((U = window) === null || U === void 0 || (X = U.build) === null || X === void 0 ? void 0 : X.isPreviewDeploy) && (le = "cookie"), !!le) try {
								const _e = document.head.querySelector("link[rel=icon]");
								_e && (_e.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${le}.ico`)).default)
							} catch {}
						}
						D()
					}, [])
				};
			var ln = t("../react/common/constants/constants.ts");
			const un = () => {
					var D;
					const U = (0, je.useLocation)(),
						[X, le] = (0, $e.useState)(((D = window) === null || D === void 0 ? void 0 : D.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, $e.useEffect)(() => {
						const _e = Pe().parse(U.search);
						if (_e.pt && ae.Z.set(ln.sJ, _e.pt), _e == null ? void 0 : _e.devPanel) {
							var De, Se;
							(De = window) === null || De === void 0 || (Se = De.localStorage) === null || Se === void 0 || Se.setItem("gates_devtools_ui_gates_controller_enabled", "true"), le(!0)
						}
					}, [U.search]), {
						devPanelEnabled: X
					}
				},
				dn = ({
					id: D,
					customDataLayer: U = [],
					dataLayerName: X = "dataLayer"
				}) => {
					const le = `<iframe src="https://www.googletagmanager.com/ns.html?id=${D}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						_e = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${X}', '${D}')`,
						De = `
    window.${X} = window.${X} || [];
    window.${X}.push(${JSON.stringify(U)})
  `;
					return {
						iframe: le,
						script: _e,
						dataLayerHTML: De
					}
				},
				pn = D => {
					const U = document.createElement("script");
					return U.innerHTML = D, U.async = !0, U
				},
				mn = D => {
					const U = document.createElement("noscript");
					return U.innerHTML = D, U
				},
				Zt = D => {
					const U = document.createElement("script");
					return U.innerHTML = D, U
				},
				Mn = ({
					dataLayer: D,
					dataLayerName: U
				}) => {
					if (window[U]) return window[U].push(D);
					const X = `
      window.${U} = window.${U} || [];
      window.${U}.push(${JSON.stringify(D)})`,
						le = Zt(X);
					document.head.insertBefore(le, document.head.childNodes[0])
				},
				gn = ({
					containerId: D,
					customDataLayer: U,
					gtmFeatureFlag: X = !0
				}) => {
					(0, $e.useEffect)(() => {
						(() => {
							if (!X) return null;
							const {
								iframe: _e,
								script: De,
								dataLayerHTML: Se
							} = dn({
								id: D,
								customDataLayer: U
							});
							document.head.insertBefore(Zt(Se), document.head.childNodes[0]), document.head.insertBefore(pn(De), document.head.childNodes[0]), document.body.insertBefore(mn(_e), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const fn = ({
				isDev: D,
				gtmFeatureFlag: U
			}) => {
				(0, $e.useEffect)(() => {
					(() => {
						if (!U) return null;
						let le;
						D ? le = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : le = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const _e = document.createElement("script");
						_e.async = !0, _e.src = le, document.head.insertBefore(_e, document.head.childNodes[0])
					})()
				}, [])
			};
			var _n = t("../react/utils/useDomainConnectRedirect.ts");
			const En = "GTM-NDGPDFZ",
				vn = Ie().lazy(() => Promise.all([t.e(39074), t.e(2480), t.e(10008), t.e(73598), t.e(94012), t.e(24074), t.e(72019), t.e(73267), t.e(16339), t.e(74862), t.e(60091), t.e(3538), t.e(77216), t.e(39760), t.e(94923), t.e(60734), t.e(40912), t.e(32036), t.e(20263), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				yn = Ie().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(39074), t.e(24074), t.e(16339), t.e(60091), t.e(60734), t.e(69088), t.e(32036), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var Cn = ({
					userIsAuthed: D
				}) => {
					sn(), cn(), (0, _n.y)();
					const {
						devPanelEnabled: U
					} = un();
					return gn({
						containerId: En,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), fn({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), Ie().createElement($e.Suspense, {
						fallback: Ie().createElement(on, null)
					}, Ie().createElement(je.Switch, null, !D && !0 && Ie().createElement(je.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Ie().createElement(yn, null)), Ie().createElement(je.Route, {
						render: () => Ie().createElement(qt.ZC, {
							minHeight: "100vh"
						}, Ie().createElement(vn, null))
					})), U && Ie().createElement(nn, null))
				},
				Ut = t("../../../../node_modules/yup/es/index.js"),
				hn = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => Ut.Z_().email((0, ve.ZP)("common.validation.email")).required((0, ve.ZP)("common.validation.email")),
				cfPassword: () => Ut.Z_().required((0, ve.ZP)("common.validation.required"))
			};
			(0, hn.Yd)(Qt).forEach(D => {
				Ut.kM(Ut.Z_, D, Qt[D])
			});
			const Xt = Ie().lazy(() => Promise.all([t.e(10008), t.e(94012), t.e(6368), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx"))),
				Tn = () => {
					const D = (0, dt.$8)(),
						[U, X] = (0, $e.useState)(D ? Xt : Ie().Fragment),
						[le, _e] = (0, $e.useState)((0, h.Yc)());
					(0, $e.useEffect)(() => {
						(0, h.fF)(() => _e((0, h.Yc)()))
					}, []);
					const De = Se => {
						_e(Se), (0, h.C8)(Se), document.cookie = `dark-mode=${Se};Path=/;Max-Age=31536000`
					};
					return (0, $e.useEffect)(() => {
						X(D ? Xt : Ie().Fragment)
					}, [D]), (0, $e.useEffect)(() => {
						const Se = () => De(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Se), () => {
							window.removeEventListener("storage", Se)
						}
					}, []), Ie().createElement($e.Suspense, {
						fallback: null
					}, Ie().createElement(st.Provider, {
						store: (0, l.bh)()
					}, Ie().createElement(je.Router, {
						history: J
					}, Ie().createElement(U, null, Ie().createElement(Gt.Z, {
						renderer: g()
					}, Ie().createElement(Wt, null, Ie().createElement(ge.S, {
						sentryTag: "Root"
					}, Ie().createElement(ft.J$, {
						value: {
							fetcher: Se => fetch(Se).then(ot => ot.json())
						}
					}, Ie().createElement(Kt, null), Ie().createElement(bt, null), Ie().createElement(Bt.Z_, {
						onDarkModeChangeCb: De
					}, Ie().createElement(Ae.ZP, null, Ie().createElement(Cn, {
						userIsAuthed: D
					}))), Ie().createElement(P.ZP, null), Ie().createElement(j.F0, null)))))))))
				},
				An = () => {
					(0, ut.render)(Ie().createElement(Tn, null), document.getElementById("react-app"))
				};
			var vt = t("../utils/initSparrow.ts"),
				Dt = t("../utils/zaraz.ts");
			const On = () => {
					const D = (0, We.PR)((0, l.bh)().getState());
					bn(), (0, vt.Ug)(), (0, Dt.bM)(), (D == null ? void 0 : D.id) && Ne().setUserId(D == null ? void 0 : D.id), (0, vt.yV)(), !(0, vt.Wi)() && (0, vt.IM)(), D ? (0, Dt.yn)(D) : (0, Dt.Ro)()
				},
				bn = () => {
					var D, U;
					(D = window) === null || D === void 0 || (U = D.OneTrust) === null || U === void 0 || U.OnConsentChanged(() => {
						const X = (0, We.PR)((0, l.bh)().getState());
						(0, vt.Wi)() ? (Ne().setEnabled(!0), (X == null ? void 0 : X.id) ? (Ne().setUserId(X.id), (0, Dt.yn)(X)) : (0, Dt.Ro)(), (0, vt.yV)()) : (Ne().setEnabled(!1), (0, vt.IM)())
					})
				};

			function In(D) {
				for (var U = 1; U < arguments.length; U++) {
					var X = arguments[U] != null ? Object(arguments[U]) : {},
						le = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(X).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(X, _e).enumerable
					})), le.forEach(function(_e) {
						Pn(D, _e, X[_e])
					})
				}
				return D
			}

			function Pn(D, U, X) {
				return U = Sn(U), U in D ? Object.defineProperty(D, U, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[U] = X, D
			}

			function Sn(D) {
				var U = Ln(D, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function Ln(D, U) {
				if (typeof D != "object" || D === null) return D;
				var X = D[Symbol.toPrimitive];
				if (X !== void 0) {
					var le = X.call(D, U || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(D)
			}
			const Dn = "init",
				Jt = (D, U) => {
					r.$e(function(X) {
						X.setTag(Dn, U), r.Tb(D)
					}), Q(D)
				},
				Ft = async (D, U) => {
					try {
						return await D(), !0
					} catch (X) {
						return Jt(X, U), !1
					}
				};
			(async () => {
				try {
					var D, U, X;
					t.g.build = In({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "ffa40e76d7b54fc8cb48a3179686ca87ce8e4f94",
						dashVersion: "30616378",
						env: "production",
						builtAt: 1738000712849,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, Te.p)()
					}), Je();
					const le = [{
						fn: () => t.e(4374).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => O(J),
						tag: "hashScroll"
					}, {
						fn: V.Z,
						tag: "styles"
					}, {
						fn: we,
						tag: "mfePreviewData"
					}];
					for (const _t of le)
						if (!await Ft(_t.fn, _t.tag)) return;
					let _e;
					if (!await Ft(async () => {
							_e = await gt()
						}, "bootstrap")) return;
					const De = (0, l.bh)(),
						Se = ((D = _e) === null || D === void 0 ? void 0 : D.data) || {};
					De.dispatch((0, s.mW)("user", Se == null ? void 0 : Se.user));
					const ot = (U = _e) === null || U === void 0 || (X = U.data) === null || X === void 0 ? void 0 : X.user;
					return t.g.bootstrap = _e, ot && ot.id && W(ot.id), !await Ft(lt, "gates") || !await Ft(On, "tracking") ? void 0 : An()
				} catch (le) {
					Jt(le, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(F, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				p = t("../react/common/selectors/userSelectors.ts"),
				u = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/common/utils/isGuards.ts"),
				d = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				_ = t.n(d);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(l) {
					for (var c = 1; c < arguments.length; c++) {
						var f = arguments[c];
						for (var E in f) Object.prototype.hasOwnProperty.call(f, E) && (l[E] = f[E])
					}
					return l
				}, n.apply(this, arguments)
			}
			const r = l => {
				function c(f) {
					const E = (0, a.UM)(),
						O = (0, d.useHistory)(),
						L = (0, d.useLocation)(),
						h = (0, d.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						R = (0, a.p4)(p.PR) || null,
						y = (0, a.p4)(u.nA) || null,
						C = (0, a.p4)(m.uF),
						N = C ? C.account : null;
					if (!h) return null;
					const {
						accountId: A,
						app: M,
						tab: T
					} = h.params, I = h.params.zoneName && ((0, i.v5)(h.params.zoneName) || h.params.zoneName.indexOf(".") > 0) ? h.params.zoneName : void 0;
					return o().createElement(l, n({
						dispatch: E,
						history: O,
						location: L,
						match: h,
						user: R,
						membership: A ? C : null,
						account: A ? N : null,
						accountId: A || null,
						zone: I ? y : null,
						zoneName: I || null,
						app: I ? M : null,
						tab: I ? T : null
					}, f))
				}
				return c.displayName = `withEntities(${s(l)})`, c
			};

			function s(l) {
				return l.displayName || l.name || "Component"
			}
			v.Z = r
		},
		"../react/app/components/AccountHome/tracking.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return _
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
				_ = f => {
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
					product: E
				}) => {
					o().sendEvent(u, {
						category: f,
						product: E
					})
				},
				l = () => {
					o().sendEvent(m)
				},
				c = () => {
					o().sendEvent(i)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				BQ: function() {
					return d
				},
				Bh: function() {
					return m
				},
				CM: function() {
					return _
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
				_ = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, l => ({
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
		"../react/app/components/DeepLink/constants.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				BV: function() {
					return e
				},
				Dz: function() {
					return _
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
				_ = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
				_ = t.n(d);

			function n(I) {
				for (var S = 1; S < arguments.length; S++) {
					var K = arguments[S] != null ? Object(arguments[S]) : {},
						q = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(K).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(K, ne).enumerable
					})), q.forEach(function(ne) {
						r(I, ne, K[ne])
					})
				}
				return I
			}

			function r(I, S, K) {
				return S = s(S), S in I ? Object.defineProperty(I, S, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[S] = K, I
			}

			function s(I) {
				var S = l(I, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function l(I, S) {
				if (typeof I != "object" || I === null) return I;
				var K = I[Symbol.toPrimitive];
				if (K !== void 0) {
					var q = K.call(I, S || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(I)
			}
			class c {
				constructor(S, K) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", q => {
						this.resolvers.set(q, {
							name: q,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", q => {
						const ne = this.resolvers.get(q);
						ne && (ne.endTime = Date.now(), this.resolvers.set(q, ne))
					}), r(this, "resolverCancel", q => {
						this.resolverDone(q), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", q => {
						const ne = "NO_ACTION",
							re = {
								actionType: ne,
								startTime: 0
							};
						return {
							start: (Q = ne) => {
								const V = this.resolvers.get(q);
								re.actionType = Q, re.startTime = Date.now(), V && V.userActions.push(re)
							},
							finish: (Q = ne) => {
								re.actionType = Q, re.endTime = Date.now()
							},
							cancel: (Q = ne) => {
								re.actionType = Q, re.endTime = Date.now(), this.resolverCancel(q)
							}
						}
					}), this.deepLink = S, this.legacyDeepLink = K, this.resolvers = new Map
				}
				track(S) {
					try {
						if (this._done) return;
						this._done = !0;
						const K = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: f(this.startTime, this.endTime),
								totalCpuTime: f(this.startTime, this.endTime)
							},
							q = this.resolvers.size === 0 ? K : Array.from(this.resolvers.values()).reduce((ne, re) => {
								const Q = f(re.startTime, re.endTime),
									V = re.userActions.reduce((te, G) => {
										const Z = f(G.startTime, G.endTime);
										return {
											totalTime: te.totalTime + Z,
											actions: te.actions.set(G.actionType, Z)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									me = Q - V.totalTime;
								return n({}, ne, {
									totalTime: ne.totalTime + Q,
									totalUserActionsTime: ne.totalUserActionsTime + V.totalTime,
									totalCpuTime: ne.totalCpuTime + me,
									[`${re.name}ResolverTotalTime`]: Q,
									[`${re.name}ResolverTotalCpuTime`]: me,
									[`${re.name}ResolverTotalUserActionsTime`]: V.totalTime
								}, Array.from(V.actions.keys()).reduce((te, G) => n({}, te, {
									[`${re.name}Resolver/${G}`]: V.actions.get(G)
								}), {}))
							}, n({}, K, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						_().sendEvent(S, q)
					} catch (K) {
						console.error(K)
					}
				}
			}

			function f(I = Date.now(), S = Date.now()) {
				return (S - I) / 1e3
			}
			var E = t("../react/app/components/DeepLink/constants.ts"),
				O = t("../react/common/hooks/useCachedState.ts"),
				L = t("../react/common/hooks/usePrevious.ts");

			function h(I) {
				for (var S = 1; S < arguments.length; S++) {
					var K = arguments[S] != null ? Object(arguments[S]) : {},
						q = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(K).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(K, ne).enumerable
					})), q.forEach(function(ne) {
						R(I, ne, K[ne])
					})
				}
				return I
			}

			function R(I, S, K) {
				return S = y(S), S in I ? Object.defineProperty(I, S, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[S] = K, I
			}

			function y(I) {
				var S = C(I, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function C(I, S) {
				if (typeof I != "object" || I === null) return I;
				var K = I[Symbol.toPrimitive];
				if (K !== void 0) {
					var q = K.call(I, S || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(I)
			}
			var A = ({
					children: I
				}) => {
					const S = (0, o.TZ)(),
						K = (0, a.useHistory)(),
						q = (0, L.Z)(K.location.pathname),
						ne = (0, o.p4)(i.dd),
						[re, Q] = (0, e.useState)(!0),
						[V, me] = (0, O.j)(void 0, {
							key: E.Fj
						}),
						[te, G] = (0, O.j)(void 0, {
							key: E.O5
						}),
						[Z, x] = (0, O.j)(void 0, {
							key: E.s$
						}),
						J = (0, u.$8)();
					let ie = new URLSearchParams(K.location.search);
					const $ = (0, p.mL)(K.location.pathname, ie);
					let b = null,
						k = null;
					if (ie.has(E.Tc) && ie.delete(E.Tc), ie.get(E.BV)) b = ie.get(E.BV), K.location.hash && (k = K.location.hash);
					else if (V) {
						const oe = new URLSearchParams(V);
						oe.get(E.BV) && (b = oe.get(E.BV), ie = oe)
					} else $ && (ie.set(E.BV, $), b = $);
					if (b && E._h.test(b)) {
						const oe = ie.getAll(E.Kt),
							de = JSON.stringify(oe);
						oe.length && de !== Z && x(de), ie.has(E.Tc) && ie.delete(E.Tc), ie.delete(E.Kt)
					}!J && V === void 0 && b && me(ie.toString());
					const z = async () => {
						try {
							if ((0, p.I3)(b) && J && !ne) {
								V && me(void 0), S.dispatch((0, m.r4)()), Q(!0), b && b !== te && G(b);
								const oe = await (0, p.py)(b, Q, S, K, q, new c(b, $ ? `${K.location.pathname}${K.location.search}` : void 0));
								ie.delete(E.BV);
								const de = ie.toString();
								K.replace(h({}, K.location, {
									pathname: oe,
									search: de
								}, k ? {
									hash: k
								} : {})), S.dispatch((0, m.WF)())
							}
						} catch (oe) {
							S.dispatch((0, m.WF)()), console.error(oe)
						} finally {
							Q(!1)
						}
					};
					return (0, e.useEffect)(() => {
						z()
					}, [K.location.pathname, K.location.search, ne]), (re || (0, p.I3)(b)) && J ? null : I
				},
				M = t("../react/app/components/DeepLink/reducer.ts"),
				T = A
		},
		"../react/app/components/DeepLink/reducer.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
						let _ = i;
						try {
							_ = i.set("lastAction", d)
						} catch {
							_ = i.set("lastAction", {
								type: d.type
							})
						}
						return _
					}
				} else return i
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(F, v, t) {
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
			const e = p => p.deepLink.lastAction,
				o = p => p.deepLink.isResolving,
				a = p => p.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				I3: function() {
					return l
				},
				X1: function() {
					return r
				},
				mL: function() {
					return L
				},
				py: function() {
					return O
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
				_ = t("../react/common/validators/index.js"),
				n = t("../react/common/utils/isGuards.ts");
			const r = h => (0, _.Lb)(h) && (h.split(".").length > 1 || (0, n.v5)(h)),
				s = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				l = h => typeof h == "string" && h.startsWith("/"),
				c = (h, R) => y => new Promise((C, N) => {
					R.start();
					const A = h.subscribe(() => {
						const M = (0, i.yI)(h.getState());
						M === o.E ? (R.cancel(), A(), N("DeepLink: waitForAction out of context.")) : y(M) && (R.finish(M.type), A(), C(M))
					})
				}),
				f = (h, R, y) => (C, N) => new Promise((A, M) => {
					y.start();
					const T = R.location.pathname;
					C = new URL(C, window.location.href).pathname, T !== C && (y.cancel(), M(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${C}", but on "${T}". You need to redirect to "${C}", and unblockRouter in your Resolver, before you use this function.`));
					const I = h.subscribe(() => {
						const S = (0, i.yI)(h.getState()),
							K = R.location.pathname,
							ne = new URLSearchParams(R.location.search).get(d.BV);
						(K !== C || !!ne) && (y.cancel(), I(), M(`DeepLink: waitForPageAction user navigated away from "${C}" to "${K}${ne?R.location.search:""}"`)), S === o.E ? (y.cancel(), I(), M("DeepLink: waitForPageAction out of context.")) : N(S) && (y.finish(S.type), I(), A(S))
					})
				});

			function E(h) {
				const R = [],
					y = h.split("?")[0].split("/");
				for (let C of y) C.length !== 0 && (C.startsWith(":") ? R.push({
					value: C.substring(1),
					type: "dynamic"
				}) : R.push({
					value: C,
					type: "static"
				}));
				return R
			}
			async function O(h, R, y, C, N, A) {
				A.start();
				const M = E(h),
					I = await (await Promise.all([t.e(32375), t.e(72019), t.e(78839), t.e(60091), t.e(94923), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					S = {};
				let K = "";
				for (const [q, ne] of M.entries())
					if (ne.type === "static") K = [K, ne.value].join("/");
					else if (ne.type === "dynamic" && s.is(ne.value) && ne.value in I) {
					A.resolverStart(ne.value);
					const re = await I[ne.value]({
						deepLink: h,
						blockRouter: () => R(!0),
						unblockRouter: () => R(!1),
						routerHistory: C,
						resolvedValues: S,
						store: y,
						referringRoute: N,
						uri: {
							currentPartIdx: q,
							parts: M
						},
						waitForAction: c(y, A.createUserActionTracker(ne.value)),
						waitForPageAction: f(y, C, A.createUserActionTracker(ne.value))
					});
					A.resolverDone(ne.value), K = [K, re].join("/"), S[ne.value] = re
				} else throw A.cancel(), new Error(`DeepLink: Resolver with name '${ne.value}' is not supported.`);
				return A.done(), K
			}

			function L(h, R) {
				const y = ":account",
					C = ":zone",
					N = R.get("zone");
				if (N) return R.delete("zone"), `/${y}/${C}/${N}`;
				const A = R.get("account");
				if (A) return R.delete("account"), `/${y}/${A}`;
				if (h === "/overview") return `/${y}/${C}`;
				if (h === "/apps") return `/${y}/${C}/${m(h)}`;
				const M = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const T of M) {
					const I = T.length;
					if (h.startsWith(T) && (h.length === I || h[I] === "/")) return `/${y}/${C}${h}`
				}
				switch (h) {
					case "/account/billing":
						return `/${y}/billing`;
					case "/account/subscriptions":
						return `/${y}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${y}/dns-firewall`;
					case "/account/audit-log":
						return `/${y}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				p = t("../react/app/components/SomethingWrong.jsx"),
				u = t("../utils/sentry/lastSentEventId.ts"),
				m = t("../react/utils/zaraz.ts"),
				i = t("../react/utils/url.ts");
			const d = ({
				sentryTag: _,
				children: n
			}) => o().createElement(a.SV, {
				beforeCapture: r => {
					_ && r.setTag("errorBoundary", _), m.tg === null || m.tg === void 0 || m.tg.track("page-error", {
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
			}, n)
		},
		"../react/app/components/Footer.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
				Z: function() {
					return Z
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
				_ = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				r = t("../react/utils/translator.tsx"),
				s = t("../../../../node_modules/moment/moment.js"),
				l = t.n(s);
			const c = () => {
					const x = l()().format("YYYY"),
						J = ie => {
							d().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: ie
							})
						};
					return o().createElement(f, {
						marginTop: "auto"
					}, o().createElement(E, null, o().createElement(O, null, o().createElement(L, null, "\xA9 ", x, " Cloudflare, Inc."), o().createElement(L, null, o().createElement(h, null, o().createElement(R, {
						showOnDeskTop: !1
					}, o().createElement(y, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => J("Support")
					}, o().createElement(r.cC, {
						id: "common.support"
					}))), o().createElement(R, null, o().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => J("Privacy Policy")
					}, o().createElement(r.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(R, null, o().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => J("Terms of Use")
					}, o().createElement(r.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(R, null, o().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => J("Cookie Preferences")
					}, o().createElement(r.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(R, null, o().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => J("Trademark")
					}, o().createElement(r.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(h, null, o().createElement(R, null, o().createElement(y, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => J("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(r.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				f = (0, u.createComponent)(({
					theme: x,
					marginTop: J
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: J
				})),
				E = (0, u.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				O = (0, u.createComponent)(({
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
				L = (0, u.createComponent)(({
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
					theme: J
				}) => ({
					color: J.colors.white,
					fontSize: J.fontSizes[1],
					height: "20px",
					display: x ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: J.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: J.space[3],
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
				y = (0, u.createStyledComponent)(({
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
				A = t("../react/utils/cookiePreferences.ts"),
				M = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				I = () => {
					const [x, J] = (0, e.useState)(!1), ie = (0, A.wV)(), $ = () => {
						J(!0)
					}, b = () => {
						J(!1)
					}, k = ie && ie === "US" ? (0, r.ZP)("footer.cpra_cta.privacy_choices") : (0, r.ZP)("footer.cpra_cta.cookie_preferences"), z = {
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
						style: z,
						onMouseEnter: $,
						onMouseLeave: b
					}, o().createElement(p.Ei, {
						height: 15,
						src: M,
						mr: 2,
						alt: k
					}), k)
				};

			function S() {
				return S = Object.assign ? Object.assign.bind() : function(x) {
					for (var J = 1; J < arguments.length; J++) {
						var ie = arguments[J];
						for (var $ in ie) Object.prototype.hasOwnProperty.call(ie, $) && (x[$] = ie[$])
					}
					return x
				}, S.apply(this, arguments)
			}

			function K(x, J) {
				if (x == null) return {};
				var ie = q(x, J),
					$, b;
				if (Object.getOwnPropertySymbols) {
					var k = Object.getOwnPropertySymbols(x);
					for (b = 0; b < k.length; b++) $ = k[b], !(J.indexOf($) >= 0) && (!Object.prototype.propertyIsEnumerable.call(x, $) || (ie[$] = x[$]))
				}
				return ie
			}

			function q(x, J) {
				if (x == null) return {};
				var ie = {},
					$ = Object.keys(x),
					b, k;
				for (k = 0; k < $.length; k++) b = $[k], !(J.indexOf(b) >= 0) && (ie[b] = x[b]);
				return ie
			}
			const ne = (0, u.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,m.Yc)()?m.rS.colors.orange[6]:m.rS.colors.blue[4]}`
					}
				}), p.A),
				re = (0, u.createStyledComponent)(({
					theme: x
				}) => ({
					color: x.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, _.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: x.colors.gray[4]
					}
				}), p.A),
				Q = x => {
					let {
						onClick: J
					} = x, ie = K(x, ["onClick"]);
					return React.createElement(ne, S({
						onClick: $ => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: ie.href
							}), J && J($)
						}
					}, ie))
				},
				V = x => {
					let {
						children: J,
						target: ie,
						rel: $
					} = x, b = K(x, ["children", "target", "rel"]);
					return o().createElement(re, S({
						target: ie || "_blank",
						rel: $ || "noopener noreferrer"
					}, b), J)
				},
				me = (0, u.createStyledComponent)(({
					theme: x
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, _.tq)() ? "8px" : "16px",
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
				te = (0, u.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, _.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), p.ZC);
			var Z = () => {
				const x = [N.d.root.pattern].some(ie => (0, a.matchPath)(location.pathname, {
					path: ie
				}));
				if ((0, n.PP)()) return o().createElement(C, null);
				if (x) return null;
				const J = new Date().getFullYear();
				return o().createElement(p.$_, {
					height: (0, _.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto"
				}, o().createElement(te, null, o().createElement(me, null, o().createElement(p.Li, null, o().createElement(V, {
					href: "https://support.cloudflare.com"
				}, (0, r.ZP)("common.support"))), o().createElement(p.Li, null, o().createElement(V, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(p.Dr, {
					textTransform: "capitalize"
				}, (0, r.ZP)("footer.system_status")))), o().createElement(p.Li, null, o().createElement(V, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, r.ZP)("footer.careers"))), o().createElement(p.Li, null, o().createElement(V, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, r.ZP)("footer.tos_reduced"))), o().createElement(p.Li, null, o().createElement(V, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, r.ZP)("footer.security_issues"))), o().createElement(p.Li, null, o().createElement(V, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, r.ZP)("footer.privacy_policy"))), o().createElement(p.Li, null, o().createElement(I, null)), o().createElement(p.Li, null, o().createElement(p.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", J, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(F, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/components/ErrorStatus.tsx"),
				p = t("../react/utils/translator.tsx");
			const u = m => o().createElement(a.Z, m, (0, p.ZP)("error.forbidden"));
			v.Z = u
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return l
				},
				Z: function() {
					return ie
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
				_ = t("../react/common/components/ButtonWithDropdown.tsx"),
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
					const $ = (0, s.Z)("super-add-button-copy-change"),
						b = [{
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
					switch ($) {
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
							}, ...b];
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
							}, ...b];
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
							}, ...b];
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
							}, ...b];
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
							}, ...b];
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
			var E = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				O = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				L = t.n(O);

			function h($) {
				for (var b = 1; b < arguments.length; b++) {
					var k = arguments[b] != null ? Object(arguments[b]) : {},
						z = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(k).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(k, oe).enumerable
					})), z.forEach(function(oe) {
						R($, oe, k[oe])
					})
				}
				return $
			}

			function R($, b, k) {
				return b = y(b), b in $ ? Object.defineProperty($, b, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[b] = k, $
			}

			function y($) {
				var b = C($, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function C($, b) {
				if (typeof $ != "object" || $ === null) return $;
				var k = $[Symbol.toPrimitive];
				if (k !== void 0) {
					var z = k.call($, b || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)($)
			}

			function N() {
				return N = Object.assign ? Object.assign.bind() : function($) {
					for (var b = 1; b < arguments.length; b++) {
						var k = arguments[b];
						for (var z in k) Object.prototype.hasOwnProperty.call(k, z) && ($[z] = k[z])
					}
					return $
				}, N.apply(this, arguments)
			}

			function A($, b) {
				if ($ == null) return {};
				var k = M($, b),
					z, oe;
				if (Object.getOwnPropertySymbols) {
					var de = Object.getOwnPropertySymbols($);
					for (oe = 0; oe < de.length; oe++) z = de[oe], !(b.indexOf(z) >= 0) && (!Object.prototype.propertyIsEnumerable.call($, z) || (k[z] = $[z]))
				}
				return k
			}

			function M($, b) {
				if ($ == null) return {};
				var k = {},
					z = Object.keys($),
					oe, de;
				for (de = 0; de < z.length; de++) oe = z[de], !(b.indexOf(oe) >= 0) && (k[oe] = $[oe]);
				return k
			}
			const T = $ => {
					let {
						title: b,
						trackingEvent: k,
						icon: z,
						url: oe,
						description: de,
						disabled: ye
					} = $, Te = A($, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(I, N({
						to: !ye && oe || "#",
						"aria-disabled": ye,
						onClick: () => {
							L().sendEvent(k, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, Te), o().createElement(p.ZC, {
						display: "flex"
					}, o().createElement(a.J, {
						type: z,
						size: 24,
						mr: 2
					}), o().createElement(p.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(p.ZC, {
						fontSize: 3
					}, o().createElement(r.cC, b)), o().createElement(p.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(r.cC, de)))))
				},
				I = (0, m.createStyledComponent)(({
					theme: $
				}) => {
					const b = {
						cursor: "pointer",
						backgroundColor: (0, u.Yc)() ? $.colors.gray[8] : $.colors.gray[9],
						color: $.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: $.colors.background,
						color: $.colors.gray[2],
						fontSize: $.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': b,
						':focus-within:not([aria-disabled="true"])': h({}, b, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: $.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, E.Link);
			var S = T;

			function K() {
				return K = Object.assign ? Object.assign.bind() : function($) {
					for (var b = 1; b < arguments.length; b++) {
						var k = arguments[b];
						for (var z in k) Object.prototype.hasOwnProperty.call(k, z) && ($[z] = k[z])
					}
					return $
				}, K.apply(this, arguments)
			}

			function q($) {
				for (var b = 1; b < arguments.length; b++) {
					var k = arguments[b] != null ? Object(arguments[b]) : {},
						z = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(k).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(k, oe).enumerable
					})), z.forEach(function(oe) {
						ne($, oe, k[oe])
					})
				}
				return $
			}

			function ne($, b, k) {
				return b = re(b), b in $ ? Object.defineProperty($, b, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[b] = k, $
			}

			function re($) {
				var b = Q($, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function Q($, b) {
				if (typeof $ != "object" || $ === null) return $;
				var k = $[Symbol.toPrimitive];
				if (k !== void 0) {
					var z = k.call($, b || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)($)
			}

			function V($, b) {
				if ($ == null) return {};
				var k = me($, b),
					z, oe;
				if (Object.getOwnPropertySymbols) {
					var de = Object.getOwnPropertySymbols($);
					for (oe = 0; oe < de.length; oe++) z = de[oe], !(b.indexOf(z) >= 0) && (!Object.prototype.propertyIsEnumerable.call($, z) || (k[z] = $[z]))
				}
				return k
			}

			function me($, b) {
				if ($ == null) return {};
				var k = {},
					z = Object.keys($),
					oe, de;
				for (de = 0; de < z.length; de++) oe = z[de], !(b.indexOf(oe) >= 0) && (k[oe] = $[oe]);
				return k
			}
			const te = "GLOBAL_ADD_DROPDOWN",
				G = ({
					disableProducts: $
				}) => {
					const b = c();
					return o().createElement(Z, {
						role: "group",
						"data-testid": te
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
						menu: o().createElement(_.v2, {
							overflow: "auto",
							maxHeight: "80vh",
							width: "min(50vw, 340px)",
							whiteSpace: "normal",
							mr: 1,
							p: "8px 0",
							bottom: "auto",
							zIndex: 1200
						}, b.map(k => {
							const z = k || {},
								{
									disableOn: oe,
									permissionCheck: de
								} = z,
								ye = V(z, ["disableOn", "permissionCheck"]),
								Te = oe && $[oe],
								Me = q({}, ye, {
									disabled: Te
								});
							return de ? o().createElement(d.Z, {
								key: k.title.id,
								edit: de
							}, ({
								isEditable: Ne
							}) => Ne && o().createElement(S, Me)) : o().createElement(S, K({
								key: k.url
							}, Me))
						}))
					}))
				},
				Z = (0, m.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				x = (0, m.createStyledComponent)(({
					theme: $
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: $.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, u.Yc)() ? $.colors.gray[1] : $.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, u.Yc)() ? $.colors.gray[8] : $.colors.gray[9]
					}
				}), p.zx);
			var J = G,
				ie = J
		},
		"../react/app/components/LoadingSuspense.tsx": function(F, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../react/utils/translator.tsx"),
				m = t("../react/app/components/ErrorStatus.tsx"),
				i = t("../react/common/components/EmptyPage.jsx"),
				d = t("../react/common/hooks/suspenseHelpers.ts");

			function _(s) {
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
					const c = _(s),
						f = _(l);
					if ((0, d.nW)(), !c && !f) return o().createElement(i.Z, null);
					const E = f ? o().createElement(u.cC, {
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
					})), E)
				},
				r = ({
					children: s
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(n, null)
				}, s);
			v.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return _
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
				}, _ = async r => {
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
		"../react/app/components/Persistence/index.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
				Wl: function() {
					return _
				},
				lp: function() {
					return E
				},
				Z_: function() {
					return L
				},
				r7: function() {
					return I
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
			const _ = 10;

			function n(te) {
				for (var G = 1; G < arguments.length; G++) {
					var Z = arguments[G] != null ? Object(arguments[G]) : {},
						x = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(Z).filter(function(J) {
						return Object.getOwnPropertyDescriptor(Z, J).enumerable
					})), x.forEach(function(J) {
						r(te, J, Z[J])
					})
				}
				return te
			}

			function r(te, G, Z) {
				return G = s(G), G in te ? Object.defineProperty(te, G, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : te[G] = Z, te
			}

			function s(te) {
				var G = l(te, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function l(te, G) {
				if (typeof te != "object" || te === null) return te;
				var Z = te[Symbol.toPrimitive];
				if (Z !== void 0) {
					var x = Z.call(te, G || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(te)
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
				E = (0, e.createContext)(f),
				O = E.Consumer,
				L = ({
					children: te,
					onDarkModeChangeCb: G
				}) => {
					const [Z, x] = (0, e.useState)(c), [J, ie] = (0, e.useState)(f.isLoading), $ = (0, m.$8)(), b = (0, a.p4)(de => (0, i.wH)(de));
					(0, e.useEffect)(() => {
						$ ? (0, d.yl)().then(de => {
							de && (x(de), G(de.darkMode))
						}).finally(() => ie(!1)) : ie(!1)
					}, [$]);
					const k = (de, ye) => !!Z.favorites.find(Te => Te.type === "zone" && Te.name === de && Te.accountId === ye),
						z = _ - Z.favorites.length,
						oe = de => Z.favorites.filter(Te => Te.type === "zone" && Te.accountId === de).length < _;
					return o().createElement(E.Provider, {
						value: n({}, Z, {
							isLoading: J,
							remainingStarSlots: z,
							actions: {
								canAccountStarZone: oe,
								isZoneStarred: k,
								starZone: async (de, ye) => {
									var Te;
									const Me = !k(de, ye),
										Ne = oe(ye);
									if (Me && !Ne) {
										console.log("can not star zone - account is at limit");
										return
									}
									const He = await (0, d.lt)(de, ye);
									u().sendEvent("click star zone", {
										isStarring: Me,
										totalStarredZones: He.filter(ke => ke.accountId === ye && ke.type === "zone").length,
										totalZones: b == null || (Te = b.paginationData) === null || Te === void 0 ? void 0 : Te.info.total_count
									}), x(n({}, Z, {
										favorites: He
									}))
								},
								setDarkMode: async de => {
									const ye = await (0, d.C8)(de);
									x(ye), G(ye.darkMode)
								},
								logRouteVisited: async de => {
									var ye;
									const Te = await (0, d.n)(de);
									x((ye = Te) !== null && ye !== void 0 ? ye : n({}, Z))
								},
								viewChange: async de => {
									const ye = await (0, d.m6)(de);
									x(n({}, Z, {
										viewedChanges: ye
									}))
								}
							}
						})
					}, te)
				},
				h = () => (0, e.useContext)(E);
			var R = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				y = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function C() {
				return C = Object.assign ? Object.assign.bind() : function(te) {
					for (var G = 1; G < arguments.length; G++) {
						var Z = arguments[G];
						for (var x in Z) Object.prototype.hasOwnProperty.call(Z, x) && (te[x] = Z[x])
					}
					return te
				}, C.apply(this, arguments)
			}

			function N(te, G) {
				if (te == null) return {};
				var Z = A(te, G),
					x, J;
				if (Object.getOwnPropertySymbols) {
					var ie = Object.getOwnPropertySymbols(te);
					for (J = 0; J < ie.length; J++) x = ie[J], !(G.indexOf(x) >= 0) && (!Object.prototype.propertyIsEnumerable.call(te, x) || (Z[x] = te[x]))
				}
				return Z
			}

			function A(te, G) {
				if (te == null) return {};
				var Z = {},
					x = Object.keys(te),
					J, ie;
				for (ie = 0; ie < x.length; ie++) J = x[ie], !(G.indexOf(J) >= 0) && (Z[J] = te[J]);
				return Z
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
			var I = te => {
					let {
						isStarred: G,
						size: Z = 16
					} = te, x = N(te, ["isStarred", "size"]);
					const J = M[(0, R.Yc)() ? "dark" : "light"];
					return o().createElement(y.J, C({
						type: G ? "star" : "star-outline",
						color: G ? J.gold : J.gray,
						size: Z
					}, x))
				},
				S = t("../node_modules/@cloudflare/elements/es/index.js");

			function K(te) {
				for (var G = 1; G < arguments.length; G++) {
					var Z = arguments[G] != null ? Object(arguments[G]) : {},
						x = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(Z).filter(function(J) {
						return Object.getOwnPropertyDescriptor(Z, J).enumerable
					})), x.forEach(function(J) {
						q(te, J, Z[J])
					})
				}
				return te
			}

			function q(te, G, Z) {
				return G = ne(G), G in te ? Object.defineProperty(te, G, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : te[G] = Z, te
			}

			function ne(te) {
				var G = re(te, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function re(te, G) {
				if (typeof te != "object" || te === null) return te;
				var Z = te[Symbol.toPrimitive];
				if (Z !== void 0) {
					var x = Z.call(te, G || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(te)
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
			var me = (0, e.forwardRef)(({
				featurePreview: te = !1,
				isStarred: G,
				onClickFn: Z,
				isDisabled: x,
				testId: J,
				buttonText: ie,
				size: $ = "large",
				variant: b = "pill"
			}, k) => {
				const [z, oe] = (0, e.useState)(!1), de = Q[(0, R.Yc)() ? "dark" : "light"][G && !te ? "active" : "default"], ye = K({}, $ === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, $ === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, $ === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), Te = {
					pill: "50vh",
					button: 4
				};
				return o().createElement(S.zx, {
					onMouseEnter: () => oe(!0),
					onMouseLeave: () => oe(!1),
					innerRef: k,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: ye.paddingRight,
					gap: 1,
					pl: ye.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: Te[b],
					border: "1px solid",
					cursor: te || x ? "default" : "pointer",
					backgroundColor: z ? de.bgHover : de.bg,
					color: de.text,
					borderColor: de.border,
					onClick: Z,
					opacity: x ? .5 : 1,
					disabled: x,
					fontSize: ye.fontSize,
					height: ye.height,
					"data-testid": J
				}, o().createElement(I, {
					isStarred: te ? !1 : G,
					size: ye.starIconSize
				}), ie)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return E
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
					return y
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
				_ = t("../react/pages/r2/selectors.ts");
			const n = T => !!(0, u.b)(T),
				r = T => n(T) ? (0, e.hT)(T) : !0,
				s = (T, I, S, K = "read") => {
					const q = (0, a.nA)(T);
					return n(T) ? (0, e.WL)(T, (0, e.W9)(S, e.ZZ[K]), (0, e.j)(q == null ? void 0 : q.id)) : (0, p.Yj)(T)(I)[K]
				},
				l = (T, I, S, K = "read") => {
					const q = (0, a.nA)(T),
						ne = e.zs.includes(S);
					return n(T) ? (0, e.WL)(T, ne ? S : (0, e.my)(S, e.ZZ[K === "edit" ? "update" : K]), (0, e.j)(q == null ? void 0 : q.id)) : (0, p.Yj)(T)(I)[K === "update" ? "edit" : K]
				},
				c = T => !!(0, m._Q)(T),
				f = T => (0, d.pT)(T),
				E = T => (0, d.pT)(T) && (0, d.GH)(T),
				O = T => sourcingKitEnabledSelector(T),
				L = T => !!r2EnabledSelector(T),
				h = T => (0, _.Mv)(T),
				R = T => (0, o.$f)(T, "rulesets.magic_transit_allowed"),
				y = T => (0, o.$f)(T, "flowtrackd.magic_custom_config_allowed"),
				C = T => (0, o.$f)(T, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				N = T => (0, p.Le)(T, "ddos_protection", "l4_rulesets"),
				A = T => hasAccountEntitlements(T, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				M = T => (0, i.HO)(T)
		},
		"../react/app/components/SomethingWrong.jsx": function(F, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = t.n(a),
				u = t("../../../../node_modules/prop-types/index.js"),
				m = t.n(u),
				i = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				d = t.n(i),
				_ = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				n = t("../node_modules/@cloudflare/component-button/es/index.js"),
				r = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				s = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				l = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = t.n(f),
				O = t("../react/utils/url.ts"),
				L = t("../react/app/components/Footer.tsx");

			function h(re) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var V = arguments[Q] != null ? Object(arguments[Q]) : {},
						me = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && me.push.apply(me, Object.getOwnPropertySymbols(V).filter(function(te) {
						return Object.getOwnPropertyDescriptor(V, te).enumerable
					})), me.forEach(function(te) {
						R(re, te, V[te])
					})
				}
				return re
			}

			function R(re, Q, V) {
				return Q = y(Q), Q in re ? Object.defineProperty(re, Q, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : re[Q] = V, re
			}

			function y(re) {
				var Q = C(re, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function C(re, Q) {
				if (typeof re != "object" || re === null) return re;
				var V = re[Symbol.toPrimitive];
				if (V !== void 0) {
					var me = V.call(re, Q || "default");
					if (typeof me != "object") return me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(re)
			}
			const N = (0, _.createComponent)(({
					type: re
				}) => ({
					height: re !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				A = (0, _.createComponent)(({
					theme: re,
					margin: Q,
					size: V = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: re.colors.gray[3],
					height: Q ? "auto" : "100%",
					padding: Q ? 0 : re.space[V > 1 ? V - 2 : 0],
					margin: Q,
					justifyContent: "center",
					alignItems: "center"
				})),
				M = (0, _.createComponent)(() => ({
					textAlign: "left"
				})),
				T = (0, _.createComponent)(() => ({
					textAlign: "right"
				})),
				I = (0, _.createComponent)(({
					theme: re
				}) => ({
					fontSize: re.fontSizes[6]
				})),
				S = (0, _.createComponent)(({
					theme: re
				}) => ({
					fontSize: re.fontSizes[4]
				})),
				K = (0, _.createComponent)(({
					theme: re
				}) => ({
					fontSize: re.fontSizes[3]
				})),
				q = (0, _.createComponent)(({
					theme: re
				}) => ({
					width: "100%",
					height: 125,
					marginTop: re.space[4],
					padding: re.space[2]
				}), "textarea");
			class ne extends o().Component {
				constructor(...Q) {
					super(...Q);
					R(this, "state", {
						value: "",
						submitted: !1
					}), R(this, "handleTextareaChange", V => {
						this.setState({
							value: V.target.value
						})
					}), R(this, "sendErrToSentry10", async () => {
						try {
							var V, me, te, G;
							const Z = ((V = window) === null || V === void 0 || (me = V.bootstrap) === null || me === void 0 || (te = me.data) === null || te === void 0 || (G = te.user) === null || G === void 0 ? void 0 : G.id) || "Unknown",
								x = this.props.eventId || r.eW(),
								J = {
									name: Z,
									email: `${Z}@userid.com`,
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
								body: JSON.stringify(J)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (Z) {
							console.error(Z)
						}
					}), R(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), R(this, "renderContent", V => o().createElement(i.I18n, null, me => o().createElement(N, {
						type: V
					}, o().createElement(A, null, o().createElement(M, null, o().createElement(I, null, me.t("error.internal_issues")), o().createElement(S, null, me.t("error.help_us")), o().createElement(q, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: te => this.handleTextareaChange(te),
						disabled: this.state.submitted,
						placeholder: me.t("error.give_feedback")
					}), o().createElement(T, null, !this.state.submitted && o().createElement(n.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, me.t("common.submit")), this.state.submitted && o().createElement(K, null, me.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const Q = this.props.error;
					console.error(`SomethingWrong: ${Q}`), s.YA("user_feedback_form_displayed", "yes"), s.YA("normalizedPath", (0, O.Fl)(window.location.pathname)), E().sendEvent("something wrong", {
						error: Q
					})
				}
				render() {
					const {
						type: Q
					} = this.props;
					return Q === "fullscreen" ? o().createElement("div", null, o().createElement(l.h4, null, o().createElement(a.Link, {
						to: "/"
					}, o().createElement(c.TR, null))), this.renderContent(Q), o().createElement(L.Z, null)) : this.renderContent(Q)
				}
			}
			ne.propTypes = {
				type: m().oneOf(["fullscreen", "page"]),
				error: m().oneOfType([m().string, m().object]),
				eventId: m().string
			}, v.Z = ne
		},
		"../react/app/redux/index.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/app/redux/normalizer.js": function(F, v, t) {
			"use strict";
			t.d(v, {
				P1: function() {
					return _
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
				_ = (...r) => (0, p.P1)(i, d, ...r),
				n = (0, p.QB)(i)
		},
		"../react/app/redux/utils.ts": function(F, v, t) {
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
			const o = p => (u, m, i) => (0, e.SC)(u, m, i, {
					hideErrorAlert: !0
				}).catch(p),
				a = p => u => {
					if (u.status === p) return u;
					throw u
				}
		},
		"../react/common/actionTypes.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return _
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
				_ = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(s) {
				return s.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", s.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", s.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", s.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", s.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", s.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", s.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", s.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", s.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", s
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				AX: function() {
					return s
				},
				YT: function() {
					return _
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
						E = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(f).filter(function(O) {
						return Object.getOwnPropertyDescriptor(f, O).enumerable
					})), E.forEach(function(O) {
						p(l, O, f[O])
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
					var E = f.call(l, c || "default");
					if (typeof E != "object") return E;
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
				_ = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", i),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...l) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: l
				}),
				s = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", d)
		},
		"../react/common/actions/modalActions.ts": function(F, v, t) {
			"use strict";
			t.r(v), t.d(v, {
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
		"../react/common/actions/notificationsActions.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return _
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

			function _(n, r) {
				return u("error", n, r)
			}
		},
		"../react/common/actions/userActions.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				BT: function() {
					return i
				},
				Ut: function() {
					return O
				},
				V_: function() {
					return L
				},
				Y9: function() {
					return f
				},
				Z0: function() {
					return R
				},
				mp: function() {
					return E
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

			function a(y) {
				for (var C = 1; C < arguments.length; C++) {
					var N = arguments[C] != null ? Object(arguments[C]) : {},
						A = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(N).filter(function(M) {
						return Object.getOwnPropertyDescriptor(N, M).enumerable
					})), A.forEach(function(M) {
						p(y, M, N[M])
					})
				}
				return y
			}

			function p(y, C, N) {
				return C = u(C), C in y ? Object.defineProperty(y, C, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[C] = N, y
			}

			function u(y) {
				var C = m(y, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function m(y, C) {
				if (typeof y != "object" || y === null) return y;
				var N = y[Symbol.toPrimitive];
				if (N !== void 0) {
					var A = N.call(y, C || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(y)
			}
			const i = (0, e.C)("user").get`/user`,
				d = (0, e.C)("user").patch`/user`,
				_ = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/two_factor_authentication`,
				l = (0, e.C)("user").delete`/user/two_factor_authentication`,
				c = (0, e.C)("user").put`/user/email`;

			function f(...y) {
				return c(...y)
			}
			const E = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				O = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(y => a({}, y, {
					body: a({}, y.body, {
						result: {}
					})
				}))),
				L = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				h = (0, e.C)("userDetails").get`/user/details`,
				R = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(F, v, t) {
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
				let _;
				typeof u == "boolean" && u !== void 0 && d ? _ = {
					read: u,
					list: u,
					create: u,
					update: u,
					delete: u,
					sign: u
				} : _ = (0, e.Z)(p);
				const n = i || m;
				return n ? n(_) : null
			};
			v.Z = a
		},
		"../react/common/components/AccessCheck/constants.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				L8: function() {
					return n
				},
				W9: function() {
					return _
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
				_ = (s, l) => `${a}${s}.${l}`,
				n = (s = "") => `${o}${s}`,
				r = (s = "") => `${p}${s}`
		},
		"../react/common/components/AccessCheck/index.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(F, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../react/app/redux/index.ts"),
				p = t("../react/common/selectors/accountSelectors.ts"),
				u = t("../react/pages/zone-versioning/selectors.ts");

			function m(i) {
				const {
					read: d,
					edit: _
				} = (0, a.p4)(p.Yj)(i);
				let n = _;
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
			v.Z = m
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
				_ = 2,
				n = 3;

			function r(C, N, A, M) {
				let T = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					I;
				for (I in T) T[I] = s(C, `${N}.${I}`, A, M);
				return T
			}

			function s(C, N, A, M) {
				var T;
				if (l(N) && !c(N)) {
					const ne = (0, u.G)(C);
					if (ne == null ? void 0 : ne.isLocked) return !1
				}
				const I = (T = (0, o.D0)(C)) === null || T === void 0 ? void 0 : T.id,
					S = I ? [`com.cloudflare.api.account.${I}`] : void 0,
					K = (0, a.vq)(I);
				return !!E(C, K, N, A, M || S)
			}

			function l(C) {
				return ![p.ZZ.read, p.ZZ.list].some(N => C.endsWith(N))
			}

			function c(C) {
				return C.includes("zone.versioning")
			}

			function f(C) {
				const N = (0, o.Ko)(C);
				let A = !1;
				return N == null || N.forEach(M => {
					M.access === m.allow && M.permission_groups.forEach(T => {
						var I;
						(T == null || (I = T.meta) === null || I === void 0 ? void 0 : I.scopes) === p.u1 && (A = !0)
					})
				}), A
			}

			function E(C, N, A, M, T) {
				const I = (0, o.Ko)(C),
					S = {};
				I == null || I.forEach(re => {
					var Q;
					const V = re.access;
					let me = i;
					if (A && re.permission_groups.forEach(te => {
							var G, Z;
							N == null || (G = N.find(x => x.id === te.id)) === null || G === void 0 || (Z = G.permissions) === null || Z === void 0 || Z.forEach(x => {
								me = Math.max(me, O(x, A))
							})
						}), me !== i && !!M) {
						let te = i;
						re.resource_groups.forEach(G => {
							te = Math.max(te, h(G.scope, M, T))
						}), me = te === i ? te : me + te
					}(S == null || (Q = S[V]) === null || Q === void 0 ? void 0 : Q[me]) || (0, e.Z)(S, [V, me], []), S[V][me].push(re)
				});
				const K = S[m.allow] && Object.keys(S[m.allow]).map(re => parseInt(re)),
					q = S[m.deny] && Object.keys(S[m.deny]).map(re => parseInt(re)),
					ne = Math.max.apply(Math, K);
				return ne === i || Math.max.apply(Math, q) >= ne ? null : S[m.allow][ne]
			}

			function O(C, N) {
				if (C.key === N || L(C.key, N)) return n;
				for (const A of (C == null ? void 0 : C.implies) || []) {
					let M = O(A, N);
					if (M > i) return M
				}
				return i
			}

			function L(C, N) {
				const A = N == null ? void 0 : N.lastIndexOf(".");
				return A === -1 ? !1 : (N == null ? void 0 : N.substring(0, A)) + ".*" === C
			}

			function h(C, N, A) {
				var M;
				let T = i;
				if (C == null || (M = C.objects) === null || M === void 0 || M.forEach(I => {
						T = Math.max(T, y(I, N))
					}), T === i) return T;
				if (C.key !== "*") switch (!0) {
					case R(C.key, A) > i:
					case (!(A == null ? void 0 : A.length) && T === n):
						break;
					case (T === d && R(C.key, [N]) > i):
						T = R(C.key, [N]);
						break;
					default:
						return i
				}
				for (const I of C.subset_of || [])
					if (R(I.key, A) === i) return i;
				return T
			}

			function R(C, N = []) {
				for (const A of N || []) {
					if (C === A) return n;
					if (L(C, A)) return _
				}
				return i
			}

			function y(C, N) {
				return C.key === N ? n : C.key === "*" ? d : L(C.key, N) ? _ : i
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(F, v, t) {
			"use strict";
			t.d(v, {
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
						accountId: _,
						legacyPermission: n
					} = i;
					let {
						read: r,
						edit: s
					} = i;
					const l = {};
					n && (s = `#${n}:edit`, r = `#${n}:read`);
					const c = d || _;
					if (r) {
						const f = Array.isArray(r) ? r : [r];
						l.isReadable = f.some(E => {
							const O = p(E);
							return (0, a.DT)(m, c, L => !!(L[O.key] && L[O.key][O.value]))
						})
					}
					if (s) {
						const f = Array.isArray(s) ? s : [s];
						l.isEditable = f.some(E => {
							const O = p(E);
							return (0, a.DT)(m, c, L => !!(L[O.key] && L[O.key][O.value]))
						})
					}
					return l
				};
			v.Z = (0, e.connect)(u)
		},
		"../react/common/components/AccessControl/index.js": function(F, v, t) {
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

			function _(r) {
				const l = ["isReadable", "isEditable"].reduce((c, f) => r.hasOwnProperty(f) ? u({}, c, {
					[f]: r[f]
				}) : c, {});
				return r.children(l)
			}
			_.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const n = (0, a.Z)((0, p.Z)(_));
			n.displayName = "AccessControl", v.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/common/components/ButtonWithDropdown.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
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
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(f) {
					for (var E = 1; E < arguments.length; E++) {
						var O = arguments[E];
						for (var L in O) Object.prototype.hasOwnProperty.call(O, L) && (f[L] = O[L])
					}
					return f
				}, n.apply(this, arguments)
			}

			function r(f, E) {
				if (f == null) return {};
				var O = s(f, E),
					L, h;
				if (Object.getOwnPropertySymbols) {
					var R = Object.getOwnPropertySymbols(f);
					for (h = 0; h < R.length; h++) L = R[h], !(E.indexOf(L) >= 0) && (!Object.prototype.propertyIsEnumerable.call(f, L) || (O[L] = f[L]))
				}
				return O
			}

			function s(f, E) {
				if (f == null) return {};
				var O = {},
					L = Object.keys(f),
					h, R;
				for (R = 0; R < L.length; R++) h = L[R], !(E.indexOf(h) >= 0) && (O[h] = f[h]);
				return O
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
					color: (0, _.Yc)() ? f.colors.text : void 0
				},
				"& button:hover": {
					color: (0, _.Yc)() ? f.colors.text : void 0
				}
			}));

			function c(f) {
				let {
					menu: E,
					containerProps: O,
					disabled: L,
					disabledDropdown: h = L
				} = f, R = r(f, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: y
				} = (0, u.useI18n)();
				return o().createElement(l, n({}, O, {
					role: "group"
				}), o().createElement(a.zx, n({}, R, {
					disabled: L
				})), o().createElement(d.Lt, {
					trigger: o().createElement(a.zx, {
						type: R.type,
						"aria-haspopup": "menu",
						disabled: h
					}, o().createElement(p.J, {
						type: "caret-down",
						label: y("common.more"),
						size: 12
					})),
					menu: E
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(F, v, t) {
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
			}, v.Z = m
		},
		"../react/common/components/ModalManager.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					for (var E = 1; E < arguments.length; E++) {
						var O = arguments[E];
						for (var L in O) Object.prototype.hasOwnProperty.call(O, L) && (f[L] = O[L])
					}
					return f
				}, d.apply(this, arguments)
			}
			const _ = o().createContext(null);
			class n extends o().Component {
				render() {
					const {
						modals: E,
						closeModal: O
					} = this.props;
					return o().createElement(o().Fragment, null, E.map(({
						ModalComponent: L,
						props: h = {},
						id: R
					}) => {
						const y = () => {
							typeof h.onClose == "function" && h.onClose(), O(L)
						};
						return o().createElement(_.Provider, {
							key: R,
							value: {
								closeModal: y
							}
						}, o().createElement(m.J$, {
							value: i.ZP
						}, o().createElement(L, d({}, h, {
							isOpen: !0,
							closeModal: y
						}))))
					}))
				}
			}

			function r() {
				const f = o().useContext(_);
				if (!f) throw new Error("useModalContext must be used within a ModalContext");
				return f
			}

			function s() {
				const f = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...E) {
						return f(u.openModal(...E))
					}, [f]),
					closeModal: (0, e.useCallback)(function(...E) {
						return f(u.closeModal(...E))
					}, [f])
				}
			}
			var c = (0, a.connect)(f => ({
				modals: p(f)
			}), u)(n)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return d
				},
				JR: function() {
					return _
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
			let _ = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				n = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(F, v, t) {
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
		"../react/common/constants/analytics/botScoreSrc.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/common/constants/billing/index.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return _
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
				_ = {
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
		"../react/common/constants/billing/tracking.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/common/constants/constants.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				Dk: function() {
					return l
				},
				Dy: function() {
					return c
				},
				E_: function() {
					return m
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
					return _
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
					return E
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
				_ = o().from({
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
					f: _.FREE,
					p: _.PRO,
					b: _.BIZ
				},
				s = "marketing-pt",
				l = () => {
					const L = a.Z.get(s);
					if (!!L) return r[L]
				},
				c = ["gov"],
				f = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				E = "banner-notification-interactions",
				O = null
		},
		"../react/common/constants/index.ts": function(F, v, t) {
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
		"../react/common/constants/roles.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", o.CLOUDFLARE_ACCESS = "Cloudflare Access", o.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", o.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", o.ADMINISTRATOR = "Administrator", o.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", o.ANALYTICS = "Analytics", o.API_GATEWAY = "API Gateway", o.API_GATEWAY_READ = "API Gateway Read", o.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", o.BILLING = "Billing", o.BOT_MANAGEMENT = "Bot Management", o.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", o.CACHE_DOMAIN_PURGE = "Cache Domain Purge", o.CACHE_PURGE = "Cache Purge", o.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", o.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", o.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", o.EMAIL_SECURITY_ANALYST = "Email Security Analyst", o.EMAIL_SECURITY_READONLY = "Email Security Readonly", o.EMAIL_SECURITY_REPORTING = "Email Security Reporting", o.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", o.CLOUDFORCE_ONE_READ = "Cloudforce One Read", o.DNS = "DNS", o.DOMAIN_ADMINISTRATOR = "Domain Administrator", o.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", o.DOMAIN_API_GATEWAY = "Domain API Gateway", o.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", o.DOMAIN_DNS = "Domain DNS", o.DOMAIN_PAGE_SHIELD = "Domain Page Shield", o.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", o.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", o.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", o.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", o.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", o.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", o.HTTP_APPLICATIONS = "HTTP Applications", o.HTTP_APPLICATIONS_READ = "HTTP Applications Read", o.CLOUDFLARE_IMAGES = "Cloudflare Images", o.LOAD_BALANCER = "Load Balancer", o.LOG_SHARE = "Log Share", o.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", o.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", o.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", o.PAGE_SHIELD = "Page Shield", o.PAGE_SHIELD_READ = "Page Shield Read", o.HYPERDRIVE_ADMIN = "Hyperdrive Admin", o.HYPERDRIVE_READONLY = "Hyperdrive Readonly", o.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", o.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", o.LOG_SHARE_READER = "Log Share Reader", o.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", o.CLOUDFLARE_STREAM = "Cloudflare Stream", o.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", o.CLOUDFLARE_DEX = "Cloudflare DEX", o.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", o.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", o.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", o.TRANSFORM_RULES = "Transform Rules", o.TRUST_AND_SAFETY = "Trust and Safety", o.TURNSTILE = "Turnstile", o.TURNSTILE_READ = "Turnstile Read", o.VECTORIZE_ADMIN = "Vectorize Admin", o.VECTORIZE_READONLY = "Vectorize Readonly", o.FIREWALL = "Firewall", o.WAITING_ROOM_ADMIN = "Waiting Room Admin", o.WAITING_ROOM_READ = "Waiting Room Read", o.WORKERS_ADMIN = "Workers Admin", o.ZARAZ_ADMIN = "Zaraz Admin", o.ZARAZ_EDIT = "Zaraz Edit", o.ZARAZ_READONLY = "Zaraz Readonly", o.ZONE_VERSIONING = "Zone Versioning", o.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", o.ZONE_VERSIONING_READ = "Zone Versioning Read", o.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", o.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", o.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", o
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(F, v, t) {
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
						const d = Object.values(e).reduce((_, n) => (_.push(a(i, n)), _.push(a(i, n, !0)), _), []);
						return m.concat(d)
					}, [])) === null || u === void 0 ? void 0 : u.flat()
				}
		},
		"../react/common/hooks/suspenseHelpers.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
				const [_, n] = d;
				o().useLayoutEffect(_, n), m(_)
			}
		},
		"../react/common/hooks/useAccountEntitlement.ts": function(F, v, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(p) {
				return (0, e.p4)(u => (0, o.BF)(u, p))
			}
			v.Z = a
		},
		"../react/common/hooks/useAccountId.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/common/hooks/useCachedState.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
				var _;
				const n = m !== void 0 && i.get(m),
					[r, s] = (0, e.useState)((_ = n) !== null && _ !== void 0 ? _ : u);
				return [r, c => {
					s(f => (c instanceof Function && (c = c(f)), m !== void 0 && i.set(m, c, d), c))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(F, v, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(a) {
				return (0, e.qf)(a)
			}
			v.Z = o
		},
		"../react/common/hooks/usePrevious.ts": function(F, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function a(p) {
				const u = (0, e.useRef)(p);
				return (0, e.useEffect)(() => {
					u.current = p
				}, [p]), u.current
			}
			v.Z = a
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(F, v, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(p) {
				return (0, e.p4)(u => (0, o.rV)(u, p))
			}
			v.Z = a
		},
		"../react/common/middleware/sparrow/errors.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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

			function e(i, d, _) {
				return d = o(d), d in i ? Object.defineProperty(i, d, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = _, i
			}

			function o(i) {
				var d = a(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function a(i, d) {
				if (typeof i != "object" || i === null) return i;
				var _ = i[Symbol.toPrimitive];
				if (_ !== void 0) {
					var n = _.call(i, d || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			class p extends Error {
				constructor(d, _) {
					super(_);
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
				constructor(d, _) {
					super(d, `Found invalid properties on event: "${d}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = _
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				AC: function() {
					return Oe
				},
				Au: function() {
					return ae
				},
				B: function() {
					return se
				},
				B3: function() {
					return Ge
				},
				BG: function() {
					return A
				},
				Bp: function() {
					return ut
				},
				D0: function() {
					return R
				},
				DT: function() {
					return z
				},
				EL: function() {
					return ie
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
					return I
				},
				Le: function() {
					return S
				},
				O4: function() {
					return Re
				},
				Ou: function() {
					return G
				},
				Py: function() {
					return Be
				},
				QI: function() {
					return at
				},
				RO: function() {
					return Ze
				},
				T3: function() {
					return Je
				},
				T8: function() {
					return N
				},
				UX: function() {
					return J
				},
				VP: function() {
					return rt
				},
				Xo: function() {
					return Ve
				},
				Xu: function() {
					return V
				},
				Yi: function() {
					return st
				},
				Yj: function() {
					return b
				},
				Zu: function() {
					return $
				},
				bC: function() {
					return ye
				},
				f8: function() {
					return ne
				},
				hI: function() {
					return ft
				},
				hN: function() {
					return T
				},
				hX: function() {
					return H
				},
				iq: function() {
					return Ce
				},
				nE: function() {
					return M
				},
				oD: function() {
					return x
				},
				oI: function() {
					return q
				},
				oJ: function() {
					return W
				},
				tM: function() {
					return Z
				},
				uF: function() {
					return me
				},
				ut: function() {
					return Ue
				},
				vU: function() {
					return $e
				},
				wQ: function() {
					return Ne
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
				_ = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				r = t("../react/common/selectors/userSelectors.ts"),
				s = t("../react/common/selectors/entitlementsSelectors.ts"),
				l = t("../react/app/components/DeepLink/selectors.ts"),
				c = t("../react/common/constants/roles.ts"),
				f = t("../react/common/utils/hasRole.ts");

			function E(j) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var Ee = arguments[ue] != null ? Object(arguments[ue]) : {},
						Ae = Object.keys(Ee);
					typeof Object.getOwnPropertySymbols == "function" && Ae.push.apply(Ae, Object.getOwnPropertySymbols(Ee).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(Ee, ce).enumerable
					})), Ae.forEach(function(ce) {
						O(j, ce, Ee[ce])
					})
				}
				return j
			}

			function O(j, ue, Ee) {
				return ue = L(ue), ue in j ? Object.defineProperty(j, ue, {
					value: Ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[ue] = Ee, j
			}

			function L(j) {
				var ue = h(j, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function h(j, ue) {
				if (typeof j != "object" || j === null) return j;
				var Ee = j[Symbol.toPrimitive];
				if (Ee !== void 0) {
					var Ae = Ee.call(j, ue || "default");
					if (typeof Ae != "object") return Ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(j)
			}
			const R = j => {
					const ue = me(j);
					return ue == null ? void 0 : ue.account
				},
				y = j => {
					const ue = (0, r.PR)(j);
					if (ue) {
						const Ee = ue.id;
						return j.accountAccess[Ee] || {}
					}
					return {}
				},
				C = j => j.accountsDetailed,
				N = (0, n.P1)("accountsDetailed", C),
				A = j => j.memberships,
				M = (0, m.P1)((0, n.P1)("memberships", A), l.U, (j, ue) => !!ue && !!j ? j.filter(Ee => ue.includes(Ee.id)) : j),
				T = j => j.accountFlags && j.accountFlags.data,
				I = j => j.accountFlags,
				S = (j, ue, Ee) => {
					const Ae = T(j);
					return !Ae || !Ae[ue] ? null : Ae[ue][Ee]
				},
				K = j => j.accountFlags.isRequesting,
				q = (j, ...ue) => a()(j, ["accountFlagsChanges", "data", ...ue]),
				ne = j => j.accountFlagsChanges.isRequesting,
				re = (0, m.P1)(T, I, (j, ue) => ({
					data: j,
					meta: ue
				})),
				Q = (j, ue, Ee) => !!(isEnterpriseSSEnabledSelector(j) && S(j, ue, Ee)),
				V = j => j.membership,
				me = (0, n.P1)("membership", V),
				te = (0, m.P1)(me, V, (j, ue) => ({
					data: j,
					meta: ue
				})),
				G = j => {
					const {
						roles: ue = []
					} = me(j) || {};
					return Boolean(ue.find(Ee => Ee === "Super Administrator - All Privileges" || Ee === "Billing"))
				},
				Z = j => {
					const ue = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, f.n)(j, ue)
				},
				x = j => {
					const ue = y(j),
						Ee = je.getMemberships(j) ? u().asMutable(je.getMemberships(j)) : [];
					if (!!Ee) return u().from(Ee.map(Ae => E({}, Ae, {
						lastSeen: ue[Ae.account.id] ? ue[Ae.account.id].lastSeen : null
					})).sort((Ae, ce) => Ae.lastSeen && ce.lastSeen ? ce.lastSeen - Ae.lastSeen : 0))
				},
				J = j => j.filteredMemberships,
				ie = (0, n.P1)("filteredMemberships", J),
				$ = (0, m.P1)(me, j => j == null ? void 0 : j.permissions),
				b = (0, m.P1)($, j => (0, e.Z)(ue => {
					var Ee;
					return (Ee = j == null ? void 0 : j[ue]) !== null && Ee !== void 0 ? Ee : {
						read: !1,
						edit: !1
					}
				})),
				k = (0, m.P1)(me, j => j == null ? void 0 : j.policies),
				z = (j, ue, Ee) => {
					let Ae = je.getMembership(j);
					if (!Ae) {
						const ce = je.getMemberships(j);
						if (!ce || !ue) return !1;
						Ae = ce.find(pe => pe.account.id === ue)
					}
					if (!Ae || !Ee) return !1;
					try {
						return Ee(Ae.permissions)
					} catch {
						return !1
					}
				},
				oe = j => {
					var ue, Ee;
					return (ue = (Ee = R(j)) === null || Ee === void 0 ? void 0 : Ee.meta.has_pro_zones) !== null && ue !== void 0 ? ue : !1
				},
				de = j => {
					var ue, Ee;
					return (ue = (Ee = R(j)) === null || Ee === void 0 ? void 0 : Ee.meta.has_business_zones) !== null && ue !== void 0 ? ue : !1
				},
				ye = j => de(j) || oe(j),
				Te = (j, ue) => {
					const Ee = Me(j, ue);
					return !!Ee && !!Ee.enabled
				},
				Me = (j, ue) => {
					const Ee = je.getMembership(j),
						Ae = Ee && Ee.account;
					return Ae && Ae.legacy_flags && Ae.legacy_flags[ue]
				},
				Ne = j => Te(j, "custom_pages"),
				He = j => !!j && j["webhooks.webhooks.enabled"],
				ke = j => S(j, "bots", "enabled"),
				ze = j => S(j, "billing", "annual_subscriptions_enable"),
				Ze = j => j ? Boolean(S(j, "ConstellationAI", "v2_ui")) : !1,
				H = j => j ? Boolean(S(j, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				se = j => j ? Boolean(S(j, "AIgateway", "enabled")) : !1,
				w = j => Me(j, "enterprise_zone_quota"),
				ee = j => {
					const ue = w(j);
					return !ue || !ue.available ? -1 : ue.available
				},
				Ce = j => j.accountMembers,
				Ge = (0, n.P1)("accountMembers", Ce),
				Re = j => j.accountMember && j.accountMember.isRequesting,
				Ke = j => j.accountRoles,
				Oe = (0, n.P1)("accountRoles", Ke),
				Be = (j, ue) => {
					const Ee = je.getMemberships(j),
						Ae = Ee && Ee.find(ve => ve.account.id === ue);
					if (Ae) return Ae.account.name.replace(" Account", " account");
					const ce = je.getMembership(j),
						pe = ce && ce.account;
					return pe && pe.id === ue ? pe.name : null
				},
				Ue = (j, ue) => {
					const Ee = je.getMemberships(j),
						Ae = Ee && Ee.find(ve => ve.account.id === ue);
					if (Ae) return Ae.account.settings.access_approval_expiry;
					const ce = je.getMembership(j),
						pe = ce && ce.account;
					return pe && pe.id === ue ? pe.settings.access_approval_expiry : null
				},
				Ve = (j, ue) => {
					const Ee = Ue(j, ue);
					return Ee ? d().utc(Ee).isAfter() : !1
				},
				Je = (j, ue, Ee) => {
					const Ae = Ue(j, ue);
					let ce = Ae ? d().utc(Ae) : null;
					return !ce || !ce.isAfter() ? "" : ce && ce.year() === 3e3 ? Ee("account.access_approval.card_expiration_forever") : Ee("account.access_approval.card_expiration_text", {
						expiryTimestamp: ce.local().format(_.U.DateTime)
					})
				},
				W = j => j && j.member && j.member.edit,
				ae = (j, ue) => {
					const Ee = je.getMembership(j),
						Ae = Ee && Ee.account;
					return Ae ? Ae.id !== ue : !1
				},
				fe = j => j.dpa,
				we = (0, n.P1)("dpa", fe),
				Le = j => j.webhook,
				xe = j => j.webhooks,
				Qe = (0, n.P1)("webhook", xe),
				rt = j => j.accountLegoContract,
				lt = (0, n.P1)("accountLegoContract", rt),
				at = j => {
					const ue = lt(j);
					return (ue == null ? void 0 : ue.lego_state) ? ue.lego_state : ""
				},
				mt = j => at(j) === "signed",
				gt = j => rt(j).isRequesting,
				$e = j => {
					const ue = lt(j);
					return ue && ue.subscription_type ? ue.subscription_type : ""
				},
				Ie = j => $e(j) !== "",
				je = {
					getMembership: me,
					getMemberships: M,
					getFilteredMemberships: ie,
					getAccountMembers: Ge,
					getAccountRoles: Oe
				},
				ut = j => j.accountSingle,
				st = (0, n.P1)("accountSingle", ut),
				ft = j => {
					const ue = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, c.V.ADMINISTRATOR];
					return (0, f.n)(j, ue)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return $
				},
				DA: function() {
					return Ze
				},
				E6: function() {
					return s
				},
				Gy: function() {
					return He
				},
				Hq: function() {
					return Ne
				},
				Ms: function() {
					return N
				},
				Pj: function() {
					return ze
				},
				Q2: function() {
					return m
				},
				Qq: function() {
					return ye
				},
				Td: function() {
					return L
				},
				Z: function() {
					return z
				},
				a: function() {
					return h
				},
				a5: function() {
					return de
				},
				c7: function() {
					return Te
				},
				du: function() {
					return d
				},
				ec: function() {
					return ne
				},
				f: function() {
					return Me
				},
				hL: function() {
					return oe
				},
				ji: function() {
					return b
				},
				jo: function() {
					return A
				},
				l9: function() {
					return se
				},
				lI: function() {
					return p
				},
				p1: function() {
					return E
				},
				pK: function() {
					return ke
				},
				pf: function() {
					return n
				},
				qR: function() {
					return O
				},
				rV: function() {
					return i
				},
				u1: function() {
					return _
				},
				w4: function() {
					return r
				},
				yD: function() {
					return k
				}
			});
			var e = t("../react/utils/url.ts");

			function o(w, ee) {
				return w && w[ee]
			}
			const a = w => !p(w).isRequesting;

			function p(w) {
				return w.entitlements.zone
			}

			function u(w) {
				return p(w).data
			}
			const m = w => {
				var ee, Ce;
				return ((ee = p(w).paginationData) === null || ee === void 0 || (Ce = ee.options) === null || Ce === void 0 ? void 0 : Ce.editedDate) || {}
			};

			function i(w, ee) {
				const Ce = u(w);
				return Ce ? o(Ce, ee) : void 0
			}
			const d = (w, ee) => i(w, ee) === !0;

			function _(w) {
				return w.entitlements.account
			}

			function n(w) {
				return _(w).data
			}
			const r = w => {
				var ee, Ce;
				return ((ee = _(w).paginationData) === null || ee === void 0 || (Ce = ee.options) === null || Ce === void 0 ? void 0 : Ce.editedDate) || {}
			};

			function s(w) {
				return !_(w).isRequesting
			}

			function l(w, ee) {
				const Ce = n(w);
				return Ce ? o(Ce, ee) : void 0
			}

			function c(w, ee) {
				return l(w, ee) === !0
			}

			function f(w, ee) {
				return ee.every(Ce => c(w, Ce))
			}

			function E(w) {
				return c(w, "contract.customer_enabled")
			}

			function O(w) {
				return c(w, "contract.self_service_allowed")
			}

			function L(w) {
				return c(w, "billing.partners_managed")
			}
			const h = w => E(w) && O(w),
				R = w => c(w, "enterprise.ecp_allowed");

			function y(w) {
				return C(w) || c(w, "argo.allow_smart_routing") || c(w, "argo.allow_tiered_caching") || c(w, "rate_limiting.enabled") || c(w, "ctm.enabled") || c(w, "workers.enabled") || c(w, "workers.kv_store.enabled") || c(w, "stream.enabled")
			}
			const C = w => d(w, "argo.allow_smart_routing") || d(w, "argo.allow_tiered_caching"),
				N = w => c(w, "zone.cname_setup_allowed") || c(w, "zone.partial_setup_allowed") || d(w, "zone.partial_setup_allowed"),
				A = w => c(w, "argo.allow_smart_routing") || d(w, "argo.allow_smart_routing"),
				M = w => c(w, "argo.allow_tiered_caching") || d(w, "argo.allow_tiered_caching"),
				T = w => A(w) || M(w),
				I = w => c(w, "ctm.enabled"),
				S = w => {
					const ee = l(w, "ctm.load_balancers");
					return typeof ee == "number" ? ee : 0
				},
				K = w => {
					const ee = l(w, "ctm.pools");
					return typeof ee == "number" ? ee : 0
				},
				q = w => {
					const ee = l(w, "ctm.origins");
					return typeof ee == "number" ? ee : 0
				},
				ne = w => c(w, "workers.enabled"),
				re = w => c(w, "stream.enabled"),
				Q = w => {
					const ee = l(w, "access.users_allowed");
					return typeof ee == "number" ? ee : 0
				},
				V = w => Q(w) > 0,
				me = w => {
					const ee = i(w, "dedicated_certificates");
					return typeof ee == "number" ? ee : 0
				},
				te = w => me(w) > 0,
				G = w => {
					const ee = i(w, "rate_limiting.max_rules");
					return typeof ee == "number" ? ee : 0
				},
				Z = w => c(w, "rate_limiting.enabled"),
				x = w => {
					const ee = i(w, "page_rules");
					return typeof ee == "number" ? ee : 0
				},
				J = w => x(w) > 0,
				ie = w => {
					const ee = l(w, "dns_firewall.max_clusters_allowed");
					return typeof ee == "number" ? ee : 0
				},
				$ = w => ie(w) > 0,
				b = w => d(w, "zone.advanced_certificate_manager") || c(w, "zone.advanced_certificate_manager"),
				k = w => i(w, "authoritative_dns.proxy_record_allowed") === !1 || l(w, "authoritative_dns.proxy_record_allowed") === !1,
				z = w => c(w, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				oe = w => i(w, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				de = w => {
					const ee = i(w, "authoritative_dns.min_record_ttl_allowed");
					return typeof ee == "number" && ee > 1 ? ee : 60
				},
				ye = w => c(w, "foundation_dns.advanced_nameservers_allowed") || d(w, "foundation_dns.advanced_nameservers_allowed"),
				Te = w => c(w, "account_custom_ns.allowed"),
				Me = (w, ee) => ((0, e.el)(window.location.pathname) ? i : l)(w, ee),
				Ne = w => c(w, "authoritative_dns.multi_provider_allowed") || d(w, "authoritative_dns.multi_provider_allowed"),
				He = w => d(w, "authoritative_dns.cname_flattening_allowed"),
				ke = w => c(w, "secondary_dns.secondary_overrides") || d(w, "secondary_dns.secondary_overrides"),
				ze = w => c(w, "authoritative_dns.custom_soa_allowed") || d(w, "authoritative_dns.custom_soa_allowed"),
				Ze = w => c(w, "authoritative_dns.custom_ns_ttl_allowed") || d(w, "authoritative_dns.custom_ns_ttl_allowed"),
				H = w => c(w, "secondary.create_zone"),
				se = w => ye(w) || Te(w) || Ne(w) || H(w) || ke(w) || ze(w) || Ze(w)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					const _ = (0, e.Kd)();
					return m(_) ? _ : e.ZW
				}
			};

			function m(i) {
				const d = Object.keys(o.Q).find(_ => o.Q[_] === i);
				return !!i && typeof i == "string" && d != null && (0, e.S8)(d)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				$8: function() {
					return u
				},
				BG: function() {
					return _
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
					return O
				},
				h8: function() {
					return n
				},
				kk: function() {
					return E
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
			const o = y => y.user,
				a = (0, e.P1)("user", o),
				p = y => {
					var C;
					return (C = a(y)) === null || C === void 0 ? void 0 : C.email.endsWith("@cloudflare.com")
				},
				u = y => {
					var C;
					return !!((C = a(y)) === null || C === void 0 ? void 0 : C.id)
				},
				m = y => {
					const C = a(y);
					if (!!C) return C.first_name && C.last_name ? `${C.first_name} ${C.last_name}` : C.email
				},
				i = y => {
					const C = a(y);
					return C && C.has_enterprise_zones
				},
				d = y => y.userCommPreferences,
				_ = (0, e.P1)("userCommPreferences", d),
				n = y => {
					const C = a(y);
					return C && C.email_verified
				},
				r = y => {
					const C = _(y);
					return C && C.preferences.marketing_communication
				},
				s = y => y.userDetails,
				l = (0, e.P1)("userDetails", s),
				c = y => {
					const C = l(y);
					return C && C["2FA-RECOVERY"] === "scheduled"
				},
				f = y => {
					const C = l(y);
					return C && C["2FA-RECOVERY"] === "interrupted"
				},
				E = y => {
					const C = l(y);
					return C == null ? void 0 : C["NEW-USER-EMAIL"]
				},
				O = y => y.gates.assignments,
				L = (y, C) => y && y[C];

			function h(y, C) {
				const N = O(y);
				return N ? L(N, C) : void 0
			}
			const R = (y, C) => h(y, C) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				$4: function() {
					return N
				},
				$t: function() {
					return Oe
				},
				A4: function() {
					return E
				},
				Cu: function() {
					return O
				},
				DQ: function() {
					return ye
				},
				Ej: function() {
					return M
				},
				FH: function() {
					return h
				},
				ID: function() {
					return Z
				},
				Ko: function() {
					return Ze
				},
				Le: function() {
					return Ne
				},
				Ly: function() {
					return $
				},
				M3: function() {
					return Ce
				},
				N8: function() {
					return ee
				},
				NY: function() {
					return oe
				},
				Ns: function() {
					return J
				},
				Ox: function() {
					return Ve
				},
				P4: function() {
					return T
				},
				RO: function() {
					return te
				},
				Tr: function() {
					return ze
				},
				U: function() {
					return L
				},
				Ug: function() {
					return y
				},
				V6: function() {
					return Ge
				},
				WR: function() {
					return Je
				},
				Xg: function() {
					return f
				},
				ZB: function() {
					return Me
				},
				_y: function() {
					return x
				},
				cU: function() {
					return H
				},
				cg: function() {
					return de
				},
				d2: function() {
					return re
				},
				il: function() {
					return ie
				},
				jN: function() {
					return S
				},
				jg: function() {
					return k
				},
				kC: function() {
					return A
				},
				kf: function() {
					return Re
				},
				ko: function() {
					return me
				},
				mK: function() {
					return Be
				},
				nA: function() {
					return c
				},
				oY: function() {
					return I
				},
				qM: function() {
					return He
				},
				rq: function() {
					return z
				},
				tS: function() {
					return C
				},
				tU: function() {
					return q
				},
				vB: function() {
					return Ue
				},
				vM: function() {
					return K
				},
				wH: function() {
					return R
				},
				wn: function() {
					return Te
				},
				xU: function() {
					return ne
				},
				xw: function() {
					return ke
				},
				z5: function() {
					return G
				},
				zO: function() {
					return se
				},
				zW: function() {
					return Ke
				},
				zh: function() {
					return Q
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				a = t("../../../../node_modules/lodash/get.js"),
				p = t.n(a),
				u = t("../../../../node_modules/moment/moment.js"),
				m = t.n(u),
				i = t("../react/common/constants/billing/index.ts");

			function d(W) {
				for (var ae = 1; ae < arguments.length; ae++) {
					var fe = arguments[ae] != null ? Object(arguments[ae]) : {},
						we = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && we.push.apply(we, Object.getOwnPropertySymbols(fe).filter(function(Le) {
						return Object.getOwnPropertyDescriptor(fe, Le).enumerable
					})), we.forEach(function(Le) {
						_(W, Le, fe[Le])
					})
				}
				return W
			}

			function _(W, ae, fe) {
				return ae = n(ae), ae in W ? Object.defineProperty(W, ae, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[ae] = fe, W
			}

			function n(W) {
				var ae = r(W, "string");
				return typeof ae == "symbol" ? ae : String(ae)
			}

			function r(W, ae) {
				if (typeof W != "object" || W === null) return W;
				var fe = W[Symbol.toPrimitive];
				if (fe !== void 0) {
					var we = fe.call(W, ae || "default");
					if (typeof we != "object") return we;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ae === "string" ? String : Number)(W)
			}
			const s = (0, o.P1)("zone", W => W.zone),
				l = W => {
					var ae;
					return (ae = W.zoneVersioning) === null || ae === void 0 ? void 0 : ae.zoneVersionSelector
				},
				c = (0, e.P1)(s, l, (W, ae) => {
					var fe, we, Le;
					let xe;
					if (Array.isArray(W) && W.length === 1 ? xe = W[0] : W && !Array.isArray(W) && (xe = W), !xe) return;
					const Qe = !!(ae == null ? void 0 : ae.enabled);
					return d({}, xe, xe.name && {
						name: Qe ? ae.rootZoneName : xe.name
					}, {
						versioning: {
							enabled: Qe,
							isRoot: !((fe = xe.name) === null || fe === void 0 ? void 0 : fe.endsWith(".config.cfdata.org")),
							version: Qe ? ae.selectedVersion : 0,
							rootZoneId: Qe ? ae.rootZoneId : (we = (Le = xe) === null || Le === void 0 ? void 0 : Le.id) !== null && we !== void 0 ? we : ""
						}
					})
				}),
				f = W => W.zone,
				E = (0, e.P1)(c, f, (W, ae) => ({
					data: W,
					meta: ae
				})),
				O = W => {
					var ae, fe;
					return (ae = (fe = c(W)) === null || fe === void 0 ? void 0 : fe.id) !== null && ae !== void 0 ? ae : ""
				},
				L = W => W.zones,
				h = W => W.zonesRoot,
				R = W => W.zonesAccount,
				y = (0, o.P1)("zones", L),
				C = (0, o.P1)("zonesRoot", h),
				N = (0, o.P1)("zonesAccount", R);

			function A(W) {
				const ae = c(W);
				return ae ? ae.created_on : null
			}

			function M(W, ae, fe) {
				const we = A(W);
				if (!we) return;
				const Le = m().duration(ae, fe),
					xe = new Date(we),
					Qe = new Date(new Date().getTime() - Le.asMilliseconds());
				return xe.getTime() > Qe.getTime()
			}

			function T(W) {
				const ae = c(W);
				return ae ? ae.status : null
			}

			function I(W) {
				const ae = c(W);
				return ae ? ae.type : null
			}

			function S(W) {
				return W.plan_pending ? W.plan_pending : W.plan
			}

			function K(W) {
				const ae = c(W);
				if (!ae) return;
				const fe = S(ae);
				return fe && fe.legacy_id
			}

			function q(W, ae) {
				const fe = S(W);
				return !!fe && i.Gs.indexOf(fe.legacy_id) >= i.Gs.indexOf(ae)
			}

			function ne(W) {
				return !!W && W.status === "initializing"
			}

			function re(W) {
				return !!W && W.status === "pending"
			}

			function Q(W) {
				return !!W && W.status === "active"
			}

			function V(W, ae) {
				if (!W) return !1;
				const fe = S(W);
				return !!fe && fe.legacy_id === ae
			}

			function me(W) {
				return V(W, "enterprise")
			}
			const te = W => me(c(W));

			function G(W) {
				return V(W, "business")
			}
			const Z = W => G(c(W));

			function x(W) {
				return V(W, "pro")
			}

			function J(W) {
				return V(W, "free")
			}
			const ie = W => J(c(W));

			function $(W) {
				return !me(W)
			}

			function b(W) {
				return W && W.owner
			}

			function k(W, ae) {
				const fe = b(ae);
				return !!fe && fe.type === "user" && fe.id === W.id
			}

			function z(W) {
				const ae = c(W);
				return !!ae && ae.type === "partial"
			}

			function oe(W) {
				const ae = c(W);
				return !!ae && ae.type === "secondary"
			}
			const de = W => {
					var ae;
					const fe = c(W);
					return !!(fe == null ? void 0 : fe.host) && !!((ae = fe.plan) === null || ae === void 0 ? void 0 : ae.externally_managed)
				},
				ye = W => {
					const ae = y(W);
					return ae && ae.some(me)
				},
				Te = (W, ae) => {
					const fe = c(W);
					return fe && fe.betas ? fe.betas.includes(ae) : !1
				},
				Me = (W, ...ae) => p()(W, ["zoneFlags", "data", ...ae]),
				Ne = (W, ...ae) => p()(W, ["accountFlags", "data", ...ae]),
				He = W => W.accountFlags.isRequesting,
				ke = W => W.zoneFlags.isRequesting,
				ze = (W, ...ae) => p()(W, ["zoneFlagsChanges", "data", ...ae]),
				Ze = W => W.zoneFlagsChanges.isRequesting,
				H = W => W.zoneFlags && W.zoneFlags.data,
				se = W => W.zoneFlags,
				w = (0, e.P1)(H, se, (W, ae) => ({
					data: W,
					meta: ae
				})),
				ee = (0, o.P1)("abuseUrls", W => W.overview.abuseUrls),
				Ce = W => {
					const ae = c(W);
					return ae ? `/${ae.account.id}/${ae.name}` : null
				},
				Ge = W => W.zoneMarketingCampaigns,
				Re = W => W.overview.zoneBlocks.data,
				Ke = W => W.overview.zoneBlocks.isRequesting,
				Oe = W => W.overview.zoneBlocks.hasData,
				Be = W => {
					var ae, fe;
					return (W == null || (ae = W.overview.zoneBlocks) === null || ae === void 0 || (fe = ae.paginationData) === null || fe === void 0 ? void 0 : fe.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				Ue = W => W.overview.zoneBlocksReview.isRequesting,
				Ve = W => W.overview.zoneHold,
				Je = (0, o.P1)("zoneHold", Ve)
		},
		"../react/common/utils/formatDate.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			v.Z = (o, a, p = !1) => (0, e.p6)(o, a, p)
		},
		"../react/common/utils/hasRole.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/common/utils/isGuards.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
			const a = i => i ? ["page", "per_page", "count", "total_count"].every(_ => _ in i && i[_]) : !1,
				p = (i = "") => e.Dy.includes(i.toLowerCase()),
				u = i => i !== null && typeof i == "object" && "name" in i && "size" in i && "type" in i && typeof i.slice == "function",
				m = i => (0, o.Z)(i)
		},
		"../react/common/utils/useQueryCache.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				o: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(i) {
				for (var d = 1; d < arguments.length; d++) {
					var _ = arguments[d] != null ? Object(arguments[d]) : {},
						n = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(_).filter(function(r) {
						return Object.getOwnPropertyDescriptor(_, r).enumerable
					})), n.forEach(function(r) {
						a(i, r, _[r])
					})
				}
				return i
			}

			function a(i, d, _) {
				return d = p(d), d in i ? Object.defineProperty(i, d, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = _, i
			}

			function p(i) {
				var d = u(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(i, d) {
				if (typeof i != "object" || i === null) return i;
				var _ = i[Symbol.toPrimitive];
				if (_ !== void 0) {
					var n = _.call(i, d || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			const m = i => {
				const d = (0, e.useQueryClient)(),
					_ = h => {
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
						var y;
						d.setQueryData((y = R) !== null && y !== void 0 ? y : i, h)
					},
					l = async h => {
						var R;
						await d.refetchQueries((R = h) !== null && R !== void 0 ? R : i)
					}, c = async (h, R) => {
						var y, C;
						await d.invalidateQueries((y = h) !== null && y !== void 0 ? y : i, o({
							refetchActive: !1
						}, (C = R) !== null && C !== void 0 ? C : {}))
					}, f = async (h, R) => {
						const y = h || (C => {
							var N;
							return (C == null || (N = C.queryKey) === null || N === void 0 ? void 0 : N[0]) === i
						});
						await d.invalidateQueries(o({
							predicate: y,
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
					getData: _,
					prefetchQuery: (h, R) => {
						var y;
						return d.prefetchQuery((y = R) !== null && y !== void 0 ? y : i, h)
					},
					getQueryData: n,
					predicateInvalidate: f,
					batchInvalidate: async ({
						queryKeysToInvalidate: h = [],
						queryKeysToPredicateInvalidate: R = [],
						refetchActive: y = !1,
						refetchInactive: C = !1
					}) => {
						const N = h.map(M => c(M)),
							A = R.map(M => f(T => {
								var I;
								return (T == null || (I = T.queryKey) === null || I === void 0 ? void 0 : I[0]) === M
							}, {
								refetchActive: y,
								refetchInactive: C
							}));
						await Promise.all([...N, ...A])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(F, v, t) {
			"use strict";
			t.d(v, {
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
			const o = _ => /^https?:\/\/(.*)/.test(_),
				a = _ => e.default.hostname.test(_),
				p = _ => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(_),
				u = _ => /^[!-~]+$/.test(_),
				m = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				i = _ => m.test(_),
				d = _ => !!_ && !!_.length && /^[ -~]+$/.test(_)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(F, v, t) {
			"use strict";
			t.d(v, {
				DZ: function() {
					return p
				},
				GA: function() {
					return _
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
				_ = (s, l = c => c.avg && c.avg.sampleInterval ? c.avg.sampleInterval : 1) => s.length === 0 ? 1 : s.reduce((c, f) => c + l(f), 0) / s.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = s => n[s]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				Jz: function() {
					return _
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
					var E = arguments[f] != null ? Object(arguments[f]) : {},
						O = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(E).filter(function(L) {
						return Object.getOwnPropertyDescriptor(E, L).enumerable
					})), O.forEach(function(L) {
						o(c, L, E[L])
					})
				}
				return c
			}

			function o(c, f, E) {
				return f = a(f), f in c ? Object.defineProperty(c, f, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[f] = E, c
			}

			function a(c) {
				var f = p(c, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function p(c, f) {
				if (typeof c != "object" || c === null) return c;
				var E = c[Symbol.toPrimitive];
				if (E !== void 0) {
					var O = E.call(c, f || "default");
					if (typeof O != "object") return O;
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
				_ = {
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
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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

			function o(E) {
				for (var O = 1; O < arguments.length; O++) {
					var L = arguments[O] != null ? Object(arguments[O]) : {},
						h = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(L).filter(function(R) {
						return Object.getOwnPropertyDescriptor(L, R).enumerable
					})), h.forEach(function(R) {
						a(E, R, L[R])
					})
				}
				return E
			}

			function a(E, O, L) {
				return O = p(O), O in E ? Object.defineProperty(E, O, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[O] = L, E
			}

			function p(E) {
				var O = u(E, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function u(E, O) {
				if (typeof E != "object" || E === null) return E;
				var L = E[Symbol.toPrimitive];
				if (L !== void 0) {
					var h = L.call(E, O || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(E)
			}
			const m = E => E.test(window.location.hostname),
				i = () => m(e.j9),
				d = () => m(MARKETPLACE_LOCAL_URL_REGEXP),
				_ = (E, O) => {
					const L = random(0, 1) ? -1 : 1;
					return E.points === O.points || E.points >= APP_POINTS_THRESHOLD && O.points >= APP_POINTS_THRESHOLD ? L : E.points < 0 || O.points < 0 || E.points >= APP_POINTS_THRESHOLD || O.points >= APP_POINTS_THRESHOLD ? O.points - E.points : L
				},
				n = (E, O, L) => {
					const h = get(O, L),
						R = get(E, L);
					return h && !isEqual(h, R)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (E, O) => O.map(L => E.find(h => h.id === L)),
						addAppVersionInfo: (E, O) => o({}, O, {
							currentVersion: O.versions.find(L => L.tag === E.versionTag),
							latestVersion: O.versions.find(L => L.tag === O.infoVersion)
						}),
						addCurrentSiteInstall: (E, O) => o({}, O, {
							currentSiteInstall: E.find(L => L.appId === O.id)
						})
					}
				},
				s = (E, O, L) => o({}, E, O, L ? {
					value: L
				} : {}),
				l = E => E.map(O => O.status),
				c = E => E.apps ? E.apps : E,
				f = E => {
					let O = ["by-cloudflare"];
					return E.filter(L => !O.includes(L.id) && L.visible).sort((L, h) => L.points < h.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(F, v, t) {
			"use strict";
			t.r(v), t.d(v, {
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
		"../react/pages/apps/marketplace/requests/Requester.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
						E = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(f).filter(function(O) {
						return Object.getOwnPropertyDescriptor(f, O).enumerable
					})), E.forEach(function(O) {
						d(l, O, f[O])
					})
				}
				return l
			}

			function m(l, c) {
				if (l == null) return {};
				var f = i(l, c),
					E, O;
				if (Object.getOwnPropertySymbols) {
					var L = Object.getOwnPropertySymbols(l);
					for (O = 0; O < L.length; O++) E = L[O], !(c.indexOf(E) >= 0) && (!Object.prototype.propertyIsEnumerable.call(l, E) || (f[E] = l[E]))
				}
				return f
			}

			function i(l, c) {
				if (l == null) return {};
				var f = {},
					E = Object.keys(l),
					O, L;
				for (L = 0; L < E.length; L++) O = E[L], !(c.indexOf(O) >= 0) && (f[O] = l[O]);
				return f
			}

			function d(l, c, f) {
				return c = _(c), c in l ? Object.defineProperty(l, c, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[c] = f, l
			}

			function _(l) {
				var c = n(l, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function n(l, c) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var E = f.call(l, c || "default");
					if (typeof E != "object") return E;
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
				async request(c = "GET", f, E = {}) {
					const {
						body: O
					} = E, L = m(E, ["body"]);
					return fetch(o()(this.options.baseUrl, f), u({
						method: c
					}, L, O ? {
						body: JSON.stringify(O)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(u({
							Accept: "application/json, text/plain, */*"
						}, E.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(c, f = {}) {
					const E = await this.request("GET", c, f);
					return this.parseJSONResponse(E)
				}
				async postJSON(c, f = {}) {
					const E = await this.request("POST", c, u({}, f, {
						headers: u({}, f.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(E)
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
		"../react/pages/apps/marketplace/requests/common.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				JX: function() {
					return _
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

			function* d(c, f, E, O) {
				const L = (0, e.Z)(f),
					[h, R, y] = [`get${L}Sending`, `get${L}Success`, `get${L}Failed`];
				try {
					yield(0, u.gz)(c[h]());
					const C = yield(0, u.RE)(s, E);
					let N = C;
					if (N.error) {
						yield(0, u.gz)(c[y]());
						return
					}
					return O && (N = yield O(C)), yield(0, u.gz)(c[R](N)), N
				} catch {
					yield(0, u.gz)(c[y]())
				}
			}

			function* _(c, f, E, O) {
				const L = (0, e.Z)(f),
					h = `get${L}Sending`,
					R = `get${L}Success`,
					y = `get${L}Failed`;
				try {
					yield(0, u.gz)(c[h]());
					const C = yield(0, u.RE)(l, {
						url: E,
						data: O
					});
					return yield(0, u.gz)(c[R](C)), C
				} catch {
					yield(0, u.gz)(c[y]())
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
						data: E
					} = c;
					return m.L.postJSON(f, {
						body: E
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return _
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

			function _(n = e.fD, r) {
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
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				Nw: function() {
					return _
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
			const _ = {
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
		"../react/pages/caching/tracking.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/d1/routes.ts": function(F, v, t) {
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
		"../react/pages/dns/dns-records/tracking.ts": function(F, v, t) {
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
		"../react/pages/email/types.ts": function(F, v, t) {
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
		"../react/pages/home/alerts/config.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
				jk: function() {
					return O
				},
				w8: function() {
					return L
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				p = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function u(h) {
				for (var R = 1; R < arguments.length; R++) {
					var y = arguments[R] != null ? Object(arguments[R]) : {},
						C = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(y).filter(function(N) {
						return Object.getOwnPropertyDescriptor(y, N).enumerable
					})), C.forEach(function(N) {
						m(h, N, y[N])
					})
				}
				return h
			}

			function m(h, R, y) {
				return R = i(R), R in h ? Object.defineProperty(h, R, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[R] = y, h
			}

			function i(h) {
				var R = d(h, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function d(h, R) {
				if (typeof h != "object" || h === null) return h;
				var y = h[Symbol.toPrimitive];
				if (y !== void 0) {
					var C = y.call(h, R || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(h)
			}
			const _ = "Notifications",
				n = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${r}/notifications`,
				l = (0, e.BC)`${s}/destinations`,
				c = (0, e.BC)`${s}/create`,
				f = (0, e.BC)`${c}/${"alertType"}`,
				E = (0, e.BC)`${s}/edit/${"alertId"}`,
				O = u({
					account: r,
					alerts: s,
					destinations: l,
					createAlert: c,
					createAlertWithSelection: f,
					editAlert: E
				}, o._j, a._j),
				L = u({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, p.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/home/alerts/tracking.ts": function(F, v, t) {
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
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(F, v, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(F, v, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				AA: function() {
					return oe
				},
				AN: function() {
					return ft
				},
				AY: function() {
					return Ae
				},
				Ac: function() {
					return Pe
				},
				Am: function() {
					return O
				},
				B2: function() {
					return Z
				},
				BB: function() {
					return M
				},
				BF: function() {
					return xe
				},
				BQ: function() {
					return je
				},
				E8: function() {
					return ue
				},
				Fl: function() {
					return pe
				},
				Fu: function() {
					return S
				},
				Gc: function() {
					return at
				},
				Hc: function() {
					return xt
				},
				IO: function() {
					return ut
				},
				JK: function() {
					return ee
				},
				K: function() {
					return C
				},
				LI: function() {
					return Ie
				},
				LX: function() {
					return we
				},
				L_: function() {
					return Ke
				},
				Ly: function() {
					return We
				},
				MR: function() {
					return J
				},
				Mj: function() {
					return $
				},
				NB: function() {
					return dt
				},
				Oe: function() {
					return jt
				},
				Or: function() {
					return k
				},
				P5: function() {
					return Xe
				},
				PE: function() {
					return ze
				},
				Pd: function() {
					return Et
				},
				Pk: function() {
					return H
				},
				Pp: function() {
					return Ue
				},
				Q1: function() {
					return I
				},
				Qr: function() {
					return Le
				},
				Qv: function() {
					return Ze
				},
				Rp: function() {
					return Fe
				},
				S7: function() {
					return tt
				},
				Sh: function() {
					return ve
				},
				Sl: function() {
					return Rt
				},
				TZ: function() {
					return z
				},
				Tg: function() {
					return Ce
				},
				Tp: function() {
					return lt
				},
				Uy: function() {
					return et
				},
				Vw: function() {
					return q
				},
				W3: function() {
					return W
				},
				WR: function() {
					return st
				},
				WX: function() {
					return Me
				},
				XF: function() {
					return j
				},
				Xb: function() {
					return de
				},
				ZB: function() {
					return T
				},
				Zs: function() {
					return Re
				},
				_f: function() {
					return Qe
				},
				b4: function() {
					return Te
				},
				bc: function() {
					return Ot
				},
				c2: function() {
					return x
				},
				cE: function() {
					return he
				},
				dh: function() {
					return Be
				},
				fE: function() {
					return Oe
				},
				g7: function() {
					return ke
				},
				hO: function() {
					return Je
				},
				hV: function() {
					return pt
				},
				hk: function() {
					return L
				},
				hr: function() {
					return ye
				},
				it: function() {
					return Ve
				},
				j3: function() {
					return Mt
				},
				jN: function() {
					return w
				},
				jo: function() {
					return Wt
				},
				k3: function() {
					return $t
				},
				m8: function() {
					return me
				},
				nm: function() {
					return B
				},
				oW: function() {
					return Ee
				},
				pH: function() {
					return te
				},
				pi: function() {
					return V
				},
				r4: function() {
					return zt
				},
				rI: function() {
					return ie
				},
				s7: function() {
					return mt
				},
				sg: function() {
					return Y
				},
				tB: function() {
					return f
				},
				tN: function() {
					return He
				},
				u_: function() {
					return Gt
				},
				vV: function() {
					return rt
				},
				vc: function() {
					return se
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				a = t("../../../../node_modules/moment/moment.js"),
				p = t.n(a),
				u = t("../../../common/util/types/src/api/domain.ts"),
				m = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				i = t("../react/utils/url.ts"),
				d = t("../react/pages/home/domain-registration/config.ts"),
				_ = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function r(g) {
				for (var P = 1; P < arguments.length; P++) {
					var ge = arguments[P] != null ? Object(arguments[P]) : {},
						be = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && be.push.apply(be, Object.getOwnPropertySymbols(ge).filter(function(Ye) {
						return Object.getOwnPropertyDescriptor(ge, Ye).enumerable
					})), be.forEach(function(Ye) {
						s(g, Ye, ge[Ye])
					})
				}
				return g
			}

			function s(g, P, ge) {
				return P = l(P), P in g ? Object.defineProperty(g, P, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[P] = ge, g
			}

			function l(g) {
				var P = c(g, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function c(g, P) {
				if (typeof g != "object" || g === null) return g;
				var ge = g[Symbol.toPrimitive];
				if (ge !== void 0) {
					var be = ge.call(g, P || "default");
					if (typeof be != "object") return be;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(g)
			}

			function f(g) {
				return g.filter(P => P.isSelected).reduce((P, {
					name: ge,
					fees: be,
					isZoneEntitlementPresent: Ye
				}) => Ye || !(0, e.isNumber)(be == null ? void 0 : be.transfer_fee) ? P : Pe(ge) ? P + (be == null ? void 0 : be.transfer_fee) * 2 : P + (be == null ? void 0 : be.transfer_fee), 0)
			}

			function E(g) {
				return g.filter(P => P.registrar.toLowerCase() === "godaddy")
			}
			const O = "MMM D, YYYY";

			function L(g, P, ge, be) {
				var Ye, it, Ct, kt, bt, ct, It, ht, Tt, Pt, St, Lt;
				const nt = g[P.name],
					Kt = () => Pe(P.name) ? p()(P.expires_at).add(2, "years").format(O) : p()(P.expires_at).add(1, "year").format(O);
				return r({
					name: P.name,
					zone: nt,
					entitlements: ge,
					registryCheck: be,
					nameservers: P.name_servers,
					isAvailable: P.available,
					lastKnownStatus: P.last_known_status,
					authCode: P.auth_code,
					isEnterpriseZone: (nt == null || (Ye = nt.plan) === null || Ye === void 0 ? void 0 : Ye.legacy_id) === "enterprise",
					isActiveZone: (nt == null ? void 0 : nt.status) === "active",
					corResponsesPending: P.cor_responses_pending,
					isCorLocked: P.cor_locked,
					corLockedUntil: P.cor_locked_until ? p()(P.cor_locked_until).format(O) : null,
					isFullZone: (nt == null ? void 0 : nt.type) == n.xd.Full,
					isLocked: P.locked,
					registrar: P.current_registrar || d.JM,
					zoneId: nt == null ? void 0 : nt.id,
					currentExpiration: p()(P.expires_at).format(O),
					newExpiration: Kt(),
					lastEntitledAt: P.last_entitled_at ? new Date(P.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ge) && !!ge.find(Bt => Bt.id === d.g5 && Bt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: P.transfer_in && y(P.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: P.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: P.transfer_in,
					transferOut: P.transfer_out,
					autoRenew: P.auto_renew === !0,
					lastTransferredAt: P.last_transferred_at,
					createdAt: P.created_at,
					paymentExpiresAt: p()(P.payment_expires_at).isValid() ? p()(P.payment_expires_at) : p()(P.expires_at).isValid() ? p()(P.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (it = P.contacts) === null || it === void 0 || (Ct = it.administrator) === null || Ct === void 0 ? void 0 : Ct.id,
						[n.l2.Billing]: (kt = P.contacts) === null || kt === void 0 || (bt = kt.billing) === null || bt === void 0 ? void 0 : bt.id,
						[n.l2.Registrant]: (ct = P.contacts) === null || ct === void 0 || (It = ct.registrant) === null || It === void 0 ? void 0 : It.id,
						[n.l2.Technical]: (ht = P.contacts) === null || ht === void 0 || (Tt = ht.technical) === null || Tt === void 0 ? void 0 : Tt.id
					},
					landing: P.landing,
					privacy: P.privacy,
					whois: P.whois,
					emailVerified: P.email_verified,
					materialChanges: N(P.material_changes),
					corChanges: P.cor_changes ? M(Object.assign(r({}, R), P.cor_changes)) : {},
					registryStatuses: P.registry_statuses ? P.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Pt = P.domain_protection_services) === null || Pt === void 0 ? void 0 : Pt.status
					},
					deletion: {
						isDeletable: P == null || (St = P.deletion) === null || St === void 0 ? void 0 : St.is_deletable
					},
					premiumType: P == null ? void 0 : P.premium_type,
					fees: P == null ? void 0 : P.fees
				}, P.domain_move && {
					domainMove: {
						ineligibilityReasons: (Lt = P.domain_move) === null || Lt === void 0 ? void 0 : Lt.ineligibility_reasons
					}
				}, P.actionable_metadata && {
					actionableMetadata: h(P.actionable_metadata)
				}, P.policies && {
					policies: r({}, P.policies.suspension && {
						suspension: {
							parked: P.policies.suspension.parked,
							parkingReason: P.policies.suspension.parking_reason,
							paymentExpired: P.policies.suspension.payment_expired
						}
					})
				})
			}

			function h(g) {
				return g.map(P => ({
					accountContext: P.account_context,
					createdAt: P.created_at,
					expiresAt: P.expires_at,
					sentAt: P.sent_at,
					status: P.status,
					type: P.type
				}))
			}
			const R = {
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

			function y(g) {
				switch (g.enter_auth_code) {
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

			function C(g) {
				let P = g.extensions;
				(P == null ? void 0 : P.application_purpose) && (P == null ? void 0 : P.nexus_category) && (g.extensions = {
					nexusCategory: P.nexus_category,
					applicationPurpose: P.application_purpose
				});
				let ge = r({}, typeof g.id == "string" ? {
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
				return Ge(ge)
			}

			function N(g) {
				let P = [];
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
				for (const be in g) {
					const Ye = g[be],
						it = ge[Ye];
					P.push(it)
				}
				return P
			}
			const A = g => {
				if (!g) return null;
				let P = g;
				return g.includes("C31") && (P = "C31"), g.includes("C32") && (P = "C32"), P
			};

			function M(g) {
				return r({}, typeof g.id == "string" ? {
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
						nexusCategory: A(g.extensions.nexus_category),
						applicationPurpose: g.extensions.application_purpose
					}
				} : {})
			}

			function T(g = {}) {
				const P = {
					name: "",
					zoneId: "",
					zone: r({
						id: "",
						name: "",
						status: "pending",
						plan: r({
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
						type: n.xd.Full
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
					autoTransferStatus: n._n.Pending,
					transferAuthCode: "",
					authCodeStatus: n.BJ.Pending,
					transferApiCallStatus: n.Yh.Pending,
					transferConditions: r({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, g.transferConditions || {}),
					transferIn: r({
						unlock_domain: n.lW.UNKNOWN,
						disable_privacy: n.lW.UNKNOWN,
						enter_auth_code: n.lW.UNKNOWN,
						approve_transfer: n.lW.UNKNOWN,
						accept_foa: n.lW.UNKNOWN,
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
					premiumType: n.Vs.Not_Premium,
					fees: null,
					policies: {
						suspension: {
							parked: !1,
							parkingReason: null,
							paymentExpired: !1
						}
					}
				};
				return Object.assign(P, g)
			}

			function I(g = {}) {
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

			function S(g) {
				const P = d.Py.concat(d.ui).reduce((ge, be) => r({}, ge, {
					[be]: []
				}), {});
				return g.forEach(ge => {
					let be = K(ge.registrar);
					be in P || (be = d.ui), Y(ge.name) && (be = "uk"), P[be].push(ge)
				}), Object.keys(P).sort((ge, be) => ge.localeCompare(be)).map(ge => ({
					registrar: ge,
					domains: P[ge]
				})).filter(ge => ge.domains.length > 0)
			}

			function K(g) {
				return g == null ? void 0 : g.toLowerCase().replace(/\s|,|\./g, "")
			}

			function q(g) {
				if (!g || !g.registrar) return "unknown";
				if (Y(g.name)) return "uk";
				const P = K(g.registrar);
				return P in d.gM ? P : "unknown"
			}
			const ne = [];

			function re(g) {
				return ne.some(P => g.endsWith("." + P))
			}

			function Q(g) {
				return !g.isEnterpriseZone || !Array.isArray(g.entitlements) ? !1 : !!g.entitlements.find(({
					id: P,
					allocation: ge
				}) => P === d.g5 && ge.value === !0)
			}

			function V(g) {
				var P;
				const ge = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let be = !1,
					Ye = null;
				return (P = g.registryStatuses) === null || P === void 0 || P.some(it => {
					ge.includes(it) && (Ye = it, be = !0)
				}), [be, Ye]
			}

			function me(g, P = !1) {
				if (!g) return [!1, _.keys.cannot_transfer_default];
				if (g.zone.status !== "active") return [!1, _.keys.cannot_transfer_zone_not_active];
				if (!g.isFullZone && !Q(g)) return [!1, _.keys.cannot_transfer_zone_not_eligible];
				if (g.registrar === "Cloudflare") return [!1, _.keys.cannot_transfer_domain_on_cf];
				if (g.isAvailable) return [!1, _.keys.cannot_transfer_domain_available];
				if (!g.transferConditions) return [!1, _.keys.cannot_transfer_domain_transfer_conditions];
				if (!P && et(g == null ? void 0 : g.premiumType)) return [!1, _.keys.cannot_transfer_domain_premium];
				if (te(g)) return [!1, _.keys.cannot_transfer_domain_transfer_in_progress];
				let ge;
				for (ge in g.transferConditions)
					if (ge !== "not_premium" && !g.transferConditions[ge]) return [!1, _.keys.cannot_transfer_domain_transfer_conditions];
				if (re(g.name)) return [!1, _.keys.cannot_transfer_domain_tld_not_supported];
				const [be, Ye] = V(g);
				return be && Ye ? [!1, _.keys.cannot_transfer_domain_registry_status[Ye]] : [!0, ""]
			}

			function te(g) {
				var P, ge;
				return !!g.transferIn && !((P = g.transferConditions) === null || P === void 0 ? void 0 : P.not_started) && !!(Y(g.name) || ((ge = g.registryStatuses) === null || ge === void 0 ? void 0 : ge.includes(n.rj.PENDING_TRANSFER)))
			}

			function G(g) {
				return !!g.registrar && !!g.currentExpiration
			}

			function Z(g, P = !1) {
				const [ge] = me(g, P);
				return G(g) ? Ne(g) ? n.M5.InProgressOrOnCF : ge ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function x(g) {
				return g.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(g.transferIn.enter_auth_code) || !1
			}

			function J(g) {
				return g.registrar === "Cloudflare"
			}

			function ie(g) {
				return !!(g == null ? void 0 : g.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function $(g) {
				return !!(g == null ? void 0 : g.includes(n.rj.PENDING_TRANSFER))
			}
			const b = "Invalid date";

			function k(g) {
				return g.newExpiration === b ? "Unavailable" : g.newExpiration
			}

			function z(g) {
				return g.currentExpiration === b ? "Unavailable" : g.currentExpiration
			}

			function oe(g) {
				return g.substring(g.indexOf("."))
			}

			function de(g = "") {
				return g.indexOf(".") !== -1 ? g.substring(0, g.indexOf(".")) : g
			}

			function ye(g) {
				return g.map(P => P.name).map(P => oe(P)).filter((P, ge, be) => !be.includes(P, ge + 1))
			}

			function Te(g) {
				if (d.no) return [!0, ""];
				if (!J(g)) return [!1, n.ok.NotOnCF];
				if (g.isCorLocked) return [!1, g.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (g.lastTransferredAt) {
					const P = p()(g.lastTransferredAt),
						ge = p().duration(p()().diff(P)).as("days"),
						be = Y(g.name);
					if (ge < (be ? 1 : 60)) return [!1, be ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (g.createdAt) {
					const P = p()(g.createdAt);
					if (p().duration(p()().diff(P)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Me(g) {
				return !!(d.Bc || g.transferOut)
			}

			function Ne(g) {
				return ke(g) || J(g)
			}

			function He(g) {
				return !ke(g) && J(g)
			}

			function ke(g) {
				return !g || g.lastKnownStatus === "pendingTransfer" || g.lastKnownStatus === "transferFOAPending" || !J(g) && g.transferConditions && !g.transferConditions.not_started || !1
			}

			function ze(g) {
				return !(re(g.name) || g.transferConditions && !g.transferConditions.supported_tld)
			}

			function Ze(g) {
				return (g == null ? void 0 : g.includes("/")) ? !0 : g.split("").some(P => P.charCodeAt(0) > 123)
			}

			function H(g) {
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

			function se(g) {
				return p()(g.paymentExpiresAt).isBefore(p()())
			}

			function w(g) {
				return g.transferIn && g.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function ee(g) {
				const P = ["CU", "KP", "IR", "SY"];
				return g.filter(ge => !P.includes(ge.code))
			}

			function Ce(g) {
				if (!!g) return `${g.charAt(0).toUpperCase()}${g.slice(1)}${g.charAt(g.length-1)==="."?"":"."}`
			}

			function Ge(g) {
				const P = {};
				for (const [ge, be] of Object.entries(g)) {
					if (be && typeof be == "string") {
						Object.assign(P, {
							[ge]: be.trim()
						});
						continue
					}
					Object.assign(P, {
						[ge]: be
					})
				}
				return P
			}

			function Re(g) {
				return p()(g).add(40, "days")
			}

			function Ke(g) {
				const P = g.paymentExpiresAt || g.payment_expires_at,
					ge = Re(P);
				return p()().isBetween(P, ge)
			}

			function Oe(g) {
				var P;
				return !(g == null ? void 0 : g.registryStatuses) || !Array.isArray(g == null ? void 0 : g.registryStatuses) && !(0, e.isString)(g == null ? void 0 : g.registryStatuses) ? !1 : (P = g.registryStatuses) === null || P === void 0 ? void 0 : P.includes(n.rj.REDEMPTION_PERIOD)
			}

			function Be(g) {
				var P;
				return !(g == null ? void 0 : g.registryStatuses) || !Array.isArray(g == null ? void 0 : g.registryStatuses) && !(0, e.isString)(g == null ? void 0 : g.registryStatuses) ? !1 : (P = g.registryStatuses) === null || P === void 0 ? void 0 : P.includes(n.rj.PENDING_DELETE)
			}

			function Ue(g) {
				return [".us"].includes(g)
			}

			function Ve(g) {
				return [".us"].includes(g)
			}

			function Je(g) {
				switch (g) {
					case ".us":
						return fe();
					default:
						return []
				}
			}

			function W(g) {
				switch (g) {
					case ".us":
						return ae;
					default:
						return {}
				}
			}
			const ae = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function fe() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([g, P]) => ({
						value: g,
						label: P
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([g, P]) => ({
						value: g,
						label: P
					}))
				}]
			}

			function we(g, P, ge) {
				return P[P.length - 1][ge] === g[ge]
			}

			function Le(g) {
				return Boolean(Object.keys(g).length === 0)
			}

			function xe(g) {
				return p()().add(g, "year").format(O)
			}

			function Qe({
				accountName: g
			}) {
				var P;
				const ge = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((P = g.toLowerCase().match(ge)) === null || P === void 0 ? void 0 : P[0]) || ""
			}

			function rt(g) {
				return !!g.match(m.default.email)
			}

			function lt(g) {
				return g === u.W7.PENDING_UPDATE
			}

			function at(g) {
				return g ? Object.values(u.wR).filter(P => P !== u.wR.OFFBOARDED).includes(g) : !1
			}

			function mt(g) {
				return g ? [u.wR.LOCKED, u.wR.ONBOARDED, u.wR.ONBOARDING_INITIATED, u.wR.PENDING_REGISTRY_LOCK, u.wR.PENDING_REGISTRY_UNLOCK, u.wR.PENDING_UNLOCK_APPROVAL].includes(g) : !1
			}

			function gt(g) {
				return g ? u.wR.UNLOCKED === g : !1
			}

			function $e(g) {
				return g ? u.wR.LOCKED === g : !1
			}

			function Ie(g) {
				return g ? u.wR.PENDING_REGISTRY_LOCK === g : !1
			}

			function je(g) {
				return g ? [u.wR.PENDING_REGISTRY_UNLOCK, u.wR.PENDING_UNLOCK_APPROVAL].includes(g) : !1
			}

			function ut(g) {
				var P;
				return !1
			}

			function st(g) {
				var P;
				return !1
			}

			function ft(g) {
				var P;
				return !1
			}

			function j(g) {
				var P;
				return !1
			}

			function ue(g) {
				var P;
				return !1
			}

			function Ee(g) {
				return Object.keys(u.wR).find(P => u.wR[P].toLowerCase() === g.toLowerCase())
			}

			function Ae(g) {
				var P;
				const ge = (P = Ee(g)) === null || P === void 0 ? void 0 : P.toLowerCase();
				return ge ? _.keys.protection_status[ge] : _.keys.protection_status.unknown
			}

			function ce(g) {
				return ["com", "net"].includes(g)
			}

			function pe(g) {
				const P = (0, i.pu)(g);
				return ce(P) ? u.wR.PENDING_REGISTRY_LOCK : u.wR.LOCKED
			}

			function ve(g) {
				return (0, i.pu)(g) === "co" ? 5 : 10
			}

			function B(g, P) {
				return P ? 1 : (0, i.pu)(g) === "co" ? 5 : (0, i.pu)(g) === "org" ? 1 : 10
			}

			function Y(g) {
				return (0, i.pu)(g) === "uk"
			}

			function he(g) {
				return (0, i.pu)(g) === "us"
			}

			function Pe(g) {
				return (0, i.pu)(g) === "ai"
			}

			function Fe(g) {
				return p()(g).isValid()
			}

			function We(g) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(g)
			}

			function Xe(g) {
				return !!(g == null ? void 0 : g.id)
			}

			function dt(g) {
				return g ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(g) : !1
			}

			function Et(g) {
				return g ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(g) : !1
			}

			function pt(g) {
				var P;
				return (g == null ? void 0 : g.lastKnownStatus) ? (P = g.lastKnownStatus) === null || P === void 0 ? void 0 : P.includes("deletionIrredeemable") : !1
			}

			function et(g) {
				switch (g) {
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

			function xt(g) {
				if (!g || !g.message) return n.OJ.DEFAULT;
				const {
					message: P
				} = g;
				switch (!0) {
					case P.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case P.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case P.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function tt(g) {
				var P, ge;
				return !!(((P = g.policies) === null || P === void 0 || (ge = P.suspension) === null || ge === void 0 ? void 0 : ge.parked) && g.policies.suspension.parkingReason)
			}

			function Mt(g) {
				var P, ge;
				return tt(g) && ((P = g.policies) === null || P === void 0 || (ge = P.suspension) === null || ge === void 0 ? void 0 : ge.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function $t(g) {
				var P, ge;
				return tt(g) && ((P = g.policies) === null || P === void 0 || (ge = P.suspension) === null || ge === void 0 ? void 0 : ge.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function Rt(g) {
				var P;
				return !((P = g.domainMove) === null || P === void 0 ? void 0 : P.ineligibilityReasons.length)
			}

			function jt(g) {
				var P, ge;
				return !!((P = g.domainMove) === null || P === void 0 || (ge = P.ineligibilityReasons) === null || ge === void 0 ? void 0 : ge.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Nt(g) {
				var P;
				return (P = g.actionableMetadata) === null || P === void 0 ? void 0 : P.find(ge => ge.type === n.wg.DOMAIN_MOVE)
			}

			function Wt(g) {
				const P = Nt(g);
				return (P == null ? void 0 : P.status) === "pending" && P.accountContext === n._5.GAINING
			}

			function Gt(g) {
				const P = Nt(g);
				return (P == null ? void 0 : P.status) === "pending" && P.accountContext === n._5.LOSING
			}

			function zt(g) {
				const P = oe(g.name);
				return !d.Pf.includes(P)
			}

			function Ot(g) {
				return d.QZ.includes(g)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				Bc: function() {
					return _
				},
				Hv: function() {
					return Z
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
				_ = (0, o.J8)("registrar_mock_transfer_out") || !1,
				n = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				s = "cf_registrar.enabled",
				l = "@abcABC1234567890123456",
				c = [".us"],
				f = [".travel", ".us"],
				E = (0, e.BC)`/${"accountId"}`,
				O = (0, e.BC)`${E}/add-site`,
				L = (0, e.BC)`${E}/domains`,
				h = (0, e.BC)`${L}/action-center`,
				R = (0, e.BC)`${L}/${"zoneName"}`,
				y = (0, e.BC)`${R}/configuration`,
				C = (0, e.BC)`${R}/contacts`,
				N = (0, e.BC)`${L}/pricing`,
				A = (0, e.BC)`${L}/protection`,
				M = (0, e.BC)`${L}/register`,
				T = (0, e.BC)`${M}/checkout`,
				I = (0, e.BC)`${M}/checkout/${"token"}`,
				S = (0, e.BC)`${M}/success`,
				K = (0, e.BC)`${L}/tlds`,
				q = (0, e.BC)`${L}/transfer`,
				ne = (0, e.BC)`${L}/transfer/${"zoneName"}`,
				re = (0, e.BC)`/registrar/accounts/verify_email`,
				Q = (0, e.BC)`/registrar/domains/verify_email`,
				V = (0, e.BC)`/sign-up/registrar`,
				me = (0, e.BC)`${L}/verify-email`,
				te = (0, e.BC)`${E}/${"zoneName"}`,
				G = {
					addSite: O,
					domains: L,
					domainsActionCenter: h,
					domainsDomain: R,
					domainsDomainConfiguration: y,
					domainsDomainContacts: C,
					domainsPricing: N,
					domainsProtection: A,
					domainsRegister: M,
					domainsRegisterCheckout: T,
					domainsRegisterCheckoutToken: I,
					domainsRegisterSuccess: S,
					domainsTlds: K,
					domainsTransfer: q,
					domainsTransferZone: ne,
					registrarAccountsVerifyEmail: re,
					registrarDomainsVerifyEmail: Q,
					signup: V,
					verifyEmail: me,
					zone: te
				},
				Z = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
			const a = _ => {
					const n = _ && _.accountFlags && _.accountFlags.data && _.accountFlags.data.registrar && _.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(r => r.trim()) : []
				},
				p = _ => {
					var n, r, s;
					return ((n = _.accountFlags) === null || n === void 0 || (r = n.data) === null || r === void 0 || (s = r.registrar) === null || s === void 0 ? void 0 : s["registrar-managed"]) || !1
				},
				u = _ => _.account ? _.account.email : "",
				m = _ => !1,
				i = _ => m(_) && (0, e.oJ)((0, e.Zu)(_)),
				d = _ => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: r
					} = _.registrar.registrations;
					return n && !(r.accepted_date || r.id || r.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(c).filter(function(E) {
						return Object.getOwnPropertyDescriptor(c, E).enumerable
					})), f.forEach(function(E) {
						i(s, E, c[E])
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
				var l = _(s, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function _(s, l) {
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
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/home/members/constants.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				Ey: function() {
					return i
				},
				F4: function() {
					return c
				},
				Fq: function() {
					return O
				},
				Go: function() {
					return r
				},
				Lc: function() {
					return y
				},
				Np: function() {
					return _
				},
				Rl: function() {
					return n
				},
				Sb: function() {
					return s
				},
				Sw: function() {
					return R
				},
				Sz: function() {
					return h
				},
				Ti: function() {
					return C
				},
				Uw: function() {
					return E
				},
				Zl: function() {
					return f
				},
				jk: function() {
					return L
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
				_ = i + "." + "zone",
				n = _ + ".",
				r = 100,
				s = 200,
				l = 5,
				c = 300,
				f = "INVITE_TOAST",
				E = "00000000000000000000000000000000",
				O = "usergroups-ui",
				L = {
					account: o,
					members: a,
					inviteMembers: p,
					editMember: u,
					addPolicy: m
				},
				h = {
					allow: "allow",
					deny: "deny"
				},
				R = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				y = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				C = {
					accountId: "",
					effect: h.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				AX: function() {
					return h
				},
				Co: function() {
					return O
				},
				JP: function() {
					return L
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
					return _
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

			function p(A) {
				for (var M = 1; M < arguments.length; M++) {
					var T = arguments[M] != null ? Object(arguments[M]) : {},
						I = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(T).filter(function(S) {
						return Object.getOwnPropertyDescriptor(T, S).enumerable
					})), I.forEach(function(S) {
						u(A, S, T[S])
					})
				}
				return A
			}

			function u(A, M, T) {
				return M = m(M), M in A ? Object.defineProperty(A, M, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[M] = T, A
			}

			function m(A) {
				var M = i(A, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function i(A, M) {
				if (typeof A != "object" || A === null) return A;
				var T = A[Symbol.toPrimitive];
				if (T !== void 0) {
					var I = T.call(A, M || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(A)
			}
			const d = () => p({}, a.Ti),
				_ = () => p({}, a.Lc, {
					scopes: [d()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = A => A.map(M => ({
					scope: {
						key: M,
						objects: [{
							key: "*"
						}]
					}
				})),
				r = (A, M, T) => {
					var I;
					let S = [],
						K = [];
					const q = [],
						ne = [];
					A.scopes.forEach(V => {
						if (V.mode === a.Sw.all) T ? S.push({
							id: T
						}) : S.push({
							scope: {
								key: `com.cloudflare.api.account.${M}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (V.mode === a.Sw.domain_group) {
							const G = {
								id: V.resourceGroupId
							};
							V.effect === a.Sz.allow ? S.push(G) : K.push(G)
						} else if (V.mode === a.Sw.zone) {
							const G = `${a.Rl}${V.zoneId}`;
							V.effect === a.Sz.allow ? q.push(G) : ne.push(G)
						} else if (V.mode === a.Sw.granular && V.granularResourceId) {
							var me, te;
							const G = V.granularProduct,
								x = `${(me=o.s_.find($=>$.value==G))===null||me===void 0?void 0:me.scopeKeyPrefix}.${V.granularResourceId}`,
								ie = `${(te=o.s_.find($=>$.value===G))===null||te===void 0?void 0:te.scopeSubsetOfPrefix}.${M}`;
							S.push({
								scope: {
									key: `${x}`,
									subset_of: [{
										key: `${ie}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), q.length && (S = S.concat(n(q))), ne.length && (K = K.concat(n(ne)));
					const re = (I = A.permission_groups) === null || I === void 0 ? void 0 : I.map(V => ({
							id: V
						})),
						Q = [];
					return Q.push({
						access: a.Sz.allow,
						permission_groups: re,
						resource_groups: S
					}), K.length && Q.push({
						access: a.Sz.deny,
						permission_groups: re,
						resource_groups: K
					}), Q
				},
				s = A => A.map(M => {
					var T;
					return {
						access: M.access,
						permission_groups: M.permission_groups.map(I => ({
							id: I.id
						})),
						resource_groups: (T = M.resource_groups) === null || T === void 0 ? void 0 : T.map(I => ({
							scope: {
								key: I.scope.key,
								objects: I.scope.objects
							},
							id: I.id
						}))
					}
				}),
				l = (A, M, T, I) => {
					const S = A.auto_accept;
					let K = [];
					return K = K.concat(r(A, M, T)), I && (K = K.concat(s(I))), {
						auto_accept: S,
						status: S ? "accepted" : "pending",
						policies: K
					}
				},
				c = A => {
					const M = A.split(".");
					return M[M.length - 1]
				},
				f = A => {
					var M, T;
					const I = A == null ? void 0 : A.access;
					let S = [],
						K = A == null || (M = A.resource_groups) === null || M === void 0 ? void 0 : M.map(q => {
							var ne;
							const re = E(q);
							if ((q == null || (ne = q.meta) === null || ne === void 0 ? void 0 : ne.editable) === "false") return {
								effect: I,
								mode: a.Sw.all,
								accountId: c(q.id)
							};
							if (re) {
								var Q;
								const V = q == null || (Q = q.scope) === null || Q === void 0 ? void 0 : Q.key.split(".").pop();
								return {
									effect: I,
									mode: a.Sw.granular,
									granularProduct: re.value,
									granularResourceId: V
								}
							} else if (!q.name) q.scope.key.startsWith(a.Rl) ? S.push({
								key: q.scope.key
							}) : S = S.concat(q.scope.objects);
							else return {
								effect: I,
								mode: a.Sw.domain_group,
								resourceGroupId: c(q.id)
							}
						}).filter(q => q);
					if ((T = S) === null || T === void 0 ? void 0 : T.length) {
						let q = S.map(ne => {
							const re = c(ne.key);
							return {
								effect: I,
								mode: a.Sw.zone,
								zoneId: re
							}
						});
						K = K.length ? q.concat(K) : q
					}
					return K
				},
				E = A => {
					var M, T, I, S;
					const K = A == null || (M = A.scope) === null || M === void 0 ? void 0 : M.key.split(".").slice(0, -1).join("."),
						q = A == null || (T = A.scope) === null || T === void 0 || (I = T.subset_of) === null || I === void 0 || (S = I[0]) === null || S === void 0 ? void 0 : S.key.split(".").slice(0, -1).join(".");
					return o.s_.find(ne => ne.scopeKeyPrefix === K && ne.scopeSubsetOfPrefix === q)
				},
				O = A => {
					if (!(A == null ? void 0 : A.length)) return [];
					const M = [];
					return A.forEach(T => {
						var I;
						(I = T.resource_groups) === null || I === void 0 || I.forEach(S => {
							var K, q;
							((K = S.scope) === null || K === void 0 || (q = K.key) === null || q === void 0 ? void 0 : q.startsWith(a.Rl)) && M.push(c(S.scope.key))
						})
					}), M
				},
				L = A => {
					if (!(A == null ? void 0 : A.length)) return [];
					const M = [];
					return A.forEach(T => {
						var I;
						(I = T.resource_groups) === null || I === void 0 || I.forEach(S => {
							var K, q;
							if (!((K = S.scope) === null || K === void 0 || (q = K.key) === null || q === void 0 ? void 0 : q.startsWith(a.Rl))) {
								var ne;
								const Q = (ne = S.scope) === null || ne === void 0 ? void 0 : ne.objects;
								for (let V = 0; V < (Q == null ? void 0 : Q.length) && V < a.r6; V++) {
									var re;
									((re = Q[V].key) === null || re === void 0 ? void 0 : re.startsWith(a.Rl)) && M.push(c(Q[V].key))
								}
							}
						})
					}), M
				},
				h = A => {
					var M;
					if (!(A == null ? void 0 : A.length)) return null;
					const T = (M = A[0]) === null || M === void 0 ? void 0 : M.permission_groups.map(q => q.id);
					let I, S;
					A == null || A.forEach(q => {
						q.access === a.Sz.allow && (I = q), q.access === a.Sz.deny && (S = q)
					});
					let K = [];
					return I && (K = f(I)), S && (K = K.concat(f(S))), {
						permission_groups: T,
						scopes: K
					}
				},
				R = "permission-groups-",
				y = new Map,
				C = A => {
					if (!A) return [];
					const M = y.get(A);
					if (M) return M;
					const T = e.E.get(`${R}${A}`);
					return y.set(A, T), T
				},
				N = (A, M) => {
					const T = [];
					for (let I = 0; I < sessionStorage.length; I++) {
						const S = sessionStorage.key(I);
						(S == null ? void 0 : S.startsWith(R)) && T.push(S)
					}
					return T.length >= 5 && e.E.remove(T[0]), e.E.set(`${R}${A}`, M)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(F, v, t) {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(F, v, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				KO: function() {
					return i
				},
				L9: function() {
					return n
				},
				N3: function() {
					return _
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
				_ = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const n = (r, s = {}) => {
				o().sendEvent(r, a({}, s, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/selectors.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				$4: function() {
					return p
				},
				GH: function() {
					return c
				},
				JZ: function() {
					return E
				},
				aR: function() {
					return s
				},
				db: function() {
					return m
				},
				ib: function() {
					return O
				},
				lW: function() {
					return y
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
				_ = "c2pa",
				n = "c2pa_polish",
				r = "CloudflareImages",
				s = C => !!(0, o.BF)(C, "images.transformations_enabled"),
				l = C => Boolean((0, o.BF)(C, "images.enabled")),
				c = C => {
					const N = (0, o.BF)(C, "images.storage");
					return typeof N == "number" && N > 0
				},
				f = C => Boolean((0, o.BF)(C, "contract.customer_enabled")),
				E = C => Boolean((0, e.oI)(C, m, p)),
				O = C => Boolean((0, a.Le)(C, r, p)),
				L = C => Boolean(getAccountFlipperFlag(C, r, i)),
				h = C => Boolean((0, a.Le)(C, r, d)),
				R = C => Boolean((0, a.Le)(C, r, _)),
				y = C => Boolean((0, a.Le)(C, r, n))
		},
		"../react/pages/magic/constants.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return O
				},
				Up: function() {
					return p
				},
				W8: function() {
					return _
				},
				Ws: function() {
					return L
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
					return E
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
				_ = "magic-wan",
				n = "gre_tunnel",
				r = "ipsec_tunnel",
				s = "interconnect",
				l = 64,
				c = 1476,
				f = "mid",
				E = "reply",
				O = h => [{
					value: void 0,
					label: h("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: h("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: h("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				L = h => [{
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
		"../react/pages/magic/network-monitoring/constants.ts": function(F, v, t) {
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
		"../react/pages/magic/overview/tracking.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/magic/packet-captures/constants.ts": function(F, v, t) {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
				gb: function() {
					return n
				},
				iP: function() {
					return A
				},
				xL: function() {
					return L
				},
				rD: function() {
					return T
				},
				oT: function() {
					return c
				},
				i2: function() {
					return I
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
					return E
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
				d = () => o().createElement(_, null, o().createElement("svg", {
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
				_ = (0, a.createComponent)(({
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
				n = () => o().createElement(r, null, o().createElement(u.Ei, {
					alt: "airplane",
					src: p,
					width: "85%"
				})),
				r = (0, a.createComponent)(({
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
				E = () => o().createElement(O, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				O = (0, a.createComponent)(({
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
				L = () => o().createElement(h, null, o().createElement("svg", {
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
				R = () => o().createElement(y, null, o().createElement("svg", {
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
				y = (0, a.createComponent)(({
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
				A = () => o().createElement("svg", {
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
				I = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/page-rules/tracking.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/pages/constants.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				A: function() {
					return E
				},
				C1: function() {
					return _
				},
				Dp: function() {
					return S
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
					return Q
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
					return q
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
					return O
				},
				fR: function() {
					return e
				},
				hE: function() {
					return K
				},
				iS: function() {
					return L
				},
				ku: function() {
					return I
				},
				nY: function() {
					return y
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
					return A
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
				_ = 100,
				n = 350,
				r = 1e7,
				s = ["Success:", "Error:", "Failed:"],
				l = 10,
				c = "_headers",
				f = "_redirects",
				E = "_routes.json",
				O = "_worker.js",
				L = "do-a-barrel-roll",
				h = [c, f, E, O],
				R = 1024 * 1024 * 25,
				y = 1e3,
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
				A = 75e3,
				M = 2e5,
				T = 15e4,
				I = "workers",
				S = "cloudflare_pages_build_caching",
				K = 2;
			let q = function(V) {
				return V[V.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", V[V.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", V[V.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", V[V.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", V[V.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", V[V.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", V
			}({});
			const ne = 1,
				re = 2,
				Q = 2
		},
		"../react/pages/pages/routes.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/pipelines/tracking.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				KO: function() {
					return i
				},
				L9: function() {
					return _
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
			const _ = (n, r = {}) => {
				o().sendEvent(n, a({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					const _ = p(d);
					return `https://${i}.${_}`
				},
				m = (i, d, _) => `${u(i,d)}/${_}`
		},
		"../react/pages/r2/selectors.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
				_ = s => getAccountEntitlement(s, "r2.enabled"),
				n = s => Boolean((0, a.Le)(s, i, p)),
				r = s => Boolean(getAccountFlipperFlagsChanges(s, d, u))
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				Gk: function() {
					return s
				},
				LA: function() {
					return _
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
						E = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(f).filter(function(O) {
						return Object.getOwnPropertyDescriptor(f, O).enumerable
					})), E.forEach(function(O) {
						p(l, O, f[O])
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
					var E = f.call(l, c || "default");
					if (typeof E != "object") return E;
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
				_ = ["phishing_interstitial", "malware_interstitial", "legal_block"],
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
		"../react/pages/security-center/BlockedContent/types.ts": function(F, v, t) {
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
		"../react/pages/security-center/tracking.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/security/analytics/resources/labels.ts": function(F, v, t) {
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
		"../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
			var e = t("../react/pages/security/analytics/resources/labels.ts"),
				o = t("../react/common/constants/analytics/botScoreSrc.ts");
			const a = ["block", "challenge", "jschallenge", "managedChallenge"],
				p = ["miss", "expired", "bypass", "dynamic"],
				u = c => Object.fromEntries(Object.entries(c).map(([f, E]) => [E, f])),
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
				_ = u(d),
				n = u(o.EG);
			let r = function(c) {
				return c.SAMPLED = "sampled", c.RAW = "raw", c
			}({});
			const s = "security-analytics-log-explorer";
			let l = function(c) {
				return c.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', c.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', c.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', c.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', c.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', c
			}({})
		},
		"../react/pages/security/api-shield/constants.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				AB: function() {
					return r
				},
				API_SHIELD_TOAST: function() {
					return L
				},
				CR: function() {
					return O
				},
				Cg: function() {
					return _
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
					return E
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
				_ = "all";
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
			const E = {
					METHOD: "method.listbox_filter",
					HOSTNAME: "hostname.listbox_filter",
					LABELS: "labels.listbox_filter"
				},
				O = "api-shield-schema-validation-for-all-customers";
			let L = function(h) {
				return h.UPLOAD_SCHEMA = "schemaName", h.ADDED_ENDPOINT = "addedEndpoint", h.DEPLOYED_ROUTE = "deployedRoute", h.DELETED_ROUTE = "deletedRoute", h.UPDATED_LABELS_SINGLE_ENDPOINT = "updateLabelsSingle", h.UPDATED_LABELS_MULTI_ENDPOINT = "updateLabelsMulti", h
			}({})
		},
		"../react/pages/security/api-shield/entitlements.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
				$0: function() {
					return r
				},
				CR: function() {
					return n
				},
				DM: function() {
					return Q
				},
				DN: function() {
					return S
				},
				Dc: function() {
					return V
				},
				Dg: function() {
					return ne
				},
				FV: function() {
					return K
				},
				LG: function() {
					return h
				},
				Mz: function() {
					return q
				},
				OL: function() {
					return i
				},
				St: function() {
					return O
				},
				UG: function() {
					return s
				},
				Wy: function() {
					return l
				},
				iU: function() {
					return A
				},
				jI: function() {
					return u
				},
				qK: function() {
					return I
				},
				qN: function() {
					return _
				},
				r6: function() {
					return me
				},
				sK: function() {
					return f
				},
				t1: function() {
					return y
				},
				yk: function() {
					return d
				},
				yo: function() {
					return re
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
				_ = () => !!(0, o.Z)(i.discoveryThresholdsAllowed),
				n = u[e.H.JWT],
				r = () => !!(0, o.Z)(n.tokenValidationAllowed),
				s = () => (0, o.Z)(n.maxTokenValidationRules),
				l = () => (0, o.Z)(n.maxTokenValidationConfigs),
				c = u[e.H.SEQUENCE],
				f = () => !!(0, o.Z)(c.sequenceAllowed),
				E = u[e.H.SEQUENCE_RULES],
				O = () => (0, o.Z)(E.maxSequenceRules),
				L = u[e.H.OPERATIONS],
				h = () => (0, o.Z)(L.maxOperationsAllowed),
				R = u[e.H.USER_SCHEMAS],
				y = () => {
					const te = (0, o.Z)(R.maxUserSchemasAllowed);
					return typeof te == "number" ? te : p.Hs
				},
				C = () => {
					const te = (0, o.Z)(R.maxSchemaBytesAllowed);
					return typeof te == "number" ? te : p.x5
				},
				N = u[e.H.LEARNED_SCHEMAS],
				A = () => (0, o.Z)(N.maxLearnedSchemasAllowed),
				M = u[e.H.SCHEMA_VALIDATION],
				T = () => useZoneEntitlement(M.schemaValidationAllowed),
				I = () => (0, o.Z)(M.maxSchemaBytes),
				S = u[e.H.CONFIGURATION],
				K = () => (0, o.Z)(S.maxApiShields),
				q = () => (0, o.Z)(S.apiRouting),
				ne = () => (0, o.Z)(S.centralEndpointsListAllowed),
				re = () => !!(0, o.Z)(m.logAllowed),
				Q = () => !!(0, o.Z)(m.regexOperatorAllowed),
				V = () => !!(0, o.Z)(m.dlpAllowed),
				me = () => !!(0, a.Z)(m.sequencesAllowed)
		},
		"../react/pages/security/api-shield/settings/constants.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return _
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
			let u = function(E) {
				return E.JWT_SECTION = "JWT_SECTION", E.ENDPOINT_SETTINGS = "ENDPOINT_SETTINGS", E.SCHEMA_SETTINGS = "SCHEMA_SETTINGS", E
			}({});
			const m = {
					page: 1,
					perPage: 5,
					totalCount: 0
				},
				i = 2e5,
				d = 5,
				_ = {
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
		"../react/pages/security/api-shield/tracking.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				Fj: function() {
					return d
				},
				kq: function() {
					return i
				},
				xr: function() {
					return _
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
				_ = ({
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
		"../react/pages/security/api-shield/types.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/security/api-shield/utils/useApiShield.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					_ = p(),
					n = (0, e.yk)(),
					r = (0, e.yo)(),
					s = (0, m.p4)(u.nA),
					l = (0, u.Ns)(s),
					c = (0, u._y)(s),
					f = (0, u.z5)(s),
					E = (0, u.ko)(s);
				return {
					isFreeZone: l,
					isProZone: c,
					isBiz: f,
					isEnterpriseZone: E,
					hasLogAction: r,
					hasApiShields: d,
					hasApiDiscovery: n,
					hasFreeTier: _ && !d,
					hasApiShieldsAndApiDiscovery: n && d,
					isEnableFreeTier: _
				}
			}
		},
		"../react/pages/security/bots/tracking.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/security/page-shield/resources/index.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				CP: function() {
					return x
				},
				Ks: function() {
					return Ne
				},
				sV: function() {
					return J
				},
				SI: function() {
					return Te
				},
				v5: function() {
					return N
				},
				xg: function() {
					return k
				},
				YC: function() {
					return b
				},
				MC: function() {
					return A
				},
				Xe: function() {
					return r
				},
				u8: function() {
					return T
				},
				Oq: function() {
					return Z
				},
				VT: function() {
					return I
				},
				qc: function() {
					return K
				},
				V0: function() {
					return C
				},
				Lj: function() {
					return Me
				},
				k2: function() {
					return E
				},
				$g: function() {
					return c
				},
				SJ: function() {
					return q
				},
				KH: function() {
					return G
				},
				Mq: function() {
					return te
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
					return ye
				},
				Uq: function() {
					return y
				},
				yd: function() {
					return Q
				},
				QM: function() {
					return V
				},
				Uc: function() {
					return me
				},
				R$: function() {
					return f
				},
				pG: function() {
					return Ke
				},
				Ar: function() {
					return Re
				},
				Sk: function() {
					return $
				},
				gY: function() {
					return Oe
				},
				SE: function() {
					return He
				},
				m: function() {
					return se
				},
				xP: function() {
					return H
				},
				CI: function() {
					return ee
				},
				p0: function() {
					return Ce
				},
				xl: function() {
					return Ze
				},
				Tb: function() {
					return ze
				},
				h3: function() {
					return Be
				},
				xq: function() {
					return ve
				},
				SQ: function() {
					return j
				},
				C0: function() {
					return ue
				},
				av: function() {
					return W
				},
				W3: function() {
					return Ve
				},
				WO: function() {
					return Le
				},
				Dk: function() {
					return at
				},
				we: function() {
					return Ie
				},
				Yt: function() {
					return st
				},
				ex: function() {
					return ut
				},
				E1: function() {
					return je
				},
				e0: function() {
					return gt
				},
				UH: function() {
					return xe
				},
				Qt: function() {
					return $e
				},
				K$: function() {
					return Qe
				},
				dm: function() {
					return fe
				},
				oK: function() {
					return rt
				},
				qZ: function() {
					return ft
				},
				_4: function() {
					return Ee
				},
				qo: function() {
					return Ae
				},
				CB: function() {
					return ke
				},
				ti: function() {
					return Ge
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(o),
				p = t("../../../common/component/component-filter-bar/src/index.js"),
				u = t("../react/common/components/analytics/AnalyticsReport/constants.ts");

			function m(B) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var he = arguments[Y] != null ? Object(arguments[Y]) : {},
						Pe = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && Pe.push.apply(Pe, Object.getOwnPropertySymbols(he).filter(function(Fe) {
						return Object.getOwnPropertyDescriptor(he, Fe).enumerable
					})), Pe.forEach(function(Fe) {
						i(B, Fe, he[Fe])
					})
				}
				return B
			}

			function i(B, Y, he) {
				return Y = d(Y), Y in B ? Object.defineProperty(B, Y, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[Y] = he, B
			}

			function d(B) {
				var Y = _(B, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function _(B, Y) {
				if (typeof B != "object" || B === null) return B;
				var he = B[Symbol.toPrimitive];
				if (he !== void 0) {
					var Pe = he.call(B, Y || "default");
					if (typeof Pe != "object") return Pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(B)
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
				E = function(B) {
					return B.DomainMalicious = "domain_reported_malicious", B.UrlMalicious = "url_reported_malicious", B
				}({});

			function O(B) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var he = arguments[Y] != null ? Object(arguments[Y]) : {},
						Pe = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && Pe.push.apply(Pe, Object.getOwnPropertySymbols(he).filter(function(Fe) {
						return Object.getOwnPropertyDescriptor(he, Fe).enumerable
					})), Pe.forEach(function(Fe) {
						L(B, Fe, he[Fe])
					})
				}
				return B
			}

			function L(B, Y, he) {
				return Y = h(Y), Y in B ? Object.defineProperty(B, Y, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[Y] = he, B
			}

			function h(B) {
				var Y = R(B, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function R(B, Y) {
				if (typeof B != "object" || B === null) return B;
				var he = B[Symbol.toPrimitive];
				if (he !== void 0) {
					var Pe = he.call(B, Y || "default");
					if (typeof Pe != "object") return Pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(B)
			}
			const y = 50,
				C = 9,
				N = "copy script url page shield",
				A = "disable page shield",
				M = "click documentation link",
				T = "enable page shield",
				I = "filter search page shield",
				S = "filter search view all page shield",
				K = "hover score tooltip page shield",
				q = "open alert modal page shield",
				ne = "change pagination page shield",
				re = "close script modal page shield",
				Q = "open script modal page shield",
				V = "select alert type page shield",
				me = "sort column page shield",
				te = {
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
				Z = {
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
				x = O({}, Z, {
					urls: O({}, Z.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				J = {
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
			let ie = function(B) {
				return B.SECURITY_THREATS = "Security Threats", B.C2_BOTNET = "C2 & Botnet", B.CRYPTOMINING = "Cryptomining", B.MALWARE = "Malware", B.PHISHING = "Phishing", B.SPYWARE = "Spyware", B.DGA_DOMAINS = "DGA Domains", B.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", B
			}({});
			const $ = "https://www.cloudflare.com/plans/enterprise/contact/",
				b = {
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
				z = {
					[c.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[c.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[c.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[f.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[f.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				oe = {
					[E.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[E.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
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
				ye = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				Te = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				Me = {
					[l.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[l.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[l.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				Ne = {
					[l.SCRIPT_MONITOR]: "script_monitor.description",
					[l.CONNECTION_MONITOR]: "connection_monitor.description",
					[l.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				He = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", B => (a().sendEvent(de.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), B)),
				ke = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", B => (a().sendEvent(de.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), B)),
				ze = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", B => (a().sendEvent(de.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), B)),
				Ze = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				H = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", B => (a().sendEvent(de.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), B)),
				se = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				w = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", B => (a().sendEvent(de.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), B)),
				ee = (0, e.ZP)("pageShieldPolicies", "get", "/zones/(zoneId)/page_shield/policies").on("success", B => (a().sendEvent(de.VIEW_PAGE_SHIELD_POLICIES, {
					category: "user journey",
					product: "Page shield"
				}), B)),
				Ce = (0, e.ZP)("pageShieldPolicy", "get", "/zones/(zoneId)/page_shield/policies/(policiesId)"),
				Ge = (0, e.ZP)("pageShieldPolicy", "put", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", B => (a().sendEvent(de.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "update"
				}), B)),
				Re = (0, e.ZP)("pageShieldPolicy", "delete", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", B => (a().sendEvent(de.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "delete"
				}), B)),
				Ke = (0, e.ZP)("pageShieldPolicy", "post", "/zones/(zoneId)/page_shield/policies").on("success", B => (a().sendEvent(de.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "create"
				}), B)),
				Oe = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				Be = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var Ue = t("../react/app/redux/normalizer.js");
			const Ve = B => B.pageShield.configuration,
				Je = B => {
					var Y;
					return (Y = B.pageShield.configuration.data) === null || Y === void 0 ? void 0 : Y.enabled
				},
				W = B => {
					var Y;
					return (Y = Ve(B)) === null || Y === void 0 ? void 0 : Y.data
				},
				ae = B => B.pageShield.scripts,
				fe = B => B.pageShield.script,
				we = B => B.pageShield.connections,
				Le = B => B.pageShield.connection,
				xe = B => B.pageShield.policies,
				Qe = B => B.pageShield.policy,
				rt = (0, Ue.P1)("pageShieldScripts", ae),
				lt = (0, Ue.P1)("pageShieldScript", fe),
				at = (0, Ue.P1)("pageShieldConnections", we),
				mt = (0, Ue.P1)("pageShieldConnection", Le),
				gt = (0, Ue.P1)("pageShieldPolicies", xe),
				$e = (0, Ue.P1)("pageShieldPolicy", Qe),
				Ie = (B, Y) => B === l.SCRIPT_MONITOR ? rt(Y) || [] : at(Y) || [],
				je = (B, Y) => B === l.SCRIPT_MONITOR ? ae(Y) || [] : we(Y) || [],
				ut = (B, Y) => B === l.SCRIPT_MONITOR ? lt(Y) : mt(Y),
				st = B => B.pageShield.domainIntel,
				ft = B => B.pageShield.whoIsRecord,
				j = (B, Y, he) => {
					var Pe;
					const Fe = Object.values(he).map(We => ({
						key: We,
						label: z[We],
						score: B[We]
					})).filter(We => We.score !== void 0 && We.score <= Y);
					return Y === C && Fe.length === 0 && ((Pe = B.js_integrity_score) !== null && Pe !== void 0 ? Pe : 100) <= Y && Fe.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), Fe
				},
				ue = (B, Y) => Object.values(Y).filter(he => B[he] === !0).map(he => oe[he]),
				Ee = B => B === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				Ae = (B, Y) => B[c.MagecartScore] !== void 0 && B[c.MagecartScore] <= Y || B[c.MalwareScore] !== void 0 && B[c.MalwareScore] <= Y || B[c.CryptominingScore] !== void 0 && B[c.CryptominingScore] <= Y || B.js_integrity_score !== void 0 && B.js_integrity_score <= Y,
				ce = ["cdn.jsdelivr.net", "unpkg.com"],
				pe = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				ve = B => {
					if (B.includes("@latest")) {
						const he = B.split("@latest");
						if (he.length != 2) return;
						const Pe = he[0].length,
							Fe = Pe + "@latest".length;
						return [Pe, Fe]
					}
					if (!!ce.some(he => B.includes(he)))
						for (const he of pe) {
							const Pe = B.match(he);
							if (!Pe) continue;
							const Fe = Pe.index;
							if (Fe === 0) return null;
							const We = Fe + Pe[0].length;
							return [Fe, We]
						}
				}
		},
		"../react/pages/security/resources/constants.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
				_C: function() {
					return l
				},
				_R: function() {
					return c
				},
				dY: function() {
					return E
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
					return L
				},
				zf: function() {
					return O
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				o = t("../../../common/util/types/src/api/phases/fields.tsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				p = t.n(a),
				u = t("../react/utils/translator.tsx"),
				m = t("../react/pages/security/resources/types.ts"),
				i = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx");

			function d(y) {
				for (var C = 1; C < arguments.length; C++) {
					var N = arguments[C] != null ? Object(arguments[C]) : {},
						A = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(N).filter(function(M) {
						return Object.getOwnPropertyDescriptor(N, M).enumerable
					})), A.forEach(function(M) {
						_(y, M, N[M])
					})
				}
				return y
			}

			function _(y, C, N) {
				return C = n(C), C in y ? Object.defineProperty(y, C, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[C] = N, y
			}

			function n(y) {
				var C = r(y, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function r(y, C) {
				if (typeof y != "object" || y === null) return y;
				var N = y[Symbol.toPrimitive];
				if (N !== void 0) {
					var A = N.call(y, C || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(y)
			}
			const s = 10;
			let l = function(y) {
					return y.MTLS_ACCESS = "mTLS-enforced authentication", y.ZONE_LOCKDOWN = "Zone lockdown", y.USER_AGENT = "User agent blocking", y.EMAIL_VALIDITY = "Disposable email checks", y.IP_BASED = "IP-based rule", y.GEOGRAPHY_BASE = "Geography-based rule", y
				}({}),
				c = function(y) {
					return y.LEAKED_CREDENTIALS = "Leaked Credentials Checks", y
				}({});
			const f = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				E = [{
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
				O = {
					[m.X.UI_SECTION]: y => ({
						[l.MTLS_ACCESS]: {
							ruleName: l.MTLS_ACCESS,
							displayName: p().createElement(u.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: p().createElement(u.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${y.account.id}/${y.name}/ssl-tls/client-certificates`
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
									to: `/${y.account.id}/configurations/lists`
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
									to: `/${y.account.id}/configurations/lists`
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
				L = {
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
			let h = function(y) {
				return y.DISCOVERY = "discovery", y.SEQUENCES = "sequences", y.SCHEMA_VALIDATION = "schema-validation", y.SETTINGS = "settings", y.API_RULES = "api-rules", y.UPGRADE = "upgrade", y
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
		"../react/pages/security/resources/types.ts": function(F, v, t) {
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
		"../react/pages/security/settings/hooks/index.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				Xu: function() {
					return V
				},
				Io: function() {
					return b
				},
				FQ: function() {
					return Ze
				},
				vU: function() {
					return Q
				},
				M: function() {
					return te
				},
				d7: function() {
					return me
				},
				Oz: function() {
					return $
				},
				Np: function() {
					return He
				},
				WR: function() {
					return M
				},
				vE: function() {
					return q
				},
				bE: function() {
					return ke
				},
				u_: function() {
					return re
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
			const a = async H => {
				var se, w;
				const ee = await (0, o.get)(`/zones/${H}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((se = ee == null ? void 0 : ee.body) === null || se === void 0 || (w = se.result) === null || w === void 0 ? void 0 : w.value) === "enabled"
			}, p = async (H, se) => (await (0, o.post)(`/zones/${H}/content-upload-scan/${se?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), se), u = async H => {
				var se;
				const w = await (0, o.get)(`/zones/${H}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((se = w == null ? void 0 : w.body) === null || se === void 0 ? void 0 : se.result) || []
			}, m = async (H, se) => {
				var w;
				const ee = await (0, o.post)(`/zones/${H}/content-upload-scan/payloads`, {
					body: [se]
				});
				return (w = ee == null ? void 0 : ee.body) === null || w === void 0 ? void 0 : w.result
			}, i = async (H, se) => (await (0, o.del)(`/zones/${H}/content-upload-scan/payloads/${se}`, {
				hideErrorAlert: !0
			}), se), d = async H => {
				var se, w;
				const ee = await (0, o.get)(`/zones/${H}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((se = ee == null ? void 0 : ee.body) === null || se === void 0 || (w = se.result) === null || w === void 0 ? void 0 : w.enabled)
			}, _ = async (H, se) => {
				var w, ee;
				const Ce = await (0, o.post)(`/zones/${H}/leaked-credential-checks`, {
					body: {
						enabled: se
					}
				});
				return !!((w = Ce == null ? void 0 : Ce.body) === null || w === void 0 || (ee = w.result) === null || ee === void 0 ? void 0 : ee.enabled)
			}, n = async H => {
				var se;
				const w = await (0, o.get)(`/zones/${H}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (se = w == null ? void 0 : w.body) === null || se === void 0 ? void 0 : se.result
			}, r = async (H, se) => {
				var w;
				const ee = await (0, o.post)(`/zones/${H}/leaked-credential-checks/detections`, {
					body: se
				});
				return (w = ee == null ? void 0 : ee.body) === null || w === void 0 ? void 0 : w.result
			}, s = async (H, se) => (await (0, o.del)(`/zones/${H}/leaked-credential-checks/detections/${se}`, {
				hideErrorAlert: !0
			}), se), l = async (H, se) => {
				await (0, o.put)(`/zones/${H}/security-center/securitytxt`, {
					body: se
				})
			}, c = async H => {
				await (0, o.del)(`/zones/${H}/security-center/securitytxt`)
			}, f = async H => (await (0, o.get)(`/zones/${H}/security-center/securitytxt`)).body;
			var E = t("webpack/sharing/consume/default/react/react"),
				O = t("webpack/sharing/consume/default/react-redux/react-redux"),
				L = t("../react/pages/security/settings/resources/index.ts"),
				h = t("../react/common/hooks/useZoneEntitlement.ts"),
				R = t("../react/common/hooks/useGate.ts"),
				y = t("../react/pages/security/api-shield/utils/useApiShield.tsx"),
				C = t("../react/pages/security/api-shield/entitlements.tsx"),
				N = t("../../../../node_modules/yup/es/index.js"),
				A = t("../react/utils/translator.tsx");
			const M = () => (0, O.useSelector)(L.ui),
				T = "central_endpoint_list.endpoint_labels_allowed",
				I = "system-and-user-generated-labels",
				S = () => !!(0, R.Z)(I),
				K = () => !!(0, h.Z)(T),
				q = () => {
					const H = S(),
						se = K();
					return {
						isLabelsGateOpen: H,
						hasEndpointLabelsEntitlement: se,
						hasLabels: H && se
					}
				},
				ne = () => {
					const {
						hasApiShields: H
					} = (0, y.R)(), {
						hasLabels: se
					} = q(), w = (0, C.Dg)();
					return se && w && H
				},
				re = () => {
					const {
						t: H
					} = (0, A.QT)(), se = N.Z_().required(H("common.field_is_required")).max(24, H("labels.apply.form.name.error.max_characters")).matches(L.DG, H("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", H("labels.apply.form.name.error.cf_forbidden"), Ce => !L.aW.test(Ce)), w = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: Ce => N.Ry().shape({
							[L.n5.NAME]: Ce ? N.Z_() : se,
							[L.n5.DESCRIPTION]: Ce ? N.Z_().optional() : N.Z_().max(150, H("labels.apply.form.description.error.max_characters"))
						})
					}, ee = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[L.N2.NAME]: "",
							[L.N2.SOURCE]: L.W3,
							[L.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => N.Ry().shape({
							[L.N2.NEW_LABEL_NAME]: se
						})
					};
					return {
						LABELS_APPLY_FORM: w,
						EDIT_LABELS_MODAL_FORM: ee
					}
				},
				Q = ({
					modalHeaderFixedHeight: H = 62,
					modalDefaultPaddings: se = 16
				} = {}) => {
					const w = (0, E.useRef)(null),
						ee = (0, E.useRef)(null),
						[Ce, Ge] = (0, E.useState)(0),
						[Re, Ke] = (0, E.useState)(0),
						Oe = `calc(100vh - ${Ce}px - ${Re}px - ${se}px)`,
						[Be, Ue] = (0, E.useState)("");
					return (0, E.useEffect)(() => {
						const Ve = () => {
							var Je, W, ae, fe;
							const we = w == null || (Je = w.current) === null || Je === void 0 ? void 0 : Je.offsetHeight,
								Le = ee == null || (W = ee.current) === null || W === void 0 ? void 0 : W.offsetHeight,
								xe = ((ae = we) !== null && ae !== void 0 ? ae : 0) + H,
								Qe = (fe = Le) !== null && fe !== void 0 ? fe : 0;
							Ge(xe), Ke(Qe)
						};
						return Ve(), window.addEventListener("resize", Ve), () => window.removeEventListener("resize", Ve)
					}, []), {
						searchTerm: Be,
						setSearchTerm: Ue,
						scrollableSectionMaxHeight: Oe,
						topMenuRef: w,
						bottomMenuRef: ee
					}
				},
				V = H => {
					const se = M(),
						w = (0, e.useQueryClient)(),
						ee = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${H}`,
							queryFn: () => a(H),
							enabled: se
						}),
						Ce = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${H}`,
							queryFn: () => u(H),
							enabled: se && !!(ee == null ? void 0 : ee.data)
						}),
						Ge = (0, e.useMutation)({
							mutationFn: async ({
								enabled: Oe
							}) => await p(H, Oe),
							onSuccess: Oe => {
								w.setQueryData([`content-scanning-enabled-${H}`], Oe)
							}
						}),
						Re = (0, e.useMutation)({
							mutationFn: Oe => m(H, Oe),
							onSuccess: Oe => {
								w.setQueryData([`content-scanning-detections-${H}`], Oe)
							}
						}),
						Ke = (0, e.useMutation)({
							mutationFn: Oe => i(H, Oe),
							onSuccess: Oe => {
								var Be;
								const Ue = (Be = w.getQueryData(`content-scanning-detections-${H}`)) !== null && Be !== void 0 ? Be : [];
								w.setQueryData([`content-scanning-detections-${H}`], Ue.filter(({
									id: Ve
								}) => Ve !== Oe))
							}
						});
					return {
						entitled: se,
						loading: ee.isLoading || Ce.isLoading,
						error: ee.isError || Ce.isError,
						enabled: {
							data: ee.data,
							toggleEnabled: async Oe => Ge.mutateAsync({
								enabled: Oe
							})
						},
						detections: {
							data: Ce.data,
							add: Re.mutateAsync,
							delete: Ke.mutateAsync,
							loading: Re.isLoading || Ke.isLoading
						}
					}
				},
				me = () => {
					const H = (0, R.Z)(L.dC),
						se = (0, O.useSelector)(L.cN),
						w = (0, O.useSelector)(L.bH),
						ee = (0, O.useSelector)(L.P3),
						Ce = (0, O.useSelector)(L.Ri);
					return {
						hasEditPermission: H && se,
						isEnabled: H && ee && (w.hasSimilarLeaked || w.hasUsernameAndPasswordLeaked || Ce)
					}
				},
				te = H => {
					const se = me(),
						w = (0, e.useQueryClient)(),
						ee = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${H}`,
							queryFn: () => d(H),
							enabled: !!se.isEnabled
						}),
						Ce = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${H}`,
							queryFn: () => n(H),
							enabled: !!se.isEnabled && !!(ee == null ? void 0 : ee.data)
						}),
						Ge = (0, e.useMutation)({
							mutationFn: ({
								enabled: Oe
							}) => _(H, Oe),
							onSuccess: Oe => {
								w.setQueryData([`leaked-credentials-enabled-${H}`], Oe)
							}
						}),
						Re = (0, e.useMutation)({
							mutationFn: async Oe => await r(H, Oe),
							onSuccess: Oe => {
								var Be;
								const Ue = (Be = w.getQueryData(`leaked-credentials-detections-${H}`)) !== null && Be !== void 0 ? Be : [];
								w.setQueryData([`leaked-credentials-detections-${H}`], [...Ue, Oe])
							}
						}),
						Ke = (0, e.useMutation)({
							mutationFn: Oe => s(H, Oe),
							onSuccess: Oe => {
								var Be;
								const Ue = (Be = w.getQueryData(`leaked-credentials-detections-${H}`)) !== null && Be !== void 0 ? Be : [];
								w.setQueryData([`leaked-credentials-detections-${H}`], Ue.filter(({
									id: Ve
								}) => Ve !== Oe))
							}
						});
					return {
						entitled: se.isEnabled,
						hasEditPermissions: se.hasEditPermission,
						loading: ee.isLoading || Ce.isLoading,
						error: ee.isError || ee.isError,
						enabled: {
							data: ee.data,
							toggleEnabled: async Oe => Ge.mutateAsync({
								enabled: Oe
							})
						},
						detections: {
							data: Ce.data,
							add: Re.mutateAsync,
							delete: Ke.mutateAsync,
							loading: Re.isLoading || Ke.isLoading
						}
					}
				};
			var G = t("../react/common/selectors/zoneSelectors.ts"),
				Z = t("../react/common/utils/useQueryCache.ts"),
				x = t("../react/app/redux/index.ts");
			const J = "security-txt",
				ie = {
					securityTxt: ({
						zoneId: H
					}) => [J, H]
				},
				$ = H => (0, e.useQuery)({
					queryKey: ie.securityTxt({
						zoneId: H
					}),
					queryFn: () => f(H),
					select: se => se.result
				}),
				b = () => {
					const H = (0, x.p4)(G.Cu),
						{
							invalidate: se
						} = (0, Z.o)(ie.securityTxt({
							zoneId: H
						}));
					return (0, e.useMutation)({
						mutationFn: () => c(H),
						onSuccess: async () => {
							await se(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				k = H => {
					const {
						invalidate: se
					} = (0, Z.o)(ie.securityTxt({
						zoneId: H
					}));
					return (0, e.useMutation)({
						mutationFn: w => l(H, w),
						onSuccess: async () => {
							await se(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var z = t("../../../../node_modules/lodash/isEqual.js"),
				oe = t.n(z),
				de = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function ye(H) {
				for (var se = 1; se < arguments.length; se++) {
					var w = arguments[se] != null ? Object(arguments[se]) : {},
						ee = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(w).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(w, Ce).enumerable
					})), ee.forEach(function(Ce) {
						Te(H, Ce, w[Ce])
					})
				}
				return H
			}

			function Te(H, se, w) {
				return se = Me(se), se in H ? Object.defineProperty(H, se, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : H[se] = w, H
			}

			function Me(H) {
				var se = Ne(H, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function Ne(H, se) {
				if (typeof H != "object" || H === null) return H;
				var w = H[Symbol.toPrimitive];
				if (w !== void 0) {
					var ee = w.call(H, se || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(H)
			}
			const He = H => {
					const {
						queryKey: se,
						zoneId: w
					} = (0, de.hL)(H), {
						isLoading: ee,
						isError: Ce,
						isSuccess: Ge,
						data: Re,
						refetch: Ke,
						isRefetching: Oe
					} = (0, e.useQuery)({
						queryKey: se,
						queryFn: () => de.Mi.getLabels(ye({
							zoneId: w
						}, H)),
						onSuccess: () => {
							var Be;
							const Ue = H == null || (Be = H.filters) === null || Be === void 0 ? void 0 : Be.source;
							(Ue === L.LABEL_SOURCES.MANAGED || Ue === L.LABEL_SOURCES.USER) && (0, L.Tf)({
								name: L.QJ.FILTER_USER_MANAGED_LABELS,
								product: L.Iv.SECURITY_SETTINGS,
								pageName: L.R.LABELS_LIST,
								type: Ue
							})
						}
					});
					return {
						data: Re == null ? void 0 : Re.result,
						errors: Re == null ? void 0 : Re.errors,
						paginationData: Re == null ? void 0 : Re.result_info,
						isLoading: ee,
						isError: Ce,
						isSuccess: Ge,
						refetch: Ke,
						isRefetching: Oe
					}
				},
				ke = ({
					labels: H,
					preselectedLabels: se
				}) => {
					const {
						USER: w,
						MANAGED: ee
					} = L.LABEL_SOURCES, [Ce, Ge] = (0, E.useState)({
						[w]: [],
						[ee]: []
					}), [Re, Ke] = (0, E.useState)(new Set), Oe = Re.size > 0, [Be, Ue] = (0, E.useState)(!1), Ve = fe => {
						Ke(we => {
							const Le = new Set(we);
							return Le.has(fe.name) ? Le.delete(fe.name) : Le.add(fe.name), Le
						})
					}, Je = fe => Re.has(fe.name), W = (fe, we) => {
						const Le = Je(fe) ? 1 : 0;
						return (Je(we) ? 1 : 0) - Le
					}, ae = fe => {
						Ge(we => ({
							[w]: [...fe ? fe[w] : we[w]].sort(W),
							[ee]: [...fe ? fe[ee] : we[ee]].sort(W)
						}))
					};
					return (0, E.useEffect)(() => {
						if (H && !Be) {
							if (se) {
								const fe = new Set;
								H.forEach(we => {
									se.some(Le => oe()(Le, we)) && fe.add(we.name)
								}), Ke(fe)
							}
							Ue(!0)
						}
					}, [H, se, Be]), (0, E.useEffect)(() => {
						if (H && Be) {
							const fe = H.reduce((Le, xe) => (xe.source === w ? Le[w].push(xe) : xe.source === ee && Le[ee].push(xe), Le), {
									[w]: [],
									[ee]: []
								}),
								we = {
									[w]: fe[w].sort(W),
									[ee]: fe[ee].sort(W)
								};
							Ge(we)
						}
					}, [w, ee, H, Be]), {
						userAndManagedLabels: Ce,
						setUserAndManagedLabels: Ge,
						toggleSelectedLabel: Ve,
						isLabelSelected: Je,
						sortLabelsBySelectedStatus: ae,
						hasLabelsSelected: Oe
					}
				};
			var ze = t("../react/pages/security/settings/resources/selectors.ts");
			const Ze = (H = "") => {
				const se = (0, x.p4)(ze.Xs),
					w = se && (H == null ? void 0 : H.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: se,
					hasDeprecatedParameter: w
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
				FQ: function() {
					return d.FQ
				},
				Iv: function() {
					return _.Iv
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
					return _.QJ
				},
				R: function() {
					return _.R
				},
				Tf: function() {
					return _.Tf
				},
				WR: function() {
					return d.WR
				},
				Xs: function() {
					return _.Xs
				},
				Xu: function() {
					return d.Xu
				},
				ZF: function() {
					return _.ZF
				},
				bE: function() {
					return d.bE
				},
				bH: function() {
					return _.bH
				},
				dC: function() {
					return _.dC
				},
				eC: function() {
					return _.eC
				},
				kU: function() {
					return d.kU
				},
				m8: function() {
					return _.m8
				},
				pf: function() {
					return d.pf
				},
				ui: function() {
					return _.ui
				},
				vE: function() {
					return d.vE
				},
				vc: function() {
					return _.vc
				},
				zF: function() {
					return _.zF
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
				_ = t("../react/pages/security/settings/resources/index.ts");
			const n = p().lazy(() => Promise.all([t.e(37800), t.e(39074), t.e(2480), t.e(10008), t.e(73598), t.e(94012), t.e(24074), t.e(72019), t.e(73267), t.e(4e4), t.e(3391), t.e(68204), t.e(2515), t.e(60091), t.e(3538), t.e(77216), t.e(39760), t.e(60911), t.e(94923), t.e(60734), t.e(40912), t.e(71449), t.e(9147), t.e(44753), t.e(20263), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
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
			v.ZP = r
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				Mi: function() {
					return h
				},
				hL: function() {
					return L
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
			var _ = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function s(y, C) {
				if (y == null) return {};
				var N = l(y, C),
					A, M;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(y);
					for (M = 0; M < T.length; M++) A = T[M], !(C.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(y, A) || (N[A] = y[A]))
				}
				return N
			}

			function l(y, C) {
				if (y == null) return {};
				var N = {},
					A = Object.keys(y),
					M, T;
				for (T = 0; T < A.length; T++) M = A[T], !(C.indexOf(M) >= 0) && (N[M] = y[M]);
				return N
			}

			function c(y) {
				for (var C = 1; C < arguments.length; C++) {
					var N = arguments[C] != null ? Object(arguments[C]) : {},
						A = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(N).filter(function(M) {
						return Object.getOwnPropertyDescriptor(N, M).enumerable
					})), A.forEach(function(M) {
						f(y, M, N[M])
					})
				}
				return y
			}

			function f(y, C, N) {
				return C = E(C), C in y ? Object.defineProperty(y, C, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[C] = N, y
			}

			function E(y) {
				var C = O(y, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function O(y, C) {
				if (typeof y != "object" || y === null) return y;
				var N = y[Symbol.toPrimitive];
				if (N !== void 0) {
					var A = N.call(y, C || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(y)
			}
			const L = y => {
					const C = (0, e.p4)(o.Cu),
						N = (0, u.F)(),
						A = R.labels(c({
							accountId: N,
							zoneId: C
						}, y ? c({}, y) : {})),
						M = (0, a.o)(A);
					return c({
						zoneId: C,
						queryKey: A,
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
					getLabels: async y => {
						var C, N, A, M;
						let {
							zoneId: T,
							hideErrorAlert: I = !0
						} = y, S = s(y, ["zoneId", "hideErrorAlert"]);
						return (await m.get(d.labels.toUrl({
							zoneId: T
						}), {
							parameters: {
								page: S == null ? void 0 : S.page,
								per_page: S == null ? void 0 : S.per_page,
								with_mapped_resource_counts: S == null ? void 0 : S.with_mapped_resource_counts,
								filter: S == null || (C = S.filters) === null || C === void 0 ? void 0 : C.search,
								source: (0, n.sQ)(S == null || (N = S.filters) === null || N === void 0 ? void 0 : N.source),
								order: S == null || (A = S.sort) === null || A === void 0 ? void 0 : A.id,
								direction: (S == null ? void 0 : S.sort) ? (S == null || (M = S.sort) === null || M === void 0 ? void 0 : M.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: I
						})).body
					},
					getLabel: async y => {
						let {
							zoneId: C,
							labelName: N,
							hideErrorAlert: A = !0
						} = y, M = s(y, ["zoneId", "labelName", "hideErrorAlert"]);
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
							hideErrorAlert: A
						})).body
					},
					editLabel: async ({
						zoneId: y,
						label: C,
						replace: N
					}) => {
						const {
							name: A
						} = C, M = s(C, ["name"]);
						return (await (N ? m.put : m.patch)(d.userLabel.toUrl({
							zoneId: y,
							labelName: C.name
						}), {
							body: M
						})).body
					},
					deleteLabel: async ({
						zoneId: y,
						labelName: C
					}) => (await m.del(d.userLabel.toUrl({
						zoneId: y,
						labelName: C
					}))).body,
					createLabel: async y => {
						let {
							zoneId: C
						} = y, N = s(y, ["zoneId"]);
						const {
							product: A
						} = N, M = s(N, ["product"]);
						return (await m.post(d.userLabels.toUrl({
							zoneId: C
						}), {
							body: [M]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: y,
						user: C,
						managed: N,
						operationIds: A,
						replace: M
					}) => (await (M ? m.put : m.post)(d.operationsLinkedToLabels.toUrl({
						zoneId: y
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
									operation_ids: A
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: y,
						labelName: C,
						operationIds: N
					}) => {
						const A = (0, n.mm)(C) ? d.managedLabelOperations.toUrl({
							zoneId: y,
							labelName: C
						}) : d.userLabelOperations.toUrl({
							zoneId: y,
							labelName: C
						});
						return (await m.put(A, {
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
					labels: y => {
						let {
							accountId: C,
							zoneId: N
						} = y, A = s(y, ["accountId", "zoneId"]);
						return [p.IQ.LABELS, C, N, ...(0, _.isEmpty)(A) ? [] : [A]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				DG: function() {
					return E
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
					return y
				},
				aW: function() {
					return O
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
					return L
				},
				om: function() {
					return _
				},
				w: function() {
					return o
				},
				zF: function() {
					return A
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
				_ = function(T) {
					return T.NAME = "name", T.MAPPED_RESOURCES = "mapped_resources.operations", T.SOURCE = "source", T.APPLY = "apply", T
				}({});
			const s = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: _.NAME,
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
				E = /^[A-Za-z0-9-]+$/,
				O = /^cf-/;
			let L = function(T) {
				return T.NAME = "name", T.DESCRIPTION = "description", T
			}({});
			const h = "all";
			let R = function(T) {
				return T.METHOD = "method", T.HOSTNAME = "hostname", T
			}({});
			const y = {
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
				M = "exposed-credentials-module"
		},
		"../react/pages/security/settings/resources/index.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return L.Xs
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
					return L.bH
				},
				Mb: function() {
					return a.Mb
				},
				ui: function() {
					return L.ui
				},
				P3: function() {
					return L.P3
				},
				Ri: function() {
					return L.Ri
				},
				cN: function() {
					return L.cN
				},
				m8: function() {
					return O
				},
				Tf: function() {
					return E
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
					var y = arguments[R] != null ? Object(arguments[R]) : {},
						C = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(y).filter(function(N) {
						return Object.getOwnPropertyDescriptor(y, N).enumerable
					})), C.forEach(function(N) {
						i(h, N, y[N])
					})
				}
				return h
			}

			function i(h, R, y) {
				return R = d(R), R in h ? Object.defineProperty(h, R, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[R] = y, h
			}

			function d(h) {
				var R = _(h, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function _(h, R) {
				if (typeof h != "object" || h === null) return h;
				var y = h[Symbol.toPrimitive];
				if (y !== void 0) {
					var C = y.call(h, R || "default");
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
			const E = ({
					name: h,
					product: R,
					category: y = "user journey",
					pageName: C,
					from: N,
					write_strategy: A,
					type: M,
					target: T
				}) => {
					u().sendEvent(h, m({
						category: y,
						pageName: C,
						product: R
					}, N ? {
						from: N
					} : {}, A ? {
						write_strategy: A
					} : {}, M ? {
						type: M
					} : {}, T ? {
						target: T
					} : {}))
				},
				O = () => {
					var h;
					return (h = Object.values(f)) === null || h === void 0 ? void 0 : h.flat()
				};
			var L = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				P3: function() {
					return d
				},
				Ri: function() {
					return _
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
				_ = s => (0, a.rV)(s, "rulesets.leaked_credential_checks_allowed"),
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
		"../react/pages/security/settings/resources/types.ts": function(F, v, t) {
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
		"../react/pages/security/settings/resources/utils.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return O
				},
				Wv: function() {
					return c
				},
				mm: function() {
					return h
				},
				sQ: function() {
					return L
				},
				vc: function() {
					return E
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				a = t("../react/pages/security/settings/routes.tsx"),
				p = t("../react/pages/security/settings/resources/constants.ts"),
				u = t("../react/pages/security/settings/resources/types.ts"),
				m = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function i(y) {
				for (var C = 1; C < arguments.length; C++) {
					var N = arguments[C] != null ? Object(arguments[C]) : {},
						A = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(N).filter(function(M) {
						return Object.getOwnPropertyDescriptor(N, M).enumerable
					})), A.forEach(function(M) {
						d(y, M, N[M])
					})
				}
				return y
			}

			function d(y, C, N) {
				return C = _(C), C in y ? Object.defineProperty(y, C, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[C] = N, y
			}

			function _(y) {
				var C = n(y, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function n(y, C) {
				if (typeof y != "object" || y === null) return y;
				var N = y[Symbol.toPrimitive];
				if (N !== void 0) {
					var A = N.call(y, C || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(y)
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
				l = y => e.Ry({
					[u.T.CONTACT]: e.IX().of(e.Z_().required(y("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, y("security_txt.fields.contact.format_error"))),
					[u.T.EXPIRES]: e.hT().required(y("common.required")).min(new Date, y("security_txt.fields.expires.min_error"))
				}),
				c = y => {
					const C = {};
					for (const N in y) C[N] = Array.isArray(y[N]) ? y[N].filter(A => !!A) : y[N];
					return i({}, C, {
						expires: (0, m.DZ)(y.expires)
					})
				},
				f = (y, C, N) => {
					const A = [...new Set([u.T.CONTACT, u.T.EXPIRES, ...Object.values(u.T)])],
						M = Object.entries(y).sort(([T], [I]) => A.indexOf(T) - A.indexOf(I)).filter(([T, I]) => !!s[T] && !!I && (!Array.isArray(I) || !!I.length)).map(([T, I]) => Array.isArray(I) ? I.map(S => `${N(s[T].label)}: ${S}`).join(`
`) : `${N(s[T].label)}: ${I}`).join(`
`);
					(0, o.yH)(`Cloudflare_${C}_security.txt`, M, "text/plain;charset=utf-8")
				};
			let E = function(y) {
				return y.CREATED = "created security.txt", y.ENABLED = "enabled security.txt", y.DISABLED = "disabled security.txt", y.DOWNLOADED = "downloaded security.txt", y.UPDATED = "updated security.txt", y.DELETED = "deleted security.txt", y
			}({});
			const O = y => (y == null ? void 0 : y.source) === p.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (y == null ? void 0 : y.source) === p.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				L = y => y === p.W3 ? void 0 : y,
				h = y => p.aW.test(y),
				R = y => {
					switch (y) {
						case p.w.CONTENT_SCANNING:
							return a.Z.CONTENT_SCANNING;
						case p.w.EXPOSED_CREDENTIALS:
							return a.Z.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				Sb: function() {
					return _
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
				_ = ({
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
		"../react/pages/shared-config/sparrowEvents.tsx": function(F, v, t) {
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
		"../react/pages/spectrum/tracking.tsx": function(F, v, t) {
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
		"../react/pages/stream/actionTypes.ts": function(F, v, t) {
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
		"../react/pages/stream/reducer.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
				_ = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(r = _, s) {
				switch (s.type) {
					case o.U.ResetState:
						return _;
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
		"../react/pages/stream/selectors.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return E
				},
				pW: function() {
					return m
				},
				xW: function() {
					return _
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/pages/stream/reducer.ts");
			const p = O => O[a.nY],
				u = O => p(O).videos,
				m = O => p(O).videoUpdateStatuses,
				i = O => p(O).loading,
				d = O => p(O).requestTimestamp,
				_ = O => p(O).storageLoading,
				n = O => p(O).storage,
				r = O => (0, o.BF)(O, "stream.enabled") || (0, e.bC)(O),
				s = O => (0, e.Le)(O, "stream", "connect"),
				l = O => (0, e.Le)(O, "stream", "stream-4371"),
				c = O => (0, e.Le)(O, "stream", "public-details-enabled"),
				f = O => !!(0, e.Le)(O, "stream", "llhls"),
				E = O => {
					const L = n(O);
					return L !== void 0 && L.limitMins > L.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(F, v, t) {
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
		"../react/pages/traffic/argo/tracking.ts": function(F, v, t) {
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
		"../react/pages/traffic/load-balancing/tracking.ts": function(F, v, t) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/turnstile/tracking.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				N3: function() {
					return d
				},
				P: function() {
					return n
				},
				Xh: function() {
					return _
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
			const _ = ({
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
		"../react/pages/welcome/routes.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/zone-versioning/selectors.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return O
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
					return y
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

			function m(I) {
				for (var S = 1; S < arguments.length; S++) {
					var K = arguments[S] != null ? Object(arguments[S]) : {},
						q = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(K).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(K, ne).enumerable
					})), q.forEach(function(ne) {
						i(I, ne, K[ne])
					})
				}
				return I
			}

			function i(I, S, K) {
				return S = d(S), S in I ? Object.defineProperty(I, S, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[S] = K, I
			}

			function d(I) {
				var S = _(I, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function _(I, S) {
				if (typeof I != "object" || I === null) return I;
				var K = I[Symbol.toPrimitive];
				if (K !== void 0) {
					var q = K.call(I, S || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(I)
			}
			const n = I => (0, a.nA)(I) ? (0, u.p1)(I) && (0, p.$n)(I, "zone_versioning", "versioning") : !1,
				r = I => I.zoneVersioning.zoneApplications,
				s = (0, e.P1)("zoneApplications", r),
				l = I => I.zoneVersioning.zoneVersions,
				c = (0, e.P1)("zoneVersions", l),
				f = (0, o.P1)(c, I => {
					if (I) return I.filter(S => S.status == "V")
				}),
				E = I => I.zoneVersioning.environments,
				O = I => I.zoneVersioning.environments.isRequesting,
				L = (0, e.P1)("environments", E),
				h = (0, o.P1)(s, I => {
					if (I) {
						if (I.length === 1) return I[0];
						I.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${I.length}`))
					}
					return null
				}),
				R = (0, o.P1)(L, I => I ? I.environments : []),
				y = I => {
					var S;
					return (S = I.zoneVersioning) === null || S === void 0 ? void 0 : S.zoneVersionSelector
				},
				C = (0, o.P1)(y, c, (I, S) => {
					if (!(I == null ? void 0 : I.isVersion) || !S) return null;
					const K = S.find(q => {
						if (q.version === I.selectedVersion && q.locked) return !0
					});
					return K ? m({}, K, {
						isLocked: !0
					}) : null
				}),
				N = (0, o.P1)(c, R, (I, S) => !S || !I ? [] : I.map(K => {
					const q = [];
					for (const ne in S) S[ne].version === K.version && q.push(S[ne]);
					return m({}, K, {
						environments: q
					})
				})),
				A = I => I.zoneVersioning.WAFMigrationStatus,
				M = (0, e.P1)("WAFMigrationStatus", A),
				T = I => I.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				$2: function() {
					return N
				},
				CI: function() {
					return y
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
					return _
				},
				d4: function() {
					return l
				},
				fE: function() {
					return d
				},
				im: function() {
					return O
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

			function e(A) {
				for (var M = 1; M < arguments.length; M++) {
					var T = arguments[M] != null ? Object(arguments[M]) : {},
						I = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(T).filter(function(S) {
						return Object.getOwnPropertyDescriptor(T, S).enumerable
					})), I.forEach(function(S) {
						o(A, S, T[S])
					})
				}
				return A
			}

			function o(A, M, T) {
				return M = a(M), M in A ? Object.defineProperty(A, M, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[M] = T, A
			}

			function a(A) {
				var M = p(A, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function p(A, M) {
				if (typeof A != "object" || A === null) return A;
				var T = A[Symbol.toPrimitive];
				if (T !== void 0) {
					var I = T.call(A, M || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(A)
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
				_ = {
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
					selectTemplate: "select workers template",
					templateStubWorkerCreated: "template stub worker created",
					templateStubWorkerCreationFailed: "template stub worker creation failed",
					templateRepositoryCreated: "template repository created",
					templateRepositoryCreationFailed: "template repository creation failed",
					copyTemplateC3Command: "template copy c3 command",
					templateDeployClick: "template deploy click"
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
				E = "workers.dev",
				O = "YYYY-MM-DD HH:mm:SS ZZ",
				L = "active",
				h = ["bundled", "unbound", "standard"],
				R = null,
				y = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let C = function(A) {
				return A[A.NONE = 0] = "NONE", A[A.MISS = 1] = "MISS", A[A.EXPIRED = 2] = "EXPIRED", A[A.UPDATING = 3] = "UPDATING", A[A.STALE = 4] = "STALE", A[A.HIT = 5] = "HIT", A[A.IGNORED = 6] = "IGNORED", A[A.BYPASS = 7] = "BYPASS", A[A.REVALIDATED = 8] = "REVALIDATED", A[A.DYNAMIC = 9] = "DYNAMIC", A[A.STREAM_HIT = 10] = "STREAM_HIT", A[A.DEFERRED = 11] = "DEFERRED", A
			}({});
			const N = [C.HIT, C.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
				a = (d, _, n) => `${n?`${n}.`:""}${d}.${o(_)}`,
				p = (d, _, n) => `https://${a(d,_,n)}`,
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
			})).body, p = async (...i) => (await e.get(...i)).body, u = i => async (d, _) => {
				const n = await fetch(d, _).then(r => r.json());
				return i.assertDecode(n)
			}, m = async (...i) => (await p(...i)).result;
			v.ZP = {
				fetcher: i => Array.isArray(i) ? m(...i) : m(i)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(F, v) {
				v()
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

					function p(E) {
						return !!(E && E !== document && E.nodeName !== "HTML" && E.nodeName !== "BODY" && "classList" in E && "contains" in E.classList)
					}

					function u(E) {
						var O = E.type,
							L = E.tagName;
						return !!(L == "INPUT" && a[O] && !E.readOnly || L == "TEXTAREA" && !E.readOnly || E.isContentEditable)
					}

					function m(E) {
						E.getAttribute("is-focus-visible") !== "" && E.setAttribute("is-focus-visible", "")
					}

					function i(E) {
						E.getAttribute("is-focus-visible") === "" && E.removeAttribute("is-focus-visible")
					}

					function d(E) {
						p(document.activeElement) && m(document.activeElement), t = !0
					}

					function _(E) {
						t = !1
					}

					function n(E) {
						!p(E.target) || (t || u(E.target)) && m(E.target)
					}

					function r(E) {
						!p(E.target) || E.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), i(E.target))
					}

					function s(E) {
						document.visibilityState == "hidden" && (e && (t = !0), l())
					}

					function l() {
						document.addEventListener("mousemove", f), document.addEventListener("mousedown", f), document.addEventListener("mouseup", f), document.addEventListener("pointermove", f), document.addEventListener("pointerdown", f), document.addEventListener("pointerup", f), document.addEventListener("touchmove", f), document.addEventListener("touchstart", f), document.addEventListener("touchend", f)
					}

					function c() {
						document.removeEventListener("mousemove", f), document.removeEventListener("mousedown", f), document.removeEventListener("mouseup", f), document.removeEventListener("pointermove", f), document.removeEventListener("pointerdown", f), document.removeEventListener("pointerup", f), document.removeEventListener("touchmove", f), document.removeEventListener("touchstart", f), document.removeEventListener("touchend", f)
					}

					function f(E) {
						E.target.nodeName.toLowerCase() !== "html" && (t = !1, c())
					}
					document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", _, !0), document.addEventListener("pointerdown", _, !0), document.addEventListener("touchstart", _, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", s, !0), l(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function v(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && v(F)
			})
		},
		"../react/utils/bootstrap.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/utils/cookiePreferences.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
				_ = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					return y
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
				_ = "en_US",
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
			const c = M => (0, p.Yd)(a.Q).find(T => a.Q[T] === M) || _,
				f = [],
				E = [],
				O = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				L = {
					test: [...O, ...E, ...f],
					development: [...O, ...E, ...f],
					staging: [...O, ...E, ...f],
					production: [...O, ...E]
				},
				h = M => {
					const T = a.Q[M];
					return L.production.includes(T)
				},
				R = () => Object.keys(a.Q).filter(M => h(M)),
				y = M => {
					const T = a.Q[M];
					return E.includes(T)
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
				A = o().locale();
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
			}), o().locale(A)
		},
		"../react/utils/translator.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
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

			function i(f, ...E) {
				return m.t(f, ...E)
			}
			const d = m;

			function _(f, ...E) {
				return markdown(i(f, E))
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

			function r(f, E) {
				return f in E ? E[f] : void 0
			}
			const s = a.Trans,
				l = a.I18n,
				c = a.useI18n
		},
		"../react/utils/url.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				Ct: function() {
					return y
				},
				Fl: function() {
					return J
				},
				KT: function() {
					return $
				},
				NF: function() {
					return E
				},
				Nw: function() {
					return h
				},
				Pd: function() {
					return L
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
					return K
				},
				hW: function() {
					return ne
				},
				pu: function() {
					return ie
				},
				qR: function() {
					return S
				},
				td: function() {
					return O
				},
				uW: function() {
					return Q
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

			function _(b) {
				for (var k = 1; k < arguments.length; k++) {
					var z = arguments[k] != null ? Object(arguments[k]) : {},
						oe = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(z).filter(function(de) {
						return Object.getOwnPropertyDescriptor(z, de).enumerable
					})), oe.forEach(function(de) {
						n(b, de, z[de])
					})
				}
				return b
			}

			function n(b, k, z) {
				return k = r(k), k in b ? Object.defineProperty(b, k, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[k] = z, b
			}

			function r(b) {
				var k = s(b, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function s(b, k) {
				if (typeof b != "object" || b === null) return b;
				var z = b[Symbol.toPrimitive];
				if (z !== void 0) {
					var oe = z.call(b, k || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(b)
			}
			const {
				endsWithSlash: l
			} = a.default, c = (b, k) => {
				const z = b.replace(l, "").split("/");
				return z.slice(0, 2).concat([k]).concat(z.slice(3)).join("/")
			}, f = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), E = b => `/${b.replace(l,"").replace(/^\//,"")}`, O = b => h("add-site", b), L = b => h("billing", b), h = (b, k) => k ? `/${k}${b?`/${b}`:""}` : `/?to=/:account/${b}`, R = () => {
				const b = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return b ? b[1] : null
			}, y = (b, k) => o().stringify(_({}, o().parse(b), k)), C = (b = "") => b.toString().replace(/([\/]{1,})$/, ""), N = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], A = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, M = /^\/(\w{32,})(\/[^.]*)?/, T = b => N.includes(b), I = b => !T(b), S = b => !T(b) && M.test(b), K = b => !T(b) && A.test(b), q = b => A.exec(b), ne = b => {
				if (K(b)) return b.split("/").filter(k => k.length > 0)[1]
			}, re = b => M.exec(b), Q = b => {
				if (S(b)) {
					const k = re(b);
					if (k) return k[1]
				}
			}, V = b => S(b) && b.split("/")[2] === "register-domain", me = b => V(b) ? b.split("/") : null, te = b => {
				if (K(b)) {
					const [, , , k, z, oe, de, ye] = b.split("/");
					return k === "traffic" && z === "load-balancing" && oe === "pools" && de === "edit" && ye
				}
			}, G = b => {
				const k = me(b);
				if (k) return k[3]
			}, Z = (b, k) => {
				var z, oe;
				return ((z = b.pattern.match(/\:/g)) !== null && z !== void 0 ? z : []).length - ((oe = k.pattern.match(/\:/g)) !== null && oe !== void 0 ? oe : []).length
			}, x = [...Object.values(p.C), ...Object.values(u._j), ...Object.values(m._j), ...Object.values(i._j), ...Object.values(d._)].sort(Z);

			function J(b) {
				if (!I(b)) return b;
				for (const ye of x)
					if (ye.expression.test(b)) return ye.pattern;
				const k = me(b);
				if (k) {
					const [, , ye, , ...Te] = k;
					return `/:accountId/${ye}/:domainName/${Te.join("/")}`
				}
				if (te(b)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const oe = q(b);
				if (oe) {
					const [, , , , ye] = oe;
					return `/:accountId/:zoneName${ye||""}`
				}
				const de = re(b);
				if (de) {
					const [, , ye] = de;
					return `/:accountId${ye||""}`
				}
				return b
			}

			function ie(b) {
				if (!!b) try {
					const z = b.split(".").pop();
					if (z && z.length > 0) return z
				} catch {}
			}

			function $(b, k = document.location.href) {
				try {
					const z = new URL(b),
						oe = new URL(k);
					if (z.origin === oe.origin) return `${z.pathname}${z.search}${z.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				r: function() {
					return d
				},
				y: function() {
					return _
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
				_ = () => {
					const n = !!(0, p.Z)("domain-connect-redirect-gate"),
						r = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						!n || i.test(r.pathname) && a.Z.set(d, r, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(F, v, t) {
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
		"../react/utils/zoneLevelAccess.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
				var m, i, d, _, n, r;
				return (m = window) === null || m === void 0 || (i = m.bootstrap) === null || i === void 0 || (d = i.data) === null || d === void 0 || (_ = d.user) === null || _ === void 0 || (n = _.betas) === null || n === void 0 || (r = n.some) === null || r === void 0 ? void 0 : r.call(n, s => s === "zone_level_access_beta")
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
		"../utils/getDashVersion.ts": function(F, v, t) {
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
					var p, u;
					return (p = window) === null || p === void 0 || (u = p.build) === null || u === void 0 ? void 0 : u.dashVersion
				},
				a = () => {
					var p;
					return ((0, e.parse)((p = document) === null || p === void 0 ? void 0 : p.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				Wi: function() {
					return Ae
				},
				IM: function() {
					return Ee
				},
				yV: function() {
					return j
				},
				Ug: function() {
					return ft
				},
				v_: function() {
					return ue
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
				_ = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../../../../node_modules/lodash-es/memoize.js"),
				s = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				l = t("../utils/getDashVersion.ts"),
				c = t("../react/common/selectors/accountSelectors.ts"),
				f = t("../react/common/selectors/entitlementsSelectors.ts");

			function E(ce) {
				for (var pe = 1; pe < arguments.length; pe++) {
					var ve = arguments[pe] != null ? Object(arguments[pe]) : {},
						B = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(ve).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(ve, Y).enumerable
					})), B.forEach(function(Y) {
						O(ce, Y, ve[Y])
					})
				}
				return ce
			}

			function O(ce, pe, ve) {
				return pe = L(pe), pe in ce ? Object.defineProperty(ce, pe, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[pe] = ve, ce
			}

			function L(ce) {
				var pe = h(ce, "string");
				return typeof pe == "symbol" ? pe : String(pe)
			}

			function h(ce, pe) {
				if (typeof ce != "object" || ce === null) return ce;
				var ve = ce[Symbol.toPrimitive];
				if (ve !== void 0) {
					var B = ve.call(ce, pe || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (pe === "string" ? String : Number)(ce)
			}
			const R = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				y = (0, r.Z)(ce => {
					try {
						return R.assertDecode((0, i.parse)(ce))
					} catch (pe) {
						return console.error(pe), {}
					}
				}),
				C = ce => (pe, ve, B) => {
					try {
						const We = window.location.pathname,
							Xe = (0, p.bh)().getState(),
							dt = y(document.cookie),
							Et = E({
								page: (0, d.Fl)(B.page || window.location.pathname),
								dashVersion: (0, l.t)()
							}, dt);
						if (pe === "identify") {
							var Y, he;
							const pt = {
								gates: (0, s.T2)(Xe) || {},
								country: (Y = t.g) === null || Y === void 0 || (he = Y.bootstrap) === null || he === void 0 ? void 0 : he.ip_country
							};
							return ce(pe, ve, E({}, Et, pt, B))
						} else {
							const pt = {
								accountId: (0, d.uW)(We),
								zoneName: (0, d.hW)(We),
								domainName: (0, d.Uh)(We)
							};
							if ((0, d.qR)(We)) {
								var Pe;
								const et = (0, c.D0)(Xe);
								pt.isEntAccount = !!(et == null || (Pe = et.meta) === null || Pe === void 0 ? void 0 : Pe.has_enterprise_zones) || (0, f.p1)(Xe)
							}
							if ((0, d.el)(We)) {
								var Fe;
								const et = (0, _.nA)(Xe);
								pt.zoneId = et == null ? void 0 : et.id, pt.plan = et == null || (Fe = et.plan) === null || Fe === void 0 ? void 0 : Fe.legacy_id
							}
							return ce(pe, ve, E({}, Et, pt, B))
						}
					} catch (We) {
						return console.error(We), ce(pe, ve, B)
					}
				},
				N = ce => async (pe, ve, B) => {
					try {
						return await ce(pe, ve, B)
					} catch (Y) {
						if (console.error(Y), !ue()) throw Y;
						return {
							status: "rejected",
							reason: Y
						}
					}
				};
			var A = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				M = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				T = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				I = t("../react/common/middleware/sparrow/errors.ts"),
				S = t("../react/pages/caching/tracking.tsx"),
				K = t("../react/pages/dns/dns-records/tracking.ts"),
				q = t("../react/pages/home/alerts/tracking.ts"),
				ne = t("../react/pages/home/configurations/lists/tracking.ts"),
				re = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				Q = t("../react/pages/home/domain-registration/tracking.ts"),
				V = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				me = t("../react/pages/hyperdrive/tracking.ts"),
				te = t("../react/pages/magic/network-monitoring/constants.ts"),
				G = t("../react/pages/magic/overview/tracking.ts"),
				Z = t("../react/pages/magic/packet-captures/constants.ts"),
				x = t("../react/pages/page-rules/tracking.ts"),
				J = t("../react/pages/pages/constants.ts"),
				ie = t("../react/pages/pipelines/tracking.ts"),
				$ = t("../react/pages/security-center/BlockedContent/constants.ts"),
				b = t("../react/pages/security-center/tracking.ts"),
				k = t("../react/pages/security/api-shield/tracking.ts"),
				z = t("../react/pages/security/bots/tracking.ts"),
				oe = t("../react/pages/security/resources/constants.tsx"),
				de = t("../react/pages/security/page-shield/resources/index.ts"),
				ye = t("../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts"),
				Te = t("../react/pages/security/settings/index.tsx"),
				Me = t("../react/pages/shared-config/sparrowEvents.tsx"),
				Ne = t("../react/pages/spectrum/tracking.tsx"),
				He = t("../react/pages/traffic/argo/tracking.ts"),
				ke = t("../react/pages/traffic/load-balancing/tracking.ts"),
				ze = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Ze = t("../react/pages/turnstile/tracking.ts"),
				H = t("../react/pages/zoneless-workers/constants.ts"),
				se = t("../react/app/components/AccountHome/tracking.ts"),
				w = t("../react/pages/security/waf/managed-rules/resources/tracking.ts");
			const Ce = ((ce, pe, ...ve) => n.eg.union([n.eg.literal(ce), n.eg.literal(pe), ...ve.map(B => n.eg.literal(B))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", se.gX.SPARROW_PROJECTS_TABLE_CLICK, se.gX.SPARROW_EMPTY_STATE_CTA_CLICK, se.gX.SPARROW_PRODUCT_CARD_CLICK, se.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", H.QV.clickedDownloadAnalytics, H.QV.clickedPrintAnalytics, H.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", H.QV.addWCITriggerToExistingWorker, H.QV.updateWCITrigger, H.QV.deleteWCITrigger, H.QV.addWCITriggerToNewWorker, H.QV.createWCIBuildForNewWorker, H.QV.completedWCIBuildForNewWorker, H.QV.changedDefaultConfigurations, J.QV.toggledPagesSmartPlacement, J.QV.downloadDemoProject, H.QV.clickCreateWorkerFromRepoNextStep, H.QV.clickCreateWorkerFromRepoPreviousStep, H.QV.clickCreateNewSCMConnection, H.QV.redirectFromSCMOAuth, H.QV.clickSubmitError, H.QV.selectTemplate, H.QV.templateStubWorkerCreated, H.QV.templateStubWorkerCreationFailed, H.QV.templateRepositoryCreated, H.QV.templateRepositoryCreationFailed, H.QV.copyTemplateC3Command, H.QV.templateDeployClick, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", z.N3.INITIAL_FETCH_SCORES, z.N3.FETCH_CONFIGURATION, z.N3.INITIAL_FETCH_TIME_SERIES, z.N3.INITIAL_FETCH_ATTRIBUTES, z.N3.UPDATE_SETTINGS, z.N3.DELETE_RULE, z.N3.UPDATE_RULE, z.N3.FETCH_RULES, z.N3.CONFIGURE_BOT_MANAGEMENT, z.N3.WAF_RULES_REDIRECT, V.F.TOGGLE_TCP_PROTECTION, V.F.GET_TCP_PROTECTION_PREFIXES, V.F.CREATE_TCP_PROTECTION_PREFIXES, V.F.CREATE_TCP_PROTECTION_PREFIX, V.F.UPDATE_TCP_PROTECTION_PREFIX, V.F.DELETE_TCP_PROTECTION_PREFIX, V.F.DELETE_TCP_PROTECTION_PREFIXES, V.F.GET_TCP_PROTECTION_ALLOWLIST, V.F.CREATE_TCP_PROTECTION_ALLOWLIST, V.F.UPDATE_TCP_PROTECTION_ALLOWLIST, V.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, V.F.DELETE_TCP_PROTECTION_ALLOWLIST, V.F.GET_SYN_PROTECTION_RULES, V.F.GET_SYN_PROTECTION_RULE, V.F.CREATE_SYN_PROTECTION_RULE, V.F.UPDATE_SYN_PROTECTION_RULE, V.F.DELETE_SYN_PROTECTION_RULE, V.F.GET_TCP_FLOW_PROTECTION_RULES, V.F.GET_TCP_FLOW_PROTECTION_RULE, V.F.CREATE_TCP_FLOW_PROTECTION_RULE, V.F.UPDATE_TCP_FLOW_PROTECTION_RULE, V.F.DELETE_TCP_FLOW_PROTECTION_RULE, V.F.GET_SYN_PROTECTION_FILTERS, V.F.GET_SYN_PROTECTION_FILTER, V.F.CREATE_SYN_PROTECTION_FILTER, V.F.UPDATE_SYN_PROTECTION_FILTER, V.F.DELETE_SYN_PROTECTION_FILTER, V.F.GET_TCP_FLOW_PROTECTION_FILTERS, V.F.GET_TCP_FLOW_PROTECTION_FILTER, V.F.CREATE_TCP_FLOW_PROTECTION_FILTER, V.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, V.F.DELETE_TCP_FLOW_PROTECTION_FILTER, V.F.GET_DNS_PROTECTION_RULES, V.F.GET_DNS_PROTECTION_RULE, V.F.CREATE_DNS_PROTECTION_RULE, V.F.UPDATE_DNS_PROTECTION_RULE, V.F.DELETE_DNS_PROTECTION_RULE, de.FV.MANAGE_PAGE_SHIELD_POLICY, de.FV.CONFIGURE_PAGE_SHIELD, de.FV.VIEW_DETECTED_CONNECTIONS, de.FV.VIEW_DETECTED_SCRIPTS, de.FV.VIEW_PAGE_SHIELD_POLICIES, de.FV.VIEW_PAGE_SHIELD_SETTINGS, de.FV.OPEN_MUTABLE_VERSION_TOOLTIP, de.FV.SHOW_MUTABLE_VERSION_TOOLTIP, ne.y.CREATE_LIST, ne.y.DELETE_LIST, ne.y.ADD_LIST_ITEM, ne.y.DELETE_LIST_ITEM, me.KO.PURCHASE_WORKERS_PAID, me.KO.LIST_CONFIGS, me.KO.CREATE_HYPERDRIVE_CONFIG, me.KO.VIEW_CONFIG_DETAILS, me.KO.UPDATE_CACHING_SETTINGS, me.KO.DELETE_HYPERDRIVE_CONFIG, me.KO.CLICK_HYPERDRIVE_DOCUMENTATION, me.KO.CLICK_GET_STARTED_GUIDE, me.KO.CLICK_CONNECTIVITY_GUIDES, me.KO.CLICK_QUICK_LINK, Ne.N.CNAME, Ne.N.IP_ADDRESS, Ne.N.LB, Ne.N.UPDATE_CNAME, Ne.N.UPDATE_IP_ADDRESS, Ne.N.UPDATE_LB, Ne.N.DISABLE, S.N.TIERED_CACHE, S.N.CACHE_PURGE, S.N.CACHE_ANALYTICS, ...(0, Ze.P)(), ...(0, T.x4)(), ...(0, Te.m8)(), ze.N.CREATE, ze.N.EVENTS, ze.N.ANALYTICS, ze.N.UPDATE, ze.N.GENERATE_PREVIEW, b.R.INITIATE_URL_SCAN, b.R.LOAD_SCAN_INFO, b.v.EXPAND_INSIGHT_ROW, b.v.ONE_CLICK_RESOLVE_BUTTON, b.v.FOLLOW_RESOLVE_URL, b.v.MANAGE_INSIGHT, b.v.CLICK_SCAN_NOW, b.v.CLICK_EXPORT_INSIGHTS, b.v.BULK_ARCHIVE, b.v.CLICK_DETAILS_BUTTON, k.Fj[k.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, k.Fj[k.kq.ENDPOINT_MANAGEMENT].detailedMetrics, k.Fj[k.kq.ENDPOINT_MANAGEMENT].createEndpoint, k.Fj[k.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, k.Fj[k.kq.ENDPOINT_MANAGEMENT].deployRouting, k.Fj[k.kq.ENDPOINT_MANAGEMENT].deleteRouting, k.Fj[k.kq.API_DISCOVERY].viewDiscoveredEndpoints, k.Fj[k.kq.API_DISCOVERY].saveDiscoveredEndpoint, k.Fj[k.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, k.Fj[k.kq.SCHEMA_VALIDATION].viewSchemasList, k.Fj[k.kq.SCHEMA_VALIDATION].uploadSchema, k.Fj[k.kq.SCHEMA_VALIDATION].viewSchemaAdoption, k.Fj[k.kq.SCHEMA_VALIDATION].downloadSchema, k.Fj[k.kq.SCHEMA_VALIDATION].deleteSchema, k.Fj[k.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, k.Fj[k.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, k.Fj[k.kq.SEQUENCE_ANALYTICS].viewSequencesPage, k.Fj[k.kq.JWT_VALIDATION].viewJWTRules, k.Fj[k.kq.JWT_VALIDATION].addJWTRule, k.Fj[k.kq.JWT_VALIDATION].editJWTRule, k.Fj[k.kq.JWT_VALIDATION].deleteJWTRule, k.Fj[k.kq.JWT_VALIDATION].reprioritizeJWTRule, k.Fj[k.kq.JWT_VALIDATION].viewJWTConfigs, k.Fj[k.kq.JWT_VALIDATION].addJWTConfig, k.Fj[k.kq.JWT_VALIDATION].editJWTConfig, k.Fj[k.kq.JWT_VALIDATION].deleteJWTConfig, k.Fj[k.kq.SETTINGS].redirectToFirewallRulesTemplate, k.Fj[k.kq.SETTINGS].redirectToPages, k.Fj[k.kq.SETTINGS].listSessionIdentifiers, k.Fj[k.kq.SETTINGS].listRequestsContainingSessionIdentifiers, k.Fj[k.kq.SETTINGS].addOrRemoveSessionIdentifiers, k.Fj[k.kq.SETTINGS].redirectToCustomRules, k.Fj[k.kq.SETTINGS].listAllFallthroughSchemas, k.Fj[k.kq.SEQUENCE_RULES].listSequenceRules, k.Fj[k.kq.SEQUENCE_RULES].deleteSequenceRule, k.Fj[k.kq.SEQUENCE_RULES].reorderSequenceRule, k.Fj[k.kq.SEQUENCE_RULES].createSequenceRule, k.Fj[k.kq.SEQUENCE_RULES].editSequenceRule, ke.Z.ANALYTICS, ke.Z.CREATE_AND_DEPLOY, ke.Z.CREATE_MONITOR_LINK, ke.Z.CREATE_MONITOR, ke.Z.CREATE_POOL_LINK, ke.Z.CREATE_POOL, ke.Z.EDIT_MONITOR, ke.Z.EDIT_POOL, ke.Z.LOAD_BALANCING_TABLE, ke.Z.POOL_TABLE, ke.Z.EDIT_MONITOR_LINK, ke.Z.EDIT_POOL_LINK, q.y.SECONDARY_DNS_NOTIFICATION_CREATE, q.y.SECONDARY_DNS_NOTIFICATION_UPDATE, q.y.SECONDARY_DNS_NOTIFICATION_DELETE, K.U.ZONE_TRANSFER_SUCCESS, K.U.DNS_RECORD_CREATE, K.U.DNS_RECORD_UPDATE, K.U.DNS_RECORD_DELETE, re.Y.PEER_DNS_CREATE, re.Y.PEER_DNS_UPDATE, re.Y.PEER_DNS_DELETE, re.Y.ZONE_TRANSFER_ENABLE, re.Y.ZONE_TRANSFER_DISABLE, He.V.ARGO_ENABLEMENT, He.V.ARGO_GEO_ANALYTICS_FETCH, He.V.ARGO_GLOBAL_ANALYTICS_FETCH, Z.X.VIEW_BUCKETS_LIST, Z.X.CREATE_BUCKET, Z.X.VALIDATE_BUCKET, Z.X.DELETE_BUCKET, Z.X.VIEW_CAPTURES_LIST, Z.X.CREATE_SIMPLE_CAPTURE, Z.X.CREATE_FULL_CAPTURE, Z.X.VIEW_FULL_CAPTURE, Z.X.DOWNLOAD_SIMPLE_CAPTURE, te.bK.VIEW_RULES, te.bK.CREATE_RULE, te.bK.UPDATE_RULE, te.bK.DELETE_RULE, te.bK.VIEW_CONFIGURATION, te.bK.CREATE_CONFIGURATION, te.bK.UPDATE_CONFIGURATION, te.bK.DELETE_CONFIGURATION, G.r8.VIEW_ALERTS, G.r8.VIEW_ALERTS_HISTORY, G.r8.MAGIC_OVERVIEW_ANALYTICS, G.VZ.CREATE_SITE, G.VZ.CREATE_TUNNEL, G.VZ.CREATE_STATIC_ROUTE, ye.o4.CLICK_ADAPTIVE_SAMPLING, ye.o4.CLICK_TO_LOG_EXPLORER_BANNER, ye.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, ye.o4.CLICK_SWITCH_TO_RAW_LOGS, ye.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", Q.U.REGISTER_DOMAIN_SEARCH_SUBMIT, Q.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, Q.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, Q.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, Q.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, Q.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, Q.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, Q.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, Q.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, Q.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, Q.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, Q.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, Q.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, Q.U.REGISTER_DOMAIN_CHECKOUT_ERROR, Q.U.TRANSFER_DOMAIN_CHANGE_STEP, Q.U.RENEW_DOMAIN_COMPLETED, Q.U.RESTORE_DOMAIN_INIT, Q.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, Q.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, Q.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, Q.U.RESTORE_DOMAIN_FAILURE, Q.U.RESTORE_DOMAIN_COMPLETED, Q.U.DOMAIN_DELETE_INIT, Q.U.DOMAIN_DELETE_COMPLETED, Q.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, Q.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, Q.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, Q.U.DOMAIN_DELETE_CONFIRM_DELETE, Q.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, Q.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, Q.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, Q.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, Q.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, Q.U.DOMAIN_MOVE_START_FLOW, Q.U.DOMAIN_MOVE_OPEN_DOCS, Q.U.DOMAIN_MOVE_CLOSE_FLOW, Q.U.DOMAIN_MOVE_PROGRESS_FLOW, Q.U.DOMAIN_MOVE_SUBMIT, Q.U.DOMAIN_MOVE_INITIATE_SUCCESS, Q.U.DOMAIN_MOVE_INITIATE_ERROR, Q.U.DOMAIN_MOVE_CANCEL, Q.U.DOMAIN_MOVE_CANCEL_SUCCESS, Q.U.DOMAIN_MOVE_CANCEL_ERROR, Q.U.ACTION_CENTER_NAVIGATE, Q.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, Q.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, Q.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, ie.KO.CLICK_GET_STARTED_GUIDE, ie.KO.CLICK_PIPELINE_DOCUMENTATION, ie.KO.CLICK_QUICK_LINK, ie.KO.CREATE_PIPELINE, ie.KO.DELETE_PIPELINE, ie.KO.LIST_PIPELINES, ie.KO.VIEW_PIPELINE, A.S.EXISTING_DOMAIN, A.S.NEW_DOMAIN, A.S.WAF_RULESET, A.S.WORKERS, A.S.PAGES, A.S.R2, A.S.ACCOUNT_MEMBERS, x._.TEMPLATE_PRODUCT_SELECTED, x._.TEMPLATE_SELECTED, x._.TEMPLATE_SAVE_DRAFT, x._.TEMPLATE_CANCEL, x._.TEMPLATE_DEPLOY, Me.D.CLICK_GO_BACK_SHARE_MODAL, Me.D.CLICK_MENU_ITEM_SHARE, Me.D.CLICK_ON_CANCEL_SHARE_MODAL, Me.D.CLICK_ON_CLOSE_SHARE_MODAL, Me.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, Me.D.CLICK_ON_DELETE_RULESET, Me.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, Me.D.CLICK_ON_EDIT_SHARE_PERMISSION, Me.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, Me.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, Me.D.CLICK_ON_SHARE_TABLE_ROW, oe.pR.CLICK_GEOGRAPHICAL_TEMPLATE, oe.pR.CLICK_IP_TEMPLATE, oe.pR.CLICK_USER_AGENT_TEMPLATE, oe.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, Te.vc.CREATED, Te.vc.ENABLED, Te.vc.DISABLED, Te.vc.DELETED, Te.vc.UPDATED, Te.vc.DOWNLOADED, $.Gk.REQUEST_REVIEW, $.Gk.COPY_URL, M.v.FIELD, M.v.OPERATOR, w.Vj.SHOW_LCC_MIGRATION_BANNER, w.Vj.CLICK_LCC_DOCUMENTATION, w.Vj.CLICK_LCC_UPGRADE_GUIDE, w.Vj.SHOW_LCC_MIGRATION_WARNING),
				Ge = n.eg.exactStrict(n.eg.object({
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
				Re = (ce, pe) => {
					const [ve, B] = Ke(pe);
					let Y, he;
					return (0, n.nM)(Ce.decode(ce)) && (Y = new I.Uh(ce)), B && B.length > 0 && (he = new I.oV(ce, B)), [ve, Y, he]
				},
				Ke = ce => {
					const pe = Ge.decode(ce);
					if ((0, n.nM)(pe)) {
						const ve = pe.left.map(({
							context: B
						}) => B.map(({
							key: Y
						}) => Y)).reduce((B, Y) => B.concat(Y), []).filter(B => B in ce);
						return [Oe(ve, ce), ve]
					}
					return [ce, []]
				},
				Oe = (ce, pe) => Object.entries(pe).reduce((ve, [B, Y]) => (ce.includes(B) || (ve[B] = Y), ve), {}),
				Be = ce => (pe, ve, B) => {
					const [Y, he, Pe] = Re(ve, B);
					if (he) throw he;
					return Pe && console.error(Pe), ce(pe, ve, Y)
				};
			var Ue = t("../react/utils/zaraz.ts");
			const Ve = {
					identify: !0
				},
				Je = ce => (pe, ve, B) => (Ve[ve] || Ue.tg === null || Ue.tg === void 0 || Ue.tg.track(ve, B), ce(pe, ve, B));
			var W = t("../react/common/selectors/userSelectors.ts");
			const ae = "pageview",
				fe = "create zone",
				we = "create user",
				Le = {
					[ae]: !0,
					[fe]: !0,
					[we]: !0
				},
				xe = ce => {
					var pe;
					return !!((pe = ce.gates.assignments) === null || pe === void 0 ? void 0 : pe["dx-enable-google-tag-manager"])
				},
				Qe = ce => {
					const pe = /\|MCMID\|([0-9]+)\|/,
						ve = ce.match(pe);
					return ve ? ve[1] : void 0
				},
				rt = ce => {
					var pe;
					const {
						deviceViewport: ve,
						page: B,
						previousPage: Y,
						pageName: he,
						utm_campaign: Pe,
						_ga: Fe,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": We
					} = ce, {
						origin: Xe
					} = window.location, dt = (0, W.PR)((0, p.bh)().getState());
					return {
						event: Y !== void 0 && B !== Y ? "virtual_page_view" : "page_load",
						device_type: ve,
						hostname: Xe,
						language: navigator.language,
						locale: (0, u.r)((0, p.bh)().getState()),
						page_location: B ? `${Xe}${B}` : "[redacted]",
						page_path: B ? `${B}` : "[redacted]",
						page_referrer: Y ? `${Xe}/${Y}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: he || "[redacted]",
						page_url: B ? `${Xe}${B}` : "[redacted]",
						query: Pe ? `?utm_campaign=${Pe}` : "[redacted]",
						user_properties: {
							ga_client_id: (pe = Fe) !== null && pe !== void 0 ? pe : void 0,
							ga_client_id_s: Fe ? `s${Fe}` : void 0,
							user_id: Ae() ? dt == null ? void 0 : dt.id : void 0,
							ecid: We ? Qe(We) : void 0
						}
					}
				},
				lt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				at = ce => {
					const {
						status: pe
					} = ce;
					return pe === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				mt = (ce, pe) => {
					switch (ce) {
						case "pageview":
							return rt(pe);
						case "create zone":
							return lt();
						case "create user":
							return at(pe);
						default:
							return
					}
				},
				gt = ce => (pe, ve, B) => {
					if (Le[ve]) {
						var Y;
						const he = mt(ve, B);
						he && ((Y = window.dataLayer) === null || Y === void 0 || Y.push(he))
					}
					return ce(pe, ve, B)
				};
			var $e = t("../react/utils/cookiePreferences.ts");

			function Ie(ce) {
				for (var pe = 1; pe < arguments.length; pe++) {
					var ve = arguments[pe] != null ? Object(arguments[pe]) : {},
						B = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(ve).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(ve, Y).enumerable
					})), B.forEach(function(Y) {
						je(ce, Y, ve[Y])
					})
				}
				return ce
			}

			function je(ce, pe, ve) {
				return pe = ut(pe), pe in ce ? Object.defineProperty(ce, pe, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[pe] = ve, ce
			}

			function ut(ce) {
				var pe = st(ce, "string");
				return typeof pe == "symbol" ? pe : String(pe)
			}

			function st(ce, pe) {
				if (typeof ce != "object" || ce === null) return ce;
				var ve = ce[Symbol.toPrimitive];
				if (ve !== void 0) {
					var B = ve.call(ce, pe || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (pe === "string" ? String : Number)(ce)
			}
			const ft = ce => {
					const pe = xe((0, p.bh)().getState());
					o().init(Ie({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: ue() && !(0, a.gm)() && Ae(),
						middlewares: [N, Be, C, Je, ...pe ? [gt] : []]
					}, ce))
				},
				j = () => {
					o().identify(Ie({}, (0, e.getAttribution)(), {
						locale: (0, u.r)((0, p.bh)().getState()),
						isCloudflare: !!(0, m.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				ue = () => !0,
				Ee = () => {
					(0, $e.kT)("sparrow_id")
				},
				Ae = () => (0, $e.Xm)()
		},
		"../utils/initStyles.ts": function(F, v, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				p = document.head || document.getElementsByTagName("head")[0],
				u = i => {
					const d = [];
					for (let _ in i.colors) {
						const n = i.colors[_];
						if (Array.isArray(n) && _ !== "categorical")
							for (let r = 0; r < n.length; ++r) d.push(`--cf-${_}-${r}:${n[r]};`)
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
					let _ = document.getElementById(a);
					_ ? _.innerText = "" : (_ = document.createElement("style"), _.id = a, p.appendChild(_)), _.appendChild(document.createTextNode(d)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(m), v.Z = m
		},
		"../utils/sentry/lastSentEventId.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../utils/zaraz.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
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
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(c).filter(function(E) {
						return Object.getOwnPropertyDescriptor(c, E).enumerable
					})), f.forEach(function(E) {
						o(s, E, c[E])
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
				_ = ["email", "first_name", "last_name"],
				n = s => {
					_.forEach(l => {
						var c;
						(c = i) === null || c === void 0 || c.set(l, s[l])
					})
				},
				r = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(F, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				a = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				p = t.n(a),
				u = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = t.n(m),
				d = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				_ = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				r = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				f = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				E = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				O = t("../../../common/component/component-filter-bar/src/constants.js"),
				L = t("../../../common/component/component-filter-bar/src/utils.js");

			function h(G) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var x = arguments[Z] != null ? Object(arguments[Z]) : {},
						J = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols(x).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(x, ie).enumerable
					})), J.forEach(function(ie) {
						R(G, ie, x[ie])
					})
				}
				return G
			}

			function R(G, Z, x) {
				return Z = y(Z), Z in G ? Object.defineProperty(G, Z, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[Z] = x, G
			}

			function y(G) {
				var Z = C(G, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function C(G, Z) {
				if (typeof G != "object" || G === null) return G;
				var x = G[Symbol.toPrimitive];
				if (x !== void 0) {
					var J = x.call(G, Z || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(G)
			}
			const N = 70,
				A = (0, u.createStyledComponent)(({
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
				I = (0, u.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				S = (0, u.createStyledComponent)(({
					theme: G
				}) => ({
					color: G.colors.gray[4],
					mr: 1
				}), "span"),
				K = (0, u.createStyledComponent)(() => ({
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
				q = (0, u.createStyledComponent)(({
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
				}, G), _.zx),
				ne = (0, u.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				re = (0, u.createStyledComponent)(({
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
				Q = (0, u.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				V = G => G.current ? [...G.current.children].reduce((Z, x) => (x.offsetTop >= N && Z++, Z), 0) : 0;
			let me = 0;
			class te extends e.Component {
				constructor() {
					super();
					R(this, "overflowWrapper", (0, e.createRef)()), R(this, "hasOverflowed", Z => {
						const x = V(this.overflowWrapper);
						Z.scrollHeight > N && x >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (Z.scrollHeight < N || x === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), R(this, "addNewFilter", () => {
						const {
							filterDefinitions: Z
						} = this.props, x = (0, L.TE)(Z), J = Object.keys(x)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: J,
								operator: (0, L.uv)(J, x),
								value: (0, L.TT)(J, x)
							}
						})
					}), R(this, "handleOpenFilterEdit", Z => {
						this.setState({
							openFilter: Z,
							filterChanges: h({}, this.props.filters[Z])
						})
					}), R(this, "handleRemoveFilterClick", (Z, x) => {
						Z.stopPropagation(), this.removeFilter(x)
					}), R(this, "removeFilter", Z => {
						const {
							handleFiltersChange: x
						} = this.props, J = [...this.props.filters], ie = J[Z];
						J.splice(Z, 1), x(J), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: ie.key,
							operator: ie.operator,
							value: ie.value
						})
					}), R(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), R(this, "handleFilterSubmit", Z => {
						const {
							filterDefinitions: x
						} = this.props;
						Z.preventDefault();
						const {
							filterChanges: J
						} = this.state, ie = typeof x[J.key].parse == "function" ? Array.isArray(J.value) ? J.value.map(x[J.key].parse) : x[J.key].parse(J.value) : J.value;
						if (x[J.key].validate && (Array.isArray(ie) ? !ie.every(x[J.key].validate) : !x[J.key].validate(ie))) return this.setState({
							invalid: !0
						});
						const $ = [...this.props.filters],
							b = h({}, J, {
								value: ie
							}),
							k = !$[this.state.openFilter];
						k ? $.push(b) : $[this.state.openFilter] = h({}, J), this.props.handleFiltersChange($, b), (k ? this.props.onAddFilter : this.props.onEditFilter)({
							field: b.key,
							operator: b.operator,
							value: b.value
						}), this.closeOpenFilterChanges()
					}), R(this, "handlePendingKeyChange", ({
						value: Z
					}) => {
						const {
							filterDefinitions: x
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: Z,
								operator: (0, L.uv)(Z, x),
								value: (0, L.TT)(Z, x)
							}
						})
					}), R(this, "handlePendingOperatorChange", ({
						value: Z
					}) => {
						let x = h({}, this.state.filterChanges, {
							operator: Z
						});
						if ((0, L.dr)(Z)) {
							var J, ie;
							((J = this.state.filterChanges) === null || J === void 0 ? void 0 : J.value) && !Array.isArray((ie = this.state.filterChanges) === null || ie === void 0 ? void 0 : ie.value) && (x.value = [this.state.filterChanges.value])
						} else {
							var $, b, k;
							(($ = this.state.filterChanges) === null || $ === void 0 ? void 0 : $.value) && Array.isArray((b = this.state.filterChanges) === null || b === void 0 ? void 0 : b.value) && ((k = this.state.filterChanges) === null || k === void 0 ? void 0 : k.value.length) > 0 && (x.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: x
						})
					}), R(this, "handlePendingValueChange", Z => {
						this.setState({
							invalid: !1,
							filterChanges: h({}, this.state.filterChanges, {
								value: Z
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
				componentDidUpdate(Z) {
					Z.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(Z) {
					const {
						formatLabel: x,
						filterDefinitions: J
					} = this.props, {
						operator: ie
					} = this.state.filterChanges, $ = J[this.state.filterChanges.key], b = this.state.filterChanges.value, k = z => Array.isArray(z) ? z.map(oe => oe.value) : (z == null ? void 0 : z.value) || null;
					if ($.renderValueComponent) return $.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch ($.type) {
						case O.k.select:
							return (0, L.dr)(ie) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !$.options,
								value: typeof b.split == "function" ? b == null ? void 0 : b.split(",") : Array.isArray(b) ? b : [],
								options: $.options ? $.options.map(z => ({
									value: z.value || z,
									label: z.label || x(this.state.filterChanges.key, z, Z)
								})) : b ? (Array.isArray(b) ? b : b.split(",")).map(z => ({
									label: z,
									value: z
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(m.Trans, {
									id: $.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: $.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: z => {
									this.handlePendingValueChange(k(z))
								},
								isValidNewOption: z => {
									const oe = $.validate;
									return !oe && z || z && oe([z])
								},
								getNewOptionData: (z, oe) => ({
									value: z,
									label: oe
								})
							}) : o().createElement(s.hQ, {
								hideLabel: !0,
								value: b,
								options: $.options.map(z => ({
									value: z,
									label: x(this.state.filterChanges.key, z, Z)
								})),
								onChange: ({
									value: z
								}) => this.handlePendingValueChange(z)
							});
						case O.k.string:
						default:
							return (0, L.dr)(ie) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof b.split == "function" ? b == null ? void 0 : b.split(",") : Array.isArray(b) ? b : [],
								options: b ? (Array.isArray(b) ? b : b.split(",")).map(z => ({
									label: z,
									value: z
								})) : [],
								noOptionsMessage: () => null,
								placeholder: Z.t("analytics.report.filters.labels.placeholder", {
									example: J[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: z => {
									this.handlePendingValueChange(k(z))
								},
								isValidNewOption: z => {
									const oe = $.validate;
									return !oe && z || z && oe([z])
								},
								getNewOptionData: (z, oe) => ({
									value: z,
									label: oe
								}),
								formatCreateLabel: z => Z.t("filter_editor.value_create_label", {
									value: z
								})
							}) : o().createElement(m.I18n, null, z => o().createElement(d.I, {
								value: this.state.filterChanges.value,
								onChange: oe => this.handlePendingValueChange(oe.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: z.t("analytics.report.filters.labels.placeholder", {
									example: J[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: Z,
						filterDefinitions: x,
						modalStyles: J,
						filterIconType: ie,
						buttonStyle: $
					} = this.props, b = V(this.overflowWrapper), k = `filterPanel${this.state.id}`, z = this.state.openFilter !== null;
					return o().createElement(m.I18n, null, oe => o().createElement(l.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(Q, null, o().createElement(q, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": z,
						"aria-controls": k,
						inverted: !0,
						buttonStyle: $
					}, o().createElement(n.J, {
						type: ie || "add",
						mr: 1,
						label: oe.t("common.add", {
							_: "Add"
						})
					}), o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(ne, null, o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(A, {
						innerRef: this.overflowWrapper,
						overflowLimit: N,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((de, ye) => {
						const {
							key: Te,
							operator: Me,
							value: Ne
						} = de, He = x[Te].ignoreLabelTranslation ? x[Te].label : oe.t(x[Te].label), ke = oe.t(`analytics.report.filters.operators.${Me}`), ze = Array.isArray(Ne) ? Ne.map(H => Z(Te, H, oe)).join(", ") : Z(Te, Ne, oe), Ze = `${He} ${ke} ${ze}`;
						return o().createElement(M, {
							key: `${Te}-${Me}-${Ne}`,
							title: Ze
						}, o().createElement(T, {
							onClick: () => this.handleOpenFilterEdit(ye)
						}, o().createElement(l.ZC, {
							display: "flex"
						}, o().createElement(I, null, He), o().createElement(S, null, ke), o().createElement(K, null, ze), (0, L.oN)(de, x) ? o().createElement(r.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(re, {
							onClick: H => this.handleRemoveFilterClick(H, ye),
							"aria-label": "remove"
						}, o().createElement(n.J, {
							type: "remove"
						})))))
					})), z && o().createElement(E.Z, {
						id: k,
						filterDefinitions: x,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, L.oN)(this.state.filterChanges, x),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: Z,
						modalStyles: J
					}), this.state.hasOverflowed && o().createElement(f.Z, {
						count: b,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			R(te, "propTypes", {
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
			}), v.Z = te
		},
		"../../../common/component/component-filter-bar/src/index.js": function(F, v, t) {
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
					return p.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				a = t("../../../common/component/component-filter-bar/src/constants.js"),
				p = t("../../../common/component/component-filter-bar/src/utils.js"),
				u = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				OZ: function() {
					return u
				},
				YB: function() {
					return p
				}
			});

			function e(i, d, _) {
				return d = o(d), d in i ? Object.defineProperty(i, d, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = _, i
			}

			function o(i) {
				var d = a(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function a(i, d) {
				if (typeof i != "object" || i === null) return i;
				var _ = i[Symbol.toPrimitive];
				if (_ !== void 0) {
					var n = _.call(i, d || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			class p extends Error {
				constructor(d, _) {
					super(_);
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
		"../../../common/util/types/src/api/domain.ts": function(F, v, t) {
			"use strict";
			t.d(v, {
				Aw: function() {
					return N
				},
				Ib: function() {
					return y
				},
				Ks: function() {
					return A
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
					return L
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
					return _
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
			let _ = function(T) {
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
						status: e.eg.enum(_).optional
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
			const E = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(f),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				O = e.eg.object({
					designated_approvers: e.eg.array(E)
				});
			let L = function(T) {
				return T.PENDING = "pending", T.PENDING_UPDATE = "pending_update", T.ENABLED = "enabled", T.DISABLED = "disabled", T
			}({});
			const h = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(L)
				}),
				R = e.eg.intersection([h, O]),
				y = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let C = function(T) {
				return T.UNLOCK_APPROVAL = "UnlockApprovalRequest", T.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", T.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", T.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", T
			}({});
			const N = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				A = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(F, v, t) {
			"use strict";
			t.d(v, {
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
		"../../../common/util/types/src/utils/index.ts": function(F, v, t) {
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
			const o = (a, p) => {
				if (p !== void 0) throw new Error("Unexpected object: " + a);
				return p
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(F, v, t) {
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

//# debugId=ac66161f-c15a-58b6-94dc-225cc83533fe