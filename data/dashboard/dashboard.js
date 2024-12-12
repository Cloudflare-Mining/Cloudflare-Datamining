! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f020ac5f-83c2-5f38-a240-7915ce0ab7df")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				J8: function() {
					return a
				},
				Jd: function() {
					return l
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
				s = t("../../../../node_modules/query-string/query-string.js"),
				p = t.n(s),
				c = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m;
			const i = () => Object.keys(c.Z).reduce((_, O) => (O.indexOf("cf_beta.") === 0 && c.Z.get(O) === "true" && _.push(O.split(".").slice(1).join(".")), _), []),
				d = () => {
					var _, O, I;
					return ((_ = window) === null || _ === void 0 || (O = _.bootstrap) === null || O === void 0 || (I = O.data) === null || I === void 0 ? void 0 : I.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((m = window) === null || m === void 0 ? void 0 : m.location) && c.Z) {
				const _ = p().parse(window.location.search);
				_.beta_on && c.Z.set(`cf_beta.${_.beta_on}`, !0), _.beta_off && c.Z.set(`cf_beta.${_.beta_off}`, !1)
			}
			const y = {},
				n = _ => {
					var O, I, h;
					return Object.prototype.hasOwnProperty.call(y, _) ? y[_] : ((O = window) === null || O === void 0 || (I = O.bootstrap) === null || I === void 0 || (h = I.data) === null || h === void 0 ? void 0 : h.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(N => N === _) ? (y[_] = !0, !0) : (y[_] = !1, !1)
				},
				r = _ => c.Z ? c.Z.get(`cf_beta.${_}`) === !0 : !1,
				a = _ => r(_) || n(_),
				u = () => !0,
				l = () => {
					var _, O, I;
					return ((_ = window) === null || _ === void 0 || (O = _.bootstrap) === null || O === void 0 || (I = O.data) === null || I === void 0 ? void 0 : I.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				f = _ => {
					const O = (0, e.uF)(_),
						I = (O == null ? void 0 : O.roles) || [];
					return (0, o.qR)(location.pathname) && I.length === 1 && I.some(h => h === "Administrator Read Only")
				}
		},
		"../init.ts": function(j, v, t) {
			"use strict";
			t.r(v);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				s = t("../libs/init/initGlobal.ts"),
				p = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				c = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function m(w) {
				for (var B = 1; B < arguments.length; B++) {
					var q = arguments[B] != null ? Object(arguments[B]) : {},
						se = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && se.push.apply(se, Object.getOwnPropertySymbols(q).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(q, Ee).enumerable
					})), se.forEach(function(Ee) {
						i(w, Ee, q[Ee])
					})
				}
				return w
			}

			function i(w, B, q) {
				return B = d(B), B in w ? Object.defineProperty(w, B, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[B] = q, w
			}

			function d(w) {
				var B = y(w, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function y(w, B) {
				if (typeof w != "object" || w === null) return w;
				var q = w[Symbol.toPrimitive];
				if (q !== void 0) {
					var se = q.call(w, B || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(w)
			}
			const n = w => {
				const B = w && w.headers || {},
					q = new Headers(B);
				return q.append("X-Cross-Site-Security", "dash"), m({}, w, {
					headers: q
				})
			};
			(0, c.register)({
				request: (w, B) => {
					try {
						return new URL(w), w === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", B] : [w, B]
					} catch {
						return [w, n(B)]
					}
				}
			});
			var r = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				u = t("../react/app/providers/storeContainer.js");
			let l = "";
			const f = 61;

			function _(w) {
				const B = w.substr(1);
				if (B && l !== B) {
					const q = document.getElementById(B);
					if (q) {
						const se = q.getBoundingClientRect().top;
						if (se > 0) {
							const Ee = se - f;
							document.documentElement.scrollTop = Ee
						}
					}
				}
				l = B
			}

			function O(w) {
				w.listen(B => _(B.hash))
			}
			var I = t("../../../../node_modules/cookie/index.js"),
				h = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const N = "CF_dash_version",
				E = "cf_fv_preview",
				C = "current",
				R = "hash",
				b = "deploymentPreview",
				M = "fragmentPreview",
				T = w => w === C ? S() : L(),
				S = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				L = (w = 72) => {
					const B = 36e5;
					return new Date(Date.now() + w * B)
				},
				G = w => {
					switch (w) {
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
				$ = (w, B = !1) => {
					var q;
					const se = G(w),
						Ee = `
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
    <h1 id="error-title">${se.title}</h1>
    <p id="error-description">${se.description}</p>
  </div>
  `,
						we = B ? `
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
					return Ee + we
				},
				V = w => {
					var B;
					const q = document.getElementById(w);
					!q || (B = q.parentNode) === null || B === void 0 || B.removeChild(q)
				};

			function ce() {
				const w = document.getElementById("loading-state");
				w == null || w.classList.add("hide"), w == null || w.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(V)
				})
			}

			function ee(w) {
				var B;
				const q = document.getElementById("loading-state"),
					se = !!((B = I.parse(document.cookie)) === null || B === void 0 ? void 0 : B[N]);
				!q || (q.innerHTML = $(w == null ? void 0 : w.code, se))
			}
			var J = t("../utils/initStyles.ts"),
				ve = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				ne = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				U = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				H = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				oe = t("../../../../node_modules/history/esm/history.js"),
				pe = (0, oe.lX)(),
				Q = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				A = t("../react/utils/url.ts");
			const P = (0, Q.Rf)();
			let k;

			function K(w) {
				return re(w, "react-router-v5")
			}

			function re(w, B) {
				return (q, se = !0, Ee = !0) => {
					se && P && P.location && (k = q({
						name: (0, A.Fl)(P.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": B
						}
					})), Ee && w.listen && w.listen((we, Oe) => {
						if (Oe && (Oe === "PUSH" || Oe === "POP")) {
							k && k.finish();
							const nt = {
								"routing.instrumentation": B
							};
							k = q({
								name: (0, A.Fl)(we.pathname),
								op: "navigation",
								tags: nt
							})
						}
					})
				}
			}
			var Ce = t("../react/common/selectors/languagePreferenceSelector.ts"),
				Ie = t("../flags.ts"),
				Me = t("../utils/getDashVersion.ts"),
				ke = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				Z = t.n(ke),
				fe = t("../../../common/intl/intl-core/src/errors.ts"),
				Le = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Je = t("../react/common/middleware/sparrow/errors.ts");
			const Y = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ae = !0,
				de = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				ye = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function Pe(w, B, q) {
				return B = ze(B), B in w ? Object.defineProperty(w, B, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[B] = q, w
			}

			function ze(w) {
				var B = Ue(w, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function Ue(w, B) {
				if (typeof w != "object" || w === null) return w;
				var q = w[Symbol.toPrimitive];
				if (q !== void 0) {
					var se = q.call(w, B || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(w)
			}
			class je {
				constructor() {
					Pe(this, "name", je.id)
				}
				setupOnce() {
					t.g.console && (0, Le.hl)(t.g.console, "error", B => (...q) => {
						const se = q.find(Ee => Ee instanceof Error);
						if (Y && se) {
							let Ee, we = !0;
							if (se instanceof Je.ez) {
								const Oe = se instanceof Je.oV ? se.invalidProperties : void 0;
								Ee = {
									tags: {
										"sparrow.eventName": se.eventName
									},
									extra: {
										sparrow: {
											eventName: se.eventName,
											invalidProperties: Oe
										}
									},
									fingerprint: [se.name ? se.name : "SparrowValidationError"]
								}, we = !1
							} else if (se instanceof ke.SparrowIdCookieError) Ee = {
								extra: {
									sparrowIdCookie: se.cookie
								},
								fingerprint: [se.name ? se.name : "SparrowIdCookieError"]
							};
							else if (se.name === "ChunkLoadError") {
								Ee = {
									fingerprint: [se.name]
								};
								try {
									Ee.tags = {
										chunkId: se.message.split(" ")[2],
										chunkUrl: se.request
									}
								} catch {}
							} else se instanceof fe.YB && (Ee = {
								fingerprint: ["TranslatorError", se.translationKey]
							});
							we && r.Tb(se, Ee)
						}
						typeof B == "function" && B.apply(t.g.console, q)
					})
				}
			}
			Pe(je, "id", "ConsoleErrorIntegration");
			var Ae = null,
				Re = t("../utils/sentry/lastSentEventId.ts"),
				Fe = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				He = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const Ye = w => {
					const B = async q => {
						var se, Ee;
						const we = {
							envelope: q.body,
							url: w.url,
							isPreviewDeploy: (se = window) === null || se === void 0 || (Ee = se.build) === null || Ee === void 0 ? void 0 : Ee.isPreviewDeploy,
							release: (0, Me.t)()
						};
						try {
							const Oe = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(we)
							});
							return {
								statusCode: Oe.status,
								headers: {
									"x-sentry-rate-limits": Oe.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": Oe.headers.get("Retry-After")
								}
							}
						} catch (Oe) {
							return console.log(Oe), (0, He.$2)(Oe)
						}
					};
					return Fe.q(w, B)
				},
				Ve = () => {
					if (Y && ae) {
						var w, B, q, se, Ee, we, Oe, nt, pt, qe;
						let Dt = "production";
						((w = window) === null || w === void 0 || (B = w.build) === null || B === void 0 ? void 0 : B.isPreviewDeploy) && (Dt += "-preview"), ne.S({
							dsn: Y,
							release: (0, Me.t)(),
							environment: Dt,
							ignoreErrors: ye,
							allowUrls: de,
							autoSessionTracking: !1,
							integrations: [new U.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new je, new H.jK.BrowserTracing({
								routingInstrumentation: K(pe)
							})],
							tracesSampleRate: 0,
							transport: Ye,
							beforeSend: _t => (Re.e.setEventId(_t.event_id), _t)
						});
						const Ct = (0, u.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, Ie.Qw)(),
							USER_BETA_FLAGS: (0, Ie.ki)(),
							meta: {
								connection: {
									type: (q = window) === null || q === void 0 || (se = q.navigator) === null || se === void 0 || (Ee = se.connection) === null || Ee === void 0 ? void 0 : Ee.effectiveType,
									bandwidth: (we = window) === null || we === void 0 || (Oe = we.navigator) === null || Oe === void 0 || (nt = Oe.connection) === null || nt === void 0 ? void 0 : nt.downlink
								},
								languagePreference: (0, Ce.r)(Ct),
								isPreviewDeploy: (pt = window) === null || pt === void 0 || (qe = pt.build) === null || qe === void 0 ? void 0 : qe.isPreviewDeploy
							},
							utilGates: (0, ve.T2)(Ct)
						}), window.addEventListener("unhandledrejection", function(_t) {})
					}
				},
				z = w => {
					w ? r.av({
						id: w
					}) : r.av(null)
				};
			var te = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				De = () => {
					let w;
					try {
						w = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), w = window.location.search
					}
					if (!w.includes("remote[")) return;
					const B = new URLSearchParams(w),
						q = {};
					for (let [se, Ee] of B) se.includes("remote") && (q[se.replace(/remote\[|\]/g, "")] = Ee);
					te.Z.set("mfe-remotes", JSON.stringify(q))
				},
				Ne = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				Ke = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const Ze = "ANON_USER_ID";

			function lt() {
				var w, B, q, se;
				let Ee = (w = t.g) === null || w === void 0 || (B = w.bootstrap) === null || B === void 0 || (q = B.data) === null || q === void 0 || (se = q.user) === null || se === void 0 ? void 0 : se.id;
				if (!Ee) {
					let we = te.Z.get(Ze);
					if (!we) {
						let Oe = (0, Ke.Z)();
						te.Z.set(Ze, Oe), we = Oe
					}
					return we
				}
				return Ee
			}
			async function st() {
				const w = (0, u.bh)();
				w.dispatch((0, Ne.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await w.dispatch((0, ve.UL)({
					userId: lt()
				}))
			}
			class mt extends Error {
				constructor(B, q) {
					super(q);
					this.name = `${B} ${q}`
				}
			}
			const gt = () => {
					document.cookie.split(";").forEach(B => {
						const [q] = B.trim().split("=");
						document.cookie = `${q}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				ut = async () => {
					let w = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!w.ok) throw w.headers.get("content-type") === "text/html" && (await w.text()).toLowerCase().includes("cookie too large") && (r.$e(function(Ee) {
						Ee.setTag("init", "cookieTooLarge"), r.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), gt(), window.location.reload()), new mt("Bootstrap API Failure", w == null ? void 0 : w.status);
					return (await w.json()).result.data
				};
			var We = t("webpack/sharing/consume/default/react/react"),
				Te = t.n(We),
				Qe = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				at = t("webpack/sharing/consume/default/react-dom/react-dom"),
				it = t("webpack/sharing/consume/default/react-redux/react-redux"),
				W = t("../../../../node_modules/swr/core/dist/index.mjs"),
				F = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				X = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				ie = t("../react/shims/focus-visible.js"),
				ge = t("../react/app/components/DeepLink/index.ts"),
				be = t("../../../../node_modules/prop-types/index.js"),
				xe = t.n(be),
				x = t("../react/utils/translator.tsx"),
				me = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				_e = t("../../../dash/intl/intl-translations/src/index.ts"),
				Be = t("../../../../node_modules/query-string/query-string.js"),
				$e = t.n(Be),
				et = t("../react/common/actions/userActions.ts"),
				ot = t("../react/common/selectors/userSelectors.ts"),
				Ge = t("../react/utils/i18n.ts"),
				wt = t("../react/utils/bootstrap.ts");

			function Ft(w) {
				for (var B = 1; B < arguments.length; B++) {
					var q = arguments[B] != null ? Object(arguments[B]) : {},
						se = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && se.push.apply(se, Object.getOwnPropertySymbols(q).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(q, Ee).enumerable
					})), se.forEach(function(Ee) {
						xt(w, Ee, q[Ee])
					})
				}
				return w
			}

			function xt(w, B, q) {
				return B = $t(B), B in w ? Object.defineProperty(w, B, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[B] = q, w
			}

			function $t(w) {
				var B = jt(w, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function jt(w, B) {
				if (typeof w != "object" || w === null) return w;
				var q = w[Symbol.toPrimitive];
				if (q !== void 0) {
					var se = q.call(w, B || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(w)
			}
			let rt = $e().parse(location.search);
			const Mt = w => {
					const B = (0, wt.$8)() ? [(0, _e.Fy)(_e.if.changes), (0, _e.Fy)(_e.if.common), (0, _e.Fy)(_e.if.navigation), (0, _e.Fy)(_e.if.overview), (0, _e.Fy)(_e.if.onboarding), (0, _e.Fy)(_e.if.invite), (0, _e.Fy)(_e.if.login), (0, _e.Fy)(_e.if.dns), (0, _e.Fy)(_e.n4.ssl_tls), (0, _e.Fy)(_e.if.message_inbox), (0, _e.Fy)(_e.if.welcome)] : [(0, _e.Fy)(_e.if.common), (0, _e.Fy)(_e.if.invite), (0, _e.Fy)(_e.if.login), (0, _e.Fy)(_e.if.onboarding)];
					rt.lang ? Rt(w) : te.Z.get(Ge.th) && Nt(w, (0, Ge.Kd)());
					const q = async se => (await Promise.all(B.map(we => we(se)))).reduce((we, Oe) => Ft({}, we, Oe), {});
					return Te().createElement(me.LocaleContext.Provider, {
						value: w.languagePreference
					}, Te().createElement(me.I18nProvider, {
						translator: x.Vb,
						locale: w.languagePreference
					}, Te().createElement(me.I18nLoader, {
						loadPhrases: q
					}, w.children)))
				},
				Rt = async w => {
					let B = rt.lang.substring(0, rt.lang.length - 2) + rt.lang.substring(rt.lang.length - 2, rt.lang.length).toUpperCase();
					if (!(0, Ce.v)(B)) {
						console.warn(`${B} is not a supported locale.`), delete rt.lang, w.history.replace({
							search: $e().stringify(rt)
						});
						return
					}(0, Ge.i_)(B), delete rt.lang, Nt(w, B), w.isAuthenticated || w.history.replace({
						search: $e().stringify(rt)
					})
				}, Nt = async (w, B) => {
					if (w.isAuthenticated) try {
						await w.setUserCommPreferences({
							"language-locale": B
						}, {
							hideErrorAlert: !0
						}), te.Z.remove(Ge.th), w.history.replace({
							search: $e().stringify(rt)
						})
					} catch (q) {
						te.Z.set(Ge.th, !0), console.error(q)
					} else te.Z.set(Ge.th, !0)
				}, ht = w => {
					const B = (0, ot.PR)(w);
					return {
						isAuthenticated: !!(B && B.id),
						languagePreference: (0, Ge.Kd)() || (0, Ce.r)(w)
					}
				}, Wt = {
					setUserCommPreferences: et.V_
				};
			var zt = (0, Qe.withRouter)((0, it.connect)(ht, Wt)(Mt));
			Mt.propTypes = {
				history: xe().object,
				languagePreference: xe().string.isRequired,
				children: xe().node.isRequired,
				isAuthenticated: xe().bool,
				setUserCommPreferences: xe().func.isRequired
			};
			var Gt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Ht = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let Et;
			const Kt = ({
				selectorPrefix: w = "c_"
			} = {}) => (Et || (Et = (0, Ht.Z)({
				dev: !1,
				selectorPrefix: w
			})), Et);
			var Vt = t("../react/common/components/ModalManager.tsx"),
				Zt = t("../react/app/components/ErrorBoundary.tsx"),
				g = t("../react/common/actions/notificationsActions.ts");
			const ue = (t.g.bootstrap || {}).data || {};
			class Se extends Te().Component {
				componentDidMount() {
					ue.messages && this.dispatchNotificationActions(ue.messages)
				}
				dispatchNotificationActions(B) {
					B.forEach(q => {
						const {
							type: se,
							message: Ee,
							persist: we
						} = q;
						["success", "info", "warn", "error"].includes(se) && this.props.notifyAdd(se, (0, x.ZP)(Ee), {
							persist: !!we
						})
					})
				}
				render() {
					return null
				}
			}
			var dt = (0, Qe.withRouter)((0, it.connect)(null, {
				notifyAdd: g.IH
			})(Se));
			Se.propTypes = {
				notifyAdd: xe().func.isRequired
			};
			var ct = t("../react/app/redux/index.ts");

			function Tt() {
				var w;
				const B = (0, ct.p4)(ot.PR),
					q = (B == null || (w = B.email) === null || w === void 0 ? void 0 : w.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					se = (0, Ne.Yc)();
				(0, We.useEffect)(() => {
					se({
						userType: q
					})
				}, [q, se])
			}
			var vt = t("../react/common/selectors/entitlementsSelectors.ts"),
				yt = t("../react/common/selectors/accountSelectors.ts");
			const bt = ["accountId", "is_ent"];

			function At() {
				const w = (0, Ne.f7)(),
					B = (0, Qe.useHistory)(),
					q = (0, A.uW)(B.location.pathname),
					se = (0, Ne.Yc)(),
					Ee = (0, Ne.O$)(),
					we = (0, ct.p4)(vt.u1),
					Oe = !we.isRequesting && !!we.data,
					nt = (0, ct.p4)(vt.p1),
					pt = (0, ct.p4)(yt.Xu),
					qe = (0, ct.p4)(yt.uF),
					Dt = !pt.isRequesting && !!pt.data;
				(0, We.useEffect)(() => {
					if (q && Dt && qe && Oe && q === qe.account.id) {
						var Ct, _t, Yt;
						se({
							accountId: qe.account.id,
							is_ent: nt,
							is_free_account: !nt && !(qe == null || (Ct = qe.account.meta) === null || Ct === void 0 ? void 0 : Ct.has_business_zones) && !(qe == null || (_t = qe.account.meta) === null || _t === void 0 ? void 0 : _t.has_pro_zones) && !(qe == null || (Yt = qe.account.meta) === null || Yt === void 0 ? void 0 : Yt.has_enterprise_zones)
						})
					} else(!q || q in w && w.accountId !== q) && Ee(bt)
				}, [Dt, qe, se, Ee, Oe, nt, q, w])
			}
			var Ot = t("../react/common/selectors/zoneSelectors.ts");

			function It() {
				const w = (0, ct.p4)(Ot.nA),
					B = (0, Ne.Yc)();
				(0, We.useEffect)(() => {
					var q;
					B({
						zone_id: w == null ? void 0 : w.id,
						zone_plan: w == null || (q = w.plan) === null || q === void 0 ? void 0 : q.legacy_id
					})
				}, [w, B])
			}
			const Pt = () => (Tt(), At(), It(), null);
			var St = t("../react/app/components/Persistence/index.tsx"),
				tt = t("../node_modules/@cloudflare/elements/es/index.js"),
				kt = t("../react/app/components/LoadingSuspense.tsx");
			const nn = Te().lazy(() => Promise.all([t.e(39074), t.e(2480), t.e(10008), t.e(73598), t.e(94012), t.e(24074), t.e(72019), t.e(27883), t.e(5668), t.e(60091), t.e(3538), t.e(77216), t.e(39760), t.e(94923), t.e(37685), t.e(40912), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var on = () => Te().createElement(kt.Z, null, Te().createElement(nn, null));
			const rn = () => (We.useEffect(() => ce, []), null);
			var an = t("../../../../node_modules/moment/moment.js"),
				Qt = t.n(an);
			const sn = w => {
					switch (w) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return w.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return w.toLowerCase();
						default:
							return "en"
					}
				},
				cn = () => {
					const w = (0, ct.p4)(Ce.r);
					(0, We.useEffect)(() => {
						const B = sn(w);
						B !== Qt().locale() && Qt().locale(B), document.documentElement.lang = w
					}, [w])
				},
				ln = () => {
					(0, We.useEffect)(() => {
						async function w() {
							var B, q;
							let se;
							if (((B = window) === null || B === void 0 || (q = B.build) === null || q === void 0 ? void 0 : q.isPreviewDeploy) && (se = "cookie"), !!se) try {
								const Ee = document.head.querySelector("link[rel=icon]");
								Ee && (Ee.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${se}.ico`)).default)
							} catch {}
						}
						w()
					}, [])
				};
			var un = t("../react/common/constants/constants.ts");
			const dn = () => {
					var w;
					const B = (0, Qe.useLocation)(),
						[q, se] = (0, We.useState)(((w = window) === null || w === void 0 ? void 0 : w.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, We.useEffect)(() => {
						const Ee = $e().parse(B.search);
						if (Ee.pt && te.Z.set(un.sJ, Ee.pt), Ee == null ? void 0 : Ee.devPanel) {
							var we, Oe;
							(we = window) === null || we === void 0 || (Oe = we.localStorage) === null || Oe === void 0 || Oe.setItem("gates_devtools_ui_gates_controller_enabled", "true"), se(!0)
						}
					}, [B.search]), {
						devPanelEnabled: q
					}
				},
				pn = ({
					id: w,
					customDataLayer: B = [],
					dataLayerName: q = "dataLayer"
				}) => {
					const se = `<iframe src="https://www.googletagmanager.com/ns.html?id=${w}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						Ee = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${q}', '${w}')`,
						we = `
    window.${q} = window.${q} || [];
    window.${q}.push(${JSON.stringify(B)})
  `;
					return {
						iframe: se,
						script: Ee,
						dataLayerHTML: we
					}
				},
				mn = w => {
					const B = document.createElement("script");
					return B.innerHTML = w, B.async = !0, B
				},
				gn = w => {
					const B = document.createElement("noscript");
					return B.innerHTML = w, B
				},
				Xt = w => {
					const B = document.createElement("script");
					return B.innerHTML = w, B
				},
				Rn = ({
					dataLayer: w,
					dataLayerName: B
				}) => {
					if (window[B]) return window[B].push(w);
					const q = `
      window.${B} = window.${B} || [];
      window.${B}.push(${JSON.stringify(w)})`,
						se = Xt(q);
					document.head.insertBefore(se, document.head.childNodes[0])
				},
				fn = ({
					containerId: w,
					customDataLayer: B,
					gtmFeatureFlag: q = !0
				}) => {
					(0, We.useEffect)(() => {
						(() => {
							if (!q) return null;
							const {
								iframe: Ee,
								script: we,
								dataLayerHTML: Oe
							} = pn({
								id: w,
								customDataLayer: B
							});
							document.head.insertBefore(Xt(Oe), document.head.childNodes[0]), document.head.insertBefore(mn(we), document.head.childNodes[0]), document.body.insertBefore(gn(Ee), document.body.childNodes[0])
						})()
					}, [])
				};
			var Jt = t("../react/common/hooks/useGate.ts");
			const _n = ({
				isDev: w,
				gtmFeatureFlag: B
			}) => {
				(0, We.useEffect)(() => {
					(() => {
						if (!B) return null;
						let se;
						w ? se = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : se = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const Ee = document.createElement("script");
						Ee.async = !0, Ee.src = se, document.head.insertBefore(Ee, document.head.childNodes[0])
					})()
				}, [])
			};
			var En = t("../react/utils/useDomainConnectRedirect.ts");
			const vn = "GTM-NDGPDFZ",
				yn = Te().lazy(() => Promise.all([t.e(39074), t.e(2480), t.e(10008), t.e(73598), t.e(94012), t.e(24074), t.e(72019), t.e(27883), t.e(16339), t.e(84974), t.e(60091), t.e(3538), t.e(77216), t.e(39760), t.e(94923), t.e(37685), t.e(40912), t.e(64124), t.e(20263), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				Cn = Te().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(39074), t.e(24074), t.e(16339), t.e(60091), t.e(37685), t.e(69088), t.e(64124), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var hn = ({
					userIsAuthed: w
				}) => {
					cn(), ln(), (0, En.y)();
					const {
						devPanelEnabled: B
					} = dn();
					return fn({
						containerId: vn,
						gtmFeatureFlag: !!(0, Jt.Z)("dx-enable-google-tag-manager")
					}), _n({
						isDev: !1,
						gtmFeatureFlag: !!(0, Jt.Z)("dx-enable-google-tag-manager")
					}), Te().createElement(We.Suspense, {
						fallback: Te().createElement(rn, null)
					}, Te().createElement(Qe.Switch, null, !w && !0 && Te().createElement(Qe.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Te().createElement(Cn, null)), Te().createElement(Qe.Route, {
						render: () => Te().createElement(tt.ZC, {
							minHeight: "100vh"
						}, Te().createElement(yn, null))
					})), B && Te().createElement(on, null))
				},
				Bt = t("../../../../node_modules/yup/es/index.js"),
				Tn = t("../../../common/util/types/src/utils/index.ts");
			const qt = {
				cfEmail: () => Bt.Z_().email((0, x.ZP)("common.validation.email")).required((0, x.ZP)("common.validation.email")),
				cfPassword: () => Bt.Z_().required((0, x.ZP)("common.validation.required"))
			};
			(0, Tn.Yd)(qt).forEach(w => {
				Bt.kM(Bt.Z_, w, qt[w])
			});
			const en = Te().lazy(() => Promise.all([t.e(10008), t.e(94012), t.e(6368), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx"))),
				bn = () => {
					const w = (0, wt.$8)(),
						[B, q] = (0, We.useState)(w ? en : Te().Fragment),
						[se, Ee] = (0, We.useState)((0, h.Yc)());
					(0, We.useEffect)(() => {
						(0, h.fF)(() => Ee((0, h.Yc)()))
					}, []);
					const we = Oe => {
						Ee(Oe), (0, h.C8)(Oe), document.cookie = `dark-mode=${Oe};Path=/;Max-Age=31536000`
					};
					return (0, We.useEffect)(() => {
						q(w ? en : Te().Fragment)
					}, [w]), (0, We.useEffect)(() => {
						const Oe = () => we(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Oe), () => {
							window.removeEventListener("storage", Oe)
						}
					}, []), Te().createElement(We.Suspense, {
						fallback: null
					}, Te().createElement(it.Provider, {
						store: (0, u.bh)()
					}, Te().createElement(Qe.Router, {
						history: pe
					}, Te().createElement(B, null, Te().createElement(Gt.Z, {
						renderer: Kt()
					}, Te().createElement(zt, null, Te().createElement(Zt.Z, {
						sentryTag: "Root"
					}, Te().createElement(W.J$, {
						value: {
							fetcher: Oe => fetch(Oe).then(nt => nt.json())
						}
					}, Te().createElement(Pt, null), Te().createElement(dt, null), Te().createElement(St.Z_, {
						onDarkModeChangeCb: we
					}, Te().createElement(ge.ZP, null, Te().createElement(hn, {
						userIsAuthed: w
					}))), Te().createElement(Vt.ZP, null), Te().createElement(F.F0, null)))))))))
				},
				An = () => {
					(0, at.render)(Te().createElement(bn, null), document.getElementById("react-app"))
				};
			var ft = t("../utils/initSparrow.ts"),
				Lt = t("../utils/zaraz.ts");
			const On = () => {
					const w = (0, ot.PR)((0, u.bh)().getState());
					In(), (0, ft.Ug)(), (0, Lt.bM)(), (w == null ? void 0 : w.id) && Z().setUserId(w == null ? void 0 : w.id), (0, ft.yV)(), !(0, ft.Wi)() && (0, ft.IM)(), w ? (0, Lt.yn)(w) : (0, Lt.Ro)()
				},
				In = () => {
					var w, B;
					(w = window) === null || w === void 0 || (B = w.OneTrust) === null || B === void 0 || B.OnConsentChanged(() => {
						const q = (0, ot.PR)((0, u.bh)().getState());
						(0, ft.Wi)() ? (Z().setEnabled(!0), (q == null ? void 0 : q.id) ? (Z().setUserId(q.id), (0, Lt.yn)(q)) : (0, Lt.Ro)(), (0, ft.yV)()) : (Z().setEnabled(!1), (0, ft.IM)())
					})
				};

			function Pn(w) {
				for (var B = 1; B < arguments.length; B++) {
					var q = arguments[B] != null ? Object(arguments[B]) : {},
						se = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && se.push.apply(se, Object.getOwnPropertySymbols(q).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(q, Ee).enumerable
					})), se.forEach(function(Ee) {
						Sn(w, Ee, q[Ee])
					})
				}
				return w
			}

			function Sn(w, B, q) {
				return B = Ln(B), B in w ? Object.defineProperty(w, B, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[B] = q, w
			}

			function Ln(w) {
				var B = Dn(w, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function Dn(w, B) {
				if (typeof w != "object" || w === null) return w;
				var q = w[Symbol.toPrimitive];
				if (q !== void 0) {
					var se = q.call(w, B || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(w)
			}
			const wn = "init",
				tn = (w, B) => {
					r.$e(function(q) {
						q.setTag(wn, B), r.Tb(w)
					}), ee(w)
				},
				Ut = async (w, B) => {
					try {
						return await w(), !0
					} catch (q) {
						return tn(q, B), !1
					}
				};
			(async () => {
				try {
					var w, B, q;
					t.g.build = Pn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "4cdcf9c71368d98707c7e9163e1c6785789bbc90",
						dashVersion: "29716332",
						env: "production",
						builtAt: 1734043987276,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, Me.p)()
					}), Ve();
					const se = [{
						fn: () => t.e(4374).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => O(pe),
						tag: "hashScroll"
					}, {
						fn: J.Z,
						tag: "styles"
					}, {
						fn: De,
						tag: "mfePreviewData"
					}];
					for (const pt of se)
						if (!await Ut(pt.fn, pt.tag)) return;
					let Ee;
					if (!await Ut(async () => {
							Ee = await ut()
						}, "bootstrap")) return;
					const we = (0, u.bh)(),
						Oe = ((w = Ee) === null || w === void 0 ? void 0 : w.data) || {};
					we.dispatch((0, a.mW)("user", Oe == null ? void 0 : Oe.user));
					const nt = (B = Ee) === null || B === void 0 || (q = B.data) === null || q === void 0 ? void 0 : q.user;
					return t.g.bootstrap = Ee, nt && nt.id && z(nt.id), !await Ut(st, "gates") || !await Ut(On, "tracking") ? void 0 : An()
				} catch (se) {
					tn(se, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(j, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				p = t("../react/common/selectors/userSelectors.ts"),
				c = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/common/utils/isGuards.ts"),
				d = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				y = t.n(d);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(u) {
					for (var l = 1; l < arguments.length; l++) {
						var f = arguments[l];
						for (var _ in f) Object.prototype.hasOwnProperty.call(f, _) && (u[_] = f[_])
					}
					return u
				}, n.apply(this, arguments)
			}
			const r = u => {
				function l(f) {
					const _ = (0, s.UM)(),
						O = (0, d.useHistory)(),
						I = (0, d.useLocation)(),
						h = (0, d.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						N = (0, s.p4)(p.PR) || null,
						E = (0, s.p4)(c.nA) || null,
						C = (0, s.p4)(m.uF),
						R = C ? C.account : null;
					if (!h) return null;
					const {
						accountId: b,
						app: M,
						tab: T
					} = h.params, S = h.params.zoneName && ((0, i.v5)(h.params.zoneName) || h.params.zoneName.indexOf(".") > 0) ? h.params.zoneName : void 0;
					return o().createElement(u, n({
						dispatch: _,
						history: O,
						location: I,
						match: h,
						user: N,
						membership: b ? C : null,
						account: b ? R : null,
						accountId: b || null,
						zone: S ? E : null,
						zoneName: S || null,
						app: S ? M : null,
						tab: S ? T : null
					}, f))
				}
				return l.displayName = `withEntities(${a(u)})`, l
			};

			function a(u) {
				return u.displayName || u.name || "Component"
			}
			v.Z = r
		},
		"../react/app/components/AccountHome/tracking.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				$$: function() {
					return l
				},
				QV: function() {
					return u
				},
				Yt: function() {
					return r
				},
				bA: function() {
					return a
				},
				gX: function() {
					return d
				},
				tw: function() {
					return y
				},
				xD: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			const s = "projects table click",
				p = "click create application",
				c = "account home dev plat - product card click",
				m = "account home dev plat - empty state CTA click",
				i = "account home dev plat - view all projects click",
				d = {
					SPARROW_PROJECTS_TABLE_CLICK: s,
					SPARROW_CREATE_PROJECT_CLICK: p,
					SPARROW_PRODUCT_CARD_CLICK: c,
					SPARROW_EMPTY_STATE_CTA_CLICK: m,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: i
				},
				y = f => {
					o().sendEvent(s, {
						component: f
					})
				},
				n = f => {
					o().sendEvent(s, {
						component: "menu",
						subcomponent: f
					})
				},
				r = () => {
					o().sendEvent(p, {
						category: "Projects Table"
					})
				},
				a = ({
					category: f,
					product: _
				}) => {
					o().sendEvent(c, {
						category: f,
						product: _
					})
				},
				u = () => {
					o().sendEvent(m)
				},
				l = () => {
					o().sendEvent(i)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				BQ: function() {
					return d
				},
				Bh: function() {
					return m
				},
				CM: function() {
					return y
				},
				MF: function() {
					return o
				},
				TS: function() {
					return a
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
					return r
				},
				r4: function() {
					return p
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
				s = (0, e.R)(o.ADD_SITE, u => ({
					payload: u
				})),
				p = (0, e.R)(o.RESOLVING_START),
				c = (0, e.R)(o.RESOLVING_COMPLETE),
				m = (0, e.R)(o.SELECT_ZONE, u => ({
					payload: u
				})),
				i = (0, e.R)(o.SELECT_ACCOUNT, u => ({
					payload: u
				})),
				d = (0, e.R)(o.SELECT_PAGES_PROJECT, u => ({
					payload: u
				})),
				y = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, u => ({
					payload: u
				})),
				n = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, u => ({
					accountIds: u
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(o.SELECT_WORKER, u => ({
					payload: u
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				BV: function() {
					return e
				},
				Dz: function() {
					return y
				},
				Fj: function() {
					return p
				},
				Kt: function() {
					return m
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
				c = "resolvedDeepLinkQueryParams",
				m = "add",
				i = "multiSkuProducts",
				d = "/:account/billing/checkout",
				y = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(j, v, t) {
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
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = t("../react/app/components/DeepLink/utils.ts"),
				c = t("../react/utils/bootstrap.ts"),
				m = t("../react/app/components/DeepLink/actions.ts"),
				i = t("../react/app/components/DeepLink/selectors.ts"),
				d = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				y = t.n(d);

			function n(S) {
				for (var L = 1; L < arguments.length; L++) {
					var G = arguments[L] != null ? Object(arguments[L]) : {},
						$ = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(G).filter(function(V) {
						return Object.getOwnPropertyDescriptor(G, V).enumerable
					})), $.forEach(function(V) {
						r(S, V, G[V])
					})
				}
				return S
			}

			function r(S, L, G) {
				return L = a(L), L in S ? Object.defineProperty(S, L, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[L] = G, S
			}

			function a(S) {
				var L = u(S, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function u(S, L) {
				if (typeof S != "object" || S === null) return S;
				var G = S[Symbol.toPrimitive];
				if (G !== void 0) {
					var $ = G.call(S, L || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(S)
			}
			class l {
				constructor(L, G) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", $ => {
						this.resolvers.set($, {
							name: $,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", $ => {
						const V = this.resolvers.get($);
						V && (V.endTime = Date.now(), this.resolvers.set($, V))
					}), r(this, "resolverCancel", $ => {
						this.resolverDone($), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", $ => {
						const V = "NO_ACTION",
							ce = {
								actionType: V,
								startTime: 0
							};
						return {
							start: (ee = V) => {
								const J = this.resolvers.get($);
								ce.actionType = ee, ce.startTime = Date.now(), J && J.userActions.push(ce)
							},
							finish: (ee = V) => {
								ce.actionType = ee, ce.endTime = Date.now()
							},
							cancel: (ee = V) => {
								ce.actionType = ee, ce.endTime = Date.now(), this.resolverCancel($)
							}
						}
					}), this.deepLink = L, this.legacyDeepLink = G, this.resolvers = new Map
				}
				track(L) {
					try {
						if (this._done) return;
						this._done = !0;
						const G = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: f(this.startTime, this.endTime),
								totalCpuTime: f(this.startTime, this.endTime)
							},
							$ = this.resolvers.size === 0 ? G : Array.from(this.resolvers.values()).reduce((V, ce) => {
								const ee = f(ce.startTime, ce.endTime),
									J = ce.userActions.reduce((ne, U) => {
										const H = f(U.startTime, U.endTime);
										return {
											totalTime: ne.totalTime + H,
											actions: ne.actions.set(U.actionType, H)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									ve = ee - J.totalTime;
								return n({}, V, {
									totalTime: V.totalTime + ee,
									totalUserActionsTime: V.totalUserActionsTime + J.totalTime,
									totalCpuTime: V.totalCpuTime + ve,
									[`${ce.name}ResolverTotalTime`]: ee,
									[`${ce.name}ResolverTotalCpuTime`]: ve,
									[`${ce.name}ResolverTotalUserActionsTime`]: J.totalTime
								}, Array.from(J.actions.keys()).reduce((ne, U) => n({}, ne, {
									[`${ce.name}Resolver/${U}`]: J.actions.get(U)
								}), {}))
							}, n({}, G, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						y().sendEvent(L, $)
					} catch (G) {
						console.error(G)
					}
				}
			}

			function f(S = Date.now(), L = Date.now()) {
				return (L - S) / 1e3
			}
			var _ = t("../react/app/components/DeepLink/constants.ts"),
				O = t("../react/common/hooks/useCachedState.ts"),
				I = t("../react/common/hooks/usePrevious.ts");

			function h(S) {
				for (var L = 1; L < arguments.length; L++) {
					var G = arguments[L] != null ? Object(arguments[L]) : {},
						$ = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(G).filter(function(V) {
						return Object.getOwnPropertyDescriptor(G, V).enumerable
					})), $.forEach(function(V) {
						N(S, V, G[V])
					})
				}
				return S
			}

			function N(S, L, G) {
				return L = E(L), L in S ? Object.defineProperty(S, L, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[L] = G, S
			}

			function E(S) {
				var L = C(S, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function C(S, L) {
				if (typeof S != "object" || S === null) return S;
				var G = S[Symbol.toPrimitive];
				if (G !== void 0) {
					var $ = G.call(S, L || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(S)
			}
			var b = ({
					children: S
				}) => {
					const L = (0, o.TZ)(),
						G = (0, s.useHistory)(),
						$ = (0, I.Z)(G.location.pathname),
						V = (0, o.p4)(i.dd),
						[ce, ee] = (0, e.useState)(!0),
						[J, ve] = (0, O.j)(void 0, {
							key: _.Fj
						}),
						[ne, U] = (0, O.j)(void 0, {
							key: _.O5
						}),
						[H, oe] = (0, O.j)(void 0, {
							key: _.s$
						}),
						le = (0, c.$8)();
					let pe = new URLSearchParams(G.location.search);
					const Q = (0, p.mL)(G.location.pathname, pe);
					let A = null,
						P = null;
					if (pe.has(_.Tc) && pe.delete(_.Tc), pe.get(_.BV)) A = pe.get(_.BV), G.location.hash && (P = G.location.hash);
					else if (J) {
						const K = new URLSearchParams(J);
						K.get(_.BV) && (A = K.get(_.BV), pe = K)
					} else Q && (pe.set(_.BV, Q), A = Q);
					if (A && _._h.test(A)) {
						const K = pe.getAll(_.Kt),
							re = JSON.stringify(K);
						K.length && re !== H && oe(re), pe.has(_.Tc) && pe.delete(_.Tc), pe.delete(_.Kt)
					}!le && J === void 0 && A && ve(pe.toString());
					const k = async () => {
						try {
							if ((0, p.I3)(A) && le && !V) {
								J && ve(void 0), L.dispatch((0, m.r4)()), ee(!0), A && A !== ne && U(A);
								const K = await (0, p.py)(A, ee, L, G, $, new l(A, Q ? `${G.location.pathname}${G.location.search}` : void 0));
								pe.delete(_.BV);
								const re = pe.toString();
								G.replace(h({}, G.location, {
									pathname: K,
									search: re
								}, P ? {
									hash: P
								} : {})), L.dispatch((0, m.WF)())
							}
						} catch (K) {
							L.dispatch((0, m.WF)()), console.error(K)
						} finally {
							ee(!1)
						}
					};
					return (0, e.useEffect)(() => {
						k()
					}, [G.location.pathname, G.location.search, V]), (ce || (0, p.I3)(A)) && le ? null : S
				},
				M = t("../react/app/components/DeepLink/reducer.ts"),
				T = b
		},
		"../react/app/components/DeepLink/reducer.ts": function(j, v, t) {
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
				s = t("../react/app/components/DeepLink/actions.ts");
			const p = null,
				c = o().from({
					lastAction: p,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function m(i = c, d) {
				if (d.type === s.MF.RESOLVING_COMPLETE) return c;
				if (d.type === s.MF.RESOLVING_START) return i.set("isResolving", !0);
				if (i.isResolving) {
					if (d.type === s.MF.RESOLVING_COMPLETE) return i.set("isResolving", !1);
					if (d.type === s.MF.SET_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", d.accountIds);
					if (d.type === s.MF.DELETE_FILTERED_ACCOUNT_IDS) return i.set("filteredAccountIds", void 0);
					{
						let y = i;
						try {
							y = i.set("lastAction", d)
						} catch {
							y = i.set("lastAction", {
								type: d.type
							})
						}
						return y
					}
				} else return i
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(j, v, t) {
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
			const e = p => p.deepLink.lastAction,
				o = p => p.deepLink.isResolving,
				s = p => p.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				I3: function() {
					return u
				},
				X1: function() {
					return r
				},
				mL: function() {
					return I
				},
				py: function() {
					return O
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/components/DeepLink/reducer.ts"),
				s = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const p = h => h.replace(s.default.endsWithSlash, ""),
				c = h => {
					const N = p(h).split("/").slice(3);
					return N.length ? "/" + N.join("/") : ""
				},
				m = h => {
					const N = p(h).split("/").slice(2);
					return N.length ? `apps/${N.join("/")}` : "apps"
				};
			var i = t("../react/app/components/DeepLink/selectors.ts"),
				d = t("../react/app/components/DeepLink/constants.ts"),
				y = t("../react/common/validators/index.js"),
				n = t("../react/common/utils/isGuards.ts");
			const r = h => (0, y.Lb)(h) && (h.split(".").length > 1 || (0, n.v5)(h)),
				a = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				u = h => typeof h == "string" && h.startsWith("/"),
				l = (h, N) => E => new Promise((C, R) => {
					N.start();
					const b = h.subscribe(() => {
						const M = (0, i.yI)(h.getState());
						M === o.E ? (N.cancel(), b(), R("DeepLink: waitForAction out of context.")) : E(M) && (N.finish(M.type), b(), C(M))
					})
				}),
				f = (h, N, E) => (C, R) => new Promise((b, M) => {
					E.start();
					const T = N.location.pathname;
					C = new URL(C, window.location.href).pathname, T !== C && (E.cancel(), M(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${C}", but on "${T}". You need to redirect to "${C}", and unblockRouter in your Resolver, before you use this function.`));
					const S = h.subscribe(() => {
						const L = (0, i.yI)(h.getState()),
							G = N.location.pathname,
							V = new URLSearchParams(N.location.search).get(d.BV);
						(G !== C || !!V) && (E.cancel(), S(), M(`DeepLink: waitForPageAction user navigated away from "${C}" to "${G}${V?N.location.search:""}"`)), L === o.E ? (E.cancel(), S(), M("DeepLink: waitForPageAction out of context.")) : R(L) && (E.finish(L.type), S(), b(L))
					})
				});

			function _(h) {
				const N = [],
					E = h.split("?")[0].split("/");
				for (let C of E) C.length !== 0 && (C.startsWith(":") ? N.push({
					value: C.substring(1),
					type: "dynamic"
				}) : N.push({
					value: C,
					type: "static"
				}));
				return N
			}
			async function O(h, N, E, C, R, b) {
				b.start();
				const M = _(h),
					S = await (await Promise.all([t.e(32375), t.e(72019), t.e(78839), t.e(60091), t.e(94923), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					L = {};
				let G = "";
				for (const [$, V] of M.entries())
					if (V.type === "static") G = [G, V.value].join("/");
					else if (V.type === "dynamic" && a.is(V.value) && V.value in S) {
					b.resolverStart(V.value);
					const ce = await S[V.value]({
						deepLink: h,
						blockRouter: () => N(!0),
						unblockRouter: () => N(!1),
						routerHistory: C,
						resolvedValues: L,
						store: E,
						referringRoute: R,
						uri: {
							currentPartIdx: $,
							parts: M
						},
						waitForAction: l(E, b.createUserActionTracker(V.value)),
						waitForPageAction: f(E, C, b.createUserActionTracker(V.value))
					});
					b.resolverDone(V.value), G = [G, ce].join("/"), L[V.value] = ce
				} else throw b.cancel(), new Error(`DeepLink: Resolver with name '${V.value}' is not supported.`);
				return b.done(), G
			}

			function I(h, N) {
				const E = ":account",
					C = ":zone",
					R = N.get("zone");
				if (R) return N.delete("zone"), `/${E}/${C}/${R}`;
				const b = N.get("account");
				if (b) return N.delete("account"), `/${E}/${b}`;
				if (h === "/overview") return `/${E}/${C}`;
				if (h === "/apps") return `/${E}/${C}/${m(h)}`;
				const M = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const T of M) {
					const S = T.length;
					if (h.startsWith(T) && (h.length === S || h[S] === "/")) return `/${E}/${C}${h}`
				}
				switch (h) {
					case "/account/billing":
						return `/${E}/billing`;
					case "/account/subscriptions":
						return `/${E}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${E}/dns-firewall`;
					case "/account/audit-log":
						return `/${E}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(j, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				p = t("../react/app/components/SomethingWrong.jsx"),
				c = t("../utils/sentry/lastSentEventId.ts"),
				m = t("../react/utils/zaraz.ts"),
				i = t("../react/utils/url.ts");
			const d = ({
				sentryTag: y,
				children: n
			}) => o().createElement(s.SV, {
				beforeCapture: r => {
					y && r.setTag("errorBoundary", y), m.tg === null || m.tg === void 0 || m.tg.track("page-error", {
						page: (0, i.Fl)(window.location.pathname)
					})
				},
				onError: r => {
					({
						REDUX_LOGGER: void 0
					}).TESTING && t.g.logAppError(r)
				},
				fallback: ({
					error: r,
					eventId: a
				}) => {
					const u = c.e.getEventId() || a;
					return o().createElement(p.Z, {
						type: "page",
						error: r,
						eventId: u
					})
				}
			}, n);
			v.Z = d
		},
		"../react/app/components/Footer.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				Z: function() {
					return Q
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = t("../node_modules/@cloudflare/elements/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				d = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				y = t.n(d),
				n = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				r = t("../react/common/components/Apple/utils.tsx"),
				a = t("../react/utils/translator.tsx"),
				u = t("../../../../node_modules/moment/moment.js"),
				l = t.n(u);
			const f = () => {
					const A = l()().format("YYYY"),
						P = k => {
							y().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: k
							})
						};
					return o().createElement(_, {
						marginTop: "auto"
					}, o().createElement(O, null, o().createElement(I, null, o().createElement(h, null, "\xA9 ", A, " Cloudflare, Inc."), o().createElement(h, null, o().createElement(N, null, o().createElement(E, {
						showOnDeskTop: !1
					}, o().createElement(C, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => P("Support")
					}, o().createElement(a.cC, {
						id: "common.support"
					}))), o().createElement(E, null, o().createElement(C, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => P("Privacy Policy")
					}, o().createElement(a.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(E, null, o().createElement(C, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => P("Terms of Use")
					}, o().createElement(a.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(E, null, o().createElement(C, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => P("Cookie Preferences")
					}, o().createElement(a.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(E, null, o().createElement(C, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => P("Trademark")
					}, o().createElement(a.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(N, null, o().createElement(E, null, o().createElement(C, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => P("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(a.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				_ = (0, m.createComponent)(({
					theme: A,
					marginTop: P
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: P
				})),
				O = (0, m.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				I = (0, m.createComponent)(({
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
				h = (0, m.createComponent)(({
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
				N = (0, m.createComponent)(({
					theme: A
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: A.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				E = (0, m.createComponent)(({
					showOnDeskTop: A = !0,
					theme: P
				}) => ({
					color: P.colors.white,
					fontSize: P.fontSizes[1],
					height: "20px",
					display: A ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: P.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: P.space[3],
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
				C = (0, m.createStyledComponent)(({
					theme: A
				}) => ({
					textDecoration: "none",
					color: A.colors.white,
					"&:hover": {
						color: A.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var R = f,
				b = t("../react/common/hooks/useGate.ts"),
				M = t("../react/pages/welcome/routes.ts"),
				T = t("../react/utils/cookiePreferences.ts"),
				S = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				G = () => {
					const [A, P] = (0, e.useState)(!1), k = (0, T.wV)(), K = () => {
						P(!0)
					}, re = () => {
						P(!1)
					}, Ce = k && k === "US" ? (0, a.ZP)("footer.cpra_cta.privacy_choices") : (0, a.ZP)("footer.cpra_cta.cookie_preferences"), Ie = {
						background: "transparent",
						borderRadius: "none",
						color: A ? (0, i.Yc)() ? "#ee730a" : "#003681" : (0, i.Yc)() ? "#4693ff" : "#0051c3",
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
					return o().createElement(c.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: Ie,
						onMouseEnter: K,
						onMouseLeave: re
					}, o().createElement(c.Ei, {
						height: 15,
						src: S,
						mr: 2,
						alt: Ce
					}), Ce)
				};

			function $() {
				return $ = Object.assign ? Object.assign.bind() : function(A) {
					for (var P = 1; P < arguments.length; P++) {
						var k = arguments[P];
						for (var K in k) Object.prototype.hasOwnProperty.call(k, K) && (A[K] = k[K])
					}
					return A
				}, $.apply(this, arguments)
			}

			function V(A, P) {
				if (A == null) return {};
				var k = ce(A, P),
					K, re;
				if (Object.getOwnPropertySymbols) {
					var Ce = Object.getOwnPropertySymbols(A);
					for (re = 0; re < Ce.length; re++) K = Ce[re], !(P.indexOf(K) >= 0) && (!Object.prototype.propertyIsEnumerable.call(A, K) || (k[K] = A[K]))
				}
				return k
			}

			function ce(A, P) {
				if (A == null) return {};
				var k = {},
					K = Object.keys(A),
					re, Ce;
				for (Ce = 0; Ce < K.length; Ce++) re = K[Ce], !(P.indexOf(re) >= 0) && (k[re] = A[re]);
				return k
			}
			const ee = 24,
				J = (0, m.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,i.Yc)()?i.rS.colors.orange[6]:i.rS.colors.blue[4]}`
					}
				}), c.A),
				ve = (0, m.createStyledComponent)(({
					theme: A
				}) => ({
					color: A.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, n.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: A.colors.gray[4]
					}
				}), c.A),
				ne = A => {
					let {
						onClick: P
					} = A, k = V(A, ["onClick"]);
					return o().createElement(J, $({
						onClick: K => {
							y().sendEvent("navigate footer nav", {
								destinationPage: k.href
							}), P && P(K)
						}
					}, k))
				},
				U = A => {
					let {
						children: P,
						target: k,
						rel: K
					} = A, re = V(A, ["children", "target", "rel"]);
					return o().createElement(ne, $({
						target: k || "_blank",
						rel: K || "noopener noreferrer"
					}, re), P, o().createElement(p.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				},
				H = A => {
					let {
						children: P,
						target: k,
						rel: K
					} = A, re = V(A, ["children", "target", "rel"]);
					return o().createElement(ve, $({
						target: k || "_blank",
						rel: K || "noopener noreferrer"
					}, re), P)
				},
				oe = (0, m.createStyledComponent)(({
					theme: A
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, n.tq)() ? "8px" : "16px",
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
				}), c.Ul),
				le = (0, m.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, n.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), c.ZC);
			var Q = () => {
				var A, P;
				const k = [M.d.root.pattern].some(Me => (0, s.matchPath)(location.pathname, {
						path: Me
					})),
					K = location.pathname === "/sign-up",
					re = (0, b.Z)("dx-footer-simplify") === "experiment",
					Ce = (0, b.Z)("prg-signup-next-steps-experiment") === "experiment" && K;
				if ((0, r.PP)()) return o().createElement(R, null);
				if (k) return null;
				const Ie = new Date().getFullYear();
				return o().createElement(c.$_, $({
					height: (0, n.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: re ? "19px" : 4,
					pb: 0,
					px: [4, 3, 3],
					mt: Ce ? 0 : "auto"
				}, Ce && re && {
					height: "10vh"
				}), re ? o().createElement(le, null, o().createElement(oe, null, o().createElement(c.Li, null, o().createElement(H, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("common.support"))), o().createElement(c.Li, null, o().createElement(H, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(c.Dr, {
					textTransform: "capitalize"
				}, (0, a.ZP)("footer.system_status")))), o().createElement(c.Li, null, o().createElement(H, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, a.ZP)("footer.careers"))), o().createElement(c.Li, null, o().createElement(H, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos_reduced"))), o().createElement(c.Li, null, o().createElement(H, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, a.ZP)("footer.security_issues"))), o().createElement(c.Li, null, o().createElement(H, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))), o().createElement(c.Li, null, o().createElement(G, null)), o().createElement(c.Li, null, o().createElement(c.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", Ie, " Cloudflare, Inc.")))) : o().createElement(c.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, o().createElement(c.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.contact")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.contact_support"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, a.ZP)("footer.contact_sales"))), o().createElement(c.Dd, {
					mt: 3
				}, o().createElement(c.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(ne, {
					"aria-label": (0, a.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${ee}px`
				}, o().createElement(p.J, {
					type: "twitter",
					size: ee
				})), o().createElement(ne, {
					"aria-label": (0, a.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${ee}px`
				}, o().createElement(p.J, {
					type: "facebook",
					size: ee
				})), o().createElement(ne, {
					"aria-label": (0, a.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${ee}px`
				}, o().createElement(p.J, {
					type: "linkedin",
					size: ee
				})))))), o().createElement(c.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.what_we_do")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/plans"
				}, (0, a.ZP)("footer.plans"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/overview"
				}, (0, a.ZP)("footer.about"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, a.ZP)("footer.network_map"))))), o().createElement(c.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.resources")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://developers.cloudflare.com"
				}, (0, a.ZP)("footer.product_docs"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://blog.cloudflare.com"
				}, (0, a.ZP)("footer.blog"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, a.ZP)("footer.testimonials"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://partners.cloudflare.com"
				}, (0, a.ZP)("footer.hosting_partners"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://api.cloudflare.com"
				}, (0, a.ZP)("footer.api"))))), o().createElement(c.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement("div", {
					"aria-hidden": "true",
					title: `Current version: ${((A=window)===null||A===void 0||(P=A.build)===null||P===void 0?void 0:P.dashVersion)||"unknown"}`
				}), o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.support")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.help_center"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://community.cloudflare.com"
				}, (0, a.ZP)("footer.community"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflarestatus.com"
				}, (0, a.ZP)("footer.system_status"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, a.ZP)("footer.trust_safety"))))), o().createElement(c.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(c.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(c.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.about_us")), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/people"
				}, (0, a.ZP)("footer.team"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/careers"
				}, (0, a.ZP)("footer.careers"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, a.ZP)("footer.press"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, a.ZP)("footer.subs_agreement"))), o().createElement(c.Dd, {
					mb: 2
				}, o().createElement(U, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))))), o().createElement(G, null)))
			}
		},
		"../react/app/components/Forbidden.jsx": function(j, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/components/ErrorStatus.tsx"),
				p = t("../react/utils/translator.tsx");
			const c = m => o().createElement(s.Z, m, (0, p.ZP)("error.forbidden"));
			v.Z = c
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return u
				},
				Z: function() {
					return pe
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				d = t("../react/common/components/AccessControl/index.js"),
				y = t("../react/common/components/ButtonWithDropdown.tsx"),
				n = t("../react/common/components/Dropdown/index.tsx"),
				r = t("../react/utils/translator.tsx"),
				a = t("../react/common/hooks/useGate.ts");
			const u = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				l = () => {
					const Q = (0, a.Z)("super-add-button-copy-change"),
						A = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: u.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/domains/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: u.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: u.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: u.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: u.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: u.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (Q) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: u.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...A];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: u.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...A];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: u.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...A];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: u.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...A];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: u.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...A];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: u.EXISTING_DOMAIN,
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
								trackingEvent: u.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/domains/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: u.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: u.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: u.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: u.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: u.ACCOUNT_MEMBERS,
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
					trackingEvent: u.EXISTING_DOMAIN,
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
					trackingEvent: u.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/domains/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: u.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: u.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: u.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: u.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: u.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var _ = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				O = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				I = t.n(O);

			function h(Q) {
				for (var A = 1; A < arguments.length; A++) {
					var P = arguments[A] != null ? Object(arguments[A]) : {},
						k = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(P).filter(function(K) {
						return Object.getOwnPropertyDescriptor(P, K).enumerable
					})), k.forEach(function(K) {
						N(Q, K, P[K])
					})
				}
				return Q
			}

			function N(Q, A, P) {
				return A = E(A), A in Q ? Object.defineProperty(Q, A, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[A] = P, Q
			}

			function E(Q) {
				var A = C(Q, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function C(Q, A) {
				if (typeof Q != "object" || Q === null) return Q;
				var P = Q[Symbol.toPrimitive];
				if (P !== void 0) {
					var k = P.call(Q, A || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(Q)
			}

			function R() {
				return R = Object.assign ? Object.assign.bind() : function(Q) {
					for (var A = 1; A < arguments.length; A++) {
						var P = arguments[A];
						for (var k in P) Object.prototype.hasOwnProperty.call(P, k) && (Q[k] = P[k])
					}
					return Q
				}, R.apply(this, arguments)
			}

			function b(Q, A) {
				if (Q == null) return {};
				var P = M(Q, A),
					k, K;
				if (Object.getOwnPropertySymbols) {
					var re = Object.getOwnPropertySymbols(Q);
					for (K = 0; K < re.length; K++) k = re[K], !(A.indexOf(k) >= 0) && (!Object.prototype.propertyIsEnumerable.call(Q, k) || (P[k] = Q[k]))
				}
				return P
			}

			function M(Q, A) {
				if (Q == null) return {};
				var P = {},
					k = Object.keys(Q),
					K, re;
				for (re = 0; re < k.length; re++) K = k[re], !(A.indexOf(K) >= 0) && (P[K] = Q[K]);
				return P
			}
			const T = Q => {
					let {
						title: A,
						trackingEvent: P,
						icon: k,
						url: K,
						description: re,
						disabled: Ce
					} = Q, Ie = b(Q, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(S, R({
						to: !Ce && K || "#",
						"aria-disabled": Ce,
						onClick: () => {
							I().sendEvent(P, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, Ie), o().createElement(p.ZC, {
						display: "flex"
					}, o().createElement(s.J, {
						type: k,
						size: 24,
						mr: 2
					}), o().createElement(p.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(p.ZC, {
						fontSize: 3
					}, o().createElement(r.cC, A)), o().createElement(p.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(r.cC, re)))))
				},
				S = (0, m.createStyledComponent)(({
					theme: Q
				}) => {
					const A = {
						cursor: "pointer",
						backgroundColor: (0, c.Yc)() ? Q.colors.gray[8] : Q.colors.gray[9],
						color: Q.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: Q.colors.background,
						color: Q.colors.gray[2],
						fontSize: Q.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': A,
						':focus-within:not([aria-disabled="true"])': h({}, A, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: Q.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, _.Link);
			var L = T;

			function G() {
				return G = Object.assign ? Object.assign.bind() : function(Q) {
					for (var A = 1; A < arguments.length; A++) {
						var P = arguments[A];
						for (var k in P) Object.prototype.hasOwnProperty.call(P, k) && (Q[k] = P[k])
					}
					return Q
				}, G.apply(this, arguments)
			}

			function $(Q) {
				for (var A = 1; A < arguments.length; A++) {
					var P = arguments[A] != null ? Object(arguments[A]) : {},
						k = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(P).filter(function(K) {
						return Object.getOwnPropertyDescriptor(P, K).enumerable
					})), k.forEach(function(K) {
						V(Q, K, P[K])
					})
				}
				return Q
			}

			function V(Q, A, P) {
				return A = ce(A), A in Q ? Object.defineProperty(Q, A, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[A] = P, Q
			}

			function ce(Q) {
				var A = ee(Q, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function ee(Q, A) {
				if (typeof Q != "object" || Q === null) return Q;
				var P = Q[Symbol.toPrimitive];
				if (P !== void 0) {
					var k = P.call(Q, A || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(Q)
			}

			function J(Q, A) {
				if (Q == null) return {};
				var P = ve(Q, A),
					k, K;
				if (Object.getOwnPropertySymbols) {
					var re = Object.getOwnPropertySymbols(Q);
					for (K = 0; K < re.length; K++) k = re[K], !(A.indexOf(k) >= 0) && (!Object.prototype.propertyIsEnumerable.call(Q, k) || (P[k] = Q[k]))
				}
				return P
			}

			function ve(Q, A) {
				if (Q == null) return {};
				var P = {},
					k = Object.keys(Q),
					K, re;
				for (re = 0; re < k.length; re++) K = k[re], !(A.indexOf(K) >= 0) && (P[K] = Q[K]);
				return P
			}
			const ne = "GLOBAL_ADD_DROPDOWN",
				U = ({
					disableProducts: Q
				}) => {
					const A = l(),
						P = (0, a.Z)("dashon-18-reduced-add-button-on-mobile") === "experiment" && (0, i.tq)();
					return o().createElement(H, {
						role: "group",
						"data-testid": ne
					}, o().createElement(n.Lt, {
						trigger: o().createElement(oe, null, o().createElement(s.J, {
							label: "plus",
							type: "plus"
						}), !P && o().createElement(o().Fragment, null, o().createElement(r.cC, {
							id: "common.add"
						}), " ", o().createElement(s.J, {
							label: "arrow",
							type: "caret-down"
						}))),
						menu: o().createElement(y.v2, {
							overflow: "auto",
							maxHeight: "80vh",
							width: "min(50vw, 340px)",
							whiteSpace: "normal",
							mr: 1,
							p: "8px 0",
							bottom: "auto",
							zIndex: 1200
						}, A.map(k => {
							const K = k || {},
								{
									disableOn: re,
									permissionCheck: Ce
								} = K,
								Ie = J(K, ["disableOn", "permissionCheck"]),
								Me = re && Q[re],
								ke = $({}, Ie, {
									disabled: Me
								});
							return Ce ? o().createElement(d.Z, {
								key: k.title.id,
								edit: Ce
							}, ({
								isEditable: Z
							}) => Z && o().createElement(L, ke)) : o().createElement(L, G({
								key: k.url
							}, ke))
						}))
					}))
				},
				H = (0, m.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				oe = (0, m.createStyledComponent)(({
					theme: Q
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: Q.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, c.Yc)() ? Q.colors.gray[1] : Q.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, c.Yc)() ? Q.colors.gray[8] : Q.colors.gray[9]
					}
				}), p.zx);
			var le = U,
				pe = le
		},
		"../react/app/components/LoadingSuspense.tsx": function(j, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../react/utils/translator.tsx"),
				m = t("../react/app/components/ErrorStatus.tsx"),
				i = t("../react/common/components/EmptyPage.jsx"),
				d = t("../react/common/hooks/suspenseHelpers.ts");

			function y(a) {
				const [u, l] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const f = window.setTimeout(() => l(!0), a);
					return () => window.clearTimeout(f)
				}, []), u
			}
			const n = ({
					loadingTimeout: a = 1e3,
					stillLoadingTimeout: u = 9e3
				}) => {
					const l = y(a),
						f = y(u);
					if ((0, d.nW)(), !l && !f) return o().createElement(i.Z, null);
					const _ = f ? o().createElement(c.cC, {
						id: "common.still_loading"
					}) : l ? o().createElement(c.cC, {
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
					fallback: o().createElement(n, null)
				}, a);
			v.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				C8: function() {
					return d
				},
				dr: function() {
					return c
				},
				lt: function() {
					return m
				},
				m6: function() {
					return n
				},
				n: function() {
					return y
				},
				yl: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = "/persistence/user",
				p = async () => {
					try {
						return await (await e.get(s, {
							hideErrorAlert: !0
						})).body
					} catch (r) {
						console.error(r)
					}
				}, c = async r => {
					try {
						return await (await e.get(`/accounts/${r}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, m = async (r, a) => {
					try {
						return await (await e.post(`${s}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: a
							}),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						return console.error(u), []
					}
				}, i = async (r, a) => {
					try {
						return await http.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: a
							}),
							hideErrorAlert: !0
						}), !0
					} catch (u) {
						return console.error(u), !1
					}
				}, d = async r => {
					try {
						return await (await e.post(s, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (a) {
						console.error(a)
					}
				}, y = async r => {
					try {
						return await (await e.post(`${s}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, n = async r => {
					try {
						return await (await e.post(`${s}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						throw console.error(a), a
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				Wl: function() {
					return y
				},
				lp: function() {
					return _
				},
				Z_: function() {
					return I
				},
				r7: function() {
					return S
				},
				Tv: function() {
					return ve
				},
				yZ: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(p),
				m = t("../react/utils/bootstrap.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				d = t("../react/app/components/Persistence/api.ts");
			const y = 10;

			function n(ne) {
				for (var U = 1; U < arguments.length; U++) {
					var H = arguments[U] != null ? Object(arguments[U]) : {},
						oe = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(H).filter(function(le) {
						return Object.getOwnPropertyDescriptor(H, le).enumerable
					})), oe.forEach(function(le) {
						r(ne, le, H[le])
					})
				}
				return ne
			}

			function r(ne, U, H) {
				return U = a(U), U in ne ? Object.defineProperty(ne, U, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[U] = H, ne
			}

			function a(ne) {
				var U = u(ne, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function u(ne, U) {
				if (typeof ne != "object" || ne === null) return ne;
				var H = ne[Symbol.toPrimitive];
				if (H !== void 0) {
					var oe = H.call(ne, U || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(ne)
			}
			const l = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				f = n({}, l, {
					isLoading: !0,
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
				O = _.Consumer,
				I = ({
					children: ne,
					onDarkModeChangeCb: U
				}) => {
					const [H, oe] = (0, e.useState)(l), [le, pe] = (0, e.useState)(f.isLoading), Q = (0, m.$8)(), A = (0, s.p4)(K => (0, i.wH)(K));
					(0, e.useEffect)(() => {
						Q ? (0, d.yl)().then(K => {
							K && (oe(K), U(K.darkMode))
						}).finally(() => pe(!1)) : pe(!1)
					}, [Q]);
					const P = (K, re) => !!H.favorites.find(Ce => Ce.type === "zone" && Ce.name === K && Ce.accountId === re),
						k = K => H.favorites.filter(Ce => Ce.type === "zone" && Ce.accountId === K).length < y;
					return o().createElement(_.Provider, {
						value: n({}, H, {
							isLoading: le,
							actions: {
								canAccountStarZone: k,
								isZoneStarred: P,
								starZone: async (K, re) => {
									var Ce;
									const Ie = !P(K, re),
										Me = k(re);
									if (Ie && !Me) {
										console.log("can not star zone - account is at limit");
										return
									}
									const ke = await (0, d.lt)(K, re);
									c().sendEvent("click star zone", {
										isStarring: Ie,
										totalStarredZones: ke.filter(Z => Z.accountId === re && Z.type === "zone").length,
										totalZones: A == null || (Ce = A.paginationData) === null || Ce === void 0 ? void 0 : Ce.info.total_count
									}), oe(n({}, H, {
										favorites: ke
									}))
								},
								setDarkMode: async K => {
									const re = await (0, d.C8)(K);
									oe(re), U(re.darkMode)
								},
								logRouteVisited: async K => {
									var re;
									const Ce = await (0, d.n)(K);
									oe((re = Ce) !== null && re !== void 0 ? re : n({}, H))
								},
								viewChange: async K => {
									const re = await (0, d.m6)(K);
									oe(n({}, H, {
										viewedChanges: re
									}))
								}
							}
						})
					}, ne)
				},
				h = () => (0, e.useContext)(_);
			var N = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				E = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function C() {
				return C = Object.assign ? Object.assign.bind() : function(ne) {
					for (var U = 1; U < arguments.length; U++) {
						var H = arguments[U];
						for (var oe in H) Object.prototype.hasOwnProperty.call(H, oe) && (ne[oe] = H[oe])
					}
					return ne
				}, C.apply(this, arguments)
			}

			function R(ne, U) {
				if (ne == null) return {};
				var H = b(ne, U),
					oe, le;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(ne);
					for (le = 0; le < pe.length; le++) oe = pe[le], !(U.indexOf(oe) >= 0) && (!Object.prototype.propertyIsEnumerable.call(ne, oe) || (H[oe] = ne[oe]))
				}
				return H
			}

			function b(ne, U) {
				if (ne == null) return {};
				var H = {},
					oe = Object.keys(ne),
					le, pe;
				for (pe = 0; pe < oe.length; pe++) le = oe[pe], !(U.indexOf(le) >= 0) && (H[le] = ne[le]);
				return H
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
			var S = ne => {
					let {
						isStarred: U,
						size: H = 16
					} = ne, oe = R(ne, ["isStarred", "size"]);
					const le = M[(0, N.Yc)() ? "dark" : "light"];
					return o().createElement(E.J, C({
						type: U ? "star" : "star-outline",
						color: U ? le.gold : le.gray,
						size: H
					}, oe))
				},
				L = t("../node_modules/@cloudflare/elements/es/index.js");

			function G(ne) {
				for (var U = 1; U < arguments.length; U++) {
					var H = arguments[U] != null ? Object(arguments[U]) : {},
						oe = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(H).filter(function(le) {
						return Object.getOwnPropertyDescriptor(H, le).enumerable
					})), oe.forEach(function(le) {
						$(ne, le, H[le])
					})
				}
				return ne
			}

			function $(ne, U, H) {
				return U = V(U), U in ne ? Object.defineProperty(ne, U, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[U] = H, ne
			}

			function V(ne) {
				var U = ce(ne, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function ce(ne, U) {
				if (typeof ne != "object" || ne === null) return ne;
				var H = ne[Symbol.toPrimitive];
				if (H !== void 0) {
					var oe = H.call(ne, U || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(ne)
			}
			const ee = {
				light: {
					default: {
						border: "gray.8",
						text: "gray.2",
						bg: "white",
						bgDisabled: "grey.6"
					},
					active: {
						border: "blue.5",
						text: "blue.5",
						bg: "blue.9",
						bgDisabled: "grey.6"
					}
				},
				dark: {
					default: {
						border: "gray.8",
						text: "gray.1",
						bg: "gray.7",
						bgDisabled: "grey.6"
					},
					active: {
						border: "blue.5",
						text: "gray.1",
						bg: "blue.9",
						bgDisabled: "grey.6"
					}
				}
			};
			var ve = (0, e.forwardRef)(({
				featurePreview: ne = !1,
				isStarred: U,
				onClickFn: H,
				isDisabled: oe,
				testId: le,
				buttonText: pe,
				size: Q = "large"
			}, A) => {
				const P = ee[(0, N.Yc)() ? "dark" : "light"][U && !ne ? "active" : "default"],
					k = G({}, Q === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, Q === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return o().createElement(L.zx, {
					innerRef: A,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: k.paddingRight,
					gap: 1,
					pl: k.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: ne || oe ? "default" : "pointer",
					backgroundColor: P.bg,
					color: P.text,
					borderColor: P.border,
					onClick: H,
					opacity: oe ? .5 : 1,
					disabled: oe,
					fontSize: k.fontSize,
					height: k.height,
					"data-testid": le
				}, o().createElement(S, {
					isStarred: ne ? !1 : U,
					size: k.starIconSize
				}), pe)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				$n: function() {
					return u
				},
				IU: function() {
					return f
				},
				Wq: function() {
					return R
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
					return l
				},
				iY: function() {
					return r
				},
				o_: function() {
					return h
				},
				us: function() {
					return E
				},
				wB: function() {
					return a
				},
				zJ: function() {
					return N
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/utils/zoneLevelAccess.ts"),
				m = t("../react/pages/stream/selectors.ts"),
				i = t("../react/pages/home/domain-registration/selectors.ts"),
				d = t("../react/pages/images/selectors.ts"),
				y = t("../react/pages/r2/selectors.ts");
			const n = T => !!(0, c.b)(T),
				r = T => n(T) ? (0, e.hT)(T) : !0,
				a = (T, S, L, G = "read") => {
					const $ = (0, s.nA)(T);
					return n(T) ? (0, e.WL)(T, (0, e.W9)(L, e.ZZ[G]), (0, e.j)($ == null ? void 0 : $.id)) : (0, p.Yj)(T)(S)[G]
				},
				u = (T, S, L, G = "read") => {
					const $ = (0, s.nA)(T),
						V = e.zs.includes(L);
					return n(T) ? (0, e.WL)(T, V ? L : (0, e.my)(L, e.ZZ[G === "edit" ? "update" : G]), (0, e.j)($ == null ? void 0 : $.id)) : (0, p.Yj)(T)(S)[G === "update" ? "edit" : G]
				},
				l = T => !!(0, m._Q)(T),
				f = T => (0, d.pT)(T),
				_ = T => (0, d.pT)(T) && (0, d.GH)(T),
				O = T => sourcingKitEnabledSelector(T),
				I = T => !!r2EnabledSelector(T),
				h = T => (0, y.Mv)(T),
				N = T => (0, o.$f)(T, "rulesets.magic_transit_allowed"),
				E = T => (0, o.$f)(T, "flowtrackd.magic_custom_config_allowed"),
				C = T => (0, o.$f)(T, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				R = T => (0, p.Le)(T, "ddos_protection", "l4_rulesets"),
				b = T => hasAccountEntitlements(T, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				M = T => (0, i.HO)(T)
		},
		"../react/app/components/SomethingWrong.jsx": function(j, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/prop-types/index.js"),
				p = t.n(s),
				c = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				m = t.n(c),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = t("../node_modules/@cloudflare/component-button/es/index.js"),
				y = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				n = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				r = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				a = t.n(r),
				u = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				f = t("../react/app/components/Footer.tsx"),
				_ = t("../react/utils/url.ts");

			function O($) {
				for (var V = 1; V < arguments.length; V++) {
					var ce = arguments[V] != null ? Object(arguments[V]) : {},
						ee = Object.keys(ce);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(ce).filter(function(J) {
						return Object.getOwnPropertyDescriptor(ce, J).enumerable
					})), ee.forEach(function(J) {
						I($, J, ce[J])
					})
				}
				return $
			}

			function I($, V, ce) {
				return V = h(V), V in $ ? Object.defineProperty($, V, {
					value: ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[V] = ce, $
			}

			function h($) {
				var V = N($, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function N($, V) {
				if (typeof $ != "object" || $ === null) return $;
				var ce = $[Symbol.toPrimitive];
				if (ce !== void 0) {
					var ee = ce.call($, V || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)($)
			}
			const E = (0, i.createComponent)(({
					type: $
				}) => ({
					height: $ !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				C = (0, i.createComponent)(({
					theme: $,
					margin: V,
					size: ce = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: $.colors.gray[3],
					height: V ? "auto" : "100%",
					padding: V ? 0 : $.space[ce > 1 ? ce - 2 : 0],
					margin: V,
					justifyContent: "center",
					alignItems: "center"
				})),
				R = (0, i.createComponent)(() => ({
					textAlign: "left"
				})),
				b = (0, i.createComponent)(() => ({
					textAlign: "right"
				})),
				M = (0, i.createComponent)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[6]
				})),
				T = (0, i.createComponent)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[4]
				})),
				S = (0, i.createComponent)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[3]
				})),
				L = (0, i.createComponent)(({
					theme: $
				}) => ({
					width: "100%",
					height: 125,
					marginTop: $.space[4],
					padding: $.space[2]
				}), "textarea");
			class G extends o().Component {
				constructor(...V) {
					super(...V);
					I(this, "state", {
						value: "",
						submitted: !1
					}), I(this, "handleTextareaChange", ce => {
						this.setState({
							value: ce.target.value
						})
					}), I(this, "sendErrToSentry10", async () => {
						try {
							var ce, ee, J, ve;
							const ne = ((ce = window) === null || ce === void 0 || (ee = ce.bootstrap) === null || ee === void 0 || (J = ee.data) === null || J === void 0 || (ve = J.user) === null || ve === void 0 ? void 0 : ve.id) || "Unknown",
								U = this.props.eventId || y.eW(),
								H = {
									name: ne,
									email: `${ne}@userid.com`,
									comments: this.state.value,
									eventId: U,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: O({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(H)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (ne) {
							console.error(ne)
						}
					}), I(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), I(this, "renderContent", ce => o().createElement(c.I18n, null, ee => o().createElement(E, {
						type: ce
					}, o().createElement(C, null, o().createElement(R, null, o().createElement(M, null, ee.t("error.internal_issues")), o().createElement(T, null, ee.t("error.help_us")), o().createElement(L, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: J => this.handleTextareaChange(J),
						disabled: this.state.submitted,
						placeholder: ee.t("error.give_feedback")
					}), o().createElement(b, null, !this.state.submitted && o().createElement(d.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, ee.t("common.submit")), this.state.submitted && o().createElement(S, null, ee.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const V = this.props.error;
					console.error(`SomethingWrong: ${V}`), n.YA("user_feedback_form_displayed", "yes"), n.YA("normalizedPath", (0, _.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: V
					} = this.props;
					return V === "fullscreen" ? o().createElement("div", null, o().createElement(u.h4, null, o().createElement(r.Link, {
						to: "/"
					}, o().createElement(l.TR, null))), this.renderContent(V), o().createElement(f.Z, null)) : this.renderContent(V)
				}
			}
			G.propTypes = {
				type: p().oneOf(["fullscreen", "page"]),
				error: p().oneOfType([p().string, p().object]),
				eventId: p().string
			}, v.Z = G
		},
		"../react/app/redux/index.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				TZ: function() {
					return s
				},
				UM: function() {
					return c
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
			const s = () => (0, e.useStore)(),
				p = () => s().getState(),
				c = () => (0, e.useDispatch)(),
				m = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(j, v, t) {
			"use strict";
			t.d(v, {
				P1: function() {
					return y
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
				s = t("../react/pages/email/types.ts"),
				p = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				c = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				m = t.n(c);
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
				y = (...r) => (0, p.P1)(i, d, ...r),
				n = (0, p.QB)(i)
		},
		"../react/app/redux/utils.ts": function(j, v, t) {
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
			const o = p => (c, m, i) => (0, e.SC)(c, m, i, {
					hideErrorAlert: !0
				}).catch(p),
				s = p => c => {
					if (c.status === p) return c;
					throw c
				}
		},
		"../react/common/actionTypes.ts": function(j, v, t) {
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
					return y
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
					return c
				},
				s1: function() {
					return d
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				s = "MODAL_OPEN",
				p = "MODAL_CLOSE",
				c = "TOGGLE_ON",
				m = "TOGGLE_OFF",
				i = "SET_ACTIVE",
				d = "CLEAR_ACTIVE",
				y = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				AX: function() {
					return a
				},
				YT: function() {
					return y
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

			function s(u) {
				for (var l = 1; l < arguments.length; l++) {
					var f = arguments[l] != null ? Object(arguments[l]) : {},
						_ = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(f).filter(function(O) {
						return Object.getOwnPropertyDescriptor(f, O).enumerable
					})), _.forEach(function(O) {
						p(u, O, f[O])
					})
				}
				return u
			}

			function p(u, l, f) {
				return l = c(l), l in u ? Object.defineProperty(u, l, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[l] = f, u
			}

			function c(u) {
				var l = m(u, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function m(u, l) {
				if (typeof u != "object" || u === null) return u;
				var f = u[Symbol.toPrimitive];
				if (f !== void 0) {
					var _ = f.call(u, l || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(u)
			}
			const i = u => {
					const l = u.payload.map(f => s({}, f, {
						membershipId: f.id,
						id: f.account.id
					}));
					return s({}, u, {
						payload: l
					})
				},
				d = u => {
					const l = i(u);
					return Array.isArray(l.payload) ? s({}, u, {
						payload: l.payload[0]
					}) : s({}, u, {
						payload: null
					})
				},
				y = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", i),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...u) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: u
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", d)
		},
		"../react/common/actions/modalActions.ts": function(j, v, t) {
			"use strict";
			t.r(v), t.d(v, {
				closeModal: function() {
					return p
				},
				openModal: function() {
					return s
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function s(c, m, i = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: c,
						props: m
					},
					options: i
				}
			}

			function p(c) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: c
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				IH: function() {
					return c
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
					return y
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
			let p = 0;

			function c(n, r, a = {}) {
				return a = a || {},
					function(u) {
						let l = p++,
							f = {
								id: l,
								type: n,
								message: r,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									u(s(l)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						u(o(f))
					}
			}

			function m(n, r) {
				return c("success", n, r)
			}

			function i(n, r) {
				return c("info", n, r)
			}

			function d(n, r) {
				return c("warning", n, r)
			}

			function y(n, r) {
				return c("error", n, r)
			}
		},
		"../react/common/actions/userActions.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				BT: function() {
					return i
				},
				Ut: function() {
					return O
				},
				V_: function() {
					return I
				},
				Y9: function() {
					return f
				},
				Z0: function() {
					return N
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

			function s(E) {
				for (var C = 1; C < arguments.length; C++) {
					var R = arguments[C] != null ? Object(arguments[C]) : {},
						b = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(R).filter(function(M) {
						return Object.getOwnPropertyDescriptor(R, M).enumerable
					})), b.forEach(function(M) {
						p(E, M, R[M])
					})
				}
				return E
			}

			function p(E, C, R) {
				return C = c(C), C in E ? Object.defineProperty(E, C, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[C] = R, E
			}

			function c(E) {
				var C = m(E, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function m(E, C) {
				if (typeof E != "object" || E === null) return E;
				var R = E[Symbol.toPrimitive];
				if (R !== void 0) {
					var b = R.call(E, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(E)
			}
			const i = (0, e.C)("user").get`/user`,
				d = (0, e.C)("user").patch`/user`,
				y = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				u = (0, e.C)("user").delete`/user/two_factor_authentication`,
				l = (0, e.C)("user").put`/user/email`;

			function f(...E) {
				return l(...E)
			}
			const _ = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				O = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(E => s({}, E, {
					body: s({}, E.body, {
						result: {}
					})
				}))),
				I = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				h = (0, e.C)("userDetails").get`/user/details`,
				N = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(j, v, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/utils/zoneLevelAccess.ts");
			const s = ({
				legacyPermission: p,
				canAccess: c,
				children: m,
				render: i
			}) => {
				const d = !!(0, o.P)();
				let y;
				typeof c == "boolean" && c !== void 0 && d ? y = {
					read: c,
					list: c,
					create: c,
					update: c,
					delete: c,
					sign: c
				} : y = (0, e.Z)(p);
				const n = i || m;
				return n ? n(y) : null
			};
			v.Z = s
		},
		"../react/common/components/AccessCheck/constants.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				L8: function() {
					return n
				},
				W9: function() {
					return y
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
					return c
				}
			});
			const e = "com.cloudflare.api.account",
				o = "com.cloudflare.api.account.",
				s = "com.cloudflare.edge.",
				p = "com.cloudflare.api.account.zone.",
				c = ["com.cloudflare.api.app.manage"];
			let m = function(a) {
				return a.read = "read", a.list = "list", a.create = "create", a.update = "update", a.delete = "delete", a.sign = "sign", a.refresh = "refresh", a
			}({});
			const i = (a, u) => `${o}${a?a+".":""}${u}`,
				d = (a, u) => `${p}${a?a+".":""}${u}`,
				y = (a, u) => `${s}${a}.${u}`,
				n = (a = "") => `${o}${a}`,
				r = (a = "") => `${p}${a}`
		},
		"../react/common/components/AccessCheck/index.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
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
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/common/components/AccessCheck/AccessCheck.tsx"),
				s = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				p = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(j, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				p = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/pages/zone-versioning/selectors.ts");

			function m(i) {
				const {
					read: d,
					edit: y
				} = (0, s.p4)(p.Yj)(i);
				let n = y;
				if (i != "zone_versioning") {
					const a = (0, s.p4)(c.G);
					(a == null ? void 0 : a.isLocked) && (n = !1)
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
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				WL: function() {
					return a
				},
				hT: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/pages/home/members/utils.ts"),
				p = t("../react/common/components/AccessCheck/constants.ts"),
				c = t("../react/pages/zone-versioning/selectors.ts");
			const m = {
					allow: "allow",
					deny: "deny"
				},
				i = 0,
				d = 1,
				y = 2,
				n = 3;

			function r(C, R, b, M) {
				let T = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					S;
				for (S in T) T[S] = a(C, `${R}.${S}`, b, M);
				return T
			}

			function a(C, R, b, M) {
				var T;
				if (u(R) && !l(R)) {
					const V = (0, c.G)(C);
					if (V == null ? void 0 : V.isLocked) return !1
				}
				const S = (T = (0, o.D0)(C)) === null || T === void 0 ? void 0 : T.id,
					L = S ? [`com.cloudflare.api.account.${S}`] : void 0,
					G = (0, s.vq)(S);
				return !!_(C, G, R, b, M || L)
			}

			function u(C) {
				return ![p.ZZ.read, p.ZZ.list].some(R => C.endsWith(R))
			}

			function l(C) {
				return C.includes("zone.versioning")
			}

			function f(C) {
				const R = (0, o.Ko)(C);
				let b = !1;
				return R == null || R.forEach(M => {
					M.access === m.allow && M.permission_groups.forEach(T => {
						var S;
						(T == null || (S = T.meta) === null || S === void 0 ? void 0 : S.scopes) === p.u1 && (b = !0)
					})
				}), b
			}

			function _(C, R, b, M, T) {
				const S = (0, o.Ko)(C),
					L = {};
				S == null || S.forEach(ce => {
					var ee;
					const J = ce.access;
					let ve = i;
					if (b && ce.permission_groups.forEach(ne => {
							var U, H;
							R == null || (U = R.find(oe => oe.id === ne.id)) === null || U === void 0 || (H = U.permissions) === null || H === void 0 || H.forEach(oe => {
								ve = Math.max(ve, O(oe, b))
							})
						}), ve !== i && !!M) {
						let ne = i;
						ce.resource_groups.forEach(U => {
							ne = Math.max(ne, h(U.scope, M, T))
						}), ve = ne === i ? ne : ve + ne
					}(L == null || (ee = L[J]) === null || ee === void 0 ? void 0 : ee[ve]) || (0, e.Z)(L, [J, ve], []), L[J][ve].push(ce)
				});
				const G = L[m.allow] && Object.keys(L[m.allow]).map(ce => parseInt(ce)),
					$ = L[m.deny] && Object.keys(L[m.deny]).map(ce => parseInt(ce)),
					V = Math.max.apply(Math, G);
				return V === i || Math.max.apply(Math, $) >= V ? null : L[m.allow][V]
			}

			function O(C, R) {
				if (C.key === R || I(C.key, R)) return n;
				for (const b of (C == null ? void 0 : C.implies) || []) {
					let M = O(b, R);
					if (M > i) return M
				}
				return i
			}

			function I(C, R) {
				const b = R == null ? void 0 : R.lastIndexOf(".");
				return b === -1 ? !1 : (R == null ? void 0 : R.substring(0, b)) + ".*" === C
			}

			function h(C, R, b) {
				var M;
				let T = i;
				if (C == null || (M = C.objects) === null || M === void 0 || M.forEach(S => {
						T = Math.max(T, E(S, R))
					}), T === i) return T;
				if (C.key !== "*") switch (!0) {
					case N(C.key, b) > i:
					case (!(b == null ? void 0 : b.length) && T === n):
						break;
					case (T === d && N(C.key, [R]) > i):
						T = N(C.key, [R]);
						break;
					default:
						return i
				}
				for (const S of C.subset_of || [])
					if (N(S.key, b) === i) return i;
				return T
			}

			function N(C, R = []) {
				for (const b of R || []) {
					if (C === b) return n;
					if (I(C, b)) return y
				}
				return i
			}

			function E(C, R) {
				return C.key === R ? n : C.key === "*" ? d : I(C.key, R) ? y : i
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(j, v, t) {
			"use strict";
			t.d(v, {
				a: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				s = t("../react/common/selectors/accountSelectors.ts");
			const p = m => {
					if (typeof m != "string") throw new Error("invalid Param Type provided");
					const i = m.slice(1).split(":");
					if (i.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: i[0],
						value: i[1]
					}
				},
				c = (m, i) => {
					const {
						resourceId: d,
						accountId: y,
						legacyPermission: n
					} = i;
					let {
						read: r,
						edit: a
					} = i;
					const u = {};
					n && (a = `#${n}:edit`, r = `#${n}:read`);
					const l = d || y;
					if (r) {
						const f = Array.isArray(r) ? r : [r];
						u.isReadable = f.some(_ => {
							const O = p(_);
							return (0, s.DT)(m, l, I => !!(I[O.key] && I[O.key][O.value]))
						})
					}
					if (a) {
						const f = Array.isArray(a) ? a : [a];
						u.isEditable = f.some(_ => {
							const O = p(_);
							return (0, s.DT)(m, l, I => !!(I[O.key] && I[O.key][O.value]))
						})
					}
					return u
				};
			v.Z = (0, e.connect)(c)
		},
		"../react/common/components/AccessControl/index.js": function(j, v, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				o = t.n(e),
				s = t("../react/app/HoCs/withEntities.tsx"),
				p = t("../react/common/components/AccessControl/SAAConnect.js");

			function c(r) {
				for (var a = 1; a < arguments.length; a++) {
					var u = arguments[a] != null ? Object(arguments[a]) : {},
						l = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(u).filter(function(f) {
						return Object.getOwnPropertyDescriptor(u, f).enumerable
					})), l.forEach(function(f) {
						m(r, f, u[f])
					})
				}
				return r
			}

			function m(r, a, u) {
				return a = i(a), a in r ? Object.defineProperty(r, a, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = u, r
			}

			function i(r) {
				var a = d(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function d(r, a) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var l = u.call(r, a || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}

			function y(r) {
				const u = ["isReadable", "isEditable"].reduce((l, f) => r.hasOwnProperty(f) ? c({}, l, {
					[f]: r[f]
				}) : l, {});
				return r.children(u)
			}
			y.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const n = (0, s.Z)((0, p.Z)(y));
			n.displayName = "AccessControl", v.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
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
				p = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				c = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const m = () => d.test(window.location.pathname) || s.E.has(p.Qq),
				i = () => s.E.get(p.Qq),
				d = /^\/login\/apple(\/)?/,
				n = [d, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let u = !1;
					n.forEach(f => {
						if (f.test(window.location.pathname)) {
							u = !0;
							return
						}
					});
					const l = m() && u;
					return l && (0, c.C8)(c.LF.OFF), l
				},
				a = u => {
					u && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let l = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					u && (l = l + `&jwt=${u}`), window.location.href = l
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				oG: function() {
					return l
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
				s = t("../node_modules/@cloudflare/component-button/es/index.js"),
				p = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				m = t.n(c),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = t("../react/common/components/Dropdown/index.tsx"),
				y = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(f) {
					for (var _ = 1; _ < arguments.length; _++) {
						var O = arguments[_];
						for (var I in O) Object.prototype.hasOwnProperty.call(O, I) && (f[I] = O[I])
					}
					return f
				}, n.apply(this, arguments)
			}

			function r(f, _) {
				if (f == null) return {};
				var O = a(f, _),
					I, h;
				if (Object.getOwnPropertySymbols) {
					var N = Object.getOwnPropertySymbols(f);
					for (h = 0; h < N.length; h++) I = N[h], !(_.indexOf(I) >= 0) && (!Object.prototype.propertyIsEnumerable.call(f, I) || (O[I] = f[I]))
				}
				return O
			}

			function a(f, _) {
				if (f == null) return {};
				var O = {},
					I = Object.keys(f),
					h, N;
				for (N = 0; N < I.length; N++) h = I[N], !(_.indexOf(h) >= 0) && (O[h] = f[h]);
				return O
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
					color: (0, y.Yc)() ? f.colors.text : void 0
				},
				"& button:hover": {
					color: (0, y.Yc)() ? f.colors.text : void 0
				}
			}));

			function l(f) {
				let {
					menu: _,
					containerProps: O,
					disabled: I,
					disabledDropdown: h = I
				} = f, N = r(f, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: E
				} = (0, c.useI18n)();
				return o().createElement(u, n({}, O, {
					role: "group"
				}), o().createElement(s.zx, n({}, N, {
					disabled: I
				})), o().createElement(d.Lt, {
					trigger: o().createElement(s.zx, {
						type: N.type,
						"aria-haspopup": "menu",
						disabled: h
					}, o().createElement(p.J, {
						type: "caret-down",
						label: E("common.more"),
						size: 12
					})),
					menu: _
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(j, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/prop-types/index.js"),
				p = t.n(s),
				c = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const m = ({
				children: i
			}) => o().createElement(c.xu, {
				height: 411
			}, i);
			m.propTypes = {
				children: p().node
			}, v.Z = m
		},
		"../react/common/components/ModalManager.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				ZP: function() {
					return l
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
			const p = f => f.application.modals;
			var c = t("../react/common/actions/modalActions.ts"),
				m = t("../../../../node_modules/swr/core/dist/index.mjs"),
				i = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function d() {
				return d = Object.assign ? Object.assign.bind() : function(f) {
					for (var _ = 1; _ < arguments.length; _++) {
						var O = arguments[_];
						for (var I in O) Object.prototype.hasOwnProperty.call(O, I) && (f[I] = O[I])
					}
					return f
				}, d.apply(this, arguments)
			}
			const y = o().createContext(null);
			class n extends o().Component {
				render() {
					const {
						modals: _,
						closeModal: O
					} = this.props;
					return o().createElement(o().Fragment, null, _.map(({
						ModalComponent: I,
						props: h = {},
						id: N
					}) => {
						const E = () => {
							typeof h.onClose == "function" && h.onClose(), O(I)
						};
						return o().createElement(y.Provider, {
							key: N,
							value: {
								closeModal: E
							}
						}, o().createElement(m.J$, {
							value: i.ZP
						}, o().createElement(I, d({}, h, {
							isOpen: !0,
							closeModal: E
						}))))
					}))
				}
			}

			function r() {
				const f = o().useContext(y);
				if (!f) throw new Error("useModalContext must be used within a ModalContext");
				return f
			}

			function a() {
				const f = (0, s.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(..._) {
						return f(c.openModal(..._))
					}, [f]),
					closeModal: (0, e.useCallback)(function(..._) {
						return f(c.closeModal(..._))
					}, [f])
				}
			}
			var l = (0, s.connect)(f => ({
				modals: p(f)
			}), c)(n)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return d
				},
				JR: function() {
					return y
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return m
				},
				ZI: function() {
					return c
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
				c = "from",
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
			let y = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				n = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(j, v, t) {
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
		"../react/common/constants/analytics/botScoreSrc.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				EG: function() {
					return s
				},
				Me: function() {
					return c
				},
				sk: function() {
					return p
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let s = function(m) {
				return m.NOT_COMPUTED = "not_computed", m.MACHINE_LEARNING = "machine_learning", m.HEURISTICS = "heuristics", m.BEHAVIORAL_ANALYSIS = "behavioral_analysis", m.JS_FINGERPRINTING = "js_fingerprinting", m.VERIFIED_BOT = "verified_bot", m.CLOUDFLARE_SERVICE = "cloudflare_service", m
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
				c = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [s.NOT_COMPUTED, s.MACHINE_LEARNING, s.HEURISTICS, s.BEHAVIORAL_ANALYSIS, s.JS_FINGERPRINTING, s.VERIFIED_BOT, s.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
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
					return y
				},
				Hw: function() {
					return m
				},
				Ed: function() {
					return c
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
			let e = function(l) {
				return l.page_rules = "page_rules", l.automatic_platform_optimization = "automatic_platform_optimization", l
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
				c = {
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
				y = {
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
			const u = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				FP: function() {
					return e
				},
				Nl: function() {
					return c
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
				c = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Dk: function() {
					return u
				},
				Dy: function() {
					return l
				},
				E_: function() {
					return m
				},
				K$: function() {
					return I
				},
				Lv: function() {
					return f
				},
				S4: function() {
					return c
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return y
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
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const p = "healthy",
				c = "degraded",
				m = "critical",
				i = "unknown",
				d = "not-monitored",
				y = o().from({
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
					f: y.FREE,
					p: y.PRO,
					b: y.BIZ
				},
				a = "marketing-pt",
				u = () => {
					const h = s.Z.get(a);
					if (!!h) return r[h]
				},
				l = ["gov"],
				f = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				_ = "banner-notification-interactions",
				O = null;
			let I = function(h) {
				return h.SUPER_ADMIN = "Super Administrator - All Privileges", h.ADMIN = "Administrator", h.ADMIN_READ_ONLY = "Administrator Read Only", h
			}({})
		},
		"../react/common/constants/index.ts": function(j, v, t) {
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
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(j, v, t) {
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
					return p
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
				s = (c, m) => {
					var i;
					return `${m} ${(i=o[c])!==null&&i!==void 0?i:c} rule${m===e.GET?"s":""}`
				},
				p = () => {
					var c, m;
					return (c = Object.keys(o)) === null || c === void 0 || (m = c.map(i => {
						var d;
						return (d = Object.values(e)) === null || d === void 0 ? void 0 : d.map(y => s(i, y))
					})) === null || m === void 0 ? void 0 : m.flat()
				}
		},
		"../react/common/hooks/suspenseHelpers.ts": function(j, v, t) {
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
				s = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const p = "suspenseComplete";

			function c() {
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
				const [y, n] = d;
				o().useLayoutEffect(y, n), m(y)
			}
		},
		"../react/common/hooks/useAccountEntitlement.ts": function(j, v, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function s(p) {
				return (0, e.p4)(c => (0, o.BF)(c, p))
			}
			v.Z = s
		},
		"../react/common/hooks/useAccountId.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				F: function() {
					return c
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				p = t.n(s);

			function c() {
				var m;
				const {
					accountId: i
				} = (0, s.useParams)(), d = (0, e.p4)(o.D0);
				if (i === void 0 && !d) throw new Error("Account ID not found in URL params");
				return (m = i) !== null && m !== void 0 ? m : d == null ? void 0 : d.id
			}
		},
		"../react/common/hooks/useCachedState.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				j: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function p(c, {
				key: m,
				cache: i = s.E,
				ttl: d
			} = {}) {
				var y;
				const n = m !== void 0 && i.get(m),
					[r, a] = (0, e.useState)((y = n) !== null && y !== void 0 ? y : c);
				return [r, l => {
					a(f => (l instanceof Function && (l = l(f)), m !== void 0 && i.set(m, l, d), l))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(j, v, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(s) {
				return (0, e.qf)(s)
			}
			v.Z = o
		},
		"../react/common/hooks/usePrevious.ts": function(j, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function s(p) {
				const c = (0, e.useRef)(p);
				return (0, e.useEffect)(() => {
					c.current = p
				}, [p]), c.current
			}
			v.Z = s
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(j, v, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function s(p) {
				return (0, e.p4)(c => (0, o.rV)(c, p))
			}
			v.Z = s
		},
		"../react/common/middleware/sparrow/errors.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Uh: function() {
					return c
				},
				ez: function() {
					return p
				},
				oV: function() {
					return m
				}
			});

			function e(i, d, y) {
				return d = o(d), d in i ? Object.defineProperty(i, d, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = y, i
			}

			function o(i) {
				var d = s(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function s(i, d) {
				if (typeof i != "object" || i === null) return i;
				var y = i[Symbol.toPrimitive];
				if (y !== void 0) {
					var n = y.call(i, d || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			class p extends Error {
				constructor(d, y) {
					super(y);
					e(this, "eventName", void 0), this.eventName = d, this.name = "SparrowValidationError"
				}
			}
			class c extends p {
				constructor(d) {
					super(d, `Event not allowed: "${d}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class m extends p {
				constructor(d, y) {
					super(d, `Found invalid properties on event: "${d}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = y
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				AC: function() {
					return Ae
				},
				Au: function() {
					return z
				},
				B: function() {
					return ae
				},
				B3: function() {
					return ze
				},
				BG: function() {
					return b
				},
				Bp: function() {
					return Qe
				},
				D0: function() {
					return N
				},
				DT: function() {
					return k
				},
				EL: function() {
					return pe
				},
				EU: function() {
					return re
				},
				GE: function() {
					return gt
				},
				Ko: function() {
					return P
				},
				Kx: function() {
					return S
				},
				Le: function() {
					return L
				},
				O4: function() {
					return Ue
				},
				Ou: function() {
					return U
				},
				Py: function() {
					return Re
				},
				QI: function() {
					return st
				},
				RO: function() {
					return Je
				},
				T3: function() {
					return Ye
				},
				T8: function() {
					return R
				},
				UX: function() {
					return le
				},
				VP: function() {
					return Ze
				},
				Xo: function() {
					return He
				},
				Xu: function() {
					return J
				},
				Yi: function() {
					return at
				},
				Yj: function() {
					return A
				},
				Zu: function() {
					return Q
				},
				bC: function() {
					return Ce
				},
				f8: function() {
					return V
				},
				hI: function() {
					return it
				},
				hN: function() {
					return T
				},
				hX: function() {
					return Y
				},
				iq: function() {
					return Pe
				},
				nE: function() {
					return M
				},
				oD: function() {
					return oe
				},
				oI: function() {
					return $
				},
				oJ: function() {
					return Ve
				},
				tM: function() {
					return H
				},
				uF: function() {
					return ve
				},
				ut: function() {
					return Fe
				},
				vU: function() {
					return ut
				},
				wQ: function() {
					return ke
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				s = t.n(o),
				p = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				c = t.n(p),
				m = t("../../../../node_modules/reselect/lib/index.js"),
				i = t("../../../../node_modules/moment/moment.js"),
				d = t.n(i),
				y = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				r = t("../react/common/selectors/userSelectors.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				u = t("../react/app/components/DeepLink/selectors.ts"),
				l = t("../react/common/constants/index.ts"),
				f = t("../react/common/utils/hasRole.ts");

			function _(W) {
				for (var F = 1; F < arguments.length; F++) {
					var X = arguments[F] != null ? Object(arguments[F]) : {},
						ie = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(X).filter(function(ge) {
						return Object.getOwnPropertyDescriptor(X, ge).enumerable
					})), ie.forEach(function(ge) {
						O(W, ge, X[ge])
					})
				}
				return W
			}

			function O(W, F, X) {
				return F = I(F), F in W ? Object.defineProperty(W, F, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[F] = X, W
			}

			function I(W) {
				var F = h(W, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function h(W, F) {
				if (typeof W != "object" || W === null) return W;
				var X = W[Symbol.toPrimitive];
				if (X !== void 0) {
					var ie = X.call(W, F || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(W)
			}
			const N = W => {
					const F = ve(W);
					return F == null ? void 0 : F.account
				},
				E = W => {
					const F = (0, r.PR)(W);
					if (F) {
						const X = F.id;
						return W.accountAccess[X] || {}
					}
					return {}
				},
				C = W => W.accountsDetailed,
				R = (0, n.P1)("accountsDetailed", C),
				b = W => W.memberships,
				M = (0, m.P1)((0, n.P1)("memberships", b), u.U, (W, F) => !!F && !!W ? W.filter(X => F.includes(X.id)) : W),
				T = W => W.accountFlags && W.accountFlags.data,
				S = W => W.accountFlags,
				L = (W, F, X) => {
					const ie = T(W);
					return !ie || !ie[F] ? null : ie[F][X]
				},
				G = W => W.accountFlags.isRequesting,
				$ = (W, ...F) => s()(W, ["accountFlagsChanges", "data", ...F]),
				V = W => W.accountFlagsChanges.isRequesting,
				ce = (0, m.P1)(T, S, (W, F) => ({
					data: W,
					meta: F
				})),
				ee = (W, F, X) => !!(isEnterpriseSSEnabledSelector(W) && L(W, F, X)),
				J = W => W.membership,
				ve = (0, n.P1)("membership", J),
				ne = (0, m.P1)(ve, J, (W, F) => ({
					data: W,
					meta: F
				})),
				U = W => {
					const {
						roles: F = []
					} = ve(W) || {};
					return Boolean(F.find(X => X === "Super Administrator - All Privileges" || X === "Billing"))
				},
				H = W => {
					const F = [l.K$.SUPER_ADMIN];
					return (0, f.n)(W, F)
				},
				oe = W => {
					const F = E(W),
						X = Te.getMemberships(W) ? c().asMutable(Te.getMemberships(W)) : [];
					if (!!X) return c().from(X.map(ie => _({}, ie, {
						lastSeen: F[ie.account.id] ? F[ie.account.id].lastSeen : null
					})).sort((ie, ge) => ie.lastSeen && ge.lastSeen ? ge.lastSeen - ie.lastSeen : 0))
				},
				le = W => W.filteredMemberships,
				pe = (0, n.P1)("filteredMemberships", le),
				Q = (0, m.P1)(ve, W => W == null ? void 0 : W.permissions),
				A = (0, m.P1)(Q, W => (0, e.Z)(F => {
					var X;
					return (X = W == null ? void 0 : W[F]) !== null && X !== void 0 ? X : {
						read: !1,
						edit: !1
					}
				})),
				P = (0, m.P1)(ve, W => W == null ? void 0 : W.policies),
				k = (W, F, X) => {
					let ie = Te.getMembership(W);
					if (!ie) {
						const ge = Te.getMemberships(W);
						if (!ge || !F) return !1;
						ie = ge.find(be => be.account.id === F)
					}
					if (!ie || !X) return !1;
					try {
						return X(ie.permissions)
					} catch {
						return !1
					}
				},
				K = W => {
					var F, X;
					return (F = (X = N(W)) === null || X === void 0 ? void 0 : X.meta.has_pro_zones) !== null && F !== void 0 ? F : !1
				},
				re = W => {
					var F, X;
					return (F = (X = N(W)) === null || X === void 0 ? void 0 : X.meta.has_business_zones) !== null && F !== void 0 ? F : !1
				},
				Ce = W => re(W) || K(W),
				Ie = (W, F) => {
					const X = Me(W, F);
					return !!X && !!X.enabled
				},
				Me = (W, F) => {
					const X = Te.getMembership(W),
						ie = X && X.account;
					return ie && ie.legacy_flags && ie.legacy_flags[F]
				},
				ke = W => Ie(W, "custom_pages"),
				Z = W => !!W && W["webhooks.webhooks.enabled"],
				fe = W => L(W, "bots", "enabled"),
				Le = W => L(W, "billing", "annual_subscriptions_enable"),
				Je = W => W ? Boolean(L(W, "ConstellationAI", "v2_ui")) : !1,
				Y = W => W ? Boolean(L(W, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				ae = W => W ? Boolean(L(W, "AIgateway", "enabled")) : !1,
				de = W => Me(W, "enterprise_zone_quota"),
				ye = W => {
					const F = de(W);
					return !F || !F.available ? -1 : F.available
				},
				Pe = W => W.accountMembers,
				ze = (0, n.P1)("accountMembers", Pe),
				Ue = W => W.accountMember && W.accountMember.isRequesting,
				je = W => W.accountRoles,
				Ae = (0, n.P1)("accountRoles", je),
				Re = (W, F) => {
					const X = Te.getMemberships(W),
						ie = X && X.find(xe => xe.account.id === F);
					if (ie) return ie.account.name.replace(" Account", " account");
					const ge = Te.getMembership(W),
						be = ge && ge.account;
					return be && be.id === F ? be.name : null
				},
				Fe = (W, F) => {
					const X = Te.getMemberships(W),
						ie = X && X.find(xe => xe.account.id === F);
					if (ie) return ie.account.settings.access_approval_expiry;
					const ge = Te.getMembership(W),
						be = ge && ge.account;
					return be && be.id === F ? be.settings.access_approval_expiry : null
				},
				He = (W, F) => {
					const X = Fe(W, F);
					return X ? d().utc(X).isAfter() : !1
				},
				Ye = (W, F, X) => {
					const ie = Fe(W, F);
					let ge = ie ? d().utc(ie) : null;
					return !ge || !ge.isAfter() ? "" : ge && ge.year() === 3e3 ? X("account.access_approval.card_expiration_forever") : X("account.access_approval.card_expiration_text", {
						expiryTimestamp: ge.local().format(y.U.DateTime)
					})
				},
				Ve = W => W && W.member && W.member.edit,
				z = (W, F) => {
					const X = Te.getMembership(W),
						ie = X && X.account;
					return ie ? ie.id !== F : !1
				},
				te = W => W.dpa,
				he = (0, n.P1)("dpa", te),
				De = W => W.webhook,
				Ne = W => W.webhooks,
				Ke = (0, n.P1)("webhook", Ne),
				Ze = W => W.accountLegoContract,
				lt = (0, n.P1)("accountLegoContract", Ze),
				st = W => {
					const F = lt(W);
					return (F == null ? void 0 : F.lego_state) ? F.lego_state : ""
				},
				mt = W => st(W) === "signed",
				gt = W => Ze(W).isRequesting,
				ut = W => {
					const F = lt(W);
					return F && F.subscription_type ? F.subscription_type : ""
				},
				We = W => ut(W) !== "",
				Te = {
					getMembership: ve,
					getMemberships: M,
					getFilteredMemberships: pe,
					getAccountMembers: ze,
					getAccountRoles: Ae
				},
				Qe = W => W.accountSingle,
				at = (0, n.P1)("accountSingle", Qe),
				it = W => {
					const F = [l.K$.SUPER_ADMIN, l.K$.ADMIN];
					return (0, f.n)(W, F)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				$f: function() {
					return l
				},
				AD: function() {
					return c
				},
				BF: function() {
					return u
				},
				Bs: function() {
					return N
				},
				Ci: function() {
					return Q
				},
				E6: function() {
					return a
				},
				Gy: function() {
					return ke
				},
				Hq: function() {
					return Me
				},
				Ms: function() {
					return R
				},
				Q2: function() {
					return m
				},
				Qq: function() {
					return Ce
				},
				Td: function() {
					return I
				},
				Z: function() {
					return k
				},
				a: function() {
					return h
				},
				a5: function() {
					return re
				},
				du: function() {
					return d
				},
				ec: function() {
					return V
				},
				f: function() {
					return Ie
				},
				hL: function() {
					return K
				},
				ji: function() {
					return A
				},
				jo: function() {
					return b
				},
				lI: function() {
					return p
				},
				p1: function() {
					return _
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
					return y
				},
				w4: function() {
					return r
				},
				yD: function() {
					return P
				}
			});
			var e = t("../react/utils/url.ts");

			function o(Z, fe) {
				return Z && Z[fe]
			}
			const s = Z => !p(Z).isRequesting;

			function p(Z) {
				return Z.entitlements.zone
			}

			function c(Z) {
				return p(Z).data
			}
			const m = Z => {
				var fe, Le;
				return ((fe = p(Z).paginationData) === null || fe === void 0 || (Le = fe.options) === null || Le === void 0 ? void 0 : Le.editedDate) || {}
			};

			function i(Z, fe) {
				const Le = c(Z);
				return Le ? o(Le, fe) : void 0
			}
			const d = (Z, fe) => i(Z, fe) === !0;

			function y(Z) {
				return Z.entitlements.account
			}

			function n(Z) {
				return y(Z).data
			}
			const r = Z => {
				var fe, Le;
				return ((fe = y(Z).paginationData) === null || fe === void 0 || (Le = fe.options) === null || Le === void 0 ? void 0 : Le.editedDate) || {}
			};

			function a(Z) {
				return !y(Z).isRequesting
			}

			function u(Z, fe) {
				const Le = n(Z);
				return Le ? o(Le, fe) : void 0
			}

			function l(Z, fe) {
				return u(Z, fe) === !0
			}

			function f(Z, fe) {
				return fe.every(Le => l(Z, Le))
			}

			function _(Z) {
				return l(Z, "contract.customer_enabled")
			}

			function O(Z) {
				return l(Z, "contract.self_service_allowed")
			}

			function I(Z) {
				return l(Z, "billing.partners_managed")
			}
			const h = Z => _(Z) && O(Z),
				N = Z => l(Z, "enterprise.ecp_allowed");

			function E(Z) {
				return C(Z) || l(Z, "argo.allow_smart_routing") || l(Z, "argo.allow_tiered_caching") || l(Z, "rate_limiting.enabled") || l(Z, "ctm.enabled") || l(Z, "workers.enabled") || l(Z, "workers.kv_store.enabled") || l(Z, "stream.enabled")
			}
			const C = Z => d(Z, "argo.allow_smart_routing") || d(Z, "argo.allow_tiered_caching"),
				R = Z => l(Z, "zone.cname_setup_allowed") || l(Z, "zone.partial_setup_allowed") || d(Z, "zone.partial_setup_allowed"),
				b = Z => l(Z, "argo.allow_smart_routing") || d(Z, "argo.allow_smart_routing"),
				M = Z => l(Z, "argo.allow_tiered_caching") || d(Z, "argo.allow_tiered_caching"),
				T = Z => b(Z) || M(Z),
				S = Z => l(Z, "ctm.enabled"),
				L = Z => {
					const fe = u(Z, "ctm.load_balancers");
					return typeof fe == "number" ? fe : 0
				},
				G = Z => {
					const fe = u(Z, "ctm.pools");
					return typeof fe == "number" ? fe : 0
				},
				$ = Z => {
					const fe = u(Z, "ctm.origins");
					return typeof fe == "number" ? fe : 0
				},
				V = Z => l(Z, "workers.enabled"),
				ce = Z => l(Z, "stream.enabled"),
				ee = Z => {
					const fe = u(Z, "access.users_allowed");
					return typeof fe == "number" ? fe : 0
				},
				J = Z => ee(Z) > 0,
				ve = Z => {
					const fe = i(Z, "dedicated_certificates");
					return typeof fe == "number" ? fe : 0
				},
				ne = Z => ve(Z) > 0,
				U = Z => {
					const fe = i(Z, "rate_limiting.max_rules");
					return typeof fe == "number" ? fe : 0
				},
				H = Z => l(Z, "rate_limiting.enabled"),
				oe = Z => {
					const fe = i(Z, "page_rules");
					return typeof fe == "number" ? fe : 0
				},
				le = Z => oe(Z) > 0,
				pe = Z => {
					const fe = u(Z, "dns_firewall.max_clusters_allowed");
					return typeof fe == "number" ? fe : 0
				},
				Q = Z => pe(Z) > 0,
				A = Z => d(Z, "zone.advanced_certificate_manager") || l(Z, "zone.advanced_certificate_manager"),
				P = Z => i(Z, "authoritative_dns.proxy_record_allowed") === !1 || u(Z, "authoritative_dns.proxy_record_allowed") === !1,
				k = Z => l(Z, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				K = Z => i(Z, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				re = Z => {
					const fe = i(Z, "authoritative_dns.min_record_ttl_allowed");
					return typeof fe == "number" && fe > 1 ? fe : 60
				},
				Ce = Z => l(Z, "foundation_dns.advanced_nameservers_allowed") || d(Z, "foundation_dns.advanced_nameservers_allowed"),
				Ie = (Z, fe) => ((0, e.el)(window.location.pathname) ? i : u)(Z, fe),
				Me = Z => l(Z, "authoritative_dns.multi_provider_allowed") || d(Z, "authoritative_dns.multi_provider_allowed"),
				ke = Z => d(Z, "authoritative_dns.cname_flattening_allowed")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				r: function() {
					return c
				},
				v: function() {
					return m
				}
			});
			var e = t("../react/utils/i18n.ts"),
				o = t("../../../common/intl/intl-types/src/index.ts"),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = t("../react/utils/bootstrap.ts");
			const c = i => {
				if ((0, p.gm)()) return s.Z.set(e.ly, e.ZW), e.ZW;
				const d = i.userCommPreferences.data;
				if (d == null ? void 0 : d["language-locale"]) return (0, e.i_)(d["language-locale"]), d["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const y = (0, e.Kd)();
					return m(y) ? y : e.ZW
				}
			};

			function m(i) {
				const d = Object.keys(o.Q).find(y => o.Q[y] === i);
				return !!i && typeof i == "string" && d != null && (0, e.S8)(d)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				$8: function() {
					return c
				},
				BG: function() {
					return y
				},
				BY: function() {
					return h
				},
				GP: function() {
					return l
				},
				GU: function() {
					return N
				},
				PR: function() {
					return s
				},
				h$: function() {
					return O
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
			const o = E => E.user,
				s = (0, e.P1)("user", o),
				p = E => {
					var C;
					return (C = s(E)) === null || C === void 0 ? void 0 : C.email.endsWith("@cloudflare.com")
				},
				c = E => {
					var C;
					return !!((C = s(E)) === null || C === void 0 ? void 0 : C.id)
				},
				m = E => {
					const C = s(E);
					if (!!C) return C.first_name && C.last_name ? `${C.first_name} ${C.last_name}` : C.email
				},
				i = E => {
					const C = s(E);
					return C && C.has_enterprise_zones
				},
				d = E => E.userCommPreferences,
				y = (0, e.P1)("userCommPreferences", d),
				n = E => {
					const C = s(E);
					return C && C.email_verified
				},
				r = E => {
					const C = y(E);
					return C && C.preferences.marketing_communication
				},
				a = E => E.userDetails,
				u = (0, e.P1)("userDetails", a),
				l = E => {
					const C = u(E);
					return C && C["2FA-RECOVERY"] === "scheduled"
				},
				f = E => {
					const C = u(E);
					return C && C["2FA-RECOVERY"] === "interrupted"
				},
				_ = E => {
					const C = u(E);
					return C == null ? void 0 : C["NEW-USER-EMAIL"]
				},
				O = E => E.gates.assignments,
				I = (E, C) => E && E[C];

			function h(E, C) {
				const R = O(E);
				return R ? I(R, C) : void 0
			}
			const N = (E, C) => h(E, C) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				$4: function() {
					return R
				},
				$t: function() {
					return Re
				},
				A4: function() {
					return _
				},
				Cu: function() {
					return O
				},
				DQ: function() {
					return Ie
				},
				Ej: function() {
					return M
				},
				FH: function() {
					return h
				},
				ID: function() {
					return H
				},
				Ko: function() {
					return Y
				},
				Le: function() {
					return Z
				},
				Ly: function() {
					return Q
				},
				M3: function() {
					return ze
				},
				N8: function() {
					return Pe
				},
				NY: function() {
					return K
				},
				Ns: function() {
					return le
				},
				Ox: function() {
					return Ye
				},
				P4: function() {
					return T
				},
				RO: function() {
					return ne
				},
				SX: function() {
					return re
				},
				Tr: function() {
					return Je
				},
				U: function() {
					return I
				},
				Ug: function() {
					return E
				},
				V6: function() {
					return Ue
				},
				WR: function() {
					return Ve
				},
				Xg: function() {
					return f
				},
				ZB: function() {
					return ke
				},
				_y: function() {
					return oe
				},
				cU: function() {
					return ae
				},
				cg: function() {
					return Ce
				},
				d2: function() {
					return ce
				},
				il: function() {
					return pe
				},
				jN: function() {
					return L
				},
				jg: function() {
					return P
				},
				kC: function() {
					return b
				},
				kf: function() {
					return je
				},
				ko: function() {
					return ve
				},
				mK: function() {
					return Fe
				},
				nA: function() {
					return l
				},
				oY: function() {
					return S
				},
				qM: function() {
					return fe
				},
				rq: function() {
					return k
				},
				tS: function() {
					return C
				},
				tU: function() {
					return $
				},
				vB: function() {
					return He
				},
				vM: function() {
					return G
				},
				wH: function() {
					return N
				},
				wn: function() {
					return Me
				},
				xU: function() {
					return V
				},
				xw: function() {
					return Le
				},
				z5: function() {
					return U
				},
				zO: function() {
					return de
				},
				zW: function() {
					return Ae
				},
				zh: function() {
					return ee
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				s = t("../../../../node_modules/lodash/get.js"),
				p = t.n(s),
				c = t("../../../../node_modules/moment/moment.js"),
				m = t.n(c),
				i = t("../react/common/constants/billing/index.ts");

			function d(z) {
				for (var te = 1; te < arguments.length; te++) {
					var he = arguments[te] != null ? Object(arguments[te]) : {},
						De = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && De.push.apply(De, Object.getOwnPropertySymbols(he).filter(function(Ne) {
						return Object.getOwnPropertyDescriptor(he, Ne).enumerable
					})), De.forEach(function(Ne) {
						y(z, Ne, he[Ne])
					})
				}
				return z
			}

			function y(z, te, he) {
				return te = n(te), te in z ? Object.defineProperty(z, te, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[te] = he, z
			}

			function n(z) {
				var te = r(z, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function r(z, te) {
				if (typeof z != "object" || z === null) return z;
				var he = z[Symbol.toPrimitive];
				if (he !== void 0) {
					var De = he.call(z, te || "default");
					if (typeof De != "object") return De;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(z)
			}
			const a = (0, o.P1)("zone", z => z.zone),
				u = z => {
					var te;
					return (te = z.zoneVersioning) === null || te === void 0 ? void 0 : te.zoneVersionSelector
				},
				l = (0, e.P1)(a, u, (z, te) => {
					var he, De, Ne;
					let Ke;
					if (Array.isArray(z) && z.length === 1 ? Ke = z[0] : z && !Array.isArray(z) && (Ke = z), !Ke) return;
					const Ze = !!(te == null ? void 0 : te.enabled);
					return d({}, Ke, Ke.name && {
						name: Ze ? te.rootZoneName : Ke.name
					}, {
						versioning: {
							enabled: Ze,
							isRoot: !((he = Ke.name) === null || he === void 0 ? void 0 : he.endsWith(".config.cfdata.org")),
							version: Ze ? te.selectedVersion : 0,
							rootZoneId: Ze ? te.rootZoneId : (De = (Ne = Ke) === null || Ne === void 0 ? void 0 : Ne.id) !== null && De !== void 0 ? De : ""
						}
					})
				}),
				f = z => z.zone,
				_ = (0, e.P1)(l, f, (z, te) => ({
					data: z,
					meta: te
				})),
				O = z => {
					var te, he;
					return (te = (he = l(z)) === null || he === void 0 ? void 0 : he.id) !== null && te !== void 0 ? te : ""
				},
				I = z => z.zones,
				h = z => z.zonesRoot,
				N = z => z.zonesAccount,
				E = (0, o.P1)("zones", I),
				C = (0, o.P1)("zonesRoot", h),
				R = (0, o.P1)("zonesAccount", N);

			function b(z) {
				const te = l(z);
				return te ? te.created_on : null
			}

			function M(z, te, he) {
				const De = b(z);
				if (!De) return;
				const Ne = m().duration(te, he),
					Ke = new Date(De),
					Ze = new Date(new Date().getTime() - Ne.asMilliseconds());
				return Ke.getTime() > Ze.getTime()
			}

			function T(z) {
				const te = l(z);
				return te ? te.status : null
			}

			function S(z) {
				const te = l(z);
				return te ? te.type : null
			}

			function L(z) {
				return z.plan_pending ? z.plan_pending : z.plan
			}

			function G(z) {
				const te = l(z);
				if (!te) return;
				const he = L(te);
				return he && he.legacy_id
			}

			function $(z, te) {
				const he = L(z);
				return !!he && i.Gs.indexOf(he.legacy_id) >= i.Gs.indexOf(te)
			}

			function V(z) {
				return !!z && z.status === "initializing"
			}

			function ce(z) {
				return !!z && z.status === "pending"
			}

			function ee(z) {
				return !!z && z.status === "active"
			}

			function J(z, te) {
				if (!z) return !1;
				const he = L(z);
				return !!he && he.legacy_id === te
			}

			function ve(z) {
				return J(z, "enterprise")
			}
			const ne = z => ve(l(z));

			function U(z) {
				return J(z, "business")
			}
			const H = z => U(l(z));

			function oe(z) {
				return J(z, "pro")
			}

			function le(z) {
				return J(z, "free")
			}
			const pe = z => le(l(z));

			function Q(z) {
				return !ve(z)
			}

			function A(z) {
				return z && z.owner
			}

			function P(z, te) {
				const he = A(te);
				return !!he && he.type === "user" && he.id === z.id
			}

			function k(z) {
				const te = l(z);
				return !!te && te.type === "partial"
			}

			function K(z) {
				const te = l(z);
				return !!te && te.type === "secondary"
			}

			function re(z) {
				const te = l(z);
				return te && k(z) && te.host
			}
			const Ce = z => {
					var te;
					const he = l(z);
					return !!(he == null ? void 0 : he.host) && !!((te = he.plan) === null || te === void 0 ? void 0 : te.externally_managed)
				},
				Ie = z => {
					const te = E(z);
					return te && te.some(ve)
				},
				Me = (z, te) => {
					const he = l(z);
					return he && he.betas ? he.betas.includes(te) : !1
				},
				ke = (z, ...te) => p()(z, ["zoneFlags", "data", ...te]),
				Z = (z, ...te) => p()(z, ["accountFlags", "data", ...te]),
				fe = z => z.accountFlags.isRequesting,
				Le = z => z.zoneFlags.isRequesting,
				Je = (z, ...te) => p()(z, ["zoneFlagsChanges", "data", ...te]),
				Y = z => z.zoneFlagsChanges.isRequesting,
				ae = z => z.zoneFlags && z.zoneFlags.data,
				de = z => z.zoneFlags,
				ye = (0, e.P1)(ae, de, (z, te) => ({
					data: z,
					meta: te
				})),
				Pe = (0, o.P1)("abuseUrls", z => z.overview.abuseUrls),
				ze = z => {
					const te = l(z);
					return te ? `/${te.account.id}/${te.name}` : null
				},
				Ue = z => z.zoneMarketingCampaigns,
				je = z => z.overview.zoneBlocks.data,
				Ae = z => z.overview.zoneBlocks.isRequesting,
				Re = z => z.overview.zoneBlocks.hasData,
				Fe = z => {
					var te, he;
					return (z == null || (te = z.overview.zoneBlocks) === null || te === void 0 || (he = te.paginationData) === null || he === void 0 ? void 0 : he.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				He = z => z.overview.zoneBlocksReview.isRequesting,
				Ye = z => z.overview.zoneHold,
				Ve = (0, o.P1)("zoneHold", Ye)
		},
		"../react/common/utils/formatDate.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			v.Z = (o, s, p = !1) => (0, e.p6)(o, s, p)
		},
		"../react/common/utils/hasRole.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				n: function() {
					return o
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const o = (s, p) => {
				const {
					roles: c = []
				} = (0, e.uF)(s) || {};
				return p.some(m => c.includes(m))
			}
		},
		"../react/common/utils/isGuards.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
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
					return c
				}
			});
			var e = t("../react/common/constants/index.ts"),
				o = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const s = i => i ? ["page", "per_page", "count", "total_count"].every(y => y in i && i[y]) : !1,
				p = (i = "") => e.Dy.includes(i.toLowerCase()),
				c = i => i !== null && typeof i == "object" && "name" in i && "size" in i && "type" in i && typeof i.slice == "function",
				m = i => (0, o.Z)(i)
		},
		"../react/common/utils/useQueryCache.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				o: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(i) {
				for (var d = 1; d < arguments.length; d++) {
					var y = arguments[d] != null ? Object(arguments[d]) : {},
						n = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(y).filter(function(r) {
						return Object.getOwnPropertyDescriptor(y, r).enumerable
					})), n.forEach(function(r) {
						s(i, r, y[r])
					})
				}
				return i
			}

			function s(i, d, y) {
				return d = p(d), d in i ? Object.defineProperty(i, d, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = y, i
			}

			function p(i) {
				var d = c(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function c(i, d) {
				if (typeof i != "object" || i === null) return i;
				var y = i[Symbol.toPrimitive];
				if (y !== void 0) {
					var n = y.call(i, d || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			const m = i => {
				const d = (0, e.useQueryClient)(),
					y = h => {
						var N;
						return d.getQueriesData((N = h) !== null && N !== void 0 ? N : i)
					},
					n = h => {
						var N;
						return d.getQueryData((N = h) !== null && N !== void 0 ? N : i)
					},
					r = h => {
						var N;
						return d.getQueriesData({
							queryKey: (N = h) !== null && N !== void 0 ? N : i,
							stale: !0
						})
					},
					a = (h, N) => {
						var E;
						d.setQueryData((E = N) !== null && E !== void 0 ? E : i, h)
					},
					u = async h => {
						var N;
						await d.refetchQueries((N = h) !== null && N !== void 0 ? N : i)
					}, l = async (h, N) => {
						var E, C;
						await d.invalidateQueries((E = h) !== null && E !== void 0 ? E : i, o({
							refetchActive: !1
						}, (C = N) !== null && C !== void 0 ? C : {}))
					}, f = async (h, N) => {
						const E = h || (C => {
							var R;
							return (C == null || (R = C.queryKey) === null || R === void 0 ? void 0 : R[0]) === i
						});
						await d.invalidateQueries(o({
							predicate: E,
							refetchActive: !1,
							refetchInactive: !1
						}, N))
					};
				return {
					refetch: u,
					cancelData: async () => {
						await d.cancelQueries(i)
					},
					invalidate: l,
					setData: a,
					getDataStale: r,
					getData: y,
					prefetchQuery: (h, N) => {
						var E;
						return d.prefetchQuery((E = N) !== null && E !== void 0 ? E : i, h)
					},
					getQueryData: n,
					predicateInvalidate: f,
					batchInvalidate: async ({
						queryKeysToInvalidate: h = [],
						queryKeysToPredicateInvalidate: N = [],
						refetchActive: E = !1,
						refetchInactive: C = !1
					}) => {
						const R = h.map(M => l(M)),
							b = N.map(M => f(T => {
								var S;
								return (T == null || (S = T.queryKey) === null || S === void 0 ? void 0 : S[0]) === M
							}, {
								refetchActive: E,
								refetchInactive: C
							}));
						await Promise.all([...R, ...b])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(j, v, t) {
			"use strict";
			t.d(v, {
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
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = y => /^https?:\/\/(.*)/.test(y),
				s = y => e.default.hostname.test(y),
				p = y => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(y),
				c = y => /^[!-~]+$/.test(y),
				m = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				i = y => m.test(y),
				d = y => !!y && !!y.length && /^[ -~]+$/.test(y)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(j, v, t) {
			"use strict";
			t.d(v, {
				DZ: function() {
					return p
				},
				GA: function() {
					return y
				},
				hT: function() {
					return m
				},
				p6: function() {
					return s
				},
				qc: function() {
					return c
				},
				w9: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e);
			const s = a => o().utc(a).format("YYYY-MM-DD"),
				p = a => o().utc(a).format(),
				c = a => o().utc(a).startOf("minute").format(),
				m = a => new Date(a),
				i = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				d = a => {
					const u = a / 60 / 60 / 1e3;
					return i[Object.keys(i).sort((l, f) => f - l).find(l => u >= l)]
				},
				y = (a, u = l => l.avg && l.avg.sampleInterval ? l.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((l, f) => l + u(f), 0) / a.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = a => n[a]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Jz: function() {
					return y
				},
				OK: function() {
					return c
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
					return n
				}
			});

			function e(l) {
				for (var f = 1; f < arguments.length; f++) {
					var _ = arguments[f] != null ? Object(arguments[f]) : {},
						O = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(_).filter(function(I) {
						return Object.getOwnPropertyDescriptor(_, I).enumerable
					})), O.forEach(function(I) {
						o(l, I, _[I])
					})
				}
				return l
			}

			function o(l, f, _) {
				return f = s(f), f in l ? Object.defineProperty(l, f, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[f] = _, l
			}

			function s(l) {
				var f = p(l, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function p(l, f) {
				if (typeof l != "object" || l === null) return l;
				var _ = l[Symbol.toPrimitive];
				if (_ !== void 0) {
					var O = _.call(l, f || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(l)
			}
			let c = function(l) {
					return l.Sending = "sending", l.Success = "success", l.Failed = "failed", l.Latent = "latent", l
				}({}),
				m = function(l) {
					return l[l.Success = 200] = "Success", l[l.BadRequest = 400] = "BadRequest", l
				}({});
			const i = {
					status: c.Latent,
					statusCode: void 0
				},
				d = {
					status: c.Sending
				},
				y = {
					status: c.Success,
					statusCode: m.Success
				},
				n = {
					status: c.Failed,
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
				u = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
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
					return a
				},
				t$: function() {
					return l
				}
			});
			var e = t("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(_) {
				for (var O = 1; O < arguments.length; O++) {
					var I = arguments[O] != null ? Object(arguments[O]) : {},
						h = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(I).filter(function(N) {
						return Object.getOwnPropertyDescriptor(I, N).enumerable
					})), h.forEach(function(N) {
						s(_, N, I[N])
					})
				}
				return _
			}

			function s(_, O, I) {
				return O = p(O), O in _ ? Object.defineProperty(_, O, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[O] = I, _
			}

			function p(_) {
				var O = c(_, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function c(_, O) {
				if (typeof _ != "object" || _ === null) return _;
				var I = _[Symbol.toPrimitive];
				if (I !== void 0) {
					var h = I.call(_, O || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(_)
			}
			const m = _ => _.test(window.location.hostname),
				i = () => m(e.j9),
				d = () => m(MARKETPLACE_LOCAL_URL_REGEXP),
				y = (_, O) => {
					const I = random(0, 1) ? -1 : 1;
					return _.points === O.points || _.points >= APP_POINTS_THRESHOLD && O.points >= APP_POINTS_THRESHOLD ? I : _.points < 0 || O.points < 0 || _.points >= APP_POINTS_THRESHOLD || O.points >= APP_POINTS_THRESHOLD ? O.points - _.points : I
				},
				n = (_, O, I) => {
					const h = get(O, I),
						N = get(_, I);
					return h && !isEqual(h, N)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (_, O) => O.map(I => _.find(h => h.id === I)),
						addAppVersionInfo: (_, O) => o({}, O, {
							currentVersion: O.versions.find(I => I.tag === _.versionTag),
							latestVersion: O.versions.find(I => I.tag === O.infoVersion)
						}),
						addCurrentSiteInstall: (_, O) => o({}, O, {
							currentSiteInstall: _.find(I => I.appId === O.id)
						})
					}
				},
				a = (_, O, I) => o({}, _, O, I ? {
					value: I
				} : {}),
				u = _ => _.map(O => O.status),
				l = _ => _.apps ? _.apps : _,
				f = _ => {
					let O = ["by-cloudflare"];
					return _.filter(I => !O.includes(I.id) && I.visible).sort((I, h) => I.points < h.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(j, v, t) {
			"use strict";
			t.r(v), t.d(v, {
				categorySlugTranslationKey: function() {
					return c
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
			var e = t("../../../common/intl/intl-core/src/prepare.ts");
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

			function c(m) {
				const i = m.replace(/-/g, "_");
				return Object.keys(o).includes(i) ? i : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				L: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/url-join/lib/url-join.js"),
				o = t.n(e),
				s = t("../../../../node_modules/lodash-es/defaults.js"),
				p = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(u) {
				for (var l = 1; l < arguments.length; l++) {
					var f = arguments[l] != null ? Object(arguments[l]) : {},
						_ = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(f).filter(function(O) {
						return Object.getOwnPropertyDescriptor(f, O).enumerable
					})), _.forEach(function(O) {
						d(u, O, f[O])
					})
				}
				return u
			}

			function m(u, l) {
				if (u == null) return {};
				var f = i(u, l),
					_, O;
				if (Object.getOwnPropertySymbols) {
					var I = Object.getOwnPropertySymbols(u);
					for (O = 0; O < I.length; O++) _ = I[O], !(l.indexOf(_) >= 0) && (!Object.prototype.propertyIsEnumerable.call(u, _) || (f[_] = u[_]))
				}
				return f
			}

			function i(u, l) {
				if (u == null) return {};
				var f = {},
					_ = Object.keys(u),
					O, I;
				for (I = 0; I < _.length; I++) O = _[I], !(l.indexOf(O) >= 0) && (f[O] = u[O]);
				return f
			}

			function d(u, l, f) {
				return l = y(l), l in u ? Object.defineProperty(u, l, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[l] = f, u
			}

			function y(u) {
				var l = n(u, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function n(u, l) {
				if (typeof u != "object" || u === null) return u;
				var f = u[Symbol.toPrimitive];
				if (f !== void 0) {
					var _ = f.call(u, l || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(u)
			}
			class r {
				constructor(l) {
					d(this, "token", void 0), d(this, "options", void 0), d(this, "setAuthHeader", f => {
						this.token = f
					}), this.token = "", this.options = (0, s.Z)(l, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(l = "GET", f, _ = {}) {
					const {
						body: O
					} = _, I = m(_, ["body"]);
					return fetch(o()(this.options.baseUrl, f), c({
						method: l
					}, I, O ? {
						body: JSON.stringify(O)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(c({
							Accept: "application/json, text/plain, */*"
						}, _.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(l, f = {}) {
					const _ = await this.request("GET", l, f);
					return this.parseJSONResponse(_)
				}
				async postJSON(l, f = {}) {
					const _ = await this.request("POST", l, c({}, f, {
						headers: c({}, f.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(_)
				}
				parseJSONResponse(l) {
					return l.json()
				}
			}
			d(r, "defaults", {
				baseUrl: (0, p.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const a = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				JX: function() {
					return y
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
				s = t("../../../../node_modules/query-string/query-string.js"),
				p = t.n(s),
				c = t("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				m = t("../react/pages/apps/marketplace/requests/Requester.ts"),
				i = t("../react/pages/apps/marketplace/libraries/resource.ts");

			function* d(l, f, _, O) {
				const I = (0, e.Z)(f),
					[h, N, E] = [`get${I}Sending`, `get${I}Success`, `get${I}Failed`];
				try {
					yield(0, c.gz)(l[h]());
					const C = yield(0, c.RE)(a, _);
					let R = C;
					if (R.error) {
						yield(0, c.gz)(l[E]());
						return
					}
					return O && (R = yield O(C)), yield(0, c.gz)(l[N](R)), R
				} catch {
					yield(0, c.gz)(l[E]())
				}
			}

			function* y(l, f, _, O) {
				const I = (0, e.Z)(f),
					h = `get${I}Sending`,
					N = `get${I}Success`,
					E = `get${I}Failed`;
				try {
					yield(0, c.gz)(l[h]());
					const C = yield(0, c.RE)(u, {
						url: _,
						data: O
					});
					return yield(0, c.gz)(l[N](C)), C
				} catch {
					yield(0, c.gz)(l[E]())
				}
			}
			const n = l => (0, o.Z)(l) ? "" : `?${s.stringify(l)}`,
				r = {
					app: new i.c({
						name: "app",
						url: (l, f) => `apps/${l}${n(f)}`
					}),
					apps: new i.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new i.c({
							name: "installs",
							url: l => `sites/${l}/installs`
						}),
						delete: new i.c({
							name: "installs",
							url: l => `installs/${l}`
						})
					},
					categories: new i.c({
						name: "categories",
						url: (l = {}) => "categories" + n(l)
					}),
					metadata: {
						get: new i.c({
							name: "metadata",
							url: l => `sites/${l}/metadata`
						}),
						post: new i.c({
							name: "metadata",
							url: l => `sites/${l}/metadata`
						})
					},
					ratings: {
						default: new i.c({
							name: "ratings",
							url: (l = {}) => "ratings" + n(l)
						}),
						delete: new i.c({
							name: "ratings",
							url: l => `ratings/${l}`
						})
					},
					recommendedApps: new i.c({
						name: "recommendedApps",
						url: (l = {}) => "apps/recommend" + n(l)
					}),
					developedApps: new i.c({
						name: "developedApps",
						url: l => `user/${l}/apps`
					})
				},
				a = async l => m.L.fetchJSON(l), u = async l => {
					const {
						url: f,
						data: _
					} = l;
					return m.L.postJSON(f, {
						body: _
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(j, v, t) {
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
					return y
				}
			});
			var e = t("../react/pages/apps/marketplace/config/initialState.ts");

			function o(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(a).filter(function(l) {
						return Object.getOwnPropertyDescriptor(a, l).enumerable
					})), u.forEach(function(l) {
						s(n, l, a[l])
					})
				}
				return n
			}

			function s(n, r, a) {
				return r = p(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function p(n) {
				var r = c(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function c(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var u = a.call(n, r || "default");
					if (typeof u != "object") return u;
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

			function y(n = e.fD, r) {
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
							zone: u
						} = r;
						return o({}, n, {
							zone: u
						});
					case i.SetToken:
						const {
							token: l
						} = r;
						return o({}, n, {
							token: l
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
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Nw: function() {
					return y
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

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var u = arguments[a] != null ? Object(arguments[a]) : {},
						l = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(u).filter(function(f) {
						return Object.getOwnPropertyDescriptor(u, f).enumerable
					})), l.forEach(function(f) {
						p(r, f, u[f])
					})
				}
				return r
			}

			function p(r, a, u) {
				return a = c(a), a in r ? Object.defineProperty(r, a, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = u, r
			}

			function c(r) {
				var a = m(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(r, a) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var l = u.call(r, a || "default");
					if (typeof l != "object") return l;
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
			const y = {
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
				getAppInfoAssetsSaga: (r, a, u) => ({
					type: d.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: a,
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
				getRecommendedAppsSaga: (r, a, u) => ({
					type: d.GetRecommendedAppsSaga,
					appsList: r,
					installsList: a,
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

			function n(r = e.w6, a) {
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
		"../react/pages/caching/tracking.tsx": function(j, v, t) {
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
		"../react/pages/d1/routes.ts": function(j, v, t) {
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
		"../react/pages/dns/dns-records/tracking.ts": function(j, v, t) {
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
		"../react/pages/email/types.ts": function(j, v, t) {
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
			let s = function(c) {
				return c[c.Verified = 0] = "Verified", c[c.Pending = 1] = "Pending", c[c.Missing = 2] = "Missing", c[c.WorkerNotFound = 3] = "WorkerNotFound", c[c.Unknown = 4] = "Unknown", c[c.Loading = 5] = "Loading", c
			}({});
			const p = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/config.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				jk: function() {
					return O
				},
				w8: function() {
					return I
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				s = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				p = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function c(h) {
				for (var N = 1; N < arguments.length; N++) {
					var E = arguments[N] != null ? Object(arguments[N]) : {},
						C = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(E).filter(function(R) {
						return Object.getOwnPropertyDescriptor(E, R).enumerable
					})), C.forEach(function(R) {
						m(h, R, E[R])
					})
				}
				return h
			}

			function m(h, N, E) {
				return N = i(N), N in h ? Object.defineProperty(h, N, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[N] = E, h
			}

			function i(h) {
				var N = d(h, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function d(h, N) {
				if (typeof h != "object" || h === null) return h;
				var E = h[Symbol.toPrimitive];
				if (E !== void 0) {
					var C = E.call(h, N || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(h)
			}
			const y = "Notifications",
				n = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${a}/destinations`,
				l = (0, e.BC)`${a}/create`,
				f = (0, e.BC)`${l}/${"alertType"}`,
				_ = (0, e.BC)`${a}/edit/${"alertId"}`,
				O = c({
					account: r,
					alerts: a,
					destinations: u,
					createAlert: l,
					createAlertWithSelection: f,
					editAlert: _
				}, o._j, s._j),
				I = c({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, p.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				_j: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				s = (0, e.BC)`${o}/pagerduty/connect`,
				p = (0, e.BC)`${o}/pagerduty/register`,
				c = (0, e.BC)`${o}/pagerduty`,
				m = {
					pagerDutyConnect: s,
					pagerDutyRegister: p,
					pagerDutyList: c
				};
			var i = null
		},
		"../react/pages/home/alerts/tracking.ts": function(j, v, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(j, v, t) {
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
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(j, v, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				AA: function() {
					return re
				},
				AN: function() {
					return be
				},
				AY: function() {
					return _e
				},
				Am: function() {
					return I
				},
				B2: function() {
					return oe
				},
				BB: function() {
					return T
				},
				BF: function() {
					return Ke
				},
				BQ: function() {
					return X
				},
				E8: function() {
					return x
				},
				Fl: function() {
					return $e
				},
				Fu: function() {
					return G
				},
				Gc: function() {
					return Qe
				},
				Hc: function() {
					return Nt
				},
				IO: function() {
					return ie
				},
				JK: function() {
					return Pe
				},
				K: function() {
					return R
				},
				LI: function() {
					return F
				},
				LX: function() {
					return De
				},
				L_: function() {
					return Ae
				},
				Ly: function() {
					return xt
				},
				MR: function() {
					return pe
				},
				Mj: function() {
					return A
				},
				NB: function() {
					return jt
				},
				Oe: function() {
					return Ht
				},
				Or: function() {
					return k
				},
				P5: function() {
					return $t
				},
				PE: function() {
					return Je
				},
				Pd: function() {
					return rt
				},
				Pk: function() {
					return ae
				},
				Pp: function() {
					return He
				},
				Q1: function() {
					return L
				},
				Qr: function() {
					return Ne
				},
				Qv: function() {
					return Y
				},
				Rp: function() {
					return Ft
				},
				S7: function() {
					return ht
				},
				Sh: function() {
					return et
				},
				Sl: function() {
					return Gt
				},
				TZ: function() {
					return K
				},
				Tg: function() {
					return ze
				},
				Tp: function() {
					return Te
				},
				Uy: function() {
					return Rt
				},
				Vw: function() {
					return V
				},
				W3: function() {
					return z
				},
				WR: function() {
					return ge
				},
				WX: function() {
					return ke
				},
				XF: function() {
					return xe
				},
				Xb: function() {
					return Ce
				},
				ZB: function() {
					return S
				},
				Zs: function() {
					return je
				},
				_f: function() {
					return Ze
				},
				_k: function() {
					return We
				},
				b4: function() {
					return Me
				},
				c2: function() {
					return le
				},
				cE: function() {
					return wt
				},
				dh: function() {
					return Fe
				},
				fE: function() {
					return Re
				},
				g7: function() {
					return Le
				},
				hO: function() {
					return Ve
				},
				hV: function() {
					return Mt
				},
				hk: function() {
					return h
				},
				hr: function() {
					return Ie
				},
				it: function() {
					return Ye
				},
				j3: function() {
					return Wt
				},
				jN: function() {
					return ye
				},
				jo: function() {
					return Kt
				},
				k3: function() {
					return zt
				},
				m8: function() {
					return ne
				},
				nm: function() {
					return ot
				},
				oW: function() {
					return me
				},
				pH: function() {
					return U
				},
				pi: function() {
					return ve
				},
				r4: function() {
					return Zt
				},
				rI: function() {
					return Q
				},
				s7: function() {
					return at
				},
				sO: function() {
					return ut
				},
				sg: function() {
					return Ge
				},
				tB: function() {
					return _
				},
				tN: function() {
					return fe
				},
				u_: function() {
					return Vt
				},
				vV: function() {
					return lt
				},
				vc: function() {
					return de
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				s = t("../../../../node_modules/moment/moment.js"),
				p = t.n(s),
				c = t("../../../common/util/types/src/api/domain.ts"),
				m = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				i = t("../react/utils/translator.tsx"),
				d = t("../react/utils/url.ts"),
				y = t("../react/pages/home/domain-registration/config.ts"),
				n = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = t("../react/pages/home/domain-registration/types.ts");

			function a(g) {
				for (var D = 1; D < arguments.length; D++) {
					var ue = arguments[D] != null ? Object(arguments[D]) : {},
						Se = Object.keys(ue);
					typeof Object.getOwnPropertySymbols == "function" && Se.push.apply(Se, Object.getOwnPropertySymbols(ue).filter(function(Xe) {
						return Object.getOwnPropertyDescriptor(ue, Xe).enumerable
					})), Se.forEach(function(Xe) {
						u(g, Xe, ue[Xe])
					})
				}
				return g
			}

			function u(g, D, ue) {
				return D = l(D), D in g ? Object.defineProperty(g, D, {
					value: ue,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[D] = ue, g
			}

			function l(g) {
				var D = f(g, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function f(g, D) {
				if (typeof g != "object" || g === null) return g;
				var ue = g[Symbol.toPrimitive];
				if (ue !== void 0) {
					var Se = ue.call(g, D || "default");
					if (typeof Se != "object") return Se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(g)
			}

			function _(g) {
				return g.filter(D => D.isSelected).reduce((D, {
					fees: ue,
					isZoneEntitlementPresent: Se
				}) => Se || !(0, e.isNumber)(ue == null ? void 0 : ue.transfer_fee) ? D : D + (ue == null ? void 0 : ue.transfer_fee), 0)
			}

			function O(g) {
				return g.filter(D => D.registrar.toLowerCase() === "godaddy")
			}
			const I = "MMM D, YYYY";

			function h(g, D, ue, Se) {
				var Xe, dt, ct, Tt, vt, yt, bt, At, Ot, It, Pt, St;
				const tt = g[D.name];
				return a({
					name: D.name,
					zone: tt,
					entitlements: ue,
					registryCheck: Se,
					nameservers: D.name_servers,
					isAvailable: D.available,
					lastKnownStatus: D.last_known_status,
					authCode: D.auth_code,
					isEnterpriseZone: (tt == null || (Xe = tt.plan) === null || Xe === void 0 ? void 0 : Xe.legacy_id) === "enterprise",
					isActiveZone: (tt == null ? void 0 : tt.status) === "active",
					corResponsesPending: D.cor_responses_pending,
					isCorLocked: D.cor_locked,
					corLockedUntil: D.cor_locked_until ? p()(D.cor_locked_until).format(I) : null,
					isFullZone: (tt == null ? void 0 : tt.type) == r.xd.Full,
					isLocked: D.locked,
					registrar: D.current_registrar || y.JM,
					zoneId: tt == null ? void 0 : tt.id,
					currentExpiration: p()(D.expires_at).format(I),
					newExpiration: p()(D.expires_at).add(1, "year").format(I),
					lastEntitledAt: D.last_entitled_at ? new Date(D.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ue) && !!ue.find(kt => kt.id === y.g5 && kt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: D.transfer_in && C(D.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: D.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: D.transfer_in,
					transferOut: D.transfer_out,
					autoRenew: D.auto_renew === !0,
					lastTransferredAt: D.last_transferred_at,
					createdAt: D.created_at,
					paymentExpiresAt: p()(D.payment_expires_at).isValid() ? p()(D.payment_expires_at) : p()(D.expires_at).isValid() ? p()(D.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (dt = D.contacts) === null || dt === void 0 || (ct = dt.administrator) === null || ct === void 0 ? void 0 : ct.id,
						[r.l2.Billing]: (Tt = D.contacts) === null || Tt === void 0 || (vt = Tt.billing) === null || vt === void 0 ? void 0 : vt.id,
						[r.l2.Registrant]: (yt = D.contacts) === null || yt === void 0 || (bt = yt.registrant) === null || bt === void 0 ? void 0 : bt.id,
						[r.l2.Technical]: (At = D.contacts) === null || At === void 0 || (Ot = At.technical) === null || Ot === void 0 ? void 0 : Ot.id
					},
					landing: D.landing,
					privacy: D.privacy,
					whois: D.whois,
					emailVerified: D.email_verified,
					materialChanges: b(D.material_changes),
					corChanges: D.cor_changes ? T(Object.assign(a({}, E), D.cor_changes)) : {},
					registryStatuses: D.registry_statuses ? D.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (It = D.domain_protection_services) === null || It === void 0 ? void 0 : It.status
					},
					deletion: {
						isDeletable: D == null || (Pt = D.deletion) === null || Pt === void 0 ? void 0 : Pt.is_deletable
					},
					premiumType: D == null ? void 0 : D.premium_type,
					fees: D == null ? void 0 : D.fees
				}, D.domain_move && {
					domainMove: {
						ineligibilityReasons: (St = D.domain_move) === null || St === void 0 ? void 0 : St.ineligibility_reasons
					}
				}, D.actionable_metadata && {
					actionableMetadata: N(D.actionable_metadata)
				}, D.policies && {
					policies: a({}, D.policies.suspension && {
						suspension: {
							parked: D.policies.suspension.parked,
							parkingReason: D.policies.suspension.parking_reason,
							paymentExpired: D.policies.suspension.payment_expired
						}
					})
				})
			}

			function N(g) {
				return g.map(D => ({
					accountContext: D.account_context,
					createdAt: D.created_at,
					expiresAt: D.expires_at,
					sentAt: D.sent_at,
					status: D.status,
					type: D.type
				}))
			}
			const E = {
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

			function R(g) {
				let D = g.extensions;
				(D == null ? void 0 : D.application_purpose) && (D == null ? void 0 : D.nexus_category) && (g.extensions = {
					nexusCategory: D.nexus_category,
					applicationPurpose: D.application_purpose
				});
				let ue = a({}, typeof g.id == "string" ? {
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
				return Ue(ue)
			}

			function b(g) {
				let D = [];
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
				for (const Se in g) {
					const Xe = g[Se],
						dt = ue[Xe];
					D.push(dt)
				}
				return D
			}
			const M = g => {
				if (!g) return null;
				let D = g;
				return g.includes("C31") && (D = "C31"), g.includes("C32") && (D = "C32"), D
			};

			function T(g) {
				return a({}, typeof g.id == "string" ? {
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

			function S(g = {}) {
				const D = {
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
					transferConditions: a({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, g.transferConditions || {}),
					transferIn: a({
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
				return Object.assign(D, g)
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

			function G(g) {
				const D = y.Py.concat(y.ui).reduce((ue, Se) => a({}, ue, {
					[Se]: []
				}), {});
				return g.forEach(ue => {
					let Se = $(ue.registrar);
					Se in D || (Se = y.ui), Ge(ue.name) && (Se = "uk"), D[Se].push(ue)
				}), Object.keys(D).sort((ue, Se) => ue.localeCompare(Se)).map(ue => ({
					registrar: ue,
					domains: D[ue]
				})).filter(ue => ue.domains.length > 0)
			}

			function $(g) {
				return g == null ? void 0 : g.toLowerCase().replace(/\s|,|\./g, "")
			}

			function V(g) {
				if (!g || !g.registrar) return "unknown";
				if (Ge(g.name)) return "uk";
				const D = $(g.registrar);
				return D in y.gM ? D : "unknown"
			}
			const ce = [];

			function ee(g) {
				return ce.some(D => g.endsWith("." + D))
			}

			function J(g) {
				return !g.isEnterpriseZone || !Array.isArray(g.entitlements) ? !1 : !!g.entitlements.find(({
					id: D,
					allocation: ue
				}) => D === y.g5 && ue.value === !0)
			}

			function ve(g) {
				var D;
				const ue = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let Se = !1,
					Xe = null;
				return (D = g.registryStatuses) === null || D === void 0 || D.some(dt => {
					ue.includes(dt) && (Xe = dt, Se = !0)
				}), [Se, Xe]
			}

			function ne(g, D = !1) {
				if (!g) return [!1, n.keys.cannot_transfer_default];
				if (g.zone.status !== "active") return [!1, n.keys.cannot_transfer_zone_not_active];
				if (!g.isFullZone && !J(g)) return [!1, n.keys.cannot_transfer_zone_not_eligible];
				if (g.registrar === "Cloudflare") return [!1, n.keys.cannot_transfer_domain_on_cf];
				if (g.isAvailable) return [!1, n.keys.cannot_transfer_domain_available];
				if (!g.transferConditions) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (!D && Rt(g == null ? void 0 : g.premiumType)) return [!1, n.keys.cannot_transfer_domain_premium];
				if (U(g)) return [!1, n.keys.cannot_transfer_domain_transfer_in_progress];
				let ue;
				for (ue in g.transferConditions)
					if (ue !== "not_premium" && !g.transferConditions[ue]) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (ee(g.name)) return [!1, n.keys.cannot_transfer_domain_tld_not_supported];
				const [Se, Xe] = ve(g);
				return Se && Xe ? [!1, n.keys.cannot_transfer_domain_registry_status[Xe]] : [!0, ""]
			}

			function U(g) {
				var D, ue;
				return !!g.transferIn && !((D = g.transferConditions) === null || D === void 0 ? void 0 : D.not_started) && !!(Ge(g.name) || ((ue = g.registryStatuses) === null || ue === void 0 ? void 0 : ue.includes(r.rj.PENDING_TRANSFER)))
			}

			function H(g) {
				return !!g.registrar && !!g.currentExpiration
			}

			function oe(g, D = !1) {
				const [ue] = ne(g, D);
				return H(g) ? Z(g) ? r.M5.InProgressOrOnCF : ue ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function le(g) {
				return g.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(g.transferIn.enter_auth_code) || !1
			}

			function pe(g) {
				return g.registrar === "Cloudflare"
			}

			function Q(g) {
				return !!(g == null ? void 0 : g.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function A(g) {
				return !!(g == null ? void 0 : g.includes(r.rj.PENDING_TRANSFER))
			}
			const P = "Invalid date";

			function k(g) {
				return g.newExpiration === P ? "Unavailable" : g.newExpiration
			}

			function K(g) {
				return g.currentExpiration === P ? "Unavailable" : g.currentExpiration
			}

			function re(g) {
				return g.substring(g.indexOf("."))
			}

			function Ce(g = "") {
				return g.indexOf(".") !== -1 ? g.substring(0, g.indexOf(".")) : g
			}

			function Ie(g) {
				return g.map(D => D.name).map(D => re(D)).filter((D, ue, Se) => !Se.includes(D, ue + 1))
			}

			function Me(g) {
				if (y.no) return [!0, ""];
				if (!pe(g)) return [!1, r.ok.NotOnCF];
				if (g.isCorLocked) return [!1, g.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (g.lastTransferredAt) {
					const D = p()(g.lastTransferredAt),
						ue = p().duration(p()().diff(D)).as("days"),
						Se = Ge(g.name);
					if (ue < (Se ? 1 : 60)) return [!1, Se ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (g.createdAt) {
					const D = p()(g.createdAt);
					if (p().duration(p()().diff(D)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function ke(g) {
				return !!(y.Bc || g.transferOut)
			}

			function Z(g) {
				return Le(g) || pe(g)
			}

			function fe(g) {
				return !Le(g) && pe(g)
			}

			function Le(g) {
				return !g || g.lastKnownStatus === "pendingTransfer" || g.lastKnownStatus === "transferFOAPending" || !pe(g) && g.transferConditions && !g.transferConditions.not_started || !1
			}

			function Je(g) {
				return !(ee(g.name) || g.transferConditions && !g.transferConditions.supported_tld)
			}

			function Y(g) {
				return (g == null ? void 0 : g.includes("/")) ? !0 : g.split("").some(D => D.charCodeAt(0) > 123)
			}

			function ae(g) {
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

			function de(g) {
				return p()(g.paymentExpiresAt).isBefore(p()())
			}

			function ye(g) {
				return g.transferIn && g.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function Pe(g) {
				const D = ["CU", "KP", "IR", "SY"];
				return g.filter(ue => !D.includes(ue.code))
			}

			function ze(g) {
				if (!!g) return `${g.charAt(0).toUpperCase()}${g.slice(1)}${g.charAt(g.length-1)==="."?"":"."}`
			}

			function Ue(g) {
				const D = {};
				for (const [ue, Se] of Object.entries(g)) {
					if (Se && typeof Se == "string") {
						Object.assign(D, {
							[ue]: Se.trim()
						});
						continue
					}
					Object.assign(D, {
						[ue]: Se
					})
				}
				return D
			}

			function je(g) {
				return p()(g).add(40, "days")
			}

			function Ae(g) {
				const D = g.paymentExpiresAt || g.payment_expires_at,
					ue = je(D);
				return p()().isBetween(D, ue)
			}

			function Re(g) {
				var D;
				return !(g == null ? void 0 : g.registryStatuses) || !Array.isArray(g == null ? void 0 : g.registryStatuses) && !(0, e.isString)(g == null ? void 0 : g.registryStatuses) ? !1 : (D = g.registryStatuses) === null || D === void 0 ? void 0 : D.includes(r.rj.REDEMPTION_PERIOD)
			}

			function Fe(g) {
				var D;
				return !(g == null ? void 0 : g.registryStatuses) || !Array.isArray(g == null ? void 0 : g.registryStatuses) && !(0, e.isString)(g == null ? void 0 : g.registryStatuses) ? !1 : (D = g.registryStatuses) === null || D === void 0 ? void 0 : D.includes(r.rj.PENDING_DELETE)
			}

			function He(g) {
				return [".us"].includes(g)
			}

			function Ye(g) {
				return [".us"].includes(g)
			}

			function Ve(g) {
				switch (g) {
					case ".us":
						return he();
					default:
						return []
				}
			}

			function z(g) {
				switch (g) {
					case ".us":
						return te;
					default:
						return {}
				}
			}
			const te = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function he() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([g, D]) => ({
						value: g,
						label: D
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([g, D]) => ({
						value: g,
						label: D
					}))
				}]
			}

			function De(g, D, ue) {
				return D[D.length - 1][ue] === g[ue]
			}

			function Ne(g) {
				return Boolean(Object.keys(g).length === 0)
			}

			function Ke(g) {
				return p()().add(g, "year").format(I)
			}

			function Ze({
				accountName: g
			}) {
				var D;
				const ue = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((D = g.toLowerCase().match(ue)) === null || D === void 0 ? void 0 : D[0]) || ""
			}

			function lt(g) {
				return !!g.match(m.default.email)
			}

			function st(g) {
				return g === "Registration banned zone error"
			}

			function mt(g) {
				return g == null ? void 0 : g.startsWith("Quote error")
			}

			function gt(g) {
				return g == null ? void 0 : g.startsWith("Invalid acknowledgement")
			}

			function ut(g) {
				return g === (0, i.ZP)(n.keys.registration_checkout_trademark_notice_error_message)
			}

			function We(g) {
				return g === "DNS conflict"
			}

			function Te(g) {
				return g === c.W7.PENDING_UPDATE
			}

			function Qe(g) {
				return g ? Object.values(c.wR).filter(D => D !== c.wR.OFFBOARDED).includes(g) : !1
			}

			function at(g) {
				return g ? [c.wR.LOCKED, c.wR.ONBOARDED, c.wR.ONBOARDING_INITIATED, c.wR.PENDING_REGISTRY_LOCK, c.wR.PENDING_REGISTRY_UNLOCK, c.wR.PENDING_UNLOCK_APPROVAL].includes(g) : !1
			}

			function it(g) {
				return g ? c.wR.UNLOCKED === g : !1
			}

			function W(g) {
				return g ? c.wR.LOCKED === g : !1
			}

			function F(g) {
				return g ? c.wR.PENDING_REGISTRY_LOCK === g : !1
			}

			function X(g) {
				return g ? [c.wR.PENDING_REGISTRY_UNLOCK, c.wR.PENDING_UNLOCK_APPROVAL].includes(g) : !1
			}

			function ie(g) {
				var D;
				return !1
			}

			function ge(g) {
				var D;
				return !1
			}

			function be(g) {
				var D;
				return !1
			}

			function xe(g) {
				var D;
				return !1
			}

			function x(g) {
				var D;
				return !1
			}

			function me(g) {
				return Object.keys(c.wR).find(D => c.wR[D].toLowerCase() === g.toLowerCase())
			}

			function _e(g) {
				var D;
				const ue = (D = me(g)) === null || D === void 0 ? void 0 : D.toLowerCase();
				return ue ? n.keys.protection_status[ue] : n.keys.protection_status.unknown
			}

			function Be(g) {
				return ["com", "net"].includes(g)
			}

			function $e(g) {
				const D = (0, d.pu)(g);
				return Be(D) ? c.wR.PENDING_REGISTRY_LOCK : c.wR.LOCKED
			}

			function et(g) {
				return (0, d.pu)(g) === "co" ? 5 : 10
			}

			function ot(g, D) {
				return D ? 1 : (0, d.pu)(g) === "co" ? 5 : (0, d.pu)(g) === "org" ? 1 : 10
			}

			function Ge(g) {
				return (0, d.pu)(g) === "uk"
			}

			function wt(g) {
				return (0, d.pu)(g) === "us"
			}

			function Ft(g) {
				return p()(g).isValid()
			}

			function xt(g) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(g)
			}

			function $t(g) {
				return !!(g == null ? void 0 : g.id)
			}

			function jt(g) {
				return g ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(g) : !1
			}

			function rt(g) {
				return g ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(g) : !1
			}

			function Mt(g) {
				var D;
				return (g == null ? void 0 : g.lastKnownStatus) ? (D = g.lastKnownStatus) === null || D === void 0 ? void 0 : D.includes("deletionIrredeemable") : !1
			}

			function Rt(g) {
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

			function Nt(g) {
				if (!g || !g.message) return r.OJ.DEFAULT;
				const {
					message: D
				} = g;
				switch (!0) {
					case D.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case D.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case D.includes("account blocked"):
						return r.OJ.ACCOUNT_BLOCKED;
					default:
						return r.OJ.DEFAULT
				}
			}

			function ht(g) {
				var D, ue;
				return !!(((D = g.policies) === null || D === void 0 || (ue = D.suspension) === null || ue === void 0 ? void 0 : ue.parked) && g.policies.suspension.parkingReason)
			}

			function Wt(g) {
				var D, ue;
				return ht(g) && ((D = g.policies) === null || D === void 0 || (ue = D.suspension) === null || ue === void 0 ? void 0 : ue.parkingReason) === r.qK.EMAIL_VERIFICATION
			}

			function zt(g) {
				var D, ue;
				return ht(g) && ((D = g.policies) === null || D === void 0 || (ue = D.suspension) === null || ue === void 0 ? void 0 : ue.parkingReason) === r.qK.TRUST_AND_SAFETY
			}

			function Gt(g) {
				var D;
				return !((D = g.domainMove) === null || D === void 0 ? void 0 : D.ineligibilityReasons.length)
			}

			function Ht(g) {
				var D, ue;
				return !!((D = g.domainMove) === null || D === void 0 || (ue = D.ineligibilityReasons) === null || ue === void 0 ? void 0 : ue.includes(r.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Et(g) {
				var D;
				return (D = g.actionableMetadata) === null || D === void 0 ? void 0 : D.find(ue => ue.type === r.wg.DOMAIN_MOVE)
			}

			function Kt(g) {
				const D = Et(g);
				return (D == null ? void 0 : D.status) === "pending" && D.accountContext === r._5.GAINING
			}

			function Vt(g) {
				const D = Et(g);
				return (D == null ? void 0 : D.status) === "pending" && D.accountContext === r._5.LOSING
			}

			function Zt(g) {
				return !y.Pf.includes(re(g.name))
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Bc: function() {
					return y
				},
				Hv: function() {
					return U
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
				WK: function() {
					return r
				},
				g5: function() {
					return a
				},
				gM: function() {
					return c
				},
				gf: function() {
					return d
				},
				jk: function() {
					return ne
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
			const s = "Unknown",
				p = "unknown",
				c = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				m = Object.keys(c),
				i = !0,
				d = (0, o.J8)("registrar_mock_data") || !1,
				y = (0, o.J8)("registrar_mock_transfer_out") || !1,
				n = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				a = "cf_registrar.enabled",
				u = "@abcABC1234567890123456",
				l = [".us"],
				f = (0, e.BC)`/${"accountId"}`,
				_ = (0, e.BC)`${f}/add-site`,
				O = (0, e.BC)`${f}/domains`,
				I = (0, e.BC)`${O}/action-center`,
				h = (0, e.BC)`${O}/${"zoneName"}`,
				N = (0, e.BC)`${h}/configuration`,
				E = (0, e.BC)`${h}/contacts`,
				C = (0, e.BC)`${O}/pricing`,
				R = (0, e.BC)`${O}/protection`,
				b = (0, e.BC)`${O}/register`,
				M = (0, e.BC)`${b}/checkout`,
				T = (0, e.BC)`${b}/checkout/${"token"}`,
				S = (0, e.BC)`${b}/success`,
				L = (0, e.BC)`${O}/tlds`,
				G = (0, e.BC)`${O}/transfer`,
				$ = (0, e.BC)`${O}/transfer/${"zoneName"}`,
				V = (0, e.BC)`/registrar/accounts/verify_email`,
				ce = (0, e.BC)`/registrar/domains/verify_email`,
				ee = (0, e.BC)`/sign-up/registrar`,
				J = (0, e.BC)`${O}/verify-email`,
				ve = (0, e.BC)`${f}/${"zoneName"}`,
				ne = {
					addSite: _,
					domains: O,
					domainsActionCenter: I,
					domainsDomain: h,
					domainsDomainConfiguration: N,
					domainsDomainContacts: E,
					domainsPricing: C,
					domainsProtection: R,
					domainsRegister: b,
					domainsRegisterCheckout: M,
					domainsRegisterCheckoutToken: T,
					domainsRegisterSuccess: S,
					domainsTlds: L,
					domainsTransfer: G,
					domainsTransferZone: $,
					registrarAccountsVerifyEmail: V,
					registrarDomainsVerifyEmail: ce,
					signup: ee,
					verifyEmail: J,
					zone: ve
				},
				U = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(j, v, t) {
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
			const s = y => {
					const n = y && y.accountFlags && y.accountFlags.data && y.accountFlags.data.registrar && y.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(r => r.trim()) : []
				},
				p = y => {
					var n, r, a;
					return ((n = y.accountFlags) === null || n === void 0 || (r = n.data) === null || r === void 0 || (a = r.registrar) === null || a === void 0 ? void 0 : a["registrar-managed"]) || !1
				},
				c = y => y.account ? y.account.email : "",
				m = y => !1,
				i = y => m(y) && (0, e.oJ)((0, e.Zu)(y)),
				d = y => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: r
					} = y.registrar.registrations;
					return n && !(r.accepted_date || r.id || r.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(j, v, t) {
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
				p = t.n(s),
				c = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function m(a) {
				for (var u = 1; u < arguments.length; u++) {
					var l = arguments[u] != null ? Object(arguments[u]) : {},
						f = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(l).filter(function(_) {
						return Object.getOwnPropertyDescriptor(l, _).enumerable
					})), f.forEach(function(_) {
						i(a, _, l[_])
					})
				}
				return a
			}

			function i(a, u, l) {
				return u = d(u), u in a ? Object.defineProperty(a, u, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[u] = l, a
			}

			function d(a) {
				var u = y(a, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function y(a, u) {
				if (typeof a != "object" || a === null) return a;
				var l = a[Symbol.toPrimitive];
				if (l !== void 0) {
					var f = l.call(a, u || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(a)
			}
			let n = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a.DOMAIN_MOVE_START_FLOW = "Start domain move flow", a.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", a.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", a.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", a.DOMAIN_MOVE_SUBMIT = "Submit domain move", a.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", a.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", a.DOMAIN_MOVE_CANCEL = "Domain move cancel", a.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", a.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", a.ACTION_CENTER_NAVIGATE = "Navigate to actions center", a.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", a
			}({});

			function r(a, u, l) {
				if (!(u == null ? void 0 : u.name)) return null;
				p().sendEvent(a, m({
					domain: {
						name: u.name,
						premium: (0, c.Uy)(u == null ? void 0 : u.premiumType),
						paymentExpiresAt: o()(u == null ? void 0 : u.paymentExpiresAt).format()
					},
					category: "registrar"
				}, l))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(j, v, t) {
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
				c = e.eg.object({
					id: e.eg.string,
					name: e.eg.string,
					description: e.eg.string
				}),
				m = (0, o.ZP)("granularResources", "get", "/accounts/(accountId)/demoproducts")
		},
		"../react/pages/home/members/constants.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Ey: function() {
					return i
				},
				F4: function() {
					return l
				},
				Go: function() {
					return r
				},
				Lc: function() {
					return N
				},
				Np: function() {
					return y
				},
				Rl: function() {
					return n
				},
				Sb: function() {
					return a
				},
				Sw: function() {
					return h
				},
				Sz: function() {
					return I
				},
				Ti: function() {
					return E
				},
				Uw: function() {
					return _
				},
				Zl: function() {
					return f
				},
				jk: function() {
					return O
				},
				r6: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${o}/members`,
				p = (0, e.BC)`${s}/invite`,
				c = (0, e.BC)`${s}/invite/${"memberId"}`,
				m = (0, e.BC)`${s}/add-policy/${"memberId"}`,
				i = "com.cloudflare.api.account",
				y = i + "." + "zone",
				n = y + ".",
				r = 100,
				a = 200,
				u = 5,
				l = 300,
				f = "INVITE_TOAST",
				_ = "00000000000000000000000000000000",
				O = {
					account: o,
					members: s,
					inviteMembers: p,
					editMember: c,
					addPolicy: m
				},
				I = {
					allow: "allow",
					deny: "deny"
				},
				h = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				N = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				E = {
					accountId: "",
					effect: I.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				AX: function() {
					return h
				},
				Co: function() {
					return O
				},
				JP: function() {
					return I
				},
				Ld: function() {
					return a
				},
				YW: function() {
					return d
				},
				_k: function() {
					return u
				},
				c$: function() {
					return y
				},
				rC: function() {
					return R
				},
				vq: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				o = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				s = t("../react/pages/home/members/constants.ts");

			function p(b) {
				for (var M = 1; M < arguments.length; M++) {
					var T = arguments[M] != null ? Object(arguments[M]) : {},
						S = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(T).filter(function(L) {
						return Object.getOwnPropertyDescriptor(T, L).enumerable
					})), S.forEach(function(L) {
						c(b, L, T[L])
					})
				}
				return b
			}

			function c(b, M, T) {
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
					var S = T.call(b, M || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(b)
			}
			const d = () => p({}, s.Ti),
				y = () => p({}, s.Lc, {
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
					var S;
					let L = [],
						G = [];
					const $ = [],
						V = [];
					b.scopes.forEach(J => {
						if (J.mode === s.Sw.all) T ? L.push({
							id: T
						}) : L.push({
							scope: {
								key: `com.cloudflare.api.account.${M}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (J.mode === s.Sw.domain_group) {
							const U = {
								id: J.resourceGroupId
							};
							J.effect === s.Sz.allow ? L.push(U) : G.push(U)
						} else if (J.mode === s.Sw.zone) {
							const U = `${s.Rl}${J.zoneId}`;
							J.effect === s.Sz.allow ? $.push(U) : V.push(U)
						} else if (J.mode === s.Sw.granular && J.granularResourceId) {
							var ve, ne;
							const U = J.granularProduct,
								oe = `${(ve=o.s_.find(Q=>Q.value==U))===null||ve===void 0?void 0:ve.scopeKeyPrefix}.${J.granularResourceId}`,
								pe = `${(ne=o.s_.find(Q=>Q.value===U))===null||ne===void 0?void 0:ne.scopeSubsetOfPrefix}.${M}`;
							L.push({
								scope: {
									key: `${oe}`,
									subset_of: [{
										key: `${pe}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), $.length && (L = L.concat(n($))), V.length && (G = G.concat(n(V)));
					const ce = (S = b.permission_groups) === null || S === void 0 ? void 0 : S.map(J => ({
							id: J
						})),
						ee = [];
					return ee.push({
						access: s.Sz.allow,
						permission_groups: ce,
						resource_groups: L
					}), G.length && ee.push({
						access: s.Sz.deny,
						permission_groups: ce,
						resource_groups: G
					}), ee
				},
				a = b => b.map(M => {
					var T;
					return {
						access: M.access,
						permission_groups: M.permission_groups.map(S => ({
							id: S.id
						})),
						resource_groups: (T = M.resource_groups) === null || T === void 0 ? void 0 : T.map(S => ({
							scope: {
								key: S.scope.key,
								objects: S.scope.objects
							},
							id: S.id
						}))
					}
				}),
				u = (b, M, T, S) => {
					const L = b.auto_accept;
					let G = [];
					return G = G.concat(r(b, M, T)), S && (G = G.concat(a(S))), {
						auto_accept: L,
						status: L ? "accepted" : "pending",
						policies: G
					}
				},
				l = b => {
					const M = b.split(".");
					return M[M.length - 1]
				},
				f = b => {
					var M, T;
					const S = b == null ? void 0 : b.access;
					let L = [],
						G = b == null || (M = b.resource_groups) === null || M === void 0 ? void 0 : M.map($ => {
							var V;
							const ce = _($);
							if (($ == null || (V = $.meta) === null || V === void 0 ? void 0 : V.editable) === "false") return {
								effect: S,
								mode: s.Sw.all,
								accountId: l($.id)
							};
							if (ce) {
								var ee;
								const J = $ == null || (ee = $.scope) === null || ee === void 0 ? void 0 : ee.key.split(".").pop();
								return {
									effect: S,
									mode: s.Sw.granular,
									granularProduct: ce.value,
									granularResourceId: J
								}
							} else if (!$.name) $.scope.key.startsWith(s.Rl) ? L.push({
								key: $.scope.key
							}) : L = L.concat($.scope.objects);
							else return {
								effect: S,
								mode: s.Sw.domain_group,
								resourceGroupId: l($.id)
							}
						}).filter($ => $);
					if ((T = L) === null || T === void 0 ? void 0 : T.length) {
						let $ = L.map(V => {
							const ce = l(V.key);
							return {
								effect: S,
								mode: s.Sw.zone,
								zoneId: ce
							}
						});
						G = G.length ? $.concat(G) : $
					}
					return G
				},
				_ = b => {
					var M, T, S, L;
					const G = b == null || (M = b.scope) === null || M === void 0 ? void 0 : M.key.split(".").slice(0, -1).join("."),
						$ = b == null || (T = b.scope) === null || T === void 0 || (S = T.subset_of) === null || S === void 0 || (L = S[0]) === null || L === void 0 ? void 0 : L.key.split(".").slice(0, -1).join(".");
					return o.s_.find(V => V.scopeKeyPrefix === G && V.scopeSubsetOfPrefix === $)
				},
				O = b => {
					if (!(b == null ? void 0 : b.length)) return [];
					const M = [];
					return b.forEach(T => {
						var S;
						(S = T.resource_groups) === null || S === void 0 || S.forEach(L => {
							var G, $;
							((G = L.scope) === null || G === void 0 || ($ = G.key) === null || $ === void 0 ? void 0 : $.startsWith(s.Rl)) && M.push(l(L.scope.key))
						})
					}), M
				},
				I = b => {
					if (!(b == null ? void 0 : b.length)) return [];
					const M = [];
					return b.forEach(T => {
						var S;
						(S = T.resource_groups) === null || S === void 0 || S.forEach(L => {
							var G, $;
							if (!((G = L.scope) === null || G === void 0 || ($ = G.key) === null || $ === void 0 ? void 0 : $.startsWith(s.Rl))) {
								var V;
								const ee = (V = L.scope) === null || V === void 0 ? void 0 : V.objects;
								for (let J = 0; J < (ee == null ? void 0 : ee.length) && J < s.r6; J++) {
									var ce;
									((ce = ee[J].key) === null || ce === void 0 ? void 0 : ce.startsWith(s.Rl)) && M.push(l(ee[J].key))
								}
							}
						})
					}), M
				},
				h = b => {
					var M;
					if (!(b == null ? void 0 : b.length)) return null;
					const T = (M = b[0]) === null || M === void 0 ? void 0 : M.permission_groups.map($ => $.id);
					let S, L;
					b == null || b.forEach($ => {
						$.access === s.Sz.allow && (S = $), $.access === s.Sz.deny && (L = $)
					});
					let G = [];
					return S && (G = f(S)), L && (G = G.concat(f(L))), {
						permission_groups: T,
						scopes: G
					}
				},
				N = "permission-groups-",
				E = new Map,
				C = b => {
					if (!b) return [];
					const M = E.get(b);
					if (M) return M;
					const T = e.E.get(`${N}${b}`);
					return E.set(b, T), T
				},
				R = (b, M) => {
					const T = [];
					for (let S = 0; S < sessionStorage.length; S++) {
						const L = sessionStorage.key(S);
						(L == null ? void 0 : L.startsWith(N)) && T.push(L)
					}
					return T.length >= 5 && e.E.remove(T[0]), e.E.set(`${N}${b}`, M)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(j, v, t) {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(j, v, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				KO: function() {
					return i
				},
				L9: function() {
					return n
				},
				N3: function() {
					return y
				},
				zE: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var u = arguments[a] != null ? Object(arguments[a]) : {},
						l = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(u).filter(function(f) {
						return Object.getOwnPropertyDescriptor(u, f).enumerable
					})), l.forEach(function(f) {
						p(r, f, u[f])
					})
				}
				return r
			}

			function p(r, a, u) {
				return a = c(a), a in r ? Object.defineProperty(r, a, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = u, r
			}

			function c(r) {
				var a = m(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(r, a) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var l = u.call(r, a || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let i = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r
				}({}),
				d = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				y = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const n = (r, a = {}) => {
				o().sendEvent(r, s({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/selectors.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				$4: function() {
					return p
				},
				GH: function() {
					return n
				},
				JZ: function() {
					return a
				},
				aR: function() {
					return d
				},
				db: function() {
					return m
				},
				ib: function() {
					return u
				},
				pT: function() {
					return y
				},
				po: function() {
					return r
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts");
			const p = "sourcing_kit_enabled",
				c = "sourcing_kit_waitlist",
				m = "images",
				i = "unified_images_enabled",
				d = f => !!(0, o.BF)(f, "images.transformations_enabled"),
				y = f => Boolean((0, o.BF)(f, "images.enabled")),
				n = f => {
					const _ = (0, o.BF)(f, "images.storage");
					return typeof _ == "number" && _ > 0
				},
				r = f => Boolean((0, o.BF)(f, "contract.customer_enabled")),
				a = f => Boolean((0, e.oI)(f, m, p)),
				u = f => Boolean((0, s.Le)(f, "CloudflareImages", p)),
				l = f => Boolean(getAccountFlipperFlag(f, "CloudflareImages", i))
		},
		"../react/pages/magic/constants.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				GF: function() {
					return a
				},
				H3: function() {
					return i
				},
				H8: function() {
					return c
				},
				J: function() {
					return l
				},
				Nz: function() {
					return d
				},
				UQ: function() {
					return _
				},
				Up: function() {
					return p
				},
				W8: function() {
					return y
				},
				Ws: function() {
					return O
				},
				Xg: function() {
					return r
				},
				_j: function() {
					return s
				},
				a4: function() {
					return u
				},
				jS: function() {
					return f
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
				c = I => [{
					value: "low",
					label: I("setting.low")
				}, {
					value: "mid",
					label: I("setting.medium")
				}, {
					value: "high",
					label: I("setting.high")
				}],
				m = I => [{
					value: "request",
					label: I("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: I("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				i = I => [{
					value: "unidirectional",
					label: I("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: I("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				d = "magic-transit",
				y = "magic-wan",
				n = "gre_tunnel",
				r = "ipsec_tunnel",
				a = 64,
				u = 1476,
				l = "mid",
				f = "reply",
				_ = I => [{
					value: void 0,
					label: I("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: I("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: I("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				O = I => [{
					value: "all",
					label: I("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: I("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: I("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(j, v, t) {
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
		"../react/pages/magic/overview/tracking.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
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
					return c
				}
			});
			var e = t("../react/pages/magic/constants.ts");
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
				c = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(j, v, t) {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				gb: function() {
					return n
				},
				iP: function() {
					return b
				},
				xL: function() {
					return I
				},
				rD: function() {
					return T
				},
				oT: function() {
					return l
				},
				i2: function() {
					return S
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
					return a
				},
				Ii: function() {
					return N
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
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				c = t("../node_modules/@cloudflare/elements/es/index.js");
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
				d = () => o().createElement(y, null, o().createElement("svg", {
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
				y = (0, s.createComponent)(({
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
				n = () => o().createElement(r, null, o().createElement(c.Ei, {
					alt: "airplane",
					src: p,
					width: "85%"
				})),
				r = (0, s.createComponent)(({
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
				a = () => o().createElement(u, null, o().createElement("svg", {
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
				u = (0, s.createComponent)(({
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
				l = () => o().createElement(f, null, o().createElement("svg", {
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
				_ = () => o().createElement(O, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				O = (0, s.createComponent)(({
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
				I = () => o().createElement(h, null, o().createElement("svg", {
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
				h = (0, s.createComponent)(({
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
				N = () => o().createElement(E, null, o().createElement("svg", {
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
				E = (0, s.createComponent)(({
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
				C = () => o().createElement(R, null, o().createElement("svg", {
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
				R = (0, s.createComponent)(({
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
				S = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				A2: function() {
					return i
				},
				He: function() {
					return c
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
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				s = "login-apple-jwt",
				p = "cf-test",
				c = {
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
		"../react/pages/page-rules/tracking.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				_: function() {
					return s
				},
				c: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let s = function(c) {
				return c.TEMPLATE_SELECTED = "template selected", c.TEMPLATE_PRODUCT_SELECTED = "template product selected", c.TEMPLATE_SAVE_DRAFT = "template save draft", c.TEMPLATE_CANCEL = "template cancel", c.TEMPLATE_DEPLOY = "template deploy", c
			}({});
			const p = (c, m) => o().sendEvent(c, {
				template_name: m
			})
		},
		"../react/pages/pages/constants.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				A: function() {
					return _
				},
				C1: function() {
					return y
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
					return c
				},
				L7: function() {
					return s
				},
				Li: function() {
					return f
				},
				Ni: function() {
					return R
				},
				OG: function() {
					return ee
				},
				QF: function() {
					return V
				},
				QV: function() {
					return C
				},
				Sx: function() {
					return N
				},
				Ub: function() {
					return $
				},
				X3: function() {
					return r
				},
				aP: function() {
					return i
				},
				eO: function() {
					return a
				},
				fH: function() {
					return l
				},
				fQ: function() {
					return O
				},
				fR: function() {
					return e
				},
				hE: function() {
					return G
				},
				iS: function() {
					return I
				},
				ku: function() {
					return S
				},
				nY: function() {
					return E
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
				c = 58,
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
				y = 100,
				n = 350,
				r = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				u = 10,
				l = "_headers",
				f = "_redirects",
				_ = "_routes.json",
				O = "_worker.js",
				I = "do-a-barrel-roll",
				h = [l, f, _, O],
				N = 1024 * 1024 * 25,
				E = 1e3,
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
				R = 1e5,
				b = 75e3,
				M = 2e5,
				T = 15e4,
				S = "workers",
				L = "cloudflare_pages_build_caching",
				G = 2;
			let $ = function(J) {
				return J[J.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", J[J.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", J[J.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", J[J.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", J[J.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", J[J.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", J
			}({});
			const V = 1,
				ce = 2,
				ee = 2
		},
		"../react/pages/pages/routes.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Hv: function() {
					return s
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
		"../react/pages/pipelines/tracking.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				KO: function() {
					return i
				},
				L9: function() {
					return y
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(a).filter(function(l) {
						return Object.getOwnPropertyDescriptor(a, l).enumerable
					})), u.forEach(function(l) {
						p(n, l, a[l])
					})
				}
				return n
			}

			function p(n, r, a) {
				return r = c(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function c(n) {
				var r = m(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var u = a.call(n, r || "default");
					if (typeof u != "object") return u;
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
			const y = (n, r = {}) => {
				o().sendEvent(n, s({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
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
				c = (i, d) => {
					const y = p(d);
					return `https://${i}.${y}`
				},
				m = (i, d, y) => `${c(i,d)}/${y}`
		},
		"../react/pages/r2/selectors.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts");
			const p = "r2_migrator_waitlist",
				c = "r2migrator",
				m = "r2",
				i = "r2_storage_migrator",
				d = "r2_storage_migrator",
				y = a => getAccountEntitlement(a, "r2.enabled"),
				n = a => Boolean((0, s.Le)(a, i, p)),
				r = a => Boolean(getAccountFlipperFlagsChanges(a, d, c))
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Gk: function() {
					return a
				},
				LA: function() {
					return y
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

			function s(u) {
				for (var l = 1; l < arguments.length; l++) {
					var f = arguments[l] != null ? Object(arguments[l]) : {},
						_ = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(f).filter(function(O) {
						return Object.getOwnPropertyDescriptor(f, O).enumerable
					})), _.forEach(function(O) {
						p(u, O, f[O])
					})
				}
				return u
			}

			function p(u, l, f) {
				return l = c(l), l in u ? Object.defineProperty(u, l, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[l] = f, u
			}

			function c(u) {
				var l = m(u, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function m(u, l) {
				if (typeof u != "object" || u === null) return u;
				var f = u[Symbol.toPrimitive];
				if (f !== void 0) {
					var _ = f.call(u, l || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(u)
			}
			const i = "blocked-content-table-tooltip",
				d = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					canceled: "gray"
				},
				y = ["phishing_interstitial", "malware_interstitial", "legal_block"],
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
					filters: Object.values(e.GH).reduce((u, l) => s({}, u, {
						[l]: l
					}), {})
				};
			let a = function(u) {
				return u.COPY_URL = "copy blocked content url", u.REQUEST_REVIEW = "request blocked content review", u.ADD_FILTER = "Add filter", u.REMOVE_FILTER = "Remove filter", u
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(j, v, t) {
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
				c = function(m) {
					return m.Removed = "removed", m.Misclassified = "misclassified", m
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				R: function() {
					return e
				},
				v: function() {
					return o
				}
			});
			let e = function(s) {
				return s.LOAD_SCAN_INFO = "load url scan information", s.INITIATE_URL_SCAN = "initiate url scan", s
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
		"../react/pages/security/analytics/labels.ts": function(j, v, t) {
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
		"../react/pages/security/api-shield/constants.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				AB: function() {
					return r
				},
				API_SHIELD_TOAST: function() {
					return I
				},
				CR: function() {
					return O
				},
				Cg: function() {
					return y
				},
				L8: function() {
					return u
				},
				Ps: function() {
					return d
				},
				_i: function() {
					return n
				},
				ac: function() {
					return s
				},
				k1: function() {
					return c
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
				s = [...o, "disable"],
				p = 10,
				c = "header",
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
				y = "all";
			let n = function(h) {
				return h.DISCOVERY_FILTER = "discovery-filter-state", h.ADD_JWT_RULES_FILTER = "add-jwt-rules-state", h.ENDPOINT_MANAGEMENT_FILTER = "endpoint-management-filter-cache-key", h
			}({});
			const r = 63,
				a = 0,
				u = 10,
				l = {
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
				O = "api-shield-schema-validation-for-all-customers";
			let I = function(h) {
				return h.UPLOAD_SCHEMA = "schemaName", h.ADDED_ENDPOINT = "addedEndpoint", h.DEPLOYED_ROUTE = "deployedRoute", h.DELETED_ROUTE = "deletedRoute", h.UPDATED_LABELS_SINGLE_ENDPOINT = "updateLabelsSingle", h.UPDATED_LABELS_MULTI_ENDPOINT = "updateLabelsMulti", h
			}({})
		},
		"../react/pages/security/api-shield/entitlements.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				$0: function() {
					return r
				},
				CR: function() {
					return n
				},
				DM: function() {
					return ee
				},
				DN: function() {
					return L
				},
				Dc: function() {
					return J
				},
				Dg: function() {
					return V
				},
				FV: function() {
					return G
				},
				LG: function() {
					return h
				},
				Mz: function() {
					return $
				},
				OL: function() {
					return i
				},
				St: function() {
					return O
				},
				UG: function() {
					return a
				},
				Wy: function() {
					return u
				},
				iU: function() {
					return b
				},
				jI: function() {
					return c
				},
				qK: function() {
					return S
				},
				qN: function() {
					return y
				},
				r6: function() {
					return ve
				},
				sK: function() {
					return f
				},
				t1: function() {
					return E
				},
				yk: function() {
					return d
				},
				yo: function() {
					return ce
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
				p = t("../react/pages/security/api-shield/settings/constants.tsx");
			const c = {
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
				i = c[e.H.DISCOVERY],
				d = () => !!(0, o.Z)(i.discoveryAllowed),
				y = () => !!(0, o.Z)(i.discoveryThresholdsAllowed),
				n = c[e.H.JWT],
				r = () => !!(0, o.Z)(n.tokenValidationAllowed),
				a = () => (0, o.Z)(n.maxTokenValidationRules),
				u = () => (0, o.Z)(n.maxTokenValidationConfigs),
				l = c[e.H.SEQUENCE],
				f = () => !!(0, o.Z)(l.sequenceAllowed),
				_ = c[e.H.SEQUENCE_RULES],
				O = () => (0, o.Z)(_.maxSequenceRules),
				I = c[e.H.OPERATIONS],
				h = () => (0, o.Z)(I.maxOperationsAllowed),
				N = c[e.H.USER_SCHEMAS],
				E = () => {
					const ne = (0, o.Z)(N.maxUserSchemasAllowed);
					return typeof ne == "number" ? ne : p.Hs
				},
				C = () => {
					const ne = (0, o.Z)(N.maxSchemaBytesAllowed);
					return typeof ne == "number" ? ne : p.x5
				},
				R = c[e.H.LEARNED_SCHEMAS],
				b = () => (0, o.Z)(R.maxLearnedSchemasAllowed),
				M = c[e.H.SCHEMA_VALIDATION],
				T = () => useZoneEntitlement(M.schemaValidationAllowed),
				S = () => (0, o.Z)(M.maxSchemaBytes),
				L = c[e.H.CONFIGURATION],
				G = () => (0, o.Z)(L.maxApiShields),
				$ = () => (0, o.Z)(L.apiRouting),
				V = () => (0, o.Z)(L.centralEndpointsListAllowed),
				ce = () => !!(0, o.Z)(m.logAllowed),
				ee = () => !!(0, o.Z)(m.regexOperatorAllowed),
				J = () => !!(0, o.Z)(m.dlpAllowed),
				ve = () => !!(0, s.Z)(m.sequencesAllowed)
		},
		"../react/pages/security/api-shield/settings/constants.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				Cl: function() {
					return n
				},
				Hs: function() {
					return d
				},
				PD: function() {
					return u
				},
				Sk: function() {
					return l
				},
				TD: function() {
					return y
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
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/utils/translator.tsx"),
				p = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let c = function(_) {
				return _.JWT_SECTION = "JWT_SECTION", _.ENDPOINT_SETTINGS = "ENDPOINT_SETTINGS", _.SCHEMA_SETTINGS = "SCHEMA_SETTINGS", _
			}({});
			const m = {
					page: 1,
					perPage: 5,
					totalCount: 0
				},
				i = 2e5,
				d = 5,
				y = {
					name: "created_at",
					direction: p.Sr.desc
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
				l = {
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
		"../react/pages/security/api-shield/tracking.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Fj: function() {
					return d
				},
				kq: function() {
					return i
				},
				xr: function() {
					return y
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(a).filter(function(l) {
						return Object.getOwnPropertyDescriptor(a, l).enumerable
					})), u.forEach(function(l) {
						p(n, l, a[l])
					})
				}
				return n
			}

			function p(n, r, a) {
				return r = c(r), r in n ? Object.defineProperty(n, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = a, n
			}

			function c(n) {
				var r = m(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(n, r) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var u = a.call(n, r || "default");
					if (typeof u != "object") return u;
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
				y = ({
					name: n,
					category: r = "user journey",
					product: a = i.MAIN,
					productName: u,
					additionalData: l
				}) => {
					o().sendEvent(n, s({
						category: r,
						product: a,
						productName: u
					}, l || {}))
				}
		},
		"../react/pages/security/api-shield/types.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
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
		"../react/pages/security/api-shield/utils/useApiShield.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				R: function() {
					return i
				}
			});
			var e = t("../react/pages/security/api-shield/entitlements.tsx"),
				o = t("../react/pages/security/api-shield/constants.ts"),
				s = t("../react/common/hooks/useGate.ts");
			const p = () => !!(0, s.Z)(o.CR);
			var c = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/app/redux/index.ts");
			const i = () => {
				const d = ((0, e.FV)() || 0) > 0,
					y = p(),
					n = (0, e.yk)(),
					r = (0, e.yo)(),
					a = (0, m.p4)(c.nA),
					u = (0, c.Ns)(a),
					l = (0, c._y)(a),
					f = (0, c.z5)(a),
					_ = (0, c.ko)(a);
				return {
					isFreeZone: u,
					isProZone: l,
					isBiz: f,
					isEnterpriseZone: _,
					hasLogAction: r,
					hasApiShields: d,
					hasApiDiscovery: n,
					hasFreeTier: y && !d,
					hasApiShieldsAndApiDiscovery: n && d,
					isEnableFreeTier: y
				}
			}
		},
		"../react/pages/security/bots/tracking.ts": function(j, v, t) {
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
			let e = function(p) {
					return p.INITIAL_FETCH_SCORES = "view bots scores distribution", p.FETCH_CONFIGURATION = "view bots configuration page", p.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", p.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", p.UPDATE_SETTINGS = "update bots settings", p.DELETE_RULE = "delete bots ruleset", p.UPDATE_RULE = "update bots ruleset", p.FETCH_RULES = "view bots ruleset", p.CONFIGURE_BOT_MANAGEMENT = "view bots management", p.WAF_RULES_REDIRECT = "redirect waf rules", p
				}({}),
				o = function(p) {
					return p.PROVIDED_TEMPLATE = "provided template link in detection card", p.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", p.USE_TEMPLATE = "use template", p.CREATE_FIREWALL_RULE = "create firewall rule", p.WAF_RULES = "waf rules", p
				}({});
			const s = "user journey"
		},
		"../react/pages/security/page-shield/resources/index.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				CP: function() {
					return oe
				},
				Ks: function() {
					return ke
				},
				sV: function() {
					return le
				},
				SI: function() {
					return Ie
				},
				v5: function() {
					return R
				},
				xg: function() {
					return P
				},
				YC: function() {
					return A
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
					return H
				},
				VT: function() {
					return S
				},
				qc: function() {
					return G
				},
				V0: function() {
					return C
				},
				Lj: function() {
					return Me
				},
				k2: function() {
					return _
				},
				$g: function() {
					return l
				},
				SJ: function() {
					return $
				},
				KH: function() {
					return U
				},
				Mq: function() {
					return ne
				},
				FV: function() {
					return re
				},
				j$: function() {
					return V
				},
				I1: function() {
					return n
				},
				Wq: function() {
					return u
				},
				jf: function() {
					return a
				},
				sW: function() {
					return Ce
				},
				Uq: function() {
					return E
				},
				yd: function() {
					return ee
				},
				QM: function() {
					return J
				},
				Uc: function() {
					return ve
				},
				R$: function() {
					return f
				},
				pG: function() {
					return je
				},
				Ar: function() {
					return Ue
				},
				Sk: function() {
					return Q
				},
				gY: function() {
					return Ae
				},
				SE: function() {
					return Z
				},
				m: function() {
					return ae
				},
				xP: function() {
					return Y
				},
				CI: function() {
					return ye
				},
				p0: function() {
					return Pe
				},
				xl: function() {
					return Je
				},
				Tb: function() {
					return Le
				},
				h3: function() {
					return Re
				},
				xq: function() {
					return xe
				},
				SQ: function() {
					return W
				},
				C0: function() {
					return F
				},
				av: function() {
					return Ve
				},
				W3: function() {
					return He
				},
				WO: function() {
					return De
				},
				Dk: function() {
					return st
				},
				we: function() {
					return We
				},
				Yt: function() {
					return at
				},
				ex: function() {
					return Qe
				},
				E1: function() {
					return Te
				},
				e0: function() {
					return gt
				},
				UH: function() {
					return Ne
				},
				Qt: function() {
					return ut
				},
				K$: function() {
					return Ke
				},
				dm: function() {
					return te
				},
				oK: function() {
					return Ze
				},
				qZ: function() {
					return it
				},
				_4: function() {
					return X
				},
				qo: function() {
					return ie
				},
				CB: function() {
					return fe
				},
				ti: function() {
					return ze
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(o),
				p = t("../../../common/component/component-filter-bar/src/index.js"),
				c = t("../react/common/components/analytics/AnalyticsReport/constants.ts");

			function m(x) {
				for (var me = 1; me < arguments.length; me++) {
					var _e = arguments[me] != null ? Object(arguments[me]) : {},
						Be = Object.keys(_e);
					typeof Object.getOwnPropertySymbols == "function" && Be.push.apply(Be, Object.getOwnPropertySymbols(_e).filter(function($e) {
						return Object.getOwnPropertyDescriptor(_e, $e).enumerable
					})), Be.forEach(function($e) {
						i(x, $e, _e[$e])
					})
				}
				return x
			}

			function i(x, me, _e) {
				return me = d(me), me in x ? Object.defineProperty(x, me, {
					value: _e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[me] = _e, x
			}

			function d(x) {
				var me = y(x, "string");
				return typeof me == "symbol" ? me : String(me)
			}

			function y(x, me) {
				if (typeof x != "object" || x === null) return x;
				var _e = x[Symbol.toPrimitive];
				if (_e !== void 0) {
					var Be = _e.call(x, me || "default");
					if (typeof Be != "object") return Be;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (me === "string" ? String : Number)(x)
			}
			let n = function(x) {
				return x.BASE_URI = "base-uri", x.CHILD = "child-src", x.CONNECT = "connect-src", x.DEFAULT = "default-src", x.FONT = "font-src", x.FORM_ACTION = "form-action", x.FRAME = "frame-src", x.FRAME_ANCESTORS = "frame-ancestors", x.IMAGE = "img-src", x.MANIFEST = "manifest-src", x.MEDIA = "media-src", x.OBJECT = "object-src", x.SCRIPT = "script-src", x.STYLE = "style-src", x.WORKER = "worker-src", x.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", x
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
			let a = function(x) {
					return x.MONITOR = "monitor", x.POLICIES = "policies", x.SETTINGS = "settings", x
				}({}),
				u = function(x) {
					return x.SCRIPT_MONITOR = "script", x.CONNECTION_MONITOR = "connection", x.COOKIE_MONITOR = "cookie", x
				}({}),
				l = function(x) {
					return x.CryptominingScore = "cryptomining_score", x.MalwareScore = "malware_score", x.MagecartScore = "magecart_score", x
				}({}),
				f = function(x) {
					return x.DataflowScore = "dataflow_score", x.ObfuscationScore = "obfuscation_score", x
				}({}),
				_ = function(x) {
					return x.DomainMalicious = "domain_reported_malicious", x.UrlMalicious = "url_reported_malicious", x
				}({});

			function O(x) {
				for (var me = 1; me < arguments.length; me++) {
					var _e = arguments[me] != null ? Object(arguments[me]) : {},
						Be = Object.keys(_e);
					typeof Object.getOwnPropertySymbols == "function" && Be.push.apply(Be, Object.getOwnPropertySymbols(_e).filter(function($e) {
						return Object.getOwnPropertyDescriptor(_e, $e).enumerable
					})), Be.forEach(function($e) {
						I(x, $e, _e[$e])
					})
				}
				return x
			}

			function I(x, me, _e) {
				return me = h(me), me in x ? Object.defineProperty(x, me, {
					value: _e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[me] = _e, x
			}

			function h(x) {
				var me = N(x, "string");
				return typeof me == "symbol" ? me : String(me)
			}

			function N(x, me) {
				if (typeof x != "object" || x === null) return x;
				var _e = x[Symbol.toPrimitive];
				if (_e !== void 0) {
					var Be = _e.call(x, me || "default");
					if (typeof Be != "object") return Be;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (me === "string" ? String : Number)(x)
			}
			const E = 50,
				C = 9,
				R = "copy script url page shield",
				b = "disable page shield",
				M = "click documentation link",
				T = "enable page shield",
				S = "filter search page shield",
				L = "filter search view all page shield",
				G = "hover score tooltip page shield",
				$ = "open alert modal page shield",
				V = "change pagination page shield",
				ce = "close script modal page shield",
				ee = "open script modal page shield",
				J = "select alert type page shield",
				ve = "sort column page shield",
				ne = {
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
				U = {
					STARTS_WITH: c.Gn.startsWith,
					ENDS_WITH: c.Gn.endsWith,
					EQUALS: c.Gn.equals,
					CONTAINS: c.Gn.contains,
					DOES_NOT_CONTAIN: c.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: c.Gn.in
				},
				H = {
					status: {
						example: "active",
						type: p.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [U.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: p.kE.string,
						options: ["true", "false"],
						operators: [U.CONTAINS, U.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [U.EQUALS],
						type: p.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: p.kE.string,
						operators: [U.INCLUDES, U.ENDS_WITH, U.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				oe = O({}, H, {
					urls: O({}, H.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				le = {
					type: {
						example: "first_party",
						type: p.kE.select,
						options: ["first_party", "unknown"],
						label: "common.type",
						urlParam: "type",
						operators: [c.Gn.equals]
					},
					name: {
						example: "cookie_1",
						operators: [c.Gn.equals],
						type: p.kE.string,
						label: "firewall.page_shield.name",
						urlParam: "name"
					},
					domain: {
						example: "hostname.com",
						operators: [c.Gn.equals],
						type: p.kE.string,
						label: "firewall.page_shield.domain",
						urlParam: "domain"
					},
					path: {
						example: "/",
						operators: [c.Gn.equals],
						type: p.kE.string,
						label: "firewall.page_shield.path",
						urlParam: "path"
					},
					same_site: {
						operators: [c.Gn.equals],
						type: p.kE.select,
						options: ["lax", "strict", "none"],
						label: "firewall.page_shield.same_site",
						urlParam: "same_site"
					},
					http_only: {
						operators: [c.Gn.equals],
						type: p.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.http_only",
						urlParam: "http_only"
					},
					secure: {
						operators: [c.Gn.equals],
						type: p.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.secure",
						urlParam: "secure"
					}
				};
			let pe = function(x) {
				return x.SECURITY_THREATS = "Security Threats", x.C2_BOTNET = "C2 & Botnet", x.CRYPTOMINING = "Cryptomining", x.MALWARE = "Malware", x.PHISHING = "Phishing", x.SPYWARE = "Spyware", x.DGA_DOMAINS = "DGA Domains", x.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", x
			}({});
			const Q = "https://www.cloudflare.com/plans/enterprise/contact/",
				A = {
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
				P = {
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
				k = {
					[l.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[l.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[l.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[f.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[f.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				K = {
					[_.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[_.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				re = {
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
				Ie = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				Me = {
					[u.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[u.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[u.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				ke = {
					[u.SCRIPT_MONITOR]: "script_monitor.description",
					[u.CONNECTION_MONITOR]: "connection_monitor.description",
					[u.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				Z = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", x => (s().sendEvent(re.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), x)),
				fe = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", x => (s().sendEvent(re.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), x)),
				Le = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", x => (s().sendEvent(re.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), x)),
				Je = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				Y = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", x => (s().sendEvent(re.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), x)),
				ae = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				de = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", x => (s().sendEvent(re.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), x)),
				ye = (0, e.ZP)("pageShieldPolicies", "get", "/zones/(zoneId)/page_shield/policies").on("success", x => (s().sendEvent(re.VIEW_PAGE_SHIELD_POLICIES, {
					category: "user journey",
					product: "Page shield"
				}), x)),
				Pe = (0, e.ZP)("pageShieldPolicy", "get", "/zones/(zoneId)/page_shield/policies/(policiesId)"),
				ze = (0, e.ZP)("pageShieldPolicy", "put", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", x => (s().sendEvent(re.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "update"
				}), x)),
				Ue = (0, e.ZP)("pageShieldPolicy", "delete", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", x => (s().sendEvent(re.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "delete"
				}), x)),
				je = (0, e.ZP)("pageShieldPolicy", "post", "/zones/(zoneId)/page_shield/policies").on("success", x => (s().sendEvent(re.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "create"
				}), x)),
				Ae = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				Re = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var Fe = t("../react/app/redux/normalizer.js");
			const He = x => x.pageShield.configuration,
				Ye = x => {
					var me;
					return (me = x.pageShield.configuration.data) === null || me === void 0 ? void 0 : me.enabled
				},
				Ve = x => {
					var me;
					return (me = He(x)) === null || me === void 0 ? void 0 : me.data
				},
				z = x => x.pageShield.scripts,
				te = x => x.pageShield.script,
				he = x => x.pageShield.connections,
				De = x => x.pageShield.connection,
				Ne = x => x.pageShield.policies,
				Ke = x => x.pageShield.policy,
				Ze = (0, Fe.P1)("pageShieldScripts", z),
				lt = (0, Fe.P1)("pageShieldScript", te),
				st = (0, Fe.P1)("pageShieldConnections", he),
				mt = (0, Fe.P1)("pageShieldConnection", De),
				gt = (0, Fe.P1)("pageShieldPolicies", Ne),
				ut = (0, Fe.P1)("pageShieldPolicy", Ke),
				We = (x, me) => x === u.SCRIPT_MONITOR ? Ze(me) || [] : st(me) || [],
				Te = (x, me) => x === u.SCRIPT_MONITOR ? z(me) || [] : he(me) || [],
				Qe = (x, me) => x === u.SCRIPT_MONITOR ? lt(me) : mt(me),
				at = x => x.pageShield.domainIntel,
				it = x => x.pageShield.whoIsRecord,
				W = (x, me, _e) => {
					var Be;
					const $e = Object.values(_e).map(et => ({
						key: et,
						label: k[et],
						score: x[et]
					})).filter(et => et.score !== void 0 && et.score <= me);
					return me === C && $e.length === 0 && ((Be = x.js_integrity_score) !== null && Be !== void 0 ? Be : 100) <= me && $e.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), $e
				},
				F = (x, me) => Object.values(me).filter(_e => x[_e] === !0).map(_e => K[_e]),
				X = x => x === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				ie = (x, me) => x[l.MagecartScore] !== void 0 && x[l.MagecartScore] <= me || x[l.MalwareScore] !== void 0 && x[l.MalwareScore] <= me || x[l.CryptominingScore] !== void 0 && x[l.CryptominingScore] <= me || x.js_integrity_score !== void 0 && x.js_integrity_score <= me,
				ge = ["cdn.jsdelivr.net", "unpkg.com"],
				be = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				xe = x => {
					if (x.includes("@latest")) {
						const _e = x.split("@latest");
						if (_e.length != 2) return;
						const Be = _e[0].length,
							$e = Be + "@latest".length;
						return [Be, $e]
					}
					if (!!ge.some(_e => x.includes(_e)))
						for (const _e of be) {
							const Be = x.match(_e);
							if (!Be) continue;
							const $e = Be.index;
							if ($e === 0) return null;
							const et = $e + Be[0].length;
							return [$e, et]
						}
				}
		},
		"../react/pages/security/resources/constants.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				_C: function() {
					return u
				},
				_R: function() {
					return l
				},
				dY: function() {
					return _
				},
				fy: function() {
					return h
				},
				ji: function() {
					return a
				},
				pR: function() {
					return f
				},
				pV: function() {
					return N
				},
				rj: function() {
					return I
				},
				zf: function() {
					return O
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				o = t("../../../common/util/types/src/api/phases/fields.tsx"),
				s = t("webpack/sharing/consume/default/react/react"),
				p = t.n(s),
				c = t("../react/utils/translator.tsx"),
				m = t("../react/pages/security/resources/types.ts"),
				i = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx");

			function d(E) {
				for (var C = 1; C < arguments.length; C++) {
					var R = arguments[C] != null ? Object(arguments[C]) : {},
						b = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(R).filter(function(M) {
						return Object.getOwnPropertyDescriptor(R, M).enumerable
					})), b.forEach(function(M) {
						y(E, M, R[M])
					})
				}
				return E
			}

			function y(E, C, R) {
				return C = n(C), C in E ? Object.defineProperty(E, C, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[C] = R, E
			}

			function n(E) {
				var C = r(E, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function r(E, C) {
				if (typeof E != "object" || E === null) return E;
				var R = E[Symbol.toPrimitive];
				if (R !== void 0) {
					var b = R.call(E, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(E)
			}
			const a = 10;
			let u = function(E) {
					return E.MTLS_ACCESS = "mTLS-enforced authentication", E.ZONE_LOCKDOWN = "Zone lockdown", E.USER_AGENT = "User agent blocking", E.EMAIL_VALIDITY = "Disposable email checks", E.IP_BASED = "IP-based rule", E.GEOGRAPHY_BASE = "Geography-based rule", E
				}({}),
				l = function(E) {
					return E.LEAKED_CREDENTIALS = "Leaked Credentials Checks", E
				}({});
			const f = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				_ = [{
					title: "firewall.tools.toast.geography",
					template: u.GEOGRAPHY_BASE,
					trackedEvent: f.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					template: u.IP_BASED,
					trackedEvent: f.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					template: u.USER_AGENT,
					trackedEvent: f.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					template: u.ZONE_LOCKDOWN,
					trackedEvent: f.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				O = {
					[m.X.UI_SECTION]: E => ({
						[u.MTLS_ACCESS]: {
							ruleName: u.MTLS_ACCESS,
							displayName: p().createElement(c.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: p().createElement(c.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${E.account.id}/${E.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[u.ZONE_LOCKDOWN]: {
							ruleName: u.ZONE_LOCKDOWN,
							displayName: p().createElement(c.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							wafRulesOverview: p().createElement(c.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${E.account.id}/configurations/lists`
								}]
							})
						},
						[u.USER_AGENT]: {
							ruleName: u.USER_AGENT,
							displayName: p().createElement(c.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							wafRulesOverview: p().createElement(c.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${E.account.id}/configurations/lists`
								}]
							})
						},
						[u.EMAIL_VALIDITY]: {
							ruleName: u.EMAIL_VALIDITY,
							displayName: p().createElement(c.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: p().createElement(c.cC, {
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
				I = {
					[m.X.WAF_RULES]: {
						[l.LEAKED_CREDENTIALS]: {
							ruleName: l.LEAKED_CREDENTIALS,
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
						[l.LEAKED_CREDENTIALS]: {
							ruleName: l.LEAKED_CREDENTIALS,
							displayName: p().createElement(c.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: p().createElement(c.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let h = function(E) {
				return E.DISCOVERY = "discovery", E.SEQUENCES = "sequences", E.SCHEMA_VALIDATION = "schema-validation", E.SETTINGS = "settings", E.API_RULES = "api-rules", E.UPGRADE = "upgrade", E
			}({});
			const N = d({}, i.g, {
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
		"../react/pages/security/resources/types.ts": function(j, v, t) {
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
		"../react/pages/security/security-analytics/logs/constants.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
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
					return u
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
			const s = ["block", "challenge", "jschallenge", "managedChallenge"],
				p = ["miss", "expired", "bypass", "dynamic"],
				c = l => Object.fromEntries(Object.entries(l).map(([f, _]) => [_, f])),
				m = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				i = c(m),
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
				y = c(d),
				n = c(o.EG);
			let r = function(l) {
				return l.SAMPLED = "sampled", l.RAW = "raw", l
			}({});
			const a = "security-analytics-log-explorer";
			let u = function(l) {
				return l.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', l.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', l.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', l.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', l.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', l
			}({})
		},
		"../react/pages/security/settings/hooks/index.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Xu: function() {
					return J
				},
				Io: function() {
					return A
				},
				FQ: function() {
					return Je
				},
				vU: function() {
					return ee
				},
				M: function() {
					return ne
				},
				d7: function() {
					return ve
				},
				Oz: function() {
					return Q
				},
				Np: function() {
					return Z
				},
				WR: function() {
					return M
				},
				vE: function() {
					return $
				},
				bE: function() {
					return fe
				},
				u_: function() {
					return ce
				},
				kU: function() {
					return V
				},
				pf: function() {
					return P
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http");
			const s = async Y => {
				var ae, de;
				const ye = await (0, o.get)(`/zones/${Y}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((ae = ye == null ? void 0 : ye.body) === null || ae === void 0 || (de = ae.result) === null || de === void 0 ? void 0 : de.value) === "enabled"
			}, p = async (Y, ae) => (await (0, o.post)(`/zones/${Y}/content-upload-scan/${ae?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), ae), c = async Y => {
				var ae;
				const de = await (0, o.get)(`/zones/${Y}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((ae = de == null ? void 0 : de.body) === null || ae === void 0 ? void 0 : ae.result) || []
			}, m = async (Y, ae) => {
				var de;
				const ye = await (0, o.post)(`/zones/${Y}/content-upload-scan/payloads`, {
					body: [ae]
				});
				return (de = ye == null ? void 0 : ye.body) === null || de === void 0 ? void 0 : de.result
			}, i = async (Y, ae) => (await (0, o.del)(`/zones/${Y}/content-upload-scan/payloads/${ae}`, {
				hideErrorAlert: !0
			}), ae), d = async Y => {
				var ae, de;
				const ye = await (0, o.get)(`/zones/${Y}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((ae = ye == null ? void 0 : ye.body) === null || ae === void 0 || (de = ae.result) === null || de === void 0 ? void 0 : de.enabled)
			}, y = async (Y, ae) => {
				var de, ye;
				const Pe = await (0, o.post)(`/zones/${Y}/leaked-credential-checks`, {
					body: {
						enabled: ae
					}
				});
				return !!((de = Pe == null ? void 0 : Pe.body) === null || de === void 0 || (ye = de.result) === null || ye === void 0 ? void 0 : ye.enabled)
			}, n = async Y => {
				var ae;
				const de = await (0, o.get)(`/zones/${Y}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (ae = de == null ? void 0 : de.body) === null || ae === void 0 ? void 0 : ae.result
			}, r = async (Y, ae) => {
				var de;
				const ye = await (0, o.post)(`/zones/${Y}/leaked-credential-checks/detections`, {
					body: ae
				});
				return (de = ye == null ? void 0 : ye.body) === null || de === void 0 ? void 0 : de.result
			}, a = async (Y, ae) => (await (0, o.del)(`/zones/${Y}/leaked-credential-checks/detections/${ae}`, {
				hideErrorAlert: !0
			}), ae), u = async (Y, ae) => {
				await (0, o.put)(`/zones/${Y}/security-center/securitytxt`, {
					body: ae
				})
			}, l = async Y => {
				await (0, o.del)(`/zones/${Y}/security-center/securitytxt`)
			}, f = async Y => (await (0, o.get)(`/zones/${Y}/security-center/securitytxt`)).body;
			var _ = t("webpack/sharing/consume/default/react/react"),
				O = t("webpack/sharing/consume/default/react-redux/react-redux"),
				I = t("../react/pages/security/settings/resources/index.ts"),
				h = t("../react/common/hooks/useZoneEntitlement.ts"),
				N = t("../react/common/hooks/useGate.ts"),
				E = t("../react/pages/security/api-shield/utils/useApiShield.tsx"),
				C = t("../react/pages/security/api-shield/entitlements.tsx"),
				R = t("../../../../node_modules/yup/es/index.js"),
				b = t("../react/utils/translator.tsx");
			const M = () => (0, O.useSelector)(I.ui),
				T = "central_endpoint_list.endpoint_labels_allowed",
				S = "system-and-user-generated-labels",
				L = () => !!(0, N.Z)(S),
				G = () => !!(0, h.Z)(T),
				$ = () => {
					const Y = L(),
						ae = G();
					return {
						isLabelsGateOpen: Y,
						hasEndpointLabelsEntitlement: ae,
						hasLabels: Y && ae
					}
				},
				V = () => {
					const {
						hasApiShields: Y
					} = (0, E.R)(), {
						hasLabels: ae
					} = $(), de = (0, C.Dg)();
					return ae && de && Y
				},
				ce = () => {
					const {
						t: Y
					} = (0, b.QT)(), ae = R.Z_().required(Y("common.field_is_required")).max(24, Y("labels.apply.form.name.error.max_characters")).matches(I.DG, Y("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", Y("labels.apply.form.name.error.cf_forbidden"), Pe => !I.aW.test(Pe)), de = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: Pe => R.Ry().shape({
							[I.n5.NAME]: Pe ? R.Z_() : ae,
							[I.n5.DESCRIPTION]: Pe ? R.Z_().optional() : R.Z_().max(150, Y("labels.apply.form.description.error.max_characters"))
						})
					}, ye = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[I.N2.NAME]: "",
							[I.N2.SOURCE]: I.W3,
							[I.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => R.Ry().shape({
							[I.N2.NEW_LABEL_NAME]: ae
						})
					};
					return {
						LABELS_APPLY_FORM: de,
						EDIT_LABELS_MODAL_FORM: ye
					}
				},
				ee = ({
					modalHeaderFixedHeight: Y = 62,
					modalDefaultPaddings: ae = 16
				} = {}) => {
					const de = (0, _.useRef)(null),
						ye = (0, _.useRef)(null),
						[Pe, ze] = (0, _.useState)(0),
						[Ue, je] = (0, _.useState)(0),
						Ae = `calc(100vh - ${Pe}px - ${Ue}px - ${ae}px)`,
						[Re, Fe] = (0, _.useState)("");
					return (0, _.useEffect)(() => {
						const He = () => {
							var Ye, Ve, z, te;
							const he = de == null || (Ye = de.current) === null || Ye === void 0 ? void 0 : Ye.offsetHeight,
								De = ye == null || (Ve = ye.current) === null || Ve === void 0 ? void 0 : Ve.offsetHeight,
								Ne = ((z = he) !== null && z !== void 0 ? z : 0) + Y,
								Ke = (te = De) !== null && te !== void 0 ? te : 0;
							ze(Ne), je(Ke)
						};
						return He(), window.addEventListener("resize", He), () => window.removeEventListener("resize", He)
					}, []), {
						searchTerm: Re,
						setSearchTerm: Fe,
						scrollableSectionMaxHeight: Ae,
						topMenuRef: de,
						bottomMenuRef: ye
					}
				},
				J = Y => {
					const ae = M(),
						de = (0, e.useQueryClient)(),
						ye = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${Y}`,
							queryFn: () => s(Y),
							enabled: ae
						}),
						Pe = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${Y}`,
							queryFn: () => c(Y),
							enabled: ae && !!(ye == null ? void 0 : ye.data)
						}),
						ze = (0, e.useMutation)({
							mutationFn: async ({
								enabled: Ae
							}) => await p(Y, Ae),
							onSuccess: Ae => {
								de.setQueryData([`content-scanning-enabled-${Y}`], Ae)
							}
						}),
						Ue = (0, e.useMutation)({
							mutationFn: Ae => m(Y, Ae),
							onSuccess: Ae => {
								de.setQueryData([`content-scanning-detections-${Y}`], Ae)
							}
						}),
						je = (0, e.useMutation)({
							mutationFn: Ae => i(Y, Ae),
							onSuccess: Ae => {
								var Re;
								const Fe = (Re = de.getQueryData(`content-scanning-detections-${Y}`)) !== null && Re !== void 0 ? Re : [];
								de.setQueryData([`content-scanning-detections-${Y}`], Fe.filter(({
									id: He
								}) => He !== Ae))
							}
						});
					return {
						entitled: ae,
						loading: ye.isLoading || Pe.isLoading,
						error: ye.isError || Pe.isError,
						enabled: {
							data: ye.data,
							toggleEnabled: async Ae => ze.mutateAsync({
								enabled: Ae
							})
						},
						detections: {
							data: Pe.data,
							add: Ue.mutateAsync,
							delete: je.mutateAsync,
							loading: Ue.isLoading || je.isLoading
						}
					}
				},
				ve = () => {
					const Y = (0, N.Z)(I.dC),
						ae = (0, O.useSelector)(I.cN),
						de = (0, O.useSelector)(I.bH),
						ye = (0, O.useSelector)(I.P3),
						Pe = (0, O.useSelector)(I.Ri);
					return {
						hasEditPermission: Y && ae,
						isEnabled: Y && ye && (de.hasSimilarLeaked || de.hasUsernameAndPasswordLeaked || Pe)
					}
				},
				ne = Y => {
					const ae = ve(),
						de = (0, e.useQueryClient)(),
						ye = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${Y}`,
							queryFn: () => d(Y),
							enabled: !!ae.isEnabled
						}),
						Pe = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${Y}`,
							queryFn: () => n(Y),
							enabled: !!ae.isEnabled && !!(ye == null ? void 0 : ye.data)
						}),
						ze = (0, e.useMutation)({
							mutationFn: ({
								enabled: Ae
							}) => y(Y, Ae),
							onSuccess: Ae => {
								de.setQueryData([`leaked-credentials-enabled-${Y}`], Ae)
							}
						}),
						Ue = (0, e.useMutation)({
							mutationFn: async Ae => await r(Y, Ae),
							onSuccess: Ae => {
								var Re;
								const Fe = (Re = de.getQueryData(`leaked-credentials-detections-${Y}`)) !== null && Re !== void 0 ? Re : [];
								de.setQueryData([`leaked-credentials-detections-${Y}`], [...Fe, Ae])
							}
						}),
						je = (0, e.useMutation)({
							mutationFn: Ae => a(Y, Ae),
							onSuccess: Ae => {
								var Re;
								const Fe = (Re = de.getQueryData(`leaked-credentials-detections-${Y}`)) !== null && Re !== void 0 ? Re : [];
								de.setQueryData([`leaked-credentials-detections-${Y}`], Fe.filter(({
									id: He
								}) => He !== Ae))
							}
						});
					return {
						entitled: ae.isEnabled,
						hasEditPermissions: ae.hasEditPermission,
						loading: ye.isLoading || Pe.isLoading,
						error: ye.isError || ye.isError,
						enabled: {
							data: ye.data,
							toggleEnabled: async Ae => ze.mutateAsync({
								enabled: Ae
							})
						},
						detections: {
							data: Pe.data,
							add: Ue.mutateAsync,
							delete: je.mutateAsync,
							loading: Ue.isLoading || je.isLoading
						}
					}
				};
			var U = t("../react/common/selectors/zoneSelectors.ts"),
				H = t("../react/common/utils/useQueryCache.ts"),
				oe = t("../react/app/redux/index.ts");
			const le = "security-txt",
				pe = {
					securityTxt: ({
						zoneId: Y
					}) => [le, Y]
				},
				Q = Y => (0, e.useQuery)({
					queryKey: pe.securityTxt({
						zoneId: Y
					}),
					queryFn: () => f(Y),
					select: ae => ae.result
				}),
				A = () => {
					const Y = (0, oe.p4)(U.Cu),
						{
							invalidate: ae
						} = (0, H.o)(pe.securityTxt({
							zoneId: Y
						}));
					return (0, e.useMutation)({
						mutationFn: () => l(Y),
						onSuccess: async () => {
							await ae(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				P = Y => {
					const {
						invalidate: ae
					} = (0, H.o)(pe.securityTxt({
						zoneId: Y
					}));
					return (0, e.useMutation)({
						mutationFn: de => u(Y, de),
						onSuccess: async () => {
							await ae(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var k = t("../../../../node_modules/lodash/isEqual.js"),
				K = t.n(k),
				re = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function Ce(Y) {
				for (var ae = 1; ae < arguments.length; ae++) {
					var de = arguments[ae] != null ? Object(arguments[ae]) : {},
						ye = Object.keys(de);
					typeof Object.getOwnPropertySymbols == "function" && ye.push.apply(ye, Object.getOwnPropertySymbols(de).filter(function(Pe) {
						return Object.getOwnPropertyDescriptor(de, Pe).enumerable
					})), ye.forEach(function(Pe) {
						Ie(Y, Pe, de[Pe])
					})
				}
				return Y
			}

			function Ie(Y, ae, de) {
				return ae = Me(ae), ae in Y ? Object.defineProperty(Y, ae, {
					value: de,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[ae] = de, Y
			}

			function Me(Y) {
				var ae = ke(Y, "string");
				return typeof ae == "symbol" ? ae : String(ae)
			}

			function ke(Y, ae) {
				if (typeof Y != "object" || Y === null) return Y;
				var de = Y[Symbol.toPrimitive];
				if (de !== void 0) {
					var ye = de.call(Y, ae || "default");
					if (typeof ye != "object") return ye;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ae === "string" ? String : Number)(Y)
			}
			const Z = Y => {
					const {
						queryKey: ae,
						zoneId: de
					} = (0, re.hL)(Y), {
						isLoading: ye,
						isError: Pe,
						isSuccess: ze,
						data: Ue,
						refetch: je,
						isRefetching: Ae
					} = (0, e.useQuery)({
						queryKey: ae,
						queryFn: () => re.Mi.getLabels(Ce({
							zoneId: de
						}, Y)),
						onSuccess: () => {
							var Re;
							const Fe = Y == null || (Re = Y.filters) === null || Re === void 0 ? void 0 : Re.source;
							(Fe === I.LABEL_SOURCES.MANAGED || Fe === I.LABEL_SOURCES.USER) && (0, I.Tf)({
								name: I.QJ.FILTER_USER_MANAGED_LABELS,
								product: I.Iv.SECURITY_SETTINGS,
								pageName: I.R.LABELS_LIST,
								type: Fe
							})
						}
					});
					return {
						data: Ue == null ? void 0 : Ue.result,
						errors: Ue == null ? void 0 : Ue.errors,
						paginationData: Ue == null ? void 0 : Ue.result_info,
						isLoading: ye,
						isError: Pe,
						isSuccess: ze,
						refetch: je,
						isRefetching: Ae
					}
				},
				fe = ({
					labels: Y,
					preselectedLabels: ae
				}) => {
					const {
						USER: de,
						MANAGED: ye
					} = I.LABEL_SOURCES, [Pe, ze] = (0, _.useState)({
						[de]: [],
						[ye]: []
					}), [Ue, je] = (0, _.useState)(new Set), Ae = Ue.size > 0, [Re, Fe] = (0, _.useState)(!1), He = te => {
						je(he => {
							const De = new Set(he);
							return De.has(te.name) ? De.delete(te.name) : De.add(te.name), De
						})
					}, Ye = te => Ue.has(te.name), Ve = (te, he) => {
						const De = Ye(te) ? 1 : 0;
						return (Ye(he) ? 1 : 0) - De
					}, z = te => {
						ze(he => ({
							[de]: [...te ? te[de] : he[de]].sort(Ve),
							[ye]: [...te ? te[ye] : he[ye]].sort(Ve)
						}))
					};
					return (0, _.useEffect)(() => {
						if (Y && !Re) {
							if (ae) {
								const te = new Set;
								Y.forEach(he => {
									ae.some(De => K()(De, he)) && te.add(he.name)
								}), je(te)
							}
							Fe(!0)
						}
					}, [Y, ae, Re]), (0, _.useEffect)(() => {
						if (Y && Re) {
							const te = Y.reduce((De, Ne) => (Ne.source === de ? De[de].push(Ne) : Ne.source === ye && De[ye].push(Ne), De), {
									[de]: [],
									[ye]: []
								}),
								he = {
									[de]: te[de].sort(Ve),
									[ye]: te[ye].sort(Ve)
								};
							ze(he)
						}
					}, [de, ye, Y, Re]), {
						userAndManagedLabels: Pe,
						setUserAndManagedLabels: ze,
						toggleSelectedLabel: He,
						isLabelSelected: Ye,
						sortLabelsBySelectedStatus: z,
						hasLabelsSelected: Ae
					}
				};
			var Le = t("../react/pages/security/settings/resources/selectors.ts");
			const Je = (Y = "") => {
				const ae = (0, oe.p4)(Le.Xs),
					de = ae && (Y == null ? void 0 : Y.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: ae,
					hasDeprecatedParameter: de
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				FQ: function() {
					return d.FQ
				},
				Iv: function() {
					return y.Iv
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
					return y.QJ
				},
				R: function() {
					return y.R
				},
				Tf: function() {
					return y.Tf
				},
				WR: function() {
					return d.WR
				},
				Xs: function() {
					return y.Xs
				},
				Xu: function() {
					return d.Xu
				},
				ZF: function() {
					return y.ZF
				},
				bE: function() {
					return d.bE
				},
				bH: function() {
					return y.bH
				},
				dC: function() {
					return y.dC
				},
				eC: function() {
					return y.eC
				},
				kU: function() {
					return d.kU
				},
				m8: function() {
					return y.m8
				},
				pf: function() {
					return d.pf
				},
				ui: function() {
					return y.ui
				},
				vE: function() {
					return d.vE
				},
				vc: function() {
					return y.vc
				},
				zF: function() {
					return y.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/app/components/Forbidden.jsx"),
				s = t("webpack/sharing/consume/default/react/react"),
				p = t.n(s),
				c = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = t.n(m),
				d = t("../react/pages/security/settings/hooks/index.ts"),
				y = t("../react/pages/security/settings/resources/index.ts");
			const n = p().lazy(() => Promise.all([t.e(37800), t.e(39074), t.e(2480), t.e(10008), t.e(73598), t.e(94012), t.e(24074), t.e(72019), t.e(27883), t.e(4e4), t.e(3391), t.e(68204), t.e(2515), t.e(60091), t.e(3538), t.e(77216), t.e(39760), t.e(94923), t.e(37685), t.e(40912), t.e(71449), t.e(9147), t.e(44753), t.e(20263), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				r = () => {
					const {
						t: a
					} = (0, m.useI18n)(), u = (0, e.xk)("waf");
					return p().createElement(c.T3, {
						parentPageLabel: a("navigation.zone.security"),
						title: a("navigation.zone.security.settings"),
						type: "narrow"
					}, u.read ? p().createElement(n, null) : p().createElement(o.Z, null))
				};
			v.ZP = r
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Mi: function() {
					return h
				},
				hL: function() {
					return I
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				s = t("../react/common/utils/useQueryCache.ts"),
				p = t("../react/pages/security/settings/resources/constants.ts"),
				c = t("../react/common/hooks/useAccountId.ts"),
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
			var y = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(E, C) {
				if (E == null) return {};
				var R = u(E, C),
					b, M;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(E);
					for (M = 0; M < T.length; M++) b = T[M], !(C.indexOf(b) >= 0) && (!Object.prototype.propertyIsEnumerable.call(E, b) || (R[b] = E[b]))
				}
				return R
			}

			function u(E, C) {
				if (E == null) return {};
				var R = {},
					b = Object.keys(E),
					M, T;
				for (T = 0; T < b.length; T++) M = b[T], !(C.indexOf(M) >= 0) && (R[M] = E[M]);
				return R
			}

			function l(E) {
				for (var C = 1; C < arguments.length; C++) {
					var R = arguments[C] != null ? Object(arguments[C]) : {},
						b = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(R).filter(function(M) {
						return Object.getOwnPropertyDescriptor(R, M).enumerable
					})), b.forEach(function(M) {
						f(E, M, R[M])
					})
				}
				return E
			}

			function f(E, C, R) {
				return C = _(C), C in E ? Object.defineProperty(E, C, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[C] = R, E
			}

			function _(E) {
				var C = O(E, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function O(E, C) {
				if (typeof E != "object" || E === null) return E;
				var R = E[Symbol.toPrimitive];
				if (R !== void 0) {
					var b = R.call(E, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(E)
			}
			const I = E => {
					const C = (0, e.p4)(o.Cu),
						R = (0, c.F)(),
						b = N.labels(l({
							accountId: R,
							zoneId: C
						}, E ? l({}, E) : {})),
						M = (0, s.o)(b);
					return l({
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
					getLabels: async E => {
						var C, R, b, M;
						let {
							zoneId: T,
							hideErrorAlert: S = !0
						} = E, L = a(E, ["zoneId", "hideErrorAlert"]);
						return (await m.get(d.labels.toUrl({
							zoneId: T
						}), {
							parameters: {
								page: L == null ? void 0 : L.page,
								per_page: L == null ? void 0 : L.per_page,
								with_mapped_resource_counts: L == null ? void 0 : L.with_mapped_resource_counts,
								filter: L == null || (C = L.filters) === null || C === void 0 ? void 0 : C.search,
								source: (0, n.sQ)(L == null || (R = L.filters) === null || R === void 0 ? void 0 : R.source),
								order: L == null || (b = L.sort) === null || b === void 0 ? void 0 : b.id,
								direction: (L == null ? void 0 : L.sort) ? (L == null || (M = L.sort) === null || M === void 0 ? void 0 : M.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: S
						})).body
					},
					getLabel: async E => {
						let {
							zoneId: C,
							labelName: R,
							hideErrorAlert: b = !0
						} = E, M = a(E, ["zoneId", "labelName", "hideErrorAlert"]);
						const T = (0, n.mm)(R) ? d.managedLabel.toUrl({
							zoneId: C,
							labelName: R
						}) : d.userLabel.toUrl({
							zoneId: C,
							labelName: R
						});
						return (await m.get(T, {
							parameters: {
								with_mapped_resource_counts: M == null ? void 0 : M.with_mapped_resource_counts
							},
							hideErrorAlert: b
						})).body
					},
					editLabel: async ({
						zoneId: E,
						label: C,
						replace: R
					}) => {
						const {
							name: b
						} = C, M = a(C, ["name"]);
						return (await (R ? m.put : m.patch)(d.userLabel.toUrl({
							zoneId: E,
							labelName: C.name
						}), {
							body: M
						})).body
					},
					deleteLabel: async ({
						zoneId: E,
						labelName: C
					}) => (await m.del(d.userLabel.toUrl({
						zoneId: E,
						labelName: C
					}))).body,
					createLabel: async E => {
						let {
							zoneId: C
						} = E, R = a(E, ["zoneId"]);
						const {
							product: b
						} = R, M = a(R, ["product"]);
						return (await m.post(d.userLabels.toUrl({
							zoneId: C
						}), {
							body: [M]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: E,
						user: C,
						managed: R,
						operationIds: b,
						replace: M
					}) => (await (M ? m.put : m.post)(d.operationsLinkedToLabels.toUrl({
						zoneId: E
					}), {
						body: l({}, C ? {
							user: {
								labels: C
							}
						} : {}, R ? {
							managed: {
								labels: R
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
						zoneId: E,
						labelName: C,
						operationIds: R
					}) => {
						const b = (0, n.mm)(C) ? d.managedLabelOperations.toUrl({
							zoneId: E,
							labelName: C
						}) : d.userLabelOperations.toUrl({
							zoneId: E,
							labelName: C
						});
						return (await m.put(b, {
							body: {
								selector: {
									include: {
										operation_ids: R
									}
								}
							}
						})).body
					}
				},
				N = {
					labels: E => {
						let {
							accountId: C,
							zoneId: R
						} = E, b = a(E, ["accountId", "zoneId"]);
						return [p.IQ.LABELS, C, R, ...(0, y.isEmpty)(b) ? [] : [b]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				DG: function() {
					return _
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return i
				},
				GE: function() {
					return R
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
					return c
				},
				QH: function() {
					return l
				},
				V: function() {
					return N
				},
				W3: function() {
					return s
				},
				_8: function() {
					return a
				},
				_c: function() {
					return E
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
					return I
				},
				om: function() {
					return y
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
			const s = "all";
			let p = function(T) {
					return T.LABELS = "labels", T
				}({}),
				c = function(T) {
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
				y = function(T) {
					return T.NAME = "name", T.MAPPED_RESOURCES = "mapped_resources.operations", T.SOURCE = "source", T.APPLY = "apply", T
				}({});
			const a = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: y.NAME,
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
			let u = function(T) {
				return T.CREATED_LABEL = "createdLabel", T.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", T.DELETED_LABEL = "deletedLabel", T.APPLIED_LABEL = "appliedLabel", T.EDITED_LABEL = "editedLabel", T.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", T
			}({});
			const l = "650px",
				f = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				_ = /^[A-Za-z0-9-]+$/,
				O = /^cf-/;
			let I = function(T) {
				return T.NAME = "name", T.DESCRIPTION = "description", T
			}({});
			const h = "all";
			let N = function(T) {
				return T.METHOD = "method", T.HOSTNAME = "hostname", T
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
						[N.METHOD]: h,
						[N.HOSTNAME]: h
					}
				},
				filters: N
			};
			let C = function(T) {
				return T.TITLE = "title", T.DESCRIPTION = "description", T.SUBMIT = "submit", T
			}({});
			const R = 1e3,
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
		"../react/pages/security/settings/resources/index.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
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
					return n
				},
				LABEL_SOURCES: function() {
					return e.LABEL_SOURCES
				},
				eC: function() {
					return l
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
					return I.Xs
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
					return I.bH
				},
				Mb: function() {
					return s.Mb
				},
				ui: function() {
					return I.ui
				},
				P3: function() {
					return I.P3
				},
				Ri: function() {
					return I.Ri
				},
				cN: function() {
					return I.cN
				},
				m8: function() {
					return O
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
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(p);

			function m(h) {
				for (var N = 1; N < arguments.length; N++) {
					var E = arguments[N] != null ? Object(arguments[N]) : {},
						C = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(E).filter(function(R) {
						return Object.getOwnPropertyDescriptor(E, R).enumerable
					})), C.forEach(function(R) {
						i(h, R, E[R])
					})
				}
				return h
			}

			function i(h, N, E) {
				return N = d(N), N in h ? Object.defineProperty(h, N, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[N] = E, h
			}

			function d(h) {
				var N = y(h, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function y(h, N) {
				if (typeof h != "object" || h === null) return h;
				var E = h[Symbol.toPrimitive];
				if (E !== void 0) {
					var C = E.call(h, N || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(h)
			}
			let n = function(h) {
					return h.LABELS_LIST = "Labels List page", h.LABELS_APPLY = "Labels Apply page", h.LABELS_SIDE_MODAL = "Labels Side Modal", h.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", h.LABELS_OPERATION_DETAILS = "Operation Details page", h
				}({}),
				r = function(h) {
					return h.API_SHIELD = "API Shield", h.SECURITY_SETTINGS = "Security Settings", h
				}({}),
				a = function(h) {
					return h.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", h.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", h.OPERATIONS_TABLE_ROW = "Operations table row", h.OPERATION_DETAILS_PAGE = "Operation details page", h
				}({}),
				u = function(h) {
					return h.UPSERT = "upsert", h.OVERWRITE = "overwrite", h
				}({}),
				l = function(h) {
					return h.SINGLE = "single", h.MULTIPLE = "multiple", h
				}({}),
				f = function(h) {
					return h.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", h.DELETE_LABEL = "delete a user label in the settings page", h.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", h.CREATE_LABEL_CLICKED = "click create label button in the settings page", h.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", h.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", h.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", h.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", h.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", h.OPEN_LABELS_SIDE_MODAL = "open labels side modal", h.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", h.CREATE_NEW_LABEL = "create a new label", h
				}({});
			const _ = ({
					name: h,
					product: N,
					category: E = "user journey",
					pageName: C,
					from: R,
					write_strategy: b,
					type: M,
					target: T
				}) => {
					c().sendEvent(h, m({
						category: E,
						pageName: C,
						product: N
					}, R ? {
						from: R
					} : {}, b ? {
						write_strategy: b
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
			var I = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				P3: function() {
					return d
				},
				Ri: function() {
					return y
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
				p = t("../react/pages/security/settings/resources/constants.ts"),
				c = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const m = a => {
					const u = (0, e.RO)(a),
						l = !!(0, s.rV)(a, "rulesets.file_upload_scan_allowed"),
						f = !!(0, s.BF)(a, "rulesets.file_upload_scan_allowed");
					return (0, o.el)(window.location.pathname) ? u && (l || f) : f
				},
				i = a => Number((0, s.rV)(a, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				d = a => (0, s.rV)(a, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				y = a => (0, s.rV)(a, "rulesets.leaked_credential_checks_allowed"),
				n = a => (0, c.z1)(p.dC)(a) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, s.rV)(a, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, s.rV)(a, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				r = a => !!(0, c.z1)("deprecate-security-level")(a)
		},
		"../react/pages/security/settings/resources/types.ts": function(j, v, t) {
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
		"../react/pages/security/settings/resources/utils.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				$E: function() {
					return a
				},
				Mb: function() {
					return u
				},
				N2: function() {
					return N
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
					return l
				},
				mm: function() {
					return h
				},
				sQ: function() {
					return I
				},
				vc: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				s = t("../react/pages/security/settings/routes.tsx"),
				p = t("../react/pages/security/settings/resources/constants.ts"),
				c = t("../react/pages/security/settings/resources/types.ts"),
				m = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function i(E) {
				for (var C = 1; C < arguments.length; C++) {
					var R = arguments[C] != null ? Object(arguments[C]) : {},
						b = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(R).filter(function(M) {
						return Object.getOwnPropertyDescriptor(R, M).enumerable
					})), b.forEach(function(M) {
						d(E, M, R[M])
					})
				}
				return E
			}

			function d(E, C, R) {
				return C = y(C), C in E ? Object.defineProperty(E, C, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[C] = R, E
			}

			function y(E) {
				var C = n(E, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function n(E, C) {
				if (typeof E != "object" || E === null) return E;
				var R = E[Symbol.toPrimitive];
				if (R !== void 0) {
					var b = R.call(E, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(E)
			}
			const r = {
					[c.T.ENABLED]: !0,
					[c.T.CONTACT]: [""],
					[c.T.EXPIRES]: ""
				},
				a = {
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
				u = E => e.Ry({
					[c.T.CONTACT]: e.IX().of(e.Z_().required(E("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, E("security_txt.fields.contact.format_error"))),
					[c.T.EXPIRES]: e.hT().required(E("common.required")).min(new Date, E("security_txt.fields.expires.min_error"))
				}),
				l = E => {
					const C = {};
					for (const R in E) C[R] = Array.isArray(E[R]) ? E[R].filter(b => !!b) : E[R];
					return i({}, C, {
						expires: (0, m.DZ)(E.expires)
					})
				},
				f = (E, C, R) => {
					const b = [...new Set([c.T.CONTACT, c.T.EXPIRES, ...Object.values(c.T)])],
						M = Object.entries(E).sort(([T], [S]) => b.indexOf(T) - b.indexOf(S)).filter(([T, S]) => !!a[T] && !!S && (!Array.isArray(S) || !!S.length)).map(([T, S]) => Array.isArray(S) ? S.map(L => `${R(a[T].label)}: ${L}`).join(`
`) : `${R(a[T].label)}: ${S}`).join(`
`);
					(0, o.yH)(`Cloudflare_${C}_security.txt`, M, "text/plain;charset=utf-8")
				};
			let _ = function(E) {
				return E.CREATED = "created security.txt", E.ENABLED = "enabled security.txt", E.DISABLED = "disabled security.txt", E.DOWNLOADED = "downloaded security.txt", E.UPDATED = "updated security.txt", E.DELETED = "deleted security.txt", E
			}({});
			const O = E => (E == null ? void 0 : E.source) === p.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (E == null ? void 0 : E.source) === p.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				I = E => E === p.W3 ? void 0 : E,
				h = E => p.aW.test(E),
				N = E => {
					switch (E) {
						case p.w.CONTENT_SCANNING:
							return s.Z.CONTENT_SCANNING;
						case p.w.EXPOSED_CREDENTIALS:
							return s.Z.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(j, v, t) {
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
		"../react/pages/shared-config/sparrowEvents.tsx": function(j, v, t) {
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
		"../react/pages/spectrum/tracking.tsx": function(j, v, t) {
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
		"../react/pages/stream/actionTypes.ts": function(j, v, t) {
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
		"../react/pages/stream/reducer.ts": function(j, v, t) {
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
				s = t("../react/pages/stream/util/pager.ts");

			function p(r) {
				for (var a = 1; a < arguments.length; a++) {
					var u = arguments[a] != null ? Object(arguments[a]) : {},
						l = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(u).filter(function(f) {
						return Object.getOwnPropertyDescriptor(u, f).enumerable
					})), l.forEach(function(f) {
						c(r, f, u[f])
					})
				}
				return r
			}

			function c(r, a, u) {
				return a = m(a), a in r ? Object.defineProperty(r, a, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = u, r
			}

			function m(r) {
				var a = i(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function i(r, a) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var l = u.call(r, a || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const d = "stream",
				y = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(r = y, a) {
				switch (a.type) {
					case o.U.ResetState:
						return y;
					case o.U.SetStorageLoading:
						const {
							storageLoading: u
						} = a;
						return p({}, r, {
							storageLoading: u
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
							videos: [a.video, ...r.videos].filter((l, f) => f < s.FJ)
						});
					case o.U.UpdateVideo:
						return p({}, r, {
							videos: r.videos.map(l => l.uid === a.video.uid ? a.video : l)
						});
					case o.U.UpdateVideoPending:
						return p({}, r, {
							videoUpdateStatuses: p({}, r.videoUpdateStatuses, {
								[a.uid]: a.status
							})
						});
					case o.U.RemoveVideos:
						return p({}, r, {
							videos: r.videos.filter(l => !a.ids.includes(l.uid))
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
		"../react/pages/stream/selectors.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Id: function() {
					return p
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return c
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
					return l
				},
				bM: function() {
					return i
				},
				bO: function() {
					return a
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
					return y
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/pages/stream/reducer.ts");
			const p = O => O[s.nY],
				c = O => p(O).videos,
				m = O => p(O).videoUpdateStatuses,
				i = O => p(O).loading,
				d = O => p(O).requestTimestamp,
				y = O => p(O).storageLoading,
				n = O => p(O).storage,
				r = O => (0, o.BF)(O, "stream.enabled") || (0, e.bC)(O),
				a = O => (0, e.Le)(O, "stream", "connect"),
				u = O => (0, e.Le)(O, "stream", "stream-4371"),
				l = O => (0, e.Le)(O, "stream", "public-details-enabled"),
				f = O => !!(0, e.Le)(O, "stream", "llhls"),
				_ = O => {
					const I = n(O);
					return I !== void 0 && I.limitMins > I.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(j, v, t) {
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

			function o(p, c, m) {
				const i = {
					search: m,
					limit: e.toString()
				};
				return c !== void 0 && (i.end = c), i
			}

			function s(p, c, m) {
				return {
					limit: e.toString(),
					search: m,
					asc: "true",
					start_comp: "gt",
					start: c
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(j, v, t) {
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
		"../react/pages/traffic/load-balancing/tracking.ts": function(j, v, t) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				N: function() {
					return s
				},
				X: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let s = function(c) {
				return c.CREATE = "create waiting room", c.UPDATE = "update waiting room", c.EVENTS = "view waiting rooms events", c.ANALYTICS = "view waiting room analytics", c.GENERATE_PREVIEW = "generate waiting room preview link", c
			}({});
			const p = async c => {
				await o().sendEvent(c, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				N3: function() {
					return d
				},
				P: function() {
					return n
				},
				Xh: function() {
					return y
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var u = arguments[a] != null ? Object(arguments[a]) : {},
						l = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(u).filter(function(f) {
						return Object.getOwnPropertyDescriptor(u, f).enumerable
					})), l.forEach(function(f) {
						p(r, f, u[f])
					})
				}
				return r
			}

			function p(r, a, u) {
				return a = c(a), a in r ? Object.defineProperty(r, a, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = u, r
			}

			function c(r) {
				var a = m(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(r, a) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var l = u.call(r, a || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const i = "TURNSTILE";
			let d = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const y = ({
					name: r,
					product: a = i,
					category: u = "user journey",
					page: l,
					additionalData: f = {}
				}) => {
					o().sendEvent(r, s({
						category: u,
						page: l,
						product: a
					}, f || {}))
				},
				n = () => {
					var r;
					return (r = Object.values(d)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(j, v, t) {
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
		"../react/pages/zone-versioning/selectors.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				$e: function() {
					return R
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
					return N
				},
				iw: function() {
					return u
				},
				m7: function() {
					return n
				},
				re: function() {
					return E
				},
				tp: function() {
					return l
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				o = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/app/components/SidebarNav/permissions.ts"),
				c = t("../react/common/selectors/entitlementsSelectors.ts");

			function m(S) {
				for (var L = 1; L < arguments.length; L++) {
					var G = arguments[L] != null ? Object(arguments[L]) : {},
						$ = Object.keys(G);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(G).filter(function(V) {
						return Object.getOwnPropertyDescriptor(G, V).enumerable
					})), $.forEach(function(V) {
						i(S, V, G[V])
					})
				}
				return S
			}

			function i(S, L, G) {
				return L = d(L), L in S ? Object.defineProperty(S, L, {
					value: G,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[L] = G, S
			}

			function d(S) {
				var L = y(S, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function y(S, L) {
				if (typeof S != "object" || S === null) return S;
				var G = S[Symbol.toPrimitive];
				if (G !== void 0) {
					var $ = G.call(S, L || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(S)
			}
			const n = S => (0, s.nA)(S) ? (0, c.p1)(S) && (0, p.$n)(S, "zone_versioning", "versioning") : !1,
				r = S => S.zoneVersioning.zoneApplications,
				a = (0, e.P1)("zoneApplications", r),
				u = S => S.zoneVersioning.zoneVersions,
				l = (0, e.P1)("zoneVersions", u),
				f = (0, o.P1)(l, S => {
					if (S) return S.filter(L => L.status == "V")
				}),
				_ = S => S.zoneVersioning.environments,
				O = S => S.zoneVersioning.environments.isRequesting,
				I = (0, e.P1)("environments", _),
				h = (0, o.P1)(a, S => {
					if (S) {
						if (S.length === 1) return S[0];
						S.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${S.length}`))
					}
					return null
				}),
				N = (0, o.P1)(I, S => S ? S.environments : []),
				E = S => {
					var L;
					return (L = S.zoneVersioning) === null || L === void 0 ? void 0 : L.zoneVersionSelector
				},
				C = (0, o.P1)(E, l, (S, L) => {
					if (!(S == null ? void 0 : S.isVersion) || !L) return null;
					const G = L.find($ => {
						if ($.version === S.selectedVersion && $.locked) return !0
					});
					return G ? m({}, G, {
						isLocked: !0
					}) : null
				}),
				R = (0, o.P1)(l, N, (S, L) => !L || !S ? [] : S.map(G => {
					const $ = [];
					for (const V in L) L[V].version === G.version && $.push(L[V]);
					return m({}, G, {
						environments: $
					})
				})),
				b = S => S.zoneVersioning.WAFMigrationStatus,
				M = (0, e.P1)("WAFMigrationStatus", b),
				T = S => S.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				$2: function() {
					return R
				},
				CI: function() {
					return E
				},
				IS: function() {
					return i
				},
				L7: function() {
					return c
				},
				Oj: function() {
					return a
				},
				QV: function() {
					return l
				},
				X$: function() {
					return h
				},
				X6: function() {
					return y
				},
				d4: function() {
					return u
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

			function e(b) {
				for (var M = 1; M < arguments.length; M++) {
					var T = arguments[M] != null ? Object(arguments[M]) : {},
						S = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(T).filter(function(L) {
						return Object.getOwnPropertyDescriptor(T, L).enumerable
					})), S.forEach(function(L) {
						o(b, L, T[L])
					})
				}
				return b
			}

			function o(b, M, T) {
				return M = s(M), M in b ? Object.defineProperty(b, M, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[M] = T, b
			}

			function s(b) {
				var M = p(b, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function p(b, M) {
				if (typeof b != "object" || b === null) return b;
				var T = b[Symbol.toPrimitive];
				if (T !== void 0) {
					var S = T.call(b, M || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(b)
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
						cpuLimits: "https://developers.cloudflare.com/workers/platform/limits/#cpu-runtime",
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
				y = {
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
				l = {
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
				O = "YYYY-MM-DD HH:mm:SS ZZ",
				I = "active",
				h = ["bundled", "unbound", "standard"],
				N = null,
				E = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let C = function(b) {
				return b[b.NONE = 0] = "NONE", b[b.MISS = 1] = "MISS", b[b.EXPIRED = 2] = "EXPIRED", b[b.UPDATING = 3] = "UPDATING", b[b.STALE = 4] = "STALE", b[b.HIT = 5] = "HIT", b[b.IGNORED = 6] = "IGNORED", b[b.BYPASS = 7] = "BYPASS", b[b.REVALIDATED = 8] = "REVALIDATED", b[b.DYNAMIC = 9] = "DYNAMIC", b[b.STREAM_HIT = 10] = "STREAM_HIT", b[b.DEFERRED = 11] = "DEFERRED", b
			}({});
			const R = [C.HIT, C.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
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
					return c
				},
				ky: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = d => `${d}.workers.dev`,
				s = (d, y, n) => `${n?`${n}.`:""}${d}.${o(y)}`,
				p = (d, y, n) => `https://${s(d,y,n)}`,
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
					kvRequestMetrics: (0, e.BC)`/accounts/${"accountId"}/storage/analytics`,
					kvStorageMetrics: (0, e.BC)`/accounts/${"accountId"}/storage/analytics/stored`,
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				MN: function() {
					return s
				},
				Yg: function() {
					return c
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
			const s = async ([i, d]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: i,
					variables: d
				})
			})).body, p = async (...i) => (await e.get(...i)).body, c = i => async (d, y) => {
				const n = await fetch(d, y).then(r => r.json());
				return i.assertDecode(n)
			}, m = async (...i) => (await p(...i)).result;
			v.ZP = {
				fetcher: i => Array.isArray(i) ? m(...i) : m(i)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(j, v) {
				v()
			})(this, function() {
				"use strict";

				function j() {
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

					function p(_) {
						return !!(_ && _ !== document && _.nodeName !== "HTML" && _.nodeName !== "BODY" && "classList" in _ && "contains" in _.classList)
					}

					function c(_) {
						var O = _.type,
							I = _.tagName;
						return !!(I == "INPUT" && s[O] && !_.readOnly || I == "TEXTAREA" && !_.readOnly || _.isContentEditable)
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

					function y(_) {
						t = !1
					}

					function n(_) {
						!p(_.target) || (t || c(_.target)) && m(_.target)
					}

					function r(_) {
						!p(_.target) || _.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), i(_.target))
					}

					function a(_) {
						document.visibilityState == "hidden" && (e && (t = !0), u())
					}

					function u() {
						document.addEventListener("mousemove", f), document.addEventListener("mousedown", f), document.addEventListener("mouseup", f), document.addEventListener("pointermove", f), document.addEventListener("pointerdown", f), document.addEventListener("pointerup", f), document.addEventListener("touchmove", f), document.addEventListener("touchstart", f), document.addEventListener("touchend", f)
					}

					function l() {
						document.removeEventListener("mousemove", f), document.removeEventListener("mousedown", f), document.removeEventListener("mouseup", f), document.removeEventListener("pointermove", f), document.removeEventListener("pointerdown", f), document.removeEventListener("pointerup", f), document.removeEventListener("touchmove", f), document.removeEventListener("touchstart", f), document.removeEventListener("touchend", f)
					}

					function f(_) {
						_.target.nodeName.toLowerCase() !== "html" && (t = !1, l())
					}
					document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", y, !0), document.addEventListener("pointerdown", y, !0), document.addEventListener("touchstart", y, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", a, !0), u(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function v(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && v(j)
			})
		},
		"../react/utils/bootstrap.ts": function(j, v, t) {
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
					return s
				}
			});
			const e = () => {
					var c, m, i;
					return (c = window) === null || c === void 0 || (m = c.bootstrap) === null || m === void 0 || (i = m.data) === null || i === void 0 ? void 0 : i.security_token
				},
				o = () => {
					var c, m, i;
					return !!((c = t.g.bootstrap) === null || c === void 0 || (m = c.data) === null || m === void 0 || (i = m.user) === null || i === void 0 ? void 0 : i.id)
				},
				s = () => {
					var c, m;
					return !!((c = t.g.bootstrap) === null || c === void 0 || (m = c.data) === null || m === void 0 ? void 0 : m.is_kendo)
				},
				p = () => {
					var c, m, i, d;
					return (c = window) === null || c === void 0 || (m = c.bootstrap) === null || m === void 0 || (i = m.data) === null || i === void 0 || (d = i.user) === null || d === void 0 ? void 0 : d.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
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
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				s = () => (o() || "").indexOf("C0002") !== -1,
				p = () => (o() || "").indexOf("C0003") !== -1,
				c = () => (o() || "").indexOf("C0004") !== -1,
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
				y = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				AI: function() {
					return N
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
					return E
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
					return l
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				s = t("../../../common/intl/intl-types/src/index.ts"),
				p = t("../../../common/util/types/src/utils/index.ts"),
				c = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m = t("../../../../node_modules/cookie/index.js");
			const i = "cf-sync-locale-with-cps",
				d = s.Q.en_US,
				y = "en_US",
				n = "cf-locale";

			function r() {
				const M = (0, m.parse)(document.cookie);
				return c.Z.get(n) || M[n] || null
			}

			function a(M) {
				document.cookie = (0, m.serialize)(n, M, {
					path: "/",
					maxAge: 31536e3
				}), c.Z.set(n, M)
			}

			function u() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const l = M => (0, p.Yd)(s.Q).find(T => s.Q[T] === M) || y,
				f = [],
				_ = [],
				O = [s.Q.de_DE, s.Q.en_US, s.Q.es_ES, s.Q.fr_FR, s.Q.it_IT, s.Q.pt_BR, s.Q.ko_KR, s.Q.ja_JP, s.Q.zh_CN, s.Q.zh_TW],
				I = {
					test: [...O, ..._, ...f],
					development: [...O, ..._, ...f],
					staging: [...O, ..._, ...f],
					production: [...O, ..._]
				},
				h = M => {
					const T = s.Q[M];
					return I.production.includes(T)
				},
				N = () => Object.keys(s.Q).filter(M => h(M)),
				E = M => {
					const T = s.Q[M];
					return _.includes(T)
				},
				C = M => R[M],
				R = {
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
		"../react/utils/translator.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				QT: function() {
					return l
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
					return a
				},
				oc: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = t("../../../common/intl/intl-core/src/Translator.ts"),
				s = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				p = t.n(s),
				c = t("../flags.ts");
			const m = new o.Z({
				pseudoLoc: (0, c.J8)("is_pseudo_loc")
			});

			function i(f, ..._) {
				return m.t(f, ..._)
			}
			const d = m;

			function y(f, ..._) {
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
			const a = s.Trans,
				u = s.I18n,
				l = s.useI18n
		},
		"../react/utils/url.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Ct: function() {
					return E
				},
				Fl: function() {
					return le
				},
				KT: function() {
					return Q
				},
				NF: function() {
					return _
				},
				Nw: function() {
					return h
				},
				Pd: function() {
					return I
				},
				Uh: function() {
					return U
				},
				Y_: function() {
					return f
				},
				e1: function() {
					return N
				},
				el: function() {
					return G
				},
				hW: function() {
					return V
				},
				pu: function() {
					return pe
				},
				qR: function() {
					return L
				},
				td: function() {
					return O
				},
				uW: function() {
					return ee
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				p = t("../react/pages/stream/routes.ts"),
				c = t("../react/pages/r2/routes.ts"),
				m = t("../react/pages/zoneless-workers/routes.ts"),
				i = t("../react/pages/pages/routes.ts"),
				d = t("../react/pages/d1/routes.ts");

			function y(A) {
				for (var P = 1; P < arguments.length; P++) {
					var k = arguments[P] != null ? Object(arguments[P]) : {},
						K = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && K.push.apply(K, Object.getOwnPropertySymbols(k).filter(function(re) {
						return Object.getOwnPropertyDescriptor(k, re).enumerable
					})), K.forEach(function(re) {
						n(A, re, k[re])
					})
				}
				return A
			}

			function n(A, P, k) {
				return P = r(P), P in A ? Object.defineProperty(A, P, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[P] = k, A
			}

			function r(A) {
				var P = a(A, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function a(A, P) {
				if (typeof A != "object" || A === null) return A;
				var k = A[Symbol.toPrimitive];
				if (k !== void 0) {
					var K = k.call(A, P || "default");
					if (typeof K != "object") return K;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(A)
			}
			const {
				endsWithSlash: u
			} = s.default, l = (A, P) => {
				const k = A.replace(u, "").split("/");
				return k.slice(0, 2).concat([P]).concat(k.slice(3)).join("/")
			}, f = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), _ = A => `/${A.replace(u,"").replace(/^\//,"")}`, O = A => h("add-site", A), I = A => h("billing", A), h = (A, P) => P ? `/${P}${A?`/${A}`:""}` : `/?to=/:account/${A}`, N = () => {
				const A = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return A ? A[1] : null
			}, E = (A, P) => o().stringify(y({}, o().parse(A), P)), C = (A = "") => A.toString().replace(/([\/]{1,})$/, ""), R = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], b = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, M = /^\/(\w{32,})(\/[^.]*)?/, T = A => R.includes(A), S = A => !T(A), L = A => !T(A) && M.test(A), G = A => !T(A) && b.test(A), $ = A => b.exec(A), V = A => {
				if (G(A)) return A.split("/").filter(P => P.length > 0)[1]
			}, ce = A => M.exec(A), ee = A => {
				if (L(A)) {
					const P = ce(A);
					if (P) return P[1]
				}
			}, J = A => L(A) && A.split("/")[2] === "register-domain", ve = A => J(A) ? A.split("/") : null, ne = A => {
				if (G(A)) {
					const [, , , P, k, K, re, Ce] = A.split("/");
					return P === "traffic" && k === "load-balancing" && K === "pools" && re === "edit" && Ce
				}
			}, U = A => {
				const P = ve(A);
				if (P) return P[3]
			}, H = (A, P) => {
				var k, K;
				return ((k = A.pattern.match(/\:/g)) !== null && k !== void 0 ? k : []).length - ((K = P.pattern.match(/\:/g)) !== null && K !== void 0 ? K : []).length
			}, oe = [...Object.values(p.C), ...Object.values(c._j), ...Object.values(m._j), ...Object.values(i._j), ...Object.values(d._)].sort(H);

			function le(A) {
				if (!S(A)) return A;
				for (const Ce of oe)
					if (Ce.expression.test(A)) return Ce.pattern;
				const P = ve(A);
				if (P) {
					const [, , Ce, , ...Ie] = P;
					return `/:accountId/${Ce}/:domainName/${Ie.join("/")}`
				}
				if (ne(A)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const K = $(A);
				if (K) {
					const [, , , , Ce] = K;
					return `/:accountId/:zoneName${Ce||""}`
				}
				const re = ce(A);
				if (re) {
					const [, , Ce] = re;
					return `/:accountId${Ce||""}`
				}
				return A
			}

			function pe(A) {
				if (!!A) try {
					const k = A.split(".").pop();
					if (k && k.length > 0) return k
				} catch {}
			}

			function Q(A, P = document.location.href) {
				try {
					const k = new URL(A),
						K = new URL(P);
					if (k.origin === K.origin) return `${k.pathname}${k.search}${k.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				r: function() {
					return d
				},
				y: function() {
					return y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				p = t("../react/common/hooks/useGate.ts"),
				c = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				m = t.n(c);
			const i = /^\/domainconnect\/v2\/domaintemplates\//i,
				d = "domain-connect-redirect",
				y = () => {
					const n = !!(0, p.Z)("domain-connect-redirect-gate"),
						r = (0, c.useLocation)();
					(0, e.useEffect)(() => {
						!n || i.test(r.pathname) && s.Z.set(d, r, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(j, v, t) {
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
		"../react/utils/zoneLevelAccess.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				P: function() {
					return p
				},
				b: function() {
					return c
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				o = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function s() {
				var m, i, d, y, n, r;
				return (m = window) === null || m === void 0 || (i = m.bootstrap) === null || i === void 0 || (d = i.data) === null || d === void 0 || (y = d.user) === null || y === void 0 || (n = y.betas) === null || n === void 0 || (r = n.some) === null || r === void 0 ? void 0 : r.call(n, a => a === "zone_level_access_beta")
			}

			function p() {
				const m = !!(0, e.Z)("zone-level-access");
				return s() || m
			}

			function c(m) {
				const i = !!(0, o.z1)("zone-level-access")(m);
				return s() || i
			}
		},
		"../utils/getDashVersion.ts": function(j, v, t) {
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
					var p, c;
					return (p = window) === null || p === void 0 || (c = p.build) === null || c === void 0 ? void 0 : c.dashVersion
				},
				s = () => {
					var p;
					return ((0, e.parse)((p = document) === null || p === void 0 ? void 0 : p.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Wi: function() {
					return W
				},
				IM: function() {
					return it
				},
				yV: function() {
					return Qe
				},
				Ug: function() {
					return Te
				},
				v_: function() {
					return at
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				s = t("../react/utils/bootstrap.ts"),
				p = t("../react/app/providers/storeContainer.js"),
				c = t("../react/common/selectors/languagePreferenceSelector.ts"),
				m = t("../flags.ts"),
				i = t("../../../../node_modules/cookie/index.js"),
				d = t("../react/utils/url.ts"),
				y = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../../../../node_modules/lodash-es/memoize.js"),
				a = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				u = t("../utils/getDashVersion.ts"),
				l = t("../react/common/selectors/accountSelectors.ts"),
				f = t("../react/common/selectors/entitlementsSelectors.ts");

			function _(F) {
				for (var X = 1; X < arguments.length; X++) {
					var ie = arguments[X] != null ? Object(arguments[X]) : {},
						ge = Object.keys(ie);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(ie).filter(function(be) {
						return Object.getOwnPropertyDescriptor(ie, be).enumerable
					})), ge.forEach(function(be) {
						O(F, be, ie[be])
					})
				}
				return F
			}

			function O(F, X, ie) {
				return X = I(X), X in F ? Object.defineProperty(F, X, {
					value: ie,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[X] = ie, F
			}

			function I(F) {
				var X = h(F, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function h(F, X) {
				if (typeof F != "object" || F === null) return F;
				var ie = F[Symbol.toPrimitive];
				if (ie !== void 0) {
					var ge = ie.call(F, X || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)(F)
			}
			const N = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional
				})),
				E = (0, r.Z)(F => {
					try {
						return N.assertDecode((0, i.parse)(F))
					} catch (X) {
						return console.error(X), {}
					}
				}),
				C = F => (X, ie, ge) => {
					try {
						const _e = window.location.pathname,
							Be = (0, p.bh)().getState(),
							$e = E(document.cookie),
							et = _({
								page: (0, d.Fl)(ge.page || window.location.pathname),
								dashVersion: (0, u.t)()
							}, $e);
						if (X === "identify") {
							var be, xe;
							const ot = {
								gates: (0, a.T2)(Be) || {},
								country: (be = t.g) === null || be === void 0 || (xe = be.bootstrap) === null || xe === void 0 ? void 0 : xe.ip_country
							};
							return F(X, ie, _({}, et, ot, ge))
						} else {
							const ot = {
								accountId: (0, d.uW)(_e),
								zoneName: (0, d.hW)(_e),
								domainName: (0, d.Uh)(_e)
							};
							if ((0, d.qR)(_e)) {
								var x;
								const Ge = (0, l.D0)(Be);
								ot.isEntAccount = !!(Ge == null || (x = Ge.meta) === null || x === void 0 ? void 0 : x.has_enterprise_zones) || (0, f.p1)(Be)
							}
							if ((0, d.el)(_e)) {
								var me;
								const Ge = (0, y.nA)(Be);
								ot.zoneId = Ge == null ? void 0 : Ge.id, ot.plan = Ge == null || (me = Ge.plan) === null || me === void 0 ? void 0 : me.legacy_id
							}
							return F(X, ie, _({}, et, ot, ge))
						}
					} catch (_e) {
						return console.error(_e), F(X, ie, ge)
					}
				},
				R = F => async (X, ie, ge) => {
					try {
						return await F(X, ie, ge)
					} catch (be) {
						if (console.error(be), !at()) throw be;
						return {
							status: "rejected",
							reason: be
						}
					}
				};
			var b = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				M = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				T = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				S = t("../react/common/middleware/sparrow/errors.ts"),
				L = t("../react/pages/caching/tracking.tsx"),
				G = t("../react/pages/dns/dns-records/tracking.ts"),
				$ = t("../react/pages/home/alerts/tracking.ts"),
				V = t("../react/pages/home/configurations/lists/tracking.ts"),
				ce = t("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				ee = t("../react/pages/home/domain-registration/tracking.ts"),
				J = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				ve = t("../react/pages/hyperdrive/tracking.ts"),
				ne = t("../react/pages/magic/network-monitoring/constants.ts"),
				U = t("../react/pages/magic/overview/tracking.ts"),
				H = t("../react/pages/magic/packet-captures/constants.ts"),
				oe = t("../react/pages/page-rules/tracking.ts"),
				le = t("../react/pages/pages/constants.ts"),
				pe = t("../react/pages/pipelines/tracking.ts"),
				Q = t("../react/pages/security-center/BlockedContent/constants.ts"),
				A = t("../react/pages/security-center/tracking.ts"),
				P = t("../react/pages/security/api-shield/tracking.ts"),
				k = t("../react/pages/security/bots/tracking.ts"),
				K = t("../react/pages/security/resources/constants.tsx"),
				re = t("../react/pages/security/page-shield/resources/index.ts"),
				Ce = t("../react/pages/security/security-analytics/logs/constants.ts"),
				Ie = t("../react/pages/security/settings/index.tsx"),
				Me = t("../react/pages/shared-config/sparrowEvents.tsx"),
				ke = t("../react/pages/spectrum/tracking.tsx"),
				Z = t("../react/pages/traffic/argo/tracking.ts"),
				fe = t("../react/pages/traffic/load-balancing/tracking.ts"),
				Le = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Je = t("../react/pages/turnstile/tracking.ts"),
				Y = t("../react/pages/zoneless-workers/constants.ts"),
				ae = t("../react/app/components/AccountHome/tracking.ts");
			const ye = ((F, X, ...ie) => n.eg.union([n.eg.literal(F), n.eg.literal(X), ...ie.map(ge => n.eg.literal(ge))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", ae.gX.SPARROW_PROJECTS_TABLE_CLICK, ae.gX.SPARROW_EMPTY_STATE_CTA_CLICK, ae.gX.SPARROW_PRODUCT_CARD_CLICK, ae.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Y.QV.clickedDownloadAnalytics, Y.QV.clickedPrintAnalytics, Y.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Y.QV.addWCITriggerToExistingWorker, Y.QV.updateWCITrigger, Y.QV.deleteWCITrigger, Y.QV.addWCITriggerToNewWorker, Y.QV.createWCIBuildForNewWorker, Y.QV.changedDefaultConfigurations, le.QV.toggledPagesSmartPlacement, le.QV.downloadDemoProject, Y.QV.clickCreateWorkerFromRepoNextStep, Y.QV.clickCreateWorkerFromRepoPreviousStep, Y.QV.clickCreateNewSCMConnection, Y.QV.redirectFromSCMOAuth, Y.QV.clickSubmitError, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", k.N3.INITIAL_FETCH_SCORES, k.N3.FETCH_CONFIGURATION, k.N3.INITIAL_FETCH_TIME_SERIES, k.N3.INITIAL_FETCH_ATTRIBUTES, k.N3.UPDATE_SETTINGS, k.N3.DELETE_RULE, k.N3.UPDATE_RULE, k.N3.FETCH_RULES, k.N3.CONFIGURE_BOT_MANAGEMENT, k.N3.WAF_RULES_REDIRECT, J.F.TOGGLE_TCP_PROTECTION, J.F.GET_TCP_PROTECTION_PREFIXES, J.F.CREATE_TCP_PROTECTION_PREFIXES, J.F.CREATE_TCP_PROTECTION_PREFIX, J.F.UPDATE_TCP_PROTECTION_PREFIX, J.F.DELETE_TCP_PROTECTION_PREFIX, J.F.DELETE_TCP_PROTECTION_PREFIXES, J.F.GET_TCP_PROTECTION_ALLOWLIST, J.F.CREATE_TCP_PROTECTION_ALLOWLIST, J.F.UPDATE_TCP_PROTECTION_ALLOWLIST, J.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, J.F.DELETE_TCP_PROTECTION_ALLOWLIST, J.F.GET_SYN_PROTECTION_RULES, J.F.GET_SYN_PROTECTION_RULE, J.F.CREATE_SYN_PROTECTION_RULE, J.F.UPDATE_SYN_PROTECTION_RULE, J.F.DELETE_SYN_PROTECTION_RULE, J.F.GET_TCP_FLOW_PROTECTION_RULES, J.F.GET_TCP_FLOW_PROTECTION_RULE, J.F.CREATE_TCP_FLOW_PROTECTION_RULE, J.F.UPDATE_TCP_FLOW_PROTECTION_RULE, J.F.DELETE_TCP_FLOW_PROTECTION_RULE, J.F.GET_SYN_PROTECTION_FILTERS, J.F.GET_SYN_PROTECTION_FILTER, J.F.CREATE_SYN_PROTECTION_FILTER, J.F.UPDATE_SYN_PROTECTION_FILTER, J.F.DELETE_SYN_PROTECTION_FILTER, J.F.GET_TCP_FLOW_PROTECTION_FILTERS, J.F.GET_TCP_FLOW_PROTECTION_FILTER, J.F.CREATE_TCP_FLOW_PROTECTION_FILTER, J.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, J.F.DELETE_TCP_FLOW_PROTECTION_FILTER, J.F.GET_DNS_PROTECTION_RULES, J.F.GET_DNS_PROTECTION_RULE, J.F.CREATE_DNS_PROTECTION_RULE, J.F.UPDATE_DNS_PROTECTION_RULE, J.F.DELETE_DNS_PROTECTION_RULE, re.FV.MANAGE_PAGE_SHIELD_POLICY, re.FV.CONFIGURE_PAGE_SHIELD, re.FV.VIEW_DETECTED_CONNECTIONS, re.FV.VIEW_DETECTED_SCRIPTS, re.FV.VIEW_PAGE_SHIELD_POLICIES, re.FV.VIEW_PAGE_SHIELD_SETTINGS, re.FV.OPEN_MUTABLE_VERSION_TOOLTIP, re.FV.SHOW_MUTABLE_VERSION_TOOLTIP, V.y.CREATE_LIST, V.y.DELETE_LIST, V.y.ADD_LIST_ITEM, V.y.DELETE_LIST_ITEM, ve.KO.PURCHASE_WORKERS_PAID, ve.KO.LIST_CONFIGS, ve.KO.CREATE_HYPERDRIVE_CONFIG, ve.KO.VIEW_CONFIG_DETAILS, ve.KO.UPDATE_CACHING_SETTINGS, ve.KO.DELETE_HYPERDRIVE_CONFIG, ve.KO.CLICK_HYPERDRIVE_DOCUMENTATION, ve.KO.CLICK_GET_STARTED_GUIDE, ve.KO.CLICK_CONNECTIVITY_GUIDES, ve.KO.CLICK_QUICK_LINK, ke.N.CNAME, ke.N.IP_ADDRESS, ke.N.LB, ke.N.UPDATE_CNAME, ke.N.UPDATE_IP_ADDRESS, ke.N.UPDATE_LB, ke.N.DISABLE, L.N.TIERED_CACHE, L.N.CACHE_PURGE, L.N.CACHE_ANALYTICS, ...(0, Je.P)(), ...(0, T.x4)(), ...(0, Ie.m8)(), Le.N.CREATE, Le.N.EVENTS, Le.N.ANALYTICS, Le.N.UPDATE, Le.N.GENERATE_PREVIEW, A.R.INITIATE_URL_SCAN, A.R.LOAD_SCAN_INFO, A.v.EXPAND_INSIGHT_ROW, A.v.ONE_CLICK_RESOLVE_BUTTON, A.v.FOLLOW_RESOLVE_URL, A.v.MANAGE_INSIGHT, A.v.CLICK_SCAN_NOW, A.v.CLICK_EXPORT_INSIGHTS, A.v.BULK_ARCHIVE, A.v.CLICK_DETAILS_BUTTON, P.Fj[P.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, P.Fj[P.kq.ENDPOINT_MANAGEMENT].detailedMetrics, P.Fj[P.kq.ENDPOINT_MANAGEMENT].createEndpoint, P.Fj[P.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, P.Fj[P.kq.ENDPOINT_MANAGEMENT].deployRouting, P.Fj[P.kq.ENDPOINT_MANAGEMENT].deleteRouting, P.Fj[P.kq.API_DISCOVERY].viewDiscoveredEndpoints, P.Fj[P.kq.API_DISCOVERY].saveDiscoveredEndpoint, P.Fj[P.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, P.Fj[P.kq.SCHEMA_VALIDATION].viewSchemasList, P.Fj[P.kq.SCHEMA_VALIDATION].uploadSchema, P.Fj[P.kq.SCHEMA_VALIDATION].viewSchemaAdoption, P.Fj[P.kq.SCHEMA_VALIDATION].downloadSchema, P.Fj[P.kq.SCHEMA_VALIDATION].deleteSchema, P.Fj[P.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, P.Fj[P.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, P.Fj[P.kq.SEQUENCE_ANALYTICS].viewSequencesPage, P.Fj[P.kq.JWT_VALIDATION].viewJWTRules, P.Fj[P.kq.JWT_VALIDATION].addJWTRule, P.Fj[P.kq.JWT_VALIDATION].editJWTRule, P.Fj[P.kq.JWT_VALIDATION].deleteJWTRule, P.Fj[P.kq.JWT_VALIDATION].reprioritizeJWTRule, P.Fj[P.kq.JWT_VALIDATION].viewJWTConfigs, P.Fj[P.kq.JWT_VALIDATION].addJWTConfig, P.Fj[P.kq.JWT_VALIDATION].editJWTConfig, P.Fj[P.kq.JWT_VALIDATION].deleteJWTConfig, P.Fj[P.kq.SETTINGS].redirectToFirewallRulesTemplate, P.Fj[P.kq.SETTINGS].redirectToPages, P.Fj[P.kq.SETTINGS].listSessionIdentifiers, P.Fj[P.kq.SETTINGS].listRequestsContainingSessionIdentifiers, P.Fj[P.kq.SETTINGS].addOrRemoveSessionIdentifiers, P.Fj[P.kq.SETTINGS].redirectToCustomRules, P.Fj[P.kq.SETTINGS].listAllFallthroughSchemas, P.Fj[P.kq.SEQUENCE_RULES].listSequenceRules, P.Fj[P.kq.SEQUENCE_RULES].deleteSequenceRule, P.Fj[P.kq.SEQUENCE_RULES].reorderSequenceRule, P.Fj[P.kq.SEQUENCE_RULES].createSequenceRule, P.Fj[P.kq.SEQUENCE_RULES].editSequenceRule, fe.Z.ANALYTICS, fe.Z.CREATE_AND_DEPLOY, fe.Z.CREATE_MONITOR_LINK, fe.Z.CREATE_MONITOR, fe.Z.CREATE_POOL_LINK, fe.Z.CREATE_POOL, fe.Z.EDIT_MONITOR, fe.Z.EDIT_POOL, fe.Z.LOAD_BALANCING_TABLE, fe.Z.POOL_TABLE, fe.Z.EDIT_MONITOR_LINK, fe.Z.EDIT_POOL_LINK, $.y.SECONDARY_DNS_NOTIFICATION_CREATE, $.y.SECONDARY_DNS_NOTIFICATION_UPDATE, $.y.SECONDARY_DNS_NOTIFICATION_DELETE, G.U.ZONE_TRANSFER_SUCCESS, G.U.DNS_RECORD_CREATE, G.U.DNS_RECORD_UPDATE, G.U.DNS_RECORD_DELETE, ce.Y.PEER_DNS_CREATE, ce.Y.PEER_DNS_UPDATE, ce.Y.PEER_DNS_DELETE, ce.Y.ZONE_TRANSFER_ENABLE, ce.Y.ZONE_TRANSFER_DISABLE, Z.V.ARGO_ENABLEMENT, Z.V.ARGO_GEO_ANALYTICS_FETCH, Z.V.ARGO_GLOBAL_ANALYTICS_FETCH, H.X.VIEW_BUCKETS_LIST, H.X.CREATE_BUCKET, H.X.VALIDATE_BUCKET, H.X.DELETE_BUCKET, H.X.VIEW_CAPTURES_LIST, H.X.CREATE_SIMPLE_CAPTURE, H.X.CREATE_FULL_CAPTURE, H.X.VIEW_FULL_CAPTURE, H.X.DOWNLOAD_SIMPLE_CAPTURE, ne.bK.VIEW_RULES, ne.bK.CREATE_RULE, ne.bK.UPDATE_RULE, ne.bK.DELETE_RULE, ne.bK.VIEW_CONFIGURATION, ne.bK.CREATE_CONFIGURATION, ne.bK.UPDATE_CONFIGURATION, ne.bK.DELETE_CONFIGURATION, U.r8.VIEW_ALERTS, U.r8.VIEW_ALERTS_HISTORY, U.r8.MAGIC_OVERVIEW_ANALYTICS, U.VZ.CREATE_SITE, U.VZ.CREATE_TUNNEL, U.VZ.CREATE_STATIC_ROUTE, Ce.o4.CLICK_ADAPTIVE_SAMPLING, Ce.o4.CLICK_TO_LOG_EXPLORER_BANNER, Ce.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, Ce.o4.CLICK_SWITCH_TO_RAW_LOGS, Ce.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", ee.U.REGISTER_DOMAIN_SEARCH_SUBMIT, ee.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, ee.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, ee.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, ee.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, ee.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, ee.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, ee.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, ee.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, ee.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, ee.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, ee.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, ee.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, ee.U.REGISTER_DOMAIN_CHECKOUT_ERROR, ee.U.TRANSFER_DOMAIN_CHANGE_STEP, ee.U.RENEW_DOMAIN_COMPLETED, ee.U.RESTORE_DOMAIN_INIT, ee.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, ee.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, ee.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, ee.U.RESTORE_DOMAIN_FAILURE, ee.U.RESTORE_DOMAIN_COMPLETED, ee.U.DOMAIN_DELETE_INIT, ee.U.DOMAIN_DELETE_COMPLETED, ee.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, ee.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, ee.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, ee.U.DOMAIN_DELETE_CONFIRM_DELETE, ee.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, ee.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, ee.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, ee.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, ee.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, ee.U.DOMAIN_MOVE_START_FLOW, ee.U.DOMAIN_MOVE_OPEN_DOCS, ee.U.DOMAIN_MOVE_CLOSE_FLOW, ee.U.DOMAIN_MOVE_PROGRESS_FLOW, ee.U.DOMAIN_MOVE_SUBMIT, ee.U.DOMAIN_MOVE_INITIATE_SUCCESS, ee.U.DOMAIN_MOVE_INITIATE_ERROR, ee.U.DOMAIN_MOVE_CANCEL, ee.U.DOMAIN_MOVE_CANCEL_SUCCESS, ee.U.DOMAIN_MOVE_CANCEL_ERROR, ee.U.ACTION_CENTER_NAVIGATE, ee.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, ee.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, ee.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, pe.KO.CLICK_GET_STARTED_GUIDE, pe.KO.CLICK_PIPELINE_DOCUMENTATION, pe.KO.CLICK_QUICK_LINK, pe.KO.CREATE_PIPELINE, pe.KO.DELETE_PIPELINE, pe.KO.LIST_PIPELINES, pe.KO.VIEW_PIPELINE, b.S.EXISTING_DOMAIN, b.S.NEW_DOMAIN, b.S.WAF_RULESET, b.S.WORKERS, b.S.PAGES, b.S.R2, b.S.ACCOUNT_MEMBERS, oe._.TEMPLATE_PRODUCT_SELECTED, oe._.TEMPLATE_SELECTED, oe._.TEMPLATE_SAVE_DRAFT, oe._.TEMPLATE_CANCEL, oe._.TEMPLATE_DEPLOY, Me.D.CLICK_GO_BACK_SHARE_MODAL, Me.D.CLICK_MENU_ITEM_SHARE, Me.D.CLICK_ON_CANCEL_SHARE_MODAL, Me.D.CLICK_ON_CLOSE_SHARE_MODAL, Me.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, Me.D.CLICK_ON_DELETE_RULESET, Me.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, Me.D.CLICK_ON_EDIT_SHARE_PERMISSION, Me.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, Me.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, Me.D.CLICK_ON_SHARE_TABLE_ROW, K.pR.CLICK_GEOGRAPHICAL_TEMPLATE, K.pR.CLICK_IP_TEMPLATE, K.pR.CLICK_USER_AGENT_TEMPLATE, K.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, Ie.vc.CREATED, Ie.vc.ENABLED, Ie.vc.DISABLED, Ie.vc.DELETED, Ie.vc.UPDATED, Ie.vc.DOWNLOADED, Q.Gk.REQUEST_REVIEW, Q.Gk.COPY_URL, M.v.FIELD, M.v.OPERATOR),
				Pe = n.eg.exactStrict(n.eg.object({
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
					changed_fields: n.eg.any.optional
				})),
				ze = (F, X) => {
					const [ie, ge] = Ue(X);
					let be, xe;
					return (0, n.nM)(ye.decode(F)) && (be = new S.Uh(F)), ge && ge.length > 0 && (xe = new S.oV(F, ge)), [ie, be, xe]
				},
				Ue = F => {
					const X = Pe.decode(F);
					if ((0, n.nM)(X)) {
						const ie = X.left.map(({
							context: ge
						}) => ge.map(({
							key: be
						}) => be)).reduce((ge, be) => ge.concat(be), []).filter(ge => ge in F);
						return [je(ie, F), ie]
					}
					return [F, []]
				},
				je = (F, X) => Object.entries(X).reduce((ie, [ge, be]) => (F.includes(ge) || (ie[ge] = be), ie), {}),
				Ae = F => (X, ie, ge) => {
					const [be, xe, x] = ze(ie, ge);
					if (xe) throw xe;
					return x && console.error(x), F(X, ie, be)
				};
			var Re = t("../react/utils/zaraz.ts");
			const Fe = {
					identify: !0
				},
				He = F => (X, ie, ge) => (Fe[ie] || Re.tg === null || Re.tg === void 0 || Re.tg.track(ie, ge), F(X, ie, ge)),
				Ye = "pageview",
				Ve = "create zone",
				z = "create user",
				te = {
					[Ye]: !0,
					[Ve]: !0,
					[z]: !0
				},
				he = F => {
					var X;
					return !!((X = F.gates.assignments) === null || X === void 0 ? void 0 : X["dx-enable-google-tag-manager"])
				},
				De = F => {
					const {
						deviceViewport: X,
						page: ie,
						previousPage: ge,
						pageName: be,
						utm_campaign: xe,
						_ga: x
					} = F, {
						origin: me
					} = window.location;
					return {
						event: ge !== void 0 && ie !== ge ? "virtual_page_view" : "page_load",
						device_type: X,
						hostname: me,
						language: navigator.language,
						locale: (0, c.r)((0, p.bh)().getState()),
						page_location: ie ? `${me}${ie}` : "[redacted]",
						page_path: ie ? `${ie}` : "[redacted]",
						page_referrer: ge ? `${me}/${ge}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: be || "[redacted]",
						page_url: `${me}${ie}`,
						query: xe ? `?utm_campaign=${xe}` : "[redacted]",
						"user properties": {
							"--ga_client_id": x,
							"--user_id": o().getUserId()
						}
					}
				},
				Ne = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				Ke = F => {
					const {
						status: X
					} = F;
					return X === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				Ze = (F, X) => {
					switch (F) {
						case "pageview":
							return De(X);
						case "create zone":
							return Ne();
						case "create user":
							return Ke(X);
						default:
							return
					}
				},
				lt = F => (X, ie, ge) => {
					if (te[ie]) {
						var be;
						const xe = Ze(ie, ge);
						xe && ((be = window.dataLayer) === null || be === void 0 || be.push(xe))
					}
					return F(X, ie, ge)
				};
			var st = t("../react/utils/cookiePreferences.ts");

			function mt(F) {
				for (var X = 1; X < arguments.length; X++) {
					var ie = arguments[X] != null ? Object(arguments[X]) : {},
						ge = Object.keys(ie);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(ie).filter(function(be) {
						return Object.getOwnPropertyDescriptor(ie, be).enumerable
					})), ge.forEach(function(be) {
						gt(F, be, ie[be])
					})
				}
				return F
			}

			function gt(F, X, ie) {
				return X = ut(X), X in F ? Object.defineProperty(F, X, {
					value: ie,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[X] = ie, F
			}

			function ut(F) {
				var X = We(F, "string");
				return typeof X == "symbol" ? X : String(X)
			}

			function We(F, X) {
				if (typeof F != "object" || F === null) return F;
				var ie = F[Symbol.toPrimitive];
				if (ie !== void 0) {
					var ge = ie.call(F, X || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (X === "string" ? String : Number)(F)
			}
			const Te = F => {
					const X = he((0, p.bh)().getState());
					o().init(mt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: at() && !(0, s.gm)() && W(),
						middlewares: [R, Ae, C, He, ...X ? [lt] : []]
					}, F))
				},
				Qe = () => {
					o().identify(mt({}, (0, e.getAttribution)(), {
						locale: (0, c.r)((0, p.bh)().getState()),
						isCloudflare: !!(0, m.Jd)()
					}))
				},
				at = () => !0,
				it = () => {
					(0, st.kT)("sparrow_id")
				},
				W = () => (0, st.Xm)()
		},
		"../utils/initStyles.ts": function(j, v, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const s = "cfBaseStyles",
				p = document.head || document.getElementsByTagName("head")[0],
				c = i => {
					const d = [];
					for (let y in i.colors) {
						const n = i.colors[y];
						if (Array.isArray(n) && y !== "categorical")
							for (let r = 0; r < n.length; ++r) d.push(`--cf-${y}-${r}:${n[r]};`)
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
      ${c(e.Rl)}
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
					let y = document.getElementById(s);
					y ? y.innerText = "" : (y = document.createElement("style"), y.id = s, p.appendChild(y)), y.appendChild(document.createTextNode(d)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(m), v.Z = m
		},
		"../utils/sentry/lastSentEventId.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
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
		"../utils/zaraz.ts": function(j, v, t) {
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

			function e(a) {
				for (var u = 1; u < arguments.length; u++) {
					var l = arguments[u] != null ? Object(arguments[u]) : {},
						f = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(l).filter(function(_) {
						return Object.getOwnPropertyDescriptor(l, _).enumerable
					})), f.forEach(function(_) {
						o(a, _, l[_])
					})
				}
				return a
			}

			function o(a, u, l) {
				return u = s(u), u in a ? Object.defineProperty(a, u, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[u] = l, a
			}

			function s(a) {
				var u = p(a, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function p(a, u) {
				if (typeof a != "object" || a === null) return a;
				var l = a[Symbol.toPrimitive];
				if (l !== void 0) {
					var f = l.call(a, u || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(a)
			}
			const c = {
					track: (a, u) => null,
					set: (a, u) => console.log(`zaraz.set(${a}, ${u})`)
				},
				m = {
					track: (a, u) => {
						var l;
						(l = window.zaraz) === null || l === void 0 || l.track(a, e({}, u, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, u) => {
						var l;
						return (l = window.zaraz) === null || l === void 0 ? void 0 : l.set(a, u)
					}
				};
			let i;
			const d = () => {
					window.zaraz, i = m
				},
				y = ["email", "first_name", "last_name"],
				n = a => {
					y.forEach(u => {
						var l;
						(l = i) === null || l === void 0 || l.set(u, a[u])
					})
				},
				r = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(j, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				p = t.n(s),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				i = t.n(m),
				d = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				y = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				r = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				a = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				f = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				_ = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				O = t("../../../common/component/component-filter-bar/src/constants.js"),
				I = t("../../../common/component/component-filter-bar/src/utils.js");

			function h(U) {
				for (var H = 1; H < arguments.length; H++) {
					var oe = arguments[H] != null ? Object(arguments[H]) : {},
						le = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(oe).filter(function(pe) {
						return Object.getOwnPropertyDescriptor(oe, pe).enumerable
					})), le.forEach(function(pe) {
						N(U, pe, oe[pe])
					})
				}
				return U
			}

			function N(U, H, oe) {
				return H = E(H), H in U ? Object.defineProperty(U, H, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[H] = oe, U
			}

			function E(U) {
				var H = C(U, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function C(U, H) {
				if (typeof U != "object" || U === null) return U;
				var oe = U[Symbol.toPrimitive];
				if (oe !== void 0) {
					var le = oe.call(U, H || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(U)
			}
			const R = 70,
				b = (0, c.createStyledComponent)(({
					showOverflow: U
				}) => h({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, U ? {} : {
					maxHeight: R,
					overflow: "hidden"
				})),
				M = (0, c.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				T = (0, c.createStyledComponent)(({
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
				S = (0, c.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				L = (0, c.createStyledComponent)(({
					theme: U
				}) => ({
					color: U.colors.gray[4],
					mr: 1
				}), "span"),
				G = (0, c.createStyledComponent)(() => ({
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
				$ = (0, c.createStyledComponent)(({
					buttonStyle: U
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
				}, U), y.zx),
				V = (0, c.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				ce = (0, c.createStyledComponent)(({
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
				ee = (0, c.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				J = U => U.current ? [...U.current.children].reduce((H, oe) => (oe.offsetTop >= R && H++, H), 0) : 0;
			let ve = 0;
			class ne extends e.Component {
				constructor() {
					super();
					N(this, "overflowWrapper", (0, e.createRef)()), N(this, "hasOverflowed", H => {
						const oe = J(this.overflowWrapper);
						H.scrollHeight > R && oe >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (H.scrollHeight < R || oe === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), N(this, "addNewFilter", () => {
						const {
							filterDefinitions: H
						} = this.props, oe = (0, I.TE)(H), le = Object.keys(oe)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: le,
								operator: (0, I.uv)(le, oe),
								value: (0, I.TT)(le, oe)
							}
						})
					}), N(this, "handleOpenFilterEdit", H => {
						this.setState({
							openFilter: H,
							filterChanges: h({}, this.props.filters[H])
						})
					}), N(this, "handleRemoveFilterClick", (H, oe) => {
						H.stopPropagation(), this.removeFilter(oe)
					}), N(this, "removeFilter", H => {
						const {
							handleFiltersChange: oe
						} = this.props, le = [...this.props.filters], pe = le[H];
						le.splice(H, 1), oe(le), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: pe.key,
							operator: pe.operator,
							value: pe.value
						})
					}), N(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), N(this, "handleFilterSubmit", H => {
						const {
							filterDefinitions: oe
						} = this.props;
						H.preventDefault();
						const {
							filterChanges: le
						} = this.state, pe = typeof oe[le.key].parse == "function" ? Array.isArray(le.value) ? le.value.map(oe[le.key].parse) : oe[le.key].parse(le.value) : le.value;
						if (oe[le.key].validate && (Array.isArray(pe) ? !pe.every(oe[le.key].validate) : !oe[le.key].validate(pe))) return this.setState({
							invalid: !0
						});
						const Q = [...this.props.filters],
							A = h({}, le, {
								value: pe
							}),
							P = !Q[this.state.openFilter];
						P ? Q.push(A) : Q[this.state.openFilter] = h({}, le), this.props.handleFiltersChange(Q, A), (P ? this.props.onAddFilter : this.props.onEditFilter)({
							field: A.key,
							operator: A.operator,
							value: A.value
						}), this.closeOpenFilterChanges()
					}), N(this, "handlePendingKeyChange", ({
						value: H
					}) => {
						const {
							filterDefinitions: oe
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: H,
								operator: (0, I.uv)(H, oe),
								value: (0, I.TT)(H, oe)
							}
						})
					}), N(this, "handlePendingOperatorChange", ({
						value: H
					}) => {
						let oe = h({}, this.state.filterChanges, {
							operator: H
						});
						if ((0, I.dr)(H)) {
							var le, pe;
							((le = this.state.filterChanges) === null || le === void 0 ? void 0 : le.value) && !Array.isArray((pe = this.state.filterChanges) === null || pe === void 0 ? void 0 : pe.value) && (oe.value = [this.state.filterChanges.value])
						} else {
							var Q, A, P;
							((Q = this.state.filterChanges) === null || Q === void 0 ? void 0 : Q.value) && Array.isArray((A = this.state.filterChanges) === null || A === void 0 ? void 0 : A.value) && ((P = this.state.filterChanges) === null || P === void 0 ? void 0 : P.value.length) > 0 && (oe.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: oe
						})
					}), N(this, "handlePendingValueChange", H => {
						this.setState({
							invalid: !1,
							filterChanges: h({}, this.state.filterChanges, {
								value: H
							})
						})
					}), N(this, "handleShowOverflow", () => {
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
						id: ++ve
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(H) {
					H.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(H) {
					const {
						formatLabel: oe,
						filterDefinitions: le
					} = this.props, {
						operator: pe
					} = this.state.filterChanges, Q = le[this.state.filterChanges.key], A = this.state.filterChanges.value, P = k => Array.isArray(k) ? k.map(K => K.value) : (k == null ? void 0 : k.value) || null;
					if (Q.renderValueComponent) return Q.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (Q.type) {
						case O.k.select:
							return (0, I.dr)(pe) ? o().createElement(l.Z, {
								searchable: !0,
								multi: !0,
								creatable: !Q.options,
								value: typeof A.split == "function" ? A == null ? void 0 : A.split(",") : Array.isArray(A) ? A : [],
								options: Q.options ? Q.options.map(k => ({
									value: k.value || k,
									label: k.label || oe(this.state.filterChanges.key, k, H)
								})) : A ? (Array.isArray(A) ? A : A.split(",")).map(k => ({
									label: k,
									value: k
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(m.Trans, {
									id: Q.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: Q.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: k => {
									this.handlePendingValueChange(P(k))
								},
								isValidNewOption: k => {
									const K = Q.validate;
									return !K && k || k && K([k])
								},
								getNewOptionData: (k, K) => ({
									value: k,
									label: K
								})
							}) : o().createElement(a.hQ, {
								hideLabel: !0,
								value: A,
								options: Q.options.map(k => ({
									value: k,
									label: oe(this.state.filterChanges.key, k, H)
								})),
								onChange: ({
									value: k
								}) => this.handlePendingValueChange(k)
							});
						case O.k.string:
						default:
							return (0, I.dr)(pe) ? o().createElement(l.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof A.split == "function" ? A == null ? void 0 : A.split(",") : Array.isArray(A) ? A : [],
								options: A ? (Array.isArray(A) ? A : A.split(",")).map(k => ({
									label: k,
									value: k
								})) : [],
								noOptionsMessage: () => null,
								placeholder: H.t("analytics.report.filters.labels.placeholder", {
									example: le[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: k => {
									this.handlePendingValueChange(P(k))
								},
								isValidNewOption: k => {
									const K = Q.validate;
									return !K && k || k && K([k])
								},
								getNewOptionData: (k, K) => ({
									value: k,
									label: K
								}),
								formatCreateLabel: k => H.t("filter_editor.value_create_label", {
									value: k
								})
							}) : o().createElement(m.I18n, null, k => o().createElement(d.I, {
								value: this.state.filterChanges.value,
								onChange: K => this.handlePendingValueChange(K.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: k.t("analytics.report.filters.labels.placeholder", {
									example: le[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: H,
						filterDefinitions: oe,
						modalStyles: le,
						filterIconType: pe,
						buttonStyle: Q
					} = this.props, A = J(this.overflowWrapper), P = `filterPanel${this.state.id}`, k = this.state.openFilter !== null;
					return o().createElement(m.I18n, null, K => o().createElement(u.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(ee, null, o().createElement($, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": k,
						"aria-controls": P,
						inverted: !0,
						buttonStyle: Q
					}, o().createElement(n.J, {
						type: pe || "add",
						mr: 1,
						label: K.t("common.add", {
							_: "Add"
						})
					}), o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(V, null, o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(b, {
						innerRef: this.overflowWrapper,
						overflowLimit: R,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((re, Ce) => {
						const {
							key: Ie,
							operator: Me,
							value: ke
						} = re, Z = oe[Ie].ignoreLabelTranslation ? oe[Ie].label : K.t(oe[Ie].label), fe = K.t(`analytics.report.filters.operators.${Me}`), Le = Array.isArray(ke) ? ke.map(Y => H(Ie, Y, K)).join(", ") : H(Ie, ke, K), Je = `${Z} ${fe} ${Le}`;
						return o().createElement(M, {
							key: `${Ie}-${Me}-${ke}`,
							title: Je
						}, o().createElement(T, {
							onClick: () => this.handleOpenFilterEdit(Ce)
						}, o().createElement(u.ZC, {
							display: "flex"
						}, o().createElement(S, null, Z), o().createElement(L, null, fe), o().createElement(G, null, Le), (0, I.oN)(re, oe) ? o().createElement(r.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(ce, {
							onClick: Y => this.handleRemoveFilterClick(Y, Ce),
							"aria-label": "remove"
						}, o().createElement(n.J, {
							type: "remove"
						})))))
					})), k && o().createElement(_.Z, {
						id: P,
						filterDefinitions: oe,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, I.oN)(this.state.filterChanges, oe),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: H,
						modalStyles: le
					}), this.state.hasOverflowed && o().createElement(f.Z, {
						count: A,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			N(ne, "propTypes", {
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
			}), v.Z = ne
		},
		"../../../common/component/component-filter-bar/src/index.js": function(j, v, t) {
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
					return p.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				s = t("../../../common/component/component-filter-bar/src/constants.js"),
				p = t("../../../common/component/component-filter-bar/src/utils.js"),
				c = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				OZ: function() {
					return c
				},
				YB: function() {
					return p
				}
			});

			function e(i, d, y) {
				return d = o(d), d in i ? Object.defineProperty(i, d, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[d] = y, i
			}

			function o(i) {
				var d = s(i, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function s(i, d) {
				if (typeof i != "object" || i === null) return i;
				var y = i[Symbol.toPrimitive];
				if (y !== void 0) {
					var n = y.call(i, d || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(i)
			}
			class p extends Error {
				constructor(d, y) {
					super(y);
					e(this, "translationKey", void 0), this.translationKey = d, this.name = "TranslatorError"
				}
			}
			class c extends p {
				constructor(d) {
					super(d, `Translation key not found: ${d}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var m = null
		},
		"../../../common/util/types/src/api/domain.ts": function(j, v, t) {
			"use strict";
			t.d(v, {
				Aw: function() {
					return R
				},
				Ib: function() {
					return E
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
					return u
				},
				TS: function() {
					return l
				},
				W7: function() {
					return I
				},
				dN: function() {
					return M
				},
				eF: function() {
					return N
				},
				qp: function() {
					return n
				},
				wR: function() {
					return y
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
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
				c = e.eg.object({
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
			let y = function(T) {
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
						status: e.eg.enum(y).optional
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
					transfer_conditions: c.optional,
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
				l = e.eg.object({
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
				O = e.eg.object({
					designated_approvers: e.eg.array(_)
				});
			let I = function(T) {
				return T.PENDING = "pending", T.PENDING_UPDATE = "pending_update", T.ENABLED = "enabled", T.DISABLED = "disabled", T
			}({});
			const h = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(I)
				}),
				N = e.eg.intersection([h, O]),
				E = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let C = function(T) {
				return T.UNLOCK_APPROVAL = "UnlockApprovalRequest", T.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", T.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", T.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", T
			}({});
			const R = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(j, v, t) {
			"use strict";
			t.d(v, {
				df: function() {
					return o
				},
				eX: function() {
					return s
				},
				fG: function() {
					return c
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
				c = function(i) {
					return i.DEFAULT = "default", i.MEDIUM = "medium", i.LOW = "low", i.EOFF = "eoff", i.HIGH = "high", i.VERY_HIGH = "very_high", i
				}({}),
				m = function(i) {
					return i.DEFAULT = "", i.XML = "text/xml", i.JSON = "application/json", i.TEXT = "text/plain", i.HTML = "text/html", i
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(j, v, t) {
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
			const o = (s, p) => {
				if (p !== void 0) throw new Error("Unexpected object: " + s);
				return p
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(j, v, t) {
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
				var p = e[s],
					c = p[0];
				return t.e(p[1]).then(function() {
					return t.t(c, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", j.exports = o
		}
	}
]);

//# debugId=f020ac5f-83c2-5f38-a240-7915ce0ab7df