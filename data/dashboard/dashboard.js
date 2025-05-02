! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "09a81fa7-0768-5813-a90c-9eacdd87a473")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				J8: function() {
					return i
				},
				Jd: function() {
					return a
				},
				QY: function() {
					return m
				},
				Qw: function() {
					return s
				},
				ki: function() {
					return g
				},
				wz: function() {
					return P
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/utils/url.ts"),
				o = t("../../../../node_modules/query-string/query-string.js"),
				u = t.n(o),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f;
			const s = () => Object.keys(l.Z).reduce((b, y) => (y.indexOf("cf_beta.") === 0 && l.Z.get(y) === "true" && b.push(y.split(".").slice(1).join(".")), b), []),
				g = () => {
					var b, y, O;
					return ((b = window) === null || b === void 0 || (y = b.bootstrap) === null || y === void 0 || (O = y.data) === null || O === void 0 ? void 0 : O.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((f = window) === null || f === void 0 ? void 0 : f.location) && l.Z) {
				const b = u().parse(window.location.search);
				b.beta_on && l.Z.set(`cf_beta.${b.beta_on}`, !0), b.beta_off && l.Z.set(`cf_beta.${b.beta_off}`, !1)
			}
			const v = {},
				n = b => {
					var y, O, _;
					return Object.prototype.hasOwnProperty.call(v, b) ? v[b] : ((y = window) === null || y === void 0 || (O = y.bootstrap) === null || O === void 0 || (_ = O.data) === null || _ === void 0 ? void 0 : _.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(C => C === b) ? (v[b] = !0, !0) : (v[b] = !1, !1)
				},
				c = b => l.Z ? l.Z.get(`cf_beta.${b}`) === !0 : !1,
				i = b => c(b) || n(b),
				d = () => !0,
				a = () => {
					var b, y, O;
					return ((b = window) === null || b === void 0 || (y = b.bootstrap) === null || y === void 0 || (O = y.data) === null || O === void 0 ? void 0 : O.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				m = b => {
					const y = (0, e.uF)(b),
						O = (y == null ? void 0 : y.roles) || [];
					return (0, r.qR)(location.pathname) && O.length === 1 && O.some(_ => _ === "Administrator Read Only")
				},
				I = () => {
					var b, y, O;
					return ((b = window) === null || b === void 0 || (y = b.location) === null || y === void 0 || (O = y.origin) === null || O === void 0 ? void 0 : O.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				P = () => I() === "fed"
		},
		"../init.ts": function(F, E, t) {
			"use strict";
			t.r(E);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				r = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				o = t("../libs/init/initGlobal.ts"),
				u = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function f(N) {
				for (var j = 1; j < arguments.length; j++) {
					var q = arguments[j] != null ? Object(arguments[j]) : {},
						ae = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(q).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(q, fe).enumerable
					})), ae.forEach(function(fe) {
						s(N, fe, q[fe])
					})
				}
				return N
			}

			function s(N, j, q) {
				return j = g(j), j in N ? Object.defineProperty(N, j, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[j] = q, N
			}

			function g(N) {
				var j = v(N, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function v(N, j) {
				if (typeof N != "object" || N === null) return N;
				var q = N[Symbol.toPrimitive];
				if (q !== void 0) {
					var ae = q.call(N, j || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(N)
			}
			const n = N => {
				const j = N && N.headers || {},
					q = new Headers(j);
				return q.append("X-Cross-Site-Security", "dash"), f({}, N, {
					headers: q
				})
			};
			(0, l.register)({
				request: (N, j) => {
					try {
						return new URL(N), N === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", j] : [N, j]
					} catch {
						return [N, n(j)]
					}
				}
			});
			var c = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				i = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				d = t("../react/app/providers/storeContainer.js");
			let a = "";
			const m = 61;

			function I(N) {
				const j = N.substr(1);
				if (j && a !== j) {
					const q = document.getElementById(j);
					if (q) {
						const ae = q.getBoundingClientRect().top;
						if (ae > 0) {
							const fe = ae - m;
							document.documentElement.scrollTop = fe
						}
					}
				}
				a = j
			}

			function P(N) {
				N.listen(j => I(j.hash))
			}
			var b = t("../../../../node_modules/cookie/index.js"),
				y = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const O = "CF_dash_version",
				_ = "cf_fv_preview",
				C = "cf_pv",
				S = "current",
				L = "hash",
				M = "deploymentPreview",
				A = "fragmentPreview",
				T = N => N === S ? D() : k(),
				D = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				k = (N = 72) => {
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
				X = (N, j = !1) => {
					var q;
					const ae = U(N),
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
						Ie = j ? `
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
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(q=window.build)===null||q===void 0?void 0:q.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return fe + Ie
				},
				se = N => {
					var j;
					const q = document.getElementById(N);
					!q || (j = q.parentNode) === null || j === void 0 || j.removeChild(q)
				};

			function pe() {
				const N = document.getElementById("loading-state");
				N == null || N.classList.add("hide"), N == null || N.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(se)
				})
			}

			function ue(N) {
				var j;
				const q = document.getElementById("loading-state"),
					ae = !!((j = b.parse(document.cookie)) === null || j === void 0 ? void 0 : j[O]);
				!q || (q.innerHTML = X(N == null ? void 0 : N.code, ae))
			}
			var z = t("../utils/initStyles.ts"),
				Y = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				W = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				B = t("../react/common/selectors/languagePreferenceSelector.ts"),
				w = t("../flags.ts"),
				x = t("../utils/getDashVersion.ts");
			const K = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ee = !0,
				te = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				ne = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var R = t("../utils/sentry/lastSentEventId.ts"),
				V = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				H = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const $ = N => {
				const j = async q => {
					var ae, fe;
					const Ie = {
						envelope: q.body,
						url: N.url,
						isPreviewDeploy: (ae = window) === null || ae === void 0 || (fe = ae.build) === null || fe === void 0 ? void 0 : fe.isPreviewDeploy,
						release: (0, x.t)()
					};
					try {
						const Oe = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(Ie)
						});
						return {
							statusCode: Oe.status,
							headers: {
								"x-sentry-rate-limits": Oe.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": Oe.headers.get("Retry-After")
							}
						}
					} catch (Oe) {
						return console.log(Oe), (0, H.$2)(Oe)
					}
				};
				return V.q(N, j)
			};
			var oe = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				ce = t("../../../../node_modules/history/esm/history.js"),
				me = (0, ce.lX)(),
				be = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Le = t("../react/utils/url.ts");
			const je = (0, be.Rf)();
			let he;

			function Se(N) {
				return Ye(N, "react-router-v5")
			}

			function Ye(N, j) {
				return (q, ae = !0, fe = !0) => {
					ae && je && je.location && (he = q({
						name: (0, Le.Fl)(je.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": j
						}
					})), fe && N.listen && N.listen((Ie, Oe) => {
						if (Oe && (Oe === "PUSH" || Oe === "POP")) {
							he && he.finish();
							const Me = {
								"routing.instrumentation": j
							};
							he = q({
								name: (0, Le.Fl)(Ie.pathname),
								op: "navigation",
								tags: Me
							})
						}
					})
				}
			}
			var Ke = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				Ve = t.n(Ke),
				Z = t("../../../common/intl/intl-core/src/errors.ts"),
				ve = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Pe = t("../react/common/middleware/sparrow/errors.ts");

			function Xe(N, j, q) {
				return j = Je(j), j in N ? Object.defineProperty(N, j, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[j] = q, N
			}

			function Je(N) {
				var j = st(N, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function st(N, j) {
				if (typeof N != "object" || N === null) return N;
				var q = N[Symbol.toPrimitive];
				if (q !== void 0) {
					var ae = q.call(N, j || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(N)
			}
			class qe {
				constructor() {
					Xe(this, "name", qe.id)
				}
				setupOnce() {
					t.g.console && (0, ve.hl)(t.g.console, "error", j => (...q) => {
						const ae = q.find(fe => fe instanceof Error);
						if (K && ae) {
							let fe, Ie = !0;
							if (ae instanceof Pe.ez) {
								const Oe = ae instanceof Pe.oV ? ae.invalidProperties : void 0;
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
								}, Ie = !1
							} else if (ae instanceof Ke.SparrowIdCookieError) fe = {
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
							} else ae instanceof Z.YB && (fe = {
								fingerprint: ["TranslatorError", ae.translationKey]
							});
							Ie && c.Tb(ae, fe)
						}
						typeof j == "function" && j.apply(t.g.console, q)
					})
				}
			}
			Xe(qe, "id", "ConsoleErrorIntegration");
			var pt = null;
			const Q = () => {
					if (K && ee) {
						var N, j, q, ae, fe, Ie, Oe, Me, it, We;
						let Ft = "production";
						((N = window) === null || N === void 0 || (j = N.build) === null || j === void 0 ? void 0 : j.isPreviewDeploy) && (Ft += "-preview"), W.S({
							dsn: K,
							release: (0, x.t)(),
							environment: Ft,
							ignoreErrors: ne,
							allowUrls: te,
							autoSessionTracking: !1,
							integrations: dt => [...dt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new qe, new oe.jK.BrowserTracing({
								routingInstrumentation: Se(me)
							})],
							tracesSampleRate: 0,
							transport: $,
							beforeSend: dt => (R.e.setEventId(dt.event_id), dt)
						});
						const Mt = (0, d.bh)().getState();
						c.rJ({
							LOCAL_STORAGE_FLAGS: (0, w.Qw)(),
							USER_BETA_FLAGS: (0, w.ki)(),
							meta: {
								connection: {
									type: (q = window) === null || q === void 0 || (ae = q.navigator) === null || ae === void 0 || (fe = ae.connection) === null || fe === void 0 ? void 0 : fe.effectiveType,
									bandwidth: (Ie = window) === null || Ie === void 0 || (Oe = Ie.navigator) === null || Oe === void 0 || (Me = Oe.connection) === null || Me === void 0 ? void 0 : Me.downlink
								},
								languagePreference: (0, B.r)(Mt),
								isPreviewDeploy: (it = window) === null || it === void 0 || (We = it.build) === null || We === void 0 ? void 0 : We.isPreviewDeploy
							},
							utilGates: (0, Y.T2)(Mt)
						}), window.addEventListener("unhandledrejection", function(dt) {})
					}
				},
				de = N => {
					N ? c.av({
						id: N
					}) : c.av(null)
				};
			var ye = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Ue = () => {
					let N;
					try {
						N = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), N = window.location.search
					}
					if (!N.includes("remote[")) return;
					const j = new URLSearchParams(N),
						q = {};
					for (let [ae, fe] of j) ae.includes("remote") && (q[ae.replace(/remote\[|\]/g, "")] = fe);
					ye.Z.set("mfe-remotes", JSON.stringify(q))
				},
				Ne = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				et = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const ct = "ANON_USER_ID";

			function gt() {
				var N, j, q, ae;
				let fe = (N = t.g) === null || N === void 0 || (j = N.bootstrap) === null || j === void 0 || (q = j.data) === null || q === void 0 || (ae = q.user) === null || ae === void 0 ? void 0 : ae.id;
				if (!fe) {
					let Ie = ye.Z.get(ct);
					if (!Ie) {
						let Oe = (0, et.Z)();
						ye.Z.set(ct, Oe), Ie = Oe
					}
					return Ie
				}
				return fe
			}
			async function tt() {
				const N = (0, d.bh)();
				N.dispatch((0, Ne.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await N.dispatch((0, Y.UL)({
					userId: gt()
				}))
			}
			class Et extends Error {
				constructor(j, q) {
					super(q);
					this.name = `${j} ${q}`
				}
			}
			const yt = () => {
					document.cookie.split(";").forEach(j => {
						const [q] = j.trim().split("=");
						document.cookie = `${q}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				mt = async () => {
					let N = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!N.ok) throw N.headers.get("content-type") === "text/html" && (await N.text()).toLowerCase().includes("cookie too large") && (c.$e(function(fe) {
						fe.setTag("init", "cookieTooLarge"), c.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), yt(), window.location.reload()), new Et("Bootstrap API Failure", N == null ? void 0 : N.status);
					return (await N.json()).result.data
				};
			var ke = t("webpack/sharing/consume/default/react/react"),
				Ce = t.n(ke),
				$e = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				ht = t("webpack/sharing/consume/default/react-dom/react-dom"),
				lt = t("webpack/sharing/consume/default/react-redux/react-redux"),
				bt = t("../../../../node_modules/swr/core/dist/index.mjs"),
				G = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				le = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Ee = t("../react/shims/focus-visible.js"),
				Te = t("../react/app/components/DeepLink/index.ts"),
				De = t("../../../../node_modules/prop-types/index.js"),
				xe = t.n(De),
				Qe = t("../react/utils/translator.tsx"),
				nt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				we = t("../../../dash/intl/intl-translations/src/index.ts"),
				Ct = t("../../../../node_modules/query-string/query-string.js"),
				ut = t.n(Ct),
				Nt = t("../react/common/actions/userActions.ts"),
				ft = t("../react/common/selectors/userSelectors.ts"),
				at = t("../react/utils/i18n.ts"),
				At = t("../react/utils/bootstrap.ts");

			function Rt(N) {
				for (var j = 1; j < arguments.length; j++) {
					var q = arguments[j] != null ? Object(arguments[j]) : {},
						ae = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(q).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(q, fe).enumerable
					})), ae.forEach(function(fe) {
						Tt(N, fe, q[fe])
					})
				}
				return N
			}

			function Tt(N, j, q) {
				return j = Pt(j), j in N ? Object.defineProperty(N, j, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[j] = q, N
			}

			function Pt(N) {
				var j = It(N, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function It(N, j) {
				if (typeof N != "object" || N === null) return N;
				var q = N[Symbol.toPrimitive];
				if (q !== void 0) {
					var ae = q.call(N, j || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(N)
			}
			let He = ut().parse(location.search);
			const Dt = N => {
					const j = (0, At.$8)() ? [(0, we.Fy)(we.if.changes), (0, we.Fy)(we.if.common), (0, we.Fy)(we.if.navigation), (0, we.Fy)(we.if.overview), (0, we.Fy)(we.if.onboarding), (0, we.Fy)(we.if.invite), (0, we.Fy)(we.if.login), (0, we.Fy)(we.if.dns), (0, we.Fy)(we.n4.ssl_tls), (0, we.Fy)(we.if.message_inbox), (0, we.Fy)(we.if.welcome)] : [(0, we.Fy)(we.if.common), (0, we.Fy)(we.if.invite), (0, we.Fy)(we.if.login), (0, we.Fy)(we.if.onboarding)];
					He.lang ? xt(N) : ye.Z.get(at.th) && Lt(N, (0, at.Kd)());
					const q = async ae => (await Promise.all(j.map(Ie => Ie(ae)))).reduce((Ie, Oe) => Rt({}, Ie, Oe), {});
					return Ce().createElement(nt.LocaleContext.Provider, {
						value: N.languagePreference
					}, Ce().createElement(nt.I18nProvider, {
						translator: Qe.Vb,
						locale: N.languagePreference
					}, Ce().createElement(nt.I18nLoader, {
						loadPhrases: q
					}, N.children)))
				},
				xt = async N => {
					let j = He.lang.substring(0, He.lang.length - 2) + He.lang.substring(He.lang.length - 2, He.lang.length).toUpperCase();
					if (!(0, B.v)(j)) {
						console.warn(`${j} is not a supported locale.`), delete He.lang, N.history.replace({
							search: ut().stringify(He)
						});
						return
					}(0, at.i_)(j), delete He.lang, Lt(N, j), N.isAuthenticated || N.history.replace({
						search: ut().stringify(He)
					})
				}, Lt = async (N, j) => {
					if (N.isAuthenticated) try {
						await N.setUserCommPreferences({
							"language-locale": j
						}, {
							hideErrorAlert: !0
						}), ye.Z.remove(at.th), N.history.replace({
							search: ut().stringify(He)
						})
					} catch (q) {
						ye.Z.set(at.th, !0), console.error(q)
					} else ye.Z.set(at.th, !0)
				}, vt = N => {
					const j = (0, ft.PR)(N);
					return {
						isAuthenticated: !!(j && j.id),
						languagePreference: (0, at.Kd)() || (0, B.r)(N)
					}
				}, Bt = {
					setUserCommPreferences: Nt.V_
				};
			var Ot = (0, $e.withRouter)((0, lt.connect)(vt, Bt)(Dt));
			Dt.propTypes = {
				history: xe().object,
				languagePreference: xe().string.isRequired,
				children: xe().node.isRequired,
				isAuthenticated: xe().bool,
				setUserCommPreferences: xe().func.isRequired
			};
			var ie = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				re = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let p;
			const h = ({
				selectorPrefix: N = "c_"
			} = {}) => (p || (p = (0, re.Z)({
				dev: !1,
				selectorPrefix: N
			})), p);
			var J = t("../react/common/out.css"),
				_e = t("../react/common/components/ModalManager.tsx"),
				Ae = t("../react/app/components/ErrorBoundary.tsx"),
				Fe = t("../react/common/actions/notificationsActions.ts");
			const ze = (t.g.bootstrap || {}).data || {};
			class rt extends Ce().Component {
				componentDidMount() {
					ze.messages && this.dispatchNotificationActions(ze.messages)
				}
				dispatchNotificationActions(j) {
					j.forEach(q => {
						const {
							type: ae,
							message: fe,
							persist: Ie
						} = q;
						["success", "info", "warn", "error"].includes(ae) && this.props.notifyAdd(ae, (0, Qe.ZP)(fe), {
							persist: !!Ie
						})
					})
				}
				render() {
					return null
				}
			}
			var ot = (0, $e.withRouter)((0, lt.connect)(null, {
				notifyAdd: Fe.add
			})(rt));
			rt.propTypes = {
				notifyAdd: xe().func.isRequired
			};
			var Re = t("../react/app/redux/index.ts");

			function Ut() {
				var N;
				const j = (0, Re.p4)(ft.PR),
					q = (j == null || (N = j.email) === null || N === void 0 ? void 0 : N.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ae = (0, Ne.Yc)();
				(0, ke.useEffect)(() => {
					ae({
						userType: q
					})
				}, [q, ae])
			}
			var St = t("../react/common/selectors/entitlementsSelectors.ts"),
				kt = t("../react/common/selectors/accountSelectors.ts");
			const jt = ["accountId", "is_ent"];

			function Ze() {
				const N = (0, Ne.f7)(),
					j = (0, $e.useHistory)(),
					q = (0, Le.uW)(j.location.pathname),
					ae = (0, Ne.Yc)(),
					fe = (0, Ne.O$)(),
					Ie = (0, Re.p4)(St.u1),
					Oe = !Ie.isRequesting && !!Ie.data,
					Me = (0, Re.p4)(St.p1),
					it = (0, Re.p4)(kt.Xu),
					We = (0, Re.p4)(kt.uF),
					Ft = !it.isRequesting && !!it.data;
				(0, ke.useEffect)(() => {
					if (q && Ft && We && Oe && q === We.account.id) {
						var Mt, dt, Vt;
						ae({
							accountId: We.account.id,
							is_ent: Me,
							is_free_account: !Me && !(We == null || (Mt = We.account.meta) === null || Mt === void 0 ? void 0 : Mt.has_business_zones) && !(We == null || (dt = We.account.meta) === null || dt === void 0 ? void 0 : dt.has_pro_zones) && !(We == null || (Vt = We.account.meta) === null || Vt === void 0 ? void 0 : Vt.has_enterprise_zones)
						})
					} else(!q || q in N && N.accountId !== q) && fe(jt)
				}, [Ft, We, ae, fe, Oe, Me, q, N])
			}
			var Ht = t("../react/common/selectors/zoneSelectors.ts");

			function Wt() {
				const N = (0, Re.p4)(Ht.nA),
					j = (0, Ne.Yc)();
				(0, ke.useEffect)(() => {
					var q;
					j({
						zone_id: N == null ? void 0 : N.id,
						zone_plan: N == null || (q = N.plan) === null || q === void 0 ? void 0 : q.legacy_id
					})
				}, [N, j])
			}
			const en = () => (Ut(), Ze(), Wt(), null);
			var tn = t("../react/app/components/Persistence/index.tsx"),
				nn = t("../node_modules/@cloudflare/elements/es/index.js"),
				rn = t("../react/app/components/LoadingSuspense.tsx");
			const on = Ce().lazy(() => Promise.all([t.e(16691), t.e(31736), t.e(12174), t.e(1091), t.e(84959), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var an = () => Ce().createElement(rn.Z, null, Ce().createElement(on, null));
			const sn = () => (ke.useEffect(() => pe, []), null);
			var cn = t("../../../../node_modules/moment/moment.js"),
				Gt = t.n(cn);
			const ln = N => {
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
				un = () => {
					const N = (0, Re.p4)(B.r);
					(0, ke.useEffect)(() => {
						const j = ln(N);
						j !== Gt().locale() && Gt().locale(j), document.documentElement.lang = N
					}, [N])
				},
				dn = () => {
					(0, ke.useEffect)(() => {
						async function N() {
							var j, q;
							let ae;
							if (((j = window) === null || j === void 0 || (q = j.build) === null || q === void 0 ? void 0 : q.isPreviewDeploy) && (ae = "cookie"), !!ae) try {
								const fe = document.head.querySelector("link[rel=icon]");
								fe && (fe.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${ae}.ico`)).default)
							} catch {}
						}
						N()
					}, [])
				};
			var pn = t("../react/common/constants/constants.ts");
			const gn = () => {
					var N;
					const j = (0, $e.useLocation)(),
						[q, ae] = (0, ke.useState)(((N = window) === null || N === void 0 ? void 0 : N.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, ke.useEffect)(() => {
						const fe = ut().parse(j.search);
						if (fe.pt && ye.Z.set(pn.sJ, fe.pt), fe == null ? void 0 : fe.devPanel) {
							var Ie, Oe;
							(Ie = window) === null || Ie === void 0 || (Oe = Ie.localStorage) === null || Oe === void 0 || Oe.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ae(!0)
						}
					}, [j.search]), {
						devPanelEnabled: q
					}
				},
				mn = ({
					id: N,
					customDataLayer: j = [],
					dataLayerName: q = "dataLayer"
				}) => {
					const ae = `<iframe src="https://www.googletagmanager.com/ns.html?id=${N}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						fe = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${q}', '${N}')`,
						Ie = `
    window.${q} = window.${q} || [];
    window.${q}.push(${JSON.stringify(j)})
  `;
					return {
						iframe: ae,
						script: fe,
						dataLayerHTML: Ie
					}
				},
				fn = N => {
					const j = document.createElement("script");
					return j.innerHTML = N, j.async = !0, j
				},
				vn = N => {
					const j = document.createElement("noscript");
					return j.innerHTML = N, j
				},
				Zt = N => {
					const j = document.createElement("script");
					return j.innerHTML = N, j
				},
				Bn = ({
					dataLayer: N,
					dataLayerName: j
				}) => {
					if (window[j]) return window[j].push(N);
					const q = `
      window.${j} = window.${j} || [];
      window.${j}.push(${JSON.stringify(N)})`,
						ae = Zt(q);
					document.head.insertBefore(ae, document.head.childNodes[0])
				},
				_n = ({
					containerId: N,
					customDataLayer: j,
					gtmFeatureFlag: q = !0
				}) => {
					(0, ke.useEffect)(() => {
						(() => {
							if (!q) return null;
							const {
								iframe: fe,
								script: Ie,
								dataLayerHTML: Oe
							} = mn({
								id: N,
								customDataLayer: j
							});
							document.head.insertBefore(Zt(Oe), document.head.childNodes[0]), document.head.insertBefore(fn(Ie), document.head.childNodes[0]), document.body.insertBefore(vn(fe), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const En = ({
				isDev: N,
				gtmFeatureFlag: j
			}) => {
				(0, ke.useEffect)(() => {
					(() => {
						if (!j) return null;
						let ae;
						N ? ae = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ae = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const fe = document.createElement("script");
						fe.async = !0, fe.src = ae, document.head.insertBefore(fe, document.head.childNodes[0])
					})()
				}, [])
			};
			var yn = t("../react/utils/useDomainConnectRedirect.ts");
			const hn = "GTM-NDGPDFZ",
				bn = Ce().lazy(() => Promise.all([t.e(16691), t.e(31736), t.e(12174), t.e(1091), t.e(84959), t.e(51436), t.e(3292), t.e(47386), t.e(70618), t.e(19910), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(18527), t.e(52215), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				Cn = Ce().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(1091), t.e(3292), t.e(55879), t.e(69088), t.e(18527), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var Tn = ({
					userIsAuthed: N
				}) => {
					un(), dn(), (0, yn.y)();
					const {
						devPanelEnabled: j
					} = gn();
					return _n({
						containerId: hn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), En({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), Ce().createElement(ke.Suspense, {
						fallback: Ce().createElement(sn, null)
					}, Ce().createElement($e.Switch, null, !N && !0 && Ce().createElement($e.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Ce().createElement(Cn, null)), Ce().createElement($e.Route, {
						render: () => Ce().createElement(nn.ZC, {
							minHeight: "100vh"
						}, Ce().createElement(bn, null))
					})), j && Ce().createElement(an, null))
				},
				zt = t("../../../../node_modules/yup/es/index.js"),
				In = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => zt.Z_().email((0, Qe.ZP)("common.validation.email")).required((0, Qe.ZP)("common.validation.email")),
				cfPassword: () => zt.Z_().required((0, Qe.ZP)("common.validation.required"))
			};
			(0, In.Yd)(Qt).forEach(N => {
				zt.kM(zt.Z_, N, Qt[N])
			});
			var On = t("../react/common/utils/startViewTransition.ts");
			const Xt = Ce().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function wn() {
				const [N, j] = (0, ke.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, ke.useEffect)(() => {
					const q = window.matchMedia("(prefers-color-scheme: dark)"),
						ae = fe => {
							j(fe.matches ? "dark" : "light")
						};
					return q.addEventListener("change", ae), () => {
						q.removeEventListener("change", ae)
					}
				}, []), N
			}
			const An = () => {
					const N = (0, At.$8)(),
						[j, q] = (0, ke.useState)(N ? Xt : Ce().Fragment),
						ae = wn(),
						[fe, Ie] = (0, ke.useState)((0, y.Yc)());
					(0, ke.useEffect)(() => {
						(0, y.fF)(() => Ie((0, y.Yc)()))
					}, []);
					const Oe = Me => {
						Ie(Me), (0, On.o)(() => {
							(0, y.C8)(Me)
						}), document.cookie = `dark-mode=${Me};Path=/;Max-Age=31536000`, Me === "dark" || Me === "on" || Me === "system" && ae === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
					};
					return (0, ke.useEffect)(() => {
						q(N ? Xt : Ce().Fragment)
					}, [N]), (0, ke.useEffect)(() => {
						const Me = () => Oe(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Me), () => {
							window.removeEventListener("storage", Me)
						}
					}, []), Ce().createElement(ke.Suspense, {
						fallback: null
					}, Ce().createElement(lt.Provider, {
						store: (0, d.bh)()
					}, Ce().createElement($e.Router, {
						history: me
					}, Ce().createElement(j, null, Ce().createElement(ie.Z, {
						renderer: h()
					}, Ce().createElement(Ot, null, Ce().createElement(Ae.S, {
						sentryTag: "Root"
					}, Ce().createElement(bt.J$, {
						value: {
							fetcher: Me => fetch(Me).then(it => it.json())
						}
					}, Ce().createElement(en, null), Ce().createElement(ot, null), Ce().createElement(tn.Z_, {
						onDarkModeChangeCb: Oe
					}, Ce().createElement(Te.ZP, null, Ce().createElement(Tn, {
						userIsAuthed: N
					}))), Ce().createElement(_e.ZP, null), Ce().createElement(G.F0, null)))))))))
				},
				Pn = () => {
					(0, ht.render)(Ce().createElement(An, null), document.getElementById("react-app"))
				};
			var wt = t("../utils/initSparrow.ts"),
				$t = t("../utils/zaraz.ts");
			const Dn = () => {
					const N = (0, ft.PR)((0, d.bh)().getState());
					Ln(), (0, wt.Ug)(), (0, $t.bM)(), (N == null ? void 0 : N.id) && Ve().setUserId(N == null ? void 0 : N.id), (0, wt.yV)(), !(0, wt.Wi)() && (0, wt.IM)(), N ? (0, $t.yn)(N) : (0, $t.Ro)()
				},
				Ln = () => {
					var N, j;
					(N = window) === null || N === void 0 || (j = N.OneTrust) === null || j === void 0 || j.OnConsentChanged(() => {
						const q = (0, ft.PR)((0, d.bh)().getState());
						(0, wt.Wi)() ? (Ve().setEnabled(!0), (q == null ? void 0 : q.id) ? (Ve().setUserId(q.id), (0, $t.yn)(q)) : (0, $t.Ro)(), (0, wt.yV)()) : (Ve().setEnabled(!1), (0, wt.IM)())
					})
				};

			function Sn(N) {
				for (var j = 1; j < arguments.length; j++) {
					var q = arguments[j] != null ? Object(arguments[j]) : {},
						ae = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(q).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(q, fe).enumerable
					})), ae.forEach(function(fe) {
						kn(N, fe, q[fe])
					})
				}
				return N
			}

			function kn(N, j, q) {
				return j = Mn(j), j in N ? Object.defineProperty(N, j, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[j] = q, N
			}

			function Mn(N) {
				var j = Nn(N, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function Nn(N, j) {
				if (typeof N != "object" || N === null) return N;
				var q = N[Symbol.toPrimitive];
				if (q !== void 0) {
					var ae = q.call(N, j || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(N)
			}
			const Rn = "init",
				Jt = (N, j) => {
					c.$e(function(q) {
						q.setTag(Rn, j), c.Tb(N)
					}), ue(N)
				},
				Kt = async (N, j) => {
					try {
						return await N(), !0
					} catch (q) {
						return Jt(q, j), !1
					}
				};
			(async () => {
				try {
					var N, j, q;
					t.g.build = Sn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "e60aab987e3a405a283d7c8181fded87df4590b1",
						dashVersion: "32960973",
						env: "production",
						builtAt: 1746176368494,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, x.p)()
					}), Q();
					const ae = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => P(me),
						tag: "hashScroll"
					}, {
						fn: z.Z,
						tag: "styles"
					}, {
						fn: Ue,
						tag: "mfePreviewData"
					}];
					for (const it of ae)
						if (!await Kt(it.fn, it.tag)) return;
					let fe;
					if (!await Kt(async () => {
							fe = await mt()
						}, "bootstrap")) return;
					const Ie = (0, d.bh)(),
						Oe = ((N = fe) === null || N === void 0 ? void 0 : N.data) || {};
					Ie.dispatch((0, i.mW)("user", Oe == null ? void 0 : Oe.user));
					const Me = (j = fe) === null || j === void 0 || (q = j.data) === null || q === void 0 ? void 0 : q.user;
					return t.g.bootstrap = fe, Me && Me.id && de(Me.id), !await Kt(tt, "gates") || !await Kt(Dn, "tracking") ? void 0 : Pn()
				} catch (ae) {
					Jt(ae, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/userSelectors.ts"),
				l = t("../react/common/selectors/zoneSelectors.ts"),
				f = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/common/utils/isGuards.ts"),
				g = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				v = t.n(g);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(d) {
					for (var a = 1; a < arguments.length; a++) {
						var m = arguments[a];
						for (var I in m) Object.prototype.hasOwnProperty.call(m, I) && (d[I] = m[I])
					}
					return d
				}, n.apply(this, arguments)
			}
			const c = d => {
				function a(m) {
					const I = (0, o.UM)(),
						P = (0, g.useHistory)(),
						b = (0, g.useLocation)(),
						y = (0, g.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						O = (0, o.p4)(u.PR) || null,
						_ = (0, o.p4)(l.nA) || null,
						C = (0, o.p4)(f.uF),
						S = C ? C.account : null;
					if (!y) return null;
					const {
						accountId: L,
						app: M,
						tab: A
					} = y.params, T = y.params.zoneName && ((0, s.v5)(y.params.zoneName) || y.params.zoneName.indexOf(".") > 0) ? y.params.zoneName : void 0;
					return r().createElement(d, n({
						dispatch: I,
						history: P,
						location: b,
						match: y,
						user: O,
						membership: L ? C : null,
						account: L ? S : null,
						accountId: L || null,
						zone: T ? _ : null,
						zoneName: T || null,
						app: T ? M : null,
						tab: T ? A : null
					}, m))
				}
				return a.displayName = `withEntities(${i(d)})`, a
			};

			function i(d) {
				return d.displayName || d.name || "Component"
			}
			E.Z = c
		},
		"../react/app/components/AccountHome/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$$: function() {
					return _
				},
				CK: function() {
					return M
				},
				KV: function() {
					return S
				},
				OX: function() {
					return L
				},
				QV: function() {
					return O
				},
				Yt: function() {
					return b
				},
				bA: function() {
					return y
				},
				fu: function() {
					return T
				},
				gX: function() {
					return m
				},
				hh: function() {
					return A
				},
				o1: function() {
					return C
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
				o = t("../react/utils/url.ts");
			const u = "projects table click",
				l = "click create application",
				f = "account home dev plat - product card click",
				s = "account home dev plat - empty state CTA click",
				g = "account home dev plat - view all projects click",
				v = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				c = "account home zero trust - analytics link click",
				i = "account home zero trust - product card click",
				d = "account home zero trust - plan pill click",
				a = "account home zero trust - plan fallback link click",
				m = {
					SPARROW_PROJECTS_TABLE_CLICK: u,
					SPARROW_CREATE_PROJECT_CLICK: l,
					SPARROW_PRODUCT_CARD_CLICK: f,
					SPARROW_EMPTY_STATE_CTA_CLICK: s,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: g,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: v,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: c,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: i,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: d,
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
				b = () => {
					r().sendEvent(l, {
						category: "Projects Table"
					})
				},
				y = ({
					category: D,
					product: k
				}) => {
					r().sendEvent(f, {
						category: D,
						product: k
					})
				},
				O = () => {
					r().sendEvent(s)
				},
				_ = () => {
					r().sendEvent(g)
				},
				C = D => {
					r().sendEvent(n, {
						category: D
					})
				},
				S = ({
					category: D,
					href: k
				}) => {
					r().sendEvent(v, {
						category: D,
						href: (0, o.cm)(k)
					})
				},
				L = ({
					category: D,
					href: k
				}) => {
					r().sendEvent(c, {
						category: D,
						href: (0, o.cm)(k)
					})
				},
				M = ({
					category: D,
					product: k,
					href: U
				}) => {
					r().sendEvent(i, {
						category: D,
						product: k,
						href: (0, o.cm)(U)
					})
				},
				A = ({
					plan: D
				}) => {
					r().sendEvent(d, {
						plan: D
					})
				},
				T = () => {
					r().sendEvent(a)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				BQ: function() {
					return g
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
					return c
				},
				r4: function() {
					return u
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
				o = (0, e.R)(r.ADD_SITE, d => ({
					payload: d
				})),
				u = (0, e.R)(r.RESOLVING_START),
				l = (0, e.R)(r.RESOLVING_COMPLETE),
				f = (0, e.R)(r.SELECT_ZONE, d => ({
					payload: d
				})),
				s = (0, e.R)(r.SELECT_ACCOUNT, d => ({
					payload: d
				})),
				g = (0, e.R)(r.SELECT_PAGES_PROJECT, d => ({
					payload: d
				})),
				v = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, d => ({
					payload: d
				})),
				n = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, d => ({
					accountIds: d
				})),
				c = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				i = (0, e.R)(r.SELECT_WORKER, d => ({
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
					return o
				},
				s$: function() {
					return s
				}
			});
			const e = "to",
				r = "_gl",
				o = "freeTrial",
				u = "deepLinkQueryParams",
				l = "resolvedDeepLinkQueryParams",
				f = "add",
				s = "multiSkuProducts",
				g = "/:account/billing/checkout",
				v = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return A
				},
				U: function() {
					return M.U
				},
				dd: function() {
					return M.dd
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
				o = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../react/app/components/DeepLink/utils.ts"),
				l = t("../react/utils/bootstrap.ts"),
				f = t("../react/app/components/DeepLink/actions.ts"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = t.n(s);

			function v(T) {
				for (var D = 1; D < arguments.length; D++) {
					var k = arguments[D] != null ? Object(arguments[D]) : {},
						U = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(k).filter(function(X) {
						return Object.getOwnPropertyDescriptor(k, X).enumerable
					})), U.forEach(function(X) {
						n(T, X, k[X])
					})
				}
				return T
			}

			function n(T, D, k) {
				return D = c(D), D in T ? Object.defineProperty(T, D, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[D] = k, T
			}

			function c(T) {
				var D = i(T, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function i(T, D) {
				if (typeof T != "object" || T === null) return T;
				var k = T[Symbol.toPrimitive];
				if (k !== void 0) {
					var U = k.call(T, D || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(T)
			}
			class d {
				constructor(D, k) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", U => {
						this.resolvers.set(U, {
							name: U,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", U => {
						const X = this.resolvers.get(U);
						X && (X.endTime = Date.now(), this.resolvers.set(U, X))
					}), n(this, "resolverCancel", U => {
						this.resolverDone(U), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", U => {
						const X = "NO_ACTION",
							se = {
								actionType: X,
								startTime: 0
							};
						return {
							start: (pe = X) => {
								const ue = this.resolvers.get(U);
								se.actionType = pe, se.startTime = Date.now(), ue && ue.userActions.push(se)
							},
							finish: (pe = X) => {
								se.actionType = pe, se.endTime = Date.now()
							},
							cancel: (pe = X) => {
								se.actionType = pe, se.endTime = Date.now(), this.resolverCancel(U)
							}
						}
					}), this.deepLink = D, this.legacyDeepLink = k, this.resolvers = new Map
				}
				track(D) {
					try {
						if (this._done) return;
						this._done = !0;
						const k = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: a(this.startTime, this.endTime),
								totalCpuTime: a(this.startTime, this.endTime)
							},
							U = this.resolvers.size === 0 ? k : Array.from(this.resolvers.values()).reduce((X, se) => {
								const pe = a(se.startTime, se.endTime),
									ue = se.userActions.reduce((Y, W) => {
										const B = a(W.startTime, W.endTime);
										return {
											totalTime: Y.totalTime + B,
											actions: Y.actions.set(W.actionType, B)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									z = pe - ue.totalTime;
								return v({}, X, {
									totalTime: X.totalTime + pe,
									totalUserActionsTime: X.totalUserActionsTime + ue.totalTime,
									totalCpuTime: X.totalCpuTime + z,
									[`${se.name}ResolverTotalTime`]: pe,
									[`${se.name}ResolverTotalCpuTime`]: z,
									[`${se.name}ResolverTotalUserActionsTime`]: ue.totalTime
								}, Array.from(ue.actions.keys()).reduce((Y, W) => v({}, Y, {
									[`${se.name}Resolver/${W}`]: ue.actions.get(W)
								}), {}))
							}, v({}, k, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						g().sendEvent(D, U)
					} catch (k) {
						console.error(k)
					}
				}
			}

			function a(T = Date.now(), D = Date.now()) {
				return (D - T) / 1e3
			}
			var m = t("../react/app/components/DeepLink/constants.ts"),
				I = t("../react/common/hooks/useCachedState.ts"),
				P = t("../react/common/hooks/usePrevious.ts");

			function b(T) {
				for (var D = 1; D < arguments.length; D++) {
					var k = arguments[D] != null ? Object(arguments[D]) : {},
						U = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(k).filter(function(X) {
						return Object.getOwnPropertyDescriptor(k, X).enumerable
					})), U.forEach(function(X) {
						y(T, X, k[X])
					})
				}
				return T
			}

			function y(T, D, k) {
				return D = O(D), D in T ? Object.defineProperty(T, D, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[D] = k, T
			}

			function O(T) {
				var D = _(T, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function _(T, D) {
				if (typeof T != "object" || T === null) return T;
				var k = T[Symbol.toPrimitive];
				if (k !== void 0) {
					var U = k.call(T, D || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(T)
			}
			var S = ({
					children: T
				}) => {
					const D = (0, r.TZ)(),
						k = (0, o.useHistory)(),
						U = (0, P.Z)(k.location.pathname),
						[X, se] = (0, e.useState)(!0),
						[pe, ue] = (0, I.j)(void 0, {
							key: m.Fj
						}),
						[z, Y] = (0, I.j)(void 0, {
							key: m.O5
						}),
						[W, B] = (0, I.j)(void 0, {
							key: m.s$
						}),
						w = (0, l.$8)();
					let x = new URLSearchParams(k.location.search);
					const K = (0, u.mL)(k.location.pathname, x);
					let ee = null,
						te = null;
					if (x.has(m.Tc) && x.delete(m.Tc), x.get(m.BV)) ee = x.get(m.BV), k.location.hash && (te = k.location.hash);
					else if (pe) {
						const R = new URLSearchParams(pe);
						R.get(m.BV) && (ee = R.get(m.BV), x = R)
					} else K && (x.set(m.BV, K), ee = K);
					if (ee && m._h.test(ee)) {
						const R = x.getAll(m.Kt),
							V = JSON.stringify(R);
						R.length && V !== W && B(V), x.has(m.Tc) && x.delete(m.Tc), x.delete(m.Kt)
					}!w && pe === void 0 && ee && ue(x.toString());
					const ne = async () => {
						try {
							if ((0, u.I3)(ee) && w) {
								pe && ue(void 0), D.dispatch((0, f.r4)()), se(!0), ee && ee !== z && Y(ee);
								const R = await (0, u.py)(ee, se, D, k, U, new d(ee, K ? `${k.location.pathname}${k.location.search}` : void 0));
								x.delete(m.BV);
								const V = x.toString();
								k.replace(b({}, k.location, {
									pathname: R,
									search: V
								}, te ? {
									hash: te
								} : {})), D.dispatch((0, f.WF)())
							}
						} catch (R) {
							D.dispatch((0, f.WF)()), console.error(R)
						} finally {
							se(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ne()
					}, [k.location.pathname, k.location.search]), (X || (0, u.I3)(ee)) && w ? null : T
				},
				L = t("../react/app/components/DeepLink/reducer.ts"),
				M = t("../react/app/components/DeepLink/selectors.ts"),
				A = S
		},
		"../react/app/components/DeepLink/reducer.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return u
				},
				r: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				o = t("../react/app/components/DeepLink/actions.ts");
			const u = null,
				l = r().from({
					lastAction: u,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function f(s = l, g) {
				if (g.type === o.MF.RESOLVING_COMPLETE) return l;
				if (g.type === o.MF.RESOLVING_START) return s.set("isResolving", !0);
				if (s.isResolving) {
					if (g.type === o.MF.RESOLVING_COMPLETE) return s.set("isResolving", !1);
					if (g.type === o.MF.SET_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", g.accountIds);
					if (g.type === o.MF.DELETE_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", void 0);
					{
						let v = s;
						try {
							v = s.set("lastAction", g)
						} catch {
							v = s.set("lastAction", {
								type: g.type
							})
						}
						return v
					}
				} else return s
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(F, E, t) {
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
			const e = u => u.deepLink.lastAction,
				r = u => u.deepLink.isResolving,
				o = u => u.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				I3: function() {
					return v
				},
				X1: function() {
					return s
				},
				mL: function() {
					return a
				},
				py: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../react/app/components/DeepLink/reducer.ts"),
				o = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/app/components/DeepLink/constants.ts"),
				l = t("../react/common/validators/index.js"),
				f = t("../react/common/utils/isGuards.ts");
			const s = m => (0, l.Lb)(m) && (m.split(".").length > 1 || (0, f.v5)(m)),
				g = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				v = m => typeof m == "string" && m.startsWith("/"),
				n = (m, I) => P => new Promise((b, y) => {
					I.start();
					const O = m.subscribe(() => {
						const _ = (0, o.yI)(m.getState());
						_ === r.E ? (I.cancel(), O(), y("DeepLink: waitForAction out of context.")) : P(_) && (I.finish(_.type), O(), b(_))
					})
				}),
				c = (m, I, P) => (b, y) => new Promise((O, _) => {
					P.start();
					const C = I.location.pathname;
					b = new URL(b, window.location.href).pathname, C !== b && (P.cancel(), _(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${b}", but on "${C}". You need to redirect to "${b}", and unblockRouter in your Resolver, before you use this function.`));
					const S = m.subscribe(() => {
						const L = (0, o.yI)(m.getState()),
							M = I.location.pathname,
							T = new URLSearchParams(I.location.search).get(u.BV);
						(M !== b || !!T) && (P.cancel(), S(), _(`DeepLink: waitForPageAction user navigated away from "${b}" to "${M}${T?I.location.search:""}"`)), L === r.E ? (P.cancel(), S(), _("DeepLink: waitForPageAction out of context.")) : y(L) && (P.finish(L.type), S(), O(L))
					})
				});

			function i(m) {
				const I = [],
					P = m.split("?")[0].split("/");
				for (let b of P) b.length !== 0 && (b.startsWith(":") ? I.push({
					value: b.substring(1),
					type: "dynamic"
				}) : I.push({
					value: b,
					type: "static"
				}));
				return I
			}
			async function d(m, I, P, b, y, O) {
				O.start();
				const _ = i(m),
					S = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					L = {};
				let M = "";
				for (const [A, T] of _.entries())
					if (T.type === "static") M = [M, T.value].join("/");
					else if (T.type === "dynamic" && g.is(T.value) && T.value in S) {
					O.resolverStart(T.value);
					const D = await S[T.value]({
						deepLink: m,
						blockRouter: () => I(!0),
						unblockRouter: () => I(!1),
						routerHistory: b,
						resolvedValues: L,
						store: P,
						referringRoute: y,
						uri: {
							currentPartIdx: A,
							parts: _
						},
						waitForAction: n(P, O.createUserActionTracker(T.value)),
						waitForPageAction: c(P, b, O.createUserActionTracker(T.value))
					});
					O.resolverDone(T.value), M = [M, D].join("/"), L[T.value] = D
				} else throw O.cancel(), new Error(`DeepLink: Resolver with name '${T.value}' is not supported.`);
				return O.done(), M
			}

			function a(m, I) {
				const P = ":account",
					b = ":zone",
					y = I.get("zone");
				if (y) return I.delete("zone"), `/${P}/${b}/${y}`;
				const O = I.get("account");
				if (O) return I.delete("account"), `/${P}/${O}`;
				if (m === "/overview") return `/${P}/${b}`;
				const _ = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const C of _) {
					const S = C.length;
					if (m.startsWith(C) && (m.length === S || m[S] === "/")) return `/${P}/${b}${m}`
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
		"../react/app/components/ErrorBoundary.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				u = t("../react/app/components/SomethingWrong.jsx"),
				l = t("../utils/sentry/lastSentEventId.ts"),
				f = t("../react/utils/zaraz.ts"),
				s = t("../react/utils/url.ts"),
				g = t("../node_modules/@cloudflare/elements/es/index.js"),
				v = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(c),
				d = t("../react/common/components/Page.tsx"),
				a = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function m() {
				return (0, e.useEffect)(() => {
					i().sendEvent("new page available refresh cta")
				}, []), r().createElement(d.Z, {
					type: "narrow",
					textAlign: "center",
					title: r().createElement(g.ZC, {
						textAlign: "center",
						fontSize: 5,
						fontWeight: 400
					}, r().createElement(n.Trans, {
						id: "error.new_page_version_available.title"
					})),
					description: r().createElement(n.Trans, {
						id: "error.new_page_version_available.description"
					})
				}, r().createElement(g.ZC, null, r().createElement(g.Ei, {
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
				})))
			}
			const I = ({
				sentryTag: P,
				children: b,
				fallbackComponent: y
			}) => r().createElement(o.SV, {
				beforeCapture: O => {
					f.tg === null || f.tg === void 0 || f.tg.track("page-error", {
						page: (0, s.Fl)(window.location.pathname)
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
					eventId: _
				}) => {
					var C;
					if (y) return y;
					const S = l.e.getEventId() || _;
					return (O == null || (C = O.message) === null || C === void 0 ? void 0 : C.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(m, null)) : r().createElement(u.Z, {
						type: "page",
						error: O,
						eventId: S,
						sentryTag: P
					})
				}
			}, b)
		},
		"../react/app/components/Footer.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return B
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = t.n(s),
				v = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				c = t("../react/utils/translator.tsx"),
				i = t("../../../../node_modules/moment/moment.js"),
				d = t.n(i);
			const a = () => {
					const w = d()().format("YYYY"),
						x = K => {
							g().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: K
							})
						};
					return r().createElement(m, {
						marginTop: "auto"
					}, r().createElement(I, null, r().createElement(P, null, r().createElement(b, null, "\xA9 ", w, " Cloudflare, Inc."), r().createElement(b, null, r().createElement(y, null, r().createElement(O, {
						showOnDeskTop: !1
					}, r().createElement(_, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => x("Support")
					}, r().createElement(c.cC, {
						id: "common.support"
					}))), r().createElement(O, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => x("Privacy Policy")
					}, r().createElement(c.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(O, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => x("Terms of Use")
					}, r().createElement(c.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(O, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => x("Cookie Preferences")
					}, r().createElement(c.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(O, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => x("Trademark")
					}, r().createElement(c.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(y, null, r().createElement(O, null, r().createElement(_, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => x("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(c.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				m = (0, l.createComponent)(({
					theme: w,
					marginTop: x
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: x
				})),
				I = (0, l.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				P = (0, l.createComponent)(({
					theme: w
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${w.space[3]}px`
					}
				})),
				b = (0, l.createComponent)(({
					theme: w
				}) => ({
					width: "100%",
					color: w.colors.white,
					fontSize: w.fontSizes[1],
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
				y = (0, l.createComponent)(({
					theme: w
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: w.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				O = (0, l.createComponent)(({
					showOnDeskTop: w = !0,
					theme: x
				}) => ({
					color: x.colors.white,
					fontSize: x.fontSizes[1],
					height: "20px",
					display: w ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: x.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: x.space[3],
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
					theme: w
				}) => ({
					textDecoration: "none",
					color: w.colors.white,
					"&:hover": {
						color: w.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var C = a,
				S = t("../react/pages/welcome/routes.ts"),
				L = t("../react/utils/cookiePreferences.ts"),
				M = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				T = () => {
					const [w, x] = (0, e.useState)(!1), K = (0, L.wV)(), ee = () => {
						x(!0)
					}, te = () => {
						x(!1)
					}, ne = K && K === "US" ? (0, c.ZP)("footer.cpra_cta.privacy_choices") : (0, c.ZP)("footer.cpra_cta.cookie_preferences"), R = {
						background: "transparent",
						borderRadius: "none",
						color: w ? (0, f.Yc)() ? "#ee730a" : "#003681" : (0, f.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: w ? "underline" : "none",
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
						style: R,
						onMouseEnter: ee,
						onMouseLeave: te
					}, r().createElement(u.Ei, {
						height: 15,
						src: M,
						mr: 2,
						alt: ne
					}), ne)
				};

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(w) {
					for (var x = 1; x < arguments.length; x++) {
						var K = arguments[x];
						for (var ee in K) Object.prototype.hasOwnProperty.call(K, ee) && (w[ee] = K[ee])
					}
					return w
				}, D.apply(this, arguments)
			}

			function k(w, x) {
				if (w == null) return {};
				var K = U(w, x),
					ee, te;
				if (Object.getOwnPropertySymbols) {
					var ne = Object.getOwnPropertySymbols(w);
					for (te = 0; te < ne.length; te++) ee = ne[te], !(x.indexOf(ee) >= 0) && (!Object.prototype.propertyIsEnumerable.call(w, ee) || (K[ee] = w[ee]))
				}
				return K
			}

			function U(w, x) {
				if (w == null) return {};
				var K = {},
					ee = Object.keys(w),
					te, ne;
				for (ne = 0; ne < ee.length; ne++) te = ee[ne], !(x.indexOf(te) >= 0) && (K[te] = w[te]);
				return K
			}
			const X = (0, l.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,f.Yc)()?f.rS.colors.orange[6]:f.rS.colors.blue[4]}`
					}
				}), u.A),
				se = (0, l.createStyledComponent)(({
					theme: w
				}) => ({
					color: w.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, v.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: w.colors.gray[4]
					}
				}), u.A),
				pe = w => {
					let {
						onClick: x
					} = w, K = k(w, ["onClick"]);
					return React.createElement(X, D({
						onClick: ee => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: K.href
							}), x && x(ee)
						}
					}, K))
				},
				ue = w => {
					let {
						children: x,
						target: K,
						rel: ee
					} = w, te = k(w, ["children", "target", "rel"]);
					return r().createElement(se, D({
						target: K || "_blank",
						rel: ee || "noopener noreferrer"
					}, te), x)
				},
				z = (0, l.createStyledComponent)(({
					theme: w
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
							fontSize: w.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: w.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), u.Ul),
				Y = (0, l.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, v.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), u.ZC);
			var B = () => {
				const w = [S.d.root.pattern].some(K => (0, o.matchPath)(location.pathname, {
					path: K
				}));
				if ((0, n.PP)()) return r().createElement(C, null);
				if (w) return null;
				const x = new Date().getFullYear();
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
				}, r().createElement(Y, null, r().createElement(z, null, r().createElement(u.Li, null, r().createElement(ue, {
					href: "https://support.cloudflare.com"
				}, (0, c.ZP)("common.support"))), r().createElement(u.Li, null, r().createElement(ue, {
					href: "https://www.cloudflarestatus.com"
				}, r().createElement(u.Dr, {
					textTransform: "capitalize"
				}, (0, c.ZP)("footer.system_status")))), r().createElement(u.Li, null, r().createElement(ue, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, c.ZP)("footer.careers"))), r().createElement(u.Li, null, r().createElement(ue, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, c.ZP)("footer.tos_reduced"))), r().createElement(u.Li, null, r().createElement(ue, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, c.ZP)("footer.security_issues"))), r().createElement(u.Li, null, r().createElement(ue, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, c.ZP)("footer.privacy_policy"))), r().createElement(u.Li, null, r().createElement(T, null)), r().createElement(u.Li, null, r().createElement(u.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", x, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../react/app/components/ErrorStatus.tsx"),
				u = t("../react/utils/translator.tsx");
			const l = f => r().createElement(o.Z, f, (0, u.ZP)("error.forbidden"));
			E.Z = l
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return I
				},
				Z: function() {
					return ne
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../node_modules/@cloudflare/component-button/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				g = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				v = t.n(g),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				c = t("../react/common/components/AccessControl/index.js"),
				i = t("../react/common/components/ButtonWithDropdown.tsx"),
				d = t("../react/common/components/Dropdown/index.tsx"),
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
					const R = (0, m.Z)("super-add-button-copy-change"),
						V = [{
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
					switch (R) {
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
							}, ...V];
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
							}, ...V];
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
							}, ...V];
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
							}, ...V];
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
							}, ...V];
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
				b = [{
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
			var y = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function O(R) {
				for (var V = 1; V < arguments.length; V++) {
					var H = arguments[V] != null ? Object(arguments[V]) : {},
						$ = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(H).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(H, oe).enumerable
					})), $.forEach(function(oe) {
						_(R, oe, H[oe])
					})
				}
				return R
			}

			function _(R, V, H) {
				return V = C(V), V in R ? Object.defineProperty(R, V, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[V] = H, R
			}

			function C(R) {
				var V = S(R, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function S(R, V) {
				if (typeof R != "object" || R === null) return R;
				var H = R[Symbol.toPrimitive];
				if (H !== void 0) {
					var $ = H.call(R, V || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(R)
			}

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(R) {
					for (var V = 1; V < arguments.length; V++) {
						var H = arguments[V];
						for (var $ in H) Object.prototype.hasOwnProperty.call(H, $) && (R[$] = H[$])
					}
					return R
				}, L.apply(this, arguments)
			}

			function M(R, V) {
				if (R == null) return {};
				var H = A(R, V),
					$, oe;
				if (Object.getOwnPropertySymbols) {
					var ce = Object.getOwnPropertySymbols(R);
					for (oe = 0; oe < ce.length; oe++) $ = ce[oe], !(V.indexOf($) >= 0) && (!Object.prototype.propertyIsEnumerable.call(R, $) || (H[$] = R[$]))
				}
				return H
			}

			function A(R, V) {
				if (R == null) return {};
				var H = {},
					$ = Object.keys(R),
					oe, ce;
				for (ce = 0; ce < $.length; ce++) oe = $[ce], !(V.indexOf(oe) >= 0) && (H[oe] = R[oe]);
				return H
			}
			const T = R => {
					let {
						title: V,
						trackingEvent: H,
						icon: $,
						url: oe,
						description: ce,
						disabled: ge
					} = R, me = M(R, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(D, L({
						to: !ge && oe || "#",
						"aria-disabled": ge,
						onClick: () => {
							v().sendEvent(H, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, me), r().createElement(u.ZC, {
						display: "flex"
					}, r().createElement(o.J, {
						type: $,
						size: 24,
						mr: 2,
						mt: 1
					}), r().createElement(u.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, r().createElement(u.ZC, {
						fontSize: 3
					}, r().createElement(a.cC, V)), r().createElement(u.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, r().createElement(a.cC, ce)))))
				},
				D = (0, n.createStyledComponent)(({
					theme: R
				}) => {
					const V = {
						cursor: "pointer",
						backgroundColor: (0, f.Yc)() ? R.colors.gray[8] : R.colors.gray[9],
						color: R.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: R.colors.background,
						color: R.colors.gray[2],
						fontSize: R.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': V,
						':focus-within:not([aria-disabled="true"])': O({}, V, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: R.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, y.Link);
			var k = T;

			function U() {
				return U = Object.assign ? Object.assign.bind() : function(R) {
					for (var V = 1; V < arguments.length; V++) {
						var H = arguments[V];
						for (var $ in H) Object.prototype.hasOwnProperty.call(H, $) && (R[$] = H[$])
					}
					return R
				}, U.apply(this, arguments)
			}

			function X(R) {
				for (var V = 1; V < arguments.length; V++) {
					var H = arguments[V] != null ? Object(arguments[V]) : {},
						$ = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(H).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(H, oe).enumerable
					})), $.forEach(function(oe) {
						se(R, oe, H[oe])
					})
				}
				return R
			}

			function se(R, V, H) {
				return V = pe(V), V in R ? Object.defineProperty(R, V, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[V] = H, R
			}

			function pe(R) {
				var V = ue(R, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function ue(R, V) {
				if (typeof R != "object" || R === null) return R;
				var H = R[Symbol.toPrimitive];
				if (H !== void 0) {
					var $ = H.call(R, V || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(R)
			}

			function z(R, V) {
				if (R == null) return {};
				var H = Y(R, V),
					$, oe;
				if (Object.getOwnPropertySymbols) {
					var ce = Object.getOwnPropertySymbols(R);
					for (oe = 0; oe < ce.length; oe++) $ = ce[oe], !(V.indexOf($) >= 0) && (!Object.prototype.propertyIsEnumerable.call(R, $) || (H[$] = R[$]))
				}
				return H
			}

			function Y(R, V) {
				if (R == null) return {};
				var H = {},
					$ = Object.keys(R),
					oe, ce;
				for (ce = 0; ce < $.length; ce++) oe = $[ce], !(V.indexOf(oe) >= 0) && (H[oe] = R[oe]);
				return H
			}
			const W = "GLOBAL_ADD_DROPDOWN",
				B = (0, n.createStyledComponent)(({
					theme: R
				}) => ({
					"background-color": R.colors.blue[5]
				}), l.zx),
				w = ({
					disableProducts: R
				}) => {
					const V = P();
					return (0, e.useEffect)(() => (v().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						v().sendEvent("close add product dropdown", {
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
					}, V.map(H => {
						const $ = H || {},
							{
								disableOn: oe,
								permissionCheck: ce
							} = $,
							ge = z($, ["disableOn", "permissionCheck"]),
							me = oe && R[oe],
							be = X({}, ge, {
								disabled: me
							});
						return ce ? r().createElement(c.Z, {
							key: H.title.id,
							edit: ce
						}, ({
							isEditable: Le
						}) => Le && r().createElement(k, be)) : r().createElement(k, U({
							key: H.url
						}, be))
					}))
				},
				x = ({
					disableProducts: R,
					topNavType: V
				}) => {
					const H = () => (0, s.tq)() || V === "icon-only" ? r().createElement(u.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, r().createElement(B, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : V === "text-icon" || V === "icon-only-with-add-button" ? r().createElement(l.zx, {
						type: "primary",
						mr: V === "text-icon" ? 2 : 3
					}, r().createElement(r().Fragment, null, r().createElement(o.J, {
						label: "plus",
						type: "plus"
					}), " ", r().createElement(a.cC, {
						id: "common.add"
					}))) : r().createElement(l.zx, {
						type: "primary",
						mr: 2
					}, r().createElement(a.cC, {
						id: "common.add"
					}), " ", r().createElement(o.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return r().createElement(K, {
						role: "group",
						"data-testid": W
					}, r().createElement(d.Lt, {
						trigger: V === "baseline" ? r().createElement(ee, null, r().createElement(o.J, {
							label: "plus",
							type: "plus"
						}), !(0, s.tq)() && r().createElement(r().Fragment, null, r().createElement(a.cC, {
							id: "common.add"
						}), " ", r().createElement(o.J, {
							label: "arrow",
							type: "caret-down"
						}))) : H(),
						menu: r().createElement(w, {
							disableProducts: R
						})
					}))
				},
				K = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				ee = (0, n.createStyledComponent)(({
					theme: R
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: R.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, f.Yc)() ? R.colors.gray[1] : R.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, f.Yc)() ? R.colors.gray[8] : R.colors.gray[9]
					}
				}), u.zx);
			var te = x,
				ne = te
		},
		"../react/app/components/LoadingSuspense.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../react/utils/translator.tsx"),
				f = t("../react/app/components/ErrorStatus.tsx"),
				s = t("../react/common/components/EmptyPage.jsx"),
				g = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const v = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(v))
				}, [])
			}

			function c(P) {
				useEventListener(v, () => {
					window.setTimeout(P, 0)
				}, {
					target: window
				})
			}

			function i(...P) {
				const [b, y] = P;
				React.useLayoutEffect(b, y), c(b)
			}

			function d(P) {
				const [b, y] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const O = window.setTimeout(() => y(!0), P);
					return () => window.clearTimeout(O)
				}, []), b
			}
			const a = ({
				loadingTimeout: P = 1e3,
				stillLoadingTimeout: b = 9e3
			}) => {
				const y = d(P),
					O = d(b);
				if (n(), !y && !O) return r().createElement(s.Z, null);
				const _ = O ? r().createElement(l.cC, {
					id: "common.still_loading"
				}) : y ? r().createElement(l.cC, {
					id: "common.loading"
				}) : null;
				return r().createElement(f.Z, {
					size: 5
				}, r().createElement(u.ZC, {
					mr: 3
				}, r().createElement(o.g, {
					size: "2x"
				})), _)
			};
			var I = ({
				children: P
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(a, null)
			}, P)
		},
		"../react/app/components/Persistence/api.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				C8: function() {
					return g
				},
				Mn: function() {
					return i
				},
				Sp: function() {
					return c
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
			const o = "/persistence/user",
				u = async () => {
					try {
						return await (await e.get(o, {
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
					} catch (a) {
						console.error(a)
					}
				}, f = async (d, a) => {
					try {
						return await (await e.post(`${o}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: d,
								accountId: a
							}),
							hideErrorAlert: !0
						})).body
					} catch (m) {
						return console.error(m), []
					}
				}, s = async (d, a) => {
					try {
						return await http.post(`/accounts/${d}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: a
							}),
							hideErrorAlert: !0
						}), !0
					} catch (m) {
						return console.error(m), !1
					}
				}, g = async d => {
					try {
						return await (await e.post(o, {
							body: JSON.stringify({
								darkMode: d
							})
						})).body
					} catch (a) {
						console.error(a)
					}
				}, v = async d => {
					try {
						return await (await e.post(`${o}/recents`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, n = async d => {
					try {
						return await (await e.post(`${o}/viewed-changes`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						throw console.error(a), a
					}
				}, c = async d => {
					try {
						return await (await e.post(o + "/flags", {
							body: JSON.stringify(d)
						})).body
					} catch (a) {
						throw console.error(a), a
					}
				}, i = async (d, a) => {
					try {
						return await (await e.post(`${o}/dismissed-tasks`, {
							body: JSON.stringify({
								name: d,
								accountId: a
							}),
							hideErrorAlert: !0
						})).body
					} catch (m) {
						throw console.error(m), m
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
				r = t.n(e),
				o = t("../react/app/components/Persistence/index.tsx");
			const u = () => (0, e.useContext)(o.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				Wl: function() {
					return v
				},
				lp: function() {
					return P
				},
				Z_: function() {
					return y
				},
				r7: function() {
					return D
				},
				Tv: function() {
					return Y
				},
				yZ: function() {
					return O.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../react/app/redux/index.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(u),
				f = t("../react/utils/bootstrap.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				g = t("../react/app/components/Persistence/api.ts");
			const v = 10;
			var n = t("../react/common/hooks/useActiveState.ts");

			function c(W) {
				for (var B = 1; B < arguments.length; B++) {
					var w = arguments[B] != null ? Object(arguments[B]) : {},
						x = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(w).filter(function(K) {
						return Object.getOwnPropertyDescriptor(w, K).enumerable
					})), x.forEach(function(K) {
						i(W, K, w[K])
					})
				}
				return W
			}

			function i(W, B, w) {
				return B = d(B), B in W ? Object.defineProperty(W, B, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[B] = w, W
			}

			function d(W) {
				var B = a(W, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function a(W, B) {
				if (typeof W != "object" || W === null) return W;
				var w = W[Symbol.toPrimitive];
				if (w !== void 0) {
					var x = w.call(W, B || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(W)
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
				I = c({}, m, {
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
				b = P.Consumer,
				y = ({
					children: W,
					onDarkModeChangeCb: B
				}) => {
					const [w, x] = (0, e.useState)(m), [K, ee] = (0, e.useState)(I.isLoading), [te, ne] = (0, e.useState)(!1), R = (0, f.$8)(), V = (0, o.p4)(ge => (0, s.wH)(ge)), [, H] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						R ? (0, g.yl)().then(ge => {
							if (ge) {
								var me;
								x(ge), H(ge == null || (me = ge.flags) === null || me === void 0 ? void 0 : me.hasEnabledSecurityNavigation), l().identify({
									hasEnabledSecurityNavigation: ge.flags.hasEnabledSecurityNavigation
								}), B(ge.darkMode)
							}
						}).finally(() => ee(!1)) : ee(!1)
					}, [R]);
					const $ = (ge, me) => !!w.favorites.find(be => be.type === "zone" && be.name === ge && be.accountId === me),
						oe = v - w.favorites.length,
						ce = ge => w.favorites.filter(be => be.type === "zone" && be.accountId === ge).length < v;
					return r().createElement(P.Provider, {
						value: c({}, w, {
							isLoading: K,
							remainingStarSlots: oe,
							isUpdatingFlags: te,
							actions: {
								canAccountStarZone: ce,
								isZoneStarred: $,
								starZone: async (ge, me) => {
									var be;
									const Le = !$(ge, me),
										je = ce(me);
									if (Le && !je) {
										console.log("can not star zone - account is at limit");
										return
									}
									const he = await (0, g.lt)(ge, me);
									l().sendEvent("click star zone", {
										isStarring: Le,
										totalStarredZones: he.filter(Se => Se.accountId === me && Se.type === "zone").length,
										totalZones: V == null || (be = V.paginationData) === null || be === void 0 ? void 0 : be.info.total_count
									}), x(c({}, w, {
										favorites: he
									}))
								},
								toggleSecurityNavigation: async ge => {
									ne(!0), await (0, g.Sp)({
										hasEnabledSecurityNavigation: ge
									}), l().identify({
										hasEnabledSecurityNavigation: ge
									}), ne(!1), H(ge), x(c({}, w, {
										flags: {
											hasEnabledSecurityNavigation: ge
										}
									}))
								},
								setDarkMode: async ge => {
									const me = await (0, g.C8)(ge);
									x(me), B(me.darkMode)
								},
								logRouteVisited: async ge => {
									var me;
									const be = await (0, g.n)(ge);
									x((me = be) !== null && me !== void 0 ? me : c({}, w))
								},
								viewChange: async ge => {
									const me = await (0, g.m6)(ge);
									x(c({}, w, {
										viewedChanges: me
									}))
								},
								dismissTask: async (ge, me) => {
									const be = await (0, g.Mn)(ge, me);
									x(c({}, w, {
										dismissedTasks: be
									}))
								}
							}
						})
					}, W)
				};
			var O = t("../react/app/components/Persistence/hooks.ts"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				C = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function S() {
				return S = Object.assign ? Object.assign.bind() : function(W) {
					for (var B = 1; B < arguments.length; B++) {
						var w = arguments[B];
						for (var x in w) Object.prototype.hasOwnProperty.call(w, x) && (W[x] = w[x])
					}
					return W
				}, S.apply(this, arguments)
			}

			function L(W, B) {
				if (W == null) return {};
				var w = M(W, B),
					x, K;
				if (Object.getOwnPropertySymbols) {
					var ee = Object.getOwnPropertySymbols(W);
					for (K = 0; K < ee.length; K++) x = ee[K], !(B.indexOf(x) >= 0) && (!Object.prototype.propertyIsEnumerable.call(W, x) || (w[x] = W[x]))
				}
				return w
			}

			function M(W, B) {
				if (W == null) return {};
				var w = {},
					x = Object.keys(W),
					K, ee;
				for (ee = 0; ee < x.length; ee++) K = x[ee], !(B.indexOf(K) >= 0) && (w[K] = W[K]);
				return w
			}
			const A = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var D = W => {
					let {
						isStarred: B,
						size: w = 16
					} = W, x = L(W, ["isStarred", "size"]);
					const K = A[(0, _.Yc)() ? "dark" : "light"];
					return r().createElement(C.J, S({
						type: B ? "star" : "star-outline",
						color: B ? K.gold : K.gray,
						size: w
					}, x))
				},
				k = t("../node_modules/@cloudflare/elements/es/index.js");

			function U(W) {
				for (var B = 1; B < arguments.length; B++) {
					var w = arguments[B] != null ? Object(arguments[B]) : {},
						x = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(w).filter(function(K) {
						return Object.getOwnPropertyDescriptor(w, K).enumerable
					})), x.forEach(function(K) {
						X(W, K, w[K])
					})
				}
				return W
			}

			function X(W, B, w) {
				return B = se(B), B in W ? Object.defineProperty(W, B, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[B] = w, W
			}

			function se(W) {
				var B = pe(W, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function pe(W, B) {
				if (typeof W != "object" || W === null) return W;
				var w = W[Symbol.toPrimitive];
				if (w !== void 0) {
					var x = w.call(W, B || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(W)
			}
			const ue = {
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
			var Y = (0, e.forwardRef)(({
				featurePreview: W = !1,
				isStarred: B,
				onClickFn: w,
				isDisabled: x,
				testId: K,
				buttonText: ee,
				size: te = "large",
				variant: ne = "pill"
			}, R) => {
				const [V, H] = (0, e.useState)(!1), $ = ue[(0, _.Yc)() ? "dark" : "light"][B && !W ? "active" : "default"], oe = U({}, te === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, te === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, te === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), ce = {
					pill: "50vh",
					button: 4
				};
				return r().createElement(k.zx, {
					onMouseEnter: () => H(!0),
					onMouseLeave: () => H(!1),
					innerRef: R,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: oe.paddingRight,
					gap: 1,
					pl: oe.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: ce[ne],
					border: "1px solid",
					cursor: W || x ? "default" : "pointer",
					backgroundColor: V ? $.bgHover : $.bg,
					color: $.text,
					borderColor: $.border,
					onClick: w,
					opacity: x ? .5 : 1,
					disabled: x,
					fontSize: oe.fontSize,
					height: oe.height,
					"data-testid": K
				}, r().createElement(D, {
					isStarred: W ? !1 : B,
					size: oe.starIconSize
				}), ee)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$n: function() {
					return d
				},
				IU: function() {
					return m
				},
				Wq: function() {
					return S
				},
				dL: function() {
					return I
				},
				fO: function() {
					return C
				},
				gw: function() {
					return M
				},
				hv: function() {
					return a
				},
				iY: function() {
					return c
				},
				jq: function() {
					return A
				},
				o_: function() {
					return y
				},
				us: function() {
					return _
				},
				wB: function() {
					return i
				},
				zJ: function() {
					return O
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/utils/zoneLevelAccess.ts"),
				f = t("../react/pages/stream/selectors.ts"),
				s = t("../react/pages/home/domain-registration/selectors.ts"),
				g = t("../react/pages/images/selectors.ts"),
				v = t("../react/pages/r2/selectors.ts");
			const n = T => !!(0, l.b)(T),
				c = T => n(T) ? (0, e.hT)(T) : !0,
				i = (T, D, k, U = "read") => {
					const X = (0, o.nA)(T);
					return n(T) ? (0, e.WL)(T, (0, e.W9)(k, e.ZZ[U]), (0, e.j)(X == null ? void 0 : X.id)) : (0, u.Yj)(T)(D)[U]
				},
				d = (T, D, k, U = "read") => {
					const X = (0, o.nA)(T),
						se = e.zs.includes(k);
					return n(T) ? (0, e.WL)(T, se ? k : (0, e.my)(k, e.ZZ[U === "edit" ? "update" : U]), (0, e.j)(X == null ? void 0 : X.id)) : (0, u.Yj)(T)(D)[U === "update" ? "edit" : U]
				},
				a = T => !!(0, f._Q)(T),
				m = T => (0, g.pT)(T),
				I = T => (0, g.pT)(T) && (0, g.GH)(T),
				P = T => sourcingKitEnabledSelector(T),
				b = T => !!r2EnabledSelector(T),
				y = T => (0, v.Mv)(T),
				O = T => (0, r.$f)(T, "rulesets.magic_transit_allowed"),
				_ = T => (0, r.$f)(T, "flowtrackd.magic_custom_config_allowed"),
				C = T => (0, r.$f)(T, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				S = T => (0, u.Le)(T, "ddos_protection", "l4_rulesets"),
				L = T => hasAccountEntitlements(T, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				M = T => (0, s.HO)(T),
				A = T => !(0, r.yD)(T) && !!d(T, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(o),
				l = t("../../../../node_modules/prop-types/index.js"),
				f = t.n(l),
				s = t("webpack/sharing/consume/default/react-redux/react-redux"),
				g = t.n(s),
				v = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(v),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				d = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				a = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				m = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				I = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				P = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				b = t.n(P),
				y = t("../react/common/actions/membershipActions.ts"),
				O = t("../react/utils/url.ts"),
				_ = t("../react/app/components/Footer.tsx");

			function C(z) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var W = arguments[Y] != null ? Object(arguments[Y]) : {},
						B = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(W).filter(function(w) {
						return Object.getOwnPropertyDescriptor(W, w).enumerable
					})), B.forEach(function(w) {
						S(z, w, W[w])
					})
				}
				return z
			}

			function S(z, Y, W) {
				return Y = L(Y), Y in z ? Object.defineProperty(z, Y, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[Y] = W, z
			}

			function L(z) {
				var Y = M(z, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function M(z, Y) {
				if (typeof z != "object" || z === null) return z;
				var W = z[Symbol.toPrimitive];
				if (W !== void 0) {
					var B = W.call(z, Y || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(z)
			}
			const A = (0, c.createComponent)(({
					type: z
				}) => ({
					height: z !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				T = (0, c.createComponent)(({
					theme: z,
					margin: Y,
					size: W = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: z.colors.gray[3],
					height: Y ? "auto" : "100%",
					padding: Y ? 0 : z.space[W > 1 ? W - 2 : 0],
					margin: Y,
					justifyContent: "center",
					alignItems: "center"
				})),
				D = (0, c.createComponent)(() => ({
					textAlign: "left"
				})),
				k = (0, c.createComponent)(() => ({
					textAlign: "right"
				})),
				U = (0, c.createComponent)(({
					theme: z
				}) => ({
					fontSize: z.fontSizes[6]
				})),
				X = (0, c.createComponent)(({
					theme: z
				}) => ({
					fontSize: z.fontSizes[4]
				})),
				se = (0, c.createComponent)(({
					theme: z
				}) => ({
					fontSize: z.fontSizes[3]
				})),
				pe = (0, c.createComponent)(({
					theme: z
				}) => ({
					width: "100%",
					height: 125,
					marginTop: z.space[4],
					padding: z.space[2]
				}), "textarea");
			class ue extends r().Component {
				constructor(...Y) {
					super(...Y);
					S(this, "state", {
						value: "",
						submitted: !1
					}), S(this, "handleTextareaChange", W => {
						this.setState({
							value: W.target.value
						})
					}), S(this, "sendErrToSentry10", async () => {
						try {
							var W, B, w, x;
							const K = ((W = window) === null || W === void 0 || (B = W.bootstrap) === null || B === void 0 || (w = B.data) === null || w === void 0 || (x = w.user) === null || x === void 0 ? void 0 : x.id) || "Unknown",
								ee = this.props.eventId || d.eW(),
								te = {
									name: K,
									email: `${K}@userid.com`,
									comments: this.state.value,
									eventId: ee,
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
						} catch (K) {
							console.error(K)
						}
					}), S(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), S(this, "renderContent", W => r().createElement(v.I18n, null, B => r().createElement(A, {
						type: W
					}, r().createElement(T, null, r().createElement(D, null, r().createElement(U, null, B.t("error.internal_issues")), r().createElement(X, null, B.t("error.help_us")), r().createElement(pe, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: w => this.handleTextareaChange(w),
						disabled: this.state.submitted,
						placeholder: B.t("error.give_feedback")
					}), r().createElement(k, null, !this.state.submitted && r().createElement(i.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, B.t("common.submit")), this.state.submitted && r().createElement(se, null, B.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: Y,
						sentryTag: W,
						membershipsList: B
					} = this.props;
					console.error(`SomethingWrong: ${Y}`);
					let w = "";
					const x = (0, O.e1)();
					if (x) {
						var K;
						const te = await B({
								parameters: {
									status: "accepted"
								}
							}),
							ne = te == null || (K = te.find(R => R.id === x)) === null || K === void 0 ? void 0 : K.roles;
						ne && ne.length && (w = ne.join(", "))
					}
					const ee = `ErrorBoundary - ${Y}`;
					a.Tb(ee, {
						tags: {
							errorBoundary: W,
							normalizedPath: (0, O.Fl)(window.location.pathname),
							roles: w.length ? w : void 0
						}
					}), b().sendEvent("something wrong", {
						error: Y,
						roles: w.length ? w : void 0
					})
				}
				render() {
					const {
						type: Y
					} = this.props;
					return Y === "fullscreen" ? r().createElement("div", null, r().createElement(m.h4, null, r().createElement(o.Link, {
						to: "/"
					}, r().createElement(I.TR, null))), this.renderContent(Y), r().createElement(_.Z, null)) : this.renderContent(Y)
				}
			}
			ue.propTypes = {
				type: f().oneOf(["fullscreen", "page"]),
				error: f().oneOfType([f().string, f().object]),
				eventId: f().string,
				sentryTag: f().string,
				membershipsList: f().func
			}, E.Z = (0, s.connect)(() => ({}), {
				membershipsList: y.YT
			})(ue)
		},
		"../react/app/providers/storeContainer.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				bh: function() {
					return k
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				r = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				o = t.n(r),
				u = t("../../../../node_modules/redux-thunk/es/index.js"),
				l = t("../../../../node_modules/redux-persist/es/index.js"),
				f = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				s = t("../react/app/rootReducer.js"),
				g = t("../react/app/redux/normalizer.js"),
				v = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				c = t("../react/app/reducerRegistry.js"),
				i = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				d = t("../react/common/sagas/index.js"),
				a = t("../react/app/redux/processActionMiddleware.js"),
				m = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				I = t("../../../../node_modules/is-promise/index.js"),
				P = t.n(I);

			function b(U) {
				for (var X = 1; X < arguments.length; X++) {
					var se = arguments[X] != null ? Object(arguments[X]) : {},
						pe = Object.keys(se);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(se).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(se, ue).enumerable
					})), pe.forEach(function(ue) {
						y(U, ue, se[ue])
					})
				}
				return U
			}

			function y(U, X, se) {
				return X = O(X), X in U ? Object.defineProperty(U, X, {
					value: se,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[X] = se, U
			}

			function O(U) {
				var X = _(U, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function _(U, X) {
				if (typeof U != "object" || U === null) return U;
				var se = U[Symbol.toPrimitive];
				if (se !== void 0) {
					var pe = se.call(U, X || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)(U)
			}
			const C = {
					key: "cf-redux-store",
					storage: f.Z,
					whitelist: ["accountAccess", "invite"]
				},
				S = (0, i.ZP)(),
				M = [({
					dispatch: U
				}) => X => se => P()(se) ? se.then(pe => U(pe)) : X(se), S, u.Z, a.Z, g.qR],
				A = U => (0, l.Wq)(C, b({}, s.Z, U));

			function T() {
				const U = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					se = e.compose((0, e.applyMiddleware)(...M), v.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					pe = {},
					ue = (0, e.createStore)(A(c.Z.getReducers()), pe, se);
				S.run(d.Z), (0, l.p5)(ue);
				const Y = (t.g.bootstrap || {}).data || {};
				return ue.dispatch((0, m.mW)("user", Y.user)), ue
			}
			let D;
			c.Z.setChangeListener(U => {
				var X;
				D && ((X = D) === null || X === void 0 ? void 0 : X.replaceReducer) && (D.replaceReducer(A(U)), (0, l.p5)(D))
			});

			function k() {
				return D || (D = T()), D
			}
		},
		"../react/app/redux/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				TZ: function() {
					return o
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
			const o = () => (0, e.useStore)(),
				u = () => o().getState(),
				l = () => (0, e.useDispatch)(),
				f = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				$J: function() {
					return i
				},
				Oy: function() {
					return c
				},
				SC: function() {
					return v
				},
				ZP: function() {
					return d
				},
				dJ: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(r);

			function u(a) {
				for (var m = 1; m < arguments.length; m++) {
					var I = arguments[m] != null ? Object(arguments[m]) : {},
						P = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(I).filter(function(b) {
						return Object.getOwnPropertyDescriptor(I, b).enumerable
					})), P.forEach(function(b) {
						l(a, b, I[b])
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
				var m = s(a, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function s(a, m) {
				if (typeof a != "object" || a === null) return a;
				var I = a[Symbol.toPrimitive];
				if (I !== void 0) {
					var P = I.call(a, m || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(a)
			}
			const g = u({}, r),
				v = (a, m, I, P = {}) => {
					const b = a === "delete" ? "del" : a.toLowerCase();
					return I && b !== "del" && (P.body = I), g[b](m, P)
				},
				n = (a, m) => (a.meta.params = m, a),
				c = (a, m, I, P, {
					body: b = {}
				}) => {
					const {
						result: y,
						messages: O,
						result_info: _
					} = b, C = Object.values(m);
					if (a.meta.method === "delete") {
						const S = C[C.length - 1];
						a.meta.id = typeof S == "object" ? S.id : S
					}
					return a.payload = y, O && (a.meta.messages = O), C.length && (a.meta.params = m), _ && (a.meta.paginationData = {
						info: _,
						actionParameters: C,
						options: I[0],
						insertionOffset: 0
					}), a
				},
				i = (a, m, I, P, b) => (a.payload = b && b.body && b.body.errors, a.meta.messages = b && b.body && b.body.messages, a.meta.params = m, a.apiError = b, a);

			function d(a, m, I, P) {
				const b = (0, e.RM)(a, m, I, P).apiFetch(v).on("start", n).on("success", c).on("error", i),
					y = b.mock;
				return b.mock = O => (y((..._) => {
					const C = O(..._);
					return C && typeof C == "object" && "result" in C ? C : {
						result: C
					}
				}), b), b
			}
		},
		"../react/app/redux/normalizer.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				P1: function() {
					return v
				},
				jQ: function() {
					return s
				},
				qR: function() {
					return n
				},
				uc: function() {
					return g
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				r = t("../react/pages/workers/entityTypes.ts"),
				o = t("../react/pages/email/types.ts"),
				u = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				f = t.n(l);
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
				g = c => c.entities,
				v = (...c) => (0, u.P1)(s, g, ...c),
				n = (0, u.QB)(s)
		},
		"../react/app/redux/utils.ts": function(F, E, t) {
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
			const r = u => (l, f, s) => (0, e.SC)(l, f, s, {
					hideErrorAlert: !0
				}).catch(u),
				o = u => l => {
					if (l.status === u) return l;
					throw l
				}
		},
		"../react/common/actionTypes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Cm: function() {
					return f
				},
				Cz: function() {
					return r
				},
				HI: function() {
					return s
				},
				Li: function() {
					return v
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return o
				},
				Yc: function() {
					return c
				},
				gM: function() {
					return u
				},
				lV: function() {
					return l
				},
				s1: function() {
					return g
				}
			});
			const e = "NOTIFICATION_OPEN",
				r = "NOTIFICATION_CLOSE",
				o = "MODAL_OPEN",
				u = "MODAL_CLOSE",
				l = "TOGGLE_ON",
				f = "TOGGLE_OFF",
				s = "SET_ACTIVE",
				g = "CLEAR_ACTIVE",
				v = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let c = function(i) {
				return i.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", i.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", i.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", i.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", i.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", i.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", i.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", i.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", i.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", i
			}({})
		},
		"../react/common/actions/activeActions.ts": function(F, E, t) {
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
			const r = (u, l) => ({
					type: e.HI,
					activeKey: u,
					activeValue: l
				}),
				o = u => ({
					type: e.s1,
					activeKey: u
				})
		},
		"../react/common/actions/membershipActions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AX: function() {
					return i
				},
				YT: function() {
					return v
				},
				ct: function() {
					return s
				},
				d6: function() {
					return n
				},
				kt: function() {
					return c
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/common/constants/index.ts");

			function o(d) {
				for (var a = 1; a < arguments.length; a++) {
					var m = arguments[a] != null ? Object(arguments[a]) : {},
						I = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(m).filter(function(P) {
						return Object.getOwnPropertyDescriptor(m, P).enumerable
					})), I.forEach(function(P) {
						u(d, P, m[P])
					})
				}
				return d
			}

			function u(d, a, m) {
				return a = l(a), a in d ? Object.defineProperty(d, a, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[a] = m, d
			}

			function l(d) {
				var a = f(d, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(d, a) {
				if (typeof d != "object" || d === null) return d;
				var m = d[Symbol.toPrimitive];
				if (m !== void 0) {
					var I = m.call(d, a || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(d)
			}
			const s = d => {
					const a = d.payload.map(m => o({}, m, {
						membershipId: m.id,
						id: m.account.id
					}));
					return o({}, d, {
						payload: a
					})
				},
				g = d => {
					const a = s(d);
					return Array.isArray(a.payload) ? o({}, d, {
						payload: a.payload[0]
					}) : o({}, d, {
						payload: null
					})
				},
				v = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", s),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				c = (...d) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: d
				}),
				i = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", g)
		},
		"../react/common/actions/modalActions.ts": function(F, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				closeModal: function() {
					return u
				},
				openModal: function() {
					return o
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = {
				replace: !0
			};

			function o(l, f, s = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: l,
						props: f
					},
					options: s
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
					return v
				},
				info: function() {
					return s
				},
				success: function() {
					return f
				},
				warn: function() {
					return g
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
			let u = 0;

			function l(n, c, i = {}) {
				return i = i || {},
					function(d) {
						let a = u++,
							m = {
								id: a,
								type: n,
								message: c,
								delay: i.delay,
								persist: i.persist === void 0 ? !1 : i.persist,
								closable: i.closable === void 0 ? !0 : i.closable,
								onClose() {
									d(o(a)), i.onClose && i.onClose.apply(null, arguments)
								}
							};
						d(r(m))
					}
			}

			function f(n, c) {
				return l("success", n, c)
			}

			function s(n, c) {
				return l("info", n, c)
			}

			function g(n, c) {
				return l("warning", n, c)
			}

			function v(n, c) {
				return l("error", n, c)
			}
		},
		"../react/common/actions/userActions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				BT: function() {
					return s
				},
				Ut: function() {
					return P
				},
				V_: function() {
					return b
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
					return y
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/app/redux/utils.ts");

			function o(_) {
				for (var C = 1; C < arguments.length; C++) {
					var S = arguments[C] != null ? Object(arguments[C]) : {},
						L = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(S).filter(function(M) {
						return Object.getOwnPropertyDescriptor(S, M).enumerable
					})), L.forEach(function(M) {
						u(_, M, S[M])
					})
				}
				return _
			}

			function u(_, C, S) {
				return C = l(C), C in _ ? Object.defineProperty(_, C, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[C] = S, _
			}

			function l(_) {
				var C = f(_, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function f(_, C) {
				if (typeof _ != "object" || _ === null) return _;
				var S = _[Symbol.toPrimitive];
				if (S !== void 0) {
					var L = S.call(_, C || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(_)
			}
			const s = (0, e.C)("user").get`/user`,
				g = (0, e.C)("user").patch`/user`,
				v = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				c = (0, e.C)("user").post`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/two_factor_authentication`,
				d = (0, e.C)("user").delete`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/email`;

			function m(..._) {
				return a(..._)
			}
			const I = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				P = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(_ => o({}, _, {
					body: o({}, _.body, {
						result: {}
					})
				}))),
				b = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				y = (0, e.C)("userDetails").get`/user/details`,
				O = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(F, E, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				r = t("../react/utils/zoneLevelAccess.ts");
			const o = ({
				legacyPermission: u,
				canAccess: l,
				children: f,
				render: s
			}) => {
				const g = !!(0, r.P)();
				let v;
				typeof l == "boolean" && l !== void 0 && g ? v = {
					read: l,
					list: l,
					create: l,
					update: l,
					delete: l,
					sign: l
				} : v = (0, e.Z)(u);
				const n = s || f;
				return n ? n(v) : null
			};
			E.Z = o
		},
		"../react/common/components/AccessCheck/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
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
					return c
				},
				jX: function() {
					return s
				},
				my: function() {
					return g
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
				u = "com.cloudflare.api.account.zone.",
				l = ["com.cloudflare.api.app.manage"];
			let f = function(i) {
				return i.read = "read", i.list = "list", i.create = "create", i.update = "update", i.delete = "delete", i.sign = "sign", i.refresh = "refresh", i
			}({});
			const s = (i, d) => `${r}${i?i+".":""}${d}`,
				g = (i, d) => `${u}${i?i+".":""}${d}`,
				v = (i, d) => `${o}${i}.${d}`,
				n = (i = "") => `${r}${i}`,
				c = (i = "") => `${u}${i}`
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
					return o.WL
				},
				ZP: function() {
					return r.Z
				},
				ZZ: function() {
					return u.ZZ
				},
				hT: function() {
					return o.hT
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
				o = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");

			function f(s) {
				const {
					read: g,
					edit: v
				} = (0, o.p4)(u.Yj)(s);
				let n = v;
				if (s != "zone_versioning") {
					const i = (0, o.p4)(l.G);
					(i == null ? void 0 : i.isLocked) && (n = !1)
				}
				return (0, e.useMemo)(() => ({
					read: g,
					list: g,
					create: n,
					update: n,
					delete: n,
					sign: n
				}), [g, n])
			}
			E.Z = f
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				WL: function() {
					return i
				},
				hT: function() {
					return m
				},
				kd: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/pages/home/members/utils.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");
			const f = {
					allow: "allow",
					deny: "deny"
				},
				s = 0,
				g = 1,
				v = 2,
				n = 3;

			function c(C, S, L, M) {
				let A = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					T;
				for (T in A) A[T] = i(C, `${S}.${T}`, L, M);
				return A
			}

			function i(C, S, L, M) {
				var A;
				if (d(S) && !a(S)) {
					const X = (0, l.G)(C);
					if (X == null ? void 0 : X.isLocked) return !1
				}
				const T = (A = (0, r.D0)(C)) === null || A === void 0 ? void 0 : A.id,
					D = T ? [`com.cloudflare.api.account.${T}`] : void 0,
					k = (0, o.vq)(T);
				return !!I(C, k, S, L, M || D)
			}

			function d(C) {
				return ![u.ZZ.read, u.ZZ.list].some(S => C.endsWith(S))
			}

			function a(C) {
				return C.includes("zone.versioning")
			}

			function m(C) {
				const S = (0, r.Ko)(C);
				let L = !1;
				return S == null || S.forEach(M => {
					M.access === f.allow && M.permission_groups.forEach(A => {
						var T;
						(A == null || (T = A.meta) === null || T === void 0 ? void 0 : T.scopes) === u.u1 && (L = !0)
					})
				}), L
			}

			function I(C, S, L, M, A) {
				const T = (0, r.Ko)(C),
					D = {};
				T == null || T.forEach(se => {
					var pe;
					const ue = se.access;
					let z = s;
					if (L && se.permission_groups.forEach(Y => {
							var W, B;
							S == null || (W = S.find(w => w.id === Y.id)) === null || W === void 0 || (B = W.permissions) === null || B === void 0 || B.forEach(w => {
								z = Math.max(z, P(w, L))
							})
						}), z !== s && !!M) {
						let Y = s;
						se.resource_groups.forEach(W => {
							Y = Math.max(Y, y(W.scope, M, A))
						}), z = Y === s ? Y : z + Y
					}(D == null || (pe = D[ue]) === null || pe === void 0 ? void 0 : pe[z]) || (0, e.Z)(D, [ue, z], []), D[ue][z].push(se)
				});
				const k = D[f.allow] && Object.keys(D[f.allow]).map(se => parseInt(se)),
					U = D[f.deny] && Object.keys(D[f.deny]).map(se => parseInt(se)),
					X = Math.max.apply(Math, k);
				return X === s || Math.max.apply(Math, U) >= X ? null : D[f.allow][X]
			}

			function P(C, S) {
				if (C.key === S || b(C.key, S)) return n;
				for (const L of (C == null ? void 0 : C.implies) || []) {
					let M = P(L, S);
					if (M > s) return M
				}
				return s
			}

			function b(C, S) {
				const L = S == null ? void 0 : S.lastIndexOf(".");
				return L === -1 ? !1 : (S == null ? void 0 : S.substring(0, L)) + ".*" === C
			}

			function y(C, S, L) {
				var M;
				let A = s;
				if (C == null || (M = C.objects) === null || M === void 0 || M.forEach(T => {
						A = Math.max(A, _(T, S))
					}), A === s) return A;
				if (C.key !== "*") switch (!0) {
					case O(C.key, L) > s:
					case (!(L == null ? void 0 : L.length) && A === n):
						break;
					case (A === g && O(C.key, [S]) > s):
						A = O(C.key, [S]);
						break;
					default:
						return s
				}
				for (const T of C.subset_of || [])
					if (O(T.key, L) === s) return s;
				return A
			}

			function O(C, S = []) {
				for (const L of S || []) {
					if (C === L) return n;
					if (b(C, L)) return v
				}
				return s
			}

			function _(C, S) {
				return C.key === S ? n : C.key === "*" ? g : b(C.key, S) ? v : s
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
				r = t.n(e),
				o = t("../react/common/selectors/accountSelectors.ts");
			const u = f => {
					if (typeof f != "string") throw new Error("invalid Param Type provided");
					const s = f.slice(1).split(":");
					if (s.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: s[0],
						value: s[1]
					}
				},
				l = (f, s) => {
					const {
						resourceId: g,
						accountId: v,
						legacyPermission: n
					} = s;
					let {
						read: c,
						edit: i
					} = s;
					const d = {};
					n && (i = `#${n}:edit`, c = `#${n}:read`);
					const a = g || v;
					if (c) {
						const m = Array.isArray(c) ? c : [c];
						d.isReadable = m.some(I => {
							const P = u(I);
							return (0, o.DT)(f, a, b => !!(b[P.key] && b[P.key][P.value]))
						})
					}
					if (i) {
						const m = Array.isArray(i) ? i : [i];
						d.isEditable = m.some(I => {
							const P = u(I);
							return (0, o.DT)(f, a, b => !!(b[P.key] && b[P.key][P.value]))
						})
					}
					return d
				};
			E.Z = (0, e.connect)(l)
		},
		"../react/common/components/AccessControl/index.js": function(F, E, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				r = t.n(e),
				o = t("../react/app/HoCs/withEntities.tsx"),
				u = t("../react/common/components/AccessControl/SAAConnect.js");

			function l(c) {
				for (var i = 1; i < arguments.length; i++) {
					var d = arguments[i] != null ? Object(arguments[i]) : {},
						a = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(d).filter(function(m) {
						return Object.getOwnPropertyDescriptor(d, m).enumerable
					})), a.forEach(function(m) {
						f(c, m, d[m])
					})
				}
				return c
			}

			function f(c, i, d) {
				return i = s(i), i in c ? Object.defineProperty(c, i, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = d, c
			}

			function s(c) {
				var i = g(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function g(c, i) {
				if (typeof c != "object" || c === null) return c;
				var d = c[Symbol.toPrimitive];
				if (d !== void 0) {
					var a = d.call(c, i || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}

			function v(c) {
				const d = ["isReadable", "isEditable"].reduce((a, m) => c.hasOwnProperty(m) ? l({}, a, {
					[m]: c[m]
				}) : a, {});
				return c.children(d)
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
			const n = (0, o.Z)((0, u.Z)(v));
			n.displayName = "AccessControl", E.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				PP: function() {
					return c
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
				u = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const f = () => g.test(window.location.pathname) || o.E.has(u.Qq),
				s = () => o.E.get(u.Qq),
				g = /^\/login\/apple(\/)?/,
				n = [g, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				c = () => {
					let d = !1;
					n.forEach(m => {
						if (m.test(window.location.pathname)) {
							d = !0;
							return
						}
					});
					const a = f() && d;
					return a && (0, l.C8)(l.LF.OFF), a
				},
				i = d => {
					d && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let a = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					d && (a = a + `&jwt=${d}`), window.location.href = a
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				oG: function() {
					return a
				},
				sN: function() {
					return g.sN
				},
				v2: function() {
					return g.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../node_modules/@cloudflare/component-button/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				f = t.n(l),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = t("../react/common/components/Dropdown/index.tsx"),
				v = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(m) {
					for (var I = 1; I < arguments.length; I++) {
						var P = arguments[I];
						for (var b in P) Object.prototype.hasOwnProperty.call(P, b) && (m[b] = P[b])
					}
					return m
				}, n.apply(this, arguments)
			}

			function c(m, I) {
				if (m == null) return {};
				var P = i(m, I),
					b, y;
				if (Object.getOwnPropertySymbols) {
					var O = Object.getOwnPropertySymbols(m);
					for (y = 0; y < O.length; y++) b = O[y], !(I.indexOf(b) >= 0) && (!Object.prototype.propertyIsEnumerable.call(m, b) || (P[b] = m[b]))
				}
				return P
			}

			function i(m, I) {
				if (m == null) return {};
				var P = {},
					b = Object.keys(m),
					y, O;
				for (O = 0; O < b.length; O++) y = b[O], !(I.indexOf(y) >= 0) && (P[y] = m[y]);
				return P
			}
			const d = (0, s.createStyledComponent)(({
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
					disabled: b,
					disabledDropdown: y = b
				} = m, O = c(m, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: _
				} = (0, l.useI18n)();
				return r().createElement(d, n({}, P, {
					role: "group"
				}), r().createElement(o.zx, n({}, O, {
					disabled: b
				})), r().createElement(g.Lt, {
					trigger: r().createElement(o.zx, {
						type: O.type,
						"aria-haspopup": "menu",
						disabled: y
					}, r().createElement(u.J, {
						type: "caret-down",
						label: _("common.more"),
						size: 12
					})),
					menu: I
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				v: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = t("../react/common/hooks/useIntersectionObserver.ts");

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(g) {
					for (var v = 1; v < arguments.length; v++) {
						var n = arguments[v];
						for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (g[c] = n[c])
					}
					return g
				}, f.apply(this, arguments)
			}

			function s(g) {
				const v = (0, e.useRef)(null),
					[n, c] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const d = v.current;
					if (d) {
						const {
							bottom: a
						} = d.getBoundingClientRect();
						a > window.innerHeight && c(!0)
					}
				}, []);
				const i = (0, l.S)(d => {
					for (const a of d) a.intersectionRatio < 1 && c(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const d = v.current;
					if (d && i) return i.observe(d), () => {
						i.unobserve(d)
					}
				}, [i]), r().createElement(o.ZC, f({
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
				}, g))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				s: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(u);

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(P) {
					for (var b = 1; b < arguments.length; b++) {
						var y = arguments[b];
						for (var O in y) Object.prototype.hasOwnProperty.call(y, O) && (P[O] = y[O])
					}
					return P
				}, f.apply(this, arguments)
			}

			function s(P, b) {
				if (P == null) return {};
				var y = g(P, b),
					O, _;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(P);
					for (_ = 0; _ < C.length; _++) O = C[_], !(b.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(P, O) || (y[O] = P[O]))
				}
				return y
			}

			function g(P, b) {
				if (P == null) return {};
				var y = {},
					O = Object.keys(P),
					_, C;
				for (C = 0; C < O.length; C++) _ = O[C], !(b.indexOf(_) >= 0) && (y[_] = P[_]);
				return y
			}

			function v(P) {
				for (var b = 1; b < arguments.length; b++) {
					var y = arguments[b] != null ? Object(arguments[b]) : {},
						O = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(y).filter(function(_) {
						return Object.getOwnPropertyDescriptor(y, _).enumerable
					})), O.forEach(function(_) {
						n(P, _, y[_])
					})
				}
				return P
			}

			function n(P, b, y) {
				return b = c(b), b in P ? Object.defineProperty(P, b, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[b] = y, P
			}

			function c(P) {
				var b = i(P, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function i(P, b) {
				if (typeof P != "object" || P === null) return P;
				var y = P[Symbol.toPrimitive];
				if (y !== void 0) {
					var O = y.call(P, b || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(P)
			}
			const d = ({
					theme: P
				}) => {
					const b = {
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
						'&:hover:not(:disabled):not([aria-disabled="true"])': b,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': v({}, b, {
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
				a = (0, o.createComponent)(d, "a"),
				m = (0, o.createComponent)(d, "button");

			function I(P) {
				let {
					disabled: b = !1
				} = P, y = s(P, ["disabled"]);
				const O = (0, u.useHistory)(),
					_ = {
						role: "menuitem"
					};
				if ("href" in y && typeof y.href == "string") return r().createElement(a, f({
					"aria-disabled": b
				}, _, y, {
					href: b ? void 0 : y.href,
					onClick: S => {
						var L;
						if (b) return S.stopPropagation();
						S.preventDefault(), (L = y.onClick) === null || L === void 0 || L.call(y, S), O.push(y.href)
					}
				}));
				var C;
				return r().createElement(m, f({
					type: (C = y.type) !== null && C !== void 0 ? C : "button"
				}, _, y, {
					disabled: b
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/prop-types/index.js"),
				u = t.n(o),
				l = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const f = ({
				children: s
			}) => r().createElement(l.xu, {
				height: 411
			}, s);
			f.propTypes = {
				children: u().node
			}, E.Z = f
		},
		"../react/common/components/ModalManager.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return a
				},
				dd: function() {
					return i
				},
				vR: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/react-redux/react-redux");
			const u = m => m.application.modals;
			var l = t("../react/common/actions/modalActions.ts"),
				f = t("../../../../node_modules/swr/core/dist/index.mjs"),
				s = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(m) {
					for (var I = 1; I < arguments.length; I++) {
						var P = arguments[I];
						for (var b in P) Object.prototype.hasOwnProperty.call(P, b) && (m[b] = P[b])
					}
					return m
				}, g.apply(this, arguments)
			}
			const v = r().createContext(null);
			class n extends r().Component {
				render() {
					const {
						modals: I,
						closeModal: P
					} = this.props;
					return r().createElement(r().Fragment, null, I.map(({
						ModalComponent: b,
						props: y = {},
						id: O
					}) => {
						const _ = () => {
							typeof y.onClose == "function" && y.onClose(), P(b)
						};
						return r().createElement(v.Provider, {
							key: O,
							value: {
								closeModal: _
							}
						}, r().createElement(f.J$, {
							value: s.ZP
						}, r().createElement(b, g({}, y, {
							isOpen: !0,
							closeModal: _
						}))))
					}))
				}
			}

			function c() {
				const m = r().useContext(v);
				if (!m) throw new Error("useModalContext must be used within a ModalContext");
				return m
			}

			function i() {
				const m = (0, o.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...I) {
						return m(l.openModal(...I))
					}, [m]),
					closeModal: (0, e.useCallback)(function(...I) {
						return m(l.closeModal(...I))
					}, [m])
				}
			}
			var a = (0, o.connect)(m => ({
				modals: u(m)
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
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function u(l) {
				return r().createElement(o.T3, l)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return g
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
					return o
				},
				w_: function() {
					return u
				},
				zl: function() {
					return s
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				r = "time-window",
				o = "date-from",
				u = "date-to",
				l = "from",
				f = "to",
				s = "all",
				g = {
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
			let v = function(c) {
					return c.ADD_FILTER = "Add filter", c.EDIT_FILTER = "Edit filter", c.REMOVE_FILTER = "Remove filter", c.CHANGE_TIME = "Change time window", c.FEED_PAGE_FORWARD = "Activity feed next page", c.FEED_PAGE_BACKWARD = "Activity feed previous page", c.FEED_EXPAND_EVENT = "Activity feed expand event", c.FEED_CLOSE_EVENT = "Activity feed close event", c.FEED_EXPAND_MATCHES = "Activity feed expand matches", c.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", c.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", c.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", c.DOWNLOAD_FEED = "Activity feed download", c.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', c.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', c.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', c.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', c.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', c.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", c.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", c
				}({}),
				n = function(c) {
					return c.TIMESERIES = "Timeseries Chart", c.DISTRIBUTION = "Source Distribution Chart", c.TOP_N = "Top N", c.FILTER_BAR = "Filter Bar", c.SCORES_DISTRIBUTIONS = "Scores Distributions", c.INSIGHTS = "Insights", c.RL_HISTOGRAM = "Rate Limit Histogram", c
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Cf: function() {
					return v
				},
				hJ: function() {
					return g
				},
				ys: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(a) {
						return Object.getOwnPropertyDescriptor(i, a).enumerable
					})), d.forEach(function(a) {
						u(n, a, i[a])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(n, c || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const g = ({
					name: n,
					additionalData: c = {}
				}) => {
					r().sendEvent(n, o({}, c || {}))
				},
				v = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(F, E, t) {
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
		"../react/common/constants/analytics/botScoreSrc.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				EG: function() {
					return o
				},
				Me: function() {
					return f
				},
				Vv: function() {
					return l
				},
				sk: function() {
					return u
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let o = function(s) {
				return s.NOT_COMPUTED = "not_computed", s.MACHINE_LEARNING = "machine_learning", s.HEURISTICS = "heuristics", s.BEHAVIORAL_ANALYSIS = "behavioral_analysis", s.JS_FINGERPRINTING = "js_fingerprinting", s.VERIFIED_BOT = "verified_bot", s.CLOUDFLARE_SERVICE = "cloudflare_service", s
			}({});
			const u = {
					[o.NOT_COMPUTED]: "Not Computed",
					[o.MACHINE_LEARNING]: "Machine Learning",
					[o.HEURISTICS]: "Heuristics",
					[o.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[o.JS_FINGERPRINTING]: "JS Fingerprinting",
					[o.VERIFIED_BOT]: "Verified Bot",
					[o.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				l = s => Array.isArray(s) ? s.map(g => {
					var v;
					return (v = u[g]) !== null && v !== void 0 ? v : g
				}) : u[s],
				f = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					options: [o.NOT_COMPUTED, o.MACHINE_LEARNING, o.HEURISTICS, o.BEHAVIORAL_ANALYSIS, o.JS_FINGERPRINTING, o.VERIFIED_BOT, o.CLOUDFLARE_SERVICE],
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
					return o
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
					return d
				},
				hQ: function() {
					return s
				},
				SP: function() {
					return g
				}
			});
			let e = function(a) {
				return a.page_rules = "page_rules", a.automatic_platform_optimization = "automatic_platform_optimization", a
			}({});
			const r = "page_rules",
				o = "automatic_platform_optimization",
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
				s = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e4,
					ubb_frequency: 1e4,
					ubb_price: .05
				},
				g = {
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
				c = t("../react/common/constants/billing/tracking.ts"),
				i = t("../react/common/constants/billing/workers.ts");
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
					return s
				},
				p6: function() {
					return g
				},
				q0: function() {
					return u
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
			const u = "healthy",
				l = "degraded",
				f = "critical",
				s = "unknown",
				g = "not-monitored",
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
				c = {
					f: v.FREE,
					p: v.PRO,
					b: v.BIZ
				},
				i = "marketing-pt",
				d = () => {
					const b = o.Z.get(i);
					if (!!b) return c[b]
				},
				a = ["gov"],
				m = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				I = "banner-notification-interactions",
				P = null
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
		"../react/common/constants/roles.ts": function(F, E, t) {
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
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(F, E, t) {
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
				o = (l, f, s = !1) => {
					var g;
					return `${f} ${(g=r[l])!==null&&g!==void 0?g:l} ${s?"ruleset":"rule"}${f===e.GET?"s":""}`
				},
				u = () => {
					var l;
					return (l = Object.keys(r).reduce((f, s) => {
						const g = Object.values(e).reduce((v, n) => (v.push(o(s, n)), v.push(o(s, n, !0)), v), []);
						return f.concat(g)
					}, [])) === null || l === void 0 ? void 0 : l.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return l
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				o = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(o);

			function l() {
				var f;
				const {
					accountId: s
				} = (0, o.useParams)(), g = (0, e.p4)(r.D0);
				if (s === void 0 && !g) throw new Error("Account ID not found in URL params");
				return (f = s) !== null && f !== void 0 ? f : g == null ? void 0 : g.id
			}
		},
		"../react/common/hooks/useActiveState.ts": function(F, E, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(r),
				u = t("../react/common/selectors/commonSelectors.ts");
			const l = f => {
				const s = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, u.cZ)(f)), n => {
					s((0, e.I)(f, n))
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
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(l, {
				key: f,
				cache: s = o.E,
				ttl: g
			} = {}) {
				var v;
				const n = f !== void 0 && s.get(f),
					[c, i] = (0, e.useState)((v = n) !== null && v !== void 0 ? v : l);
				return [c, a => {
					i(m => (a instanceof Function && (a = a(m)), f !== void 0 && s.set(f, a, g), a))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(F, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(o) {
				return (0, e.qf)(o)
			}
			E.Z = r
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function o(u, {
				root: l,
				rootMargin: f,
				threshold: s
			} = {}) {
				const g = (0, e.useRef)(null);

				function v() {
					return g.current === null && (g.current = new IntersectionObserver(u, {
						root: l,
						rootMargin: f,
						threshold: s
					})), g.current
				}
				return (0, e.useEffect)(() => (g.current = new IntersectionObserver(u, {
					root: l,
					rootMargin: f,
					threshold: s
				}), () => {
					var n;
					(n = g.current) === null || n === void 0 || n.disconnect()
				}), [u, l, f, s]), v()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function o(u) {
				const l = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					l.current = u
				}, [u]), l.current
			}
			E.Z = o
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(F, E, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function o(u) {
				return (0, e.p4)(l => (0, r.rV)(l, u))
			}
			E.Z = o
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
					return f
				}
			});

			function e(s, g, v) {
				return g = r(g), g in s ? Object.defineProperty(s, g, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[g] = v, s
			}

			function r(s) {
				var g = o(s, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function o(s, g) {
				if (typeof s != "object" || s === null) return s;
				var v = s[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(s, g || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(s)
			}
			class u extends Error {
				constructor(g, v) {
					super(v);
					e(this, "eventName", void 0), this.eventName = g, this.name = "SparrowValidationError"
				}
			}
			class l extends u {
				constructor(g) {
					super(g, `Event not allowed: "${g}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class f extends u {
				constructor(g, v) {
					super(g, `Found invalid properties on event: "${g}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = v
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AC: function() {
					return Xe
				},
				Au: function() {
					return de
				},
				B: function() {
					return Se
				},
				B3: function() {
					return Z
				},
				BG: function() {
					return L
				},
				Bp: function() {
					return $e
				},
				CV: function() {
					return bt
				},
				D0: function() {
					return O
				},
				DT: function() {
					return R
				},
				EL: function() {
					return K
				},
				EU: function() {
					return H
				},
				GE: function() {
					return yt
				},
				Ko: function() {
					return ne
				},
				Kx: function() {
					return T
				},
				Le: function() {
					return D
				},
				O4: function() {
					return ve
				},
				Ou: function() {
					return W
				},
				Py: function() {
					return Je
				},
				QI: function() {
					return tt
				},
				Qf: function() {
					return C
				},
				RO: function() {
					return je
				},
				T3: function() {
					return pt
				},
				T8: function() {
					return S
				},
				UX: function() {
					return x
				},
				VP: function() {
					return ct
				},
				Xo: function() {
					return qe
				},
				Xu: function() {
					return ue
				},
				Yi: function() {
					return ht
				},
				Yj: function() {
					return te
				},
				Zu: function() {
					return ee
				},
				bC: function() {
					return $
				},
				f8: function() {
					return X
				},
				hI: function() {
					return lt
				},
				hN: function() {
					return A
				},
				hX: function() {
					return he
				},
				iq: function() {
					return Ve
				},
				nE: function() {
					return M
				},
				oD: function() {
					return w
				},
				oI: function() {
					return U
				},
				oJ: function() {
					return Q
				},
				tM: function() {
					return B
				},
				uF: function() {
					return z
				},
				ut: function() {
					return st
				},
				vU: function() {
					return mt
				},
				wQ: function() {
					return ge
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/lodash/get.js"),
				o = t.n(r),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = t.n(u),
				f = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../../../../node_modules/moment/moment.js"),
				g = t.n(s),
				v = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				c = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				d = t("../react/app/components/DeepLink/selectors.ts"),
				a = t("../react/common/constants/roles.ts"),
				m = t("../react/common/utils/hasRole.ts");

			function I(G) {
				for (var le = 1; le < arguments.length; le++) {
					var Ee = arguments[le] != null ? Object(arguments[le]) : {},
						Te = Object.keys(Ee);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(Ee).filter(function(De) {
						return Object.getOwnPropertyDescriptor(Ee, De).enumerable
					})), Te.forEach(function(De) {
						P(G, De, Ee[De])
					})
				}
				return G
			}

			function P(G, le, Ee) {
				return le = b(le), le in G ? Object.defineProperty(G, le, {
					value: Ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[le] = Ee, G
			}

			function b(G) {
				var le = y(G, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function y(G, le) {
				if (typeof G != "object" || G === null) return G;
				var Ee = G[Symbol.toPrimitive];
				if (Ee !== void 0) {
					var Te = Ee.call(G, le || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(G)
			}
			const O = G => {
					const le = z(G);
					return le == null ? void 0 : le.account
				},
				_ = G => {
					const le = (0, c.PR)(G);
					if (le) {
						const Ee = le.id;
						return G.accountAccess[Ee] || {}
					}
					return {}
				},
				C = G => G.accountsDetailed,
				S = (0, n.P1)("accountsDetailed", C),
				L = G => G.memberships,
				M = (0, f.P1)((0, n.P1)("memberships", L), d.U, (G, le) => !!le && !!G ? G.filter(Ee => le.includes(Ee.id)) : G),
				A = G => G.accountFlags && G.accountFlags.data,
				T = G => G.accountFlags,
				D = (G, le, Ee) => {
					const Te = A(G);
					return !Te || !Te[le] ? null : Te[le][Ee]
				},
				k = G => G.accountFlags.isRequesting,
				U = (G, ...le) => o()(G, ["accountFlagsChanges", "data", ...le]),
				X = G => G.accountFlagsChanges.isRequesting,
				se = (0, f.P1)(A, T, (G, le) => ({
					data: G,
					meta: le
				})),
				pe = (G, le, Ee) => !!(isEnterpriseSSEnabledSelector(G) && D(G, le, Ee)),
				ue = G => G.membership,
				z = (0, n.P1)("membership", ue),
				Y = (0, f.P1)(z, ue, (G, le) => ({
					data: G,
					meta: le
				})),
				W = G => {
					const {
						roles: le = []
					} = z(G) || {};
					return Boolean(le.find(Ee => Ee === "Super Administrator - All Privileges" || Ee === "Billing"))
				},
				B = G => {
					const le = [a.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, m.n)(G, le)
				},
				w = G => {
					const le = _(G),
						Ee = Ce.getMemberships(G) ? l().asMutable(Ce.getMemberships(G)) : [];
					if (!!Ee) return l().from(Ee.map(Te => I({}, Te, {
						lastSeen: le[Te.account.id] ? le[Te.account.id].lastSeen : null
					})).sort((Te, De) => Te.lastSeen && De.lastSeen ? De.lastSeen - Te.lastSeen : 0))
				},
				x = G => G.filteredMemberships,
				K = (0, n.P1)("filteredMemberships", x),
				ee = (0, f.P1)(z, G => G == null ? void 0 : G.permissions),
				te = (0, f.P1)(ee, G => (0, e.Z)(le => {
					var Ee;
					return (Ee = G == null ? void 0 : G[le]) !== null && Ee !== void 0 ? Ee : {
						read: !1,
						edit: !1
					}
				})),
				ne = (0, f.P1)(z, G => G == null ? void 0 : G.policies),
				R = (G, le, Ee) => {
					let Te = Ce.getMembership(G);
					if (!Te) {
						const De = Ce.getMemberships(G);
						if (!De || !le) return !1;
						Te = De.find(xe => xe.account.id === le)
					}
					if (!Te || !Ee) return !1;
					try {
						return Ee(Te.permissions)
					} catch {
						return !1
					}
				},
				V = G => {
					var le, Ee;
					return (le = (Ee = O(G)) === null || Ee === void 0 ? void 0 : Ee.meta.has_pro_zones) !== null && le !== void 0 ? le : !1
				},
				H = G => {
					var le, Ee;
					return (le = (Ee = O(G)) === null || Ee === void 0 ? void 0 : Ee.meta.has_business_zones) !== null && le !== void 0 ? le : !1
				},
				$ = G => H(G) || V(G),
				oe = (G, le) => {
					const Ee = ce(G, le);
					return !!Ee && !!Ee.enabled
				},
				ce = (G, le) => {
					const Ee = Ce.getMembership(G),
						Te = Ee && Ee.account;
					return Te && Te.legacy_flags && Te.legacy_flags[le]
				},
				ge = G => oe(G, "custom_pages"),
				me = G => !!G && G["webhooks.webhooks.enabled"],
				be = G => D(G, "bots", "enabled"),
				Le = G => D(G, "billing", "annual_subscriptions_enable"),
				je = G => G ? Boolean(D(G, "ConstellationAI", "v2_ui")) : !1,
				he = G => G ? Boolean(D(G, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Se = G => G ? Boolean(D(G, "AIgateway", "enabled")) : !1,
				Ye = G => ce(G, "enterprise_zone_quota"),
				Ke = G => {
					const le = Ye(G);
					return !le || !le.available ? -1 : le.available
				},
				Ve = G => G.accountMembers,
				Z = (0, n.P1)("accountMembers", Ve),
				ve = G => G.accountMember && G.accountMember.isRequesting,
				Pe = G => G.accountRoles,
				Xe = (0, n.P1)("accountRoles", Pe),
				Je = (G, le) => {
					const Ee = Ce.getMemberships(G),
						Te = Ee && Ee.find(Qe => Qe.account.id === le);
					if (Te) return Te.account.name.replace(" Account", " account");
					const De = Ce.getMembership(G),
						xe = De && De.account;
					return xe && xe.id === le ? xe.name : null
				},
				st = (G, le) => {
					const Ee = Ce.getMemberships(G),
						Te = Ee && Ee.find(Qe => Qe.account.id === le);
					if (Te) return Te.account.settings.access_approval_expiry;
					const De = Ce.getMembership(G),
						xe = De && De.account;
					return xe && xe.id === le ? xe.settings.access_approval_expiry : null
				},
				qe = (G, le) => {
					const Ee = st(G, le);
					return Ee ? g().utc(Ee).isAfter() : !1
				},
				pt = (G, le, Ee) => {
					const Te = st(G, le);
					let De = Te ? g().utc(Te) : null;
					return !De || !De.isAfter() ? "" : De && De.year() === 3e3 ? Ee("account.access_approval.card_expiration_forever") : Ee("account.access_approval.card_expiration_text", {
						expiryTimestamp: De.local().format(v.U.DateTime)
					})
				},
				Q = G => G && G.member && G.member.edit,
				de = (G, le) => {
					const Ee = Ce.getMembership(G),
						Te = Ee && Ee.account;
					return Te ? Te.id !== le : !1
				},
				ye = G => G.dpa,
				Be = (0, n.P1)("dpa", ye),
				Ue = G => G.webhook,
				Ne = G => G.webhooks,
				et = (0, n.P1)("webhook", Ne),
				ct = G => G.accountLegoContract,
				gt = (0, n.P1)("accountLegoContract", ct),
				tt = G => {
					const le = gt(G);
					return (le == null ? void 0 : le.lego_state) ? le.lego_state : ""
				},
				Et = G => tt(G) === "signed",
				yt = G => ct(G).isRequesting,
				mt = G => {
					const le = gt(G);
					return le && le.subscription_type ? le.subscription_type : ""
				},
				ke = G => mt(G) !== "",
				Ce = {
					getMembership: z,
					getMemberships: M,
					getFilteredMemberships: K,
					getAccountMembers: Z,
					getAccountRoles: Xe
				},
				$e = G => G.accountSingle,
				ht = (0, n.P1)("accountSingle", $e),
				lt = G => {
					const le = [a.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, a.V.ADMINISTRATOR];
					return (0, m.n)(G, le)
				},
				bt = G => (0, m.n)(G, [a.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/commonSelectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				FX: function() {
					return o
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
				return s => {
					const g = s.application;
					return g && g.active[f]
				}
			}

			function r(l) {
				const f = `__TOGGLE__${l}`;
				return s => {
					const g = s.application;
					return g && g.toggles[f]
				}
			}

			function o(l) {
				return l && l.paginationData && l.paginationData.info && l.paginationData.info.total_count ? l.paginationData.info.total_count : 0
			}
			const u = l => l.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$f: function() {
					return a
				},
				AD: function() {
					return l
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return O
				},
				Ci: function() {
					return ee
				},
				DA: function() {
					return Ye
				},
				E6: function() {
					return i
				},
				Gy: function() {
					return je
				},
				Hq: function() {
					return Le
				},
				Ms: function() {
					return S
				},
				Nb: function() {
					return be
				},
				Pj: function() {
					return Se
				},
				Q2: function() {
					return f
				},
				Qq: function() {
					return $
				},
				Td: function() {
					return b
				},
				Z: function() {
					return R
				},
				a: function() {
					return y
				},
				a5: function() {
					return H
				},
				c7: function() {
					return oe
				},
				du: function() {
					return g
				},
				ec: function() {
					return X
				},
				f: function() {
					return me
				},
				fo: function() {
					return ge
				},
				hL: function() {
					return V
				},
				ji: function() {
					return te
				},
				jo: function() {
					return L
				},
				l9: function() {
					return Ve
				},
				lI: function() {
					return u
				},
				p1: function() {
					return I
				},
				pK: function() {
					return he
				},
				pf: function() {
					return n
				},
				qR: function() {
					return P
				},
				rV: function() {
					return s
				},
				u1: function() {
					return v
				},
				w4: function() {
					return c
				},
				yD: function() {
					return ne
				}
			});
			var e = t("../react/utils/url.ts");

			function r(Z, ve) {
				return Z && Z[ve]
			}
			const o = Z => !u(Z).isRequesting;

			function u(Z) {
				return Z.entitlements.zone
			}

			function l(Z) {
				return u(Z).data
			}
			const f = Z => {
				var ve, Pe;
				return ((ve = u(Z).paginationData) === null || ve === void 0 || (Pe = ve.options) === null || Pe === void 0 ? void 0 : Pe.editedDate) || {}
			};

			function s(Z, ve) {
				const Pe = l(Z);
				return Pe ? r(Pe, ve) : void 0
			}
			const g = (Z, ve) => s(Z, ve) === !0;

			function v(Z) {
				return Z.entitlements.account
			}

			function n(Z) {
				return v(Z).data
			}
			const c = Z => {
				var ve, Pe;
				return ((ve = v(Z).paginationData) === null || ve === void 0 || (Pe = ve.options) === null || Pe === void 0 ? void 0 : Pe.editedDate) || {}
			};

			function i(Z) {
				return !v(Z).isRequesting
			}

			function d(Z, ve) {
				const Pe = n(Z);
				return Pe ? r(Pe, ve) : void 0
			}

			function a(Z, ve) {
				return d(Z, ve) === !0
			}

			function m(Z, ve) {
				return ve.every(Pe => a(Z, Pe))
			}

			function I(Z) {
				return a(Z, "contract.customer_enabled")
			}

			function P(Z) {
				return a(Z, "contract.self_service_allowed")
			}

			function b(Z) {
				return a(Z, "billing.partners_managed")
			}
			const y = Z => I(Z) && P(Z),
				O = Z => a(Z, "enterprise.ecp_allowed");

			function _(Z) {
				return C(Z) || a(Z, "argo.allow_smart_routing") || a(Z, "argo.allow_tiered_caching") || a(Z, "rate_limiting.enabled") || a(Z, "ctm.enabled") || a(Z, "workers.enabled") || a(Z, "workers.kv_store.enabled") || a(Z, "stream.enabled")
			}
			const C = Z => g(Z, "argo.allow_smart_routing") || g(Z, "argo.allow_tiered_caching"),
				S = Z => a(Z, "zone.cname_setup_allowed") || a(Z, "zone.partial_setup_allowed") || g(Z, "zone.partial_setup_allowed"),
				L = Z => a(Z, "argo.allow_smart_routing") || g(Z, "argo.allow_smart_routing"),
				M = Z => a(Z, "argo.allow_tiered_caching") || g(Z, "argo.allow_tiered_caching"),
				A = Z => L(Z) || M(Z),
				T = Z => a(Z, "ctm.enabled"),
				D = Z => {
					const ve = d(Z, "ctm.load_balancers");
					return typeof ve == "number" ? ve : 0
				},
				k = Z => {
					const ve = d(Z, "ctm.pools");
					return typeof ve == "number" ? ve : 0
				},
				U = Z => {
					const ve = d(Z, "ctm.origins");
					return typeof ve == "number" ? ve : 0
				},
				X = Z => a(Z, "workers.enabled"),
				se = Z => a(Z, "stream.enabled"),
				pe = Z => {
					const ve = d(Z, "access.users_allowed");
					return typeof ve == "number" ? ve : 0
				},
				ue = Z => pe(Z) > 0,
				z = Z => {
					const ve = s(Z, "dedicated_certificates");
					return typeof ve == "number" ? ve : 0
				},
				Y = Z => z(Z) > 0,
				W = Z => {
					const ve = s(Z, "rate_limiting.max_rules");
					return typeof ve == "number" ? ve : 0
				},
				B = Z => a(Z, "rate_limiting.enabled"),
				w = Z => {
					const ve = s(Z, "page_rules");
					return typeof ve == "number" ? ve : 0
				},
				x = Z => w(Z) > 0,
				K = Z => {
					const ve = d(Z, "dns_firewall.max_clusters_allowed");
					return typeof ve == "number" ? ve : 0
				},
				ee = Z => K(Z) > 0,
				te = Z => g(Z, "zone.advanced_certificate_manager") || a(Z, "zone.advanced_certificate_manager"),
				ne = Z => s(Z, "authoritative_dns.proxy_record_allowed") === !1 || d(Z, "authoritative_dns.proxy_record_allowed") === !1,
				R = Z => a(Z, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				V = Z => s(Z, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				H = Z => {
					const ve = s(Z, "authoritative_dns.min_record_ttl_allowed");
					return typeof ve == "number" && ve > 1 ? ve : 60
				},
				$ = Z => a(Z, "foundation_dns.advanced_nameservers_allowed") || g(Z, "foundation_dns.advanced_nameservers_allowed"),
				oe = Z => a(Z, "authoritative_dns.account_custom_nameservers_allowed"),
				ce = Z => g(Z, "authoritative_dns.zone_custom_nameservers_allowed"),
				ge = Z => ce(Z) || oe(Z),
				me = (Z, ve) => ((0, e.el)(window.location.pathname) ? s : d)(Z, ve),
				be = Z => ((0, e.el)(window.location.pathname) ? l : n)(Z),
				Le = Z => a(Z, "authoritative_dns.multi_provider_allowed") || g(Z, "authoritative_dns.multi_provider_allowed"),
				je = Z => g(Z, "authoritative_dns.cname_flattening_allowed"),
				he = Z => a(Z, "secondary_dns.secondary_overrides") || g(Z, "secondary_dns.secondary_overrides"),
				Se = Z => a(Z, "authoritative_dns.custom_soa_allowed") || g(Z, "authoritative_dns.custom_soa_allowed"),
				Ye = Z => a(Z, "authoritative_dns.custom_ns_ttl_allowed") || g(Z, "authoritative_dns.custom_ns_ttl_allowed"),
				Ke = Z => a(Z, "secondary.create_zone"),
				Ve = Z => $(Z) || oe(Z) || Le(Z) || Ke(Z) || he(Z) || Se(Z) || Ye(Z)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				r: function() {
					return l
				},
				v: function() {
					return f
				}
			});
			var e = t("../react/utils/i18n.ts"),
				r = t("../../../common/intl/intl-types/src/index.ts"),
				o = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/utils/bootstrap.ts");
			const l = s => {
				if ((0, u.gm)()) return o.Z.set(e.ly, e.ZW), e.ZW;
				const g = s.userCommPreferences.data;
				if (g == null ? void 0 : g["language-locale"]) return (0, e.i_)(g["language-locale"]), g["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const v = (0, e.Kd)();
					return f(v) ? v : e.ZW
				}
			};

			function f(s) {
				const g = Object.keys(r.Q).find(v => r.Q[v] === s);
				return !!s && typeof s == "string" && g != null && (0, e.S8)(g)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$8: function() {
					return l
				},
				BG: function() {
					return v
				},
				BY: function() {
					return y
				},
				GP: function() {
					return a
				},
				GU: function() {
					return O
				},
				PR: function() {
					return o
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
					return s
				},
				mV: function() {
					return m
				},
				vW: function() {
					return f
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const r = _ => _.user,
				o = (0, e.P1)("user", r),
				u = _ => {
					var C;
					return (C = o(_)) === null || C === void 0 ? void 0 : C.email.endsWith("@cloudflare.com")
				},
				l = _ => {
					var C;
					return !!((C = o(_)) === null || C === void 0 ? void 0 : C.id)
				},
				f = _ => {
					const C = o(_);
					if (!!C) return C.first_name && C.last_name ? `${C.first_name} ${C.last_name}` : C.email
				},
				s = _ => {
					const C = o(_);
					return C && C.has_enterprise_zones
				},
				g = _ => _.userCommPreferences,
				v = (0, e.P1)("userCommPreferences", g),
				n = _ => {
					const C = o(_);
					return C && C.email_verified
				},
				c = _ => {
					const C = v(_);
					return C && C.preferences.marketing_communication
				},
				i = _ => _.userDetails,
				d = (0, e.P1)("userDetails", i),
				a = _ => {
					const C = d(_);
					return C && C["2FA-RECOVERY"] === "scheduled"
				},
				m = _ => {
					const C = d(_);
					return C && C["2FA-RECOVERY"] === "interrupted"
				},
				I = _ => {
					const C = d(_);
					return C == null ? void 0 : C["NEW-USER-EMAIL"]
				},
				P = _ => _.gates.assignments,
				b = (_, C) => _ && _[C];

			function y(_, C) {
				const S = P(_);
				return S ? b(S, C) : void 0
			}
			const O = (_, C) => y(_, C) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$4: function() {
					return S
				},
				$t: function() {
					return Xe
				},
				A4: function() {
					return I
				},
				Cu: function() {
					return P
				},
				DQ: function() {
					return $
				},
				Ej: function() {
					return M
				},
				FH: function() {
					return y
				},
				ID: function() {
					return B
				},
				Ko: function() {
					return je
				},
				Le: function() {
					return ge
				},
				Ly: function() {
					return ee
				},
				M3: function() {
					return Ve
				},
				N8: function() {
					return Ke
				},
				NY: function() {
					return V
				},
				Ns: function() {
					return x
				},
				Ox: function() {
					return qe
				},
				P4: function() {
					return A
				},
				RO: function() {
					return Y
				},
				Tr: function() {
					return Le
				},
				U: function() {
					return b
				},
				Ug: function() {
					return _
				},
				V6: function() {
					return Z
				},
				WR: function() {
					return pt
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
					return he
				},
				cg: function() {
					return H
				},
				d2: function() {
					return se
				},
				il: function() {
					return K
				},
				jN: function() {
					return D
				},
				jg: function() {
					return ne
				},
				kC: function() {
					return L
				},
				kf: function() {
					return ve
				},
				ko: function() {
					return z
				},
				mK: function() {
					return Je
				},
				nA: function() {
					return a
				},
				oY: function() {
					return T
				},
				qM: function() {
					return me
				},
				rq: function() {
					return R
				},
				tS: function() {
					return C
				},
				tU: function() {
					return U
				},
				vB: function() {
					return st
				},
				vM: function() {
					return k
				},
				wH: function() {
					return O
				},
				wn: function() {
					return oe
				},
				xU: function() {
					return X
				},
				xw: function() {
					return be
				},
				z5: function() {
					return W
				},
				zO: function() {
					return Se
				},
				zW: function() {
					return Pe
				},
				zh: function() {
					return pe
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				u = t.n(o),
				l = t("../../../../node_modules/moment/moment.js"),
				f = t.n(l),
				s = t("../react/common/constants/billing/index.ts");

			function g(Q) {
				for (var de = 1; de < arguments.length; de++) {
					var ye = arguments[de] != null ? Object(arguments[de]) : {},
						Be = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && Be.push.apply(Be, Object.getOwnPropertySymbols(ye).filter(function(Ue) {
						return Object.getOwnPropertyDescriptor(ye, Ue).enumerable
					})), Be.forEach(function(Ue) {
						v(Q, Ue, ye[Ue])
					})
				}
				return Q
			}

			function v(Q, de, ye) {
				return de = n(de), de in Q ? Object.defineProperty(Q, de, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[de] = ye, Q
			}

			function n(Q) {
				var de = c(Q, "string");
				return typeof de == "symbol" ? de : String(de)
			}

			function c(Q, de) {
				if (typeof Q != "object" || Q === null) return Q;
				var ye = Q[Symbol.toPrimitive];
				if (ye !== void 0) {
					var Be = ye.call(Q, de || "default");
					if (typeof Be != "object") return Be;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (de === "string" ? String : Number)(Q)
			}
			const i = (0, r.P1)("zone", Q => Q.zone),
				d = Q => {
					var de;
					return (de = Q.zoneVersioning) === null || de === void 0 ? void 0 : de.zoneVersionSelector
				},
				a = (0, e.P1)(i, d, (Q, de) => {
					var ye, Be, Ue;
					let Ne;
					if (Array.isArray(Q) && Q.length === 1 ? Ne = Q[0] : Q && !Array.isArray(Q) && (Ne = Q), !Ne) return;
					const et = !!(de == null ? void 0 : de.enabled);
					return g({}, Ne, Ne.name && {
						name: et ? de.rootZoneName : Ne.name
					}, {
						versioning: {
							enabled: et,
							isRoot: !((ye = Ne.name) === null || ye === void 0 ? void 0 : ye.endsWith(".config.cfdata.org")),
							version: et ? de.selectedVersion : 0,
							rootZoneId: et ? de.rootZoneId : (Be = (Ue = Ne) === null || Ue === void 0 ? void 0 : Ue.id) !== null && Be !== void 0 ? Be : ""
						}
					})
				}),
				m = Q => Q.zone,
				I = (0, e.P1)(a, m, (Q, de) => ({
					data: Q,
					meta: de
				})),
				P = Q => {
					var de, ye;
					return (de = (ye = a(Q)) === null || ye === void 0 ? void 0 : ye.id) !== null && de !== void 0 ? de : ""
				},
				b = Q => Q.zones,
				y = Q => Q.zonesRoot,
				O = Q => Q.zonesAccount,
				_ = (0, r.P1)("zones", b),
				C = (0, r.P1)("zonesRoot", y),
				S = (0, r.P1)("zonesAccount", O);

			function L(Q) {
				const de = a(Q);
				return de ? de.created_on : null
			}

			function M(Q, de, ye) {
				const Be = L(Q);
				if (!Be) return;
				const Ue = f().duration(de, ye),
					Ne = new Date(Be),
					et = new Date(new Date().getTime() - Ue.asMilliseconds());
				return Ne.getTime() > et.getTime()
			}

			function A(Q) {
				const de = a(Q);
				return de ? de.status : null
			}

			function T(Q) {
				const de = a(Q);
				return de ? de.type : null
			}

			function D(Q) {
				return (Q == null ? void 0 : Q.plan_pending) ? Q == null ? void 0 : Q.plan_pending : Q == null ? void 0 : Q.plan
			}

			function k(Q) {
				const de = a(Q);
				if (!de) return;
				const ye = D(de);
				return ye && ye.legacy_id
			}

			function U(Q, de) {
				const ye = D(Q);
				return !!ye && s.Gs.indexOf(ye.legacy_id) >= s.Gs.indexOf(de)
			}

			function X(Q) {
				return !!Q && Q.status === "initializing"
			}

			function se(Q) {
				return !!Q && Q.status === "pending"
			}

			function pe(Q) {
				return !!Q && Q.status === "active"
			}

			function ue(Q, de) {
				if (!Q) return !1;
				const ye = D(Q);
				return !!ye && ye.legacy_id === de
			}

			function z(Q) {
				return ue(Q, "enterprise")
			}
			const Y = Q => z(a(Q));

			function W(Q) {
				return ue(Q, "business")
			}
			const B = Q => W(a(Q));

			function w(Q) {
				return ue(Q, "pro")
			}

			function x(Q) {
				return ue(Q, "free")
			}
			const K = Q => x(a(Q));

			function ee(Q) {
				return !z(Q)
			}

			function te(Q) {
				return Q && Q.owner
			}

			function ne(Q, de) {
				const ye = te(de);
				return !!ye && ye.type === "user" && ye.id === Q.id
			}

			function R(Q) {
				const de = a(Q);
				return !!de && de.type === "partial"
			}

			function V(Q) {
				const de = a(Q);
				return !!de && de.type === "secondary"
			}
			const H = Q => {
					var de;
					const ye = a(Q);
					return !!(ye == null ? void 0 : ye.host) && !!((de = ye.plan) === null || de === void 0 ? void 0 : de.externally_managed)
				},
				$ = Q => {
					const de = _(Q);
					return de && de.some(z)
				},
				oe = (Q, de) => {
					const ye = a(Q);
					return ye && ye.betas ? ye.betas.includes(de) : !1
				},
				ce = (Q, ...de) => u()(Q, ["zoneFlags", "data", ...de]),
				ge = (Q, ...de) => u()(Q, ["accountFlags", "data", ...de]),
				me = Q => Q.accountFlags.isRequesting,
				be = Q => Q.zoneFlags.isRequesting,
				Le = (Q, ...de) => u()(Q, ["zoneFlagsChanges", "data", ...de]),
				je = Q => Q.zoneFlagsChanges.isRequesting,
				he = Q => Q.zoneFlags && Q.zoneFlags.data,
				Se = Q => Q.zoneFlags,
				Ye = (0, e.P1)(he, Se, (Q, de) => ({
					data: Q,
					meta: de
				})),
				Ke = (0, r.P1)("abuseUrls", Q => Q.overview.abuseUrls),
				Ve = Q => {
					const de = a(Q);
					return de ? `/${de.account.id}/${de.name}` : null
				},
				Z = Q => Q.zoneMarketingCampaigns,
				ve = Q => Q.overview.zoneBlocks.data,
				Pe = Q => Q.overview.zoneBlocks.isRequesting,
				Xe = Q => Q.overview.zoneBlocks.hasData,
				Je = Q => {
					var de, ye;
					return (Q == null || (de = Q.overview.zoneBlocks) === null || de === void 0 || (ye = de.paginationData) === null || ye === void 0 ? void 0 : ye.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				st = Q => Q.overview.zoneBlocksReview.isRequesting,
				qe = Q => Q.overview.zoneHold,
				pt = (0, r.P1)("zoneHold", qe)
		},
		"../react/common/utils/formatDate.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			E.Z = (r, o, u = !1) => (0, e.p6)(r, o, u)
		},
		"../react/common/utils/hasRole.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				n: function() {
					return r
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const r = (o, u) => {
				const {
					roles: l = []
				} = (0, e.uF)(o) || {};
				return u.some(f => l.includes(f))
			}
		},
		"../react/common/utils/isGuards.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Q$: function() {
					return o
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
			const o = s => s ? ["page", "per_page", "count", "total_count"].every(v => v in s && s[v]) : !1,
				u = (s = "") => e.Dy.includes(s.toLowerCase()),
				l = s => s !== null && typeof s == "object" && "name" in s && "size" in s && "type" in s && typeof s.slice == "function",
				f = s => (0, r.Z)(s)
		},
		"../react/common/utils/startViewTransition.ts": function(F, E, t) {
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
		"../react/common/utils/useQueryCache.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				o: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function r(s) {
				for (var g = 1; g < arguments.length; g++) {
					var v = arguments[g] != null ? Object(arguments[g]) : {},
						n = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(v).filter(function(c) {
						return Object.getOwnPropertyDescriptor(v, c).enumerable
					})), n.forEach(function(c) {
						o(s, c, v[c])
					})
				}
				return s
			}

			function o(s, g, v) {
				return g = u(g), g in s ? Object.defineProperty(s, g, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[g] = v, s
			}

			function u(s) {
				var g = l(s, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function l(s, g) {
				if (typeof s != "object" || s === null) return s;
				var v = s[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(s, g || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(s)
			}
			const f = s => {
				const g = (0, e.useQueryClient)(),
					v = y => {
						var O;
						return g.getQueriesData((O = y) !== null && O !== void 0 ? O : s)
					},
					n = y => {
						var O;
						return g.getQueryData((O = y) !== null && O !== void 0 ? O : s)
					},
					c = y => {
						var O;
						return g.getQueriesData({
							queryKey: (O = y) !== null && O !== void 0 ? O : s,
							stale: !0
						})
					},
					i = (y, O) => {
						var _;
						g.setQueryData((_ = O) !== null && _ !== void 0 ? _ : s, y)
					},
					d = async y => {
						var O;
						await g.refetchQueries((O = y) !== null && O !== void 0 ? O : s)
					}, a = async (y, O) => {
						var _, C;
						await g.invalidateQueries((_ = y) !== null && _ !== void 0 ? _ : s, r({
							refetchActive: !1
						}, (C = O) !== null && C !== void 0 ? C : {}))
					}, m = async (y, O) => {
						const _ = y || (C => {
							var S;
							return (C == null || (S = C.queryKey) === null || S === void 0 ? void 0 : S[0]) === s
						});
						await g.invalidateQueries(r({
							predicate: _,
							refetchActive: !1,
							refetchInactive: !1
						}, O))
					};
				return {
					refetch: d,
					cancelData: async () => {
						await g.cancelQueries(s)
					},
					invalidate: a,
					setData: i,
					getDataStale: c,
					getData: v,
					prefetchQuery: (y, O) => {
						var _;
						return g.prefetchQuery((_ = O) !== null && _ !== void 0 ? _ : s, y)
					},
					getQueryData: n,
					predicateInvalidate: m,
					batchInvalidate: async ({
						queryKeysToInvalidate: y = [],
						queryKeysToPredicateInvalidate: O = [],
						refetchActive: _ = !1,
						refetchInactive: C = !1
					}) => {
						const S = y.map(M => a(M)),
							L = O.map(M => m(A => {
								var T;
								return (A == null || (T = A.queryKey) === null || T === void 0 ? void 0 : T[0]) === M
							}, {
								refetchActive: _,
								refetchInactive: C
							}));
						await Promise.all([...S, ...L])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(F, E, t) {
			"use strict";
			t.d(E, {
				K2: function() {
					return r
				},
				Lb: function() {
					return o
				},
				XI: function() {
					return u
				},
				bK: function() {
					return g
				},
				jk: function() {
					return s
				},
				wb: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = v => /^https?:\/\/(.*)/.test(v),
				o = v => e.default.hostname.test(v),
				u = v => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(v),
				l = v => /^[!-~]+$/.test(v),
				f = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				s = v => f.test(v),
				g = v => !!v && !!v.length && /^[ -~]+$/.test(v)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(F, E, t) {
			"use strict";
			t.d(E, {
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
					return o
				},
				qc: function() {
					return l
				},
				w9: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e);
			const o = i => r().utc(i).format("YYYY-MM-DD"),
				u = i => r().utc(i).format(),
				l = i => r().utc(i).startOf("minute").format(),
				f = i => new Date(i),
				s = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				g = i => {
					const d = i / 60 / 60 / 1e3;
					return s[Object.keys(s).sort((a, m) => m - a).find(a => d >= a)]
				},
				v = (i, d = a => a.avg && a.avg.sampleInterval ? a.avg.sampleInterval : 1) => i.length === 0 ? 1 : i.reduce((a, m) => a + d(m), 0) / i.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				c = i => n[i]
		},
		"../react/pages/caching/tracking.tsx": function(F, E, t) {
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
		"../react/pages/d1/routes.ts": function(F, E, t) {
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
		"../react/pages/dns/dns-records/tracking.ts": function(F, E, t) {
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
		"../react/pages/email/types.ts": function(F, E, t) {
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
			const u = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				_: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/pages/home/alerts/routes.ts");
			const o = r._.createAlertWithSelection,
				u = r._.editAlert,
				l = (0, e.BC)`${o}/subtype`,
				f = (0, e.BC)`${o}/stepper`,
				s = (0, e.BC)`${f}/${"stepName"}`,
				g = (0, e.BC)`${f}/details`,
				v = (0, e.BC)`${f}/data-centers`,
				n = (0, e.BC)`${f}/ramps`,
				c = (0, e.BC)`${f}/threshold`,
				i = (0, e.BC)`${f}/review`,
				d = (0, e.BC)`${f}/confirm`,
				a = (0, e.BC)`${u}/stepper`,
				m = (0, e.BC)`${a}/${"stepName"}`,
				I = (0, e.BC)`${a}/details`,
				P = (0, e.BC)`${a}/data-centers`,
				b = (0, e.BC)`${a}/ramps`,
				y = (0, e.BC)`${a}/threshold`,
				O = (0, e.BC)`${a}/review`,
				_ = (0, e.BC)`${a}/confirm`,
				C = {
					magicTunnelHealthChooseSubType: l,
					magicTunnelHealthCreateStepperBase: f,
					magicTunnelHealthCreateStepper: s,
					magicTunnelHealthCreateDetails: g,
					magicTunnelHealthCreateSelectDataCenter: v,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: c,
					magicTunnelHealthCreateReview: i,
					magicTunnelHealthCreateConfirm: d,
					magicTunnelHealthEditStepperBase: a,
					magicTunnelHealthEditStepper: m,
					magicTunnelHealthEditDetails: I,
					magicTunnelHealthEditSelectDataCenter: P,
					magicTunnelHealthEditSelectRamps: b,
					magicTunnelHealthEditSetThreshold: y,
					magicTunnelHealthEditReview: O,
					magicTunnelHealthEditConfirm: _
				};
			E.Z = C
		},
		"../react/pages/home/alerts/config.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				jk: function() {
					return i
				},
				w8: function() {
					return d
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				r = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				o = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				l = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function f(a) {
				for (var m = 1; m < arguments.length; m++) {
					var I = arguments[m] != null ? Object(arguments[m]) : {},
						P = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(I).filter(function(b) {
						return Object.getOwnPropertyDescriptor(I, b).enumerable
					})), P.forEach(function(b) {
						s(a, b, I[b])
					})
				}
				return a
			}

			function s(a, m, I) {
				return m = g(m), m in a ? Object.defineProperty(a, m, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[m] = I, a
			}

			function g(a) {
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
				c = "notification",
				i = f({}, e._, r._j, o._j, u._),
				d = f({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, l.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				_j: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				o = (0, e.BC)`${r}/pagerduty/connect`,
				u = (0, e.BC)`${r}/pagerduty/register`,
				l = (0, e.BC)`${r}/pagerduty`,
				f = {
					pagerDutyConnect: o,
					pagerDutyRegister: u,
					pagerDutyList: l
				};
			var s = null
		},
		"../react/pages/home/alerts/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				_: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				o = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${o}/destinations`,
				l = (0, e.BC)`${o}/create`,
				f = (0, e.BC)`${l}/${"alertType"}`,
				s = (0, e.BC)`${o}/edit/${"alertId"}`,
				g = {
					account: r,
					alerts: o,
					destinations: u,
					createAlert: l,
					createAlertWithSelection: f,
					editAlert: s
				};
			E.Z = g
		},
		"../react/pages/home/alerts/tracking.ts": function(F, E, t) {
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
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(F, E, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(F, E, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AA: function() {
					return V
				},
				AN: function() {
					return lt
				},
				AY: function() {
					return Ee
				},
				Ac: function() {
					return Ct
				},
				Am: function() {
					return P
				},
				B2: function() {
					return B
				},
				BB: function() {
					return M
				},
				BF: function() {
					return Ne
				},
				BQ: function() {
					return Ce
				},
				E8: function() {
					return G
				},
				Fl: function() {
					return De
				},
				Fu: function() {
					return D
				},
				Gc: function() {
					return tt
				},
				Hc: function() {
					return Pt
				},
				IO: function() {
					return $e
				},
				JK: function() {
					return Ke
				},
				K: function() {
					return C
				},
				LI: function() {
					return ke
				},
				LX: function() {
					return Be
				},
				L_: function() {
					return Pe
				},
				Ly: function() {
					return Nt
				},
				MR: function() {
					return x
				},
				Mj: function() {
					return ee
				},
				NB: function() {
					return at
				},
				Oe: function() {
					return Lt
				},
				Or: function() {
					return ne
				},
				P5: function() {
					return ft
				},
				PE: function() {
					return Le
				},
				Pd: function() {
					return At
				},
				Pk: function() {
					return he
				},
				Pp: function() {
					return st
				},
				Q1: function() {
					return T
				},
				Qr: function() {
					return Ue
				},
				Qv: function() {
					return je
				},
				Rp: function() {
					return ut
				},
				S7: function() {
					return It
				},
				Sh: function() {
					return xe
				},
				Sl: function() {
					return xt
				},
				TZ: function() {
					return R
				},
				Tg: function() {
					return Ve
				},
				Tp: function() {
					return gt
				},
				Uy: function() {
					return Tt
				},
				Vw: function() {
					return U
				},
				W3: function() {
					return Q
				},
				WR: function() {
					return ht
				},
				WX: function() {
					return ce
				},
				XF: function() {
					return bt
				},
				Xb: function() {
					return H
				},
				Zs: function() {
					return ve
				},
				_f: function() {
					return et
				},
				b4: function() {
					return oe
				},
				bc: function() {
					return re
				},
				c2: function() {
					return w
				},
				cE: function() {
					return we
				},
				dh: function() {
					return Je
				},
				fE: function() {
					return Xe
				},
				g7: function() {
					return be
				},
				hO: function() {
					return pt
				},
				hV: function() {
					return Rt
				},
				hk: function() {
					return b
				},
				hr: function() {
					return $
				},
				it: function() {
					return qe
				},
				j3: function() {
					return He
				},
				jN: function() {
					return Ye
				},
				jo: function() {
					return Bt
				},
				k3: function() {
					return Dt
				},
				m8: function() {
					return z
				},
				nm: function() {
					return Qe
				},
				oW: function() {
					return le
				},
				pH: function() {
					return Y
				},
				pi: function() {
					return ue
				},
				r4: function() {
					return ie
				},
				rI: function() {
					return K
				},
				s7: function() {
					return Et
				},
				sg: function() {
					return nt
				},
				tB: function() {
					return m
				},
				tN: function() {
					return me
				},
				u_: function() {
					return Ot
				},
				vV: function() {
					return ct
				},
				vc: function() {
					return Se
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				o = t("../../../../node_modules/moment/moment.js"),
				u = t.n(o),
				l = t("../../../common/util/types/src/api/domain.ts"),
				f = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				s = t("../react/utils/url.ts"),
				g = t("../react/pages/home/domain-registration/config.ts"),
				v = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function c(p) {
				for (var h = 1; h < arguments.length; h++) {
					var J = arguments[h] != null ? Object(arguments[h]) : {},
						_e = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(J).filter(function(Ae) {
						return Object.getOwnPropertyDescriptor(J, Ae).enumerable
					})), _e.forEach(function(Ae) {
						i(p, Ae, J[Ae])
					})
				}
				return p
			}

			function i(p, h, J) {
				return h = d(h), h in p ? Object.defineProperty(p, h, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[h] = J, p
			}

			function d(p) {
				var h = a(p, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function a(p, h) {
				if (typeof p != "object" || p === null) return p;
				var J = p[Symbol.toPrimitive];
				if (J !== void 0) {
					var _e = J.call(p, h || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(p)
			}

			function m(p) {
				return p.filter(h => h.isSelected).reduce((h, {
					name: J,
					fees: _e,
					isZoneEntitlementPresent: Ae
				}) => Ae || !(0, e.isNumber)(_e == null ? void 0 : _e.transfer_fee) ? h : Ct(J) ? h + (_e == null ? void 0 : _e.transfer_fee) * 2 : h + (_e == null ? void 0 : _e.transfer_fee), 0)
			}

			function I(p) {
				return p.filter(h => h.registrar.toLowerCase() === "godaddy")
			}
			const P = "MMM D, YYYY";

			function b(p, h, J, _e) {
				var Ae, Fe, Ge, ze, rt, _t, ot, Re, Ut, St, kt, jt;
				const Ze = p[h.name],
					Ht = () => Ct(h.name) ? u()(h.expires_at).add(2, "years").format(P) : u()(h.expires_at).add(1, "year").format(P);
				return c({
					name: h == null ? void 0 : h.name,
					zone: Ze,
					entitlements: J,
					registryCheck: _e,
					nameservers: h.name_servers,
					isAvailable: h.available,
					lastKnownStatus: h.last_known_status,
					authCode: h.auth_code,
					isEnterpriseZone: (Ze == null || (Ae = Ze.plan) === null || Ae === void 0 ? void 0 : Ae.legacy_id) === "enterprise",
					isActiveZone: (Ze == null ? void 0 : Ze.status) === "active",
					corResponsesPending: h.cor_responses_pending,
					isCorLocked: h.cor_locked,
					corLockedUntil: h.cor_locked_until ? u()(h.cor_locked_until).format(P) : null,
					isFullZone: (Ze == null ? void 0 : Ze.type) == n.xd.Full,
					isLocked: h.locked,
					registrar: h.current_registrar || g.JM,
					zoneId: Ze == null ? void 0 : Ze.id,
					currentExpiration: u()(h.expires_at).format(P),
					newExpiration: Ht(),
					lastEntitledAt: h.last_entitled_at ? new Date(h.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(J) && !!J.find(Wt => Wt.id === g.g5 && Wt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: h.transfer_in && _(h.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: h.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: h.transfer_in,
					transferOut: h.transfer_out,
					autoRenew: h.auto_renew === !0,
					lastTransferredAt: h.last_transferred_at,
					createdAt: h.created_at,
					paymentExpiresAt: u()(h.payment_expires_at).isValid() ? u()(h.payment_expires_at) : u()(h.expires_at).isValid() ? u()(h.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (Fe = h.contacts) === null || Fe === void 0 || (Ge = Fe.administrator) === null || Ge === void 0 ? void 0 : Ge.id,
						[n.l2.Billing]: (ze = h.contacts) === null || ze === void 0 || (rt = ze.billing) === null || rt === void 0 ? void 0 : rt.id,
						[n.l2.Registrant]: (_t = h.contacts) === null || _t === void 0 || (ot = _t.registrant) === null || ot === void 0 ? void 0 : ot.id,
						[n.l2.Technical]: (Re = h.contacts) === null || Re === void 0 || (Ut = Re.technical) === null || Ut === void 0 ? void 0 : Ut.id
					},
					landing: h.landing,
					privacy: h.privacy,
					whois: h.whois,
					emailVerified: h.email_verified,
					materialChanges: S(h.material_changes),
					corChanges: h.cor_changes ? M(Object.assign(c({}, O), h.cor_changes)) : {},
					registryStatuses: h.registry_statuses ? h.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (St = h.domain_protection_services) === null || St === void 0 ? void 0 : St.status
					},
					deletion: {
						isDeletable: h == null || (kt = h.deletion) === null || kt === void 0 ? void 0 : kt.is_deletable
					},
					premiumType: h == null ? void 0 : h.premium_type,
					fees: h == null ? void 0 : h.fees
				}, h.domain_move && {
					domainMove: {
						ineligibilityReasons: (jt = h.domain_move) === null || jt === void 0 ? void 0 : jt.ineligibility_reasons
					}
				}, h.actionable_metadata && {
					actionableMetadata: y(h.actionable_metadata)
				}, h.policies && {
					policies: c({}, h.policies.suspension && {
						suspension: {
							parked: h.policies.suspension.parked,
							parkingReason: h.policies.suspension.parking_reason,
							paymentExpired: h.policies.suspension.payment_expired
						}
					})
				})
			}

			function y(p) {
				return p.map(h => ({
					accountContext: h.account_context,
					createdAt: h.created_at,
					expiresAt: h.expires_at,
					sentAt: h.sent_at,
					status: h.status,
					type: h.type
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

			function _(p) {
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

			function C(p) {
				let h = p.extensions;
				(h == null ? void 0 : h.application_purpose) && (h == null ? void 0 : h.nexus_category) && (p.extensions = {
					nexusCategory: h.nexus_category,
					applicationPurpose: h.application_purpose
				});
				let J = c({}, typeof p.id == "string" ? {
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
				return Z(J)
			}

			function S(p) {
				let h = [];
				const J = {
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
				for (const _e in p) {
					const Ae = p[_e],
						Fe = J[Ae];
					h.push(Fe)
				}
				return h
			}
			const L = p => {
				if (!p) return null;
				let h = p;
				return p.includes("C31") && (h = "C31"), p.includes("C32") && (h = "C32"), h
			};

			function M(p) {
				return c({}, typeof p.id == "string" ? {
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
						nexusCategory: L(p.extensions.nexus_category),
						applicationPurpose: p.extensions.application_purpose
					}
				} : {})
			}

			function A(p = {}) {
				const h = {
					name: "",
					zoneId: "",
					zone: c({
						id: "",
						name: "",
						status: "pending",
						plan: c({
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
					transferConditions: c({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, p.transferConditions || {}),
					transferIn: c({
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
				return Object.assign(h, p)
			}

			function T(p = {}) {
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
				const h = g.Py.concat(g.ui).reduce((J, _e) => c({}, J, {
					[_e]: []
				}), {});
				return p.forEach(J => {
					let _e = k(J.registrar);
					_e in h || (_e = g.ui), nt(J.name) && (_e = "uk"), h[_e].push(J)
				}), Object.keys(h).sort((J, _e) => J.localeCompare(_e)).map(J => ({
					registrar: J,
					domains: h[J]
				})).filter(J => J.domains.length > 0)
			}

			function k(p) {
				return p == null ? void 0 : p.toLowerCase().replace(/\s|,|\./g, "")
			}

			function U(p) {
				if (!p || !p.registrar) return "unknown";
				if (nt(p.name)) return "uk";
				const h = k(p.registrar);
				return h in g.gM ? h : "unknown"
			}
			const X = [];

			function se(p) {
				return X.some(h => p.endsWith("." + h))
			}

			function pe(p) {
				return !p.isEnterpriseZone || !Array.isArray(p.entitlements) ? !1 : !!p.entitlements.find(({
					id: h,
					allocation: J
				}) => h === g.g5 && J.value === !0)
			}

			function ue(p) {
				var h;
				const J = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let _e = !1,
					Ae = null;
				return (h = p.registryStatuses) === null || h === void 0 || h.some(Fe => {
					J.includes(Fe) && (Ae = Fe, _e = !0)
				}), [_e, Ae]
			}

			function z(p, h = !1) {
				if (!p) return [!1, v.keys.cannot_transfer_default];
				if (p.zone.status !== "active") return [!1, v.keys.cannot_transfer_zone_not_active];
				if (!p.isFullZone && !pe(p)) return [!1, v.keys.cannot_transfer_zone_not_eligible];
				if (p.registrar === "Cloudflare") return [!1, v.keys.cannot_transfer_domain_on_cf];
				if (p.isAvailable) return [!1, v.keys.cannot_transfer_domain_available];
				if (!p.transferConditions) return [!1, v.keys.cannot_transfer_domain_transfer_conditions];
				if (!h && Tt(p == null ? void 0 : p.premiumType)) return [!1, v.keys.cannot_transfer_domain_premium];
				if (Y(p)) return [!1, v.keys.cannot_transfer_domain_transfer_in_progress];
				let J;
				for (J in p.transferConditions)
					if (J !== "not_premium" && !p.transferConditions[J]) return [!1, v.keys.cannot_transfer_domain_transfer_conditions];
				if (se(p.name)) return [!1, v.keys.cannot_transfer_domain_tld_not_supported];
				const [_e, Ae] = ue(p);
				return _e && Ae ? [!1, v.keys.cannot_transfer_domain_registry_status[Ae]] : [!0, ""]
			}

			function Y(p) {
				var h, J;
				return !!p.transferIn && !((h = p.transferConditions) === null || h === void 0 ? void 0 : h.not_started) && !!(nt(p.name) || ((J = p.registryStatuses) === null || J === void 0 ? void 0 : J.includes(n.rj.PENDING_TRANSFER)))
			}

			function W(p) {
				return !!p.registrar && !!p.currentExpiration
			}

			function B(p, h = !1) {
				const [J] = z(p, h);
				return W(p) ? ge(p) ? n.M5.InProgressOrOnCF : J ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function w(p) {
				return p.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(p.transferIn.enter_auth_code) || !1
			}

			function x(p) {
				return p.registrar === "Cloudflare"
			}

			function K(p) {
				return !!(p == null ? void 0 : p.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function ee(p) {
				return !!(p == null ? void 0 : p.includes(n.rj.PENDING_TRANSFER))
			}
			const te = "Invalid date";

			function ne(p) {
				return p.newExpiration === te ? "Unavailable" : p.newExpiration
			}

			function R(p) {
				return p.currentExpiration === te ? "Unavailable" : p.currentExpiration
			}

			function V(p) {
				return p.substring(p.indexOf("."))
			}

			function H(p = "") {
				return p.indexOf(".") !== -1 ? p.substring(0, p.indexOf(".")) : p
			}

			function $(p) {
				return p.map(h => h.name).map(h => V(h)).filter((h, J, _e) => !_e.includes(h, J + 1))
			}

			function oe(p) {
				if (g.no) return [!0, ""];
				if (!x(p)) return [!1, n.ok.NotOnCF];
				if (p.isCorLocked) return [!1, p.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (p.lastTransferredAt) {
					const h = u()(p.lastTransferredAt),
						J = u().duration(u()().diff(h)).as("days"),
						_e = nt(p.name);
					if (J < (_e ? 1 : 60)) return [!1, _e ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (p.createdAt) {
					const h = u()(p.createdAt);
					if (u().duration(u()().diff(h)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function ce(p) {
				return !!(g.Bc || p.transferOut)
			}

			function ge(p) {
				return be(p) || x(p)
			}

			function me(p) {
				return !be(p) && x(p)
			}

			function be(p) {
				return !p || p.lastKnownStatus === "pendingTransfer" || p.lastKnownStatus === "transferFOAPending" || !x(p) && p.transferConditions && !p.transferConditions.not_started || !1
			}

			function Le(p) {
				return !(se(p.name) || p.transferConditions && !p.transferConditions.supported_tld)
			}

			function je(p) {
				return (p == null ? void 0 : p.includes("/")) ? !0 : p.split("").some(h => h.charCodeAt(0) > 123)
			}

			function he(p) {
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

			function Se(p) {
				return u()(p.paymentExpiresAt).isBefore(u()())
			}

			function Ye(p) {
				return p.transferIn && p.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function Ke(p) {
				const h = ["CU", "KP", "IR", "SY"];
				return p.filter(J => !h.includes(J.code))
			}

			function Ve(p) {
				if (!!p) return `${p.charAt(0).toUpperCase()}${p.slice(1)}${p.charAt(p.length-1)==="."?"":"."}`
			}

			function Z(p) {
				const h = {};
				for (const [J, _e] of Object.entries(p)) {
					if (_e && typeof _e == "string") {
						Object.assign(h, {
							[J]: _e.trim()
						});
						continue
					}
					Object.assign(h, {
						[J]: _e
					})
				}
				return h
			}

			function ve(p) {
				return u()(p).add(40, "days")
			}

			function Pe(p) {
				const h = p.paymentExpiresAt || p.payment_expires_at,
					J = ve(h);
				return u()().isBetween(h, J)
			}

			function Xe(p) {
				var h;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (h = p.registryStatuses) === null || h === void 0 ? void 0 : h.includes(n.rj.REDEMPTION_PERIOD)
			}

			function Je(p) {
				var h;
				return !(p == null ? void 0 : p.registryStatuses) || !Array.isArray(p == null ? void 0 : p.registryStatuses) && !(0, e.isString)(p == null ? void 0 : p.registryStatuses) ? !1 : (h = p.registryStatuses) === null || h === void 0 ? void 0 : h.includes(n.rj.PENDING_DELETE)
			}

			function st(p) {
				return [".us"].includes(p)
			}

			function qe(p) {
				return [".us"].includes(p)
			}

			function pt(p) {
				switch (p) {
					case ".us":
						return ye();
					default:
						return []
				}
			}

			function Q(p) {
				switch (p) {
					case ".us":
						return de;
					default:
						return {}
				}
			}
			const de = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function ye() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([p, h]) => ({
						value: p,
						label: h
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([p, h]) => ({
						value: p,
						label: h
					}))
				}]
			}

			function Be(p, h, J) {
				return h[h.length - 1][J] === p[J]
			}

			function Ue(p) {
				return Boolean(Object.keys(p).length === 0)
			}

			function Ne(p) {
				return u()().add(p, "year").format(P)
			}

			function et({
				accountName: p
			}) {
				var h;
				const J = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((h = p.toLowerCase().match(J)) === null || h === void 0 ? void 0 : h[0]) || ""
			}

			function ct(p) {
				return !!p.match(f.default.email)
			}

			function gt(p) {
				return p === l.W7.PENDING_UPDATE
			}

			function tt(p) {
				return p ? Object.values(l.wR).filter(h => h !== l.wR.OFFBOARDED).includes(p) : !1
			}

			function Et(p) {
				return p ? [l.wR.LOCKED, l.wR.ONBOARDED, l.wR.ONBOARDING_INITIATED, l.wR.PENDING_REGISTRY_LOCK, l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function yt(p) {
				return p ? l.wR.UNLOCKED === p : !1
			}

			function mt(p) {
				return p ? l.wR.LOCKED === p : !1
			}

			function ke(p) {
				return p ? l.wR.PENDING_REGISTRY_LOCK === p : !1
			}

			function Ce(p) {
				return p ? [l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(p) : !1
			}

			function $e(p) {
				var h;
				return !1
			}

			function ht(p) {
				var h;
				return !1
			}

			function lt(p) {
				var h;
				return !1
			}

			function bt(p) {
				var h;
				return !1
			}

			function G(p) {
				var h;
				return !1
			}

			function le(p) {
				return Object.keys(l.wR).find(h => l.wR[h].toLowerCase() === p.toLowerCase())
			}

			function Ee(p) {
				var h;
				const J = (h = le(p)) === null || h === void 0 ? void 0 : h.toLowerCase();
				return J ? v.keys.protection_status[J] : v.keys.protection_status.unknown
			}

			function Te(p) {
				return ["com", "net"].includes(p)
			}

			function De(p) {
				const h = (0, s.pu)(p);
				return Te(h) ? l.wR.PENDING_REGISTRY_LOCK : l.wR.LOCKED
			}

			function xe(p) {
				return (0, s.pu)(p) === "co" ? 5 : 10
			}

			function Qe(p, h) {
				return h ? 1 : (0, s.pu)(p) === "co" ? 5 : (0, s.pu)(p) === "org" ? 1 : 10
			}

			function nt(p) {
				return (0, s.pu)(p) === "uk"
			}

			function we(p) {
				return (0, s.pu)(p) === "us"
			}

			function Ct(p) {
				return (0, s.pu)(p) === "ai"
			}

			function ut(p) {
				return u()(p).isValid()
			}

			function Nt(p) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(p)
			}

			function ft(p) {
				return !!(p == null ? void 0 : p.id)
			}

			function at(p) {
				return p ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(p) : !1
			}

			function At(p) {
				return p ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(p) : !1
			}

			function Rt(p) {
				var h;
				return (p == null ? void 0 : p.lastKnownStatus) ? (h = p.lastKnownStatus) === null || h === void 0 ? void 0 : h.includes("deletionIrredeemable") : !1
			}

			function Tt(p) {
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

			function Pt(p) {
				if (!p || !p.message) return n.OJ.DEFAULT;
				const {
					message: h
				} = p;
				switch (!0) {
					case h.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case h.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case h.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function It(p) {
				var h, J;
				return !!(((h = p.policies) === null || h === void 0 || (J = h.suspension) === null || J === void 0 ? void 0 : J.parked) && p.policies.suspension.parkingReason)
			}

			function He(p) {
				var h, J;
				return It(p) && ((h = p.policies) === null || h === void 0 || (J = h.suspension) === null || J === void 0 ? void 0 : J.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function Dt(p) {
				var h, J;
				return It(p) && ((h = p.policies) === null || h === void 0 || (J = h.suspension) === null || J === void 0 ? void 0 : J.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function xt(p) {
				var h;
				return !((h = p.domainMove) === null || h === void 0 ? void 0 : h.ineligibilityReasons.length)
			}

			function Lt(p) {
				var h, J;
				return !!((h = p.domainMove) === null || h === void 0 || (J = h.ineligibilityReasons) === null || J === void 0 ? void 0 : J.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function vt(p) {
				var h;
				return (h = p.actionableMetadata) === null || h === void 0 ? void 0 : h.find(J => J.type === n.wg.DOMAIN_MOVE)
			}

			function Bt(p) {
				const h = vt(p);
				return (h == null ? void 0 : h.status) === "pending" && h.accountContext === n._5.GAINING
			}

			function Ot(p) {
				const h = vt(p);
				return (h == null ? void 0 : h.status) === "pending" && h.accountContext === n._5.LOSING
			}

			function ie(p) {
				const h = V(p.name);
				return !g.Pf.includes(h)
			}

			function re(p) {
				return g.QZ.includes(p)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Bc: function() {
					return g
				},
				HG: function() {
					return be
				},
				Hv: function() {
					return Le
				},
				JM: function() {
					return o
				},
				Pf: function() {
					return d
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
					return c
				},
				gM: function() {
					return l
				},
				jk: function() {
					return me
				},
				no: function() {
					return v
				},
				uY: function() {
					return s
				},
				ui: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../flags.ts");
			const o = "Unknown",
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
				s = !0,
				g = (0, r.J8)("registrar_mock_transfer_out") || !1,
				v = (0, r.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				c = "cf_registrar.enabled",
				i = "@abcABC1234567890123456",
				d = [".us"],
				a = [".travel", ".us", ".ong", ".ngo"],
				m = (0, e.BC)`/${"accountId"}`,
				I = (0, e.BC)`${m}/add-site`,
				P = (0, e.BC)`${m}/registrar`,
				b = (0, e.BC)`${P}/domains`,
				y = (0, e.BC)`${P}/action-center`,
				O = (0, e.BC)`${P}/domain/${"zoneName"}`,
				_ = (0, e.BC)`${O}/configuration`,
				C = (0, e.BC)`${O}/contacts`,
				S = (0, e.BC)`${P}/pricing`,
				L = (0, e.BC)`${P}/protection`,
				M = (0, e.BC)`${P}/register`,
				A = (0, e.BC)`${M}/checkout`,
				T = (0, e.BC)`${M}/checkout/${"token"}`,
				D = (0, e.BC)`${M}/success`,
				k = (0, e.BC)`${P}/tlds`,
				U = (0, e.BC)`${P}/transfer`,
				X = (0, e.BC)`${P}/transfer/${"zoneName"}`,
				se = (0, e.BC)`/registrar/accounts/verify_email`,
				pe = (0, e.BC)`/registrar/domains/verify_email`,
				ue = (0, e.BC)`/sign-up/registrar`,
				z = (0, e.BC)`${P}/verify-email`,
				Y = (0, e.BC)`${m}/${"zoneName"}`,
				W = (0, e.BC)`${m}/domains`,
				B = (0, e.BC)`${W}/action-center`,
				w = (0, e.BC)`${W}/${"zoneName"}`,
				x = (0, e.BC)`${w}/configuration`,
				K = (0, e.BC)`${w}/contacts`,
				ee = (0, e.BC)`${W}/pricing`,
				te = (0, e.BC)`${W}/protection`,
				ne = (0, e.BC)`${W}/register`,
				R = (0, e.BC)`${ne}/checkout`,
				V = (0, e.BC)`${ne}/checkout/${"token"}`,
				H = (0, e.BC)`${ne}/success`,
				$ = (0, e.BC)`${W}/tlds`,
				oe = (0, e.BC)`${W}/transfer`,
				ce = (0, e.BC)`${W}/transfer/${"zoneName"}`,
				ge = (0, e.BC)`${W}/verify-email`,
				me = {
					addSite: I,
					domains: b,
					domainsActionCenter: y,
					domainsDomain: O,
					domainsDomainConfiguration: _,
					domainsDomainContacts: C,
					domainsPricing: S,
					domainsProtection: L,
					domainsRegister: M,
					domainsRegisterCheckout: A,
					domainsRegisterCheckoutToken: T,
					domainsRegisterSuccess: D,
					domainsTlds: k,
					domainsTransfer: U,
					domainsTransferZone: X,
					registrar: P,
					registrarAccountsVerifyEmail: se,
					registrarDomainsVerifyEmail: pe,
					signup: ue,
					verifyEmail: z,
					zone: Y
				},
				be = {
					LEGACY_domains: W,
					LEGACY_domainsActionCenter: B,
					LEGACY_domainsDomain: w,
					LEGACY_domainsDomainConfiguration: x,
					LEGACY_domainsDomainContacts: K,
					LEGACY_domainsPricing: ee,
					LEGACY_domainsProtection: te,
					LEGACY_domainsRegister: ne,
					LEGACY_domainsRegisterCheckout: R,
					LEGACY_domainsRegisterCheckoutToken: V,
					LEGACY_domainsRegisterSuccess: H,
					LEGACY_domainsTlds: $,
					LEGACY_domainsTransfer: oe,
					LEGACY_domainsTransferZone: ce,
					LEGACY_verifyEmail: ge
				},
				Le = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				HO: function() {
					return s
				},
				NW: function() {
					return g
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
			const o = v => {
					const n = v && v.accountFlags && v.accountFlags.data && v.accountFlags.data.registrar && v.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(c => c.trim()) : []
				},
				u = v => {
					var n, c, i;
					return ((n = v.accountFlags) === null || n === void 0 || (c = n.data) === null || c === void 0 || (i = c.registrar) === null || i === void 0 ? void 0 : i["registrar-managed"]) || !1
				},
				l = v => v.account ? v.account.email : "",
				f = v => !1,
				s = v => f(v) && (0, e.oJ)((0, e.Zu)(v)),
				g = v => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: c
					} = v.registrar.registrations;
					return n && !(c.accepted_date || c.id || c.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				J: function() {
					return c
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(o),
				l = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function f(i) {
				for (var d = 1; d < arguments.length; d++) {
					var a = arguments[d] != null ? Object(arguments[d]) : {},
						m = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(a).filter(function(I) {
						return Object.getOwnPropertyDescriptor(a, I).enumerable
					})), m.forEach(function(I) {
						s(i, I, a[I])
					})
				}
				return i
			}

			function s(i, d, a) {
				return d = g(d), d in i ? Object.defineProperty(i, d, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = a, i
			}

			function g(i) {
				var d = v(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function v(i, d) {
				if (typeof i != "object" || i === null) return i;
				var a = i[Symbol.toPrimitive];
				if (a !== void 0) {
					var m = a.call(i, d || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			let n = function(i) {
				return i.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", i.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", i.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", i.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", i.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", i.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", i.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", i.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", i.RENEW_DOMAIN_COMPLETED = "domain renewal completed", i.RESTORE_DOMAIN_INIT = "click to open domain restore modal", i.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", i.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", i.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", i.RESTORE_DOMAIN_FAILURE = "domain restore failed", i.RESTORE_DOMAIN_COMPLETED = "domain restore completed", i.DOMAIN_DELETE_INIT = "click to begin domain delete", i.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", i.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", i.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", i.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", i.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", i.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", i.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", i.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", i.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", i.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", i.DOMAIN_MOVE_START_FLOW = "Start domain move flow", i.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", i.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", i.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", i.DOMAIN_MOVE_SUBMIT = "Submit domain move", i.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", i.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", i.DOMAIN_MOVE_CANCEL = "Domain move cancel", i.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", i.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", i.ACTION_CENTER_NAVIGATE = "Navigate to actions center", i.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", i
			}({});

			function c(i, d, a) {
				if (!(d == null ? void 0 : d.name)) return null;
				u().sendEvent(i, f({
					domain: {
						name: d.name,
						premium: (0, l.Uy)(d == null ? void 0 : d.premiumType),
						paymentExpiresAt: r()(d == null ? void 0 : d.paymentExpiresAt).format()
					},
					category: "registrar"
				}, a))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				HX: function() {
					return s
				},
				Re: function() {
					return b
				},
				Rh: function() {
					return m
				},
				hX: function() {
					return d
				},
				s_: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/react/react"),
				u = t.n(o),
				l = t("../react/pages/home/members/utils.ts"),
				f = t("../react/utils/translator.tsx");
			let s = function(y) {
				return y.UNKNOWN = "unknown", y.WORKERS = "workers", y.ACCESS_APPS = "access_apps", y.ACCESS_IDP = "access_ipd", y
			}({});
			const g = [{
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

			function v(y) {
				return {
					key: "com.cloudflare.edge.worker.script." + y.id,
					name: y.name + (y.environment ? ` (${y.environment})` : ""),
					type: s.WORKERS
				}
			}

			function n(y) {
				const O = y;
				return {
					key: "com.cloudflare.edge.access.app." + O.id,
					name: O.name,
					type: s.ACCESS_APPS
				}
			}
			const c = {
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

			function i(y) {
				const O = y,
					_ = c[O.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + O.id,
					name: `${_||"Unknown Type"}${O.name?" - "+O.name:""}`,
					type: s.ACCESS_IDP
				}
			}
			const d = async (y, O, _) => O == s.WORKERS ? (await a(`/accounts/${y}/workers/scripts-search?name=${_}&perPage=10`)).body.result.map(C => ({
				id: C.id,
				name: C.service_name || C.script_name,
				environment: C.environment_name
			})).map(v) : O == s.ACCESS_APPS ? (await a(`/accounts/${y}/access/apps?name=${_}`)).body.result.map(n) : O == s.ACCESS_IDP ? (await a(`/accounts/${y}/access/identity_providers`)).body.result.map(i) : [];
			async function a(y) {
				try {
					return await (0, e.get)(y, {
						hideErrorAlert: !0
					})
				} catch (C) {
					var O, _;
					throw ((O = C.body) === null || O === void 0 ? void 0 : O.errors) ? C.body.errors[0].message : C.text ? C.text : ((_ = C.response) === null || _ === void 0 ? void 0 : _.statusText) ? C.response.statusText : "Unexpected error response"
				}
			}
			const m = async (y, O) => {
				const _ = O.split("."),
					C = _.pop(),
					S = _.join(".");
				let L;
				switch (S) {
					case "com.cloudflare.edge.worker.script":
						const M = (await a(`/accounts/${y}/workers/scripts-search/${C}`)).body.result;
						return v({
							id: M.id,
							name: M.service_name || M.script_name,
							environment: M.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return L = await a(`/accounts/${y}/access/identity_providers/${C}`), i(L.body.result);
					case "com.cloudflare.edge.access.app":
						return L = await a(`/accounts/${y}/access/apps/${C}`), n(L.body.result)
				}
			}, I = {
				loading: !0,
				isDisabled: !0
			}, P = () => "production";

			function b(y) {
				const O = (0, l.vq)(y),
					[_, C] = (0, o.useState)(!0),
					[S, L] = (0, o.useState)(g.filter(M => O.find(A => A.meta.scopes === M.scopeKeyPrefix)).map(M => {
						const A = M.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							T = O.filter(D => D.meta.scopes === M.scopeKeyPrefix).find(D => !D.meta.visibility || D.meta.visibility !== "beta");
						return {
							value: M.value,
							label: (0, f.ZP)(M.label_i18n),
							state: A ? I : {
								loading: !1,
								isDisabled: !1
							},
							beta: !T
						}
					}));
				return (0, o.useEffect)(() => {
					(async () => {
						try {
							await d(y, s.ACCESS_APPS, ""), I.isDisabled = !1
						} catch (M) {
							M.startsWith("access.api.error.not_enabled") ? I.disableInfo = (0, f.ZP)("policy.granular_resources.type.access.not_enabled") : I.error = M
						}
						I.loading = !1, L([...S])
					})()
				}, []), (0, o.useEffect)(() => {
					const M = S.find(A => A.state.loading);
					C(!!M)
				}, [S]), {
					types: S,
					isLoading: _
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Ey: function() {
					return s
				},
				F4: function() {
					return a
				},
				Fq: function() {
					return P
				},
				Go: function() {
					return c
				},
				Lc: function() {
					return _
				},
				Np: function() {
					return v
				},
				Rl: function() {
					return n
				},
				Sb: function() {
					return i
				},
				Sw: function() {
					return O
				},
				Sz: function() {
					return y
				},
				Ti: function() {
					return C
				},
				Uw: function() {
					return I
				},
				Zl: function() {
					return m
				},
				jk: function() {
					return b
				},
				r6: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				o = (0, e.BC)`${r}/members`,
				u = (0, e.BC)`${o}/invite`,
				l = (0, e.BC)`${o}/invite/${"memberId"}`,
				f = (0, e.BC)`${o}/add-policy/${"memberId"}`,
				s = "com.cloudflare.api.account",
				v = s + "." + "zone",
				n = v + ".",
				c = 100,
				i = 200,
				d = 5,
				a = 300,
				m = "INVITE_TOAST",
				I = "00000000000000000000000000000000",
				P = "usergroups-ui",
				b = {
					account: r,
					members: o,
					inviteMembers: u,
					editMember: l,
					addPolicy: f
				},
				y = {
					allow: "allow",
					deny: "deny"
				},
				O = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				_ = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				C = {
					accountId: "",
					effect: y.allow,
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
					return y
				},
				Co: function() {
					return P
				},
				JP: function() {
					return b
				},
				Ld: function() {
					return i
				},
				YW: function() {
					return g
				},
				_k: function() {
					return d
				},
				c$: function() {
					return v
				},
				rC: function() {
					return S
				},
				vq: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				r = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				o = t("../react/pages/home/members/constants.ts");

			function u(L) {
				for (var M = 1; M < arguments.length; M++) {
					var A = arguments[M] != null ? Object(arguments[M]) : {},
						T = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(A).filter(function(D) {
						return Object.getOwnPropertyDescriptor(A, D).enumerable
					})), T.forEach(function(D) {
						l(L, D, A[D])
					})
				}
				return L
			}

			function l(L, M, A) {
				return M = f(M), M in L ? Object.defineProperty(L, M, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[M] = A, L
			}

			function f(L) {
				var M = s(L, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function s(L, M) {
				if (typeof L != "object" || L === null) return L;
				var A = L[Symbol.toPrimitive];
				if (A !== void 0) {
					var T = A.call(L, M || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(L)
			}
			const g = () => u({}, o.Ti),
				v = () => u({}, o.Lc, {
					scopes: [g()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = L => L.map(M => ({
					scope: {
						key: M,
						objects: [{
							key: "*"
						}]
					}
				})),
				c = (L, M, A) => {
					var T;
					let D = [],
						k = [];
					const U = [],
						X = [];
					L.scopes.forEach(ue => {
						if (ue.mode === o.Sw.all) A ? D.push({
							id: A
						}) : D.push({
							scope: {
								key: `com.cloudflare.api.account.${M}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (ue.mode === o.Sw.domain_group) {
							const Y = {
								id: ue.resourceGroupId
							};
							ue.effect === o.Sz.allow ? D.push(Y) : k.push(Y)
						} else if (ue.mode === o.Sw.zone) {
							const Y = `${o.Rl}${ue.zoneId}`;
							ue.effect === o.Sz.allow ? U.push(Y) : X.push(Y)
						} else if (ue.mode === o.Sw.granular && ue.granularResourceKey) {
							var z;
							const Y = ue.granularProduct,
								B = `${(z=r.s_.find(w=>w.value===Y))===null||z===void 0?void 0:z.scopeSubsetOfPrefix}.${M}`;
							D.push({
								scope: {
									key: `${ue.granularResourceKey}`,
									subset_of: [{
										key: `${B}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), U.length && (D = D.concat(n(U))), X.length && (k = k.concat(n(X)));
					const se = (T = L.permission_groups) === null || T === void 0 ? void 0 : T.map(ue => ({
							id: ue
						})),
						pe = [];
					return pe.push({
						access: o.Sz.allow,
						permission_groups: se,
						resource_groups: D
					}), k.length && pe.push({
						access: o.Sz.deny,
						permission_groups: se,
						resource_groups: k
					}), pe
				},
				i = L => L.map(M => {
					var A;
					return {
						access: M.access,
						permission_groups: M.permission_groups.map(T => ({
							id: T.id
						})),
						resource_groups: (A = M.resource_groups) === null || A === void 0 ? void 0 : A.map(T => ({
							scope: {
								key: T.scope.key,
								objects: T.scope.objects
							},
							id: T.id
						}))
					}
				}),
				d = (L, M, A, T) => {
					const D = L.auto_accept;
					let k = [];
					return k = k.concat(c(L, M, A)), T && (k = k.concat(i(T))), {
						auto_accept: D,
						status: D ? "accepted" : "pending",
						policies: k
					}
				},
				a = L => {
					const M = L.split(".");
					return M[M.length - 1]
				},
				m = L => {
					var M, A;
					const T = L == null ? void 0 : L.access;
					let D = [],
						k = L == null || (M = L.resource_groups) === null || M === void 0 ? void 0 : M.map(U => {
							var X;
							const se = I(U);
							if ((U == null || (X = U.meta) === null || X === void 0 ? void 0 : X.editable) === "false") return {
								effect: T,
								mode: o.Sw.all,
								accountId: a(U.id)
							};
							if (se) {
								var pe;
								return {
									effect: T,
									mode: o.Sw.granular,
									granularProduct: se.value,
									granularResourceKey: U == null || (pe = U.scope) === null || pe === void 0 ? void 0 : pe.key
								}
							} else if (!U.name) U.scope.key.startsWith(o.Rl) ? D.push({
								key: U.scope.key
							}) : D = D.concat(U.scope.objects);
							else return {
								effect: T,
								mode: o.Sw.domain_group,
								resourceGroupId: a(U.id)
							}
						}).filter(U => U);
					if ((A = D) === null || A === void 0 ? void 0 : A.length) {
						let U = D.map(X => {
							const se = a(X.key);
							return {
								effect: T,
								mode: o.Sw.zone,
								zoneId: se
							}
						});
						k = k.length ? U.concat(k) : U
					}
					return k
				},
				I = L => {
					var M, A, T, D;
					const k = L == null || (M = L.scope) === null || M === void 0 ? void 0 : M.key.split(".").slice(0, -1).join("."),
						U = L == null || (A = L.scope) === null || A === void 0 || (T = A.subset_of) === null || T === void 0 || (D = T[0]) === null || D === void 0 ? void 0 : D.key.split(".").slice(0, -1).join(".");
					return r.s_.find(X => X.scopeKeyPrefix === k && X.scopeSubsetOfPrefix === U)
				},
				P = L => {
					if (!(L == null ? void 0 : L.length)) return [];
					const M = [];
					return L.forEach(A => {
						var T;
						(T = A.resource_groups) === null || T === void 0 || T.forEach(D => {
							var k, U;
							((k = D.scope) === null || k === void 0 || (U = k.key) === null || U === void 0 ? void 0 : U.startsWith(o.Rl)) && M.push(a(D.scope.key))
						})
					}), M
				},
				b = L => {
					if (!(L == null ? void 0 : L.length)) return [];
					const M = [];
					return L.forEach(A => {
						var T;
						(T = A.resource_groups) === null || T === void 0 || T.forEach(D => {
							var k, U;
							if (!((k = D.scope) === null || k === void 0 || (U = k.key) === null || U === void 0 ? void 0 : U.startsWith(o.Rl))) {
								var X;
								const pe = (X = D.scope) === null || X === void 0 ? void 0 : X.objects;
								for (let ue = 0; ue < (pe == null ? void 0 : pe.length) && ue < o.r6; ue++) {
									var se;
									((se = pe[ue].key) === null || se === void 0 ? void 0 : se.startsWith(o.Rl)) && M.push(a(pe[ue].key))
								}
							}
						})
					}), M
				},
				y = L => {
					var M;
					if (!(L == null ? void 0 : L.length)) return null;
					const A = (M = L[0]) === null || M === void 0 ? void 0 : M.permission_groups.map(U => U.id);
					let T, D;
					L == null || L.forEach(U => {
						U.access === o.Sz.allow && (T = U), U.access === o.Sz.deny && (D = U)
					});
					let k = [];
					return T && (k = m(T)), D && (k = k.concat(m(D))), {
						permission_groups: A,
						scopes: k
					}
				},
				O = "permission-groups-",
				_ = new Map,
				C = L => {
					if (!L) return [];
					const M = _.get(L);
					if (M) return M;
					const A = e.E.get(`${O}${L}`);
					return _.set(L, A), A
				},
				S = (L, M) => {
					const A = [];
					for (let T = 0; T < sessionStorage.length; T++) {
						const D = sessionStorage.key(T);
						(D == null ? void 0 : D.startsWith(O)) && A.push(D)
					}
					return A.length >= 5 && e.E.remove(A[0]), e.E.set(`${O}${L}`, M)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(F, E, t) {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(F, E, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return s
				},
				L9: function() {
					return n
				},
				N3: function() {
					return v
				},
				zE: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(c) {
				for (var i = 1; i < arguments.length; i++) {
					var d = arguments[i] != null ? Object(arguments[i]) : {},
						a = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(d).filter(function(m) {
						return Object.getOwnPropertyDescriptor(d, m).enumerable
					})), a.forEach(function(m) {
						u(c, m, d[m])
					})
				}
				return c
			}

			function u(c, i, d) {
				return i = l(i), i in c ? Object.defineProperty(c, i, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = d, c
			}

			function l(c) {
				var i = f(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function f(c, i) {
				if (typeof c != "object" || c === null) return c;
				var d = c[Symbol.toPrimitive];
				if (d !== void 0) {
					var a = d.call(c, i || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			let s = function(c) {
					return c.PURCHASE_WORKERS_PAID = "navigate to workers plan page", c.LIST_CONFIGS = "list hyperdrive configs", c.SEARCH_CONFIGS = "search hyperdrive configs", c.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", c.VIEW_CONFIG_DETAILS = "view hyperdrive config details", c.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", c.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", c.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", c.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", c.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", c.CLICK_QUICK_LINK = "click hyperdrive quick link", c.CLICK_DISCORD = "click hyperdrive discord", c.CLICK_COMMUNITY = "click hyperdrive community", c
				}({}),
				g = function(c) {
					return c[c["connection string"] = 0] = "connection string", c[c.manual = 1] = "manual", c
				}({}),
				v = function(c) {
					return c[c.success = 0] = "success", c[c.failure = 1] = "failure", c
				}({});
			const n = (c, i = {}) => {
				r().sendEvent(c, o({}, i, {
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
					return i
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
					return c
				},
				po: function() {
					return d
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts");
			const u = "sourcing_kit_enabled",
				l = "sourcing_kit_waitlist",
				f = "images",
				s = "unified_images_enabled",
				g = "c2pa_polish",
				v = "CloudflareImages",
				n = b => !!(0, r.BF)(b, "images.transformations_enabled"),
				c = b => Boolean((0, r.BF)(b, "images.enabled")),
				i = b => {
					const y = (0, r.BF)(b, "images.storage");
					return typeof y == "number" && y > 0
				},
				d = b => Boolean((0, r.BF)(b, "contract.customer_enabled")),
				a = b => Boolean((0, e.oI)(b, f, u)),
				m = b => Boolean((0, o.Le)(b, v, u)),
				I = b => Boolean(getAccountFlipperFlag(b, v, s)),
				P = b => Boolean((0, o.Le)(b, v, g))
		},
		"../react/pages/magic/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				GF: function() {
					return d
				},
				H3: function() {
					return s
				},
				H8: function() {
					return l
				},
				J: function() {
					return m
				},
				Nz: function() {
					return g
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
					return b
				},
				Xg: function() {
					return c
				},
				Y_: function() {
					return i
				},
				_j: function() {
					return o
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
				l = y => [{
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
				s = y => [{
					value: "unidirectional",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: y("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				g = "magic-transit",
				v = "magic-wan",
				n = "gre_tunnel",
				c = "ipsec_tunnel",
				i = "interconnect",
				d = 64,
				a = 1476,
				m = "mid",
				I = "reply",
				P = y => [{
					value: void 0,
					label: y("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: y("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: y("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				b = y => [{
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
		"../react/pages/magic/network-monitoring/constants.ts": function(F, E, t) {
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
		"../react/pages/magic/overview/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				VZ: function() {
					return u
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
					return b
				},
				rD: function() {
					return A
				},
				oT: function() {
					return a
				},
				i2: function() {
					return T
				},
				x1: function() {
					return f
				},
				lW: function() {
					return g
				},
				UA: function() {
					return C
				},
				K5: function() {
					return i
				},
				Ii: function() {
					return O
				},
				PJ: function() {
					return M
				},
				bK: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				l = t("../node_modules/@cloudflare/elements/es/index.js");
			const f = () => r().createElement(s, null, r().createElement("svg", {
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
				g = () => r().createElement(v, null, r().createElement("svg", {
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
				v = (0, o.createComponent)(({
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
				n = () => r().createElement(c, null, r().createElement(l.Ei, {
					alt: "airplane",
					src: u,
					width: "85%"
				})),
				c = (0, o.createComponent)(({
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
				i = () => r().createElement(d, null, r().createElement("svg", {
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
				d = (0, o.createComponent)(({
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
				m = (0, o.createComponent)(({
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
				P = (0, o.createComponent)(({
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
				b = () => r().createElement(y, null, r().createElement("svg", {
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
				y = (0, o.createComponent)(({
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
				O = () => r().createElement(_, null, r().createElement("svg", {
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
				C = () => r().createElement(S, null, r().createElement("svg", {
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
				S = (0, o.createComponent)(({
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
				L = () => r().createElement("svg", {
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
				M = () => r().createElement("svg", {
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
				A = () => r().createElement("svg", {
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
				T = () => r().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				A2: function() {
					return s
				},
				He: function() {
					return l
				},
				N$: function() {
					return f
				},
				Qq: function() {
					return o
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
				o = "login-apple-jwt",
				u = "cf-test",
				l = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				f = g => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: g ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: g ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: g ? e.rD : e.PJ
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
		"../react/pages/page-rules/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				_: function() {
					return o
				},
				c: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let o = function(l) {
				return l.TEMPLATE_SELECTED = "template selected", l.TEMPLATE_PRODUCT_SELECTED = "template product selected", l.TEMPLATE_SAVE_DRAFT = "template save draft", l.TEMPLATE_CANCEL = "template cancel", l.TEMPLATE_DEPLOY = "template deploy", l
			}({});
			const u = (l, f) => r().sendEvent(l, {
				template_name: f
			})
		},
		"../react/pages/pages/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				A: function() {
					return I
				},
				C1: function() {
					return v
				},
				Dp: function() {
					return U
				},
				GF: function() {
					return A
				},
				HD: function() {
					return y
				},
				IK: function() {
					return l
				},
				L7: function() {
					return o
				},
				Li: function() {
					return m
				},
				Ni: function() {
					return S
				},
				OG: function() {
					return z
				},
				QF: function() {
					return pe
				},
				QV: function() {
					return C
				},
				Sx: function() {
					return O
				},
				Ub: function() {
					return se
				},
				X3: function() {
					return c
				},
				aP: function() {
					return s
				},
				bA: function() {
					return D
				},
				eO: function() {
					return i
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
					return T
				},
				hE: function() {
					return X
				},
				iS: function() {
					return b
				},
				ku: function() {
					return k
				},
				nY: function() {
					return _
				},
				w3: function() {
					return u
				},
				wJ: function() {
					return g
				},
				wp: function() {
					return d
				},
				yu: function() {
					return n
				},
				zF: function() {
					return M
				},
				zG: function() {
					return L
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
				s = "production",
				g = 2e3,
				v = 100,
				n = 350,
				c = 1e7,
				i = ["Success:", "Error:", "Failed:"],
				d = 10,
				a = "_headers",
				m = "_redirects",
				I = "_routes.json",
				P = "_worker.js",
				b = "do-a-barrel-roll",
				y = [a, m, I, P],
				O = 1024 * 1024 * 25,
				_ = 1e3,
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
				S = 1e5,
				L = 75e3,
				M = 2e5,
				A = 15e4,
				T = 3e3,
				D = 2250,
				k = "workers",
				U = "cloudflare_pages_build_caching",
				X = 2;
			let se = function(Y) {
				return Y[Y.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", Y[Y.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", Y[Y.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", Y[Y.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", Y[Y.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", Y[Y.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", Y
			}({});
			const pe = 1,
				ue = 2,
				z = 2
		},
		"../react/pages/pages/routes.ts": function(F, E, t) {
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
		"../react/pages/pipelines/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return s
				},
				L9: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(a) {
						return Object.getOwnPropertyDescriptor(i, a).enumerable
					})), d.forEach(function(a) {
						u(n, a, i[a])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(n, c || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			let s = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				g = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const v = (n, c = {}) => {
				r().sendEvent(n, o({}, c, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return o
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
				u = s => {
					const g = "r2.cloudflarestorage.com";
					switch (s) {
						case "default":
							return g;
						case "eu":
							return `eu.${g}`;
						case "fedramp":
							return `fedramp.${g}`
					}
				},
				l = (s, g) => {
					const v = u(g);
					return `https://${s}.${v}`
				},
				f = (s, g, v) => `${l(s,g)}/${v}`
		},
		"../react/pages/r2/selectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts");
			const u = "r2_migrator_waitlist",
				l = "r2migrator",
				f = "r2",
				s = "r2_storage_migrator",
				g = "r2_storage_migrator",
				v = i => getAccountEntitlement(i, "r2.enabled"),
				n = i => Boolean((0, o.Le)(i, s, u)),
				c = i => Boolean(getAccountFlipperFlagsChanges(i, g, l))
		},
		"../react/pages/secrets-store/resources/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Hf: function() {
					return S
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
					return i
				},
				Oh: function() {
					return P
				},
				Q2: function() {
					return M
				},
				QF: function() {
					return I
				},
				RR: function() {
					return y
				},
				T_: function() {
					return L
				},
				Xm: function() {
					return s
				},
				Zl: function() {
					return A
				},
				dv: function() {
					return l
				},
				fp: function() {
					return c
				},
				jx: function() {
					return C
				},
				nQ: function() {
					return d
				},
				px: function() {
					return b
				},
				tP: function() {
					return o
				},
				vh: function() {
					return a
				},
				wB: function() {
					return D
				},
				z3: function() {
					return T
				},
				zt: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/yup/es/index.js");
			const o = "secrets-store-account-level",
				u = "https://developers.cloudflare.com/secrets-store/",
				l = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				f = 1,
				s = 10,
				g = 100;
			let v = function(k) {
					return k.NAME = "name", k
				}({}),
				n = function(k) {
					return k.NAME = "name", k
				}({});
			const c = {
				initialPaginationState: {
					page: f,
					perPage: s
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
					autoClearQs: !0
				}
			};
			let i = function(k) {
					return k.NAME = "name", k.COMMENT = "comment", k.TAGS = "tags", k.SERVICES = "services", k.STATUS = "status", k
				}({}),
				d = function(k) {
					return k.PENDING = "pending", k.ACTIVE = "active", k.DELETED = "deleted", k
				}({}),
				a = function(k) {
					return k.LIST_SECRETS_STORES = "listSecretsStores", k.LIST_SECRETS = "listSecrets", k.GET_SECRET = "getSecret", k.SECRETS_QUOTA = "secretsQuota", k
				}({}),
				m = function(k) {
					return k.CREATE = "create", k.EDIT = "edit", k.DUPLICATE = "duplicate", k
				}({}),
				I = function(k) {
					return k.WORKERS = "workers", k
				}({});
			const P = "default_secrets_store";
			let b = function(k) {
				return k.CREATE = "create", k.EDIT = "edit", k.DUPLICATE = "duplicate", k.VIEW = "view", k
			}({});
			const y = "delete_operation",
				O = /^[a-zA-Z0-9_-]+$/,
				_ = (k, U, X, se, pe) => r.Ry().shape({
					name: r.Z_().required(k("secrets_store.form.create.errors.name.required")).matches(O, k("secrets_store.form.create.errors.name.invalid_characters")).max(255, k("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", k("secrets_store.form.create.errors.value.required"), ue => U || pe ? !!ue : !0).max(1024, k("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, k("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(I), k("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				C = (k, U, X, se, pe) => r.Ry().shape({
					secrets: r.IX().of(_(k, U, X, se, pe))
				}),
				S = {
					name: "",
					value: "",
					scopes: I.WORKERS,
					comment: ""
				},
				L = "secrets-store.store.secret";
			let M = function(k) {
				return k.DUPLICATE = "duplicate", k.DEPLOY = "deploy", k
			}({});
			const A = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let T = function(k) {
					return k.CREATE_SECRET = "create secrets store secret", k.EDIT_SECRET = "edit secrets store secret", k.DUPLICATE_SECRET = "duplicate secrets store secret", k.DELETE_SECRET = "delete secrets store secret", k.BIND_SECRET = "open secrets store binding drawer", k
				}({}),
				D = function(k) {
					return k.SECRETS_STORE = "secrets store main", k.WORKERS_BINDING = "workers binding drawer", k
				}({})
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Gk: function() {
					return i
				},
				LA: function() {
					return v
				},
				Wk: function() {
					return c
				},
				_V: function() {
					return s
				},
				c5: function() {
					return n
				},
				om: function() {
					return g
				}
			});
			var e = t("../react/pages/security-center/BlockedContent/types.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function o(d) {
				for (var a = 1; a < arguments.length; a++) {
					var m = arguments[a] != null ? Object(arguments[a]) : {},
						I = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(m).filter(function(P) {
						return Object.getOwnPropertyDescriptor(m, P).enumerable
					})), I.forEach(function(P) {
						u(d, P, m[P])
					})
				}
				return d
			}

			function u(d, a, m) {
				return a = l(a), a in d ? Object.defineProperty(d, a, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[a] = m, d
			}

			function l(d) {
				var a = f(d, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(d, a) {
				if (typeof d != "object" || d === null) return d;
				var m = d[Symbol.toPrimitive];
				if (m !== void 0) {
					var I = m.call(d, a || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(d)
			}
			const s = "blocked-content-table-tooltip",
				g = {
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
				c = {
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
					filters: Object.values(e.GH).reduce((d, a) => o({}, d, {
						[a]: a
					}), {})
				};
			let i = function(d) {
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
					return o
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
				o = function(f) {
					return f.Domain = "domain", f.Status = "status", f.BlockType = "blockType", f
				}({}),
				u = function(f) {
					return f.EnforcementDate = "enforcementDate", f.BlockType = "blockType", f.Hostname = "hostname", f.Status = "status", f
				}({}),
				l = function(f) {
					return f.Removed = "removed", f.Misclassified = "misclassified", f
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(F, E, t) {
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
			let o = function(u) {
				return u.LOAD_THREAT_EVENTS = "load threat events", u.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", u.THREAT_EVENTS_FILTERS = "threat events filters applied", u.ABUSE_REPORT_BUTTON_CLICK = "clicked abuse report button", u.ABUSE_REPORT_SUBMIT_CLICK = "clicked submit abuse report button", u.ABUSE_REPORT_SUBMIT_FAILED = "abuse report submission failed", u.ABUSE_REPORT_SUBMIT_SUCCESS = "abuse report submitted successfully", u
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function(F, E, t) {
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
				u = {
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
		"../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AS: function() {
					return f
				},
				IK: function() {
					return c
				},
				Ki: function() {
					return o
				},
				Lz: function() {
					return i
				},
				nT: function() {
					return g
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
					return s
				}
			});
			var e = t("../react/pages/security/analytics/resources/labels.ts"),
				r = t("../react/common/constants/analytics/botScoreSrc.ts");
			const o = ["block", "challenge", "jschallenge", "managedChallenge"],
				u = ["miss", "expired", "bypass", "dynamic"],
				l = a => Object.fromEntries(Object.entries(a).map(([m, I]) => [I, m])),
				f = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				s = l(f),
				g = {
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
				v = l(g),
				n = l(r.EG);
			let c = function(a) {
				return a.SAMPLED = "sampled", a.RAW = "raw", a
			}({});
			const i = "security-analytics-log-explorer";
			let d = function(a) {
				return a.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', a.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', a.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', a.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', a.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', a
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Fj: function() {
					return g
				},
				kq: function() {
					return s
				},
				xr: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(a) {
						return Object.getOwnPropertyDescriptor(i, a).enumerable
					})), d.forEach(function(a) {
						u(n, a, i[a])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(n, c || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const g = {
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
				v = ({
					name: n,
					category: c = "user journey",
					product: i = s.MAIN,
					productName: d,
					additionalData: a
				}) => {
					r().sendEvent(n, o({
						category: c,
						product: i,
						productName: d
					}, a || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Fm: function() {
					return u
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
				u = "Bots"
		},
		"../react/pages/security/overview/resources/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AZ: function() {
					return u
				},
				Ht: function() {
					return o
				},
				Kx: function() {
					return e
				},
				S: function() {
					return r
				}
			});
			let e = function(l) {
				return l.NAME = "description", l.SOURCE = "source", l.LAST_UPDATE = "lastUpdatedAt", l.ACTIVITY = "activity", l
			}({});
			const r = 5;
			let o = function(l) {
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
					return A
				},
				FV: function() {
					return ue
				},
				KH: function() {
					return L
				},
				Ks: function() {
					return B
				},
				Lj: function() {
					return W
				},
				MC: function() {
					return c
				},
				Mq: function() {
					return S
				},
				OV: function() {
					return pe
				},
				Oq: function() {
					return M
				},
				QM: function() {
					return _
				},
				SI: function() {
					return Y
				},
				SJ: function() {
					return P
				},
				Sk: function() {
					return k
				},
				Ti: function() {
					return w
				},
				Uc: function() {
					return C
				},
				Uq: function() {
					return g
				},
				Uv: function() {
					return se
				},
				V0: function() {
					return v
				},
				VT: function() {
					return a
				},
				YC: function() {
					return U
				},
				j$: function() {
					return b
				},
				qc: function() {
					return I
				},
				sV: function() {
					return T
				},
				sW: function() {
					return z
				},
				u8: function() {
					return d
				},
				v5: function() {
					return n
				},
				xg: function() {
					return X
				},
				yd: function() {
					return O
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				o = t("../react/pages/security/page-shield/resources/types.ts");

			function u(x) {
				for (var K = 1; K < arguments.length; K++) {
					var ee = arguments[K] != null ? Object(arguments[K]) : {},
						te = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(ee).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(ee, ne).enumerable
					})), te.forEach(function(ne) {
						l(x, ne, ee[ne])
					})
				}
				return x
			}

			function l(x, K, ee) {
				return K = f(K), K in x ? Object.defineProperty(x, K, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[K] = ee, x
			}

			function f(x) {
				var K = s(x, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function s(x, K) {
				if (typeof x != "object" || x === null) return x;
				var ee = x[Symbol.toPrimitive];
				if (ee !== void 0) {
					var te = ee.call(x, K || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(x)
			}
			const g = 50,
				v = 9,
				n = "copy script url page shield",
				c = "disable page shield",
				i = "click documentation link",
				d = "enable page shield",
				a = "filter search page shield",
				m = "filter search view all page shield",
				I = "hover score tooltip page shield",
				P = "open alert modal page shield",
				b = "change pagination page shield",
				y = "close script modal page shield",
				O = "open script modal page shield",
				_ = "select alert type page shield",
				C = "sort column page shield",
				S = {
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
					STARTS_WITH: r.Gn.startsWith,
					ENDS_WITH: r.Gn.endsWith,
					EQUALS: r.Gn.equals,
					CONTAINS: r.Gn.contains,
					DOES_NOT_CONTAIN: r.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: r.Gn.in
				},
				M = {
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
				A = u({}, M, {
					urls: u({}, M.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				T = {
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
			let D = function(x) {
				return x.SECURITY_THREATS = "Security Threats", x.C2_BOTNET = "C2 & Botnet", x.CRYPTOMINING = "Cryptomining", x.MALWARE = "Malware", x.PHISHING = "Phishing", x.SPYWARE = "Spyware", x.DGA_DOMAINS = "DGA Domains", x.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", x
			}({});
			const k = "https://www.cloudflare.com/plans/enterprise/contact/",
				U = {
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
				X = {
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
					[o.I1.STYLE]: "firewall.page_shield.policies.table.style",
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
				pe = {
					[o.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[o.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				ue = {
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
				Y = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				W = {
					[o.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[o.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[o.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				B = {
					[o.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[o.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[o.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				w = {
					[o.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[o.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[o.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
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
					return O.Xe
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
					return O.k2
				},
				$g: function() {
					return O.$g
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
					return O.I1
				},
				Wq: function() {
					return O.Wq
				},
				jf: function() {
					return O.jf
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
					return O.R$
				},
				pG: function() {
					return I
				},
				Ar: function() {
					return m
				},
				Sk: function() {
					return u.Sk
				},
				gY: function() {
					return P
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
				CI: function() {
					return i
				},
				p0: function() {
					return d
				},
				xl: function() {
					return g
				},
				Tb: function() {
					return s
				},
				h3: function() {
					return b
				},
				xq: function() {
					return H
				},
				SQ: function() {
					return K
				},
				C0: function() {
					return ee
				},
				av: function() {
					return S
				},
				W3: function() {
					return _
				},
				WO: function() {
					return T
				},
				Dk: function() {
					return se
				},
				we: function() {
					return Y
				},
				Yt: function() {
					return w
				},
				ex: function() {
					return B
				},
				E1: function() {
					return W
				},
				e0: function() {
					return ue
				},
				UH: function() {
					return D
				},
				Qt: function() {
					return z
				},
				K$: function() {
					return k
				},
				dm: function() {
					return M
				},
				oK: function() {
					return U
				},
				qZ: function() {
					return x
				},
				_4: function() {
					return te
				},
				qo: function() {
					return ne
				},
				CB: function() {
					return f
				},
				ti: function() {
					return a
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(r),
				u = t("../react/pages/security/page-shield/resources/constants.ts");
			const l = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", $ => (o().sendEvent(u.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), $)),
				f = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", $ => (o().sendEvent(u.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), $)),
				s = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", $ => (o().sendEvent(u.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), $)),
				g = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				v = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", $ => (o().sendEvent(u.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), $)),
				n = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				c = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", $ => (o().sendEvent(u.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), $)),
				i = (0, e.ZP)("pageShieldPolicies", "get", "/zones/(zoneId)/page_shield/policies").on("success", $ => (o().sendEvent(u.FV.VIEW_PAGE_SHIELD_POLICIES, {
					category: "user journey",
					product: "Page shield"
				}), $)),
				d = (0, e.ZP)("pageShieldPolicy", "get", "/zones/(zoneId)/page_shield/policies/(policiesId)"),
				a = (0, e.ZP)("pageShieldPolicy", "put", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", $ => (o().sendEvent(u.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "update"
				}), $)),
				m = (0, e.ZP)("pageShieldPolicy", "delete", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", $ => (o().sendEvent(u.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "delete"
				}), $)),
				I = (0, e.ZP)("pageShieldPolicy", "post", "/zones/(zoneId)/page_shield/policies").on("success", $ => (o().sendEvent(u.FV.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "create"
				}), $)),
				P = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				b = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var y = t("../react/app/redux/normalizer.js"),
				O = t("../react/pages/security/page-shield/resources/types.ts");
			const _ = $ => $.pageShield.configuration,
				C = $ => {
					var oe;
					return (oe = $.pageShield.configuration.data) === null || oe === void 0 ? void 0 : oe.enabled
				},
				S = $ => {
					var oe;
					return (oe = _($)) === null || oe === void 0 ? void 0 : oe.data
				},
				L = $ => $.pageShield.scripts,
				M = $ => $.pageShield.script,
				A = $ => $.pageShield.connections,
				T = $ => $.pageShield.connection,
				D = $ => $.pageShield.policies,
				k = $ => $.pageShield.policy,
				U = (0, y.P1)("pageShieldScripts", L),
				X = (0, y.P1)("pageShieldScript", M),
				se = (0, y.P1)("pageShieldConnections", A),
				pe = (0, y.P1)("pageShieldConnection", T),
				ue = (0, y.P1)("pageShieldPolicies", D),
				z = (0, y.P1)("pageShieldPolicy", k),
				Y = ($, oe) => $ === O.Wq.SCRIPT_MONITOR ? U(oe) || [] : se(oe) || [],
				W = ($, oe) => $ === O.Wq.SCRIPT_MONITOR ? L(oe) || [] : A(oe) || [],
				B = ($, oe) => $ === O.Wq.SCRIPT_MONITOR ? X(oe) : pe(oe),
				w = $ => $.pageShield.domainIntel,
				x = $ => $.pageShield.whoIsRecord,
				K = ($, oe, ce) => {
					var ge;
					const me = Object.values(ce).map(be => ({
						key: be,
						label: u.Uv[be],
						score: $[be]
					})).filter(be => be.score !== void 0 && be.score <= oe);
					return oe === u.V0 && me.length === 0 && ((ge = $.js_integrity_score) !== null && ge !== void 0 ? ge : 100) <= oe && me.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), me
				},
				ee = ($, oe) => Object.values(oe).filter(ce => $[ce] === !0).map(ce => u.OV[ce]),
				te = $ => $ === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				ne = ($, oe) => $[O.$g.MagecartScore] !== void 0 && $[O.$g.MagecartScore] <= oe || $[O.$g.MalwareScore] !== void 0 && $[O.$g.MalwareScore] <= oe || $[O.$g.CryptominingScore] !== void 0 && $[O.$g.CryptominingScore] <= oe || $.js_integrity_score !== void 0 && $.js_integrity_score <= oe,
				R = ["cdn.jsdelivr.net", "unpkg.com"],
				V = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				H = $ => {
					if ($.includes("@latest")) {
						const ce = $.split("@latest");
						if (ce.length != 2) return;
						const ge = ce[0].length,
							me = ge + "@latest".length;
						return [ge, me]
					}
					if (!!R.some(ce => $.includes(ce)))
						for (const ce of V) {
							const ge = $.match(ce);
							if (!ge) continue;
							const me = ge.index;
							if (me === 0) return null;
							const be = me + ge[0].length;
							return [me, be]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
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
					return g
				},
				Xe: function() {
					return f
				},
				jf: function() {
					return s
				},
				k2: function() {
					return c
				}
			});

			function e(i) {
				for (var d = 1; d < arguments.length; d++) {
					var a = arguments[d] != null ? Object(arguments[d]) : {},
						m = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(a).filter(function(I) {
						return Object.getOwnPropertyDescriptor(a, I).enumerable
					})), m.forEach(function(I) {
						r(i, I, a[I])
					})
				}
				return i
			}

			function r(i, d, a) {
				return d = o(d), d in i ? Object.defineProperty(i, d, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = a, i
			}

			function o(i) {
				var d = u(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(i, d) {
				if (typeof i != "object" || i === null) return i;
				var a = i[Symbol.toPrimitive];
				if (a !== void 0) {
					var m = a.call(i, d || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			let l = function(i) {
				return i.BASE_URI = "base-uri", i.CHILD = "child-src", i.CONNECT = "connect-src", i.DEFAULT = "default-src", i.FONT = "font-src", i.FORM_ACTION = "form-action", i.FRAME = "frame-src", i.FRAME_ANCESTORS = "frame-ancestors", i.IMAGE = "img-src", i.MANIFEST = "manifest-src", i.MEDIA = "media-src", i.OBJECT = "object-src", i.SCRIPT = "script-src", i.STYLE = "style-src", i.WORKER = "worker-src", i.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", i
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
			let s = function(i) {
					return i.MONITOR = "monitor", i.POLICIES = "policies", i.SETTINGS = "settings", i
				}({}),
				g = function(i) {
					return i.SCRIPT_MONITOR = "script", i.CONNECTION_MONITOR = "connection", i.COOKIE_MONITOR = "cookie", i
				}({}),
				v = function(i) {
					return i.CryptominingScore = "cryptomining_score", i.MalwareScore = "malware_score", i.MagecartScore = "magecart_score", i
				}({}),
				n = function(i) {
					return i.DataflowScore = "dataflow_score", i.ObfuscationScore = "obfuscation_score", i
				}({}),
				c = function(i) {
					return i.DomainMalicious = "domain_reported_malicious", i.UrlMalicious = "url_reported_malicious", i
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
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
					return d
				},
				pR: function() {
					return I
				},
				pV: function() {
					return _
				},
				rj: function() {
					return y
				},
				yR: function() {
					return C
				},
				zf: function() {
					return b
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				r = t("../../../common/util/types/src/api/phases/fields.tsx"),
				o = t("webpack/sharing/consume/default/react/react"),
				u = t.n(o),
				l = t("../react/utils/translator.tsx"),
				f = t("../react/pages/security/resources/types.ts"),
				s = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				g = t("../node_modules/@cloudflare/elements/es/index.js");

			function v(S) {
				for (var L = 1; L < arguments.length; L++) {
					var M = arguments[L] != null ? Object(arguments[L]) : {},
						A = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(M).filter(function(T) {
						return Object.getOwnPropertyDescriptor(M, T).enumerable
					})), A.forEach(function(T) {
						n(S, T, M[T])
					})
				}
				return S
			}

			function n(S, L, M) {
				return L = c(L), L in S ? Object.defineProperty(S, L, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[L] = M, S
			}

			function c(S) {
				var L = i(S, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function i(S, L) {
				if (typeof S != "object" || S === null) return S;
				var M = S[Symbol.toPrimitive];
				if (M !== void 0) {
					var A = M.call(S, L || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(S)
			}
			const d = 10;
			let a = function(S) {
					return S.MTLS_ACCESS = "mTLS-enforced authentication", S.ZONE_LOCKDOWN = "Zone lockdown", S.USER_AGENT = "User agent blocking", S.EMAIL_VALIDITY = "Disposable email checks", S.IP_BASED = "IP-based rule", S.GEOGRAPHY_BASE = "Geography-based rule", S
				}({}),
				m = function(S) {
					return S.LEAKED_CREDENTIALS = "Leaked Credentials Checks", S
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
				b = {
					[f.X.UI_SECTION]: S => ({
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
									to: `/${S.account.id}/${S.name}/ssl-tls/client-certificates`
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
								Components: [g.ZC, e.QV],
								applyMarkdown: !0,
								componentProps: [{
									display: "inline"
								}, {
									to: `/${S.account.id}/configurations/lists`
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
								Components: [g.ZC, e.QV],
								componentProps: [{
									display: "inline"
								}, {
									to: `/${S.account.id}/configurations/lists`
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
									to: `/${S.account.id}/configurations/lists`
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
				y = {
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
			let O = function(S) {
				return S.DISCOVERY = "discovery", S.SEQUENCES = "sequences", S.SCHEMA_VALIDATION = "schema-validation", S.SETTINGS = "settings", S.API_RULES = "api-rules", S.UPGRADE = "upgrade", S
			}({});
			const _ = v({}, s.g, {
				[r.df.HttpRequestFirewallManaged]: v({}, s.g[r.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[r.df.HttpRequestFirewallCustom]: v({}, s.g[r.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[r.df.HttpRateLimit]: v({}, s.g[r.df.HttpRateLimit], {
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
			let C = function(S) {
				return S.APP_SEC_MVP = "app-security-navigation-mvp", S
			}({})
		},
		"../react/pages/security/resources/types.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				X: function() {
					return e
				}
			});
			let e = function(r) {
				return r.UI_SECTION = "UI_SECTION", r.WAF_RULES = "WAF_RULES", r
			}({})
		},
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				j: function() {
					return g
				},
				y: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(v) {
				for (var n = 1; n < arguments.length; n++) {
					var c = arguments[n] != null ? Object(arguments[n]) : {},
						i = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(c).filter(function(d) {
						return Object.getOwnPropertyDescriptor(c, d).enumerable
					})), i.forEach(function(d) {
						u(v, d, c[d])
					})
				}
				return v
			}

			function u(v, n, c) {
				return n = l(n), n in v ? Object.defineProperty(v, n, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[n] = c, v
			}

			function l(v) {
				var n = f(v, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function f(v, n) {
				if (typeof v != "object" || v === null) return v;
				var c = v[Symbol.toPrimitive];
				if (c !== void 0) {
					var i = c.call(v, n || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(v)
			}
			let s = function(v) {
				return v.CLICK_OPT_IN = "click opt in security navigation", v.CLICK_OPT_IN_BUTTON = "click opt in button", v.CLICK_OPT_OUT_BUTTON = "click opt out button", v.CLICK_NEXT_STEP = "click opt in next step", v.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", v.DISPLAY_MODAL = "display opt in modal", v.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", v.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", v.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", v
			}({});
			const g = (v, n = {}) => {
				r().sendEvent(v, o({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
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
					return g
				},
				F3: function() {
					return m
				},
				JP: function() {
					return o
				},
				O_: function() {
					return c
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
					return d
				},
				ll: function() {
					return f
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
			const o = async b => {
				var y, O;
				const _ = await (0, e.get)(`/zones/${b}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((y = _ == null ? void 0 : _.body) === null || y === void 0 || (O = y.result) === null || O === void 0 ? void 0 : O.value) === "enabled"
			}, u = async (b, y) => (await (0, e.post)(`/zones/${b}/content-upload-scan/${y?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), y), l = async b => {
				var y;
				const O = await (0, e.get)(`/zones/${b}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((y = O == null ? void 0 : O.body) === null || y === void 0 ? void 0 : y.result) || []
			}, f = async (b, y) => {
				var O;
				const _ = await (0, e.post)(`/zones/${b}/content-upload-scan/payloads`, {
					body: [y]
				});
				return (O = _ == null ? void 0 : _.body) === null || O === void 0 ? void 0 : O.result
			}, s = async (b, y) => (await (0, e.del)(`/zones/${b}/content-upload-scan/payloads/${y}`, {
				hideErrorAlert: !0
			}), y), g = async b => {
				var y;
				const O = await (0, e.get)(`/zones/${b}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((y = O == null ? void 0 : O.body) === null || y === void 0 ? void 0 : y.pii_detection_enabled)
			}, v = async (b, y) => (await (0, e.put)(`/zones/${b}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: y
				}
			}), y), n = async b => {
				var y, O;
				const _ = await (0, e.get)(`/zones/${b}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((y = _ == null ? void 0 : _.body) === null || y === void 0 || (O = y.result) === null || O === void 0 ? void 0 : O.enabled)
			}, c = async (b, y) => {
				var O, _;
				const C = await (0, e.post)(`/zones/${b}/leaked-credential-checks`, {
					body: {
						enabled: y
					}
				});
				return !!((O = C == null ? void 0 : C.body) === null || O === void 0 || (_ = O.result) === null || _ === void 0 ? void 0 : _.enabled)
			}, i = async b => {
				var y;
				const O = await (0, e.get)(`/zones/${b}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (y = O == null ? void 0 : O.body) === null || y === void 0 ? void 0 : y.result
			}, d = async (b, y) => {
				var O;
				const _ = await (0, e.post)(`/zones/${b}/leaked-credential-checks/detections`, {
					body: y
				});
				return (O = _ == null ? void 0 : _.body) === null || O === void 0 ? void 0 : O.result
			}, a = async (b, y) => (await (0, e.del)(`/zones/${b}/leaked-credential-checks/detections/${y}`, {
				hideErrorAlert: !0
			}), y), m = async (b, y) => {
				await (0, e.put)(`/zones/${b}/security-center/securitytxt`, {
					body: y
				})
			}, I = async b => {
				await (0, e.del)(`/zones/${b}/security-center/securitytxt`)
			}, P = async b => (await (0, e.get)(`/zones/${b}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Xu: function() {
					return a
				},
				Io: function() {
					return _
				},
				FQ: function() {
					return ue
				},
				vU: function() {
					return d
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
					return U
				},
				WR: function() {
					return v
				},
				bE: function() {
					return X
				},
				u_: function() {
					return i
				},
				pf: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/pages/security/settings/hooks/api.ts"),
				o = t("webpack/sharing/consume/default/react/react"),
				u = t("webpack/sharing/consume/default/react-redux/react-redux"),
				l = t("../react/pages/security/settings/resources/index.ts"),
				f = t("../react/common/hooks/useZoneEntitlement.ts"),
				s = t("../../../../node_modules/yup/es/index.js"),
				g = t("../react/utils/translator.tsx");
			const v = () => (0, u.useSelector)(l.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				c = () => !!useZoneEntitlement(n),
				i = () => {
					const {
						t: z
					} = (0, g.QT)(), Y = s.Z_().required(z("common.field_is_required")).max(24, z("labels.apply.form.name.error.max_characters")).matches(l.DG, z("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", z("labels.apply.form.name.error.cf_forbidden"), w => !l.aW.test(w)), W = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: w => s.Ry().shape({
							[l.n5.NAME]: w ? s.Z_() : Y,
							[l.n5.DESCRIPTION]: w ? s.Z_().optional() : s.Z_().max(150, z("labels.apply.form.description.error.max_characters"))
						})
					}, B = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[l.N2.NAME]: "",
							[l.N2.SOURCE]: l.W3,
							[l.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => s.Ry().shape({
							[l.N2.NEW_LABEL_NAME]: Y
						})
					};
					return {
						LABELS_APPLY_FORM: W,
						EDIT_LABELS_MODAL_FORM: B
					}
				},
				d = ({
					modalHeaderFixedHeight: z = 62,
					modalDefaultPaddings: Y = 16
				} = {}) => {
					const W = (0, o.useRef)(null),
						B = (0, o.useRef)(null),
						[w, x] = (0, o.useState)(0),
						[K, ee] = (0, o.useState)(0),
						te = `calc(100vh - ${w}px - ${K}px - ${Y}px)`,
						[ne, R] = (0, o.useState)("");
					return (0, o.useEffect)(() => {
						const V = () => {
							var H, $, oe, ce;
							const ge = W == null || (H = W.current) === null || H === void 0 ? void 0 : H.offsetHeight,
								me = B == null || ($ = B.current) === null || $ === void 0 ? void 0 : $.offsetHeight,
								be = ((oe = ge) !== null && oe !== void 0 ? oe : 0) + z,
								Le = (ce = me) !== null && ce !== void 0 ? ce : 0;
							x(be), ee(Le)
						};
						return V(), window.addEventListener("resize", V), () => window.removeEventListener("resize", V)
					}, []), {
						searchTerm: ne,
						setSearchTerm: R,
						scrollableSectionMaxHeight: te,
						topMenuRef: W,
						bottomMenuRef: B
					}
				},
				a = z => {
					const Y = v(),
						W = (0, e.useQueryClient)(),
						B = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${z}`,
							queryFn: () => (0, r.JP)(z),
							enabled: Y
						}),
						w = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${z}`,
							queryFn: () => (0, r.BT)(z),
							enabled: Y && !!(B == null ? void 0 : B.data)
						}),
						x = (0, e.useMutation)({
							mutationFn: async ({
								enabled: te
							}) => await (0, r.X2)(z, te),
							onSuccess: te => {
								W.setQueryData([`content-scanning-enabled-${z}`], te)
							}
						}),
						K = (0, e.useMutation)({
							mutationFn: te => (0, r.ll)(z, te),
							onSuccess: te => {
								W.setQueryData([`content-scanning-detections-${z}`], te)
							}
						}),
						ee = (0, e.useMutation)({
							mutationFn: te => (0, r.qD)(z, te),
							onSuccess: te => {
								var ne;
								const R = (ne = W.getQueryData(`content-scanning-detections-${z}`)) !== null && ne !== void 0 ? ne : [];
								W.setQueryData([`content-scanning-detections-${z}`], R.filter(({
									id: V
								}) => V !== te))
							}
						});
					return {
						entitled: Y,
						loading: B.isLoading || w.isLoading,
						error: B.isError || w.isError,
						enabled: {
							data: B.data,
							isToggling: x.isLoading,
							toggleEnabled: async te => x.mutateAsync({
								enabled: te
							})
						},
						detections: {
							data: w.data,
							add: K.mutateAsync,
							delete: ee.mutateAsync,
							loading: K.isLoading || ee.isLoading
						}
					}
				},
				m = () => {
					const z = (0, u.useSelector)(l.cN),
						Y = (0, u.useSelector)(l.bH),
						W = (0, u.useSelector)(l.P3),
						B = (0, u.useSelector)(l.Ri);
					return {
						hasEditPermission: z,
						isEnabled: W && (Y.hasSimilarLeaked || Y.hasUsernameAndPasswordLeaked || B)
					}
				},
				I = z => {
					const Y = m(),
						W = (0, e.useQueryClient)(),
						B = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${z}`,
							queryFn: () => (0, r.Ai)(z),
							enabled: !!Y.isEnabled,
							retry: 1
						}),
						w = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${z}`,
							queryFn: () => (0, r.tw)(z),
							enabled: !!Y.isEnabled && !!(B == null ? void 0 : B.data)
						}),
						x = (0, e.useMutation)({
							mutationFn: ({
								enabled: te
							}) => (0, r.O_)(z, te),
							onSuccess: te => {
								W.setQueryData([`leaked-credentials-enabled-${z}`], te)
							}
						}),
						K = (0, e.useMutation)({
							mutationFn: async te => await (0, r.je)(z, te),
							onSuccess: te => {
								var ne;
								const R = (ne = W.getQueryData(`leaked-credentials-detections-${z}`)) !== null && ne !== void 0 ? ne : [];
								W.setQueryData([`leaked-credentials-detections-${z}`], [...R, te])
							}
						}),
						ee = (0, e.useMutation)({
							mutationFn: te => (0, r.$y)(z, te),
							onSuccess: te => {
								var ne;
								const R = (ne = W.getQueryData(`leaked-credentials-detections-${z}`)) !== null && ne !== void 0 ? ne : [];
								W.setQueryData([`leaked-credentials-detections-${z}`], R.filter(({
									id: V
								}) => V !== te))
							}
						});
					return {
						entitled: Y.isEnabled,
						hasEditPermissions: Y.hasEditPermission,
						loading: B.isLoading || w.isLoading,
						error: B.isError || B.isError,
						enabled: {
							data: B.data,
							isToggling: x.isLoading,
							toggleEnabled: async te => x.mutateAsync({
								enabled: te
							})
						},
						detections: {
							data: w.data,
							add: K.mutateAsync,
							delete: ee.mutateAsync,
							loading: K.isLoading || ee.isLoading
						}
					}
				};
			var P = t("../react/common/utils/useQueryCache.ts");
			const b = "security-txt",
				y = {
					securityTxt: ({
						zoneId: z
					}) => [b, z]
				},
				O = z => (0, e.useQuery)({
					queryKey: y.securityTxt({
						zoneId: z
					}),
					queryFn: () => (0, r._c)(z),
					select: Y => Y.result
				}),
				_ = z => {
					const {
						invalidate: Y
					} = (0, P.o)(y.securityTxt({
						zoneId: z
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, r.YO)(z),
						onSuccess: async () => {
							await Y(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				C = z => {
					const {
						invalidate: Y
					} = (0, P.o)(y.securityTxt({
						zoneId: z
					}));
					return (0, e.useMutation)({
						mutationFn: W => (0, r.F3)(z, W),
						onSuccess: async () => {
							await Y(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var S = t("../../../../node_modules/lodash/isEqual.js"),
				L = t.n(S),
				M = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function A(z) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var W = arguments[Y] != null ? Object(arguments[Y]) : {},
						B = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(W).filter(function(w) {
						return Object.getOwnPropertyDescriptor(W, w).enumerable
					})), B.forEach(function(w) {
						T(z, w, W[w])
					})
				}
				return z
			}

			function T(z, Y, W) {
				return Y = D(Y), Y in z ? Object.defineProperty(z, Y, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[Y] = W, z
			}

			function D(z) {
				var Y = k(z, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function k(z, Y) {
				if (typeof z != "object" || z === null) return z;
				var W = z[Symbol.toPrimitive];
				if (W !== void 0) {
					var B = W.call(z, Y || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(z)
			}
			const U = z => {
					const {
						queryKey: Y,
						zoneId: W
					} = (0, M.hL)(z), {
						isLoading: B,
						isError: w,
						isSuccess: x,
						data: K,
						refetch: ee,
						isRefetching: te
					} = (0, e.useQuery)({
						queryKey: Y,
						queryFn: () => M.Mi.getLabels(A({
							zoneId: W
						}, z)),
						onSuccess: () => {
							var ne;
							const R = z == null || (ne = z.filters) === null || ne === void 0 ? void 0 : ne.source;
							(R === l.LABEL_SOURCES.MANAGED || R === l.LABEL_SOURCES.USER) && (0, l.Tf)({
								name: l.QJ.FILTER_USER_MANAGED_LABELS,
								product: l.Iv.SECURITY_SETTINGS,
								pageName: l.R.LABELS_LIST,
								type: R
							})
						}
					});
					return {
						data: K == null ? void 0 : K.result,
						errors: K == null ? void 0 : K.errors,
						paginationData: K == null ? void 0 : K.result_info,
						isLoading: B,
						isError: w,
						isSuccess: x,
						refetch: ee,
						isRefetching: te
					}
				},
				X = ({
					labels: z,
					preselectedLabels: Y
				}) => {
					const {
						USER: W,
						MANAGED: B
					} = l.LABEL_SOURCES, [w, x] = (0, o.useState)({
						[W]: [],
						[B]: []
					}), [K, ee] = (0, o.useState)(new Set), te = K.size > 0, [ne, R] = (0, o.useState)(!1), V = ce => {
						ee(ge => {
							const me = new Set(ge);
							return me.has(ce.name) ? me.delete(ce.name) : me.add(ce.name), me
						})
					}, H = ce => K.has(ce.name), $ = (ce, ge) => {
						const me = H(ce) ? 1 : 0;
						return (H(ge) ? 1 : 0) - me
					}, oe = ce => {
						x(ge => ({
							[W]: [...ce ? ce[W] : ge[W]].sort($),
							[B]: [...ce ? ce[B] : ge[B]].sort($)
						}))
					};
					return (0, o.useEffect)(() => {
						if (z && !ne) {
							if (Y) {
								const ce = new Set;
								z.forEach(ge => {
									Y.some(me => L()(me, ge)) && ce.add(ge.name)
								}), ee(ce)
							}
							R(!0)
						}
					}, [z, Y, ne]), (0, o.useEffect)(() => {
						if (z && ne) {
							const ce = z.reduce((me, be) => (be.source === W ? me[W].push(be) : be.source === B && me[B].push(be), me), {
									[W]: [],
									[B]: []
								}),
								ge = {
									[W]: ce[W].sort($),
									[B]: ce[B].sort($)
								};
							x(ge)
						}
					}, [W, B, z, ne]), {
						userAndManagedLabels: w,
						setUserAndManagedLabels: x,
						toggleSelectedLabel: V,
						isLabelSelected: H,
						sortLabelsBySelectedStatus: oe,
						hasLabelsSelected: te
					}
				};
			var se = t("../react/app/redux/index.ts"),
				pe = t("../react/pages/security/settings/resources/selectors.ts");
			const ue = (z = "") => {
				const Y = (0, se.p4)(pe.Xs),
					W = Y && (z == null ? void 0 : z.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: Y,
					hasDeprecatedParameter: W
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				FQ: function() {
					return g.FQ
				},
				Iv: function() {
					return v.Iv
				},
				M: function() {
					return g.M
				},
				Np: function() {
					return g.Np
				},
				Oz: function() {
					return g.Oz
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
					return g.WR
				},
				Xs: function() {
					return v.Xs
				},
				Xu: function() {
					return g.Xu
				},
				ZF: function() {
					return v.ZF
				},
				bE: function() {
					return g.bE
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
					return g.pf
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
				o = t("webpack/sharing/consume/default/react/react"),
				u = t.n(o),
				l = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(f),
				g = t("../react/pages/security/settings/hooks/index.ts"),
				v = t("../react/pages/security/settings/resources/index.ts");
			const n = u().lazy(() => Promise.all([t.e(16691), t.e(31736), t.e(12174), t.e(1091), t.e(84959), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(55879), t.e(83276), t.e(28861), t.e(52215), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				c = () => {
					const {
						t: i
					} = (0, f.useI18n)(), d = (0, e.xk)("waf");
					return u().createElement(l.T3, {
						parentPageLabel: i("navigation.zone.security"),
						title: i("navigation.zone.security.settings"),
						type: "narrow"
					}, d.read ? u().createElement(n, null) : u().createElement(r.Z, null))
				};
			E.ZP = c
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Mi: function() {
					return y
				},
				hL: function() {
					return b
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/zoneSelectors.ts"),
				o = t("../react/common/utils/useQueryCache.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/common/hooks/useAccountId.ts"),
				f = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				s = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const g = {
				labels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var v = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				c = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function i(_, C) {
				if (_ == null) return {};
				var S = d(_, C),
					L, M;
				if (Object.getOwnPropertySymbols) {
					var A = Object.getOwnPropertySymbols(_);
					for (M = 0; M < A.length; M++) L = A[M], !(C.indexOf(L) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, L) || (S[L] = _[L]))
				}
				return S
			}

			function d(_, C) {
				if (_ == null) return {};
				var S = {},
					L = Object.keys(_),
					M, A;
				for (A = 0; A < L.length; A++) M = L[A], !(C.indexOf(M) >= 0) && (S[M] = _[M]);
				return S
			}

			function a(_) {
				for (var C = 1; C < arguments.length; C++) {
					var S = arguments[C] != null ? Object(arguments[C]) : {},
						L = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(S).filter(function(M) {
						return Object.getOwnPropertyDescriptor(S, M).enumerable
					})), L.forEach(function(M) {
						m(_, M, S[M])
					})
				}
				return _
			}

			function m(_, C, S) {
				return C = I(C), C in _ ? Object.defineProperty(_, C, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[C] = S, _
			}

			function I(_) {
				var C = P(_, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function P(_, C) {
				if (typeof _ != "object" || _ === null) return _;
				var S = _[Symbol.toPrimitive];
				if (S !== void 0) {
					var L = S.call(_, C || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(_)
			}
			const b = _ => {
					const C = (0, e.p4)(r.Cu),
						S = (0, l.F)(),
						L = O.labels(a({
							accountId: S,
							zoneId: C
						}, _ ? a({}, _) : {})),
						M = (0, o.o)(L);
					return a({
						zoneId: C,
						queryKey: L,
						batchInvalidateLabels: async () => {
							await M.batchInvalidate({
								queryKeysToPredicateInvalidate: [u.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, M)
				},
				y = {
					getLabels: async _ => {
						var C, S, L, M;
						let {
							zoneId: A,
							hideErrorAlert: T = !0
						} = _, D = i(_, ["zoneId", "hideErrorAlert"]);
						return (await f.get(g.labels.toUrl({
							zoneId: A
						}), {
							parameters: {
								page: D == null ? void 0 : D.page,
								per_page: D == null ? void 0 : D.per_page,
								with_mapped_resource_counts: D == null ? void 0 : D.with_mapped_resource_counts,
								filter: D == null || (C = D.filters) === null || C === void 0 ? void 0 : C.search,
								source: (0, n.sQ)(D == null || (S = D.filters) === null || S === void 0 ? void 0 : S.source),
								order: D == null || (L = D.sort) === null || L === void 0 ? void 0 : L.id,
								direction: (D == null ? void 0 : D.sort) ? (D == null || (M = D.sort) === null || M === void 0 ? void 0 : M.desc) ? c.Sr.desc : c.Sr.asc : void 0
							},
							hideErrorAlert: T
						})).body
					},
					getLabel: async _ => {
						let {
							zoneId: C,
							labelName: S,
							hideErrorAlert: L = !0
						} = _, M = i(_, ["zoneId", "labelName", "hideErrorAlert"]);
						const A = (0, n.mm)(S) ? g.managedLabel.toUrl({
							zoneId: C,
							labelName: S
						}) : g.userLabel.toUrl({
							zoneId: C,
							labelName: S
						});
						return (await f.get(A, {
							parameters: {
								with_mapped_resource_counts: M == null ? void 0 : M.with_mapped_resource_counts
							},
							hideErrorAlert: L
						})).body
					},
					editLabel: async ({
						zoneId: _,
						label: C,
						replace: S
					}) => {
						const {
							name: L
						} = C, M = i(C, ["name"]);
						return (await (S ? f.put : f.patch)(g.userLabel.toUrl({
							zoneId: _,
							labelName: C.name
						}), {
							body: M
						})).body
					},
					deleteLabel: async ({
						zoneId: _,
						labelName: C
					}) => (await f.del(g.userLabel.toUrl({
						zoneId: _,
						labelName: C
					}))).body,
					createLabel: async _ => {
						let {
							zoneId: C
						} = _, S = i(_, ["zoneId"]);
						const {
							product: L
						} = S, M = i(S, ["product"]);
						return (await f.post(g.userLabels.toUrl({
							zoneId: C
						}), {
							body: [M]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: _,
						user: C,
						managed: S,
						operationIds: L,
						replace: M
					}) => (await (M ? f.put : f.post)(g.operationsLinkedToLabels.toUrl({
						zoneId: _
					}), {
						body: a({}, C ? {
							user: {
								labels: C
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
						zoneId: _,
						labelName: C,
						operationIds: S
					}) => {
						const L = (0, n.mm)(C) ? g.managedLabelOperations.toUrl({
							zoneId: _,
							labelName: C
						}) : g.userLabelOperations.toUrl({
							zoneId: _,
							labelName: C
						});
						return (await f.put(L, {
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
				O = {
					labels: _ => {
						let {
							accountId: C,
							zoneId: S
						} = _, L = i(_, ["accountId", "zoneId"]);
						return [u.IQ.LABELS, C, S, ...(0, v.isEmpty)(L) ? [] : [L]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				DG: function() {
					return I
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return s
				},
				GE: function() {
					return S
				},
				IQ: function() {
					return u
				},
				KV: function() {
					return f
				},
				LABELS_LIST_TOASTS: function() {
					return d
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
					return o
				},
				_8: function() {
					return i
				},
				_c: function() {
					return _
				},
				aW: function() {
					return P
				},
				dC: function() {
					return M
				},
				gY: function() {
					return C
				},
				j8: function() {
					return g
				},
				jz: function() {
					return m
				},
				n5: function() {
					return b
				},
				om: function() {
					return v
				},
				w: function() {
					return r
				},
				zF: function() {
					return L
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let r = function(A) {
				return A.EXPOSED_CREDENTIALS = "exposed_credentials", A.CONTENT_SCANNING = "content_scanning", A
			}({});
			const o = "all";
			let u = function(A) {
					return A.LABELS = "labels", A
				}({}),
				l = function(A) {
					return A.USER = "user", A.MANAGED = "managed", A
				}({}),
				f = function(A) {
					return A.SOURCE = "source", A
				}({}),
				s = function(A) {
					return A.NAME = "name", A.SOURCE = "source", A.NEW_LABEL_NAME = "newLabelName", A
				}({}),
				g = function(A) {
					return A.ENDPOINT = "endpoint", A.METHOD = "method", A.OPERATION_ID = "operationId", A
				}({}),
				v = function(A) {
					return A.NAME = "name", A.MAPPED_RESOURCES = "mapped_resources.operations", A.SOURCE = "source", A.APPLY = "apply", A
				}({});
			const i = {
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
						[f.SOURCE]: o
					}
				},
				filters: f,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let d = function(A) {
				return A.CREATED_LABEL = "createdLabel", A.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", A.DELETED_LABEL = "deletedLabel", A.APPLIED_LABEL = "appliedLabel", A.EDITED_LABEL = "editedLabel", A.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", A
			}({});
			const a = "650px",
				m = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				I = /^[A-Za-z0-9-]+$/,
				P = /^cf-/;
			let b = function(A) {
				return A.NAME = "name", A.DESCRIPTION = "description", A
			}({});
			const y = "all";
			let O = function(A) {
				return A.METHOD = "method", A.HOSTNAME = "hostname", A
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
						[O.METHOD]: y,
						[O.HOSTNAME]: y
					}
				},
				filters: O
			};
			let C = function(A) {
				return A.TITLE = "title", A.DESCRIPTION = "description", A.SUBMIT = "submit", A
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
				M = "exposed-credentials-module"
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
					return c
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
					return o.QF
				},
				vc: function() {
					return o.vc
				},
				ZF: function() {
					return i
				},
				Xs: function() {
					return b.Xs
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
					return b.bH
				},
				Mb: function() {
					return o.Mb
				},
				ui: function() {
					return b.ui
				},
				P3: function() {
					return b.P3
				},
				Ri: function() {
					return b.Ri
				},
				cN: function() {
					return b.cN
				},
				m8: function() {
					return P
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
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(u);

			function f(y) {
				for (var O = 1; O < arguments.length; O++) {
					var _ = arguments[O] != null ? Object(arguments[O]) : {},
						C = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(_).filter(function(S) {
						return Object.getOwnPropertyDescriptor(_, S).enumerable
					})), C.forEach(function(S) {
						s(y, S, _[S])
					})
				}
				return y
			}

			function s(y, O, _) {
				return O = g(O), O in y ? Object.defineProperty(y, O, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[O] = _, y
			}

			function g(y) {
				var O = v(y, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function v(y, O) {
				if (typeof y != "object" || y === null) return y;
				var _ = y[Symbol.toPrimitive];
				if (_ !== void 0) {
					var C = _.call(y, O || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(y)
			}
			let n = function(y) {
					return y.LABELS_LIST = "Labels List page", y.LABELS_APPLY = "Labels Apply page", y.LABELS_SIDE_MODAL = "Labels Side Modal", y.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", y.LABELS_OPERATION_DETAILS = "Operation Details page", y
				}({}),
				c = function(y) {
					return y.API_SHIELD = "API Shield", y.SECURITY_SETTINGS = "Security Settings", y
				}({}),
				i = function(y) {
					return y.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", y.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", y.OPERATIONS_TABLE_ROW = "Operations table row", y.OPERATION_DETAILS_PAGE = "Operation details page", y
				}({}),
				d = function(y) {
					return y.UPSERT = "upsert", y.OVERWRITE = "overwrite", y
				}({}),
				a = function(y) {
					return y.SINGLE = "single", y.MULTIPLE = "multiple", y
				}({}),
				m = function(y) {
					return y.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", y.DELETE_LABEL = "delete a user label in the settings page", y.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", y.CREATE_LABEL_CLICKED = "click create label button in the settings page", y.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", y.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", y.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", y.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", y.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", y.OPEN_LABELS_SIDE_MODAL = "open labels side modal", y.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", y.CREATE_NEW_LABEL = "create a new label", y
				}({});
			const I = ({
					name: y,
					product: O,
					category: _ = "user journey",
					pageName: C,
					from: S,
					write_strategy: L,
					type: M,
					target: A
				}) => {
					l().sendEvent(y, f({
						category: _,
						pageName: C,
						product: O
					}, S ? {
						from: S
					} : {}, L ? {
						write_strategy: L
					} : {}, M ? {
						type: M
					} : {}, A ? {
						target: A
					} : {}))
				},
				P = () => {
					var y;
					return (y = Object.values(m)) === null || y === void 0 ? void 0 : y.flat()
				};
			var b = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				P3: function() {
					return g
				},
				Ri: function() {
					return v
				},
				Xs: function() {
					return c
				},
				bH: function() {
					return n
				},
				cN: function() {
					return s
				},
				ui: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				r = t("../react/utils/url.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const f = i => {
					const d = (0, e.RO)(i),
						a = !!(0, o.rV)(i, "rulesets.file_upload_scan_allowed"),
						m = !!(0, o.BF)(i, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? d && (a || m) : m
				},
				s = i => Number((0, o.rV)(i, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				g = i => (0, o.rV)(i, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				v = i => (0, o.rV)(i, "rulesets.leaked_credential_checks_allowed"),
				n = i => (0, l.z1)(u.dC)(i) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, o.rV)(i, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, o.rV)(i, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				c = i => !!(0, l.z1)("deprecate-security-level")(i)
		},
		"../react/pages/security/settings/resources/types.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				T: function() {
					return r
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let r = function(o) {
				return o.ENABLED = "enabled", o.CONTACT = "contact", o.EXPIRES = "expires", o.ENCRYPTION = "encryption", o.ACKNOWLEDGMENTS = "acknowledgments", o.CANONICAL = "canonical", o.HIRING = "hiring", o.POLICY = "policy", o.PREFERRED_LANGUAGES = "preferred_languages", o
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$E: function() {
					return i
				},
				Mb: function() {
					return d
				},
				N2: function() {
					return O
				},
				Q4: function() {
					return m
				},
				QF: function() {
					return c
				},
				Vy: function() {
					return P
				},
				Wv: function() {
					return a
				},
				mm: function() {
					return y
				},
				sQ: function() {
					return b
				},
				vc: function() {
					return I
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				o = t("../react/pages/security/settings/routes.tsx"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/pages/security/settings/resources/types.ts"),
				f = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function s(_) {
				for (var C = 1; C < arguments.length; C++) {
					var S = arguments[C] != null ? Object(arguments[C]) : {},
						L = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(S).filter(function(M) {
						return Object.getOwnPropertyDescriptor(S, M).enumerable
					})), L.forEach(function(M) {
						g(_, M, S[M])
					})
				}
				return _
			}

			function g(_, C, S) {
				return C = v(C), C in _ ? Object.defineProperty(_, C, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[C] = S, _
			}

			function v(_) {
				var C = n(_, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function n(_, C) {
				if (typeof _ != "object" || _ === null) return _;
				var S = _[Symbol.toPrimitive];
				if (S !== void 0) {
					var L = S.call(_, C || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(_)
			}
			const c = {
					[l.T.ENABLED]: !0,
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
				d = _ => e.Ry({
					[l.T.CONTACT]: e.IX().of(e.Z_().required(_("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, _("security_txt.fields.contact.format_error"))),
					[l.T.EXPIRES]: e.hT().required(_("common.required")).min(new Date, _("security_txt.fields.expires.min_error"))
				}),
				a = _ => {
					const C = {};
					for (const S in _) C[S] = Array.isArray(_[S]) ? _[S].filter(L => !!L) : _[S];
					return s({}, C, {
						expires: (0, f.DZ)(_.expires)
					})
				},
				m = (_, C, S) => {
					const L = [...new Set([l.T.CONTACT, l.T.EXPIRES, ...Object.values(l.T)])],
						M = Object.entries(_).sort(([A], [T]) => L.indexOf(A) - L.indexOf(T)).filter(([A, T]) => !!i[A] && !!T && (!Array.isArray(T) || !!T.length)).map(([A, T]) => Array.isArray(T) ? T.map(D => `${S(i[A].label)}: ${D}`).join(`
`) : `${S(i[A].label)}: ${T}`).join(`
`);
					(0, r.yH)(`Cloudflare_${C}_security.txt`, M, "text/plain;charset=utf-8")
				};
			let I = function(_) {
				return _.CREATED = "created security.txt", _.ENABLED = "enabled security.txt", _.DISABLED = "disabled security.txt", _.DOWNLOADED = "downloaded security.txt", _.UPDATED = "updated security.txt", _.DELETED = "deleted security.txt", _
			}({});
			const P = _ => (_ == null ? void 0 : _.source) === u.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (_ == null ? void 0 : _.source) === u.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				b = _ => _ === u.W3 ? void 0 : _,
				y = _ => u.aW.test(_),
				O = _ => {
					switch (_) {
						case u.w.CONTENT_SCANNING:
							return o.ROUTES.CONTENT_SCANNING;
						case u.w.EXPOSED_CREDENTIALS:
							return o.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(F, E, t) {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Sb: function() {
					return v
				},
				Vj: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(a) {
						return Object.getOwnPropertyDescriptor(i, a).enumerable
					})), d.forEach(function(a) {
						u(n, a, i[a])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(n, c || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			const s = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				g = {
					product: "WAF Managed Rules"
				},
				v = ({
					event: n,
					category: c = "user journey",
					product: i = "waf",
					productName: d = "Managed Rules",
					additionalData: a
				}) => {
					r().sendEvent(n, o({
						category: c,
						product: i,
						productName: d
					}, a || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(F, E, t) {
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
		"../react/pages/spectrum/tracking.tsx": function(F, E, t) {
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
		"../react/pages/stream/actionTypes.ts": function(F, E, t) {
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
		"../react/pages/stream/reducer.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return n
				},
				nY: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				r = t("../react/pages/stream/actionTypes.ts"),
				o = t("../react/pages/stream/util/pager.ts");

			function u(c) {
				for (var i = 1; i < arguments.length; i++) {
					var d = arguments[i] != null ? Object(arguments[i]) : {},
						a = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(d).filter(function(m) {
						return Object.getOwnPropertyDescriptor(d, m).enumerable
					})), a.forEach(function(m) {
						l(c, m, d[m])
					})
				}
				return c
			}

			function l(c, i, d) {
				return i = f(i), i in c ? Object.defineProperty(c, i, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = d, c
			}

			function f(c) {
				var i = s(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function s(c, i) {
				if (typeof c != "object" || c === null) return c;
				var d = c[Symbol.toPrimitive];
				if (d !== void 0) {
					var a = d.call(c, i || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			const g = "stream",
				v = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(c = v, i) {
				switch (i.type) {
					case r.U.ResetState:
						return v;
					case r.U.SetStorageLoading:
						const {
							storageLoading: d
						} = i;
						return u({}, c, {
							storageLoading: d
						});
					case r.U.SetStorage:
						return u({}, c, {
							storage: i.payload ? u({}, c.storage, i.payload) : void 0
						});
					case r.U.ReplaceVideos:
						return u({}, c, {
							videos: i.videos
						});
					case r.U.PrependVideo:
						return u({}, c, {
							videos: [i.video, ...c.videos].filter((a, m) => m < o.FJ)
						});
					case r.U.UpdateVideo:
						return u({}, c, {
							videos: c.videos.map(a => a.uid === i.video.uid ? i.video : a)
						});
					case r.U.UpdateVideoPending:
						return u({}, c, {
							videoUpdateStatuses: u({}, c.videoUpdateStatuses, {
								[i.uid]: i.status
							})
						});
					case r.U.RemoveVideos:
						return u({}, c, {
							videos: c.videos.filter(a => !i.ids.includes(a.uid))
						});
					case r.U.SetLoading:
						return u({}, c, {
							loading: i.loading
						});
					case r.U.SetRequestTimestamp:
						return u({}, c, {
							requestTimestamp: i.requestTimestamp
						});
					case r.U.UploadViaUrl:
						return c;
					default:
						return (0, e.h)(i, c)
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
					return g
				},
				_A: function() {
					return m
				},
				_Q: function() {
					return c
				},
				aM: function() {
					return a
				},
				bM: function() {
					return s
				},
				bO: function() {
					return i
				},
				bm: function() {
					return d
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
				o = t("../react/pages/stream/reducer.ts");
			const u = P => P[o.nY],
				l = P => u(P).videos,
				f = P => u(P).videoUpdateStatuses,
				s = P => u(P).loading,
				g = P => u(P).requestTimestamp,
				v = P => u(P).storageLoading,
				n = P => u(P).storage,
				c = P => (0, r.BF)(P, "stream.enabled") || (0, e.bC)(P),
				i = P => (0, e.Le)(P, "stream", "connect"),
				d = P => (0, e.Le)(P, "stream", "stream-4371"),
				a = P => (0, e.Le)(P, "stream", "public-details-enabled"),
				m = P => !!(0, e.Le)(P, "stream", "llhls"),
				I = P => {
					const b = n(P);
					return b !== void 0 && b.limitMins > b.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(F, E, t) {
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

			function r(u, l, f) {
				const s = {
					search: f,
					limit: e.toString()
				};
				return l !== void 0 && (s.end = l), s
			}

			function o(u, l, f) {
				return {
					limit: e.toString(),
					search: f,
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
			let e = function(r) {
				return r.ARGO_ENABLEMENT = "change argo enablement", r.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", r.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", r
			}({})
		},
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				QK: function() {
					return s
				},
				WM: function() {
					return d
				},
				Zk: function() {
					return g
				},
				aB: function() {
					return v
				},
				eT: function() {
					return i
				},
				mm: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(a) {
				for (var m = 1; m < arguments.length; m++) {
					var I = arguments[m] != null ? Object(arguments[m]) : {},
						P = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(I).filter(function(b) {
						return Object.getOwnPropertyDescriptor(I, b).enumerable
					})), P.forEach(function(b) {
						u(a, b, I[b])
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
			let s = function(a) {
					return a.CREATE_BUTTON_CLICK = "click create load balancer", a.TOGGLE_STATUS = "load balancer toggle status", a.REVIEW_PAGE_CLICK = "click load balancer table review link", a.EDIT_CLICK = "click load balancer table edit button", a.DELETE_CLICK = "click load balancer table delete button", a
				}({}),
				g = function(a) {
					return a.EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", a.EDIT_IP_CLICK = "click edit load balancer IP", a.EDIT_POOLS_CLICK = "click edit load balancer pools", a.EDIT_MONITORS_CLICK = "click edit load balancer monitors", a.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", a.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", a
				}({}),
				v = function(a) {
					return a.GO_TO_STEP = "click load balancer step", a.BACK_TO_STEP = "click load balancer back to step", a.SAVE = "save load balancer", a.SAVE_AS_DRAFT = "save load balancer as draft", a.SAVE_AND_DEPLOY = "save and deploy load balancer", a.NAVIGATION_CHANGE = "click load balancer wizard navigation link", a
				}({}),
				n = function(a) {
					return a.OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", a
				}({});
			const i = Object.values({
					LOAD_BALANCERS_TABLE: s,
					REVIEW: g,
					WIZARD: v,
					USAGE: n
				}).flatMap(Object.values),
				d = (a, m) => r().sendEvent(a, o({
					category: "user journey",
					product: "load balancing"
				}, m))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(F, E, t) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return o
				},
				X: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let o = function(l) {
				return l.CREATE = "create waiting room", l.UPDATE = "update waiting room", l.EVENTS = "view waiting rooms events", l.ANALYTICS = "view waiting room analytics", l.GENERATE_PREVIEW = "generate waiting room preview link", l
			}({});
			const u = async l => {
				await r().sendEvent(l, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				N3: function() {
					return g
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

			function o(c) {
				for (var i = 1; i < arguments.length; i++) {
					var d = arguments[i] != null ? Object(arguments[i]) : {},
						a = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(d).filter(function(m) {
						return Object.getOwnPropertyDescriptor(d, m).enumerable
					})), a.forEach(function(m) {
						u(c, m, d[m])
					})
				}
				return c
			}

			function u(c, i, d) {
				return i = l(i), i in c ? Object.defineProperty(c, i, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = d, c
			}

			function l(c) {
				var i = f(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function f(c, i) {
				if (typeof c != "object" || c === null) return c;
				var d = c[Symbol.toPrimitive];
				if (d !== void 0) {
					var a = d.call(c, i || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			const s = "TURNSTILE";
			let g = function(c) {
				return c.OVERVIEW_PAGE = "view the overview page", c.LIST_OF_WIDGETS = "list of widgets", c.SOLVE_EVENTS = "list solve events", c.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", c.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", c.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", c.OPEN_DELETE_MODAL = "view the delete modal for one widget", c.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", c.DELETE_WIDGET = "delete successfully widgets", c.LIST_OF_HOSTNAMES = "list hostnames", c.OPEN_ADD_WIDGET_PAGE = "view page to add widget", c.FEEDBACK_ADD = "view Feedback Add", c.SAVE_WIDGET = "save widget", c.ROTATE_KEYS = "rotate keys", c.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", c.GET_WIDGETS = "get widget details", c.OPEN_ANALYTICS_PAGE = "view analytics page", c.ANALYTICS_DATA = "list the analytics data", c
			}({});
			const v = ({
					name: c,
					product: i = s,
					category: d = "user journey",
					page: a,
					additionalData: m = {}
				}) => {
					r().sendEvent(c, o({
						category: d,
						page: a,
						product: i
					}, m || {}))
				},
				n = () => {
					var c;
					return (c = Object.values(g)) === null || c === void 0 ? void 0 : c.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return g
				},
				Ky: function() {
					return v
				},
				RJ: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						d = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(i).filter(function(a) {
						return Object.getOwnPropertyDescriptor(i, a).enumerable
					})), d.forEach(function(a) {
						u(n, a, i[a])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var d = i.call(n, c || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.BACK_BUTTON = "clicked back from user group detail", n.ADD_MEMBER_BUTTON = "click add member button", n.MEMBER_ADD = "add user group member", n.MEMBER_DETAIL_MENU = "click user group member detail menu", n.MEMBER_DETAIL_VIEW = "click view in user group member detail menu", n.MEMBER_DETAIL_EDIT = "click edit in user group member detail menu", n.MEMBER_DETAIL_DELETE = "click delete in user group member detail menu", n.MEMBER_DELETE = "delete user group member", n.MEMBER_DETAIL_DELETE_CANCEL = "click cancel delete user group member", n.ADD_POLICY_BUTTON = "click add user group policy button", n
			}({});
			const g = ({
					name: n,
					additionalData: c = {}
				}) => {
					r().sendEvent(n, o({}, c || {}))
				},
				v = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(F, E, t) {
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
		"../react/pages/zone-versioning/selectors.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				$e: function() {
					return S
				},
				$h: function() {
					return y
				},
				G: function() {
					return C
				},
				M3: function() {
					return M
				},
				Tr: function() {
					return P
				},
				UY: function() {
					return m
				},
				bH: function() {
					return c
				},
				fv: function() {
					return A
				},
				hF: function() {
					return O
				},
				iw: function() {
					return d
				},
				m7: function() {
					return n
				},
				re: function() {
					return _
				},
				tp: function() {
					return a
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/SidebarNav/permissions.ts"),
				l = t("../react/common/selectors/entitlementsSelectors.ts");

			function f(T) {
				for (var D = 1; D < arguments.length; D++) {
					var k = arguments[D] != null ? Object(arguments[D]) : {},
						U = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(k).filter(function(X) {
						return Object.getOwnPropertyDescriptor(k, X).enumerable
					})), U.forEach(function(X) {
						s(T, X, k[X])
					})
				}
				return T
			}

			function s(T, D, k) {
				return D = g(D), D in T ? Object.defineProperty(T, D, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[D] = k, T
			}

			function g(T) {
				var D = v(T, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function v(T, D) {
				if (typeof T != "object" || T === null) return T;
				var k = T[Symbol.toPrimitive];
				if (k !== void 0) {
					var U = k.call(T, D || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(T)
			}
			const n = T => (0, o.nA)(T) ? (0, l.p1)(T) && (0, u.$n)(T, "zone_versioning", "versioning") : !1,
				c = T => T.zoneVersioning.zoneApplications,
				i = (0, e.P1)("zoneApplications", c),
				d = T => T.zoneVersioning.zoneVersions,
				a = (0, e.P1)("zoneVersions", d),
				m = (0, r.P1)(a, T => {
					if (T) return T.filter(D => D.status == "V")
				}),
				I = T => T.zoneVersioning.environments,
				P = T => T.zoneVersioning.environments.isRequesting,
				b = (0, e.P1)("environments", I),
				y = (0, r.P1)(i, T => {
					if (T) {
						if (T.length === 1) return T[0];
						T.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${T.length}`))
					}
					return null
				}),
				O = (0, r.P1)(b, T => T ? T.environments : []),
				_ = T => {
					var D;
					return (D = T.zoneVersioning) === null || D === void 0 ? void 0 : D.zoneVersionSelector
				},
				C = (0, r.P1)(_, a, (T, D) => {
					if (!(T == null ? void 0 : T.isVersion) || !D) return null;
					const k = D.find(U => {
						if (U.version === T.selectedVersion && U.locked) return !0
					});
					return k ? f({}, k, {
						isLocked: !0
					}) : null
				}),
				S = (0, r.P1)(a, O, (T, D) => !D || !T ? [] : T.map(k => {
					const U = [];
					for (const X in D) D[X].version === k.version && U.push(D[X]);
					return f({}, k, {
						environments: U
					})
				})),
				L = T => T.zoneVersioning.WAFMigrationStatus,
				M = (0, e.P1)("WAFMigrationStatus", L),
				A = T => T.zoneVersioning.enableVersioning
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
					return s
				},
				L7: function() {
					return l
				},
				Lt: function() {
					return a
				},
				Oj: function() {
					return i
				},
				QV: function() {
					return m
				},
				S6: function() {
					return M
				},
				X$: function() {
					return O
				},
				X6: function() {
					return v
				},
				d4: function() {
					return d
				},
				fE: function() {
					return g
				},
				im: function() {
					return b
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

			function e(A) {
				for (var T = 1; T < arguments.length; T++) {
					var D = arguments[T] != null ? Object(arguments[T]) : {},
						k = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(D).filter(function(U) {
						return Object.getOwnPropertyDescriptor(D, U).enumerable
					})), k.forEach(function(U) {
						r(A, U, D[U])
					})
				}
				return A
			}

			function r(A, T, D) {
				return T = o(T), T in A ? Object.defineProperty(A, T, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[T] = D, A
			}

			function o(A) {
				var T = u(A, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function u(A, T) {
				if (typeof A != "object" || A === null) return A;
				var D = A[Symbol.toPrimitive];
				if (D !== void 0) {
					var k = D.call(A, T || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(A)
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
				s = "40rem",
				g = {
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
				c = {
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
					}, c),
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
					buildWorkerError: "error building worker"
				},
				P = "workers.dev",
				b = "YYYY-MM-DD HH:mm:SS ZZ",
				y = "active",
				O = ["bundled", "unbound", "standard"],
				_ = null,
				C = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let S = function(A) {
				return A[A.NONE = 0] = "NONE", A[A.MISS = 1] = "MISS", A[A.EXPIRED = 2] = "EXPIRED", A[A.UPDATING = 3] = "UPDATING", A[A.STALE = 4] = "STALE", A[A.HIT = 5] = "HIT", A[A.IGNORED = 6] = "IGNORED", A[A.BYPASS = 7] = "BYPASS", A[A.REVALIDATED = 8] = "REVALIDATED", A[A.DYNAMIC = 9] = "DYNAMIC", A[A.STREAM_HIT = 10] = "STREAM_HIT", A[A.DEFERRED = 11] = "DEFERRED", A
			}({});
			const L = [S.HIT, S.STREAM_HIT];
			let M = function(A) {
				return A.SECRETS_STORE_ID = "store_id", A.SECRET_NAME = "secret_name", A
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return s
				},
				L: function() {
					return o
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
			const r = g => `${g}.workers.dev`,
				o = (g, v, n) => `${n?`${n}.`:""}${g}.${r(v)}`,
				u = (g, v, n) => `https://${o(g,v,n)}`,
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
					serviceDetailsIntegrationsFlow: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/${"integrationId"}/integrations-setup`,
					serviceDetailsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/triggers`,
					serviceDetailsTriggersV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#domains`,
					serviceDetailsIntegrations: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/integrations`,
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				MN: function() {
					return o
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
			const o = async ([s, g]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: s,
					variables: g
				})
			})).body, u = async (...s) => (await e.get(...s)).body, l = s => async (g, v) => {
				const n = await fetch(g, v).then(c => c.json());
				return s.assertDecode(n)
			}, f = async (...s) => (await u(...s)).result;
			E.ZP = {
				fetcher: s => Array.isArray(s) ? f(...s) : f(s)
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

					function u(I) {
						return !!(I && I !== document && I.nodeName !== "HTML" && I.nodeName !== "BODY" && "classList" in I && "contains" in I.classList)
					}

					function l(I) {
						var P = I.type,
							b = I.tagName;
						return !!(b == "INPUT" && o[P] && !I.readOnly || b == "TEXTAREA" && !I.readOnly || I.isContentEditable)
					}

					function f(I) {
						I.getAttribute("is-focus-visible") !== "" && I.setAttribute("is-focus-visible", "")
					}

					function s(I) {
						I.getAttribute("is-focus-visible") === "" && I.removeAttribute("is-focus-visible")
					}

					function g(I) {
						u(document.activeElement) && f(document.activeElement), t = !0
					}

					function v(I) {
						t = !1
					}

					function n(I) {
						!u(I.target) || (t || l(I.target)) && f(I.target)
					}

					function c(I) {
						!u(I.target) || I.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), s(I.target))
					}

					function i(I) {
						document.visibilityState == "hidden" && (e && (t = !0), d())
					}

					function d() {
						document.addEventListener("mousemove", m), document.addEventListener("mousedown", m), document.addEventListener("mouseup", m), document.addEventListener("pointermove", m), document.addEventListener("pointerdown", m), document.addEventListener("pointerup", m), document.addEventListener("touchmove", m), document.addEventListener("touchstart", m), document.addEventListener("touchend", m)
					}

					function a() {
						document.removeEventListener("mousemove", m), document.removeEventListener("mousedown", m), document.removeEventListener("mouseup", m), document.removeEventListener("pointermove", m), document.removeEventListener("pointerdown", m), document.removeEventListener("pointerup", m), document.removeEventListener("touchmove", m), document.removeEventListener("touchstart", m), document.removeEventListener("touchend", m)
					}

					function m(I) {
						I.target.nodeName.toLowerCase() !== "html" && (t = !1, a())
					}
					document.addEventListener("keydown", g, !0), document.addEventListener("mousedown", v, !0), document.addEventListener("pointerdown", v, !0), document.addEventListener("touchstart", v, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", c, !0), document.addEventListener("visibilitychange", i, !0), d(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function E(t) {
					var e;

					function r() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && E(F)
			})
		},
		"../react/utils/bootstrap.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
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
					return o
				}
			});
			const e = () => {
					var l, f, s;
					return (l = window) === null || l === void 0 || (f = l.bootstrap) === null || f === void 0 || (s = f.data) === null || s === void 0 ? void 0 : s.security_token
				},
				r = () => {
					var l, f, s;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (f = l.data) === null || f === void 0 || (s = f.user) === null || s === void 0 ? void 0 : s.id)
				},
				o = () => {
					var l, f;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (f = l.data) === null || f === void 0 ? void 0 : f.is_kendo)
				},
				u = () => {
					var l, f, s, g;
					return (l = window) === null || l === void 0 || (f = l.bootstrap) === null || f === void 0 || (s = f.data) === null || s === void 0 || (g = s.user) === null || g === void 0 ? void 0 : g.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				O5: function() {
					return u
				},
				Xm: function() {
					return o
				},
				kT: function() {
					return s
				},
				wV: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				o = () => (r() || "").indexOf("C0002") !== -1,
				u = () => (r() || "").indexOf("C0003") !== -1,
				l = () => (r() || "").indexOf("C0004") !== -1,
				f = () => (r() || "").indexOf("C0005") !== -1,
				s = n => {
					const c = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${c}`
				},
				g = () => {
					var n;
					const c = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (c == null ? void 0 : c.country) || ""
				},
				v = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				AI: function() {
					return O
				},
				Kd: function() {
					return c
				},
				S8: function() {
					return y
				},
				ZW: function() {
					return g
				},
				ay: function() {
					return _
				},
				fh: function() {
					return C
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
					return a
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				o = t("../../../common/intl/intl-types/src/index.ts"),
				u = t("../../../common/util/types/src/utils/index.ts"),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f = t("../../../../node_modules/cookie/index.js");
			const s = "cf-sync-locale-with-cps",
				g = o.Q.en_US,
				v = "en_US",
				n = "cf-locale";

			function c() {
				const M = (0, f.parse)(document.cookie);
				return l.Z.get(n) || M[n] || null
			}

			function i(M) {
				document.cookie = (0, f.serialize)(n, M, {
					path: "/",
					maxAge: 31536e3
				}), l.Z.set(n, M)
			}

			function d() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const a = M => (0, u.Yd)(o.Q).find(A => o.Q[A] === M) || v,
				m = [],
				I = [],
				P = [o.Q.de_DE, o.Q.en_US, o.Q.es_ES, o.Q.fr_FR, o.Q.it_IT, o.Q.pt_BR, o.Q.ko_KR, o.Q.ja_JP, o.Q.zh_CN, o.Q.zh_TW],
				b = {
					test: [...P, ...I, ...m],
					development: [...P, ...I, ...m],
					staging: [...P, ...I, ...m],
					production: [...P, ...I]
				},
				y = M => {
					const A = o.Q[M];
					return b.production.includes(A)
				},
				O = () => Object.keys(o.Q).filter(M => y(M)),
				_ = M => {
					const A = o.Q[M];
					return I.includes(A)
				},
				C = M => S[M],
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
				L = r().locale();
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
			}), r().locale(L)
		},
		"../react/utils/translator.tsx": function(F, E, t) {
			"use strict";
			t.d(E, {
				QT: function() {
					return a
				},
				Vb: function() {
					return g
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return s
				},
				_m: function() {
					return c
				},
				cC: function() {
					return i
				},
				oc: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = t("../../../common/intl/intl-core/src/Translator.ts"),
				o = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				u = t.n(o),
				l = t("../flags.ts");
			const f = new r.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
			});

			function s(m, ...I) {
				return f.t(m, ...I)
			}
			const g = f;

			function v(m, ...I) {
				return markdown(s(m, I))
			}

			function n(m) {
				if (Number(m) !== 0) {
					if (m % 86400 == 0) return s("time.num_days", {
						smart_count: m / 86400
					});
					if (m % 3600 == 0) return s("time.num_hours", {
						smart_count: m / 3600
					});
					if (m % 60 == 0) return s("time.num_minutes", {
						smart_count: m / 60
					})
				}
				return s("time.num_seconds", {
					smart_count: m
				})
			}

			function c(m, I) {
				return m in I ? I[m] : void 0
			}
			const i = o.Trans,
				d = o.I18n,
				a = o.useI18n
		},
		"../react/utils/url.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Ct: function() {
					return S
				},
				Fl: function() {
					return ee
				},
				KT: function() {
					return ne
				},
				NF: function() {
					return b
				},
				Nw: function() {
					return _
				},
				Pd: function() {
					return O
				},
				Uh: function() {
					return w
				},
				cm: function() {
					return m
				},
				e1: function() {
					return C
				},
				el: function() {
					return X
				},
				hW: function() {
					return pe
				},
				pu: function() {
					return te
				},
				qR: function() {
					return U
				},
				td: function() {
					return y
				},
				uW: function() {
					return z
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/r2/routes.ts"),
				f = t("../react/pages/zoneless-workers/routes.ts"),
				s = t("../react/pages/pages/routes.ts"),
				g = t("../react/pages/d1/routes.ts");

			function v(R) {
				for (var V = 1; V < arguments.length; V++) {
					var H = arguments[V] != null ? Object(arguments[V]) : {},
						$ = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(H).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(H, oe).enumerable
					})), $.forEach(function(oe) {
						n(R, oe, H[oe])
					})
				}
				return R
			}

			function n(R, V, H) {
				return V = c(V), V in R ? Object.defineProperty(R, V, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[V] = H, R
			}

			function c(R) {
				var V = i(R, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function i(R, V) {
				if (typeof R != "object" || R === null) return R;
				var H = R[Symbol.toPrimitive];
				if (H !== void 0) {
					var $ = H.call(R, V || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(R)
			}
			const {
				endsWithSlash: d
			} = o.default, a = new RegExp(/([0-9a-z]{32})/g), m = R => R == null ? void 0 : R.replace(a, ":id"), I = (R, V) => {
				const H = R.replace(d, "").split("/");
				return H.slice(0, 2).concat([V]).concat(H.slice(3)).join("/")
			}, P = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), b = R => `/${R.replace(d,"").replace(/^\//,"")}`, y = R => _("add-site", R), O = R => _("billing", R), _ = (R, V) => V ? `/${V}${R?`/${R}`:""}` : `/?to=/:account/${R}`, C = () => {
				const R = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return R ? R[1] : null
			}, S = (R, V) => r().stringify(v({}, r().parse(R), V)), L = (R = "") => R.toString().replace(/([\/]{1,})$/, ""), M = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], A = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, T = /^\/(\w{32,})(\/[^.]*)?/, D = R => M.includes(R), k = R => !D(R), U = R => !D(R) && T.test(R), X = R => !D(R) && A.test(R), se = R => A.exec(R), pe = R => {
				if (X(R)) return R.split("/").filter(V => V.length > 0)[1]
			}, ue = R => T.exec(R), z = R => {
				if (U(R)) {
					const V = ue(R);
					if (V) return V[1]
				}
			}, Y = R => U(R) && R.split("/")[2] === "register-domain", W = R => Y(R) ? R.split("/") : null, B = R => {
				if (X(R)) {
					const [, , , V, H, $, oe, ce] = R.split("/");
					return V === "traffic" && H === "load-balancing" && $ === "pools" && oe === "edit" && ce
				}
			}, w = R => {
				const V = W(R);
				if (V) return V[3]
			}, x = (R, V) => {
				var H, $;
				return ((H = R.pattern.match(/\:/g)) !== null && H !== void 0 ? H : []).length - (($ = V.pattern.match(/\:/g)) !== null && $ !== void 0 ? $ : []).length
			}, K = [...Object.values(u.C), ...Object.values(l._j), ...Object.values(f._j), ...Object.values(s._j), ...Object.values(g._)].sort(x);

			function ee(R) {
				if (!k(R)) return R;
				for (const ce of K)
					if (ce.expression.test(R)) return ce.pattern;
				const V = W(R);
				if (V) {
					const [, , ce, , ...ge] = V;
					return `/:accountId/${ce}/:domainName/${ge.join("/")}`
				}
				if (B(R)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const $ = se(R);
				if ($) {
					const [, , , , ce] = $;
					return `/:accountId/:zoneName${ce||""}`
				}
				const oe = ue(R);
				if (oe) {
					const [, , ce] = oe;
					return `/:accountId${ce||""}`
				}
				return R
			}

			function te(R) {
				if (!!R) try {
					const H = R.split(".").pop();
					if (H && H.length > 0) return H
				} catch {}
			}

			function ne(R, V = document.location.href) {
				try {
					const H = new URL(R),
						$ = new URL(V);
					if (H.origin === $.origin) return `${H.pathname}${H.search}${H.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				r: function() {
					return s
				},
				y: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(u);
			const f = /^\/domainconnect\/v2\/domaintemplates\//i,
				s = "domain-connect-redirect",
				g = () => {
					const v = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						f.test(v.pathname) && o.Z.set(s, v, 60 * 1e3)
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
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function o() {
				var f, s, g, v, n, c;
				return (f = window) === null || f === void 0 || (s = f.bootstrap) === null || s === void 0 || (g = s.data) === null || g === void 0 || (v = g.user) === null || v === void 0 || (n = v.betas) === null || n === void 0 || (c = n.some) === null || c === void 0 ? void 0 : c.call(n, i => i === "zone_level_access_beta")
			}

			function u() {
				const f = !!(0, e.Z)("zone-level-access");
				return o() || f
			}

			function l(f) {
				const s = !!(0, r.z1)("zone-level-access")(f);
				return o() || s
			}
		},
		"../utils/getDashVersion.ts": function(F, E, t) {
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
					var u, l;
					return (u = window) === null || u === void 0 || (l = u.build) === null || l === void 0 ? void 0 : l.dashVersion
				},
				o = () => {
					var u;
					return ((0, e.parse)((u = document) === null || u === void 0 ? void 0 : u.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Wi: function() {
					return Ot
				},
				IM: function() {
					return Bt
				},
				yV: function() {
					return Lt
				},
				Ug: function() {
					return xt
				},
				v_: function() {
					return vt
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				o = t("../react/utils/bootstrap.ts"),
				u = t("../react/app/providers/storeContainer.js"),
				l = t("../react/common/selectors/languagePreferenceSelector.ts"),
				f = t("../flags.ts"),
				s = t("../../../../node_modules/cookie/index.js"),
				g = t("../react/utils/url.ts"),
				v = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				c = t("../../../../node_modules/lodash-es/memoize.js"),
				i = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				d = t("../utils/getDashVersion.ts"),
				a = t("../react/common/selectors/accountSelectors.ts"),
				m = t("../react/common/selectors/entitlementsSelectors.ts");

			function I(ie) {
				for (var re = 1; re < arguments.length; re++) {
					var p = arguments[re] != null ? Object(arguments[re]) : {},
						h = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(p).filter(function(J) {
						return Object.getOwnPropertyDescriptor(p, J).enumerable
					})), h.forEach(function(J) {
						P(ie, J, p[J])
					})
				}
				return ie
			}

			function P(ie, re, p) {
				return re = b(re), re in ie ? Object.defineProperty(ie, re, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ie[re] = p, ie
			}

			function b(ie) {
				var re = y(ie, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function y(ie, re) {
				if (typeof ie != "object" || ie === null) return ie;
				var p = ie[Symbol.toPrimitive];
				if (p !== void 0) {
					var h = p.call(ie, re || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(ie)
			}
			const O = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				_ = (0, c.Z)(ie => {
					try {
						return O.assertDecode((0, s.parse)(ie))
					} catch (re) {
						return console.error(re), {}
					}
				}),
				C = ie => (re, p, h) => {
					try {
						const Ge = window.location.pathname,
							ze = (0, u.bh)().getState(),
							rt = _(document.cookie),
							_t = I({
								page: (0, g.Fl)(h.page || window.location.pathname),
								dashVersion: (0, d.t)()
							}, rt);
						if (re === "identify") {
							var J, _e;
							const ot = {
								gates: (0, i.T2)(ze) || {},
								country: (J = t.g) === null || J === void 0 || (_e = J.bootstrap) === null || _e === void 0 ? void 0 : _e.ip_country
							};
							return ie(re, p, I({}, _t, ot, h))
						} else {
							const ot = {
								accountId: (0, g.uW)(Ge),
								zoneName: (0, g.hW)(Ge),
								domainName: (0, g.Uh)(Ge)
							};
							if ((0, g.qR)(Ge)) {
								var Ae;
								const Re = (0, a.D0)(ze);
								ot.isEntAccount = !!(Re == null || (Ae = Re.meta) === null || Ae === void 0 ? void 0 : Ae.has_enterprise_zones) || (0, m.p1)(ze)
							}
							if ((0, g.el)(Ge)) {
								var Fe;
								const Re = (0, v.nA)(ze);
								ot.zoneId = Re == null ? void 0 : Re.id, ot.plan = Re == null || (Fe = Re.plan) === null || Fe === void 0 ? void 0 : Fe.legacy_id
							}
							return ie(re, p, I({}, _t, ot, h))
						}
					} catch (Ge) {
						return console.error(Ge), ie(re, p, h)
					}
				},
				S = ie => async (re, p, h) => {
					try {
						return await ie(re, p, h)
					} catch (J) {
						if (console.error(J), !vt()) throw J;
						return {
							status: "rejected",
							reason: J
						}
					}
				};
			var L = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				M = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				A = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				T = t("../react/common/middleware/sparrow/errors.ts"),
				D = t("../react/pages/caching/tracking.tsx"),
				k = t("../react/pages/home/domain-registration/tracking.ts"),
				U = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				X = t("../react/pages/hyperdrive/tracking.ts"),
				se = t("../react/pages/magic/overview/tracking.ts"),
				pe = t("../react/pages/magic/packet-captures/constants.ts"),
				ue = t("../react/pages/page-rules/tracking.ts"),
				z = t("../react/pages/pages/constants.ts"),
				Y = t("../react/pages/pipelines/tracking.ts"),
				W = t("../react/pages/security-center/BlockedContent/constants.ts"),
				B = t("../react/pages/security-center/tracking.ts"),
				w = t("../react/pages/security/api-shield/tracking.ts"),
				x = t("../react/pages/security/bots/tracking.ts"),
				K = t("../react/pages/security/resources/constants.tsx"),
				ee = t("../react/pages/security/page-shield/resources/index.ts"),
				te = t("../react/pages/home/configurations/lists/tracking.ts"),
				ne = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				R = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				V = t("../react/pages/home/alerts/tracking.ts"),
				H = t("../react/pages/dns/dns-records/tracking.ts"),
				$ = t("../react/pages/magic/network-monitoring/constants.ts"),
				oe = t("../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts"),
				ce = t("../react/pages/security/settings/index.tsx"),
				ge = t("../react/pages/shared-config/sparrowEvents.tsx"),
				me = t("../react/pages/spectrum/tracking.tsx"),
				be = t("../react/pages/traffic/argo/tracking.ts"),
				Le = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				je = t("../react/pages/turnstile/tracking.ts"),
				he = t("../react/pages/zoneless-workers/constants.ts"),
				Se = t("../react/app/components/AccountHome/tracking.ts"),
				Ye = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Ke = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				Ve = t("../react/pages/user-groups/sparrowEvents.ts"),
				Z = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				ve = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				Pe = t("../react/pages/security/overview/resources/constants.ts"),
				Xe = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				Je = t("../react/pages/secrets-store/resources/constants.ts");
			const qe = ((ie, re, ...p) => n.eg.union([n.eg.literal(ie), n.eg.literal(re), ...p.map(h => n.eg.literal(h))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", Se.gX.SPARROW_PROJECTS_TABLE_CLICK, Se.gX.SPARROW_EMPTY_STATE_CTA_CLICK, Se.gX.SPARROW_PRODUCT_CARD_CLICK, Se.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, Se.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, Se.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, Se.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, Se.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, Se.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, Se.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", he.QV.clickedDownloadAnalytics, he.QV.clickedPrintAnalytics, he.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", he.QV.addWCITriggerToExistingWorker, he.QV.updateWCITrigger, he.QV.deleteWCITrigger, he.QV.addWCITriggerToNewWorker, he.QV.createWCIBuildForNewWorker, he.QV.completedWCIBuildForNewWorker, he.QV.changedDefaultConfigurations, he.QV.clickElement, z.QV.toggledPagesSmartPlacement, z.QV.downloadDemoProject, he.QV.clickCreateWorkerFromRepoNextStep, he.QV.clickCreateWorkerFromRepoPreviousStep, he.QV.clickCreateNewSCMConnection, he.QV.redirectFromSCMOAuth, he.QV.clickSubmitError, he.QV.selectTemplate, he.QV.clickedListTemplates, he.QV.clickedImportRepository, he.QV.templateStubWorkerCreated, he.QV.templateStubWorkerCreationFailed, he.QV.templateRepositoryCreated, he.QV.templateRepositoryCreationFailed, he.QV.copyTemplateC3Command, he.QV.templateDeployClick, he.QV.reauthenticateGithubModalShown, he.QV.updateGithubPermissionsClicked, he.QV.D2W_importRepository, he.QV.D2W_stubWorkerCreated, he.QV.D2W_stubWorkerCreationFailed, he.QV.D2W_repositoryCreated, he.QV.D2W_repositoryCreationFailed, he.QV.D2W_resourcesProvisioned, he.QV.D2W_resourceProvisioningFailed, he.QV.D2W_githubAPIRateLimitReached, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", x.N3.INITIAL_FETCH_SCORES, x.N3.FETCH_CONFIGURATION, x.N3.INITIAL_FETCH_TIME_SERIES, x.N3.INITIAL_FETCH_ATTRIBUTES, x.N3.UPDATE_SETTINGS, x.N3.DELETE_RULE, x.N3.UPDATE_RULE, x.N3.FETCH_RULES, x.N3.CONFIGURE_BOT_MANAGEMENT, x.N3.WAF_RULES_REDIRECT, U.F.TOGGLE_TCP_PROTECTION, U.F.GET_TCP_PROTECTION_PREFIXES, U.F.CREATE_TCP_PROTECTION_PREFIXES, U.F.CREATE_TCP_PROTECTION_PREFIX, U.F.UPDATE_TCP_PROTECTION_PREFIX, U.F.DELETE_TCP_PROTECTION_PREFIX, U.F.DELETE_TCP_PROTECTION_PREFIXES, U.F.GET_TCP_PROTECTION_ALLOWLIST, U.F.CREATE_TCP_PROTECTION_ALLOWLIST, U.F.UPDATE_TCP_PROTECTION_ALLOWLIST, U.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, U.F.DELETE_TCP_PROTECTION_ALLOWLIST, U.F.GET_SYN_PROTECTION_RULES, U.F.GET_SYN_PROTECTION_RULE, U.F.CREATE_SYN_PROTECTION_RULE, U.F.UPDATE_SYN_PROTECTION_RULE, U.F.DELETE_SYN_PROTECTION_RULE, U.F.GET_TCP_FLOW_PROTECTION_RULES, U.F.GET_TCP_FLOW_PROTECTION_RULE, U.F.CREATE_TCP_FLOW_PROTECTION_RULE, U.F.UPDATE_TCP_FLOW_PROTECTION_RULE, U.F.DELETE_TCP_FLOW_PROTECTION_RULE, U.F.GET_SYN_PROTECTION_FILTERS, U.F.GET_SYN_PROTECTION_FILTER, U.F.CREATE_SYN_PROTECTION_FILTER, U.F.UPDATE_SYN_PROTECTION_FILTER, U.F.DELETE_SYN_PROTECTION_FILTER, U.F.GET_TCP_FLOW_PROTECTION_FILTERS, U.F.GET_TCP_FLOW_PROTECTION_FILTER, U.F.CREATE_TCP_FLOW_PROTECTION_FILTER, U.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, U.F.DELETE_TCP_FLOW_PROTECTION_FILTER, U.F.GET_DNS_PROTECTION_RULES, U.F.GET_DNS_PROTECTION_RULE, U.F.CREATE_DNS_PROTECTION_RULE, U.F.UPDATE_DNS_PROTECTION_RULE, U.F.DELETE_DNS_PROTECTION_RULE, ee.FV.MANAGE_PAGE_SHIELD_POLICY, ee.FV.CONFIGURE_PAGE_SHIELD, ee.FV.VIEW_DETECTED_CONNECTIONS, ee.FV.VIEW_DETECTED_SCRIPTS, ee.FV.VIEW_PAGE_SHIELD_POLICIES, ee.FV.VIEW_PAGE_SHIELD_SETTINGS, ee.FV.OPEN_MUTABLE_VERSION_TOOLTIP, ee.FV.SHOW_MUTABLE_VERSION_TOOLTIP, te.y.CREATE_LIST, te.y.DELETE_LIST, te.y.ADD_LIST_ITEM, te.y.DELETE_LIST_ITEM, X.KO.PURCHASE_WORKERS_PAID, X.KO.LIST_CONFIGS, X.KO.SEARCH_CONFIGS, X.KO.CREATE_HYPERDRIVE_CONFIG, X.KO.VIEW_CONFIG_DETAILS, X.KO.UPDATE_CACHING_SETTINGS, X.KO.DELETE_HYPERDRIVE_CONFIG, X.KO.CLICK_HYPERDRIVE_DOCUMENTATION, X.KO.CLICK_GET_STARTED_GUIDE, X.KO.CLICK_CONNECTIVITY_GUIDES, X.KO.CLICK_QUICK_LINK, X.KO.CLICK_DISCORD, X.KO.CLICK_COMMUNITY, me.N.CNAME, me.N.IP_ADDRESS, me.N.LB, me.N.UPDATE_CNAME, me.N.UPDATE_IP_ADDRESS, me.N.UPDATE_LB, me.N.DISABLE, D.N.TIERED_CACHE, D.N.CACHE_PURGE, D.N.CACHE_ANALYTICS, ...(0, je.P)(), ...(0, A.x4)(), ...(0, ce.m8)(), ...(0, Ve.Ky)(), ...(0, Z.Cf)(), Le.N.CREATE, Le.N.EVENTS, Le.N.ANALYTICS, Le.N.UPDATE, Le.N.GENERATE_PREVIEW, B.RY.INITIATE_URL_SCAN, B.RY.LOAD_SCAN_INFO, B.Ev.LOAD_THREAT_EVENTS, B.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, B.Ev.THREAT_EVENTS_FILTERS, B.Ev.ABUSE_REPORT_BUTTON_CLICK, B.Ev.ABUSE_REPORT_SUBMIT_CLICK, B.Ev.ABUSE_REPORT_SUBMIT_FAILED, B.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, B.v9.EXPAND_INSIGHT_ROW, B.v9.ONE_CLICK_RESOLVE_BUTTON, B.v9.FOLLOW_RESOLVE_URL, B.v9.MANAGE_INSIGHT, B.v9.CLICK_SCAN_NOW, B.v9.CLICK_EXPORT_INSIGHTS, B.v9.BULK_ARCHIVE, B.v9.CLICK_DETAILS_BUTTON, w.Fj[w.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, w.Fj[w.kq.ENDPOINT_MANAGEMENT].detailedMetrics, w.Fj[w.kq.ENDPOINT_MANAGEMENT].createEndpoint, w.Fj[w.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, w.Fj[w.kq.ENDPOINT_MANAGEMENT].deployRouting, w.Fj[w.kq.ENDPOINT_MANAGEMENT].deleteRouting, w.Fj[w.kq.API_DISCOVERY].viewDiscoveredEndpoints, w.Fj[w.kq.API_DISCOVERY].saveDiscoveredEndpoint, w.Fj[w.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, w.Fj[w.kq.SCHEMA_VALIDATION].viewSchemasList, w.Fj[w.kq.SCHEMA_VALIDATION].uploadSchema, w.Fj[w.kq.SCHEMA_VALIDATION].viewSchemaAdoption, w.Fj[w.kq.SCHEMA_VALIDATION].downloadSchema, w.Fj[w.kq.SCHEMA_VALIDATION].deleteSchema, w.Fj[w.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, w.Fj[w.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, w.Fj[w.kq.SEQUENCE_ANALYTICS].viewSequencesPage, w.Fj[w.kq.JWT_VALIDATION].viewJWTRules, w.Fj[w.kq.JWT_VALIDATION].addJWTRule, w.Fj[w.kq.JWT_VALIDATION].editJWTRule, w.Fj[w.kq.JWT_VALIDATION].deleteJWTRule, w.Fj[w.kq.JWT_VALIDATION].reprioritizeJWTRule, w.Fj[w.kq.JWT_VALIDATION].viewJWTConfigs, w.Fj[w.kq.JWT_VALIDATION].addJWTConfig, w.Fj[w.kq.JWT_VALIDATION].editJWTConfig, w.Fj[w.kq.JWT_VALIDATION].deleteJWTConfig, w.Fj[w.kq.SETTINGS].redirectToFirewallRulesTemplate, w.Fj[w.kq.SETTINGS].redirectToPages, w.Fj[w.kq.SETTINGS].listSessionIdentifiers, w.Fj[w.kq.SETTINGS].listRequestsContainingSessionIdentifiers, w.Fj[w.kq.SETTINGS].addOrRemoveSessionIdentifiers, w.Fj[w.kq.SETTINGS].redirectToCustomRules, w.Fj[w.kq.SETTINGS].listAllFallthroughSchemas, w.Fj[w.kq.SEQUENCE_RULES].listSequenceRules, w.Fj[w.kq.SEQUENCE_RULES].deleteSequenceRule, w.Fj[w.kq.SEQUENCE_RULES].reorderSequenceRule, w.Fj[w.kq.SEQUENCE_RULES].createSequenceRule, w.Fj[w.kq.SEQUENCE_RULES].editSequenceRule, ne.Z.ANALYTICS, ne.Z.CREATE_AND_DEPLOY, ne.Z.CREATE_MONITOR_LINK, ne.Z.CREATE_MONITOR, ne.Z.CREATE_POOL_LINK, ne.Z.CREATE_POOL, ne.Z.EDIT_MONITOR, ne.Z.EDIT_POOL, ne.Z.LOAD_BALANCING_TABLE, ne.Z.POOL_TABLE, ne.Z.EDIT_MONITOR_LINK, ne.Z.EDIT_POOL_LINK, ...R.eT, V.y.SECONDARY_DNS_NOTIFICATION_CREATE, V.y.SECONDARY_DNS_NOTIFICATION_UPDATE, V.y.SECONDARY_DNS_NOTIFICATION_DELETE, H.U.ZONE_TRANSFER_SUCCESS, H.U.DNS_RECORD_CREATE, H.U.DNS_RECORD_UPDATE, H.U.DNS_RECORD_DELETE, Ke.Y.PEER_DNS_CREATE, Ke.Y.PEER_DNS_UPDATE, Ke.Y.PEER_DNS_DELETE, Ke.Y.ZONE_TRANSFER_ENABLE, Ke.Y.ZONE_TRANSFER_DISABLE, be.V.ARGO_ENABLEMENT, be.V.ARGO_GEO_ANALYTICS_FETCH, be.V.ARGO_GLOBAL_ANALYTICS_FETCH, pe.X.VIEW_BUCKETS_LIST, pe.X.CREATE_BUCKET, pe.X.VALIDATE_BUCKET, pe.X.DELETE_BUCKET, pe.X.VIEW_CAPTURES_LIST, pe.X.CREATE_SIMPLE_CAPTURE, pe.X.CREATE_FULL_CAPTURE, pe.X.VIEW_FULL_CAPTURE, pe.X.DOWNLOAD_SIMPLE_CAPTURE, $.bK.VIEW_RULES, $.bK.CREATE_RULE, $.bK.UPDATE_RULE, $.bK.DELETE_RULE, $.bK.VIEW_CONFIGURATION, $.bK.CREATE_CONFIGURATION, $.bK.UPDATE_CONFIGURATION, $.bK.DELETE_CONFIGURATION, se.r8.VIEW_ALERTS, se.r8.VIEW_ALERTS_HISTORY, se.r8.MAGIC_OVERVIEW_ANALYTICS, se.VZ.CREATE_SITE, se.VZ.CREATE_TUNNEL, se.VZ.CREATE_STATIC_ROUTE, oe.o4.CLICK_ADAPTIVE_SAMPLING, oe.o4.CLICK_TO_LOG_EXPLORER_BANNER, oe.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, oe.o4.CLICK_SWITCH_TO_RAW_LOGS, oe.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", k.U.REGISTER_DOMAIN_SEARCH_SUBMIT, k.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, k.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, k.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, k.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, k.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, k.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, k.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, k.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, k.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, k.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, k.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, k.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, k.U.REGISTER_DOMAIN_CHECKOUT_ERROR, k.U.TRANSFER_DOMAIN_CHANGE_STEP, k.U.RENEW_DOMAIN_COMPLETED, k.U.RESTORE_DOMAIN_INIT, k.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, k.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, k.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, k.U.RESTORE_DOMAIN_FAILURE, k.U.RESTORE_DOMAIN_COMPLETED, k.U.DOMAIN_DELETE_INIT, k.U.DOMAIN_DELETE_COMPLETED, k.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, k.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, k.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, k.U.DOMAIN_DELETE_CONFIRM_DELETE, k.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, k.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, k.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, k.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, k.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, k.U.DOMAIN_MOVE_START_FLOW, k.U.DOMAIN_MOVE_OPEN_DOCS, k.U.DOMAIN_MOVE_CLOSE_FLOW, k.U.DOMAIN_MOVE_PROGRESS_FLOW, k.U.DOMAIN_MOVE_SUBMIT, k.U.DOMAIN_MOVE_INITIATE_SUCCESS, k.U.DOMAIN_MOVE_INITIATE_ERROR, k.U.DOMAIN_MOVE_CANCEL, k.U.DOMAIN_MOVE_CANCEL_SUCCESS, k.U.DOMAIN_MOVE_CANCEL_ERROR, k.U.ACTION_CENTER_NAVIGATE, k.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, k.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, k.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, Je.z3.CREATE_SECRET, Je.z3.DELETE_SECRET, Je.z3.BIND_SECRET, Je.z3.DUPLICATE_SECRET, Je.z3.EDIT_SECRET, Y.KO.CLICK_GET_STARTED_GUIDE, Y.KO.CLICK_PIPELINE_DOCUMENTATION, Y.KO.CLICK_QUICK_LINK, Y.KO.CREATE_PIPELINE, Y.KO.DELETE_PIPELINE, Y.KO.LIST_PIPELINES, Y.KO.VIEW_PIPELINE, L.S.EXISTING_DOMAIN, L.S.NEW_DOMAIN, L.S.WAF_RULESET, L.S.WORKERS, L.S.PAGES, L.S.R2, L.S.ACCOUNT_MEMBERS, ue._.TEMPLATE_PRODUCT_SELECTED, ue._.TEMPLATE_SELECTED, ue._.TEMPLATE_SAVE_DRAFT, ue._.TEMPLATE_CANCEL, ue._.TEMPLATE_DEPLOY, ge.D.CLICK_GO_BACK_SHARE_MODAL, ge.D.CLICK_MENU_ITEM_SHARE, ge.D.CLICK_ON_CANCEL_SHARE_MODAL, ge.D.CLICK_ON_CLOSE_SHARE_MODAL, ge.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, ge.D.CLICK_ON_DELETE_RULESET, ge.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, ge.D.CLICK_ON_EDIT_SHARE_PERMISSION, ge.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, ge.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, ge.D.CLICK_ON_SHARE_TABLE_ROW, K.pR.CLICK_GEOGRAPHICAL_TEMPLATE, K.pR.CLICK_IP_TEMPLATE, K.pR.CLICK_USER_AGENT_TEMPLATE, K.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, ce.vc.CREATED, ce.vc.ENABLED, ce.vc.DISABLED, ce.vc.DELETED, ce.vc.UPDATED, ce.vc.DOWNLOADED, W.Gk.REQUEST_REVIEW, W.Gk.COPY_URL, M.v.FIELD, M.v.OPERATOR, Ye.Vj.SHOW_LCC_MIGRATION_BANNER, Ye.Vj.CLICK_LCC_DOCUMENTATION, Ye.Vj.CLICK_LCC_UPGRADE_GUIDE, Ye.Vj.SHOW_LCC_MIGRATION_WARNING, ve.y.CLICK_DISMISS_INELIGIBILITY, ve.y.CLICK_NEXT_STEP, ve.y.CLICK_OPT_IN, ve.y.CLICK_OPT_IN_BUTTON, ve.y.CLICK_OPT_OUT_BUTTON, ve.y.DISPLAY_MODAL, ve.y.DISPLAY_OPT_OUT_MODAL, ve.y.DISPLAY_TOOLTIP_NOT_AVAILABLE, ve.y.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, Pe.AZ.LOAD_INSIGHTS, Pe.AZ.OPEN_SIDE_MODAL_INSIGHT, Pe.AZ.CLOSE_SIDE_MODAL_INSIGHT, Pe.AZ.CLICK_ACTION_INSIGHT, Xe.JR.ADD_SUSPICIOUS_ACTIVITY_FILTER, Xe.JR.REMOVE_SUSPICIOUS_ACTIVITY_FILTER),
				pt = n.eg.exactStrict(n.eg.object({
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
				Q = (ie, re) => {
					const [p, h] = de(re);
					let J, _e;
					return (0, n.nM)(qe.decode(ie)) && (J = new T.Uh(ie)), h && h.length > 0 && (_e = new T.oV(ie, h)), [p, J, _e]
				},
				de = ie => {
					const re = pt.decode(ie);
					if ((0, n.nM)(re)) {
						const p = re.left.map(({
							context: h
						}) => h.map(({
							key: J
						}) => J)).reduce((h, J) => h.concat(J), []).filter(h => h in ie);
						return [ye(p, ie), p]
					}
					return [ie, []]
				},
				ye = (ie, re) => Object.entries(re).reduce((p, [h, J]) => (ie.includes(h) || (p[h] = J), p), {}),
				Be = ie => (re, p, h) => {
					const [J, _e, Ae] = Q(p, h);
					if (_e) throw _e;
					return Ae && console.error(Ae), ie(re, p, J)
				};
			var Ue = t("../react/utils/zaraz.ts");
			const Ne = {
					identify: !0
				},
				et = ie => (re, p, h) => (Ne[p] || Ue.tg === null || Ue.tg === void 0 || Ue.tg.track(p, h), ie(re, p, h));
			var ct = t("../react/common/selectors/userSelectors.ts"),
				gt = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function tt(ie) {
				for (var re = 1; re < arguments.length; re++) {
					var p = arguments[re] != null ? Object(arguments[re]) : {},
						h = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(p).filter(function(J) {
						return Object.getOwnPropertyDescriptor(p, J).enumerable
					})), h.forEach(function(J) {
						Et(ie, J, p[J])
					})
				}
				return ie
			}

			function Et(ie, re, p) {
				return re = yt(re), re in ie ? Object.defineProperty(ie, re, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ie[re] = p, ie
			}

			function yt(ie) {
				var re = mt(ie, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function mt(ie, re) {
				if (typeof ie != "object" || ie === null) return ie;
				var p = ie[Symbol.toPrimitive];
				if (p !== void 0) {
					var h = p.call(ie, re || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(ie)
			}
			const ke = new Set(["cf_argo", "load_balancing_basic_plus"]),
				Ce = new Set(["pro", "business"]),
				$e = ({
					price: ie,
					ratePlanId: re,
					ratePlanName: p,
					frequency: h,
					isNewSubscription: J
				}) => ({
					event: "purchase",
					new_subscription: J,
					ecommerce: {
						transaction_id: (0, gt.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: ie
					},
					items: [{
						item_id: re,
						item_name: p || re,
						frequency: h,
						price: ie
					}]
				}),
				ht = ie => {
					const {
						price: re,
						frequency: p,
						plan: h,
						ratePlanId: J,
						ratePlanName: _e
					} = ie;
					return Ce.has(h) ? tt({}, $e({
						price: re,
						ratePlanId: J,
						ratePlanName: _e,
						frequency: p,
						isNewSubscription: !0
					}), {
						label: h
					}) : void 0
				},
				lt = ie => {
					const {
						price: re,
						frequency: p,
						ratePlan: h,
						ratePlanName: J
					} = ie;
					return ke.has(h) ? tt({}, $e({
						price: re,
						ratePlanId: h,
						ratePlanName: J,
						frequency: p,
						isNewSubscription: !0
					}), {
						label: h
					}) : void 0
				},
				bt = ie => {
					const {
						price: re,
						frequency: p,
						plan: h,
						ratePlanId: J,
						ratePlanName: _e,
						label: Ae
					} = ie;
					return Ce.has(h) ? tt({}, $e({
						price: re,
						frequency: p,
						ratePlanId: J,
						ratePlanName: _e,
						isNewSubscription: !1
					}), {
						label: Ae || h
					}) : void 0
				},
				G = ie => {
					const {
						price: re,
						frequency: p,
						ratePlan: h,
						ratePlanName: J,
						oldRatePlan: _e
					} = ie;
					return ke.has(h) ? tt({}, $e({
						price: re,
						frequency: p,
						ratePlanId: h,
						ratePlanName: J,
						isNewSubscription: !1
					}), {
						label: `${_e}->${h}`
					}) : void 0
				},
				le = "pageview",
				Ee = "create zone",
				Te = "create user",
				De = "Plan Purchase Success",
				xe = "Product Purchase Success",
				Qe = "Plan Update Success",
				nt = "Product Update Success",
				we = {
					[le]: !0,
					[Ee]: !0,
					[Te]: !0,
					[De]: !0,
					[xe]: !0,
					[Qe]: !0,
					[nt]: !0
				},
				Ct = ie => {
					var re;
					return !!((re = ie.gates.assignments) === null || re === void 0 ? void 0 : re["dx-enable-google-tag-manager"])
				},
				ut = ie => {
					const re = /\|MCMID\|([0-9]+)\|/,
						p = ie.match(re);
					return p ? p[1] : void 0
				},
				Nt = ie => {
					var re;
					const {
						deviceViewport: p,
						page: h,
						previousPage: J,
						pageName: _e,
						utm_campaign: Ae,
						_ga: Fe,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Ge
					} = ie, {
						origin: ze
					} = window.location, rt = (0, ct.PR)((0, u.bh)().getState());
					return {
						event: J !== void 0 && h !== J ? "virtual_page_view" : "page_load",
						device_type: p,
						hostname: ze,
						language: navigator.language,
						locale: (0, l.r)((0, u.bh)().getState()),
						page_location: h ? `${ze}${h}` : "[redacted]",
						page_path: h ? `${h}` : "[redacted]",
						page_referrer: J ? `${ze}/${J}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: _e || "[redacted]",
						page_url: h ? `${ze}${h}` : "[redacted]",
						query: Ae ? `?utm_campaign=${Ae}` : "[redacted]",
						user_properties: {
							ga_client_id: (re = Fe) !== null && re !== void 0 ? re : void 0,
							ga_client_id_s: Fe ? `s${Fe}` : void 0,
							user_id: Ot() ? rt == null ? void 0 : rt.id : void 0,
							ecid: Ge ? ut(Ge) : void 0
						}
					}
				},
				ft = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				at = ie => {
					const {
						status: re
					} = ie;
					return re === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				At = (ie, re) => {
					switch (ie) {
						case le:
							return Nt(re);
						case Ee:
							return ft();
						case Te:
							return at(re);
						case De:
							return ht(re);
						case xe:
							return lt(re);
						case Qe:
							return bt(re);
						case nt:
							return G(re);
						default:
							return
					}
				},
				Rt = ie => (re, p, h) => {
					if (we[p]) {
						var J;
						const _e = At(p, h);
						_e && ((J = window.dataLayer) === null || J === void 0 || J.push(_e))
					}
					return ie(re, p, h)
				};
			var Tt = t("../react/utils/cookiePreferences.ts");

			function Pt(ie) {
				for (var re = 1; re < arguments.length; re++) {
					var p = arguments[re] != null ? Object(arguments[re]) : {},
						h = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(p).filter(function(J) {
						return Object.getOwnPropertyDescriptor(p, J).enumerable
					})), h.forEach(function(J) {
						It(ie, J, p[J])
					})
				}
				return ie
			}

			function It(ie, re, p) {
				return re = He(re), re in ie ? Object.defineProperty(ie, re, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ie[re] = p, ie
			}

			function He(ie) {
				var re = Dt(ie, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function Dt(ie, re) {
				if (typeof ie != "object" || ie === null) return ie;
				var p = ie[Symbol.toPrimitive];
				if (p !== void 0) {
					var h = p.call(ie, re || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(ie)
			}
			const xt = ie => {
					const re = Ct((0, u.bh)().getState());
					r().init(Pt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: vt() && !(0, o.gm)() && Ot(),
						middlewares: [S, Be, C, et, ...re ? [Rt] : []]
					}, ie))
				},
				Lt = () => {
					r().identify(Pt({}, (0, e.getAttribution)(), {
						locale: (0, l.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, f.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				vt = () => !0,
				Bt = () => {
					(0, Tt.kT)("sparrow_id")
				},
				Ot = () => (0, Tt.Xm)()
		},
		"../utils/initStyles.ts": function(F, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = t("../react/app/providers/storeContainer.js");
			const o = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				l = s => {
					const g = [];
					for (let v in s.colors) {
						const n = s.colors[v];
						if (Array.isArray(n) && v !== "categorical")
							for (let c = 0; c < n.length; ++c) g.push(`--cf-${v}-${c}:${n[c]};`)
					}
					return g.join(`
`)
				},
				f = () => {
					const s = (0, e.Yc)(),
						g = `
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
					let v = document.getElementById(o);
					v ? v.innerText = "" : (v = document.createElement("style"), v.id = o, u.appendChild(v)), v.appendChild(document.createTextNode(g)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(f), E.Z = f
		},
		"../utils/sentry/lastSentEventId.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let o = "";
				return {
					setEventId: f => (!f || typeof f != "string" || (o = f), o),
					getEventId: () => o
				}
			})()
		},
		"../utils/zaraz.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Ro: function() {
					return c
				},
				bM: function() {
					return g
				},
				tg: function() {
					return s
				},
				yn: function() {
					return n
				}
			});

			function e(i) {
				for (var d = 1; d < arguments.length; d++) {
					var a = arguments[d] != null ? Object(arguments[d]) : {},
						m = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(a).filter(function(I) {
						return Object.getOwnPropertyDescriptor(a, I).enumerable
					})), m.forEach(function(I) {
						r(i, I, a[I])
					})
				}
				return i
			}

			function r(i, d, a) {
				return d = o(d), d in i ? Object.defineProperty(i, d, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = a, i
			}

			function o(i) {
				var d = u(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function u(i, d) {
				if (typeof i != "object" || i === null) return i;
				var a = i[Symbol.toPrimitive];
				if (a !== void 0) {
					var m = a.call(i, d || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			const l = {
					track: (i, d) => null,
					set: (i, d) => console.log(`zaraz.set(${i}, ${d})`)
				},
				f = {
					track: (i, d) => {
						var a;
						(a = window.zaraz) === null || a === void 0 || a.track(i, e({}, d, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (i, d) => {
						var a;
						return (a = window.zaraz) === null || a === void 0 ? void 0 : a.set(i, d)
					}
				};
			let s;
			const g = () => {
					window.zaraz, s = f
				},
				v = ["email", "first_name", "last_name"],
				n = i => {
					v.forEach(d => {
						var a;
						(a = s) === null || a === void 0 || a.set(d, i[d])
					})
				},
				c = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(F, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = t.n(o),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(f),
				g = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				v = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				a = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				m = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				I = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				P = t("../../../common/component/component-filter-bar/src/constants.js"),
				b = t("../../../common/component/component-filter-bar/src/utils.js");

			function y() {
				return y = Object.assign ? Object.assign.bind() : function(B) {
					for (var w = 1; w < arguments.length; w++) {
						var x = arguments[w];
						for (var K in x) Object.prototype.hasOwnProperty.call(x, K) && (B[K] = x[K])
					}
					return B
				}, y.apply(this, arguments)
			}

			function O(B) {
				for (var w = 1; w < arguments.length; w++) {
					var x = arguments[w] != null ? Object(arguments[w]) : {},
						K = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && K.push.apply(K, Object.getOwnPropertySymbols(x).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(x, ee).enumerable
					})), K.forEach(function(ee) {
						_(B, ee, x[ee])
					})
				}
				return B
			}

			function _(B, w, x) {
				return w = C(w), w in B ? Object.defineProperty(B, w, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[w] = x, B
			}

			function C(B) {
				var w = S(B, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function S(B, w) {
				if (typeof B != "object" || B === null) return B;
				var x = B[Symbol.toPrimitive];
				if (x !== void 0) {
					var K = x.call(B, w || "default");
					if (typeof K != "object") return K;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(B)
			}
			const L = 70,
				M = (0, l.createStyledComponent)(({
					showOverflow: B
				}) => O({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, B ? {} : {
					maxHeight: L,
					overflow: "hidden"
				})),
				A = (0, l.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				T = (0, l.createStyledComponent)(({
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
				k = (0, l.createStyledComponent)(({
					theme: B
				}) => ({
					color: B.colors.gray[4],
					mr: 1
				}), "span"),
				U = (0, l.createStyledComponent)(() => ({
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
				X = (0, l.createStyledComponent)(({
					buttonStyle: B
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
				}, B), v.zx),
				se = (0, l.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				pe = (0, l.createStyledComponent)(({
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
				ue = (0, l.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				z = B => B.current ? [...B.current.children].reduce((w, x) => (x.offsetTop >= L && w++, w), 0) : 0;
			let Y = 0;
			class W extends e.Component {
				constructor() {
					super();
					_(this, "overflowWrapper", (0, e.createRef)()), _(this, "hasOverflowed", w => {
						const x = z(this.overflowWrapper);
						w.scrollHeight > L && x >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (w.scrollHeight < L || x === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), _(this, "addNewFilter", () => {
						const {
							filterDefinitions: w
						} = this.props, x = (0, b.TE)(w), K = Object.keys(x)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: K,
								operator: (0, b.uv)(K, x),
								value: (0, b.TT)(K, x)
							}
						})
					}), _(this, "handleOpenFilterEdit", w => {
						this.setState({
							openFilter: w,
							filterChanges: O({}, this.props.filters[w])
						})
					}), _(this, "handleRemoveFilterClick", (w, x) => {
						w.stopPropagation(), this.removeFilter(x)
					}), _(this, "removeFilter", w => {
						const {
							handleFiltersChange: x
						} = this.props, K = [...this.props.filters], ee = K[w];
						K.splice(w, 1), x(K), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
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
					}), _(this, "handleFilterSubmit", w => {
						const {
							filterDefinitions: x
						} = this.props;
						w.preventDefault();
						const {
							filterChanges: K
						} = this.state, ee = typeof x[K.key].parse == "function" ? Array.isArray(K.value) ? K.value.map(x[K.key].parse) : x[K.key].parse(K.value) : K.value;
						if (x[K.key].validate && (Array.isArray(ee) ? !ee.every(x[K.key].validate) : !x[K.key].validate(ee))) return this.setState({
							invalid: !0
						});
						const te = [...this.props.filters],
							ne = O({}, K, {
								value: ee
							}),
							R = !te[this.state.openFilter];
						R ? te.push(ne) : te[this.state.openFilter] = O({}, ne), this.props.handleFiltersChange(te, ne), (R ? this.props.onAddFilter : this.props.onEditFilter)({
							field: ne.key,
							operator: ne.operator,
							value: ne.value
						}), this.closeOpenFilterChanges()
					}), _(this, "handlePendingKeyChange", ({
						value: w
					}) => {
						const {
							filterDefinitions: x
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: w,
								operator: (0, b.uv)(w, x),
								value: (0, b.TT)(w, x)
							}
						})
					}), _(this, "handlePendingOperatorChange", ({
						value: w
					}) => {
						let x = O({}, this.state.filterChanges, {
							operator: w
						});
						if ((0, b.dr)(w)) {
							var K, ee;
							((K = this.state.filterChanges) === null || K === void 0 ? void 0 : K.value) && !Array.isArray((ee = this.state.filterChanges) === null || ee === void 0 ? void 0 : ee.value) && (x.value = [this.state.filterChanges.value])
						} else {
							var te, ne, R;
							((te = this.state.filterChanges) === null || te === void 0 ? void 0 : te.value) && Array.isArray((ne = this.state.filterChanges) === null || ne === void 0 ? void 0 : ne.value) && ((R = this.state.filterChanges) === null || R === void 0 ? void 0 : R.value.length) > 0 && (x.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: x
						})
					}), _(this, "handlePendingValueChange", w => {
						this.setState({
							invalid: !1,
							filterChanges: O({}, this.state.filterChanges, {
								value: w
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
						id: ++Y
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(w) {
					w.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(w) {
					const {
						formatLabel: x,
						filterDefinitions: K
					} = this.props, {
						operator: ee
					} = this.state.filterChanges, te = K[this.state.filterChanges.key], ne = this.state.filterChanges.value, R = H => Array.isArray(H) ? H.map($ => $.value) : (H == null ? void 0 : H.value) || null;
					if (te.renderValueComponent) return te.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (te.type) {
						case P.k.custom: {
							var V;
							return r().createElement(te.CustomComponent, y({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (V = te == null ? void 0 : te.customProps) !== null && V !== void 0 ? V : {}))
						}
						case P.k.select:
							return (0, b.dr)(ee) ? r().createElement(a.Z, {
								searchable: !0,
								multi: !0,
								creatable: !te.options,
								value: typeof ne.split == "function" ? ne == null ? void 0 : ne.split(",") : Array.isArray(ne) ? ne : [],
								options: te.options ? te.options.map(H => ({
									value: H.value || H,
									label: H.label || x(this.state.filterChanges.key, H, w)
								})) : ne ? (Array.isArray(ne) ? ne : ne.split(",")).map(H => ({
									label: H,
									value: H
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(f.Trans, {
									id: te.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: te.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: H => {
									this.handlePendingValueChange(R(H))
								},
								isValidNewOption: H => {
									const $ = te.validate;
									return !$ && H || H && $([H])
								},
								getNewOptionData: (H, $) => ({
									value: H,
									label: $
								})
							}) : r().createElement(i.hQ, {
								hideLabel: !0,
								value: ne,
								options: te.options.map(H => ({
									value: H,
									label: x(this.state.filterChanges.key, H, w)
								})),
								onChange: ({
									value: H
								}) => this.handlePendingValueChange(H)
							});
						case P.k.string:
						default:
							return (0, b.dr)(ee) ? r().createElement(a.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof ne.split == "function" ? ne == null ? void 0 : ne.split(",") : Array.isArray(ne) ? ne : [],
								options: ne ? (Array.isArray(ne) ? ne : ne.split(",")).map(H => ({
									label: H,
									value: H
								})) : [],
								noOptionsMessage: () => null,
								placeholder: w.t("analytics.report.filters.labels.placeholder", {
									example: K[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: H => {
									this.handlePendingValueChange(R(H))
								},
								isValidNewOption: H => {
									const $ = te.validate;
									return !$ && H || H && $([H])
								},
								getNewOptionData: (H, $) => ({
									value: H,
									label: $
								}),
								formatCreateLabel: H => w.t("filter_editor.value_create_label", {
									value: H
								})
							}) : r().createElement(f.I18n, null, H => r().createElement(g.I, {
								value: this.state.filterChanges.value,
								onChange: $ => this.handlePendingValueChange($.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: H.t("analytics.report.filters.labels.placeholder", {
									example: K[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: w,
						filterDefinitions: x,
						modalStyles: K,
						filterIconType: ee,
						buttonStyle: te
					} = this.props, ne = z(this.overflowWrapper), R = `filterPanel${this.state.id}`, V = this.state.openFilter !== null;
					return r().createElement(f.I18n, null, H => r().createElement(d.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(ue, null, r().createElement(X, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": V,
						"aria-controls": R,
						inverted: !0,
						buttonStyle: te
					}, r().createElement(n.J, {
						type: ee || "add",
						mr: 1,
						label: H.t("common.add", {
							_: "Add"
						})
					}), r().createElement(f.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && r().createElement(se, null, r().createElement(f.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(M, {
						innerRef: this.overflowWrapper,
						overflowLimit: L,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map(($, oe) => {
						const {
							key: ce,
							operator: ge,
							value: me
						} = $, be = x[ce].ignoreLabelTranslation ? x[ce].label : H.t(x[ce].label), Le = H.t(`analytics.report.filters.operators.${ge}`), je = Array.isArray(me) ? me.map(Se => w(ce, Se, H)).join(", ") : w(ce, me, H), he = `${be} ${Le} ${je}`;
						return r().createElement(A, {
							key: `${ce}-${ge}-${me}`,
							title: he
						}, r().createElement(T, {
							onClick: () => this.handleOpenFilterEdit(oe)
						}, r().createElement(d.ZC, {
							display: "flex"
						}, r().createElement(D, null, be), r().createElement(k, null, Le), r().createElement(U, null, je), (0, b.oN)($, x) ? r().createElement(c.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(pe, {
							onClick: Se => this.handleRemoveFilterClick(Se, oe),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), V && r().createElement(I.Z, {
						id: R,
						filterDefinitions: x,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, b.oN)(this.state.filterChanges, x),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: w,
						modalStyles: K
					}), this.state.hasOverflowed && r().createElement(m.Z, {
						count: ne,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			_(W, "propTypes", {
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
			}), E.Z = W
		},
		"../../../common/component/component-filter-bar/src/index.js": function(F, E, t) {
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
					return u.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				r = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				o = t("../../../common/component/component-filter-bar/src/constants.js"),
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

			function e(s, g, v) {
				return g = r(g), g in s ? Object.defineProperty(s, g, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[g] = v, s
			}

			function r(s) {
				var g = o(s, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function o(s, g) {
				if (typeof s != "object" || s === null) return s;
				var v = s[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(s, g || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(s)
			}
			class u extends Error {
				constructor(g, v) {
					super(v);
					e(this, "translationKey", void 0), this.translationKey = g, this.name = "TranslatorError"
				}
			}
			class l extends u {
				constructor(g) {
					super(g, `Translation key not found: ${g}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var f = null
		},
		"../../../common/util/types/src/api/domain.ts": function(F, E, t) {
			"use strict";
			t.d(E, {
				Aw: function() {
					return S
				},
				Ib: function() {
					return _
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
					return a
				},
				W7: function() {
					return b
				},
				dN: function() {
					return M
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
				o = e.eg.object({
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
				s = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: f.optional,
					years: e.eg.number
				}),
				g = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let v = function(A) {
				return A.ONBOARDING_INITIATED = "Onboarding Initiated", A.ONBOARDED = "Onboarded", A.PENDING_REGISTRY_LOCK = "Pending Registry Lock", A.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", A.REGISTRY_UNLOCKED = "Registry Unlocked", A.LOCKED = "Locked", A.FAILED_TO_LOCK = "Failed To Lock", A.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", A.UNLOCKED = "Unlocked", A.OFFBOARDED = "Offboarded", A
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
					fees: g.optional,
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
				c = e.eg.object({
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
				a = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let m = function(A) {
				return A.PENDING = "pending", A.VERIFIED = "verified", A.REJECTED = "rejected", A.PENDING_DELETE = "pending_delete", A.DELETED = "deleted", A
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
			let b = function(A) {
				return A.PENDING = "pending", A.PENDING_UPDATE = "pending_update", A.ENABLED = "enabled", A.DISABLED = "disabled", A
			}({});
			const y = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(b)
				}),
				O = e.eg.intersection([y, P]),
				_ = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let C = function(A) {
				return A.UNLOCK_APPROVAL = "UnlockApprovalRequest", A.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", A.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", A.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", A
			}({});
			const S = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				L = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(F, E, t) {
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
					return u
				},
				qu: function() {
					return e
				},
				zc: function() {
					return f
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
				u = function(s) {
					return s.ZONE_LOCKDOWN = "zoneLockdown", s.UA_BLOCK = "uaBlock", s.BIC = "bic", s.HOT = "hot", s.SECURITY_LEVEL = "securityLevel", s.RATE_LIMIT = "rateLimit", s.WAF = "waf", s
				}({}),
				l = function(s) {
					return s.DEFAULT = "default", s.MEDIUM = "medium", s.LOW = "low", s.EOFF = "eoff", s.HIGH = "high", s.VERY_HIGH = "very_high", s
				}({}),
				f = function(s) {
					return s.DEFAULT = "", s.XML = "text/xml", s.JSON = "application/json", s.TEXT = "text/plain", s.HTML = "text/html", s
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(F, E, t) {
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
			const r = (o, u) => {
				if (u !== void 0) throw new Error("Unexpected object: " + o);
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
		"../react/common/out.css": function(F, E, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[F.id, e, ""]
			]);
			var r, o, u = {
				hmr: !0
			};
			u.transform = r, u.insertInto = void 0;
			var l = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, u);
			e.locals && (F.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function(F, E, t) {
			E = F.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), E.push([F.id, `/*! tailwindcss v4.1.5 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, components, utilities;
@layer theme {
  :root, :host {
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
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
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
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
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
  .-top-7 {
    top: calc(var(--spacing) * -7);
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
  .-bottom-7 {
    bottom: calc(var(--spacing) * -7);
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
  .z-\\[9999\\] {
    z-index: 9999;
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
  .mx-auto {
    margin-inline: auto;
  }
  .my-1\\.5 {
    margin-block: calc(var(--spacing) * 1.5);
  }
  .my-4 {
    margin-block: calc(var(--spacing) * 4);
  }
  .\\!mt-4 {
    margin-top: calc(var(--spacing) * 4) !important;
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
  .max-w-50 {
    max-width: calc(var(--spacing) * 50);
  }
  .max-w-140 {
    max-width: calc(var(--spacing) * 140);
  }
  .max-w-\\[60ch\\] {
    max-width: 60ch;
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
  .-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1/2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-0 {
    --tw-translate-x: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-full {
    --tw-translate-x: 100%;
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
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
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
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
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
  .bg-gradient-to-r {
    --tw-gradient-position: to right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .from-transparent {
    --tw-gradient-from: transparent;
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
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .\\!px-2 {
    padding-inline: calc(var(--spacing) * 2) !important;
  }
  .\\!px-3 {
    padding-inline: calc(var(--spacing) * 3) !important;
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
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
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
  .pr-\\[14px\\] {
    padding-right: 14px;
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
  .font-mono {
    font-family: var(--font-mono);
  }
  .\\!text-base {
    font-size: var(--text-base) !important;
    line-height: var(--tw-leading, var(--text-base--line-height)) !important;
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
  .\\!text-\\[16px\\] {
    font-size: 16px !important;
  }
  .text-\\[12px\\] {
    font-size: 12px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .text-\\[16px\\] {
    font-size: 16px;
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
  .text-neutral-700 {
    color: var(--color-neutral-700);
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
  .dark\\:text-neutral-300 {
    &:where(.dark, .dark *) {
      color: var(--color-neutral-300);
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
  .dark\\:hover\\:text-white {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-white);
        }
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
  --color-bg-primary: #1d1d1d;
  --color-bg-secondary: var(--color-neutral-900);
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
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(F, E, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function r(o) {
				if (!t.o(e, o)) return Promise.resolve().then(function() {
					var f = new Error("Cannot find module '" + o + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				});
				var u = e[o],
					l = u[0];
				return t.e(u[1]).then(function() {
					return t.t(l, 1 | 16)
				})
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", F.exports = r
		}
	}
]);

//# debugId=09a81fa7-0768-5813-a90c-9eacdd87a473