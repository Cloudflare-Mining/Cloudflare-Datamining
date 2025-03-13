! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ffd70127-32ee-5775-98dd-10718539932a")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				J8: function() {
					return a
				},
				Jd: function() {
					return c
				},
				QY: function() {
					return g
				},
				Qw: function() {
					return i
				},
				ki: function() {
					return p
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/utils/url.ts"),
				s = t("../../../../node_modules/query-string/query-string.js"),
				u = t.n(s),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m;
			const i = () => Object.keys(l.Z).reduce((_, y) => (y.indexOf("cf_beta.") === 0 && l.Z.get(y) === "true" && _.push(y.split(".").slice(1).join(".")), _), []),
				p = () => {
					var _, y, A;
					return ((_ = window) === null || _ === void 0 || (y = _.bootstrap) === null || y === void 0 || (A = y.data) === null || A === void 0 ? void 0 : A.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((m = window) === null || m === void 0 ? void 0 : m.location) && l.Z) {
				const _ = u().parse(window.location.search);
				_.beta_on && l.Z.set(`cf_beta.${_.beta_on}`, !0), _.beta_off && l.Z.set(`cf_beta.${_.beta_off}`, !1)
			}
			const f = {},
				n = _ => {
					var y, A, v;
					return Object.prototype.hasOwnProperty.call(f, _) ? f[_] : ((y = window) === null || y === void 0 || (A = y.bootstrap) === null || A === void 0 || (v = A.data) === null || v === void 0 ? void 0 : v.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(b => b === _) ? (f[_] = !0, !0) : (f[_] = !1, !1)
				},
				r = _ => l.Z ? l.Z.get(`cf_beta.${_}`) === !0 : !1,
				a = _ => r(_) || n(_),
				d = () => !0,
				c = () => {
					var _, y, A;
					return ((_ = window) === null || _ === void 0 || (y = _.bootstrap) === null || y === void 0 || (A = y.data) === null || A === void 0 ? void 0 : A.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				g = _ => {
					const y = (0, e.uF)(_),
						A = (y == null ? void 0 : y.roles) || [];
					return (0, o.qR)(location.pathname) && A.length === 1 && A.some(v => v === "Administrator Read Only")
				}
		},
		"../init.ts": function(F, E, t) {
			"use strict";
			t.r(E);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				s = t("../libs/init/initGlobal.ts"),
				u = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function m(R) {
				for (var $ = 1; $ < arguments.length; $++) {
					var X = arguments[$] != null ? Object(arguments[$]) : {},
						oe = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(X).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(X, _e).enumerable
					})), oe.forEach(function(_e) {
						i(R, _e, X[_e])
					})
				}
				return R
			}

			function i(R, $, X) {
				return $ = p($), $ in R ? Object.defineProperty(R, $, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[$] = X, R
			}

			function p(R) {
				var $ = f(R, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function f(R, $) {
				if (typeof R != "object" || R === null) return R;
				var X = R[Symbol.toPrimitive];
				if (X !== void 0) {
					var oe = X.call(R, $ || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(R)
			}
			const n = R => {
				const $ = R && R.headers || {},
					X = new Headers($);
				return X.append("X-Cross-Site-Security", "dash"), m({}, R, {
					headers: X
				})
			};
			(0, l.register)({
				request: (R, $) => {
					try {
						return new URL(R), R === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", $] : [R, $]
					} catch {
						return [R, n($)]
					}
				}
			});
			var r = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				d = t("../react/app/providers/storeContainer.js");
			let c = "";
			const g = 61;

			function _(R) {
				const $ = R.substr(1);
				if ($ && c !== $) {
					const X = document.getElementById($);
					if (X) {
						const oe = X.getBoundingClientRect().top;
						if (oe > 0) {
							const _e = oe - g;
							document.documentElement.scrollTop = _e
						}
					}
				}
				c = $
			}

			function y(R) {
				R.listen($ => _($.hash))
			}
			var A = t("../../../../node_modules/cookie/index.js"),
				v = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const b = "CF_dash_version",
				h = "cf_fv_preview",
				C = "cf_pv",
				M = "current",
				L = "hash",
				P = "deploymentPreview",
				S = "fragmentPreview",
				O = R => R === M ? w() : U(),
				w = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				U = (R = 72) => {
					const $ = 36e5;
					return new Date(Date.now() + R * $)
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
				Y = (R, $ = !1) => {
					var X;
					const oe = j(R),
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
    <h1 id="error-title">${oe.title}</h1>
    <p id="error-description">${oe.description}</p>
  </div>
  `,
						Me = $ ? `
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
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(X=window.build)===null||X===void 0?void 0:X.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return _e + Me
				},
				ne = R => {
					var $;
					const X = document.getElementById(R);
					!X || ($ = X.parentNode) === null || $ === void 0 || $.removeChild(X)
				};

			function ue() {
				const R = document.getElementById("loading-state");
				R == null || R.classList.add("hide"), R == null || R.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(ne)
				})
			}

			function se(R) {
				var $;
				const X = document.getElementById("loading-state"),
					oe = !!(($ = A.parse(document.cookie)) === null || $ === void 0 ? void 0 : $[b]);
				!X || (X.innerHTML = Y(R == null ? void 0 : R.code, oe))
			}
			var re = t("../utils/initStyles.ts"),
				ee = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				ge = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				G = t("../react/common/selectors/languagePreferenceSelector.ts"),
				I = t("../flags.ts"),
				k = t("../utils/getDashVersion.ts");
			const H = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				J = !0,
				D = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				x = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var B = t("../utils/sentry/lastSentEventId.ts"),
				z = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				Z = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const W = R => {
				const $ = async X => {
					var oe, _e;
					const Me = {
						envelope: X.body,
						url: R.url,
						isPreviewDeploy: (oe = window) === null || oe === void 0 || (_e = oe.build) === null || _e === void 0 ? void 0 : _e.isPreviewDeploy,
						release: (0, k.t)()
					};
					try {
						const be = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(Me)
						});
						return {
							statusCode: be.status,
							headers: {
								"x-sentry-rate-limits": be.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": be.headers.get("Retry-After")
							}
						}
					} catch (be) {
						return console.log(be), (0, Z.$2)(be)
					}
				};
				return z.q(R, $)
			};
			var q = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				de = t("../../../../node_modules/history/esm/history.js"),
				ce = (0, de.lX)(),
				Ee = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Le = t("../react/utils/url.ts");
			const Ae = (0, Ee.Rf)();
			let we;

			function Re(R) {
				return Se(R, "react-router-v5")
			}

			function Se(R, $) {
				return (X, oe = !0, _e = !0) => {
					oe && Ae && Ae.location && (we = X({
						name: (0, Le.Fl)(Ae.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": $
						}
					})), _e && R.listen && R.listen((Me, be) => {
						if (be && (be === "PUSH" || be === "POP")) {
							we && we.finish();
							const Qe = {
								"routing.instrumentation": $
							};
							we = X({
								name: (0, Le.Fl)(Me.pathname),
								op: "navigation",
								tags: Qe
							})
						}
					})
				}
			}
			var K = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				me = t.n(K),
				De = t("../../../common/intl/intl-core/src/errors.ts"),
				Ke = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				it = t("../react/common/middleware/sparrow/errors.ts");

			function nt(R, $, X) {
				return $ = ct($), $ in R ? Object.defineProperty(R, $, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[$] = X, R
			}

			function ct(R) {
				var $ = ot(R, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function ot(R, $) {
				if (typeof R != "object" || R === null) return R;
				var X = R[Symbol.toPrimitive];
				if (X !== void 0) {
					var oe = X.call(R, $ || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(R)
			}
			class qe {
				constructor() {
					nt(this, "name", qe.id)
				}
				setupOnce() {
					t.g.console && (0, Ke.hl)(t.g.console, "error", $ => (...X) => {
						const oe = X.find(_e => _e instanceof Error);
						if (H && oe) {
							let _e, Me = !0;
							if (oe instanceof it.ez) {
								const be = oe instanceof it.oV ? oe.invalidProperties : void 0;
								_e = {
									tags: {
										"sparrow.eventName": oe.eventName
									},
									extra: {
										sparrow: {
											eventName: oe.eventName,
											invalidProperties: be
										}
									},
									fingerprint: [oe.name ? oe.name : "SparrowValidationError"]
								}, Me = !1
							} else if (oe instanceof K.SparrowIdCookieError) _e = {
								extra: {
									sparrowIdCookie: oe.cookie
								},
								fingerprint: [oe.name ? oe.name : "SparrowIdCookieError"]
							};
							else if (oe.name === "ChunkLoadError") {
								_e = {
									fingerprint: [oe.name]
								};
								try {
									_e.tags = {
										chunkId: oe.message.split(" ")[2],
										chunkUrl: oe.request
									}
								} catch {}
							} else oe instanceof De.YB && (_e = {
								fingerprint: ["TranslatorError", oe.translationKey]
							});
							Me && r.Tb(oe, _e)
						}
						typeof $ == "function" && $.apply(t.g.console, X)
					})
				}
			}
			nt(qe, "id", "ConsoleErrorIntegration");
			var ft = null;
			const Q = () => {
					if (H && J) {
						var R, $, X, oe, _e, Me, be, Qe, mt, Ge;
						let Nt = "production";
						((R = window) === null || R === void 0 || ($ = R.build) === null || $ === void 0 ? void 0 : $.isPreviewDeploy) && (Nt += "-preview"), ge.S({
							dsn: H,
							release: (0, k.t)(),
							environment: Nt,
							ignoreErrors: x,
							allowUrls: D,
							autoSessionTracking: !1,
							integrations: gt => [...gt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new qe, new q.jK.BrowserTracing({
								routingInstrumentation: Re(ce)
							})],
							tracesSampleRate: 0,
							transport: W,
							beforeSend: gt => (B.e.setEventId(gt.event_id), gt)
						});
						const Lt = (0, d.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, I.Qw)(),
							USER_BETA_FLAGS: (0, I.ki)(),
							meta: {
								connection: {
									type: (X = window) === null || X === void 0 || (oe = X.navigator) === null || oe === void 0 || (_e = oe.connection) === null || _e === void 0 ? void 0 : _e.effectiveType,
									bandwidth: (Me = window) === null || Me === void 0 || (be = Me.navigator) === null || be === void 0 || (Qe = be.connection) === null || Qe === void 0 ? void 0 : Qe.downlink
								},
								languagePreference: (0, G.r)(Lt),
								isPreviewDeploy: (mt = window) === null || mt === void 0 || (Ge = mt.build) === null || Ge === void 0 ? void 0 : Ge.isPreviewDeploy
							},
							utilGates: (0, ee.T2)(Lt)
						}), window.addEventListener("unhandledrejection", function(gt) {})
					}
				},
				ie = R => {
					R ? r.av({
						id: R
					}) : r.av(null)
				};
			var ye = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				ze = () => {
					let R;
					try {
						R = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), R = window.location.search
					}
					if (!R.includes("remote[")) return;
					const $ = new URLSearchParams(R),
						X = {};
					for (let [oe, _e] of $) oe.includes("remote") && (X[oe.replace(/remote\[|\]/g, "")] = _e);
					ye.Z.set("mfe-remotes", JSON.stringify(X))
				},
				ke = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				et = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const at = "ANON_USER_ID";

			function _t() {
				var R, $, X, oe;
				let _e = (R = t.g) === null || R === void 0 || ($ = R.bootstrap) === null || $ === void 0 || (X = $.data) === null || X === void 0 || (oe = X.user) === null || oe === void 0 ? void 0 : oe.id;
				if (!_e) {
					let Me = ye.Z.get(at);
					if (!Me) {
						let be = (0, et.Z)();
						ye.Z.set(at, be), Me = be
					}
					return Me
				}
				return _e
			}
			async function lt() {
				const R = (0, d.bh)();
				R.dispatch((0, ke.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await R.dispatch((0, ee.UL)({
					userId: _t()
				}))
			}
			class yt extends Error {
				constructor($, X) {
					super(X);
					this.name = `${$} ${X}`
				}
			}
			const Ct = () => {
					document.cookie.split(";").forEach($ => {
						const [X] = $.trim().split("=");
						document.cookie = `${X}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				Et = async () => {
					let R = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!R.ok) throw R.headers.get("content-type") === "text/html" && (await R.text()).toLowerCase().includes("cookie too large") && (r.$e(function(_e) {
						_e.setTag("init", "cookieTooLarge"), r.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), Ct(), window.location.reload()), new yt("Bootstrap API Failure", R == null ? void 0 : R.status);
					return (await R.json()).result.data
				};
			var Be = t("webpack/sharing/consume/default/react/react"),
				Te = t.n(Be),
				He = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				vt = t("webpack/sharing/consume/default/react-dom/react-dom"),
				st = t("webpack/sharing/consume/default/react-redux/react-redux"),
				ht = t("../../../../node_modules/swr/core/dist/index.mjs"),
				V = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				ae = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				ve = t("../react/shims/focus-visible.js"),
				Oe = t("../react/app/components/DeepLink/index.ts"),
				Ne = t("../../../../node_modules/prop-types/index.js"),
				xe = t.n(Ne),
				Ve = t("../react/utils/translator.tsx"),
				pe = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				te = t("../../../dash/intl/intl-translations/src/index.ts"),
				Ce = t("../../../../node_modules/query-string/query-string.js"),
				he = t.n(Ce),
				Pe = t("../react/common/actions/userActions.ts"),
				Ue = t("../react/common/selectors/userSelectors.ts"),
				We = t("../react/utils/i18n.ts"),
				tt = t("../react/utils/bootstrap.ts");

			function Xe(R) {
				for (var $ = 1; $ < arguments.length; $++) {
					var X = arguments[$] != null ? Object(arguments[$]) : {},
						oe = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(X).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(X, _e).enumerable
					})), oe.forEach(function(_e) {
						Je(R, _e, X[_e])
					})
				}
				return R
			}

			function Je(R, $, X) {
				return $ = ut($), $ in R ? Object.defineProperty(R, $, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[$] = X, R
			}

			function ut(R) {
				var $ = dt(R, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function dt(R, $) {
				if (typeof R != "object" || R === null) return R;
				var X = R[Symbol.toPrimitive];
				if (X !== void 0) {
					var oe = X.call(R, $ || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(R)
			}
			let Fe = he().parse(location.search);
			const Ze = R => {
					const $ = (0, tt.$8)() ? [(0, te.Fy)(te.if.changes), (0, te.Fy)(te.if.common), (0, te.Fy)(te.if.navigation), (0, te.Fy)(te.if.overview), (0, te.Fy)(te.if.onboarding), (0, te.Fy)(te.if.invite), (0, te.Fy)(te.if.login), (0, te.Fy)(te.if.dns), (0, te.Fy)(te.n4.ssl_tls), (0, te.Fy)(te.if.message_inbox), (0, te.Fy)(te.if.welcome)] : [(0, te.Fy)(te.if.common), (0, te.Fy)(te.if.invite), (0, te.Fy)(te.if.login), (0, te.Fy)(te.if.onboarding)];
					Fe.lang ? $t(R) : ye.Z.get(We.th) && Rt(R, (0, We.Kd)());
					const X = async oe => (await Promise.all($.map(Me => Me(oe)))).reduce((Me, be) => Xe({}, Me, be), {});
					return Te().createElement(pe.LocaleContext.Provider, {
						value: R.languagePreference
					}, Te().createElement(pe.I18nProvider, {
						translator: Ve.Vb,
						locale: R.languagePreference
					}, Te().createElement(pe.I18nLoader, {
						loadPhrases: X
					}, R.children)))
				},
				$t = async R => {
					let $ = Fe.lang.substring(0, Fe.lang.length - 2) + Fe.lang.substring(Fe.lang.length - 2, Fe.lang.length).toUpperCase();
					if (!(0, G.v)($)) {
						console.warn(`${$} is not a supported locale.`), delete Fe.lang, R.history.replace({
							search: he().stringify(Fe)
						});
						return
					}(0, We.i_)($), delete Fe.lang, Rt(R, $), R.isAuthenticated || R.history.replace({
						search: he().stringify(Fe)
					})
				}, Rt = async (R, $) => {
					if (R.isAuthenticated) try {
						await R.setUserCommPreferences({
							"language-locale": $
						}, {
							hideErrorAlert: !0
						}), ye.Z.remove(We.th), R.history.replace({
							search: he().stringify(Fe)
						})
					} catch (X) {
						ye.Z.set(We.th, !0), console.error(X)
					} else ye.Z.set(We.th, !0)
				}, kt = R => {
					const $ = (0, Ue.PR)(R);
					return {
						isAuthenticated: !!($ && $.id),
						languagePreference: (0, We.Kd)() || (0, G.r)(R)
					}
				}, Wt = {
					setUserCommPreferences: Pe.V_
				};
			var zt = (0, He.withRouter)((0, st.connect)(kt, Wt)(Ze));
			Ze.propTypes = {
				history: xe().object,
				languagePreference: xe().string.isRequired,
				children: xe().node.isRequired,
				isAuthenticated: xe().bool,
				setUserCommPreferences: xe().func.isRequired
			};
			var Gt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Kt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let T;
			const N = ({
				selectorPrefix: R = "c_"
			} = {}) => (T || (T = (0, Kt.Z)({
				dev: !1,
				selectorPrefix: R
			})), T);
			var le = t("../react/common/components/ModalManager.tsx"),
				Ie = t("../react/app/components/ErrorBoundary.tsx"),
				je = t("../react/common/actions/notificationsActions.ts");
			const At = (t.g.bootstrap || {}).data || {};
			class Ot extends Te().Component {
				componentDidMount() {
					At.messages && this.dispatchNotificationActions(At.messages)
				}
				dispatchNotificationActions($) {
					$.forEach(X => {
						const {
							type: oe,
							message: _e,
							persist: Me
						} = X;
						["success", "info", "warn", "error"].includes(oe) && this.props.notifyAdd(oe, (0, Ve.ZP)(_e), {
							persist: !!Me
						})
					})
				}
				render() {
					return null
				}
			}
			var Pt = (0, He.withRouter)((0, st.connect)(null, {
				notifyAdd: je.add
			})(Ot));
			Ot.propTypes = {
				notifyAdd: xe().func.isRequired
			};
			var rt = t("../react/app/redux/index.ts");

			function St() {
				var R;
				const $ = (0, rt.p4)(Ue.PR),
					X = ($ == null || (R = $.email) === null || R === void 0 ? void 0 : R.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					oe = (0, ke.Yc)();
				(0, Be.useEffect)(() => {
					oe({
						userType: X
					})
				}, [X, oe])
			}
			var It = t("../react/common/selectors/entitlementsSelectors.ts"),
				bt = t("../react/common/selectors/accountSelectors.ts");
			const Dt = ["accountId", "is_ent"];

			function Mt() {
				const R = (0, ke.f7)(),
					$ = (0, He.useHistory)(),
					X = (0, Le.uW)($.location.pathname),
					oe = (0, ke.Yc)(),
					_e = (0, ke.O$)(),
					Me = (0, rt.p4)(It.u1),
					be = !Me.isRequesting && !!Me.data,
					Qe = (0, rt.p4)(It.p1),
					mt = (0, rt.p4)(bt.Xu),
					Ge = (0, rt.p4)(bt.uF),
					Nt = !mt.isRequesting && !!mt.data;
				(0, Be.useEffect)(() => {
					if (X && Nt && Ge && be && X === Ge.account.id) {
						var Lt, gt, Ft;
						oe({
							accountId: Ge.account.id,
							is_ent: Qe,
							is_free_account: !Qe && !(Ge == null || (Lt = Ge.account.meta) === null || Lt === void 0 ? void 0 : Lt.has_business_zones) && !(Ge == null || (gt = Ge.account.meta) === null || gt === void 0 ? void 0 : gt.has_pro_zones) && !(Ge == null || (Ft = Ge.account.meta) === null || Ft === void 0 ? void 0 : Ft.has_enterprise_zones)
						})
					} else(!X || X in R && R.accountId !== X) && _e(Dt)
				}, [Nt, Ge, oe, _e, be, Qe, X, R])
			}
			var Ye = t("../react/common/selectors/zoneSelectors.ts");

			function Ht() {
				const R = (0, rt.p4)(Ye.nA),
					$ = (0, ke.Yc)();
				(0, Be.useEffect)(() => {
					var X;
					$({
						zone_id: R == null ? void 0 : R.id,
						zone_plan: R == null || (X = R.plan) === null || X === void 0 ? void 0 : X.legacy_id
					})
				}, [R, $])
			}
			const Ut = () => (St(), Mt(), Ht(), null);
			var en = t("../react/app/components/Persistence/index.tsx"),
				tn = t("../node_modules/@cloudflare/elements/es/index.js"),
				nn = t("../react/app/components/LoadingSuspense.tsx");
			const on = Te().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(48759), t.e(5668), t.e(31021), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var rn = () => Te().createElement(nn.Z, null, Te().createElement(on, null));
			const an = () => (Be.useEffect(() => ue, []), null);
			var sn = t("../../../../node_modules/moment/moment.js"),
				Vt = t.n(sn);
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
					const R = (0, rt.p4)(G.r);
					(0, Be.useEffect)(() => {
						const $ = cn(R);
						$ !== Vt().locale() && Vt().locale($), document.documentElement.lang = R
					}, [R])
				},
				un = () => {
					(0, Be.useEffect)(() => {
						async function R() {
							var $, X;
							let oe;
							if ((($ = window) === null || $ === void 0 || (X = $.build) === null || X === void 0 ? void 0 : X.isPreviewDeploy) && (oe = "cookie"), !!oe) try {
								const _e = document.head.querySelector("link[rel=icon]");
								_e && (_e.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${oe}.ico`)).default)
							} catch {}
						}
						R()
					}, [])
				};
			var dn = t("../react/common/constants/constants.ts");
			const pn = () => {
					var R;
					const $ = (0, He.useLocation)(),
						[X, oe] = (0, Be.useState)(((R = window) === null || R === void 0 ? void 0 : R.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Be.useEffect)(() => {
						const _e = he().parse($.search);
						if (_e.pt && ye.Z.set(dn.sJ, _e.pt), _e == null ? void 0 : _e.devPanel) {
							var Me, be;
							(Me = window) === null || Me === void 0 || (be = Me.localStorage) === null || be === void 0 || be.setItem("gates_devtools_ui_gates_controller_enabled", "true"), oe(!0)
						}
					}, [$.search]), {
						devPanelEnabled: X
					}
				},
				mn = ({
					id: R,
					customDataLayer: $ = [],
					dataLayerName: X = "dataLayer"
				}) => {
					const oe = `<iframe src="https://www.googletagmanager.com/ns.html?id=${R}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						_e = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${X}', '${R}')`,
						Me = `
    window.${X} = window.${X} || [];
    window.${X}.push(${JSON.stringify($)})
  `;
					return {
						iframe: oe,
						script: _e,
						dataLayerHTML: Me
					}
				},
				gn = R => {
					const $ = document.createElement("script");
					return $.innerHTML = R, $.async = !0, $
				},
				fn = R => {
					const $ = document.createElement("noscript");
					return $.innerHTML = R, $
				},
				Zt = R => {
					const $ = document.createElement("script");
					return $.innerHTML = R, $
				},
				Rn = ({
					dataLayer: R,
					dataLayerName: $
				}) => {
					if (window[$]) return window[$].push(R);
					const X = `
      window.${$} = window.${$} || [];
      window.${$}.push(${JSON.stringify(R)})`,
						oe = Zt(X);
					document.head.insertBefore(oe, document.head.childNodes[0])
				},
				_n = ({
					containerId: R,
					customDataLayer: $,
					gtmFeatureFlag: X = !0
				}) => {
					(0, Be.useEffect)(() => {
						(() => {
							if (!X) return null;
							const {
								iframe: _e,
								script: Me,
								dataLayerHTML: be
							} = mn({
								id: R,
								customDataLayer: $
							});
							document.head.insertBefore(Zt(be), document.head.childNodes[0]), document.head.insertBefore(gn(Me), document.head.childNodes[0]), document.body.insertBefore(fn(_e), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const En = ({
				isDev: R,
				gtmFeatureFlag: $
			}) => {
				(0, Be.useEffect)(() => {
					(() => {
						if (!$) return null;
						let oe;
						R ? oe = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : oe = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const _e = document.createElement("script");
						_e.async = !0, _e.src = oe, document.head.insertBefore(_e, document.head.childNodes[0])
					})()
				}, [])
			};
			var vn = t("../react/utils/useDomainConnectRedirect.ts");
			const yn = "GTM-NDGPDFZ",
				Cn = Te().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(48759), t.e(51436), t.e(3292), t.e(47386), t.e(70618), t.e(29791), t.e(31021), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(16301), t.e(87940), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				hn = Te().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(39074), t.e(57062), t.e(3292), t.e(55879), t.e(69088), t.e(16301), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var Tn = ({
					userIsAuthed: R
				}) => {
					ln(), un(), (0, vn.y)();
					const {
						devPanelEnabled: $
					} = pn();
					return _n({
						containerId: yn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), En({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), Te().createElement(Be.Suspense, {
						fallback: Te().createElement(an, null)
					}, Te().createElement(He.Switch, null, !R && !0 && Te().createElement(He.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Te().createElement(hn, null)), Te().createElement(He.Route, {
						render: () => Te().createElement(tn.ZC, {
							minHeight: "100vh"
						}, Te().createElement(Cn, null))
					})), $ && Te().createElement(rn, null))
				},
				jt = t("../../../../node_modules/yup/es/index.js"),
				An = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => jt.Z_().email((0, Ve.ZP)("common.validation.email")).required((0, Ve.ZP)("common.validation.email")),
				cfPassword: () => jt.Z_().required((0, Ve.ZP)("common.validation.required"))
			};
			(0, An.Yd)(Qt).forEach(R => {
				jt.kM(jt.Z_, R, Qt[R])
			});
			const Xt = Te().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx"))),
				On = () => {
					const R = (0, tt.$8)(),
						[$, X] = (0, Be.useState)(R ? Xt : Te().Fragment),
						[oe, _e] = (0, Be.useState)((0, v.Yc)());
					(0, Be.useEffect)(() => {
						(0, v.fF)(() => _e((0, v.Yc)()))
					}, []);
					const Me = be => {
						_e(be), (0, v.C8)(be), document.cookie = `dark-mode=${be};Path=/;Max-Age=31536000`
					};
					return (0, Be.useEffect)(() => {
						X(R ? Xt : Te().Fragment)
					}, [R]), (0, Be.useEffect)(() => {
						const be = () => Me(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", be), () => {
							window.removeEventListener("storage", be)
						}
					}, []), Te().createElement(Be.Suspense, {
						fallback: null
					}, Te().createElement(st.Provider, {
						store: (0, d.bh)()
					}, Te().createElement(He.Router, {
						history: ce
					}, Te().createElement($, null, Te().createElement(Gt.Z, {
						renderer: N()
					}, Te().createElement(zt, null, Te().createElement(Ie.S, {
						sentryTag: "Root"
					}, Te().createElement(ht.J$, {
						value: {
							fetcher: be => fetch(be).then(Qe => Qe.json())
						}
					}, Te().createElement(Ut, null), Te().createElement(Pt, null), Te().createElement(en.Z_, {
						onDarkModeChangeCb: Me
					}, Te().createElement(Oe.ZP, null, Te().createElement(Tn, {
						userIsAuthed: R
					}))), Te().createElement(le.ZP, null), Te().createElement(V.F0, null)))))))))
				},
				In = () => {
					(0, vt.render)(Te().createElement(On, null), document.getElementById("react-app"))
				};
			var Tt = t("../utils/initSparrow.ts"),
				wt = t("../utils/zaraz.ts");
			const bn = () => {
					const R = (0, Ue.PR)((0, d.bh)().getState());
					Ln(), (0, Tt.Ug)(), (0, wt.bM)(), (R == null ? void 0 : R.id) && me().setUserId(R == null ? void 0 : R.id), (0, Tt.yV)(), !(0, Tt.Wi)() && (0, Tt.IM)(), R ? (0, wt.yn)(R) : (0, wt.Ro)()
				},
				Ln = () => {
					var R, $;
					(R = window) === null || R === void 0 || ($ = R.OneTrust) === null || $ === void 0 || $.OnConsentChanged(() => {
						const X = (0, Ue.PR)((0, d.bh)().getState());
						(0, Tt.Wi)() ? (me().setEnabled(!0), (X == null ? void 0 : X.id) ? (me().setUserId(X.id), (0, wt.yn)(X)) : (0, wt.Ro)(), (0, Tt.yV)()) : (me().setEnabled(!1), (0, Tt.IM)())
					})
				};

			function Pn(R) {
				for (var $ = 1; $ < arguments.length; $++) {
					var X = arguments[$] != null ? Object(arguments[$]) : {},
						oe = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(X).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(X, _e).enumerable
					})), oe.forEach(function(_e) {
						Sn(R, _e, X[_e])
					})
				}
				return R
			}

			function Sn(R, $, X) {
				return $ = Dn($), $ in R ? Object.defineProperty(R, $, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[$] = X, R
			}

			function Dn(R) {
				var $ = Mn(R, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function Mn(R, $) {
				if (typeof R != "object" || R === null) return R;
				var X = R[Symbol.toPrimitive];
				if (X !== void 0) {
					var oe = X.call(R, $ || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(R)
			}
			const wn = "init",
				Jt = (R, $) => {
					r.$e(function(X) {
						X.setTag(wn, $), r.Tb(R)
					}), se(R)
				},
				xt = async (R, $) => {
					try {
						return await R(), !0
					} catch (X) {
						return Jt(X, $), !1
					}
				};
			(async () => {
				try {
					var R, $, X;
					t.g.build = Pn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "cb6baafc6f5f5210c7767696b3e8f52015a3f7ff",
						dashVersion: "31733683",
						env: "production",
						builtAt: 1741887698541,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, k.p)()
					}), Q();
					const oe = [{
						fn: () => t.e(4374).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => y(ce),
						tag: "hashScroll"
					}, {
						fn: re.Z,
						tag: "styles"
					}, {
						fn: ze,
						tag: "mfePreviewData"
					}];
					for (const mt of oe)
						if (!await xt(mt.fn, mt.tag)) return;
					let _e;
					if (!await xt(async () => {
							_e = await Et()
						}, "bootstrap")) return;
					const Me = (0, d.bh)(),
						be = ((R = _e) === null || R === void 0 ? void 0 : R.data) || {};
					Me.dispatch((0, a.mW)("user", be == null ? void 0 : be.user));
					const Qe = ($ = _e) === null || $ === void 0 || (X = $.data) === null || X === void 0 ? void 0 : X.user;
					return t.g.bootstrap = _e, Qe && Qe.id && ie(Qe.id), !await xt(lt, "gates") || !await xt(bn, "tracking") ? void 0 : In()
				} catch (oe) {
					Jt(oe, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/userSelectors.ts"),
				l = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/common/utils/isGuards.ts"),
				p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = t.n(p);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(d) {
					for (var c = 1; c < arguments.length; c++) {
						var g = arguments[c];
						for (var _ in g) Object.prototype.hasOwnProperty.call(g, _) && (d[_] = g[_])
					}
					return d
				}, n.apply(this, arguments)
			}
			const r = d => {
				function c(g) {
					const _ = (0, s.UM)(),
						y = (0, p.useHistory)(),
						A = (0, p.useLocation)(),
						v = (0, p.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						b = (0, s.p4)(u.PR) || null,
						h = (0, s.p4)(l.nA) || null,
						C = (0, s.p4)(m.uF),
						M = C ? C.account : null;
					if (!v) return null;
					const {
						accountId: L,
						app: P,
						tab: S
					} = v.params, O = v.params.zoneName && ((0, i.v5)(v.params.zoneName) || v.params.zoneName.indexOf(".") > 0) ? v.params.zoneName : void 0;
					return o().createElement(d, n({
						dispatch: _,
						history: y,
						location: A,
						match: v,
						user: b,
						membership: L ? C : null,
						account: L ? M : null,
						accountId: L || null,
						zone: O ? h : null,
						zoneName: O || null,
						app: O ? P : null,
						tab: O ? S : null
					}, g))
				}
				return c.displayName = `withEntities(${a(d)})`, c
			};

			function a(d) {
				return d.displayName || d.name || "Component"
			}
			E.Z = r
		},
		"../react/app/components/AccountHome/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$$: function() {
					return v
				},
				CK: function() {
					return M
				},
				KV: function() {
					return h
				},
				OX: function() {
					return C
				},
				QV: function() {
					return A
				},
				Yt: function() {
					return _
				},
				bA: function() {
					return y
				},
				gX: function() {
					return d
				},
				o1: function() {
					return b
				},
				tw: function() {
					return c
				},
				xD: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			const s = "projects table click",
				u = "click create application",
				l = "account home dev plat - product card click",
				m = "account home dev plat - empty state CTA click",
				i = "account home dev plat - view all projects click",
				p = "select task",
				f = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				r = "account home zero trust - analytics link click",
				a = "account home zero trust - product card click",
				d = {
					SPARROW_PROJECTS_TABLE_CLICK: s,
					SPARROW_CREATE_PROJECT_CLICK: u,
					SPARROW_PRODUCT_CARD_CLICK: l,
					SPARROW_EMPTY_STATE_CTA_CLICK: m,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: i,
					SPARROW_SELECT_ZERO_TRUST_TASK: p,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: f,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: r,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: a
				},
				c = L => {
					o().sendEvent(s, {
						component: L
					})
				},
				g = L => {
					o().sendEvent(s, {
						component: "menu",
						subcomponent: L
					})
				},
				_ = () => {
					o().sendEvent(u, {
						category: "Projects Table"
					})
				},
				y = ({
					category: L,
					product: P
				}) => {
					o().sendEvent(l, {
						category: L,
						product: P
					})
				},
				A = () => {
					o().sendEvent(m)
				},
				v = () => {
					o().sendEvent(i)
				},
				b = L => {
					o().sendEvent(p, {
						product: `zero-trust - ${L}`,
						category: "onboarding"
					})
				},
				h = ({
					category: L,
					href: P
				}) => {
					o().sendEvent(f, {
						category: L,
						href: P
					})
				},
				C = ({
					category: L,
					href: P
				}) => {
					o().sendEvent(r, {
						category: L,
						href: P
					})
				},
				M = ({
					category: L,
					product: P,
					href: S
				}) => {
					o().sendEvent(a, {
						category: L,
						product: P,
						href: S
					})
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(F, E, t) {
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
					return o
				},
				TS: function() {
					return a
				},
				WF: function() {
					return l
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
					return u
				},
				zq: function() {
					return s
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
				s = (0, e.R)(o.ADD_SITE, d => ({
					payload: d
				})),
				u = (0, e.R)(o.RESOLVING_START),
				l = (0, e.R)(o.RESOLVING_COMPLETE),
				m = (0, e.R)(o.SELECT_ZONE, d => ({
					payload: d
				})),
				i = (0, e.R)(o.SELECT_ACCOUNT, d => ({
					payload: d
				})),
				p = (0, e.R)(o.SELECT_PAGES_PROJECT, d => ({
					payload: d
				})),
				f = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, d => ({
					payload: d
				})),
				n = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, d => ({
					accountIds: d
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(o.SELECT_WORKER, d => ({
					payload: d
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				BV: function() {
					return e
				},
				Dz: function() {
					return f
				},
				Fj: function() {
					return u
				},
				Kt: function() {
					return m
				},
				O5: function() {
					return l
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return n
				},
				dB: function() {
					return s
				},
				s$: function() {
					return i
				}
			});
			const e = "to",
				o = "_gl",
				s = "freeTrial",
				u = "deepLinkQueryParams",
				l = "resolvedDeepLinkQueryParams",
				m = "add",
				i = "multiSkuProducts",
				p = "/:account/billing/checkout",
				f = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(F, E, t) {
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
				o = t("../react/app/redux/index.ts"),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../react/app/components/DeepLink/utils.ts"),
				l = t("../react/utils/bootstrap.ts"),
				m = t("../react/app/components/DeepLink/actions.ts"),
				i = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(i);

			function f(O) {
				for (var w = 1; w < arguments.length; w++) {
					var U = arguments[w] != null ? Object(arguments[w]) : {},
						j = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(U).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(U, Y).enumerable
					})), j.forEach(function(Y) {
						n(O, Y, U[Y])
					})
				}
				return O
			}

			function n(O, w, U) {
				return w = r(w), w in O ? Object.defineProperty(O, w, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[w] = U, O
			}

			function r(O) {
				var w = a(O, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function a(O, w) {
				if (typeof O != "object" || O === null) return O;
				var U = O[Symbol.toPrimitive];
				if (U !== void 0) {
					var j = U.call(O, w || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(O)
			}
			class d {
				constructor(w, U) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", j => {
						this.resolvers.set(j, {
							name: j,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", j => {
						const Y = this.resolvers.get(j);
						Y && (Y.endTime = Date.now(), this.resolvers.set(j, Y))
					}), n(this, "resolverCancel", j => {
						this.resolverDone(j), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", j => {
						const Y = "NO_ACTION",
							ne = {
								actionType: Y,
								startTime: 0
							};
						return {
							start: (ue = Y) => {
								const se = this.resolvers.get(j);
								ne.actionType = ue, ne.startTime = Date.now(), se && se.userActions.push(ne)
							},
							finish: (ue = Y) => {
								ne.actionType = ue, ne.endTime = Date.now()
							},
							cancel: (ue = Y) => {
								ne.actionType = ue, ne.endTime = Date.now(), this.resolverCancel(j)
							}
						}
					}), this.deepLink = w, this.legacyDeepLink = U, this.resolvers = new Map
				}
				track(w) {
					try {
						if (this._done) return;
						this._done = !0;
						const U = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: c(this.startTime, this.endTime),
								totalCpuTime: c(this.startTime, this.endTime)
							},
							j = this.resolvers.size === 0 ? U : Array.from(this.resolvers.values()).reduce((Y, ne) => {
								const ue = c(ne.startTime, ne.endTime),
									se = ne.userActions.reduce((ee, ge) => {
										const G = c(ge.startTime, ge.endTime);
										return {
											totalTime: ee.totalTime + G,
											actions: ee.actions.set(ge.actionType, G)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									re = ue - se.totalTime;
								return f({}, Y, {
									totalTime: Y.totalTime + ue,
									totalUserActionsTime: Y.totalUserActionsTime + se.totalTime,
									totalCpuTime: Y.totalCpuTime + re,
									[`${ne.name}ResolverTotalTime`]: ue,
									[`${ne.name}ResolverTotalCpuTime`]: re,
									[`${ne.name}ResolverTotalUserActionsTime`]: se.totalTime
								}, Array.from(se.actions.keys()).reduce((ee, ge) => f({}, ee, {
									[`${ne.name}Resolver/${ge}`]: se.actions.get(ge)
								}), {}))
							}, f({}, U, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						p().sendEvent(w, j)
					} catch (U) {
						console.error(U)
					}
				}
			}

			function c(O = Date.now(), w = Date.now()) {
				return (w - O) / 1e3
			}
			var g = t("../react/app/components/DeepLink/constants.ts"),
				_ = t("../react/common/hooks/useCachedState.ts"),
				y = t("../react/common/hooks/usePrevious.ts");

			function A(O) {
				for (var w = 1; w < arguments.length; w++) {
					var U = arguments[w] != null ? Object(arguments[w]) : {},
						j = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(U).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(U, Y).enumerable
					})), j.forEach(function(Y) {
						v(O, Y, U[Y])
					})
				}
				return O
			}

			function v(O, w, U) {
				return w = b(w), w in O ? Object.defineProperty(O, w, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[w] = U, O
			}

			function b(O) {
				var w = h(O, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function h(O, w) {
				if (typeof O != "object" || O === null) return O;
				var U = O[Symbol.toPrimitive];
				if (U !== void 0) {
					var j = U.call(O, w || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(O)
			}
			var M = ({
					children: O
				}) => {
					const w = (0, o.TZ)(),
						U = (0, s.useHistory)(),
						j = (0, y.Z)(U.location.pathname),
						[Y, ne] = (0, e.useState)(!0),
						[ue, se] = (0, _.j)(void 0, {
							key: g.Fj
						}),
						[re, ee] = (0, _.j)(void 0, {
							key: g.O5
						}),
						[ge, G] = (0, _.j)(void 0, {
							key: g.s$
						}),
						I = (0, l.$8)();
					let k = new URLSearchParams(U.location.search);
					const H = (0, u.mL)(U.location.pathname, k);
					let J = null,
						D = null;
					if (k.has(g.Tc) && k.delete(g.Tc), k.get(g.BV)) J = k.get(g.BV), U.location.hash && (D = U.location.hash);
					else if (ue) {
						const B = new URLSearchParams(ue);
						B.get(g.BV) && (J = B.get(g.BV), k = B)
					} else H && (k.set(g.BV, H), J = H);
					if (J && g._h.test(J)) {
						const B = k.getAll(g.Kt),
							z = JSON.stringify(B);
						B.length && z !== ge && G(z), k.has(g.Tc) && k.delete(g.Tc), k.delete(g.Kt)
					}!I && ue === void 0 && J && se(k.toString());
					const x = async () => {
						try {
							if ((0, u.I3)(J) && I) {
								ue && se(void 0), w.dispatch((0, m.r4)()), ne(!0), J && J !== re && ee(J);
								const B = await (0, u.py)(J, ne, w, U, j, new d(J, H ? `${U.location.pathname}${U.location.search}` : void 0));
								k.delete(g.BV);
								const z = k.toString();
								U.replace(A({}, U.location, {
									pathname: B,
									search: z
								}, D ? {
									hash: D
								} : {})), w.dispatch((0, m.WF)())
							}
						} catch (B) {
							w.dispatch((0, m.WF)()), console.error(B)
						} finally {
							ne(!1)
						}
					};
					return (0, e.useEffect)(() => {
						x()
					}, [U.location.pathname, U.location.search]), (Y || (0, u.I3)(J)) && I ? null : O
				},
				L = t("../react/app/components/DeepLink/reducer.ts"),
				P = t("../react/app/components/DeepLink/selectors.ts"),
				S = M
		},
		"../react/app/components/DeepLink/reducer.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return u
				},
				r: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				s = t("../react/app/components/DeepLink/actions.ts");
			const u = null,
				l = o().from({
					lastAction: u,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function m(i = l, p) {
				if (p.type === s.MF.RESOLVING_COMPLETE) return l;
				if (p.type === s.MF.RESOLVING_START) return i.set("isResolving", !0);
				if (i.isResolving) {
					if (p.type === s.MF.RESOLVING_COMPLETE) return i.set("isResolving", !1);
					if (p.type === s.MF.SET_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", p.accountIds);
					if (p.type === s.MF.DELETE_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", void 0);
					{
						let f = i;
						try {
							f = i.set("lastAction", p)
						} catch {
							f = i.set("lastAction", {
								type: p.type
							})
						}
						return f
					}
				} else return i
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return s
				},
				dd: function() {
					return o
				},
				yI: function() {
					return e
				}
			});
			const e = u => u.deepLink.lastAction,
				o = u => u.deepLink.isResolving,
				s = u => u.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				I3: function() {
					return d
				},
				X1: function() {
					return r
				},
				mL: function() {
					return A
				},
				py: function() {
					return y
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/components/DeepLink/reducer.ts"),
				s = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const u = v => v.replace(s.default.endsWithSlash, ""),
				l = v => {
					const b = u(v).split("/").slice(3);
					return b.length ? "/" + b.join("/") : ""
				},
				m = v => {
					const b = u(v).split("/").slice(2);
					return b.length ? `apps/${b.join("/")}` : "apps"
				};
			var i = t("../react/app/components/DeepLink/selectors.ts"),
				p = t("../react/app/components/DeepLink/constants.ts"),
				f = t("../react/common/validators/index.js"),
				n = t("../react/common/utils/isGuards.ts");
			const r = v => (0, f.Lb)(v) && (v.split(".").length > 1 || (0, n.v5)(v)),
				a = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				d = v => typeof v == "string" && v.startsWith("/"),
				c = (v, b) => h => new Promise((C, M) => {
					b.start();
					const L = v.subscribe(() => {
						const P = (0, i.yI)(v.getState());
						P === o.E ? (b.cancel(), L(), M("DeepLink: waitForAction out of context.")) : h(P) && (b.finish(P.type), L(), C(P))
					})
				}),
				g = (v, b, h) => (C, M) => new Promise((L, P) => {
					h.start();
					const S = b.location.pathname;
					C = new URL(C, window.location.href).pathname, S !== C && (h.cancel(), P(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${C}", but on "${S}". You need to redirect to "${C}", and unblockRouter in your Resolver, before you use this function.`));
					const O = v.subscribe(() => {
						const w = (0, i.yI)(v.getState()),
							U = b.location.pathname,
							Y = new URLSearchParams(b.location.search).get(p.BV);
						(U !== C || !!Y) && (h.cancel(), O(), P(`DeepLink: waitForPageAction user navigated away from "${C}" to "${U}${Y?b.location.search:""}"`)), w === o.E ? (h.cancel(), O(), P("DeepLink: waitForPageAction out of context.")) : M(w) && (h.finish(w.type), O(), L(w))
					})
				});

			function _(v) {
				const b = [],
					h = v.split("?")[0].split("/");
				for (let C of h) C.length !== 0 && (C.startsWith(":") ? b.push({
					value: C.substring(1),
					type: "dynamic"
				}) : b.push({
					value: C,
					type: "static"
				}));
				return b
			}
			async function y(v, b, h, C, M, L) {
				L.start();
				const P = _(v),
					O = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					w = {};
				let U = "";
				for (const [j, Y] of P.entries())
					if (Y.type === "static") U = [U, Y.value].join("/");
					else if (Y.type === "dynamic" && a.is(Y.value) && Y.value in O) {
					L.resolverStart(Y.value);
					const ne = await O[Y.value]({
						deepLink: v,
						blockRouter: () => b(!0),
						unblockRouter: () => b(!1),
						routerHistory: C,
						resolvedValues: w,
						store: h,
						referringRoute: M,
						uri: {
							currentPartIdx: j,
							parts: P
						},
						waitForAction: c(h, L.createUserActionTracker(Y.value)),
						waitForPageAction: g(h, C, L.createUserActionTracker(Y.value))
					});
					L.resolverDone(Y.value), U = [U, ne].join("/"), w[Y.value] = ne
				} else throw L.cancel(), new Error(`DeepLink: Resolver with name '${Y.value}' is not supported.`);
				return L.done(), U
			}

			function A(v, b) {
				const h = ":account",
					C = ":zone",
					M = b.get("zone");
				if (M) return b.delete("zone"), `/${h}/${C}/${M}`;
				const L = b.get("account");
				if (L) return b.delete("account"), `/${h}/${L}`;
				if (v === "/overview") return `/${h}/${C}`;
				if (v === "/apps") return `/${h}/${C}/${m(v)}`;
				const P = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const S of P) {
					const O = S.length;
					if (v.startsWith(S) && (v.length === O || v[O] === "/")) return `/${h}/${C}${v}`
				}
				switch (v) {
					case "/account/billing":
						return `/${h}/billing`;
					case "/account/subscriptions":
						return `/${h}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${h}/dns-firewall`;
					case "/account/audit-log":
						return `/${h}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				u = t("../react/app/components/SomethingWrong.jsx"),
				l = t("../utils/sentry/lastSentEventId.ts"),
				m = t("../react/utils/zaraz.ts"),
				i = t("../react/utils/url.ts"),
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				f = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(r),
				d = t("../react/common/components/Page.tsx"),
				c = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function g() {
				return (0, e.useEffect)(() => {
					a().sendEvent("new page available refresh cta")
				}, []), o().createElement(d.Z, {
					type: "narrow",
					textAlign: "center",
					title: o().createElement(p.ZC, {
						textAlign: "center",
						fontSize: 5,
						fontWeight: 400
					}, o().createElement(n.Trans, {
						id: "error.new_page_version_available.title"
					})),
					description: o().createElement(n.Trans, {
						id: "error.new_page_version_available.description"
					})
				}, o().createElement(p.ZC, null, o().createElement(p.Ei, {
					height: 116,
					src: c,
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
			const _ = ({
				sentryTag: y,
				children: A
			}) => o().createElement(s.SV, {
				beforeCapture: v => {
					m.tg === null || m.tg === void 0 || m.tg.track("page-error", {
						page: (0, i.Fl)(window.location.pathname)
					})
				},
				onError: v => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(v)
				},
				fallback: ({
					error: v,
					eventId: b
				}) => {
					var h;
					const C = l.e.getEventId() || b;
					return (v == null || (h = v.message) === null || h === void 0 ? void 0 : h.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), o().createElement(g, null)) : o().createElement(u.Z, {
						type: "page",
						error: v,
						eventId: C,
						sentryTag: y
					})
				}
			}, A)
		},
		"../react/app/components/Footer.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return G
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(i),
				f = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				r = t("../react/utils/translator.tsx"),
				a = t("../../../../node_modules/moment/moment.js"),
				d = t.n(a);
			const c = () => {
					const I = d()().format("YYYY"),
						k = H => {
							p().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: H
							})
						};
					return o().createElement(g, {
						marginTop: "auto"
					}, o().createElement(_, null, o().createElement(y, null, o().createElement(A, null, "\xA9 ", I, " Cloudflare, Inc."), o().createElement(A, null, o().createElement(v, null, o().createElement(b, {
						showOnDeskTop: !1
					}, o().createElement(h, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => k("Support")
					}, o().createElement(r.cC, {
						id: "common.support"
					}))), o().createElement(b, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => k("Privacy Policy")
					}, o().createElement(r.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(b, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => k("Terms of Use")
					}, o().createElement(r.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(b, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => k("Cookie Preferences")
					}, o().createElement(r.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(b, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => k("Trademark")
					}, o().createElement(r.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(v, null, o().createElement(b, null, o().createElement(h, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => k("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(r.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				g = (0, l.createComponent)(({
					theme: I,
					marginTop: k
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: k
				})),
				_ = (0, l.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				y = (0, l.createComponent)(({
					theme: I
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${I.space[3]}px`
					}
				})),
				A = (0, l.createComponent)(({
					theme: I
				}) => ({
					width: "100%",
					color: I.colors.white,
					fontSize: I.fontSizes[1],
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
					theme: I
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: I.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				b = (0, l.createComponent)(({
					showOnDeskTop: I = !0,
					theme: k
				}) => ({
					color: k.colors.white,
					fontSize: k.fontSizes[1],
					height: "20px",
					display: I ? "flex" : "none",
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
				h = (0, l.createStyledComponent)(({
					theme: I
				}) => ({
					textDecoration: "none",
					color: I.colors.white,
					"&:hover": {
						color: I.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var C = c,
				M = t("../react/pages/welcome/routes.ts"),
				L = t("../react/utils/cookiePreferences.ts"),
				P = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				O = () => {
					const [I, k] = (0, e.useState)(!1), H = (0, L.wV)(), J = () => {
						k(!0)
					}, D = () => {
						k(!1)
					}, x = H && H === "US" ? (0, r.ZP)("footer.cpra_cta.privacy_choices") : (0, r.ZP)("footer.cpra_cta.cookie_preferences"), B = {
						background: "transparent",
						borderRadius: "none",
						color: I ? (0, m.Yc)() ? "#ee730a" : "#003681" : (0, m.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: I ? "underline" : "none",
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
					return o().createElement(u.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: B,
						onMouseEnter: J,
						onMouseLeave: D
					}, o().createElement(u.Ei, {
						height: 15,
						src: P,
						mr: 2,
						alt: x
					}), x)
				};

			function w() {
				return w = Object.assign ? Object.assign.bind() : function(I) {
					for (var k = 1; k < arguments.length; k++) {
						var H = arguments[k];
						for (var J in H) Object.prototype.hasOwnProperty.call(H, J) && (I[J] = H[J])
					}
					return I
				}, w.apply(this, arguments)
			}

			function U(I, k) {
				if (I == null) return {};
				var H = j(I, k),
					J, D;
				if (Object.getOwnPropertySymbols) {
					var x = Object.getOwnPropertySymbols(I);
					for (D = 0; D < x.length; D++) J = x[D], !(k.indexOf(J) >= 0) && (!Object.prototype.propertyIsEnumerable.call(I, J) || (H[J] = I[J]))
				}
				return H
			}

			function j(I, k) {
				if (I == null) return {};
				var H = {},
					J = Object.keys(I),
					D, x;
				for (x = 0; x < J.length; x++) D = J[x], !(k.indexOf(D) >= 0) && (H[D] = I[D]);
				return H
			}
			const Y = (0, l.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,m.Yc)()?m.rS.colors.orange[6]:m.rS.colors.blue[4]}`
					}
				}), u.A),
				ne = (0, l.createStyledComponent)(({
					theme: I
				}) => ({
					color: I.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, f.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: I.colors.gray[4]
					}
				}), u.A),
				ue = I => {
					let {
						onClick: k
					} = I, H = U(I, ["onClick"]);
					return React.createElement(Y, w({
						onClick: J => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: H.href
							}), k && k(J)
						}
					}, H))
				},
				se = I => {
					let {
						children: k,
						target: H,
						rel: J
					} = I, D = U(I, ["children", "target", "rel"]);
					return o().createElement(ne, w({
						target: H || "_blank",
						rel: J || "noopener noreferrer"
					}, D), k)
				},
				re = (0, l.createStyledComponent)(({
					theme: I
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
							fontSize: I.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: I.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), u.Ul),
				ee = (0, l.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, f.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), u.ZC);
			var G = () => {
				const I = [M.d.root.pattern].some(H => (0, s.matchPath)(location.pathname, {
					path: H
				}));
				if ((0, n.PP)()) return o().createElement(C, null);
				if (I) return null;
				const k = new Date().getFullYear();
				return o().createElement(u.$_, {
					height: (0, f.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto"
				}, o().createElement(ee, null, o().createElement(re, null, o().createElement(u.Li, null, o().createElement(se, {
					href: "https://support.cloudflare.com"
				}, (0, r.ZP)("common.support"))), o().createElement(u.Li, null, o().createElement(se, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(u.Dr, {
					textTransform: "capitalize"
				}, (0, r.ZP)("footer.system_status")))), o().createElement(u.Li, null, o().createElement(se, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, r.ZP)("footer.careers"))), o().createElement(u.Li, null, o().createElement(se, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, r.ZP)("footer.tos_reduced"))), o().createElement(u.Li, null, o().createElement(se, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, r.ZP)("footer.security_issues"))), o().createElement(u.Li, null, o().createElement(se, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, r.ZP)("footer.privacy_policy"))), o().createElement(u.Li, null, o().createElement(O, null)), o().createElement(u.Li, null, o().createElement(u.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", k, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/components/ErrorStatus.tsx"),
				u = t("../react/utils/translator.tsx");
			const l = m => o().createElement(s.Z, m, (0, u.ZP)("error.forbidden"));
			E.Z = l
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return _
				},
				Z: function() {
					return x
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../node_modules/@cloudflare/component-button/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				f = t.n(p),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				r = t("../react/common/components/AccessControl/index.js"),
				a = t("../react/common/components/ButtonWithDropdown.tsx"),
				d = t("../react/common/components/Dropdown/index.tsx"),
				c = t("../react/utils/translator.tsx"),
				g = t("../react/common/hooks/useGate.ts");
			const _ = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				y = () => {
					const B = (0, g.Z)("super-add-button-copy-change"),
						z = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: _.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: _.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: _.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: _.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: _.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: _.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (B) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: _.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...z];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: _.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...z];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: _.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...z];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: _.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...z];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: _.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...z];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: _.EXISTING_DOMAIN,
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
								trackingEvent: _.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: _.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: _.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: _.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: _.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: _.ACCOUNT_MEMBERS,
								icon: "user-outline",
								url: "?to=/:account/members/invite",
								description: {
									id: "onboarding.add_product.account_member.description"
								},
								permissionCheck: "#member:edit"
							}]
					}
				},
				A = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: _.EXISTING_DOMAIN,
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
					trackingEvent: _.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: _.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: _.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: _.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: _.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: _.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var v = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function b(B) {
				for (var z = 1; z < arguments.length; z++) {
					var Z = arguments[z] != null ? Object(arguments[z]) : {},
						W = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(Z).filter(function(q) {
						return Object.getOwnPropertyDescriptor(Z, q).enumerable
					})), W.forEach(function(q) {
						h(B, q, Z[q])
					})
				}
				return B
			}

			function h(B, z, Z) {
				return z = C(z), z in B ? Object.defineProperty(B, z, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[z] = Z, B
			}

			function C(B) {
				var z = M(B, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function M(B, z) {
				if (typeof B != "object" || B === null) return B;
				var Z = B[Symbol.toPrimitive];
				if (Z !== void 0) {
					var W = Z.call(B, z || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(B)
			}

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(B) {
					for (var z = 1; z < arguments.length; z++) {
						var Z = arguments[z];
						for (var W in Z) Object.prototype.hasOwnProperty.call(Z, W) && (B[W] = Z[W])
					}
					return B
				}, L.apply(this, arguments)
			}

			function P(B, z) {
				if (B == null) return {};
				var Z = S(B, z),
					W, q;
				if (Object.getOwnPropertySymbols) {
					var de = Object.getOwnPropertySymbols(B);
					for (q = 0; q < de.length; q++) W = de[q], !(z.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(B, W) || (Z[W] = B[W]))
				}
				return Z
			}

			function S(B, z) {
				if (B == null) return {};
				var Z = {},
					W = Object.keys(B),
					q, de;
				for (de = 0; de < W.length; de++) q = W[de], !(z.indexOf(q) >= 0) && (Z[q] = B[q]);
				return Z
			}
			const O = B => {
					let {
						title: z,
						trackingEvent: Z,
						icon: W,
						url: q,
						description: de,
						disabled: fe
					} = B, ce = P(B, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(w, L({
						to: !fe && q || "#",
						"aria-disabled": fe,
						onClick: () => {
							f().sendEvent(Z, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, ce), o().createElement(u.ZC, {
						display: "flex"
					}, o().createElement(s.J, {
						type: W,
						size: 24,
						mr: 2,
						mt: 1
					}), o().createElement(u.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, o().createElement(u.ZC, {
						fontSize: 3
					}, o().createElement(c.cC, z)), o().createElement(u.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(c.cC, de)))))
				},
				w = (0, n.createStyledComponent)(({
					theme: B
				}) => {
					const z = {
						cursor: "pointer",
						backgroundColor: (0, m.Yc)() ? B.colors.gray[8] : B.colors.gray[9],
						color: B.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: B.colors.background,
						color: B.colors.gray[2],
						fontSize: B.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': z,
						':focus-within:not([aria-disabled="true"])': b({}, z, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: B.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, v.Link);
			var U = O;

			function j() {
				return j = Object.assign ? Object.assign.bind() : function(B) {
					for (var z = 1; z < arguments.length; z++) {
						var Z = arguments[z];
						for (var W in Z) Object.prototype.hasOwnProperty.call(Z, W) && (B[W] = Z[W])
					}
					return B
				}, j.apply(this, arguments)
			}

			function Y(B) {
				for (var z = 1; z < arguments.length; z++) {
					var Z = arguments[z] != null ? Object(arguments[z]) : {},
						W = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(Z).filter(function(q) {
						return Object.getOwnPropertyDescriptor(Z, q).enumerable
					})), W.forEach(function(q) {
						ne(B, q, Z[q])
					})
				}
				return B
			}

			function ne(B, z, Z) {
				return z = ue(z), z in B ? Object.defineProperty(B, z, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[z] = Z, B
			}

			function ue(B) {
				var z = se(B, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function se(B, z) {
				if (typeof B != "object" || B === null) return B;
				var Z = B[Symbol.toPrimitive];
				if (Z !== void 0) {
					var W = Z.call(B, z || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(B)
			}

			function re(B, z) {
				if (B == null) return {};
				var Z = ee(B, z),
					W, q;
				if (Object.getOwnPropertySymbols) {
					var de = Object.getOwnPropertySymbols(B);
					for (q = 0; q < de.length; q++) W = de[q], !(z.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(B, W) || (Z[W] = B[W]))
				}
				return Z
			}

			function ee(B, z) {
				if (B == null) return {};
				var Z = {},
					W = Object.keys(B),
					q, de;
				for (de = 0; de < W.length; de++) q = W[de], !(z.indexOf(q) >= 0) && (Z[q] = B[q]);
				return Z
			}
			const ge = "GLOBAL_ADD_DROPDOWN",
				G = (0, n.createStyledComponent)(({
					theme: B
				}) => ({
					"background-color": B.colors.blue[5]
				}), l.zx),
				I = ({
					disableProducts: B
				}) => {
					const z = y();
					return (0, e.useEffect)(() => (f().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						f().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), o().createElement(a.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200,
						minWidth: 240
					}, z.map(Z => {
						const W = Z || {},
							{
								disableOn: q,
								permissionCheck: de
							} = W,
							fe = re(W, ["disableOn", "permissionCheck"]),
							ce = q && B[q],
							Ee = Y({}, fe, {
								disabled: ce
							});
						return de ? o().createElement(r.Z, {
							key: Z.title.id,
							edit: de
						}, ({
							isEditable: Le
						}) => Le && o().createElement(U, Ee)) : o().createElement(U, j({
							key: Z.url
						}, Ee))
					}))
				},
				k = ({
					disableProducts: B,
					topNavType: z
				}) => {
					const Z = () => (0, i.tq)() || z === "icon-only" ? o().createElement(u.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, o().createElement(G, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : z === "text-icon" || z === "icon-only-with-add-button" ? o().createElement(l.zx, {
						type: "primary",
						mr: z === "icon-only-with-add-button" ? 3 : 0
					}, o().createElement(o().Fragment, null, o().createElement(s.J, {
						label: "plus",
						type: "plus"
					}), " ", o().createElement(c.cC, {
						id: "common.add"
					}))) : o().createElement(l.zx, {
						type: "primary"
					}, o().createElement(c.cC, {
						id: "common.add"
					}), " ", o().createElement(s.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return o().createElement(H, {
						role: "group",
						"data-testid": ge
					}, o().createElement(d.Lt, {
						trigger: z === "baseline" ? o().createElement(J, null, o().createElement(s.J, {
							label: "plus",
							type: "plus"
						}), !(0, i.tq)() && o().createElement(o().Fragment, null, o().createElement(c.cC, {
							id: "common.add"
						}), " ", o().createElement(s.J, {
							label: "arrow",
							type: "caret-down"
						}))) : Z(),
						menu: o().createElement(I, {
							disableProducts: B
						})
					}))
				},
				H = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				J = (0, n.createStyledComponent)(({
					theme: B
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: B.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, m.Yc)() ? B.colors.gray[1] : B.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, m.Yc)() ? B.colors.gray[8] : B.colors.gray[9]
					}
				}), u.zx);
			var D = k,
				x = D
		},
		"../react/app/components/LoadingSuspense.tsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../react/utils/translator.tsx"),
				m = t("../react/app/components/ErrorStatus.tsx"),
				i = t("../react/common/components/EmptyPage.jsx"),
				p = t("../react/common/hooks/suspenseHelpers.ts");

			function f(a) {
				const [d, c] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const g = window.setTimeout(() => c(!0), a);
					return () => window.clearTimeout(g)
				}, []), d
			}
			const n = ({
					loadingTimeout: a = 1e3,
					stillLoadingTimeout: d = 9e3
				}) => {
					const c = f(a),
						g = f(d);
					if ((0, p.nW)(), !c && !g) return o().createElement(i.Z, null);
					const _ = g ? o().createElement(l.cC, {
						id: "common.still_loading"
					}) : c ? o().createElement(l.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(m.Z, {
						size: 5
					}, o().createElement(u.ZC, {
						mr: 3
					}, o().createElement(s.g, {
						size: "2x"
					})), _)
				},
				r = ({
					children: a
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(n, null)
				}, a);
			E.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				C8: function() {
					return p
				},
				Sp: function() {
					return r
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
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = "/persistence/user",
				u = async () => {
					try {
						return await (await e.get(s, {
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, l = async a => {
					try {
						return await (await e.get(`/accounts/${a}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, m = async (a, d) => {
					try {
						return await (await e.post(`${s}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: a,
								accountId: d
							}),
							hideErrorAlert: !0
						})).body
					} catch (c) {
						return console.error(c), []
					}
				}, i = async (a, d) => {
					try {
						return await http.post(`/accounts/${a}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: d
							}),
							hideErrorAlert: !0
						}), !0
					} catch (c) {
						return console.error(c), !1
					}
				}, p = async a => {
					try {
						return await (await e.post(s, {
							body: JSON.stringify({
								darkMode: a
							})
						})).body
					} catch (d) {
						console.error(d)
					}
				}, f = async a => {
					try {
						return await (await e.post(`${s}/recents`, {
							body: JSON.stringify(a),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, n = async a => {
					try {
						return await (await e.post(`${s}/viewed-changes`, {
							body: JSON.stringify(a),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						throw console.error(d), d
					}
				}, r = async a => {
					try {
						return await (await e.post(s + "/flags", {
							body: JSON.stringify(a)
						})).body
					} catch (d) {
						throw console.error(d), d
					}
				}
		},
		"../react/app/components/Persistence/hooks.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				y: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/components/Persistence/index.tsx");
			const u = () => (0, e.useContext)(s.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				Wl: function() {
					return f
				},
				lp: function() {
					return A
				},
				Z_: function() {
					return b
				},
				r7: function() {
					return U
				},
				Tv: function() {
					return ge
				},
				yZ: function() {
					return h.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(u),
				m = t("../react/utils/bootstrap.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/app/components/Persistence/api.ts");
			const f = 10;
			var n = t("../react/common/hooks/useActiveState.ts"),
				r = t("../react/common/hooks/useLoadingState.ts");

			function a(G) {
				for (var I = 1; I < arguments.length; I++) {
					var k = arguments[I] != null ? Object(arguments[I]) : {},
						H = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(k).filter(function(J) {
						return Object.getOwnPropertyDescriptor(k, J).enumerable
					})), H.forEach(function(J) {
						d(G, J, k[J])
					})
				}
				return G
			}

			function d(G, I, k) {
				return I = c(I), I in G ? Object.defineProperty(G, I, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[I] = k, G
			}

			function c(G) {
				var I = g(G, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function g(G, I) {
				if (typeof G != "object" || G === null) return G;
				var k = G[Symbol.toPrimitive];
				if (k !== void 0) {
					var H = k.call(G, I || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(G)
			}
			const _ = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: [],
					flags: {
						hasEnabledSecurityNavigation: !1
					}
				},
				y = a({}, _, {
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
						toggleSecurityNavigation: () => null
					}
				}),
				A = (0, e.createContext)(y),
				v = A.Consumer,
				b = ({
					children: G,
					onDarkModeChangeCb: I
				}) => {
					const [k, H] = (0, e.useState)(_), [J, D] = (0, e.useState)(y.isLoading), [x, B] = (0, r.$)(), z = (0, m.$8)(), Z = (0, s.p4)(ce => (0, i.wH)(ce)), [, W] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						z ? (0, p.yl)().then(ce => {
							if (ce) {
								var Ee;
								H(ce), W(ce == null || (Ee = ce.flags) === null || Ee === void 0 ? void 0 : Ee.hasEnabledSecurityNavigation), l().identify({
									hasEnabledSecurityNavigation: ce.flags.hasEnabledSecurityNavigation
								}), I(ce.darkMode)
							}
						}).finally(() => D(!1)) : D(!1)
					}, [z]);
					const q = (ce, Ee) => !!k.favorites.find(Le => Le.type === "zone" && Le.name === ce && Le.accountId === Ee),
						de = f - k.favorites.length,
						fe = ce => k.favorites.filter(Le => Le.type === "zone" && Le.accountId === ce).length < f;
					return o().createElement(A.Provider, {
						value: a({}, k, {
							isLoading: J,
							remainingStarSlots: de,
							isUpdatingFlags: x,
							actions: {
								canAccountStarZone: fe,
								isZoneStarred: q,
								starZone: async (ce, Ee) => {
									var Le;
									const Ae = !q(ce, Ee),
										we = fe(Ee);
									if (Ae && !we) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Re = await (0, p.lt)(ce, Ee);
									l().sendEvent("click star zone", {
										isStarring: Ae,
										totalStarredZones: Re.filter(Se => Se.accountId === Ee && Se.type === "zone").length,
										totalZones: Z == null || (Le = Z.paginationData) === null || Le === void 0 ? void 0 : Le.info.total_count
									}), H(a({}, k, {
										favorites: Re
									}))
								},
								toggleSecurityNavigation: async ce => {
									B(async () => {
										await (0, p.Sp)({
											hasEnabledSecurityNavigation: ce
										})
									}), l().identify({
										hasEnabledSecurityNavigation: ce
									}), W(ce), H(a({}, k, {
										flags: {
											hasEnabledSecurityNavigation: ce
										}
									}))
								},
								setDarkMode: async ce => {
									const Ee = await (0, p.C8)(ce);
									H(Ee), I(Ee.darkMode)
								},
								logRouteVisited: async ce => {
									var Ee;
									const Le = await (0, p.n)(ce);
									H((Ee = Le) !== null && Ee !== void 0 ? Ee : a({}, k))
								},
								viewChange: async ce => {
									const Ee = await (0, p.m6)(ce);
									H(a({}, k, {
										viewedChanges: Ee
									}))
								}
							}
						})
					}, G)
				};
			var h = t("../react/app/components/Persistence/hooks.ts"),
				C = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				M = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(G) {
					for (var I = 1; I < arguments.length; I++) {
						var k = arguments[I];
						for (var H in k) Object.prototype.hasOwnProperty.call(k, H) && (G[H] = k[H])
					}
					return G
				}, L.apply(this, arguments)
			}

			function P(G, I) {
				if (G == null) return {};
				var k = S(G, I),
					H, J;
				if (Object.getOwnPropertySymbols) {
					var D = Object.getOwnPropertySymbols(G);
					for (J = 0; J < D.length; J++) H = D[J], !(I.indexOf(H) >= 0) && (!Object.prototype.propertyIsEnumerable.call(G, H) || (k[H] = G[H]))
				}
				return k
			}

			function S(G, I) {
				if (G == null) return {};
				var k = {},
					H = Object.keys(G),
					J, D;
				for (D = 0; D < H.length; D++) J = H[D], !(I.indexOf(J) >= 0) && (k[J] = G[J]);
				return k
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
			var U = G => {
					let {
						isStarred: I,
						size: k = 16
					} = G, H = P(G, ["isStarred", "size"]);
					const J = O[(0, C.Yc)() ? "dark" : "light"];
					return o().createElement(M.J, L({
						type: I ? "star" : "star-outline",
						color: I ? J.gold : J.gray,
						size: k
					}, H))
				},
				j = t("../node_modules/@cloudflare/elements/es/index.js");

			function Y(G) {
				for (var I = 1; I < arguments.length; I++) {
					var k = arguments[I] != null ? Object(arguments[I]) : {},
						H = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(k).filter(function(J) {
						return Object.getOwnPropertyDescriptor(k, J).enumerable
					})), H.forEach(function(J) {
						ne(G, J, k[J])
					})
				}
				return G
			}

			function ne(G, I, k) {
				return I = ue(I), I in G ? Object.defineProperty(G, I, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[I] = k, G
			}

			function ue(G) {
				var I = se(G, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function se(G, I) {
				if (typeof G != "object" || G === null) return G;
				var k = G[Symbol.toPrimitive];
				if (k !== void 0) {
					var H = k.call(G, I || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(G)
			}
			const re = {
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
			var ge = (0, e.forwardRef)(({
				featurePreview: G = !1,
				isStarred: I,
				onClickFn: k,
				isDisabled: H,
				testId: J,
				buttonText: D,
				size: x = "large",
				variant: B = "pill"
			}, z) => {
				const [Z, W] = (0, e.useState)(!1), q = re[(0, C.Yc)() ? "dark" : "light"][I && !G ? "active" : "default"], de = Y({}, x === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, x === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, x === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), fe = {
					pill: "50vh",
					button: 4
				};
				return o().createElement(j.zx, {
					onMouseEnter: () => W(!0),
					onMouseLeave: () => W(!1),
					innerRef: z,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: de.paddingRight,
					gap: 1,
					pl: de.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: fe[B],
					border: "1px solid",
					cursor: G || H ? "default" : "pointer",
					backgroundColor: Z ? q.bgHover : q.bg,
					color: q.text,
					borderColor: q.border,
					onClick: k,
					opacity: H ? .5 : 1,
					disabled: H,
					fontSize: de.fontSize,
					height: de.height,
					"data-testid": J
				}, o().createElement(U, {
					isStarred: G ? !1 : I,
					size: de.starIconSize
				}), D)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$n: function() {
					return d
				},
				IU: function() {
					return g
				},
				Wq: function() {
					return M
				},
				dL: function() {
					return _
				},
				fO: function() {
					return C
				},
				gw: function() {
					return P
				},
				hv: function() {
					return c
				},
				iY: function() {
					return r
				},
				jq: function() {
					return S
				},
				o_: function() {
					return v
				},
				us: function() {
					return h
				},
				wB: function() {
					return a
				},
				zJ: function() {
					return b
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/utils/zoneLevelAccess.ts"),
				m = t("../react/pages/stream/selectors.ts"),
				i = t("../react/pages/home/domain-registration/selectors.ts"),
				p = t("../react/pages/images/selectors.ts"),
				f = t("../react/pages/r2/selectors.ts");
			const n = O => !!(0, l.b)(O),
				r = O => n(O) ? (0, e.hT)(O) : !0,
				a = (O, w, U, j = "read") => {
					const Y = (0, s.nA)(O);
					return n(O) ? (0, e.WL)(O, (0, e.W9)(U, e.ZZ[j]), (0, e.j)(Y == null ? void 0 : Y.id)) : (0, u.Yj)(O)(w)[j]
				},
				d = (O, w, U, j = "read") => {
					const Y = (0, s.nA)(O),
						ne = e.zs.includes(U);
					return n(O) ? (0, e.WL)(O, ne ? U : (0, e.my)(U, e.ZZ[j === "edit" ? "update" : j]), (0, e.j)(Y == null ? void 0 : Y.id)) : (0, u.Yj)(O)(w)[j === "update" ? "edit" : j]
				},
				c = O => !!(0, m._Q)(O),
				g = O => (0, p.pT)(O),
				_ = O => (0, p.pT)(O) && (0, p.GH)(O),
				y = O => sourcingKitEnabledSelector(O),
				A = O => !!r2EnabledSelector(O),
				v = O => (0, f.Mv)(O),
				b = O => (0, o.$f)(O, "rulesets.magic_transit_allowed"),
				h = O => (0, o.$f)(O, "flowtrackd.magic_custom_config_allowed"),
				C = O => (0, o.$f)(O, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				M = O => (0, u.Le)(O, "ddos_protection", "l4_rulesets"),
				L = O => hasAccountEntitlements(O, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				P = O => (0, i.HO)(O),
				S = O => !(0, o.yD)(O) && !!d(O, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(s),
				l = t("../../../../node_modules/prop-types/index.js"),
				m = t.n(l),
				i = t("webpack/sharing/consume/default/react-redux/react-redux"),
				p = t.n(i),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(f),
				r = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				d = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				c = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				g = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				y = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				A = t.n(y),
				v = t("../react/common/actions/membershipActions.ts"),
				b = t("../react/utils/url.ts"),
				h = t("../react/app/components/Footer.tsx");

			function C(re) {
				for (var ee = 1; ee < arguments.length; ee++) {
					var ge = arguments[ee] != null ? Object(arguments[ee]) : {},
						G = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(ge).filter(function(I) {
						return Object.getOwnPropertyDescriptor(ge, I).enumerable
					})), G.forEach(function(I) {
						M(re, I, ge[I])
					})
				}
				return re
			}

			function M(re, ee, ge) {
				return ee = L(ee), ee in re ? Object.defineProperty(re, ee, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : re[ee] = ge, re
			}

			function L(re) {
				var ee = P(re, "string");
				return typeof ee == "symbol" ? ee : String(ee)
			}

			function P(re, ee) {
				if (typeof re != "object" || re === null) return re;
				var ge = re[Symbol.toPrimitive];
				if (ge !== void 0) {
					var G = ge.call(re, ee || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ee === "string" ? String : Number)(re)
			}
			const S = (0, r.createComponent)(({
					type: re
				}) => ({
					height: re !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				O = (0, r.createComponent)(({
					theme: re,
					margin: ee,
					size: ge = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: re.colors.gray[3],
					height: ee ? "auto" : "100%",
					padding: ee ? 0 : re.space[ge > 1 ? ge - 2 : 0],
					margin: ee,
					justifyContent: "center",
					alignItems: "center"
				})),
				w = (0, r.createComponent)(() => ({
					textAlign: "left"
				})),
				U = (0, r.createComponent)(() => ({
					textAlign: "right"
				})),
				j = (0, r.createComponent)(({
					theme: re
				}) => ({
					fontSize: re.fontSizes[6]
				})),
				Y = (0, r.createComponent)(({
					theme: re
				}) => ({
					fontSize: re.fontSizes[4]
				})),
				ne = (0, r.createComponent)(({
					theme: re
				}) => ({
					fontSize: re.fontSizes[3]
				})),
				ue = (0, r.createComponent)(({
					theme: re
				}) => ({
					width: "100%",
					height: 125,
					marginTop: re.space[4],
					padding: re.space[2]
				}), "textarea");
			class se extends o().Component {
				constructor(...ee) {
					super(...ee);
					M(this, "state", {
						value: "",
						submitted: !1
					}), M(this, "handleTextareaChange", ge => {
						this.setState({
							value: ge.target.value
						})
					}), M(this, "sendErrToSentry10", async () => {
						try {
							var ge, G, I, k;
							const H = ((ge = window) === null || ge === void 0 || (G = ge.bootstrap) === null || G === void 0 || (I = G.data) === null || I === void 0 || (k = I.user) === null || k === void 0 ? void 0 : k.id) || "Unknown",
								J = this.props.eventId || d.eW(),
								D = {
									name: H,
									email: `${H}@userid.com`,
									comments: this.state.value,
									eventId: J,
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
								body: JSON.stringify(D)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (H) {
							console.error(H)
						}
					}), M(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), M(this, "renderContent", ge => o().createElement(f.I18n, null, G => o().createElement(S, {
						type: ge
					}, o().createElement(O, null, o().createElement(w, null, o().createElement(j, null, G.t("error.internal_issues")), o().createElement(Y, null, G.t("error.help_us")), o().createElement(ue, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: I => this.handleTextareaChange(I),
						disabled: this.state.submitted,
						placeholder: G.t("error.give_feedback")
					}), o().createElement(U, null, !this.state.submitted && o().createElement(a.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, G.t("common.submit")), this.state.submitted && o().createElement(ne, null, G.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: ee,
						sentryTag: ge,
						membershipsList: G
					} = this.props;
					console.error(`SomethingWrong: ${ee}`);
					let I = "";
					const k = (0, b.e1)();
					if (k) {
						var H;
						const D = await G({
								parameters: {
									status: "accepted"
								}
							}),
							x = D == null || (H = D.find(B => B.id === k)) === null || H === void 0 ? void 0 : H.roles;
						x && x.length && (I = x.join(", "))
					}
					const J = `ErrorBoundary - ${ee}`;
					c.Tb(J, {
						tags: {
							errorBoundary: ge,
							normalizedPath: (0, b.Fl)(window.location.pathname),
							roles: I.length ? I : void 0
						}
					}), A().sendEvent("something wrong", {
						error: ee,
						roles: I.length ? I : void 0
					})
				}
				render() {
					const {
						type: ee
					} = this.props;
					return ee === "fullscreen" ? o().createElement("div", null, o().createElement(g.h4, null, o().createElement(s.Link, {
						to: "/"
					}, o().createElement(_.TR, null))), this.renderContent(ee), o().createElement(h.Z, null)) : this.renderContent(ee)
				}
			}
			se.propTypes = {
				type: m().oneOf(["fullscreen", "page"]),
				error: m().oneOfType([m().string, m().object]),
				eventId: m().string,
				sentryTag: m().string,
				membershipsList: m().func
			}, E.Z = (0, i.connect)(() => ({}), {
				membershipsList: v.YT
			})(se)
		},
		"../react/app/providers/storeContainer.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				bh: function() {
					return U
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				o = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				s = t.n(o),
				u = t("../../../../node_modules/redux-thunk/es/index.js"),
				l = t("../../../../node_modules/redux-persist/es/index.js"),
				m = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				i = t("../react/app/rootReducer.js"),
				p = t("../react/app/redux/normalizer.js"),
				f = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				r = t("../react/app/reducerRegistry.js"),
				a = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				d = t("../react/common/sagas/index.js"),
				c = t("../react/app/redux/processActionMiddleware.js"),
				g = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				_ = t("../../../../node_modules/is-promise/index.js"),
				y = t.n(_);

			function A(j) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var ne = arguments[Y] != null ? Object(arguments[Y]) : {},
						ue = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(ne).filter(function(se) {
						return Object.getOwnPropertyDescriptor(ne, se).enumerable
					})), ue.forEach(function(se) {
						v(j, se, ne[se])
					})
				}
				return j
			}

			function v(j, Y, ne) {
				return Y = b(Y), Y in j ? Object.defineProperty(j, Y, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[Y] = ne, j
			}

			function b(j) {
				var Y = h(j, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function h(j, Y) {
				if (typeof j != "object" || j === null) return j;
				var ne = j[Symbol.toPrimitive];
				if (ne !== void 0) {
					var ue = ne.call(j, Y || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(j)
			}
			const C = {
					key: "cf-redux-store",
					storage: m.Z,
					whitelist: ["accountAccess", "invite"]
				},
				M = (0, a.ZP)(),
				P = [({
					dispatch: j
				}) => Y => ne => y()(ne) ? ne.then(ue => j(ue)) : Y(ne), M, u.Z, c.Z, p.qR],
				S = j => (0, l.Wq)(C, A({}, i.Z, j));

			function O() {
				const j = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					ne = e.compose((0, e.applyMiddleware)(...P), f.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					ue = {},
					se = (0, e.createStore)(S(r.Z.getReducers()), ue, ne);
				M.run(d.Z), (0, l.p5)(se);
				const ee = (t.g.bootstrap || {}).data || {};
				return se.dispatch((0, g.mW)("user", ee.user)), se
			}
			let w;
			r.Z.setChangeListener(j => {
				var Y;
				w && ((Y = w) === null || Y === void 0 ? void 0 : Y.replaceReducer) && (w.replaceReducer(S(j)), (0, l.p5)(w))
			});

			function U() {
				return w || (w = O()), w
			}
		},
		"../react/app/redux/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				TZ: function() {
					return s
				},
				UM: function() {
					return l
				},
				ZS: function() {
					return u
				},
				p4: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e);
			const s = () => (0, e.useStore)(),
				u = () => s().getState(),
				l = () => (0, e.useDispatch)(),
				m = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				$J: function() {
					return a
				},
				Oy: function() {
					return r
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
				s = t.n(o);

			function u(c) {
				for (var g = 1; g < arguments.length; g++) {
					var _ = arguments[g] != null ? Object(arguments[g]) : {},
						y = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(_).filter(function(A) {
						return Object.getOwnPropertyDescriptor(_, A).enumerable
					})), y.forEach(function(A) {
						l(c, A, _[A])
					})
				}
				return c
			}

			function l(c, g, _) {
				return g = m(g), g in c ? Object.defineProperty(c, g, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[g] = _, c
			}

			function m(c) {
				var g = i(c, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function i(c, g) {
				if (typeof c != "object" || c === null) return c;
				var _ = c[Symbol.toPrimitive];
				if (_ !== void 0) {
					var y = _.call(c, g || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(c)
			}
			const p = u({}, o),
				f = (c, g, _, y = {}) => {
					const A = c === "delete" ? "del" : c.toLowerCase();
					return _ && A !== "del" && (y.body = _), p[A](g, y)
				},
				n = (c, g) => (c.meta.params = g, c),
				r = (c, g, _, y, {
					body: A = {}
				}) => {
					const {
						result: v,
						messages: b,
						result_info: h
					} = A, C = Object.values(g);
					if (c.meta.method === "delete") {
						const M = C[C.length - 1];
						c.meta.id = typeof M == "object" ? M.id : M
					}
					return c.payload = v, b && (c.meta.messages = b), C.length && (c.meta.params = g), h && (c.meta.paginationData = {
						info: h,
						actionParameters: C,
						options: _[0],
						insertionOffset: 0
					}), c
				},
				a = (c, g, _, y, A) => (c.payload = A && A.body && A.body.errors, c.meta.messages = A && A.body && A.body.messages, c.meta.params = g, c.apiError = A, c);

			function d(c, g, _, y) {
				const A = (0, e.RM)(c, g, _, y).apiFetch(f).on("start", n).on("success", r).on("error", a),
					v = A.mock;
				return A.mock = b => (v((...h) => {
					const C = b(...h);
					return C && typeof C == "object" && "result" in C ? C : {
						result: C
					}
				}), A), A
			}
		},
		"../react/app/redux/normalizer.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				P1: function() {
					return f
				},
				jQ: function() {
					return i
				},
				qR: function() {
					return n
				},
				uc: function() {
					return p
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				o = t("../react/pages/workers/entityTypes.ts"),
				s = t("../react/pages/email/types.ts"),
				u = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				m = t.n(l);
			const i = l.static.from([{
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
					entityType: s.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: s.BB.rule,
					idProp: "tag"
				}, {
					entityType: s.BB.rules,
					to: s.BB.rule
				}, {
					entityType: s.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: s.BB.dstAddresses,
					to: s.BB.dstAddress
				}, {
					entityType: s.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: s.BB.dnsRecords,
					to: s.BB.dnsRecord
				}, {
					entityType: s.BB.zone,
					idProp: "tag"
				}]),
				p = r => r.entities,
				f = (...r) => (0, u.P1)(i, p, ...r),
				n = (0, u.QB)(i)
		},
		"../react/app/redux/utils.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return s
				},
				_: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const o = u => (l, m, i) => (0, e.SC)(l, m, i, {
					hideErrorAlert: !0
				}).catch(u),
				s = u => l => {
					if (l.status === u) return l;
					throw l
				}
		},
		"../react/common/actionTypes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
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
					return f
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return s
				},
				Yc: function() {
					return r
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
				o = "NOTIFICATION_CLOSE",
				s = "MODAL_OPEN",
				u = "MODAL_CLOSE",
				l = "TOGGLE_ON",
				m = "TOGGLE_OFF",
				i = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				f = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/activeActions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				I: function() {
					return o
				},
				n: function() {
					return s
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = (u, l) => ({
					type: e.HI,
					activeKey: u,
					activeValue: l
				}),
				s = u => ({
					type: e.s1,
					activeKey: u
				})
		},
		"../react/common/actions/membershipActions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AX: function() {
					return a
				},
				YT: function() {
					return f
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

			function s(d) {
				for (var c = 1; c < arguments.length; c++) {
					var g = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(g).filter(function(y) {
						return Object.getOwnPropertyDescriptor(g, y).enumerable
					})), _.forEach(function(y) {
						u(d, y, g[y])
					})
				}
				return d
			}

			function u(d, c, g) {
				return c = l(c), c in d ? Object.defineProperty(d, c, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[c] = g, d
			}

			function l(d) {
				var c = m(d, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function m(d, c) {
				if (typeof d != "object" || d === null) return d;
				var g = d[Symbol.toPrimitive];
				if (g !== void 0) {
					var _ = g.call(d, c || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(d)
			}
			const i = d => {
					const c = d.payload.map(g => s({}, g, {
						membershipId: g.id,
						id: g.account.id
					}));
					return s({}, d, {
						payload: c
					})
				},
				p = d => {
					const c = i(d);
					return Array.isArray(c.payload) ? s({}, d, {
						payload: c.payload[0]
					}) : s({}, d, {
						payload: null
					})
				},
				f = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", i),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...d) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: d
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function(F, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				closeModal: function() {
					return u
				},
				openModal: function() {
					return s
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function s(l, m, i = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: l,
						props: m
					},
					options: i
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
		"../react/common/actions/notificationsActions.ts": function(F, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				add: function() {
					return l
				},
				error: function() {
					return f
				},
				info: function() {
					return i
				},
				success: function() {
					return m
				},
				warn: function() {
					return p
				}
			});
			var e = t("../react/common/actionTypes.ts");

			function o(n) {
				return {
					type: e.Ng,
					notification: n
				}
			}

			function s(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let u = 0;

			function l(n, r, a = {}) {
				return a = a || {},
					function(d) {
						let c = u++,
							g = {
								id: c,
								type: n,
								message: r,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									d(s(c)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						d(o(g))
					}
			}

			function m(n, r) {
				return l("success", n, r)
			}

			function i(n, r) {
				return l("info", n, r)
			}

			function p(n, r) {
				return l("warning", n, r)
			}

			function f(n, r) {
				return l("error", n, r)
			}
		},
		"../react/common/actions/userActions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				BT: function() {
					return i
				},
				Ut: function() {
					return y
				},
				V_: function() {
					return A
				},
				Y9: function() {
					return g
				},
				Z0: function() {
					return b
				},
				mp: function() {
					return _
				},
				r3: function() {
					return v
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/app/redux/utils.ts");

			function s(h) {
				for (var C = 1; C < arguments.length; C++) {
					var M = arguments[C] != null ? Object(arguments[C]) : {},
						L = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(M).filter(function(P) {
						return Object.getOwnPropertyDescriptor(M, P).enumerable
					})), L.forEach(function(P) {
						u(h, P, M[P])
					})
				}
				return h
			}

			function u(h, C, M) {
				return C = l(C), C in h ? Object.defineProperty(h, C, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[C] = M, h
			}

			function l(h) {
				var C = m(h, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function m(h, C) {
				if (typeof h != "object" || h === null) return h;
				var M = h[Symbol.toPrimitive];
				if (M !== void 0) {
					var L = M.call(h, C || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(h)
			}
			const i = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				f = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				d = (0, e.C)("user").delete`/user/two_factor_authentication`,
				c = (0, e.C)("user").put`/user/email`;

			function g(...h) {
				return c(...h)
			}
			const _ = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				y = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(h => s({}, h, {
					body: s({}, h.body, {
						result: {}
					})
				}))),
				A = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				v = (0, e.C)("userDetails").get`/user/details`,
				b = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(F, E, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/utils/zoneLevelAccess.ts");
			const s = ({
				legacyPermission: u,
				canAccess: l,
				children: m,
				render: i
			}) => {
				const p = !!(0, o.P)();
				let f;
				typeof l == "boolean" && l !== void 0 && p ? f = {
					read: l,
					list: l,
					create: l,
					update: l,
					delete: l,
					sign: l
				} : f = (0, e.Z)(u);
				const n = i || m;
				return n ? n(f) : null
			};
			E.Z = s
		},
		"../react/common/components/AccessCheck/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
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
					return r
				},
				jX: function() {
					return i
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
				o = "com.cloudflare.api.account.",
				s = "com.cloudflare.edge.",
				u = "com.cloudflare.api.account.zone.",
				l = ["com.cloudflare.api.app.manage"];
			let m = function(a) {
				return a.read = "read", a.list = "list", a.create = "create", a.update = "update", a.delete = "delete", a.sign = "sign", a.refresh = "refresh", a
			}({});
			const i = (a, d) => `${o}${a?a+".":""}${d}`,
				p = (a, d) => `${u}${a?a+".":""}${d}`,
				f = (a, d) => `${s}${a}.${d}`,
				n = (a = "") => `${o}${a}`,
				r = (a = "") => `${u}${a}`
		},
		"../react/common/components/AccessCheck/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				L8: function() {
					return u.L8
				},
				W9: function() {
					return u.W9
				},
				WL: function() {
					return s.WL
				},
				ZP: function() {
					return o.Z
				},
				ZZ: function() {
					return u.ZZ
				},
				hT: function() {
					return s.hT
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
				o = t("../react/common/components/AccessCheck/AccessCheck.tsx"),
				s = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");

			function m(i) {
				const {
					read: p,
					edit: f
				} = (0, s.p4)(u.Yj)(i);
				let n = f;
				if (i != "zone_versioning") {
					const a = (0, s.p4)(l.G);
					(a == null ? void 0 : a.isLocked) && (n = !1)
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
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				WL: function() {
					return a
				},
				hT: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/pages/home/members/utils.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");
			const m = {
					allow: "allow",
					deny: "deny"
				},
				i = 0,
				p = 1,
				f = 2,
				n = 3;

			function r(C, M, L, P) {
				let S = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					O;
				for (O in S) S[O] = a(C, `${M}.${O}`, L, P);
				return S
			}

			function a(C, M, L, P) {
				var S;
				if (d(M) && !c(M)) {
					const Y = (0, l.G)(C);
					if (Y == null ? void 0 : Y.isLocked) return !1
				}
				const O = (S = (0, o.D0)(C)) === null || S === void 0 ? void 0 : S.id,
					w = O ? [`com.cloudflare.api.account.${O}`] : void 0,
					U = (0, s.vq)(O);
				return !!_(C, U, M, L, P || w)
			}

			function d(C) {
				return ![u.ZZ.read, u.ZZ.list].some(M => C.endsWith(M))
			}

			function c(C) {
				return C.includes("zone.versioning")
			}

			function g(C) {
				const M = (0, o.Ko)(C);
				let L = !1;
				return M == null || M.forEach(P => {
					P.access === m.allow && P.permission_groups.forEach(S => {
						var O;
						(S == null || (O = S.meta) === null || O === void 0 ? void 0 : O.scopes) === u.u1 && (L = !0)
					})
				}), L
			}

			function _(C, M, L, P, S) {
				const O = (0, o.Ko)(C),
					w = {};
				O == null || O.forEach(ne => {
					var ue;
					const se = ne.access;
					let re = i;
					if (L && ne.permission_groups.forEach(ee => {
							var ge, G;
							M == null || (ge = M.find(I => I.id === ee.id)) === null || ge === void 0 || (G = ge.permissions) === null || G === void 0 || G.forEach(I => {
								re = Math.max(re, y(I, L))
							})
						}), re !== i && !!P) {
						let ee = i;
						ne.resource_groups.forEach(ge => {
							ee = Math.max(ee, v(ge.scope, P, S))
						}), re = ee === i ? ee : re + ee
					}(w == null || (ue = w[se]) === null || ue === void 0 ? void 0 : ue[re]) || (0, e.Z)(w, [se, re], []), w[se][re].push(ne)
				});
				const U = w[m.allow] && Object.keys(w[m.allow]).map(ne => parseInt(ne)),
					j = w[m.deny] && Object.keys(w[m.deny]).map(ne => parseInt(ne)),
					Y = Math.max.apply(Math, U);
				return Y === i || Math.max.apply(Math, j) >= Y ? null : w[m.allow][Y]
			}

			function y(C, M) {
				if (C.key === M || A(C.key, M)) return n;
				for (const L of (C == null ? void 0 : C.implies) || []) {
					let P = y(L, M);
					if (P > i) return P
				}
				return i
			}

			function A(C, M) {
				const L = M == null ? void 0 : M.lastIndexOf(".");
				return L === -1 ? !1 : (M == null ? void 0 : M.substring(0, L)) + ".*" === C
			}

			function v(C, M, L) {
				var P;
				let S = i;
				if (C == null || (P = C.objects) === null || P === void 0 || P.forEach(O => {
						S = Math.max(S, h(O, M))
					}), S === i) return S;
				if (C.key !== "*") switch (!0) {
					case b(C.key, L) > i:
					case (!(L == null ? void 0 : L.length) && S === n):
						break;
					case (S === p && b(C.key, [M]) > i):
						S = b(C.key, [M]);
						break;
					default:
						return i
				}
				for (const O of C.subset_of || [])
					if (b(O.key, L) === i) return i;
				return S
			}

			function b(C, M = []) {
				for (const L of M || []) {
					if (C === L) return n;
					if (A(C, L)) return f
				}
				return i
			}

			function h(C, M) {
				return C.key === M ? n : C.key === "*" ? p : A(C.key, M) ? f : i
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				a: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				s = t("../react/common/selectors/accountSelectors.ts");
			const u = m => {
					if (typeof m != "string") throw new Error("invalid Param Type provided");
					const i = m.slice(1).split(":");
					if (i.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: i[0],
						value: i[1]
					}
				},
				l = (m, i) => {
					const {
						resourceId: p,
						accountId: f,
						legacyPermission: n
					} = i;
					let {
						read: r,
						edit: a
					} = i;
					const d = {};
					n && (a = `#${n}:edit`, r = `#${n}:read`);
					const c = p || f;
					if (r) {
						const g = Array.isArray(r) ? r : [r];
						d.isReadable = g.some(_ => {
							const y = u(_);
							return (0, s.DT)(m, c, A => !!(A[y.key] && A[y.key][y.value]))
						})
					}
					if (a) {
						const g = Array.isArray(a) ? a : [a];
						d.isEditable = g.some(_ => {
							const y = u(_);
							return (0, s.DT)(m, c, A => !!(A[y.key] && A[y.key][y.value]))
						})
					}
					return d
				};
			E.Z = (0, e.connect)(l)
		},
		"../react/common/components/AccessControl/index.js": function(F, E, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				o = t.n(e),
				s = t("../react/app/HoCs/withEntities.tsx"),
				u = t("../react/common/components/AccessControl/SAAConnect.js");

			function l(r) {
				for (var a = 1; a < arguments.length; a++) {
					var d = arguments[a] != null ? Object(arguments[a]) : {},
						c = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(d).filter(function(g) {
						return Object.getOwnPropertyDescriptor(d, g).enumerable
					})), c.forEach(function(g) {
						m(r, g, d[g])
					})
				}
				return r
			}

			function m(r, a, d) {
				return a = i(a), a in r ? Object.defineProperty(r, a, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = d, r
			}

			function i(r) {
				var a = p(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function p(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var c = d.call(r, a || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}

			function f(r) {
				const d = ["isReadable", "isEditable"].reduce((c, g) => r.hasOwnProperty(g) ? l({}, c, {
					[g]: r[g]
				}) : c, {});
				return r.children(d)
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
			const n = (0, s.Z)((0, u.Z)(f));
			n.displayName = "AccessControl", E.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				PP: function() {
					return r
				},
				RJ: function() {
					return i
				},
				tz: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const m = () => p.test(window.location.pathname) || s.E.has(u.Qq),
				i = () => s.E.get(u.Qq),
				p = /^\/login\/apple(\/)?/,
				n = [p, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let d = !1;
					n.forEach(g => {
						if (g.test(window.location.pathname)) {
							d = !0;
							return
						}
					});
					const c = m() && d;
					return c && (0, l.C8)(l.LF.OFF), c
				},
				a = d => {
					d && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let c = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					d && (c = c + `&jwt=${d}`), window.location.href = c
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				oG: function() {
					return c
				},
				sN: function() {
					return p.sN
				},
				v2: function() {
					return p.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../node_modules/@cloudflare/component-button/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				m = t.n(l),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = t("../react/common/components/Dropdown/index.tsx"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(g) {
					for (var _ = 1; _ < arguments.length; _++) {
						var y = arguments[_];
						for (var A in y) Object.prototype.hasOwnProperty.call(y, A) && (g[A] = y[A])
					}
					return g
				}, n.apply(this, arguments)
			}

			function r(g, _) {
				if (g == null) return {};
				var y = a(g, _),
					A, v;
				if (Object.getOwnPropertySymbols) {
					var b = Object.getOwnPropertySymbols(g);
					for (v = 0; v < b.length; v++) A = b[v], !(_.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(g, A) || (y[A] = g[A]))
				}
				return y
			}

			function a(g, _) {
				if (g == null) return {};
				var y = {},
					A = Object.keys(g),
					v, b;
				for (b = 0; b < A.length; b++) v = A[b], !(_.indexOf(v) >= 0) && (y[v] = g[v]);
				return y
			}
			const d = (0, i.createStyledComponent)(({
				theme: g
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${g.radii[2]}px 0 0 ${g.radii[2]}px`,
					borderRight: `1px solid ${g.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${g.radii[2]}px ${g.radii[2]}px 0`,
					paddingRight: g.space[2],
					paddingLeft: g.space[2]
				},
				"& button": {
					color: (0, f.Yc)() ? g.colors.text : void 0
				},
				"& button:hover": {
					color: (0, f.Yc)() ? g.colors.text : void 0
				}
			}));

			function c(g) {
				let {
					menu: _,
					containerProps: y,
					disabled: A,
					disabledDropdown: v = A
				} = g, b = r(g, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: h
				} = (0, l.useI18n)();
				return o().createElement(d, n({}, y, {
					role: "group"
				}), o().createElement(s.zx, n({}, b, {
					disabled: A
				})), o().createElement(p.Lt, {
					trigger: o().createElement(s.zx, {
						type: b.type,
						"aria-haspopup": "menu",
						disabled: v
					}, o().createElement(u.J, {
						type: "caret-down",
						label: h("common.more"),
						size: 12
					})),
					menu: _
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				v: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = t("../react/common/hooks/useIntersectionObserver.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(p) {
					for (var f = 1; f < arguments.length; f++) {
						var n = arguments[f];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (p[r] = n[r])
					}
					return p
				}, m.apply(this, arguments)
			}

			function i(p) {
				const f = (0, e.useRef)(null),
					[n, r] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const d = f.current;
					if (d) {
						const {
							bottom: c
						} = d.getBoundingClientRect();
						c > window.innerHeight && r(!0)
					}
				}, []);
				const a = (0, l.S)(d => {
					for (const c of d) c.intersectionRatio < 1 && r(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const d = f.current;
					if (d && a) return a.observe(d), () => {
						a.unobserve(d)
					}
				}, [a]), o().createElement(s.ZC, m({
					role: "menu",
					innerRef: f,
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
		"../react/common/components/Dropdown/MenuItem.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				s: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(u);

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(y) {
					for (var A = 1; A < arguments.length; A++) {
						var v = arguments[A];
						for (var b in v) Object.prototype.hasOwnProperty.call(v, b) && (y[b] = v[b])
					}
					return y
				}, m.apply(this, arguments)
			}

			function i(y, A) {
				if (y == null) return {};
				var v = p(y, A),
					b, h;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(y);
					for (h = 0; h < C.length; h++) b = C[h], !(A.indexOf(b) >= 0) && (!Object.prototype.propertyIsEnumerable.call(y, b) || (v[b] = y[b]))
				}
				return v
			}

			function p(y, A) {
				if (y == null) return {};
				var v = {},
					b = Object.keys(y),
					h, C;
				for (C = 0; C < b.length; C++) h = b[C], !(A.indexOf(h) >= 0) && (v[h] = y[h]);
				return v
			}

			function f(y) {
				for (var A = 1; A < arguments.length; A++) {
					var v = arguments[A] != null ? Object(arguments[A]) : {},
						b = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(v).filter(function(h) {
						return Object.getOwnPropertyDescriptor(v, h).enumerable
					})), b.forEach(function(h) {
						n(y, h, v[h])
					})
				}
				return y
			}

			function n(y, A, v) {
				return A = r(A), A in y ? Object.defineProperty(y, A, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[A] = v, y
			}

			function r(y) {
				var A = a(y, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function a(y, A) {
				if (typeof y != "object" || y === null) return y;
				var v = y[Symbol.toPrimitive];
				if (v !== void 0) {
					var b = v.call(y, A || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(y)
			}
			const d = ({
					theme: y
				}) => {
					const A = {
						cursor: "pointer",
						background: y.colors.gray[9],
						color: y.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: y.space[2],
						background: y.colors.background,
						color: y.colors.gray[3],
						fontSize: y.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						'&:hover:not(:disabled):not([aria-disabled="true"])': A,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': f({}, A, {
							boxShadow: "none",
							borderRadius: 0
						}),
						'&:is(:disabled, [aria-disabled="true"])': {
							color: y.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				c = (0, s.createComponent)(d, "a"),
				g = (0, s.createComponent)(d, "button");

			function _(y) {
				let {
					disabled: A = !1
				} = y, v = i(y, ["disabled"]);
				const b = (0, u.useHistory)(),
					h = {
						role: "menuitem"
					};
				if ("href" in v && typeof v.href == "string") return o().createElement(c, m({
					"aria-disabled": A
				}, h, v, {
					href: A ? void 0 : v.href,
					onClick: M => {
						var L;
						if (A) return M.stopPropagation();
						M.preventDefault(), (L = v.onClick) === null || L === void 0 || L.call(v, M), b.push(v.href)
					}
				}));
				var C;
				return o().createElement(g, m({
					type: (C = v.type) !== null && C !== void 0 ? C : "button"
				}, h, v, {
					disabled: A
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/prop-types/index.js"),
				u = t.n(s),
				l = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const m = ({
				children: i
			}) => o().createElement(l.xu, {
				height: 411
			}, i);
			m.propTypes = {
				children: u().node
			}, E.Z = m
		},
		"../react/common/components/ModalManager.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return c
				},
				dd: function() {
					return a
				},
				vR: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react-redux/react-redux");
			const u = g => g.application.modals;
			var l = t("../react/common/actions/modalActions.ts"),
				m = t("../../../../node_modules/swr/core/dist/index.mjs"),
				i = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function p() {
				return p = Object.assign ? Object.assign.bind() : function(g) {
					for (var _ = 1; _ < arguments.length; _++) {
						var y = arguments[_];
						for (var A in y) Object.prototype.hasOwnProperty.call(y, A) && (g[A] = y[A])
					}
					return g
				}, p.apply(this, arguments)
			}
			const f = o().createContext(null);
			class n extends o().Component {
				render() {
					const {
						modals: _,
						closeModal: y
					} = this.props;
					return o().createElement(o().Fragment, null, _.map(({
						ModalComponent: A,
						props: v = {},
						id: b
					}) => {
						const h = () => {
							typeof v.onClose == "function" && v.onClose(), y(A)
						};
						return o().createElement(f.Provider, {
							key: b,
							value: {
								closeModal: h
							}
						}, o().createElement(m.J$, {
							value: i.ZP
						}, o().createElement(A, p({}, v, {
							isOpen: !0,
							closeModal: h
						}))))
					}))
				}
			}

			function r() {
				const g = o().useContext(f);
				if (!g) throw new Error("useModalContext must be used within a ModalContext");
				return g
			}

			function a() {
				const g = (0, s.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(..._) {
						return g(l.openModal(..._))
					}, [g]),
					closeModal: (0, e.useCallback)(function(..._) {
						return g(l.closeModal(..._))
					}, [g])
				}
			}
			var c = (0, s.connect)(g => ({
				modals: u(g)
			}), l)(n)
		},
		"../react/common/components/Page.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function u(l) {
				return o().createElement(s.T3, l)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(F, E, t) {
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
					return o
				},
				q6: function() {
					return s
				},
				w_: function() {
					return u
				},
				zl: function() {
					return i
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				s = "date-from",
				u = "date-to",
				l = "from",
				m = "to",
				i = "all",
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
			let f = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				n = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Cf: function() {
					return f
				},
				hJ: function() {
					return p
				},
				ys: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(c) {
						return Object.getOwnPropertyDescriptor(a, c).enumerable
					})), d.forEach(function(c) {
						u(n, c, a[c])
					})
				}
				return n
			}

			function u(n, r, a) {
				return r = l(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function l(n) {
				var r = m(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let i = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const p = ({
					name: n,
					additionalData: r = {}
				}) => {
					o().sendEvent(n, s({}, r || {}))
				},
				f = () => {
					var n;
					return (n = Object.values(i)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				v: function() {
					return e
				}
			});
			let e = function(o) {
				return o.FIELD = "change field", o.OPERATOR = "change operator", o
			}({})
		},
		"../react/common/constants/analytics/botScoreSrc.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				EG: function() {
					return s
				},
				Me: function() {
					return m
				},
				Vv: function() {
					return l
				},
				sk: function() {
					return u
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let s = function(i) {
				return i.NOT_COMPUTED = "not_computed", i.MACHINE_LEARNING = "machine_learning", i.HEURISTICS = "heuristics", i.BEHAVIORAL_ANALYSIS = "behavioral_analysis", i.JS_FINGERPRINTING = "js_fingerprinting", i.VERIFIED_BOT = "verified_bot", i.CLOUDFLARE_SERVICE = "cloudflare_service", i
			}({});
			const u = {
					[s.NOT_COMPUTED]: "Not Computed",
					[s.MACHINE_LEARNING]: "Machine Learning",
					[s.HEURISTICS]: "Heuristics",
					[s.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[s.JS_FINGERPRINTING]: "JS Fingerprinting",
					[s.VERIFIED_BOT]: "Verified Bot",
					[s.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				l = i => Array.isArray(i) ? i.map(p => {
					var f;
					return (f = u[p]) !== null && f !== void 0 ? f : p
				}) : u[i],
				m = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [s.NOT_COMPUTED, s.MACHINE_LEARNING, s.HEURISTICS, s.BEHAVIORAL_ANALYSIS, s.JS_FINGERPRINTING, s.VERIFIED_BOT, s.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Gq: function() {
					return u
				},
				g$: function() {
					return s
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
					return o
				},
				Gs: function() {
					return d
				},
				hQ: function() {
					return i
				},
				SP: function() {
					return p
				}
			});
			let e = function(c) {
				return c.page_rules = "page_rules", c.automatic_platform_optimization = "automatic_platform_optimization", c
			}({});
			const o = "page_rules",
				s = "automatic_platform_optimization",
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
				r = t("../react/common/constants/billing/tracking.ts"),
				a = t("../react/common/constants/billing/workers.ts");
			const d = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				FP: function() {
					return e
				},
				Nl: function() {
					return l
				},
				SO: function() {
					return s
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
				s = {
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
		"../react/common/constants/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Dk: function() {
					return d
				},
				Dy: function() {
					return c
				},
				E_: function() {
					return m
				},
				Lv: function() {
					return g
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
					return i
				},
				p6: function() {
					return p
				},
				q0: function() {
					return u
				},
				rg: function() {
					return _
				},
				sJ: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = "healthy",
				l = "degraded",
				m = "critical",
				i = "unknown",
				p = "not-monitored",
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
				r = {
					f: f.FREE,
					p: f.PRO,
					b: f.BIZ
				},
				a = "marketing-pt",
				d = () => {
					const A = s.Z.get(a);
					if (!!A) return r[A]
				},
				c = ["gov"],
				g = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				_ = "banner-notification-interactions",
				y = null
		},
		"../react/common/constants/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/common/constants/roles.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", o.CLOUDFLARE_ACCESS = "Cloudflare Access", o.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", o.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", o.ADMINISTRATOR = "Administrator", o.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", o.ANALYTICS = "Analytics", o.API_GATEWAY = "API Gateway", o.API_GATEWAY_READ = "API Gateway Read", o.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", o.BILLING = "Billing", o.BOT_MANAGEMENT = "Bot Management", o.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", o.CACHE_DOMAIN_PURGE = "Cache Domain Purge", o.CACHE_PURGE = "Cache Purge", o.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", o.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", o.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", o.EMAIL_SECURITY_ANALYST = "Email Security Analyst", o.EMAIL_SECURITY_READONLY = "Email Security Readonly", o.EMAIL_SECURITY_REPORTING = "Email Security Reporting", o.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", o.CLOUDFORCE_ONE_READ = "Cloudforce One Read", o.DNS = "DNS", o.DOMAIN_ADMINISTRATOR = "Domain Administrator", o.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", o.DOMAIN_API_GATEWAY = "Domain API Gateway", o.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", o.DOMAIN_DNS = "Domain DNS", o.DOMAIN_PAGE_SHIELD = "Domain Page Shield", o.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", o.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", o.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", o.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", o.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", o.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", o.HTTP_APPLICATIONS = "HTTP Applications", o.HTTP_APPLICATIONS_READ = "HTTP Applications Read", o.CLOUDFLARE_IMAGES = "Cloudflare Images", o.LOAD_BALANCER = "Load Balancer", o.LOG_SHARE = "Log Share", o.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", o.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", o.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", o.PAGE_SHIELD = "Page Shield", o.PAGE_SHIELD_READ = "Page Shield Read", o.HYPERDRIVE_ADMIN = "Hyperdrive Admin", o.HYPERDRIVE_READONLY = "Hyperdrive Readonly", o.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", o.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", o.LOG_SHARE_READER = "Log Share Reader", o.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", o.CLOUDFLARE_STREAM = "Cloudflare Stream", o.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", o.CLOUDFLARE_DEX = "Cloudflare DEX", o.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", o.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", o.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", o.TRANSFORM_RULES = "Transform Rules", o.TRUST_AND_SAFETY = "Trust and Safety", o.TURNSTILE = "Turnstile", o.TURNSTILE_READ = "Turnstile Read", o.VECTORIZE_ADMIN = "Vectorize Admin", o.VECTORIZE_READONLY = "Vectorize Readonly", o.FIREWALL = "Firewall", o.WAITING_ROOM_ADMIN = "Waiting Room Admin", o.WAITING_ROOM_READ = "Waiting Room Read", o.WORKERS_ADMIN = "Workers Admin", o.ZARAZ_ADMIN = "Zaraz Admin", o.ZARAZ_EDIT = "Zaraz Edit", o.ZARAZ_READONLY = "Zaraz Readonly", o.ZONE_VERSIONING = "Zone Versioning", o.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", o.ZONE_VERSIONING_READ = "Zone Versioning Read", o.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", o.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", o.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", o.BRAND_PROTECTION = "Brand Protection", o
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				QK: function() {
					return e
				},
				dy: function() {
					return o
				},
				sO: function() {
					return s
				},
				x4: function() {
					return u
				}
			});
			let e = function(l) {
				return l.DELETE = "delete", l.CREATE = "create", l.GET = "get", l.UPDATE = "update", l
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
				s = (l, m, i = !1) => {
					var p;
					return `${m} ${(p=o[l])!==null&&p!==void 0?p:l} ${i?"ruleset":"rule"}${m===e.GET?"s":""}`
				},
				u = () => {
					var l;
					return (l = Object.keys(o).reduce((m, i) => {
						const p = Object.values(e).reduce((f, n) => (f.push(s(i, n)), f.push(s(i, n, !0)), f), []);
						return m.concat(p)
					}, [])) === null || l === void 0 ? void 0 : l.flat()
				}
		},
		"../react/common/hooks/suspenseHelpers.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				bt: function() {
					return i
				},
				nW: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const u = "suspenseComplete";

			function l() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(u))
				}, [])
			}

			function m(p) {
				(0, s.OR)(u, () => {
					window.setTimeout(p, 0)
				}, {
					target: window
				})
			}

			function i(...p) {
				const [f, n] = p;
				o().useLayoutEffect(f, n), m(f)
			}
		},
		"../react/common/hooks/useAccountEntitlement.ts": function(F, E, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function s(u) {
				return (0, e.p4)(l => (0, o.BF)(l, u))
			}
			E.Z = s
		},
		"../react/common/hooks/useAccountId.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return l
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(s);

			function l() {
				var m;
				const {
					accountId: i
				} = (0, s.useParams)(), p = (0, e.p4)(o.D0);
				if (i === void 0 && !p) throw new Error("Account ID not found in URL params");
				return (m = i) !== null && m !== void 0 ? m : p == null ? void 0 : p.id
			}
		},
		"../react/common/hooks/useActiveState.ts": function(F, E, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				o = t("webpack/sharing/consume/default/react-redux/react-redux"),
				s = t.n(o),
				u = t("../react/common/selectors/commonSelectors.ts");
			const l = m => {
				const i = (0, o.useDispatch)();
				return [(0, o.useSelector)((0, u.cZ)(m)), n => {
					i((0, e.I)(m, n))
				}]
			};
			E.Z = l
		},
		"../react/common/hooks/useCachedState.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				j: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(l, {
				key: m,
				cache: i = s.E,
				ttl: p
			} = {}) {
				var f;
				const n = m !== void 0 && i.get(m),
					[r, a] = (0, e.useState)((f = n) !== null && f !== void 0 ? f : l);
				return [r, c => {
					a(g => (c instanceof Function && (c = c(g)), m !== void 0 && i.set(m, c, p), c))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(F, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(s) {
				return (0, e.qf)(s)
			}
			E.Z = o
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function s(u, {
				root: l,
				rootMargin: m,
				threshold: i
			} = {}) {
				const p = (0, e.useRef)(null);

				function f() {
					return p.current === null && (p.current = new IntersectionObserver(u, {
						root: l,
						rootMargin: m,
						threshold: i
					})), p.current
				}
				return (0, e.useEffect)(() => (p.current = new IntersectionObserver(u, {
					root: l,
					rootMargin: m,
					threshold: i
				}), () => {
					var n;
					(n = p.current) === null || n === void 0 || n.disconnect()
				}), [u, l, m, i]), f()
			}
		},
		"../react/common/hooks/useLoadingState.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);
			const s = () => {
				const [u, l] = (0, e.useState)(!1);
				return [u, i => async () => {
					l(!0);
					try {
						await i()
					} finally {
						l(!1)
					}
				}]
			}
		},
		"../react/common/hooks/usePrevious.ts": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function s(u) {
				const l = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					l.current = u
				}, [u]), l.current
			}
			E.Z = s
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(F, E, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function s(u) {
				return (0, e.p4)(l => (0, o.rV)(l, u))
			}
			E.Z = s
		},
		"../react/common/middleware/sparrow/errors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Uh: function() {
					return l
				},
				ez: function() {
					return u
				},
				oV: function() {
					return m
				}
			});

			function e(i, p, f) {
				return p = o(p), p in i ? Object.defineProperty(i, p, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[p] = f, i
			}

			function o(i) {
				var p = s(i, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(i, p) {
				if (typeof i != "object" || i === null) return i;
				var f = i[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(i, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(i)
			}
			class u extends Error {
				constructor(p, f) {
					super(f);
					e(this, "eventName", void 0), this.eventName = p, this.name = "SparrowValidationError"
				}
			}
			class l extends u {
				constructor(p) {
					super(p, `Event not allowed: "${p}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class m extends u {
				constructor(p, f) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = f
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AC: function() {
					return nt
				},
				Au: function() {
					return ie
				},
				B: function() {
					return Re
				},
				B3: function() {
					return De
				},
				BG: function() {
					return L
				},
				Bp: function() {
					return He
				},
				CV: function() {
					return ht
				},
				D0: function() {
					return b
				},
				DT: function() {
					return B
				},
				EL: function() {
					return H
				},
				EU: function() {
					return Z
				},
				GE: function() {
					return Ct
				},
				Ko: function() {
					return x
				},
				Kx: function() {
					return O
				},
				Le: function() {
					return w
				},
				O4: function() {
					return Ke
				},
				Ou: function() {
					return ge
				},
				Py: function() {
					return ct
				},
				QI: function() {
					return lt
				},
				Qf: function() {
					return C
				},
				RO: function() {
					return Ae
				},
				T3: function() {
					return ft
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
					return qe
				},
				Xu: function() {
					return se
				},
				Yi: function() {
					return vt
				},
				Yj: function() {
					return D
				},
				Zu: function() {
					return J
				},
				bC: function() {
					return W
				},
				f8: function() {
					return Y
				},
				hI: function() {
					return st
				},
				hN: function() {
					return S
				},
				hX: function() {
					return we
				},
				iq: function() {
					return me
				},
				nE: function() {
					return P
				},
				oD: function() {
					return I
				},
				oI: function() {
					return j
				},
				oJ: function() {
					return Q
				},
				tM: function() {
					return G
				},
				uF: function() {
					return re
				},
				ut: function() {
					return ot
				},
				vU: function() {
					return Et
				},
				wQ: function() {
					return fe
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				s = t.n(o),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = t.n(u),
				m = t("../../../../node_modules/reselect/lib/index.js"),
				i = t("../../../../node_modules/moment/moment.js"),
				p = t.n(i),
				f = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				r = t("../react/common/selectors/userSelectors.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				d = t("../react/app/components/DeepLink/selectors.ts"),
				c = t("../react/common/constants/roles.ts"),
				g = t("../react/common/utils/hasRole.ts");

			function _(V) {
				for (var ae = 1; ae < arguments.length; ae++) {
					var ve = arguments[ae] != null ? Object(arguments[ae]) : {},
						Oe = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && Oe.push.apply(Oe, Object.getOwnPropertySymbols(ve).filter(function(Ne) {
						return Object.getOwnPropertyDescriptor(ve, Ne).enumerable
					})), Oe.forEach(function(Ne) {
						y(V, Ne, ve[Ne])
					})
				}
				return V
			}

			function y(V, ae, ve) {
				return ae = A(ae), ae in V ? Object.defineProperty(V, ae, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[ae] = ve, V
			}

			function A(V) {
				var ae = v(V, "string");
				return typeof ae == "symbol" ? ae : String(ae)
			}

			function v(V, ae) {
				if (typeof V != "object" || V === null) return V;
				var ve = V[Symbol.toPrimitive];
				if (ve !== void 0) {
					var Oe = ve.call(V, ae || "default");
					if (typeof Oe != "object") return Oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ae === "string" ? String : Number)(V)
			}
			const b = V => {
					const ae = re(V);
					return ae == null ? void 0 : ae.account
				},
				h = V => {
					const ae = (0, r.PR)(V);
					if (ae) {
						const ve = ae.id;
						return V.accountAccess[ve] || {}
					}
					return {}
				},
				C = V => V.accountsDetailed,
				M = (0, n.P1)("accountsDetailed", C),
				L = V => V.memberships,
				P = (0, m.P1)((0, n.P1)("memberships", L), d.U, (V, ae) => !!ae && !!V ? V.filter(ve => ae.includes(ve.id)) : V),
				S = V => V.accountFlags && V.accountFlags.data,
				O = V => V.accountFlags,
				w = (V, ae, ve) => {
					const Oe = S(V);
					return !Oe || !Oe[ae] ? null : Oe[ae][ve]
				},
				U = V => V.accountFlags.isRequesting,
				j = (V, ...ae) => s()(V, ["accountFlagsChanges", "data", ...ae]),
				Y = V => V.accountFlagsChanges.isRequesting,
				ne = (0, m.P1)(S, O, (V, ae) => ({
					data: V,
					meta: ae
				})),
				ue = (V, ae, ve) => !!(isEnterpriseSSEnabledSelector(V) && w(V, ae, ve)),
				se = V => V.membership,
				re = (0, n.P1)("membership", se),
				ee = (0, m.P1)(re, se, (V, ae) => ({
					data: V,
					meta: ae
				})),
				ge = V => {
					const {
						roles: ae = []
					} = re(V) || {};
					return Boolean(ae.find(ve => ve === "Super Administrator - All Privileges" || ve === "Billing"))
				},
				G = V => {
					const ae = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, g.n)(V, ae)
				},
				I = V => {
					const ae = h(V),
						ve = Te.getMemberships(V) ? l().asMutable(Te.getMemberships(V)) : [];
					if (!!ve) return l().from(ve.map(Oe => _({}, Oe, {
						lastSeen: ae[Oe.account.id] ? ae[Oe.account.id].lastSeen : null
					})).sort((Oe, Ne) => Oe.lastSeen && Ne.lastSeen ? Ne.lastSeen - Oe.lastSeen : 0))
				},
				k = V => V.filteredMemberships,
				H = (0, n.P1)("filteredMemberships", k),
				J = (0, m.P1)(re, V => V == null ? void 0 : V.permissions),
				D = (0, m.P1)(J, V => (0, e.Z)(ae => {
					var ve;
					return (ve = V == null ? void 0 : V[ae]) !== null && ve !== void 0 ? ve : {
						read: !1,
						edit: !1
					}
				})),
				x = (0, m.P1)(re, V => V == null ? void 0 : V.policies),
				B = (V, ae, ve) => {
					let Oe = Te.getMembership(V);
					if (!Oe) {
						const Ne = Te.getMemberships(V);
						if (!Ne || !ae) return !1;
						Oe = Ne.find(xe => xe.account.id === ae)
					}
					if (!Oe || !ve) return !1;
					try {
						return ve(Oe.permissions)
					} catch {
						return !1
					}
				},
				z = V => {
					var ae, ve;
					return (ae = (ve = b(V)) === null || ve === void 0 ? void 0 : ve.meta.has_pro_zones) !== null && ae !== void 0 ? ae : !1
				},
				Z = V => {
					var ae, ve;
					return (ae = (ve = b(V)) === null || ve === void 0 ? void 0 : ve.meta.has_business_zones) !== null && ae !== void 0 ? ae : !1
				},
				W = V => Z(V) || z(V),
				q = (V, ae) => {
					const ve = de(V, ae);
					return !!ve && !!ve.enabled
				},
				de = (V, ae) => {
					const ve = Te.getMembership(V),
						Oe = ve && ve.account;
					return Oe && Oe.legacy_flags && Oe.legacy_flags[ae]
				},
				fe = V => q(V, "custom_pages"),
				ce = V => !!V && V["webhooks.webhooks.enabled"],
				Ee = V => w(V, "bots", "enabled"),
				Le = V => w(V, "billing", "annual_subscriptions_enable"),
				Ae = V => V ? Boolean(w(V, "ConstellationAI", "v2_ui")) : !1,
				we = V => V ? Boolean(w(V, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Re = V => V ? Boolean(w(V, "AIgateway", "enabled")) : !1,
				Se = V => de(V, "enterprise_zone_quota"),
				K = V => {
					const ae = Se(V);
					return !ae || !ae.available ? -1 : ae.available
				},
				me = V => V.accountMembers,
				De = (0, n.P1)("accountMembers", me),
				Ke = V => V.accountMember && V.accountMember.isRequesting,
				it = V => V.accountRoles,
				nt = (0, n.P1)("accountRoles", it),
				ct = (V, ae) => {
					const ve = Te.getMemberships(V),
						Oe = ve && ve.find(Ve => Ve.account.id === ae);
					if (Oe) return Oe.account.name.replace(" Account", " account");
					const Ne = Te.getMembership(V),
						xe = Ne && Ne.account;
					return xe && xe.id === ae ? xe.name : null
				},
				ot = (V, ae) => {
					const ve = Te.getMemberships(V),
						Oe = ve && ve.find(Ve => Ve.account.id === ae);
					if (Oe) return Oe.account.settings.access_approval_expiry;
					const Ne = Te.getMembership(V),
						xe = Ne && Ne.account;
					return xe && xe.id === ae ? xe.settings.access_approval_expiry : null
				},
				qe = (V, ae) => {
					const ve = ot(V, ae);
					return ve ? p().utc(ve).isAfter() : !1
				},
				ft = (V, ae, ve) => {
					const Oe = ot(V, ae);
					let Ne = Oe ? p().utc(Oe) : null;
					return !Ne || !Ne.isAfter() ? "" : Ne && Ne.year() === 3e3 ? ve("account.access_approval.card_expiration_forever") : ve("account.access_approval.card_expiration_text", {
						expiryTimestamp: Ne.local().format(f.U.DateTime)
					})
				},
				Q = V => V && V.member && V.member.edit,
				ie = (V, ae) => {
					const ve = Te.getMembership(V),
						Oe = ve && ve.account;
					return Oe ? Oe.id !== ae : !1
				},
				ye = V => V.dpa,
				$e = (0, n.P1)("dpa", ye),
				ze = V => V.webhook,
				ke = V => V.webhooks,
				et = (0, n.P1)("webhook", ke),
				at = V => V.accountLegoContract,
				_t = (0, n.P1)("accountLegoContract", at),
				lt = V => {
					const ae = _t(V);
					return (ae == null ? void 0 : ae.lego_state) ? ae.lego_state : ""
				},
				yt = V => lt(V) === "signed",
				Ct = V => at(V).isRequesting,
				Et = V => {
					const ae = _t(V);
					return ae && ae.subscription_type ? ae.subscription_type : ""
				},
				Be = V => Et(V) !== "",
				Te = {
					getMembership: re,
					getMemberships: P,
					getFilteredMemberships: H,
					getAccountMembers: De,
					getAccountRoles: nt
				},
				He = V => V.accountSingle,
				vt = (0, n.P1)("accountSingle", He),
				st = V => {
					const ae = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, c.V.ADMINISTRATOR];
					return (0, g.n)(V, ae)
				},
				ht = V => (0, g.n)(V, [c.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/commonSelectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				FX: function() {
					return s
				},
				QG: function() {
					return o
				},
				TH: function() {
					return u
				},
				cZ: function() {
					return e
				}
			});

			function e(l) {
				const m = `__ACTIVE__${l}`;
				return i => {
					const p = i.application;
					return p && p.active[m]
				}
			}

			function o(l) {
				const m = `__TOGGLE__${l}`;
				return i => {
					const p = i.application;
					return p && p.toggles[m]
				}
			}

			function s(l) {
				return l && l.paginationData && l.paginationData.info && l.paginationData.info.total_count ? l.paginationData.info.total_count : 0
			}
			const u = l => l.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$f: function() {
					return c
				},
				AD: function() {
					return l
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return b
				},
				Ci: function() {
					return J
				},
				DA: function() {
					return we
				},
				E6: function() {
					return a
				},
				Gy: function() {
					return Ee
				},
				Hq: function() {
					return ce
				},
				Ms: function() {
					return M
				},
				Nb: function() {
					return fe
				},
				Pj: function() {
					return Ae
				},
				Q2: function() {
					return m
				},
				Qq: function() {
					return W
				},
				Td: function() {
					return A
				},
				Z: function() {
					return B
				},
				a: function() {
					return v
				},
				a5: function() {
					return Z
				},
				c7: function() {
					return q
				},
				du: function() {
					return p
				},
				ec: function() {
					return Y
				},
				f: function() {
					return de
				},
				hL: function() {
					return z
				},
				ji: function() {
					return D
				},
				jo: function() {
					return L
				},
				l9: function() {
					return Se
				},
				lI: function() {
					return u
				},
				p1: function() {
					return _
				},
				pK: function() {
					return Le
				},
				pf: function() {
					return n
				},
				qR: function() {
					return y
				},
				rV: function() {
					return i
				},
				u1: function() {
					return f
				},
				w4: function() {
					return r
				},
				yD: function() {
					return x
				}
			});
			var e = t("../react/utils/url.ts");

			function o(K, me) {
				return K && K[me]
			}
			const s = K => !u(K).isRequesting;

			function u(K) {
				return K.entitlements.zone
			}

			function l(K) {
				return u(K).data
			}
			const m = K => {
				var me, De;
				return ((me = u(K).paginationData) === null || me === void 0 || (De = me.options) === null || De === void 0 ? void 0 : De.editedDate) || {}
			};

			function i(K, me) {
				const De = l(K);
				return De ? o(De, me) : void 0
			}
			const p = (K, me) => i(K, me) === !0;

			function f(K) {
				return K.entitlements.account
			}

			function n(K) {
				return f(K).data
			}
			const r = K => {
				var me, De;
				return ((me = f(K).paginationData) === null || me === void 0 || (De = me.options) === null || De === void 0 ? void 0 : De.editedDate) || {}
			};

			function a(K) {
				return !f(K).isRequesting
			}

			function d(K, me) {
				const De = n(K);
				return De ? o(De, me) : void 0
			}

			function c(K, me) {
				return d(K, me) === !0
			}

			function g(K, me) {
				return me.every(De => c(K, De))
			}

			function _(K) {
				return c(K, "contract.customer_enabled")
			}

			function y(K) {
				return c(K, "contract.self_service_allowed")
			}

			function A(K) {
				return c(K, "billing.partners_managed")
			}
			const v = K => _(K) && y(K),
				b = K => c(K, "enterprise.ecp_allowed");

			function h(K) {
				return C(K) || c(K, "argo.allow_smart_routing") || c(K, "argo.allow_tiered_caching") || c(K, "rate_limiting.enabled") || c(K, "ctm.enabled") || c(K, "workers.enabled") || c(K, "workers.kv_store.enabled") || c(K, "stream.enabled")
			}
			const C = K => p(K, "argo.allow_smart_routing") || p(K, "argo.allow_tiered_caching"),
				M = K => c(K, "zone.cname_setup_allowed") || c(K, "zone.partial_setup_allowed") || p(K, "zone.partial_setup_allowed"),
				L = K => c(K, "argo.allow_smart_routing") || p(K, "argo.allow_smart_routing"),
				P = K => c(K, "argo.allow_tiered_caching") || p(K, "argo.allow_tiered_caching"),
				S = K => L(K) || P(K),
				O = K => c(K, "ctm.enabled"),
				w = K => {
					const me = d(K, "ctm.load_balancers");
					return typeof me == "number" ? me : 0
				},
				U = K => {
					const me = d(K, "ctm.pools");
					return typeof me == "number" ? me : 0
				},
				j = K => {
					const me = d(K, "ctm.origins");
					return typeof me == "number" ? me : 0
				},
				Y = K => c(K, "workers.enabled"),
				ne = K => c(K, "stream.enabled"),
				ue = K => {
					const me = d(K, "access.users_allowed");
					return typeof me == "number" ? me : 0
				},
				se = K => ue(K) > 0,
				re = K => {
					const me = i(K, "dedicated_certificates");
					return typeof me == "number" ? me : 0
				},
				ee = K => re(K) > 0,
				ge = K => {
					const me = i(K, "rate_limiting.max_rules");
					return typeof me == "number" ? me : 0
				},
				G = K => c(K, "rate_limiting.enabled"),
				I = K => {
					const me = i(K, "page_rules");
					return typeof me == "number" ? me : 0
				},
				k = K => I(K) > 0,
				H = K => {
					const me = d(K, "dns_firewall.max_clusters_allowed");
					return typeof me == "number" ? me : 0
				},
				J = K => H(K) > 0,
				D = K => p(K, "zone.advanced_certificate_manager") || c(K, "zone.advanced_certificate_manager"),
				x = K => i(K, "authoritative_dns.proxy_record_allowed") === !1 || d(K, "authoritative_dns.proxy_record_allowed") === !1,
				B = K => c(K, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				z = K => i(K, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				Z = K => {
					const me = i(K, "authoritative_dns.min_record_ttl_allowed");
					return typeof me == "number" && me > 1 ? me : 60
				},
				W = K => c(K, "foundation_dns.advanced_nameservers_allowed") || p(K, "foundation_dns.advanced_nameservers_allowed"),
				q = K => c(K, "account_custom_ns.allowed"),
				de = (K, me) => ((0, e.el)(window.location.pathname) ? i : d)(K, me),
				fe = K => ((0, e.el)(window.location.pathname) ? l : n)(K),
				ce = K => c(K, "authoritative_dns.multi_provider_allowed") || p(K, "authoritative_dns.multi_provider_allowed"),
				Ee = K => p(K, "authoritative_dns.cname_flattening_allowed"),
				Le = K => c(K, "secondary_dns.secondary_overrides") || p(K, "secondary_dns.secondary_overrides"),
				Ae = K => c(K, "authoritative_dns.custom_soa_allowed") || p(K, "authoritative_dns.custom_soa_allowed"),
				we = K => c(K, "authoritative_dns.custom_ns_ttl_allowed") || p(K, "authoritative_dns.custom_ns_ttl_allowed"),
				Re = K => c(K, "secondary.create_zone"),
				Se = K => W(K) || q(K) || ce(K) || Re(K) || Le(K) || Ae(K) || we(K)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(F, E, t) {
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
				o = t("../../../common/intl/intl-types/src/index.ts"),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/utils/bootstrap.ts");
			const l = i => {
				if ((0, u.gm)()) return s.Z.set(e.ly, e.ZW), e.ZW;
				const p = i.userCommPreferences.data;
				if (p == null ? void 0 : p["language-locale"]) return (0, e.i_)(p["language-locale"]), p["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const f = (0, e.Kd)();
					return m(f) ? f : e.ZW
				}
			};

			function m(i) {
				const p = Object.keys(o.Q).find(f => o.Q[f] === i);
				return !!i && typeof i == "string" && p != null && (0, e.S8)(p)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(F, E, t) {
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
					return c
				},
				GU: function() {
					return b
				},
				PR: function() {
					return s
				},
				h$: function() {
					return y
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
					return g
				},
				vW: function() {
					return m
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const o = h => h.user,
				s = (0, e.P1)("user", o),
				u = h => {
					var C;
					return (C = s(h)) === null || C === void 0 ? void 0 : C.email.endsWith("@cloudflare.com")
				},
				l = h => {
					var C;
					return !!((C = s(h)) === null || C === void 0 ? void 0 : C.id)
				},
				m = h => {
					const C = s(h);
					if (!!C) return C.first_name && C.last_name ? `${C.first_name} ${C.last_name}` : C.email
				},
				i = h => {
					const C = s(h);
					return C && C.has_enterprise_zones
				},
				p = h => h.userCommPreferences,
				f = (0, e.P1)("userCommPreferences", p),
				n = h => {
					const C = s(h);
					return C && C.email_verified
				},
				r = h => {
					const C = f(h);
					return C && C.preferences.marketing_communication
				},
				a = h => h.userDetails,
				d = (0, e.P1)("userDetails", a),
				c = h => {
					const C = d(h);
					return C && C["2FA-RECOVERY"] === "scheduled"
				},
				g = h => {
					const C = d(h);
					return C && C["2FA-RECOVERY"] === "interrupted"
				},
				_ = h => {
					const C = d(h);
					return C == null ? void 0 : C["NEW-USER-EMAIL"]
				},
				y = h => h.gates.assignments,
				A = (h, C) => h && h[C];

			function v(h, C) {
				const M = y(h);
				return M ? A(M, C) : void 0
			}
			const b = (h, C) => v(h, C) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$4: function() {
					return M
				},
				$t: function() {
					return nt
				},
				A4: function() {
					return _
				},
				Cu: function() {
					return y
				},
				DQ: function() {
					return W
				},
				Ej: function() {
					return P
				},
				FH: function() {
					return v
				},
				ID: function() {
					return G
				},
				Ko: function() {
					return Ae
				},
				Le: function() {
					return fe
				},
				Ly: function() {
					return J
				},
				M3: function() {
					return me
				},
				N8: function() {
					return K
				},
				NY: function() {
					return z
				},
				Ns: function() {
					return k
				},
				Ox: function() {
					return qe
				},
				P4: function() {
					return S
				},
				RO: function() {
					return ee
				},
				Tr: function() {
					return Le
				},
				U: function() {
					return A
				},
				Ug: function() {
					return h
				},
				V6: function() {
					return De
				},
				WR: function() {
					return ft
				},
				Xg: function() {
					return g
				},
				ZB: function() {
					return de
				},
				_y: function() {
					return I
				},
				cU: function() {
					return we
				},
				cg: function() {
					return Z
				},
				d2: function() {
					return ne
				},
				il: function() {
					return H
				},
				jN: function() {
					return w
				},
				jg: function() {
					return x
				},
				kC: function() {
					return L
				},
				kf: function() {
					return Ke
				},
				ko: function() {
					return re
				},
				mK: function() {
					return ct
				},
				nA: function() {
					return c
				},
				oY: function() {
					return O
				},
				qM: function() {
					return ce
				},
				rq: function() {
					return B
				},
				tS: function() {
					return C
				},
				tU: function() {
					return j
				},
				vB: function() {
					return ot
				},
				vM: function() {
					return U
				},
				wH: function() {
					return b
				},
				wn: function() {
					return q
				},
				xU: function() {
					return Y
				},
				xw: function() {
					return Ee
				},
				z5: function() {
					return ge
				},
				zO: function() {
					return Re
				},
				zW: function() {
					return it
				},
				zh: function() {
					return ue
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				s = t("../../../../node_modules/lodash/get.js"),
				u = t.n(s),
				l = t("../../../../node_modules/moment/moment.js"),
				m = t.n(l),
				i = t("../react/common/constants/billing/index.ts");

			function p(Q) {
				for (var ie = 1; ie < arguments.length; ie++) {
					var ye = arguments[ie] != null ? Object(arguments[ie]) : {},
						$e = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && $e.push.apply($e, Object.getOwnPropertySymbols(ye).filter(function(ze) {
						return Object.getOwnPropertyDescriptor(ye, ze).enumerable
					})), $e.forEach(function(ze) {
						f(Q, ze, ye[ze])
					})
				}
				return Q
			}

			function f(Q, ie, ye) {
				return ie = n(ie), ie in Q ? Object.defineProperty(Q, ie, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[ie] = ye, Q
			}

			function n(Q) {
				var ie = r(Q, "string");
				return typeof ie == "symbol" ? ie : String(ie)
			}

			function r(Q, ie) {
				if (typeof Q != "object" || Q === null) return Q;
				var ye = Q[Symbol.toPrimitive];
				if (ye !== void 0) {
					var $e = ye.call(Q, ie || "default");
					if (typeof $e != "object") return $e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ie === "string" ? String : Number)(Q)
			}
			const a = (0, o.P1)("zone", Q => Q.zone),
				d = Q => {
					var ie;
					return (ie = Q.zoneVersioning) === null || ie === void 0 ? void 0 : ie.zoneVersionSelector
				},
				c = (0, e.P1)(a, d, (Q, ie) => {
					var ye, $e, ze;
					let ke;
					if (Array.isArray(Q) && Q.length === 1 ? ke = Q[0] : Q && !Array.isArray(Q) && (ke = Q), !ke) return;
					const et = !!(ie == null ? void 0 : ie.enabled);
					return p({}, ke, ke.name && {
						name: et ? ie.rootZoneName : ke.name
					}, {
						versioning: {
							enabled: et,
							isRoot: !((ye = ke.name) === null || ye === void 0 ? void 0 : ye.endsWith(".config.cfdata.org")),
							version: et ? ie.selectedVersion : 0,
							rootZoneId: et ? ie.rootZoneId : ($e = (ze = ke) === null || ze === void 0 ? void 0 : ze.id) !== null && $e !== void 0 ? $e : ""
						}
					})
				}),
				g = Q => Q.zone,
				_ = (0, e.P1)(c, g, (Q, ie) => ({
					data: Q,
					meta: ie
				})),
				y = Q => {
					var ie, ye;
					return (ie = (ye = c(Q)) === null || ye === void 0 ? void 0 : ye.id) !== null && ie !== void 0 ? ie : ""
				},
				A = Q => Q.zones,
				v = Q => Q.zonesRoot,
				b = Q => Q.zonesAccount,
				h = (0, o.P1)("zones", A),
				C = (0, o.P1)("zonesRoot", v),
				M = (0, o.P1)("zonesAccount", b);

			function L(Q) {
				const ie = c(Q);
				return ie ? ie.created_on : null
			}

			function P(Q, ie, ye) {
				const $e = L(Q);
				if (!$e) return;
				const ze = m().duration(ie, ye),
					ke = new Date($e),
					et = new Date(new Date().getTime() - ze.asMilliseconds());
				return ke.getTime() > et.getTime()
			}

			function S(Q) {
				const ie = c(Q);
				return ie ? ie.status : null
			}

			function O(Q) {
				const ie = c(Q);
				return ie ? ie.type : null
			}

			function w(Q) {
				return (Q == null ? void 0 : Q.plan_pending) ? Q == null ? void 0 : Q.plan_pending : Q == null ? void 0 : Q.plan
			}

			function U(Q) {
				const ie = c(Q);
				if (!ie) return;
				const ye = w(ie);
				return ye && ye.legacy_id
			}

			function j(Q, ie) {
				const ye = w(Q);
				return !!ye && i.Gs.indexOf(ye.legacy_id) >= i.Gs.indexOf(ie)
			}

			function Y(Q) {
				return !!Q && Q.status === "initializing"
			}

			function ne(Q) {
				return !!Q && Q.status === "pending"
			}

			function ue(Q) {
				return !!Q && Q.status === "active"
			}

			function se(Q, ie) {
				if (!Q) return !1;
				const ye = w(Q);
				return !!ye && ye.legacy_id === ie
			}

			function re(Q) {
				return se(Q, "enterprise")
			}
			const ee = Q => re(c(Q));

			function ge(Q) {
				return se(Q, "business")
			}
			const G = Q => ge(c(Q));

			function I(Q) {
				return se(Q, "pro")
			}

			function k(Q) {
				return se(Q, "free")
			}
			const H = Q => k(c(Q));

			function J(Q) {
				return !re(Q)
			}

			function D(Q) {
				return Q && Q.owner
			}

			function x(Q, ie) {
				const ye = D(ie);
				return !!ye && ye.type === "user" && ye.id === Q.id
			}

			function B(Q) {
				const ie = c(Q);
				return !!ie && ie.type === "partial"
			}

			function z(Q) {
				const ie = c(Q);
				return !!ie && ie.type === "secondary"
			}
			const Z = Q => {
					var ie;
					const ye = c(Q);
					return !!(ye == null ? void 0 : ye.host) && !!((ie = ye.plan) === null || ie === void 0 ? void 0 : ie.externally_managed)
				},
				W = Q => {
					const ie = h(Q);
					return ie && ie.some(re)
				},
				q = (Q, ie) => {
					const ye = c(Q);
					return ye && ye.betas ? ye.betas.includes(ie) : !1
				},
				de = (Q, ...ie) => u()(Q, ["zoneFlags", "data", ...ie]),
				fe = (Q, ...ie) => u()(Q, ["accountFlags", "data", ...ie]),
				ce = Q => Q.accountFlags.isRequesting,
				Ee = Q => Q.zoneFlags.isRequesting,
				Le = (Q, ...ie) => u()(Q, ["zoneFlagsChanges", "data", ...ie]),
				Ae = Q => Q.zoneFlagsChanges.isRequesting,
				we = Q => Q.zoneFlags && Q.zoneFlags.data,
				Re = Q => Q.zoneFlags,
				Se = (0, e.P1)(we, Re, (Q, ie) => ({
					data: Q,
					meta: ie
				})),
				K = (0, o.P1)("abuseUrls", Q => Q.overview.abuseUrls),
				me = Q => {
					const ie = c(Q);
					return ie ? `/${ie.account.id}/${ie.name}` : null
				},
				De = Q => Q.zoneMarketingCampaigns,
				Ke = Q => Q.overview.zoneBlocks.data,
				it = Q => Q.overview.zoneBlocks.isRequesting,
				nt = Q => Q.overview.zoneBlocks.hasData,
				ct = Q => {
					var ie, ye;
					return (Q == null || (ie = Q.overview.zoneBlocks) === null || ie === void 0 || (ye = ie.paginationData) === null || ye === void 0 ? void 0 : ye.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				ot = Q => Q.overview.zoneBlocksReview.isRequesting,
				qe = Q => Q.overview.zoneHold,
				ft = (0, o.P1)("zoneHold", qe)
		},
		"../react/common/utils/formatDate.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			E.Z = (o, s, u = !1) => (0, e.p6)(o, s, u)
		},
		"../react/common/utils/hasRole.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				n: function() {
					return o
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const o = (s, u) => {
				const {
					roles: l = []
				} = (0, e.uF)(s) || {};
				return u.some(m => l.includes(m))
			}
		},
		"../react/common/utils/isGuards.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Q$: function() {
					return s
				},
				t: function() {
					return m
				},
				v5: function() {
					return u
				},
				zE: function() {
					return l
				}
			});
			var e = t("../react/common/constants/index.ts"),
				o = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const s = i => i ? ["page", "per_page", "count", "total_count"].every(f => f in i && i[f]) : !1,
				u = (i = "") => e.Dy.includes(i.toLowerCase()),
				l = i => i !== null && typeof i == "object" && "name" in i && "size" in i && "type" in i && typeof i.slice == "function",
				m = i => (0, o.Z)(i)
		},
		"../react/common/utils/useQueryCache.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				o: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(i) {
				for (var p = 1; p < arguments.length; p++) {
					var f = arguments[p] != null ? Object(arguments[p]) : {},
						n = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(f).filter(function(r) {
						return Object.getOwnPropertyDescriptor(f, r).enumerable
					})), n.forEach(function(r) {
						s(i, r, f[r])
					})
				}
				return i
			}

			function s(i, p, f) {
				return p = u(p), p in i ? Object.defineProperty(i, p, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[p] = f, i
			}

			function u(i) {
				var p = l(i, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function l(i, p) {
				if (typeof i != "object" || i === null) return i;
				var f = i[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(i, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(i)
			}
			const m = i => {
				const p = (0, e.useQueryClient)(),
					f = v => {
						var b;
						return p.getQueriesData((b = v) !== null && b !== void 0 ? b : i)
					},
					n = v => {
						var b;
						return p.getQueryData((b = v) !== null && b !== void 0 ? b : i)
					},
					r = v => {
						var b;
						return p.getQueriesData({
							queryKey: (b = v) !== null && b !== void 0 ? b : i,
							stale: !0
						})
					},
					a = (v, b) => {
						var h;
						p.setQueryData((h = b) !== null && h !== void 0 ? h : i, v)
					},
					d = async v => {
						var b;
						await p.refetchQueries((b = v) !== null && b !== void 0 ? b : i)
					}, c = async (v, b) => {
						var h, C;
						await p.invalidateQueries((h = v) !== null && h !== void 0 ? h : i, o({
							refetchActive: !1
						}, (C = b) !== null && C !== void 0 ? C : {}))
					}, g = async (v, b) => {
						const h = v || (C => {
							var M;
							return (C == null || (M = C.queryKey) === null || M === void 0 ? void 0 : M[0]) === i
						});
						await p.invalidateQueries(o({
							predicate: h,
							refetchActive: !1,
							refetchInactive: !1
						}, b))
					};
				return {
					refetch: d,
					cancelData: async () => {
						await p.cancelQueries(i)
					},
					invalidate: c,
					setData: a,
					getDataStale: r,
					getData: f,
					prefetchQuery: (v, b) => {
						var h;
						return p.prefetchQuery((h = b) !== null && h !== void 0 ? h : i, v)
					},
					getQueryData: n,
					predicateInvalidate: g,
					batchInvalidate: async ({
						queryKeysToInvalidate: v = [],
						queryKeysToPredicateInvalidate: b = [],
						refetchActive: h = !1,
						refetchInactive: C = !1
					}) => {
						const M = v.map(P => c(P)),
							L = b.map(P => g(S => {
								var O;
								return (S == null || (O = S.queryKey) === null || O === void 0 ? void 0 : O[0]) === P
							}, {
								refetchActive: h,
								refetchInactive: C
							}));
						await Promise.all([...M, ...L])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				K2: function() {
					return o
				},
				Lb: function() {
					return s
				},
				XI: function() {
					return u
				},
				bK: function() {
					return p
				},
				jk: function() {
					return i
				},
				wb: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = f => /^https?:\/\/(.*)/.test(f),
				s = f => e.default.hostname.test(f),
				u = f => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(f),
				l = f => /^[!-~]+$/.test(f),
				m = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				i = f => m.test(f),
				p = f => !!f && !!f.length && /^[ -~]+$/.test(f)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				DZ: function() {
					return u
				},
				GA: function() {
					return f
				},
				hT: function() {
					return m
				},
				p6: function() {
					return s
				},
				qc: function() {
					return l
				},
				w9: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e);
			const s = a => o().utc(a).format("YYYY-MM-DD"),
				u = a => o().utc(a).format(),
				l = a => o().utc(a).startOf("minute").format(),
				m = a => new Date(a),
				i = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				p = a => {
					const d = a / 60 / 60 / 1e3;
					return i[Object.keys(i).sort((c, g) => g - c).find(c => d >= c)]
				},
				f = (a, d = c => c.avg && c.avg.sampleInterval ? c.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((c, g) => c + d(g), 0) / a.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = a => n[a]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Jz: function() {
					return f
				},
				OK: function() {
					return l
				},
				_Y: function() {
					return i
				},
				fD: function() {
					return r
				},
				h_: function() {
					return p
				},
				w6: function() {
					return a
				},
				yc: function() {
					return n
				}
			});

			function e(c) {
				for (var g = 1; g < arguments.length; g++) {
					var _ = arguments[g] != null ? Object(arguments[g]) : {},
						y = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(_).filter(function(A) {
						return Object.getOwnPropertyDescriptor(_, A).enumerable
					})), y.forEach(function(A) {
						o(c, A, _[A])
					})
				}
				return c
			}

			function o(c, g, _) {
				return g = s(g), g in c ? Object.defineProperty(c, g, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[g] = _, c
			}

			function s(c) {
				var g = u(c, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function u(c, g) {
				if (typeof c != "object" || c === null) return c;
				var _ = c[Symbol.toPrimitive];
				if (_ !== void 0) {
					var y = _.call(c, g || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(c)
			}
			let l = function(c) {
					return c.Sending = "sending", c.Success = "success", c.Failed = "failed", c.Latent = "latent", c
				}({}),
				m = function(c) {
					return c[c.Success = 200] = "Success", c[c.BadRequest = 400] = "BadRequest", c
				}({});
			const i = {
					status: l.Latent,
					statusCode: void 0
				},
				p = {
					status: l.Sending
				},
				f = {
					status: l.Success,
					statusCode: m.Success
				},
				n = {
					status: l.Failed,
					statusCode: m.BadRequest
				},
				r = {
					token: null,
					zone: null,
					isTokenValid: !1,
					user: null
				},
				a = {
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
				d = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Ux: function() {
					return r
				},
				cz: function() {
					return d
				},
				im: function() {
					return i
				},
				pG: function() {
					return a
				},
				t$: function() {
					return c
				}
			});
			var e = t("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(_) {
				for (var y = 1; y < arguments.length; y++) {
					var A = arguments[y] != null ? Object(arguments[y]) : {},
						v = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(A).filter(function(b) {
						return Object.getOwnPropertyDescriptor(A, b).enumerable
					})), v.forEach(function(b) {
						s(_, b, A[b])
					})
				}
				return _
			}

			function s(_, y, A) {
				return y = u(y), y in _ ? Object.defineProperty(_, y, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[y] = A, _
			}

			function u(_) {
				var y = l(_, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function l(_, y) {
				if (typeof _ != "object" || _ === null) return _;
				var A = _[Symbol.toPrimitive];
				if (A !== void 0) {
					var v = A.call(_, y || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(_)
			}
			const m = _ => _.test(window.location.hostname),
				i = () => m(e.j9),
				p = () => m(MARKETPLACE_LOCAL_URL_REGEXP),
				f = (_, y) => {
					const A = random(0, 1) ? -1 : 1;
					return _.points === y.points || _.points >= APP_POINTS_THRESHOLD && y.points >= APP_POINTS_THRESHOLD ? A : _.points < 0 || y.points < 0 || _.points >= APP_POINTS_THRESHOLD || y.points >= APP_POINTS_THRESHOLD ? y.points - _.points : A
				},
				n = (_, y, A) => {
					const v = get(y, A),
						b = get(_, A);
					return v && !isEqual(v, b)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (_, y) => y.map(A => _.find(v => v.id === A)),
						addAppVersionInfo: (_, y) => o({}, y, {
							currentVersion: y.versions.find(A => A.tag === _.versionTag),
							latestVersion: y.versions.find(A => A.tag === y.infoVersion)
						}),
						addCurrentSiteInstall: (_, y) => o({}, y, {
							currentSiteInstall: _.find(A => A.appId === y.id)
						})
					}
				},
				a = (_, y, A) => o({}, _, y, A ? {
					value: A
				} : {}),
				d = _ => _.map(y => y.status),
				c = _ => _.apps ? _.apps : _,
				g = _ => {
					let y = ["by-cloudflare"];
					return _.filter(A => !y.includes(A.id) && A.visible).sort((A, v) => A.points < v.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(F, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				categorySlugTranslationKey: function() {
					return l
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return u
				},
				translations: function() {
					return s
				}
			});
			var e = t("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: s,
				namespace: u
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

			function l(m) {
				const i = m.replace(/-/g, "_");
				return Object.keys(o).includes(i) ? i : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				L: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/url-join/lib/url-join.js"),
				o = t.n(e),
				s = t("../../../../node_modules/lodash-es/defaults.js"),
				u = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function l(d) {
				for (var c = 1; c < arguments.length; c++) {
					var g = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(g).filter(function(y) {
						return Object.getOwnPropertyDescriptor(g, y).enumerable
					})), _.forEach(function(y) {
						p(d, y, g[y])
					})
				}
				return d
			}

			function m(d, c) {
				if (d == null) return {};
				var g = i(d, c),
					_, y;
				if (Object.getOwnPropertySymbols) {
					var A = Object.getOwnPropertySymbols(d);
					for (y = 0; y < A.length; y++) _ = A[y], !(c.indexOf(_) >= 0) && (!Object.prototype.propertyIsEnumerable.call(d, _) || (g[_] = d[_]))
				}
				return g
			}

			function i(d, c) {
				if (d == null) return {};
				var g = {},
					_ = Object.keys(d),
					y, A;
				for (A = 0; A < _.length; A++) y = _[A], !(c.indexOf(y) >= 0) && (g[y] = d[y]);
				return g
			}

			function p(d, c, g) {
				return c = f(c), c in d ? Object.defineProperty(d, c, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[c] = g, d
			}

			function f(d) {
				var c = n(d, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function n(d, c) {
				if (typeof d != "object" || d === null) return d;
				var g = d[Symbol.toPrimitive];
				if (g !== void 0) {
					var _ = g.call(d, c || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(d)
			}
			class r {
				constructor(c) {
					p(this, "token", void 0), p(this, "options", void 0), p(this, "setAuthHeader", g => {
						this.token = g
					}), this.token = "", this.options = (0, s.Z)(c, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(c = "GET", g, _ = {}) {
					const {
						body: y
					} = _, A = m(_, ["body"]);
					return fetch(o()(this.options.baseUrl, g), l({
						method: c
					}, A, y ? {
						body: JSON.stringify(y)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(l({
							Accept: "application/json, text/plain, */*"
						}, _.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(c, g = {}) {
					const _ = await this.request("GET", c, g);
					return this.parseJSONResponse(_)
				}
				async postJSON(c, g = {}) {
					const _ = await this.request("POST", c, l({}, g, {
						headers: l({}, g.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(_)
				}
				parseJSONResponse(c) {
					return c.json()
				}
			}
			p(r, "defaults", {
				baseUrl: (0, u.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const a = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				JX: function() {
					return f
				},
				Jb: function() {
					return r
				},
				RX: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/lodash-es/upperFirst.js"),
				o = t("../../../../node_modules/lodash-es/isEmpty.js"),
				s = t("../../../../node_modules/query-string/query-string.js"),
				u = t.n(s),
				l = t("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				m = t("../react/pages/apps/marketplace/requests/Requester.ts"),
				i = t("../react/pages/apps/marketplace/libraries/resource.ts");

			function* p(c, g, _, y) {
				const A = (0, e.Z)(g),
					[v, b, h] = [`get${A}Sending`, `get${A}Success`, `get${A}Failed`];
				try {
					yield(0, l.gz)(c[v]());
					const C = yield(0, l.RE)(a, _);
					let M = C;
					if (M.error) {
						yield(0, l.gz)(c[h]());
						return
					}
					return y && (M = yield y(C)), yield(0, l.gz)(c[b](M)), M
				} catch {
					yield(0, l.gz)(c[h]())
				}
			}

			function* f(c, g, _, y) {
				const A = (0, e.Z)(g),
					v = `get${A}Sending`,
					b = `get${A}Success`,
					h = `get${A}Failed`;
				try {
					yield(0, l.gz)(c[v]());
					const C = yield(0, l.RE)(d, {
						url: _,
						data: y
					});
					return yield(0, l.gz)(c[b](C)), C
				} catch {
					yield(0, l.gz)(c[h]())
				}
			}
			const n = c => (0, o.Z)(c) ? "" : `?${s.stringify(c)}`,
				r = {
					app: new i.c({
						name: "app",
						url: (c, g) => `apps/${c}${n(g)}`
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
				a = async c => m.L.fetchJSON(c), d = async c => {
					const {
						url: g,
						data: _
					} = c;
					return m.L.postJSON(g, {
						body: _
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Nw: function() {
					return p
				},
				U4: function() {
					return i
				},
				XO: function() {
					return m
				},
				ZP: function() {
					return f
				}
			});
			var e = t("../react/pages/apps/marketplace/config/initialState.ts");

			function o(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(c) {
						return Object.getOwnPropertyDescriptor(a, c).enumerable
					})), d.forEach(function(c) {
						s(n, c, a[c])
					})
				}
				return n
			}

			function s(n, r, a) {
				return r = u(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function u(n) {
				var r = l(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function l(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
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
			const p = {
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

			function f(n = e.fD, r) {
				switch (r.type) {
					case i.ResetState:
						return o({}, e.fD);
					case i.CurrentUserSending:
						return o({}, n);
					case i.CurrentUserSuccess:
						const {
							user: a
						} = r;
						return o({}, n, {
							user: a
						});
					case i.CurrentUserFailed:
						return o({}, n);
					case i.SetZone:
						const {
							zone: d
						} = r;
						return o({}, n, {
							zone: d
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
							isTokenValid: g
						} = r;
						return o({}, n, {
							isTokenValid: g
						});
					default:
						return n
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Nw: function() {
					return f
				},
				U4: function() {
					return p
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

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var d = arguments[a] != null ? Object(arguments[a]) : {},
						c = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(d).filter(function(g) {
						return Object.getOwnPropertyDescriptor(d, g).enumerable
					})), c.forEach(function(g) {
						u(r, g, d[g])
					})
				}
				return r
			}

			function u(r, a, d) {
				return a = l(a), a in r ? Object.defineProperty(r, a, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = d, r
			}

			function l(r) {
				var a = m(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var c = d.call(r, a || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let i = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				p = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const f = {
				resetState: () => ({
					type: p.ResetState
				}),
				zoneChangedSaga: () => ({
					type: p.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, a) => ({
					type: p.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: a
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: p.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, a) => ({
					type: p.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: a
				}),
				getDevelopedAppsSending: () => ({
					type: p.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: r => ({
					type: p.GetDevelopedAppsSuccess,
					developedApps: r
				}),
				getDevelopedAppsFailed: () => ({
					type: p.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (r, a, d) => ({
					type: p.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: a,
					version: d
				}),
				setUpdatableInstalls: r => ({
					type: p.SetUpdatableInstalls,
					updatableInstallsList: r
				}),
				getAppSaga: r => ({
					type: p.GetAppSaga,
					appIdentifier: r
				}),
				getAppSending: () => ({
					type: p.GetAppSending
				}),
				getAppSuccess: r => ({
					type: p.GetAppSuccess,
					app: r
				}),
				getAppFailed: () => ({
					type: p.GetAppFailed
				}),
				clearApp: () => ({
					type: p.ClearApp
				}),
				getAppsSaga: () => ({
					type: p.GetAppsSaga
				}),
				getAppsSending: () => ({
					type: p.GetAppsSending
				}),
				getAppsSuccess: r => ({
					type: p.GetAppsSuccess,
					appsList: r
				}),
				getAppsFailed: () => ({
					type: p.GetAppsFailed
				}),
				getInstallsSaga: r => ({
					type: p.GetInstallsSaga,
					zoneId: r
				}),
				getInstallsSending: () => ({
					type: p.GetInstallsSending
				}),
				getInstallsSuccess: r => ({
					type: p.GetInstallsSuccess,
					installsList: r
				}),
				getInstallsFailed: () => ({
					type: p.GetInstallsFailed
				}),
				getCategoriesSaga: r => ({
					type: p.GetCategoriesSaga,
					queryParams: r
				}),
				getCategoriesSending: () => ({
					type: p.GetCategoriesSending
				}),
				getCategoriesSuccess: r => ({
					type: p.GetCategoriesSuccess,
					categoriesList: r
				}),
				getCategoriesFailed: () => ({
					type: p.GetCategoriesFailed
				}),
				getMetadataSaga: r => ({
					type: p.GetMetadataSaga,
					zoneId: r
				}),
				getMetadataSending: () => ({
					type: p.GetMetadataSending
				}),
				getMetadataSuccess: r => ({
					type: p.GetMetadataSuccess,
					metadata: r
				}),
				getMetadataFailed: () => ({
					type: p.GetMetadataFailed
				}),
				postMetadataSaga: (r, a) => ({
					type: p.PostMetadataSaga,
					zoneId: r,
					data: a
				}),
				postMetadataSending: () => ({
					type: p.PostMetadataSending
				}),
				postMetadataSuccess: r => ({
					type: p.PostMetadataSuccess,
					metadata: r
				}),
				postMetadataFailed: () => ({
					type: p.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (r, a, d) => ({
					type: p.GetRecommendedAppsSaga,
					appsList: r,
					installsList: a,
					metadata: d
				}),
				getRecommendedAppsSending: () => ({
					type: p.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: r => ({
					type: p.GetRecommendedAppsSuccess,
					recommendedAppsList: r
				}),
				getRecommendedAppsFailed: () => ({
					type: p.GetRecommendedAppsFailed
				})
			};

			function n(r = e.w6, a) {
				switch (a.type) {
					case p.ResetState:
						return s({}, e.w6);
					case p.ZoneChangedSaga:
						return s({}, r, {
							installsList: s({}, e.w6.installsList),
							recommendedAppsList: s({}, e.w6.recommendedAppsList),
							metadata: s({}, e.w6.metadata)
						});
					case p.GetAppsSending:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.h_))
						});
					case p.GetAppsSuccess:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.Jz, a.appsList))
						});
					case p.GetAppsFailed:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.yc))
						});
					case p.GetInstallsSending:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.h_))
						});
					case p.GetInstallsSuccess:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.Jz, a.installsList))
						});
					case p.GetInstallsFailed:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.yc))
						});
					case p.GetCategoriesSending:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case p.GetCategoriesSuccess:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.Jz, a.categoriesList))
						});
					case p.GetCategoriesFailed:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case p.GetMetadataSending:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.GetMetadataSuccess:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.GetMetadataFailed:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.PostMetadataSending:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.PostMetadataSuccess:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.PostMetadataFailed:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.GetRecommendedAppsSending:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case p.GetRecommendedAppsSuccess:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.Jz, a.recommendedAppsList))
						});
					case p.GetRecommendedAppsFailed:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case p.GetAppSending:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.h_))
						});
					case p.GetAppSuccess:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.Jz, a.app))
						});
					case p.GetAppFailed:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.yc))
						});
					case p.ClearApp:
						return s({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case p.SetUpdatableInstalls:
						return s({}, r, {
							updatableInstallsList: a.updatableInstallsList
						});
					case p.GetDevelopedAppsSending:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case p.GetDevelopedAppsSuccess:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.Jz, a.developedApps))
						});
					case p.GetDevelopedAppsFailed:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/d1/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				H: function() {
					return s
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
				s = {
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
		"../react/pages/dns/dns-records/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e
				},
				X: function() {
					return o
				}
			});
			let e = function(s) {
				return s.DNS_RECORD_CREATE = "create DNS records", s.DNS_RECORD_UPDATE = "update DNS records", s.DNS_RECORD_DELETE = "delete DNS records", s.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", s
			}({});
			const o = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				BB: function() {
					return o
				},
				Pm: function() {
					return s
				},
				UZ: function() {
					return e
				}
			});
			let e = function(l) {
				return l.ROOT = "root", l.DSTADDRS_CARD = "dstaddrs_card", l.RULES_CARD = "rules_card", l.CATCHALL_CARD = "catchall_card", l.SETTINGS_PAGE = "settings_page", l.WORKERS_PAGE = "workers_page", l
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
			let s = function(l) {
				return l[l.Verified = 0] = "Verified", l[l.Pending = 1] = "Pending", l[l.Missing = 2] = "Missing", l[l.WorkerNotFound = 3] = "WorkerNotFound", l[l.Unknown = 4] = "Unknown", l[l.Loading = 5] = "Loading", l
			}({});
			const u = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/config.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				jk: function() {
					return y
				},
				w8: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				s = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function l(v) {
				for (var b = 1; b < arguments.length; b++) {
					var h = arguments[b] != null ? Object(arguments[b]) : {},
						C = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(h).filter(function(M) {
						return Object.getOwnPropertyDescriptor(h, M).enumerable
					})), C.forEach(function(M) {
						m(v, M, h[M])
					})
				}
				return v
			}

			function m(v, b, h) {
				return b = i(b), b in v ? Object.defineProperty(v, b, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[b] = h, v
			}

			function i(v) {
				var b = p(v, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function p(v, b) {
				if (typeof v != "object" || v === null) return v;
				var h = v[Symbol.toPrimitive];
				if (h !== void 0) {
					var C = h.call(v, b || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(v)
			}
			const f = "Notifications",
				n = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				d = (0, e.BC)`${a}/destinations`,
				c = (0, e.BC)`${a}/create`,
				g = (0, e.BC)`${c}/${"alertType"}`,
				_ = (0, e.BC)`${a}/edit/${"alertId"}`,
				y = l({
					account: r,
					alerts: a,
					destinations: d,
					createAlert: c,
					createAlertWithSelection: g,
					editAlert: _
				}, o._j, s._j),
				A = l({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, u.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				_j: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				s = (0, e.BC)`${o}/pagerduty/connect`,
				u = (0, e.BC)`${o}/pagerduty/register`,
				l = (0, e.BC)`${o}/pagerduty`,
				m = {
					pagerDutyConnect: s,
					pagerDutyRegister: u,
					pagerDutyList: l
				};
			var i = null
		},
		"../react/pages/home/alerts/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AA: function() {
					return z
				},
				AN: function() {
					return st
				},
				AY: function() {
					return ve
				},
				Ac: function() {
					return Ce
				},
				Am: function() {
					return y
				},
				B2: function() {
					return G
				},
				BB: function() {
					return P
				},
				BF: function() {
					return ke
				},
				BQ: function() {
					return Te
				},
				E8: function() {
					return V
				},
				Fl: function() {
					return Ne
				},
				Fu: function() {
					return w
				},
				Gc: function() {
					return lt
				},
				Hc: function() {
					return ut
				},
				IO: function() {
					return He
				},
				JK: function() {
					return K
				},
				K: function() {
					return C
				},
				LI: function() {
					return Be
				},
				LX: function() {
					return $e
				},
				L_: function() {
					return it
				},
				Ly: function() {
					return Pe
				},
				MR: function() {
					return k
				},
				Mj: function() {
					return J
				},
				NB: function() {
					return We
				},
				Oe: function() {
					return Rt
				},
				Or: function() {
					return x
				},
				P5: function() {
					return Ue
				},
				PE: function() {
					return Le
				},
				Pd: function() {
					return tt
				},
				Pk: function() {
					return we
				},
				Pp: function() {
					return ot
				},
				Q1: function() {
					return O
				},
				Qr: function() {
					return ze
				},
				Qv: function() {
					return Ae
				},
				Rp: function() {
					return he
				},
				S7: function() {
					return dt
				},
				Sh: function() {
					return xe
				},
				Sl: function() {
					return $t
				},
				TZ: function() {
					return B
				},
				Tg: function() {
					return me
				},
				Tp: function() {
					return _t
				},
				Uy: function() {
					return Je
				},
				Vw: function() {
					return j
				},
				W3: function() {
					return Q
				},
				WR: function() {
					return vt
				},
				WX: function() {
					return de
				},
				XF: function() {
					return ht
				},
				Xb: function() {
					return Z
				},
				Zs: function() {
					return Ke
				},
				_f: function() {
					return et
				},
				b4: function() {
					return q
				},
				bc: function() {
					return Kt
				},
				c2: function() {
					return I
				},
				cE: function() {
					return te
				},
				dh: function() {
					return ct
				},
				fE: function() {
					return nt
				},
				g7: function() {
					return Ee
				},
				hO: function() {
					return ft
				},
				hV: function() {
					return Xe
				},
				hk: function() {
					return A
				},
				hr: function() {
					return W
				},
				it: function() {
					return qe
				},
				j3: function() {
					return Fe
				},
				jN: function() {
					return Se
				},
				jo: function() {
					return Wt
				},
				k3: function() {
					return Ze
				},
				m8: function() {
					return re
				},
				nm: function() {
					return Ve
				},
				oW: function() {
					return ae
				},
				pH: function() {
					return ee
				},
				pi: function() {
					return se
				},
				r4: function() {
					return Gt
				},
				rI: function() {
					return H
				},
				s7: function() {
					return yt
				},
				sg: function() {
					return pe
				},
				tB: function() {
					return g
				},
				tN: function() {
					return ce
				},
				u_: function() {
					return zt
				},
				vV: function() {
					return at
				},
				vc: function() {
					return Re
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				s = t("../../../../node_modules/moment/moment.js"),
				u = t.n(s),
				l = t("../../../common/util/types/src/api/domain.ts"),
				m = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				i = t("../react/utils/url.ts"),
				p = t("../react/pages/home/domain-registration/config.ts"),
				f = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function r(T) {
				for (var N = 1; N < arguments.length; N++) {
					var le = arguments[N] != null ? Object(arguments[N]) : {},
						Ie = Object.keys(le);
					typeof Object.getOwnPropertySymbols == "function" && Ie.push.apply(Ie, Object.getOwnPropertySymbols(le).filter(function(je) {
						return Object.getOwnPropertyDescriptor(le, je).enumerable
					})), Ie.forEach(function(je) {
						a(T, je, le[je])
					})
				}
				return T
			}

			function a(T, N, le) {
				return N = d(N), N in T ? Object.defineProperty(T, N, {
					value: le,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[N] = le, T
			}

			function d(T) {
				var N = c(T, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function c(T, N) {
				if (typeof T != "object" || T === null) return T;
				var le = T[Symbol.toPrimitive];
				if (le !== void 0) {
					var Ie = le.call(T, N || "default");
					if (typeof Ie != "object") return Ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(T)
			}

			function g(T) {
				return T.filter(N => N.isSelected).reduce((N, {
					name: le,
					fees: Ie,
					isZoneEntitlementPresent: je
				}) => je || !(0, e.isNumber)(Ie == null ? void 0 : Ie.transfer_fee) ? N : Ce(le) ? N + (Ie == null ? void 0 : Ie.transfer_fee) * 2 : N + (Ie == null ? void 0 : Ie.transfer_fee), 0)
			}

			function _(T) {
				return T.filter(N => N.registrar.toLowerCase() === "godaddy")
			}
			const y = "MMM D, YYYY";

			function A(T, N, le, Ie) {
				var je, pt, At, Ot, Bt, Pt, rt, St, It, bt, Dt, Mt;
				const Ye = T[N.name],
					Ht = () => Ce(N.name) ? u()(N.expires_at).add(2, "years").format(y) : u()(N.expires_at).add(1, "year").format(y);
				return r({
					name: N.name,
					zone: Ye,
					entitlements: le,
					registryCheck: Ie,
					nameservers: N.name_servers,
					isAvailable: N.available,
					lastKnownStatus: N.last_known_status,
					authCode: N.auth_code,
					isEnterpriseZone: (Ye == null || (je = Ye.plan) === null || je === void 0 ? void 0 : je.legacy_id) === "enterprise",
					isActiveZone: (Ye == null ? void 0 : Ye.status) === "active",
					corResponsesPending: N.cor_responses_pending,
					isCorLocked: N.cor_locked,
					corLockedUntil: N.cor_locked_until ? u()(N.cor_locked_until).format(y) : null,
					isFullZone: (Ye == null ? void 0 : Ye.type) == n.xd.Full,
					isLocked: N.locked,
					registrar: N.current_registrar || p.JM,
					zoneId: Ye == null ? void 0 : Ye.id,
					currentExpiration: u()(N.expires_at).format(y),
					newExpiration: Ht(),
					lastEntitledAt: N.last_entitled_at ? new Date(N.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(le) && !!le.find(Ut => Ut.id === p.g5 && Ut.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: N.transfer_in && h(N.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: N.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: N.transfer_in,
					transferOut: N.transfer_out,
					autoRenew: N.auto_renew === !0,
					lastTransferredAt: N.last_transferred_at,
					createdAt: N.created_at,
					paymentExpiresAt: u()(N.payment_expires_at).isValid() ? u()(N.payment_expires_at) : u()(N.expires_at).isValid() ? u()(N.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (pt = N.contacts) === null || pt === void 0 || (At = pt.administrator) === null || At === void 0 ? void 0 : At.id,
						[n.l2.Billing]: (Ot = N.contacts) === null || Ot === void 0 || (Bt = Ot.billing) === null || Bt === void 0 ? void 0 : Bt.id,
						[n.l2.Registrant]: (Pt = N.contacts) === null || Pt === void 0 || (rt = Pt.registrant) === null || rt === void 0 ? void 0 : rt.id,
						[n.l2.Technical]: (St = N.contacts) === null || St === void 0 || (It = St.technical) === null || It === void 0 ? void 0 : It.id
					},
					landing: N.landing,
					privacy: N.privacy,
					whois: N.whois,
					emailVerified: N.email_verified,
					materialChanges: M(N.material_changes),
					corChanges: N.cor_changes ? P(Object.assign(r({}, b), N.cor_changes)) : {},
					registryStatuses: N.registry_statuses ? N.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (bt = N.domain_protection_services) === null || bt === void 0 ? void 0 : bt.status
					},
					deletion: {
						isDeletable: N == null || (Dt = N.deletion) === null || Dt === void 0 ? void 0 : Dt.is_deletable
					},
					premiumType: N == null ? void 0 : N.premium_type,
					fees: N == null ? void 0 : N.fees
				}, N.domain_move && {
					domainMove: {
						ineligibilityReasons: (Mt = N.domain_move) === null || Mt === void 0 ? void 0 : Mt.ineligibility_reasons
					}
				}, N.actionable_metadata && {
					actionableMetadata: v(N.actionable_metadata)
				}, N.policies && {
					policies: r({}, N.policies.suspension && {
						suspension: {
							parked: N.policies.suspension.parked,
							parkingReason: N.policies.suspension.parking_reason,
							paymentExpired: N.policies.suspension.payment_expired
						}
					})
				})
			}

			function v(T) {
				return T.map(N => ({
					accountContext: N.account_context,
					createdAt: N.created_at,
					expiresAt: N.expires_at,
					sentAt: N.sent_at,
					status: N.status,
					type: N.type
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

			function h(T) {
				switch (T.enter_auth_code) {
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

			function C(T) {
				let N = T.extensions;
				(N == null ? void 0 : N.application_purpose) && (N == null ? void 0 : N.nexus_category) && (T.extensions = {
					nexusCategory: N.nexus_category,
					applicationPurpose: N.application_purpose
				});
				let le = r({}, typeof T.id == "string" ? {
					id: T.id
				} : {}, {
					first_name: T.firstName,
					organization: T.organization,
					address: T.address1,
					city: T.city,
					state: T.state || "N/A",
					zip: T.zip,
					country: T.country,
					phone: T.phone,
					email: T.email,
					fax: "",
					last_name: T.lastName,
					address2: T.address2,
					email_verified: T.emailVerified
				}, T.extensions ? {
					extensions: {
						nexus_category: T.extensions.nexusCategory,
						application_purpose: T.extensions.applicationPurpose
					}
				} : {});
				return De(le)
			}

			function M(T) {
				let N = [];
				const le = {
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
				for (const Ie in T) {
					const je = T[Ie],
						pt = le[je];
					N.push(pt)
				}
				return N
			}
			const L = T => {
				if (!T) return null;
				let N = T;
				return T.includes("C31") && (N = "C31"), T.includes("C32") && (N = "C32"), N
			};

			function P(T) {
				return r({}, typeof T.id == "string" ? {
					id: T.id
				} : {}, {
					firstName: T.first_name,
					organization: T.organization,
					address1: T.address,
					city: T.city,
					state: T.state,
					zip: T.zip,
					country: T.country,
					phone: T.phone.trim(),
					email: T.email.trim(),
					lastName: T.last_name,
					address2: T.address2,
					emailVerified: T.email_verified
				}, T.extensions ? {
					extensions: {
						nexusCategory: L(T.extensions.nexus_category),
						applicationPurpose: T.extensions.application_purpose
					}
				} : {})
			}

			function S(T = {}) {
				const N = {
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
						}, T.zone && T.zone.plan || {}),
						type: EZoneType.Full
					}, T.zone || {}),
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
					transferConditions: r({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, T.transferConditions || {}),
					transferIn: r({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, T.transferIn || {}),
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
				return Object.assign(N, T)
			}

			function O(T = {}) {
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
				}, T)
			}

			function w(T) {
				const N = p.Py.concat(p.ui).reduce((le, Ie) => r({}, le, {
					[Ie]: []
				}), {});
				return T.forEach(le => {
					let Ie = U(le.registrar);
					Ie in N || (Ie = p.ui), pe(le.name) && (Ie = "uk"), N[Ie].push(le)
				}), Object.keys(N).sort((le, Ie) => le.localeCompare(Ie)).map(le => ({
					registrar: le,
					domains: N[le]
				})).filter(le => le.domains.length > 0)
			}

			function U(T) {
				return T == null ? void 0 : T.toLowerCase().replace(/\s|,|\./g, "")
			}

			function j(T) {
				if (!T || !T.registrar) return "unknown";
				if (pe(T.name)) return "uk";
				const N = U(T.registrar);
				return N in p.gM ? N : "unknown"
			}
			const Y = [];

			function ne(T) {
				return Y.some(N => T.endsWith("." + N))
			}

			function ue(T) {
				return !T.isEnterpriseZone || !Array.isArray(T.entitlements) ? !1 : !!T.entitlements.find(({
					id: N,
					allocation: le
				}) => N === p.g5 && le.value === !0)
			}

			function se(T) {
				var N;
				const le = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let Ie = !1,
					je = null;
				return (N = T.registryStatuses) === null || N === void 0 || N.some(pt => {
					le.includes(pt) && (je = pt, Ie = !0)
				}), [Ie, je]
			}

			function re(T, N = !1) {
				if (!T) return [!1, f.keys.cannot_transfer_default];
				if (T.zone.status !== "active") return [!1, f.keys.cannot_transfer_zone_not_active];
				if (!T.isFullZone && !ue(T)) return [!1, f.keys.cannot_transfer_zone_not_eligible];
				if (T.registrar === "Cloudflare") return [!1, f.keys.cannot_transfer_domain_on_cf];
				if (T.isAvailable) return [!1, f.keys.cannot_transfer_domain_available];
				if (!T.transferConditions) return [!1, f.keys.cannot_transfer_domain_transfer_conditions];
				if (!N && Je(T == null ? void 0 : T.premiumType)) return [!1, f.keys.cannot_transfer_domain_premium];
				if (ee(T)) return [!1, f.keys.cannot_transfer_domain_transfer_in_progress];
				let le;
				for (le in T.transferConditions)
					if (le !== "not_premium" && !T.transferConditions[le]) return [!1, f.keys.cannot_transfer_domain_transfer_conditions];
				if (ne(T.name)) return [!1, f.keys.cannot_transfer_domain_tld_not_supported];
				const [Ie, je] = se(T);
				return Ie && je ? [!1, f.keys.cannot_transfer_domain_registry_status[je]] : [!0, ""]
			}

			function ee(T) {
				var N, le;
				return !!T.transferIn && !((N = T.transferConditions) === null || N === void 0 ? void 0 : N.not_started) && !!(pe(T.name) || ((le = T.registryStatuses) === null || le === void 0 ? void 0 : le.includes(n.rj.PENDING_TRANSFER)))
			}

			function ge(T) {
				return !!T.registrar && !!T.currentExpiration
			}

			function G(T, N = !1) {
				const [le] = re(T, N);
				return ge(T) ? fe(T) ? n.M5.InProgressOrOnCF : le ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function I(T) {
				return T.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(T.transferIn.enter_auth_code) || !1
			}

			function k(T) {
				return T.registrar === "Cloudflare"
			}

			function H(T) {
				return !!(T == null ? void 0 : T.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function J(T) {
				return !!(T == null ? void 0 : T.includes(n.rj.PENDING_TRANSFER))
			}
			const D = "Invalid date";

			function x(T) {
				return T.newExpiration === D ? "Unavailable" : T.newExpiration
			}

			function B(T) {
				return T.currentExpiration === D ? "Unavailable" : T.currentExpiration
			}

			function z(T) {
				return T.substring(T.indexOf("."))
			}

			function Z(T = "") {
				return T.indexOf(".") !== -1 ? T.substring(0, T.indexOf(".")) : T
			}

			function W(T) {
				return T.map(N => N.name).map(N => z(N)).filter((N, le, Ie) => !Ie.includes(N, le + 1))
			}

			function q(T) {
				if (p.no) return [!0, ""];
				if (!k(T)) return [!1, n.ok.NotOnCF];
				if (T.isCorLocked) return [!1, T.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (T.lastTransferredAt) {
					const N = u()(T.lastTransferredAt),
						le = u().duration(u()().diff(N)).as("days"),
						Ie = pe(T.name);
					if (le < (Ie ? 1 : 60)) return [!1, Ie ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (T.createdAt) {
					const N = u()(T.createdAt);
					if (u().duration(u()().diff(N)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function de(T) {
				return !!(p.Bc || T.transferOut)
			}

			function fe(T) {
				return Ee(T) || k(T)
			}

			function ce(T) {
				return !Ee(T) && k(T)
			}

			function Ee(T) {
				return !T || T.lastKnownStatus === "pendingTransfer" || T.lastKnownStatus === "transferFOAPending" || !k(T) && T.transferConditions && !T.transferConditions.not_started || !1
			}

			function Le(T) {
				return !(ne(T.name) || T.transferConditions && !T.transferConditions.supported_tld)
			}

			function Ae(T) {
				return (T == null ? void 0 : T.includes("/")) ? !0 : T.split("").some(N => N.charCodeAt(0) > 123)
			}

			function we(T) {
				switch (T) {
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

			function Re(T) {
				return u()(T.paymentExpiresAt).isBefore(u()())
			}

			function Se(T) {
				return T.transferIn && T.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function K(T) {
				const N = ["CU", "KP", "IR", "SY"];
				return T.filter(le => !N.includes(le.code))
			}

			function me(T) {
				if (!!T) return `${T.charAt(0).toUpperCase()}${T.slice(1)}${T.charAt(T.length-1)==="."?"":"."}`
			}

			function De(T) {
				const N = {};
				for (const [le, Ie] of Object.entries(T)) {
					if (Ie && typeof Ie == "string") {
						Object.assign(N, {
							[le]: Ie.trim()
						});
						continue
					}
					Object.assign(N, {
						[le]: Ie
					})
				}
				return N
			}

			function Ke(T) {
				return u()(T).add(40, "days")
			}

			function it(T) {
				const N = T.paymentExpiresAt || T.payment_expires_at,
					le = Ke(N);
				return u()().isBetween(N, le)
			}

			function nt(T) {
				var N;
				return !(T == null ? void 0 : T.registryStatuses) || !Array.isArray(T == null ? void 0 : T.registryStatuses) && !(0, e.isString)(T == null ? void 0 : T.registryStatuses) ? !1 : (N = T.registryStatuses) === null || N === void 0 ? void 0 : N.includes(n.rj.REDEMPTION_PERIOD)
			}

			function ct(T) {
				var N;
				return !(T == null ? void 0 : T.registryStatuses) || !Array.isArray(T == null ? void 0 : T.registryStatuses) && !(0, e.isString)(T == null ? void 0 : T.registryStatuses) ? !1 : (N = T.registryStatuses) === null || N === void 0 ? void 0 : N.includes(n.rj.PENDING_DELETE)
			}

			function ot(T) {
				return [".us"].includes(T)
			}

			function qe(T) {
				return [".us"].includes(T)
			}

			function ft(T) {
				switch (T) {
					case ".us":
						return ye();
					default:
						return []
				}
			}

			function Q(T) {
				switch (T) {
					case ".us":
						return ie;
					default:
						return {}
				}
			}
			const ie = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function ye() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([T, N]) => ({
						value: T,
						label: N
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([T, N]) => ({
						value: T,
						label: N
					}))
				}]
			}

			function $e(T, N, le) {
				return N[N.length - 1][le] === T[le]
			}

			function ze(T) {
				return Boolean(Object.keys(T).length === 0)
			}

			function ke(T) {
				return u()().add(T, "year").format(y)
			}

			function et({
				accountName: T
			}) {
				var N;
				const le = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((N = T.toLowerCase().match(le)) === null || N === void 0 ? void 0 : N[0]) || ""
			}

			function at(T) {
				return !!T.match(m.default.email)
			}

			function _t(T) {
				return T === l.W7.PENDING_UPDATE
			}

			function lt(T) {
				return T ? Object.values(l.wR).filter(N => N !== l.wR.OFFBOARDED).includes(T) : !1
			}

			function yt(T) {
				return T ? [l.wR.LOCKED, l.wR.ONBOARDED, l.wR.ONBOARDING_INITIATED, l.wR.PENDING_REGISTRY_LOCK, l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(T) : !1
			}

			function Ct(T) {
				return T ? l.wR.UNLOCKED === T : !1
			}

			function Et(T) {
				return T ? l.wR.LOCKED === T : !1
			}

			function Be(T) {
				return T ? l.wR.PENDING_REGISTRY_LOCK === T : !1
			}

			function Te(T) {
				return T ? [l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(T) : !1
			}

			function He(T) {
				var N;
				return !1
			}

			function vt(T) {
				var N;
				return !1
			}

			function st(T) {
				var N;
				return !1
			}

			function ht(T) {
				var N;
				return !1
			}

			function V(T) {
				var N;
				return !1
			}

			function ae(T) {
				return Object.keys(l.wR).find(N => l.wR[N].toLowerCase() === T.toLowerCase())
			}

			function ve(T) {
				var N;
				const le = (N = ae(T)) === null || N === void 0 ? void 0 : N.toLowerCase();
				return le ? f.keys.protection_status[le] : f.keys.protection_status.unknown
			}

			function Oe(T) {
				return ["com", "net"].includes(T)
			}

			function Ne(T) {
				const N = (0, i.pu)(T);
				return Oe(N) ? l.wR.PENDING_REGISTRY_LOCK : l.wR.LOCKED
			}

			function xe(T) {
				return (0, i.pu)(T) === "co" ? 5 : 10
			}

			function Ve(T, N) {
				return N ? 1 : (0, i.pu)(T) === "co" ? 5 : (0, i.pu)(T) === "org" ? 1 : 10
			}

			function pe(T) {
				return (0, i.pu)(T) === "uk"
			}

			function te(T) {
				return (0, i.pu)(T) === "us"
			}

			function Ce(T) {
				return (0, i.pu)(T) === "ai"
			}

			function he(T) {
				return u()(T).isValid()
			}

			function Pe(T) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(T)
			}

			function Ue(T) {
				return !!(T == null ? void 0 : T.id)
			}

			function We(T) {
				return T ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(T) : !1
			}

			function tt(T) {
				return T ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(T) : !1
			}

			function Xe(T) {
				var N;
				return (T == null ? void 0 : T.lastKnownStatus) ? (N = T.lastKnownStatus) === null || N === void 0 ? void 0 : N.includes("deletionIrredeemable") : !1
			}

			function Je(T) {
				switch (T) {
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

			function ut(T) {
				if (!T || !T.message) return n.OJ.DEFAULT;
				const {
					message: N
				} = T;
				switch (!0) {
					case N.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case N.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case N.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function dt(T) {
				var N, le;
				return !!(((N = T.policies) === null || N === void 0 || (le = N.suspension) === null || le === void 0 ? void 0 : le.parked) && T.policies.suspension.parkingReason)
			}

			function Fe(T) {
				var N, le;
				return dt(T) && ((N = T.policies) === null || N === void 0 || (le = N.suspension) === null || le === void 0 ? void 0 : le.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function Ze(T) {
				var N, le;
				return dt(T) && ((N = T.policies) === null || N === void 0 || (le = N.suspension) === null || le === void 0 ? void 0 : le.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function $t(T) {
				var N;
				return !((N = T.domainMove) === null || N === void 0 ? void 0 : N.ineligibilityReasons.length)
			}

			function Rt(T) {
				var N, le;
				return !!((N = T.domainMove) === null || N === void 0 || (le = N.ineligibilityReasons) === null || le === void 0 ? void 0 : le.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function kt(T) {
				var N;
				return (N = T.actionableMetadata) === null || N === void 0 ? void 0 : N.find(le => le.type === n.wg.DOMAIN_MOVE)
			}

			function Wt(T) {
				const N = kt(T);
				return (N == null ? void 0 : N.status) === "pending" && N.accountContext === n._5.GAINING
			}

			function zt(T) {
				const N = kt(T);
				return (N == null ? void 0 : N.status) === "pending" && N.accountContext === n._5.LOSING
			}

			function Gt(T) {
				const N = z(T.name);
				return !p.Pf.includes(N)
			}

			function Kt(T) {
				return p.QZ.includes(T)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Bc: function() {
					return p
				},
				HG: function() {
					return Ee
				},
				Hv: function() {
					return Le
				},
				JM: function() {
					return s
				},
				Pf: function() {
					return d
				},
				Py: function() {
					return m
				},
				QZ: function() {
					return c
				},
				WK: function() {
					return n
				},
				g5: function() {
					return r
				},
				gM: function() {
					return l
				},
				jk: function() {
					return ce
				},
				no: function() {
					return f
				},
				uY: function() {
					return i
				},
				ui: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../flags.ts");
			const s = "Unknown",
				u = "unknown",
				l = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				m = Object.keys(l),
				i = !0,
				p = (0, o.J8)("registrar_mock_transfer_out") || !1,
				f = (0, o.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				r = "cf_registrar.enabled",
				a = "@abcABC1234567890123456",
				d = [".us"],
				c = [".travel", ".us", ".ong", ".ngo"],
				g = (0, e.BC)`/${"accountId"}`,
				_ = (0, e.BC)`${g}/add-site`,
				y = (0, e.BC)`${g}/registrar`,
				A = (0, e.BC)`${y}/domains`,
				v = (0, e.BC)`${y}/action-center`,
				b = (0, e.BC)`${y}/domain/${"zoneName"}`,
				h = (0, e.BC)`${b}/configuration`,
				C = (0, e.BC)`${b}/contacts`,
				M = (0, e.BC)`${y}/pricing`,
				L = (0, e.BC)`${y}/protection`,
				P = (0, e.BC)`${y}/register`,
				S = (0, e.BC)`${P}/checkout`,
				O = (0, e.BC)`${P}/checkout/${"token"}`,
				w = (0, e.BC)`${P}/success`,
				U = (0, e.BC)`${y}/tlds`,
				j = (0, e.BC)`${y}/transfer`,
				Y = (0, e.BC)`${y}/transfer/${"zoneName"}`,
				ne = (0, e.BC)`/registrar/accounts/verify_email`,
				ue = (0, e.BC)`/registrar/domains/verify_email`,
				se = (0, e.BC)`/sign-up/registrar`,
				re = (0, e.BC)`${y}/verify-email`,
				ee = (0, e.BC)`${g}/${"zoneName"}`,
				ge = (0, e.BC)`${g}/domains`,
				G = (0, e.BC)`${ge}/action-center`,
				I = (0, e.BC)`${ge}/${"zoneName"}`,
				k = (0, e.BC)`${I}/configuration`,
				H = (0, e.BC)`${I}/contacts`,
				J = (0, e.BC)`${ge}/pricing`,
				D = (0, e.BC)`${ge}/protection`,
				x = (0, e.BC)`${ge}/register`,
				B = (0, e.BC)`${x}/checkout`,
				z = (0, e.BC)`${x}/checkout/${"token"}`,
				Z = (0, e.BC)`${x}/success`,
				W = (0, e.BC)`${ge}/tlds`,
				q = (0, e.BC)`${ge}/transfer`,
				de = (0, e.BC)`${ge}/transfer/${"zoneName"}`,
				fe = (0, e.BC)`${ge}/verify-email`,
				ce = {
					addSite: _,
					domains: A,
					domainsActionCenter: v,
					domainsDomain: b,
					domainsDomainConfiguration: h,
					domainsDomainContacts: C,
					domainsPricing: M,
					domainsProtection: L,
					domainsRegister: P,
					domainsRegisterCheckout: S,
					domainsRegisterCheckoutToken: O,
					domainsRegisterSuccess: w,
					domainsTlds: U,
					domainsTransfer: j,
					domainsTransferZone: Y,
					registrar: y,
					registrarAccountsVerifyEmail: ne,
					registrarDomainsVerifyEmail: ue,
					signup: se,
					verifyEmail: re,
					zone: ee
				},
				Ee = {
					LEGACY_domains: ge,
					LEGACY_domainsActionCenter: G,
					LEGACY_domainsDomain: I,
					LEGACY_domainsDomainConfiguration: k,
					LEGACY_domainsDomainContacts: H,
					LEGACY_domainsPricing: J,
					LEGACY_domainsProtection: D,
					LEGACY_domainsRegister: x,
					LEGACY_domainsRegisterCheckout: B,
					LEGACY_domainsRegisterCheckoutToken: z,
					LEGACY_domainsRegisterSuccess: Z,
					LEGACY_domainsTlds: W,
					LEGACY_domainsTransfer: q,
					LEGACY_domainsTransferZone: de,
					LEGACY_verifyEmail: fe
				},
				Le = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				HO: function() {
					return i
				},
				NW: function() {
					return p
				},
				ZQ: function() {
					return u
				},
				b_: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");
			const s = f => {
					const n = f && f.accountFlags && f.accountFlags.data && f.accountFlags.data.registrar && f.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(r => r.trim()) : []
				},
				u = f => {
					var n, r, a;
					return ((n = f.accountFlags) === null || n === void 0 || (r = n.data) === null || r === void 0 || (a = r.registrar) === null || a === void 0 ? void 0 : a["registrar-managed"]) || !1
				},
				l = f => f.account ? f.account.email : "",
				m = f => !1,
				i = f => m(f) && (0, e.oJ)((0, e.Zu)(f)),
				p = f => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: r
					} = f.registrar.registrations;
					return n && !(r.accepted_date || r.id || r.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				J: function() {
					return r
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(s),
				l = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function m(a) {
				for (var d = 1; d < arguments.length; d++) {
					var c = arguments[d] != null ? Object(arguments[d]) : {},
						g = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(c).filter(function(_) {
						return Object.getOwnPropertyDescriptor(c, _).enumerable
					})), g.forEach(function(_) {
						i(a, _, c[_])
					})
				}
				return a
			}

			function i(a, d, c) {
				return d = p(d), d in a ? Object.defineProperty(a, d, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[d] = c, a
			}

			function p(a) {
				var d = f(a, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function f(a, d) {
				if (typeof a != "object" || a === null) return a;
				var c = a[Symbol.toPrimitive];
				if (c !== void 0) {
					var g = c.call(a, d || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(a)
			}
			let n = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a.DOMAIN_MOVE_START_FLOW = "Start domain move flow", a.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", a.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", a.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", a.DOMAIN_MOVE_SUBMIT = "Submit domain move", a.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", a.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", a.DOMAIN_MOVE_CANCEL = "Domain move cancel", a.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", a.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", a.ACTION_CENTER_NAVIGATE = "Navigate to actions center", a.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", a
			}({});

			function r(a, d, c) {
				if (!(d == null ? void 0 : d.name)) return null;
				u().sendEvent(a, m({
					domain: {
						name: d.name,
						premium: (0, l.Uy)(d == null ? void 0 : d.premiumType),
						paymentExpiresAt: o()(d == null ? void 0 : d.paymentExpiresAt).format()
					},
					category: "registrar"
				}, c))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				HX: function() {
					return m
				},
				Re: function() {
					return y
				},
				Rh: function() {
					return c
				},
				hX: function() {
					return a
				},
				s_: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react/react"),
				u = t.n(s),
				l = t("../react/utils/translator.tsx");
			let m = function(A) {
				return A.UNKNOWN = "unknown", A.WORKERS = "workers", A.ACCESS_APPS = "access_apps", A.ACCESS_IDP = "access_ipd", A
			}({});
			const i = [{
				value: m.WORKERS,
				label_i18n: "policy.granular_resources.type.workers",
				scopeKeyPrefix: "com.cloudflare.edge.worker.script",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: m.ACCESS_APPS,
				label_i18n: "policy.granular_resources.type.access_apps",
				scopeKeyPrefix: "com.cloudflare.edge.access.app",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: m.ACCESS_IDP,
				label_i18n: "policy.granular_resources.type.access_idp",
				scopeKeyPrefix: "com.cloudflare.edge.access.identity-provider",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}];

			function p(A) {
				const v = A;
				return {
					key: "com.cloudflare.edge.worker.script." + v.id,
					name: v.name,
					type: m.WORKERS
				}
			}

			function f(A) {
				const v = A;
				return {
					key: "com.cloudflare.edge.access.app." + v.id,
					name: v.name,
					type: m.ACCESS_APPS
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

			function r(A) {
				const v = A,
					b = n[v.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + v.id,
					name: `${b||"Unknown Type"}${v.name?" - "+v.name:""}`,
					type: m.ACCESS_IDP
				}
			}
			const a = async (A, v, b) => v == m.WORKERS ? (await d(`/accounts/${A}/demoproducts?name`)).body.result.map(p) : v == m.ACCESS_APPS ? (await d(`/accounts/${A}/access/apps?name=${b}`)).body.result.map(f) : v == m.ACCESS_IDP ? (await d(`/accounts/${A}/access/identity_providers`)).body.result.map(r) : [];
			async function d(A) {
				try {
					return await (0, e.get)(A, {
						hideErrorAlert: !0
					})
				} catch (h) {
					var v, b;
					throw ((v = h.body) === null || v === void 0 ? void 0 : v.errors) ? h.body.errors[0].message : h.text ? h.text : ((b = h.response) === null || b === void 0 ? void 0 : b.statusText) ? h.response.statusText : "Unexpected error response"
				}
			}
			const c = async (A, v) => {
				const b = v.split("."),
					h = b.pop(),
					C = b.join(".");
				let M;
				switch (C) {
					case "com.cloudflare.edge.worker.script":
						return M = await d(`/accounts/${A}/demoproducts/${h}`), p(M.body.result);
					case "com.cloudflare.edge.access.identity-provider":
						return M = await d(`/accounts/${A}/access/identity_providers/${h}`), r(M.body.result);
					case "com.cloudflare.edge.access.app":
						return M = await d(`/accounts/${A}/access/apps/${h}`), f(M.body.result)
				}
			}, g = {
				loading: !0,
				isDisabled: !0
			}, _ = () => "production";

			function y(A) {
				const [v, b] = (0, s.useState)(!0), [h, C] = (0, s.useState)(i.filter(M => M.value === m.WORKERS ? _() === "staging" : !0).map(M => {
					const L = M.scopeKeyPrefix.startsWith("com.cloudflare.edge.access.");
					return {
						value: M.value,
						label: (0, l.ZP)(M.label_i18n),
						state: L ? g : {
							loading: !1,
							isDisabled: !1
						}
					}
				}));
				return (0, s.useEffect)(() => {
					(async () => {
						try {
							await a(A, m.ACCESS_APPS, ""), g.isDisabled = !1
						} catch (M) {
							M.startsWith("access.api.error.not_enabled") ? g.disableInfo = (0, l.ZP)("policy.granular_resources.type.access.not_enabled") : g.error = M
						}
						g.loading = !1, C([...h])
					})()
				}, []), (0, s.useEffect)(() => {
					const M = h.find(L => L.state.loading);
					b(!!M)
				}, [h]), {
					types: h,
					isLoading: v
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Ey: function() {
					return i
				},
				F4: function() {
					return c
				},
				Fq: function() {
					return y
				},
				Go: function() {
					return r
				},
				Lc: function() {
					return h
				},
				Np: function() {
					return f
				},
				Rl: function() {
					return n
				},
				Sb: function() {
					return a
				},
				Sw: function() {
					return b
				},
				Sz: function() {
					return v
				},
				Ti: function() {
					return C
				},
				Uw: function() {
					return _
				},
				Zl: function() {
					return g
				},
				jk: function() {
					return A
				},
				r6: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${o}/members`,
				u = (0, e.BC)`${s}/invite`,
				l = (0, e.BC)`${s}/invite/${"memberId"}`,
				m = (0, e.BC)`${s}/add-policy/${"memberId"}`,
				i = "com.cloudflare.api.account",
				f = i + "." + "zone",
				n = f + ".",
				r = 100,
				a = 200,
				d = 5,
				c = 300,
				g = "INVITE_TOAST",
				_ = "00000000000000000000000000000000",
				y = "usergroups-ui",
				A = {
					account: o,
					members: s,
					inviteMembers: u,
					editMember: l,
					addPolicy: m
				},
				v = {
					allow: "allow",
					deny: "deny"
				},
				b = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				h = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				C = {
					accountId: "",
					effect: v.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AX: function() {
					return v
				},
				Co: function() {
					return y
				},
				JP: function() {
					return A
				},
				Ld: function() {
					return a
				},
				YW: function() {
					return p
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
					return C
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				o = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				s = t("../react/pages/home/members/constants.ts");

			function u(L) {
				for (var P = 1; P < arguments.length; P++) {
					var S = arguments[P] != null ? Object(arguments[P]) : {},
						O = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(S).filter(function(w) {
						return Object.getOwnPropertyDescriptor(S, w).enumerable
					})), O.forEach(function(w) {
						l(L, w, S[w])
					})
				}
				return L
			}

			function l(L, P, S) {
				return P = m(P), P in L ? Object.defineProperty(L, P, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[P] = S, L
			}

			function m(L) {
				var P = i(L, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function i(L, P) {
				if (typeof L != "object" || L === null) return L;
				var S = L[Symbol.toPrimitive];
				if (S !== void 0) {
					var O = S.call(L, P || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(L)
			}
			const p = () => u({}, s.Ti),
				f = () => u({}, s.Lc, {
					scopes: [p()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = L => L.map(P => ({
					scope: {
						key: P,
						objects: [{
							key: "*"
						}]
					}
				})),
				r = (L, P, S) => {
					var O;
					let w = [],
						U = [];
					const j = [],
						Y = [];
					L.scopes.forEach(se => {
						if (se.mode === s.Sw.all) S ? w.push({
							id: S
						}) : w.push({
							scope: {
								key: `com.cloudflare.api.account.${P}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (se.mode === s.Sw.domain_group) {
							const ee = {
								id: se.resourceGroupId
							};
							se.effect === s.Sz.allow ? w.push(ee) : U.push(ee)
						} else if (se.mode === s.Sw.zone) {
							const ee = `${s.Rl}${se.zoneId}`;
							se.effect === s.Sz.allow ? j.push(ee) : Y.push(ee)
						} else if (se.mode === s.Sw.granular && se.granularResourceKey) {
							var re;
							const ee = se.granularProduct,
								G = `${(re=o.s_.find(I=>I.value===ee))===null||re===void 0?void 0:re.scopeSubsetOfPrefix}.${P}`;
							w.push({
								scope: {
									key: `${se.granularResourceKey}`,
									subset_of: [{
										key: `${G}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), j.length && (w = w.concat(n(j))), Y.length && (U = U.concat(n(Y)));
					const ne = (O = L.permission_groups) === null || O === void 0 ? void 0 : O.map(se => ({
							id: se
						})),
						ue = [];
					return ue.push({
						access: s.Sz.allow,
						permission_groups: ne,
						resource_groups: w
					}), U.length && ue.push({
						access: s.Sz.deny,
						permission_groups: ne,
						resource_groups: U
					}), ue
				},
				a = L => L.map(P => {
					var S;
					return {
						access: P.access,
						permission_groups: P.permission_groups.map(O => ({
							id: O.id
						})),
						resource_groups: (S = P.resource_groups) === null || S === void 0 ? void 0 : S.map(O => ({
							scope: {
								key: O.scope.key,
								objects: O.scope.objects
							},
							id: O.id
						}))
					}
				}),
				d = (L, P, S, O) => {
					const w = L.auto_accept;
					let U = [];
					return U = U.concat(r(L, P, S)), O && (U = U.concat(a(O))), {
						auto_accept: w,
						status: w ? "accepted" : "pending",
						policies: U
					}
				},
				c = L => {
					const P = L.split(".");
					return P[P.length - 1]
				},
				g = L => {
					var P, S;
					const O = L == null ? void 0 : L.access;
					let w = [],
						U = L == null || (P = L.resource_groups) === null || P === void 0 ? void 0 : P.map(j => {
							var Y;
							const ne = _(j);
							if ((j == null || (Y = j.meta) === null || Y === void 0 ? void 0 : Y.editable) === "false") return {
								effect: O,
								mode: s.Sw.all,
								accountId: c(j.id)
							};
							if (ne) {
								var ue;
								return {
									effect: O,
									mode: s.Sw.granular,
									granularProduct: ne.value,
									granularResourceKey: j == null || (ue = j.scope) === null || ue === void 0 ? void 0 : ue.key
								}
							} else if (!j.name) j.scope.key.startsWith(s.Rl) ? w.push({
								key: j.scope.key
							}) : w = w.concat(j.scope.objects);
							else return {
								effect: O,
								mode: s.Sw.domain_group,
								resourceGroupId: c(j.id)
							}
						}).filter(j => j);
					if ((S = w) === null || S === void 0 ? void 0 : S.length) {
						let j = w.map(Y => {
							const ne = c(Y.key);
							return {
								effect: O,
								mode: s.Sw.zone,
								zoneId: ne
							}
						});
						U = U.length ? j.concat(U) : j
					}
					return U
				},
				_ = L => {
					var P, S, O, w;
					const U = L == null || (P = L.scope) === null || P === void 0 ? void 0 : P.key.split(".").slice(0, -1).join("."),
						j = L == null || (S = L.scope) === null || S === void 0 || (O = S.subset_of) === null || O === void 0 || (w = O[0]) === null || w === void 0 ? void 0 : w.key.split(".").slice(0, -1).join(".");
					return o.s_.find(Y => Y.scopeKeyPrefix === U && Y.scopeSubsetOfPrefix === j)
				},
				y = L => {
					if (!(L == null ? void 0 : L.length)) return [];
					const P = [];
					return L.forEach(S => {
						var O;
						(O = S.resource_groups) === null || O === void 0 || O.forEach(w => {
							var U, j;
							((U = w.scope) === null || U === void 0 || (j = U.key) === null || j === void 0 ? void 0 : j.startsWith(s.Rl)) && P.push(c(w.scope.key))
						})
					}), P
				},
				A = L => {
					if (!(L == null ? void 0 : L.length)) return [];
					const P = [];
					return L.forEach(S => {
						var O;
						(O = S.resource_groups) === null || O === void 0 || O.forEach(w => {
							var U, j;
							if (!((U = w.scope) === null || U === void 0 || (j = U.key) === null || j === void 0 ? void 0 : j.startsWith(s.Rl))) {
								var Y;
								const ue = (Y = w.scope) === null || Y === void 0 ? void 0 : Y.objects;
								for (let se = 0; se < (ue == null ? void 0 : ue.length) && se < s.r6; se++) {
									var ne;
									((ne = ue[se].key) === null || ne === void 0 ? void 0 : ne.startsWith(s.Rl)) && P.push(c(ue[se].key))
								}
							}
						})
					}), P
				},
				v = L => {
					var P;
					if (!(L == null ? void 0 : L.length)) return null;
					const S = (P = L[0]) === null || P === void 0 ? void 0 : P.permission_groups.map(j => j.id);
					let O, w;
					L == null || L.forEach(j => {
						j.access === s.Sz.allow && (O = j), j.access === s.Sz.deny && (w = j)
					});
					let U = [];
					return O && (U = g(O)), w && (U = U.concat(g(w))), {
						permission_groups: S,
						scopes: U
					}
				},
				b = "permission-groups-",
				h = new Map,
				C = L => {
					if (!L) return [];
					const P = h.get(L);
					if (P) return P;
					const S = e.E.get(`${b}${L}`);
					return h.set(L, S), S
				},
				M = (L, P) => {
					const S = [];
					for (let O = 0; O < sessionStorage.length; O++) {
						const w = sessionStorage.key(O);
						(w == null ? void 0 : w.startsWith(b)) && S.push(w)
					}
					return S.length >= 5 && e.E.remove(S[0]), e.E.set(`${b}${L}`, P)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return i
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
				o = t.n(e);

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var d = arguments[a] != null ? Object(arguments[a]) : {},
						c = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(d).filter(function(g) {
						return Object.getOwnPropertyDescriptor(d, g).enumerable
					})), c.forEach(function(g) {
						u(r, g, d[g])
					})
				}
				return r
			}

			function u(r, a, d) {
				return a = l(a), a in r ? Object.defineProperty(r, a, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = d, r
			}

			function l(r) {
				var a = m(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var c = d.call(r, a || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let i = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.SEARCH_CONFIGS = "search hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r.CLICK_DISCORD = "click hyperdrive discord", r.CLICK_COMMUNITY = "click hyperdrive community", r
				}({}),
				p = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				f = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const n = (r, a = {}) => {
				o().sendEvent(r, s({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/selectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$4: function() {
					return u
				},
				GH: function() {
					return a
				},
				JZ: function() {
					return c
				},
				aR: function() {
					return n
				},
				db: function() {
					return m
				},
				ib: function() {
					return g
				},
				lW: function() {
					return y
				},
				pT: function() {
					return r
				},
				po: function() {
					return d
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts");
			const u = "sourcing_kit_enabled",
				l = "sourcing_kit_waitlist",
				m = "images",
				i = "unified_images_enabled",
				p = "c2pa_polish",
				f = "CloudflareImages",
				n = A => !!(0, o.BF)(A, "images.transformations_enabled"),
				r = A => Boolean((0, o.BF)(A, "images.enabled")),
				a = A => {
					const v = (0, o.BF)(A, "images.storage");
					return typeof v == "number" && v > 0
				},
				d = A => Boolean((0, o.BF)(A, "contract.customer_enabled")),
				c = A => Boolean((0, e.oI)(A, m, u)),
				g = A => Boolean((0, s.Le)(A, f, u)),
				_ = A => Boolean(getAccountFlipperFlag(A, f, i)),
				y = A => Boolean((0, s.Le)(A, f, p))
		},
		"../react/pages/magic/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				GF: function() {
					return d
				},
				H3: function() {
					return i
				},
				H8: function() {
					return l
				},
				J: function() {
					return g
				},
				Nz: function() {
					return p
				},
				UQ: function() {
					return y
				},
				Up: function() {
					return u
				},
				W8: function() {
					return f
				},
				Ws: function() {
					return A
				},
				Xg: function() {
					return r
				},
				Y_: function() {
					return a
				},
				_j: function() {
					return s
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
			const s = {
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
				i = v => [{
					value: "unidirectional",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				p = "magic-transit",
				f = "magic-wan",
				n = "gre_tunnel",
				r = "ipsec_tunnel",
				a = "interconnect",
				d = 64,
				c = 1476,
				g = "mid",
				_ = "reply",
				y = v => [{
					value: void 0,
					label: v("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: v("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: v("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				A = v => [{
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
		"../react/pages/magic/network-monitoring/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				_u: function() {
					return o
				},
				bK: function() {
					return e
				},
				lC: function() {
					return s
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
				s = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				VZ: function() {
					return u
				},
				lC: function() {
					return s
				},
				r8: function() {
					return o
				},
				uB: function() {
					return l
				}
			});
			var e = t("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				s = "user journey",
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
		"../react/pages/magic/packet-captures/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				W_: function() {
					return o
				},
				X: function() {
					return e
				},
				lC: function() {
					return s
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
				s = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				gb: function() {
					return n
				},
				iP: function() {
					return L
				},
				xL: function() {
					return A
				},
				rD: function() {
					return S
				},
				oT: function() {
					return c
				},
				i2: function() {
					return O
				},
				x1: function() {
					return m
				},
				lW: function() {
					return p
				},
				UA: function() {
					return C
				},
				K5: function() {
					return a
				},
				Ii: function() {
					return b
				},
				PJ: function() {
					return P
				},
				bK: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				l = t("../node_modules/@cloudflare/elements/es/index.js");
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
				i = (0, s.createComponent)(({
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
				p = () => o().createElement(f, null, o().createElement("svg", {
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
				f = (0, s.createComponent)(({
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
				n = () => o().createElement(r, null, o().createElement(l.Ei, {
					alt: "airplane",
					src: u,
					width: "85%"
				})),
				r = (0, s.createComponent)(({
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
				a = () => o().createElement(d, null, o().createElement("svg", {
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
				d = (0, s.createComponent)(({
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
				c = () => o().createElement(g, null, o().createElement("svg", {
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
				g = (0, s.createComponent)(({
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
				_ = () => o().createElement(y, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				y = (0, s.createComponent)(({
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
				A = () => o().createElement(v, null, o().createElement("svg", {
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
				v = (0, s.createComponent)(({
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
				b = () => o().createElement(h, null, o().createElement("svg", {
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
				h = (0, s.createComponent)(({
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
				C = () => o().createElement(M, null, o().createElement("svg", {
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
				M = (0, s.createComponent)(({
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
				L = () => o().createElement("svg", {
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
				P = () => o().createElement("svg", {
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
				S = () => o().createElement("svg", {
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
				O = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				A2: function() {
					return i
				},
				He: function() {
					return l
				},
				N$: function() {
					return m
				},
				Qq: function() {
					return s
				},
				ST: function() {
					return u
				},
				wM: function() {
					return o
				}
			});
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				s = "login-apple-jwt",
				u = "cf-test",
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
				i = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				_: function() {
					return s
				},
				c: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let s = function(l) {
				return l.TEMPLATE_SELECTED = "template selected", l.TEMPLATE_PRODUCT_SELECTED = "template product selected", l.TEMPLATE_SAVE_DRAFT = "template save draft", l.TEMPLATE_CANCEL = "template cancel", l.TEMPLATE_DEPLOY = "template deploy", l
			}({});
			const u = (l, m) => o().sendEvent(l, {
				template_name: m
			})
		},
		"../react/pages/pages/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				A: function() {
					return _
				},
				C1: function() {
					return f
				},
				Dp: function() {
					return j
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
					return s
				},
				Li: function() {
					return g
				},
				Ni: function() {
					return M
				},
				OG: function() {
					return re
				},
				QF: function() {
					return ue
				},
				QV: function() {
					return C
				},
				Sx: function() {
					return b
				},
				Ub: function() {
					return ne
				},
				X3: function() {
					return r
				},
				aP: function() {
					return i
				},
				bA: function() {
					return w
				},
				eO: function() {
					return a
				},
				fH: function() {
					return c
				},
				fQ: function() {
					return y
				},
				fR: function() {
					return e
				},
				ff: function() {
					return O
				},
				hE: function() {
					return Y
				},
				iS: function() {
					return A
				},
				ku: function() {
					return U
				},
				nY: function() {
					return h
				},
				w3: function() {
					return u
				},
				wJ: function() {
					return p
				},
				wp: function() {
					return d
				},
				yu: function() {
					return n
				},
				zF: function() {
					return P
				},
				zG: function() {
					return L
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-workers-and-pages",
				s = {
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
						newInstallation: `https://github.com/apps/${o}/installations/new`
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
				p = 2e3,
				f = 100,
				n = 350,
				r = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				d = 10,
				c = "_headers",
				g = "_redirects",
				_ = "_routes.json",
				y = "_worker.js",
				A = "do-a-barrel-roll",
				v = [c, g, _, y],
				b = 1024 * 1024 * 25,
				h = 1e3,
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
				M = 1e5,
				L = 75e3,
				P = 2e5,
				S = 15e4,
				O = 3e3,
				w = 2250,
				U = "workers",
				j = "cloudflare_pages_build_caching",
				Y = 2;
			let ne = function(ee) {
				return ee[ee.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", ee[ee.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", ee[ee.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", ee[ee.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", ee[ee.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", ee[ee.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", ee
			}({});
			const ue = 1,
				se = 2,
				re = 2
		},
		"../react/pages/pages/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return s
				},
				_j: function() {
					return o
				},
				zE: function() {
					return l
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
				s = {
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
				u = m => `${m.subdomain}.pages.dev`,
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
		"../react/pages/pipelines/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return i
				},
				L9: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(c) {
						return Object.getOwnPropertyDescriptor(a, c).enumerable
					})), d.forEach(function(c) {
						u(n, c, a[c])
					})
				}
				return n
			}

			function u(n, r, a) {
				return r = l(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function l(n) {
				var r = m(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let i = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				p = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const f = (n, r = {}) => {
				o().sendEvent(n, s({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return s
				},
				Jg: function() {
					return m
				},
				_j: function() {
					return o
				},
				vF: function() {
					return l
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
				s = {
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
					bucketLockRules: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lock`,
					bucketLifecycle: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lifecycle`,
					bucketMultipartUploads: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/uploads`,
					bucketSippy: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/sippy`,
					apiTokens: (0, e.BC)`/user/tokens`,
					apiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					rollApiToken: (0, e.BC)`/user/tokens/${"tokenId"}/value`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					zones: (0, e.BC)`/zones`
				},
				u = i => {
					const p = "r2.cloudflarestorage.com";
					switch (i) {
						case "default":
							return p;
						case "eu":
							return `eu.${p}`;
						case "fedramp":
							return `fedramp.${p}`
					}
				},
				l = (i, p) => {
					const f = u(p);
					return `https://${i}.${f}`
				},
				m = (i, p, f) => `${l(i,p)}/${f}`
		},
		"../react/pages/r2/selectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts");
			const u = "r2_migrator_waitlist",
				l = "r2migrator",
				m = "r2",
				i = "r2_storage_migrator",
				p = "r2_storage_migrator",
				f = a => getAccountEntitlement(a, "r2.enabled"),
				n = a => Boolean((0, s.Le)(a, i, u)),
				r = a => Boolean(getAccountFlipperFlagsChanges(a, p, l))
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Gk: function() {
					return a
				},
				LA: function() {
					return f
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
					return p
				}
			});
			var e = t("../react/pages/security-center/BlockedContent/types.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function s(d) {
				for (var c = 1; c < arguments.length; c++) {
					var g = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(g).filter(function(y) {
						return Object.getOwnPropertyDescriptor(g, y).enumerable
					})), _.forEach(function(y) {
						u(d, y, g[y])
					})
				}
				return d
			}

			function u(d, c, g) {
				return c = l(c), c in d ? Object.defineProperty(d, c, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[c] = g, d
			}

			function l(d) {
				var c = m(d, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function m(d, c) {
				if (typeof d != "object" || d === null) return d;
				var g = d[Symbol.toPrimitive];
				if (g !== void 0) {
					var _ = g.call(d, c || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(d)
			}
			const i = "blocked-content-table-tooltip",
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
					filters: Object.values(e.GH).reduce((d, c) => s({}, d, {
						[c]: c
					}), {})
				};
			let a = function(d) {
				return d.COPY_URL = "copy blocked content url", d.REQUEST_REVIEW = "request blocked content review", d.ADD_FILTER = "Add filter", d.REMOVE_FILTER = "Remove filter", d
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$E: function() {
					return e
				},
				GH: function() {
					return s
				},
				M3: function() {
					return o
				},
				fL: function() {
					return u
				}
			});
			let e = function(m) {
					return m.Pending = "pending", m.Active = "active", m
				}({}),
				o = function(m) {
					return m.Active = "active", m.InReview = "in_review", m.Pending = "pending", m.Canceled = "canceled", m
				}({}),
				s = function(m) {
					return m.Domain = "domain", m.Status = "status", m.BlockType = "blockType", m
				}({}),
				u = function(m) {
					return m.EnforcementDate = "enforcementDate", m.BlockType = "blockType", m.Hostname = "hostname", m.Status = "status", m
				}({}),
				l = function(m) {
					return m.Removed = "removed", m.Misclassified = "misclassified", m
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Ev: function() {
					return s
				},
				RY: function() {
					return e
				},
				v9: function() {
					return o
				}
			});
			let e = function(u) {
				return u.LOAD_SCAN_INFO = "load url scan information", u.INITIATE_URL_SCAN = "initiate url scan", u
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
			let s = function(u) {
				return u.LOAD_THREAT_EVENTS = "load threat events", u.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", u.THREAT_EVENTS_FILTERS = "threat events filters applied", u
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AU: function() {
					return s
				},
				Bc: function() {
					return o
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
				o = {
					"Behavioral Analysis": "security_analytics.labels.bot_source.behavioral_analysis",
					Heuristics: "security_analytics.labels.bot_source.heuristics",
					"Machine Learning": "security_analytics.labels.bot_source.machine_learning",
					"Not Computed": "security_analytics.labels.bot_source.not_computed",
					"JS Fingerprinting": "security_analytics.labels.bot_source.js_fingerprinting",
					"Verified Bot": "security_analytics.labels.bot_source.verified_bot",
					"Cloudflare Service": "security_analytics.labels.bot_source.cloudflare_service"
				},
				s = {
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
					[s.ASN]: "firewall.analytics.services.labels.asn",
					[s.COUNTRY]: "firewall.analytics.services.labels.country",
					[s.IP]: "firewall.analytics.services.labels.ip",
					[s.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[s.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[s.VALIDATION]: "firewall.analytics.services.labels.validation",
					[s.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[s.WAF]: "firewall.analytics.services.labels.waf",
					[s.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[s.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[s.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[s.BIC]: "firewall.analytics.services.labels.bic",
					[s.HOT]: "firewall.analytics.services.labels.hot",
					[s.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[s.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[s.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[s.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[s.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[s.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[s.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[s.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[s.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[s.DLP]: "firewall.analytics.services.labels.dlp",
					[s.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				}
		},
		"../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AS: function() {
					return m
				},
				IK: function() {
					return r
				},
				Ki: function() {
					return s
				},
				Lz: function() {
					return a
				},
				nT: function() {
					return p
				},
				o4: function() {
					return d
				},
				oY: function() {
					return u
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
			const s = ["block", "challenge", "jschallenge", "managedChallenge"],
				u = ["miss", "expired", "bypass", "dynamic"],
				l = c => Object.fromEntries(Object.entries(c).map(([g, _]) => [_, g])),
				m = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				i = l(m),
				p = {
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
				f = l(p),
				n = l(o.EG);
			let r = function(c) {
				return c.SAMPLED = "sampled", c.RAW = "raw", c
			}({});
			const a = "security-analytics-log-explorer";
			let d = function(c) {
				return c.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', c.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', c.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', c.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', c.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', c
			}({})
		},
		"../react/pages/security/api-shield/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AB: function() {
					return n
				},
				API_SHIELD_TOAST: function() {
					return y
				},
				CR: function() {
					return _
				},
				Cg: function() {
					return p
				},
				L8: function() {
					return a
				},
				Ps: function() {
					return i
				},
				_i: function() {
					return f
				},
				ac: function() {
					return s
				},
				k1: function() {
					return l
				},
				k2: function() {
					return g
				},
				mU: function() {
					return c
				},
				sM: function() {
					return u
				},
				tA: function() {
					return o
				},
				uv: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = ["log", "block"],
				s = [...o, "disable"],
				u = 10,
				l = "header",
				m = {
					root: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield`,
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
					jwtRules: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/jwt-rules/:ruleId`,
					updateJWTConfiguration: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/jwt-configuration`,
					sequenceRules: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/sequence-rules`,
					editSequenceRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/sequence-rules/:ruleId`,
					routingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/routing`,
					upgrade: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/upgrade`
				},
				i = "sess_ids_last_updated",
				p = "all";
			let f = function(A) {
				return A.DISCOVERY_FILTER = "discovery-filter-state", A.ADD_JWT_RULES_FILTER = "add-jwt-rules-state", A.ENDPOINT_MANAGEMENT_FILTER = "endpoint-management-filter-cache-key", A
			}({});
			const n = 63,
				r = 0,
				a = 10,
				d = {
					id: "method",
					desc: !0
				};
			let c = function(A) {
				return A.JWT_CONFIGURATIONS = "API_SHIELD_JWT_CONFIGURATIONS", A
			}({});
			const g = {
					METHOD: "method.listbox_filter",
					HOSTNAME: "hostname.listbox_filter",
					LABELS: "labels.listbox_filter"
				},
				_ = "api-shield-schema-validation-for-all-customers";
			let y = function(A) {
				return A.UPLOAD_SCHEMA = "schemaName", A.ADDED_ENDPOINT = "addedEndpoint", A.DEPLOYED_ROUTE = "deployedRoute", A.DELETED_ROUTE = "deletedRoute", A.UPDATED_LABELS_SINGLE_ENDPOINT = "updateLabelsSingle", A.UPDATED_LABELS_MULTI_ENDPOINT = "updateLabelsMulti", A
			}({})
		},
		"../react/pages/security/api-shield/entitlements.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				$0: function() {
					return r
				},
				CR: function() {
					return n
				},
				DM: function() {
					return ue
				},
				DN: function() {
					return w
				},
				Dc: function() {
					return se
				},
				Dg: function() {
					return Y
				},
				FV: function() {
					return U
				},
				LG: function() {
					return v
				},
				Mz: function() {
					return j
				},
				OL: function() {
					return i
				},
				St: function() {
					return y
				},
				UG: function() {
					return a
				},
				Wy: function() {
					return d
				},
				iU: function() {
					return L
				},
				jI: function() {
					return l
				},
				qK: function() {
					return O
				},
				qN: function() {
					return f
				},
				r6: function() {
					return re
				},
				sK: function() {
					return g
				},
				t1: function() {
					return h
				},
				yk: function() {
					return p
				},
				yo: function() {
					return ne
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
				s = t("../react/common/hooks/useAccountEntitlement.ts"),
				u = t("../react/pages/security/api-shield/settings/constants.tsx");
			const l = {
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
				i = l[e.H.DISCOVERY],
				p = () => !!(0, o.Z)(i.discoveryAllowed),
				f = () => !!(0, o.Z)(i.discoveryThresholdsAllowed),
				n = l[e.H.JWT],
				r = () => !!(0, o.Z)(n.tokenValidationAllowed),
				a = () => (0, o.Z)(n.maxTokenValidationRules),
				d = () => (0, o.Z)(n.maxTokenValidationConfigs),
				c = l[e.H.SEQUENCE],
				g = () => !!(0, o.Z)(c.sequenceAllowed),
				_ = l[e.H.SEQUENCE_RULES],
				y = () => (0, o.Z)(_.maxSequenceRules),
				A = l[e.H.OPERATIONS],
				v = () => (0, o.Z)(A.maxOperationsAllowed),
				b = l[e.H.USER_SCHEMAS],
				h = () => {
					const ee = (0, o.Z)(b.maxUserSchemasAllowed);
					return typeof ee == "number" ? ee : u.Hs
				},
				C = () => {
					const ee = (0, o.Z)(b.maxSchemaBytesAllowed);
					return typeof ee == "number" ? ee : u.x5
				},
				M = l[e.H.LEARNED_SCHEMAS],
				L = () => (0, o.Z)(M.maxLearnedSchemasAllowed),
				P = l[e.H.SCHEMA_VALIDATION],
				S = () => useZoneEntitlement(P.schemaValidationAllowed),
				O = () => (0, o.Z)(P.maxSchemaBytes),
				w = l[e.H.CONFIGURATION],
				U = () => (0, o.Z)(w.maxApiShields),
				j = () => (0, o.Z)(w.apiRouting),
				Y = () => (0, o.Z)(w.centralEndpointsListAllowed),
				ne = () => !!(0, o.Z)(m.logAllowed),
				ue = () => !!(0, o.Z)(m.regexOperatorAllowed),
				se = () => !!(0, o.Z)(m.dlpAllowed),
				re = () => !!(0, s.Z)(m.sequencesAllowed)
		},
		"../react/pages/security/api-shield/settings/constants.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				Cl: function() {
					return n
				},
				Hs: function() {
					return p
				},
				PD: function() {
					return d
				},
				Sk: function() {
					return c
				},
				TD: function() {
					return f
				},
				Ye: function() {
					return m
				},
				ZR: function() {
					return a
				},
				a2: function() {
					return r
				},
				x5: function() {
					return i
				},
				y$: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/utils/translator.tsx"),
				u = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let l = function(_) {
				return _.JWT_SECTION = "JWT_SECTION", _.ENDPOINT_SETTINGS = "ENDPOINT_SETTINGS", _.SCHEMA_SETTINGS = "SCHEMA_SETTINGS", _
			}({});
			const m = {
					page: 1,
					perPage: 5,
					totalCount: 0
				},
				i = 2e5,
				p = 5,
				f = {
					name: "created_at",
					direction: u.Sr.desc
				},
				n = {
					title: o().createElement(s.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.userSchemas.empty.title"
					}),
					description: o().createElement(s.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.userSchemas.empty.description"
					})
				},
				r = {
					title: o().createElement(s.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.learnedSchemas.empty.title"
					}),
					description: o().createElement(s.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.learnedSchemas.empty.description"
					})
				},
				a = {
					title: o().createElement(s.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.sessionIdentifiers.empty.title"
					}),
					description: o().createElement(s.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.sessionIdentifiers.empty.description"
					})
				},
				d = {
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
				g = {
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
		"../react/pages/security/api-shield/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Fj: function() {
					return p
				},
				kq: function() {
					return i
				},
				xr: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(c) {
						return Object.getOwnPropertyDescriptor(a, c).enumerable
					})), d.forEach(function(c) {
						u(n, c, a[c])
					})
				}
				return n
			}

			function u(n, r, a) {
				return r = l(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function l(n) {
				var r = m(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let i = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const p = {
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
				f = ({
					name: n,
					category: r = "user journey",
					product: a = i.MAIN,
					productName: d,
					additionalData: c
				}) => {
					o().sendEvent(n, s({
						category: r,
						product: a,
						productName: d
					}, c || {}))
				}
		},
		"../react/pages/security/api-shield/types.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				H: function() {
					return o
				}
			});
			let e = function(s) {
					return s.LIST_OF_JUST_ADDED_IDENTIFIERS = "LIST_OF_JUST_ADDED_IDENTIFIERS", s
				}({}),
				o = function(s) {
					return s.OPERATIONS = "operations", s.JWT = "jwt", s.SCHEMA_VALIDATION = "schemaValidation", s.USER_SCHEMAS = "userSchemas", s.LEARNED_SCHEMAS = "learnedSchemas", s.DISCOVERY = "discovery", s.CONFIGURATION = "configuration", s.SEQUENCE = "sequence", s.SEQUENCE_RULES = "sequenceRules", s.FALLTHROUGH_RULES = "fallThroughRules", s
				}({})
		},
		"../react/pages/security/api-shield/utils/useApiShield.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				R: function() {
					return i
				}
			});
			var e = t("../react/pages/security/api-shield/entitlements.tsx"),
				o = t("../react/pages/security/api-shield/constants.ts"),
				s = t("../react/common/hooks/useGate.ts");
			const u = () => !!(0, s.Z)(o.CR);
			var l = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/app/redux/index.ts");
			const i = () => {
				const p = ((0, e.FV)() || 0) > 0,
					f = u(),
					n = (0, e.yk)(),
					r = (0, e.yo)(),
					a = (0, m.p4)(l.nA),
					d = (0, l.Ns)(a),
					c = (0, l._y)(a),
					g = (0, l.z5)(a),
					_ = (0, l.ko)(a);
				return {
					isFreeZone: d,
					isProZone: c,
					isBiz: g,
					isEnterpriseZone: _,
					hasLogAction: r,
					hasApiShields: p,
					hasApiDiscovery: n,
					hasFreeTier: f && !p,
					hasApiShieldsAndApiDiscovery: n && p,
					isEnableFreeTier: f
				}
			}
		},
		"../react/pages/security/bots/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				N3: function() {
					return e
				},
				UN: function() {
					return s
				},
				h1: function() {
					return o
				}
			});
			let e = function(u) {
					return u.INITIAL_FETCH_SCORES = "view bots scores distribution", u.FETCH_CONFIGURATION = "view bots configuration page", u.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", u.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", u.UPDATE_SETTINGS = "update bots settings", u.DELETE_RULE = "delete bots ruleset", u.UPDATE_RULE = "update bots ruleset", u.FETCH_RULES = "view bots ruleset", u.CONFIGURE_BOT_MANAGEMENT = "view bots management", u.WAF_RULES_REDIRECT = "redirect waf rules", u
				}({}),
				o = function(u) {
					return u.PROVIDED_TEMPLATE = "provided template link in detection card", u.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", u.USE_TEMPLATE = "use template", u.CREATE_FIREWALL_RULE = "create firewall rule", u.WAF_RULES = "waf rules", u
				}({});
			const s = "user journey"
		},
		"../react/pages/security/overview/resources/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AZ: function() {
					return u
				},
				Ht: function() {
					return s
				},
				Kx: function() {
					return e
				},
				S: function() {
					return o
				}
			});
			let e = function(l) {
				return l.NAME = "description", l.SOURCE = "source", l.LAST_UPDATE = "lastUpdatedAt", l.ACTIVITY = "activity", l
			}({});
			const o = 5;
			let s = function(l) {
					return l.EXTERNAL_DOCUMENTATION = "external_documentation", l.LINK_TO_MANAGED = "link_to_managed_rules", l.LINK_TO_EVENTS = "link_to_security_events", l.LINK_TO_DDOS = "link_to_ddos", l.LINK_BOT_MGMT = "link_to_bot_mgmt", l.LINK_TO_AI_AUDIT = "link_to_ai_audit", l.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", l.LINK_TO_PAGE_SHIELD = "link_to_page_shield", l.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", l.LINK_TO_SECURITY_EVENTS = "link_to_security_events", l.LINK_TO_IP_RULE = "link_to_ip_rule", l.LINK_TO_CONFIGURATION = "link_to_configuration", l
				}({}),
				u = function(l) {
					return l.LOAD_INSIGHTS = "load overview action items", l.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", l.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", l.CLICK_ACTION_INSIGHT = "click overview action item suggestion", l
				}({})
		},
		"../react/pages/security/page-shield/resources/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				CP: function() {
					return S
				},
				FV: function() {
					return se
				},
				KH: function() {
					return L
				},
				Ks: function() {
					return G
				},
				Lj: function() {
					return ge
				},
				MC: function() {
					return r
				},
				Mq: function() {
					return M
				},
				OV: function() {
					return ue
				},
				Oq: function() {
					return P
				},
				QM: function() {
					return h
				},
				SI: function() {
					return ee
				},
				SJ: function() {
					return y
				},
				Sk: function() {
					return U
				},
				Ti: function() {
					return I
				},
				Uc: function() {
					return C
				},
				Uq: function() {
					return p
				},
				Uv: function() {
					return ne
				},
				V0: function() {
					return f
				},
				VT: function() {
					return c
				},
				YC: function() {
					return j
				},
				j$: function() {
					return A
				},
				qc: function() {
					return _
				},
				sV: function() {
					return O
				},
				sW: function() {
					return re
				},
				u8: function() {
					return d
				},
				v5: function() {
					return n
				},
				xg: function() {
					return Y
				},
				yd: function() {
					return b
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				s = t("../react/pages/security/page-shield/resources/types.ts");

			function u(k) {
				for (var H = 1; H < arguments.length; H++) {
					var J = arguments[H] != null ? Object(arguments[H]) : {},
						D = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(J).filter(function(x) {
						return Object.getOwnPropertyDescriptor(J, x).enumerable
					})), D.forEach(function(x) {
						l(k, x, J[x])
					})
				}
				return k
			}

			function l(k, H, J) {
				return H = m(H), H in k ? Object.defineProperty(k, H, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[H] = J, k
			}

			function m(k) {
				var H = i(k, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function i(k, H) {
				if (typeof k != "object" || k === null) return k;
				var J = k[Symbol.toPrimitive];
				if (J !== void 0) {
					var D = J.call(k, H || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(k)
			}
			const p = 50,
				f = 9,
				n = "copy script url page shield",
				r = "disable page shield",
				a = "click documentation link",
				d = "enable page shield",
				c = "filter search page shield",
				g = "filter search view all page shield",
				_ = "hover score tooltip page shield",
				y = "open alert modal page shield",
				A = "change pagination page shield",
				v = "close script modal page shield",
				b = "open script modal page shield",
				h = "select alert type page shield",
				C = "sort column page shield",
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
				L = {
					STARTS_WITH: o.Gn.startsWith,
					ENDS_WITH: o.Gn.endsWith,
					EQUALS: o.Gn.equals,
					CONTAINS: o.Gn.contains,
					DOES_NOT_CONTAIN: o.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: o.Gn.in
				},
				P = {
					status: {
						example: "active",
						type: e.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [L.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: e.kE.string,
						options: ["true", "false"],
						operators: [L.CONTAINS, L.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [L.EQUALS],
						type: e.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: e.kE.string,
						operators: [L.INCLUDES, L.ENDS_WITH, L.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				S = u({}, P, {
					urls: u({}, P.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				O = {
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
			let w = function(k) {
				return k.SECURITY_THREATS = "Security Threats", k.C2_BOTNET = "C2 & Botnet", k.CRYPTOMINING = "Cryptomining", k.MALWARE = "Malware", k.PHISHING = "Phishing", k.SPYWARE = "Spyware", k.DGA_DOMAINS = "DGA Domains", k.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", k
			}({});
			const U = "https://www.cloudflare.com/plans/enterprise/contact/",
				j = {
					[s.I1.BASE_URI]: "page_shield.policies.form.base_uri",
					[s.I1.CHILD]: "page_shield.policies.form.child",
					[s.I1.CONNECT]: "page_shield.policies.form.connections",
					[s.I1.DEFAULT]: "page_shield.policies.form.default",
					[s.I1.FONT]: "page_shield.policies.form.font",
					[s.I1.FORM_ACTION]: "page_shield.policies.form.form",
					[s.I1.FRAME]: "page_shield.policies.form.frame",
					[s.I1.FRAME_ANCESTORS]: "page_shield.policies.form.frame_ancestors",
					[s.I1.IMAGE]: "page_shield.policies.form.img",
					[s.I1.MANIFEST]: "page_shield.policies.form.manifest",
					[s.I1.MEDIA]: "page_shield.policies.form.media",
					[s.I1.OBJECT]: "page_shield.policies.form.object",
					[s.I1.SCRIPT]: "page_shield.policies.form.script",
					[s.I1.STYLE]: "page_shield.policies.form.style",
					[s.I1.UPGRADE_INSECURE_REQUESTS]: "page_shield.policies.form.upgrade_insecure_requests",
					[s.I1.WORKER]: "page_shield.policies.form.worker"
				},
				Y = {
					[s.I1.BASE_URI]: "firewall.page_shield.policies.table.base_uri",
					[s.I1.CHILD]: "firewall.page_shield.policies.table.child",
					[s.I1.CONNECT]: "firewall.page_shield.policies.table.connections",
					[s.I1.DEFAULT]: "firewall.page_shield.policies.table.default",
					[s.I1.FONT]: "firewall.page_shield.policies.table.font",
					[s.I1.FORM_ACTION]: "firewall.page_shield.policies.table.form",
					[s.I1.FRAME]: "firewall.page_shield.policies.table.frame",
					[s.I1.FRAME_ANCESTORS]: "firewall.page_shield.policies.table.frame_ancestors",
					[s.I1.IMAGE]: "firewall.page_shield.policies.table.img",
					[s.I1.MANIFEST]: "firewall.page_shield.policies.table.manifest",
					[s.I1.MEDIA]: "firewall.page_shield.policies.table.media",
					[s.I1.OBJECT]: "firewall.page_shield.policies.table.object",
					[s.I1.SCRIPT]: "firewall.page_shield.policies.table.script",
					[s.I1.STYLE]: "firewall.page_shield.policies.table.style",
					[s.I1.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[s.I1.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				ne = {
					[s.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[s.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[s.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[s.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[s.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				ue = {
					[s.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[s.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
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
				re = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				ee = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				ge = {
					[s.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[s.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[s.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				G = {
					[s.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[s.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[s.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				I = {
					[s.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[s.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[s.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
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
					return b.Xe
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
					return b.k2
				},
				$g: function() {
					return b.$g
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
					return b.I1
				},
				Wq: function() {
					return b.Wq
				},
				jf: function() {
					return b.jf
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
					return b.R$
				},
				pG: function() {
					return _
				},
				Ar: function() {
					return g
				},
				Sk: function() {
					return u.Sk
				},
				gY: function() {
					return y
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
				CI: function() {
					return a
				},
				p0: function() {
					return d
				},
				xl: function() {
					return p
				},
				Tb: function() {
					return i
				},
				h3: function() {
					return A
				},
				xq: function() {
					return Z
				},
				SQ: function() {
					return H
				},
				C0: function() {
					return J
				},
				av: function() {
					return M
				},
				W3: function() {
					return h
				},
				WO: function() {
					return O
				},
				Dk: function() {
					return ne
				},
				we: function() {
					return ee
				},
				Yt: function() {
					return I
				},
				ex: function() {
					return G
				},
				E1: function() {
					return ge
				},
				e0: function() {
					return se
				},
				UH: function() {
					return w
				},
				Qt: function() {
					return re
				},
				K$: function() {
					return U
				},
				dm: function() {
					return P
				},
				oK: function() {
					return j
				},
				qZ: function() {
					return k
				},
				_4: function() {
					return D
				},
				qo: function() {
					return x
				},
				CB: function() {
					return m
				},
				ti: function() {
					return c
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(o),
				u = t("../react/pages/security/page-shield/resources/constants.ts");
			const l = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", W => (s().sendEvent(u.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), W)),
				m = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", W => (s().sendEvent(u.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), W)),
				i = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", W => (s().sendEvent(u.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), W)),
				p = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				f = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", W => (s().sendEvent(u.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), W)),
				n = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				r = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", W => (s().sendEvent(u.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), W)),
				a = (0, e.ZP)("pageShieldPolicies", "get", "/zones/(zoneId)/page_shield/policies").on("success", W => (s().sendEvent(u.FV.VIEW_PAGE_SHIELD_POLICIES, {
					category: "user journey",
					product: "Page shield"
				}), W)),
				d = (0, e.ZP)("pageShieldPolicy", "get", "/zones/(zoneId)/page_shield/policies/(policiesId)"),
				c = (0, e.ZP)("pageShieldPolicy", "put", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", W => (s().sendEvent(u.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "update"
				}), W)),
				g = (0, e.ZP)("pageShieldPolicy", "delete", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", W => (s().sendEvent(u.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "delete"
				}), W)),
				_ = (0, e.ZP)("pageShieldPolicy", "post", "/zones/(zoneId)/page_shield/policies").on("success", W => (s().sendEvent(u.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "create"
				}), W)),
				y = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				A = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var v = t("../react/app/redux/normalizer.js"),
				b = t("../react/pages/security/page-shield/resources/types.ts");
			const h = W => W.pageShield.configuration,
				C = W => {
					var q;
					return (q = W.pageShield.configuration.data) === null || q === void 0 ? void 0 : q.enabled
				},
				M = W => {
					var q;
					return (q = h(W)) === null || q === void 0 ? void 0 : q.data
				},
				L = W => W.pageShield.scripts,
				P = W => W.pageShield.script,
				S = W => W.pageShield.connections,
				O = W => W.pageShield.connection,
				w = W => W.pageShield.policies,
				U = W => W.pageShield.policy,
				j = (0, v.P1)("pageShieldScripts", L),
				Y = (0, v.P1)("pageShieldScript", P),
				ne = (0, v.P1)("pageShieldConnections", S),
				ue = (0, v.P1)("pageShieldConnection", O),
				se = (0, v.P1)("pageShieldPolicies", w),
				re = (0, v.P1)("pageShieldPolicy", U),
				ee = (W, q) => W === b.Wq.SCRIPT_MONITOR ? j(q) || [] : ne(q) || [],
				ge = (W, q) => W === b.Wq.SCRIPT_MONITOR ? L(q) || [] : S(q) || [],
				G = (W, q) => W === b.Wq.SCRIPT_MONITOR ? Y(q) : ue(q),
				I = W => W.pageShield.domainIntel,
				k = W => W.pageShield.whoIsRecord,
				H = (W, q, de) => {
					var fe;
					const ce = Object.values(de).map(Ee => ({
						key: Ee,
						label: u.Uv[Ee],
						score: W[Ee]
					})).filter(Ee => Ee.score !== void 0 && Ee.score <= q);
					return q === u.V0 && ce.length === 0 && ((fe = W.js_integrity_score) !== null && fe !== void 0 ? fe : 100) <= q && ce.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), ce
				},
				J = (W, q) => Object.values(q).filter(de => W[de] === !0).map(de => u.OV[de]),
				D = W => W === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				x = (W, q) => W[b.$g.MagecartScore] !== void 0 && W[b.$g.MagecartScore] <= q || W[b.$g.MalwareScore] !== void 0 && W[b.$g.MalwareScore] <= q || W[b.$g.CryptominingScore] !== void 0 && W[b.$g.CryptominingScore] <= q || W.js_integrity_score !== void 0 && W.js_integrity_score <= q,
				B = ["cdn.jsdelivr.net", "unpkg.com"],
				z = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				Z = W => {
					if (W.includes("@latest")) {
						const de = W.split("@latest");
						if (de.length != 2) return;
						const fe = de[0].length,
							ce = fe + "@latest".length;
						return [fe, ce]
					}
					if (!!B.some(de => W.includes(de)))
						for (const de of z) {
							const fe = W.match(de);
							if (!fe) continue;
							const ce = fe.index;
							if (ce === 0) return null;
							const Ee = ce + fe[0].length;
							return [ce, Ee]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(F, E, t) {
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
					return i
				},
				k2: function() {
					return r
				}
			});

			function e(a) {
				for (var d = 1; d < arguments.length; d++) {
					var c = arguments[d] != null ? Object(arguments[d]) : {},
						g = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(c).filter(function(_) {
						return Object.getOwnPropertyDescriptor(c, _).enumerable
					})), g.forEach(function(_) {
						o(a, _, c[_])
					})
				}
				return a
			}

			function o(a, d, c) {
				return d = s(d), d in a ? Object.defineProperty(a, d, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[d] = c, a
			}

			function s(a) {
				var d = u(a, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(a, d) {
				if (typeof a != "object" || a === null) return a;
				var c = a[Symbol.toPrimitive];
				if (c !== void 0) {
					var g = c.call(a, d || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(a)
			}
			let l = function(a) {
				return a.BASE_URI = "base-uri", a.CHILD = "child-src", a.CONNECT = "connect-src", a.DEFAULT = "default-src", a.FONT = "font-src", a.FORM_ACTION = "form-action", a.FRAME = "frame-src", a.FRAME_ANCESTORS = "frame-ancestors", a.IMAGE = "img-src", a.MANIFEST = "manifest-src", a.MEDIA = "media-src", a.OBJECT = "object-src", a.SCRIPT = "script-src", a.STYLE = "style-src", a.WORKER = "worker-src", a.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", a
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
			let i = function(a) {
					return a.MONITOR = "monitor", a.POLICIES = "policies", a.SETTINGS = "settings", a
				}({}),
				p = function(a) {
					return a.SCRIPT_MONITOR = "script", a.CONNECTION_MONITOR = "connection", a.COOKIE_MONITOR = "cookie", a
				}({}),
				f = function(a) {
					return a.CryptominingScore = "cryptomining_score", a.MalwareScore = "malware_score", a.MagecartScore = "magecart_score", a
				}({}),
				n = function(a) {
					return a.DataflowScore = "dataflow_score", a.ObfuscationScore = "obfuscation_score", a
				}({}),
				r = function(a) {
					return a.DomainMalicious = "domain_reported_malicious", a.UrlMalicious = "url_reported_malicious", a
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				_C: function() {
					return d
				},
				_R: function() {
					return c
				},
				dY: function() {
					return _
				},
				fy: function() {
					return v
				},
				ji: function() {
					return a
				},
				pR: function() {
					return g
				},
				pV: function() {
					return b
				},
				rj: function() {
					return A
				},
				yR: function() {
					return h
				},
				zf: function() {
					return y
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				o = t("../../../common/util/types/src/api/phases/fields.tsx"),
				s = t("webpack/sharing/consume/default/react/react"),
				u = t.n(s),
				l = t("../react/utils/translator.tsx"),
				m = t("../react/pages/security/resources/types.ts"),
				i = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx");

			function p(C) {
				for (var M = 1; M < arguments.length; M++) {
					var L = arguments[M] != null ? Object(arguments[M]) : {},
						P = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(L).filter(function(S) {
						return Object.getOwnPropertyDescriptor(L, S).enumerable
					})), P.forEach(function(S) {
						f(C, S, L[S])
					})
				}
				return C
			}

			function f(C, M, L) {
				return M = n(M), M in C ? Object.defineProperty(C, M, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[M] = L, C
			}

			function n(C) {
				var M = r(C, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function r(C, M) {
				if (typeof C != "object" || C === null) return C;
				var L = C[Symbol.toPrimitive];
				if (L !== void 0) {
					var P = L.call(C, M || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(C)
			}
			const a = 10;
			let d = function(C) {
					return C.MTLS_ACCESS = "mTLS-enforced authentication", C.ZONE_LOCKDOWN = "Zone lockdown", C.USER_AGENT = "User agent blocking", C.EMAIL_VALIDITY = "Disposable email checks", C.IP_BASED = "IP-based rule", C.GEOGRAPHY_BASE = "Geography-based rule", C
				}({}),
				c = function(C) {
					return C.LEAKED_CREDENTIALS = "Leaked Credentials Checks", C
				}({});
			const g = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				_ = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: d.GEOGRAPHY_BASE,
					trackedEvent: g.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: d.IP_BASED,
					trackedEvent: g.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: d.USER_AGENT,
					trackedEvent: g.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: d.ZONE_LOCKDOWN,
					trackedEvent: g.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				y = {
					[m.X.UI_SECTION]: C => ({
						[d.MTLS_ACCESS]: {
							ruleName: d.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${C.account.id}/${C.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[d.ZONE_LOCKDOWN]: {
							ruleName: d.ZONE_LOCKDOWN,
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${C.account.id}/configurations/lists`
								}]
							})
						},
						[d.USER_AGENT]: {
							ruleName: d.USER_AGENT,
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${C.account.id}/configurations/lists`
								}]
							})
						},
						[d.EMAIL_VALIDITY]: {
							ruleName: d.EMAIL_VALIDITY,
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
					[m.X.WAF_RULES]: {
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
				A = {
					[m.X.WAF_RULES]: {
						[c.LEAKED_CREDENTIALS]: {
							ruleName: c.LEAKED_CREDENTIALS,
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
						[c.LEAKED_CREDENTIALS]: {
							ruleName: c.LEAKED_CREDENTIALS,
							displayName: u().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: u().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let v = function(C) {
				return C.DISCOVERY = "discovery", C.SEQUENCES = "sequences", C.SCHEMA_VALIDATION = "schema-validation", C.SETTINGS = "settings", C.API_RULES = "api-rules", C.UPGRADE = "upgrade", C
			}({});
			const b = p({}, i.g, {
				[o.df.HttpRequestFirewallManaged]: p({}, i.g[o.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[o.df.HttpRequestFirewallCustom]: p({}, i.g[o.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[o.df.HttpRateLimit]: p({}, i.g[o.df.HttpRateLimit], {
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
			let h = function(C) {
				return C.APP_SEC_MVP = "app-security-navigation-mvp", C
			}({})
		},
		"../react/pages/security/resources/types.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				X: function() {
					return e
				}
			});
			let e = function(o) {
				return o.UI_SECTION = "UI_SECTION", o.WAF_RULES = "WAF_RULES", o
			}({})
		},
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				j: function() {
					return p
				},
				y: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(f) {
				for (var n = 1; n < arguments.length; n++) {
					var r = arguments[n] != null ? Object(arguments[n]) : {},
						a = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(r).filter(function(d) {
						return Object.getOwnPropertyDescriptor(r, d).enumerable
					})), a.forEach(function(d) {
						u(f, d, r[d])
					})
				}
				return f
			}

			function u(f, n, r) {
				return n = l(n), n in f ? Object.defineProperty(f, n, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[n] = r, f
			}

			function l(f) {
				var n = m(f, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function m(f, n) {
				if (typeof f != "object" || f === null) return f;
				var r = f[Symbol.toPrimitive];
				if (r !== void 0) {
					var a = r.call(f, n || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(f)
			}
			let i = function(f) {
				return f.CLICK_OPT_IN = "click opt in security navigation", f.CLICK_OPT_IN_BUTTON = "click opt in button", f.CLICK_OPT_OUT_BUTTON = "click opt out button", f.CLICK_NEXT_STEP = "click opt in next step", f.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", f
			}({});
			const p = (f, n = {}) => {
				o().sendEvent(f, s({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$y: function() {
					return a
				},
				Ai: function() {
					return p
				},
				BT: function() {
					return l
				},
				F3: function() {
					return d
				},
				JP: function() {
					return s
				},
				O_: function() {
					return f
				},
				X2: function() {
					return u
				},
				YO: function() {
					return c
				},
				_c: function() {
					return g
				},
				je: function() {
					return r
				},
				ll: function() {
					return m
				},
				qD: function() {
					return i
				},
				tw: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = async _ => {
				var y, A;
				const v = await (0, e.get)(`/zones/${_}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((y = v == null ? void 0 : v.body) === null || y === void 0 || (A = y.result) === null || A === void 0 ? void 0 : A.value) === "enabled"
			}, u = async (_, y) => (await (0, e.post)(`/zones/${_}/content-upload-scan/${y?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), y), l = async _ => {
				var y;
				const A = await (0, e.get)(`/zones/${_}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((y = A == null ? void 0 : A.body) === null || y === void 0 ? void 0 : y.result) || []
			}, m = async (_, y) => {
				var A;
				const v = await (0, e.post)(`/zones/${_}/content-upload-scan/payloads`, {
					body: [y]
				});
				return (A = v == null ? void 0 : v.body) === null || A === void 0 ? void 0 : A.result
			}, i = async (_, y) => (await (0, e.del)(`/zones/${_}/content-upload-scan/payloads/${y}`, {
				hideErrorAlert: !0
			}), y), p = async _ => {
				var y, A;
				const v = await (0, e.get)(`/zones/${_}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((y = v == null ? void 0 : v.body) === null || y === void 0 || (A = y.result) === null || A === void 0 ? void 0 : A.enabled)
			}, f = async (_, y) => {
				var A, v;
				const b = await (0, e.post)(`/zones/${_}/leaked-credential-checks`, {
					body: {
						enabled: y
					}
				});
				return !!((A = b == null ? void 0 : b.body) === null || A === void 0 || (v = A.result) === null || v === void 0 ? void 0 : v.enabled)
			}, n = async _ => {
				var y;
				const A = await (0, e.get)(`/zones/${_}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (y = A == null ? void 0 : A.body) === null || y === void 0 ? void 0 : y.result
			}, r = async (_, y) => {
				var A;
				const v = await (0, e.post)(`/zones/${_}/leaked-credential-checks/detections`, {
					body: y
				});
				return (A = v == null ? void 0 : v.body) === null || A === void 0 ? void 0 : A.result
			}, a = async (_, y) => (await (0, e.del)(`/zones/${_}/leaked-credential-checks/detections/${y}`, {
				hideErrorAlert: !0
			}), y), d = async (_, y) => {
				await (0, e.put)(`/zones/${_}/security-center/securitytxt`, {
					body: y
				})
			}, c = async _ => {
				await (0, e.del)(`/zones/${_}/security-center/securitytxt`)
			}, g = async _ => (await (0, e.get)(`/zones/${_}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Xu: function() {
					return h
				},
				Io: function() {
					return j
				},
				FQ: function() {
					return J
				},
				vU: function() {
					return b
				},
				M: function() {
					return M
				},
				d7: function() {
					return C
				},
				Oz: function() {
					return U
				},
				Np: function() {
					return I
				},
				WR: function() {
					return a
				},
				vE: function() {
					return y
				},
				bE: function() {
					return k
				},
				u_: function() {
					return v
				},
				kU: function() {
					return A
				},
				pf: function() {
					return Y
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				o = t("../react/pages/security/settings/hooks/api.ts"),
				s = t("webpack/sharing/consume/default/react/react"),
				u = t("webpack/sharing/consume/default/react-redux/react-redux"),
				l = t("../react/pages/security/settings/resources/index.ts"),
				m = t("../react/common/hooks/useZoneEntitlement.ts"),
				i = t("../react/common/hooks/useGate.ts"),
				p = t("../react/pages/security/api-shield/utils/useApiShield.tsx"),
				f = t("../react/pages/security/api-shield/entitlements.tsx"),
				n = t("../../../../node_modules/yup/es/index.js"),
				r = t("../react/utils/translator.tsx");
			const a = () => (0, u.useSelector)(l.ui),
				d = "central_endpoint_list.endpoint_labels_allowed",
				c = "system-and-user-generated-labels",
				g = () => !!(0, i.Z)(c),
				_ = () => !!(0, m.Z)(d),
				y = () => {
					const D = g(),
						x = _();
					return {
						isLabelsGateOpen: D,
						hasEndpointLabelsEntitlement: x,
						hasLabels: D && x
					}
				},
				A = () => {
					const {
						hasApiShields: D
					} = (0, p.R)(), {
						hasLabels: x
					} = y(), B = (0, f.Dg)();
					return x && B && D
				},
				v = () => {
					const {
						t: D
					} = (0, r.QT)(), x = n.Z_().required(D("common.field_is_required")).max(24, D("labels.apply.form.name.error.max_characters")).matches(l.DG, D("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", D("labels.apply.form.name.error.cf_forbidden"), Z => !l.aW.test(Z)), B = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: Z => n.Ry().shape({
							[l.n5.NAME]: Z ? n.Z_() : x,
							[l.n5.DESCRIPTION]: Z ? n.Z_().optional() : n.Z_().max(150, D("labels.apply.form.description.error.max_characters"))
						})
					}, z = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[l.N2.NAME]: "",
							[l.N2.SOURCE]: l.W3,
							[l.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => n.Ry().shape({
							[l.N2.NEW_LABEL_NAME]: x
						})
					};
					return {
						LABELS_APPLY_FORM: B,
						EDIT_LABELS_MODAL_FORM: z
					}
				},
				b = ({
					modalHeaderFixedHeight: D = 62,
					modalDefaultPaddings: x = 16
				} = {}) => {
					const B = (0, s.useRef)(null),
						z = (0, s.useRef)(null),
						[Z, W] = (0, s.useState)(0),
						[q, de] = (0, s.useState)(0),
						fe = `calc(100vh - ${Z}px - ${q}px - ${x}px)`,
						[ce, Ee] = (0, s.useState)("");
					return (0, s.useEffect)(() => {
						const Le = () => {
							var Ae, we, Re, Se;
							const K = B == null || (Ae = B.current) === null || Ae === void 0 ? void 0 : Ae.offsetHeight,
								me = z == null || (we = z.current) === null || we === void 0 ? void 0 : we.offsetHeight,
								De = ((Re = K) !== null && Re !== void 0 ? Re : 0) + D,
								Ke = (Se = me) !== null && Se !== void 0 ? Se : 0;
							W(De), de(Ke)
						};
						return Le(), window.addEventListener("resize", Le), () => window.removeEventListener("resize", Le)
					}, []), {
						searchTerm: ce,
						setSearchTerm: Ee,
						scrollableSectionMaxHeight: fe,
						topMenuRef: B,
						bottomMenuRef: z
					}
				},
				h = D => {
					const x = a(),
						B = (0, e.useQueryClient)(),
						z = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${D}`,
							queryFn: () => (0, o.JP)(D),
							enabled: x
						}),
						Z = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${D}`,
							queryFn: () => (0, o.BT)(D),
							enabled: x && !!(z == null ? void 0 : z.data)
						}),
						W = (0, e.useMutation)({
							mutationFn: async ({
								enabled: fe
							}) => await (0, o.X2)(D, fe),
							onSuccess: fe => {
								B.setQueryData([`content-scanning-enabled-${D}`], fe)
							}
						}),
						q = (0, e.useMutation)({
							mutationFn: fe => (0, o.ll)(D, fe),
							onSuccess: fe => {
								B.setQueryData([`content-scanning-detections-${D}`], fe)
							}
						}),
						de = (0, e.useMutation)({
							mutationFn: fe => (0, o.qD)(D, fe),
							onSuccess: fe => {
								var ce;
								const Ee = (ce = B.getQueryData(`content-scanning-detections-${D}`)) !== null && ce !== void 0 ? ce : [];
								B.setQueryData([`content-scanning-detections-${D}`], Ee.filter(({
									id: Le
								}) => Le !== fe))
							}
						});
					return {
						entitled: x,
						loading: z.isLoading || Z.isLoading,
						error: z.isError || Z.isError,
						enabled: {
							data: z.data,
							isToggling: W.isLoading,
							toggleEnabled: async fe => W.mutateAsync({
								enabled: fe
							})
						},
						detections: {
							data: Z.data,
							add: q.mutateAsync,
							delete: de.mutateAsync,
							loading: q.isLoading || de.isLoading
						}
					}
				},
				C = () => {
					const D = (0, u.useSelector)(l.cN),
						x = (0, u.useSelector)(l.bH),
						B = (0, u.useSelector)(l.P3),
						z = (0, u.useSelector)(l.Ri);
					return {
						hasEditPermission: D,
						isEnabled: B && (x.hasSimilarLeaked || x.hasUsernameAndPasswordLeaked || z)
					}
				},
				M = D => {
					const x = C(),
						B = (0, e.useQueryClient)(),
						z = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${D}`,
							queryFn: () => (0, o.Ai)(D),
							enabled: !!x.isEnabled,
							retry: 1
						}),
						Z = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${D}`,
							queryFn: () => (0, o.tw)(D),
							enabled: !!x.isEnabled && !!(z == null ? void 0 : z.data)
						}),
						W = (0, e.useMutation)({
							mutationFn: ({
								enabled: fe
							}) => (0, o.O_)(D, fe),
							onSuccess: fe => {
								B.setQueryData([`leaked-credentials-enabled-${D}`], fe)
							}
						}),
						q = (0, e.useMutation)({
							mutationFn: async fe => await (0, o.je)(D, fe),
							onSuccess: fe => {
								var ce;
								const Ee = (ce = B.getQueryData(`leaked-credentials-detections-${D}`)) !== null && ce !== void 0 ? ce : [];
								B.setQueryData([`leaked-credentials-detections-${D}`], [...Ee, fe])
							}
						}),
						de = (0, e.useMutation)({
							mutationFn: fe => (0, o.$y)(D, fe),
							onSuccess: fe => {
								var ce;
								const Ee = (ce = B.getQueryData(`leaked-credentials-detections-${D}`)) !== null && ce !== void 0 ? ce : [];
								B.setQueryData([`leaked-credentials-detections-${D}`], Ee.filter(({
									id: Le
								}) => Le !== fe))
							}
						});
					return {
						entitled: x.isEnabled,
						hasEditPermissions: x.hasEditPermission,
						loading: z.isLoading || Z.isLoading,
						error: z.isError || z.isError,
						enabled: {
							data: z.data,
							isToggling: W.isLoading,
							toggleEnabled: async fe => W.mutateAsync({
								enabled: fe
							})
						},
						detections: {
							data: Z.data,
							add: q.mutateAsync,
							delete: de.mutateAsync,
							loading: q.isLoading || de.isLoading
						}
					}
				};
			var L = t("../react/common/selectors/zoneSelectors.ts"),
				P = t("../react/common/utils/useQueryCache.ts"),
				S = t("../react/app/redux/index.ts");
			const O = "security-txt",
				w = {
					securityTxt: ({
						zoneId: D
					}) => [O, D]
				},
				U = D => (0, e.useQuery)({
					queryKey: w.securityTxt({
						zoneId: D
					}),
					queryFn: () => (0, o._c)(D),
					select: x => x.result
				}),
				j = () => {
					const D = (0, S.p4)(L.Cu),
						{
							invalidate: x
						} = (0, P.o)(w.securityTxt({
							zoneId: D
						}));
					return (0, e.useMutation)({
						mutationFn: () => (0, o.YO)(D),
						onSuccess: async () => {
							await x(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				Y = D => {
					const {
						invalidate: x
					} = (0, P.o)(w.securityTxt({
						zoneId: D
					}));
					return (0, e.useMutation)({
						mutationFn: B => (0, o.F3)(D, B),
						onSuccess: async () => {
							await x(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var ne = t("../../../../node_modules/lodash/isEqual.js"),
				ue = t.n(ne),
				se = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function re(D) {
				for (var x = 1; x < arguments.length; x++) {
					var B = arguments[x] != null ? Object(arguments[x]) : {},
						z = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(B).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(B, Z).enumerable
					})), z.forEach(function(Z) {
						ee(D, Z, B[Z])
					})
				}
				return D
			}

			function ee(D, x, B) {
				return x = ge(x), x in D ? Object.defineProperty(D, x, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[x] = B, D
			}

			function ge(D) {
				var x = G(D, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function G(D, x) {
				if (typeof D != "object" || D === null) return D;
				var B = D[Symbol.toPrimitive];
				if (B !== void 0) {
					var z = B.call(D, x || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(D)
			}
			const I = D => {
					const {
						queryKey: x,
						zoneId: B
					} = (0, se.hL)(D), {
						isLoading: z,
						isError: Z,
						isSuccess: W,
						data: q,
						refetch: de,
						isRefetching: fe
					} = (0, e.useQuery)({
						queryKey: x,
						queryFn: () => se.Mi.getLabels(re({
							zoneId: B
						}, D)),
						onSuccess: () => {
							var ce;
							const Ee = D == null || (ce = D.filters) === null || ce === void 0 ? void 0 : ce.source;
							(Ee === l.LABEL_SOURCES.MANAGED || Ee === l.LABEL_SOURCES.USER) && (0, l.Tf)({
								name: l.QJ.FILTER_USER_MANAGED_LABELS,
								product: l.Iv.SECURITY_SETTINGS,
								pageName: l.R.LABELS_LIST,
								type: Ee
							})
						}
					});
					return {
						data: q == null ? void 0 : q.result,
						errors: q == null ? void 0 : q.errors,
						paginationData: q == null ? void 0 : q.result_info,
						isLoading: z,
						isError: Z,
						isSuccess: W,
						refetch: de,
						isRefetching: fe
					}
				},
				k = ({
					labels: D,
					preselectedLabels: x
				}) => {
					const {
						USER: B,
						MANAGED: z
					} = l.LABEL_SOURCES, [Z, W] = (0, s.useState)({
						[B]: [],
						[z]: []
					}), [q, de] = (0, s.useState)(new Set), fe = q.size > 0, [ce, Ee] = (0, s.useState)(!1), Le = Se => {
						de(K => {
							const me = new Set(K);
							return me.has(Se.name) ? me.delete(Se.name) : me.add(Se.name), me
						})
					}, Ae = Se => q.has(Se.name), we = (Se, K) => {
						const me = Ae(Se) ? 1 : 0;
						return (Ae(K) ? 1 : 0) - me
					}, Re = Se => {
						W(K => ({
							[B]: [...Se ? Se[B] : K[B]].sort(we),
							[z]: [...Se ? Se[z] : K[z]].sort(we)
						}))
					};
					return (0, s.useEffect)(() => {
						if (D && !ce) {
							if (x) {
								const Se = new Set;
								D.forEach(K => {
									x.some(me => ue()(me, K)) && Se.add(K.name)
								}), de(Se)
							}
							Ee(!0)
						}
					}, [D, x, ce]), (0, s.useEffect)(() => {
						if (D && ce) {
							const Se = D.reduce((me, De) => (De.source === B ? me[B].push(De) : De.source === z && me[z].push(De), me), {
									[B]: [],
									[z]: []
								}),
								K = {
									[B]: Se[B].sort(we),
									[z]: Se[z].sort(we)
								};
							W(K)
						}
					}, [B, z, D, ce]), {
						userAndManagedLabels: Z,
						setUserAndManagedLabels: W,
						toggleSelectedLabel: Le,
						isLabelSelected: Ae,
						sortLabelsBySelectedStatus: Re,
						hasLabelsSelected: fe
					}
				};
			var H = t("../react/pages/security/settings/resources/selectors.ts");
			const J = (D = "") => {
				const x = (0, S.p4)(H.Xs),
					B = x && (D == null ? void 0 : D.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: x,
					hasDeprecatedParameter: B
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				FQ: function() {
					return p.FQ
				},
				Io: function() {
					return p.Io
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
				kU: function() {
					return p.kU
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
				vE: function() {
					return p.vE
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
				s = t("webpack/sharing/consume/default/react/react"),
				u = t.n(s),
				l = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = t.n(m),
				p = t("../react/pages/security/settings/hooks/index.ts"),
				f = t("../react/pages/security/settings/resources/index.ts");
			const n = u().lazy(() => Promise.all([t.e(37800), t.e(4e4), t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(48759), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(60911), t.e(63779), t.e(9147), t.e(45275), t.e(31021), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(68665), t.e(87940), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				r = () => {
					const {
						t: a
					} = (0, m.useI18n)(), d = (0, e.xk)("waf");
					return u().createElement(l.T3, {
						parentPageLabel: a("navigation.zone.security"),
						title: a("navigation.zone.security.settings"),
						type: "narrow"
					}, d.read ? u().createElement(n, null) : u().createElement(o.Z, null))
				};
			E.ZP = r
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Mi: function() {
					return v
				},
				hL: function() {
					return A
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				s = t("../react/common/utils/useQueryCache.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/common/hooks/useAccountId.ts"),
				m = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				i = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const p = {
				labels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, i.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, i.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var f = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(h, C) {
				if (h == null) return {};
				var M = d(h, C),
					L, P;
				if (Object.getOwnPropertySymbols) {
					var S = Object.getOwnPropertySymbols(h);
					for (P = 0; P < S.length; P++) L = S[P], !(C.indexOf(L) >= 0) && (!Object.prototype.propertyIsEnumerable.call(h, L) || (M[L] = h[L]))
				}
				return M
			}

			function d(h, C) {
				if (h == null) return {};
				var M = {},
					L = Object.keys(h),
					P, S;
				for (S = 0; S < L.length; S++) P = L[S], !(C.indexOf(P) >= 0) && (M[P] = h[P]);
				return M
			}

			function c(h) {
				for (var C = 1; C < arguments.length; C++) {
					var M = arguments[C] != null ? Object(arguments[C]) : {},
						L = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(M).filter(function(P) {
						return Object.getOwnPropertyDescriptor(M, P).enumerable
					})), L.forEach(function(P) {
						g(h, P, M[P])
					})
				}
				return h
			}

			function g(h, C, M) {
				return C = _(C), C in h ? Object.defineProperty(h, C, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[C] = M, h
			}

			function _(h) {
				var C = y(h, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function y(h, C) {
				if (typeof h != "object" || h === null) return h;
				var M = h[Symbol.toPrimitive];
				if (M !== void 0) {
					var L = M.call(h, C || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(h)
			}
			const A = h => {
					const C = (0, e.p4)(o.Cu),
						M = (0, l.F)(),
						L = b.labels(c({
							accountId: M,
							zoneId: C
						}, h ? c({}, h) : {})),
						P = (0, s.o)(L);
					return c({
						zoneId: C,
						queryKey: L,
						batchInvalidateLabels: async () => {
							await P.batchInvalidate({
								queryKeysToPredicateInvalidate: [u.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, P)
				},
				v = {
					getLabels: async h => {
						var C, M, L, P;
						let {
							zoneId: S,
							hideErrorAlert: O = !0
						} = h, w = a(h, ["zoneId", "hideErrorAlert"]);
						return (await m.get(p.labels.toUrl({
							zoneId: S
						}), {
							parameters: {
								page: w == null ? void 0 : w.page,
								per_page: w == null ? void 0 : w.per_page,
								with_mapped_resource_counts: w == null ? void 0 : w.with_mapped_resource_counts,
								filter: w == null || (C = w.filters) === null || C === void 0 ? void 0 : C.search,
								source: (0, n.sQ)(w == null || (M = w.filters) === null || M === void 0 ? void 0 : M.source),
								order: w == null || (L = w.sort) === null || L === void 0 ? void 0 : L.id,
								direction: (w == null ? void 0 : w.sort) ? (w == null || (P = w.sort) === null || P === void 0 ? void 0 : P.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: O
						})).body
					},
					getLabel: async h => {
						let {
							zoneId: C,
							labelName: M,
							hideErrorAlert: L = !0
						} = h, P = a(h, ["zoneId", "labelName", "hideErrorAlert"]);
						const S = (0, n.mm)(M) ? p.managedLabel.toUrl({
							zoneId: C,
							labelName: M
						}) : p.userLabel.toUrl({
							zoneId: C,
							labelName: M
						});
						return (await m.get(S, {
							parameters: {
								with_mapped_resource_counts: P == null ? void 0 : P.with_mapped_resource_counts
							},
							hideErrorAlert: L
						})).body
					},
					editLabel: async ({
						zoneId: h,
						label: C,
						replace: M
					}) => {
						const {
							name: L
						} = C, P = a(C, ["name"]);
						return (await (M ? m.put : m.patch)(p.userLabel.toUrl({
							zoneId: h,
							labelName: C.name
						}), {
							body: P
						})).body
					},
					deleteLabel: async ({
						zoneId: h,
						labelName: C
					}) => (await m.del(p.userLabel.toUrl({
						zoneId: h,
						labelName: C
					}))).body,
					createLabel: async h => {
						let {
							zoneId: C
						} = h, M = a(h, ["zoneId"]);
						const {
							product: L
						} = M, P = a(M, ["product"]);
						return (await m.post(p.userLabels.toUrl({
							zoneId: C
						}), {
							body: [P]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: h,
						user: C,
						managed: M,
						operationIds: L,
						replace: P
					}) => (await (P ? m.put : m.post)(p.operationsLinkedToLabels.toUrl({
						zoneId: h
					}), {
						body: c({}, C ? {
							user: {
								labels: C
							}
						} : {}, M ? {
							managed: {
								labels: M
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: L
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: h,
						labelName: C,
						operationIds: M
					}) => {
						const L = (0, n.mm)(C) ? p.managedLabelOperations.toUrl({
							zoneId: h,
							labelName: C
						}) : p.userLabelOperations.toUrl({
							zoneId: h,
							labelName: C
						});
						return (await m.put(L, {
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
					labels: h => {
						let {
							accountId: C,
							zoneId: M
						} = h, L = a(h, ["accountId", "zoneId"]);
						return [u.IQ.LABELS, C, M, ...(0, f.isEmpty)(L) ? [] : [L]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				DG: function() {
					return _
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return i
				},
				GE: function() {
					return M
				},
				IQ: function() {
					return u
				},
				KV: function() {
					return m
				},
				LABELS_LIST_TOASTS: function() {
					return d
				},
				LABEL_SOURCES: function() {
					return l
				},
				QH: function() {
					return c
				},
				V: function() {
					return b
				},
				W3: function() {
					return s
				},
				_8: function() {
					return a
				},
				_c: function() {
					return h
				},
				aW: function() {
					return y
				},
				dC: function() {
					return P
				},
				gY: function() {
					return C
				},
				j8: function() {
					return p
				},
				jz: function() {
					return g
				},
				n5: function() {
					return A
				},
				om: function() {
					return f
				},
				w: function() {
					return o
				},
				zF: function() {
					return L
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let o = function(S) {
				return S.EXPOSED_CREDENTIALS = "exposed_credentials", S.CONTENT_SCANNING = "content_scanning", S
			}({});
			const s = "all";
			let u = function(S) {
					return S.LABELS = "labels", S
				}({}),
				l = function(S) {
					return S.USER = "user", S.MANAGED = "managed", S
				}({}),
				m = function(S) {
					return S.SOURCE = "source", S
				}({}),
				i = function(S) {
					return S.NAME = "name", S.SOURCE = "source", S.NEW_LABEL_NAME = "newLabelName", S
				}({}),
				p = function(S) {
					return S.ENDPOINT = "endpoint", S.METHOD = "method", S.OPERATION_ID = "operationId", S
				}({}),
				f = function(S) {
					return S.NAME = "name", S.MAPPED_RESOURCES = "mapped_resources.operations", S.SOURCE = "source", S.APPLY = "apply", S
				}({});
			const a = {
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
						[m.SOURCE]: s
					}
				},
				filters: m,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let d = function(S) {
				return S.CREATED_LABEL = "createdLabel", S.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", S.DELETED_LABEL = "deletedLabel", S.APPLIED_LABEL = "appliedLabel", S.EDITED_LABEL = "editedLabel", S.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", S
			}({});
			const c = "650px",
				g = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				_ = /^[A-Za-z0-9-]+$/,
				y = /^cf-/;
			let A = function(S) {
				return S.NAME = "name", S.DESCRIPTION = "description", S
			}({});
			const v = "all";
			let b = function(S) {
				return S.METHOD = "method", S.HOSTNAME = "hostname", S
			}({});
			const h = {
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
						[b.METHOD]: v,
						[b.HOSTNAME]: v
					}
				},
				filters: b
			};
			let C = function(S) {
				return S.TITLE = "title", S.DESCRIPTION = "description", S.SUBMIT = "submit", S
			}({});
			const M = 1e3,
				L = {
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
				P = "exposed-credentials-module"
		},
		"../react/pages/security/settings/resources/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
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
					return r
				},
				zF: function() {
					return e.zF
				},
				QJ: function() {
					return g
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
					return s.QF
				},
				vc: function() {
					return s.vc
				},
				ZF: function() {
					return a
				},
				Xs: function() {
					return A.Xs
				},
				wG: function() {
					return s.N2
				},
				Q4: function() {
					return s.Q4
				},
				Wv: function() {
					return s.Wv
				},
				bH: function() {
					return A.bH
				},
				Mb: function() {
					return s.Mb
				},
				ui: function() {
					return A.ui
				},
				P3: function() {
					return A.P3
				},
				Ri: function() {
					return A.Ri
				},
				cN: function() {
					return A.cN
				},
				m8: function() {
					return y
				},
				Tf: function() {
					return _
				},
				$E: function() {
					return s.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				o = t("../react/pages/security/settings/resources/types.ts"),
				s = t("../react/pages/security/settings/resources/utils.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(u);

			function m(v) {
				for (var b = 1; b < arguments.length; b++) {
					var h = arguments[b] != null ? Object(arguments[b]) : {},
						C = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(h).filter(function(M) {
						return Object.getOwnPropertyDescriptor(h, M).enumerable
					})), C.forEach(function(M) {
						i(v, M, h[M])
					})
				}
				return v
			}

			function i(v, b, h) {
				return b = p(b), b in v ? Object.defineProperty(v, b, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[b] = h, v
			}

			function p(v) {
				var b = f(v, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function f(v, b) {
				if (typeof v != "object" || v === null) return v;
				var h = v[Symbol.toPrimitive];
				if (h !== void 0) {
					var C = h.call(v, b || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(v)
			}
			let n = function(v) {
					return v.LABELS_LIST = "Labels List page", v.LABELS_APPLY = "Labels Apply page", v.LABELS_SIDE_MODAL = "Labels Side Modal", v.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", v.LABELS_OPERATION_DETAILS = "Operation Details page", v
				}({}),
				r = function(v) {
					return v.API_SHIELD = "API Shield", v.SECURITY_SETTINGS = "Security Settings", v
				}({}),
				a = function(v) {
					return v.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", v.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", v.OPERATIONS_TABLE_ROW = "Operations table row", v.OPERATION_DETAILS_PAGE = "Operation details page", v
				}({}),
				d = function(v) {
					return v.UPSERT = "upsert", v.OVERWRITE = "overwrite", v
				}({}),
				c = function(v) {
					return v.SINGLE = "single", v.MULTIPLE = "multiple", v
				}({}),
				g = function(v) {
					return v.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", v.DELETE_LABEL = "delete a user label in the settings page", v.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", v.CREATE_LABEL_CLICKED = "click create label button in the settings page", v.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", v.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", v.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", v.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", v.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", v.OPEN_LABELS_SIDE_MODAL = "open labels side modal", v.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", v.CREATE_NEW_LABEL = "create a new label", v
				}({});
			const _ = ({
					name: v,
					product: b,
					category: h = "user journey",
					pageName: C,
					from: M,
					write_strategy: L,
					type: P,
					target: S
				}) => {
					l().sendEvent(v, m({
						category: h,
						pageName: C,
						product: b
					}, M ? {
						from: M
					} : {}, L ? {
						write_strategy: L
					} : {}, P ? {
						type: P
					} : {}, S ? {
						target: S
					} : {}))
				},
				y = () => {
					var v;
					return (v = Object.values(g)) === null || v === void 0 ? void 0 : v.flat()
				};
			var A = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				P3: function() {
					return p
				},
				Ri: function() {
					return f
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
				s = t("../react/common/selectors/entitlementsSelectors.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const m = a => {
					const d = (0, e.RO)(a),
						c = !!(0, s.rV)(a, "rulesets.file_upload_scan_allowed"),
						g = !!(0, s.BF)(a, "rulesets.file_upload_scan_allowed");
					return (0, o.el)(window.location.pathname) ? d && (c || g) : g
				},
				i = a => Number((0, s.rV)(a, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				p = a => (0, s.rV)(a, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				f = a => (0, s.rV)(a, "rulesets.leaked_credential_checks_allowed"),
				n = a => (0, l.z1)(u.dC)(a) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, s.rV)(a, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, s.rV)(a, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				r = a => !!(0, l.z1)("deprecate-security-level")(a)
		},
		"../react/pages/security/settings/resources/types.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				T: function() {
					return o
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let o = function(s) {
				return s.ENABLED = "enabled", s.CONTACT = "contact", s.EXPIRES = "expires", s.ENCRYPTION = "encryption", s.ACKNOWLEDGMENTS = "acknowledgments", s.CANONICAL = "canonical", s.HIRING = "hiring", s.POLICY = "policy", s.PREFERRED_LANGUAGES = "preferred_languages", s
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$E: function() {
					return a
				},
				Mb: function() {
					return d
				},
				N2: function() {
					return b
				},
				Q4: function() {
					return g
				},
				QF: function() {
					return r
				},
				Vy: function() {
					return y
				},
				Wv: function() {
					return c
				},
				mm: function() {
					return v
				},
				sQ: function() {
					return A
				},
				vc: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				s = t("../react/pages/security/settings/routes.tsx"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/pages/security/settings/resources/types.ts"),
				m = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function i(h) {
				for (var C = 1; C < arguments.length; C++) {
					var M = arguments[C] != null ? Object(arguments[C]) : {},
						L = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(M).filter(function(P) {
						return Object.getOwnPropertyDescriptor(M, P).enumerable
					})), L.forEach(function(P) {
						p(h, P, M[P])
					})
				}
				return h
			}

			function p(h, C, M) {
				return C = f(C), C in h ? Object.defineProperty(h, C, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[C] = M, h
			}

			function f(h) {
				var C = n(h, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function n(h, C) {
				if (typeof h != "object" || h === null) return h;
				var M = h[Symbol.toPrimitive];
				if (M !== void 0) {
					var L = M.call(h, C || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(h)
			}
			const r = {
					[l.T.ENABLED]: !0,
					[l.T.CONTACT]: [""],
					[l.T.EXPIRES]: ""
				},
				a = {
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
				d = h => e.Ry({
					[l.T.CONTACT]: e.IX().of(e.Z_().required(h("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, h("security_txt.fields.contact.format_error"))),
					[l.T.EXPIRES]: e.hT().required(h("common.required")).min(new Date, h("security_txt.fields.expires.min_error"))
				}),
				c = h => {
					const C = {};
					for (const M in h) C[M] = Array.isArray(h[M]) ? h[M].filter(L => !!L) : h[M];
					return i({}, C, {
						expires: (0, m.DZ)(h.expires)
					})
				},
				g = (h, C, M) => {
					const L = [...new Set([l.T.CONTACT, l.T.EXPIRES, ...Object.values(l.T)])],
						P = Object.entries(h).sort(([S], [O]) => L.indexOf(S) - L.indexOf(O)).filter(([S, O]) => !!a[S] && !!O && (!Array.isArray(O) || !!O.length)).map(([S, O]) => Array.isArray(O) ? O.map(w => `${M(a[S].label)}: ${w}`).join(`
`) : `${M(a[S].label)}: ${O}`).join(`
`);
					(0, o.yH)(`Cloudflare_${C}_security.txt`, P, "text/plain;charset=utf-8")
				};
			let _ = function(h) {
				return h.CREATED = "created security.txt", h.ENABLED = "enabled security.txt", h.DISABLED = "disabled security.txt", h.DOWNLOADED = "downloaded security.txt", h.UPDATED = "updated security.txt", h.DELETED = "deleted security.txt", h
			}({});
			const y = h => (h == null ? void 0 : h.source) === u.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (h == null ? void 0 : h.source) === u.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				A = h => h === u.W3 ? void 0 : h,
				v = h => u.aW.test(h),
				b = h => {
					switch (h) {
						case u.w.CONTENT_SCANNING:
							return s.ROUTES.CONTENT_SCANNING;
						case u.w.EXPOSED_CREDENTIALS:
							return s.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Sb: function() {
					return f
				},
				Vj: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(c) {
						return Object.getOwnPropertyDescriptor(a, c).enumerable
					})), d.forEach(function(c) {
						u(n, c, a[c])
					})
				}
				return n
			}

			function u(n, r, a) {
				return r = l(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function l(n) {
				var r = m(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
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
				p = {
					product: "WAF Managed Rules"
				},
				f = ({
					event: n,
					category: r = "user journey",
					product: a = "waf",
					productName: d = "Managed Rules",
					additionalData: c
				}) => {
					o().sendEvent(n, s({
						category: r,
						product: a,
						productName: d
					}, c || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				D: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CLICK_MENU_ITEM_SHARE = "click on share item", o.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", o.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", o.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", o.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", o.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", o.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", o.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", o.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", o.CLICK_ON_DELETE_RULESET = "click on delete ruleset", o.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", o
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/stream/actionTypes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ReplaceVideos = "stream.replace_videos", o.PrependVideo = "stream.prepend_video", o.UpdateVideo = "stream.update_video", o.UpdateVideoPending = "steam.update_video_pending", o.RemoveVideos = "stream.remove_videos", o.StoreUploader = "stream.store_uploader", o.UpsertUploads = "stream.upsert_uploads", o.RemoveUploads = "stream.remove_uploads", o.UpdateUploadProgress = "stream.update_upload_progress", o.UploadViaUrl = "stream.upload_via_url", o.SetLoading = "stream.set_loading", o.SetStorageLoading = "stream.set_storage_loading", o.SetStorage = "stream.set_storage", o.SetPage = "stream.set_page", o.SetPausedUploads = "stream.set_paused_uploads", o.RemovePausedUpload = "stream.remove_paused_upload", o.SetRequestTimestamp = "stream.set_request_timestamp", o.ResetState = "stream.reset_state", o
			}({})
		},
		"../react/pages/stream/reducer.ts": function(F, E, t) {
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
				o = t("../react/pages/stream/actionTypes.ts"),
				s = t("../react/pages/stream/util/pager.ts");

			function u(r) {
				for (var a = 1; a < arguments.length; a++) {
					var d = arguments[a] != null ? Object(arguments[a]) : {},
						c = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(d).filter(function(g) {
						return Object.getOwnPropertyDescriptor(d, g).enumerable
					})), c.forEach(function(g) {
						l(r, g, d[g])
					})
				}
				return r
			}

			function l(r, a, d) {
				return a = m(a), a in r ? Object.defineProperty(r, a, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = d, r
			}

			function m(r) {
				var a = i(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function i(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var c = d.call(r, a || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const p = "stream",
				f = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(r = f, a) {
				switch (a.type) {
					case o.U.ResetState:
						return f;
					case o.U.SetStorageLoading:
						const {
							storageLoading: d
						} = a;
						return u({}, r, {
							storageLoading: d
						});
					case o.U.SetStorage:
						return u({}, r, {
							storage: a.payload ? u({}, r.storage, a.payload) : void 0
						});
					case o.U.ReplaceVideos:
						return u({}, r, {
							videos: a.videos
						});
					case o.U.PrependVideo:
						return u({}, r, {
							videos: [a.video, ...r.videos].filter((c, g) => g < s.FJ)
						});
					case o.U.UpdateVideo:
						return u({}, r, {
							videos: r.videos.map(c => c.uid === a.video.uid ? a.video : c)
						});
					case o.U.UpdateVideoPending:
						return u({}, r, {
							videoUpdateStatuses: u({}, r.videoUpdateStatuses, {
								[a.uid]: a.status
							})
						});
					case o.U.RemoveVideos:
						return u({}, r, {
							videos: r.videos.filter(c => !a.ids.includes(c.uid))
						});
					case o.U.SetLoading:
						return u({}, r, {
							loading: a.loading
						});
					case o.U.SetRequestTimestamp:
						return u({}, r, {
							requestTimestamp: a.requestTimestamp
						});
					case o.U.UploadViaUrl:
						return r;
					default:
						return (0, e.h)(a, r)
				}
			}
		},
		"../react/pages/stream/selectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
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
					return g
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
					return a
				},
				bm: function() {
					return d
				},
				mX: function() {
					return _
				},
				pW: function() {
					return m
				},
				xW: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/pages/stream/reducer.ts");
			const u = y => y[s.nY],
				l = y => u(y).videos,
				m = y => u(y).videoUpdateStatuses,
				i = y => u(y).loading,
				p = y => u(y).requestTimestamp,
				f = y => u(y).storageLoading,
				n = y => u(y).storage,
				r = y => (0, o.BF)(y, "stream.enabled") || (0, e.bC)(y),
				a = y => (0, e.Le)(y, "stream", "connect"),
				d = y => (0, e.Le)(y, "stream", "stream-4371"),
				c = y => (0, e.Le)(y, "stream", "public-details-enabled"),
				g = y => !!(0, e.Le)(y, "stream", "llhls"),
				_ = y => {
					const A = n(y);
					return A !== void 0 && A.limitMins > A.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				FJ: function() {
					return e
				},
				d6: function() {
					return s
				},
				wL: function() {
					return o
				}
			});
			const e = 30;

			function o(u, l, m) {
				const i = {
					search: m,
					limit: e.toString()
				};
				return l !== void 0 && (i.end = l), i
			}

			function s(u, l, m) {
				return {
					limit: e.toString(),
					search: m,
					asc: "true",
					start_comp: "gt",
					start: l
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", o.POOL_TABLE = "click on expandable row on pool", o.CREATE_MONITOR_LINK = "click on create a monitor", o.EDIT_MONITOR_LINK = "click on edit a monitor", o.EDIT_MONITOR = "edit monitor", o.CREATE_MONITOR = "create monitor", o.CREATE_POOL_LINK = "click on create a pool", o.EDIT_POOL_LINK = "click on edit a pool", o.EDIT_POOL = "edit pool", o.CREATE_POOL = "create pool", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return s
				},
				X: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let s = function(l) {
				return l.CREATE = "create waiting room", l.UPDATE = "update waiting room", l.EVENTS = "view waiting rooms events", l.ANALYTICS = "view waiting room analytics", l.GENERATE_PREVIEW = "generate waiting room preview link", l
			}({});
			const u = async l => {
				await o().sendEvent(l, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(F, E, t) {
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
				o = t.n(e);

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var d = arguments[a] != null ? Object(arguments[a]) : {},
						c = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(d).filter(function(g) {
						return Object.getOwnPropertyDescriptor(d, g).enumerable
					})), c.forEach(function(g) {
						u(r, g, d[g])
					})
				}
				return r
			}

			function u(r, a, d) {
				return a = l(a), a in r ? Object.defineProperty(r, a, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = d, r
			}

			function l(r) {
				var a = m(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var c = d.call(r, a || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const i = "TURNSTILE";
			let p = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const f = ({
					name: r,
					product: a = i,
					category: d = "user journey",
					page: c,
					additionalData: g = {}
				}) => {
					o().sendEvent(r, s({
						category: d,
						page: c,
						product: a
					}, g || {}))
				},
				n = () => {
					var r;
					return (r = Object.values(p)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return p
				},
				Ky: function() {
					return f
				},
				RJ: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(c) {
						return Object.getOwnPropertyDescriptor(a, c).enumerable
					})), d.forEach(function(c) {
						u(n, c, a[c])
					})
				}
				return n
			}

			function u(n, r, a) {
				return r = l(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function l(n) {
				var r = m(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let i = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.BACK_BUTTON = "clicked back from user group detail", n.ADD_MEMBER_BUTTON = "click add member button", n.MEMBER_DETAIL_MENU = "click user group member detail menu", n.MEMBER_DETAIL_VIEW = "click view in user group member detail menu", n.MEMBER_DETAIL_EDIT = "click edit in user group member detail menu", n.MEMBER_DETAIL_DELETE = "click delete in user group member detail menu", n.MEMBER_DELETE = "delete user group member", n.MEMBER_DETAIL_DELETE_CANCEL = "click cancel delete user group member", n.ADD_POLICY_BUTTON = "click add user group policy button", n
			}({});
			const p = ({
					name: n,
					additionalData: r = {}
				}) => {
					o().sendEvent(n, s({}, r || {}))
				},
				f = () => {
					var n;
					return (n = Object.values(i)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/zone-versioning/selectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$e: function() {
					return M
				},
				$h: function() {
					return v
				},
				G: function() {
					return C
				},
				M3: function() {
					return P
				},
				Tr: function() {
					return y
				},
				UY: function() {
					return g
				},
				bH: function() {
					return r
				},
				fv: function() {
					return S
				},
				hF: function() {
					return b
				},
				iw: function() {
					return d
				},
				m7: function() {
					return n
				},
				re: function() {
					return h
				},
				tp: function() {
					return c
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				o = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/SidebarNav/permissions.ts"),
				l = t("../react/common/selectors/entitlementsSelectors.ts");

			function m(O) {
				for (var w = 1; w < arguments.length; w++) {
					var U = arguments[w] != null ? Object(arguments[w]) : {},
						j = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(U).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(U, Y).enumerable
					})), j.forEach(function(Y) {
						i(O, Y, U[Y])
					})
				}
				return O
			}

			function i(O, w, U) {
				return w = p(w), w in O ? Object.defineProperty(O, w, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[w] = U, O
			}

			function p(O) {
				var w = f(O, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function f(O, w) {
				if (typeof O != "object" || O === null) return O;
				var U = O[Symbol.toPrimitive];
				if (U !== void 0) {
					var j = U.call(O, w || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(O)
			}
			const n = O => (0, s.nA)(O) ? (0, l.p1)(O) && (0, u.$n)(O, "zone_versioning", "versioning") : !1,
				r = O => O.zoneVersioning.zoneApplications,
				a = (0, e.P1)("zoneApplications", r),
				d = O => O.zoneVersioning.zoneVersions,
				c = (0, e.P1)("zoneVersions", d),
				g = (0, o.P1)(c, O => {
					if (O) return O.filter(w => w.status == "V")
				}),
				_ = O => O.zoneVersioning.environments,
				y = O => O.zoneVersioning.environments.isRequesting,
				A = (0, e.P1)("environments", _),
				v = (0, o.P1)(a, O => {
					if (O) {
						if (O.length === 1) return O[0];
						O.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${O.length}`))
					}
					return null
				}),
				b = (0, o.P1)(A, O => O ? O.environments : []),
				h = O => {
					var w;
					return (w = O.zoneVersioning) === null || w === void 0 ? void 0 : w.zoneVersionSelector
				},
				C = (0, o.P1)(h, c, (O, w) => {
					if (!(O == null ? void 0 : O.isVersion) || !w) return null;
					const U = w.find(j => {
						if (j.version === O.selectedVersion && j.locked) return !0
					});
					return U ? m({}, U, {
						isLocked: !0
					}) : null
				}),
				M = (0, o.P1)(c, b, (O, w) => !w || !O ? [] : O.map(U => {
					const j = [];
					for (const Y in w) w[Y].version === U.version && j.push(w[Y]);
					return m({}, U, {
						environments: j
					})
				})),
				L = O => O.zoneVersioning.WAFMigrationStatus,
				P = (0, e.P1)("WAFMigrationStatus", L),
				S = O => O.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$2: function() {
					return L
				},
				CI: function() {
					return C
				},
				IS: function() {
					return i
				},
				L7: function() {
					return l
				},
				Lt: function() {
					return c
				},
				Oj: function() {
					return a
				},
				QV: function() {
					return g
				},
				X$: function() {
					return b
				},
				X6: function() {
					return f
				},
				d4: function() {
					return d
				},
				fE: function() {
					return p
				},
				im: function() {
					return A
				},
				lv: function() {
					return _
				},
				rL: function() {
					return n
				},
				wW: function() {
					return m
				}
			});

			function e(P) {
				for (var S = 1; S < arguments.length; S++) {
					var O = arguments[S] != null ? Object(arguments[S]) : {},
						w = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(O).filter(function(U) {
						return Object.getOwnPropertyDescriptor(O, U).enumerable
					})), w.forEach(function(U) {
						o(P, U, O[U])
					})
				}
				return P
			}

			function o(P, S, O) {
				return S = s(S), S in P ? Object.defineProperty(P, S, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[S] = O, P
			}

			function s(P) {
				var S = u(P, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function u(P, S) {
				if (typeof P != "object" || P === null) return P;
				var O = P[Symbol.toPrimitive];
				if (O !== void 0) {
					var w = O.call(P, S || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(P)
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
				p = {
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
				a = {
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
				c = {
					free: {
						minutes: 3e3
					},
					paid: {
						minutes: 6e3
					}
				},
				g = {
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
					templateDeployClick: "template deploy click",
					reauthenticateGithubModalShown: "reauthenticate github modal shown",
					updateGithubPermissionsClicked: "update github permissions clicked"
				},
				_ = {
					insufficientData: "insufficient data to create/update trigger",
					createRepoConnectionError: "error creating repo connection",
					createTokenError: "error creating token",
					createUpdateTriggerError: "error creating/updating trigger",
					updateEnvironmentVariablesError: "error updating trigger environment variables",
					createWorkerError: "error creating worker",
					buildWorkerError: "error building worker"
				},
				y = "workers.dev",
				A = "YYYY-MM-DD HH:mm:SS ZZ",
				v = "active",
				b = ["bundled", "unbound", "standard"],
				h = null,
				C = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let M = function(P) {
				return P[P.NONE = 0] = "NONE", P[P.MISS = 1] = "MISS", P[P.EXPIRED = 2] = "EXPIRED", P[P.UPDATING = 3] = "UPDATING", P[P.STALE = 4] = "STALE", P[P.HIT = 5] = "HIT", P[P.IGNORED = 6] = "IGNORED", P[P.BYPASS = 7] = "BYPASS", P[P.REVALIDATED = 8] = "REVALIDATED", P[P.DYNAMIC = 9] = "DYNAMIC", P[P.STREAM_HIT = 10] = "STREAM_HIT", P[P.DEFERRED = 11] = "DEFERRED", P
			}({});
			const L = [M.HIT, M.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return i
				},
				L: function() {
					return s
				},
				Q9: function() {
					return u
				},
				_j: function() {
					return l
				},
				ky: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = p => `${p}.workers.dev`,
				s = (p, f, n) => `${n?`${n}.`:""}${p}.${o(f)}`,
				u = (p, f, n) => `https://${s(p,f,n)}`,
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
						workerTriggers: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/triggers`,
						configAutofill: (0, e.BC)`/accounts/${"accountId"}/builds/repos/${"providerType"}/${"providerAccountId"}/${"repoId"}/config_autofill?branch=${"branch"}&root_directory=${"rootDirectory"}`,
						accountLimits: (0, e.BC)`/accounts/${"accountId"}/builds/account/limits`
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				MN: function() {
					return s
				},
				Yg: function() {
					return l
				},
				i$: function() {
					return u
				},
				l3: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = async ([i, p]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: i,
					variables: p
				})
			})).body, u = async (...i) => (await e.get(...i)).body, l = i => async (p, f) => {
				const n = await fetch(p, f).then(r => r.json());
				return i.assertDecode(n)
			}, m = async (...i) => (await u(...i)).result;
			E.ZP = {
				fetcher: i => Array.isArray(i) ? m(...i) : m(i)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(F, E) {
				E()
			})(this, function() {
				"use strict";

				function F() {
					var t = !0,
						e = !1,
						o = null,
						s = {
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

					function u(_) {
						return !!(_ && _ !== document && _.nodeName !== "HTML" && _.nodeName !== "BODY" && "classList" in _ && "contains" in _.classList)
					}

					function l(_) {
						var y = _.type,
							A = _.tagName;
						return !!(A == "INPUT" && s[y] && !_.readOnly || A == "TEXTAREA" && !_.readOnly || _.isContentEditable)
					}

					function m(_) {
						_.getAttribute("is-focus-visible") !== "" && _.setAttribute("is-focus-visible", "")
					}

					function i(_) {
						_.getAttribute("is-focus-visible") === "" && _.removeAttribute("is-focus-visible")
					}

					function p(_) {
						u(document.activeElement) && m(document.activeElement), t = !0
					}

					function f(_) {
						t = !1
					}

					function n(_) {
						!u(_.target) || (t || l(_.target)) && m(_.target)
					}

					function r(_) {
						!u(_.target) || _.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), i(_.target))
					}

					function a(_) {
						document.visibilityState == "hidden" && (e && (t = !0), d())
					}

					function d() {
						document.addEventListener("mousemove", g), document.addEventListener("mousedown", g), document.addEventListener("mouseup", g), document.addEventListener("pointermove", g), document.addEventListener("pointerdown", g), document.addEventListener("pointerup", g), document.addEventListener("touchmove", g), document.addEventListener("touchstart", g), document.addEventListener("touchend", g)
					}

					function c() {
						document.removeEventListener("mousemove", g), document.removeEventListener("mousedown", g), document.removeEventListener("mouseup", g), document.removeEventListener("pointermove", g), document.removeEventListener("pointerdown", g), document.removeEventListener("pointerup", g), document.removeEventListener("touchmove", g), document.removeEventListener("touchstart", g), document.removeEventListener("touchend", g)
					}

					function g(_) {
						_.target.nodeName.toLowerCase() !== "html" && (t = !1, c())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", f, !0), document.addEventListener("pointerdown", f, !0), document.addEventListener("touchstart", f, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", a, !0), d(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function E(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && E(F)
			})
		},
		"../react/utils/bootstrap.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$8: function() {
					return o
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return u
				},
				gm: function() {
					return s
				}
			});
			const e = () => {
					var l, m, i;
					return (l = window) === null || l === void 0 || (m = l.bootstrap) === null || m === void 0 || (i = m.data) === null || i === void 0 ? void 0 : i.security_token
				},
				o = () => {
					var l, m, i;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (m = l.data) === null || m === void 0 || (i = m.user) === null || i === void 0 ? void 0 : i.id)
				},
				s = () => {
					var l, m;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (m = l.data) === null || m === void 0 ? void 0 : m.is_kendo)
				},
				u = () => {
					var l, m, i, p;
					return (l = window) === null || l === void 0 || (m = l.bootstrap) === null || m === void 0 || (i = m.data) === null || i === void 0 || (p = i.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				O5: function() {
					return u
				},
				Xm: function() {
					return s
				},
				kT: function() {
					return i
				},
				wV: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				s = () => (o() || "").indexOf("C0002") !== -1,
				u = () => (o() || "").indexOf("C0003") !== -1,
				l = () => (o() || "").indexOf("C0004") !== -1,
				m = () => (o() || "").indexOf("C0005") !== -1,
				i = n => {
					const r = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				p = () => {
					var n;
					const r = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				f = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AI: function() {
					return b
				},
				Kd: function() {
					return r
				},
				S8: function() {
					return v
				},
				ZW: function() {
					return p
				},
				ay: function() {
					return h
				},
				fh: function() {
					return C
				},
				i_: function() {
					return a
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
				s = t("../../../common/intl/intl-types/src/index.ts"),
				u = t("../../../common/util/types/src/utils/index.ts"),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m = t("../../../../node_modules/cookie/index.js");
			const i = "cf-sync-locale-with-cps",
				p = s.Q.en_US,
				f = "en_US",
				n = "cf-locale";

			function r() {
				const P = (0, m.parse)(document.cookie);
				return l.Z.get(n) || P[n] || null
			}

			function a(P) {
				document.cookie = (0, m.serialize)(n, P, {
					path: "/",
					maxAge: 31536e3
				}), l.Z.set(n, P)
			}

			function d() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const c = P => (0, u.Yd)(s.Q).find(S => s.Q[S] === P) || f,
				g = [],
				_ = [],
				y = [s.Q.de_DE, s.Q.en_US, s.Q.es_ES, s.Q.fr_FR, s.Q.it_IT, s.Q.pt_BR, s.Q.ko_KR, s.Q.ja_JP, s.Q.zh_CN, s.Q.zh_TW],
				A = {
					test: [...y, ..._, ...g],
					development: [...y, ..._, ...g],
					staging: [...y, ..._, ...g],
					production: [...y, ..._]
				},
				v = P => {
					const S = s.Q[P];
					return A.production.includes(S)
				},
				b = () => Object.keys(s.Q).filter(P => v(P)),
				h = P => {
					const S = s.Q[P];
					return _.includes(S)
				},
				C = P => M[P],
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
				L = o().locale();
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
			}), o().locale(L)
		},
		"../react/utils/translator.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				QT: function() {
					return c
				},
				Vb: function() {
					return p
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
					return a
				},
				oc: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = t("../../../common/intl/intl-core/src/Translator.ts"),
				s = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				u = t.n(s),
				l = t("../flags.ts");
			const m = new o.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
			});

			function i(g, ..._) {
				return m.t(g, ..._)
			}
			const p = m;

			function f(g, ..._) {
				return markdown(i(g, _))
			}

			function n(g) {
				if (Number(g) !== 0) {
					if (g % 86400 == 0) return i("time.num_days", {
						smart_count: g / 86400
					});
					if (g % 3600 == 0) return i("time.num_hours", {
						smart_count: g / 3600
					});
					if (g % 60 == 0) return i("time.num_minutes", {
						smart_count: g / 60
					})
				}
				return i("time.num_seconds", {
					smart_count: g
				})
			}

			function r(g, _) {
				return g in _ ? _[g] : void 0
			}
			const a = s.Trans,
				d = s.I18n,
				c = s.useI18n
		},
		"../react/utils/url.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Ct: function() {
					return h
				},
				Fl: function() {
					return k
				},
				KT: function() {
					return J
				},
				NF: function() {
					return _
				},
				Nw: function() {
					return v
				},
				Pd: function() {
					return A
				},
				Uh: function() {
					return ge
				},
				Y_: function() {
					return g
				},
				e1: function() {
					return b
				},
				el: function() {
					return U
				},
				hW: function() {
					return Y
				},
				pu: function() {
					return H
				},
				qR: function() {
					return w
				},
				td: function() {
					return y
				},
				uW: function() {
					return ue
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/r2/routes.ts"),
				m = t("../react/pages/zoneless-workers/routes.ts"),
				i = t("../react/pages/pages/routes.ts"),
				p = t("../react/pages/d1/routes.ts");

			function f(D) {
				for (var x = 1; x < arguments.length; x++) {
					var B = arguments[x] != null ? Object(arguments[x]) : {},
						z = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(B).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(B, Z).enumerable
					})), z.forEach(function(Z) {
						n(D, Z, B[Z])
					})
				}
				return D
			}

			function n(D, x, B) {
				return x = r(x), x in D ? Object.defineProperty(D, x, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[x] = B, D
			}

			function r(D) {
				var x = a(D, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function a(D, x) {
				if (typeof D != "object" || D === null) return D;
				var B = D[Symbol.toPrimitive];
				if (B !== void 0) {
					var z = B.call(D, x || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(D)
			}
			const {
				endsWithSlash: d
			} = s.default, c = (D, x) => {
				const B = D.replace(d, "").split("/");
				return B.slice(0, 2).concat([x]).concat(B.slice(3)).join("/")
			}, g = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), _ = D => `/${D.replace(d,"").replace(/^\//,"")}`, y = D => v("add-site", D), A = D => v("billing", D), v = (D, x) => x ? `/${x}${D?`/${D}`:""}` : `/?to=/:account/${D}`, b = () => {
				const D = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return D ? D[1] : null
			}, h = (D, x) => o().stringify(f({}, o().parse(D), x)), C = (D = "") => D.toString().replace(/([\/]{1,})$/, ""), M = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], L = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, P = /^\/(\w{32,})(\/[^.]*)?/, S = D => M.includes(D), O = D => !S(D), w = D => !S(D) && P.test(D), U = D => !S(D) && L.test(D), j = D => L.exec(D), Y = D => {
				if (U(D)) return D.split("/").filter(x => x.length > 0)[1]
			}, ne = D => P.exec(D), ue = D => {
				if (w(D)) {
					const x = ne(D);
					if (x) return x[1]
				}
			}, se = D => w(D) && D.split("/")[2] === "register-domain", re = D => se(D) ? D.split("/") : null, ee = D => {
				if (U(D)) {
					const [, , , x, B, z, Z, W] = D.split("/");
					return x === "traffic" && B === "load-balancing" && z === "pools" && Z === "edit" && W
				}
			}, ge = D => {
				const x = re(D);
				if (x) return x[3]
			}, G = (D, x) => {
				var B, z;
				return ((B = D.pattern.match(/\:/g)) !== null && B !== void 0 ? B : []).length - ((z = x.pattern.match(/\:/g)) !== null && z !== void 0 ? z : []).length
			}, I = [...Object.values(u.C), ...Object.values(l._j), ...Object.values(m._j), ...Object.values(i._j), ...Object.values(p._)].sort(G);

			function k(D) {
				if (!O(D)) return D;
				for (const W of I)
					if (W.expression.test(D)) return W.pattern;
				const x = re(D);
				if (x) {
					const [, , W, , ...q] = x;
					return `/:accountId/${W}/:domainName/${q.join("/")}`
				}
				if (ee(D)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const z = j(D);
				if (z) {
					const [, , , , W] = z;
					return `/:accountId/:zoneName${W||""}`
				}
				const Z = ne(D);
				if (Z) {
					const [, , W] = Z;
					return `/:accountId${W||""}`
				}
				return D
			}

			function H(D) {
				if (!!D) try {
					const B = D.split(".").pop();
					if (B && B.length > 0) return B
				} catch {}
			}

			function J(D, x = document.location.href) {
				try {
					const B = new URL(D),
						z = new URL(x);
					if (B.origin === z.origin) return `${B.pathname}${B.search}${B.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				r: function() {
					return i
				},
				y: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(u);
			const m = /^\/domainconnect\/v2\/domaintemplates\//i,
				i = "domain-connect-redirect",
				p = () => {
					const f = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						m.test(f.pathname) && s.Z.set(i, f, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(F, E, t) {
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
		"../react/utils/zoneLevelAccess.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				P: function() {
					return u
				},
				b: function() {
					return l
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				o = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function s() {
				var m, i, p, f, n, r;
				return (m = window) === null || m === void 0 || (i = m.bootstrap) === null || i === void 0 || (p = i.data) === null || p === void 0 || (f = p.user) === null || f === void 0 || (n = f.betas) === null || n === void 0 || (r = n.some) === null || r === void 0 ? void 0 : r.call(n, a => a === "zone_level_access_beta")
			}

			function u() {
				const m = !!(0, e.Z)("zone-level-access");
				return s() || m
			}

			function l(m) {
				const i = !!(0, o.z1)("zone-level-access")(m);
				return s() || i
			}
		},
		"../utils/getDashVersion.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				p: function() {
					return s
				},
				t: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var u, l;
					return (u = window) === null || u === void 0 || (l = u.build) === null || l === void 0 ? void 0 : l.dashVersion
				},
				s = () => {
					var u;
					return ((0, e.parse)((u = document) === null || u === void 0 ? void 0 : u.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Wi: function() {
					return Ve
				},
				IM: function() {
					return xe
				},
				yV: function() {
					return Oe
				},
				Ug: function() {
					return ve
				},
				v_: function() {
					return Ne
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				s = t("../react/utils/bootstrap.ts"),
				u = t("../react/app/providers/storeContainer.js"),
				l = t("../react/common/selectors/languagePreferenceSelector.ts"),
				m = t("../flags.ts"),
				i = t("../../../../node_modules/cookie/index.js"),
				p = t("../react/utils/url.ts"),
				f = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../../../../node_modules/lodash-es/memoize.js"),
				a = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				d = t("../utils/getDashVersion.ts"),
				c = t("../react/common/selectors/accountSelectors.ts"),
				g = t("../react/common/selectors/entitlementsSelectors.ts");

			function _(pe) {
				for (var te = 1; te < arguments.length; te++) {
					var Ce = arguments[te] != null ? Object(arguments[te]) : {},
						he = Object.keys(Ce);
					typeof Object.getOwnPropertySymbols == "function" && he.push.apply(he, Object.getOwnPropertySymbols(Ce).filter(function(Pe) {
						return Object.getOwnPropertyDescriptor(Ce, Pe).enumerable
					})), he.forEach(function(Pe) {
						y(pe, Pe, Ce[Pe])
					})
				}
				return pe
			}

			function y(pe, te, Ce) {
				return te = A(te), te in pe ? Object.defineProperty(pe, te, {
					value: Ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : pe[te] = Ce, pe
			}

			function A(pe) {
				var te = v(pe, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function v(pe, te) {
				if (typeof pe != "object" || pe === null) return pe;
				var Ce = pe[Symbol.toPrimitive];
				if (Ce !== void 0) {
					var he = Ce.call(pe, te || "default");
					if (typeof he != "object") return he;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(pe)
			}
			const b = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				h = (0, r.Z)(pe => {
					try {
						return b.assertDecode((0, i.parse)(pe))
					} catch (te) {
						return console.error(te), {}
					}
				}),
				C = pe => (te, Ce, he) => {
					try {
						const Xe = window.location.pathname,
							Je = (0, u.bh)().getState(),
							ut = h(document.cookie),
							dt = _({
								page: (0, p.Fl)(he.page || window.location.pathname),
								dashVersion: (0, d.t)()
							}, ut);
						if (te === "identify") {
							var Pe, Ue;
							const Fe = {
								gates: (0, a.T2)(Je) || {},
								country: (Pe = t.g) === null || Pe === void 0 || (Ue = Pe.bootstrap) === null || Ue === void 0 ? void 0 : Ue.ip_country
							};
							return pe(te, Ce, _({}, dt, Fe, he))
						} else {
							const Fe = {
								accountId: (0, p.uW)(Xe),
								zoneName: (0, p.hW)(Xe),
								domainName: (0, p.Uh)(Xe)
							};
							if ((0, p.qR)(Xe)) {
								var We;
								const Ze = (0, c.D0)(Je);
								Fe.isEntAccount = !!(Ze == null || (We = Ze.meta) === null || We === void 0 ? void 0 : We.has_enterprise_zones) || (0, g.p1)(Je)
							}
							if ((0, p.el)(Xe)) {
								var tt;
								const Ze = (0, f.nA)(Je);
								Fe.zoneId = Ze == null ? void 0 : Ze.id, Fe.plan = Ze == null || (tt = Ze.plan) === null || tt === void 0 ? void 0 : tt.legacy_id
							}
							return pe(te, Ce, _({}, dt, Fe, he))
						}
					} catch (Xe) {
						return console.error(Xe), pe(te, Ce, he)
					}
				},
				M = pe => async (te, Ce, he) => {
					try {
						return await pe(te, Ce, he)
					} catch (Pe) {
						if (console.error(Pe), !Ne()) throw Pe;
						return {
							status: "rejected",
							reason: Pe
						}
					}
				};
			var L = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				P = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				S = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				O = t("../react/common/middleware/sparrow/errors.ts"),
				w = t("../react/pages/caching/tracking.tsx"),
				U = t("../react/pages/home/domain-registration/tracking.ts"),
				j = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				Y = t("../react/pages/hyperdrive/tracking.ts"),
				ne = t("../react/pages/magic/overview/tracking.ts"),
				ue = t("../react/pages/magic/packet-captures/constants.ts"),
				se = t("../react/pages/page-rules/tracking.ts"),
				re = t("../react/pages/pages/constants.ts"),
				ee = t("../react/pages/pipelines/tracking.ts"),
				ge = t("../react/pages/security-center/BlockedContent/constants.ts"),
				G = t("../react/pages/security-center/tracking.ts"),
				I = t("../react/pages/security/api-shield/tracking.ts"),
				k = t("../react/pages/security/bots/tracking.ts"),
				H = t("../react/pages/security/resources/constants.tsx"),
				J = t("../react/pages/security/page-shield/resources/index.ts"),
				D = t("../react/pages/home/configurations/lists/tracking.ts"),
				x = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				B = t("../react/pages/home/alerts/tracking.ts"),
				z = t("../react/pages/dns/dns-records/tracking.ts"),
				Z = t("../react/pages/magic/network-monitoring/constants.ts"),
				W = t("../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts"),
				q = t("../react/pages/security/settings/index.tsx"),
				de = t("../react/pages/shared-config/sparrowEvents.tsx"),
				fe = t("../react/pages/spectrum/tracking.tsx"),
				ce = t("../react/pages/traffic/argo/tracking.ts"),
				Ee = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Le = t("../react/pages/turnstile/tracking.ts"),
				Ae = t("../react/pages/zoneless-workers/constants.ts"),
				we = t("../react/app/components/AccountHome/tracking.ts"),
				Re = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Se = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				K = t("../react/pages/user-groups/sparrowEvents.ts"),
				me = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				De = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				Ke = t("../react/pages/security/overview/resources/constants.ts");
			const nt = ((pe, te, ...Ce) => n.eg.union([n.eg.literal(pe), n.eg.literal(te), ...Ce.map(he => n.eg.literal(he))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", we.gX.SPARROW_PROJECTS_TABLE_CLICK, we.gX.SPARROW_EMPTY_STATE_CTA_CLICK, we.gX.SPARROW_PRODUCT_CARD_CLICK, we.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, we.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, we.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, we.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, we.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ae.QV.clickedDownloadAnalytics, Ae.QV.clickedPrintAnalytics, Ae.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ae.QV.addWCITriggerToExistingWorker, Ae.QV.updateWCITrigger, Ae.QV.deleteWCITrigger, Ae.QV.addWCITriggerToNewWorker, Ae.QV.createWCIBuildForNewWorker, Ae.QV.completedWCIBuildForNewWorker, Ae.QV.changedDefaultConfigurations, re.QV.toggledPagesSmartPlacement, re.QV.downloadDemoProject, Ae.QV.clickCreateWorkerFromRepoNextStep, Ae.QV.clickCreateWorkerFromRepoPreviousStep, Ae.QV.clickCreateNewSCMConnection, Ae.QV.redirectFromSCMOAuth, Ae.QV.clickSubmitError, Ae.QV.selectTemplate, Ae.QV.templateStubWorkerCreated, Ae.QV.templateStubWorkerCreationFailed, Ae.QV.templateRepositoryCreated, Ae.QV.templateRepositoryCreationFailed, Ae.QV.copyTemplateC3Command, Ae.QV.templateDeployClick, Ae.QV.reauthenticateGithubModalShown, Ae.QV.updateGithubPermissionsClicked, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", k.N3.INITIAL_FETCH_SCORES, k.N3.FETCH_CONFIGURATION, k.N3.INITIAL_FETCH_TIME_SERIES, k.N3.INITIAL_FETCH_ATTRIBUTES, k.N3.UPDATE_SETTINGS, k.N3.DELETE_RULE, k.N3.UPDATE_RULE, k.N3.FETCH_RULES, k.N3.CONFIGURE_BOT_MANAGEMENT, k.N3.WAF_RULES_REDIRECT, j.F.TOGGLE_TCP_PROTECTION, j.F.GET_TCP_PROTECTION_PREFIXES, j.F.CREATE_TCP_PROTECTION_PREFIXES, j.F.CREATE_TCP_PROTECTION_PREFIX, j.F.UPDATE_TCP_PROTECTION_PREFIX, j.F.DELETE_TCP_PROTECTION_PREFIX, j.F.DELETE_TCP_PROTECTION_PREFIXES, j.F.GET_TCP_PROTECTION_ALLOWLIST, j.F.CREATE_TCP_PROTECTION_ALLOWLIST, j.F.UPDATE_TCP_PROTECTION_ALLOWLIST, j.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, j.F.DELETE_TCP_PROTECTION_ALLOWLIST, j.F.GET_SYN_PROTECTION_RULES, j.F.GET_SYN_PROTECTION_RULE, j.F.CREATE_SYN_PROTECTION_RULE, j.F.UPDATE_SYN_PROTECTION_RULE, j.F.DELETE_SYN_PROTECTION_RULE, j.F.GET_TCP_FLOW_PROTECTION_RULES, j.F.GET_TCP_FLOW_PROTECTION_RULE, j.F.CREATE_TCP_FLOW_PROTECTION_RULE, j.F.UPDATE_TCP_FLOW_PROTECTION_RULE, j.F.DELETE_TCP_FLOW_PROTECTION_RULE, j.F.GET_SYN_PROTECTION_FILTERS, j.F.GET_SYN_PROTECTION_FILTER, j.F.CREATE_SYN_PROTECTION_FILTER, j.F.UPDATE_SYN_PROTECTION_FILTER, j.F.DELETE_SYN_PROTECTION_FILTER, j.F.GET_TCP_FLOW_PROTECTION_FILTERS, j.F.GET_TCP_FLOW_PROTECTION_FILTER, j.F.CREATE_TCP_FLOW_PROTECTION_FILTER, j.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, j.F.DELETE_TCP_FLOW_PROTECTION_FILTER, j.F.GET_DNS_PROTECTION_RULES, j.F.GET_DNS_PROTECTION_RULE, j.F.CREATE_DNS_PROTECTION_RULE, j.F.UPDATE_DNS_PROTECTION_RULE, j.F.DELETE_DNS_PROTECTION_RULE, J.FV.MANAGE_PAGE_SHIELD_POLICY, J.FV.CONFIGURE_PAGE_SHIELD, J.FV.VIEW_DETECTED_CONNECTIONS, J.FV.VIEW_DETECTED_SCRIPTS, J.FV.VIEW_PAGE_SHIELD_POLICIES, J.FV.VIEW_PAGE_SHIELD_SETTINGS, J.FV.OPEN_MUTABLE_VERSION_TOOLTIP, J.FV.SHOW_MUTABLE_VERSION_TOOLTIP, D.y.CREATE_LIST, D.y.DELETE_LIST, D.y.ADD_LIST_ITEM, D.y.DELETE_LIST_ITEM, Y.KO.PURCHASE_WORKERS_PAID, Y.KO.LIST_CONFIGS, Y.KO.SEARCH_CONFIGS, Y.KO.CREATE_HYPERDRIVE_CONFIG, Y.KO.VIEW_CONFIG_DETAILS, Y.KO.UPDATE_CACHING_SETTINGS, Y.KO.DELETE_HYPERDRIVE_CONFIG, Y.KO.CLICK_HYPERDRIVE_DOCUMENTATION, Y.KO.CLICK_GET_STARTED_GUIDE, Y.KO.CLICK_CONNECTIVITY_GUIDES, Y.KO.CLICK_QUICK_LINK, Y.KO.CLICK_DISCORD, Y.KO.CLICK_COMMUNITY, fe.N.CNAME, fe.N.IP_ADDRESS, fe.N.LB, fe.N.UPDATE_CNAME, fe.N.UPDATE_IP_ADDRESS, fe.N.UPDATE_LB, fe.N.DISABLE, w.N.TIERED_CACHE, w.N.CACHE_PURGE, w.N.CACHE_ANALYTICS, ...(0, Le.P)(), ...(0, S.x4)(), ...(0, q.m8)(), ...(0, K.Ky)(), ...(0, me.Cf)(), Ee.N.CREATE, Ee.N.EVENTS, Ee.N.ANALYTICS, Ee.N.UPDATE, Ee.N.GENERATE_PREVIEW, G.RY.INITIATE_URL_SCAN, G.RY.LOAD_SCAN_INFO, G.Ev.LOAD_THREAT_EVENTS, G.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, G.Ev.THREAT_EVENTS_FILTERS, G.v9.EXPAND_INSIGHT_ROW, G.v9.ONE_CLICK_RESOLVE_BUTTON, G.v9.FOLLOW_RESOLVE_URL, G.v9.MANAGE_INSIGHT, G.v9.CLICK_SCAN_NOW, G.v9.CLICK_EXPORT_INSIGHTS, G.v9.BULK_ARCHIVE, G.v9.CLICK_DETAILS_BUTTON, I.Fj[I.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, I.Fj[I.kq.ENDPOINT_MANAGEMENT].detailedMetrics, I.Fj[I.kq.ENDPOINT_MANAGEMENT].createEndpoint, I.Fj[I.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, I.Fj[I.kq.ENDPOINT_MANAGEMENT].deployRouting, I.Fj[I.kq.ENDPOINT_MANAGEMENT].deleteRouting, I.Fj[I.kq.API_DISCOVERY].viewDiscoveredEndpoints, I.Fj[I.kq.API_DISCOVERY].saveDiscoveredEndpoint, I.Fj[I.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, I.Fj[I.kq.SCHEMA_VALIDATION].viewSchemasList, I.Fj[I.kq.SCHEMA_VALIDATION].uploadSchema, I.Fj[I.kq.SCHEMA_VALIDATION].viewSchemaAdoption, I.Fj[I.kq.SCHEMA_VALIDATION].downloadSchema, I.Fj[I.kq.SCHEMA_VALIDATION].deleteSchema, I.Fj[I.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, I.Fj[I.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, I.Fj[I.kq.SEQUENCE_ANALYTICS].viewSequencesPage, I.Fj[I.kq.JWT_VALIDATION].viewJWTRules, I.Fj[I.kq.JWT_VALIDATION].addJWTRule, I.Fj[I.kq.JWT_VALIDATION].editJWTRule, I.Fj[I.kq.JWT_VALIDATION].deleteJWTRule, I.Fj[I.kq.JWT_VALIDATION].reprioritizeJWTRule, I.Fj[I.kq.JWT_VALIDATION].viewJWTConfigs, I.Fj[I.kq.JWT_VALIDATION].addJWTConfig, I.Fj[I.kq.JWT_VALIDATION].editJWTConfig, I.Fj[I.kq.JWT_VALIDATION].deleteJWTConfig, I.Fj[I.kq.SETTINGS].redirectToFirewallRulesTemplate, I.Fj[I.kq.SETTINGS].redirectToPages, I.Fj[I.kq.SETTINGS].listSessionIdentifiers, I.Fj[I.kq.SETTINGS].listRequestsContainingSessionIdentifiers, I.Fj[I.kq.SETTINGS].addOrRemoveSessionIdentifiers, I.Fj[I.kq.SETTINGS].redirectToCustomRules, I.Fj[I.kq.SETTINGS].listAllFallthroughSchemas, I.Fj[I.kq.SEQUENCE_RULES].listSequenceRules, I.Fj[I.kq.SEQUENCE_RULES].deleteSequenceRule, I.Fj[I.kq.SEQUENCE_RULES].reorderSequenceRule, I.Fj[I.kq.SEQUENCE_RULES].createSequenceRule, I.Fj[I.kq.SEQUENCE_RULES].editSequenceRule, x.Z.ANALYTICS, x.Z.CREATE_AND_DEPLOY, x.Z.CREATE_MONITOR_LINK, x.Z.CREATE_MONITOR, x.Z.CREATE_POOL_LINK, x.Z.CREATE_POOL, x.Z.EDIT_MONITOR, x.Z.EDIT_POOL, x.Z.LOAD_BALANCING_TABLE, x.Z.POOL_TABLE, x.Z.EDIT_MONITOR_LINK, x.Z.EDIT_POOL_LINK, B.y.SECONDARY_DNS_NOTIFICATION_CREATE, B.y.SECONDARY_DNS_NOTIFICATION_UPDATE, B.y.SECONDARY_DNS_NOTIFICATION_DELETE, z.U.ZONE_TRANSFER_SUCCESS, z.U.DNS_RECORD_CREATE, z.U.DNS_RECORD_UPDATE, z.U.DNS_RECORD_DELETE, Se.Y.PEER_DNS_CREATE, Se.Y.PEER_DNS_UPDATE, Se.Y.PEER_DNS_DELETE, Se.Y.ZONE_TRANSFER_ENABLE, Se.Y.ZONE_TRANSFER_DISABLE, ce.V.ARGO_ENABLEMENT, ce.V.ARGO_GEO_ANALYTICS_FETCH, ce.V.ARGO_GLOBAL_ANALYTICS_FETCH, ue.X.VIEW_BUCKETS_LIST, ue.X.CREATE_BUCKET, ue.X.VALIDATE_BUCKET, ue.X.DELETE_BUCKET, ue.X.VIEW_CAPTURES_LIST, ue.X.CREATE_SIMPLE_CAPTURE, ue.X.CREATE_FULL_CAPTURE, ue.X.VIEW_FULL_CAPTURE, ue.X.DOWNLOAD_SIMPLE_CAPTURE, Z.bK.VIEW_RULES, Z.bK.CREATE_RULE, Z.bK.UPDATE_RULE, Z.bK.DELETE_RULE, Z.bK.VIEW_CONFIGURATION, Z.bK.CREATE_CONFIGURATION, Z.bK.UPDATE_CONFIGURATION, Z.bK.DELETE_CONFIGURATION, ne.r8.VIEW_ALERTS, ne.r8.VIEW_ALERTS_HISTORY, ne.r8.MAGIC_OVERVIEW_ANALYTICS, ne.VZ.CREATE_SITE, ne.VZ.CREATE_TUNNEL, ne.VZ.CREATE_STATIC_ROUTE, W.o4.CLICK_ADAPTIVE_SAMPLING, W.o4.CLICK_TO_LOG_EXPLORER_BANNER, W.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, W.o4.CLICK_SWITCH_TO_RAW_LOGS, W.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", U.U.REGISTER_DOMAIN_SEARCH_SUBMIT, U.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, U.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, U.U.REGISTER_DOMAIN_CHECKOUT_ERROR, U.U.TRANSFER_DOMAIN_CHANGE_STEP, U.U.RENEW_DOMAIN_COMPLETED, U.U.RESTORE_DOMAIN_INIT, U.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, U.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, U.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, U.U.RESTORE_DOMAIN_FAILURE, U.U.RESTORE_DOMAIN_COMPLETED, U.U.DOMAIN_DELETE_INIT, U.U.DOMAIN_DELETE_COMPLETED, U.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, U.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, U.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, U.U.DOMAIN_DELETE_CONFIRM_DELETE, U.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, U.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, U.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, U.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, U.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, U.U.DOMAIN_MOVE_START_FLOW, U.U.DOMAIN_MOVE_OPEN_DOCS, U.U.DOMAIN_MOVE_CLOSE_FLOW, U.U.DOMAIN_MOVE_PROGRESS_FLOW, U.U.DOMAIN_MOVE_SUBMIT, U.U.DOMAIN_MOVE_INITIATE_SUCCESS, U.U.DOMAIN_MOVE_INITIATE_ERROR, U.U.DOMAIN_MOVE_CANCEL, U.U.DOMAIN_MOVE_CANCEL_SUCCESS, U.U.DOMAIN_MOVE_CANCEL_ERROR, U.U.ACTION_CENTER_NAVIGATE, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, ee.KO.CLICK_GET_STARTED_GUIDE, ee.KO.CLICK_PIPELINE_DOCUMENTATION, ee.KO.CLICK_QUICK_LINK, ee.KO.CREATE_PIPELINE, ee.KO.DELETE_PIPELINE, ee.KO.LIST_PIPELINES, ee.KO.VIEW_PIPELINE, L.S.EXISTING_DOMAIN, L.S.NEW_DOMAIN, L.S.WAF_RULESET, L.S.WORKERS, L.S.PAGES, L.S.R2, L.S.ACCOUNT_MEMBERS, se._.TEMPLATE_PRODUCT_SELECTED, se._.TEMPLATE_SELECTED, se._.TEMPLATE_SAVE_DRAFT, se._.TEMPLATE_CANCEL, se._.TEMPLATE_DEPLOY, de.D.CLICK_GO_BACK_SHARE_MODAL, de.D.CLICK_MENU_ITEM_SHARE, de.D.CLICK_ON_CANCEL_SHARE_MODAL, de.D.CLICK_ON_CLOSE_SHARE_MODAL, de.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, de.D.CLICK_ON_DELETE_RULESET, de.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, de.D.CLICK_ON_EDIT_SHARE_PERMISSION, de.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, de.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, de.D.CLICK_ON_SHARE_TABLE_ROW, H.pR.CLICK_GEOGRAPHICAL_TEMPLATE, H.pR.CLICK_IP_TEMPLATE, H.pR.CLICK_USER_AGENT_TEMPLATE, H.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, q.vc.CREATED, q.vc.ENABLED, q.vc.DISABLED, q.vc.DELETED, q.vc.UPDATED, q.vc.DOWNLOADED, ge.Gk.REQUEST_REVIEW, ge.Gk.COPY_URL, P.v.FIELD, P.v.OPERATOR, Re.Vj.SHOW_LCC_MIGRATION_BANNER, Re.Vj.CLICK_LCC_DOCUMENTATION, Re.Vj.CLICK_LCC_UPGRADE_GUIDE, Re.Vj.SHOW_LCC_MIGRATION_WARNING, De.y.CLICK_DISMISS_INELIGIBILITY, De.y.CLICK_NEXT_STEP, De.y.CLICK_OPT_IN, De.y.CLICK_OPT_IN_BUTTON, De.y.CLICK_OPT_OUT_BUTTON, Ke.AZ.LOAD_INSIGHTS, Ke.AZ.OPEN_SIDE_MODAL_INSIGHT, Ke.AZ.CLOSE_SIDE_MODAL_INSIGHT, Ke.AZ.CLICK_ACTION_INSIGHT),
				ct = n.eg.exactStrict(n.eg.object({
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
					scm_type: n.eg.any.optional,
					existing_connection_total: n.eg.any.optional,
					invalid_fields: n.eg.any.optional,
					is_retry: n.eg.any.optional,
					changed_fields: n.eg.any.optional,
					rulesetName: n.eg.string.optional,
					isECCRuleset: n.eg.boolean.optional,
					isLCCEnabled: n.eg.boolean.optional,
					isECCEnabled: n.eg.boolean.optional,
					tabName: n.eg.any.optional
				})),
				ot = (pe, te) => {
					const [Ce, he] = qe(te);
					let Pe, Ue;
					return (0, n.nM)(nt.decode(pe)) && (Pe = new O.Uh(pe)), he && he.length > 0 && (Ue = new O.oV(pe, he)), [Ce, Pe, Ue]
				},
				qe = pe => {
					const te = ct.decode(pe);
					if ((0, n.nM)(te)) {
						const Ce = te.left.map(({
							context: he
						}) => he.map(({
							key: Pe
						}) => Pe)).reduce((he, Pe) => he.concat(Pe), []).filter(he => he in pe);
						return [ft(Ce, pe), Ce]
					}
					return [pe, []]
				},
				ft = (pe, te) => Object.entries(te).reduce((Ce, [he, Pe]) => (pe.includes(he) || (Ce[he] = Pe), Ce), {}),
				Q = pe => (te, Ce, he) => {
					const [Pe, Ue, We] = ot(Ce, he);
					if (Ue) throw Ue;
					return We && console.error(We), pe(te, Ce, Pe)
				};
			var ie = t("../react/utils/zaraz.ts");
			const ye = {
					identify: !0
				},
				$e = pe => (te, Ce, he) => (ye[Ce] || ie.tg === null || ie.tg === void 0 || ie.tg.track(Ce, he), pe(te, Ce, he));
			var ze = t("../react/common/selectors/userSelectors.ts");
			const ke = "pageview",
				et = "create zone",
				at = "create user",
				_t = {
					[ke]: !0,
					[et]: !0,
					[at]: !0
				},
				lt = pe => {
					var te;
					return !!((te = pe.gates.assignments) === null || te === void 0 ? void 0 : te["dx-enable-google-tag-manager"])
				},
				yt = pe => {
					const te = /\|MCMID\|([0-9]+)\|/,
						Ce = pe.match(te);
					return Ce ? Ce[1] : void 0
				},
				Ct = pe => {
					var te;
					const {
						deviceViewport: Ce,
						page: he,
						previousPage: Pe,
						pageName: Ue,
						utm_campaign: We,
						_ga: tt,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Xe
					} = pe, {
						origin: Je
					} = window.location, ut = (0, ze.PR)((0, u.bh)().getState());
					return {
						event: Pe !== void 0 && he !== Pe ? "virtual_page_view" : "page_load",
						device_type: Ce,
						hostname: Je,
						language: navigator.language,
						locale: (0, l.r)((0, u.bh)().getState()),
						page_location: he ? `${Je}${he}` : "[redacted]",
						page_path: he ? `${he}` : "[redacted]",
						page_referrer: Pe ? `${Je}/${Pe}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: Ue || "[redacted]",
						page_url: he ? `${Je}${he}` : "[redacted]",
						query: We ? `?utm_campaign=${We}` : "[redacted]",
						user_properties: {
							ga_client_id: (te = tt) !== null && te !== void 0 ? te : void 0,
							ga_client_id_s: tt ? `s${tt}` : void 0,
							user_id: Ve() ? ut == null ? void 0 : ut.id : void 0,
							ecid: Xe ? yt(Xe) : void 0
						}
					}
				},
				Et = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				Be = pe => {
					const {
						status: te
					} = pe;
					return te === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				Te = (pe, te) => {
					switch (pe) {
						case "pageview":
							return Ct(te);
						case "create zone":
							return Et();
						case "create user":
							return Be(te);
						default:
							return
					}
				},
				He = pe => (te, Ce, he) => {
					if (_t[Ce]) {
						var Pe;
						const Ue = Te(Ce, he);
						Ue && ((Pe = window.dataLayer) === null || Pe === void 0 || Pe.push(Ue))
					}
					return pe(te, Ce, he)
				};
			var vt = t("../react/utils/cookiePreferences.ts");

			function st(pe) {
				for (var te = 1; te < arguments.length; te++) {
					var Ce = arguments[te] != null ? Object(arguments[te]) : {},
						he = Object.keys(Ce);
					typeof Object.getOwnPropertySymbols == "function" && he.push.apply(he, Object.getOwnPropertySymbols(Ce).filter(function(Pe) {
						return Object.getOwnPropertyDescriptor(Ce, Pe).enumerable
					})), he.forEach(function(Pe) {
						ht(pe, Pe, Ce[Pe])
					})
				}
				return pe
			}

			function ht(pe, te, Ce) {
				return te = V(te), te in pe ? Object.defineProperty(pe, te, {
					value: Ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : pe[te] = Ce, pe
			}

			function V(pe) {
				var te = ae(pe, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function ae(pe, te) {
				if (typeof pe != "object" || pe === null) return pe;
				var Ce = pe[Symbol.toPrimitive];
				if (Ce !== void 0) {
					var he = Ce.call(pe, te || "default");
					if (typeof he != "object") return he;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(pe)
			}
			const ve = pe => {
					const te = lt((0, u.bh)().getState());
					o().init(st({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Ne() && !(0, s.gm)() && Ve(),
						middlewares: [M, Q, C, $e, ...te ? [He] : []]
					}, pe))
				},
				Oe = () => {
					o().identify(st({}, (0, e.getAttribution)(), {
						locale: (0, l.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, m.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				Ne = () => !0,
				xe = () => {
					(0, vt.kT)("sparrow_id")
				},
				Ve = () => (0, vt.Xm)()
		},
		"../utils/initStyles.ts": function(F, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const s = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				l = i => {
					const p = [];
					for (let f in i.colors) {
						const n = i.colors[f];
						if (Array.isArray(n) && f !== "categorical")
							for (let r = 0; r < n.length; ++r) p.push(`--cf-${f}-${r}:${n[r]};`)
					}
					return p.join(`
`)
				},
				m = () => {
					const i = (0, e.Yc)(),
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
      ${l(e.Rl)}
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
					let f = document.getElementById(s);
					f ? f.innerText = "" : (f = document.createElement("style"), f.id = s, u.appendChild(f)), f.appendChild(document.createTextNode(p)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(m), E.Z = m
		},
		"../utils/sentry/lastSentEventId.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let s = "";
				return {
					setEventId: m => (!m || typeof m != "string" || (s = m), s),
					getEventId: () => s
				}
			})()
		},
		"../utils/zaraz.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Ro: function() {
					return r
				},
				bM: function() {
					return p
				},
				tg: function() {
					return i
				},
				yn: function() {
					return n
				}
			});

			function e(a) {
				for (var d = 1; d < arguments.length; d++) {
					var c = arguments[d] != null ? Object(arguments[d]) : {},
						g = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(c).filter(function(_) {
						return Object.getOwnPropertyDescriptor(c, _).enumerable
					})), g.forEach(function(_) {
						o(a, _, c[_])
					})
				}
				return a
			}

			function o(a, d, c) {
				return d = s(d), d in a ? Object.defineProperty(a, d, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[d] = c, a
			}

			function s(a) {
				var d = u(a, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(a, d) {
				if (typeof a != "object" || a === null) return a;
				var c = a[Symbol.toPrimitive];
				if (c !== void 0) {
					var g = c.call(a, d || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(a)
			}
			const l = {
					track: (a, d) => null,
					set: (a, d) => console.log(`zaraz.set(${a}, ${d})`)
				},
				m = {
					track: (a, d) => {
						var c;
						(c = window.zaraz) === null || c === void 0 || c.track(a, e({}, d, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, d) => {
						var c;
						return (c = window.zaraz) === null || c === void 0 ? void 0 : c.set(a, d)
					}
				};
			let i;
			const p = () => {
					window.zaraz, i = m
				},
				f = ["email", "first_name", "last_name"],
				n = a => {
					f.forEach(d => {
						var c;
						(c = i) === null || c === void 0 || c.set(d, a[d])
					})
				},
				r = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = t.n(s),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = t.n(m),
				p = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				f = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				r = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				a = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				g = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				_ = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				y = t("../../../common/component/component-filter-bar/src/constants.js"),
				A = t("../../../common/component/component-filter-bar/src/utils.js");

			function v() {
				return v = Object.assign ? Object.assign.bind() : function(G) {
					for (var I = 1; I < arguments.length; I++) {
						var k = arguments[I];
						for (var H in k) Object.prototype.hasOwnProperty.call(k, H) && (G[H] = k[H])
					}
					return G
				}, v.apply(this, arguments)
			}

			function b(G) {
				for (var I = 1; I < arguments.length; I++) {
					var k = arguments[I] != null ? Object(arguments[I]) : {},
						H = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(k).filter(function(J) {
						return Object.getOwnPropertyDescriptor(k, J).enumerable
					})), H.forEach(function(J) {
						h(G, J, k[J])
					})
				}
				return G
			}

			function h(G, I, k) {
				return I = C(I), I in G ? Object.defineProperty(G, I, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[I] = k, G
			}

			function C(G) {
				var I = M(G, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function M(G, I) {
				if (typeof G != "object" || G === null) return G;
				var k = G[Symbol.toPrimitive];
				if (k !== void 0) {
					var H = k.call(G, I || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(G)
			}
			const L = 70,
				P = (0, l.createStyledComponent)(({
					showOverflow: G
				}) => b({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, G ? {} : {
					maxHeight: L,
					overflow: "hidden"
				})),
				S = (0, l.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				O = (0, l.createStyledComponent)(({
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
				w = (0, l.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				U = (0, l.createStyledComponent)(({
					theme: G
				}) => ({
					color: G.colors.gray[4],
					mr: 1
				}), "span"),
				j = (0, l.createStyledComponent)(() => ({
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
				Y = (0, l.createStyledComponent)(({
					buttonStyle: G
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
				}, G), f.zx),
				ne = (0, l.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				ue = (0, l.createStyledComponent)(({
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
				se = (0, l.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				re = G => G.current ? [...G.current.children].reduce((I, k) => (k.offsetTop >= L && I++, I), 0) : 0;
			let ee = 0;
			class ge extends e.Component {
				constructor() {
					super();
					h(this, "overflowWrapper", (0, e.createRef)()), h(this, "hasOverflowed", I => {
						const k = re(this.overflowWrapper);
						I.scrollHeight > L && k >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (I.scrollHeight < L || k === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), h(this, "addNewFilter", () => {
						const {
							filterDefinitions: I
						} = this.props, k = (0, A.TE)(I), H = Object.keys(k)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: H,
								operator: (0, A.uv)(H, k),
								value: (0, A.TT)(H, k)
							}
						})
					}), h(this, "handleOpenFilterEdit", I => {
						this.setState({
							openFilter: I,
							filterChanges: b({}, this.props.filters[I])
						})
					}), h(this, "handleRemoveFilterClick", (I, k) => {
						I.stopPropagation(), this.removeFilter(k)
					}), h(this, "removeFilter", I => {
						const {
							handleFiltersChange: k
						} = this.props, H = [...this.props.filters], J = H[I];
						H.splice(I, 1), k(H), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: J.key,
							operator: J.operator,
							value: J.value
						})
					}), h(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), h(this, "handleFilterSubmit", I => {
						const {
							filterDefinitions: k
						} = this.props;
						I.preventDefault();
						const {
							filterChanges: H
						} = this.state, J = typeof k[H.key].parse == "function" ? Array.isArray(H.value) ? H.value.map(k[H.key].parse) : k[H.key].parse(H.value) : H.value;
						if (k[H.key].validate && (Array.isArray(J) ? !J.every(k[H.key].validate) : !k[H.key].validate(J))) return this.setState({
							invalid: !0
						});
						const D = [...this.props.filters],
							x = b({}, H, {
								value: J
							}),
							B = !D[this.state.openFilter];
						B ? D.push(x) : D[this.state.openFilter] = b({}, H), this.props.handleFiltersChange(D, x), (B ? this.props.onAddFilter : this.props.onEditFilter)({
							field: x.key,
							operator: x.operator,
							value: x.value
						}), this.closeOpenFilterChanges()
					}), h(this, "handlePendingKeyChange", ({
						value: I
					}) => {
						const {
							filterDefinitions: k
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: I,
								operator: (0, A.uv)(I, k),
								value: (0, A.TT)(I, k)
							}
						})
					}), h(this, "handlePendingOperatorChange", ({
						value: I
					}) => {
						let k = b({}, this.state.filterChanges, {
							operator: I
						});
						if ((0, A.dr)(I)) {
							var H, J;
							((H = this.state.filterChanges) === null || H === void 0 ? void 0 : H.value) && !Array.isArray((J = this.state.filterChanges) === null || J === void 0 ? void 0 : J.value) && (k.value = [this.state.filterChanges.value])
						} else {
							var D, x, B;
							((D = this.state.filterChanges) === null || D === void 0 ? void 0 : D.value) && Array.isArray((x = this.state.filterChanges) === null || x === void 0 ? void 0 : x.value) && ((B = this.state.filterChanges) === null || B === void 0 ? void 0 : B.value.length) > 0 && (k.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: k
						})
					}), h(this, "handlePendingValueChange", I => {
						this.setState({
							invalid: !1,
							filterChanges: b({}, this.state.filterChanges, {
								value: I
							})
						})
					}), h(this, "handleShowOverflow", () => {
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
						id: ++ee
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(I) {
					I.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(I) {
					const {
						formatLabel: k,
						filterDefinitions: H
					} = this.props, {
						operator: J
					} = this.state.filterChanges, D = H[this.state.filterChanges.key], x = this.state.filterChanges.value, B = Z => Array.isArray(Z) ? Z.map(W => W.value) : (Z == null ? void 0 : Z.value) || null;
					if (D.renderValueComponent) return D.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (D.type) {
						case y.k.custom: {
							var z;
							return o().createElement(D.CustomComponent, v({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (z = D == null ? void 0 : D.customProps) !== null && z !== void 0 ? z : {}))
						}
						case y.k.select:
							return (0, A.dr)(J) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !D.options,
								value: typeof x.split == "function" ? x == null ? void 0 : x.split(",") : Array.isArray(x) ? x : [],
								options: D.options ? D.options.map(Z => ({
									value: Z.value || Z,
									label: Z.label || k(this.state.filterChanges.key, Z, I)
								})) : x ? (Array.isArray(x) ? x : x.split(",")).map(Z => ({
									label: Z,
									value: Z
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(m.Trans, {
									id: D.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: D.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: Z => {
									this.handlePendingValueChange(B(Z))
								},
								isValidNewOption: Z => {
									const W = D.validate;
									return !W && Z || Z && W([Z])
								},
								getNewOptionData: (Z, W) => ({
									value: Z,
									label: W
								})
							}) : o().createElement(a.hQ, {
								hideLabel: !0,
								value: x,
								options: D.options.map(Z => ({
									value: Z,
									label: k(this.state.filterChanges.key, Z, I)
								})),
								onChange: ({
									value: Z
								}) => this.handlePendingValueChange(Z)
							});
						case y.k.string:
						default:
							return (0, A.dr)(J) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof x.split == "function" ? x == null ? void 0 : x.split(",") : Array.isArray(x) ? x : [],
								options: x ? (Array.isArray(x) ? x : x.split(",")).map(Z => ({
									label: Z,
									value: Z
								})) : [],
								noOptionsMessage: () => null,
								placeholder: I.t("analytics.report.filters.labels.placeholder", {
									example: H[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: Z => {
									this.handlePendingValueChange(B(Z))
								},
								isValidNewOption: Z => {
									const W = D.validate;
									return !W && Z || Z && W([Z])
								},
								getNewOptionData: (Z, W) => ({
									value: Z,
									label: W
								}),
								formatCreateLabel: Z => I.t("filter_editor.value_create_label", {
									value: Z
								})
							}) : o().createElement(m.I18n, null, Z => o().createElement(p.I, {
								value: this.state.filterChanges.value,
								onChange: W => this.handlePendingValueChange(W.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: Z.t("analytics.report.filters.labels.placeholder", {
									example: H[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: I,
						filterDefinitions: k,
						modalStyles: H,
						filterIconType: J,
						buttonStyle: D
					} = this.props, x = re(this.overflowWrapper), B = `filterPanel${this.state.id}`, z = this.state.openFilter !== null;
					return o().createElement(m.I18n, null, Z => o().createElement(d.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(se, null, o().createElement(Y, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": z,
						"aria-controls": B,
						inverted: !0,
						buttonStyle: D
					}, o().createElement(n.J, {
						type: J || "add",
						mr: 1,
						label: Z.t("common.add", {
							_: "Add"
						})
					}), o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(ne, null, o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(P, {
						innerRef: this.overflowWrapper,
						overflowLimit: L,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((W, q) => {
						const {
							key: de,
							operator: fe,
							value: ce
						} = W, Ee = k[de].ignoreLabelTranslation ? k[de].label : Z.t(k[de].label), Le = Z.t(`analytics.report.filters.operators.${fe}`), Ae = Array.isArray(ce) ? ce.map(Re => I(de, Re, Z)).join(", ") : I(de, ce, Z), we = `${Ee} ${Le} ${Ae}`;
						return o().createElement(S, {
							key: `${de}-${fe}-${ce}`,
							title: we
						}, o().createElement(O, {
							onClick: () => this.handleOpenFilterEdit(q)
						}, o().createElement(d.ZC, {
							display: "flex"
						}, o().createElement(w, null, Ee), o().createElement(U, null, Le), o().createElement(j, null, Ae), (0, A.oN)(W, k) ? o().createElement(r.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(ue, {
							onClick: Re => this.handleRemoveFilterClick(Re, q),
							"aria-label": "remove"
						}, o().createElement(n.J, {
							type: "remove"
						})))))
					})), z && o().createElement(_.Z, {
						id: B,
						filterDefinitions: k,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, A.oN)(this.state.filterChanges, k),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: I,
						modalStyles: H
					}), this.state.hasOverflowed && o().createElement(g.Z, {
						count: x,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			h(ge, "propTypes", {
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
			}), E.Z = ge
		},
		"../../../common/component/component-filter-bar/src/index.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				ME: function() {
					return o.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return s.k
				},
				oN: function() {
					return u.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				s = t("../../../common/component/component-filter-bar/src/constants.js"),
				u = t("../../../common/component/component-filter-bar/src/utils.js"),
				l = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				OZ: function() {
					return l
				},
				YB: function() {
					return u
				}
			});

			function e(i, p, f) {
				return p = o(p), p in i ? Object.defineProperty(i, p, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[p] = f, i
			}

			function o(i) {
				var p = s(i, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(i, p) {
				if (typeof i != "object" || i === null) return i;
				var f = i[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(i, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(i)
			}
			class u extends Error {
				constructor(p, f) {
					super(f);
					e(this, "translationKey", void 0), this.translationKey = p, this.name = "TranslatorError"
				}
			}
			class l extends u {
				constructor(p) {
					super(p, `Translation key not found: ${p}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var m = null
		},
		"../../../common/util/types/src/api/domain.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Aw: function() {
					return M
				},
				Ib: function() {
					return h
				},
				Ks: function() {
					return L
				},
				MS: function() {
					return C
				},
				PN: function() {
					return g
				},
				Pp: function() {
					return u
				},
				Q3: function() {
					return d
				},
				TS: function() {
					return c
				},
				W7: function() {
					return A
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
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				s = e.eg.object({
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
				m = e.eg.object({
					registrant: u.optional,
					technical: u.optional,
					administrator: u.optional,
					billing: u.optional
				}),
				i = e.eg.object({
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
					landing: e.eg.union([s, e.eg.boolean]).optional,
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
				r = e.eg.object({
					available: e.eg.boolean
				}),
				a = e.eg.object({
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
				c = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let g = function(S) {
				return S.PENDING = "pending", S.VERIFIED = "verified", S.REJECTED = "rejected", S.PENDING_DELETE = "pending_delete", S.DELETED = "deleted", S
			}({});
			const _ = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(g),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				y = e.eg.object({
					designated_approvers: e.eg.array(_)
				});
			let A = function(S) {
				return S.PENDING = "pending", S.PENDING_UPDATE = "pending_update", S.ENABLED = "enabled", S.DISABLED = "disabled", S
			}({});
			const v = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(A)
				}),
				b = e.eg.intersection([v, y]),
				h = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let C = function(S) {
				return S.UNLOCK_APPROVAL = "UnlockApprovalRequest", S.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", S.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", S.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", S
			}({});
			const M = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				L = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				df: function() {
					return o
				},
				eX: function() {
					return s
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
					return m
				}
			});
			let e = function(i) {
					return i.Custom = "custom", i.Root = "root", i.Managed = "managed", i.Zone = "zone", i.RateLimit = "ratelimit", i
				}({}),
				o = function(i) {
					return i.Cache = "http_request_cache_settings", i.HttpConfigSettings = "http_config_settings", i.HttpLogCustomFields = "http_log_custom_fields", i.HttpRateLimit = "http_ratelimit", i.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", i.HttpRequestFirewallCustom = "http_request_firewall_custom", i.HttpRequestFirewallManaged = "http_request_firewall_managed", i.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", i.HttpRequestLateTransform = "http_request_late_transform", i.HttpRequestMain = "http_request_main", i.HttpRequestOrigin = "http_request_origin", i.HttpRequestRedirect = "http_request_redirect", i.HttpRequestSanitize = "http_request_sanitize", i.HttpRequestSBFM = "http_request_sbfm", i.HttpRequestsSnippets = "http_request_snippets", i.HttpRequestTransform = "http_request_transform", i.HttpResponseCompression = "http_response_compression", i.HttpResponseFirewallManaged = "http_response_firewall_managed", i.HttpResponseTransform = "http_response_headers_transform", i.L4DDoS = "ddos_l4", i.L7DDoS = "ddos_l7", i.MagicIDS = "magic_transit_ids_managed", i.MagicManaged = "magic_transit_managed", i.MagicTransit = "magic_transit", i.MagicTransitRateLimit = "magic_transit_ratelimit", i
				}({}),
				s = function(i) {
					return i.Execute = "execute", i.All = "all", i.Block = "block", i.JSChallenge = "js_challenge", i.Challenge = "challenge", i.Allow = "allow", i.Bypass = "bypass", i.Log = "log", i.Rewrite = "rewrite", i.Score = "score", i.Skip = "skip", i.Managed_Challenge = "managed_challenge", i.DDoS_Dynamic = "ddos_dynamic", i.Select_Config = "select_config", i.Set_Config = "set_config", i.Reset = "reset", i.Redirect = "redirect", i.Cache = "set_cache_settings", i
				}({}),
				u = function(i) {
					return i.ZONE_LOCKDOWN = "zoneLockdown", i.UA_BLOCK = "uaBlock", i.BIC = "bic", i.HOT = "hot", i.SECURITY_LEVEL = "securityLevel", i.RATE_LIMIT = "rateLimit", i.WAF = "waf", i
				}({}),
				l = function(i) {
					return i.DEFAULT = "default", i.MEDIUM = "medium", i.LOW = "low", i.EOFF = "eoff", i.HIGH = "high", i.VERY_HIGH = "very_high", i
				}({}),
				m = function(i) {
					return i.DEFAULT = "", i.XML = "text/xml", i.JSON = "application/json", i.TEXT = "text/plain", i.HTML = "text/html", i
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Yd: function() {
					return e
				},
				vE: function() {
					return o
				}
			});

			function e(s) {
				return Object.keys(s)
			}
			const o = (s, u) => {
				if (u !== void 0) throw new Error("Unexpected object: " + s);
				return u
			}
		},
		"../../../dash/intl/intl-translations/src/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Fy: function() {
					return e.Z
				},
				if: function() {
					return s.Z
				},
				n4: function() {
					return o.n
				}
			});
			var e = t("../../../dash/intl/intl-translations/src/makeLoadPhrases.ts"),
				o = t("../../../dash/intl/intl-translations/src/catalogMap.ts"),
				s = t("../../../dash/intl/intl-translations/src/supportedCatalogs.ts")
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(F, E, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(s) {
				if (!t.o(e, s)) return Promise.resolve().then(function() {
					var m = new Error("Cannot find module '" + s + "'");
					throw m.code = "MODULE_NOT_FOUND", m
				});
				var u = e[s],
					l = u[0];
				return t.e(u[1]).then(function() {
					return t.t(l, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", F.exports = o
		}
	}
]);

//# debugId=ffd70127-32ee-5775-98dd-10718539932a