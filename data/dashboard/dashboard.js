! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d8e31b4e-e3f1-51b4-9af7-e897a31f7f67")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				J8: function() {
					return a
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
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/utils/url.ts"),
				s = n("../../../../node_modules/query-string/query-string.js"),
				p = n.n(s),
				u = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m;
			const i = () => Object.keys(u.Z).reduce((_, h) => (h.indexOf("cf_beta.") === 0 && u.Z.get(h) === "true" && _.push(h.split(".").slice(1).join(".")), _), []),
				d = () => {
					var _, h, A;
					return ((_ = window) === null || _ === void 0 || (h = _.bootstrap) === null || h === void 0 || (A = h.data) === null || A === void 0 ? void 0 : A.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((m = window) === null || m === void 0 ? void 0 : m.location) && u.Z) {
				const _ = p().parse(window.location.search);
				_.beta_on && u.Z.set(`cf_beta.${_.beta_on}`, !0), _.beta_off && u.Z.set(`cf_beta.${_.beta_off}`, !1)
			}
			const g = {},
				t = _ => {
					var h, A, T;
					return Object.prototype.hasOwnProperty.call(g, _) ? g[_] : ((h = window) === null || h === void 0 || (A = h.bootstrap) === null || A === void 0 || (T = A.data) === null || T === void 0 ? void 0 : T.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(M => M === _) ? (g[_] = !0, !0) : (g[_] = !1, !1)
				},
				r = _ => u.Z ? u.Z.get(`cf_beta.${_}`) === !0 : !1,
				a = _ => r(_) || t(_),
				l = () => !0,
				c = () => {
					var _, h, A;
					return ((_ = window) === null || _ === void 0 || (h = _.bootstrap) === null || h === void 0 || (A = h.data) === null || A === void 0 ? void 0 : A.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				f = _ => {
					const h = (0, e.uF)(_),
						A = (h == null ? void 0 : h.roles) || [];
					return (0, o.qR)(location.pathname) && A.length === 1 && A.some(T => T === "Administrator Read Only")
				}
		},
		"../init.ts": function(x, E, n) {
			"use strict";
			n.r(E);
			var e = n("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				s = n("../libs/init/initGlobal.ts"),
				p = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				u = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function m(N) {
				for (var j = 1; j < arguments.length; j++) {
					var ee = arguments[j] != null ? Object(arguments[j]) : {},
						ie = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(ee).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(ee, ye).enumerable
					})), ie.forEach(function(ye) {
						i(N, ye, ee[ye])
					})
				}
				return N
			}

			function i(N, j, ee) {
				return j = d(j), j in N ? Object.defineProperty(N, j, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[j] = ee, N
			}

			function d(N) {
				var j = g(N, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function g(N, j) {
				if (typeof N != "object" || N === null) return N;
				var ee = N[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ie = ee.call(N, j || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(N)
			}
			const t = N => {
				const j = N && N.headers || {},
					ee = new Headers(j);
				return ee.append("X-Cross-Site-Security", "dash"), m({}, N, {
					headers: ee
				})
			};
			(0, u.register)({
				request: (N, j) => {
					try {
						return new URL(N), N === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", j] : [N, j]
					} catch {
						return [N, t(j)]
					}
				}
			});
			var r = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = n("../react/app/providers/storeContainer.js");
			let c = "";
			const f = 61;

			function _(N) {
				const j = N.substr(1);
				if (j && c !== j) {
					const ee = document.getElementById(j);
					if (ee) {
						const ie = ee.getBoundingClientRect().top;
						if (ie > 0) {
							const ye = ie - f;
							document.documentElement.scrollTop = ye
						}
					}
				}
				c = j
			}

			function h(N) {
				N.listen(j => _(j.hash))
			}
			var A = n("../../../../node_modules/cookie/index.js"),
				T = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const M = "CF_dash_version",
				C = "cf_fv_preview",
				y = "cf_pv",
				S = "current",
				L = "hash",
				b = "deploymentPreview",
				P = "fragmentPreview",
				O = N => N === S ? D() : B(),
				D = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				B = (N = 72) => {
					const j = 36e5;
					return new Date(Date.now() + N * j)
				},
				U = N => {
					switch (N) {
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
				Z = (N, j = !1) => {
					var ee;
					const ie = U(N),
						ye = `
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
						De = j ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${T.fk.orange[9]};
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
					return ye + De
				},
				ae = N => {
					var j;
					const ee = document.getElementById(N);
					!ee || (j = ee.parentNode) === null || j === void 0 || j.removeChild(ee)
				};

			function _e() {
				const N = document.getElementById("loading-state");
				N == null || N.classList.add("hide"), N == null || N.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(ae)
				})
			}

			function de(N) {
				var j;
				const ee = document.getElementById("loading-state"),
					ie = !!((j = A.parse(document.cookie)) === null || j === void 0 ? void 0 : j[M]);
				!ee || (ee.innerHTML = Z(N == null ? void 0 : N.code, ie))
			}
			var ue = n("../utils/initStyles.ts"),
				K = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				Q = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				H = n("../react/common/selectors/languagePreferenceSelector.ts"),
				I = n("../flags.ts"),
				F = n("../utils/getDashVersion.ts");
			const ne = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ce = !0,
				G = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				J = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var W = n("../utils/sentry/lastSentEventId.ts"),
				q = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				$ = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const te = N => {
				const j = async ee => {
					var ie, ye;
					const De = {
						envelope: ee.body,
						url: N.url,
						isPreviewDeploy: (ie = window) === null || ie === void 0 || (ye = ie.build) === null || ye === void 0 ? void 0 : ye.isPreviewDeploy,
						release: (0, F.t)()
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
						return console.log(Se), (0, $.$2)(Se)
					}
				};
				return q.q(N, j)
			};
			var Ee = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				Te = n("../../../../node_modules/history/esm/history.js"),
				ke = (0, Te.lX)(),
				xe = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Ke = n("../react/utils/url.ts");
			const Le = (0, xe.Rf)();
			let X;

			function re(N) {
				return me(N, "react-router-v5")
			}

			function me(N, j) {
				return (ee, ie = !0, ye = !0) => {
					ie && Le && Le.location && (X = ee({
						name: (0, Ke.Fl)(Le.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": j
						}
					})), ye && N.listen && N.listen((De, Se) => {
						if (Se && (Se === "PUSH" || Se === "POP")) {
							X && X.finish();
							const ot = {
								"routing.instrumentation": j
							};
							X = ee({
								name: (0, Ke.Fl)(De.pathname),
								op: "navigation",
								tags: ot
							})
						}
					})
				}
			}
			var k = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				pe = n.n(k),
				Ie = n("../../../common/intl/intl-core/src/errors.ts"),
				Be = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				ze = n("../react/common/middleware/sparrow/errors.ts");

			function be(N, j, ee) {
				return j = Re(j), j in N ? Object.defineProperty(N, j, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[j] = ee, N
			}

			function Re(N) {
				var j = je(N, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function je(N, j) {
				if (typeof N != "object" || N === null) return N;
				var ee = N[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ie = ee.call(N, j || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(N)
			}
			class We {
				constructor() {
					be(this, "name", We.id)
				}
				setupOnce() {
					n.g.console && (0, Be.hl)(n.g.console, "error", j => (...ee) => {
						const ie = ee.find(ye => ye instanceof Error);
						if (ne && ie) {
							let ye, De = !0;
							if (ie instanceof ze.ez) {
								const Se = ie instanceof ze.oV ? ie.invalidProperties : void 0;
								ye = {
									tags: {
										"sparrow.eventName": ie.eventName
									},
									extra: {
										sparrow: {
											eventName: ie.eventName,
											invalidProperties: Se
										}
									},
									fingerprint: [ie.name ? ie.name : "SparrowValidationError"]
								}, De = !1
							} else if (ie instanceof k.SparrowIdCookieError) ye = {
								extra: {
									sparrowIdCookie: ie.cookie
								},
								fingerprint: [ie.name ? ie.name : "SparrowIdCookieError"]
							};
							else if (ie.name === "ChunkLoadError") {
								ye = {
									fingerprint: [ie.name]
								};
								try {
									ye.tags = {
										chunkId: ie.message.split(" ")[2],
										chunkUrl: ie.request
									}
								} catch {}
							} else ie instanceof Ie.YB && (ye = {
								fingerprint: ["TranslatorError", ie.translationKey]
							});
							De && r.Tb(ie, ye)
						}
						typeof j == "function" && j.apply(n.g.console, ee)
					})
				}
			}
			be(We, "id", "ConsoleErrorIntegration");
			var Xe = null;
			const V = () => {
					if (ne && ce) {
						var N, j, ee, ie, ye, De, Se, ot, vt, qe;
						let wt = "production";
						((N = window) === null || N === void 0 || (j = N.build) === null || j === void 0 ? void 0 : j.isPreviewDeploy) && (wt += "-preview"), Q.S({
							dsn: ne,
							release: (0, F.t)(),
							environment: wt,
							ignoreErrors: J,
							allowUrls: G,
							autoSessionTracking: !1,
							integrations: yt => [...yt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new We, new Ee.jK.BrowserTracing({
								routingInstrumentation: re(ke)
							})],
							tracesSampleRate: 0,
							transport: te,
							beforeSend: yt => (W.e.setEventId(yt.event_id), yt)
						});
						const bt = (0, l.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, I.Qw)(),
							USER_BETA_FLAGS: (0, I.ki)(),
							meta: {
								connection: {
									type: (ee = window) === null || ee === void 0 || (ie = ee.navigator) === null || ie === void 0 || (ye = ie.connection) === null || ye === void 0 ? void 0 : ye.effectiveType,
									bandwidth: (De = window) === null || De === void 0 || (Se = De.navigator) === null || Se === void 0 || (ot = Se.connection) === null || ot === void 0 ? void 0 : ot.downlink
								},
								languagePreference: (0, H.r)(bt),
								isPreviewDeploy: (vt = window) === null || vt === void 0 || (qe = vt.build) === null || qe === void 0 ? void 0 : qe.isPreviewDeploy
							},
							utilGates: (0, K.T2)(bt)
						}), window.addEventListener("unhandledrejection", function(yt) {})
					}
				},
				se = N => {
					N ? r.av({
						id: N
					}) : r.av(null)
				};
			var ge = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				we = () => {
					let N;
					try {
						N = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), N = window.location.search
					}
					if (!N.includes("remote[")) return;
					const j = new URLSearchParams(N),
						ee = {};
					for (let [ie, ye] of j) ie.includes("remote") && (ee[ie.replace(/remote\[|\]/g, "")] = ye);
					ge.Z.set("mfe-remotes", JSON.stringify(ee))
				},
				Ne = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				Ye = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const rt = "ANON_USER_ID";

			function ut() {
				var N, j, ee, ie;
				let ye = (N = n.g) === null || N === void 0 || (j = N.bootstrap) === null || j === void 0 || (ee = j.data) === null || ee === void 0 || (ie = ee.user) === null || ie === void 0 ? void 0 : ie.id;
				if (!ye) {
					let De = ge.Z.get(rt);
					if (!De) {
						let Se = (0, Ye.Z)();
						ge.Z.set(rt, Se), De = Se
					}
					return De
				}
				return ye
			}
			async function st() {
				const N = (0, l.bh)();
				N.dispatch((0, Ne.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await N.dispatch((0, K.UL)({
					userId: ut()
				}))
			}
			class gt extends Error {
				constructor(j, ee) {
					super(ee);
					this.name = `${j} ${ee}`
				}
			}
			const ft = () => {
					document.cookie.split(";").forEach(j => {
						const [ee] = j.trim().split("=");
						document.cookie = `${ee}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				dt = async () => {
					let N = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!N.ok) throw N.headers.get("content-type") === "text/html" && (await N.text()).toLowerCase().includes("cookie too large") && (r.$e(function(ye) {
						ye.setTag("init", "cookieTooLarge"), r.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), ft(), window.location.reload()), new gt("Bootstrap API Failure", N == null ? void 0 : N.status);
					return (await N.json()).result.data
				};
			var Ge = n("webpack/sharing/consume/default/react/react"),
				Ae = n.n(Ge),
				Qe = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				pt = n("webpack/sharing/consume/default/react-dom/react-dom"),
				ct = n("webpack/sharing/consume/default/react-redux/react-redux"),
				_t = n("../../../../node_modules/swr/core/dist/index.mjs"),
				z = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				le = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Ce = n("../react/shims/focus-visible.js"),
				Oe = n("../react/app/components/DeepLink/index.ts"),
				Fe = n("../../../../node_modules/prop-types/index.js"),
				Ve = n.n(Fe),
				R = n("../react/utils/translator.tsx"),
				Y = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				oe = n("../../../dash/intl/intl-translations/src/index.ts"),
				ve = n("../../../../node_modules/query-string/query-string.js"),
				he = n.n(ve),
				$e = n("../react/common/actions/userActions.ts"),
				et = n("../react/common/selectors/userSelectors.ts"),
				Je = n("../react/utils/i18n.ts"),
				tt = n("../react/utils/bootstrap.ts");

			function at(N) {
				for (var j = 1; j < arguments.length; j++) {
					var ee = arguments[j] != null ? Object(arguments[j]) : {},
						ie = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(ee).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(ee, ye).enumerable
					})), ie.forEach(function(ye) {
						mt(N, ye, ee[ye])
					})
				}
				return N
			}

			function mt(N, j, ee) {
				return j = Ct(j), j in N ? Object.defineProperty(N, j, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[j] = ee, N
			}

			function Ct(N) {
				var j = it(N, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function it(N, j) {
				if (typeof N != "object" || N === null) return N;
				var ee = N[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ie = ee.call(N, j || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(N)
			}
			let He = he().parse(location.search);
			const Rt = N => {
					const j = (0, tt.$8)() ? [(0, oe.Fy)(oe.if.changes), (0, oe.Fy)(oe.if.common), (0, oe.Fy)(oe.if.navigation), (0, oe.Fy)(oe.if.overview), (0, oe.Fy)(oe.if.onboarding), (0, oe.Fy)(oe.if.invite), (0, oe.Fy)(oe.if.login), (0, oe.Fy)(oe.if.dns), (0, oe.Fy)(oe.n4.ssl_tls), (0, oe.Fy)(oe.if.message_inbox), (0, oe.Fy)(oe.if.welcome)] : [(0, oe.Fy)(oe.if.common), (0, oe.Fy)(oe.if.invite), (0, oe.Fy)(oe.if.login), (0, oe.Fy)(oe.if.onboarding)];
					He.lang ? $t(N) : ge.Z.get(Je.th) && Nt(N, (0, Je.Kd)());
					const ee = async ie => (await Promise.all(j.map(De => De(ie)))).reduce((De, Se) => at({}, De, Se), {});
					return Ae().createElement(Y.LocaleContext.Provider, {
						value: N.languagePreference
					}, Ae().createElement(Y.I18nProvider, {
						translator: R.Vb,
						locale: N.languagePreference
					}, Ae().createElement(Y.I18nLoader, {
						loadPhrases: ee
					}, N.children)))
				},
				$t = async N => {
					let j = He.lang.substring(0, He.lang.length - 2) + He.lang.substring(He.lang.length - 2, He.lang.length).toUpperCase();
					if (!(0, H.v)(j)) {
						console.warn(`${j} is not a supported locale.`), delete He.lang, N.history.replace({
							search: he().stringify(He)
						});
						return
					}(0, Je.i_)(j), delete He.lang, Nt(N, j), N.isAuthenticated || N.history.replace({
						search: he().stringify(He)
					})
				}, Nt = async (N, j) => {
					if (N.isAuthenticated) try {
						await N.setUserCommPreferences({
							"language-locale": j
						}, {
							hideErrorAlert: !0
						}), ge.Z.remove(Je.th), N.history.replace({
							search: he().stringify(He)
						})
					} catch (ee) {
						ge.Z.set(Je.th, !0), console.error(ee)
					} else ge.Z.set(Je.th, !0)
				}, kt = N => {
					const j = (0, et.PR)(N);
					return {
						isAuthenticated: !!(j && j.id),
						languagePreference: (0, Je.Kd)() || (0, H.r)(N)
					}
				}, Wt = {
					setUserCommPreferences: $e.V_
				};
			var zt = (0, Qe.withRouter)((0, ct.connect)(kt, Wt)(Rt));
			Rt.propTypes = {
				history: Ve().object,
				languagePreference: Ve().string.isRequired,
				children: Ve().node.isRequired,
				isAuthenticated: Ve().bool,
				setUserCommPreferences: Ve().func.isRequired
			};
			var Gt = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Kt = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let v;
			const w = ({
				selectorPrefix: N = "c_"
			} = {}) => (v || (v = (0, Kt.Z)({
				dev: !1,
				selectorPrefix: N
			})), v);
			var fe = n("../react/common/components/ModalManager.tsx"),
				Pe = n("../react/app/components/ErrorBoundary.tsx"),
				Ze = n("../react/common/actions/notificationsActions.ts");
			const Tt = (n.g.bootstrap || {}).data || {};
			class At extends Ae().Component {
				componentDidMount() {
					Tt.messages && this.dispatchNotificationActions(Tt.messages)
				}
				dispatchNotificationActions(j) {
					j.forEach(ee => {
						const {
							type: ie,
							message: ye,
							persist: De
						} = ee;
						["success", "info", "warn", "error"].includes(ie) && this.props.notifyAdd(ie, (0, R.ZP)(ye), {
							persist: !!De
						})
					})
				}
				render() {
					return null
				}
			}
			var Pt = (0, Qe.withRouter)((0, ct.connect)(null, {
				notifyAdd: Ze.add
			})(At));
			At.propTypes = {
				notifyAdd: Ve().func.isRequired
			};
			var lt = n("../react/app/redux/index.ts");

			function Lt() {
				var N;
				const j = (0, lt.p4)(et.PR),
					ee = (j == null || (N = j.email) === null || N === void 0 ? void 0 : N.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ie = (0, Ne.Yc)();
				(0, Ge.useEffect)(() => {
					ie({
						userType: ee
					})
				}, [ee, ie])
			}
			var Ot = n("../react/common/selectors/entitlementsSelectors.ts"),
				It = n("../react/common/selectors/accountSelectors.ts");
			const St = ["accountId", "is_ent"];

			function Dt() {
				const N = (0, Ne.f7)(),
					j = (0, Qe.useHistory)(),
					ee = (0, Ke.uW)(j.location.pathname),
					ie = (0, Ne.Yc)(),
					ye = (0, Ne.O$)(),
					De = (0, lt.p4)(Ot.u1),
					Se = !De.isRequesting && !!De.data,
					ot = (0, lt.p4)(Ot.p1),
					vt = (0, lt.p4)(It.Xu),
					qe = (0, lt.p4)(It.uF),
					wt = !vt.isRequesting && !!vt.data;
				(0, Ge.useEffect)(() => {
					if (ee && wt && qe && Se && ee === qe.account.id) {
						var bt, yt, Ft;
						ie({
							accountId: qe.account.id,
							is_ent: ot,
							is_free_account: !ot && !(qe == null || (bt = qe.account.meta) === null || bt === void 0 ? void 0 : bt.has_business_zones) && !(qe == null || (yt = qe.account.meta) === null || yt === void 0 ? void 0 : yt.has_pro_zones) && !(qe == null || (Ft = qe.account.meta) === null || Ft === void 0 ? void 0 : Ft.has_enterprise_zones)
						})
					} else(!ee || ee in N && N.accountId !== ee) && ye(St)
				}, [wt, qe, ie, ye, Se, ot, ee, N])
			}
			var nt = n("../react/common/selectors/zoneSelectors.ts");

			function Vt() {
				const N = (0, lt.p4)(nt.nA),
					j = (0, Ne.Yc)();
				(0, Ge.useEffect)(() => {
					var ee;
					j({
						zone_id: N == null ? void 0 : N.id,
						zone_plan: N == null || (ee = N.plan) === null || ee === void 0 ? void 0 : ee.legacy_id
					})
				}, [N, j])
			}
			const Ut = () => (Lt(), Dt(), Vt(), null);
			var en = n("../react/app/components/Persistence/index.tsx"),
				tn = n("../node_modules/@cloudflare/elements/es/index.js"),
				nn = n("../react/app/components/LoadingSuspense.tsx");
			const on = Ae().lazy(() => Promise.all([n.e(39074), n.e(16691), n.e(19341), n.e(12174), n.e(57062), n.e(22952), n.e(5668), n.e(8924), n.e(77216), n.e(40517), n.e(39760), n.e(60734), n.e(25390), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var rn = () => Ae().createElement(nn.Z, null, Ae().createElement(on, null));
			const an = () => (Ge.useEffect(() => _e, []), null);
			var sn = n("../../../../node_modules/moment/moment.js"),
				Ht = n.n(sn);
			const cn = N => {
					switch (N) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return N.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return N.toLowerCase();
						default:
							return "en"
					}
				},
				ln = () => {
					const N = (0, lt.p4)(H.r);
					(0, Ge.useEffect)(() => {
						const j = cn(N);
						j !== Ht().locale() && Ht().locale(j), document.documentElement.lang = N
					}, [N])
				},
				un = () => {
					(0, Ge.useEffect)(() => {
						async function N() {
							var j, ee;
							let ie;
							if (((j = window) === null || j === void 0 || (ee = j.build) === null || ee === void 0 ? void 0 : ee.isPreviewDeploy) && (ie = "cookie"), !!ie) try {
								const ye = document.head.querySelector("link[rel=icon]");
								ye && (ye.href = (await n("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${ie}.ico`)).default)
							} catch {}
						}
						N()
					}, [])
				};
			var dn = n("../react/common/constants/constants.ts");
			const pn = () => {
					var N;
					const j = (0, Qe.useLocation)(),
						[ee, ie] = (0, Ge.useState)(((N = window) === null || N === void 0 ? void 0 : N.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Ge.useEffect)(() => {
						const ye = he().parse(j.search);
						if (ye.pt && ge.Z.set(dn.sJ, ye.pt), ye == null ? void 0 : ye.devPanel) {
							var De, Se;
							(De = window) === null || De === void 0 || (Se = De.localStorage) === null || Se === void 0 || Se.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ie(!0)
						}
					}, [j.search]), {
						devPanelEnabled: ee
					}
				},
				mn = ({
					id: N,
					customDataLayer: j = [],
					dataLayerName: ee = "dataLayer"
				}) => {
					const ie = `<iframe src="https://www.googletagmanager.com/ns.html?id=${N}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						ye = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${ee}', '${N}')`,
						De = `
    window.${ee} = window.${ee} || [];
    window.${ee}.push(${JSON.stringify(j)})
  `;
					return {
						iframe: ie,
						script: ye,
						dataLayerHTML: De
					}
				},
				gn = N => {
					const j = document.createElement("script");
					return j.innerHTML = N, j.async = !0, j
				},
				fn = N => {
					const j = document.createElement("noscript");
					return j.innerHTML = N, j
				},
				Zt = N => {
					const j = document.createElement("script");
					return j.innerHTML = N, j
				},
				Nn = ({
					dataLayer: N,
					dataLayerName: j
				}) => {
					if (window[j]) return window[j].push(N);
					const ee = `
      window.${j} = window.${j} || [];
      window.${j}.push(${JSON.stringify(N)})`,
						ie = Zt(ee);
					document.head.insertBefore(ie, document.head.childNodes[0])
				},
				_n = ({
					containerId: N,
					customDataLayer: j,
					gtmFeatureFlag: ee = !0
				}) => {
					(0, Ge.useEffect)(() => {
						(() => {
							if (!ee) return null;
							const {
								iframe: ye,
								script: De,
								dataLayerHTML: Se
							} = mn({
								id: N,
								customDataLayer: j
							});
							document.head.insertBefore(Zt(Se), document.head.childNodes[0]), document.head.insertBefore(gn(De), document.head.childNodes[0]), document.body.insertBefore(fn(ye), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = n("../react/common/hooks/useGate.ts");
			const En = ({
				isDev: N,
				gtmFeatureFlag: j
			}) => {
				(0, Ge.useEffect)(() => {
					(() => {
						if (!j) return null;
						let ie;
						N ? ie = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ie = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const ye = document.createElement("script");
						ye.async = !0, ye.src = ie, document.head.insertBefore(ye, document.head.childNodes[0])
					})()
				}, [])
			};
			var vn = n("../react/utils/useDomainConnectRedirect.ts");
			const yn = "GTM-NDGPDFZ",
				Cn = Ae().lazy(() => Promise.all([n.e(39074), n.e(16691), n.e(19341), n.e(12174), n.e(57062), n.e(22952), n.e(51436), n.e(3292), n.e(47386), n.e(70618), n.e(11945), n.e(8924), n.e(77216), n.e(40517), n.e(39760), n.e(60734), n.e(25390), n.e(32036), n.e(87940), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				hn = Ae().lazy(() => Promise.all([n.e(83741), n.e(65447), n.e(39074), n.e(57062), n.e(3292), n.e(60734), n.e(69088), n.e(32036), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var Tn = ({
					userIsAuthed: N
				}) => {
					ln(), un(), (0, vn.y)();
					const {
						devPanelEnabled: j
					} = pn();
					return _n({
						containerId: yn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), En({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), Ae().createElement(Ge.Suspense, {
						fallback: Ae().createElement(an, null)
					}, Ae().createElement(Qe.Switch, null, !N && !0 && Ae().createElement(Qe.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Ae().createElement(hn, null)), Ae().createElement(Qe.Route, {
						render: () => Ae().createElement(tn.ZC, {
							minHeight: "100vh"
						}, Ae().createElement(Cn, null))
					})), j && Ae().createElement(rn, null))
				},
				jt = n("../../../../node_modules/yup/es/index.js"),
				An = n("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => jt.Z_().email((0, R.ZP)("common.validation.email")).required((0, R.ZP)("common.validation.email")),
				cfPassword: () => jt.Z_().required((0, R.ZP)("common.validation.required"))
			};
			(0, An.Yd)(Qt).forEach(N => {
				jt.kM(jt.Z_, N, Qt[N])
			});
			const Xt = Ae().lazy(() => Promise.all([n.e(16691), n.e(12174), n.e(6368), n.e(51436), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				On = () => {
					const N = (0, tt.$8)(),
						[j, ee] = (0, Ge.useState)(N ? Xt : Ae().Fragment),
						[ie, ye] = (0, Ge.useState)((0, T.Yc)());
					(0, Ge.useEffect)(() => {
						(0, T.fF)(() => ye((0, T.Yc)()))
					}, []);
					const De = Se => {
						ye(Se), (0, T.C8)(Se), document.cookie = `dark-mode=${Se};Path=/;Max-Age=31536000`
					};
					return (0, Ge.useEffect)(() => {
						ee(N ? Xt : Ae().Fragment)
					}, [N]), (0, Ge.useEffect)(() => {
						const Se = () => De(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Se), () => {
							window.removeEventListener("storage", Se)
						}
					}, []), Ae().createElement(Ge.Suspense, {
						fallback: null
					}, Ae().createElement(ct.Provider, {
						store: (0, l.bh)()
					}, Ae().createElement(Qe.Router, {
						history: ke
					}, Ae().createElement(j, null, Ae().createElement(Gt.Z, {
						renderer: w()
					}, Ae().createElement(zt, null, Ae().createElement(Pe.S, {
						sentryTag: "Root"
					}, Ae().createElement(_t.J$, {
						value: {
							fetcher: Se => fetch(Se).then(ot => ot.json())
						}
					}, Ae().createElement(Ut, null), Ae().createElement(Pt, null), Ae().createElement(en.Z_, {
						onDarkModeChangeCb: De
					}, Ae().createElement(Oe.ZP, null, Ae().createElement(Tn, {
						userIsAuthed: N
					}))), Ae().createElement(fe.ZP, null), Ae().createElement(z.F0, null)))))))))
				},
				In = () => {
					(0, pt.render)(Ae().createElement(On, null), document.getElementById("react-app"))
				};
			var ht = n("../utils/initSparrow.ts"),
				Mt = n("../utils/zaraz.ts");
			const bn = () => {
					const N = (0, et.PR)((0, l.bh)().getState());
					Pn(), (0, ht.Ug)(), (0, Mt.bM)(), (N == null ? void 0 : N.id) && pe().setUserId(N == null ? void 0 : N.id), (0, ht.yV)(), !(0, ht.Wi)() && (0, ht.IM)(), N ? (0, Mt.yn)(N) : (0, Mt.Ro)()
				},
				Pn = () => {
					var N, j;
					(N = window) === null || N === void 0 || (j = N.OneTrust) === null || j === void 0 || j.OnConsentChanged(() => {
						const ee = (0, et.PR)((0, l.bh)().getState());
						(0, ht.Wi)() ? (pe().setEnabled(!0), (ee == null ? void 0 : ee.id) ? (pe().setUserId(ee.id), (0, Mt.yn)(ee)) : (0, Mt.Ro)(), (0, ht.yV)()) : (pe().setEnabled(!1), (0, ht.IM)())
					})
				};

			function Ln(N) {
				for (var j = 1; j < arguments.length; j++) {
					var ee = arguments[j] != null ? Object(arguments[j]) : {},
						ie = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(ee).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(ee, ye).enumerable
					})), ie.forEach(function(ye) {
						Sn(N, ye, ee[ye])
					})
				}
				return N
			}

			function Sn(N, j, ee) {
				return j = Dn(j), j in N ? Object.defineProperty(N, j, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[j] = ee, N
			}

			function Dn(N) {
				var j = Mn(N, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function Mn(N, j) {
				if (typeof N != "object" || N === null) return N;
				var ee = N[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ie = ee.call(N, j || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(N)
			}
			const wn = "init",
				Jt = (N, j) => {
					r.$e(function(ee) {
						ee.setTag(wn, j), r.Tb(N)
					}), de(N)
				},
				xt = async (N, j) => {
					try {
						return await N(), !0
					} catch (ee) {
						return Jt(ee, j), !1
					}
				};
			(async () => {
				try {
					var N, j, ee;
					n.g.build = Ln({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "165794b3fda4e44f3f20d41edf07e083a099f337",
						dashVersion: "31515213",
						env: "production",
						builtAt: 1741203407210,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, F.p)()
					}), V();
					const ie = [{
						fn: () => n.e(4374).then(n.bind(n, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => h(ke),
						tag: "hashScroll"
					}, {
						fn: ue.Z,
						tag: "styles"
					}, {
						fn: we,
						tag: "mfePreviewData"
					}];
					for (const vt of ie)
						if (!await xt(vt.fn, vt.tag)) return;
					let ye;
					if (!await xt(async () => {
							ye = await dt()
						}, "bootstrap")) return;
					const De = (0, l.bh)(),
						Se = ((N = ye) === null || N === void 0 ? void 0 : N.data) || {};
					De.dispatch((0, a.mW)("user", Se == null ? void 0 : Se.user));
					const ot = (j = ye) === null || j === void 0 || (ee = j.data) === null || ee === void 0 ? void 0 : ee.user;
					return n.g.bootstrap = ye, ot && ot.id && se(ot.id), !await xt(st, "gates") || !await xt(bn, "tracking") ? void 0 : In()
				} catch (ie) {
					Jt(ie, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(x, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../react/app/redux/index.ts"),
				p = n("../react/common/selectors/userSelectors.ts"),
				u = n("../react/common/selectors/zoneSelectors.ts"),
				m = n("../react/common/selectors/accountSelectors.ts"),
				i = n("../react/common/utils/isGuards.ts"),
				d = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = n.n(d);

			function t() {
				return t = Object.assign ? Object.assign.bind() : function(l) {
					for (var c = 1; c < arguments.length; c++) {
						var f = arguments[c];
						for (var _ in f) Object.prototype.hasOwnProperty.call(f, _) && (l[_] = f[_])
					}
					return l
				}, t.apply(this, arguments)
			}
			const r = l => {
				function c(f) {
					const _ = (0, s.UM)(),
						h = (0, d.useHistory)(),
						A = (0, d.useLocation)(),
						T = (0, d.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						M = (0, s.p4)(p.PR) || null,
						C = (0, s.p4)(u.nA) || null,
						y = (0, s.p4)(m.uF),
						S = y ? y.account : null;
					if (!T) return null;
					const {
						accountId: L,
						app: b,
						tab: P
					} = T.params, O = T.params.zoneName && ((0, i.v5)(T.params.zoneName) || T.params.zoneName.indexOf(".") > 0) ? T.params.zoneName : void 0;
					return o().createElement(l, t({
						dispatch: _,
						history: h,
						location: A,
						match: T,
						user: M,
						membership: L ? y : null,
						account: L ? S : null,
						accountId: L || null,
						zone: O ? C : null,
						zoneName: O || null,
						app: O ? b : null,
						tab: O ? P : null
					}, f))
				}
				return c.displayName = `withEntities(${a(l)})`, c
			};

			function a(l) {
				return l.displayName || l.name || "Component"
			}
			E.Z = r
		},
		"../react/app/components/AccountHome/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				$$: function() {
					return T
				},
				KV: function() {
					return C
				},
				OX: function() {
					return y
				},
				QV: function() {
					return A
				},
				Yt: function() {
					return _
				},
				bA: function() {
					return h
				},
				gX: function() {
					return l
				},
				o1: function() {
					return M
				},
				tw: function() {
					return c
				},
				xD: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);
			const s = "projects table click",
				p = "click create application",
				u = "account home dev plat - product card click",
				m = "account home dev plat - empty state CTA click",
				i = "account home dev plat - view all projects click",
				d = "select task",
				g = "account home zero trust - link card click",
				t = "account home zero trust - onboarding card click",
				r = "account home zero trust - analytics link click",
				l = {
					SPARROW_PROJECTS_TABLE_CLICK: s,
					SPARROW_CREATE_PROJECT_CLICK: p,
					SPARROW_PRODUCT_CARD_CLICK: u,
					SPARROW_EMPTY_STATE_CTA_CLICK: m,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: i,
					SPARROW_SELECT_ZERO_TRUST_TASK: d,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: g,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: t,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: r,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: "account home zero trust - product card click"
				},
				c = S => {
					o().sendEvent(s, {
						component: S
					})
				},
				f = S => {
					o().sendEvent(s, {
						component: "menu",
						subcomponent: S
					})
				},
				_ = () => {
					o().sendEvent(p, {
						category: "Projects Table"
					})
				},
				h = ({
					category: S,
					product: L
				}) => {
					o().sendEvent(u, {
						category: S,
						product: L
					})
				},
				A = () => {
					o().sendEvent(m)
				},
				T = () => {
					o().sendEvent(i)
				},
				M = S => {
					o().sendEvent(d, {
						product: `zero-trust - ${S}`,
						category: "onboarding"
					})
				},
				C = ({
					category: S,
					href: L
				}) => {
					o().sendEvent(g, {
						category: S,
						href: L
					})
				},
				y = ({
					category: S,
					href: L
				}) => {
					o().sendEvent(r, {
						category: S,
						href: L
					})
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				BQ: function() {
					return d
				},
				Bh: function() {
					return m
				},
				CM: function() {
					return g
				},
				MF: function() {
					return o
				},
				TS: function() {
					return a
				},
				WF: function() {
					return u
				},
				Wz: function() {
					return t
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
					return s
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js");
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
				s = (0, e.R)(o.ADD_SITE, l => ({
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
				g = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, l => ({
					payload: l
				})),
				t = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, l => ({
					accountIds: l
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(o.SELECT_WORKER, l => ({
					payload: l
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				BV: function() {
					return e
				},
				Dz: function() {
					return g
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
					return t
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
				p = "deepLinkQueryParams",
				u = "resolvedDeepLinkQueryParams",
				m = "add",
				i = "multiSkuProducts",
				d = "/:account/billing/checkout",
				g = "/:account/:zone/billing/checkout",
				t = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				ZP: function() {
					return P
				},
				U: function() {
					return b.U
				},
				dd: function() {
					return b.dd
				},
				bk: function() {
					return m.bk
				},
				Bh: function() {
					return m.Bh
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n("../react/app/redux/index.ts"),
				s = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = n("../react/app/components/DeepLink/utils.ts"),
				u = n("../react/utils/bootstrap.ts"),
				m = n("../react/app/components/DeepLink/actions.ts"),
				i = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = n.n(i);

			function g(O) {
				for (var D = 1; D < arguments.length; D++) {
					var B = arguments[D] != null ? Object(arguments[D]) : {},
						U = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(B).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(B, Z).enumerable
					})), U.forEach(function(Z) {
						t(O, Z, B[Z])
					})
				}
				return O
			}

			function t(O, D, B) {
				return D = r(D), D in O ? Object.defineProperty(O, D, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[D] = B, O
			}

			function r(O) {
				var D = a(O, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function a(O, D) {
				if (typeof O != "object" || O === null) return O;
				var B = O[Symbol.toPrimitive];
				if (B !== void 0) {
					var U = B.call(O, D || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(O)
			}
			class l {
				constructor(D, B) {
					t(this, "deepLink", void 0), t(this, "legacyDeepLink", void 0), t(this, "resolvers", void 0), t(this, "startTime", Date.now()), t(this, "endTime", Date.now()), t(this, "_done", !1), t(this, "resolverStart", U => {
						this.resolvers.set(U, {
							name: U,
							startTime: Date.now(),
							userActions: []
						})
					}), t(this, "resolverDone", U => {
						const Z = this.resolvers.get(U);
						Z && (Z.endTime = Date.now(), this.resolvers.set(U, Z))
					}), t(this, "resolverCancel", U => {
						this.resolverDone(U), this.cancel()
					}), t(this, "start", () => {
						this.startTime = Date.now()
					}), t(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), t(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), t(this, "createUserActionTracker", U => {
						const Z = "NO_ACTION",
							ae = {
								actionType: Z,
								startTime: 0
							};
						return {
							start: (_e = Z) => {
								const de = this.resolvers.get(U);
								ae.actionType = _e, ae.startTime = Date.now(), de && de.userActions.push(ae)
							},
							finish: (_e = Z) => {
								ae.actionType = _e, ae.endTime = Date.now()
							},
							cancel: (_e = Z) => {
								ae.actionType = _e, ae.endTime = Date.now(), this.resolverCancel(U)
							}
						}
					}), this.deepLink = D, this.legacyDeepLink = B, this.resolvers = new Map
				}
				track(D) {
					try {
						if (this._done) return;
						this._done = !0;
						const B = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: c(this.startTime, this.endTime),
								totalCpuTime: c(this.startTime, this.endTime)
							},
							U = this.resolvers.size === 0 ? B : Array.from(this.resolvers.values()).reduce((Z, ae) => {
								const _e = c(ae.startTime, ae.endTime),
									de = ae.userActions.reduce((K, Q) => {
										const H = c(Q.startTime, Q.endTime);
										return {
											totalTime: K.totalTime + H,
											actions: K.actions.set(Q.actionType, H)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									ue = _e - de.totalTime;
								return g({}, Z, {
									totalTime: Z.totalTime + _e,
									totalUserActionsTime: Z.totalUserActionsTime + de.totalTime,
									totalCpuTime: Z.totalCpuTime + ue,
									[`${ae.name}ResolverTotalTime`]: _e,
									[`${ae.name}ResolverTotalCpuTime`]: ue,
									[`${ae.name}ResolverTotalUserActionsTime`]: de.totalTime
								}, Array.from(de.actions.keys()).reduce((K, Q) => g({}, K, {
									[`${ae.name}Resolver/${Q}`]: de.actions.get(Q)
								}), {}))
							}, g({}, B, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						d().sendEvent(D, U)
					} catch (B) {
						console.error(B)
					}
				}
			}

			function c(O = Date.now(), D = Date.now()) {
				return (D - O) / 1e3
			}
			var f = n("../react/app/components/DeepLink/constants.ts"),
				_ = n("../react/common/hooks/useCachedState.ts"),
				h = n("../react/common/hooks/usePrevious.ts");

			function A(O) {
				for (var D = 1; D < arguments.length; D++) {
					var B = arguments[D] != null ? Object(arguments[D]) : {},
						U = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(B).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(B, Z).enumerable
					})), U.forEach(function(Z) {
						T(O, Z, B[Z])
					})
				}
				return O
			}

			function T(O, D, B) {
				return D = M(D), D in O ? Object.defineProperty(O, D, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[D] = B, O
			}

			function M(O) {
				var D = C(O, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function C(O, D) {
				if (typeof O != "object" || O === null) return O;
				var B = O[Symbol.toPrimitive];
				if (B !== void 0) {
					var U = B.call(O, D || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(O)
			}
			var S = ({
					children: O
				}) => {
					const D = (0, o.TZ)(),
						B = (0, s.useHistory)(),
						U = (0, h.Z)(B.location.pathname),
						[Z, ae] = (0, e.useState)(!0),
						[_e, de] = (0, _.j)(void 0, {
							key: f.Fj
						}),
						[ue, K] = (0, _.j)(void 0, {
							key: f.O5
						}),
						[Q, H] = (0, _.j)(void 0, {
							key: f.s$
						}),
						I = (0, u.$8)();
					let F = new URLSearchParams(B.location.search);
					const ne = (0, p.mL)(B.location.pathname, F);
					let ce = null,
						G = null;
					if (F.has(f.Tc) && F.delete(f.Tc), F.get(f.BV)) ce = F.get(f.BV), B.location.hash && (G = B.location.hash);
					else if (_e) {
						const W = new URLSearchParams(_e);
						W.get(f.BV) && (ce = W.get(f.BV), F = W)
					} else ne && (F.set(f.BV, ne), ce = ne);
					if (ce && f._h.test(ce)) {
						const W = F.getAll(f.Kt),
							q = JSON.stringify(W);
						W.length && q !== Q && H(q), F.has(f.Tc) && F.delete(f.Tc), F.delete(f.Kt)
					}!I && _e === void 0 && ce && de(F.toString());
					const J = async () => {
						try {
							if ((0, p.I3)(ce) && I) {
								_e && de(void 0), D.dispatch((0, m.r4)()), ae(!0), ce && ce !== ue && K(ce);
								const W = await (0, p.py)(ce, ae, D, B, U, new l(ce, ne ? `${B.location.pathname}${B.location.search}` : void 0));
								F.delete(f.BV);
								const q = F.toString();
								B.replace(A({}, B.location, {
									pathname: W,
									search: q
								}, G ? {
									hash: G
								} : {})), D.dispatch((0, m.WF)())
							}
						} catch (W) {
							D.dispatch((0, m.WF)()), console.error(W)
						} finally {
							ae(!1)
						}
					};
					return (0, e.useEffect)(() => {
						J()
					}, [B.location.pathname, B.location.search]), (Z || (0, p.I3)(ce)) && I ? null : O
				},
				L = n("../react/app/components/DeepLink/reducer.ts"),
				b = n("../react/app/components/DeepLink/selectors.ts"),
				P = S
		},
		"../react/app/components/DeepLink/reducer.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				E: function() {
					return p
				},
				r: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				s = n("../react/app/components/DeepLink/actions.ts");
			const p = null,
				u = o().from({
					lastAction: p,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function m(i = u, d) {
				if (d.type === s.MF.RESOLVING_COMPLETE) return u;
				if (d.type === s.MF.RESOLVING_START) return i.set("isResolving", !0);
				if (i.isResolving) {
					if (d.type === s.MF.RESOLVING_COMPLETE) return i.set("isResolving", !1);
					if (d.type === s.MF.SET_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", d.accountIds);
					if (d.type === s.MF.DELETE_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", void 0);
					{
						let g = i;
						try {
							g = i.set("lastAction", d)
						} catch {
							g = i.set("lastAction", {
								type: d.type
							})
						}
						return g
					}
				} else return i
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
			const e = p => p.deepLink.lastAction,
				o = p => p.deepLink.isResolving,
				s = p => p.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				I3: function() {
					return l
				},
				X1: function() {
					return r
				},
				mL: function() {
					return A
				},
				py: function() {
					return h
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/components/DeepLink/reducer.ts"),
				s = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const p = T => T.replace(s.default.endsWithSlash, ""),
				u = T => {
					const M = p(T).split("/").slice(3);
					return M.length ? "/" + M.join("/") : ""
				},
				m = T => {
					const M = p(T).split("/").slice(2);
					return M.length ? `apps/${M.join("/")}` : "apps"
				};
			var i = n("../react/app/components/DeepLink/selectors.ts"),
				d = n("../react/app/components/DeepLink/constants.ts"),
				g = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = T => (0, g.Lb)(T) && (T.split(".").length > 1 || (0, t.v5)(T)),
				a = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				l = T => typeof T == "string" && T.startsWith("/"),
				c = (T, M) => C => new Promise((y, S) => {
					M.start();
					const L = T.subscribe(() => {
						const b = (0, i.yI)(T.getState());
						b === o.E ? (M.cancel(), L(), S("DeepLink: waitForAction out of context.")) : C(b) && (M.finish(b.type), L(), y(b))
					})
				}),
				f = (T, M, C) => (y, S) => new Promise((L, b) => {
					C.start();
					const P = M.location.pathname;
					y = new URL(y, window.location.href).pathname, P !== y && (C.cancel(), b(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${y}", but on "${P}". You need to redirect to "${y}", and unblockRouter in your Resolver, before you use this function.`));
					const O = T.subscribe(() => {
						const D = (0, i.yI)(T.getState()),
							B = M.location.pathname,
							Z = new URLSearchParams(M.location.search).get(d.BV);
						(B !== y || !!Z) && (C.cancel(), O(), b(`DeepLink: waitForPageAction user navigated away from "${y}" to "${B}${Z?M.location.search:""}"`)), D === o.E ? (C.cancel(), O(), b("DeepLink: waitForPageAction out of context.")) : S(D) && (C.finish(D.type), O(), L(D))
					})
				});

			function _(T) {
				const M = [],
					C = T.split("?")[0].split("/");
				for (let y of C) y.length !== 0 && (y.startsWith(":") ? M.push({
					value: y.substring(1),
					type: "dynamic"
				}) : M.push({
					value: y,
					type: "static"
				}));
				return M
			}
			async function h(T, M, C, y, S, L) {
				L.start();
				const b = _(T),
					O = await (await Promise.all([n.e(32375), n.e(78839), n.e(40517), n.e(8756)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					D = {};
				let B = "";
				for (const [U, Z] of b.entries())
					if (Z.type === "static") B = [B, Z.value].join("/");
					else if (Z.type === "dynamic" && a.is(Z.value) && Z.value in O) {
					L.resolverStart(Z.value);
					const ae = await O[Z.value]({
						deepLink: T,
						blockRouter: () => M(!0),
						unblockRouter: () => M(!1),
						routerHistory: y,
						resolvedValues: D,
						store: C,
						referringRoute: S,
						uri: {
							currentPartIdx: U,
							parts: b
						},
						waitForAction: c(C, L.createUserActionTracker(Z.value)),
						waitForPageAction: f(C, y, L.createUserActionTracker(Z.value))
					});
					L.resolverDone(Z.value), B = [B, ae].join("/"), D[Z.value] = ae
				} else throw L.cancel(), new Error(`DeepLink: Resolver with name '${Z.value}' is not supported.`);
				return L.done(), B
			}

			function A(T, M) {
				const C = ":account",
					y = ":zone",
					S = M.get("zone");
				if (S) return M.delete("zone"), `/${C}/${y}/${S}`;
				const L = M.get("account");
				if (L) return M.delete("account"), `/${C}/${L}`;
				if (T === "/overview") return `/${C}/${y}`;
				if (T === "/apps") return `/${C}/${y}/${m(T)}`;
				const b = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const P of b) {
					const O = P.length;
					if (T.startsWith(P) && (T.length === O || T[O] === "/")) return `/${C}/${y}${T}`
				}
				switch (T) {
					case "/account/billing":
						return `/${C}/billing`;
					case "/account/subscriptions":
						return `/${C}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${C}/dns-firewall`;
					case "/account/audit-log":
						return `/${C}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				S: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				p = n("../react/app/components/SomethingWrong.jsx"),
				u = n("../utils/sentry/lastSentEventId.ts"),
				m = n("../react/utils/zaraz.ts"),
				i = n("../react/utils/url.ts"),
				d = n("../node_modules/@cloudflare/elements/es/index.js"),
				g = n("../node_modules/@cloudflare/component-button/es/index.js"),
				t = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				r = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = n.n(r),
				l = n("../react/common/components/Page.tsx"),
				c = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function f() {
				return (0, e.useEffect)(() => {
					a().sendEvent("new page available refresh cta")
				}, []), o().createElement(l.Z, {
					type: "narrow",
					textAlign: "center",
					title: o().createElement(d.ZC, {
						textAlign: "center",
						fontSize: 5,
						fontWeight: 400
					}, o().createElement(t.Trans, {
						id: "error.new_page_version_available.title"
					})),
					description: o().createElement(t.Trans, {
						id: "error.new_page_version_available.description"
					})
				}, o().createElement(d.ZC, null, o().createElement(d.Ei, {
					height: 116,
					src: c,
					"aria-hidden": !0
				})), o().createElement(g.zx, {
					mt: 3,
					type: "primary",
					iconType: "refresh",
					onClick: () => window.location.reload()
				}, o().createElement(t.Trans, {
					id: "common.refresh"
				})))
			}
			const _ = ({
				sentryTag: h,
				children: A
			}) => o().createElement(s.SV, {
				beforeCapture: T => {
					m.tg === null || m.tg === void 0 || m.tg.track("page-error", {
						page: (0, i.Fl)(window.location.pathname)
					})
				},
				onError: T => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && n.g.logAppError(T)
				},
				fallback: ({
					error: T,
					eventId: M
				}) => {
					var C;
					const y = u.e.getEventId() || M;
					return (T == null || (C = T.message) === null || C === void 0 ? void 0 : C.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), o().createElement(f, null)) : o().createElement(p.Z, {
						type: "page",
						error: T,
						eventId: y,
						sentryTag: h
					})
				}
			}, A)
		},
		"../react/app/components/Footer.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				Z: function() {
					return H
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = n("../node_modules/@cloudflare/elements/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = n.n(i),
				g = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				t = n("../react/common/components/Apple/utils.tsx"),
				r = n("../react/utils/translator.tsx"),
				a = n("../../../../node_modules/moment/moment.js"),
				l = n.n(a);
			const c = () => {
					const I = l()().format("YYYY"),
						F = ne => {
							d().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: ne
							})
						};
					return o().createElement(f, {
						marginTop: "auto"
					}, o().createElement(_, null, o().createElement(h, null, o().createElement(A, null, "\xA9 ", I, " Cloudflare, Inc."), o().createElement(A, null, o().createElement(T, null, o().createElement(M, {
						showOnDeskTop: !1
					}, o().createElement(C, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => F("Support")
					}, o().createElement(r.cC, {
						id: "common.support"
					}))), o().createElement(M, null, o().createElement(C, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => F("Privacy Policy")
					}, o().createElement(r.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(M, null, o().createElement(C, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => F("Terms of Use")
					}, o().createElement(r.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(M, null, o().createElement(C, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => F("Cookie Preferences")
					}, o().createElement(r.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(M, null, o().createElement(C, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => F("Trademark")
					}, o().createElement(r.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(T, null, o().createElement(M, null, o().createElement(C, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => F("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(r.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				f = (0, u.createComponent)(({
					theme: I,
					marginTop: F
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: F
				})),
				_ = (0, u.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				h = (0, u.createComponent)(({
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
				A = (0, u.createComponent)(({
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
				T = (0, u.createComponent)(({
					theme: I
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: I.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				M = (0, u.createComponent)(({
					showOnDeskTop: I = !0,
					theme: F
				}) => ({
					color: F.colors.white,
					fontSize: F.fontSizes[1],
					height: "20px",
					display: I ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: F.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: F.space[3],
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
				C = (0, u.createStyledComponent)(({
					theme: I
				}) => ({
					textDecoration: "none",
					color: I.colors.white,
					"&:hover": {
						color: I.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var y = c,
				S = n("../react/pages/welcome/routes.ts"),
				L = n("../react/utils/cookiePreferences.ts"),
				b = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				O = () => {
					const [I, F] = (0, e.useState)(!1), ne = (0, L.wV)(), ce = () => {
						F(!0)
					}, G = () => {
						F(!1)
					}, J = ne && ne === "US" ? (0, r.ZP)("footer.cpra_cta.privacy_choices") : (0, r.ZP)("footer.cpra_cta.cookie_preferences"), W = {
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
					return o().createElement(p.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: W,
						onMouseEnter: ce,
						onMouseLeave: G
					}, o().createElement(p.Ei, {
						height: 15,
						src: b,
						mr: 2,
						alt: J
					}), J)
				};

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(I) {
					for (var F = 1; F < arguments.length; F++) {
						var ne = arguments[F];
						for (var ce in ne) Object.prototype.hasOwnProperty.call(ne, ce) && (I[ce] = ne[ce])
					}
					return I
				}, D.apply(this, arguments)
			}

			function B(I, F) {
				if (I == null) return {};
				var ne = U(I, F),
					ce, G;
				if (Object.getOwnPropertySymbols) {
					var J = Object.getOwnPropertySymbols(I);
					for (G = 0; G < J.length; G++) ce = J[G], !(F.indexOf(ce) >= 0) && (!Object.prototype.propertyIsEnumerable.call(I, ce) || (ne[ce] = I[ce]))
				}
				return ne
			}

			function U(I, F) {
				if (I == null) return {};
				var ne = {},
					ce = Object.keys(I),
					G, J;
				for (J = 0; J < ce.length; J++) G = ce[J], !(F.indexOf(G) >= 0) && (ne[G] = I[G]);
				return ne
			}
			const Z = (0, u.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,m.Yc)()?m.rS.colors.orange[6]:m.rS.colors.blue[4]}`
					}
				}), p.A),
				ae = (0, u.createStyledComponent)(({
					theme: I
				}) => ({
					color: I.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, g.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: I.colors.gray[4]
					}
				}), p.A),
				_e = I => {
					let {
						onClick: F
					} = I, ne = B(I, ["onClick"]);
					return React.createElement(Z, D({
						onClick: ce => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: ne.href
							}), F && F(ce)
						}
					}, ne))
				},
				de = I => {
					let {
						children: F,
						target: ne,
						rel: ce
					} = I, G = B(I, ["children", "target", "rel"]);
					return o().createElement(ae, D({
						target: ne || "_blank",
						rel: ce || "noopener noreferrer"
					}, G), F)
				},
				ue = (0, u.createStyledComponent)(({
					theme: I
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
							fontSize: I.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: I.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), p.Ul),
				K = (0, u.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, g.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), p.ZC);
			var H = () => {
				const I = [S.d.root.pattern].some(ne => (0, s.matchPath)(location.pathname, {
					path: ne
				}));
				if ((0, t.PP)()) return o().createElement(y, null);
				if (I) return null;
				const F = new Date().getFullYear();
				return o().createElement(p.$_, {
					height: (0, g.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto"
				}, o().createElement(K, null, o().createElement(ue, null, o().createElement(p.Li, null, o().createElement(de, {
					href: "https://support.cloudflare.com"
				}, (0, r.ZP)("common.support"))), o().createElement(p.Li, null, o().createElement(de, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(p.Dr, {
					textTransform: "capitalize"
				}, (0, r.ZP)("footer.system_status")))), o().createElement(p.Li, null, o().createElement(de, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, r.ZP)("footer.careers"))), o().createElement(p.Li, null, o().createElement(de, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, r.ZP)("footer.tos_reduced"))), o().createElement(p.Li, null, o().createElement(de, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, r.ZP)("footer.security_issues"))), o().createElement(p.Li, null, o().createElement(de, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, r.ZP)("footer.privacy_policy"))), o().createElement(p.Li, null, o().createElement(O, null)), o().createElement(p.Li, null, o().createElement(p.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", F, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(x, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../react/app/components/ErrorStatus.tsx"),
				p = n("../react/utils/translator.tsx");
			const u = m => o().createElement(s.Z, m, (0, p.ZP)("error.forbidden"));
			E.Z = u
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				S: function() {
					return _
				},
				Z: function() {
					return J
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				p = n("../node_modules/@cloudflare/elements/es/index.js"),
				u = n("../node_modules/@cloudflare/component-button/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				d = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = n.n(d),
				t = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				r = n("../react/common/components/AccessControl/index.js"),
				a = n("../react/common/components/ButtonWithDropdown.tsx"),
				l = n("../react/common/components/Dropdown/index.tsx"),
				c = n("../react/utils/translator.tsx"),
				f = n("../react/common/hooks/useGate.ts");
			const _ = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				h = () => {
					const W = (0, f.Z)("super-add-button-copy-change"),
						q = [{
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
					switch (W) {
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
							}, ...q];
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
							}, ...q];
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
							}, ...q];
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
							}, ...q];
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
							}, ...q];
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
			var T = n("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function M(W) {
				for (var q = 1; q < arguments.length; q++) {
					var $ = arguments[q] != null ? Object(arguments[q]) : {},
						te = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols($).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor($, Ee).enumerable
					})), te.forEach(function(Ee) {
						C(W, Ee, $[Ee])
					})
				}
				return W
			}

			function C(W, q, $) {
				return q = y(q), q in W ? Object.defineProperty(W, q, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[q] = $, W
			}

			function y(W) {
				var q = S(W, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function S(W, q) {
				if (typeof W != "object" || W === null) return W;
				var $ = W[Symbol.toPrimitive];
				if ($ !== void 0) {
					var te = $.call(W, q || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(W)
			}

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(W) {
					for (var q = 1; q < arguments.length; q++) {
						var $ = arguments[q];
						for (var te in $) Object.prototype.hasOwnProperty.call($, te) && (W[te] = $[te])
					}
					return W
				}, L.apply(this, arguments)
			}

			function b(W, q) {
				if (W == null) return {};
				var $ = P(W, q),
					te, Ee;
				if (Object.getOwnPropertySymbols) {
					var Te = Object.getOwnPropertySymbols(W);
					for (Ee = 0; Ee < Te.length; Ee++) te = Te[Ee], !(q.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call(W, te) || ($[te] = W[te]))
				}
				return $
			}

			function P(W, q) {
				if (W == null) return {};
				var $ = {},
					te = Object.keys(W),
					Ee, Te;
				for (Te = 0; Te < te.length; Te++) Ee = te[Te], !(q.indexOf(Ee) >= 0) && ($[Ee] = W[Ee]);
				return $
			}
			const O = W => {
					let {
						title: q,
						trackingEvent: $,
						icon: te,
						url: Ee,
						description: Te,
						disabled: Ue
					} = W, ke = b(W, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(D, L({
						to: !Ue && Ee || "#",
						"aria-disabled": Ue,
						onClick: () => {
							g().sendEvent($, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, ke), o().createElement(p.ZC, {
						display: "flex"
					}, o().createElement(s.J, {
						type: te,
						size: 24,
						mr: 2
					}), o().createElement(p.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(p.ZC, {
						fontSize: 3
					}, o().createElement(c.cC, q)), o().createElement(p.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(c.cC, Te)))))
				},
				D = (0, t.createStyledComponent)(({
					theme: W
				}) => {
					const q = {
						cursor: "pointer",
						backgroundColor: (0, m.Yc)() ? W.colors.gray[8] : W.colors.gray[9],
						color: W.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: W.colors.background,
						color: W.colors.gray[2],
						fontSize: W.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': q,
						':focus-within:not([aria-disabled="true"])': M({}, q, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: W.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, T.Link);
			var B = O;

			function U() {
				return U = Object.assign ? Object.assign.bind() : function(W) {
					for (var q = 1; q < arguments.length; q++) {
						var $ = arguments[q];
						for (var te in $) Object.prototype.hasOwnProperty.call($, te) && (W[te] = $[te])
					}
					return W
				}, U.apply(this, arguments)
			}

			function Z(W) {
				for (var q = 1; q < arguments.length; q++) {
					var $ = arguments[q] != null ? Object(arguments[q]) : {},
						te = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols($).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor($, Ee).enumerable
					})), te.forEach(function(Ee) {
						ae(W, Ee, $[Ee])
					})
				}
				return W
			}

			function ae(W, q, $) {
				return q = _e(q), q in W ? Object.defineProperty(W, q, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[q] = $, W
			}

			function _e(W) {
				var q = de(W, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function de(W, q) {
				if (typeof W != "object" || W === null) return W;
				var $ = W[Symbol.toPrimitive];
				if ($ !== void 0) {
					var te = $.call(W, q || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(W)
			}

			function ue(W, q) {
				if (W == null) return {};
				var $ = K(W, q),
					te, Ee;
				if (Object.getOwnPropertySymbols) {
					var Te = Object.getOwnPropertySymbols(W);
					for (Ee = 0; Ee < Te.length; Ee++) te = Te[Ee], !(q.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call(W, te) || ($[te] = W[te]))
				}
				return $
			}

			function K(W, q) {
				if (W == null) return {};
				var $ = {},
					te = Object.keys(W),
					Ee, Te;
				for (Te = 0; Te < te.length; Te++) Ee = te[Te], !(q.indexOf(Ee) >= 0) && ($[Ee] = W[Ee]);
				return $
			}
			const Q = "GLOBAL_ADD_DROPDOWN",
				H = (0, t.createStyledComponent)(({
					theme: W
				}) => ({
					"background-color": W.colors.blue[5]
				}), u.zx),
				I = ({
					disableProducts: W
				}) => {
					const q = h();
					return (0, e.useEffect)(() => (g().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						g().sendEvent("close add product dropdown", {
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
						zIndex: 1200
					}, q.map($ => {
						const te = $ || {},
							{
								disableOn: Ee,
								permissionCheck: Te
							} = te,
							Ue = ue(te, ["disableOn", "permissionCheck"]),
							ke = Ee && W[Ee],
							xe = Z({}, Ue, {
								disabled: ke
							});
						return Te ? o().createElement(r.Z, {
							key: $.title.id,
							edit: Te
						}, ({
							isEditable: Ke
						}) => Ke && o().createElement(B, xe)) : o().createElement(B, U({
							key: $.url
						}, xe))
					}))
				},
				F = ({
					disableProducts: W,
					topNavType: q
				}) => {
					const $ = () => (0, i.tq)() || q === "icon-only" ? o().createElement(p.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, o().createElement(H, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : q === "text-icon" || q === "icon-only-with-add-button" ? o().createElement(u.zx, {
						type: "primary",
						mr: q === "icon-only-with-add-button" ? 3 : 0
					}, o().createElement(o().Fragment, null, o().createElement(s.J, {
						label: "plus",
						type: "plus"
					}), " ", o().createElement(c.cC, {
						id: "common.add"
					}))) : o().createElement(u.zx, {
						type: "primary"
					}, o().createElement(c.cC, {
						id: "common.add"
					}), " ", o().createElement(s.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return o().createElement(ne, {
						role: "group",
						"data-testid": Q
					}, o().createElement(l.Lt, {
						trigger: q === "baseline" ? o().createElement(ce, null, o().createElement(s.J, {
							label: "plus",
							type: "plus"
						}), !(0, i.tq)() && o().createElement(o().Fragment, null, o().createElement(c.cC, {
							id: "common.add"
						}), " ", o().createElement(s.J, {
							label: "arrow",
							type: "caret-down"
						}))) : $(),
						menu: o().createElement(I, {
							disableProducts: W
						})
					}))
				},
				ne = (0, t.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				ce = (0, t.createStyledComponent)(({
					theme: W
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: W.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, m.Yc)() ? W.colors.gray[1] : W.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, m.Yc)() ? W.colors.gray[8] : W.colors.gray[9]
					}
				}), p.zx);
			var G = F,
				J = G
		},
		"../react/app/components/LoadingSuspense.tsx": function(x, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				p = n("../node_modules/@cloudflare/elements/es/index.js"),
				u = n("../react/utils/translator.tsx"),
				m = n("../react/app/components/ErrorStatus.tsx"),
				i = n("../react/common/components/EmptyPage.jsx"),
				d = n("../react/common/hooks/suspenseHelpers.ts");

			function g(a) {
				const [l, c] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const f = window.setTimeout(() => c(!0), a);
					return () => window.clearTimeout(f)
				}, []), l
			}
			const t = ({
					loadingTimeout: a = 1e3,
					stillLoadingTimeout: l = 9e3
				}) => {
					const c = g(a),
						f = g(l);
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
					}, o().createElement(s.g, {
						size: "2x"
					})), _)
				},
				r = ({
					children: a
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(t, null)
				}, a);
			E.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				C8: function() {
					return d
				},
				Sp: function() {
					return r
				},
				dr: function() {
					return u
				},
				lt: function() {
					return m
				},
				m6: function() {
					return t
				},
				n: function() {
					return g
				},
				yl: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const s = "/persistence/user",
				p = async () => {
					try {
						return await (await e.get(s, {
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, u = async a => {
					try {
						return await (await e.get(`/accounts/${a}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (l) {
						console.error(l)
					}
				}, m = async (a, l) => {
					try {
						return await (await e.post(`${s}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: a,
								accountId: l
							}),
							hideErrorAlert: !0
						})).body
					} catch (c) {
						return console.error(c), []
					}
				}, i = async (a, l) => {
					try {
						return await http.post(`/accounts/${a}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: l
							}),
							hideErrorAlert: !0
						}), !0
					} catch (c) {
						return console.error(c), !1
					}
				}, d = async a => {
					try {
						return await (await e.post(s, {
							body: JSON.stringify({
								darkMode: a
							})
						})).body
					} catch (l) {
						console.error(l)
					}
				}, g = async a => {
					try {
						return await (await e.post(`${s}/recents`, {
							body: JSON.stringify(a),
							hideErrorAlert: !0
						})).body
					} catch (l) {
						console.error(l)
					}
				}, t = async a => {
					try {
						return await (await e.post(`${s}/viewed-changes`, {
							body: JSON.stringify(a),
							hideErrorAlert: !0
						})).body
					} catch (l) {
						throw console.error(l), l
					}
				}, r = async a => {
					try {
						return await (await e.post(s + "/flags", {
							body: JSON.stringify(a)
						})).body
					} catch (l) {
						throw console.error(l), l
					}
				}
		},
		"../react/app/components/Persistence/hooks.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				y: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../react/app/components/Persistence/index.tsx");
			const p = () => (0, e.useContext)(s.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				Wl: function() {
					return g
				},
				lp: function() {
					return _
				},
				Z_: function() {
					return A
				},
				r7: function() {
					return O
				},
				Tv: function() {
					return ue
				},
				yZ: function() {
					return T.y
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../react/app/redux/index.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = n.n(p),
				m = n("../react/utils/bootstrap.ts"),
				i = n("../react/common/selectors/zoneSelectors.ts"),
				d = n("../react/app/components/Persistence/api.ts");
			const g = 10;

			function t(K) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var H = arguments[Q] != null ? Object(arguments[Q]) : {},
						I = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(H).filter(function(F) {
						return Object.getOwnPropertyDescriptor(H, F).enumerable
					})), I.forEach(function(F) {
						r(K, F, H[F])
					})
				}
				return K
			}

			function r(K, Q, H) {
				return Q = a(Q), Q in K ? Object.defineProperty(K, Q, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[Q] = H, K
			}

			function a(K) {
				var Q = l(K, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function l(K, Q) {
				if (typeof K != "object" || K === null) return K;
				var H = K[Symbol.toPrimitive];
				if (H !== void 0) {
					var I = H.call(K, Q || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(K)
			}
			const c = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: [],
					flags: {
						hasEnabledSecurityNavigation: !1
					}
				},
				f = t({}, c, {
					isLoading: !0,
					remainingStarSlots: 10,
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
				_ = (0, e.createContext)(f),
				h = _.Consumer,
				A = ({
					children: K,
					onDarkModeChangeCb: Q
				}) => {
					const [H, I] = (0, e.useState)(c), [F, ne] = (0, e.useState)(f.isLoading), ce = (0, m.$8)(), G = (0, s.p4)($ => (0, i.wH)($));
					(0, e.useEffect)(() => {
						ce ? (0, d.yl)().then($ => {
							$ && (I($), u().identify({
								hasEnabledSecurityNavigation: $.flags.hasEnabledSecurityNavigation
							}), Q($.darkMode))
						}).finally(() => ne(!1)) : ne(!1)
					}, [ce]);
					const J = ($, te) => !!H.favorites.find(Ee => Ee.type === "zone" && Ee.name === $ && Ee.accountId === te),
						W = g - H.favorites.length,
						q = $ => H.favorites.filter(Ee => Ee.type === "zone" && Ee.accountId === $).length < g;
					return o().createElement(_.Provider, {
						value: t({}, H, {
							isLoading: F,
							remainingStarSlots: W,
							actions: {
								canAccountStarZone: q,
								isZoneStarred: J,
								starZone: async ($, te) => {
									var Ee;
									const Te = !J($, te),
										Ue = q(te);
									if (Te && !Ue) {
										console.log("can not star zone - account is at limit");
										return
									}
									const ke = await (0, d.lt)($, te);
									u().sendEvent("click star zone", {
										isStarring: Te,
										totalStarredZones: ke.filter(xe => xe.accountId === te && xe.type === "zone").length,
										totalZones: G == null || (Ee = G.paginationData) === null || Ee === void 0 ? void 0 : Ee.info.total_count
									}), I(t({}, H, {
										favorites: ke
									}))
								},
								toggleSecurityNavigation: async $ => {
									var te;
									const Ee = H.flags.hasEnabledSecurityNavigation;
									await (0, d.Sp)({
										hasEnabledSecurityNavigation: (te = $) !== null && te !== void 0 ? te : !Ee
									}), u().identify({
										hasEnabledSecurityNavigation: !Ee
									}), I(t({}, H, {
										flags: {
											hasEnabledSecurityNavigation: !Ee
										}
									}))
								},
								setDarkMode: async $ => {
									const te = await (0, d.C8)($);
									I(te), Q(te.darkMode)
								},
								logRouteVisited: async $ => {
									var te;
									const Ee = await (0, d.n)($);
									I((te = Ee) !== null && te !== void 0 ? te : t({}, H))
								},
								viewChange: async $ => {
									const te = await (0, d.m6)($);
									I(t({}, H, {
										viewedChanges: te
									}))
								}
							}
						})
					}, K)
				};
			var T = n("../react/app/components/Persistence/hooks.ts"),
				M = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				C = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function y() {
				return y = Object.assign ? Object.assign.bind() : function(K) {
					for (var Q = 1; Q < arguments.length; Q++) {
						var H = arguments[Q];
						for (var I in H) Object.prototype.hasOwnProperty.call(H, I) && (K[I] = H[I])
					}
					return K
				}, y.apply(this, arguments)
			}

			function S(K, Q) {
				if (K == null) return {};
				var H = L(K, Q),
					I, F;
				if (Object.getOwnPropertySymbols) {
					var ne = Object.getOwnPropertySymbols(K);
					for (F = 0; F < ne.length; F++) I = ne[F], !(Q.indexOf(I) >= 0) && (!Object.prototype.propertyIsEnumerable.call(K, I) || (H[I] = K[I]))
				}
				return H
			}

			function L(K, Q) {
				if (K == null) return {};
				var H = {},
					I = Object.keys(K),
					F, ne;
				for (ne = 0; ne < I.length; ne++) F = I[ne], !(Q.indexOf(F) >= 0) && (H[F] = K[F]);
				return H
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
			var O = K => {
					let {
						isStarred: Q,
						size: H = 16
					} = K, I = S(K, ["isStarred", "size"]);
					const F = b[(0, M.Yc)() ? "dark" : "light"];
					return o().createElement(C.J, y({
						type: Q ? "star" : "star-outline",
						color: Q ? F.gold : F.gray,
						size: H
					}, I))
				},
				D = n("../node_modules/@cloudflare/elements/es/index.js");

			function B(K) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var H = arguments[Q] != null ? Object(arguments[Q]) : {},
						I = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(H).filter(function(F) {
						return Object.getOwnPropertyDescriptor(H, F).enumerable
					})), I.forEach(function(F) {
						U(K, F, H[F])
					})
				}
				return K
			}

			function U(K, Q, H) {
				return Q = Z(Q), Q in K ? Object.defineProperty(K, Q, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[Q] = H, K
			}

			function Z(K) {
				var Q = ae(K, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function ae(K, Q) {
				if (typeof K != "object" || K === null) return K;
				var H = K[Symbol.toPrimitive];
				if (H !== void 0) {
					var I = H.call(K, Q || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(K)
			}
			const _e = {
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
			var ue = (0, e.forwardRef)(({
				featurePreview: K = !1,
				isStarred: Q,
				onClickFn: H,
				isDisabled: I,
				testId: F,
				buttonText: ne,
				size: ce = "large",
				variant: G = "pill"
			}, J) => {
				const [W, q] = (0, e.useState)(!1), $ = _e[(0, M.Yc)() ? "dark" : "light"][Q && !K ? "active" : "default"], te = B({}, ce === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, ce === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, ce === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), Ee = {
					pill: "50vh",
					button: 4
				};
				return o().createElement(D.zx, {
					onMouseEnter: () => q(!0),
					onMouseLeave: () => q(!1),
					innerRef: J,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: te.paddingRight,
					gap: 1,
					pl: te.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: Ee[G],
					border: "1px solid",
					cursor: K || I ? "default" : "pointer",
					backgroundColor: W ? $.bgHover : $.bg,
					color: $.text,
					borderColor: $.border,
					onClick: H,
					opacity: I ? .5 : 1,
					disabled: I,
					fontSize: te.fontSize,
					height: te.height,
					"data-testid": F
				}, o().createElement(O, {
					isStarred: K ? !1 : Q,
					size: te.starIconSize
				}), ne)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				$n: function() {
					return l
				},
				IU: function() {
					return f
				},
				Wq: function() {
					return S
				},
				dL: function() {
					return _
				},
				fO: function() {
					return y
				},
				gw: function() {
					return b
				},
				hv: function() {
					return c
				},
				iY: function() {
					return r
				},
				jq: function() {
					return P
				},
				o_: function() {
					return T
				},
				us: function() {
					return C
				},
				wB: function() {
					return a
				},
				zJ: function() {
					return M
				}
			});
			var e = n("../react/common/components/AccessCheck/index.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts"),
				s = n("../react/common/selectors/zoneSelectors.ts"),
				p = n("../react/common/selectors/accountSelectors.ts"),
				u = n("../react/utils/zoneLevelAccess.ts"),
				m = n("../react/pages/stream/selectors.ts"),
				i = n("../react/pages/home/domain-registration/selectors.ts"),
				d = n("../react/pages/images/selectors.ts"),
				g = n("../react/pages/r2/selectors.ts");
			const t = O => !!(0, u.b)(O),
				r = O => t(O) ? (0, e.hT)(O) : !0,
				a = (O, D, B, U = "read") => {
					const Z = (0, s.nA)(O);
					return t(O) ? (0, e.WL)(O, (0, e.W9)(B, e.ZZ[U]), (0, e.j)(Z == null ? void 0 : Z.id)) : (0, p.Yj)(O)(D)[U]
				},
				l = (O, D, B, U = "read") => {
					const Z = (0, s.nA)(O),
						ae = e.zs.includes(B);
					return t(O) ? (0, e.WL)(O, ae ? B : (0, e.my)(B, e.ZZ[U === "edit" ? "update" : U]), (0, e.j)(Z == null ? void 0 : Z.id)) : (0, p.Yj)(O)(D)[U === "update" ? "edit" : U]
				},
				c = O => !!(0, m._Q)(O),
				f = O => (0, d.pT)(O),
				_ = O => (0, d.pT)(O) && (0, d.GH)(O),
				h = O => sourcingKitEnabledSelector(O),
				A = O => !!r2EnabledSelector(O),
				T = O => (0, g.Mv)(O),
				M = O => (0, o.$f)(O, "rulesets.magic_transit_allowed"),
				C = O => (0, o.$f)(O, "flowtrackd.magic_custom_config_allowed"),
				y = O => (0, o.$f)(O, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				S = O => (0, p.Le)(O, "ddos_protection", "l4_rulesets"),
				L = O => hasAccountEntitlements(O, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				b = O => (0, i.HO)(O),
				P = O => !(0, o.yD)(O) && !!l(O, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function(x, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = n.n(s),
				u = n("../../../../node_modules/prop-types/index.js"),
				m = n.n(u),
				i = n("webpack/sharing/consume/default/react-redux/react-redux"),
				d = n.n(i),
				g = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				t = n.n(g),
				r = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				a = n("../node_modules/@cloudflare/component-button/es/index.js"),
				l = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				c = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				f = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				_ = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				h = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				A = n.n(h),
				T = n("../react/common/actions/membershipActions.ts"),
				M = n("../react/utils/url.ts"),
				C = n("../react/app/components/Footer.tsx");

			function y(ue) {
				for (var K = 1; K < arguments.length; K++) {
					var Q = arguments[K] != null ? Object(arguments[K]) : {},
						H = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(Q).filter(function(I) {
						return Object.getOwnPropertyDescriptor(Q, I).enumerable
					})), H.forEach(function(I) {
						S(ue, I, Q[I])
					})
				}
				return ue
			}

			function S(ue, K, Q) {
				return K = L(K), K in ue ? Object.defineProperty(ue, K, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ue[K] = Q, ue
			}

			function L(ue) {
				var K = b(ue, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function b(ue, K) {
				if (typeof ue != "object" || ue === null) return ue;
				var Q = ue[Symbol.toPrimitive];
				if (Q !== void 0) {
					var H = Q.call(ue, K || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(ue)
			}
			const P = (0, r.createComponent)(({
					type: ue
				}) => ({
					height: ue !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				O = (0, r.createComponent)(({
					theme: ue,
					margin: K,
					size: Q = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: ue.colors.gray[3],
					height: K ? "auto" : "100%",
					padding: K ? 0 : ue.space[Q > 1 ? Q - 2 : 0],
					margin: K,
					justifyContent: "center",
					alignItems: "center"
				})),
				D = (0, r.createComponent)(() => ({
					textAlign: "left"
				})),
				B = (0, r.createComponent)(() => ({
					textAlign: "right"
				})),
				U = (0, r.createComponent)(({
					theme: ue
				}) => ({
					fontSize: ue.fontSizes[6]
				})),
				Z = (0, r.createComponent)(({
					theme: ue
				}) => ({
					fontSize: ue.fontSizes[4]
				})),
				ae = (0, r.createComponent)(({
					theme: ue
				}) => ({
					fontSize: ue.fontSizes[3]
				})),
				_e = (0, r.createComponent)(({
					theme: ue
				}) => ({
					width: "100%",
					height: 125,
					marginTop: ue.space[4],
					padding: ue.space[2]
				}), "textarea");
			class de extends o().Component {
				constructor(...K) {
					super(...K);
					S(this, "state", {
						value: "",
						submitted: !1
					}), S(this, "handleTextareaChange", Q => {
						this.setState({
							value: Q.target.value
						})
					}), S(this, "sendErrToSentry10", async () => {
						try {
							var Q, H, I, F;
							const ne = ((Q = window) === null || Q === void 0 || (H = Q.bootstrap) === null || H === void 0 || (I = H.data) === null || I === void 0 || (F = I.user) === null || F === void 0 ? void 0 : F.id) || "Unknown",
								ce = this.props.eventId || l.eW(),
								G = {
									name: ne,
									email: `${ne}@userid.com`,
									comments: this.state.value,
									eventId: ce,
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
								body: JSON.stringify(G)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (ne) {
							console.error(ne)
						}
					}), S(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), S(this, "renderContent", Q => o().createElement(g.I18n, null, H => o().createElement(P, {
						type: Q
					}, o().createElement(O, null, o().createElement(D, null, o().createElement(U, null, H.t("error.internal_issues")), o().createElement(Z, null, H.t("error.help_us")), o().createElement(_e, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: I => this.handleTextareaChange(I),
						disabled: this.state.submitted,
						placeholder: H.t("error.give_feedback")
					}), o().createElement(B, null, !this.state.submitted && o().createElement(a.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, H.t("common.submit")), this.state.submitted && o().createElement(ae, null, H.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: K,
						sentryTag: Q,
						membershipsList: H
					} = this.props;
					console.error(`SomethingWrong: ${K}`);
					let I = "";
					const F = (0, M.e1)();
					if (F) {
						var ne;
						const G = await H({
								parameters: {
									status: "accepted"
								}
							}),
							J = G == null || (ne = G.find(W => W.id === F)) === null || ne === void 0 ? void 0 : ne.roles;
						J && J.length && (I = J.join(", "))
					}
					const ce = `ErrorBoundary - ${K}`;
					c.Tb(ce, {
						tags: {
							errorBoundary: Q,
							normalizedPath: (0, M.Fl)(window.location.pathname),
							roles: I.length ? I : void 0
						}
					}), A().sendEvent("something wrong", {
						error: K,
						roles: I.length ? I : void 0
					})
				}
				render() {
					const {
						type: K
					} = this.props;
					return K === "fullscreen" ? o().createElement("div", null, o().createElement(f.h4, null, o().createElement(s.Link, {
						to: "/"
					}, o().createElement(_.TR, null))), this.renderContent(K), o().createElement(C.Z, null)) : this.renderContent(K)
				}
			}
			de.propTypes = {
				type: m().oneOf(["fullscreen", "page"]),
				error: m().oneOfType([m().string, m().object]),
				eventId: m().string,
				sentryTag: m().string,
				membershipsList: m().func
			}, E.Z = (0, i.connect)(() => ({}), {
				membershipsList: T.YT
			})(de)
		},
		"../react/app/providers/storeContainer.js": function(x, E, n) {
			"use strict";
			n.d(E, {
				bh: function() {
					return B
				}
			});
			var e = n("../../../../node_modules/redux/es/redux.js"),
				o = n("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				s = n.n(o),
				p = n("../../../../node_modules/redux-thunk/es/index.js"),
				u = n("../../../../node_modules/redux-persist/es/index.js"),
				m = n("../../../../node_modules/redux-persist/lib/storage/index.js"),
				i = n("../react/app/rootReducer.js"),
				d = n("../react/app/redux/normalizer.js"),
				g = n("../../../../node_modules/@sentry/react/esm/redux.js"),
				t = n("../react/app/providers/sentryTransformer.js"),
				r = n("../react/app/reducerRegistry.js"),
				a = n("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				l = n("../react/common/sagas/index.js"),
				c = n("../react/app/redux/processActionMiddleware.js"),
				f = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				_ = n("../../../../node_modules/is-promise/index.js"),
				h = n.n(_);

			function A(U) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var ae = arguments[Z] != null ? Object(arguments[Z]) : {},
						_e = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ae).filter(function(de) {
						return Object.getOwnPropertyDescriptor(ae, de).enumerable
					})), _e.forEach(function(de) {
						T(U, de, ae[de])
					})
				}
				return U
			}

			function T(U, Z, ae) {
				return Z = M(Z), Z in U ? Object.defineProperty(U, Z, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[Z] = ae, U
			}

			function M(U) {
				var Z = C(U, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function C(U, Z) {
				if (typeof U != "object" || U === null) return U;
				var ae = U[Symbol.toPrimitive];
				if (ae !== void 0) {
					var _e = ae.call(U, Z || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(U)
			}
			const y = {
					key: "cf-redux-store",
					storage: m.Z,
					whitelist: ["accountAccess", "invite"]
				},
				S = (0, a.ZP)(),
				b = [({
					dispatch: U
				}) => Z => ae => h()(ae) ? ae.then(_e => U(_e)) : Z(ae), S, p.Z, c.Z, d.qR],
				P = U => (0, u.Wq)(y, A({}, i.Z, U));

			function O() {
				const U = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					ae = e.compose((0, e.applyMiddleware)(...b), g.w({
						actionTransformer: t.b,
						stateTransformer: t.O
					})),
					_e = {},
					de = (0, e.createStore)(P(r.Z.getReducers()), _e, ae);
				S.run(l.Z), (0, u.p5)(de);
				const K = (n.g.bootstrap || {}).data || {};
				return de.dispatch((0, f.mW)("user", K.user)), de
			}
			let D;
			r.Z.setChangeListener(U => {
				var Z;
				D && ((Z = D) === null || Z === void 0 ? void 0 : Z.replaceReducer) && (D.replaceReducer(P(U)), (0, u.p5)(D))
			});

			function B() {
				return D || (D = O()), D
			}
		},
		"../react/app/redux/index.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				TZ: function() {
					return s
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
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e);
			const s = () => (0, e.useStore)(),
				p = () => s().getState(),
				u = () => (0, e.useDispatch)(),
				m = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(x, E, n) {
			"use strict";
			n.d(E, {
				$J: function() {
					return a
				},
				Oy: function() {
					return r
				},
				SC: function() {
					return g
				},
				ZP: function() {
					return l
				},
				dJ: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				o = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				s = n.n(o);

			function p(c) {
				for (var f = 1; f < arguments.length; f++) {
					var _ = arguments[f] != null ? Object(arguments[f]) : {},
						h = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(_).filter(function(A) {
						return Object.getOwnPropertyDescriptor(_, A).enumerable
					})), h.forEach(function(A) {
						u(c, A, _[A])
					})
				}
				return c
			}

			function u(c, f, _) {
				return f = m(f), f in c ? Object.defineProperty(c, f, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[f] = _, c
			}

			function m(c) {
				var f = i(c, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function i(c, f) {
				if (typeof c != "object" || c === null) return c;
				var _ = c[Symbol.toPrimitive];
				if (_ !== void 0) {
					var h = _.call(c, f || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(c)
			}
			const d = p({}, o),
				g = (c, f, _, h = {}) => {
					const A = c === "delete" ? "del" : c.toLowerCase();
					return _ && A !== "del" && (h.body = _), d[A](f, h)
				},
				t = (c, f) => (c.meta.params = f, c),
				r = (c, f, _, h, {
					body: A = {}
				}) => {
					const {
						result: T,
						messages: M,
						result_info: C
					} = A, y = Object.values(f);
					if (c.meta.method === "delete") {
						const S = y[y.length - 1];
						c.meta.id = typeof S == "object" ? S.id : S
					}
					return c.payload = T, M && (c.meta.messages = M), y.length && (c.meta.params = f), C && (c.meta.paginationData = {
						info: C,
						actionParameters: y,
						options: _[0],
						insertionOffset: 0
					}), c
				},
				a = (c, f, _, h, A) => (c.payload = A && A.body && A.body.errors, c.meta.messages = A && A.body && A.body.messages, c.meta.params = f, c.apiError = A, c);

			function l(c, f, _, h) {
				const A = (0, e.RM)(c, f, _, h).apiFetch(g).on("start", t).on("success", r).on("error", a),
					T = A.mock;
				return A.mock = M => (T((...C) => {
					const y = M(...C);
					return y && typeof y == "object" && "result" in y ? y : {
						result: y
					}
				}), A), A
			}
		},
		"../react/app/redux/normalizer.js": function(x, E, n) {
			"use strict";
			n.d(E, {
				P1: function() {
					return g
				},
				jQ: function() {
					return i
				},
				qR: function() {
					return t
				},
				uc: function() {
					return d
				}
			});
			var e = n("../react/pages/home/alerts/config.tsx"),
				o = n("../react/pages/workers/entityTypes.ts"),
				s = n("../react/pages/email/types.ts"),
				p = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				u = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				m = n.n(u);
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
				d = r => r.entities,
				g = (...r) => (0, p.P1)(i, d, ...r),
				t = (0, p.QB)(i)
		},
		"../react/app/redux/utils.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				F: function() {
					return s
				},
				_: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const o = p => (u, m, i) => (0, e.SC)(u, m, i, {
					hideErrorAlert: !0
				}).catch(p),
				s = p => u => {
					if (u.status === p) return u;
					throw u
				}
		},
		"../react/common/actionTypes.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return g
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
				s = "MODAL_OPEN",
				p = "MODAL_CLOSE",
				u = "TOGGLE_ON",
				m = "TOGGLE_OFF",
				i = "SET_ACTIVE",
				d = "CLEAR_ACTIVE",
				g = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				AX: function() {
					return a
				},
				YT: function() {
					return g
				},
				ct: function() {
					return i
				},
				d6: function() {
					return t
				},
				kt: function() {
					return r
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/common/constants/index.ts");

			function s(l) {
				for (var c = 1; c < arguments.length; c++) {
					var f = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(f).filter(function(h) {
						return Object.getOwnPropertyDescriptor(f, h).enumerable
					})), _.forEach(function(h) {
						p(l, h, f[h])
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
					const c = l.payload.map(f => s({}, f, {
						membershipId: f.id,
						id: f.account.id
					}));
					return s({}, l, {
						payload: c
					})
				},
				d = l => {
					const c = i(l);
					return Array.isArray(c.payload) ? s({}, l, {
						payload: c.payload[0]
					}) : s({}, l, {
						payload: null
					})
				},
				g = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", i),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...l) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: l
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", d)
		},
		"../react/common/actions/modalActions.ts": function(x, E, n) {
			"use strict";
			n.r(E), n.d(E, {
				closeModal: function() {
					return p
				},
				openModal: function() {
					return s
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function s(u, m, i = o) {
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
		"../react/common/actions/notificationsActions.ts": function(x, E, n) {
			"use strict";
			n.r(E), n.d(E, {
				add: function() {
					return u
				},
				error: function() {
					return g
				},
				info: function() {
					return i
				},
				success: function() {
					return m
				},
				warn: function() {
					return d
				}
			});
			var e = n("../react/common/actionTypes.ts");

			function o(t) {
				return {
					type: e.Ng,
					notification: t
				}
			}

			function s(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let p = 0;

			function u(t, r, a = {}) {
				return a = a || {},
					function(l) {
						let c = p++,
							f = {
								id: c,
								type: t,
								message: r,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									l(s(c)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						l(o(f))
					}
			}

			function m(t, r) {
				return u("success", t, r)
			}

			function i(t, r) {
				return u("info", t, r)
			}

			function d(t, r) {
				return u("warning", t, r)
			}

			function g(t, r) {
				return u("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				BT: function() {
					return i
				},
				Ut: function() {
					return h
				},
				V_: function() {
					return A
				},
				Y9: function() {
					return f
				},
				Z0: function() {
					return M
				},
				mp: function() {
					return _
				},
				r3: function() {
					return T
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/app/redux/utils.ts");

			function s(C) {
				for (var y = 1; y < arguments.length; y++) {
					var S = arguments[y] != null ? Object(arguments[y]) : {},
						L = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(S).filter(function(b) {
						return Object.getOwnPropertyDescriptor(S, b).enumerable
					})), L.forEach(function(b) {
						p(C, b, S[b])
					})
				}
				return C
			}

			function p(C, y, S) {
				return y = u(y), y in C ? Object.defineProperty(C, y, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[y] = S, C
			}

			function u(C) {
				var y = m(C, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function m(C, y) {
				if (typeof C != "object" || C === null) return C;
				var S = C[Symbol.toPrimitive];
				if (S !== void 0) {
					var L = S.call(C, y || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(C)
			}
			const i = (0, e.C)("user").get`/user`,
				d = (0, e.C)("user").patch`/user`,
				g = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				l = (0, e.C)("user").delete`/user/two_factor_authentication`,
				c = (0, e.C)("user").put`/user/email`;

			function f(...C) {
				return c(...C)
			}
			const _ = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				h = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(C => s({}, C, {
					body: s({}, C.body, {
						result: {}
					})
				}))),
				A = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				T = (0, e.C)("userDetails").get`/user/details`,
				M = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(x, E, n) {
			"use strict";
			var e = n("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = n("../react/utils/zoneLevelAccess.ts");
			const s = ({
				legacyPermission: p,
				canAccess: u,
				children: m,
				render: i
			}) => {
				const d = !!(0, o.P)();
				let g;
				typeof u == "boolean" && u !== void 0 && d ? g = {
					read: u,
					list: u,
					create: u,
					update: u,
					delete: u,
					sign: u
				} : g = (0, e.Z)(p);
				const t = i || m;
				return t ? t(g) : null
			};
			E.Z = s
		},
		"../react/common/components/AccessCheck/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				L8: function() {
					return t
				},
				W9: function() {
					return g
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
				s = "com.cloudflare.edge.",
				p = "com.cloudflare.api.account.zone.",
				u = ["com.cloudflare.api.app.manage"];
			let m = function(a) {
				return a.read = "read", a.list = "list", a.create = "create", a.update = "update", a.delete = "delete", a.sign = "sign", a.refresh = "refresh", a
			}({});
			const i = (a, l) => `${o}${a?a+".":""}${l}`,
				d = (a, l) => `${p}${a?a+".":""}${l}`,
				g = (a, l) => `${s}${a}.${l}`,
				t = (a = "") => `${o}${a}`,
				r = (a = "") => `${p}${a}`
		},
		"../react/common/components/AccessCheck/index.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				L8: function() {
					return p.L8
				},
				W9: function() {
					return p.W9
				},
				WL: function() {
					return s.WL
				},
				ZP: function() {
					return o.Z
				},
				ZZ: function() {
					return p.ZZ
				},
				hT: function() {
					return s.hT
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
			var e = n("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = n("../react/common/components/AccessCheck/AccessCheck.tsx"),
				s = n("../react/common/components/AccessCheck/useAccessResolver.ts"),
				p = n("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(x, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../react/app/redux/index.ts"),
				p = n("../react/common/selectors/accountSelectors.ts"),
				u = n("../react/pages/zone-versioning/selectors.ts");

			function m(i) {
				const {
					read: d,
					edit: g
				} = (0, s.p4)(p.Yj)(i);
				let t = g;
				if (i != "zone_versioning") {
					const a = (0, s.p4)(u.G);
					(a == null ? void 0 : a.isLocked) && (t = !1)
				}
				return (0, e.useMemo)(() => ({
					read: d,
					list: d,
					create: t,
					update: t,
					delete: t,
					sign: t
				}), [d, t])
			}
			E.Z = m
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				WL: function() {
					return a
				},
				hT: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/lodash-es/set.js"),
				o = n("../react/common/selectors/accountSelectors.ts"),
				s = n("../react/pages/home/members/utils.ts"),
				p = n("../react/common/components/AccessCheck/constants.ts"),
				u = n("../react/pages/zone-versioning/selectors.ts");
			const m = {
					allow: "allow",
					deny: "deny"
				},
				i = 0,
				d = 1,
				g = 2,
				t = 3;

			function r(y, S, L, b) {
				let P = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					O;
				for (O in P) P[O] = a(y, `${S}.${O}`, L, b);
				return P
			}

			function a(y, S, L, b) {
				var P;
				if (l(S) && !c(S)) {
					const Z = (0, u.G)(y);
					if (Z == null ? void 0 : Z.isLocked) return !1
				}
				const O = (P = (0, o.D0)(y)) === null || P === void 0 ? void 0 : P.id,
					D = O ? [`com.cloudflare.api.account.${O}`] : void 0,
					B = (0, s.vq)(O);
				return !!_(y, B, S, L, b || D)
			}

			function l(y) {
				return ![p.ZZ.read, p.ZZ.list].some(S => y.endsWith(S))
			}

			function c(y) {
				return y.includes("zone.versioning")
			}

			function f(y) {
				const S = (0, o.Ko)(y);
				let L = !1;
				return S == null || S.forEach(b => {
					b.access === m.allow && b.permission_groups.forEach(P => {
						var O;
						(P == null || (O = P.meta) === null || O === void 0 ? void 0 : O.scopes) === p.u1 && (L = !0)
					})
				}), L
			}

			function _(y, S, L, b, P) {
				const O = (0, o.Ko)(y),
					D = {};
				O == null || O.forEach(ae => {
					var _e;
					const de = ae.access;
					let ue = i;
					if (L && ae.permission_groups.forEach(K => {
							var Q, H;
							S == null || (Q = S.find(I => I.id === K.id)) === null || Q === void 0 || (H = Q.permissions) === null || H === void 0 || H.forEach(I => {
								ue = Math.max(ue, h(I, L))
							})
						}), ue !== i && !!b) {
						let K = i;
						ae.resource_groups.forEach(Q => {
							K = Math.max(K, T(Q.scope, b, P))
						}), ue = K === i ? K : ue + K
					}(D == null || (_e = D[de]) === null || _e === void 0 ? void 0 : _e[ue]) || (0, e.Z)(D, [de, ue], []), D[de][ue].push(ae)
				});
				const B = D[m.allow] && Object.keys(D[m.allow]).map(ae => parseInt(ae)),
					U = D[m.deny] && Object.keys(D[m.deny]).map(ae => parseInt(ae)),
					Z = Math.max.apply(Math, B);
				return Z === i || Math.max.apply(Math, U) >= Z ? null : D[m.allow][Z]
			}

			function h(y, S) {
				if (y.key === S || A(y.key, S)) return t;
				for (const L of (y == null ? void 0 : y.implies) || []) {
					let b = h(L, S);
					if (b > i) return b
				}
				return i
			}

			function A(y, S) {
				const L = S == null ? void 0 : S.lastIndexOf(".");
				return L === -1 ? !1 : (S == null ? void 0 : S.substring(0, L)) + ".*" === y
			}

			function T(y, S, L) {
				var b;
				let P = i;
				if (y == null || (b = y.objects) === null || b === void 0 || b.forEach(O => {
						P = Math.max(P, C(O, S))
					}), P === i) return P;
				if (y.key !== "*") switch (!0) {
					case M(y.key, L) > i:
					case (!(L == null ? void 0 : L.length) && P === t):
						break;
					case (P === d && M(y.key, [S]) > i):
						P = M(y.key, [S]);
						break;
					default:
						return i
				}
				for (const O of y.subset_of || [])
					if (M(O.key, L) === i) return i;
				return P
			}

			function M(y, S = []) {
				for (const L of S || []) {
					if (y === L) return t;
					if (A(y, L)) return g
				}
				return i
			}

			function C(y, S) {
				return y.key === S ? t : y.key === "*" ? d : A(y.key, S) ? g : i
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(x, E, n) {
			"use strict";
			n.d(E, {
				a: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e),
				s = n("../react/common/selectors/accountSelectors.ts");
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
						accountId: g,
						legacyPermission: t
					} = i;
					let {
						read: r,
						edit: a
					} = i;
					const l = {};
					t && (a = `#${t}:edit`, r = `#${t}:read`);
					const c = d || g;
					if (r) {
						const f = Array.isArray(r) ? r : [r];
						l.isReadable = f.some(_ => {
							const h = p(_);
							return (0, s.DT)(m, c, A => !!(A[h.key] && A[h.key][h.value]))
						})
					}
					if (a) {
						const f = Array.isArray(a) ? a : [a];
						l.isEditable = f.some(_ => {
							const h = p(_);
							return (0, s.DT)(m, c, A => !!(A[h.key] && A[h.key][h.value]))
						})
					}
					return l
				};
			E.Z = (0, e.connect)(u)
		},
		"../react/common/components/AccessControl/index.js": function(x, E, n) {
			"use strict";
			var e = n("../../../../node_modules/prop-types/index.js"),
				o = n.n(e),
				s = n("../react/app/HoCs/withEntities.tsx"),
				p = n("../react/common/components/AccessControl/SAAConnect.js");

			function u(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						c = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), c.forEach(function(f) {
						m(r, f, l[f])
					})
				}
				return r
			}

			function m(r, a, l) {
				return a = i(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function i(r) {
				var a = d(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function d(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var c = l.call(r, a || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}

			function g(r) {
				const l = ["isReadable", "isEditable"].reduce((c, f) => r.hasOwnProperty(f) ? u({}, c, {
					[f]: r[f]
				}) : c, {});
				return r.children(l)
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
			const t = (0, s.Z)((0, p.Z)(g));
			t.displayName = "AccessControl", E.Z = t
		},
		"../react/common/components/Apple/utils.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
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
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				u = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const m = () => d.test(window.location.pathname) || s.E.has(p.Qq),
				i = () => s.E.get(p.Qq),
				d = /^\/login\/apple(\/)?/,
				t = [d, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let l = !1;
					t.forEach(f => {
						if (f.test(window.location.pathname)) {
							l = !0;
							return
						}
					});
					const c = m() && l;
					return c && (0, u.C8)(u.LF.OFF), c
				},
				a = l => {
					l && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let c = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					l && (c = c + `&jwt=${l}`), window.location.href = c
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
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
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../node_modules/@cloudflare/component-button/es/index.js"),
				p = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				m = n.n(u),
				i = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../react/common/components/Dropdown/index.tsx"),
				g = n("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function t() {
				return t = Object.assign ? Object.assign.bind() : function(f) {
					for (var _ = 1; _ < arguments.length; _++) {
						var h = arguments[_];
						for (var A in h) Object.prototype.hasOwnProperty.call(h, A) && (f[A] = h[A])
					}
					return f
				}, t.apply(this, arguments)
			}

			function r(f, _) {
				if (f == null) return {};
				var h = a(f, _),
					A, T;
				if (Object.getOwnPropertySymbols) {
					var M = Object.getOwnPropertySymbols(f);
					for (T = 0; T < M.length; T++) A = M[T], !(_.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(f, A) || (h[A] = f[A]))
				}
				return h
			}

			function a(f, _) {
				if (f == null) return {};
				var h = {},
					A = Object.keys(f),
					T, M;
				for (M = 0; M < A.length; M++) T = A[M], !(_.indexOf(T) >= 0) && (h[T] = f[T]);
				return h
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
					color: (0, g.Yc)() ? f.colors.text : void 0
				},
				"& button:hover": {
					color: (0, g.Yc)() ? f.colors.text : void 0
				}
			}));

			function c(f) {
				let {
					menu: _,
					containerProps: h,
					disabled: A,
					disabledDropdown: T = A
				} = f, M = r(f, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: C
				} = (0, u.useI18n)();
				return o().createElement(l, t({}, h, {
					role: "group"
				}), o().createElement(s.zx, t({}, M, {
					disabled: A
				})), o().createElement(d.Lt, {
					trigger: o().createElement(s.zx, {
						type: M.type,
						"aria-haspopup": "menu",
						disabled: T
					}, o().createElement(p.J, {
						type: "caret-down",
						label: C("common.more"),
						size: 12
					})),
					menu: _
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				v: function() {
					return i
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../node_modules/@cloudflare/elements/es/index.js"),
				p = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				u = n("../react/common/hooks/useIntersectionObserver.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(d) {
					for (var g = 1; g < arguments.length; g++) {
						var t = arguments[g];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (d[r] = t[r])
					}
					return d
				}, m.apply(this, arguments)
			}

			function i(d) {
				const g = (0, e.useRef)(null),
					[t, r] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const l = g.current;
					if (l) {
						const {
							bottom: c
						} = l.getBoundingClientRect();
						c > window.innerHeight && r(!0)
					}
				}, []);
				const a = (0, u.S)(l => {
					for (const c of l) c.intersectionRatio < 1 && r(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const l = g.current;
					if (l && a) return a.observe(l), () => {
						a.unobserve(l)
					}
				}, [a]), o().createElement(s.ZC, m({
					role: "menu",
					innerRef: g,
					position: "absolute",
					right: "0",
					backgroundColor: p.rS.colors.background,
					p: 1,
					color: "gray.4",
					border: "1px solid",
					borderColor: "gray.8",
					boxShadow: "rgba(0, 0, 0, 0.025) -1px 2px 1px 1px, rgba(0, 0, 0, 0.05) -3px 3px 7px 0px",
					borderRadius: 2,
					textAlign: "left",
					whiteSpace: "nowrap",
					overflow: "hidden"
				}, t ? {
					bottom: "100%",
					mb: "2px"
				} : {
					top: "100%",
					mt: "2px"
				}, {
					zIndex: 1e3,
					minWidth: 170
				}, d))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				s: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = n.n(p);

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(h) {
					for (var A = 1; A < arguments.length; A++) {
						var T = arguments[A];
						for (var M in T) Object.prototype.hasOwnProperty.call(T, M) && (h[M] = T[M])
					}
					return h
				}, m.apply(this, arguments)
			}

			function i(h, A) {
				if (h == null) return {};
				var T = d(h, A),
					M, C;
				if (Object.getOwnPropertySymbols) {
					var y = Object.getOwnPropertySymbols(h);
					for (C = 0; C < y.length; C++) M = y[C], !(A.indexOf(M) >= 0) && (!Object.prototype.propertyIsEnumerable.call(h, M) || (T[M] = h[M]))
				}
				return T
			}

			function d(h, A) {
				if (h == null) return {};
				var T = {},
					M = Object.keys(h),
					C, y;
				for (y = 0; y < M.length; y++) C = M[y], !(A.indexOf(C) >= 0) && (T[C] = h[C]);
				return T
			}

			function g(h) {
				for (var A = 1; A < arguments.length; A++) {
					var T = arguments[A] != null ? Object(arguments[A]) : {},
						M = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(T).filter(function(C) {
						return Object.getOwnPropertyDescriptor(T, C).enumerable
					})), M.forEach(function(C) {
						t(h, C, T[C])
					})
				}
				return h
			}

			function t(h, A, T) {
				return A = r(A), A in h ? Object.defineProperty(h, A, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[A] = T, h
			}

			function r(h) {
				var A = a(h, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function a(h, A) {
				if (typeof h != "object" || h === null) return h;
				var T = h[Symbol.toPrimitive];
				if (T !== void 0) {
					var M = T.call(h, A || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(h)
			}
			const l = ({
					theme: h
				}) => {
					const A = {
						cursor: "pointer",
						background: h.colors.gray[9],
						color: h.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: h.space[2],
						background: h.colors.background,
						color: h.colors.gray[3],
						fontSize: h.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						'&:hover:not(:disabled):not([aria-disabled="true"])': A,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': g({}, A, {
							boxShadow: "none",
							borderRadius: 0
						}),
						'&:is(:disabled, [aria-disabled="true"])': {
							color: h.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				c = (0, s.createComponent)(l, "a"),
				f = (0, s.createComponent)(l, "button");

			function _(h) {
				let {
					disabled: A = !1
				} = h, T = i(h, ["disabled"]);
				const M = (0, p.useHistory)(),
					C = {
						role: "menuitem"
					};
				if ("href" in T && typeof T.href == "string") return o().createElement(c, m({
					"aria-disabled": A
				}, C, T, {
					href: A ? void 0 : T.href,
					onClick: S => {
						var L;
						if (A) return S.stopPropagation();
						S.preventDefault(), (L = T.onClick) === null || L === void 0 || L.call(T, S), M.push(T.href)
					}
				}));
				var y;
				return o().createElement(f, m({
					type: (y = T.type) !== null && y !== void 0 ? y : "button"
				}, C, T, {
					disabled: A
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(x, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/prop-types/index.js"),
				p = n.n(s),
				u = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const m = ({
				children: i
			}) => o().createElement(u.xu, {
				height: 411
			}, i);
			m.propTypes = {
				children: p().node
			}, E.Z = m
		},
		"../react/common/components/ModalManager.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
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
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("webpack/sharing/consume/default/react-redux/react-redux");
			const p = f => f.application.modals;
			var u = n("../react/common/actions/modalActions.ts"),
				m = n("../../../../node_modules/swr/core/dist/index.mjs"),
				i = n("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function d() {
				return d = Object.assign ? Object.assign.bind() : function(f) {
					for (var _ = 1; _ < arguments.length; _++) {
						var h = arguments[_];
						for (var A in h) Object.prototype.hasOwnProperty.call(h, A) && (f[A] = h[A])
					}
					return f
				}, d.apply(this, arguments)
			}
			const g = o().createContext(null);
			class t extends o().Component {
				render() {
					const {
						modals: _,
						closeModal: h
					} = this.props;
					return o().createElement(o().Fragment, null, _.map(({
						ModalComponent: A,
						props: T = {},
						id: M
					}) => {
						const C = () => {
							typeof T.onClose == "function" && T.onClose(), h(A)
						};
						return o().createElement(g.Provider, {
							key: M,
							value: {
								closeModal: C
							}
						}, o().createElement(m.J$, {
							value: i.ZP
						}, o().createElement(A, d({}, T, {
							isOpen: !0,
							closeModal: C
						}))))
					}))
				}
			}

			function r() {
				const f = o().useContext(g);
				if (!f) throw new Error("useModalContext must be used within a ModalContext");
				return f
			}

			function a() {
				const f = (0, s.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(..._) {
						return f(u.openModal(..._))
					}, [f]),
					closeModal: (0, e.useCallback)(function(..._) {
						return f(u.closeModal(..._))
					}, [f])
				}
			}
			var c = (0, s.connect)(f => ({
				modals: p(f)
			}), u)(t)
		},
		"../react/common/components/Page.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				Z: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function p(u) {
				return o().createElement(s.T3, u)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				BQ: function() {
					return t
				},
				Gn: function() {
					return d
				},
				JR: function() {
					return g
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
					return s
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
				s = "date-from",
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
			let g = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				t = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Cf: function() {
					return g
				},
				hJ: function() {
					return d
				},
				ys: function() {
					return i
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(c) {
						return Object.getOwnPropertyDescriptor(a, c).enumerable
					})), l.forEach(function(c) {
						p(t, c, a[c])
					})
				}
				return t
			}

			function p(t, r, a) {
				return r = u(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function u(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let i = function(t) {
				return t.USER_CREATE_TOKEN = "click user api token create button", t.USER_TEMPLATE_USED = "click user api token template", t.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", t.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", t.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", t.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", t.USER_TOKEN_CREATED = "create user api token", t.ACCOUNT_CREATE_TOKEN = "click account api token create button", t.ACCOUNT_TEMPLATE_USED = "click account api token template", t.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", t.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", t.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", t.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", t.ACCOUNT_TOKEN_CREATED = "create account api token", t
			}({});
			const d = ({
					name: t,
					additionalData: r = {}
				}) => {
					o().sendEvent(t, s({}, r || {}))
				},
				g = () => {
					var t;
					return (t = Object.values(i)) === null || t === void 0 ? void 0 : t.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				v: function() {
					return e
				}
			});
			let e = function(o) {
				return o.FIELD = "change field", o.OPERATOR = "change operator", o
			}({})
		},
		"../react/common/constants/analytics/botScoreSrc.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				EG: function() {
					return s
				},
				Me: function() {
					return m
				},
				Vv: function() {
					return u
				},
				sk: function() {
					return p
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/index.js"),
				o = n("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let s = function(i) {
				return i.NOT_COMPUTED = "not_computed", i.MACHINE_LEARNING = "machine_learning", i.HEURISTICS = "heuristics", i.BEHAVIORAL_ANALYSIS = "behavioral_analysis", i.JS_FINGERPRINTING = "js_fingerprinting", i.VERIFIED_BOT = "verified_bot", i.CLOUDFLARE_SERVICE = "cloudflare_service", i
			}({});
			const p = {
					[s.NOT_COMPUTED]: "Not Computed",
					[s.MACHINE_LEARNING]: "Machine Learning",
					[s.HEURISTICS]: "Heuristics",
					[s.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[s.JS_FINGERPRINTING]: "JS Fingerprinting",
					[s.VERIFIED_BOT]: "Verified Bot",
					[s.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				u = i => Array.isArray(i) ? i.map(d => {
					var g;
					return (g = p[d]) !== null && g !== void 0 ? g : d
				}) : p[i],
				m = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [s.NOT_COMPUTED, s.MACHINE_LEARNING, s.HEURISTICS, s.BEHAVIORAL_ANALYSIS, s.JS_FINGERPRINTING, s.VERIFIED_BOT, s.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Gq: function() {
					return p
				},
				g$: function() {
					return s
				},
				WX: function() {
					return e
				},
				E0: function() {
					return g
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
				s = "automatic_platform_optimization",
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
			var t = n("../react/common/constants/billing/tax.ts"),
				r = n("../react/common/constants/billing/tracking.ts"),
				a = n("../react/common/constants/billing/workers.ts");
			const l = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				FP: function() {
					return e
				},
				Nl: function() {
					return u
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
				p = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				u = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return t
				},
				Xf: function() {
					return g
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
					return a
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const p = "healthy",
				u = "degraded",
				m = "critical",
				i = "unknown",
				d = "not-monitored",
				g = o().from({
					FREE: "free",
					PRO: "pro",
					BIZ: "business",
					ENT: "enterprise"
				}),
				t = {
					ZONES_ROOT_REQUESTED: "zones_root_requested",
					ZONES_ACCOUNT_REQUESTED: "zones_account_requested",
					ZONES_HEADER_REQUESTED: "zones_header_requested",
					MEMBERSHIPS_ROOT_REQUESTED: "membership_root_requested",
					ACCOUNT_MEMBERS_REQUESTED: "account_members_requested"
				},
				r = {
					f: g.FREE,
					p: g.PRO,
					b: g.BIZ
				},
				a = "marketing-pt",
				l = () => {
					const A = s.Z.get(a);
					if (!!A) return r[A]
				},
				c = ["gov"],
				f = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				_ = "banner-notification-interactions",
				h = null
		},
		"../react/common/constants/index.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
			var e = n("../react/common/constants/constants.ts"),
				o = n("../react/common/constants/billing/index.ts")
		},
		"../react/common/constants/roles.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", o.CLOUDFLARE_ACCESS = "Cloudflare Access", o.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", o.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", o.ADMINISTRATOR = "Administrator", o.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", o.ANALYTICS = "Analytics", o.API_GATEWAY = "API Gateway", o.API_GATEWAY_READ = "API Gateway Read", o.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", o.BILLING = "Billing", o.BOT_MANAGEMENT = "Bot Management", o.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", o.CACHE_DOMAIN_PURGE = "Cache Domain Purge", o.CACHE_PURGE = "Cache Purge", o.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", o.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", o.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", o.EMAIL_SECURITY_ANALYST = "Email Security Analyst", o.EMAIL_SECURITY_READONLY = "Email Security Readonly", o.EMAIL_SECURITY_REPORTING = "Email Security Reporting", o.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", o.CLOUDFORCE_ONE_READ = "Cloudforce One Read", o.DNS = "DNS", o.DOMAIN_ADMINISTRATOR = "Domain Administrator", o.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", o.DOMAIN_API_GATEWAY = "Domain API Gateway", o.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", o.DOMAIN_DNS = "Domain DNS", o.DOMAIN_PAGE_SHIELD = "Domain Page Shield", o.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", o.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", o.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", o.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", o.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", o.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", o.HTTP_APPLICATIONS = "HTTP Applications", o.HTTP_APPLICATIONS_READ = "HTTP Applications Read", o.CLOUDFLARE_IMAGES = "Cloudflare Images", o.LOAD_BALANCER = "Load Balancer", o.LOG_SHARE = "Log Share", o.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", o.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", o.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", o.PAGE_SHIELD = "Page Shield", o.PAGE_SHIELD_READ = "Page Shield Read", o.HYPERDRIVE_ADMIN = "Hyperdrive Admin", o.HYPERDRIVE_READONLY = "Hyperdrive Readonly", o.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", o.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", o.LOG_SHARE_READER = "Log Share Reader", o.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", o.CLOUDFLARE_STREAM = "Cloudflare Stream", o.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", o.CLOUDFLARE_DEX = "Cloudflare DEX", o.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", o.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", o.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", o.TRANSFORM_RULES = "Transform Rules", o.TRUST_AND_SAFETY = "Trust and Safety", o.TURNSTILE = "Turnstile", o.TURNSTILE_READ = "Turnstile Read", o.VECTORIZE_ADMIN = "Vectorize Admin", o.VECTORIZE_READONLY = "Vectorize Readonly", o.FIREWALL = "Firewall", o.WAITING_ROOM_ADMIN = "Waiting Room Admin", o.WAITING_ROOM_READ = "Waiting Room Read", o.WORKERS_ADMIN = "Workers Admin", o.ZARAZ_ADMIN = "Zaraz Admin", o.ZARAZ_EDIT = "Zaraz Edit", o.ZARAZ_READONLY = "Zaraz Readonly", o.ZONE_VERSIONING = "Zone Versioning", o.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", o.ZONE_VERSIONING_READ = "Zone Versioning Read", o.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", o.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", o.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", o.BRAND_PROTECTION = "Brand Protection", o
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
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
				s = (u, m, i = !1) => {
					var d;
					return `${m} ${(d=o[u])!==null&&d!==void 0?d:u} ${i?"ruleset":"rule"}${m===e.GET?"s":""}`
				},
				p = () => {
					var u;
					return (u = Object.keys(o).reduce((m, i) => {
						const d = Object.values(e).reduce((g, t) => (g.push(s(i, t)), g.push(s(i, t, !0)), g), []);
						return m.concat(d)
					}, [])) === null || u === void 0 ? void 0 : u.flat()
				}
		},
		"../react/common/hooks/suspenseHelpers.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				bt: function() {
					return i
				},
				nW: function() {
					return u
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const p = "suspenseComplete";

			function u() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(p))
				}, [])
			}

			function m(d) {
				(0, s.OR)(p, () => {
					window.setTimeout(d, 0)
				}, {
					target: window
				})
			}

			function i(...d) {
				const [g, t] = d;
				o().useLayoutEffect(g, t), m(g)
			}
		},
		"../react/common/hooks/useAccountEntitlement.ts": function(x, E, n) {
			"use strict";
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts");

			function s(p) {
				return (0, e.p4)(u => (0, o.BF)(u, p))
			}
			E.Z = s
		},
		"../react/common/hooks/useAccountId.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				F: function() {
					return u
				}
			});
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/accountSelectors.ts"),
				s = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = n.n(s);

			function u() {
				var m;
				const {
					accountId: i
				} = (0, s.useParams)(), d = (0, e.p4)(o.D0);
				if (i === void 0 && !d) throw new Error("Account ID not found in URL params");
				return (m = i) !== null && m !== void 0 ? m : d == null ? void 0 : d.id
			}
		},
		"../react/common/hooks/useCachedState.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				j: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function p(u, {
				key: m,
				cache: i = s.E,
				ttl: d
			} = {}) {
				var g;
				const t = m !== void 0 && i.get(m),
					[r, a] = (0, e.useState)((g = t) !== null && g !== void 0 ? g : u);
				return [r, c => {
					a(f => (c instanceof Function && (c = c(f)), m !== void 0 && i.set(m, c, d), c))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(x, E, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(s) {
				return (0, e.qf)(s)
			}
			E.Z = o
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				S: function() {
					return s
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function s(p, {
				root: u,
				rootMargin: m,
				threshold: i
			} = {}) {
				const d = (0, e.useRef)(null);

				function g() {
					return d.current === null && (d.current = new IntersectionObserver(p, {
						root: u,
						rootMargin: m,
						threshold: i
					})), d.current
				}
				return (0, e.useEffect)(() => (d.current = new IntersectionObserver(p, {
					root: u,
					rootMargin: m,
					threshold: i
				}), () => {
					var t;
					(t = d.current) === null || t === void 0 || t.disconnect()
				}), [p, u, m, i]), g()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(x, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function s(p) {
				const u = (0, e.useRef)(p);
				return (0, e.useEffect)(() => {
					u.current = p
				}, [p]), u.current
			}
			E.Z = s
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(x, E, n) {
			"use strict";
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts");

			function s(p) {
				return (0, e.p4)(u => (0, o.rV)(u, p))
			}
			E.Z = s
		},
		"../react/common/middleware/sparrow/errors.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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

			function e(i, d, g) {
				return d = o(d), d in i ? Object.defineProperty(i, d, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = g, i
			}

			function o(i) {
				var d = s(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function s(i, d) {
				if (typeof i != "object" || i === null) return i;
				var g = i[Symbol.toPrimitive];
				if (g !== void 0) {
					var t = g.call(i, d || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			class p extends Error {
				constructor(d, g) {
					super(g);
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
				constructor(d, g) {
					super(d, `Found invalid properties on event: "${d}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = g
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				AC: function() {
					return be
				},
				Au: function() {
					return se
				},
				B: function() {
					return re
				},
				B3: function() {
					return Ie
				},
				BG: function() {
					return L
				},
				Bp: function() {
					return Qe
				},
				CV: function() {
					return _t
				},
				D0: function() {
					return M
				},
				DT: function() {
					return W
				},
				EL: function() {
					return ne
				},
				EU: function() {
					return $
				},
				GE: function() {
					return ft
				},
				Ko: function() {
					return J
				},
				Kx: function() {
					return O
				},
				Le: function() {
					return D
				},
				O4: function() {
					return Be
				},
				Ou: function() {
					return Q
				},
				Py: function() {
					return Re
				},
				QI: function() {
					return st
				},
				RO: function() {
					return Le
				},
				T3: function() {
					return Xe
				},
				T8: function() {
					return S
				},
				UX: function() {
					return F
				},
				VP: function() {
					return rt
				},
				Xo: function() {
					return We
				},
				Xu: function() {
					return de
				},
				Yi: function() {
					return pt
				},
				Yj: function() {
					return G
				},
				Zu: function() {
					return ce
				},
				bC: function() {
					return te
				},
				f8: function() {
					return Z
				},
				hI: function() {
					return ct
				},
				hN: function() {
					return P
				},
				hX: function() {
					return X
				},
				iq: function() {
					return pe
				},
				nE: function() {
					return b
				},
				oD: function() {
					return I
				},
				oI: function() {
					return U
				},
				oJ: function() {
					return V
				},
				tM: function() {
					return H
				},
				uF: function() {
					return ue
				},
				ut: function() {
					return je
				},
				vU: function() {
					return dt
				},
				wQ: function() {
					return Ue
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				s = n.n(o),
				p = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				u = n.n(p),
				m = n("../../../../node_modules/reselect/lib/index.js"),
				i = n("../../../../node_modules/moment/moment.js"),
				d = n.n(i),
				g = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				a = n("../react/common/selectors/entitlementsSelectors.ts"),
				l = n("../react/app/components/DeepLink/selectors.ts"),
				c = n("../react/common/constants/roles.ts"),
				f = n("../react/common/utils/hasRole.ts");

			function _(z) {
				for (var le = 1; le < arguments.length; le++) {
					var Ce = arguments[le] != null ? Object(arguments[le]) : {},
						Oe = Object.keys(Ce);
					typeof Object.getOwnPropertySymbols == "function" && Oe.push.apply(Oe, Object.getOwnPropertySymbols(Ce).filter(function(Fe) {
						return Object.getOwnPropertyDescriptor(Ce, Fe).enumerable
					})), Oe.forEach(function(Fe) {
						h(z, Fe, Ce[Fe])
					})
				}
				return z
			}

			function h(z, le, Ce) {
				return le = A(le), le in z ? Object.defineProperty(z, le, {
					value: Ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[le] = Ce, z
			}

			function A(z) {
				var le = T(z, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function T(z, le) {
				if (typeof z != "object" || z === null) return z;
				var Ce = z[Symbol.toPrimitive];
				if (Ce !== void 0) {
					var Oe = Ce.call(z, le || "default");
					if (typeof Oe != "object") return Oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(z)
			}
			const M = z => {
					const le = ue(z);
					return le == null ? void 0 : le.account
				},
				C = z => {
					const le = (0, r.PR)(z);
					if (le) {
						const Ce = le.id;
						return z.accountAccess[Ce] || {}
					}
					return {}
				},
				y = z => z.accountsDetailed,
				S = (0, t.P1)("accountsDetailed", y),
				L = z => z.memberships,
				b = (0, m.P1)((0, t.P1)("memberships", L), l.U, (z, le) => !!le && !!z ? z.filter(Ce => le.includes(Ce.id)) : z),
				P = z => z.accountFlags && z.accountFlags.data,
				O = z => z.accountFlags,
				D = (z, le, Ce) => {
					const Oe = P(z);
					return !Oe || !Oe[le] ? null : Oe[le][Ce]
				},
				B = z => z.accountFlags.isRequesting,
				U = (z, ...le) => s()(z, ["accountFlagsChanges", "data", ...le]),
				Z = z => z.accountFlagsChanges.isRequesting,
				ae = (0, m.P1)(P, O, (z, le) => ({
					data: z,
					meta: le
				})),
				_e = (z, le, Ce) => !!(isEnterpriseSSEnabledSelector(z) && D(z, le, Ce)),
				de = z => z.membership,
				ue = (0, t.P1)("membership", de),
				K = (0, m.P1)(ue, de, (z, le) => ({
					data: z,
					meta: le
				})),
				Q = z => {
					const {
						roles: le = []
					} = ue(z) || {};
					return Boolean(le.find(Ce => Ce === "Super Administrator - All Privileges" || Ce === "Billing"))
				},
				H = z => {
					const le = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, f.n)(z, le)
				},
				I = z => {
					const le = C(z),
						Ce = Ae.getMemberships(z) ? u().asMutable(Ae.getMemberships(z)) : [];
					if (!!Ce) return u().from(Ce.map(Oe => _({}, Oe, {
						lastSeen: le[Oe.account.id] ? le[Oe.account.id].lastSeen : null
					})).sort((Oe, Fe) => Oe.lastSeen && Fe.lastSeen ? Fe.lastSeen - Oe.lastSeen : 0))
				},
				F = z => z.filteredMemberships,
				ne = (0, t.P1)("filteredMemberships", F),
				ce = (0, m.P1)(ue, z => z == null ? void 0 : z.permissions),
				G = (0, m.P1)(ce, z => (0, e.Z)(le => {
					var Ce;
					return (Ce = z == null ? void 0 : z[le]) !== null && Ce !== void 0 ? Ce : {
						read: !1,
						edit: !1
					}
				})),
				J = (0, m.P1)(ue, z => z == null ? void 0 : z.policies),
				W = (z, le, Ce) => {
					let Oe = Ae.getMembership(z);
					if (!Oe) {
						const Fe = Ae.getMemberships(z);
						if (!Fe || !le) return !1;
						Oe = Fe.find(Ve => Ve.account.id === le)
					}
					if (!Oe || !Ce) return !1;
					try {
						return Ce(Oe.permissions)
					} catch {
						return !1
					}
				},
				q = z => {
					var le, Ce;
					return (le = (Ce = M(z)) === null || Ce === void 0 ? void 0 : Ce.meta.has_pro_zones) !== null && le !== void 0 ? le : !1
				},
				$ = z => {
					var le, Ce;
					return (le = (Ce = M(z)) === null || Ce === void 0 ? void 0 : Ce.meta.has_business_zones) !== null && le !== void 0 ? le : !1
				},
				te = z => $(z) || q(z),
				Ee = (z, le) => {
					const Ce = Te(z, le);
					return !!Ce && !!Ce.enabled
				},
				Te = (z, le) => {
					const Ce = Ae.getMembership(z),
						Oe = Ce && Ce.account;
					return Oe && Oe.legacy_flags && Oe.legacy_flags[le]
				},
				Ue = z => Ee(z, "custom_pages"),
				ke = z => !!z && z["webhooks.webhooks.enabled"],
				xe = z => D(z, "bots", "enabled"),
				Ke = z => D(z, "billing", "annual_subscriptions_enable"),
				Le = z => z ? Boolean(D(z, "ConstellationAI", "v2_ui")) : !1,
				X = z => z ? Boolean(D(z, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				re = z => z ? Boolean(D(z, "AIgateway", "enabled")) : !1,
				me = z => Te(z, "enterprise_zone_quota"),
				k = z => {
					const le = me(z);
					return !le || !le.available ? -1 : le.available
				},
				pe = z => z.accountMembers,
				Ie = (0, t.P1)("accountMembers", pe),
				Be = z => z.accountMember && z.accountMember.isRequesting,
				ze = z => z.accountRoles,
				be = (0, t.P1)("accountRoles", ze),
				Re = (z, le) => {
					const Ce = Ae.getMemberships(z),
						Oe = Ce && Ce.find(R => R.account.id === le);
					if (Oe) return Oe.account.name.replace(" Account", " account");
					const Fe = Ae.getMembership(z),
						Ve = Fe && Fe.account;
					return Ve && Ve.id === le ? Ve.name : null
				},
				je = (z, le) => {
					const Ce = Ae.getMemberships(z),
						Oe = Ce && Ce.find(R => R.account.id === le);
					if (Oe) return Oe.account.settings.access_approval_expiry;
					const Fe = Ae.getMembership(z),
						Ve = Fe && Fe.account;
					return Ve && Ve.id === le ? Ve.settings.access_approval_expiry : null
				},
				We = (z, le) => {
					const Ce = je(z, le);
					return Ce ? d().utc(Ce).isAfter() : !1
				},
				Xe = (z, le, Ce) => {
					const Oe = je(z, le);
					let Fe = Oe ? d().utc(Oe) : null;
					return !Fe || !Fe.isAfter() ? "" : Fe && Fe.year() === 3e3 ? Ce("account.access_approval.card_expiration_forever") : Ce("account.access_approval.card_expiration_text", {
						expiryTimestamp: Fe.local().format(g.U.DateTime)
					})
				},
				V = z => z && z.member && z.member.edit,
				se = (z, le) => {
					const Ce = Ae.getMembership(z),
						Oe = Ce && Ce.account;
					return Oe ? Oe.id !== le : !1
				},
				ge = z => z.dpa,
				Me = (0, t.P1)("dpa", ge),
				we = z => z.webhook,
				Ne = z => z.webhooks,
				Ye = (0, t.P1)("webhook", Ne),
				rt = z => z.accountLegoContract,
				ut = (0, t.P1)("accountLegoContract", rt),
				st = z => {
					const le = ut(z);
					return (le == null ? void 0 : le.lego_state) ? le.lego_state : ""
				},
				gt = z => st(z) === "signed",
				ft = z => rt(z).isRequesting,
				dt = z => {
					const le = ut(z);
					return le && le.subscription_type ? le.subscription_type : ""
				},
				Ge = z => dt(z) !== "",
				Ae = {
					getMembership: ue,
					getMemberships: b,
					getFilteredMemberships: ne,
					getAccountMembers: Ie,
					getAccountRoles: be
				},
				Qe = z => z.accountSingle,
				pt = (0, t.P1)("accountSingle", Qe),
				ct = z => {
					const le = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, c.V.ADMINISTRATOR];
					return (0, f.n)(z, le)
				},
				_t = z => (0, f.n)(z, [c.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return M
				},
				Ci: function() {
					return ce
				},
				DA: function() {
					return X
				},
				E6: function() {
					return a
				},
				Gy: function() {
					return xe
				},
				Hq: function() {
					return ke
				},
				Ms: function() {
					return S
				},
				Nb: function() {
					return Ue
				},
				Pj: function() {
					return Le
				},
				Q2: function() {
					return m
				},
				Qq: function() {
					return te
				},
				Td: function() {
					return A
				},
				Z: function() {
					return W
				},
				a: function() {
					return T
				},
				a5: function() {
					return $
				},
				c7: function() {
					return Ee
				},
				du: function() {
					return d
				},
				ec: function() {
					return Z
				},
				f: function() {
					return Te
				},
				hL: function() {
					return q
				},
				ji: function() {
					return G
				},
				jo: function() {
					return L
				},
				l9: function() {
					return me
				},
				lI: function() {
					return p
				},
				p1: function() {
					return _
				},
				pK: function() {
					return Ke
				},
				pf: function() {
					return t
				},
				qR: function() {
					return h
				},
				rV: function() {
					return i
				},
				u1: function() {
					return g
				},
				w4: function() {
					return r
				},
				yD: function() {
					return J
				}
			});
			var e = n("../react/utils/url.ts");

			function o(k, pe) {
				return k && k[pe]
			}
			const s = k => !p(k).isRequesting;

			function p(k) {
				return k.entitlements.zone
			}

			function u(k) {
				return p(k).data
			}
			const m = k => {
				var pe, Ie;
				return ((pe = p(k).paginationData) === null || pe === void 0 || (Ie = pe.options) === null || Ie === void 0 ? void 0 : Ie.editedDate) || {}
			};

			function i(k, pe) {
				const Ie = u(k);
				return Ie ? o(Ie, pe) : void 0
			}
			const d = (k, pe) => i(k, pe) === !0;

			function g(k) {
				return k.entitlements.account
			}

			function t(k) {
				return g(k).data
			}
			const r = k => {
				var pe, Ie;
				return ((pe = g(k).paginationData) === null || pe === void 0 || (Ie = pe.options) === null || Ie === void 0 ? void 0 : Ie.editedDate) || {}
			};

			function a(k) {
				return !g(k).isRequesting
			}

			function l(k, pe) {
				const Ie = t(k);
				return Ie ? o(Ie, pe) : void 0
			}

			function c(k, pe) {
				return l(k, pe) === !0
			}

			function f(k, pe) {
				return pe.every(Ie => c(k, Ie))
			}

			function _(k) {
				return c(k, "contract.customer_enabled")
			}

			function h(k) {
				return c(k, "contract.self_service_allowed")
			}

			function A(k) {
				return c(k, "billing.partners_managed")
			}
			const T = k => _(k) && h(k),
				M = k => c(k, "enterprise.ecp_allowed");

			function C(k) {
				return y(k) || c(k, "argo.allow_smart_routing") || c(k, "argo.allow_tiered_caching") || c(k, "rate_limiting.enabled") || c(k, "ctm.enabled") || c(k, "workers.enabled") || c(k, "workers.kv_store.enabled") || c(k, "stream.enabled")
			}
			const y = k => d(k, "argo.allow_smart_routing") || d(k, "argo.allow_tiered_caching"),
				S = k => c(k, "zone.cname_setup_allowed") || c(k, "zone.partial_setup_allowed") || d(k, "zone.partial_setup_allowed"),
				L = k => c(k, "argo.allow_smart_routing") || d(k, "argo.allow_smart_routing"),
				b = k => c(k, "argo.allow_tiered_caching") || d(k, "argo.allow_tiered_caching"),
				P = k => L(k) || b(k),
				O = k => c(k, "ctm.enabled"),
				D = k => {
					const pe = l(k, "ctm.load_balancers");
					return typeof pe == "number" ? pe : 0
				},
				B = k => {
					const pe = l(k, "ctm.pools");
					return typeof pe == "number" ? pe : 0
				},
				U = k => {
					const pe = l(k, "ctm.origins");
					return typeof pe == "number" ? pe : 0
				},
				Z = k => c(k, "workers.enabled"),
				ae = k => c(k, "stream.enabled"),
				_e = k => {
					const pe = l(k, "access.users_allowed");
					return typeof pe == "number" ? pe : 0
				},
				de = k => _e(k) > 0,
				ue = k => {
					const pe = i(k, "dedicated_certificates");
					return typeof pe == "number" ? pe : 0
				},
				K = k => ue(k) > 0,
				Q = k => {
					const pe = i(k, "rate_limiting.max_rules");
					return typeof pe == "number" ? pe : 0
				},
				H = k => c(k, "rate_limiting.enabled"),
				I = k => {
					const pe = i(k, "page_rules");
					return typeof pe == "number" ? pe : 0
				},
				F = k => I(k) > 0,
				ne = k => {
					const pe = l(k, "dns_firewall.max_clusters_allowed");
					return typeof pe == "number" ? pe : 0
				},
				ce = k => ne(k) > 0,
				G = k => d(k, "zone.advanced_certificate_manager") || c(k, "zone.advanced_certificate_manager"),
				J = k => i(k, "authoritative_dns.proxy_record_allowed") === !1 || l(k, "authoritative_dns.proxy_record_allowed") === !1,
				W = k => c(k, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				q = k => i(k, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				$ = k => {
					const pe = i(k, "authoritative_dns.min_record_ttl_allowed");
					return typeof pe == "number" && pe > 1 ? pe : 60
				},
				te = k => c(k, "foundation_dns.advanced_nameservers_allowed") || d(k, "foundation_dns.advanced_nameservers_allowed"),
				Ee = k => c(k, "account_custom_ns.allowed"),
				Te = (k, pe) => ((0, e.el)(window.location.pathname) ? i : l)(k, pe),
				Ue = k => ((0, e.el)(window.location.pathname) ? u : t)(k),
				ke = k => c(k, "authoritative_dns.multi_provider_allowed") || d(k, "authoritative_dns.multi_provider_allowed"),
				xe = k => d(k, "authoritative_dns.cname_flattening_allowed"),
				Ke = k => c(k, "secondary_dns.secondary_overrides") || d(k, "secondary_dns.secondary_overrides"),
				Le = k => c(k, "authoritative_dns.custom_soa_allowed") || d(k, "authoritative_dns.custom_soa_allowed"),
				X = k => c(k, "authoritative_dns.custom_ns_ttl_allowed") || d(k, "authoritative_dns.custom_ns_ttl_allowed"),
				re = k => c(k, "secondary.create_zone"),
				me = k => te(k) || Ee(k) || ke(k) || re(k) || Ke(k) || Le(k) || X(k)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				r: function() {
					return u
				},
				v: function() {
					return m
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts"),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = n("../react/utils/bootstrap.ts");
			const u = i => {
				if ((0, p.gm)()) return s.Z.set(e.ly, e.ZW), e.ZW;
				const d = i.userCommPreferences.data;
				if (d == null ? void 0 : d["language-locale"]) return (0, e.i_)(d["language-locale"]), d["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const g = (0, e.Kd)();
					return m(g) ? g : e.ZW
				}
			};

			function m(i) {
				const d = Object.keys(o.Q).find(g => o.Q[g] === i);
				return !!i && typeof i == "string" && d != null && (0, e.S8)(d)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				$8: function() {
					return u
				},
				BG: function() {
					return g
				},
				BY: function() {
					return T
				},
				GP: function() {
					return c
				},
				GU: function() {
					return M
				},
				PR: function() {
					return s
				},
				h$: function() {
					return h
				},
				h8: function() {
					return t
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
			var e = n("../react/app/redux/normalizer.js");
			const o = C => C.user,
				s = (0, e.P1)("user", o),
				p = C => {
					var y;
					return (y = s(C)) === null || y === void 0 ? void 0 : y.email.endsWith("@cloudflare.com")
				},
				u = C => {
					var y;
					return !!((y = s(C)) === null || y === void 0 ? void 0 : y.id)
				},
				m = C => {
					const y = s(C);
					if (!!y) return y.first_name && y.last_name ? `${y.first_name} ${y.last_name}` : y.email
				},
				i = C => {
					const y = s(C);
					return y && y.has_enterprise_zones
				},
				d = C => C.userCommPreferences,
				g = (0, e.P1)("userCommPreferences", d),
				t = C => {
					const y = s(C);
					return y && y.email_verified
				},
				r = C => {
					const y = g(C);
					return y && y.preferences.marketing_communication
				},
				a = C => C.userDetails,
				l = (0, e.P1)("userDetails", a),
				c = C => {
					const y = l(C);
					return y && y["2FA-RECOVERY"] === "scheduled"
				},
				f = C => {
					const y = l(C);
					return y && y["2FA-RECOVERY"] === "interrupted"
				},
				_ = C => {
					const y = l(C);
					return y == null ? void 0 : y["NEW-USER-EMAIL"]
				},
				h = C => C.gates.assignments,
				A = (C, y) => C && C[y];

			function T(C, y) {
				const S = h(C);
				return S ? A(S, y) : void 0
			}
			const M = (C, y) => T(C, y) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				$4: function() {
					return S
				},
				$t: function() {
					return be
				},
				A4: function() {
					return _
				},
				Cu: function() {
					return h
				},
				DQ: function() {
					return te
				},
				Ej: function() {
					return b
				},
				FH: function() {
					return T
				},
				ID: function() {
					return H
				},
				Ko: function() {
					return Le
				},
				Le: function() {
					return Ue
				},
				Ly: function() {
					return ce
				},
				M3: function() {
					return pe
				},
				N8: function() {
					return k
				},
				NY: function() {
					return q
				},
				Ns: function() {
					return F
				},
				Ox: function() {
					return We
				},
				P4: function() {
					return P
				},
				RO: function() {
					return K
				},
				Tr: function() {
					return Ke
				},
				U: function() {
					return A
				},
				Ug: function() {
					return C
				},
				V6: function() {
					return Ie
				},
				WR: function() {
					return Xe
				},
				Xg: function() {
					return f
				},
				ZB: function() {
					return Te
				},
				_y: function() {
					return I
				},
				cU: function() {
					return X
				},
				cg: function() {
					return $
				},
				d2: function() {
					return ae
				},
				il: function() {
					return ne
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
					return Be
				},
				ko: function() {
					return ue
				},
				mK: function() {
					return Re
				},
				nA: function() {
					return c
				},
				oY: function() {
					return O
				},
				qM: function() {
					return ke
				},
				rq: function() {
					return W
				},
				tS: function() {
					return y
				},
				tU: function() {
					return U
				},
				vB: function() {
					return je
				},
				vM: function() {
					return B
				},
				wH: function() {
					return M
				},
				wn: function() {
					return Ee
				},
				xU: function() {
					return Z
				},
				xw: function() {
					return xe
				},
				z5: function() {
					return Q
				},
				zO: function() {
					return re
				},
				zW: function() {
					return ze
				},
				zh: function() {
					return _e
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				s = n("../../../../node_modules/lodash/get.js"),
				p = n.n(s),
				u = n("../../../../node_modules/moment/moment.js"),
				m = n.n(u),
				i = n("../react/common/constants/billing/index.ts");

			function d(V) {
				for (var se = 1; se < arguments.length; se++) {
					var ge = arguments[se] != null ? Object(arguments[se]) : {},
						Me = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && Me.push.apply(Me, Object.getOwnPropertySymbols(ge).filter(function(we) {
						return Object.getOwnPropertyDescriptor(ge, we).enumerable
					})), Me.forEach(function(we) {
						g(V, we, ge[we])
					})
				}
				return V
			}

			function g(V, se, ge) {
				return se = t(se), se in V ? Object.defineProperty(V, se, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[se] = ge, V
			}

			function t(V) {
				var se = r(V, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function r(V, se) {
				if (typeof V != "object" || V === null) return V;
				var ge = V[Symbol.toPrimitive];
				if (ge !== void 0) {
					var Me = ge.call(V, se || "default");
					if (typeof Me != "object") return Me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(V)
			}
			const a = (0, o.P1)("zone", V => V.zone),
				l = V => {
					var se;
					return (se = V.zoneVersioning) === null || se === void 0 ? void 0 : se.zoneVersionSelector
				},
				c = (0, e.P1)(a, l, (V, se) => {
					var ge, Me, we;
					let Ne;
					if (Array.isArray(V) && V.length === 1 ? Ne = V[0] : V && !Array.isArray(V) && (Ne = V), !Ne) return;
					const Ye = !!(se == null ? void 0 : se.enabled);
					return d({}, Ne, Ne.name && {
						name: Ye ? se.rootZoneName : Ne.name
					}, {
						versioning: {
							enabled: Ye,
							isRoot: !((ge = Ne.name) === null || ge === void 0 ? void 0 : ge.endsWith(".config.cfdata.org")),
							version: Ye ? se.selectedVersion : 0,
							rootZoneId: Ye ? se.rootZoneId : (Me = (we = Ne) === null || we === void 0 ? void 0 : we.id) !== null && Me !== void 0 ? Me : ""
						}
					})
				}),
				f = V => V.zone,
				_ = (0, e.P1)(c, f, (V, se) => ({
					data: V,
					meta: se
				})),
				h = V => {
					var se, ge;
					return (se = (ge = c(V)) === null || ge === void 0 ? void 0 : ge.id) !== null && se !== void 0 ? se : ""
				},
				A = V => V.zones,
				T = V => V.zonesRoot,
				M = V => V.zonesAccount,
				C = (0, o.P1)("zones", A),
				y = (0, o.P1)("zonesRoot", T),
				S = (0, o.P1)("zonesAccount", M);

			function L(V) {
				const se = c(V);
				return se ? se.created_on : null
			}

			function b(V, se, ge) {
				const Me = L(V);
				if (!Me) return;
				const we = m().duration(se, ge),
					Ne = new Date(Me),
					Ye = new Date(new Date().getTime() - we.asMilliseconds());
				return Ne.getTime() > Ye.getTime()
			}

			function P(V) {
				const se = c(V);
				return se ? se.status : null
			}

			function O(V) {
				const se = c(V);
				return se ? se.type : null
			}

			function D(V) {
				return V.plan_pending ? V.plan_pending : V.plan
			}

			function B(V) {
				const se = c(V);
				if (!se) return;
				const ge = D(se);
				return ge && ge.legacy_id
			}

			function U(V, se) {
				const ge = D(V);
				return !!ge && i.Gs.indexOf(ge.legacy_id) >= i.Gs.indexOf(se)
			}

			function Z(V) {
				return !!V && V.status === "initializing"
			}

			function ae(V) {
				return !!V && V.status === "pending"
			}

			function _e(V) {
				return !!V && V.status === "active"
			}

			function de(V, se) {
				if (!V) return !1;
				const ge = D(V);
				return !!ge && ge.legacy_id === se
			}

			function ue(V) {
				return de(V, "enterprise")
			}
			const K = V => ue(c(V));

			function Q(V) {
				return de(V, "business")
			}
			const H = V => Q(c(V));

			function I(V) {
				return de(V, "pro")
			}

			function F(V) {
				return de(V, "free")
			}
			const ne = V => F(c(V));

			function ce(V) {
				return !ue(V)
			}

			function G(V) {
				return V && V.owner
			}

			function J(V, se) {
				const ge = G(se);
				return !!ge && ge.type === "user" && ge.id === V.id
			}

			function W(V) {
				const se = c(V);
				return !!se && se.type === "partial"
			}

			function q(V) {
				const se = c(V);
				return !!se && se.type === "secondary"
			}
			const $ = V => {
					var se;
					const ge = c(V);
					return !!(ge == null ? void 0 : ge.host) && !!((se = ge.plan) === null || se === void 0 ? void 0 : se.externally_managed)
				},
				te = V => {
					const se = C(V);
					return se && se.some(ue)
				},
				Ee = (V, se) => {
					const ge = c(V);
					return ge && ge.betas ? ge.betas.includes(se) : !1
				},
				Te = (V, ...se) => p()(V, ["zoneFlags", "data", ...se]),
				Ue = (V, ...se) => p()(V, ["accountFlags", "data", ...se]),
				ke = V => V.accountFlags.isRequesting,
				xe = V => V.zoneFlags.isRequesting,
				Ke = (V, ...se) => p()(V, ["zoneFlagsChanges", "data", ...se]),
				Le = V => V.zoneFlagsChanges.isRequesting,
				X = V => V.zoneFlags && V.zoneFlags.data,
				re = V => V.zoneFlags,
				me = (0, e.P1)(X, re, (V, se) => ({
					data: V,
					meta: se
				})),
				k = (0, o.P1)("abuseUrls", V => V.overview.abuseUrls),
				pe = V => {
					const se = c(V);
					return se ? `/${se.account.id}/${se.name}` : null
				},
				Ie = V => V.zoneMarketingCampaigns,
				Be = V => V.overview.zoneBlocks.data,
				ze = V => V.overview.zoneBlocks.isRequesting,
				be = V => V.overview.zoneBlocks.hasData,
				Re = V => {
					var se, ge;
					return (V == null || (se = V.overview.zoneBlocks) === null || se === void 0 || (ge = se.paginationData) === null || ge === void 0 ? void 0 : ge.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				je = V => V.overview.zoneBlocksReview.isRequesting,
				We = V => V.overview.zoneHold,
				Xe = (0, o.P1)("zoneHold", We)
		},
		"../react/common/utils/formatDate.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			E.Z = (o, s, p = !1) => (0, e.p6)(o, s, p)
		},
		"../react/common/utils/hasRole.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				n: function() {
					return o
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts");
			const o = (s, p) => {
				const {
					roles: u = []
				} = (0, e.uF)(s) || {};
				return p.some(m => u.includes(m))
			}
		},
		"../react/common/utils/isGuards.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Q$: function() {
					return s
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
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const s = i => i ? ["page", "per_page", "count", "total_count"].every(g => g in i && i[g]) : !1,
				p = (i = "") => e.Dy.includes(i.toLowerCase()),
				u = i => i !== null && typeof i == "object" && "name" in i && "size" in i && "type" in i && typeof i.slice == "function",
				m = i => (0, o.Z)(i)
		},
		"../react/common/utils/useQueryCache.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				o: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/react-query/es/index.js");

			function o(i) {
				for (var d = 1; d < arguments.length; d++) {
					var g = arguments[d] != null ? Object(arguments[d]) : {},
						t = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && t.push.apply(t, Object.getOwnPropertySymbols(g).filter(function(r) {
						return Object.getOwnPropertyDescriptor(g, r).enumerable
					})), t.forEach(function(r) {
						s(i, r, g[r])
					})
				}
				return i
			}

			function s(i, d, g) {
				return d = p(d), d in i ? Object.defineProperty(i, d, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = g, i
			}

			function p(i) {
				var d = u(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(i, d) {
				if (typeof i != "object" || i === null) return i;
				var g = i[Symbol.toPrimitive];
				if (g !== void 0) {
					var t = g.call(i, d || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			const m = i => {
				const d = (0, e.useQueryClient)(),
					g = T => {
						var M;
						return d.getQueriesData((M = T) !== null && M !== void 0 ? M : i)
					},
					t = T => {
						var M;
						return d.getQueryData((M = T) !== null && M !== void 0 ? M : i)
					},
					r = T => {
						var M;
						return d.getQueriesData({
							queryKey: (M = T) !== null && M !== void 0 ? M : i,
							stale: !0
						})
					},
					a = (T, M) => {
						var C;
						d.setQueryData((C = M) !== null && C !== void 0 ? C : i, T)
					},
					l = async T => {
						var M;
						await d.refetchQueries((M = T) !== null && M !== void 0 ? M : i)
					}, c = async (T, M) => {
						var C, y;
						await d.invalidateQueries((C = T) !== null && C !== void 0 ? C : i, o({
							refetchActive: !1
						}, (y = M) !== null && y !== void 0 ? y : {}))
					}, f = async (T, M) => {
						const C = T || (y => {
							var S;
							return (y == null || (S = y.queryKey) === null || S === void 0 ? void 0 : S[0]) === i
						});
						await d.invalidateQueries(o({
							predicate: C,
							refetchActive: !1,
							refetchInactive: !1
						}, M))
					};
				return {
					refetch: l,
					cancelData: async () => {
						await d.cancelQueries(i)
					},
					invalidate: c,
					setData: a,
					getDataStale: r,
					getData: g,
					prefetchQuery: (T, M) => {
						var C;
						return d.prefetchQuery((C = M) !== null && C !== void 0 ? C : i, T)
					},
					getQueryData: t,
					predicateInvalidate: f,
					batchInvalidate: async ({
						queryKeysToInvalidate: T = [],
						queryKeysToPredicateInvalidate: M = [],
						refetchActive: C = !1,
						refetchInactive: y = !1
					}) => {
						const S = T.map(b => c(b)),
							L = M.map(b => f(P => {
								var O;
								return (P == null || (O = P.queryKey) === null || O === void 0 ? void 0 : O[0]) === b
							}, {
								refetchActive: C,
								refetchInactive: y
							}));
						await Promise.all([...S, ...L])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(x, E, n) {
			"use strict";
			n.d(E, {
				K2: function() {
					return o
				},
				Lb: function() {
					return s
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
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = g => /^https?:\/\/(.*)/.test(g),
				s = g => e.default.hostname.test(g),
				p = g => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(g),
				u = g => /^[!-~]+$/.test(g),
				m = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				i = g => m.test(g),
				d = g => !!g && !!g.length && /^[ -~]+$/.test(g)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(x, E, n) {
			"use strict";
			n.d(E, {
				DZ: function() {
					return p
				},
				GA: function() {
					return g
				},
				hT: function() {
					return m
				},
				p6: function() {
					return s
				},
				qc: function() {
					return u
				},
				w9: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e);
			const s = a => o().utc(a).format("YYYY-MM-DD"),
				p = a => o().utc(a).format(),
				u = a => o().utc(a).startOf("minute").format(),
				m = a => new Date(a),
				i = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				d = a => {
					const l = a / 60 / 60 / 1e3;
					return i[Object.keys(i).sort((c, f) => f - c).find(c => l >= c)]
				},
				g = (a, l = c => c.avg && c.avg.sampleInterval ? c.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((c, f) => c + l(f), 0) / a.length,
				t = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = a => t[a]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Jz: function() {
					return g
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
					return a
				},
				yc: function() {
					return t
				}
			});

			function e(c) {
				for (var f = 1; f < arguments.length; f++) {
					var _ = arguments[f] != null ? Object(arguments[f]) : {},
						h = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(_).filter(function(A) {
						return Object.getOwnPropertyDescriptor(_, A).enumerable
					})), h.forEach(function(A) {
						o(c, A, _[A])
					})
				}
				return c
			}

			function o(c, f, _) {
				return f = s(f), f in c ? Object.defineProperty(c, f, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[f] = _, c
			}

			function s(c) {
				var f = p(c, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function p(c, f) {
				if (typeof c != "object" || c === null) return c;
				var _ = c[Symbol.toPrimitive];
				if (_ !== void 0) {
					var h = _.call(c, f || "default");
					if (typeof h != "object") return h;
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
				g = {
					status: u.Success,
					statusCode: m.Success
				},
				t = {
					status: u.Failed,
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
				l = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return a
				},
				t$: function() {
					return c
				}
			});
			var e = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(_) {
				for (var h = 1; h < arguments.length; h++) {
					var A = arguments[h] != null ? Object(arguments[h]) : {},
						T = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(A).filter(function(M) {
						return Object.getOwnPropertyDescriptor(A, M).enumerable
					})), T.forEach(function(M) {
						s(_, M, A[M])
					})
				}
				return _
			}

			function s(_, h, A) {
				return h = p(h), h in _ ? Object.defineProperty(_, h, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[h] = A, _
			}

			function p(_) {
				var h = u(_, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function u(_, h) {
				if (typeof _ != "object" || _ === null) return _;
				var A = _[Symbol.toPrimitive];
				if (A !== void 0) {
					var T = A.call(_, h || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(_)
			}
			const m = _ => _.test(window.location.hostname),
				i = () => m(e.j9),
				d = () => m(MARKETPLACE_LOCAL_URL_REGEXP),
				g = (_, h) => {
					const A = random(0, 1) ? -1 : 1;
					return _.points === h.points || _.points >= APP_POINTS_THRESHOLD && h.points >= APP_POINTS_THRESHOLD ? A : _.points < 0 || h.points < 0 || _.points >= APP_POINTS_THRESHOLD || h.points >= APP_POINTS_THRESHOLD ? h.points - _.points : A
				},
				t = (_, h, A) => {
					const T = get(h, A),
						M = get(_, A);
					return T && !isEqual(T, M)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (_, h) => h.map(A => _.find(T => T.id === A)),
						addAppVersionInfo: (_, h) => o({}, h, {
							currentVersion: h.versions.find(A => A.tag === _.versionTag),
							latestVersion: h.versions.find(A => A.tag === h.infoVersion)
						}),
						addCurrentSiteInstall: (_, h) => o({}, h, {
							currentSiteInstall: _.find(A => A.appId === h.id)
						})
					}
				},
				a = (_, h, A) => o({}, _, h, A ? {
					value: A
				} : {}),
				l = _ => _.map(h => h.status),
				c = _ => _.apps ? _.apps : _,
				f = _ => {
					let h = ["by-cloudflare"];
					return _.filter(A => !h.includes(A.id) && A.visible).sort((A, T) => A.points < T.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(x, E, n) {
			"use strict";
			n.r(E), n.d(E, {
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
					return s
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: s,
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
		"../react/pages/apps/marketplace/requests/Requester.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				L: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/url-join/lib/url-join.js"),
				o = n.n(e),
				s = n("../../../../node_modules/lodash-es/defaults.js"),
				p = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function u(l) {
				for (var c = 1; c < arguments.length; c++) {
					var f = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(f).filter(function(h) {
						return Object.getOwnPropertyDescriptor(f, h).enumerable
					})), _.forEach(function(h) {
						d(l, h, f[h])
					})
				}
				return l
			}

			function m(l, c) {
				if (l == null) return {};
				var f = i(l, c),
					_, h;
				if (Object.getOwnPropertySymbols) {
					var A = Object.getOwnPropertySymbols(l);
					for (h = 0; h < A.length; h++) _ = A[h], !(c.indexOf(_) >= 0) && (!Object.prototype.propertyIsEnumerable.call(l, _) || (f[_] = l[_]))
				}
				return f
			}

			function i(l, c) {
				if (l == null) return {};
				var f = {},
					_ = Object.keys(l),
					h, A;
				for (A = 0; A < _.length; A++) h = _[A], !(c.indexOf(h) >= 0) && (f[h] = l[h]);
				return f
			}

			function d(l, c, f) {
				return c = g(c), c in l ? Object.defineProperty(l, c, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[c] = f, l
			}

			function g(l) {
				var c = t(l, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function t(l, c) {
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
					}), this.token = "", this.options = (0, s.Z)(c, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(c = "GET", f, _ = {}) {
					const {
						body: h
					} = _, A = m(_, ["body"]);
					return fetch(o()(this.options.baseUrl, f), u({
						method: c
					}, A, h ? {
						body: JSON.stringify(h)
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
			const a = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				JX: function() {
					return g
				},
				Jb: function() {
					return r
				},
				RX: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/lodash-es/upperFirst.js"),
				o = n("../../../../node_modules/lodash-es/isEmpty.js"),
				s = n("../../../../node_modules/query-string/query-string.js"),
				p = n.n(s),
				u = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				m = n("../react/pages/apps/marketplace/requests/Requester.ts"),
				i = n("../react/pages/apps/marketplace/libraries/resource.ts");

			function* d(c, f, _, h) {
				const A = (0, e.Z)(f),
					[T, M, C] = [`get${A}Sending`, `get${A}Success`, `get${A}Failed`];
				try {
					yield(0, u.gz)(c[T]());
					const y = yield(0, u.RE)(a, _);
					let S = y;
					if (S.error) {
						yield(0, u.gz)(c[C]());
						return
					}
					return h && (S = yield h(y)), yield(0, u.gz)(c[M](S)), S
				} catch {
					yield(0, u.gz)(c[C]())
				}
			}

			function* g(c, f, _, h) {
				const A = (0, e.Z)(f),
					T = `get${A}Sending`,
					M = `get${A}Success`,
					C = `get${A}Failed`;
				try {
					yield(0, u.gz)(c[T]());
					const y = yield(0, u.RE)(l, {
						url: _,
						data: h
					});
					return yield(0, u.gz)(c[M](y)), y
				} catch {
					yield(0, u.gz)(c[C]())
				}
			}
			const t = c => (0, o.Z)(c) ? "" : `?${s.stringify(c)}`,
				r = {
					app: new i.c({
						name: "app",
						url: (c, f) => `apps/${c}${t(f)}`
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
						url: (c = {}) => "categories" + t(c)
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
							url: (c = {}) => "ratings" + t(c)
						}),
						delete: new i.c({
							name: "ratings",
							url: c => `ratings/${c}`
						})
					},
					recommendedApps: new i.c({
						name: "recommendedApps",
						url: (c = {}) => "apps/recommend" + t(c)
					}),
					developedApps: new i.c({
						name: "developedApps",
						url: c => `user/${c}/apps`
					})
				},
				a = async c => m.L.fetchJSON(c), l = async c => {
					const {
						url: f,
						data: _
					} = c;
					return m.L.postJSON(f, {
						body: _
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return g
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function o(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(c) {
						return Object.getOwnPropertyDescriptor(a, c).enumerable
					})), l.forEach(function(c) {
						s(t, c, a[c])
					})
				}
				return t
			}

			function s(t, r, a) {
				return r = p(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function p(t) {
				var r = u(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function u(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let m = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				i = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const d = {
				resetState: () => ({
					type: i.ResetState
				}),
				initSaga: t => ({
					type: i.InitSaga,
					zoneId: t
				}),
				setZone: t => ({
					type: i.SetZone,
					zone: t
				}),
				setToken: t => ({
					type: i.SetToken,
					token: t
				}),
				clearToken: () => ({
					type: i.ClearToken
				}),
				setTokenValid: t => ({
					type: i.SetTokenValid,
					isTokenValid: t
				}),
				getCurrentUserSaga: () => ({
					type: i.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: i.CurrentUserSending
				}),
				getCurrentUserSuccess: t => ({
					type: i.CurrentUserSuccess,
					user: t
				}),
				getCurrentUserFailed: () => ({
					type: i.CurrentUserFailed
				})
			};

			function g(t = e.fD, r) {
				switch (r.type) {
					case i.ResetState:
						return o({}, e.fD);
					case i.CurrentUserSending:
						return o({}, t);
					case i.CurrentUserSuccess:
						const {
							user: a
						} = r;
						return o({}, t, {
							user: a
						});
					case i.CurrentUserFailed:
						return o({}, t);
					case i.SetZone:
						const {
							zone: l
						} = r;
						return o({}, t, {
							zone: l
						});
					case i.SetToken:
						const {
							token: c
						} = r;
						return o({}, t, {
							token: c
						});
					case i.ClearToken:
						return o({}, t, {
							token: null
						});
					case i.SetTokenValid:
						const {
							isTokenValid: f
						} = r;
						return o({}, t, {
							isTokenValid: f
						});
					default:
						return t
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Nw: function() {
					return g
				},
				U4: function() {
					return d
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return i
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						c = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), c.forEach(function(f) {
						p(r, f, l[f])
					})
				}
				return r
			}

			function p(r, a, l) {
				return a = u(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function u(r) {
				var a = m(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var c = l.call(r, a || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let i = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				d = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const g = {
				resetState: () => ({
					type: d.ResetState
				}),
				zoneChangedSaga: () => ({
					type: d.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, a) => ({
					type: d.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: a
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: d.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, a) => ({
					type: d.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: a
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
				getAppInfoAssetsSaga: (r, a, l) => ({
					type: d.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: a,
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
				postMetadataSaga: (r, a) => ({
					type: d.PostMetadataSaga,
					zoneId: r,
					data: a
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
				getRecommendedAppsSaga: (r, a, l) => ({
					type: d.GetRecommendedAppsSaga,
					appsList: r,
					installsList: a,
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

			function t(r = e.w6, a) {
				switch (a.type) {
					case d.ResetState:
						return s({}, e.w6);
					case d.ZoneChangedSaga:
						return s({}, r, {
							installsList: s({}, e.w6.installsList),
							recommendedAppsList: s({}, e.w6.recommendedAppsList),
							metadata: s({}, e.w6.metadata)
						});
					case d.GetAppsSending:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.h_))
						});
					case d.GetAppsSuccess:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.Jz, a.appsList))
						});
					case d.GetAppsFailed:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.yc))
						});
					case d.GetInstallsSending:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.h_))
						});
					case d.GetInstallsSuccess:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.Jz, a.installsList))
						});
					case d.GetInstallsFailed:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.yc))
						});
					case d.GetCategoriesSending:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case d.GetCategoriesSuccess:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.Jz, a.categoriesList))
						});
					case d.GetCategoriesFailed:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case d.GetMetadataSending:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.h_))
						});
					case d.GetMetadataSuccess:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case d.GetMetadataFailed:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.yc))
						});
					case d.PostMetadataSending:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.h_))
						});
					case d.PostMetadataSuccess:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case d.PostMetadataFailed:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.yc))
						});
					case d.GetRecommendedAppsSending:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case d.GetRecommendedAppsSuccess:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.Jz, a.recommendedAppsList))
						});
					case d.GetRecommendedAppsFailed:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case d.GetAppSending:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.h_))
						});
					case d.GetAppSuccess:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.Jz, a.app))
						});
					case d.GetAppFailed:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.yc))
						});
					case d.ClearApp:
						return s({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case d.SetUpdatableInstalls:
						return s({}, r, {
							updatableInstallsList: a.updatableInstallsList
						});
					case d.GetDevelopedAppsSending:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case d.GetDevelopedAppsSuccess:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.Jz, a.developedApps))
						});
					case d.GetDevelopedAppsFailed:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/d1/routes.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				H: function() {
					return s
				},
				_: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
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
		"../react/pages/dns/dns-records/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
		"../react/pages/email/types.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
			let s = function(u) {
				return u[u.Verified = 0] = "Verified", u[u.Pending = 1] = "Pending", u[u.Missing = 2] = "Missing", u[u.WorkerNotFound = 3] = "WorkerNotFound", u[u.Unknown = 4] = "Unknown", u[u.Loading = 5] = "Loading", u
			}({});
			const p = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/config.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				jk: function() {
					return h
				},
				w8: function() {
					return A
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				s = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				p = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function u(T) {
				for (var M = 1; M < arguments.length; M++) {
					var C = arguments[M] != null ? Object(arguments[M]) : {},
						y = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(C).filter(function(S) {
						return Object.getOwnPropertyDescriptor(C, S).enumerable
					})), y.forEach(function(S) {
						m(T, S, C[S])
					})
				}
				return T
			}

			function m(T, M, C) {
				return M = i(M), M in T ? Object.defineProperty(T, M, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[M] = C, T
			}

			function i(T) {
				var M = d(T, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function d(T, M) {
				if (typeof T != "object" || T === null) return T;
				var C = T[Symbol.toPrimitive];
				if (C !== void 0) {
					var y = C.call(T, M || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(T)
			}
			const g = "Notifications",
				t = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				l = (0, e.BC)`${a}/destinations`,
				c = (0, e.BC)`${a}/create`,
				f = (0, e.BC)`${c}/${"alertType"}`,
				_ = (0, e.BC)`${a}/edit/${"alertId"}`,
				h = u({
					account: r,
					alerts: a,
					destinations: l,
					createAlert: c,
					createAlertWithSelection: f,
					editAlert: _
				}, o._j, s._j),
				A = u({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, p.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				_j: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				s = (0, e.BC)`${o}/pagerduty/connect`,
				p = (0, e.BC)`${o}/pagerduty/register`,
				u = (0, e.BC)`${o}/pagerduty`,
				m = {
					pagerDutyConnect: s,
					pagerDutyRegister: p,
					pagerDutyList: u
				};
			var i = null
		},
		"../react/pages/home/alerts/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				AA: function() {
					return q
				},
				AN: function() {
					return ct
				},
				AY: function() {
					return Ce
				},
				Ac: function() {
					return ve
				},
				Am: function() {
					return h
				},
				B2: function() {
					return H
				},
				BB: function() {
					return b
				},
				BF: function() {
					return Ne
				},
				BQ: function() {
					return Ae
				},
				E8: function() {
					return z
				},
				Fl: function() {
					return Fe
				},
				Fu: function() {
					return D
				},
				Gc: function() {
					return st
				},
				Hc: function() {
					return Ct
				},
				IO: function() {
					return Qe
				},
				JK: function() {
					return k
				},
				K: function() {
					return y
				},
				LI: function() {
					return Ge
				},
				LX: function() {
					return Me
				},
				L_: function() {
					return ze
				},
				Ly: function() {
					return $e
				},
				MR: function() {
					return F
				},
				Mj: function() {
					return ce
				},
				NB: function() {
					return Je
				},
				Oe: function() {
					return Nt
				},
				Or: function() {
					return J
				},
				P5: function() {
					return et
				},
				PE: function() {
					return Ke
				},
				Pd: function() {
					return tt
				},
				Pk: function() {
					return X
				},
				Pp: function() {
					return je
				},
				Q1: function() {
					return O
				},
				Qr: function() {
					return we
				},
				Qv: function() {
					return Le
				},
				Rp: function() {
					return he
				},
				S7: function() {
					return it
				},
				Sh: function() {
					return Ve
				},
				Sl: function() {
					return $t
				},
				TZ: function() {
					return W
				},
				Tg: function() {
					return pe
				},
				Tp: function() {
					return ut
				},
				Uy: function() {
					return mt
				},
				Vw: function() {
					return U
				},
				W3: function() {
					return V
				},
				WR: function() {
					return pt
				},
				WX: function() {
					return Te
				},
				XF: function() {
					return _t
				},
				Xb: function() {
					return $
				},
				Zs: function() {
					return Be
				},
				_f: function() {
					return Ye
				},
				b4: function() {
					return Ee
				},
				bc: function() {
					return Kt
				},
				c2: function() {
					return I
				},
				cE: function() {
					return oe
				},
				dh: function() {
					return Re
				},
				fE: function() {
					return be
				},
				g7: function() {
					return xe
				},
				hO: function() {
					return Xe
				},
				hV: function() {
					return at
				},
				hk: function() {
					return A
				},
				hr: function() {
					return te
				},
				it: function() {
					return We
				},
				j3: function() {
					return He
				},
				jN: function() {
					return me
				},
				jo: function() {
					return Wt
				},
				k3: function() {
					return Rt
				},
				m8: function() {
					return ue
				},
				nm: function() {
					return R
				},
				oW: function() {
					return le
				},
				pH: function() {
					return K
				},
				pi: function() {
					return de
				},
				r4: function() {
					return Gt
				},
				rI: function() {
					return ne
				},
				s7: function() {
					return gt
				},
				sg: function() {
					return Y
				},
				tB: function() {
					return f
				},
				tN: function() {
					return ke
				},
				u_: function() {
					return zt
				},
				vV: function() {
					return rt
				},
				vc: function() {
					return re
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				o = n.n(e),
				s = n("../../../../node_modules/moment/moment.js"),
				p = n.n(s),
				u = n("../../../common/util/types/src/api/domain.ts"),
				m = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				i = n("../react/utils/url.ts"),
				d = n("../react/pages/home/domain-registration/config.ts"),
				g = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				t = n("../react/pages/home/domain-registration/types.ts");

			function r(v) {
				for (var w = 1; w < arguments.length; w++) {
					var fe = arguments[w] != null ? Object(arguments[w]) : {},
						Pe = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Pe.push.apply(Pe, Object.getOwnPropertySymbols(fe).filter(function(Ze) {
						return Object.getOwnPropertyDescriptor(fe, Ze).enumerable
					})), Pe.forEach(function(Ze) {
						a(v, Ze, fe[Ze])
					})
				}
				return v
			}

			function a(v, w, fe) {
				return w = l(w), w in v ? Object.defineProperty(v, w, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[w] = fe, v
			}

			function l(v) {
				var w = c(v, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function c(v, w) {
				if (typeof v != "object" || v === null) return v;
				var fe = v[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Pe = fe.call(v, w || "default");
					if (typeof Pe != "object") return Pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(v)
			}

			function f(v) {
				return v.filter(w => w.isSelected).reduce((w, {
					name: fe,
					fees: Pe,
					isZoneEntitlementPresent: Ze
				}) => Ze || !(0, e.isNumber)(Pe == null ? void 0 : Pe.transfer_fee) ? w : ve(fe) ? w + (Pe == null ? void 0 : Pe.transfer_fee) * 2 : w + (Pe == null ? void 0 : Pe.transfer_fee), 0)
			}

			function _(v) {
				return v.filter(w => w.registrar.toLowerCase() === "godaddy")
			}
			const h = "MMM D, YYYY";

			function A(v, w, fe, Pe) {
				var Ze, Et, Tt, At, Bt, Pt, lt, Lt, Ot, It, St, Dt;
				const nt = v[w.name],
					Vt = () => ve(w.name) ? p()(w.expires_at).add(2, "years").format(h) : p()(w.expires_at).add(1, "year").format(h);
				return r({
					name: w.name,
					zone: nt,
					entitlements: fe,
					registryCheck: Pe,
					nameservers: w.name_servers,
					isAvailable: w.available,
					lastKnownStatus: w.last_known_status,
					authCode: w.auth_code,
					isEnterpriseZone: (nt == null || (Ze = nt.plan) === null || Ze === void 0 ? void 0 : Ze.legacy_id) === "enterprise",
					isActiveZone: (nt == null ? void 0 : nt.status) === "active",
					corResponsesPending: w.cor_responses_pending,
					isCorLocked: w.cor_locked,
					corLockedUntil: w.cor_locked_until ? p()(w.cor_locked_until).format(h) : null,
					isFullZone: (nt == null ? void 0 : nt.type) == t.xd.Full,
					isLocked: w.locked,
					registrar: w.current_registrar || d.JM,
					zoneId: nt == null ? void 0 : nt.id,
					currentExpiration: p()(w.expires_at).format(h),
					newExpiration: Vt(),
					lastEntitledAt: w.last_entitled_at ? new Date(w.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(fe) && !!fe.find(Ut => Ut.id === d.g5 && Ut.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: w.transfer_in && C(w.transfer_in) || t.BJ.Pending,
					autoTransferStatus: t._n.Pending,
					transferConditions: w.transfer_conditions,
					transferApiCallStatus: t.Yh.Pending,
					transferIn: w.transfer_in,
					transferOut: w.transfer_out,
					autoRenew: w.auto_renew === !0,
					lastTransferredAt: w.last_transferred_at,
					createdAt: w.created_at,
					paymentExpiresAt: p()(w.payment_expires_at).isValid() ? p()(w.payment_expires_at) : p()(w.expires_at).isValid() ? p()(w.expires_at) : "",
					contactIds: {
						[t.l2.Administrator]: (Et = w.contacts) === null || Et === void 0 || (Tt = Et.administrator) === null || Tt === void 0 ? void 0 : Tt.id,
						[t.l2.Billing]: (At = w.contacts) === null || At === void 0 || (Bt = At.billing) === null || Bt === void 0 ? void 0 : Bt.id,
						[t.l2.Registrant]: (Pt = w.contacts) === null || Pt === void 0 || (lt = Pt.registrant) === null || lt === void 0 ? void 0 : lt.id,
						[t.l2.Technical]: (Lt = w.contacts) === null || Lt === void 0 || (Ot = Lt.technical) === null || Ot === void 0 ? void 0 : Ot.id
					},
					landing: w.landing,
					privacy: w.privacy,
					whois: w.whois,
					emailVerified: w.email_verified,
					materialChanges: S(w.material_changes),
					corChanges: w.cor_changes ? b(Object.assign(r({}, M), w.cor_changes)) : {},
					registryStatuses: w.registry_statuses ? w.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (It = w.domain_protection_services) === null || It === void 0 ? void 0 : It.status
					},
					deletion: {
						isDeletable: w == null || (St = w.deletion) === null || St === void 0 ? void 0 : St.is_deletable
					},
					premiumType: w == null ? void 0 : w.premium_type,
					fees: w == null ? void 0 : w.fees
				}, w.domain_move && {
					domainMove: {
						ineligibilityReasons: (Dt = w.domain_move) === null || Dt === void 0 ? void 0 : Dt.ineligibility_reasons
					}
				}, w.actionable_metadata && {
					actionableMetadata: T(w.actionable_metadata)
				}, w.policies && {
					policies: r({}, w.policies.suspension && {
						suspension: {
							parked: w.policies.suspension.parked,
							parkingReason: w.policies.suspension.parking_reason,
							paymentExpired: w.policies.suspension.payment_expired
						}
					})
				})
			}

			function T(v) {
				return v.map(w => ({
					accountContext: w.account_context,
					createdAt: w.created_at,
					expiresAt: w.expires_at,
					sentAt: w.sent_at,
					status: w.status,
					type: w.type
				}))
			}
			const M = {
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

			function C(v) {
				switch (v.enter_auth_code) {
					case t.lW.OK:
						return t.BJ.Valid;
					case t.lW.NEEDED:
						return t.BJ.Pending;
					case t.lW.UNKNOWN:
						return t.BJ.Pending;
					case t.lW.REJECTED:
						return t.BJ.Error;
					case t.lW.TRYING:
						return t.BJ.Pending
				}
				return t.BJ.Pending
			}

			function y(v) {
				let w = v.extensions;
				(w == null ? void 0 : w.application_purpose) && (w == null ? void 0 : w.nexus_category) && (v.extensions = {
					nexusCategory: w.nexus_category,
					applicationPurpose: w.application_purpose
				});
				let fe = r({}, typeof v.id == "string" ? {
					id: v.id
				} : {}, {
					first_name: v.firstName,
					organization: v.organization,
					address: v.address1,
					city: v.city,
					state: v.state || "N/A",
					zip: v.zip,
					country: v.country,
					phone: v.phone,
					email: v.email,
					fax: "",
					last_name: v.lastName,
					address2: v.address2,
					email_verified: v.emailVerified
				}, v.extensions ? {
					extensions: {
						nexus_category: v.extensions.nexusCategory,
						application_purpose: v.extensions.applicationPurpose
					}
				} : {});
				return Ie(fe)
			}

			function S(v) {
				let w = [];
				const fe = {
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
				for (const Pe in v) {
					const Ze = v[Pe],
						Et = fe[Ze];
					w.push(Et)
				}
				return w
			}
			const L = v => {
				if (!v) return null;
				let w = v;
				return v.includes("C31") && (w = "C31"), v.includes("C32") && (w = "C32"), w
			};

			function b(v) {
				return r({}, typeof v.id == "string" ? {
					id: v.id
				} : {}, {
					firstName: v.first_name,
					organization: v.organization,
					address1: v.address,
					city: v.city,
					state: v.state,
					zip: v.zip,
					country: v.country,
					phone: v.phone.trim(),
					email: v.email.trim(),
					lastName: v.last_name,
					address2: v.address2,
					emailVerified: v.email_verified
				}, v.extensions ? {
					extensions: {
						nexusCategory: L(v.extensions.nexus_category),
						applicationPurpose: v.extensions.application_purpose
					}
				} : {})
			}

			function P(v = {}) {
				const w = {
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
						}, v.zone && v.zone.plan || {}),
						type: EZoneType.Full
					}, v.zone || {}),
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
					}, v.transferConditions || {}),
					transferIn: r({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, v.transferIn || {}),
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
				return Object.assign(w, v)
			}

			function O(v = {}) {
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
				}, v)
			}

			function D(v) {
				const w = d.Py.concat(d.ui).reduce((fe, Pe) => r({}, fe, {
					[Pe]: []
				}), {});
				return v.forEach(fe => {
					let Pe = B(fe.registrar);
					Pe in w || (Pe = d.ui), Y(fe.name) && (Pe = "uk"), w[Pe].push(fe)
				}), Object.keys(w).sort((fe, Pe) => fe.localeCompare(Pe)).map(fe => ({
					registrar: fe,
					domains: w[fe]
				})).filter(fe => fe.domains.length > 0)
			}

			function B(v) {
				return v == null ? void 0 : v.toLowerCase().replace(/\s|,|\./g, "")
			}

			function U(v) {
				if (!v || !v.registrar) return "unknown";
				if (Y(v.name)) return "uk";
				const w = B(v.registrar);
				return w in d.gM ? w : "unknown"
			}
			const Z = [];

			function ae(v) {
				return Z.some(w => v.endsWith("." + w))
			}

			function _e(v) {
				return !v.isEnterpriseZone || !Array.isArray(v.entitlements) ? !1 : !!v.entitlements.find(({
					id: w,
					allocation: fe
				}) => w === d.g5 && fe.value === !0)
			}

			function de(v) {
				var w;
				const fe = [t.rj.CLIENT_HOLD, t.rj.SERVER_HOLD, t.rj.SERVER_TRANSFER_PROHIBITED, t.rj.PENDING_DELETE, t.rj.PENDING_TRANSFER, t.rj.CLIENT_TRANSFER_PROHIBITED];
				let Pe = !1,
					Ze = null;
				return (w = v.registryStatuses) === null || w === void 0 || w.some(Et => {
					fe.includes(Et) && (Ze = Et, Pe = !0)
				}), [Pe, Ze]
			}

			function ue(v, w = !1) {
				if (!v) return [!1, g.keys.cannot_transfer_default];
				if (v.zone.status !== "active") return [!1, g.keys.cannot_transfer_zone_not_active];
				if (!v.isFullZone && !_e(v)) return [!1, g.keys.cannot_transfer_zone_not_eligible];
				if (v.registrar === "Cloudflare") return [!1, g.keys.cannot_transfer_domain_on_cf];
				if (v.isAvailable) return [!1, g.keys.cannot_transfer_domain_available];
				if (!v.transferConditions) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (!w && mt(v == null ? void 0 : v.premiumType)) return [!1, g.keys.cannot_transfer_domain_premium];
				if (K(v)) return [!1, g.keys.cannot_transfer_domain_transfer_in_progress];
				let fe;
				for (fe in v.transferConditions)
					if (fe !== "not_premium" && !v.transferConditions[fe]) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (ae(v.name)) return [!1, g.keys.cannot_transfer_domain_tld_not_supported];
				const [Pe, Ze] = de(v);
				return Pe && Ze ? [!1, g.keys.cannot_transfer_domain_registry_status[Ze]] : [!0, ""]
			}

			function K(v) {
				var w, fe;
				return !!v.transferIn && !((w = v.transferConditions) === null || w === void 0 ? void 0 : w.not_started) && !!(Y(v.name) || ((fe = v.registryStatuses) === null || fe === void 0 ? void 0 : fe.includes(t.rj.PENDING_TRANSFER)))
			}

			function Q(v) {
				return !!v.registrar && !!v.currentExpiration
			}

			function H(v, w = !1) {
				const [fe] = ue(v, w);
				return Q(v) ? Ue(v) ? t.M5.InProgressOrOnCF : fe ? t.M5.Supported : t.M5.Unsupported : t.M5.Unknown
			}

			function I(v) {
				return v.transferIn && [t.lW.REJECTED, t.lW.NEEDED].includes(v.transferIn.enter_auth_code) || !1
			}

			function F(v) {
				return v.registrar === "Cloudflare"
			}

			function ne(v) {
				return !!(v == null ? void 0 : v.includes(t.rj.AUTO_RENEW_PERIOD))
			}

			function ce(v) {
				return !!(v == null ? void 0 : v.includes(t.rj.PENDING_TRANSFER))
			}
			const G = "Invalid date";

			function J(v) {
				return v.newExpiration === G ? "Unavailable" : v.newExpiration
			}

			function W(v) {
				return v.currentExpiration === G ? "Unavailable" : v.currentExpiration
			}

			function q(v) {
				return v.substring(v.indexOf("."))
			}

			function $(v = "") {
				return v.indexOf(".") !== -1 ? v.substring(0, v.indexOf(".")) : v
			}

			function te(v) {
				return v.map(w => w.name).map(w => q(w)).filter((w, fe, Pe) => !Pe.includes(w, fe + 1))
			}

			function Ee(v) {
				if (d.no) return [!0, ""];
				if (!F(v)) return [!1, t.ok.NotOnCF];
				if (v.isCorLocked) return [!1, v.corLockedUntil ? t.ok.CorLockedUntil : t.ok.CorLock];
				if (v.lastTransferredAt) {
					const w = p()(v.lastTransferredAt),
						fe = p().duration(p()().diff(w)).as("days"),
						Pe = Y(v.name);
					if (fe < (Pe ? 1 : 60)) return [!1, Pe ? t.ok.RecentTransferUK : t.ok.RecentTransfer]
				}
				if (v.createdAt) {
					const w = p()(v.createdAt);
					if (p().duration(p()().diff(w)).as("days") < 60) return [!1, t.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Te(v) {
				return !!(d.Bc || v.transferOut)
			}

			function Ue(v) {
				return xe(v) || F(v)
			}

			function ke(v) {
				return !xe(v) && F(v)
			}

			function xe(v) {
				return !v || v.lastKnownStatus === "pendingTransfer" || v.lastKnownStatus === "transferFOAPending" || !F(v) && v.transferConditions && !v.transferConditions.not_started || !1
			}

			function Ke(v) {
				return !(ae(v.name) || v.transferConditions && !v.transferConditions.supported_tld)
			}

			function Le(v) {
				return (v == null ? void 0 : v.includes("/")) ? !0 : v.split("").some(w => w.charCodeAt(0) > 123)
			}

			function X(v) {
				switch (v) {
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

			function re(v) {
				return p()(v.paymentExpiresAt).isBefore(p()())
			}

			function me(v) {
				return v.transferIn && v.transferIn.enter_auth_code === t.lW.REJECTED || !1
			}

			function k(v) {
				const w = ["CU", "KP", "IR", "SY"];
				return v.filter(fe => !w.includes(fe.code))
			}

			function pe(v) {
				if (!!v) return `${v.charAt(0).toUpperCase()}${v.slice(1)}${v.charAt(v.length-1)==="."?"":"."}`
			}

			function Ie(v) {
				const w = {};
				for (const [fe, Pe] of Object.entries(v)) {
					if (Pe && typeof Pe == "string") {
						Object.assign(w, {
							[fe]: Pe.trim()
						});
						continue
					}
					Object.assign(w, {
						[fe]: Pe
					})
				}
				return w
			}

			function Be(v) {
				return p()(v).add(40, "days")
			}

			function ze(v) {
				const w = v.paymentExpiresAt || v.payment_expires_at,
					fe = Be(w);
				return p()().isBetween(w, fe)
			}

			function be(v) {
				var w;
				return !(v == null ? void 0 : v.registryStatuses) || !Array.isArray(v == null ? void 0 : v.registryStatuses) && !(0, e.isString)(v == null ? void 0 : v.registryStatuses) ? !1 : (w = v.registryStatuses) === null || w === void 0 ? void 0 : w.includes(t.rj.REDEMPTION_PERIOD)
			}

			function Re(v) {
				var w;
				return !(v == null ? void 0 : v.registryStatuses) || !Array.isArray(v == null ? void 0 : v.registryStatuses) && !(0, e.isString)(v == null ? void 0 : v.registryStatuses) ? !1 : (w = v.registryStatuses) === null || w === void 0 ? void 0 : w.includes(t.rj.PENDING_DELETE)
			}

			function je(v) {
				return [".us"].includes(v)
			}

			function We(v) {
				return [".us"].includes(v)
			}

			function Xe(v) {
				switch (v) {
					case ".us":
						return ge();
					default:
						return []
				}
			}

			function V(v) {
				switch (v) {
					case ".us":
						return se;
					default:
						return {}
				}
			}
			const se = {
				[t.A9.P3]: [t.Fi.C11]
			};

			function ge() {
				return [{
					name: t.IP.application_purpose,
					label: t.rb.application_purpose,
					options: Object.entries(t.A9).map(([v, w]) => ({
						value: v,
						label: w
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: t.IP.nexus_category,
					label: t.rb.nexus_category,
					options: Object.entries(t.Fi).map(([v, w]) => ({
						value: v,
						label: w
					}))
				}]
			}

			function Me(v, w, fe) {
				return w[w.length - 1][fe] === v[fe]
			}

			function we(v) {
				return Boolean(Object.keys(v).length === 0)
			}

			function Ne(v) {
				return p()().add(v, "year").format(h)
			}

			function Ye({
				accountName: v
			}) {
				var w;
				const fe = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((w = v.toLowerCase().match(fe)) === null || w === void 0 ? void 0 : w[0]) || ""
			}

			function rt(v) {
				return !!v.match(m.default.email)
			}

			function ut(v) {
				return v === u.W7.PENDING_UPDATE
			}

			function st(v) {
				return v ? Object.values(u.wR).filter(w => w !== u.wR.OFFBOARDED).includes(v) : !1
			}

			function gt(v) {
				return v ? [u.wR.LOCKED, u.wR.ONBOARDED, u.wR.ONBOARDING_INITIATED, u.wR.PENDING_REGISTRY_LOCK, u.wR.PENDING_REGISTRY_UNLOCK, u.wR.PENDING_UNLOCK_APPROVAL].includes(v) : !1
			}

			function ft(v) {
				return v ? u.wR.UNLOCKED === v : !1
			}

			function dt(v) {
				return v ? u.wR.LOCKED === v : !1
			}

			function Ge(v) {
				return v ? u.wR.PENDING_REGISTRY_LOCK === v : !1
			}

			function Ae(v) {
				return v ? [u.wR.PENDING_REGISTRY_UNLOCK, u.wR.PENDING_UNLOCK_APPROVAL].includes(v) : !1
			}

			function Qe(v) {
				var w;
				return !1
			}

			function pt(v) {
				var w;
				return !1
			}

			function ct(v) {
				var w;
				return !1
			}

			function _t(v) {
				var w;
				return !1
			}

			function z(v) {
				var w;
				return !1
			}

			function le(v) {
				return Object.keys(u.wR).find(w => u.wR[w].toLowerCase() === v.toLowerCase())
			}

			function Ce(v) {
				var w;
				const fe = (w = le(v)) === null || w === void 0 ? void 0 : w.toLowerCase();
				return fe ? g.keys.protection_status[fe] : g.keys.protection_status.unknown
			}

			function Oe(v) {
				return ["com", "net"].includes(v)
			}

			function Fe(v) {
				const w = (0, i.pu)(v);
				return Oe(w) ? u.wR.PENDING_REGISTRY_LOCK : u.wR.LOCKED
			}

			function Ve(v) {
				return (0, i.pu)(v) === "co" ? 5 : 10
			}

			function R(v, w) {
				return w ? 1 : (0, i.pu)(v) === "co" ? 5 : (0, i.pu)(v) === "org" ? 1 : 10
			}

			function Y(v) {
				return (0, i.pu)(v) === "uk"
			}

			function oe(v) {
				return (0, i.pu)(v) === "us"
			}

			function ve(v) {
				return (0, i.pu)(v) === "ai"
			}

			function he(v) {
				return p()(v).isValid()
			}

			function $e(v) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(v)
			}

			function et(v) {
				return !!(v == null ? void 0 : v.id)
			}

			function Je(v) {
				return v ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(v) : !1
			}

			function tt(v) {
				return v ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(v) : !1
			}

			function at(v) {
				var w;
				return (v == null ? void 0 : v.lastKnownStatus) ? (w = v.lastKnownStatus) === null || w === void 0 ? void 0 : w.includes("deletionIrredeemable") : !1
			}

			function mt(v) {
				switch (v) {
					case t.Vs.NonStandard_NonStandard:
					case t.Vs.NonStandard_Standard:
					case t.Vs.Standard_Standard:
					case t.Vs.Standard_NonStandard:
						return !0;
					case t.Vs.Not_Premium:
					default:
						return !1
				}
			}

			function Ct(v) {
				if (!v || !v.message) return t.OJ.DEFAULT;
				const {
					message: w
				} = v;
				switch (!0) {
					case w.includes("feature disabled"):
						return t.OJ.FEATURE_DISABLED;
					case w.includes("email unverified"):
						return t.OJ.EMAIL_UNVERIFIED;
					case w.includes("account blocked"):
						return t.OJ.ACCOUNT_BLOCKED;
					default:
						return t.OJ.DEFAULT
				}
			}

			function it(v) {
				var w, fe;
				return !!(((w = v.policies) === null || w === void 0 || (fe = w.suspension) === null || fe === void 0 ? void 0 : fe.parked) && v.policies.suspension.parkingReason)
			}

			function He(v) {
				var w, fe;
				return it(v) && ((w = v.policies) === null || w === void 0 || (fe = w.suspension) === null || fe === void 0 ? void 0 : fe.parkingReason) === t.qK.EMAIL_VERIFICATION
			}

			function Rt(v) {
				var w, fe;
				return it(v) && ((w = v.policies) === null || w === void 0 || (fe = w.suspension) === null || fe === void 0 ? void 0 : fe.parkingReason) === t.qK.TRUST_AND_SAFETY
			}

			function $t(v) {
				var w;
				return !((w = v.domainMove) === null || w === void 0 ? void 0 : w.ineligibilityReasons.length)
			}

			function Nt(v) {
				var w, fe;
				return !!((w = v.domainMove) === null || w === void 0 || (fe = w.ineligibilityReasons) === null || fe === void 0 ? void 0 : fe.includes(t.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function kt(v) {
				var w;
				return (w = v.actionableMetadata) === null || w === void 0 ? void 0 : w.find(fe => fe.type === t.wg.DOMAIN_MOVE)
			}

			function Wt(v) {
				const w = kt(v);
				return (w == null ? void 0 : w.status) === "pending" && w.accountContext === t._5.GAINING
			}

			function zt(v) {
				const w = kt(v);
				return (w == null ? void 0 : w.status) === "pending" && w.accountContext === t._5.LOSING
			}

			function Gt(v) {
				const w = q(v.name);
				return !d.Pf.includes(w)
			}

			function Kt(v) {
				return d.QZ.includes(v)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Bc: function() {
					return d
				},
				HG: function() {
					return xe
				},
				Hv: function() {
					return Ke
				},
				JM: function() {
					return s
				},
				Pf: function() {
					return l
				},
				Py: function() {
					return m
				},
				QZ: function() {
					return c
				},
				WK: function() {
					return t
				},
				g5: function() {
					return r
				},
				gM: function() {
					return u
				},
				jk: function() {
					return ke
				},
				no: function() {
					return g
				},
				uY: function() {
					return i
				},
				ui: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../flags.ts");
			const s = "Unknown",
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
				d = (0, o.J8)("registrar_mock_transfer_out") || !1,
				g = (0, o.J8)("registrar_show_unlock_ui") || !1,
				t = 250,
				r = "cf_registrar.enabled",
				a = "@abcABC1234567890123456",
				l = [".us"],
				c = [".travel", ".us", ".ong", ".ngo"],
				f = (0, e.BC)`/${"accountId"}`,
				_ = (0, e.BC)`${f}/add-site`,
				h = (0, e.BC)`${f}/registrar`,
				A = (0, e.BC)`${h}/domains`,
				T = (0, e.BC)`${h}/action-center`,
				M = (0, e.BC)`${h}/domain/${"zoneName"}`,
				C = (0, e.BC)`${M}/configuration`,
				y = (0, e.BC)`${M}/contacts`,
				S = (0, e.BC)`${h}/pricing`,
				L = (0, e.BC)`${h}/protection`,
				b = (0, e.BC)`${h}/register`,
				P = (0, e.BC)`${b}/checkout`,
				O = (0, e.BC)`${b}/checkout/${"token"}`,
				D = (0, e.BC)`${b}/success`,
				B = (0, e.BC)`${h}/tlds`,
				U = (0, e.BC)`${h}/transfer`,
				Z = (0, e.BC)`${h}/transfer/${"zoneName"}`,
				ae = (0, e.BC)`/registrar/accounts/verify_email`,
				_e = (0, e.BC)`/registrar/domains/verify_email`,
				de = (0, e.BC)`/sign-up/registrar`,
				ue = (0, e.BC)`${h}/verify-email`,
				K = (0, e.BC)`${f}/${"zoneName"}`,
				Q = (0, e.BC)`${f}/domains`,
				H = (0, e.BC)`${Q}/action-center`,
				I = (0, e.BC)`${Q}/${"zoneName"}`,
				F = (0, e.BC)`${I}/configuration`,
				ne = (0, e.BC)`${I}/contacts`,
				ce = (0, e.BC)`${Q}/pricing`,
				G = (0, e.BC)`${Q}/protection`,
				J = (0, e.BC)`${Q}/register`,
				W = (0, e.BC)`${J}/checkout`,
				q = (0, e.BC)`${J}/checkout/${"token"}`,
				$ = (0, e.BC)`${J}/success`,
				te = (0, e.BC)`${Q}/tlds`,
				Ee = (0, e.BC)`${Q}/transfer`,
				Te = (0, e.BC)`${Q}/transfer/${"zoneName"}`,
				Ue = (0, e.BC)`${Q}/verify-email`,
				ke = {
					addSite: _,
					domains: A,
					domainsActionCenter: T,
					domainsDomain: M,
					domainsDomainConfiguration: C,
					domainsDomainContacts: y,
					domainsPricing: S,
					domainsProtection: L,
					domainsRegister: b,
					domainsRegisterCheckout: P,
					domainsRegisterCheckoutToken: O,
					domainsRegisterSuccess: D,
					domainsTlds: B,
					domainsTransfer: U,
					domainsTransferZone: Z,
					registrar: h,
					registrarAccountsVerifyEmail: ae,
					registrarDomainsVerifyEmail: _e,
					signup: de,
					verifyEmail: ue,
					zone: K
				},
				xe = {
					LEGACY_domains: Q,
					LEGACY_domainsActionCenter: H,
					LEGACY_domainsDomain: I,
					LEGACY_domainsDomainConfiguration: F,
					LEGACY_domainsDomainContacts: ne,
					LEGACY_domainsPricing: ce,
					LEGACY_domainsProtection: G,
					LEGACY_domainsRegister: J,
					LEGACY_domainsRegisterCheckout: W,
					LEGACY_domainsRegisterCheckoutToken: q,
					LEGACY_domainsRegisterSuccess: $,
					LEGACY_domainsTlds: te,
					LEGACY_domainsTransfer: Ee,
					LEGACY_domainsTransferZone: Te,
					LEGACY_verifyEmail: Ue
				},
				Ke = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts");
			const s = g => {
					const t = g && g.accountFlags && g.accountFlags.data && g.accountFlags.data.registrar && g.accountFlags.data.registrar.canary_tlds;
					return t ? t.split(",").map(r => r.trim()) : []
				},
				p = g => {
					var t, r, a;
					return ((t = g.accountFlags) === null || t === void 0 || (r = t.data) === null || r === void 0 || (a = r.registrar) === null || a === void 0 ? void 0 : a["registrar-managed"]) || !1
				},
				u = g => g.account ? g.account.email : "",
				m = g => !1,
				i = g => m(g) && (0, e.oJ)((0, e.Zu)(g)),
				d = g => {
					const {
						hasTrademarkClaim: t,
						trademarkNoticeAgreement: r
					} = g.registrar.registrations;
					return t && !(r.accepted_date || r.id || r.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				J: function() {
					return r
				},
				U: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				s = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = n.n(s),
				u = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function m(a) {
				for (var l = 1; l < arguments.length; l++) {
					var c = arguments[l] != null ? Object(arguments[l]) : {},
						f = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(c).filter(function(_) {
						return Object.getOwnPropertyDescriptor(c, _).enumerable
					})), f.forEach(function(_) {
						i(a, _, c[_])
					})
				}
				return a
			}

			function i(a, l, c) {
				return l = d(l), l in a ? Object.defineProperty(a, l, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[l] = c, a
			}

			function d(a) {
				var l = g(a, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function g(a, l) {
				if (typeof a != "object" || a === null) return a;
				var c = a[Symbol.toPrimitive];
				if (c !== void 0) {
					var f = c.call(a, l || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(a)
			}
			let t = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a.DOMAIN_MOVE_START_FLOW = "Start domain move flow", a.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", a.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", a.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", a.DOMAIN_MOVE_SUBMIT = "Submit domain move", a.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", a.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", a.DOMAIN_MOVE_CANCEL = "Domain move cancel", a.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", a.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", a.ACTION_CENTER_NAVIGATE = "Navigate to actions center", a.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", a
			}({});

			function r(a, l, c) {
				if (!(l == null ? void 0 : l.name)) return null;
				p().sendEvent(a, m({
					domain: {
						name: l.name,
						premium: (0, u.Uy)(l == null ? void 0 : l.premiumType),
						paymentExpiresAt: o()(l == null ? void 0 : l.paymentExpiresAt).format()
					},
					category: "registrar"
				}, c))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				HX: function() {
					return s
				},
				hX: function() {
					return d
				},
				s_: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/redux/makeAction.js");
			let s = function(g) {
				return g.WORKERS = "workers", g
			}({});
			const p = [{
					value: s.WORKERS,
					label: "Workers",
					scopeKeyPrefix: "com.cloudflare.edge.worker.script",
					scopeSubsetOfPrefix: "com.cloudflare.api.account"
				}],
				u = e.eg.object({
					id: e.eg.string,
					name: e.eg.string,
					description: e.eg.string
				}),
				m = (0, o.ZP)("granularResources", "get", "/accounts/(accountId)/demoproducts"),
				i = (0, o.ZP)("noop", "get", ""),
				d = (g, t) => t == s.WORKERS ? m(g, {}) : i()
		},
		"../react/pages/home/members/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Ey: function() {
					return i
				},
				F4: function() {
					return c
				},
				Fq: function() {
					return h
				},
				Go: function() {
					return r
				},
				Lc: function() {
					return C
				},
				Np: function() {
					return g
				},
				Rl: function() {
					return t
				},
				Sb: function() {
					return a
				},
				Sw: function() {
					return M
				},
				Sz: function() {
					return T
				},
				Ti: function() {
					return y
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
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${o}/members`,
				p = (0, e.BC)`${s}/invite`,
				u = (0, e.BC)`${s}/invite/${"memberId"}`,
				m = (0, e.BC)`${s}/add-policy/${"memberId"}`,
				i = "com.cloudflare.api.account",
				g = i + "." + "zone",
				t = g + ".",
				r = 100,
				a = 200,
				l = 5,
				c = 300,
				f = "INVITE_TOAST",
				_ = "00000000000000000000000000000000",
				h = "usergroups-ui",
				A = {
					account: o,
					members: s,
					inviteMembers: p,
					editMember: u,
					addPolicy: m
				},
				T = {
					allow: "allow",
					deny: "deny"
				},
				M = {
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
				y = {
					accountId: "",
					effect: T.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				AX: function() {
					return T
				},
				Co: function() {
					return h
				},
				JP: function() {
					return A
				},
				Ld: function() {
					return a
				},
				YW: function() {
					return d
				},
				_k: function() {
					return l
				},
				c$: function() {
					return g
				},
				rC: function() {
					return S
				},
				vq: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				o = n("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				s = n("../react/pages/home/members/constants.ts");

			function p(L) {
				for (var b = 1; b < arguments.length; b++) {
					var P = arguments[b] != null ? Object(arguments[b]) : {},
						O = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(P).filter(function(D) {
						return Object.getOwnPropertyDescriptor(P, D).enumerable
					})), O.forEach(function(D) {
						u(L, D, P[D])
					})
				}
				return L
			}

			function u(L, b, P) {
				return b = m(b), b in L ? Object.defineProperty(L, b, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[b] = P, L
			}

			function m(L) {
				var b = i(L, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function i(L, b) {
				if (typeof L != "object" || L === null) return L;
				var P = L[Symbol.toPrimitive];
				if (P !== void 0) {
					var O = P.call(L, b || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(L)
			}
			const d = () => p({}, s.Ti),
				g = () => p({}, s.Lc, {
					scopes: [d()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				t = L => L.map(b => ({
					scope: {
						key: b,
						objects: [{
							key: "*"
						}]
					}
				})),
				r = (L, b, P) => {
					var O;
					let D = [],
						B = [];
					const U = [],
						Z = [];
					L.scopes.forEach(de => {
						if (de.mode === s.Sw.all) P ? D.push({
							id: P
						}) : D.push({
							scope: {
								key: `com.cloudflare.api.account.${b}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (de.mode === s.Sw.domain_group) {
							const Q = {
								id: de.resourceGroupId
							};
							de.effect === s.Sz.allow ? D.push(Q) : B.push(Q)
						} else if (de.mode === s.Sw.zone) {
							const Q = `${s.Rl}${de.zoneId}`;
							de.effect === s.Sz.allow ? U.push(Q) : Z.push(Q)
						} else if (de.mode === s.Sw.granular && de.granularResourceId) {
							var ue, K;
							const Q = de.granularProduct,
								I = `${(ue=o.s_.find(ce=>ce.value==Q))===null||ue===void 0?void 0:ue.scopeKeyPrefix}.${de.granularResourceId}`,
								ne = `${(K=o.s_.find(ce=>ce.value===Q))===null||K===void 0?void 0:K.scopeSubsetOfPrefix}.${b}`;
							D.push({
								scope: {
									key: `${I}`,
									subset_of: [{
										key: `${ne}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), U.length && (D = D.concat(t(U))), Z.length && (B = B.concat(t(Z)));
					const ae = (O = L.permission_groups) === null || O === void 0 ? void 0 : O.map(de => ({
							id: de
						})),
						_e = [];
					return _e.push({
						access: s.Sz.allow,
						permission_groups: ae,
						resource_groups: D
					}), B.length && _e.push({
						access: s.Sz.deny,
						permission_groups: ae,
						resource_groups: B
					}), _e
				},
				a = L => L.map(b => {
					var P;
					return {
						access: b.access,
						permission_groups: b.permission_groups.map(O => ({
							id: O.id
						})),
						resource_groups: (P = b.resource_groups) === null || P === void 0 ? void 0 : P.map(O => ({
							scope: {
								key: O.scope.key,
								objects: O.scope.objects
							},
							id: O.id
						}))
					}
				}),
				l = (L, b, P, O) => {
					const D = L.auto_accept;
					let B = [];
					return B = B.concat(r(L, b, P)), O && (B = B.concat(a(O))), {
						auto_accept: D,
						status: D ? "accepted" : "pending",
						policies: B
					}
				},
				c = L => {
					const b = L.split(".");
					return b[b.length - 1]
				},
				f = L => {
					var b, P;
					const O = L == null ? void 0 : L.access;
					let D = [],
						B = L == null || (b = L.resource_groups) === null || b === void 0 ? void 0 : b.map(U => {
							var Z;
							const ae = _(U);
							if ((U == null || (Z = U.meta) === null || Z === void 0 ? void 0 : Z.editable) === "false") return {
								effect: O,
								mode: s.Sw.all,
								accountId: c(U.id)
							};
							if (ae) {
								var _e;
								const de = U == null || (_e = U.scope) === null || _e === void 0 ? void 0 : _e.key.split(".").pop();
								return {
									effect: O,
									mode: s.Sw.granular,
									granularProduct: ae.value,
									granularResourceId: de
								}
							} else if (!U.name) U.scope.key.startsWith(s.Rl) ? D.push({
								key: U.scope.key
							}) : D = D.concat(U.scope.objects);
							else return {
								effect: O,
								mode: s.Sw.domain_group,
								resourceGroupId: c(U.id)
							}
						}).filter(U => U);
					if ((P = D) === null || P === void 0 ? void 0 : P.length) {
						let U = D.map(Z => {
							const ae = c(Z.key);
							return {
								effect: O,
								mode: s.Sw.zone,
								zoneId: ae
							}
						});
						B = B.length ? U.concat(B) : U
					}
					return B
				},
				_ = L => {
					var b, P, O, D;
					const B = L == null || (b = L.scope) === null || b === void 0 ? void 0 : b.key.split(".").slice(0, -1).join("."),
						U = L == null || (P = L.scope) === null || P === void 0 || (O = P.subset_of) === null || O === void 0 || (D = O[0]) === null || D === void 0 ? void 0 : D.key.split(".").slice(0, -1).join(".");
					return o.s_.find(Z => Z.scopeKeyPrefix === B && Z.scopeSubsetOfPrefix === U)
				},
				h = L => {
					if (!(L == null ? void 0 : L.length)) return [];
					const b = [];
					return L.forEach(P => {
						var O;
						(O = P.resource_groups) === null || O === void 0 || O.forEach(D => {
							var B, U;
							((B = D.scope) === null || B === void 0 || (U = B.key) === null || U === void 0 ? void 0 : U.startsWith(s.Rl)) && b.push(c(D.scope.key))
						})
					}), b
				},
				A = L => {
					if (!(L == null ? void 0 : L.length)) return [];
					const b = [];
					return L.forEach(P => {
						var O;
						(O = P.resource_groups) === null || O === void 0 || O.forEach(D => {
							var B, U;
							if (!((B = D.scope) === null || B === void 0 || (U = B.key) === null || U === void 0 ? void 0 : U.startsWith(s.Rl))) {
								var Z;
								const _e = (Z = D.scope) === null || Z === void 0 ? void 0 : Z.objects;
								for (let de = 0; de < (_e == null ? void 0 : _e.length) && de < s.r6; de++) {
									var ae;
									((ae = _e[de].key) === null || ae === void 0 ? void 0 : ae.startsWith(s.Rl)) && b.push(c(_e[de].key))
								}
							}
						})
					}), b
				},
				T = L => {
					var b;
					if (!(L == null ? void 0 : L.length)) return null;
					const P = (b = L[0]) === null || b === void 0 ? void 0 : b.permission_groups.map(U => U.id);
					let O, D;
					L == null || L.forEach(U => {
						U.access === s.Sz.allow && (O = U), U.access === s.Sz.deny && (D = U)
					});
					let B = [];
					return O && (B = f(O)), D && (B = B.concat(f(D))), {
						permission_groups: P,
						scopes: B
					}
				},
				M = "permission-groups-",
				C = new Map,
				y = L => {
					if (!L) return [];
					const b = C.get(L);
					if (b) return b;
					const P = e.E.get(`${M}${L}`);
					return C.set(L, P), P
				},
				S = (L, b) => {
					const P = [];
					for (let O = 0; O < sessionStorage.length; O++) {
						const D = sessionStorage.key(O);
						(D == null ? void 0 : D.startsWith(M)) && P.push(D)
					}
					return P.length >= 5 && e.E.remove(P[0]), e.E.set(`${M}${L}`, b)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				g: function() {
					return o
				}
			});
			var e = n("../../../common/util/types/src/api/phases/fields.tsx");
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				KO: function() {
					return i
				},
				L9: function() {
					return t
				},
				N3: function() {
					return g
				},
				zE: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						c = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), c.forEach(function(f) {
						p(r, f, l[f])
					})
				}
				return r
			}

			function p(r, a, l) {
				return a = u(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function u(r) {
				var a = m(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var c = l.call(r, a || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let i = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.SEARCH_CONFIGS = "search hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r.CLICK_DISCORD = "click hyperdrive discord", r.CLICK_COMMUNITY = "click hyperdrive community", r
				}({}),
				d = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				g = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const t = (r, a = {}) => {
				o().sendEvent(r, s({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/selectors.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				$4: function() {
					return p
				},
				GH: function() {
					return a
				},
				JZ: function() {
					return c
				},
				aR: function() {
					return t
				},
				db: function() {
					return m
				},
				ib: function() {
					return f
				},
				lW: function() {
					return h
				},
				pT: function() {
					return r
				},
				po: function() {
					return l
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts"),
				s = n("../react/common/selectors/zoneSelectors.ts");
			const p = "sourcing_kit_enabled",
				u = "sourcing_kit_waitlist",
				m = "images",
				i = "unified_images_enabled",
				d = "c2pa_polish",
				g = "CloudflareImages",
				t = A => !!(0, o.BF)(A, "images.transformations_enabled"),
				r = A => Boolean((0, o.BF)(A, "images.enabled")),
				a = A => {
					const T = (0, o.BF)(A, "images.storage");
					return typeof T == "number" && T > 0
				},
				l = A => Boolean((0, o.BF)(A, "contract.customer_enabled")),
				c = A => Boolean((0, e.oI)(A, m, p)),
				f = A => Boolean((0, s.Le)(A, g, p)),
				_ = A => Boolean(getAccountFlipperFlag(A, g, i)),
				h = A => Boolean((0, s.Le)(A, g, d))
		},
		"../react/pages/magic/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return h
				},
				Up: function() {
					return p
				},
				W8: function() {
					return g
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
					return t
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/utils/translator.tsx");
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
				u = T => [{
					value: "low",
					label: T("setting.low")
				}, {
					value: "mid",
					label: T("setting.medium")
				}, {
					value: "high",
					label: T("setting.high")
				}],
				m = T => [{
					value: "request",
					label: T("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: T("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				i = T => [{
					value: "unidirectional",
					label: T("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: T("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				d = "magic-transit",
				g = "magic-wan",
				t = "gre_tunnel",
				r = "ipsec_tunnel",
				a = "interconnect",
				l = 64,
				c = 1476,
				f = "mid",
				_ = "reply",
				h = T => [{
					value: void 0,
					label: T("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: T("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: T("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				A = T => [{
					value: "all",
					label: T("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: T("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: T("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
		"../react/pages/magic/overview/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				VZ: function() {
					return p
				},
				lC: function() {
					return s
				},
				r8: function() {
					return o
				},
				uB: function() {
					return u
				}
			});
			var e = n("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				s = "user journey",
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
		"../react/pages/magic/packet-captures/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				gb: function() {
					return t
				},
				iP: function() {
					return L
				},
				xL: function() {
					return A
				},
				rD: function() {
					return P
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
					return d
				},
				UA: function() {
					return y
				},
				K5: function() {
					return a
				},
				Ii: function() {
					return M
				},
				PJ: function() {
					return b
				},
				bK: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				u = n("../node_modules/@cloudflare/elements/es/index.js");
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
				d = () => o().createElement(g, null, o().createElement("svg", {
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
				g = (0, s.createComponent)(({
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
				t = () => o().createElement(r, null, o().createElement(u.Ei, {
					alt: "airplane",
					src: p,
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
				a = () => o().createElement(l, null, o().createElement("svg", {
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
				l = (0, s.createComponent)(({
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
				f = (0, s.createComponent)(({
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
				_ = () => o().createElement(h, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				h = (0, s.createComponent)(({
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
				A = () => o().createElement(T, null, o().createElement("svg", {
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
				T = (0, s.createComponent)(({
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
				M = () => o().createElement(C, null, o().createElement("svg", {
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
				C = (0, s.createComponent)(({
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
				y = () => o().createElement(S, null, o().createElement("svg", {
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
				S = (0, s.createComponent)(({
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
				b = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return s
				},
				ST: function() {
					return p
				},
				wM: function() {
					return o
				}
			});
			var e = n("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				s = "login-apple-jwt",
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
		"../react/pages/page-rules/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				_: function() {
					return s
				},
				c: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);
			let s = function(u) {
				return u.TEMPLATE_SELECTED = "template selected", u.TEMPLATE_PRODUCT_SELECTED = "template product selected", u.TEMPLATE_SAVE_DRAFT = "template save draft", u.TEMPLATE_CANCEL = "template cancel", u.TEMPLATE_DEPLOY = "template deploy", u
			}({});
			const p = (u, m) => o().sendEvent(u, {
				template_name: m
			})
		},
		"../react/pages/pages/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				A: function() {
					return _
				},
				C1: function() {
					return g
				},
				Dp: function() {
					return U
				},
				GF: function() {
					return P
				},
				HD: function() {
					return T
				},
				IK: function() {
					return u
				},
				L7: function() {
					return s
				},
				Li: function() {
					return f
				},
				Ni: function() {
					return S
				},
				OG: function() {
					return ue
				},
				QF: function() {
					return _e
				},
				QV: function() {
					return y
				},
				Sx: function() {
					return M
				},
				Ub: function() {
					return ae
				},
				X3: function() {
					return r
				},
				aP: function() {
					return i
				},
				bA: function() {
					return D
				},
				eO: function() {
					return a
				},
				fH: function() {
					return c
				},
				fQ: function() {
					return h
				},
				fR: function() {
					return e
				},
				ff: function() {
					return O
				},
				hE: function() {
					return Z
				},
				iS: function() {
					return A
				},
				ku: function() {
					return B
				},
				nY: function() {
					return C
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
					return t
				},
				zF: function() {
					return b
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
				g = 100,
				t = 350,
				r = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				l = 10,
				c = "_headers",
				f = "_redirects",
				_ = "_routes.json",
				h = "_worker.js",
				A = "do-a-barrel-roll",
				T = [c, f, _, h],
				M = 1024 * 1024 * 25,
				C = 1e3,
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
				S = 1e5,
				L = 75e3,
				b = 2e5,
				P = 15e4,
				O = 3e3,
				D = 2250,
				B = "workers",
				U = "cloudflare_pages_build_caching",
				Z = 2;
			let ae = function(K) {
				return K[K.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", K[K.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", K[K.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", K[K.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", K[K.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", K[K.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", K
			}({});
			const _e = 1,
				de = 2,
				ue = 2
		},
		"../react/pages/pages/routes.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Hv: function() {
					return s
				},
				_j: function() {
					return o
				},
				zE: function() {
					return u
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
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
		"../react/pages/pipelines/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				KO: function() {
					return i
				},
				L9: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(c) {
						return Object.getOwnPropertyDescriptor(a, c).enumerable
					})), l.forEach(function(c) {
						p(t, c, a[c])
					})
				}
				return t
			}

			function p(t, r, a) {
				return r = u(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function u(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let i = function(t) {
					return t.LIST_PIPELINES = "list pipelines", t.CREATE_PIPELINE = "create pipeline", t.VIEW_PIPELINE = "view pipeline details", t.DELETE_PIPELINE = "delete pipeline", t.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", t.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", t.CLICK_QUICK_LINK = "click pipeline quick link", t
				}({}),
				d = function(t) {
					return t[t.success = 0] = "success", t[t.failure = 1] = "failure", t
				}({});
			const g = (t, r = {}) => {
				o().sendEvent(t, s({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return u
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
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
					const g = p(d);
					return `https://${i}.${g}`
				},
				m = (i, d, g) => `${u(i,d)}/${g}`
		},
		"../react/pages/r2/selectors.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Mv: function() {
					return t
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts"),
				s = n("../react/common/selectors/zoneSelectors.ts");
			const p = "r2_migrator_waitlist",
				u = "r2migrator",
				m = "r2",
				i = "r2_storage_migrator",
				d = "r2_storage_migrator",
				g = a => getAccountEntitlement(a, "r2.enabled"),
				t = a => Boolean((0, s.Le)(a, i, p)),
				r = a => Boolean(getAccountFlipperFlagsChanges(a, d, u))
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Gk: function() {
					return a
				},
				LA: function() {
					return g
				},
				Wk: function() {
					return r
				},
				_V: function() {
					return i
				},
				c5: function() {
					return t
				},
				om: function() {
					return d
				}
			});
			var e = n("../react/pages/security-center/BlockedContent/types.ts"),
				o = n("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function s(l) {
				for (var c = 1; c < arguments.length; c++) {
					var f = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(f).filter(function(h) {
						return Object.getOwnPropertyDescriptor(f, h).enumerable
					})), _.forEach(function(h) {
						p(l, h, f[h])
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
				g = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				t = {
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
					filters: Object.values(e.GH).reduce((l, c) => s({}, l, {
						[c]: c
					}), {})
				};
			let a = function(l) {
				return l.COPY_URL = "copy blocked content url", l.REQUEST_REVIEW = "request blocked content review", l.ADD_FILTER = "Add filter", l.REMOVE_FILTER = "Remove filter", l
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return p
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
				p = function(m) {
					return m.EnforcementDate = "enforcementDate", m.BlockType = "blockType", m.Hostname = "hostname", m.Status = "status", m
				}({}),
				u = function(m) {
					return m.Removed = "removed", m.Misclassified = "misclassified", m
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
			let e = function(p) {
				return p.LOAD_SCAN_INFO = "load url scan information", p.INITIATE_URL_SCAN = "initiate url scan", p
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
			let s = function(p) {
				return p.LOAD_THREAT_EVENTS = "load threat events", p.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", p.THREAT_EVENTS_FILTERS = "threat events filters applied", p
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
				p = {
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
		"../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return d
				},
				o4: function() {
					return l
				},
				oY: function() {
					return p
				},
				qH: function() {
					return t
				},
				x3: function() {
					return i
				}
			});
			var e = n("../react/pages/security/analytics/resources/labels.ts"),
				o = n("../react/common/constants/analytics/botScoreSrc.ts");
			const s = ["block", "challenge", "jschallenge", "managedChallenge"],
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
				g = u(d),
				t = u(o.EG);
			let r = function(c) {
				return c.SAMPLED = "sampled", c.RAW = "raw", c
			}({});
			const a = "security-analytics-log-explorer";
			let l = function(c) {
				return c.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', c.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', c.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', c.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', c.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', c
			}({})
		},
		"../react/pages/security/api-shield/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				AB: function() {
					return t
				},
				API_SHIELD_TOAST: function() {
					return h
				},
				CR: function() {
					return _
				},
				Cg: function() {
					return d
				},
				L8: function() {
					return a
				},
				Ps: function() {
					return i
				},
				_i: function() {
					return g
				},
				ac: function() {
					return s
				},
				k1: function() {
					return u
				},
				k2: function() {
					return f
				},
				mU: function() {
					return c
				},
				sM: function() {
					return p
				},
				tA: function() {
					return o
				},
				uv: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = ["log", "block"],
				s = [...o, "disable"],
				p = 10,
				u = "header",
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
				d = "all";
			let g = function(A) {
				return A.DISCOVERY_FILTER = "discovery-filter-state", A.ADD_JWT_RULES_FILTER = "add-jwt-rules-state", A.ENDPOINT_MANAGEMENT_FILTER = "endpoint-management-filter-cache-key", A
			}({});
			const t = 63,
				r = 0,
				a = 10,
				l = {
					id: "method",
					desc: !0
				};
			let c = function(A) {
				return A.JWT_CONFIGURATIONS = "API_SHIELD_JWT_CONFIGURATIONS", A
			}({});
			const f = {
					METHOD: "method.listbox_filter",
					HOSTNAME: "hostname.listbox_filter",
					LABELS: "labels.listbox_filter"
				},
				_ = "api-shield-schema-validation-for-all-customers";
			let h = function(A) {
				return A.UPLOAD_SCHEMA = "schemaName", A.ADDED_ENDPOINT = "addedEndpoint", A.DEPLOYED_ROUTE = "deployedRoute", A.DELETED_ROUTE = "deletedRoute", A.UPDATED_LABELS_SINGLE_ENDPOINT = "updateLabelsSingle", A.UPDATED_LABELS_MULTI_ENDPOINT = "updateLabelsMulti", A
			}({})
		},
		"../react/pages/security/api-shield/entitlements.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				$0: function() {
					return r
				},
				CR: function() {
					return t
				},
				DM: function() {
					return _e
				},
				DN: function() {
					return D
				},
				Dc: function() {
					return de
				},
				Dg: function() {
					return Z
				},
				FV: function() {
					return B
				},
				LG: function() {
					return T
				},
				Mz: function() {
					return U
				},
				OL: function() {
					return i
				},
				St: function() {
					return h
				},
				UG: function() {
					return a
				},
				Wy: function() {
					return l
				},
				iU: function() {
					return L
				},
				jI: function() {
					return u
				},
				qK: function() {
					return O
				},
				qN: function() {
					return g
				},
				r6: function() {
					return ue
				},
				sK: function() {
					return f
				},
				t1: function() {
					return C
				},
				yk: function() {
					return d
				},
				yo: function() {
					return ae
				},
				zo: function() {
					return y
				},
				zt: function() {
					return m
				}
			});
			var e = n("../react/pages/security/api-shield/types.ts"),
				o = n("../react/common/hooks/useZoneEntitlement.ts"),
				s = n("../react/common/hooks/useAccountEntitlement.ts"),
				p = n("../react/pages/security/api-shield/settings/constants.tsx");
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
				g = () => !!(0, o.Z)(i.discoveryThresholdsAllowed),
				t = u[e.H.JWT],
				r = () => !!(0, o.Z)(t.tokenValidationAllowed),
				a = () => (0, o.Z)(t.maxTokenValidationRules),
				l = () => (0, o.Z)(t.maxTokenValidationConfigs),
				c = u[e.H.SEQUENCE],
				f = () => !!(0, o.Z)(c.sequenceAllowed),
				_ = u[e.H.SEQUENCE_RULES],
				h = () => (0, o.Z)(_.maxSequenceRules),
				A = u[e.H.OPERATIONS],
				T = () => (0, o.Z)(A.maxOperationsAllowed),
				M = u[e.H.USER_SCHEMAS],
				C = () => {
					const K = (0, o.Z)(M.maxUserSchemasAllowed);
					return typeof K == "number" ? K : p.Hs
				},
				y = () => {
					const K = (0, o.Z)(M.maxSchemaBytesAllowed);
					return typeof K == "number" ? K : p.x5
				},
				S = u[e.H.LEARNED_SCHEMAS],
				L = () => (0, o.Z)(S.maxLearnedSchemasAllowed),
				b = u[e.H.SCHEMA_VALIDATION],
				P = () => useZoneEntitlement(b.schemaValidationAllowed),
				O = () => (0, o.Z)(b.maxSchemaBytes),
				D = u[e.H.CONFIGURATION],
				B = () => (0, o.Z)(D.maxApiShields),
				U = () => (0, o.Z)(D.apiRouting),
				Z = () => (0, o.Z)(D.centralEndpointsListAllowed),
				ae = () => !!(0, o.Z)(m.logAllowed),
				_e = () => !!(0, o.Z)(m.regexOperatorAllowed),
				de = () => !!(0, o.Z)(m.dlpAllowed),
				ue = () => !!(0, s.Z)(m.sequencesAllowed)
		},
		"../react/pages/security/api-shield/settings/constants.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				Cl: function() {
					return t
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
					return g
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
					return u
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../react/utils/translator.tsx"),
				p = n("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
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
				g = {
					name: "created_at",
					direction: p.Sr.desc
				},
				t = {
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
		"../react/pages/security/api-shield/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Fj: function() {
					return d
				},
				kq: function() {
					return i
				},
				xr: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(c) {
						return Object.getOwnPropertyDescriptor(a, c).enumerable
					})), l.forEach(function(c) {
						p(t, c, a[c])
					})
				}
				return t
			}

			function p(t, r, a) {
				return r = u(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function u(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let i = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
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
				g = ({
					name: t,
					category: r = "user journey",
					product: a = i.MAIN,
					productName: l,
					additionalData: c
				}) => {
					o().sendEvent(t, s({
						category: r,
						product: a,
						productName: l
					}, c || {}))
				}
		},
		"../react/pages/security/api-shield/types.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
		"../react/pages/security/api-shield/utils/useApiShield.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				R: function() {
					return i
				}
			});
			var e = n("../react/pages/security/api-shield/entitlements.tsx"),
				o = n("../react/pages/security/api-shield/constants.ts"),
				s = n("../react/common/hooks/useGate.ts");
			const p = () => !!(0, s.Z)(o.CR);
			var u = n("../react/common/selectors/zoneSelectors.ts"),
				m = n("../react/app/redux/index.ts");
			const i = () => {
				const d = ((0, e.FV)() || 0) > 0,
					g = p(),
					t = (0, e.yk)(),
					r = (0, e.yo)(),
					a = (0, m.p4)(u.nA),
					l = (0, u.Ns)(a),
					c = (0, u._y)(a),
					f = (0, u.z5)(a),
					_ = (0, u.ko)(a);
				return {
					isFreeZone: l,
					isProZone: c,
					isBiz: f,
					isEnterpriseZone: _,
					hasLogAction: r,
					hasApiShields: d,
					hasApiDiscovery: t,
					hasFreeTier: g && !d,
					hasApiShieldsAndApiDiscovery: t && d,
					isEnableFreeTier: g
				}
			}
		},
		"../react/pages/security/bots/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
			let e = function(p) {
					return p.INITIAL_FETCH_SCORES = "view bots scores distribution", p.FETCH_CONFIGURATION = "view bots configuration page", p.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", p.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", p.UPDATE_SETTINGS = "update bots settings", p.DELETE_RULE = "delete bots ruleset", p.UPDATE_RULE = "update bots ruleset", p.FETCH_RULES = "view bots ruleset", p.CONFIGURE_BOT_MANAGEMENT = "view bots management", p.WAF_RULES_REDIRECT = "redirect waf rules", p
				}({}),
				o = function(p) {
					return p.PROVIDED_TEMPLATE = "provided template link in detection card", p.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", p.USE_TEMPLATE = "use template", p.CREATE_FIREWALL_RULE = "create firewall rule", p.WAF_RULES = "waf rules", p
				}({});
			const s = "user journey"
		},
		"../react/pages/security/page-shield/resources/index.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				CP: function() {
					return I
				},
				Ks: function() {
					return Ue
				},
				sV: function() {
					return F
				},
				SI: function() {
					return Ee
				},
				v5: function() {
					return S
				},
				xg: function() {
					return J
				},
				YC: function() {
					return G
				},
				MC: function() {
					return L
				},
				Xe: function() {
					return r
				},
				u8: function() {
					return P
				},
				Oq: function() {
					return H
				},
				VT: function() {
					return O
				},
				qc: function() {
					return B
				},
				V0: function() {
					return y
				},
				Lj: function() {
					return Te
				},
				k2: function() {
					return _
				},
				$g: function() {
					return c
				},
				SJ: function() {
					return U
				},
				KH: function() {
					return Q
				},
				Mq: function() {
					return K
				},
				FV: function() {
					return $
				},
				j$: function() {
					return Z
				},
				I1: function() {
					return t
				},
				Wq: function() {
					return l
				},
				jf: function() {
					return a
				},
				sW: function() {
					return te
				},
				Uq: function() {
					return C
				},
				yd: function() {
					return _e
				},
				QM: function() {
					return de
				},
				Uc: function() {
					return ue
				},
				R$: function() {
					return f
				},
				pG: function() {
					return ze
				},
				Ar: function() {
					return Be
				},
				Sk: function() {
					return ce
				},
				gY: function() {
					return be
				},
				SE: function() {
					return ke
				},
				m: function() {
					return re
				},
				xP: function() {
					return X
				},
				CI: function() {
					return k
				},
				p0: function() {
					return pe
				},
				xl: function() {
					return Le
				},
				Tb: function() {
					return Ke
				},
				h3: function() {
					return Re
				},
				xq: function() {
					return Ve
				},
				SQ: function() {
					return _t
				},
				C0: function() {
					return z
				},
				av: function() {
					return V
				},
				W3: function() {
					return We
				},
				WO: function() {
					return we
				},
				Dk: function() {
					return st
				},
				we: function() {
					return Ge
				},
				Yt: function() {
					return pt
				},
				ex: function() {
					return Qe
				},
				E1: function() {
					return Ae
				},
				e0: function() {
					return ft
				},
				UH: function() {
					return Ne
				},
				Qt: function() {
					return dt
				},
				K$: function() {
					return Ye
				},
				dm: function() {
					return ge
				},
				oK: function() {
					return rt
				},
				qZ: function() {
					return ct
				},
				_4: function() {
					return le
				},
				qo: function() {
					return Ce
				},
				CB: function() {
					return xe
				},
				ti: function() {
					return Ie
				}
			});
			var e = n("../react/app/redux/makeAction.js"),
				o = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = n.n(o),
				p = n("../../../common/component/component-filter-bar/src/index.js"),
				u = n("../react/common/components/analytics/AnalyticsReport/constants.ts");

			function m(R) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var oe = arguments[Y] != null ? Object(arguments[Y]) : {},
						ve = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && ve.push.apply(ve, Object.getOwnPropertySymbols(oe).filter(function(he) {
						return Object.getOwnPropertyDescriptor(oe, he).enumerable
					})), ve.forEach(function(he) {
						i(R, he, oe[he])
					})
				}
				return R
			}

			function i(R, Y, oe) {
				return Y = d(Y), Y in R ? Object.defineProperty(R, Y, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[Y] = oe, R
			}

			function d(R) {
				var Y = g(R, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function g(R, Y) {
				if (typeof R != "object" || R === null) return R;
				var oe = R[Symbol.toPrimitive];
				if (oe !== void 0) {
					var ve = oe.call(R, Y || "default");
					if (typeof ve != "object") return ve;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(R)
			}
			let t = function(R) {
				return R.BASE_URI = "base-uri", R.CHILD = "child-src", R.CONNECT = "connect-src", R.DEFAULT = "default-src", R.FONT = "font-src", R.FORM_ACTION = "form-action", R.FRAME = "frame-src", R.FRAME_ANCESTORS = "frame-ancestors", R.IMAGE = "img-src", R.MANIFEST = "manifest-src", R.MEDIA = "media-src", R.OBJECT = "object-src", R.SCRIPT = "script-src", R.STYLE = "style-src", R.WORKER = "worker-src", R.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", R
			}({});
			const r = m({}, t, {
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
			let a = function(R) {
					return R.MONITOR = "monitor", R.POLICIES = "policies", R.SETTINGS = "settings", R
				}({}),
				l = function(R) {
					return R.SCRIPT_MONITOR = "script", R.CONNECTION_MONITOR = "connection", R.COOKIE_MONITOR = "cookie", R
				}({}),
				c = function(R) {
					return R.CryptominingScore = "cryptomining_score", R.MalwareScore = "malware_score", R.MagecartScore = "magecart_score", R
				}({}),
				f = function(R) {
					return R.DataflowScore = "dataflow_score", R.ObfuscationScore = "obfuscation_score", R
				}({}),
				_ = function(R) {
					return R.DomainMalicious = "domain_reported_malicious", R.UrlMalicious = "url_reported_malicious", R
				}({});

			function h(R) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var oe = arguments[Y] != null ? Object(arguments[Y]) : {},
						ve = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && ve.push.apply(ve, Object.getOwnPropertySymbols(oe).filter(function(he) {
						return Object.getOwnPropertyDescriptor(oe, he).enumerable
					})), ve.forEach(function(he) {
						A(R, he, oe[he])
					})
				}
				return R
			}

			function A(R, Y, oe) {
				return Y = T(Y), Y in R ? Object.defineProperty(R, Y, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[Y] = oe, R
			}

			function T(R) {
				var Y = M(R, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function M(R, Y) {
				if (typeof R != "object" || R === null) return R;
				var oe = R[Symbol.toPrimitive];
				if (oe !== void 0) {
					var ve = oe.call(R, Y || "default");
					if (typeof ve != "object") return ve;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(R)
			}
			const C = 50,
				y = 9,
				S = "copy script url page shield",
				L = "disable page shield",
				b = "click documentation link",
				P = "enable page shield",
				O = "filter search page shield",
				D = "filter search view all page shield",
				B = "hover score tooltip page shield",
				U = "open alert modal page shield",
				Z = "change pagination page shield",
				ae = "close script modal page shield",
				_e = "open script modal page shield",
				de = "select alert type page shield",
				ue = "sort column page shield",
				K = {
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
				Q = {
					STARTS_WITH: u.Gn.startsWith,
					ENDS_WITH: u.Gn.endsWith,
					EQUALS: u.Gn.equals,
					CONTAINS: u.Gn.contains,
					DOES_NOT_CONTAIN: u.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: u.Gn.in
				},
				H = {
					status: {
						example: "active",
						type: p.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [Q.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: p.kE.string,
						options: ["true", "false"],
						operators: [Q.CONTAINS, Q.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [Q.EQUALS],
						type: p.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: p.kE.string,
						operators: [Q.INCLUDES, Q.ENDS_WITH, Q.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				I = h({}, H, {
					urls: h({}, H.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				F = {
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
			let ne = function(R) {
				return R.SECURITY_THREATS = "Security Threats", R.C2_BOTNET = "C2 & Botnet", R.CRYPTOMINING = "Cryptomining", R.MALWARE = "Malware", R.PHISHING = "Phishing", R.SPYWARE = "Spyware", R.DGA_DOMAINS = "DGA Domains", R.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", R
			}({});
			const ce = "https://www.cloudflare.com/plans/enterprise/contact/",
				G = {
					[t.BASE_URI]: "page_shield.policies.form.base_uri",
					[t.CHILD]: "page_shield.policies.form.child",
					[t.CONNECT]: "page_shield.policies.form.connections",
					[t.DEFAULT]: "page_shield.policies.form.default",
					[t.FONT]: "page_shield.policies.form.font",
					[t.FORM_ACTION]: "page_shield.policies.form.form",
					[t.FRAME]: "page_shield.policies.form.frame",
					[t.FRAME_ANCESTORS]: "page_shield.policies.form.frame_ancestors",
					[t.IMAGE]: "page_shield.policies.form.img",
					[t.MANIFEST]: "page_shield.policies.form.manifest",
					[t.MEDIA]: "page_shield.policies.form.media",
					[t.OBJECT]: "page_shield.policies.form.object",
					[t.SCRIPT]: "page_shield.policies.form.script",
					[t.STYLE]: "page_shield.policies.form.style",
					[t.UPGRADE_INSECURE_REQUESTS]: "page_shield.policies.form.upgrade_insecure_requests",
					[t.WORKER]: "page_shield.policies.form.worker"
				},
				J = {
					[t.BASE_URI]: "firewall.page_shield.policies.table.base_uri",
					[t.CHILD]: "firewall.page_shield.policies.table.child",
					[t.CONNECT]: "firewall.page_shield.policies.table.connections",
					[t.DEFAULT]: "firewall.page_shield.policies.table.default",
					[t.FONT]: "firewall.page_shield.policies.table.font",
					[t.FORM_ACTION]: "firewall.page_shield.policies.table.form",
					[t.FRAME]: "firewall.page_shield.policies.table.frame",
					[t.FRAME_ANCESTORS]: "firewall.page_shield.policies.table.frame_ancestors",
					[t.IMAGE]: "firewall.page_shield.policies.table.img",
					[t.MANIFEST]: "firewall.page_shield.policies.table.manifest",
					[t.MEDIA]: "firewall.page_shield.policies.table.media",
					[t.OBJECT]: "firewall.page_shield.policies.table.object",
					[t.SCRIPT]: "firewall.page_shield.policies.table.script",
					[t.STYLE]: "firewall.page_shield.policies.table.style",
					[t.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[t.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				W = {
					[c.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[c.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[c.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[f.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[f.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				q = {
					[_.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[_.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				$ = {
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
				te = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				Ee = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				Te = {
					[l.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[l.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[l.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				Ue = {
					[l.SCRIPT_MONITOR]: "script_monitor.description",
					[l.CONNECTION_MONITOR]: "connection_monitor.description",
					[l.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				ke = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", R => (s().sendEvent($.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				xe = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", R => (s().sendEvent($.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				Ke = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", R => (s().sendEvent($.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				Le = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				X = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", R => (s().sendEvent($.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				re = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				me = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", R => (s().sendEvent($.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				k = (0, e.ZP)("pageShieldPolicies", "get", "/zones/(zoneId)/page_shield/policies").on("success", R => (s().sendEvent($.VIEW_PAGE_SHIELD_POLICIES, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				pe = (0, e.ZP)("pageShieldPolicy", "get", "/zones/(zoneId)/page_shield/policies/(policiesId)"),
				Ie = (0, e.ZP)("pageShieldPolicy", "put", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", R => (s().sendEvent($.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "update"
				}), R)),
				Be = (0, e.ZP)("pageShieldPolicy", "delete", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", R => (s().sendEvent($.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "delete"
				}), R)),
				ze = (0, e.ZP)("pageShieldPolicy", "post", "/zones/(zoneId)/page_shield/policies").on("success", R => (s().sendEvent($.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "create"
				}), R)),
				be = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				Re = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var je = n("../react/app/redux/normalizer.js");
			const We = R => R.pageShield.configuration,
				Xe = R => {
					var Y;
					return (Y = R.pageShield.configuration.data) === null || Y === void 0 ? void 0 : Y.enabled
				},
				V = R => {
					var Y;
					return (Y = We(R)) === null || Y === void 0 ? void 0 : Y.data
				},
				se = R => R.pageShield.scripts,
				ge = R => R.pageShield.script,
				Me = R => R.pageShield.connections,
				we = R => R.pageShield.connection,
				Ne = R => R.pageShield.policies,
				Ye = R => R.pageShield.policy,
				rt = (0, je.P1)("pageShieldScripts", se),
				ut = (0, je.P1)("pageShieldScript", ge),
				st = (0, je.P1)("pageShieldConnections", Me),
				gt = (0, je.P1)("pageShieldConnection", we),
				ft = (0, je.P1)("pageShieldPolicies", Ne),
				dt = (0, je.P1)("pageShieldPolicy", Ye),
				Ge = (R, Y) => R === l.SCRIPT_MONITOR ? rt(Y) || [] : st(Y) || [],
				Ae = (R, Y) => R === l.SCRIPT_MONITOR ? se(Y) || [] : Me(Y) || [],
				Qe = (R, Y) => R === l.SCRIPT_MONITOR ? ut(Y) : gt(Y),
				pt = R => R.pageShield.domainIntel,
				ct = R => R.pageShield.whoIsRecord,
				_t = (R, Y, oe) => {
					var ve;
					const he = Object.values(oe).map($e => ({
						key: $e,
						label: W[$e],
						score: R[$e]
					})).filter($e => $e.score !== void 0 && $e.score <= Y);
					return Y === y && he.length === 0 && ((ve = R.js_integrity_score) !== null && ve !== void 0 ? ve : 100) <= Y && he.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), he
				},
				z = (R, Y) => Object.values(Y).filter(oe => R[oe] === !0).map(oe => q[oe]),
				le = R => R === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				Ce = (R, Y) => R[c.MagecartScore] !== void 0 && R[c.MagecartScore] <= Y || R[c.MalwareScore] !== void 0 && R[c.MalwareScore] <= Y || R[c.CryptominingScore] !== void 0 && R[c.CryptominingScore] <= Y || R.js_integrity_score !== void 0 && R.js_integrity_score <= Y,
				Oe = ["cdn.jsdelivr.net", "unpkg.com"],
				Fe = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				Ve = R => {
					if (R.includes("@latest")) {
						const oe = R.split("@latest");
						if (oe.length != 2) return;
						const ve = oe[0].length,
							he = ve + "@latest".length;
						return [ve, he]
					}
					if (!!Oe.some(oe => R.includes(oe)))
						for (const oe of Fe) {
							const ve = R.match(oe);
							if (!ve) continue;
							const he = ve.index;
							if (he === 0) return null;
							const $e = he + ve[0].length;
							return [he, $e]
						}
				}
		},
		"../react/pages/security/resources/constants.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return T
				},
				ji: function() {
					return a
				},
				pR: function() {
					return f
				},
				pV: function() {
					return M
				},
				rj: function() {
					return A
				},
				yR: function() {
					return C
				},
				zf: function() {
					return h
				}
			});
			var e = n("../node_modules/@cloudflare/component-link/es/index.js"),
				o = n("../../../common/util/types/src/api/phases/fields.tsx"),
				s = n("webpack/sharing/consume/default/react/react"),
				p = n.n(s),
				u = n("../react/utils/translator.tsx"),
				m = n("../react/pages/security/resources/types.ts"),
				i = n("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx");

			function d(y) {
				for (var S = 1; S < arguments.length; S++) {
					var L = arguments[S] != null ? Object(arguments[S]) : {},
						b = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(L).filter(function(P) {
						return Object.getOwnPropertyDescriptor(L, P).enumerable
					})), b.forEach(function(P) {
						g(y, P, L[P])
					})
				}
				return y
			}

			function g(y, S, L) {
				return S = t(S), S in y ? Object.defineProperty(y, S, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[S] = L, y
			}

			function t(y) {
				var S = r(y, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function r(y, S) {
				if (typeof y != "object" || y === null) return y;
				var L = y[Symbol.toPrimitive];
				if (L !== void 0) {
					var b = L.call(y, S || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(y)
			}
			const a = 10;
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
				_ = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: l.GEOGRAPHY_BASE,
					trackedEvent: f.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: l.IP_BASED,
					trackedEvent: f.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: l.USER_AGENT,
					trackedEvent: f.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: l.ZONE_LOCKDOWN,
					trackedEvent: f.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				h = {
					[m.X.UI_SECTION]: y => ({
						[l.MTLS_ACCESS]: {
							ruleName: l.MTLS_ACCESS,
							capability: "security_rules.rules.capability.waf",
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
							capability: "security_rules.rules.capability.waf",
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
							capability: "security_rules.rules.capability.client_side_security",
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
							capability: "security_rules.rules.capability.fraud",
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
							displayName: p().createElement(u.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: p().createElement(u.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let T = function(y) {
				return y.DISCOVERY = "discovery", y.SEQUENCES = "sequences", y.SCHEMA_VALIDATION = "schema-validation", y.SETTINGS = "settings", y.API_RULES = "api-rules", y.UPGRADE = "upgrade", y
			}({});
			const M = d({}, i.g, {
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
			});
			let C = function(y) {
				return y.APP_SEC_MVP = "app-security-navigation-mvp", y
			}({})
		},
		"../react/pages/security/resources/types.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				X: function() {
					return e
				}
			});
			let e = function(o) {
				return o.UI_SECTION = "UI_SECTION", o.WAF_RULES = "WAF_RULES", o
			}({})
		},
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				j: function() {
					return d
				},
				y: function() {
					return i
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(g) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t] != null ? Object(arguments[t]) : {},
						a = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(r).filter(function(l) {
						return Object.getOwnPropertyDescriptor(r, l).enumerable
					})), a.forEach(function(l) {
						p(g, l, r[l])
					})
				}
				return g
			}

			function p(g, t, r) {
				return t = u(t), t in g ? Object.defineProperty(g, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[t] = r, g
			}

			function u(g) {
				var t = m(g, "string");
				return typeof t == "symbol" ? t : String(t)
			}

			function m(g, t) {
				if (typeof g != "object" || g === null) return g;
				var r = g[Symbol.toPrimitive];
				if (r !== void 0) {
					var a = r.call(g, t || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (t === "string" ? String : Number)(g)
			}
			let i = function(g) {
				return g.CLICK_OPT_IN = "click opt in security navigation", g.CLICK_OPT_IN_BUTTON = "click opt in button", g.CLICK_OPT_OUT_BUTTON = "click opt out button", g.CLICK_NEXT_STEP = "click opt in next step", g.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", g
			}({});
			const d = (g, t = {}) => {
				o().sendEvent(g, s({}, t || {}))
			}
		},
		"../react/pages/security/settings/hooks/index.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Xu: function() {
					return de
				},
				Io: function() {
					return G
				},
				FQ: function() {
					return Le
				},
				vU: function() {
					return _e
				},
				M: function() {
					return K
				},
				d7: function() {
					return ue
				},
				Oz: function() {
					return ce
				},
				Np: function() {
					return ke
				},
				WR: function() {
					return b
				},
				vE: function() {
					return U
				},
				bE: function() {
					return xe
				},
				u_: function() {
					return ae
				},
				kU: function() {
					return Z
				},
				pf: function() {
					return J
				}
			});
			var e = n("../../../../node_modules/react-query/es/index.js"),
				o = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http");
			const s = async X => {
				var re, me;
				const k = await (0, o.get)(`/zones/${X}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((re = k == null ? void 0 : k.body) === null || re === void 0 || (me = re.result) === null || me === void 0 ? void 0 : me.value) === "enabled"
			}, p = async (X, re) => (await (0, o.post)(`/zones/${X}/content-upload-scan/${re?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), re), u = async X => {
				var re;
				const me = await (0, o.get)(`/zones/${X}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((re = me == null ? void 0 : me.body) === null || re === void 0 ? void 0 : re.result) || []
			}, m = async (X, re) => {
				var me;
				const k = await (0, o.post)(`/zones/${X}/content-upload-scan/payloads`, {
					body: [re]
				});
				return (me = k == null ? void 0 : k.body) === null || me === void 0 ? void 0 : me.result
			}, i = async (X, re) => (await (0, o.del)(`/zones/${X}/content-upload-scan/payloads/${re}`, {
				hideErrorAlert: !0
			}), re), d = async X => {
				var re, me;
				const k = await (0, o.get)(`/zones/${X}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((re = k == null ? void 0 : k.body) === null || re === void 0 || (me = re.result) === null || me === void 0 ? void 0 : me.enabled)
			}, g = async (X, re) => {
				var me, k;
				const pe = await (0, o.post)(`/zones/${X}/leaked-credential-checks`, {
					body: {
						enabled: re
					}
				});
				return !!((me = pe == null ? void 0 : pe.body) === null || me === void 0 || (k = me.result) === null || k === void 0 ? void 0 : k.enabled)
			}, t = async X => {
				var re;
				const me = await (0, o.get)(`/zones/${X}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (re = me == null ? void 0 : me.body) === null || re === void 0 ? void 0 : re.result
			}, r = async (X, re) => {
				var me;
				const k = await (0, o.post)(`/zones/${X}/leaked-credential-checks/detections`, {
					body: re
				});
				return (me = k == null ? void 0 : k.body) === null || me === void 0 ? void 0 : me.result
			}, a = async (X, re) => (await (0, o.del)(`/zones/${X}/leaked-credential-checks/detections/${re}`, {
				hideErrorAlert: !0
			}), re), l = async (X, re) => {
				await (0, o.put)(`/zones/${X}/security-center/securitytxt`, {
					body: re
				})
			}, c = async X => {
				await (0, o.del)(`/zones/${X}/security-center/securitytxt`)
			}, f = async X => (await (0, o.get)(`/zones/${X}/security-center/securitytxt`)).body;
			var _ = n("webpack/sharing/consume/default/react/react"),
				h = n("webpack/sharing/consume/default/react-redux/react-redux"),
				A = n("../react/pages/security/settings/resources/index.ts"),
				T = n("../react/common/hooks/useZoneEntitlement.ts"),
				M = n("../react/common/hooks/useGate.ts"),
				C = n("../react/pages/security/api-shield/utils/useApiShield.tsx"),
				y = n("../react/pages/security/api-shield/entitlements.tsx"),
				S = n("../../../../node_modules/yup/es/index.js"),
				L = n("../react/utils/translator.tsx");
			const b = () => (0, h.useSelector)(A.ui),
				P = "central_endpoint_list.endpoint_labels_allowed",
				O = "system-and-user-generated-labels",
				D = () => !!(0, M.Z)(O),
				B = () => !!(0, T.Z)(P),
				U = () => {
					const X = D(),
						re = B();
					return {
						isLabelsGateOpen: X,
						hasEndpointLabelsEntitlement: re,
						hasLabels: X && re
					}
				},
				Z = () => {
					const {
						hasApiShields: X
					} = (0, C.R)(), {
						hasLabels: re
					} = U(), me = (0, y.Dg)();
					return re && me && X
				},
				ae = () => {
					const {
						t: X
					} = (0, L.QT)(), re = S.Z_().required(X("common.field_is_required")).max(24, X("labels.apply.form.name.error.max_characters")).matches(A.DG, X("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", X("labels.apply.form.name.error.cf_forbidden"), pe => !A.aW.test(pe)), me = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: pe => S.Ry().shape({
							[A.n5.NAME]: pe ? S.Z_() : re,
							[A.n5.DESCRIPTION]: pe ? S.Z_().optional() : S.Z_().max(150, X("labels.apply.form.description.error.max_characters"))
						})
					}, k = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[A.N2.NAME]: "",
							[A.N2.SOURCE]: A.W3,
							[A.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => S.Ry().shape({
							[A.N2.NEW_LABEL_NAME]: re
						})
					};
					return {
						LABELS_APPLY_FORM: me,
						EDIT_LABELS_MODAL_FORM: k
					}
				},
				_e = ({
					modalHeaderFixedHeight: X = 62,
					modalDefaultPaddings: re = 16
				} = {}) => {
					const me = (0, _.useRef)(null),
						k = (0, _.useRef)(null),
						[pe, Ie] = (0, _.useState)(0),
						[Be, ze] = (0, _.useState)(0),
						be = `calc(100vh - ${pe}px - ${Be}px - ${re}px)`,
						[Re, je] = (0, _.useState)("");
					return (0, _.useEffect)(() => {
						const We = () => {
							var Xe, V, se, ge;
							const Me = me == null || (Xe = me.current) === null || Xe === void 0 ? void 0 : Xe.offsetHeight,
								we = k == null || (V = k.current) === null || V === void 0 ? void 0 : V.offsetHeight,
								Ne = ((se = Me) !== null && se !== void 0 ? se : 0) + X,
								Ye = (ge = we) !== null && ge !== void 0 ? ge : 0;
							Ie(Ne), ze(Ye)
						};
						return We(), window.addEventListener("resize", We), () => window.removeEventListener("resize", We)
					}, []), {
						searchTerm: Re,
						setSearchTerm: je,
						scrollableSectionMaxHeight: be,
						topMenuRef: me,
						bottomMenuRef: k
					}
				},
				de = X => {
					const re = b(),
						me = (0, e.useQueryClient)(),
						k = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${X}`,
							queryFn: () => s(X),
							enabled: re
						}),
						pe = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${X}`,
							queryFn: () => u(X),
							enabled: re && !!(k == null ? void 0 : k.data)
						}),
						Ie = (0, e.useMutation)({
							mutationFn: async ({
								enabled: be
							}) => await p(X, be),
							onSuccess: be => {
								me.setQueryData([`content-scanning-enabled-${X}`], be)
							}
						}),
						Be = (0, e.useMutation)({
							mutationFn: be => m(X, be),
							onSuccess: be => {
								me.setQueryData([`content-scanning-detections-${X}`], be)
							}
						}),
						ze = (0, e.useMutation)({
							mutationFn: be => i(X, be),
							onSuccess: be => {
								var Re;
								const je = (Re = me.getQueryData(`content-scanning-detections-${X}`)) !== null && Re !== void 0 ? Re : [];
								me.setQueryData([`content-scanning-detections-${X}`], je.filter(({
									id: We
								}) => We !== be))
							}
						});
					return {
						entitled: re,
						loading: k.isLoading || pe.isLoading,
						error: k.isError || pe.isError,
						enabled: {
							data: k.data,
							isToggling: Ie.isLoading,
							toggleEnabled: async be => Ie.mutateAsync({
								enabled: be
							})
						},
						detections: {
							data: pe.data,
							add: Be.mutateAsync,
							delete: ze.mutateAsync,
							loading: Be.isLoading || ze.isLoading
						}
					}
				},
				ue = () => {
					const X = (0, h.useSelector)(A.cN),
						re = (0, h.useSelector)(A.bH),
						me = (0, h.useSelector)(A.P3),
						k = (0, h.useSelector)(A.Ri);
					return {
						hasEditPermission: X,
						isEnabled: me && (re.hasSimilarLeaked || re.hasUsernameAndPasswordLeaked || k)
					}
				},
				K = X => {
					const re = ue(),
						me = (0, e.useQueryClient)(),
						k = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${X}`,
							queryFn: () => d(X),
							enabled: !!re.isEnabled,
							retry: 1
						}),
						pe = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${X}`,
							queryFn: () => t(X),
							enabled: !!re.isEnabled && !!(k == null ? void 0 : k.data)
						}),
						Ie = (0, e.useMutation)({
							mutationFn: ({
								enabled: be
							}) => g(X, be),
							onSuccess: be => {
								me.setQueryData([`leaked-credentials-enabled-${X}`], be)
							}
						}),
						Be = (0, e.useMutation)({
							mutationFn: async be => await r(X, be),
							onSuccess: be => {
								var Re;
								const je = (Re = me.getQueryData(`leaked-credentials-detections-${X}`)) !== null && Re !== void 0 ? Re : [];
								me.setQueryData([`leaked-credentials-detections-${X}`], [...je, be])
							}
						}),
						ze = (0, e.useMutation)({
							mutationFn: be => a(X, be),
							onSuccess: be => {
								var Re;
								const je = (Re = me.getQueryData(`leaked-credentials-detections-${X}`)) !== null && Re !== void 0 ? Re : [];
								me.setQueryData([`leaked-credentials-detections-${X}`], je.filter(({
									id: We
								}) => We !== be))
							}
						});
					return {
						entitled: re.isEnabled,
						hasEditPermissions: re.hasEditPermission,
						loading: k.isLoading || pe.isLoading,
						error: k.isError || k.isError,
						enabled: {
							data: k.data,
							isToggling: Ie.isLoading,
							toggleEnabled: async be => Ie.mutateAsync({
								enabled: be
							})
						},
						detections: {
							data: pe.data,
							add: Be.mutateAsync,
							delete: ze.mutateAsync,
							loading: Be.isLoading || ze.isLoading
						}
					}
				};
			var Q = n("../react/common/selectors/zoneSelectors.ts"),
				H = n("../react/common/utils/useQueryCache.ts"),
				I = n("../react/app/redux/index.ts");
			const F = "security-txt",
				ne = {
					securityTxt: ({
						zoneId: X
					}) => [F, X]
				},
				ce = X => (0, e.useQuery)({
					queryKey: ne.securityTxt({
						zoneId: X
					}),
					queryFn: () => f(X),
					select: re => re.result
				}),
				G = () => {
					const X = (0, I.p4)(Q.Cu),
						{
							invalidate: re
						} = (0, H.o)(ne.securityTxt({
							zoneId: X
						}));
					return (0, e.useMutation)({
						mutationFn: () => c(X),
						onSuccess: async () => {
							await re(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				J = X => {
					const {
						invalidate: re
					} = (0, H.o)(ne.securityTxt({
						zoneId: X
					}));
					return (0, e.useMutation)({
						mutationFn: me => l(X, me),
						onSuccess: async () => {
							await re(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var W = n("../../../../node_modules/lodash/isEqual.js"),
				q = n.n(W),
				$ = n("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function te(X) {
				for (var re = 1; re < arguments.length; re++) {
					var me = arguments[re] != null ? Object(arguments[re]) : {},
						k = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(me).filter(function(pe) {
						return Object.getOwnPropertyDescriptor(me, pe).enumerable
					})), k.forEach(function(pe) {
						Ee(X, pe, me[pe])
					})
				}
				return X
			}

			function Ee(X, re, me) {
				return re = Te(re), re in X ? Object.defineProperty(X, re, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[re] = me, X
			}

			function Te(X) {
				var re = Ue(X, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function Ue(X, re) {
				if (typeof X != "object" || X === null) return X;
				var me = X[Symbol.toPrimitive];
				if (me !== void 0) {
					var k = me.call(X, re || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(X)
			}
			const ke = X => {
					const {
						queryKey: re,
						zoneId: me
					} = (0, $.hL)(X), {
						isLoading: k,
						isError: pe,
						isSuccess: Ie,
						data: Be,
						refetch: ze,
						isRefetching: be
					} = (0, e.useQuery)({
						queryKey: re,
						queryFn: () => $.Mi.getLabels(te({
							zoneId: me
						}, X)),
						onSuccess: () => {
							var Re;
							const je = X == null || (Re = X.filters) === null || Re === void 0 ? void 0 : Re.source;
							(je === A.LABEL_SOURCES.MANAGED || je === A.LABEL_SOURCES.USER) && (0, A.Tf)({
								name: A.QJ.FILTER_USER_MANAGED_LABELS,
								product: A.Iv.SECURITY_SETTINGS,
								pageName: A.R.LABELS_LIST,
								type: je
							})
						}
					});
					return {
						data: Be == null ? void 0 : Be.result,
						errors: Be == null ? void 0 : Be.errors,
						paginationData: Be == null ? void 0 : Be.result_info,
						isLoading: k,
						isError: pe,
						isSuccess: Ie,
						refetch: ze,
						isRefetching: be
					}
				},
				xe = ({
					labels: X,
					preselectedLabels: re
				}) => {
					const {
						USER: me,
						MANAGED: k
					} = A.LABEL_SOURCES, [pe, Ie] = (0, _.useState)({
						[me]: [],
						[k]: []
					}), [Be, ze] = (0, _.useState)(new Set), be = Be.size > 0, [Re, je] = (0, _.useState)(!1), We = ge => {
						ze(Me => {
							const we = new Set(Me);
							return we.has(ge.name) ? we.delete(ge.name) : we.add(ge.name), we
						})
					}, Xe = ge => Be.has(ge.name), V = (ge, Me) => {
						const we = Xe(ge) ? 1 : 0;
						return (Xe(Me) ? 1 : 0) - we
					}, se = ge => {
						Ie(Me => ({
							[me]: [...ge ? ge[me] : Me[me]].sort(V),
							[k]: [...ge ? ge[k] : Me[k]].sort(V)
						}))
					};
					return (0, _.useEffect)(() => {
						if (X && !Re) {
							if (re) {
								const ge = new Set;
								X.forEach(Me => {
									re.some(we => q()(we, Me)) && ge.add(Me.name)
								}), ze(ge)
							}
							je(!0)
						}
					}, [X, re, Re]), (0, _.useEffect)(() => {
						if (X && Re) {
							const ge = X.reduce((we, Ne) => (Ne.source === me ? we[me].push(Ne) : Ne.source === k && we[k].push(Ne), we), {
									[me]: [],
									[k]: []
								}),
								Me = {
									[me]: ge[me].sort(V),
									[k]: ge[k].sort(V)
								};
							Ie(Me)
						}
					}, [me, k, X, Re]), {
						userAndManagedLabels: pe,
						setUserAndManagedLabels: Ie,
						toggleSelectedLabel: We,
						isLabelSelected: Xe,
						sortLabelsBySelectedStatus: se,
						hasLabelsSelected: be
					}
				};
			var Ke = n("../react/pages/security/settings/resources/selectors.ts");
			const Le = (X = "") => {
				const re = (0, I.p4)(Ke.Xs),
					me = re && (X == null ? void 0 : X.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: re,
					hasDeprecatedParameter: me
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				FQ: function() {
					return d.FQ
				},
				Io: function() {
					return d.Io
				},
				Iv: function() {
					return g.Iv
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
					return g.QJ
				},
				R: function() {
					return g.R
				},
				Tf: function() {
					return g.Tf
				},
				WR: function() {
					return d.WR
				},
				Xs: function() {
					return g.Xs
				},
				Xu: function() {
					return d.Xu
				},
				ZF: function() {
					return g.ZF
				},
				bE: function() {
					return d.bE
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
				kU: function() {
					return d.kU
				},
				m8: function() {
					return g.m8
				},
				pf: function() {
					return d.pf
				},
				ui: function() {
					return g.ui
				},
				vE: function() {
					return d.vE
				},
				vc: function() {
					return g.vc
				},
				zF: function() {
					return g.zF
				}
			});
			var e = n("../react/common/components/AccessCheck/index.ts"),
				o = n("../react/app/components/Forbidden.jsx"),
				s = n("webpack/sharing/consume/default/react/react"),
				p = n.n(s),
				u = n("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				m = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = n.n(m),
				d = n("../react/pages/security/settings/hooks/index.ts"),
				g = n("../react/pages/security/settings/resources/index.ts");
			const t = p().lazy(() => Promise.all([n.e(37800), n.e(39074), n.e(16691), n.e(19341), n.e(12174), n.e(57062), n.e(22952), n.e(4e4), n.e(51436), n.e(70618), n.e(68204), n.e(2515), n.e(8924), n.e(77216), n.e(40517), n.e(39760), n.e(65022), n.e(60734), n.e(25390), n.e(95472), n.e(9147), n.e(68665), n.e(87940), n.e(42185)]).then(n.bind(n, "../react/pages/security/settings/SettingsRoute.tsx"))),
				r = () => {
					const {
						t: a
					} = (0, m.useI18n)(), l = (0, e.xk)("waf");
					return p().createElement(u.T3, {
						parentPageLabel: a("navigation.zone.security"),
						title: a("navigation.zone.security.settings"),
						type: "narrow"
					}, l.read ? p().createElement(t, null) : p().createElement(o.Z, null))
				};
			E.ZP = r
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Mi: function() {
					return T
				},
				hL: function() {
					return A
				}
			});
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/zoneSelectors.ts"),
				s = n("../react/common/utils/useQueryCache.ts"),
				p = n("../react/pages/security/settings/resources/constants.ts"),
				u = n("../react/common/hooks/useAccountId.ts"),
				m = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				i = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
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
			var g = n("../../../../node_modules/lodash/lodash.js"),
				t = n("../react/pages/security/settings/resources/utils.ts"),
				r = n("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(C, y) {
				if (C == null) return {};
				var S = l(C, y),
					L, b;
				if (Object.getOwnPropertySymbols) {
					var P = Object.getOwnPropertySymbols(C);
					for (b = 0; b < P.length; b++) L = P[b], !(y.indexOf(L) >= 0) && (!Object.prototype.propertyIsEnumerable.call(C, L) || (S[L] = C[L]))
				}
				return S
			}

			function l(C, y) {
				if (C == null) return {};
				var S = {},
					L = Object.keys(C),
					b, P;
				for (P = 0; P < L.length; P++) b = L[P], !(y.indexOf(b) >= 0) && (S[b] = C[b]);
				return S
			}

			function c(C) {
				for (var y = 1; y < arguments.length; y++) {
					var S = arguments[y] != null ? Object(arguments[y]) : {},
						L = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(S).filter(function(b) {
						return Object.getOwnPropertyDescriptor(S, b).enumerable
					})), L.forEach(function(b) {
						f(C, b, S[b])
					})
				}
				return C
			}

			function f(C, y, S) {
				return y = _(y), y in C ? Object.defineProperty(C, y, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[y] = S, C
			}

			function _(C) {
				var y = h(C, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function h(C, y) {
				if (typeof C != "object" || C === null) return C;
				var S = C[Symbol.toPrimitive];
				if (S !== void 0) {
					var L = S.call(C, y || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(C)
			}
			const A = C => {
					const y = (0, e.p4)(o.Cu),
						S = (0, u.F)(),
						L = M.labels(c({
							accountId: S,
							zoneId: y
						}, C ? c({}, C) : {})),
						b = (0, s.o)(L);
					return c({
						zoneId: y,
						queryKey: L,
						batchInvalidateLabels: async () => {
							await b.batchInvalidate({
								queryKeysToPredicateInvalidate: [p.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, b)
				},
				T = {
					getLabels: async C => {
						var y, S, L, b;
						let {
							zoneId: P,
							hideErrorAlert: O = !0
						} = C, D = a(C, ["zoneId", "hideErrorAlert"]);
						return (await m.get(d.labels.toUrl({
							zoneId: P
						}), {
							parameters: {
								page: D == null ? void 0 : D.page,
								per_page: D == null ? void 0 : D.per_page,
								with_mapped_resource_counts: D == null ? void 0 : D.with_mapped_resource_counts,
								filter: D == null || (y = D.filters) === null || y === void 0 ? void 0 : y.search,
								source: (0, t.sQ)(D == null || (S = D.filters) === null || S === void 0 ? void 0 : S.source),
								order: D == null || (L = D.sort) === null || L === void 0 ? void 0 : L.id,
								direction: (D == null ? void 0 : D.sort) ? (D == null || (b = D.sort) === null || b === void 0 ? void 0 : b.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: O
						})).body
					},
					getLabel: async C => {
						let {
							zoneId: y,
							labelName: S,
							hideErrorAlert: L = !0
						} = C, b = a(C, ["zoneId", "labelName", "hideErrorAlert"]);
						const P = (0, t.mm)(S) ? d.managedLabel.toUrl({
							zoneId: y,
							labelName: S
						}) : d.userLabel.toUrl({
							zoneId: y,
							labelName: S
						});
						return (await m.get(P, {
							parameters: {
								with_mapped_resource_counts: b == null ? void 0 : b.with_mapped_resource_counts
							},
							hideErrorAlert: L
						})).body
					},
					editLabel: async ({
						zoneId: C,
						label: y,
						replace: S
					}) => {
						const {
							name: L
						} = y, b = a(y, ["name"]);
						return (await (S ? m.put : m.patch)(d.userLabel.toUrl({
							zoneId: C,
							labelName: y.name
						}), {
							body: b
						})).body
					},
					deleteLabel: async ({
						zoneId: C,
						labelName: y
					}) => (await m.del(d.userLabel.toUrl({
						zoneId: C,
						labelName: y
					}))).body,
					createLabel: async C => {
						let {
							zoneId: y
						} = C, S = a(C, ["zoneId"]);
						const {
							product: L
						} = S, b = a(S, ["product"]);
						return (await m.post(d.userLabels.toUrl({
							zoneId: y
						}), {
							body: [b]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: C,
						user: y,
						managed: S,
						operationIds: L,
						replace: b
					}) => (await (b ? m.put : m.post)(d.operationsLinkedToLabels.toUrl({
						zoneId: C
					}), {
						body: c({}, y ? {
							user: {
								labels: y
							}
						} : {}, S ? {
							managed: {
								labels: S
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
						zoneId: C,
						labelName: y,
						operationIds: S
					}) => {
						const L = (0, t.mm)(y) ? d.managedLabelOperations.toUrl({
							zoneId: C,
							labelName: y
						}) : d.userLabelOperations.toUrl({
							zoneId: C,
							labelName: y
						});
						return (await m.put(L, {
							body: {
								selector: {
									include: {
										operation_ids: S
									}
								}
							}
						})).body
					}
				},
				M = {
					labels: C => {
						let {
							accountId: y,
							zoneId: S
						} = C, L = a(C, ["accountId", "zoneId"]);
						return [p.IQ.LABELS, y, S, ...(0, g.isEmpty)(L) ? [] : [L]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				DG: function() {
					return _
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return i
				},
				GE: function() {
					return S
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
					return M
				},
				W3: function() {
					return s
				},
				_8: function() {
					return a
				},
				_c: function() {
					return C
				},
				aW: function() {
					return h
				},
				dC: function() {
					return b
				},
				gY: function() {
					return y
				},
				j8: function() {
					return d
				},
				jz: function() {
					return f
				},
				n5: function() {
					return A
				},
				om: function() {
					return g
				},
				w: function() {
					return o
				},
				zF: function() {
					return L
				}
			});
			var e = n("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let o = function(P) {
				return P.EXPOSED_CREDENTIALS = "exposed_credentials", P.CONTENT_SCANNING = "content_scanning", P
			}({});
			const s = "all";
			let p = function(P) {
					return P.LABELS = "labels", P
				}({}),
				u = function(P) {
					return P.USER = "user", P.MANAGED = "managed", P
				}({}),
				m = function(P) {
					return P.SOURCE = "source", P
				}({}),
				i = function(P) {
					return P.NAME = "name", P.SOURCE = "source", P.NEW_LABEL_NAME = "newLabelName", P
				}({}),
				d = function(P) {
					return P.ENDPOINT = "endpoint", P.METHOD = "method", P.OPERATION_ID = "operationId", P
				}({}),
				g = function(P) {
					return P.NAME = "name", P.MAPPED_RESOURCES = "mapped_resources.operations", P.SOURCE = "source", P.APPLY = "apply", P
				}({});
			const a = {
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
			let l = function(P) {
				return P.CREATED_LABEL = "createdLabel", P.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", P.DELETED_LABEL = "deletedLabel", P.APPLIED_LABEL = "appliedLabel", P.EDITED_LABEL = "editedLabel", P.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", P
			}({});
			const c = "650px",
				f = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				_ = /^[A-Za-z0-9-]+$/,
				h = /^cf-/;
			let A = function(P) {
				return P.NAME = "name", P.DESCRIPTION = "description", P
			}({});
			const T = "all";
			let M = function(P) {
				return P.METHOD = "method", P.HOSTNAME = "hostname", P
			}({});
			const C = {
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
						[M.METHOD]: T,
						[M.HOSTNAME]: T
					}
				},
				filters: M
			};
			let y = function(P) {
				return P.TITLE = "title", P.DESCRIPTION = "description", P.SUBMIT = "submit", P
			}({});
			const S = 1e3,
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
				b = "exposed-credentials-module"
		},
		"../react/pages/security/settings/resources/index.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return t
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
					return h
				},
				Tf: function() {
					return _
				},
				$E: function() {
					return s.$E
				}
			});
			var e = n("../react/pages/security/settings/resources/constants.ts"),
				o = n("../react/pages/security/settings/resources/types.ts"),
				s = n("../react/pages/security/settings/resources/utils.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = n.n(p);

			function m(T) {
				for (var M = 1; M < arguments.length; M++) {
					var C = arguments[M] != null ? Object(arguments[M]) : {},
						y = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(C).filter(function(S) {
						return Object.getOwnPropertyDescriptor(C, S).enumerable
					})), y.forEach(function(S) {
						i(T, S, C[S])
					})
				}
				return T
			}

			function i(T, M, C) {
				return M = d(M), M in T ? Object.defineProperty(T, M, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[M] = C, T
			}

			function d(T) {
				var M = g(T, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function g(T, M) {
				if (typeof T != "object" || T === null) return T;
				var C = T[Symbol.toPrimitive];
				if (C !== void 0) {
					var y = C.call(T, M || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(T)
			}
			let t = function(T) {
					return T.LABELS_LIST = "Labels List page", T.LABELS_APPLY = "Labels Apply page", T.LABELS_SIDE_MODAL = "Labels Side Modal", T.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", T.LABELS_OPERATION_DETAILS = "Operation Details page", T
				}({}),
				r = function(T) {
					return T.API_SHIELD = "API Shield", T.SECURITY_SETTINGS = "Security Settings", T
				}({}),
				a = function(T) {
					return T.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", T.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", T.OPERATIONS_TABLE_ROW = "Operations table row", T.OPERATION_DETAILS_PAGE = "Operation details page", T
				}({}),
				l = function(T) {
					return T.UPSERT = "upsert", T.OVERWRITE = "overwrite", T
				}({}),
				c = function(T) {
					return T.SINGLE = "single", T.MULTIPLE = "multiple", T
				}({}),
				f = function(T) {
					return T.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", T.DELETE_LABEL = "delete a user label in the settings page", T.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", T.CREATE_LABEL_CLICKED = "click create label button in the settings page", T.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", T.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", T.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", T.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", T.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", T.OPEN_LABELS_SIDE_MODAL = "open labels side modal", T.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", T.CREATE_NEW_LABEL = "create a new label", T
				}({});
			const _ = ({
					name: T,
					product: M,
					category: C = "user journey",
					pageName: y,
					from: S,
					write_strategy: L,
					type: b,
					target: P
				}) => {
					u().sendEvent(T, m({
						category: C,
						pageName: y,
						product: M
					}, S ? {
						from: S
					} : {}, L ? {
						write_strategy: L
					} : {}, b ? {
						type: b
					} : {}, P ? {
						target: P
					} : {}))
				},
				h = () => {
					var T;
					return (T = Object.values(f)) === null || T === void 0 ? void 0 : T.flat()
				};
			var A = n("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				P3: function() {
					return d
				},
				Ri: function() {
					return g
				},
				Xs: function() {
					return r
				},
				bH: function() {
					return t
				},
				cN: function() {
					return i
				},
				ui: function() {
					return m
				}
			});
			var e = n("../react/common/selectors/zoneSelectors.ts"),
				o = n("../react/utils/url.ts"),
				s = n("../react/common/selectors/entitlementsSelectors.ts"),
				p = n("../react/pages/security/settings/resources/constants.ts"),
				u = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const m = a => {
					const l = (0, e.RO)(a),
						c = !!(0, s.rV)(a, "rulesets.file_upload_scan_allowed"),
						f = !!(0, s.BF)(a, "rulesets.file_upload_scan_allowed");
					return (0, o.el)(window.location.pathname) ? l && (c || f) : f
				},
				i = a => Number((0, s.rV)(a, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				d = a => (0, s.rV)(a, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				g = a => (0, s.rV)(a, "rulesets.leaked_credential_checks_allowed"),
				t = a => (0, u.z1)(p.dC)(a) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, s.rV)(a, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, s.rV)(a, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				r = a => !!(0, u.z1)("deprecate-security-level")(a)
		},
		"../react/pages/security/settings/resources/types.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				T: function() {
					return o
				}
			});
			var e = n("../react/pages/security/settings/resources/constants.ts");
			let o = function(s) {
				return s.ENABLED = "enabled", s.CONTACT = "contact", s.EXPIRES = "expires", s.ENCRYPTION = "encryption", s.ACKNOWLEDGMENTS = "acknowledgments", s.CANONICAL = "canonical", s.HIRING = "hiring", s.POLICY = "policy", s.PREFERRED_LANGUAGES = "preferred_languages", s
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				$E: function() {
					return a
				},
				Mb: function() {
					return l
				},
				N2: function() {
					return M
				},
				Q4: function() {
					return f
				},
				QF: function() {
					return r
				},
				Vy: function() {
					return h
				},
				Wv: function() {
					return c
				},
				mm: function() {
					return T
				},
				sQ: function() {
					return A
				},
				vc: function() {
					return _
				}
			});
			var e = n("../../../../node_modules/yup/es/index.js"),
				o = n("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				s = n("../react/pages/security/settings/routes.tsx"),
				p = n("../react/pages/security/settings/resources/constants.ts"),
				u = n("../react/pages/security/settings/resources/types.ts"),
				m = n("../react/pages/analytics/common/utils/gqlUtils.js");

			function i(C) {
				for (var y = 1; y < arguments.length; y++) {
					var S = arguments[y] != null ? Object(arguments[y]) : {},
						L = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(S).filter(function(b) {
						return Object.getOwnPropertyDescriptor(S, b).enumerable
					})), L.forEach(function(b) {
						d(C, b, S[b])
					})
				}
				return C
			}

			function d(C, y, S) {
				return y = g(y), y in C ? Object.defineProperty(C, y, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[y] = S, C
			}

			function g(C) {
				var y = t(C, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function t(C, y) {
				if (typeof C != "object" || C === null) return C;
				var S = C[Symbol.toPrimitive];
				if (S !== void 0) {
					var L = S.call(C, y || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(C)
			}
			const r = {
					[u.T.ENABLED]: !0,
					[u.T.CONTACT]: [""],
					[u.T.EXPIRES]: ""
				},
				a = {
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
				l = C => e.Ry({
					[u.T.CONTACT]: e.IX().of(e.Z_().required(C("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, C("security_txt.fields.contact.format_error"))),
					[u.T.EXPIRES]: e.hT().required(C("common.required")).min(new Date, C("security_txt.fields.expires.min_error"))
				}),
				c = C => {
					const y = {};
					for (const S in C) y[S] = Array.isArray(C[S]) ? C[S].filter(L => !!L) : C[S];
					return i({}, y, {
						expires: (0, m.DZ)(C.expires)
					})
				},
				f = (C, y, S) => {
					const L = [...new Set([u.T.CONTACT, u.T.EXPIRES, ...Object.values(u.T)])],
						b = Object.entries(C).sort(([P], [O]) => L.indexOf(P) - L.indexOf(O)).filter(([P, O]) => !!a[P] && !!O && (!Array.isArray(O) || !!O.length)).map(([P, O]) => Array.isArray(O) ? O.map(D => `${S(a[P].label)}: ${D}`).join(`
`) : `${S(a[P].label)}: ${O}`).join(`
`);
					(0, o.yH)(`Cloudflare_${y}_security.txt`, b, "text/plain;charset=utf-8")
				};
			let _ = function(C) {
				return C.CREATED = "created security.txt", C.ENABLED = "enabled security.txt", C.DISABLED = "disabled security.txt", C.DOWNLOADED = "downloaded security.txt", C.UPDATED = "updated security.txt", C.DELETED = "deleted security.txt", C
			}({});
			const h = C => (C == null ? void 0 : C.source) === p.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (C == null ? void 0 : C.source) === p.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				A = C => C === p.W3 ? void 0 : C,
				T = C => p.aW.test(C),
				M = C => {
					switch (C) {
						case p.w.CONTENT_SCANNING:
							return s.ROUTES.CONTENT_SCANNING;
						case p.w.EXPOSED_CREDENTIALS:
							return s.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				ROUTES: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Sb: function() {
					return g
				},
				Vj: function() {
					return i
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(c) {
						return Object.getOwnPropertyDescriptor(a, c).enumerable
					})), l.forEach(function(c) {
						p(t, c, a[c])
					})
				}
				return t
			}

			function p(t, r, a) {
				return r = u(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function u(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
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
				g = ({
					event: t,
					category: r = "user journey",
					product: a = "waf",
					productName: l = "Managed Rules",
					additionalData: c
				}) => {
					o().sendEvent(t, s({
						category: r,
						product: a,
						productName: l
					}, c || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				D: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CLICK_MENU_ITEM_SHARE = "click on share item", o.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", o.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", o.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", o.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", o.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", o.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", o.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", o.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", o.CLICK_ON_DELETE_RULESET = "click on delete ruleset", o.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", o
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/stream/actionTypes.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				U: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ReplaceVideos = "stream.replace_videos", o.PrependVideo = "stream.prepend_video", o.UpdateVideo = "stream.update_video", o.UpdateVideoPending = "steam.update_video_pending", o.RemoveVideos = "stream.remove_videos", o.StoreUploader = "stream.store_uploader", o.UpsertUploads = "stream.upsert_uploads", o.RemoveUploads = "stream.remove_uploads", o.UpdateUploadProgress = "stream.update_upload_progress", o.UploadViaUrl = "stream.upload_via_url", o.SetLoading = "stream.set_loading", o.SetStorageLoading = "stream.set_storage_loading", o.SetStorage = "stream.set_storage", o.SetPage = "stream.set_page", o.SetPausedUploads = "stream.set_paused_uploads", o.RemovePausedUpload = "stream.remove_paused_upload", o.SetRequestTimestamp = "stream.set_request_timestamp", o.ResetState = "stream.reset_state", o
			}({})
		},
		"../react/pages/stream/reducer.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				ZP: function() {
					return t
				},
				nY: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				o = n("../react/pages/stream/actionTypes.ts"),
				s = n("../react/pages/stream/util/pager.ts");

			function p(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						c = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), c.forEach(function(f) {
						u(r, f, l[f])
					})
				}
				return r
			}

			function u(r, a, l) {
				return a = m(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function m(r) {
				var a = i(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function i(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var c = l.call(r, a || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const d = "stream",
				g = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function t(r = g, a) {
				switch (a.type) {
					case o.U.ResetState:
						return g;
					case o.U.SetStorageLoading:
						const {
							storageLoading: l
						} = a;
						return p({}, r, {
							storageLoading: l
						});
					case o.U.SetStorage:
						return p({}, r, {
							storage: a.payload ? p({}, r.storage, a.payload) : void 0
						});
					case o.U.ReplaceVideos:
						return p({}, r, {
							videos: a.videos
						});
					case o.U.PrependVideo:
						return p({}, r, {
							videos: [a.video, ...r.videos].filter((c, f) => f < s.FJ)
						});
					case o.U.UpdateVideo:
						return p({}, r, {
							videos: r.videos.map(c => c.uid === a.video.uid ? a.video : c)
						});
					case o.U.UpdateVideoPending:
						return p({}, r, {
							videoUpdateStatuses: p({}, r.videoUpdateStatuses, {
								[a.uid]: a.status
							})
						});
					case o.U.RemoveVideos:
						return p({}, r, {
							videos: r.videos.filter(c => !a.ids.includes(c.uid))
						});
					case o.U.SetLoading:
						return p({}, r, {
							loading: a.loading
						});
					case o.U.SetRequestTimestamp:
						return p({}, r, {
							requestTimestamp: a.requestTimestamp
						});
					case o.U.UploadViaUrl:
						return r;
					default:
						return (0, e.h)(a, r)
				}
			}
		},
		"../react/pages/stream/selectors.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Id: function() {
					return p
				},
				OU: function() {
					return t
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
					return a
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
					return g
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts"),
				s = n("../react/pages/stream/reducer.ts");
			const p = h => h[s.nY],
				u = h => p(h).videos,
				m = h => p(h).videoUpdateStatuses,
				i = h => p(h).loading,
				d = h => p(h).requestTimestamp,
				g = h => p(h).storageLoading,
				t = h => p(h).storage,
				r = h => (0, o.BF)(h, "stream.enabled") || (0, e.bC)(h),
				a = h => (0, e.Le)(h, "stream", "connect"),
				l = h => (0, e.Le)(h, "stream", "stream-4371"),
				c = h => (0, e.Le)(h, "stream", "public-details-enabled"),
				f = h => !!(0, e.Le)(h, "stream", "llhls"),
				_ = h => {
					const A = t(h);
					return A !== void 0 && A.limitMins > A.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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

			function o(p, u, m) {
				const i = {
					search: m,
					limit: e.toString()
				};
				return u !== void 0 && (i.end = u), i
			}

			function s(p, u, m) {
				return {
					limit: e.toString(),
					search: m,
					asc: "true",
					start_comp: "gt",
					start: u
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", o.POOL_TABLE = "click on expandable row on pool", o.CREATE_MONITOR_LINK = "click on create a monitor", o.EDIT_MONITOR_LINK = "click on edit a monitor", o.EDIT_MONITOR = "edit monitor", o.CREATE_MONITOR = "create monitor", o.CREATE_POOL_LINK = "click on create a pool", o.EDIT_POOL_LINK = "click on edit a pool", o.EDIT_POOL = "edit pool", o.CREATE_POOL = "create pool", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				N: function() {
					return s
				},
				X: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);
			let s = function(u) {
				return u.CREATE = "create waiting room", u.UPDATE = "update waiting room", u.EVENTS = "view waiting rooms events", u.ANALYTICS = "view waiting room analytics", u.GENERATE_PREVIEW = "generate waiting room preview link", u
			}({});
			const p = async u => {
				await o().sendEvent(u, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				N3: function() {
					return d
				},
				P: function() {
					return t
				},
				Xh: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						c = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), c.forEach(function(f) {
						p(r, f, l[f])
					})
				}
				return r
			}

			function p(r, a, l) {
				return a = u(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function u(r) {
				var a = m(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var c = l.call(r, a || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const i = "TURNSTILE";
			let d = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const g = ({
					name: r,
					product: a = i,
					category: l = "user journey",
					page: c,
					additionalData: f = {}
				}) => {
					o().sendEvent(r, s({
						category: l,
						page: c,
						product: a
					}, f || {}))
				},
				t = () => {
					var r;
					return (r = Object.values(d)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				E: function() {
					return d
				},
				Ky: function() {
					return g
				},
				RJ: function() {
					return i
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function s(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(c) {
						return Object.getOwnPropertyDescriptor(a, c).enumerable
					})), l.forEach(function(c) {
						p(t, c, a[c])
					})
				}
				return t
			}

			function p(t, r, a) {
				return r = u(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function u(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let i = function(t) {
				return t.CREATE_GROUP_BUTTON = "click create user group button", t.GROUP_CREATE = "create user group", t.GROUP_UPDATE = "group name updated", t.CREATE_GROUP_CANCEL = "click cancel create group", t.GROUP_DETAIL = "click view user group details", t.GROUP_EDIT_BUTTON = "click edit user group name button", t.GROUP_EDIT_CANCEL = "click cancel edit user group name", t.GROUP_DELETE_BUTTON = "click group delete button", t.GROUP_DELETE = "delete user group", t.GROUP_DELETE_CANCEL = "click cancel delete group", t.GROUP_SEARCH = "search for user group", t.GROUP_TAB_NAVIGATE = "nagivate group tab", t.BACK_BUTTON = "clicked back from user group detail", t.ADD_MEMBER_BUTTON = "click add member button", t.MEMBER_DETAIL_MENU = "click user group member detail menu", t.MEMBER_DETAIL_VIEW = "click view in user group member detail menu", t.MEMBER_DETAIL_EDIT = "click edit in user group member detail menu", t.MEMBER_DETAIL_DELETE = "click delete in user group member detail menu", t.MEMBER_DELETE = "delete user group member", t.MEMBER_DETAIL_DELETE_CANCEL = "click cancel delete user group member", t.ADD_POLICY_BUTTON = "click add user group policy button", t
			}({});
			const d = ({
					name: t,
					additionalData: r = {}
				}) => {
					o().sendEvent(t, s({}, r || {}))
				},
				g = () => {
					var t;
					return (t = Object.values(i)) === null || t === void 0 ? void 0 : t.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				d: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				default: (0, e.BC)`/${"accountId"}/`,
				home: (0, e.BC)`/${"accountId"}/home`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zone-versioning/selectors.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				$e: function() {
					return S
				},
				$h: function() {
					return T
				},
				G: function() {
					return y
				},
				M3: function() {
					return b
				},
				Tr: function() {
					return h
				},
				UY: function() {
					return f
				},
				bH: function() {
					return r
				},
				fv: function() {
					return P
				},
				hF: function() {
					return M
				},
				iw: function() {
					return l
				},
				m7: function() {
					return t
				},
				re: function() {
					return C
				},
				tp: function() {
					return c
				}
			});
			var e = n("../react/app/redux/normalizer.js"),
				o = n("../../../../node_modules/reselect/lib/index.js"),
				s = n("../react/common/selectors/zoneSelectors.ts"),
				p = n("../react/app/components/SidebarNav/permissions.ts"),
				u = n("../react/common/selectors/entitlementsSelectors.ts");

			function m(O) {
				for (var D = 1; D < arguments.length; D++) {
					var B = arguments[D] != null ? Object(arguments[D]) : {},
						U = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(B).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(B, Z).enumerable
					})), U.forEach(function(Z) {
						i(O, Z, B[Z])
					})
				}
				return O
			}

			function i(O, D, B) {
				return D = d(D), D in O ? Object.defineProperty(O, D, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[D] = B, O
			}

			function d(O) {
				var D = g(O, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function g(O, D) {
				if (typeof O != "object" || O === null) return O;
				var B = O[Symbol.toPrimitive];
				if (B !== void 0) {
					var U = B.call(O, D || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(O)
			}
			const t = O => (0, s.nA)(O) ? (0, u.p1)(O) && (0, p.$n)(O, "zone_versioning", "versioning") : !1,
				r = O => O.zoneVersioning.zoneApplications,
				a = (0, e.P1)("zoneApplications", r),
				l = O => O.zoneVersioning.zoneVersions,
				c = (0, e.P1)("zoneVersions", l),
				f = (0, o.P1)(c, O => {
					if (O) return O.filter(D => D.status == "V")
				}),
				_ = O => O.zoneVersioning.environments,
				h = O => O.zoneVersioning.environments.isRequesting,
				A = (0, e.P1)("environments", _),
				T = (0, o.P1)(a, O => {
					if (O) {
						if (O.length === 1) return O[0];
						O.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${O.length}`))
					}
					return null
				}),
				M = (0, o.P1)(A, O => O ? O.environments : []),
				C = O => {
					var D;
					return (D = O.zoneVersioning) === null || D === void 0 ? void 0 : D.zoneVersionSelector
				},
				y = (0, o.P1)(C, c, (O, D) => {
					if (!(O == null ? void 0 : O.isVersion) || !D) return null;
					const B = D.find(U => {
						if (U.version === O.selectedVersion && U.locked) return !0
					});
					return B ? m({}, B, {
						isLocked: !0
					}) : null
				}),
				S = (0, o.P1)(c, M, (O, D) => !D || !O ? [] : O.map(B => {
					const U = [];
					for (const Z in D) D[Z].version === B.version && U.push(D[Z]);
					return m({}, B, {
						environments: U
					})
				})),
				L = O => O.zoneVersioning.WAFMigrationStatus,
				b = (0, e.P1)("WAFMigrationStatus", L),
				P = O => O.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				$2: function() {
					return L
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
				Lt: function() {
					return c
				},
				Oj: function() {
					return a
				},
				QV: function() {
					return f
				},
				X$: function() {
					return M
				},
				X6: function() {
					return g
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
					return _
				},
				rL: function() {
					return t
				},
				wW: function() {
					return m
				}
			});

			function e(b) {
				for (var P = 1; P < arguments.length; P++) {
					var O = arguments[P] != null ? Object(arguments[P]) : {},
						D = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(O).filter(function(B) {
						return Object.getOwnPropertyDescriptor(O, B).enumerable
					})), D.forEach(function(B) {
						o(b, B, O[B])
					})
				}
				return b
			}

			function o(b, P, O) {
				return P = s(P), P in b ? Object.defineProperty(b, P, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[P] = O, b
			}

			function s(b) {
				var P = p(b, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function p(b, P) {
				if (typeof b != "object" || b === null) return b;
				var O = b[Symbol.toPrimitive];
				if (O !== void 0) {
					var D = O.call(b, P || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(b)
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
				t = {
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
					}, t),
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
					free: {
						minutes: 3e3
					},
					paid: {
						minutes: 6e3
					}
				},
				f = {
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
				h = "workers.dev",
				A = "YYYY-MM-DD HH:mm:SS ZZ",
				T = "active",
				M = ["bundled", "unbound", "standard"],
				C = null,
				y = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let S = function(b) {
				return b[b.NONE = 0] = "NONE", b[b.MISS = 1] = "MISS", b[b.EXPIRED = 2] = "EXPIRED", b[b.UPDATING = 3] = "UPDATING", b[b.STALE = 4] = "STALE", b[b.HIT = 5] = "HIT", b[b.IGNORED = 6] = "IGNORED", b[b.BYPASS = 7] = "BYPASS", b[b.REVALIDATED = 8] = "REVALIDATED", b[b.DYNAMIC = 9] = "DYNAMIC", b[b.STREAM_HIT = 10] = "STREAM_HIT", b[b.DEFERRED = 11] = "DEFERRED", b
			}({});
			const L = [S.HIT, S.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Hv: function() {
					return i
				},
				L: function() {
					return s
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
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = d => `${d}.workers.dev`,
				s = (d, g, t) => `${t?`${t}.`:""}${d}.${o(g)}`,
				p = (d, g, t) => `https://${s(d,g,t)}`,
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				MN: function() {
					return s
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
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const s = async ([i, d]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: i,
					variables: d
				})
			})).body, p = async (...i) => (await e.get(...i)).body, u = i => async (d, g) => {
				const t = await fetch(d, g).then(r => r.json());
				return i.assertDecode(t)
			}, m = async (...i) => (await p(...i)).result;
			E.ZP = {
				fetcher: i => Array.isArray(i) ? m(...i) : m(i)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(x, E) {
				E()
			})(this, function() {
				"use strict";

				function x() {
					var n = !0,
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

					function p(_) {
						return !!(_ && _ !== document && _.nodeName !== "HTML" && _.nodeName !== "BODY" && "classList" in _ && "contains" in _.classList)
					}

					function u(_) {
						var h = _.type,
							A = _.tagName;
						return !!(A == "INPUT" && s[h] && !_.readOnly || A == "TEXTAREA" && !_.readOnly || _.isContentEditable)
					}

					function m(_) {
						_.getAttribute("is-focus-visible") !== "" && _.setAttribute("is-focus-visible", "")
					}

					function i(_) {
						_.getAttribute("is-focus-visible") === "" && _.removeAttribute("is-focus-visible")
					}

					function d(_) {
						p(document.activeElement) && m(document.activeElement), n = !0
					}

					function g(_) {
						n = !1
					}

					function t(_) {
						!p(_.target) || (n || u(_.target)) && m(_.target)
					}

					function r(_) {
						!p(_.target) || _.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), i(_.target))
					}

					function a(_) {
						document.visibilityState == "hidden" && (e && (n = !0), l())
					}

					function l() {
						document.addEventListener("mousemove", f), document.addEventListener("mousedown", f), document.addEventListener("mouseup", f), document.addEventListener("pointermove", f), document.addEventListener("pointerdown", f), document.addEventListener("pointerup", f), document.addEventListener("touchmove", f), document.addEventListener("touchstart", f), document.addEventListener("touchend", f)
					}

					function c() {
						document.removeEventListener("mousemove", f), document.removeEventListener("mousedown", f), document.removeEventListener("mouseup", f), document.removeEventListener("pointermove", f), document.removeEventListener("pointerdown", f), document.removeEventListener("pointerup", f), document.removeEventListener("touchmove", f), document.removeEventListener("touchstart", f), document.removeEventListener("touchend", f)
					}

					function f(_) {
						_.target.nodeName.toLowerCase() !== "html" && (n = !1, c())
					}
					document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", g, !0), document.addEventListener("pointerdown", g, !0), document.addEventListener("touchstart", g, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", a, !0), l(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function E(n) {
					var e;

					function o() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && E(x)
			})
		},
		"../react/utils/bootstrap.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return s
				}
			});
			const e = () => {
					var u, m, i;
					return (u = window) === null || u === void 0 || (m = u.bootstrap) === null || m === void 0 || (i = m.data) === null || i === void 0 ? void 0 : i.security_token
				},
				o = () => {
					var u, m, i;
					return !!((u = n.g.bootstrap) === null || u === void 0 || (m = u.data) === null || m === void 0 || (i = m.user) === null || i === void 0 ? void 0 : i.id)
				},
				s = () => {
					var u, m;
					return !!((u = n.g.bootstrap) === null || u === void 0 || (m = u.data) === null || m === void 0 ? void 0 : m.is_kendo)
				},
				p = () => {
					var u, m, i, d;
					return (u = window) === null || u === void 0 || (m = u.bootstrap) === null || m === void 0 || (i = m.data) === null || i === void 0 || (d = i.user) === null || d === void 0 ? void 0 : d.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				O5: function() {
					return p
				},
				Xm: function() {
					return s
				},
				kT: function() {
					return i
				},
				wV: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				s = () => (o() || "").indexOf("C0002") !== -1,
				p = () => (o() || "").indexOf("C0003") !== -1,
				u = () => (o() || "").indexOf("C0004") !== -1,
				m = () => (o() || "").indexOf("C0005") !== -1,
				i = t => {
					const r = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				d = () => {
					var t;
					const r = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				g = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				AI: function() {
					return M
				},
				Kd: function() {
					return r
				},
				S8: function() {
					return T
				},
				ZW: function() {
					return d
				},
				ay: function() {
					return C
				},
				fh: function() {
					return y
				},
				i_: function() {
					return a
				},
				ly: function() {
					return t
				},
				th: function() {
					return i
				},
				ti: function() {
					return c
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				s = n("../../../common/intl/intl-types/src/index.ts"),
				p = n("../../../common/util/types/src/utils/index.ts"),
				u = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m = n("../../../../node_modules/cookie/index.js");
			const i = "cf-sync-locale-with-cps",
				d = s.Q.en_US,
				g = "en_US",
				t = "cf-locale";

			function r() {
				const b = (0, m.parse)(document.cookie);
				return u.Z.get(t) || b[t] || null
			}

			function a(b) {
				document.cookie = (0, m.serialize)(t, b, {
					path: "/",
					maxAge: 31536e3
				}), u.Z.set(t, b)
			}

			function l() {
				document.cookie = serializeCookie(t, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(t)
			}
			const c = b => (0, p.Yd)(s.Q).find(P => s.Q[P] === b) || g,
				f = [],
				_ = [],
				h = [s.Q.de_DE, s.Q.en_US, s.Q.es_ES, s.Q.fr_FR, s.Q.it_IT, s.Q.pt_BR, s.Q.ko_KR, s.Q.ja_JP, s.Q.zh_CN, s.Q.zh_TW],
				A = {
					test: [...h, ..._, ...f],
					development: [...h, ..._, ...f],
					staging: [...h, ..._, ...f],
					production: [...h, ..._]
				},
				T = b => {
					const P = s.Q[b];
					return A.production.includes(P)
				},
				M = () => Object.keys(s.Q).filter(b => T(b)),
				C = b => {
					const P = s.Q[b];
					return _.includes(P)
				},
				y = b => S[b],
				S = {
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
		"../react/utils/translator.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				QT: function() {
					return c
				},
				Vb: function() {
					return d
				},
				Yi: function() {
					return t
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
					return l
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = n("../../../common/intl/intl-core/src/Translator.ts"),
				s = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				p = n.n(s),
				u = n("../flags.ts");
			const m = new o.Z({
				pseudoLoc: (0, u.J8)("is_pseudo_loc")
			});

			function i(f, ..._) {
				return m.t(f, ..._)
			}
			const d = m;

			function g(f, ..._) {
				return markdown(i(f, _))
			}

			function t(f) {
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
			const a = s.Trans,
				l = s.I18n,
				c = s.useI18n
		},
		"../react/utils/url.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Ct: function() {
					return C
				},
				Fl: function() {
					return F
				},
				KT: function() {
					return ce
				},
				NF: function() {
					return _
				},
				Nw: function() {
					return T
				},
				Pd: function() {
					return A
				},
				Uh: function() {
					return Q
				},
				Y_: function() {
					return f
				},
				e1: function() {
					return M
				},
				el: function() {
					return B
				},
				hW: function() {
					return Z
				},
				pu: function() {
					return ne
				},
				qR: function() {
					return D
				},
				td: function() {
					return h
				},
				uW: function() {
					return _e
				}
			});
			var e = n("../../../../node_modules/query-string/query-string.js"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				p = n("../react/pages/stream/routes.ts"),
				u = n("../react/pages/r2/routes.ts"),
				m = n("../react/pages/zoneless-workers/routes.ts"),
				i = n("../react/pages/pages/routes.ts"),
				d = n("../react/pages/d1/routes.ts");

			function g(G) {
				for (var J = 1; J < arguments.length; J++) {
					var W = arguments[J] != null ? Object(arguments[J]) : {},
						q = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(W).filter(function($) {
						return Object.getOwnPropertyDescriptor(W, $).enumerable
					})), q.forEach(function($) {
						t(G, $, W[$])
					})
				}
				return G
			}

			function t(G, J, W) {
				return J = r(J), J in G ? Object.defineProperty(G, J, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[J] = W, G
			}

			function r(G) {
				var J = a(G, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function a(G, J) {
				if (typeof G != "object" || G === null) return G;
				var W = G[Symbol.toPrimitive];
				if (W !== void 0) {
					var q = W.call(G, J || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(G)
			}
			const {
				endsWithSlash: l
			} = s.default, c = (G, J) => {
				const W = G.replace(l, "").split("/");
				return W.slice(0, 2).concat([J]).concat(W.slice(3)).join("/")
			}, f = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), _ = G => `/${G.replace(l,"").replace(/^\//,"")}`, h = G => T("add-site", G), A = G => T("billing", G), T = (G, J) => J ? `/${J}${G?`/${G}`:""}` : `/?to=/:account/${G}`, M = () => {
				const G = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return G ? G[1] : null
			}, C = (G, J) => o().stringify(g({}, o().parse(G), J)), y = (G = "") => G.toString().replace(/([\/]{1,})$/, ""), S = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], L = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, b = /^\/(\w{32,})(\/[^.]*)?/, P = G => S.includes(G), O = G => !P(G), D = G => !P(G) && b.test(G), B = G => !P(G) && L.test(G), U = G => L.exec(G), Z = G => {
				if (B(G)) return G.split("/").filter(J => J.length > 0)[1]
			}, ae = G => b.exec(G), _e = G => {
				if (D(G)) {
					const J = ae(G);
					if (J) return J[1]
				}
			}, de = G => D(G) && G.split("/")[2] === "register-domain", ue = G => de(G) ? G.split("/") : null, K = G => {
				if (B(G)) {
					const [, , , J, W, q, $, te] = G.split("/");
					return J === "traffic" && W === "load-balancing" && q === "pools" && $ === "edit" && te
				}
			}, Q = G => {
				const J = ue(G);
				if (J) return J[3]
			}, H = (G, J) => {
				var W, q;
				return ((W = G.pattern.match(/\:/g)) !== null && W !== void 0 ? W : []).length - ((q = J.pattern.match(/\:/g)) !== null && q !== void 0 ? q : []).length
			}, I = [...Object.values(p.C), ...Object.values(u._j), ...Object.values(m._j), ...Object.values(i._j), ...Object.values(d._)].sort(H);

			function F(G) {
				if (!O(G)) return G;
				for (const te of I)
					if (te.expression.test(G)) return te.pattern;
				const J = ue(G);
				if (J) {
					const [, , te, , ...Ee] = J;
					return `/:accountId/${te}/:domainName/${Ee.join("/")}`
				}
				if (K(G)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const q = U(G);
				if (q) {
					const [, , , , te] = q;
					return `/:accountId/:zoneName${te||""}`
				}
				const $ = ae(G);
				if ($) {
					const [, , te] = $;
					return `/:accountId${te||""}`
				}
				return G
			}

			function ne(G) {
				if (!!G) try {
					const W = G.split(".").pop();
					if (W && W.length > 0) return W
				} catch {}
			}

			function ce(G, J = document.location.href) {
				try {
					const W = new URL(G),
						q = new URL(J);
					if (W.origin === q.origin) return `${W.pathname}${W.search}${W.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				r: function() {
					return i
				},
				y: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = n.n(p);
			const m = /^\/domainconnect\/v2\/domaintemplates\//i,
				i = "domain-connect-redirect",
				d = () => {
					const g = (0, p.useLocation)();
					(0, e.useEffect)(() => {
						m.test(g.pathname) && s.Z.set(i, g, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = n("../utils/zaraz.ts")
		},
		"../react/utils/zoneLevelAccess.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				P: function() {
					return p
				},
				b: function() {
					return u
				}
			});
			var e = n("../react/common/hooks/useGate.ts"),
				o = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function s() {
				var m, i, d, g, t, r;
				return (m = window) === null || m === void 0 || (i = m.bootstrap) === null || i === void 0 || (d = i.data) === null || d === void 0 || (g = d.user) === null || g === void 0 || (t = g.betas) === null || t === void 0 || (r = t.some) === null || r === void 0 ? void 0 : r.call(t, a => a === "zone_level_access_beta")
			}

			function p() {
				const m = !!(0, e.Z)("zone-level-access");
				return s() || m
			}

			function u(m) {
				const i = !!(0, o.z1)("zone-level-access")(m);
				return s() || i
			}
		},
		"../utils/getDashVersion.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				p: function() {
					return s
				},
				t: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var p, u;
					return (p = window) === null || p === void 0 || (u = p.build) === null || u === void 0 ? void 0 : u.dashVersion
				},
				s = () => {
					var p;
					return ((0, e.parse)((p = document) === null || p === void 0 ? void 0 : p.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Wi: function() {
					return Ve
				},
				IM: function() {
					return Fe
				},
				yV: function() {
					return Ce
				},
				Ug: function() {
					return le
				},
				v_: function() {
					return Oe
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				s = n("../react/utils/bootstrap.ts"),
				p = n("../react/app/providers/storeContainer.js"),
				u = n("../react/common/selectors/languagePreferenceSelector.ts"),
				m = n("../flags.ts"),
				i = n("../../../../node_modules/cookie/index.js"),
				d = n("../react/utils/url.ts"),
				g = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				a = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				l = n("../utils/getDashVersion.ts"),
				c = n("../react/common/selectors/accountSelectors.ts"),
				f = n("../react/common/selectors/entitlementsSelectors.ts");

			function _(R) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var oe = arguments[Y] != null ? Object(arguments[Y]) : {},
						ve = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && ve.push.apply(ve, Object.getOwnPropertySymbols(oe).filter(function(he) {
						return Object.getOwnPropertyDescriptor(oe, he).enumerable
					})), ve.forEach(function(he) {
						h(R, he, oe[he])
					})
				}
				return R
			}

			function h(R, Y, oe) {
				return Y = A(Y), Y in R ? Object.defineProperty(R, Y, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[Y] = oe, R
			}

			function A(R) {
				var Y = T(R, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function T(R, Y) {
				if (typeof R != "object" || R === null) return R;
				var oe = R[Symbol.toPrimitive];
				if (oe !== void 0) {
					var ve = oe.call(R, Y || "default");
					if (typeof ve != "object") return ve;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(R)
			}
			const M = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": t.eg.string.optional
				})),
				C = (0, r.Z)(R => {
					try {
						return M.assertDecode((0, i.parse)(R))
					} catch (Y) {
						return console.error(Y), {}
					}
				}),
				y = R => (Y, oe, ve) => {
					try {
						const tt = window.location.pathname,
							at = (0, p.bh)().getState(),
							mt = C(document.cookie),
							Ct = _({
								page: (0, d.Fl)(ve.page || window.location.pathname),
								dashVersion: (0, l.t)()
							}, mt);
						if (Y === "identify") {
							var he, $e;
							const it = {
								gates: (0, a.T2)(at) || {},
								country: (he = n.g) === null || he === void 0 || ($e = he.bootstrap) === null || $e === void 0 ? void 0 : $e.ip_country
							};
							return R(Y, oe, _({}, Ct, it, ve))
						} else {
							const it = {
								accountId: (0, d.uW)(tt),
								zoneName: (0, d.hW)(tt),
								domainName: (0, d.Uh)(tt)
							};
							if ((0, d.qR)(tt)) {
								var et;
								const He = (0, c.D0)(at);
								it.isEntAccount = !!(He == null || (et = He.meta) === null || et === void 0 ? void 0 : et.has_enterprise_zones) || (0, f.p1)(at)
							}
							if ((0, d.el)(tt)) {
								var Je;
								const He = (0, g.nA)(at);
								it.zoneId = He == null ? void 0 : He.id, it.plan = He == null || (Je = He.plan) === null || Je === void 0 ? void 0 : Je.legacy_id
							}
							return R(Y, oe, _({}, Ct, it, ve))
						}
					} catch (tt) {
						return console.error(tt), R(Y, oe, ve)
					}
				},
				S = R => async (Y, oe, ve) => {
					try {
						return await R(Y, oe, ve)
					} catch (he) {
						if (console.error(he), !Oe()) throw he;
						return {
							status: "rejected",
							reason: he
						}
					}
				};
			var L = n("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				b = n("../react/common/components/filter-editor/constants/userJourney.ts"),
				P = n("../react/common/hooks/rulesets/resources/tracking.tsx"),
				O = n("../react/common/middleware/sparrow/errors.ts"),
				D = n("../react/pages/caching/tracking.tsx"),
				B = n("../react/pages/home/domain-registration/tracking.ts"),
				U = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				Z = n("../react/pages/hyperdrive/tracking.ts"),
				ae = n("../react/pages/magic/overview/tracking.ts"),
				_e = n("../react/pages/magic/packet-captures/constants.ts"),
				de = n("../react/pages/page-rules/tracking.ts"),
				ue = n("../react/pages/pages/constants.ts"),
				K = n("../react/pages/pipelines/tracking.ts"),
				Q = n("../react/pages/security-center/BlockedContent/constants.ts"),
				H = n("../react/pages/security-center/tracking.ts"),
				I = n("../react/pages/security/api-shield/tracking.ts"),
				F = n("../react/pages/security/bots/tracking.ts"),
				ne = n("../react/pages/security/resources/constants.tsx"),
				ce = n("../react/pages/security/page-shield/resources/index.ts"),
				G = n("../react/pages/home/configurations/lists/tracking.ts"),
				J = n("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				W = n("../react/pages/home/alerts/tracking.ts"),
				q = n("../react/pages/dns/dns-records/tracking.ts"),
				$ = n("../react/pages/magic/network-monitoring/constants.ts"),
				te = n("../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts"),
				Ee = n("../react/pages/security/settings/index.tsx"),
				Te = n("../react/pages/shared-config/sparrowEvents.tsx"),
				Ue = n("../react/pages/spectrum/tracking.tsx"),
				ke = n("../react/pages/traffic/argo/tracking.ts"),
				xe = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Ke = n("../react/pages/turnstile/tracking.ts"),
				Le = n("../react/pages/zoneless-workers/constants.ts"),
				X = n("../react/app/components/AccountHome/tracking.ts"),
				re = n("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				me = n("../react/pages/home/configurations/dns-settings/tracking.ts"),
				k = n("../react/pages/user-groups/sparrowEvents.ts"),
				pe = n("../react/common/components/api-tokens/sparrowEvents.ts"),
				Ie = n("../react/pages/security/security-rules/resources/sparrowEvents.ts");
			const ze = ((R, Y, ...oe) => t.eg.union([t.eg.literal(R), t.eg.literal(Y), ...oe.map(ve => t.eg.literal(ve))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", X.gX.SPARROW_PROJECTS_TABLE_CLICK, X.gX.SPARROW_EMPTY_STATE_CTA_CLICK, X.gX.SPARROW_PRODUCT_CARD_CLICK, X.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, X.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, X.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, X.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, X.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Le.QV.clickedDownloadAnalytics, Le.QV.clickedPrintAnalytics, Le.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Le.QV.addWCITriggerToExistingWorker, Le.QV.updateWCITrigger, Le.QV.deleteWCITrigger, Le.QV.addWCITriggerToNewWorker, Le.QV.createWCIBuildForNewWorker, Le.QV.completedWCIBuildForNewWorker, Le.QV.changedDefaultConfigurations, ue.QV.toggledPagesSmartPlacement, ue.QV.downloadDemoProject, Le.QV.clickCreateWorkerFromRepoNextStep, Le.QV.clickCreateWorkerFromRepoPreviousStep, Le.QV.clickCreateNewSCMConnection, Le.QV.redirectFromSCMOAuth, Le.QV.clickSubmitError, Le.QV.selectTemplate, Le.QV.templateStubWorkerCreated, Le.QV.templateStubWorkerCreationFailed, Le.QV.templateRepositoryCreated, Le.QV.templateRepositoryCreationFailed, Le.QV.copyTemplateC3Command, Le.QV.templateDeployClick, Le.QV.reauthenticateGithubModalShown, Le.QV.updateGithubPermissionsClicked, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", F.N3.INITIAL_FETCH_SCORES, F.N3.FETCH_CONFIGURATION, F.N3.INITIAL_FETCH_TIME_SERIES, F.N3.INITIAL_FETCH_ATTRIBUTES, F.N3.UPDATE_SETTINGS, F.N3.DELETE_RULE, F.N3.UPDATE_RULE, F.N3.FETCH_RULES, F.N3.CONFIGURE_BOT_MANAGEMENT, F.N3.WAF_RULES_REDIRECT, U.F.TOGGLE_TCP_PROTECTION, U.F.GET_TCP_PROTECTION_PREFIXES, U.F.CREATE_TCP_PROTECTION_PREFIXES, U.F.CREATE_TCP_PROTECTION_PREFIX, U.F.UPDATE_TCP_PROTECTION_PREFIX, U.F.DELETE_TCP_PROTECTION_PREFIX, U.F.DELETE_TCP_PROTECTION_PREFIXES, U.F.GET_TCP_PROTECTION_ALLOWLIST, U.F.CREATE_TCP_PROTECTION_ALLOWLIST, U.F.UPDATE_TCP_PROTECTION_ALLOWLIST, U.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, U.F.DELETE_TCP_PROTECTION_ALLOWLIST, U.F.GET_SYN_PROTECTION_RULES, U.F.GET_SYN_PROTECTION_RULE, U.F.CREATE_SYN_PROTECTION_RULE, U.F.UPDATE_SYN_PROTECTION_RULE, U.F.DELETE_SYN_PROTECTION_RULE, U.F.GET_TCP_FLOW_PROTECTION_RULES, U.F.GET_TCP_FLOW_PROTECTION_RULE, U.F.CREATE_TCP_FLOW_PROTECTION_RULE, U.F.UPDATE_TCP_FLOW_PROTECTION_RULE, U.F.DELETE_TCP_FLOW_PROTECTION_RULE, U.F.GET_SYN_PROTECTION_FILTERS, U.F.GET_SYN_PROTECTION_FILTER, U.F.CREATE_SYN_PROTECTION_FILTER, U.F.UPDATE_SYN_PROTECTION_FILTER, U.F.DELETE_SYN_PROTECTION_FILTER, U.F.GET_TCP_FLOW_PROTECTION_FILTERS, U.F.GET_TCP_FLOW_PROTECTION_FILTER, U.F.CREATE_TCP_FLOW_PROTECTION_FILTER, U.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, U.F.DELETE_TCP_FLOW_PROTECTION_FILTER, U.F.GET_DNS_PROTECTION_RULES, U.F.GET_DNS_PROTECTION_RULE, U.F.CREATE_DNS_PROTECTION_RULE, U.F.UPDATE_DNS_PROTECTION_RULE, U.F.DELETE_DNS_PROTECTION_RULE, ce.FV.MANAGE_PAGE_SHIELD_POLICY, ce.FV.CONFIGURE_PAGE_SHIELD, ce.FV.VIEW_DETECTED_CONNECTIONS, ce.FV.VIEW_DETECTED_SCRIPTS, ce.FV.VIEW_PAGE_SHIELD_POLICIES, ce.FV.VIEW_PAGE_SHIELD_SETTINGS, ce.FV.OPEN_MUTABLE_VERSION_TOOLTIP, ce.FV.SHOW_MUTABLE_VERSION_TOOLTIP, G.y.CREATE_LIST, G.y.DELETE_LIST, G.y.ADD_LIST_ITEM, G.y.DELETE_LIST_ITEM, Z.KO.PURCHASE_WORKERS_PAID, Z.KO.LIST_CONFIGS, Z.KO.SEARCH_CONFIGS, Z.KO.CREATE_HYPERDRIVE_CONFIG, Z.KO.VIEW_CONFIG_DETAILS, Z.KO.UPDATE_CACHING_SETTINGS, Z.KO.DELETE_HYPERDRIVE_CONFIG, Z.KO.CLICK_HYPERDRIVE_DOCUMENTATION, Z.KO.CLICK_GET_STARTED_GUIDE, Z.KO.CLICK_CONNECTIVITY_GUIDES, Z.KO.CLICK_QUICK_LINK, Z.KO.CLICK_DISCORD, Z.KO.CLICK_COMMUNITY, Ue.N.CNAME, Ue.N.IP_ADDRESS, Ue.N.LB, Ue.N.UPDATE_CNAME, Ue.N.UPDATE_IP_ADDRESS, Ue.N.UPDATE_LB, Ue.N.DISABLE, D.N.TIERED_CACHE, D.N.CACHE_PURGE, D.N.CACHE_ANALYTICS, ...(0, Ke.P)(), ...(0, P.x4)(), ...(0, Ee.m8)(), ...(0, k.Ky)(), ...(0, pe.Cf)(), xe.N.CREATE, xe.N.EVENTS, xe.N.ANALYTICS, xe.N.UPDATE, xe.N.GENERATE_PREVIEW, H.RY.INITIATE_URL_SCAN, H.RY.LOAD_SCAN_INFO, H.Ev.LOAD_THREAT_EVENTS, H.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, H.Ev.THREAT_EVENTS_FILTERS, H.v9.EXPAND_INSIGHT_ROW, H.v9.ONE_CLICK_RESOLVE_BUTTON, H.v9.FOLLOW_RESOLVE_URL, H.v9.MANAGE_INSIGHT, H.v9.CLICK_SCAN_NOW, H.v9.CLICK_EXPORT_INSIGHTS, H.v9.BULK_ARCHIVE, H.v9.CLICK_DETAILS_BUTTON, I.Fj[I.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, I.Fj[I.kq.ENDPOINT_MANAGEMENT].detailedMetrics, I.Fj[I.kq.ENDPOINT_MANAGEMENT].createEndpoint, I.Fj[I.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, I.Fj[I.kq.ENDPOINT_MANAGEMENT].deployRouting, I.Fj[I.kq.ENDPOINT_MANAGEMENT].deleteRouting, I.Fj[I.kq.API_DISCOVERY].viewDiscoveredEndpoints, I.Fj[I.kq.API_DISCOVERY].saveDiscoveredEndpoint, I.Fj[I.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, I.Fj[I.kq.SCHEMA_VALIDATION].viewSchemasList, I.Fj[I.kq.SCHEMA_VALIDATION].uploadSchema, I.Fj[I.kq.SCHEMA_VALIDATION].viewSchemaAdoption, I.Fj[I.kq.SCHEMA_VALIDATION].downloadSchema, I.Fj[I.kq.SCHEMA_VALIDATION].deleteSchema, I.Fj[I.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, I.Fj[I.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, I.Fj[I.kq.SEQUENCE_ANALYTICS].viewSequencesPage, I.Fj[I.kq.JWT_VALIDATION].viewJWTRules, I.Fj[I.kq.JWT_VALIDATION].addJWTRule, I.Fj[I.kq.JWT_VALIDATION].editJWTRule, I.Fj[I.kq.JWT_VALIDATION].deleteJWTRule, I.Fj[I.kq.JWT_VALIDATION].reprioritizeJWTRule, I.Fj[I.kq.JWT_VALIDATION].viewJWTConfigs, I.Fj[I.kq.JWT_VALIDATION].addJWTConfig, I.Fj[I.kq.JWT_VALIDATION].editJWTConfig, I.Fj[I.kq.JWT_VALIDATION].deleteJWTConfig, I.Fj[I.kq.SETTINGS].redirectToFirewallRulesTemplate, I.Fj[I.kq.SETTINGS].redirectToPages, I.Fj[I.kq.SETTINGS].listSessionIdentifiers, I.Fj[I.kq.SETTINGS].listRequestsContainingSessionIdentifiers, I.Fj[I.kq.SETTINGS].addOrRemoveSessionIdentifiers, I.Fj[I.kq.SETTINGS].redirectToCustomRules, I.Fj[I.kq.SETTINGS].listAllFallthroughSchemas, I.Fj[I.kq.SEQUENCE_RULES].listSequenceRules, I.Fj[I.kq.SEQUENCE_RULES].deleteSequenceRule, I.Fj[I.kq.SEQUENCE_RULES].reorderSequenceRule, I.Fj[I.kq.SEQUENCE_RULES].createSequenceRule, I.Fj[I.kq.SEQUENCE_RULES].editSequenceRule, J.Z.ANALYTICS, J.Z.CREATE_AND_DEPLOY, J.Z.CREATE_MONITOR_LINK, J.Z.CREATE_MONITOR, J.Z.CREATE_POOL_LINK, J.Z.CREATE_POOL, J.Z.EDIT_MONITOR, J.Z.EDIT_POOL, J.Z.LOAD_BALANCING_TABLE, J.Z.POOL_TABLE, J.Z.EDIT_MONITOR_LINK, J.Z.EDIT_POOL_LINK, W.y.SECONDARY_DNS_NOTIFICATION_CREATE, W.y.SECONDARY_DNS_NOTIFICATION_UPDATE, W.y.SECONDARY_DNS_NOTIFICATION_DELETE, q.U.ZONE_TRANSFER_SUCCESS, q.U.DNS_RECORD_CREATE, q.U.DNS_RECORD_UPDATE, q.U.DNS_RECORD_DELETE, me.Y.PEER_DNS_CREATE, me.Y.PEER_DNS_UPDATE, me.Y.PEER_DNS_DELETE, me.Y.ZONE_TRANSFER_ENABLE, me.Y.ZONE_TRANSFER_DISABLE, ke.V.ARGO_ENABLEMENT, ke.V.ARGO_GEO_ANALYTICS_FETCH, ke.V.ARGO_GLOBAL_ANALYTICS_FETCH, _e.X.VIEW_BUCKETS_LIST, _e.X.CREATE_BUCKET, _e.X.VALIDATE_BUCKET, _e.X.DELETE_BUCKET, _e.X.VIEW_CAPTURES_LIST, _e.X.CREATE_SIMPLE_CAPTURE, _e.X.CREATE_FULL_CAPTURE, _e.X.VIEW_FULL_CAPTURE, _e.X.DOWNLOAD_SIMPLE_CAPTURE, $.bK.VIEW_RULES, $.bK.CREATE_RULE, $.bK.UPDATE_RULE, $.bK.DELETE_RULE, $.bK.VIEW_CONFIGURATION, $.bK.CREATE_CONFIGURATION, $.bK.UPDATE_CONFIGURATION, $.bK.DELETE_CONFIGURATION, ae.r8.VIEW_ALERTS, ae.r8.VIEW_ALERTS_HISTORY, ae.r8.MAGIC_OVERVIEW_ANALYTICS, ae.VZ.CREATE_SITE, ae.VZ.CREATE_TUNNEL, ae.VZ.CREATE_STATIC_ROUTE, te.o4.CLICK_ADAPTIVE_SAMPLING, te.o4.CLICK_TO_LOG_EXPLORER_BANNER, te.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, te.o4.CLICK_SWITCH_TO_RAW_LOGS, te.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", B.U.REGISTER_DOMAIN_SEARCH_SUBMIT, B.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, B.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, B.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, B.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, B.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, B.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, B.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, B.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, B.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, B.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, B.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, B.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, B.U.REGISTER_DOMAIN_CHECKOUT_ERROR, B.U.TRANSFER_DOMAIN_CHANGE_STEP, B.U.RENEW_DOMAIN_COMPLETED, B.U.RESTORE_DOMAIN_INIT, B.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, B.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, B.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, B.U.RESTORE_DOMAIN_FAILURE, B.U.RESTORE_DOMAIN_COMPLETED, B.U.DOMAIN_DELETE_INIT, B.U.DOMAIN_DELETE_COMPLETED, B.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, B.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, B.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, B.U.DOMAIN_DELETE_CONFIRM_DELETE, B.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, B.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, B.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, B.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, B.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, B.U.DOMAIN_MOVE_START_FLOW, B.U.DOMAIN_MOVE_OPEN_DOCS, B.U.DOMAIN_MOVE_CLOSE_FLOW, B.U.DOMAIN_MOVE_PROGRESS_FLOW, B.U.DOMAIN_MOVE_SUBMIT, B.U.DOMAIN_MOVE_INITIATE_SUCCESS, B.U.DOMAIN_MOVE_INITIATE_ERROR, B.U.DOMAIN_MOVE_CANCEL, B.U.DOMAIN_MOVE_CANCEL_SUCCESS, B.U.DOMAIN_MOVE_CANCEL_ERROR, B.U.ACTION_CENTER_NAVIGATE, B.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, B.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, B.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, K.KO.CLICK_GET_STARTED_GUIDE, K.KO.CLICK_PIPELINE_DOCUMENTATION, K.KO.CLICK_QUICK_LINK, K.KO.CREATE_PIPELINE, K.KO.DELETE_PIPELINE, K.KO.LIST_PIPELINES, K.KO.VIEW_PIPELINE, L.S.EXISTING_DOMAIN, L.S.NEW_DOMAIN, L.S.WAF_RULESET, L.S.WORKERS, L.S.PAGES, L.S.R2, L.S.ACCOUNT_MEMBERS, de._.TEMPLATE_PRODUCT_SELECTED, de._.TEMPLATE_SELECTED, de._.TEMPLATE_SAVE_DRAFT, de._.TEMPLATE_CANCEL, de._.TEMPLATE_DEPLOY, Te.D.CLICK_GO_BACK_SHARE_MODAL, Te.D.CLICK_MENU_ITEM_SHARE, Te.D.CLICK_ON_CANCEL_SHARE_MODAL, Te.D.CLICK_ON_CLOSE_SHARE_MODAL, Te.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, Te.D.CLICK_ON_DELETE_RULESET, Te.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, Te.D.CLICK_ON_EDIT_SHARE_PERMISSION, Te.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, Te.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, Te.D.CLICK_ON_SHARE_TABLE_ROW, ne.pR.CLICK_GEOGRAPHICAL_TEMPLATE, ne.pR.CLICK_IP_TEMPLATE, ne.pR.CLICK_USER_AGENT_TEMPLATE, ne.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, Ee.vc.CREATED, Ee.vc.ENABLED, Ee.vc.DISABLED, Ee.vc.DELETED, Ee.vc.UPDATED, Ee.vc.DOWNLOADED, Q.Gk.REQUEST_REVIEW, Q.Gk.COPY_URL, b.v.FIELD, b.v.OPERATOR, re.Vj.SHOW_LCC_MIGRATION_BANNER, re.Vj.CLICK_LCC_DOCUMENTATION, re.Vj.CLICK_LCC_UPGRADE_GUIDE, re.Vj.SHOW_LCC_MIGRATION_WARNING, Ie.y.CLICK_DISMISS_INELIGIBILITY, Ie.y.CLICK_NEXT_STEP, Ie.y.CLICK_OPT_IN, Ie.y.CLICK_OPT_IN_BUTTON, Ie.y.CLICK_OPT_OUT_BUTTON),
				be = t.eg.exactStrict(t.eg.object({
					".agency": t.eg.any.optional,
					".auction": t.eg.any.optional,
					".bet": t.eg.any.optional,
					".center": t.eg.any.optional,
					".church": t.eg.any.optional,
					".com": t.eg.any.optional,
					".community": t.eg.any.optional,
					".energy": t.eg.any.optional,
					".fitness": t.eg.any.optional,
					".guru": t.eg.any.optional,
					".io": t.eg.any.optional,
					".info": t.eg.any.optional,
					".immo": t.eg.any.optional,
					".lgbt": t.eg.any.optional,
					".life": t.eg.any.optional,
					".live": t.eg.any.optional,
					".media": t.eg.any.optional,
					".mobi": t.eg.any.optional,
					".net": t.eg.any.optional,
					".network": t.eg.any.optional,
					".ninja": t.eg.any.optional,
					".online": t.eg.any.optional,
					".org": t.eg.any.optional,
					".photography": t.eg.any.optional,
					".plus": t.eg.any.optional,
					".press": t.eg.any.optional,
					".pro": t.eg.any.optional,
					".services": t.eg.any.optional,
					".store": t.eg.any.optional,
					".tech": t.eg.any.optional,
					".wiki": t.eg.any.optional,
					".wtf": t.eg.any.optional,
					".xyz": t.eg.any.optional,
					_ga: t.eg.any.optional,
					_lpchecked: t.eg.any.optional,
					a: t.eg.any.optional,
					absolute: t.eg.any.optional,
					access: t.eg.any.optional,
					access_users_allowed: t.eg.any.optional,
					account: t.eg.any.optional,
					accountId: t.eg.any.optional,
					"accountResolver/SELECT_ACCOUNT": t.eg.any.optional,
					"accountResolver/NO_ACTION": t.eg.any.optional,
					accountResolverTotalCpuTime: t.eg.any.optional,
					accountResolverTotalTime: t.eg.any.optional,
					accountResolverTotalUserActionsTime: t.eg.any.optional,
					action: t.eg.any.optional,
					addedRecords: t.eg.any.optional,
					addon: t.eg.any.optional,
					address: t.eg.any.optional,
					apiUrl: t.eg.any.optional,
					argo_accelerated_gigabytes: t.eg.any.optional,
					"aria-current": t.eg.any.optional,
					"aria-controls": t.eg.any.optional,
					"aria-label": t.eg.any.optional,
					"aria-selected": t.eg.any.optional,
					authHeaders: t.eg.any.optional,
					autocomplete: t.eg.any.optional,
					autoRenew: t.eg.any.optional,
					autoSetup: t.eg.any.optional,
					b: t.eg.any.optional,
					buckets: t.eg.string.optional,
					banner: t.eg.any.optional,
					bot_management: t.eg.any.optional,
					brokenExpression: t.eg.any.optional,
					bundle: t.eg.any.optional,
					c: t.eg.any.optional,
					cacheKey: t.eg.any.optional,
					cache_by_device_type: t.eg.any.optional,
					cache_rules: t.eg.any.optional,
					campaignId: t.eg.any.optional,
					campaignID: t.eg.any.optional,
					cancelled: t.eg.any.optional,
					category: t.eg.any.optional,
					cd43: t.eg.any.optional,
					cd45: t.eg.any.optional,
					cd47: t.eg.any.optional,
					certificate_pack_id: t.eg.any.optional,
					certificate_pack_type: t.eg.any.optional,
					cf: t.eg.any.optional,
					cfPlan: t.eg.any.optional,
					chartName: t.eg.any.optional,
					charts: t.eg.any.optional,
					childrenCount: t.eg.any.optional,
					childrenSelected: t.eg.any.optional,
					class: t.eg.any.optional,
					code0: t.eg.any.optional,
					columnName: t.eg.string.optional,
					completedTasks: t.eg.any.optional,
					component: t.eg.any.optional,
					component_values: t.eg.any.optional,
					configuration_rules: t.eg.any.optional,
					contentfulId: t.eg.any.optional,
					country: t.eg.any.optional,
					currentCA: t.eg.any.optional,
					currentPerPage: t.eg.any.optional,
					currentPage: t.eg.any.optional,
					d: t.eg.any.optional,
					dashVersion: t.eg.any.optional,
					"data-children-count": t.eg.any.optional,
					"data-tracking-name": t.eg.any.optional,
					"data-tracking-id": t.eg.any.optional,
					"data-testid": t.eg.any.optional,
					dataset: t.eg.any.optional,
					databaseId: t.eg.any.optional,
					dateCreated: t.eg.any.optional,
					dateModified: t.eg.any.optional,
					ddos: t.eg.any.optional,
					description: t.eg.string.optional,
					dedicated_certificates: t.eg.any.optional,
					dedicated_certificates_custom: t.eg.any.optional,
					deepLink: t.eg.any.optional,
					default: t.eg.any.optional,
					destinationPage: t.eg.string.optional,
					detailType: t.eg.any.optional,
					deviceViewport: t.eg.any.optional,
					direction: t.eg.any.optional,
					directive: t.eg.any.optional,
					"DNS import method": t.eg.any.optional,
					domainName: t.eg.any.optional,
					download: t.eg.any.optional,
					duration: t.eg.any.optional,
					dynamic_redirects: t.eg.any.optional,
					e: t.eg.any.optional,
					email_count: t.eg.any.optional,
					end: t.eg.any.optional,
					endDate: t.eg.any.optional,
					enabled: t.eg.any.optional,
					entitled: t.eg.any.optional,
					environment: t.eg.string.optional,
					error: t.eg.any.optional,
					errorCode: t.eg.any.optional,
					errorMessage: t.eg.any.optional,
					errors: t.eg.any.optional,
					exclude_cdn_cgi: t.eg.any.optional,
					expand: t.eg.any.optional,
					experiment: t.eg.any.optional,
					expression: t.eg.any.optional,
					expressionType: t.eg.any.optional,
					features: t.eg.array(t.eg.string).optional,
					failureReasons: t.eg.any.optional,
					featureChange: t.eg.any.optional,
					featureImproved: t.eg.any.optional,
					featureName: t.eg.any.optional,
					featureOriginal: t.eg.any.optional,
					field: t.eg.any.optional,
					fieldName: t.eg.any.optional,
					filterId: t.eg.any.optional,
					firewall_rules: t.eg.any.optional,
					flow: t.eg.any.optional,
					"font-size": t.eg.any.optional,
					form: t.eg.any.optional,
					formView: t.eg.any.optional,
					frequency: t.eg.any.optional,
					from: t.eg.any.optional,
					fromCategorySearch: t.eg.any.optional,
					fromStreamRatePlanId: t.eg.any.optional,
					toStreamRatePlanId: t.eg.any.optional,
					gatesDelayed: t.eg.any.optional,
					geo: t.eg.any.optional,
					guid: t.eg.any.optional,
					hasData: t.eg.any.optional,
					hasRecords: t.eg.any.optional,
					hasSidebarNav: t.eg.boolean.optional,
					"hasTest2019-06-03": t.eg.any.optional,
					hCaptchaDisplayed: t.eg.any.optional,
					hasEnabledSecurityNavigation: t.eg.any.optional,
					header_modification: t.eg.any.optional,
					hostname_count: t.eg.any.optional,
					hostParam: t.eg.any.optional,
					href: t.eg.any.optional,
					id: t.eg.any.optional,
					index: t.eg.any.optional,
					indexLevel: t.eg.any.optional,
					initialRecommendation: t.eg.any.optional,
					ip_access_rules: t.eg.any.optional,
					items: t.eg.number.optional,
					isAuthenticated: t.eg.any.optional,
					isPaused: t.eg.any.optional,
					isCloudflare: t.eg.any.optional,
					isE2e: t.eg.boolean.optional,
					isExpanding: t.eg.boolean.optional,
					isEntAccount: t.eg.boolean.optional,
					isEnterprise: t.eg.boolean.optional,
					isInactive: t.eg.boolean.optional,
					isOpen: t.eg.boolean.optional,
					isScript: t.eg.any.optional,
					isSPA: t.eg.any.optional,
					isStreaming: t.eg.any.optional,
					isParent: t.eg.any.optional,
					isViewAll: t.eg.any.optional,
					isEditingSubscription: t.eg.any.optional,
					is_replacing: t.eg.any.optional,
					isRaw: t.eg.any.optional,
					jurisdiction: t.eg.any.optional,
					key: t.eg.any.optional,
					label: t.eg.any.optional,
					lastTimestamp: t.eg.any.optional,
					last_scan_days_ago: t.eg.any.optional,
					level: t.eg.any.optional,
					limit: t.eg.any.optional,
					link: t.eg.any.optional,
					listType: t.eg.any.optional,
					load_balancing: t.eg.any.optional,
					load_balancing_base: t.eg.any.optional,
					load_balancing_dns_queries: t.eg.any.optional,
					load_balancing_geo_routing: t.eg.any.optional,
					load_balancing_monitor_interval: t.eg.any.optional,
					load_balancing_origins: t.eg.any.optional,
					load_balancing_probe_regions: t.eg.any.optional,
					legacyDeepLink: t.eg.any.optional,
					locale: t.eg.any.optional,
					location: t.eg.any.optional,
					locationHint: t.eg.any.optional,
					maliciousCode: t.eg.any.optional,
					maliciousDomain: t.eg.any.optional,
					maliciousURL: t.eg.any.optional,
					managed_rules: t.eg.any.optional,
					marketingPlan: t.eg.any.optional,
					matchesCount: t.eg.any.optional,
					matchingRequestPercentage: t.eg.any.optional,
					matchingRequests: t.eg.any.optional,
					message0: t.eg.any.optional,
					method: t.eg.any.optional,
					millis: t.eg.any.optional,
					"mirage-recommendation": t.eg.any.optional,
					mode: t.eg.any.optional,
					monitor: t.eg.string.optional,
					monitorType: t.eg.any.optional,
					mrktCheckboxDisplayed: t.eg.any.optional,
					name: t.eg.any.optional,
					newTotalCount: t.eg.any.optional,
					novalidate: t.eg.any.optional,
					numAccounts: t.eg.any.optional,
					numRecords: t.eg.any.optional,
					numRecordsToApply: t.eg.any.optional,
					numRecordsToPrompt: t.eg.any.optional,
					numRecordsToRemove: t.eg.any.optional,
					numRows: t.eg.any.optional,
					origin_rules: t.eg.any.optional,
					nextPlan: t.eg.any.optional,
					numFilters: t.eg.any.optional,
					numRawLogs: t.eg.any.optional,
					numSampledLogs: t.eg.any.optional,
					moreRawLogs: t.eg.any.optional,
					old_expires_on: t.eg.any.optional,
					old_mode: t.eg.any.optional,
					oldFrequency: t.eg.string.optional,
					oldPlan: t.eg.any.optional,
					oldPrice: t.eg.number.optional,
					oldRatePlan: t.eg.string.optional,
					oldStep: t.eg.any.optional,
					oldSubscriptionValues: t.eg.record(t.eg.string, t.eg.any).optional,
					oldValue: t.eg.any.optional,
					onboarding: t.eg.any.optional,
					operator: t.eg.any.optional,
					order: t.eg.string.optional,
					order_by: t.eg.any.optional,
					page: t.eg.any.optional,
					page_rules: t.eg.any.optional,
					pageName: t.eg.any.optional,
					pageNumber: t.eg.any.optional,
					params: t.eg.any.optional,
					paused: t.eg.any.optional,
					phase: t.eg.any.optional,
					origin_url: t.eg.string.optional,
					payment_country: t.eg.string.optional,
					payment_gateway: t.eg.string.optional,
					percentages: t.eg.array(t.eg.number).optional,
					permission: t.eg.string.optional,
					personalisation: t.eg.boolean.optional,
					personalized: t.eg.boolean.optional,
					per_page: t.eg.any.optional,
					plan: t.eg.any.optional,
					plans: t.eg.any.optional,
					planVolume: t.eg.any.optional,
					position: t.eg.number.optional,
					prefs: t.eg.any.optional,
					previousPage: t.eg.any.optional,
					previousTotalCount: t.eg.any.optional,
					price: t.eg.any.optional,
					priority: t.eg.any.optional,
					product: t.eg.any.optional,
					prioritize_malicious: t.eg.any.optional,
					products: t.eg.any.optional,
					productName: t.eg.any.optional,
					productCategory: t.eg.any.optional,
					provider: t.eg.any.optional,
					question: t.eg.any.optional,
					quota: t.eg.any.optional,
					ratePlan: t.eg.any.optional,
					rayId: t.eg.any.optional,
					readTasks: t.eg.any.optional,
					reason: t.eg.any.optional,
					recommendation: t.eg.any.optional,
					recommendationType: t.eg.any.optional,
					recordAdditionMethod: t.eg.any.optional,
					recordTypes: t.eg.any.optional,
					region: t.eg.any.optional,
					registrar: t.eg.any.optional,
					resourceName: t.eg.string.optional,
					rulesCount: t.eg.any.optional,
					gclid: t.eg.any.optional,
					gclsrc: t.eg.any.optional,
					dclid: t.eg.any.optional,
					utm_source: t.eg.any.optional,
					utm_medium: t.eg.any.optional,
					utm_campaign: t.eg.any.optional,
					utm_term: t.eg.any.optional,
					utm_content: t.eg.any.optional,
					rangeMax: t.eg.number.optional,
					rangeMin: t.eg.number.optional,
					rate_limiting: t.eg.any.optional,
					ratePlanId: t.eg.any.optional,
					referring_domain: t.eg.any.optional,
					referrer: t.eg.any.optional,
					registrationPeriod: t.eg.any.optional,
					registrationStatus: t.eg.any.optional,
					rel: t.eg.any.optional,
					relativeTimeRange: t.eg.any.optional,
					resultRank: t.eg.number.optional,
					"rocket_loader-recommendation": t.eg.any.optional,
					role: t.eg.any.optional,
					roles: t.eg.any.optional,
					ruleDescription: t.eg.any.optional,
					ruleId: t.eg.any.optional,
					scanFailed: t.eg.any.optional,
					scope: t.eg.any.optional,
					searchAction: t.eg.any.optional,
					searchDescription: t.eg.any.optional,
					searchParam: t.eg.any.optional,
					searchStatus: t.eg.any.optional,
					searchTerm: t.eg.any.optional,
					searchValue: t.eg.any.optional,
					section: t.eg.any.optional,
					seenOnParam: t.eg.any.optional,
					selected: t.eg.any.optional,
					series: t.eg.any.optional,
					service: t.eg.any.optional,
					setting: t.eg.any.optional,
					setup: t.eg.any.optional,
					showErrors: t.eg.any.optional,
					sortDirection: t.eg.string.optional,
					sortBy: t.eg.string.optional,
					source: t.eg.any.optional,
					startDate: t.eg.any.optional,
					state: t.eg.any.optional,
					status: t.eg.any.optional,
					step: t.eg.any.optional,
					storageClass: t.eg.any.optional,
					string: t.eg.any.optional,
					stream_storage_thousand_minutes: t.eg.any.optional,
					stream_viewed_thousand_minutes: t.eg.any.optional,
					subcategory: t.eg.any.optional,
					subscribedToMarketing: t.eg.any.optional,
					subscriptionValues: t.eg.record(t.eg.string, t.eg.any).optional,
					subcomponent: t.eg.string.optional,
					success: t.eg.any.optional,
					supportLevel: t.eg.any.optional,
					survey: t.eg.any.optional,
					tab: t.eg.any.optional,
					tableName: t.eg.any.optional,
					tag: t.eg.any.optional,
					target: t.eg.any.optional,
					targetPage: t.eg.any.optional,
					targetCA: t.eg.any.optional,
					target_pack_type: t.eg.any.optional,
					task: t.eg.any.optional,
					text: t.eg.any.optional,
					timeRange: t.eg.any.optional,
					title: t.eg.any.optional,
					tld: t.eg.string.optional,
					to: t.eg.any.optional,
					touched: t.eg.any.optional,
					total: t.eg.number.optional,
					transform_rules: t.eg.any.optional,
					trialPlan: t.eg.any.optional,
					trialStart: t.eg.any.optional,
					topic: t.eg.any.optional,
					totalCount: t.eg.any.optional,
					totalCpuTime: t.eg.any.optional,
					totalLevels: t.eg.any.optional,
					totalRequests: t.eg.any.optional,
					totalTime: t.eg.any.optional,
					totalUserActionsTime: t.eg.any.optional,
					type: t.eg.any.optional,
					upgrade: t.eg.boolean.optional,
					uploading: t.eg.any.optional,
					uploadFailed: t.eg.any.optional,
					url_rewrites: t.eg.any.optional,
					hosts: t.eg.string.optional,
					uiType: t.eg.string.optional,
					userId: t.eg.any.optional,
					userType: t.eg.any.optional,
					utm_referrer: t.eg.any.optional,
					validation_method: t.eg.any.optional,
					validity_days: t.eg.any.optional,
					value: t.eg.any.optional,
					visibility: t.eg.any.optional,
					via: t.eg.any.optional,
					waf: t.eg.any.optional,
					wizardName: t.eg.any.optional,
					wordpress: t.eg.any.optional,
					workers: t.eg.any.optional,
					worker_kv_deletes: t.eg.any.optional,
					worker_kv_lists: t.eg.any.optional,
					worker_kv_reads: t.eg.any.optional,
					worker_kv_storage: t.eg.any.optional,
					worker_kv_writes: t.eg.any.optional,
					worker_requests: t.eg.any.optional,
					wp_plugin: t.eg.any.optional,
					write_strategy: t.eg.any.optional,
					zone: t.eg.any.optional,
					zoneId: t.eg.any.optional,
					zoneName: t.eg.any.optional,
					"zoneResolver/NO_ACTION": t.eg.any.optional,
					"zoneResolver/SELECT_ZONE": t.eg.any.optional,
					zoneResolverTotalCpuTime: t.eg.any.optional,
					zoneResolverTotalTime: t.eg.any.optional,
					zoneResolverTotalUserActionsTime: t.eg.any.optional,
					zones: t.eg.any.optional,
					zoneStatus: t.eg.any.optional,
					zoneType: t.eg.any.optional,
					audit: t.eg.any.optional,
					score: t.eg.any.optional,
					potentialSavings: t.eg.any.optional,
					feature: t.eg.any.optional,
					days: t.eg.any.optional,
					minutes: t.eg.any.optional,
					customRange: t.eg.any.optional,
					metric: t.eg.any.optional,
					url: t.eg.any.optional,
					previousPlan: t.eg.any.optional,
					isStarring: t.eg.any.optional,
					isStarred: t.eg.any.optional,
					totalStarredZones: t.eg.number.optional,
					totalZones: t.eg.number.optional,
					widgetName: t.eg.any.optional,
					statusType: t.eg.any.optional,
					outcome: t.eg.any.optional,
					marketingOptInChecked: t.eg.boolean.optional,
					prompt: t.eg.any.optional,
					positive: t.eg.any.optional,
					endpoint: t.eg.any.optional,
					isArgoEnabled: t.eg.any.optional,
					insightClass: t.eg.string.optional,
					insightType: t.eg.string.optional,
					severity: t.eg.string.optional,
					decision: t.eg.any.optional,
					domain: t.eg.any.optional,
					exact: t.eg.any.optional,
					fees: t.eg.any.optional,
					new_selection: t.eg.any.optional,
					numDomainsInCart: t.eg.any.optional,
					payment_method: t.eg.string.optional,
					payment_option: t.eg.string.optional,
					premium: t.eg.any.optional,
					previous_selection: t.eg.any.optional,
					pricing_local: t.eg.any.optional,
					selection: t.eg.any.optional,
					uniqueTopLevelDomains: t.eg.any.optional,
					template_name: t.eg.any.optional,
					productResource: t.eg.any.optional,
					snippets: t.eg.any.optional,
					ddos_l7: t.eg.any.optional,
					http_request_transform: t.eg.any.optional,
					http_request_origin: t.eg.any.optional,
					http_request_cache_settings: t.eg.any.optional,
					http_config_settings: t.eg.any.optional,
					http_request_dynamic_redirect: t.eg.any.optional,
					http_request_sbfm: t.eg.any.optional,
					"transform-rules": t.eg.any.optional,
					http_request_snippets: t.eg.any.optional,
					cloud_connector: t.eg.any.optional,
					is_first_project: t.eg.any.optional,
					is_first_scm_connection: t.eg.any.optional,
					scm_type: t.eg.any.optional,
					existing_connection_total: t.eg.any.optional,
					invalid_fields: t.eg.any.optional,
					is_retry: t.eg.any.optional,
					changed_fields: t.eg.any.optional,
					rulesetName: t.eg.string.optional,
					isECCRuleset: t.eg.boolean.optional,
					isLCCEnabled: t.eg.boolean.optional,
					isECCEnabled: t.eg.boolean.optional,
					tabName: t.eg.any.optional
				})),
				Re = (R, Y) => {
					const [oe, ve] = je(Y);
					let he, $e;
					return (0, t.nM)(ze.decode(R)) && (he = new O.Uh(R)), ve && ve.length > 0 && ($e = new O.oV(R, ve)), [oe, he, $e]
				},
				je = R => {
					const Y = be.decode(R);
					if ((0, t.nM)(Y)) {
						const oe = Y.left.map(({
							context: ve
						}) => ve.map(({
							key: he
						}) => he)).reduce((ve, he) => ve.concat(he), []).filter(ve => ve in R);
						return [We(oe, R), oe]
					}
					return [R, []]
				},
				We = (R, Y) => Object.entries(Y).reduce((oe, [ve, he]) => (R.includes(ve) || (oe[ve] = he), oe), {}),
				Xe = R => (Y, oe, ve) => {
					const [he, $e, et] = Re(oe, ve);
					if ($e) throw $e;
					return et && console.error(et), R(Y, oe, he)
				};
			var V = n("../react/utils/zaraz.ts");
			const se = {
					identify: !0
				},
				ge = R => (Y, oe, ve) => (se[oe] || V.tg === null || V.tg === void 0 || V.tg.track(oe, ve), R(Y, oe, ve));
			var Me = n("../react/common/selectors/userSelectors.ts");
			const we = "pageview",
				Ne = "create zone",
				Ye = "create user",
				rt = {
					[we]: !0,
					[Ne]: !0,
					[Ye]: !0
				},
				ut = R => {
					var Y;
					return !!((Y = R.gates.assignments) === null || Y === void 0 ? void 0 : Y["dx-enable-google-tag-manager"])
				},
				st = R => {
					const Y = /\|MCMID\|([0-9]+)\|/,
						oe = R.match(Y);
					return oe ? oe[1] : void 0
				},
				gt = R => {
					var Y;
					const {
						deviceViewport: oe,
						page: ve,
						previousPage: he,
						pageName: $e,
						utm_campaign: et,
						_ga: Je,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": tt
					} = R, {
						origin: at
					} = window.location, mt = (0, Me.PR)((0, p.bh)().getState());
					return {
						event: he !== void 0 && ve !== he ? "virtual_page_view" : "page_load",
						device_type: oe,
						hostname: at,
						language: navigator.language,
						locale: (0, u.r)((0, p.bh)().getState()),
						page_location: ve ? `${at}${ve}` : "[redacted]",
						page_path: ve ? `${ve}` : "[redacted]",
						page_referrer: he ? `${at}/${he}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: $e || "[redacted]",
						page_url: ve ? `${at}${ve}` : "[redacted]",
						query: et ? `?utm_campaign=${et}` : "[redacted]",
						user_properties: {
							ga_client_id: (Y = Je) !== null && Y !== void 0 ? Y : void 0,
							ga_client_id_s: Je ? `s${Je}` : void 0,
							user_id: Ve() ? mt == null ? void 0 : mt.id : void 0,
							ecid: tt ? st(tt) : void 0
						}
					}
				},
				ft = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				dt = R => {
					const {
						status: Y
					} = R;
					return Y === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				Ge = (R, Y) => {
					switch (R) {
						case "pageview":
							return gt(Y);
						case "create zone":
							return ft();
						case "create user":
							return dt(Y);
						default:
							return
					}
				},
				Ae = R => (Y, oe, ve) => {
					if (rt[oe]) {
						var he;
						const $e = Ge(oe, ve);
						$e && ((he = window.dataLayer) === null || he === void 0 || he.push($e))
					}
					return R(Y, oe, ve)
				};
			var Qe = n("../react/utils/cookiePreferences.ts");

			function pt(R) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var oe = arguments[Y] != null ? Object(arguments[Y]) : {},
						ve = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && ve.push.apply(ve, Object.getOwnPropertySymbols(oe).filter(function(he) {
						return Object.getOwnPropertyDescriptor(oe, he).enumerable
					})), ve.forEach(function(he) {
						ct(R, he, oe[he])
					})
				}
				return R
			}

			function ct(R, Y, oe) {
				return Y = _t(Y), Y in R ? Object.defineProperty(R, Y, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[Y] = oe, R
			}

			function _t(R) {
				var Y = z(R, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function z(R, Y) {
				if (typeof R != "object" || R === null) return R;
				var oe = R[Symbol.toPrimitive];
				if (oe !== void 0) {
					var ve = oe.call(R, Y || "default");
					if (typeof ve != "object") return ve;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(R)
			}
			const le = R => {
					const Y = ut((0, p.bh)().getState());
					o().init(pt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Oe() && !(0, s.gm)() && Ve(),
						middlewares: [S, Xe, y, ge, ...Y ? [Ae] : []]
					}, R))
				},
				Ce = () => {
					o().identify(pt({}, (0, e.getAttribution)(), {
						locale: (0, u.r)((0, p.bh)().getState()),
						isCloudflare: !!(0, m.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				Oe = () => !0,
				Fe = () => {
					(0, Qe.kT)("sparrow_id")
				},
				Ve = () => (0, Qe.Xm)()
		},
		"../utils/initStyles.ts": function(x, E, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const s = "cfBaseStyles",
				p = document.head || document.getElementsByTagName("head")[0],
				u = i => {
					const d = [];
					for (let g in i.colors) {
						const t = i.colors[g];
						if (Array.isArray(t) && g !== "categorical")
							for (let r = 0; r < t.length; ++r) d.push(`--cf-${g}-${r}:${t[r]};`)
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
					let g = document.getElementById(s);
					g ? g.innerText = "" : (g = document.createElement("style"), g.id = s, p.appendChild(g)), g.appendChild(document.createTextNode(d)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(m), E.Z = m
		},
		"../utils/sentry/lastSentEventId.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
		"../utils/zaraz.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return t
				}
			});

			function e(a) {
				for (var l = 1; l < arguments.length; l++) {
					var c = arguments[l] != null ? Object(arguments[l]) : {},
						f = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(c).filter(function(_) {
						return Object.getOwnPropertyDescriptor(c, _).enumerable
					})), f.forEach(function(_) {
						o(a, _, c[_])
					})
				}
				return a
			}

			function o(a, l, c) {
				return l = s(l), l in a ? Object.defineProperty(a, l, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[l] = c, a
			}

			function s(a) {
				var l = p(a, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function p(a, l) {
				if (typeof a != "object" || a === null) return a;
				var c = a[Symbol.toPrimitive];
				if (c !== void 0) {
					var f = c.call(a, l || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(a)
			}
			const u = {
					track: (a, l) => null,
					set: (a, l) => console.log(`zaraz.set(${a}, ${l})`)
				},
				m = {
					track: (a, l) => {
						var c;
						(c = window.zaraz) === null || c === void 0 || c.track(a, e({}, l, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, l) => {
						var c;
						return (c = window.zaraz) === null || c === void 0 ? void 0 : c.set(a, l)
					}
				};
			let i;
			const d = () => {
					window.zaraz, i = m
				},
				g = ["email", "first_name", "last_name"],
				t = a => {
					g.forEach(l => {
						var c;
						(c = i) === null || c === void 0 || c.set(l, a[l])
					})
				},
				r = () => {
					t({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(x, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				s = n("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				p = n.n(s),
				u = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = n.n(m),
				d = n("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				g = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				t = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				r = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				a = n("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				c = n("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				f = n("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				_ = n("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				h = n("../../../common/component/component-filter-bar/src/constants.js"),
				A = n("../../../common/component/component-filter-bar/src/utils.js");

			function T() {
				return T = Object.assign ? Object.assign.bind() : function(H) {
					for (var I = 1; I < arguments.length; I++) {
						var F = arguments[I];
						for (var ne in F) Object.prototype.hasOwnProperty.call(F, ne) && (H[ne] = F[ne])
					}
					return H
				}, T.apply(this, arguments)
			}

			function M(H) {
				for (var I = 1; I < arguments.length; I++) {
					var F = arguments[I] != null ? Object(arguments[I]) : {},
						ne = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(F).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(F, ce).enumerable
					})), ne.forEach(function(ce) {
						C(H, ce, F[ce])
					})
				}
				return H
			}

			function C(H, I, F) {
				return I = y(I), I in H ? Object.defineProperty(H, I, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : H[I] = F, H
			}

			function y(H) {
				var I = S(H, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function S(H, I) {
				if (typeof H != "object" || H === null) return H;
				var F = H[Symbol.toPrimitive];
				if (F !== void 0) {
					var ne = F.call(H, I || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(H)
			}
			const L = 70,
				b = (0, u.createStyledComponent)(({
					showOverflow: H
				}) => M({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, H ? {} : {
					maxHeight: L,
					overflow: "hidden"
				})),
				P = (0, u.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				O = (0, u.createStyledComponent)(({
					theme: H
				}) => ({
					backgroundColor: H.colors.background,
					py: 1,
					px: 2,
					borderRadius: H.radii[2],
					border: `1px solid ${H.colors.gray[7]}`,
					fontSize: H.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: H.colors.gray[4]
					}
				}), "div"),
				D = (0, u.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				B = (0, u.createStyledComponent)(({
					theme: H
				}) => ({
					color: H.colors.gray[4],
					mr: 1
				}), "span"),
				U = (0, u.createStyledComponent)(() => ({
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
				Z = (0, u.createStyledComponent)(({
					buttonStyle: H
				}) => M({
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
				}, H), g.zx),
				ae = (0, u.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				_e = (0, u.createStyledComponent)(({
					theme: H
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: H.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: H.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: H.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: H.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				de = (0, u.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				ue = H => H.current ? [...H.current.children].reduce((I, F) => (F.offsetTop >= L && I++, I), 0) : 0;
			let K = 0;
			class Q extends e.Component {
				constructor() {
					super();
					C(this, "overflowWrapper", (0, e.createRef)()), C(this, "hasOverflowed", I => {
						const F = ue(this.overflowWrapper);
						I.scrollHeight > L && F >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (I.scrollHeight < L || F === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), C(this, "addNewFilter", () => {
						const {
							filterDefinitions: I
						} = this.props, F = (0, A.TE)(I), ne = Object.keys(F)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: ne,
								operator: (0, A.uv)(ne, F),
								value: (0, A.TT)(ne, F)
							}
						})
					}), C(this, "handleOpenFilterEdit", I => {
						this.setState({
							openFilter: I,
							filterChanges: M({}, this.props.filters[I])
						})
					}), C(this, "handleRemoveFilterClick", (I, F) => {
						I.stopPropagation(), this.removeFilter(F)
					}), C(this, "removeFilter", I => {
						const {
							handleFiltersChange: F
						} = this.props, ne = [...this.props.filters], ce = ne[I];
						ne.splice(I, 1), F(ne), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: ce.key,
							operator: ce.operator,
							value: ce.value
						})
					}), C(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), C(this, "handleFilterSubmit", I => {
						const {
							filterDefinitions: F
						} = this.props;
						I.preventDefault();
						const {
							filterChanges: ne
						} = this.state, ce = typeof F[ne.key].parse == "function" ? Array.isArray(ne.value) ? ne.value.map(F[ne.key].parse) : F[ne.key].parse(ne.value) : ne.value;
						if (F[ne.key].validate && (Array.isArray(ce) ? !ce.every(F[ne.key].validate) : !F[ne.key].validate(ce))) return this.setState({
							invalid: !0
						});
						const G = [...this.props.filters],
							J = M({}, ne, {
								value: ce
							}),
							W = !G[this.state.openFilter];
						W ? G.push(J) : G[this.state.openFilter] = M({}, ne), this.props.handleFiltersChange(G, J), (W ? this.props.onAddFilter : this.props.onEditFilter)({
							field: J.key,
							operator: J.operator,
							value: J.value
						}), this.closeOpenFilterChanges()
					}), C(this, "handlePendingKeyChange", ({
						value: I
					}) => {
						const {
							filterDefinitions: F
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: I,
								operator: (0, A.uv)(I, F),
								value: (0, A.TT)(I, F)
							}
						})
					}), C(this, "handlePendingOperatorChange", ({
						value: I
					}) => {
						let F = M({}, this.state.filterChanges, {
							operator: I
						});
						if ((0, A.dr)(I)) {
							var ne, ce;
							((ne = this.state.filterChanges) === null || ne === void 0 ? void 0 : ne.value) && !Array.isArray((ce = this.state.filterChanges) === null || ce === void 0 ? void 0 : ce.value) && (F.value = [this.state.filterChanges.value])
						} else {
							var G, J, W;
							((G = this.state.filterChanges) === null || G === void 0 ? void 0 : G.value) && Array.isArray((J = this.state.filterChanges) === null || J === void 0 ? void 0 : J.value) && ((W = this.state.filterChanges) === null || W === void 0 ? void 0 : W.value.length) > 0 && (F.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: F
						})
					}), C(this, "handlePendingValueChange", I => {
						this.setState({
							invalid: !1,
							filterChanges: M({}, this.state.filterChanges, {
								value: I
							})
						})
					}), C(this, "handleShowOverflow", () => {
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
						id: ++K
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
						formatLabel: F,
						filterDefinitions: ne
					} = this.props, {
						operator: ce
					} = this.state.filterChanges, G = ne[this.state.filterChanges.key], J = this.state.filterChanges.value, W = $ => Array.isArray($) ? $.map(te => te.value) : ($ == null ? void 0 : $.value) || null;
					if (G.renderValueComponent) return G.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (G.type) {
						case h.k.custom: {
							var q;
							return o().createElement(G.CustomComponent, T({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (q = G == null ? void 0 : G.customProps) !== null && q !== void 0 ? q : {}))
						}
						case h.k.select:
							return (0, A.dr)(ce) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !G.options,
								value: typeof J.split == "function" ? J == null ? void 0 : J.split(",") : Array.isArray(J) ? J : [],
								options: G.options ? G.options.map($ => ({
									value: $.value || $,
									label: $.label || F(this.state.filterChanges.key, $, I)
								})) : J ? (Array.isArray(J) ? J : J.split(",")).map($ => ({
									label: $,
									value: $
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(m.Trans, {
									id: G.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: G.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: $ => {
									this.handlePendingValueChange(W($))
								},
								isValidNewOption: $ => {
									const te = G.validate;
									return !te && $ || $ && te([$])
								},
								getNewOptionData: ($, te) => ({
									value: $,
									label: te
								})
							}) : o().createElement(a.hQ, {
								hideLabel: !0,
								value: J,
								options: G.options.map($ => ({
									value: $,
									label: F(this.state.filterChanges.key, $, I)
								})),
								onChange: ({
									value: $
								}) => this.handlePendingValueChange($)
							});
						case h.k.string:
						default:
							return (0, A.dr)(ce) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof J.split == "function" ? J == null ? void 0 : J.split(",") : Array.isArray(J) ? J : [],
								options: J ? (Array.isArray(J) ? J : J.split(",")).map($ => ({
									label: $,
									value: $
								})) : [],
								noOptionsMessage: () => null,
								placeholder: I.t("analytics.report.filters.labels.placeholder", {
									example: ne[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: $ => {
									this.handlePendingValueChange(W($))
								},
								isValidNewOption: $ => {
									const te = G.validate;
									return !te && $ || $ && te([$])
								},
								getNewOptionData: ($, te) => ({
									value: $,
									label: te
								}),
								formatCreateLabel: $ => I.t("filter_editor.value_create_label", {
									value: $
								})
							}) : o().createElement(m.I18n, null, $ => o().createElement(d.I, {
								value: this.state.filterChanges.value,
								onChange: te => this.handlePendingValueChange(te.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: $.t("analytics.report.filters.labels.placeholder", {
									example: ne[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: I,
						filterDefinitions: F,
						modalStyles: ne,
						filterIconType: ce,
						buttonStyle: G
					} = this.props, J = ue(this.overflowWrapper), W = `filterPanel${this.state.id}`, q = this.state.openFilter !== null;
					return o().createElement(m.I18n, null, $ => o().createElement(l.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(de, null, o().createElement(Z, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": q,
						"aria-controls": W,
						inverted: !0,
						buttonStyle: G
					}, o().createElement(t.J, {
						type: ce || "add",
						mr: 1,
						label: $.t("common.add", {
							_: "Add"
						})
					}), o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(ae, null, o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(b, {
						innerRef: this.overflowWrapper,
						overflowLimit: L,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((te, Ee) => {
						const {
							key: Te,
							operator: Ue,
							value: ke
						} = te, xe = F[Te].ignoreLabelTranslation ? F[Te].label : $.t(F[Te].label), Ke = $.t(`analytics.report.filters.operators.${Ue}`), Le = Array.isArray(ke) ? ke.map(re => I(Te, re, $)).join(", ") : I(Te, ke, $), X = `${xe} ${Ke} ${Le}`;
						return o().createElement(P, {
							key: `${Te}-${Ue}-${ke}`,
							title: X
						}, o().createElement(O, {
							onClick: () => this.handleOpenFilterEdit(Ee)
						}, o().createElement(l.ZC, {
							display: "flex"
						}, o().createElement(D, null, xe), o().createElement(B, null, Ke), o().createElement(U, null, Le), (0, A.oN)(te, F) ? o().createElement(r.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(_e, {
							onClick: re => this.handleRemoveFilterClick(re, Ee),
							"aria-label": "remove"
						}, o().createElement(t.J, {
							type: "remove"
						})))))
					})), q && o().createElement(_.Z, {
						id: W,
						filterDefinitions: F,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, A.oN)(this.state.filterChanges, F),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: I,
						modalStyles: ne
					}), this.state.hasOverflowed && o().createElement(f.Z, {
						count: J,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			C(Q, "propTypes", {
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
			}), E.Z = Q
		},
		"../../../common/component/component-filter-bar/src/index.js": function(x, E, n) {
			"use strict";
			n.d(E, {
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
					return p.oN
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = n("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				s = n("../../../common/component/component-filter-bar/src/constants.js"),
				p = n("../../../common/component/component-filter-bar/src/utils.js"),
				u = n("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				OZ: function() {
					return u
				},
				YB: function() {
					return p
				}
			});

			function e(i, d, g) {
				return d = o(d), d in i ? Object.defineProperty(i, d, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = g, i
			}

			function o(i) {
				var d = s(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function s(i, d) {
				if (typeof i != "object" || i === null) return i;
				var g = i[Symbol.toPrimitive];
				if (g !== void 0) {
					var t = g.call(i, d || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			class p extends Error {
				constructor(d, g) {
					super(g);
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
		"../../../common/util/types/src/api/domain.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
				Aw: function() {
					return S
				},
				Ib: function() {
					return C
				},
				Ks: function() {
					return L
				},
				MS: function() {
					return y
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
					return A
				},
				dN: function() {
					return b
				},
				eF: function() {
					return M
				},
				qp: function() {
					return t
				},
				wR: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				s = e.eg.object({
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
			let g = function(P) {
				return P.ONBOARDING_INITIATED = "Onboarding Initiated", P.ONBOARDED = "Onboarded", P.PENDING_REGISTRY_LOCK = "Pending Registry Lock", P.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", P.REGISTRY_UNLOCKED = "Registry Unlocked", P.LOCKED = "Locked", P.FAILED_TO_LOCK = "Failed To Lock", P.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", P.UNLOCKED = "Unlocked", P.OFFBOARDED = "Offboarded", P
			}({});
			const t = e.eg.object({
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
					fees: d.optional,
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
				a = e.eg.object({
					result: e.eg.array(t),
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
			let f = function(P) {
				return P.PENDING = "pending", P.VERIFIED = "verified", P.REJECTED = "rejected", P.PENDING_DELETE = "pending_delete", P.DELETED = "deleted", P
			}({});
			const _ = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(f),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				h = e.eg.object({
					designated_approvers: e.eg.array(_)
				});
			let A = function(P) {
				return P.PENDING = "pending", P.PENDING_UPDATE = "pending_update", P.ENABLED = "enabled", P.DISABLED = "disabled", P
			}({});
			const T = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(A)
				}),
				M = e.eg.intersection([T, h]),
				C = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let y = function(P) {
				return P.UNLOCK_APPROVAL = "UnlockApprovalRequest", P.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", P.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", P.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", P
			}({});
			const S = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				L = e.eg.object({
					message: e.eg.string
				}),
				b = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(x, E, n) {
			"use strict";
			n.d(E, {
				df: function() {
					return o
				},
				eX: function() {
					return s
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
				s = function(i) {
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
		"../../../common/util/types/src/utils/index.ts": function(x, E, n) {
			"use strict";
			n.d(E, {
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
			const o = (s, p) => {
				if (p !== void 0) throw new Error("Unexpected object: " + s);
				return p
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(x, E, n) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(s) {
				if (!n.o(e, s)) return Promise.resolve().then(function() {
					var m = new Error("Cannot find module '" + s + "'");
					throw m.code = "MODULE_NOT_FOUND", m
				});
				var p = e[s],
					u = p[0];
				return n.e(p[1]).then(function() {
					return n.t(u, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", x.exports = o
		}
	}
]);

//# debugId=d8e31b4e-e3f1-51b4-9af7-e897a31f7f67