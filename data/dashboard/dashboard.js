! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f228b70c-c48b-53f8-9c8e-6088c87afa51")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				J8: function() {
					return a
				},
				Jd: function() {
					return i
				},
				QY: function() {
					return m
				},
				Qw: function() {
					return c
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
				g;
			const c = () => Object.keys(l.Z).reduce((_, T) => (T.indexOf("cf_beta.") === 0 && l.Z.get(T) === "true" && _.push(T.split(".").slice(1).join(".")), _), []),
				p = () => {
					var _, T, A;
					return ((_ = window) === null || _ === void 0 || (T = _.bootstrap) === null || T === void 0 || (A = T.data) === null || A === void 0 ? void 0 : A.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((g = window) === null || g === void 0 ? void 0 : g.location) && l.Z) {
				const _ = u().parse(window.location.search);
				_.beta_on && l.Z.set(`cf_beta.${_.beta_on}`, !0), _.beta_off && l.Z.set(`cf_beta.${_.beta_off}`, !1)
			}
			const f = {},
				n = _ => {
					var T, A, E;
					return Object.prototype.hasOwnProperty.call(f, _) ? f[_] : ((T = window) === null || T === void 0 || (A = T.bootstrap) === null || A === void 0 || (E = A.data) === null || E === void 0 ? void 0 : E.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(I => I === _) ? (f[_] = !0, !0) : (f[_] = !1, !1)
				},
				r = _ => l.Z ? l.Z.get(`cf_beta.${_}`) === !0 : !1,
				a = _ => r(_) || n(_),
				d = () => !0,
				i = () => {
					var _, T, A;
					return ((_ = window) === null || _ === void 0 || (T = _.bootstrap) === null || T === void 0 || (A = T.data) === null || A === void 0 ? void 0 : A.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				m = _ => {
					const T = (0, e.uF)(_),
						A = (T == null ? void 0 : T.roles) || [];
					return (0, o.qR)(location.pathname) && A.length === 1 && A.some(E => E === "Administrator Read Only")
				}
		},
		"../init.ts": function($, v, t) {
			"use strict";
			t.r(v);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				s = t("../libs/init/initGlobal.ts"),
				u = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function g(k) {
				for (var x = 1; x < arguments.length; x++) {
					var X = arguments[x] != null ? Object(arguments[x]) : {},
						re = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(X).filter(function(ge) {
						return Object.getOwnPropertyDescriptor(X, ge).enumerable
					})), re.forEach(function(ge) {
						c(k, ge, X[ge])
					})
				}
				return k
			}

			function c(k, x, X) {
				return x = p(x), x in k ? Object.defineProperty(k, x, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[x] = X, k
			}

			function p(k) {
				var x = f(k, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function f(k, x) {
				if (typeof k != "object" || k === null) return k;
				var X = k[Symbol.toPrimitive];
				if (X !== void 0) {
					var re = X.call(k, x || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(k)
			}
			const n = k => {
				const x = k && k.headers || {},
					X = new Headers(x);
				return X.append("X-Cross-Site-Security", "dash"), g({}, k, {
					headers: X
				})
			};
			(0, l.register)({
				request: (k, x) => {
					try {
						return new URL(k), k === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", x] : [k, x]
					} catch {
						return [k, n(x)]
					}
				}
			});
			var r = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				d = t("../react/app/providers/storeContainer.js");
			let i = "";
			const m = 61;

			function _(k) {
				const x = k.substr(1);
				if (x && i !== x) {
					const X = document.getElementById(x);
					if (X) {
						const re = X.getBoundingClientRect().top;
						if (re > 0) {
							const ge = re - m;
							document.documentElement.scrollTop = ge
						}
					}
				}
				i = x
			}

			function T(k) {
				k.listen(x => _(x.hash))
			}
			var A = t("../../../../node_modules/cookie/index.js"),
				E = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const I = "CF_dash_version",
				y = "cf_fv_preview",
				C = "cf_pv",
				M = "current",
				L = "hash",
				P = "deploymentPreview",
				S = "fragmentPreview",
				b = k => k === M ? D() : U(),
				D = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				U = (k = 72) => {
					const x = 36e5;
					return new Date(Date.now() + k * x)
				},
				j = k => {
					switch (k) {
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
				H = (k, x = !1) => {
					var X;
					const re = j(k),
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
    <h1 id="error-title">${re.title}</h1>
    <p id="error-description">${re.description}</p>
  </div>
  `,
						De = x ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${E.fk.orange[9]};
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
					return ge + De
				},
				oe = k => {
					var x;
					const X = document.getElementById(k);
					!X || (x = X.parentNode) === null || x === void 0 || x.removeChild(X)
				};

			function de() {
				const k = document.getElementById("loading-state");
				k == null || k.classList.add("hide"), k == null || k.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(oe)
				})
			}

			function ie(k) {
				var x;
				const X = document.getElementById("loading-state"),
					re = !!((x = A.parse(document.cookie)) === null || x === void 0 ? void 0 : x[I]);
				!X || (X.innerHTML = H(k == null ? void 0 : k.code, re))
			}
			var se = t("../utils/initStyles.ts"),
				F = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				q = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				B = t("../react/common/selectors/languagePreferenceSelector.ts"),
				O = t("../flags.ts"),
				N = t("../utils/getDashVersion.ts");
			const z = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				Q = !0,
				te = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				J = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var w = t("../utils/sentry/lastSentEventId.ts"),
				K = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				G = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const W = k => {
				const x = async X => {
					var re, ge;
					const De = {
						envelope: X.body,
						url: k.url,
						isPreviewDeploy: (re = window) === null || re === void 0 || (ge = re.build) === null || ge === void 0 ? void 0 : ge.isPreviewDeploy,
						release: (0, N.t)()
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
						return console.log(Pe), (0, G.$2)(Pe)
					}
				};
				return K.q(k, x)
			};
			var ee = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				le = t("../../../../node_modules/history/esm/history.js"),
				me = (0, le.lX)(),
				fe = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Le = t("../react/utils/url.ts");
			const be = (0, fe.Rf)();
			let Me;

			function Be(k) {
				return Fe(k, "react-router-v5")
			}

			function Fe(k, x) {
				return (X, re = !0, ge = !0) => {
					re && be && be.location && (Me = X({
						name: (0, Le.Fl)(be.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": x
						}
					})), ge && k.listen && k.listen((De, Pe) => {
						if (Pe && (Pe === "PUSH" || Pe === "POP")) {
							Me && Me.finish();
							const He = {
								"routing.instrumentation": x
							};
							Me = X({
								name: (0, Le.Fl)(De.pathname),
								op: "navigation",
								tags: He
							})
						}
					})
				}
			}
			var Z = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				Ee = t.n(Z),
				Se = t("../../../common/intl/intl-core/src/errors.ts"),
				Ze = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				nt = t("../react/common/middleware/sparrow/errors.ts");

			function ct(k, x, X) {
				return x = dt(x), x in k ? Object.defineProperty(k, x, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[x] = X, k
			}

			function dt(k) {
				var x = ot(k, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function ot(k, x) {
				if (typeof k != "object" || k === null) return k;
				var X = k[Symbol.toPrimitive];
				if (X !== void 0) {
					var re = X.call(k, x || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(k)
			}
			class Xe {
				constructor() {
					ct(this, "name", Xe.id)
				}
				setupOnce() {
					t.g.console && (0, Ze.hl)(t.g.console, "error", x => (...X) => {
						const re = X.find(ge => ge instanceof Error);
						if (z && re) {
							let ge, De = !0;
							if (re instanceof nt.ez) {
								const Pe = re instanceof nt.oV ? re.invalidProperties : void 0;
								ge = {
									tags: {
										"sparrow.eventName": re.eventName
									},
									extra: {
										sparrow: {
											eventName: re.eventName,
											invalidProperties: Pe
										}
									},
									fingerprint: [re.name ? re.name : "SparrowValidationError"]
								}, De = !1
							} else if (re instanceof Z.SparrowIdCookieError) ge = {
								extra: {
									sparrowIdCookie: re.cookie
								},
								fingerprint: [re.name ? re.name : "SparrowIdCookieError"]
							};
							else if (re.name === "ChunkLoadError") {
								ge = {
									fingerprint: [re.name]
								};
								try {
									ge.tags = {
										chunkId: re.message.split(" ")[2],
										chunkUrl: re.request
									}
								} catch {}
							} else re instanceof Se.YB && (ge = {
								fingerprint: ["TranslatorError", re.translationKey]
							});
							De && r.Tb(re, ge)
						}
						typeof x == "function" && x.apply(t.g.console, X)
					})
				}
			}
			ct(Xe, "id", "ConsoleErrorIntegration");
			var _t = null;
			const Y = () => {
					if (z && Q) {
						var k, x, X, re, ge, De, Pe, He, gt, ze;
						let Nt = "production";
						((k = window) === null || k === void 0 || (x = k.build) === null || x === void 0 ? void 0 : x.isPreviewDeploy) && (Nt += "-preview"), q.S({
							dsn: z,
							release: (0, N.t)(),
							environment: Nt,
							ignoreErrors: J,
							allowUrls: te,
							autoSessionTracking: !1,
							integrations: ft => [...ft.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new Xe, new ee.jK.BrowserTracing({
								routingInstrumentation: Be(me)
							})],
							tracesSampleRate: 0,
							transport: W,
							beforeSend: ft => (w.e.setEventId(ft.event_id), ft)
						});
						const Lt = (0, d.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, O.Qw)(),
							USER_BETA_FLAGS: (0, O.ki)(),
							meta: {
								connection: {
									type: (X = window) === null || X === void 0 || (re = X.navigator) === null || re === void 0 || (ge = re.connection) === null || ge === void 0 ? void 0 : ge.effectiveType,
									bandwidth: (De = window) === null || De === void 0 || (Pe = De.navigator) === null || Pe === void 0 || (He = Pe.connection) === null || He === void 0 ? void 0 : He.downlink
								},
								languagePreference: (0, B.r)(Lt),
								isPreviewDeploy: (gt = window) === null || gt === void 0 || (ze = gt.build) === null || ze === void 0 ? void 0 : ze.isPreviewDeploy
							},
							utilGates: (0, F.T2)(Lt)
						}), window.addEventListener("unhandledrejection", function(ft) {})
					}
				},
				ce = k => {
					k ? r.av({
						id: k
					}) : r.av(null)
				};
			var ye = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				$e = () => {
					let k;
					try {
						k = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), k = window.location.search
					}
					if (!k.includes("remote[")) return;
					const x = new URLSearchParams(k),
						X = {};
					for (let [re, ge] of x) re.includes("remote") && (X[re.replace(/remote\[|\]/g, "")] = ge);
					ye.Z.set("mfe-remotes", JSON.stringify(X))
				},
				Ne = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				Je = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const lt = "ANON_USER_ID";

			function Et() {
				var k, x, X, re;
				let ge = (k = t.g) === null || k === void 0 || (x = k.bootstrap) === null || x === void 0 || (X = x.data) === null || X === void 0 || (re = X.user) === null || re === void 0 ? void 0 : re.id;
				if (!ge) {
					let De = ye.Z.get(lt);
					if (!De) {
						let Pe = (0, Je.Z)();
						ye.Z.set(lt, Pe), De = Pe
					}
					return De
				}
				return ge
			}
			async function pt() {
				const k = (0, d.bh)();
				k.dispatch((0, Ne.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await k.dispatch((0, F.UL)({
					userId: Et()
				}))
			}
			class Ct extends Error {
				constructor(x, X) {
					super(X);
					this.name = `${x} ${X}`
				}
			}
			const ht = () => {
					document.cookie.split(";").forEach(x => {
						const [X] = x.trim().split("=");
						document.cookie = `${X}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				vt = async () => {
					let k = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!k.ok) throw k.headers.get("content-type") === "text/html" && (await k.text()).toLowerCase().includes("cookie too large") && (r.$e(function(ge) {
						ge.setTag("init", "cookieTooLarge"), r.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), ht(), window.location.reload()), new Ct("Bootstrap API Failure", k == null ? void 0 : k.status);
					return (await k.json()).result.data
				};
			var ke = t("webpack/sharing/consume/default/react/react"),
				Te = t.n(ke),
				Ke = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Tt = t("webpack/sharing/consume/default/react-dom/react-dom"),
				ut = t("webpack/sharing/consume/default/react-redux/react-redux"),
				yt = t("../../../../node_modules/swr/core/dist/index.mjs"),
				V = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				ae = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				ve = t("../react/shims/focus-visible.js"),
				Ae = t("../react/app/components/DeepLink/index.ts"),
				we = t("../../../../node_modules/prop-types/index.js"),
				Ue = t.n(we),
				qe = t("../react/utils/translator.tsx"),
				et = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				ne = t("../../../dash/intl/intl-translations/src/index.ts"),
				pe = t("../../../../node_modules/query-string/query-string.js"),
				Ce = t.n(pe),
				he = t("../react/common/actions/userActions.ts"),
				Ie = t("../react/common/selectors/userSelectors.ts"),
				Re = t("../react/utils/i18n.ts"),
				Ye = t("../react/utils/bootstrap.ts");

			function rt(k) {
				for (var x = 1; x < arguments.length; x++) {
					var X = arguments[x] != null ? Object(arguments[x]) : {},
						re = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(X).filter(function(ge) {
						return Object.getOwnPropertyDescriptor(X, ge).enumerable
					})), re.forEach(function(ge) {
						Ge(k, ge, X[ge])
					})
				}
				return k
			}

			function Ge(k, x, X) {
				return x = tt(x), x in k ? Object.defineProperty(k, x, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[x] = X, k
			}

			function tt(k) {
				var x = at(k, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function at(k, x) {
				if (typeof k != "object" || k === null) return k;
				var X = k[Symbol.toPrimitive];
				if (X !== void 0) {
					var re = X.call(k, x || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(k)
			}
			let We = Ce().parse(location.search);
			const st = k => {
					const x = (0, Ye.$8)() ? [(0, ne.Fy)(ne.if.changes), (0, ne.Fy)(ne.if.common), (0, ne.Fy)(ne.if.navigation), (0, ne.Fy)(ne.if.overview), (0, ne.Fy)(ne.if.onboarding), (0, ne.Fy)(ne.if.invite), (0, ne.Fy)(ne.if.login), (0, ne.Fy)(ne.if.dns), (0, ne.Fy)(ne.n4.ssl_tls), (0, ne.Fy)(ne.if.message_inbox), (0, ne.Fy)(ne.if.welcome)] : [(0, ne.Fy)(ne.if.common), (0, ne.Fy)(ne.if.invite), (0, ne.Fy)(ne.if.login), (0, ne.Fy)(ne.if.onboarding)];
					We.lang ? Qe(k) : ye.Z.get(Re.th) && kt(k, (0, Re.Kd)());
					const X = async re => (await Promise.all(x.map(De => De(re)))).reduce((De, Pe) => rt({}, De, Pe), {});
					return Te().createElement(et.LocaleContext.Provider, {
						value: k.languagePreference
					}, Te().createElement(et.I18nProvider, {
						translator: qe.Vb,
						locale: k.languagePreference
					}, Te().createElement(et.I18nLoader, {
						loadPhrases: X
					}, k.children)))
				},
				Qe = async k => {
					let x = We.lang.substring(0, We.lang.length - 2) + We.lang.substring(We.lang.length - 2, We.lang.length).toUpperCase();
					if (!(0, B.v)(x)) {
						console.warn(`${x} is not a supported locale.`), delete We.lang, k.history.replace({
							search: Ce().stringify(We)
						});
						return
					}(0, Re.i_)(x), delete We.lang, kt(k, x), k.isAuthenticated || k.history.replace({
						search: Ce().stringify(We)
					})
				}, kt = async (k, x) => {
					if (k.isAuthenticated) try {
						await k.setUserCommPreferences({
							"language-locale": x
						}, {
							hideErrorAlert: !0
						}), ye.Z.remove(Re.th), k.history.replace({
							search: Ce().stringify(We)
						})
					} catch (X) {
						ye.Z.set(Re.th, !0), console.error(X)
					} else ye.Z.set(Re.th, !0)
				}, Bt = k => {
					const x = (0, Ie.PR)(k);
					return {
						isAuthenticated: !!(x && x.id),
						languagePreference: (0, Re.Kd)() || (0, B.r)(k)
					}
				}, Wt = {
					setUserCommPreferences: he.V_
				};
			var zt = (0, Ke.withRouter)((0, ut.connect)(Bt, Wt)(st));
			st.propTypes = {
				history: Ue().object,
				languagePreference: Ue().string.isRequired,
				children: Ue().node.isRequired,
				isAuthenticated: Ue().bool,
				setUserCommPreferences: Ue().func.isRequired
			};
			var Kt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Gt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let h;
			const R = ({
				selectorPrefix: k = "c_"
			} = {}) => (h || (h = (0, Gt.Z)({
				dev: !1,
				selectorPrefix: k
			})), h);
			var ue = t("../react/common/components/ModalManager.tsx"),
				Oe = t("../react/app/components/ErrorBoundary.tsx"),
				je = t("../react/common/actions/notificationsActions.ts");
			const Ot = (t.g.bootstrap || {}).data || {};
			class bt extends Te().Component {
				componentDidMount() {
					Ot.messages && this.dispatchNotificationActions(Ot.messages)
				}
				dispatchNotificationActions(x) {
					x.forEach(X => {
						const {
							type: re,
							message: ge,
							persist: De
						} = X;
						["success", "info", "warn", "error"].includes(re) && this.props.notifyAdd(re, (0, qe.ZP)(ge), {
							persist: !!De
						})
					})
				}
				render() {
					return null
				}
			}
			var Dt = (0, Ke.withRouter)((0, ut.connect)(null, {
				notifyAdd: je.add
			})(bt));
			bt.propTypes = {
				notifyAdd: Ue().func.isRequired
			};
			var it = t("../react/app/redux/index.ts");

			function St() {
				var k;
				const x = (0, it.p4)(Ie.PR),
					X = (x == null || (k = x.email) === null || k === void 0 ? void 0 : k.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					re = (0, Ne.Yc)();
				(0, ke.useEffect)(() => {
					re({
						userType: X
					})
				}, [X, re])
			}
			var It = t("../react/common/selectors/entitlementsSelectors.ts"),
				Pt = t("../react/common/selectors/accountSelectors.ts");
			const Mt = ["accountId", "is_ent"];

			function wt() {
				const k = (0, Ne.f7)(),
					x = (0, Ke.useHistory)(),
					X = (0, Le.uW)(x.location.pathname),
					re = (0, Ne.Yc)(),
					ge = (0, Ne.O$)(),
					De = (0, it.p4)(It.u1),
					Pe = !De.isRequesting && !!De.data,
					He = (0, it.p4)(It.p1),
					gt = (0, it.p4)(Pt.Xu),
					ze = (0, it.p4)(Pt.uF),
					Nt = !gt.isRequesting && !!gt.data;
				(0, ke.useEffect)(() => {
					if (X && Nt && ze && Pe && X === ze.account.id) {
						var Lt, ft, $t;
						re({
							accountId: ze.account.id,
							is_ent: He,
							is_free_account: !He && !(ze == null || (Lt = ze.account.meta) === null || Lt === void 0 ? void 0 : Lt.has_business_zones) && !(ze == null || (ft = ze.account.meta) === null || ft === void 0 ? void 0 : ft.has_pro_zones) && !(ze == null || ($t = ze.account.meta) === null || $t === void 0 ? void 0 : $t.has_enterprise_zones)
						})
					} else(!X || X in k && k.accountId !== X) && ge(Mt)
				}, [Nt, ze, re, ge, Pe, He, X, k])
			}
			var Ve = t("../react/common/selectors/zoneSelectors.ts");

			function Vt() {
				const k = (0, it.p4)(Ve.nA),
					x = (0, Ne.Yc)();
				(0, ke.useEffect)(() => {
					var X;
					x({
						zone_id: k == null ? void 0 : k.id,
						zone_plan: k == null || (X = k.plan) === null || X === void 0 ? void 0 : X.legacy_id
					})
				}, [k, x])
			}
			const jt = () => (St(), wt(), Vt(), null);
			var en = t("../react/app/components/Persistence/index.tsx"),
				tn = t("../node_modules/@cloudflare/elements/es/index.js"),
				nn = t("../react/app/components/LoadingSuspense.tsx");
			const on = Te().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(45810), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var rn = () => Te().createElement(nn.Z, null, Te().createElement(on, null));
			const an = () => (ke.useEffect(() => de, []), null);
			var sn = t("../../../../node_modules/moment/moment.js"),
				Ht = t.n(sn);
			const cn = k => {
					switch (k) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return k.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return k.toLowerCase();
						default:
							return "en"
					}
				},
				ln = () => {
					const k = (0, it.p4)(B.r);
					(0, ke.useEffect)(() => {
						const x = cn(k);
						x !== Ht().locale() && Ht().locale(x), document.documentElement.lang = k
					}, [k])
				},
				un = () => {
					(0, ke.useEffect)(() => {
						async function k() {
							var x, X;
							let re;
							if (((x = window) === null || x === void 0 || (X = x.build) === null || X === void 0 ? void 0 : X.isPreviewDeploy) && (re = "cookie"), !!re) try {
								const ge = document.head.querySelector("link[rel=icon]");
								ge && (ge.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${re}.ico`)).default)
							} catch {}
						}
						k()
					}, [])
				};
			var dn = t("../react/common/constants/constants.ts");
			const pn = () => {
					var k;
					const x = (0, Ke.useLocation)(),
						[X, re] = (0, ke.useState)(((k = window) === null || k === void 0 ? void 0 : k.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, ke.useEffect)(() => {
						const ge = Ce().parse(x.search);
						if (ge.pt && ye.Z.set(dn.sJ, ge.pt), ge == null ? void 0 : ge.devPanel) {
							var De, Pe;
							(De = window) === null || De === void 0 || (Pe = De.localStorage) === null || Pe === void 0 || Pe.setItem("gates_devtools_ui_gates_controller_enabled", "true"), re(!0)
						}
					}, [x.search]), {
						devPanelEnabled: X
					}
				},
				mn = ({
					id: k,
					customDataLayer: x = [],
					dataLayerName: X = "dataLayer"
				}) => {
					const re = `<iframe src="https://www.googletagmanager.com/ns.html?id=${k}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						ge = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${X}', '${k}')`,
						De = `
    window.${X} = window.${X} || [];
    window.${X}.push(${JSON.stringify(x)})
  `;
					return {
						iframe: re,
						script: ge,
						dataLayerHTML: De
					}
				},
				gn = k => {
					const x = document.createElement("script");
					return x.innerHTML = k, x.async = !0, x
				},
				fn = k => {
					const x = document.createElement("noscript");
					return x.innerHTML = k, x
				},
				Zt = k => {
					const x = document.createElement("script");
					return x.innerHTML = k, x
				},
				kn = ({
					dataLayer: k,
					dataLayerName: x
				}) => {
					if (window[x]) return window[x].push(k);
					const X = `
      window.${x} = window.${x} || [];
      window.${x}.push(${JSON.stringify(k)})`,
						re = Zt(X);
					document.head.insertBefore(re, document.head.childNodes[0])
				},
				_n = ({
					containerId: k,
					customDataLayer: x,
					gtmFeatureFlag: X = !0
				}) => {
					(0, ke.useEffect)(() => {
						(() => {
							if (!X) return null;
							const {
								iframe: ge,
								script: De,
								dataLayerHTML: Pe
							} = mn({
								id: k,
								customDataLayer: x
							});
							document.head.insertBefore(Zt(Pe), document.head.childNodes[0]), document.head.insertBefore(gn(De), document.head.childNodes[0]), document.body.insertBefore(fn(ge), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const En = ({
				isDev: k,
				gtmFeatureFlag: x
			}) => {
				(0, ke.useEffect)(() => {
					(() => {
						if (!x) return null;
						let re;
						k ? re = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : re = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const ge = document.createElement("script");
						ge.async = !0, ge.src = re, document.head.insertBefore(ge, document.head.childNodes[0])
					})()
				}, [])
			};
			var vn = t("../react/utils/useDomainConnectRedirect.ts");
			const yn = "GTM-NDGPDFZ",
				Cn = Te().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(45810), t.e(51436), t.e(3292), t.e(47386), t.e(70618), t.e(13873), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(16301), t.e(87940), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				hn = Te().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(39074), t.e(57062), t.e(3292), t.e(55879), t.e(69088), t.e(16301), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var Tn = ({
					userIsAuthed: k
				}) => {
					ln(), un(), (0, vn.y)();
					const {
						devPanelEnabled: x
					} = pn();
					return _n({
						containerId: yn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), En({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), Te().createElement(ke.Suspense, {
						fallback: Te().createElement(an, null)
					}, Te().createElement(Ke.Switch, null, !k && !0 && Te().createElement(Ke.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Te().createElement(hn, null)), Te().createElement(Ke.Route, {
						render: () => Te().createElement(tn.ZC, {
							minHeight: "100vh"
						}, Te().createElement(Cn, null))
					})), x && Te().createElement(rn, null))
				},
				xt = t("../../../../node_modules/yup/es/index.js"),
				An = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => xt.Z_().email((0, qe.ZP)("common.validation.email")).required((0, qe.ZP)("common.validation.email")),
				cfPassword: () => xt.Z_().required((0, qe.ZP)("common.validation.required"))
			};
			(0, An.Yd)(Qt).forEach(k => {
				xt.kM(xt.Z_, k, Qt[k])
			});
			var On = t("../react/common/utils/startViewTransition.ts");
			const Xt = Te().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx"))),
				bn = () => {
					const k = (0, Ye.$8)(),
						[x, X] = (0, ke.useState)(k ? Xt : Te().Fragment),
						[re, ge] = (0, ke.useState)((0, E.Yc)());
					(0, ke.useEffect)(() => {
						(0, E.fF)(() => ge((0, E.Yc)()))
					}, []);
					const De = Pe => {
						ge(Pe), (0, On.o)(() => {
							(0, E.C8)(Pe)
						}), document.cookie = `dark-mode=${Pe};Path=/;Max-Age=31536000`
					};
					return (0, ke.useEffect)(() => {
						X(k ? Xt : Te().Fragment)
					}, [k]), (0, ke.useEffect)(() => {
						const Pe = () => De(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Pe), () => {
							window.removeEventListener("storage", Pe)
						}
					}, []), Te().createElement(ke.Suspense, {
						fallback: null
					}, Te().createElement(ut.Provider, {
						store: (0, d.bh)()
					}, Te().createElement(Ke.Router, {
						history: me
					}, Te().createElement(x, null, Te().createElement(Kt.Z, {
						renderer: R()
					}, Te().createElement(zt, null, Te().createElement(Oe.S, {
						sentryTag: "Root"
					}, Te().createElement(yt.J$, {
						value: {
							fetcher: Pe => fetch(Pe).then(He => He.json())
						}
					}, Te().createElement(jt, null), Te().createElement(Dt, null), Te().createElement(en.Z_, {
						onDarkModeChangeCb: De
					}, Te().createElement(Ae.ZP, null, Te().createElement(Tn, {
						userIsAuthed: k
					}))), Te().createElement(ue.ZP, null), Te().createElement(V.F0, null)))))))))
				},
				In = () => {
					(0, Tt.render)(Te().createElement(bn, null), document.getElementById("react-app"))
				};
			var At = t("../utils/initSparrow.ts"),
				Rt = t("../utils/zaraz.ts");
			const Pn = () => {
					const k = (0, Ie.PR)((0, d.bh)().getState());
					Ln(), (0, At.Ug)(), (0, Rt.bM)(), (k == null ? void 0 : k.id) && Ee().setUserId(k == null ? void 0 : k.id), (0, At.yV)(), !(0, At.Wi)() && (0, At.IM)(), k ? (0, Rt.yn)(k) : (0, Rt.Ro)()
				},
				Ln = () => {
					var k, x;
					(k = window) === null || k === void 0 || (x = k.OneTrust) === null || x === void 0 || x.OnConsentChanged(() => {
						const X = (0, Ie.PR)((0, d.bh)().getState());
						(0, At.Wi)() ? (Ee().setEnabled(!0), (X == null ? void 0 : X.id) ? (Ee().setUserId(X.id), (0, Rt.yn)(X)) : (0, Rt.Ro)(), (0, At.yV)()) : (Ee().setEnabled(!1), (0, At.IM)())
					})
				};

			function Dn(k) {
				for (var x = 1; x < arguments.length; x++) {
					var X = arguments[x] != null ? Object(arguments[x]) : {},
						re = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(X).filter(function(ge) {
						return Object.getOwnPropertyDescriptor(X, ge).enumerable
					})), re.forEach(function(ge) {
						Sn(k, ge, X[ge])
					})
				}
				return k
			}

			function Sn(k, x, X) {
				return x = Mn(x), x in k ? Object.defineProperty(k, x, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[x] = X, k
			}

			function Mn(k) {
				var x = wn(k, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function wn(k, x) {
				if (typeof k != "object" || k === null) return k;
				var X = k[Symbol.toPrimitive];
				if (X !== void 0) {
					var re = X.call(k, x || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(k)
			}
			const Rn = "init",
				Jt = (k, x) => {
					r.$e(function(X) {
						X.setTag(Rn, x), r.Tb(k)
					}), ie(k)
				},
				Ft = async (k, x) => {
					try {
						return await k(), !0
					} catch (X) {
						return Jt(X, x), !1
					}
				};
			(async () => {
				try {
					var k, x, X;
					t.g.build = Dn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "6e776facacc554e728eca6b6d8fef5b77cf20b5e",
						dashVersion: "31898736",
						env: "production",
						builtAt: 1742457785403,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, N.p)()
					}), Y();
					const re = [{
						fn: () => t.e(4374).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => T(me),
						tag: "hashScroll"
					}, {
						fn: se.Z,
						tag: "styles"
					}, {
						fn: $e,
						tag: "mfePreviewData"
					}];
					for (const gt of re)
						if (!await Ft(gt.fn, gt.tag)) return;
					let ge;
					if (!await Ft(async () => {
							ge = await vt()
						}, "bootstrap")) return;
					const De = (0, d.bh)(),
						Pe = ((k = ge) === null || k === void 0 ? void 0 : k.data) || {};
					De.dispatch((0, a.mW)("user", Pe == null ? void 0 : Pe.user));
					const He = (x = ge) === null || x === void 0 || (X = x.data) === null || X === void 0 ? void 0 : X.user;
					return t.g.bootstrap = ge, He && He.id && ce(He.id), !await Ft(pt, "gates") || !await Ft(Pn, "tracking") ? void 0 : In()
				} catch (re) {
					Jt(re, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function($, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/userSelectors.ts"),
				l = t("../react/common/selectors/zoneSelectors.ts"),
				g = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/common/utils/isGuards.ts"),
				p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = t.n(p);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(d) {
					for (var i = 1; i < arguments.length; i++) {
						var m = arguments[i];
						for (var _ in m) Object.prototype.hasOwnProperty.call(m, _) && (d[_] = m[_])
					}
					return d
				}, n.apply(this, arguments)
			}
			const r = d => {
				function i(m) {
					const _ = (0, s.UM)(),
						T = (0, p.useHistory)(),
						A = (0, p.useLocation)(),
						E = (0, p.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						I = (0, s.p4)(u.PR) || null,
						y = (0, s.p4)(l.nA) || null,
						C = (0, s.p4)(g.uF),
						M = C ? C.account : null;
					if (!E) return null;
					const {
						accountId: L,
						app: P,
						tab: S
					} = E.params, b = E.params.zoneName && ((0, c.v5)(E.params.zoneName) || E.params.zoneName.indexOf(".") > 0) ? E.params.zoneName : void 0;
					return o().createElement(d, n({
						dispatch: _,
						history: T,
						location: A,
						match: E,
						user: I,
						membership: L ? C : null,
						account: L ? M : null,
						accountId: L || null,
						zone: b ? y : null,
						zoneName: b || null,
						app: b ? P : null,
						tab: b ? S : null
					}, m))
				}
				return i.displayName = `withEntities(${a(d)})`, i
			};

			function a(d) {
				return d.displayName || d.name || "Component"
			}
			v.Z = r
		},
		"../react/app/components/AccountHome/tracking.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				$$: function() {
					return y
				},
				CK: function() {
					return P
				},
				KV: function() {
					return M
				},
				OX: function() {
					return L
				},
				QV: function() {
					return I
				},
				Yt: function() {
					return A
				},
				bA: function() {
					return E
				},
				fu: function() {
					return b
				},
				gX: function() {
					return m
				},
				hh: function() {
					return S
				},
				o1: function() {
					return C
				},
				tw: function() {
					return _
				},
				xD: function() {
					return T
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				s = t("../react/utils/url.ts");
			const u = "projects table click",
				l = "click create application",
				g = "account home dev plat - product card click",
				c = "account home dev plat - empty state CTA click",
				p = "account home dev plat - view all projects click",
				f = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				r = "account home zero trust - analytics link click",
				a = "account home zero trust - product card click",
				d = "account home zero trust - plan pill click",
				i = "account home zero trust - plan fallback link click",
				m = {
					SPARROW_PROJECTS_TABLE_CLICK: u,
					SPARROW_CREATE_PROJECT_CLICK: l,
					SPARROW_PRODUCT_CARD_CLICK: g,
					SPARROW_EMPTY_STATE_CTA_CLICK: c,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: p,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: f,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: r,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: a,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: d,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: i
				},
				_ = D => {
					o().sendEvent(u, {
						component: D
					})
				},
				T = D => {
					o().sendEvent(u, {
						component: "menu",
						subcomponent: D
					})
				},
				A = () => {
					o().sendEvent(l, {
						category: "Projects Table"
					})
				},
				E = ({
					category: D,
					product: U
				}) => {
					o().sendEvent(g, {
						category: D,
						product: U
					})
				},
				I = () => {
					o().sendEvent(c)
				},
				y = () => {
					o().sendEvent(p)
				},
				C = D => {
					o().sendEvent(n, {
						category: D
					})
				},
				M = ({
					category: D,
					href: U
				}) => {
					o().sendEvent(f, {
						category: D,
						href: (0, s.cm)(U)
					})
				},
				L = ({
					category: D,
					href: U
				}) => {
					o().sendEvent(r, {
						category: D,
						href: (0, s.cm)(U)
					})
				},
				P = ({
					category: D,
					product: U,
					href: j
				}) => {
					o().sendEvent(a, {
						category: D,
						product: U,
						href: (0, s.cm)(j)
					})
				},
				S = ({
					plan: D
				}) => {
					o().sendEvent(d, {
						plan: D
					})
				},
				b = () => {
					o().sendEvent(i)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return c
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
				g = (0, e.R)(o.SELECT_ZONE, d => ({
					payload: d
				})),
				c = (0, e.R)(o.SELECT_ACCOUNT, d => ({
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
		"../react/app/components/DeepLink/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return g
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
					return c
				}
			});
			const e = "to",
				o = "_gl",
				s = "freeTrial",
				u = "deepLinkQueryParams",
				l = "resolvedDeepLinkQueryParams",
				g = "add",
				c = "multiSkuProducts",
				p = "/:account/billing/checkout",
				f = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return g.bk
				},
				Bh: function() {
					return g.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../react/app/redux/index.ts"),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../react/app/components/DeepLink/utils.ts"),
				l = t("../react/utils/bootstrap.ts"),
				g = t("../react/app/components/DeepLink/actions.ts"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(c);

			function f(b) {
				for (var D = 1; D < arguments.length; D++) {
					var U = arguments[D] != null ? Object(arguments[D]) : {},
						j = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(U).filter(function(H) {
						return Object.getOwnPropertyDescriptor(U, H).enumerable
					})), j.forEach(function(H) {
						n(b, H, U[H])
					})
				}
				return b
			}

			function n(b, D, U) {
				return D = r(D), D in b ? Object.defineProperty(b, D, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = U, b
			}

			function r(b) {
				var D = a(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function a(b, D) {
				if (typeof b != "object" || b === null) return b;
				var U = b[Symbol.toPrimitive];
				if (U !== void 0) {
					var j = U.call(b, D || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}
			class d {
				constructor(D, U) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", j => {
						this.resolvers.set(j, {
							name: j,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", j => {
						const H = this.resolvers.get(j);
						H && (H.endTime = Date.now(), this.resolvers.set(j, H))
					}), n(this, "resolverCancel", j => {
						this.resolverDone(j), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", j => {
						const H = "NO_ACTION",
							oe = {
								actionType: H,
								startTime: 0
							};
						return {
							start: (de = H) => {
								const ie = this.resolvers.get(j);
								oe.actionType = de, oe.startTime = Date.now(), ie && ie.userActions.push(oe)
							},
							finish: (de = H) => {
								oe.actionType = de, oe.endTime = Date.now()
							},
							cancel: (de = H) => {
								oe.actionType = de, oe.endTime = Date.now(), this.resolverCancel(j)
							}
						}
					}), this.deepLink = D, this.legacyDeepLink = U, this.resolvers = new Map
				}
				track(D) {
					try {
						if (this._done) return;
						this._done = !0;
						const U = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: i(this.startTime, this.endTime),
								totalCpuTime: i(this.startTime, this.endTime)
							},
							j = this.resolvers.size === 0 ? U : Array.from(this.resolvers.values()).reduce((H, oe) => {
								const de = i(oe.startTime, oe.endTime),
									ie = oe.userActions.reduce((F, q) => {
										const B = i(q.startTime, q.endTime);
										return {
											totalTime: F.totalTime + B,
											actions: F.actions.set(q.actionType, B)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									se = de - ie.totalTime;
								return f({}, H, {
									totalTime: H.totalTime + de,
									totalUserActionsTime: H.totalUserActionsTime + ie.totalTime,
									totalCpuTime: H.totalCpuTime + se,
									[`${oe.name}ResolverTotalTime`]: de,
									[`${oe.name}ResolverTotalCpuTime`]: se,
									[`${oe.name}ResolverTotalUserActionsTime`]: ie.totalTime
								}, Array.from(ie.actions.keys()).reduce((F, q) => f({}, F, {
									[`${oe.name}Resolver/${q}`]: ie.actions.get(q)
								}), {}))
							}, f({}, U, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						p().sendEvent(D, j)
					} catch (U) {
						console.error(U)
					}
				}
			}

			function i(b = Date.now(), D = Date.now()) {
				return (D - b) / 1e3
			}
			var m = t("../react/app/components/DeepLink/constants.ts"),
				_ = t("../react/common/hooks/useCachedState.ts"),
				T = t("../react/common/hooks/usePrevious.ts");

			function A(b) {
				for (var D = 1; D < arguments.length; D++) {
					var U = arguments[D] != null ? Object(arguments[D]) : {},
						j = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(U).filter(function(H) {
						return Object.getOwnPropertyDescriptor(U, H).enumerable
					})), j.forEach(function(H) {
						E(b, H, U[H])
					})
				}
				return b
			}

			function E(b, D, U) {
				return D = I(D), D in b ? Object.defineProperty(b, D, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = U, b
			}

			function I(b) {
				var D = y(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function y(b, D) {
				if (typeof b != "object" || b === null) return b;
				var U = b[Symbol.toPrimitive];
				if (U !== void 0) {
					var j = U.call(b, D || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}
			var M = ({
					children: b
				}) => {
					const D = (0, o.TZ)(),
						U = (0, s.useHistory)(),
						j = (0, T.Z)(U.location.pathname),
						[H, oe] = (0, e.useState)(!0),
						[de, ie] = (0, _.j)(void 0, {
							key: m.Fj
						}),
						[se, F] = (0, _.j)(void 0, {
							key: m.O5
						}),
						[q, B] = (0, _.j)(void 0, {
							key: m.s$
						}),
						O = (0, l.$8)();
					let N = new URLSearchParams(U.location.search);
					const z = (0, u.mL)(U.location.pathname, N);
					let Q = null,
						te = null;
					if (N.has(m.Tc) && N.delete(m.Tc), N.get(m.BV)) Q = N.get(m.BV), U.location.hash && (te = U.location.hash);
					else if (de) {
						const w = new URLSearchParams(de);
						w.get(m.BV) && (Q = w.get(m.BV), N = w)
					} else z && (N.set(m.BV, z), Q = z);
					if (Q && m._h.test(Q)) {
						const w = N.getAll(m.Kt),
							K = JSON.stringify(w);
						w.length && K !== q && B(K), N.has(m.Tc) && N.delete(m.Tc), N.delete(m.Kt)
					}!O && de === void 0 && Q && ie(N.toString());
					const J = async () => {
						try {
							if ((0, u.I3)(Q) && O) {
								de && ie(void 0), D.dispatch((0, g.r4)()), oe(!0), Q && Q !== se && F(Q);
								const w = await (0, u.py)(Q, oe, D, U, j, new d(Q, z ? `${U.location.pathname}${U.location.search}` : void 0));
								N.delete(m.BV);
								const K = N.toString();
								U.replace(A({}, U.location, {
									pathname: w,
									search: K
								}, te ? {
									hash: te
								} : {})), D.dispatch((0, g.WF)())
							}
						} catch (w) {
							D.dispatch((0, g.WF)()), console.error(w)
						} finally {
							oe(!1)
						}
					};
					return (0, e.useEffect)(() => {
						J()
					}, [U.location.pathname, U.location.search]), (H || (0, u.I3)(Q)) && O ? null : b
				},
				L = t("../react/app/components/DeepLink/reducer.ts"),
				P = t("../react/app/components/DeepLink/selectors.ts"),
				S = M
		},
		"../react/app/components/DeepLink/reducer.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				E: function() {
					return u
				},
				r: function() {
					return g
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

			function g(c = l, p) {
				if (p.type === s.MF.RESOLVING_COMPLETE) return l;
				if (p.type === s.MF.RESOLVING_START) return c.set("isResolving", !0);
				if (c.isResolving) {
					if (p.type === s.MF.RESOLVING_COMPLETE) return c.set("isResolving", !1);
					if (p.type === s.MF.SET_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", p.accountIds);
					if (p.type === s.MF.DELETE_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", void 0);
					{
						let f = c;
						try {
							f = c.set("lastAction", p)
						} catch {
							f = c.set("lastAction", {
								type: p.type
							})
						}
						return f
					}
				} else return c
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/app/components/DeepLink/utils.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return T
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/components/DeepLink/reducer.ts"),
				s = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const u = E => E.replace(s.default.endsWithSlash, ""),
				l = E => {
					const I = u(E).split("/").slice(3);
					return I.length ? "/" + I.join("/") : ""
				},
				g = E => {
					const I = u(E).split("/").slice(2);
					return I.length ? `apps/${I.join("/")}` : "apps"
				};
			var c = t("../react/app/components/DeepLink/selectors.ts"),
				p = t("../react/app/components/DeepLink/constants.ts"),
				f = t("../react/common/validators/index.js"),
				n = t("../react/common/utils/isGuards.ts");
			const r = E => (0, f.Lb)(E) && (E.split(".").length > 1 || (0, n.v5)(E)),
				a = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				d = E => typeof E == "string" && E.startsWith("/"),
				i = (E, I) => y => new Promise((C, M) => {
					I.start();
					const L = E.subscribe(() => {
						const P = (0, c.yI)(E.getState());
						P === o.E ? (I.cancel(), L(), M("DeepLink: waitForAction out of context.")) : y(P) && (I.finish(P.type), L(), C(P))
					})
				}),
				m = (E, I, y) => (C, M) => new Promise((L, P) => {
					y.start();
					const S = I.location.pathname;
					C = new URL(C, window.location.href).pathname, S !== C && (y.cancel(), P(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${C}", but on "${S}". You need to redirect to "${C}", and unblockRouter in your Resolver, before you use this function.`));
					const b = E.subscribe(() => {
						const D = (0, c.yI)(E.getState()),
							U = I.location.pathname,
							H = new URLSearchParams(I.location.search).get(p.BV);
						(U !== C || !!H) && (y.cancel(), b(), P(`DeepLink: waitForPageAction user navigated away from "${C}" to "${U}${H?I.location.search:""}"`)), D === o.E ? (y.cancel(), b(), P("DeepLink: waitForPageAction out of context.")) : M(D) && (y.finish(D.type), b(), L(D))
					})
				});

			function _(E) {
				const I = [],
					y = E.split("?")[0].split("/");
				for (let C of y) C.length !== 0 && (C.startsWith(":") ? I.push({
					value: C.substring(1),
					type: "dynamic"
				}) : I.push({
					value: C,
					type: "static"
				}));
				return I
			}
			async function T(E, I, y, C, M, L) {
				L.start();
				const P = _(E),
					b = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					D = {};
				let U = "";
				for (const [j, H] of P.entries())
					if (H.type === "static") U = [U, H.value].join("/");
					else if (H.type === "dynamic" && a.is(H.value) && H.value in b) {
					L.resolverStart(H.value);
					const oe = await b[H.value]({
						deepLink: E,
						blockRouter: () => I(!0),
						unblockRouter: () => I(!1),
						routerHistory: C,
						resolvedValues: D,
						store: y,
						referringRoute: M,
						uri: {
							currentPartIdx: j,
							parts: P
						},
						waitForAction: i(y, L.createUserActionTracker(H.value)),
						waitForPageAction: m(y, C, L.createUserActionTracker(H.value))
					});
					L.resolverDone(H.value), U = [U, oe].join("/"), D[H.value] = oe
				} else throw L.cancel(), new Error(`DeepLink: Resolver with name '${H.value}' is not supported.`);
				return L.done(), U
			}

			function A(E, I) {
				const y = ":account",
					C = ":zone",
					M = I.get("zone");
				if (M) return I.delete("zone"), `/${y}/${C}/${M}`;
				const L = I.get("account");
				if (L) return I.delete("account"), `/${y}/${L}`;
				if (E === "/overview") return `/${y}/${C}`;
				if (E === "/apps") return `/${y}/${C}/${g(E)}`;
				const P = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const S of P) {
					const b = S.length;
					if (E.startsWith(S) && (E.length === b || E[b] === "/")) return `/${y}/${C}${E}`
				}
				switch (E) {
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
		"../react/app/components/ErrorBoundary.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				u = t("../react/app/components/SomethingWrong.jsx"),
				l = t("../utils/sentry/lastSentEventId.ts"),
				g = t("../react/utils/zaraz.ts"),
				c = t("../react/utils/url.ts"),
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				f = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(r),
				d = t("../react/common/components/Page.tsx"),
				i = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function m() {
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
					src: i,
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
				sentryTag: T,
				children: A
			}) => o().createElement(s.SV, {
				beforeCapture: E => {
					g.tg === null || g.tg === void 0 || g.tg.track("page-error", {
						page: (0, c.Fl)(window.location.pathname)
					})
				},
				onError: E => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(E)
				},
				fallback: ({
					error: E,
					eventId: I
				}) => {
					var y;
					const C = l.e.getEventId() || I;
					return (E == null || (y = E.message) === null || y === void 0 ? void 0 : y.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), o().createElement(m, null)) : o().createElement(u.Z, {
						type: "page",
						error: E,
						eventId: C,
						sentryTag: T
					})
				}
			}, A)
		},
		"../react/app/components/Footer.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
				Z: function() {
					return B
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(c),
				f = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				r = t("../react/utils/translator.tsx"),
				a = t("../../../../node_modules/moment/moment.js"),
				d = t.n(a);
			const i = () => {
					const O = d()().format("YYYY"),
						N = z => {
							p().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: z
							})
						};
					return o().createElement(m, {
						marginTop: "auto"
					}, o().createElement(_, null, o().createElement(T, null, o().createElement(A, null, "\xA9 ", O, " Cloudflare, Inc."), o().createElement(A, null, o().createElement(E, null, o().createElement(I, {
						showOnDeskTop: !1
					}, o().createElement(y, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => N("Support")
					}, o().createElement(r.cC, {
						id: "common.support"
					}))), o().createElement(I, null, o().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => N("Privacy Policy")
					}, o().createElement(r.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(I, null, o().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => N("Terms of Use")
					}, o().createElement(r.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(I, null, o().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => N("Cookie Preferences")
					}, o().createElement(r.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(I, null, o().createElement(y, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => N("Trademark")
					}, o().createElement(r.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(E, null, o().createElement(I, null, o().createElement(y, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => N("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(r.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				m = (0, l.createComponent)(({
					theme: O,
					marginTop: N
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: N
				})),
				_ = (0, l.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				T = (0, l.createComponent)(({
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
				A = (0, l.createComponent)(({
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
				E = (0, l.createComponent)(({
					theme: O
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: O.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				I = (0, l.createComponent)(({
					showOnDeskTop: O = !0,
					theme: N
				}) => ({
					color: N.colors.white,
					fontSize: N.fontSizes[1],
					height: "20px",
					display: O ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: N.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: N.space[3],
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
				y = (0, l.createStyledComponent)(({
					theme: O
				}) => ({
					textDecoration: "none",
					color: O.colors.white,
					"&:hover": {
						color: O.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var C = i,
				M = t("../react/pages/welcome/routes.ts"),
				L = t("../react/utils/cookiePreferences.ts"),
				P = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				b = () => {
					const [O, N] = (0, e.useState)(!1), z = (0, L.wV)(), Q = () => {
						N(!0)
					}, te = () => {
						N(!1)
					}, J = z && z === "US" ? (0, r.ZP)("footer.cpra_cta.privacy_choices") : (0, r.ZP)("footer.cpra_cta.cookie_preferences"), w = {
						background: "transparent",
						borderRadius: "none",
						color: O ? (0, g.Yc)() ? "#ee730a" : "#003681" : (0, g.Yc)() ? "#4693ff" : "#0051c3",
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
					return o().createElement(u.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: w,
						onMouseEnter: Q,
						onMouseLeave: te
					}, o().createElement(u.Ei, {
						height: 15,
						src: P,
						mr: 2,
						alt: J
					}), J)
				};

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(O) {
					for (var N = 1; N < arguments.length; N++) {
						var z = arguments[N];
						for (var Q in z) Object.prototype.hasOwnProperty.call(z, Q) && (O[Q] = z[Q])
					}
					return O
				}, D.apply(this, arguments)
			}

			function U(O, N) {
				if (O == null) return {};
				var z = j(O, N),
					Q, te;
				if (Object.getOwnPropertySymbols) {
					var J = Object.getOwnPropertySymbols(O);
					for (te = 0; te < J.length; te++) Q = J[te], !(N.indexOf(Q) >= 0) && (!Object.prototype.propertyIsEnumerable.call(O, Q) || (z[Q] = O[Q]))
				}
				return z
			}

			function j(O, N) {
				if (O == null) return {};
				var z = {},
					Q = Object.keys(O),
					te, J;
				for (J = 0; J < Q.length; J++) te = Q[J], !(N.indexOf(te) >= 0) && (z[te] = O[te]);
				return z
			}
			const H = (0, l.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,g.Yc)()?g.rS.colors.orange[6]:g.rS.colors.blue[4]}`
					}
				}), u.A),
				oe = (0, l.createStyledComponent)(({
					theme: O
				}) => ({
					color: O.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, f.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: O.colors.gray[4]
					}
				}), u.A),
				de = O => {
					let {
						onClick: N
					} = O, z = U(O, ["onClick"]);
					return React.createElement(H, D({
						onClick: Q => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: z.href
							}), N && N(Q)
						}
					}, z))
				},
				ie = O => {
					let {
						children: N,
						target: z,
						rel: Q
					} = O, te = U(O, ["children", "target", "rel"]);
					return o().createElement(oe, D({
						target: z || "_blank",
						rel: Q || "noopener noreferrer"
					}, te), N)
				},
				se = (0, l.createStyledComponent)(({
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
				}), u.Ul),
				F = (0, l.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, f.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), u.ZC);
			var B = () => {
				const O = [M.d.root.pattern].some(z => (0, s.matchPath)(location.pathname, {
					path: z
				}));
				if ((0, n.PP)()) return o().createElement(C, null);
				if (O) return null;
				const N = new Date().getFullYear();
				return o().createElement(u.$_, {
					height: (0, f.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto"
				}, o().createElement(F, null, o().createElement(se, null, o().createElement(u.Li, null, o().createElement(ie, {
					href: "https://support.cloudflare.com"
				}, (0, r.ZP)("common.support"))), o().createElement(u.Li, null, o().createElement(ie, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(u.Dr, {
					textTransform: "capitalize"
				}, (0, r.ZP)("footer.system_status")))), o().createElement(u.Li, null, o().createElement(ie, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, r.ZP)("footer.careers"))), o().createElement(u.Li, null, o().createElement(ie, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, r.ZP)("footer.tos_reduced"))), o().createElement(u.Li, null, o().createElement(ie, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, r.ZP)("footer.security_issues"))), o().createElement(u.Li, null, o().createElement(ie, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, r.ZP)("footer.privacy_policy"))), o().createElement(u.Li, null, o().createElement(b, null)), o().createElement(u.Li, null, o().createElement(u.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", N, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function($, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/components/ErrorStatus.tsx"),
				u = t("../react/utils/translator.tsx");
			const l = g => o().createElement(s.Z, g, (0, u.ZP)("error.forbidden"));
			v.Z = l
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return _
				},
				Z: function() {
					return J
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../node_modules/@cloudflare/component-button/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				f = t.n(p),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				r = t("../react/common/components/AccessControl/index.js"),
				a = t("../react/common/components/ButtonWithDropdown.tsx"),
				d = t("../react/common/components/Dropdown/index.tsx"),
				i = t("../react/utils/translator.tsx"),
				m = t("../react/common/hooks/useGate.ts");
			const _ = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				T = () => {
					const w = (0, m.Z)("super-add-button-copy-change"),
						K = [{
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
					switch (w) {
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
							}, ...K];
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
							}, ...K];
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
							}, ...K];
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
							}, ...K];
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
							}, ...K];
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
			var E = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function I(w) {
				for (var K = 1; K < arguments.length; K++) {
					var G = arguments[K] != null ? Object(arguments[K]) : {},
						W = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(G).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(G, ee).enumerable
					})), W.forEach(function(ee) {
						y(w, ee, G[ee])
					})
				}
				return w
			}

			function y(w, K, G) {
				return K = C(K), K in w ? Object.defineProperty(w, K, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[K] = G, w
			}

			function C(w) {
				var K = M(w, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function M(w, K) {
				if (typeof w != "object" || w === null) return w;
				var G = w[Symbol.toPrimitive];
				if (G !== void 0) {
					var W = G.call(w, K || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(w)
			}

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(w) {
					for (var K = 1; K < arguments.length; K++) {
						var G = arguments[K];
						for (var W in G) Object.prototype.hasOwnProperty.call(G, W) && (w[W] = G[W])
					}
					return w
				}, L.apply(this, arguments)
			}

			function P(w, K) {
				if (w == null) return {};
				var G = S(w, K),
					W, ee;
				if (Object.getOwnPropertySymbols) {
					var le = Object.getOwnPropertySymbols(w);
					for (ee = 0; ee < le.length; ee++) W = le[ee], !(K.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(w, W) || (G[W] = w[W]))
				}
				return G
			}

			function S(w, K) {
				if (w == null) return {};
				var G = {},
					W = Object.keys(w),
					ee, le;
				for (le = 0; le < W.length; le++) ee = W[le], !(K.indexOf(ee) >= 0) && (G[ee] = w[ee]);
				return G
			}
			const b = w => {
					let {
						title: K,
						trackingEvent: G,
						icon: W,
						url: ee,
						description: le,
						disabled: _e
					} = w, me = P(w, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(D, L({
						to: !_e && ee || "#",
						"aria-disabled": _e,
						onClick: () => {
							f().sendEvent(G, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, me), o().createElement(u.ZC, {
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
					}, o().createElement(i.cC, K)), o().createElement(u.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(i.cC, le)))))
				},
				D = (0, n.createStyledComponent)(({
					theme: w
				}) => {
					const K = {
						cursor: "pointer",
						backgroundColor: (0, g.Yc)() ? w.colors.gray[8] : w.colors.gray[9],
						color: w.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: w.colors.background,
						color: w.colors.gray[2],
						fontSize: w.fontSizes[2],
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
							color: w.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, E.Link);
			var U = b;

			function j() {
				return j = Object.assign ? Object.assign.bind() : function(w) {
					for (var K = 1; K < arguments.length; K++) {
						var G = arguments[K];
						for (var W in G) Object.prototype.hasOwnProperty.call(G, W) && (w[W] = G[W])
					}
					return w
				}, j.apply(this, arguments)
			}

			function H(w) {
				for (var K = 1; K < arguments.length; K++) {
					var G = arguments[K] != null ? Object(arguments[K]) : {},
						W = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(G).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(G, ee).enumerable
					})), W.forEach(function(ee) {
						oe(w, ee, G[ee])
					})
				}
				return w
			}

			function oe(w, K, G) {
				return K = de(K), K in w ? Object.defineProperty(w, K, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[K] = G, w
			}

			function de(w) {
				var K = ie(w, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function ie(w, K) {
				if (typeof w != "object" || w === null) return w;
				var G = w[Symbol.toPrimitive];
				if (G !== void 0) {
					var W = G.call(w, K || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(w)
			}

			function se(w, K) {
				if (w == null) return {};
				var G = F(w, K),
					W, ee;
				if (Object.getOwnPropertySymbols) {
					var le = Object.getOwnPropertySymbols(w);
					for (ee = 0; ee < le.length; ee++) W = le[ee], !(K.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(w, W) || (G[W] = w[W]))
				}
				return G
			}

			function F(w, K) {
				if (w == null) return {};
				var G = {},
					W = Object.keys(w),
					ee, le;
				for (le = 0; le < W.length; le++) ee = W[le], !(K.indexOf(ee) >= 0) && (G[ee] = w[ee]);
				return G
			}
			const q = "GLOBAL_ADD_DROPDOWN",
				B = (0, n.createStyledComponent)(({
					theme: w
				}) => ({
					"background-color": w.colors.blue[5]
				}), l.zx),
				O = ({
					disableProducts: w
				}) => {
					const K = T();
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
					}, K.map(G => {
						const W = G || {},
							{
								disableOn: ee,
								permissionCheck: le
							} = W,
							_e = se(W, ["disableOn", "permissionCheck"]),
							me = ee && w[ee],
							fe = H({}, _e, {
								disabled: me
							});
						return le ? o().createElement(r.Z, {
							key: G.title.id,
							edit: le
						}, ({
							isEditable: Le
						}) => Le && o().createElement(U, fe)) : o().createElement(U, j({
							key: G.url
						}, fe))
					}))
				},
				N = ({
					disableProducts: w,
					topNavType: K
				}) => {
					const G = () => (0, c.tq)() || K === "icon-only" ? o().createElement(u.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, o().createElement(B, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : K === "text-icon" || K === "icon-only-with-add-button" ? o().createElement(l.zx, {
						type: "primary",
						mr: K === "icon-only-with-add-button" ? 3 : 0
					}, o().createElement(o().Fragment, null, o().createElement(s.J, {
						label: "plus",
						type: "plus"
					}), " ", o().createElement(i.cC, {
						id: "common.add"
					}))) : o().createElement(l.zx, {
						type: "primary"
					}, o().createElement(i.cC, {
						id: "common.add"
					}), " ", o().createElement(s.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return o().createElement(z, {
						role: "group",
						"data-testid": q
					}, o().createElement(d.Lt, {
						trigger: K === "baseline" ? o().createElement(Q, null, o().createElement(s.J, {
							label: "plus",
							type: "plus"
						}), !(0, c.tq)() && o().createElement(o().Fragment, null, o().createElement(i.cC, {
							id: "common.add"
						}), " ", o().createElement(s.J, {
							label: "arrow",
							type: "caret-down"
						}))) : G(),
						menu: o().createElement(O, {
							disableProducts: w
						})
					}))
				},
				z = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				Q = (0, n.createStyledComponent)(({
					theme: w
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: w.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, g.Yc)() ? w.colors.gray[1] : w.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, g.Yc)() ? w.colors.gray[8] : w.colors.gray[9]
					}
				}), u.zx);
			var te = N,
				J = te
		},
		"../react/app/components/LoadingSuspense.tsx": function($, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../react/utils/translator.tsx"),
				g = t("../react/app/components/ErrorStatus.tsx"),
				c = t("../react/common/components/EmptyPage.jsx"),
				p = t("../react/common/hooks/suspenseHelpers.ts");

			function f(a) {
				const [d, i] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const m = window.setTimeout(() => i(!0), a);
					return () => window.clearTimeout(m)
				}, []), d
			}
			const n = ({
					loadingTimeout: a = 1e3,
					stillLoadingTimeout: d = 9e3
				}) => {
					const i = f(a),
						m = f(d);
					if ((0, p.nW)(), !i && !m) return o().createElement(c.Z, null);
					const _ = m ? o().createElement(l.cC, {
						id: "common.still_loading"
					}) : i ? o().createElement(l.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(g.Z, {
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
			v.Z = r
		},
		"../react/app/components/Persistence/api.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				C8: function() {
					return p
				},
				Mn: function() {
					return a
				},
				Sp: function() {
					return r
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
					} catch (d) {
						console.error(d)
					}
				}, l = async d => {
					try {
						return await (await e.get(`/accounts/${d}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (i) {
						console.error(i)
					}
				}, g = async (d, i) => {
					try {
						return await (await e.post(`${s}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: d,
								accountId: i
							}),
							hideErrorAlert: !0
						})).body
					} catch (m) {
						return console.error(m), []
					}
				}, c = async (d, i) => {
					try {
						return await http.post(`/accounts/${d}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: i
							}),
							hideErrorAlert: !0
						}), !0
					} catch (m) {
						return console.error(m), !1
					}
				}, p = async d => {
					try {
						return await (await e.post(s, {
							body: JSON.stringify({
								darkMode: d
							})
						})).body
					} catch (i) {
						console.error(i)
					}
				}, f = async d => {
					try {
						return await (await e.post(`${s}/recents`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (i) {
						console.error(i)
					}
				}, n = async d => {
					try {
						return await (await e.post(`${s}/viewed-changes`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (i) {
						throw console.error(i), i
					}
				}, r = async d => {
					try {
						return await (await e.post(s + "/flags", {
							body: JSON.stringify(d)
						})).body
					} catch (i) {
						throw console.error(i), i
					}
				}, a = async (d, i) => {
					try {
						return await (await e.post(`${s}/dismissed-tasks`, {
							body: JSON.stringify({
								name: d,
								accountId: i
							}),
							hideErrorAlert: !0
						})).body
					} catch (m) {
						throw console.error(m), m
					}
				}
		},
		"../react/app/components/Persistence/hooks.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				y: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/components/Persistence/index.tsx");
			const u = () => (0, e.useContext)(s.lp)
		},
		"../react/app/components/Persistence/index.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
				Wl: function() {
					return f
				},
				lp: function() {
					return A
				},
				Z_: function() {
					return I
				},
				r7: function() {
					return U
				},
				Tv: function() {
					return q
				},
				yZ: function() {
					return y.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(u),
				g = t("../react/utils/bootstrap.ts"),
				c = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/app/components/Persistence/api.ts");
			const f = 10;
			var n = t("../react/common/hooks/useActiveState.ts"),
				r = t("../react/common/hooks/useLoadingState.ts");

			function a(B) {
				for (var O = 1; O < arguments.length; O++) {
					var N = arguments[O] != null ? Object(arguments[O]) : {},
						z = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(N).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(N, Q).enumerable
					})), z.forEach(function(Q) {
						d(B, Q, N[Q])
					})
				}
				return B
			}

			function d(B, O, N) {
				return O = i(O), O in B ? Object.defineProperty(B, O, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[O] = N, B
			}

			function i(B) {
				var O = m(B, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function m(B, O) {
				if (typeof B != "object" || B === null) return B;
				var N = B[Symbol.toPrimitive];
				if (N !== void 0) {
					var z = N.call(B, O || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(B)
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
				T = a({}, _, {
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
				A = (0, e.createContext)(T),
				E = A.Consumer,
				I = ({
					children: B,
					onDarkModeChangeCb: O
				}) => {
					const [N, z] = (0, e.useState)(_), [Q, te] = (0, e.useState)(T.isLoading), [J, w] = (0, r.$)(), K = (0, g.$8)(), G = (0, s.p4)(me => (0, c.wH)(me)), [, W] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						K ? (0, p.yl)().then(me => {
							if (me) {
								var fe;
								z(me), W(me == null || (fe = me.flags) === null || fe === void 0 ? void 0 : fe.hasEnabledSecurityNavigation), l().identify({
									hasEnabledSecurityNavigation: me.flags.hasEnabledSecurityNavigation
								}), O(me.darkMode)
							}
						}).finally(() => te(!1)) : te(!1)
					}, [K]);
					const ee = (me, fe) => !!N.favorites.find(Le => Le.type === "zone" && Le.name === me && Le.accountId === fe),
						le = f - N.favorites.length,
						_e = me => N.favorites.filter(Le => Le.type === "zone" && Le.accountId === me).length < f;
					return o().createElement(A.Provider, {
						value: a({}, N, {
							isLoading: Q,
							remainingStarSlots: le,
							isUpdatingFlags: J,
							actions: {
								canAccountStarZone: _e,
								isZoneStarred: ee,
								starZone: async (me, fe) => {
									var Le;
									const be = !ee(me, fe),
										Me = _e(fe);
									if (be && !Me) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Be = await (0, p.lt)(me, fe);
									l().sendEvent("click star zone", {
										isStarring: be,
										totalStarredZones: Be.filter(Fe => Fe.accountId === fe && Fe.type === "zone").length,
										totalZones: G == null || (Le = G.paginationData) === null || Le === void 0 ? void 0 : Le.info.total_count
									}), z(a({}, N, {
										favorites: Be
									}))
								},
								toggleSecurityNavigation: async me => {
									w(async () => {
										await (0, p.Sp)({
											hasEnabledSecurityNavigation: me
										})
									}), l().identify({
										hasEnabledSecurityNavigation: me
									}), W(me), z(a({}, N, {
										flags: {
											hasEnabledSecurityNavigation: me
										}
									}))
								},
								setDarkMode: async me => {
									const fe = await (0, p.C8)(me);
									z(fe), O(fe.darkMode)
								},
								logRouteVisited: async me => {
									var fe;
									const Le = await (0, p.n)(me);
									z((fe = Le) !== null && fe !== void 0 ? fe : a({}, N))
								},
								viewChange: async me => {
									const fe = await (0, p.m6)(me);
									z(a({}, N, {
										viewedChanges: fe
									}))
								},
								dismissTask: async (me, fe) => {
									const Le = await (0, p.Mn)(me, fe);
									z(a({}, N, {
										dismissedTasks: Le
									}))
								}
							}
						})
					}, B)
				};
			var y = t("../react/app/components/Persistence/hooks.ts"),
				C = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				M = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(B) {
					for (var O = 1; O < arguments.length; O++) {
						var N = arguments[O];
						for (var z in N) Object.prototype.hasOwnProperty.call(N, z) && (B[z] = N[z])
					}
					return B
				}, L.apply(this, arguments)
			}

			function P(B, O) {
				if (B == null) return {};
				var N = S(B, O),
					z, Q;
				if (Object.getOwnPropertySymbols) {
					var te = Object.getOwnPropertySymbols(B);
					for (Q = 0; Q < te.length; Q++) z = te[Q], !(O.indexOf(z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(B, z) || (N[z] = B[z]))
				}
				return N
			}

			function S(B, O) {
				if (B == null) return {};
				var N = {},
					z = Object.keys(B),
					Q, te;
				for (te = 0; te < z.length; te++) Q = z[te], !(O.indexOf(Q) >= 0) && (N[Q] = B[Q]);
				return N
			}
			const b = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var U = B => {
					let {
						isStarred: O,
						size: N = 16
					} = B, z = P(B, ["isStarred", "size"]);
					const Q = b[(0, C.Yc)() ? "dark" : "light"];
					return o().createElement(M.J, L({
						type: O ? "star" : "star-outline",
						color: O ? Q.gold : Q.gray,
						size: N
					}, z))
				},
				j = t("../node_modules/@cloudflare/elements/es/index.js");

			function H(B) {
				for (var O = 1; O < arguments.length; O++) {
					var N = arguments[O] != null ? Object(arguments[O]) : {},
						z = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(N).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(N, Q).enumerable
					})), z.forEach(function(Q) {
						oe(B, Q, N[Q])
					})
				}
				return B
			}

			function oe(B, O, N) {
				return O = de(O), O in B ? Object.defineProperty(B, O, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[O] = N, B
			}

			function de(B) {
				var O = ie(B, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function ie(B, O) {
				if (typeof B != "object" || B === null) return B;
				var N = B[Symbol.toPrimitive];
				if (N !== void 0) {
					var z = N.call(B, O || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(B)
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
			var q = (0, e.forwardRef)(({
				featurePreview: B = !1,
				isStarred: O,
				onClickFn: N,
				isDisabled: z,
				testId: Q,
				buttonText: te,
				size: J = "large",
				variant: w = "pill"
			}, K) => {
				const [G, W] = (0, e.useState)(!1), ee = se[(0, C.Yc)() ? "dark" : "light"][O && !B ? "active" : "default"], le = H({}, J === "large" && {
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
				}), _e = {
					pill: "50vh",
					button: 4
				};
				return o().createElement(j.zx, {
					onMouseEnter: () => W(!0),
					onMouseLeave: () => W(!1),
					innerRef: K,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: le.paddingRight,
					gap: 1,
					pl: le.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: _e[w],
					border: "1px solid",
					cursor: B || z ? "default" : "pointer",
					backgroundColor: G ? ee.bgHover : ee.bg,
					color: ee.text,
					borderColor: ee.border,
					onClick: N,
					opacity: z ? .5 : 1,
					disabled: z,
					fontSize: le.fontSize,
					height: le.height,
					"data-testid": Q
				}, o().createElement(U, {
					isStarred: B ? !1 : O,
					size: le.starIconSize
				}), te)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				$n: function() {
					return d
				},
				IU: function() {
					return m
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
					return i
				},
				iY: function() {
					return r
				},
				jq: function() {
					return S
				},
				o_: function() {
					return E
				},
				us: function() {
					return y
				},
				wB: function() {
					return a
				},
				zJ: function() {
					return I
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/utils/zoneLevelAccess.ts"),
				g = t("../react/pages/stream/selectors.ts"),
				c = t("../react/pages/home/domain-registration/selectors.ts"),
				p = t("../react/pages/images/selectors.ts"),
				f = t("../react/pages/r2/selectors.ts");
			const n = b => !!(0, l.b)(b),
				r = b => n(b) ? (0, e.hT)(b) : !0,
				a = (b, D, U, j = "read") => {
					const H = (0, s.nA)(b);
					return n(b) ? (0, e.WL)(b, (0, e.W9)(U, e.ZZ[j]), (0, e.j)(H == null ? void 0 : H.id)) : (0, u.Yj)(b)(D)[j]
				},
				d = (b, D, U, j = "read") => {
					const H = (0, s.nA)(b),
						oe = e.zs.includes(U);
					return n(b) ? (0, e.WL)(b, oe ? U : (0, e.my)(U, e.ZZ[j === "edit" ? "update" : j]), (0, e.j)(H == null ? void 0 : H.id)) : (0, u.Yj)(b)(D)[j === "update" ? "edit" : j]
				},
				i = b => !!(0, g._Q)(b),
				m = b => (0, p.pT)(b),
				_ = b => (0, p.pT)(b) && (0, p.GH)(b),
				T = b => sourcingKitEnabledSelector(b),
				A = b => !!r2EnabledSelector(b),
				E = b => (0, f.Mv)(b),
				I = b => (0, o.$f)(b, "rulesets.magic_transit_allowed"),
				y = b => (0, o.$f)(b, "flowtrackd.magic_custom_config_allowed"),
				C = b => (0, o.$f)(b, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				M = b => (0, u.Le)(b, "ddos_protection", "l4_rulesets"),
				L = b => hasAccountEntitlements(b, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				P = b => (0, c.HO)(b),
				S = b => !(0, o.yD)(b) && !!d(b, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function($, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(s),
				l = t("../../../../node_modules/prop-types/index.js"),
				g = t.n(l),
				c = t("webpack/sharing/consume/default/react-redux/react-redux"),
				p = t.n(c),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(f),
				r = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				d = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				i = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				m = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				T = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				A = t.n(T),
				E = t("../react/common/actions/membershipActions.ts"),
				I = t("../react/utils/url.ts"),
				y = t("../react/app/components/Footer.tsx");

			function C(se) {
				for (var F = 1; F < arguments.length; F++) {
					var q = arguments[F] != null ? Object(arguments[F]) : {},
						B = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(q).filter(function(O) {
						return Object.getOwnPropertyDescriptor(q, O).enumerable
					})), B.forEach(function(O) {
						M(se, O, q[O])
					})
				}
				return se
			}

			function M(se, F, q) {
				return F = L(F), F in se ? Object.defineProperty(se, F, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : se[F] = q, se
			}

			function L(se) {
				var F = P(se, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function P(se, F) {
				if (typeof se != "object" || se === null) return se;
				var q = se[Symbol.toPrimitive];
				if (q !== void 0) {
					var B = q.call(se, F || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(se)
			}
			const S = (0, r.createComponent)(({
					type: se
				}) => ({
					height: se !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				b = (0, r.createComponent)(({
					theme: se,
					margin: F,
					size: q = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: se.colors.gray[3],
					height: F ? "auto" : "100%",
					padding: F ? 0 : se.space[q > 1 ? q - 2 : 0],
					margin: F,
					justifyContent: "center",
					alignItems: "center"
				})),
				D = (0, r.createComponent)(() => ({
					textAlign: "left"
				})),
				U = (0, r.createComponent)(() => ({
					textAlign: "right"
				})),
				j = (0, r.createComponent)(({
					theme: se
				}) => ({
					fontSize: se.fontSizes[6]
				})),
				H = (0, r.createComponent)(({
					theme: se
				}) => ({
					fontSize: se.fontSizes[4]
				})),
				oe = (0, r.createComponent)(({
					theme: se
				}) => ({
					fontSize: se.fontSizes[3]
				})),
				de = (0, r.createComponent)(({
					theme: se
				}) => ({
					width: "100%",
					height: 125,
					marginTop: se.space[4],
					padding: se.space[2]
				}), "textarea");
			class ie extends o().Component {
				constructor(...F) {
					super(...F);
					M(this, "state", {
						value: "",
						submitted: !1
					}), M(this, "handleTextareaChange", q => {
						this.setState({
							value: q.target.value
						})
					}), M(this, "sendErrToSentry10", async () => {
						try {
							var q, B, O, N;
							const z = ((q = window) === null || q === void 0 || (B = q.bootstrap) === null || B === void 0 || (O = B.data) === null || O === void 0 || (N = O.user) === null || N === void 0 ? void 0 : N.id) || "Unknown",
								Q = this.props.eventId || d.eW(),
								te = {
									name: z,
									email: `${z}@userid.com`,
									comments: this.state.value,
									eventId: Q,
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
								body: JSON.stringify(te)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (z) {
							console.error(z)
						}
					}), M(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), M(this, "renderContent", q => o().createElement(f.I18n, null, B => o().createElement(S, {
						type: q
					}, o().createElement(b, null, o().createElement(D, null, o().createElement(j, null, B.t("error.internal_issues")), o().createElement(H, null, B.t("error.help_us")), o().createElement(de, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: O => this.handleTextareaChange(O),
						disabled: this.state.submitted,
						placeholder: B.t("error.give_feedback")
					}), o().createElement(U, null, !this.state.submitted && o().createElement(a.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, B.t("common.submit")), this.state.submitted && o().createElement(oe, null, B.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: F,
						sentryTag: q,
						membershipsList: B
					} = this.props;
					console.error(`SomethingWrong: ${F}`);
					let O = "";
					const N = (0, I.e1)();
					if (N) {
						var z;
						const te = await B({
								parameters: {
									status: "accepted"
								}
							}),
							J = te == null || (z = te.find(w => w.id === N)) === null || z === void 0 ? void 0 : z.roles;
						J && J.length && (O = J.join(", "))
					}
					const Q = `ErrorBoundary - ${F}`;
					i.Tb(Q, {
						tags: {
							errorBoundary: q,
							normalizedPath: (0, I.Fl)(window.location.pathname),
							roles: O.length ? O : void 0
						}
					}), A().sendEvent("something wrong", {
						error: F,
						roles: O.length ? O : void 0
					})
				}
				render() {
					const {
						type: F
					} = this.props;
					return F === "fullscreen" ? o().createElement("div", null, o().createElement(m.h4, null, o().createElement(s.Link, {
						to: "/"
					}, o().createElement(_.TR, null))), this.renderContent(F), o().createElement(y.Z, null)) : this.renderContent(F)
				}
			}
			ie.propTypes = {
				type: g().oneOf(["fullscreen", "page"]),
				error: g().oneOfType([g().string, g().object]),
				eventId: g().string,
				sentryTag: g().string,
				membershipsList: g().func
			}, v.Z = (0, c.connect)(() => ({}), {
				membershipsList: E.YT
			})(ie)
		},
		"../react/app/providers/storeContainer.js": function($, v, t) {
			"use strict";
			t.d(v, {
				bh: function() {
					return U
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				o = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				s = t.n(o),
				u = t("../../../../node_modules/redux-thunk/es/index.js"),
				l = t("../../../../node_modules/redux-persist/es/index.js"),
				g = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				c = t("../react/app/rootReducer.js"),
				p = t("../react/app/redux/normalizer.js"),
				f = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				r = t("../react/app/reducerRegistry.js"),
				a = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				d = t("../react/common/sagas/index.js"),
				i = t("../react/app/redux/processActionMiddleware.js"),
				m = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				_ = t("../../../../node_modules/is-promise/index.js"),
				T = t.n(_);

			function A(j) {
				for (var H = 1; H < arguments.length; H++) {
					var oe = arguments[H] != null ? Object(arguments[H]) : {},
						de = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(oe).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(oe, ie).enumerable
					})), de.forEach(function(ie) {
						E(j, ie, oe[ie])
					})
				}
				return j
			}

			function E(j, H, oe) {
				return H = I(H), H in j ? Object.defineProperty(j, H, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[H] = oe, j
			}

			function I(j) {
				var H = y(j, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function y(j, H) {
				if (typeof j != "object" || j === null) return j;
				var oe = j[Symbol.toPrimitive];
				if (oe !== void 0) {
					var de = oe.call(j, H || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(j)
			}
			const C = {
					key: "cf-redux-store",
					storage: g.Z,
					whitelist: ["accountAccess", "invite"]
				},
				M = (0, a.ZP)(),
				P = [({
					dispatch: j
				}) => H => oe => T()(oe) ? oe.then(de => j(de)) : H(oe), M, u.Z, i.Z, p.qR],
				S = j => (0, l.Wq)(C, A({}, c.Z, j));

			function b() {
				const j = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					oe = e.compose((0, e.applyMiddleware)(...P), f.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					de = {},
					ie = (0, e.createStore)(S(r.Z.getReducers()), de, oe);
				M.run(d.Z), (0, l.p5)(ie);
				const F = (t.g.bootstrap || {}).data || {};
				return ie.dispatch((0, m.mW)("user", F.user)), ie
			}
			let D;
			r.Z.setChangeListener(j => {
				var H;
				D && ((H = D) === null || H === void 0 ? void 0 : H.replaceReducer) && (D.replaceReducer(S(j)), (0, l.p5)(D))
			});

			function U() {
				return D || (D = b()), D
			}
		},
		"../react/app/redux/index.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e);
			const s = () => (0, e.useStore)(),
				u = () => s().getState(),
				l = () => (0, e.useDispatch)(),
				g = e.useSelector
		},
		"../react/app/redux/makeAction.js": function($, v, t) {
			"use strict";
			t.d(v, {
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

			function u(i) {
				for (var m = 1; m < arguments.length; m++) {
					var _ = arguments[m] != null ? Object(arguments[m]) : {},
						T = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(_).filter(function(A) {
						return Object.getOwnPropertyDescriptor(_, A).enumerable
					})), T.forEach(function(A) {
						l(i, A, _[A])
					})
				}
				return i
			}

			function l(i, m, _) {
				return m = g(m), m in i ? Object.defineProperty(i, m, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[m] = _, i
			}

			function g(i) {
				var m = c(i, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function c(i, m) {
				if (typeof i != "object" || i === null) return i;
				var _ = i[Symbol.toPrimitive];
				if (_ !== void 0) {
					var T = _.call(i, m || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(i)
			}
			const p = u({}, o),
				f = (i, m, _, T = {}) => {
					const A = i === "delete" ? "del" : i.toLowerCase();
					return _ && A !== "del" && (T.body = _), p[A](m, T)
				},
				n = (i, m) => (i.meta.params = m, i),
				r = (i, m, _, T, {
					body: A = {}
				}) => {
					const {
						result: E,
						messages: I,
						result_info: y
					} = A, C = Object.values(m);
					if (i.meta.method === "delete") {
						const M = C[C.length - 1];
						i.meta.id = typeof M == "object" ? M.id : M
					}
					return i.payload = E, I && (i.meta.messages = I), C.length && (i.meta.params = m), y && (i.meta.paginationData = {
						info: y,
						actionParameters: C,
						options: _[0],
						insertionOffset: 0
					}), i
				},
				a = (i, m, _, T, A) => (i.payload = A && A.body && A.body.errors, i.meta.messages = A && A.body && A.body.messages, i.meta.params = m, i.apiError = A, i);

			function d(i, m, _, T) {
				const A = (0, e.RM)(i, m, _, T).apiFetch(f).on("start", n).on("success", r).on("error", a),
					E = A.mock;
				return A.mock = I => (E((...y) => {
					const C = I(...y);
					return C && typeof C == "object" && "result" in C ? C : {
						result: C
					}
				}), A), A
			}
		},
		"../react/app/redux/normalizer.js": function($, v, t) {
			"use strict";
			t.d(v, {
				P1: function() {
					return f
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
				o = t("../react/pages/workers/entityTypes.ts"),
				s = t("../react/pages/email/types.ts"),
				u = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				g = t.n(l);
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
				f = (...r) => (0, u.P1)(c, p, ...r),
				n = (0, u.QB)(c)
		},
		"../react/app/redux/utils.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				F: function() {
					return s
				},
				_: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const o = u => (l, g, c) => (0, e.SC)(l, g, c, {
					hideErrorAlert: !0
				}).catch(u),
				s = u => l => {
					if (l.status === u) return l;
					throw l
				}
		},
		"../react/common/actionTypes.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Cm: function() {
					return g
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return c
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
				g = "TOGGLE_OFF",
				c = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				f = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/activeActions.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/common/actions/membershipActions.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				AX: function() {
					return a
				},
				YT: function() {
					return f
				},
				ct: function() {
					return c
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
				for (var i = 1; i < arguments.length; i++) {
					var m = arguments[i] != null ? Object(arguments[i]) : {},
						_ = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(m).filter(function(T) {
						return Object.getOwnPropertyDescriptor(m, T).enumerable
					})), _.forEach(function(T) {
						u(d, T, m[T])
					})
				}
				return d
			}

			function u(d, i, m) {
				return i = l(i), i in d ? Object.defineProperty(d, i, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[i] = m, d
			}

			function l(d) {
				var i = g(d, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function g(d, i) {
				if (typeof d != "object" || d === null) return d;
				var m = d[Symbol.toPrimitive];
				if (m !== void 0) {
					var _ = m.call(d, i || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(d)
			}
			const c = d => {
					const i = d.payload.map(m => s({}, m, {
						membershipId: m.id,
						id: m.account.id
					}));
					return s({}, d, {
						payload: i
					})
				},
				p = d => {
					const i = c(d);
					return Array.isArray(i.payload) ? s({}, d, {
						payload: i.payload[0]
					}) : s({}, d, {
						payload: null
					})
				},
				f = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", c),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...d) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: d
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function($, v, t) {
			"use strict";
			t.r(v), t.d(v, {
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

			function s(l, g, c = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: l,
						props: g
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
		"../react/common/actions/notificationsActions.ts": function($, v, t) {
			"use strict";
			t.r(v), t.d(v, {
				add: function() {
					return l
				},
				error: function() {
					return f
				},
				info: function() {
					return c
				},
				success: function() {
					return g
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
						let i = u++,
							m = {
								id: i,
								type: n,
								message: r,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									d(s(i)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						d(o(m))
					}
			}

			function g(n, r) {
				return l("success", n, r)
			}

			function c(n, r) {
				return l("info", n, r)
			}

			function p(n, r) {
				return l("warning", n, r)
			}

			function f(n, r) {
				return l("error", n, r)
			}
		},
		"../react/common/actions/userActions.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				BT: function() {
					return c
				},
				Ut: function() {
					return T
				},
				V_: function() {
					return A
				},
				Y9: function() {
					return m
				},
				Z0: function() {
					return I
				},
				mp: function() {
					return _
				},
				r3: function() {
					return E
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/app/redux/utils.ts");

			function s(y) {
				for (var C = 1; C < arguments.length; C++) {
					var M = arguments[C] != null ? Object(arguments[C]) : {},
						L = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(M).filter(function(P) {
						return Object.getOwnPropertyDescriptor(M, P).enumerable
					})), L.forEach(function(P) {
						u(y, P, M[P])
					})
				}
				return y
			}

			function u(y, C, M) {
				return C = l(C), C in y ? Object.defineProperty(y, C, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[C] = M, y
			}

			function l(y) {
				var C = g(y, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function g(y, C) {
				if (typeof y != "object" || y === null) return y;
				var M = y[Symbol.toPrimitive];
				if (M !== void 0) {
					var L = M.call(y, C || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(y)
			}
			const c = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				f = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				d = (0, e.C)("user").delete`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/email`;

			function m(...y) {
				return i(...y)
			}
			const _ = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				T = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(y => s({}, y, {
					body: s({}, y.body, {
						result: {}
					})
				}))),
				A = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				E = (0, e.C)("userDetails").get`/user/details`,
				I = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function($, v, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/utils/zoneLevelAccess.ts");
			const s = ({
				legacyPermission: u,
				canAccess: l,
				children: g,
				render: c
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
				const n = c || g;
				return n ? n(f) : null
			};
			v.Z = s
		},
		"../react/common/components/AccessCheck/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return r
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
				o = "com.cloudflare.api.account.",
				s = "com.cloudflare.edge.",
				u = "com.cloudflare.api.account.zone.",
				l = ["com.cloudflare.api.app.manage"];
			let g = function(a) {
				return a.read = "read", a.list = "list", a.create = "create", a.update = "update", a.delete = "delete", a.sign = "sign", a.refresh = "refresh", a
			}({});
			const c = (a, d) => `${o}${a?a+".":""}${d}`,
				p = (a, d) => `${u}${a?a+".":""}${d}`,
				f = (a, d) => `${s}${a}.${d}`,
				n = (a = "") => `${o}${a}`,
				r = (a = "") => `${u}${a}`
		},
		"../react/common/components/AccessCheck/index.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/common/components/AccessCheck/useAccessCheck.ts": function($, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");

			function g(c) {
				const {
					read: p,
					edit: f
				} = (0, s.p4)(u.Yj)(c);
				let n = f;
				if (c != "zone_versioning") {
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
			v.Z = g
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				WL: function() {
					return a
				},
				hT: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/pages/home/members/utils.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");
			const g = {
					allow: "allow",
					deny: "deny"
				},
				c = 0,
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
					b;
				for (b in S) S[b] = a(C, `${M}.${b}`, L, P);
				return S
			}

			function a(C, M, L, P) {
				var S;
				if (d(M) && !i(M)) {
					const H = (0, l.G)(C);
					if (H == null ? void 0 : H.isLocked) return !1
				}
				const b = (S = (0, o.D0)(C)) === null || S === void 0 ? void 0 : S.id,
					D = b ? [`com.cloudflare.api.account.${b}`] : void 0,
					U = (0, s.vq)(b);
				return !!_(C, U, M, L, P || D)
			}

			function d(C) {
				return ![u.ZZ.read, u.ZZ.list].some(M => C.endsWith(M))
			}

			function i(C) {
				return C.includes("zone.versioning")
			}

			function m(C) {
				const M = (0, o.Ko)(C);
				let L = !1;
				return M == null || M.forEach(P => {
					P.access === g.allow && P.permission_groups.forEach(S => {
						var b;
						(S == null || (b = S.meta) === null || b === void 0 ? void 0 : b.scopes) === u.u1 && (L = !0)
					})
				}), L
			}

			function _(C, M, L, P, S) {
				const b = (0, o.Ko)(C),
					D = {};
				b == null || b.forEach(oe => {
					var de;
					const ie = oe.access;
					let se = c;
					if (L && oe.permission_groups.forEach(F => {
							var q, B;
							M == null || (q = M.find(O => O.id === F.id)) === null || q === void 0 || (B = q.permissions) === null || B === void 0 || B.forEach(O => {
								se = Math.max(se, T(O, L))
							})
						}), se !== c && !!P) {
						let F = c;
						oe.resource_groups.forEach(q => {
							F = Math.max(F, E(q.scope, P, S))
						}), se = F === c ? F : se + F
					}(D == null || (de = D[ie]) === null || de === void 0 ? void 0 : de[se]) || (0, e.Z)(D, [ie, se], []), D[ie][se].push(oe)
				});
				const U = D[g.allow] && Object.keys(D[g.allow]).map(oe => parseInt(oe)),
					j = D[g.deny] && Object.keys(D[g.deny]).map(oe => parseInt(oe)),
					H = Math.max.apply(Math, U);
				return H === c || Math.max.apply(Math, j) >= H ? null : D[g.allow][H]
			}

			function T(C, M) {
				if (C.key === M || A(C.key, M)) return n;
				for (const L of (C == null ? void 0 : C.implies) || []) {
					let P = T(L, M);
					if (P > c) return P
				}
				return c
			}

			function A(C, M) {
				const L = M == null ? void 0 : M.lastIndexOf(".");
				return L === -1 ? !1 : (M == null ? void 0 : M.substring(0, L)) + ".*" === C
			}

			function E(C, M, L) {
				var P;
				let S = c;
				if (C == null || (P = C.objects) === null || P === void 0 || P.forEach(b => {
						S = Math.max(S, y(b, M))
					}), S === c) return S;
				if (C.key !== "*") switch (!0) {
					case I(C.key, L) > c:
					case (!(L == null ? void 0 : L.length) && S === n):
						break;
					case (S === p && I(C.key, [M]) > c):
						S = I(C.key, [M]);
						break;
					default:
						return c
				}
				for (const b of C.subset_of || [])
					if (I(b.key, L) === c) return c;
				return S
			}

			function I(C, M = []) {
				for (const L of M || []) {
					if (C === L) return n;
					if (A(C, L)) return f
				}
				return c
			}

			function y(C, M) {
				return C.key === M ? n : C.key === "*" ? p : A(C.key, M) ? f : c
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function($, v, t) {
			"use strict";
			t.d(v, {
				a: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				s = t("../react/common/selectors/accountSelectors.ts");
			const u = g => {
					if (typeof g != "string") throw new Error("invalid Param Type provided");
					const c = g.slice(1).split(":");
					if (c.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: c[0],
						value: c[1]
					}
				},
				l = (g, c) => {
					const {
						resourceId: p,
						accountId: f,
						legacyPermission: n
					} = c;
					let {
						read: r,
						edit: a
					} = c;
					const d = {};
					n && (a = `#${n}:edit`, r = `#${n}:read`);
					const i = p || f;
					if (r) {
						const m = Array.isArray(r) ? r : [r];
						d.isReadable = m.some(_ => {
							const T = u(_);
							return (0, s.DT)(g, i, A => !!(A[T.key] && A[T.key][T.value]))
						})
					}
					if (a) {
						const m = Array.isArray(a) ? a : [a];
						d.isEditable = m.some(_ => {
							const T = u(_);
							return (0, s.DT)(g, i, A => !!(A[T.key] && A[T.key][T.value]))
						})
					}
					return d
				};
			v.Z = (0, e.connect)(l)
		},
		"../react/common/components/AccessControl/index.js": function($, v, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				o = t.n(e),
				s = t("../react/app/HoCs/withEntities.tsx"),
				u = t("../react/common/components/AccessControl/SAAConnect.js");

			function l(r) {
				for (var a = 1; a < arguments.length; a++) {
					var d = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(d).filter(function(m) {
						return Object.getOwnPropertyDescriptor(d, m).enumerable
					})), i.forEach(function(m) {
						g(r, m, d[m])
					})
				}
				return r
			}

			function g(r, a, d) {
				return a = c(a), a in r ? Object.defineProperty(r, a, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = d, r
			}

			function c(r) {
				var a = p(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function p(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var i = d.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}

			function f(r) {
				const d = ["isReadable", "isEditable"].reduce((i, m) => r.hasOwnProperty(m) ? l({}, i, {
					[m]: r[m]
				}) : i, {});
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
			n.displayName = "AccessControl", v.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
				PP: function() {
					return r
				},
				RJ: function() {
					return c
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
			const g = () => p.test(window.location.pathname) || s.E.has(u.Qq),
				c = () => s.E.get(u.Qq),
				p = /^\/login\/apple(\/)?/,
				n = [p, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let d = !1;
					n.forEach(m => {
						if (m.test(window.location.pathname)) {
							d = !0;
							return
						}
					});
					const i = g() && d;
					return i && (0, l.C8)(l.LF.OFF), i
				},
				a = d => {
					d && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let i = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					d && (i = i + `&jwt=${d}`), window.location.href = i
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
				oG: function() {
					return i
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
				g = t.n(l),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = t("../react/common/components/Dropdown/index.tsx"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(m) {
					for (var _ = 1; _ < arguments.length; _++) {
						var T = arguments[_];
						for (var A in T) Object.prototype.hasOwnProperty.call(T, A) && (m[A] = T[A])
					}
					return m
				}, n.apply(this, arguments)
			}

			function r(m, _) {
				if (m == null) return {};
				var T = a(m, _),
					A, E;
				if (Object.getOwnPropertySymbols) {
					var I = Object.getOwnPropertySymbols(m);
					for (E = 0; E < I.length; E++) A = I[E], !(_.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(m, A) || (T[A] = m[A]))
				}
				return T
			}

			function a(m, _) {
				if (m == null) return {};
				var T = {},
					A = Object.keys(m),
					E, I;
				for (I = 0; I < A.length; I++) E = A[I], !(_.indexOf(E) >= 0) && (T[E] = m[E]);
				return T
			}
			const d = (0, c.createStyledComponent)(({
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
					color: (0, f.Yc)() ? m.colors.text : void 0
				},
				"& button:hover": {
					color: (0, f.Yc)() ? m.colors.text : void 0
				}
			}));

			function i(m) {
				let {
					menu: _,
					containerProps: T,
					disabled: A,
					disabledDropdown: E = A
				} = m, I = r(m, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: y
				} = (0, l.useI18n)();
				return o().createElement(d, n({}, T, {
					role: "group"
				}), o().createElement(s.zx, n({}, I, {
					disabled: A
				})), o().createElement(p.Lt, {
					trigger: o().createElement(s.zx, {
						type: I.type,
						"aria-haspopup": "menu",
						disabled: E
					}, o().createElement(u.J, {
						type: "caret-down",
						label: y("common.more"),
						size: 12
					})),
					menu: _
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
				v: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = t("../react/common/hooks/useIntersectionObserver.ts");

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(p) {
					for (var f = 1; f < arguments.length; f++) {
						var n = arguments[f];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (p[r] = n[r])
					}
					return p
				}, g.apply(this, arguments)
			}

			function c(p) {
				const f = (0, e.useRef)(null),
					[n, r] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const d = f.current;
					if (d) {
						const {
							bottom: i
						} = d.getBoundingClientRect();
						i > window.innerHeight && r(!0)
					}
				}, []);
				const a = (0, l.S)(d => {
					for (const i of d) i.intersectionRatio < 1 && r(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const d = f.current;
					if (d && a) return a.observe(d), () => {
						a.unobserve(d)
					}
				}, [a]), o().createElement(s.ZC, g({
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
		"../react/common/components/Dropdown/MenuItem.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
				s: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(u);

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(T) {
					for (var A = 1; A < arguments.length; A++) {
						var E = arguments[A];
						for (var I in E) Object.prototype.hasOwnProperty.call(E, I) && (T[I] = E[I])
					}
					return T
				}, g.apply(this, arguments)
			}

			function c(T, A) {
				if (T == null) return {};
				var E = p(T, A),
					I, y;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(T);
					for (y = 0; y < C.length; y++) I = C[y], !(A.indexOf(I) >= 0) && (!Object.prototype.propertyIsEnumerable.call(T, I) || (E[I] = T[I]))
				}
				return E
			}

			function p(T, A) {
				if (T == null) return {};
				var E = {},
					I = Object.keys(T),
					y, C;
				for (C = 0; C < I.length; C++) y = I[C], !(A.indexOf(y) >= 0) && (E[y] = T[y]);
				return E
			}

			function f(T) {
				for (var A = 1; A < arguments.length; A++) {
					var E = arguments[A] != null ? Object(arguments[A]) : {},
						I = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(E).filter(function(y) {
						return Object.getOwnPropertyDescriptor(E, y).enumerable
					})), I.forEach(function(y) {
						n(T, y, E[y])
					})
				}
				return T
			}

			function n(T, A, E) {
				return A = r(A), A in T ? Object.defineProperty(T, A, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[A] = E, T
			}

			function r(T) {
				var A = a(T, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function a(T, A) {
				if (typeof T != "object" || T === null) return T;
				var E = T[Symbol.toPrimitive];
				if (E !== void 0) {
					var I = E.call(T, A || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(T)
			}
			const d = ({
					theme: T
				}) => {
					const A = {
						cursor: "pointer",
						background: T.colors.gray[9],
						color: T.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: T.space[2],
						background: T.colors.background,
						color: T.colors.gray[3],
						fontSize: T.fontSizes[2],
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
							color: T.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				i = (0, s.createComponent)(d, "a"),
				m = (0, s.createComponent)(d, "button");

			function _(T) {
				let {
					disabled: A = !1
				} = T, E = c(T, ["disabled"]);
				const I = (0, u.useHistory)(),
					y = {
						role: "menuitem"
					};
				if ("href" in E && typeof E.href == "string") return o().createElement(i, g({
					"aria-disabled": A
				}, y, E, {
					href: A ? void 0 : E.href,
					onClick: M => {
						var L;
						if (A) return M.stopPropagation();
						M.preventDefault(), (L = E.onClick) === null || L === void 0 || L.call(E, M), I.push(E.href)
					}
				}));
				var C;
				return o().createElement(m, g({
					type: (C = E.type) !== null && C !== void 0 ? C : "button"
				}, y, E, {
					disabled: A
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function($, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/prop-types/index.js"),
				u = t.n(s),
				l = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const g = ({
				children: c
			}) => o().createElement(l.xu, {
				height: 411
			}, c);
			g.propTypes = {
				children: u().node
			}, v.Z = g
		},
		"../react/common/components/ModalManager.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
				ZP: function() {
					return i
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
			const u = m => m.application.modals;
			var l = t("../react/common/actions/modalActions.ts"),
				g = t("../../../../node_modules/swr/core/dist/index.mjs"),
				c = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function p() {
				return p = Object.assign ? Object.assign.bind() : function(m) {
					for (var _ = 1; _ < arguments.length; _++) {
						var T = arguments[_];
						for (var A in T) Object.prototype.hasOwnProperty.call(T, A) && (m[A] = T[A])
					}
					return m
				}, p.apply(this, arguments)
			}
			const f = o().createContext(null);
			class n extends o().Component {
				render() {
					const {
						modals: _,
						closeModal: T
					} = this.props;
					return o().createElement(o().Fragment, null, _.map(({
						ModalComponent: A,
						props: E = {},
						id: I
					}) => {
						const y = () => {
							typeof E.onClose == "function" && E.onClose(), T(A)
						};
						return o().createElement(f.Provider, {
							key: I,
							value: {
								closeModal: y
							}
						}, o().createElement(g.J$, {
							value: c.ZP
						}, o().createElement(A, p({}, E, {
							isOpen: !0,
							closeModal: y
						}))))
					}))
				}
			}

			function r() {
				const m = o().useContext(f);
				if (!m) throw new Error("useModalContext must be used within a ModalContext");
				return m
			}

			function a() {
				const m = (0, s.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(..._) {
						return m(l.openModal(..._))
					}, [m]),
					closeModal: (0, e.useCallback)(function(..._) {
						return m(l.closeModal(..._))
					}, [m])
				}
			}
			var i = (0, s.connect)(m => ({
				modals: u(m)
			}), l)(n)
		},
		"../react/common/components/Page.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return o
				},
				q6: function() {
					return s
				},
				w_: function() {
					return u
				},
				zl: function() {
					return c
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				s = "date-from",
				u = "date-to",
				l = "from",
				g = "to",
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
			let f = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", r.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", r
				}({}),
				n = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Cf: function() {
					return f
				},
				hJ: function() {
					return p
				},
				ys: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), d.forEach(function(i) {
						u(n, i, a[i])
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
				var r = g(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
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
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function($, v, t) {
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
		"../react/common/constants/analytics/botScoreSrc.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				EG: function() {
					return s
				},
				Me: function() {
					return g
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
			let s = function(c) {
				return c.NOT_COMPUTED = "not_computed", c.MACHINE_LEARNING = "machine_learning", c.HEURISTICS = "heuristics", c.BEHAVIORAL_ANALYSIS = "behavioral_analysis", c.JS_FINGERPRINTING = "js_fingerprinting", c.VERIFIED_BOT = "verified_bot", c.CLOUDFLARE_SERVICE = "cloudflare_service", c
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
				l = c => Array.isArray(c) ? c.map(p => {
					var f;
					return (f = u[p]) !== null && f !== void 0 ? f : p
				}) : u[c],
				g = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [s.NOT_COMPUTED, s.MACHINE_LEARNING, s.HEURISTICS, s.BEHAVIORAL_ANALYSIS, s.JS_FINGERPRINTING, s.VERIFIED_BOT, s.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return g
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
					return c
				},
				SP: function() {
					return p
				}
			});
			let e = function(i) {
				return i.page_rules = "page_rules", i.automatic_platform_optimization = "automatic_platform_optimization", i
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
				g = {
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
		"../react/common/constants/billing/tracking.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/common/constants/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Dk: function() {
					return d
				},
				Dy: function() {
					return i
				},
				E_: function() {
					return g
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
					return f
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
				g = "critical",
				c = "unknown",
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
				i = ["gov"],
				m = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				_ = "banner-notification-interactions",
				T = null
		},
		"../react/common/constants/index.ts": function($, v, t) {
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
		"../react/common/constants/roles.ts": function($, v, t) {
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
		"../react/common/hooks/rulesets/resources/tracking.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
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
				s = (l, g, c = !1) => {
					var p;
					return `${g} ${(p=o[l])!==null&&p!==void 0?p:l} ${c?"ruleset":"rule"}${g===e.GET?"s":""}`
				},
				u = () => {
					var l;
					return (l = Object.keys(o).reduce((g, c) => {
						const p = Object.values(e).reduce((f, n) => (f.push(s(c, n)), f.push(s(c, n, !0)), f), []);
						return g.concat(p)
					}, [])) === null || l === void 0 ? void 0 : l.flat()
				}
		},
		"../react/common/hooks/suspenseHelpers.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				bt: function() {
					return c
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

			function g(p) {
				(0, s.OR)(u, () => {
					window.setTimeout(p, 0)
				}, {
					target: window
				})
			}

			function c(...p) {
				const [f, n] = p;
				o().useLayoutEffect(f, n), g(f)
			}
		},
		"../react/common/hooks/useAccountId.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				F: function() {
					return l
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(s);

			function l() {
				var g;
				const {
					accountId: c
				} = (0, s.useParams)(), p = (0, e.p4)(o.D0);
				if (c === void 0 && !p) throw new Error("Account ID not found in URL params");
				return (g = c) !== null && g !== void 0 ? g : p == null ? void 0 : p.id
			}
		},
		"../react/common/hooks/useActiveState.ts": function($, v, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				o = t("webpack/sharing/consume/default/react-redux/react-redux"),
				s = t.n(o),
				u = t("../react/common/selectors/commonSelectors.ts");
			const l = g => {
				const c = (0, o.useDispatch)();
				return [(0, o.useSelector)((0, u.cZ)(g)), n => {
					c((0, e.I)(g, n))
				}]
			};
			v.Z = l
		},
		"../react/common/hooks/useCachedState.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				j: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(l, {
				key: g,
				cache: c = s.E,
				ttl: p
			} = {}) {
				var f;
				const n = g !== void 0 && c.get(g),
					[r, a] = (0, e.useState)((f = n) !== null && f !== void 0 ? f : l);
				return [r, i => {
					a(m => (i instanceof Function && (i = i(m)), g !== void 0 && c.set(g, i, p), i))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function($, v, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(s) {
				return (0, e.qf)(s)
			}
			v.Z = o
		},
		"../react/common/hooks/useIntersectionObserver.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function s(u, {
				root: l,
				rootMargin: g,
				threshold: c
			} = {}) {
				const p = (0, e.useRef)(null);

				function f() {
					return p.current === null && (p.current = new IntersectionObserver(u, {
						root: l,
						rootMargin: g,
						threshold: c
					})), p.current
				}
				return (0, e.useEffect)(() => (p.current = new IntersectionObserver(u, {
					root: l,
					rootMargin: g,
					threshold: c
				}), () => {
					var n;
					(n = p.current) === null || n === void 0 || n.disconnect()
				}), [u, l, g, c]), f()
			}
		},
		"../react/common/hooks/useLoadingState.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				$: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);
			const s = () => {
				const [u, l] = (0, e.useState)(!1);
				return [u, c => async () => {
					l(!0);
					try {
						await c()
					} finally {
						l(!1)
					}
				}]
			}
		},
		"../react/common/hooks/usePrevious.ts": function($, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function s(u) {
				const l = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					l.current = u
				}, [u]), l.current
			}
			v.Z = s
		},
		"../react/common/hooks/useZoneEntitlement.ts": function($, v, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function s(u) {
				return (0, e.p4)(l => (0, o.rV)(l, u))
			}
			v.Z = s
		},
		"../react/common/middleware/sparrow/errors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Uh: function() {
					return l
				},
				ez: function() {
					return u
				},
				oV: function() {
					return g
				}
			});

			function e(c, p, f) {
				return p = o(p), p in c ? Object.defineProperty(c, p, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[p] = f, c
			}

			function o(c) {
				var p = s(c, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(c, p) {
				if (typeof c != "object" || c === null) return c;
				var f = c[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(c, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(c)
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
			class g extends u {
				constructor(p, f) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = f
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				AC: function() {
					return ct
				},
				Au: function() {
					return ce
				},
				B: function() {
					return Be
				},
				B3: function() {
					return Se
				},
				BG: function() {
					return L
				},
				Bp: function() {
					return Ke
				},
				CV: function() {
					return yt
				},
				D0: function() {
					return I
				},
				DT: function() {
					return w
				},
				EL: function() {
					return z
				},
				EU: function() {
					return G
				},
				GE: function() {
					return ht
				},
				Ko: function() {
					return J
				},
				Kx: function() {
					return b
				},
				Le: function() {
					return D
				},
				O4: function() {
					return Ze
				},
				Ou: function() {
					return q
				},
				Py: function() {
					return dt
				},
				QI: function() {
					return pt
				},
				Qf: function() {
					return C
				},
				RO: function() {
					return be
				},
				T3: function() {
					return _t
				},
				T8: function() {
					return M
				},
				UX: function() {
					return N
				},
				VP: function() {
					return lt
				},
				Xo: function() {
					return Xe
				},
				Xu: function() {
					return ie
				},
				Yi: function() {
					return Tt
				},
				Yj: function() {
					return te
				},
				Zu: function() {
					return Q
				},
				bC: function() {
					return W
				},
				f8: function() {
					return H
				},
				hI: function() {
					return ut
				},
				hN: function() {
					return S
				},
				hX: function() {
					return Me
				},
				iq: function() {
					return Ee
				},
				nE: function() {
					return P
				},
				oD: function() {
					return O
				},
				oI: function() {
					return j
				},
				oJ: function() {
					return Y
				},
				tM: function() {
					return B
				},
				uF: function() {
					return se
				},
				ut: function() {
					return ot
				},
				vU: function() {
					return vt
				},
				wQ: function() {
					return _e
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				s = t.n(o),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = t.n(u),
				g = t("../../../../node_modules/reselect/lib/index.js"),
				c = t("../../../../node_modules/moment/moment.js"),
				p = t.n(c),
				f = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				r = t("../react/common/selectors/userSelectors.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				d = t("../react/app/components/DeepLink/selectors.ts"),
				i = t("../react/common/constants/roles.ts"),
				m = t("../react/common/utils/hasRole.ts");

			function _(V) {
				for (var ae = 1; ae < arguments.length; ae++) {
					var ve = arguments[ae] != null ? Object(arguments[ae]) : {},
						Ae = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && Ae.push.apply(Ae, Object.getOwnPropertySymbols(ve).filter(function(we) {
						return Object.getOwnPropertyDescriptor(ve, we).enumerable
					})), Ae.forEach(function(we) {
						T(V, we, ve[we])
					})
				}
				return V
			}

			function T(V, ae, ve) {
				return ae = A(ae), ae in V ? Object.defineProperty(V, ae, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[ae] = ve, V
			}

			function A(V) {
				var ae = E(V, "string");
				return typeof ae == "symbol" ? ae : String(ae)
			}

			function E(V, ae) {
				if (typeof V != "object" || V === null) return V;
				var ve = V[Symbol.toPrimitive];
				if (ve !== void 0) {
					var Ae = ve.call(V, ae || "default");
					if (typeof Ae != "object") return Ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ae === "string" ? String : Number)(V)
			}
			const I = V => {
					const ae = se(V);
					return ae == null ? void 0 : ae.account
				},
				y = V => {
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
				P = (0, g.P1)((0, n.P1)("memberships", L), d.U, (V, ae) => !!ae && !!V ? V.filter(ve => ae.includes(ve.id)) : V),
				S = V => V.accountFlags && V.accountFlags.data,
				b = V => V.accountFlags,
				D = (V, ae, ve) => {
					const Ae = S(V);
					return !Ae || !Ae[ae] ? null : Ae[ae][ve]
				},
				U = V => V.accountFlags.isRequesting,
				j = (V, ...ae) => s()(V, ["accountFlagsChanges", "data", ...ae]),
				H = V => V.accountFlagsChanges.isRequesting,
				oe = (0, g.P1)(S, b, (V, ae) => ({
					data: V,
					meta: ae
				})),
				de = (V, ae, ve) => !!(isEnterpriseSSEnabledSelector(V) && D(V, ae, ve)),
				ie = V => V.membership,
				se = (0, n.P1)("membership", ie),
				F = (0, g.P1)(se, ie, (V, ae) => ({
					data: V,
					meta: ae
				})),
				q = V => {
					const {
						roles: ae = []
					} = se(V) || {};
					return Boolean(ae.find(ve => ve === "Super Administrator - All Privileges" || ve === "Billing"))
				},
				B = V => {
					const ae = [i.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, m.n)(V, ae)
				},
				O = V => {
					const ae = y(V),
						ve = Te.getMemberships(V) ? l().asMutable(Te.getMemberships(V)) : [];
					if (!!ve) return l().from(ve.map(Ae => _({}, Ae, {
						lastSeen: ae[Ae.account.id] ? ae[Ae.account.id].lastSeen : null
					})).sort((Ae, we) => Ae.lastSeen && we.lastSeen ? we.lastSeen - Ae.lastSeen : 0))
				},
				N = V => V.filteredMemberships,
				z = (0, n.P1)("filteredMemberships", N),
				Q = (0, g.P1)(se, V => V == null ? void 0 : V.permissions),
				te = (0, g.P1)(Q, V => (0, e.Z)(ae => {
					var ve;
					return (ve = V == null ? void 0 : V[ae]) !== null && ve !== void 0 ? ve : {
						read: !1,
						edit: !1
					}
				})),
				J = (0, g.P1)(se, V => V == null ? void 0 : V.policies),
				w = (V, ae, ve) => {
					let Ae = Te.getMembership(V);
					if (!Ae) {
						const we = Te.getMemberships(V);
						if (!we || !ae) return !1;
						Ae = we.find(Ue => Ue.account.id === ae)
					}
					if (!Ae || !ve) return !1;
					try {
						return ve(Ae.permissions)
					} catch {
						return !1
					}
				},
				K = V => {
					var ae, ve;
					return (ae = (ve = I(V)) === null || ve === void 0 ? void 0 : ve.meta.has_pro_zones) !== null && ae !== void 0 ? ae : !1
				},
				G = V => {
					var ae, ve;
					return (ae = (ve = I(V)) === null || ve === void 0 ? void 0 : ve.meta.has_business_zones) !== null && ae !== void 0 ? ae : !1
				},
				W = V => G(V) || K(V),
				ee = (V, ae) => {
					const ve = le(V, ae);
					return !!ve && !!ve.enabled
				},
				le = (V, ae) => {
					const ve = Te.getMembership(V),
						Ae = ve && ve.account;
					return Ae && Ae.legacy_flags && Ae.legacy_flags[ae]
				},
				_e = V => ee(V, "custom_pages"),
				me = V => !!V && V["webhooks.webhooks.enabled"],
				fe = V => D(V, "bots", "enabled"),
				Le = V => D(V, "billing", "annual_subscriptions_enable"),
				be = V => V ? Boolean(D(V, "ConstellationAI", "v2_ui")) : !1,
				Me = V => V ? Boolean(D(V, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Be = V => V ? Boolean(D(V, "AIgateway", "enabled")) : !1,
				Fe = V => le(V, "enterprise_zone_quota"),
				Z = V => {
					const ae = Fe(V);
					return !ae || !ae.available ? -1 : ae.available
				},
				Ee = V => V.accountMembers,
				Se = (0, n.P1)("accountMembers", Ee),
				Ze = V => V.accountMember && V.accountMember.isRequesting,
				nt = V => V.accountRoles,
				ct = (0, n.P1)("accountRoles", nt),
				dt = (V, ae) => {
					const ve = Te.getMemberships(V),
						Ae = ve && ve.find(qe => qe.account.id === ae);
					if (Ae) return Ae.account.name.replace(" Account", " account");
					const we = Te.getMembership(V),
						Ue = we && we.account;
					return Ue && Ue.id === ae ? Ue.name : null
				},
				ot = (V, ae) => {
					const ve = Te.getMemberships(V),
						Ae = ve && ve.find(qe => qe.account.id === ae);
					if (Ae) return Ae.account.settings.access_approval_expiry;
					const we = Te.getMembership(V),
						Ue = we && we.account;
					return Ue && Ue.id === ae ? Ue.settings.access_approval_expiry : null
				},
				Xe = (V, ae) => {
					const ve = ot(V, ae);
					return ve ? p().utc(ve).isAfter() : !1
				},
				_t = (V, ae, ve) => {
					const Ae = ot(V, ae);
					let we = Ae ? p().utc(Ae) : null;
					return !we || !we.isAfter() ? "" : we && we.year() === 3e3 ? ve("account.access_approval.card_expiration_forever") : ve("account.access_approval.card_expiration_text", {
						expiryTimestamp: we.local().format(f.U.DateTime)
					})
				},
				Y = V => V && V.member && V.member.edit,
				ce = (V, ae) => {
					const ve = Te.getMembership(V),
						Ae = ve && ve.account;
					return Ae ? Ae.id !== ae : !1
				},
				ye = V => V.dpa,
				xe = (0, n.P1)("dpa", ye),
				$e = V => V.webhook,
				Ne = V => V.webhooks,
				Je = (0, n.P1)("webhook", Ne),
				lt = V => V.accountLegoContract,
				Et = (0, n.P1)("accountLegoContract", lt),
				pt = V => {
					const ae = Et(V);
					return (ae == null ? void 0 : ae.lego_state) ? ae.lego_state : ""
				},
				Ct = V => pt(V) === "signed",
				ht = V => lt(V).isRequesting,
				vt = V => {
					const ae = Et(V);
					return ae && ae.subscription_type ? ae.subscription_type : ""
				},
				ke = V => vt(V) !== "",
				Te = {
					getMembership: se,
					getMemberships: P,
					getFilteredMemberships: z,
					getAccountMembers: Se,
					getAccountRoles: ct
				},
				Ke = V => V.accountSingle,
				Tt = (0, n.P1)("accountSingle", Ke),
				ut = V => {
					const ae = [i.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, i.V.ADMINISTRATOR];
					return (0, m.n)(V, ae)
				},
				yt = V => (0, m.n)(V, [i.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/commonSelectors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
				const g = `__ACTIVE__${l}`;
				return c => {
					const p = c.application;
					return p && p.active[g]
				}
			}

			function o(l) {
				const g = `__TOGGLE__${l}`;
				return c => {
					const p = c.application;
					return p && p.toggles[g]
				}
			}

			function s(l) {
				return l && l.paginationData && l.paginationData.info && l.paginationData.info.total_count ? l.paginationData.info.total_count : 0
			}
			const u = l => l.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				$f: function() {
					return i
				},
				AD: function() {
					return l
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return I
				},
				Ci: function() {
					return Q
				},
				DA: function() {
					return Me
				},
				E6: function() {
					return a
				},
				Gy: function() {
					return fe
				},
				Hq: function() {
					return me
				},
				Ms: function() {
					return M
				},
				Nb: function() {
					return _e
				},
				Pj: function() {
					return be
				},
				Q2: function() {
					return g
				},
				Qq: function() {
					return W
				},
				Td: function() {
					return A
				},
				Z: function() {
					return w
				},
				a: function() {
					return E
				},
				a5: function() {
					return G
				},
				c7: function() {
					return ee
				},
				du: function() {
					return p
				},
				ec: function() {
					return H
				},
				f: function() {
					return le
				},
				hL: function() {
					return K
				},
				ji: function() {
					return te
				},
				jo: function() {
					return L
				},
				l9: function() {
					return Fe
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
					return T
				},
				rV: function() {
					return c
				},
				u1: function() {
					return f
				},
				w4: function() {
					return r
				},
				yD: function() {
					return J
				}
			});
			var e = t("../react/utils/url.ts");

			function o(Z, Ee) {
				return Z && Z[Ee]
			}
			const s = Z => !u(Z).isRequesting;

			function u(Z) {
				return Z.entitlements.zone
			}

			function l(Z) {
				return u(Z).data
			}
			const g = Z => {
				var Ee, Se;
				return ((Ee = u(Z).paginationData) === null || Ee === void 0 || (Se = Ee.options) === null || Se === void 0 ? void 0 : Se.editedDate) || {}
			};

			function c(Z, Ee) {
				const Se = l(Z);
				return Se ? o(Se, Ee) : void 0
			}
			const p = (Z, Ee) => c(Z, Ee) === !0;

			function f(Z) {
				return Z.entitlements.account
			}

			function n(Z) {
				return f(Z).data
			}
			const r = Z => {
				var Ee, Se;
				return ((Ee = f(Z).paginationData) === null || Ee === void 0 || (Se = Ee.options) === null || Se === void 0 ? void 0 : Se.editedDate) || {}
			};

			function a(Z) {
				return !f(Z).isRequesting
			}

			function d(Z, Ee) {
				const Se = n(Z);
				return Se ? o(Se, Ee) : void 0
			}

			function i(Z, Ee) {
				return d(Z, Ee) === !0
			}

			function m(Z, Ee) {
				return Ee.every(Se => i(Z, Se))
			}

			function _(Z) {
				return i(Z, "contract.customer_enabled")
			}

			function T(Z) {
				return i(Z, "contract.self_service_allowed")
			}

			function A(Z) {
				return i(Z, "billing.partners_managed")
			}
			const E = Z => _(Z) && T(Z),
				I = Z => i(Z, "enterprise.ecp_allowed");

			function y(Z) {
				return C(Z) || i(Z, "argo.allow_smart_routing") || i(Z, "argo.allow_tiered_caching") || i(Z, "rate_limiting.enabled") || i(Z, "ctm.enabled") || i(Z, "workers.enabled") || i(Z, "workers.kv_store.enabled") || i(Z, "stream.enabled")
			}
			const C = Z => p(Z, "argo.allow_smart_routing") || p(Z, "argo.allow_tiered_caching"),
				M = Z => i(Z, "zone.cname_setup_allowed") || i(Z, "zone.partial_setup_allowed") || p(Z, "zone.partial_setup_allowed"),
				L = Z => i(Z, "argo.allow_smart_routing") || p(Z, "argo.allow_smart_routing"),
				P = Z => i(Z, "argo.allow_tiered_caching") || p(Z, "argo.allow_tiered_caching"),
				S = Z => L(Z) || P(Z),
				b = Z => i(Z, "ctm.enabled"),
				D = Z => {
					const Ee = d(Z, "ctm.load_balancers");
					return typeof Ee == "number" ? Ee : 0
				},
				U = Z => {
					const Ee = d(Z, "ctm.pools");
					return typeof Ee == "number" ? Ee : 0
				},
				j = Z => {
					const Ee = d(Z, "ctm.origins");
					return typeof Ee == "number" ? Ee : 0
				},
				H = Z => i(Z, "workers.enabled"),
				oe = Z => i(Z, "stream.enabled"),
				de = Z => {
					const Ee = d(Z, "access.users_allowed");
					return typeof Ee == "number" ? Ee : 0
				},
				ie = Z => de(Z) > 0,
				se = Z => {
					const Ee = c(Z, "dedicated_certificates");
					return typeof Ee == "number" ? Ee : 0
				},
				F = Z => se(Z) > 0,
				q = Z => {
					const Ee = c(Z, "rate_limiting.max_rules");
					return typeof Ee == "number" ? Ee : 0
				},
				B = Z => i(Z, "rate_limiting.enabled"),
				O = Z => {
					const Ee = c(Z, "page_rules");
					return typeof Ee == "number" ? Ee : 0
				},
				N = Z => O(Z) > 0,
				z = Z => {
					const Ee = d(Z, "dns_firewall.max_clusters_allowed");
					return typeof Ee == "number" ? Ee : 0
				},
				Q = Z => z(Z) > 0,
				te = Z => p(Z, "zone.advanced_certificate_manager") || i(Z, "zone.advanced_certificate_manager"),
				J = Z => c(Z, "authoritative_dns.proxy_record_allowed") === !1 || d(Z, "authoritative_dns.proxy_record_allowed") === !1,
				w = Z => i(Z, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				K = Z => c(Z, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				G = Z => {
					const Ee = c(Z, "authoritative_dns.min_record_ttl_allowed");
					return typeof Ee == "number" && Ee > 1 ? Ee : 60
				},
				W = Z => i(Z, "foundation_dns.advanced_nameservers_allowed") || p(Z, "foundation_dns.advanced_nameservers_allowed"),
				ee = Z => i(Z, "account_custom_ns.allowed"),
				le = (Z, Ee) => ((0, e.el)(window.location.pathname) ? c : d)(Z, Ee),
				_e = Z => ((0, e.el)(window.location.pathname) ? l : n)(Z),
				me = Z => i(Z, "authoritative_dns.multi_provider_allowed") || p(Z, "authoritative_dns.multi_provider_allowed"),
				fe = Z => p(Z, "authoritative_dns.cname_flattening_allowed"),
				Le = Z => i(Z, "secondary_dns.secondary_overrides") || p(Z, "secondary_dns.secondary_overrides"),
				be = Z => i(Z, "authoritative_dns.custom_soa_allowed") || p(Z, "authoritative_dns.custom_soa_allowed"),
				Me = Z => i(Z, "authoritative_dns.custom_ns_ttl_allowed") || p(Z, "authoritative_dns.custom_ns_ttl_allowed"),
				Be = Z => i(Z, "secondary.create_zone"),
				Fe = Z => W(Z) || ee(Z) || me(Z) || Be(Z) || Le(Z) || be(Z) || Me(Z)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				r: function() {
					return l
				},
				v: function() {
					return g
				}
			});
			var e = t("../react/utils/i18n.ts"),
				o = t("../../../common/intl/intl-types/src/index.ts"),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/utils/bootstrap.ts");
			const l = c => {
				if ((0, u.gm)()) return s.Z.set(e.ly, e.ZW), e.ZW;
				const p = c.userCommPreferences.data;
				if (p == null ? void 0 : p["language-locale"]) return (0, e.i_)(p["language-locale"]), p["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const f = (0, e.Kd)();
					return g(f) ? f : e.ZW
				}
			};

			function g(c) {
				const p = Object.keys(o.Q).find(f => o.Q[f] === c);
				return !!c && typeof c == "string" && p != null && (0, e.S8)(p)
			}
		},
		"../react/common/selectors/userSelectors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				$8: function() {
					return l
				},
				BG: function() {
					return f
				},
				BY: function() {
					return E
				},
				GP: function() {
					return i
				},
				GU: function() {
					return I
				},
				PR: function() {
					return s
				},
				h$: function() {
					return T
				},
				h8: function() {
					return n
				},
				kk: function() {
					return _
				},
				l8: function() {
					return c
				},
				mV: function() {
					return m
				},
				vW: function() {
					return g
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const o = y => y.user,
				s = (0, e.P1)("user", o),
				u = y => {
					var C;
					return (C = s(y)) === null || C === void 0 ? void 0 : C.email.endsWith("@cloudflare.com")
				},
				l = y => {
					var C;
					return !!((C = s(y)) === null || C === void 0 ? void 0 : C.id)
				},
				g = y => {
					const C = s(y);
					if (!!C) return C.first_name && C.last_name ? `${C.first_name} ${C.last_name}` : C.email
				},
				c = y => {
					const C = s(y);
					return C && C.has_enterprise_zones
				},
				p = y => y.userCommPreferences,
				f = (0, e.P1)("userCommPreferences", p),
				n = y => {
					const C = s(y);
					return C && C.email_verified
				},
				r = y => {
					const C = f(y);
					return C && C.preferences.marketing_communication
				},
				a = y => y.userDetails,
				d = (0, e.P1)("userDetails", a),
				i = y => {
					const C = d(y);
					return C && C["2FA-RECOVERY"] === "scheduled"
				},
				m = y => {
					const C = d(y);
					return C && C["2FA-RECOVERY"] === "interrupted"
				},
				_ = y => {
					const C = d(y);
					return C == null ? void 0 : C["NEW-USER-EMAIL"]
				},
				T = y => y.gates.assignments,
				A = (y, C) => y && y[C];

			function E(y, C) {
				const M = T(y);
				return M ? A(M, C) : void 0
			}
			const I = (y, C) => E(y, C) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				$4: function() {
					return M
				},
				$t: function() {
					return ct
				},
				A4: function() {
					return _
				},
				Cu: function() {
					return T
				},
				DQ: function() {
					return W
				},
				Ej: function() {
					return P
				},
				FH: function() {
					return E
				},
				ID: function() {
					return B
				},
				Ko: function() {
					return be
				},
				Le: function() {
					return _e
				},
				Ly: function() {
					return Q
				},
				M3: function() {
					return Ee
				},
				N8: function() {
					return Z
				},
				NY: function() {
					return K
				},
				Ns: function() {
					return N
				},
				Ox: function() {
					return Xe
				},
				P4: function() {
					return S
				},
				RO: function() {
					return F
				},
				Tr: function() {
					return Le
				},
				U: function() {
					return A
				},
				Ug: function() {
					return y
				},
				V6: function() {
					return Se
				},
				WR: function() {
					return _t
				},
				Xg: function() {
					return m
				},
				ZB: function() {
					return le
				},
				_y: function() {
					return O
				},
				cU: function() {
					return Me
				},
				cg: function() {
					return G
				},
				d2: function() {
					return oe
				},
				il: function() {
					return z
				},
				jN: function() {
					return D
				},
				jg: function() {
					return J
				},
				kC: function() {
					return L
				},
				kf: function() {
					return Ze
				},
				ko: function() {
					return se
				},
				mK: function() {
					return dt
				},
				nA: function() {
					return i
				},
				oY: function() {
					return b
				},
				qM: function() {
					return me
				},
				rq: function() {
					return w
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
					return I
				},
				wn: function() {
					return ee
				},
				xU: function() {
					return H
				},
				xw: function() {
					return fe
				},
				z5: function() {
					return q
				},
				zO: function() {
					return Be
				},
				zW: function() {
					return nt
				},
				zh: function() {
					return de
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				s = t("../../../../node_modules/lodash/get.js"),
				u = t.n(s),
				l = t("../../../../node_modules/moment/moment.js"),
				g = t.n(l),
				c = t("../react/common/constants/billing/index.ts");

			function p(Y) {
				for (var ce = 1; ce < arguments.length; ce++) {
					var ye = arguments[ce] != null ? Object(arguments[ce]) : {},
						xe = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && xe.push.apply(xe, Object.getOwnPropertySymbols(ye).filter(function($e) {
						return Object.getOwnPropertyDescriptor(ye, $e).enumerable
					})), xe.forEach(function($e) {
						f(Y, $e, ye[$e])
					})
				}
				return Y
			}

			function f(Y, ce, ye) {
				return ce = n(ce), ce in Y ? Object.defineProperty(Y, ce, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[ce] = ye, Y
			}

			function n(Y) {
				var ce = r(Y, "string");
				return typeof ce == "symbol" ? ce : String(ce)
			}

			function r(Y, ce) {
				if (typeof Y != "object" || Y === null) return Y;
				var ye = Y[Symbol.toPrimitive];
				if (ye !== void 0) {
					var xe = ye.call(Y, ce || "default");
					if (typeof xe != "object") return xe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ce === "string" ? String : Number)(Y)
			}
			const a = (0, o.P1)("zone", Y => Y.zone),
				d = Y => {
					var ce;
					return (ce = Y.zoneVersioning) === null || ce === void 0 ? void 0 : ce.zoneVersionSelector
				},
				i = (0, e.P1)(a, d, (Y, ce) => {
					var ye, xe, $e;
					let Ne;
					if (Array.isArray(Y) && Y.length === 1 ? Ne = Y[0] : Y && !Array.isArray(Y) && (Ne = Y), !Ne) return;
					const Je = !!(ce == null ? void 0 : ce.enabled);
					return p({}, Ne, Ne.name && {
						name: Je ? ce.rootZoneName : Ne.name
					}, {
						versioning: {
							enabled: Je,
							isRoot: !((ye = Ne.name) === null || ye === void 0 ? void 0 : ye.endsWith(".config.cfdata.org")),
							version: Je ? ce.selectedVersion : 0,
							rootZoneId: Je ? ce.rootZoneId : (xe = ($e = Ne) === null || $e === void 0 ? void 0 : $e.id) !== null && xe !== void 0 ? xe : ""
						}
					})
				}),
				m = Y => Y.zone,
				_ = (0, e.P1)(i, m, (Y, ce) => ({
					data: Y,
					meta: ce
				})),
				T = Y => {
					var ce, ye;
					return (ce = (ye = i(Y)) === null || ye === void 0 ? void 0 : ye.id) !== null && ce !== void 0 ? ce : ""
				},
				A = Y => Y.zones,
				E = Y => Y.zonesRoot,
				I = Y => Y.zonesAccount,
				y = (0, o.P1)("zones", A),
				C = (0, o.P1)("zonesRoot", E),
				M = (0, o.P1)("zonesAccount", I);

			function L(Y) {
				const ce = i(Y);
				return ce ? ce.created_on : null
			}

			function P(Y, ce, ye) {
				const xe = L(Y);
				if (!xe) return;
				const $e = g().duration(ce, ye),
					Ne = new Date(xe),
					Je = new Date(new Date().getTime() - $e.asMilliseconds());
				return Ne.getTime() > Je.getTime()
			}

			function S(Y) {
				const ce = i(Y);
				return ce ? ce.status : null
			}

			function b(Y) {
				const ce = i(Y);
				return ce ? ce.type : null
			}

			function D(Y) {
				return (Y == null ? void 0 : Y.plan_pending) ? Y == null ? void 0 : Y.plan_pending : Y == null ? void 0 : Y.plan
			}

			function U(Y) {
				const ce = i(Y);
				if (!ce) return;
				const ye = D(ce);
				return ye && ye.legacy_id
			}

			function j(Y, ce) {
				const ye = D(Y);
				return !!ye && c.Gs.indexOf(ye.legacy_id) >= c.Gs.indexOf(ce)
			}

			function H(Y) {
				return !!Y && Y.status === "initializing"
			}

			function oe(Y) {
				return !!Y && Y.status === "pending"
			}

			function de(Y) {
				return !!Y && Y.status === "active"
			}

			function ie(Y, ce) {
				if (!Y) return !1;
				const ye = D(Y);
				return !!ye && ye.legacy_id === ce
			}

			function se(Y) {
				return ie(Y, "enterprise")
			}
			const F = Y => se(i(Y));

			function q(Y) {
				return ie(Y, "business")
			}
			const B = Y => q(i(Y));

			function O(Y) {
				return ie(Y, "pro")
			}

			function N(Y) {
				return ie(Y, "free")
			}
			const z = Y => N(i(Y));

			function Q(Y) {
				return !se(Y)
			}

			function te(Y) {
				return Y && Y.owner
			}

			function J(Y, ce) {
				const ye = te(ce);
				return !!ye && ye.type === "user" && ye.id === Y.id
			}

			function w(Y) {
				const ce = i(Y);
				return !!ce && ce.type === "partial"
			}

			function K(Y) {
				const ce = i(Y);
				return !!ce && ce.type === "secondary"
			}
			const G = Y => {
					var ce;
					const ye = i(Y);
					return !!(ye == null ? void 0 : ye.host) && !!((ce = ye.plan) === null || ce === void 0 ? void 0 : ce.externally_managed)
				},
				W = Y => {
					const ce = y(Y);
					return ce && ce.some(se)
				},
				ee = (Y, ce) => {
					const ye = i(Y);
					return ye && ye.betas ? ye.betas.includes(ce) : !1
				},
				le = (Y, ...ce) => u()(Y, ["zoneFlags", "data", ...ce]),
				_e = (Y, ...ce) => u()(Y, ["accountFlags", "data", ...ce]),
				me = Y => Y.accountFlags.isRequesting,
				fe = Y => Y.zoneFlags.isRequesting,
				Le = (Y, ...ce) => u()(Y, ["zoneFlagsChanges", "data", ...ce]),
				be = Y => Y.zoneFlagsChanges.isRequesting,
				Me = Y => Y.zoneFlags && Y.zoneFlags.data,
				Be = Y => Y.zoneFlags,
				Fe = (0, e.P1)(Me, Be, (Y, ce) => ({
					data: Y,
					meta: ce
				})),
				Z = (0, o.P1)("abuseUrls", Y => Y.overview.abuseUrls),
				Ee = Y => {
					const ce = i(Y);
					return ce ? `/${ce.account.id}/${ce.name}` : null
				},
				Se = Y => Y.zoneMarketingCampaigns,
				Ze = Y => Y.overview.zoneBlocks.data,
				nt = Y => Y.overview.zoneBlocks.isRequesting,
				ct = Y => Y.overview.zoneBlocks.hasData,
				dt = Y => {
					var ce, ye;
					return (Y == null || (ce = Y.overview.zoneBlocks) === null || ce === void 0 || (ye = ce.paginationData) === null || ye === void 0 ? void 0 : ye.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				ot = Y => Y.overview.zoneBlocksReview.isRequesting,
				Xe = Y => Y.overview.zoneHold,
				_t = (0, o.P1)("zoneHold", Xe)
		},
		"../react/common/utils/formatDate.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			v.Z = (o, s, u = !1) => (0, e.p6)(o, s, u)
		},
		"../react/common/utils/hasRole.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				n: function() {
					return o
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const o = (s, u) => {
				const {
					roles: l = []
				} = (0, e.uF)(s) || {};
				return u.some(g => l.includes(g))
			}
		},
		"../react/common/utils/isGuards.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Q$: function() {
					return s
				},
				t: function() {
					return g
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
			const s = c => c ? ["page", "per_page", "count", "total_count"].every(f => f in c && c[f]) : !1,
				u = (c = "") => e.Dy.includes(c.toLowerCase()),
				l = c => c !== null && typeof c == "object" && "name" in c && "size" in c && "type" in c && typeof c.slice == "function",
				g = c => (0, o.Z)(c)
		},
		"../react/common/utils/startViewTransition.ts": function($, v, t) {
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
		"../react/common/utils/useQueryCache.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				o: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(c) {
				for (var p = 1; p < arguments.length; p++) {
					var f = arguments[p] != null ? Object(arguments[p]) : {},
						n = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(f).filter(function(r) {
						return Object.getOwnPropertyDescriptor(f, r).enumerable
					})), n.forEach(function(r) {
						s(c, r, f[r])
					})
				}
				return c
			}

			function s(c, p, f) {
				return p = u(p), p in c ? Object.defineProperty(c, p, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[p] = f, c
			}

			function u(c) {
				var p = l(c, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function l(c, p) {
				if (typeof c != "object" || c === null) return c;
				var f = c[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(c, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(c)
			}
			const g = c => {
				const p = (0, e.useQueryClient)(),
					f = E => {
						var I;
						return p.getQueriesData((I = E) !== null && I !== void 0 ? I : c)
					},
					n = E => {
						var I;
						return p.getQueryData((I = E) !== null && I !== void 0 ? I : c)
					},
					r = E => {
						var I;
						return p.getQueriesData({
							queryKey: (I = E) !== null && I !== void 0 ? I : c,
							stale: !0
						})
					},
					a = (E, I) => {
						var y;
						p.setQueryData((y = I) !== null && y !== void 0 ? y : c, E)
					},
					d = async E => {
						var I;
						await p.refetchQueries((I = E) !== null && I !== void 0 ? I : c)
					}, i = async (E, I) => {
						var y, C;
						await p.invalidateQueries((y = E) !== null && y !== void 0 ? y : c, o({
							refetchActive: !1
						}, (C = I) !== null && C !== void 0 ? C : {}))
					}, m = async (E, I) => {
						const y = E || (C => {
							var M;
							return (C == null || (M = C.queryKey) === null || M === void 0 ? void 0 : M[0]) === c
						});
						await p.invalidateQueries(o({
							predicate: y,
							refetchActive: !1,
							refetchInactive: !1
						}, I))
					};
				return {
					refetch: d,
					cancelData: async () => {
						await p.cancelQueries(c)
					},
					invalidate: i,
					setData: a,
					getDataStale: r,
					getData: f,
					prefetchQuery: (E, I) => {
						var y;
						return p.prefetchQuery((y = I) !== null && y !== void 0 ? y : c, E)
					},
					getQueryData: n,
					predicateInvalidate: m,
					batchInvalidate: async ({
						queryKeysToInvalidate: E = [],
						queryKeysToPredicateInvalidate: I = [],
						refetchActive: y = !1,
						refetchInactive: C = !1
					}) => {
						const M = E.map(P => i(P)),
							L = I.map(P => m(S => {
								var b;
								return (S == null || (b = S.queryKey) === null || b === void 0 ? void 0 : b[0]) === P
							}, {
								refetchActive: y,
								refetchInactive: C
							}));
						await Promise.all([...M, ...L])
					}
				}
			}
		},
		"../react/common/validators/index.js": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return c
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
				g = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				c = f => g.test(f),
				p = f => !!f && !!f.length && /^[ -~]+$/.test(f)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function($, v, t) {
			"use strict";
			t.d(v, {
				DZ: function() {
					return u
				},
				GA: function() {
					return f
				},
				hT: function() {
					return g
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
				g = a => new Date(a),
				c = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				p = a => {
					const d = a / 60 / 60 / 1e3;
					return c[Object.keys(c).sort((i, m) => m - i).find(i => d >= i)]
				},
				f = (a, d = i => i.avg && i.avg.sampleInterval ? i.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((i, m) => i + d(m), 0) / a.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = a => n[a]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Jz: function() {
					return f
				},
				OK: function() {
					return l
				},
				_Y: function() {
					return c
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

			function e(i) {
				for (var m = 1; m < arguments.length; m++) {
					var _ = arguments[m] != null ? Object(arguments[m]) : {},
						T = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(_).filter(function(A) {
						return Object.getOwnPropertyDescriptor(_, A).enumerable
					})), T.forEach(function(A) {
						o(i, A, _[A])
					})
				}
				return i
			}

			function o(i, m, _) {
				return m = s(m), m in i ? Object.defineProperty(i, m, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[m] = _, i
			}

			function s(i) {
				var m = u(i, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function u(i, m) {
				if (typeof i != "object" || i === null) return i;
				var _ = i[Symbol.toPrimitive];
				if (_ !== void 0) {
					var T = _.call(i, m || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(i)
			}
			let l = function(i) {
					return i.Sending = "sending", i.Success = "success", i.Failed = "failed", i.Latent = "latent", i
				}({}),
				g = function(i) {
					return i[i.Success = 200] = "Success", i[i.BadRequest = 400] = "BadRequest", i
				}({});
			const c = {
					status: l.Latent,
					statusCode: void 0
				},
				p = {
					status: l.Sending
				},
				f = {
					status: l.Success,
					statusCode: g.Success
				},
				n = {
					status: l.Failed,
					statusCode: g.BadRequest
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
					}, c),
					installsList: e({
						value: []
					}, c),
					categoriesList: e({
						value: []
					}, c),
					recommendedAppsList: e({
						value: []
					}, c),
					metadata: e({
						value: null
					}, c),
					app: e({
						value: null
					}, c),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, c)
				},
				d = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Ux: function() {
					return r
				},
				cz: function() {
					return d
				},
				im: function() {
					return c
				},
				pG: function() {
					return a
				},
				t$: function() {
					return i
				}
			});
			var e = t("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(_) {
				for (var T = 1; T < arguments.length; T++) {
					var A = arguments[T] != null ? Object(arguments[T]) : {},
						E = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(A).filter(function(I) {
						return Object.getOwnPropertyDescriptor(A, I).enumerable
					})), E.forEach(function(I) {
						s(_, I, A[I])
					})
				}
				return _
			}

			function s(_, T, A) {
				return T = u(T), T in _ ? Object.defineProperty(_, T, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[T] = A, _
			}

			function u(_) {
				var T = l(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function l(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var A = _[Symbol.toPrimitive];
				if (A !== void 0) {
					var E = A.call(_, T || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(_)
			}
			const g = _ => _.test(window.location.hostname),
				c = () => g(e.j9),
				p = () => g(MARKETPLACE_LOCAL_URL_REGEXP),
				f = (_, T) => {
					const A = random(0, 1) ? -1 : 1;
					return _.points === T.points || _.points >= APP_POINTS_THRESHOLD && T.points >= APP_POINTS_THRESHOLD ? A : _.points < 0 || T.points < 0 || _.points >= APP_POINTS_THRESHOLD || T.points >= APP_POINTS_THRESHOLD ? T.points - _.points : A
				},
				n = (_, T, A) => {
					const E = get(T, A),
						I = get(_, A);
					return E && !isEqual(E, I)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (_, T) => T.map(A => _.find(E => E.id === A)),
						addAppVersionInfo: (_, T) => o({}, T, {
							currentVersion: T.versions.find(A => A.tag === _.versionTag),
							latestVersion: T.versions.find(A => A.tag === T.infoVersion)
						}),
						addCurrentSiteInstall: (_, T) => o({}, T, {
							currentSiteInstall: _.find(A => A.appId === T.id)
						})
					}
				},
				a = (_, T, A) => o({}, _, T, A ? {
					value: A
				} : {}),
				d = _ => _.map(T => T.status),
				i = _ => _.apps ? _.apps : _,
				m = _ => {
					let T = ["by-cloudflare"];
					return _.filter(A => !T.includes(A.id) && A.visible).sort((A, E) => A.points < E.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function($, v, t) {
			"use strict";
			t.r(v), t.d(v, {
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

			function l(g) {
				const c = g.replace(/-/g, "_");
				return Object.keys(o).includes(c) ? c : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				L: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/url-join/lib/url-join.js"),
				o = t.n(e),
				s = t("../../../../node_modules/lodash-es/defaults.js"),
				u = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function l(d) {
				for (var i = 1; i < arguments.length; i++) {
					var m = arguments[i] != null ? Object(arguments[i]) : {},
						_ = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(m).filter(function(T) {
						return Object.getOwnPropertyDescriptor(m, T).enumerable
					})), _.forEach(function(T) {
						p(d, T, m[T])
					})
				}
				return d
			}

			function g(d, i) {
				if (d == null) return {};
				var m = c(d, i),
					_, T;
				if (Object.getOwnPropertySymbols) {
					var A = Object.getOwnPropertySymbols(d);
					for (T = 0; T < A.length; T++) _ = A[T], !(i.indexOf(_) >= 0) && (!Object.prototype.propertyIsEnumerable.call(d, _) || (m[_] = d[_]))
				}
				return m
			}

			function c(d, i) {
				if (d == null) return {};
				var m = {},
					_ = Object.keys(d),
					T, A;
				for (A = 0; A < _.length; A++) T = _[A], !(i.indexOf(T) >= 0) && (m[T] = d[T]);
				return m
			}

			function p(d, i, m) {
				return i = f(i), i in d ? Object.defineProperty(d, i, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[i] = m, d
			}

			function f(d) {
				var i = n(d, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function n(d, i) {
				if (typeof d != "object" || d === null) return d;
				var m = d[Symbol.toPrimitive];
				if (m !== void 0) {
					var _ = m.call(d, i || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(d)
			}
			class r {
				constructor(i) {
					p(this, "token", void 0), p(this, "options", void 0), p(this, "setAuthHeader", m => {
						this.token = m
					}), this.token = "", this.options = (0, s.Z)(i, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(i = "GET", m, _ = {}) {
					const {
						body: T
					} = _, A = g(_, ["body"]);
					return fetch(o()(this.options.baseUrl, m), l({
						method: i
					}, A, T ? {
						body: JSON.stringify(T)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(l({
							Accept: "application/json, text/plain, */*"
						}, _.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(i, m = {}) {
					const _ = await this.request("GET", i, m);
					return this.parseJSONResponse(_)
				}
				async postJSON(i, m = {}) {
					const _ = await this.request("POST", i, l({}, m, {
						headers: l({}, m.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(_)
				}
				parseJSONResponse(i) {
					return i.json()
				}
			}
			p(r, "defaults", {
				baseUrl: (0, u.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const a = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
				g = t("../react/pages/apps/marketplace/requests/Requester.ts"),
				c = t("../react/pages/apps/marketplace/libraries/resource.ts");

			function* p(i, m, _, T) {
				const A = (0, e.Z)(m),
					[E, I, y] = [`get${A}Sending`, `get${A}Success`, `get${A}Failed`];
				try {
					yield(0, l.gz)(i[E]());
					const C = yield(0, l.RE)(a, _);
					let M = C;
					if (M.error) {
						yield(0, l.gz)(i[y]());
						return
					}
					return T && (M = yield T(C)), yield(0, l.gz)(i[I](M)), M
				} catch {
					yield(0, l.gz)(i[y]())
				}
			}

			function* f(i, m, _, T) {
				const A = (0, e.Z)(m),
					E = `get${A}Sending`,
					I = `get${A}Success`,
					y = `get${A}Failed`;
				try {
					yield(0, l.gz)(i[E]());
					const C = yield(0, l.RE)(d, {
						url: _,
						data: T
					});
					return yield(0, l.gz)(i[I](C)), C
				} catch {
					yield(0, l.gz)(i[y]())
				}
			}
			const n = i => (0, o.Z)(i) ? "" : `?${s.stringify(i)}`,
				r = {
					app: new c.c({
						name: "app",
						url: (i, m) => `apps/${i}${n(m)}`
					}),
					apps: new c.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new c.c({
							name: "installs",
							url: i => `sites/${i}/installs`
						}),
						delete: new c.c({
							name: "installs",
							url: i => `installs/${i}`
						})
					},
					categories: new c.c({
						name: "categories",
						url: (i = {}) => "categories" + n(i)
					}),
					metadata: {
						get: new c.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						}),
						post: new c.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						})
					},
					ratings: {
						default: new c.c({
							name: "ratings",
							url: (i = {}) => "ratings" + n(i)
						}),
						delete: new c.c({
							name: "ratings",
							url: i => `ratings/${i}`
						})
					},
					recommendedApps: new c.c({
						name: "recommendedApps",
						url: (i = {}) => "apps/recommend" + n(i)
					}),
					developedApps: new c.c({
						name: "developedApps",
						url: i => `user/${i}/apps`
					})
				},
				a = async i => g.L.fetchJSON(i), d = async i => {
					const {
						url: m,
						data: _
					} = i;
					return g.L.postJSON(m, {
						body: _
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Nw: function() {
					return p
				},
				U4: function() {
					return c
				},
				XO: function() {
					return g
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
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), d.forEach(function(i) {
						s(n, i, a[i])
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
			let g = function(n) {
					return n.SetCurrentUser = "user.set", n
				}({}),
				c = function(n) {
					return n.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", n.SetZone = "MARKETPLACE/AUTH/SET_ZONE", n.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", n.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", n.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", n.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", n.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", n.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", n.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", n.ResetState = "MARKETPLACE/AUTH/RESET_STATE", n
				}({});
			const p = {
				resetState: () => ({
					type: c.ResetState
				}),
				initSaga: n => ({
					type: c.InitSaga,
					zoneId: n
				}),
				setZone: n => ({
					type: c.SetZone,
					zone: n
				}),
				setToken: n => ({
					type: c.SetToken,
					token: n
				}),
				clearToken: () => ({
					type: c.ClearToken
				}),
				setTokenValid: n => ({
					type: c.SetTokenValid,
					isTokenValid: n
				}),
				getCurrentUserSaga: () => ({
					type: c.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: c.CurrentUserSending
				}),
				getCurrentUserSuccess: n => ({
					type: c.CurrentUserSuccess,
					user: n
				}),
				getCurrentUserFailed: () => ({
					type: c.CurrentUserFailed
				})
			};

			function f(n = e.fD, r) {
				switch (r.type) {
					case c.ResetState:
						return o({}, e.fD);
					case c.CurrentUserSending:
						return o({}, n);
					case c.CurrentUserSuccess:
						const {
							user: a
						} = r;
						return o({}, n, {
							user: a
						});
					case c.CurrentUserFailed:
						return o({}, n);
					case c.SetZone:
						const {
							zone: d
						} = r;
						return o({}, n, {
							zone: d
						});
					case c.SetToken:
						const {
							token: i
						} = r;
						return o({}, n, {
							token: i
						});
					case c.ClearToken:
						return o({}, n, {
							token: null
						});
					case c.SetTokenValid:
						const {
							isTokenValid: m
						} = r;
						return o({}, n, {
							isTokenValid: m
						});
					default:
						return n
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return c
				}
			});
			var e = t("../react/pages/apps/marketplace/config/initialState.ts"),
				o = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var d = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(d).filter(function(m) {
						return Object.getOwnPropertyDescriptor(d, m).enumerable
					})), i.forEach(function(m) {
						u(r, m, d[m])
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
				var a = g(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var i = d.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let c = function(r) {
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
		"../react/pages/caching/tracking.tsx": function($, v, t) {
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
		"../react/pages/d1/routes.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/dns/dns-records/tracking.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/email/types.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/home/alerts/config.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
				jk: function() {
					return T
				},
				w8: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				s = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function l(E) {
				for (var I = 1; I < arguments.length; I++) {
					var y = arguments[I] != null ? Object(arguments[I]) : {},
						C = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(y).filter(function(M) {
						return Object.getOwnPropertyDescriptor(y, M).enumerable
					})), C.forEach(function(M) {
						g(E, M, y[M])
					})
				}
				return E
			}

			function g(E, I, y) {
				return I = c(I), I in E ? Object.defineProperty(E, I, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[I] = y, E
			}

			function c(E) {
				var I = p(E, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function p(E, I) {
				if (typeof E != "object" || E === null) return E;
				var y = E[Symbol.toPrimitive];
				if (y !== void 0) {
					var C = y.call(E, I || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(E)
			}
			const f = "Notifications",
				n = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				d = (0, e.BC)`${a}/destinations`,
				i = (0, e.BC)`${a}/create`,
				m = (0, e.BC)`${i}/${"alertType"}`,
				_ = (0, e.BC)`${a}/edit/${"alertId"}`,
				T = l({
					account: r,
					alerts: a,
					destinations: d,
					createAlert: i,
					createAlertWithSelection: m,
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
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				_j: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				s = (0, e.BC)`${o}/pagerduty/connect`,
				u = (0, e.BC)`${o}/pagerduty/register`,
				l = (0, e.BC)`${o}/pagerduty`,
				g = {
					pagerDutyConnect: s,
					pagerDutyRegister: u,
					pagerDutyList: l
				};
			var c = null
		},
		"../react/pages/home/alerts/tracking.ts": function($, v, t) {
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
		"../react/pages/home/configurations/dns-settings/tracking.ts": function($, v, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function($, v, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				AA: function() {
					return K
				},
				AN: function() {
					return ut
				},
				AY: function() {
					return ve
				},
				Ac: function() {
					return pe
				},
				Am: function() {
					return T
				},
				B2: function() {
					return B
				},
				BB: function() {
					return P
				},
				BF: function() {
					return Ne
				},
				BQ: function() {
					return Te
				},
				E8: function() {
					return V
				},
				Fl: function() {
					return we
				},
				Fu: function() {
					return D
				},
				Gc: function() {
					return pt
				},
				Hc: function() {
					return tt
				},
				IO: function() {
					return Ke
				},
				JK: function() {
					return Z
				},
				K: function() {
					return C
				},
				LI: function() {
					return ke
				},
				LX: function() {
					return xe
				},
				L_: function() {
					return nt
				},
				Ly: function() {
					return he
				},
				MR: function() {
					return N
				},
				Mj: function() {
					return Q
				},
				NB: function() {
					return Re
				},
				Oe: function() {
					return kt
				},
				Or: function() {
					return J
				},
				P5: function() {
					return Ie
				},
				PE: function() {
					return Le
				},
				Pd: function() {
					return Ye
				},
				Pk: function() {
					return Me
				},
				Pp: function() {
					return ot
				},
				Q1: function() {
					return b
				},
				Qr: function() {
					return $e
				},
				Qv: function() {
					return be
				},
				Rp: function() {
					return Ce
				},
				S7: function() {
					return at
				},
				Sh: function() {
					return Ue
				},
				Sl: function() {
					return Qe
				},
				TZ: function() {
					return w
				},
				Tg: function() {
					return Ee
				},
				Tp: function() {
					return Et
				},
				Uy: function() {
					return Ge
				},
				Vw: function() {
					return j
				},
				W3: function() {
					return Y
				},
				WR: function() {
					return Tt
				},
				WX: function() {
					return le
				},
				XF: function() {
					return yt
				},
				Xb: function() {
					return G
				},
				Zs: function() {
					return Ze
				},
				_f: function() {
					return Je
				},
				b4: function() {
					return ee
				},
				bc: function() {
					return Gt
				},
				c2: function() {
					return O
				},
				cE: function() {
					return ne
				},
				dh: function() {
					return dt
				},
				fE: function() {
					return ct
				},
				g7: function() {
					return fe
				},
				hO: function() {
					return _t
				},
				hV: function() {
					return rt
				},
				hk: function() {
					return A
				},
				hr: function() {
					return W
				},
				it: function() {
					return Xe
				},
				j3: function() {
					return We
				},
				jN: function() {
					return Fe
				},
				jo: function() {
					return Wt
				},
				k3: function() {
					return st
				},
				m8: function() {
					return se
				},
				nm: function() {
					return qe
				},
				oW: function() {
					return ae
				},
				pH: function() {
					return F
				},
				pi: function() {
					return ie
				},
				r4: function() {
					return Kt
				},
				rI: function() {
					return z
				},
				s7: function() {
					return Ct
				},
				sg: function() {
					return et
				},
				tB: function() {
					return m
				},
				tN: function() {
					return me
				},
				u_: function() {
					return zt
				},
				vV: function() {
					return lt
				},
				vc: function() {
					return Be
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				s = t("../../../../node_modules/moment/moment.js"),
				u = t.n(s),
				l = t("../../../common/util/types/src/api/domain.ts"),
				g = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				c = t("../react/utils/url.ts"),
				p = t("../react/pages/home/domain-registration/config.ts"),
				f = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function r(h) {
				for (var R = 1; R < arguments.length; R++) {
					var ue = arguments[R] != null ? Object(arguments[R]) : {},
						Oe = Object.keys(ue);
					typeof Object.getOwnPropertySymbols == "function" && Oe.push.apply(Oe, Object.getOwnPropertySymbols(ue).filter(function(je) {
						return Object.getOwnPropertyDescriptor(ue, je).enumerable
					})), Oe.forEach(function(je) {
						a(h, je, ue[je])
					})
				}
				return h
			}

			function a(h, R, ue) {
				return R = d(R), R in h ? Object.defineProperty(h, R, {
					value: ue,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[R] = ue, h
			}

			function d(h) {
				var R = i(h, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function i(h, R) {
				if (typeof h != "object" || h === null) return h;
				var ue = h[Symbol.toPrimitive];
				if (ue !== void 0) {
					var Oe = ue.call(h, R || "default");
					if (typeof Oe != "object") return Oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(h)
			}

			function m(h) {
				return h.filter(R => R.isSelected).reduce((R, {
					name: ue,
					fees: Oe,
					isZoneEntitlementPresent: je
				}) => je || !(0, e.isNumber)(Oe == null ? void 0 : Oe.transfer_fee) ? R : pe(ue) ? R + (Oe == null ? void 0 : Oe.transfer_fee) * 2 : R + (Oe == null ? void 0 : Oe.transfer_fee), 0)
			}

			function _(h) {
				return h.filter(R => R.registrar.toLowerCase() === "godaddy")
			}
			const T = "MMM D, YYYY";

			function A(h, R, ue, Oe) {
				var je, mt, Ot, bt, Ut, Dt, it, St, It, Pt, Mt, wt;
				const Ve = h[R.name],
					Vt = () => pe(R.name) ? u()(R.expires_at).add(2, "years").format(T) : u()(R.expires_at).add(1, "year").format(T);
				return r({
					name: R.name,
					zone: Ve,
					entitlements: ue,
					registryCheck: Oe,
					nameservers: R.name_servers,
					isAvailable: R.available,
					lastKnownStatus: R.last_known_status,
					authCode: R.auth_code,
					isEnterpriseZone: (Ve == null || (je = Ve.plan) === null || je === void 0 ? void 0 : je.legacy_id) === "enterprise",
					isActiveZone: (Ve == null ? void 0 : Ve.status) === "active",
					corResponsesPending: R.cor_responses_pending,
					isCorLocked: R.cor_locked,
					corLockedUntil: R.cor_locked_until ? u()(R.cor_locked_until).format(T) : null,
					isFullZone: (Ve == null ? void 0 : Ve.type) == n.xd.Full,
					isLocked: R.locked,
					registrar: R.current_registrar || p.JM,
					zoneId: Ve == null ? void 0 : Ve.id,
					currentExpiration: u()(R.expires_at).format(T),
					newExpiration: Vt(),
					lastEntitledAt: R.last_entitled_at ? new Date(R.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ue) && !!ue.find(jt => jt.id === p.g5 && jt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: R.transfer_in && y(R.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: R.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: R.transfer_in,
					transferOut: R.transfer_out,
					autoRenew: R.auto_renew === !0,
					lastTransferredAt: R.last_transferred_at,
					createdAt: R.created_at,
					paymentExpiresAt: u()(R.payment_expires_at).isValid() ? u()(R.payment_expires_at) : u()(R.expires_at).isValid() ? u()(R.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (mt = R.contacts) === null || mt === void 0 || (Ot = mt.administrator) === null || Ot === void 0 ? void 0 : Ot.id,
						[n.l2.Billing]: (bt = R.contacts) === null || bt === void 0 || (Ut = bt.billing) === null || Ut === void 0 ? void 0 : Ut.id,
						[n.l2.Registrant]: (Dt = R.contacts) === null || Dt === void 0 || (it = Dt.registrant) === null || it === void 0 ? void 0 : it.id,
						[n.l2.Technical]: (St = R.contacts) === null || St === void 0 || (It = St.technical) === null || It === void 0 ? void 0 : It.id
					},
					landing: R.landing,
					privacy: R.privacy,
					whois: R.whois,
					emailVerified: R.email_verified,
					materialChanges: M(R.material_changes),
					corChanges: R.cor_changes ? P(Object.assign(r({}, I), R.cor_changes)) : {},
					registryStatuses: R.registry_statuses ? R.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Pt = R.domain_protection_services) === null || Pt === void 0 ? void 0 : Pt.status
					},
					deletion: {
						isDeletable: R == null || (Mt = R.deletion) === null || Mt === void 0 ? void 0 : Mt.is_deletable
					},
					premiumType: R == null ? void 0 : R.premium_type,
					fees: R == null ? void 0 : R.fees
				}, R.domain_move && {
					domainMove: {
						ineligibilityReasons: (wt = R.domain_move) === null || wt === void 0 ? void 0 : wt.ineligibility_reasons
					}
				}, R.actionable_metadata && {
					actionableMetadata: E(R.actionable_metadata)
				}, R.policies && {
					policies: r({}, R.policies.suspension && {
						suspension: {
							parked: R.policies.suspension.parked,
							parkingReason: R.policies.suspension.parking_reason,
							paymentExpired: R.policies.suspension.payment_expired
						}
					})
				})
			}

			function E(h) {
				return h.map(R => ({
					accountContext: R.account_context,
					createdAt: R.created_at,
					expiresAt: R.expires_at,
					sentAt: R.sent_at,
					status: R.status,
					type: R.type
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

			function y(h) {
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

			function C(h) {
				let R = h.extensions;
				(R == null ? void 0 : R.application_purpose) && (R == null ? void 0 : R.nexus_category) && (h.extensions = {
					nexusCategory: R.nexus_category,
					applicationPurpose: R.application_purpose
				});
				let ue = r({}, typeof h.id == "string" ? {
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
				return Se(ue)
			}

			function M(h) {
				let R = [];
				const ue = {
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
				for (const Oe in h) {
					const je = h[Oe],
						mt = ue[je];
					R.push(mt)
				}
				return R
			}
			const L = h => {
				if (!h) return null;
				let R = h;
				return h.includes("C31") && (R = "C31"), h.includes("C32") && (R = "C32"), R
			};

			function P(h) {
				return r({}, typeof h.id == "string" ? {
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
						nexusCategory: L(h.extensions.nexus_category),
						applicationPurpose: h.extensions.application_purpose
					}
				} : {})
			}

			function S(h = {}) {
				const R = {
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
					transferConditions: r({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, h.transferConditions || {}),
					transferIn: r({
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

			function b(h = {}) {
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

			function D(h) {
				const R = p.Py.concat(p.ui).reduce((ue, Oe) => r({}, ue, {
					[Oe]: []
				}), {});
				return h.forEach(ue => {
					let Oe = U(ue.registrar);
					Oe in R || (Oe = p.ui), et(ue.name) && (Oe = "uk"), R[Oe].push(ue)
				}), Object.keys(R).sort((ue, Oe) => ue.localeCompare(Oe)).map(ue => ({
					registrar: ue,
					domains: R[ue]
				})).filter(ue => ue.domains.length > 0)
			}

			function U(h) {
				return h == null ? void 0 : h.toLowerCase().replace(/\s|,|\./g, "")
			}

			function j(h) {
				if (!h || !h.registrar) return "unknown";
				if (et(h.name)) return "uk";
				const R = U(h.registrar);
				return R in p.gM ? R : "unknown"
			}
			const H = [];

			function oe(h) {
				return H.some(R => h.endsWith("." + R))
			}

			function de(h) {
				return !h.isEnterpriseZone || !Array.isArray(h.entitlements) ? !1 : !!h.entitlements.find(({
					id: R,
					allocation: ue
				}) => R === p.g5 && ue.value === !0)
			}

			function ie(h) {
				var R;
				const ue = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let Oe = !1,
					je = null;
				return (R = h.registryStatuses) === null || R === void 0 || R.some(mt => {
					ue.includes(mt) && (je = mt, Oe = !0)
				}), [Oe, je]
			}

			function se(h, R = !1) {
				if (!h) return [!1, f.keys.cannot_transfer_default];
				if (h.zone.status !== "active") return [!1, f.keys.cannot_transfer_zone_not_active];
				if (!h.isFullZone && !de(h)) return [!1, f.keys.cannot_transfer_zone_not_eligible];
				if (h.registrar === "Cloudflare") return [!1, f.keys.cannot_transfer_domain_on_cf];
				if (h.isAvailable) return [!1, f.keys.cannot_transfer_domain_available];
				if (!h.transferConditions) return [!1, f.keys.cannot_transfer_domain_transfer_conditions];
				if (!R && Ge(h == null ? void 0 : h.premiumType)) return [!1, f.keys.cannot_transfer_domain_premium];
				if (F(h)) return [!1, f.keys.cannot_transfer_domain_transfer_in_progress];
				let ue;
				for (ue in h.transferConditions)
					if (ue !== "not_premium" && !h.transferConditions[ue]) return [!1, f.keys.cannot_transfer_domain_transfer_conditions];
				if (oe(h.name)) return [!1, f.keys.cannot_transfer_domain_tld_not_supported];
				const [Oe, je] = ie(h);
				return Oe && je ? [!1, f.keys.cannot_transfer_domain_registry_status[je]] : [!0, ""]
			}

			function F(h) {
				var R, ue;
				return !!h.transferIn && !((R = h.transferConditions) === null || R === void 0 ? void 0 : R.not_started) && !!(et(h.name) || ((ue = h.registryStatuses) === null || ue === void 0 ? void 0 : ue.includes(n.rj.PENDING_TRANSFER)))
			}

			function q(h) {
				return !!h.registrar && !!h.currentExpiration
			}

			function B(h, R = !1) {
				const [ue] = se(h, R);
				return q(h) ? _e(h) ? n.M5.InProgressOrOnCF : ue ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function O(h) {
				return h.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(h.transferIn.enter_auth_code) || !1
			}

			function N(h) {
				return h.registrar === "Cloudflare"
			}

			function z(h) {
				return !!(h == null ? void 0 : h.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function Q(h) {
				return !!(h == null ? void 0 : h.includes(n.rj.PENDING_TRANSFER))
			}
			const te = "Invalid date";

			function J(h) {
				return h.newExpiration === te ? "Unavailable" : h.newExpiration
			}

			function w(h) {
				return h.currentExpiration === te ? "Unavailable" : h.currentExpiration
			}

			function K(h) {
				return h.substring(h.indexOf("."))
			}

			function G(h = "") {
				return h.indexOf(".") !== -1 ? h.substring(0, h.indexOf(".")) : h
			}

			function W(h) {
				return h.map(R => R.name).map(R => K(R)).filter((R, ue, Oe) => !Oe.includes(R, ue + 1))
			}

			function ee(h) {
				if (p.no) return [!0, ""];
				if (!N(h)) return [!1, n.ok.NotOnCF];
				if (h.isCorLocked) return [!1, h.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (h.lastTransferredAt) {
					const R = u()(h.lastTransferredAt),
						ue = u().duration(u()().diff(R)).as("days"),
						Oe = et(h.name);
					if (ue < (Oe ? 1 : 60)) return [!1, Oe ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (h.createdAt) {
					const R = u()(h.createdAt);
					if (u().duration(u()().diff(R)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function le(h) {
				return !!(p.Bc || h.transferOut)
			}

			function _e(h) {
				return fe(h) || N(h)
			}

			function me(h) {
				return !fe(h) && N(h)
			}

			function fe(h) {
				return !h || h.lastKnownStatus === "pendingTransfer" || h.lastKnownStatus === "transferFOAPending" || !N(h) && h.transferConditions && !h.transferConditions.not_started || !1
			}

			function Le(h) {
				return !(oe(h.name) || h.transferConditions && !h.transferConditions.supported_tld)
			}

			function be(h) {
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

			function Be(h) {
				return u()(h.paymentExpiresAt).isBefore(u()())
			}

			function Fe(h) {
				return h.transferIn && h.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function Z(h) {
				const R = ["CU", "KP", "IR", "SY"];
				return h.filter(ue => !R.includes(ue.code))
			}

			function Ee(h) {
				if (!!h) return `${h.charAt(0).toUpperCase()}${h.slice(1)}${h.charAt(h.length-1)==="."?"":"."}`
			}

			function Se(h) {
				const R = {};
				for (const [ue, Oe] of Object.entries(h)) {
					if (Oe && typeof Oe == "string") {
						Object.assign(R, {
							[ue]: Oe.trim()
						});
						continue
					}
					Object.assign(R, {
						[ue]: Oe
					})
				}
				return R
			}

			function Ze(h) {
				return u()(h).add(40, "days")
			}

			function nt(h) {
				const R = h.paymentExpiresAt || h.payment_expires_at,
					ue = Ze(R);
				return u()().isBetween(R, ue)
			}

			function ct(h) {
				var R;
				return !(h == null ? void 0 : h.registryStatuses) || !Array.isArray(h == null ? void 0 : h.registryStatuses) && !(0, e.isString)(h == null ? void 0 : h.registryStatuses) ? !1 : (R = h.registryStatuses) === null || R === void 0 ? void 0 : R.includes(n.rj.REDEMPTION_PERIOD)
			}

			function dt(h) {
				var R;
				return !(h == null ? void 0 : h.registryStatuses) || !Array.isArray(h == null ? void 0 : h.registryStatuses) && !(0, e.isString)(h == null ? void 0 : h.registryStatuses) ? !1 : (R = h.registryStatuses) === null || R === void 0 ? void 0 : R.includes(n.rj.PENDING_DELETE)
			}

			function ot(h) {
				return [".us"].includes(h)
			}

			function Xe(h) {
				return [".us"].includes(h)
			}

			function _t(h) {
				switch (h) {
					case ".us":
						return ye();
					default:
						return []
				}
			}

			function Y(h) {
				switch (h) {
					case ".us":
						return ce;
					default:
						return {}
				}
			}
			const ce = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function ye() {
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

			function xe(h, R, ue) {
				return R[R.length - 1][ue] === h[ue]
			}

			function $e(h) {
				return Boolean(Object.keys(h).length === 0)
			}

			function Ne(h) {
				return u()().add(h, "year").format(T)
			}

			function Je({
				accountName: h
			}) {
				var R;
				const ue = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((R = h.toLowerCase().match(ue)) === null || R === void 0 ? void 0 : R[0]) || ""
			}

			function lt(h) {
				return !!h.match(g.default.email)
			}

			function Et(h) {
				return h === l.W7.PENDING_UPDATE
			}

			function pt(h) {
				return h ? Object.values(l.wR).filter(R => R !== l.wR.OFFBOARDED).includes(h) : !1
			}

			function Ct(h) {
				return h ? [l.wR.LOCKED, l.wR.ONBOARDED, l.wR.ONBOARDING_INITIATED, l.wR.PENDING_REGISTRY_LOCK, l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(h) : !1
			}

			function ht(h) {
				return h ? l.wR.UNLOCKED === h : !1
			}

			function vt(h) {
				return h ? l.wR.LOCKED === h : !1
			}

			function ke(h) {
				return h ? l.wR.PENDING_REGISTRY_LOCK === h : !1
			}

			function Te(h) {
				return h ? [l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(h) : !1
			}

			function Ke(h) {
				var R;
				return !1
			}

			function Tt(h) {
				var R;
				return !1
			}

			function ut(h) {
				var R;
				return !1
			}

			function yt(h) {
				var R;
				return !1
			}

			function V(h) {
				var R;
				return !1
			}

			function ae(h) {
				return Object.keys(l.wR).find(R => l.wR[R].toLowerCase() === h.toLowerCase())
			}

			function ve(h) {
				var R;
				const ue = (R = ae(h)) === null || R === void 0 ? void 0 : R.toLowerCase();
				return ue ? f.keys.protection_status[ue] : f.keys.protection_status.unknown
			}

			function Ae(h) {
				return ["com", "net"].includes(h)
			}

			function we(h) {
				const R = (0, c.pu)(h);
				return Ae(R) ? l.wR.PENDING_REGISTRY_LOCK : l.wR.LOCKED
			}

			function Ue(h) {
				return (0, c.pu)(h) === "co" ? 5 : 10
			}

			function qe(h, R) {
				return R ? 1 : (0, c.pu)(h) === "co" ? 5 : (0, c.pu)(h) === "org" ? 1 : 10
			}

			function et(h) {
				return (0, c.pu)(h) === "uk"
			}

			function ne(h) {
				return (0, c.pu)(h) === "us"
			}

			function pe(h) {
				return (0, c.pu)(h) === "ai"
			}

			function Ce(h) {
				return u()(h).isValid()
			}

			function he(h) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(h)
			}

			function Ie(h) {
				return !!(h == null ? void 0 : h.id)
			}

			function Re(h) {
				return h ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(h) : !1
			}

			function Ye(h) {
				return h ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(h) : !1
			}

			function rt(h) {
				var R;
				return (h == null ? void 0 : h.lastKnownStatus) ? (R = h.lastKnownStatus) === null || R === void 0 ? void 0 : R.includes("deletionIrredeemable") : !1
			}

			function Ge(h) {
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

			function tt(h) {
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

			function at(h) {
				var R, ue;
				return !!(((R = h.policies) === null || R === void 0 || (ue = R.suspension) === null || ue === void 0 ? void 0 : ue.parked) && h.policies.suspension.parkingReason)
			}

			function We(h) {
				var R, ue;
				return at(h) && ((R = h.policies) === null || R === void 0 || (ue = R.suspension) === null || ue === void 0 ? void 0 : ue.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function st(h) {
				var R, ue;
				return at(h) && ((R = h.policies) === null || R === void 0 || (ue = R.suspension) === null || ue === void 0 ? void 0 : ue.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function Qe(h) {
				var R;
				return !((R = h.domainMove) === null || R === void 0 ? void 0 : R.ineligibilityReasons.length)
			}

			function kt(h) {
				var R, ue;
				return !!((R = h.domainMove) === null || R === void 0 || (ue = R.ineligibilityReasons) === null || ue === void 0 ? void 0 : ue.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Bt(h) {
				var R;
				return (R = h.actionableMetadata) === null || R === void 0 ? void 0 : R.find(ue => ue.type === n.wg.DOMAIN_MOVE)
			}

			function Wt(h) {
				const R = Bt(h);
				return (R == null ? void 0 : R.status) === "pending" && R.accountContext === n._5.GAINING
			}

			function zt(h) {
				const R = Bt(h);
				return (R == null ? void 0 : R.status) === "pending" && R.accountContext === n._5.LOSING
			}

			function Kt(h) {
				const R = K(h.name);
				return !p.Pf.includes(R)
			}

			function Gt(h) {
				return p.QZ.includes(h)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Bc: function() {
					return p
				},
				HG: function() {
					return fe
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
					return g
				},
				QZ: function() {
					return i
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
					return me
				},
				no: function() {
					return f
				},
				uY: function() {
					return c
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
				g = Object.keys(l),
				c = !0,
				p = (0, o.J8)("registrar_mock_transfer_out") || !1,
				f = (0, o.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				r = "cf_registrar.enabled",
				a = "@abcABC1234567890123456",
				d = [".us"],
				i = [".travel", ".us", ".ong", ".ngo"],
				m = (0, e.BC)`/${"accountId"}`,
				_ = (0, e.BC)`${m}/add-site`,
				T = (0, e.BC)`${m}/registrar`,
				A = (0, e.BC)`${T}/domains`,
				E = (0, e.BC)`${T}/action-center`,
				I = (0, e.BC)`${T}/domain/${"zoneName"}`,
				y = (0, e.BC)`${I}/configuration`,
				C = (0, e.BC)`${I}/contacts`,
				M = (0, e.BC)`${T}/pricing`,
				L = (0, e.BC)`${T}/protection`,
				P = (0, e.BC)`${T}/register`,
				S = (0, e.BC)`${P}/checkout`,
				b = (0, e.BC)`${P}/checkout/${"token"}`,
				D = (0, e.BC)`${P}/success`,
				U = (0, e.BC)`${T}/tlds`,
				j = (0, e.BC)`${T}/transfer`,
				H = (0, e.BC)`${T}/transfer/${"zoneName"}`,
				oe = (0, e.BC)`/registrar/accounts/verify_email`,
				de = (0, e.BC)`/registrar/domains/verify_email`,
				ie = (0, e.BC)`/sign-up/registrar`,
				se = (0, e.BC)`${T}/verify-email`,
				F = (0, e.BC)`${m}/${"zoneName"}`,
				q = (0, e.BC)`${m}/domains`,
				B = (0, e.BC)`${q}/action-center`,
				O = (0, e.BC)`${q}/${"zoneName"}`,
				N = (0, e.BC)`${O}/configuration`,
				z = (0, e.BC)`${O}/contacts`,
				Q = (0, e.BC)`${q}/pricing`,
				te = (0, e.BC)`${q}/protection`,
				J = (0, e.BC)`${q}/register`,
				w = (0, e.BC)`${J}/checkout`,
				K = (0, e.BC)`${J}/checkout/${"token"}`,
				G = (0, e.BC)`${J}/success`,
				W = (0, e.BC)`${q}/tlds`,
				ee = (0, e.BC)`${q}/transfer`,
				le = (0, e.BC)`${q}/transfer/${"zoneName"}`,
				_e = (0, e.BC)`${q}/verify-email`,
				me = {
					addSite: _,
					domains: A,
					domainsActionCenter: E,
					domainsDomain: I,
					domainsDomainConfiguration: y,
					domainsDomainContacts: C,
					domainsPricing: M,
					domainsProtection: L,
					domainsRegister: P,
					domainsRegisterCheckout: S,
					domainsRegisterCheckoutToken: b,
					domainsRegisterSuccess: D,
					domainsTlds: U,
					domainsTransfer: j,
					domainsTransferZone: H,
					registrar: T,
					registrarAccountsVerifyEmail: oe,
					registrarDomainsVerifyEmail: de,
					signup: ie,
					verifyEmail: se,
					zone: F
				},
				fe = {
					LEGACY_domains: q,
					LEGACY_domainsActionCenter: B,
					LEGACY_domainsDomain: O,
					LEGACY_domainsDomainConfiguration: N,
					LEGACY_domainsDomainContacts: z,
					LEGACY_domainsPricing: Q,
					LEGACY_domainsProtection: te,
					LEGACY_domainsRegister: J,
					LEGACY_domainsRegisterCheckout: w,
					LEGACY_domainsRegisterCheckoutToken: K,
					LEGACY_domainsRegisterSuccess: G,
					LEGACY_domainsTlds: W,
					LEGACY_domainsTransfer: ee,
					LEGACY_domainsTransferZone: le,
					LEGACY_verifyEmail: _e
				},
				Le = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return g
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
				g = f => !1,
				c = f => g(f) && (0, e.oJ)((0, e.Zu)(f)),
				p = f => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: r
					} = f.registrar.registrations;
					return n && !(r.accepted_date || r.id || r.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function($, v, t) {
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
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(s),
				l = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function g(a) {
				for (var d = 1; d < arguments.length; d++) {
					var i = arguments[d] != null ? Object(arguments[d]) : {},
						m = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(i).filter(function(_) {
						return Object.getOwnPropertyDescriptor(i, _).enumerable
					})), m.forEach(function(_) {
						c(a, _, i[_])
					})
				}
				return a
			}

			function c(a, d, i) {
				return d = p(d), d in a ? Object.defineProperty(a, d, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[d] = i, a
			}

			function p(a) {
				var d = f(a, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function f(a, d) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var m = i.call(a, d || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(a)
			}
			let n = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a.DOMAIN_MOVE_START_FLOW = "Start domain move flow", a.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", a.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", a.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", a.DOMAIN_MOVE_SUBMIT = "Submit domain move", a.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", a.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", a.DOMAIN_MOVE_CANCEL = "Domain move cancel", a.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", a.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", a.ACTION_CENTER_NAVIGATE = "Navigate to actions center", a.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", a
			}({});

			function r(a, d, i) {
				if (!(d == null ? void 0 : d.name)) return null;
				u().sendEvent(a, g({
					domain: {
						name: d.name,
						premium: (0, l.Uy)(d == null ? void 0 : d.premiumType),
						paymentExpiresAt: o()(d == null ? void 0 : d.paymentExpiresAt).format()
					},
					category: "registrar"
				}, i))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				HX: function() {
					return g
				},
				Re: function() {
					return T
				},
				Rh: function() {
					return i
				},
				hX: function() {
					return a
				},
				s_: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react/react"),
				u = t.n(s),
				l = t("../react/utils/translator.tsx");
			let g = function(A) {
				return A.UNKNOWN = "unknown", A.WORKERS = "workers", A.ACCESS_APPS = "access_apps", A.ACCESS_IDP = "access_ipd", A
			}({});
			const c = [{
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

			function p(A) {
				const E = A;
				return {
					key: "com.cloudflare.edge.worker.script." + E.id,
					name: E.name,
					type: g.WORKERS
				}
			}

			function f(A) {
				const E = A;
				return {
					key: "com.cloudflare.edge.access.app." + E.id,
					name: E.name,
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

			function r(A) {
				const E = A,
					I = n[E.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + E.id,
					name: `${I||"Unknown Type"}${E.name?" - "+E.name:""}`,
					type: g.ACCESS_IDP
				}
			}
			const a = async (A, E, I) => E == g.WORKERS ? (await d(`/accounts/${A}/demoproducts?name`)).body.result.map(p) : E == g.ACCESS_APPS ? (await d(`/accounts/${A}/access/apps?name=${I}`)).body.result.map(f) : E == g.ACCESS_IDP ? (await d(`/accounts/${A}/access/identity_providers`)).body.result.map(r) : [];
			async function d(A) {
				try {
					return await (0, e.get)(A, {
						hideErrorAlert: !0
					})
				} catch (y) {
					var E, I;
					throw ((E = y.body) === null || E === void 0 ? void 0 : E.errors) ? y.body.errors[0].message : y.text ? y.text : ((I = y.response) === null || I === void 0 ? void 0 : I.statusText) ? y.response.statusText : "Unexpected error response"
				}
			}
			const i = async (A, E) => {
				const I = E.split("."),
					y = I.pop(),
					C = I.join(".");
				let M;
				switch (C) {
					case "com.cloudflare.edge.worker.script":
						return M = await d(`/accounts/${A}/demoproducts/${y}`), p(M.body.result);
					case "com.cloudflare.edge.access.identity-provider":
						return M = await d(`/accounts/${A}/access/identity_providers/${y}`), r(M.body.result);
					case "com.cloudflare.edge.access.app":
						return M = await d(`/accounts/${A}/access/apps/${y}`), f(M.body.result)
				}
			}, m = {
				loading: !0,
				isDisabled: !0
			}, _ = () => "production";

			function T(A) {
				const [E, I] = (0, s.useState)(!0), [y, C] = (0, s.useState)(c.filter(M => M.value === g.WORKERS ? _() === "staging" : !0).map(M => {
					const L = M.scopeKeyPrefix.startsWith("com.cloudflare.edge.access.");
					return {
						value: M.value,
						label: (0, l.ZP)(M.label_i18n),
						state: L ? m : {
							loading: !1,
							isDisabled: !1
						}
					}
				}));
				return (0, s.useEffect)(() => {
					(async () => {
						try {
							await a(A, g.ACCESS_APPS, ""), m.isDisabled = !1
						} catch (M) {
							M.startsWith("access.api.error.not_enabled") ? m.disableInfo = (0, l.ZP)("policy.granular_resources.type.access.not_enabled") : m.error = M
						}
						m.loading = !1, C([...y])
					})()
				}, []), (0, s.useEffect)(() => {
					const M = y.find(L => L.state.loading);
					I(!!M)
				}, [y]), {
					types: y,
					isLoading: E
				}
			}
		},
		"../react/pages/home/members/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Ey: function() {
					return c
				},
				F4: function() {
					return i
				},
				Fq: function() {
					return T
				},
				Go: function() {
					return r
				},
				Lc: function() {
					return y
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
					return I
				},
				Sz: function() {
					return E
				},
				Ti: function() {
					return C
				},
				Uw: function() {
					return _
				},
				Zl: function() {
					return m
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
				g = (0, e.BC)`${s}/add-policy/${"memberId"}`,
				c = "com.cloudflare.api.account",
				f = c + "." + "zone",
				n = f + ".",
				r = 100,
				a = 200,
				d = 5,
				i = 300,
				m = "INVITE_TOAST",
				_ = "00000000000000000000000000000000",
				T = "usergroups-ui",
				A = {
					account: o,
					members: s,
					inviteMembers: u,
					editMember: l,
					addPolicy: g
				},
				E = {
					allow: "allow",
					deny: "deny"
				},
				I = {
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
					effect: E.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				AX: function() {
					return E
				},
				Co: function() {
					return T
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
						b = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(S).filter(function(D) {
						return Object.getOwnPropertyDescriptor(S, D).enumerable
					})), b.forEach(function(D) {
						l(L, D, S[D])
					})
				}
				return L
			}

			function l(L, P, S) {
				return P = g(P), P in L ? Object.defineProperty(L, P, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[P] = S, L
			}

			function g(L) {
				var P = c(L, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function c(L, P) {
				if (typeof L != "object" || L === null) return L;
				var S = L[Symbol.toPrimitive];
				if (S !== void 0) {
					var b = S.call(L, P || "default");
					if (typeof b != "object") return b;
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
					var b;
					let D = [],
						U = [];
					const j = [],
						H = [];
					L.scopes.forEach(ie => {
						if (ie.mode === s.Sw.all) S ? D.push({
							id: S
						}) : D.push({
							scope: {
								key: `com.cloudflare.api.account.${P}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (ie.mode === s.Sw.domain_group) {
							const F = {
								id: ie.resourceGroupId
							};
							ie.effect === s.Sz.allow ? D.push(F) : U.push(F)
						} else if (ie.mode === s.Sw.zone) {
							const F = `${s.Rl}${ie.zoneId}`;
							ie.effect === s.Sz.allow ? j.push(F) : H.push(F)
						} else if (ie.mode === s.Sw.granular && ie.granularResourceKey) {
							var se;
							const F = ie.granularProduct,
								B = `${(se=o.s_.find(O=>O.value===F))===null||se===void 0?void 0:se.scopeSubsetOfPrefix}.${P}`;
							D.push({
								scope: {
									key: `${ie.granularResourceKey}`,
									subset_of: [{
										key: `${B}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), j.length && (D = D.concat(n(j))), H.length && (U = U.concat(n(H)));
					const oe = (b = L.permission_groups) === null || b === void 0 ? void 0 : b.map(ie => ({
							id: ie
						})),
						de = [];
					return de.push({
						access: s.Sz.allow,
						permission_groups: oe,
						resource_groups: D
					}), U.length && de.push({
						access: s.Sz.deny,
						permission_groups: oe,
						resource_groups: U
					}), de
				},
				a = L => L.map(P => {
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
				d = (L, P, S, b) => {
					const D = L.auto_accept;
					let U = [];
					return U = U.concat(r(L, P, S)), b && (U = U.concat(a(b))), {
						auto_accept: D,
						status: D ? "accepted" : "pending",
						policies: U
					}
				},
				i = L => {
					const P = L.split(".");
					return P[P.length - 1]
				},
				m = L => {
					var P, S;
					const b = L == null ? void 0 : L.access;
					let D = [],
						U = L == null || (P = L.resource_groups) === null || P === void 0 ? void 0 : P.map(j => {
							var H;
							const oe = _(j);
							if ((j == null || (H = j.meta) === null || H === void 0 ? void 0 : H.editable) === "false") return {
								effect: b,
								mode: s.Sw.all,
								accountId: i(j.id)
							};
							if (oe) {
								var de;
								return {
									effect: b,
									mode: s.Sw.granular,
									granularProduct: oe.value,
									granularResourceKey: j == null || (de = j.scope) === null || de === void 0 ? void 0 : de.key
								}
							} else if (!j.name) j.scope.key.startsWith(s.Rl) ? D.push({
								key: j.scope.key
							}) : D = D.concat(j.scope.objects);
							else return {
								effect: b,
								mode: s.Sw.domain_group,
								resourceGroupId: i(j.id)
							}
						}).filter(j => j);
					if ((S = D) === null || S === void 0 ? void 0 : S.length) {
						let j = D.map(H => {
							const oe = i(H.key);
							return {
								effect: b,
								mode: s.Sw.zone,
								zoneId: oe
							}
						});
						U = U.length ? j.concat(U) : j
					}
					return U
				},
				_ = L => {
					var P, S, b, D;
					const U = L == null || (P = L.scope) === null || P === void 0 ? void 0 : P.key.split(".").slice(0, -1).join("."),
						j = L == null || (S = L.scope) === null || S === void 0 || (b = S.subset_of) === null || b === void 0 || (D = b[0]) === null || D === void 0 ? void 0 : D.key.split(".").slice(0, -1).join(".");
					return o.s_.find(H => H.scopeKeyPrefix === U && H.scopeSubsetOfPrefix === j)
				},
				T = L => {
					if (!(L == null ? void 0 : L.length)) return [];
					const P = [];
					return L.forEach(S => {
						var b;
						(b = S.resource_groups) === null || b === void 0 || b.forEach(D => {
							var U, j;
							((U = D.scope) === null || U === void 0 || (j = U.key) === null || j === void 0 ? void 0 : j.startsWith(s.Rl)) && P.push(i(D.scope.key))
						})
					}), P
				},
				A = L => {
					if (!(L == null ? void 0 : L.length)) return [];
					const P = [];
					return L.forEach(S => {
						var b;
						(b = S.resource_groups) === null || b === void 0 || b.forEach(D => {
							var U, j;
							if (!((U = D.scope) === null || U === void 0 || (j = U.key) === null || j === void 0 ? void 0 : j.startsWith(s.Rl))) {
								var H;
								const de = (H = D.scope) === null || H === void 0 ? void 0 : H.objects;
								for (let ie = 0; ie < (de == null ? void 0 : de.length) && ie < s.r6; ie++) {
									var oe;
									((oe = de[ie].key) === null || oe === void 0 ? void 0 : oe.startsWith(s.Rl)) && P.push(i(de[ie].key))
								}
							}
						})
					}), P
				},
				E = L => {
					var P;
					if (!(L == null ? void 0 : L.length)) return null;
					const S = (P = L[0]) === null || P === void 0 ? void 0 : P.permission_groups.map(j => j.id);
					let b, D;
					L == null || L.forEach(j => {
						j.access === s.Sz.allow && (b = j), j.access === s.Sz.deny && (D = j)
					});
					let U = [];
					return b && (U = m(b)), D && (U = U.concat(m(D))), {
						permission_groups: S,
						scopes: U
					}
				},
				I = "permission-groups-",
				y = new Map,
				C = L => {
					if (!L) return [];
					const P = y.get(L);
					if (P) return P;
					const S = e.E.get(`${I}${L}`);
					return y.set(L, S), S
				},
				M = (L, P) => {
					const S = [];
					for (let b = 0; b < sessionStorage.length; b++) {
						const D = sessionStorage.key(b);
						(D == null ? void 0 : D.startsWith(I)) && S.push(D)
					}
					return S.length >= 5 && e.E.remove(S[0]), e.E.set(`${I}${L}`, P)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function($, v, t) {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function($, v, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				KO: function() {
					return c
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
						i = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(d).filter(function(m) {
						return Object.getOwnPropertyDescriptor(d, m).enumerable
					})), i.forEach(function(m) {
						u(r, m, d[m])
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
				var a = g(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var i = d.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let c = function(r) {
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
		"../react/pages/images/selectors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				$4: function() {
					return u
				},
				GH: function() {
					return a
				},
				JZ: function() {
					return i
				},
				aR: function() {
					return n
				},
				db: function() {
					return g
				},
				ib: function() {
					return m
				},
				lW: function() {
					return T
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
				g = "images",
				c = "unified_images_enabled",
				p = "c2pa_polish",
				f = "CloudflareImages",
				n = A => !!(0, o.BF)(A, "images.transformations_enabled"),
				r = A => Boolean((0, o.BF)(A, "images.enabled")),
				a = A => {
					const E = (0, o.BF)(A, "images.storage");
					return typeof E == "number" && E > 0
				},
				d = A => Boolean((0, o.BF)(A, "contract.customer_enabled")),
				i = A => Boolean((0, e.oI)(A, g, u)),
				m = A => Boolean((0, s.Le)(A, f, u)),
				_ = A => Boolean(getAccountFlipperFlag(A, f, c)),
				T = A => Boolean((0, s.Le)(A, f, p))
		},
		"../react/pages/magic/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				GF: function() {
					return d
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
					return T
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
					return i
				},
				jS: function() {
					return _
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
				l = E => [{
					value: "low",
					label: E("setting.low")
				}, {
					value: "mid",
					label: E("setting.medium")
				}, {
					value: "high",
					label: E("setting.high")
				}],
				g = E => [{
					value: "request",
					label: E("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: E("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				c = E => [{
					value: "unidirectional",
					label: E("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: E("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				p = "magic-transit",
				f = "magic-wan",
				n = "gre_tunnel",
				r = "ipsec_tunnel",
				a = "interconnect",
				d = 64,
				i = 1476,
				m = "mid",
				_ = "reply",
				T = E => [{
					value: void 0,
					label: E("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: E("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: E("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				A = E => [{
					value: "all",
					label: E("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: E("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: E("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/magic/overview/tracking.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/magic/packet-captures/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return i
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
					return C
				},
				K5: function() {
					return a
				},
				Ii: function() {
					return I
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
			const g = () => o().createElement(c, null, o().createElement("svg", {
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
				c = (0, s.createComponent)(({
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
				n = () => o().createElement(r, null, o().createElement(l.Ei, {
					alt: "airplane",
					src: u,
					width: "85%"
				})),
				r = (0, s.createComponent)(({
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
				i = () => o().createElement(m, null, o().createElement("svg", {
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
				m = (0, s.createComponent)(({
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
				_ = () => o().createElement(T, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				T = (0, s.createComponent)(({
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
				A = () => o().createElement(E, null, o().createElement("svg", {
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
				E = (0, s.createComponent)(({
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
				I = () => o().createElement(y, null, o().createElement("svg", {
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
				y = (0, s.createComponent)(({
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				A2: function() {
					return c
				},
				He: function() {
					return l
				},
				N$: function() {
					return g
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
				c = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
			const u = (l, g) => o().sendEvent(l, {
				template_name: g
			})
		},
		"../react/pages/pages/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return E
				},
				IK: function() {
					return l
				},
				L7: function() {
					return s
				},
				Li: function() {
					return m
				},
				Ni: function() {
					return M
				},
				OG: function() {
					return se
				},
				QF: function() {
					return de
				},
				QV: function() {
					return C
				},
				Sx: function() {
					return I
				},
				Ub: function() {
					return oe
				},
				X3: function() {
					return r
				},
				aP: function() {
					return c
				},
				bA: function() {
					return D
				},
				eO: function() {
					return a
				},
				fH: function() {
					return i
				},
				fQ: function() {
					return T
				},
				fR: function() {
					return e
				},
				ff: function() {
					return b
				},
				hE: function() {
					return H
				},
				iS: function() {
					return A
				},
				ku: function() {
					return U
				},
				nY: function() {
					return y
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
				c = "production",
				p = 2e3,
				f = 100,
				n = 350,
				r = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				d = 10,
				i = "_headers",
				m = "_redirects",
				_ = "_routes.json",
				T = "_worker.js",
				A = "do-a-barrel-roll",
				E = [i, m, _, T],
				I = 1024 * 1024 * 25,
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
				M = 1e5,
				L = 75e3,
				P = 2e5,
				S = 15e4,
				b = 3e3,
				D = 2250,
				U = "workers",
				j = "cloudflare_pages_build_caching",
				H = 2;
			let oe = function(F) {
				return F[F.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", F[F.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", F[F.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", F[F.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", F[F.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", F[F.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", F
			}({});
			const de = 1,
				ie = 2,
				se = 2
		},
		"../react/pages/pages/routes.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
				u = g => `${g.subdomain}.pages.dev`,
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
		"../react/pages/pipelines/tracking.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				KO: function() {
					return c
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
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), d.forEach(function(i) {
						u(n, i, a[i])
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
				var r = g(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
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
		"../react/pages/r2/routes.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Hv: function() {
					return s
				},
				Jg: function() {
					return g
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
					zones: (0, e.BC)`/zones`
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
					const f = u(p);
					return `https://${c}.${f}`
				},
				g = (c, p, f) => `${l(c,p)}/${f}`
		},
		"../react/pages/r2/selectors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts");
			const u = "r2_migrator_waitlist",
				l = "r2migrator",
				g = "r2",
				c = "r2_storage_migrator",
				p = "r2_storage_migrator",
				f = a => getAccountEntitlement(a, "r2.enabled"),
				n = a => Boolean((0, s.Le)(a, c, u)),
				r = a => Boolean(getAccountFlipperFlagsChanges(a, p, l))
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function s(d) {
				for (var i = 1; i < arguments.length; i++) {
					var m = arguments[i] != null ? Object(arguments[i]) : {},
						_ = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(m).filter(function(T) {
						return Object.getOwnPropertyDescriptor(m, T).enumerable
					})), _.forEach(function(T) {
						u(d, T, m[T])
					})
				}
				return d
			}

			function u(d, i, m) {
				return i = l(i), i in d ? Object.defineProperty(d, i, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[i] = m, d
			}

			function l(d) {
				var i = g(d, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function g(d, i) {
				if (typeof d != "object" || d === null) return d;
				var m = d[Symbol.toPrimitive];
				if (m !== void 0) {
					var _ = m.call(d, i || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(d)
			}
			const c = "blocked-content-table-tooltip",
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
					filters: Object.values(e.GH).reduce((d, i) => s({}, d, {
						[i]: i
					}), {})
				};
			let a = function(d) {
				return d.COPY_URL = "copy blocked content url", d.REQUEST_REVIEW = "request blocked content review", d.ADD_FILTER = "Add filter", d.REMOVE_FILTER = "Remove filter", d
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
			let e = function(g) {
					return g.Pending = "pending", g.Active = "active", g
				}({}),
				o = function(g) {
					return g.Active = "active", g.InReview = "in_review", g.Pending = "pending", g.Canceled = "canceled", g
				}({}),
				s = function(g) {
					return g.Domain = "domain", g.Status = "status", g.BlockType = "blockType", g
				}({}),
				u = function(g) {
					return g.EnforcementDate = "enforcementDate", g.BlockType = "blockType", g.Hostname = "hostname", g.Status = "status", g
				}({}),
				l = function(g) {
					return g.Removed = "removed", g.Misclassified = "misclassified", g
				}({})
		},
		"../react/pages/security-center/tracking.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
				return u.LOAD_THREAT_EVENTS = "load threat events", u.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", u.THREAT_EVENTS_FILTERS = "threat events filters applied", u.ABUSE_REPORT_BUTTON_CLICK = "clicked abuse report button", u.ABUSE_REPORT_SUBMIT_CLICK = "clicked submit abuse report button", u.ABUSE_REPORT_SUBMIT_FAILED = "abuse report submission failed", u.ABUSE_REPORT_SUBMIT_SUCCESS = "abuse report submitted successfully", u
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				AS: function() {
					return g
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
					return c
				}
			});
			var e = t("../react/pages/security/analytics/resources/labels.ts"),
				o = t("../react/common/constants/analytics/botScoreSrc.ts");
			const s = ["block", "challenge", "jschallenge", "managedChallenge"],
				u = ["miss", "expired", "bypass", "dynamic"],
				l = i => Object.fromEntries(Object.entries(i).map(([m, _]) => [_, m])),
				g = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				c = l(g),
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
			let r = function(i) {
				return i.SAMPLED = "sampled", i.RAW = "raw", i
			}({});
			const a = "security-analytics-log-explorer";
			let d = function(i) {
				return i.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', i.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', i.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', i.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', i.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', i
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Fj: function() {
					return p
				},
				kq: function() {
					return c
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
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), d.forEach(function(i) {
						u(n, i, a[i])
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
				var r = g(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
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
				f = ({
					name: n,
					category: r = "user journey",
					product: a = c.MAIN,
					productName: d,
					additionalData: i
				}) => {
					o().sendEvent(n, s({
						category: r,
						product: a,
						productName: d
					}, i || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/security/overview/resources/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/security/page-shield/resources/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				CP: function() {
					return S
				},
				FV: function() {
					return ie
				},
				KH: function() {
					return L
				},
				Ks: function() {
					return B
				},
				Lj: function() {
					return q
				},
				MC: function() {
					return r
				},
				Mq: function() {
					return M
				},
				OV: function() {
					return de
				},
				Oq: function() {
					return P
				},
				QM: function() {
					return y
				},
				SI: function() {
					return F
				},
				SJ: function() {
					return T
				},
				Sk: function() {
					return U
				},
				Ti: function() {
					return O
				},
				Uc: function() {
					return C
				},
				Uq: function() {
					return p
				},
				Uv: function() {
					return oe
				},
				V0: function() {
					return f
				},
				VT: function() {
					return i
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
					return b
				},
				sW: function() {
					return se
				},
				u8: function() {
					return d
				},
				v5: function() {
					return n
				},
				xg: function() {
					return H
				},
				yd: function() {
					return I
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				s = t("../react/pages/security/page-shield/resources/types.ts");

			function u(N) {
				for (var z = 1; z < arguments.length; z++) {
					var Q = arguments[z] != null ? Object(arguments[z]) : {},
						te = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(Q).filter(function(J) {
						return Object.getOwnPropertyDescriptor(Q, J).enumerable
					})), te.forEach(function(J) {
						l(N, J, Q[J])
					})
				}
				return N
			}

			function l(N, z, Q) {
				return z = g(z), z in N ? Object.defineProperty(N, z, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[z] = Q, N
			}

			function g(N) {
				var z = c(N, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function c(N, z) {
				if (typeof N != "object" || N === null) return N;
				var Q = N[Symbol.toPrimitive];
				if (Q !== void 0) {
					var te = Q.call(N, z || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(N)
			}
			const p = 50,
				f = 9,
				n = "copy script url page shield",
				r = "disable page shield",
				a = "click documentation link",
				d = "enable page shield",
				i = "filter search page shield",
				m = "filter search view all page shield",
				_ = "hover score tooltip page shield",
				T = "open alert modal page shield",
				A = "change pagination page shield",
				E = "close script modal page shield",
				I = "open script modal page shield",
				y = "select alert type page shield",
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
			let D = function(N) {
				return N.SECURITY_THREATS = "Security Threats", N.C2_BOTNET = "C2 & Botnet", N.CRYPTOMINING = "Cryptomining", N.MALWARE = "Malware", N.PHISHING = "Phishing", N.SPYWARE = "Spyware", N.DGA_DOMAINS = "DGA Domains", N.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", N
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
				H = {
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
				oe = {
					[s.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[s.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[s.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[s.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[s.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				de = {
					[s.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[s.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				ie = {
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
				se = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				F = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				q = {
					[s.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[s.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[s.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				B = {
					[s.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[s.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[s.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				O = {
					[s.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[s.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[s.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return I.Xe
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
					return I.k2
				},
				$g: function() {
					return I.$g
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
					return I.I1
				},
				Wq: function() {
					return I.Wq
				},
				jf: function() {
					return I.jf
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
					return I.R$
				},
				pG: function() {
					return _
				},
				Ar: function() {
					return m
				},
				Sk: function() {
					return u.Sk
				},
				gY: function() {
					return T
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
					return c
				},
				h3: function() {
					return A
				},
				xq: function() {
					return G
				},
				SQ: function() {
					return z
				},
				C0: function() {
					return Q
				},
				av: function() {
					return M
				},
				W3: function() {
					return y
				},
				WO: function() {
					return b
				},
				Dk: function() {
					return oe
				},
				we: function() {
					return F
				},
				Yt: function() {
					return O
				},
				ex: function() {
					return B
				},
				E1: function() {
					return q
				},
				e0: function() {
					return ie
				},
				UH: function() {
					return D
				},
				Qt: function() {
					return se
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
					return N
				},
				_4: function() {
					return te
				},
				qo: function() {
					return J
				},
				CB: function() {
					return g
				},
				ti: function() {
					return i
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
				g = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", W => (s().sendEvent(u.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), W)),
				c = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", W => (s().sendEvent(u.FV.VIEW_DETECTED_SCRIPTS, {
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
				i = (0, e.ZP)("pageShieldPolicy", "put", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", W => (s().sendEvent(u.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "update"
				}), W)),
				m = (0, e.ZP)("pageShieldPolicy", "delete", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", W => (s().sendEvent(u.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "delete"
				}), W)),
				_ = (0, e.ZP)("pageShieldPolicy", "post", "/zones/(zoneId)/page_shield/policies").on("success", W => (s().sendEvent(u.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "create"
				}), W)),
				T = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				A = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var E = t("../react/app/redux/normalizer.js"),
				I = t("../react/pages/security/page-shield/resources/types.ts");
			const y = W => W.pageShield.configuration,
				C = W => {
					var ee;
					return (ee = W.pageShield.configuration.data) === null || ee === void 0 ? void 0 : ee.enabled
				},
				M = W => {
					var ee;
					return (ee = y(W)) === null || ee === void 0 ? void 0 : ee.data
				},
				L = W => W.pageShield.scripts,
				P = W => W.pageShield.script,
				S = W => W.pageShield.connections,
				b = W => W.pageShield.connection,
				D = W => W.pageShield.policies,
				U = W => W.pageShield.policy,
				j = (0, E.P1)("pageShieldScripts", L),
				H = (0, E.P1)("pageShieldScript", P),
				oe = (0, E.P1)("pageShieldConnections", S),
				de = (0, E.P1)("pageShieldConnection", b),
				ie = (0, E.P1)("pageShieldPolicies", D),
				se = (0, E.P1)("pageShieldPolicy", U),
				F = (W, ee) => W === I.Wq.SCRIPT_MONITOR ? j(ee) || [] : oe(ee) || [],
				q = (W, ee) => W === I.Wq.SCRIPT_MONITOR ? L(ee) || [] : S(ee) || [],
				B = (W, ee) => W === I.Wq.SCRIPT_MONITOR ? H(ee) : de(ee),
				O = W => W.pageShield.domainIntel,
				N = W => W.pageShield.whoIsRecord,
				z = (W, ee, le) => {
					var _e;
					const me = Object.values(le).map(fe => ({
						key: fe,
						label: u.Uv[fe],
						score: W[fe]
					})).filter(fe => fe.score !== void 0 && fe.score <= ee);
					return ee === u.V0 && me.length === 0 && ((_e = W.js_integrity_score) !== null && _e !== void 0 ? _e : 100) <= ee && me.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), me
				},
				Q = (W, ee) => Object.values(ee).filter(le => W[le] === !0).map(le => u.OV[le]),
				te = W => W === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				J = (W, ee) => W[I.$g.MagecartScore] !== void 0 && W[I.$g.MagecartScore] <= ee || W[I.$g.MalwareScore] !== void 0 && W[I.$g.MalwareScore] <= ee || W[I.$g.CryptominingScore] !== void 0 && W[I.$g.CryptominingScore] <= ee || W.js_integrity_score !== void 0 && W.js_integrity_score <= ee,
				w = ["cdn.jsdelivr.net", "unpkg.com"],
				K = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				G = W => {
					if (W.includes("@latest")) {
						const le = W.split("@latest");
						if (le.length != 2) return;
						const _e = le[0].length,
							me = _e + "@latest".length;
						return [_e, me]
					}
					if (!!w.some(le => W.includes(le)))
						for (const le of K) {
							const _e = W.match(le);
							if (!_e) continue;
							const me = _e.index;
							if (me === 0) return null;
							const fe = me + _e[0].length;
							return [me, fe]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return c
				},
				k2: function() {
					return r
				}
			});

			function e(a) {
				for (var d = 1; d < arguments.length; d++) {
					var i = arguments[d] != null ? Object(arguments[d]) : {},
						m = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(i).filter(function(_) {
						return Object.getOwnPropertyDescriptor(i, _).enumerable
					})), m.forEach(function(_) {
						o(a, _, i[_])
					})
				}
				return a
			}

			function o(a, d, i) {
				return d = s(d), d in a ? Object.defineProperty(a, d, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[d] = i, a
			}

			function s(a) {
				var d = u(a, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(a, d) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var m = i.call(a, d || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(a)
			}
			let l = function(a) {
				return a.BASE_URI = "base-uri", a.CHILD = "child-src", a.CONNECT = "connect-src", a.DEFAULT = "default-src", a.FONT = "font-src", a.FORM_ACTION = "form-action", a.FRAME = "frame-src", a.FRAME_ANCESTORS = "frame-ancestors", a.IMAGE = "img-src", a.MANIFEST = "manifest-src", a.MEDIA = "media-src", a.OBJECT = "object-src", a.SCRIPT = "script-src", a.STYLE = "style-src", a.WORKER = "worker-src", a.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", a
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
			let c = function(a) {
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
		"../react/pages/security/resources/constants.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
				_C: function() {
					return d
				},
				_R: function() {
					return i
				},
				dY: function() {
					return _
				},
				fy: function() {
					return E
				},
				ji: function() {
					return a
				},
				pR: function() {
					return m
				},
				pV: function() {
					return I
				},
				rj: function() {
					return A
				},
				yR: function() {
					return y
				},
				zf: function() {
					return T
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				o = t("../../../common/util/types/src/api/phases/fields.tsx"),
				s = t("webpack/sharing/consume/default/react/react"),
				u = t.n(s),
				l = t("../react/utils/translator.tsx"),
				g = t("../react/pages/security/resources/types.ts"),
				c = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx");

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
				i = function(C) {
					return C.LEAKED_CREDENTIALS = "Leaked Credentials Checks", C
				}({});
			const m = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				_ = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: d.GEOGRAPHY_BASE,
					trackedEvent: m.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: d.IP_BASED,
					trackedEvent: m.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: d.USER_AGENT,
					trackedEvent: m.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: d.ZONE_LOCKDOWN,
					trackedEvent: m.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				T = {
					[g.X.UI_SECTION]: C => ({
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
				A = {
					[g.X.WAF_RULES]: {
						[i.LEAKED_CREDENTIALS]: {
							ruleName: i.LEAKED_CREDENTIALS,
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
						[i.LEAKED_CREDENTIALS]: {
							ruleName: i.LEAKED_CREDENTIALS,
							displayName: u().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: u().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let E = function(C) {
				return C.DISCOVERY = "discovery", C.SEQUENCES = "sequences", C.SCHEMA_VALIDATION = "schema-validation", C.SETTINGS = "settings", C.API_RULES = "api-rules", C.UPGRADE = "upgrade", C
			}({});
			const I = p({}, c.g, {
				[o.df.HttpRequestFirewallManaged]: p({}, c.g[o.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[o.df.HttpRequestFirewallCustom]: p({}, c.g[o.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[o.df.HttpRateLimit]: p({}, c.g[o.df.HttpRateLimit], {
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
			let y = function(C) {
				return C.APP_SEC_MVP = "app-security-navigation-mvp", C
			}({})
		},
		"../react/pages/security/resources/types.ts": function($, v, t) {
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
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				j: function() {
					return p
				},
				y: function() {
					return c
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
				var n = g(f, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function g(f, n) {
				if (typeof f != "object" || f === null) return f;
				var r = f[Symbol.toPrimitive];
				if (r !== void 0) {
					var a = r.call(f, n || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(f)
			}
			let c = function(f) {
				return f.CLICK_OPT_IN = "click opt in security navigation", f.CLICK_OPT_IN_BUTTON = "click opt in button", f.CLICK_OPT_OUT_BUTTON = "click opt out button", f.CLICK_NEXT_STEP = "click opt in next step", f.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", f.DISPLAY_MODAL = "display opt in modal", f.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", f
			}({});
			const p = (f, n = {}) => {
				o().sendEvent(f, s({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return i
				},
				_c: function() {
					return m
				},
				je: function() {
					return r
				},
				ll: function() {
					return g
				},
				qD: function() {
					return c
				},
				tw: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = async _ => {
				var T, A;
				const E = await (0, e.get)(`/zones/${_}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((T = E == null ? void 0 : E.body) === null || T === void 0 || (A = T.result) === null || A === void 0 ? void 0 : A.value) === "enabled"
			}, u = async (_, T) => (await (0, e.post)(`/zones/${_}/content-upload-scan/${T?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), T), l = async _ => {
				var T;
				const A = await (0, e.get)(`/zones/${_}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((T = A == null ? void 0 : A.body) === null || T === void 0 ? void 0 : T.result) || []
			}, g = async (_, T) => {
				var A;
				const E = await (0, e.post)(`/zones/${_}/content-upload-scan/payloads`, {
					body: [T]
				});
				return (A = E == null ? void 0 : E.body) === null || A === void 0 ? void 0 : A.result
			}, c = async (_, T) => (await (0, e.del)(`/zones/${_}/content-upload-scan/payloads/${T}`, {
				hideErrorAlert: !0
			}), T), p = async _ => {
				var T, A;
				const E = await (0, e.get)(`/zones/${_}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((T = E == null ? void 0 : E.body) === null || T === void 0 || (A = T.result) === null || A === void 0 ? void 0 : A.enabled)
			}, f = async (_, T) => {
				var A, E;
				const I = await (0, e.post)(`/zones/${_}/leaked-credential-checks`, {
					body: {
						enabled: T
					}
				});
				return !!((A = I == null ? void 0 : I.body) === null || A === void 0 || (E = A.result) === null || E === void 0 ? void 0 : E.enabled)
			}, n = async _ => {
				var T;
				const A = await (0, e.get)(`/zones/${_}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (T = A == null ? void 0 : A.body) === null || T === void 0 ? void 0 : T.result
			}, r = async (_, T) => {
				var A;
				const E = await (0, e.post)(`/zones/${_}/leaked-credential-checks/detections`, {
					body: T
				});
				return (A = E == null ? void 0 : E.body) === null || A === void 0 ? void 0 : A.result
			}, a = async (_, T) => (await (0, e.del)(`/zones/${_}/leaked-credential-checks/detections/${T}`, {
				hideErrorAlert: !0
			}), T), d = async (_, T) => {
				await (0, e.put)(`/zones/${_}/security-center/securitytxt`, {
					body: T
				})
			}, i = async _ => {
				await (0, e.del)(`/zones/${_}/security-center/securitytxt`)
			}, m = async _ => (await (0, e.get)(`/zones/${_}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Xu: function() {
					return i
				},
				Io: function() {
					return M
				},
				FQ: function() {
					return se
				},
				vU: function() {
					return d
				},
				M: function() {
					return _
				},
				d7: function() {
					return m
				},
				Oz: function() {
					return C
				},
				Np: function() {
					return oe
				},
				WR: function() {
					return f
				},
				bE: function() {
					return de
				},
				u_: function() {
					return a
				},
				pf: function() {
					return L
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				o = t("../react/pages/security/settings/hooks/api.ts"),
				s = t("webpack/sharing/consume/default/react/react"),
				u = t("webpack/sharing/consume/default/react-redux/react-redux"),
				l = t("../react/pages/security/settings/resources/index.ts"),
				g = t("../react/common/hooks/useZoneEntitlement.ts"),
				c = t("../../../../node_modules/yup/es/index.js"),
				p = t("../react/utils/translator.tsx");
			const f = () => (0, u.useSelector)(l.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				r = () => !!useZoneEntitlement(n),
				a = () => {
					const {
						t: F
					} = (0, p.QT)(), q = c.Z_().required(F("common.field_is_required")).max(24, F("labels.apply.form.name.error.max_characters")).matches(l.DG, F("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", F("labels.apply.form.name.error.cf_forbidden"), N => !l.aW.test(N)), B = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: N => c.Ry().shape({
							[l.n5.NAME]: N ? c.Z_() : q,
							[l.n5.DESCRIPTION]: N ? c.Z_().optional() : c.Z_().max(150, F("labels.apply.form.description.error.max_characters"))
						})
					}, O = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[l.N2.NAME]: "",
							[l.N2.SOURCE]: l.W3,
							[l.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => c.Ry().shape({
							[l.N2.NEW_LABEL_NAME]: q
						})
					};
					return {
						LABELS_APPLY_FORM: B,
						EDIT_LABELS_MODAL_FORM: O
					}
				},
				d = ({
					modalHeaderFixedHeight: F = 62,
					modalDefaultPaddings: q = 16
				} = {}) => {
					const B = (0, s.useRef)(null),
						O = (0, s.useRef)(null),
						[N, z] = (0, s.useState)(0),
						[Q, te] = (0, s.useState)(0),
						J = `calc(100vh - ${N}px - ${Q}px - ${q}px)`,
						[w, K] = (0, s.useState)("");
					return (0, s.useEffect)(() => {
						const G = () => {
							var W, ee, le, _e;
							const me = B == null || (W = B.current) === null || W === void 0 ? void 0 : W.offsetHeight,
								fe = O == null || (ee = O.current) === null || ee === void 0 ? void 0 : ee.offsetHeight,
								Le = ((le = me) !== null && le !== void 0 ? le : 0) + F,
								be = (_e = fe) !== null && _e !== void 0 ? _e : 0;
							z(Le), te(be)
						};
						return G(), window.addEventListener("resize", G), () => window.removeEventListener("resize", G)
					}, []), {
						searchTerm: w,
						setSearchTerm: K,
						scrollableSectionMaxHeight: J,
						topMenuRef: B,
						bottomMenuRef: O
					}
				},
				i = F => {
					const q = f(),
						B = (0, e.useQueryClient)(),
						O = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${F}`,
							queryFn: () => (0, o.JP)(F),
							enabled: q
						}),
						N = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${F}`,
							queryFn: () => (0, o.BT)(F),
							enabled: q && !!(O == null ? void 0 : O.data)
						}),
						z = (0, e.useMutation)({
							mutationFn: async ({
								enabled: J
							}) => await (0, o.X2)(F, J),
							onSuccess: J => {
								B.setQueryData([`content-scanning-enabled-${F}`], J)
							}
						}),
						Q = (0, e.useMutation)({
							mutationFn: J => (0, o.ll)(F, J),
							onSuccess: J => {
								B.setQueryData([`content-scanning-detections-${F}`], J)
							}
						}),
						te = (0, e.useMutation)({
							mutationFn: J => (0, o.qD)(F, J),
							onSuccess: J => {
								var w;
								const K = (w = B.getQueryData(`content-scanning-detections-${F}`)) !== null && w !== void 0 ? w : [];
								B.setQueryData([`content-scanning-detections-${F}`], K.filter(({
									id: G
								}) => G !== J))
							}
						});
					return {
						entitled: q,
						loading: O.isLoading || N.isLoading,
						error: O.isError || N.isError,
						enabled: {
							data: O.data,
							isToggling: z.isLoading,
							toggleEnabled: async J => z.mutateAsync({
								enabled: J
							})
						},
						detections: {
							data: N.data,
							add: Q.mutateAsync,
							delete: te.mutateAsync,
							loading: Q.isLoading || te.isLoading
						}
					}
				},
				m = () => {
					const F = (0, u.useSelector)(l.cN),
						q = (0, u.useSelector)(l.bH),
						B = (0, u.useSelector)(l.P3),
						O = (0, u.useSelector)(l.Ri);
					return {
						hasEditPermission: F,
						isEnabled: B && (q.hasSimilarLeaked || q.hasUsernameAndPasswordLeaked || O)
					}
				},
				_ = F => {
					const q = m(),
						B = (0, e.useQueryClient)(),
						O = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${F}`,
							queryFn: () => (0, o.Ai)(F),
							enabled: !!q.isEnabled,
							retry: 1
						}),
						N = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${F}`,
							queryFn: () => (0, o.tw)(F),
							enabled: !!q.isEnabled && !!(O == null ? void 0 : O.data)
						}),
						z = (0, e.useMutation)({
							mutationFn: ({
								enabled: J
							}) => (0, o.O_)(F, J),
							onSuccess: J => {
								B.setQueryData([`leaked-credentials-enabled-${F}`], J)
							}
						}),
						Q = (0, e.useMutation)({
							mutationFn: async J => await (0, o.je)(F, J),
							onSuccess: J => {
								var w;
								const K = (w = B.getQueryData(`leaked-credentials-detections-${F}`)) !== null && w !== void 0 ? w : [];
								B.setQueryData([`leaked-credentials-detections-${F}`], [...K, J])
							}
						}),
						te = (0, e.useMutation)({
							mutationFn: J => (0, o.$y)(F, J),
							onSuccess: J => {
								var w;
								const K = (w = B.getQueryData(`leaked-credentials-detections-${F}`)) !== null && w !== void 0 ? w : [];
								B.setQueryData([`leaked-credentials-detections-${F}`], K.filter(({
									id: G
								}) => G !== J))
							}
						});
					return {
						entitled: q.isEnabled,
						hasEditPermissions: q.hasEditPermission,
						loading: O.isLoading || N.isLoading,
						error: O.isError || O.isError,
						enabled: {
							data: O.data,
							isToggling: z.isLoading,
							toggleEnabled: async J => z.mutateAsync({
								enabled: J
							})
						},
						detections: {
							data: N.data,
							add: Q.mutateAsync,
							delete: te.mutateAsync,
							loading: Q.isLoading || te.isLoading
						}
					}
				};
			var T = t("../react/common/selectors/zoneSelectors.ts"),
				A = t("../react/common/utils/useQueryCache.ts"),
				E = t("../react/app/redux/index.ts");
			const I = "security-txt",
				y = {
					securityTxt: ({
						zoneId: F
					}) => [I, F]
				},
				C = F => (0, e.useQuery)({
					queryKey: y.securityTxt({
						zoneId: F
					}),
					queryFn: () => (0, o._c)(F),
					select: q => q.result
				}),
				M = () => {
					const F = (0, E.p4)(T.Cu),
						{
							invalidate: q
						} = (0, A.o)(y.securityTxt({
							zoneId: F
						}));
					return (0, e.useMutation)({
						mutationFn: () => (0, o.YO)(F),
						onSuccess: async () => {
							await q(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				L = F => {
					const {
						invalidate: q
					} = (0, A.o)(y.securityTxt({
						zoneId: F
					}));
					return (0, e.useMutation)({
						mutationFn: B => (0, o.F3)(F, B),
						onSuccess: async () => {
							await q(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var P = t("../../../../node_modules/lodash/isEqual.js"),
				S = t.n(P),
				b = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function D(F) {
				for (var q = 1; q < arguments.length; q++) {
					var B = arguments[q] != null ? Object(arguments[q]) : {},
						O = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(B).filter(function(N) {
						return Object.getOwnPropertyDescriptor(B, N).enumerable
					})), O.forEach(function(N) {
						U(F, N, B[N])
					})
				}
				return F
			}

			function U(F, q, B) {
				return q = j(q), q in F ? Object.defineProperty(F, q, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[q] = B, F
			}

			function j(F) {
				var q = H(F, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function H(F, q) {
				if (typeof F != "object" || F === null) return F;
				var B = F[Symbol.toPrimitive];
				if (B !== void 0) {
					var O = B.call(F, q || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(F)
			}
			const oe = F => {
					const {
						queryKey: q,
						zoneId: B
					} = (0, b.hL)(F), {
						isLoading: O,
						isError: N,
						isSuccess: z,
						data: Q,
						refetch: te,
						isRefetching: J
					} = (0, e.useQuery)({
						queryKey: q,
						queryFn: () => b.Mi.getLabels(D({
							zoneId: B
						}, F)),
						onSuccess: () => {
							var w;
							const K = F == null || (w = F.filters) === null || w === void 0 ? void 0 : w.source;
							(K === l.LABEL_SOURCES.MANAGED || K === l.LABEL_SOURCES.USER) && (0, l.Tf)({
								name: l.QJ.FILTER_USER_MANAGED_LABELS,
								product: l.Iv.SECURITY_SETTINGS,
								pageName: l.R.LABELS_LIST,
								type: K
							})
						}
					});
					return {
						data: Q == null ? void 0 : Q.result,
						errors: Q == null ? void 0 : Q.errors,
						paginationData: Q == null ? void 0 : Q.result_info,
						isLoading: O,
						isError: N,
						isSuccess: z,
						refetch: te,
						isRefetching: J
					}
				},
				de = ({
					labels: F,
					preselectedLabels: q
				}) => {
					const {
						USER: B,
						MANAGED: O
					} = l.LABEL_SOURCES, [N, z] = (0, s.useState)({
						[B]: [],
						[O]: []
					}), [Q, te] = (0, s.useState)(new Set), J = Q.size > 0, [w, K] = (0, s.useState)(!1), G = _e => {
						te(me => {
							const fe = new Set(me);
							return fe.has(_e.name) ? fe.delete(_e.name) : fe.add(_e.name), fe
						})
					}, W = _e => Q.has(_e.name), ee = (_e, me) => {
						const fe = W(_e) ? 1 : 0;
						return (W(me) ? 1 : 0) - fe
					}, le = _e => {
						z(me => ({
							[B]: [..._e ? _e[B] : me[B]].sort(ee),
							[O]: [..._e ? _e[O] : me[O]].sort(ee)
						}))
					};
					return (0, s.useEffect)(() => {
						if (F && !w) {
							if (q) {
								const _e = new Set;
								F.forEach(me => {
									q.some(fe => S()(fe, me)) && _e.add(me.name)
								}), te(_e)
							}
							K(!0)
						}
					}, [F, q, w]), (0, s.useEffect)(() => {
						if (F && w) {
							const _e = F.reduce((fe, Le) => (Le.source === B ? fe[B].push(Le) : Le.source === O && fe[O].push(Le), fe), {
									[B]: [],
									[O]: []
								}),
								me = {
									[B]: _e[B].sort(ee),
									[O]: _e[O].sort(ee)
								};
							z(me)
						}
					}, [B, O, F, w]), {
						userAndManagedLabels: N,
						setUserAndManagedLabels: z,
						toggleSelectedLabel: G,
						isLabelSelected: W,
						sortLabelsBySelectedStatus: le,
						hasLabelsSelected: J
					}
				};
			var ie = t("../react/pages/security/settings/resources/selectors.ts");
			const se = (F = "") => {
				const q = (0, E.p4)(ie.Xs),
					B = q && (F == null ? void 0 : F.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: q,
					hasDeprecatedParameter: B
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
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
				o = t("../react/app/components/Forbidden.jsx"),
				s = t("webpack/sharing/consume/default/react/react"),
				u = t.n(s),
				l = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(g),
				p = t("../react/pages/security/settings/hooks/index.ts"),
				f = t("../react/pages/security/settings/resources/index.ts");
			const n = u().lazy(() => Promise.all([t.e(39074), t.e(16691), t.e(30285), t.e(12174), t.e(57062), t.e(45810), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(63779), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(68665), t.e(87940), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				r = () => {
					const {
						t: a
					} = (0, g.useI18n)(), d = (0, e.xk)("waf");
					return u().createElement(l.T3, {
						parentPageLabel: a("navigation.zone.security"),
						title: a("navigation.zone.security.settings"),
						type: "narrow"
					}, d.read ? u().createElement(n, null) : u().createElement(o.Z, null))
				};
			v.ZP = r
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Mi: function() {
					return E
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
				g = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
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
			var f = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(y, C) {
				if (y == null) return {};
				var M = d(y, C),
					L, P;
				if (Object.getOwnPropertySymbols) {
					var S = Object.getOwnPropertySymbols(y);
					for (P = 0; P < S.length; P++) L = S[P], !(C.indexOf(L) >= 0) && (!Object.prototype.propertyIsEnumerable.call(y, L) || (M[L] = y[L]))
				}
				return M
			}

			function d(y, C) {
				if (y == null) return {};
				var M = {},
					L = Object.keys(y),
					P, S;
				for (S = 0; S < L.length; S++) P = L[S], !(C.indexOf(P) >= 0) && (M[P] = y[P]);
				return M
			}

			function i(y) {
				for (var C = 1; C < arguments.length; C++) {
					var M = arguments[C] != null ? Object(arguments[C]) : {},
						L = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(M).filter(function(P) {
						return Object.getOwnPropertyDescriptor(M, P).enumerable
					})), L.forEach(function(P) {
						m(y, P, M[P])
					})
				}
				return y
			}

			function m(y, C, M) {
				return C = _(C), C in y ? Object.defineProperty(y, C, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[C] = M, y
			}

			function _(y) {
				var C = T(y, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function T(y, C) {
				if (typeof y != "object" || y === null) return y;
				var M = y[Symbol.toPrimitive];
				if (M !== void 0) {
					var L = M.call(y, C || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(y)
			}
			const A = y => {
					const C = (0, e.p4)(o.Cu),
						M = (0, l.F)(),
						L = I.labels(i({
							accountId: M,
							zoneId: C
						}, y ? i({}, y) : {})),
						P = (0, s.o)(L);
					return i({
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
				E = {
					getLabels: async y => {
						var C, M, L, P;
						let {
							zoneId: S,
							hideErrorAlert: b = !0
						} = y, D = a(y, ["zoneId", "hideErrorAlert"]);
						return (await g.get(p.labels.toUrl({
							zoneId: S
						}), {
							parameters: {
								page: D == null ? void 0 : D.page,
								per_page: D == null ? void 0 : D.per_page,
								with_mapped_resource_counts: D == null ? void 0 : D.with_mapped_resource_counts,
								filter: D == null || (C = D.filters) === null || C === void 0 ? void 0 : C.search,
								source: (0, n.sQ)(D == null || (M = D.filters) === null || M === void 0 ? void 0 : M.source),
								order: D == null || (L = D.sort) === null || L === void 0 ? void 0 : L.id,
								direction: (D == null ? void 0 : D.sort) ? (D == null || (P = D.sort) === null || P === void 0 ? void 0 : P.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: b
						})).body
					},
					getLabel: async y => {
						let {
							zoneId: C,
							labelName: M,
							hideErrorAlert: L = !0
						} = y, P = a(y, ["zoneId", "labelName", "hideErrorAlert"]);
						const S = (0, n.mm)(M) ? p.managedLabel.toUrl({
							zoneId: C,
							labelName: M
						}) : p.userLabel.toUrl({
							zoneId: C,
							labelName: M
						});
						return (await g.get(S, {
							parameters: {
								with_mapped_resource_counts: P == null ? void 0 : P.with_mapped_resource_counts
							},
							hideErrorAlert: L
						})).body
					},
					editLabel: async ({
						zoneId: y,
						label: C,
						replace: M
					}) => {
						const {
							name: L
						} = C, P = a(C, ["name"]);
						return (await (M ? g.put : g.patch)(p.userLabel.toUrl({
							zoneId: y,
							labelName: C.name
						}), {
							body: P
						})).body
					},
					deleteLabel: async ({
						zoneId: y,
						labelName: C
					}) => (await g.del(p.userLabel.toUrl({
						zoneId: y,
						labelName: C
					}))).body,
					createLabel: async y => {
						let {
							zoneId: C
						} = y, M = a(y, ["zoneId"]);
						const {
							product: L
						} = M, P = a(M, ["product"]);
						return (await g.post(p.userLabels.toUrl({
							zoneId: C
						}), {
							body: [P]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: y,
						user: C,
						managed: M,
						operationIds: L,
						replace: P
					}) => (await (P ? g.put : g.post)(p.operationsLinkedToLabels.toUrl({
						zoneId: y
					}), {
						body: i({}, C ? {
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
						zoneId: y,
						labelName: C,
						operationIds: M
					}) => {
						const L = (0, n.mm)(C) ? p.managedLabelOperations.toUrl({
							zoneId: y,
							labelName: C
						}) : p.userLabelOperations.toUrl({
							zoneId: y,
							labelName: C
						});
						return (await g.put(L, {
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
				I = {
					labels: y => {
						let {
							accountId: C,
							zoneId: M
						} = y, L = a(y, ["accountId", "zoneId"]);
						return [u.IQ.LABELS, C, M, ...(0, f.isEmpty)(L) ? [] : [L]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				DG: function() {
					return _
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return c
				},
				GE: function() {
					return M
				},
				IQ: function() {
					return u
				},
				KV: function() {
					return g
				},
				LABELS_LIST_TOASTS: function() {
					return d
				},
				LABEL_SOURCES: function() {
					return l
				},
				QH: function() {
					return i
				},
				V: function() {
					return I
				},
				W3: function() {
					return s
				},
				_8: function() {
					return a
				},
				_c: function() {
					return y
				},
				aW: function() {
					return T
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
					return m
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
				g = function(S) {
					return S.SOURCE = "source", S
				}({}),
				c = function(S) {
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
						[g.SOURCE]: s
					}
				},
				filters: g,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let d = function(S) {
				return S.CREATED_LABEL = "createdLabel", S.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", S.DELETED_LABEL = "deletedLabel", S.APPLIED_LABEL = "appliedLabel", S.EDITED_LABEL = "editedLabel", S.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", S
			}({});
			const i = "650px",
				m = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				_ = /^[A-Za-z0-9-]+$/,
				T = /^cf-/;
			let A = function(S) {
				return S.NAME = "name", S.DESCRIPTION = "description", S
			}({});
			const E = "all";
			let I = function(S) {
				return S.METHOD = "method", S.HOSTNAME = "hostname", S
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
						[I.METHOD]: E,
						[I.HOSTNAME]: E
					}
				},
				filters: I
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
		"../react/pages/security/settings/resources/index.ts": function($, v, t) {
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
					return r
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
					return i
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
					return T
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

			function g(E) {
				for (var I = 1; I < arguments.length; I++) {
					var y = arguments[I] != null ? Object(arguments[I]) : {},
						C = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(y).filter(function(M) {
						return Object.getOwnPropertyDescriptor(y, M).enumerable
					})), C.forEach(function(M) {
						c(E, M, y[M])
					})
				}
				return E
			}

			function c(E, I, y) {
				return I = p(I), I in E ? Object.defineProperty(E, I, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[I] = y, E
			}

			function p(E) {
				var I = f(E, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function f(E, I) {
				if (typeof E != "object" || E === null) return E;
				var y = E[Symbol.toPrimitive];
				if (y !== void 0) {
					var C = y.call(E, I || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(E)
			}
			let n = function(E) {
					return E.LABELS_LIST = "Labels List page", E.LABELS_APPLY = "Labels Apply page", E.LABELS_SIDE_MODAL = "Labels Side Modal", E.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", E.LABELS_OPERATION_DETAILS = "Operation Details page", E
				}({}),
				r = function(E) {
					return E.API_SHIELD = "API Shield", E.SECURITY_SETTINGS = "Security Settings", E
				}({}),
				a = function(E) {
					return E.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", E.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", E.OPERATIONS_TABLE_ROW = "Operations table row", E.OPERATION_DETAILS_PAGE = "Operation details page", E
				}({}),
				d = function(E) {
					return E.UPSERT = "upsert", E.OVERWRITE = "overwrite", E
				}({}),
				i = function(E) {
					return E.SINGLE = "single", E.MULTIPLE = "multiple", E
				}({}),
				m = function(E) {
					return E.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", E.DELETE_LABEL = "delete a user label in the settings page", E.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", E.CREATE_LABEL_CLICKED = "click create label button in the settings page", E.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", E.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", E.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", E.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", E.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", E.OPEN_LABELS_SIDE_MODAL = "open labels side modal", E.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", E.CREATE_NEW_LABEL = "create a new label", E
				}({});
			const _ = ({
					name: E,
					product: I,
					category: y = "user journey",
					pageName: C,
					from: M,
					write_strategy: L,
					type: P,
					target: S
				}) => {
					l().sendEvent(E, g({
						category: y,
						pageName: C,
						product: I
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
				T = () => {
					var E;
					return (E = Object.values(m)) === null || E === void 0 ? void 0 : E.flat()
				};
			var A = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return c
				},
				ui: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				o = t("../react/utils/url.ts"),
				s = t("../react/common/selectors/entitlementsSelectors.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const g = a => {
					const d = (0, e.RO)(a),
						i = !!(0, s.rV)(a, "rulesets.file_upload_scan_allowed"),
						m = !!(0, s.BF)(a, "rulesets.file_upload_scan_allowed");
					return (0, o.el)(window.location.pathname) ? d && (i || m) : m
				},
				c = a => Number((0, s.rV)(a, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
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
		"../react/pages/security/settings/resources/types.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				T: function() {
					return o
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let o = function(s) {
				return s.ENABLED = "enabled", s.CONTACT = "contact", s.EXPIRES = "expires", s.ENCRYPTION = "encryption", s.ACKNOWLEDGMENTS = "acknowledgments", s.CANONICAL = "canonical", s.HIRING = "hiring", s.POLICY = "policy", s.PREFERRED_LANGUAGES = "preferred_languages", s
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				$E: function() {
					return a
				},
				Mb: function() {
					return d
				},
				N2: function() {
					return I
				},
				Q4: function() {
					return m
				},
				QF: function() {
					return r
				},
				Vy: function() {
					return T
				},
				Wv: function() {
					return i
				},
				mm: function() {
					return E
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
				g = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function c(y) {
				for (var C = 1; C < arguments.length; C++) {
					var M = arguments[C] != null ? Object(arguments[C]) : {},
						L = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(M).filter(function(P) {
						return Object.getOwnPropertyDescriptor(M, P).enumerable
					})), L.forEach(function(P) {
						p(y, P, M[P])
					})
				}
				return y
			}

			function p(y, C, M) {
				return C = f(C), C in y ? Object.defineProperty(y, C, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[C] = M, y
			}

			function f(y) {
				var C = n(y, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function n(y, C) {
				if (typeof y != "object" || y === null) return y;
				var M = y[Symbol.toPrimitive];
				if (M !== void 0) {
					var L = M.call(y, C || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(y)
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
				d = y => e.Ry({
					[l.T.CONTACT]: e.IX().of(e.Z_().required(y("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, y("security_txt.fields.contact.format_error"))),
					[l.T.EXPIRES]: e.hT().required(y("common.required")).min(new Date, y("security_txt.fields.expires.min_error"))
				}),
				i = y => {
					const C = {};
					for (const M in y) C[M] = Array.isArray(y[M]) ? y[M].filter(L => !!L) : y[M];
					return c({}, C, {
						expires: (0, g.DZ)(y.expires)
					})
				},
				m = (y, C, M) => {
					const L = [...new Set([l.T.CONTACT, l.T.EXPIRES, ...Object.values(l.T)])],
						P = Object.entries(y).sort(([S], [b]) => L.indexOf(S) - L.indexOf(b)).filter(([S, b]) => !!a[S] && !!b && (!Array.isArray(b) || !!b.length)).map(([S, b]) => Array.isArray(b) ? b.map(D => `${M(a[S].label)}: ${D}`).join(`
`) : `${M(a[S].label)}: ${b}`).join(`
`);
					(0, o.yH)(`Cloudflare_${C}_security.txt`, P, "text/plain;charset=utf-8")
				};
			let _ = function(y) {
				return y.CREATED = "created security.txt", y.ENABLED = "enabled security.txt", y.DISABLED = "disabled security.txt", y.DOWNLOADED = "downloaded security.txt", y.UPDATED = "updated security.txt", y.DELETED = "deleted security.txt", y
			}({});
			const T = y => (y == null ? void 0 : y.source) === u.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (y == null ? void 0 : y.source) === u.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				A = y => y === u.W3 ? void 0 : y,
				E = y => u.aW.test(y),
				I = y => {
					switch (y) {
						case u.w.CONTENT_SCANNING:
							return s.ROUTES.CONTENT_SCANNING;
						case u.w.EXPOSED_CREDENTIALS:
							return s.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function($, v, t) {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Sb: function() {
					return f
				},
				Vj: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), d.forEach(function(i) {
						u(n, i, a[i])
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
				var r = g(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
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
				f = ({
					event: n,
					category: r = "user journey",
					product: a = "waf",
					productName: d = "Managed Rules",
					additionalData: i
				}) => {
					o().sendEvent(n, s({
						category: r,
						product: a,
						productName: d
					}, i || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function($, v, t) {
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
		"../react/pages/spectrum/tracking.tsx": function($, v, t) {
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
		"../react/pages/stream/actionTypes.ts": function($, v, t) {
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
		"../react/pages/stream/reducer.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
						i = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(d).filter(function(m) {
						return Object.getOwnPropertyDescriptor(d, m).enumerable
					})), i.forEach(function(m) {
						l(r, m, d[m])
					})
				}
				return r
			}

			function l(r, a, d) {
				return a = g(a), a in r ? Object.defineProperty(r, a, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = d, r
			}

			function g(r) {
				var a = c(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function c(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var i = d.call(r, a || "default");
					if (typeof i != "object") return i;
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
							videos: [a.video, ...r.videos].filter((i, m) => m < s.FJ)
						});
					case o.U.UpdateVideo:
						return u({}, r, {
							videos: r.videos.map(i => i.uid === a.video.uid ? a.video : i)
						});
					case o.U.UpdateVideoPending:
						return u({}, r, {
							videoUpdateStatuses: u({}, r.videoUpdateStatuses, {
								[a.uid]: a.status
							})
						});
					case o.U.RemoveVideos:
						return u({}, r, {
							videos: r.videos.filter(i => !a.ids.includes(i.uid))
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
		"../react/pages/stream/selectors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return r
				},
				aM: function() {
					return i
				},
				bM: function() {
					return c
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
					return g
				},
				xW: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/pages/stream/reducer.ts");
			const u = T => T[s.nY],
				l = T => u(T).videos,
				g = T => u(T).videoUpdateStatuses,
				c = T => u(T).loading,
				p = T => u(T).requestTimestamp,
				f = T => u(T).storageLoading,
				n = T => u(T).storage,
				r = T => (0, o.BF)(T, "stream.enabled") || (0, e.bC)(T),
				a = T => (0, e.Le)(T, "stream", "connect"),
				d = T => (0, e.Le)(T, "stream", "stream-4371"),
				i = T => (0, e.Le)(T, "stream", "public-details-enabled"),
				m = T => !!(0, e.Le)(T, "stream", "llhls"),
				_ = T => {
					const A = n(T);
					return A !== void 0 && A.limitMins > A.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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

			function o(u, l, g) {
				const c = {
					search: g,
					limit: e.toString()
				};
				return l !== void 0 && (c.end = l), c
			}

			function s(u, l, g) {
				return {
					limit: e.toString(),
					search: g,
					asc: "true",
					start_comp: "gt",
					start: l
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function($, v, t) {
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
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function($, v, t) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/turnstile/tracking.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
						i = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(d).filter(function(m) {
						return Object.getOwnPropertyDescriptor(d, m).enumerable
					})), i.forEach(function(m) {
						u(r, m, d[m])
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
				var a = g(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(r, a) {
				if (typeof r != "object" || r === null) return r;
				var d = r[Symbol.toPrimitive];
				if (d !== void 0) {
					var i = d.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const c = "TURNSTILE";
			let p = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const f = ({
					name: r,
					product: a = c,
					category: d = "user journey",
					page: i,
					additionalData: m = {}
				}) => {
					o().sendEvent(r, s({
						category: d,
						page: i,
						product: a
					}, m || {}))
				},
				n = () => {
					var r;
					return (r = Object.values(p)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				E: function() {
					return p
				},
				Ky: function() {
					return f
				},
				RJ: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						d = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), d.forEach(function(i) {
						u(n, i, a[i])
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
				var r = g(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var d = a.call(n, r || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let c = function(n) {
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
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function($, v, t) {
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
		"../react/pages/zone-versioning/selectors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				$e: function() {
					return M
				},
				$h: function() {
					return E
				},
				G: function() {
					return C
				},
				M3: function() {
					return P
				},
				Tr: function() {
					return T
				},
				UY: function() {
					return m
				},
				bH: function() {
					return r
				},
				fv: function() {
					return S
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
					return y
				},
				tp: function() {
					return i
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				o = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/SidebarNav/permissions.ts"),
				l = t("../react/common/selectors/entitlementsSelectors.ts");

			function g(b) {
				for (var D = 1; D < arguments.length; D++) {
					var U = arguments[D] != null ? Object(arguments[D]) : {},
						j = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(U).filter(function(H) {
						return Object.getOwnPropertyDescriptor(U, H).enumerable
					})), j.forEach(function(H) {
						c(b, H, U[H])
					})
				}
				return b
			}

			function c(b, D, U) {
				return D = p(D), D in b ? Object.defineProperty(b, D, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = U, b
			}

			function p(b) {
				var D = f(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function f(b, D) {
				if (typeof b != "object" || b === null) return b;
				var U = b[Symbol.toPrimitive];
				if (U !== void 0) {
					var j = U.call(b, D || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}
			const n = b => (0, s.nA)(b) ? (0, l.p1)(b) && (0, u.$n)(b, "zone_versioning", "versioning") : !1,
				r = b => b.zoneVersioning.zoneApplications,
				a = (0, e.P1)("zoneApplications", r),
				d = b => b.zoneVersioning.zoneVersions,
				i = (0, e.P1)("zoneVersions", d),
				m = (0, o.P1)(i, b => {
					if (b) return b.filter(D => D.status == "V")
				}),
				_ = b => b.zoneVersioning.environments,
				T = b => b.zoneVersioning.environments.isRequesting,
				A = (0, e.P1)("environments", _),
				E = (0, o.P1)(a, b => {
					if (b) {
						if (b.length === 1) return b[0];
						b.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${b.length}`))
					}
					return null
				}),
				I = (0, o.P1)(A, b => b ? b.environments : []),
				y = b => {
					var D;
					return (D = b.zoneVersioning) === null || D === void 0 ? void 0 : D.zoneVersionSelector
				},
				C = (0, o.P1)(y, i, (b, D) => {
					if (!(b == null ? void 0 : b.isVersion) || !D) return null;
					const U = D.find(j => {
						if (j.version === b.selectedVersion && j.locked) return !0
					});
					return U ? g({}, U, {
						isLocked: !0
					}) : null
				}),
				M = (0, o.P1)(i, I, (b, D) => !D || !b ? [] : b.map(U => {
					const j = [];
					for (const H in D) D[H].version === U.version && j.push(D[H]);
					return g({}, U, {
						environments: j
					})
				})),
				L = b => b.zoneVersioning.WAFMigrationStatus,
				P = (0, e.P1)("WAFMigrationStatus", L),
				S = b => b.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				$2: function() {
					return L
				},
				CI: function() {
					return C
				},
				IS: function() {
					return c
				},
				L7: function() {
					return l
				},
				Lt: function() {
					return i
				},
				Oj: function() {
					return a
				},
				QV: function() {
					return m
				},
				X$: function() {
					return I
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
					return g
				}
			});

			function e(P) {
				for (var S = 1; S < arguments.length; S++) {
					var b = arguments[S] != null ? Object(arguments[S]) : {},
						D = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(b).filter(function(U) {
						return Object.getOwnPropertyDescriptor(b, U).enumerable
					})), D.forEach(function(U) {
						o(P, U, b[U])
					})
				}
				return P
			}

			function o(P, S, b) {
				return S = s(S), S in P ? Object.defineProperty(P, S, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[S] = b, P
			}

			function s(P) {
				var S = u(P, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function u(P, S) {
				if (typeof P != "object" || P === null) return P;
				var b = P[Symbol.toPrimitive];
				if (b !== void 0) {
					var D = b.call(P, S || "default");
					if (typeof D != "object") return D;
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
				g = 800,
				c = "40rem",
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
				i = {
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
				T = "workers.dev",
				A = "YYYY-MM-DD HH:mm:SS ZZ",
				E = "active",
				I = ["bundled", "unbound", "standard"],
				y = null,
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
		"../react/pages/zoneless-workers/routes.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Hv: function() {
					return c
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
				g = "https://cron-triggers.cloudflareworkers.com",
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = async ([c, p]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: c,
					variables: p
				})
			})).body, u = async (...c) => (await e.get(...c)).body, l = c => async (p, f) => {
				const n = await fetch(p, f).then(r => r.json());
				return c.assertDecode(n)
			}, g = async (...c) => (await u(...c)).result;
			v.ZP = {
				fetcher: c => Array.isArray(c) ? g(...c) : g(c)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function($, v) {
				v()
			})(this, function() {
				"use strict";

				function $() {
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
						var T = _.type,
							A = _.tagName;
						return !!(A == "INPUT" && s[T] && !_.readOnly || A == "TEXTAREA" && !_.readOnly || _.isContentEditable)
					}

					function g(_) {
						_.getAttribute("is-focus-visible") !== "" && _.setAttribute("is-focus-visible", "")
					}

					function c(_) {
						_.getAttribute("is-focus-visible") === "" && _.removeAttribute("is-focus-visible")
					}

					function p(_) {
						u(document.activeElement) && g(document.activeElement), t = !0
					}

					function f(_) {
						t = !1
					}

					function n(_) {
						!u(_.target) || (t || l(_.target)) && g(_.target)
					}

					function r(_) {
						!u(_.target) || _.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), c(_.target))
					}

					function a(_) {
						document.visibilityState == "hidden" && (e && (t = !0), d())
					}

					function d() {
						document.addEventListener("mousemove", m), document.addEventListener("mousedown", m), document.addEventListener("mouseup", m), document.addEventListener("pointermove", m), document.addEventListener("pointerdown", m), document.addEventListener("pointerup", m), document.addEventListener("touchmove", m), document.addEventListener("touchstart", m), document.addEventListener("touchend", m)
					}

					function i() {
						document.removeEventListener("mousemove", m), document.removeEventListener("mousedown", m), document.removeEventListener("mouseup", m), document.removeEventListener("pointermove", m), document.removeEventListener("pointerdown", m), document.removeEventListener("pointerup", m), document.removeEventListener("touchmove", m), document.removeEventListener("touchstart", m), document.removeEventListener("touchend", m)
					}

					function m(_) {
						_.target.nodeName.toLowerCase() !== "html" && (t = !1, i())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", f, !0), document.addEventListener("pointerdown", f, !0), document.addEventListener("touchstart", f, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", a, !0), d(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function v(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && v($)
			})
		},
		"../react/utils/bootstrap.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
					var l, g, c;
					return (l = window) === null || l === void 0 || (g = l.bootstrap) === null || g === void 0 || (c = g.data) === null || c === void 0 ? void 0 : c.security_token
				},
				o = () => {
					var l, g, c;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (g = l.data) === null || g === void 0 || (c = g.user) === null || c === void 0 ? void 0 : c.id)
				},
				s = () => {
					var l, g;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (g = l.data) === null || g === void 0 ? void 0 : g.is_kendo)
				},
				u = () => {
					var l, g, c, p;
					return (l = window) === null || l === void 0 || (g = l.bootstrap) === null || g === void 0 || (c = g.data) === null || c === void 0 || (p = c.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				O5: function() {
					return u
				},
				Xm: function() {
					return s
				},
				kT: function() {
					return c
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
				g = () => (o() || "").indexOf("C0005") !== -1,
				c = n => {
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
		"../react/utils/i18n.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				AI: function() {
					return I
				},
				Kd: function() {
					return r
				},
				S8: function() {
					return E
				},
				ZW: function() {
					return p
				},
				ay: function() {
					return y
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
					return c
				},
				ti: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				s = t("../../../common/intl/intl-types/src/index.ts"),
				u = t("../../../common/util/types/src/utils/index.ts"),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g = t("../../../../node_modules/cookie/index.js");
			const c = "cf-sync-locale-with-cps",
				p = s.Q.en_US,
				f = "en_US",
				n = "cf-locale";

			function r() {
				const P = (0, g.parse)(document.cookie);
				return l.Z.get(n) || P[n] || null
			}

			function a(P) {
				document.cookie = (0, g.serialize)(n, P, {
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
			const i = P => (0, u.Yd)(s.Q).find(S => s.Q[S] === P) || f,
				m = [],
				_ = [],
				T = [s.Q.de_DE, s.Q.en_US, s.Q.es_ES, s.Q.fr_FR, s.Q.it_IT, s.Q.pt_BR, s.Q.ko_KR, s.Q.ja_JP, s.Q.zh_CN, s.Q.zh_TW],
				A = {
					test: [...T, ..._, ...m],
					development: [...T, ..._, ...m],
					staging: [...T, ..._, ...m],
					production: [...T, ..._]
				},
				E = P => {
					const S = s.Q[P];
					return A.production.includes(S)
				},
				I = () => Object.keys(s.Q).filter(P => E(P)),
				y = P => {
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
		"../react/utils/translator.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
				QT: function() {
					return i
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
			const g = new o.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
			});

			function c(m, ..._) {
				return g.t(m, ..._)
			}
			const p = g;

			function f(m, ..._) {
				return markdown(c(m, _))
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

			function r(m, _) {
				return m in _ ? _[m] : void 0
			}
			const a = s.Trans,
				d = s.I18n,
				i = s.useI18n
		},
		"../react/utils/url.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Ct: function() {
					return M
				},
				Fl: function() {
					return Q
				},
				KT: function() {
					return J
				},
				NF: function() {
					return A
				},
				Nw: function() {
					return y
				},
				Pd: function() {
					return I
				},
				Uh: function() {
					return O
				},
				Y_: function() {
					return T
				},
				cm: function() {
					return m
				},
				e1: function() {
					return C
				},
				el: function() {
					return H
				},
				hW: function() {
					return de
				},
				pu: function() {
					return te
				},
				qR: function() {
					return j
				},
				td: function() {
					return E
				},
				uW: function() {
					return se
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/r2/routes.ts"),
				g = t("../react/pages/zoneless-workers/routes.ts"),
				c = t("../react/pages/pages/routes.ts"),
				p = t("../react/pages/d1/routes.ts");

			function f(w) {
				for (var K = 1; K < arguments.length; K++) {
					var G = arguments[K] != null ? Object(arguments[K]) : {},
						W = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(G).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(G, ee).enumerable
					})), W.forEach(function(ee) {
						n(w, ee, G[ee])
					})
				}
				return w
			}

			function n(w, K, G) {
				return K = r(K), K in w ? Object.defineProperty(w, K, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[K] = G, w
			}

			function r(w) {
				var K = a(w, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function a(w, K) {
				if (typeof w != "object" || w === null) return w;
				var G = w[Symbol.toPrimitive];
				if (G !== void 0) {
					var W = G.call(w, K || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(w)
			}
			const {
				endsWithSlash: d
			} = s.default, i = new RegExp(/([0-9a-z]{32})/g), m = w => w == null ? void 0 : w.replace(i, ":id"), _ = (w, K) => {
				const G = w.replace(d, "").split("/");
				return G.slice(0, 2).concat([K]).concat(G.slice(3)).join("/")
			}, T = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), A = w => `/${w.replace(d,"").replace(/^\//,"")}`, E = w => y("add-site", w), I = w => y("billing", w), y = (w, K) => K ? `/${K}${w?`/${w}`:""}` : `/?to=/:account/${w}`, C = () => {
				const w = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return w ? w[1] : null
			}, M = (w, K) => o().stringify(f({}, o().parse(w), K)), L = (w = "") => w.toString().replace(/([\/]{1,})$/, ""), P = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], S = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, b = /^\/(\w{32,})(\/[^.]*)?/, D = w => P.includes(w), U = w => !D(w), j = w => !D(w) && b.test(w), H = w => !D(w) && S.test(w), oe = w => S.exec(w), de = w => {
				if (H(w)) return w.split("/").filter(K => K.length > 0)[1]
			}, ie = w => b.exec(w), se = w => {
				if (j(w)) {
					const K = ie(w);
					if (K) return K[1]
				}
			}, F = w => j(w) && w.split("/")[2] === "register-domain", q = w => F(w) ? w.split("/") : null, B = w => {
				if (H(w)) {
					const [, , , K, G, W, ee, le] = w.split("/");
					return K === "traffic" && G === "load-balancing" && W === "pools" && ee === "edit" && le
				}
			}, O = w => {
				const K = q(w);
				if (K) return K[3]
			}, N = (w, K) => {
				var G, W;
				return ((G = w.pattern.match(/\:/g)) !== null && G !== void 0 ? G : []).length - ((W = K.pattern.match(/\:/g)) !== null && W !== void 0 ? W : []).length
			}, z = [...Object.values(u.C), ...Object.values(l._j), ...Object.values(g._j), ...Object.values(c._j), ...Object.values(p._)].sort(N);

			function Q(w) {
				if (!U(w)) return w;
				for (const le of z)
					if (le.expression.test(w)) return le.pattern;
				const K = q(w);
				if (K) {
					const [, , le, , ..._e] = K;
					return `/:accountId/${le}/:domainName/${_e.join("/")}`
				}
				if (B(w)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const W = oe(w);
				if (W) {
					const [, , , , le] = W;
					return `/:accountId/:zoneName${le||""}`
				}
				const ee = ie(w);
				if (ee) {
					const [, , le] = ee;
					return `/:accountId${le||""}`
				}
				return w
			}

			function te(w) {
				if (!!w) try {
					const G = w.split(".").pop();
					if (G && G.length > 0) return G
				} catch {}
			}

			function J(w, K = document.location.href) {
				try {
					const G = new URL(w),
						W = new URL(K);
					if (G.origin === W.origin) return `${G.pathname}${G.search}${G.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				r: function() {
					return c
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
			const g = /^\/domainconnect\/v2\/domaintemplates\//i,
				c = "domain-connect-redirect",
				p = () => {
					const f = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						g.test(f.pathname) && s.Z.set(c, f, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function($, v, t) {
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
		"../react/utils/zoneLevelAccess.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
				var g, c, p, f, n, r;
				return (g = window) === null || g === void 0 || (c = g.bootstrap) === null || c === void 0 || (p = c.data) === null || p === void 0 || (f = p.user) === null || f === void 0 || (n = f.betas) === null || n === void 0 || (r = n.some) === null || r === void 0 ? void 0 : r.call(n, a => a === "zone_level_access_beta")
			}

			function u() {
				const g = !!(0, e.Z)("zone-level-access");
				return s() || g
			}

			function l(g) {
				const c = !!(0, o.z1)("zone-level-access")(g);
				return s() || c
			}
		},
		"../utils/getDashVersion.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../utils/initSparrow.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Wi: function() {
					return et
				},
				IM: function() {
					return qe
				},
				yV: function() {
					return we
				},
				Ug: function() {
					return Ae
				},
				v_: function() {
					return Ue
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				s = t("../react/utils/bootstrap.ts"),
				u = t("../react/app/providers/storeContainer.js"),
				l = t("../react/common/selectors/languagePreferenceSelector.ts"),
				g = t("../flags.ts"),
				c = t("../../../../node_modules/cookie/index.js"),
				p = t("../react/utils/url.ts"),
				f = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../../../../node_modules/lodash-es/memoize.js"),
				a = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				d = t("../utils/getDashVersion.ts"),
				i = t("../react/common/selectors/accountSelectors.ts"),
				m = t("../react/common/selectors/entitlementsSelectors.ts");

			function _(ne) {
				for (var pe = 1; pe < arguments.length; pe++) {
					var Ce = arguments[pe] != null ? Object(arguments[pe]) : {},
						he = Object.keys(Ce);
					typeof Object.getOwnPropertySymbols == "function" && he.push.apply(he, Object.getOwnPropertySymbols(Ce).filter(function(Ie) {
						return Object.getOwnPropertyDescriptor(Ce, Ie).enumerable
					})), he.forEach(function(Ie) {
						T(ne, Ie, Ce[Ie])
					})
				}
				return ne
			}

			function T(ne, pe, Ce) {
				return pe = A(pe), pe in ne ? Object.defineProperty(ne, pe, {
					value: Ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[pe] = Ce, ne
			}

			function A(ne) {
				var pe = E(ne, "string");
				return typeof pe == "symbol" ? pe : String(pe)
			}

			function E(ne, pe) {
				if (typeof ne != "object" || ne === null) return ne;
				var Ce = ne[Symbol.toPrimitive];
				if (Ce !== void 0) {
					var he = Ce.call(ne, pe || "default");
					if (typeof he != "object") return he;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (pe === "string" ? String : Number)(ne)
			}
			const I = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				y = (0, r.Z)(ne => {
					try {
						return I.assertDecode((0, c.parse)(ne))
					} catch (pe) {
						return console.error(pe), {}
					}
				}),
				C = ne => (pe, Ce, he) => {
					try {
						const Ge = window.location.pathname,
							tt = (0, u.bh)().getState(),
							at = y(document.cookie),
							We = _({
								page: (0, p.Fl)(he.page || window.location.pathname),
								dashVersion: (0, d.t)()
							}, at);
						if (pe === "identify") {
							var Ie, Re;
							const st = {
								gates: (0, a.T2)(tt) || {},
								country: (Ie = t.g) === null || Ie === void 0 || (Re = Ie.bootstrap) === null || Re === void 0 ? void 0 : Re.ip_country
							};
							return ne(pe, Ce, _({}, We, st, he))
						} else {
							const st = {
								accountId: (0, p.uW)(Ge),
								zoneName: (0, p.hW)(Ge),
								domainName: (0, p.Uh)(Ge)
							};
							if ((0, p.qR)(Ge)) {
								var Ye;
								const Qe = (0, i.D0)(tt);
								st.isEntAccount = !!(Qe == null || (Ye = Qe.meta) === null || Ye === void 0 ? void 0 : Ye.has_enterprise_zones) || (0, m.p1)(tt)
							}
							if ((0, p.el)(Ge)) {
								var rt;
								const Qe = (0, f.nA)(tt);
								st.zoneId = Qe == null ? void 0 : Qe.id, st.plan = Qe == null || (rt = Qe.plan) === null || rt === void 0 ? void 0 : rt.legacy_id
							}
							return ne(pe, Ce, _({}, We, st, he))
						}
					} catch (Ge) {
						return console.error(Ge), ne(pe, Ce, he)
					}
				},
				M = ne => async (pe, Ce, he) => {
					try {
						return await ne(pe, Ce, he)
					} catch (Ie) {
						if (console.error(Ie), !Ue()) throw Ie;
						return {
							status: "rejected",
							reason: Ie
						}
					}
				};
			var L = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				P = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				S = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				b = t("../react/common/middleware/sparrow/errors.ts"),
				D = t("../react/pages/caching/tracking.tsx"),
				U = t("../react/pages/home/domain-registration/tracking.ts"),
				j = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				H = t("../react/pages/hyperdrive/tracking.ts"),
				oe = t("../react/pages/magic/overview/tracking.ts"),
				de = t("../react/pages/magic/packet-captures/constants.ts"),
				ie = t("../react/pages/page-rules/tracking.ts"),
				se = t("../react/pages/pages/constants.ts"),
				F = t("../react/pages/pipelines/tracking.ts"),
				q = t("../react/pages/security-center/BlockedContent/constants.ts"),
				B = t("../react/pages/security-center/tracking.ts"),
				O = t("../react/pages/security/api-shield/tracking.ts"),
				N = t("../react/pages/security/bots/tracking.ts"),
				z = t("../react/pages/security/resources/constants.tsx"),
				Q = t("../react/pages/security/page-shield/resources/index.ts"),
				te = t("../react/pages/home/configurations/lists/tracking.ts"),
				J = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				w = t("../react/pages/home/alerts/tracking.ts"),
				K = t("../react/pages/dns/dns-records/tracking.ts"),
				G = t("../react/pages/magic/network-monitoring/constants.ts"),
				W = t("../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts"),
				ee = t("../react/pages/security/settings/index.tsx"),
				le = t("../react/pages/shared-config/sparrowEvents.tsx"),
				_e = t("../react/pages/spectrum/tracking.tsx"),
				me = t("../react/pages/traffic/argo/tracking.ts"),
				fe = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Le = t("../react/pages/turnstile/tracking.ts"),
				be = t("../react/pages/zoneless-workers/constants.ts"),
				Me = t("../react/app/components/AccountHome/tracking.ts"),
				Be = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Fe = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				Z = t("../react/pages/user-groups/sparrowEvents.ts"),
				Ee = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				Se = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				Ze = t("../react/pages/security/overview/resources/constants.ts"),
				nt = t("../react/common/components/analytics/AnalyticsReport/constants.ts");
			const dt = ((ne, pe, ...Ce) => n.eg.union([n.eg.literal(ne), n.eg.literal(pe), ...Ce.map(he => n.eg.literal(he))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", Me.gX.SPARROW_PROJECTS_TABLE_CLICK, Me.gX.SPARROW_EMPTY_STATE_CTA_CLICK, Me.gX.SPARROW_PRODUCT_CARD_CLICK, Me.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, Me.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, Me.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, Me.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, Me.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, Me.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, Me.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", be.QV.clickedDownloadAnalytics, be.QV.clickedPrintAnalytics, be.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", be.QV.addWCITriggerToExistingWorker, be.QV.updateWCITrigger, be.QV.deleteWCITrigger, be.QV.addWCITriggerToNewWorker, be.QV.createWCIBuildForNewWorker, be.QV.completedWCIBuildForNewWorker, be.QV.changedDefaultConfigurations, se.QV.toggledPagesSmartPlacement, se.QV.downloadDemoProject, be.QV.clickCreateWorkerFromRepoNextStep, be.QV.clickCreateWorkerFromRepoPreviousStep, be.QV.clickCreateNewSCMConnection, be.QV.redirectFromSCMOAuth, be.QV.clickSubmitError, be.QV.selectTemplate, be.QV.templateStubWorkerCreated, be.QV.templateStubWorkerCreationFailed, be.QV.templateRepositoryCreated, be.QV.templateRepositoryCreationFailed, be.QV.copyTemplateC3Command, be.QV.templateDeployClick, be.QV.reauthenticateGithubModalShown, be.QV.updateGithubPermissionsClicked, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", N.N3.INITIAL_FETCH_SCORES, N.N3.FETCH_CONFIGURATION, N.N3.INITIAL_FETCH_TIME_SERIES, N.N3.INITIAL_FETCH_ATTRIBUTES, N.N3.UPDATE_SETTINGS, N.N3.DELETE_RULE, N.N3.UPDATE_RULE, N.N3.FETCH_RULES, N.N3.CONFIGURE_BOT_MANAGEMENT, N.N3.WAF_RULES_REDIRECT, j.F.TOGGLE_TCP_PROTECTION, j.F.GET_TCP_PROTECTION_PREFIXES, j.F.CREATE_TCP_PROTECTION_PREFIXES, j.F.CREATE_TCP_PROTECTION_PREFIX, j.F.UPDATE_TCP_PROTECTION_PREFIX, j.F.DELETE_TCP_PROTECTION_PREFIX, j.F.DELETE_TCP_PROTECTION_PREFIXES, j.F.GET_TCP_PROTECTION_ALLOWLIST, j.F.CREATE_TCP_PROTECTION_ALLOWLIST, j.F.UPDATE_TCP_PROTECTION_ALLOWLIST, j.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, j.F.DELETE_TCP_PROTECTION_ALLOWLIST, j.F.GET_SYN_PROTECTION_RULES, j.F.GET_SYN_PROTECTION_RULE, j.F.CREATE_SYN_PROTECTION_RULE, j.F.UPDATE_SYN_PROTECTION_RULE, j.F.DELETE_SYN_PROTECTION_RULE, j.F.GET_TCP_FLOW_PROTECTION_RULES, j.F.GET_TCP_FLOW_PROTECTION_RULE, j.F.CREATE_TCP_FLOW_PROTECTION_RULE, j.F.UPDATE_TCP_FLOW_PROTECTION_RULE, j.F.DELETE_TCP_FLOW_PROTECTION_RULE, j.F.GET_SYN_PROTECTION_FILTERS, j.F.GET_SYN_PROTECTION_FILTER, j.F.CREATE_SYN_PROTECTION_FILTER, j.F.UPDATE_SYN_PROTECTION_FILTER, j.F.DELETE_SYN_PROTECTION_FILTER, j.F.GET_TCP_FLOW_PROTECTION_FILTERS, j.F.GET_TCP_FLOW_PROTECTION_FILTER, j.F.CREATE_TCP_FLOW_PROTECTION_FILTER, j.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, j.F.DELETE_TCP_FLOW_PROTECTION_FILTER, j.F.GET_DNS_PROTECTION_RULES, j.F.GET_DNS_PROTECTION_RULE, j.F.CREATE_DNS_PROTECTION_RULE, j.F.UPDATE_DNS_PROTECTION_RULE, j.F.DELETE_DNS_PROTECTION_RULE, Q.FV.MANAGE_PAGE_SHIELD_POLICY, Q.FV.CONFIGURE_PAGE_SHIELD, Q.FV.VIEW_DETECTED_CONNECTIONS, Q.FV.VIEW_DETECTED_SCRIPTS, Q.FV.VIEW_PAGE_SHIELD_POLICIES, Q.FV.VIEW_PAGE_SHIELD_SETTINGS, Q.FV.OPEN_MUTABLE_VERSION_TOOLTIP, Q.FV.SHOW_MUTABLE_VERSION_TOOLTIP, te.y.CREATE_LIST, te.y.DELETE_LIST, te.y.ADD_LIST_ITEM, te.y.DELETE_LIST_ITEM, H.KO.PURCHASE_WORKERS_PAID, H.KO.LIST_CONFIGS, H.KO.SEARCH_CONFIGS, H.KO.CREATE_HYPERDRIVE_CONFIG, H.KO.VIEW_CONFIG_DETAILS, H.KO.UPDATE_CACHING_SETTINGS, H.KO.DELETE_HYPERDRIVE_CONFIG, H.KO.CLICK_HYPERDRIVE_DOCUMENTATION, H.KO.CLICK_GET_STARTED_GUIDE, H.KO.CLICK_CONNECTIVITY_GUIDES, H.KO.CLICK_QUICK_LINK, H.KO.CLICK_DISCORD, H.KO.CLICK_COMMUNITY, _e.N.CNAME, _e.N.IP_ADDRESS, _e.N.LB, _e.N.UPDATE_CNAME, _e.N.UPDATE_IP_ADDRESS, _e.N.UPDATE_LB, _e.N.DISABLE, D.N.TIERED_CACHE, D.N.CACHE_PURGE, D.N.CACHE_ANALYTICS, ...(0, Le.P)(), ...(0, S.x4)(), ...(0, ee.m8)(), ...(0, Z.Ky)(), ...(0, Ee.Cf)(), fe.N.CREATE, fe.N.EVENTS, fe.N.ANALYTICS, fe.N.UPDATE, fe.N.GENERATE_PREVIEW, B.RY.INITIATE_URL_SCAN, B.RY.LOAD_SCAN_INFO, B.Ev.LOAD_THREAT_EVENTS, B.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, B.Ev.THREAT_EVENTS_FILTERS, B.Ev.ABUSE_REPORT_BUTTON_CLICK, B.Ev.ABUSE_REPORT_SUBMIT_CLICK, B.Ev.ABUSE_REPORT_SUBMIT_FAILED, B.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, B.v9.EXPAND_INSIGHT_ROW, B.v9.ONE_CLICK_RESOLVE_BUTTON, B.v9.FOLLOW_RESOLVE_URL, B.v9.MANAGE_INSIGHT, B.v9.CLICK_SCAN_NOW, B.v9.CLICK_EXPORT_INSIGHTS, B.v9.BULK_ARCHIVE, B.v9.CLICK_DETAILS_BUTTON, O.Fj[O.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, O.Fj[O.kq.ENDPOINT_MANAGEMENT].detailedMetrics, O.Fj[O.kq.ENDPOINT_MANAGEMENT].createEndpoint, O.Fj[O.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, O.Fj[O.kq.ENDPOINT_MANAGEMENT].deployRouting, O.Fj[O.kq.ENDPOINT_MANAGEMENT].deleteRouting, O.Fj[O.kq.API_DISCOVERY].viewDiscoveredEndpoints, O.Fj[O.kq.API_DISCOVERY].saveDiscoveredEndpoint, O.Fj[O.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, O.Fj[O.kq.SCHEMA_VALIDATION].viewSchemasList, O.Fj[O.kq.SCHEMA_VALIDATION].uploadSchema, O.Fj[O.kq.SCHEMA_VALIDATION].viewSchemaAdoption, O.Fj[O.kq.SCHEMA_VALIDATION].downloadSchema, O.Fj[O.kq.SCHEMA_VALIDATION].deleteSchema, O.Fj[O.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, O.Fj[O.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, O.Fj[O.kq.SEQUENCE_ANALYTICS].viewSequencesPage, O.Fj[O.kq.JWT_VALIDATION].viewJWTRules, O.Fj[O.kq.JWT_VALIDATION].addJWTRule, O.Fj[O.kq.JWT_VALIDATION].editJWTRule, O.Fj[O.kq.JWT_VALIDATION].deleteJWTRule, O.Fj[O.kq.JWT_VALIDATION].reprioritizeJWTRule, O.Fj[O.kq.JWT_VALIDATION].viewJWTConfigs, O.Fj[O.kq.JWT_VALIDATION].addJWTConfig, O.Fj[O.kq.JWT_VALIDATION].editJWTConfig, O.Fj[O.kq.JWT_VALIDATION].deleteJWTConfig, O.Fj[O.kq.SETTINGS].redirectToFirewallRulesTemplate, O.Fj[O.kq.SETTINGS].redirectToPages, O.Fj[O.kq.SETTINGS].listSessionIdentifiers, O.Fj[O.kq.SETTINGS].listRequestsContainingSessionIdentifiers, O.Fj[O.kq.SETTINGS].addOrRemoveSessionIdentifiers, O.Fj[O.kq.SETTINGS].redirectToCustomRules, O.Fj[O.kq.SETTINGS].listAllFallthroughSchemas, O.Fj[O.kq.SEQUENCE_RULES].listSequenceRules, O.Fj[O.kq.SEQUENCE_RULES].deleteSequenceRule, O.Fj[O.kq.SEQUENCE_RULES].reorderSequenceRule, O.Fj[O.kq.SEQUENCE_RULES].createSequenceRule, O.Fj[O.kq.SEQUENCE_RULES].editSequenceRule, J.Z.ANALYTICS, J.Z.CREATE_AND_DEPLOY, J.Z.CREATE_MONITOR_LINK, J.Z.CREATE_MONITOR, J.Z.CREATE_POOL_LINK, J.Z.CREATE_POOL, J.Z.EDIT_MONITOR, J.Z.EDIT_POOL, J.Z.LOAD_BALANCING_TABLE, J.Z.POOL_TABLE, J.Z.EDIT_MONITOR_LINK, J.Z.EDIT_POOL_LINK, w.y.SECONDARY_DNS_NOTIFICATION_CREATE, w.y.SECONDARY_DNS_NOTIFICATION_UPDATE, w.y.SECONDARY_DNS_NOTIFICATION_DELETE, K.U.ZONE_TRANSFER_SUCCESS, K.U.DNS_RECORD_CREATE, K.U.DNS_RECORD_UPDATE, K.U.DNS_RECORD_DELETE, Fe.Y.PEER_DNS_CREATE, Fe.Y.PEER_DNS_UPDATE, Fe.Y.PEER_DNS_DELETE, Fe.Y.ZONE_TRANSFER_ENABLE, Fe.Y.ZONE_TRANSFER_DISABLE, me.V.ARGO_ENABLEMENT, me.V.ARGO_GEO_ANALYTICS_FETCH, me.V.ARGO_GLOBAL_ANALYTICS_FETCH, de.X.VIEW_BUCKETS_LIST, de.X.CREATE_BUCKET, de.X.VALIDATE_BUCKET, de.X.DELETE_BUCKET, de.X.VIEW_CAPTURES_LIST, de.X.CREATE_SIMPLE_CAPTURE, de.X.CREATE_FULL_CAPTURE, de.X.VIEW_FULL_CAPTURE, de.X.DOWNLOAD_SIMPLE_CAPTURE, G.bK.VIEW_RULES, G.bK.CREATE_RULE, G.bK.UPDATE_RULE, G.bK.DELETE_RULE, G.bK.VIEW_CONFIGURATION, G.bK.CREATE_CONFIGURATION, G.bK.UPDATE_CONFIGURATION, G.bK.DELETE_CONFIGURATION, oe.r8.VIEW_ALERTS, oe.r8.VIEW_ALERTS_HISTORY, oe.r8.MAGIC_OVERVIEW_ANALYTICS, oe.VZ.CREATE_SITE, oe.VZ.CREATE_TUNNEL, oe.VZ.CREATE_STATIC_ROUTE, W.o4.CLICK_ADAPTIVE_SAMPLING, W.o4.CLICK_TO_LOG_EXPLORER_BANNER, W.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, W.o4.CLICK_SWITCH_TO_RAW_LOGS, W.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", U.U.REGISTER_DOMAIN_SEARCH_SUBMIT, U.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, U.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, U.U.REGISTER_DOMAIN_CHECKOUT_ERROR, U.U.TRANSFER_DOMAIN_CHANGE_STEP, U.U.RENEW_DOMAIN_COMPLETED, U.U.RESTORE_DOMAIN_INIT, U.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, U.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, U.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, U.U.RESTORE_DOMAIN_FAILURE, U.U.RESTORE_DOMAIN_COMPLETED, U.U.DOMAIN_DELETE_INIT, U.U.DOMAIN_DELETE_COMPLETED, U.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, U.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, U.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, U.U.DOMAIN_DELETE_CONFIRM_DELETE, U.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, U.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, U.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, U.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, U.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, U.U.DOMAIN_MOVE_START_FLOW, U.U.DOMAIN_MOVE_OPEN_DOCS, U.U.DOMAIN_MOVE_CLOSE_FLOW, U.U.DOMAIN_MOVE_PROGRESS_FLOW, U.U.DOMAIN_MOVE_SUBMIT, U.U.DOMAIN_MOVE_INITIATE_SUCCESS, U.U.DOMAIN_MOVE_INITIATE_ERROR, U.U.DOMAIN_MOVE_CANCEL, U.U.DOMAIN_MOVE_CANCEL_SUCCESS, U.U.DOMAIN_MOVE_CANCEL_ERROR, U.U.ACTION_CENTER_NAVIGATE, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, F.KO.CLICK_GET_STARTED_GUIDE, F.KO.CLICK_PIPELINE_DOCUMENTATION, F.KO.CLICK_QUICK_LINK, F.KO.CREATE_PIPELINE, F.KO.DELETE_PIPELINE, F.KO.LIST_PIPELINES, F.KO.VIEW_PIPELINE, L.S.EXISTING_DOMAIN, L.S.NEW_DOMAIN, L.S.WAF_RULESET, L.S.WORKERS, L.S.PAGES, L.S.R2, L.S.ACCOUNT_MEMBERS, ie._.TEMPLATE_PRODUCT_SELECTED, ie._.TEMPLATE_SELECTED, ie._.TEMPLATE_SAVE_DRAFT, ie._.TEMPLATE_CANCEL, ie._.TEMPLATE_DEPLOY, le.D.CLICK_GO_BACK_SHARE_MODAL, le.D.CLICK_MENU_ITEM_SHARE, le.D.CLICK_ON_CANCEL_SHARE_MODAL, le.D.CLICK_ON_CLOSE_SHARE_MODAL, le.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, le.D.CLICK_ON_DELETE_RULESET, le.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, le.D.CLICK_ON_EDIT_SHARE_PERMISSION, le.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, le.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, le.D.CLICK_ON_SHARE_TABLE_ROW, z.pR.CLICK_GEOGRAPHICAL_TEMPLATE, z.pR.CLICK_IP_TEMPLATE, z.pR.CLICK_USER_AGENT_TEMPLATE, z.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, ee.vc.CREATED, ee.vc.ENABLED, ee.vc.DISABLED, ee.vc.DELETED, ee.vc.UPDATED, ee.vc.DOWNLOADED, q.Gk.REQUEST_REVIEW, q.Gk.COPY_URL, P.v.FIELD, P.v.OPERATOR, Be.Vj.SHOW_LCC_MIGRATION_BANNER, Be.Vj.CLICK_LCC_DOCUMENTATION, Be.Vj.CLICK_LCC_UPGRADE_GUIDE, Be.Vj.SHOW_LCC_MIGRATION_WARNING, Se.y.CLICK_DISMISS_INELIGIBILITY, Se.y.CLICK_NEXT_STEP, Se.y.CLICK_OPT_IN, Se.y.CLICK_OPT_IN_BUTTON, Se.y.CLICK_OPT_OUT_BUTTON, Se.y.DISPLAY_MODAL, Se.y.DISPLAY_OPT_OUT_MODAL, Ze.AZ.LOAD_INSIGHTS, Ze.AZ.OPEN_SIDE_MODAL_INSIGHT, Ze.AZ.CLOSE_SIDE_MODAL_INSIGHT, Ze.AZ.CLICK_ACTION_INSIGHT, nt.JR.ADD_SUSPICIOUS_ACTIVITY_FILTER, nt.JR.REMOVE_SUSPICIOUS_ACTIVITY_FILTER),
				ot = n.eg.exactStrict(n.eg.object({
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
				Xe = (ne, pe) => {
					const [Ce, he] = _t(pe);
					let Ie, Re;
					return (0, n.nM)(dt.decode(ne)) && (Ie = new b.Uh(ne)), he && he.length > 0 && (Re = new b.oV(ne, he)), [Ce, Ie, Re]
				},
				_t = ne => {
					const pe = ot.decode(ne);
					if ((0, n.nM)(pe)) {
						const Ce = pe.left.map(({
							context: he
						}) => he.map(({
							key: Ie
						}) => Ie)).reduce((he, Ie) => he.concat(Ie), []).filter(he => he in ne);
						return [Y(Ce, ne), Ce]
					}
					return [ne, []]
				},
				Y = (ne, pe) => Object.entries(pe).reduce((Ce, [he, Ie]) => (ne.includes(he) || (Ce[he] = Ie), Ce), {}),
				ce = ne => (pe, Ce, he) => {
					const [Ie, Re, Ye] = Xe(Ce, he);
					if (Re) throw Re;
					return Ye && console.error(Ye), ne(pe, Ce, Ie)
				};
			var ye = t("../react/utils/zaraz.ts");
			const xe = {
					identify: !0
				},
				$e = ne => (pe, Ce, he) => (xe[Ce] || ye.tg === null || ye.tg === void 0 || ye.tg.track(Ce, he), ne(pe, Ce, he));
			var Ne = t("../react/common/selectors/userSelectors.ts");
			const Je = "pageview",
				lt = "create zone",
				Et = "create user",
				pt = {
					[Je]: !0,
					[lt]: !0,
					[Et]: !0
				},
				Ct = ne => {
					var pe;
					return !!((pe = ne.gates.assignments) === null || pe === void 0 ? void 0 : pe["dx-enable-google-tag-manager"])
				},
				ht = ne => {
					const pe = /\|MCMID\|([0-9]+)\|/,
						Ce = ne.match(pe);
					return Ce ? Ce[1] : void 0
				},
				vt = ne => {
					var pe;
					const {
						deviceViewport: Ce,
						page: he,
						previousPage: Ie,
						pageName: Re,
						utm_campaign: Ye,
						_ga: rt,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Ge
					} = ne, {
						origin: tt
					} = window.location, at = (0, Ne.PR)((0, u.bh)().getState());
					return {
						event: Ie !== void 0 && he !== Ie ? "virtual_page_view" : "page_load",
						device_type: Ce,
						hostname: tt,
						language: navigator.language,
						locale: (0, l.r)((0, u.bh)().getState()),
						page_location: he ? `${tt}${he}` : "[redacted]",
						page_path: he ? `${he}` : "[redacted]",
						page_referrer: Ie ? `${tt}/${Ie}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: Re || "[redacted]",
						page_url: he ? `${tt}${he}` : "[redacted]",
						query: Ye ? `?utm_campaign=${Ye}` : "[redacted]",
						user_properties: {
							ga_client_id: (pe = rt) !== null && pe !== void 0 ? pe : void 0,
							ga_client_id_s: rt ? `s${rt}` : void 0,
							user_id: et() ? at == null ? void 0 : at.id : void 0,
							ecid: Ge ? ht(Ge) : void 0
						}
					}
				},
				ke = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				Te = ne => {
					const {
						status: pe
					} = ne;
					return pe === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				Ke = (ne, pe) => {
					switch (ne) {
						case "pageview":
							return vt(pe);
						case "create zone":
							return ke();
						case "create user":
							return Te(pe);
						default:
							return
					}
				},
				Tt = ne => (pe, Ce, he) => {
					if (pt[Ce]) {
						var Ie;
						const Re = Ke(Ce, he);
						Re && ((Ie = window.dataLayer) === null || Ie === void 0 || Ie.push(Re))
					}
					return ne(pe, Ce, he)
				};
			var ut = t("../react/utils/cookiePreferences.ts");

			function yt(ne) {
				for (var pe = 1; pe < arguments.length; pe++) {
					var Ce = arguments[pe] != null ? Object(arguments[pe]) : {},
						he = Object.keys(Ce);
					typeof Object.getOwnPropertySymbols == "function" && he.push.apply(he, Object.getOwnPropertySymbols(Ce).filter(function(Ie) {
						return Object.getOwnPropertyDescriptor(Ce, Ie).enumerable
					})), he.forEach(function(Ie) {
						V(ne, Ie, Ce[Ie])
					})
				}
				return ne
			}

			function V(ne, pe, Ce) {
				return pe = ae(pe), pe in ne ? Object.defineProperty(ne, pe, {
					value: Ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[pe] = Ce, ne
			}

			function ae(ne) {
				var pe = ve(ne, "string");
				return typeof pe == "symbol" ? pe : String(pe)
			}

			function ve(ne, pe) {
				if (typeof ne != "object" || ne === null) return ne;
				var Ce = ne[Symbol.toPrimitive];
				if (Ce !== void 0) {
					var he = Ce.call(ne, pe || "default");
					if (typeof he != "object") return he;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (pe === "string" ? String : Number)(ne)
			}
			const Ae = ne => {
					const pe = Ct((0, u.bh)().getState());
					o().init(yt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Ue() && !(0, s.gm)() && et(),
						middlewares: [M, ce, C, $e, ...pe ? [Tt] : []]
					}, ne))
				},
				we = () => {
					o().identify(yt({}, (0, e.getAttribution)(), {
						locale: (0, l.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, g.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				Ue = () => !0,
				qe = () => {
					(0, ut.kT)("sparrow_id")
				},
				et = () => (0, ut.Xm)()
		},
		"../utils/initStyles.ts": function($, v, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const s = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				l = c => {
					const p = [];
					for (let f in c.colors) {
						const n = c.colors[f];
						if (Array.isArray(n) && f !== "categorical")
							for (let r = 0; r < n.length; ++r) p.push(`--cf-${f}-${r}:${n[r]};`)
					}
					return p.join(`
`)
				},
				g = () => {
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
					let f = document.getElementById(s);
					f ? f.innerText = "" : (f = document.createElement("style"), f.id = s, u.appendChild(f)), f.appendChild(document.createTextNode(p)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(g), v.Z = g
		},
		"../utils/sentry/lastSentEventId.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let s = "";
				return {
					setEventId: g => (!g || typeof g != "string" || (s = g), s),
					getEventId: () => s
				}
			})()
		},
		"../utils/zaraz.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Ro: function() {
					return r
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

			function e(a) {
				for (var d = 1; d < arguments.length; d++) {
					var i = arguments[d] != null ? Object(arguments[d]) : {},
						m = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(i).filter(function(_) {
						return Object.getOwnPropertyDescriptor(i, _).enumerable
					})), m.forEach(function(_) {
						o(a, _, i[_])
					})
				}
				return a
			}

			function o(a, d, i) {
				return d = s(d), d in a ? Object.defineProperty(a, d, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[d] = i, a
			}

			function s(a) {
				var d = u(a, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(a, d) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var m = i.call(a, d || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(a)
			}
			const l = {
					track: (a, d) => null,
					set: (a, d) => console.log(`zaraz.set(${a}, ${d})`)
				},
				g = {
					track: (a, d) => {
						var i;
						(i = window.zaraz) === null || i === void 0 || i.track(a, e({}, d, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, d) => {
						var i;
						return (i = window.zaraz) === null || i === void 0 ? void 0 : i.set(a, d)
					}
				};
			let c;
			const p = () => {
					window.zaraz, c = g
				},
				f = ["email", "first_name", "last_name"],
				n = a => {
					f.forEach(d => {
						var i;
						(i = c) === null || i === void 0 || i.set(d, a[d])
					})
				},
				r = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function($, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = t.n(s),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(g),
				p = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				f = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				r = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				a = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				i = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				m = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				_ = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				T = t("../../../common/component/component-filter-bar/src/constants.js"),
				A = t("../../../common/component/component-filter-bar/src/utils.js");

			function E() {
				return E = Object.assign ? Object.assign.bind() : function(B) {
					for (var O = 1; O < arguments.length; O++) {
						var N = arguments[O];
						for (var z in N) Object.prototype.hasOwnProperty.call(N, z) && (B[z] = N[z])
					}
					return B
				}, E.apply(this, arguments)
			}

			function I(B) {
				for (var O = 1; O < arguments.length; O++) {
					var N = arguments[O] != null ? Object(arguments[O]) : {},
						z = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(N).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(N, Q).enumerable
					})), z.forEach(function(Q) {
						y(B, Q, N[Q])
					})
				}
				return B
			}

			function y(B, O, N) {
				return O = C(O), O in B ? Object.defineProperty(B, O, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[O] = N, B
			}

			function C(B) {
				var O = M(B, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function M(B, O) {
				if (typeof B != "object" || B === null) return B;
				var N = B[Symbol.toPrimitive];
				if (N !== void 0) {
					var z = N.call(B, O || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(B)
			}
			const L = 70,
				P = (0, l.createStyledComponent)(({
					showOverflow: B
				}) => I({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, B ? {} : {
					maxHeight: L,
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
				D = (0, l.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				U = (0, l.createStyledComponent)(({
					theme: B
				}) => ({
					color: B.colors.gray[4],
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
				H = (0, l.createStyledComponent)(({
					buttonStyle: B
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
				}, B), f.zx),
				oe = (0, l.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				de = (0, l.createStyledComponent)(({
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
				ie = (0, l.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				se = B => B.current ? [...B.current.children].reduce((O, N) => (N.offsetTop >= L && O++, O), 0) : 0;
			let F = 0;
			class q extends e.Component {
				constructor() {
					super();
					y(this, "overflowWrapper", (0, e.createRef)()), y(this, "hasOverflowed", O => {
						const N = se(this.overflowWrapper);
						O.scrollHeight > L && N >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (O.scrollHeight < L || N === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), y(this, "addNewFilter", () => {
						const {
							filterDefinitions: O
						} = this.props, N = (0, A.TE)(O), z = Object.keys(N)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: z,
								operator: (0, A.uv)(z, N),
								value: (0, A.TT)(z, N)
							}
						})
					}), y(this, "handleOpenFilterEdit", O => {
						this.setState({
							openFilter: O,
							filterChanges: I({}, this.props.filters[O])
						})
					}), y(this, "handleRemoveFilterClick", (O, N) => {
						O.stopPropagation(), this.removeFilter(N)
					}), y(this, "removeFilter", O => {
						const {
							handleFiltersChange: N
						} = this.props, z = [...this.props.filters], Q = z[O];
						z.splice(O, 1), N(z), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: Q.key,
							operator: Q.operator,
							value: Q.value
						})
					}), y(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), y(this, "handleFilterSubmit", O => {
						const {
							filterDefinitions: N
						} = this.props;
						O.preventDefault();
						const {
							filterChanges: z
						} = this.state, Q = typeof N[z.key].parse == "function" ? Array.isArray(z.value) ? z.value.map(N[z.key].parse) : N[z.key].parse(z.value) : z.value;
						if (N[z.key].validate && (Array.isArray(Q) ? !Q.every(N[z.key].validate) : !N[z.key].validate(Q))) return this.setState({
							invalid: !0
						});
						const te = [...this.props.filters],
							J = I({}, z, {
								value: Q
							}),
							w = !te[this.state.openFilter];
						w ? te.push(J) : te[this.state.openFilter] = I({}, J), this.props.handleFiltersChange(te, J), (w ? this.props.onAddFilter : this.props.onEditFilter)({
							field: J.key,
							operator: J.operator,
							value: J.value
						}), this.closeOpenFilterChanges()
					}), y(this, "handlePendingKeyChange", ({
						value: O
					}) => {
						const {
							filterDefinitions: N
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: O,
								operator: (0, A.uv)(O, N),
								value: (0, A.TT)(O, N)
							}
						})
					}), y(this, "handlePendingOperatorChange", ({
						value: O
					}) => {
						let N = I({}, this.state.filterChanges, {
							operator: O
						});
						if ((0, A.dr)(O)) {
							var z, Q;
							((z = this.state.filterChanges) === null || z === void 0 ? void 0 : z.value) && !Array.isArray((Q = this.state.filterChanges) === null || Q === void 0 ? void 0 : Q.value) && (N.value = [this.state.filterChanges.value])
						} else {
							var te, J, w;
							((te = this.state.filterChanges) === null || te === void 0 ? void 0 : te.value) && Array.isArray((J = this.state.filterChanges) === null || J === void 0 ? void 0 : J.value) && ((w = this.state.filterChanges) === null || w === void 0 ? void 0 : w.value.length) > 0 && (N.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: N
						})
					}), y(this, "handlePendingValueChange", O => {
						this.setState({
							invalid: !1,
							filterChanges: I({}, this.state.filterChanges, {
								value: O
							})
						})
					}), y(this, "handleShowOverflow", () => {
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
						id: ++F
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
						formatLabel: N,
						filterDefinitions: z
					} = this.props, {
						operator: Q
					} = this.state.filterChanges, te = z[this.state.filterChanges.key], J = this.state.filterChanges.value, w = G => Array.isArray(G) ? G.map(W => W.value) : (G == null ? void 0 : G.value) || null;
					if (te.renderValueComponent) return te.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (te.type) {
						case T.k.custom: {
							var K;
							return o().createElement(te.CustomComponent, E({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (K = te == null ? void 0 : te.customProps) !== null && K !== void 0 ? K : {}))
						}
						case T.k.select:
							return (0, A.dr)(Q) ? o().createElement(i.Z, {
								searchable: !0,
								multi: !0,
								creatable: !te.options,
								value: typeof J.split == "function" ? J == null ? void 0 : J.split(",") : Array.isArray(J) ? J : [],
								options: te.options ? te.options.map(G => ({
									value: G.value || G,
									label: G.label || N(this.state.filterChanges.key, G, O)
								})) : J ? (Array.isArray(J) ? J : J.split(",")).map(G => ({
									label: G,
									value: G
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(g.Trans, {
									id: te.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: te.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: G => {
									this.handlePendingValueChange(w(G))
								},
								isValidNewOption: G => {
									const W = te.validate;
									return !W && G || G && W([G])
								},
								getNewOptionData: (G, W) => ({
									value: G,
									label: W
								})
							}) : o().createElement(a.hQ, {
								hideLabel: !0,
								value: J,
								options: te.options.map(G => ({
									value: G,
									label: N(this.state.filterChanges.key, G, O)
								})),
								onChange: ({
									value: G
								}) => this.handlePendingValueChange(G)
							});
						case T.k.string:
						default:
							return (0, A.dr)(Q) ? o().createElement(i.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof J.split == "function" ? J == null ? void 0 : J.split(",") : Array.isArray(J) ? J : [],
								options: J ? (Array.isArray(J) ? J : J.split(",")).map(G => ({
									label: G,
									value: G
								})) : [],
								noOptionsMessage: () => null,
								placeholder: O.t("analytics.report.filters.labels.placeholder", {
									example: z[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: G => {
									this.handlePendingValueChange(w(G))
								},
								isValidNewOption: G => {
									const W = te.validate;
									return !W && G || G && W([G])
								},
								getNewOptionData: (G, W) => ({
									value: G,
									label: W
								}),
								formatCreateLabel: G => O.t("filter_editor.value_create_label", {
									value: G
								})
							}) : o().createElement(g.I18n, null, G => o().createElement(p.I, {
								value: this.state.filterChanges.value,
								onChange: W => this.handlePendingValueChange(W.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: G.t("analytics.report.filters.labels.placeholder", {
									example: z[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: O,
						filterDefinitions: N,
						modalStyles: z,
						filterIconType: Q,
						buttonStyle: te
					} = this.props, J = se(this.overflowWrapper), w = `filterPanel${this.state.id}`, K = this.state.openFilter !== null;
					return o().createElement(g.I18n, null, G => o().createElement(d.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(ie, null, o().createElement(H, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": K,
						"aria-controls": w,
						inverted: !0,
						buttonStyle: te
					}, o().createElement(n.J, {
						type: Q || "add",
						mr: 1,
						label: G.t("common.add", {
							_: "Add"
						})
					}), o().createElement(g.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(oe, null, o().createElement(g.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(P, {
						innerRef: this.overflowWrapper,
						overflowLimit: L,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((W, ee) => {
						const {
							key: le,
							operator: _e,
							value: me
						} = W, fe = N[le].ignoreLabelTranslation ? N[le].label : G.t(N[le].label), Le = G.t(`analytics.report.filters.operators.${_e}`), be = Array.isArray(me) ? me.map(Be => O(le, Be, G)).join(", ") : O(le, me, G), Me = `${fe} ${Le} ${be}`;
						return o().createElement(S, {
							key: `${le}-${_e}-${me}`,
							title: Me
						}, o().createElement(b, {
							onClick: () => this.handleOpenFilterEdit(ee)
						}, o().createElement(d.ZC, {
							display: "flex"
						}, o().createElement(D, null, fe), o().createElement(U, null, Le), o().createElement(j, null, be), (0, A.oN)(W, N) ? o().createElement(r.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(de, {
							onClick: Be => this.handleRemoveFilterClick(Be, ee),
							"aria-label": "remove"
						}, o().createElement(n.J, {
							type: "remove"
						})))))
					})), K && o().createElement(_.Z, {
						id: w,
						filterDefinitions: N,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, A.oN)(this.state.filterChanges, N),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: O,
						modalStyles: z
					}), this.state.hasOverflowed && o().createElement(m.Z, {
						count: J,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			y(q, "propTypes", {
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
			}), v.Z = q
		},
		"../../../common/component/component-filter-bar/src/index.js": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../../../common/intl/intl-core/src/errors.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				OZ: function() {
					return l
				},
				YB: function() {
					return u
				}
			});

			function e(c, p, f) {
				return p = o(p), p in c ? Object.defineProperty(c, p, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[p] = f, c
			}

			function o(c) {
				var p = s(c, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(c, p) {
				if (typeof c != "object" || c === null) return c;
				var f = c[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(c, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(c)
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
			var g = null
		},
		"../../../common/util/types/src/api/domain.ts": function($, v, t) {
			"use strict";
			t.d(v, {
				Aw: function() {
					return M
				},
				Ib: function() {
					return y
				},
				Ks: function() {
					return L
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
					return d
				},
				TS: function() {
					return i
				},
				W7: function() {
					return A
				},
				dN: function() {
					return P
				},
				eF: function() {
					return I
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
				g = e.eg.object({
					registrant: u.optional,
					technical: u.optional,
					administrator: u.optional,
					billing: u.optional
				}),
				c = e.eg.object({
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
				i = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let m = function(S) {
				return S.PENDING = "pending", S.VERIFIED = "verified", S.REJECTED = "rejected", S.PENDING_DELETE = "pending_delete", S.DELETED = "deleted", S
			}({});
			const _ = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(m),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				T = e.eg.object({
					designated_approvers: e.eg.array(_)
				});
			let A = function(S) {
				return S.PENDING = "pending", S.PENDING_UPDATE = "pending_update", S.ENABLED = "enabled", S.DISABLED = "disabled", S
			}({});
			const E = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(A)
				}),
				I = e.eg.intersection([E, T]),
				y = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function($, v, t) {
			"use strict";
			t.d(v, {
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
					return g
				}
			});
			let e = function(c) {
					return c.Custom = "custom", c.Root = "root", c.Managed = "managed", c.Zone = "zone", c.RateLimit = "ratelimit", c
				}({}),
				o = function(c) {
					return c.Cache = "http_request_cache_settings", c.HttpConfigSettings = "http_config_settings", c.HttpLogCustomFields = "http_log_custom_fields", c.HttpRateLimit = "http_ratelimit", c.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", c.HttpRequestFirewallCustom = "http_request_firewall_custom", c.HttpRequestFirewallManaged = "http_request_firewall_managed", c.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", c.HttpRequestLateTransform = "http_request_late_transform", c.HttpRequestMain = "http_request_main", c.HttpRequestOrigin = "http_request_origin", c.HttpRequestRedirect = "http_request_redirect", c.HttpRequestSanitize = "http_request_sanitize", c.HttpRequestSBFM = "http_request_sbfm", c.HttpRequestsSnippets = "http_request_snippets", c.HttpRequestTransform = "http_request_transform", c.HttpResponseCompression = "http_response_compression", c.HttpResponseFirewallManaged = "http_response_firewall_managed", c.HttpResponseTransform = "http_response_headers_transform", c.L4DDoS = "ddos_l4", c.L7DDoS = "ddos_l7", c.MagicIDS = "magic_transit_ids_managed", c.MagicManaged = "magic_transit_managed", c.MagicTransit = "magic_transit", c.MagicTransitRateLimit = "magic_transit_ratelimit", c
				}({}),
				s = function(c) {
					return c.Execute = "execute", c.All = "all", c.Block = "block", c.JSChallenge = "js_challenge", c.Challenge = "challenge", c.Allow = "allow", c.Bypass = "bypass", c.Log = "log", c.Rewrite = "rewrite", c.Score = "score", c.Skip = "skip", c.Managed_Challenge = "managed_challenge", c.DDoS_Dynamic = "ddos_dynamic", c.Select_Config = "select_config", c.Set_Config = "set_config", c.Reset = "reset", c.Redirect = "redirect", c.Cache = "set_cache_settings", c
				}({}),
				u = function(c) {
					return c.ZONE_LOCKDOWN = "zoneLockdown", c.UA_BLOCK = "uaBlock", c.BIC = "bic", c.HOT = "hot", c.SECURITY_LEVEL = "securityLevel", c.RATE_LIMIT = "rateLimit", c.WAF = "waf", c
				}({}),
				l = function(c) {
					return c.DEFAULT = "default", c.MEDIUM = "medium", c.LOW = "low", c.EOFF = "eoff", c.HIGH = "high", c.VERY_HIGH = "very_high", c
				}({}),
				g = function(c) {
					return c.DEFAULT = "", c.XML = "text/xml", c.JSON = "application/json", c.TEXT = "text/plain", c.HTML = "text/html", c
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../../../dash/intl/intl-translations/src/index.ts": function($, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function($, v, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(s) {
				if (!t.o(e, s)) return Promise.resolve().then(function() {
					var g = new Error("Cannot find module '" + s + "'");
					throw g.code = "MODULE_NOT_FOUND", g
				});
				var u = e[s],
					l = u[0];
				return t.e(u[1]).then(function() {
					return t.t(l, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", $.exports = o
		}
	}
]);

//# debugId=f228b70c-c48b-53f8-9c8e-6088c87afa51