! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "84c4c69d-f57a-5fc9-b675-338d5e774dab")
	} catch (e) {}
}();
(self.webpackChunk_cloudflare_app_dash = self.webpackChunk_cloudflare_app_dash || []).push([
	["11106"], {
		"./react/common/out.css": function(n, e, r) {
			var o, t = r("./node_modules/css-loader/index.js!./react/common/out.css");
			"string" == typeof t && (t = [
				[n.id, t, ""]
			]);
			var a = {
				hmr: !0
			};
			a.transform = o, a.insertInto = void 0, r("../../../node_modules/style-loader/lib/addStyles.js")(t, a), t.locals && (n.exports = t.locals)
		},
		"./init.ts": function(n, e, r) {
			"use strict";
			let o, t;
			r("../../../node_modules/regenerator-runtime/runtime.js"), r("../../../node_modules/url-search-params-polyfill/index.js"), r("./libs/init/initGlobal.ts"), r("./node_modules/isomorphic-fetch/fetch-npm-browserify.js"), (0, r("../../../node_modules/fetch-intercept/lib/browser.js").register)({
				request: (n, e) => {
					try {
						if (new URL(n), "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" === n) return ["/static/vendor/onetrust/logos/ot_guard_logo.svg", e];
						return [n, e]
					} catch (i) {
						var r, o, t;
						let a;
						if ("object" == typeof n && (null == n || null == (r = n.url) ? void 0 : r.startsWith("https://platform.dash.cloudflare.com/map-tiles/"))) return [n, e];
						return [n, ((a = new Headers(e && e.headers || {})).append("X-Cross-Site-Security", "dash"), o = function(n) {
							for (var e = 1; e < arguments.length; e++) {
								var r = null != arguments[e] ? arguments[e] : {},
									o = Object.keys(r);
								"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
									return Object.getOwnPropertyDescriptor(r, n).enumerable
								}))), o.forEach(function(e) {
									var o;
									o = r[e], e in n ? Object.defineProperty(n, e, {
										value: o,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : n[e] = o
								})
							}
							return n
						}({}, e), t = t = {
							headers: a
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : (function(n, e) {
							var r = Object.keys(n);
							if (Object.getOwnPropertySymbols) {
								var o = Object.getOwnPropertySymbols(n);
								r.push.apply(r, o)
							}
							return r
						})(Object(t)).forEach(function(n) {
							Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(t, n))
						}), o)]
					}
				}
			});
			var a = r("../../../node_modules/@sentry/core/esm/exports.js"),
				i = r("../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				c = r("./react/app/providers/storeContainer.js");
			let l = "";
			var s = r("../../../node_modules/cookie/index.js"),
				d = r("../../../node_modules/@cloudflare/style-const/es/index.js"),
				u = r("../../common/util/previews/preview-helpers.ts");
			let p = function(n) {
					var e;
					let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						o = (n => {
							switch (n) {
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
						})(n);
					return '\n  <style type="text/css">\n    #loading-state {\n      display: flex;\n      height: 100vh;\n      width: 100vw;\n      justify-content: center;\n      align-items: center;\n    }\n    .dark-mode body {\n      background-color: #0a0a0a;\n      color: #d9d9d9;\n    }\n    .error-container {\n      line-height: 1.5;\n      font-size: 20px;\n      padding: 32px;\n    }\n    .error-container a {\n      color: inherit;\n      text-decoration: underline;\n    }\n    .error-container h1 {\n      line-height: 1.5;\n      font-size: inherit;\n      font-weight: 600;\n      margin: 0 auto 16px;\n    }\n    .error-container p {\n      margin: 0;\n      max-width: 37.5rem;\n    }\n    .error-container svg {\n      width: 128px;\n      margin-bottom: 16px;\n    }\n  </style>\n  <div class="error-container">\n    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1230.574 519.774" xml:space="preserve">\n      <path fill="#F78100" d="M784.025,512.011l5.872-20.311c6.998-24.169,4.394-46.511-7.349-62.926c-10.801-15.122-28.804-24.022-50.666-25.056l-414.114-5.281c-2.788-0.147-5.096-1.403-6.518-3.471c-1.44-2.123-1.773-4.856-0.886-7.478c1.366-4.08,5.41-7.164,9.62-7.349l417.954-5.299c49.576-2.271,103.252-42.505,122.048-91.564l23.837-62.28c0.657-1.696,0.952-3.493,0.94-5.294c-0.007-0.984-0.078-1.969-0.294-2.94C857.383,91.028,748.758,0,618.863,0c-119.685,0-221.312,77.254-257.76,184.623c-23.523-17.652-53.62-27.031-85.969-23.801c-57.423,5.706-103.565,51.94-109.271,109.363c-1.496,14.901-0.277,29.284,3.158,42.8C75.222,315.718,0,392.566,0,487.029c0,8.549,0.646,16.95,1.846,25.166c0.591,3.988,3.952,6.98,7.977,6.98l764.527,0.092c0.076,0,0.142-0.034,0.218-0.036C778.942,519.134,782.79,516.24,784.025,512.011z"/>\n      <path fill="#FBAC42" d="M921.982,225.558c-3.841,0-7.663,0.111-11.466,0.295c-0.628,0.033-1.224,0.185-1.796,0.385c-1.985,0.696-3.566,2.305-4.168,4.397l-16.286,56.242c-6.998,24.169-4.395,46.493,7.349,62.907c10.801,15.14,28.804,24.022,50.665,25.056l88.277,5.299c2.604,0.129,4.893,1.385,6.297,3.416c1.477,2.142,1.809,4.893,0.923,7.515c-1.385,4.081-5.41,7.164-9.601,7.349l-91.73,5.299c-49.798,2.29-103.473,42.505-122.27,91.564l-6.629,17.319c-1.206,3.134,1.039,6.472,4.354,6.635c0.084,0.004,0.159,0.031,0.244,0.031h315.626c3.766,0,7.127-2.456,8.142-6.075c5.484-19.498,8.402-40.048,8.402-61.301C1148.315,326.889,1046.984,225.558,921.982,225.558z"/>\n    </svg>\n    <h1 id="error-title">'.concat(o.title, '</h1>\n    <p id="error-description">').concat(o.description, "</p>\n  </div>\n  ") + (r ? "\n    <style>\n    .preview-banner {\n      width: 680px;\n      padding: 32px;\n      background: ".concat(d.qI.orange["9"], ';\n      border-radius: 5px;\n      box-shadow: 1px 1px 4px 0px #999;\n    }\n    .preview-banner-branch {\n      font-family: Courier New;\n      font-weight: bold;\n    }\n    </style>\n    <div class="preview-banner">\n      <p>You are currently on a preview for branch: <span class="preview-banner-branch">').concat(null == (e = window.build) ? void 0 : e.branch, '</span>.</p>\n      <a href="').concat(window.location.href, '?deploymentPreview=current">Click here to go to the live dashboard deployment</a>\n    </div>') : "")
				},
				g = n => {
					var e;
					let r = document.getElementById(n);
					r && (null == (e = r.parentNode) || e.removeChild(r))
				};

			function m() {
				let n = document.getElementById("loading-state");
				null == n || n.classList.add("hide"), null == n || n.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(g)
				})
			}
			var v = r("./utils/initStyles.ts"),
				h = r("../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				b = r("../../../node_modules/@sentry/react/esm/sdk.js"),
				w = r("./react/common/selectors/languagePreferenceSelector.ts"),
				f = r("./flags.ts"),
				k = r("./utils/getDashVersion.ts"),
				y = r("./react/utils/fedramp.ts");
			let x = (0, y.W)() ? "https://1e812cb0fae1f46a92ecdb5db1623f92@sentry10.cfdata.org/1930" : "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				_ = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				E = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var O = r("./utils/sentry/lastSentEventId.ts"),
				T = r("../../../node_modules/@sentry/core/esm/transports/base.js"),
				A = r("../../../node_modules/@sentry/utils/esm/syncpromise.js");
			let I = n => {
				let e = async e => {
					var r, o;
					let t = {
						envelope: e.body,
						url: n.url,
						isPreviewDeploy: null == (o = window) || null == (r = o.build) ? void 0 : r.isPreviewDeploy,
						release: (0, k.n)()
					};
					try {
						let n = await fetch("".concat("https://platform.dash.cloudflare.com", "/sentry/envelope"), {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(t)
						});
						return {
							statusCode: n.status,
							headers: {
								"x-sentry-rate-limits": n.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": n.headers.get("Retry-After")
							}
						}
					} catch (n) {
						return console.log(n), (0, A.xg)(n)
					}
				};
				return T.o(n, e)
			};
			var C = r("../../../node_modules/@sentry/tracing/esm/index.js");
			let S = (0, r("../../../node_modules/history/esm/history.js").zR)();
			var N = r("../../../node_modules/@sentry/utils/esm/worldwide.js"),
				R = r("./react/utils/url.ts");
			let L = (0, N.VZ)();
			var D = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				P = r.n(D),
				M = r("../../common/intl/intl-core/src/errors.ts"),
				j = r("../../../node_modules/@sentry/utils/esm/object.js"),
				U = r("./react/common/middleware/sparrow/errors.ts");

			function F(n, e, r) {
				return e in n ? Object.defineProperty(n, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[e] = r, n
			}
			class z {
				setupOnce() {
					r.g.console && (0, j.GS)(r.g.console, "error", n => function() {
						for (var e = arguments.length, o = Array(e), t = 0; t < e; t++) o[t] = arguments[t];
						let i = o.find(n => n instanceof Error);
						if (x && i) {
							let n, e = !0;
							if (i instanceof U.E) {
								let r = i instanceof U.nK ? i.invalidProperties : void 0;
								n = {
									tags: {
										"sparrow.eventName": i.eventName
									},
									extra: {
										sparrow: {
											eventName: i.eventName,
											invalidProperties: r
										}
									},
									fingerprint: [i.name ? i.name : "SparrowValidationError"]
								}, e = !1
							} else if (i instanceof D.SparrowIdCookieError) n = {
								extra: {
									sparrowIdCookie: i.cookie
								},
								fingerprint: [i.name ? i.name : "SparrowIdCookieError"]
							};
							else if ("ChunkLoadError" === i.name) {
								n = {
									fingerprint: [i.name]
								};
								try {
									n.tags = {
										chunkId: i.message.split(" ")[2],
										chunkUrl: i.request
									}
								} catch (n) {}
							} else i instanceof M.nO && (n = {
								fingerprint: ["TranslatorError", i.translationKey]
							});
							e && a.Cp(i, n)
						}
						"function" == typeof n && n.apply(r.g.console, o)
					})
				}
				constructor() {
					F(this, "name", z.id)
				}
			}
			F(z, "id", "ConsoleErrorIntegration");
			var G = r("./react/common/utils/getEnvironment.ts");
			let W = {
				DEVPLAT: ["/:accountId/ai/ai-gateway/**", "/:accountId/ai/ai-search/**", "/:accountId/ai/vectorize/**", "/:accountId/ai/workers-ai/**", "/:accountId/pipelines/**", "/:accountId/r2/**", "/:accountId/secrets-store/**", "/:accountId/workers/analytics-engine/**", "/:accountId/workers/browser-rendering/**", "/:accountId/workers/containers/**", "/:accountId/workers/d1/**", "/:accountId/workers/durable-objects/**", "/:accountId/workers/hyperdrive/**", "/:accountId/workers/kv/**", "/:accountId/workers/plans/**", "/:accountId/workers/queues/**", "/:accountId/workers/vpc/**", "/:accountId/workers/workflows/**", "/:accountId/workers-and-pages/observability/**", "/:accountId/workers-for-platforms/**", "/:accountId/workers-and-pages/**"],
				LOUI: ["/:accountId/application-security/waf/**", "/:accountId/bulk-redirects/**", "/:accountId/dns-firewall/**", "/:accountId/internal-dns/**", "/:accountId/load-balancing/**", "/:accountId/network-security/**", "/:accountId/security-center/**", "/:accountId/log-explorer/**", "/:accountId/turnstile/**", "/:accountId/:zoneName/caching/**", "/:accountId/:zoneName/dns/**", "/:accountId/:zoneName/error-pages/**", "/:accountId/:zoneName/rules/**", "/:accountId/:zoneName/security/**", "/:accountId/:zoneName/speed/smart-shield/**", "/:accountId/:zoneName/ssl-tls/**", "/:accountId/:zoneName/traffic/**", "/:accountId/:zoneName/log-explorer/**"],
				DASHEX: ["/:accountId/home/**", "/zones", "/login", "/sign-up", "/"],
				STREAM: ["/:accountId/stream/**"]
			};
			var K = r("../../../node_modules/@cloudflare/util-cache/es/index.js"),
				B = () => {
					let n;
					try {
						n = decodeURIComponent(window.location.search)
					} catch (e) {
						console.log("Could not decode query string. Using non-decoded value."), n = window.location.search
					}
					if (!n.includes("remote[")) return;
					let e = new URLSearchParams(n),
						r = {};
					for (let [n, o] of e) n.includes("remote") && (r[n.replace(/remote\[|\]/g, "")] = o);
					K.A.set("mfe-remotes", JSON.stringify(r))
				},
				V = r("../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				H = r("./node_modules/uuid/dist/esm-browser/v4.js");
			let Y = "ANON_USER_ID";
			async function q() {
				let n = (0, c.KA)();
				n.dispatch((0, V.JQ)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await n.dispatch((0, h.hh)({
					userId: function() {
						var n, e, o, t;
						let a = null == (t = r.g) || null == (o = t.bootstrap) || null == (e = o.data) || null == (n = e.user) ? void 0 : n.id;
						if (!a) {
							let n = K.A.get(Y);
							if (!n) {
								let e = (0, H.A)();
								K.A.set(Y, e), n = e
							}
							return n
						}
						return a
					}()
				}))
			}
			var Z = r("./libs/init/initBootstrap.ts"),
				Q = r("../../../node_modules/react/jsx-runtime.js"),
				J = r("webpack/sharing/consume/default/react/react"),
				X = r("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				$ = r("../../../node_modules/react-router-dom-v5-compat/dist/index.js"),
				nn = r("../../../node_modules/react-dom/client.js"),
				ne = r("webpack/sharing/consume/default/react-redux/react-redux"),
				nr = r("../../../node_modules/swr/core/dist/index.mjs"),
				no = r("../../../node_modules/@cloudflare/component-modals/es/index.js");
			r("../../../node_modules/svg-classlist-polyfill/polyfill.js"), r("./react/shims/focus-visible.js");
			var nt = r("./react/app/components/DeepLink/index.ts"),
				na = r("../../../node_modules/prop-types/index.js"),
				ni = r.n(na),
				nc = r("./react/utils/translator.tsx"),
				nl = r("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				ns = r("../../dash/intl/intl-translations/src/index.ts"),
				nd = r("../../../node_modules/query-string/query-string.js"),
				nu = r.n(nd),
				np = r("./react/common/actions/userActions.ts"),
				ng = r("./react/common/selectors/userSelectors.ts"),
				nm = r("./react/utils/i18n.ts"),
				nv = r("./react/utils/bootstrap.ts");
			let nh = nu().parse(location.search),
				nb = n => {
					let e = (0, nv.wR)() ? [(0, ns.ry)(ns.Xv.changes), (0, ns.ry)(ns.Xv.common), (0, ns.ry)(ns.Xv.navigation), (0, ns.ry)(ns.Xv.overview), (0, ns.ry)(ns.Xv.onboarding), (0, ns.ry)(ns.Xv.invite), (0, ns.ry)(ns.Xv.login), (0, ns.ry)(ns.Xv.dns), (0, ns.ry)(ns.AS.ssl_tls), (0, ns.ry)(ns.Xv.message_inbox), (0, ns.ry)(ns.Xv.welcome)] : [(0, ns.ry)(ns.Xv.common), (0, ns.ry)(ns.Xv.invite), (0, ns.ry)(ns.Xv.login), (0, ns.ry)(ns.Xv.onboarding)];
					nh.lang ? nw(n) : K.A.get(nm.hd) && nf(n, (0, nm.JK)());
					let r = async n => (await Promise.all(e.map(e => e(n)))).reduce((n, e) => (function(n) {
						for (var e = 1; e < arguments.length; e++) {
							var r = null != arguments[e] ? arguments[e] : {},
								o = Object.keys(r);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
								return Object.getOwnPropertyDescriptor(r, n).enumerable
							}))), o.forEach(function(e) {
								var o;
								o = r[e], e in n ? Object.defineProperty(n, e, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[e] = o
							})
						}
						return n
					})({}, n, e), {});
					return (0, Q.jsx)(nl.LocaleContext.Provider, {
						value: n.languagePreference,
						children: (0, Q.jsx)(nl.I18nProvider, {
							translator: nc.W$,
							locale: n.languagePreference,
							children: (0, Q.jsx)(nl.I18nLoader, {
								loadPhrases: r,
								children: n.children
							})
						})
					})
				},
				nw = async n => {
					let e = nh.lang.substring(0, nh.lang.length - 2) + nh.lang.substring(nh.lang.length - 2, nh.lang.length).toUpperCase();
					if (!(0, w.C)(e)) {
						console.warn("".concat(e, " is not a supported locale.")), delete nh.lang, n.history.replace({
							search: nu().stringify(nh)
						});
						return
					}(0, nm.xS)(e), delete nh.lang, nf(n, e), n.isAuthenticated || n.history.replace({
						search: nu().stringify(nh)
					})
				}, nf = async (n, e) => {
					if (n.isAuthenticated) try {
						await n.setUserCommPreferences({
							"language-locale": e
						}, {
							hideErrorAlert: !0
						}), K.A.remove(nm.hd), n.history.replace({
							search: nu().stringify(nh)
						})
					} catch (n) {
						K.A.set(nm.hd, !0), console.error(n)
					} else K.A.set(nm.hd, !0)
				}, nk = {
					setUserCommPreferences: np.ij
				};
			var ny = (0, X.withRouter)((0, ne.connect)(n => {
				let e = (0, ng.wz)(n);
				return {
					isAuthenticated: !!(e && e.id),
					languagePreference: (0, nm.JK)() || (0, w.j)(n)
				}
			}, nk)(nb));
			nb.propTypes = {
				history: ni().object,
				languagePreference: ni().string.isRequired,
				children: ni().node.isRequired,
				isAuthenticated: ni().bool,
				setUserCommPreferences: ni().func.isRequired
			};
			var nx = r("../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				n_ = r("../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let nE = function() {
				let {
					selectorPrefix: n = "c_"
				} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return t || (t = (0, n_.A)({
					dev: !1,
					selectorPrefix: n
				})), t
			};
			r("./react/common/out.css");
			var nO = r("./react/common/components/ModalManager.tsx"),
				nT = r("./react/app/components/ErrorBoundary.tsx"),
				nA = r("./react/common/actions/notificationsActions.ts");
			let nI = (r.g.bootstrap || {}).data || {};
			class nC extends J.Component {
				componentDidMount() {
					nI.messages && this.dispatchNotificationActions(nI.messages)
				}
				dispatchNotificationActions(n) {
					n.forEach(n => {
						let {
							type: e,
							message: r,
							persist: o
						} = n;
						["success", "info", "warn", "error"].includes(e) && this.props.notifyAdd(e, (0, nc.Ay)(r), {
							persist: !!o
						})
					})
				}
				render() {
					return null
				}
			}
			let nS = (0, X.withRouter)((0, ne.connect)(null, {
				notifyAdd: nA.add
			})(nC));
			nC.propTypes = {
				notifyAdd: ni().func.isRequired
			};
			var nN = r("./react/app/redux/index.ts"),
				nR = r("./react/common/selectors/entitlementsSelectors.ts"),
				nL = r("./react/common/selectors/accountSelectors.ts");
			let nD = ["is_ent", "is_free_account"];
			var nP = r("./react/common/selectors/zoneSelectors.ts");
			let nM = () => {
				var n;
				let e, r, o, t, a, i, c, l, s, d, u, p, g, m, v, h;
				return r = (null == (e = (0, nN.Dx)(ng.wz)) || null == (n = e.email) ? void 0 : n.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user", o = (0, V.KL)(), (0, J.useEffect)(() => {
					o({
						userType: r
					})
				}, [r, o]), t = (0, V.ME)(), a = (0, X.useHistory)(), i = (0, R.kW)(a.location.pathname), c = (0, V.KL)(), l = (0, V.TP)(), d = !(s = (0, nN.Dx)(nR.n4)).isRequesting && !!s.data, u = (0, nN.Dx)(nR.WJ), p = (0, nN.Dx)(nL._d), g = (0, nN.Dx)(nL.xX), m = !p.isRequesting && !!p.data, (0, J.useEffect)(() => {
					if (i && m && g && d && i === g.account.id) {
						var n, e, r, o;
						c({
							accountId: g.account.id,
							is_ent: u || (null == g || null == (n = g.account.meta) ? void 0 : n.has_enterprise_zones),
							is_free_account: !u && !(null == g || null == (e = g.account.meta) ? void 0 : e.has_business_zones) && !(null == g || null == (r = g.account.meta) ? void 0 : r.has_pro_zones) && !(null == g || null == (o = g.account.meta) ? void 0 : o.has_enterprise_zones)
						})
					} else(!i || i in t && t.accountId !== i) && (c({
						accountId: "none"
					}), l(nD))
				}, [m, g, c, l, d, u, i, t]), v = (0, nN.Dx)(nP.HD), h = (0, V.KL)(), (0, J.useEffect)(() => {
					var n;
					h({
						zone_id: null == v ? void 0 : v.id,
						zone_plan: null == v || null == (n = v.plan) ? void 0 : n.legacy_id
					})
				}, [v, h]), null
			};
			var nj = r("./react/app/components/Persistence/index.tsx"),
				nU = r("../../../node_modules/@cloudflare/elements/es/index.js"),
				nF = r("./react/app/components/LoadingSuspense.tsx");
			let nz = (0, J.lazy)(() => Promise.all([r.e("96977"), r.e("87642")]).then(r.bind(r, "./react/common/components/DevPanel/Main.tsx")));
			var nG = () => (0, Q.jsx)(nF.A, {
				children: (0, Q.jsx)(nz, {})
			});
			let nW = () => (J.useEffect(() => m, []), null);
			var nK = r("../../../node_modules/moment/moment.js"),
				nB = r.n(nK),
				nV = r("./react/common/constants/constants.ts"),
				nH = r("./react/utils/useDomainConnectRedirect.ts"),
				nY = r("./react/utils/fragments.ts");
			let nq = (0, J.lazy)(() => Promise.all([r.e("78718"), r.e("38962"), r.e("20587"), r.e("93868"), r.e("11611"), r.e("23643"), r.e("75977"), r.e("74188"), r.e("35606"), r.e("69476"), r.e("53171")]).then(r.bind(r, "./react/AuthenticatedApp.jsx"))),
				nZ = (0, J.lazy)(() => Promise.all([r.e("97702"), r.e("66358"), r.e("20587"), r.e("12760"), r.e("74188"), r.e("70647"), r.e("14014")]).then(r.bind(r, "./react/UnauthenticatedApp.tsx")));
			var nQ = n => {
					let e, {
						userIsAuthed: o
					} = n;
					e = (0, nN.Dx)(w.j), (0, J.useEffect)(() => {
						let n = (n => {
							switch (n) {
								case "en-US":
								case "es-ES":
								case "de-DE":
								case "fr-FR":
								case "it-IT":
								case "ja-JP":
								case "ko-KR":
									return n.slice(0, 2);
								case "es-MX":
								case "es-CL":
								case "es-EC":
								case "pt-BR":
								case "zh-CN":
								case "zh-TW":
									return n.toLowerCase();
								default:
									return "en"
							}
						})(e);
						n !== nB().locale() && nB().locale(n), document.documentElement.lang = e
					}, [e]), (0, J.useEffect)(() => {
						!async function() {
							var n, e, o, t;
							let a;
							if ((null == (e = window) || null == (n = e.build) ? void 0 : n.isPreviewDeploy) && (null == (t = window) || null == (o = t.build) ? void 0 : o.branch) !== "staging" && (a = "cookie"), a) try {
								let n = document.head.querySelector("link[rel=icon]");
								n && (n.href = (await r("./react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")("./favicon-".concat(a, ".ico"))).default)
							} catch (n) {}
						}()
					}, []), (0, nH.Y)(), (0, nY.Wv)();
					let {
						devPanelEnabled: t
					} = (() => {
						var n;
						let e = (0, X.useLocation)(),
							[r, o] = (0, J.useState)((null == (n = window) ? void 0 : n.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
						return (0, J.useEffect)(() => {
							let n = nu().parse(e.search);
							if (n.pt && K.A.set(nV.Lx, n.pt), null == n ? void 0 : n.devPanel) {
								var r, t;
								null == (t = window) || null == (r = t.localStorage) || r.setItem("gates_devtools_ui_gates_controller_enabled", "true"), o(!0)
							}
						}, [e.search]), {
							devPanelEnabled: r
						}
					})();
					return (0, Q.jsx)(J.Suspense, {
						fallback: (0, Q.jsx)(nW, {}),
						children: (0, Q.jsxs)(X.Switch, {
							children: [!o && (0, Q.jsx)(X.Route, {
								exact: !0,
								path: ["/", "/login"],
								children: (0, Q.jsx)(nZ, {
									children: t && (0, Q.jsx)(nG, {})
								})
							}), (0, Q.jsx)(X.Route, {
								render: () => (0, Q.jsx)(nU.i, {
									minHeight: "100vh",
									children: (0, Q.jsx)(nq, {
										children: t && (0, Q.jsx)(nG, {})
									})
								})
							})]
						})
					})
				},
				nJ = r("../../../node_modules/yup/es/index.js"),
				nX = r("../../common/util/types/src/utils/index.ts");
			let n$ = {
				cfEmail: () => nJ.Yj().email((0, nc.Ay)("common.validation.email")).required((0, nc.Ay)("common.validation.email")),
				cfPassword: () => nJ.Yj().required((0, nc.Ay)("common.validation.required"))
			};
			(0, nX.uv)(n$).forEach(n => {
				nJ.Zg(nJ.Yj, n, n$[n])
			});
			var n0 = r("../../../node_modules/@cloudflare/authorization/es/index.js"),
				n1 = r("./react/pages/zone-versioning/selectors.ts");

			function n5(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						o = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
						return Object.getOwnPropertyDescriptor(r, n).enumerable
					}))), o.forEach(function(e) {
						var o;
						o = r[e], e in n ? Object.defineProperty(n, e, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[e] = o
					})
				}
				return n
			}
			let n2 = n => {
					var e;
					let {
						children: r
					} = n, o = null == (e = (0, nN.Dx)(ng.wz)) ? void 0 : e.id, t = (0, nN.Dx)(nP.HD), a = (0, nN.Dx)(n1.FJ);
					return (0, Q.jsx)(n0.ZP, {
						userID: o,
						contextZone: t,
						contextZoneVersionLock: a,
						reportSentryException: n3,
						children: r
					})
				},
				n4 = new Set,
				n3 = (n, e, r) => {
					let {
						parentComponent: o,
						stackSummary: t
					} = n6(n), i = "".concat(e.component, "->").concat(t, "->").concat(e.component_issue);
					n4.has(i) || (n4.add(i), a.Cp(n, {
						tags: n5({
							parentComponent: o
						}, e),
						extra: n5({
							stackSummary: t
						}, r),
						level: "error"
					}))
				},
				n6 = n => {
					var e;
					let r = (n.stack || "").split("\n"),
						o = [];
					for (let n of r)
						for (let e of [/at (\w+)\s+\(/, /at Object\.(\w+)/, /(\w+)@/, /\/(\w+)\.tsx?:/, /\/(\w+)\.jsx?:/]) {
							let r = n.match(e);
							if (r && r[1] && !["Object", "eval", "anonymous"].includes(r[1])) {
								o.push(r[1]);
								break
							}
						}
					let t = [...new Set(o)].filter(n => !["useIsAuthorized", "renderWithHooks", "updateFunctionComponent"].includes(n)).slice(0, 5);
					return {
						parentComponent: null != (e = t[0]) ? e : "undefined",
						stackSummary: t.join(" → ")
					}
				};
			var n8 = r("./react/common/components/Kumo/Providers/TooltipProvider.tsx");
			let n9 = (0, J.lazy)(() => Promise.all([r.e("55802"), r.e("78718"), r.e("39854")]).then(r.bind(r, "./react/AuthOnlyProviders.tsx"))),
				n7 = () => {
					let n = (0, nv.wR)(),
						[e, r] = (0, J.useState)(n ? n9 : J.Fragment),
						o = function() {
							let [n, e] = (0, J.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
							return (0, J.useEffect)(() => {
								let n = window.matchMedia("(prefers-color-scheme: dark)"),
									r = n => {
										e(n.matches ? "dark" : "light")
									};
								return n.addEventListener("change", r), () => {
									n.removeEventListener("change", r)
								}
							}, []), n
						}(),
						[t, a] = (0, J.useState)((0, d.ud)());
					(0, J.useEffect)(() => {
						(0, d.wN)(() => a((0, d.ud)()))
					}, []);
					let i = function() {
						var n;
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.JZ.SYSTEM,
							r = e === d.JZ.ON || e === d.JZ.SYSTEM && "dark" === o;
						n = () => {
							a(r), (0, d.S8)(e)
						}, document.startViewTransition ? document.startViewTransition(() => n()) : n(), document.cookie = "dark-mode=".concat(e, ";Path=/;Max-Age=31536000")
					};
					return (0, J.useEffect)(() => {
						r(n ? n9 : J.Fragment)
					}, [n]), (0, J.useEffect)(() => {
						let n = () => {
							i(localStorage.getItem("dark-mode"))
						};
						return window.addEventListener("storage", n), () => window.removeEventListener("storage", n)
					}, []), (0, Q.jsx)(J.Suspense, {
						fallback: null,
						children: (0, Q.jsx)(ne.Provider, {
							store: (0, c.KA)(),
							children: (0, Q.jsx)(X.Router, {
								history: S,
								children: (0, Q.jsx)($.Kl, {
									children: (0, Q.jsx)(e, {
										children: (0, Q.jsx)(nx.A, {
											renderer: nE(),
											children: (0, Q.jsx)(ny, {
												children: (0, Q.jsx)(nT.t, {
													sentryTag: "Root",
													children: (0, Q.jsx)(n2, {
														children: (0, Q.jsxs)(nr.BE, {
															value: {
																fetcher: n => fetch(n).then(n => n.json())
															},
															children: [(0, Q.jsx)(nM, {}), (0, Q.jsx)(nS, {}), (0, Q.jsx)(nj.Hj, {
																onDarkModeChangeCb: i,
																children: (0, Q.jsx)(nt.Ay, {
																	children: (0, Q.jsx)(n8.B, {
																		children: (0, Q.jsx)(nQ, {
																			userIsAuthed: n
																		})
																	})
																})
															}), (0, Q.jsx)(nO.Ay, {}), (0, Q.jsx)(no.Bs, {})]
														})
													})
												})
											})
										})
									})
								})
							})
						})
					})
				};
			var en = r("./utils/initSparrow.ts"),
				ee = r("./utils/zaraz.ts");
			let er = () => {
					let n = (0, ng.wz)((0, c.KA)().getState());
					eo(), (0, en.Pl)(), (0, ee.Le)(), (null == n ? void 0 : n.id) && P().setUserId(null == n ? void 0 : n.id), (0, en.ls)(), (0, en._G)() || (0, en.MJ)(), n ? (0, ee.Uf)(n) : (0, ee.XH)()
				},
				eo = () => {
					var n, e;
					null == (e = window) || null == (n = e.OneTrust) || n.OnConsentChanged(() => {
						let n = (0, ng.wz)((0, c.KA)().getState());
						(0, en._G)() ? (P().setEnabled(!0), (null == n ? void 0 : n.id) ? (P().setUserId(n.id), (0, ee.Uf)(n)) : (0, ee.XH)(), (0, en.ls)()) : (P().setEnabled(!1), (0, en.MJ)())
					})
				},
				et = (n, e) => {
					var r;
					let o, t;
					a.v4(function(r) {
						r.setTag("init", e), a.Cp(n)
					}), o = document.getElementById("loading-state"), t = !!(null == (r = s.parse(document.cookie)) ? void 0 : r[u.Nt]), o && (o.innerHTML = p(null == n ? void 0 : n.code, t))
				},
				ea = async (n, e) => {
					try {
						return await n(), !0
					} catch (n) {
						return et(n, e), !1
					}
				};
			(async () => {
				try {
					var n, e, t, s;
					let d, u;
					for (let n of (r.g.build = (e = function(n) {
							for (var e = 1; e < arguments.length; e++) {
								var r = null != arguments[e] ? arguments[e] : {},
									o = Object.keys(r);
								"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
									return Object.getOwnPropertyDescriptor(r, n).enumerable
								}))), o.forEach(function(e) {
									var o;
									o = r[e], e in n ? Object.defineProperty(n, e, {
										value: o,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : n[e] = o
								})
							}
							return n
						}({}, {
							branch: "master",
							isReleaseCandidate: "true",
							commit: "be85d375821b29909eb660a7a5be70f82b9a84c8",
							dashVersion: "37569988",
							env: "production",
							builtAt: 0x19b0d38e71b,
							versions: {
								"@cloudflare/app-dash": "25.161.22",
								node: "20.19.5",
								yarn: "3.2.2",
								webpack: "5.75.0"
							}
						}), t = {
							isPreviewDeploy: (0, k.k)()
						}, t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(n, e) {
							var r = Object.keys(n);
							if (Object.getOwnPropertySymbols) {
								var o = Object.getOwnPropertySymbols(n);
								r.push.apply(r, o)
							}
							return r
						})(Object(t)).forEach(function(n) {
							Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
						}), e), (() => {
							if (x && 1) {
								var n, e, r, t, i, l, s, d, u, p;
								let g = (0, G.A)(),
									m = "production";
								(null == (e = window) || null == (n = e.build) ? void 0 : n.isPreviewDeploy) && (m += "-preview"), "canary" === g && (m = "canary"), b.T({
									dsn: x,
									release: (0, k.n)(),
									environment: m,
									ignoreErrors: E,
									allowUrls: _,
									autoSessionTracking: !1,
									integrations: n => {
										var e, r;
										return [...n.filter(n => "GlobalHandlers" !== n.name && "TryCatch" !== n.name), new z, new C.IQ.BrowserTracing({
											routingInstrumentation: (e = S, r = "react-router-v5", function(n) {
												let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
													a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
												t && L && L.location && (o = n({
													name: (0, R.eD)(L.location.pathname),
													op: "pageload",
													tags: {
														"routing.instrumentation": r
													}
												})), a && e.listen && e.listen((e, t) => {
													t && ("PUSH" === t || "POP" === t) && (o && o.finish(), o = n({
														name: (0, R.eD)(e.pathname),
														op: "navigation",
														tags: {
															"routing.instrumentation": r
														}
													}))
												})
											})
										})]
									},
									tracesSampleRate: 0,
									transport: I,
									beforeSend: n => {
										var e, r, o;
										let t = function(n) {
											let e = null;
											for (let [r, o] of Object.entries(W))
												for (let t of o)
													if (function(n, e) {
															let r = n.split("/").slice(1).filter(n => "" !== n),
																o = e.split("/").slice(1).filter(n => "" !== n);
															for (let n = 0; n < o.length; n++) {
																let e = o[n],
																	t = r[n];
																if ("**" === e) return !0;
																if (void 0 === t) return !1;
																if ("*" !== e && !e.startsWith(":") && e !== t) return !1
															}
															let t = o[o.length - 1];
															return !(r.length > o.length) || "**" === t
														}(n, t)) {
														let n = function(n) {
															let e = n.split("/").slice(1),
																r = 0;
															for (let n of e) "**" === n ? r += 0 : "*" === n ? r += 1 : n.startsWith(":") ? r += 2 : r += 3;
															return r
														}(t);
														(!e || n > e.specificity) && (e = {
															team: r,
															specificity: n
														})
													} return (null == e ? void 0 : e.team) || "unassigned"
										}(null != (e = window.location.pathname) ? e : "");
										return O.g.setEventId(n.event_id), r = function(n) {
											for (var e = 1; e < arguments.length; e++) {
												var r = null != arguments[e] ? arguments[e] : {},
													o = Object.keys(r);
												"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
													return Object.getOwnPropertyDescriptor(r, n).enumerable
												}))), o.forEach(function(e) {
													var o;
													o = r[e], e in n ? Object.defineProperty(n, e, {
														value: o,
														enumerable: !0,
														configurable: !0,
														writable: !0
													}) : n[e] = o
												})
											}
											return n
										}({}, n.tags), o = o = {
											team: t
										}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(n, e) {
											var r = Object.keys(n);
											if (Object.getOwnPropertySymbols) {
												var o = Object.getOwnPropertySymbols(n);
												r.push.apply(r, o)
											}
											return r
										})(Object(o)).forEach(function(n) {
											Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(o, n))
										}), n.tags = r, n
									}
								});
								let v = (0, c.KA)().getState();
								a.cx({
									LOCAL_STORAGE_FLAGS: (0, f.sI)(),
									USER_BETA_FLAGS: (0, f._K)(),
									meta: {
										connection: {
											type: null == (i = window) || null == (t = i.navigator) || null == (r = t.connection) ? void 0 : r.effectiveType,
											bandwidth: null == (d = window) || null == (s = d.navigator) || null == (l = s.connection) ? void 0 : l.downlink
										},
										languagePreference: (0, w.j)(v),
										isPreviewDeploy: null == (p = window) || null == (u = p.build) ? void 0 : u.isPreviewDeploy
									},
									utilGates: (0, h.Lv)(v)
								}), window.addEventListener("unhandledrejection", function(n) {})
							}
						})(), [{
							fn: () => r.e("22013").then(r.bind(r, "./react/utils/api.ts")),
							tag: "utils/api"
						}, {
							fn: () => {
								S.listen(n => (function(n) {
									let e = n.substr(1);
									if (e && l !== e) {
										let n = document.getElementById(e);
										if (n) {
											let e = n.getBoundingClientRect().top;
											e > 0 && (document.documentElement.scrollTop = e - 61)
										}
									}
									l = e
								})(n.hash))
							},
							tag: "hashScroll"
						}, {
							fn: v.A,
							tag: "styles"
						}, {
							fn: B,
							tag: "mfePreviewData"
						}]))
						if (!await ea(n.fn, n.tag)) return;
					let p = (0, c.KA)();
					if (!await ea(async () => {
							d = await (0, Z.BK)(n => {
								r.g.bootstrap = n;
								let e = (null == n ? void 0 : n.data) || {};
								p.dispatch((0, i.b7)("user", null == e ? void 0 : e.user))
							})
						}, "bootstrap")) return;
					let g = (null == d ? void 0 : d.data) || {};
					p.dispatch((0, i.b7)("user", null == g ? void 0 : g.user));
					let m = null == d || null == (n = d.data) ? void 0 : n.user;
					if (r.g.bootstrap = d, m && m.id && ((s = m.id) ? a.gV({
							id: s
						}) : a.gV(null)), !await ea(q, "gates") || !(0, y.W)() && !await ea(er, "tracking")) return;
					return void((u = document.getElementById("react-app")) && (0, nn.createRoot)(u).render((0, Q.jsx)(n7, {})))
				} catch (n) {
					et(n, "global")
				}
			})()
		},
		"./libs/init/initBootstrap.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				IM: function() {
					return l
				},
				BK: function() {
					return d
				}
			});
			var o = r("../../../node_modules/@sentry/core/esm/exports.js");
			class t extends Error {
				constructor(n, e) {
					super(e), this.name = "".concat(n, " ").concat(e)
				}
			}
			let a = async () => {
				let n = await fetch("/api/v4/system/bootstrap", {
					credentials: "same-origin"
				});
				if (!n.ok) throw "text/html" === n.headers.get("content-type") && (await n.text()).toLowerCase().includes("cookie too large") && (o.v4(function(n) {
					n.setTag("init", "cookieTooLarge"), o.Cp("Request Header Or Cookie Too Large in Bootstrap request")
				}), document.cookie.split(";").forEach(n => {
					let [e] = n.trim().split("=");
					document.cookie = "".concat(e, "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;")
				}), window.location.reload()), new t("Bootstrap API Failure", null == n ? void 0 : n.status);
				return (await n.json()).result.data
			}, i = "bootstrap-cache", c = "bootstrap-cache-expire";

			function l() {
				localStorage.removeItem(i), localStorage.removeItem(c)
			}

			function s(n) {
				try {
					localStorage.setItem(i, JSON.stringify(n)), localStorage.setItem(c, (Date.now() + 864e5).toString())
				} catch (n) {
					try {
						l()
					} catch (n) {
						o.v4(e => {
							e.setTag("bootstrap", "cache-write-failure"), o.Cp(n)
						})
					}
				}
			}
			let d = async n => {
				let e = function() {
					try {
						var n, e;
						if (Number(null != (e = localStorage.getItem(c)) ? e : 0) < Date.now()) return;
						let r = localStorage.getItem(i);
						if (!r) return;
						let o = JSON.parse(r);
						if (!o || "object" != typeof o || !(null == (n = o.data) ? void 0 : n.user) || "object" != typeof o.data.user || !o.data.user.id) return;
						return o
					} catch (n) {
						o.v4(e => {
							e.setTag("bootstrap", "cache-read-failure"), o.Cp(n)
						})
					}
				}();
				if (e) return a().then(r => {
					var t, a, i, c;
					if ((null == e || null == (a = e.data) || null == (t = a.user) ? void 0 : t.id) !== (null == r || null == (c = r.data) || null == (i = c.user) ? void 0 : i.id)) s(r), window.location.reload();
					else {
						s(r);
						try {
							n(r)
						} catch (n) {
							throw o.Cp(n), n
						}
					}
				}).catch(n => {
					o.v4(e => {
						e.setTag("bootstrap", "swr-revalidate"), o.Cp(n)
					}), console.error("Bootstrap SWR revalidation failed:", n)
				}), e;
				{
					let n = await a();
					return s(n), n
				}
			}
		},
		"./libs/init/initGlobal.ts": function() {
			var n;
			(n = window).global || (n.global = window)
		},
		"./react/app/components/AccountHome/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				$J: function() {
					return x
				},
				$U: function() {
					return T
				},
				CK: function() {
					return C
				},
				DM: function() {
					return w
				},
				EY: function() {
					return E
				},
				K8: function() {
					return y
				},
				V1: function() {
					return f
				},
				Yu: function() {
					return k
				},
				cq: function() {
					return A
				},
				hA: function() {
					return b
				},
				lp: function() {
					return O
				},
				nj: function() {
					return I
				},
				t2: function() {
					return _
				}
			});
			var o = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				t = r.n(o),
				a = r("./react/utils/url.ts");
			let i = "projects table click",
				c = "click create application",
				l = "account home dev plat - product card click",
				s = "account home dev plat - empty state CTA click",
				d = "account home dev plat - view all projects click",
				u = "account home zero trust - link card click",
				p = "account home zero trust - onboarding card click",
				g = "account home zero trust - analytics link click",
				m = "account home zero trust - product card click",
				v = "account home zero trust - plan pill click",
				h = "account home zero trust - plan fallback link click",
				b = {
					SPARROW_PROJECTS_TABLE_CLICK: i,
					SPARROW_CREATE_PROJECT_CLICK: c,
					SPARROW_PRODUCT_CARD_CLICK: l,
					SPARROW_EMPTY_STATE_CTA_CLICK: s,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: d,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: u,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: p,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: g,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: m,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: v,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: h
				},
				w = n => {
					t().sendEvent(i, {
						component: n
					})
				},
				f = n => {
					t().sendEvent(i, {
						component: "menu",
						subcomponent: n
					})
				},
				k = () => {
					t().sendEvent(c, {
						category: "Projects Table"
					})
				},
				y = n => {
					let {
						category: e,
						product: r
					} = n;
					t().sendEvent(l, {
						category: e,
						product: r
					})
				},
				x = () => {
					t().sendEvent(s)
				},
				_ = () => {
					t().sendEvent(d)
				},
				E = n => {
					t().sendEvent(p, {
						category: n
					})
				},
				O = n => {
					let {
						category: e,
						href: r
					} = n;
					t().sendEvent(u, {
						category: e,
						href: (0, a.UG)(r)
					})
				},
				T = n => {
					let {
						category: e,
						href: r
					} = n;
					t().sendEvent(g, {
						category: e,
						href: (0, a.UG)(r)
					})
				},
				A = n => {
					let {
						category: e,
						product: r,
						href: o
					} = n;
					t().sendEvent(m, {
						category: e,
						product: r,
						href: (0, a.UG)(o)
					})
				},
				I = n => {
					let {
						plan: e
					} = n;
					t().sendEvent(v, {
						plan: e
					})
				},
				C = () => {
					t().sendEvent(h)
				}
		},
		"./react/app/components/DeepLink/constants.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				BM: function() {
					return i
				},
				F2: function() {
					return l
				},
				Kq: function() {
					return c
				},
				Lf: function() {
					return u
				},
				j2: function() {
					return t
				},
				jX: function() {
					return o
				},
				nc: function() {
					return d
				},
				uo: function() {
					return s
				},
				w3: function() {
					return a
				}
			});
			let o = "to",
				t = "_gl",
				a = "freeTrial",
				i = "deepLinkQueryParams",
				c = "resolvedDeepLinkQueryParams",
				l = "add",
				s = "multiSkuProducts",
				d = "/:account/:zone/billing/checkout",
				u = RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"./react/app/components/DeepLink/index.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Ay: function() {
					return y
				},
				Ci: function() {
					return k.Ci
				},
				Mz: function() {
					return l.Mz
				},
				hb: function() {
					return l.hb
				},
				vc: function() {
					return k.vc
				}
			});
			var o = r("webpack/sharing/consume/default/react/react"),
				t = r("./react/app/redux/index.ts"),
				a = r("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				i = r("./react/app/components/DeepLink/utils.ts"),
				c = r("./react/utils/bootstrap.ts"),
				l = r("./react/app/components/DeepLink/actions.ts"),
				s = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = r.n(s);

			function u(n, e, r) {
				return e in n ? Object.defineProperty(n, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[e] = r, n
			}

			function p(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						o = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
						return Object.getOwnPropertyDescriptor(r, n).enumerable
					}))), o.forEach(function(e) {
						u(n, e, r[e])
					})
				}
				return n
			}

			function g(n, e) {
				return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : (function(n, e) {
					var r = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						r.push.apply(r, o)
					}
					return r
				})(Object(e)).forEach(function(r) {
					Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r))
				}), n
			}
			class m {
				track(n) {
					try {
						if (this._done) return;
						this._done = !0;
						let e = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: v(this.startTime, this.endTime),
								totalCpuTime: v(this.startTime, this.endTime)
							},
							r = 0 === this.resolvers.size ? e : Array.from(this.resolvers.values()).reduce((n, e) => {
								let r = v(e.startTime, e.endTime),
									o = e.userActions.reduce((n, e) => {
										let r = v(e.startTime, e.endTime);
										return {
											totalTime: n.totalTime + r,
											actions: n.actions.set(e.actionType, r)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									t = r - o.totalTime;
								return p(g(p({}, n), {
									totalTime: n.totalTime + r,
									totalUserActionsTime: n.totalUserActionsTime + o.totalTime,
									totalCpuTime: n.totalCpuTime + t,
									["".concat(e.name, "ResolverTotalTime")]: r,
									["".concat(e.name, "ResolverTotalCpuTime")]: t,
									["".concat(e.name, "ResolverTotalUserActionsTime")]: o.totalTime
								}), Array.from(o.actions.keys()).reduce((n, r) => g(p({}, n), {
									["".concat(e.name, "Resolver/").concat(r)]: o.actions.get(r)
								}), {}))
							}, g(p({}, e), {
								totalTime: 0,
								totalCpuTime: 0
							}));
						d().sendEvent(n, r)
					} catch (n) {
						console.error(n)
					}
				}
				constructor(n, e) {
					u(this, "deepLink", void 0), u(this, "legacyDeepLink", void 0), u(this, "resolvers", void 0), u(this, "startTime", Date.now()), u(this, "endTime", Date.now()), u(this, "_done", !1), u(this, "resolverStart", n => {
						this.resolvers.set(n, {
							name: n,
							startTime: Date.now(),
							userActions: []
						})
					}), u(this, "resolverDone", n => {
						let e = this.resolvers.get(n);
						e && (e.endTime = Date.now(), this.resolvers.set(n, e))
					}), u(this, "resolverCancel", n => {
						this.resolverDone(n), this.cancel()
					}), u(this, "start", () => {
						this.startTime = Date.now()
					}), u(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), u(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), u(this, "createUserActionTracker", n => {
						var e = this;
						let r = "NO_ACTION",
							o = {
								actionType: r,
								startTime: 0
							};
						return {
							start: function() {
								let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
									a = e.resolvers.get(n);
								o.actionType = t, o.startTime = Date.now(), a && a.userActions.push(o)
							},
							finish: function() {
								let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
								o.actionType = n, o.endTime = Date.now()
							},
							cancel: function() {
								let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
								o.actionType = t, o.endTime = Date.now(), e.resolverCancel(n)
							}
						}
					}), this.deepLink = n, this.legacyDeepLink = e, this.resolvers = new Map
				}
			}

			function v() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
					e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
				return (e - n) / 1e3
			}
			var h = r("./react/app/components/DeepLink/constants.ts"),
				b = r("./react/common/hooks/useCachedState.ts"),
				w = r("./react/common/hooks/usePrevious.ts");

			function f(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						o = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
						return Object.getOwnPropertyDescriptor(r, n).enumerable
					}))), o.forEach(function(e) {
						var o;
						o = r[e], e in n ? Object.defineProperty(n, e, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[e] = o
					})
				}
				return n
			}
			r("./react/app/components/DeepLink/reducer.ts");
			var k = r("./react/app/components/DeepLink/selectors.ts"),
				y = n => {
					let {
						children: e
					} = n, r = (0, t.fr)(), s = (0, a.useHistory)(), d = (0, w.A)(s.location.pathname), [u, p] = (0, o.useState)(!0), [g, v] = (0, b.l)(void 0, {
						key: h.BM
					}), [k, y] = (0, b.l)(void 0, {
						key: h.Kq
					}), [x, _] = (0, b.l)(void 0, {
						key: h.uo
					}), E = (0, c.wR)(), O = new URLSearchParams(s.location.search), T = (0, i.bz)(s.location.pathname, O), A = null, I = null;
					if (O.has(h.j2) && O.delete(h.j2), O.get(h.jX)) A = O.get(h.jX), s.location.hash && (I = s.location.hash);
					else if (g) {
						let n = new URLSearchParams(g);
						n.get(h.jX) && (A = n.get(h.jX), O = n)
					} else T && (O.set(h.jX, T), A = T);
					if (A && h.Lf.test(A)) {
						let n = O.getAll(h.F2),
							e = JSON.stringify(n);
						n.length && e !== x && _(e), O.has(h.j2) && O.delete(h.j2), O.delete(h.F2)
					}!E && void 0 === g && A && v(O.toString());
					let C = async () => {
						try {
							if ((0, i.zq)(A) && E) {
								var n, e;
								g && v(void 0), r.dispatch((0, l.OP)()), p(!0), A && A !== k && y(A);
								let o = await (0, i.rB)(A, p, r, s, d, new m(A, T ? "".concat(s.location.pathname).concat(s.location.search) : void 0));
								O.delete(h.jX);
								let t = O.toString();
								s.replace(f((n = f({}, s.location), e = {
									pathname: o,
									search: t
								}, e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : (function(n, e) {
									var r = Object.keys(n);
									if (Object.getOwnPropertySymbols) {
										var o = Object.getOwnPropertySymbols(n);
										r.push.apply(r, o)
									}
									return r
								})(Object(e)).forEach(function(r) {
									Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r))
								}), n), I ? {
									hash: I
								} : {})), r.dispatch((0, l.CG)())
							}
						} catch (n) {
							r.dispatch((0, l.CG)()), console.error(n)
						} finally {
							p(!1)
						}
					};
					return (0, o.useEffect)(() => {
						C()
					}, [s.location.pathname, s.location.search]), (u || (0, i.zq)(A)) && E ? null : e
				}
		},
		"./react/app/components/DeepLink/utils.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Es: function() {
					return s
				},
				bz: function() {
					return v
				},
				rB: function() {
					return m
				},
				zq: function() {
					return u
				}
			});
			var o = r("../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				t = r("./react/app/components/DeepLink/reducer.ts"),
				a = r("./react/app/components/DeepLink/selectors.ts"),
				i = r("./react/app/components/DeepLink/constants.ts"),
				c = r("./react/common/validators/index.js"),
				l = r("./react/common/utils/isGuards.ts");
			let s = n => (0, c.oJ)(n) && (n.split(".").length > 1 || (0, l.hQ)(n)),
				d = o.eg.union([o.eg.literal("zone"), o.eg.literal("account"), o.eg.literal("pages-project"), o.eg.literal("pages-deployment"), o.eg.literal("worker")]),
				u = n => "string" == typeof n && n.startsWith("/"),
				p = (n, e) => r => new Promise((o, i) => {
					e.start();
					let c = n.subscribe(() => {
						let l = (0, a.vt)(n.getState());
						l === t.Y ? (e.cancel(), c(), i("DeepLink: waitForAction out of context.")) : r(l) && (e.finish(l.type), c(), o(l))
					})
				}),
				g = (n, e, r) => (o, c) => new Promise((l, s) => {
					r.start();
					let d = e.location.pathname;
					d !== (o = new URL(o, window.location.href).pathname) && (r.cancel(), s("DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: \"".concat(o, '", but on "').concat(d, '". You need to redirect to "').concat(o, '", and unblockRouter in your Resolver, before you use this function.')));
					let u = n.subscribe(() => {
						let d = (0, a.vt)(n.getState()),
							p = e.location.pathname,
							g = new URLSearchParams(e.location.search).get(i.jX);
						(p !== o || g) && (r.cancel(), u(), s('DeepLink: waitForPageAction user navigated away from "'.concat(o, '" to "').concat(p).concat(g ? e.location.search : "", '"'))), d === t.Y ? (r.cancel(), u(), s("DeepLink: waitForPageAction out of context.")) : c(d) && (r.finish(d.type), u(), l(d))
					})
				});
			async function m(n, e, o, t, a, i) {
				i.start();
				let c = function(n) {
						let e = [];
						for (let r of n.split("?")[0].split("/"))
							if (0 === r.length) continue;
							else r.startsWith(":") ? e.push({
								value: r.substring(1),
								type: "dynamic"
							}) : e.push({
								value: r,
								type: "static"
							});
						return e
					}(n),
					l = (await Promise.all([r.e("41793"), r.e("71475"), r.e("61300")]).then(r.bind(r, "./react/app/components/DeepLink/resolvers/index.ts"))).default,
					s = await l(),
					u = {},
					m = "";
				for (let [r, l] of c.entries())
					if ("static" === l.type) m = [m, l.value].join("/");
					else if ("dynamic" === l.type && d.is(l.value) && l.value in s) {
					i.resolverStart(l.value);
					let d = await s[l.value]({
						deepLink: n,
						blockRouter: () => e(!0),
						unblockRouter: () => e(!1),
						routerHistory: t,
						resolvedValues: u,
						store: o,
						referringRoute: a,
						uri: {
							currentPartIdx: r,
							parts: c
						},
						waitForAction: p(o, i.createUserActionTracker(l.value)),
						waitForPageAction: g(o, t, i.createUserActionTracker(l.value))
					});
					i.resolverDone(l.value), m = [m, d].join("/"), u[l.value] = d
				} else throw i.cancel(), Error("DeepLink: Resolver with name '".concat(l.value, "' is not supported."));
				return i.done(), m
			}

			function v(n, e) {
				let r = ":account",
					o = ":zone",
					t = e.get("zone");
				if (t) return e.delete("zone"), "/".concat(r, "/").concat(o, "/").concat(t);
				let a = e.get("account");
				if (a) return e.delete("account"), "/".concat(r, "/").concat(a);
				if ("/overview" === n) return "/".concat(r, "/").concat(o);
				for (let e of ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"]) {
					let t = e.length;
					if (n.startsWith(e) && (n.length === t || "/" === n[t])) return "/".concat(r, "/").concat(o).concat(n)
				}
				switch (n) {
					case "/account/billing":
						return "/".concat(r, "/billing");
					case "/account/subscriptions":
						return "/".concat(r, "/billing/subscriptions");
					case "/account/virtualDNS":
						return "/".concat(r, "/dns-firewall");
					case "/account/audit-log":
						return "/".concat(r, "/audit-log");
					default:
						return null
				}
			}
		},
		"./react/app/components/ErrorBoundary.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				t: function() {
					return b
				}
			});
			var o = r("../../../node_modules/react/jsx-runtime.js"),
				t = r("webpack/sharing/consume/default/react/react"),
				a = r("../../../node_modules/@sentry/react/esm/errorboundary.js"),
				i = r("./react/app/components/SomethingWrong.jsx"),
				c = r("./utils/sentry/lastSentEventId.ts"),
				l = r("./utils/zaraz.ts"),
				s = r("./react/utils/url.ts"),
				d = r("../../../node_modules/@cloudflare/elements/es/index.js"),
				u = r("../../../node_modules/@cloudflare/component-button/es/index.js"),
				p = r("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				g = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = r.n(g),
				v = r("./react/common/components/Page.tsx");

			function h() {
				return (0, t.useEffect)(() => {
					m().sendEvent("new page available refresh cta"), window.location.reload()
				}, []), (0, o.jsx)(v.A, {
					type: "narrow",
					children: (0, o.jsxs)(d.i, {
						textAlign: "center",
						children: [(0, o.jsx)(d.H1, {
							fontSize: 5,
							fontWeight: 400,
							children: (0, o.jsx)(p.Trans, {
								id: "error.new_page_version_available.title"
							})
						}), (0, o.jsx)(p.Trans, {
							id: "error.new_page_version_available.description"
						}), (0, o.jsx)(d.i, {
							children: (0, o.jsx)(d.E9, {
								height: 116,
								src: "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==",
								"aria-hidden": !0
							})
						}), (0, o.jsx)(u.$n, {
							mt: 3,
							type: "primary",
							iconType: "refresh",
							onClick: () => window.location.reload(),
							children: (0, o.jsx)(p.Trans, {
								id: "common.refresh"
							})
						})]
					})
				})
			}
			let b = n => {
				let {
					sentryTag: e,
					children: r,
					fallbackComponent: t
				} = n;
				return (0, o.jsx)(a.tH, {
					beforeCapture: n => {
						null === l.fj || void 0 === l.fj || l.fj.track("page-error", {
							page: (0, s.eD)(window.location.pathname)
						})
					},
					onError: n => {},
					fallback: n => {
						var r;
						let {
							error: a,
							eventId: l
						} = n;
						if (t) return t;
						let s = c.g.getEventId() || l;
						return (null == a || null == (r = a.message) ? void 0 : r.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), (0, o.jsx)(h, {})) : (0, o.jsx)(i.A, {
							type: "page",
							error: a,
							eventId: s,
							sentryTag: e
						})
					},
					children: r
				})
			}
		},
		"./react/app/components/FedRAMP/utils.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Ag: function() {
					return i
				},
				Gb: function() {
					return c
				},
				Ob: function() {
					return l
				},
				Zq: function() {
					return t
				},
				er: function() {
					return a
				},
				fx: function() {
					return o
				}
			});
			let o = "#FFFFFF",
				t = "#0a0a0a",
				a = "#5B697C",
				i = "#525F70",
				c = "#C8D4E5",
				l = "#3D4E67"
		},
		"./react/app/components/Footer.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				D: function() {
					return R
				}
			});
			var o = r("../../../node_modules/react/jsx-runtime.js"),
				t = r("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				a = r("../../../node_modules/@cloudflare/elements/es/index.js"),
				i = r("../../../node_modules/@cloudflare/style-container/es/index.js"),
				c = r("../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = r.n(l),
				d = r("../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				u = r("./react/common/components/Apple/utils.tsx"),
				p = r("./react/utils/translator.tsx"),
				g = r("../../../node_modules/moment/moment.js"),
				m = r.n(g);
			let v = (0, i.a0)(n => {
					let {
						theme: e,
						marginTop: r
					} = n;
					return {
						backgroundColor: "#1F1F1F",
						width: "100%",
						minHeight: "143px",
						marginTop: r
					}
				}),
				h = (0, i.a0)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				b = (0, i.a0)(n => {
					let {
						theme: e
					} = n;
					return {
						desktop: {
							marginLeft: "70px",
							padding: "33px 0 0 0"
						},
						mobile: {
							padding: "33px ".concat(e.space[3], "px")
						}
					}
				}),
				w = (0, i.a0)(n => {
					let {
						theme: e
					} = n;
					return {
						width: "100%",
						color: e.colors.white,
						fontSize: e.fontSizes[1],
						display: "flex",
						justifyContent: "space-between",
						flexDirection: "column",
						tablet: {
							flexDirection: "row"
						},
						desktop: {
							flexDirection: "row"
						}
					}
				}),
				f = (0, i.a0)(n => {
					let {
						theme: e
					} = n;
					return {
						display: "flex",
						flexWrap: "wrap",
						marginTop: e.space[3],
						desktop: {
							flexWrap: "nowrap"
						}
					}
				}),
				k = (0, i.a0)(n => {
					let {
						showOnDeskTop: e = !0,
						theme: r
					} = n;
					return {
						color: r.colors.white,
						fontSize: r.fontSizes[1],
						height: "20px",
						display: e ? "flex" : "none",
						alignItems: "center",
						desktop: {
							display: "flex",
							"&:nth-child(2)": {
								marginLeft: r.space[3],
								"&::before": {
									display: "inline-block"
								}
							}
						},
						"&:not(:first-child)": {
							marginLeft: r.space[3],
							"&::before": {
								content: "'\xb7'",
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
					}
				}),
				y = (0, i.RY)(n => {
					let {
						theme: e
					} = n;
					return {
						textDecoration: "none",
						color: e.colors.white,
						"&:hover": {
							color: e.colors.white,
							textDecoration: "underline"
						}
					}
				}, "a");
			var x = n => {
					let e = m()().format("YYYY"),
						r = n => {
							s().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: n
							})
						};
					return (0, o.jsx)(v, {
						marginTop: "auto",
						children: (0, o.jsx)(h, {
							children: (0, o.jsxs)(b, {
								children: [(0, o.jsxs)(w, {
									children: ["\xa9 ", e, " Cloudflare, Inc."]
								}), (0, o.jsxs)(w, {
									children: [(0, o.jsxs)(f, {
										children: [(0, o.jsx)(k, {
											showOnDeskTop: !1,
											children: (0, o.jsx)(y, {
												fontWeight: 600,
												href: "https://support.cloudflare.com/",
												onClick: () => r("Support"),
												children: (0, o.jsx)(p.x6, {
													id: "common.support"
												})
											})
										}), (0, o.jsx)(k, {
											children: (0, o.jsx)(y, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/privacypolicy/",
												onClick: () => r("Privacy Policy"),
												children: (0, o.jsx)(p.x6, {
													id: "footer.privacy_policy"
												})
											})
										}), (0, o.jsx)(k, {
											children: (0, o.jsx)(y, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/terms/",
												onClick: () => r("Terms of Use"),
												children: (0, o.jsx)(p.x6, {
													id: "apple.footer.terms_of_use"
												})
											})
										}), (0, o.jsx)(k, {
											children: (0, o.jsx)(y, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/cookie-policy/",
												onClick: () => r("Cookie Preferences"),
												children: (0, o.jsx)(p.x6, {
													id: "apple.footer.cookie_preferences"
												})
											})
										}), (0, o.jsx)(k, {
											children: (0, o.jsx)(y, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/trademark/",
												onClick: () => r("Trademark"),
												children: (0, o.jsx)(p.x6, {
													id: "apple.footer.trademark"
												})
											})
										})]
									}), (0, o.jsx)(f, {
										children: (0, o.jsx)(k, {
											children: (0, o.jsx)(y, {
												fontWeight: 400,
												href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
												onClick: () => r("ICANN's Domain Name Registrants' Rights"),
												children: (0, o.jsx)(p.x6, {
													id: "apple.footer.icanns"
												})
											})
										})
									})]
								})]
							})
						})
					})
				},
				_ = r("./react/pages/welcome/routes.ts"),
				E = r("webpack/sharing/consume/default/react/react"),
				O = r("./react/utils/cookiePreferences.ts"),
				T = () => {
					let [n, e] = (0, E.useState)(!1), r = (0, O.vM)(), t = r && "US" === r ? (0, p.Ay)("footer.cpra_cta.privacy_choices") : (0, p.Ay)("footer.cpra_cta.cookie_preferences"), i = (0, p.Ay)("footer.cpra_cta.privacy_choices_alt"), l = {
						background: "transparent",
						borderRadius: "none",
						color: n ? (0, c.ud)() ? "#ee730a" : "#003681" : (0, c.ud)() ? "#4693ff" : "#0051c3",
						textDecoration: n ? "underline" : "none",
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
					return (0, o.jsxs)(a.$n, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: l,
						onMouseEnter: () => {
							e(!0)
						},
						onMouseLeave: () => {
							e(!1)
						},
						children: [(0, o.jsx)(a.E9, {
							height: 15,
							src: "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
							mr: 2,
							alt: i
						}), t]
					})
				},
				A = r("./react/common/hooks/useGroupedRoutes.ts");
			(0, i.RY)(() => ({
				borderBottom: "1.5px solid transparent",
				paddingBottom: "1.25px",
				textDecoration: "none",
				":hover": {
					borderBottom: "1.5px solid ".concat((0, c.ud)() ? c.w4.colors.orange["6"] : c.w4.colors.blue["4"])
				}
			}), a.A);
			let I = (0, i.RY)(n => {
					let {
						theme: e
					} = n;
					return {
						color: e.colors.gray[4],
						textDecoration: "none",
						marginTop: (0, d.Fr)() ? "8px" : 0,
						":hover, :focus": {
							color: e.colors.gray[4]
						}
					}
				}, a.A),
				C = n => {
					var e, r, {
							children: t,
							target: a,
							rel: i
						} = n,
						c = function(n, e) {
							if (null == n) return {};
							var r, o, t = function(n, e) {
								if (null == n) return {};
								var r, o, t = {},
									a = Object.keys(n);
								for (o = 0; o < a.length; o++) r = a[o], e.indexOf(r) >= 0 || (t[r] = n[r]);
								return t
							}(n, e);
							if (Object.getOwnPropertySymbols) {
								var a = Object.getOwnPropertySymbols(n);
								for (o = 0; o < a.length; o++) r = a[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r])
							}
							return t
						}(n, ["children", "target", "rel"]);
					return (0, o.jsx)(I, (e = function(n) {
						for (var e = 1; e < arguments.length; e++) {
							var r = null != arguments[e] ? arguments[e] : {},
								o = Object.keys(r);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
								return Object.getOwnPropertyDescriptor(r, n).enumerable
							}))), o.forEach(function(e) {
								var o;
								o = r[e], e in n ? Object.defineProperty(n, e, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[e] = o
							})
						}
						return n
					}({
						target: a || "_blank",
						rel: i || "noopener noreferrer"
					}, c), r = r = {
						children: t
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(n, e) {
						var r = Object.keys(n);
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(n);
							r.push.apply(r, o)
						}
						return r
					})(Object(r)).forEach(function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
					}), e))
				},
				S = (0, i.RY)(n => {
					let {
						theme: e
					} = n;
					return {
						margin: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexWrap: "wrap",
						gap: (0, d.Fr)() ? "8px" : "16px",
						"& > li": {
							listStyleType: "none",
							"& > a": {
								fontSize: e.fontSizes[2],
								borderLeft: "1px solid",
								borderLeftColor: e.colors.gray[4],
								paddingLeft: "16px"
							},
							"&:first-child > a": {
								borderLeft: "none"
							}
						}
					}
				}, a.Ul),
				N = (0, i.RY)(n => {
					let {
						hasProductGroupingsGate: e
					} = n;
					return {
						display: "flex",
						flexDirection: (0, d.Fr)() ? "column" : "row",
						justifyContent: "center",
						paddingBottom: e ? "10px" : "16px"
					}
				}, a.i),
				R = () => {
					let {
						gate: n
					} = (0, A.Q)(), e = [_.B.root.pattern].some(n => (0, t.matchPath)(location.pathname, {
						path: n
					}));
					if ((0, u.OW)()) return (0, o.jsx)(x, {});
					if (e) return null;
					let r = new Date().getFullYear();
					return (0, o.jsx)(a.wi, {
						height: (0, d.Fr)() ? "auto" : n ? 48 : 60,
						bg: "background",
						borderTop: "1px solid",
						borderColor: "gray.8",
						py: n ? "10px" : "19px",
						pb: 0,
						px: [4, 3, 3],
						mt: "auto",
						id: "site-footer",
						children: (0, o.jsx)(N, {
							hasProductGroupingsGate: n,
							children: (0, o.jsxs)(S, {
								children: [(0, o.jsx)(a.Li, {
									children: (0, o.jsx)(C, {
										href: "https://support.cloudflare.com",
										children: (0, p.Ay)("common.support")
									})
								}), (0, o.jsx)(a.Li, {
									children: (0, o.jsx)(C, {
										href: "https://www.cloudflarestatus.com",
										children: (0, o.jsx)(a.L9, {
											textTransform: "capitalize",
											children: (0, p.Ay)("footer.system_status")
										})
									})
								}), (0, o.jsx)(a.Li, {
									children: (0, o.jsx)(C, {
										href: "https://www.cloudflare.com/careers/",
										children: (0, p.Ay)("footer.careers")
									})
								}), (0, o.jsx)(a.Li, {
									children: (0, o.jsx)(C, {
										href: "https://www.cloudflare.com/website-terms/",
										children: (0, p.Ay)("footer.tos_reduced")
									})
								}), (0, o.jsx)(a.Li, {
									children: (0, o.jsx)(C, {
										href: "https://www.cloudflare.com/disclosure/",
										children: (0, p.Ay)("footer.security_issues")
									})
								}), (0, o.jsx)(a.Li, {
									children: (0, o.jsx)(C, {
										href: "https://www.cloudflare.com/privacypolicy/",
										children: (0, p.Ay)("footer.privacy_policy")
									})
								}), (0, o.jsx)(a.Li, {
									children: (0, o.jsx)(T, {})
								}), (0, o.jsx)(a.Li, {
									children: (0, o.jsxs)(a.L9, {
										fontSize: 2,
										color: "gray.4",
										children: ["\xa9 ", r, " Cloudflare, Inc."]
									})
								})]
							})
						})
					})
				}
		},
		"./react/app/components/GlobalHeader/AddProductDropdown/config.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				_: function() {
					return i
				}
			});
			var o = r("./react/common/hooks/useGate.ts"),
				t = r("./react/app/components/GlobalHeader/AddProductDropdown/types.ts"),
				a = r("./react/utils/fedramp.ts");
			let i = () => {
				let n = (0, o.A)("super-add-button-copy-change"),
					e = [...(0, a.W)() ? [] : [{
						title: {
							id: "onboarding.add_product.new_domain.title"
						},
						trackingEvent: t.g.NEW_DOMAIN,
						icon: "globe",
						url: "?to=/:account/registrar/register",
						description: {
							id: "onboarding.add_product.new_domain.description"
						}
					}], {
						title: {
							id: "apps.workers"
						},
						trackingEvent: t.g.WORKERS,
						icon: "edgeworker",
						url: "?to=/:account/workers-and-pages/create",
						description: {
							id: "onboarding.add_product.workers.description"
						}
					}, {
						title: {
							id: "apps.pages"
						},
						trackingEvent: t.g.PAGES,
						icon: "workers-pages",
						url: "?to=/:account/workers-and-pages/create/pages",
						description: {
							id: "onboarding.add_product.pages.description"
						}
					}, {
						title: {
							id: "onboarding.add_product.r2.title"
						},
						trackingEvent: t.g.R2,
						icon: "r2",
						url: "?to=/:account/r2/new",
						description: {
							id: "onboarding.add_product.r2.description"
						}
					}, {
						title: {
							id: "onboarding.add_product.waf_ruleset.title"
						},
						trackingEvent: t.g.WAF_RULESET,
						icon: "cloudflare-security-application",
						url: "?to=/:account/application-security/waf/custom/create",
						description: {
							id: "onboarding.add_product.waf_ruleset.description"
						}
					}, {
						title: {
							id: "onboarding.add_product.account_member.title"
						},
						trackingEvent: t.g.ACCOUNT_MEMBERS,
						icon: "user-outline",
						url: "?to=/:account/members/invite",
						description: {
							id: "onboarding.add_product.account_member.description"
						},
						permissionCheck: "#member:edit"
					}];
				switch (n) {
					case "existing-website-app":
						return [{
							title: {
								id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
							},
							trackingEvent: t.g.EXISTING_DOMAIN,
							icon: "internet-browser",
							url: "?to=/:account/add-site",
							description: {
								id: "onboarding.add_product.existing_domain.description.fast_and_secure"
							},
							disableOn: "isZoneVersionLocked"
						}, ...e];
					case "existing-site-app":
						return [{
							title: {
								id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
							},
							trackingEvent: t.g.EXISTING_DOMAIN,
							icon: "internet-browser",
							url: "?to=/:account/add-site",
							description: {
								id: "onboarding.add_product.existing_domain.description.fast_and_secure"
							},
							disableOn: "isZoneVersionLocked"
						}, ...e];
					case "existing-site":
						return [{
							title: {
								id: "onboarding.add_product.existing_domain.title.gated.existing_site"
							},
							trackingEvent: t.g.EXISTING_DOMAIN,
							icon: "internet-browser",
							url: "?to=/:account/add-site",
							description: {
								id: "onboarding.add_product.existing_domain.description.fast_and_secure"
							},
							disableOn: "isZoneVersionLocked"
						}, ...e];
					case "your-website-app":
						return [{
							title: {
								id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
							},
							trackingEvent: t.g.EXISTING_DOMAIN,
							icon: "internet-browser",
							url: "?to=/:account/add-site",
							description: {
								id: "onboarding.add_product.existing_domain.description.fast_and_secure"
							},
							disableOn: "isZoneVersionLocked"
						}, ...e];
					case "your-site-app":
						return [{
							title: {
								id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
							},
							trackingEvent: t.g.EXISTING_DOMAIN,
							icon: "internet-browser",
							url: "?to=/:account/add-site",
							description: {
								id: "onboarding.add_product.existing_domain.description.fast_and_secure"
							},
							disableOn: "isZoneVersionLocked"
						}, ...e];
					default:
						return [{
							title: {
								id: "onboarding.add_product.existing_domain.title"
							},
							trackingEvent: t.g.EXISTING_DOMAIN,
							icon: "internet-browser",
							url: "?to=/:account/add-site",
							description: {
								id: "onboarding.add_product.existing_domain.description"
							},
							disableOn: "isZoneVersionLocked"
						}, ...(0, a.W)() ? [] : [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: t.g.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}], {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: t.g.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: t.g.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: t.g.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: t.g.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: t.g.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}]
				}
			};
			[t.g.EXISTING_DOMAIN, ...(0, a.W)() ? [] : [{
				title: {
					id: "onboarding.add_product.new_domain.title"
				},
				trackingEvent: t.g.NEW_DOMAIN,
				icon: "globe",
				url: "?to=/:account/registrar/register",
				description: {
					id: "onboarding.add_product.new_domain.description"
				}
			}], t.g.WAF_RULESET, t.g.WORKERS, t.g.PAGES, t.g.R2, t.g.ACCOUNT_MEMBERS]
		},
		"./react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				g: function() {
					return N.g
				},
				A: function() {
					return R
				}
			});
			var o = r("../../../node_modules/react/jsx-runtime.js"),
				t = r("webpack/sharing/consume/default/react/react"),
				a = r("../../../node_modules/@cloudflare/component-icon/es/index.js"),
				i = r("../../../node_modules/@cloudflare/elements/es/index.js"),
				c = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = r.n(c),
				s = r("../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = r("./react/common/components/AccessControl/index.js"),
				u = r("./react/common/components/ButtonWithDropdown.tsx"),
				p = r("./react/common/components/Dropdown/index.tsx"),
				g = r("./react/utils/translator.tsx"),
				m = r("./react/app/components/GlobalHeader/AddProductDropdown/config.ts"),
				v = r("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				h = r("../../../node_modules/@cloudflare/style-const/es/index.js");

			function b(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						o = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
						return Object.getOwnPropertyDescriptor(r, n).enumerable
					}))), o.forEach(function(e) {
						var o;
						o = r[e], e in n ? Object.defineProperty(n, e, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[e] = o
					})
				}
				return n
			}

			function w(n, e) {
				return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : (function(n, e) {
					var r = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						r.push.apply(r, o)
					}
					return r
				})(Object(e)).forEach(function(r) {
					Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r))
				}), n
			}
			let f = (0, s.RY)(n => {
				let {
					theme: e
				} = n, r = {
					cursor: "pointer",
					backgroundColor: (0, h.ud)() ? e.colors.gray[8] : e.colors.gray[9],
					color: e.colors.gray[2]
				};
				return {
					display: "block",
					width: "100%",
					px: [10, 14, 18],
					py: 8,
					background: e.colors.background,
					color: e.colors.gray[2],
					fontSize: e.fontSizes[2],
					userSelect: "none",
					textDecoration: "none",
					textAlign: "left",
					borderRadius: "1px",
					':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': r,
					':focus-within:not([aria-disabled="true"])': w(b({}, r), {
						boxShadow: "none",
						borderRadius: 0
					}),
					':is([aria-disabled="true"])': {
						color: e.colors.gray[6],
						cursor: "not-allowed",
						pointerEvents: "none",
						opacity: .5
					}
				}
			}, v.Link);
			var k = n => {
					var {
						title: e,
						trackingEvent: r,
						icon: t,
						url: c,
						description: s,
						disabled: d
					} = n, u = function(n, e) {
						if (null == n) return {};
						var r, o, t = function(n, e) {
							if (null == n) return {};
							var r, o, t = {},
								a = Object.keys(n);
							for (o = 0; o < a.length; o++) r = a[o], e.indexOf(r) >= 0 || (t[r] = n[r]);
							return t
						}(n, e);
						if (Object.getOwnPropertySymbols) {
							var a = Object.getOwnPropertySymbols(n);
							for (o = 0; o < a.length; o++) r = a[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r])
						}
						return t
					}(n, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return (0, o.jsx)(f, w(b({
						to: !d && c || "#",
						"aria-disabled": d,
						onClick: () => {
							l().sendEvent(r, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, u), {
						children: (0, o.jsxs)(i.i, {
							display: "flex",
							children: [(0, o.jsx)(a.I, {
								type: t,
								size: 24,
								mr: 2,
								mt: 1
							}), (0, o.jsxs)(i.i, {
								display: "flex",
								flexDirection: "column",
								flex: "1",
								children: [(0, o.jsx)(i.i, {
									fontSize: 2,
									children: (0, o.jsx)(g.x6, b({}, e))
								}), (0, o.jsx)(i.i, {
									fontSize: 1,
									color: "gray.4",
									children: (0, o.jsx)(g.x6, b({}, s))
								})]
							})]
						})
					}))
				},
				y = r("./react/utils/fedramp.ts"),
				x = r("./react/app/components/FedRAMP/utils.ts"),
				_ = r("./react/app/components/GlobalHeader/hooks.ts"),
				E = r("./react/app/components/GlobalHeader/types.ts"),
				O = r("./react/app/components/GlobalHeader/utils.ts"),
				T = r("./react/app/components/GlobalHeader/responsive.ts");

			function A(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						o = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
						return Object.getOwnPropertyDescriptor(r, n).enumerable
					}))), o.forEach(function(e) {
						var o;
						o = r[e], e in n ? Object.defineProperty(n, e, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[e] = o
					})
				}
				return n
			}
			let I = n => {
					let {
						disableProducts: e
					} = n, r = (0, m._)(), {
						updateActiveDropdown: a
					} = (0, _.r)();
					return (0, t.useEffect)(() => (a(E.F.ADD), l().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						a(null), l().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), [a]), (0, o.jsx)(u.W1, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200,
						minWidth: 240,
						children: r.map(n => {
							var r, t;
							let a = n || {},
								{
									disableOn: i,
									permissionCheck: c
								} = a,
								l = function(n, e) {
									if (null == n) return {};
									var r, o, t = function(n, e) {
										if (null == n) return {};
										var r, o, t = {},
											a = Object.keys(n);
										for (o = 0; o < a.length; o++) r = a[o], e.indexOf(r) >= 0 || (t[r] = n[r]);
										return t
									}(n, e);
									if (Object.getOwnPropertySymbols) {
										var a = Object.getOwnPropertySymbols(n);
										for (o = 0; o < a.length; o++) r = a[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r])
									}
									return t
								}(a, ["disableOn", "permissionCheck"]),
								s = i && e[i],
								u = (r = A({}, l), t = t = {
									disabled: s
								}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : (function(n, e) {
									var r = Object.keys(n);
									if (Object.getOwnPropertySymbols) {
										var o = Object.getOwnPropertySymbols(n);
										r.push.apply(r, o)
									}
									return r
								})(Object(t)).forEach(function(n) {
									Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n))
								}), r);
							return c ? (0, o.jsx)(d.A, {
								edit: c,
								children: n => {
									let {
										isEditable: e
									} = n;
									return e && (0, o.jsx)(k, A({}, u))
								}
							}, n.title.id) : (0, o.jsx)(k, A({}, u), n.url)
						})
					})
				},
				C = (0, s.RY)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				S = (0, s.RY)(n => {
					let {
						isActive: e,
						mode: r,
						theme: o
					} = n;
					return {
						display: "flex",
						alignItems: "center",
						justifyContent: "icon" === r ? "center" : "flex-start",
						minHeight: "32px",
						minWidth: "32px",
						borderRadius: 4,
						borderColor: (0, O.AZ)(e),
						borderWidth: 1,
						borderStyle: "solid",
						color: (0, O.VZ)(e),
						fontWeight: 500,
						cursor: "pointer",
						whiteSpace: "nowrap",
						backgroundColor: (0, O.gK)(e),
						fontSize: o.fontSizes[2],
						"&:hover": {
							backgroundColor: (0, y.W)() ? x.Ob : o.colors.blue[9],
							borderColor: (0, y.W)() ? x.fx : o.colors.blue[3],
							color: (0, y.W)() ? x.fx : o.colors.blue[3]
						},
						"&:active": {
							backgroundColor: (0, y.W)() ? x.Ob : o.colors.blue[7],
							borderColor: (0, y.W)() ? x.fx : o.colors.blue[1],
							color: (0, y.W)() ? x.fx : o.colors.blue[1]
						},
						"&:focus-visible": {
							outline: "2px solid ".concat(o.colors.categorical[0]),
							outlineOffset: 2
						}
					}
				}, i.$n);
			var N = r("./react/app/components/GlobalHeader/AddProductDropdown/types.ts"),
				R = n => {
					let {
						disableProducts: e
					} = n, {
						isActive: r
					} = (0, _.r)(E.F.ADD), {
						mode: t
					} = (0, T.z)("addProduct");
					return "hide" === t ? null : (0, o.jsx)(C, {
						role: "group",
						"data-testid": "GLOBAL_ADD_DROPDOWN",
						children: (0, o.jsx)(p.ms, {
							trigger: (0, o.jsxs)(S, {
								isActive: r,
								mode: t,
								children: [(0, o.jsx)(a.I, {
									label: "plus",
									type: "plus",
									mr: "icon" === t ? 0 : "4px"
								}), "full" === t && (0, o.jsx)(g.x6, {
									id: "common.add"
								})]
							}),
							menu: (0, o.jsx)(I, {
								disableProducts: e
							})
						})
					})
				}
		},
		"./react/app/components/GlobalHeader/AddProductDropdown/types.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				g: function() {
					return o
				}
			});
			let o = {
				ACCOUNT_MEMBERS: "add account members",
				EXISTING_DOMAIN: "add domain",
				NEW_DOMAIN: "register domain",
				PAGES: "add pages",
				R2: "add r2 storage",
				WAF_RULESET: "add waf ruleset",
				WORKERS: "add workers"
			}
		},
		"./react/app/components/GlobalHeader/Context.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				h: function() {
					return i
				},
				u: function() {
					return c
				}
			});
			var o = r("../../../node_modules/react/jsx-runtime.js"),
				t = r("webpack/sharing/consume/default/react/react");
			let a = (0, t.createContext)({
				activeDropdown: null,
				updateActiveDropdown: () => null
			});

			function i(n) {
				let {
					children: e
				} = n, [r, i] = (0, t.useState)(null);
				return (0, o.jsx)(a.Provider, {
					value: {
						activeDropdown: r,
						updateActiveDropdown: n => {
							i(e => e === n ? null : n)
						}
					},
					children: e
				})
			}

			function c() {
				let n = (0, t.useContext)(a);
				if (!n) throw Error("useHeaderContext must be used within HeaderProvider");
				return n
			}
		},
		"./react/app/components/GlobalHeader/hooks.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				r: function() {
					return t
				}
			});
			var o = r("./react/app/components/GlobalHeader/Context.tsx");
			let t = n => {
				let {
					activeDropdown: e,
					updateActiveDropdown: r
				} = (0, o.u)();
				return {
					isActive: e === n,
					updateActiveDropdown: r
				}
			}
		},
		"./react/app/components/GlobalHeader/responsive.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				z: function() {
					return i
				}
			});
			var o = r("./react/app/components/SidebarNav/context/Navigation.tsx"),
				t = r("../../../node_modules/@cloudflare/util-responsive/es/index.js");
			let a = {
					domain: {
						xxSmall: {
							logo: "hide",
							orgBreadcrumb: "compact",
							accountBreadcrumb: "hide",
							domainAttrs: "hide",
							quickSearch: "icon",
							addProduct: "hide",
							support: "icon",
							user: "icon"
						},
						xSmall: {
							logo: "hide",
							orgBreadcrumb: "compact",
							accountBreadcrumb: "hide",
							domainAttrs: "hide",
							quickSearch: "icon",
							addProduct: "icon",
							support: "icon",
							user: "icon"
						},
						small: {
							logo: "hide",
							orgBreadcrumb: "full",
							accountBreadcrumb: "full",
							domainAttrs: "full",
							quickSearch: "icon",
							addProduct: "icon",
							support: "icon",
							user: "icon"
						},
						medium: {
							logo: "full",
							orgBreadcrumb: "full",
							accountBreadcrumb: "full",
							domainAttrs: "full",
							quickSearch: "icon",
							addProduct: "icon",
							support: "icon",
							user: "icon"
						},
						large: {
							logo: "full",
							orgBreadcrumb: "full",
							accountBreadcrumb: "full",
							domainAttrs: "full",
							quickSearch: "full",
							addProduct: "full",
							support: "full",
							user: "full"
						}
					},
					default: {
						xxSmall: {
							logo: "hide",
							orgBreadcrumb: "compact",
							accountBreadcrumb: "full",
							quickSearch: "icon",
							addProduct: "hide",
							support: "icon",
							user: "icon"
						},
						xSmall: {
							logo: "hide",
							orgBreadcrumb: "compact",
							accountBreadcrumb: "full",
							quickSearch: "icon",
							addProduct: "icon",
							support: "icon",
							user: "icon"
						},
						small: {
							logo: "hide",
							orgBreadcrumb: "full",
							accountBreadcrumb: "full",
							quickSearch: "icon",
							addProduct: "icon",
							support: "icon",
							user: "icon"
						},
						medium: {
							logo: "full",
							orgBreadcrumb: "full",
							accountBreadcrumb: "full",
							quickSearch: "full",
							addProduct: "full",
							support: "full",
							user: "full"
						},
						large: {
							logo: "full",
							orgBreadcrumb: "full",
							accountBreadcrumb: "full",
							quickSearch: "full",
							addProduct: "full",
							support: "full",
							user: "full"
						}
					}
				},
				i = n => {
					let {
						type: e
					} = (0, o.cq)(), r = (0, t.dv)(), i = ["zone", "zoneV2"].includes(e) ? "domain" : "default", c = (n => {
						switch (n) {
							case "mobile":
								return "xxSmall";
							case "mobileWide":
								return "xSmall";
							case "tablet":
							case "tabletLegacy":
								return "small";
							case "tabletWide":
							case "desktop":
								return "medium";
							default:
								return "large"
						}
					})(r);
					return {
						mode: n ? a[i][c][n] : void 0,
						pageType: i,
						screenType: c
					}
				}
		},
		"./react/app/components/GlobalHeader/types.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				F: function() {
					return t
				}
			});
			var o, t = ((o = {}).ADD = "add", o.CANARY = "canary", o.ORGS = "orgs", o.QUICK_SEARCH = "quick_search", o.SUPPORT = "support", o.USER = "user", o)
		},
		"./react/app/components/GlobalHeader/utils.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				AZ: function() {
					return p
				},
				VZ: function() {
					return d
				},
				gK: function() {
					return u
				},
				vG: function() {
					return s
				}
			});
			var o = r("../../../node_modules/@cloudflare/style-const/es/index.js"),
				t = r("./react/utils/fedramp.ts"),
				a = r("./react/app/components/FedRAMP/utils.ts");
			let i = (0, t.W)() && (0, o.ud)(),
				c = (0, t.W)() && !(0, o.ud)(),
				l = (0, o.ud)(),
				s = n => {
					if ((0, t.W)()) return l ? n ? o.w4.colors.gray["9"] : a.fx : n ? o.w4.colors.gray["0"] : a.fx;
					return n ? o.w4.colors.gray["9"] : o.w4.colors.blue["0"]
				},
				d = n => i ? o.w4.colors.gray["1"] : c ? n ? a.Zq : o.w4.colors.gray["8"] : l && n ? o.w4.colors.white : l ? o.w4.colors.blue["2"] : o.w4.colors.blue["4"],
				u = n => n && (0, t.W)() ? a.Gb : (0, t.W)() || n && l ? o.w4.colors.gray["4"] : "transparent",
				p = n => i ? o.w4.colors.gray["1"] : c ? o.w4.colors.gray["8"] : n && l ? o.w4.colors.gray["4"] : !n && l ? o.w4.colors.blue["2"] : o.w4.colors.blue["4"]
		},
		"./react/app/components/LoadingSuspense.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				A: function() {
					return g
				},
				t: function() {
					return p
				}
			});
			var o = r("../../../node_modules/react/jsx-runtime.js"),
				t = r("webpack/sharing/consume/default/react/react"),
				a = r("../../../node_modules/@cloudflare/component-loading/es/index.js"),
				i = r("../../../node_modules/@cloudflare/elements/es/index.js"),
				c = r("./react/utils/translator.tsx"),
				l = r("./react/app/components/ErrorStatus.tsx"),
				s = r("./react/common/components/EmptyPage.jsx");

			function d(n) {
				let [e, r] = (0, t.useState)(!1);
				return (0, t.useEffect)(() => {
					let e = window.setTimeout(() => r(!0), n);
					return () => window.clearTimeout(e)
				}, []), e
			}
			r("../../../node_modules/@cloudflare/component-listener/es/index.js");
			let u = n => {
					let {
						loadingTimeout: e = 1e3,
						stillLoadingTimeout: r = 9e3
					} = n, u = d(e), p = d(r);
					if ((0, t.useEffect)(() => () => {
							window.dispatchEvent(new Event("suspenseComplete"))
						}, []), !u && !p) return (0, o.jsx)(s.A, {});
					let g = p ? (0, o.jsx)(c.x6, {
						id: "common.still_loading"
					}) : u ? (0, o.jsx)(c.x6, {
						id: "common.loading"
					}) : null;
					return (0, o.jsxs)(l.A, {
						size: 5,
						children: [(0, o.jsx)(i.i, {
							mr: 3,
							children: (0, o.jsx)(a.R, {
								size: "2x"
							})
						}), g]
					})
				},
				p = n => {
					let {
						children: e
					} = n;
					return (0, o.jsx)(t.Suspense, {
						fallback: (0, o.jsx)(u, {}),
						children: e
					})
				};
			var g = p
		},
		"./react/app/components/SomethingWrong.jsx": function(n, e, r) {
			"use strict";
			var o = r("../../../node_modules/react/jsx-runtime.js"),
				t = r("webpack/sharing/consume/default/react/react"),
				a = r("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				i = r("../../../node_modules/prop-types/index.js"),
				c = r.n(i),
				l = r("webpack/sharing/consume/default/react-redux/react-redux"),
				s = r("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				d = r("../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = r("../../../node_modules/@cloudflare/component-button/es/index.js"),
				p = r("../../../node_modules/@sentry/core/esm/exports.js"),
				g = r("../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				m = r("../../../node_modules/@cloudflare/component-header/es/index.js"),
				v = r("../../../node_modules/@cloudflare/component-logo/es/index.js"),
				h = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				b = r.n(h),
				w = r("./react/common/actions/membershipActions.ts"),
				f = r("./react/utils/url.ts"),
				k = r("./react/app/components/Footer.tsx");
			let y = (0, d.a0)(n => {
					let {
						type: e
					} = n;
					return {
						height: "fullscreen" !== e ? 451 : "75vh",
						tabletLegacy: {
							marginBottom: "-2.66rem"
						}
					}
				}),
				x = (0, d.a0)(n => {
					let {
						theme: e,
						margin: r,
						size: o = 6
					} = n;
					return {
						display: "flex",
						flexFlow: "column",
						color: e.colors.gray[3],
						height: r ? "auto" : "100%",
						padding: r ? 0 : e.space[o > 1 ? o - 2 : 0],
						margin: r,
						justifyContent: "center",
						alignItems: "center"
					}
				}),
				_ = (0, d.a0)(() => ({
					textAlign: "left"
				})),
				E = (0, d.a0)(() => ({
					textAlign: "right"
				})),
				O = (0, d.a0)(n => {
					let {
						theme: e
					} = n;
					return {
						fontSize: e.fontSizes[6]
					}
				}),
				T = (0, d.a0)(n => {
					let {
						theme: e
					} = n;
					return {
						fontSize: e.fontSizes[4]
					}
				}),
				A = (0, d.a0)(n => {
					let {
						theme: e
					} = n;
					return {
						fontSize: e.fontSizes[3]
					}
				}),
				I = (0, d.a0)(n => {
					let {
						theme: e
					} = n;
					return {
						width: "100%",
						height: 125,
						marginTop: e.space[4],
						padding: e.space[2]
					}
				}, "textarea"),
				C = n => {
					let {
						type: e,
						error: r,
						eventId: i,
						sentryTag: c
					} = n, [d, h] = (0, t.useState)(""), [C, S] = (0, t.useState)(!1), N = (0, l.useDispatch)();
					(0, t.useEffect)(() => {
						(async () => {
							console.error("SomethingWrong: ".concat(r));
							let n = "".concat(r),
								e = "",
								o = (0, f.sp)();
							if (o) {
								var t;
								let n = await N((0, w.Ic)({
										parameters: {
											status: "accepted"
										}
									})),
									r = null == n || null == (t = n.find(n => n.id === o)) ? void 0 : t.roles;
								r && r.length && (e = r.join(", "))
							}
							let a = "ErrorBoundary - ".concat(r);
							p.Cp(a, {
								tags: {
									errorBoundary: c,
									normalizedPath: (0, f.eD)(window.location.pathname),
									roles: e.length ? e : void 0
								}
							}), b().sendEvent("something wrong", {
								error: r,
								errorMessage: n,
								roles: e.length ? e : void 0
							})
						})()
					}, [r, c, N]);
					let R = (0, t.useCallback)(n => {
							h(n.target.value)
						}, []),
						L = (0, t.useCallback)(async () => {
							try {
								var n, e, r, o;
								let t = (null == (o = window) || null == (r = o.bootstrap) || null == (e = r.data) || null == (n = e.user) ? void 0 : n.id) || "Unknown",
									a = i || g.Q(),
									c = {
										name: t,
										email: "".concat(t, "@userid.com"),
										comments: d,
										eventId: a,
										url: window.location.href,
										prevUrl: document.referrer,
										date: Date.now(),
										dashVersion: window.build.dashVersion,
										build: function(n) {
											for (var e = 1; e < arguments.length; e++) {
												var r = null != arguments[e] ? arguments[e] : {},
													o = Object.keys(r);
												"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
													return Object.getOwnPropertyDescriptor(r, n).enumerable
												}))), o.forEach(function(e) {
													var o;
													o = r[e], e in n ? Object.defineProperty(n, e, {
														value: o,
														enumerable: !0,
														configurable: !0,
														writable: !0
													}) : n[e] = o
												})
											}
											return n
										}({}, window.build)
									};
								(await fetch("".concat("https://platform.dash.cloudflare.com", "/sentry/user-feedback"), {
									method: "POST",
									headers: {
										Accept: "*/*",
										"Content-Type": "application/json"
									},
									body: JSON.stringify(c)
								})).ok && (S(!0), h(""), setTimeout(() => window.location.href = "/", 5e3))
							} catch (n) {
								console.error(n)
							}
						}, [i, d]),
						D = (0, t.useCallback)(() => {
							"" !== d && L()
						}, [d, L]),
						P = n => (0, o.jsx)(s.I18n, {
							children: e => (0, o.jsx)(y, {
								type: n,
								children: (0, o.jsx)(x, {
									children: (0, o.jsxs)(_, {
										children: [(0, o.jsx)(O, {
											children: e.t("error.internal_issues")
										}), (0, o.jsx)(T, {
											children: e.t("error.help_us")
										}), (0, o.jsx)(I, {
											name: "comment",
											value: d,
											onChange: R,
											disabled: C,
											placeholder: e.t("error.give_feedback")
										}), (0, o.jsxs)(E, {
											children: [!C && (0, o.jsx)(u.$n, {
												onClick: D,
												type: "primary",
												children: e.t("common.submit")
											}), C && (0, o.jsx)(A, {
												children: e.t("error.feedback_sent")
											})]
										})]
									})
								})
							})
						});
					return "fullscreen" === e ? (0, o.jsxs)("div", {
						children: [(0, o.jsx)(m.Y9, {
							children: (0, o.jsx)(a.Link, {
								to: "/",
								children: (0, o.jsx)(v.gu, {})
							})
						}), P(e), (0, o.jsx)(k.D, {})]
					}) : P(e)
				};
			C.propTypes = {
				type: c().oneOf(["fullscreen", "page"]),
				error: c().oneOfType([c().string, c().object]),
				eventId: c().string,
				sentryTag: c().string
			}, e.A = C
		},
		"./react/app/components/Switchers/sparrowConstants.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				D: function() {
					return o
				}
			});
			let o = {
				SPARROW_ZONE_OVERFLOW_MENU_CLICK_NAME: "zone overflow menu clicked",
				SPARROW_ZONE_OVERFLOW_ACTION_CLICK_NAME: "zone overflow action clicked",
				SPARROW_SWITCHER_MENU_CLICK_NAME: "switcher clicked",
				SPARROW_SWITCHER_MENU_OPEN: "Switcher opened",
				SPARROW_GO_TO_ALL_ACCOUNTS_CLICK_NAME: "go to all accounts clicked",
				SPARROW_GO_TO_ALL_DOMAINS_CLICK_NAME: "go to all domains clicked"
			}
		},
		"./react/common/components/AccessControl/index.js": function(n, e, r) {
			"use strict";
			r.d(e, {
				A: function() {
					return p
				}
			});
			var o = r("../../../node_modules/prop-types/index.js"),
				t = r.n(o),
				a = r("./react/app/HoCs/withEntities.tsx"),
				i = r("webpack/sharing/consume/default/react-redux/react-redux"),
				c = r("./react/common/selectors/accountSelectors.ts");
			let l = n => {
				if ("string" != typeof n) throw Error("invalid Param Type provided");
				let e = n.slice(1).split(":");
				if (2 !== e.length) throw Error("invalid Param Type provided");
				return {
					key: e[0],
					value: e[1]
				}
			};
			var s = (0, i.connect)((n, e) => {
				let {
					resourceId: r,
					accountId: o,
					legacyPermission: t
				} = e, {
					read: a,
					edit: i
				} = e, s = {};
				t && (i = "#".concat(t, ":edit"), a = "#".concat(t, ":read"));
				let d = r || o;
				return a && (s.isReadable = (Array.isArray(a) ? a : [a]).some(e => {
					let r = l(e);
					return (0, c.mv)(n, d, n => !!(n[r.key] && n[r.key][r.value]))
				})), i && (s.isEditable = (Array.isArray(i) ? i : [i]).some(e => {
					let r = l(e);
					return (0, c.mv)(n, d, n => !!(n[r.key] && n[r.key][r.value]))
				})), s
			});

			function d(n) {
				let e = ["isReadable", "isEditable"].reduce((e, r) => {
					var o, t;
					return n.hasOwnProperty(r) ? (o = function(n) {
						for (var e = 1; e < arguments.length; e++) {
							var r = null != arguments[e] ? arguments[e] : {},
								o = Object.keys(r);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
								return Object.getOwnPropertyDescriptor(r, n).enumerable
							}))), o.forEach(function(e) {
								var o;
								o = r[e], e in n ? Object.defineProperty(n, e, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[e] = o
							})
						}
						return n
					}({}, e), t = t = {
						[r]: n[r]
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : (function(n, e) {
						var r = Object.keys(n);
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(n);
							r.push.apply(r, o)
						}
						return r
					})(Object(t)).forEach(function(n) {
						Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(t, n))
					}), o) : e
				}, {});
				return n.children(e)
			}
			d.propTypes = {
				resourceType: t().string,
				resourceId: t().string,
				read: t().oneOfType([t().string, t().array]),
				edit: t().oneOfType([t().string, t().array]),
				accountId: t().string,
				isReadable: t().bool,
				isEditable: t().bool,
				children: t().func
			};
			let u = (0, a.A)(s(d));
			u.displayName = "AccessControl";
			var p = u
		},
		"./react/common/components/Apple/utils.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				Br: function() {
					return g
				},
				OW: function() {
					return p
				},
				en: function() {
					return s
				}
			});
			var o = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				t = r.n(o),
				a = r("../../../node_modules/@cloudflare/util-cache/es/index.js"),
				i = r("./react/pages/onboarding/components/AppleLogin/constants.ts"),
				c = r("../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = r("./react/common/utils/oidc.ts");
			let s = () => a.y.get(i.Qv),
				d = /^\/login\/apple(\/)?/,
				u = [d, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/[a-zA-Z0-9]+\/registrar\/register\/success$/, /^\/$/, /^\/email-verification-info(\/)?/],
				p = () => {
					let n = !1;
					u.forEach(e => {
						if (e.test(window.location.pathname)) {
							n = !0;
							return
						}
					});
					let e = (d.test(window.location.pathname) || a.y.has(i.Qv)) && n;
					return e && (0, c.S8)(c.JZ.OFF), e
				},
				g = n => {
					n && t().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					}), window.location.href = (0, l.nO)(l.SJ.Apple, n)
				}
		},
		"./react/common/components/ButtonWithDropdown.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				Dr: function() {
					return l.Dr
				},
				W1: function() {
					return l.W1
				},
				e_: function() {
					return g
				}
			});
			var o = r("../../../node_modules/react/jsx-runtime.js");
			r("webpack/sharing/consume/default/react/react");
			var t = r("../../../node_modules/@cloudflare/component-button/es/index.js"),
				a = r("../../../node_modules/@cloudflare/component-icon/es/index.js"),
				i = r("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = r("../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = r("./react/common/components/Dropdown/index.tsx"),
				s = r("../../../node_modules/@cloudflare/style-const/es/index.js");

			function d(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						o = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
						return Object.getOwnPropertyDescriptor(r, n).enumerable
					}))), o.forEach(function(e) {
						var o;
						o = r[e], e in n ? Object.defineProperty(n, e, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[e] = o
					})
				}
				return n
			}

			function u(n, e) {
				return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : (function(n, e) {
					var r = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						r.push.apply(r, o)
					}
					return r
				})(Object(e)).forEach(function(r) {
					Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r))
				}), n
			}
			let p = (0, c.RY)(n => {
				let {
					theme: e
				} = n;
				return {
					display: "inline-flex",
					"& > button:first-child": {
						borderRadius: "".concat(e.radii[2], "px 0 0 ").concat(e.radii[2], "px"),
						borderRight: "1px solid ".concat(e.colors.gray[8])
					},
					"& > :last-child": {
						display: "flex"
					},
					"& > :last-child > button": {
						borderRadius: "0 ".concat(e.radii[2], "px ").concat(e.radii[2], "px 0"),
						paddingRight: e.space[2],
						paddingLeft: e.space[2]
					},
					"& button": {
						color: (0, s.ud)() ? e.colors.text : void 0
					},
					"& button:hover": {
						color: (0, s.ud)() ? e.colors.text : void 0
					}
				}
			});

			function g(n) {
				var {
					menu: e,
					containerProps: r,
					disabled: c,
					disabledDropdown: s = c
				} = n, g = function(n, e) {
					if (null == n) return {};
					var r, o, t = function(n, e) {
						if (null == n) return {};
						var r, o, t = {},
							a = Object.keys(n);
						for (o = 0; o < a.length; o++) r = a[o], e.indexOf(r) >= 0 || (t[r] = n[r]);
						return t
					}(n, e);
					if (Object.getOwnPropertySymbols) {
						var a = Object.getOwnPropertySymbols(n);
						for (o = 0; o < a.length; o++) r = a[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r])
					}
					return t
				}(n, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				let {
					t: m
				} = (0, i.useI18n)();
				return (0, o.jsxs)(p, u(d({}, r), {
					role: "group",
					children: [(0, o.jsx)(t.$n, u(d({}, g), {
						disabled: c
					})), (0, o.jsx)(l.ms, {
						trigger: (0, o.jsx)(t.$n, {
							type: g.type,
							"aria-haspopup": "menu",
							disabled: s,
							children: (0, o.jsx)(a.I, {
								type: "caret-down",
								label: m("common.more"),
								size: 12
							})
						}),
						menu: e
					})]
				}))
			}
		},
		"./react/common/components/EmptyPage.jsx": function(n, e, r) {
			"use strict";
			var o = r("../../../node_modules/react/jsx-runtime.js");
			r("webpack/sharing/consume/default/react/react");
			var t = r("../../../node_modules/prop-types/index.js"),
				a = r.n(t),
				i = r("../../../node_modules/@cloudflare/component-box/es/index.js");
			let c = n => {
				let {
					children: e
				} = n;
				return (0, o.jsx)(i.az, {
					height: 411,
					children: e
				})
			};
			c.propTypes = {
				children: a().node
			}, e.A = c
		},
		"./react/common/components/Kumo/Providers/TooltipProvider.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				B: function() {
					return o
				}
			});
			let o = r("../../../node_modules/@base-ui-components/react/esm/tooltip/provider/TooltipProvider.js").B
		},
		"./react/common/components/ModalManager.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				hS: function() {
					return g
				},
				k3: function() {
					return p
				},
				Ay: function() {
					return m
				}
			});
			var o = r("../../../node_modules/react/jsx-runtime.js"),
				t = r("webpack/sharing/consume/default/react/react"),
				a = r("webpack/sharing/consume/default/react-redux/react-redux"),
				i = r("./react/common/actions/modalActions.ts"),
				c = r("../../../node_modules/swr/core/dist/index.mjs"),
				l = r("./react/pages/zoneless-workers/utils/swrConfig.ts"),
				s = r("./react/common/selectors/userSelectors.ts");
			let d = t.createContext(null);
			class u extends t.Component {
				render() {
					let {
						modals: n,
						closeModal: e,
						userId: r
					} = this.props;
					return r ? (0, o.jsx)(o.Fragment, {
						children: n.map(n => {
							var r, t;
							let {
								ModalComponent: a,
								props: i = {},
								id: s
							} = n, u = () => {
								"function" == typeof i.onClose && i.onClose(), e(a)
							};
							return (0, o.jsx)(d.Provider, {
								value: {
									closeModal: u
								},
								children: (0, o.jsx)(c.BE, {
									value: l.Ay,
									children: (0, o.jsx)(a, (r = function(n) {
										for (var e = 1; e < arguments.length; e++) {
											var r = null != arguments[e] ? arguments[e] : {},
												o = Object.keys(r);
											"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
												return Object.getOwnPropertyDescriptor(r, n).enumerable
											}))), o.forEach(function(e) {
												var o;
												o = r[e], e in n ? Object.defineProperty(n, e, {
													value: o,
													enumerable: !0,
													configurable: !0,
													writable: !0
												}) : n[e] = o
											})
										}
										return n
									}({}, i), t = t = {
										isOpen: !0,
										closeModal: u
									}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : (function(n, e) {
										var r = Object.keys(n);
										if (Object.getOwnPropertySymbols) {
											var o = Object.getOwnPropertySymbols(n);
											r.push.apply(r, o)
										}
										return r
									})(Object(t)).forEach(function(n) {
										Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n))
									}), r))
								})
							}, s)
						})
					}) : null
				}
			}

			function p() {
				let n = t.useContext(d);
				if (!n) throw Error("useModalContext must be used within a ModalContext");
				return n
			}

			function g() {
				let n = (0, a.useDispatch)();
				return {
					openModal: (0, t.useCallback)(function() {
						for (var e = arguments.length, r = Array(e), o = 0; o < e; o++) r[o] = arguments[o];
						return n(i.openModal(...r))
					}, [n]),
					closeModal: (0, t.useCallback)(function() {
						for (var e = arguments.length, r = Array(e), o = 0; o < e; o++) r[o] = arguments[o];
						return n(i.closeModal(...r))
					}, [n])
				}
			}
			var m = (0, a.connect)(n => {
				var e;
				return {
					modals: n.application.modals,
					userId: null == (e = (0, s.wz)(n)) ? void 0 : e.id
				}
			}, i)(u)
		},
		"./react/common/components/Studio/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				o: function() {
					return o
				}
			});
			let o = {
				OPEN: "open data studio"
			}
		},
		"./react/common/components/api-tokens/sparrowEvents.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				JD: function() {
					return c
				},
				LK: function() {
					return l
				},
				eC: function() {
					return i
				}
			});
			var o, t = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = r.n(t),
				i = ((o = {}).USER_CREATE_TOKEN = "click user api token create button", o.USER_TEMPLATE_USED = "click user api token template", o.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", o.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", o.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", o.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", o.USER_TOKEN_CREATED = "create user api token", o.ACCOUNT_CREATE_TOKEN = "click account api token create button", o.ACCOUNT_TEMPLATE_USED = "click account api token template", o.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", o.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", o.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", o.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", o.ACCOUNT_TOKEN_CREATED = "create account api token", o);
			let c = n => {
					let {
						name: e,
						additionalData: r = {}
					} = n;
					a().sendEvent(e, function(n) {
						for (var e = 1; e < arguments.length; e++) {
							var r = null != arguments[e] ? arguments[e] : {},
								o = Object.keys(r);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
								return Object.getOwnPropertyDescriptor(r, n).enumerable
							}))), o.forEach(function(e) {
								var o;
								o = r[e], e in n ? Object.defineProperty(n, e, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[e] = o
							})
						}
						return n
					}({}, r || {}))
				},
				l = () => {
					var n;
					return null == (n = Object.values(i)) ? void 0 : n.flat()
				}
		},
		"./react/common/middleware/sparrow/errors.ts": function(n, e, r) {
			"use strict";

			function o(n, e, r) {
				return e in n ? Object.defineProperty(n, e, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[e] = r, n
			}
			r.d(e, {
				E: function() {
					return t
				},
				WI: function() {
					return a
				},
				nK: function() {
					return i
				}
			});
			class t extends Error {
				constructor(n, e) {
					super(e), o(this, "eventName", void 0), this.eventName = n, this.name = "SparrowValidationError"
				}
			}
			class a extends t {
				constructor(n) {
					super(n, 'Event not allowed: "'.concat(n, '". The event name likely needs to be added to validateDashSchema.ts')), this.name = "SparrowEventNotAllowedError"
				}
			}
			class i extends t {
				constructor(n, e) {
					super(n, 'Found invalid properties on event: "'.concat(n, '"')), o(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = e
				}
			}
		},
		"./react/common/middleware/sparrow/globalEvents/clickEvents.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				G4: function() {
					return l
				},
				dG: function() {
					return d
				},
				e4: function() {
					return s
				},
				hw: function() {
					return c
				}
			});
			var o, t, a = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = r.n(a);
			let c = "user click";
			var l = ((o = {}).NAVIGATION = "navigation", o.CALL_TO_ACTION = "call_to_action", o.DISMISS_CONTENT = "dismiss_content", o),
				s = ((t = {}).ZONE_MARKETING_BANNER = "zone_marketing_banner_click", t.ZONE_MARKETING_BANNER_DISMISS = "zone_marketing_banner_dismiss", t.ACCOUNT_MARKETING_BANNER = "account_marketing_banner_click", t.ACCOUNT_MARKETING_BANNER_DISMISS = "account_marketing_banner_dismiss", t.ACCOUNT_ONBOARDING_CTA = "account_onboarding_cta_click", t.ACCOUNT_ONBOARDING_SKIP = "account_onboarding_skip_click", t.ACCOUNT_ONBOARDING_BACK = "account_onboarding_back_click", t.SPEED_OPTIMIZATION_CTA = "speed_optimization_cta_click", t.PLAN_CARD_CTA = "plan_card_cta_click", t.MODAL_DISMISS = "modal_dismiss", t.COMPLETED_WCI_BUILD = "completed_wci_build", t.DNS_PROXY_WARNING_DISMISS = "dns_proxy_warning_dismiss", t.DNS_PROXY_WARNING_TOOLTIP_LINK = "dns_proxy_warning_tooltip_link", t);
			let d = n => {
				let {
					interactionType: e,
					clickType: r,
					id: o,
					text: t = "",
					href: a = ""
				} = n;
				i().sendEvent(c, {
					interactionType: e,
					clickType: r,
					id: o,
					text: t,
					href: a
				})
			}
		},
		"./react/common/utils/getEnvironment.ts": function(n, e, r) {
			"use strict";
			var o = r("../../../node_modules/cookie/index.js"),
				t = r("../../common/util/previews/preview-helpers.ts");
			e.A = () => {
				var n, e;
				let r = o.parse(document.cookie)[t.Nt],
					a = null;
				r && (a = (0, t.A)(r));
				let i = "production";
				switch (!0) {
					case (null == a ? void 0 : a.projectType) === "canary":
						i = "canary";
						break;
					case null == (e = window) || null == (n = e.build) ? void 0:
						n.isPreviewDeploy: i = "preview"
				}
				return i
			}
		},
		"./react/common/utils/oidc.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				SJ: function() {
					return i
				},
				nO: function() {
					return c
				},
				xc: function() {
					return l
				}
			});
			var o, t = r("../../../node_modules/@cloudflare/util-cache/es/index.js"),
				a = r("./react/utils/fedramp.ts"),
				i = ((o = {}).Apple = "apple", o.Google = "google", o.GitHub = "github", o);
			let c = (n, e) => {
					let r = new URLSearchParams(window.location.search).get("login_challenge"),
						o = "https://".concat("oidc".concat("", ".iam.cfapi.net"), "/api/v1/sso/init?client=").concat(n, "&env=").concat("production");
					return t.A.set("isLoggingIn", !0), e && (o += "&jwt=".concat(e)), r && (o += "&login_challenge=".concat(encodeURIComponent(r))), o
				},
				l = n => !("KR" === r.g.bootstrap.ip_country || (0, a.W)())
		},
		"./react/pages/abuse-form/constants.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				F: function() {
					return t
				}
			});
			var o, t = ((o = {}).SUBMIT_ABUSE_REPORT_FORM = "clicked submit abuse report button", o.SUBMIT_ABUSE_REPORT_FORM_SUCCESS = "abuse report submitted successfully", o.SUBMIT_ABUSE_REPORT_FORM_FAILURE = "abuse report submission failed", o.OPEN_ABUSE_REPORT_FORM_SIDEMODAL = "clicked abuse report button", o.CLOSE_ABUSE_REPORT_FORM_SIDEMODAL = "closed abuse report form sidemodal", o.CHANGE_ABUSE_REPORT_FORM_TYPE = "changed abuse report form type", o)
		},
		"./react/pages/analytics/eos/resources/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				i: function() {
					return a
				},
				j: function() {
					return o
				}
			});
			let o = {
				ADD_FILTER: "Add filter",
				EDIT_FILTER: "Edit filter",
				REMOVE_FILTER: "Remove filter",
				CHANGE_TIME: "Change time window",
				REMOVE_COLUMN: "Remove column",
				ADD_COLUMN: "Add column",
				QUERY_LOGS: "Click query logs",
				SAVE_QUERY: "Save query",
				USE_SAVED_QUERY: "Use saved query",
				CHANGE_DATASET: "Change dataset",
				CHANGE_LIMIT: "Change limit",
				USE_CUSTOM_SQL: "Click use custom sql",
				USE_BASIC_EDITOR: "Click use basic editor",
				VIEW_DETAILS: "Click view details",
				USE_CONTEXT_MENU: "Use context menu"
			};
			var t, a = ((t = {}).view_documentation = "view_documentation", t.open_deeplink = "open_deeplink", t.copy = "copy", t.toggle_expand_row = "toggle_expand_row", t.sort = "sort", t.hide_column = "hide_column", t)
		},
		"./react/pages/blocked-content/constants.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Sd: function() {
					return m
				},
				V2: function() {
					return b
				},
				Z0: function() {
					return h
				},
				aK: function() {
					return w
				},
				h8: function() {
					return f
				},
				qR: function() {
					return k
				},
				tJ: function() {
					return y
				},
				ur: function() {
					return v
				}
			});
			var o, t = r("../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				a = r("../../../node_modules/@cloudflare/util-routes/es/index.js"),
				i = r("./react/pages/blocked-content/types.ts");

			function c(n, e) {
				return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
					raw: {
						value: Object.freeze(e)
					}
				}))
			}

			function l() {
				let n = c(["/", "/blocked-content"]);
				return l = function() {
					return n
				}, n
			}

			function s() {
				let n = c(["/", "/blocked-content/active"]);
				return s = function() {
					return n
				}, n
			}

			function d() {
				let n = c(["/", "/blocked-content/pending"]);
				return d = function() {
					return n
				}, n
			}

			function u() {
				let n = c(["/", "/security-center/blocked-content"]);
				return u = function() {
					return n
				}, n
			}

			function p() {
				let n = c(["/", "/security-center/blocked-content/active"]);
				return p = function() {
					return n
				}, n
			}

			function g() {
				let n = c(["/", "/security-center/blocked-content/pending"]);
				return g = function() {
					return n
				}, n
			}
			let m = "blocked-content-table-tooltip",
				v = {
					account: {
						basePage: (0, a.wE)(l(), "accountId"),
						[i.Ct.Active]: (0, a.wE)(s(), "accountId"),
						[i.Ct.Pending]: (0, a.wE)(d(), "accountId")
					},
					securityCenter: {
						basePage: (0, a.wE)(u(), "accountId"),
						[i.Ct.Active]: (0, a.wE)(p(), "accountId"),
						[i.Ct.Pending]: (0, a.wE)(g(), "accountId")
					}
				},
				h = [{
					category: i.Ct.Pending,
					title: "security_center.blocked_content.pending_tab",
					url: "/pending"
				}, {
					category: i.Ct.Active,
					title: "security_center.blocked_content.active_tab",
					url: "/active"
				}],
				b = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					cancelled: "gray"
				},
				w = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				f = {
					[i.Ct.Active]: [i.IR.Active, i.IR.InReview],
					[i.Ct.Pending]: [i.IR.Pending, i.IR.Cancelled]
				},
				k = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: i.xw.EnforcementDate,
						direction: t.UE.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(i.VB)
					},
					filters: Object.values(i.VB).reduce((n, e) => {
						var r, o;
						return r = function(n) {
							for (var e = 1; e < arguments.length; e++) {
								var r = null != arguments[e] ? arguments[e] : {},
									o = Object.keys(r);
								"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
									return Object.getOwnPropertyDescriptor(r, n).enumerable
								}))), o.forEach(function(e) {
									var o;
									o = r[e], e in n ? Object.defineProperty(n, e, {
										value: o,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : n[e] = o
								})
							}
							return n
						}({}, n), o = o = {
							[e]: e
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(n, e) {
							var r = Object.keys(n);
							if (Object.getOwnPropertySymbols) {
								var o = Object.getOwnPropertySymbols(n);
								r.push.apply(r, o)
							}
							return r
						})(Object(o)).forEach(function(n) {
							Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(o, n))
						}), r
					}, {})
				};
			var y = ((o = {}).COPY_URL = "copy blocked content url", o.REQUEST_REVIEW = "request blocked content review", o.ADD_FILTER = "Add filter", o.REMOVE_FILTER = "Remove filter", o)
		},
		"./react/pages/caching/tracking.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				r: function() {
					return t
				}
			});
			var o, t = ((o = {}).CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o.CHANGED_ZONE_SETTINGS = "change zone setting", o)
		},
		"./react/pages/cloudforce-one/IncidentServices/resources/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				dI: function() {
					return m
				},
				fB: function() {
					return h
				},
				ke: function() {
					return b
				},
				qG: function() {
					return v
				}
			});
			var o, t, a = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = r.n(a);
			let c = "Emergency Incident",
				l = "Incident Services",
				s = "Submit",
				d = "Success",
				u = "Error";
			var p = ((o = {}).CLICK_GET_HELP = "click emergency incident get help", o.CLICK_EDIT_PHONE = "click emergency incident edit phone", o.CLICK_CONFIRM = "click emergency incident confirm", o.REQUEST_SUCCESS = "emergency incident request success", o.REQUEST_ERROR = "emergency incident request error", o),
				g = ((t = {}).REQUEST_SUBMIT = "submit incident services request", t.REQUEST_SUCCESS = "incident services request success", t.REQUEST_ERROR = "incident services request error", t.FILE_UPLOAD_SUCCESS = "incident services file upload success", t.FILE_UPLOAD_ERROR = "incident services file upload error", t);
			let m = Object.values(p),
				v = Object.values(g),
				h = {
					clickGetHelp: () => {
						i().sendEvent("click emergency incident get help", {
							category: c,
							action: "Click"
						})
					},
					clickEditPhone: () => {
						i().sendEvent("click emergency incident edit phone", {
							category: c,
							action: "Edit"
						})
					},
					clickConfirm: () => {
						i().sendEvent("click emergency incident confirm", {
							category: c,
							action: s
						})
					},
					requestSuccess: () => {
						i().sendEvent("emergency incident request success", {
							category: c,
							action: d
						})
					},
					requestError: n => {
						i().sendEvent("emergency incident request error", {
							category: c,
							action: u,
							errorMessage: n
						})
					}
				},
				b = {
					requestSubmit: n => {
						i().sendEvent("submit incident services request", {
							category: l,
							action: s,
							service: n || "unknown"
						})
					},
					requestSuccess: n => {
						i().sendEvent("incident services request success", {
							category: l,
							action: d,
							service: n || "unknown"
						})
					},
					requestError: (n, e) => {
						i().sendEvent("incident services request error", {
							category: l,
							action: u,
							errorMessage: n,
							service: e || "unknown"
						})
					},
					fileUploadSuccess: n => {
						i().sendEvent("incident services file upload success", {
							category: l,
							action: d,
							service: n || "unknown"
						})
					},
					fileUploadError: (n, e) => {
						i().sendEvent("incident services file upload error", {
							category: l,
							action: u,
							errorMessage: n,
							service: e || "unknown"
						})
					}
				}
		},
		"./react/pages/cloudforce-one/ThreatEvents/constants.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				FZ: function() {
					return u
				},
				IS: function() {
					return i
				},
				Vz: function() {
					return s
				},
				fd: function() {
					return p
				},
				qm: function() {
					return d
				},
				ro: function() {
					return l
				},
				u$: function() {
					return a
				},
				xw: function() {
					return c
				}
			});
			var o = r("./react/pages/cloudforce-one/ThreatEvents/types.ts"),
				t = r("../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let a = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: o.c.Date,
						direction: t.UE.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(o.c)
					},
					filters: Object.values(o.c).reduce((n, e) => {
						var r, o;
						return r = function(n) {
							for (var e = 1; e < arguments.length; e++) {
								var r = null != arguments[e] ? arguments[e] : {},
									o = Object.keys(r);
								"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
									return Object.getOwnPropertyDescriptor(r, n).enumerable
								}))), o.forEach(function(e) {
									var o;
									o = r[e], e in n ? Object.defineProperty(n, e, {
										value: o,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : n[e] = o
								})
							}
							return n
						}({}, n), o = o = {
							[e]: e
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(n, e) {
							var r = Object.keys(n);
							if (Object.getOwnPropertySymbols) {
								var o = Object.getOwnPropertySymbols(n);
								r.push.apply(r, o)
							}
							return r
						})(Object(o)).forEach(function(n) {
							Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(o, n))
						}), r
					}, {})
				},
				i = [0, 1, 2, 3, 4, 5, 6, 7],
				c = ["botnet", "malware"],
				l = [{
					label: "CLEAR",
					value: "Clear"
				}, {
					label: "GREEN",
					value: "Green"
				}, {
					label: "AMBER",
					value: "Amber"
				}, {
					label: "AMBER+STRICT",
					value: "Amber-strict"
				}, {
					label: "RED",
					value: "Red"
				}],
				s = ["6651d008-ec89-400a-9ca6-fc93f1bf77b6", "874c6c70-d80d-4f72-a565-5c92d26df43e", "da1429f3-8b57-43ac-8ed9-a2d93001d1d9", "8c6eb7c9-0160-473f-adea-9a18d9a8d85a", "3e64b3bb-007d-4576-91f3-4e6085764fe1"],
				d = {
					ANALYZE_WITH_CLOUDY_BUTTON_CLICKED: "analyze with cloudy button clicked"
				},
				u = "6651d008-ec89-400a-9ca6-fc93f1bf77b6",
				p = 10
		},
		"./react/pages/cloudforce-one/ThreatEvents/types.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				E: function() {
					return i
				},
				c: function() {
					return a
				}
			});
			var o, t, a = ((o = {}).AttackerCountry = "attackerCountry", o.Attacker = "attacker", o.Date = "date", o.DataSetId = "datasetId", o.EventCategory = "category", o.EventTags = "tags", o.IndicatorType = "indicatorType", o.KillChain = "killChain", o.TargetCountry = "targetCountry", o.TargetIndustry = "targetIndustry", o.TLP = "tlp", o.Indicator = "indicator", o.AttackTechnique = "mitreAttack", o),
				i = ((t = {}).AttackerCountry = "attackerCountry", t.Attacker = "attacker", t.Category = "category", t.Date = "date", t.Event = "event", t.Indicator = "indicator", t.IndicatorType = "indicatorType", t.KillChain = "killChain", t.Tags = "tags", t.TargetCountry = "targetCountry", t.TargetIndustry = "targetIndustry", t.TLP = "tlp", t)
		},
		"./react/pages/home/alerts/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				d: function() {
					return t
				}
			});
			var o, t = ((o = {}).SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o)
		},
		"./react/pages/home/audit-log/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				E: function() {
					return t
				},
				H: function() {
					return o
				}
			});
			let o = "audit logs",
				t = {
					TOGGLE_V2: "toggle audit logs",
					FILTER: "filter audit logs",
					FILTER_COUNTS: "filter counts audit logs",
					TIME_RANGE_CHANGED: "Time range changed",
					API_LATENCY: "api latency detected audit logs",
					DETAILS: "Click view details",
					FEEDBACK: "send audit logs feedback",
					CONTAINER_V2_RENDERED: "audit log v2 container rendered",
					CONTAINER_RENDERED: "audit log v1 container rendered"
				}
		},
		"./react/pages/home/configurations/dns-settings/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				r: function() {
					return t
				}
			});
			var o, t = ((o = {}).PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o)
		},
		"./react/pages/home/domain-registration/bulk-transfer-util.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				eC: function() {
					return V
				},
				yT: function() {
					return _
				},
				aQ: function() {
					return ne
				},
				Ri: function() {
					return y.Ri
				},
				vh: function() {
					return y.vh
				},
				T0: function() {
					return y.T0
				},
				cI: function() {
					return D
				},
				Z7: function() {
					return h
				},
				EQ: function() {
					return K
				},
				NX: function() {
					return ni.NX
				},
				Li: function() {
					return no
				},
				Rg: function() {
					return ni.Rg
				},
				TB: function() {
					return ni.TB
				},
				zu: function() {
					return F
				},
				fE: function() {
					return X
				},
				Jx: function() {
					return Q
				},
				vd: function() {
					return U
				},
				RQ: function() {
					return t
				},
				kw: function() {
					return y.kw
				},
				$C: function() {
					return I.$C
				},
				CJ: function() {
					return nr
				},
				Ao: function() {
					return y.Ao
				},
				sY: function() {
					return y.sY
				},
				e2: function() {
					return W
				},
				qB: function() {
					return j
				},
				h: function() {
					return G
				},
				B9: function() {
					return S
				},
				F4: function() {
					return ni.F4
				},
				T3: function() {
					return ni.T3
				},
				c8: function() {
					return Z
				},
				mm: function() {
					return $
				},
				YH: function() {
					return B
				},
				Zb: function() {
					return J.Z
				},
				_2: function() {
					return ni._2
				},
				O0: function() {
					return w
				},
				x: function() {
					return H
				},
				Ab: function() {
					return x
				},
				mN: function() {
					return ni.mN
				},
				lF: function() {
					return ni.lF
				},
				mL: function() {
					return T
				},
				eK: function() {
					return ni.eK
				},
				RT: function() {
					return y.RT
				},
				u9: function() {
					return y.u9
				},
				k5: function() {
					return I.k5
				},
				pr: function() {
					return nn
				},
				WU: function() {
					return k
				},
				UI: function() {
					return d
				},
				RI: function() {
					return u
				},
				yQ: function() {
					return y.yQ
				},
				HE: function() {
					return nt
				},
				Cj: function() {
					return y.Cj
				},
				lM: function() {
					return Y
				},
				Oz: function() {
					return na
				},
				E1: function() {
					return z
				},
				qb: function() {
					return E
				},
				BE: function() {
					return ni.BE
				},
				PD: function() {
					return A.P
				},
				CK: function() {
					return ni.CK
				},
				cc: function() {
					return I.cc
				},
				pQ: function() {
					return L
				},
				kE: function() {
					return ni.kE
				},
				hY: function() {
					return M
				},
				qL: function() {
					return v
				},
				s: function() {
					return o
				},
				Q4: function() {
					return ni.Q4
				},
				vM: function() {
					return s.v
				},
				f_: function() {
					return ni.f_
				},
				lI: function() {
					return p
				},
				TZ: function() {
					return I.TZ
				},
				ap: function() {
					return J.a
				},
				L1: function() {
					return P
				},
				aH: function() {
					return ni.aH
				},
				K4: function() {
					return f
				}
			});
			let o = n => !!(null == n ? void 0 : n.id),
				t = n => {
					let e = ["CU", "KP", "IR", "SY"];
					return n.filter(n => !e.includes(n.code))
				};
			var a = r("../../../node_modules/moment/moment.js"),
				i = r.n(a),
				c = r("./react/pages/home/domain-registration/config.ts"),
				l = r("./react/pages/home/domain-registration/types.ts"),
				s = r("./react/pages/home/domain-registration/utils/common/tlds/ai.ts");
			let d = (n, e, r) => e[e.length - 1][r] === n[r],
				u = n => 0 === Object.keys(n).length,
				p = n => {
					if (n) return "".concat(n.charAt(0).toUpperCase()).concat(n.slice(1)).concat("." === n.charAt(n.length - 1) ? "" : ".")
				};

			function g(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						o = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
						return Object.getOwnPropertyDescriptor(r, n).enumerable
					}))), o.forEach(function(e) {
						var o;
						o = r[e], e in n ? Object.defineProperty(n, e, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[e] = o
					})
				}
				return n
			}

			function m(n, e) {
				return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : (function(n, e) {
					var r = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						r.push.apply(r, o)
					}
					return r
				})(Object(e)).forEach(function(r) {
					Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r))
				}), n
			}
			let v = "MMM D, YYYY";

			function h(n, e, r, o) {
				var t, a, d, u, p, m, h, w, k, y, x, _;
				let E = n[e.name];
				return g({
					name: null == e ? void 0 : e.name,
					zone: E,
					entitlements: r,
					registryCheck: o,
					nameservers: e.name_servers,
					isAvailable: e.available,
					lastKnownStatus: e.last_known_status,
					authCode: e.auth_code,
					isEnterpriseZone: (null == E || null == (t = E.plan) ? void 0 : t.legacy_id) === "enterprise",
					isActiveZone: (null == E ? void 0 : E.status) === "active",
					corResponsesPending: e.cor_responses_pending,
					isCorLocked: e.cor_locked,
					corLockedUntil: e.cor_locked_until ? i()(e.cor_locked_until).format(v) : null,
					isFullZone: (null == E ? void 0 : E.type) == l.OV.Full,
					isLocked: e.locked,
					registrar: e.current_registrar || c.ZP,
					zoneId: null == E ? void 0 : E.id,
					currentExpiration: i()(e.expires_at).format(v),
					newExpiration: (0, s.v)(e.name) ? i()(e.expires_at).add(2, "years").format(v) : i()(e.expires_at).add(1, "year").format(v),
					lastEntitledAt: e.last_entitled_at ? new Date(e.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(r) && !!r.find(n => n.id === c.ry && !0 === n.allocation.value),
					transferAuthCode: "",
					authCodeStatus: e.transfer_in && function(n) {
						switch (n.enter_auth_code) {
							case l.ZQ.OK:
								return l.pG.Valid;
							case l.ZQ.NEEDED:
							case l.ZQ.UNKNOWN:
								break;
							case l.ZQ.REJECTED:
								return l.pG.Error;
							case l.ZQ.TRYING:
						}
						return l.pG.Pending
					}(e.transfer_in) || l.pG.Pending,
					autoTransferStatus: l.w4.Pending,
					transferConditions: e.transfer_conditions,
					transferApiCallStatus: l.JW.Pending,
					transferIn: e.transfer_in,
					transferOut: e.transfer_out,
					autoRenew: !0 === e.auto_renew,
					lastTransferredAt: e.last_transferred_at,
					createdAt: e.created_at,
					paymentExpiresAt: i()(e.payment_expires_at).isValid() ? i()(e.payment_expires_at) : i()(e.expires_at).isValid() ? i()(e.expires_at) : "",
					contactIds: {
						[l.y2.Administrator]: null == (d = e.contacts) || null == (a = d.administrator) ? void 0 : a.id,
						[l.y2.Billing]: null == (p = e.contacts) || null == (u = p.billing) ? void 0 : u.id,
						[l.y2.Registrant]: null == (h = e.contacts) || null == (m = h.registrant) ? void 0 : m.id,
						[l.y2.Technical]: null == (k = e.contacts) || null == (w = k.technical) ? void 0 : w.id
					},
					landing: e.landing,
					privacy: e.privacy,
					whois: e.whois,
					emailVerified: e.email_verified,
					materialChanges: function(n) {
						let e = [],
							r = {
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
								extensions: null,
								whois_visibility: "whoisVisibility"
							};
						for (let o in n) {
							let t = r[n[o]];
							e.push(t)
						}
						return e
					}(e.material_changes),
					corChanges: e.cor_changes ? f(Object.assign(g({}, b), e.cor_changes)) : {},
					registryStatuses: e.registry_statuses ? e.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: null == (y = e.domain_protection_services) ? void 0 : y.status
					},
					deletion: {
						isDeletable: null == e || null == (x = e.deletion) ? void 0 : x.is_deletable
					},
					premiumType: null == e ? void 0 : e.premium_type,
					fees: null == e ? void 0 : e.fees
				}, e.domain_move && {
					domainMove: {
						ineligibilityReasons: null == (_ = e.domain_move) ? void 0 : _.ineligibility_reasons
					}
				}, e.actionable_metadata && {
					actionableMetadata: e.actionable_metadata.map(n => ({
						accountContext: n.account_context,
						createdAt: n.created_at,
						expiresAt: n.expires_at,
						sentAt: n.sent_at,
						status: n.status,
						type: n.type
					}))
				}, e.policies && {
					policies: g({}, e.policies.suspension && {
						suspension: {
							parked: e.policies.suspension.parked,
							parkingReason: e.policies.suspension.parking_reason,
							paymentExpired: e.policies.suspension.payment_expired
						}
					})
				})
			}
			let b = {
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

			function w(n) {
				let e = n.extensions;
				((null == e ? void 0 : e.application_purpose) && (null == e ? void 0 : e.nexus_category) || (null == e ? void 0 : e.ca_legal_type)) && (n.extensions = g({}, (null == e ? void 0 : e.nexus_category) && {
					nexusCategory: e.nexus_category
				}, (null == e ? void 0 : e.application_purpose) && {
					applicationPurpose: e.application_purpose
				}, (null == e ? void 0 : e.ca_legal_type) && {
					ca_legal_type: e.ca_legal_type
				}));
				var r = g(m(g({}, "string" == typeof n.id ? {
					id: n.id
				} : {}), {
					first_name: n.firstName,
					organization: n.organization,
					address: n.address1,
					city: n.city,
					state: n.state || "N/A",
					zip: n.zip,
					country: n.country,
					phone: n.phone,
					email: n.email,
					fax: "",
					last_name: n.lastName,
					address2: n.address2,
					email_verified: n.emailVerified,
					whois_visibility: n.whoisVisibility
				}), n.extensions ? {
					extensions: g({}, n.extensions.nexusCategory && {
						nexus_category: n.extensions.nexusCategory
					}, n.extensions.applicationPurpose && {
						application_purpose: n.extensions.applicationPurpose
					}, n.extensions.ca_legal_type && {
						ca_legal_type: n.extensions.ca_legal_type
					})
				} : {});
				let o = {};
				for (let [n, e] of Object.entries(r)) {
					if (e && "string" == typeof e) {
						Object.assign(o, {
							[n]: e.trim()
						});
						continue
					}
					Object.assign(o, {
						[n]: e
					})
				}
				return o
			}

			function f(n) {
				return m(g({}, "string" == typeof n.id ? {
					id: n.id
				} : {}), {
					firstName: n.first_name,
					organization: n.organization,
					address1: n.address,
					city: n.city,
					state: n.state,
					zip: n.zip,
					country: n.country,
					phone: n.phone.trim(),
					email: n.email.trim(),
					lastName: n.last_name,
					address2: n.address2,
					emailVerified: n.email_verified,
					whoisVisibility: n.whois_visibility,
					extensions: n.extensions ? g({}, n.extensions.nexus_category && {
						nexusCategory: (n => {
							if (!n) return null;
							let e = n;
							return n.includes("C31") && (e = "C31"), n.includes("C32") && (e = "C32"), e
						})(n.extensions.nexus_category)
					}, n.extensions.application_purpose && {
						applicationPurpose: n.extensions.application_purpose
					}, n.extensions.ca_legal_type && {
						ca_legal_type: n.extensions.ca_legal_type
					}) : {}
				})
			}
			let k = function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
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
					extensions: void 0,
					whoisVisibility: {
						organization: !1
					}
				}, n)
			};
			var y = r("./react/pages/home/domain-registration/utils/common/domain.ts");
			let x = n => {
					if (!n || !n.message) return l.go.DEFAULT;
					let {
						message: e
					} = n;
					switch (!0) {
						case e.includes("feature disabled"):
							return l.go.FEATURE_DISABLED;
						case e.includes("email unverified"):
							return l.go.EMAIL_UNVERIFIED;
						case e.includes("account blocked"):
							return l.go.ACCOUNT_BLOCKED;
						default:
							return l.go.DEFAULT
					}
				},
				_ = n => {
					switch (n) {
						case l.Wj.NonStandard_NonStandard:
						case l.Wj.NonStandard_Standard:
						case l.Wj.Standard_Standard:
						case l.Wj.Standard_NonStandard:
							return !0;
						case l.Wj.Not_Premium:
						default:
							return !1
					}
				};
			r("./react/pages/home/domain-registration/utils/common/tlds/ca.ts");
			let E = n => {
					let e = (0, y.vh)(n.name);
					return !c.vl.includes(e)
				},
				O = ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"],
				T = n => {
					if (!n) return !1;
					let e = (0, y.vh)(n);
					return !!e && O.includes(e)
				};
			r("./react/pages/home/domain-registration/utils/common/tlds/mx.ts");
			var A = r("./react/pages/home/domain-registration/utils/common/tlds/uk.ts"),
				I = r("./react/pages/home/domain-registration/utils/common/tlds/us.ts"),
				C = r("../../../node_modules/@cloudflare/util-regex/es/index.js");
			let S = n => !!n.match(C.A.email);
			var N = r("../../common/util/types/src/api/domain.ts"),
				R = r("./react/pages/home/domain-registration/registrar.translations.ts");

			function L(n) {
				return n === N.Ch.PENDING_UPDATE
			}

			function D(n) {
				return !!n && Object.values(N.cP).filter(n => n !== N.cP.OFFBOARDED).includes(n)
			}

			function P(n) {
				return !!n && [N.cP.LOCKED, N.cP.ONBOARDED, N.cP.ONBOARDING_INITIATED, N.cP.PENDING_REGISTRY_LOCK, N.cP.PENDING_REGISTRY_UNLOCK, N.cP.PENDING_UNLOCK_APPROVAL].includes(n)
			}

			function M(n) {
				return !!n && N.cP.PENDING_REGISTRY_LOCK === n
			}

			function j(n) {
				return !!n && [N.cP.PENDING_REGISTRY_UNLOCK, N.cP.PENDING_UNLOCK_APPROVAL].includes(n)
			}

			function U(n) {
				return !1
			}

			function F(n) {
				return !1
			}

			function z(n) {
				return !1
			}

			function G(n) {
				return !1
			}

			function W(n) {
				return !1
			}

			function K(n) {
				return Object.keys(N.cP).find(e => N.cP[e].toLowerCase() === n.toLowerCase())
			}

			function B(n) {
				var e;
				let r = null == (e = K(n)) ? void 0 : e.toLowerCase();
				return r ? R.keys.protection_status[r] : R.keys.protection_status.unknown
			}

			function V(n) {
				return ["com", "net"].includes((0, y.vh)(n)) ? N.cP.PENDING_REGISTRY_LOCK : N.cP.LOCKED
			}

			function H(n) {
				var e;
				return !(null == (e = n.domainMove) ? void 0 : e.ineligibilityReasons.length)
			}

			function Y(n) {
				var e, r;
				return !!(null == (r = n.domainMove) || null == (e = r.ineligibilityReasons) ? void 0 : e.includes(l.BA.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function q(n) {
				var e;
				return null == (e = n.actionableMetadata) ? void 0 : e.find(n => n.type === l.dX.DOMAIN_MOVE)
			}

			function Z(n) {
				let e = q(n);
				return (null == e ? void 0 : e.status) === "pending" && e.accountContext === l.rp.GAINING
			}

			function Q(n) {
				let e = q(n);
				return (null == e ? void 0 : e.status) === "pending" && e.accountContext === l.rp.LOSING
			}
			var J = r("./react/pages/home/domain-registration/utils/manageDomain/manageDomain.ts");
			let X = n => !!n && ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(n),
				$ = n => !!n && ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(n),
				nn = n => {
					var e;
					return !!(null == n ? void 0 : n.lastKnownStatus) && (null == (e = n.lastKnownStatus) ? void 0 : e.includes("deletionIrredeemable"))
				},
				ne = n => {
					if (c.RL) return [!0, ""];
					if (!(0, y.T0)(n)) return [!1, l.Ur.NotOnCF];
					if (n.isCorLocked) return [!1, n.corLockedUntil ? l.Ur.CorLockedUntil : l.Ur.CorLock];
					if (n.lastTransferredAt) {
						let e = i()(n.lastTransferredAt),
							r = i().duration(i()().diff(e)).as("days"),
							o = (0, A.P)(n.name);
						if (r < (o ? 1 : 60)) return [!1, o ? l.Ur.RecentTransferUK : l.Ur.RecentTransfer]
					}
					if (n.createdAt) {
						let e = i()(n.createdAt);
						if (60 > i().duration(i()().diff(e)).as("days")) return [!1, l.Ur.RecentCreation]
					}
					return [!0, ""]
				},
				nr = (n, e) => {
					if (e) return 1;
					let r = (0, y.vh)(n);
					return "co" === r ? 5 : "org" === r ? 1 : 10
				},
				no = n => c.C1.includes(n),
				nt = n => {
					var e;
					let {
						accountName: r
					} = n;
					return (null == (e = r.toLowerCase().match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/)) ? void 0 : e[0]) || ""
				},
				na = n => i()().add(n, "year").format(c.qL);
			var ni = r("./react/pages/home/domain-registration/utils/transferDomain/transferDomain.ts")
		},
		"./react/pages/home/domain-registration/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				CA: function() {
					return d
				},
				LZ: function() {
					return p
				}
			});
			var o, t = r("../../../node_modules/moment/moment.js"),
				a = r.n(t),
				i = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = r.n(i),
				l = r("./react/pages/home/domain-registration/bulk-transfer-util.ts");

			function s(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						o = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
						return Object.getOwnPropertyDescriptor(r, n).enumerable
					}))), o.forEach(function(e) {
						var o;
						o = r[e], e in n ? Object.defineProperty(n, e, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[e] = o
					})
				}
				return n
			}
			var d = ((o = {}).REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", o.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", o.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", o.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", o.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", o.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", o.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", o.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", o.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", o.REGISTER_DOMAIN_CHECKOUT_SUCCESS_CTA = "follow recommendation CTA", o.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", o.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", o.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", o.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", o.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", o.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", o.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", o.TRANSFER_DOMAIN_NAVIGATE_PREVIOUS_STEP = "transfer domain navigate to previous step", o.TRANSFER_DOMAIN_SELECT_DOMAIN = "transfer domain select", o.TRANSFER_DOMAIN_TOGGLE_ALL = "transfer domain toggle all", o.TRANSFER_DOMAIN_SEARCH = "transfer domain search", o.TRANSFER_DOMAIN_VIEW_EMPTY_STATE = "transfer domain view empty state", o.TRANSFER_DOMAIN_VIEW_UNSUPPORTED_DOMAINS = "transfer domain view unsupported domains", o.TRANSFER_DOMAIN_VIEW_SUPPORTED_TLDS = "transfer domain view supported tlds", o.TRANSFER_DOMAIN_ONBOARD_DOMAIN = "transfer domain onboard domain", o.TRANSFER_DOMAIN_ENTER_AUTH_CODE = "transfer domain enter auth code", o.TRANSFER_DOMAIN_REMOVE_DOMAIN = "transfer domain remove domain", o.TRANSFER_DOMAIN_PREMIUM_PRICE_CONFIRM = "transfer domain premium price confirm", o.TRANSFER_DOMAIN_PREMIUM_PRICE_REJECT = "transfer domain premium price reject", o.TRANSFER_DOMAIN_WHOIS_ACKNOWLEDGEMENT = "transfer domain whois acknowledgement", o.TRANSFER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", o.TRANSFER_DOMAIN_SELECT_PAYMENT_METHOD = "transfer domain select payment method", o.TRANSFER_DOMAIN_BILLING_COUNTRY_SELECT = "transfer domain billing country select", o.TRANSFER_DOMAIN_VERIFY_ADDRESS = "transfer domain verify address", o.TRANSFER_DOMAIN_INITIATE_ATTEMPT = "transfer domain initiate attempt", o.TRANSFER_DOMAIN_PURCHASE_COMPLETED = "transfer purchase completed", o.TRANSFER_DOMAIN_PARTIAL_FAILURE = "transfer domain partial failure", o.TRANSFER_DOMAIN_COMPLETE_FAILURE = "transfer domain complete failure", o.TRANSFER_DOMAIN_FAILURE_DETAILS = "transfer domain failure details", o.TRANSFER_DOMAIN_START_OVER = "transfer domain start over", o.TRANSFER_DOMAIN_SUCCESS_CTA_DEPLOY_APP = "transfer domain success cta deploy app", o.TRANSFER_DOMAIN_SUCCESS_CTA_ADD_DOMAINS = "transfer domain success cta add domains", o.TRANSFER_DOMAIN_SUCCESS_CTA_POST_X = "transfer domain success cta post x", o.RENEW_DOMAIN_TOGGLE_SECTION = "toggle domain renewal section", o.RENEW_DOMAIN_SELECT_YEARS = "select domain renewal years", o.RENEW_DOMAIN_CLICK_RENEW = "click renew domain button", o.RENEW_DOMAIN_CLOSE_BILLING_MODAL = "close domain renewal billing modal", o.RENEW_DOMAIN_PURCHASE_CLICK = "click purchase in renewal billing modal", o.RENEW_DOMAIN_COMPLETED = "domain renewal completed", o.RESTORE_DOMAIN_INIT = "click to open domain restore modal", o.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", o.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", o.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", o.RESTORE_DOMAIN_FAILURE = "domain restore failed", o.RESTORE_DOMAIN_COMPLETED = "domain restore completed", o.DOMAIN_DELETE_INIT = "click to begin domain delete", o.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", o.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", o.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", o.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", o.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", o.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", o.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", o.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", o.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", o.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", o.DOMAIN_MOVE_START_FLOW = "Start domain move flow", o.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", o.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", o.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", o.DOMAIN_MOVE_SUBMIT = "Submit domain move", o.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", o.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", o.DOMAIN_MOVE_CANCEL = "Domain move cancel", o.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", o.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", o.ACTION_CENTER_NAVIGATE = "Navigate to actions center", o.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", o.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", o.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", o.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS = "domain update canada registrant type completed successfully", o.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR = "domain update canada registrant type failed", o);
			let u = n => (null == n ? void 0 : n.name) ? {
					domain: s({
						name: n.name,
						premium: (0, l.yT)(null == n ? void 0 : n.premiumType)
					}, (null == n ? void 0 : n.paymentExpiresAt) && {
						paymentExpiresAt: a()(n.paymentExpiresAt).format()
					}, (null == n ? void 0 : n.fees) && {
						fees: n.fees
					}, (null == n ? void 0 : n.registrar) && {
						registrar: n.registrar
					}, (null == n ? void 0 : n.currentExpiration) && {
						currentExpiration: a()(n.currentExpiration).format()
					})
				} : null,
				p = (n, e, r) => {
					var o, t;
					let a;
					if (!e) return null;
					let i = Array.isArray(e) ? (a = e.map(n => u(n)).filter(n => null !== n).map(n => n.domain)).length > 0 ? {
						domains: a,
						domainCount: a.length
					} : null : u(e);
					if (!i) return null;
					c().sendEvent(n, s((o = s({}, i), t = t = {
						category: "registrar"
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : (function(n, e) {
						var r = Object.keys(n);
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(n);
							r.push.apply(r, o)
						}
						return r
					})(Object(t)).forEach(function(n) {
						Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(t, n))
					}), o), r))
				}
		},
		"./react/pages/home/domain-registration/utils/common/tlds/ca.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				GQ: function() {
					return c
				},
				Tc: function() {
					return l
				},
				gj: function() {
					return a
				},
				p4: function() {
					return i
				},
				r7: function() {
					return s
				}
			});
			var o = r("./react/pages/home/domain-registration/types.ts"),
				t = r("./react/pages/home/domain-registration/utils/common/domain.ts");
			let a = ["ca", "ab.ca", "bc.ca", "mb.ca", "nb.ca", "nl.ca", "ns.ca", "nt.ca", "nu.ca", "on.ca", "pe.ca", "qc.ca", "sk.ca"],
				i = n => {
					if (!n) return !1;
					let e = (0, t.vh)(n);
					return !!e && a.includes(e)
				},
				c = [{
					label: "Canadian citizen",
					value: "CCT"
				}, {
					label: "Permanent Resident of Canada",
					value: "RES"
				}, {
					label: "Legal Rep. of a Canadian Citizen or Permanent Resident",
					value: "LGR"
				}, {
					label: "Aboriginal Peoples indigenous to Canada",
					value: "ABO"
				}, {
					label: "Canadian Unincorporated Association",
					value: "ASS"
				}, {
					label: "Corporation (Canada or Canadian province or territory)",
					value: "CCO"
				}, {
					label: "Canadian Educational Institution",
					value: "EDU"
				}, {
					label: "Government or government entity in Canada",
					value: "GOV"
				}, {
					label: "Canadian Hospital",
					value: "HOP"
				}, {
					label: "Indian Band recognized by the Indian Act of Canada",
					value: "INB"
				}, {
					label: "Canadian Library, Archive or Museum",
					value: "LAM"
				}, {
					label: "Her Majesty the Queen",
					value: "MAJ"
				}, {
					label: "Official mark registered in Canada",
					value: "OMK"
				}, {
					label: "Canadian Political Party",
					value: "PLT"
				}, {
					label: "Partnership Registered in Canada",
					value: "PRT"
				}, {
					label: "Trade-mark registered in Canada (by a non-Canadian owner)",
					value: "TDM"
				}, {
					label: "Canadian Trade Union",
					value: "TRD"
				}, {
					label: "Trust established in Canada",
					value: "TRS"
				}],
				l = c.filter(n => n.value !== o.GE.MAJ && n.value !== o.GE.OMK && n.value !== o.GE.TDM),
				s = n => {
					let e = [o.GE.ABO, o.GE.CCT, o.GE.LGR, o.GE.RES];
					return !!n && (null == n ? void 0 : n.length) !== 0 && (!n || !e.includes(n))
				}
		},
		"./react/pages/home/domain-registration/utils/common/tlds/uk.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				P: function() {
					return a
				}
			});
			var o = r("./react/pages/home/domain-registration/utils/common/domain.ts");
			let t = ["uk", "co.uk", "me.uk", "net.uk", "org.uk"],
				a = n => {
					if (!n) return !1;
					let e = (0, o.vh)(n);
					return !!e && t.includes(e)
				}
		},
		"./react/pages/home/domain-registration/utils/manageDomain/manageDomain.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Z: function() {
					return i
				},
				a: function() {
					return c
				}
			});
			var o = r("../../../node_modules/moment/moment.js"),
				t = r.n(o),
				a = r("./react/pages/home/domain-registration/utils/common/domain.ts");
			let i = n => "co" === (0, a.vh)(n) ? 5 : 10,
				c = n => t()(n.paymentExpiresAt).isBefore(t()())
		},
		"./react/pages/home/domain-registration/utils/transferDomain/transferDomain.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				BE: function() {
					return I
				},
				CK: function() {
					return h
				},
				F4: function() {
					return v
				},
				Jx: function() {
					return S
				},
				NX: function() {
					return x
				},
				Q4: function() {
					return O
				},
				Rg: function() {
					return m
				},
				T3: function() {
					return k
				},
				TB: function() {
					return E
				},
				_2: function() {
					return _
				},
				aH: function() {
					return f
				},
				eK: function() {
					return T
				},
				f_: function() {
					return w
				},
				kE: function() {
					return b
				},
				lF: function() {
					return C
				},
				mN: function() {
					return y
				}
			});
			var o = r("../../../node_modules/lodash/lodash.js"),
				t = r("../../../node_modules/moment/moment.js"),
				a = r.n(t),
				i = r("./react/pages/home/domain-registration/config.ts"),
				c = r("./react/pages/home/domain-registration/registrar.translations.ts"),
				l = r("./react/pages/home/domain-registration/types.ts"),
				s = r("./react/pages/home/domain-registration/utils/common/domain.ts"),
				d = r("./react/pages/home/domain-registration/utils/common/tlds/ai.ts"),
				u = r("./react/pages/home/domain-registration/utils/common/tlds/mx.ts"),
				p = r("./react/pages/home/domain-registration/utils/common/tlds/uk.ts"),
				g = r("./react/pages/home/domain-registration/utils/manageDomain/manageDomain.ts");
			let m = n => {
					var e;
					let r = [l.lm.CLIENT_HOLD, l.lm.SERVER_HOLD, l.lm.SERVER_TRANSFER_PROHIBITED, l.lm.PENDING_DELETE, l.lm.PENDING_TRANSFER, l.lm.CLIENT_TRANSFER_PROHIBITED],
						o = !1,
						t = null;
					return null == (e = n.registryStatuses) || e.some(n => {
						r.includes(n) && (t = n, o = !0)
					}), [o, t]
				},
				v = n => {
					var e;
					let r;
					if (!n) return [!1, c.keys.cannot_transfer_default];
					if ("active" !== n.zone.status) return [!1, c.keys.cannot_transfer_zone_not_active];
					if (!n.isFullZone && !((null == n ? void 0 : n.isEnterpriseZone) && Array.isArray(null == n ? void 0 : n.entitlements) && (null == n || null == (e = n.entitlements) ? void 0 : e.find(n => {
							let {
								id: e,
								allocation: r
							} = n;
							return e === i.ry && !0 === r.value
						})))) return [!1, c.keys.cannot_transfer_zone_not_eligible];
					if ("Cloudflare" === n.registrar) return [!1, c.keys.cannot_transfer_domain_on_cf];
					if (n.isAvailable) return [!1, c.keys.cannot_transfer_domain_available];
					if (!n.transferConditions) return [!1, c.keys.cannot_transfer_domain_transfer_conditions];
					if (_(n)) return [!1, c.keys.cannot_transfer_domain_transfer_in_progress];
					if (n.currentExpiration) {
						let e = a()(n.currentExpiration),
							r = (0, g.Z)(n.name),
							o = a()(),
							t = (0, d.v)(n.name) ? 2 : 1;
						if (e.clone().add(t, "years").diff(o, "years", !0) > r) return [!1, c.keys.cannot_transfer_domain_year_limit_exceeded]
					}
					for (r in n.transferConditions)
						if ("not_premium" !== r && !n.transferConditions[r]) return [!1, c.keys.cannot_transfer_domain_transfer_conditions];
					let [o, t] = m(n);
					return o && t ? [!1, c.keys.cannot_transfer_domain_registry_status[t]] : [!0, ""]
				},
				h = n => n.filter(n => n.isSelected).reduce((n, e) => {
					let {
						name: r,
						fees: t,
						isZoneEntitlementPresent: a
					} = e;
					return a || !(0, o.isNumber)(null == t ? void 0 : t.transfer_fee) ? n : (0, d.v)(r) ? n + (null == t ? void 0 : t.transfer_fee) * 2 : n + (null == t ? void 0 : t.transfer_fee)
				}, 0),
				b = n => {
					let e = i.iG.concat(i.CD).reduce((n, e) => {
						var r, o;
						return r = function(n) {
							for (var e = 1; e < arguments.length; e++) {
								var r = null != arguments[e] ? arguments[e] : {},
									o = Object.keys(r);
								"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
									return Object.getOwnPropertyDescriptor(r, n).enumerable
								}))), o.forEach(function(e) {
									var o;
									o = r[e], e in n ? Object.defineProperty(n, e, {
										value: o,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : n[e] = o
								})
							}
							return n
						}({}, n), o = o = {
							[e]: []
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(n, e) {
							var r = Object.keys(n);
							if (Object.getOwnPropertySymbols) {
								var o = Object.getOwnPropertySymbols(n);
								r.push.apply(r, o)
							}
							return r
						})(Object(o)).forEach(function(n) {
							Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(o, n))
						}), r
					}, {});
					return n.forEach(n => {
						let r = A(n.registrar);
						r in e || (r = i.CD), (0, p.P)(n.name) && (r = "uk"), e[r].push(n)
					}), Object.keys(e).sort((n, e) => n.localeCompare(e)).map(n => ({
						registrar: n,
						domains: e[n]
					})).filter(n => n.domains.length > 0)
				},
				w = n => {
					var e;
					return (null == n || null == (e = n.transferIn) ? void 0 : e.enter_auth_code) === l.ZQ.REJECTED
				},
				f = n => null != n && !!n.transferOut,
				k = n => !y(n) && (0, s.T0)(n),
				y = n => !n || n.lastKnownStatus === l.vn.PENDING_TRANSFER || n.lastKnownStatus === l.vn.TRANSFER_FOA_PENDING || !(0, s.T0)(n) && n.transferConditions && !n.transferConditions.not_started || !1,
				x = n => {
					var e;
					return !!(null == n || null == (e = n.transferConditions) ? void 0 : e.supported_tld)
				},
				_ = n => {
					var e, r;
					return !!n.transferIn && !(null == (e = n.transferConditions) ? void 0 : e.not_started) && !!((0, p.P)(n.name) || (null == (r = n.registryStatuses) ? void 0 : r.includes(l.lm.PENDING_TRANSFER)))
				},
				E = n => {
					let [e] = v(n);
					return n.registrar && n.currentExpiration ? y(n) || (0, s.T0)(n) ? l.I5.InProgressOrOnCF : e ? l.I5.Supported : l.I5.Unsupported : l.I5.Unknown
				},
				O = n => {
					var e;
					return (null == n ? void 0 : n.transferIn) && [l.ZQ.REJECTED, l.ZQ.NEEDED].includes(null == n || null == (e = n.transferIn) ? void 0 : e.enter_auth_code) || !1
				},
				T = n => !!(null == n ? void 0 : n.includes(l.lm.PENDING_TRANSFER)),
				A = n => null == n ? void 0 : n.toLowerCase().replace(/\s|,|\./g, ""),
				I = n => {
					if (!n || !n.registrar) return "unknown";
					if ((0, p.P)(n.name)) return "uk";
					let e = A(n.registrar);
					return e in i.Sc ? e : "unknown"
				},
				C = n => !!(null == n ? void 0 : n.includes(l.lm.AUTO_RENEW_PERIOD)),
				S = n => (0, u.O)(n) ? 10 : 7
		},
		"./react/pages/home/members/sparrowEvents.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				$6: function() {
					return i
				},
				m7: function() {
					return c
				},
				sQ: function() {
					return l
				}
			});
			var o, t = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = r.n(t),
				i = ((o = {}).MEMBERS_TAB_NAVIGATE = "nagivate members tab", o.ENFORCE_2FA = "members enforce 2fa", o.SSO_SELF_SERVE = "members sso self serve", o.API_ACCESS_ENABLE = "members enable api access", o.MEMBER_API_ACCESS_ENABLE = "member enable api access", o.REMOVE_MEMBER = "members remove", o);
			let c = n => {
					let {
						name: e,
						additionalData: r = {}
					} = n;
					a().sendEvent(e, function(n) {
						for (var e = 1; e < arguments.length; e++) {
							var r = null != arguments[e] ? arguments[e] : {},
								o = Object.keys(r);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
								return Object.getOwnPropertyDescriptor(r, n).enumerable
							}))), o.forEach(function(e) {
								var o;
								o = r[e], e in n ? Object.defineProperty(n, e, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[e] = o
							})
						}
						return n
					}({}, r || {}))
				},
				l = () => {
					var n;
					return null == (n = Object.values(i)) ? void 0 : n.flat()
				}
		},
		"./react/pages/home/members/user-groups/sparrowEvents.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Ef: function() {
					return l
				},
				j$: function() {
					return i
				},
				kA: function() {
					return c
				}
			});
			var o, t = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = r.n(t),
				i = ((o = {}).CREATE_GROUP_BUTTON = "click create user group button", o.GROUP_CREATE = "create user group", o.GROUP_UPDATE = "group name updated", o.CREATE_GROUP_CANCEL = "click cancel create group", o.GROUP_DETAIL = "click view user group details", o.GROUP_EDIT_BUTTON = "click edit user group name button", o.GROUP_EDIT_CANCEL = "click cancel edit user group name", o.GROUP_DELETE_BUTTON = "click group delete button", o.GROUP_UNASSIGN_BUTTON = "click group unassign member button", o.GROUP_DELETE = "delete user group", o.GROUP_DELETE_CANCEL = "click cancel delete group", o.GROUP_SEARCH = "search for user group", o.GROUP_TAB_NAVIGATE = "nagivate group tab", o.GROUP_TABLE_ROW_CLICK = "user group table row click", o.GROUP_TABLE_ROW_MEMBERS_CLICK = "user group table row members click", o.GROUP_TABLE_ROW_POLICIES_CLICK = "user group table row policies click", o.GROUP_TABLE_ROW_SETTINGS_CLICK = "user group table row settings click", o.BACK_BUTTON = "clicked back from user group detail", o.MEMBER_ADD = "add user group member", o.MEMBER_DELETE = "delete user group member", o.POLICY_SAVE = "user group policies save", o.POLICY_DELETE = "user group policies delete", o);
			let c = n => {
					let {
						name: e,
						additionalData: r = {}
					} = n;
					a().sendEvent(e, function(n) {
						for (var e = 1; e < arguments.length; e++) {
							var r = null != arguments[e] ? arguments[e] : {},
								o = Object.keys(r);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
								return Object.getOwnPropertyDescriptor(r, n).enumerable
							}))), o.forEach(function(e) {
								var o;
								o = r[e], e in n ? Object.defineProperty(n, e, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[e] = o
							})
						}
						return n
					}({}, r || {}))
				},
				l = () => {
					var n;
					return null == (n = Object.values(i)) ? void 0 : n.flat()
				}
		},
		"./react/pages/home/rulesets/ddos/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				q: function() {
					return t
				}
			});
			var o, t = ((o = {}).TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o)
		},
		"./react/pages/hyperdrive/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				fb: function() {
					return l
				},
				rM: function() {
					return c
				},
				sx: function() {
					return s
				}
			});
			var o, t, a = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = r.n(a),
				c = ((o = {}).PURCHASE_WORKERS_PAID = "navigate to workers plan page", o.LIST_CONFIGS = "list hyperdrive configs", o.SEARCH_CONFIGS = "search hyperdrive configs", o.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", o.VIEW_CONFIG_DETAILS = "view hyperdrive config details", o.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", o.UPDATE_ORIGIN_CONN_LIM_SETTINGS = "update hyperdrive config origin connection limit settings", o.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", o.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", o.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", o.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", o.CLICK_QUICK_LINK = "click hyperdrive quick link", o.CLICK_DISCORD = "click hyperdrive discord", o.CLICK_COMMUNITY = "click hyperdrive community", o.CLICK_PLANETSCALE = "click planetscale flow", o.PLANETSCALE_COMPLETED = "planetscale flow completed", o),
				l = ((t = {})[t.success = 0] = "success", t[t.failure = 1] = "failure", t);
			let s = function(n) {
				var e, r;
				let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				i().sendEvent(n, (e = function(n) {
					for (var e = 1; e < arguments.length; e++) {
						var r = null != arguments[e] ? arguments[e] : {},
							o = Object.keys(r);
						"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
							return Object.getOwnPropertyDescriptor(r, n).enumerable
						}))), o.forEach(function(e) {
							var o;
							o = r[e], e in n ? Object.defineProperty(n, e, {
								value: o,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : n[e] = o
						})
					}
					return n
				}({}, o), r = r = {
					category: "Hyperdrive"
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(n, e) {
					var r = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						r.push.apply(r, o)
					}
					return r
				})(Object(r)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
				}), e))
			}
		},
		"./react/pages/internal-dns/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				q8: function() {
					return c
				},
				rM: function() {
					return i
				}
			});
			var o, t = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = r.n(t),
				i = ((o = {}).CLICK_GIVE_FEEDBACK = "click give feedback", o.CLICK_NAVIGATION_TAB = "click navigation tab", o.CLICK_CREATE_AN_INTERNAL_ZONE = "click create an internal zone", o.CLICK_SEARCH_BY_ZONE_NAME = "search by zone name", o.CLICK_CREATE_A_VIEW = "click create a view", o.CLICK_SEARCH_BY_RECORD_NAME = "search by record name", o.CLICK_SEARCH_BY_VIEW_NAME = "search by view name", o.CLICK_SAVE_VIEW = "click save view", o.CLICK_SAVE_ZONE = "click save zone", o.CLICK_ZONE_NAME = "click zone name", o.CLICK_ADD_A_RECORD = "click add a record", o.CLICK_ADD_RECORD_SAVE = "click add record save", o.CLICK_RECORD_EDIT = "click record edit", o.CLICK_EDIT_RECORD_SAVE = "click edit record save", o.CLICK_IMPORT_RECORDS = "click import records", o.CLICK_MANAGE_LINKED_VIEWS = "click manage linked views", o.CLICK_SAVE_MANAGE_LINKED_VIEWS = "click save manage linked views", o.CLICK_VIEW_RECORD = "click view record", o);
			let c = function(n) {
				let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				a().sendEvent(n, function(n) {
					for (var e = 1; e < arguments.length; e++) {
						var r = null != arguments[e] ? arguments[e] : {},
							o = Object.keys(r);
						"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
							return Object.getOwnPropertyDescriptor(r, n).enumerable
						}))), o.forEach(function(e) {
							var o;
							o = r[e], e in n ? Object.defineProperty(n, e, {
								value: o,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : n[e] = o
						})
					}
					return n
				}({
					category: "user journey",
					product: "internal-dns"
				}, e))
			}
		},
		"./react/pages/logs/logpush/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				B: function() {
					return t
				},
				Q: function() {
					return o
				}
			});
			let o = "logpush",
				t = {
					HEALTH_JOB_SELECTED: "logpush health job selected",
					HEALTH_METRIC_SELECTED: "logpush health metric selected",
					HEALTH_TIME_RANGE_SELECTED: "logpush health time range selected",
					HEALTH_TIMEZONE_CHANGED: "logpush health timezone changed",
					HEALTH_SECTION_CHANGED: "logpush health section changed",
					VIEW_HEALTH_BUTTON_CLICKED: "logpush view health button clicked",
					VIEW_HEALTH_MENU_CLICKED: "logpush view health menu clicked",
					JOBS_SEARCHED: "logpush jobs searched",
					GRAPHQL_EXPLORER_OPENED: "logpush graphql explorer opened"
				}
		},
		"./react/pages/magic/network-monitoring/constants.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				MP: function() {
					return t
				},
				Wz: function() {
					return o
				},
				fA: function() {
					return i
				},
				vT: function() {
					return a
				}
			});
			let o = {
					VIEW_RULES: "view rules list",
					CREATE_RULE: "create rule",
					UPDATE_RULE: "update rule",
					DELETE_RULE: "delete rule",
					VIEW_CONFIGURATION: "view configuration",
					CREATE_CONFIGURATION: "create configuration",
					UPDATE_CONFIGURATION: "update configuration",
					DELETE_CONFIGURATION: "delete configuration"
				},
				t = "Magic network monitoring",
				a = "user journey",
				i = 60
		},
		"./react/pages/magic/overview/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Rb: function() {
					return t
				},
				TM: function() {
					return c
				},
				k_: function() {
					return i
				},
				vT: function() {
					return a
				}
			});
			var o = r("./react/pages/magic/constants.ts");
			let t = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				a = "user journey",
				i = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				c = {
					MAGIC_WAN: o.Td,
					MAGIC_TRANSIT: o.Ms,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"./react/pages/magic/packet-captures/constants.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Rr: function() {
					return o
				},
				vT: function() {
					return a
				},
				xq: function() {
					return t
				}
			});
			let o = {
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
				t = "Magic packet captures",
				a = "user journey"
		},
		"./react/pages/pages/constants.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				BT: function() {
					return m
				},
				CP: function() {
					return h
				},
				Cs: function() {
					return N
				},
				Eu: function() {
					return v
				},
				FF: function() {
					return E
				},
				Ke: function() {
					return k
				},
				Lr: function() {
					return l
				},
				Mw: function() {
					return w
				},
				Nh: function() {
					return p
				},
				R6: function() {
					return b
				},
				UU: function() {
					return O
				},
				_O: function() {
					return R
				},
				bA: function() {
					return T
				},
				ck: function() {
					return f
				},
				eD: function() {
					return g
				},
				f9: function() {
					return s
				},
				l1: function() {
					return L
				},
				m0: function() {
					return S
				},
				m_: function() {
					return c
				},
				nv: function() {
					return I
				},
				rT: function() {
					return C
				},
				t4: function() {
					return _
				},
				tS: function() {
					return y
				},
				td: function() {
					return a
				},
				u$: function() {
					return x
				},
				yR: function() {
					return A
				},
				z2: function() {
					return d
				},
				zl: function() {
					return u
				}
			});
			var o, t = r("./utils/zeroTrust.ts");
			let a = "api.pages.cloudflare.com",
				i = "cloudflare-workers-and-pages",
				c = {
					dns: "https://cloudflare.com/dns",
					access: "https://www.cloudflare.com/teams-access/",
					access_dashboard: (0, t.m)(),
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
						functionsFailOpenClosed: "https://developers.cloudflare.com/pages/platform/functions/routing/#fail-open--closed",
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
						configFile: "https://developers.cloudflare.com/pages/functions/wrangler-configuration/",
						workersStaticAssets: "https://developers.cloudflare.com/workers/static-assets/",
						workersMigrationGuide: "https://developers.cloudflare.com/workers/static-assets/migrate-from-pages/",
						workersCompatibilityMatrix: "https://developers.cloudflare.com/workers/static-assets/migrate-from-pages/#compatibility-matrix",
						pagesV2ToV3MigrationGuide: "https://developers.cloudflare.com/pages/configuration/build-image/#v2-to-v3-migration",
						autoMigratePagesToWorkers: "https://developers.cloudflare.com/workers/static-assets/migration-guides/auto-migrate"
					},
					github: {
						appHomepage: "https://github.com/apps/".concat(i),
						installations: "https://github.com/settings/installations",
						newInstallation: "https://github.com/apps/".concat(i, "/installations/new"),
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
				s = 58,
				d = 2e3,
				u = 100,
				p = 350,
				g = 1e7,
				m = ["Success:", "Error:", "Failed:"],
				v = 10,
				h = "_headers",
				b = "_redirects",
				w = "_routes.json",
				f = "_worker.js",
				k = "do-a-barrel-roll",
				y = [h, b, w, f],
				x = 0x1900000,
				_ = 1e3,
				E = {
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
				O = 1e5,
				T = 75e3,
				A = 2e5,
				I = 15e4,
				C = 3e3,
				S = 2250;
			var N = ((o = {})[o.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", o[o.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", o[o.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", o[o.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", o[o.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", o[o.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", o);
			let R = 1,
				L = 2
		},
		"./react/pages/pipelines/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				rM: function() {
					return i
				},
				sx: function() {
					return c
				}
			});
			var o, t = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = r.n(t),
				i = ((o = {}).LIST_PIPELINES = "list pipelines", o.CREATE_PIPELINE = "create pipeline", o.VIEW_PIPELINE = "view pipeline details", o.DELETE_PIPELINE = "delete pipeline", o.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", o.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", o.CLICK_QUICK_LINK = "click pipeline quick link", o);
			let c = function(n) {
				var e, r;
				let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				a().sendEvent(n, (e = function(n) {
					for (var e = 1; e < arguments.length; e++) {
						var r = null != arguments[e] ? arguments[e] : {},
							o = Object.keys(r);
						"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
							return Object.getOwnPropertyDescriptor(r, n).enumerable
						}))), o.forEach(function(e) {
							var o;
							o = r[e], e in n ? Object.defineProperty(n, e, {
								value: o,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : n[e] = o
						})
					}
					return n
				}({}, o), r = r = {
					category: "Pipelines"
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(n, e) {
					var r = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						r.push.apply(r, o)
					}
					return r
				})(Object(r)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
				}), e))
			}
		},
		"./react/pages/profile/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				FF: function() {
					return i
				},
				Jj: function() {
					return t
				},
				OR: function() {
					return o
				},
				pR: function() {
					return a
				}
			});
			let o = "iam-authentication",
				t = "login",
				a = "profile",
				i = {
					[t]: {
						clickTryOther2FAMethodOrBackupCode: "click try another 2fa method or backup code",
						clickTryRecovery: "click try recovery",
						clickLoginFromMobileApp2fa: "click login on mobile-app/backup code 2fa",
						clickLoginFromEmailMFA: "click login on email mfa"
					},
					[a]: {
						clickRegenerateBackupCodes: "click regenerate backup codes"
					}
				}
		},
		"./react/pages/security-center/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				FT: function() {
					return c
				},
				VG: function() {
					return a
				},
				pr: function() {
					return i
				}
			});
			var o, t, a = ((o = {}).GEOLOCATION_CHANGED = "url scanner geolocation changed", o.LOAD_SCAN_INFO = "load url scan information", o.INITIATE_URL_SCAN = "initiate url scan", o);
			let i = {
				MANAGE_INSIGHT: "manage security insight",
				BULK_ARCHIVE: "bulk archive security insights",
				EXPAND_INSIGHT_ROW: "expand security issue row",
				ONE_CLICK_RESOLVE_BUTTON: "one click resolve security issue button",
				FOLLOW_RESOLVE_URL: "follow security issue resolve url",
				CLICK_SCAN_NOW: "run security scan",
				CLICK_EXPORT_INSIGHTS: "click export insights",
				CLICK_DETAILS_BUTTON: "click insights row details button"
			};
			var c = ((t = {}).LOAD_THREAT_EVENTS = "load threat events", t.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", t.THREAT_EVENTS_FILTERS = "threat events filters applied", t)
		},
		"./react/pages/security/ai-agent/constants.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				DT: function() {
					return a
				},
				lx: function() {
					return t
				},
				rd: function() {
					return o
				},
				sP: function() {
					return i
				}
			});
			let o = "Hi there, I’m Cloudy! I can help you identify suspicious activity, analyze traffic patterns, and recommend security rule configurations.",
				t = "open cloudy insight",
				a = "set cloudy tool response",
				i = "set cloudy tool error"
		},
		"./react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				FH: function() {
					return u
				},
				JA: function() {
					return s
				},
				Nq: function() {
					return d
				},
				Qt: function() {
					return l
				},
				_1: function() {
					return a
				},
				m4: function() {
					return c
				},
				pE: function() {
					return i
				}
			});
			var o, t = r("./react/pages/security/detections/pages/root/components/new-settings/resources/types.ts");
			let a = {
					[t.SV.WebApplicationExploits]: "settings.tabs.web-application-exploits",
					[t.SV.DdosAttacks]: "settings.tabs.ddos-attacks",
					[t.SV.BotTraffic]: "settings.tabs.bot-traffic",
					[t.SV.ApiAbuse]: "settings.tabs.api-abuse",
					[t.SV.ClientSideAbuse]: "settings.tabs.client-side-abuse",
					[t.SV.DomainSettings]: "settings.filters.domain-settings",
					[t.SV.WebAssetsAndEndpoints]: "settings.filters.web-assets-and-endpoints",
					[t.SV.RuleTemplates]: "settings.filters.rule-templates",
					[t.SV.Detections]: "settings.filters.detections",
					[t.SV.General]: "settings.filters.general"
				},
				i = {
					[t.SV.WebApplicationExploits]: "security-waf",
					[t.SV.DdosAttacks]: "retarget",
					[t.SV.BotTraffic]: "security-bots",
					[t.SV.ApiAbuse]: "api-security",
					[t.SV.ClientSideAbuse]: "user-multi"
				},
				c = {
					300: {
						label: "time.num_minutes",
						smartCount: 5
					},
					900: {
						label: "time.num_minutes",
						smartCount: 15
					},
					1800: {
						label: "time.num_minutes",
						smartCount: 30
					},
					2700: {
						label: "time.num_minutes",
						smartCount: 45
					},
					3600: {
						label: "time.num_hours",
						smartCount: 1
					},
					7200: {
						label: "time.num_hours",
						smartCount: 2
					},
					10800: {
						label: "time.num_hours",
						smartCount: 3
					},
					14400: {
						label: "time.num_hours",
						smartCount: 4
					},
					28800: {
						label: "time.num_hours",
						smartCount: 8
					},
					57600: {
						label: "time.num_hours",
						smartCount: 16
					},
					86400: {
						label: "time.num_days",
						smartCount: 1
					},
					604800: {
						label: "time.num_weeks",
						smartCount: 1
					},
					2592e3: {
						label: "time.num_months",
						smartCount: 1
					},
					31536e3: {
						label: "time.num_years",
						smartCount: 1
					}
				};
			var l = ((o = {}).LOAD_SETTINGS = "load setting", o.OPEN_SIDE_MODAL_SETTING = "open side modal setting", o.CLOSE_SIDE_MODAL_SETTING = "close side modal setting", o.CHANGE_SETTING = "change setting", o.FILTER_SETTING = "filter setting", o);
			let s = {
					id: t.ws.ManagedRuleset,
					titleKey: "settings.cards.managed-ruleset.title",
					descriptionKey: "settings.cards.managed-ruleset.description",
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/",
					oldDescription: ["WAF"],
					tabs: [t.SV.WebApplicationExploits, t.SV.DdosAttacks],
					filters: [t.SV.Detections],
					isGeneral: !1
				},
				d = {
					id: t.ws.OwaspCore,
					titleKey: "settings.cards.owasp-core.title",
					descriptionKey: "settings.cards.owasp-core.description",
					oldDescription: ["WAF"],
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/reference/owasp-core-ruleset/",
					tabs: [t.SV.WebApplicationExploits],
					filters: [t.SV.Detections],
					isGeneral: !1
				},
				u = {
					id: t.ws.SuspiciousHints,
					titleKey: "settings.cards.suspicious-hints.title",
					descriptionKey: "settings.cards.suspicious-hints.description",
					oldDescription: ["WAF"],
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/",
					tabs: [t.SV.WebApplicationExploits],
					filters: [t.SV.Detections],
					isGeneral: !1
				}
		},
		"./react/pages/security/detections/pages/root/components/new-settings/resources/types.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				GZ: function() {
					return c
				},
				SV: function() {
					return i
				},
				ws: function() {
					return l
				}
			});
			var o, t, a, i = ((o = {}).WebApplicationExploits = "web-application-exploits", o.DdosAttacks = "ddos-attacks", o.BotTraffic = "bot-traffic", o.ApiAbuse = "api-abuse", o.ClientSideAbuse = "client-side-abuse", o.DomainSettings = "domain-settings", o.WebAssetsAndEndpoints = "web-assets-and-endpoints", o.RuleTemplates = "rule-templates", o.Detections = "detections", o.General = "general", o),
				c = ((t = {}).Tab = "tabs", t.Filters = "filters", t.Search = "search", t.ID = "id", t),
				l = ((a = {}).OptOut = "opt-out", a.AILabyrinth = "ai-labyrinth", a.BlockAIBots = "block-ai-bots", a.BrowserIntegrity = "browser-integrity", a.ChallengePassage = "challenge-passage", a.ClientCertificates = "client-certificates", a.CloudflareManagedRuleset = "cloudflare-managed-ruleset", a.CreateDeveloperPortal = "create-developer-portal", a.CustomFallthrough = "custom-fallthrough", a.EndpointDiscovery = "endpoint-discovery", a.FirewallAi = "firewall-ai", a.HttpDdos = "http-ddos", a.IpAccessRules = "ip-access-rules", a.IpLists = "ip-lists", a.JwtValidation = "jwt-validation", a.Labels = "labels", a.LeakedCredentialCheck = "leaked-credential-check", a.MaliciousUploadDetection = "malicious-upload-detection", a.ManagedRuleset = "managed-ruleset", a.Mtls = "mtls", a.NetworkDdos = "network-ddos", a.OwaspCore = "owasp-core", a.RateLimitAuthentication = "rate-limit-authentication", a.ReplaceInsecureJavascript = "replace-insecure-javascript", a.RobotsTxt = "robots-txt", a.SequenceDetection = "sequence-detection", a.SchemaDiscovery = "schema-discovery", a.SchemaValidation = "schema-validation", a.SecurityLevel = "security-level", a.SecurityTxt = "security-txt", a.SensitiveDataDetection = "sensitive-data-detection", a.SessionIdentifiers = "session-identifiers", a.SslDdos = "ssl-ddos", a.TokenConfigurations = "token-configurations", a.UserAgentBlocking = "user-agent-blocking", a.VolumetricAbuse = "volumetric-abuse", a.ZoneLockdown = "zone-lockdown", a.ContinuousScriptMonitoring = "continuous-script-monitoring", a.BotManagement = "bot-management", a.SuperBotFightMode = "super-bot-fight-mode", a.BotFightMode = "bot-fight-mode", a.ManagedRobotsTxt = "managed-robots-txt", a.SuspiciousHints = "suspicious-hints", a)
		},
		"./react/pages/security/overview/resources/constants.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				F5: function() {
					return u
				},
				KW: function() {
					return o
				},
				XO: function() {
					return d
				},
				ag: function() {
					return l
				},
				ef: function() {
					return c
				},
				ys: function() {
					return s
				}
			});
			let o = 5;
			var t, a, i, c = ((t = {}).EXTERNAL_DOCUMENTATION = "external_documentation", t.LINK_TO_MANAGED = "link_to_managed_rules", t.LINK_TO_EVENTS = "link_to_security_events", t.LINK_TO_DDOS = "link_to_ddos", t.LINK_BOT_MGMT = "link_to_bot_mgmt", t.LINK_TO_AI_AUDIT = "link_to_ai_audit", t.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", t.LINK_TO_PAGE_SHIELD = "link_to_page_shield", t.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", t.LINK_TO_SECURITY_EVENTS = "link_to_security_events", t.LINK_TO_IP_RULE = "link_to_ip_rule", t.LINK_TO_CONFIGURATION = "link_to_configuration", t.LINK_TO_UPLOAD_SCHEMAS = "link_to_upload_schemas", t.LINK_TO_WEB_ASSETS = "link_to_web_assets", t.LINK_TO_DOMAINS = "link_to_domains", t.LINK_TO_RL_COOKIE = "link_to_rl_clearance_cookie", t),
				l = ((a = {}).LOAD_INSIGHTS = "load overview action items", a.LOAD_INSIGHTS_LIST = "load overview action list items", a.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", a.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", a.CLICK_ACTION_INSIGHT = "click overview action item suggestion", a);
			let s = "security-overview-all-suggestions",
				d = [{
					title: "overview.modules.tab",
					url: "/"
				}, {
					title: "overview.all_suggestions.tab",
					url: "/all"
				}];
			var u = ((i = {}).ARCHIVED = "archived", i.FRAUD_AND_ACCOUNT_ABUSE = "fraud_account_abuse", i)
		},
		"./react/pages/security/waf/managed-rules/resources/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Fz: function() {
					return i
				},
				im: function() {
					return a
				}
			});
			var o = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				t = r.n(o);
			let a = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				i = n => {
					let {
						event: e,
						category: r = "user journey",
						product: o = "waf",
						productName: a = "Managed Rules",
						additionalData: i
					} = n;
					t().sendEvent(e, function(n) {
						for (var e = 1; e < arguments.length; e++) {
							var r = null != arguments[e] ? arguments[e] : {},
								o = Object.keys(r);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
								return Object.getOwnPropertyDescriptor(r, n).enumerable
							}))), o.forEach(function(e) {
								var o;
								o = r[e], e in n ? Object.defineProperty(n, e, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[e] = o
							})
						}
						return n
					}({
						category: r,
						product: o,
						productName: a
					}, i || {}))
				}
		},
		"./react/pages/security/web-assets/resources/endpoints/constants.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				AI: function() {
					return u
				},
				HR: function() {
					return g
				},
				Pk: function() {
					return l
				},
				QO: function() {
					return v
				},
				il: function() {
					return p
				},
				nI: function() {
					return d
				},
				q3: function() {
					return s
				},
				yP: function() {
					return m
				}
			});
			var o, t, a, i = r("../../../node_modules/@cloudflare/util-routes/es/index.js");

			function c() {
				var n, e;
				let r = (n = ["/", "/", "/security/analytics"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
					raw: {
						value: Object.freeze(e)
					}
				})));
				return c = function() {
					return r
				}, r
			}
			let l = 50,
				s = 10;
			var d = ((o = {}).REPORT_TYPE_BOLA_ENUMERATION = "REPORT_TYPE_BOLA_ENUMERATION", o.REPORT_TYPE_BOLA_POLLUTION = "REPORT_TYPE_BOLA_PARAMETER_POLLUTION", o),
				u = ((t = {}).SEVERITY_HIGH = "SEVERITY_HIGH", t.SEVERITY_MEDIUM = "SEVERITY_MEDIUM", t.SEVERITY_LOW = "SEVERITY_LOW", t.SEVERITY_CRITICAL = "SEVERITY_CRITICAL", t.SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED", t.SEVERITY_INFORMATIONAL = "SEVERITY_INFORMATIONAL", t);
			let p = {
					REPORT_TYPE_BOLA_PARAMETER_POLLUTION: "cf-risk-bola-pollution",
					REPORT_TYPE_BOLA_ENUMERATION: "cf-risk-bola-enumeration"
				},
				g = 10,
				m = (0, i.wE)(c(), "accountId", "zoneName");
			var v = ((a = {}).OPEN_SIDE_MODAL = "open side modal operations", a.REDIRECT_TO_OPERATION_DETAIL = "redirect to operation detection", a.REDIRECT_TO_OPERATIONS_LIST = "redirect to operations", a)
		},
		"./react/pages/shared-config/sparrowEvents.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				G: function() {
					return t
				}
			});
			var o, t = ((o = {}).CLICK_MENU_ITEM_SHARE = "click on share item", o.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", o.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", o.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", o.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", o.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", o.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", o.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", o.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", o.CLICK_ON_DELETE_RULESET = "click on delete ruleset", o.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", o)
		},
		"./react/pages/spectrum/tracking.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				r: function() {
					return t
				}
			});
			var o, t = ((o = {}).IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o)
		},
		"./react/pages/speed/observatory-tracking.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				G: function() {
					return c
				},
				n: function() {
					return i
				}
			});
			var o = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				t = r.n(o),
				a = r("./react/pages/speed/shared/queryClient.ts");
			let i = {
				VIEW_RECOMMENDATION: "view recommendation",
				OPEN_RECOMMENDATION: "open recommendation",
				ARCHIVE_RECOMMENDATION: "archive recommendation",
				UNARCHIVE_RECOMMENDATION: "unarchive recommendation",
				CLICK_LEARN_MORE_RECOMMENDATION: "click learn more recommendation",
				ACCEPT_RECOMMENDATION: "accept recommendation"
			};

			function c(n, e) {
				var r, o;
				let i = a.q.getQueryData(["rum_status_for_tracking"]);
				t().sendEvent(n, (r = function(n) {
					for (var e = 1; e < arguments.length; e++) {
						var r = null != arguments[e] ? arguments[e] : {},
							o = Object.keys(r);
						"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
							return Object.getOwnPropertyDescriptor(r, n).enumerable
						}))), o.forEach(function(e) {
							var o;
							o = r[e], e in n ? Object.defineProperty(n, e, {
								value: o,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : n[e] = o
						})
					}
					return n
				}({
					category: "observatory"
				}, e), o = o = {
					rum_status: i
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(n, e) {
					var r = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						r.push.apply(r, o)
					}
					return r
				})(Object(o)).forEach(function(n) {
					Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(o, n))
				}), r))
			}
		},
		"./react/pages/speed/shared/queryClient.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				q: function() {
					return o
				}
			});
			let o = new(r("../../../node_modules/@tanstack/query-core/build/lib/queryClient.mjs")).E({
				defaultOptions: {
					queries: {
						staleTime: 1e4,
						refetchOnWindowFocus: !1
					}
				}
			})
		},
		"./react/pages/traffic/argo/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Y: function() {
					return t
				}
			});
			var o, t = ((o = {}).ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o)
		},
		"./react/pages/traffic/load-balancing/account/resources/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Jq: function() {
					return v
				},
				LU: function() {
					return m
				},
				Of: function() {
					return u
				},
				aX: function() {
					return d
				},
				bD: function() {
					return h
				},
				eX: function() {
					return g
				},
				qN: function() {
					return p
				}
			});
			var o, t, a, i, c, l = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = r.n(l),
				d = ((o = {}).TRY_NEW_DASHBOARD_CTA = "click try new dashboard", o),
				u = ((t = {}).CREATE_BUTTON_CLICK = "click create load balancer", t.TOGGLE_STATUS = "load balancer toggle status", t.REVIEW_PAGE_CLICK = "click load balancer table review link", t.EDIT_CLICK = "click load balancer table edit button", t.DELETE_CLICK = "click load balancer table delete button", t),
				p = ((a = {}).EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", a.EDIT_IP_CLICK = "click edit load balancer IP", a.EDIT_POOLS_CLICK = "click edit load balancer pools", a.EDIT_MONITORS_CLICK = "click edit load balancer monitors", a.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", a.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", a),
				g = ((i = {}).GO_TO_STEP = "click load balancer step", i.BACK_TO_STEP = "click load balancer back to step", i.SAVE = "save load balancer", i.SAVE_AS_DRAFT = "save load balancer as draft", i.SAVE_AND_DEPLOY = "save and deploy load balancer", i.NAVIGATION_CHANGE = "click load balancer wizard navigation link", i.CLICK_PRIVATE_LB_DOCUMENTATION = "click link to private load balancing documentation", i),
				m = ((c = {}).OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", c);
			let v = Object.values({
					MIGRATION: d,
					LOAD_BALANCERS_TABLE: u,
					REVIEW: p,
					WIZARD: g,
					USAGE: m
				}).flatMap(Object.values),
				h = (n, e) => s().sendEvent(n, function(n) {
					for (var e = 1; e < arguments.length; e++) {
						var r = null != arguments[e] ? arguments[e] : {},
							o = Object.keys(r);
						"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
							return Object.getOwnPropertyDescriptor(r, n).enumerable
						}))), o.forEach(function(e) {
							var o;
							o = r[e], e in n ? Object.defineProperty(n, e, {
								value: o,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : n[e] = o
						})
					}
					return n
				}({
					category: "user journey",
					product: "load balancing"
				}, e))
		},
		"./react/pages/traffic/load-balancing/resources/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				M: function() {
					return t
				}
			});
			var o, t = ((o = {}).CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", o.POOL_TABLE = "click on expandable row on pool", o.CREATE_MONITOR_LINK = "click on create a monitor", o.EDIT_MONITOR_LINK = "click on edit a monitor", o.EDIT_MONITOR = "edit monitor", o.CREATE_MONITOR = "create monitor", o.CREATE_POOL_LINK = "click on create a pool", o.EDIT_POOL_LINK = "click on edit a pool", o.EDIT_POOL = "edit pool", o.CREATE_POOL = "create pool", o)
		},
		"./react/pages/traffic/waiting-rooms/tracking.tsx": function(n, e, r) {
			"use strict";
			r.d(e, {
				D: function() {
					return c
				},
				r: function() {
					return i
				}
			});
			var o, t = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = r.n(t),
				i = ((o = {}).CREATE = "create waiting room", o.UPDATE = "update waiting room", o.EVENTS = "view waiting rooms events", o.ANALYTICS = "view waiting room analytics", o.GENERATE_PREVIEW = "generate waiting room preview link", o);
			let c = async n => {
				await a().sendEvent(n, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"./react/pages/turnstile/tracking.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Dn: function() {
					return c
				},
				mP: function() {
					return l
				},
				rM: function() {
					return i
				}
			});
			var o, t = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = r.n(t),
				i = ((o = {}).OVERVIEW_PAGE = "view the overview page", o.LIST_OF_WIDGETS = "list of widgets", o.SOLVE_EVENTS = "list solve events", o.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", o.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", o.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", o.OPEN_DELETE_MODAL = "view the delete modal for one widget", o.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", o.DELETE_WIDGET = "delete successfully widgets", o.LIST_OF_HOSTNAMES = "list hostnames", o.OPEN_ADD_WIDGET_PAGE = "view page to add widget", o.FEEDBACK_ADD = "view Feedback Add", o.SAVE_WIDGET = "save widget", o.ROTATE_KEYS = "rotate keys", o.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", o.GET_WIDGETS = "get widget details", o.OPEN_ANALYTICS_PAGE = "view analytics page", o.ANALYTICS_DATA = "list the analytics data", o);
			let c = n => {
					let {
						name: e,
						product: r = "TURNSTILE",
						category: o = "user journey",
						page: t,
						additionalData: i = {}
					} = n;
					a().sendEvent(e, function(n) {
						for (var e = 1; e < arguments.length; e++) {
							var r = null != arguments[e] ? arguments[e] : {},
								o = Object.keys(r);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
								return Object.getOwnPropertyDescriptor(r, n).enumerable
							}))), o.forEach(function(e) {
								var o;
								o = r[e], e in n ? Object.defineProperty(n, e, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[e] = o
							})
						}
						return n
					}({
						category: o,
						page: t,
						product: r
					}, i || {}))
				},
				l = () => {
					var n;
					return null == (n = Object.values(i)) ? void 0 : n.flat()
				}
		},
		"./react/pages/welcome/routes.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				B: function() {
					return b
				}
			});
			var o = r("../../../node_modules/@cloudflare/util-routes/es/index.js");

			function t(n, e) {
				return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
					raw: {
						value: Object.freeze(e)
					}
				}))
			}

			function a() {
				let n = t(["/", "/"]);
				return a = function() {
					return n
				}, n
			}

			function i() {
				let n = t(["/", "/home/domains"]);
				return i = function() {
					return n
				}, n
			}

			function c() {
				let n = t(["/", "/home/developer-platform"]);
				return c = function() {
					return n
				}, n
			}

			function l() {
				let n = t(["/", "/add-site"]);
				return l = function() {
					return n
				}, n
			}

			function s() {
				let n = t(["/", "/welcome"]);
				return s = function() {
					return n
				}, n
			}

			function d() {
				let n = t(["/", "/websites"]);
				return d = function() {
					return n
				}, n
			}

			function u() {
				let n = t(["/", "/welcome/build"]);
				return u = function() {
					return n
				}, n
			}

			function p() {
				let n = t(["/", "/welcome/protect"]);
				return p = function() {
					return n
				}, n
			}

			function g() {
				let n = t(["/", "/welcome/connect"]);
				return g = function() {
					return n
				}, n
			}

			function m() {
				let n = t(["/", "/welcome/role"]);
				return m = function() {
					return n
				}, n
			}

			function v() {
				let n = t(["/", "/welcome/employee-count"]);
				return v = function() {
					return n
				}, n
			}

			function h() {
				let n = t(["/", "/welcome/use-case"]);
				return h = function() {
					return n
				}, n
			}
			let b = {
				default: (0, o.wE)(a(), "accountId"),
				home: (0, o.wE)(i(), "accountId"),
				develop: (0, o.wE)(c(), "accountId"),
				addSite: (0, o.wE)(l(), "accountId"),
				root: (0, o.wE)(s(), "accountId"),
				websites: (0, o.wE)(d(), "accountId"),
				build: (0, o.wE)(u(), "accountId"),
				protect: (0, o.wE)(p(), "accountId"),
				connect: (0, o.wE)(g(), "accountId"),
				role: (0, o.wE)(m(), "accountId"),
				count: (0, o.wE)(v(), "accountId"),
				useCase: (0, o.wE)(h(), "accountId")
			}
		},
		"./react/shims/focus-visible.js": function() {
			(function() {
				"use strict";
				"undefined" != typeof document && function(n) {
					var e;

					function r() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}(function() {
					var n = !0,
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

					function t(n) {
						return !!n && n !== document && "HTML" !== n.nodeName && "BODY" !== n.nodeName && "classList" in n && "contains" in n.classList
					}

					function a(n) {
						"" !== n.getAttribute("is-focus-visible") && n.setAttribute("is-focus-visible", "")
					}

					function i(e) {
						n = !1
					}

					function c() {
						document.addEventListener("mousemove", l), document.addEventListener("mousedown", l), document.addEventListener("mouseup", l), document.addEventListener("pointermove", l), document.addEventListener("pointerdown", l), document.addEventListener("pointerup", l), document.addEventListener("touchmove", l), document.addEventListener("touchstart", l), document.addEventListener("touchend", l)
					}

					function l(e) {
						"html" !== e.target.nodeName.toLowerCase() && (n = !1, document.removeEventListener("mousemove", l), document.removeEventListener("mousedown", l), document.removeEventListener("mouseup", l), document.removeEventListener("pointermove", l), document.removeEventListener("pointerdown", l), document.removeEventListener("pointerup", l), document.removeEventListener("touchmove", l), document.removeEventListener("touchstart", l), document.removeEventListener("touchend", l))
					}
					document.addEventListener("keydown", function(e) {
						t(document.activeElement) && a(document.activeElement), n = !0
					}, !0), document.addEventListener("mousedown", i, !0), document.addEventListener("pointerdown", i, !0), document.addEventListener("touchstart", i, !0), document.addEventListener("focus", function(e) {
						if (t(e.target)) {
							var r, i, c;
							(n || (i = (r = e.target).type, "INPUT" == (c = r.tagName) && o[i] && !r.readOnly || "TEXTAREA" == c && !r.readOnly || r.isContentEditable || 0)) && a(e.target)
						}
					}, !0), document.addEventListener("blur", function(n) {
						if (t(n.target) && n.target.hasAttribute("is-focus-visible")) {
							var o;
							e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
								e = !1, window.clearTimeout(r)
							}, 100), "" === (o = n.target).getAttribute("is-focus-visible") && o.removeAttribute("is-focus-visible")
						}
					}, !0), document.addEventListener("visibilitychange", function(r) {
						"hidden" == document.visibilityState && (e && (n = !0), c())
					}, !0), c(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				})
			})()
		},
		"./react/utils/cookiePreferences.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				SU: function() {
					return a
				},
				Yj: function() {
					return i
				},
				vM: function() {
					return c
				},
				xE: function() {
					return t
				}
			}), r("../../../node_modules/cookie/index.js");
			let o = () => {
					var n;
					return (null == (n = window) ? void 0 : n.OnetrustActiveGroups) || ""
				},
				t = () => -1 !== (o() || "").indexOf("C0002"),
				a = () => -1 !== (o() || "").indexOf("C0003"),
				i = n => {
					document.cookie = "".concat(n, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=").concat(".cloudflare.com")
				},
				c = () => {
					var n;
					let e = null == (n = window.OneTrust) ? void 0 : n.getGeolocationData();
					return (null == e ? void 0 : e.country) || ""
				}
		},
		"./react/utils/fragments.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Ru: function() {
					return c
				},
				Wv: function() {
					return p
				},
				mF: function() {
					return d
				}
			});
			var o, t = r("webpack/sharing/consume/default/react/react"),
				a = r("../../../node_modules/cookie/index.js"),
				i = r("../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				c = ((o = {}).FRACTUS_MANAGED_PROFILE = "fractus-managed-profile", o.FRACTUS_CALLS = "fractus-calls", o.FRACTUS_REALTIME = "fractus-realtime", o.FRACTUS_MAGIC_NETWORKING = "magic-networking", o.FRACTUS_NETWORK_ANALYTICS = "fractus-network-analytics", o.FRACTUS_ACTIVE_SESSIONS = "fractus-active-sessions", o.FRACTUS_ONE_DASH_CLOUDFLARE_COM = "one-dash-cloudflare-com", o.FRACTUS_QWIK_KV_PAGE = "qwik-kv-page", o.FRACTUS_REMIX_KV_PAGE = "remix-kv-page", o.FRACTUS_PAYMENTS = "fractus-payments", o.FRACTUS_EMAIL_SERVICE = "fractus-email-service", o);
			let l = new Set(Object.values(c)),
				s = "fragment_id",
				d = n => {
					let {
						fragmentId: e,
						path: r,
						domain: o
					} = n;
					document.cookie = "".concat(s, "=").concat(e, "; domain=").concat(o || window.location.hostname, "; path=").concat(r || window.location.pathname, ";")
				},
				u = function() {
					let {
						path: n,
						domain: e
					} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					document.cookie = "".concat(s, "=; domain=").concat(e || window.location.hostname, "; path=").concat(n || window.location.pathname, ";expires=Thu, 01 Jan 1970 00:00:01 GMT;")
				},
				p = () => {
					let n = (0, i.mJ)(),
						e = (0, a.parse)(document.cookie)[s];
					(0, t.useEffect)(() => {
						let r = !!e && l.has(e),
							o = !(null == n ? void 0 : n[e]);
						if (r && o) {
							let n;
							null == (n = document.querySelector('web-fragment-host[fragment-id="'.concat(e, '"]'))) || n.remove(), u()
						}
					}, [n, e])
				}
		},
		"./react/utils/useDomainConnectRedirect.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				Y: function() {
					return l
				},
				x: function() {
					return c
				}
			});
			var o = r("webpack/sharing/consume/default/react/react"),
				t = r("../../../node_modules/@cloudflare/util-cache/es/index.js"),
				a = r("webpack/sharing/consume/default/react-router-dom/react-router-dom");
			let i = /^\/domainconnect\/v2\/domaintemplates\//i,
				c = "domain-connect-redirect",
				l = () => {
					let n = (0, a.useLocation)();
					(0, o.useEffect)(() => {
						i.test(n.pathname) && t.A.set(c, n, 6e4)
					}, [])
				}
		},
		"./utils/getDashVersion.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				k: function() {
					return a
				},
				n: function() {
					return t
				}
			});
			var o = r("../../../node_modules/cookie/index.js");
			let t = () => {
					var n, e;
					return null == (e = window) || null == (n = e.build) ? void 0 : n.dashVersion
				},
				a = () => {
					var n;
					return void 0 !== ((0, o.parse)(null == (n = document) ? void 0 : n.cookie) || {}).CF_dash_version
				}
		},
		"./utils/initSparrow.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				ls: function() {
					return er
				},
				Pl: function() {
					return ee
				},
				MJ: function() {
					return et
				},
				_G: function() {
					return ea
				},
				yS: function() {
					return eo
				}
			});
			var o, t = r("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = r.n(t),
				i = r("./react/utils/bootstrap.ts"),
				c = r("./react/app/providers/storeContainer.js"),
				l = r("./react/common/selectors/languagePreferenceSelector.ts"),
				s = r("./flags.ts"),
				d = r("../../../node_modules/cookie/index.js"),
				u = r("./react/utils/url.ts"),
				p = r("./react/common/selectors/zoneSelectors.ts"),
				g = r("../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				m = r("../../../node_modules/lodash-es/memoize.js"),
				v = r("../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				h = r("./utils/getDashVersion.ts"),
				b = r("./react/common/selectors/accountSelectors.ts"),
				w = r("./react/common/selectors/entitlementsSelectors.ts"),
				f = r("./react/common/utils/getEnvironment.ts");

			function k(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						o = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
						return Object.getOwnPropertyDescriptor(r, n).enumerable
					}))), o.forEach(function(e) {
						var o;
						o = r[e], e in n ? Object.defineProperty(n, e, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[e] = o
					})
				}
				return n
			}
			let y = g.eg.exact(g.eg.object({
					_ga: g.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": g.eg.string.optional
				})),
				x = (0, m.A)(n => {
					try {
						return y.assertDecode((0, d.parse)(n))
					} catch (n) {
						return console.error(n), {}
					}
				}),
				_ = n => (e, o, t) => {
					try {
						var a, i, l, s;
						let d = window.location.pathname,
							g = (0, c.KA)().getState(),
							m = x(document.cookie),
							y = k({
								page: (0, u.eD)(t.page || window.location.pathname),
								dashVersion: (0, h.n)(),
								environment: (0, f.A)()
							}, m);
						if ("identify" === e) {
							let c = {
								gates: (0, v.Lv)(g) || {},
								country: null == (i = r.g) || null == (a = i.bootstrap) ? void 0 : a.ip_country
							};
							return n(e, o, k({}, y, c, t))
						} {
							let r = {
								accountId: (0, u.kW)(d),
								zoneName: (0, u.hK)(d),
								domainName: (0, u.AA)(d)
							};
							if ((0, u.Oj)(d)) {
								let n = (0, b.sU)(g);
								r.isEntAccount = !!(null == n || null == (l = n.meta) ? void 0 : l.has_enterprise_zones) || (0, w.WJ)(g)
							}
							if ((0, u.Lu)(d)) {
								let n = (0, p.HD)(g);
								r.zoneId = null == n ? void 0 : n.id, r.plan = null == n || null == (s = n.plan) ? void 0 : s.legacy_id
							}
							return n(e, o, k({}, y, r, t))
						}
					} catch (r) {
						return console.error(r), n(e, o, t)
					}
				},
				E = n => async (e, r, o) => {
					try {
						return await n(e, r, o)
					} catch (n) {
						if (console.error(n), !eo()) throw n;
						return {
							status: "rejected",
							reason: n
						}
					}
				};
			var O = r("./react/app/components/AccountHome/tracking.ts"),
				T = r("./react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				A = r("./react/common/components/api-tokens/sparrowEvents.ts"),
				I = r("./react/common/components/filter-editor/constants/userJourney.ts"),
				C = r("./react/common/hooks/rulesets/resources/tracking.tsx"),
				S = r("./react/common/middleware/sparrow/errors.ts"),
				N = r("./react/pages/abuse/constants.ts"),
				R = r("./react/pages/blocked-content/constants.ts"),
				L = r("./react/pages/caching/tracking.tsx"),
				D = r("./react/pages/dns/dns-records/tracking.ts"),
				P = r("./react/pages/home/alerts/tracking.ts"),
				M = r("./react/pages/home/audit-log/tracking.ts"),
				j = r("./react/pages/logs/logpush/tracking.ts"),
				U = r("./react/pages/home/configurations/dns-settings/tracking.ts"),
				F = r("./react/pages/home/configurations/lists/tracking.ts"),
				z = r("./react/pages/home/domain-registration/tracking.ts"),
				G = r("./react/pages/home/members/sparrowEvents.ts"),
				W = r("./react/pages/home/rulesets/ddos/tracking.ts"),
				K = r("./react/pages/hyperdrive/tracking.ts"),
				B = r("./react/pages/magic/network-monitoring/constants.ts"),
				V = r("./react/pages/magic/overview/tracking.ts"),
				H = r("./react/pages/magic/packet-captures/constants.ts"),
				Y = r("./react/pages/page-rules/tracking.ts"),
				q = r("./react/pages/pages/constants.ts"),
				Z = r("./react/pages/pipelines/tracking.ts"),
				Q = r("./react/pages/profile/tracking.ts"),
				J = r("./react/pages/secrets-store/resources/constants.ts"),
				X = r("./react/pages/speed/smart-shield/resources/constants.ts"),
				$ = r("./react/pages/security-center/tracking.ts"),
				nn = r("./react/pages/security/analytics/security-analytics/resources/constants.ts"),
				ne = r("./react/pages/security/api-shield/tracking.ts"),
				nr = r("./react/pages/security/bots/tracking.ts"),
				no = r("./react/pages/security/overview/resources/constants.ts"),
				nt = r("./react/pages/security/page-shield/resources/index.ts"),
				na = r("./react/pages/security/resources/constants.tsx"),
				ni = r("./react/pages/security/security-rules/resources/sparrowEvents.ts"),
				nc = r("./react/common/components/filter-editor/triplet-fields/SequencesField/constants.tsx"),
				nl = r("./react/pages/security/settings/index.tsx"),
				ns = r("./react/pages/security/waf/managed-rules/resources/tracking.ts"),
				nd = r("./react/pages/shared-config/sparrowEvents.tsx"),
				nu = r("./react/pages/spectrum/tracking.tsx"),
				np = r("./react/pages/traffic/argo/tracking.ts"),
				ng = r("./react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				nm = r("./react/pages/traffic/load-balancing/resources/tracking.ts"),
				nv = r("./react/pages/traffic/waiting-rooms/tracking.tsx"),
				nh = r("./react/pages/turnstile/tracking.ts"),
				nb = r("./react/pages/home/members/user-groups/sparrowEvents.ts"),
				nw = r("./react/pages/zoneless-workers/constants.ts"),
				nf = r("./react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts"),
				nk = r("./react/pages/analytics/eos/resources/tracking.ts"),
				ny = r("./react/pages/internal-dns/tracking.ts"),
				nx = r("./react/pages/security/ai-agent/constants.ts"),
				n_ = r("./react/common/middleware/sparrow/globalEvents/clickEvents.ts"),
				nE = r("./react/pages/ai-zone/constants.ts"),
				nO = r("./react/pages/security/web-assets/resources/endpoints/constants.ts"),
				nT = r("./react/pages/abuse-form/constants.ts"),
				nA = r("./react/pages/cloudforce-one/ThreatEvents/constants.tsx"),
				nI = r("./react/app/components/Switchers/sparrowConstants.ts"),
				nC = r("./react/pages/cloudforce-one/IncidentServices/resources/tracking.ts"),
				nS = r("./react/pages/speed/observatory-tracking.tsx"),
				nN = r("./react/common/components/Studio/tracking.ts");
			let nR = function(n, e) {
					for (var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), t = 2; t < r; t++) o[t - 2] = arguments[t];
					return g.eg.union([g.eg.literal(n), g.eg.literal(e), ...o.map(n => g.eg.literal(n))])
				}("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin domain registration flow", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel silence delete", "cancel onboarding flow", "cancel proxy warning continue later", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click ddos feedback form", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click Hide Support AI Page", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "show load balancing pre-activation video", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", ...Object.values(nk.j), "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click upload worker assets", "click deploy drag and drop worker", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm proxy warning go back", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "copy table cell", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Click on DNS Firewall feedback link", "Click on DNS Firewall add Cluster", "Hover on DNS Firewall feedback toast", "Click create DNS firewall cluster", "Click edit DNS firewall cluster", "Click on DNS Firewall edit Cluster button", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete silence", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable notification", "disable page shield", "disable payload logging", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", ...nC.dI, ...nC.qG, "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "enable notification", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "global nav shortcut clicked", "global nav shortcut pinned", "global nav shortcut unpinned", "global nav survey clicked", "global nav switch", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "manage_robots.txt learn more clicked", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "one-tap prompt shown", "one-tap prompt clicked", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open create silence page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open edit silences page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "print security report", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove zone switcher account filter", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "route to custom error rules", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "select payload logging", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit new support ai feedback", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use content signals learn more clicked", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web vitals", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click support ai issue solved feedback", "click support ai raise ticket", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "video show", "video play", "video pause", "video end", "video q1", "video q2", "video q3", "zone switcher filter by starred zones", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", "redirect to account home", nS.n.ACCEPT_RECOMMENDATION, nS.n.ARCHIVE_RECOMMENDATION, nS.n.CLICK_LEARN_MORE_RECOMMENDATION, nS.n.OPEN_RECOMMENDATION, nS.n.UNARCHIVE_RECOMMENDATION, nS.n.VIEW_RECOMMENDATION, O.hA.SPARROW_PROJECTS_TABLE_CLICK, O.hA.SPARROW_EMPTY_STATE_CTA_CLICK, O.hA.SPARROW_PRODUCT_CARD_CLICK, O.hA.SPARROW_VIEW_ALL_PROJECTS_CLICK, O.hA.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, O.hA.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, O.hA.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, O.hA.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, O.hA.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, O.hA.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, ...Object.values(nE.eH), "clicked sidebar Discord link", "clicked sidebar Community Forum link", nw.FF.clickedDownloadAnalytics, nw.FF.clickedPrintAnalytics, nw.FF.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", nw.FF.addWCITriggerToExistingWorker, nw.FF.updateWCITrigger, nw.FF.deleteWCITrigger, nw.FF.addWCITriggerToNewWorker, nw.FF.createWCIBuildForNewWorker, nw.FF.completedWCIBuildForNewWorker, nw.FF.changedDefaultConfigurations, nw.FF.clickElement, ...Object.values(nN.o), q.FF.toggledPagesSmartPlacement, q.FF.downloadDemoProject, nw.FF.clickCreateWorkerFromRepoNextStep, nw.FF.clickCreateWorkerFromRepoPreviousStep, nw.FF.clickCreateNewSCMConnection, nw.FF.redirectFromSCMOAuth, nw.FF.clickSubmitError, nw.FF.selectTemplate, nw.FF.clickedListTemplates, nw.FF.clickedImportRepository, nw.FF.clickedClonePublicRepositoryFromUrl, nw.FF.templateStubWorkerCreated, nw.FF.templateStubWorkerCreationFailed, nw.FF.templateRepositoryCreated, nw.FF.templateRepositoryCreationFailed, nw.FF.copyTemplateC3Command, nw.FF.templateDeployClick, nw.FF.reauthenticateGithubModalShown, nw.FF.updateGithubPermissionsClicked, nw.FF.D2W_importRepository, nw.FF.D2W_stubWorkerCreated, nw.FF.D2W_stubWorkerCreationFailed, nw.FF.D2W_repositoryCreated, nw.FF.D2W_repositoryCreationFailed, nw.FF.D2W_resourcesProvisioned, nw.FF.D2W_resourceProvisioningFailed, nw.FF.D2W_githubAPIRateLimitReached, nw.FF.createResource, nw.FF.deleteResource, nw.FF.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", nr.rM.INITIAL_FETCH_SCORES, nr.rM.FETCH_CONFIGURATION, nr.rM.INITIAL_FETCH_TIME_SERIES, nr.rM.INITIAL_FETCH_ATTRIBUTES, nr.rM.UPDATE_SETTINGS, nr.rM.DELETE_RULE, nr.rM.UPDATE_RULE, nr.rM.FETCH_RULES, nr.rM.CONFIGURE_BOT_MANAGEMENT, nr.rM.WAF_RULES_REDIRECT, nx.lx, nx.sP, nx.DT, nA.qm.ANALYZE_WITH_CLOUDY_BUTTON_CLICKED, W.q.TOGGLE_TCP_PROTECTION, W.q.GET_TCP_PROTECTION_PREFIXES, W.q.CREATE_TCP_PROTECTION_PREFIXES, W.q.CREATE_TCP_PROTECTION_PREFIX, W.q.UPDATE_TCP_PROTECTION_PREFIX, W.q.DELETE_TCP_PROTECTION_PREFIX, W.q.DELETE_TCP_PROTECTION_PREFIXES, W.q.GET_TCP_PROTECTION_ALLOWLIST, W.q.CREATE_TCP_PROTECTION_ALLOWLIST, W.q.UPDATE_TCP_PROTECTION_ALLOWLIST, W.q.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, W.q.DELETE_TCP_PROTECTION_ALLOWLIST, W.q.GET_SYN_PROTECTION_RULES, W.q.GET_SYN_PROTECTION_RULE, W.q.CREATE_SYN_PROTECTION_RULE, W.q.UPDATE_SYN_PROTECTION_RULE, W.q.DELETE_SYN_PROTECTION_RULE, W.q.GET_TCP_FLOW_PROTECTION_RULES, W.q.GET_TCP_FLOW_PROTECTION_RULE, W.q.CREATE_TCP_FLOW_PROTECTION_RULE, W.q.UPDATE_TCP_FLOW_PROTECTION_RULE, W.q.DELETE_TCP_FLOW_PROTECTION_RULE, W.q.GET_SYN_PROTECTION_FILTERS, W.q.GET_SYN_PROTECTION_FILTER, W.q.CREATE_SYN_PROTECTION_FILTER, W.q.UPDATE_SYN_PROTECTION_FILTER, W.q.DELETE_SYN_PROTECTION_FILTER, W.q.GET_TCP_FLOW_PROTECTION_FILTERS, W.q.GET_TCP_FLOW_PROTECTION_FILTER, W.q.CREATE_TCP_FLOW_PROTECTION_FILTER, W.q.UPDATE_TCP_FLOW_PROTECTION_FILTER, W.q.DELETE_TCP_FLOW_PROTECTION_FILTER, W.q.GET_DNS_PROTECTION_RULES, W.q.GET_DNS_PROTECTION_RULE, W.q.CREATE_DNS_PROTECTION_RULE, W.q.UPDATE_DNS_PROTECTION_RULE, W.q.DELETE_DNS_PROTECTION_RULE, nt.mS.MANAGE_PAGE_SHIELD_POLICY, nt.mS.CONFIGURE_PAGE_SHIELD, nt.mS.VIEW_DETECTED_CONNECTIONS, nt.mS.VIEW_DETECTED_SCRIPTS, nt.mS.VIEW_PAGE_SHIELD_POLICIES, nt.mS.VIEW_PAGE_SHIELD_SETTINGS, nt.mS.OPEN_MUTABLE_VERSION_TOOLTIP, nt.mS.SHOW_MUTABLE_VERSION_TOOLTIP, F.K.CREATE_LIST, F.K.DELETE_LIST, F.K.ADD_LIST_ITEM, F.K.DELETE_LIST_ITEM, K.rM.PURCHASE_WORKERS_PAID, K.rM.LIST_CONFIGS, K.rM.SEARCH_CONFIGS, K.rM.CREATE_HYPERDRIVE_CONFIG, K.rM.VIEW_CONFIG_DETAILS, K.rM.UPDATE_CACHING_SETTINGS, K.rM.UPDATE_ORIGIN_CONN_LIM_SETTINGS, K.rM.DELETE_HYPERDRIVE_CONFIG, K.rM.CLICK_HYPERDRIVE_DOCUMENTATION, K.rM.CLICK_GET_STARTED_GUIDE, K.rM.CLICK_CONNECTIVITY_GUIDES, K.rM.CLICK_QUICK_LINK, K.rM.CLICK_DISCORD, K.rM.CLICK_COMMUNITY, K.rM.CLICK_PLANETSCALE, K.rM.PLANETSCALE_COMPLETED, nu.r.CNAME, nu.r.IP_ADDRESS, nu.r.LB, nu.r.UPDATE_CNAME, nu.r.UPDATE_IP_ADDRESS, nu.r.UPDATE_LB, nu.r.DISABLE, L.r.TIERED_CACHE, L.r.CACHE_PURGE, L.r.CACHE_ANALYTICS, ...(0, nh.mP)(), ...(0, C.jS)(), ...(0, nl.ub)(), ...(0, G.sQ)(), ...(0, nb.Ef)(), ...(0, A.LK)(), nv.r.CREATE, nv.r.EVENTS, nv.r.ANALYTICS, nv.r.UPDATE, nv.r.GENERATE_PREVIEW, $.VG.INITIATE_URL_SCAN, $.VG.LOAD_SCAN_INFO, $.VG.GEOLOCATION_CHANGED, $.FT.LOAD_THREAT_EVENTS, $.FT.THREAT_EVENT_MORE_DETAILS_CLICK, $.FT.THREAT_EVENTS_FILTERS, $.pr.EXPAND_INSIGHT_ROW, $.pr.ONE_CLICK_RESOLVE_BUTTON, $.pr.FOLLOW_RESOLVE_URL, $.pr.MANAGE_INSIGHT, $.pr.CLICK_SCAN_NOW, $.pr.CLICK_EXPORT_INSIGHTS, $.pr.BULK_ARCHIVE, $.pr.CLICK_DETAILS_BUTTON, ne.xz[ne.cu.ENDPOINT_MANAGEMENT].listOfEndpoints, ne.xz[ne.cu.ENDPOINT_MANAGEMENT].detailedMetrics, ne.xz[ne.cu.ENDPOINT_MANAGEMENT].createEndpoint, ne.xz[ne.cu.ENDPOINT_MANAGEMENT].deleteEndpoint, ne.xz[ne.cu.ENDPOINT_MANAGEMENT].deployRouting, ne.xz[ne.cu.ENDPOINT_MANAGEMENT].deleteRouting, ne.xz[ne.cu.API_DISCOVERY].viewDiscoveredEndpoints, ne.xz[ne.cu.API_DISCOVERY].saveDiscoveredEndpoint, ne.xz[ne.cu.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, ne.xz[ne.cu.SCHEMA_VALIDATION].viewSchemasList, ne.xz[ne.cu.SCHEMA_VALIDATION].uploadSchema, ne.xz[ne.cu.SCHEMA_VALIDATION].viewSchemaAdoption, ne.xz[ne.cu.SCHEMA_VALIDATION].downloadSchema, ne.xz[ne.cu.SCHEMA_VALIDATION].deleteSchema, ne.xz[ne.cu.SCHEMA_VALIDATION].addLearnedSchemaByHostname, ne.xz[ne.cu.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, ne.xz[ne.cu.SEQUENCE_ANALYTICS].viewSequencesPage, ne.xz[ne.cu.JWT_VALIDATION].viewJWTRules, ne.xz[ne.cu.JWT_VALIDATION].addJWTRule, ne.xz[ne.cu.JWT_VALIDATION].editJWTRule, ne.xz[ne.cu.JWT_VALIDATION].deleteJWTRule, ne.xz[ne.cu.JWT_VALIDATION].reprioritizeJWTRule, ne.xz[ne.cu.JWT_VALIDATION].viewJWTConfigs, ne.xz[ne.cu.JWT_VALIDATION].addJWTConfig, ne.xz[ne.cu.JWT_VALIDATION].editJWTConfig, ne.xz[ne.cu.JWT_VALIDATION].deleteJWTConfig, ne.xz[ne.cu.SETTINGS].redirectToFirewallRulesTemplate, ne.xz[ne.cu.SETTINGS].redirectToPages, ne.xz[ne.cu.SETTINGS].listSessionIdentifiers, ne.xz[ne.cu.SETTINGS].listRequestsContainingSessionIdentifiers, ne.xz[ne.cu.SETTINGS].addOrRemoveSessionIdentifiers, ne.xz[ne.cu.SETTINGS].redirectToCustomRules, ne.xz[ne.cu.SETTINGS].listAllFallthroughSchemas, ne.xz[ne.cu.SEQUENCE_RULES].listSequenceRules, ne.xz[ne.cu.SEQUENCE_RULES].deleteSequenceRule, ne.xz[ne.cu.SEQUENCE_RULES].reorderSequenceRule, ne.xz[ne.cu.SEQUENCE_RULES].createSequenceRule, ne.xz[ne.cu.SEQUENCE_RULES].editSequenceRule, M.E.TOGGLE_V2, M.E.FILTER, M.E.FILTER_COUNTS, M.E.FEEDBACK, M.E.API_LATENCY, M.E.CONTAINER_V2_RENDERED, M.E.CONTAINER_RENDERED, j.B.HEALTH_JOB_SELECTED, j.B.HEALTH_METRIC_SELECTED, j.B.HEALTH_TIME_RANGE_SELECTED, j.B.HEALTH_TIMEZONE_CHANGED, j.B.HEALTH_SECTION_CHANGED, j.B.VIEW_HEALTH_BUTTON_CLICKED, j.B.VIEW_HEALTH_MENU_CLICKED, j.B.JOBS_SEARCHED, j.B.GRAPHQL_EXPLORER_OPENED, nm.M.ANALYTICS, nm.M.CREATE_AND_DEPLOY, nm.M.CREATE_MONITOR_LINK, nm.M.CREATE_MONITOR, nm.M.CREATE_POOL_LINK, nm.M.CREATE_POOL, nm.M.EDIT_MONITOR, nm.M.EDIT_POOL, nm.M.LOAD_BALANCING_TABLE, nm.M.POOL_TABLE, nm.M.EDIT_MONITOR_LINK, nm.M.EDIT_POOL_LINK, ...ng.Jq, "click load balancing video", P.d.SECONDARY_DNS_NOTIFICATION_CREATE, P.d.SECONDARY_DNS_NOTIFICATION_UPDATE, P.d.SECONDARY_DNS_NOTIFICATION_DELETE, D.Y6.ZONE_TRANSFER_SUCCESS, D.Y6.DNS_RECORD_CREATE, D.Y6.DNS_RECORD_UPDATE, D.Y6.DNS_RECORD_DELETE, U.r.PEER_DNS_CREATE, U.r.PEER_DNS_UPDATE, U.r.PEER_DNS_DELETE, U.r.ZONE_TRANSFER_ENABLE, U.r.ZONE_TRANSFER_DISABLE, np.Y.ARGO_ENABLEMENT, np.Y.ARGO_GEO_ANALYTICS_FETCH, np.Y.ARGO_GLOBAL_ANALYTICS_FETCH, H.Rr.VIEW_BUCKETS_LIST, H.Rr.CREATE_BUCKET, H.Rr.VALIDATE_BUCKET, H.Rr.DELETE_BUCKET, H.Rr.VIEW_CAPTURES_LIST, H.Rr.CREATE_SIMPLE_CAPTURE, H.Rr.CREATE_FULL_CAPTURE, H.Rr.VIEW_FULL_CAPTURE, H.Rr.DOWNLOAD_SIMPLE_CAPTURE, B.Wz.VIEW_RULES, B.Wz.CREATE_RULE, B.Wz.UPDATE_RULE, B.Wz.DELETE_RULE, B.Wz.VIEW_CONFIGURATION, B.Wz.CREATE_CONFIGURATION, B.Wz.UPDATE_CONFIGURATION, B.Wz.DELETE_CONFIGURATION, V.Rb.VIEW_ALERTS, V.Rb.VIEW_ALERTS_HISTORY, V.Rb.MAGIC_OVERVIEW_ANALYTICS, V.k_.CREATE_SITE, V.k_.CREATE_TUNNEL, V.k_.CREATE_STATIC_ROUTE, nn.aU.CLICK_ADAPTIVE_SAMPLING, nn.aU.CLICK_TO_LOG_EXPLORER_BANNER, nn.aU.CLICK_TO_LOG_EXPLORER_DESCRIPTION, nn.aU.CLICK_SWITCH_TO_RAW_LOGS, nn.aU.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", nI.D.SPARROW_ZONE_OVERFLOW_MENU_CLICK_NAME, nI.D.SPARROW_ZONE_OVERFLOW_ACTION_CLICK_NAME, nI.D.SPARROW_SWITCHER_MENU_CLICK_NAME, nI.D.SPARROW_SWITCHER_MENU_OPEN, nI.D.SPARROW_GO_TO_ALL_ACCOUNTS_CLICK_NAME, nI.D.SPARROW_GO_TO_ALL_DOMAINS_CLICK_NAME, z.CA.ACTION_CENTER_DOMAIN_MOVE_DECISION, z.CA.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, z.CA.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, z.CA.ACTION_CENTER_NAVIGATE, z.CA.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, z.CA.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, z.CA.DOMAIN_DELETE_CLOSE_WARNING_MODAL, z.CA.DOMAIN_DELETE_COMPLETED, z.CA.DOMAIN_DELETE_CONFIRM_DELETE, z.CA.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, z.CA.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, z.CA.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, z.CA.DOMAIN_DELETE_INIT, z.CA.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, z.CA.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, z.CA.DOMAIN_MOVE_CANCEL, z.CA.DOMAIN_MOVE_CANCEL_ERROR, z.CA.DOMAIN_MOVE_CANCEL_SUCCESS, z.CA.DOMAIN_MOVE_CLOSE_FLOW, z.CA.DOMAIN_MOVE_INITIATE_ERROR, z.CA.DOMAIN_MOVE_INITIATE_SUCCESS, z.CA.DOMAIN_MOVE_OPEN_DOCS, z.CA.DOMAIN_MOVE_PROGRESS_FLOW, z.CA.DOMAIN_MOVE_START_FLOW, z.CA.DOMAIN_MOVE_SUBMIT, z.CA.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR, z.CA.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS, z.CA.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, z.CA.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, z.CA.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, z.CA.REGISTER_DOMAIN_CHECKOUT_ERROR, z.CA.REGISTER_DOMAIN_CHECKOUT_PURCHASE, z.CA.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, z.CA.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, z.CA.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, z.CA.REGISTER_DOMAIN_CHECKOUT_SUCCESS_CTA, z.CA.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, z.CA.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, z.CA.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, z.CA.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, z.CA.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, z.CA.REGISTER_DOMAIN_SEARCH_SUBMIT, z.CA.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, z.CA.RENEW_DOMAIN_TOGGLE_SECTION, z.CA.RENEW_DOMAIN_SELECT_YEARS, z.CA.RENEW_DOMAIN_CLICK_RENEW, z.CA.RENEW_DOMAIN_CLOSE_BILLING_MODAL, z.CA.RENEW_DOMAIN_PURCHASE_CLICK, z.CA.RENEW_DOMAIN_COMPLETED, z.CA.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, z.CA.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, z.CA.RESTORE_DOMAIN_COMPLETED, z.CA.RESTORE_DOMAIN_FAILURE, z.CA.RESTORE_DOMAIN_INIT, z.CA.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, z.CA.TRANSFER_DOMAIN_BILLING_COUNTRY_SELECT, z.CA.TRANSFER_DOMAIN_CHANGE_STEP, z.CA.TRANSFER_DOMAIN_COMPLETE_FAILURE, z.CA.TRANSFER_DOMAIN_ENTER_AUTH_CODE, z.CA.TRANSFER_DOMAIN_FAILURE_DETAILS, z.CA.TRANSFER_DOMAIN_INITIATE_ATTEMPT, z.CA.TRANSFER_DOMAIN_NAVIGATE_PREVIOUS_STEP, z.CA.TRANSFER_DOMAIN_ONBOARD_DOMAIN, z.CA.TRANSFER_DOMAIN_PARTIAL_FAILURE, z.CA.TRANSFER_DOMAIN_PREMIUM_PRICE_CONFIRM, z.CA.TRANSFER_DOMAIN_PREMIUM_PRICE_REJECT, z.CA.TRANSFER_DOMAIN_PURCHASE_COMPLETED, z.CA.TRANSFER_DOMAIN_REMOVE_DOMAIN, z.CA.TRANSFER_DOMAIN_SEARCH, z.CA.TRANSFER_DOMAIN_SELECT_DOMAIN, z.CA.TRANSFER_DOMAIN_SELECT_PAYMENT_METHOD, z.CA.TRANSFER_DOMAIN_START_OVER, z.CA.TRANSFER_DOMAIN_SUCCESS_CTA_ADD_DOMAINS, z.CA.TRANSFER_DOMAIN_SUCCESS_CTA_DEPLOY_APP, z.CA.TRANSFER_DOMAIN_SUCCESS_CTA_POST_X, z.CA.TRANSFER_DOMAIN_TOGGLE_ALL, z.CA.TRANSFER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, z.CA.TRANSFER_DOMAIN_VERIFY_ADDRESS, z.CA.TRANSFER_DOMAIN_VIEW_EMPTY_STATE, z.CA.TRANSFER_DOMAIN_VIEW_SUPPORTED_TLDS, z.CA.TRANSFER_DOMAIN_VIEW_UNSUPPORTED_DOMAINS, z.CA.TRANSFER_DOMAIN_WHOIS_ACKNOWLEDGEMENT, J.uE.CREATE_SECRET, J.uE.DELETE_SECRET, J.uE.BIND_SECRET, J.uE.DUPLICATE_SECRET, J.uE.EDIT_SECRET, Z.rM.CLICK_GET_STARTED_GUIDE, Z.rM.CLICK_PIPELINE_DOCUMENTATION, Z.rM.CLICK_QUICK_LINK, Z.rM.CREATE_PIPELINE, Z.rM.DELETE_PIPELINE, Z.rM.LIST_PIPELINES, Z.rM.VIEW_PIPELINE, T.g.EXISTING_DOMAIN, T.g.NEW_DOMAIN, T.g.WAF_RULESET, T.g.WORKERS, T.g.PAGES, T.g.R2, T.g.ACCOUNT_MEMBERS, Y.c.TEMPLATE_PRODUCT_SELECTED, Y.c.TEMPLATE_SELECTED, Y.c.TEMPLATE_SAVE_DRAFT, Y.c.TEMPLATE_CANCEL, Y.c.TEMPLATE_DEPLOY, nd.G.CLICK_GO_BACK_SHARE_MODAL, nd.G.CLICK_MENU_ITEM_SHARE, nd.G.CLICK_ON_CANCEL_SHARE_MODAL, nd.G.CLICK_ON_CLOSE_SHARE_MODAL, nd.G.CLICK_ON_CONFIGURE_SHARE_BUTTON, nd.G.CLICK_ON_DELETE_RULESET, nd.G.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, nd.G.CLICK_ON_EDIT_SHARE_PERMISSION, nd.G.CLICK_ON_GO_TO_SOURCE_ACCOUNT, nd.G.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, nd.G.CLICK_ON_SHARE_TABLE_ROW, na.eQ.CLICK_GEOGRAPHICAL_TEMPLATE, na.eQ.CLICK_IP_TEMPLATE, na.eQ.CLICK_USER_AGENT_TEMPLATE, na.eQ.CLICK_ZONE_LOCKDOWN_TEMPLATE, nl.LR.CREATED, nl.LR.ENABLED, nl.LR.DISABLED, nl.LR.DELETED, nl.LR.UPDATED, nl.LR.DOWNLOADED, R.tJ.REQUEST_REVIEW, R.tJ.COPY_URL, I.T.FIELD, I.T.OPERATOR, ns.im.SHOW_LCC_MIGRATION_BANNER, ns.im.CLICK_LCC_DOCUMENTATION, ns.im.CLICK_LCC_UPGRADE_GUIDE, ns.im.SHOW_LCC_MIGRATION_WARNING, ni.mY.CLICK_DISMISS_INELIGIBILITY, ni.mY.CLICK_NEXT_STEP, ni.mY.CLICK_OPT_IN, ni.mY.CLICK_OPT_IN_BUTTON, ni.mY.CLICK_OPT_OUT_BUTTON, ni.mY.DISPLAY_MODAL, ni.mY.DISPLAY_OPT_OUT_MODAL, ni.mY.DISPLAY_TOOLTIP_NOT_AVAILABLE, ni.mY.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, ni.mY.DEFAULT_ALL_INIT, ni.mY.DEFAULT_ALL_OPT_OUT, ni.mY.DEFAULT_ALL_REENABLES, ni.mY.NEW_DASHBOARD_EXPERIENCE, ni.mY.NEW_DASHBOARD_VIDEO, ni.mY.DEFAULT_ALL_MODAL, ni.mY.DEFAULT_ALL_CONFIRM, ni.mY.DISPLAY_STEPS_BY_MODAL, ni.mY.REDIRECT_SETTINGS_BANNER, no.ag.LOAD_INSIGHTS, no.ag.OPEN_SIDE_MODAL_INSIGHT, no.ag.CLOSE_SIDE_MODAL_INSIGHT, no.ag.CLICK_ACTION_INSIGHT, no.ag.LOAD_INSIGHTS_LIST, nO.QO.OPEN_SIDE_MODAL, nO.QO.REDIRECT_TO_OPERATION_DETAIL, nO.QO.REDIRECT_TO_OPERATIONS_LIST, nf.Qt.CHANGE_SETTING, nf.Qt.LOAD_SETTINGS, nf.Qt.OPEN_SIDE_MODAL_SETTING, nf.Qt.CLOSE_SIDE_MODAL_SETTING, nf.Qt.FILTER_SETTING, X.Z3.LANDING_PAGE_GET_STARTED, X.Z3.GET_STARTED_CONTINUE, X.Z3.EXPLORE_OTHER_PACKAGES, X.Z3.ONBOARDING_CONTINUE, X.Z3.ONBOARDING_HEALTH_CHECK, X.Z3.ONBOARDING_MANAGE_SETTINGS, X.Z3.ONBOARDING_OBSERVATORY, X.Z3.SETTINGS_TOGGLE, X.Z3.SMART_TIERED_CACHE_VIEW_DETAILS, X.Z3.CACHE_RESERVE_VIEW_DETAILS, X.Z3.CACHE_RESERVE_DELETE_DATA, X.Z3.UPGRADE_BUTTON_CLICK, X.Z3.UPGRADE_MODAL_OPEN, X.Z3.UPGRADE_MODAL_CLOSE, X.Z3.UPGRADE_MODAL_CONTINUE, X.Z3.DOCUMENTATION_CLICK, X.Z3.HEALTH_CHECKS_MANAGE, X.Z3.ARGO_DISABLE_CANCEL, X.Z3.SMART_TIERED_CACHE_DISABLE_CONFIRM, X.Z3.SMART_TIERED_CACHE_DISABLE_CANCEL, X.Z3.TIERED_CACHE_ANALYTICS_LINK, X.Z3.CACHE_RESERVE_ANALYTICS_LINK, X.Z3.HEALTH_CHECKS_LINK, X.Z3.SMART_TIERED_CACHE_TOGGLE, X.Z3.REGIONAL_TIERED_CACHE_TOGGLE, X.Z3.CACHE_RESERVE_TOGGLE, X.Z3.ARGO_SMART_ROUTING_TOGGLE, nn.aU.ADD_SUSPICIOUS_ACTIVITY_FILTER, nn.aU.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, nn.aU.OPEN_SIDE_DRAWER, nn.aU.CLOSE_SIDE_DRAWER, nc.VS, nc.x_, Q.FF[Q.Jj].clickLoginFromMobileApp2fa, Q.FF[Q.Jj].clickTryOther2FAMethodOrBackupCode, Q.FF[Q.Jj].clickTryRecovery, Q.FF[Q.pR].clickRegenerateBackupCodes, N.SK.APPEAL_MITIGATION_SUBMIT, N.SK.APPEAL_MITIGATION_SUCCESS, N.SK.APPEAL_MITIGATION_FAILURE, N.SK.CLICK_ABUSE_REPORT_ID, N.SK.CLICK_ABUSE_REPORT_MITIGATIONS_LINK, nT.F.SUBMIT_ABUSE_REPORT_FORM, nT.F.SUBMIT_ABUSE_REPORT_FORM_SUCCESS, nT.F.SUBMIT_ABUSE_REPORT_FORM_FAILURE, nT.F.OPEN_ABUSE_REPORT_FORM_SIDEMODAL, nT.F.CLOSE_ABUSE_REPORT_FORM_SIDEMODAL, nT.F.CHANGE_ABUSE_REPORT_FORM_TYPE, ny.rM.CLICK_GIVE_FEEDBACK, ny.rM.CLICK_NAVIGATION_TAB, ny.rM.CLICK_SEARCH_BY_ZONE_NAME, ny.rM.CLICK_SEARCH_BY_VIEW_NAME, ny.rM.CLICK_CREATE_AN_INTERNAL_ZONE, ny.rM.CLICK_CREATE_A_VIEW, ny.rM.CLICK_SAVE_ZONE, ny.rM.CLICK_SAVE_VIEW, ny.rM.CLICK_SEARCH_BY_RECORD_NAME, ny.rM.CLICK_ZONE_NAME, ny.rM.CLICK_ADD_A_RECORD, ny.rM.CLICK_ADD_RECORD_SAVE, ny.rM.CLICK_RECORD_EDIT, ny.rM.CLICK_EDIT_RECORD_SAVE, ny.rM.CLICK_IMPORT_RECORDS, ny.rM.CLICK_MANAGE_LINKED_VIEWS, ny.rM.CLICK_SAVE_MANAGE_LINKED_VIEWS, ny.rM.CLICK_VIEW_RECORD, n_.hw),
				nL = g.eg.exactStrict(g.eg.object({
					".agency": g.eg.any.optional,
					".auction": g.eg.any.optional,
					".bet": g.eg.any.optional,
					".center": g.eg.any.optional,
					".church": g.eg.any.optional,
					".com": g.eg.any.optional,
					".community": g.eg.any.optional,
					".energy": g.eg.any.optional,
					".fitness": g.eg.any.optional,
					".guru": g.eg.any.optional,
					".io": g.eg.any.optional,
					".info": g.eg.any.optional,
					".immo": g.eg.any.optional,
					".lgbt": g.eg.any.optional,
					".life": g.eg.any.optional,
					".live": g.eg.any.optional,
					".media": g.eg.any.optional,
					".mobi": g.eg.any.optional,
					".net": g.eg.any.optional,
					".network": g.eg.any.optional,
					".ninja": g.eg.any.optional,
					".online": g.eg.any.optional,
					".org": g.eg.any.optional,
					".photography": g.eg.any.optional,
					".plus": g.eg.any.optional,
					".press": g.eg.any.optional,
					".pro": g.eg.any.optional,
					".services": g.eg.any.optional,
					".store": g.eg.any.optional,
					".tech": g.eg.any.optional,
					".wiki": g.eg.any.optional,
					".wtf": g.eg.any.optional,
					".xyz": g.eg.any.optional,
					_ga: g.eg.any.optional,
					_lpchecked: g.eg.any.optional,
					a: g.eg.any.optional,
					absolute: g.eg.any.optional,
					access: g.eg.any.optional,
					access_users_allowed: g.eg.any.optional,
					account: g.eg.any.optional,
					accountId: g.eg.any.optional,
					"accountResolver/SELECT_ACCOUNT": g.eg.any.optional,
					"accountResolver/NO_ACTION": g.eg.any.optional,
					accountResolverTotalCpuTime: g.eg.any.optional,
					accountResolverTotalTime: g.eg.any.optional,
					accountResolverTotalUserActionsTime: g.eg.any.optional,
					action: g.eg.any.optional,
					addedRecords: g.eg.any.optional,
					addon: g.eg.any.optional,
					address: g.eg.any.optional,
					apiUrl: g.eg.any.optional,
					argo_accelerated_gigabytes: g.eg.any.optional,
					"aria-current": g.eg.any.optional,
					"aria-controls": g.eg.any.optional,
					"aria-label": g.eg.any.optional,
					"aria-selected": g.eg.any.optional,
					authHeaders: g.eg.any.optional,
					autocomplete: g.eg.any.optional,
					autoRenew: g.eg.any.optional,
					autoSetup: g.eg.any.optional,
					b: g.eg.any.optional,
					buckets: g.eg.string.optional,
					banner: g.eg.any.optional,
					bot: g.eg.any.optional,
					bot_management: g.eg.any.optional,
					brokenExpression: g.eg.any.optional,
					bundle: g.eg.any.optional,
					c: g.eg.any.optional,
					cacheKey: g.eg.any.optional,
					cache_by_device_type: g.eg.any.optional,
					cache_rules: g.eg.any.optional,
					campaignId: g.eg.any.optional,
					campaignID: g.eg.any.optional,
					cancelled: g.eg.any.optional,
					category: g.eg.any.optional,
					cd43: g.eg.any.optional,
					cd45: g.eg.any.optional,
					cd47: g.eg.any.optional,
					certificate_pack_id: g.eg.any.optional,
					certificate_pack_type: g.eg.any.optional,
					cf: g.eg.any.optional,
					cfPlan: g.eg.any.optional,
					chartName: g.eg.any.optional,
					charts: g.eg.any.optional,
					childrenCount: g.eg.any.optional,
					childrenSelected: g.eg.any.optional,
					class: g.eg.any.optional,
					code0: g.eg.any.optional,
					columnName: g.eg.string.optional,
					columns: g.eg.array(g.eg.string).optional,
					completedTasks: g.eg.any.optional,
					component: g.eg.any.optional,
					component_values: g.eg.any.optional,
					configuration_rules: g.eg.any.optional,
					content_signal_policy: g.eg.any.optional,
					contentfulId: g.eg.any.optional,
					country: g.eg.any.optional,
					currentCA: g.eg.any.optional,
					currentPerPage: g.eg.any.optional,
					currentPage: g.eg.any.optional,
					d: g.eg.any.optional,
					dashVersion: g.eg.any.optional,
					"data-children-count": g.eg.any.optional,
					"data-tracking-name": g.eg.any.optional,
					"data-tracking-id": g.eg.any.optional,
					"data-testid": g.eg.any.optional,
					dataset: g.eg.any.optional,
					databaseId: g.eg.any.optional,
					dateCreated: g.eg.any.optional,
					dateModified: g.eg.any.optional,
					ddos: g.eg.any.optional,
					description: g.eg.string.optional,
					dedicated_certificates: g.eg.any.optional,
					dedicated_certificates_custom: g.eg.any.optional,
					deepLink: g.eg.any.optional,
					default: g.eg.any.optional,
					destinationPage: g.eg.string.optional,
					detailType: g.eg.any.optional,
					deviceViewport: g.eg.any.optional,
					direction: g.eg.any.optional,
					directive: g.eg.any.optional,
					"DNS import method": g.eg.any.optional,
					domainName: g.eg.any.optional,
					download: g.eg.any.optional,
					duration: g.eg.any.optional,
					dynamic_redirects: g.eg.any.optional,
					e: g.eg.any.optional,
					email_count: g.eg.any.optional,
					end: g.eg.any.optional,
					endDate: g.eg.any.optional,
					enabled: g.eg.any.optional,
					entitled: g.eg.any.optional,
					environment: g.eg.string.optional,
					error: g.eg.any.optional,
					errorCode: g.eg.any.optional,
					errorMessage: g.eg.any.optional,
					errors: g.eg.any.optional,
					expand: g.eg.any.optional,
					experiment: g.eg.any.optional,
					expression: g.eg.any.optional,
					expressionType: g.eg.any.optional,
					features: g.eg.array(g.eg.string).optional,
					failureReasons: g.eg.any.optional,
					featureChange: g.eg.any.optional,
					featureImproved: g.eg.any.optional,
					featureName: g.eg.any.optional,
					featureOriginal: g.eg.any.optional,
					field: g.eg.any.optional,
					fieldName: g.eg.any.optional,
					filterId: g.eg.any.optional,
					firewall_rules: g.eg.any.optional,
					flow: g.eg.any.optional,
					"font-size": g.eg.any.optional,
					form: g.eg.any.optional,
					formView: g.eg.any.optional,
					frequency: g.eg.any.optional,
					from: g.eg.any.optional,
					fromCategorySearch: g.eg.any.optional,
					fromStreamRatePlanId: g.eg.any.optional,
					functions: g.eg.any.optional,
					toStreamRatePlanId: g.eg.any.optional,
					gatesDelayed: g.eg.any.optional,
					geo: g.eg.any.optional,
					globalNav: g.eg.any.optional,
					guid: g.eg.any.optional,
					hasData: g.eg.any.optional,
					hasRecords: g.eg.any.optional,
					hasSidebarNav: g.eg.boolean.optional,
					"hasTest2019-06-03": g.eg.any.optional,
					hasPayloadLogging: g.eg.any.optional,
					hCaptchaDisplayed: g.eg.any.optional,
					hasEnabledSecurityNavigation: g.eg.any.optional,
					hasEnabledDefaultUnifiedSecurity: g.eg.any.optional,
					hasEnabledSidebarNavGroupings: g.eg.boolean.optional,
					hasZoneNewSecurityNavigation: g.eg.boolean.optional,
					isZoneEligibleForUnification: g.eg.any.optional,
					header_modification: g.eg.any.optional,
					hostname_count: g.eg.any.optional,
					hostParam: g.eg.any.optional,
					href: g.eg.any.optional,
					id: g.eg.any.optional,
					index: g.eg.any.optional,
					indexLevel: g.eg.any.optional,
					initialRecommendation: g.eg.any.optional,
					ip_access_rules: g.eg.any.optional,
					items: g.eg.number.optional,
					isAuthenticated: g.eg.any.optional,
					isPaused: g.eg.any.optional,
					isCloudflare: g.eg.any.optional,
					isE2e: g.eg.boolean.optional,
					isExpanding: g.eg.boolean.optional,
					isEntAccount: g.eg.boolean.optional,
					isEnterprise: g.eg.boolean.optional,
					isInactive: g.eg.boolean.optional,
					isOpen: g.eg.boolean.optional,
					isScript: g.eg.any.optional,
					isSPA: g.eg.any.optional,
					isStreaming: g.eg.any.optional,
					isParent: g.eg.any.optional,
					isViewAll: g.eg.any.optional,
					isEditingSubscription: g.eg.any.optional,
					is_replacing: g.eg.any.optional,
					isRaw: g.eg.any.optional,
					jurisdiction: g.eg.any.optional,
					key: g.eg.any.optional,
					label: g.eg.any.optional,
					lastTimestamp: g.eg.any.optional,
					last_scan_days_ago: g.eg.any.optional,
					level: g.eg.any.optional,
					limit: g.eg.any.optional,
					link: g.eg.any.optional,
					listType: g.eg.any.optional,
					load_balancing: g.eg.any.optional,
					load_balancing_base: g.eg.any.optional,
					load_balancing_dns_queries: g.eg.any.optional,
					load_balancing_geo_routing: g.eg.any.optional,
					load_balancing_monitor_interval: g.eg.any.optional,
					load_balancing_origins: g.eg.any.optional,
					load_balancing_probe_regions: g.eg.any.optional,
					legacyDeepLink: g.eg.any.optional,
					locale: g.eg.any.optional,
					location: g.eg.any.optional,
					locationHint: g.eg.any.optional,
					maliciousCode: g.eg.any.optional,
					maliciousDomain: g.eg.any.optional,
					maliciousURL: g.eg.any.optional,
					managed_rules: g.eg.any.optional,
					marketingPlan: g.eg.any.optional,
					matchesCount: g.eg.any.optional,
					matchingRequestPercentage: g.eg.any.optional,
					matchingRequests: g.eg.any.optional,
					message0: g.eg.any.optional,
					method: g.eg.any.optional,
					millis: g.eg.any.optional,
					mode: g.eg.any.optional,
					modal_type: g.eg.any.optional,
					monitor: g.eg.string.optional,
					monitorType: g.eg.any.optional,
					mrktCheckboxDisplayed: g.eg.any.optional,
					name: g.eg.any.optional,
					newTotalCount: g.eg.any.optional,
					novalidate: g.eg.any.optional,
					numAccounts: g.eg.any.optional,
					numRecords: g.eg.any.optional,
					numRecordsToApply: g.eg.any.optional,
					numRecordsToPrompt: g.eg.any.optional,
					numRecordsToRemove: g.eg.any.optional,
					numRows: g.eg.any.optional,
					origin_rules: g.eg.any.optional,
					nextPlan: g.eg.any.optional,
					newValue: g.eg.any.optional,
					numFilters: g.eg.any.optional,
					numRawLogs: g.eg.any.optional,
					numSampledLogs: g.eg.any.optional,
					moreRawLogs: g.eg.any.optional,
					old_expires_on: g.eg.any.optional,
					old_mode: g.eg.any.optional,
					oldFrequency: g.eg.string.optional,
					oldPlan: g.eg.any.optional,
					oldPrice: g.eg.number.optional,
					oldRatePlan: g.eg.string.optional,
					oldStep: g.eg.any.optional,
					oldSubscriptionValues: g.eg.record(g.eg.string, g.eg.any).optional,
					oldValue: g.eg.any.optional,
					onboarding: g.eg.any.optional,
					operator: g.eg.any.optional,
					order: g.eg.string.optional,
					order_by: g.eg.any.optional,
					page: g.eg.any.optional,
					page_rules: g.eg.any.optional,
					pageName: g.eg.any.optional,
					pageNumber: g.eg.any.optional,
					params: g.eg.any.optional,
					paused: g.eg.any.optional,
					phase: g.eg.any.optional,
					origin_url: g.eg.string.optional,
					payment_country: g.eg.string.optional,
					payment_gateway: g.eg.string.optional,
					percentages: g.eg.array(g.eg.number).optional,
					permission: g.eg.string.optional,
					personalisation: g.eg.boolean.optional,
					personalized: g.eg.boolean.optional,
					per_page: g.eg.any.optional,
					plan: g.eg.any.optional,
					plans: g.eg.any.optional,
					planVolume: g.eg.any.optional,
					pinned: g.eg.boolean.optional,
					position: g.eg.number.optional,
					prefs: g.eg.any.optional,
					previousPage: g.eg.any.optional,
					previousTotalCount: g.eg.any.optional,
					previousValue: g.eg.any.optional,
					price: g.eg.any.optional,
					priority: g.eg.any.optional,
					product: g.eg.any.optional,
					prioritize_malicious: g.eg.any.optional,
					products: g.eg.any.optional,
					productName: g.eg.any.optional,
					productCategory: g.eg.any.optional,
					provider: g.eg.any.optional,
					proxied: g.eg.boolean.optional,
					question: g.eg.any.optional,
					quota: g.eg.any.optional,
					ratePlan: g.eg.any.optional,
					rayId: g.eg.any.optional,
					readTasks: g.eg.any.optional,
					reason: g.eg.any.optional,
					recommendation: g.eg.any.optional,
					recommendationType: g.eg.any.optional,
					recordAdditionMethod: g.eg.any.optional,
					recordTypes: g.eg.any.optional,
					region: g.eg.any.optional,
					registrar: g.eg.any.optional,
					resourceName: g.eg.string.optional,
					rulesCount: g.eg.any.optional,
					rum_status: g.eg.any.optional,
					gclid: g.eg.any.optional,
					gclsrc: g.eg.any.optional,
					dclid: g.eg.any.optional,
					utm_source: g.eg.any.optional,
					utm_medium: g.eg.any.optional,
					utm_campaign: g.eg.any.optional,
					utm_term: g.eg.any.optional,
					utm_content: g.eg.any.optional,
					rangeMax: g.eg.number.optional,
					rangeMin: g.eg.number.optional,
					rate_limiting: g.eg.any.optional,
					ratePlanId: g.eg.any.optional,
					ratePlanName: g.eg.any.optional,
					referring_domain: g.eg.any.optional,
					referrer: g.eg.any.optional,
					registrationPeriod: g.eg.any.optional,
					registrationStatus: g.eg.any.optional,
					rel: g.eg.any.optional,
					relativeTimeRange: g.eg.any.optional,
					resultRank: g.eg.number.optional,
					"rocket_loader-recommendation": g.eg.any.optional,
					role: g.eg.any.optional,
					roles: g.eg.any.optional,
					ruleDescription: g.eg.any.optional,
					ruleId: g.eg.any.optional,
					scanFailed: g.eg.any.optional,
					scope: g.eg.any.optional,
					searchAction: g.eg.any.optional,
					searchDescription: g.eg.any.optional,
					searchParam: g.eg.any.optional,
					searchStatus: g.eg.any.optional,
					searchTerm: g.eg.any.optional,
					searchValue: g.eg.any.optional,
					section: g.eg.any.optional,
					seenOnParam: g.eg.any.optional,
					selected: g.eg.any.optional,
					series: g.eg.any.optional,
					service: g.eg.any.optional,
					setting: g.eg.any.optional,
					setup: g.eg.any.optional,
					shortcutsExpanded: g.eg.any.optional,
					showErrors: g.eg.any.optional,
					sortDirection: g.eg.string.optional,
					sortBy: g.eg.string.optional,
					source: g.eg.any.optional,
					startDate: g.eg.any.optional,
					state: g.eg.any.optional,
					status: g.eg.any.optional,
					step: g.eg.any.optional,
					storageClass: g.eg.any.optional,
					string: g.eg.any.optional,
					stream_storage_thousand_minutes: g.eg.any.optional,
					stream_viewed_thousand_minutes: g.eg.any.optional,
					subcategory: g.eg.any.optional,
					subscribedToMarketing: g.eg.any.optional,
					subscriptionValues: g.eg.record(g.eg.string, g.eg.any).optional,
					subcomponent: g.eg.string.optional,
					success: g.eg.any.optional,
					supportLevel: g.eg.any.optional,
					survey: g.eg.any.optional,
					surveyType: g.eg.any.optional,
					switchTo: g.eg.any.optional,
					tab: g.eg.any.optional,
					tableName: g.eg.any.optional,
					tag: g.eg.any.optional,
					target: g.eg.any.optional,
					targetPage: g.eg.any.optional,
					targetCA: g.eg.any.optional,
					target_pack_type: g.eg.any.optional,
					task: g.eg.any.optional,
					testType: g.eg.any.optional,
					text: g.eg.any.optional,
					timeRange: g.eg.any.optional,
					timeStamp: g.eg.any.optional,
					title: g.eg.any.optional,
					tld: g.eg.string.optional,
					to: g.eg.any.optional,
					toolCall: g.eg.any.optional,
					touched: g.eg.any.optional,
					total: g.eg.number.optional,
					transform_rules: g.eg.any.optional,
					trialPlan: g.eg.any.optional,
					trialStart: g.eg.any.optional,
					topic: g.eg.any.optional,
					totalCount: g.eg.any.optional,
					totalCpuTime: g.eg.any.optional,
					totalLevels: g.eg.any.optional,
					totalRequests: g.eg.any.optional,
					totalTime: g.eg.any.optional,
					totalUserActionsTime: g.eg.any.optional,
					type: g.eg.any.optional,
					upgrade: g.eg.boolean.optional,
					uploading: g.eg.any.optional,
					uploadFailed: g.eg.any.optional,
					url_rewrites: g.eg.any.optional,
					userGroupId: g.eg.string.optional,
					hosts: g.eg.string.optional,
					uiType: g.eg.string.optional,
					userId: g.eg.any.optional,
					userType: g.eg.any.optional,
					utm_referrer: g.eg.any.optional,
					version: g.eg.any.optional,
					validation_method: g.eg.any.optional,
					validity_days: g.eg.any.optional,
					value: g.eg.any.optional,
					visibility: g.eg.any.optional,
					vitals: g.eg.any.optional,
					via: g.eg.any.optional,
					waf: g.eg.any.optional,
					wizardName: g.eg.any.optional,
					wordpress: g.eg.any.optional,
					workers: g.eg.any.optional,
					worker_kv_deletes: g.eg.any.optional,
					worker_kv_lists: g.eg.any.optional,
					worker_kv_reads: g.eg.any.optional,
					worker_kv_storage: g.eg.any.optional,
					worker_kv_writes: g.eg.any.optional,
					worker_requests: g.eg.any.optional,
					wp_plugin: g.eg.any.optional,
					write_strategy: g.eg.any.optional,
					zone: g.eg.any.optional,
					zoneId: g.eg.any.optional,
					zoneName: g.eg.any.optional,
					"zoneResolver/NO_ACTION": g.eg.any.optional,
					"zoneResolver/SELECT_ZONE": g.eg.any.optional,
					zoneResolverTotalCpuTime: g.eg.any.optional,
					zoneResolverTotalTime: g.eg.any.optional,
					zoneResolverTotalUserActionsTime: g.eg.any.optional,
					zones: g.eg.any.optional,
					zoneStatus: g.eg.any.optional,
					zoneType: g.eg.any.optional,
					audit: g.eg.any.optional,
					score: g.eg.any.optional,
					potentialSavings: g.eg.any.optional,
					feature: g.eg.any.optional,
					days: g.eg.any.optional,
					minutes: g.eg.any.optional,
					customRange: g.eg.any.optional,
					metric: g.eg.any.optional,
					url: g.eg.any.optional,
					previousPlan: g.eg.any.optional,
					isStarring: g.eg.any.optional,
					isStarred: g.eg.any.optional,
					totalStarredZones: g.eg.number.optional,
					totalZones: g.eg.number.optional,
					widgetName: g.eg.any.optional,
					statusType: g.eg.any.optional,
					outcome: g.eg.any.optional,
					marketingOptInChecked: g.eg.boolean.optional,
					prompt: g.eg.any.optional,
					positive: g.eg.any.optional,
					endpoint: g.eg.any.optional,
					isArgoEnabled: g.eg.any.optional,
					insightId: g.eg.any.optional,
					insightClass: g.eg.string.optional,
					insightType: g.eg.string.optional,
					severity: g.eg.string.optional,
					decision: g.eg.any.optional,
					domain: g.eg.any.optional,
					exact: g.eg.any.optional,
					fees: g.eg.any.optional,
					new_selection: g.eg.any.optional,
					numDomainsInCart: g.eg.any.optional,
					payment_method: g.eg.string.optional,
					payment_option: g.eg.string.optional,
					premium: g.eg.any.optional,
					previous_selection: g.eg.any.optional,
					pricing_local: g.eg.any.optional,
					selection: g.eg.any.optional,
					uniqueTopLevelDomains: g.eg.any.optional,
					years: g.eg.number.optional,
					template_name: g.eg.any.optional,
					productResource: g.eg.any.optional,
					snippets: g.eg.any.optional,
					ddos_l7: g.eg.any.optional,
					http_request_transform: g.eg.any.optional,
					http_request_origin: g.eg.any.optional,
					http_request_cache_settings: g.eg.any.optional,
					http_config_settings: g.eg.any.optional,
					http_request_dynamic_redirect: g.eg.any.optional,
					http_request_sbfm: g.eg.any.optional,
					"transform-rules": g.eg.any.optional,
					http_request_snippets: g.eg.any.optional,
					cloud_connector: g.eg.any.optional,
					is_first_project: g.eg.any.optional,
					is_first_scm_connection: g.eg.any.optional,
					is_preview_trigger: g.eg.any.optional,
					scm_type: g.eg.any.optional,
					existing_connection_total: g.eg.any.optional,
					invalid_fields: g.eg.any.optional,
					is_retry: g.eg.any.optional,
					changed_fields: g.eg.any.optional,
					rulesetName: g.eg.string.optional,
					isECCRuleset: g.eg.boolean.optional,
					isLCCEnabled: g.eg.boolean.optional,
					isECCEnabled: g.eg.boolean.optional,
					tabName: g.eg.any.optional,
					repo_owner: g.eg.string.optional,
					repo_name: g.eg.string.optional,
					subdirectory: g.eg.string.optional,
					seed_repo: g.eg.string.optional,
					branch: g.eg.string.optional,
					queryMode: g.eg.any.optional,
					clickType: g.eg.string.optional,
					interactionType: g.eg.string.optional,
					mediaType: g.eg.string.optional
				})),
				nD = (n, e) => Object.entries(e).reduce((e, r) => {
					let [o, t] = r;
					return n.includes(o) || (e[o] = t), e
				}, {}),
				nP = n => (e, r, o) => {
					let [t, a, i] = ((n, e) => {
						let r, o, [t, a] = (n => {
							let e = nL.decode(n);
							if ((0, g.OC)(e)) {
								let r = e.left.map(n => {
									let {
										context: e
									} = n;
									return e.map(n => {
										let {
											key: e
										} = n;
										return e
									})
								}).reduce((n, e) => n.concat(e), []).filter(e => e in n);
								return [nD(r, n), r]
							}
							return [n, []]
						})(e);
						return (0, g.OC)(nR.decode(n)) && (r = new S.WI(n)), a && a.length > 0 && (o = new S.nK(n, a)), [t, r, o]
					})(r, o);
					if (a) throw a;
					return i && console.error(i), n(e, r, t)
				};
			var nM = r("./utils/zaraz.ts");
			let nj = {
					identify: !0
				},
				nU = n => (e, r, o) => (nj[r] || null === nM.fj || void 0 === nM.fj || nM.fj.track(r, o), n(e, r, o));
			var nF = r("./react/common/selectors/userSelectors.ts"),
				nz = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				nG = ((o = {}).NEW_DOMAIN_REGISTRATION = "new domain registration", o.DOMAIN_TRANSFER = "domain transfer", o);

			function nW(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						o = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
						return Object.getOwnPropertyDescriptor(r, n).enumerable
					}))), o.forEach(function(e) {
						var o;
						o = r[e], e in n ? Object.defineProperty(n, e, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[e] = o
					})
				}
				return n
			}

			function nK(n, e) {
				return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : (function(n, e) {
					var r = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						r.push.apply(r, o)
					}
					return r
				})(Object(e)).forEach(function(r) {
					Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r))
				}), n
			}
			let nB = new Set(["cf_argo", "smart_shield_argo_zone_basic", "smart_shield_argo_ent", "load_balancing_basic_plus", "log_explorer_basic", "cache_reserve_paid", "r2_paid", "workers_paid"]),
				nV = {
					DOMAIN_REGISTRATION: {
						id: "domain_registration",
						name: "Cloudflare Registrar"
					},
					DOMAIN_TRANSFER: {
						id: "domain_transfer",
						name: "Cloudflare Registrar"
					}
				},
				nH = new Set(["free", "pro", "business"]),
				nY = n => {
					let {
						price: e,
						ratePlanId: r,
						ratePlanName: o,
						frequency: t,
						isNewSubscription: a,
						category: i
					} = n;
					return {
						event: "purchase",
						new_subscription: a,
						ecommerce: {
							transaction_id: (0, nz.A)(),
							currency: "USD",
							page_timestamp: new Date().toISOString(),
							value: e
						},
						items: [nW({
							item_id: r,
							item_name: o || r,
							frequency: t,
							price: e
						}, i && {
							category: i
						})]
					}
				};

			function nq(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						o = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
						return Object.getOwnPropertyDescriptor(r, n).enumerable
					}))), o.forEach(function(e) {
						var o;
						o = r[e], e in n ? Object.defineProperty(n, e, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[e] = o
					})
				}
				return n
			}

			function nZ(n, e) {
				return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : (function(n, e) {
					var r = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						r.push.apply(r, o)
					}
					return r
				})(Object(e)).forEach(function(r) {
					Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r))
				}), n
			}
			let nQ = n => {
					let {
						linkClickType: e,
						page: r
					} = n, {
						origin: o
					} = window.location, t = "".concat(o).concat(r);
					return {
						event: "click_key_interaction",
						link_click_type: e,
						page_path: r,
						page_url: t
					}
				},
				nJ = "pageview",
				nX = "create zone",
				n$ = "create user",
				n0 = "Plan Purchase Success",
				n1 = "Product Purchase Success",
				n5 = "Plan Update Success",
				n2 = "Product Update Success",
				n4 = nw.FF.completedWCIBuildForNewWorker,
				{
					REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED: n3,
					TRANSFER_DOMAIN_PURCHASE_COMPLETED: n6
				} = z.CA,
				n8 = {
					[nJ]: !0,
					[nX]: !0,
					[n$]: !0,
					[n0]: !0,
					[n1]: !0,
					[n5]: !0,
					[n2]: !0,
					[n_.hw]: !0,
					[n3]: !0,
					[n6]: !0,
					[n4]: !0
				},
				n9 = n => (e, r, o) => {
					if (n8[r]) {
						var t;
						let n = ((n, e) => {
							switch (n) {
								case nJ:
									return (n => {
										let e, {
												deviceViewport: r,
												page: o,
												previousPage: t,
												pageName: a,
												utm_campaign: i,
												_ga: s,
												"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": d
											} = n,
											{
												origin: u
											} = window.location,
											p = (0, nF.wz)((0, c.KA)().getState());
										return {
											event: void 0 !== t && o !== t ? "virtual_page_view" : "page_load",
											device_type: r,
											hostname: u,
											language: navigator.language,
											locale: (0, l.j)((0, c.KA)().getState()),
											page_location: o ? "".concat(u).concat(o) : "[redacted]",
											page_path: o ? "".concat(o) : "[redacted]",
											page_referrer: t ? "".concat(u, "/").concat(t) : "[redacted]",
											page_timestamp: new Date().toISOString(),
											page_title: a || "[redacted]",
											page_url: o ? "".concat(u).concat(o) : "[redacted]",
											query: i ? "?utm_campaign=".concat(i) : "[redacted]",
											user_properties: {
												ga_client_id: null != s ? s : void 0,
												ga_client_id_s: s ? "s".concat(s) : void 0,
												user_id: ea() ? null == p ? void 0 : p.id : void 0,
												ecid: d && (e = d.match(/\|MCMID\|([0-9]+)\|/)) ? e[1] : void 0
											}
										}
									})(e);
								case nX:
									return {
										event: "zone_create", page_timestamp: new Date().toISOString(), currency: "USD", value: 0
									};
								case n$:
									return (n => {
										let {
											status: e
										} = n;
										return "success" === e ? {
											event: "new_user_create",
											page_timestamp: new Date().toISOString(),
											currency: "USD",
											value: 0
										} : void 0
									})(e);
								case n0:
									return (n => {
										let {
											price: e,
											frequency: r,
											plan: o,
											ratePlanId: t,
											ratePlanName: a
										} = n;
										return nH.has(o) ? nK(nW({}, nY({
											price: e,
											ratePlanId: t,
											ratePlanName: a,
											frequency: r,
											isNewSubscription: !0
										})), {
											label: o
										}) : void 0
									})(e);
								case n1:
									return (n => {
										let {
											price: e,
											frequency: r,
											ratePlan: o,
											ratePlanName: t
										} = n;
										return nB.has(o) ? nK(nW({}, nY({
											price: e,
											ratePlanId: o,
											ratePlanName: t,
											frequency: r,
											isNewSubscription: !0
										})), {
											label: o
										}) : void 0
									})(e);
								case n5:
									return (n => {
										let {
											price: e,
											frequency: r,
											plan: o,
											ratePlanId: t,
											ratePlanName: a,
											label: i
										} = n;
										return nH.has(o) ? nK(nW({}, nY({
											price: e,
											frequency: r,
											ratePlanId: t,
											ratePlanName: a,
											isNewSubscription: !1
										})), {
											label: i || o
										}) : void 0
									})(e);
								case n2:
									return (n => {
										let {
											price: e,
											frequency: r,
											ratePlan: o,
											ratePlanName: t
										} = n;
										return nB.has(o) ? nK(nW({}, nY({
											price: e,
											frequency: r,
											ratePlanId: o,
											ratePlanName: t,
											isNewSubscription: !1
										})), {
											label: o
										}) : void 0
									})(e);
								case n3:
									return (n => {
										let {
											fees: e
										} = n, {
											DOMAIN_REGISTRATION: r
										} = nV;
										return nK(nW({}, nY({
											price: null == e ? void 0 : e.registration_fee,
											ratePlanId: r.id,
											ratePlanName: r.name,
											frequency: "yearly",
											isNewSubscription: !0,
											category: nG.NEW_DOMAIN_REGISTRATION
										})), {
											label: r.id
										})
									})(e);
								case n6:
									return (n => {
										let {
											fees: e
										} = n, {
											DOMAIN_TRANSFER: r
										} = nV;
										return nK(nW({}, nY({
											price: null == e ? void 0 : e.renewal_fee,
											ratePlanId: r.id,
											ratePlanName: r.name,
											frequency: "yearly",
											isNewSubscription: !0,
											category: nG.DOMAIN_TRANSFER
										})), {
											label: r.id
										})
									})(e);
								case n_.hw:
									return (n => {
										let {
											interactionType: e,
											clickType: r,
											id: o,
											text: t,
											href: a,
											page: i
										} = n;
										return nZ(nq({}, nQ({
											linkClickType: r,
											page: i
										})), {
											click_text: t,
											click_url: a,
											interaction_type: e,
											click_target_identifier: o
										})
									})(e);
								case n4:
									return (n => {
										let {
											is_retry: e,
											outcome: r,
											page: o
										} = n;
										return nZ(nq({}, nQ({
											linkClickType: n_.e4.COMPLETED_WCI_BUILD,
											page: o
										})), {
											workers_is_retry: e,
											workers_success: r
										})
									})(e);
								default:
									return
							}
						})(r, o);
						window.dataLayer = window.dataLayer || [], n && (null == (t = window.dataLayer) || t.push(n))
					}
					return n(e, r, o)
				};
			var n7 = r("./react/utils/cookiePreferences.ts");

			function en(n) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {},
						o = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
						return Object.getOwnPropertyDescriptor(r, n).enumerable
					}))), o.forEach(function(e) {
						var o;
						o = r[e], e in n ? Object.defineProperty(n, e, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[e] = o
					})
				}
				return n
			}
			let ee = n => {
					a().init(en({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: eo() && !(0, i.gl)() && ea(),
						middlewares: [E, nP, _, nU, n9]
					}, n))
				},
				er = () => {
					var n, e;
					a().identify((n = en({}, (0, t.getAttribution)()), e = e = {
						locale: (0, l.j)((0, c.KA)().getState()),
						isCloudflare: !!(0, s.k2)(),
						isE2e: !1
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : (function(n, e) {
						var r = Object.keys(n);
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(n);
							r.push.apply(r, o)
						}
						return r
					})(Object(e)).forEach(function(r) {
						Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r))
					}), n))
				},
				eo = () => !0,
				et = () => {
					(0, n7.Yj)("sparrow_id")
				},
				ea = () => (0, n7.xE)()
		},
		"./utils/initStyles.ts": function(n, e, r) {
			"use strict";
			var o = r("../../../node_modules/@cloudflare/style-const/es/index.js"),
				t = r("./react/app/providers/storeContainer.js");
			let a = "cfBaseStyles",
				i = document.head || document.getElementsByTagName("head")[0],
				c = () => {
					let n = (0, o.ud)(),
						e = "\n    @layer cf {\n      * {\n        box-sizing: border-box;\n      }\n\n      ::placeholder {\n        color: ".concat(o.Ee.colors.gray["5"], "\n      }\n\n      wf-html, html, body, button {\n        font-size: 16px;\n      }\n\n      wf-html,\n      html {\n        -webkit-font-smoothing: antialiased;\n        -webkit-text-size-adjust: none;\n      }\n\n      wf-body,\n      body {\n        line-height: 1.5;\n        color: ").concat(o.Ee.colors.gray["1"], ";\n        background-color: ").concat(o.Ee.colors.background, ";\n      }\n\n      text {\n        fill: ").concat(o.Ee.colors.gray["1"], ";\n      }\n\n      wf-html, wf-body, body, html, ul, ol, li, p, h1, h2, h3, h4, h5, h6 {\n        margin: 0;\n        padding: 0;\n      }\n\n      h1, h2, h3, small {\n        line-height: 1.25;\n      }\n\n      h1 {\n        font-size: 32px;\n        font-weight: 400;\n      }\n\n      h2 {\n        font-size: 24px;\n      }\n\n      h3 {\n        font-size: 20px;\n      }\n\n      h4, h5, h6 {\n        font-size: 16px;\n      }\n\n      h2, h3, h4, h5, h6 {\n        font-weight: 600;\n      }\n\n      h3 + p, h4 + p, h5 + p, h6 + p {\n        margin-top: 0.5em;\n      }\n\n      small {\n        font-size: 12px;\n      }\n\n      button {\n        border: none;\n      }\n\n      label {\n        display: block;\n        font-size: 0.875rem;\n        margin-bottom: 0.35938em;\n        min-height: 1.22em;\n      }\n\n      fieldset {\n        border: none;\n      }\n\n      pre {\n        border-radius: 0.5rem;\n        color: ").concat(o.Ee.colors.gray["1"], ";\n        display: block;\n        font-size: 14px;\n        margin: 2rem 0;\n        overflow: auto;\n        padding: 0.5rem 0.75rem;\n        width: 100%;\n      }\n\n      code, pre {\n        background-color: ").concat(n ? o.Ee.colors.gray["8"] : o.Ee.colors.gray["9"], ";\n        border: 1px solid ").concat(n ? o.Ee.colors.gray["7"] : o.Ee.colors.gray["8"], ";\n      }\n\n      section {\n        margin-bottom: 2.5rem;\n        margin-top: 2.5rem;\n      }\n\n      thead {\n        background-color: ").concat(n ? o.Ee.colors.gray["8"] : o.Ee.colors.gray["9"], "\n      }\n\n      th {\n        font-weight: 600;\n      }\n\n      a {\n        color: ").concat(n ? o.Ee.colors.blue["3"] : o.Ee.colors.blue["4"], ";\n        text-decoration: underline;\n        text-underline-offset: 4px;\n        transition: color 150ms ease;\n      }\n\n      a:hover {\n        color: ").concat(n ? o.Ee.colors.orange["3"] : o.Ee.colors.blue["2"], ";\n        cursor: pointer;\n      }\n\n      a:active {\n        color: ").concat(n ? o.Ee.colors.orange["3"] : o.Ee.colors.blue["2"], ";\n        outline: none;\n      }\n\n      a:focus {\n        color: ").concat(o.Ee.colors.blue["5"], ";\n      }\n\n      a svg, a:active svg, a:hover svg {\n        fill: currentColor\n      }\n\n      ol, ul, dl {\n        list-style-position: outside;\n        margin-left: 3em;\n      }\n\n      ul {\n        list-style-type: disc;\n      }\n\n      dd {\n        margin: 0;\n      }\n\n      dt {\n        font-weight: 600;\n        font-size: ").concat(o.Ee.fontSizes["3"], "px\n      }\n\n      p+p, p+ul, p+ol, p+dl, ul+p, ul+h2, ul+h3, ul+h4, ul+h5, ul+h6 {\n        margin-top: 1.5em;\n      }\n\n      hr {\n        border: 0;\n        border-top: 1px solid #d5d7d8;\n        display: block;\n        height: 0;\n        margin: 2rem 0;\n        width: 100%;\n      }\n\n      img, object {\n        height: auto;\n        max-width: 100%;\n      }\n\n      table {\n        border-spacing: 0;\n      }\n\n      legend {\n        padding-inline-start: 0;\n      }\n\n      fieldset {\n        margin-inline-start: 0;\n      }\n\n      input:-webkit-autofill,\n      input:-webkit-autofill:hover,\n      input:-webkit-autofill:focus {\n        background-color: ").concat(o.Ee.colors.background, ";\n        color:  ").concat(o.Ee.colors.gray["8"], "\n      }\n\n      :root {\n        --cf-white: ").concat(o.Ee.colors.white, ";\n        --cf-black: ").concat(o.Ee.colors.black, ";\n        ").concat((n => {
							let e = [];
							for (let r in n.colors) {
								let o = n.colors[r];
								if (Array.isArray(o) && "categorical" !== r)
									for (let n = 0; n < o.length; ++n) e.push("--cf-".concat(r, "-").concat(n, ":").concat(o[n], ";"))
							}
							return e.join("\n")
						})(o.Ee), "\n      }\n\n      .ReactVirtualized__List {\n        outline: none\n      }\n      .grim-scroll-sortable-helper {\n        pointer-events: auto !important;\n        z-index: 2000 !important;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;\n        background-color: white !important;\n      }\n      .grim-scroll-sortable-helper * {\n        cursor: grabbing !important;\n      }\n    }\n  "),
						r = document.getElementById(a);
					r ? r.innerText = "" : ((r = document.createElement("style")).id = a, i.appendChild(r)), r.appendChild(document.createTextNode(e)), (0, t.KA)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, o.wN)(c), e.A = c
		},
		"./utils/sentry/lastSentEventId.ts": function(n, e, r) {
			"use strict";
			let o;
			r.d(e, {
				g: function() {
					return t
				}
			});
			let t = (o = "", {
				setEventId: n => n && "string" == typeof n ? o = n : o,
				getEventId: () => o
			})
		},
		"./utils/zaraz.ts": function(n, e, r) {
			"use strict";
			let o;
			r.d(e, {
				Le: function() {
					return a
				},
				Uf: function() {
					return c
				},
				XH: function() {
					return l
				},
				fj: function() {
					return o
				}
			});
			let t = {
					track: (n, e) => {
						var r, o, t;
						null == (r = window.zaraz) || r.track(n, (o = function(n) {
							for (var e = 1; e < arguments.length; e++) {
								var r = null != arguments[e] ? arguments[e] : {},
									o = Object.keys(r);
								"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
									return Object.getOwnPropertyDescriptor(r, n).enumerable
								}))), o.forEach(function(e) {
									var o;
									o = r[e], e in n ? Object.defineProperty(n, e, {
										value: o,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : n[e] = o
								})
							}
							return n
						}({}, e), t = t = {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : (function(n, e) {
							var r = Object.keys(n);
							if (Object.getOwnPropertySymbols) {
								var o = Object.getOwnPropertySymbols(n);
								r.push.apply(r, o)
							}
							return r
						})(Object(t)).forEach(function(n) {
							Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(t, n))
						}), o))
					},
					set: (n, e) => {
						var r;
						return null == (r = window.zaraz) ? void 0 : r.set(n, e)
					}
				},
				a = () => {
					window.zaraz, o = t
				},
				i = ["email", "first_name", "last_name"],
				c = n => {
					i.forEach(e => {
						null == o || o.set(e, n[e])
					})
				},
				l = () => {
					c({})
				}
		},
		"../../common/util/previews/preview-helpers.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				A: function() {
					return i
				},
				Nt: function() {
					return t
				}
			});
			var o = r("../../../node_modules/zod/lib/index.mjs");
			let t = "CF_dash_version",
				a = o.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g);
			o.z.enum(["live", "previews", "canary"]);
			let i = n => {
				let [e, ...r] = a.parse(n).split("-");
				return {
					projectType: e,
					deploymentId: r.join("-")
				}
			}
		},
		"../../common/util/types/src/api/domain.ts": function(n, e, r) {
			"use strict";
			r.d(e, {
				$n: function() {
					return m
				},
				AC: function() {
					return x
				},
				Ch: function() {
					return k
				},
				EJ: function() {
					return A
				},
				GT: function() {
					return b
				},
				K_: function() {
					return s
				},
				Mz: function() {
					return O
				},
				NE: function() {
					return T
				},
				Ns: function() {
					return _
				},
				Qp: function() {
					return E
				},
				cP: function() {
					return g
				},
				eF: function() {
					return h
				},
				jA: function() {
					return I
				},
				me: function() {
					return v
				}
			});
			var o, t, a, i, c = r("../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			c.eg.union([c.eg.literal("registrationPending"), c.eg.literal("registrationPendingAuthorization"), c.eg.literal("registrationPendingZoneCreate"), c.eg.literal("registrationPendingRegister"), c.eg.literal("registrationPendingZoneActivate"), c.eg.literal("registrationPendingSettlement"), c.eg.literal("registrationFailed"), c.eg.literal("registrationFailedAuthorization"), c.eg.literal("registrationFailedQuote"), c.eg.literal("registrationFailedRegister"), c.eg.literal("registrationFailedZoneCreate"), c.eg.literal("registrationFailedZoneActivate"), c.eg.literal("registrationFailedSettlement"), c.eg.literal("registrationFailedDNSFatal"), c.eg.literal("registrationFailedDNSError"), c.eg.literal("registrationFailedDNSLandingCNameFatal"), c.eg.literal("registrationFailedDNSLandingCNameError"), c.eg.literal("restorationPending"), c.eg.literal("restorationPendingZoneCreate"), c.eg.literal("restorationPendingZoneActivate"), c.eg.literal("restorationFailedZoneCreate"), c.eg.literal("restorationFailedZoneActivate"), c.eg.literal("restorationSuccess"), c.eg.literal("restorationZoneCreateSuccess"), c.eg.literal("restorationZoneActivateSuccess"), c.eg.literal("restorationSuccessWithoutReport"), c.eg.literal("transferFOAPending"), c.eg.literal("transferPending"), c.eg.literal("transferRejected"), c.eg.literal("transferCancelled"), c.eg.literal("transferOutPending"), c.eg.literal("registrationActive"), c.eg.literal("expiredParked"), c.eg.literal("deletionInitiated"), c.eg.literal("deletionIrredeemable"), c.eg.literal("domainTerminated"), c.eg.literal("domainFrozen")]);
			let l = c.eg.object({
					eligible: c.eg.boolean,
					enabled: c.eg.boolean.optional
				}),
				s = c.eg.object({
					address: c.eg.string,
					address2: c.eg.string,
					city: c.eg.string,
					country: c.eg.string,
					email: c.eg.string,
					email_verified: c.eg.boolean.optional,
					fax: c.eg.string,
					first_name: c.eg.string,
					id: c.eg.string.optional,
					label: c.eg.union([c.eg.null, c.eg.string]).optional,
					last_name: c.eg.string,
					material_changes: c.eg.array(c.eg.string).optional,
					organization: c.eg.string,
					phone: c.eg.string,
					state: c.eg.string,
					zip: c.eg.string,
					extensions: c.eg.object({
						ca_legal_type: c.eg.string.optional
					}).optional
				}),
				d = c.eg.object({
					exists: c.eg.boolean,
					not_premium: c.eg.boolean,
					not_secure: c.eg.boolean,
					not_started: c.eg.boolean,
					not_waiting: c.eg.boolean,
					supported_tld: c.eg.boolean
				}),
				u = c.eg.object({
					registrant: s.optional,
					technical: s.optional,
					administrator: s.optional,
					billing: s.optional
				});
			c.eg.object({
				auto_renew: c.eg.boolean,
				privacy: c.eg.boolean,
				contacts: u.optional,
				years: c.eg.number
			});
			let p = c.eg.object({
				icann_fee: c.eg.number,
				redemption_fee: c.eg.number,
				registration_fee: c.eg.number,
				renewal_fee: c.eg.number,
				transfer_fee: c.eg.number
			});
			var g = ((o = {}).ONBOARDING_INITIATED = "Onboarding Initiated", o.ONBOARDED = "Onboarded", o.PENDING_REGISTRY_LOCK = "Pending Registry Lock", o.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", o.REGISTRY_UNLOCKED = "Registry Unlocked", o.LOCKED = "Locked", o.FAILED_TO_LOCK = "Failed To Lock", o.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", o.UNLOCKED = "Unlocked", o.OFFBOARDED = "Offboarded", o);
			let m = c.eg.object({
				administrator_contact_id: c.eg.union([c.eg.number, c.eg.null]).optional,
				auth_code: c.eg.string.optional,
				auto_renew: c.eg.boolean.optional,
				available: c.eg.boolean,
				billing_contact_id: c.eg.union([c.eg.number, c.eg.null]).optional,
				can_register: c.eg.boolean.optional,
				cloudflare_dns: c.eg.boolean.optional,
				cloudflare_registration: c.eg.boolean.optional,
				contacts: c.eg.any.optional,
				contacts_updated_at: c.eg.string.optional,
				cor_locked: c.eg.boolean.optional,
				cor_locked_until: c.eg.union([c.eg.string, c.eg.null]).optional,
				cor_responses_pending: c.eg.number.optional,
				created_at: c.eg.string.optional,
				created_registrar: c.eg.string.optional,
				current_registrar: c.eg.string.optional,
				domain_protection_services: c.eg.object({
					status: c.eg.enum(g).optional
				}).optional,
				dns: c.eg.array(c.eg.any).optional,
				ds_records: c.eg.array(c.eg.any).optional,
				email_verified: c.eg.boolean.optional,
				expires_at: c.eg.string.optional,
				fees: p.optional,
				landing: c.eg.union([l, c.eg.boolean]).optional,
				last_known_status: c.eg.union([c.eg.string, c.eg.null]).optional,
				locked: c.eg.boolean.optional,
				name: c.eg.string,
				name_servers: c.eg.array(c.eg.string).optional,
				material_changes: c.eg.array(c.eg.string).optional,
				partner_response: c.eg.union([c.eg.string, c.eg.null]).optional,
				payment_expires_at: c.eg.string.optional,
				pending_transfer: c.eg.boolean.optional,
				permissions: c.eg.array(c.eg.string).optional,
				previous_registrar: c.eg.union([c.eg.string, c.eg.null]).optional,
				privacy: c.eg.boolean.optional,
				registered_at: c.eg.union([c.eg.string, c.eg.null]).optional,
				registrant_contact_id: c.eg.union([c.eg.number, c.eg.null]).optional,
				registry_object_id: c.eg.union([c.eg.string, c.eg.null]).optional,
				registry_statuses: c.eg.string.optional,
				supported_tld: c.eg.boolean.optional,
				tags: c.eg.array(c.eg.string).optional,
				technical_contact_id: c.eg.union([c.eg.number, c.eg.null]).optional,
				transfer_conditions: d.optional,
				updated_at: c.eg.union([c.eg.string, c.eg.null]).optional,
				updated_registrar: c.eg.string.optional,
				using_created_registrar_nameservers: c.eg.boolean.optional,
				using_current_registrar_nameservers: c.eg.boolean.optional,
				using_previous_registrar_nameservers: c.eg.boolean.optional,
				using_updated_registrar_nameservers: c.eg.boolean.optional,
				whois: c.eg.unknown.optional
			});
			c.eg.object({
				available: c.eg.boolean
			}), c.eg.object({
				result: c.eg.array(m),
				result_info: c.eg.object({
					count: c.eg.number,
					page: c.eg.number,
					per_page: c.eg.number,
					total_count: c.eg.number
				}),
				errors: c.eg.array(c.eg.string),
				messages: c.eg.array(c.eg.string),
				success: c.eg.boolean
			});
			let v = c.eg.object({
					check_result: c.eg.union([c.eg.null, c.eg.object({
						name: c.eg.string,
						supported_tld: c.eg.boolean,
						premium: c.eg.boolean,
						available: c.eg.boolean,
						can_register: c.eg.boolean
					})]).optional,
					domains: c.eg.array(c.eg.object({
						name: c.eg.string,
						availability: c.eg.string,
						price: c.eg.number,
						icann_fee: c.eg.number,
						pricing: c.eg.object({
							currency: c.eg.string,
							registration_fee: c.eg.number,
							renewal_fee: c.eg.number
						}),
						pricing_local: c.eg.object({
							currency: c.eg.string,
							registration_fee: c.eg.number,
							renewal_fee: c.eg.number
						})
					}))
				}),
				h = c.eg.object({
					name: c.eg.string,
					can_register: c.eg.union([c.eg.boolean, c.eg.null]),
					supported_tld: c.eg.union([c.eg.boolean, c.eg.null]),
					premium: c.eg.union([c.eg.boolean, c.eg.null]),
					available: c.eg.union([c.eg.boolean, c.eg.null])
				});
			var b = ((t = {}).PENDING = "pending", t.VERIFIED = "verified", t.REJECTED = "rejected", t.PENDING_DELETE = "pending_delete", t.DELETED = "deleted", t);
			let w = c.eg.object({
					email: c.eg.string,
					status: c.eg.enum(b),
					first_name: c.eg.union([c.eg.null, c.eg.string]).optional,
					last_name: c.eg.union([c.eg.null, c.eg.string]).optional,
					phone_number: c.eg.union([c.eg.null, c.eg.string]).optional
				}),
				f = c.eg.object({
					designated_approvers: c.eg.array(w)
				});
			var k = ((a = {}).PENDING = "pending", a.PENDING_UPDATE = "pending_update", a.ENABLED = "enabled", a.DISABLED = "disabled", a);
			let y = c.eg.object({
					auto_relock_after: c.eg.number,
					number_of_designated_approvers: c.eg.number,
					status: c.eg.enum(k)
				}),
				x = c.eg.intersection([y, f]),
				_ = c.eg.object({
					status: c.eg.number,
					message: c.eg.string
				});
			var E = ((i = {}).UNLOCK_APPROVAL = "UnlockApprovalRequest", i.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", i.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", i.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", i);
			let O = c.eg.object({
					tlds: c.eg.array(c.eg.string)
				}),
				T = c.eg.object({
					message: c.eg.string
				}),
				A = c.eg.object({
					result: c.eg.object({
						entry: c.eg.object({
							address2: c.eg.string,
							address: c.eg.string,
							city: c.eg.string,
							country: c.eg.string,
							default: c.eg.boolean,
							email: c.eg.string,
							email_verified: c.eg.boolean,
							fax: c.eg.string,
							first_name: c.eg.string,
							id: c.eg.string,
							last_name: c.eg.string,
							organization: c.eg.string,
							phone: c.eg.string,
							state: c.eg.string,
							zip: c.eg.string
						})
					})
				}),
				I = c.eg.object({
					result: u
				})
		},
		"./node_modules/css-loader/index.js!./react/common/out.css": function(n, e, r) {
			(n.exports = r("./node_modules/css-loader/lib/css-base.js")(!1)).push([n.id, '/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */\n@layer properties;\n@layer cf, base, theme, components, utilities;\n@layer base {\n  :root {\n    color-scheme: light;\n    --kumo-surface: #fff;\n    --kumo-surface-foreground: #000;\n    --kumo-surface-secondary: var(--color-neutral-50);\n    --kumo-surface-active: var(--color-neutral-100);\n    --kumo-primary: #056dff;\n    --kumo-primary-foreground: var(--color-white);\n    --kumo-secondary: var(--color-white);\n    --kumo-secondary-foreground: var(--color-neutral-900);\n    --kumo-secondary-hover: var(--color-neutral-50);\n    --kumo-accent: var(--color-neutral-150);\n    --kumo-destructive: var(--color-red-600);\n    --kumo-destructive-foreground: var(--color-neutral-50);\n    --kumo-muted: var(--color-neutral-100);\n    --kumo-muted-foreground: var(--color-neutral-500);\n    --kumo-input: var(--color-neutral-50);\n    --kumo-border: var(--color-neutral-200);\n    --kumo-border-hover: var(--color-neutral-300);\n    --kumo-border-active: var(--color-neutral-400);\n    --kumo-text-error: var(--color-red-600);\n  }\n  html.dark-mode, :root.dark-mode, .dark-mode {\n    color-scheme: dark;\n  }\n  .dark-mode {\n    --kumo-surface: var(--color-black);\n    --kumo-surface-foreground: var(--color-neutral-50);\n    --kumo-surface-secondary: var(--kumo-surface);\n    --kumo-surface-active: var(--color-neutral-800);\n    --kumo-primary: #056dff;\n    --kumo-primary-foreground: var(--color-white);\n    --kumo-secondary: var(--color-neutral-900);\n    --kumo-secondary-foreground: var(--color-neutral-50);\n    --kumo-secondary-hover: var(--color-neutral-800);\n    --kumo-accent: var(--color-neutral-850);\n    --kumo-destructive: var(--color-red-600);\n    --kumo-destructive-foreground: var(--color-neutral-50);\n    --kumo-muted: var(--color-neutral-500);\n    --kumo-muted-foreground: var(--color-neutral-50);\n    --kumo-input: var(--color-neutral-900);\n    --kumo-border: var(--color-neutral-800);\n    --kumo-border-hover: var(--color-neutral-750);\n    --kumo-border-active: var(--color-neutral-600);\n    --kumo-text-error: var(--color-red-600);\n  }\n}\n:root, :host {\n  --color-surface: var(--kumo-surface);\n  --color-surface-secondary: var(--kumo-surface-secondary);\n  --color-surface-active: var(--kumo-surface-active);\n  --color-primary: var(--kumo-primary);\n  --color-secondary: var(--kumo-secondary);\n  --color-secondary-hover: var(--kumo-secondary-hover);\n  --color-accent: var(--kumo-accent);\n  --color-destructive: var(--kumo-destructive);\n  --color-muted: var(--kumo-muted);\n  --color-input: var(--kumo-input);\n  --color-active: var(--kumo-border-active);\n  --color-border-hover: var(--kumo-border-hover);\n  --color-color: var(--kumo-border);\n  --text-color-surface: var(--kumo-surface-foreground);\n  --text-color-primary: var(--color-white);\n  --text-color-secondary: var(--kumo-secondary-foreground);\n  --text-color-destructive: var(--kumo-destructive-foreground);\n  --text-color-muted: var(--kumo-muted-foreground);\n  --text-color-error: var(--kumo-text-error);\n  --color-neutral-25: oklch(0.99 0 0);\n  --color-neutral-50: oklch(0.985 0 0);\n  --color-neutral-150: oklch(0.96 0 0);\n  --color-neutral-250: oklch(0.9 0 0);\n  --color-neutral-750: oklch(0.31 0 0);\n  --color-neutral-850: oklch(0.23 0 0);\n  --color-kumo-surface: light-dark(\n    var(--color-white, #fff),\n    var(--color-black, #000)\n  );\n  --color-kumo-surface-secondary: light-dark(\n    var(--color-neutral-50, oklch(98.5% 0 0)),\n    #000\n  );\n  --color-kumo-active: light-dark(\n    var(--color-neutral-400, oklch(70.8% 0 0)),\n    var(--color-neutral-600, oklch(43.9% 0 0))\n  );\n  --color-kumo-secondary: light-dark(\n    var(--color-white, #fff),\n    var(--color-neutral-900, oklch(21% 0.006 285.885))\n  );\n  --color-kumo-subtle: light-dark(\n    var(--color-neutral-50, oklch(98.5% 0 0)),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n  --color-kumo-accent: light-dark(\n    var(--color-neutral-150, oklch(0.96 0 0)),\n    var(--color-neutral-850, oklch(0.23 0 0))\n  );\n  --color-kumo-surface-inverse: light-dark(\n    var(--color-neutral-900, oklch(20.5% 0 0)),\n    var(--color-neutral-100, oklch(97% 0 0))\n  );\n  --color-kumo-primary: light-dark(#056dff, #056dff);\n  --color-kumo-destructive: light-dark(\n    var(--color-red-600, oklch(57.7% 0.245 27.325)),\n    var(--color-red-600, oklch(57.7% 0.245 27.325))\n  );\n  --color-kumo-color: light-dark(\n    var(--color-neutral-200, oklch(92.2% 0 0)),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n  --color-kumo-info-surface: light-dark(\n    var(--color-blue-500, oklch(62.3% 0.214 259.815 / 0.2)),\n    var(--color-blue-500, oklch(62.3% 0.214 259.815 / 0.2))\n  );\n  --color-kumo-error-surface: light-dark(\n    var(--color-red-500, oklch(63.7% 0.237 25.331 / 0.2)),\n    var(--color-red-500, oklch(63.7% 0.237 25.331 / 0.2))\n  );\n  --color-kumo-alert-surface: light-dark(\n    var(--color-yellow-500, oklch(79.5% 0.184 86.047 / 0.2)),\n    var(--color-yellow-500, oklch(79.5% 0.184 86.047 / 0.2))\n  );\n  --color-kumo-info-selection: light-dark(\n    var(--color-blue-300, oklch(80.9% 0.105 251.813)),\n    var(--color-blue-900, oklch(37.9% 0.146 265.522))\n  );\n  --color-kumo-error-selection: light-dark(\n    var(--color-red-300, oklch(80.8% 0.114 19.571)),\n    var(--color-red-900, oklch(39.6% 0.141 25.723))\n  );\n  --color-kumo-alert-selection: light-dark(\n    var(--color-yellow-300, oklch(90.5% 0.182 98.111)),\n    var(--color-yellow-900, oklch(42.1% 0.095 57.708))\n  );\n  --color-kumo-border: light-dark(\n    oklch(14.5% 0 0 / 0.1),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n  --color-kumo-info-border: light-dark(\n    var(--color-blue-500, oklch(62.3% 0.214 259.815)),\n    var(--color-blue-700, oklch(48.8% 0.243 264.376))\n  );\n  --color-kumo-error-border: light-dark(\n    var(--color-red-500, oklch(63.7% 0.237 25.331)),\n    var(--color-red-700, oklch(50.5% 0.213 27.518))\n  );\n  --color-kumo-alert-border: light-dark(\n    var(--color-yellow-500, oklch(79.5% 0.184 86.047)),\n    var(--color-yellow-700, oklch(55.4% 0.135 66.442))\n  );\n  --text-color-kumo-surface: light-dark(\n    var(--color-black, #000),\n    var(--color-neutral-50, oklch(98.5% 0 0))\n  );\n  --text-color-kumo-secondary: light-dark(\n    var(--color-neutral-900, oklch(21% 0.006 285.885)),\n    var(--color-neutral-50, oklch(98.5% 0 0))\n  );\n  --text-color-kumo-surface-inverse: light-dark(\n    var(--color-white, #fff),\n    var(--color-neutral-900, oklch(20.5% 0 0))\n  );\n  --text-color-kumo-primary: light-dark(\n    var(--color-white, #fff),\n    var(--color-white, #fff)\n  );\n  --text-color-kumo-destructive: light-dark(\n    var(--color-neutral-50, oklch(98.5% 0 0)),\n    var(--color-neutral-50, oklch(98.5% 0 0))\n  );\n  --text-color-kumo-muted: light-dark(\n    var(--color-neutral-500, oklch(55.6% 0 0)),\n    var(--color-neutral-50, oklch(98.5% 0 0))\n  );\n  --text-color-kumo-disabled: light-dark(\n    var(--color-neutral-400, oklch(70.8% 0 0)),\n    var(--color-neutral-400, oklch(70.8% 0 0))\n  );\n  --text-color-kumo-beta: light-dark(#056dff, #056dff);\n  --text-color-kumo-info: light-dark(\n    var(--color-blue-800, oklch(42.4% 0.199 265.638)),\n    var(--color-blue-400, oklch(70.7% 0.165 254.624))\n  );\n  --text-color-kumo-error: light-dark(\n    var(--color-red-800, oklch(44.4% 0.177 26.899)),\n    var(--color-red-400, oklch(70.4% 0.191 22.216))\n  );\n  --text-color-kumo-alert: light-dark(\n    var(--color-yellow-800, oklch(47.6% 0.114 61.907)),\n    var(--color-yellow-400, oklch(85.2% 0.199 91.936))\n  );\n  --text-xs: 12px;\n  --text-xs--line-height: calc(1 / 0.75);\n  --text-sm: 13px;\n  --text-sm--line-height: calc(1 / 0.85);\n  --text-base: 14px;\n  --text-base--line-height: calc(1.25 / 0.875);\n  --text-lg: 16px;\n  --text-lg--line-height: calc(1.25 / 1);\n  --default-transition-duration: 100ms;\n  --animate-refresh: refresh 0.5s ease-in-out infinite;\n  --animate-right: right 15s linear infinite;\n  --font-sans: \'Inter Variable\', ui-sans-serif, system-ui, sans-serif,\n    \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\';\n  --font-mono: \'Paper Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco,\n    Consolas, \'Liberation Mono\', \'Courier New\', monospace;\n  --color-red-50: oklch(97.1% 0.013 17.38);\n  --color-red-100: oklch(93.6% 0.032 17.717);\n  --color-red-200: oklch(88.5% 0.062 18.334);\n  --color-red-300: oklch(80.8% 0.114 19.571);\n  --color-red-400: oklch(70.4% 0.191 22.216);\n  --color-red-500: oklch(63.7% 0.237 25.331);\n  --color-red-600: oklch(57.7% 0.245 27.325);\n  --color-red-700: oklch(50.5% 0.213 27.518);\n  --color-red-800: oklch(44.4% 0.177 26.899);\n  --color-red-900: oklch(39.6% 0.141 25.723);\n  --color-red-950: oklch(25.8% 0.092 26.042);\n  --color-orange-100: oklch(95.4% 0.038 75.164);\n  --color-orange-200: oklch(90.1% 0.076 70.697);\n  --color-orange-300: oklch(83.7% 0.128 66.29);\n  --color-orange-400: oklch(75% 0.183 55.934);\n  --color-orange-500: oklch(70.5% 0.213 47.604);\n  --color-orange-600: oklch(64.6% 0.222 41.116);\n  --color-orange-700: oklch(55.3% 0.195 38.402);\n  --color-orange-800: oklch(47% 0.157 37.304);\n  --color-orange-900: oklch(40.8% 0.123 38.172);\n  --color-orange-950: oklch(26.6% 0.079 36.259);\n  --color-amber-200: oklch(92.4% 0.12 95.746);\n  --color-amber-400: oklch(82.8% 0.189 84.429);\n  --color-amber-500: oklch(76.9% 0.188 70.08);\n  --color-amber-600: oklch(66.6% 0.179 58.318);\n  --color-amber-700: oklch(55.5% 0.163 48.998);\n  --color-amber-800: oklch(47.3% 0.137 46.201);\n  --color-yellow-50: oklch(98.7% 0.026 102.212);\n  --color-yellow-100: oklch(97.3% 0.071 103.193);\n  --color-yellow-200: oklch(94.5% 0.129 101.54);\n  --color-yellow-300: oklch(90.5% 0.182 98.111);\n  --color-yellow-400: oklch(85.2% 0.199 91.936);\n  --color-yellow-500: oklch(79.5% 0.184 86.047);\n  --color-yellow-600: oklch(68.1% 0.162 75.834);\n  --color-yellow-700: oklch(55.4% 0.135 66.442);\n  --color-yellow-800: oklch(47.6% 0.114 61.907);\n  --color-yellow-900: oklch(42.1% 0.095 57.708);\n  --color-green-50: oklch(98.2% 0.018 155.826);\n  --color-green-100: oklch(96.2% 0.044 156.743);\n  --color-green-200: oklch(92.5% 0.084 155.995);\n  --color-green-300: oklch(87.1% 0.15 154.449);\n  --color-green-400: oklch(79.2% 0.209 151.711);\n  --color-green-500: oklch(72.3% 0.219 149.579);\n  --color-green-600: oklch(62.7% 0.194 149.214);\n  --color-green-700: oklch(52.7% 0.154 150.069);\n  --color-green-800: oklch(44.8% 0.119 151.328);\n  --color-green-900: oklch(39.3% 0.095 152.535);\n  --color-green-950: oklch(26.6% 0.065 152.934);\n  --color-emerald-500: oklch(69.6% 0.17 162.48);\n  --color-cyan-100: oklch(95.6% 0.045 203.388);\n  --color-cyan-800: oklch(45% 0.085 224.283);\n  --color-sky-500: oklch(68.5% 0.169 237.323);\n  --color-blue-50: oklch(97% 0.014 254.604);\n  --color-blue-100: oklch(93.2% 0.032 255.585);\n  --color-blue-200: oklch(88.2% 0.059 254.128);\n  --color-blue-300: oklch(80.9% 0.105 251.813);\n  --color-blue-400: oklch(0.707 0.165 254.624);\n  --color-blue-500: oklch(62.3% 0.214 259.815);\n  --color-blue-600: oklch(54.6% 0.245 262.881);\n  --color-blue-700: oklch(48.8% 0.243 264.376);\n  --color-blue-800: oklch(0.424 0.199 265.638);\n  --color-blue-900: oklch(37.9% 0.146 265.522);\n  --color-blue-950: oklch(28.2% 0.091 267.935);\n  --color-indigo-50: oklch(96.2% 0.018 272.314);\n  --color-indigo-100: oklch(93% 0.034 272.788);\n  --color-indigo-200: oklch(87% 0.065 274.039);\n  --color-indigo-500: oklch(58.5% 0.233 277.117);\n  --color-indigo-600: oklch(51.1% 0.262 276.966);\n  --color-indigo-700: oklch(45.7% 0.24 277.023);\n  --color-indigo-900: oklch(35.9% 0.144 278.697);\n  --color-violet-100: oklch(94.3% 0.029 294.588);\n  --color-violet-900: oklch(38% 0.189 293.745);\n  --color-purple-200: oklch(90.2% 0.063 306.703);\n  --color-purple-800: oklch(43.8% 0.218 303.724);\n  --color-fuchsia-500: oklch(66.7% 0.295 322.15);\n  --color-rose-500: oklch(64.5% 0.246 16.439);\n  --color-gray-50: oklch(98.5% 0.002 247.839);\n  --color-gray-100: oklch(96.7% 0.003 264.542);\n  --color-gray-200: oklch(92.8% 0.006 264.531);\n  --color-gray-300: oklch(87.2% 0.01 258.338);\n  --color-gray-400: oklch(70.7% 0.022 261.325);\n  --color-gray-500: oklch(55.1% 0.027 264.364);\n  --color-gray-600: oklch(44.6% 0.03 256.802);\n  --color-gray-700: oklch(37.3% 0.034 259.733);\n  --color-gray-800: oklch(27.8% 0.033 256.848);\n  --color-gray-900: oklch(21% 0.034 264.665);\n  --color-zinc-500: oklch(55.2% 0.016 285.938);\n  --color-neutral-100: oklch(97% 0 0);\n  --color-neutral-200: oklch(92.2% 0 0);\n  --color-neutral-300: oklch(87% 0 0);\n  --color-neutral-400: oklch(70.8% 0 0);\n  --color-neutral-500: oklch(55.6% 0 0);\n  --color-neutral-600: oklch(43.9% 0 0);\n  --color-neutral-700: oklch(37.1% 0 0);\n  --color-neutral-800: oklch(26.9% 0 0);\n  --color-neutral-900: oklch(20.5% 0 0);\n  --color-neutral-950: oklch(14.5% 0 0);\n  --color-black: #000;\n  --color-white: #fff;\n  --spacing: 0.25rem;\n  --container-2xs: 18rem;\n  --container-xs: 20rem;\n  --container-sm: 24rem;\n  --container-md: 28rem;\n  --container-lg: 32rem;\n  --container-xl: 36rem;\n  --container-2xl: 42rem;\n  --container-3xl: 48rem;\n  --container-5xl: 64rem;\n  --container-6xl: 72rem;\n  --text-xl: 1.25rem;\n  --text-xl--line-height: calc(1.75 / 1.25);\n  --text-2xl: 1.5rem;\n  --text-2xl--line-height: calc(2 / 1.5);\n  --text-3xl: 1.875rem;\n  --text-3xl--line-height: calc(2.25 / 1.875);\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semibold: 600;\n  --font-weight-bold: 700;\n  --tracking-tight: -0.025em;\n  --tracking-normal: 0em;\n  --tracking-wide: 0.025em;\n  --tracking-widest: 0.1em;\n  --leading-tight: 1.25;\n  --leading-snug: 1.375;\n  --leading-normal: 1.5;\n  --leading-relaxed: 1.625;\n  --leading-loose: 2;\n  --radius-xs: 0.125rem;\n  --radius-sm: 0.25rem;\n  --radius-md: 0.375rem;\n  --radius-lg: 0.5rem;\n  --radius-xl: 0.75rem;\n  --radius-2xl: 1rem;\n  --radius-3xl: 1.5rem;\n  --ease-in: cubic-bezier(0.4, 0, 1, 1);\n  --ease-out: cubic-bezier(0, 0, 0.2, 1);\n  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n  --animate-spin: spin 1s linear infinite;\n  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --blur-sm: 8px;\n  --blur-md: 12px;\n  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  --color-border: var(--cf-gray-8);\n  --color-bg-primary: var(--kumo-surface);\n  --color-bg-secondary: var(--kumo-surface-secondary);\n  --color-cl1-white: var(--cf-white);\n  --color-cl1-black: var(--cf-black);\n  --color-cl1-red-1: var(--cf-red-1);\n  --color-cl1-red-2: var(--cf-red-2);\n  --color-cl1-red-3: var(--cf-red-3);\n  --color-cl1-red-4: var(--cf-red-4);\n  --color-cl1-red-5: var(--cf-red-5);\n  --color-cl1-red-6: var(--cf-red-6);\n  --color-cl1-red-7: var(--cf-red-7);\n  --color-cl1-red-8: var(--cf-red-8);\n  --color-cl1-red-9: var(--cf-red-9);\n  --color-cl1-gold-3: var(--cf-gold-3);\n  --color-cl1-gold-5: var(--cf-gold-5);\n  --color-cl1-gold-6: var(--cf-gold-6);\n  --color-cl1-gold-7: var(--cf-gold-7);\n  --color-cl1-gold-9: var(--cf-gold-9);\n  --color-cl1-green-3: var(--cf-green-3);\n  --color-cl1-green-6: var(--cf-green-6);\n  --color-cl1-blue-1: var(--cf-blue-1);\n  --color-cl1-blue-2: var(--cf-blue-2);\n  --color-cl1-blue-3: var(--cf-blue-3);\n  --color-cl1-blue-4: var(--cf-blue-4);\n  --color-cl1-blue-5: var(--cf-blue-5);\n  --color-cl1-blue-6: var(--cf-blue-6);\n  --color-cl1-blue-7: var(--cf-blue-7);\n  --color-cl1-blue-9: var(--cf-blue-9);\n  --color-cl1-gray-0: var(--cf-gray-0);\n  --color-cl1-gray-1: var(--cf-gray-1);\n  --color-cl1-gray-2: var(--cf-gray-2);\n  --color-cl1-gray-3: var(--cf-gray-3);\n  --color-cl1-gray-4: var(--cf-gray-4);\n  --color-cl1-gray-5: var(--cf-gray-5);\n  --color-cl1-gray-6: var(--cf-gray-6);\n  --color-cl1-gray-7: var(--cf-gray-7);\n  --color-cl1-gray-8: var(--cf-gray-8);\n  --color-cl1-gray-9: var(--cf-gray-9);\n  --color-cl1-new-gray-1: var(--cf-newGray-1);\n  --color-cl1-new-gray-2: var(--cf-newGray-2);\n  --fedramp-primary-text: #FFFFFF;\n  --fedramp-primary-background: #5B697C;\n  --fedramp-secondary-background: #525F70;\n  --fedramp-active-background: #C8D4E5;\n  --fedramp-hover-background: #3D4E67;\n  --color-fedramp-primary-text: var(--fedramp-primary-text);\n  --color-fedramp-primary-background: var(--fedramp-primary-background);\n}\n@layer utilities {\n  .no-scrollbar::-webkit-scrollbar {\n    display: none;\n  }\n  .no-scrollbar {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n  .no-input-spinner {\n    appearance: textfield;\n    ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {\n      appearance: none;\n    }\n  }\n}\n.z-modal {\n  z-index: 9999;\n}\n@keyframes right {\n  to {\n    transform: translateX(100%);\n  }\n}\n.float {\n  animation: float 5s linear infinite alternate;\n}\n@keyframes float {\n  to {\n    transform: translate(5px, 15px);\n  }\n}\n@keyframes refresh {\n  to {\n    transform: rotate(360deg) scale(0.9);\n  }\n}\n@keyframes bounce-in {\n  0% {\n    transform: scale(0.6);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.animate-bounce-in {\n  animation: bounce-in 0.4s ease-out;\n}\n@keyframes shimmer {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n.skeleton-line {\n  position: relative;\n  overflow: hidden;\n  border-radius: 2px;\n  height: var(--skeleton-height, 0.5rem);\n  width: var(--skeleton-width);\n  background-color: #f3f4f6;\n}\n.skeleton-line::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  animation: shimmer var(--shimmer-duration, 1.5s) var(--shimmer-delay, 0s) infinite ease-in-out;\n  content: "";\n  background: linear-gradient( 90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 50%, rgba(0, 0, 0, 0) 100% );\n}\n.dark-mode .skeleton-line {\n  background-color: rgba(255, 255, 255, 0.06);\n}\n.dark-mode .skeleton-line::after {\n  background: linear-gradient( 90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100% );\n}\n@keyframes skeleton {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.skeleton {\n  background: linear-gradient( 90deg, transparent 0%, rgba(0, 0, 0, 0.05) 50%, transparent 100% );\n  background-size: 200% 100%;\n  animation: skeleton 1.5s ease-in-out infinite;\n}\n.dark-mode .skeleton {\n  background: linear-gradient( 90deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100% );\n}\n@keyframes refresh {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-refresh {\n  animation: refresh 1s linear infinite;\n}\n@layer theme;\n@layer utilities {\n  .\\@container {\n    container-type: inline-size;\n  }\n  .\\[pointer-events\\:inherit\\] {\n    pointer-events: inherit;\n  }\n  .pointer-events-auto {\n    pointer-events: auto;\n  }\n  .pointer-events-none {\n    pointer-events: none;\n  }\n  .collapse {\n    visibility: collapse;\n  }\n  .invisible {\n    visibility: hidden;\n  }\n  .visible {\n    visibility: visible;\n  }\n  .visible\\! {\n    visibility: visible !important;\n  }\n  .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip-path: inset(50%);\n    white-space: nowrap;\n    border-width: 0;\n  }\n  .absolute {\n    position: absolute;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .relative {\n    position: relative;\n  }\n  .relative\\! {\n    position: relative !important;\n  }\n  .static {\n    position: static;\n  }\n  .sticky {\n    position: sticky;\n  }\n  .-inset-0\\.5 {\n    inset: calc(var(--spacing) * -0.5);\n  }\n  .inset-0 {\n    inset: calc(var(--spacing) * 0);\n  }\n  .inset-1 {\n    inset: calc(var(--spacing) * 1);\n  }\n  .-inset-x-7 {\n    inset-inline: calc(var(--spacing) * -7);\n  }\n  .inset-x-0 {\n    inset-inline: calc(var(--spacing) * 0);\n  }\n  .inset-y-0 {\n    inset-block: calc(var(--spacing) * 0);\n  }\n  .inset-y-1 {\n    inset-block: calc(var(--spacing) * 1);\n  }\n  .-top-0\\.5 {\n    top: calc(var(--spacing) * -0.5);\n  }\n  .-top-1 {\n    top: calc(var(--spacing) * -1);\n  }\n  .-top-10 {\n    top: calc(var(--spacing) * -10);\n  }\n  .-top-14 {\n    top: calc(var(--spacing) * -14);\n  }\n  .top-\\(--active-tab-top\\) {\n    top: var(--active-tab-top);\n  }\n  .top-0 {\n    top: calc(var(--spacing) * 0);\n  }\n  .top-0\\! {\n    top: calc(var(--spacing) * 0) !important;\n  }\n  .top-0\\.5 {\n    top: calc(var(--spacing) * 0.5);\n  }\n  .top-1 {\n    top: calc(var(--spacing) * 1);\n  }\n  .top-1\\/2 {\n    top: calc(1/2 * 100%);\n  }\n  .top-1\\/3 {\n    top: calc(1/3 * 100%);\n  }\n  .top-2 {\n    top: calc(var(--spacing) * 2);\n  }\n  .top-3 {\n    top: calc(var(--spacing) * 3);\n  }\n  .top-4 {\n    top: calc(var(--spacing) * 4);\n  }\n  .top-6 {\n    top: calc(var(--spacing) * 6);\n  }\n  .top-8 {\n    top: calc(var(--spacing) * 8);\n  }\n  .top-9 {\n    top: calc(var(--spacing) * 9);\n  }\n  .top-14 {\n    top: calc(var(--spacing) * 14);\n  }\n  .top-22 {\n    top: calc(var(--spacing) * 22);\n  }\n  .top-24 {\n    top: calc(var(--spacing) * 24);\n  }\n  .top-37\\.5 {\n    top: calc(var(--spacing) * 37.5);\n  }\n  .top-42 {\n    top: calc(var(--spacing) * 42);\n  }\n  .top-45 {\n    top: calc(var(--spacing) * 45);\n  }\n  .top-48 {\n    top: calc(var(--spacing) * 48);\n  }\n  .top-64 {\n    top: calc(var(--spacing) * 64);\n  }\n  .top-\\[1px\\] {\n    top: 1px;\n  }\n  .top-\\[3px\\] {\n    top: 3px;\n  }\n  .top-\\[10vh\\] {\n    top: 10vh;\n  }\n  .top-\\[30\\%\\] {\n    top: 30%;\n  }\n  .top-\\[55px\\] {\n    top: 55px;\n  }\n  .top-\\[56px\\] {\n    top: 56px;\n  }\n  .top-\\[58px\\] {\n    top: 58px;\n  }\n  .top-\\[116px\\] {\n    top: 116px;\n  }\n  .top-\\[118px\\] {\n    top: 118px;\n  }\n  .top-\\[136px\\] {\n    top: 136px;\n  }\n  .top-\\[160px\\] {\n    top: 160px;\n  }\n  .top-\\[185px\\] {\n    top: 185px;\n  }\n  .top-auto {\n    top: auto;\n  }\n  .top-full {\n    top: 100%;\n  }\n  .top-px {\n    top: 1px;\n  }\n  .-right-0\\.5 {\n    right: calc(var(--spacing) * -0.5);\n  }\n  .-right-1 {\n    right: calc(var(--spacing) * -1);\n  }\n  .-right-\\[5px\\] {\n    right: calc(5px * -1);\n  }\n  .right-0 {\n    right: calc(var(--spacing) * 0);\n  }\n  .right-0\\! {\n    right: calc(var(--spacing) * 0) !important;\n  }\n  .right-1 {\n    right: calc(var(--spacing) * 1);\n  }\n  .right-1\\.5 {\n    right: calc(var(--spacing) * 1.5);\n  }\n  .right-2 {\n    right: calc(var(--spacing) * 2);\n  }\n  .right-3 {\n    right: calc(var(--spacing) * 3);\n  }\n  .right-4 {\n    right: calc(var(--spacing) * 4);\n  }\n  .right-6 {\n    right: calc(var(--spacing) * 6);\n  }\n  .right-8 {\n    right: calc(var(--spacing) * 8);\n  }\n  .right-\\[-5px\\] {\n    right: -5px;\n  }\n  .right-\\[1rem\\] {\n    right: 1rem;\n  }\n  .right-\\[calc\\(100\\%\\+3rem\\)\\] {\n    right: calc(100% + 3rem);\n  }\n  .\\!bottom-20 {\n    bottom: calc(var(--spacing) * 20) !important;\n  }\n  .bottom-0 {\n    bottom: calc(var(--spacing) * 0);\n  }\n  .bottom-0\\.5 {\n    bottom: calc(var(--spacing) * 0.5);\n  }\n  .bottom-2\\.5 {\n    bottom: calc(var(--spacing) * 2.5);\n  }\n  .bottom-\\[1rem\\] {\n    bottom: 1rem;\n  }\n  .-left-1 {\n    left: calc(var(--spacing) * -1);\n  }\n  .-left-1\\.5 {\n    left: calc(var(--spacing) * -1.5);\n  }\n  .-left-4 {\n    left: calc(var(--spacing) * -4);\n  }\n  .left-\\(--active-tab-left\\) {\n    left: var(--active-tab-left);\n  }\n  .left-0 {\n    left: calc(var(--spacing) * 0);\n  }\n  .left-1 {\n    left: calc(var(--spacing) * 1);\n  }\n  .left-1\\/2 {\n    left: calc(1/2 * 100%);\n  }\n  .left-2 {\n    left: calc(var(--spacing) * 2);\n  }\n  .left-3 {\n    left: calc(var(--spacing) * 3);\n  }\n  .left-5 {\n    left: calc(var(--spacing) * 5);\n  }\n  .left-\\[-6px\\] {\n    left: -6px;\n  }\n  .left-\\[13px\\] {\n    left: 13px;\n  }\n  .left-\\[19px\\] {\n    left: 19px;\n  }\n  .left-\\[260px\\] {\n    left: 260px;\n  }\n  .left-auto {\n    left: auto;\n  }\n  .left-full {\n    left: 100%;\n  }\n  .isolate {\n    isolation: isolate;\n  }\n  .\\!z-100 {\n    z-index: 100 !important;\n  }\n  .-z-10 {\n    z-index: calc(10 * -1);\n  }\n  .z-0 {\n    z-index: 0;\n  }\n  .z-10 {\n    z-index: 10;\n  }\n  .z-20 {\n    z-index: 20;\n  }\n  .z-30 {\n    z-index: 30;\n  }\n  .z-40 {\n    z-index: 40;\n  }\n  .z-50 {\n    z-index: 50;\n  }\n  .z-100 {\n    z-index: 100;\n  }\n  .z-\\[1\\] {\n    z-index: 1;\n  }\n  .z-\\[99\\] {\n    z-index: 99;\n  }\n  .z-\\[100\\] {\n    z-index: 100;\n  }\n  .z-\\[201\\] {\n    z-index: 201;\n  }\n  .z-\\[1190\\] {\n    z-index: 1190;\n  }\n  .z-\\[9999\\] {\n    z-index: 9999;\n  }\n  .z-\\[10000\\] {\n    z-index: 10000;\n  }\n  .z-\\[10001\\] {\n    z-index: 10001;\n  }\n  .z-\\[99999\\] {\n    z-index: 99999;\n  }\n  .z-\\[calc\\(1000-var\\(--toast-index\\)\\)\\] {\n    z-index: calc(1000 - var(--toast-index));\n  }\n  .-order-1 {\n    order: calc(1 * -1);\n  }\n  .col-\\[1\\] {\n    grid-column: 1;\n  }\n  .col-\\[2\\] {\n    grid-column: 2;\n  }\n  .col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n  .col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n  .col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n  .col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n  .col-span-6 {\n    grid-column: span 6 / span 6;\n  }\n  .col-span-full {\n    grid-column: 1 / -1;\n  }\n  .col-start-1 {\n    grid-column-start: 1;\n  }\n  .col-start-2 {\n    grid-column-start: 2;\n  }\n  .row-span-2 {\n    grid-row: span 2 / span 2;\n  }\n  .row-start-1 {\n    grid-row-start: 1;\n  }\n  .row-start-5 {\n    grid-row-start: 5;\n  }\n  .float-right {\n    float: right;\n  }\n  .container {\n    width: 100%;\n    @media (width >= 40rem) {\n      max-width: 40rem;\n    }\n    @media (width >= 48rem) {\n      max-width: 48rem;\n    }\n    @media (width >= 64rem) {\n      max-width: 64rem;\n    }\n    @media (width >= 80rem) {\n      max-width: 80rem;\n    }\n    @media (width >= 96rem) {\n      max-width: 96rem;\n    }\n  }\n  .\\!m-0 {\n    margin: calc(var(--spacing) * 0) !important;\n  }\n  .\\!m-1 {\n    margin: calc(var(--spacing) * 1) !important;\n  }\n  .-m-1 {\n    margin: calc(var(--spacing) * -1);\n  }\n  .-m-\\[1px\\] {\n    margin: calc(1px * -1);\n  }\n  .-m-px {\n    margin: -1px;\n  }\n  .m-0 {\n    margin: calc(var(--spacing) * 0);\n  }\n  .m-0\\! {\n    margin: calc(var(--spacing) * 0) !important;\n  }\n  .m-1 {\n    margin: calc(var(--spacing) * 1);\n  }\n  .m-2 {\n    margin: calc(var(--spacing) * 2);\n  }\n  .m-4 {\n    margin: calc(var(--spacing) * 4);\n  }\n  .m-8 {\n    margin: calc(var(--spacing) * 8);\n  }\n  .m-auto {\n    margin: auto;\n  }\n  .\\!mx-0 {\n    margin-inline: calc(var(--spacing) * 0) !important;\n  }\n  .-mx-0\\.5 {\n    margin-inline: calc(var(--spacing) * -0.5);\n  }\n  .-mx-1 {\n    margin-inline: calc(var(--spacing) * -1);\n  }\n  .-mx-1\\.5 {\n    margin-inline: calc(var(--spacing) * -1.5);\n  }\n  .-mx-2 {\n    margin-inline: calc(var(--spacing) * -2);\n  }\n  .-mx-4 {\n    margin-inline: calc(var(--spacing) * -4);\n  }\n  .-mx-5 {\n    margin-inline: calc(var(--spacing) * -5);\n  }\n  .-mx-6 {\n    margin-inline: calc(var(--spacing) * -6);\n  }\n  .-mx-7 {\n    margin-inline: calc(var(--spacing) * -7);\n  }\n  .-mx-px {\n    margin-inline: -1px;\n  }\n  .mx-0 {\n    margin-inline: calc(var(--spacing) * 0);\n  }\n  .mx-1 {\n    margin-inline: calc(var(--spacing) * 1);\n  }\n  .mx-2 {\n    margin-inline: calc(var(--spacing) * 2);\n  }\n  .mx-3 {\n    margin-inline: calc(var(--spacing) * 3);\n  }\n  .mx-4 {\n    margin-inline: calc(var(--spacing) * 4);\n  }\n  .mx-auto {\n    margin-inline: auto;\n  }\n  .\\!my-0 {\n    margin-block: calc(var(--spacing) * 0) !important;\n  }\n  .\\!my-4 {\n    margin-block: calc(var(--spacing) * 4) !important;\n  }\n  .-my-0\\.5 {\n    margin-block: calc(var(--spacing) * -0.5);\n  }\n  .-my-1 {\n    margin-block: calc(var(--spacing) * -1);\n  }\n  .-my-2 {\n    margin-block: calc(var(--spacing) * -2);\n  }\n  .my-0 {\n    margin-block: calc(var(--spacing) * 0);\n  }\n  .my-0\\! {\n    margin-block: calc(var(--spacing) * 0) !important;\n  }\n  .my-1 {\n    margin-block: calc(var(--spacing) * 1);\n  }\n  .my-1\\.5 {\n    margin-block: calc(var(--spacing) * 1.5);\n  }\n  .my-2 {\n    margin-block: calc(var(--spacing) * 2);\n  }\n  .my-3 {\n    margin-block: calc(var(--spacing) * 3);\n  }\n  .my-4 {\n    margin-block: calc(var(--spacing) * 4);\n  }\n  .my-5 {\n    margin-block: calc(var(--spacing) * 5);\n  }\n  .my-8 {\n    margin-block: calc(var(--spacing) * 8);\n  }\n  .my-\\[0\\.5px\\] {\n    margin-block: 0.5px;\n  }\n  .my-\\[1px\\] {\n    margin-block: 1px;\n  }\n  .my-auto {\n    margin-block: auto;\n  }\n  .my-px {\n    margin-block: 1px;\n  }\n  .\\!-mt-0\\.5 {\n    margin-top: calc(var(--spacing) * -0.5) !important;\n  }\n  .\\!mt-0 {\n    margin-top: calc(var(--spacing) * 0) !important;\n  }\n  .\\!mt-1 {\n    margin-top: calc(var(--spacing) * 1) !important;\n  }\n  .\\!mt-2 {\n    margin-top: calc(var(--spacing) * 2) !important;\n  }\n  .\\!mt-3 {\n    margin-top: calc(var(--spacing) * 3) !important;\n  }\n  .\\!mt-4 {\n    margin-top: calc(var(--spacing) * 4) !important;\n  }\n  .\\!mt-5 {\n    margin-top: calc(var(--spacing) * 5) !important;\n  }\n  .\\!mt-6 {\n    margin-top: calc(var(--spacing) * 6) !important;\n  }\n  .\\!mt-\\[1px\\] {\n    margin-top: 1px !important;\n  }\n  .-mt-1 {\n    margin-top: calc(var(--spacing) * -1);\n  }\n  .-mt-2 {\n    margin-top: calc(var(--spacing) * -2);\n  }\n  .-mt-3 {\n    margin-top: calc(var(--spacing) * -3);\n  }\n  .-mt-3\\.5 {\n    margin-top: calc(var(--spacing) * -3.5);\n  }\n  .-mt-4 {\n    margin-top: calc(var(--spacing) * -4);\n  }\n  .-mt-6\\.5 {\n    margin-top: calc(var(--spacing) * -6.5);\n  }\n  .mt-0 {\n    margin-top: calc(var(--spacing) * 0);\n  }\n  .mt-0\\.5 {\n    margin-top: calc(var(--spacing) * 0.5);\n  }\n  .mt-0\\.5\\! {\n    margin-top: calc(var(--spacing) * 0.5) !important;\n  }\n  .mt-1 {\n    margin-top: calc(var(--spacing) * 1);\n  }\n  .mt-1\\.5 {\n    margin-top: calc(var(--spacing) * 1.5);\n  }\n  .mt-2 {\n    margin-top: calc(var(--spacing) * 2);\n  }\n  .mt-2\\.5 {\n    margin-top: calc(var(--spacing) * 2.5);\n  }\n  .mt-3 {\n    margin-top: calc(var(--spacing) * 3);\n  }\n  .mt-3\\.5 {\n    margin-top: calc(var(--spacing) * 3.5);\n  }\n  .mt-4 {\n    margin-top: calc(var(--spacing) * 4);\n  }\n  .mt-5 {\n    margin-top: calc(var(--spacing) * 5);\n  }\n  .mt-5\\.5 {\n    margin-top: calc(var(--spacing) * 5.5);\n  }\n  .mt-6 {\n    margin-top: calc(var(--spacing) * 6);\n  }\n  .mt-6\\.5 {\n    margin-top: calc(var(--spacing) * 6.5);\n  }\n  .mt-7 {\n    margin-top: calc(var(--spacing) * 7);\n  }\n  .mt-7\\.5 {\n    margin-top: calc(var(--spacing) * 7.5);\n  }\n  .mt-8 {\n    margin-top: calc(var(--spacing) * 8);\n  }\n  .mt-9 {\n    margin-top: calc(var(--spacing) * 9);\n  }\n  .mt-12 {\n    margin-top: calc(var(--spacing) * 12);\n  }\n  .mt-14 {\n    margin-top: calc(var(--spacing) * 14);\n  }\n  .mt-\\[1px\\] {\n    margin-top: 1px;\n  }\n  .mt-auto {\n    margin-top: auto;\n  }\n  .mt-px {\n    margin-top: 1px;\n  }\n  .\\!mr-0 {\n    margin-right: calc(var(--spacing) * 0) !important;\n  }\n  .\\!mr-1 {\n    margin-right: calc(var(--spacing) * 1) !important;\n  }\n  .\\!mr-\\[1px\\] {\n    margin-right: 1px !important;\n  }\n  .-mr-2 {\n    margin-right: calc(var(--spacing) * -2);\n  }\n  .-mr-px {\n    margin-right: -1px;\n  }\n  .mr-0 {\n    margin-right: calc(var(--spacing) * 0);\n  }\n  .mr-1 {\n    margin-right: calc(var(--spacing) * 1);\n  }\n  .mr-2 {\n    margin-right: calc(var(--spacing) * 2);\n  }\n  .mr-3 {\n    margin-right: calc(var(--spacing) * 3);\n  }\n  .mr-4 {\n    margin-right: calc(var(--spacing) * 4);\n  }\n  .mr-8 {\n    margin-right: calc(var(--spacing) * 8);\n  }\n  .mr-16 {\n    margin-right: calc(var(--spacing) * 16);\n  }\n  .mr-auto {\n    margin-right: auto;\n  }\n  .mr-px {\n    margin-right: 1px;\n  }\n  .\\!-mb-20 {\n    margin-bottom: calc(var(--spacing) * -20) !important;\n  }\n  .\\!mb-0 {\n    margin-bottom: calc(var(--spacing) * 0) !important;\n  }\n  .\\!mb-1\\.5 {\n    margin-bottom: calc(var(--spacing) * 1.5) !important;\n  }\n  .\\!mb-2 {\n    margin-bottom: calc(var(--spacing) * 2) !important;\n  }\n  .\\!mb-2\\.5 {\n    margin-bottom: calc(var(--spacing) * 2.5) !important;\n  }\n  .\\!mb-3 {\n    margin-bottom: calc(var(--spacing) * 3) !important;\n  }\n  .\\!mb-4 {\n    margin-bottom: calc(var(--spacing) * 4) !important;\n  }\n  .-mb-1 {\n    margin-bottom: calc(var(--spacing) * -1);\n  }\n  .-mb-2 {\n    margin-bottom: calc(var(--spacing) * -2);\n  }\n  .-mb-4 {\n    margin-bottom: calc(var(--spacing) * -4);\n  }\n  .-mb-5 {\n    margin-bottom: calc(var(--spacing) * -5);\n  }\n  .-mb-7 {\n    margin-bottom: calc(var(--spacing) * -7);\n  }\n  .-mb-\\[1px\\] {\n    margin-bottom: calc(1px * -1);\n  }\n  .-mb-\\[48px\\] {\n    margin-bottom: calc(48px * -1);\n  }\n  .-mb-\\[68px\\] {\n    margin-bottom: calc(68px * -1);\n  }\n  .-mb-px {\n    margin-bottom: -1px;\n  }\n  .mb-0 {\n    margin-bottom: calc(var(--spacing) * 0);\n  }\n  .mb-0\\! {\n    margin-bottom: calc(var(--spacing) * 0) !important;\n  }\n  .mb-0\\.5 {\n    margin-bottom: calc(var(--spacing) * 0.5);\n  }\n  .mb-1 {\n    margin-bottom: calc(var(--spacing) * 1);\n  }\n  .mb-1\\.5 {\n    margin-bottom: calc(var(--spacing) * 1.5);\n  }\n  .mb-2 {\n    margin-bottom: calc(var(--spacing) * 2);\n  }\n  .mb-2\\.5 {\n    margin-bottom: calc(var(--spacing) * 2.5);\n  }\n  .mb-3 {\n    margin-bottom: calc(var(--spacing) * 3);\n  }\n  .mb-3\\! {\n    margin-bottom: calc(var(--spacing) * 3) !important;\n  }\n  .mb-4 {\n    margin-bottom: calc(var(--spacing) * 4);\n  }\n  .mb-5 {\n    margin-bottom: calc(var(--spacing) * 5);\n  }\n  .mb-6 {\n    margin-bottom: calc(var(--spacing) * 6);\n  }\n  .mb-6\\.5 {\n    margin-bottom: calc(var(--spacing) * 6.5);\n  }\n  .mb-8 {\n    margin-bottom: calc(var(--spacing) * 8);\n  }\n  .mb-12 {\n    margin-bottom: calc(var(--spacing) * 12);\n  }\n  .mb-\\[5px\\] {\n    margin-bottom: 5px;\n  }\n  .mb-\\[60px\\] {\n    margin-bottom: 60px;\n  }\n  .mb-\\[unset\\] {\n    margin-bottom: unset;\n  }\n  .\\!-ml-1 {\n    margin-left: calc(var(--spacing) * -1) !important;\n  }\n  .\\!ml-0 {\n    margin-left: calc(var(--spacing) * 0) !important;\n  }\n  .\\!ml-0\\.5 {\n    margin-left: calc(var(--spacing) * 0.5) !important;\n  }\n  .-ml-0\\.5 {\n    margin-left: calc(var(--spacing) * -0.5);\n  }\n  .-ml-1 {\n    margin-left: calc(var(--spacing) * -1);\n  }\n  .-ml-2 {\n    margin-left: calc(var(--spacing) * -2);\n  }\n  .-ml-3 {\n    margin-left: calc(var(--spacing) * -3);\n  }\n  .-ml-\\[1px\\] {\n    margin-left: calc(1px * -1);\n  }\n  .-ml-px {\n    margin-left: -1px;\n  }\n  .ml-0 {\n    margin-left: calc(var(--spacing) * 0);\n  }\n  .ml-0\\! {\n    margin-left: calc(var(--spacing) * 0) !important;\n  }\n  .ml-0\\.5 {\n    margin-left: calc(var(--spacing) * 0.5);\n  }\n  .ml-1 {\n    margin-left: calc(var(--spacing) * 1);\n  }\n  .ml-1\\.5 {\n    margin-left: calc(var(--spacing) * 1.5);\n  }\n  .ml-2 {\n    margin-left: calc(var(--spacing) * 2);\n  }\n  .ml-3 {\n    margin-left: calc(var(--spacing) * 3);\n  }\n  .ml-4 {\n    margin-left: calc(var(--spacing) * 4);\n  }\n  .ml-6 {\n    margin-left: calc(var(--spacing) * 6);\n  }\n  .ml-7 {\n    margin-left: calc(var(--spacing) * 7);\n  }\n  .ml-11 {\n    margin-left: calc(var(--spacing) * 11);\n  }\n  .ml-\\[16px\\] {\n    margin-left: 16px;\n  }\n  .ml-auto {\n    margin-left: auto;\n  }\n  .box-border {\n    box-sizing: border-box;\n  }\n  .line-clamp-1 {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 1;\n  }\n  .line-clamp-2 {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n  }\n  .\\!flex {\n    display: flex !important;\n  }\n  .\\!grid {\n    display: grid !important;\n  }\n  .\\!inline-flex {\n    display: inline-flex !important;\n  }\n  .block {\n    display: block;\n  }\n  .contents {\n    display: contents;\n  }\n  .flex {\n    display: flex;\n  }\n  .flex\\! {\n    display: flex !important;\n  }\n  .grid {\n    display: grid;\n  }\n  .hidden {\n    display: none;\n  }\n  .inline {\n    display: inline;\n  }\n  .inline-block {\n    display: inline-block;\n  }\n  .inline-flex {\n    display: inline-flex;\n  }\n  .inline-grid {\n    display: inline-grid;\n  }\n  .list-item {\n    display: list-item;\n  }\n  .table {\n    display: table;\n  }\n  .table-cell {\n    display: table-cell;\n  }\n  .table-row {\n    display: table-row;\n  }\n  .\\[field-sizing\\:content\\] {\n    field-sizing: content;\n  }\n  .aspect-\\[16\\/9\\] {\n    aspect-ratio: 16/9;\n  }\n  .aspect-square {\n    aspect-ratio: 1 / 1;\n  }\n  .size-1 {\n    width: calc(var(--spacing) * 1);\n    height: calc(var(--spacing) * 1);\n  }\n  .size-1\\.5 {\n    width: calc(var(--spacing) * 1.5);\n    height: calc(var(--spacing) * 1.5);\n  }\n  .size-2 {\n    width: calc(var(--spacing) * 2);\n    height: calc(var(--spacing) * 2);\n  }\n  .size-3 {\n    width: calc(var(--spacing) * 3);\n    height: calc(var(--spacing) * 3);\n  }\n  .size-3\\.5 {\n    width: calc(var(--spacing) * 3.5);\n    height: calc(var(--spacing) * 3.5);\n  }\n  .size-4 {\n    width: calc(var(--spacing) * 4);\n    height: calc(var(--spacing) * 4);\n  }\n  .size-4\\.5 {\n    width: calc(var(--spacing) * 4.5);\n    height: calc(var(--spacing) * 4.5);\n  }\n  .size-5 {\n    width: calc(var(--spacing) * 5);\n    height: calc(var(--spacing) * 5);\n  }\n  .size-6 {\n    width: calc(var(--spacing) * 6);\n    height: calc(var(--spacing) * 6);\n  }\n  .size-6\\.5 {\n    width: calc(var(--spacing) * 6.5);\n    height: calc(var(--spacing) * 6.5);\n  }\n  .size-7 {\n    width: calc(var(--spacing) * 7);\n    height: calc(var(--spacing) * 7);\n  }\n  .size-7\\.5 {\n    width: calc(var(--spacing) * 7.5);\n    height: calc(var(--spacing) * 7.5);\n  }\n  .size-8 {\n    width: calc(var(--spacing) * 8);\n    height: calc(var(--spacing) * 8);\n  }\n  .size-8\\.5 {\n    width: calc(var(--spacing) * 8.5);\n    height: calc(var(--spacing) * 8.5);\n  }\n  .size-9 {\n    width: calc(var(--spacing) * 9);\n    height: calc(var(--spacing) * 9);\n  }\n  .size-10 {\n    width: calc(var(--spacing) * 10);\n    height: calc(var(--spacing) * 10);\n  }\n  .size-12 {\n    width: calc(var(--spacing) * 12);\n    height: calc(var(--spacing) * 12);\n  }\n  .size-15 {\n    width: calc(var(--spacing) * 15);\n    height: calc(var(--spacing) * 15);\n  }\n  .size-full {\n    width: 100%;\n    height: 100%;\n  }\n  .\\!h-3\\.5 {\n    height: calc(var(--spacing) * 3.5) !important;\n  }\n  .\\!h-8 {\n    height: calc(var(--spacing) * 8) !important;\n  }\n  .\\!h-\\[34px\\] {\n    height: 34px !important;\n  }\n  .\\!h-auto {\n    height: auto !important;\n  }\n  .\\!h-fit {\n    height: fit-content !important;\n  }\n  .\\!h-full {\n    height: 100% !important;\n  }\n  .h-\\(--active-tab-height\\) {\n    height: var(--active-tab-height);\n  }\n  .h-0\\.5 {\n    height: calc(var(--spacing) * 0.5);\n  }\n  .h-1 {\n    height: calc(var(--spacing) * 1);\n  }\n  .h-1\\.5 {\n    height: calc(var(--spacing) * 1.5);\n  }\n  .h-2 {\n    height: calc(var(--spacing) * 2);\n  }\n  .h-2\\.5 {\n    height: calc(var(--spacing) * 2.5);\n  }\n  .h-3 {\n    height: calc(var(--spacing) * 3);\n  }\n  .h-3\\.5 {\n    height: calc(var(--spacing) * 3.5);\n  }\n  .h-4 {\n    height: calc(var(--spacing) * 4);\n  }\n  .h-4\\.5 {\n    height: calc(var(--spacing) * 4.5);\n  }\n  .h-5 {\n    height: calc(var(--spacing) * 5);\n  }\n  .h-5\\.5 {\n    height: calc(var(--spacing) * 5.5);\n  }\n  .h-6 {\n    height: calc(var(--spacing) * 6);\n  }\n  .h-6\\.5 {\n    height: calc(var(--spacing) * 6.5);\n  }\n  .h-7 {\n    height: calc(var(--spacing) * 7);\n  }\n  .h-7\\.5 {\n    height: calc(var(--spacing) * 7.5);\n  }\n  .h-8 {\n    height: calc(var(--spacing) * 8);\n  }\n  .h-8\\.5 {\n    height: calc(var(--spacing) * 8.5);\n  }\n  .h-8\\/10 {\n    height: calc(8/10 * 100%);\n  }\n  .h-9 {\n    height: calc(var(--spacing) * 9);\n  }\n  .h-9\\.5 {\n    height: calc(var(--spacing) * 9.5);\n  }\n  .h-10 {\n    height: calc(var(--spacing) * 10);\n  }\n  .h-11 {\n    height: calc(var(--spacing) * 11);\n  }\n  .h-12 {\n    height: calc(var(--spacing) * 12);\n  }\n  .h-13 {\n    height: calc(var(--spacing) * 13);\n  }\n  .h-14 {\n    height: calc(var(--spacing) * 14);\n  }\n  .h-16 {\n    height: calc(var(--spacing) * 16);\n  }\n  .h-20 {\n    height: calc(var(--spacing) * 20);\n  }\n  .h-32 {\n    height: calc(var(--spacing) * 32);\n  }\n  .h-46 {\n    height: calc(var(--spacing) * 46);\n  }\n  .h-64 {\n    height: calc(var(--spacing) * 64);\n  }\n  .h-76 {\n    height: calc(var(--spacing) * 76);\n  }\n  .h-80 {\n    height: calc(var(--spacing) * 80);\n  }\n  .h-96 {\n    height: calc(var(--spacing) * 96);\n  }\n  .h-\\[0\\.5px\\] {\n    height: 0.5px;\n  }\n  .h-\\[1lh\\] {\n    height: 1lh;\n  }\n  .h-\\[1px\\] {\n    height: 1px;\n  }\n  .h-\\[14px\\] {\n    height: 14px;\n  }\n  .h-\\[18px\\] {\n    height: 18px;\n  }\n  .h-\\[19px\\] {\n    height: 19px;\n  }\n  .h-\\[22px\\] {\n    height: 22px;\n  }\n  .h-\\[24px\\] {\n    height: 24px;\n  }\n  .h-\\[25px\\] {\n    height: 25px;\n  }\n  .h-\\[26px\\] {\n    height: 26px;\n  }\n  .h-\\[28px\\] {\n    height: 28px;\n  }\n  .h-\\[30px\\] {\n    height: 30px;\n  }\n  .h-\\[32px\\] {\n    height: 32px;\n  }\n  .h-\\[34px\\] {\n    height: 34px;\n  }\n  .h-\\[35px\\] {\n    height: 35px;\n  }\n  .h-\\[36px\\] {\n    height: 36px;\n  }\n  .h-\\[40px\\] {\n    height: 40px;\n  }\n  .h-\\[41px\\] {\n    height: 41px;\n  }\n  .h-\\[42px\\] {\n    height: 42px;\n  }\n  .h-\\[45px\\] {\n    height: 45px;\n  }\n  .h-\\[52px\\] {\n    height: 52px;\n  }\n  .h-\\[57px\\] {\n    height: 57px;\n  }\n  .h-\\[58px\\] {\n    height: 58px;\n  }\n  .h-\\[60px\\] {\n    height: 60px;\n  }\n  .h-\\[64px\\] {\n    height: 64px;\n  }\n  .h-\\[80px\\] {\n    height: 80px;\n  }\n  .h-\\[80vh\\] {\n    height: 80vh;\n  }\n  .h-\\[85vh\\] {\n    height: 85vh;\n  }\n  .h-\\[90vh\\] {\n    height: 90vh;\n  }\n  .h-\\[100\\%\\] {\n    height: 100%;\n  }\n  .h-\\[116px\\] {\n    height: 116px;\n  }\n  .h-\\[125px\\] {\n    height: 125px;\n  }\n  .h-\\[245px\\] {\n    height: 245px;\n  }\n  .h-\\[300px\\] {\n    height: 300px;\n  }\n  .h-\\[312px\\] {\n    height: 312px;\n  }\n  .h-\\[350px\\] {\n    height: 350px;\n  }\n  .h-\\[500px\\] {\n    height: 500px;\n  }\n  .h-\\[calc\\(75dvh\\)\\] {\n    height: calc(75dvh);\n  }\n  .h-\\[calc\\(100vh-58px\\)\\] {\n    height: calc(100vh - 58px);\n  }\n  .h-\\[calc\\(100vh-116px\\)\\] {\n    height: calc(100vh - 116px);\n  }\n  .h-\\[calc\\(100vh-240px\\)\\] {\n    height: calc(100vh - 240px);\n  }\n  .h-\\[min\\(50vh\\,600px\\)\\] {\n    height: min(50vh, 600px);\n  }\n  .h-\\[var\\(--height\\)\\] {\n    height: var(--height);\n  }\n  .h-auto {\n    height: auto;\n  }\n  .h-fit {\n    height: fit-content;\n  }\n  .h-full {\n    height: 100%;\n  }\n  .h-full\\! {\n    height: 100% !important;\n  }\n  .h-px {\n    height: 1px;\n  }\n  .h-screen {\n    height: 100vh;\n  }\n  .\\!max-h-\\[calc\\(100vh-350px\\)\\] {\n    max-height: calc(100vh - 350px) !important;\n  }\n  .max-h-7 {\n    max-height: calc(var(--spacing) * 7);\n  }\n  .max-h-8\\/10 {\n    max-height: calc(8/10 * 100%);\n  }\n  .max-h-50 {\n    max-height: calc(var(--spacing) * 50);\n  }\n  .max-h-60 {\n    max-height: calc(var(--spacing) * 60);\n  }\n  .max-h-64 {\n    max-height: calc(var(--spacing) * 64);\n  }\n  .max-h-74 {\n    max-height: calc(var(--spacing) * 74);\n  }\n  .max-h-96 {\n    max-height: calc(var(--spacing) * 96);\n  }\n  .max-h-112 {\n    max-height: calc(var(--spacing) * 112);\n  }\n  .max-h-\\[33px\\] {\n    max-height: 33px;\n  }\n  .max-h-\\[50vh\\] {\n    max-height: 50vh;\n  }\n  .max-h-\\[60vh\\] {\n    max-height: 60vh;\n  }\n  .max-h-\\[80vh\\] {\n    max-height: 80vh;\n  }\n  .max-h-\\[90vh\\] {\n    max-height: 90vh;\n  }\n  .max-h-\\[300px\\] {\n    max-height: 300px;\n  }\n  .max-h-\\[340px\\] {\n    max-height: 340px;\n  }\n  .max-h-\\[400px\\] {\n    max-height: 400px;\n  }\n  .max-h-\\[500px\\] {\n    max-height: 500px;\n  }\n  .max-h-\\[512px\\] {\n    max-height: 512px;\n  }\n  .max-h-\\[600px\\] {\n    max-height: 600px;\n  }\n  .max-h-\\[calc\\(75dvh\\)\\] {\n    max-height: calc(75dvh);\n  }\n  .max-h-\\[calc\\(80vh-120px\\)\\] {\n    max-height: calc(80vh - 120px);\n  }\n  .max-h-\\[calc\\(100vh-64px\\)\\] {\n    max-height: calc(100vh - 64px);\n  }\n  .max-h-\\[calc\\(100vh-128px\\)\\] {\n    max-height: calc(100vh - 128px);\n  }\n  .max-h-\\[calc\\(100vh-300px\\)\\] {\n    max-height: calc(100vh - 300px);\n  }\n  .max-h-\\[calc\\(100vh-428px\\)\\] {\n    max-height: calc(100vh - 428px);\n  }\n  .max-h-\\[calc\\(var\\(--footer-max-height\\)-150px\\)\\] {\n    max-height: calc(var(--footer-max-height) - 150px);\n  }\n  .max-h-\\[min\\(var\\(--available-height\\)\\,24rem\\)\\] {\n    max-height: min(var(--available-height), 24rem);\n  }\n  .max-h-full {\n    max-height: 100%;\n  }\n  .max-h-screen {\n    max-height: 100vh;\n  }\n  .\\!min-h-10 {\n    min-height: calc(var(--spacing) * 10) !important;\n  }\n  .min-h-0 {\n    min-height: calc(var(--spacing) * 0);\n  }\n  .min-h-1 {\n    min-height: calc(var(--spacing) * 1);\n  }\n  .min-h-3 {\n    min-height: calc(var(--spacing) * 3);\n  }\n  .min-h-6 {\n    min-height: calc(var(--spacing) * 6);\n  }\n  .min-h-8 {\n    min-height: calc(var(--spacing) * 8);\n  }\n  .min-h-8\\.5 {\n    min-height: calc(var(--spacing) * 8.5);\n  }\n  .min-h-9 {\n    min-height: calc(var(--spacing) * 9);\n  }\n  .min-h-20 {\n    min-height: calc(var(--spacing) * 20);\n  }\n  .min-h-24 {\n    min-height: calc(var(--spacing) * 24);\n  }\n  .min-h-36 {\n    min-height: calc(var(--spacing) * 36);\n  }\n  .min-h-56 {\n    min-height: calc(var(--spacing) * 56);\n  }\n  .min-h-\\[20px\\] {\n    min-height: 20px;\n  }\n  .min-h-\\[32px\\] {\n    min-height: 32px;\n  }\n  .min-h-\\[42px\\] {\n    min-height: 42px;\n  }\n  .min-h-\\[47\\.5px\\] {\n    min-height: 47.5px;\n  }\n  .min-h-\\[54px\\] {\n    min-height: 54px;\n  }\n  .min-h-\\[58px\\] {\n    min-height: 58px;\n  }\n  .min-h-\\[60vh\\] {\n    min-height: 60vh;\n  }\n  .min-h-\\[135px\\] {\n    min-height: 135px;\n  }\n  .min-h-\\[200px\\] {\n    min-height: 200px;\n  }\n  .min-h-\\[245px\\] {\n    min-height: 245px;\n  }\n  .min-h-\\[350px\\] {\n    min-height: 350px;\n  }\n  .min-h-\\[575px\\] {\n    min-height: 575px;\n  }\n  .min-h-\\[calc\\(100vh-100px\\)\\] {\n    min-height: calc(100vh - 100px);\n  }\n  .min-h-\\[calc\\(100vh-160px\\)\\] {\n    min-height: calc(100vh - 160px);\n  }\n  .min-h-full {\n    min-height: 100%;\n  }\n  .min-h-screen {\n    min-height: 100vh;\n  }\n  .\\!w-1 {\n    width: calc(var(--spacing) * 1) !important;\n  }\n  .\\!w-3\\.5 {\n    width: calc(var(--spacing) * 3.5) !important;\n  }\n  .\\!w-3xl {\n    width: var(--container-3xl) !important;\n  }\n  .\\!w-auto {\n    width: auto !important;\n  }\n  .\\!w-full {\n    width: 100% !important;\n  }\n  .w-\\(--active-tab-width\\) {\n    width: var(--active-tab-width);\n  }\n  .w-0 {\n    width: calc(var(--spacing) * 0);\n  }\n  .w-0\\.5 {\n    width: calc(var(--spacing) * 0.5);\n  }\n  .w-1 {\n    width: calc(var(--spacing) * 1);\n  }\n  .w-1\\.5 {\n    width: calc(var(--spacing) * 1.5);\n  }\n  .w-1\\/2 {\n    width: calc(1/2 * 100%);\n  }\n  .w-1\\/3 {\n    width: calc(1/3 * 100%);\n  }\n  .w-1\\/4 {\n    width: calc(1/4 * 100%);\n  }\n  .w-1\\/5 {\n    width: calc(1/5 * 100%);\n  }\n  .w-1\\/6 {\n    width: calc(1/6 * 100%);\n  }\n  .w-1\\/12 {\n    width: calc(1/12 * 100%);\n  }\n  .w-2 {\n    width: calc(var(--spacing) * 2);\n  }\n  .w-2\\.5 {\n    width: calc(var(--spacing) * 2.5);\n  }\n  .w-2\\/3 {\n    width: calc(2/3 * 100%);\n  }\n  .w-3 {\n    width: calc(var(--spacing) * 3);\n  }\n  .w-3\\.5 {\n    width: calc(var(--spacing) * 3.5);\n  }\n  .w-3xl {\n    width: var(--container-3xl);\n  }\n  .w-4 {\n    width: calc(var(--spacing) * 4);\n  }\n  .w-5 {\n    width: calc(var(--spacing) * 5);\n  }\n  .w-5\\.5 {\n    width: calc(var(--spacing) * 5.5);\n  }\n  .w-6 {\n    width: calc(var(--spacing) * 6);\n  }\n  .w-6xl {\n    width: var(--container-6xl);\n  }\n  .w-7 {\n    width: calc(var(--spacing) * 7);\n  }\n  .w-8 {\n    width: calc(var(--spacing) * 8);\n  }\n  .w-8\\.5 {\n    width: calc(var(--spacing) * 8.5);\n  }\n  .w-9 {\n    width: calc(var(--spacing) * 9);\n  }\n  .w-9\\/10 {\n    width: calc(9/10 * 100%);\n  }\n  .w-10 {\n    width: calc(var(--spacing) * 10);\n  }\n  .w-10\\.5 {\n    width: calc(var(--spacing) * 10.5);\n  }\n  .w-11 {\n    width: calc(var(--spacing) * 11);\n  }\n  .w-12 {\n    width: calc(var(--spacing) * 12);\n  }\n  .w-12\\.5 {\n    width: calc(var(--spacing) * 12.5);\n  }\n  .w-16 {\n    width: calc(var(--spacing) * 16);\n  }\n  .w-20 {\n    width: calc(var(--spacing) * 20);\n  }\n  .w-24 {\n    width: calc(var(--spacing) * 24);\n  }\n  .w-30 {\n    width: calc(var(--spacing) * 30);\n  }\n  .w-32 {\n    width: calc(var(--spacing) * 32);\n  }\n  .w-38 {\n    width: calc(var(--spacing) * 38);\n  }\n  .w-40 {\n    width: calc(var(--spacing) * 40);\n  }\n  .w-42 {\n    width: calc(var(--spacing) * 42);\n  }\n  .w-45 {\n    width: calc(var(--spacing) * 45);\n  }\n  .w-48 {\n    width: calc(var(--spacing) * 48);\n  }\n  .w-60 {\n    width: calc(var(--spacing) * 60);\n  }\n  .w-64 {\n    width: calc(var(--spacing) * 64);\n  }\n  .w-70 {\n    width: calc(var(--spacing) * 70);\n  }\n  .w-74 {\n    width: calc(var(--spacing) * 74);\n  }\n  .w-80 {\n    width: calc(var(--spacing) * 80);\n  }\n  .w-120 {\n    width: calc(var(--spacing) * 120);\n  }\n  .w-\\[10px\\] {\n    width: 10px;\n  }\n  .w-\\[15\\%\\] {\n    width: 15%;\n  }\n  .w-\\[20\\%\\] {\n    width: 20%;\n  }\n  .w-\\[30\\%\\] {\n    width: 30%;\n  }\n  .w-\\[30px\\] {\n    width: 30px;\n  }\n  .w-\\[32px\\] {\n    width: 32px;\n  }\n  .w-\\[57px\\] {\n    width: 57px;\n  }\n  .w-\\[60px\\] {\n    width: 60px;\n  }\n  .w-\\[80px\\] {\n    width: 80px;\n  }\n  .w-\\[90\\%\\] {\n    width: 90%;\n  }\n  .w-\\[125px\\] {\n    width: 125px;\n  }\n  .w-\\[196px\\] {\n    width: 196px;\n  }\n  .w-\\[230px\\] {\n    width: 230px;\n  }\n  .w-\\[250px\\] {\n    width: 250px;\n  }\n  .w-\\[260px\\] {\n    width: 260px;\n  }\n  .w-\\[426px\\] {\n    width: 426px;\n  }\n  .w-\\[446px\\] {\n    width: 446px;\n  }\n  .w-\\[700px\\] {\n    width: 700px;\n  }\n  .w-\\[800px\\] {\n    width: 800px;\n  }\n  .w-\\[1200px\\] {\n    width: 1200px;\n  }\n  .w-\\[1400px\\] {\n    width: 1400px;\n  }\n  .w-\\[calc\\(100\\%\\+12px\\)\\] {\n    width: calc(100% + 12px);\n  }\n  .w-\\[calc\\(100\\%\\+16px\\)\\] {\n    width: calc(100% + 16px);\n  }\n  .w-\\[calc\\(100\\%-14px\\)\\] {\n    width: calc(100% - 14px);\n  }\n  .w-\\[var\\(--anchor-width\\)\\] {\n    width: var(--anchor-width);\n  }\n  .w-\\[var\\(--width\\)\\] {\n    width: var(--width);\n  }\n  .w-auto {\n    width: auto;\n  }\n  .w-fit {\n    width: fit-content;\n  }\n  .w-full {\n    width: 100%;\n  }\n  .w-max {\n    width: max-content;\n  }\n  .w-min {\n    width: min-content;\n  }\n  .w-px {\n    width: 1px;\n  }\n  .w-screen {\n    width: 100vw;\n  }\n  .w-xl {\n    width: var(--container-xl);\n  }\n  .w-xs {\n    width: var(--container-xs);\n  }\n  .\\!max-w-3xl {\n    max-width: var(--container-3xl) !important;\n  }\n  .max-w-\\(--available-width\\) {\n    max-width: var(--available-width);\n  }\n  .max-w-0 {\n    max-width: calc(var(--spacing) * 0);\n  }\n  .max-w-2xl {\n    max-width: var(--container-2xl);\n  }\n  .max-w-2xs {\n    max-width: var(--container-2xs);\n  }\n  .max-w-3xl {\n    max-width: var(--container-3xl);\n  }\n  .max-w-4\\! {\n    max-width: calc(var(--spacing) * 4) !important;\n  }\n  .max-w-5xl {\n    max-width: var(--container-5xl);\n  }\n  .max-w-6xl {\n    max-width: var(--container-6xl);\n  }\n  .max-w-8 {\n    max-width: calc(var(--spacing) * 8);\n  }\n  .max-w-8\\/10 {\n    max-width: calc(8/10 * 100%);\n  }\n  .max-w-9\\/10 {\n    max-width: calc(9/10 * 100%);\n  }\n  .max-w-24 {\n    max-width: calc(var(--spacing) * 24);\n  }\n  .max-w-28 {\n    max-width: calc(var(--spacing) * 28);\n  }\n  .max-w-32 {\n    max-width: calc(var(--spacing) * 32);\n  }\n  .max-w-50 {\n    max-width: calc(var(--spacing) * 50);\n  }\n  .max-w-56 {\n    max-width: calc(var(--spacing) * 56);\n  }\n  .max-w-80 {\n    max-width: calc(var(--spacing) * 80);\n  }\n  .max-w-124 {\n    max-width: calc(var(--spacing) * 124);\n  }\n  .max-w-140 {\n    max-width: calc(var(--spacing) * 140);\n  }\n  .max-w-\\[10ch\\] {\n    max-width: 10ch;\n  }\n  .max-w-\\[30ch\\] {\n    max-width: 30ch;\n  }\n  .max-w-\\[38rem\\] {\n    max-width: 38rem;\n  }\n  .max-w-\\[40ch\\] {\n    max-width: 40ch;\n  }\n  .max-w-\\[60ch\\] {\n    max-width: 60ch;\n  }\n  .max-w-\\[70ch\\] {\n    max-width: 70ch;\n  }\n  .max-w-\\[90vw\\] {\n    max-width: 90vw;\n  }\n  .max-w-\\[155px\\] {\n    max-width: 155px;\n  }\n  .max-w-\\[167px\\] {\n    max-width: 167px;\n  }\n  .max-w-\\[180px\\] {\n    max-width: 180px;\n  }\n  .max-w-\\[200ch\\] {\n    max-width: 200ch;\n  }\n  .max-w-\\[200px\\] {\n    max-width: 200px;\n  }\n  .max-w-\\[216px\\] {\n    max-width: 216px;\n  }\n  .max-w-\\[260px\\] {\n    max-width: 260px;\n  }\n  .max-w-\\[350px\\] {\n    max-width: 350px;\n  }\n  .max-w-\\[365px\\] {\n    max-width: 365px;\n  }\n  .max-w-\\[400px\\] {\n    max-width: 400px;\n  }\n  .max-w-\\[500px\\] {\n    max-width: 500px;\n  }\n  .max-w-\\[640px\\] {\n    max-width: 640px;\n  }\n  .max-w-\\[800px\\] {\n    max-width: 800px;\n  }\n  .max-w-\\[920px\\] {\n    max-width: 920px;\n  }\n  .max-w-\\[950px\\] {\n    max-width: 950px;\n  }\n  .max-w-\\[1000px\\] {\n    max-width: 1000px;\n  }\n  .max-w-\\[1200px\\] {\n    max-width: 1200px;\n  }\n  .max-w-\\[1300px\\] {\n    max-width: 1300px;\n  }\n  .max-w-\\[1348px\\] {\n    max-width: 1348px;\n  }\n  .max-w-\\[1400px\\] {\n    max-width: 1400px;\n  }\n  .max-w-\\[1800px\\] {\n    max-width: 1800px;\n  }\n  .max-w-\\[2000px\\] {\n    max-width: 2000px;\n  }\n  .max-w-\\[calc\\(100\\%-32px\\)\\] {\n    max-width: calc(100% - 32px);\n  }\n  .max-w-\\[calc\\(100vw-3rem\\)\\] {\n    max-width: calc(100vw - 3rem);\n  }\n  .max-w-fit {\n    max-width: fit-content;\n  }\n  .max-w-full {\n    max-width: 100%;\n  }\n  .max-w-lg {\n    max-width: var(--container-lg);\n  }\n  .max-w-md {\n    max-width: var(--container-md);\n  }\n  .max-w-xl {\n    max-width: var(--container-xl);\n  }\n  .max-w-xs {\n    max-width: var(--container-xs);\n  }\n  .min-w-\\(--anchor-width\\) {\n    min-width: var(--anchor-width);\n  }\n  .min-w-0 {\n    min-width: calc(var(--spacing) * 0);\n  }\n  .min-w-3 {\n    min-width: calc(var(--spacing) * 3);\n  }\n  .min-w-4\\.5 {\n    min-width: calc(var(--spacing) * 4.5);\n  }\n  .min-w-5 {\n    min-width: calc(var(--spacing) * 5);\n  }\n  .min-w-8 {\n    min-width: calc(var(--spacing) * 8);\n  }\n  .min-w-20 {\n    min-width: calc(var(--spacing) * 20);\n  }\n  .min-w-24 {\n    min-width: calc(var(--spacing) * 24);\n  }\n  .min-w-30 {\n    min-width: calc(var(--spacing) * 30);\n  }\n  .min-w-32 {\n    min-width: calc(var(--spacing) * 32);\n  }\n  .min-w-36 {\n    min-width: calc(var(--spacing) * 36);\n  }\n  .min-w-40 {\n    min-width: calc(var(--spacing) * 40);\n  }\n  .min-w-42 {\n    min-width: calc(var(--spacing) * 42);\n  }\n  .min-w-44 {\n    min-width: calc(var(--spacing) * 44);\n  }\n  .min-w-48 {\n    min-width: calc(var(--spacing) * 48);\n  }\n  .min-w-50 {\n    min-width: calc(var(--spacing) * 50);\n  }\n  .min-w-52 {\n    min-width: calc(var(--spacing) * 52);\n  }\n  .min-w-60 {\n    min-width: calc(var(--spacing) * 60);\n  }\n  .min-w-64 {\n    min-width: calc(var(--spacing) * 64);\n  }\n  .min-w-80 {\n    min-width: calc(var(--spacing) * 80);\n  }\n  .min-w-96 {\n    min-width: calc(var(--spacing) * 96);\n  }\n  .min-w-\\[3px\\] {\n    min-width: 3px;\n  }\n  .min-w-\\[8rem\\] {\n    min-width: 8rem;\n  }\n  .min-w-\\[9px\\] {\n    min-width: 9px;\n  }\n  .min-w-\\[9rem\\] {\n    min-width: 9rem;\n  }\n  .min-w-\\[44px\\] {\n    min-width: 44px;\n  }\n  .min-w-\\[60px\\] {\n    min-width: 60px;\n  }\n  .min-w-\\[62px\\] {\n    min-width: 62px;\n  }\n  .min-w-\\[150px\\] {\n    min-width: 150px;\n  }\n  .min-w-\\[170px\\] {\n    min-width: 170px;\n  }\n  .min-w-\\[200px\\] {\n    min-width: 200px;\n  }\n  .min-w-\\[220px\\] {\n    min-width: 220px;\n  }\n  .min-w-\\[250px\\] {\n    min-width: 250px;\n  }\n  .min-w-\\[280px\\] {\n    min-width: 280px;\n  }\n  .min-w-\\[720px\\] {\n    min-width: 720px;\n  }\n  .min-w-\\[800px\\] {\n    min-width: 800px;\n  }\n  .min-w-\\[calc\\(var\\(--anchor-width\\)\\+3px\\)\\] {\n    min-width: calc(var(--anchor-width) + 3px);\n  }\n  .min-w-\\[var\\(--trigger-width\\)\\] {\n    min-width: var(--trigger-width);\n  }\n  .min-w-fit {\n    min-width: fit-content;\n  }\n  .min-w-max {\n    min-width: max-content;\n  }\n  .min-w-sm {\n    min-width: var(--container-sm);\n  }\n  .min-w-xl {\n    min-width: var(--container-xl);\n  }\n  .min-w-xs {\n    min-width: var(--container-xs);\n  }\n  .flex-0 {\n    flex: 0;\n  }\n  .flex-1 {\n    flex: 1;\n  }\n  .flex-2 {\n    flex: 2;\n  }\n  .flex-\\[1_1_40ch\\] {\n    flex: 1 1 40ch;\n  }\n  .flex-\\[1_1_auto\\] {\n    flex: 1 1 auto;\n  }\n  .flex-auto {\n    flex: auto;\n  }\n  .flex-initial {\n    flex: 0 auto;\n  }\n  .flex-none {\n    flex: none;\n  }\n  .flex-shrink {\n    flex-shrink: 1;\n  }\n  .flex-shrink-0 {\n    flex-shrink: 0;\n  }\n  .flex-shrink-\\[2\\] {\n    flex-shrink: 2;\n  }\n  .shrink {\n    flex-shrink: 1;\n  }\n  .shrink-0 {\n    flex-shrink: 0;\n  }\n  .flex-grow {\n    flex-grow: 1;\n  }\n  .flex-grow-0 {\n    flex-grow: 0;\n  }\n  .grow {\n    flex-grow: 1;\n  }\n  .grow-0 {\n    flex-grow: 0;\n  }\n  .grow-1 {\n    flex-grow: 1;\n  }\n  .basis-0 {\n    flex-basis: calc(var(--spacing) * 0);\n  }\n  .basis-1\\/2 {\n    flex-basis: calc(1/2 * 100%);\n  }\n  .basis-40 {\n    flex-basis: calc(var(--spacing) * 40);\n  }\n  .basis-full {\n    flex-basis: 100%;\n  }\n  .border-collapse {\n    border-collapse: collapse;\n  }\n  .origin-\\[var\\(--transform-origin\\)\\] {\n    transform-origin: var(--transform-origin);\n  }\n  .origin-bottom {\n    transform-origin: bottom;\n  }\n  .origin-center {\n    transform-origin: center;\n  }\n  .origin-left {\n    transform-origin: 0;\n  }\n  .-translate-x-1\\/2 {\n    --tw-translate-x: calc(calc(1/2 * 100%) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-x-2 {\n    --tw-translate-x: calc(var(--spacing) * -2);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-x-4 {\n    --tw-translate-x: calc(var(--spacing) * -4);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-0 {\n    --tw-translate-x: calc(var(--spacing) * 0);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-4 {\n    --tw-translate-x: calc(var(--spacing) * 4);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-5 {\n    --tw-translate-x: calc(var(--spacing) * 5);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-16 {\n    --tw-translate-x: calc(var(--spacing) * 16);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-full {\n    --tw-translate-x: 100%;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-0\\.75 {\n    --tw-translate-y: calc(var(--spacing) * -0.75);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-1 {\n    --tw-translate-y: calc(var(--spacing) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-1\\/2 {\n    --tw-translate-y: calc(calc(1/2 * 100%) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-16 {\n    --tw-translate-y: calc(var(--spacing) * -16);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-px {\n    --tw-translate-y: -1px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-0 {\n    --tw-translate-y: calc(var(--spacing) * 0);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-0\\.5 {\n    --tw-translate-y: calc(var(--spacing) * 0.5);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-1 {\n    --tw-translate-y: calc(var(--spacing) * 1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-1\\.5 {\n    --tw-translate-y: calc(var(--spacing) * 1.5);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-\\[2px\\] {\n    --tw-translate-y: 2px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-\\[calc\\(-50\\%-1px\\)\\] {\n    --tw-translate-y: calc(-50% - 1px);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-px {\n    --tw-translate-y: 1px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .scale-50 {\n    --tw-scale-x: 50%;\n    --tw-scale-y: 50%;\n    --tw-scale-z: 50%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-75 {\n    --tw-scale-x: 75%;\n    --tw-scale-y: 75%;\n    --tw-scale-z: 75%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-80 {\n    --tw-scale-x: 80%;\n    --tw-scale-y: 80%;\n    --tw-scale-z: 80%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-95 {\n    --tw-scale-x: 95%;\n    --tw-scale-y: 95%;\n    --tw-scale-z: 95%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-100 {\n    --tw-scale-x: 100%;\n    --tw-scale-y: 100%;\n    --tw-scale-z: 100%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-105 {\n    --tw-scale-x: 105%;\n    --tw-scale-y: 105%;\n    --tw-scale-z: 105%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .-scale-x-100 {\n    --tw-scale-x: calc(100% * -1);\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-x-0 {\n    --tw-scale-x: 0%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-x-100 {\n    --tw-scale-x: 100%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-y-0 {\n    --tw-scale-y: 0%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-y-100 {\n    --tw-scale-y: 100%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-\\[0\\.85\\] {\n    scale: 0.85;\n  }\n  .-rotate-90 {\n    rotate: calc(90deg * -1);\n  }\n  .-rotate-180 {\n    rotate: calc(180deg * -1);\n  }\n  .rotate-45 {\n    rotate: 45deg;\n  }\n  .rotate-90 {\n    rotate: 90deg;\n  }\n  .rotate-180 {\n    rotate: 180deg;\n  }\n  .\\[transform\\:translateX\\(var\\(--toast-swipe-movement-x\\)\\)_translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)-\\(var\\(--toast-index\\)\\*var\\(--peek\\)\\)-\\(var\\(--shrink\\)\\*var\\(--height\\)\\)\\)\\)_scale\\(var\\(--scale\\)\\)\\] {\n    transform: translateX(var(--toast-swipe-movement-x)) translateY(calc(var(--toast-swipe-movement-y) - (var(--toast-index) * var(--peek)) - (var(--shrink) * var(--height)))) scale(var(--scale));\n  }\n  .transform {\n    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);\n  }\n  .transform-gpu {\n    transform: translateZ(0) var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);\n  }\n  .animate-pulse {\n    animation: var(--animate-pulse);\n  }\n  .animate-refresh {\n    animation: var(--animate-refresh);\n  }\n  .animate-right {\n    animation: var(--animate-right);\n  }\n  .animate-spin {\n    animation: var(--animate-spin);\n  }\n  .\\!cursor-not-allowed {\n    cursor: not-allowed !important;\n  }\n  .cursor-col-resize {\n    cursor: col-resize;\n  }\n  .cursor-default {\n    cursor: default;\n  }\n  .cursor-default\\! {\n    cursor: default !important;\n  }\n  .cursor-ew-resize {\n    cursor: ew-resize;\n  }\n  .cursor-grab {\n    cursor: grab;\n  }\n  .cursor-grabbing {\n    cursor: grabbing;\n  }\n  .cursor-help {\n    cursor: help;\n  }\n  .cursor-move {\n    cursor: move;\n  }\n  .cursor-not-allowed {\n    cursor: not-allowed;\n  }\n  .cursor-pointer {\n    cursor: pointer;\n  }\n  .cursor-text {\n    cursor: text;\n  }\n  .cursor-wait {\n    cursor: wait;\n  }\n  .touch-none {\n    touch-action: none;\n  }\n  .resize {\n    resize: both;\n  }\n  .resize-none {\n    resize: none;\n  }\n  .resize-y {\n    resize: vertical;\n  }\n  .snap-x {\n    scroll-snap-type: x var(--tw-scroll-snap-strictness);\n  }\n  .snap-mandatory {\n    --tw-scroll-snap-strictness: mandatory;\n  }\n  .snap-center {\n    scroll-snap-align: center;\n  }\n  .scroll-pt-2 {\n    scroll-padding-top: calc(var(--spacing) * 2);\n  }\n  .scroll-pr-4 {\n    scroll-padding-right: calc(var(--spacing) * 4);\n  }\n  .scroll-pb-2 {\n    scroll-padding-bottom: calc(var(--spacing) * 2);\n  }\n  .list-inside {\n    list-style-position: inside;\n  }\n  .\\!list-none {\n    list-style-type: none !important;\n  }\n  .list-decimal {\n    list-style-type: decimal;\n  }\n  .list-disc {\n    list-style-type: disc;\n  }\n  .list-none {\n    list-style-type: none;\n  }\n  .appearance-none {\n    appearance: none;\n  }\n  .grid-flow-col {\n    grid-auto-flow: column;\n  }\n  .grid-flow-dense {\n    grid-auto-flow: dense;\n  }\n  .grid-flow-row {\n    grid-auto-flow: row;\n  }\n  .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n  .grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n  .grid-cols-\\[1fr\\] {\n    grid-template-columns: 1fr;\n  }\n  .grid-cols-\\[1fr_1fr_2fr\\] {\n    grid-template-columns: 1fr 1fr 2fr;\n  }\n  .grid-cols-\\[1fr_3fr\\] {\n    grid-template-columns: 1fr 3fr;\n  }\n  .grid-cols-\\[1fr_16px\\] {\n    grid-template-columns: 1fr 16px;\n  }\n  .grid-cols-\\[1fr_24px\\] {\n    grid-template-columns: 1fr 24px;\n  }\n  .grid-cols-\\[1fr_auto\\] {\n    grid-template-columns: 1fr auto;\n  }\n  .grid-cols-\\[3fr_1fr\\] {\n    grid-template-columns: 3fr 1fr;\n  }\n  .grid-cols-\\[3fr_1fr_1fr\\] {\n    grid-template-columns: 3fr 1fr 1fr;\n  }\n  .grid-cols-\\[20rem_minmax\\(50rem\\,_1fr\\)\\] {\n    grid-template-columns: 20rem minmax(50rem, 1fr);\n  }\n  .grid-cols-\\[50px_minmax\\(325px\\,1fr\\)_200px_200px_100px_auto\\] {\n    grid-template-columns: 50px minmax(325px,1fr) 200px 200px 100px auto;\n  }\n  .grid-cols-\\[200px_1fr\\] {\n    grid-template-columns: 200px 1fr;\n  }\n  .grid-cols-\\[320px_1fr\\] {\n    grid-template-columns: 320px 1fr;\n  }\n  .grid-cols-\\[auto_1fr\\] {\n    grid-template-columns: auto 1fr;\n  }\n  .grid-cols-\\[max-content_1fr\\] {\n    grid-template-columns: max-content 1fr;\n  }\n  .grid-cols-\\[repeat\\(auto-fit\\,minmax\\(250px\\,1fr\\)\\)\\] {\n    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));\n  }\n  .grid-cols-\\[var\\(--cols\\)\\] {\n    grid-template-columns: var(--cols);\n  }\n  .grid-rows-5 {\n    grid-template-rows: repeat(5, minmax(0, 1fr));\n  }\n  .grid-rows-\\[0fr\\] {\n    grid-template-rows: 0fr;\n  }\n  .grid-rows-\\[1fr\\] {\n    grid-template-rows: 1fr;\n  }\n  .grid-rows-\\[3\\.25rem_1fr\\] {\n    grid-template-rows: 3.25rem 1fr;\n  }\n  .grid-rows-subgrid {\n    grid-template-rows: subgrid;\n  }\n  .\\!flex-row {\n    flex-direction: row !important;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .flex-col-reverse {\n    flex-direction: column-reverse;\n  }\n  .flex-row {\n    flex-direction: row;\n  }\n  .flex-row-reverse {\n    flex-direction: row-reverse;\n  }\n  .flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n  .place-content-center {\n    place-content: center;\n  }\n  .place-items-center {\n    place-items: center;\n  }\n  .place-items-stretch {\n    place-items: stretch;\n  }\n  .content-center {\n    align-content: center;\n  }\n  .items-baseline {\n    align-items: baseline;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .items-end {\n    align-items: flex-end;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .items-stretch {\n    align-items: stretch;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .justify-end {\n    justify-content: flex-end;\n  }\n  .justify-start {\n    justify-content: flex-start;\n  }\n  .justify-stretch {\n    justify-content: stretch;\n  }\n  .\\!gap-4 {\n    gap: calc(var(--spacing) * 4) !important;\n  }\n  .gap-0 {\n    gap: calc(var(--spacing) * 0);\n  }\n  .gap-0\\.5 {\n    gap: calc(var(--spacing) * 0.5);\n  }\n  .gap-1 {\n    gap: calc(var(--spacing) * 1);\n  }\n  .gap-1\\.5 {\n    gap: calc(var(--spacing) * 1.5);\n  }\n  .gap-2 {\n    gap: calc(var(--spacing) * 2);\n  }\n  .gap-2\\.5 {\n    gap: calc(var(--spacing) * 2.5);\n  }\n  .gap-3 {\n    gap: calc(var(--spacing) * 3);\n  }\n  .gap-3\\.5 {\n    gap: calc(var(--spacing) * 3.5);\n  }\n  .gap-4 {\n    gap: calc(var(--spacing) * 4);\n  }\n  .gap-4\\.5 {\n    gap: calc(var(--spacing) * 4.5);\n  }\n  .gap-5 {\n    gap: calc(var(--spacing) * 5);\n  }\n  .gap-6 {\n    gap: calc(var(--spacing) * 6);\n  }\n  .gap-6\\.5 {\n    gap: calc(var(--spacing) * 6.5);\n  }\n  .gap-7 {\n    gap: calc(var(--spacing) * 7);\n  }\n  .gap-8 {\n    gap: calc(var(--spacing) * 8);\n  }\n  .gap-12 {\n    gap: calc(var(--spacing) * 12);\n  }\n  .gap-\\[1ch\\] {\n    gap: 1ch;\n  }\n  .gap-\\[1px\\] {\n    gap: 1px;\n  }\n  .gap-\\[7px\\] {\n    gap: 7px;\n  }\n  .gap-\\[8px\\] {\n    gap: 8px;\n  }\n  .space-y-0\\.5 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 0.5) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 0.5) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-1 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-2 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-2\\.5 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-3 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-4 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-6 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-8 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-\\[var\\(--gap\\)\\] {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(var(--gap) * var(--tw-space-y-reverse));\n      margin-block-end: calc(var(--gap) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .gap-x-2 {\n    column-gap: calc(var(--spacing) * 2);\n  }\n  .space-x-1 {\n    :where(& > :not(:last-child)) {\n      --tw-space-x-reverse: 0;\n      margin-inline-start: calc(calc(var(--spacing) * 1) * var(--tw-space-x-reverse));\n      margin-inline-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-x-reverse)));\n    }\n  }\n  .space-x-2 {\n    :where(& > :not(:last-child)) {\n      --tw-space-x-reverse: 0;\n      margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));\n      margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));\n    }\n  }\n  .space-x-3 {\n    :where(& > :not(:last-child)) {\n      --tw-space-x-reverse: 0;\n      margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));\n      margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));\n    }\n  }\n  .space-x-4 {\n    :where(& > :not(:last-child)) {\n      --tw-space-x-reverse: 0;\n      margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));\n      margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));\n    }\n  }\n  .gap-y-0 {\n    row-gap: calc(var(--spacing) * 0);\n  }\n  .gap-y-0\\.5 {\n    row-gap: calc(var(--spacing) * 0.5);\n  }\n  .gap-y-1 {\n    row-gap: calc(var(--spacing) * 1);\n  }\n  .divide-x {\n    :where(& > :not(:last-child)) {\n      --tw-divide-x-reverse: 0;\n      border-inline-style: var(--tw-border-style);\n      border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));\n      border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n    }\n  }\n  .divide-y {\n    :where(& > :not(:last-child)) {\n      --tw-divide-y-reverse: 0;\n      border-bottom-style: var(--tw-border-style);\n      border-top-style: var(--tw-border-style);\n      border-top-width: calc(1px * var(--tw-divide-y-reverse));\n      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n    }\n  }\n  .divide-accent {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-accent);\n    }\n  }\n  .divide-border {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-border);\n    }\n  }\n  .divide-cl1-red-8 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-cl1-red-8);\n    }\n  }\n  .divide-gray-200 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-gray-200);\n    }\n  }\n  .divide-gray-300 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-gray-300);\n    }\n  }\n  .divide-neutral-100 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-neutral-100);\n    }\n  }\n  .divide-neutral-200 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-neutral-200);\n    }\n  }\n  .divide-neutral-250 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-neutral-250);\n    }\n  }\n  .divide-neutral-300 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-neutral-300);\n    }\n  }\n  .divide-neutral-950\\/10 {\n    :where(& > :not(:last-child)) {\n      border-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n      }\n    }\n  }\n  .place-self-end {\n    place-self: end;\n  }\n  .self-center {\n    align-self: center;\n  }\n  .self-end {\n    align-self: flex-end;\n  }\n  .self-start {\n    align-self: flex-start;\n  }\n  .self-stretch {\n    align-self: stretch;\n  }\n  .justify-self-center {\n    justify-self: center;\n  }\n  .justify-self-end {\n    justify-self: flex-end;\n  }\n  .justify-self-start {\n    justify-self: flex-start;\n  }\n  .truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .\\!overflow-visible {\n    overflow: visible !important;\n  }\n  .overflow-auto {\n    overflow: auto;\n  }\n  .overflow-clip {\n    overflow: clip;\n  }\n  .overflow-hidden {\n    overflow: hidden;\n  }\n  .overflow-scroll {\n    overflow: scroll;\n  }\n  .overflow-visible {\n    overflow: visible;\n  }\n  .overflow-visible\\! {\n    overflow: visible !important;\n  }\n  .overflow-x-auto {\n    overflow-x: auto;\n  }\n  .overflow-x-hidden {\n    overflow-x: hidden;\n  }\n  .overflow-x-scroll {\n    overflow-x: scroll;\n  }\n  .overflow-x-visible {\n    overflow-x: visible;\n  }\n  .\\!overflow-y-auto {\n    overflow-y: auto !important;\n  }\n  .overflow-y-auto {\n    overflow-y: auto;\n  }\n  .overflow-y-hidden {\n    overflow-y: hidden;\n  }\n  .overflow-y-scroll {\n    overflow-y: scroll;\n  }\n  .overscroll-contain {\n    overscroll-behavior: contain;\n  }\n  .\\!rounded {\n    border-radius: 0.25rem !important;\n  }\n  .\\!rounded-lg {\n    border-radius: var(--radius-lg) !important;\n  }\n  .\\!rounded-none {\n    border-radius: 0 !important;\n  }\n  .rounded {\n    border-radius: 0.25rem;\n  }\n  .rounded-2xl {\n    border-radius: var(--radius-2xl);\n  }\n  .rounded-3xl {\n    border-radius: var(--radius-3xl);\n  }\n  .rounded-\\[10px\\] {\n    border-radius: 10px;\n  }\n  .rounded-\\[inherit\\] {\n    border-radius: inherit;\n  }\n  .rounded-full {\n    border-radius: calc(infinity * 1px);\n  }\n  .rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .rounded-md {\n    border-radius: var(--radius-md);\n  }\n  .rounded-none {\n    border-radius: 0;\n  }\n  .rounded-sm {\n    border-radius: var(--radius-sm);\n  }\n  .rounded-xl {\n    border-radius: var(--radius-xl);\n  }\n  .rounded-xl\\! {\n    border-radius: var(--radius-xl) !important;\n  }\n  .rounded-xs {\n    border-radius: var(--radius-xs);\n  }\n  .\\!rounded-t-none {\n    border-top-left-radius: 0 !important;\n    border-top-right-radius: 0 !important;\n  }\n  .rounded-t {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n  }\n  .rounded-t-\\[10px\\] {\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n  }\n  .rounded-t-lg {\n    border-top-left-radius: var(--radius-lg);\n    border-top-right-radius: var(--radius-lg);\n  }\n  .rounded-l {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n  .rounded-l-\\[50px\\] {\n    border-top-left-radius: 50px;\n    border-bottom-left-radius: 50px;\n  }\n  .rounded-l-none {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .rounded-l-sm {\n    border-top-left-radius: var(--radius-sm);\n    border-bottom-left-radius: var(--radius-sm);\n  }\n  .rounded-tl-\\[5px\\] {\n    border-top-left-radius: 5px;\n  }\n  .rounded-tl-lg {\n    border-top-left-radius: var(--radius-lg);\n  }\n  .rounded-tl-none {\n    border-top-left-radius: 0;\n  }\n  .rounded-r {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n  }\n  .rounded-r-md {\n    border-top-right-radius: var(--radius-md);\n    border-bottom-right-radius: var(--radius-md);\n  }\n  .rounded-r-none {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .rounded-tr-\\[5px\\] {\n    border-top-right-radius: 5px;\n  }\n  .rounded-tr-lg {\n    border-top-right-radius: var(--radius-lg);\n  }\n  .rounded-tr-none {\n    border-top-right-radius: 0;\n  }\n  .rounded-b {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n  .rounded-b-lg {\n    border-bottom-right-radius: var(--radius-lg);\n    border-bottom-left-radius: var(--radius-lg);\n  }\n  .\\!rounded-br-none {\n    border-bottom-right-radius: 0 !important;\n  }\n  .rounded-br-\\[5px\\] {\n    border-bottom-right-radius: 5px;\n  }\n  .rounded-br-lg {\n    border-bottom-right-radius: var(--radius-lg);\n  }\n  .rounded-bl-\\[5px\\] {\n    border-bottom-left-radius: 5px;\n  }\n  .rounded-bl-lg {\n    border-bottom-left-radius: var(--radius-lg);\n  }\n  .\\!border {\n    border-style: var(--tw-border-style) !important;\n    border-width: 1px !important;\n  }\n  .\\!border-0 {\n    border-style: var(--tw-border-style) !important;\n    border-width: 0px !important;\n  }\n  .border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .border-0 {\n    border-style: var(--tw-border-style);\n    border-width: 0px;\n  }\n  .border-0\\! {\n    border-style: var(--tw-border-style) !important;\n    border-width: 0px !important;\n  }\n  .border-1 {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .border-2 {\n    border-style: var(--tw-border-style);\n    border-width: 2px;\n  }\n  .border-4 {\n    border-style: var(--tw-border-style);\n    border-width: 4px;\n  }\n  .border-\\[0\\.5px\\] {\n    border-style: var(--tw-border-style);\n    border-width: 0.5px;\n  }\n  .border-x {\n    border-inline-style: var(--tw-border-style);\n    border-inline-width: 1px;\n  }\n  .border-x-0 {\n    border-inline-style: var(--tw-border-style);\n    border-inline-width: 0px;\n  }\n  .\\!border-y-0 {\n    border-block-style: var(--tw-border-style) !important;\n    border-block-width: 0px !important;\n  }\n  .border-y {\n    border-block-style: var(--tw-border-style);\n    border-block-width: 1px;\n  }\n  .border-y-0 {\n    border-block-style: var(--tw-border-style);\n    border-block-width: 0px;\n  }\n  .border-t {\n    border-top-style: var(--tw-border-style);\n    border-top-width: 1px;\n  }\n  .border-t-0 {\n    border-top-style: var(--tw-border-style);\n    border-top-width: 0px;\n  }\n  .\\!border-r {\n    border-right-style: var(--tw-border-style) !important;\n    border-right-width: 1px !important;\n  }\n  .border-r {\n    border-right-style: var(--tw-border-style);\n    border-right-width: 1px;\n  }\n  .border-r-0 {\n    border-right-style: var(--tw-border-style);\n    border-right-width: 0px;\n  }\n  .border-b {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 1px;\n  }\n  .border-b-0 {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 0px;\n  }\n  .border-b-1 {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 1px;\n  }\n  .border-b-4 {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 4px;\n  }\n  .\\!border-l {\n    border-left-style: var(--tw-border-style) !important;\n    border-left-width: 1px !important;\n  }\n  .\\!border-l-0 {\n    border-left-style: var(--tw-border-style) !important;\n    border-left-width: 0px !important;\n  }\n  .border-l {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 1px;\n  }\n  .border-l\\! {\n    border-left-style: var(--tw-border-style) !important;\n    border-left-width: 1px !important;\n  }\n  .border-l-0 {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 0px;\n  }\n  .border-l-1 {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 1px;\n  }\n  .border-l-2 {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 2px;\n  }\n  .border-l-4 {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 4px;\n  }\n  .\\!border-none {\n    --tw-border-style: none !important;\n    border-style: none !important;\n  }\n  .border-dashed {\n    --tw-border-style: dashed;\n    border-style: dashed;\n  }\n  .border-dotted {\n    --tw-border-style: dotted;\n    border-style: dotted;\n  }\n  .border-none {\n    --tw-border-style: none;\n    border-style: none;\n  }\n  .border-solid {\n    --tw-border-style: solid;\n    border-style: solid;\n  }\n  .\\!border-blue-500 {\n    border-color: var(--color-blue-500) !important;\n  }\n  .\\!border-blue-600 {\n    border-color: var(--color-blue-600) !important;\n  }\n  .\\!border-border {\n    border-color: var(--color-border) !important;\n  }\n  .\\!border-neutral-200 {\n    border-color: var(--color-neutral-200) !important;\n  }\n  .\\!border-neutral-300 {\n    border-color: var(--color-neutral-300) !important;\n  }\n  .border-\\[\\#8d1eb1\\] {\n    border-color: #8d1eb1;\n  }\n  .border-\\[\\#4794FF\\] {\n    border-color: #4794FF;\n  }\n  .border-\\[\\#B6B6B6\\] {\n    border-color: #B6B6B6;\n  }\n  .border-\\[\\#CCCCCC66\\] {\n    border-color: #CCCCCC66;\n  }\n  .border-\\[\\#F42500\\] {\n    border-color: #F42500;\n  }\n  .border-\\[\\#c05d08\\] {\n    border-color: #c05d08;\n  }\n  .border-\\[\\#e80954\\] {\n    border-color: #e80954;\n  }\n  .border-\\[var\\(--kumo-muted-foreground\\)\\] {\n    border-color: var(--kumo-muted-foreground);\n  }\n  .border-accent {\n    border-color: var(--color-accent);\n  }\n  .border-active {\n    border-color: var(--color-active);\n  }\n  .border-blue-100 {\n    border-color: var(--color-blue-100);\n  }\n  .border-blue-200 {\n    border-color: var(--color-blue-200);\n  }\n  .border-blue-300 {\n    border-color: var(--color-blue-300);\n  }\n  .border-blue-400 {\n    border-color: var(--color-blue-400);\n  }\n  .border-blue-500 {\n    border-color: var(--color-blue-500);\n  }\n  .border-blue-600 {\n    border-color: var(--color-blue-600);\n  }\n  .border-blue-600\\/20 {\n    border-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-blue-600) 20%, transparent);\n    }\n  }\n  .border-blue-600\\/25 {\n    border-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-blue-600) 25%, transparent);\n    }\n  }\n  .border-blue-600\\/40 {\n    border-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 40%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-blue-600) 40%, transparent);\n    }\n  }\n  .border-border {\n    border-color: var(--color-border);\n  }\n  .border-border\\/50 {\n    border-color: var(--color-border);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-border) 50%, transparent);\n    }\n  }\n  .border-border\\/60 {\n    border-color: var(--color-border);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-border) 60%, transparent);\n    }\n  }\n  .border-border\\/80 {\n    border-color: var(--color-border);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-border) 80%, transparent);\n    }\n  }\n  .border-cl1-blue-4 {\n    border-color: var(--color-cl1-blue-4);\n  }\n  .border-cl1-gold-5 {\n    border-color: var(--color-cl1-gold-5);\n  }\n  .border-cl1-gold-7 {\n    border-color: var(--color-cl1-gold-7);\n  }\n  .border-cl1-gray-3 {\n    border-color: var(--color-cl1-gray-3);\n  }\n  .border-cl1-gray-4 {\n    border-color: var(--color-cl1-gray-4);\n  }\n  .border-cl1-gray-6 {\n    border-color: var(--color-cl1-gray-6);\n  }\n  .border-cl1-gray-7 {\n    border-color: var(--color-cl1-gray-7);\n  }\n  .border-cl1-gray-8 {\n    border-color: var(--color-cl1-gray-8);\n  }\n  .border-cl1-red-3 {\n    border-color: var(--color-cl1-red-3);\n  }\n  .border-cl1-red-4 {\n    border-color: var(--color-cl1-red-4);\n  }\n  .border-cl1-red-6 {\n    border-color: var(--color-cl1-red-6);\n  }\n  .border-cl1-red-7 {\n    border-color: var(--color-cl1-red-7);\n  }\n  .border-color {\n    border-color: var(--color-color);\n  }\n  .border-destructive {\n    border-color: var(--color-destructive);\n  }\n  .border-gray-200 {\n    border-color: var(--color-gray-200);\n  }\n  .border-gray-300 {\n    border-color: var(--color-gray-300);\n  }\n  .border-green-200 {\n    border-color: var(--color-green-200);\n  }\n  .border-green-300 {\n    border-color: var(--color-green-300);\n  }\n  .border-kumo-alert-border {\n    border-color: var(--color-kumo-alert-border);\n  }\n  .border-kumo-color {\n    border-color: var(--color-kumo-color);\n  }\n  .border-kumo-error-border {\n    border-color: var(--color-kumo-error-border);\n  }\n  .border-kumo-info-border {\n    border-color: var(--color-kumo-info-border);\n  }\n  .border-kumo-primary {\n    border-color: var(--color-kumo-primary);\n  }\n  .border-neutral-100 {\n    border-color: var(--color-neutral-100);\n  }\n  .border-neutral-100\\! {\n    border-color: var(--color-neutral-100) !important;\n  }\n  .border-neutral-150 {\n    border-color: var(--color-neutral-150);\n  }\n  .border-neutral-200 {\n    border-color: var(--color-neutral-200);\n  }\n  .border-neutral-200\\! {\n    border-color: var(--color-neutral-200) !important;\n  }\n  .border-neutral-200\\/60 {\n    border-color: color-mix(in srgb, oklch(92.2% 0 0) 60%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-neutral-200) 60%, transparent);\n    }\n  }\n  .border-neutral-200\\/70 {\n    border-color: color-mix(in srgb, oklch(92.2% 0 0) 70%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-neutral-200) 70%, transparent);\n    }\n  }\n  .border-neutral-250 {\n    border-color: var(--color-neutral-250);\n  }\n  .border-neutral-300 {\n    border-color: var(--color-neutral-300);\n  }\n  .border-neutral-300\\/75 {\n    border-color: color-mix(in srgb, oklch(87% 0 0) 75%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-neutral-300) 75%, transparent);\n    }\n  }\n  .border-neutral-400 {\n    border-color: var(--color-neutral-400);\n  }\n  .border-neutral-600 {\n    border-color: var(--color-neutral-600);\n  }\n  .border-neutral-800\\/10 {\n    border-color: color-mix(in srgb, oklch(26.9% 0 0) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-neutral-800) 10%, transparent);\n    }\n  }\n  .border-neutral-900 {\n    border-color: var(--color-neutral-900);\n  }\n  .border-neutral-950\\/10 {\n    border-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n    }\n  }\n  .border-neutral-950\\/15 {\n    border-color: color-mix(in srgb, oklch(14.5% 0 0) 15%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-neutral-950) 15%, transparent);\n    }\n  }\n  .border-orange-200 {\n    border-color: var(--color-orange-200);\n  }\n  .border-primary {\n    border-color: var(--color-primary);\n  }\n  .border-red-200 {\n    border-color: var(--color-red-200);\n  }\n  .border-red-300 {\n    border-color: var(--color-red-300);\n  }\n  .border-red-400 {\n    border-color: var(--color-red-400);\n  }\n  .border-red-500 {\n    border-color: var(--color-red-500);\n  }\n  .border-red-600\\/25 {\n    border-color: color-mix(in srgb, oklch(57.7% 0.245 27.325) 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-red-600) 25%, transparent);\n    }\n  }\n  .border-red-700 {\n    border-color: var(--color-red-700);\n  }\n  .border-transparent {\n    border-color: transparent;\n  }\n  .border-white {\n    border-color: var(--color-white);\n  }\n  .border-yellow-200 {\n    border-color: var(--color-yellow-200);\n  }\n  .border-yellow-300 {\n    border-color: var(--color-yellow-300);\n  }\n  .border-yellow-500 {\n    border-color: var(--color-yellow-500);\n  }\n  .border-zinc-500 {\n    border-color: var(--color-zinc-500);\n  }\n  .border-t-neutral-200 {\n    border-top-color: var(--color-neutral-200);\n  }\n  .border-t-transparent {\n    border-top-color: transparent;\n  }\n  .border-r-neutral-900 {\n    border-right-color: var(--color-neutral-900);\n  }\n  .\\!border-b-primary\\/80 {\n    border-bottom-color: var(--color-primary) !important;\n    @supports (color: color-mix(in lab, red, red)) {\n      border-bottom-color: color-mix(in oklab, var(--color-primary) 80%, transparent) !important;\n    }\n  }\n  .border-b-neutral-200 {\n    border-bottom-color: var(--color-neutral-200);\n  }\n  .border-b-neutral-900 {\n    border-bottom-color: var(--color-neutral-900);\n  }\n  .border-b-transparent\\! {\n    border-bottom-color: transparent !important;\n  }\n  .border-l-cl1-gray-8 {\n    border-left-color: var(--color-cl1-gray-8);\n  }\n  .border-l-neutral-200 {\n    border-left-color: var(--color-neutral-200);\n  }\n  .border-l-orange-500 {\n    border-left-color: var(--color-orange-500);\n  }\n  .border-l-surface {\n    border-left-color: var(--color-surface);\n  }\n  .\\!bg-\\[\\#f6821f1a\\] {\n    background-color: #f6821f1a !important;\n  }\n  .\\!bg-accent {\n    background-color: var(--color-accent) !important;\n  }\n  .\\!bg-blue-600 {\n    background-color: var(--color-blue-600) !important;\n  }\n  .\\!bg-neutral-50 {\n    background-color: var(--color-neutral-50) !important;\n  }\n  .\\!bg-neutral-100 {\n    background-color: var(--color-neutral-100) !important;\n  }\n  .\\!bg-neutral-300 {\n    background-color: var(--color-neutral-300) !important;\n  }\n  .\\!bg-neutral-950 {\n    background-color: var(--color-neutral-950) !important;\n  }\n  .\\!bg-surface {\n    background-color: var(--color-surface) !important;\n  }\n  .\\!bg-surface-secondary {\n    background-color: var(--color-surface-secondary) !important;\n  }\n  .\\!bg-transparent {\n    background-color: transparent !important;\n  }\n  .bg-\\[\\#4794FF\\]\\/30 {\n    background-color: color-mix(in oklab, #4794FF 30%, transparent);\n  }\n  .bg-\\[\\#F8F8F8\\] {\n    background-color: #F8F8F8;\n  }\n  .bg-\\[\\#F42500\\] {\n    background-color: #F42500;\n  }\n  .bg-\\[\\#F42500\\]\\/30 {\n    background-color: color-mix(in oklab, #F42500 30%, transparent);\n  }\n  .bg-\\[\\#f6821f\\] {\n    background-color: #f6821f;\n  }\n  .bg-\\[\\#ffe693\\] {\n    background-color: #ffe693;\n  }\n  .bg-\\[rgba\\(255\\,255\\,255\\,0\\.1\\)\\] {\n    background-color: rgba(255,255,255,0.1);\n  }\n  .bg-\\[var\\(--color-accent\\)\\] {\n    background-color: var(--color-accent);\n  }\n  .bg-\\[var\\(--kumo-muted-foreground\\)\\] {\n    background-color: var(--kumo-muted-foreground);\n  }\n  .bg-accent {\n    background-color: var(--color-accent);\n  }\n  .bg-accent\\/60 {\n    background-color: var(--color-accent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-accent) 60%, transparent);\n    }\n  }\n  .bg-amber-200 {\n    background-color: var(--color-amber-200);\n  }\n  .bg-amber-500\\/30 {\n    background-color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 30%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-amber-500) 30%, transparent);\n    }\n  }\n  .bg-bg-primary {\n    background-color: var(--color-bg-primary);\n  }\n  .bg-bg-secondary {\n    background-color: var(--color-bg-secondary);\n  }\n  .bg-black {\n    background-color: var(--color-black);\n  }\n  .bg-black\\/5 {\n    background-color: color-mix(in srgb, #000 5%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-black) 5%, transparent);\n    }\n  }\n  .bg-black\\/20 {\n    background-color: color-mix(in srgb, #000 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-black) 20%, transparent);\n    }\n  }\n  .bg-black\\/30 {\n    background-color: color-mix(in srgb, #000 30%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-black) 30%, transparent);\n    }\n  }\n  .bg-black\\/40 {\n    background-color: color-mix(in srgb, #000 40%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);\n    }\n  }\n  .bg-black\\/70 {\n    background-color: color-mix(in srgb, #000 70%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-black) 70%, transparent);\n    }\n  }\n  .bg-black\\/80 {\n    background-color: color-mix(in srgb, #000 80%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-black) 80%, transparent);\n    }\n  }\n  .bg-blue-50 {\n    background-color: var(--color-blue-50);\n  }\n  .bg-blue-50\\/90 {\n    background-color: color-mix(in srgb, oklch(97% 0.014 254.604) 90%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-blue-50) 90%, transparent);\n    }\n  }\n  .bg-blue-100 {\n    background-color: var(--color-blue-100);\n  }\n  .bg-blue-200 {\n    background-color: var(--color-blue-200);\n  }\n  .bg-blue-300 {\n    background-color: var(--color-blue-300);\n  }\n  .bg-blue-300\\/20 {\n    background-color: color-mix(in srgb, oklch(80.9% 0.105 251.813) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-blue-300) 20%, transparent);\n    }\n  }\n  .bg-blue-300\\/50 {\n    background-color: color-mix(in srgb, oklch(80.9% 0.105 251.813) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-blue-300) 50%, transparent);\n    }\n  }\n  .bg-blue-400 {\n    background-color: var(--color-blue-400);\n  }\n  .bg-blue-500 {\n    background-color: var(--color-blue-500);\n  }\n  .bg-blue-500\\/20 {\n    background-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-blue-500) 20%, transparent);\n    }\n  }\n  .bg-blue-600 {\n    background-color: var(--color-blue-600);\n  }\n  .bg-border {\n    background-color: var(--color-border);\n  }\n  .bg-cl1-black {\n    background-color: var(--color-cl1-black);\n  }\n  .bg-cl1-blue-5 {\n    background-color: var(--color-cl1-blue-5);\n  }\n  .bg-cl1-blue-6 {\n    background-color: var(--color-cl1-blue-6);\n  }\n  .bg-cl1-blue-7\\/20 {\n    background-color: var(--color-cl1-blue-7);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-cl1-blue-7) 20%, transparent);\n    }\n  }\n  .bg-cl1-blue-9 {\n    background-color: var(--color-cl1-blue-9);\n  }\n  .bg-cl1-gold-6 {\n    background-color: var(--color-cl1-gold-6);\n  }\n  .bg-cl1-gold-9 {\n    background-color: var(--color-cl1-gold-9);\n  }\n  .bg-cl1-gray-5 {\n    background-color: var(--color-cl1-gray-5);\n  }\n  .bg-cl1-gray-6 {\n    background-color: var(--color-cl1-gray-6);\n  }\n  .bg-cl1-gray-7\\/10 {\n    background-color: var(--color-cl1-gray-7);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-cl1-gray-7) 10%, transparent);\n    }\n  }\n  .bg-cl1-gray-8 {\n    background-color: var(--color-cl1-gray-8);\n  }\n  .bg-cl1-gray-9 {\n    background-color: var(--color-cl1-gray-9);\n  }\n  .bg-cl1-green-6 {\n    background-color: var(--color-cl1-green-6);\n  }\n  .bg-cl1-red-6 {\n    background-color: var(--color-cl1-red-6);\n  }\n  .bg-cl1-red-7\\/40 {\n    background-color: var(--color-cl1-red-7);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-cl1-red-7) 40%, transparent);\n    }\n  }\n  .bg-cl1-red-9 {\n    background-color: var(--color-cl1-red-9);\n  }\n  .bg-cl1-white {\n    background-color: var(--color-cl1-white);\n  }\n  .bg-current {\n    background-color: currentcolor;\n  }\n  .bg-cyan-100 {\n    background-color: var(--color-cyan-100);\n  }\n  .bg-destructive {\n    background-color: var(--color-destructive);\n  }\n  .bg-fedramp-primary-background {\n    background-color: var(--color-fedramp-primary-background);\n  }\n  .bg-gray-50 {\n    background-color: var(--color-gray-50);\n  }\n  .bg-gray-100 {\n    background-color: var(--color-gray-100);\n  }\n  .bg-gray-200 {\n    background-color: var(--color-gray-200);\n  }\n  .bg-gray-300 {\n    background-color: var(--color-gray-300);\n  }\n  .bg-gray-300\\/60 {\n    background-color: color-mix(in srgb, oklch(87.2% 0.01 258.338) 60%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-gray-300) 60%, transparent);\n    }\n  }\n  .bg-gray-500 {\n    background-color: var(--color-gray-500);\n  }\n  .bg-green-50 {\n    background-color: var(--color-green-50);\n  }\n  .bg-green-100 {\n    background-color: var(--color-green-100);\n  }\n  .bg-green-200 {\n    background-color: var(--color-green-200);\n  }\n  .bg-green-500 {\n    background-color: var(--color-green-500);\n  }\n  .bg-green-600 {\n    background-color: var(--color-green-600);\n  }\n  .bg-indigo-100 {\n    background-color: var(--color-indigo-100);\n  }\n  .bg-inherit {\n    background-color: inherit;\n  }\n  .bg-input {\n    background-color: var(--color-input);\n  }\n  .bg-kumo-alert-surface {\n    background-color: var(--color-kumo-alert-surface);\n  }\n  .bg-kumo-color {\n    background-color: var(--color-kumo-color);\n  }\n  .bg-kumo-destructive {\n    background-color: var(--color-kumo-destructive);\n  }\n  .bg-kumo-error-surface {\n    background-color: var(--color-kumo-error-surface);\n  }\n  .bg-kumo-info-surface {\n    background-color: var(--color-kumo-info-surface);\n  }\n  .bg-kumo-primary {\n    background-color: var(--color-kumo-primary);\n  }\n  .bg-kumo-secondary {\n    background-color: var(--color-kumo-secondary);\n  }\n  .bg-kumo-surface {\n    background-color: var(--color-kumo-surface);\n  }\n  .bg-kumo-surface-inverse {\n    background-color: var(--color-kumo-surface-inverse);\n  }\n  .bg-muted {\n    background-color: var(--color-muted);\n  }\n  .bg-neutral-25 {\n    background-color: var(--color-neutral-25);\n  }\n  .bg-neutral-50 {\n    background-color: var(--color-neutral-50);\n  }\n  .bg-neutral-50\\! {\n    background-color: var(--color-neutral-50) !important;\n  }\n  .bg-neutral-50\\/90 {\n    background-color: color-mix(in srgb, oklch(0.985 0 0) 90%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-neutral-50) 90%, transparent);\n    }\n  }\n  .bg-neutral-100 {\n    background-color: var(--color-neutral-100);\n  }\n  .bg-neutral-150 {\n    background-color: var(--color-neutral-150);\n  }\n  .bg-neutral-200 {\n    background-color: var(--color-neutral-200);\n  }\n  .bg-neutral-200\\/30 {\n    background-color: color-mix(in srgb, oklch(92.2% 0 0) 30%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-neutral-200) 30%, transparent);\n    }\n  }\n  .bg-neutral-250 {\n    background-color: var(--color-neutral-250);\n  }\n  .bg-neutral-300 {\n    background-color: var(--color-neutral-300);\n  }\n  .bg-neutral-300\\/85 {\n    background-color: color-mix(in srgb, oklch(87% 0 0) 85%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-neutral-300) 85%, transparent);\n    }\n  }\n  .bg-neutral-400 {\n    background-color: var(--color-neutral-400);\n  }\n  .bg-neutral-500 {\n    background-color: var(--color-neutral-500);\n  }\n  .bg-neutral-600 {\n    background-color: var(--color-neutral-600);\n  }\n  .bg-neutral-800\\/50 {\n    background-color: color-mix(in srgb, oklch(26.9% 0 0) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-neutral-800) 50%, transparent);\n    }\n  }\n  .bg-neutral-900 {\n    background-color: var(--color-neutral-900);\n  }\n  .bg-neutral-900\\! {\n    background-color: var(--color-neutral-900) !important;\n  }\n  .bg-neutral-950\\/10 {\n    background-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n    }\n  }\n  .bg-orange-100 {\n    background-color: var(--color-orange-100);\n  }\n  .bg-orange-200 {\n    background-color: var(--color-orange-200);\n  }\n  .bg-orange-500 {\n    background-color: var(--color-orange-500);\n  }\n  .bg-orange-600 {\n    background-color: var(--color-orange-600);\n  }\n  .bg-primary {\n    background-color: var(--color-primary);\n  }\n  .bg-primary\\/10 {\n    background-color: var(--color-primary);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-primary) 10%, transparent);\n    }\n  }\n  .bg-primary\\/20 {\n    background-color: var(--color-primary);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-primary) 20%, transparent);\n    }\n  }\n  .bg-purple-200 {\n    background-color: var(--color-purple-200);\n  }\n  .bg-red-50 {\n    background-color: var(--color-red-50);\n  }\n  .bg-red-50\\! {\n    background-color: var(--color-red-50) !important;\n  }\n  .bg-red-100 {\n    background-color: var(--color-red-100);\n  }\n  .bg-red-200 {\n    background-color: var(--color-red-200);\n  }\n  .bg-red-400 {\n    background-color: var(--color-red-400);\n  }\n  .bg-red-500 {\n    background-color: var(--color-red-500);\n  }\n  .bg-red-500\\/20 {\n    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-red-500) 20%, transparent);\n    }\n  }\n  .bg-red-600\\/20 {\n    background-color: color-mix(in srgb, oklch(57.7% 0.245 27.325) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-red-600) 20%, transparent);\n    }\n  }\n  .bg-secondary {\n    background-color: var(--color-secondary);\n  }\n  .bg-surface {\n    background-color: var(--color-surface);\n  }\n  .bg-surface-active {\n    background-color: var(--color-surface-active);\n  }\n  .bg-surface-secondary {\n    background-color: var(--color-surface-secondary);\n  }\n  .bg-transparent {\n    background-color: transparent;\n  }\n  .bg-transparent\\! {\n    background-color: transparent !important;\n  }\n  .bg-violet-100 {\n    background-color: var(--color-violet-100);\n  }\n  .bg-white {\n    background-color: var(--color-white);\n  }\n  .bg-white\\/80 {\n    background-color: color-mix(in srgb, #fff 80%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-white) 80%, transparent);\n    }\n  }\n  .bg-yellow-50 {\n    background-color: var(--color-yellow-50);\n  }\n  .bg-yellow-100 {\n    background-color: var(--color-yellow-100);\n  }\n  .bg-yellow-200 {\n    background-color: var(--color-yellow-200);\n  }\n  .bg-yellow-300 {\n    background-color: var(--color-yellow-300);\n  }\n  .bg-yellow-500 {\n    background-color: var(--color-yellow-500);\n  }\n  .bg-yellow-500\\/20 {\n    background-color: color-mix(in srgb, oklch(79.5% 0.184 86.047) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-yellow-500) 20%, transparent);\n    }\n  }\n  .bg-linear-to-r {\n    --tw-gradient-position: to right;\n    @supports (background-image: linear-gradient(in lab, red, red)) {\n      --tw-gradient-position: to right in oklab;\n    }\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-gradient-to-b {\n    --tw-gradient-position: to bottom in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-gradient-to-br {\n    --tw-gradient-position: to bottom right in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-gradient-to-r {\n    --tw-gradient-position: to right in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .from-blue-50 {\n    --tw-gradient-from: var(--color-blue-50);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-blue-500 {\n    --tw-gradient-from: var(--color-blue-500);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-neutral-50 {\n    --tw-gradient-from: var(--color-neutral-50);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-transparent {\n    --tw-gradient-from: transparent;\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .via-blue-500 {\n    --tw-gradient-via: var(--color-blue-500);\n    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-via-stops);\n  }\n  .to-blue-600 {\n    --tw-gradient-to: var(--color-blue-600);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-indigo-50 {\n    --tw-gradient-to: var(--color-indigo-50);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-neutral-100 {\n    --tw-gradient-to: var(--color-neutral-100);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-white {\n    --tw-gradient-to: var(--color-white);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-40\\% {\n    --tw-gradient-to-position: 40%;\n  }\n  .bg-clip-padding {\n    background-clip: padding-box;\n  }\n  .fill-current {\n    fill: currentcolor;\n  }\n  .fill-gray-200 {\n    fill: var(--color-gray-200);\n  }\n  .fill-neutral-200 {\n    fill: var(--color-neutral-200);\n  }\n  .fill-neutral-900 {\n    fill: var(--color-neutral-900);\n  }\n  .fill-surface {\n    fill: var(--color-surface);\n  }\n  .stroke-border {\n    stroke: var(--color-border);\n  }\n  .stroke-red-500 {\n    stroke: var(--color-red-500);\n  }\n  .stroke-red-500\\! {\n    stroke: var(--color-red-500) !important;\n  }\n  .stroke-1 {\n    stroke-width: 1;\n  }\n  .object-cover {\n    object-fit: cover;\n  }\n  .object-fill {\n    object-fit: fill;\n  }\n  .\\!p-0 {\n    padding: calc(var(--spacing) * 0) !important;\n  }\n  .\\!p-1 {\n    padding: calc(var(--spacing) * 1) !important;\n  }\n  .\\!p-3 {\n    padding: calc(var(--spacing) * 3) !important;\n  }\n  .\\!p-4 {\n    padding: calc(var(--spacing) * 4) !important;\n  }\n  .\\!p-5 {\n    padding: calc(var(--spacing) * 5) !important;\n  }\n  .p-0 {\n    padding: calc(var(--spacing) * 0);\n  }\n  .p-0\\! {\n    padding: calc(var(--spacing) * 0) !important;\n  }\n  .p-0\\.5 {\n    padding: calc(var(--spacing) * 0.5);\n  }\n  .p-0\\.75 {\n    padding: calc(var(--spacing) * 0.75);\n  }\n  .p-1 {\n    padding: calc(var(--spacing) * 1);\n  }\n  .p-1\\.5 {\n    padding: calc(var(--spacing) * 1.5);\n  }\n  .p-2 {\n    padding: calc(var(--spacing) * 2);\n  }\n  .p-2\\.5 {\n    padding: calc(var(--spacing) * 2.5);\n  }\n  .p-3 {\n    padding: calc(var(--spacing) * 3);\n  }\n  .p-3\\.5 {\n    padding: calc(var(--spacing) * 3.5);\n  }\n  .p-4 {\n    padding: calc(var(--spacing) * 4);\n  }\n  .p-5 {\n    padding: calc(var(--spacing) * 5);\n  }\n  .p-6 {\n    padding: calc(var(--spacing) * 6);\n  }\n  .p-6\\.5 {\n    padding: calc(var(--spacing) * 6.5);\n  }\n  .p-8 {\n    padding: calc(var(--spacing) * 8);\n  }\n  .p-10 {\n    padding: calc(var(--spacing) * 10);\n  }\n  .p-12 {\n    padding: calc(var(--spacing) * 12);\n  }\n  .p-16 {\n    padding: calc(var(--spacing) * 16);\n  }\n  .p-\\[1px\\] {\n    padding: 1px;\n  }\n  .p-px {\n    padding: 1px;\n  }\n  .\\!px-0 {\n    padding-inline: calc(var(--spacing) * 0) !important;\n  }\n  .\\!px-0\\.5 {\n    padding-inline: calc(var(--spacing) * 0.5) !important;\n  }\n  .\\!px-2 {\n    padding-inline: calc(var(--spacing) * 2) !important;\n  }\n  .\\!px-3 {\n    padding-inline: calc(var(--spacing) * 3) !important;\n  }\n  .\\!px-4 {\n    padding-inline: calc(var(--spacing) * 4) !important;\n  }\n  .\\!px-5 {\n    padding-inline: calc(var(--spacing) * 5) !important;\n  }\n  .px-0 {\n    padding-inline: calc(var(--spacing) * 0);\n  }\n  .px-0\\! {\n    padding-inline: calc(var(--spacing) * 0) !important;\n  }\n  .px-0\\.5 {\n    padding-inline: calc(var(--spacing) * 0.5);\n  }\n  .px-1 {\n    padding-inline: calc(var(--spacing) * 1);\n  }\n  .px-1\\.5 {\n    padding-inline: calc(var(--spacing) * 1.5);\n  }\n  .px-2 {\n    padding-inline: calc(var(--spacing) * 2);\n  }\n  .px-2\\! {\n    padding-inline: calc(var(--spacing) * 2) !important;\n  }\n  .px-2\\.5 {\n    padding-inline: calc(var(--spacing) * 2.5);\n  }\n  .px-3 {\n    padding-inline: calc(var(--spacing) * 3);\n  }\n  .px-3\\.5 {\n    padding-inline: calc(var(--spacing) * 3.5);\n  }\n  .px-4 {\n    padding-inline: calc(var(--spacing) * 4);\n  }\n  .px-4\\.5 {\n    padding-inline: calc(var(--spacing) * 4.5);\n  }\n  .px-5 {\n    padding-inline: calc(var(--spacing) * 5);\n  }\n  .px-6 {\n    padding-inline: calc(var(--spacing) * 6);\n  }\n  .px-7 {\n    padding-inline: calc(var(--spacing) * 7);\n  }\n  .px-8 {\n    padding-inline: calc(var(--spacing) * 8);\n  }\n  .px-10 {\n    padding-inline: calc(var(--spacing) * 10);\n  }\n  .px-\\[1px\\] {\n    padding-inline: 1px;\n  }\n  .px-\\[3px\\] {\n    padding-inline: 3px;\n  }\n  .px-\\[5px\\] {\n    padding-inline: 5px;\n  }\n  .px-\\[6px\\] {\n    padding-inline: 6px;\n  }\n  .px-\\[7px\\] {\n    padding-inline: 7px;\n  }\n  .px-px {\n    padding-inline: 1px;\n  }\n  .\\!py-1 {\n    padding-block: calc(var(--spacing) * 1) !important;\n  }\n  .\\!py-1\\.5 {\n    padding-block: calc(var(--spacing) * 1.5) !important;\n  }\n  .\\!py-2 {\n    padding-block: calc(var(--spacing) * 2) !important;\n  }\n  .\\!py-3 {\n    padding-block: calc(var(--spacing) * 3) !important;\n  }\n  .\\!py-4 {\n    padding-block: calc(var(--spacing) * 4) !important;\n  }\n  .py-0 {\n    padding-block: calc(var(--spacing) * 0);\n  }\n  .py-0\\.5 {\n    padding-block: calc(var(--spacing) * 0.5);\n  }\n  .py-0\\.25 {\n    padding-block: calc(var(--spacing) * 0.25);\n  }\n  .py-1 {\n    padding-block: calc(var(--spacing) * 1);\n  }\n  .py-1\\! {\n    padding-block: calc(var(--spacing) * 1) !important;\n  }\n  .py-1\\.5 {\n    padding-block: calc(var(--spacing) * 1.5);\n  }\n  .py-2 {\n    padding-block: calc(var(--spacing) * 2);\n  }\n  .py-2\\.5 {\n    padding-block: calc(var(--spacing) * 2.5);\n  }\n  .py-3 {\n    padding-block: calc(var(--spacing) * 3);\n  }\n  .py-3\\.5 {\n    padding-block: calc(var(--spacing) * 3.5);\n  }\n  .py-4 {\n    padding-block: calc(var(--spacing) * 4);\n  }\n  .py-4\\! {\n    padding-block: calc(var(--spacing) * 4) !important;\n  }\n  .py-4\\.5 {\n    padding-block: calc(var(--spacing) * 4.5);\n  }\n  .py-5 {\n    padding-block: calc(var(--spacing) * 5);\n  }\n  .py-6 {\n    padding-block: calc(var(--spacing) * 6);\n  }\n  .py-8 {\n    padding-block: calc(var(--spacing) * 8);\n  }\n  .py-12 {\n    padding-block: calc(var(--spacing) * 12);\n  }\n  .py-16 {\n    padding-block: calc(var(--spacing) * 16);\n  }\n  .py-\\[1px\\] {\n    padding-block: 1px;\n  }\n  .py-\\[1rem\\] {\n    padding-block: 1rem;\n  }\n  .py-\\[2px\\] {\n    padding-block: 2px;\n  }\n  .py-\\[3px\\] {\n    padding-block: 3px;\n  }\n  .py-\\[11px\\] {\n    padding-block: 11px;\n  }\n  .py-\\[14px\\] {\n    padding-block: 14px;\n  }\n  .py-px {\n    padding-block: 1px;\n  }\n  .\\!pt-2 {\n    padding-top: calc(var(--spacing) * 2) !important;\n  }\n  .pt-1 {\n    padding-top: calc(var(--spacing) * 1);\n  }\n  .pt-2 {\n    padding-top: calc(var(--spacing) * 2);\n  }\n  .pt-3 {\n    padding-top: calc(var(--spacing) * 3);\n  }\n  .pt-3\\.5 {\n    padding-top: calc(var(--spacing) * 3.5);\n  }\n  .pt-4 {\n    padding-top: calc(var(--spacing) * 4);\n  }\n  .pt-5 {\n    padding-top: calc(var(--spacing) * 5);\n  }\n  .pt-6 {\n    padding-top: calc(var(--spacing) * 6);\n  }\n  .pt-6\\.5 {\n    padding-top: calc(var(--spacing) * 6.5);\n  }\n  .pt-8 {\n    padding-top: calc(var(--spacing) * 8);\n  }\n  .pt-10 {\n    padding-top: calc(var(--spacing) * 10);\n  }\n  .pt-12 {\n    padding-top: calc(var(--spacing) * 12);\n  }\n  .pt-15 {\n    padding-top: calc(var(--spacing) * 15);\n  }\n  .\\!pr-1 {\n    padding-right: calc(var(--spacing) * 1) !important;\n  }\n  .\\!pr-2 {\n    padding-right: calc(var(--spacing) * 2) !important;\n  }\n  .pr-0 {\n    padding-right: calc(var(--spacing) * 0);\n  }\n  .pr-0\\.5 {\n    padding-right: calc(var(--spacing) * 0.5);\n  }\n  .pr-1 {\n    padding-right: calc(var(--spacing) * 1);\n  }\n  .pr-1\\.5 {\n    padding-right: calc(var(--spacing) * 1.5);\n  }\n  .pr-2 {\n    padding-right: calc(var(--spacing) * 2);\n  }\n  .pr-2\\.5 {\n    padding-right: calc(var(--spacing) * 2.5);\n  }\n  .pr-3 {\n    padding-right: calc(var(--spacing) * 3);\n  }\n  .pr-4 {\n    padding-right: calc(var(--spacing) * 4);\n  }\n  .pr-6 {\n    padding-right: calc(var(--spacing) * 6);\n  }\n  .pr-8 {\n    padding-right: calc(var(--spacing) * 8);\n  }\n  .pr-8\\.5 {\n    padding-right: calc(var(--spacing) * 8.5);\n  }\n  .pr-9 {\n    padding-right: calc(var(--spacing) * 9);\n  }\n  .pr-10 {\n    padding-right: calc(var(--spacing) * 10);\n  }\n  .pr-12 {\n    padding-right: calc(var(--spacing) * 12);\n  }\n  .pr-20 {\n    padding-right: calc(var(--spacing) * 20);\n  }\n  .pr-24 {\n    padding-right: calc(var(--spacing) * 24);\n  }\n  .pr-\\[14px\\] {\n    padding-right: 14px;\n  }\n  .pr-\\[48px\\] {\n    padding-right: 48px;\n  }\n  .\\!pb-1 {\n    padding-bottom: calc(var(--spacing) * 1) !important;\n  }\n  .\\!pb-2 {\n    padding-bottom: calc(var(--spacing) * 2) !important;\n  }\n  .\\!pb-3 {\n    padding-bottom: calc(var(--spacing) * 3) !important;\n  }\n  .pb-0 {\n    padding-bottom: calc(var(--spacing) * 0);\n  }\n  .pb-0\\.5 {\n    padding-bottom: calc(var(--spacing) * 0.5);\n  }\n  .pb-1 {\n    padding-bottom: calc(var(--spacing) * 1);\n  }\n  .pb-1\\! {\n    padding-bottom: calc(var(--spacing) * 1) !important;\n  }\n  .pb-1\\.5 {\n    padding-bottom: calc(var(--spacing) * 1.5);\n  }\n  .pb-2 {\n    padding-bottom: calc(var(--spacing) * 2);\n  }\n  .pb-3 {\n    padding-bottom: calc(var(--spacing) * 3);\n  }\n  .pb-4 {\n    padding-bottom: calc(var(--spacing) * 4);\n  }\n  .pb-6 {\n    padding-bottom: calc(var(--spacing) * 6);\n  }\n  .pb-7 {\n    padding-bottom: calc(var(--spacing) * 7);\n  }\n  .pb-8 {\n    padding-bottom: calc(var(--spacing) * 8);\n  }\n  .pb-10 {\n    padding-bottom: calc(var(--spacing) * 10);\n  }\n  .pb-16 {\n    padding-bottom: calc(var(--spacing) * 16);\n  }\n  .pb-20 {\n    padding-bottom: calc(var(--spacing) * 20);\n  }\n  .pb-30 {\n    padding-bottom: calc(var(--spacing) * 30);\n  }\n  .pb-42 {\n    padding-bottom: calc(var(--spacing) * 42);\n  }\n  .pb-48 {\n    padding-bottom: calc(var(--spacing) * 48);\n  }\n  .pb-\\[48px\\] {\n    padding-bottom: 48px;\n  }\n  .pb-\\[68px\\] {\n    padding-bottom: 68px;\n  }\n  .\\!pl-0 {\n    padding-left: calc(var(--spacing) * 0) !important;\n  }\n  .\\!pl-1 {\n    padding-left: calc(var(--spacing) * 1) !important;\n  }\n  .\\!pl-2 {\n    padding-left: calc(var(--spacing) * 2) !important;\n  }\n  .\\!pl-2\\.5 {\n    padding-left: calc(var(--spacing) * 2.5) !important;\n  }\n  .\\!pl-3 {\n    padding-left: calc(var(--spacing) * 3) !important;\n  }\n  .\\!pl-5 {\n    padding-left: calc(var(--spacing) * 5) !important;\n  }\n  .pl-0 {\n    padding-left: calc(var(--spacing) * 0);\n  }\n  .pl-0\\.5 {\n    padding-left: calc(var(--spacing) * 0.5);\n  }\n  .pl-1 {\n    padding-left: calc(var(--spacing) * 1);\n  }\n  .pl-1\\.5 {\n    padding-left: calc(var(--spacing) * 1.5);\n  }\n  .pl-2 {\n    padding-left: calc(var(--spacing) * 2);\n  }\n  .pl-2\\.5 {\n    padding-left: calc(var(--spacing) * 2.5);\n  }\n  .pl-3 {\n    padding-left: calc(var(--spacing) * 3);\n  }\n  .pl-3\\.5 {\n    padding-left: calc(var(--spacing) * 3.5);\n  }\n  .pl-4 {\n    padding-left: calc(var(--spacing) * 4);\n  }\n  .pl-4\\.5 {\n    padding-left: calc(var(--spacing) * 4.5);\n  }\n  .pl-5 {\n    padding-left: calc(var(--spacing) * 5);\n  }\n  .pl-5\\.5 {\n    padding-left: calc(var(--spacing) * 5.5);\n  }\n  .pl-6 {\n    padding-left: calc(var(--spacing) * 6);\n  }\n  .pl-7 {\n    padding-left: calc(var(--spacing) * 7);\n  }\n  .pl-8 {\n    padding-left: calc(var(--spacing) * 8);\n  }\n  .pl-9 {\n    padding-left: calc(var(--spacing) * 9);\n  }\n  .pl-10 {\n    padding-left: calc(var(--spacing) * 10);\n  }\n  .pl-\\[1px\\] {\n    padding-left: 1px;\n  }\n  .pl-\\[11px\\] {\n    padding-left: 11px;\n  }\n  .pl-\\[22px\\] {\n    padding-left: 22px;\n  }\n  .pl-\\[86px\\] {\n    padding-left: 86px;\n  }\n  .pl-px {\n    padding-left: 1px;\n  }\n  .text-center {\n    text-align: center;\n  }\n  .text-end {\n    text-align: end;\n  }\n  .text-left {\n    text-align: left;\n  }\n  .text-right {\n    text-align: right;\n  }\n  .align-middle {\n    vertical-align: middle;\n  }\n  .align-text-bottom {\n    vertical-align: text-bottom;\n  }\n  .align-top {\n    vertical-align: top;\n  }\n  .\\!font-mono {\n    font-family: var(--font-mono) !important;\n  }\n  .\\!font-sans {\n    font-family: var(--font-sans) !important;\n  }\n  .font-mono {\n    font-family: var(--font-mono);\n  }\n  .font-mono\\! {\n    font-family: var(--font-mono) !important;\n  }\n  .font-sans {\n    font-family: var(--font-sans);\n  }\n  .\\!text-2xl {\n    font-size: var(--text-2xl) !important;\n    line-height: var(--tw-leading, var(--text-2xl--line-height)) !important;\n  }\n  .\\!text-base {\n    font-size: var(--text-base) !important;\n    line-height: var(--tw-leading, var(--text-base--line-height)) !important;\n  }\n  .\\!text-lg {\n    font-size: var(--text-lg) !important;\n    line-height: var(--tw-leading, var(--text-lg--line-height)) !important;\n  }\n  .\\!text-sm {\n    font-size: var(--text-sm) !important;\n    line-height: var(--tw-leading, var(--text-sm--line-height)) !important;\n  }\n  .\\!text-xl {\n    font-size: var(--text-xl) !important;\n    line-height: var(--tw-leading, var(--text-xl--line-height)) !important;\n  }\n  .\\!text-xs {\n    font-size: var(--text-xs) !important;\n    line-height: var(--tw-leading, var(--text-xs--line-height)) !important;\n  }\n  .text-2xl {\n    font-size: var(--text-2xl);\n    line-height: var(--tw-leading, var(--text-2xl--line-height));\n  }\n  .text-3xl {\n    font-size: var(--text-3xl);\n    line-height: var(--tw-leading, var(--text-3xl--line-height));\n  }\n  .text-\\[0\\.78125rem\\]\\/normal {\n    font-size: 0.78125rem;\n    line-height: var(--leading-normal);\n  }\n  .text-\\[11px\\]\\/none {\n    font-size: 11px;\n    line-height: 1;\n  }\n  .text-\\[17px\\]\\/\\[1\\.25\\] {\n    font-size: 17px;\n    line-height: 1.25;\n  }\n  .text-base {\n    font-size: var(--text-base);\n    line-height: var(--tw-leading, var(--text-base--line-height));\n  }\n  .text-base\\/tight {\n    font-size: var(--text-base);\n    line-height: var(--leading-tight);\n  }\n  .text-lg {\n    font-size: var(--text-lg);\n    line-height: var(--tw-leading, var(--text-lg--line-height));\n  }\n  .text-sm {\n    font-size: var(--text-sm);\n    line-height: var(--tw-leading, var(--text-sm--line-height));\n  }\n  .text-sm\\! {\n    font-size: var(--text-sm) !important;\n    line-height: var(--tw-leading, var(--text-sm--line-height)) !important;\n  }\n  .text-sm\\/normal {\n    font-size: var(--text-sm);\n    line-height: var(--leading-normal);\n  }\n  .text-sm\\/snug {\n    font-size: var(--text-sm);\n    line-height: var(--leading-snug);\n  }\n  .text-xl {\n    font-size: var(--text-xl);\n    line-height: var(--tw-leading, var(--text-xl--line-height));\n  }\n  .text-xl\\! {\n    font-size: var(--text-xl) !important;\n    line-height: var(--tw-leading, var(--text-xl--line-height)) !important;\n  }\n  .text-xs {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n  }\n  .text-xs\\! {\n    font-size: var(--text-xs) !important;\n    line-height: var(--tw-leading, var(--text-xs--line-height)) !important;\n  }\n  .text-xs\\/4 {\n    font-size: var(--text-xs);\n    line-height: calc(var(--spacing) * 4);\n  }\n  .text-xs\\/\\[1\\.4\\] {\n    font-size: var(--text-xs);\n    line-height: 1.4;\n  }\n  .\\!text-\\[10px\\] {\n    font-size: 10px !important;\n  }\n  .\\!text-\\[11px\\] {\n    font-size: 11px !important;\n  }\n  .\\!text-\\[14px\\] {\n    font-size: 14px !important;\n  }\n  .\\!text-\\[16px\\] {\n    font-size: 16px !important;\n  }\n  .text-\\[0\\.63rem\\] {\n    font-size: 0.63rem;\n  }\n  .text-\\[0\\.85rem\\] {\n    font-size: 0.85rem;\n  }\n  .text-\\[0\\.925rem\\] {\n    font-size: 0.925rem;\n  }\n  .text-\\[0\\.975rem\\] {\n    font-size: 0.975rem;\n  }\n  .text-\\[0\\.78125rem\\] {\n    font-size: 0.78125rem;\n  }\n  .text-\\[8px\\] {\n    font-size: 8px;\n  }\n  .text-\\[10px\\] {\n    font-size: 10px;\n  }\n  .text-\\[11px\\] {\n    font-size: 11px;\n  }\n  .text-\\[12px\\] {\n    font-size: 12px;\n  }\n  .text-\\[13px\\] {\n    font-size: 13px;\n  }\n  .text-\\[14px\\] {\n    font-size: 14px;\n  }\n  .text-\\[15px\\] {\n    font-size: 15px;\n  }\n  .text-\\[20px\\] {\n    font-size: 20px;\n  }\n  .\\!leading-normal {\n    --tw-leading: var(--leading-normal) !important;\n    line-height: var(--leading-normal) !important;\n  }\n  .leading-0 {\n    --tw-leading: calc(var(--spacing) * 0);\n    line-height: calc(var(--spacing) * 0);\n  }\n  .leading-4 {\n    --tw-leading: calc(var(--spacing) * 4);\n    line-height: calc(var(--spacing) * 4);\n  }\n  .leading-5 {\n    --tw-leading: calc(var(--spacing) * 5);\n    line-height: calc(var(--spacing) * 5);\n  }\n  .leading-8 {\n    --tw-leading: calc(var(--spacing) * 8);\n    line-height: calc(var(--spacing) * 8);\n  }\n  .leading-\\[0\\.8\\] {\n    --tw-leading: 0.8;\n    line-height: 0.8;\n  }\n  .leading-\\[0\\] {\n    --tw-leading: 0;\n    line-height: 0;\n  }\n  .leading-\\[1\\.2\\] {\n    --tw-leading: 1.2;\n    line-height: 1.2;\n  }\n  .leading-\\[1\\.4\\] {\n    --tw-leading: 1.4;\n    line-height: 1.4;\n  }\n  .leading-\\[18px\\] {\n    --tw-leading: 18px;\n    line-height: 18px;\n  }\n  .leading-\\[20px\\] {\n    --tw-leading: 20px;\n    line-height: 20px;\n  }\n  .leading-\\[26px\\] {\n    --tw-leading: 26px;\n    line-height: 26px;\n  }\n  .leading-\\[35px\\] {\n    --tw-leading: 35px;\n    line-height: 35px;\n  }\n  .leading-loose {\n    --tw-leading: var(--leading-loose);\n    line-height: var(--leading-loose);\n  }\n  .leading-none {\n    --tw-leading: 1;\n    line-height: 1;\n  }\n  .leading-normal {\n    --tw-leading: var(--leading-normal);\n    line-height: var(--leading-normal);\n  }\n  .leading-relaxed {\n    --tw-leading: var(--leading-relaxed);\n    line-height: var(--leading-relaxed);\n  }\n  .leading-snug {\n    --tw-leading: var(--leading-snug);\n    line-height: var(--leading-snug);\n  }\n  .\\!font-bold {\n    --tw-font-weight: var(--font-weight-bold) !important;\n    font-weight: var(--font-weight-bold) !important;\n  }\n  .\\!font-medium {\n    --tw-font-weight: var(--font-weight-medium) !important;\n    font-weight: var(--font-weight-medium) !important;\n  }\n  .\\!font-semibold {\n    --tw-font-weight: var(--font-weight-semibold) !important;\n    font-weight: var(--font-weight-semibold) !important;\n  }\n  .font-\\[500\\] {\n    --tw-font-weight: 500;\n    font-weight: 500;\n  }\n  .font-\\[550\\] {\n    --tw-font-weight: 550;\n    font-weight: 550;\n  }\n  .font-bold {\n    --tw-font-weight: var(--font-weight-bold);\n    font-weight: var(--font-weight-bold);\n  }\n  .font-light {\n    --tw-font-weight: var(--font-weight-light);\n    font-weight: var(--font-weight-light);\n  }\n  .font-medium {\n    --tw-font-weight: var(--font-weight-medium);\n    font-weight: var(--font-weight-medium);\n  }\n  .font-normal {\n    --tw-font-weight: var(--font-weight-normal);\n    font-weight: var(--font-weight-normal);\n  }\n  .font-semibold {\n    --tw-font-weight: var(--font-weight-semibold);\n    font-weight: var(--font-weight-semibold);\n  }\n  .font-semibold\\! {\n    --tw-font-weight: var(--font-weight-semibold) !important;\n    font-weight: var(--font-weight-semibold) !important;\n  }\n  .tracking-\\[0\\.25px\\] {\n    --tw-tracking: 0.25px;\n    letter-spacing: 0.25px;\n  }\n  .tracking-normal {\n    --tw-tracking: var(--tracking-normal);\n    letter-spacing: var(--tracking-normal);\n  }\n  .tracking-tight {\n    --tw-tracking: var(--tracking-tight);\n    letter-spacing: var(--tracking-tight);\n  }\n  .tracking-wide {\n    --tw-tracking: var(--tracking-wide);\n    letter-spacing: var(--tracking-wide);\n  }\n  .tracking-widest {\n    --tw-tracking: var(--tracking-widest);\n    letter-spacing: var(--tracking-widest);\n  }\n  .text-balance {\n    text-wrap: balance;\n  }\n  .text-nowrap {\n    text-wrap: nowrap;\n  }\n  .text-pretty {\n    text-wrap: pretty;\n  }\n  .text-wrap {\n    text-wrap: wrap;\n  }\n  .break-normal {\n    overflow-wrap: normal;\n    word-break: normal;\n  }\n  .break-words {\n    overflow-wrap: break-word;\n  }\n  .break-all {\n    word-break: break-all;\n  }\n  .overflow-ellipsis {\n    text-overflow: ellipsis;\n  }\n  .text-ellipsis {\n    text-overflow: ellipsis;\n  }\n  .whitespace-normal {\n    white-space: normal;\n  }\n  .whitespace-nowrap {\n    white-space: nowrap;\n  }\n  .whitespace-pre {\n    white-space: pre;\n  }\n  .whitespace-pre-line {\n    white-space: pre-line;\n  }\n  .whitespace-pre-wrap {\n    white-space: pre-wrap;\n  }\n  .\\!text-black {\n    color: var(--color-black) !important;\n  }\n  .\\!text-blue-500 {\n    color: var(--color-blue-500) !important;\n  }\n  .\\!text-blue-600 {\n    color: var(--color-blue-600) !important;\n  }\n  .\\!text-error {\n    color: var(--text-color-error) !important;\n  }\n  .\\!text-inherit {\n    color: inherit !important;\n  }\n  .\\!text-kumo-destructive {\n    color: var(--text-color-kumo-destructive) !important;\n  }\n  .\\!text-kumo-primary {\n    color: var(--text-color-kumo-primary) !important;\n  }\n  .\\!text-kumo-secondary {\n    color: var(--text-color-kumo-secondary) !important;\n  }\n  .\\!text-muted {\n    color: var(--text-color-muted) !important;\n  }\n  .\\!text-neutral-200 {\n    color: var(--color-neutral-200) !important;\n  }\n  .\\!text-neutral-300 {\n    color: var(--color-neutral-300) !important;\n  }\n  .\\!text-neutral-500 {\n    color: var(--color-neutral-500) !important;\n  }\n  .\\!text-neutral-600 {\n    color: var(--color-neutral-600) !important;\n  }\n  .\\!text-neutral-800 {\n    color: var(--color-neutral-800) !important;\n  }\n  .\\!text-neutral-900 {\n    color: var(--color-neutral-900) !important;\n  }\n  .\\!text-orange-600 {\n    color: var(--color-orange-600) !important;\n  }\n  .\\!text-primary {\n    color: var(--text-color-primary) !important;\n  }\n  .\\!text-red-500 {\n    color: var(--color-red-500) !important;\n  }\n  .\\!text-red-600 {\n    color: var(--color-red-600) !important;\n  }\n  .\\!text-red-800 {\n    color: var(--color-red-800) !important;\n  }\n  .\\!text-secondary {\n    color: var(--text-color-secondary) !important;\n  }\n  .\\!text-surface {\n    color: var(--text-color-surface) !important;\n  }\n  .\\!text-white {\n    color: var(--color-white) !important;\n  }\n  .\\!text-yellow-600 {\n    color: var(--color-yellow-600) !important;\n  }\n  .text-\\[\\#8d1eb1\\] {\n    color: #8d1eb1;\n  }\n  .text-\\[\\#c05d08\\] {\n    color: #c05d08;\n  }\n  .text-\\[\\#e80954\\] {\n    color: #e80954;\n  }\n  .text-\\[\\#f6821f\\] {\n    color: #f6821f;\n  }\n  .text-\\[var\\(--kumo-destructive\\)\\] {\n    color: var(--kumo-destructive);\n  }\n  .text-\\[var\\(--kumo-primary\\)\\] {\n    color: var(--kumo-primary);\n  }\n  .text-\\[var\\(--light\\)\\] {\n    color: var(--light);\n  }\n  .text-amber-600 {\n    color: var(--color-amber-600);\n  }\n  .text-amber-700 {\n    color: var(--color-amber-700);\n  }\n  .text-black {\n    color: var(--color-black);\n  }\n  .text-blue-500 {\n    color: var(--color-blue-500);\n  }\n  .text-blue-600 {\n    color: var(--color-blue-600);\n  }\n  .text-blue-600\\/50 {\n    color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, var(--color-blue-600) 50%, transparent);\n    }\n  }\n  .text-blue-600\\/75 {\n    color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 75%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, var(--color-blue-600) 75%, transparent);\n    }\n  }\n  .text-blue-700 {\n    color: var(--color-blue-700);\n  }\n  .text-blue-800 {\n    color: var(--color-blue-800);\n  }\n  .text-blue-900 {\n    color: var(--color-blue-900);\n  }\n  .text-blue-900\\/60 {\n    color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 60%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, var(--color-blue-900) 60%, transparent);\n    }\n  }\n  .text-blue-900\\/90 {\n    color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 90%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, var(--color-blue-900) 90%, transparent);\n    }\n  }\n  .text-cl1-black {\n    color: var(--color-cl1-black);\n  }\n  .text-cl1-blue-1 {\n    color: var(--color-cl1-blue-1);\n  }\n  .text-cl1-blue-4 {\n    color: var(--color-cl1-blue-4);\n  }\n  .text-cl1-blue-9 {\n    color: var(--color-cl1-blue-9);\n  }\n  .text-cl1-gold-3 {\n    color: var(--color-cl1-gold-3);\n  }\n  .text-cl1-gold-6 {\n    color: var(--color-cl1-gold-6);\n  }\n  .text-cl1-gray-0 {\n    color: var(--color-cl1-gray-0);\n  }\n  .text-cl1-gray-1 {\n    color: var(--color-cl1-gray-1);\n  }\n  .text-cl1-gray-1\\/70 {\n    color: var(--color-cl1-gray-1);\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, var(--color-cl1-gray-1) 70%, transparent);\n    }\n  }\n  .text-cl1-gray-2 {\n    color: var(--color-cl1-gray-2);\n  }\n  .text-cl1-gray-3 {\n    color: var(--color-cl1-gray-3);\n  }\n  .text-cl1-gray-4 {\n    color: var(--color-cl1-gray-4);\n  }\n  .text-cl1-gray-5 {\n    color: var(--color-cl1-gray-5);\n  }\n  .text-cl1-gray-6 {\n    color: var(--color-cl1-gray-6);\n  }\n  .text-cl1-gray-8 {\n    color: var(--color-cl1-gray-8);\n  }\n  .text-cl1-gray-9 {\n    color: var(--color-cl1-gray-9);\n  }\n  .text-cl1-green-3 {\n    color: var(--color-cl1-green-3);\n  }\n  .text-cl1-green-6 {\n    color: var(--color-cl1-green-6);\n  }\n  .text-cl1-new-gray-1 {\n    color: var(--color-cl1-new-gray-1);\n  }\n  .text-cl1-new-gray-2 {\n    color: var(--color-cl1-new-gray-2);\n  }\n  .text-cl1-red-1 {\n    color: var(--color-cl1-red-1);\n  }\n  .text-cl1-red-2 {\n    color: var(--color-cl1-red-2);\n  }\n  .text-cl1-red-3 {\n    color: var(--color-cl1-red-3);\n  }\n  .text-cl1-red-4 {\n    color: var(--color-cl1-red-4);\n  }\n  .text-cl1-red-5 {\n    color: var(--color-cl1-red-5);\n  }\n  .text-cl1-red-6 {\n    color: var(--color-cl1-red-6);\n  }\n  .text-cyan-800 {\n    color: var(--color-cyan-800);\n  }\n  .text-destructive {\n    color: var(--text-color-destructive);\n  }\n  .text-emerald-500 {\n    color: var(--color-emerald-500);\n  }\n  .text-error {\n    color: var(--text-color-error);\n  }\n  .text-fedramp-primary-text {\n    color: var(--color-fedramp-primary-text);\n  }\n  .text-fuchsia-500 {\n    color: var(--color-fuchsia-500);\n  }\n  .text-gray-400 {\n    color: var(--color-gray-400);\n  }\n  .text-gray-500 {\n    color: var(--color-gray-500);\n  }\n  .text-gray-600 {\n    color: var(--color-gray-600);\n  }\n  .text-gray-700 {\n    color: var(--color-gray-700);\n  }\n  .text-gray-800 {\n    color: var(--color-gray-800);\n  }\n  .text-gray-900 {\n    color: var(--color-gray-900);\n  }\n  .text-green-500 {\n    color: var(--color-green-500);\n  }\n  .text-green-600 {\n    color: var(--color-green-600);\n  }\n  .text-green-700 {\n    color: var(--color-green-700);\n  }\n  .text-green-800 {\n    color: var(--color-green-800);\n  }\n  .text-green-900 {\n    color: var(--color-green-900);\n  }\n  .text-indigo-500 {\n    color: var(--color-indigo-500);\n  }\n  .text-indigo-600 {\n    color: var(--color-indigo-600);\n  }\n  .text-indigo-700 {\n    color: var(--color-indigo-700);\n  }\n  .text-inherit {\n    color: inherit;\n  }\n  .text-inherit\\! {\n    color: inherit !important;\n  }\n  .text-kumo-alert {\n    color: var(--text-color-kumo-alert);\n  }\n  .text-kumo-beta {\n    color: var(--text-color-kumo-beta);\n  }\n  .text-kumo-destructive {\n    color: var(--text-color-kumo-destructive);\n  }\n  .text-kumo-error {\n    color: var(--text-color-kumo-error);\n  }\n  .text-kumo-info {\n    color: var(--text-color-kumo-info);\n  }\n  .text-kumo-muted {\n    color: var(--text-color-kumo-muted);\n  }\n  .text-kumo-surface {\n    color: var(--text-color-kumo-surface);\n  }\n  .text-kumo-surface-inverse {\n    color: var(--text-color-kumo-surface-inverse);\n  }\n  .text-muted {\n    color: var(--text-color-muted);\n  }\n  .text-neutral-100 {\n    color: var(--color-neutral-100);\n  }\n  .text-neutral-200 {\n    color: var(--color-neutral-200);\n  }\n  .text-neutral-300 {\n    color: var(--color-neutral-300);\n  }\n  .text-neutral-400 {\n    color: var(--color-neutral-400);\n  }\n  .text-neutral-400\\/80 {\n    color: color-mix(in srgb, oklch(70.8% 0 0) 80%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, var(--color-neutral-400) 80%, transparent);\n    }\n  }\n  .text-neutral-500 {\n    color: var(--color-neutral-500);\n  }\n  .text-neutral-600 {\n    color: var(--color-neutral-600);\n  }\n  .text-neutral-700 {\n    color: var(--color-neutral-700);\n  }\n  .text-neutral-800 {\n    color: var(--color-neutral-800);\n  }\n  .text-neutral-900 {\n    color: var(--color-neutral-900);\n  }\n  .text-neutral-900\\! {\n    color: var(--color-neutral-900) !important;\n  }\n  .text-neutral-950 {\n    color: var(--color-neutral-950);\n  }\n  .text-orange-500 {\n    color: var(--color-orange-500);\n  }\n  .text-orange-600 {\n    color: var(--color-orange-600);\n  }\n  .text-orange-800 {\n    color: var(--color-orange-800);\n  }\n  .text-primary {\n    color: var(--text-color-primary);\n  }\n  .text-purple-800 {\n    color: var(--color-purple-800);\n  }\n  .text-red-300 {\n    color: var(--color-red-300);\n  }\n  .text-red-400 {\n    color: var(--color-red-400);\n  }\n  .text-red-500 {\n    color: var(--color-red-500);\n  }\n  .text-red-600 {\n    color: var(--color-red-600);\n  }\n  .text-red-600\\/75 {\n    color: color-mix(in srgb, oklch(57.7% 0.245 27.325) 75%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, var(--color-red-600) 75%, transparent);\n    }\n  }\n  .text-red-700 {\n    color: var(--color-red-700);\n  }\n  .text-red-800 {\n    color: var(--color-red-800);\n  }\n  .text-red-900 {\n    color: var(--color-red-900);\n  }\n  .text-rose-500 {\n    color: var(--color-rose-500);\n  }\n  .text-secondary {\n    color: var(--text-color-secondary);\n  }\n  .text-sky-500 {\n    color: var(--color-sky-500);\n  }\n  .text-surface {\n    color: var(--text-color-surface);\n  }\n  .text-violet-900 {\n    color: var(--color-violet-900);\n  }\n  .text-white {\n    color: var(--color-white);\n  }\n  .text-yellow-500 {\n    color: var(--color-yellow-500);\n  }\n  .text-yellow-600 {\n    color: var(--color-yellow-600);\n  }\n  .text-yellow-700 {\n    color: var(--color-yellow-700);\n  }\n  .text-yellow-800 {\n    color: var(--color-yellow-800);\n  }\n  .text-yellow-900 {\n    color: var(--color-yellow-900);\n  }\n  .capitalize {\n    text-transform: capitalize;\n  }\n  .lowercase {\n    text-transform: lowercase;\n  }\n  .normal-case {\n    text-transform: none;\n  }\n  .uppercase {\n    text-transform: uppercase;\n  }\n  .italic {\n    font-style: italic;\n  }\n  .not-italic {\n    font-style: normal;\n  }\n  .tabular-nums {\n    --tw-numeric-spacing: tabular-nums;\n    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);\n  }\n  .\\!no-underline {\n    text-decoration-line: none !important;\n  }\n  .\\!underline {\n    text-decoration-line: underline !important;\n  }\n  .line-through {\n    text-decoration-line: line-through;\n  }\n  .no-underline {\n    text-decoration-line: none;\n  }\n  .no-underline\\! {\n    text-decoration-line: none !important;\n  }\n  .underline {\n    text-decoration-line: underline;\n  }\n  .decoration-neutral-400 {\n    text-decoration-color: var(--color-neutral-400);\n  }\n  .\\!decoration-dashed {\n    text-decoration-style: dashed !important;\n  }\n  .decoration-dotted {\n    text-decoration-style: dotted;\n  }\n  .\\!decoration-\\[0\\.5px\\] {\n    text-decoration-thickness: 0.5px !important;\n  }\n  .decoration-\\[0\\.5px\\] {\n    text-decoration-thickness: 0.5px;\n  }\n  .\\!underline-offset-\\[3px\\] {\n    text-underline-offset: 3px !important;\n  }\n  .underline-offset-1 {\n    text-underline-offset: 1px;\n  }\n  .underline-offset-2 {\n    text-underline-offset: 2px;\n  }\n  .underline-offset-4 {\n    text-underline-offset: 4px;\n  }\n  .underline-offset-\\[3px\\] {\n    text-underline-offset: 3px;\n  }\n  .antialiased {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  .\\!placeholder-neutral-400 {\n    &::placeholder {\n      color: var(--color-neutral-400) !important;\n    }\n  }\n  .opacity-0 {\n    opacity: 0%;\n  }\n  .opacity-25 {\n    opacity: 25%;\n  }\n  .opacity-30 {\n    opacity: 30%;\n  }\n  .opacity-40 {\n    opacity: 40%;\n  }\n  .opacity-50 {\n    opacity: 50%;\n  }\n  .opacity-60 {\n    opacity: 60%;\n  }\n  .opacity-70 {\n    opacity: 70%;\n  }\n  .opacity-75 {\n    opacity: 75%;\n  }\n  .opacity-80 {\n    opacity: 80%;\n  }\n  .opacity-90 {\n    opacity: 90%;\n  }\n  .opacity-100 {\n    opacity: 100%;\n  }\n  .\\!shadow-none {\n    --tw-shadow: 0 0 #0000 !important;\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow) !important;\n  }\n  .shadow {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-2xl {\n    --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, rgb(0 0 0 / 0.25));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[-1px_0_var\\(--color-neutral-200\\)\\] {\n    --tw-shadow: -1px 0 var(--tw-shadow-color, var(--color-neutral-200));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_0_0_1px_rgba\\(0\\,0\\,0\\,0\\.5\\)_inset\\] {\n    --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(0,0,0,0.5)) inset;\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_1px_1px_0_rgba\\(0\\,0\\,0\\,\\.05\\)\\] {\n    --tw-shadow: 0 1px 1px 0 var(--tw-shadow-color, rgba(0,0,0,.05));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_1px_3px_rgba\\(0\\,0\\,0\\,0\\.25\\)\\] {\n    --tw-shadow: 0 1px 3px var(--tw-shadow-color, rgba(0,0,0,0.25));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_2px_2px_rgb\\(0_0_0\\/5\\%\\)\\,0_0_4px_8px_theme\\(\\"colors\\.neutral\\.50\\"\\)\\] {\n    --tw-shadow: 0 2px 2px var(--tw-shadow-color, rgb(0 0 0/5%)), 0 0 4px 8px var(--tw-shadow-color, oklch(0.985 0 0));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-lg {\n    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-md {\n    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-none {\n    --tw-shadow: 0 0 #0000;\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-sm {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-xl {\n    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-xs {\n    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .ring {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .ring-0 {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .ring-1 {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .ring-2 {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-black\\/5 {\n    --tw-shadow-color: color-mix(in srgb, #000 5%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-black) 5%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n  .shadow-gray-200 {\n    --tw-shadow-color: oklch(92.8% 0.006 264.531);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-shadow-color: color-mix(in oklab, var(--color-gray-200) var(--tw-shadow-alpha), transparent);\n    }\n  }\n  .shadow-neutral-200 {\n    --tw-shadow-color: oklch(92.2% 0 0);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-shadow-color: color-mix(in oklab, var(--color-neutral-200) var(--tw-shadow-alpha), transparent);\n    }\n  }\n  .\\!ring-destructive {\n    --tw-ring-color: var(--color-destructive) !important;\n  }\n  .\\!ring-kumo-destructive {\n    --tw-ring-color: var(--color-kumo-destructive) !important;\n  }\n  .\\!ring-neutral-400\\/50 {\n    --tw-ring-color: color-mix(in srgb, oklch(70.8% 0 0) 50%, transparent) !important;\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-neutral-400) 50%, transparent) !important;\n    }\n  }\n  .ring-amber-700\\/25 {\n    --tw-ring-color: color-mix(in srgb, oklch(55.5% 0.163 48.998) 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-amber-700) 25%, transparent);\n    }\n  }\n  .ring-black\\/10 {\n    --tw-ring-color: color-mix(in srgb, #000 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-black) 10%, transparent);\n    }\n  }\n  .ring-blue-200 {\n    --tw-ring-color: var(--color-blue-200);\n  }\n  .ring-blue-300 {\n    --tw-ring-color: var(--color-blue-300);\n  }\n  .ring-blue-500 {\n    --tw-ring-color: var(--color-blue-500);\n  }\n  .ring-blue-600 {\n    --tw-ring-color: var(--color-blue-600);\n  }\n  .ring-blue-600\\/20 {\n    --tw-ring-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-blue-600) 20%, transparent);\n    }\n  }\n  .ring-color {\n    --tw-ring-color: var(--color-color);\n  }\n  .ring-destructive {\n    --tw-ring-color: var(--color-destructive);\n  }\n  .ring-green-300 {\n    --tw-ring-color: var(--color-green-300);\n  }\n  .ring-green-600\\/25 {\n    --tw-ring-color: color-mix(in srgb, oklch(62.7% 0.194 149.214) 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-green-600) 25%, transparent);\n    }\n  }\n  .ring-indigo-200 {\n    --tw-ring-color: var(--color-indigo-200);\n  }\n  .ring-kumo-border {\n    --tw-ring-color: var(--color-kumo-border);\n  }\n  .ring-neutral-200 {\n    --tw-ring-color: var(--color-neutral-200);\n  }\n  .ring-neutral-200\\/50 {\n    --tw-ring-color: color-mix(in srgb, oklch(92.2% 0 0) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-neutral-200) 50%, transparent);\n    }\n  }\n  .ring-neutral-300 {\n    --tw-ring-color: var(--color-neutral-300);\n  }\n  .ring-neutral-500\\/25 {\n    --tw-ring-color: color-mix(in srgb, oklch(55.6% 0 0) 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-neutral-500) 25%, transparent);\n    }\n  }\n  .ring-neutral-800\\/10 {\n    --tw-ring-color: color-mix(in srgb, oklch(26.9% 0 0) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-neutral-800) 10%, transparent);\n    }\n  }\n  .ring-neutral-950\\/10 {\n    --tw-ring-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n    }\n  }\n  .ring-neutral-950\\/15 {\n    --tw-ring-color: color-mix(in srgb, oklch(14.5% 0 0) 15%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 15%, transparent);\n    }\n  }\n  .ring-orange-300 {\n    --tw-ring-color: var(--color-orange-300);\n  }\n  .ring-primary {\n    --tw-ring-color: var(--color-primary);\n  }\n  .ring-red-200 {\n    --tw-ring-color: var(--color-red-200);\n  }\n  .ring-red-300 {\n    --tw-ring-color: var(--color-red-300);\n  }\n  .ring-transparent {\n    --tw-ring-color: transparent;\n  }\n  .ring-white\\/25 {\n    --tw-ring-color: color-mix(in srgb, #fff 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-white) 25%, transparent);\n    }\n  }\n  .ring-offset-0 {\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  }\n  .ring-offset-2 {\n    --tw-ring-offset-width: 2px;\n    --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  }\n  .ring-offset-3 {\n    --tw-ring-offset-width: 3px;\n    --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  }\n  .ring-offset-black {\n    --tw-ring-offset-color: var(--color-black);\n  }\n  .outline-hidden {\n    --tw-outline-style: none;\n    outline-style: none;\n    @media (forced-colors: active) {\n      outline: 2px solid transparent;\n      outline-offset: 2px;\n    }\n  }\n  .outline {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n  .outline-0 {\n    outline-style: var(--tw-outline-style);\n    outline-width: 0px;\n  }\n  .outline-1 {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n  .-outline-offset-1 {\n    outline-offset: calc(1px * -1);\n  }\n  .outline-color {\n    outline-color: var(--color-color);\n  }\n  .outline-neutral-300 {\n    outline-color: var(--color-neutral-300);\n  }\n  .blur {\n    --tw-blur: blur(8px);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .grayscale {\n    --tw-grayscale: grayscale(100%);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .invert {\n    --tw-invert: invert(100%);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .\\!filter {\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,) !important;\n  }\n  .filter {\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .backdrop-blur-\\[1px\\] {\n    --tw-backdrop-blur: blur(1px);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-blur-\\[2px\\] {\n    --tw-backdrop-blur: blur(2px);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-blur-\\[10px\\] {\n    --tw-backdrop-blur: blur(10px);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-blur-md {\n    --tw-backdrop-blur: blur(var(--blur-md));\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-blur-sm {\n    --tw-backdrop-blur: blur(var(--blur-sm));\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .\\!transition {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events !important;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function)) !important;\n    transition-duration: var(--tw-duration, var(--default-transition-duration)) !important;\n  }\n  .\\!transition-all {\n    transition-property: all !important;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function)) !important;\n    transition-duration: var(--tw-duration, var(--default-transition-duration)) !important;\n  }\n  .transition {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[background\\] {\n    transition-property: background;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[grid-template-rows\\] {\n    transition-property: grid-template-rows;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[left\\,width\\,transform\\] {\n    transition-property: left,width,transform;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[opacity\\] {\n    transition-property: opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[transform\\,scale\\,opacity\\] {\n    transition-property: transform,scale,opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[width\\] {\n    transition-property: width;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-all {\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-colors {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-opacity {\n    transition-property: opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-shadow {\n    transition-property: box-shadow;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-transform {\n    transition-property: transform, translate, scale, rotate;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-none {\n    transition-property: none;\n  }\n  .delay-100 {\n    transition-delay: 100ms;\n  }\n  .delay-200 {\n    transition-delay: 200ms;\n  }\n  .duration-100 {\n    --tw-duration: 100ms;\n    transition-duration: 100ms;\n  }\n  .duration-150 {\n    --tw-duration: 150ms;\n    transition-duration: 150ms;\n  }\n  .duration-200 {\n    --tw-duration: 200ms;\n    transition-duration: 200ms;\n  }\n  .duration-250 {\n    --tw-duration: 250ms;\n    transition-duration: 250ms;\n  }\n  .duration-300 {\n    --tw-duration: 300ms;\n    transition-duration: 300ms;\n  }\n  .duration-400 {\n    --tw-duration: 400ms;\n    transition-duration: 400ms;\n  }\n  .duration-500 {\n    --tw-duration: 500ms;\n    transition-duration: 500ms;\n  }\n  .duration-600 {\n    --tw-duration: 600ms;\n    transition-duration: 600ms;\n  }\n  .duration-\\[50\\] {\n    --tw-duration: 50;\n    transition-duration: 50;\n  }\n  .duration-\\[160ms\\] {\n    --tw-duration: 160ms;\n    transition-duration: 160ms;\n  }\n  .duration-\\[250ms\\] {\n    --tw-duration: 250ms;\n    transition-duration: 250ms;\n  }\n  .duration-\\[400ms\\] {\n    --tw-duration: 400ms;\n    transition-duration: 400ms;\n  }\n  .\\[transition-duration\\:250ms\\] {\n    transition-duration: 250ms;\n  }\n  .ease-\\[cubic-bezier\\(0\\.66\\,0\\,0\\.34\\,1\\)\\] {\n    --tw-ease: cubic-bezier(0.66,0,0.34,1);\n    transition-timing-function: cubic-bezier(0.66,0,0.34,1);\n  }\n  .ease-\\[cubic-bezier\\(0\\.77\\,0\\,0\\.175\\,1\\)\\] {\n    --tw-ease: cubic-bezier(0.77,0,0.175,1);\n    transition-timing-function: cubic-bezier(0.77,0,0.175,1);\n  }\n  .ease-in {\n    --tw-ease: var(--ease-in);\n    transition-timing-function: var(--ease-in);\n  }\n  .ease-in-out {\n    --tw-ease: var(--ease-in-out);\n    transition-timing-function: var(--ease-in-out);\n  }\n  .ease-linear {\n    --tw-ease: linear;\n    transition-timing-function: linear;\n  }\n  .ease-out {\n    --tw-ease: var(--ease-out);\n    transition-timing-function: var(--ease-out);\n  }\n  .will-change-\\[top\\] {\n    will-change: top;\n  }\n  .will-change-transform {\n    will-change: transform;\n  }\n  .outline-none {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .select-all {\n    -webkit-user-select: all;\n    user-select: all;\n  }\n  .select-auto {\n    -webkit-user-select: auto;\n    user-select: auto;\n  }\n  .select-none {\n    -webkit-user-select: none;\n    user-select: none;\n  }\n  .select-text {\n    -webkit-user-select: text;\n    user-select: text;\n  }\n  .\\[--gap\\:0\\.75rem\\] {\n    --gap: 0.75rem;\n  }\n  .\\[--height\\:var\\(--toast-frontmost-height\\,var\\(--toast-height\\)\\)\\] {\n    --height: var(--toast-frontmost-height,var(--toast-height));\n  }\n  .\\[--offset-y\\:calc\\(var\\(--toast-offset-y\\)\\*-1\\+calc\\(var\\(--toast-index\\)\\*var\\(--gap\\)\\*-1\\)\\+var\\(--toast-swipe-movement-y\\)\\)\\] {\n    --offset-y: calc(var(--toast-offset-y) * -1 + calc(var(--toast-index) * var(--gap) * -1) + var(--toast-swipe-movement-y));\n  }\n  .\\[--peek\\:0\\.75rem\\] {\n    --peek: 0.75rem;\n  }\n  .\\[--scale\\:calc\\(max\\(0\\,1-\\(var\\(--toast-index\\)\\*0\\.1\\)\\)\\)\\] {\n    --scale: calc(max(0, 1 - (var(--toast-index) * 0.1)));\n  }\n  .\\[--shrink\\:calc\\(1-var\\(--scale\\)\\)\\] {\n    --shrink: calc(1 - var(--scale));\n  }\n  .\\[-webkit-tap-highlight-color\\:rgba\\(0\\,0\\,0\\,0\\)\\] {\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  }\n  .\\[animation-duration\\:0\\.5s\\] {\n    animation-duration: 0.5s;\n  }\n  .\\[animation-duration\\:0\\.6s\\] {\n    animation-duration: 0.6s;\n  }\n  .\\[scroll-timeline\\:--scroller\\] {\n    scroll-timeline: --scroller;\n  }\n  .\\[transition\\:transform_0\\.5s_cubic-bezier\\(0\\.22\\,1\\,0\\.36\\,1\\)\\,opacity_0\\.5s\\,height_0\\.15s\\] {\n    transition: transform 0.5s cubic-bezier(0.22,1,0.36,1),opacity 0.5s,height 0.15s;\n  }\n  .backface-hidden {\n    backface-visibility: hidden;\n  }\n  .ring-inset {\n    --tw-ring-inset: inset;\n  }\n  .\\*\\:flex {\n    :is(& > *) {\n      display: flex;\n    }\n  }\n  .\\*\\:h-10 {\n    :is(& > *) {\n      height: calc(var(--spacing) * 10);\n    }\n  }\n  .\\*\\:items-center {\n    :is(& > *) {\n      align-items: center;\n    }\n  }\n  .\\*\\:border-b {\n    :is(& > *) {\n      border-bottom-style: var(--tw-border-style);\n      border-bottom-width: 1px;\n    }\n  }\n  .\\*\\:border-color {\n    :is(& > *) {\n      border-color: var(--color-color);\n    }\n  }\n  .\\*\\:p-3 {\n    :is(& > *) {\n      padding: calc(var(--spacing) * 3);\n    }\n  }\n  .\\*\\:font-medium {\n    :is(& > *) {\n      --tw-font-weight: var(--font-weight-medium);\n      font-weight: var(--font-weight-medium);\n    }\n  }\n  .not-first\\:rounded-t-none {\n    &:not(*:first-child) {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0;\n    }\n  }\n  .not-last\\:rounded-b-none {\n    &:not(*:last-child) {\n      border-bottom-right-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n  }\n  .not-last\\:\\!border-r {\n    &:not(*:last-child) {\n      border-right-style: var(--tw-border-style) !important;\n      border-right-width: 1px !important;\n    }\n  }\n  .not-first-of-type\\:mt-0\\.5 {\n    &:not(*:first-of-type) {\n      margin-top: calc(var(--spacing) * 0.5);\n    }\n  }\n  .not-hover\\:\\!no-underline {\n    &:not(*:hover) {\n      text-decoration-line: none !important;\n    }\n    @media not (hover: hover) {\n      text-decoration-line: none !important;\n    }\n  }\n  .group-first\\:rounded-l-full {\n    &:is(:where(.group):first-child *) {\n      border-top-left-radius: calc(infinity * 1px);\n      border-bottom-left-radius: calc(infinity * 1px);\n    }\n  }\n  .group-last\\:rounded-r-full {\n    &:is(:where(.group):last-child *) {\n      border-top-right-radius: calc(infinity * 1px);\n      border-bottom-right-radius: calc(infinity * 1px);\n    }\n  }\n  .group-hover\\:pointer-events-auto {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        pointer-events: auto;\n      }\n    }\n  }\n  .group-hover\\:block {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        display: block;\n      }\n    }\n  }\n  .group-hover\\:bg-\\[\\#F8F8F8\\] {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        background-color: #F8F8F8;\n      }\n    }\n  }\n  .group-hover\\:text-\\[\\#f6821f\\] {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        color: #f6821f;\n      }\n    }\n  }\n  .group-hover\\:underline {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        text-decoration-line: underline;\n      }\n    }\n  }\n  .group-hover\\:opacity-0 {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        opacity: 0%;\n      }\n    }\n  }\n  .group-hover\\:opacity-100 {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        opacity: 100%;\n      }\n    }\n  }\n  .group-hover\\/choice\\:translate-x-0 {\n    &:is(:where(.group\\/choice):hover *) {\n      @media (hover: hover) {\n        --tw-translate-x: calc(var(--spacing) * 0);\n        translate: var(--tw-translate-x) var(--tw-translate-y);\n      }\n    }\n  }\n  .group-hover\\/choice\\:text-neutral-950 {\n    &:is(:where(.group\\/choice):hover *) {\n      @media (hover: hover) {\n        color: var(--color-neutral-950);\n      }\n    }\n  }\n  .group-hover\\/choice\\:opacity-100 {\n    &:is(:where(.group\\/choice):hover *) {\n      @media (hover: hover) {\n        opacity: 100%;\n      }\n    }\n  }\n  .group-hover\\/expander\\:text-neutral-600 {\n    &:is(:where(.group\\/expander):hover *) {\n      @media (hover: hover) {\n        color: var(--color-neutral-600);\n      }\n    }\n  }\n  .group-focus-visible\\/escape\\:ring-neutral-400 {\n    &:is(:where(.group\\/escape):focus-visible *) {\n      --tw-ring-color: var(--color-neutral-400);\n    }\n  }\n  .group-data-\\[focused\\]\\:bg-secondary-hover {\n    &:is(:where(.group)[data-focused] *) {\n      background-color: var(--color-secondary-hover);\n    }\n  }\n  .group-data-\\[highlighted\\]\\:opacity-100 {\n    &:is(:where(.group)[data-highlighted] *) {\n      opacity: 100%;\n    }\n  }\n  .group-data-\\[invalid\\]\\:border-destructive {\n    &:is(:where(.group)[data-invalid] *) {\n      border-color: var(--color-destructive);\n    }\n  }\n  .group-data-\\[invalid\\]\\:ring-\\[var\\(--text-color-error\\)\\] {\n    &:is(:where(.group)[data-invalid] *) {\n      --tw-ring-color: var(--text-color-error);\n    }\n  }\n  .group-data-\\[panel-open\\]\\:rotate-0 {\n    &:is(:where(.group)[data-panel-open] *) {\n      rotate: 0deg;\n    }\n  }\n  .group-data-\\[selected\\]\\:opacity-100 {\n    &:is(:where(.group)[data-selected] *) {\n      opacity: 100%;\n    }\n  }\n  .group-\\[\\&\\:hover\\,\\&\\:focus\\]\\/escape\\:scale-100 {\n    &:is(:is(:where(.group\\/escape):hover,:where(.group\\/escape):focus) *) {\n      --tw-scale-x: 100%;\n      --tw-scale-y: 100%;\n      --tw-scale-z: 100%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .group-\\[\\&\\:hover\\,\\&\\:focus\\]\\/escape\\:opacity-100 {\n    &:is(:is(:where(.group\\/escape):hover,:where(.group\\/escape):focus) *) {\n      opacity: 100%;\n    }\n  }\n  .group-\\[\\&\\:hover\\,\\&\\:focus-visible\\]\\/choice\\:translate-x-0 {\n    &:is(:is(:where(.group\\/choice):hover,:where(.group\\/choice):focus-visible) *) {\n      --tw-translate-x: calc(var(--spacing) * 0);\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .group-\\[\\&\\:hover\\,\\&\\:focus-visible\\]\\/choice\\:opacity-100 {\n    &:is(:is(:where(.group\\/choice):hover,:where(.group\\/choice):focus-visible) *) {\n      opacity: 100%;\n    }\n  }\n  .group-\\[\\[data-kumo-type\\=\\"entity-list\\"\\]\\]\\:rounded-none {\n    &:is(:where(.group):is([data-kumo-type="entity-list"]) *) {\n      border-radius: 0;\n    }\n  }\n  .group-\\[\\[data-kumo-type\\=\\"entity-list\\"\\]\\]\\:shadow-none {\n    &:is(:where(.group):is([data-kumo-type="entity-list"]) *) {\n      --tw-shadow: 0 0 #0000;\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .group-\\[\\[data-kumo-type\\=\\"entity-list\\"\\]\\]\\:ring-0 {\n    &:is(:where(.group):is([data-kumo-type="entity-list"]) *) {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .peer-focus-visible\\:bg-secondary-hover {\n    &:is(:where(.peer):focus-visible ~ *) {\n      background-color: var(--color-secondary-hover);\n    }\n  }\n  .peer-focus-visible\\:ring-active {\n    &:is(:where(.peer):focus-visible ~ *) {\n      --tw-ring-color: var(--color-active);\n    }\n  }\n  .peer-disabled\\:cursor-not-allowed {\n    &:is(:where(.peer):disabled ~ *) {\n      cursor: not-allowed;\n    }\n  }\n  .peer-disabled\\:peer-focus-visible\\:bg-secondary {\n    &:is(:where(.peer):disabled ~ *) {\n      &:is(:where(.peer):focus-visible ~ *) {\n        background-color: var(--color-secondary);\n      }\n    }\n  }\n  .selection\\:bg-blue-300 {\n    & *::selection {\n      background-color: var(--color-blue-300);\n    }\n    &::selection {\n      background-color: var(--color-blue-300);\n    }\n  }\n  .selection\\:bg-cl1-blue-7 {\n    & *::selection {\n      background-color: var(--color-cl1-blue-7);\n    }\n    &::selection {\n      background-color: var(--color-cl1-blue-7);\n    }\n  }\n  .selection\\:bg-kumo-alert-selection {\n    & *::selection {\n      background-color: var(--color-kumo-alert-selection);\n    }\n    &::selection {\n      background-color: var(--color-kumo-alert-selection);\n    }\n  }\n  .selection\\:bg-kumo-error-selection {\n    & *::selection {\n      background-color: var(--color-kumo-error-selection);\n    }\n    &::selection {\n      background-color: var(--color-kumo-error-selection);\n    }\n  }\n  .selection\\:bg-kumo-info-selection {\n    & *::selection {\n      background-color: var(--color-kumo-info-selection);\n    }\n    &::selection {\n      background-color: var(--color-kumo-info-selection);\n    }\n  }\n  .selection\\:bg-red-300 {\n    & *::selection {\n      background-color: var(--color-red-300);\n    }\n    &::selection {\n      background-color: var(--color-red-300);\n    }\n  }\n  .selection\\:bg-yellow-300 {\n    & *::selection {\n      background-color: var(--color-yellow-300);\n    }\n    &::selection {\n      background-color: var(--color-yellow-300);\n    }\n  }\n  .selection\\:text-cl1-black {\n    & *::selection {\n      color: var(--color-cl1-black);\n    }\n    &::selection {\n      color: var(--color-cl1-black);\n    }\n  }\n  .placeholder\\:text-base {\n    &::placeholder {\n      font-size: var(--text-base);\n      line-height: var(--tw-leading, var(--text-base--line-height));\n    }\n  }\n  .placeholder\\:\\!text-cl1-gray-4 {\n    &::placeholder {\n      color: var(--color-cl1-gray-4) !important;\n    }\n  }\n  .placeholder\\:\\!text-muted {\n    &::placeholder {\n      color: var(--text-color-muted) !important;\n    }\n  }\n  .placeholder\\:\\!text-neutral-400 {\n    &::placeholder {\n      color: var(--color-neutral-400) !important;\n    }\n  }\n  .placeholder\\:text-kumo-muted {\n    &::placeholder {\n      color: var(--text-color-kumo-muted);\n    }\n  }\n  .placeholder\\:text-muted {\n    &::placeholder {\n      color: var(--text-color-muted);\n    }\n  }\n  .placeholder\\:text-neutral-400 {\n    &::placeholder {\n      color: var(--color-neutral-400);\n    }\n  }\n  .before\\:absolute {\n    &::before {\n      content: var(--tw-content);\n      position: absolute;\n    }\n  }\n  .before\\:top-0 {\n    &::before {\n      content: var(--tw-content);\n      top: calc(var(--spacing) * 0);\n    }\n  }\n  .before\\:top-1\\/2 {\n    &::before {\n      content: var(--tw-content);\n      top: calc(1/2 * 100%);\n    }\n  }\n  .before\\:-right-7 {\n    &::before {\n      content: var(--tw-content);\n      right: calc(var(--spacing) * -7);\n    }\n  }\n  .before\\:-bottom-7 {\n    &::before {\n      content: var(--tw-content);\n      bottom: calc(var(--spacing) * -7);\n    }\n  }\n  .before\\:-left-7 {\n    &::before {\n      content: var(--tw-content);\n      left: calc(var(--spacing) * -7);\n    }\n  }\n  .before\\:left-1\\/2 {\n    &::before {\n      content: var(--tw-content);\n      left: calc(1/2 * 100%);\n    }\n  }\n  .before\\:-z-10 {\n    &::before {\n      content: var(--tw-content);\n      z-index: calc(10 * -1);\n    }\n  }\n  .before\\:mr-2 {\n    &::before {\n      content: var(--tw-content);\n      margin-right: calc(var(--spacing) * 2);\n    }\n  }\n  .before\\:ml-\\[-5\\.5px\\] {\n    &::before {\n      content: var(--tw-content);\n      margin-left: -5.5px;\n    }\n  }\n  .before\\:h-full {\n    &::before {\n      content: var(--tw-content);\n      height: 100%;\n    }\n  }\n  .before\\:h-px {\n    &::before {\n      content: var(--tw-content);\n      height: 1px;\n    }\n  }\n  .before\\:min-h-\\[10px\\] {\n    &::before {\n      content: var(--tw-content);\n      min-height: 10px;\n    }\n  }\n  .before\\:w-3 {\n    &::before {\n      content: var(--tw-content);\n      width: calc(var(--spacing) * 3);\n    }\n  }\n  .before\\:w-full {\n    &::before {\n      content: var(--tw-content);\n      width: 100%;\n    }\n  }\n  .before\\:min-w-\\[10px\\] {\n    &::before {\n      content: var(--tw-content);\n      min-width: 10px;\n    }\n  }\n  .before\\:-translate-x-1\\/2 {\n    &::before {\n      content: var(--tw-content);\n      --tw-translate-x: calc(calc(1/2 * 100%) * -1);\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .before\\:-translate-y-1\\/2 {\n    &::before {\n      content: var(--tw-content);\n      --tw-translate-y: calc(calc(1/2 * 100%) * -1);\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .before\\:border-t {\n    &::before {\n      content: var(--tw-content);\n      border-top-style: var(--tw-border-style);\n      border-top-width: 1px;\n    }\n  }\n  .before\\:border-neutral-950\\/10 {\n    &::before {\n      content: var(--tw-content);\n      border-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n      }\n    }\n  }\n  .before\\:bg-neutral-50 {\n    &::before {\n      content: var(--tw-content);\n      background-color: var(--color-neutral-50);\n    }\n  }\n  .before\\:bg-neutral-400 {\n    &::before {\n      content: var(--tw-content);\n      background-color: var(--color-neutral-400);\n    }\n  }\n  .before\\:text-cl1-gray-5 {\n    &::before {\n      content: var(--tw-content);\n      color: var(--color-cl1-gray-5);\n    }\n  }\n  .before\\:content-\\[\\\'\\\'\\] {\n    &::before {\n      --tw-content: \'\';\n      content: var(--tw-content);\n    }\n  }\n  .before\\:content-\\[\\\'•\\\'\\] {\n    &::before {\n      --tw-content: \'\\2022\';\n      content: var(--tw-content);\n    }\n  }\n  .after\\:pointer-events-none {\n    &::after {\n      content: var(--tw-content);\n      pointer-events: none;\n    }\n  }\n  .after\\:absolute {\n    &::after {\n      content: var(--tw-content);\n      position: absolute;\n    }\n  }\n  .after\\:inset-0 {\n    &::after {\n      content: var(--tw-content);\n      inset: calc(var(--spacing) * 0);\n    }\n  }\n  .after\\:inset-1 {\n    &::after {\n      content: var(--tw-content);\n      inset: calc(var(--spacing) * 1);\n    }\n  }\n  .after\\:inset-x-6 {\n    &::after {\n      content: var(--tw-content);\n      inset-inline: calc(var(--spacing) * 6);\n    }\n  }\n  .after\\:top-0 {\n    &::after {\n      content: var(--tw-content);\n      top: calc(var(--spacing) * 0);\n    }\n  }\n  .after\\:top-full {\n    &::after {\n      content: var(--tw-content);\n      top: 100%;\n    }\n  }\n  .after\\:bottom-8 {\n    &::after {\n      content: var(--tw-content);\n      bottom: calc(var(--spacing) * 8);\n    }\n  }\n  .after\\:left-0 {\n    &::after {\n      content: var(--tw-content);\n      left: calc(var(--spacing) * 0);\n    }\n  }\n  .after\\:-z-10 {\n    &::after {\n      content: var(--tw-content);\n      z-index: calc(10 * -1);\n    }\n  }\n  .after\\:mx-1 {\n    &::after {\n      content: var(--tw-content);\n      margin-inline: calc(var(--spacing) * 1);\n    }\n  }\n  .after\\:ml-\\[-5\\.5px\\] {\n    &::after {\n      content: var(--tw-content);\n      margin-left: -5.5px;\n    }\n  }\n  .after\\:h-\\[calc\\(var\\(--gap\\)\\+1px\\)\\] {\n    &::after {\n      content: var(--tw-content);\n      height: calc(var(--gap) + 1px);\n    }\n  }\n  .after\\:h-px {\n    &::after {\n      content: var(--tw-content);\n      height: 1px;\n    }\n  }\n  .after\\:w-3 {\n    &::after {\n      content: var(--tw-content);\n      width: calc(var(--spacing) * 3);\n    }\n  }\n  .after\\:w-full {\n    &::after {\n      content: var(--tw-content);\n      width: 100%;\n    }\n  }\n  .after\\:rotate-90 {\n    &::after {\n      content: var(--tw-content);\n      rotate: 90deg;\n    }\n  }\n  .after\\:rounded {\n    &::after {\n      content: var(--tw-content);\n      border-radius: 0.25rem;\n    }\n  }\n  .after\\:rounded-md {\n    &::after {\n      content: var(--tw-content);\n      border-radius: var(--radius-md);\n    }\n  }\n  .after\\:rounded-xl {\n    &::after {\n      content: var(--tw-content);\n      border-radius: var(--radius-xl);\n    }\n  }\n  .after\\:border {\n    &::after {\n      content: var(--tw-content);\n      border-style: var(--tw-border-style);\n      border-width: 1px;\n    }\n  }\n  .after\\:border-dashed {\n    &::after {\n      content: var(--tw-content);\n      --tw-border-style: dashed;\n      border-style: dashed;\n    }\n  }\n  .after\\:border-neutral-950\\/10 {\n    &::after {\n      content: var(--tw-content);\n      border-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n      }\n    }\n  }\n  .after\\:bg-inherit {\n    &::after {\n      content: var(--tw-content);\n      background-color: inherit;\n    }\n  }\n  .after\\:bg-neutral-400 {\n    &::after {\n      content: var(--tw-content);\n      background-color: var(--color-neutral-400);\n    }\n  }\n  .after\\:text-xs {\n    &::after {\n      content: var(--tw-content);\n      font-size: var(--text-xs);\n      line-height: var(--tw-leading, var(--text-xs--line-height));\n    }\n  }\n  .after\\:text-cl1-gray-6 {\n    &::after {\n      content: var(--tw-content);\n      color: var(--color-cl1-gray-6);\n    }\n  }\n  .after\\:shadow-xs {\n    &::after {\n      content: var(--tw-content);\n      --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .after\\:ring-1 {\n    &::after {\n      content: var(--tw-content);\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .after\\:ring-neutral-900\\! {\n    &::after {\n      content: var(--tw-content);\n      --tw-ring-color: var(--color-neutral-900) !important;\n    }\n  }\n  .after\\:ring-neutral-950\\/15 {\n    &::after {\n      content: var(--tw-content);\n      --tw-ring-color: color-mix(in srgb, oklch(14.5% 0 0) 15%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 15%, transparent);\n      }\n    }\n  }\n  .after\\:ring-transparent {\n    &::after {\n      content: var(--tw-content);\n      --tw-ring-color: transparent;\n    }\n  }\n  .after\\:transition-all {\n    &::after {\n      content: var(--tw-content);\n      transition-property: all;\n      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n      transition-duration: var(--tw-duration, var(--default-transition-duration));\n    }\n  }\n  .after\\:content-\\[\\\'\\\'\\] {\n    &::after {\n      --tw-content: \'\';\n      content: var(--tw-content);\n    }\n  }\n  .after\\:content-\\[\\\'\\/\\\'\\] {\n    &::after {\n      --tw-content: \'/\';\n      content: var(--tw-content);\n    }\n  }\n  .peer-focus-visible\\:after\\:ring-active {\n    &:is(:where(.peer):focus-visible ~ *) {\n      &::after {\n        content: var(--tw-content);\n        --tw-ring-color: var(--color-active);\n      }\n    }\n  }\n  .first\\:mt-0 {\n    &:first-child {\n      margin-top: calc(var(--spacing) * 0);\n    }\n  }\n  .first\\:mt-1 {\n    &:first-child {\n      margin-top: calc(var(--spacing) * 1);\n    }\n  }\n  .first\\:mb-2 {\n    &:first-child {\n      margin-bottom: calc(var(--spacing) * 2);\n    }\n  }\n  .first\\:rounded-t-md {\n    &:first-child {\n      border-top-left-radius: var(--radius-md);\n      border-top-right-radius: var(--radius-md);\n    }\n  }\n  .first\\:pt-0 {\n    &:first-child {\n      padding-top: calc(var(--spacing) * 0);\n    }\n  }\n  .first\\:pl-2 {\n    &:first-child {\n      padding-left: calc(var(--spacing) * 2);\n    }\n  }\n  .first\\:pl-4 {\n    &:first-child {\n      padding-left: calc(var(--spacing) * 4);\n    }\n  }\n  .last\\:mb-1 {\n    &:last-child {\n      margin-bottom: calc(var(--spacing) * 1);\n    }\n  }\n  .last\\:rounded-b-md {\n    &:last-child {\n      border-bottom-right-radius: var(--radius-md);\n      border-bottom-left-radius: var(--radius-md);\n    }\n  }\n  .last\\:\\!border-r-0 {\n    &:last-child {\n      border-right-style: var(--tw-border-style) !important;\n      border-right-width: 0px !important;\n    }\n  }\n  .last\\:border-b-0 {\n    &:last-child {\n      border-bottom-style: var(--tw-border-style);\n      border-bottom-width: 0px;\n    }\n  }\n  .last\\:pr-2 {\n    &:last-child {\n      padding-right: calc(var(--spacing) * 2);\n    }\n  }\n  .last\\:pb-0 {\n    &:last-child {\n      padding-bottom: calc(var(--spacing) * 0);\n    }\n  }\n  .last\\:after\\:content-\\[\\\'\\\'\\] {\n    &:last-child {\n      &::after {\n        --tw-content: \'\';\n        content: var(--tw-content);\n      }\n    }\n  }\n  .empty\\:m-0 {\n    &:empty {\n      margin: calc(var(--spacing) * 0);\n    }\n  }\n  .empty\\:hidden {\n    &:empty {\n      display: none;\n    }\n  }\n  .empty\\:p-0 {\n    &:empty {\n      padding: calc(var(--spacing) * 0);\n    }\n  }\n  .empty\\:after\\:mx-0 {\n    &:empty {\n      &::after {\n        content: var(--tw-content);\n        margin-inline: calc(var(--spacing) * 0);\n      }\n    }\n  }\n  .empty\\:after\\:content-\\[\\\'\\\'\\] {\n    &:empty {\n      &::after {\n        --tw-content: \'\';\n        content: var(--tw-content);\n      }\n    }\n  }\n  .focus-within\\:border-active {\n    &:focus-within {\n      border-color: var(--color-active);\n    }\n  }\n  .focus-within\\:border-gray-400 {\n    &:focus-within {\n      border-color: var(--color-gray-400);\n    }\n  }\n  .focus-within\\:border-primary\\! {\n    &:focus-within {\n      border-color: var(--color-primary) !important;\n    }\n  }\n  .focus-within\\:shadow-sm {\n    &:focus-within {\n      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus-within\\:ring-2 {\n    &:focus-within {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus-within\\:ring-active {\n    &:focus-within {\n      --tw-ring-color: var(--color-active);\n    }\n  }\n  .focus-within\\:ring-kumo-active {\n    &:focus-within {\n      --tw-ring-color: var(--color-kumo-active);\n    }\n  }\n  .focus-within\\:ring-primary {\n    &:focus-within {\n      --tw-ring-color: var(--color-primary);\n    }\n  }\n  .focus-within\\:ring-offset-2 {\n    &:focus-within {\n      --tw-ring-offset-width: 2px;\n      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    }\n  }\n  .focus-within\\:ring-offset-input {\n    &:focus-within {\n      --tw-ring-offset-color: var(--color-input);\n    }\n  }\n  .focus-within\\:outline-2 {\n    &:focus-within {\n      outline-style: var(--tw-outline-style);\n      outline-width: 2px;\n    }\n  }\n  .focus-within\\:-outline-offset-2 {\n    &:focus-within {\n      outline-offset: calc(2px * -1);\n    }\n  }\n  .focus-within\\:outline-blue-700 {\n    &:focus-within {\n      outline-color: var(--color-blue-700);\n    }\n  }\n  .focus-within\\:outline-indigo-600 {\n    &:focus-within {\n      outline-color: var(--color-indigo-600);\n    }\n  }\n  .hover\\:w-0\\.5 {\n    &:hover {\n      @media (hover: hover) {\n        width: calc(var(--spacing) * 0.5);\n      }\n    }\n  }\n  .hover\\:w-1 {\n    &:hover {\n      @media (hover: hover) {\n        width: calc(var(--spacing) * 1);\n      }\n    }\n  }\n  .hover\\:-translate-y-0\\.5 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-translate-y: calc(var(--spacing) * -0.5);\n        translate: var(--tw-translate-x) var(--tw-translate-y);\n      }\n    }\n  }\n  .hover\\:cursor-default {\n    &:hover {\n      @media (hover: hover) {\n        cursor: default;\n      }\n    }\n  }\n  .hover\\:cursor-pointer {\n    &:hover {\n      @media (hover: hover) {\n        cursor: pointer;\n      }\n    }\n  }\n  .hover\\:border-active {\n    &:hover {\n      @media (hover: hover) {\n        border-color: var(--color-active);\n      }\n    }\n  }\n  .hover\\:border-neutral-300 {\n    &:hover {\n      @media (hover: hover) {\n        border-color: var(--color-neutral-300);\n      }\n    }\n  }\n  .hover\\:border-neutral-300\\/80 {\n    &:hover {\n      @media (hover: hover) {\n        border-color: color-mix(in srgb, oklch(87% 0 0) 80%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          border-color: color-mix(in oklab, var(--color-neutral-300) 80%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:\\!bg-blue-700 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-blue-700) !important;\n      }\n    }\n  }\n  .hover\\:\\!bg-neutral-100 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-neutral-100) !important;\n      }\n    }\n  }\n  .hover\\:\\!bg-red-50 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-red-50) !important;\n      }\n    }\n  }\n  .hover\\:bg-accent {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-accent);\n      }\n    }\n  }\n  .hover\\:bg-blue-50 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-blue-50);\n      }\n    }\n  }\n  .hover\\:bg-blue-200 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-blue-200);\n      }\n    }\n  }\n  .hover\\:bg-blue-300 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-blue-300);\n      }\n    }\n  }\n  .hover\\:bg-blue-300\\/40 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, oklch(80.9% 0.105 251.813) 40%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-blue-300) 40%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-blue-500 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-blue-500);\n      }\n    }\n  }\n  .hover\\:bg-blue-500\\/30 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 30%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-blue-500) 30%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-blue-700 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-blue-700);\n      }\n    }\n  }\n  .hover\\:bg-cl1-blue-6 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-cl1-blue-6);\n      }\n    }\n  }\n  .hover\\:bg-cl1-gray-7 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-cl1-gray-7);\n      }\n    }\n  }\n  .hover\\:bg-cl1-gray-8 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-cl1-gray-8);\n      }\n    }\n  }\n  .hover\\:bg-cl1-gray-9 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-cl1-gray-9);\n      }\n    }\n  }\n  .hover\\:bg-cl1-red-6\\/40 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-cl1-red-6);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-cl1-red-6) 40%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-destructive\\/70 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-destructive);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-destructive) 70%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-gray-50 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-gray-50);\n      }\n    }\n  }\n  .hover\\:bg-gray-100 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-gray-100);\n      }\n    }\n  }\n  .hover\\:bg-gray-700\\/50 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, oklch(37.3% 0.034 259.733) 50%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-gray-700) 50%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-kumo-accent {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-kumo-accent);\n      }\n    }\n  }\n  .hover\\:bg-kumo-destructive\\/70 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, light-dark(\n    var(--color-red-600, oklch(57.7% 0.245 27.325)),\n    var(--color-red-600, oklch(57.7% 0.245 27.325))\n  ) 70%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-kumo-destructive) 70%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-kumo-primary\\/70 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, light-dark(#056dff, #056dff) 70%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-kumo-primary) 70%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-muted {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-muted);\n      }\n    }\n  }\n  .hover\\:bg-neutral-50 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-neutral-50);\n      }\n    }\n  }\n  .hover\\:bg-neutral-100 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-neutral-100);\n      }\n    }\n  }\n  .hover\\:bg-neutral-150 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-neutral-150);\n      }\n    }\n  }\n  .hover\\:bg-neutral-200 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-neutral-200);\n      }\n    }\n  }\n  .hover\\:bg-neutral-200\\/50 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, oklch(92.2% 0 0) 50%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-neutral-200) 50%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-neutral-300 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-neutral-300);\n      }\n    }\n  }\n  .hover\\:bg-orange-700 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-orange-700);\n      }\n    }\n  }\n  .hover\\:bg-primary {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-primary);\n      }\n    }\n  }\n  .hover\\:bg-primary\\/30 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-primary);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-primary) 30%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-primary\\/70 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-primary);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-primary) 70%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-secondary-hover {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-secondary-hover);\n      }\n    }\n  }\n  .hover\\:bg-surface-active {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-surface-active);\n      }\n    }\n  }\n  .hover\\:bg-surface-secondary {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-surface-secondary);\n      }\n    }\n  }\n  .hover\\:bg-transparent {\n    &:hover {\n      @media (hover: hover) {\n        background-color: transparent;\n      }\n    }\n  }\n  .hover\\:bg-white {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-white);\n      }\n    }\n  }\n  .hover\\:\\!text-inherit {\n    &:hover {\n      @media (hover: hover) {\n        color: inherit !important;\n      }\n    }\n  }\n  .hover\\:\\!text-neutral-700 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-neutral-700) !important;\n      }\n    }\n  }\n  .hover\\:text-black {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-black);\n      }\n    }\n  }\n  .hover\\:text-blue-600 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-blue-600);\n      }\n    }\n  }\n  .hover\\:text-blue-700 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-blue-700);\n      }\n    }\n  }\n  .hover\\:text-blue-800 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-blue-800);\n      }\n    }\n  }\n  .hover\\:text-cl1-gray-1 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-cl1-gray-1);\n      }\n    }\n  }\n  .hover\\:text-cl1-gray-2 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-cl1-gray-2);\n      }\n    }\n  }\n  .hover\\:text-gray-800 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-gray-800);\n      }\n    }\n  }\n  .hover\\:text-neutral-600 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-neutral-600);\n      }\n    }\n  }\n  .hover\\:text-neutral-700 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-neutral-700);\n      }\n    }\n  }\n  .hover\\:text-neutral-800 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-neutral-800);\n      }\n    }\n  }\n  .hover\\:text-neutral-900 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-neutral-900);\n      }\n    }\n  }\n  .hover\\:text-neutral-950 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-neutral-950);\n      }\n    }\n  }\n  .hover\\:text-red-500 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-red-500);\n      }\n    }\n  }\n  .hover\\:text-red-600 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-red-600);\n      }\n    }\n  }\n  .hover\\:text-secondary {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--text-color-secondary);\n      }\n    }\n  }\n  .hover\\:text-surface {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--text-color-surface);\n      }\n    }\n  }\n  .hover\\:text-white\\! {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-white) !important;\n      }\n    }\n  }\n  .hover\\:\\!underline {\n    &:hover {\n      @media (hover: hover) {\n        text-decoration-line: underline !important;\n      }\n    }\n  }\n  .hover\\:no-underline {\n    &:hover {\n      @media (hover: hover) {\n        text-decoration-line: none;\n      }\n    }\n  }\n  .hover\\:underline {\n    &:hover {\n      @media (hover: hover) {\n        text-decoration-line: underline;\n      }\n    }\n  }\n  .hover\\:underline\\! {\n    &:hover {\n      @media (hover: hover) {\n        text-decoration-line: underline !important;\n      }\n    }\n  }\n  .hover\\:opacity-50 {\n    &:hover {\n      @media (hover: hover) {\n        opacity: 50%;\n      }\n    }\n  }\n  .hover\\:opacity-60 {\n    &:hover {\n      @media (hover: hover) {\n        opacity: 60%;\n      }\n    }\n  }\n  .hover\\:opacity-70 {\n    &:hover {\n      @media (hover: hover) {\n        opacity: 70%;\n      }\n    }\n  }\n  .hover\\:opacity-90 {\n    &:hover {\n      @media (hover: hover) {\n        opacity: 90%;\n      }\n    }\n  }\n  .hover\\:opacity-100 {\n    &:hover {\n      @media (hover: hover) {\n        opacity: 100%;\n      }\n    }\n  }\n  .hover\\:shadow-md {\n    &:hover {\n      @media (hover: hover) {\n        --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n      }\n    }\n  }\n  .hover\\:shadow-none {\n    &:hover {\n      @media (hover: hover) {\n        --tw-shadow: 0 0 #0000;\n        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n      }\n    }\n  }\n  .hover\\:shadow-sm {\n    &:hover {\n      @media (hover: hover) {\n        --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n      }\n    }\n  }\n  .hover\\:shadow-xs {\n    &:hover {\n      @media (hover: hover) {\n        --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));\n        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n      }\n    }\n  }\n  .hover\\:ring {\n    &:hover {\n      @media (hover: hover) {\n        --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n      }\n    }\n  }\n  .hover\\:ring-destructive\\/70 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-ring-color: var(--color-destructive);\n        @supports (color: color-mix(in lab, red, red)) {\n          --tw-ring-color: color-mix(in oklab, var(--color-destructive) 70%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:ring-neutral-200 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-ring-color: var(--color-neutral-200);\n      }\n    }\n  }\n  .hover\\:ring-primary\\/70 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-ring-color: var(--color-primary);\n        @supports (color: color-mix(in lab, red, red)) {\n          --tw-ring-color: color-mix(in oklab, var(--color-primary) 70%, transparent);\n        }\n      }\n    }\n  }\n  .not-disabled\\:hover\\:border-border-hover\\! {\n    &:not(*:disabled) {\n      &:hover {\n        @media (hover: hover) {\n          border-color: var(--color-border-hover) !important;\n        }\n      }\n    }\n  }\n  .not-disabled\\:hover\\:border-kumo-subtle\\! {\n    &:not(*:disabled) {\n      &:hover {\n        @media (hover: hover) {\n          border-color: var(--color-kumo-subtle) !important;\n        }\n      }\n    }\n  }\n  .not-disabled\\:hover\\:bg-kumo-subtle {\n    &:not(*:disabled) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-kumo-subtle);\n        }\n      }\n    }\n  }\n  .not-disabled\\:hover\\:bg-secondary-hover {\n    &:not(*:disabled) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-secondary-hover);\n        }\n      }\n    }\n  }\n  .hover\\:not-\\[\\:has\\(a\\:hover\\)\\]\\:bg-neutral-50 {\n    &:hover {\n      @media (hover: hover) {\n        &:not(*:is(:has(a:hover))) {\n          background-color: var(--color-neutral-50);\n        }\n      }\n    }\n  }\n  .hover\\:after\\:border-neutral-950\\/15 {\n    &:hover {\n      @media (hover: hover) {\n        &::after {\n          content: var(--tw-content);\n          border-color: color-mix(in srgb, oklch(14.5% 0 0) 15%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            border-color: color-mix(in oklab, var(--color-neutral-950) 15%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .focus\\:z-10 {\n    &:focus {\n      z-index: 10;\n    }\n  }\n  .focus\\:border-active {\n    &:focus {\n      border-color: var(--color-active);\n    }\n  }\n  .focus\\:border-kumo-color {\n    &:focus {\n      border-color: var(--color-kumo-color);\n    }\n  }\n  .focus\\:bg-accent {\n    &:focus {\n      background-color: var(--color-accent);\n    }\n  }\n  .focus\\:text-blue-600 {\n    &:focus {\n      color: var(--color-blue-600);\n    }\n  }\n  .focus\\:text-neutral-950 {\n    &:focus {\n      color: var(--color-neutral-950);\n    }\n  }\n  .focus\\:text-secondary {\n    &:focus {\n      color: var(--text-color-secondary);\n    }\n  }\n  .focus\\:opacity-100 {\n    &:focus {\n      opacity: 100%;\n    }\n  }\n  .focus\\:ring-1 {\n    &:focus {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus\\:ring-2 {\n    &:focus {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus\\:ring-active {\n    &:focus {\n      --tw-ring-color: var(--color-active);\n    }\n  }\n  .focus\\:ring-blue-400 {\n    &:focus {\n      --tw-ring-color: var(--color-blue-400);\n    }\n  }\n  .focus\\:ring-blue-500 {\n    &:focus {\n      --tw-ring-color: var(--color-blue-500);\n    }\n  }\n  .focus\\:ring-destructive {\n    &:focus {\n      --tw-ring-color: var(--color-destructive);\n    }\n  }\n  .focus\\:ring-kumo-active {\n    &:focus {\n      --tw-ring-color: var(--color-kumo-active);\n    }\n  }\n  .focus\\:ring-kumo-destructive {\n    &:focus {\n      --tw-ring-color: var(--color-kumo-destructive);\n    }\n  }\n  .focus\\:ring-neutral-400 {\n    &:focus {\n      --tw-ring-color: var(--color-neutral-400);\n    }\n  }\n  .focus\\:outline-none {\n    &:focus {\n      --tw-outline-style: none;\n      outline-style: none;\n    }\n  }\n  .focus-visible\\:z-10 {\n    &:focus-visible {\n      z-index: 10;\n    }\n  }\n  .focus-visible\\:rounded-sm {\n    &:focus-visible {\n      border-radius: var(--radius-sm);\n    }\n  }\n  .focus-visible\\:bg-cl1-blue-9 {\n    &:focus-visible {\n      background-color: var(--color-cl1-blue-9);\n    }\n  }\n  .focus-visible\\:bg-cl1-gray-8 {\n    &:focus-visible {\n      background-color: var(--color-cl1-gray-8);\n    }\n  }\n  .focus-visible\\:bg-secondary-hover {\n    &:focus-visible {\n      background-color: var(--color-secondary-hover);\n    }\n  }\n  .focus-visible\\:ring-1 {\n    &:focus-visible {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus-visible\\:ring-2 {\n    &:focus-visible {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus-visible\\:ring-active {\n    &:focus-visible {\n      --tw-ring-color: var(--color-active);\n    }\n  }\n  .focus-visible\\:ring-blue-800 {\n    &:focus-visible {\n      --tw-ring-color: var(--color-blue-800);\n    }\n  }\n  .focus-visible\\:ring-kumo-active {\n    &:focus-visible {\n      --tw-ring-color: var(--color-kumo-active);\n    }\n  }\n  .focus-visible\\:ring-neutral-400 {\n    &:focus-visible {\n      --tw-ring-color: var(--color-neutral-400);\n    }\n  }\n  .focus-visible\\:ring-red-900\\! {\n    &:focus-visible {\n      --tw-ring-color: var(--color-red-900) !important;\n    }\n  }\n  .focus-visible\\:inset-ring-\\[0\\.5\\] {\n    &:focus-visible {\n      --tw-inset-ring-color: 0.5;\n    }\n  }\n  .focus-visible\\:outline-hidden {\n    &:focus-visible {\n      --tw-outline-style: none;\n      outline-style: none;\n      @media (forced-colors: active) {\n        outline: 2px solid transparent;\n        outline-offset: 2px;\n      }\n    }\n  }\n  .focus-visible\\:outline {\n    &:focus-visible {\n      outline-style: var(--tw-outline-style);\n      outline-width: 1px;\n    }\n  }\n  .focus-visible\\:outline-2 {\n    &:focus-visible {\n      outline-style: var(--tw-outline-style);\n      outline-width: 2px;\n    }\n  }\n  .focus-visible\\:-outline-offset-2 {\n    &:focus-visible {\n      outline-offset: calc(2px * -1);\n    }\n  }\n  .focus-visible\\:outline-offset-\\[-2px\\] {\n    &:focus-visible {\n      outline-offset: -2px;\n    }\n  }\n  .focus-visible\\:outline-\\[var\\(--cf-focus-color\\)\\] {\n    &:focus-visible {\n      outline-color: var(--cf-focus-color);\n    }\n  }\n  .focus-visible\\:outline-cl1-blue-5 {\n    &:focus-visible {\n      outline-color: var(--color-cl1-blue-5);\n    }\n  }\n  .focus-visible\\:outline-primary {\n    &:focus-visible {\n      outline-color: var(--color-primary);\n    }\n  }\n  .focus-visible\\:outline-none {\n    &:focus-visible {\n      --tw-outline-style: none;\n      outline-style: none;\n    }\n  }\n  .focus-visible\\:after\\:ring-neutral-400 {\n    &:focus-visible {\n      &::after {\n        content: var(--tw-content);\n        --tw-ring-color: var(--color-neutral-400);\n      }\n    }\n  }\n  .active\\:cursor-grabbing {\n    &:active {\n      cursor: grabbing;\n    }\n  }\n  .active\\:text-blue-600 {\n    &:active {\n      color: var(--color-blue-600);\n    }\n  }\n  .active\\:text-neutral-950 {\n    &:active {\n      color: var(--color-neutral-950);\n    }\n  }\n  .disabled\\:cursor-not-allowed {\n    &:disabled {\n      cursor: not-allowed;\n    }\n  }\n  .disabled\\:border-neutral-400 {\n    &:disabled {\n      border-color: var(--color-neutral-400);\n    }\n  }\n  .disabled\\:bg-kumo-primary\\/50 {\n    &:disabled {\n      background-color: color-mix(in srgb, light-dark(#056dff, #056dff) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-kumo-primary) 50%, transparent);\n      }\n    }\n  }\n  .disabled\\:bg-kumo-secondary\\/50 {\n    &:disabled {\n      background-color: color-mix(in srgb, light-dark(\n    var(--color-white, #fff),\n    var(--color-neutral-900, oklch(21% 0.006 285.885))\n  ) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-kumo-secondary) 50%, transparent);\n      }\n    }\n  }\n  .disabled\\:bg-kumo-surface-secondary {\n    &:disabled {\n      background-color: var(--color-kumo-surface-secondary);\n    }\n  }\n  .disabled\\:bg-neutral-100 {\n    &:disabled {\n      background-color: var(--color-neutral-100);\n    }\n  }\n  .disabled\\:bg-primary\\/50 {\n    &:disabled {\n      background-color: var(--color-primary);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-primary) 50%, transparent);\n      }\n    }\n  }\n  .disabled\\:bg-secondary\\/50 {\n    &:disabled {\n      background-color: var(--color-secondary);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-secondary) 50%, transparent);\n      }\n    }\n  }\n  .disabled\\:bg-surface-secondary {\n    &:disabled {\n      background-color: var(--color-surface-secondary);\n    }\n  }\n  .disabled\\:\\!text-kumo-primary\\/70 {\n    &:disabled {\n      color: color-mix(in srgb, light-dark(\n    var(--color-white, #fff),\n    var(--color-white, #fff)\n  ) 70%, transparent) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--text-color-kumo-primary) 70%, transparent) !important;\n      }\n    }\n  }\n  .disabled\\:\\!text-kumo-secondary\\/70 {\n    &:disabled {\n      color: color-mix(in srgb, light-dark(\n    var(--color-neutral-900, oklch(21% 0.006 285.885)),\n    var(--color-neutral-50, oklch(98.5% 0 0))\n  ) 70%, transparent) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--text-color-kumo-secondary) 70%, transparent) !important;\n      }\n    }\n  }\n  .disabled\\:\\!text-neutral-400 {\n    &:disabled {\n      color: var(--color-neutral-400) !important;\n    }\n  }\n  .disabled\\:\\!text-primary\\/70 {\n    &:disabled {\n      color: color-mix(in srgb, #fff 70%, transparent) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--text-color-primary) 70%, transparent) !important;\n      }\n    }\n  }\n  .disabled\\:\\!text-secondary\\/70 {\n    &:disabled {\n      color: var(--text-color-secondary) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--text-color-secondary) 70%, transparent) !important;\n      }\n    }\n  }\n  .disabled\\:text-kumo-disabled\\! {\n    &:disabled {\n      color: var(--text-color-kumo-disabled) !important;\n    }\n  }\n  .disabled\\:text-kumo-muted {\n    &:disabled {\n      color: var(--text-color-kumo-muted);\n    }\n  }\n  .disabled\\:text-muted {\n    &:disabled {\n      color: var(--text-color-muted);\n    }\n  }\n  .disabled\\:opacity-50 {\n    &:disabled {\n      opacity: 50%;\n    }\n  }\n  .disabled\\:ring-primary\\/50 {\n    &:disabled {\n      --tw-ring-color: var(--color-primary);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-primary) 50%, transparent);\n      }\n    }\n  }\n  .disabled\\:hover\\:bg-neutral-100 {\n    &:disabled {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-100);\n        }\n      }\n    }\n  }\n  .disabled\\:hover\\:bg-transparent {\n    &:disabled {\n      &:hover {\n        @media (hover: hover) {\n          background-color: transparent;\n        }\n      }\n    }\n  }\n  .\\*\\:in-focus\\:opacity-100 {\n    :is(& > *) {\n      :where(*:focus) & {\n        opacity: 100%;\n      }\n    }\n  }\n  .has-\\[\\.overlay-cta\\:focus-visible\\]\\:pointer-events-auto {\n    &:has(*:is(.overlay-cta:focus-visible)) {\n      pointer-events: auto;\n    }\n  }\n  .has-\\[\\.overlay-cta\\:focus-visible\\]\\:opacity-100 {\n    &:has(*:is(.overlay-cta:focus-visible)) {\n      opacity: 100%;\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:font-medium {\n    &[aria-current="true"] {\n      --tw-font-weight: var(--font-weight-medium);\n      font-weight: var(--font-weight-medium);\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:text-inherit {\n    &[aria-current="true"] {\n      color: inherit;\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:absolute {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        position: absolute;\n      }\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:top-\\[calc\\(50\\%-8px\\)\\] {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        top: calc(50% - 8px);\n      }\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:right-full {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        right: 100%;\n      }\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:h-4 {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        height: calc(var(--spacing) * 4);\n      }\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:w-\\[3px\\] {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        width: 3px;\n      }\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:rounded-full {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        border-radius: calc(infinity * 1px);\n      }\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:bg-current {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        background-color: currentcolor;\n      }\n    }\n  }\n  .data-disabled\\:pointer-events-none {\n    &[data-disabled] {\n      pointer-events: none;\n    }\n  }\n  .data-disabled\\:opacity-50 {\n    &[data-disabled] {\n      opacity: 50%;\n    }\n  }\n  .data-ending-style\\:scale-90 {\n    &[data-ending-style] {\n      --tw-scale-x: 90%;\n      --tw-scale-y: 90%;\n      --tw-scale-z: 90%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .data-ending-style\\:opacity-0 {\n    &[data-ending-style] {\n      opacity: 0%;\n    }\n  }\n  .data-highlighted\\:bg-neutral-100 {\n    &[data-highlighted] {\n      background-color: var(--color-neutral-100);\n    }\n  }\n  .data-highlighted\\:bg-red-100 {\n    &[data-highlighted] {\n      background-color: var(--color-red-100);\n    }\n  }\n  .data-highlighted\\:text-error {\n    &[data-highlighted] {\n      color: var(--text-color-error);\n    }\n  }\n  .data-selected\\:text-black {\n    &[data-selected] {\n      color: var(--color-black);\n    }\n  }\n  .data-starting-style\\:scale-90 {\n    &[data-starting-style] {\n      --tw-scale-x: 90%;\n      --tw-scale-y: 90%;\n      --tw-scale-z: 90%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .data-starting-style\\:opacity-0 {\n    &[data-starting-style] {\n      opacity: 0%;\n    }\n  }\n  .data-\\[behind\\]\\:pointer-events-none {\n    &[data-behind] {\n      pointer-events: none;\n    }\n  }\n  .data-\\[behind\\]\\:opacity-0 {\n    &[data-behind] {\n      opacity: 0%;\n    }\n  }\n  .data-\\[clickable\\]\\:\\!no-underline {\n    &[data-clickable] {\n      text-decoration-line: none !important;\n    }\n  }\n  .data-\\[clickable\\]\\:hover\\:ring {\n    &[data-clickable] {\n      &:hover {\n        @media (hover: hover) {\n          --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n          box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n        }\n      }\n    }\n  }\n  .data-\\[ending-style\\]\\:translate-x-full {\n    &[data-ending-style] {\n      --tw-translate-x: 100%;\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .data-\\[ending-style\\]\\:scale-90 {\n    &[data-ending-style] {\n      --tw-scale-x: 90%;\n      --tw-scale-y: 90%;\n      --tw-scale-z: 90%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .data-\\[ending-style\\]\\:opacity-0 {\n    &[data-ending-style] {\n      opacity: 0%;\n    }\n  }\n  .data-\\[expanded\\]\\:pointer-events-auto {\n    &[data-expanded] {\n      pointer-events: auto;\n    }\n  }\n  .data-\\[expanded\\]\\:h-\\[var\\(--toast-height\\)\\] {\n    &[data-expanded] {\n      height: var(--toast-height);\n    }\n  }\n  .data-\\[expanded\\]\\:\\[transform\\:translateX\\(var\\(--toast-swipe-movement-x\\)\\)_translateY\\(calc\\(var\\(--offset-y\\)\\)\\)\\] {\n    &[data-expanded] {\n      transform: translateX(var(--toast-swipe-movement-x)) translateY(calc(var(--offset-y)));\n    }\n  }\n  .data-\\[expanded\\]\\:opacity-100 {\n    &[data-expanded] {\n      opacity: 100%;\n    }\n  }\n  .data-\\[focused\\]\\:bg-secondary-hover {\n    &[data-focused] {\n      background-color: var(--color-secondary-hover);\n    }\n  }\n  .data-\\[highlighted\\]\\:bg-accent {\n    &[data-highlighted] {\n      background-color: var(--color-accent);\n    }\n  }\n  .data-\\[highlighted\\]\\:bg-cl1-gray-8 {\n    &[data-highlighted] {\n      background-color: var(--color-cl1-gray-8);\n    }\n  }\n  .data-\\[highlighted\\]\\:bg-neutral-100 {\n    &[data-highlighted] {\n      background-color: var(--color-neutral-100);\n    }\n  }\n  .data-\\[highlighted\\]\\:bg-red-100 {\n    &[data-highlighted] {\n      background-color: var(--color-red-100);\n    }\n  }\n  .data-\\[highlighted\\]\\:text-error {\n    &[data-highlighted] {\n      color: var(--text-color-error);\n    }\n  }\n  .data-\\[instant\\]\\:duration-0 {\n    &[data-instant] {\n      --tw-duration: 0ms;\n      transition-duration: 0ms;\n    }\n  }\n  .data-\\[limited\\]\\:opacity-0 {\n    &[data-limited] {\n      opacity: 0%;\n    }\n  }\n  .data-\\[popup-open\\]\\:bg-accent {\n    &[data-popup-open] {\n      background-color: var(--color-accent);\n    }\n  }\n  .data-\\[pressed\\]\\:bg-primary {\n    &[data-pressed] {\n      background-color: var(--color-primary);\n    }\n  }\n  .data-\\[pressed\\]\\:\\!text-primary {\n    &[data-pressed] {\n      color: var(--text-color-primary) !important;\n    }\n  }\n  .data-\\[pressed\\]\\:hover\\:bg-primary\\/70 {\n    &[data-pressed] {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-primary);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-primary) 70%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .data-\\[rendered\\=false\\]\\:scale-90 {\n    &[data-rendered="false"] {\n      --tw-scale-x: 90%;\n      --tw-scale-y: 90%;\n      --tw-scale-z: 90%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .data-\\[rendered\\=false\\]\\:opacity-0 {\n    &[data-rendered="false"] {\n      opacity: 0%;\n    }\n  }\n  .data-\\[side\\=bottom\\]\\:top-\\[-8px\\] {\n    &[data-side="bottom"] {\n      top: -8px;\n    }\n  }\n  .data-\\[side\\=bottom\\]\\:top-\\[-11px\\] {\n    &[data-side="bottom"] {\n      top: -11px;\n    }\n  }\n  .data-\\[side\\=bottom\\]\\:top-\\[-15px\\] {\n    &[data-side="bottom"] {\n      top: -15px;\n    }\n  }\n  .data-\\[side\\=left\\]\\:right-\\[-11px\\] {\n    &[data-side="left"] {\n      right: -11px;\n    }\n  }\n  .data-\\[side\\=left\\]\\:right-\\[-13px\\] {\n    &[data-side="left"] {\n      right: -13px;\n    }\n  }\n  .data-\\[side\\=left\\]\\:rotate-90 {\n    &[data-side="left"] {\n      rotate: 90deg;\n    }\n  }\n  .data-\\[side\\=right\\]\\:left-\\[-11px\\] {\n    &[data-side="right"] {\n      left: -11px;\n    }\n  }\n  .data-\\[side\\=right\\]\\:left-\\[-13px\\] {\n    &[data-side="right"] {\n      left: -13px;\n    }\n  }\n  .data-\\[side\\=right\\]\\:-rotate-90 {\n    &[data-side="right"] {\n      rotate: calc(90deg * -1);\n    }\n  }\n  .data-\\[side\\=top\\]\\:bottom-\\[-8px\\] {\n    &[data-side="top"] {\n      bottom: -8px;\n    }\n  }\n  .data-\\[side\\=top\\]\\:bottom-\\[-11px\\] {\n    &[data-side="top"] {\n      bottom: -11px;\n    }\n  }\n  .data-\\[side\\=top\\]\\:rotate-180 {\n    &[data-side="top"] {\n      rotate: 180deg;\n    }\n  }\n  .data-\\[starting-style\\]\\:translate-x-full {\n    &[data-starting-style] {\n      --tw-translate-x: 100%;\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .data-\\[starting-style\\]\\:scale-90 {\n    &[data-starting-style] {\n      --tw-scale-x: 90%;\n      --tw-scale-y: 90%;\n      --tw-scale-z: 90%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .data-\\[starting-style\\]\\:\\[transform\\:translateY\\(150\\%\\)\\] {\n    &[data-starting-style] {\n      transform: translateY(150%);\n    }\n  }\n  .data-\\[starting-style\\]\\:opacity-0 {\n    &[data-starting-style] {\n      opacity: 0%;\n    }\n  }\n  .data-\\[state\\=\\"open\\"\\]\\:bg-accent {\n    &[data-state="open"] {\n      background-color: var(--color-accent);\n    }\n  }\n  .data-\\[state\\=\\"open\\"\\]\\:bg-kumo-subtle {\n    &[data-state="open"] {\n      background-color: var(--color-kumo-subtle);\n    }\n  }\n  .data-\\[state\\=\\"open\\"\\]\\:bg-secondary-hover {\n    &[data-state="open"] {\n      background-color: var(--color-secondary-hover);\n    }\n  }\n  .data-\\[state\\=\\\'open\\\'\\]\\:bg-surface-active {\n    &[data-state=\'open\'] {\n      background-color: var(--color-surface-active);\n    }\n  }\n  .data-\\[state\\=open\\]\\:bg-accent {\n    &[data-state="open"] {\n      background-color: var(--color-accent);\n    }\n  }\n  .data-\\[ending-style\\]\\:data-\\[swipe-direction\\=down\\]\\:\\[transform\\:translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)\\+150\\%\\)\\)\\] {\n    &[data-ending-style] {\n      &[data-swipe-direction="down"] {\n        transform: translateY(calc(var(--toast-swipe-movement-y) + 150%));\n      }\n    }\n  }\n  .data-\\[expanded\\]\\:data-\\[ending-style\\]\\:data-\\[swipe-direction\\=down\\]\\:\\[transform\\:translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)\\+150\\%\\)\\)\\] {\n    &[data-expanded] {\n      &[data-ending-style] {\n        &[data-swipe-direction="down"] {\n          transform: translateY(calc(var(--toast-swipe-movement-y) + 150%));\n        }\n      }\n    }\n  }\n  .data-\\[ending-style\\]\\:data-\\[swipe-direction\\=left\\]\\:\\[transform\\:translateX\\(calc\\(var\\(--toast-swipe-movement-x\\)-150\\%\\)\\)_translateY\\(var\\(--offset-y\\)\\)\\] {\n    &[data-ending-style] {\n      &[data-swipe-direction="left"] {\n        transform: translateX(calc(var(--toast-swipe-movement-x) - 150%)) translateY(var(--offset-y));\n      }\n    }\n  }\n  .data-\\[expanded\\]\\:data-\\[ending-style\\]\\:data-\\[swipe-direction\\=left\\]\\:\\[transform\\:translateX\\(calc\\(var\\(--toast-swipe-movement-x\\)-150\\%\\)\\)_translateY\\(var\\(--offset-y\\)\\)\\] {\n    &[data-expanded] {\n      &[data-ending-style] {\n        &[data-swipe-direction="left"] {\n          transform: translateX(calc(var(--toast-swipe-movement-x) - 150%)) translateY(var(--offset-y));\n        }\n      }\n    }\n  }\n  .data-\\[ending-style\\]\\:data-\\[swipe-direction\\=right\\]\\:\\[transform\\:translateX\\(calc\\(var\\(--toast-swipe-movement-x\\)\\+150\\%\\)\\)_translateY\\(var\\(--offset-y\\)\\)\\] {\n    &[data-ending-style] {\n      &[data-swipe-direction="right"] {\n        transform: translateX(calc(var(--toast-swipe-movement-x) + 150%)) translateY(var(--offset-y));\n      }\n    }\n  }\n  .data-\\[expanded\\]\\:data-\\[ending-style\\]\\:data-\\[swipe-direction\\=right\\]\\:\\[transform\\:translateX\\(calc\\(var\\(--toast-swipe-movement-x\\)\\+150\\%\\)\\)_translateY\\(var\\(--offset-y\\)\\)\\] {\n    &[data-expanded] {\n      &[data-ending-style] {\n        &[data-swipe-direction="right"] {\n          transform: translateX(calc(var(--toast-swipe-movement-x) + 150%)) translateY(var(--offset-y));\n        }\n      }\n    }\n  }\n  .data-\\[ending-style\\]\\:data-\\[swipe-direction\\=up\\]\\:\\[transform\\:translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)-150\\%\\)\\)\\] {\n    &[data-ending-style] {\n      &[data-swipe-direction="up"] {\n        transform: translateY(calc(var(--toast-swipe-movement-y) - 150%));\n      }\n    }\n  }\n  .data-\\[expanded\\]\\:data-\\[ending-style\\]\\:data-\\[swipe-direction\\=up\\]\\:\\[transform\\:translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)-150\\%\\)\\)\\] {\n    &[data-expanded] {\n      &[data-ending-style] {\n        &[data-swipe-direction="up"] {\n          transform: translateY(calc(var(--toast-swipe-movement-y) - 150%));\n        }\n      }\n    }\n  }\n  .min-\\[1050px\\]\\:grid {\n    @media (width >= 1050px) {\n      display: grid;\n    }\n  }\n  .min-\\[1050px\\]\\:grid-cols-\\[1fr_180px\\] {\n    @media (width >= 1050px) {\n      grid-template-columns: 1fr 180px;\n    }\n  }\n  .min-\\[1050px\\]\\:py-10 {\n    @media (width >= 1050px) {\n      padding-block: calc(var(--spacing) * 10);\n    }\n  }\n  .sm\\:right-\\[2rem\\] {\n    @media (width >= 40rem) {\n      right: 2rem;\n    }\n  }\n  .sm\\:bottom-\\[2rem\\] {\n    @media (width >= 40rem) {\n      bottom: 2rem;\n    }\n  }\n  .sm\\:col-span-3 {\n    @media (width >= 40rem) {\n      grid-column: span 3 / span 3;\n    }\n  }\n  .sm\\:col-span-6 {\n    @media (width >= 40rem) {\n      grid-column: span 6 / span 6;\n    }\n  }\n  .sm\\:block {\n    @media (width >= 40rem) {\n      display: block;\n    }\n  }\n  .sm\\:flex {\n    @media (width >= 40rem) {\n      display: flex;\n    }\n  }\n  .sm\\:hidden {\n    @media (width >= 40rem) {\n      display: none;\n    }\n  }\n  .sm\\:inline {\n    @media (width >= 40rem) {\n      display: inline;\n    }\n  }\n  .sm\\:h-\\[529px\\] {\n    @media (width >= 40rem) {\n      height: 529px;\n    }\n  }\n  .sm\\:w-32 {\n    @media (width >= 40rem) {\n      width: calc(var(--spacing) * 32);\n    }\n  }\n  .sm\\:w-\\[300px\\] {\n    @media (width >= 40rem) {\n      width: 300px;\n    }\n  }\n  .sm\\:w-auto {\n    @media (width >= 40rem) {\n      width: auto;\n    }\n  }\n  .sm\\:max-w-\\[280px\\] {\n    @media (width >= 40rem) {\n      max-width: 280px;\n    }\n  }\n  .sm\\:flex-1 {\n    @media (width >= 40rem) {\n      flex: 1;\n    }\n  }\n  .sm\\:flex-none {\n    @media (width >= 40rem) {\n      flex: none;\n    }\n  }\n  .sm\\:scale-90 {\n    @media (width >= 40rem) {\n      --tw-scale-x: 90%;\n      --tw-scale-y: 90%;\n      --tw-scale-z: 90%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .sm\\:grid-cols-2 {\n    @media (width >= 40rem) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .sm\\:grid-cols-3 {\n    @media (width >= 40rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .sm\\:grid-cols-4 {\n    @media (width >= 40rem) {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  .sm\\:grid-cols-\\[max-content_auto\\] {\n    @media (width >= 40rem) {\n      grid-template-columns: max-content auto;\n    }\n  }\n  .sm\\:flex-row {\n    @media (width >= 40rem) {\n      flex-direction: row;\n    }\n  }\n  .sm\\:items-center {\n    @media (width >= 40rem) {\n      align-items: center;\n    }\n  }\n  .sm\\:items-end {\n    @media (width >= 40rem) {\n      align-items: flex-end;\n    }\n  }\n  .sm\\:justify-start {\n    @media (width >= 40rem) {\n      justify-content: flex-start;\n    }\n  }\n  .sm\\:gap-0 {\n    @media (width >= 40rem) {\n      gap: calc(var(--spacing) * 0);\n    }\n  }\n  .sm\\:gap-3 {\n    @media (width >= 40rem) {\n      gap: calc(var(--spacing) * 3);\n    }\n  }\n  .sm\\:gap-x-3 {\n    @media (width >= 40rem) {\n      column-gap: calc(var(--spacing) * 3);\n    }\n  }\n  .sm\\:gap-y-2 {\n    @media (width >= 40rem) {\n      row-gap: calc(var(--spacing) * 2);\n    }\n  }\n  .sm\\:divide-x {\n    @media (width >= 40rem) {\n      :where(& > :not(:last-child)) {\n        --tw-divide-x-reverse: 0;\n        border-inline-style: var(--tw-border-style);\n        border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));\n        border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n      }\n    }\n  }\n  .sm\\:divide-y-0 {\n    @media (width >= 40rem) {\n      :where(& > :not(:last-child)) {\n        --tw-divide-y-reverse: 0;\n        border-bottom-style: var(--tw-border-style);\n        border-top-style: var(--tw-border-style);\n        border-top-width: calc(0px * var(--tw-divide-y-reverse));\n        border-bottom-width: calc(0px * calc(1 - var(--tw-divide-y-reverse)));\n      }\n    }\n  }\n  .sm\\:p-6 {\n    @media (width >= 40rem) {\n      padding: calc(var(--spacing) * 6);\n    }\n  }\n  .sm\\:px-3 {\n    @media (width >= 40rem) {\n      padding-inline: calc(var(--spacing) * 3);\n    }\n  }\n  .sm\\:px-6 {\n    @media (width >= 40rem) {\n      padding-inline: calc(var(--spacing) * 6);\n    }\n  }\n  .sm\\:px-8 {\n    @media (width >= 40rem) {\n      padding-inline: calc(var(--spacing) * 8);\n    }\n  }\n  .sm\\:px-\\[1rem\\] {\n    @media (width >= 40rem) {\n      padding-inline: 1rem;\n    }\n  }\n  .sm\\:py-1\\.5 {\n    @media (width >= 40rem) {\n      padding-block: calc(var(--spacing) * 1.5);\n    }\n  }\n  .sm\\:py-2 {\n    @media (width >= 40rem) {\n      padding-block: calc(var(--spacing) * 2);\n    }\n  }\n  .sm\\:text-base {\n    @media (width >= 40rem) {\n      font-size: var(--text-base);\n      line-height: var(--tw-leading, var(--text-base--line-height));\n    }\n  }\n  .sm\\:text-sm {\n    @media (width >= 40rem) {\n      font-size: var(--text-sm);\n      line-height: var(--tw-leading, var(--text-sm--line-height));\n    }\n  }\n  .sm\\:text-sm\\/6 {\n    @media (width >= 40rem) {\n      font-size: var(--text-sm);\n      line-height: calc(var(--spacing) * 6);\n    }\n  }\n  .md\\:top-32 {\n    @media (width >= 48rem) {\n      top: calc(var(--spacing) * 32);\n    }\n  }\n  .md\\:mr-0 {\n    @media (width >= 48rem) {\n      margin-right: calc(var(--spacing) * 0);\n    }\n  }\n  .md\\:mb-0 {\n    @media (width >= 48rem) {\n      margin-bottom: calc(var(--spacing) * 0);\n    }\n  }\n  .md\\:\\!flex {\n    @media (width >= 48rem) {\n      display: flex !important;\n    }\n  }\n  .md\\:block {\n    @media (width >= 48rem) {\n      display: block;\n    }\n  }\n  .md\\:flex {\n    @media (width >= 48rem) {\n      display: flex;\n    }\n  }\n  .md\\:hidden {\n    @media (width >= 48rem) {\n      display: none;\n    }\n  }\n  .md\\:inline-flex {\n    @media (width >= 48rem) {\n      display: inline-flex;\n    }\n  }\n  .md\\:w-auto {\n    @media (width >= 48rem) {\n      width: auto;\n    }\n  }\n  .md\\:max-w-\\[70vw\\] {\n    @media (width >= 48rem) {\n      max-width: 70vw;\n    }\n  }\n  .md\\:max-w-xl {\n    @media (width >= 48rem) {\n      max-width: var(--container-xl);\n    }\n  }\n  .md\\:scale-100 {\n    @media (width >= 48rem) {\n      --tw-scale-x: 100%;\n      --tw-scale-y: 100%;\n      --tw-scale-z: 100%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .md\\:grid-cols-3 {\n    @media (width >= 48rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .md\\:grid-cols-\\[3fr_1fr\\] {\n    @media (width >= 48rem) {\n      grid-template-columns: 3fr 1fr;\n    }\n  }\n  .md\\:grid-cols-\\[160px_1fr\\] {\n    @media (width >= 48rem) {\n      grid-template-columns: 160px 1fr;\n    }\n  }\n  .md\\:flex-row {\n    @media (width >= 48rem) {\n      flex-direction: row;\n    }\n  }\n  .md\\:items-center {\n    @media (width >= 48rem) {\n      align-items: center;\n    }\n  }\n  .md\\:justify-end {\n    @media (width >= 48rem) {\n      justify-content: flex-end;\n    }\n  }\n  .md\\:gap-4 {\n    @media (width >= 48rem) {\n      gap: calc(var(--spacing) * 4);\n    }\n  }\n  .md\\:space-y-0 {\n    @media (width >= 48rem) {\n      :where(& > :not(:last-child)) {\n        --tw-space-y-reverse: 0;\n        margin-block-start: calc(calc(var(--spacing) * 0) * var(--tw-space-y-reverse));\n        margin-block-end: calc(calc(var(--spacing) * 0) * calc(1 - var(--tw-space-y-reverse)));\n      }\n    }\n  }\n  .md\\:space-y-1 {\n    @media (width >= 48rem) {\n      :where(& > :not(:last-child)) {\n        --tw-space-y-reverse: 0;\n        margin-block-start: calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));\n        margin-block-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)));\n      }\n    }\n  }\n  .md\\:space-y-4 {\n    @media (width >= 48rem) {\n      :where(& > :not(:last-child)) {\n        --tw-space-y-reverse: 0;\n        margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));\n        margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));\n      }\n    }\n  }\n  .md\\:space-y-8 {\n    @media (width >= 48rem) {\n      :where(& > :not(:last-child)) {\n        --tw-space-y-reverse: 0;\n        margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));\n        margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));\n      }\n    }\n  }\n  .md\\:border-t-0 {\n    @media (width >= 48rem) {\n      border-top-style: var(--tw-border-style);\n      border-top-width: 0px;\n    }\n  }\n  .md\\:p-6 {\n    @media (width >= 48rem) {\n      padding: calc(var(--spacing) * 6);\n    }\n  }\n  .md\\:p-8 {\n    @media (width >= 48rem) {\n      padding: calc(var(--spacing) * 8);\n    }\n  }\n  .md\\:px-0 {\n    @media (width >= 48rem) {\n      padding-inline: calc(var(--spacing) * 0);\n    }\n  }\n  .md\\:px-8 {\n    @media (width >= 48rem) {\n      padding-inline: calc(var(--spacing) * 8);\n    }\n  }\n  .md\\:py-8 {\n    @media (width >= 48rem) {\n      padding-block: calc(var(--spacing) * 8);\n    }\n  }\n  .md\\:pr-1\\.5 {\n    @media (width >= 48rem) {\n      padding-right: calc(var(--spacing) * 1.5);\n    }\n  }\n  .md\\:text-left {\n    @media (width >= 48rem) {\n      text-align: left;\n    }\n  }\n  .md\\:text-2xl {\n    @media (width >= 48rem) {\n      font-size: var(--text-2xl);\n      line-height: var(--tw-leading, var(--text-2xl--line-height));\n    }\n  }\n  .lg\\:col-span-2 {\n    @media (width >= 64rem) {\n      grid-column: span 2 / span 2;\n    }\n  }\n  .lg\\:col-span-4 {\n    @media (width >= 64rem) {\n      grid-column: span 4 / span 4;\n    }\n  }\n  .lg\\:col-span-6 {\n    @media (width >= 64rem) {\n      grid-column: span 6 / span 6;\n    }\n  }\n  .lg\\:row-start-2 {\n    @media (width >= 64rem) {\n      grid-row-start: 2;\n    }\n  }\n  .lg\\:row-start-3 {\n    @media (width >= 64rem) {\n      grid-row-start: 3;\n    }\n  }\n  .lg\\:block {\n    @media (width >= 64rem) {\n      display: block;\n    }\n  }\n  .lg\\:flex {\n    @media (width >= 64rem) {\n      display: flex;\n    }\n  }\n  .lg\\:hidden {\n    @media (width >= 64rem) {\n      display: none;\n    }\n  }\n  .lg\\:w-1\\/3 {\n    @media (width >= 64rem) {\n      width: calc(1/3 * 100%);\n    }\n  }\n  .lg\\:w-auto {\n    @media (width >= 64rem) {\n      width: auto;\n    }\n  }\n  .lg\\:max-w-2xl {\n    @media (width >= 64rem) {\n      max-width: var(--container-2xl);\n    }\n  }\n  .lg\\:max-w-\\[50vw\\] {\n    @media (width >= 64rem) {\n      max-width: 50vw;\n    }\n  }\n  .lg\\:snap-none {\n    @media (width >= 64rem) {\n      scroll-snap-type: none;\n    }\n  }\n  .lg\\:grid-cols-1 {\n    @media (width >= 64rem) {\n      grid-template-columns: repeat(1, minmax(0, 1fr));\n    }\n  }\n  .lg\\:grid-cols-2 {\n    @media (width >= 64rem) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .lg\\:grid-cols-4 {\n    @media (width >= 64rem) {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  .lg\\:grid-cols-6 {\n    @media (width >= 64rem) {\n      grid-template-columns: repeat(6, minmax(0, 1fr));\n    }\n  }\n  .lg\\:grid-cols-\\[1fr_250px\\] {\n    @media (width >= 64rem) {\n      grid-template-columns: 1fr 250px;\n    }\n  }\n  .lg\\:grid-cols-\\[1fr_325px\\] {\n    @media (width >= 64rem) {\n      grid-template-columns: 1fr 325px;\n    }\n  }\n  .lg\\:grid-rows-2 {\n    @media (width >= 64rem) {\n      grid-template-rows: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .lg\\:flex-row {\n    @media (width >= 64rem) {\n      flex-direction: row;\n    }\n  }\n  .lg\\:items-start {\n    @media (width >= 64rem) {\n      align-items: flex-start;\n    }\n  }\n  .lg\\:rounded-xl {\n    @media (width >= 64rem) {\n      border-radius: var(--radius-xl);\n    }\n  }\n  .lg\\:p-8 {\n    @media (width >= 64rem) {\n      padding: calc(var(--spacing) * 8);\n    }\n  }\n  .lg\\:px-8 {\n    @media (width >= 64rem) {\n      padding-inline: calc(var(--spacing) * 8);\n    }\n  }\n  .lg\\:px-10 {\n    @media (width >= 64rem) {\n      padding-inline: calc(var(--spacing) * 10);\n    }\n  }\n  .lg\\:py-9 {\n    @media (width >= 64rem) {\n      padding-block: calc(var(--spacing) * 9);\n    }\n  }\n  .lg\\:text-left {\n    @media (width >= 64rem) {\n      text-align: left;\n    }\n  }\n  .lg\\:ring {\n    @media (width >= 64rem) {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .lg\\:ring-neutral-950\\/10 {\n    @media (width >= 64rem) {\n      --tw-ring-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n      }\n    }\n  }\n  .xl\\:sticky {\n    @media (width >= 80rem) {\n      position: sticky;\n    }\n  }\n  .xl\\:-top-14 {\n    @media (width >= 80rem) {\n      top: calc(var(--spacing) * -14);\n    }\n  }\n  .xl\\:right-0 {\n    @media (width >= 80rem) {\n      right: calc(var(--spacing) * 0);\n    }\n  }\n  .xl\\:\\[left\\:unset\\] {\n    @media (width >= 80rem) {\n      left: unset;\n    }\n  }\n  .xl\\:col-span-2 {\n    @media (width >= 80rem) {\n      grid-column: span 2 / span 2;\n    }\n  }\n  .xl\\:col-span-4 {\n    @media (width >= 80rem) {\n      grid-column: span 4 / span 4;\n    }\n  }\n  .xl\\:col-span-6 {\n    @media (width >= 80rem) {\n      grid-column: span 6 / span 6;\n    }\n  }\n  .xl\\:mt-0 {\n    @media (width >= 80rem) {\n      margin-top: calc(var(--spacing) * 0);\n    }\n  }\n  .xl\\:block {\n    @media (width >= 80rem) {\n      display: block;\n    }\n  }\n  .xl\\:flex {\n    @media (width >= 80rem) {\n      display: flex;\n    }\n  }\n  .xl\\:hidden {\n    @media (width >= 80rem) {\n      display: none;\n    }\n  }\n  .xl\\:inline-flex {\n    @media (width >= 80rem) {\n      display: inline-flex;\n    }\n  }\n  .xl\\:\\!h-10 {\n    @media (width >= 80rem) {\n      height: calc(var(--spacing) * 10) !important;\n    }\n  }\n  .xl\\:w-\\[380px\\] {\n    @media (width >= 80rem) {\n      width: 380px;\n    }\n  }\n  .xl\\:grid-cols-1 {\n    @media (width >= 80rem) {\n      grid-template-columns: repeat(1, minmax(0, 1fr));\n    }\n  }\n  .xl\\:grid-cols-2 {\n    @media (width >= 80rem) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .xl\\:grid-cols-3 {\n    @media (width >= 80rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .xl\\:grid-cols-4 {\n    @media (width >= 80rem) {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  .xl\\:grid-cols-6 {\n    @media (width >= 80rem) {\n      grid-template-columns: repeat(6, minmax(0, 1fr));\n    }\n  }\n  .xl\\:grid-cols-10 {\n    @media (width >= 80rem) {\n      grid-template-columns: repeat(10, minmax(0, 1fr));\n    }\n  }\n  .xl\\:grid-cols-\\[1fr_300px\\] {\n    @media (width >= 80rem) {\n      grid-template-columns: 1fr 300px;\n    }\n  }\n  .xl\\:grid-cols-\\[1fr_400px\\] {\n    @media (width >= 80rem) {\n      grid-template-columns: 1fr 400px;\n    }\n  }\n  .xl\\:grid-cols-\\[3fr_1fr\\] {\n    @media (width >= 80rem) {\n      grid-template-columns: 3fr 1fr;\n    }\n  }\n  .xl\\:grid-rows-1 {\n    @media (width >= 80rem) {\n      grid-template-rows: repeat(1, minmax(0, 1fr));\n    }\n  }\n  .xl\\:flex-row {\n    @media (width >= 80rem) {\n      flex-direction: row;\n    }\n  }\n  .xl\\:items-center {\n    @media (width >= 80rem) {\n      align-items: center;\n    }\n  }\n  .xl\\:\\!gap-2 {\n    @media (width >= 80rem) {\n      gap: calc(var(--spacing) * 2) !important;\n    }\n  }\n  .xl\\:gap-6 {\n    @media (width >= 80rem) {\n      gap: calc(var(--spacing) * 6);\n    }\n  }\n  .xl\\:gap-8 {\n    @media (width >= 80rem) {\n      gap: calc(var(--spacing) * 8);\n    }\n  }\n  .xl\\:gap-12 {\n    @media (width >= 80rem) {\n      gap: calc(var(--spacing) * 12);\n    }\n  }\n  .xl\\:\\!px-4 {\n    @media (width >= 80rem) {\n      padding-inline: calc(var(--spacing) * 4) !important;\n    }\n  }\n  .xl\\:px-10 {\n    @media (width >= 80rem) {\n      padding-inline: calc(var(--spacing) * 10);\n    }\n  }\n  .xl\\:px-28 {\n    @media (width >= 80rem) {\n      padding-inline: calc(var(--spacing) * 28);\n    }\n  }\n  .xl\\:px-30 {\n    @media (width >= 80rem) {\n      padding-inline: calc(var(--spacing) * 30);\n    }\n  }\n  .\\32 xl\\:block {\n    @media (width >= 96rem) {\n      display: block;\n    }\n  }\n  .\\32 xl\\:hidden {\n    @media (width >= 96rem) {\n      display: none;\n    }\n  }\n  .\\32 xl\\:max-h-82 {\n    @media (width >= 96rem) {\n      max-height: calc(var(--spacing) * 82);\n    }\n  }\n  .\\32 xl\\:grid-cols-4 {\n    @media (width >= 96rem) {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  .\\32 xl\\:gap-x-12 {\n    @media (width >= 96rem) {\n      column-gap: calc(var(--spacing) * 12);\n    }\n  }\n  .\\32 xl\\:px-30 {\n    @media (width >= 96rem) {\n      padding-inline: calc(var(--spacing) * 30);\n    }\n  }\n  .\\@max-\\[300px\\]\\:max-w-\\[21ch\\] {\n    @container (width < 300px) {\n      max-width: 21ch;\n    }\n  }\n  .\\@max-\\[300px\\]\\:flex-col {\n    @container (width < 300px) {\n      flex-direction: column;\n    }\n  }\n  .\\@max-\\[200px\\]\\:max-w-\\[11ch\\] {\n    @container (width < 200px) {\n      max-width: 11ch;\n    }\n  }\n  .\\@\\[418px\\]\\:\\@max-\\[568px\\]\\:grid-cols-2\\! {\n    @container (width >= 418px) {\n      @container (width < 568px) {\n        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n      }\n    }\n  }\n  .\\@min-\\[1080px\\]\\:hidden {\n    @container (width >= 1080px) {\n      display: none;\n    }\n  }\n  .\\@md\\:inline {\n    @container (width >= 28rem) {\n      display: inline;\n    }\n  }\n  .\\@xl\\:col-span-3 {\n    @container (width >= 36rem) {\n      grid-column: span 3 / span 3;\n    }\n  }\n  .\\@xl\\:col-span-4 {\n    @container (width >= 36rem) {\n      grid-column: span 4 / span 4;\n    }\n  }\n  .\\@xl\\:col-span-5 {\n    @container (width >= 36rem) {\n      grid-column: span 5 / span 5;\n    }\n  }\n  .\\@xl\\:row-start-\\[unset\\] {\n    @container (width >= 36rem) {\n      grid-row-start: unset;\n    }\n  }\n  .\\@xl\\:block {\n    @container (width >= 36rem) {\n      display: block;\n    }\n  }\n  .\\@xl\\:flex {\n    @container (width >= 36rem) {\n      display: flex;\n    }\n  }\n  .\\@xl\\:grid-cols-12 {\n    @container (width >= 36rem) {\n      grid-template-columns: repeat(12, minmax(0, 1fr));\n    }\n  }\n  .\\@xl\\:grid-rows-2 {\n    @container (width >= 36rem) {\n      grid-template-rows: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .\\@2xl\\:flex {\n    @container (width >= 42rem) {\n      display: flex;\n    }\n  }\n  .\\@3xl\\:col-span-2 {\n    @container (width >= 48rem) {\n      grid-column: span 2 / span 2;\n    }\n  }\n  .\\@3xl\\:grid-cols-3 {\n    @container (width >= 48rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .dark\\:block {\n    &:where(.dark-mode, .dark-mode *) {\n      display: block;\n    }\n  }\n  .dark\\:hidden {\n    &:where(.dark-mode, .dark-mode *) {\n      display: none;\n    }\n  }\n  .dark\\:divide-border {\n    &:where(.dark-mode, .dark-mode *) {\n      :where(& > :not(:last-child)) {\n        border-color: var(--color-border);\n      }\n    }\n  }\n  .dark\\:divide-gray-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      :where(& > :not(:last-child)) {\n        border-color: var(--color-gray-600);\n      }\n    }\n  }\n  .dark\\:divide-gray-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      :where(& > :not(:last-child)) {\n        border-color: var(--color-gray-700);\n      }\n    }\n  }\n  .dark\\:divide-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      :where(& > :not(:last-child)) {\n        border-color: var(--color-neutral-600);\n      }\n    }\n  }\n  .dark\\:divide-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      :where(& > :not(:last-child)) {\n        border-color: var(--color-neutral-700);\n      }\n    }\n  }\n  .dark\\:divide-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      :where(& > :not(:last-child)) {\n        border-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .dark\\:border-1 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-style: var(--tw-border-style);\n      border-width: 1px;\n    }\n  }\n  .dark\\:\\!border-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-600) !important;\n    }\n  }\n  .dark\\:\\!border-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-800) !important;\n    }\n  }\n  .dark\\:border-\\[\\#E81403\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: #E81403;\n    }\n  }\n  .dark\\:border-\\[\\#b73cdf\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: #b73cdf;\n    }\n  }\n  .dark\\:border-\\[\\#f85189\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: #f85189;\n    }\n  }\n  .dark\\:border-\\[\\#ffce4b\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: #ffce4b;\n    }\n  }\n  .dark\\:border-blue-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-blue-500);\n    }\n  }\n  .dark\\:border-blue-500\\/40 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 40%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-blue-500) 40%, transparent);\n      }\n    }\n  }\n  .dark\\:border-blue-500\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-blue-500) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:border-blue-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-blue-700);\n    }\n  }\n  .dark\\:border-blue-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-blue-800);\n    }\n  }\n  .dark\\:border-cl1-gray-6 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-cl1-gray-6);\n    }\n  }\n  .dark\\:border-gray-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-gray-600);\n    }\n  }\n  .dark\\:border-gray-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-gray-700);\n    }\n  }\n  .dark\\:border-gray-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-gray-800);\n    }\n  }\n  .dark\\:border-green-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-green-500);\n    }\n  }\n  .dark\\:border-green-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-green-800);\n    }\n  }\n  .dark\\:border-green-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(44.8% 0.119 151.328) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-green-800) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:border-neutral-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-100);\n    }\n  }\n  .dark\\:border-neutral-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-400);\n    }\n  }\n  .dark\\:border-neutral-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-500);\n    }\n  }\n  .dark\\:border-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-600);\n    }\n  }\n  .dark\\:border-neutral-600\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(43.9% 0 0) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-600) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:border-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-700);\n    }\n  }\n  .dark\\:border-neutral-700\\/40 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(37.1% 0 0) 40%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-700) 40%, transparent);\n      }\n    }\n  }\n  .dark\\:border-neutral-700\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(37.1% 0 0) 60%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-700) 60%, transparent);\n      }\n    }\n  }\n  .dark\\:border-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-800);\n    }\n  }\n  .dark\\:border-neutral-800\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-800) !important;\n    }\n  }\n  .dark\\:border-neutral-800\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(26.9% 0 0) 60%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-800) 60%, transparent);\n      }\n    }\n  }\n  .dark\\:border-neutral-800\\/80 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(26.9% 0 0) 80%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-800) 80%, transparent);\n      }\n    }\n  }\n  .dark\\:border-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-900);\n    }\n  }\n  .dark\\:border-neutral-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-950);\n    }\n  }\n  .dark\\:border-red-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-red-500);\n    }\n  }\n  .dark\\:border-red-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-red-700);\n    }\n  }\n  .dark\\:border-red-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-red-800);\n    }\n  }\n  .dark\\:border-yellow-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-yellow-500);\n    }\n  }\n  .dark\\:border-yellow-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-yellow-700);\n    }\n  }\n  .dark\\:border-yellow-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(47.6% 0.114 61.907) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-yellow-800) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:border-t-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-top-color: var(--color-neutral-700);\n    }\n  }\n  .dark\\:border-r-neutral-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-right-color: var(--color-neutral-100);\n    }\n  }\n  .dark\\:border-b-neutral-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-bottom-color: var(--color-neutral-100);\n    }\n  }\n  .dark\\:border-b-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-bottom-color: var(--color-neutral-600);\n    }\n  }\n  .dark\\:border-b-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-bottom-color: var(--color-neutral-800);\n    }\n  }\n  .dark\\:border-l-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-left-color: var(--color-neutral-700);\n    }\n  }\n  .dark\\:\\!bg-black {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-black) !important;\n    }\n  }\n  .dark\\:\\!bg-neutral-50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-50) !important;\n    }\n  }\n  .dark\\:\\!bg-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-700) !important;\n    }\n  }\n  .dark\\:\\!bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-800) !important;\n    }\n  }\n  .dark\\:\\!bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-900) !important;\n    }\n  }\n  .dark\\:\\!bg-neutral-900\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 50%, transparent) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 50%, transparent) !important;\n      }\n    }\n  }\n  .dark\\:\\!bg-neutral-900\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 60%, transparent) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 60%, transparent) !important;\n      }\n    }\n  }\n  .dark\\:\\!bg-neutral-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-950) !important;\n    }\n  }\n  .dark\\:bg-\\[\\#2C2C2C\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: #2C2C2C;\n    }\n  }\n  .dark\\:bg-\\[\\#111\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: #111;\n    }\n  }\n  .dark\\:bg-\\[\\#916b20\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: #916b20;\n    }\n  }\n  .dark\\:bg-\\[\\#E81403\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: #E81403;\n    }\n  }\n  .dark\\:bg-amber-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(47.3% 0.137 46.201) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-amber-800) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-black {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-black);\n    }\n  }\n  .dark\\:bg-black\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, #000 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-black) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-black\\/90 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, #000 90%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-black) 90%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-blue-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-blue-500);\n    }\n  }\n  .dark\\:bg-blue-500\\/15 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 15%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-blue-500) 15%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-blue-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-blue-600);\n    }\n  }\n  .dark\\:bg-blue-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-blue-700);\n    }\n  }\n  .dark\\:bg-blue-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-blue-800);\n    }\n  }\n  .dark\\:bg-blue-800\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(0.424 0.199 265.638) 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-blue-800) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-blue-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-blue-900);\n    }\n  }\n  .dark\\:bg-blue-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-blue-900) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-blue-900\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-blue-900) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-blue-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-blue-950);\n    }\n  }\n  .dark\\:bg-blue-950\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(28.2% 0.091 267.935) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-blue-950) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-blue-950\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(28.2% 0.091 267.935) 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-blue-950) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-cl1-gray-1 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-1);\n    }\n  }\n  .dark\\:bg-cl1-gray-2 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-2);\n    }\n  }\n  .dark\\:bg-cl1-gray-7 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-7);\n    }\n  }\n  .dark\\:bg-cl1-gray-7\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-7);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-cl1-gray-7) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-cl1-gray-8 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-8);\n    }\n  }\n  .dark\\:bg-cl1-gray-8\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-8);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-cl1-gray-8) 60%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-cl1-gray-9 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-9);\n    }\n  }\n  .dark\\:bg-gray-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-gray-800);\n    }\n  }\n  .dark\\:bg-gray-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-gray-900);\n    }\n  }\n  .dark\\:bg-green-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-green-500);\n    }\n  }\n  .dark\\:bg-green-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-green-700);\n    }\n  }\n  .dark\\:bg-green-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-green-800);\n    }\n  }\n  .dark\\:bg-green-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-green-900);\n    }\n  }\n  .dark\\:bg-green-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(39.3% 0.095 152.535) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-green-900) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-green-950\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(26.6% 0.065 152.934) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-green-950) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-50);\n    }\n  }\n  .dark\\:bg-neutral-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-100);\n    }\n  }\n  .dark\\:bg-neutral-100\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-100) !important;\n    }\n  }\n  .dark\\:bg-neutral-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-400);\n    }\n  }\n  .dark\\:bg-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-600);\n    }\n  }\n  .dark\\:bg-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-700);\n    }\n  }\n  .dark\\:bg-neutral-700\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(37.1% 0 0) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-700) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-700\\/85 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(37.1% 0 0) 85%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-700) 85%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-750 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-750);\n    }\n  }\n  .dark\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-800);\n    }\n  }\n  .dark\\:bg-neutral-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(26.9% 0 0) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-800) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-850 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-850);\n    }\n  }\n  .dark\\:bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-900);\n    }\n  }\n  .dark\\:bg-neutral-900\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-900) !important;\n    }\n  }\n  .dark\\:bg-neutral-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-900\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-900\\/40 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 40%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 40%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-900\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-900\\/80 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 80%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 80%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-950);\n    }\n  }\n  .dark\\:bg-neutral-950\\/15 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(14.5% 0 0) 15%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-950) 15%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-orange-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-orange-500);\n    }\n  }\n  .dark\\:bg-orange-600\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(64.6% 0.222 41.116) 60%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-orange-600) 60%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-orange-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-orange-900);\n    }\n  }\n  .dark\\:bg-orange-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-orange-950);\n    }\n  }\n  .dark\\:bg-red-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-red-500);\n    }\n  }\n  .dark\\:bg-red-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-red-600);\n    }\n  }\n  .dark\\:bg-red-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-red-800);\n    }\n  }\n  .dark\\:bg-red-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-red-900);\n    }\n  }\n  .dark\\:bg-red-900\\/10\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 10%, transparent) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-red-900) 10%, transparent) !important;\n      }\n    }\n  }\n  .dark\\:bg-red-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-red-900) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-red-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-red-950);\n    }\n  }\n  .dark\\:bg-red-950\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-red-950) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-red-950\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-red-950) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-secondary {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-secondary);\n    }\n  }\n  .dark\\:bg-surface {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-surface);\n    }\n  }\n  .dark\\:bg-surface-secondary {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-surface-secondary);\n    }\n  }\n  .dark\\:bg-transparent {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: transparent;\n    }\n  }\n  .dark\\:bg-violet-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-violet-900);\n    }\n  }\n  .dark\\:bg-white {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-white);\n    }\n  }\n  .dark\\:bg-white\\/5 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, #fff 5%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-white) 5%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-white\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, #fff 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-white) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-yellow-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-yellow-600);\n    }\n  }\n  .dark\\:bg-yellow-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-yellow-900);\n    }\n  }\n  .dark\\:bg-yellow-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(42.1% 0.095 57.708) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-yellow-900) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:from-blue-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-gradient-from: color-mix(in srgb, oklch(37.9% 0.146 265.522) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-gradient-from: color-mix(in oklab, var(--color-blue-900) 20%, transparent);\n      }\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  .dark\\:from-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-gradient-from: var(--color-neutral-800);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  .dark\\:to-indigo-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-gradient-to: color-mix(in srgb, oklch(35.9% 0.144 278.697) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-gradient-to: color-mix(in oklab, var(--color-indigo-900) 20%, transparent);\n      }\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  .dark\\:to-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-gradient-to: var(--color-neutral-700);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  .dark\\:to-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-gradient-to: var(--color-neutral-900);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  .dark\\:to-neutral-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-gradient-to: var(--color-neutral-950);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  .dark\\:fill-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      fill: var(--color-neutral-800);\n    }\n  }\n  .dark\\:fill-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      fill: var(--color-neutral-900);\n    }\n  }\n  .dark\\:fill-none {\n    &:where(.dark-mode, .dark-mode *) {\n      fill: none;\n    }\n  }\n  .dark\\:fill-white {\n    &:where(.dark-mode, .dark-mode *) {\n      fill: var(--color-white);\n    }\n  }\n  .dark\\:\\!text-neutral-50 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-50) !important;\n    }\n  }\n  .dark\\:\\!text-neutral-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-100) !important;\n    }\n  }\n  .dark\\:\\!text-neutral-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-200) !important;\n    }\n  }\n  .dark\\:\\!text-neutral-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-300) !important;\n    }\n  }\n  .dark\\:\\!text-neutral-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-400) !important;\n    }\n  }\n  .dark\\:\\!text-neutral-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-500) !important;\n    }\n  }\n  .dark\\:\\!text-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-700) !important;\n    }\n  }\n  .dark\\:\\!text-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-800) !important;\n    }\n  }\n  .dark\\:\\!text-orange-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-orange-500) !important;\n    }\n  }\n  .dark\\:\\!text-red-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-200) !important;\n    }\n  }\n  .dark\\:\\!text-red-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-500) !important;\n    }\n  }\n  .dark\\:\\!text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-white) !important;\n    }\n  }\n  .dark\\:text-\\[\\#b73cdf\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      color: #b73cdf;\n    }\n  }\n  .dark\\:text-\\[\\#f85189\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      color: #f85189;\n    }\n  }\n  .dark\\:text-\\[\\#ffce4b\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      color: #ffce4b;\n    }\n  }\n  .dark\\:text-\\[var\\(--dark\\)\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--dark);\n    }\n  }\n  .dark\\:text-amber-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-amber-400);\n    }\n  }\n  .dark\\:text-black\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-black) !important;\n    }\n  }\n  .dark\\:text-blue-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-100);\n    }\n  }\n  .dark\\:text-blue-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-200);\n    }\n  }\n  .dark\\:text-blue-200\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: color-mix(in srgb, oklch(88.2% 0.059 254.128) 60%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--color-blue-200) 60%, transparent);\n      }\n    }\n  }\n  .dark\\:text-blue-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-300);\n    }\n  }\n  .dark\\:text-blue-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-400);\n    }\n  }\n  .dark\\:text-blue-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-500);\n    }\n  }\n  .dark\\:text-blue-500\\/75 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 75%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--color-blue-500) 75%, transparent);\n      }\n    }\n  }\n  .dark\\:text-blue-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-600);\n    }\n  }\n  .dark\\:text-blue-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-700);\n    }\n  }\n  .dark\\:text-blue-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-950);\n    }\n  }\n  .dark\\:text-cl1-black {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-black);\n    }\n  }\n  .dark\\:text-cl1-blue-2 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-blue-2);\n    }\n  }\n  .dark\\:text-cl1-gray-0 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-0);\n    }\n  }\n  .dark\\:text-cl1-gray-0\\/70 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-0);\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--color-cl1-gray-0) 70%, transparent);\n      }\n    }\n  }\n  .dark\\:text-cl1-gray-2 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-2);\n    }\n  }\n  .dark\\:text-cl1-gray-3 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-3);\n    }\n  }\n  .dark\\:text-cl1-gray-7 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-7);\n    }\n  }\n  .dark\\:text-cl1-gray-8 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-8);\n    }\n  }\n  .dark\\:text-cl1-red-1 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-red-1);\n    }\n  }\n  .dark\\:text-gray-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-gray-100);\n    }\n  }\n  .dark\\:text-gray-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-gray-200);\n    }\n  }\n  .dark\\:text-gray-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-gray-300);\n    }\n  }\n  .dark\\:text-gray-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-gray-400);\n    }\n  }\n  .dark\\:text-gray-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-gray-500);\n    }\n  }\n  .dark\\:text-green-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-100);\n    }\n  }\n  .dark\\:text-green-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-200);\n    }\n  }\n  .dark\\:text-green-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-300);\n    }\n  }\n  .dark\\:text-green-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-400);\n    }\n  }\n  .dark\\:text-green-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-500);\n    }\n  }\n  .dark\\:text-green-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-700);\n    }\n  }\n  .dark\\:text-green-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-800);\n    }\n  }\n  .dark\\:text-inherit {\n    &:where(.dark-mode, .dark-mode *) {\n      color: inherit;\n    }\n  }\n  .dark\\:text-neutral-50 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-50);\n    }\n  }\n  .dark\\:text-neutral-50\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-50) !important;\n    }\n  }\n  .dark\\:text-neutral-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-100);\n    }\n  }\n  .dark\\:text-neutral-150 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-150);\n    }\n  }\n  .dark\\:text-neutral-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-200);\n    }\n  }\n  .dark\\:text-neutral-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-300);\n    }\n  }\n  .dark\\:text-neutral-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-400);\n    }\n  }\n  .dark\\:text-neutral-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-500);\n    }\n  }\n  .dark\\:text-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-600);\n    }\n  }\n  .dark\\:text-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-800);\n    }\n  }\n  .dark\\:text-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-900);\n    }\n  }\n  .dark\\:text-orange-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-orange-200);\n    }\n  }\n  .dark\\:text-orange-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-orange-400);\n    }\n  }\n  .dark\\:text-orange-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-orange-500);\n    }\n  }\n  .dark\\:text-primary {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--text-color-primary);\n    }\n  }\n  .dark\\:text-red-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-100);\n    }\n  }\n  .dark\\:text-red-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-200);\n    }\n  }\n  .dark\\:text-red-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-300);\n    }\n  }\n  .dark\\:text-red-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-400);\n    }\n  }\n  .dark\\:text-red-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-500);\n    }\n  }\n  .dark\\:text-red-500\\/75 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 75%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--color-red-500) 75%, transparent);\n      }\n    }\n  }\n  .dark\\:text-red-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-600);\n    }\n  }\n  .dark\\:text-red-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-700);\n    }\n  }\n  .dark\\:text-violet-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-violet-100);\n    }\n  }\n  .dark\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-white);\n    }\n  }\n  .dark\\:text-white\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: color-mix(in srgb, #fff 60%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--color-white) 60%, transparent);\n      }\n    }\n  }\n  .dark\\:text-yellow-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-yellow-100);\n    }\n  }\n  .dark\\:text-yellow-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-yellow-200);\n    }\n  }\n  .dark\\:text-yellow-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-yellow-300);\n    }\n  }\n  .dark\\:text-yellow-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-yellow-400);\n    }\n  }\n  .dark\\:text-yellow-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-yellow-500);\n    }\n  }\n  .dark\\:shadow-\\[-1px_0_var\\(--color-neutral-800\\)\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-shadow: -1px 0 var(--tw-shadow-color, var(--color-neutral-800));\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .dark\\:shadow-\\[0_0_0_1px_rgba\\(255\\,255\\,255\\,0\\.5\\)_inset\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(255,255,255,0.5)) inset;\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .dark\\:shadow-\\[0_0_5px_6px_\\#111\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-shadow: 0 0 5px 6px var(--tw-shadow-color, #111);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .dark\\:shadow-none {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-shadow: 0 0 #0000;\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .dark\\:\\!ring-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-neutral-800) !important;\n    }\n  }\n  .dark\\:ring-amber-400\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(82.8% 0.189 84.429) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-amber-400) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-blue-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-blue-500);\n    }\n  }\n  .dark\\:ring-blue-600\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-blue-600) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-blue-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-blue-800);\n    }\n  }\n  .dark\\:ring-blue-900\\/90 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 90%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-blue-900) 90%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-border {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-border);\n    }\n  }\n  .dark\\:ring-green-500\\/40 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 40%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-green-500) 40%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-neutral-400\\/40 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(70.8% 0 0) 40%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-neutral-400) 40%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-neutral-600);\n    }\n  }\n  .dark\\:ring-neutral-600\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(43.9% 0 0) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-neutral-600) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-neutral-700);\n    }\n  }\n  .dark\\:ring-neutral-700\\/90 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(37.1% 0 0) 90%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-neutral-700) 90%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-neutral-800);\n    }\n  }\n  .dark\\:ring-orange-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-orange-700);\n    }\n  }\n  .dark\\:ring-red-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-red-700);\n    }\n  }\n  .dark\\:ring-red-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(44.4% 0.177 26.899) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-red-800) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-offset-neutral-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-offset-color: var(--color-neutral-950);\n    }\n  }\n  .dark\\:-outline-offset-1 {\n    &:where(.dark-mode, .dark-mode *) {\n      outline-offset: calc(1px * -1);\n    }\n  }\n  .dark\\:outline-gray-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      outline-color: var(--color-gray-300);\n    }\n  }\n  .dark\\:outline-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      outline-color: var(--color-neutral-700);\n    }\n  }\n  .dark\\:invert {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-invert: invert(100%);\n      filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n    }\n  }\n  .dark\\:invert-0 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-invert: invert(0%);\n      filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n    }\n  }\n  .dark\\:group-hover\\:bg-cl1-gray-7 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group):hover *) {\n        @media (hover: hover) {\n          background-color: var(--color-cl1-gray-7);\n        }\n      }\n    }\n  }\n  .dark\\:group-hover\\/choice\\:bg-neutral-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group\\/choice):hover *) {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, oklch(26.9% 0 0) 50%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-neutral-800) 50%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:group-hover\\/choice\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group\\/choice):hover *) {\n        @media (hover: hover) {\n          color: var(--color-white);\n        }\n      }\n    }\n  }\n  .dark\\:group-hover\\/expander\\:text-neutral-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group\\/expander):hover *) {\n        @media (hover: hover) {\n          color: var(--color-neutral-400);\n        }\n      }\n    }\n  }\n  .dark\\:group-focus-visible\\/escape\\:ring-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group\\/escape):focus-visible *) {\n        --tw-ring-color: var(--color-neutral-600);\n      }\n    }\n  }\n  .dark\\:peer-focus-visible\\:ring-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.peer):focus-visible ~ *) {\n        --tw-ring-color: var(--color-neutral-600);\n      }\n    }\n  }\n  .dark\\:selection\\:bg-blue-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      & *::selection {\n        background-color: var(--color-blue-900);\n      }\n      &::selection {\n        background-color: var(--color-blue-900);\n      }\n    }\n  }\n  .dark\\:selection\\:bg-red-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      & *::selection {\n        background-color: var(--color-red-900);\n      }\n      &::selection {\n        background-color: var(--color-red-900);\n      }\n    }\n  }\n  .dark\\:selection\\:bg-yellow-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      & *::selection {\n        background-color: var(--color-yellow-900);\n      }\n      &::selection {\n        background-color: var(--color-yellow-900);\n      }\n    }\n  }\n  .dark\\:placeholder\\:\\!text-cl1-gray-2 {\n    &:where(.dark-mode, .dark-mode *) {\n      &::placeholder {\n        color: var(--color-cl1-gray-2) !important;\n      }\n    }\n  }\n  .before\\:dark\\:border-neutral-800 {\n    &::before {\n      content: var(--tw-content);\n      &:where(.dark-mode, .dark-mode *) {\n        border-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .dark\\:before\\:bg-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &::before {\n        content: var(--tw-content);\n        background-color: var(--color-neutral-600);\n      }\n    }\n  }\n  .dark\\:before\\:bg-neutral-900\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &::before {\n        content: var(--tw-content);\n        background-color: color-mix(in srgb, oklch(20.5% 0 0) 50%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-neutral-900) 50%, transparent);\n        }\n      }\n    }\n  }\n  .after\\:dark\\:border-neutral-600\\/50 {\n    &::after {\n      content: var(--tw-content);\n      &:where(.dark-mode, .dark-mode *) {\n        border-color: color-mix(in srgb, oklch(43.9% 0 0) 50%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          border-color: color-mix(in oklab, var(--color-neutral-600) 50%, transparent);\n        }\n      }\n    }\n  }\n  .dark\\:after\\:bg-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &::after {\n        content: var(--tw-content);\n        background-color: var(--color-neutral-600);\n      }\n    }\n  }\n  .after\\:dark\\:ring-neutral-100\\! {\n    &::after {\n      content: var(--tw-content);\n      &:where(.dark-mode, .dark-mode *) {\n        --tw-ring-color: var(--color-neutral-100) !important;\n      }\n    }\n  }\n  .dark\\:after\\:ring-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &::after {\n        content: var(--tw-content);\n        --tw-ring-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .dark\\:peer-focus-visible\\:after\\:ring-neutral-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.peer):focus-visible ~ *) {\n        &::after {\n          content: var(--tw-content);\n          --tw-ring-color: var(--color-neutral-950);\n        }\n      }\n    }\n  }\n  .focus-within\\:dark\\:border-neutral-600 {\n    &:focus-within {\n      &:where(.dark-mode, .dark-mode *) {\n        border-color: var(--color-neutral-600);\n      }\n    }\n  }\n  .dark\\:hover\\:border-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          border-color: var(--color-neutral-600);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:border-neutral-700\\/80 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          border-color: color-mix(in srgb, oklch(37.1% 0 0) 80%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            border-color: color-mix(in oklab, var(--color-neutral-700) 80%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:\\!bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-800) !important;\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:\\!bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-900) !important;\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:\\!bg-red-950\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 50%, transparent) !important;\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-red-950) 50%, transparent) !important;\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-blue-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-blue-600);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-blue-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-blue-700);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-blue-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-blue-800);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-blue-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-blue-950);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-cl1-gray-7 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-cl1-gray-7);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-cl1-gray-8 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-cl1-gray-8);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-gray-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-gray-800);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-600);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-700);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-700\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, oklch(37.1% 0 0) 50%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-neutral-700) 50%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-800);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-900);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-900\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, oklch(20.5% 0 0) 50%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-neutral-900) 50%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-orange-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-orange-600);\n        }\n      }\n    }\n  }\n  .hover\\:dark\\:bg-neutral-300\\/10 {\n    &:hover {\n      @media (hover: hover) {\n        &:where(.dark-mode, .dark-mode *) {\n          background-color: color-mix(in srgb, oklch(87% 0 0) 10%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-neutral-300) 10%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .hover\\:dark\\:bg-neutral-700 {\n    &:hover {\n      @media (hover: hover) {\n        &:where(.dark-mode, .dark-mode *) {\n          background-color: var(--color-neutral-700);\n        }\n      }\n    }\n  }\n  .hover\\:dark\\:bg-neutral-800 {\n    &:hover {\n      @media (hover: hover) {\n        &:where(.dark-mode, .dark-mode *) {\n          background-color: var(--color-neutral-800);\n        }\n      }\n    }\n  }\n  .hover\\:dark\\:bg-neutral-900 {\n    &:hover {\n      @media (hover: hover) {\n        &:where(.dark-mode, .dark-mode *) {\n          background-color: var(--color-neutral-900);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:\\!text-neutral-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-neutral-100) !important;\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-blue-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-blue-300);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-cl1-gray-1 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-cl1-gray-1);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-neutral-50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-neutral-50);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-neutral-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-neutral-200);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-neutral-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-neutral-300);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-neutral-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-neutral-400);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-red-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-red-300);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-white);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:ring-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          --tw-ring-color: var(--color-neutral-700);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:ring-neutral-700\\/75 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          --tw-ring-color: color-mix(in srgb, oklch(37.1% 0 0) 75%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            --tw-ring-color: color-mix(in oklab, var(--color-neutral-700) 75%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:not-\\[\\:has\\(a\\:hover\\)\\]\\:bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          &:not(*:is(:has(a:hover))) {\n            background-color: var(--color-neutral-900);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:focus\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus {\n        background-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .dark\\:focus\\:text-blue-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus {\n        color: var(--color-blue-400);\n      }\n    }\n  }\n  .dark\\:focus\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus {\n        color: var(--color-white);\n      }\n    }\n  }\n  .dark\\:focus\\:ring-blue-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus {\n        --tw-ring-color: var(--color-blue-500);\n      }\n    }\n  }\n  .dark\\:focus\\:ring-neutral-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus {\n        --tw-ring-color: var(--color-neutral-500);\n      }\n    }\n  }\n  .dark\\:focus-visible\\:bg-cl1-gray-1 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus-visible {\n        background-color: var(--color-cl1-gray-1);\n      }\n    }\n  }\n  .dark\\:focus-visible\\:ring-active {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus-visible {\n        --tw-ring-color: var(--color-active);\n      }\n    }\n  }\n  .dark\\:focus-visible\\:ring-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus-visible {\n        --tw-ring-color: var(--color-neutral-600);\n      }\n    }\n  }\n  .dark\\:focus-visible\\:outline-cl1-blue-3 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus-visible {\n        outline-color: var(--color-cl1-blue-3);\n      }\n    }\n  }\n  .dark\\:active\\:text-blue-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:active {\n        color: var(--color-blue-400);\n      }\n    }\n  }\n  .dark\\:active\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      &:active {\n        color: var(--color-white);\n      }\n    }\n  }\n  .dark\\:disabled\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:disabled {\n        background-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .dark\\:disabled\\:\\!text-neutral-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:disabled {\n        color: var(--color-neutral-500) !important;\n      }\n    }\n  }\n  .dark\\:disabled\\:hover\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:disabled {\n        &:hover {\n          @media (hover: hover) {\n            background-color: var(--color-neutral-800);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:data-highlighted\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &[data-highlighted] {\n        background-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .data-highlighted\\:dark\\:bg-red-950 {\n    &[data-highlighted] {\n      &:where(.dark-mode, .dark-mode *) {\n        background-color: var(--color-red-950);\n      }\n    }\n  }\n  .dark\\:data-selected\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      &[data-selected] {\n        color: var(--color-white);\n      }\n    }\n  }\n  .dark\\:data-\\[highlighted\\]\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &[data-highlighted] {\n        background-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .data-\\[highlighted\\]\\:dark\\:bg-red-950 {\n    &[data-highlighted] {\n      &:where(.dark-mode, .dark-mode *) {\n        background-color: var(--color-red-950);\n      }\n    }\n  }\n  .dark\\:data-\\[side\\=bottom\\]\\:top-\\[-16px\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      &[data-side="bottom"] {\n        top: -16px;\n      }\n    }\n  }\n  .lg\\:dark\\:ring-neutral-800 {\n    @media (width >= 64rem) {\n      &:where(.dark-mode, .dark-mode *) {\n        --tw-ring-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .print\\:hidden {\n    @media print {\n      display: none;\n    }\n  }\n  .hocus\\:bg-blue-100 {\n    &:is(:hover, :focus-visible) {\n      background-color: var(--color-blue-100);\n    }\n  }\n  .hocus\\:bg-secondary-hover {\n    &:is(:hover, :focus-visible) {\n      background-color: var(--color-secondary-hover);\n    }\n  }\n  .hocus\\:text-blue-800 {\n    &:is(:hover, :focus-visible) {\n      color: var(--color-blue-800);\n    }\n  }\n  .hocus\\:text-neutral-700 {\n    &:is(:hover, :focus-visible) {\n      color: var(--color-neutral-700);\n    }\n  }\n  .hocus\\:opacity-50 {\n    &:is(:hover, :focus-visible) {\n      opacity: 50%;\n    }\n  }\n  .hocus\\:opacity-100 {\n    &:is(:hover, :focus-visible) {\n      opacity: 100%;\n    }\n  }\n  .dark\\:hocus\\:text-blue-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:hover, :focus-visible) {\n        color: var(--color-blue-400);\n      }\n    }\n  }\n  .dark\\:hocus\\:text-neutral-50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:hover, :focus-visible) {\n        color: var(--color-neutral-50);\n      }\n    }\n  }\n  .\\[\\&_\\.active\\+button\\]\\:bg-inherit {\n    & .active+button {\n      background-color: inherit;\n    }\n  }\n  .hover\\:\\[\\&_\\.linkText\\]\\:underline {\n    &:hover {\n      @media (hover: hover) {\n        & .linkText {\n          text-decoration-line: underline;\n        }\n      }\n    }\n  }\n  .hover\\:\\[\\&_\\.linkText\\]\\:decoration-dotted {\n    &:hover {\n      @media (hover: hover) {\n        & .linkText {\n          text-decoration-style: dotted;\n        }\n      }\n    }\n  }\n  .\\[\\&_\\[role\\=cell\\]\\:has\\(\\>_label\\)\\]\\:grid {\n    & [role=cell]:has(> label) {\n      display: grid;\n    }\n  }\n  .\\[\\&_\\[role\\=cell\\]\\:has\\(\\>_label\\)\\]\\:place-content-center {\n    & [role=cell]:has(> label) {\n      place-content: center;\n    }\n  }\n  .\\[\\&_\\[role\\=cell\\]\\:has\\(\\[aria-label\\=Actions\\]\\)\\]\\:grid {\n    & [role=cell]:has([aria-label=Actions]) {\n      display: grid;\n    }\n  }\n  .\\[\\&_\\[role\\=cell\\]\\:has\\(\\[aria-label\\=Actions\\]\\)\\]\\:place-content-center {\n    & [role=cell]:has([aria-label=Actions]) {\n      place-content: center;\n    }\n  }\n  .\\[\\&_\\[role\\=menu\\]_div\\:last-of-type\\]\\:\\!mb-0 {\n    & [role=menu] div:last-of-type {\n      margin-bottom: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .\\[\\&_\\[role\\=menu\\]_h2\\]\\:hidden {\n    & [role=menu] h2 {\n      display: none;\n    }\n  }\n  .\\[\\&_\\[role\\=rowgroup\\]\\:last-child_\\[role\\=row\\]\\:last-child_\\[role\\=cell\\]\\]\\:\\!border-b-0 {\n    & [role=rowgroup]:last-child [role=row]:last-child [role=cell] {\n      border-bottom-style: var(--tw-border-style) !important;\n      border-bottom-width: 0px !important;\n    }\n  }\n  .\\[\\&_\\[role\\=table\\]\\]\\:mx-auto\\! {\n    & [role=table] {\n      margin-inline: auto !important;\n    }\n  }\n  .\\[\\&_\\[role\\=table\\]\\]\\:max-w-full {\n    & [role=table] {\n      max-width: 100%;\n    }\n  }\n  .\\[\\&_\\[role\\=table\\]\\]\\:rounded\\! {\n    & [role=table] {\n      border-radius: 0.25rem !important;\n    }\n  }\n  .\\[\\&_\\[role\\=table\\]\\]\\:p-0\\! {\n    & [role=table] {\n      padding: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .hover\\:\\[\\&_button\\]\\:opacity-100 {\n    &:hover {\n      @media (hover: hover) {\n        & button {\n          opacity: 100%;\n        }\n      }\n    }\n  }\n  .\\[\\&_button\\,\\[href\\]\\]\\:pointer-events-none {\n    & button,[href] {\n      pointer-events: none;\n    }\n  }\n  .\\[\\&_div\\:first-child\\]\\:col-span-6 {\n    & div:first-child {\n      grid-column: span 6 / span 6;\n    }\n  }\n  .\\[\\&_div\\:last-child\\]\\:col-span-4 {\n    & div:last-child {\n      grid-column: span 4 / span 4;\n    }\n  }\n  .xl\\:\\[\\&_div\\:last-child\\]\\:justify-end {\n    @media (width >= 80rem) {\n      & div:last-child {\n        justify-content: flex-end;\n      }\n    }\n  }\n  .\\[\\&_input\\]\\:m-0\\! {\n    & input {\n      margin: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .\\[\\&_span\\]\\:min-w-0 {\n    & span {\n      min-width: calc(var(--spacing) * 0);\n    }\n  }\n  .\\[\\&_span\\]\\:truncate {\n    & span {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n  .\\[\\&_svg\\]\\:pointer-events-none {\n    & svg {\n      pointer-events: none;\n    }\n  }\n  .\\[\\&_svg\\]\\:opacity-25 {\n    & svg {\n      opacity: 25%;\n    }\n  }\n  .\\[\\&_svg\\]\\:opacity-100 {\n    & svg {\n      opacity: 100%;\n    }\n  }\n  .\\[\\&_svg\\]\\:transition-transform {\n    & svg {\n      transition-property: transform, translate, scale, rotate;\n      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n      transition-duration: var(--tw-duration, var(--default-transition-duration));\n    }\n  }\n  .\\[\\&_svg\\]\\:duration-\\[122ms\\] {\n    & svg {\n      --tw-duration: 122ms;\n      transition-duration: 122ms;\n    }\n  }\n  .hover\\:\\[\\&_svg\\]\\:scale-\\[1\\.1333\\] {\n    &:hover {\n      @media (hover: hover) {\n        & svg {\n          scale: 1.1333;\n        }\n      }\n    }\n  }\n  .\\[\\&_table\\]\\:h-\\[1px\\] {\n    & table {\n      height: 1px;\n    }\n  }\n  .\\[\\&_textarea\\]\\:resize-none {\n    & textarea {\n      resize: none;\n    }\n  }\n  .\\[\\&_th\\]\\:rounded-t {\n    & th {\n      border-top-left-radius: 0.25rem;\n      border-top-right-radius: 0.25rem;\n    }\n  }\n  .\\[\\&_ul_li\\:last-child\\]\\:\\!border-b-0 {\n    & ul li:last-child {\n      border-bottom-style: var(--tw-border-style) !important;\n      border-bottom-width: 0px !important;\n    }\n  }\n  .\\[\\&_ul_li\\:last-child_dl_dd\\:last-of-type\\]\\:\\!border-b-0 {\n    & ul li:last-child dl dd:last-of-type {\n      border-bottom-style: var(--tw-border-style) !important;\n      border-bottom-width: 0px !important;\n    }\n  }\n  .\\[\\&_ul_li\\:last-child_dl_dt\\:last-of-type\\]\\:\\!border-b-0 {\n    & ul li:last-child dl dt:last-of-type {\n      border-bottom-style: var(--tw-border-style) !important;\n      border-bottom-width: 0px !important;\n    }\n  }\n  .\\[\\&\\:\\:-webkit-calendar-picker-indicator\\]\\:hidden {\n    &::-webkit-calendar-picker-indicator {\n      display: none;\n    }\n  }\n  .\\[\\&\\:\\:-webkit-calendar-picker-indicator\\]\\:appearance-none {\n    &::-webkit-calendar-picker-indicator {\n      appearance: none;\n    }\n  }\n  .\\[\\&\\:focus-within\\>span\\]\\:ring-kumo-active {\n    &:focus-within>span {\n      --tw-ring-color: var(--color-kumo-active);\n    }\n  }\n  .\\[\\&\\:has\\(\\:focus-within\\)\\]\\:ring-active {\n    &:has(:focus-within) {\n      --tw-ring-color: var(--color-active);\n    }\n  }\n  .\\[\\&\\:has\\(\\:focus-within\\)\\]\\:ring-color {\n    &:has(:focus-within) {\n      --tw-ring-color: var(--color-color);\n    }\n  }\n  .\\[\\&\\:has\\(\\:focus-within\\)\\]\\:ring-kumo-active {\n    &:has(:focus-within) {\n      --tw-ring-color: var(--color-kumo-active);\n    }\n  }\n  .\\[\\&\\:hover\\,\\&\\:focus-within\\]\\:bg-secondary-hover {\n    &:hover,&:focus-within {\n      background-color: var(--color-secondary-hover);\n    }\n  }\n  .\\[\\&\\:hover\\>span\\]\\:ring-kumo-active {\n    &:hover>span {\n      --tw-ring-color: var(--color-kumo-active);\n    }\n  }\n  .\\[\\&\\>\\*\\]\\:border {\n    &>* {\n      border-style: var(--tw-border-style);\n      border-width: 1px;\n    }\n  }\n  .\\[\\&\\>\\*\\]\\:border-neutral-300 {\n    &>* {\n      border-color: var(--color-neutral-300);\n    }\n  }\n  .\\[\\&\\>\\*\\]\\:\\!p-0 {\n    &>* {\n      padding: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .\\[\\&\\>\\*\\]\\:dark\\:border-neutral-700 {\n    &>* {\n      &:where(.dark-mode, .dark-mode *) {\n        border-color: var(--color-neutral-700);\n      }\n    }\n  }\n  .\\[\\&\\>\\*\\>div\\]\\:\\!p-0 {\n    &>*>div {\n      padding: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .hover\\:\\[\\&\\>a\\]\\:bg-neutral-150 {\n    &:hover {\n      @media (hover: hover) {\n        &>a {\n          background-color: var(--color-neutral-150);\n        }\n      }\n    }\n  }\n  .hover\\:\\[\\&\\>a\\]\\:text-neutral-950 {\n    &:hover {\n      @media (hover: hover) {\n        &>a {\n          color: var(--color-neutral-950);\n        }\n      }\n    }\n  }\n  .hover\\:\\[\\&\\>a\\]\\:no-underline {\n    &:hover {\n      @media (hover: hover) {\n        &>a {\n          text-decoration-line: none;\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:\\[\\&\\>a\\]\\:bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          &>a {\n            background-color: var(--color-neutral-900);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:\\[\\&\\>a\\]\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          &>a {\n            color: var(--color-white);\n          }\n        }\n      }\n    }\n  }\n  .\\[\\&\\>div\\]\\:\\!block {\n    &>div {\n      display: block !important;\n    }\n  }\n  .\\[\\&\\>div\\]\\:\\!flex {\n    &>div {\n      display: flex !important;\n    }\n  }\n  .\\[\\&\\>div\\]\\:\\!h-full {\n    &>div {\n      height: 100% !important;\n    }\n  }\n  .\\[\\&\\>div\\]\\:\\!flex-col {\n    &>div {\n      flex-direction: column !important;\n    }\n  }\n  .\\[\\&\\>div\\:first-child\\]\\:\\!py-3 {\n    &>div:first-child {\n      padding-block: calc(var(--spacing) * 3) !important;\n    }\n  }\n  .\\[\\&\\>div\\:first-of-type\\]\\:flex {\n    &>div:first-of-type {\n      display: flex;\n    }\n  }\n  .\\[\\&\\>div\\:first-of-type\\]\\:h-full {\n    &>div:first-of-type {\n      height: 100%;\n    }\n  }\n  .\\[\\&\\>div\\:first-of-type\\]\\:items-center {\n    &>div:first-of-type {\n      align-items: center;\n    }\n  }\n  .\\[\\&\\>div\\>div\\]\\:w-full {\n    &>div>div {\n      width: 100%;\n    }\n  }\n  .\\[\\&\\>pre\\]\\:\\!p-2\\.5 {\n    &>pre {\n      padding: calc(var(--spacing) * 2.5) !important;\n    }\n  }\n  .\\[\\&\\>pre\\]\\:p-2\\.5\\! {\n    &>pre {\n      padding: calc(var(--spacing) * 2.5) !important;\n    }\n  }\n  .\\[\\&\\>span\\]\\:inline-block {\n    &>span {\n      display: inline-block;\n    }\n  }\n  .\\[\\&\\>span\\]\\:w-full {\n    &>span {\n      width: 100%;\n    }\n  }\n  .\\[\\&\\>span\\]\\:ring-kumo-destructive {\n    &>span {\n      --tw-ring-color: var(--color-kumo-destructive);\n    }\n  }\n  .\\[\\&\\>svg\\]\\:hidden {\n    &>svg {\n      display: none;\n    }\n  }\n  .\\[\\&\\[data-ending-style\\]\\:not\\(\\[data-limited\\]\\)\\:not\\(\\[data-swipe-direction\\]\\)\\]\\:\\[transform\\:translateY\\(150\\%\\)\\] {\n    &[data-ending-style]:not([data-limited]):not([data-swipe-direction]) {\n      transform: translateY(150%);\n    }\n  }\n  .\\[\\@media\\(min-width\\:755px\\)\\]\\:order-2 {\n    @media (min-width:755px) {\n      order: 2;\n    }\n  }\n  .\\[\\[is-focus-visible\\]_\\&\\]\\:opacity-50 {\n    [is-focus-visible] & {\n      opacity: 50%;\n    }\n  }\n}\n@layer theme;\n@layer theme;\nhtml.dark-mode {\n  color-scheme: dark;\n}\n@font-face {\n  font-family: \'Inter Variable\';\n  font-weight: 100 900;\n  font-display: swap;\n  src: local(\'Inter Variable\'), url(\'/fonts/inter-variable.woff2\');\n  font-named-instance: \'Regular\';\n  font-style: normal;\n}\n@font-face {\n  font-family: \'Inter Variable\';\n  font-weight: 100 900;\n  font-display: swap;\n  src: local(\'Inter Variable\'), url(\'/fonts/inter-variable-italic.woff2\');\n  font-named-instance: \'Italic\';\n  font-style: italic;\n}\n@font-face {\n  font-family: \'Paper Mono\';\n  font-weight: 400;\n  font-display: swap;\n  font-style: normal;\n  font-named-instance: \'Regular\';\n  src: url(\'/fonts/paper-mono-regular.woff2\') format(\'woff2\');\n}\n@layer base {\n  html, button {\n    font-family: var(--font-sans);\n    --tw-leading: 1.5;\n    line-height: 1.5;\n    --tw-font-weight: var(--font-weight-normal);\n    font-weight: var(--font-weight-normal);\n    --tw-tracking: -.01em;\n    letter-spacing: -.01em;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-feature-settings: \'cv02\', \'cv03\', \'cv04\', \'calt\';\n  }\n  pre, code {\n    font-family: var(--font-mono);\n    --tw-leading: var(--leading-normal);\n    line-height: var(--leading-normal);\n    --tw-tracking: var(--tracking-normal);\n    letter-spacing: var(--tracking-normal);\n  }\n  .font-heading {\n    font-variation-settings: \'opsz\' 32;\n  }\n  .font-title {\n    font-variation-settings: \'opsz\' 24;\n  }\n  .font-mono {\n    --tw-tracking: var(--tracking-normal);\n    letter-spacing: var(--tracking-normal);\n  }\n  button.text-base {\n    font-size: var(--text-base);\n    line-height: var(--tw-leading, var(--text-base--line-height));\n  }\n  button.text-xs {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n  }\n  button.text-lg {\n    font-size: var(--text-lg);\n    line-height: var(--tw-leading, var(--text-lg--line-height));\n  }\n  button.border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n    border-color: var(--color-color);\n  }\n  #react-app {\n    isolation: isolate;\n  }\n}\n@property --tw-translate-x {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-translate-y {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-translate-z {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-scale-x {\n  syntax: "*";\n  inherits: false;\n  initial-value: 1;\n}\n@property --tw-scale-y {\n  syntax: "*";\n  inherits: false;\n  initial-value: 1;\n}\n@property --tw-scale-z {\n  syntax: "*";\n  inherits: false;\n  initial-value: 1;\n}\n@property --tw-rotate-x {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-rotate-y {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-rotate-z {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-skew-x {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-skew-y {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-scroll-snap-strictness {\n  syntax: "*";\n  inherits: false;\n  initial-value: proximity;\n}\n@property --tw-space-y-reverse {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-space-x-reverse {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-divide-x-reverse {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-border-style {\n  syntax: "*";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-divide-y-reverse {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-gradient-position {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-gradient-from {\n  syntax: "<color>";\n  inherits: false;\n  initial-value: #0000;\n}\n@property --tw-gradient-via {\n  syntax: "<color>";\n  inherits: false;\n  initial-value: #0000;\n}\n@property --tw-gradient-to {\n  syntax: "<color>";\n  inherits: false;\n  initial-value: #0000;\n}\n@property --tw-gradient-stops {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-gradient-via-stops {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-gradient-from-position {\n  syntax: "<length-percentage>";\n  inherits: false;\n  initial-value: 0%;\n}\n@property --tw-gradient-via-position {\n  syntax: "<length-percentage>";\n  inherits: false;\n  initial-value: 50%;\n}\n@property --tw-gradient-to-position {\n  syntax: "<length-percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-leading {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-font-weight {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-tracking {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-ordinal {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-slashed-zero {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-numeric-figure {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-numeric-spacing {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-numeric-fraction {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-shadow-color {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-shadow-alpha {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-inset-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-inset-shadow-color {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-inset-shadow-alpha {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-ring-color {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-ring-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-inset-ring-color {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-inset-ring-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-ring-inset {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-ring-offset-width {\n  syntax: "<length>";\n  inherits: false;\n  initial-value: 0px;\n}\n@property --tw-ring-offset-color {\n  syntax: "*";\n  inherits: false;\n  initial-value: #fff;\n}\n@property --tw-ring-offset-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-outline-style {\n  syntax: "*";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-blur {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-brightness {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-contrast {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-grayscale {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-hue-rotate {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-invert {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-opacity {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-saturate {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-sepia {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-drop-shadow {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-drop-shadow-color {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-drop-shadow-alpha {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-drop-shadow-size {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-blur {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-brightness {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-contrast {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-grayscale {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-hue-rotate {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-invert {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-opacity {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-saturate {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-sepia {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-duration {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-ease {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-content {\n  syntax: "*";\n  initial-value: "";\n  inherits: false;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@layer properties {\n  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {\n    *, ::before, ::after, ::backdrop {\n      --tw-translate-x: 0;\n      --tw-translate-y: 0;\n      --tw-translate-z: 0;\n      --tw-scale-x: 1;\n      --tw-scale-y: 1;\n      --tw-scale-z: 1;\n      --tw-rotate-x: initial;\n      --tw-rotate-y: initial;\n      --tw-rotate-z: initial;\n      --tw-skew-x: initial;\n      --tw-skew-y: initial;\n      --tw-scroll-snap-strictness: proximity;\n      --tw-space-y-reverse: 0;\n      --tw-space-x-reverse: 0;\n      --tw-divide-x-reverse: 0;\n      --tw-border-style: solid;\n      --tw-divide-y-reverse: 0;\n      --tw-gradient-position: initial;\n      --tw-gradient-from: #0000;\n      --tw-gradient-via: #0000;\n      --tw-gradient-to: #0000;\n      --tw-gradient-stops: initial;\n      --tw-gradient-via-stops: initial;\n      --tw-gradient-from-position: 0%;\n      --tw-gradient-via-position: 50%;\n      --tw-gradient-to-position: 100%;\n      --tw-leading: initial;\n      --tw-font-weight: initial;\n      --tw-tracking: initial;\n      --tw-ordinal: initial;\n      --tw-slashed-zero: initial;\n      --tw-numeric-figure: initial;\n      --tw-numeric-spacing: initial;\n      --tw-numeric-fraction: initial;\n      --tw-shadow: 0 0 #0000;\n      --tw-shadow-color: initial;\n      --tw-shadow-alpha: 100%;\n      --tw-inset-shadow: 0 0 #0000;\n      --tw-inset-shadow-color: initial;\n      --tw-inset-shadow-alpha: 100%;\n      --tw-ring-color: initial;\n      --tw-ring-shadow: 0 0 #0000;\n      --tw-inset-ring-color: initial;\n      --tw-inset-ring-shadow: 0 0 #0000;\n      --tw-ring-inset: initial;\n      --tw-ring-offset-width: 0px;\n      --tw-ring-offset-color: #fff;\n      --tw-ring-offset-shadow: 0 0 #0000;\n      --tw-outline-style: solid;\n      --tw-blur: initial;\n      --tw-brightness: initial;\n      --tw-contrast: initial;\n      --tw-grayscale: initial;\n      --tw-hue-rotate: initial;\n      --tw-invert: initial;\n      --tw-opacity: initial;\n      --tw-saturate: initial;\n      --tw-sepia: initial;\n      --tw-drop-shadow: initial;\n      --tw-drop-shadow-color: initial;\n      --tw-drop-shadow-alpha: 100%;\n      --tw-drop-shadow-size: initial;\n      --tw-backdrop-blur: initial;\n      --tw-backdrop-brightness: initial;\n      --tw-backdrop-contrast: initial;\n      --tw-backdrop-grayscale: initial;\n      --tw-backdrop-hue-rotate: initial;\n      --tw-backdrop-invert: initial;\n      --tw-backdrop-opacity: initial;\n      --tw-backdrop-saturate: initial;\n      --tw-backdrop-sepia: initial;\n      --tw-duration: initial;\n      --tw-ease: initial;\n      --tw-content: "";\n    }\n  }\n}\n', ""])
		},
		"./react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(n, e, r) {
			var o = {
				"./favicon-zeit.ico": ["./react/app/assets/favicon-zeit.ico", "98166"],
				"./favicon-cookie.ico": ["./react/app/assets/favicon-cookie.ico", "37052"],
				"./favicon-dev.ico": ["./react/app/assets/favicon-dev.ico", "14073"],
				"./favicon-staging.ico": ["./react/app/assets/favicon-staging.ico", "6679"]
			};

			function t(n) {
				if (!r.o(o, n)) return Promise.resolve().then(function() {
					var e = Error("Cannot find module '" + n + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				});
				var e = o[n],
					t = e[0];
				return r.e(e[1]).then(function() {
					return r.t(t, 17)
				})
			}
			t.keys = function() {
				return Object.keys(o)
			}, t.id = "./react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", n.exports = t
		}
	}
]);
//# debugId=84c4c69d-f57a-5fc9-b675-338d5e774dab