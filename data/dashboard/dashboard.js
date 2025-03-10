! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f767a8e9-8c5c-5e27-81f2-bb09cc801a15")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/utils/url.ts"),
				a = n("../../../../node_modules/query-string/query-string.js"),
				p = n.n(a),
				l = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m;
			const i = () => Object.keys(l.Z).reduce((_, C) => (C.indexOf("cf_beta.") === 0 && l.Z.get(C) === "true" && _.push(C.split(".").slice(1).join(".")), _), []),
				d = () => {
					var _, C, A;
					return ((_ = window) === null || _ === void 0 || (C = _.bootstrap) === null || C === void 0 || (A = C.data) === null || A === void 0 ? void 0 : A.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((m = window) === null || m === void 0 ? void 0 : m.location) && l.Z) {
				const _ = p().parse(window.location.search);
				_.beta_on && l.Z.set(`cf_beta.${_.beta_on}`, !0), _.beta_off && l.Z.set(`cf_beta.${_.beta_off}`, !1)
			}
			const g = {},
				t = _ => {
					var C, A, h;
					return Object.prototype.hasOwnProperty.call(g, _) ? g[_] : ((C = window) === null || C === void 0 || (A = C.bootstrap) === null || A === void 0 || (h = A.data) === null || h === void 0 ? void 0 : h.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(D => D === _) ? (g[_] = !0, !0) : (g[_] = !1, !1)
				},
				r = _ => l.Z ? l.Z.get(`cf_beta.${_}`) === !0 : !1,
				s = _ => r(_) || t(_),
				u = () => !0,
				c = () => {
					var _, C, A;
					return ((_ = window) === null || _ === void 0 || (C = _.bootstrap) === null || C === void 0 || (A = C.data) === null || A === void 0 ? void 0 : A.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				f = _ => {
					const C = (0, e.uF)(_),
						A = (C == null ? void 0 : C.roles) || [];
					return (0, o.qR)(location.pathname) && A.length === 1 && A.some(h => h === "Administrator Read Only")
				}
		},
		"../init.ts": function(W, E, n) {
			"use strict";
			n.r(E);
			var e = n("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				a = n("../libs/init/initGlobal.ts"),
				p = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function m(N) {
				for (var $ = 1; $ < arguments.length; $++) {
					var q = arguments[$] != null ? Object(arguments[$]) : {},
						re = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(q).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(q, fe).enumerable
					})), re.forEach(function(fe) {
						i(N, fe, q[fe])
					})
				}
				return N
			}

			function i(N, $, q) {
				return $ = d($), $ in N ? Object.defineProperty(N, $, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[$] = q, N
			}

			function d(N) {
				var $ = g(N, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function g(N, $) {
				if (typeof N != "object" || N === null) return N;
				var q = N[Symbol.toPrimitive];
				if (q !== void 0) {
					var re = q.call(N, $ || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(N)
			}
			const t = N => {
				const $ = N && N.headers || {},
					q = new Headers($);
				return q.append("X-Cross-Site-Security", "dash"), m({}, N, {
					headers: q
				})
			};
			(0, l.register)({
				request: (N, $) => {
					try {
						return new URL(N), N === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", $] : [N, $]
					} catch {
						return [N, t($)]
					}
				}
			});
			var r = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				s = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				u = n("../react/app/providers/storeContainer.js");
			let c = "";
			const f = 61;

			function _(N) {
				const $ = N.substr(1);
				if ($ && c !== $) {
					const q = document.getElementById($);
					if (q) {
						const re = q.getBoundingClientRect().top;
						if (re > 0) {
							const fe = re - f;
							document.documentElement.scrollTop = fe
						}
					}
				}
				c = $
			}

			function C(N) {
				N.listen($ => _($.hash))
			}
			var A = n("../../../../node_modules/cookie/index.js"),
				h = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const D = "CF_dash_version",
				T = "cf_fv_preview",
				v = "cf_pv",
				k = "current",
				P = "hash",
				b = "deploymentPreview",
				L = "fragmentPreview",
				O = N => N === k ? S() : U(),
				S = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				U = (N = 72) => {
					const $ = 36e5;
					return new Date(Date.now() + N * $)
				},
				x = N => {
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
				Q = (N, $ = !1) => {
					var q;
					const re = x(N),
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
    <h1 id="error-title">${re.title}</h1>
    <p id="error-description">${re.description}</p>
  </div>
  `,
						De = $ ? `
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
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(q=window.build)===null||q===void 0?void 0:q.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return fe + De
				},
				oe = N => {
					var $;
					const q = document.getElementById(N);
					!q || ($ = q.parentNode) === null || $ === void 0 || $.removeChild(q)
				};

			function pe() {
				const N = document.getElementById("loading-state");
				N == null || N.classList.add("hide"), N == null || N.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(oe)
				})
			}

			function ue(N) {
				var $;
				const q = document.getElementById("loading-state"),
					re = !!(($ = A.parse(document.cookie)) === null || $ === void 0 ? void 0 : $[D]);
				!q || (q.innerHTML = Q(N == null ? void 0 : N.code, re))
			}
			var ce = n("../utils/initStyles.ts"),
				H = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				J = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				Y = n("../react/common/selectors/languagePreferenceSelector.ts"),
				I = n("../flags.ts"),
				G = n("../utils/getDashVersion.ts");
			const ne = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ae = !0,
				M = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				F = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var B = n("../utils/sentry/lastSentEventId.ts"),
				z = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				j = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const ee = N => {
				const $ = async q => {
					var re, fe;
					const De = {
						envelope: q.body,
						url: N.url,
						isPreviewDeploy: (re = window) === null || re === void 0 || (fe = re.build) === null || fe === void 0 ? void 0 : fe.isPreviewDeploy,
						release: (0, G.t)()
					};
					try {
						const be = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(De)
						});
						return {
							statusCode: be.status,
							headers: {
								"x-sentry-rate-limits": be.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": be.headers.get("Retry-After")
							}
						}
					} catch (be) {
						return console.log(be), (0, j.$2)(be)
					}
				};
				return z.q(N, $)
			};
			var ie = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				_e = n("../../../../node_modules/history/esm/history.js"),
				Te = (0, _e.lX)(),
				Pe = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				we = n("../react/utils/url.ts");
			const Ae = (0, Pe.Rf)();
			let Me;

			function ke(N) {
				return Se(N, "react-router-v5")
			}

			function Se(N, $) {
				return (q, re = !0, fe = !0) => {
					re && Ae && Ae.location && (Me = q({
						name: (0, we.Fl)(Ae.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": $
						}
					})), fe && N.listen && N.listen((De, be) => {
						if (be && (be === "PUSH" || be === "POP")) {
							Me && Me.finish();
							const Je = {
								"routing.instrumentation": $
							};
							Me = q({
								name: (0, we.Fl)(De.pathname),
								op: "navigation",
								tags: Je
							})
						}
					})
				}
			}
			var K = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				me = n.n(K),
				Le = n("../../../common/intl/intl-core/src/errors.ts"),
				qe = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				ot = n("../react/common/middleware/sparrow/errors.ts");

			function et(N, $, q) {
				return $ = st($), $ in N ? Object.defineProperty(N, $, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[$] = q, N
			}

			function st(N) {
				var $ = ze(N, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function ze(N, $) {
				if (typeof N != "object" || N === null) return N;
				var q = N[Symbol.toPrimitive];
				if (q !== void 0) {
					var re = q.call(N, $ || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(N)
			}
			class He {
				constructor() {
					et(this, "name", He.id)
				}
				setupOnce() {
					n.g.console && (0, qe.hl)(n.g.console, "error", $ => (...q) => {
						const re = q.find(fe => fe instanceof Error);
						if (ne && re) {
							let fe, De = !0;
							if (re instanceof ot.ez) {
								const be = re instanceof ot.oV ? re.invalidProperties : void 0;
								fe = {
									tags: {
										"sparrow.eventName": re.eventName
									},
									extra: {
										sparrow: {
											eventName: re.eventName,
											invalidProperties: be
										}
									},
									fingerprint: [re.name ? re.name : "SparrowValidationError"]
								}, De = !1
							} else if (re instanceof K.SparrowIdCookieError) fe = {
								extra: {
									sparrowIdCookie: re.cookie
								},
								fingerprint: [re.name ? re.name : "SparrowIdCookieError"]
							};
							else if (re.name === "ChunkLoadError") {
								fe = {
									fingerprint: [re.name]
								};
								try {
									fe.tags = {
										chunkId: re.message.split(" ")[2],
										chunkUrl: re.request
									}
								} catch {}
							} else re instanceof Le.YB && (fe = {
								fingerprint: ["TranslatorError", re.translationKey]
							});
							De && r.Tb(re, fe)
						}
						typeof $ == "function" && $.apply(n.g.console, q)
					})
				}
			}
			et(He, "id", "ConsoleErrorIntegration");
			var mt = null;
			const Z = () => {
					if (ne && ae) {
						var N, $, q, re, fe, De, be, Je, vt, Ve;
						let wt = "production";
						((N = window) === null || N === void 0 || ($ = N.build) === null || $ === void 0 ? void 0 : $.isPreviewDeploy) && (wt += "-preview"), J.S({
							dsn: ne,
							release: (0, G.t)(),
							environment: wt,
							ignoreErrors: F,
							allowUrls: M,
							autoSessionTracking: !1,
							integrations: yt => [...yt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new He, new ie.jK.BrowserTracing({
								routingInstrumentation: ke(Te)
							})],
							tracesSampleRate: 0,
							transport: ee,
							beforeSend: yt => (B.e.setEventId(yt.event_id), yt)
						});
						const bt = (0, u.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, I.Qw)(),
							USER_BETA_FLAGS: (0, I.ki)(),
							meta: {
								connection: {
									type: (q = window) === null || q === void 0 || (re = q.navigator) === null || re === void 0 || (fe = re.connection) === null || fe === void 0 ? void 0 : fe.effectiveType,
									bandwidth: (De = window) === null || De === void 0 || (be = De.navigator) === null || be === void 0 || (Je = be.connection) === null || Je === void 0 ? void 0 : Je.downlink
								},
								languagePreference: (0, Y.r)(bt),
								isPreviewDeploy: (vt = window) === null || vt === void 0 || (Ve = vt.build) === null || Ve === void 0 ? void 0 : Ve.isPreviewDeploy
							},
							utilGates: (0, H.T2)(bt)
						}), window.addEventListener("unhandledrejection", function(yt) {})
					}
				},
				le = N => {
					N ? r.av({
						id: N
					}) : r.av(null)
				};
			var Ce = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				We = () => {
					let N;
					try {
						N = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), N = window.location.search
					}
					if (!N.includes("remote[")) return;
					const $ = new URLSearchParams(N),
						q = {};
					for (let [re, fe] of $) re.includes("remote") && (q[re.replace(/remote\[|\]/g, "")] = fe);
					Ce.Z.set("mfe-remotes", JSON.stringify(q))
				},
				Be = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				Ze = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const tt = "ANON_USER_ID";

			function lt() {
				var N, $, q, re;
				let fe = (N = n.g) === null || N === void 0 || ($ = N.bootstrap) === null || $ === void 0 || (q = $.data) === null || q === void 0 || (re = q.user) === null || re === void 0 ? void 0 : re.id;
				if (!fe) {
					let De = Ce.Z.get(tt);
					if (!De) {
						let be = (0, Ze.Z)();
						Ce.Z.set(tt, be), De = be
					}
					return De
				}
				return fe
			}
			async function rt() {
				const N = (0, u.bh)();
				N.dispatch((0, Be.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await N.dispatch((0, H.UL)({
					userId: lt()
				}))
			}
			class gt extends Error {
				constructor($, q) {
					super(q);
					this.name = `${$} ${q}`
				}
			}
			const ft = () => {
					document.cookie.split(";").forEach($ => {
						const [q] = $.trim().split("=");
						document.cookie = `${q}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				ut = async () => {
					let N = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!N.ok) throw N.headers.get("content-type") === "text/html" && (await N.text()).toLowerCase().includes("cookie too large") && (r.$e(function(fe) {
						fe.setTag("init", "cookieTooLarge"), r.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), ft(), window.location.reload()), new gt("Bootstrap API Failure", N == null ? void 0 : N.status);
					return (await N.json()).result.data
				};
			var Ue = n("webpack/sharing/consume/default/react/react"),
				he = n.n(Ue),
				Ge = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				dt = n("webpack/sharing/consume/default/react-dom/react-dom"),
				it = n("webpack/sharing/consume/default/react-redux/react-redux"),
				_t = n("../../../../node_modules/swr/core/dist/index.mjs"),
				V = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				se = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Ee = n("../react/shims/focus-visible.js"),
				Oe = n("../react/app/components/DeepLink/index.ts"),
				Re = n("../../../../node_modules/prop-types/index.js"),
				je = n.n(Re),
				R = n("../react/utils/translator.tsx"),
				X = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				te = n("../../../dash/intl/intl-translations/src/index.ts"),
				ge = n("../../../../node_modules/query-string/query-string.js"),
				ve = n.n(ge),
				Ne = n("../react/common/actions/userActions.ts"),
				Ye = n("../react/common/selectors/userSelectors.ts"),
				Ke = n("../react/utils/i18n.ts"),
				Qe = n("../react/utils/bootstrap.ts");

			function nt(N) {
				for (var $ = 1; $ < arguments.length; $++) {
					var q = arguments[$] != null ? Object(arguments[$]) : {},
						re = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(q).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(q, fe).enumerable
					})), re.forEach(function(fe) {
						pt(N, fe, q[fe])
					})
				}
				return N
			}

			function pt(N, $, q) {
				return $ = Ct($), $ in N ? Object.defineProperty(N, $, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[$] = q, N
			}

			function Ct(N) {
				var $ = at(N, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function at(N, $) {
				if (typeof N != "object" || N === null) return N;
				var q = N[Symbol.toPrimitive];
				if (q !== void 0) {
					var re = q.call(N, $ || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(N)
			}
			let xe = ve().parse(location.search);
			const Rt = N => {
					const $ = (0, Qe.$8)() ? [(0, te.Fy)(te.if.changes), (0, te.Fy)(te.if.common), (0, te.Fy)(te.if.navigation), (0, te.Fy)(te.if.overview), (0, te.Fy)(te.if.onboarding), (0, te.Fy)(te.if.invite), (0, te.Fy)(te.if.login), (0, te.Fy)(te.if.dns), (0, te.Fy)(te.n4.ssl_tls), (0, te.Fy)(te.if.message_inbox), (0, te.Fy)(te.if.welcome)] : [(0, te.Fy)(te.if.common), (0, te.Fy)(te.if.invite), (0, te.Fy)(te.if.login), (0, te.Fy)(te.if.onboarding)];
					xe.lang ? $t(N) : Ce.Z.get(Ke.th) && Nt(N, (0, Ke.Kd)());
					const q = async re => (await Promise.all($.map(De => De(re)))).reduce((De, be) => nt({}, De, be), {});
					return he().createElement(X.LocaleContext.Provider, {
						value: N.languagePreference
					}, he().createElement(X.I18nProvider, {
						translator: R.Vb,
						locale: N.languagePreference
					}, he().createElement(X.I18nLoader, {
						loadPhrases: q
					}, N.children)))
				},
				$t = async N => {
					let $ = xe.lang.substring(0, xe.lang.length - 2) + xe.lang.substring(xe.lang.length - 2, xe.lang.length).toUpperCase();
					if (!(0, Y.v)($)) {
						console.warn(`${$} is not a supported locale.`), delete xe.lang, N.history.replace({
							search: ve().stringify(xe)
						});
						return
					}(0, Ke.i_)($), delete xe.lang, Nt(N, $), N.isAuthenticated || N.history.replace({
						search: ve().stringify(xe)
					})
				}, Nt = async (N, $) => {
					if (N.isAuthenticated) try {
						await N.setUserCommPreferences({
							"language-locale": $
						}, {
							hideErrorAlert: !0
						}), Ce.Z.remove(Ke.th), N.history.replace({
							search: ve().stringify(xe)
						})
					} catch (q) {
						Ce.Z.set(Ke.th, !0), console.error(q)
					} else Ce.Z.set(Ke.th, !0)
				}, kt = N => {
					const $ = (0, Ye.PR)(N);
					return {
						isAuthenticated: !!($ && $.id),
						languagePreference: (0, Ke.Kd)() || (0, Y.r)(N)
					}
				}, Wt = {
					setUserCommPreferences: Ne.V_
				};
			var zt = (0, Ge.withRouter)((0, it.connect)(kt, Wt)(Rt));
			Rt.propTypes = {
				history: je().object,
				languagePreference: je().string.isRequired,
				children: je().node.isRequired,
				isAuthenticated: je().bool,
				setUserCommPreferences: je().func.isRequired
			};
			var Gt = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Kt = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let y;
			const w = ({
				selectorPrefix: N = "c_"
			} = {}) => (y || (y = (0, Kt.Z)({
				dev: !1,
				selectorPrefix: N
			})), y);
			var de = n("../react/common/components/ModalManager.tsx"),
				Ie = n("../react/app/components/ErrorBoundary.tsx"),
				$e = n("../react/common/actions/notificationsActions.ts");
			const Tt = (n.g.bootstrap || {}).data || {};
			class At extends he().Component {
				componentDidMount() {
					Tt.messages && this.dispatchNotificationActions(Tt.messages)
				}
				dispatchNotificationActions($) {
					$.forEach(q => {
						const {
							type: re,
							message: fe,
							persist: De
						} = q;
						["success", "info", "warn", "error"].includes(re) && this.props.notifyAdd(re, (0, R.ZP)(fe), {
							persist: !!De
						})
					})
				}
				render() {
					return null
				}
			}
			var Pt = (0, Ge.withRouter)((0, it.connect)(null, {
				notifyAdd: $e.add
			})(At));
			At.propTypes = {
				notifyAdd: je().func.isRequired
			};
			var ct = n("../react/app/redux/index.ts");

			function Lt() {
				var N;
				const $ = (0, ct.p4)(Ye.PR),
					q = ($ == null || (N = $.email) === null || N === void 0 ? void 0 : N.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					re = (0, Be.Yc)();
				(0, Ue.useEffect)(() => {
					re({
						userType: q
					})
				}, [q, re])
			}
			var Ot = n("../react/common/selectors/entitlementsSelectors.ts"),
				It = n("../react/common/selectors/accountSelectors.ts");
			const St = ["accountId", "is_ent"];

			function Dt() {
				const N = (0, Be.f7)(),
					$ = (0, Ge.useHistory)(),
					q = (0, we.uW)($.location.pathname),
					re = (0, Be.Yc)(),
					fe = (0, Be.O$)(),
					De = (0, ct.p4)(Ot.u1),
					be = !De.isRequesting && !!De.data,
					Je = (0, ct.p4)(Ot.p1),
					vt = (0, ct.p4)(It.Xu),
					Ve = (0, ct.p4)(It.uF),
					wt = !vt.isRequesting && !!vt.data;
				(0, Ue.useEffect)(() => {
					if (q && wt && Ve && be && q === Ve.account.id) {
						var bt, yt, Ft;
						re({
							accountId: Ve.account.id,
							is_ent: Je,
							is_free_account: !Je && !(Ve == null || (bt = Ve.account.meta) === null || bt === void 0 ? void 0 : bt.has_business_zones) && !(Ve == null || (yt = Ve.account.meta) === null || yt === void 0 ? void 0 : yt.has_pro_zones) && !(Ve == null || (Ft = Ve.account.meta) === null || Ft === void 0 ? void 0 : Ft.has_enterprise_zones)
						})
					} else(!q || q in N && N.accountId !== q) && fe(St)
				}, [wt, Ve, re, fe, be, Je, q, N])
			}
			var Xe = n("../react/common/selectors/zoneSelectors.ts");

			function Vt() {
				const N = (0, ct.p4)(Xe.nA),
					$ = (0, Be.Yc)();
				(0, Ue.useEffect)(() => {
					var q;
					$({
						zone_id: N == null ? void 0 : N.id,
						zone_plan: N == null || (q = N.plan) === null || q === void 0 ? void 0 : q.legacy_id
					})
				}, [N, $])
			}
			const Ut = () => (Lt(), Dt(), Vt(), null);
			var en = n("../react/app/components/Persistence/index.tsx"),
				tn = n("../node_modules/@cloudflare/elements/es/index.js"),
				nn = n("../react/app/components/LoadingSuspense.tsx");
			const on = he().lazy(() => Promise.all([n.e(39074), n.e(16691), n.e(19341), n.e(12174), n.e(57062), n.e(22952), n.e(5668), n.e(8924), n.e(77216), n.e(40517), n.e(39760), n.e(60734), n.e(25390), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var rn = () => he().createElement(nn.Z, null, he().createElement(on, null));
			const an = () => (Ue.useEffect(() => pe, []), null);
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
					const N = (0, ct.p4)(Y.r);
					(0, Ue.useEffect)(() => {
						const $ = cn(N);
						$ !== Ht().locale() && Ht().locale($), document.documentElement.lang = N
					}, [N])
				},
				un = () => {
					(0, Ue.useEffect)(() => {
						async function N() {
							var $, q;
							let re;
							if ((($ = window) === null || $ === void 0 || (q = $.build) === null || q === void 0 ? void 0 : q.isPreviewDeploy) && (re = "cookie"), !!re) try {
								const fe = document.head.querySelector("link[rel=icon]");
								fe && (fe.href = (await n("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${re}.ico`)).default)
							} catch {}
						}
						N()
					}, [])
				};
			var dn = n("../react/common/constants/constants.ts");
			const pn = () => {
					var N;
					const $ = (0, Ge.useLocation)(),
						[q, re] = (0, Ue.useState)(((N = window) === null || N === void 0 ? void 0 : N.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Ue.useEffect)(() => {
						const fe = ve().parse($.search);
						if (fe.pt && Ce.Z.set(dn.sJ, fe.pt), fe == null ? void 0 : fe.devPanel) {
							var De, be;
							(De = window) === null || De === void 0 || (be = De.localStorage) === null || be === void 0 || be.setItem("gates_devtools_ui_gates_controller_enabled", "true"), re(!0)
						}
					}, [$.search]), {
						devPanelEnabled: q
					}
				},
				mn = ({
					id: N,
					customDataLayer: $ = [],
					dataLayerName: q = "dataLayer"
				}) => {
					const re = `<iframe src="https://www.googletagmanager.com/ns.html?id=${N}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						fe = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${q}', '${N}')`,
						De = `
    window.${q} = window.${q} || [];
    window.${q}.push(${JSON.stringify($)})
  `;
					return {
						iframe: re,
						script: fe,
						dataLayerHTML: De
					}
				},
				gn = N => {
					const $ = document.createElement("script");
					return $.innerHTML = N, $.async = !0, $
				},
				fn = N => {
					const $ = document.createElement("noscript");
					return $.innerHTML = N, $
				},
				Zt = N => {
					const $ = document.createElement("script");
					return $.innerHTML = N, $
				},
				Nn = ({
					dataLayer: N,
					dataLayerName: $
				}) => {
					if (window[$]) return window[$].push(N);
					const q = `
      window.${$} = window.${$} || [];
      window.${$}.push(${JSON.stringify(N)})`,
						re = Zt(q);
					document.head.insertBefore(re, document.head.childNodes[0])
				},
				_n = ({
					containerId: N,
					customDataLayer: $,
					gtmFeatureFlag: q = !0
				}) => {
					(0, Ue.useEffect)(() => {
						(() => {
							if (!q) return null;
							const {
								iframe: fe,
								script: De,
								dataLayerHTML: be
							} = mn({
								id: N,
								customDataLayer: $
							});
							document.head.insertBefore(Zt(be), document.head.childNodes[0]), document.head.insertBefore(gn(De), document.head.childNodes[0]), document.body.insertBefore(fn(fe), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = n("../react/common/hooks/useGate.ts");
			const En = ({
				isDev: N,
				gtmFeatureFlag: $
			}) => {
				(0, Ue.useEffect)(() => {
					(() => {
						if (!$) return null;
						let re;
						N ? re = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : re = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const fe = document.createElement("script");
						fe.async = !0, fe.src = re, document.head.insertBefore(fe, document.head.childNodes[0])
					})()
				}, [])
			};
			var vn = n("../react/utils/useDomainConnectRedirect.ts");
			const yn = "GTM-NDGPDFZ",
				Cn = he().lazy(() => Promise.all([n.e(39074), n.e(16691), n.e(19341), n.e(12174), n.e(57062), n.e(22952), n.e(51436), n.e(3292), n.e(47386), n.e(70618), n.e(28354), n.e(8924), n.e(77216), n.e(40517), n.e(39760), n.e(60734), n.e(25390), n.e(7050), n.e(87940), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				hn = he().lazy(() => Promise.all([n.e(83741), n.e(65447), n.e(39074), n.e(57062), n.e(3292), n.e(60734), n.e(69088), n.e(7050), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var Tn = ({
					userIsAuthed: N
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
					}), he().createElement(Ue.Suspense, {
						fallback: he().createElement(an, null)
					}, he().createElement(Ge.Switch, null, !N && !0 && he().createElement(Ge.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, he().createElement(hn, null)), he().createElement(Ge.Route, {
						render: () => he().createElement(tn.ZC, {
							minHeight: "100vh"
						}, he().createElement(Cn, null))
					})), $ && he().createElement(rn, null))
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
			const Xt = he().lazy(() => Promise.all([n.e(16691), n.e(12174), n.e(6368), n.e(51436), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				On = () => {
					const N = (0, Qe.$8)(),
						[$, q] = (0, Ue.useState)(N ? Xt : he().Fragment),
						[re, fe] = (0, Ue.useState)((0, h.Yc)());
					(0, Ue.useEffect)(() => {
						(0, h.fF)(() => fe((0, h.Yc)()))
					}, []);
					const De = be => {
						fe(be), (0, h.C8)(be), document.cookie = `dark-mode=${be};Path=/;Max-Age=31536000`
					};
					return (0, Ue.useEffect)(() => {
						q(N ? Xt : he().Fragment)
					}, [N]), (0, Ue.useEffect)(() => {
						const be = () => De(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", be), () => {
							window.removeEventListener("storage", be)
						}
					}, []), he().createElement(Ue.Suspense, {
						fallback: null
					}, he().createElement(it.Provider, {
						store: (0, u.bh)()
					}, he().createElement(Ge.Router, {
						history: Te
					}, he().createElement($, null, he().createElement(Gt.Z, {
						renderer: w()
					}, he().createElement(zt, null, he().createElement(Ie.S, {
						sentryTag: "Root"
					}, he().createElement(_t.J$, {
						value: {
							fetcher: be => fetch(be).then(Je => Je.json())
						}
					}, he().createElement(Ut, null), he().createElement(Pt, null), he().createElement(en.Z_, {
						onDarkModeChangeCb: De
					}, he().createElement(Oe.ZP, null, he().createElement(Tn, {
						userIsAuthed: N
					}))), he().createElement(de.ZP, null), he().createElement(V.F0, null)))))))))
				},
				In = () => {
					(0, dt.render)(he().createElement(On, null), document.getElementById("react-app"))
				};
			var ht = n("../utils/initSparrow.ts"),
				Mt = n("../utils/zaraz.ts");
			const bn = () => {
					const N = (0, Ye.PR)((0, u.bh)().getState());
					Pn(), (0, ht.Ug)(), (0, Mt.bM)(), (N == null ? void 0 : N.id) && me().setUserId(N == null ? void 0 : N.id), (0, ht.yV)(), !(0, ht.Wi)() && (0, ht.IM)(), N ? (0, Mt.yn)(N) : (0, Mt.Ro)()
				},
				Pn = () => {
					var N, $;
					(N = window) === null || N === void 0 || ($ = N.OneTrust) === null || $ === void 0 || $.OnConsentChanged(() => {
						const q = (0, Ye.PR)((0, u.bh)().getState());
						(0, ht.Wi)() ? (me().setEnabled(!0), (q == null ? void 0 : q.id) ? (me().setUserId(q.id), (0, Mt.yn)(q)) : (0, Mt.Ro)(), (0, ht.yV)()) : (me().setEnabled(!1), (0, ht.IM)())
					})
				};

			function Ln(N) {
				for (var $ = 1; $ < arguments.length; $++) {
					var q = arguments[$] != null ? Object(arguments[$]) : {},
						re = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(q).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(q, fe).enumerable
					})), re.forEach(function(fe) {
						Sn(N, fe, q[fe])
					})
				}
				return N
			}

			function Sn(N, $, q) {
				return $ = Dn($), $ in N ? Object.defineProperty(N, $, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[$] = q, N
			}

			function Dn(N) {
				var $ = Mn(N, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function Mn(N, $) {
				if (typeof N != "object" || N === null) return N;
				var q = N[Symbol.toPrimitive];
				if (q !== void 0) {
					var re = q.call(N, $ || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(N)
			}
			const wn = "init",
				Jt = (N, $) => {
					r.$e(function(q) {
						q.setTag(wn, $), r.Tb(N)
					}), ue(N)
				},
				xt = async (N, $) => {
					try {
						return await N(), !0
					} catch (q) {
						return Jt(q, $), !1
					}
				};
			(async () => {
				try {
					var N, $, q;
					n.g.build = Ln({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "d2a3eac044ab366abf8eed92a1652b5069c68ebd",
						dashVersion: "31637728",
						env: "production",
						builtAt: 1741637400386,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, G.p)()
					}), Z();
					const re = [{
						fn: () => n.e(4374).then(n.bind(n, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => C(Te),
						tag: "hashScroll"
					}, {
						fn: ce.Z,
						tag: "styles"
					}, {
						fn: We,
						tag: "mfePreviewData"
					}];
					for (const vt of re)
						if (!await xt(vt.fn, vt.tag)) return;
					let fe;
					if (!await xt(async () => {
							fe = await ut()
						}, "bootstrap")) return;
					const De = (0, u.bh)(),
						be = ((N = fe) === null || N === void 0 ? void 0 : N.data) || {};
					De.dispatch((0, s.mW)("user", be == null ? void 0 : be.user));
					const Je = ($ = fe) === null || $ === void 0 || (q = $.data) === null || q === void 0 ? void 0 : q.user;
					return n.g.bootstrap = fe, Je && Je.id && le(Je.id), !await xt(rt, "gates") || !await xt(bn, "tracking") ? void 0 : In()
				} catch (re) {
					Jt(re, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../react/app/redux/index.ts"),
				p = n("../react/common/selectors/userSelectors.ts"),
				l = n("../react/common/selectors/zoneSelectors.ts"),
				m = n("../react/common/selectors/accountSelectors.ts"),
				i = n("../react/common/utils/isGuards.ts"),
				d = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = n.n(d);

			function t() {
				return t = Object.assign ? Object.assign.bind() : function(u) {
					for (var c = 1; c < arguments.length; c++) {
						var f = arguments[c];
						for (var _ in f) Object.prototype.hasOwnProperty.call(f, _) && (u[_] = f[_])
					}
					return u
				}, t.apply(this, arguments)
			}
			const r = u => {
				function c(f) {
					const _ = (0, a.UM)(),
						C = (0, d.useHistory)(),
						A = (0, d.useLocation)(),
						h = (0, d.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						D = (0, a.p4)(p.PR) || null,
						T = (0, a.p4)(l.nA) || null,
						v = (0, a.p4)(m.uF),
						k = v ? v.account : null;
					if (!h) return null;
					const {
						accountId: P,
						app: b,
						tab: L
					} = h.params, O = h.params.zoneName && ((0, i.v5)(h.params.zoneName) || h.params.zoneName.indexOf(".") > 0) ? h.params.zoneName : void 0;
					return o().createElement(u, t({
						dispatch: _,
						history: C,
						location: A,
						match: h,
						user: D,
						membership: P ? v : null,
						account: P ? k : null,
						accountId: P || null,
						zone: O ? T : null,
						zoneName: O || null,
						app: O ? b : null,
						tab: O ? L : null
					}, f))
				}
				return c.displayName = `withEntities(${s(u)})`, c
			};

			function s(u) {
				return u.displayName || u.name || "Component"
			}
			E.Z = r
		},
		"../react/app/components/AccountHome/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$$: function() {
					return h
				},
				CK: function() {
					return k
				},
				KV: function() {
					return T
				},
				OX: function() {
					return v
				},
				QV: function() {
					return A
				},
				Yt: function() {
					return _
				},
				bA: function() {
					return C
				},
				gX: function() {
					return u
				},
				o1: function() {
					return D
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
			const a = "projects table click",
				p = "click create application",
				l = "account home dev plat - product card click",
				m = "account home dev plat - empty state CTA click",
				i = "account home dev plat - view all projects click",
				d = "select task",
				g = "account home zero trust - link card click",
				t = "account home zero trust - onboarding card click",
				r = "account home zero trust - analytics link click",
				s = "account home zero trust - product card click",
				u = {
					SPARROW_PROJECTS_TABLE_CLICK: a,
					SPARROW_CREATE_PROJECT_CLICK: p,
					SPARROW_PRODUCT_CARD_CLICK: l,
					SPARROW_EMPTY_STATE_CTA_CLICK: m,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: i,
					SPARROW_SELECT_ZERO_TRUST_TASK: d,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: g,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: t,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: r,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: s
				},
				c = P => {
					o().sendEvent(a, {
						component: P
					})
				},
				f = P => {
					o().sendEvent(a, {
						component: "menu",
						subcomponent: P
					})
				},
				_ = () => {
					o().sendEvent(p, {
						category: "Projects Table"
					})
				},
				C = ({
					category: P,
					product: b
				}) => {
					o().sendEvent(l, {
						category: P,
						product: b
					})
				},
				A = () => {
					o().sendEvent(m)
				},
				h = () => {
					o().sendEvent(i)
				},
				D = P => {
					o().sendEvent(d, {
						product: `zero-trust - ${P}`,
						category: "onboarding"
					})
				},
				T = ({
					category: P,
					href: b
				}) => {
					o().sendEvent(g, {
						category: P,
						href: b
					})
				},
				v = ({
					category: P,
					href: b
				}) => {
					o().sendEvent(r, {
						category: P,
						href: b
					})
				},
				k = ({
					category: P,
					product: b,
					href: L
				}) => {
					o().sendEvent(s, {
						category: P,
						product: b,
						href: L
					})
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(W, E, n) {
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
					return s
				},
				WF: function() {
					return l
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
					return a
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
				a = (0, e.R)(o.ADD_SITE, u => ({
					payload: u
				})),
				p = (0, e.R)(o.RESOLVING_START),
				l = (0, e.R)(o.RESOLVING_COMPLETE),
				m = (0, e.R)(o.SELECT_ZONE, u => ({
					payload: u
				})),
				i = (0, e.R)(o.SELECT_ACCOUNT, u => ({
					payload: u
				})),
				d = (0, e.R)(o.SELECT_PAGES_PROJECT, u => ({
					payload: u
				})),
				g = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, u => ({
					payload: u
				})),
				t = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, u => ({
					accountIds: u
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				s = (0, e.R)(o.SELECT_WORKER, u => ({
					payload: u
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(W, E, n) {
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
					return l
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return t
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
				l = "resolvedDeepLinkQueryParams",
				m = "add",
				i = "multiSkuProducts",
				d = "/:account/billing/checkout",
				g = "/:account/:zone/billing/checkout",
				t = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				ZP: function() {
					return L
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
				a = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = n("../react/app/components/DeepLink/utils.ts"),
				l = n("../react/utils/bootstrap.ts"),
				m = n("../react/app/components/DeepLink/actions.ts"),
				i = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = n.n(i);

			function g(O) {
				for (var S = 1; S < arguments.length; S++) {
					var U = arguments[S] != null ? Object(arguments[S]) : {},
						x = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(U).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(U, Q).enumerable
					})), x.forEach(function(Q) {
						t(O, Q, U[Q])
					})
				}
				return O
			}

			function t(O, S, U) {
				return S = r(S), S in O ? Object.defineProperty(O, S, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[S] = U, O
			}

			function r(O) {
				var S = s(O, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function s(O, S) {
				if (typeof O != "object" || O === null) return O;
				var U = O[Symbol.toPrimitive];
				if (U !== void 0) {
					var x = U.call(O, S || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(O)
			}
			class u {
				constructor(S, U) {
					t(this, "deepLink", void 0), t(this, "legacyDeepLink", void 0), t(this, "resolvers", void 0), t(this, "startTime", Date.now()), t(this, "endTime", Date.now()), t(this, "_done", !1), t(this, "resolverStart", x => {
						this.resolvers.set(x, {
							name: x,
							startTime: Date.now(),
							userActions: []
						})
					}), t(this, "resolverDone", x => {
						const Q = this.resolvers.get(x);
						Q && (Q.endTime = Date.now(), this.resolvers.set(x, Q))
					}), t(this, "resolverCancel", x => {
						this.resolverDone(x), this.cancel()
					}), t(this, "start", () => {
						this.startTime = Date.now()
					}), t(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), t(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), t(this, "createUserActionTracker", x => {
						const Q = "NO_ACTION",
							oe = {
								actionType: Q,
								startTime: 0
							};
						return {
							start: (pe = Q) => {
								const ue = this.resolvers.get(x);
								oe.actionType = pe, oe.startTime = Date.now(), ue && ue.userActions.push(oe)
							},
							finish: (pe = Q) => {
								oe.actionType = pe, oe.endTime = Date.now()
							},
							cancel: (pe = Q) => {
								oe.actionType = pe, oe.endTime = Date.now(), this.resolverCancel(x)
							}
						}
					}), this.deepLink = S, this.legacyDeepLink = U, this.resolvers = new Map
				}
				track(S) {
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
							x = this.resolvers.size === 0 ? U : Array.from(this.resolvers.values()).reduce((Q, oe) => {
								const pe = c(oe.startTime, oe.endTime),
									ue = oe.userActions.reduce((H, J) => {
										const Y = c(J.startTime, J.endTime);
										return {
											totalTime: H.totalTime + Y,
											actions: H.actions.set(J.actionType, Y)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									ce = pe - ue.totalTime;
								return g({}, Q, {
									totalTime: Q.totalTime + pe,
									totalUserActionsTime: Q.totalUserActionsTime + ue.totalTime,
									totalCpuTime: Q.totalCpuTime + ce,
									[`${oe.name}ResolverTotalTime`]: pe,
									[`${oe.name}ResolverTotalCpuTime`]: ce,
									[`${oe.name}ResolverTotalUserActionsTime`]: ue.totalTime
								}, Array.from(ue.actions.keys()).reduce((H, J) => g({}, H, {
									[`${oe.name}Resolver/${J}`]: ue.actions.get(J)
								}), {}))
							}, g({}, U, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						d().sendEvent(S, x)
					} catch (U) {
						console.error(U)
					}
				}
			}

			function c(O = Date.now(), S = Date.now()) {
				return (S - O) / 1e3
			}
			var f = n("../react/app/components/DeepLink/constants.ts"),
				_ = n("../react/common/hooks/useCachedState.ts"),
				C = n("../react/common/hooks/usePrevious.ts");

			function A(O) {
				for (var S = 1; S < arguments.length; S++) {
					var U = arguments[S] != null ? Object(arguments[S]) : {},
						x = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(U).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(U, Q).enumerable
					})), x.forEach(function(Q) {
						h(O, Q, U[Q])
					})
				}
				return O
			}

			function h(O, S, U) {
				return S = D(S), S in O ? Object.defineProperty(O, S, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[S] = U, O
			}

			function D(O) {
				var S = T(O, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function T(O, S) {
				if (typeof O != "object" || O === null) return O;
				var U = O[Symbol.toPrimitive];
				if (U !== void 0) {
					var x = U.call(O, S || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(O)
			}
			var k = ({
					children: O
				}) => {
					const S = (0, o.TZ)(),
						U = (0, a.useHistory)(),
						x = (0, C.Z)(U.location.pathname),
						[Q, oe] = (0, e.useState)(!0),
						[pe, ue] = (0, _.j)(void 0, {
							key: f.Fj
						}),
						[ce, H] = (0, _.j)(void 0, {
							key: f.O5
						}),
						[J, Y] = (0, _.j)(void 0, {
							key: f.s$
						}),
						I = (0, l.$8)();
					let G = new URLSearchParams(U.location.search);
					const ne = (0, p.mL)(U.location.pathname, G);
					let ae = null,
						M = null;
					if (G.has(f.Tc) && G.delete(f.Tc), G.get(f.BV)) ae = G.get(f.BV), U.location.hash && (M = U.location.hash);
					else if (pe) {
						const B = new URLSearchParams(pe);
						B.get(f.BV) && (ae = B.get(f.BV), G = B)
					} else ne && (G.set(f.BV, ne), ae = ne);
					if (ae && f._h.test(ae)) {
						const B = G.getAll(f.Kt),
							z = JSON.stringify(B);
						B.length && z !== J && Y(z), G.has(f.Tc) && G.delete(f.Tc), G.delete(f.Kt)
					}!I && pe === void 0 && ae && ue(G.toString());
					const F = async () => {
						try {
							if ((0, p.I3)(ae) && I) {
								pe && ue(void 0), S.dispatch((0, m.r4)()), oe(!0), ae && ae !== ce && H(ae);
								const B = await (0, p.py)(ae, oe, S, U, x, new u(ae, ne ? `${U.location.pathname}${U.location.search}` : void 0));
								G.delete(f.BV);
								const z = G.toString();
								U.replace(A({}, U.location, {
									pathname: B,
									search: z
								}, M ? {
									hash: M
								} : {})), S.dispatch((0, m.WF)())
							}
						} catch (B) {
							S.dispatch((0, m.WF)()), console.error(B)
						} finally {
							oe(!1)
						}
					};
					return (0, e.useEffect)(() => {
						F()
					}, [U.location.pathname, U.location.search]), (Q || (0, p.I3)(ae)) && I ? null : O
				},
				P = n("../react/app/components/DeepLink/reducer.ts"),
				b = n("../react/app/components/DeepLink/selectors.ts"),
				L = k
		},
		"../react/app/components/DeepLink/reducer.ts": function(W, E, n) {
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
				a = n("../react/app/components/DeepLink/actions.ts");
			const p = null,
				l = o().from({
					lastAction: p,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function m(i = l, d) {
				if (d.type === a.MF.RESOLVING_COMPLETE) return l;
				if (d.type === a.MF.RESOLVING_START) return i.set("isResolving", !0);
				if (i.isResolving) {
					if (d.type === a.MF.RESOLVING_COMPLETE) return i.set("isResolving", !1);
					if (d.type === a.MF.SET_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", d.accountIds);
					if (d.type === a.MF.DELETE_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", void 0);
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
		"../react/app/components/DeepLink/selectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
		"../react/app/components/DeepLink/utils.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				I3: function() {
					return u
				},
				X1: function() {
					return r
				},
				mL: function() {
					return A
				},
				py: function() {
					return C
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/components/DeepLink/reducer.ts"),
				a = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const p = h => h.replace(a.default.endsWithSlash, ""),
				l = h => {
					const D = p(h).split("/").slice(3);
					return D.length ? "/" + D.join("/") : ""
				},
				m = h => {
					const D = p(h).split("/").slice(2);
					return D.length ? `apps/${D.join("/")}` : "apps"
				};
			var i = n("../react/app/components/DeepLink/selectors.ts"),
				d = n("../react/app/components/DeepLink/constants.ts"),
				g = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = h => (0, g.Lb)(h) && (h.split(".").length > 1 || (0, t.v5)(h)),
				s = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				u = h => typeof h == "string" && h.startsWith("/"),
				c = (h, D) => T => new Promise((v, k) => {
					D.start();
					const P = h.subscribe(() => {
						const b = (0, i.yI)(h.getState());
						b === o.E ? (D.cancel(), P(), k("DeepLink: waitForAction out of context.")) : T(b) && (D.finish(b.type), P(), v(b))
					})
				}),
				f = (h, D, T) => (v, k) => new Promise((P, b) => {
					T.start();
					const L = D.location.pathname;
					v = new URL(v, window.location.href).pathname, L !== v && (T.cancel(), b(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${v}", but on "${L}". You need to redirect to "${v}", and unblockRouter in your Resolver, before you use this function.`));
					const O = h.subscribe(() => {
						const S = (0, i.yI)(h.getState()),
							U = D.location.pathname,
							Q = new URLSearchParams(D.location.search).get(d.BV);
						(U !== v || !!Q) && (T.cancel(), O(), b(`DeepLink: waitForPageAction user navigated away from "${v}" to "${U}${Q?D.location.search:""}"`)), S === o.E ? (T.cancel(), O(), b("DeepLink: waitForPageAction out of context.")) : k(S) && (T.finish(S.type), O(), P(S))
					})
				});

			function _(h) {
				const D = [],
					T = h.split("?")[0].split("/");
				for (let v of T) v.length !== 0 && (v.startsWith(":") ? D.push({
					value: v.substring(1),
					type: "dynamic"
				}) : D.push({
					value: v,
					type: "static"
				}));
				return D
			}
			async function C(h, D, T, v, k, P) {
				P.start();
				const b = _(h),
					O = await (await Promise.all([n.e(32375), n.e(78839), n.e(40517), n.e(8756)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					S = {};
				let U = "";
				for (const [x, Q] of b.entries())
					if (Q.type === "static") U = [U, Q.value].join("/");
					else if (Q.type === "dynamic" && s.is(Q.value) && Q.value in O) {
					P.resolverStart(Q.value);
					const oe = await O[Q.value]({
						deepLink: h,
						blockRouter: () => D(!0),
						unblockRouter: () => D(!1),
						routerHistory: v,
						resolvedValues: S,
						store: T,
						referringRoute: k,
						uri: {
							currentPartIdx: x,
							parts: b
						},
						waitForAction: c(T, P.createUserActionTracker(Q.value)),
						waitForPageAction: f(T, v, P.createUserActionTracker(Q.value))
					});
					P.resolverDone(Q.value), U = [U, oe].join("/"), S[Q.value] = oe
				} else throw P.cancel(), new Error(`DeepLink: Resolver with name '${Q.value}' is not supported.`);
				return P.done(), U
			}

			function A(h, D) {
				const T = ":account",
					v = ":zone",
					k = D.get("zone");
				if (k) return D.delete("zone"), `/${T}/${v}/${k}`;
				const P = D.get("account");
				if (P) return D.delete("account"), `/${T}/${P}`;
				if (h === "/overview") return `/${T}/${v}`;
				if (h === "/apps") return `/${T}/${v}/${m(h)}`;
				const b = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const L of b) {
					const O = L.length;
					if (h.startsWith(L) && (h.length === O || h[O] === "/")) return `/${T}/${v}${h}`
				}
				switch (h) {
					case "/account/billing":
						return `/${T}/billing`;
					case "/account/subscriptions":
						return `/${T}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${T}/dns-firewall`;
					case "/account/audit-log":
						return `/${T}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				S: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				p = n("../react/app/components/SomethingWrong.jsx"),
				l = n("../utils/sentry/lastSentEventId.ts"),
				m = n("../react/utils/zaraz.ts"),
				i = n("../react/utils/url.ts"),
				d = n("../node_modules/@cloudflare/elements/es/index.js"),
				g = n("../node_modules/@cloudflare/component-button/es/index.js"),
				t = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				r = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = n.n(r),
				u = n("../react/common/components/Page.tsx"),
				c = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function f() {
				return (0, e.useEffect)(() => {
					s().sendEvent("new page available refresh cta")
				}, []), o().createElement(u.Z, {
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
				sentryTag: C,
				children: A
			}) => o().createElement(a.SV, {
				beforeCapture: h => {
					m.tg === null || m.tg === void 0 || m.tg.track("page-error", {
						page: (0, i.Fl)(window.location.pathname)
					})
				},
				onError: h => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && n.g.logAppError(h)
				},
				fallback: ({
					error: h,
					eventId: D
				}) => {
					var T;
					const v = l.e.getEventId() || D;
					return (h == null || (T = h.message) === null || T === void 0 ? void 0 : T.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), o().createElement(f, null)) : o().createElement(p.Z, {
						type: "page",
						error: h,
						eventId: v,
						sentryTag: C
					})
				}
			}, A)
		},
		"../react/app/components/Footer.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				Z: function() {
					return Y
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = n("../node_modules/@cloudflare/elements/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = n.n(i),
				g = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				t = n("../react/common/components/Apple/utils.tsx"),
				r = n("../react/utils/translator.tsx"),
				s = n("../../../../node_modules/moment/moment.js"),
				u = n.n(s);
			const c = () => {
					const I = u()().format("YYYY"),
						G = ne => {
							d().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: ne
							})
						};
					return o().createElement(f, {
						marginTop: "auto"
					}, o().createElement(_, null, o().createElement(C, null, o().createElement(A, null, "\xA9 ", I, " Cloudflare, Inc."), o().createElement(A, null, o().createElement(h, null, o().createElement(D, {
						showOnDeskTop: !1
					}, o().createElement(T, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => G("Support")
					}, o().createElement(r.cC, {
						id: "common.support"
					}))), o().createElement(D, null, o().createElement(T, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => G("Privacy Policy")
					}, o().createElement(r.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(D, null, o().createElement(T, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => G("Terms of Use")
					}, o().createElement(r.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(D, null, o().createElement(T, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => G("Cookie Preferences")
					}, o().createElement(r.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(D, null, o().createElement(T, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => G("Trademark")
					}, o().createElement(r.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(h, null, o().createElement(D, null, o().createElement(T, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => G("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(r.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				f = (0, l.createComponent)(({
					theme: I,
					marginTop: G
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: G
				})),
				_ = (0, l.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				C = (0, l.createComponent)(({
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
				h = (0, l.createComponent)(({
					theme: I
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: I.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				D = (0, l.createComponent)(({
					showOnDeskTop: I = !0,
					theme: G
				}) => ({
					color: G.colors.white,
					fontSize: G.fontSizes[1],
					height: "20px",
					display: I ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: G.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: G.space[3],
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
				T = (0, l.createStyledComponent)(({
					theme: I
				}) => ({
					textDecoration: "none",
					color: I.colors.white,
					"&:hover": {
						color: I.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var v = c,
				k = n("../react/pages/welcome/routes.ts"),
				P = n("../react/utils/cookiePreferences.ts"),
				b = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				O = () => {
					const [I, G] = (0, e.useState)(!1), ne = (0, P.wV)(), ae = () => {
						G(!0)
					}, M = () => {
						G(!1)
					}, F = ne && ne === "US" ? (0, r.ZP)("footer.cpra_cta.privacy_choices") : (0, r.ZP)("footer.cpra_cta.cookie_preferences"), B = {
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
						style: B,
						onMouseEnter: ae,
						onMouseLeave: M
					}, o().createElement(p.Ei, {
						height: 15,
						src: b,
						mr: 2,
						alt: F
					}), F)
				};

			function S() {
				return S = Object.assign ? Object.assign.bind() : function(I) {
					for (var G = 1; G < arguments.length; G++) {
						var ne = arguments[G];
						for (var ae in ne) Object.prototype.hasOwnProperty.call(ne, ae) && (I[ae] = ne[ae])
					}
					return I
				}, S.apply(this, arguments)
			}

			function U(I, G) {
				if (I == null) return {};
				var ne = x(I, G),
					ae, M;
				if (Object.getOwnPropertySymbols) {
					var F = Object.getOwnPropertySymbols(I);
					for (M = 0; M < F.length; M++) ae = F[M], !(G.indexOf(ae) >= 0) && (!Object.prototype.propertyIsEnumerable.call(I, ae) || (ne[ae] = I[ae]))
				}
				return ne
			}

			function x(I, G) {
				if (I == null) return {};
				var ne = {},
					ae = Object.keys(I),
					M, F;
				for (F = 0; F < ae.length; F++) M = ae[F], !(G.indexOf(M) >= 0) && (ne[M] = I[M]);
				return ne
			}
			const Q = (0, l.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,m.Yc)()?m.rS.colors.orange[6]:m.rS.colors.blue[4]}`
					}
				}), p.A),
				oe = (0, l.createStyledComponent)(({
					theme: I
				}) => ({
					color: I.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, g.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: I.colors.gray[4]
					}
				}), p.A),
				pe = I => {
					let {
						onClick: G
					} = I, ne = U(I, ["onClick"]);
					return React.createElement(Q, S({
						onClick: ae => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: ne.href
							}), G && G(ae)
						}
					}, ne))
				},
				ue = I => {
					let {
						children: G,
						target: ne,
						rel: ae
					} = I, M = U(I, ["children", "target", "rel"]);
					return o().createElement(oe, S({
						target: ne || "_blank",
						rel: ae || "noopener noreferrer"
					}, M), G)
				},
				ce = (0, l.createStyledComponent)(({
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
				H = (0, l.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, g.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), p.ZC);
			var Y = () => {
				const I = [k.d.root.pattern].some(ne => (0, a.matchPath)(location.pathname, {
					path: ne
				}));
				if ((0, t.PP)()) return o().createElement(v, null);
				if (I) return null;
				const G = new Date().getFullYear();
				return o().createElement(p.$_, {
					height: (0, g.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto"
				}, o().createElement(H, null, o().createElement(ce, null, o().createElement(p.Li, null, o().createElement(ue, {
					href: "https://support.cloudflare.com"
				}, (0, r.ZP)("common.support"))), o().createElement(p.Li, null, o().createElement(ue, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(p.Dr, {
					textTransform: "capitalize"
				}, (0, r.ZP)("footer.system_status")))), o().createElement(p.Li, null, o().createElement(ue, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, r.ZP)("footer.careers"))), o().createElement(p.Li, null, o().createElement(ue, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, r.ZP)("footer.tos_reduced"))), o().createElement(p.Li, null, o().createElement(ue, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, r.ZP)("footer.security_issues"))), o().createElement(p.Li, null, o().createElement(ue, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, r.ZP)("footer.privacy_policy"))), o().createElement(p.Li, null, o().createElement(O, null)), o().createElement(p.Li, null, o().createElement(p.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", G, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../react/app/components/ErrorStatus.tsx"),
				p = n("../react/utils/translator.tsx");
			const l = m => o().createElement(a.Z, m, (0, p.ZP)("error.forbidden"));
			E.Z = l
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				S: function() {
					return _
				},
				Z: function() {
					return F
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				p = n("../node_modules/@cloudflare/elements/es/index.js"),
				l = n("../node_modules/@cloudflare/component-button/es/index.js"),
				m = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				d = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = n.n(d),
				t = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				r = n("../react/common/components/AccessControl/index.js"),
				s = n("../react/common/components/ButtonWithDropdown.tsx"),
				u = n("../react/common/components/Dropdown/index.tsx"),
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
				C = () => {
					const B = (0, f.Z)("super-add-button-copy-change"),
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
			var h = n("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function D(B) {
				for (var z = 1; z < arguments.length; z++) {
					var j = arguments[z] != null ? Object(arguments[z]) : {},
						ee = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(j).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(j, ie).enumerable
					})), ee.forEach(function(ie) {
						T(B, ie, j[ie])
					})
				}
				return B
			}

			function T(B, z, j) {
				return z = v(z), z in B ? Object.defineProperty(B, z, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[z] = j, B
			}

			function v(B) {
				var z = k(B, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function k(B, z) {
				if (typeof B != "object" || B === null) return B;
				var j = B[Symbol.toPrimitive];
				if (j !== void 0) {
					var ee = j.call(B, z || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(B)
			}

			function P() {
				return P = Object.assign ? Object.assign.bind() : function(B) {
					for (var z = 1; z < arguments.length; z++) {
						var j = arguments[z];
						for (var ee in j) Object.prototype.hasOwnProperty.call(j, ee) && (B[ee] = j[ee])
					}
					return B
				}, P.apply(this, arguments)
			}

			function b(B, z) {
				if (B == null) return {};
				var j = L(B, z),
					ee, ie;
				if (Object.getOwnPropertySymbols) {
					var _e = Object.getOwnPropertySymbols(B);
					for (ie = 0; ie < _e.length; ie++) ee = _e[ie], !(z.indexOf(ee) >= 0) && (!Object.prototype.propertyIsEnumerable.call(B, ee) || (j[ee] = B[ee]))
				}
				return j
			}

			function L(B, z) {
				if (B == null) return {};
				var j = {},
					ee = Object.keys(B),
					ie, _e;
				for (_e = 0; _e < ee.length; _e++) ie = ee[_e], !(z.indexOf(ie) >= 0) && (j[ie] = B[ie]);
				return j
			}
			const O = B => {
					let {
						title: z,
						trackingEvent: j,
						icon: ee,
						url: ie,
						description: _e,
						disabled: ye
					} = B, Te = b(B, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(S, P({
						to: !ye && ie || "#",
						"aria-disabled": ye,
						onClick: () => {
							g().sendEvent(j, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, Te), o().createElement(p.ZC, {
						display: "flex"
					}, o().createElement(a.J, {
						type: ee,
						size: 24,
						mr: 2,
						mt: 1
					}), o().createElement(p.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, o().createElement(p.ZC, {
						fontSize: 3
					}, o().createElement(c.cC, z)), o().createElement(p.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(c.cC, _e)))))
				},
				S = (0, t.createStyledComponent)(({
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
						':focus-within:not([aria-disabled="true"])': D({}, z, {
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
				}, h.Link);
			var U = O;

			function x() {
				return x = Object.assign ? Object.assign.bind() : function(B) {
					for (var z = 1; z < arguments.length; z++) {
						var j = arguments[z];
						for (var ee in j) Object.prototype.hasOwnProperty.call(j, ee) && (B[ee] = j[ee])
					}
					return B
				}, x.apply(this, arguments)
			}

			function Q(B) {
				for (var z = 1; z < arguments.length; z++) {
					var j = arguments[z] != null ? Object(arguments[z]) : {},
						ee = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(j).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(j, ie).enumerable
					})), ee.forEach(function(ie) {
						oe(B, ie, j[ie])
					})
				}
				return B
			}

			function oe(B, z, j) {
				return z = pe(z), z in B ? Object.defineProperty(B, z, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[z] = j, B
			}

			function pe(B) {
				var z = ue(B, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function ue(B, z) {
				if (typeof B != "object" || B === null) return B;
				var j = B[Symbol.toPrimitive];
				if (j !== void 0) {
					var ee = j.call(B, z || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(B)
			}

			function ce(B, z) {
				if (B == null) return {};
				var j = H(B, z),
					ee, ie;
				if (Object.getOwnPropertySymbols) {
					var _e = Object.getOwnPropertySymbols(B);
					for (ie = 0; ie < _e.length; ie++) ee = _e[ie], !(z.indexOf(ee) >= 0) && (!Object.prototype.propertyIsEnumerable.call(B, ee) || (j[ee] = B[ee]))
				}
				return j
			}

			function H(B, z) {
				if (B == null) return {};
				var j = {},
					ee = Object.keys(B),
					ie, _e;
				for (_e = 0; _e < ee.length; _e++) ie = ee[_e], !(z.indexOf(ie) >= 0) && (j[ie] = B[ie]);
				return j
			}
			const J = "GLOBAL_ADD_DROPDOWN",
				Y = (0, t.createStyledComponent)(({
					theme: B
				}) => ({
					"background-color": B.colors.blue[5]
				}), l.zx),
				I = ({
					disableProducts: B
				}) => {
					const z = C();
					return (0, e.useEffect)(() => (g().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						g().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), o().createElement(s.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200,
						minWidth: 240
					}, z.map(j => {
						const ee = j || {},
							{
								disableOn: ie,
								permissionCheck: _e
							} = ee,
							ye = ce(ee, ["disableOn", "permissionCheck"]),
							Te = ie && B[ie],
							Pe = Q({}, ye, {
								disabled: Te
							});
						return _e ? o().createElement(r.Z, {
							key: j.title.id,
							edit: _e
						}, ({
							isEditable: we
						}) => we && o().createElement(U, Pe)) : o().createElement(U, x({
							key: j.url
						}, Pe))
					}))
				},
				G = ({
					disableProducts: B,
					topNavType: z
				}) => {
					const j = () => (0, i.tq)() || z === "icon-only" ? o().createElement(p.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, o().createElement(Y, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : z === "text-icon" || z === "icon-only-with-add-button" ? o().createElement(l.zx, {
						type: "primary",
						mr: z === "icon-only-with-add-button" ? 3 : 0
					}, o().createElement(o().Fragment, null, o().createElement(a.J, {
						label: "plus",
						type: "plus"
					}), " ", o().createElement(c.cC, {
						id: "common.add"
					}))) : o().createElement(l.zx, {
						type: "primary"
					}, o().createElement(c.cC, {
						id: "common.add"
					}), " ", o().createElement(a.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return o().createElement(ne, {
						role: "group",
						"data-testid": J
					}, o().createElement(u.Lt, {
						trigger: z === "baseline" ? o().createElement(ae, null, o().createElement(a.J, {
							label: "plus",
							type: "plus"
						}), !(0, i.tq)() && o().createElement(o().Fragment, null, o().createElement(c.cC, {
							id: "common.add"
						}), " ", o().createElement(a.J, {
							label: "arrow",
							type: "caret-down"
						}))) : j(),
						menu: o().createElement(I, {
							disableProducts: B
						})
					}))
				},
				ne = (0, t.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				ae = (0, t.createStyledComponent)(({
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
				}), p.zx);
			var M = G,
				F = M
		},
		"../react/app/components/LoadingSuspense.tsx": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				p = n("../node_modules/@cloudflare/elements/es/index.js"),
				l = n("../react/utils/translator.tsx"),
				m = n("../react/app/components/ErrorStatus.tsx"),
				i = n("../react/common/components/EmptyPage.jsx"),
				d = n("../react/common/hooks/suspenseHelpers.ts");

			function g(s) {
				const [u, c] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const f = window.setTimeout(() => c(!0), s);
					return () => window.clearTimeout(f)
				}, []), u
			}
			const t = ({
					loadingTimeout: s = 1e3,
					stillLoadingTimeout: u = 9e3
				}) => {
					const c = g(s),
						f = g(u);
					if ((0, d.nW)(), !c && !f) return o().createElement(i.Z, null);
					const _ = f ? o().createElement(l.cC, {
						id: "common.still_loading"
					}) : c ? o().createElement(l.cC, {
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
					fallback: o().createElement(t, null)
				}, s);
			E.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				C8: function() {
					return d
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
			const a = "/persistence/user",
				p = async () => {
					try {
						return await (await e.get(a, {
							hideErrorAlert: !0
						})).body
					} catch (s) {
						console.error(s)
					}
				}, l = async s => {
					try {
						return await (await e.get(`/accounts/${s}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (u) {
						console.error(u)
					}
				}, m = async (s, u) => {
					try {
						return await (await e.post(`${a}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: s,
								accountId: u
							}),
							hideErrorAlert: !0
						})).body
					} catch (c) {
						return console.error(c), []
					}
				}, i = async (s, u) => {
					try {
						return await http.post(`/accounts/${s}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: u
							}),
							hideErrorAlert: !0
						}), !0
					} catch (c) {
						return console.error(c), !1
					}
				}, d = async s => {
					try {
						return await (await e.post(a, {
							body: JSON.stringify({
								darkMode: s
							})
						})).body
					} catch (u) {
						console.error(u)
					}
				}, g = async s => {
					try {
						return await (await e.post(`${a}/recents`, {
							body: JSON.stringify(s),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						console.error(u)
					}
				}, t = async s => {
					try {
						return await (await e.post(`${a}/viewed-changes`, {
							body: JSON.stringify(s),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						throw console.error(u), u
					}
				}, r = async s => {
					try {
						return await (await e.post(a + "/flags", {
							body: JSON.stringify(s)
						})).body
					} catch (u) {
						throw console.error(u), u
					}
				}
		},
		"../react/app/components/Persistence/hooks.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				y: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../react/app/components/Persistence/index.tsx");
			const p = () => (0, e.useContext)(a.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(W, E, n) {
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
					return ce
				},
				yZ: function() {
					return h.y
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../react/app/redux/index.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = n.n(p),
				m = n("../react/utils/bootstrap.ts"),
				i = n("../react/common/selectors/zoneSelectors.ts"),
				d = n("../react/app/components/Persistence/api.ts");
			const g = 10;

			function t(H) {
				for (var J = 1; J < arguments.length; J++) {
					var Y = arguments[J] != null ? Object(arguments[J]) : {},
						I = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(Y).filter(function(G) {
						return Object.getOwnPropertyDescriptor(Y, G).enumerable
					})), I.forEach(function(G) {
						r(H, G, Y[G])
					})
				}
				return H
			}

			function r(H, J, Y) {
				return J = s(J), J in H ? Object.defineProperty(H, J, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : H[J] = Y, H
			}

			function s(H) {
				var J = u(H, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function u(H, J) {
				if (typeof H != "object" || H === null) return H;
				var Y = H[Symbol.toPrimitive];
				if (Y !== void 0) {
					var I = Y.call(H, J || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(H)
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
				C = _.Consumer,
				A = ({
					children: H,
					onDarkModeChangeCb: J
				}) => {
					const [Y, I] = (0, e.useState)(c), [G, ne] = (0, e.useState)(f.isLoading), ae = (0, m.$8)(), M = (0, a.p4)(j => (0, i.wH)(j));
					(0, e.useEffect)(() => {
						ae ? (0, d.yl)().then(j => {
							j && (I(j), l().identify({
								hasEnabledSecurityNavigation: j.flags.hasEnabledSecurityNavigation
							}), J(j.darkMode))
						}).finally(() => ne(!1)) : ne(!1)
					}, [ae]);
					const F = (j, ee) => !!Y.favorites.find(ie => ie.type === "zone" && ie.name === j && ie.accountId === ee),
						B = g - Y.favorites.length,
						z = j => Y.favorites.filter(ie => ie.type === "zone" && ie.accountId === j).length < g;
					return o().createElement(_.Provider, {
						value: t({}, Y, {
							isLoading: G,
							remainingStarSlots: B,
							actions: {
								canAccountStarZone: z,
								isZoneStarred: F,
								starZone: async (j, ee) => {
									var ie;
									const _e = !F(j, ee),
										ye = z(ee);
									if (_e && !ye) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Te = await (0, d.lt)(j, ee);
									l().sendEvent("click star zone", {
										isStarring: _e,
										totalStarredZones: Te.filter(Pe => Pe.accountId === ee && Pe.type === "zone").length,
										totalZones: M == null || (ie = M.paginationData) === null || ie === void 0 ? void 0 : ie.info.total_count
									}), I(t({}, Y, {
										favorites: Te
									}))
								},
								toggleSecurityNavigation: async j => {
									await (0, d.Sp)({
										hasEnabledSecurityNavigation: j
									}), l().identify({
										hasEnabledSecurityNavigation: j
									}), I(t({}, Y, {
										flags: {
											hasEnabledSecurityNavigation: j
										}
									}))
								},
								setDarkMode: async j => {
									const ee = await (0, d.C8)(j);
									I(ee), J(ee.darkMode)
								},
								logRouteVisited: async j => {
									var ee;
									const ie = await (0, d.n)(j);
									I((ee = ie) !== null && ee !== void 0 ? ee : t({}, Y))
								},
								viewChange: async j => {
									const ee = await (0, d.m6)(j);
									I(t({}, Y, {
										viewedChanges: ee
									}))
								}
							}
						})
					}, H)
				};
			var h = n("../react/app/components/Persistence/hooks.ts"),
				D = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				T = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function v() {
				return v = Object.assign ? Object.assign.bind() : function(H) {
					for (var J = 1; J < arguments.length; J++) {
						var Y = arguments[J];
						for (var I in Y) Object.prototype.hasOwnProperty.call(Y, I) && (H[I] = Y[I])
					}
					return H
				}, v.apply(this, arguments)
			}

			function k(H, J) {
				if (H == null) return {};
				var Y = P(H, J),
					I, G;
				if (Object.getOwnPropertySymbols) {
					var ne = Object.getOwnPropertySymbols(H);
					for (G = 0; G < ne.length; G++) I = ne[G], !(J.indexOf(I) >= 0) && (!Object.prototype.propertyIsEnumerable.call(H, I) || (Y[I] = H[I]))
				}
				return Y
			}

			function P(H, J) {
				if (H == null) return {};
				var Y = {},
					I = Object.keys(H),
					G, ne;
				for (ne = 0; ne < I.length; ne++) G = I[ne], !(J.indexOf(G) >= 0) && (Y[G] = H[G]);
				return Y
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
			var O = H => {
					let {
						isStarred: J,
						size: Y = 16
					} = H, I = k(H, ["isStarred", "size"]);
					const G = b[(0, D.Yc)() ? "dark" : "light"];
					return o().createElement(T.J, v({
						type: J ? "star" : "star-outline",
						color: J ? G.gold : G.gray,
						size: Y
					}, I))
				},
				S = n("../node_modules/@cloudflare/elements/es/index.js");

			function U(H) {
				for (var J = 1; J < arguments.length; J++) {
					var Y = arguments[J] != null ? Object(arguments[J]) : {},
						I = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(Y).filter(function(G) {
						return Object.getOwnPropertyDescriptor(Y, G).enumerable
					})), I.forEach(function(G) {
						x(H, G, Y[G])
					})
				}
				return H
			}

			function x(H, J, Y) {
				return J = Q(J), J in H ? Object.defineProperty(H, J, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : H[J] = Y, H
			}

			function Q(H) {
				var J = oe(H, "string");
				return typeof J == "symbol" ? J : String(J)
			}

			function oe(H, J) {
				if (typeof H != "object" || H === null) return H;
				var Y = H[Symbol.toPrimitive];
				if (Y !== void 0) {
					var I = Y.call(H, J || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (J === "string" ? String : Number)(H)
			}
			const pe = {
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
			var ce = (0, e.forwardRef)(({
				featurePreview: H = !1,
				isStarred: J,
				onClickFn: Y,
				isDisabled: I,
				testId: G,
				buttonText: ne,
				size: ae = "large",
				variant: M = "pill"
			}, F) => {
				const [B, z] = (0, e.useState)(!1), j = pe[(0, D.Yc)() ? "dark" : "light"][J && !H ? "active" : "default"], ee = U({}, ae === "large" && {
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
				}), ie = {
					pill: "50vh",
					button: 4
				};
				return o().createElement(S.zx, {
					onMouseEnter: () => z(!0),
					onMouseLeave: () => z(!1),
					innerRef: F,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: ee.paddingRight,
					gap: 1,
					pl: ee.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: ie[M],
					border: "1px solid",
					cursor: H || I ? "default" : "pointer",
					backgroundColor: B ? j.bgHover : j.bg,
					color: j.text,
					borderColor: j.border,
					onClick: Y,
					opacity: I ? .5 : 1,
					disabled: I,
					fontSize: ee.fontSize,
					height: ee.height,
					"data-testid": G
				}, o().createElement(O, {
					isStarred: H ? !1 : J,
					size: ee.starIconSize
				}), ne)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$n: function() {
					return u
				},
				IU: function() {
					return f
				},
				Wq: function() {
					return k
				},
				dL: function() {
					return _
				},
				fO: function() {
					return v
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
					return L
				},
				o_: function() {
					return h
				},
				us: function() {
					return T
				},
				wB: function() {
					return s
				},
				zJ: function() {
					return D
				}
			});
			var e = n("../react/common/components/AccessCheck/index.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts"),
				a = n("../react/common/selectors/zoneSelectors.ts"),
				p = n("../react/common/selectors/accountSelectors.ts"),
				l = n("../react/utils/zoneLevelAccess.ts"),
				m = n("../react/pages/stream/selectors.ts"),
				i = n("../react/pages/home/domain-registration/selectors.ts"),
				d = n("../react/pages/images/selectors.ts"),
				g = n("../react/pages/r2/selectors.ts");
			const t = O => !!(0, l.b)(O),
				r = O => t(O) ? (0, e.hT)(O) : !0,
				s = (O, S, U, x = "read") => {
					const Q = (0, a.nA)(O);
					return t(O) ? (0, e.WL)(O, (0, e.W9)(U, e.ZZ[x]), (0, e.j)(Q == null ? void 0 : Q.id)) : (0, p.Yj)(O)(S)[x]
				},
				u = (O, S, U, x = "read") => {
					const Q = (0, a.nA)(O),
						oe = e.zs.includes(U);
					return t(O) ? (0, e.WL)(O, oe ? U : (0, e.my)(U, e.ZZ[x === "edit" ? "update" : x]), (0, e.j)(Q == null ? void 0 : Q.id)) : (0, p.Yj)(O)(S)[x === "update" ? "edit" : x]
				},
				c = O => !!(0, m._Q)(O),
				f = O => (0, d.pT)(O),
				_ = O => (0, d.pT)(O) && (0, d.GH)(O),
				C = O => sourcingKitEnabledSelector(O),
				A = O => !!r2EnabledSelector(O),
				h = O => (0, g.Mv)(O),
				D = O => (0, o.$f)(O, "rulesets.magic_transit_allowed"),
				T = O => (0, o.$f)(O, "flowtrackd.magic_custom_config_allowed"),
				v = O => (0, o.$f)(O, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				k = O => (0, p.Le)(O, "ddos_protection", "l4_rulesets"),
				P = O => hasAccountEntitlements(O, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				b = O => (0, i.HO)(O),
				L = O => !(0, o.yD)(O) && !!u(O, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = n.n(a),
				l = n("../../../../node_modules/prop-types/index.js"),
				m = n.n(l),
				i = n("webpack/sharing/consume/default/react-redux/react-redux"),
				d = n.n(i),
				g = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				t = n.n(g),
				r = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				s = n("../node_modules/@cloudflare/component-button/es/index.js"),
				u = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				c = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				f = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				_ = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				C = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				A = n.n(C),
				h = n("../react/common/actions/membershipActions.ts"),
				D = n("../react/utils/url.ts"),
				T = n("../react/app/components/Footer.tsx");

			function v(ce) {
				for (var H = 1; H < arguments.length; H++) {
					var J = arguments[H] != null ? Object(arguments[H]) : {},
						Y = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(J).filter(function(I) {
						return Object.getOwnPropertyDescriptor(J, I).enumerable
					})), Y.forEach(function(I) {
						k(ce, I, J[I])
					})
				}
				return ce
			}

			function k(ce, H, J) {
				return H = P(H), H in ce ? Object.defineProperty(ce, H, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[H] = J, ce
			}

			function P(ce) {
				var H = b(ce, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function b(ce, H) {
				if (typeof ce != "object" || ce === null) return ce;
				var J = ce[Symbol.toPrimitive];
				if (J !== void 0) {
					var Y = J.call(ce, H || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(ce)
			}
			const L = (0, r.createComponent)(({
					type: ce
				}) => ({
					height: ce !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				O = (0, r.createComponent)(({
					theme: ce,
					margin: H,
					size: J = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: ce.colors.gray[3],
					height: H ? "auto" : "100%",
					padding: H ? 0 : ce.space[J > 1 ? J - 2 : 0],
					margin: H,
					justifyContent: "center",
					alignItems: "center"
				})),
				S = (0, r.createComponent)(() => ({
					textAlign: "left"
				})),
				U = (0, r.createComponent)(() => ({
					textAlign: "right"
				})),
				x = (0, r.createComponent)(({
					theme: ce
				}) => ({
					fontSize: ce.fontSizes[6]
				})),
				Q = (0, r.createComponent)(({
					theme: ce
				}) => ({
					fontSize: ce.fontSizes[4]
				})),
				oe = (0, r.createComponent)(({
					theme: ce
				}) => ({
					fontSize: ce.fontSizes[3]
				})),
				pe = (0, r.createComponent)(({
					theme: ce
				}) => ({
					width: "100%",
					height: 125,
					marginTop: ce.space[4],
					padding: ce.space[2]
				}), "textarea");
			class ue extends o().Component {
				constructor(...H) {
					super(...H);
					k(this, "state", {
						value: "",
						submitted: !1
					}), k(this, "handleTextareaChange", J => {
						this.setState({
							value: J.target.value
						})
					}), k(this, "sendErrToSentry10", async () => {
						try {
							var J, Y, I, G;
							const ne = ((J = window) === null || J === void 0 || (Y = J.bootstrap) === null || Y === void 0 || (I = Y.data) === null || I === void 0 || (G = I.user) === null || G === void 0 ? void 0 : G.id) || "Unknown",
								ae = this.props.eventId || u.eW(),
								M = {
									name: ne,
									email: `${ne}@userid.com`,
									comments: this.state.value,
									eventId: ae,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: v({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(M)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (ne) {
							console.error(ne)
						}
					}), k(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), k(this, "renderContent", J => o().createElement(g.I18n, null, Y => o().createElement(L, {
						type: J
					}, o().createElement(O, null, o().createElement(S, null, o().createElement(x, null, Y.t("error.internal_issues")), o().createElement(Q, null, Y.t("error.help_us")), o().createElement(pe, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: I => this.handleTextareaChange(I),
						disabled: this.state.submitted,
						placeholder: Y.t("error.give_feedback")
					}), o().createElement(U, null, !this.state.submitted && o().createElement(s.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, Y.t("common.submit")), this.state.submitted && o().createElement(oe, null, Y.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: H,
						sentryTag: J,
						membershipsList: Y
					} = this.props;
					console.error(`SomethingWrong: ${H}`);
					let I = "";
					const G = (0, D.e1)();
					if (G) {
						var ne;
						const M = await Y({
								parameters: {
									status: "accepted"
								}
							}),
							F = M == null || (ne = M.find(B => B.id === G)) === null || ne === void 0 ? void 0 : ne.roles;
						F && F.length && (I = F.join(", "))
					}
					const ae = `ErrorBoundary - ${H}`;
					c.Tb(ae, {
						tags: {
							errorBoundary: J,
							normalizedPath: (0, D.Fl)(window.location.pathname),
							roles: I.length ? I : void 0
						}
					}), A().sendEvent("something wrong", {
						error: H,
						roles: I.length ? I : void 0
					})
				}
				render() {
					const {
						type: H
					} = this.props;
					return H === "fullscreen" ? o().createElement("div", null, o().createElement(f.h4, null, o().createElement(a.Link, {
						to: "/"
					}, o().createElement(_.TR, null))), this.renderContent(H), o().createElement(T.Z, null)) : this.renderContent(H)
				}
			}
			ue.propTypes = {
				type: m().oneOf(["fullscreen", "page"]),
				error: m().oneOfType([m().string, m().object]),
				eventId: m().string,
				sentryTag: m().string,
				membershipsList: m().func
			}, E.Z = (0, i.connect)(() => ({}), {
				membershipsList: h.YT
			})(ue)
		},
		"../react/app/providers/storeContainer.js": function(W, E, n) {
			"use strict";
			n.d(E, {
				bh: function() {
					return U
				}
			});
			var e = n("../../../../node_modules/redux/es/redux.js"),
				o = n("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				a = n.n(o),
				p = n("../../../../node_modules/redux-thunk/es/index.js"),
				l = n("../../../../node_modules/redux-persist/es/index.js"),
				m = n("../../../../node_modules/redux-persist/lib/storage/index.js"),
				i = n("../react/app/rootReducer.js"),
				d = n("../react/app/redux/normalizer.js"),
				g = n("../../../../node_modules/@sentry/react/esm/redux.js"),
				t = n("../react/app/providers/sentryTransformer.js"),
				r = n("../react/app/reducerRegistry.js"),
				s = n("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				u = n("../react/common/sagas/index.js"),
				c = n("../react/app/redux/processActionMiddleware.js"),
				f = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				_ = n("../../../../node_modules/is-promise/index.js"),
				C = n.n(_);

			function A(x) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var oe = arguments[Q] != null ? Object(arguments[Q]) : {},
						pe = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(oe).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(oe, ue).enumerable
					})), pe.forEach(function(ue) {
						h(x, ue, oe[ue])
					})
				}
				return x
			}

			function h(x, Q, oe) {
				return Q = D(Q), Q in x ? Object.defineProperty(x, Q, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[Q] = oe, x
			}

			function D(x) {
				var Q = T(x, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function T(x, Q) {
				if (typeof x != "object" || x === null) return x;
				var oe = x[Symbol.toPrimitive];
				if (oe !== void 0) {
					var pe = oe.call(x, Q || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(x)
			}
			const v = {
					key: "cf-redux-store",
					storage: m.Z,
					whitelist: ["accountAccess", "invite"]
				},
				k = (0, s.ZP)(),
				b = [({
					dispatch: x
				}) => Q => oe => C()(oe) ? oe.then(pe => x(pe)) : Q(oe), k, p.Z, c.Z, d.qR],
				L = x => (0, l.Wq)(v, A({}, i.Z, x));

			function O() {
				const x = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					oe = e.compose((0, e.applyMiddleware)(...b), g.w({
						actionTransformer: t.b,
						stateTransformer: t.O
					})),
					pe = {},
					ue = (0, e.createStore)(L(r.Z.getReducers()), pe, oe);
				k.run(u.Z), (0, l.p5)(ue);
				const H = (n.g.bootstrap || {}).data || {};
				return ue.dispatch((0, f.mW)("user", H.user)), ue
			}
			let S;
			r.Z.setChangeListener(x => {
				var Q;
				S && ((Q = S) === null || Q === void 0 ? void 0 : Q.replaceReducer) && (S.replaceReducer(L(x)), (0, l.p5)(S))
			});

			function U() {
				return S || (S = O()), S
			}
		},
		"../react/app/redux/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				TZ: function() {
					return a
				},
				UM: function() {
					return l
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
			const a = () => (0, e.useStore)(),
				p = () => a().getState(),
				l = () => (0, e.useDispatch)(),
				m = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(W, E, n) {
			"use strict";
			n.d(E, {
				$J: function() {
					return s
				},
				Oy: function() {
					return r
				},
				SC: function() {
					return g
				},
				ZP: function() {
					return u
				},
				dJ: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				o = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				a = n.n(o);

			function p(c) {
				for (var f = 1; f < arguments.length; f++) {
					var _ = arguments[f] != null ? Object(arguments[f]) : {},
						C = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(_).filter(function(A) {
						return Object.getOwnPropertyDescriptor(_, A).enumerable
					})), C.forEach(function(A) {
						l(c, A, _[A])
					})
				}
				return c
			}

			function l(c, f, _) {
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
					var C = _.call(c, f || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(c)
			}
			const d = p({}, o),
				g = (c, f, _, C = {}) => {
					const A = c === "delete" ? "del" : c.toLowerCase();
					return _ && A !== "del" && (C.body = _), d[A](f, C)
				},
				t = (c, f) => (c.meta.params = f, c),
				r = (c, f, _, C, {
					body: A = {}
				}) => {
					const {
						result: h,
						messages: D,
						result_info: T
					} = A, v = Object.values(f);
					if (c.meta.method === "delete") {
						const k = v[v.length - 1];
						c.meta.id = typeof k == "object" ? k.id : k
					}
					return c.payload = h, D && (c.meta.messages = D), v.length && (c.meta.params = f), T && (c.meta.paginationData = {
						info: T,
						actionParameters: v,
						options: _[0],
						insertionOffset: 0
					}), c
				},
				s = (c, f, _, C, A) => (c.payload = A && A.body && A.body.errors, c.meta.messages = A && A.body && A.body.messages, c.meta.params = f, c.apiError = A, c);

			function u(c, f, _, C) {
				const A = (0, e.RM)(c, f, _, C).apiFetch(g).on("start", t).on("success", r).on("error", s),
					h = A.mock;
				return A.mock = D => (h((...T) => {
					const v = D(...T);
					return v && typeof v == "object" && "result" in v ? v : {
						result: v
					}
				}), A), A
			}
		},
		"../react/app/redux/normalizer.js": function(W, E, n) {
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
				a = n("../react/pages/email/types.ts"),
				p = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				m = n.n(l);
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
				g = (...r) => (0, p.P1)(i, d, ...r),
				t = (0, p.QB)(i)
		},
		"../react/app/redux/utils.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				F: function() {
					return a
				},
				_: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const o = p => (l, m, i) => (0, e.SC)(l, m, i, {
					hideErrorAlert: !0
				}).catch(p),
				a = p => l => {
					if (l.status === p) return l;
					throw l
				}
		},
		"../react/common/actionTypes.ts": function(W, E, n) {
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
					return a
				},
				Yc: function() {
					return r
				},
				gM: function() {
					return p
				},
				lV: function() {
					return l
				},
				s1: function() {
					return d
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				a = "MODAL_OPEN",
				p = "MODAL_CLOSE",
				l = "TOGGLE_ON",
				m = "TOGGLE_OFF",
				i = "SET_ACTIVE",
				d = "CLEAR_ACTIVE",
				g = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(s) {
				return s.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", s.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", s.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", s.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", s.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", s.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", s.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", s.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", s.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", s
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				AX: function() {
					return s
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

			function a(u) {
				for (var c = 1; c < arguments.length; c++) {
					var f = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(f).filter(function(C) {
						return Object.getOwnPropertyDescriptor(f, C).enumerable
					})), _.forEach(function(C) {
						p(u, C, f[C])
					})
				}
				return u
			}

			function p(u, c, f) {
				return c = l(c), c in u ? Object.defineProperty(u, c, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[c] = f, u
			}

			function l(u) {
				var c = m(u, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function m(u, c) {
				if (typeof u != "object" || u === null) return u;
				var f = u[Symbol.toPrimitive];
				if (f !== void 0) {
					var _ = f.call(u, c || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(u)
			}
			const i = u => {
					const c = u.payload.map(f => a({}, f, {
						membershipId: f.id,
						id: f.account.id
					}));
					return a({}, u, {
						payload: c
					})
				},
				d = u => {
					const c = i(u);
					return Array.isArray(c.payload) ? a({}, u, {
						payload: c.payload[0]
					}) : a({}, u, {
						payload: null
					})
				},
				g = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", i),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...u) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: u
				}),
				s = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", d)
		},
		"../react/common/actions/modalActions.ts": function(W, E, n) {
			"use strict";
			n.r(E), n.d(E, {
				closeModal: function() {
					return p
				},
				openModal: function() {
					return a
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function a(l, m, i = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: l,
						props: m
					},
					options: i
				}
			}

			function p(l) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: l
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(W, E, n) {
			"use strict";
			n.r(E), n.d(E, {
				add: function() {
					return l
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

			function a(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let p = 0;

			function l(t, r, s = {}) {
				return s = s || {},
					function(u) {
						let c = p++,
							f = {
								id: c,
								type: t,
								message: r,
								delay: s.delay,
								persist: s.persist === void 0 ? !1 : s.persist,
								closable: s.closable === void 0 ? !0 : s.closable,
								onClose() {
									u(a(c)), s.onClose && s.onClose.apply(null, arguments)
								}
							};
						u(o(f))
					}
			}

			function m(t, r) {
				return l("success", t, r)
			}

			function i(t, r) {
				return l("info", t, r)
			}

			function d(t, r) {
				return l("warning", t, r)
			}

			function g(t, r) {
				return l("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				BT: function() {
					return i
				},
				Ut: function() {
					return C
				},
				V_: function() {
					return A
				},
				Y9: function() {
					return f
				},
				Z0: function() {
					return D
				},
				mp: function() {
					return _
				},
				r3: function() {
					return h
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/app/redux/utils.ts");

			function a(T) {
				for (var v = 1; v < arguments.length; v++) {
					var k = arguments[v] != null ? Object(arguments[v]) : {},
						P = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(k).filter(function(b) {
						return Object.getOwnPropertyDescriptor(k, b).enumerable
					})), P.forEach(function(b) {
						p(T, b, k[b])
					})
				}
				return T
			}

			function p(T, v, k) {
				return v = l(v), v in T ? Object.defineProperty(T, v, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[v] = k, T
			}

			function l(T) {
				var v = m(T, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function m(T, v) {
				if (typeof T != "object" || T === null) return T;
				var k = T[Symbol.toPrimitive];
				if (k !== void 0) {
					var P = k.call(T, v || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(T)
			}
			const i = (0, e.C)("user").get`/user`,
				d = (0, e.C)("user").patch`/user`,
				g = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/two_factor_authentication`,
				u = (0, e.C)("user").delete`/user/two_factor_authentication`,
				c = (0, e.C)("user").put`/user/email`;

			function f(...T) {
				return c(...T)
			}
			const _ = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				C = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(T => a({}, T, {
					body: a({}, T.body, {
						result: {}
					})
				}))),
				A = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				h = (0, e.C)("userDetails").get`/user/details`,
				D = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(W, E, n) {
			"use strict";
			var e = n("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = n("../react/utils/zoneLevelAccess.ts");
			const a = ({
				legacyPermission: p,
				canAccess: l,
				children: m,
				render: i
			}) => {
				const d = !!(0, o.P)();
				let g;
				typeof l == "boolean" && l !== void 0 && d ? g = {
					read: l,
					list: l,
					create: l,
					update: l,
					delete: l,
					sign: l
				} : g = (0, e.Z)(p);
				const t = i || m;
				return t ? t(g) : null
			};
			E.Z = a
		},
		"../react/common/components/AccessCheck/constants.ts": function(W, E, n) {
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
					return l
				}
			});
			const e = "com.cloudflare.api.account",
				o = "com.cloudflare.api.account.",
				a = "com.cloudflare.edge.",
				p = "com.cloudflare.api.account.zone.",
				l = ["com.cloudflare.api.app.manage"];
			let m = function(s) {
				return s.read = "read", s.list = "list", s.create = "create", s.update = "update", s.delete = "delete", s.sign = "sign", s.refresh = "refresh", s
			}({});
			const i = (s, u) => `${o}${s?s+".":""}${u}`,
				d = (s, u) => `${p}${s?s+".":""}${u}`,
				g = (s, u) => `${a}${s}.${u}`,
				t = (s = "") => `${o}${s}`,
				r = (s = "") => `${p}${s}`
		},
		"../react/common/components/AccessCheck/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
			var e = n("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = n("../react/common/components/AccessCheck/AccessCheck.tsx"),
				a = n("../react/common/components/AccessCheck/useAccessResolver.ts"),
				p = n("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../react/app/redux/index.ts"),
				p = n("../react/common/selectors/accountSelectors.ts"),
				l = n("../react/pages/zone-versioning/selectors.ts");

			function m(i) {
				const {
					read: d,
					edit: g
				} = (0, a.p4)(p.Yj)(i);
				let t = g;
				if (i != "zone_versioning") {
					const s = (0, a.p4)(l.G);
					(s == null ? void 0 : s.isLocked) && (t = !1)
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
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				WL: function() {
					return s
				},
				hT: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/lodash-es/set.js"),
				o = n("../react/common/selectors/accountSelectors.ts"),
				a = n("../react/pages/home/members/utils.ts"),
				p = n("../react/common/components/AccessCheck/constants.ts"),
				l = n("../react/pages/zone-versioning/selectors.ts");
			const m = {
					allow: "allow",
					deny: "deny"
				},
				i = 0,
				d = 1,
				g = 2,
				t = 3;

			function r(v, k, P, b) {
				let L = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					O;
				for (O in L) L[O] = s(v, `${k}.${O}`, P, b);
				return L
			}

			function s(v, k, P, b) {
				var L;
				if (u(k) && !c(k)) {
					const Q = (0, l.G)(v);
					if (Q == null ? void 0 : Q.isLocked) return !1
				}
				const O = (L = (0, o.D0)(v)) === null || L === void 0 ? void 0 : L.id,
					S = O ? [`com.cloudflare.api.account.${O}`] : void 0,
					U = (0, a.vq)(O);
				return !!_(v, U, k, P, b || S)
			}

			function u(v) {
				return ![p.ZZ.read, p.ZZ.list].some(k => v.endsWith(k))
			}

			function c(v) {
				return v.includes("zone.versioning")
			}

			function f(v) {
				const k = (0, o.Ko)(v);
				let P = !1;
				return k == null || k.forEach(b => {
					b.access === m.allow && b.permission_groups.forEach(L => {
						var O;
						(L == null || (O = L.meta) === null || O === void 0 ? void 0 : O.scopes) === p.u1 && (P = !0)
					})
				}), P
			}

			function _(v, k, P, b, L) {
				const O = (0, o.Ko)(v),
					S = {};
				O == null || O.forEach(oe => {
					var pe;
					const ue = oe.access;
					let ce = i;
					if (P && oe.permission_groups.forEach(H => {
							var J, Y;
							k == null || (J = k.find(I => I.id === H.id)) === null || J === void 0 || (Y = J.permissions) === null || Y === void 0 || Y.forEach(I => {
								ce = Math.max(ce, C(I, P))
							})
						}), ce !== i && !!b) {
						let H = i;
						oe.resource_groups.forEach(J => {
							H = Math.max(H, h(J.scope, b, L))
						}), ce = H === i ? H : ce + H
					}(S == null || (pe = S[ue]) === null || pe === void 0 ? void 0 : pe[ce]) || (0, e.Z)(S, [ue, ce], []), S[ue][ce].push(oe)
				});
				const U = S[m.allow] && Object.keys(S[m.allow]).map(oe => parseInt(oe)),
					x = S[m.deny] && Object.keys(S[m.deny]).map(oe => parseInt(oe)),
					Q = Math.max.apply(Math, U);
				return Q === i || Math.max.apply(Math, x) >= Q ? null : S[m.allow][Q]
			}

			function C(v, k) {
				if (v.key === k || A(v.key, k)) return t;
				for (const P of (v == null ? void 0 : v.implies) || []) {
					let b = C(P, k);
					if (b > i) return b
				}
				return i
			}

			function A(v, k) {
				const P = k == null ? void 0 : k.lastIndexOf(".");
				return P === -1 ? !1 : (k == null ? void 0 : k.substring(0, P)) + ".*" === v
			}

			function h(v, k, P) {
				var b;
				let L = i;
				if (v == null || (b = v.objects) === null || b === void 0 || b.forEach(O => {
						L = Math.max(L, T(O, k))
					}), L === i) return L;
				if (v.key !== "*") switch (!0) {
					case D(v.key, P) > i:
					case (!(P == null ? void 0 : P.length) && L === t):
						break;
					case (L === d && D(v.key, [k]) > i):
						L = D(v.key, [k]);
						break;
					default:
						return i
				}
				for (const O of v.subset_of || [])
					if (D(O.key, P) === i) return i;
				return L
			}

			function D(v, k = []) {
				for (const P of k || []) {
					if (v === P) return t;
					if (A(v, P)) return g
				}
				return i
			}

			function T(v, k) {
				return v.key === k ? t : v.key === "*" ? d : A(v.key, k) ? g : i
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(W, E, n) {
			"use strict";
			n.d(E, {
				a: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e),
				a = n("../react/common/selectors/accountSelectors.ts");
			const p = m => {
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
						resourceId: d,
						accountId: g,
						legacyPermission: t
					} = i;
					let {
						read: r,
						edit: s
					} = i;
					const u = {};
					t && (s = `#${t}:edit`, r = `#${t}:read`);
					const c = d || g;
					if (r) {
						const f = Array.isArray(r) ? r : [r];
						u.isReadable = f.some(_ => {
							const C = p(_);
							return (0, a.DT)(m, c, A => !!(A[C.key] && A[C.key][C.value]))
						})
					}
					if (s) {
						const f = Array.isArray(s) ? s : [s];
						u.isEditable = f.some(_ => {
							const C = p(_);
							return (0, a.DT)(m, c, A => !!(A[C.key] && A[C.key][C.value]))
						})
					}
					return u
				};
			E.Z = (0, e.connect)(l)
		},
		"../react/common/components/AccessControl/index.js": function(W, E, n) {
			"use strict";
			var e = n("../../../../node_modules/prop-types/index.js"),
				o = n.n(e),
				a = n("../react/app/HoCs/withEntities.tsx"),
				p = n("../react/common/components/AccessControl/SAAConnect.js");

			function l(r) {
				for (var s = 1; s < arguments.length; s++) {
					var u = arguments[s] != null ? Object(arguments[s]) : {},
						c = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(u).filter(function(f) {
						return Object.getOwnPropertyDescriptor(u, f).enumerable
					})), c.forEach(function(f) {
						m(r, f, u[f])
					})
				}
				return r
			}

			function m(r, s, u) {
				return s = i(s), s in r ? Object.defineProperty(r, s, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = u, r
			}

			function i(r) {
				var s = d(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function d(r, s) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var c = u.call(r, s || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}

			function g(r) {
				const u = ["isReadable", "isEditable"].reduce((c, f) => r.hasOwnProperty(f) ? l({}, c, {
					[f]: r[f]
				}) : c, {});
				return r.children(u)
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
			const t = (0, a.Z)((0, p.Z)(g));
			t.displayName = "AccessControl", E.Z = t
		},
		"../react/common/components/Apple/utils.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
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
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const m = () => d.test(window.location.pathname) || a.E.has(p.Qq),
				i = () => a.E.get(p.Qq),
				d = /^\/login\/apple(\/)?/,
				t = [d, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let u = !1;
					t.forEach(f => {
						if (f.test(window.location.pathname)) {
							u = !0;
							return
						}
					});
					const c = m() && u;
					return c && (0, l.C8)(l.LF.OFF), c
				},
				s = u => {
					u && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let c = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					u && (c = c + `&jwt=${u}`), window.location.href = c
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(W, E, n) {
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
				a = n("../node_modules/@cloudflare/component-button/es/index.js"),
				p = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				m = n.n(l),
				i = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../react/common/components/Dropdown/index.tsx"),
				g = n("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function t() {
				return t = Object.assign ? Object.assign.bind() : function(f) {
					for (var _ = 1; _ < arguments.length; _++) {
						var C = arguments[_];
						for (var A in C) Object.prototype.hasOwnProperty.call(C, A) && (f[A] = C[A])
					}
					return f
				}, t.apply(this, arguments)
			}

			function r(f, _) {
				if (f == null) return {};
				var C = s(f, _),
					A, h;
				if (Object.getOwnPropertySymbols) {
					var D = Object.getOwnPropertySymbols(f);
					for (h = 0; h < D.length; h++) A = D[h], !(_.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(f, A) || (C[A] = f[A]))
				}
				return C
			}

			function s(f, _) {
				if (f == null) return {};
				var C = {},
					A = Object.keys(f),
					h, D;
				for (D = 0; D < A.length; D++) h = A[D], !(_.indexOf(h) >= 0) && (C[h] = f[h]);
				return C
			}
			const u = (0, i.createStyledComponent)(({
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
					containerProps: C,
					disabled: A,
					disabledDropdown: h = A
				} = f, D = r(f, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: T
				} = (0, l.useI18n)();
				return o().createElement(u, t({}, C, {
					role: "group"
				}), o().createElement(a.zx, t({}, D, {
					disabled: A
				})), o().createElement(d.Lt, {
					trigger: o().createElement(a.zx, {
						type: D.type,
						"aria-haspopup": "menu",
						disabled: h
					}, o().createElement(p.J, {
						type: "caret-down",
						label: T("common.more"),
						size: 12
					})),
					menu: _
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				v: function() {
					return i
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../node_modules/@cloudflare/elements/es/index.js"),
				p = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = n("../react/common/hooks/useIntersectionObserver.ts");

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
					const u = g.current;
					if (u) {
						const {
							bottom: c
						} = u.getBoundingClientRect();
						c > window.innerHeight && r(!0)
					}
				}, []);
				const s = (0, l.S)(u => {
					for (const c of u) c.intersectionRatio < 1 && r(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const u = g.current;
					if (u && s) return s.observe(u), () => {
						s.unobserve(u)
					}
				}, [s]), o().createElement(a.ZC, m({
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
		"../react/common/components/Dropdown/MenuItem.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				s: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = n.n(p);

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(C) {
					for (var A = 1; A < arguments.length; A++) {
						var h = arguments[A];
						for (var D in h) Object.prototype.hasOwnProperty.call(h, D) && (C[D] = h[D])
					}
					return C
				}, m.apply(this, arguments)
			}

			function i(C, A) {
				if (C == null) return {};
				var h = d(C, A),
					D, T;
				if (Object.getOwnPropertySymbols) {
					var v = Object.getOwnPropertySymbols(C);
					for (T = 0; T < v.length; T++) D = v[T], !(A.indexOf(D) >= 0) && (!Object.prototype.propertyIsEnumerable.call(C, D) || (h[D] = C[D]))
				}
				return h
			}

			function d(C, A) {
				if (C == null) return {};
				var h = {},
					D = Object.keys(C),
					T, v;
				for (v = 0; v < D.length; v++) T = D[v], !(A.indexOf(T) >= 0) && (h[T] = C[T]);
				return h
			}

			function g(C) {
				for (var A = 1; A < arguments.length; A++) {
					var h = arguments[A] != null ? Object(arguments[A]) : {},
						D = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(h).filter(function(T) {
						return Object.getOwnPropertyDescriptor(h, T).enumerable
					})), D.forEach(function(T) {
						t(C, T, h[T])
					})
				}
				return C
			}

			function t(C, A, h) {
				return A = r(A), A in C ? Object.defineProperty(C, A, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[A] = h, C
			}

			function r(C) {
				var A = s(C, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function s(C, A) {
				if (typeof C != "object" || C === null) return C;
				var h = C[Symbol.toPrimitive];
				if (h !== void 0) {
					var D = h.call(C, A || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(C)
			}
			const u = ({
					theme: C
				}) => {
					const A = {
						cursor: "pointer",
						background: C.colors.gray[9],
						color: C.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: C.space[2],
						background: C.colors.background,
						color: C.colors.gray[3],
						fontSize: C.fontSizes[2],
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
							color: C.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				c = (0, a.createComponent)(u, "a"),
				f = (0, a.createComponent)(u, "button");

			function _(C) {
				let {
					disabled: A = !1
				} = C, h = i(C, ["disabled"]);
				const D = (0, p.useHistory)(),
					T = {
						role: "menuitem"
					};
				if ("href" in h && typeof h.href == "string") return o().createElement(c, m({
					"aria-disabled": A
				}, T, h, {
					href: A ? void 0 : h.href,
					onClick: k => {
						var P;
						if (A) return k.stopPropagation();
						k.preventDefault(), (P = h.onClick) === null || P === void 0 || P.call(h, k), D.push(h.href)
					}
				}));
				var v;
				return o().createElement(f, m({
					type: (v = h.type) !== null && v !== void 0 ? v : "button"
				}, T, h, {
					disabled: A
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/prop-types/index.js"),
				p = n.n(a),
				l = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const m = ({
				children: i
			}) => o().createElement(l.xu, {
				height: 411
			}, i);
			m.propTypes = {
				children: p().node
			}, E.Z = m
		},
		"../react/common/components/ModalManager.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
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
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("webpack/sharing/consume/default/react-redux/react-redux");
			const p = f => f.application.modals;
			var l = n("../react/common/actions/modalActions.ts"),
				m = n("../../../../node_modules/swr/core/dist/index.mjs"),
				i = n("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function d() {
				return d = Object.assign ? Object.assign.bind() : function(f) {
					for (var _ = 1; _ < arguments.length; _++) {
						var C = arguments[_];
						for (var A in C) Object.prototype.hasOwnProperty.call(C, A) && (f[A] = C[A])
					}
					return f
				}, d.apply(this, arguments)
			}
			const g = o().createContext(null);
			class t extends o().Component {
				render() {
					const {
						modals: _,
						closeModal: C
					} = this.props;
					return o().createElement(o().Fragment, null, _.map(({
						ModalComponent: A,
						props: h = {},
						id: D
					}) => {
						const T = () => {
							typeof h.onClose == "function" && h.onClose(), C(A)
						};
						return o().createElement(g.Provider, {
							key: D,
							value: {
								closeModal: T
							}
						}, o().createElement(m.J$, {
							value: i.ZP
						}, o().createElement(A, d({}, h, {
							isOpen: !0,
							closeModal: T
						}))))
					}))
				}
			}

			function r() {
				const f = o().useContext(g);
				if (!f) throw new Error("useModalContext must be used within a ModalContext");
				return f
			}

			function s() {
				const f = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(..._) {
						return f(l.openModal(..._))
					}, [f]),
					closeModal: (0, e.useCallback)(function(..._) {
						return f(l.closeModal(..._))
					}, [f])
				}
			}
			var c = (0, a.connect)(f => ({
				modals: p(f)
			}), l)(t)
		},
		"../react/common/components/Page.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				Z: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function p(l) {
				return o().createElement(a.T3, l)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(W, E, n) {
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
					return l
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
				l = "from",
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
		"../react/common/components/api-tokens/sparrowEvents.ts": function(W, E, n) {
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

			function a(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(s).filter(function(c) {
						return Object.getOwnPropertyDescriptor(s, c).enumerable
					})), u.forEach(function(c) {
						p(t, c, s[c])
					})
				}
				return t
			}

			function p(t, r, s) {
				return r = l(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function l(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var u = s.call(t, r || "default");
					if (typeof u != "object") return u;
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
					o().sendEvent(t, a({}, r || {}))
				},
				g = () => {
					var t;
					return (t = Object.values(i)) === null || t === void 0 ? void 0 : t.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(W, E, n) {
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
		"../react/common/constants/analytics/botScoreSrc.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				EG: function() {
					return a
				},
				Me: function() {
					return m
				},
				Vv: function() {
					return l
				},
				sk: function() {
					return p
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/index.js"),
				o = n("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let a = function(i) {
				return i.NOT_COMPUTED = "not_computed", i.MACHINE_LEARNING = "machine_learning", i.HEURISTICS = "heuristics", i.BEHAVIORAL_ANALYSIS = "behavioral_analysis", i.JS_FINGERPRINTING = "js_fingerprinting", i.VERIFIED_BOT = "verified_bot", i.CLOUDFLARE_SERVICE = "cloudflare_service", i
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
				l = i => Array.isArray(i) ? i.map(d => {
					var g;
					return (g = p[d]) !== null && g !== void 0 ? g : d
				}) : p[i],
				m = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [a.NOT_COMPUTED, a.MACHINE_LEARNING, a.HEURISTICS, a.BEHAVIORAL_ANALYSIS, a.JS_FINGERPRINTING, a.VERIFIED_BOT, a.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
					return g
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
					return u
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
				s = n("../react/common/constants/billing/workers.ts");
			const u = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				FP: function() {
					return e
				},
				Nl: function() {
					return l
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
				l = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Dk: function() {
					return u
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
					return l
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
					return s
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const p = "healthy",
				l = "degraded",
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
				s = "marketing-pt",
				u = () => {
					const A = a.Z.get(s);
					if (!!A) return r[A]
				},
				c = ["gov"],
				f = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				_ = "banner-notification-interactions",
				C = null
		},
		"../react/common/constants/index.ts": function(W, E, n) {
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
		"../react/common/constants/roles.ts": function(W, E, n) {
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
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
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
				a = (l, m, i = !1) => {
					var d;
					return `${m} ${(d=o[l])!==null&&d!==void 0?d:l} ${i?"ruleset":"rule"}${m===e.GET?"s":""}`
				},
				p = () => {
					var l;
					return (l = Object.keys(o).reduce((m, i) => {
						const d = Object.values(e).reduce((g, t) => (g.push(a(i, t)), g.push(a(i, t, !0)), g), []);
						return m.concat(d)
					}, [])) === null || l === void 0 ? void 0 : l.flat()
				}
		},
		"../react/common/hooks/suspenseHelpers.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				bt: function() {
					return i
				},
				nW: function() {
					return l
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const p = "suspenseComplete";

			function l() {
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
				const [g, t] = d;
				o().useLayoutEffect(g, t), m(g)
			}
		},
		"../react/common/hooks/useAccountEntitlement.ts": function(W, E, n) {
			"use strict";
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts");

			function a(p) {
				return (0, e.p4)(l => (0, o.BF)(l, p))
			}
			E.Z = a
		},
		"../react/common/hooks/useAccountId.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				F: function() {
					return l
				}
			});
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/accountSelectors.ts"),
				a = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = n.n(a);

			function l() {
				var m;
				const {
					accountId: i
				} = (0, a.useParams)(), d = (0, e.p4)(o.D0);
				if (i === void 0 && !d) throw new Error("Account ID not found in URL params");
				return (m = i) !== null && m !== void 0 ? m : d == null ? void 0 : d.id
			}
		},
		"../react/common/hooks/useCachedState.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				j: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function p(l, {
				key: m,
				cache: i = a.E,
				ttl: d
			} = {}) {
				var g;
				const t = m !== void 0 && i.get(m),
					[r, s] = (0, e.useState)((g = t) !== null && g !== void 0 ? g : l);
				return [r, c => {
					s(f => (c instanceof Function && (c = c(f)), m !== void 0 && i.set(m, c, d), c))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(W, E, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(a) {
				return (0, e.qf)(a)
			}
			E.Z = o
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				S: function() {
					return a
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function a(p, {
				root: l,
				rootMargin: m,
				threshold: i
			} = {}) {
				const d = (0, e.useRef)(null);

				function g() {
					return d.current === null && (d.current = new IntersectionObserver(p, {
						root: l,
						rootMargin: m,
						threshold: i
					})), d.current
				}
				return (0, e.useEffect)(() => (d.current = new IntersectionObserver(p, {
					root: l,
					rootMargin: m,
					threshold: i
				}), () => {
					var t;
					(t = d.current) === null || t === void 0 || t.disconnect()
				}), [p, l, m, i]), g()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function a(p) {
				const l = (0, e.useRef)(p);
				return (0, e.useEffect)(() => {
					l.current = p
				}, [p]), l.current
			}
			E.Z = a
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(W, E, n) {
			"use strict";
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts");

			function a(p) {
				return (0, e.p4)(l => (0, o.rV)(l, p))
			}
			E.Z = a
		},
		"../react/common/middleware/sparrow/errors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Uh: function() {
					return l
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
				var d = a(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function a(i, d) {
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
			class l extends p {
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
		"../react/common/selectors/accountSelectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				AC: function() {
					return et
				},
				Au: function() {
					return le
				},
				B: function() {
					return ke
				},
				B3: function() {
					return Le
				},
				BG: function() {
					return P
				},
				Bp: function() {
					return Ge
				},
				CV: function() {
					return _t
				},
				D0: function() {
					return D
				},
				DT: function() {
					return B
				},
				EL: function() {
					return ne
				},
				EU: function() {
					return j
				},
				GE: function() {
					return ft
				},
				Ko: function() {
					return F
				},
				Kx: function() {
					return O
				},
				Le: function() {
					return S
				},
				O4: function() {
					return qe
				},
				Ou: function() {
					return J
				},
				Py: function() {
					return st
				},
				QI: function() {
					return rt
				},
				RO: function() {
					return Ae
				},
				T3: function() {
					return mt
				},
				T8: function() {
					return k
				},
				UX: function() {
					return G
				},
				VP: function() {
					return tt
				},
				Xo: function() {
					return He
				},
				Xu: function() {
					return ue
				},
				Yi: function() {
					return dt
				},
				Yj: function() {
					return M
				},
				Zu: function() {
					return ae
				},
				bC: function() {
					return ee
				},
				f8: function() {
					return Q
				},
				hI: function() {
					return it
				},
				hN: function() {
					return L
				},
				hX: function() {
					return Me
				},
				iq: function() {
					return me
				},
				nE: function() {
					return b
				},
				oD: function() {
					return I
				},
				oI: function() {
					return x
				},
				oJ: function() {
					return Z
				},
				tM: function() {
					return Y
				},
				uF: function() {
					return ce
				},
				ut: function() {
					return ze
				},
				vU: function() {
					return ut
				},
				wQ: function() {
					return ye
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				a = n.n(o),
				p = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = n.n(p),
				m = n("../../../../node_modules/reselect/lib/index.js"),
				i = n("../../../../node_modules/moment/moment.js"),
				d = n.n(i),
				g = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				s = n("../react/common/selectors/entitlementsSelectors.ts"),
				u = n("../react/app/components/DeepLink/selectors.ts"),
				c = n("../react/common/constants/roles.ts"),
				f = n("../react/common/utils/hasRole.ts");

			function _(V) {
				for (var se = 1; se < arguments.length; se++) {
					var Ee = arguments[se] != null ? Object(arguments[se]) : {},
						Oe = Object.keys(Ee);
					typeof Object.getOwnPropertySymbols == "function" && Oe.push.apply(Oe, Object.getOwnPropertySymbols(Ee).filter(function(Re) {
						return Object.getOwnPropertyDescriptor(Ee, Re).enumerable
					})), Oe.forEach(function(Re) {
						C(V, Re, Ee[Re])
					})
				}
				return V
			}

			function C(V, se, Ee) {
				return se = A(se), se in V ? Object.defineProperty(V, se, {
					value: Ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[se] = Ee, V
			}

			function A(V) {
				var se = h(V, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function h(V, se) {
				if (typeof V != "object" || V === null) return V;
				var Ee = V[Symbol.toPrimitive];
				if (Ee !== void 0) {
					var Oe = Ee.call(V, se || "default");
					if (typeof Oe != "object") return Oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(V)
			}
			const D = V => {
					const se = ce(V);
					return se == null ? void 0 : se.account
				},
				T = V => {
					const se = (0, r.PR)(V);
					if (se) {
						const Ee = se.id;
						return V.accountAccess[Ee] || {}
					}
					return {}
				},
				v = V => V.accountsDetailed,
				k = (0, t.P1)("accountsDetailed", v),
				P = V => V.memberships,
				b = (0, m.P1)((0, t.P1)("memberships", P), u.U, (V, se) => !!se && !!V ? V.filter(Ee => se.includes(Ee.id)) : V),
				L = V => V.accountFlags && V.accountFlags.data,
				O = V => V.accountFlags,
				S = (V, se, Ee) => {
					const Oe = L(V);
					return !Oe || !Oe[se] ? null : Oe[se][Ee]
				},
				U = V => V.accountFlags.isRequesting,
				x = (V, ...se) => a()(V, ["accountFlagsChanges", "data", ...se]),
				Q = V => V.accountFlagsChanges.isRequesting,
				oe = (0, m.P1)(L, O, (V, se) => ({
					data: V,
					meta: se
				})),
				pe = (V, se, Ee) => !!(isEnterpriseSSEnabledSelector(V) && S(V, se, Ee)),
				ue = V => V.membership,
				ce = (0, t.P1)("membership", ue),
				H = (0, m.P1)(ce, ue, (V, se) => ({
					data: V,
					meta: se
				})),
				J = V => {
					const {
						roles: se = []
					} = ce(V) || {};
					return Boolean(se.find(Ee => Ee === "Super Administrator - All Privileges" || Ee === "Billing"))
				},
				Y = V => {
					const se = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, f.n)(V, se)
				},
				I = V => {
					const se = T(V),
						Ee = he.getMemberships(V) ? l().asMutable(he.getMemberships(V)) : [];
					if (!!Ee) return l().from(Ee.map(Oe => _({}, Oe, {
						lastSeen: se[Oe.account.id] ? se[Oe.account.id].lastSeen : null
					})).sort((Oe, Re) => Oe.lastSeen && Re.lastSeen ? Re.lastSeen - Oe.lastSeen : 0))
				},
				G = V => V.filteredMemberships,
				ne = (0, t.P1)("filteredMemberships", G),
				ae = (0, m.P1)(ce, V => V == null ? void 0 : V.permissions),
				M = (0, m.P1)(ae, V => (0, e.Z)(se => {
					var Ee;
					return (Ee = V == null ? void 0 : V[se]) !== null && Ee !== void 0 ? Ee : {
						read: !1,
						edit: !1
					}
				})),
				F = (0, m.P1)(ce, V => V == null ? void 0 : V.policies),
				B = (V, se, Ee) => {
					let Oe = he.getMembership(V);
					if (!Oe) {
						const Re = he.getMemberships(V);
						if (!Re || !se) return !1;
						Oe = Re.find(je => je.account.id === se)
					}
					if (!Oe || !Ee) return !1;
					try {
						return Ee(Oe.permissions)
					} catch {
						return !1
					}
				},
				z = V => {
					var se, Ee;
					return (se = (Ee = D(V)) === null || Ee === void 0 ? void 0 : Ee.meta.has_pro_zones) !== null && se !== void 0 ? se : !1
				},
				j = V => {
					var se, Ee;
					return (se = (Ee = D(V)) === null || Ee === void 0 ? void 0 : Ee.meta.has_business_zones) !== null && se !== void 0 ? se : !1
				},
				ee = V => j(V) || z(V),
				ie = (V, se) => {
					const Ee = _e(V, se);
					return !!Ee && !!Ee.enabled
				},
				_e = (V, se) => {
					const Ee = he.getMembership(V),
						Oe = Ee && Ee.account;
					return Oe && Oe.legacy_flags && Oe.legacy_flags[se]
				},
				ye = V => ie(V, "custom_pages"),
				Te = V => !!V && V["webhooks.webhooks.enabled"],
				Pe = V => S(V, "bots", "enabled"),
				we = V => S(V, "billing", "annual_subscriptions_enable"),
				Ae = V => V ? Boolean(S(V, "ConstellationAI", "v2_ui")) : !1,
				Me = V => V ? Boolean(S(V, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				ke = V => V ? Boolean(S(V, "AIgateway", "enabled")) : !1,
				Se = V => _e(V, "enterprise_zone_quota"),
				K = V => {
					const se = Se(V);
					return !se || !se.available ? -1 : se.available
				},
				me = V => V.accountMembers,
				Le = (0, t.P1)("accountMembers", me),
				qe = V => V.accountMember && V.accountMember.isRequesting,
				ot = V => V.accountRoles,
				et = (0, t.P1)("accountRoles", ot),
				st = (V, se) => {
					const Ee = he.getMemberships(V),
						Oe = Ee && Ee.find(R => R.account.id === se);
					if (Oe) return Oe.account.name.replace(" Account", " account");
					const Re = he.getMembership(V),
						je = Re && Re.account;
					return je && je.id === se ? je.name : null
				},
				ze = (V, se) => {
					const Ee = he.getMemberships(V),
						Oe = Ee && Ee.find(R => R.account.id === se);
					if (Oe) return Oe.account.settings.access_approval_expiry;
					const Re = he.getMembership(V),
						je = Re && Re.account;
					return je && je.id === se ? je.settings.access_approval_expiry : null
				},
				He = (V, se) => {
					const Ee = ze(V, se);
					return Ee ? d().utc(Ee).isAfter() : !1
				},
				mt = (V, se, Ee) => {
					const Oe = ze(V, se);
					let Re = Oe ? d().utc(Oe) : null;
					return !Re || !Re.isAfter() ? "" : Re && Re.year() === 3e3 ? Ee("account.access_approval.card_expiration_forever") : Ee("account.access_approval.card_expiration_text", {
						expiryTimestamp: Re.local().format(g.U.DateTime)
					})
				},
				Z = V => V && V.member && V.member.edit,
				le = (V, se) => {
					const Ee = he.getMembership(V),
						Oe = Ee && Ee.account;
					return Oe ? Oe.id !== se : !1
				},
				Ce = V => V.dpa,
				Fe = (0, t.P1)("dpa", Ce),
				We = V => V.webhook,
				Be = V => V.webhooks,
				Ze = (0, t.P1)("webhook", Be),
				tt = V => V.accountLegoContract,
				lt = (0, t.P1)("accountLegoContract", tt),
				rt = V => {
					const se = lt(V);
					return (se == null ? void 0 : se.lego_state) ? se.lego_state : ""
				},
				gt = V => rt(V) === "signed",
				ft = V => tt(V).isRequesting,
				ut = V => {
					const se = lt(V);
					return se && se.subscription_type ? se.subscription_type : ""
				},
				Ue = V => ut(V) !== "",
				he = {
					getMembership: ce,
					getMemberships: b,
					getFilteredMemberships: ne,
					getAccountMembers: Le,
					getAccountRoles: et
				},
				Ge = V => V.accountSingle,
				dt = (0, t.P1)("accountSingle", Ge),
				it = V => {
					const se = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, c.V.ADMINISTRATOR];
					return (0, f.n)(V, se)
				},
				_t = V => (0, f.n)(V, [c.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$f: function() {
					return c
				},
				AD: function() {
					return l
				},
				BF: function() {
					return u
				},
				Bs: function() {
					return D
				},
				Ci: function() {
					return ae
				},
				DA: function() {
					return Me
				},
				E6: function() {
					return s
				},
				Gy: function() {
					return Pe
				},
				Hq: function() {
					return Te
				},
				Ms: function() {
					return k
				},
				Nb: function() {
					return ye
				},
				Pj: function() {
					return Ae
				},
				Q2: function() {
					return m
				},
				Qq: function() {
					return ee
				},
				Td: function() {
					return A
				},
				Z: function() {
					return B
				},
				a: function() {
					return h
				},
				a5: function() {
					return j
				},
				c7: function() {
					return ie
				},
				du: function() {
					return d
				},
				ec: function() {
					return Q
				},
				f: function() {
					return _e
				},
				hL: function() {
					return z
				},
				ji: function() {
					return M
				},
				jo: function() {
					return P
				},
				l9: function() {
					return Se
				},
				lI: function() {
					return p
				},
				p1: function() {
					return _
				},
				pK: function() {
					return we
				},
				pf: function() {
					return t
				},
				qR: function() {
					return C
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
					return F
				}
			});
			var e = n("../react/utils/url.ts");

			function o(K, me) {
				return K && K[me]
			}
			const a = K => !p(K).isRequesting;

			function p(K) {
				return K.entitlements.zone
			}

			function l(K) {
				return p(K).data
			}
			const m = K => {
				var me, Le;
				return ((me = p(K).paginationData) === null || me === void 0 || (Le = me.options) === null || Le === void 0 ? void 0 : Le.editedDate) || {}
			};

			function i(K, me) {
				const Le = l(K);
				return Le ? o(Le, me) : void 0
			}
			const d = (K, me) => i(K, me) === !0;

			function g(K) {
				return K.entitlements.account
			}

			function t(K) {
				return g(K).data
			}
			const r = K => {
				var me, Le;
				return ((me = g(K).paginationData) === null || me === void 0 || (Le = me.options) === null || Le === void 0 ? void 0 : Le.editedDate) || {}
			};

			function s(K) {
				return !g(K).isRequesting
			}

			function u(K, me) {
				const Le = t(K);
				return Le ? o(Le, me) : void 0
			}

			function c(K, me) {
				return u(K, me) === !0
			}

			function f(K, me) {
				return me.every(Le => c(K, Le))
			}

			function _(K) {
				return c(K, "contract.customer_enabled")
			}

			function C(K) {
				return c(K, "contract.self_service_allowed")
			}

			function A(K) {
				return c(K, "billing.partners_managed")
			}
			const h = K => _(K) && C(K),
				D = K => c(K, "enterprise.ecp_allowed");

			function T(K) {
				return v(K) || c(K, "argo.allow_smart_routing") || c(K, "argo.allow_tiered_caching") || c(K, "rate_limiting.enabled") || c(K, "ctm.enabled") || c(K, "workers.enabled") || c(K, "workers.kv_store.enabled") || c(K, "stream.enabled")
			}
			const v = K => d(K, "argo.allow_smart_routing") || d(K, "argo.allow_tiered_caching"),
				k = K => c(K, "zone.cname_setup_allowed") || c(K, "zone.partial_setup_allowed") || d(K, "zone.partial_setup_allowed"),
				P = K => c(K, "argo.allow_smart_routing") || d(K, "argo.allow_smart_routing"),
				b = K => c(K, "argo.allow_tiered_caching") || d(K, "argo.allow_tiered_caching"),
				L = K => P(K) || b(K),
				O = K => c(K, "ctm.enabled"),
				S = K => {
					const me = u(K, "ctm.load_balancers");
					return typeof me == "number" ? me : 0
				},
				U = K => {
					const me = u(K, "ctm.pools");
					return typeof me == "number" ? me : 0
				},
				x = K => {
					const me = u(K, "ctm.origins");
					return typeof me == "number" ? me : 0
				},
				Q = K => c(K, "workers.enabled"),
				oe = K => c(K, "stream.enabled"),
				pe = K => {
					const me = u(K, "access.users_allowed");
					return typeof me == "number" ? me : 0
				},
				ue = K => pe(K) > 0,
				ce = K => {
					const me = i(K, "dedicated_certificates");
					return typeof me == "number" ? me : 0
				},
				H = K => ce(K) > 0,
				J = K => {
					const me = i(K, "rate_limiting.max_rules");
					return typeof me == "number" ? me : 0
				},
				Y = K => c(K, "rate_limiting.enabled"),
				I = K => {
					const me = i(K, "page_rules");
					return typeof me == "number" ? me : 0
				},
				G = K => I(K) > 0,
				ne = K => {
					const me = u(K, "dns_firewall.max_clusters_allowed");
					return typeof me == "number" ? me : 0
				},
				ae = K => ne(K) > 0,
				M = K => d(K, "zone.advanced_certificate_manager") || c(K, "zone.advanced_certificate_manager"),
				F = K => i(K, "authoritative_dns.proxy_record_allowed") === !1 || u(K, "authoritative_dns.proxy_record_allowed") === !1,
				B = K => c(K, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				z = K => i(K, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				j = K => {
					const me = i(K, "authoritative_dns.min_record_ttl_allowed");
					return typeof me == "number" && me > 1 ? me : 60
				},
				ee = K => c(K, "foundation_dns.advanced_nameservers_allowed") || d(K, "foundation_dns.advanced_nameservers_allowed"),
				ie = K => c(K, "account_custom_ns.allowed"),
				_e = (K, me) => ((0, e.el)(window.location.pathname) ? i : u)(K, me),
				ye = K => ((0, e.el)(window.location.pathname) ? l : t)(K),
				Te = K => c(K, "authoritative_dns.multi_provider_allowed") || d(K, "authoritative_dns.multi_provider_allowed"),
				Pe = K => d(K, "authoritative_dns.cname_flattening_allowed"),
				we = K => c(K, "secondary_dns.secondary_overrides") || d(K, "secondary_dns.secondary_overrides"),
				Ae = K => c(K, "authoritative_dns.custom_soa_allowed") || d(K, "authoritative_dns.custom_soa_allowed"),
				Me = K => c(K, "authoritative_dns.custom_ns_ttl_allowed") || d(K, "authoritative_dns.custom_ns_ttl_allowed"),
				ke = K => c(K, "secondary.create_zone"),
				Se = K => ee(K) || ie(K) || Te(K) || ke(K) || we(K) || Ae(K) || Me(K)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				r: function() {
					return l
				},
				v: function() {
					return m
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts"),
				a = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = n("../react/utils/bootstrap.ts");
			const l = i => {
				if ((0, p.gm)()) return a.Z.set(e.ly, e.ZW), e.ZW;
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
		"../react/common/selectors/userSelectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$8: function() {
					return l
				},
				BG: function() {
					return g
				},
				BY: function() {
					return h
				},
				GP: function() {
					return c
				},
				GU: function() {
					return D
				},
				PR: function() {
					return a
				},
				h$: function() {
					return C
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
			const o = T => T.user,
				a = (0, e.P1)("user", o),
				p = T => {
					var v;
					return (v = a(T)) === null || v === void 0 ? void 0 : v.email.endsWith("@cloudflare.com")
				},
				l = T => {
					var v;
					return !!((v = a(T)) === null || v === void 0 ? void 0 : v.id)
				},
				m = T => {
					const v = a(T);
					if (!!v) return v.first_name && v.last_name ? `${v.first_name} ${v.last_name}` : v.email
				},
				i = T => {
					const v = a(T);
					return v && v.has_enterprise_zones
				},
				d = T => T.userCommPreferences,
				g = (0, e.P1)("userCommPreferences", d),
				t = T => {
					const v = a(T);
					return v && v.email_verified
				},
				r = T => {
					const v = g(T);
					return v && v.preferences.marketing_communication
				},
				s = T => T.userDetails,
				u = (0, e.P1)("userDetails", s),
				c = T => {
					const v = u(T);
					return v && v["2FA-RECOVERY"] === "scheduled"
				},
				f = T => {
					const v = u(T);
					return v && v["2FA-RECOVERY"] === "interrupted"
				},
				_ = T => {
					const v = u(T);
					return v == null ? void 0 : v["NEW-USER-EMAIL"]
				},
				C = T => T.gates.assignments,
				A = (T, v) => T && T[v];

			function h(T, v) {
				const k = C(T);
				return k ? A(k, v) : void 0
			}
			const D = (T, v) => h(T, v) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$4: function() {
					return k
				},
				$t: function() {
					return et
				},
				A4: function() {
					return _
				},
				Cu: function() {
					return C
				},
				DQ: function() {
					return ee
				},
				Ej: function() {
					return b
				},
				FH: function() {
					return h
				},
				ID: function() {
					return Y
				},
				Ko: function() {
					return Ae
				},
				Le: function() {
					return ye
				},
				Ly: function() {
					return ae
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
					return G
				},
				Ox: function() {
					return He
				},
				P4: function() {
					return L
				},
				RO: function() {
					return H
				},
				Tr: function() {
					return we
				},
				U: function() {
					return A
				},
				Ug: function() {
					return T
				},
				V6: function() {
					return Le
				},
				WR: function() {
					return mt
				},
				Xg: function() {
					return f
				},
				ZB: function() {
					return _e
				},
				_y: function() {
					return I
				},
				cU: function() {
					return Me
				},
				cg: function() {
					return j
				},
				d2: function() {
					return oe
				},
				il: function() {
					return ne
				},
				jN: function() {
					return S
				},
				jg: function() {
					return F
				},
				kC: function() {
					return P
				},
				kf: function() {
					return qe
				},
				ko: function() {
					return ce
				},
				mK: function() {
					return st
				},
				nA: function() {
					return c
				},
				oY: function() {
					return O
				},
				qM: function() {
					return Te
				},
				rq: function() {
					return B
				},
				tS: function() {
					return v
				},
				tU: function() {
					return x
				},
				vB: function() {
					return ze
				},
				vM: function() {
					return U
				},
				wH: function() {
					return D
				},
				wn: function() {
					return ie
				},
				xU: function() {
					return Q
				},
				xw: function() {
					return Pe
				},
				z5: function() {
					return J
				},
				zO: function() {
					return ke
				},
				zW: function() {
					return ot
				},
				zh: function() {
					return pe
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				a = n("../../../../node_modules/lodash/get.js"),
				p = n.n(a),
				l = n("../../../../node_modules/moment/moment.js"),
				m = n.n(l),
				i = n("../react/common/constants/billing/index.ts");

			function d(Z) {
				for (var le = 1; le < arguments.length; le++) {
					var Ce = arguments[le] != null ? Object(arguments[le]) : {},
						Fe = Object.keys(Ce);
					typeof Object.getOwnPropertySymbols == "function" && Fe.push.apply(Fe, Object.getOwnPropertySymbols(Ce).filter(function(We) {
						return Object.getOwnPropertyDescriptor(Ce, We).enumerable
					})), Fe.forEach(function(We) {
						g(Z, We, Ce[We])
					})
				}
				return Z
			}

			function g(Z, le, Ce) {
				return le = t(le), le in Z ? Object.defineProperty(Z, le, {
					value: Ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[le] = Ce, Z
			}

			function t(Z) {
				var le = r(Z, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function r(Z, le) {
				if (typeof Z != "object" || Z === null) return Z;
				var Ce = Z[Symbol.toPrimitive];
				if (Ce !== void 0) {
					var Fe = Ce.call(Z, le || "default");
					if (typeof Fe != "object") return Fe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(Z)
			}
			const s = (0, o.P1)("zone", Z => Z.zone),
				u = Z => {
					var le;
					return (le = Z.zoneVersioning) === null || le === void 0 ? void 0 : le.zoneVersionSelector
				},
				c = (0, e.P1)(s, u, (Z, le) => {
					var Ce, Fe, We;
					let Be;
					if (Array.isArray(Z) && Z.length === 1 ? Be = Z[0] : Z && !Array.isArray(Z) && (Be = Z), !Be) return;
					const Ze = !!(le == null ? void 0 : le.enabled);
					return d({}, Be, Be.name && {
						name: Ze ? le.rootZoneName : Be.name
					}, {
						versioning: {
							enabled: Ze,
							isRoot: !((Ce = Be.name) === null || Ce === void 0 ? void 0 : Ce.endsWith(".config.cfdata.org")),
							version: Ze ? le.selectedVersion : 0,
							rootZoneId: Ze ? le.rootZoneId : (Fe = (We = Be) === null || We === void 0 ? void 0 : We.id) !== null && Fe !== void 0 ? Fe : ""
						}
					})
				}),
				f = Z => Z.zone,
				_ = (0, e.P1)(c, f, (Z, le) => ({
					data: Z,
					meta: le
				})),
				C = Z => {
					var le, Ce;
					return (le = (Ce = c(Z)) === null || Ce === void 0 ? void 0 : Ce.id) !== null && le !== void 0 ? le : ""
				},
				A = Z => Z.zones,
				h = Z => Z.zonesRoot,
				D = Z => Z.zonesAccount,
				T = (0, o.P1)("zones", A),
				v = (0, o.P1)("zonesRoot", h),
				k = (0, o.P1)("zonesAccount", D);

			function P(Z) {
				const le = c(Z);
				return le ? le.created_on : null
			}

			function b(Z, le, Ce) {
				const Fe = P(Z);
				if (!Fe) return;
				const We = m().duration(le, Ce),
					Be = new Date(Fe),
					Ze = new Date(new Date().getTime() - We.asMilliseconds());
				return Be.getTime() > Ze.getTime()
			}

			function L(Z) {
				const le = c(Z);
				return le ? le.status : null
			}

			function O(Z) {
				const le = c(Z);
				return le ? le.type : null
			}

			function S(Z) {
				return (Z == null ? void 0 : Z.plan_pending) ? Z == null ? void 0 : Z.plan_pending : Z == null ? void 0 : Z.plan
			}

			function U(Z) {
				const le = c(Z);
				if (!le) return;
				const Ce = S(le);
				return Ce && Ce.legacy_id
			}

			function x(Z, le) {
				const Ce = S(Z);
				return !!Ce && i.Gs.indexOf(Ce.legacy_id) >= i.Gs.indexOf(le)
			}

			function Q(Z) {
				return !!Z && Z.status === "initializing"
			}

			function oe(Z) {
				return !!Z && Z.status === "pending"
			}

			function pe(Z) {
				return !!Z && Z.status === "active"
			}

			function ue(Z, le) {
				if (!Z) return !1;
				const Ce = S(Z);
				return !!Ce && Ce.legacy_id === le
			}

			function ce(Z) {
				return ue(Z, "enterprise")
			}
			const H = Z => ce(c(Z));

			function J(Z) {
				return ue(Z, "business")
			}
			const Y = Z => J(c(Z));

			function I(Z) {
				return ue(Z, "pro")
			}

			function G(Z) {
				return ue(Z, "free")
			}
			const ne = Z => G(c(Z));

			function ae(Z) {
				return !ce(Z)
			}

			function M(Z) {
				return Z && Z.owner
			}

			function F(Z, le) {
				const Ce = M(le);
				return !!Ce && Ce.type === "user" && Ce.id === Z.id
			}

			function B(Z) {
				const le = c(Z);
				return !!le && le.type === "partial"
			}

			function z(Z) {
				const le = c(Z);
				return !!le && le.type === "secondary"
			}
			const j = Z => {
					var le;
					const Ce = c(Z);
					return !!(Ce == null ? void 0 : Ce.host) && !!((le = Ce.plan) === null || le === void 0 ? void 0 : le.externally_managed)
				},
				ee = Z => {
					const le = T(Z);
					return le && le.some(ce)
				},
				ie = (Z, le) => {
					const Ce = c(Z);
					return Ce && Ce.betas ? Ce.betas.includes(le) : !1
				},
				_e = (Z, ...le) => p()(Z, ["zoneFlags", "data", ...le]),
				ye = (Z, ...le) => p()(Z, ["accountFlags", "data", ...le]),
				Te = Z => Z.accountFlags.isRequesting,
				Pe = Z => Z.zoneFlags.isRequesting,
				we = (Z, ...le) => p()(Z, ["zoneFlagsChanges", "data", ...le]),
				Ae = Z => Z.zoneFlagsChanges.isRequesting,
				Me = Z => Z.zoneFlags && Z.zoneFlags.data,
				ke = Z => Z.zoneFlags,
				Se = (0, e.P1)(Me, ke, (Z, le) => ({
					data: Z,
					meta: le
				})),
				K = (0, o.P1)("abuseUrls", Z => Z.overview.abuseUrls),
				me = Z => {
					const le = c(Z);
					return le ? `/${le.account.id}/${le.name}` : null
				},
				Le = Z => Z.zoneMarketingCampaigns,
				qe = Z => Z.overview.zoneBlocks.data,
				ot = Z => Z.overview.zoneBlocks.isRequesting,
				et = Z => Z.overview.zoneBlocks.hasData,
				st = Z => {
					var le, Ce;
					return (Z == null || (le = Z.overview.zoneBlocks) === null || le === void 0 || (Ce = le.paginationData) === null || Ce === void 0 ? void 0 : Ce.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				ze = Z => Z.overview.zoneBlocksReview.isRequesting,
				He = Z => Z.overview.zoneHold,
				mt = (0, o.P1)("zoneHold", He)
		},
		"../react/common/utils/formatDate.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			E.Z = (o, a, p = !1) => (0, e.p6)(o, a, p)
		},
		"../react/common/utils/hasRole.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				n: function() {
					return o
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts");
			const o = (a, p) => {
				const {
					roles: l = []
				} = (0, e.uF)(a) || {};
				return p.some(m => l.includes(m))
			}
		},
		"../react/common/utils/isGuards.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
					return l
				}
			});
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const a = i => i ? ["page", "per_page", "count", "total_count"].every(g => g in i && i[g]) : !1,
				p = (i = "") => e.Dy.includes(i.toLowerCase()),
				l = i => i !== null && typeof i == "object" && "name" in i && "size" in i && "type" in i && typeof i.slice == "function",
				m = i => (0, o.Z)(i)
		},
		"../react/common/utils/useQueryCache.ts": function(W, E, n) {
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
						a(i, r, g[r])
					})
				}
				return i
			}

			function a(i, d, g) {
				return d = p(d), d in i ? Object.defineProperty(i, d, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = g, i
			}

			function p(i) {
				var d = l(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function l(i, d) {
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
					g = h => {
						var D;
						return d.getQueriesData((D = h) !== null && D !== void 0 ? D : i)
					},
					t = h => {
						var D;
						return d.getQueryData((D = h) !== null && D !== void 0 ? D : i)
					},
					r = h => {
						var D;
						return d.getQueriesData({
							queryKey: (D = h) !== null && D !== void 0 ? D : i,
							stale: !0
						})
					},
					s = (h, D) => {
						var T;
						d.setQueryData((T = D) !== null && T !== void 0 ? T : i, h)
					},
					u = async h => {
						var D;
						await d.refetchQueries((D = h) !== null && D !== void 0 ? D : i)
					}, c = async (h, D) => {
						var T, v;
						await d.invalidateQueries((T = h) !== null && T !== void 0 ? T : i, o({
							refetchActive: !1
						}, (v = D) !== null && v !== void 0 ? v : {}))
					}, f = async (h, D) => {
						const T = h || (v => {
							var k;
							return (v == null || (k = v.queryKey) === null || k === void 0 ? void 0 : k[0]) === i
						});
						await d.invalidateQueries(o({
							predicate: T,
							refetchActive: !1,
							refetchInactive: !1
						}, D))
					};
				return {
					refetch: u,
					cancelData: async () => {
						await d.cancelQueries(i)
					},
					invalidate: c,
					setData: s,
					getDataStale: r,
					getData: g,
					prefetchQuery: (h, D) => {
						var T;
						return d.prefetchQuery((T = D) !== null && T !== void 0 ? T : i, h)
					},
					getQueryData: t,
					predicateInvalidate: f,
					batchInvalidate: async ({
						queryKeysToInvalidate: h = [],
						queryKeysToPredicateInvalidate: D = [],
						refetchActive: T = !1,
						refetchInactive: v = !1
					}) => {
						const k = h.map(b => c(b)),
							P = D.map(b => f(L => {
								var O;
								return (L == null || (O = L.queryKey) === null || O === void 0 ? void 0 : O[0]) === b
							}, {
								refetchActive: T,
								refetchInactive: v
							}));
						await Promise.all([...k, ...P])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(W, E, n) {
			"use strict";
			n.d(E, {
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
					return l
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = g => /^https?:\/\/(.*)/.test(g),
				a = g => e.default.hostname.test(g),
				p = g => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(g),
				l = g => /^[!-~]+$/.test(g),
				m = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				i = g => m.test(g),
				d = g => !!g && !!g.length && /^[ -~]+$/.test(g)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(W, E, n) {
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
					return a
				},
				qc: function() {
					return l
				},
				w9: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e);
			const a = s => o().utc(s).format("YYYY-MM-DD"),
				p = s => o().utc(s).format(),
				l = s => o().utc(s).startOf("minute").format(),
				m = s => new Date(s),
				i = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				d = s => {
					const u = s / 60 / 60 / 1e3;
					return i[Object.keys(i).sort((c, f) => f - c).find(c => u >= c)]
				},
				g = (s, u = c => c.avg && c.avg.sampleInterval ? c.avg.sampleInterval : 1) => s.length === 0 ? 1 : s.reduce((c, f) => c + u(f), 0) / s.length,
				t = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = s => t[s]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Jz: function() {
					return g
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
					return d
				},
				w6: function() {
					return s
				},
				yc: function() {
					return t
				}
			});

			function e(c) {
				for (var f = 1; f < arguments.length; f++) {
					var _ = arguments[f] != null ? Object(arguments[f]) : {},
						C = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(_).filter(function(A) {
						return Object.getOwnPropertyDescriptor(_, A).enumerable
					})), C.forEach(function(A) {
						o(c, A, _[A])
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
					var C = _.call(c, f || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(c)
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
				d = {
					status: l.Sending
				},
				g = {
					status: l.Success,
					statusCode: m.Success
				},
				t = {
					status: l.Failed,
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
				u = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Ux: function() {
					return r
				},
				cz: function() {
					return u
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
			var e = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(_) {
				for (var C = 1; C < arguments.length; C++) {
					var A = arguments[C] != null ? Object(arguments[C]) : {},
						h = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(A).filter(function(D) {
						return Object.getOwnPropertyDescriptor(A, D).enumerable
					})), h.forEach(function(D) {
						a(_, D, A[D])
					})
				}
				return _
			}

			function a(_, C, A) {
				return C = p(C), C in _ ? Object.defineProperty(_, C, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[C] = A, _
			}

			function p(_) {
				var C = l(_, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function l(_, C) {
				if (typeof _ != "object" || _ === null) return _;
				var A = _[Symbol.toPrimitive];
				if (A !== void 0) {
					var h = A.call(_, C || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(_)
			}
			const m = _ => _.test(window.location.hostname),
				i = () => m(e.j9),
				d = () => m(MARKETPLACE_LOCAL_URL_REGEXP),
				g = (_, C) => {
					const A = random(0, 1) ? -1 : 1;
					return _.points === C.points || _.points >= APP_POINTS_THRESHOLD && C.points >= APP_POINTS_THRESHOLD ? A : _.points < 0 || C.points < 0 || _.points >= APP_POINTS_THRESHOLD || C.points >= APP_POINTS_THRESHOLD ? C.points - _.points : A
				},
				t = (_, C, A) => {
					const h = get(C, A),
						D = get(_, A);
					return h && !isEqual(h, D)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (_, C) => C.map(A => _.find(h => h.id === A)),
						addAppVersionInfo: (_, C) => o({}, C, {
							currentVersion: C.versions.find(A => A.tag === _.versionTag),
							latestVersion: C.versions.find(A => A.tag === C.infoVersion)
						}),
						addCurrentSiteInstall: (_, C) => o({}, C, {
							currentSiteInstall: _.find(A => A.appId === C.id)
						})
					}
				},
				s = (_, C, A) => o({}, _, C, A ? {
					value: A
				} : {}),
				u = _ => _.map(C => C.status),
				c = _ => _.apps ? _.apps : _,
				f = _ => {
					let C = ["by-cloudflare"];
					return _.filter(A => !C.includes(A.id) && A.visible).sort((A, h) => A.points < h.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(W, E, n) {
			"use strict";
			n.r(E), n.d(E, {
				categorySlugTranslationKey: function() {
					return l
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
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
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

			function l(m) {
				const i = m.replace(/-/g, "_");
				return Object.keys(o).includes(i) ? i : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				L: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/url-join/lib/url-join.js"),
				o = n.n(e),
				a = n("../../../../node_modules/lodash-es/defaults.js"),
				p = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function l(u) {
				for (var c = 1; c < arguments.length; c++) {
					var f = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(f).filter(function(C) {
						return Object.getOwnPropertyDescriptor(f, C).enumerable
					})), _.forEach(function(C) {
						d(u, C, f[C])
					})
				}
				return u
			}

			function m(u, c) {
				if (u == null) return {};
				var f = i(u, c),
					_, C;
				if (Object.getOwnPropertySymbols) {
					var A = Object.getOwnPropertySymbols(u);
					for (C = 0; C < A.length; C++) _ = A[C], !(c.indexOf(_) >= 0) && (!Object.prototype.propertyIsEnumerable.call(u, _) || (f[_] = u[_]))
				}
				return f
			}

			function i(u, c) {
				if (u == null) return {};
				var f = {},
					_ = Object.keys(u),
					C, A;
				for (A = 0; A < _.length; A++) C = _[A], !(c.indexOf(C) >= 0) && (f[C] = u[C]);
				return f
			}

			function d(u, c, f) {
				return c = g(c), c in u ? Object.defineProperty(u, c, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[c] = f, u
			}

			function g(u) {
				var c = t(u, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function t(u, c) {
				if (typeof u != "object" || u === null) return u;
				var f = u[Symbol.toPrimitive];
				if (f !== void 0) {
					var _ = f.call(u, c || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(u)
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
						body: C
					} = _, A = m(_, ["body"]);
					return fetch(o()(this.options.baseUrl, f), l({
						method: c
					}, A, C ? {
						body: JSON.stringify(C)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(l({
							Accept: "application/json, text/plain, */*"
						}, _.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(c, f = {}) {
					const _ = await this.request("GET", c, f);
					return this.parseJSONResponse(_)
				}
				async postJSON(c, f = {}) {
					const _ = await this.request("POST", c, l({}, f, {
						headers: l({}, f.headers, {
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
		"../react/pages/apps/marketplace/requests/common.ts": function(W, E, n) {
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
				a = n("../../../../node_modules/query-string/query-string.js"),
				p = n.n(a),
				l = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				m = n("../react/pages/apps/marketplace/requests/Requester.ts"),
				i = n("../react/pages/apps/marketplace/libraries/resource.ts");

			function* d(c, f, _, C) {
				const A = (0, e.Z)(f),
					[h, D, T] = [`get${A}Sending`, `get${A}Success`, `get${A}Failed`];
				try {
					yield(0, l.gz)(c[h]());
					const v = yield(0, l.RE)(s, _);
					let k = v;
					if (k.error) {
						yield(0, l.gz)(c[T]());
						return
					}
					return C && (k = yield C(v)), yield(0, l.gz)(c[D](k)), k
				} catch {
					yield(0, l.gz)(c[T]())
				}
			}

			function* g(c, f, _, C) {
				const A = (0, e.Z)(f),
					h = `get${A}Sending`,
					D = `get${A}Success`,
					T = `get${A}Failed`;
				try {
					yield(0, l.gz)(c[h]());
					const v = yield(0, l.RE)(u, {
						url: _,
						data: C
					});
					return yield(0, l.gz)(c[D](v)), v
				} catch {
					yield(0, l.gz)(c[T]())
				}
			}
			const t = c => (0, o.Z)(c) ? "" : `?${a.stringify(c)}`,
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
				s = async c => m.L.fetchJSON(c), u = async c => {
					const {
						url: f,
						data: _
					} = c;
					return m.L.postJSON(f, {
						body: _
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(W, E, n) {
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
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(s).filter(function(c) {
						return Object.getOwnPropertyDescriptor(s, c).enumerable
					})), u.forEach(function(c) {
						a(t, c, s[c])
					})
				}
				return t
			}

			function a(t, r, s) {
				return r = p(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function p(t) {
				var r = l(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function l(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var u = s.call(t, r || "default");
					if (typeof u != "object") return u;
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
							user: s
						} = r;
						return o({}, t, {
							user: s
						});
					case i.CurrentUserFailed:
						return o({}, t);
					case i.SetZone:
						const {
							zone: u
						} = r;
						return o({}, t, {
							zone: u
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
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(W, E, n) {
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

			function a(r) {
				for (var s = 1; s < arguments.length; s++) {
					var u = arguments[s] != null ? Object(arguments[s]) : {},
						c = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(u).filter(function(f) {
						return Object.getOwnPropertyDescriptor(u, f).enumerable
					})), c.forEach(function(f) {
						p(r, f, u[f])
					})
				}
				return r
			}

			function p(r, s, u) {
				return s = l(s), s in r ? Object.defineProperty(r, s, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = u, r
			}

			function l(r) {
				var s = m(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function m(r, s) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var c = u.call(r, s || "default");
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
			const g = {
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
				getAppInfoAssetsSaga: (r, s, u) => ({
					type: d.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: s,
					version: u
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
				getRecommendedAppsSaga: (r, s, u) => ({
					type: d.GetRecommendedAppsSaga,
					appsList: r,
					installsList: s,
					metadata: u
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

			function t(r = e.w6, s) {
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
		"../react/pages/caching/tracking.tsx": function(W, E, n) {
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
		"../react/pages/d1/routes.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				H: function() {
					return a
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
		"../react/pages/dns/dns-records/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
		"../react/pages/email/types.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
			let a = function(l) {
				return l[l.Verified = 0] = "Verified", l[l.Pending = 1] = "Pending", l[l.Missing = 2] = "Missing", l[l.WorkerNotFound = 3] = "WorkerNotFound", l[l.Unknown = 4] = "Unknown", l[l.Loading = 5] = "Loading", l
			}({});
			const p = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/config.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				jk: function() {
					return C
				},
				w8: function() {
					return A
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				p = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function l(h) {
				for (var D = 1; D < arguments.length; D++) {
					var T = arguments[D] != null ? Object(arguments[D]) : {},
						v = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(T).filter(function(k) {
						return Object.getOwnPropertyDescriptor(T, k).enumerable
					})), v.forEach(function(k) {
						m(h, k, T[k])
					})
				}
				return h
			}

			function m(h, D, T) {
				return D = i(D), D in h ? Object.defineProperty(h, D, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[D] = T, h
			}

			function i(h) {
				var D = d(h, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function d(h, D) {
				if (typeof h != "object" || h === null) return h;
				var T = h[Symbol.toPrimitive];
				if (T !== void 0) {
					var v = T.call(h, D || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(h)
			}
			const g = "Notifications",
				t = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${s}/destinations`,
				c = (0, e.BC)`${s}/create`,
				f = (0, e.BC)`${c}/${"alertType"}`,
				_ = (0, e.BC)`${s}/edit/${"alertId"}`,
				C = l({
					account: r,
					alerts: s,
					destinations: u,
					createAlert: c,
					createAlertWithSelection: f,
					editAlert: _
				}, o._j, a._j),
				A = l({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, p.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				_j: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				a = (0, e.BC)`${o}/pagerduty/connect`,
				p = (0, e.BC)`${o}/pagerduty/register`,
				l = (0, e.BC)`${o}/pagerduty`,
				m = {
					pagerDutyConnect: a,
					pagerDutyRegister: p,
					pagerDutyList: l
				};
			var i = null
		},
		"../react/pages/home/alerts/tracking.ts": function(W, E, n) {
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
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(W, E, n) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(W, E, n) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				AA: function() {
					return z
				},
				AN: function() {
					return it
				},
				AY: function() {
					return Ee
				},
				Ac: function() {
					return ge
				},
				Am: function() {
					return C
				},
				B2: function() {
					return Y
				},
				BB: function() {
					return b
				},
				BF: function() {
					return Be
				},
				BQ: function() {
					return he
				},
				E8: function() {
					return V
				},
				Fl: function() {
					return Re
				},
				Fu: function() {
					return S
				},
				Gc: function() {
					return rt
				},
				Hc: function() {
					return Ct
				},
				IO: function() {
					return Ge
				},
				JK: function() {
					return K
				},
				K: function() {
					return v
				},
				LI: function() {
					return Ue
				},
				LX: function() {
					return Fe
				},
				L_: function() {
					return ot
				},
				Ly: function() {
					return Ne
				},
				MR: function() {
					return G
				},
				Mj: function() {
					return ae
				},
				NB: function() {
					return Ke
				},
				Oe: function() {
					return Nt
				},
				Or: function() {
					return F
				},
				P5: function() {
					return Ye
				},
				PE: function() {
					return we
				},
				Pd: function() {
					return Qe
				},
				Pk: function() {
					return Me
				},
				Pp: function() {
					return ze
				},
				Q1: function() {
					return O
				},
				Qr: function() {
					return We
				},
				Qv: function() {
					return Ae
				},
				Rp: function() {
					return ve
				},
				S7: function() {
					return at
				},
				Sh: function() {
					return je
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
					return lt
				},
				Uy: function() {
					return pt
				},
				Vw: function() {
					return x
				},
				W3: function() {
					return Z
				},
				WR: function() {
					return dt
				},
				WX: function() {
					return _e
				},
				XF: function() {
					return _t
				},
				Xb: function() {
					return j
				},
				Zs: function() {
					return qe
				},
				_f: function() {
					return Ze
				},
				b4: function() {
					return ie
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
					return st
				},
				fE: function() {
					return et
				},
				g7: function() {
					return Pe
				},
				hO: function() {
					return mt
				},
				hV: function() {
					return nt
				},
				hk: function() {
					return A
				},
				hr: function() {
					return ee
				},
				it: function() {
					return He
				},
				j3: function() {
					return xe
				},
				jN: function() {
					return Se
				},
				jo: function() {
					return Wt
				},
				k3: function() {
					return Rt
				},
				m8: function() {
					return ce
				},
				nm: function() {
					return R
				},
				oW: function() {
					return se
				},
				pH: function() {
					return H
				},
				pi: function() {
					return ue
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
					return X
				},
				tB: function() {
					return f
				},
				tN: function() {
					return Te
				},
				u_: function() {
					return zt
				},
				vV: function() {
					return tt
				},
				vc: function() {
					return ke
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				o = n.n(e),
				a = n("../../../../node_modules/moment/moment.js"),
				p = n.n(a),
				l = n("../../../common/util/types/src/api/domain.ts"),
				m = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				i = n("../react/utils/url.ts"),
				d = n("../react/pages/home/domain-registration/config.ts"),
				g = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				t = n("../react/pages/home/domain-registration/types.ts");

			function r(y) {
				for (var w = 1; w < arguments.length; w++) {
					var de = arguments[w] != null ? Object(arguments[w]) : {},
						Ie = Object.keys(de);
					typeof Object.getOwnPropertySymbols == "function" && Ie.push.apply(Ie, Object.getOwnPropertySymbols(de).filter(function($e) {
						return Object.getOwnPropertyDescriptor(de, $e).enumerable
					})), Ie.forEach(function($e) {
						s(y, $e, de[$e])
					})
				}
				return y
			}

			function s(y, w, de) {
				return w = u(w), w in y ? Object.defineProperty(y, w, {
					value: de,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[w] = de, y
			}

			function u(y) {
				var w = c(y, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function c(y, w) {
				if (typeof y != "object" || y === null) return y;
				var de = y[Symbol.toPrimitive];
				if (de !== void 0) {
					var Ie = de.call(y, w || "default");
					if (typeof Ie != "object") return Ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(y)
			}

			function f(y) {
				return y.filter(w => w.isSelected).reduce((w, {
					name: de,
					fees: Ie,
					isZoneEntitlementPresent: $e
				}) => $e || !(0, e.isNumber)(Ie == null ? void 0 : Ie.transfer_fee) ? w : ge(de) ? w + (Ie == null ? void 0 : Ie.transfer_fee) * 2 : w + (Ie == null ? void 0 : Ie.transfer_fee), 0)
			}

			function _(y) {
				return y.filter(w => w.registrar.toLowerCase() === "godaddy")
			}
			const C = "MMM D, YYYY";

			function A(y, w, de, Ie) {
				var $e, Et, Tt, At, Bt, Pt, ct, Lt, Ot, It, St, Dt;
				const Xe = y[w.name],
					Vt = () => ge(w.name) ? p()(w.expires_at).add(2, "years").format(C) : p()(w.expires_at).add(1, "year").format(C);
				return r({
					name: w.name,
					zone: Xe,
					entitlements: de,
					registryCheck: Ie,
					nameservers: w.name_servers,
					isAvailable: w.available,
					lastKnownStatus: w.last_known_status,
					authCode: w.auth_code,
					isEnterpriseZone: (Xe == null || ($e = Xe.plan) === null || $e === void 0 ? void 0 : $e.legacy_id) === "enterprise",
					isActiveZone: (Xe == null ? void 0 : Xe.status) === "active",
					corResponsesPending: w.cor_responses_pending,
					isCorLocked: w.cor_locked,
					corLockedUntil: w.cor_locked_until ? p()(w.cor_locked_until).format(C) : null,
					isFullZone: (Xe == null ? void 0 : Xe.type) == t.xd.Full,
					isLocked: w.locked,
					registrar: w.current_registrar || d.JM,
					zoneId: Xe == null ? void 0 : Xe.id,
					currentExpiration: p()(w.expires_at).format(C),
					newExpiration: Vt(),
					lastEntitledAt: w.last_entitled_at ? new Date(w.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(de) && !!de.find(Ut => Ut.id === d.g5 && Ut.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: w.transfer_in && T(w.transfer_in) || t.BJ.Pending,
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
						[t.l2.Registrant]: (Pt = w.contacts) === null || Pt === void 0 || (ct = Pt.registrant) === null || ct === void 0 ? void 0 : ct.id,
						[t.l2.Technical]: (Lt = w.contacts) === null || Lt === void 0 || (Ot = Lt.technical) === null || Ot === void 0 ? void 0 : Ot.id
					},
					landing: w.landing,
					privacy: w.privacy,
					whois: w.whois,
					emailVerified: w.email_verified,
					materialChanges: k(w.material_changes),
					corChanges: w.cor_changes ? b(Object.assign(r({}, D), w.cor_changes)) : {},
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
					actionableMetadata: h(w.actionable_metadata)
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

			function h(y) {
				return y.map(w => ({
					accountContext: w.account_context,
					createdAt: w.created_at,
					expiresAt: w.expires_at,
					sentAt: w.sent_at,
					status: w.status,
					type: w.type
				}))
			}
			const D = {
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

			function T(y) {
				switch (y.enter_auth_code) {
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

			function v(y) {
				let w = y.extensions;
				(w == null ? void 0 : w.application_purpose) && (w == null ? void 0 : w.nexus_category) && (y.extensions = {
					nexusCategory: w.nexus_category,
					applicationPurpose: w.application_purpose
				});
				let de = r({}, typeof y.id == "string" ? {
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
				return Le(de)
			}

			function k(y) {
				let w = [];
				const de = {
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
				for (const Ie in y) {
					const $e = y[Ie],
						Et = de[$e];
					w.push(Et)
				}
				return w
			}
			const P = y => {
				if (!y) return null;
				let w = y;
				return y.includes("C31") && (w = "C31"), y.includes("C32") && (w = "C32"), w
			};

			function b(y) {
				return r({}, typeof y.id == "string" ? {
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
						nexusCategory: P(y.extensions.nexus_category),
						applicationPurpose: y.extensions.application_purpose
					}
				} : {})
			}

			function L(y = {}) {
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
					transferConditions: r({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, y.transferConditions || {}),
					transferIn: r({
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
				return Object.assign(w, y)
			}

			function O(y = {}) {
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

			function S(y) {
				const w = d.Py.concat(d.ui).reduce((de, Ie) => r({}, de, {
					[Ie]: []
				}), {});
				return y.forEach(de => {
					let Ie = U(de.registrar);
					Ie in w || (Ie = d.ui), X(de.name) && (Ie = "uk"), w[Ie].push(de)
				}), Object.keys(w).sort((de, Ie) => de.localeCompare(Ie)).map(de => ({
					registrar: de,
					domains: w[de]
				})).filter(de => de.domains.length > 0)
			}

			function U(y) {
				return y == null ? void 0 : y.toLowerCase().replace(/\s|,|\./g, "")
			}

			function x(y) {
				if (!y || !y.registrar) return "unknown";
				if (X(y.name)) return "uk";
				const w = U(y.registrar);
				return w in d.gM ? w : "unknown"
			}
			const Q = [];

			function oe(y) {
				return Q.some(w => y.endsWith("." + w))
			}

			function pe(y) {
				return !y.isEnterpriseZone || !Array.isArray(y.entitlements) ? !1 : !!y.entitlements.find(({
					id: w,
					allocation: de
				}) => w === d.g5 && de.value === !0)
			}

			function ue(y) {
				var w;
				const de = [t.rj.CLIENT_HOLD, t.rj.SERVER_HOLD, t.rj.SERVER_TRANSFER_PROHIBITED, t.rj.PENDING_DELETE, t.rj.PENDING_TRANSFER, t.rj.CLIENT_TRANSFER_PROHIBITED];
				let Ie = !1,
					$e = null;
				return (w = y.registryStatuses) === null || w === void 0 || w.some(Et => {
					de.includes(Et) && ($e = Et, Ie = !0)
				}), [Ie, $e]
			}

			function ce(y, w = !1) {
				if (!y) return [!1, g.keys.cannot_transfer_default];
				if (y.zone.status !== "active") return [!1, g.keys.cannot_transfer_zone_not_active];
				if (!y.isFullZone && !pe(y)) return [!1, g.keys.cannot_transfer_zone_not_eligible];
				if (y.registrar === "Cloudflare") return [!1, g.keys.cannot_transfer_domain_on_cf];
				if (y.isAvailable) return [!1, g.keys.cannot_transfer_domain_available];
				if (!y.transferConditions) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (!w && pt(y == null ? void 0 : y.premiumType)) return [!1, g.keys.cannot_transfer_domain_premium];
				if (H(y)) return [!1, g.keys.cannot_transfer_domain_transfer_in_progress];
				let de;
				for (de in y.transferConditions)
					if (de !== "not_premium" && !y.transferConditions[de]) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (oe(y.name)) return [!1, g.keys.cannot_transfer_domain_tld_not_supported];
				const [Ie, $e] = ue(y);
				return Ie && $e ? [!1, g.keys.cannot_transfer_domain_registry_status[$e]] : [!0, ""]
			}

			function H(y) {
				var w, de;
				return !!y.transferIn && !((w = y.transferConditions) === null || w === void 0 ? void 0 : w.not_started) && !!(X(y.name) || ((de = y.registryStatuses) === null || de === void 0 ? void 0 : de.includes(t.rj.PENDING_TRANSFER)))
			}

			function J(y) {
				return !!y.registrar && !!y.currentExpiration
			}

			function Y(y, w = !1) {
				const [de] = ce(y, w);
				return J(y) ? ye(y) ? t.M5.InProgressOrOnCF : de ? t.M5.Supported : t.M5.Unsupported : t.M5.Unknown
			}

			function I(y) {
				return y.transferIn && [t.lW.REJECTED, t.lW.NEEDED].includes(y.transferIn.enter_auth_code) || !1
			}

			function G(y) {
				return y.registrar === "Cloudflare"
			}

			function ne(y) {
				return !!(y == null ? void 0 : y.includes(t.rj.AUTO_RENEW_PERIOD))
			}

			function ae(y) {
				return !!(y == null ? void 0 : y.includes(t.rj.PENDING_TRANSFER))
			}
			const M = "Invalid date";

			function F(y) {
				return y.newExpiration === M ? "Unavailable" : y.newExpiration
			}

			function B(y) {
				return y.currentExpiration === M ? "Unavailable" : y.currentExpiration
			}

			function z(y) {
				return y.substring(y.indexOf("."))
			}

			function j(y = "") {
				return y.indexOf(".") !== -1 ? y.substring(0, y.indexOf(".")) : y
			}

			function ee(y) {
				return y.map(w => w.name).map(w => z(w)).filter((w, de, Ie) => !Ie.includes(w, de + 1))
			}

			function ie(y) {
				if (d.no) return [!0, ""];
				if (!G(y)) return [!1, t.ok.NotOnCF];
				if (y.isCorLocked) return [!1, y.corLockedUntil ? t.ok.CorLockedUntil : t.ok.CorLock];
				if (y.lastTransferredAt) {
					const w = p()(y.lastTransferredAt),
						de = p().duration(p()().diff(w)).as("days"),
						Ie = X(y.name);
					if (de < (Ie ? 1 : 60)) return [!1, Ie ? t.ok.RecentTransferUK : t.ok.RecentTransfer]
				}
				if (y.createdAt) {
					const w = p()(y.createdAt);
					if (p().duration(p()().diff(w)).as("days") < 60) return [!1, t.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function _e(y) {
				return !!(d.Bc || y.transferOut)
			}

			function ye(y) {
				return Pe(y) || G(y)
			}

			function Te(y) {
				return !Pe(y) && G(y)
			}

			function Pe(y) {
				return !y || y.lastKnownStatus === "pendingTransfer" || y.lastKnownStatus === "transferFOAPending" || !G(y) && y.transferConditions && !y.transferConditions.not_started || !1
			}

			function we(y) {
				return !(oe(y.name) || y.transferConditions && !y.transferConditions.supported_tld)
			}

			function Ae(y) {
				return (y == null ? void 0 : y.includes("/")) ? !0 : y.split("").some(w => w.charCodeAt(0) > 123)
			}

			function Me(y) {
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

			function ke(y) {
				return p()(y.paymentExpiresAt).isBefore(p()())
			}

			function Se(y) {
				return y.transferIn && y.transferIn.enter_auth_code === t.lW.REJECTED || !1
			}

			function K(y) {
				const w = ["CU", "KP", "IR", "SY"];
				return y.filter(de => !w.includes(de.code))
			}

			function me(y) {
				if (!!y) return `${y.charAt(0).toUpperCase()}${y.slice(1)}${y.charAt(y.length-1)==="."?"":"."}`
			}

			function Le(y) {
				const w = {};
				for (const [de, Ie] of Object.entries(y)) {
					if (Ie && typeof Ie == "string") {
						Object.assign(w, {
							[de]: Ie.trim()
						});
						continue
					}
					Object.assign(w, {
						[de]: Ie
					})
				}
				return w
			}

			function qe(y) {
				return p()(y).add(40, "days")
			}

			function ot(y) {
				const w = y.paymentExpiresAt || y.payment_expires_at,
					de = qe(w);
				return p()().isBetween(w, de)
			}

			function et(y) {
				var w;
				return !(y == null ? void 0 : y.registryStatuses) || !Array.isArray(y == null ? void 0 : y.registryStatuses) && !(0, e.isString)(y == null ? void 0 : y.registryStatuses) ? !1 : (w = y.registryStatuses) === null || w === void 0 ? void 0 : w.includes(t.rj.REDEMPTION_PERIOD)
			}

			function st(y) {
				var w;
				return !(y == null ? void 0 : y.registryStatuses) || !Array.isArray(y == null ? void 0 : y.registryStatuses) && !(0, e.isString)(y == null ? void 0 : y.registryStatuses) ? !1 : (w = y.registryStatuses) === null || w === void 0 ? void 0 : w.includes(t.rj.PENDING_DELETE)
			}

			function ze(y) {
				return [".us"].includes(y)
			}

			function He(y) {
				return [".us"].includes(y)
			}

			function mt(y) {
				switch (y) {
					case ".us":
						return Ce();
					default:
						return []
				}
			}

			function Z(y) {
				switch (y) {
					case ".us":
						return le;
					default:
						return {}
				}
			}
			const le = {
				[t.A9.P3]: [t.Fi.C11]
			};

			function Ce() {
				return [{
					name: t.IP.application_purpose,
					label: t.rb.application_purpose,
					options: Object.entries(t.A9).map(([y, w]) => ({
						value: y,
						label: w
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: t.IP.nexus_category,
					label: t.rb.nexus_category,
					options: Object.entries(t.Fi).map(([y, w]) => ({
						value: y,
						label: w
					}))
				}]
			}

			function Fe(y, w, de) {
				return w[w.length - 1][de] === y[de]
			}

			function We(y) {
				return Boolean(Object.keys(y).length === 0)
			}

			function Be(y) {
				return p()().add(y, "year").format(C)
			}

			function Ze({
				accountName: y
			}) {
				var w;
				const de = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((w = y.toLowerCase().match(de)) === null || w === void 0 ? void 0 : w[0]) || ""
			}

			function tt(y) {
				return !!y.match(m.default.email)
			}

			function lt(y) {
				return y === l.W7.PENDING_UPDATE
			}

			function rt(y) {
				return y ? Object.values(l.wR).filter(w => w !== l.wR.OFFBOARDED).includes(y) : !1
			}

			function gt(y) {
				return y ? [l.wR.LOCKED, l.wR.ONBOARDED, l.wR.ONBOARDING_INITIATED, l.wR.PENDING_REGISTRY_LOCK, l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(y) : !1
			}

			function ft(y) {
				return y ? l.wR.UNLOCKED === y : !1
			}

			function ut(y) {
				return y ? l.wR.LOCKED === y : !1
			}

			function Ue(y) {
				return y ? l.wR.PENDING_REGISTRY_LOCK === y : !1
			}

			function he(y) {
				return y ? [l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(y) : !1
			}

			function Ge(y) {
				var w;
				return !1
			}

			function dt(y) {
				var w;
				return !1
			}

			function it(y) {
				var w;
				return !1
			}

			function _t(y) {
				var w;
				return !1
			}

			function V(y) {
				var w;
				return !1
			}

			function se(y) {
				return Object.keys(l.wR).find(w => l.wR[w].toLowerCase() === y.toLowerCase())
			}

			function Ee(y) {
				var w;
				const de = (w = se(y)) === null || w === void 0 ? void 0 : w.toLowerCase();
				return de ? g.keys.protection_status[de] : g.keys.protection_status.unknown
			}

			function Oe(y) {
				return ["com", "net"].includes(y)
			}

			function Re(y) {
				const w = (0, i.pu)(y);
				return Oe(w) ? l.wR.PENDING_REGISTRY_LOCK : l.wR.LOCKED
			}

			function je(y) {
				return (0, i.pu)(y) === "co" ? 5 : 10
			}

			function R(y, w) {
				return w ? 1 : (0, i.pu)(y) === "co" ? 5 : (0, i.pu)(y) === "org" ? 1 : 10
			}

			function X(y) {
				return (0, i.pu)(y) === "uk"
			}

			function te(y) {
				return (0, i.pu)(y) === "us"
			}

			function ge(y) {
				return (0, i.pu)(y) === "ai"
			}

			function ve(y) {
				return p()(y).isValid()
			}

			function Ne(y) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(y)
			}

			function Ye(y) {
				return !!(y == null ? void 0 : y.id)
			}

			function Ke(y) {
				return y ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(y) : !1
			}

			function Qe(y) {
				return y ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(y) : !1
			}

			function nt(y) {
				var w;
				return (y == null ? void 0 : y.lastKnownStatus) ? (w = y.lastKnownStatus) === null || w === void 0 ? void 0 : w.includes("deletionIrredeemable") : !1
			}

			function pt(y) {
				switch (y) {
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

			function Ct(y) {
				if (!y || !y.message) return t.OJ.DEFAULT;
				const {
					message: w
				} = y;
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

			function at(y) {
				var w, de;
				return !!(((w = y.policies) === null || w === void 0 || (de = w.suspension) === null || de === void 0 ? void 0 : de.parked) && y.policies.suspension.parkingReason)
			}

			function xe(y) {
				var w, de;
				return at(y) && ((w = y.policies) === null || w === void 0 || (de = w.suspension) === null || de === void 0 ? void 0 : de.parkingReason) === t.qK.EMAIL_VERIFICATION
			}

			function Rt(y) {
				var w, de;
				return at(y) && ((w = y.policies) === null || w === void 0 || (de = w.suspension) === null || de === void 0 ? void 0 : de.parkingReason) === t.qK.TRUST_AND_SAFETY
			}

			function $t(y) {
				var w;
				return !((w = y.domainMove) === null || w === void 0 ? void 0 : w.ineligibilityReasons.length)
			}

			function Nt(y) {
				var w, de;
				return !!((w = y.domainMove) === null || w === void 0 || (de = w.ineligibilityReasons) === null || de === void 0 ? void 0 : de.includes(t.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function kt(y) {
				var w;
				return (w = y.actionableMetadata) === null || w === void 0 ? void 0 : w.find(de => de.type === t.wg.DOMAIN_MOVE)
			}

			function Wt(y) {
				const w = kt(y);
				return (w == null ? void 0 : w.status) === "pending" && w.accountContext === t._5.GAINING
			}

			function zt(y) {
				const w = kt(y);
				return (w == null ? void 0 : w.status) === "pending" && w.accountContext === t._5.LOSING
			}

			function Gt(y) {
				const w = z(y.name);
				return !d.Pf.includes(w)
			}

			function Kt(y) {
				return d.QZ.includes(y)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Bc: function() {
					return d
				},
				HG: function() {
					return Pe
				},
				Hv: function() {
					return we
				},
				JM: function() {
					return a
				},
				Pf: function() {
					return u
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
					return l
				},
				jk: function() {
					return Te
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
			const a = "Unknown",
				p = "unknown",
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
				d = (0, o.J8)("registrar_mock_transfer_out") || !1,
				g = (0, o.J8)("registrar_show_unlock_ui") || !1,
				t = 250,
				r = "cf_registrar.enabled",
				s = "@abcABC1234567890123456",
				u = [".us"],
				c = [".travel", ".us", ".ong", ".ngo"],
				f = (0, e.BC)`/${"accountId"}`,
				_ = (0, e.BC)`${f}/add-site`,
				C = (0, e.BC)`${f}/registrar`,
				A = (0, e.BC)`${C}/domains`,
				h = (0, e.BC)`${C}/action-center`,
				D = (0, e.BC)`${C}/domain/${"zoneName"}`,
				T = (0, e.BC)`${D}/configuration`,
				v = (0, e.BC)`${D}/contacts`,
				k = (0, e.BC)`${C}/pricing`,
				P = (0, e.BC)`${C}/protection`,
				b = (0, e.BC)`${C}/register`,
				L = (0, e.BC)`${b}/checkout`,
				O = (0, e.BC)`${b}/checkout/${"token"}`,
				S = (0, e.BC)`${b}/success`,
				U = (0, e.BC)`${C}/tlds`,
				x = (0, e.BC)`${C}/transfer`,
				Q = (0, e.BC)`${C}/transfer/${"zoneName"}`,
				oe = (0, e.BC)`/registrar/accounts/verify_email`,
				pe = (0, e.BC)`/registrar/domains/verify_email`,
				ue = (0, e.BC)`/sign-up/registrar`,
				ce = (0, e.BC)`${C}/verify-email`,
				H = (0, e.BC)`${f}/${"zoneName"}`,
				J = (0, e.BC)`${f}/domains`,
				Y = (0, e.BC)`${J}/action-center`,
				I = (0, e.BC)`${J}/${"zoneName"}`,
				G = (0, e.BC)`${I}/configuration`,
				ne = (0, e.BC)`${I}/contacts`,
				ae = (0, e.BC)`${J}/pricing`,
				M = (0, e.BC)`${J}/protection`,
				F = (0, e.BC)`${J}/register`,
				B = (0, e.BC)`${F}/checkout`,
				z = (0, e.BC)`${F}/checkout/${"token"}`,
				j = (0, e.BC)`${F}/success`,
				ee = (0, e.BC)`${J}/tlds`,
				ie = (0, e.BC)`${J}/transfer`,
				_e = (0, e.BC)`${J}/transfer/${"zoneName"}`,
				ye = (0, e.BC)`${J}/verify-email`,
				Te = {
					addSite: _,
					domains: A,
					domainsActionCenter: h,
					domainsDomain: D,
					domainsDomainConfiguration: T,
					domainsDomainContacts: v,
					domainsPricing: k,
					domainsProtection: P,
					domainsRegister: b,
					domainsRegisterCheckout: L,
					domainsRegisterCheckoutToken: O,
					domainsRegisterSuccess: S,
					domainsTlds: U,
					domainsTransfer: x,
					domainsTransferZone: Q,
					registrar: C,
					registrarAccountsVerifyEmail: oe,
					registrarDomainsVerifyEmail: pe,
					signup: ue,
					verifyEmail: ce,
					zone: H
				},
				Pe = {
					LEGACY_domains: J,
					LEGACY_domainsActionCenter: Y,
					LEGACY_domainsDomain: I,
					LEGACY_domainsDomainConfiguration: G,
					LEGACY_domainsDomainContacts: ne,
					LEGACY_domainsPricing: ae,
					LEGACY_domainsProtection: M,
					LEGACY_domainsRegister: F,
					LEGACY_domainsRegisterCheckout: B,
					LEGACY_domainsRegisterCheckoutToken: z,
					LEGACY_domainsRegisterSuccess: j,
					LEGACY_domainsTlds: ee,
					LEGACY_domainsTransfer: ie,
					LEGACY_domainsTransferZone: _e,
					LEGACY_verifyEmail: ye
				},
				we = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(W, E, n) {
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
			const a = g => {
					const t = g && g.accountFlags && g.accountFlags.data && g.accountFlags.data.registrar && g.accountFlags.data.registrar.canary_tlds;
					return t ? t.split(",").map(r => r.trim()) : []
				},
				p = g => {
					var t, r, s;
					return ((t = g.accountFlags) === null || t === void 0 || (r = t.data) === null || r === void 0 || (s = r.registrar) === null || s === void 0 ? void 0 : s["registrar-managed"]) || !1
				},
				l = g => g.account ? g.account.email : "",
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
		"../react/pages/home/domain-registration/tracking.ts": function(W, E, n) {
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
				a = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = n.n(a),
				l = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function m(s) {
				for (var u = 1; u < arguments.length; u++) {
					var c = arguments[u] != null ? Object(arguments[u]) : {},
						f = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(c).filter(function(_) {
						return Object.getOwnPropertyDescriptor(c, _).enumerable
					})), f.forEach(function(_) {
						i(s, _, c[_])
					})
				}
				return s
			}

			function i(s, u, c) {
				return u = d(u), u in s ? Object.defineProperty(s, u, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[u] = c, s
			}

			function d(s) {
				var u = g(s, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function g(s, u) {
				if (typeof s != "object" || s === null) return s;
				var c = s[Symbol.toPrimitive];
				if (c !== void 0) {
					var f = c.call(s, u || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(s)
			}
			let t = function(s) {
				return s.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", s.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", s.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", s.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", s.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", s.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", s.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", s.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", s.RENEW_DOMAIN_COMPLETED = "domain renewal completed", s.RESTORE_DOMAIN_INIT = "click to open domain restore modal", s.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", s.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", s.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", s.RESTORE_DOMAIN_FAILURE = "domain restore failed", s.RESTORE_DOMAIN_COMPLETED = "domain restore completed", s.DOMAIN_DELETE_INIT = "click to begin domain delete", s.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", s.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", s.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", s.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", s.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", s.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", s.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", s.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", s.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", s.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", s.DOMAIN_MOVE_START_FLOW = "Start domain move flow", s.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", s.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", s.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", s.DOMAIN_MOVE_SUBMIT = "Submit domain move", s.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", s.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", s.DOMAIN_MOVE_CANCEL = "Domain move cancel", s.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", s.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", s.ACTION_CENTER_NAVIGATE = "Navigate to actions center", s.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", s.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", s.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", s
			}({});

			function r(s, u, c) {
				if (!(u == null ? void 0 : u.name)) return null;
				p().sendEvent(s, m({
					domain: {
						name: u.name,
						premium: (0, l.Uy)(u == null ? void 0 : u.premiumType),
						paymentExpiresAt: o()(u == null ? void 0 : u.paymentExpiresAt).format()
					},
					category: "registrar"
				}, c))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				HX: function() {
					return a
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
			let a = function(g) {
				return g.WORKERS = "workers", g
			}({});
			const p = [{
					value: a.WORKERS,
					label: "Workers",
					scopeKeyPrefix: "com.cloudflare.edge.worker.script",
					scopeSubsetOfPrefix: "com.cloudflare.api.account"
				}],
				l = e.eg.object({
					id: e.eg.string,
					name: e.eg.string,
					description: e.eg.string
				}),
				m = (0, o.ZP)("granularResources", "get", "/accounts/(accountId)/demoproducts"),
				i = (0, o.ZP)("noop", "get", ""),
				d = (g, t) => t == a.WORKERS ? m(g, {}) : i()
		},
		"../react/pages/home/members/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Ey: function() {
					return i
				},
				F4: function() {
					return c
				},
				Fq: function() {
					return C
				},
				Go: function() {
					return r
				},
				Lc: function() {
					return T
				},
				Np: function() {
					return g
				},
				Rl: function() {
					return t
				},
				Sb: function() {
					return s
				},
				Sw: function() {
					return D
				},
				Sz: function() {
					return h
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
					return u
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${o}/members`,
				p = (0, e.BC)`${a}/invite`,
				l = (0, e.BC)`${a}/invite/${"memberId"}`,
				m = (0, e.BC)`${a}/add-policy/${"memberId"}`,
				i = "com.cloudflare.api.account",
				g = i + "." + "zone",
				t = g + ".",
				r = 100,
				s = 200,
				u = 5,
				c = 300,
				f = "INVITE_TOAST",
				_ = "00000000000000000000000000000000",
				C = "usergroups-ui",
				A = {
					account: o,
					members: a,
					inviteMembers: p,
					editMember: l,
					addPolicy: m
				},
				h = {
					allow: "allow",
					deny: "deny"
				},
				D = {
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
				v = {
					accountId: "",
					effect: h.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				AX: function() {
					return h
				},
				Co: function() {
					return C
				},
				JP: function() {
					return A
				},
				Ld: function() {
					return s
				},
				YW: function() {
					return d
				},
				_k: function() {
					return u
				},
				c$: function() {
					return g
				},
				rC: function() {
					return k
				},
				vq: function() {
					return v
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				o = n("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				a = n("../react/pages/home/members/constants.ts");

			function p(P) {
				for (var b = 1; b < arguments.length; b++) {
					var L = arguments[b] != null ? Object(arguments[b]) : {},
						O = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(L).filter(function(S) {
						return Object.getOwnPropertyDescriptor(L, S).enumerable
					})), O.forEach(function(S) {
						l(P, S, L[S])
					})
				}
				return P
			}

			function l(P, b, L) {
				return b = m(b), b in P ? Object.defineProperty(P, b, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[b] = L, P
			}

			function m(P) {
				var b = i(P, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function i(P, b) {
				if (typeof P != "object" || P === null) return P;
				var L = P[Symbol.toPrimitive];
				if (L !== void 0) {
					var O = L.call(P, b || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(P)
			}
			const d = () => p({}, a.Ti),
				g = () => p({}, a.Lc, {
					scopes: [d()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				t = P => P.map(b => ({
					scope: {
						key: b,
						objects: [{
							key: "*"
						}]
					}
				})),
				r = (P, b, L) => {
					var O;
					let S = [],
						U = [];
					const x = [],
						Q = [];
					P.scopes.forEach(ue => {
						if (ue.mode === a.Sw.all) L ? S.push({
							id: L
						}) : S.push({
							scope: {
								key: `com.cloudflare.api.account.${b}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (ue.mode === a.Sw.domain_group) {
							const J = {
								id: ue.resourceGroupId
							};
							ue.effect === a.Sz.allow ? S.push(J) : U.push(J)
						} else if (ue.mode === a.Sw.zone) {
							const J = `${a.Rl}${ue.zoneId}`;
							ue.effect === a.Sz.allow ? x.push(J) : Q.push(J)
						} else if (ue.mode === a.Sw.granular && ue.granularResourceId) {
							var ce, H;
							const J = ue.granularProduct,
								I = `${(ce=o.s_.find(ae=>ae.value==J))===null||ce===void 0?void 0:ce.scopeKeyPrefix}.${ue.granularResourceId}`,
								ne = `${(H=o.s_.find(ae=>ae.value===J))===null||H===void 0?void 0:H.scopeSubsetOfPrefix}.${b}`;
							S.push({
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
					}), x.length && (S = S.concat(t(x))), Q.length && (U = U.concat(t(Q)));
					const oe = (O = P.permission_groups) === null || O === void 0 ? void 0 : O.map(ue => ({
							id: ue
						})),
						pe = [];
					return pe.push({
						access: a.Sz.allow,
						permission_groups: oe,
						resource_groups: S
					}), U.length && pe.push({
						access: a.Sz.deny,
						permission_groups: oe,
						resource_groups: U
					}), pe
				},
				s = P => P.map(b => {
					var L;
					return {
						access: b.access,
						permission_groups: b.permission_groups.map(O => ({
							id: O.id
						})),
						resource_groups: (L = b.resource_groups) === null || L === void 0 ? void 0 : L.map(O => ({
							scope: {
								key: O.scope.key,
								objects: O.scope.objects
							},
							id: O.id
						}))
					}
				}),
				u = (P, b, L, O) => {
					const S = P.auto_accept;
					let U = [];
					return U = U.concat(r(P, b, L)), O && (U = U.concat(s(O))), {
						auto_accept: S,
						status: S ? "accepted" : "pending",
						policies: U
					}
				},
				c = P => {
					const b = P.split(".");
					return b[b.length - 1]
				},
				f = P => {
					var b, L;
					const O = P == null ? void 0 : P.access;
					let S = [],
						U = P == null || (b = P.resource_groups) === null || b === void 0 ? void 0 : b.map(x => {
							var Q;
							const oe = _(x);
							if ((x == null || (Q = x.meta) === null || Q === void 0 ? void 0 : Q.editable) === "false") return {
								effect: O,
								mode: a.Sw.all,
								accountId: c(x.id)
							};
							if (oe) {
								var pe;
								const ue = x == null || (pe = x.scope) === null || pe === void 0 ? void 0 : pe.key.split(".").pop();
								return {
									effect: O,
									mode: a.Sw.granular,
									granularProduct: oe.value,
									granularResourceId: ue
								}
							} else if (!x.name) x.scope.key.startsWith(a.Rl) ? S.push({
								key: x.scope.key
							}) : S = S.concat(x.scope.objects);
							else return {
								effect: O,
								mode: a.Sw.domain_group,
								resourceGroupId: c(x.id)
							}
						}).filter(x => x);
					if ((L = S) === null || L === void 0 ? void 0 : L.length) {
						let x = S.map(Q => {
							const oe = c(Q.key);
							return {
								effect: O,
								mode: a.Sw.zone,
								zoneId: oe
							}
						});
						U = U.length ? x.concat(U) : x
					}
					return U
				},
				_ = P => {
					var b, L, O, S;
					const U = P == null || (b = P.scope) === null || b === void 0 ? void 0 : b.key.split(".").slice(0, -1).join("."),
						x = P == null || (L = P.scope) === null || L === void 0 || (O = L.subset_of) === null || O === void 0 || (S = O[0]) === null || S === void 0 ? void 0 : S.key.split(".").slice(0, -1).join(".");
					return o.s_.find(Q => Q.scopeKeyPrefix === U && Q.scopeSubsetOfPrefix === x)
				},
				C = P => {
					if (!(P == null ? void 0 : P.length)) return [];
					const b = [];
					return P.forEach(L => {
						var O;
						(O = L.resource_groups) === null || O === void 0 || O.forEach(S => {
							var U, x;
							((U = S.scope) === null || U === void 0 || (x = U.key) === null || x === void 0 ? void 0 : x.startsWith(a.Rl)) && b.push(c(S.scope.key))
						})
					}), b
				},
				A = P => {
					if (!(P == null ? void 0 : P.length)) return [];
					const b = [];
					return P.forEach(L => {
						var O;
						(O = L.resource_groups) === null || O === void 0 || O.forEach(S => {
							var U, x;
							if (!((U = S.scope) === null || U === void 0 || (x = U.key) === null || x === void 0 ? void 0 : x.startsWith(a.Rl))) {
								var Q;
								const pe = (Q = S.scope) === null || Q === void 0 ? void 0 : Q.objects;
								for (let ue = 0; ue < (pe == null ? void 0 : pe.length) && ue < a.r6; ue++) {
									var oe;
									((oe = pe[ue].key) === null || oe === void 0 ? void 0 : oe.startsWith(a.Rl)) && b.push(c(pe[ue].key))
								}
							}
						})
					}), b
				},
				h = P => {
					var b;
					if (!(P == null ? void 0 : P.length)) return null;
					const L = (b = P[0]) === null || b === void 0 ? void 0 : b.permission_groups.map(x => x.id);
					let O, S;
					P == null || P.forEach(x => {
						x.access === a.Sz.allow && (O = x), x.access === a.Sz.deny && (S = x)
					});
					let U = [];
					return O && (U = f(O)), S && (U = U.concat(f(S))), {
						permission_groups: L,
						scopes: U
					}
				},
				D = "permission-groups-",
				T = new Map,
				v = P => {
					if (!P) return [];
					const b = T.get(P);
					if (b) return b;
					const L = e.E.get(`${D}${P}`);
					return T.set(P, L), L
				},
				k = (P, b) => {
					const L = [];
					for (let O = 0; O < sessionStorage.length; O++) {
						const S = sessionStorage.key(O);
						(S == null ? void 0 : S.startsWith(D)) && L.push(S)
					}
					return L.length >= 5 && e.E.remove(L[0]), e.E.set(`${D}${P}`, b)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(W, E, n) {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(W, E, n) {
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
		"../react/pages/hyperdrive/tracking.ts": function(W, E, n) {
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

			function a(r) {
				for (var s = 1; s < arguments.length; s++) {
					var u = arguments[s] != null ? Object(arguments[s]) : {},
						c = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(u).filter(function(f) {
						return Object.getOwnPropertyDescriptor(u, f).enumerable
					})), c.forEach(function(f) {
						p(r, f, u[f])
					})
				}
				return r
			}

			function p(r, s, u) {
				return s = l(s), s in r ? Object.defineProperty(r, s, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = u, r
			}

			function l(r) {
				var s = m(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function m(r, s) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var c = u.call(r, s || "default");
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
				g = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const t = (r, s = {}) => {
				o().sendEvent(r, a({}, s, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/selectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$4: function() {
					return p
				},
				GH: function() {
					return s
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
					return C
				},
				pT: function() {
					return r
				},
				po: function() {
					return u
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts"),
				a = n("../react/common/selectors/zoneSelectors.ts");
			const p = "sourcing_kit_enabled",
				l = "sourcing_kit_waitlist",
				m = "images",
				i = "unified_images_enabled",
				d = "c2pa_polish",
				g = "CloudflareImages",
				t = A => !!(0, o.BF)(A, "images.transformations_enabled"),
				r = A => Boolean((0, o.BF)(A, "images.enabled")),
				s = A => {
					const h = (0, o.BF)(A, "images.storage");
					return typeof h == "number" && h > 0
				},
				u = A => Boolean((0, o.BF)(A, "contract.customer_enabled")),
				c = A => Boolean((0, e.oI)(A, m, p)),
				f = A => Boolean((0, a.Le)(A, g, p)),
				_ = A => Boolean(getAccountFlipperFlag(A, g, i)),
				C = A => Boolean((0, a.Le)(A, g, d))
		},
		"../react/pages/magic/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				GF: function() {
					return u
				},
				H3: function() {
					return i
				},
				H8: function() {
					return l
				},
				J: function() {
					return f
				},
				Nz: function() {
					return d
				},
				UQ: function() {
					return C
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
					return t
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/utils/translator.tsx");
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
				l = h => [{
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
				g = "magic-wan",
				t = "gre_tunnel",
				r = "ipsec_tunnel",
				s = "interconnect",
				u = 64,
				c = 1476,
				f = "mid",
				_ = "reply",
				C = h => [{
					value: void 0,
					label: h("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: h("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: h("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				A = h => [{
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
		"../react/pages/magic/network-monitoring/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
		"../react/pages/magic/overview/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
					return l
				}
			});
			var e = n("../react/pages/magic/constants.ts");
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
				l = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				gb: function() {
					return t
				},
				iP: function() {
					return P
				},
				xL: function() {
					return A
				},
				rD: function() {
					return L
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
					return v
				},
				K5: function() {
					return s
				},
				Ii: function() {
					return D
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
				a = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				l = n("../node_modules/@cloudflare/elements/es/index.js");
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
				g = (0, a.createComponent)(({
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
				t = () => o().createElement(r, null, o().createElement(l.Ei, {
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
				s = () => o().createElement(u, null, o().createElement("svg", {
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
				u = (0, a.createComponent)(({
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
				_ = () => o().createElement(C, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				C = (0, a.createComponent)(({
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
				A = () => o().createElement(h, null, o().createElement("svg", {
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
				D = () => o().createElement(T, null, o().createElement("svg", {
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
				T = (0, a.createComponent)(({
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
				v = () => o().createElement(k, null, o().createElement("svg", {
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
				k = (0, a.createComponent)(({
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
				P = () => o().createElement("svg", {
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
				L = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
					return a
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
				a = "login-apple-jwt",
				p = "cf-test",
				l = {
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
		"../react/pages/page-rules/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				_: function() {
					return a
				},
				c: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);
			let a = function(l) {
				return l.TEMPLATE_SELECTED = "template selected", l.TEMPLATE_PRODUCT_SELECTED = "template product selected", l.TEMPLATE_SAVE_DRAFT = "template save draft", l.TEMPLATE_CANCEL = "template cancel", l.TEMPLATE_DEPLOY = "template deploy", l
			}({});
			const p = (l, m) => o().sendEvent(l, {
				template_name: m
			})
		},
		"../react/pages/pages/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				A: function() {
					return _
				},
				C1: function() {
					return g
				},
				Dp: function() {
					return x
				},
				GF: function() {
					return L
				},
				HD: function() {
					return h
				},
				IK: function() {
					return l
				},
				L7: function() {
					return a
				},
				Li: function() {
					return f
				},
				Ni: function() {
					return k
				},
				OG: function() {
					return ce
				},
				QF: function() {
					return pe
				},
				QV: function() {
					return v
				},
				Sx: function() {
					return D
				},
				Ub: function() {
					return oe
				},
				X3: function() {
					return r
				},
				aP: function() {
					return i
				},
				bA: function() {
					return S
				},
				eO: function() {
					return s
				},
				fH: function() {
					return c
				},
				fQ: function() {
					return C
				},
				fR: function() {
					return e
				},
				ff: function() {
					return O
				},
				hE: function() {
					return Q
				},
				iS: function() {
					return A
				},
				ku: function() {
					return U
				},
				nY: function() {
					return T
				},
				w3: function() {
					return p
				},
				wJ: function() {
					return d
				},
				wp: function() {
					return u
				},
				yu: function() {
					return t
				},
				zF: function() {
					return b
				},
				zG: function() {
					return P
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
				d = 2e3,
				g = 100,
				t = 350,
				r = 1e7,
				s = ["Success:", "Error:", "Failed:"],
				u = 10,
				c = "_headers",
				f = "_redirects",
				_ = "_routes.json",
				C = "_worker.js",
				A = "do-a-barrel-roll",
				h = [c, f, _, C],
				D = 1024 * 1024 * 25,
				T = 1e3,
				v = {
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
				P = 75e3,
				b = 2e5,
				L = 15e4,
				O = 3e3,
				S = 2250,
				U = "workers",
				x = "cloudflare_pages_build_caching",
				Q = 2;
			let oe = function(H) {
				return H[H.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", H[H.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", H[H.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", H[H.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", H[H.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", H[H.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", H
			}({});
			const pe = 1,
				ue = 2,
				ce = 2
		},
		"../react/pages/pages/routes.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Hv: function() {
					return a
				},
				_j: function() {
					return o
				},
				zE: function() {
					return l
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
		"../react/pages/pipelines/tracking.ts": function(W, E, n) {
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

			function a(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(s).filter(function(c) {
						return Object.getOwnPropertyDescriptor(s, c).enumerable
					})), u.forEach(function(c) {
						p(t, c, s[c])
					})
				}
				return t
			}

			function p(t, r, s) {
				return r = l(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function l(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var u = s.call(t, r || "default");
					if (typeof u != "object") return u;
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
				o().sendEvent(t, a({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
					return l
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
				l = (i, d) => {
					const g = p(d);
					return `https://${i}.${g}`
				},
				m = (i, d, g) => `${l(i,d)}/${g}`
		},
		"../react/pages/r2/selectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Mv: function() {
					return t
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts"),
				a = n("../react/common/selectors/zoneSelectors.ts");
			const p = "r2_migrator_waitlist",
				l = "r2migrator",
				m = "r2",
				i = "r2_storage_migrator",
				d = "r2_storage_migrator",
				g = s => getAccountEntitlement(s, "r2.enabled"),
				t = s => Boolean((0, a.Le)(s, i, p)),
				r = s => Boolean(getAccountFlipperFlagsChanges(s, d, l))
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Gk: function() {
					return s
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

			function a(u) {
				for (var c = 1; c < arguments.length; c++) {
					var f = arguments[c] != null ? Object(arguments[c]) : {},
						_ = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(f).filter(function(C) {
						return Object.getOwnPropertyDescriptor(f, C).enumerable
					})), _.forEach(function(C) {
						p(u, C, f[C])
					})
				}
				return u
			}

			function p(u, c, f) {
				return c = l(c), c in u ? Object.defineProperty(u, c, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[c] = f, u
			}

			function l(u) {
				var c = m(u, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function m(u, c) {
				if (typeof u != "object" || u === null) return u;
				var f = u[Symbol.toPrimitive];
				if (f !== void 0) {
					var _ = f.call(u, c || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(u)
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
					filters: Object.values(e.GH).reduce((u, c) => a({}, u, {
						[c]: c
					}), {})
				};
			let s = function(u) {
				return u.COPY_URL = "copy blocked content url", u.REQUEST_REVIEW = "request blocked content review", u.ADD_FILTER = "Add filter", u.REMOVE_FILTER = "Remove filter", u
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
				l = function(m) {
					return m.Removed = "removed", m.Misclassified = "misclassified", m
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
			let a = function(p) {
				return p.LOAD_THREAT_EVENTS = "load threat events", p.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", p.THREAT_EVENTS_FILTERS = "threat events filters applied", p
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
		"../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
					return u
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
			const a = ["block", "challenge", "jschallenge", "managedChallenge"],
				p = ["miss", "expired", "bypass", "dynamic"],
				l = c => Object.fromEntries(Object.entries(c).map(([f, _]) => [_, f])),
				m = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				i = l(m),
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
				g = l(d),
				t = l(o.EG);
			let r = function(c) {
				return c.SAMPLED = "sampled", c.RAW = "raw", c
			}({});
			const s = "security-analytics-log-explorer";
			let u = function(c) {
				return c.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', c.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', c.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', c.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', c.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', c
			}({})
		},
		"../react/pages/security/api-shield/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				AB: function() {
					return t
				},
				API_SHIELD_TOAST: function() {
					return C
				},
				CR: function() {
					return _
				},
				Cg: function() {
					return d
				},
				L8: function() {
					return s
				},
				Ps: function() {
					return i
				},
				_i: function() {
					return g
				},
				ac: function() {
					return a
				},
				k1: function() {
					return l
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
				a = [...o, "disable"],
				p = 10,
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
				d = "all";
			let g = function(A) {
				return A.DISCOVERY_FILTER = "discovery-filter-state", A.ADD_JWT_RULES_FILTER = "add-jwt-rules-state", A.ENDPOINT_MANAGEMENT_FILTER = "endpoint-management-filter-cache-key", A
			}({});
			const t = 63,
				r = 0,
				s = 10,
				u = {
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
			let C = function(A) {
				return A.UPLOAD_SCHEMA = "schemaName", A.ADDED_ENDPOINT = "addedEndpoint", A.DEPLOYED_ROUTE = "deployedRoute", A.DELETED_ROUTE = "deletedRoute", A.UPDATED_LABELS_SINGLE_ENDPOINT = "updateLabelsSingle", A.UPDATED_LABELS_MULTI_ENDPOINT = "updateLabelsMulti", A
			}({})
		},
		"../react/pages/security/api-shield/entitlements.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				$0: function() {
					return r
				},
				CR: function() {
					return t
				},
				DM: function() {
					return pe
				},
				DN: function() {
					return S
				},
				Dc: function() {
					return ue
				},
				Dg: function() {
					return Q
				},
				FV: function() {
					return U
				},
				LG: function() {
					return h
				},
				Mz: function() {
					return x
				},
				OL: function() {
					return i
				},
				St: function() {
					return C
				},
				UG: function() {
					return s
				},
				Wy: function() {
					return u
				},
				iU: function() {
					return P
				},
				jI: function() {
					return l
				},
				qK: function() {
					return O
				},
				qN: function() {
					return g
				},
				r6: function() {
					return ce
				},
				sK: function() {
					return f
				},
				t1: function() {
					return T
				},
				yk: function() {
					return d
				},
				yo: function() {
					return oe
				},
				zo: function() {
					return v
				},
				zt: function() {
					return m
				}
			});
			var e = n("../react/pages/security/api-shield/types.ts"),
				o = n("../react/common/hooks/useZoneEntitlement.ts"),
				a = n("../react/common/hooks/useAccountEntitlement.ts"),
				p = n("../react/pages/security/api-shield/settings/constants.tsx");
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
				d = () => !!(0, o.Z)(i.discoveryAllowed),
				g = () => !!(0, o.Z)(i.discoveryThresholdsAllowed),
				t = l[e.H.JWT],
				r = () => !!(0, o.Z)(t.tokenValidationAllowed),
				s = () => (0, o.Z)(t.maxTokenValidationRules),
				u = () => (0, o.Z)(t.maxTokenValidationConfigs),
				c = l[e.H.SEQUENCE],
				f = () => !!(0, o.Z)(c.sequenceAllowed),
				_ = l[e.H.SEQUENCE_RULES],
				C = () => (0, o.Z)(_.maxSequenceRules),
				A = l[e.H.OPERATIONS],
				h = () => (0, o.Z)(A.maxOperationsAllowed),
				D = l[e.H.USER_SCHEMAS],
				T = () => {
					const H = (0, o.Z)(D.maxUserSchemasAllowed);
					return typeof H == "number" ? H : p.Hs
				},
				v = () => {
					const H = (0, o.Z)(D.maxSchemaBytesAllowed);
					return typeof H == "number" ? H : p.x5
				},
				k = l[e.H.LEARNED_SCHEMAS],
				P = () => (0, o.Z)(k.maxLearnedSchemasAllowed),
				b = l[e.H.SCHEMA_VALIDATION],
				L = () => useZoneEntitlement(b.schemaValidationAllowed),
				O = () => (0, o.Z)(b.maxSchemaBytes),
				S = l[e.H.CONFIGURATION],
				U = () => (0, o.Z)(S.maxApiShields),
				x = () => (0, o.Z)(S.apiRouting),
				Q = () => (0, o.Z)(S.centralEndpointsListAllowed),
				oe = () => !!(0, o.Z)(m.logAllowed),
				pe = () => !!(0, o.Z)(m.regexOperatorAllowed),
				ue = () => !!(0, o.Z)(m.dlpAllowed),
				ce = () => !!(0, a.Z)(m.sequencesAllowed)
		},
		"../react/pages/security/api-shield/settings/constants.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				Cl: function() {
					return t
				},
				Hs: function() {
					return d
				},
				PD: function() {
					return u
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
					return s
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
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../react/utils/translator.tsx"),
				p = n("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let l = function(_) {
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
				u = {
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
		"../react/pages/security/api-shield/tracking.ts": function(W, E, n) {
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

			function a(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(s).filter(function(c) {
						return Object.getOwnPropertyDescriptor(s, c).enumerable
					})), u.forEach(function(c) {
						p(t, c, s[c])
					})
				}
				return t
			}

			function p(t, r, s) {
				return r = l(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function l(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var u = s.call(t, r || "default");
					if (typeof u != "object") return u;
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
					product: s = i.MAIN,
					productName: u,
					additionalData: c
				}) => {
					o().sendEvent(t, a({
						category: r,
						product: s,
						productName: u
					}, c || {}))
				}
		},
		"../react/pages/security/api-shield/types.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
		"../react/pages/security/api-shield/utils/useApiShield.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				R: function() {
					return i
				}
			});
			var e = n("../react/pages/security/api-shield/entitlements.tsx"),
				o = n("../react/pages/security/api-shield/constants.ts"),
				a = n("../react/common/hooks/useGate.ts");
			const p = () => !!(0, a.Z)(o.CR);
			var l = n("../react/common/selectors/zoneSelectors.ts"),
				m = n("../react/app/redux/index.ts");
			const i = () => {
				const d = ((0, e.FV)() || 0) > 0,
					g = p(),
					t = (0, e.yk)(),
					r = (0, e.yo)(),
					s = (0, m.p4)(l.nA),
					u = (0, l.Ns)(s),
					c = (0, l._y)(s),
					f = (0, l.z5)(s),
					_ = (0, l.ko)(s);
				return {
					isFreeZone: u,
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
		"../react/pages/security/bots/tracking.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
		"../react/pages/security/page-shield/resources/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				CP: function() {
					return I
				},
				Ks: function() {
					return ye
				},
				sV: function() {
					return G
				},
				SI: function() {
					return ie
				},
				v5: function() {
					return k
				},
				xg: function() {
					return F
				},
				YC: function() {
					return M
				},
				MC: function() {
					return P
				},
				Xe: function() {
					return r
				},
				u8: function() {
					return L
				},
				Oq: function() {
					return Y
				},
				VT: function() {
					return O
				},
				qc: function() {
					return U
				},
				V0: function() {
					return v
				},
				Lj: function() {
					return _e
				},
				k2: function() {
					return _
				},
				$g: function() {
					return c
				},
				SJ: function() {
					return x
				},
				KH: function() {
					return J
				},
				Mq: function() {
					return H
				},
				FV: function() {
					return j
				},
				j$: function() {
					return Q
				},
				I1: function() {
					return t
				},
				Wq: function() {
					return u
				},
				jf: function() {
					return s
				},
				sW: function() {
					return ee
				},
				Uq: function() {
					return T
				},
				yd: function() {
					return pe
				},
				QM: function() {
					return ue
				},
				Uc: function() {
					return ce
				},
				R$: function() {
					return f
				},
				pG: function() {
					return ot
				},
				Ar: function() {
					return qe
				},
				Sk: function() {
					return ae
				},
				gY: function() {
					return et
				},
				SE: function() {
					return Te
				},
				m: function() {
					return ke
				},
				xP: function() {
					return Me
				},
				CI: function() {
					return K
				},
				p0: function() {
					return me
				},
				xl: function() {
					return Ae
				},
				Tb: function() {
					return we
				},
				h3: function() {
					return st
				},
				xq: function() {
					return je
				},
				SQ: function() {
					return _t
				},
				C0: function() {
					return V
				},
				av: function() {
					return Z
				},
				W3: function() {
					return He
				},
				WO: function() {
					return We
				},
				Dk: function() {
					return rt
				},
				we: function() {
					return Ue
				},
				Yt: function() {
					return dt
				},
				ex: function() {
					return Ge
				},
				E1: function() {
					return he
				},
				e0: function() {
					return ft
				},
				UH: function() {
					return Be
				},
				Qt: function() {
					return ut
				},
				K$: function() {
					return Ze
				},
				dm: function() {
					return Ce
				},
				oK: function() {
					return tt
				},
				qZ: function() {
					return it
				},
				_4: function() {
					return se
				},
				qo: function() {
					return Ee
				},
				CB: function() {
					return Pe
				},
				ti: function() {
					return Le
				}
			});
			var e = n("../react/app/redux/makeAction.js"),
				o = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = n.n(o),
				p = n("../../../common/component/component-filter-bar/src/index.js"),
				l = n("../react/common/components/analytics/AnalyticsReport/constants.ts");

			function m(R) {
				for (var X = 1; X < arguments.length; X++) {
					var te = arguments[X] != null ? Object(arguments[X]) : {},
						ge = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(te).filter(function(ve) {
						return Object.getOwnPropertyDescriptor(te, ve).enumerable
					})), ge.forEach(function(ve) {
						i(R, ve, te[ve])
					})
				}
				return R
			}

			function i(R, X, te) {
				return X = d(X), X in R ? Object.defineProperty(R, X, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[X] = te, R
			}

			function d(R) {
				var X = g(R, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function g(R, X) {
				if (typeof R != "object" || R === null) return R;
				var te = R[Symbol.toPrimitive];
				if (te !== void 0) {
					var ge = te.call(R, X || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)(R)
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
			let s = function(R) {
					return R.MONITOR = "monitor", R.POLICIES = "policies", R.SETTINGS = "settings", R
				}({}),
				u = function(R) {
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

			function C(R) {
				for (var X = 1; X < arguments.length; X++) {
					var te = arguments[X] != null ? Object(arguments[X]) : {},
						ge = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(te).filter(function(ve) {
						return Object.getOwnPropertyDescriptor(te, ve).enumerable
					})), ge.forEach(function(ve) {
						A(R, ve, te[ve])
					})
				}
				return R
			}

			function A(R, X, te) {
				return X = h(X), X in R ? Object.defineProperty(R, X, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[X] = te, R
			}

			function h(R) {
				var X = D(R, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function D(R, X) {
				if (typeof R != "object" || R === null) return R;
				var te = R[Symbol.toPrimitive];
				if (te !== void 0) {
					var ge = te.call(R, X || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)(R)
			}
			const T = 50,
				v = 9,
				k = "copy script url page shield",
				P = "disable page shield",
				b = "click documentation link",
				L = "enable page shield",
				O = "filter search page shield",
				S = "filter search view all page shield",
				U = "hover score tooltip page shield",
				x = "open alert modal page shield",
				Q = "change pagination page shield",
				oe = "close script modal page shield",
				pe = "open script modal page shield",
				ue = "select alert type page shield",
				ce = "sort column page shield",
				H = {
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
				J = {
					STARTS_WITH: l.Gn.startsWith,
					ENDS_WITH: l.Gn.endsWith,
					EQUALS: l.Gn.equals,
					CONTAINS: l.Gn.contains,
					DOES_NOT_CONTAIN: l.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: l.Gn.in
				},
				Y = {
					status: {
						example: "active",
						type: p.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [J.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: p.kE.string,
						options: ["true", "false"],
						operators: [J.CONTAINS, J.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [J.EQUALS],
						type: p.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: p.kE.string,
						operators: [J.INCLUDES, J.ENDS_WITH, J.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				I = C({}, Y, {
					urls: C({}, Y.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				G = {
					type: {
						example: "first_party",
						type: p.kE.select,
						options: ["first_party", "unknown"],
						label: "common.type",
						urlParam: "type",
						operators: [l.Gn.equals]
					},
					name: {
						example: "cookie_1",
						operators: [l.Gn.equals],
						type: p.kE.string,
						label: "firewall.page_shield.name",
						urlParam: "name"
					},
					domain: {
						example: "hostname.com",
						operators: [l.Gn.equals],
						type: p.kE.string,
						label: "firewall.page_shield.domain",
						urlParam: "domain"
					},
					path: {
						example: "/",
						operators: [l.Gn.equals],
						type: p.kE.string,
						label: "firewall.page_shield.path",
						urlParam: "path"
					},
					same_site: {
						operators: [l.Gn.equals],
						type: p.kE.select,
						options: ["lax", "strict", "none"],
						label: "firewall.page_shield.same_site",
						urlParam: "same_site"
					},
					http_only: {
						operators: [l.Gn.equals],
						type: p.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.http_only",
						urlParam: "http_only"
					},
					secure: {
						operators: [l.Gn.equals],
						type: p.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.secure",
						urlParam: "secure"
					}
				};
			let ne = function(R) {
				return R.SECURITY_THREATS = "Security Threats", R.C2_BOTNET = "C2 & Botnet", R.CRYPTOMINING = "Cryptomining", R.MALWARE = "Malware", R.PHISHING = "Phishing", R.SPYWARE = "Spyware", R.DGA_DOMAINS = "DGA Domains", R.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", R
			}({});
			const ae = "https://www.cloudflare.com/plans/enterprise/contact/",
				M = {
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
				F = {
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
				B = {
					[c.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[c.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[c.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[f.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[f.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				z = {
					[_.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[_.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				j = {
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
				ee = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				ie = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				_e = {
					[u.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[u.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[u.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				ye = {
					[u.SCRIPT_MONITOR]: "script_monitor.description",
					[u.CONNECTION_MONITOR]: "connection_monitor.description",
					[u.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				Te = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", R => (a().sendEvent(j.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				Pe = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", R => (a().sendEvent(j.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				we = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", R => (a().sendEvent(j.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				Ae = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				Me = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", R => (a().sendEvent(j.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				ke = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				Se = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", R => (a().sendEvent(j.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				K = (0, e.ZP)("pageShieldPolicies", "get", "/zones/(zoneId)/page_shield/policies").on("success", R => (a().sendEvent(j.VIEW_PAGE_SHIELD_POLICIES, {
					category: "user journey",
					product: "Page shield"
				}), R)),
				me = (0, e.ZP)("pageShieldPolicy", "get", "/zones/(zoneId)/page_shield/policies/(policiesId)"),
				Le = (0, e.ZP)("pageShieldPolicy", "put", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", R => (a().sendEvent(j.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "update"
				}), R)),
				qe = (0, e.ZP)("pageShieldPolicy", "delete", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", R => (a().sendEvent(j.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "delete"
				}), R)),
				ot = (0, e.ZP)("pageShieldPolicy", "post", "/zones/(zoneId)/page_shield/policies").on("success", R => (a().sendEvent(j.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "create"
				}), R)),
				et = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				st = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var ze = n("../react/app/redux/normalizer.js");
			const He = R => R.pageShield.configuration,
				mt = R => {
					var X;
					return (X = R.pageShield.configuration.data) === null || X === void 0 ? void 0 : X.enabled
				},
				Z = R => {
					var X;
					return (X = He(R)) === null || X === void 0 ? void 0 : X.data
				},
				le = R => R.pageShield.scripts,
				Ce = R => R.pageShield.script,
				Fe = R => R.pageShield.connections,
				We = R => R.pageShield.connection,
				Be = R => R.pageShield.policies,
				Ze = R => R.pageShield.policy,
				tt = (0, ze.P1)("pageShieldScripts", le),
				lt = (0, ze.P1)("pageShieldScript", Ce),
				rt = (0, ze.P1)("pageShieldConnections", Fe),
				gt = (0, ze.P1)("pageShieldConnection", We),
				ft = (0, ze.P1)("pageShieldPolicies", Be),
				ut = (0, ze.P1)("pageShieldPolicy", Ze),
				Ue = (R, X) => R === u.SCRIPT_MONITOR ? tt(X) || [] : rt(X) || [],
				he = (R, X) => R === u.SCRIPT_MONITOR ? le(X) || [] : Fe(X) || [],
				Ge = (R, X) => R === u.SCRIPT_MONITOR ? lt(X) : gt(X),
				dt = R => R.pageShield.domainIntel,
				it = R => R.pageShield.whoIsRecord,
				_t = (R, X, te) => {
					var ge;
					const ve = Object.values(te).map(Ne => ({
						key: Ne,
						label: B[Ne],
						score: R[Ne]
					})).filter(Ne => Ne.score !== void 0 && Ne.score <= X);
					return X === v && ve.length === 0 && ((ge = R.js_integrity_score) !== null && ge !== void 0 ? ge : 100) <= X && ve.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), ve
				},
				V = (R, X) => Object.values(X).filter(te => R[te] === !0).map(te => z[te]),
				se = R => R === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				Ee = (R, X) => R[c.MagecartScore] !== void 0 && R[c.MagecartScore] <= X || R[c.MalwareScore] !== void 0 && R[c.MalwareScore] <= X || R[c.CryptominingScore] !== void 0 && R[c.CryptominingScore] <= X || R.js_integrity_score !== void 0 && R.js_integrity_score <= X,
				Oe = ["cdn.jsdelivr.net", "unpkg.com"],
				Re = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				je = R => {
					if (R.includes("@latest")) {
						const te = R.split("@latest");
						if (te.length != 2) return;
						const ge = te[0].length,
							ve = ge + "@latest".length;
						return [ge, ve]
					}
					if (!!Oe.some(te => R.includes(te)))
						for (const te of Re) {
							const ge = R.match(te);
							if (!ge) continue;
							const ve = ge.index;
							if (ve === 0) return null;
							const Ne = ve + ge[0].length;
							return [ve, Ne]
						}
				}
		},
		"../react/pages/security/resources/constants.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				_C: function() {
					return u
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
					return D
				},
				rj: function() {
					return A
				},
				yR: function() {
					return T
				},
				zf: function() {
					return C
				}
			});
			var e = n("../node_modules/@cloudflare/component-link/es/index.js"),
				o = n("../../../common/util/types/src/api/phases/fields.tsx"),
				a = n("webpack/sharing/consume/default/react/react"),
				p = n.n(a),
				l = n("../react/utils/translator.tsx"),
				m = n("../react/pages/security/resources/types.ts"),
				i = n("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx");

			function d(v) {
				for (var k = 1; k < arguments.length; k++) {
					var P = arguments[k] != null ? Object(arguments[k]) : {},
						b = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(P).filter(function(L) {
						return Object.getOwnPropertyDescriptor(P, L).enumerable
					})), b.forEach(function(L) {
						g(v, L, P[L])
					})
				}
				return v
			}

			function g(v, k, P) {
				return k = t(k), k in v ? Object.defineProperty(v, k, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[k] = P, v
			}

			function t(v) {
				var k = r(v, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function r(v, k) {
				if (typeof v != "object" || v === null) return v;
				var P = v[Symbol.toPrimitive];
				if (P !== void 0) {
					var b = P.call(v, k || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(v)
			}
			const s = 10;
			let u = function(v) {
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
					type: "ip",
					template: u.GEOGRAPHY_BASE,
					trackedEvent: f.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: u.IP_BASED,
					trackedEvent: f.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: u.USER_AGENT,
					trackedEvent: f.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: u.ZONE_LOCKDOWN,
					trackedEvent: f.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				C = {
					[m.X.UI_SECTION]: v => ({
						[u.MTLS_ACCESS]: {
							ruleName: u.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: p().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: p().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${v.account.id}/${v.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[u.ZONE_LOCKDOWN]: {
							ruleName: u.ZONE_LOCKDOWN,
							displayName: p().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: p().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${v.account.id}/configurations/lists`
								}]
							})
						},
						[u.USER_AGENT]: {
							ruleName: u.USER_AGENT,
							displayName: p().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: p().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${v.account.id}/configurations/lists`
								}]
							})
						},
						[u.EMAIL_VALIDITY]: {
							ruleName: u.EMAIL_VALIDITY,
							capability: "security_rules.rules.capability.fraud",
							displayName: p().createElement(l.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: p().createElement(l.cC, {
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
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot))"',
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
							displayName: p().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: p().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let h = function(v) {
				return v.DISCOVERY = "discovery", v.SEQUENCES = "sequences", v.SCHEMA_VALIDATION = "schema-validation", v.SETTINGS = "settings", v.API_RULES = "api-rules", v.UPGRADE = "upgrade", v
			}({});
			const D = d({}, i.g, {
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
			let T = function(v) {
				return v.APP_SEC_MVP = "app-security-navigation-mvp", v
			}({})
		},
		"../react/pages/security/resources/types.ts": function(W, E, n) {
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
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(W, E, n) {
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

			function a(g) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t] != null ? Object(arguments[t]) : {},
						s = Object.keys(r);
					typeof Object.getOwnPropertySymbols == "function" && s.push.apply(s, Object.getOwnPropertySymbols(r).filter(function(u) {
						return Object.getOwnPropertyDescriptor(r, u).enumerable
					})), s.forEach(function(u) {
						p(g, u, r[u])
					})
				}
				return g
			}

			function p(g, t, r) {
				return t = l(t), t in g ? Object.defineProperty(g, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[t] = r, g
			}

			function l(g) {
				var t = m(g, "string");
				return typeof t == "symbol" ? t : String(t)
			}

			function m(g, t) {
				if (typeof g != "object" || g === null) return g;
				var r = g[Symbol.toPrimitive];
				if (r !== void 0) {
					var s = r.call(g, t || "default");
					if (typeof s != "object") return s;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (t === "string" ? String : Number)(g)
			}
			let i = function(g) {
				return g.CLICK_OPT_IN = "click opt in security navigation", g.CLICK_OPT_IN_BUTTON = "click opt in button", g.CLICK_OPT_OUT_BUTTON = "click opt out button", g.CLICK_NEXT_STEP = "click opt in next step", g.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", g
			}({});
			const d = (g, t = {}) => {
				o().sendEvent(g, a({}, t || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$y: function() {
					return s
				},
				Ai: function() {
					return d
				},
				BT: function() {
					return l
				},
				F3: function() {
					return u
				},
				JP: function() {
					return a
				},
				O_: function() {
					return g
				},
				X2: function() {
					return p
				},
				YO: function() {
					return c
				},
				_c: function() {
					return f
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
					return t
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const a = async _ => {
				var C, A;
				const h = await (0, e.get)(`/zones/${_}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((C = h == null ? void 0 : h.body) === null || C === void 0 || (A = C.result) === null || A === void 0 ? void 0 : A.value) === "enabled"
			}, p = async (_, C) => (await (0, e.post)(`/zones/${_}/content-upload-scan/${C?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), C), l = async _ => {
				var C;
				const A = await (0, e.get)(`/zones/${_}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((C = A == null ? void 0 : A.body) === null || C === void 0 ? void 0 : C.result) || []
			}, m = async (_, C) => {
				var A;
				const h = await (0, e.post)(`/zones/${_}/content-upload-scan/payloads`, {
					body: [C]
				});
				return (A = h == null ? void 0 : h.body) === null || A === void 0 ? void 0 : A.result
			}, i = async (_, C) => (await (0, e.del)(`/zones/${_}/content-upload-scan/payloads/${C}`, {
				hideErrorAlert: !0
			}), C), d = async _ => {
				var C, A;
				const h = await (0, e.get)(`/zones/${_}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((C = h == null ? void 0 : h.body) === null || C === void 0 || (A = C.result) === null || A === void 0 ? void 0 : A.enabled)
			}, g = async (_, C) => {
				var A, h;
				const D = await (0, e.post)(`/zones/${_}/leaked-credential-checks`, {
					body: {
						enabled: C
					}
				});
				return !!((A = D == null ? void 0 : D.body) === null || A === void 0 || (h = A.result) === null || h === void 0 ? void 0 : h.enabled)
			}, t = async _ => {
				var C;
				const A = await (0, e.get)(`/zones/${_}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (C = A == null ? void 0 : A.body) === null || C === void 0 ? void 0 : C.result
			}, r = async (_, C) => {
				var A;
				const h = await (0, e.post)(`/zones/${_}/leaked-credential-checks/detections`, {
					body: C
				});
				return (A = h == null ? void 0 : h.body) === null || A === void 0 ? void 0 : A.result
			}, s = async (_, C) => (await (0, e.del)(`/zones/${_}/leaked-credential-checks/detections/${C}`, {
				hideErrorAlert: !0
			}), C), u = async (_, C) => {
				await (0, e.put)(`/zones/${_}/security-center/securitytxt`, {
					body: C
				})
			}, c = async _ => {
				await (0, e.del)(`/zones/${_}/security-center/securitytxt`)
			}, f = async _ => (await (0, e.get)(`/zones/${_}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Xu: function() {
					return T
				},
				Io: function() {
					return x
				},
				FQ: function() {
					return ae
				},
				vU: function() {
					return D
				},
				M: function() {
					return k
				},
				d7: function() {
					return v
				},
				Oz: function() {
					return U
				},
				Np: function() {
					return I
				},
				WR: function() {
					return s
				},
				vE: function() {
					return C
				},
				bE: function() {
					return G
				},
				u_: function() {
					return h
				},
				kU: function() {
					return A
				},
				pf: function() {
					return Q
				}
			});
			var e = n("../../../../node_modules/react-query/es/index.js"),
				o = n("../react/pages/security/settings/hooks/api.ts"),
				a = n("webpack/sharing/consume/default/react/react"),
				p = n("webpack/sharing/consume/default/react-redux/react-redux"),
				l = n("../react/pages/security/settings/resources/index.ts"),
				m = n("../react/common/hooks/useZoneEntitlement.ts"),
				i = n("../react/common/hooks/useGate.ts"),
				d = n("../react/pages/security/api-shield/utils/useApiShield.tsx"),
				g = n("../react/pages/security/api-shield/entitlements.tsx"),
				t = n("../../../../node_modules/yup/es/index.js"),
				r = n("../react/utils/translator.tsx");
			const s = () => (0, p.useSelector)(l.ui),
				u = "central_endpoint_list.endpoint_labels_allowed",
				c = "system-and-user-generated-labels",
				f = () => !!(0, i.Z)(c),
				_ = () => !!(0, m.Z)(u),
				C = () => {
					const M = f(),
						F = _();
					return {
						isLabelsGateOpen: M,
						hasEndpointLabelsEntitlement: F,
						hasLabels: M && F
					}
				},
				A = () => {
					const {
						hasApiShields: M
					} = (0, d.R)(), {
						hasLabels: F
					} = C(), B = (0, g.Dg)();
					return F && B && M
				},
				h = () => {
					const {
						t: M
					} = (0, r.QT)(), F = t.Z_().required(M("common.field_is_required")).max(24, M("labels.apply.form.name.error.max_characters")).matches(l.DG, M("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", M("labels.apply.form.name.error.cf_forbidden"), j => !l.aW.test(j)), B = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: j => t.Ry().shape({
							[l.n5.NAME]: j ? t.Z_() : F,
							[l.n5.DESCRIPTION]: j ? t.Z_().optional() : t.Z_().max(150, M("labels.apply.form.description.error.max_characters"))
						})
					}, z = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[l.N2.NAME]: "",
							[l.N2.SOURCE]: l.W3,
							[l.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => t.Ry().shape({
							[l.N2.NEW_LABEL_NAME]: F
						})
					};
					return {
						LABELS_APPLY_FORM: B,
						EDIT_LABELS_MODAL_FORM: z
					}
				},
				D = ({
					modalHeaderFixedHeight: M = 62,
					modalDefaultPaddings: F = 16
				} = {}) => {
					const B = (0, a.useRef)(null),
						z = (0, a.useRef)(null),
						[j, ee] = (0, a.useState)(0),
						[ie, _e] = (0, a.useState)(0),
						ye = `calc(100vh - ${j}px - ${ie}px - ${F}px)`,
						[Te, Pe] = (0, a.useState)("");
					return (0, a.useEffect)(() => {
						const we = () => {
							var Ae, Me, ke, Se;
							const K = B == null || (Ae = B.current) === null || Ae === void 0 ? void 0 : Ae.offsetHeight,
								me = z == null || (Me = z.current) === null || Me === void 0 ? void 0 : Me.offsetHeight,
								Le = ((ke = K) !== null && ke !== void 0 ? ke : 0) + M,
								qe = (Se = me) !== null && Se !== void 0 ? Se : 0;
							ee(Le), _e(qe)
						};
						return we(), window.addEventListener("resize", we), () => window.removeEventListener("resize", we)
					}, []), {
						searchTerm: Te,
						setSearchTerm: Pe,
						scrollableSectionMaxHeight: ye,
						topMenuRef: B,
						bottomMenuRef: z
					}
				},
				T = M => {
					const F = s(),
						B = (0, e.useQueryClient)(),
						z = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${M}`,
							queryFn: () => (0, o.JP)(M),
							enabled: F
						}),
						j = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${M}`,
							queryFn: () => (0, o.BT)(M),
							enabled: F && !!(z == null ? void 0 : z.data)
						}),
						ee = (0, e.useMutation)({
							mutationFn: async ({
								enabled: ye
							}) => await (0, o.X2)(M, ye),
							onSuccess: ye => {
								B.setQueryData([`content-scanning-enabled-${M}`], ye)
							}
						}),
						ie = (0, e.useMutation)({
							mutationFn: ye => (0, o.ll)(M, ye),
							onSuccess: ye => {
								B.setQueryData([`content-scanning-detections-${M}`], ye)
							}
						}),
						_e = (0, e.useMutation)({
							mutationFn: ye => (0, o.qD)(M, ye),
							onSuccess: ye => {
								var Te;
								const Pe = (Te = B.getQueryData(`content-scanning-detections-${M}`)) !== null && Te !== void 0 ? Te : [];
								B.setQueryData([`content-scanning-detections-${M}`], Pe.filter(({
									id: we
								}) => we !== ye))
							}
						});
					return {
						entitled: F,
						loading: z.isLoading || j.isLoading,
						error: z.isError || j.isError,
						enabled: {
							data: z.data,
							isToggling: ee.isLoading,
							toggleEnabled: async ye => ee.mutateAsync({
								enabled: ye
							})
						},
						detections: {
							data: j.data,
							add: ie.mutateAsync,
							delete: _e.mutateAsync,
							loading: ie.isLoading || _e.isLoading
						}
					}
				},
				v = () => {
					const M = (0, p.useSelector)(l.cN),
						F = (0, p.useSelector)(l.bH),
						B = (0, p.useSelector)(l.P3),
						z = (0, p.useSelector)(l.Ri);
					return {
						hasEditPermission: M,
						isEnabled: B && (F.hasSimilarLeaked || F.hasUsernameAndPasswordLeaked || z)
					}
				},
				k = M => {
					const F = v(),
						B = (0, e.useQueryClient)(),
						z = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${M}`,
							queryFn: () => (0, o.Ai)(M),
							enabled: !!F.isEnabled,
							retry: 1
						}),
						j = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${M}`,
							queryFn: () => (0, o.tw)(M),
							enabled: !!F.isEnabled && !!(z == null ? void 0 : z.data)
						}),
						ee = (0, e.useMutation)({
							mutationFn: ({
								enabled: ye
							}) => (0, o.O_)(M, ye),
							onSuccess: ye => {
								B.setQueryData([`leaked-credentials-enabled-${M}`], ye)
							}
						}),
						ie = (0, e.useMutation)({
							mutationFn: async ye => await (0, o.je)(M, ye),
							onSuccess: ye => {
								var Te;
								const Pe = (Te = B.getQueryData(`leaked-credentials-detections-${M}`)) !== null && Te !== void 0 ? Te : [];
								B.setQueryData([`leaked-credentials-detections-${M}`], [...Pe, ye])
							}
						}),
						_e = (0, e.useMutation)({
							mutationFn: ye => (0, o.$y)(M, ye),
							onSuccess: ye => {
								var Te;
								const Pe = (Te = B.getQueryData(`leaked-credentials-detections-${M}`)) !== null && Te !== void 0 ? Te : [];
								B.setQueryData([`leaked-credentials-detections-${M}`], Pe.filter(({
									id: we
								}) => we !== ye))
							}
						});
					return {
						entitled: F.isEnabled,
						hasEditPermissions: F.hasEditPermission,
						loading: z.isLoading || j.isLoading,
						error: z.isError || z.isError,
						enabled: {
							data: z.data,
							isToggling: ee.isLoading,
							toggleEnabled: async ye => ee.mutateAsync({
								enabled: ye
							})
						},
						detections: {
							data: j.data,
							add: ie.mutateAsync,
							delete: _e.mutateAsync,
							loading: ie.isLoading || _e.isLoading
						}
					}
				};
			var P = n("../react/common/selectors/zoneSelectors.ts"),
				b = n("../react/common/utils/useQueryCache.ts"),
				L = n("../react/app/redux/index.ts");
			const O = "security-txt",
				S = {
					securityTxt: ({
						zoneId: M
					}) => [O, M]
				},
				U = M => (0, e.useQuery)({
					queryKey: S.securityTxt({
						zoneId: M
					}),
					queryFn: () => (0, o._c)(M),
					select: F => F.result
				}),
				x = () => {
					const M = (0, L.p4)(P.Cu),
						{
							invalidate: F
						} = (0, b.o)(S.securityTxt({
							zoneId: M
						}));
					return (0, e.useMutation)({
						mutationFn: () => (0, o.YO)(M),
						onSuccess: async () => {
							await F(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				Q = M => {
					const {
						invalidate: F
					} = (0, b.o)(S.securityTxt({
						zoneId: M
					}));
					return (0, e.useMutation)({
						mutationFn: B => (0, o.F3)(M, B),
						onSuccess: async () => {
							await F(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var oe = n("../../../../node_modules/lodash/isEqual.js"),
				pe = n.n(oe),
				ue = n("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function ce(M) {
				for (var F = 1; F < arguments.length; F++) {
					var B = arguments[F] != null ? Object(arguments[F]) : {},
						z = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(B).filter(function(j) {
						return Object.getOwnPropertyDescriptor(B, j).enumerable
					})), z.forEach(function(j) {
						H(M, j, B[j])
					})
				}
				return M
			}

			function H(M, F, B) {
				return F = J(F), F in M ? Object.defineProperty(M, F, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[F] = B, M
			}

			function J(M) {
				var F = Y(M, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function Y(M, F) {
				if (typeof M != "object" || M === null) return M;
				var B = M[Symbol.toPrimitive];
				if (B !== void 0) {
					var z = B.call(M, F || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(M)
			}
			const I = M => {
					const {
						queryKey: F,
						zoneId: B
					} = (0, ue.hL)(M), {
						isLoading: z,
						isError: j,
						isSuccess: ee,
						data: ie,
						refetch: _e,
						isRefetching: ye
					} = (0, e.useQuery)({
						queryKey: F,
						queryFn: () => ue.Mi.getLabels(ce({
							zoneId: B
						}, M)),
						onSuccess: () => {
							var Te;
							const Pe = M == null || (Te = M.filters) === null || Te === void 0 ? void 0 : Te.source;
							(Pe === l.LABEL_SOURCES.MANAGED || Pe === l.LABEL_SOURCES.USER) && (0, l.Tf)({
								name: l.QJ.FILTER_USER_MANAGED_LABELS,
								product: l.Iv.SECURITY_SETTINGS,
								pageName: l.R.LABELS_LIST,
								type: Pe
							})
						}
					});
					return {
						data: ie == null ? void 0 : ie.result,
						errors: ie == null ? void 0 : ie.errors,
						paginationData: ie == null ? void 0 : ie.result_info,
						isLoading: z,
						isError: j,
						isSuccess: ee,
						refetch: _e,
						isRefetching: ye
					}
				},
				G = ({
					labels: M,
					preselectedLabels: F
				}) => {
					const {
						USER: B,
						MANAGED: z
					} = l.LABEL_SOURCES, [j, ee] = (0, a.useState)({
						[B]: [],
						[z]: []
					}), [ie, _e] = (0, a.useState)(new Set), ye = ie.size > 0, [Te, Pe] = (0, a.useState)(!1), we = Se => {
						_e(K => {
							const me = new Set(K);
							return me.has(Se.name) ? me.delete(Se.name) : me.add(Se.name), me
						})
					}, Ae = Se => ie.has(Se.name), Me = (Se, K) => {
						const me = Ae(Se) ? 1 : 0;
						return (Ae(K) ? 1 : 0) - me
					}, ke = Se => {
						ee(K => ({
							[B]: [...Se ? Se[B] : K[B]].sort(Me),
							[z]: [...Se ? Se[z] : K[z]].sort(Me)
						}))
					};
					return (0, a.useEffect)(() => {
						if (M && !Te) {
							if (F) {
								const Se = new Set;
								M.forEach(K => {
									F.some(me => pe()(me, K)) && Se.add(K.name)
								}), _e(Se)
							}
							Pe(!0)
						}
					}, [M, F, Te]), (0, a.useEffect)(() => {
						if (M && Te) {
							const Se = M.reduce((me, Le) => (Le.source === B ? me[B].push(Le) : Le.source === z && me[z].push(Le), me), {
									[B]: [],
									[z]: []
								}),
								K = {
									[B]: Se[B].sort(Me),
									[z]: Se[z].sort(Me)
								};
							ee(K)
						}
					}, [B, z, M, Te]), {
						userAndManagedLabels: j,
						setUserAndManagedLabels: ee,
						toggleSelectedLabel: we,
						isLabelSelected: Ae,
						sortLabelsBySelectedStatus: ke,
						hasLabelsSelected: ye
					}
				};
			var ne = n("../react/pages/security/settings/resources/selectors.ts");
			const ae = (M = "") => {
				const F = (0, L.p4)(ne.Xs),
					B = F && (M == null ? void 0 : M.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: F,
					hasDeprecatedParameter: B
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(W, E, n) {
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
				a = n("webpack/sharing/consume/default/react/react"),
				p = n.n(a),
				l = n("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				m = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = n.n(m),
				d = n("../react/pages/security/settings/hooks/index.ts"),
				g = n("../react/pages/security/settings/resources/index.ts");
			const t = p().lazy(() => Promise.all([n.e(37800), n.e(39074), n.e(16691), n.e(19341), n.e(12174), n.e(57062), n.e(22952), n.e(4e4), n.e(51436), n.e(70618), n.e(68204), n.e(2515), n.e(65022), n.e(60911), n.e(8924), n.e(77216), n.e(40517), n.e(39760), n.e(63779), n.e(60734), n.e(25390), n.e(9147), n.e(68665), n.e(87940), n.e(42185)]).then(n.bind(n, "../react/pages/security/settings/SettingsRoute.tsx"))),
				r = () => {
					const {
						t: s
					} = (0, m.useI18n)(), u = (0, e.xk)("waf");
					return p().createElement(l.T3, {
						parentPageLabel: s("navigation.zone.security"),
						title: s("navigation.zone.security.settings"),
						type: "narrow"
					}, u.read ? p().createElement(t, null) : p().createElement(o.Z, null))
				};
			E.ZP = r
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Mi: function() {
					return h
				},
				hL: function() {
					return A
				}
			});
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/zoneSelectors.ts"),
				a = n("../react/common/utils/useQueryCache.ts"),
				p = n("../react/pages/security/settings/resources/constants.ts"),
				l = n("../react/common/hooks/useAccountId.ts"),
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

			function s(T, v) {
				if (T == null) return {};
				var k = u(T, v),
					P, b;
				if (Object.getOwnPropertySymbols) {
					var L = Object.getOwnPropertySymbols(T);
					for (b = 0; b < L.length; b++) P = L[b], !(v.indexOf(P) >= 0) && (!Object.prototype.propertyIsEnumerable.call(T, P) || (k[P] = T[P]))
				}
				return k
			}

			function u(T, v) {
				if (T == null) return {};
				var k = {},
					P = Object.keys(T),
					b, L;
				for (L = 0; L < P.length; L++) b = P[L], !(v.indexOf(b) >= 0) && (k[b] = T[b]);
				return k
			}

			function c(T) {
				for (var v = 1; v < arguments.length; v++) {
					var k = arguments[v] != null ? Object(arguments[v]) : {},
						P = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(k).filter(function(b) {
						return Object.getOwnPropertyDescriptor(k, b).enumerable
					})), P.forEach(function(b) {
						f(T, b, k[b])
					})
				}
				return T
			}

			function f(T, v, k) {
				return v = _(v), v in T ? Object.defineProperty(T, v, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[v] = k, T
			}

			function _(T) {
				var v = C(T, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function C(T, v) {
				if (typeof T != "object" || T === null) return T;
				var k = T[Symbol.toPrimitive];
				if (k !== void 0) {
					var P = k.call(T, v || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(T)
			}
			const A = T => {
					const v = (0, e.p4)(o.Cu),
						k = (0, l.F)(),
						P = D.labels(c({
							accountId: k,
							zoneId: v
						}, T ? c({}, T) : {})),
						b = (0, a.o)(P);
					return c({
						zoneId: v,
						queryKey: P,
						batchInvalidateLabels: async () => {
							await b.batchInvalidate({
								queryKeysToPredicateInvalidate: [p.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, b)
				},
				h = {
					getLabels: async T => {
						var v, k, P, b;
						let {
							zoneId: L,
							hideErrorAlert: O = !0
						} = T, S = s(T, ["zoneId", "hideErrorAlert"]);
						return (await m.get(d.labels.toUrl({
							zoneId: L
						}), {
							parameters: {
								page: S == null ? void 0 : S.page,
								per_page: S == null ? void 0 : S.per_page,
								with_mapped_resource_counts: S == null ? void 0 : S.with_mapped_resource_counts,
								filter: S == null || (v = S.filters) === null || v === void 0 ? void 0 : v.search,
								source: (0, t.sQ)(S == null || (k = S.filters) === null || k === void 0 ? void 0 : k.source),
								order: S == null || (P = S.sort) === null || P === void 0 ? void 0 : P.id,
								direction: (S == null ? void 0 : S.sort) ? (S == null || (b = S.sort) === null || b === void 0 ? void 0 : b.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: O
						})).body
					},
					getLabel: async T => {
						let {
							zoneId: v,
							labelName: k,
							hideErrorAlert: P = !0
						} = T, b = s(T, ["zoneId", "labelName", "hideErrorAlert"]);
						const L = (0, t.mm)(k) ? d.managedLabel.toUrl({
							zoneId: v,
							labelName: k
						}) : d.userLabel.toUrl({
							zoneId: v,
							labelName: k
						});
						return (await m.get(L, {
							parameters: {
								with_mapped_resource_counts: b == null ? void 0 : b.with_mapped_resource_counts
							},
							hideErrorAlert: P
						})).body
					},
					editLabel: async ({
						zoneId: T,
						label: v,
						replace: k
					}) => {
						const {
							name: P
						} = v, b = s(v, ["name"]);
						return (await (k ? m.put : m.patch)(d.userLabel.toUrl({
							zoneId: T,
							labelName: v.name
						}), {
							body: b
						})).body
					},
					deleteLabel: async ({
						zoneId: T,
						labelName: v
					}) => (await m.del(d.userLabel.toUrl({
						zoneId: T,
						labelName: v
					}))).body,
					createLabel: async T => {
						let {
							zoneId: v
						} = T, k = s(T, ["zoneId"]);
						const {
							product: P
						} = k, b = s(k, ["product"]);
						return (await m.post(d.userLabels.toUrl({
							zoneId: v
						}), {
							body: [b]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: T,
						user: v,
						managed: k,
						operationIds: P,
						replace: b
					}) => (await (b ? m.put : m.post)(d.operationsLinkedToLabels.toUrl({
						zoneId: T
					}), {
						body: c({}, v ? {
							user: {
								labels: v
							}
						} : {}, k ? {
							managed: {
								labels: k
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: P
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: T,
						labelName: v,
						operationIds: k
					}) => {
						const P = (0, t.mm)(v) ? d.managedLabelOperations.toUrl({
							zoneId: T,
							labelName: v
						}) : d.userLabelOperations.toUrl({
							zoneId: T,
							labelName: v
						});
						return (await m.put(P, {
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
				D = {
					labels: T => {
						let {
							accountId: v,
							zoneId: k
						} = T, P = s(T, ["accountId", "zoneId"]);
						return [p.IQ.LABELS, v, k, ...(0, g.isEmpty)(P) ? [] : [P]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				DG: function() {
					return _
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return i
				},
				GE: function() {
					return k
				},
				IQ: function() {
					return p
				},
				KV: function() {
					return m
				},
				LABELS_LIST_TOASTS: function() {
					return u
				},
				LABEL_SOURCES: function() {
					return l
				},
				QH: function() {
					return c
				},
				V: function() {
					return D
				},
				W3: function() {
					return a
				},
				_8: function() {
					return s
				},
				_c: function() {
					return T
				},
				aW: function() {
					return C
				},
				dC: function() {
					return b
				},
				gY: function() {
					return v
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
					return P
				}
			});
			var e = n("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let o = function(L) {
				return L.EXPOSED_CREDENTIALS = "exposed_credentials", L.CONTENT_SCANNING = "content_scanning", L
			}({});
			const a = "all";
			let p = function(L) {
					return L.LABELS = "labels", L
				}({}),
				l = function(L) {
					return L.USER = "user", L.MANAGED = "managed", L
				}({}),
				m = function(L) {
					return L.SOURCE = "source", L
				}({}),
				i = function(L) {
					return L.NAME = "name", L.SOURCE = "source", L.NEW_LABEL_NAME = "newLabelName", L
				}({}),
				d = function(L) {
					return L.ENDPOINT = "endpoint", L.METHOD = "method", L.OPERATION_ID = "operationId", L
				}({}),
				g = function(L) {
					return L.NAME = "name", L.MAPPED_RESOURCES = "mapped_resources.operations", L.SOURCE = "source", L.APPLY = "apply", L
				}({});
			const s = {
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
			let u = function(L) {
				return L.CREATED_LABEL = "createdLabel", L.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", L.DELETED_LABEL = "deletedLabel", L.APPLIED_LABEL = "appliedLabel", L.EDITED_LABEL = "editedLabel", L.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", L
			}({});
			const c = "650px",
				f = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				_ = /^[A-Za-z0-9-]+$/,
				C = /^cf-/;
			let A = function(L) {
				return L.NAME = "name", L.DESCRIPTION = "description", L
			}({});
			const h = "all";
			let D = function(L) {
				return L.METHOD = "method", L.HOSTNAME = "hostname", L
			}({});
			const T = {
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
						[D.METHOD]: h,
						[D.HOSTNAME]: h
					}
				},
				filters: D
			};
			let v = function(L) {
				return L.TITLE = "title", L.DESCRIPTION = "description", L.SUBMIT = "submit", L
			}({});
			const k = 1e3,
				P = {
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
		"../react/pages/security/settings/resources/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return u
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
					return a.QF
				},
				vc: function() {
					return a.vc
				},
				ZF: function() {
					return s
				},
				Xs: function() {
					return A.Xs
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
					return A.bH
				},
				Mb: function() {
					return a.Mb
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
					return C
				},
				Tf: function() {
					return _
				},
				$E: function() {
					return a.$E
				}
			});
			var e = n("../react/pages/security/settings/resources/constants.ts"),
				o = n("../react/pages/security/settings/resources/types.ts"),
				a = n("../react/pages/security/settings/resources/utils.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = n.n(p);

			function m(h) {
				for (var D = 1; D < arguments.length; D++) {
					var T = arguments[D] != null ? Object(arguments[D]) : {},
						v = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(T).filter(function(k) {
						return Object.getOwnPropertyDescriptor(T, k).enumerable
					})), v.forEach(function(k) {
						i(h, k, T[k])
					})
				}
				return h
			}

			function i(h, D, T) {
				return D = d(D), D in h ? Object.defineProperty(h, D, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[D] = T, h
			}

			function d(h) {
				var D = g(h, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function g(h, D) {
				if (typeof h != "object" || h === null) return h;
				var T = h[Symbol.toPrimitive];
				if (T !== void 0) {
					var v = T.call(h, D || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(h)
			}
			let t = function(h) {
					return h.LABELS_LIST = "Labels List page", h.LABELS_APPLY = "Labels Apply page", h.LABELS_SIDE_MODAL = "Labels Side Modal", h.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", h.LABELS_OPERATION_DETAILS = "Operation Details page", h
				}({}),
				r = function(h) {
					return h.API_SHIELD = "API Shield", h.SECURITY_SETTINGS = "Security Settings", h
				}({}),
				s = function(h) {
					return h.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", h.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", h.OPERATIONS_TABLE_ROW = "Operations table row", h.OPERATION_DETAILS_PAGE = "Operation details page", h
				}({}),
				u = function(h) {
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
					product: D,
					category: T = "user journey",
					pageName: v,
					from: k,
					write_strategy: P,
					type: b,
					target: L
				}) => {
					l().sendEvent(h, m({
						category: T,
						pageName: v,
						product: D
					}, k ? {
						from: k
					} : {}, P ? {
						write_strategy: P
					} : {}, b ? {
						type: b
					} : {}, L ? {
						target: L
					} : {}))
				},
				C = () => {
					var h;
					return (h = Object.values(f)) === null || h === void 0 ? void 0 : h.flat()
				};
			var A = n("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(W, E, n) {
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
				a = n("../react/common/selectors/entitlementsSelectors.ts"),
				p = n("../react/pages/security/settings/resources/constants.ts"),
				l = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const m = s => {
					const u = (0, e.RO)(s),
						c = !!(0, a.rV)(s, "rulesets.file_upload_scan_allowed"),
						f = !!(0, a.BF)(s, "rulesets.file_upload_scan_allowed");
					return (0, o.el)(window.location.pathname) ? u && (c || f) : f
				},
				i = s => Number((0, a.rV)(s, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				d = s => (0, a.rV)(s, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				g = s => (0, a.rV)(s, "rulesets.leaked_credential_checks_allowed"),
				t = s => (0, l.z1)(p.dC)(s) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, a.rV)(s, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, a.rV)(s, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				r = s => !!(0, l.z1)("deprecate-security-level")(s)
		},
		"../react/pages/security/settings/resources/types.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				T: function() {
					return o
				}
			});
			var e = n("../react/pages/security/settings/resources/constants.ts");
			let o = function(a) {
				return a.ENABLED = "enabled", a.CONTACT = "contact", a.EXPIRES = "expires", a.ENCRYPTION = "encryption", a.ACKNOWLEDGMENTS = "acknowledgments", a.CANONICAL = "canonical", a.HIRING = "hiring", a.POLICY = "policy", a.PREFERRED_LANGUAGES = "preferred_languages", a
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$E: function() {
					return s
				},
				Mb: function() {
					return u
				},
				N2: function() {
					return D
				},
				Q4: function() {
					return f
				},
				QF: function() {
					return r
				},
				Vy: function() {
					return C
				},
				Wv: function() {
					return c
				},
				mm: function() {
					return h
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
				a = n("../react/pages/security/settings/routes.tsx"),
				p = n("../react/pages/security/settings/resources/constants.ts"),
				l = n("../react/pages/security/settings/resources/types.ts"),
				m = n("../react/pages/analytics/common/utils/gqlUtils.js");

			function i(T) {
				for (var v = 1; v < arguments.length; v++) {
					var k = arguments[v] != null ? Object(arguments[v]) : {},
						P = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(k).filter(function(b) {
						return Object.getOwnPropertyDescriptor(k, b).enumerable
					})), P.forEach(function(b) {
						d(T, b, k[b])
					})
				}
				return T
			}

			function d(T, v, k) {
				return v = g(v), v in T ? Object.defineProperty(T, v, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[v] = k, T
			}

			function g(T) {
				var v = t(T, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function t(T, v) {
				if (typeof T != "object" || T === null) return T;
				var k = T[Symbol.toPrimitive];
				if (k !== void 0) {
					var P = k.call(T, v || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(T)
			}
			const r = {
					[l.T.ENABLED]: !0,
					[l.T.CONTACT]: [""],
					[l.T.EXPIRES]: ""
				},
				s = {
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
				u = T => e.Ry({
					[l.T.CONTACT]: e.IX().of(e.Z_().required(T("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, T("security_txt.fields.contact.format_error"))),
					[l.T.EXPIRES]: e.hT().required(T("common.required")).min(new Date, T("security_txt.fields.expires.min_error"))
				}),
				c = T => {
					const v = {};
					for (const k in T) v[k] = Array.isArray(T[k]) ? T[k].filter(P => !!P) : T[k];
					return i({}, v, {
						expires: (0, m.DZ)(T.expires)
					})
				},
				f = (T, v, k) => {
					const P = [...new Set([l.T.CONTACT, l.T.EXPIRES, ...Object.values(l.T)])],
						b = Object.entries(T).sort(([L], [O]) => P.indexOf(L) - P.indexOf(O)).filter(([L, O]) => !!s[L] && !!O && (!Array.isArray(O) || !!O.length)).map(([L, O]) => Array.isArray(O) ? O.map(S => `${k(s[L].label)}: ${S}`).join(`
`) : `${k(s[L].label)}: ${O}`).join(`
`);
					(0, o.yH)(`Cloudflare_${v}_security.txt`, b, "text/plain;charset=utf-8")
				};
			let _ = function(T) {
				return T.CREATED = "created security.txt", T.ENABLED = "enabled security.txt", T.DISABLED = "disabled security.txt", T.DOWNLOADED = "downloaded security.txt", T.UPDATED = "updated security.txt", T.DELETED = "deleted security.txt", T
			}({});
			const C = T => (T == null ? void 0 : T.source) === p.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (T == null ? void 0 : T.source) === p.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				A = T => T === p.W3 ? void 0 : T,
				h = T => p.aW.test(T),
				D = T => {
					switch (T) {
						case p.w.CONTENT_SCANNING:
							return a.ROUTES.CONTENT_SCANNING;
						case p.w.EXPOSED_CREDENTIALS:
							return a.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(W, E, n) {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(W, E, n) {
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

			function a(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(s).filter(function(c) {
						return Object.getOwnPropertyDescriptor(s, c).enumerable
					})), u.forEach(function(c) {
						p(t, c, s[c])
					})
				}
				return t
			}

			function p(t, r, s) {
				return r = l(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function l(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var u = s.call(t, r || "default");
					if (typeof u != "object") return u;
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
					product: s = "waf",
					productName: u = "Managed Rules",
					additionalData: c
				}) => {
					o().sendEvent(t, a({
						category: r,
						product: s,
						productName: u
					}, c || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(W, E, n) {
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
		"../react/pages/spectrum/tracking.tsx": function(W, E, n) {
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
		"../react/pages/stream/actionTypes.ts": function(W, E, n) {
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
		"../react/pages/stream/reducer.ts": function(W, E, n) {
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
				a = n("../react/pages/stream/util/pager.ts");

			function p(r) {
				for (var s = 1; s < arguments.length; s++) {
					var u = arguments[s] != null ? Object(arguments[s]) : {},
						c = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(u).filter(function(f) {
						return Object.getOwnPropertyDescriptor(u, f).enumerable
					})), c.forEach(function(f) {
						l(r, f, u[f])
					})
				}
				return r
			}

			function l(r, s, u) {
				return s = m(s), s in r ? Object.defineProperty(r, s, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = u, r
			}

			function m(r) {
				var s = i(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function i(r, s) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var c = u.call(r, s || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			const d = "stream",
				g = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function t(r = g, s) {
				switch (s.type) {
					case o.U.ResetState:
						return g;
					case o.U.SetStorageLoading:
						const {
							storageLoading: u
						} = s;
						return p({}, r, {
							storageLoading: u
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
		"../react/pages/stream/selectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Id: function() {
					return p
				},
				OU: function() {
					return t
				},
				Pf: function() {
					return l
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
					return u
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
				a = n("../react/pages/stream/reducer.ts");
			const p = C => C[a.nY],
				l = C => p(C).videos,
				m = C => p(C).videoUpdateStatuses,
				i = C => p(C).loading,
				d = C => p(C).requestTimestamp,
				g = C => p(C).storageLoading,
				t = C => p(C).storage,
				r = C => (0, o.BF)(C, "stream.enabled") || (0, e.bC)(C),
				s = C => (0, e.Le)(C, "stream", "connect"),
				u = C => (0, e.Le)(C, "stream", "stream-4371"),
				c = C => (0, e.Le)(C, "stream", "public-details-enabled"),
				f = C => !!(0, e.Le)(C, "stream", "llhls"),
				_ = C => {
					const A = t(C);
					return A !== void 0 && A.limitMins > A.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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

			function o(p, l, m) {
				const i = {
					search: m,
					limit: e.toString()
				};
				return l !== void 0 && (i.end = l), i
			}

			function a(p, l, m) {
				return {
					limit: e.toString(),
					search: m,
					asc: "true",
					start_comp: "gt",
					start: l
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(W, E, n) {
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
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(W, E, n) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				N: function() {
					return a
				},
				X: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);
			let a = function(l) {
				return l.CREATE = "create waiting room", l.UPDATE = "update waiting room", l.EVENTS = "view waiting rooms events", l.ANALYTICS = "view waiting room analytics", l.GENERATE_PREVIEW = "generate waiting room preview link", l
			}({});
			const p = async l => {
				await o().sendEvent(l, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(W, E, n) {
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

			function a(r) {
				for (var s = 1; s < arguments.length; s++) {
					var u = arguments[s] != null ? Object(arguments[s]) : {},
						c = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(u).filter(function(f) {
						return Object.getOwnPropertyDescriptor(u, f).enumerable
					})), c.forEach(function(f) {
						p(r, f, u[f])
					})
				}
				return r
			}

			function p(r, s, u) {
				return s = l(s), s in r ? Object.defineProperty(r, s, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = u, r
			}

			function l(r) {
				var s = m(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function m(r, s) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var c = u.call(r, s || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			const i = "TURNSTILE";
			let d = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const g = ({
					name: r,
					product: s = i,
					category: u = "user journey",
					page: c,
					additionalData: f = {}
				}) => {
					o().sendEvent(r, a({
						category: u,
						page: c,
						product: s
					}, f || {}))
				},
				t = () => {
					var r;
					return (r = Object.values(d)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(W, E, n) {
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

			function a(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(s).filter(function(c) {
						return Object.getOwnPropertyDescriptor(s, c).enumerable
					})), u.forEach(function(c) {
						p(t, c, s[c])
					})
				}
				return t
			}

			function p(t, r, s) {
				return r = l(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function l(t) {
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var u = s.call(t, r || "default");
					if (typeof u != "object") return u;
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
					o().sendEvent(t, a({}, r || {}))
				},
				g = () => {
					var t;
					return (t = Object.values(i)) === null || t === void 0 ? void 0 : t.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(W, E, n) {
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
		"../react/pages/zone-versioning/selectors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$e: function() {
					return k
				},
				$h: function() {
					return h
				},
				G: function() {
					return v
				},
				M3: function() {
					return b
				},
				Tr: function() {
					return C
				},
				UY: function() {
					return f
				},
				bH: function() {
					return r
				},
				fv: function() {
					return L
				},
				hF: function() {
					return D
				},
				iw: function() {
					return u
				},
				m7: function() {
					return t
				},
				re: function() {
					return T
				},
				tp: function() {
					return c
				}
			});
			var e = n("../react/app/redux/normalizer.js"),
				o = n("../../../../node_modules/reselect/lib/index.js"),
				a = n("../react/common/selectors/zoneSelectors.ts"),
				p = n("../react/app/components/SidebarNav/permissions.ts"),
				l = n("../react/common/selectors/entitlementsSelectors.ts");

			function m(O) {
				for (var S = 1; S < arguments.length; S++) {
					var U = arguments[S] != null ? Object(arguments[S]) : {},
						x = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(U).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(U, Q).enumerable
					})), x.forEach(function(Q) {
						i(O, Q, U[Q])
					})
				}
				return O
			}

			function i(O, S, U) {
				return S = d(S), S in O ? Object.defineProperty(O, S, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[S] = U, O
			}

			function d(O) {
				var S = g(O, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function g(O, S) {
				if (typeof O != "object" || O === null) return O;
				var U = O[Symbol.toPrimitive];
				if (U !== void 0) {
					var x = U.call(O, S || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(O)
			}
			const t = O => (0, a.nA)(O) ? (0, l.p1)(O) && (0, p.$n)(O, "zone_versioning", "versioning") : !1,
				r = O => O.zoneVersioning.zoneApplications,
				s = (0, e.P1)("zoneApplications", r),
				u = O => O.zoneVersioning.zoneVersions,
				c = (0, e.P1)("zoneVersions", u),
				f = (0, o.P1)(c, O => {
					if (O) return O.filter(S => S.status == "V")
				}),
				_ = O => O.zoneVersioning.environments,
				C = O => O.zoneVersioning.environments.isRequesting,
				A = (0, e.P1)("environments", _),
				h = (0, o.P1)(s, O => {
					if (O) {
						if (O.length === 1) return O[0];
						O.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${O.length}`))
					}
					return null
				}),
				D = (0, o.P1)(A, O => O ? O.environments : []),
				T = O => {
					var S;
					return (S = O.zoneVersioning) === null || S === void 0 ? void 0 : S.zoneVersionSelector
				},
				v = (0, o.P1)(T, c, (O, S) => {
					if (!(O == null ? void 0 : O.isVersion) || !S) return null;
					const U = S.find(x => {
						if (x.version === O.selectedVersion && x.locked) return !0
					});
					return U ? m({}, U, {
						isLocked: !0
					}) : null
				}),
				k = (0, o.P1)(c, D, (O, S) => !S || !O ? [] : O.map(U => {
					const x = [];
					for (const Q in S) S[Q].version === U.version && x.push(S[Q]);
					return m({}, U, {
						environments: x
					})
				})),
				P = O => O.zoneVersioning.WAFMigrationStatus,
				b = (0, e.P1)("WAFMigrationStatus", P),
				L = O => O.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				$2: function() {
					return P
				},
				CI: function() {
					return v
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
					return s
				},
				QV: function() {
					return f
				},
				X$: function() {
					return D
				},
				X6: function() {
					return g
				},
				d4: function() {
					return u
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
				for (var L = 1; L < arguments.length; L++) {
					var O = arguments[L] != null ? Object(arguments[L]) : {},
						S = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(O).filter(function(U) {
						return Object.getOwnPropertyDescriptor(O, U).enumerable
					})), S.forEach(function(U) {
						o(b, U, O[U])
					})
				}
				return b
			}

			function o(b, L, O) {
				return L = a(L), L in b ? Object.defineProperty(b, L, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[L] = O, b
			}

			function a(b) {
				var L = p(b, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function p(b, L) {
				if (typeof b != "object" || b === null) return b;
				var O = b[Symbol.toPrimitive];
				if (O !== void 0) {
					var S = O.call(b, L || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(b)
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
				u = {
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
				C = "workers.dev",
				A = "YYYY-MM-DD HH:mm:SS ZZ",
				h = "active",
				D = ["bundled", "unbound", "standard"],
				T = null,
				v = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let k = function(b) {
				return b[b.NONE = 0] = "NONE", b[b.MISS = 1] = "MISS", b[b.EXPIRED = 2] = "EXPIRED", b[b.UPDATING = 3] = "UPDATING", b[b.STALE = 4] = "STALE", b[b.HIT = 5] = "HIT", b[b.IGNORED = 6] = "IGNORED", b[b.BYPASS = 7] = "BYPASS", b[b.REVALIDATED = 8] = "REVALIDATED", b[b.DYNAMIC = 9] = "DYNAMIC", b[b.STREAM_HIT = 10] = "STREAM_HIT", b[b.DEFERRED = 11] = "DEFERRED", b
			}({});
			const P = [k.HIT, k.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
					return l
				},
				ky: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = d => `${d}.workers.dev`,
				a = (d, g, t) => `${t?`${t}.`:""}${d}.${o(g)}`,
				p = (d, g, t) => `https://${a(d,g,t)}`,
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				MN: function() {
					return a
				},
				Yg: function() {
					return l
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
			const a = async ([i, d]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: i,
					variables: d
				})
			})).body, p = async (...i) => (await e.get(...i)).body, l = i => async (d, g) => {
				const t = await fetch(d, g).then(r => r.json());
				return i.assertDecode(t)
			}, m = async (...i) => (await p(...i)).result;
			E.ZP = {
				fetcher: i => Array.isArray(i) ? m(...i) : m(i)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(W, E) {
				E()
			})(this, function() {
				"use strict";

				function W() {
					var n = !0,
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

					function l(_) {
						var C = _.type,
							A = _.tagName;
						return !!(A == "INPUT" && a[C] && !_.readOnly || A == "TEXTAREA" && !_.readOnly || _.isContentEditable)
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
						!p(_.target) || (n || l(_.target)) && m(_.target)
					}

					function r(_) {
						!p(_.target) || _.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), i(_.target))
					}

					function s(_) {
						document.visibilityState == "hidden" && (e && (n = !0), u())
					}

					function u() {
						document.addEventListener("mousemove", f), document.addEventListener("mousedown", f), document.addEventListener("mouseup", f), document.addEventListener("pointermove", f), document.addEventListener("pointerdown", f), document.addEventListener("pointerup", f), document.addEventListener("touchmove", f), document.addEventListener("touchstart", f), document.addEventListener("touchend", f)
					}

					function c() {
						document.removeEventListener("mousemove", f), document.removeEventListener("mousedown", f), document.removeEventListener("mouseup", f), document.removeEventListener("pointermove", f), document.removeEventListener("pointerdown", f), document.removeEventListener("pointerup", f), document.removeEventListener("touchmove", f), document.removeEventListener("touchstart", f), document.removeEventListener("touchend", f)
					}

					function f(_) {
						_.target.nodeName.toLowerCase() !== "html" && (n = !1, c())
					}
					document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", g, !0), document.addEventListener("pointerdown", g, !0), document.addEventListener("touchstart", g, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", s, !0), u(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function E(n) {
					var e;

					function o() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && E(W)
			})
		},
		"../react/utils/bootstrap.ts": function(W, E, n) {
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
					return a
				}
			});
			const e = () => {
					var l, m, i;
					return (l = window) === null || l === void 0 || (m = l.bootstrap) === null || m === void 0 || (i = m.data) === null || i === void 0 ? void 0 : i.security_token
				},
				o = () => {
					var l, m, i;
					return !!((l = n.g.bootstrap) === null || l === void 0 || (m = l.data) === null || m === void 0 || (i = m.user) === null || i === void 0 ? void 0 : i.id)
				},
				a = () => {
					var l, m;
					return !!((l = n.g.bootstrap) === null || l === void 0 || (m = l.data) === null || m === void 0 ? void 0 : m.is_kendo)
				},
				p = () => {
					var l, m, i, d;
					return (l = window) === null || l === void 0 || (m = l.bootstrap) === null || m === void 0 || (i = m.data) === null || i === void 0 || (d = i.user) === null || d === void 0 ? void 0 : d.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				a = () => (o() || "").indexOf("C0002") !== -1,
				p = () => (o() || "").indexOf("C0003") !== -1,
				l = () => (o() || "").indexOf("C0004") !== -1,
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
		"../react/utils/i18n.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				AI: function() {
					return D
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
					return T
				},
				fh: function() {
					return v
				},
				i_: function() {
					return s
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
				a = n("../../../common/intl/intl-types/src/index.ts"),
				p = n("../../../common/util/types/src/utils/index.ts"),
				l = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m = n("../../../../node_modules/cookie/index.js");
			const i = "cf-sync-locale-with-cps",
				d = a.Q.en_US,
				g = "en_US",
				t = "cf-locale";

			function r() {
				const b = (0, m.parse)(document.cookie);
				return l.Z.get(t) || b[t] || null
			}

			function s(b) {
				document.cookie = (0, m.serialize)(t, b, {
					path: "/",
					maxAge: 31536e3
				}), l.Z.set(t, b)
			}

			function u() {
				document.cookie = serializeCookie(t, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(t)
			}
			const c = b => (0, p.Yd)(a.Q).find(L => a.Q[L] === b) || g,
				f = [],
				_ = [],
				C = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				A = {
					test: [...C, ..._, ...f],
					development: [...C, ..._, ...f],
					staging: [...C, ..._, ...f],
					production: [...C, ..._]
				},
				h = b => {
					const L = a.Q[b];
					return A.production.includes(L)
				},
				D = () => Object.keys(a.Q).filter(b => h(b)),
				T = b => {
					const L = a.Q[b];
					return _.includes(L)
				},
				v = b => k[b],
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
				P = o().locale();
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
			}), o().locale(P)
		},
		"../react/utils/translator.tsx": function(W, E, n) {
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
					return s
				},
				oc: function() {
					return u
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = n("../../../common/intl/intl-core/src/Translator.ts"),
				a = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				p = n.n(a),
				l = n("../flags.ts");
			const m = new o.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
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
			const s = a.Trans,
				u = a.I18n,
				c = a.useI18n
		},
		"../react/utils/url.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Ct: function() {
					return T
				},
				Fl: function() {
					return G
				},
				KT: function() {
					return ae
				},
				NF: function() {
					return _
				},
				Nw: function() {
					return h
				},
				Pd: function() {
					return A
				},
				Uh: function() {
					return J
				},
				Y_: function() {
					return f
				},
				e1: function() {
					return D
				},
				el: function() {
					return U
				},
				hW: function() {
					return Q
				},
				pu: function() {
					return ne
				},
				qR: function() {
					return S
				},
				td: function() {
					return C
				},
				uW: function() {
					return pe
				}
			});
			var e = n("../../../../node_modules/query-string/query-string.js"),
				o = n.n(e),
				a = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				p = n("../react/pages/stream/routes.ts"),
				l = n("../react/pages/r2/routes.ts"),
				m = n("../react/pages/zoneless-workers/routes.ts"),
				i = n("../react/pages/pages/routes.ts"),
				d = n("../react/pages/d1/routes.ts");

			function g(M) {
				for (var F = 1; F < arguments.length; F++) {
					var B = arguments[F] != null ? Object(arguments[F]) : {},
						z = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && z.push.apply(z, Object.getOwnPropertySymbols(B).filter(function(j) {
						return Object.getOwnPropertyDescriptor(B, j).enumerable
					})), z.forEach(function(j) {
						t(M, j, B[j])
					})
				}
				return M
			}

			function t(M, F, B) {
				return F = r(F), F in M ? Object.defineProperty(M, F, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[F] = B, M
			}

			function r(M) {
				var F = s(M, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function s(M, F) {
				if (typeof M != "object" || M === null) return M;
				var B = M[Symbol.toPrimitive];
				if (B !== void 0) {
					var z = B.call(M, F || "default");
					if (typeof z != "object") return z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(M)
			}
			const {
				endsWithSlash: u
			} = a.default, c = (M, F) => {
				const B = M.replace(u, "").split("/");
				return B.slice(0, 2).concat([F]).concat(B.slice(3)).join("/")
			}, f = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), _ = M => `/${M.replace(u,"").replace(/^\//,"")}`, C = M => h("add-site", M), A = M => h("billing", M), h = (M, F) => F ? `/${F}${M?`/${M}`:""}` : `/?to=/:account/${M}`, D = () => {
				const M = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return M ? M[1] : null
			}, T = (M, F) => o().stringify(g({}, o().parse(M), F)), v = (M = "") => M.toString().replace(/([\/]{1,})$/, ""), k = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], P = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, b = /^\/(\w{32,})(\/[^.]*)?/, L = M => k.includes(M), O = M => !L(M), S = M => !L(M) && b.test(M), U = M => !L(M) && P.test(M), x = M => P.exec(M), Q = M => {
				if (U(M)) return M.split("/").filter(F => F.length > 0)[1]
			}, oe = M => b.exec(M), pe = M => {
				if (S(M)) {
					const F = oe(M);
					if (F) return F[1]
				}
			}, ue = M => S(M) && M.split("/")[2] === "register-domain", ce = M => ue(M) ? M.split("/") : null, H = M => {
				if (U(M)) {
					const [, , , F, B, z, j, ee] = M.split("/");
					return F === "traffic" && B === "load-balancing" && z === "pools" && j === "edit" && ee
				}
			}, J = M => {
				const F = ce(M);
				if (F) return F[3]
			}, Y = (M, F) => {
				var B, z;
				return ((B = M.pattern.match(/\:/g)) !== null && B !== void 0 ? B : []).length - ((z = F.pattern.match(/\:/g)) !== null && z !== void 0 ? z : []).length
			}, I = [...Object.values(p.C), ...Object.values(l._j), ...Object.values(m._j), ...Object.values(i._j), ...Object.values(d._)].sort(Y);

			function G(M) {
				if (!O(M)) return M;
				for (const ee of I)
					if (ee.expression.test(M)) return ee.pattern;
				const F = ce(M);
				if (F) {
					const [, , ee, , ...ie] = F;
					return `/:accountId/${ee}/:domainName/${ie.join("/")}`
				}
				if (H(M)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const z = x(M);
				if (z) {
					const [, , , , ee] = z;
					return `/:accountId/:zoneName${ee||""}`
				}
				const j = oe(M);
				if (j) {
					const [, , ee] = j;
					return `/:accountId${ee||""}`
				}
				return M
			}

			function ne(M) {
				if (!!M) try {
					const B = M.split(".").pop();
					if (B && B.length > 0) return B
				} catch {}
			}

			function ae(M, F = document.location.href) {
				try {
					const B = new URL(M),
						z = new URL(F);
					if (B.origin === z.origin) return `${B.pathname}${B.search}${B.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(W, E, n) {
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
				a = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = n.n(p);
			const m = /^\/domainconnect\/v2\/domaintemplates\//i,
				i = "domain-connect-redirect",
				d = () => {
					const g = (0, p.useLocation)();
					(0, e.useEffect)(() => {
						m.test(g.pathname) && a.Z.set(i, g, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(W, E, n) {
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
		"../react/utils/zoneLevelAccess.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				P: function() {
					return p
				},
				b: function() {
					return l
				}
			});
			var e = n("../react/common/hooks/useGate.ts"),
				o = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function a() {
				var m, i, d, g, t, r;
				return (m = window) === null || m === void 0 || (i = m.bootstrap) === null || i === void 0 || (d = i.data) === null || d === void 0 || (g = d.user) === null || g === void 0 || (t = g.betas) === null || t === void 0 || (r = t.some) === null || r === void 0 ? void 0 : r.call(t, s => s === "zone_level_access_beta")
			}

			function p() {
				const m = !!(0, e.Z)("zone-level-access");
				return a() || m
			}

			function l(m) {
				const i = !!(0, o.z1)("zone-level-access")(m);
				return a() || i
			}
		},
		"../utils/getDashVersion.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				p: function() {
					return a
				},
				t: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var p, l;
					return (p = window) === null || p === void 0 || (l = p.build) === null || l === void 0 ? void 0 : l.dashVersion
				},
				a = () => {
					var p;
					return ((0, e.parse)((p = document) === null || p === void 0 ? void 0 : p.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Wi: function() {
					return je
				},
				IM: function() {
					return Re
				},
				yV: function() {
					return Ee
				},
				Ug: function() {
					return se
				},
				v_: function() {
					return Oe
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				a = n("../react/utils/bootstrap.ts"),
				p = n("../react/app/providers/storeContainer.js"),
				l = n("../react/common/selectors/languagePreferenceSelector.ts"),
				m = n("../flags.ts"),
				i = n("../../../../node_modules/cookie/index.js"),
				d = n("../react/utils/url.ts"),
				g = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				s = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				u = n("../utils/getDashVersion.ts"),
				c = n("../react/common/selectors/accountSelectors.ts"),
				f = n("../react/common/selectors/entitlementsSelectors.ts");

			function _(R) {
				for (var X = 1; X < arguments.length; X++) {
					var te = arguments[X] != null ? Object(arguments[X]) : {},
						ge = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(te).filter(function(ve) {
						return Object.getOwnPropertyDescriptor(te, ve).enumerable
					})), ge.forEach(function(ve) {
						C(R, ve, te[ve])
					})
				}
				return R
			}

			function C(R, X, te) {
				return X = A(X), X in R ? Object.defineProperty(R, X, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[X] = te, R
			}

			function A(R) {
				var X = h(R, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function h(R, X) {
				if (typeof R != "object" || R === null) return R;
				var te = R[Symbol.toPrimitive];
				if (te !== void 0) {
					var ge = te.call(R, X || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)(R)
			}
			const D = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": t.eg.string.optional
				})),
				T = (0, r.Z)(R => {
					try {
						return D.assertDecode((0, i.parse)(R))
					} catch (X) {
						return console.error(X), {}
					}
				}),
				v = R => (X, te, ge) => {
					try {
						const Qe = window.location.pathname,
							nt = (0, p.bh)().getState(),
							pt = T(document.cookie),
							Ct = _({
								page: (0, d.Fl)(ge.page || window.location.pathname),
								dashVersion: (0, u.t)()
							}, pt);
						if (X === "identify") {
							var ve, Ne;
							const at = {
								gates: (0, s.T2)(nt) || {},
								country: (ve = n.g) === null || ve === void 0 || (Ne = ve.bootstrap) === null || Ne === void 0 ? void 0 : Ne.ip_country
							};
							return R(X, te, _({}, Ct, at, ge))
						} else {
							const at = {
								accountId: (0, d.uW)(Qe),
								zoneName: (0, d.hW)(Qe),
								domainName: (0, d.Uh)(Qe)
							};
							if ((0, d.qR)(Qe)) {
								var Ye;
								const xe = (0, c.D0)(nt);
								at.isEntAccount = !!(xe == null || (Ye = xe.meta) === null || Ye === void 0 ? void 0 : Ye.has_enterprise_zones) || (0, f.p1)(nt)
							}
							if ((0, d.el)(Qe)) {
								var Ke;
								const xe = (0, g.nA)(nt);
								at.zoneId = xe == null ? void 0 : xe.id, at.plan = xe == null || (Ke = xe.plan) === null || Ke === void 0 ? void 0 : Ke.legacy_id
							}
							return R(X, te, _({}, Ct, at, ge))
						}
					} catch (Qe) {
						return console.error(Qe), R(X, te, ge)
					}
				},
				k = R => async (X, te, ge) => {
					try {
						return await R(X, te, ge)
					} catch (ve) {
						if (console.error(ve), !Oe()) throw ve;
						return {
							status: "rejected",
							reason: ve
						}
					}
				};
			var P = n("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				b = n("../react/common/components/filter-editor/constants/userJourney.ts"),
				L = n("../react/common/hooks/rulesets/resources/tracking.tsx"),
				O = n("../react/common/middleware/sparrow/errors.ts"),
				S = n("../react/pages/caching/tracking.tsx"),
				U = n("../react/pages/home/domain-registration/tracking.ts"),
				x = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				Q = n("../react/pages/hyperdrive/tracking.ts"),
				oe = n("../react/pages/magic/overview/tracking.ts"),
				pe = n("../react/pages/magic/packet-captures/constants.ts"),
				ue = n("../react/pages/page-rules/tracking.ts"),
				ce = n("../react/pages/pages/constants.ts"),
				H = n("../react/pages/pipelines/tracking.ts"),
				J = n("../react/pages/security-center/BlockedContent/constants.ts"),
				Y = n("../react/pages/security-center/tracking.ts"),
				I = n("../react/pages/security/api-shield/tracking.ts"),
				G = n("../react/pages/security/bots/tracking.ts"),
				ne = n("../react/pages/security/resources/constants.tsx"),
				ae = n("../react/pages/security/page-shield/resources/index.ts"),
				M = n("../react/pages/home/configurations/lists/tracking.ts"),
				F = n("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				B = n("../react/pages/home/alerts/tracking.ts"),
				z = n("../react/pages/dns/dns-records/tracking.ts"),
				j = n("../react/pages/magic/network-monitoring/constants.ts"),
				ee = n("../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts"),
				ie = n("../react/pages/security/settings/index.tsx"),
				_e = n("../react/pages/shared-config/sparrowEvents.tsx"),
				ye = n("../react/pages/spectrum/tracking.tsx"),
				Te = n("../react/pages/traffic/argo/tracking.ts"),
				Pe = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				we = n("../react/pages/turnstile/tracking.ts"),
				Ae = n("../react/pages/zoneless-workers/constants.ts"),
				Me = n("../react/app/components/AccountHome/tracking.ts"),
				ke = n("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Se = n("../react/pages/home/configurations/dns-settings/tracking.ts"),
				K = n("../react/pages/user-groups/sparrowEvents.ts"),
				me = n("../react/common/components/api-tokens/sparrowEvents.ts"),
				Le = n("../react/pages/security/security-rules/resources/sparrowEvents.ts");
			const ot = ((R, X, ...te) => t.eg.union([t.eg.literal(R), t.eg.literal(X), ...te.map(ge => t.eg.literal(ge))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", Me.gX.SPARROW_PROJECTS_TABLE_CLICK, Me.gX.SPARROW_EMPTY_STATE_CTA_CLICK, Me.gX.SPARROW_PRODUCT_CARD_CLICK, Me.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, Me.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, Me.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, Me.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, Me.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ae.QV.clickedDownloadAnalytics, Ae.QV.clickedPrintAnalytics, Ae.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ae.QV.addWCITriggerToExistingWorker, Ae.QV.updateWCITrigger, Ae.QV.deleteWCITrigger, Ae.QV.addWCITriggerToNewWorker, Ae.QV.createWCIBuildForNewWorker, Ae.QV.completedWCIBuildForNewWorker, Ae.QV.changedDefaultConfigurations, ce.QV.toggledPagesSmartPlacement, ce.QV.downloadDemoProject, Ae.QV.clickCreateWorkerFromRepoNextStep, Ae.QV.clickCreateWorkerFromRepoPreviousStep, Ae.QV.clickCreateNewSCMConnection, Ae.QV.redirectFromSCMOAuth, Ae.QV.clickSubmitError, Ae.QV.selectTemplate, Ae.QV.templateStubWorkerCreated, Ae.QV.templateStubWorkerCreationFailed, Ae.QV.templateRepositoryCreated, Ae.QV.templateRepositoryCreationFailed, Ae.QV.copyTemplateC3Command, Ae.QV.templateDeployClick, Ae.QV.reauthenticateGithubModalShown, Ae.QV.updateGithubPermissionsClicked, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", G.N3.INITIAL_FETCH_SCORES, G.N3.FETCH_CONFIGURATION, G.N3.INITIAL_FETCH_TIME_SERIES, G.N3.INITIAL_FETCH_ATTRIBUTES, G.N3.UPDATE_SETTINGS, G.N3.DELETE_RULE, G.N3.UPDATE_RULE, G.N3.FETCH_RULES, G.N3.CONFIGURE_BOT_MANAGEMENT, G.N3.WAF_RULES_REDIRECT, x.F.TOGGLE_TCP_PROTECTION, x.F.GET_TCP_PROTECTION_PREFIXES, x.F.CREATE_TCP_PROTECTION_PREFIXES, x.F.CREATE_TCP_PROTECTION_PREFIX, x.F.UPDATE_TCP_PROTECTION_PREFIX, x.F.DELETE_TCP_PROTECTION_PREFIX, x.F.DELETE_TCP_PROTECTION_PREFIXES, x.F.GET_TCP_PROTECTION_ALLOWLIST, x.F.CREATE_TCP_PROTECTION_ALLOWLIST, x.F.UPDATE_TCP_PROTECTION_ALLOWLIST, x.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, x.F.DELETE_TCP_PROTECTION_ALLOWLIST, x.F.GET_SYN_PROTECTION_RULES, x.F.GET_SYN_PROTECTION_RULE, x.F.CREATE_SYN_PROTECTION_RULE, x.F.UPDATE_SYN_PROTECTION_RULE, x.F.DELETE_SYN_PROTECTION_RULE, x.F.GET_TCP_FLOW_PROTECTION_RULES, x.F.GET_TCP_FLOW_PROTECTION_RULE, x.F.CREATE_TCP_FLOW_PROTECTION_RULE, x.F.UPDATE_TCP_FLOW_PROTECTION_RULE, x.F.DELETE_TCP_FLOW_PROTECTION_RULE, x.F.GET_SYN_PROTECTION_FILTERS, x.F.GET_SYN_PROTECTION_FILTER, x.F.CREATE_SYN_PROTECTION_FILTER, x.F.UPDATE_SYN_PROTECTION_FILTER, x.F.DELETE_SYN_PROTECTION_FILTER, x.F.GET_TCP_FLOW_PROTECTION_FILTERS, x.F.GET_TCP_FLOW_PROTECTION_FILTER, x.F.CREATE_TCP_FLOW_PROTECTION_FILTER, x.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, x.F.DELETE_TCP_FLOW_PROTECTION_FILTER, x.F.GET_DNS_PROTECTION_RULES, x.F.GET_DNS_PROTECTION_RULE, x.F.CREATE_DNS_PROTECTION_RULE, x.F.UPDATE_DNS_PROTECTION_RULE, x.F.DELETE_DNS_PROTECTION_RULE, ae.FV.MANAGE_PAGE_SHIELD_POLICY, ae.FV.CONFIGURE_PAGE_SHIELD, ae.FV.VIEW_DETECTED_CONNECTIONS, ae.FV.VIEW_DETECTED_SCRIPTS, ae.FV.VIEW_PAGE_SHIELD_POLICIES, ae.FV.VIEW_PAGE_SHIELD_SETTINGS, ae.FV.OPEN_MUTABLE_VERSION_TOOLTIP, ae.FV.SHOW_MUTABLE_VERSION_TOOLTIP, M.y.CREATE_LIST, M.y.DELETE_LIST, M.y.ADD_LIST_ITEM, M.y.DELETE_LIST_ITEM, Q.KO.PURCHASE_WORKERS_PAID, Q.KO.LIST_CONFIGS, Q.KO.SEARCH_CONFIGS, Q.KO.CREATE_HYPERDRIVE_CONFIG, Q.KO.VIEW_CONFIG_DETAILS, Q.KO.UPDATE_CACHING_SETTINGS, Q.KO.DELETE_HYPERDRIVE_CONFIG, Q.KO.CLICK_HYPERDRIVE_DOCUMENTATION, Q.KO.CLICK_GET_STARTED_GUIDE, Q.KO.CLICK_CONNECTIVITY_GUIDES, Q.KO.CLICK_QUICK_LINK, Q.KO.CLICK_DISCORD, Q.KO.CLICK_COMMUNITY, ye.N.CNAME, ye.N.IP_ADDRESS, ye.N.LB, ye.N.UPDATE_CNAME, ye.N.UPDATE_IP_ADDRESS, ye.N.UPDATE_LB, ye.N.DISABLE, S.N.TIERED_CACHE, S.N.CACHE_PURGE, S.N.CACHE_ANALYTICS, ...(0, we.P)(), ...(0, L.x4)(), ...(0, ie.m8)(), ...(0, K.Ky)(), ...(0, me.Cf)(), Pe.N.CREATE, Pe.N.EVENTS, Pe.N.ANALYTICS, Pe.N.UPDATE, Pe.N.GENERATE_PREVIEW, Y.RY.INITIATE_URL_SCAN, Y.RY.LOAD_SCAN_INFO, Y.Ev.LOAD_THREAT_EVENTS, Y.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, Y.Ev.THREAT_EVENTS_FILTERS, Y.v9.EXPAND_INSIGHT_ROW, Y.v9.ONE_CLICK_RESOLVE_BUTTON, Y.v9.FOLLOW_RESOLVE_URL, Y.v9.MANAGE_INSIGHT, Y.v9.CLICK_SCAN_NOW, Y.v9.CLICK_EXPORT_INSIGHTS, Y.v9.BULK_ARCHIVE, Y.v9.CLICK_DETAILS_BUTTON, I.Fj[I.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, I.Fj[I.kq.ENDPOINT_MANAGEMENT].detailedMetrics, I.Fj[I.kq.ENDPOINT_MANAGEMENT].createEndpoint, I.Fj[I.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, I.Fj[I.kq.ENDPOINT_MANAGEMENT].deployRouting, I.Fj[I.kq.ENDPOINT_MANAGEMENT].deleteRouting, I.Fj[I.kq.API_DISCOVERY].viewDiscoveredEndpoints, I.Fj[I.kq.API_DISCOVERY].saveDiscoveredEndpoint, I.Fj[I.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, I.Fj[I.kq.SCHEMA_VALIDATION].viewSchemasList, I.Fj[I.kq.SCHEMA_VALIDATION].uploadSchema, I.Fj[I.kq.SCHEMA_VALIDATION].viewSchemaAdoption, I.Fj[I.kq.SCHEMA_VALIDATION].downloadSchema, I.Fj[I.kq.SCHEMA_VALIDATION].deleteSchema, I.Fj[I.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, I.Fj[I.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, I.Fj[I.kq.SEQUENCE_ANALYTICS].viewSequencesPage, I.Fj[I.kq.JWT_VALIDATION].viewJWTRules, I.Fj[I.kq.JWT_VALIDATION].addJWTRule, I.Fj[I.kq.JWT_VALIDATION].editJWTRule, I.Fj[I.kq.JWT_VALIDATION].deleteJWTRule, I.Fj[I.kq.JWT_VALIDATION].reprioritizeJWTRule, I.Fj[I.kq.JWT_VALIDATION].viewJWTConfigs, I.Fj[I.kq.JWT_VALIDATION].addJWTConfig, I.Fj[I.kq.JWT_VALIDATION].editJWTConfig, I.Fj[I.kq.JWT_VALIDATION].deleteJWTConfig, I.Fj[I.kq.SETTINGS].redirectToFirewallRulesTemplate, I.Fj[I.kq.SETTINGS].redirectToPages, I.Fj[I.kq.SETTINGS].listSessionIdentifiers, I.Fj[I.kq.SETTINGS].listRequestsContainingSessionIdentifiers, I.Fj[I.kq.SETTINGS].addOrRemoveSessionIdentifiers, I.Fj[I.kq.SETTINGS].redirectToCustomRules, I.Fj[I.kq.SETTINGS].listAllFallthroughSchemas, I.Fj[I.kq.SEQUENCE_RULES].listSequenceRules, I.Fj[I.kq.SEQUENCE_RULES].deleteSequenceRule, I.Fj[I.kq.SEQUENCE_RULES].reorderSequenceRule, I.Fj[I.kq.SEQUENCE_RULES].createSequenceRule, I.Fj[I.kq.SEQUENCE_RULES].editSequenceRule, F.Z.ANALYTICS, F.Z.CREATE_AND_DEPLOY, F.Z.CREATE_MONITOR_LINK, F.Z.CREATE_MONITOR, F.Z.CREATE_POOL_LINK, F.Z.CREATE_POOL, F.Z.EDIT_MONITOR, F.Z.EDIT_POOL, F.Z.LOAD_BALANCING_TABLE, F.Z.POOL_TABLE, F.Z.EDIT_MONITOR_LINK, F.Z.EDIT_POOL_LINK, B.y.SECONDARY_DNS_NOTIFICATION_CREATE, B.y.SECONDARY_DNS_NOTIFICATION_UPDATE, B.y.SECONDARY_DNS_NOTIFICATION_DELETE, z.U.ZONE_TRANSFER_SUCCESS, z.U.DNS_RECORD_CREATE, z.U.DNS_RECORD_UPDATE, z.U.DNS_RECORD_DELETE, Se.Y.PEER_DNS_CREATE, Se.Y.PEER_DNS_UPDATE, Se.Y.PEER_DNS_DELETE, Se.Y.ZONE_TRANSFER_ENABLE, Se.Y.ZONE_TRANSFER_DISABLE, Te.V.ARGO_ENABLEMENT, Te.V.ARGO_GEO_ANALYTICS_FETCH, Te.V.ARGO_GLOBAL_ANALYTICS_FETCH, pe.X.VIEW_BUCKETS_LIST, pe.X.CREATE_BUCKET, pe.X.VALIDATE_BUCKET, pe.X.DELETE_BUCKET, pe.X.VIEW_CAPTURES_LIST, pe.X.CREATE_SIMPLE_CAPTURE, pe.X.CREATE_FULL_CAPTURE, pe.X.VIEW_FULL_CAPTURE, pe.X.DOWNLOAD_SIMPLE_CAPTURE, j.bK.VIEW_RULES, j.bK.CREATE_RULE, j.bK.UPDATE_RULE, j.bK.DELETE_RULE, j.bK.VIEW_CONFIGURATION, j.bK.CREATE_CONFIGURATION, j.bK.UPDATE_CONFIGURATION, j.bK.DELETE_CONFIGURATION, oe.r8.VIEW_ALERTS, oe.r8.VIEW_ALERTS_HISTORY, oe.r8.MAGIC_OVERVIEW_ANALYTICS, oe.VZ.CREATE_SITE, oe.VZ.CREATE_TUNNEL, oe.VZ.CREATE_STATIC_ROUTE, ee.o4.CLICK_ADAPTIVE_SAMPLING, ee.o4.CLICK_TO_LOG_EXPLORER_BANNER, ee.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, ee.o4.CLICK_SWITCH_TO_RAW_LOGS, ee.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", U.U.REGISTER_DOMAIN_SEARCH_SUBMIT, U.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, U.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, U.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, U.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, U.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, U.U.REGISTER_DOMAIN_CHECKOUT_ERROR, U.U.TRANSFER_DOMAIN_CHANGE_STEP, U.U.RENEW_DOMAIN_COMPLETED, U.U.RESTORE_DOMAIN_INIT, U.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, U.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, U.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, U.U.RESTORE_DOMAIN_FAILURE, U.U.RESTORE_DOMAIN_COMPLETED, U.U.DOMAIN_DELETE_INIT, U.U.DOMAIN_DELETE_COMPLETED, U.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, U.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, U.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, U.U.DOMAIN_DELETE_CONFIRM_DELETE, U.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, U.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, U.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, U.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, U.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, U.U.DOMAIN_MOVE_START_FLOW, U.U.DOMAIN_MOVE_OPEN_DOCS, U.U.DOMAIN_MOVE_CLOSE_FLOW, U.U.DOMAIN_MOVE_PROGRESS_FLOW, U.U.DOMAIN_MOVE_SUBMIT, U.U.DOMAIN_MOVE_INITIATE_SUCCESS, U.U.DOMAIN_MOVE_INITIATE_ERROR, U.U.DOMAIN_MOVE_CANCEL, U.U.DOMAIN_MOVE_CANCEL_SUCCESS, U.U.DOMAIN_MOVE_CANCEL_ERROR, U.U.ACTION_CENTER_NAVIGATE, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, U.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, H.KO.CLICK_GET_STARTED_GUIDE, H.KO.CLICK_PIPELINE_DOCUMENTATION, H.KO.CLICK_QUICK_LINK, H.KO.CREATE_PIPELINE, H.KO.DELETE_PIPELINE, H.KO.LIST_PIPELINES, H.KO.VIEW_PIPELINE, P.S.EXISTING_DOMAIN, P.S.NEW_DOMAIN, P.S.WAF_RULESET, P.S.WORKERS, P.S.PAGES, P.S.R2, P.S.ACCOUNT_MEMBERS, ue._.TEMPLATE_PRODUCT_SELECTED, ue._.TEMPLATE_SELECTED, ue._.TEMPLATE_SAVE_DRAFT, ue._.TEMPLATE_CANCEL, ue._.TEMPLATE_DEPLOY, _e.D.CLICK_GO_BACK_SHARE_MODAL, _e.D.CLICK_MENU_ITEM_SHARE, _e.D.CLICK_ON_CANCEL_SHARE_MODAL, _e.D.CLICK_ON_CLOSE_SHARE_MODAL, _e.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, _e.D.CLICK_ON_DELETE_RULESET, _e.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, _e.D.CLICK_ON_EDIT_SHARE_PERMISSION, _e.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, _e.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, _e.D.CLICK_ON_SHARE_TABLE_ROW, ne.pR.CLICK_GEOGRAPHICAL_TEMPLATE, ne.pR.CLICK_IP_TEMPLATE, ne.pR.CLICK_USER_AGENT_TEMPLATE, ne.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, ie.vc.CREATED, ie.vc.ENABLED, ie.vc.DISABLED, ie.vc.DELETED, ie.vc.UPDATED, ie.vc.DOWNLOADED, J.Gk.REQUEST_REVIEW, J.Gk.COPY_URL, b.v.FIELD, b.v.OPERATOR, ke.Vj.SHOW_LCC_MIGRATION_BANNER, ke.Vj.CLICK_LCC_DOCUMENTATION, ke.Vj.CLICK_LCC_UPGRADE_GUIDE, ke.Vj.SHOW_LCC_MIGRATION_WARNING, Le.y.CLICK_DISMISS_INELIGIBILITY, Le.y.CLICK_NEXT_STEP, Le.y.CLICK_OPT_IN, Le.y.CLICK_OPT_IN_BUTTON, Le.y.CLICK_OPT_OUT_BUTTON),
				et = t.eg.exactStrict(t.eg.object({
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
				st = (R, X) => {
					const [te, ge] = ze(X);
					let ve, Ne;
					return (0, t.nM)(ot.decode(R)) && (ve = new O.Uh(R)), ge && ge.length > 0 && (Ne = new O.oV(R, ge)), [te, ve, Ne]
				},
				ze = R => {
					const X = et.decode(R);
					if ((0, t.nM)(X)) {
						const te = X.left.map(({
							context: ge
						}) => ge.map(({
							key: ve
						}) => ve)).reduce((ge, ve) => ge.concat(ve), []).filter(ge => ge in R);
						return [He(te, R), te]
					}
					return [R, []]
				},
				He = (R, X) => Object.entries(X).reduce((te, [ge, ve]) => (R.includes(ge) || (te[ge] = ve), te), {}),
				mt = R => (X, te, ge) => {
					const [ve, Ne, Ye] = st(te, ge);
					if (Ne) throw Ne;
					return Ye && console.error(Ye), R(X, te, ve)
				};
			var Z = n("../react/utils/zaraz.ts");
			const le = {
					identify: !0
				},
				Ce = R => (X, te, ge) => (le[te] || Z.tg === null || Z.tg === void 0 || Z.tg.track(te, ge), R(X, te, ge));
			var Fe = n("../react/common/selectors/userSelectors.ts");
			const We = "pageview",
				Be = "create zone",
				Ze = "create user",
				tt = {
					[We]: !0,
					[Be]: !0,
					[Ze]: !0
				},
				lt = R => {
					var X;
					return !!((X = R.gates.assignments) === null || X === void 0 ? void 0 : X["dx-enable-google-tag-manager"])
				},
				rt = R => {
					const X = /\|MCMID\|([0-9]+)\|/,
						te = R.match(X);
					return te ? te[1] : void 0
				},
				gt = R => {
					var X;
					const {
						deviceViewport: te,
						page: ge,
						previousPage: ve,
						pageName: Ne,
						utm_campaign: Ye,
						_ga: Ke,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Qe
					} = R, {
						origin: nt
					} = window.location, pt = (0, Fe.PR)((0, p.bh)().getState());
					return {
						event: ve !== void 0 && ge !== ve ? "virtual_page_view" : "page_load",
						device_type: te,
						hostname: nt,
						language: navigator.language,
						locale: (0, l.r)((0, p.bh)().getState()),
						page_location: ge ? `${nt}${ge}` : "[redacted]",
						page_path: ge ? `${ge}` : "[redacted]",
						page_referrer: ve ? `${nt}/${ve}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: Ne || "[redacted]",
						page_url: ge ? `${nt}${ge}` : "[redacted]",
						query: Ye ? `?utm_campaign=${Ye}` : "[redacted]",
						user_properties: {
							ga_client_id: (X = Ke) !== null && X !== void 0 ? X : void 0,
							ga_client_id_s: Ke ? `s${Ke}` : void 0,
							user_id: je() ? pt == null ? void 0 : pt.id : void 0,
							ecid: Qe ? rt(Qe) : void 0
						}
					}
				},
				ft = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				ut = R => {
					const {
						status: X
					} = R;
					return X === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				Ue = (R, X) => {
					switch (R) {
						case "pageview":
							return gt(X);
						case "create zone":
							return ft();
						case "create user":
							return ut(X);
						default:
							return
					}
				},
				he = R => (X, te, ge) => {
					if (tt[te]) {
						var ve;
						const Ne = Ue(te, ge);
						Ne && ((ve = window.dataLayer) === null || ve === void 0 || ve.push(Ne))
					}
					return R(X, te, ge)
				};
			var Ge = n("../react/utils/cookiePreferences.ts");

			function dt(R) {
				for (var X = 1; X < arguments.length; X++) {
					var te = arguments[X] != null ? Object(arguments[X]) : {},
						ge = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(te).filter(function(ve) {
						return Object.getOwnPropertyDescriptor(te, ve).enumerable
					})), ge.forEach(function(ve) {
						it(R, ve, te[ve])
					})
				}
				return R
			}

			function it(R, X, te) {
				return X = _t(X), X in R ? Object.defineProperty(R, X, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[X] = te, R
			}

			function _t(R) {
				var X = V(R, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function V(R, X) {
				if (typeof R != "object" || R === null) return R;
				var te = R[Symbol.toPrimitive];
				if (te !== void 0) {
					var ge = te.call(R, X || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)(R)
			}
			const se = R => {
					const X = lt((0, p.bh)().getState());
					o().init(dt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Oe() && !(0, a.gm)() && je(),
						middlewares: [k, mt, v, Ce, ...X ? [he] : []]
					}, R))
				},
				Ee = () => {
					o().identify(dt({}, (0, e.getAttribution)(), {
						locale: (0, l.r)((0, p.bh)().getState()),
						isCloudflare: !!(0, m.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				Oe = () => !0,
				Re = () => {
					(0, Ge.kT)("sparrow_id")
				},
				je = () => (0, Ge.Xm)()
		},
		"../utils/initStyles.ts": function(W, E, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				p = document.head || document.getElementsByTagName("head")[0],
				l = i => {
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
					let g = document.getElementById(a);
					g ? g.innerText = "" : (g = document.createElement("style"), g.id = a, p.appendChild(g)), g.appendChild(document.createTextNode(d)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(m), E.Z = m
		},
		"../utils/sentry/lastSentEventId.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
		"../utils/zaraz.ts": function(W, E, n) {
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

			function e(s) {
				for (var u = 1; u < arguments.length; u++) {
					var c = arguments[u] != null ? Object(arguments[u]) : {},
						f = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(c).filter(function(_) {
						return Object.getOwnPropertyDescriptor(c, _).enumerable
					})), f.forEach(function(_) {
						o(s, _, c[_])
					})
				}
				return s
			}

			function o(s, u, c) {
				return u = a(u), u in s ? Object.defineProperty(s, u, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[u] = c, s
			}

			function a(s) {
				var u = p(s, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function p(s, u) {
				if (typeof s != "object" || s === null) return s;
				var c = s[Symbol.toPrimitive];
				if (c !== void 0) {
					var f = c.call(s, u || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(s)
			}
			const l = {
					track: (s, u) => null,
					set: (s, u) => console.log(`zaraz.set(${s}, ${u})`)
				},
				m = {
					track: (s, u) => {
						var c;
						(c = window.zaraz) === null || c === void 0 || c.track(s, e({}, u, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (s, u) => {
						var c;
						return (c = window.zaraz) === null || c === void 0 ? void 0 : c.set(s, u)
					}
				};
			let i;
			const d = () => {
					window.zaraz, i = m
				},
				g = ["email", "first_name", "last_name"],
				t = s => {
					g.forEach(u => {
						var c;
						(c = i) === null || c === void 0 || c.set(u, s[u])
					})
				},
				r = () => {
					t({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(W, E, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				a = n("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				p = n.n(a),
				l = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = n("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = n.n(m),
				d = n("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				g = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				t = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				r = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				s = n("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				c = n("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				f = n("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				_ = n("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				C = n("../../../common/component/component-filter-bar/src/constants.js"),
				A = n("../../../common/component/component-filter-bar/src/utils.js");

			function h() {
				return h = Object.assign ? Object.assign.bind() : function(Y) {
					for (var I = 1; I < arguments.length; I++) {
						var G = arguments[I];
						for (var ne in G) Object.prototype.hasOwnProperty.call(G, ne) && (Y[ne] = G[ne])
					}
					return Y
				}, h.apply(this, arguments)
			}

			function D(Y) {
				for (var I = 1; I < arguments.length; I++) {
					var G = arguments[I] != null ? Object(arguments[I]) : {},
						ne = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(G).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(G, ae).enumerable
					})), ne.forEach(function(ae) {
						T(Y, ae, G[ae])
					})
				}
				return Y
			}

			function T(Y, I, G) {
				return I = v(I), I in Y ? Object.defineProperty(Y, I, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[I] = G, Y
			}

			function v(Y) {
				var I = k(Y, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function k(Y, I) {
				if (typeof Y != "object" || Y === null) return Y;
				var G = Y[Symbol.toPrimitive];
				if (G !== void 0) {
					var ne = G.call(Y, I || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(Y)
			}
			const P = 70,
				b = (0, l.createStyledComponent)(({
					showOverflow: Y
				}) => D({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, Y ? {} : {
					maxHeight: P,
					overflow: "hidden"
				})),
				L = (0, l.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				O = (0, l.createStyledComponent)(({
					theme: Y
				}) => ({
					backgroundColor: Y.colors.background,
					py: 1,
					px: 2,
					borderRadius: Y.radii[2],
					border: `1px solid ${Y.colors.gray[7]}`,
					fontSize: Y.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: Y.colors.gray[4]
					}
				}), "div"),
				S = (0, l.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				U = (0, l.createStyledComponent)(({
					theme: Y
				}) => ({
					color: Y.colors.gray[4],
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
				Q = (0, l.createStyledComponent)(({
					buttonStyle: Y
				}) => D({
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
				}, Y), g.zx),
				oe = (0, l.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				pe = (0, l.createStyledComponent)(({
					theme: Y
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: Y.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: Y.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: Y.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: Y.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				ue = (0, l.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				ce = Y => Y.current ? [...Y.current.children].reduce((I, G) => (G.offsetTop >= P && I++, I), 0) : 0;
			let H = 0;
			class J extends e.Component {
				constructor() {
					super();
					T(this, "overflowWrapper", (0, e.createRef)()), T(this, "hasOverflowed", I => {
						const G = ce(this.overflowWrapper);
						I.scrollHeight > P && G >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (I.scrollHeight < P || G === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), T(this, "addNewFilter", () => {
						const {
							filterDefinitions: I
						} = this.props, G = (0, A.TE)(I), ne = Object.keys(G)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: ne,
								operator: (0, A.uv)(ne, G),
								value: (0, A.TT)(ne, G)
							}
						})
					}), T(this, "handleOpenFilterEdit", I => {
						this.setState({
							openFilter: I,
							filterChanges: D({}, this.props.filters[I])
						})
					}), T(this, "handleRemoveFilterClick", (I, G) => {
						I.stopPropagation(), this.removeFilter(G)
					}), T(this, "removeFilter", I => {
						const {
							handleFiltersChange: G
						} = this.props, ne = [...this.props.filters], ae = ne[I];
						ne.splice(I, 1), G(ne), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: ae.key,
							operator: ae.operator,
							value: ae.value
						})
					}), T(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), T(this, "handleFilterSubmit", I => {
						const {
							filterDefinitions: G
						} = this.props;
						I.preventDefault();
						const {
							filterChanges: ne
						} = this.state, ae = typeof G[ne.key].parse == "function" ? Array.isArray(ne.value) ? ne.value.map(G[ne.key].parse) : G[ne.key].parse(ne.value) : ne.value;
						if (G[ne.key].validate && (Array.isArray(ae) ? !ae.every(G[ne.key].validate) : !G[ne.key].validate(ae))) return this.setState({
							invalid: !0
						});
						const M = [...this.props.filters],
							F = D({}, ne, {
								value: ae
							}),
							B = !M[this.state.openFilter];
						B ? M.push(F) : M[this.state.openFilter] = D({}, ne), this.props.handleFiltersChange(M, F), (B ? this.props.onAddFilter : this.props.onEditFilter)({
							field: F.key,
							operator: F.operator,
							value: F.value
						}), this.closeOpenFilterChanges()
					}), T(this, "handlePendingKeyChange", ({
						value: I
					}) => {
						const {
							filterDefinitions: G
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: I,
								operator: (0, A.uv)(I, G),
								value: (0, A.TT)(I, G)
							}
						})
					}), T(this, "handlePendingOperatorChange", ({
						value: I
					}) => {
						let G = D({}, this.state.filterChanges, {
							operator: I
						});
						if ((0, A.dr)(I)) {
							var ne, ae;
							((ne = this.state.filterChanges) === null || ne === void 0 ? void 0 : ne.value) && !Array.isArray((ae = this.state.filterChanges) === null || ae === void 0 ? void 0 : ae.value) && (G.value = [this.state.filterChanges.value])
						} else {
							var M, F, B;
							((M = this.state.filterChanges) === null || M === void 0 ? void 0 : M.value) && Array.isArray((F = this.state.filterChanges) === null || F === void 0 ? void 0 : F.value) && ((B = this.state.filterChanges) === null || B === void 0 ? void 0 : B.value.length) > 0 && (G.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: G
						})
					}), T(this, "handlePendingValueChange", I => {
						this.setState({
							invalid: !1,
							filterChanges: D({}, this.state.filterChanges, {
								value: I
							})
						})
					}), T(this, "handleShowOverflow", () => {
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
				componentDidUpdate(I) {
					I.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(I) {
					const {
						formatLabel: G,
						filterDefinitions: ne
					} = this.props, {
						operator: ae
					} = this.state.filterChanges, M = ne[this.state.filterChanges.key], F = this.state.filterChanges.value, B = j => Array.isArray(j) ? j.map(ee => ee.value) : (j == null ? void 0 : j.value) || null;
					if (M.renderValueComponent) return M.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (M.type) {
						case C.k.custom: {
							var z;
							return o().createElement(M.CustomComponent, h({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (z = M == null ? void 0 : M.customProps) !== null && z !== void 0 ? z : {}))
						}
						case C.k.select:
							return (0, A.dr)(ae) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !M.options,
								value: typeof F.split == "function" ? F == null ? void 0 : F.split(",") : Array.isArray(F) ? F : [],
								options: M.options ? M.options.map(j => ({
									value: j.value || j,
									label: j.label || G(this.state.filterChanges.key, j, I)
								})) : F ? (Array.isArray(F) ? F : F.split(",")).map(j => ({
									label: j,
									value: j
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(m.Trans, {
									id: M.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: M.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: j => {
									this.handlePendingValueChange(B(j))
								},
								isValidNewOption: j => {
									const ee = M.validate;
									return !ee && j || j && ee([j])
								},
								getNewOptionData: (j, ee) => ({
									value: j,
									label: ee
								})
							}) : o().createElement(s.hQ, {
								hideLabel: !0,
								value: F,
								options: M.options.map(j => ({
									value: j,
									label: G(this.state.filterChanges.key, j, I)
								})),
								onChange: ({
									value: j
								}) => this.handlePendingValueChange(j)
							});
						case C.k.string:
						default:
							return (0, A.dr)(ae) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof F.split == "function" ? F == null ? void 0 : F.split(",") : Array.isArray(F) ? F : [],
								options: F ? (Array.isArray(F) ? F : F.split(",")).map(j => ({
									label: j,
									value: j
								})) : [],
								noOptionsMessage: () => null,
								placeholder: I.t("analytics.report.filters.labels.placeholder", {
									example: ne[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: j => {
									this.handlePendingValueChange(B(j))
								},
								isValidNewOption: j => {
									const ee = M.validate;
									return !ee && j || j && ee([j])
								},
								getNewOptionData: (j, ee) => ({
									value: j,
									label: ee
								}),
								formatCreateLabel: j => I.t("filter_editor.value_create_label", {
									value: j
								})
							}) : o().createElement(m.I18n, null, j => o().createElement(d.I, {
								value: this.state.filterChanges.value,
								onChange: ee => this.handlePendingValueChange(ee.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: j.t("analytics.report.filters.labels.placeholder", {
									example: ne[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: I,
						filterDefinitions: G,
						modalStyles: ne,
						filterIconType: ae,
						buttonStyle: M
					} = this.props, F = ce(this.overflowWrapper), B = `filterPanel${this.state.id}`, z = this.state.openFilter !== null;
					return o().createElement(m.I18n, null, j => o().createElement(u.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(ue, null, o().createElement(Q, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": z,
						"aria-controls": B,
						inverted: !0,
						buttonStyle: M
					}, o().createElement(t.J, {
						type: ae || "add",
						mr: 1,
						label: j.t("common.add", {
							_: "Add"
						})
					}), o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(oe, null, o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(b, {
						innerRef: this.overflowWrapper,
						overflowLimit: P,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((ee, ie) => {
						const {
							key: _e,
							operator: ye,
							value: Te
						} = ee, Pe = G[_e].ignoreLabelTranslation ? G[_e].label : j.t(G[_e].label), we = j.t(`analytics.report.filters.operators.${ye}`), Ae = Array.isArray(Te) ? Te.map(ke => I(_e, ke, j)).join(", ") : I(_e, Te, j), Me = `${Pe} ${we} ${Ae}`;
						return o().createElement(L, {
							key: `${_e}-${ye}-${Te}`,
							title: Me
						}, o().createElement(O, {
							onClick: () => this.handleOpenFilterEdit(ie)
						}, o().createElement(u.ZC, {
							display: "flex"
						}, o().createElement(S, null, Pe), o().createElement(U, null, we), o().createElement(x, null, Ae), (0, A.oN)(ee, G) ? o().createElement(r.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(pe, {
							onClick: ke => this.handleRemoveFilterClick(ke, ie),
							"aria-label": "remove"
						}, o().createElement(t.J, {
							type: "remove"
						})))))
					})), z && o().createElement(_.Z, {
						id: B,
						filterDefinitions: G,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, A.oN)(this.state.filterChanges, G),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: I,
						modalStyles: ne
					}), this.state.hasOverflowed && o().createElement(f.Z, {
						count: F,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			T(J, "propTypes", {
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
			}), E.Z = J
		},
		"../../../common/component/component-filter-bar/src/index.js": function(W, E, n) {
			"use strict";
			n.d(E, {
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
			var e = n("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = n("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				a = n("../../../common/component/component-filter-bar/src/constants.js"),
				p = n("../../../common/component/component-filter-bar/src/utils.js"),
				l = n("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				OZ: function() {
					return l
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
				var d = a(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function a(i, d) {
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
			class l extends p {
				constructor(d) {
					super(d, `Translation key not found: ${d}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var m = null
		},
		"../../../common/util/types/src/api/domain.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
				Aw: function() {
					return k
				},
				Ib: function() {
					return T
				},
				Ks: function() {
					return P
				},
				MS: function() {
					return v
				},
				PN: function() {
					return f
				},
				Pp: function() {
					return p
				},
				Q3: function() {
					return u
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
					return D
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
				l = e.eg.object({
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
			let g = function(L) {
				return L.ONBOARDING_INITIATED = "Onboarding Initiated", L.ONBOARDED = "Onboarded", L.PENDING_REGISTRY_LOCK = "Pending Registry Lock", L.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", L.REGISTRY_UNLOCKED = "Registry Unlocked", L.LOCKED = "Locked", L.FAILED_TO_LOCK = "Failed To Lock", L.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", L.UNLOCKED = "Unlocked", L.OFFBOARDED = "Offboarded", L
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
				s = e.eg.object({
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
				u = e.eg.object({
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
			let f = function(L) {
				return L.PENDING = "pending", L.VERIFIED = "verified", L.REJECTED = "rejected", L.PENDING_DELETE = "pending_delete", L.DELETED = "deleted", L
			}({});
			const _ = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(f),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				C = e.eg.object({
					designated_approvers: e.eg.array(_)
				});
			let A = function(L) {
				return L.PENDING = "pending", L.PENDING_UPDATE = "pending_update", L.ENABLED = "enabled", L.DISABLED = "disabled", L
			}({});
			const h = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(A)
				}),
				D = e.eg.intersection([h, C]),
				T = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let v = function(L) {
				return L.UNLOCK_APPROVAL = "UnlockApprovalRequest", L.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", L.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", L.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", L
			}({});
			const k = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				P = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(W, E, n) {
			"use strict";
			n.d(E, {
				df: function() {
					return o
				},
				eX: function() {
					return a
				},
				fG: function() {
					return l
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
				l = function(i) {
					return i.DEFAULT = "default", i.MEDIUM = "medium", i.LOW = "low", i.EOFF = "eoff", i.HIGH = "high", i.VERY_HIGH = "very_high", i
				}({}),
				m = function(i) {
					return i.DEFAULT = "", i.XML = "text/xml", i.JSON = "application/json", i.TEXT = "text/plain", i.HTML = "text/html", i
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
		"../../../dash/intl/intl-translations/src/index.ts": function(W, E, n) {
			"use strict";
			n.d(E, {
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
			var e = n("../../../dash/intl/intl-translations/src/makeLoadPhrases.ts"),
				o = n("../../../dash/intl/intl-translations/src/catalogMap.ts"),
				a = n("../../../dash/intl/intl-translations/src/supportedCatalogs.ts")
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(W, E, n) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(a) {
				if (!n.o(e, a)) return Promise.resolve().then(function() {
					var m = new Error("Cannot find module '" + a + "'");
					throw m.code = "MODULE_NOT_FOUND", m
				});
				var p = e[a],
					l = p[0];
				return n.e(p[1]).then(function() {
					return n.t(l, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", W.exports = o
		}
	}
]);

//# debugId=f767a8e9-8c5c-5e27-81f2-bb09cc801a15