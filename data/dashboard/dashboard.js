! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b1a265a0-ff4f-5d31-bff4-4e79e8c13439")
	} catch (e) {}
}();
(self.webpackChunk_cloudflare_app_dash = self.webpackChunk_cloudflare_app_dash || []).push([
	["11106"], {
		"./react/common/out.css": function(n, r, e) {
			var o, a = e("./node_modules/css-loader/index.js!./react/common/out.css");
			"string" == typeof a && (a = [
				[n.id, a, ""]
			]);
			var t = {
				hmr: !0
			};
			t.transform = o, t.insertInto = void 0, e("../../../node_modules/style-loader/lib/addStyles.js")(a, t), a.locals && (n.exports = a.locals)
		},
		"./init.ts": function(n, r, e) {
			"use strict";
			let o, a;
			e("../../../node_modules/regenerator-runtime/runtime.js"), e("../../../node_modules/url-search-params-polyfill/index.js"), e("./libs/init/initGlobal.ts"), e("./node_modules/isomorphic-fetch/fetch-npm-browserify.js"), (0, e("../../../node_modules/fetch-intercept/lib/browser.js").register)({
				request: (n, r) => {
					try {
						if (new URL(n), "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" === n) return ["/static/vendor/onetrust/logos/ot_guard_logo.svg", r];
						return [n, r]
					} catch (i) {
						var e, o, a;
						let t;
						if ("object" == typeof n && (null == n || null == (e = n.url) ? void 0 : e.startsWith("https://platform.dash.cloudflare.com/map-tiles/"))) return [n, r];
						return [n, ((t = new Headers(r && r.headers || {})).append("X-Cross-Site-Security", "dash"), o = function(n) {
							for (var r = 1; r < arguments.length; r++) {
								var e = null != arguments[r] ? arguments[r] : {},
									o = Object.keys(e);
								"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
									return Object.getOwnPropertyDescriptor(e, n).enumerable
								}))), o.forEach(function(r) {
									var o;
									o = e[r], r in n ? Object.defineProperty(n, r, {
										value: o,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : n[r] = o
								})
							}
							return n
						}({}, r), a = a = {
							headers: t
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(n, r) {
							var e = Object.keys(n);
							if (Object.getOwnPropertySymbols) {
								var o = Object.getOwnPropertySymbols(n);
								e.push.apply(e, o)
							}
							return e
						})(Object(a)).forEach(function(n) {
							Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(a, n))
						}), o)]
					}
				}
			});
			var t = e("../../../node_modules/@sentry/core/esm/exports.js"),
				i = e("../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = e("./react/app/providers/storeContainer.js");
			let c = "";
			var s = e("../../../node_modules/cookie/index.js"),
				d = e("../../../node_modules/@cloudflare/style-const/es/index.js"),
				p = e("../../common/util/previews/preview-helpers.ts");
			let g = function(n) {
					var r;
					let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
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
					return '\n  <style type="text/css">\n    #loading-state {\n      display: flex;\n      height: 100vh;\n      width: 100vw;\n      justify-content: center;\n      align-items: center;\n    }\n    .dark-mode body {\n      background-color: #0a0a0a;\n      color: #d9d9d9;\n    }\n    .error-container {\n      line-height: 1.5;\n      font-size: 20px;\n      padding: 32px;\n    }\n    .error-container a {\n      color: inherit;\n      text-decoration: underline;\n    }\n    .error-container h1 {\n      line-height: 1.5;\n      font-size: inherit;\n      font-weight: 600;\n      margin: 0 auto 16px;\n    }\n    .error-container p {\n      margin: 0;\n      max-width: 37.5rem;\n    }\n    .error-container svg {\n      width: 128px;\n      margin-bottom: 16px;\n    }\n  </style>\n  <div class="error-container">\n    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1230.574 519.774" xml:space="preserve">\n      <path fill="#F78100" d="M784.025,512.011l5.872-20.311c6.998-24.169,4.394-46.511-7.349-62.926c-10.801-15.122-28.804-24.022-50.666-25.056l-414.114-5.281c-2.788-0.147-5.096-1.403-6.518-3.471c-1.44-2.123-1.773-4.856-0.886-7.478c1.366-4.08,5.41-7.164,9.62-7.349l417.954-5.299c49.576-2.271,103.252-42.505,122.048-91.564l23.837-62.28c0.657-1.696,0.952-3.493,0.94-5.294c-0.007-0.984-0.078-1.969-0.294-2.94C857.383,91.028,748.758,0,618.863,0c-119.685,0-221.312,77.254-257.76,184.623c-23.523-17.652-53.62-27.031-85.969-23.801c-57.423,5.706-103.565,51.94-109.271,109.363c-1.496,14.901-0.277,29.284,3.158,42.8C75.222,315.718,0,392.566,0,487.029c0,8.549,0.646,16.95,1.846,25.166c0.591,3.988,3.952,6.98,7.977,6.98l764.527,0.092c0.076,0,0.142-0.034,0.218-0.036C778.942,519.134,782.79,516.24,784.025,512.011z"/>\n      <path fill="#FBAC42" d="M921.982,225.558c-3.841,0-7.663,0.111-11.466,0.295c-0.628,0.033-1.224,0.185-1.796,0.385c-1.985,0.696-3.566,2.305-4.168,4.397l-16.286,56.242c-6.998,24.169-4.395,46.493,7.349,62.907c10.801,15.14,28.804,24.022,50.665,25.056l88.277,5.299c2.604,0.129,4.893,1.385,6.297,3.416c1.477,2.142,1.809,4.893,0.923,7.515c-1.385,4.081-5.41,7.164-9.601,7.349l-91.73,5.299c-49.798,2.29-103.473,42.505-122.27,91.564l-6.629,17.319c-1.206,3.134,1.039,6.472,4.354,6.635c0.084,0.004,0.159,0.031,0.244,0.031h315.626c3.766,0,7.127-2.456,8.142-6.075c5.484-19.498,8.402-40.048,8.402-61.301C1148.315,326.889,1046.984,225.558,921.982,225.558z"/>\n    </svg>\n    <h1 id="error-title">'.concat(o.title, '</h1>\n    <p id="error-description">').concat(o.description, "</p>\n  </div>\n  ") + (e ? "\n    <style>\n    .preview-banner {\n      width: 680px;\n      padding: 32px;\n      background: ".concat(d.qI.orange["9"], ';\n      border-radius: 5px;\n      box-shadow: 1px 1px 4px 0px #999;\n    }\n    .preview-banner-branch {\n      font-family: Courier New;\n      font-weight: bold;\n    }\n    </style>\n    <div class="preview-banner">\n      <p>You are currently on a preview for branch: <span class="preview-banner-branch">').concat(null == (r = window.build) ? void 0 : r.branch, '</span>.</p>\n      <a href="').concat(window.location.href, '?deploymentPreview=current">Click here to go to the live dashboard deployment</a>\n    </div>') : "")
				},
				u = n => {
					var r;
					let e = document.getElementById(n);
					e && (null == (r = e.parentNode) || r.removeChild(e))
				};

			function m() {
				let n = document.getElementById("loading-state");
				null == n || n.classList.add("hide"), null == n || n.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(u)
				})
			}
			var h = e("./utils/initStyles.ts"),
				v = e("../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				b = e("../../../node_modules/@sentry/react/esm/sdk.js"),
				w = e("./react/common/selectors/languagePreferenceSelector.ts"),
				k = e("./flags.ts"),
				f = e("./utils/getDashVersion.ts"),
				x = e("./react/utils/fedramp.ts");
			let y = (0, x.W)() ? "https://1e812cb0fae1f46a92ecdb5db1623f92@sentry10.cfdata.org/1930" : "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				_ = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				E = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var T = e("./utils/sentry/lastSentEventId.ts"),
				O = e("../../../node_modules/@sentry/core/esm/transports/base.js"),
				A = e("../../../node_modules/@sentry/utils/esm/syncpromise.js");
			let C = n => {
				let r = async r => {
					var e, o;
					let a = {
						envelope: r.body,
						url: n.url,
						isPreviewDeploy: null == (o = window) || null == (e = o.build) ? void 0 : e.isPreviewDeploy,
						release: (0, f.n)()
					};
					try {
						let n = await fetch("".concat("https://platform.dash.cloudflare.com", "/sentry/envelope"), {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(a)
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
				return O.o(n, r)
			};
			var I = e("../../../node_modules/@sentry/tracing/esm/index.js");
			let N = (0, e("../../../node_modules/history/esm/history.js").zR)();
			var S = e("../../../node_modules/@sentry/utils/esm/worldwide.js"),
				R = e("./react/utils/url.ts");
			let D = (0, S.VZ)();
			var L = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				M = e.n(L),
				P = e("../../../node_modules/@sentry/utils/esm/object.js"),
				j = e("./react/common/middleware/sparrow/errors.ts");

			function U(n, r, e) {
				return r in n ? Object.defineProperty(n, r, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = e, n
			}

			function z(n) {
				for (var r = 1; r < arguments.length; r++) {
					var e = null != arguments[r] ? arguments[r] : {},
						o = Object.keys(e);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), o.forEach(function(r) {
						U(n, r, e[r])
					})
				}
				return n
			}

			function F(n, r) {
				return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(n, r) {
					var e = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						e.push.apply(e, o)
					}
					return e
				})(Object(r)).forEach(function(e) {
					Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
				}), n
			}
			class G {
				setupOnce() {
					e.g.console && (0, P.GS)(e.g.console, "error", n => function() {
						for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
						let i = o.find(n => n instanceof Error);
						if (y && i) {
							let n, r = !0;
							if (i instanceof j.E) {
								let e = i instanceof j.nK ? i.invalidProperties : void 0;
								n = {
									tags: {
										"sparrow.eventName": i.eventName
									},
									extra: {
										sparrow: {
											eventName: i.eventName,
											invalidProperties: e
										}
									},
									fingerprint: [i.name ? i.name : "SparrowValidationError"]
								}, r = !1
							} else if (i instanceof L.SparrowIdCookieError) n = {
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
							}
							r && t.Cp(i, F(z({}, n), {
								tags: F(z({}, null == n ? void 0 : n.tags), {
									"capture.source": "ConsoleErrorIntegration"
								})
							}))
						}
						"function" == typeof n && n.apply(e.g.console, o)
					})
				}
				constructor() {
					U(this, "name", G.id)
				}
			}
			U(G, "id", "ConsoleErrorIntegration");
			var H = e("./react/common/utils/getEnvironment.ts");

			function W(n) {
				for (var r = 1; r < arguments.length; r++) {
					var e = null != arguments[r] ? arguments[r] : {},
						o = Object.keys(e);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), o.forEach(function(r) {
						var o;
						o = e[r], r in n ? Object.defineProperty(n, r, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[r] = o
					})
				}
				return n
			}

			function K(n, r) {
				return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(n, r) {
					var e = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						e.push.apply(e, o)
					}
					return e
				})(Object(r)).forEach(function(e) {
					Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
				}), n
			}
			let B = {
				DEVPLAT: ["/:accountId/ai/ai-gateway/**", "/:accountId/ai/ai-search/**", "/:accountId/ai/vectorize/**", "/:accountId/ai/workers-ai/**", "/:accountId/pipelines/**", "/:accountId/r2/**", "/:accountId/secrets-store/**", "/:accountId/workers/analytics-engine/**", "/:accountId/workers/browser-rendering/**", "/:accountId/workers/containers/**", "/:accountId/workers/d1/**", "/:accountId/workers/durable-objects/**", "/:accountId/workers/hyperdrive/**", "/:accountId/workers/kv/**", "/:accountId/workers/plans/**", "/:accountId/workers/queues/**", "/:accountId/workers/vpc/**", "/:accountId/workers/workflows/**", "/:accountId/workers-and-pages/observability/**", "/:accountId/workers-for-platforms/**", "/:accountId/workers-and-pages/**"],
				LOUI: ["/:accountId/application-security/waf/**", "/:accountId/bulk-redirects/**", "/:accountId/dns-firewall/**", "/:accountId/internal-dns/**", "/:accountId/load-balancing/**", "/:accountId/network-security/**", "/:accountId/security-center/**", "/:accountId/log-explorer/**", "/:accountId/turnstile/**", "/:accountId/tags/**", "/:accountId/:zoneName/caching/**", "/:accountId/:zoneName/dns/**", "/:accountId/:zoneName/error-pages/**", "/:accountId/:zoneName/rules/**", "/:accountId/:zoneName/security/**", "/:accountId/:zoneName/speed/smart-shield/**", "/:accountId/:zoneName/ssl-tls/**", "/:accountId/:zoneName/traffic/**", "/:accountId/:zoneName/log-explorer/**"],
				DASHEX: ["/:accountId/home/**", "/zones", "/login", "/sign-up", "/"],
				STREAM: ["/:accountId/stream/**"]
			};
			var V = e("../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Y = () => {
					let n;
					try {
						n = decodeURIComponent(window.location.search)
					} catch (r) {
						console.log("Could not decode query string. Using non-decoded value."), n = window.location.search
					}
					if (!n.includes("remote[")) return;
					let r = new URLSearchParams(n),
						e = {};
					for (let [n, o] of r) n.includes("remote") && (e[n.replace(/remote\[|\]/g, "")] = o);
					V.A.set("mfe-remotes", JSON.stringify(e))
				},
				q = e("../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				Z = e("./node_modules/uuid/dist/esm-browser/v4.js");
			let Q = "ANON_USER_ID";
			async function X() {
				let n = (0, l.KA)();
				n.dispatch((0, q.JQ)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production",
					useProxyUrl: !0
				})), await n.dispatch((0, v.hh)({
					userId: function() {
						var n, r, o, a;
						let t = null == (a = e.g) || null == (o = a.bootstrap) || null == (r = o.data) || null == (n = r.user) ? void 0 : n.id;
						if (!t) {
							let n = V.A.get(Q);
							if (!n) {
								let r = (0, Z.A)();
								V.A.set(Q, r), n = r
							}
							return n
						}
						return t
					}()
				}))
			}
			var J = e("./libs/init/initBootstrap.ts"),
				$ = e("../../../node_modules/react/jsx-runtime.js"),
				nn = e("webpack/sharing/consume/default/react/react"),
				nr = e("webpack/sharing/consume/default/react-router-dom/react-router-dom?96fd"),
				ne = e("../../../node_modules/react-router-dom-v5-compat/dist/index.js"),
				no = e("../../../node_modules/react-dom/client.js"),
				na = e("webpack/sharing/consume/default/react-redux/react-redux"),
				nt = e("../../../node_modules/@tanstack/query-core/build/lib/queryClient.mjs"),
				ni = e("../../../node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs"),
				nl = e("../../../node_modules/swr/core/dist/index.mjs"),
				nc = e("../../../node_modules/@cloudflare/component-modals/es/index.js");
			e("../../../node_modules/svg-classlist-polyfill/polyfill.js"), e("./react/shims/focus-visible.js");
			var ns = e("./react/app/components/DeepLink/index.ts"),
				nd = e("../../../node_modules/prop-types/index.js"),
				np = e.n(nd),
				ng = e("./react/utils/translator.tsx"),
				nu = e("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				nm = e("../../dash/intl/intl-translations/src/index.ts"),
				nh = e("../../../node_modules/query-string/query-string.js"),
				nv = e.n(nh),
				nb = e("./react/common/actions/userActions.ts"),
				nw = e("./react/common/selectors/userSelectors.ts"),
				nk = e("./react/utils/i18n.ts"),
				nf = e("./react/utils/bootstrap.ts");
			let nx = nv().parse(location.search),
				ny = n => {
					let r = (0, nf.wR)() ? [(0, nm.ry)(nm.Xv.changes), (0, nm.ry)(nm.Xv.common), (0, nm.ry)(nm.Xv.navigation), (0, nm.ry)(nm.Xv.overview), (0, nm.ry)(nm.Xv.onboarding), (0, nm.ry)(nm.Xv.invite), (0, nm.ry)(nm.Xv.login), (0, nm.ry)(nm.Xv.dns), (0, nm.ry)(nm.AS.ssl_tls), (0, nm.ry)(nm.Xv.welcome)] : [(0, nm.ry)(nm.Xv.common), (0, nm.ry)(nm.Xv.invite), (0, nm.ry)(nm.Xv.login), (0, nm.ry)(nm.Xv.onboarding)];
					nx.lang ? n_(n) : V.A.get(nk.hd) && nE(n, (0, nk.JK)());
					let e = async n => (await Promise.all(r.map(r => r(n)))).reduce((n, r) => (function(n) {
						for (var r = 1; r < arguments.length; r++) {
							var e = null != arguments[r] ? arguments[r] : {},
								o = Object.keys(e);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
								return Object.getOwnPropertyDescriptor(e, n).enumerable
							}))), o.forEach(function(r) {
								var o;
								o = e[r], r in n ? Object.defineProperty(n, r, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[r] = o
							})
						}
						return n
					})({}, n, r), {});
					return (0, $.jsx)(nu.LocaleContext.Provider, {
						value: n.languagePreference,
						children: (0, $.jsx)(nu.I18nProvider, {
							translator: ng.W$,
							locale: n.languagePreference,
							children: (0, $.jsx)(nu.I18nLoader, {
								loadPhrases: e,
								children: n.children
							})
						})
					})
				},
				n_ = async n => {
					let r = nx.lang.substring(0, nx.lang.length - 2) + nx.lang.substring(nx.lang.length - 2, nx.lang.length).toUpperCase();
					if (!(0, w.C)(r)) {
						console.warn("".concat(r, " is not a supported locale.")), delete nx.lang, n.history.replace({
							search: nv().stringify(nx)
						});
						return
					}(0, nk.xS)(r), delete nx.lang, nE(n, r), n.isAuthenticated || n.history.replace({
						search: nv().stringify(nx)
					})
				}, nE = async (n, r) => {
					if (n.isAuthenticated) try {
						await n.setUserCommPreferences({
							"language-locale": r
						}, {
							hideErrorAlert: !0
						}), V.A.remove(nk.hd), n.history.replace({
							search: nv().stringify(nx)
						})
					} catch (n) {
						V.A.set(nk.hd, !0), console.error(n)
					} else V.A.set(nk.hd, !0)
				}, nT = {
					setUserCommPreferences: nb.ij
				};
			var nO = (0, nr.withRouter)((0, na.connect)(n => {
				let r = (0, nw.wz)(n);
				return {
					isAuthenticated: !!(r && r.id),
					languagePreference: (0, nk.JK)() || (0, w.j)(n)
				}
			}, nT)(ny));
			ny.propTypes = {
				history: np().object,
				languagePreference: np().string.isRequired,
				children: np().node.isRequired,
				isAuthenticated: np().bool,
				setUserCommPreferences: np().func.isRequired
			};
			var nA = e("../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				nC = e("../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let nI = function() {
				let {
					selectorPrefix: n = "c_"
				} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return a || (a = (0, nC.A)({
					dev: !1,
					selectorPrefix: n
				})), a
			};
			e("./react/common/out.css");
			var nN = e("./react/common/components/ModalManager.tsx"),
				nS = e("./react/app/components/ErrorBoundary.tsx"),
				nR = e("./react/common/actions/notificationsActions.ts");
			let nD = (e.g.bootstrap || {}).data || {};
			class nL extends nn.Component {
				componentDidMount() {
					nD.messages && this.dispatchNotificationActions(nD.messages)
				}
				dispatchNotificationActions(n) {
					n.forEach(n => {
						let {
							type: r,
							message: e,
							persist: o
						} = n;
						["success", "info", "warn", "error"].includes(r) && this.props.notifyAdd(r, (0, ng.Ay)(e), {
							persist: !!o
						})
					})
				}
				render() {
					return null
				}
			}
			let nM = (0, nr.withRouter)((0, na.connect)(null, {
				notifyAdd: nR.add
			})(nL));
			nL.propTypes = {
				notifyAdd: np().func.isRequired
			};
			var nP = e("./react/app/redux/index.ts"),
				nj = e("./react/common/selectors/entitlementsSelectors.ts"),
				nU = e("./react/common/selectors/accountSelectors.ts");
			let nz = ["is_ent", "is_free_account"];
			var nF = e("./react/common/selectors/zoneSelectors.ts");
			let nG = () => {
				var n;
				let r, e, o, a, t, i, l, c, s, d, p, g, u, m, h, v, b;
				return e = (null == (r = (0, nP.Dx)(nw.wz)) || null == (n = r.email) ? void 0 : n.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user", o = (0, H.A)(), a = (0, q.KL)(), (0, nn.useEffect)(() => {
					a({
						userType: e,
						environment: o
					})
				}, [e, o, a]), t = (0, q.ME)(), i = (0, nr.useLocation)(), l = (0, R.kW)(i.pathname), c = (0, q.KL)(), s = (0, q.TP)(), p = !(d = (0, nP.Dx)(nj.n4)).isRequesting && !!d.data, g = (0, nP.Dx)(nj.WJ), u = (0, nP.Dx)(nU._d), m = (0, nP.Dx)(nU.xX), h = !u.isRequesting && !!u.data, (0, nn.useEffect)(() => {
					if (l && h && m && p && l === m.account.id) {
						var n, r, e, o;
						c({
							accountId: m.account.id,
							is_ent: g || (null == m || null == (n = m.account.meta) ? void 0 : n.has_enterprise_zones),
							is_free_account: !g && !(null == m || null == (r = m.account.meta) ? void 0 : r.has_business_zones) && !(null == m || null == (e = m.account.meta) ? void 0 : e.has_pro_zones) && !(null == m || null == (o = m.account.meta) ? void 0 : o.has_enterprise_zones)
						})
					} else(!l || l in t && t.accountId !== l) && (c({
						accountId: "none"
					}), s(nz))
				}, [h, m, c, s, p, g, l, t]), v = (0, nP.Dx)(nF.HD), b = (0, q.KL)(), (0, nn.useEffect)(() => {
					var n;
					b({
						zone_id: null == v ? void 0 : v.id,
						zone_plan: null == v || null == (n = v.plan) ? void 0 : n.legacy_id
					})
				}, [v, b]), null
			};
			var nH = e("./react/app/components/Persistence/index.tsx"),
				nW = e("../../../node_modules/@cloudflare/elements/es/index.js"),
				nK = e("./react/app/components/LoadingSuspense.tsx");
			let nB = (0, nn.lazy)(() => Promise.all([e.e("49020"), e.e("5857"), e.e("61287"), e.e("89135"), e.e("82630"), e.e("77539"), e.e("13477"), e.e("97246"), e.e("87720"), e.e("25490"), e.e("89682"), e.e("58132"), e.e("42579"), e.e("42904"), e.e("95435"), e.e("92411"), e.e("66769"), e.e("63327"), e.e("70672"), e.e("17031"), e.e("13187"), e.e("13153"), e.e("13328"), e.e("56836"), e.e("75215"), e.e("74857"), e.e("25321"), e.e("71087"), e.e("86138"), e.e("79058"), e.e("87642")]).then(e.bind(e, "./react/common/components/DevPanel/Main.tsx")));
			var nV = () => (0, $.jsx)(nK.A, {
				children: (0, $.jsx)(nB, {})
			});
			let nY = () => (nn.useEffect(() => m, []), null),
				nq = n => {
					let {
						children: r
					} = n, e = (0, nr.useLocation)(), o = (0, nn.useMemo)(() => e.pathname.replace(/\/+/g, "/").replace(/(.+)\/$/, "$1"), [e.pathname]);
					return o !== e.pathname ? (0, $.jsx)(nr.Redirect, {
						push: !1,
						to: {
							pathname: o,
							search: e.search,
							hash: e.hash,
							state: e.state
						}
					}) : (0, $.jsx)($.Fragment, {
						children: r
					})
				};
			var nZ = e("../../../node_modules/moment/moment.js"),
				nQ = e.n(nZ),
				nX = e("./react/common/constants/constants.ts"),
				nJ = e("./react/utils/useDomainConnectRedirect.ts"),
				n$ = e("./react/utils/fragments.ts");
			let n0 = (0, nn.lazy)(() => Promise.all([e.e("49020"), e.e("5857"), e.e("61287"), e.e("30833"), e.e("89135"), e.e("82630"), e.e("47503"), e.e("77539"), e.e("13477"), e.e("97246"), e.e("87720"), e.e("25490"), e.e("89682"), e.e("58132"), e.e("42579"), e.e("42904"), e.e("52141"), e.e("56437"), e.e("78718"), e.e("95435"), e.e("49631"), e.e("5692"), e.e("16416"), e.e("38962"), e.e("50126"), e.e("74499"), e.e("15888"), e.e("64905"), e.e("4459"), e.e("6855"), e.e("31294"), e.e("66769"), e.e("57698"), e.e("40320"), e.e("63327"), e.e("38257"), e.e("70672"), e.e("17031"), e.e("13187"), e.e("13153"), e.e("13328"), e.e("56836"), e.e("75215"), e.e("74857"), e.e("25321"), e.e("71087"), e.e("23384"), e.e("86138"), e.e("86027"), e.e("79058"), e.e("10414"), e.e("76033"), e.e("68308"), e.e("25171"), e.e("806"), e.e("4886"), e.e("88085"), e.e("44383"), e.e("35419"), e.e("44805"), e.e("2965"), e.e("41143"), e.e("35606"), e.e("53171")]).then(e.bind(e, "./react/AuthenticatedApp.tsx"))),
				n1 = (0, nn.lazy)(() => Promise.all([e.e("97702"), e.e("66358"), e.e("95435"), e.e("74499"), e.e("24240"), e.e("86138"), e.e("79058"), e.e("10414"), e.e("4886"), e.e("70647"), e.e("41143"), e.e("14014")]).then(e.bind(e, "./react/UnauthenticatedApp.tsx")));
			var n5 = n => {
					let r, {
						userIsAuthed: o
					} = n;
					r = (0, nP.Dx)(w.j), (0, nn.useEffect)(() => {
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
						})(r);
						n !== nQ().locale() && nQ().locale(n), document.documentElement.lang = r
					}, [r]), (0, nn.useEffect)(() => {
						!async function() {
							var n, r, o, a;
							let t;
							if ((null == (r = window) || null == (n = r.build) ? void 0 : n.isPreviewDeploy) && (null == (a = window) || null == (o = a.build) ? void 0 : o.branch) !== "staging" && (t = "cookie"), t) try {
								let n = document.head.querySelector("link[rel=icon]");
								n && (n.href = (await e("./react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")("./favicon-".concat(t, ".ico"))).default)
							} catch (n) {}
						}()
					}, []), (0, nJ.Y)(), (0, n$.Wv)();
					let {
						devPanelEnabled: a
					} = (() => {
						var n;
						let r = (0, nr.useLocation)(),
							[e, o] = (0, nn.useState)((null == (n = window) ? void 0 : n.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
						return (0, nn.useEffect)(() => {
							let n = nv().parse(r.search);
							if (n.pt && V.A.set(nX.Lx, n.pt), null == n ? void 0 : n.devPanel) {
								var e, a;
								null == (a = window) || null == (e = a.localStorage) || e.setItem("gates_devtools_ui_gates_controller_enabled", "true"), o(!0)
							}
						}, [r.search]), {
							devPanelEnabled: e
						}
					})();
					return (0, $.jsx)(nq, {
						children: (0, $.jsx)(nn.Suspense, {
							fallback: (0, $.jsx)(nY, {}),
							children: (0, $.jsxs)(nr.Switch, {
								children: [!o && ["/", "/login"].map(n => (0, $.jsx)(nr.Route, {
									path: n,
									exact: !0,
									children: (0, $.jsx)(n1, {
										children: a && (0, $.jsx)(nV, {})
									})
								}, n)), !o && ["/sign-up", "/sign-up-n", "/signup"].map(n => (0, $.jsx)(nr.Route, {
									path: n,
									children: (0, $.jsx)(n1, {
										children: a && (0, $.jsx)(nV, {})
									})
								}, n)), (0, $.jsx)(nr.Route, {
									render: () => (0, $.jsx)(nW.i, {
										minHeight: "100vh",
										children: (0, $.jsx)(n0, {
											children: a && (0, $.jsx)(nV, {})
										})
									})
								})]
							})
						})
					})
				},
				n2 = e("../../../node_modules/yup/es/index.js"),
				n4 = e("../../common/util/types/src/utils/index.ts");
			let n3 = {
				cfEmail: () => n2.Yj().email((0, ng.Ay)("common.validation.email")).required((0, ng.Ay)("common.validation.email")),
				cfPassword: () => n2.Yj().required((0, ng.Ay)("common.validation.required"))
			};
			(0, n4.uv)(n3).forEach(n => {
				n2.Zg(n2.Yj, n, n3[n])
			});
			var n6 = e("./react/common/hooks/useDarkMode.ts"),
				n8 = e("./react/utils/sessionSync.ts"),
				n9 = e("../../../node_modules/@cloudflare/authorization/es/index.js"),
				n7 = e("./react/pages/zone-versioning/selectors.ts"),
				rn = e("./react/common/hooks/useAccountId.ts");

			function rr(n) {
				for (var r = 1; r < arguments.length; r++) {
					var e = null != arguments[r] ? arguments[r] : {},
						o = Object.keys(e);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), o.forEach(function(r) {
						var o;
						o = e[r], r in n ? Object.defineProperty(n, r, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[r] = o
					})
				}
				return n
			}
			let re = n => {
					var r;
					let {
						children: e
					} = n, o = null == (r = (0, nP.Dx)(nw.wz)) ? void 0 : r.id, a = (0, nP.Dx)(nF.HD), t = (0, nP.Dx)(n7.FJ), i = (0, rn._z)();
					return (0, $.jsx)(n9.ZP, {
						userID: o,
						contextAccountTag: i,
						contextZone: a,
						contextZoneVersionLock: t,
						reportSentryException: ra,
						children: e
					})
				},
				ro = new Set,
				ra = (n, r, e) => {
					let {
						parentComponent: o,
						stackSummary: a
					} = rt(n), i = "".concat(r.component, "->").concat(a, "->").concat(r.component_issue);
					ro.has(i) || (ro.add(i), t.Cp(n, {
						tags: rr({
							parentComponent: o
						}, r),
						extra: rr({
							stackSummary: a
						}, e),
						level: "error"
					}))
				},
				rt = n => {
					var r;
					let e = (n.stack || "").split("\n"),
						o = [];
					for (let n of e)
						for (let r of [/at (\w+)\s+\(/, /at Object\.(\w+)/, /(\w+)@/, /\/(\w+)\.tsx?:/, /\/(\w+)\.jsx?:/]) {
							let e = n.match(r);
							if (e && e[1] && !["Object", "eval", "anonymous"].includes(e[1])) {
								o.push(e[1]);
								break
							}
						}
					let a = [...new Set(o)].filter(n => !["useIsAuthorized", "renderWithHooks", "updateFunctionComponent"].includes(n)).slice(0, 5);
					return {
						parentComponent: null != (r = a[0]) ? r : "undefined",
						stackSummary: a.join(" → ")
					}
				};
			var ri = e("./react/common/components/Kumo/Providers/TooltipProvider.tsx");
			let rl = (0, nn.lazy)(() => Promise.all([e.e("87720"), e.e("58132"), e.e("78718"), e.e("55802"), e.e("39854")]).then(e.bind(e, "./react/AuthOnlyProviders.tsx"))),
				rc = new nt.E({
					logger: {
						log: console.log,
						warn: console.warn,
						error: () => {}
					}
				});

			function rs(n, r) {
				n === d.JZ.ON || n === d.JZ.SYSTEM && "dark" === r ? document.documentElement.setAttribute("data-mode", "dark") : document.documentElement.removeAttribute("data-mode"), document.cookie = "dark-mode=".concat(n, ";Path=/;Max-Age=").concat(31536e3)
			}
			let rd = () => {
				let n = (0, nf.wR)(),
					[r, e] = (0, nn.useState)(n ? rl : nn.Fragment),
					o = function() {
						let [n, r] = (0, nn.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
						return (0, nn.useEffect)(() => {
							let n = window.matchMedia("(prefers-color-scheme: dark)"),
								e = n => {
									r(n.matches ? "dark" : "light")
								};
							return n.addEventListener("change", e), () => {
								n.removeEventListener("change", e)
							}
						}, []), n
					}(),
					a = (0, n6.A)();
				(0, nn.useEffect)(() => {
					rs(a, o)
				}, [a, o]);
				let t = (0, nn.useCallback)(function() {
					var n;
					let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.JZ.SYSTEM;
					n = () => {
						(0, d.S8)(r)
					}, document.startViewTransition ? document.startViewTransition(() => n()) : n(), rs(r, o)
				}, [o]);
				return (0, nn.useEffect)(() => {
					e(n ? rl : nn.Fragment)
				}, [n]), (0, $.jsx)(nn.Suspense, {
					fallback: null,
					children: (0, $.jsx)(na.Provider, {
						store: (0, l.KA)(),
						children: (0, $.jsx)(nr.Router, {
							history: N,
							children: (0, $.jsx)(ne.Kl, {
								children: (0, $.jsx)(r, {
									children: (0, $.jsx)(nA.A, {
										renderer: nI(),
										children: (0, $.jsx)(nO, {
											children: (0, $.jsx)(nS.t, {
												sentryTag: "Root",
												children: (0, $.jsx)(re, {
													children: (0, $.jsx)(nl.BE, {
														value: {
															fetcher: n => fetch(n).then(n => n.json())
														},
														children: (0, $.jsxs)(ni.Ht, {
															client: rc,
															children: [(0, $.jsx)(nG, {}), (0, $.jsx)(nM, {}), (0, $.jsx)(nH.Hj, {
																onDarkModeChangeCb: t,
																children: (0, $.jsx)(ns.Ay, {
																	children: (0, $.jsx)(ri.B, {
																		children: (0, $.jsx)(n5, {
																			userIsAuthed: n
																		})
																	})
																})
															}), (0, $.jsx)(nN.Ay, {}), (0, $.jsx)(nc.Bs, {})]
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
				})
			};
			var rp = e("./utils/initSparrow.ts"),
				rg = e("./utils/zaraz.ts");
			let ru = () => {
					let n = (0, nw.wz)((0, l.KA)().getState());
					rm(), (0, rp.Pl)(), (0, rg.Le)(), (null == n ? void 0 : n.id) && M().setUserId(null == n ? void 0 : n.id), (0, rp.ls)(), (0, rp._G)() || (0, rp.MJ)(), n ? (0, rg.Uf)(n) : (0, rg.XH)()
				},
				rm = () => {
					var n, r;
					null == (r = window) || null == (n = r.OneTrust) || n.OnConsentChanged(() => {
						let n = (0, nw.wz)((0, l.KA)().getState());
						(0, rp._G)() ? (M().setEnabled(!0), (null == n ? void 0 : n.id) ? (M().setUserId(n.id), (0, rg.Uf)(n)) : (0, rg.XH)(), (0, rp.ls)()) : (M().setEnabled(!1), (0, rp.MJ)())
					})
				},
				rh = (n, r) => {
					var e;
					let o, a;
					t.v4(function(e) {
						e.setTag("init", r), t.Cp(n)
					}), o = document.getElementById("loading-state"), a = !!(null == (e = s.parse(document.cookie)) ? void 0 : e[p.Nt]), o && (o.innerHTML = g(null == n ? void 0 : n.code, a))
				},
				rv = async (n, r) => {
					try {
						return await n(), !0
					} catch (n) {
						return rh(n, r), !1
					}
				};
			(async () => {
				try {
					var n, r, a, s;
					let d, p;
					for (let n of (e.g.build = (r = function(n) {
							for (var r = 1; r < arguments.length; r++) {
								var e = null != arguments[r] ? arguments[r] : {},
									o = Object.keys(e);
								"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
									return Object.getOwnPropertyDescriptor(e, n).enumerable
								}))), o.forEach(function(r) {
									var o;
									o = e[r], r in n ? Object.defineProperty(n, r, {
										value: o,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : n[r] = o
								})
							}
							return n
						}({}, {
							branch: "master",
							isReleaseCandidate: "true",
							commit: "82073efcce0cb4f59e934f1453cdea63e3fad07b",
							dashVersion: "38451927",
							env: "production",
							builtAt: 0x19c6c45c8e6,
							versions: {
								"@cloudflare/app-dash": "25.161.22",
								"@cloudflare/kumo": "1.5.0",
								node: "20.19.5",
								yarn: "3.2.2",
								webpack: "5.75.0"
							}
						}), a = {
							isPreviewDeploy: (0, f.k)()
						}, a = null != a ? a : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(n, r) {
							var e = Object.keys(n);
							if (Object.getOwnPropertySymbols) {
								var o = Object.getOwnPropertySymbols(n);
								e.push.apply(e, o)
							}
							return e
						})(Object(a)).forEach(function(n) {
							Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(a, n))
						}), r), (() => {
							if (y && 1) {
								var n, r, e, a, i, c, s, d, p, g;
								let u = (0, H.A)(),
									m = "production";
								(null == (r = window) || null == (n = r.build) ? void 0 : n.isPreviewDeploy) && (m += "-preview"), "canary" === u && (m = "canary"), b.T({
									dsn: y,
									release: (0, f.n)(),
									environment: m,
									ignoreErrors: E,
									allowUrls: _,
									autoSessionTracking: !1,
									integrations: n => {
										var r, e;
										return [...n.filter(n => "GlobalHandlers" !== n.name && "TryCatch" !== n.name), new G, new I.IQ.BrowserTracing({
											routingInstrumentation: (r = N, e = "react-router-v5", function(n) {
												let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
													t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
												a && D && D.location && (o = n({
													name: (0, R.eD)(D.location.pathname),
													op: "pageload",
													tags: {
														"routing.instrumentation": e
													}
												})), t && r.listen && r.listen((r, a) => {
													a && ("PUSH" === a || "POP" === a) && (o && o.finish(), o = n({
														name: (0, R.eD)(r.pathname),
														op: "navigation",
														tags: {
															"routing.instrumentation": e
														}
													}))
												})
											})
										})]
									},
									tracesSampleRate: 0,
									transport: C,
									beforeSend: n => {
										var r, e, o, a, t, i, l, c, s;
										let d = function(n) {
											let r = null;
											for (let [e, o] of Object.entries(B))
												for (let a of o)
													if (function(n, r) {
															let e = n.split("/").slice(1).filter(n => "" !== n),
																o = r.split("/").slice(1).filter(n => "" !== n);
															for (let n = 0; n < o.length; n++) {
																let r = o[n],
																	a = e[n];
																if ("**" === r) return !0;
																if (void 0 === a) return !1;
																if ("*" !== r && !r.startsWith(":") && r !== a) return !1
															}
															let a = o[o.length - 1];
															return !(e.length > o.length) || "**" === a
														}(n, a)) {
														let n = function(n) {
															let r = n.split("/").slice(1),
																e = 0;
															for (let n of r) "**" === n ? e += 0 : "*" === n ? e += 1 : n.startsWith(":") ? e += 2 : e += 3;
															return e
														}(a);
														(!r || n > r.specificity) && (r = {
															team: e,
															specificity: n
														})
													} return (null == r ? void 0 : r.team) || "unassigned"
										}(null != (r = window.location.pathname) ? r : "");
										if (T.g.setEventId(n.event_id), n.tags = K(W({}, n.tags), {
												team: d
											}), "canary" === m) {
											let r = null == (o = n.exception) || null == (e = o.values) ? void 0 : e[0],
												d = null == r || null == (t = r.stacktrace) || null == (a = t.frames) ? void 0 : a.some(n => {
													var r, e, o, a, t;
													return (null == (r = n.filename) ? void 0 : r.includes("util-en-garde")) || (null == (e = n.filename) ? void 0 : e.includes("en-garde")) || (null == (o = n.module) ? void 0 : o.includes("util-en-garde")) || (null == (a = n.module) ? void 0 : a.includes("en-garde")) || (null == (t = n.function) ? void 0 : t.includes("assertDecode"))
												});
											if ((null == r ? void 0 : r.value) === "No error message" && ((null == r ? void 0 : r.type) === "Error" || (null == r ? void 0 : r.type) === "EnGardeAssertionError" || d)) {
												let r, e = "unknown",
													o = null == (i = n.extra) ? void 0 : i.url;
												if (o && "[undefined]" !== o) r = o, e = "extra";
												else {
													let o = [...n.breadcrumbs || []].reverse().find(n => {
														var r, e, o, a;
														return ("fetch" === n.category || "xhr" === n.category || "http" === n.type) && ((null == (e = n.data) || null == (r = e.url) ? void 0 : r.includes("/api/")) || (null == (a = n.data) || null == (o = a.url) ? void 0 : o.includes("cloudflare.com")))
													});
													(null == o || null == (s = o.data) ? void 0 : s.url) && (r = o.data.url, e = "breadcrumb")
												}
												let a = function(n) {
													if (n) try {
														let r, e;
														if (n.startsWith("/")) {
															let o = n.indexOf("?"); - 1 !== o ? (r = n.substring(0, o), e = n.substring(o)) : (r = n, e = "")
														} else {
															let o = new URL(n);
															r = o.pathname, e = o.search
														}
														return (r = r.replace(/\/(zones|accounts)\/[^/]+/gi, "/$1/:id").replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, ":id").replace(/\/\d+\//g, "/:id/").replace(/\/\d+$/g, "/:id")) + e
													} catch (n) {
														return
													}
												}(r);
												(null == (c = n.exception) || null == (l = c.values) ? void 0 : l[0]) && (n.exception.values[0].value = a ? "en-garde: ".concat(a) : "en-garde: unknown endpoint"), n.fingerprint = ["en-garde", a || "unknown"], n.tags = K(W({}, n.tags), {
													"en-garde.url_source": e
												})
											}
										}
										return n
									}
								});
								let h = (0, l.KA)().getState();
								t.cx({
									LOCAL_STORAGE_FLAGS: (0, k.sI)(),
									USER_BETA_FLAGS: (0, k._K)(),
									meta: {
										connection: {
											type: null == (i = window) || null == (a = i.navigator) || null == (e = a.connection) ? void 0 : e.effectiveType,
											bandwidth: null == (d = window) || null == (s = d.navigator) || null == (c = s.connection) ? void 0 : c.downlink
										},
										languagePreference: (0, w.j)(h),
										isPreviewDeploy: null == (g = window) || null == (p = g.build) ? void 0 : p.isPreviewDeploy
									},
									utilGates: (0, v.Lv)(h)
								}), window.addEventListener("unhandledrejection", function(n) {})
							}
						})(), [{
							fn: () => e.e("22013").then(e.bind(e, "./react/utils/api.ts")),
							tag: "utils/api"
						}, {
							fn: () => {
								N.listen(n => (function(n) {
									let r = n.substr(1);
									if (r && c !== r) {
										let n = document.getElementById(r);
										if (n) {
											let r = n.getBoundingClientRect().top;
											r > 0 && (document.documentElement.scrollTop = r - 61)
										}
									}
									c = r
								})(n.hash))
							},
							tag: "hashScroll"
						}, {
							fn: h.A,
							tag: "styles"
						}, {
							fn: Y,
							tag: "mfePreviewData"
						}]))
						if (!await rv(n.fn, n.tag)) return;
					let g = (0, l.KA)();
					if (!await rv(async () => {
							d = await (0, J.BK)(n => {
								e.g.bootstrap = n;
								let r = (null == n ? void 0 : n.data) || {};
								g.dispatch((0, i.b7)("user", null == r ? void 0 : r.user))
							})
						}, "bootstrap")) return;
					let u = (null == d ? void 0 : d.data) || {};
					g.dispatch((0, i.b7)("user", null == u ? void 0 : u.user));
					let m = null == d || null == (n = d.data) ? void 0 : n.user;
					e.g.bootstrap = d, m && m.id && ((s = m.id) ? t.gV({
						id: s
					}) : t.gV(null));
					try {
						await X()
					} catch (n) {
						t.Cp("Gates failed to initialize")
					}
					if (!(0, x.W)() && !await rv(ru, "tracking")) return;
					return (0, n8._)(), void((p = document.getElementById("react-app")) && (0, no.createRoot)(p).render((0, $.jsx)(rd, {})))
				} catch (n) {
					rh(n, "global")
				}
			})()
		},
		"./libs/init/initGlobal.ts": function() {
			var n;
			(n = window).global || (n.global = window), Object.hasOwn || (Object.hasOwn = function(n, r) {
				return Object.prototype.hasOwnProperty.call(n, r)
			})
		},
		"./react/app/components/AccountHome/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				$J: function() {
					return D
				},
				$U: function() {
					return j
				},
				BU: function() {
					return H
				},
				CK: function() {
					return z
				},
				DM: function() {
					return I
				},
				EY: function() {
					return M
				},
				FP: function() {
					return G
				},
				IO: function() {
					return V
				},
				J2: function() {
					return F
				},
				K8: function() {
					return R
				},
				RI: function() {
					return B
				},
				V1: function() {
					return N
				},
				Yu: function() {
					return S
				},
				Zi: function() {
					return K
				},
				hA: function() {
					return C
				},
				lp: function() {
					return P
				},
				nj: function() {
					return U
				},
				t2: function() {
					return L
				}
			});
			var o, a = e("webpack/sharing/consume/default/react/react"),
				t = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = e.n(t),
				l = e("./react/utils/url.ts");
			let c = "projects table click",
				s = "click create application",
				d = "account home dev plat - product card click",
				p = "account home dev plat - empty state CTA click",
				g = "account home dev plat - view all projects click",
				u = "account home zero trust - link card click",
				m = "account home zero trust - onboarding card click",
				h = "account home zero trust - analytics link click",
				v = "account home zero trust - plan pill click",
				b = "account home zero trust - plan fallback link click",
				w = "dunning alert displayed",
				k = "account overview - top analytics clicked",
				f = "account overview - widget clicked",
				x = "account overview - domain widget clicked",
				y = "account overview - devplat widget clicked",
				_ = "account overview - zt widget clicked",
				E = "account overview - audit log widget clicked",
				T = "account overview - billing widget clicked",
				O = "account overview - next steps widget clicked",
				A = "account overview - empty state displayed",
				C = {
					SPARROW_PROJECTS_TABLE_CLICK: c,
					SPARROW_CREATE_PROJECT_CLICK: s,
					SPARROW_PRODUCT_CARD_CLICK: d,
					SPARROW_EMPTY_STATE_CTA_CLICK: p,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: g,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: u,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: m,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: h,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: "account home zero trust - product card click",
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: v,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: b,
					SPARROW_DOMAINS_WIDGET_OVERFLOW_DROPDOWN: "domains widget overflow dropdown",
					SPARROW_WORKERS_WIDGET_OVERFLOW_DROPDOWN: "workers widget overflow dropdown",
					SPARROW_DUNNING_ALERT_DISPLAYED: w,
					SPARROW_ACCOUNT_OVERVIEW_TOP_ANALYTICS_CLICKED: k,
					SPARROW_ACCOUNT_OVERVIEW_WIDGET_CLICKED: f,
					SPARROW_ACCOUNT_OVERVIEW_DOMAINS_WIDGET_CLICKED: x,
					SPARROW_ACCOUNT_OVERVIEW_DEVPLAT_WIDGET_CLICKED: y,
					SPARROW_ACCOUNT_OVERVIEW_ZT_WIDGET_CLICKED: _,
					SPARROW_ACCOUNT_OVERVIEW_AUDITLOG_WIDGET_CLICKED: E,
					SPARROW_ACCOUNT_OVERVIEW_BILLING_WIDGET_CLICKED: T,
					SPARROW_ACCOUNT_OVERVIEW_NEXTSTEPS_WIDGET_CLICKED: O,
					SPARROW_ACCOUNT_OVERVIEW_EMPTY_STATE_DISPLAYED: A
				},
				I = n => {
					i().sendEvent(c, {
						component: n
					})
				},
				N = n => {
					i().sendEvent(c, {
						component: "menu",
						subcomponent: n
					})
				},
				S = () => {
					i().sendEvent(s, {
						category: "Projects Table"
					})
				},
				R = n => {
					let {
						category: r,
						product: e
					} = n;
					i().sendEvent(d, {
						category: r,
						product: e
					})
				},
				D = () => {
					i().sendEvent(p)
				},
				L = () => {
					i().sendEvent(g)
				},
				M = n => {
					i().sendEvent(m, {
						category: n
					})
				},
				P = n => {
					let {
						category: r,
						href: e
					} = n;
					i().sendEvent(u, {
						category: r,
						href: (0, l.UG)(e)
					})
				},
				j = n => {
					let {
						category: r,
						href: e
					} = n;
					i().sendEvent(h, {
						category: r,
						href: (0, l.UG)(e)
					})
				},
				U = n => {
					let {
						plan: r
					} = n;
					i().sendEvent(v, {
						plan: r
					})
				},
				z = () => {
					i().sendEvent(b)
				},
				F = () => {
					i().sendEvent(w, {
						location: "banner on account home"
					})
				},
				G = n => {
					let {
						target: r,
						metric: e,
						emptyState: o,
						timeRangeDetails: a
					} = n;
					i().sendEvent(k, function(n) {
						for (var r = 1; r < arguments.length; r++) {
							var e = null != arguments[r] ? arguments[r] : {},
								o = Object.keys(e);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
								return Object.getOwnPropertyDescriptor(e, n).enumerable
							}))), o.forEach(function(r) {
								var o;
								o = e[r], r in n ? Object.defineProperty(n, r, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[r] = o
							})
						}
						return n
					}({
						target: r
					}, e && {
						metric: e
					}, o && {
						empty_state: o
					}, void 0 !== a && {
						time_range_details: a
					}))
				};
			var H = ((o = {}).SECURITY = "security", o.PERFORMANCE = "performance", o.ACTIVITY = "activity", o);
			let W = {
					domains: x,
					devplat: y,
					"zero trust": _,
					"next steps": O,
					billing: T,
					"audit logs": E
				},
				K = n => {
					let {
						widget: r,
						target: e
					} = n, o = W[r] || f;
					i().sendEvent(o, {
						target: e
					})
				},
				B = n => {
					let {
						widget: r
					} = n;
					i().sendEvent(A, {
						target: r
					})
				},
				V = (n, r) => {
					let [e, o] = (0, a.useState)(!1), t = null == r || !r.length || r.every(n => !0 === n);
					(0, a.useEffect)(() => {
						!e && t && (i().sendEvent(n), o(!0))
					}, [e, n, t]), (0, a.useEffect)(() => () => o(!1), [])
				}
		},
		"./react/app/components/DeepLink/constants.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				BM: function() {
					return i
				},
				F2: function() {
					return c
				},
				Kq: function() {
					return l
				},
				Lf: function() {
					return p
				},
				j2: function() {
					return a
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
					return t
				}
			});
			let o = "to",
				a = "_gl",
				t = "freeTrial",
				i = "deepLinkQueryParams",
				l = "resolvedDeepLinkQueryParams",
				c = "add",
				s = "multiSkuProducts",
				d = "/:account/:zone/billing/checkout",
				p = RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"./react/app/components/DeepLink/index.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				Ay: function() {
					return x
				},
				Ci: function() {
					return f.Ci
				},
				Mz: function() {
					return c.Mz
				},
				hb: function() {
					return c.hb
				},
				vc: function() {
					return f.vc
				}
			});
			var o = e("webpack/sharing/consume/default/react/react"),
				a = e("./react/app/redux/index.ts"),
				t = e("webpack/sharing/consume/default/react-router-dom/react-router-dom?96fd"),
				i = e("./react/app/components/DeepLink/utils.ts"),
				l = e("./react/utils/bootstrap.ts"),
				c = e("./react/app/components/DeepLink/actions.ts"),
				s = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = e.n(s);

			function p(n, r, e) {
				return r in n ? Object.defineProperty(n, r, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = e, n
			}

			function g(n) {
				for (var r = 1; r < arguments.length; r++) {
					var e = null != arguments[r] ? arguments[r] : {},
						o = Object.keys(e);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), o.forEach(function(r) {
						p(n, r, e[r])
					})
				}
				return n
			}

			function u(n, r) {
				return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(n, r) {
					var e = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						e.push.apply(e, o)
					}
					return e
				})(Object(r)).forEach(function(e) {
					Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
				}), n
			}
			class m {
				track(n) {
					try {
						if (this._done) return;
						this._done = !0;
						let r = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: h(this.startTime, this.endTime),
								totalCpuTime: h(this.startTime, this.endTime)
							},
							e = 0 === this.resolvers.size ? r : Array.from(this.resolvers.values()).reduce((n, r) => {
								let e = h(r.startTime, r.endTime),
									o = r.userActions.reduce((n, r) => {
										let e = h(r.startTime, r.endTime);
										return {
											totalTime: n.totalTime + e,
											actions: n.actions.set(r.actionType, e)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									a = e - o.totalTime;
								return g(u(g({}, n), {
									totalTime: n.totalTime + e,
									totalUserActionsTime: n.totalUserActionsTime + o.totalTime,
									totalCpuTime: n.totalCpuTime + a,
									["".concat(r.name, "ResolverTotalTime")]: e,
									["".concat(r.name, "ResolverTotalCpuTime")]: a,
									["".concat(r.name, "ResolverTotalUserActionsTime")]: o.totalTime
								}), Array.from(o.actions.keys()).reduce((n, e) => u(g({}, n), {
									["".concat(r.name, "Resolver/").concat(e)]: o.actions.get(e)
								}), {}))
							}, u(g({}, r), {
								totalTime: 0,
								totalCpuTime: 0
							}));
						d().sendEvent(n, e)
					} catch (n) {
						console.error(n)
					}
				}
				constructor(n, r) {
					p(this, "deepLink", void 0), p(this, "legacyDeepLink", void 0), p(this, "resolvers", void 0), p(this, "startTime", Date.now()), p(this, "endTime", Date.now()), p(this, "_done", !1), p(this, "resolverStart", n => {
						this.resolvers.set(n, {
							name: n,
							startTime: Date.now(),
							userActions: []
						})
					}), p(this, "resolverDone", n => {
						let r = this.resolvers.get(n);
						r && (r.endTime = Date.now(), this.resolvers.set(n, r))
					}), p(this, "resolverCancel", n => {
						this.resolverDone(n), this.cancel()
					}), p(this, "start", () => {
						this.startTime = Date.now()
					}), p(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), p(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), p(this, "createUserActionTracker", n => {
						var r = this;
						let e = "NO_ACTION",
							o = {
								actionType: e,
								startTime: 0
							};
						return {
							start: function() {
								let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
									t = r.resolvers.get(n);
								o.actionType = a, o.startTime = Date.now(), t && t.userActions.push(o)
							},
							finish: function() {
								let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
								o.actionType = n, o.endTime = Date.now()
							},
							cancel: function() {
								let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
								o.actionType = a, o.endTime = Date.now(), r.resolverCancel(n)
							}
						}
					}), this.deepLink = n, this.legacyDeepLink = r, this.resolvers = new Map
				}
			}

			function h() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
					r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
				return (r - n) / 1e3
			}
			var v = e("./react/app/components/DeepLink/constants.ts"),
				b = e("./react/common/hooks/useCachedState.ts"),
				w = e("./react/common/hooks/usePrevious.ts");

			function k(n) {
				for (var r = 1; r < arguments.length; r++) {
					var e = null != arguments[r] ? arguments[r] : {},
						o = Object.keys(e);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), o.forEach(function(r) {
						var o;
						o = e[r], r in n ? Object.defineProperty(n, r, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[r] = o
					})
				}
				return n
			}
			e("./react/app/components/DeepLink/reducer.ts");
			var f = e("./react/app/components/DeepLink/selectors.ts"),
				x = n => {
					let {
						children: r
					} = n, e = (0, a.fr)(), s = (0, t.useHistory)(), d = (0, t.useLocation)(), p = (0, w.A)(d.pathname), [g, u] = (0, o.useState)(!0), [h, f] = (0, b.l)(void 0, {
						key: v.BM
					}), [x, y] = (0, b.l)(void 0, {
						key: v.Kq
					}), [_, E] = (0, b.l)(void 0, {
						key: v.uo
					}), T = (0, l.wR)(), O = new URLSearchParams(d.search), A = (0, i.bz)(d.pathname, O), C = null, I = null;
					if (O.has(v.j2) && O.delete(v.j2), O.get(v.jX)) C = O.get(v.jX), d.hash && (I = d.hash);
					else if (h) {
						let n = new URLSearchParams(h);
						n.get(v.jX) && (C = n.get(v.jX), O = n)
					} else A && (O.set(v.jX, A), C = A);
					if (C && v.Lf.test(C)) {
						let n = O.getAll(v.F2),
							r = JSON.stringify(n);
						n.length && r !== _ && E(r), O.has(v.j2) && O.delete(v.j2), O.delete(v.F2)
					}!T && void 0 === h && C && f(O.toString());
					let N = async () => {
						try {
							if ((0, i.zq)(C) && T) {
								h && f(void 0), e.dispatch((0, c.OP)()), u(!0), C && C !== x && y(C);
								let o = await (0, i.rB)(C, u, e, s, p, new m(C, A ? "".concat(d.pathname).concat(d.search) : void 0)),
									a = new URLSearchParams;
								if (C.includes("?")) {
									let n = C.split("?")[1];
									new URLSearchParams(n).forEach((n, r) => {
										a.set(r, n)
									})
								}
								O.delete(v.jX), a.forEach((n, r) => {
									O.set(r, n)
								});
								let t = O.toString();
								if ((0, i.ZM)(o)) {
									let n = new URL(o, window.location.origin);
									t && (n.search = t), I && (n.hash = I), window.location.href = n.toString()
								} else {
									var n, r;
									s.replace(k((n = k({}, d), r = {
										pathname: o,
										search: t
									}, r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(n, r) {
										var e = Object.keys(n);
										if (Object.getOwnPropertySymbols) {
											var o = Object.getOwnPropertySymbols(n);
											e.push.apply(e, o)
										}
										return e
									})(Object(r)).forEach(function(e) {
										Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
									}), n), I ? {
										hash: I
									} : {}))
								}
								e.dispatch((0, c.CG)())
							}
						} catch (n) {
							e.dispatch((0, c.CG)()), console.error(n)
						} finally {
							u(!1)
						}
					};
					return (0, o.useEffect)(() => {
						N()
					}, [d.pathname, d.search]), (g || (0, i.zq)(C)) && T ? null : r
				}
		},
		"./react/app/components/DeepLink/utils.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				Es: function() {
					return s
				},
				ZM: function() {
					return g
				},
				bz: function() {
					return v
				},
				rB: function() {
					return h
				},
				zq: function() {
					return p
				}
			});
			var o = e("../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				a = e("./react/app/components/DeepLink/reducer.ts"),
				t = e("./react/app/components/DeepLink/selectors.ts"),
				i = e("./react/app/components/DeepLink/constants.ts"),
				l = e("./react/common/validators/index.js"),
				c = e("./react/common/utils/isGuards.ts");
			let s = n => (0, l.oJ)(n) && (n.split(".").length > 1 || (0, c.hQ)(n)),
				d = o.eg.union([o.eg.literal("zone"), o.eg.literal("account"), o.eg.literal("pages-project"), o.eg.literal("pages-deployment"), o.eg.literal("worker")]),
				p = n => "string" == typeof n && n.startsWith("/"),
				g = n => !!("/one" === n || n.startsWith("/one/")) || /\/[0-9a-fA-F]{32}\/one(?=\/|$)/.test(n),
				u = (n, r) => e => new Promise((o, i) => {
					r.start();
					let l = n.subscribe(() => {
						let c = (0, t.vt)(n.getState());
						c === a.Y ? (r.cancel(), l(), i("DeepLink: waitForAction out of context.")) : e(c) && (r.finish(c.type), l(), o(c))
					})
				}),
				m = (n, r, e) => (o, l) => new Promise((c, s) => {
					e.start();
					let d = r.location.pathname;
					d !== (o = new URL(o, window.location.href).pathname) && (e.cancel(), s("DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: \"".concat(o, '", but on "').concat(d, '". You need to redirect to "').concat(o, '", and unblockRouter in your Resolver, before you use this function.')));
					let p = n.subscribe(() => {
						let d = (0, t.vt)(n.getState()),
							g = r.location.pathname,
							u = new URLSearchParams(r.location.search).get(i.jX);
						(g !== o || u) && (e.cancel(), p(), s('DeepLink: waitForPageAction user navigated away from "'.concat(o, '" to "').concat(g).concat(u ? r.location.search : "", '"'))), d === a.Y ? (e.cancel(), p(), s("DeepLink: waitForPageAction out of context.")) : l(d) && (e.finish(d.type), p(), c(d))
					})
				});
			async function h(n, r, o, a, t, i) {
				i.start();
				let l = function(n) {
						let r = [];
						for (let e of n.split("?")[0].split("/"))
							if (0 === e.length) continue;
							else e.startsWith(":") ? r.push({
								value: e.substring(1),
								type: "dynamic"
							}) : r.push({
								value: e,
								type: "static"
							});
						return r
					}(n),
					c = (await Promise.all([e.e("41793"), e.e("27519"), e.e("66769"), e.e("13328"), e.e("61300")]).then(e.bind(e, "./react/app/components/DeepLink/resolvers/index.ts"))).default,
					s = await c(),
					p = {},
					g = "";
				for (let [e, c] of l.entries())
					if ("static" === c.type) g = [g, c.value].join("/");
					else if ("dynamic" === c.type && d.is(c.value) && c.value in s) {
					i.resolverStart(c.value);
					let d = await s[c.value]({
						deepLink: n,
						blockRouter: () => r(!0),
						unblockRouter: () => r(!1),
						routerHistory: a,
						resolvedValues: p,
						store: o,
						referringRoute: t,
						uri: {
							currentPartIdx: e,
							parts: l
						},
						waitForAction: u(o, i.createUserActionTracker(c.value)),
						waitForPageAction: m(o, a, i.createUserActionTracker(c.value))
					});
					i.resolverDone(c.value), g = [g, d].join("/"), p[c.value] = d
				} else throw i.cancel(), Error("DeepLink: Resolver with name '".concat(c.value, "' is not supported."));
				return i.done(), g
			}

			function v(n, r) {
				let e = ":account",
					o = ":zone",
					a = r.get("zone");
				if (a) return r.delete("zone"), "/".concat(e, "/").concat(o, "/").concat(a);
				let t = r.get("account");
				if (t) return r.delete("account"), "/".concat(e, "/").concat(t);
				if ("/overview" === n) return "/".concat(e, "/").concat(o);
				for (let r of ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"]) {
					let a = r.length;
					if (n.startsWith(r) && (n.length === a || "/" === n[a])) return "/".concat(e, "/").concat(o).concat(n)
				}
				switch (n) {
					case "/account/billing":
						return "/".concat(e, "/billing");
					case "/account/subscriptions":
						return "/".concat(e, "/billing/subscriptions");
					case "/account/virtualDNS":
						return "/".concat(e, "/dns-firewall");
					case "/account/audit-log":
						return "/".concat(e, "/audit-log");
					default:
						return null
				}
			}
		},
		"./react/app/components/ErrorBoundary.tsx": function(n, r, e) {
			"use strict";
			e.d(r, {
				t: function() {
					return b
				}
			});
			var o = e("../../../node_modules/react/jsx-runtime.js"),
				a = e("webpack/sharing/consume/default/react/react"),
				t = e("../../../node_modules/@sentry/react/esm/errorboundary.js"),
				i = e("./react/app/components/SomethingWrong.jsx"),
				l = e("./utils/sentry/lastSentEventId.ts"),
				c = e("./utils/zaraz.ts"),
				s = e("./react/utils/url.ts"),
				d = e("../../../node_modules/@cloudflare/elements/es/index.js"),
				p = e("../../../node_modules/@cloudflare/component-button/es/index.js"),
				g = e("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				u = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = e.n(u),
				h = e("./react/common/components/Page.tsx");

			function v() {
				return (0, a.useEffect)(() => {
					m().sendEvent("new page available refresh cta"), window.location.reload()
				}, []), (0, o.jsx)(h.A, {
					type: "narrow",
					children: (0, o.jsxs)(d.i, {
						textAlign: "center",
						children: [(0, o.jsx)(d.H1, {
							fontSize: 5,
							fontWeight: 400,
							children: (0, o.jsx)(g.Trans, {
								id: "error.new_page_version_available.title"
							})
						}), (0, o.jsx)(g.Trans, {
							id: "error.new_page_version_available.description"
						}), (0, o.jsx)(d.i, {
							children: (0, o.jsx)(d.E9, {
								height: 116,
								src: "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==",
								"aria-hidden": !0
							})
						}), (0, o.jsx)(p.$n, {
							mt: 3,
							type: "primary",
							iconType: "refresh",
							onClick: () => window.location.reload(),
							children: (0, o.jsx)(g.Trans, {
								id: "common.refresh"
							})
						})]
					})
				})
			}
			let b = n => {
				let {
					sentryTag: r,
					children: e,
					fallbackComponent: a,
					tags: d
				} = n;
				return (0, o.jsx)(t.tH, {
					beforeCapture: n => {
						d && Object.entries(d).forEach(r => {
							let [e, o] = r;
							return n.setTag(e, o)
						}), null === c.fj || void 0 === c.fj || c.fj.track("page-error", {
							page: (0, s.eD)(window.location.pathname)
						})
					},
					onError: n => {},
					fallback: n => {
						var e;
						let {
							error: t,
							eventId: c
						} = n;
						if (a) return "function" == typeof a ? (0, o.jsx)(a, {
							error: t
						}) : a;
						let s = l.g.getEventId() || c;
						return (null == t || null == (e = t.message) ? void 0 : e.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), (0, o.jsx)(v, {})) : (0, o.jsx)(i.A, {
							type: "page",
							error: t,
							eventId: s,
							sentryTag: r
						})
					},
					children: e
				})
			}
		},
		"./react/app/components/Footer.tsx": function(n, r, e) {
			"use strict";
			e.d(r, {
				D: function() {
					return N
				}
			});
			var o = e("../../../node_modules/react/jsx-runtime.js"),
				a = e("webpack/sharing/consume/default/react-router-dom/react-router-dom?96fd"),
				t = e("../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				i = e("./react/common/components/Apple/utils.tsx"),
				l = e("../../../node_modules/@cloudflare/style-container/es/index.js"),
				c = e("./react/utils/translator.tsx"),
				s = e("../../../node_modules/moment/moment.js"),
				d = e.n(s),
				p = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = e.n(p),
				u = e("./react/app/components/Persistence/hooks/useTimezone.tsx");
			let m = (0, l.a0)(n => {
					let {
						theme: r,
						marginTop: e
					} = n;
					return {
						backgroundColor: "#1F1F1F",
						width: "100%",
						minHeight: "143px",
						marginTop: e
					}
				}),
				h = (0, l.a0)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				v = (0, l.a0)(n => {
					let {
						theme: r
					} = n;
					return {
						desktop: {
							marginLeft: "70px",
							padding: "33px 0 0 0"
						},
						mobile: {
							padding: "33px ".concat(r.space[3], "px")
						}
					}
				}),
				b = (0, l.a0)(n => {
					let {
						theme: r
					} = n;
					return {
						width: "100%",
						color: r.colors.white,
						fontSize: r.fontSizes[1],
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
				w = (0, l.a0)(n => {
					let {
						theme: r
					} = n;
					return {
						display: "flex",
						flexWrap: "wrap",
						marginTop: r.space[3],
						desktop: {
							flexWrap: "nowrap"
						}
					}
				}),
				k = (0, l.a0)(n => {
					let {
						showOnDeskTop: r = !0,
						theme: e
					} = n;
					return {
						color: e.colors.white,
						fontSize: e.fontSizes[1],
						height: "20px",
						display: r ? "flex" : "none",
						alignItems: "center",
						desktop: {
							display: "flex",
							"&:nth-child(2)": {
								marginLeft: e.space[3],
								"&::before": {
									display: "inline-block"
								}
							}
						},
						"&:not(:first-child)": {
							marginLeft: e.space[3],
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
				f = (0, l.RY)(n => {
					let {
						theme: r
					} = n;
					return {
						textDecoration: "none",
						color: r.colors.white,
						"&:hover": {
							color: r.colors.white,
							textDecoration: "underline"
						}
					}
				}, "a");
			var x = n => {
					let {
						momentFormatDate: r
					} = (0, u.BF)(), e = r(d()(), "YYYY"), a = n => {
						g().sendEvent("follower icloud footer link", {
							category: "icloud registrar",
							link: n
						})
					};
					return (0, o.jsx)(m, {
						marginTop: "auto",
						children: (0, o.jsx)(h, {
							children: (0, o.jsxs)(v, {
								children: [(0, o.jsxs)(b, {
									children: ["\xa9 ", e, " Cloudflare, Inc."]
								}), (0, o.jsxs)(b, {
									children: [(0, o.jsxs)(w, {
										children: [(0, o.jsx)(k, {
											showOnDeskTop: !1,
											children: (0, o.jsx)(f, {
												fontWeight: 600,
												href: "https://support.cloudflare.com/",
												onClick: () => a("Support"),
												children: (0, o.jsx)(c.x6, {
													id: "common.support"
												})
											})
										}), (0, o.jsx)(k, {
											children: (0, o.jsx)(f, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/privacypolicy/",
												onClick: () => a("Privacy Policy"),
												children: (0, o.jsx)(c.x6, {
													id: "footer.privacy_policy"
												})
											})
										}), (0, o.jsx)(k, {
											children: (0, o.jsx)(f, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/terms/",
												onClick: () => a("Terms of Use"),
												children: (0, o.jsx)(c.x6, {
													id: "apple.footer.terms_of_use"
												})
											})
										}), (0, o.jsx)(k, {
											children: (0, o.jsx)(f, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/cookie-policy/",
												onClick: () => a("Cookie Preferences"),
												children: (0, o.jsx)(c.x6, {
													id: "apple.footer.cookie_preferences"
												})
											})
										}), (0, o.jsx)(k, {
											children: (0, o.jsx)(f, {
												fontWeight: 600,
												href: "https://www.cloudflare.com/trademark/",
												onClick: () => a("Trademark"),
												children: (0, o.jsx)(c.x6, {
													id: "apple.footer.trademark"
												})
											})
										})]
									}), (0, o.jsx)(w, {
										children: (0, o.jsx)(k, {
											children: (0, o.jsx)(f, {
												fontWeight: 400,
												href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
												onClick: () => a("ICANN's Domain Name Registrants' Rights"),
												children: (0, o.jsx)(c.x6, {
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
				y = e("./react/common/components/Kumo/utils.ts"),
				_ = e("./react/pages/welcome/routes.ts"),
				E = e("webpack/sharing/consume/default/react/react"),
				T = e("./react/utils/cookiePreferences.ts"),
				O = e("../../../node_modules/@cloudflare/style-const/es/index.js"),
				A = e("../../../node_modules/@cloudflare/elements/es/index.js"),
				C = () => {
					let [n, r] = (0, E.useState)(!1), e = (0, T.vM)(), a = e && "US" === e ? (0, c.Ay)("footer.cpra_cta.privacy_choices") : (0, c.Ay)("footer.cpra_cta.cookie_preferences"), t = (0, c.Ay)("footer.cpra_cta.privacy_choices_alt"), i = {
						background: "transparent",
						borderRadius: "none",
						color: n ? (0, O.ud)() ? "#ee730a" : "#003681" : (0, O.ud)() ? "#4693ff" : "#0051c3",
						textDecoration: "underline",
						textDecorationColor: n ? "color-mix(in srgb, currentColor, transparent 70%)" : "transparent",
						textDecorationThickness: "1px",
						textUnderlineOffset: "2px",
						cursor: "pointer",
						transitionProperty: "all",
						transitionDuration: "150ms",
						transitionTimingFunction: "ease",
						padding: "0px",
						display: "flex",
						alignItems: "center",
						lineHeight: "1.5",
						height: "fit-content",
						fontSize: "13px",
						fontWeight: 400,
						"&:focus": {
							outline: "2px solid #086fff"
						},
						border: "none",
						overflow: "hidden"
					};
					return (0, o.jsxs)(A.$n, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: i,
						onMouseEnter: () => {
							r(!0)
						},
						onMouseLeave: () => {
							r(!1)
						},
						children: [(0, o.jsx)(A.E9, {
							height: 15,
							src: "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
							mr: 2,
							alt: t
						}), a]
					})
				};
			let I = n => {
					var r, e, {
							children: a,
							target: i,
							rel: l,
							className: c
						} = n,
						s = function(n, r) {
							if (null == n) return {};
							var e, o, a = function(n, r) {
								if (null == n) return {};
								var e, o, a = {},
									t = Object.keys(n);
								for (o = 0; o < t.length; o++) e = t[o], r.indexOf(e) >= 0 || (a[e] = n[e]);
								return a
							}(n, r);
							if (Object.getOwnPropertySymbols) {
								var t = Object.getOwnPropertySymbols(n);
								for (o = 0; o < t.length; o++) e = t[o], !(r.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(n, e) && (a[e] = n[e])
							}
							return a
						}(n, ["children", "target", "rel", "className"]);
					let d = (0, t.Fr)();
					return (0, o.jsx)("a", (r = function(n) {
						for (var r = 1; r < arguments.length; r++) {
							var e = null != arguments[r] ? arguments[r] : {},
								o = Object.keys(e);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
								return Object.getOwnPropertyDescriptor(e, n).enumerable
							}))), o.forEach(function(r) {
								var o;
								o = e[r], r in n ? Object.defineProperty(n, r, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[r] = o
							})
						}
						return n
					}({
						className: (0, y.cn)("text-label no-underline transition-colors", "hover:text-surface focus:text-surface", d ? "mt-2" : "mt-0", c),
						target: null != i ? i : "_blank",
						rel: null != l ? l : "noopener noreferrer"
					}, s), e = e = {
						children: a
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : (function(n, r) {
						var e = Object.keys(n);
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(n);
							e.push.apply(e, o)
						}
						return e
					})(Object(e)).forEach(function(n) {
						Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n))
					}), r))
				},
				N = () => {
					let n = (0, t.Fr)(),
						r = [_.B.root.pattern].some(n => (0, a.matchPath)(location.pathname, {
							path: n
						}));
					if ((0, i.OW)()) return (0, o.jsx)(x, {});
					if (r) return null;
					let e = new Date().getFullYear();
					return (0, o.jsx)("footer", {
						className: (0, y.cn)("bg-surface border-t border-color mt-auto pb-0 px-4 md:px-3 py-2.5", n ? "h-auto" : "h-12"),
						id: "site-footer",
						children: (0, o.jsx)("div", {
							className: (0, y.cn)("flex justify-center pb-2.5", n ? "flex-col" : "flex-row"),
							children: (0, o.jsxs)("ul", {
								className: (0, y.cn)("m-0 flex items-center justify-center flex-wrap", n ? "gap-2" : "gap-4", "[&>li]:list-none", "[&>li>a]:text-sm [&>li>a]:border-l [&>li>a]:border-color [&>li>a]:pl-4", "[&>li:first-child>a]:border-l-0"),
								children: [(0, o.jsx)("li", {
									children: (0, o.jsx)(I, {
										href: "https://support.cloudflare.com",
										children: (0, c.Ay)("common.support")
									})
								}), (0, o.jsx)("li", {
									children: (0, o.jsx)(I, {
										href: "https://www.cloudflarestatus.com",
										children: (0, o.jsx)("span", {
											className: "capitalize",
											children: (0, c.Ay)("footer.system_status")
										})
									})
								}), (0, o.jsx)("li", {
									children: (0, o.jsx)(I, {
										href: "https://www.cloudflare.com/careers/",
										children: (0, c.Ay)("footer.careers")
									})
								}), (0, o.jsx)("li", {
									children: (0, o.jsx)(I, {
										href: "https://www.cloudflare.com/website-terms/",
										children: (0, c.Ay)("footer.tos_reduced")
									})
								}), (0, o.jsx)("li", {
									children: (0, o.jsx)(I, {
										href: "https://www.cloudflare.com/disclosure/",
										children: (0, c.Ay)("footer.security_issues")
									})
								}), (0, o.jsx)("li", {
									children: (0, o.jsx)(I, {
										href: "https://www.cloudflare.com/privacypolicy/",
										children: (0, c.Ay)("footer.privacy_policy")
									})
								}), (0, o.jsx)("li", {
									children: (0, o.jsx)(C, {})
								}), (0, o.jsx)("li", {
									children: (0, o.jsxs)("span", {
										className: "text-sm text-muted",
										children: ["\xa9 ", e, " Cloudflare, Inc."]
									})
								})]
							})
						})
					})
				}
		},
		"./react/app/components/LoadingSuspense.tsx": function(n, r, e) {
			"use strict";
			e.d(r, {
				A: function() {
					return u
				},
				t: function() {
					return g
				}
			});
			var o = e("../../../node_modules/react/jsx-runtime.js"),
				a = e("webpack/sharing/consume/default/react/react"),
				t = e("../../../node_modules/@cloudflare/component-loading/es/index.js"),
				i = e("../../../node_modules/@cloudflare/elements/es/index.js"),
				l = e("./react/utils/translator.tsx"),
				c = e("./react/app/components/ErrorStatus.tsx"),
				s = e("./react/common/components/EmptyPage.jsx");

			function d(n) {
				let [r, e] = (0, a.useState)(!1);
				return (0, a.useEffect)(() => {
					let r = window.setTimeout(() => e(!0), n);
					return () => window.clearTimeout(r)
				}, []), r
			}
			e("../../../node_modules/@cloudflare/component-listener/es/index.js");
			let p = n => {
					let {
						loadingTimeout: r = 1e3,
						stillLoadingTimeout: e = 9e3
					} = n, p = d(r), g = d(e);
					if ((0, a.useEffect)(() => () => {
							window.dispatchEvent(new Event("suspenseComplete"))
						}, []), !p && !g) return (0, o.jsx)(s.A, {});
					let u = g ? (0, o.jsx)(l.x6, {
						id: "common.still_loading"
					}) : p ? (0, o.jsx)(l.x6, {
						id: "common.loading"
					}) : null;
					return (0, o.jsxs)(c.A, {
						size: 5,
						children: [(0, o.jsx)(i.i, {
							mr: 3,
							children: (0, o.jsx)(t.R, {
								size: "2x"
							})
						}), u]
					})
				},
				g = n => {
					let {
						children: r
					} = n;
					return (0, o.jsx)(a.Suspense, {
						fallback: (0, o.jsx)(p, {}),
						children: r
					})
				};
			var u = g
		},
		"./react/app/components/SomethingWrong.jsx": function(n, r, e) {
			"use strict";
			var o = e("../../../node_modules/react/jsx-runtime.js"),
				a = e("webpack/sharing/consume/default/react/react"),
				t = e("webpack/sharing/consume/default/react-router-dom/react-router-dom?96fd"),
				i = e("../../../node_modules/prop-types/index.js"),
				l = e.n(i),
				c = e("webpack/sharing/consume/default/react-redux/react-redux"),
				s = e("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				d = e("../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = e("../../../node_modules/@cloudflare/component-button/es/index.js"),
				g = e("../../../node_modules/@sentry/core/esm/exports.js"),
				u = e("../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				m = e("../../../node_modules/@cloudflare/component-header/es/index.js"),
				h = e("../../../node_modules/@cloudflare/component-logo/es/index.js"),
				v = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				b = e.n(v),
				w = e("./react/common/actions/membershipActions.ts"),
				k = e("./react/common/hooks/useIsInternal.ts"),
				f = e("./react/common/utils/getEnvironment.ts"),
				x = e("./react/utils/url.ts"),
				y = e("./react/app/components/Footer.tsx");
			let _ = (0, d.a0)(n => {
					let {
						type: r
					} = n;
					return {
						height: "fullscreen" !== r ? 451 : "75vh",
						tabletLegacy: {
							marginBottom: "-2.66rem"
						}
					}
				}),
				E = (0, d.a0)(n => {
					let {
						theme: r,
						margin: e,
						size: o = 6
					} = n;
					return {
						display: "flex",
						flexFlow: "column",
						color: r.colors.gray[3],
						height: e ? "auto" : "100%",
						padding: e ? 0 : r.space[o > 1 ? o - 2 : 0],
						margin: e,
						justifyContent: "center",
						alignItems: "center"
					}
				}),
				T = (0, d.a0)(() => ({
					textAlign: "left"
				})),
				O = (0, d.a0)(() => ({
					textAlign: "right"
				})),
				A = (0, d.a0)(n => {
					let {
						theme: r
					} = n;
					return {
						fontSize: r.fontSizes[6]
					}
				}),
				C = (0, d.a0)(n => {
					let {
						theme: r
					} = n;
					return {
						fontSize: r.fontSizes[4]
					}
				}),
				I = (0, d.a0)(n => {
					let {
						theme: r
					} = n;
					return {
						fontSize: r.fontSizes[3]
					}
				}),
				N = (0, d.a0)(n => {
					let {
						theme: r
					} = n;
					return {
						width: "100%",
						height: 125,
						marginTop: r.space[4],
						padding: r.space[2]
					}
				}, "textarea"),
				S = () => {
					let n = new Date,
						r = new Date(n);
					r.setUTCHours(13, 0, 0, 0), n >= r && r.setUTCDate(r.getUTCDate() + 1);
					let e = r.getTime() - n.getTime(),
						o = Math.floor(e / 36e5),
						a = Math.floor(e % 36e5 / 6e4),
						t = Math.floor(e % 6e4 / 1e3),
						i = n => String(n).padStart(2, "0");
					return o > 0 ? "".concat(o, "h ").concat(i(a), "m ").concat(i(t), "s") : "".concat(a, "m ").concat(i(t), "s")
				},
				R = () => {
					let [n, r] = (0, a.useState)(S);
					return (0, a.useEffect)(() => {
						let n = setInterval(() => {
							r(S())
						}, 1e3);
						return () => clearInterval(n)
					}, []), (0, o.jsx)("div", {
						className: "flex items-center gap-2 p-3 mb-4 bg-orange-100 dark:bg-orange-900/30 rounded border border-orange-300 dark:border-orange-700",
						children: (0, o.jsxs)("span", {
							className: "text-sm text-orange-800 dark:text-orange-200",
							children: ["Don't panic! You are currently on canary. Production typically releases in", " ", (0, o.jsx)("strong", {
								className: "font-mono tabular-nums",
								children: n
							}), ", please report this issue so we can fix it before it reaches customers!"]
						})
					})
				},
				D = n => {
					let {
						type: r,
						error: e,
						eventId: i,
						sentryTag: l
					} = n, [d, v] = (0, a.useState)(""), [S, D] = (0, a.useState)(!1), L = (0, k.b)(), M = (0, f.A)(), P = L && "canary" === M, j = (0, c.useDispatch)();
					(0, a.useEffect)(() => {
						(async () => {
							console.error("SomethingWrong: ".concat(e));
							let n = "".concat(e),
								r = "",
								o = (0, x.sp)();
							if (o) {
								var a;
								let n = await j((0, w.Ic)({
										parameters: {
											status: "accepted"
										}
									})),
									e = null == n || null == (a = n.find(n => n.id === o)) ? void 0 : a.roles;
								e && e.length && (r = e.join(", "))
							}
							let t = "ErrorBoundary - ".concat(e);
							g.Cp(t, {
								tags: {
									errorBoundary: l,
									normalizedPath: (0, x.eD)(window.location.pathname),
									roles: r.length ? r : void 0
								}
							}), b().sendEvent("something wrong", {
								error: e,
								errorMessage: n,
								roles: r.length ? r : void 0
							})
						})()
					}, [e, l, j]);
					let U = (0, a.useCallback)(n => {
							v(n.target.value)
						}, []),
						z = (0, a.useCallback)(async () => {
							try {
								var n, r, e, o;
								let a = (null == (o = window) || null == (e = o.bootstrap) || null == (r = e.data) || null == (n = r.user) ? void 0 : n.id) || "Unknown",
									t = i || u.Q(),
									l = {
										name: a,
										email: "".concat(a, "@userid.com"),
										comments: d,
										eventId: t,
										url: window.location.href,
										prevUrl: document.referrer,
										date: Date.now(),
										dashVersion: window.build.dashVersion,
										build: function(n) {
											for (var r = 1; r < arguments.length; r++) {
												var e = null != arguments[r] ? arguments[r] : {},
													o = Object.keys(e);
												"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
													return Object.getOwnPropertyDescriptor(e, n).enumerable
												}))), o.forEach(function(r) {
													var o;
													o = e[r], r in n ? Object.defineProperty(n, r, {
														value: o,
														enumerable: !0,
														configurable: !0,
														writable: !0
													}) : n[r] = o
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
									body: JSON.stringify(l)
								})).ok && (D(!0), v(""), setTimeout(() => window.location.href = "/", 5e3))
							} catch (n) {
								console.error(n)
							}
						}, [i, d]),
						F = (0, a.useCallback)(() => {
							"" !== d && z()
						}, [d, z]),
						G = n => (0, o.jsx)(s.I18n, {
							children: r => (0, o.jsx)(_, {
								type: n,
								children: (0, o.jsx)(E, {
									children: (0, o.jsxs)(T, {
										children: [P && (0, o.jsx)(R, {}), (0, o.jsx)(A, {
											children: r.t("error.internal_issues")
										}), (0, o.jsx)(C, {
											children: r.t("error.help_us")
										}), (0, o.jsx)(N, {
											name: "comment",
											value: d,
											onChange: U,
											disabled: S,
											placeholder: r.t("error.give_feedback")
										}), (0, o.jsxs)(O, {
											children: [!S && (0, o.jsx)(p.$n, {
												onClick: F,
												type: "primary",
												children: r.t("common.submit")
											}), S && (0, o.jsx)(I, {
												children: r.t("error.feedback_sent")
											})]
										})]
									})
								})
							})
						});
					return "fullscreen" === r ? (0, o.jsxs)("div", {
						children: [(0, o.jsx)(m.Y9, {
							children: (0, o.jsx)(t.Link, {
								to: "/",
								children: (0, o.jsx)(h.gu, {})
							})
						}), G(r), (0, o.jsx)(y.D, {})]
					}) : G(r)
				};
			D.propTypes = {
				type: l().oneOf(["fullscreen", "page"]),
				error: l().oneOfType([l().string, l().instanceOf(Error)]),
				eventId: l().string,
				sentryTag: l().string
			}, r.A = D
		},
		"./react/app/components/Switchers/sparrowConstants.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
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
		"./react/common/components/Apple/utils.tsx": function(n, r, e) {
			"use strict";
			e.d(r, {
				Br: function() {
					return u
				},
				OW: function() {
					return g
				},
				en: function() {
					return s
				}
			});
			var o = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = e.n(o),
				t = e("../../../node_modules/@cloudflare/util-cache/es/index.js"),
				i = e("./react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = e("../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = e("./react/common/utils/oidc.ts");
			let s = () => t.y.get(i.Qv),
				d = /^\/login\/apple(\/)?/,
				p = [d, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/[a-zA-Z0-9]+\/registrar\/register\/success$/, /^\/$/, /^\/email-verification-info(\/)?/],
				g = () => {
					let n = !1;
					p.forEach(r => {
						if (r.test(window.location.pathname)) {
							n = !0;
							return
						}
					});
					let r = (d.test(window.location.pathname) || t.y.has(i.Qv)) && n;
					return r && (0, l.S8)(l.JZ.OFF), r
				},
				u = n => {
					n && a().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					}), window.location.href = (0, c.nO)(c.SJ.Apple, n)
				}
		},
		"./react/common/components/EmptyPage.jsx": function(n, r, e) {
			"use strict";
			var o = e("../../../node_modules/react/jsx-runtime.js");
			e("webpack/sharing/consume/default/react/react");
			var a = e("../../../node_modules/prop-types/index.js"),
				t = e.n(a),
				i = e("../../../node_modules/@cloudflare/component-box/es/index.js");
			let l = n => {
				let {
					children: r
				} = n;
				return (0, o.jsx)(i.az, {
					height: 411,
					children: r
				})
			};
			l.propTypes = {
				children: t().node
			}, r.A = l
		},
		"./react/common/components/Kumo/Providers/TooltipProvider.tsx": function(n, r, e) {
			"use strict";
			e.d(r, {
				B: function() {
					return o
				}
			});
			let o = e("../../../node_modules/@base-ui-components/react/esm/tooltip/provider/TooltipProvider.js").B
		},
		"./react/common/components/ModalManager.tsx": function(n, r, e) {
			"use strict";
			e.d(r, {
				hS: function() {
					return m
				},
				k3: function() {
					return u
				},
				Ay: function() {
					return h
				}
			});
			var o = e("../../../node_modules/react/jsx-runtime.js"),
				a = e("webpack/sharing/consume/default/react/react"),
				t = e("webpack/sharing/consume/default/react-redux/react-redux"),
				i = e("../../../node_modules/@cloudflare/kumo/dist/toast-Du4y8qng.js"),
				l = e("./react/common/actions/modalActions.ts"),
				c = e("../../../node_modules/swr/core/dist/index.mjs"),
				s = e("./react/pages/zoneless-workers/utils/swrConfig.ts"),
				d = e("./react/common/selectors/userSelectors.ts");
			let p = a.createContext(null);
			class g extends a.Component {
				render() {
					let {
						modals: n,
						closeModal: r,
						userId: e
					} = this.props;
					return e ? (0, o.jsx)(o.Fragment, {
						children: n.map(n => {
							var e, a;
							let {
								ModalComponent: t,
								props: l = {},
								id: d
							} = n, g = () => {
								"function" == typeof l.onClose && l.onClose(), r(t)
							};
							return (0, o.jsx)(p.Provider, {
								value: {
									closeModal: g
								},
								children: (0, o.jsx)(c.BE, {
									value: s.Ay,
									children: (0, o.jsx)(i.T, {
										children: (0, o.jsx)(t, (e = function(n) {
											for (var r = 1; r < arguments.length; r++) {
												var e = null != arguments[r] ? arguments[r] : {},
													o = Object.keys(e);
												"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
													return Object.getOwnPropertyDescriptor(e, n).enumerable
												}))), o.forEach(function(r) {
													var o;
													o = e[r], r in n ? Object.defineProperty(n, r, {
														value: o,
														enumerable: !0,
														configurable: !0,
														writable: !0
													}) : n[r] = o
												})
											}
											return n
										}({}, l), a = a = {
											isOpen: !0,
											closeModal: g
										}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : (function(n, r) {
											var e = Object.keys(n);
											if (Object.getOwnPropertySymbols) {
												var o = Object.getOwnPropertySymbols(n);
												e.push.apply(e, o)
											}
											return e
										})(Object(a)).forEach(function(n) {
											Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
										}), e))
									})
								})
							}, d)
						})
					}) : null
				}
			}

			function u() {
				let n = a.useContext(p);
				if (!n) throw Error("useModalContext must be used within a ModalContext");
				return n
			}

			function m() {
				let n = (0, t.useDispatch)();
				return {
					openModal: (0, a.useCallback)(function() {
						for (var r = arguments.length, e = Array(r), o = 0; o < r; o++) e[o] = arguments[o];
						return n(l.openModal(...e))
					}, [n]),
					closeModal: (0, a.useCallback)(function() {
						for (var r = arguments.length, e = Array(r), o = 0; o < r; o++) e[o] = arguments[o];
						return n(l.closeModal(...e))
					}, [n])
				}
			}
			var h = (0, t.connect)(n => {
				var r;
				return {
					modals: n.application.modals,
					userId: null == (r = (0, d.wz)(n)) ? void 0 : r.id
				}
			}, l)(g)
		},
		"./react/common/components/Studio/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				o: function() {
					return o
				}
			});
			let o = {
				OPEN: "open data studio"
			}
		},
		"./react/common/components/api-tokens/sparrowEvents.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				JD: function() {
					return l
				},
				LK: function() {
					return c
				},
				eC: function() {
					return i
				}
			});
			var o, a = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				t = e.n(a),
				i = ((o = {}).USER_CREATE_TOKEN = "click user api token create button", o.USER_TEMPLATE_USED = "click user api token template", o.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", o.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", o.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", o.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", o.USER_TOKEN_CREATED = "create user api token", o.ACCOUNT_CREATE_TOKEN = "click account api token create button", o.ACCOUNT_TEMPLATE_USED = "click account api token template", o.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", o.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", o.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", o.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", o.ACCOUNT_TOKEN_CREATED = "create account api token", o);
			let l = n => {
					let {
						name: r,
						additionalData: e = {}
					} = n;
					t().sendEvent(r, function(n) {
						for (var r = 1; r < arguments.length; r++) {
							var e = null != arguments[r] ? arguments[r] : {},
								o = Object.keys(e);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
								return Object.getOwnPropertyDescriptor(e, n).enumerable
							}))), o.forEach(function(r) {
								var o;
								o = e[r], r in n ? Object.defineProperty(n, r, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[r] = o
							})
						}
						return n
					}({}, e || {}))
				},
				c = () => {
					var n;
					return null == (n = Object.values(i)) ? void 0 : n.flat()
				}
		},
		"./react/common/hooks/useDarkMode.ts": function(n, r, e) {
			"use strict";
			var o = e("webpack/sharing/consume/default/react/react"),
				a = e("../../../node_modules/@cloudflare/style-const/es/index.js");
			let t = Object.values(a.JZ);

			function i(n) {
				let r = new MutationObserver(n);
				r.observe(document.documentElement, {
					attributes: !0,
					attributeFilter: ["class"]
				});
				let e = r => {
					if ("dark-mode" !== r.key || !r.newValue || !t.includes(r.newValue)) return;
					let e = r.newValue;
					e !== (0, a.Ad)() && ((0, a.S8)(e, !1), n())
				};
				return window.addEventListener("storage", e), () => {
					r.disconnect(), window.removeEventListener("storage", e)
				}
			}
			r.A = () => (0, o.useSyncExternalStore)(i, a.Ad)
		},
		"./react/common/middleware/sparrow/errors.ts": function(n, r, e) {
			"use strict";

			function o(n, r, e) {
				return r in n ? Object.defineProperty(n, r, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = e, n
			}
			e.d(r, {
				E: function() {
					return a
				},
				WI: function() {
					return t
				},
				nK: function() {
					return i
				}
			});
			class a extends Error {
				constructor(n, r) {
					super(r), o(this, "eventName", void 0), this.eventName = n, this.name = "SparrowValidationError"
				}
			}
			class t extends a {
				constructor(n) {
					super(n, 'Event not allowed: "'.concat(n, '". The event name likely needs to be added to validateDashSchema.ts')), this.name = "SparrowEventNotAllowedError"
				}
			}
			class i extends a {
				constructor(n, r) {
					super(n, 'Found invalid properties on event: "'.concat(n, '"')), o(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = r
				}
			}
		},
		"./react/common/middleware/sparrow/globalEvents/clickEvents.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				G4: function() {
					return c
				},
				dG: function() {
					return d
				},
				e4: function() {
					return s
				},
				hw: function() {
					return l
				}
			});
			var o, a, t = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = e.n(t);
			let l = "user click";
			var c = ((o = {}).NAVIGATION = "navigation", o.CALL_TO_ACTION = "call_to_action", o.DISMISS_CONTENT = "dismiss_content", o),
				s = ((a = {}).ZONE_MARKETING_BANNER = "zone_marketing_banner_click", a.ZONE_MARKETING_BANNER_DISMISS = "zone_marketing_banner_dismiss", a.SSL_MARKETING_BANNER = "ssl_marketing_banner_click", a.SSL_MARKETING_BANNER_DISMISS = "ssl_marketing_banner_dismiss", a.ACCOUNT_MARKETING_BANNER = "account_marketing_banner_click", a.ACCOUNT_MARKETING_BANNER_DISMISS = "account_marketing_banner_dismiss", a.ACCOUNT_ONBOARDING_CTA = "account_onboarding_cta_click", a.ACCOUNT_ONBOARDING_SKIP = "account_onboarding_skip_click", a.ACCOUNT_ONBOARDING_BACK = "account_onboarding_back_click", a.SPEED_OPTIMIZATION_CTA = "speed_optimization_cta_click", a.PLAN_CARD_CTA = "plan_card_cta_click", a.MODAL_DISMISS = "modal_dismiss", a.COMPLETED_WCI_BUILD = "completed_wci_build", a.DNS_PROXY_WARNING_DISMISS = "dns_proxy_warning_dismiss", a.DNS_PROXY_WARNING_TOOLTIP_LINK = "dns_proxy_warning_tooltip_link", a.EDGE_CERTIFICATE_CTA_CLICK = "edge_certificate_cta_click", a);
			let d = n => {
				let {
					interactionType: r,
					clickType: e,
					id: o,
					text: a = "",
					href: t = ""
				} = n;
				i().sendEvent(l, {
					interactionType: r,
					clickType: e,
					id: o,
					text: a,
					href: t
				})
			}
		},
		"./react/common/utils/getEnvironment.ts": function(n, r, e) {
			"use strict";
			var o = e("../../../node_modules/cookie/index.js"),
				a = e("../../common/util/previews/preview-helpers.ts");
			r.A = () => {
				var n, r;
				let e = o.parse(document.cookie)[a.Nt],
					t = null;
				e && (t = (0, a.A)(e));
				let i = "production";
				switch (!0) {
					case (null == t ? void 0 : t.projectType) === "canary":
						i = "canary";
						break;
					case null == (r = window) || null == (n = r.build) ? void 0:
						n.isPreviewDeploy: i = "preview"
				}
				return i
			}
		},
		"./react/common/utils/oidc.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				SJ: function() {
					return i
				},
				nO: function() {
					return l
				},
				xc: function() {
					return c
				}
			});
			var o, a = e("../../../node_modules/@cloudflare/util-cache/es/index.js"),
				t = e("./react/utils/fedramp.ts"),
				i = ((o = {}).Apple = "apple", o.Google = "google", o.GitHub = "github", o);
			let l = (n, r) => {
					let e = new URLSearchParams(window.location.search).get("login_challenge"),
						o = "https://".concat("oidc".concat("", ".iam.cfapi.net"), "/api/v1/sso/init?client=").concat(n, "&env=").concat("production");
					return a.A.set("isLoggingIn", !0), r && (o += "&jwt=".concat(r)), e && (o += "&login_challenge=".concat(encodeURIComponent(e))), o
				},
				c = n => !("KR" === e.g.bootstrap.ip_country || (0, t.W)())
		},
		"./react/pages/abuse-form/constants.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				F: function() {
					return a
				}
			});
			var o, a = ((o = {}).SUBMIT_ABUSE_REPORT_FORM = "clicked submit abuse report button", o.SUBMIT_ABUSE_REPORT_FORM_SUCCESS = "abuse report submitted successfully", o.SUBMIT_ABUSE_REPORT_FORM_FAILURE = "abuse report submission failed", o.OPEN_ABUSE_REPORT_FORM_SIDEMODAL = "clicked abuse report button", o.CLOSE_ABUSE_REPORT_FORM_SIDEMODAL = "closed abuse report form sidemodal", o.CHANGE_ABUSE_REPORT_FORM_TYPE = "changed abuse report form type", o)
		},
		"./react/pages/analytics/eos/resources/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				i: function() {
					return t
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
			var a, t = ((a = {}).view_documentation = "view_documentation", a.open_deeplink = "open_deeplink", a.copy = "copy", a.toggle_expand_row = "toggle_expand_row", a.sort = "sort", a.hide_column = "hide_column", a)
		},
		"./react/pages/blocked-content/events.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				t: function() {
					return a
				}
			});
			var o, a = ((o = {}).COPY_URL = "copy blocked content url", o.REQUEST_REVIEW = "request blocked content review", o.REFERENCE_CLICK = "blocked content reference click", o.ADD_FILTER = "Add filter", o.REMOVE_FILTER = "Remove filter", o)
		},
		"./react/pages/caching/tracking.tsx": function(n, r, e) {
			"use strict";
			e.d(r, {
				r: function() {
					return a
				}
			});
			var o, a = ((o = {}).CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o.CHANGED_ZONE_SETTINGS = "change zone setting", o)
		},
		"./react/pages/cloudforce-one/IncidentServices/resources/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				dI: function() {
					return m
				},
				fB: function() {
					return v
				},
				ke: function() {
					return b
				},
				qG: function() {
					return h
				}
			});
			var o, a, t = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = e.n(t);
			let l = "Emergency Incident",
				c = "Incident Services",
				s = "Submit",
				d = "Success",
				p = "Error";
			var g = ((o = {}).CLICK_GET_HELP = "click emergency incident get help", o.CLICK_EDIT_PHONE = "click emergency incident edit phone", o.CLICK_CONFIRM = "click emergency incident confirm", o.REQUEST_SUCCESS = "emergency incident request success", o.REQUEST_ERROR = "emergency incident request error", o),
				u = ((a = {}).REQUEST_SUBMIT = "submit incident services request", a.REQUEST_SUCCESS = "incident services request success", a.REQUEST_ERROR = "incident services request error", a.FILE_UPLOAD_SUCCESS = "incident services file upload success", a.FILE_UPLOAD_ERROR = "incident services file upload error", a);
			let m = Object.values(g),
				h = Object.values(u),
				v = {
					clickGetHelp: () => {
						i().sendEvent("click emergency incident get help", {
							category: l,
							action: "Click"
						})
					},
					clickEditPhone: () => {
						i().sendEvent("click emergency incident edit phone", {
							category: l,
							action: "Edit"
						})
					},
					clickConfirm: () => {
						i().sendEvent("click emergency incident confirm", {
							category: l,
							action: s
						})
					},
					requestSuccess: () => {
						i().sendEvent("emergency incident request success", {
							category: l,
							action: d
						})
					},
					requestError: n => {
						i().sendEvent("emergency incident request error", {
							category: l,
							action: p,
							errorMessage: n
						})
					}
				},
				b = {
					requestSubmit: n => {
						i().sendEvent("submit incident services request", {
							category: c,
							action: s,
							service: n || "unknown"
						})
					},
					requestSuccess: n => {
						i().sendEvent("incident services request success", {
							category: c,
							action: d,
							service: n || "unknown"
						})
					},
					requestError: (n, r) => {
						i().sendEvent("incident services request error", {
							category: c,
							action: p,
							errorMessage: n,
							service: r || "unknown"
						})
					},
					fileUploadSuccess: n => {
						i().sendEvent("incident services file upload success", {
							category: c,
							action: d,
							service: n || "unknown"
						})
					},
					fileUploadError: (n, r) => {
						i().sendEvent("incident services file upload error", {
							category: c,
							action: p,
							errorMessage: n,
							service: r || "unknown"
						})
					}
				}
		},
		"./react/pages/cloudforce-one/ThreatEvents/events.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				q: function() {
					return o
				}
			});
			let o = {
				ANALYZE_WITH_CLOUDY_BUTTON_CLICKED: "analyze with cloudy button clicked"
			}
		},
		"./react/pages/home/alerts/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				d: function() {
					return a
				}
			});
			var o, a = ((o = {}).SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o)
		},
		"./react/pages/home/audit-log/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				E: function() {
					return a
				},
				H: function() {
					return o
				}
			});
			let o = "audit logs",
				a = {
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
		"./react/pages/home/configurations/dns-settings/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				r: function() {
					return a
				}
			});
			var o, a = ((o = {}).PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o)
		},
		"./react/pages/home/domain-registration/events.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				C: function() {
					return a
				}
			});
			var o, a = ((o = {}).REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", o.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", o.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", o.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", o.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", o.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", o.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", o.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", o.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", o.REGISTER_DOMAIN_CHECKOUT_SUCCESS_CTA = "follow recommendation CTA", o.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", o.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", o.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", o.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", o.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", o.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", o.REGISTER_DOMAIN_UPDATE_UK_REGISTRANT_TYPE = "change uk registrant type", o.TRANSFER_DOMAIN_UPDATE_UK_REGISTRANT_TYPE = "change uk registrant type", o.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", o.TRANSFER_DOMAIN_NAVIGATE_PREVIOUS_STEP = "transfer domain navigate to previous step", o.TRANSFER_DOMAIN_SELECT_DOMAIN = "transfer domain select", o.TRANSFER_DOMAIN_TOGGLE_ALL = "transfer domain toggle all", o.TRANSFER_DOMAIN_SEARCH = "transfer domain search", o.TRANSFER_DOMAIN_VIEW_EMPTY_STATE = "transfer domain view empty state", o.TRANSFER_DOMAIN_VIEW_UNSUPPORTED_DOMAINS = "transfer domain view unsupported domains", o.TRANSFER_DOMAIN_VIEW_SUPPORTED_TLDS = "transfer domain view supported tlds", o.TRANSFER_DOMAIN_ONBOARD_DOMAIN = "transfer domain onboard domain", o.TRANSFER_DOMAIN_VIEW_TABLE = "transfer domain view table", o.TRANSFER_DOMAIN_TOGGLE_TABLE = "transfer domain toggle table", o.TRANSFER_DOMAIN_RECHECK = "transfer domain recheck lock", o.TRANSFER_DOMAIN_ENTER_AUTH_CODE = "transfer domain enter auth code", o.TRANSFER_DOMAIN_REMOVE_DOMAIN = "transfer domain remove domain", o.TRANSFER_DOMAIN_PREMIUM_PRICE_CONFIRM = "transfer domain premium price confirm", o.TRANSFER_DOMAIN_PREMIUM_PRICE_REJECT = "transfer domain premium price reject", o.TRANSFER_DOMAIN_WHOIS_ACKNOWLEDGEMENT = "transfer domain whois acknowledgement", o.TRANSFER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", o.TRANSFER_DOMAIN_SELECT_PAYMENT_METHOD = "transfer domain select payment method", o.TRANSFER_DOMAIN_BILLING_COUNTRY_SELECT = "transfer domain billing country select", o.TRANSFER_DOMAIN_VERIFY_ADDRESS = "transfer domain verify address", o.TRANSFER_DOMAIN_INITIATE_ATTEMPT = "transfer domain initiate attempt", o.TRANSFER_DOMAIN_PURCHASE_COMPLETED = "transfer purchase completed", o.TRANSFER_DOMAIN_PARTIAL_FAILURE = "transfer domain partial failure", o.TRANSFER_DOMAIN_COMPLETE_FAILURE = "transfer domain complete failure", o.TRANSFER_DOMAIN_FAILURE_DETAILS = "transfer domain failure details", o.TRANSFER_DOMAIN_START_OVER = "transfer domain start over", o.TRANSFER_DOMAIN_SUCCESS_CTA_DEPLOY_APP = "transfer domain success cta deploy app", o.TRANSFER_DOMAIN_SUCCESS_CTA_ADD_DOMAINS = "transfer domain success cta add domains", o.TRANSFER_DOMAIN_SUCCESS_CTA_POST_X = "transfer domain success cta post x", o.RENEW_DOMAIN_TOGGLE_SECTION = "toggle domain renewal section", o.RENEW_DOMAIN_SELECT_YEARS = "select domain renewal years", o.RENEW_DOMAIN_CLICK_RENEW = "click renew domain button", o.RENEW_DOMAIN_CLOSE_BILLING_MODAL = "close domain renewal billing modal", o.RENEW_DOMAIN_PURCHASE_CLICK = "click purchase in renewal billing modal", o.RENEW_DOMAIN_COMPLETED = "domain renewal completed", o.RENEW_DOMAIN_CLICK_RENEW_UNIFIED_CHECKOUT = "click renew domain button - unified checkout", o.RENEW_DOMAIN_SELECT_YEARS_UNIFIED_CHECKOUT = "select domain renewal years - unified checkout", o.RENEW_DOMAIN_CLOSE_RENEW_MODAL_UNIFIED_CHECKOUT = "close domain renewal modal - unified checkout", o.RENEW_DOMAIN_CLICK_CONTINUE_TO_CHECKOUT_UNIFIED_CHECKOUT = "click renew domain continue to checkout - unified checkout", o.RENEW_DOMAIN_ORDER_SUCCESS_UNIFIED_CHECKOUT = "domain renewal order success - unified checkout", o.RENEW_DOMAIN_ORDER_TIMEOUT_UNIFIED_CHECKOUT = "domain renewal order timeout - unified checkout", o.RENEW_DOMAIN_ORDER_FAILURE_UNIFIED_CHECKOUT = "domain renewal order failure - unified checkout", o.RESTORE_DOMAIN_INIT = "click to open domain restore modal", o.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", o.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", o.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", o.RESTORE_DOMAIN_FAILURE = "domain restore failed", o.RESTORE_DOMAIN_COMPLETED = "domain restore completed", o.DOMAIN_DELETE_INIT = "click to begin domain delete", o.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", o.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", o.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", o.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", o.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", o.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", o.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", o.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", o.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", o.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", o.DOMAIN_MOVE_START_FLOW = "Start domain move flow", o.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", o.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", o.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", o.DOMAIN_MOVE_SUBMIT = "Submit domain move", o.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", o.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", o.DOMAIN_MOVE_CANCEL = "Domain move cancel", o.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", o.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", o.ACTION_CENTER_NAVIGATE = "Navigate to actions center", o.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", o.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", o.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", o.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS = "domain update canada registrant type completed successfully", o.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR = "domain update canada registrant type failed", o.MANAGE_DOMAIN_UPDATE_UK_REGISTRANT_TYPE_SUCCESS = "domain update uk registrant type completed successfully", o.MANAGE_DOMAIN_UPDATE_UK_REGISTRANT_TYPE_ERROR = "domain update uk registrant type failed", o.TRANSFER_DOMAIN_ZONE_BANNER_VIEW = "transfer domain zone banner view", o.TRANSFER_DOMAIN_ZONE_BANNER_CTA_CLICK = "transfer domain zone banner cta click", o.TRANSFER_DOMAIN_ZONE_BANNER_DISMISS = "transfer domain zone banner dismiss", o.RELATED_DOMAINS_SHOWN = "related domains shown", o.RELATED_DOMAINS_BUY_CLICK = "related domains buy click", o.RELATED_DOMAINS_MODAL_CANCEL = "related domains modal cancel", o.RELATED_DOMAINS_MODAL_CONFIRM = "related domains modal confirm", o)
		},
		"./react/pages/home/members/sparrowEvents.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				$6: function() {
					return i
				},
				m7: function() {
					return l
				},
				sQ: function() {
					return c
				}
			});
			var o, a = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				t = e.n(a),
				i = ((o = {}).MEMBERS_TAB_NAVIGATE = "nagivate members tab", o.ENFORCE_2FA = "members enforce 2fa", o.SSO_SELF_SERVE = "members sso self serve", o.API_ACCESS_ENABLE = "members enable api access", o.MEMBER_API_ACCESS_ENABLE = "member enable api access", o.REMOVE_MEMBER = "members remove", o);
			let l = n => {
					let {
						name: r,
						additionalData: e = {}
					} = n;
					t().sendEvent(r, function(n) {
						for (var r = 1; r < arguments.length; r++) {
							var e = null != arguments[r] ? arguments[r] : {},
								o = Object.keys(e);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
								return Object.getOwnPropertyDescriptor(e, n).enumerable
							}))), o.forEach(function(r) {
								var o;
								o = e[r], r in n ? Object.defineProperty(n, r, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[r] = o
							})
						}
						return n
					}({}, e || {}))
				},
				c = () => {
					var n;
					return null == (n = Object.values(i)) ? void 0 : n.flat()
				}
		},
		"./react/pages/home/members/user-groups/sparrowEvents.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				Ef: function() {
					return c
				},
				j$: function() {
					return i
				},
				kA: function() {
					return l
				}
			});
			var o, a = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				t = e.n(a),
				i = ((o = {}).CREATE_GROUP_BUTTON = "click create user group button", o.GROUP_CREATE = "create user group", o.GROUP_UPDATE = "group name updated", o.CREATE_GROUP_CANCEL = "click cancel create group", o.GROUP_DETAIL = "click view user group details", o.GROUP_EDIT_BUTTON = "click edit user group name button", o.GROUP_EDIT_CANCEL = "click cancel edit user group name", o.GROUP_DELETE_BUTTON = "click group delete button", o.GROUP_UNASSIGN_BUTTON = "click group unassign member button", o.GROUP_DELETE = "delete user group", o.GROUP_DELETE_CANCEL = "click cancel delete group", o.GROUP_SEARCH = "search for user group", o.GROUP_TAB_NAVIGATE = "nagivate group tab", o.GROUP_TABLE_ROW_CLICK = "user group table row click", o.GROUP_TABLE_ROW_MEMBERS_CLICK = "user group table row members click", o.GROUP_TABLE_ROW_POLICIES_CLICK = "user group table row policies click", o.GROUP_TABLE_ROW_SETTINGS_CLICK = "user group table row settings click", o.BACK_BUTTON = "clicked back from user group detail", o.MEMBER_ADD = "add user group member", o.MEMBER_DELETE = "delete user group member", o.POLICY_SAVE = "user group policies save", o.POLICY_DELETE = "user group policies delete", o);
			let l = n => {
					let {
						name: r,
						additionalData: e = {}
					} = n;
					t().sendEvent(r, function(n) {
						for (var r = 1; r < arguments.length; r++) {
							var e = null != arguments[r] ? arguments[r] : {},
								o = Object.keys(e);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
								return Object.getOwnPropertyDescriptor(e, n).enumerable
							}))), o.forEach(function(r) {
								var o;
								o = e[r], r in n ? Object.defineProperty(n, r, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[r] = o
							})
						}
						return n
					}({}, e || {}))
				},
				c = () => {
					var n;
					return null == (n = Object.values(i)) ? void 0 : n.flat()
				}
		},
		"./react/pages/home/rulesets/ddos/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				q: function() {
					return a
				}
			});
			var o, a = ((o = {}).TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o)
		},
		"./react/pages/hyperdrive/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				fb: function() {
					return c
				},
				rM: function() {
					return l
				},
				sx: function() {
					return s
				}
			});
			var o, a, t = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = e.n(t),
				l = ((o = {}).PURCHASE_WORKERS_PAID = "navigate to workers plan page", o.LIST_CONFIGS = "list hyperdrive configs", o.SEARCH_CONFIGS = "search hyperdrive configs", o.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", o.VIEW_CONFIG_DETAILS = "view hyperdrive config details", o.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", o.UPDATE_ORIGIN_CONN_LIM_SETTINGS = "update hyperdrive config origin connection limit settings", o.UPDATE_GENERAL_SETTINGS = "update hyperdrive config general settings", o.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", o.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", o.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", o.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", o.CLICK_QUICK_LINK = "click hyperdrive quick link", o.CLICK_DISCORD = "click hyperdrive discord", o.CLICK_COMMUNITY = "click hyperdrive community", o.CLICK_PLANETSCALE = "click planetscale flow", o.PLANETSCALE_COMPLETED = "planetscale flow completed", o),
				c = ((a = {})[a.success = 0] = "success", a[a.failure = 1] = "failure", a);
			let s = function(n) {
				var r, e;
				let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				i().sendEvent(n, (r = function(n) {
					for (var r = 1; r < arguments.length; r++) {
						var e = null != arguments[r] ? arguments[r] : {},
							o = Object.keys(e);
						"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
							return Object.getOwnPropertyDescriptor(e, n).enumerable
						}))), o.forEach(function(r) {
							var o;
							o = e[r], r in n ? Object.defineProperty(n, r, {
								value: o,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : n[r] = o
						})
					}
					return n
				}({}, o), e = e = {
					category: "Hyperdrive"
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : (function(n, r) {
					var e = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						e.push.apply(e, o)
					}
					return e
				})(Object(e)).forEach(function(n) {
					Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n))
				}), r))
			}
		},
		"./react/pages/internal-dns/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				q8: function() {
					return l
				},
				rM: function() {
					return i
				}
			});
			var o, a = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				t = e.n(a),
				i = ((o = {}).CLICK_GIVE_FEEDBACK = "click give feedback", o.CLICK_NAVIGATION_TAB = "click navigation tab", o.CLICK_CREATE_AN_INTERNAL_ZONE = "click create an internal zone", o.CLICK_SEARCH_BY_ZONE_NAME = "search by zone name", o.CLICK_CREATE_A_VIEW = "click create a view", o.CLICK_SEARCH_BY_RECORD_NAME = "search by record name", o.CLICK_SEARCH_BY_VIEW_NAME = "search by view name", o.CLICK_SAVE_VIEW = "click save view", o.CLICK_SAVE_ZONE = "click save zone", o.CLICK_ZONE_NAME = "click zone name", o.CLICK_ADD_A_RECORD = "click add a record", o.CLICK_ADD_RECORD_SAVE = "click add record save", o.CLICK_RECORD_EDIT = "click record edit", o.CLICK_EDIT_RECORD_SAVE = "click edit record save", o.CLICK_IMPORT_RECORDS = "click import records", o.CLICK_MANAGE_LINKED_VIEWS = "click manage linked views", o.CLICK_SAVE_MANAGE_LINKED_VIEWS = "click save manage linked views", o.CLICK_VIEW_RECORD = "click view record", o);
			let l = function(n) {
				let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				t().sendEvent(n, function(n) {
					for (var r = 1; r < arguments.length; r++) {
						var e = null != arguments[r] ? arguments[r] : {},
							o = Object.keys(e);
						"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
							return Object.getOwnPropertyDescriptor(e, n).enumerable
						}))), o.forEach(function(r) {
							var o;
							o = e[r], r in n ? Object.defineProperty(n, r, {
								value: o,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : n[r] = o
						})
					}
					return n
				}({
					category: "user journey",
					product: "internal-dns"
				}, r))
			}
		},
		"./react/pages/logs/logpush/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				B: function() {
					return a
				},
				Q: function() {
					return o
				}
			});
			let o = "logpush",
				a = {
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
		"./react/pages/magic/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				Rb: function() {
					return a
				},
				TM: function() {
					return i
				},
				k_: function() {
					return t
				},
				vT: function() {
					return o
				}
			});
			let o = "user journey",
				a = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				t = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				i = {
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"./react/pages/network-flow-analytics/constants.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				JZ: function() {
					return b
				},
				MP: function() {
					return m
				},
				Wz: function() {
					return u
				},
				fA: function() {
					return v
				},
				vT: function() {
					return h
				}
			});
			var o = e("../../../node_modules/@cloudflare/util-routes/es/index.js");

			function a(n, r) {
				return r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
					raw: {
						value: Object.freeze(r)
					}
				}))
			}

			function t() {
				let n = a(["/", "/networking-insights/analytics/network-analytics/flow-analytics"]);
				return t = function() {
					return n
				}, n
			}

			function i() {
				let n = a(["/", "/networking-insights/analytics/network-analytics/flow-analytics/packets"]);
				return i = function() {
					return n
				}, n
			}

			function l() {
				let n = a(["/", "/networking-insights/analytics/network-analytics/flow-analytics/configuration"]);
				return l = function() {
					return n
				}, n
			}

			function c() {
				let n = a(["/", "/networking-insights/analytics/network-analytics/flow-analytics/view-configuration"]);
				return c = function() {
					return n
				}, n
			}

			function s() {
				let n = a(["/", "/networking-insights/analytics/network-analytics/flow-analytics/rules"]);
				return s = function() {
					return n
				}, n
			}

			function d() {
				let n = a(["/", "/networking-insights/analytics/network-analytics/flow-analytics/rules/create"]);
				return d = function() {
					return n
				}, n
			}

			function p() {
				let n = a(["/", "/networking-insights/analytics/network-analytics/flow-analytics/rules/edit"]);
				return p = function() {
					return n
				}, n
			}

			function g() {
				let n = a(["/", "/networking-insights/analytics/network-analytics/flow-analytics/onboarding"]);
				return g = function() {
					return n
				}, n
			}
			let u = {
					VIEW_RULES: "view rules list",
					CREATE_RULE: "create rule",
					UPDATE_RULE: "update rule",
					DELETE_RULE: "delete rule",
					VIEW_CONFIGURATION: "view configuration",
					CREATE_CONFIGURATION: "create configuration",
					UPDATE_CONFIGURATION: "update configuration",
					DELETE_CONFIGURATION: "delete configuration"
				},
				m = "Magic network monitoring",
				h = "user journey",
				v = 60,
				b = {
					networkMonitoring: (0, o.wE)(t(), "accountId"),
					networkMonitoringPackets: (0, o.wE)(i(), "accountId"),
					networkMonitoringConfiguration: (0, o.wE)(l(), "accountId"),
					networkMonitoringViewConfiguration: (0, o.wE)(c(), "accountId"),
					networkMonitoringRules: (0, o.wE)(s(), "accountId"),
					networkMonitoringRulesCreateForm: (0, o.wE)(d(), "accountId"),
					networkMonitoringRulesEditForm: (0, o.wE)(p(), "accountId"),
					networkMonitoringOnboarding: (0, o.wE)(g(), "accountId")
				}
		},
		"./react/pages/network-health-insights/packet-captures/constants.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				Rr: function() {
					return o
				},
				vT: function() {
					return t
				},
				xq: function() {
					return a
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
				a = "Magic packet captures",
				t = "user journey"
		},
		"./react/pages/pages/constants.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				BT: function() {
					return m
				},
				CP: function() {
					return v
				},
				Cs: function() {
					return N
				},
				Eu: function() {
					return h
				},
				FF: function() {
					return E
				},
				Ke: function() {
					return f
				},
				Lr: function() {
					return c
				},
				Mw: function() {
					return w
				},
				Nh: function() {
					return g
				},
				R6: function() {
					return b
				},
				UU: function() {
					return T
				},
				_O: function() {
					return S
				},
				bA: function() {
					return O
				},
				ck: function() {
					return k
				},
				eD: function() {
					return u
				},
				f9: function() {
					return s
				},
				l1: function() {
					return R
				},
				m0: function() {
					return I
				},
				m_: function() {
					return l
				},
				rT: function() {
					return C
				},
				t4: function() {
					return _
				},
				tS: function() {
					return x
				},
				td: function() {
					return t
				},
				u$: function() {
					return y
				},
				yR: function() {
					return A
				},
				z2: function() {
					return d
				},
				zl: function() {
					return p
				}
			});
			var o, a = e("./utils/zeroTrust.ts");
			let t = "api.pages.cloudflare.com",
				i = "cloudflare-workers-and-pages",
				l = {
					dns: "https://cloudflare.com/dns",
					access: "https://www.cloudflare.com/teams-access/",
					access_dashboard: (0, a.md)(),
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
				c = "Allow Members - Cloudflare Pages",
				s = 58,
				d = 2e3,
				p = 100,
				g = 350,
				u = 1e7,
				m = ["Success:", "Error:", "Failed:"],
				h = 10,
				v = "_headers",
				b = "_redirects",
				w = "_routes.json",
				k = "_worker.js",
				f = "do-a-barrel-roll",
				x = [v, b, w, k],
				y = 0x1900000,
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
				T = 1e5,
				O = 75e3,
				A = 2e5,
				C = 3e3,
				I = 2250;
			var N = ((o = {})[o.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", o[o.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", o[o.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", o[o.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", o[o.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", o[o.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", o);
			let S = 1,
				R = 2
		},
		"./react/pages/profile/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				FF: function() {
					return i
				},
				Jj: function() {
					return a
				},
				OR: function() {
					return o
				},
				pR: function() {
					return t
				}
			});
			let o = "iam-authentication",
				a = "login",
				t = "profile",
				i = {
					[a]: {
						clickTryOther2FAMethodOrBackupCode: "click try another 2fa method or backup code",
						clickTryRecovery: "click try recovery",
						clickLoginFromMobileApp2fa: "click login on mobile-app/backup code 2fa",
						clickLoginFromEmailMFA: "click login on email mfa"
					},
					[t]: {
						clickRegenerateBackupCodes: "click regenerate backup codes"
					}
				}
		},
		"./react/pages/security-center/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				FT: function() {
					return l
				},
				VG: function() {
					return t
				},
				pr: function() {
					return i
				}
			});
			var o, a, t = ((o = {}).GEOLOCATION_CHANGED = "url scanner geolocation changed", o.LOAD_SCAN_INFO = "load url scan information", o.INITIATE_URL_SCAN = "initiate url scan", o);
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
			var l = ((a = {}).LOAD_THREAT_EVENTS = "load threat events", a.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", a.THREAT_EVENTS_FILTERS = "threat events filters applied", a)
		},
		"./react/pages/security/ai-agent/constants.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				DT: function() {
					return t
				},
				lx: function() {
					return a
				},
				rd: function() {
					return o
				},
				sP: function() {
					return i
				}
			});
			let o = "Hi there, I’m Cloudy! I can help you identify suspicious activity, analyze traffic patterns, and recommend security rule configurations.",
				a = "open cloudy insight",
				t = "set cloudy tool response",
				i = "set cloudy tool error"
		},
		"./react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				FH: function() {
					return p
				},
				JA: function() {
					return s
				},
				Nq: function() {
					return d
				},
				Qt: function() {
					return c
				},
				_1: function() {
					return t
				},
				f_: function() {
					return g
				},
				m4: function() {
					return l
				},
				pE: function() {
					return i
				}
			});
			var o, a = e("./react/pages/security/detections/pages/root/components/new-settings/resources/types.ts");
			let t = {
					[a.SV.WebApplicationExploits]: "settings.tabs.web-application-exploits",
					[a.SV.DdosAttacks]: "settings.tabs.ddos-attacks",
					[a.SV.BotTraffic]: "settings.tabs.bot-traffic",
					[a.SV.ApiAbuse]: "settings.tabs.api-abuse",
					[a.SV.ClientSideAbuse]: "settings.tabs.client-side-abuse",
					[a.SV.DomainSettings]: "settings.filters.domain-settings",
					[a.SV.WebAssetsAndEndpoints]: "settings.filters.web-assets-and-endpoints",
					[a.SV.RuleTemplates]: "settings.filters.rule-templates",
					[a.SV.Detections]: "settings.filters.detections",
					[a.SV.Fraud]: "settings.filters.fraud",
					[a.SV.General]: "settings.filters.general"
				},
				i = {
					[a.SV.WebApplicationExploits]: "security-waf",
					[a.SV.DdosAttacks]: "retarget",
					[a.SV.BotTraffic]: "security-bots",
					[a.SV.ApiAbuse]: "api-security",
					[a.SV.ClientSideAbuse]: "user-multi"
				},
				l = {
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
			var c = ((o = {}).LOAD_SETTINGS = "load setting", o.OPEN_SIDE_MODAL_SETTING = "open side modal setting", o.CLOSE_SIDE_MODAL_SETTING = "close side modal setting", o.CHANGE_SETTING = "change setting", o.FILTER_SETTING = "filter setting", o);
			let s = {
					id: a.ws.ManagedRuleset,
					titleKey: "settings.cards.managed-ruleset.title",
					descriptionKey: "settings.cards.managed-ruleset.description",
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/",
					oldDescription: ["WAF"],
					tabs: [a.SV.WebApplicationExploits, a.SV.DdosAttacks],
					filters: [a.SV.Detections],
					isGeneral: !1
				},
				d = {
					id: a.ws.OwaspCore,
					titleKey: "settings.cards.owasp-core.title",
					descriptionKey: "settings.cards.owasp-core.description",
					oldDescription: ["WAF"],
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/reference/owasp-core-ruleset/",
					tabs: [a.SV.WebApplicationExploits],
					filters: [a.SV.Detections],
					isGeneral: !1
				},
				p = {
					id: a.ws.SuspiciousHints,
					titleKey: "settings.cards.suspicious-hints.title",
					descriptionKey: "settings.cards.suspicious-hints.description",
					oldDescription: ["WAF"],
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/",
					tabs: [a.SV.WebApplicationExploits],
					filters: [a.SV.Detections],
					isGeneral: !1
				},
				g = "".concat("security/settings", "?").concat(a.GZ.Search, "=").concat("Scrape Shield")
		},
		"./react/pages/security/detections/pages/root/components/new-settings/resources/types.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				GZ: function() {
					return l
				},
				SV: function() {
					return i
				},
				ws: function() {
					return c
				}
			});
			var o, a, t, i = ((o = {}).WebApplicationExploits = "web-application-exploits", o.DdosAttacks = "ddos-attacks", o.BotTraffic = "bot-traffic", o.ApiAbuse = "api-abuse", o.ClientSideAbuse = "client-side-abuse", o.DomainSettings = "domain-settings", o.WebAssetsAndEndpoints = "web-assets-and-endpoints", o.RuleTemplates = "rule-templates", o.Detections = "detections", o.Fraud = "fraud", o.General = "general", o),
				l = ((a = {}).Tab = "tabs", a.Filters = "filters", a.Search = "search", a.ID = "id", a),
				c = ((t = {}).OptOut = "opt-out", t.AILabyrinth = "ai-labyrinth", t.BlockAIBots = "block-ai-bots", t.BrowserIntegrity = "browser-check", t.ChallengePassage = "challenge-passage", t.ClientCertificates = "client-certificates", t.CloudflareManagedRuleset = "cloudflare-managed-ruleset", t.CreateDeveloperPortal = "create-developer-portal", t.CustomFallthrough = "custom-fallthrough", t.EndpointDiscovery = "endpoint-discovery", t.FirewallAi = "firewall-ai", t.HttpDdos = "http-ddos", t.IpAccessRules = "ip-access-rules", t.IpLists = "ip-lists", t.JwtValidation = "jwt-validation", t.Labels = "labels", t.LeakedCredentialCheck = "leaked-credential-check", t.MaliciousUploadDetection = "malicious-upload-detection", t.ManagedRuleset = "managed-ruleset", t.Mtls = "mtls", t.NetworkDdos = "network-ddos", t.OwaspCore = "owasp-core", t.RateLimitAuthentication = "rate-limit-authentication", t.ReplaceInsecureJavascript = "replace-insecure-js", t.RobotsTxt = "robots-txt", t.SequenceDetection = "sequence-detection", t.SchemaDiscovery = "schema-discovery", t.SchemaValidation = "schema-validation", t.SecurityLevel = "security-level", t.SecurityTxt = "security-txt", t.SensitiveDataDetection = "sensitive-data-detection", t.SessionIdentifiers = "session-identifiers", t.SslDdos = "ssl-ddos", t.TokenConfigurations = "token-configurations", t.UserAgentBlocking = "user-agent-blocking", t.VolumetricAbuse = "volumetric-abuse", t.ZoneLockdown = "zone-lockdown", t.ContinuousScriptMonitoring = "continuous-script-monitoring", t.BotManagement = "bot-management", t.SuperBotFightMode = "super-bot-fight-mode", t.BotFightMode = "bot-fight-mode", t.ManagedRobotsTxt = "managed-robots-txt", t.SuspiciousHints = "suspicious-hints", t.EmailObfuscation = "email-obfuscation", t.HotlinkProtection = "hotlink-protection", t.UserId = "user-id", t)
		},
		"./react/pages/security/waf/managed-rules/resources/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				Fz: function() {
					return i
				},
				im: function() {
					return t
				}
			});
			var o = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = e.n(o);
			let t = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				i = n => {
					let {
						event: r,
						category: e = "user journey",
						product: o = "waf",
						productName: t = "Managed Rules",
						additionalData: i
					} = n;
					a().sendEvent(r, function(n) {
						for (var r = 1; r < arguments.length; r++) {
							var e = null != arguments[r] ? arguments[r] : {},
								o = Object.keys(e);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
								return Object.getOwnPropertyDescriptor(e, n).enumerable
							}))), o.forEach(function(r) {
								var o;
								o = e[r], r in n ? Object.defineProperty(n, r, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[r] = o
							})
						}
						return n
					}({
						category: e,
						product: o,
						productName: t
					}, i || {}))
				}
		},
		"./react/pages/security/web-assets/resources/endpoints/constants.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				AI: function() {
					return p
				},
				HR: function() {
					return u
				},
				Pk: function() {
					return c
				},
				QO: function() {
					return h
				},
				il: function() {
					return g
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
			var o, a, t, i = e("../../../node_modules/@cloudflare/util-routes/es/index.js");

			function l() {
				var n, r;
				let e = (n = ["/", "/", "/security/analytics"], r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
					raw: {
						value: Object.freeze(r)
					}
				})));
				return l = function() {
					return e
				}, e
			}
			let c = 50,
				s = 10;
			var d = ((o = {}).REPORT_TYPE_BOLA_ENUMERATION = "REPORT_TYPE_BOLA_ENUMERATION", o.REPORT_TYPE_BOLA_POLLUTION = "REPORT_TYPE_BOLA_PARAMETER_POLLUTION", o),
				p = ((a = {}).SEVERITY_HIGH = "SEVERITY_HIGH", a.SEVERITY_MEDIUM = "SEVERITY_MEDIUM", a.SEVERITY_LOW = "SEVERITY_LOW", a.SEVERITY_CRITICAL = "SEVERITY_CRITICAL", a.SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED", a.SEVERITY_INFORMATIONAL = "SEVERITY_INFORMATIONAL", a);
			let g = {
					REPORT_TYPE_BOLA_PARAMETER_POLLUTION: "cf-risk-bola-pollution",
					REPORT_TYPE_BOLA_ENUMERATION: "cf-risk-bola-enumeration"
				},
				u = 10,
				m = (0, i.wE)(l(), "accountId", "zoneName");
			var h = ((t = {}).OPEN_SIDE_MODAL = "open side modal operations", t.REDIRECT_TO_OPERATION_DETAIL = "redirect to operation detection", t.REDIRECT_TO_OPERATIONS_LIST = "redirect to operations", t)
		},
		"./react/pages/shared-config/sparrowEvents.tsx": function(n, r, e) {
			"use strict";
			e.d(r, {
				G: function() {
					return a
				}
			});
			var o, a = ((o = {}).CLICK_MENU_ITEM_SHARE = "click on share item", o.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", o.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", o.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", o.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", o.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", o.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", o.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", o.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", o.CLICK_ON_DELETE_RULESET = "click on delete ruleset", o.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", o)
		},
		"./react/pages/spectrum/tracking.tsx": function(n, r, e) {
			"use strict";
			e.d(r, {
				r: function() {
					return a
				}
			});
			var o, a = ((o = {}).IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o)
		},
		"./react/pages/speed/observatory-tracking.tsx": function(n, r, e) {
			"use strict";
			e.d(r, {
				G: function() {
					return l
				},
				n: function() {
					return i
				}
			});
			var o = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = e.n(o),
				t = e("./react/pages/speed/shared/queryClient.ts");
			let i = {
				VIEW_RECOMMENDATION: "view recommendation",
				OPEN_RECOMMENDATION: "open recommendation",
				ARCHIVE_RECOMMENDATION: "archive recommendation",
				UNARCHIVE_RECOMMENDATION: "unarchive recommendation",
				CLICK_LEARN_MORE_RECOMMENDATION: "click learn more recommendation",
				ACCEPT_RECOMMENDATION: "accept recommendation"
			};

			function l(n, r) {
				var e, o;
				let i = t.q.getQueryData(["rum_status_for_tracking"]);
				a().sendEvent(n, (e = function(n) {
					for (var r = 1; r < arguments.length; r++) {
						var e = null != arguments[r] ? arguments[r] : {},
							o = Object.keys(e);
						"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
							return Object.getOwnPropertyDescriptor(e, n).enumerable
						}))), o.forEach(function(r) {
							var o;
							o = e[r], r in n ? Object.defineProperty(n, r, {
								value: o,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : n[r] = o
						})
					}
					return n
				}({
					category: "observatory"
				}, r), o = o = {
					rum_status: i
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : (function(n, r) {
					var e = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						e.push.apply(e, o)
					}
					return e
				})(Object(o)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(o, n))
				}), e))
			}
		},
		"./react/pages/speed/shared/queryClient.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				q: function() {
					return o
				}
			});
			let o = new(e("../../../node_modules/@tanstack/query-core/build/lib/queryClient.mjs")).E({
				defaultOptions: {
					queries: {
						staleTime: 1e4,
						refetchOnWindowFocus: !1
					}
				}
			})
		},
		"./react/pages/speed/smart-shield/resources/constants.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				AO: function() {
					return _
				},
				Av: function() {
					return b
				},
				BU: function() {
					return m
				},
				GX: function() {
					return T
				},
				Ky: function() {
					return f
				},
				MT: function() {
					return h
				},
				Mb: function() {
					return u
				},
				PA: function() {
					return w
				},
				WK: function() {
					return k
				},
				Z3: function() {
					return y
				},
				ZO: function() {
					return E
				},
				d$: function() {
					return O
				},
				kd: function() {
					return x
				},
				l8: function() {
					return A
				},
				lx: function() {
					return v
				}
			});
			var o, a, t, i, l, c, s, d, p, g = e("./react/pages/speed/smart-shield/utils/types.ts");
			let u = {
				PRODUCT_DOCUMENTATION: "https://developers.cloudflare.com/smart-shield/",
				SMART_TIERED_CACHE: "https://developers.cloudflare.com/smart-shield/configuration/smart-tiered-cache/",
				REGIONAL_TIERED_CACHE: "https://developers.cloudflare.com/smart-shield/configuration/regional-tiered-cache/",
				CACHE_RESERVE: "https://developers.cloudflare.com/smart-shield/configuration/cache-reserve/",
				HEALTH_CHECKS: "https://developers.cloudflare.com/smart-shield/configuration/health-checks/",
				HEALTH_CHECKS_ANALYTICS: "https://developers.cloudflare.com/health-checks/health-checks-analytics/",
				HEALTH_CHECKS_NOTIFICATIONS: "https://developers.cloudflare.com/health-checks/how-to/health-checks-notifications/",
				ARGO_SMART_ROUTING: "https://developers.cloudflare.com/smart-shield/configuration/argo/",
				CONNECTION_REUSE: "https://developers.cloudflare.com/smart-shield/concepts/connection-reuse/"
			};
			var m = ((o = {}).BASIC = "basic", o.ARGO = "argo", o.ADVANCED = "advanced", o),
				h = ((a = {}).CACHE_HITS = "cacheHits", a.REDUCE_COSTS = "reduceCosts", a.ENHANCE_SECURITY = "enhanceSecurity", a);
			let v = "1252px";
			var b = ((t = {}).SMART_TIERED_CACHE = "smartTieredCache", t.CONNECTION_REUSE = "connectionReuse", t.ARGO_SMART_ROUTING = "argoSmartRouting", t.HEALTH_CHECKS = "healthChecks", t.REGIONAL_TIERED_CACHE = "regionalTieredCache", t.CACHE_RESERVE = "cacheReserve", t),
				w = ((i = {}).ENABLE_SMART_SHIELD = "enable-smart-shield", i.ADDITIONAL_CACHING_PREFERENCES = "additional-caching-preferences", i.CONNECTION_REUSE = "connection-reuse", i.TRAFFIC_ROUTING = "traffic-routing", i.REVIEW_AND_FINISH = "review-and-finish", i);
			let k = {
				basic: {
					smartTieredCache: !0,
					connectionReuse: !0,
					healthChecks: !0,
					argoSmartRouting: !1,
					regionalTieredCache: !1,
					cacheReserve: !1
				},
				argo: {
					smartTieredCache: !0,
					connectionReuse: !0,
					healthChecks: !0,
					argoSmartRouting: !0,
					regionalTieredCache: !1,
					cacheReserve: !1
				},
				advanced: {
					smartTieredCache: !0,
					connectionReuse: !0,
					healthChecks: !0,
					argoSmartRouting: !0,
					regionalTieredCache: !0,
					cacheReserve: !0
				}
			};
			var f = ((l = {}).SMART_SHIELD_ARGO_PAYGO = "smart_shield_argo_zone_basic", l.SMART_SHIELD_ARGO_ENT = "smart_shield_argo_ent", l.ADVANCED = "smart_shield_advanced", l);
			let x = [{
				id: "enable-smart-shield",
				entitlements: [g.CN.smartTieredCache]
			}, {
				id: "additional-caching-preferences",
				entitlements: [g.CN.regionalTieredCache, g.CN.cacheReserve]
			}, {
				id: "traffic-routing",
				entitlements: [g.CN.smartRouting, g.CN.connectionReuse]
			}, {
				id: "review-and-finish",
				entitlements: []
			}];
			var y = ((c = {}).LANDING_PAGE_GET_STARTED = "smart shield click get started button on smart shield landing page", c.GET_STARTED_CONTINUE = "smart shield click smart shield get started card continue button", c.EXPLORE_OTHER_PACKAGES = "smart shield click explore other packages", c.ONBOARDING_CONTINUE = "smart shield click smart shield onboarding card continue button", c.ONBOARDING_HEALTH_CHECK = "smart shield click onboarding create origin health check get started button", c.ONBOARDING_MANAGE_SETTINGS = "smart shield click onboarding manage smart shield settings view all button", c.ONBOARDING_OBSERVATORY = "smart shield click onboarding go to observatory button", c.SETTINGS_TOGGLE = "smart shield settings toggle", c.SMART_TIERED_CACHE_TOGGLE = "smart shield smart tiered cache toggle", c.REGIONAL_TIERED_CACHE_TOGGLE = "smart shield regional tiered cache toggle", c.CACHE_RESERVE_TOGGLE = "smart shield cache reserve toggle", c.ARGO_SMART_ROUTING_TOGGLE = "smart shield argo smart routing toggle", c.SMART_TIERED_CACHE_VIEW_DETAILS = "smart shield smart tiered cache view details", c.CACHE_RESERVE_VIEW_DETAILS = "smart shield cache reserve view details", c.CACHE_RESERVE_DELETE_DATA = "smart shield cache reserve delete data", c.UPGRADE_BUTTON_CLICK = "smart shield upgrade button click", c.UPGRADE_MODAL_OPEN = "smart shield upgrade modal open", c.UPGRADE_MODAL_CLOSE = "smart shield upgrade modal close", c.UPGRADE_MODAL_CONTINUE = "smart shield upgrade modal continue", c.DOCUMENTATION_CLICK = "smart shield documentation click", c.HEALTH_CHECKS_MANAGE = "smart shield health checks manage", c.ARGO_DISABLE_CANCEL = "smart shield argo disable cancel", c.SMART_TIERED_CACHE_DISABLE_CONFIRM = "smart shield smart tiered cache disable confirm", c.SMART_TIERED_CACHE_DISABLE_CANCEL = "smart shield smart tiered cache disable cancel", c.TIERED_CACHE_ANALYTICS_LINK = "smart shield tiered cache analytics link", c.CACHE_RESERVE_ANALYTICS_LINK = "smart shield cache reserve analytics link", c.HEALTH_CHECKS_LINK = "smart shield health checks link", c),
				_ = ((s = {}).ONBOARDING_FLOW = "smart shield onboarding flow", s.SETTINGS_PAGE = "smart shield settings page", s.TIERED_CACHE = "caching tiered cache page", s.CACHE_RESERVE = "caching cache reserve page", s.ARGO_SMART_ROUTING = "caching argo smart routing page", s),
				E = ((d = {}).LANDING_PAGE = "smart shield landing page", d.SETTINGS_PAGE = "smart shield settings page", d);
			let T = {
					"enable-smart-shield": "enable smart shield step",
					"additional-caching-preferences": "additional caching preferences step",
					"traffic-routing": "traffic routing step",
					"review-and-finish": "review and finish step"
				},
				O = {
					[g.K2.smartTieredCache]: "smart shield smart tiered cache toggle",
					[g.K2.regionalTieredCache]: "smart shield regional tiered cache toggle",
					[g.K2.cacheReserve]: "smart shield cache reserve toggle",
					[g.K2.smartRouting]: "smart shield argo smart routing toggle"
				};
			var A = ((p = {}).AUTO_OPEN = "openUpgradeModal", p.PACKAGE = "package", p)
		},
		"./react/pages/speed/smart-shield/utils/types.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				CN: function() {
					return g
				},
				K2: function() {
					return p
				},
				_$: function() {
					return s
				},
				gX: function() {
					return c
				},
				iQ: function() {
					return d
				}
			});
			var o, a, t, i, l, c = ((o = {}).CachingAndAvailability = "caching_and_availabilty", o.TrafficAcceleration = "traffic_acceleration", o),
				s = ((a = {}).On = "on", a.Off = "off", a),
				d = ((t = {}).smartTieredCache = "smartTieredCache", t.regionalTieredCache = "regionalTieredCache", t.cacheReserve = "cacheReserve", t.healthChecks = "healthChecks", t.argoSmartRouting = "argoSmartRouting", t.connectionReuse = "connectionReuse", t),
				p = ((i = {}).smartTieredCache = "smart_tiered_cache", i.regionalTieredCache = "regional_tiered_cache", i.cacheReserve = "cache_reserve", i.smartRouting = "smart_routing", i.healthChecks = "healthchecks_count", i),
				g = ((l = {}).smartTieredCache = "smart_tiered_cache", l.regionalTieredCache = "regional_tiered_cache", l.cacheReserve = "cache_reserve", l.smartRouting = "smart_routing", l.healthChecks = "healthchecks_count", l.connectionReuse = "connectionReuse", l)
		},
		"./react/pages/traffic/argo/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				Y: function() {
					return a
				}
			});
			var o, a = ((o = {}).ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o)
		},
		"./react/pages/traffic/load-balancing/account/resources/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				Jq: function() {
					return h
				},
				LU: function() {
					return m
				},
				Of: function() {
					return p
				},
				aX: function() {
					return d
				},
				bD: function() {
					return v
				},
				eX: function() {
					return u
				},
				qN: function() {
					return g
				}
			});
			var o, a, t, i, l, c = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = e.n(c),
				d = ((o = {}).TRY_NEW_DASHBOARD_CTA = "click try new dashboard", o),
				p = ((a = {}).CREATE_BUTTON_CLICK = "click create load balancer", a.TOGGLE_STATUS = "load balancer toggle status", a.REVIEW_PAGE_CLICK = "click load balancer table review link", a.EDIT_CLICK = "click load balancer table edit button", a.DELETE_CLICK = "click load balancer table delete button", a),
				g = ((t = {}).EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", t.EDIT_IP_CLICK = "click edit load balancer IP", t.EDIT_POOLS_CLICK = "click edit load balancer pools", t.EDIT_MONITORS_CLICK = "click edit load balancer monitors", t.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", t.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", t),
				u = ((i = {}).GO_TO_STEP = "click load balancer step", i.BACK_TO_STEP = "click load balancer back to step", i.SAVE = "save load balancer", i.SAVE_AS_DRAFT = "save load balancer as draft", i.SAVE_AND_DEPLOY = "save and deploy load balancer", i.NAVIGATION_CHANGE = "click load balancer wizard navigation link", i.CLICK_PRIVATE_LB_DOCUMENTATION = "click link to private load balancing documentation", i),
				m = ((l = {}).OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", l);
			let h = Object.values({
					MIGRATION: d,
					LOAD_BALANCERS_TABLE: p,
					REVIEW: g,
					WIZARD: u,
					USAGE: m
				}).flatMap(Object.values),
				v = (n, r) => s().sendEvent(n, function(n) {
					for (var r = 1; r < arguments.length; r++) {
						var e = null != arguments[r] ? arguments[r] : {},
							o = Object.keys(e);
						"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
							return Object.getOwnPropertyDescriptor(e, n).enumerable
						}))), o.forEach(function(r) {
							var o;
							o = e[r], r in n ? Object.defineProperty(n, r, {
								value: o,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : n[r] = o
						})
					}
					return n
				}({
					category: "user journey",
					product: "load balancing"
				}, r))
		},
		"./react/pages/traffic/load-balancing/resources/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				M: function() {
					return a
				}
			});
			var o, a = ((o = {}).CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", o.POOL_TABLE = "click on expandable row on pool", o.CREATE_MONITOR_LINK = "click on create a monitor", o.EDIT_MONITOR_LINK = "click on edit a monitor", o.EDIT_MONITOR = "edit monitor", o.CREATE_MONITOR = "create monitor", o.CREATE_POOL_LINK = "click on create a pool", o.EDIT_POOL_LINK = "click on edit a pool", o.EDIT_POOL = "edit pool", o.CREATE_POOL = "create pool", o)
		},
		"./react/pages/traffic/waiting-rooms/tracking.tsx": function(n, r, e) {
			"use strict";
			e.d(r, {
				D: function() {
					return l
				},
				r: function() {
					return i
				}
			});
			var o, a = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				t = e.n(a),
				i = ((o = {}).CREATE = "create waiting room", o.UPDATE = "update waiting room", o.EVENTS = "view waiting rooms events", o.ANALYTICS = "view waiting room analytics", o.GENERATE_PREVIEW = "generate waiting room preview link", o);
			let l = async n => {
				await t().sendEvent(n, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"./react/pages/turnstile/tracking.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				Dn: function() {
					return l
				},
				mP: function() {
					return c
				},
				rM: function() {
					return i
				}
			});
			var o, a = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				t = e.n(a),
				i = ((o = {}).OVERVIEW_PAGE = "view the overview page", o.LIST_OF_WIDGETS = "list of widgets", o.SOLVE_EVENTS = "list solve events", o.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", o.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", o.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", o.OPEN_DELETE_MODAL = "view the delete modal for one widget", o.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", o.DELETE_WIDGET = "delete successfully widgets", o.LIST_OF_HOSTNAMES = "list hostnames", o.OPEN_ADD_WIDGET_PAGE = "view page to add widget", o.FEEDBACK_ADD = "view Feedback Add", o.SAVE_WIDGET = "save widget", o.ROTATE_KEYS = "rotate keys", o.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", o.GET_WIDGETS = "get widget details", o.OPEN_ANALYTICS_PAGE = "view analytics page", o.ANALYTICS_DATA = "list the analytics data", o);
			let l = n => {
					let {
						name: r,
						product: e = "TURNSTILE",
						category: o = "user journey",
						page: a,
						additionalData: i = {}
					} = n;
					t().sendEvent(r, function(n) {
						for (var r = 1; r < arguments.length; r++) {
							var e = null != arguments[r] ? arguments[r] : {},
								o = Object.keys(e);
							"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
								return Object.getOwnPropertyDescriptor(e, n).enumerable
							}))), o.forEach(function(r) {
								var o;
								o = e[r], r in n ? Object.defineProperty(n, r, {
									value: o,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : n[r] = o
							})
						}
						return n
					}({
						category: o,
						page: a,
						product: e
					}, i || {}))
				},
				c = () => {
					var n;
					return null == (n = Object.values(i)) ? void 0 : n.flat()
				}
		},
		"./react/pages/welcome/routes.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				B: function() {
					return b
				}
			});
			var o = e("../../../node_modules/@cloudflare/util-routes/es/index.js");

			function a(n, r) {
				return r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
					raw: {
						value: Object.freeze(r)
					}
				}))
			}

			function t() {
				let n = a(["/", "/"]);
				return t = function() {
					return n
				}, n
			}

			function i() {
				let n = a(["/", "/home/domains"]);
				return i = function() {
					return n
				}, n
			}

			function l() {
				let n = a(["/", "/home/developer-platform"]);
				return l = function() {
					return n
				}, n
			}

			function c() {
				let n = a(["/", "/add-site"]);
				return c = function() {
					return n
				}, n
			}

			function s() {
				let n = a(["/", "/welcome"]);
				return s = function() {
					return n
				}, n
			}

			function d() {
				let n = a(["/", "/websites"]);
				return d = function() {
					return n
				}, n
			}

			function p() {
				let n = a(["/", "/welcome/build"]);
				return p = function() {
					return n
				}, n
			}

			function g() {
				let n = a(["/", "/welcome/protect"]);
				return g = function() {
					return n
				}, n
			}

			function u() {
				let n = a(["/", "/welcome/connect"]);
				return u = function() {
					return n
				}, n
			}

			function m() {
				let n = a(["/", "/welcome/role"]);
				return m = function() {
					return n
				}, n
			}

			function h() {
				let n = a(["/", "/welcome/employee-count"]);
				return h = function() {
					return n
				}, n
			}

			function v() {
				let n = a(["/", "/welcome/use-case"]);
				return v = function() {
					return n
				}, n
			}
			let b = {
				default: (0, o.wE)(t(), "accountId"),
				home: (0, o.wE)(i(), "accountId"),
				develop: (0, o.wE)(l(), "accountId"),
				addSite: (0, o.wE)(c(), "accountId"),
				root: (0, o.wE)(s(), "accountId"),
				websites: (0, o.wE)(d(), "accountId"),
				build: (0, o.wE)(p(), "accountId"),
				protect: (0, o.wE)(g(), "accountId"),
				connect: (0, o.wE)(u(), "accountId"),
				role: (0, o.wE)(m(), "accountId"),
				count: (0, o.wE)(h(), "accountId"),
				useCase: (0, o.wE)(v(), "accountId")
			}
		},
		"./react/shims/focus-visible.js": function() {
			(function() {
				"use strict";
				"undefined" != typeof document && function(n) {
					var r;

					function e() {
						r || (r = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (r = !1, document.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", e, !1))
				}(function() {
					var n = !0,
						r = !1,
						e = null,
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

					function a(n) {
						return !!n && n !== document && "HTML" !== n.nodeName && "BODY" !== n.nodeName && "classList" in n && "contains" in n.classList
					}

					function t(n) {
						"" !== n.getAttribute("is-focus-visible") && n.setAttribute("is-focus-visible", "")
					}

					function i(r) {
						n = !1
					}

					function l() {
						document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c)
					}

					function c(r) {
						"html" !== r.target.nodeName.toLowerCase() && (n = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c))
					}
					document.addEventListener("keydown", function(r) {
						a(document.activeElement) && t(document.activeElement), n = !0
					}, !0), document.addEventListener("mousedown", i, !0), document.addEventListener("pointerdown", i, !0), document.addEventListener("touchstart", i, !0), document.addEventListener("focus", function(r) {
						if (a(r.target)) {
							var e, i, l;
							(n || (i = (e = r.target).type, "INPUT" == (l = e.tagName) && o[i] && !e.readOnly || "TEXTAREA" == l && !e.readOnly || e.isContentEditable || 0)) && t(r.target)
						}
					}, !0), document.addEventListener("blur", function(n) {
						if (a(n.target) && n.target.hasAttribute("is-focus-visible")) {
							var o;
							r = !0, window.clearTimeout(e), e = window.setTimeout(function() {
								r = !1, window.clearTimeout(e)
							}, 100), "" === (o = n.target).getAttribute("is-focus-visible") && o.removeAttribute("is-focus-visible")
						}
					}, !0), document.addEventListener("visibilitychange", function(e) {
						"hidden" == document.visibilityState && (r && (n = !0), l())
					}, !0), l(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				})
			})()
		},
		"./react/utils/cookiePreferences.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				SU: function() {
					return t
				},
				Yj: function() {
					return i
				},
				vM: function() {
					return l
				},
				xE: function() {
					return a
				}
			}), e("../../../node_modules/cookie/index.js");
			let o = () => {
					var n;
					return (null == (n = window) ? void 0 : n.OnetrustActiveGroups) || ""
				},
				a = () => -1 !== (o() || "").indexOf("C0002"),
				t = () => -1 !== (o() || "").indexOf("C0003"),
				i = n => {
					document.cookie = "".concat(n, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=").concat(".cloudflare.com")
				},
				l = () => {
					var n;
					let r = null == (n = window.OneTrust) ? void 0 : n.getGeolocationData();
					return (null == r ? void 0 : r.country) || ""
				}
		},
		"./react/utils/fragments.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				Ru: function() {
					return l
				},
				Wv: function() {
					return g
				},
				mF: function() {
					return d
				}
			});
			var o, a = e("webpack/sharing/consume/default/react/react"),
				t = e("../../../node_modules/cookie/index.js"),
				i = e("../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				l = ((o = {}).FRACTUS_MANAGED_PROFILE = "fractus-managed-profile", o.FRACTUS_CALLS = "fractus-calls", o.FRACTUS_REALTIME = "fractus-realtime", o.FRACTUS_MAGIC_NETWORKING = "magic-networking", o.FRACTUS_NETWORK_ANALYTICS = "fractus-network-analytics", o.FRACTUS_ONE_DASH_CLOUDFLARE_COM = "one-dash-cloudflare-com", o.FRACTUS_QWIK_KV_PAGE = "qwik-kv-page", o.FRACTUS_REMIX_KV_PAGE = "remix-kv-page", o.FRACTUS_PAYMENTS = "fractus-payments", o);
			let c = new Set(Object.values(l)),
				s = "fragment_id",
				d = n => {
					let {
						fragmentId: r,
						path: e,
						domain: o
					} = n;
					document.cookie = "".concat(s, "=").concat(r, "; domain=").concat(o || window.location.hostname, "; path=").concat(e || window.location.pathname, ";")
				},
				p = function() {
					let {
						path: n,
						domain: r
					} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					document.cookie = "".concat(s, "=; domain=").concat(r || window.location.hostname, "; path=").concat(n || window.location.pathname, ";expires=Thu, 01 Jan 1970 00:00:01 GMT;")
				},
				g = () => {
					let n = (0, i.mJ)(),
						r = (0, t.parse)(document.cookie)[s];
					(0, a.useEffect)(() => {
						let e = !!r && c.has(r),
							o = !(null == n ? void 0 : n[r]);
						if (e && o) {
							let n;
							null == (n = document.querySelector('web-fragment-host[fragment-id="'.concat(r, '"]'))) || n.remove(), p()
						}
					}, [n, r])
				}
		},
		"./react/utils/useDomainConnectRedirect.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				Y: function() {
					return c
				},
				x: function() {
					return l
				}
			});
			var o = e("webpack/sharing/consume/default/react/react"),
				a = e("../../../node_modules/@cloudflare/util-cache/es/index.js"),
				t = e("webpack/sharing/consume/default/react-router-dom/react-router-dom?96fd");
			let i = /^\/domainconnect\/v2\/domaintemplates\//i,
				l = "domain-connect-redirect",
				c = () => {
					let n = (0, t.useLocation)();
					(0, o.useEffect)(() => {
						i.test(n.pathname) && a.A.set(l, n, 6e4)
					}, [])
				}
		},
		"./utils/getDashVersion.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				k: function() {
					return t
				},
				n: function() {
					return a
				}
			});
			var o = e("../../../node_modules/cookie/index.js");
			let a = () => {
					var n, r;
					return null == (r = window) || null == (n = r.build) ? void 0 : n.dashVersion
				},
				t = () => {
					var n;
					return void 0 !== ((0, o.parse)(null == (n = document) ? void 0 : n.cookie) || {}).CF_dash_version
				}
		},
		"./utils/initSparrow.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				ls: function() {
					return ro
				},
				Pl: function() {
					return re
				},
				MJ: function() {
					return rt
				},
				_G: function() {
					return ri
				},
				yS: function() {
					return ra
				}
			});
			var o, a, t = e("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = e.n(t),
				l = e("./react/utils/bootstrap.ts"),
				c = e("./react/app/providers/storeContainer.js"),
				s = e("./react/common/selectors/languagePreferenceSelector.ts"),
				d = e("./flags.ts"),
				p = e("../../../node_modules/cookie/index.js"),
				g = e("./react/utils/url.ts"),
				u = e("./react/common/selectors/zoneSelectors.ts"),
				m = e("../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				h = e("../../../node_modules/lodash-es/memoize.js"),
				v = e("../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				b = e("./utils/getDashVersion.ts"),
				w = e("./react/common/selectors/accountSelectors.ts"),
				k = e("./react/common/selectors/entitlementsSelectors.ts"),
				f = e("./react/common/utils/getEnvironment.ts");

			function x(n) {
				for (var r = 1; r < arguments.length; r++) {
					var e = null != arguments[r] ? arguments[r] : {},
						o = Object.keys(e);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), o.forEach(function(r) {
						var o;
						o = e[r], r in n ? Object.defineProperty(n, r, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[r] = o
					})
				}
				return n
			}
			let y = m.eg.exact(m.eg.object({
					_ga: m.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": m.eg.string.optional
				})),
				_ = (0, h.A)(n => {
					try {
						return y.assertDecode((0, p.parse)(n))
					} catch (n) {
						return console.error(n), {}
					}
				}),
				E = n => (r, o, a) => {
					try {
						var t, i, l, s;
						let d = window.location.pathname,
							p = (0, c.KA)().getState(),
							m = _(document.cookie),
							h = x({
								page: (0, g.eD)(a.page || window.location.pathname),
								dashVersion: (0, b.n)(),
								environment: (0, f.A)()
							}, m);
						if ("identify" === r) {
							let l = {
								gates: (0, v.Lv)(p) || {},
								country: null == (i = e.g) || null == (t = i.bootstrap) ? void 0 : t.ip_country
							};
							return n(r, o, x({}, h, l, a))
						} {
							let e = {
								accountId: (0, g.kW)(d),
								zoneName: (0, g.hK)(d),
								domainName: (0, g.AA)(d)
							};
							if ((0, g.Oj)(d)) {
								let n = (0, w.sU)(p);
								e.isEntAccount = !!(null == n || null == (l = n.meta) ? void 0 : l.has_enterprise_zones) || (0, k.WJ)(p)
							}
							if ((0, g.Lu)(d)) {
								let n = (0, u.HD)(p);
								e.zoneId = null == n ? void 0 : n.id, e.plan = null == n || null == (s = n.plan) ? void 0 : s.legacy_id
							}
							return n(r, o, x({}, h, e, a))
						}
					} catch (e) {
						return console.error(e), n(r, o, a)
					}
				},
				T = n => async (r, e, o) => {
					try {
						return await n(r, e, o)
					} catch (n) {
						if (console.error(n), !ra()) throw n;
						return {
							status: "rejected",
							reason: n
						}
					}
				};
			var O = e("./react/app/components/AccountHome/tracking.ts"),
				A = e("./react/app/components/Switchers/sparrowConstants.ts"),
				C = e("./react/common/components/api-tokens/sparrowEvents.ts"),
				I = e("./react/common/components/filter-editor/constants/userJourney.ts"),
				N = e("./react/common/components/filter-editor/triplet-fields/SequencesField/events.ts"),
				S = e("./react/common/hooks/rulesets/resources/tracking.tsx"),
				R = e("./react/common/middleware/sparrow/errors.ts"),
				D = e("./react/common/middleware/sparrow/globalEvents/clickEvents.ts"),
				L = e("./react/pages/abuse-form/constants.ts"),
				M = e("./react/pages/abuse-reports/common/events.ts"),
				P = e("./react/pages/ai-zone/constants.ts"),
				j = e("./react/pages/analytics/eos/resources/tracking.ts"),
				U = e("./react/pages/blocked-content/events.ts"),
				z = e("./react/pages/caching/tracking.tsx"),
				F = e("./react/pages/cloudforce-one/IncidentServices/resources/tracking.ts"),
				G = e("./react/pages/cloudforce-one/ThreatEvents/events.ts"),
				H = e("./react/pages/dns/dns-records/tracking.ts"),
				W = e("./react/pages/home/alerts/tracking.ts"),
				K = e("./react/pages/home/audit-log/tracking.ts"),
				B = e("./react/pages/home/configurations/dns-settings/tracking.ts"),
				V = e("./react/pages/home/configurations/lists/tracking.ts"),
				Y = e("./react/pages/home/domain-registration/events.ts"),
				q = e("./react/pages/home/members/sparrowEvents.ts"),
				Z = e("./react/pages/home/members/user-groups/sparrowEvents.ts"),
				Q = e("./react/pages/home/rulesets/ddos/tracking.ts"),
				X = e("./react/pages/hyperdrive/tracking.ts"),
				J = e("./react/pages/internal-dns/tracking.ts"),
				$ = e("./react/pages/logs/logpush/tracking.ts"),
				nn = e("./react/pages/magic/tracking.ts"),
				nr = e("./react/pages/network-health-insights/packet-captures/constants.ts"),
				ne = e("./react/pages/page-rules/tracking.ts"),
				no = e("./react/pages/pages/constants.ts"),
				na = ((o = {}).LIST_PIPELINES = "list pipelines", o.CREATE_PIPELINE = "create pipeline", o.VIEW_PIPELINE = "view pipeline details", o.DELETE_PIPELINE = "delete pipeline", o.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", o.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", o.CLICK_QUICK_LINK = "click pipeline quick link", o),
				nt = e("./react/pages/profile/tracking.ts"),
				ni = e("./react/pages/secrets-store/resources/events.ts"),
				nl = e("./react/pages/security-center/tracking.ts"),
				nc = e("./react/pages/security/ai-agent/constants.ts"),
				ns = e("./react/pages/security/analytics/resources/events.ts"),
				nd = e("./react/pages/security/analytics/security-analytics/resources/events.ts"),
				np = e("./react/pages/security/api-shield/tracking.ts"),
				ng = e("./react/pages/security/bots/tracking.ts"),
				nu = e("./react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts"),
				nm = e("./react/pages/security/overview/resources/events.ts"),
				nh = e("./react/pages/security/page-shield/resources/events.ts"),
				nv = e("./react/pages/security/resources/constants.tsx"),
				nb = e("./react/pages/security/security-rules/resources/sparrowEvents.ts"),
				nw = e("./react/pages/security/settings/resources/events.ts"),
				nk = e("./react/pages/security/waf/managed-rules/resources/tracking.ts"),
				nf = e("./react/pages/security/web-assets/resources/endpoints/constants.ts"),
				nx = e("./react/pages/shared-config/sparrowEvents.tsx"),
				ny = e("./react/pages/spectrum/tracking.tsx"),
				n_ = e("./react/pages/speed/smart-shield/resources/constants.ts"),
				nE = e("./react/pages/traffic/argo/tracking.ts"),
				nT = e("./react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				nO = e("./react/pages/traffic/load-balancing/resources/tracking.ts"),
				nA = e("./react/pages/traffic/waiting-rooms/tracking.tsx"),
				nC = e("./react/pages/turnstile/tracking.ts"),
				nI = e("./react/pages/zoneless-workers/constants.ts"),
				nN = e("./react/pages/speed/observatory-tracking.tsx"),
				nS = e("./react/common/components/Studio/tracking.ts"),
				nR = e("./react/pages/network-flow-analytics/constants.ts");
			let nD = function(n, r) {
					for (var e = arguments.length, o = Array(e > 2 ? e - 2 : 0), a = 2; a < e; a++) o[a - 2] = arguments[a];
					return m.eg.union([m.eg.literal(n), m.eg.literal(r), ...o.map(n => m.eg.literal(n))])
				}("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "activity analytics widget displayed", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "audit logs widget displayed", "begin deployment log stream", "begin domain registration flow", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "billing widget displayed", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel silence delete", "cancel onboarding flow", "cancel proxy warning continue later", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click ddos feedback form", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click billable usage tab", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click Hide Support AI Page", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "show load balancing pre-activation video", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", ...Object.values(j.j), "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click upload worker assets", "click deploy drag and drop worker", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "chat session closed", "chat agent participant changed", "chat sse connection error", "chat session reconnected", "chat first session initialized", "chat first new session created", "chat first chat closed", "chat first external transfer success", "chat first external end", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm proxy warning go back", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "copy table cell", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Click on DNS Firewall feedback link", "Click on DNS Firewall add Cluster", "Hover on DNS Firewall feedback toast", "Click create DNS firewall cluster", "Click edit DNS firewall cluster", "Click on DNS Firewall edit Cluster button", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete silence", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable notification", "disable page shield", "disable payload logging", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", ...F.dI, ...F.qG, "Enable ACM card click", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "enable notification", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "global nav shortcut clicked", "global nav shortcut pinned", "global nav shortcut unpinned", "global nav survey clicked", "global nav switch", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "italy block free zone impression", "italy block free zone learn more click", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "manage_robots.txt learn more clicked", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "one-tap prompt shown", "one-tap prompt clicked", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open create silence page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open edit silences page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "performance analytics widget displayed", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "print security report", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove zone switcher account filter", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "route to custom error rules", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "security analytics widget displayed", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "select payload logging", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit new support ai feedback", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "total requests graph click", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "uc_virtual_page_view", "uc_view_item_list", "uc_begin_checkout", "uc_cancel_checkout", "uc_exit_checkout", "uc_add_payment_info", "uc_add_billing_info", "uc_payment_process", "uc_payment_success", "uc_payment_failure", "uc_payment_failure_card_detach", "uc_paypal_modal_opened", "uc_paypal_process", "uc_purchase_success", "uc_purchase_failure", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use content signals learn more clicked", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web vitals", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click support ai issue solved feedback", "click support ai raise ticket", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "video show", "video play", "video pause", "video end", "video q1", "video q2", "video q3", "zone switcher filter by starred zones", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message footer action", "toggle templates sidepanel", "redirect to account home", "deprecated page redirect", nN.n.ACCEPT_RECOMMENDATION, nN.n.ARCHIVE_RECOMMENDATION, nN.n.CLICK_LEARN_MORE_RECOMMENDATION, nN.n.OPEN_RECOMMENDATION, nN.n.UNARCHIVE_RECOMMENDATION, nN.n.VIEW_RECOMMENDATION, ...Object.values(O.hA), ...Object.values(P.eH), "clicked sidebar Discord link", "clicked sidebar Community Forum link", nI.FF.clickedDownloadAnalytics, nI.FF.clickedPrintAnalytics, nI.FF.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", nI.FF.addWCITriggerToExistingWorker, nI.FF.updateWCITrigger, nI.FF.deleteWCITrigger, nI.FF.addWCITriggerToNewWorker, nI.FF.createWCIBuildForNewWorker, nI.FF.completedWCIBuildForNewWorker, nI.FF.changedDefaultConfigurations, nI.FF.clickElement, nI.FF.clickNextStep, ...Object.values(nS.o), no.FF.toggledPagesSmartPlacement, no.FF.downloadDemoProject, nI.FF.clickCreateWorkerFromRepoNextStep, nI.FF.clickCreateWorkerFromRepoPreviousStep, nI.FF.clickCreateNewSCMConnection, nI.FF.redirectFromSCMOAuth, nI.FF.clickSubmitError, nI.FF.selectTemplate, nI.FF.clickedListTemplates, nI.FF.clickedImportRepository, nI.FF.clickedClonePublicRepositoryFromUrl, nI.FF.templateStubWorkerCreated, nI.FF.templateStubWorkerCreationFailed, nI.FF.templateRepositoryCreated, nI.FF.templateRepositoryCreationFailed, nI.FF.copyTemplateC3Command, nI.FF.templateDeployClick, nI.FF.reauthenticateGithubModalShown, nI.FF.updateGithubPermissionsClicked, nI.FF.D2W_importRepository, nI.FF.D2W_stubWorkerCreated, nI.FF.D2W_stubWorkerCreationFailed, nI.FF.D2W_repositoryCreated, nI.FF.D2W_repositoryCreationFailed, nI.FF.D2W_resourcesProvisioned, nI.FF.D2W_resourceProvisioningFailed, nI.FF.D2W_githubAPIRateLimitReached, nI.FF.createResource, nI.FF.deleteResource, nI.FF.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", ng.rM.INITIAL_FETCH_SCORES, ng.rM.FETCH_CONFIGURATION, ng.rM.INITIAL_FETCH_TIME_SERIES, ng.rM.INITIAL_FETCH_ATTRIBUTES, ng.rM.UPDATE_SETTINGS, ng.rM.DELETE_RULE, ng.rM.UPDATE_RULE, ng.rM.FETCH_RULES, ng.rM.CONFIGURE_BOT_MANAGEMENT, ng.rM.WAF_RULES_REDIRECT, nc.lx, nc.sP, nc.DT, G.q.ANALYZE_WITH_CLOUDY_BUTTON_CLICKED, Q.q.TOGGLE_TCP_PROTECTION, Q.q.GET_TCP_PROTECTION_PREFIXES, Q.q.CREATE_TCP_PROTECTION_PREFIXES, Q.q.CREATE_TCP_PROTECTION_PREFIX, Q.q.UPDATE_TCP_PROTECTION_PREFIX, Q.q.DELETE_TCP_PROTECTION_PREFIX, Q.q.DELETE_TCP_PROTECTION_PREFIXES, Q.q.GET_TCP_PROTECTION_ALLOWLIST, Q.q.CREATE_TCP_PROTECTION_ALLOWLIST, Q.q.UPDATE_TCP_PROTECTION_ALLOWLIST, Q.q.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, Q.q.DELETE_TCP_PROTECTION_ALLOWLIST, Q.q.GET_SYN_PROTECTION_RULES, Q.q.GET_SYN_PROTECTION_RULE, Q.q.CREATE_SYN_PROTECTION_RULE, Q.q.UPDATE_SYN_PROTECTION_RULE, Q.q.DELETE_SYN_PROTECTION_RULE, Q.q.GET_TCP_FLOW_PROTECTION_RULES, Q.q.GET_TCP_FLOW_PROTECTION_RULE, Q.q.CREATE_TCP_FLOW_PROTECTION_RULE, Q.q.UPDATE_TCP_FLOW_PROTECTION_RULE, Q.q.DELETE_TCP_FLOW_PROTECTION_RULE, Q.q.GET_SYN_PROTECTION_FILTERS, Q.q.GET_SYN_PROTECTION_FILTER, Q.q.CREATE_SYN_PROTECTION_FILTER, Q.q.UPDATE_SYN_PROTECTION_FILTER, Q.q.DELETE_SYN_PROTECTION_FILTER, Q.q.GET_TCP_FLOW_PROTECTION_FILTERS, Q.q.GET_TCP_FLOW_PROTECTION_FILTER, Q.q.CREATE_TCP_FLOW_PROTECTION_FILTER, Q.q.UPDATE_TCP_FLOW_PROTECTION_FILTER, Q.q.DELETE_TCP_FLOW_PROTECTION_FILTER, Q.q.GET_DNS_PROTECTION_RULES, Q.q.GET_DNS_PROTECTION_RULE, Q.q.CREATE_DNS_PROTECTION_RULE, Q.q.UPDATE_DNS_PROTECTION_RULE, Q.q.DELETE_DNS_PROTECTION_RULE, nh.m.MANAGE_PAGE_SHIELD_POLICY, nh.m.CONFIGURE_PAGE_SHIELD, nh.m.VIEW_DETECTED_CONNECTIONS, nh.m.VIEW_DETECTED_SCRIPTS, nh.m.VIEW_PAGE_SHIELD_POLICIES, nh.m.VIEW_PAGE_SHIELD_SETTINGS, nh.m.OPEN_MUTABLE_VERSION_TOOLTIP, nh.m.SHOW_MUTABLE_VERSION_TOOLTIP, V.K.CREATE_LIST, V.K.DELETE_LIST, V.K.ADD_LIST_ITEM, V.K.DELETE_LIST_ITEM, X.rM.PURCHASE_WORKERS_PAID, X.rM.LIST_CONFIGS, X.rM.SEARCH_CONFIGS, X.rM.CREATE_HYPERDRIVE_CONFIG, X.rM.VIEW_CONFIG_DETAILS, X.rM.UPDATE_CACHING_SETTINGS, X.rM.UPDATE_ORIGIN_CONN_LIM_SETTINGS, X.rM.DELETE_HYPERDRIVE_CONFIG, X.rM.CLICK_HYPERDRIVE_DOCUMENTATION, X.rM.CLICK_GET_STARTED_GUIDE, X.rM.CLICK_CONNECTIVITY_GUIDES, X.rM.CLICK_QUICK_LINK, X.rM.CLICK_DISCORD, X.rM.CLICK_COMMUNITY, X.rM.CLICK_PLANETSCALE, X.rM.PLANETSCALE_COMPLETED, ny.r.CNAME, ny.r.IP_ADDRESS, ny.r.LB, ny.r.UPDATE_CNAME, ny.r.UPDATE_IP_ADDRESS, ny.r.UPDATE_LB, ny.r.DISABLE, z.r.TIERED_CACHE, z.r.CACHE_PURGE, z.r.CACHE_ANALYTICS, ...(0, nC.mP)(), ...(0, S.jS)(), ...(0, nw.ub)(), ...(0, q.sQ)(), ...(0, Z.Ef)(), ...(0, C.LK)(), nA.r.CREATE, nA.r.EVENTS, nA.r.ANALYTICS, nA.r.UPDATE, nA.r.GENERATE_PREVIEW, nl.VG.INITIATE_URL_SCAN, nl.VG.LOAD_SCAN_INFO, nl.VG.GEOLOCATION_CHANGED, nl.FT.LOAD_THREAT_EVENTS, nl.FT.THREAT_EVENT_MORE_DETAILS_CLICK, nl.FT.THREAT_EVENTS_FILTERS, nl.pr.EXPAND_INSIGHT_ROW, nl.pr.ONE_CLICK_RESOLVE_BUTTON, nl.pr.FOLLOW_RESOLVE_URL, nl.pr.MANAGE_INSIGHT, nl.pr.CLICK_SCAN_NOW, nl.pr.CLICK_EXPORT_INSIGHTS, nl.pr.BULK_ARCHIVE, nl.pr.CLICK_DETAILS_BUTTON, np.xz[np.cu.ENDPOINT_MANAGEMENT].listOfEndpoints, np.xz[np.cu.ENDPOINT_MANAGEMENT].detailedMetrics, np.xz[np.cu.ENDPOINT_MANAGEMENT].createEndpoint, np.xz[np.cu.ENDPOINT_MANAGEMENT].deleteEndpoint, np.xz[np.cu.ENDPOINT_MANAGEMENT].deployRouting, np.xz[np.cu.ENDPOINT_MANAGEMENT].deleteRouting, np.xz[np.cu.API_DISCOVERY].viewDiscoveredEndpoints, np.xz[np.cu.API_DISCOVERY].saveDiscoveredEndpoint, np.xz[np.cu.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, np.xz[np.cu.SCHEMA_VALIDATION].viewSchemasList, np.xz[np.cu.SCHEMA_VALIDATION].uploadSchema, np.xz[np.cu.SCHEMA_VALIDATION].viewSchemaAdoption, np.xz[np.cu.SCHEMA_VALIDATION].downloadSchema, np.xz[np.cu.SCHEMA_VALIDATION].deleteSchema, np.xz[np.cu.SCHEMA_VALIDATION].addLearnedSchemaByHostname, np.xz[np.cu.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, np.xz[np.cu.SEQUENCE_ANALYTICS].viewSequencesPage, np.xz[np.cu.JWT_VALIDATION].viewJWTRules, np.xz[np.cu.JWT_VALIDATION].addJWTRule, np.xz[np.cu.JWT_VALIDATION].editJWTRule, np.xz[np.cu.JWT_VALIDATION].deleteJWTRule, np.xz[np.cu.JWT_VALIDATION].reprioritizeJWTRule, np.xz[np.cu.JWT_VALIDATION].viewJWTConfigs, np.xz[np.cu.JWT_VALIDATION].addJWTConfig, np.xz[np.cu.JWT_VALIDATION].editJWTConfig, np.xz[np.cu.JWT_VALIDATION].deleteJWTConfig, np.xz[np.cu.SETTINGS].redirectToFirewallRulesTemplate, np.xz[np.cu.SETTINGS].redirectToPages, np.xz[np.cu.SETTINGS].listSessionIdentifiers, np.xz[np.cu.SETTINGS].listRequestsContainingSessionIdentifiers, np.xz[np.cu.SETTINGS].addOrRemoveSessionIdentifiers, np.xz[np.cu.SETTINGS].redirectToCustomRules, np.xz[np.cu.SETTINGS].listAllFallthroughSchemas, np.xz[np.cu.SEQUENCE_RULES].listSequenceRules, np.xz[np.cu.SEQUENCE_RULES].deleteSequenceRule, np.xz[np.cu.SEQUENCE_RULES].reorderSequenceRule, np.xz[np.cu.SEQUENCE_RULES].createSequenceRule, np.xz[np.cu.SEQUENCE_RULES].editSequenceRule, ns.F.LOAD_INSIGHTS, ns.F.LOAD_INSIGHTS_LIST, K.E.TOGGLE_V2, K.E.FILTER, K.E.FILTER_COUNTS, K.E.FEEDBACK, K.E.API_LATENCY, K.E.CONTAINER_V2_RENDERED, K.E.CONTAINER_RENDERED, $.B.HEALTH_JOB_SELECTED, $.B.HEALTH_METRIC_SELECTED, $.B.HEALTH_TIME_RANGE_SELECTED, $.B.HEALTH_TIMEZONE_CHANGED, $.B.HEALTH_SECTION_CHANGED, $.B.VIEW_HEALTH_BUTTON_CLICKED, $.B.VIEW_HEALTH_MENU_CLICKED, $.B.JOBS_SEARCHED, $.B.GRAPHQL_EXPLORER_OPENED, nO.M.ANALYTICS, nO.M.CREATE_AND_DEPLOY, nO.M.CREATE_MONITOR_LINK, nO.M.CREATE_MONITOR, nO.M.CREATE_POOL_LINK, nO.M.CREATE_POOL, nO.M.EDIT_MONITOR, nO.M.EDIT_POOL, nO.M.LOAD_BALANCING_TABLE, nO.M.POOL_TABLE, nO.M.EDIT_MONITOR_LINK, nO.M.EDIT_POOL_LINK, ...nT.Jq, "click load balancing video", W.d.SECONDARY_DNS_NOTIFICATION_CREATE, W.d.SECONDARY_DNS_NOTIFICATION_UPDATE, W.d.SECONDARY_DNS_NOTIFICATION_DELETE, H.Y6.ZONE_TRANSFER_SUCCESS, H.Y6.DNS_RECORD_CREATE, H.Y6.DNS_RECORD_UPDATE, H.Y6.DNS_RECORD_DELETE, B.r.PEER_DNS_CREATE, B.r.PEER_DNS_UPDATE, B.r.PEER_DNS_DELETE, B.r.ZONE_TRANSFER_ENABLE, B.r.ZONE_TRANSFER_DISABLE, nE.Y.ARGO_ENABLEMENT, nE.Y.ARGO_GEO_ANALYTICS_FETCH, nE.Y.ARGO_GLOBAL_ANALYTICS_FETCH, nr.Rr.VIEW_BUCKETS_LIST, nr.Rr.CREATE_BUCKET, nr.Rr.VALIDATE_BUCKET, nr.Rr.DELETE_BUCKET, nr.Rr.VIEW_CAPTURES_LIST, nr.Rr.CREATE_SIMPLE_CAPTURE, nr.Rr.CREATE_FULL_CAPTURE, nr.Rr.VIEW_FULL_CAPTURE, nr.Rr.DOWNLOAD_SIMPLE_CAPTURE, nR.Wz.VIEW_RULES, nR.Wz.CREATE_RULE, nR.Wz.UPDATE_RULE, nR.Wz.DELETE_RULE, nR.Wz.VIEW_CONFIGURATION, nR.Wz.CREATE_CONFIGURATION, nR.Wz.UPDATE_CONFIGURATION, nR.Wz.DELETE_CONFIGURATION, nn.Rb.VIEW_ALERTS, nn.Rb.VIEW_ALERTS_HISTORY, nn.Rb.MAGIC_OVERVIEW_ANALYTICS, nn.k_.CREATE_SITE, nn.k_.CREATE_TUNNEL, nn.k_.CREATE_STATIC_ROUTE, nd.a.CLICK_ADAPTIVE_SAMPLING, nd.a.CLICK_TO_LOG_EXPLORER_BANNER, nd.a.CLICK_TO_LOG_EXPLORER_DESCRIPTION, nd.a.CLICK_SWITCH_TO_RAW_LOGS, nd.a.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", A.D.SPARROW_ZONE_OVERFLOW_MENU_CLICK_NAME, A.D.SPARROW_ZONE_OVERFLOW_ACTION_CLICK_NAME, A.D.SPARROW_SWITCHER_MENU_CLICK_NAME, A.D.SPARROW_SWITCHER_MENU_OPEN, A.D.SPARROW_GO_TO_ALL_ACCOUNTS_CLICK_NAME, A.D.SPARROW_GO_TO_ALL_DOMAINS_CLICK_NAME, Y.C.ACTION_CENTER_DOMAIN_MOVE_DECISION, Y.C.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, Y.C.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, Y.C.ACTION_CENTER_NAVIGATE, Y.C.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, Y.C.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, Y.C.DOMAIN_DELETE_CLOSE_WARNING_MODAL, Y.C.DOMAIN_DELETE_COMPLETED, Y.C.DOMAIN_DELETE_CONFIRM_DELETE, Y.C.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, Y.C.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, Y.C.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, Y.C.DOMAIN_DELETE_INIT, Y.C.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, Y.C.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, Y.C.DOMAIN_MOVE_CANCEL, Y.C.DOMAIN_MOVE_CANCEL_ERROR, Y.C.DOMAIN_MOVE_CANCEL_SUCCESS, Y.C.DOMAIN_MOVE_CLOSE_FLOW, Y.C.DOMAIN_MOVE_INITIATE_ERROR, Y.C.DOMAIN_MOVE_INITIATE_SUCCESS, Y.C.DOMAIN_MOVE_OPEN_DOCS, Y.C.DOMAIN_MOVE_PROGRESS_FLOW, Y.C.DOMAIN_MOVE_START_FLOW, Y.C.DOMAIN_MOVE_SUBMIT, Y.C.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR, Y.C.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS, Y.C.MANAGE_DOMAIN_UPDATE_UK_REGISTRANT_TYPE_ERROR, Y.C.MANAGE_DOMAIN_UPDATE_UK_REGISTRANT_TYPE_SUCCESS, Y.C.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, Y.C.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, Y.C.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, Y.C.REGISTER_DOMAIN_CHECKOUT_ERROR, Y.C.REGISTER_DOMAIN_CHECKOUT_PURCHASE, Y.C.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, Y.C.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, Y.C.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, Y.C.REGISTER_DOMAIN_CHECKOUT_SUCCESS_CTA, Y.C.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, Y.C.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, Y.C.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, Y.C.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, Y.C.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, Y.C.REGISTER_DOMAIN_SEARCH_SUBMIT, Y.C.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, Y.C.REGISTER_DOMAIN_UPDATE_UK_REGISTRANT_TYPE, Y.C.RENEW_DOMAIN_TOGGLE_SECTION, Y.C.RENEW_DOMAIN_SELECT_YEARS, Y.C.RENEW_DOMAIN_CLICK_RENEW, Y.C.RENEW_DOMAIN_CLOSE_BILLING_MODAL, Y.C.RENEW_DOMAIN_PURCHASE_CLICK, Y.C.RENEW_DOMAIN_COMPLETED, Y.C.RENEW_DOMAIN_CLICK_RENEW_UNIFIED_CHECKOUT, Y.C.RENEW_DOMAIN_SELECT_YEARS_UNIFIED_CHECKOUT, Y.C.RENEW_DOMAIN_CLOSE_RENEW_MODAL_UNIFIED_CHECKOUT, Y.C.RELATED_DOMAINS_BUY_CLICK, Y.C.RELATED_DOMAINS_MODAL_CANCEL, Y.C.RELATED_DOMAINS_MODAL_CONFIRM, Y.C.RELATED_DOMAINS_SHOWN, Y.C.RENEW_DOMAIN_CLICK_CONTINUE_TO_CHECKOUT_UNIFIED_CHECKOUT, Y.C.RENEW_DOMAIN_ORDER_SUCCESS_UNIFIED_CHECKOUT, Y.C.RENEW_DOMAIN_ORDER_TIMEOUT_UNIFIED_CHECKOUT, Y.C.RENEW_DOMAIN_ORDER_FAILURE_UNIFIED_CHECKOUT, Y.C.RENEW_DOMAIN_CLICK_RENEW, Y.C.RENEW_DOMAIN_CLICK_RENEW_UNIFIED_CHECKOUT, Y.C.RENEW_DOMAIN_CLOSE_BILLING_MODAL, Y.C.RENEW_DOMAIN_CLOSE_RENEW_MODAL_UNIFIED_CHECKOUT, Y.C.RENEW_DOMAIN_COMPLETED, Y.C.RENEW_DOMAIN_PURCHASE_CLICK, Y.C.RENEW_DOMAIN_SELECT_YEARS, Y.C.RENEW_DOMAIN_SELECT_YEARS_UNIFIED_CHECKOUT, Y.C.RENEW_DOMAIN_TOGGLE_SECTION, Y.C.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, Y.C.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, Y.C.RESTORE_DOMAIN_COMPLETED, Y.C.RESTORE_DOMAIN_FAILURE, Y.C.RESTORE_DOMAIN_INIT, Y.C.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, Y.C.TRANSFER_DOMAIN_BILLING_COUNTRY_SELECT, Y.C.TRANSFER_DOMAIN_CHANGE_STEP, Y.C.TRANSFER_DOMAIN_COMPLETE_FAILURE, Y.C.TRANSFER_DOMAIN_ENTER_AUTH_CODE, Y.C.TRANSFER_DOMAIN_FAILURE_DETAILS, Y.C.TRANSFER_DOMAIN_INITIATE_ATTEMPT, Y.C.TRANSFER_DOMAIN_NAVIGATE_PREVIOUS_STEP, Y.C.TRANSFER_DOMAIN_ONBOARD_DOMAIN, Y.C.TRANSFER_DOMAIN_PARTIAL_FAILURE, Y.C.TRANSFER_DOMAIN_PREMIUM_PRICE_CONFIRM, Y.C.TRANSFER_DOMAIN_PREMIUM_PRICE_REJECT, Y.C.TRANSFER_DOMAIN_PURCHASE_COMPLETED, Y.C.TRANSFER_DOMAIN_REMOVE_DOMAIN, Y.C.TRANSFER_DOMAIN_SEARCH, Y.C.TRANSFER_DOMAIN_SELECT_DOMAIN, Y.C.TRANSFER_DOMAIN_SELECT_PAYMENT_METHOD, Y.C.TRANSFER_DOMAIN_START_OVER, Y.C.TRANSFER_DOMAIN_SUCCESS_CTA_ADD_DOMAINS, Y.C.TRANSFER_DOMAIN_SUCCESS_CTA_DEPLOY_APP, Y.C.TRANSFER_DOMAIN_SUCCESS_CTA_POST_X, Y.C.TRANSFER_DOMAIN_TOGGLE_ALL, Y.C.TRANSFER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, Y.C.TRANSFER_DOMAIN_UPDATE_UK_REGISTRANT_TYPE, Y.C.TRANSFER_DOMAIN_VERIFY_ADDRESS, Y.C.TRANSFER_DOMAIN_VIEW_EMPTY_STATE, Y.C.TRANSFER_DOMAIN_VIEW_TABLE, Y.C.TRANSFER_DOMAIN_TOGGLE_TABLE, Y.C.TRANSFER_DOMAIN_VIEW_SUPPORTED_TLDS, Y.C.TRANSFER_DOMAIN_VIEW_UNSUPPORTED_DOMAINS, Y.C.TRANSFER_DOMAIN_RECHECK, Y.C.TRANSFER_DOMAIN_WHOIS_ACKNOWLEDGEMENT, Y.C.TRANSFER_DOMAIN_ZONE_BANNER_CTA_CLICK, Y.C.TRANSFER_DOMAIN_ZONE_BANNER_DISMISS, Y.C.TRANSFER_DOMAIN_ZONE_BANNER_VIEW, ni.u.CREATE_SECRET, ni.u.DELETE_SECRET, ni.u.BIND_SECRET, ni.u.DUPLICATE_SECRET, ni.u.EDIT_SECRET, na.CLICK_GET_STARTED_GUIDE, na.CLICK_PIPELINE_DOCUMENTATION, na.CLICK_QUICK_LINK, na.CREATE_PIPELINE, na.DELETE_PIPELINE, na.LIST_PIPELINES, na.VIEW_PIPELINE, "add domain", "register domain", "add waf ruleset", "add workers", "add pages", "add r2 storage", "add account members", ne.c.TEMPLATE_PRODUCT_SELECTED, ne.c.TEMPLATE_SELECTED, ne.c.TEMPLATE_SAVE_DRAFT, ne.c.TEMPLATE_CANCEL, ne.c.TEMPLATE_DEPLOY, nx.G.CLICK_GO_BACK_SHARE_MODAL, nx.G.CLICK_MENU_ITEM_SHARE, nx.G.CLICK_ON_CANCEL_SHARE_MODAL, nx.G.CLICK_ON_CLOSE_SHARE_MODAL, nx.G.CLICK_ON_CONFIGURE_SHARE_BUTTON, nx.G.CLICK_ON_DELETE_RULESET, nx.G.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, nx.G.CLICK_ON_EDIT_SHARE_PERMISSION, nx.G.CLICK_ON_GO_TO_SOURCE_ACCOUNT, nx.G.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, nx.G.CLICK_ON_SHARE_TABLE_ROW, nv.eQ.CLICK_GEOGRAPHICAL_TEMPLATE, nv.eQ.CLICK_IP_TEMPLATE, nv.eQ.CLICK_USER_AGENT_TEMPLATE, nv.eQ.CLICK_ZONE_LOCKDOWN_TEMPLATE, nw.LR.CREATED, nw.LR.ENABLED, nw.LR.DISABLED, nw.LR.DELETED, nw.LR.UPDATED, nw.LR.DOWNLOADED, U.t.REQUEST_REVIEW, U.t.COPY_URL, U.t.REFERENCE_CLICK, I.T.FIELD, I.T.OPERATOR, nk.im.SHOW_LCC_MIGRATION_BANNER, nk.im.CLICK_LCC_DOCUMENTATION, nk.im.CLICK_LCC_UPGRADE_GUIDE, nk.im.SHOW_LCC_MIGRATION_WARNING, nb.mY.CLICK_DISMISS_INELIGIBILITY, nb.mY.CLICK_NEXT_STEP, nb.mY.CLICK_OPT_IN, nb.mY.CLICK_OPT_IN_BUTTON, nb.mY.CLICK_OPT_OUT_BUTTON, nb.mY.DISPLAY_MODAL, nb.mY.DISPLAY_OPT_OUT_MODAL, nb.mY.DISPLAY_TOOLTIP_NOT_AVAILABLE, nb.mY.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, nb.mY.DEFAULT_ALL_INIT, nb.mY.DEFAULT_ALL_OPT_OUT, nb.mY.DEFAULT_ALL_REENABLES, nb.mY.NEW_DASHBOARD_EXPERIENCE, nb.mY.NEW_DASHBOARD_VIDEO, nb.mY.DEFAULT_ALL_MODAL, nb.mY.DEFAULT_ALL_CONFIRM, nb.mY.DISPLAY_STEPS_BY_MODAL, nb.mY.REDIRECT_SETTINGS_BANNER, nm.a.LOAD_INSIGHTS, nm.a.OPEN_SIDE_MODAL_INSIGHT, nm.a.CLOSE_SIDE_MODAL_INSIGHT, nm.a.CLICK_ACTION_INSIGHT, nm.a.LOAD_INSIGHTS_LIST, nm.a.SURVEY_OPENED, nm.a.CLICK_OVERVIEW_CHANGELOG, ns.F.LOAD_INSIGHTS, ns.F.LOAD_INSIGHTS_LIST, nf.QO.OPEN_SIDE_MODAL, nf.QO.REDIRECT_TO_OPERATION_DETAIL, nf.QO.REDIRECT_TO_OPERATIONS_LIST, nu.Qt.CHANGE_SETTING, nu.Qt.LOAD_SETTINGS, nu.Qt.OPEN_SIDE_MODAL_SETTING, nu.Qt.CLOSE_SIDE_MODAL_SETTING, nu.Qt.FILTER_SETTING, n_.Z3.LANDING_PAGE_GET_STARTED, n_.Z3.GET_STARTED_CONTINUE, n_.Z3.EXPLORE_OTHER_PACKAGES, n_.Z3.ONBOARDING_CONTINUE, n_.Z3.ONBOARDING_HEALTH_CHECK, n_.Z3.ONBOARDING_MANAGE_SETTINGS, n_.Z3.ONBOARDING_OBSERVATORY, n_.Z3.SETTINGS_TOGGLE, n_.Z3.SMART_TIERED_CACHE_VIEW_DETAILS, n_.Z3.CACHE_RESERVE_VIEW_DETAILS, n_.Z3.CACHE_RESERVE_DELETE_DATA, n_.Z3.UPGRADE_BUTTON_CLICK, n_.Z3.UPGRADE_MODAL_OPEN, n_.Z3.UPGRADE_MODAL_CLOSE, n_.Z3.UPGRADE_MODAL_CONTINUE, n_.Z3.DOCUMENTATION_CLICK, n_.Z3.HEALTH_CHECKS_MANAGE, n_.Z3.ARGO_DISABLE_CANCEL, n_.Z3.SMART_TIERED_CACHE_DISABLE_CONFIRM, n_.Z3.SMART_TIERED_CACHE_DISABLE_CANCEL, n_.Z3.TIERED_CACHE_ANALYTICS_LINK, n_.Z3.CACHE_RESERVE_ANALYTICS_LINK, n_.Z3.HEALTH_CHECKS_LINK, n_.Z3.SMART_TIERED_CACHE_TOGGLE, n_.Z3.REGIONAL_TIERED_CACHE_TOGGLE, n_.Z3.CACHE_RESERVE_TOGGLE, n_.Z3.ARGO_SMART_ROUTING_TOGGLE, nd.a.ADD_SUSPICIOUS_ACTIVITY_FILTER, nd.a.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, nd.a.OPEN_SIDE_DRAWER, nd.a.CLOSE_SIDE_DRAWER, N.V, N.x, nt.FF[nt.Jj].clickLoginFromMobileApp2fa, nt.FF[nt.Jj].clickTryOther2FAMethodOrBackupCode, nt.FF[nt.Jj].clickTryRecovery, nt.FF[nt.pR].clickRegenerateBackupCodes, M.S.APPEAL_MITIGATION_SUBMIT, M.S.APPEAL_MITIGATION_SUCCESS, M.S.APPEAL_MITIGATION_FAILURE, M.S.CLICK_ABUSE_REPORT_ID, M.S.CLICK_ABUSE_REPORT_MITIGATIONS_LINK, L.F.SUBMIT_ABUSE_REPORT_FORM, L.F.SUBMIT_ABUSE_REPORT_FORM_SUCCESS, L.F.SUBMIT_ABUSE_REPORT_FORM_FAILURE, L.F.OPEN_ABUSE_REPORT_FORM_SIDEMODAL, L.F.CLOSE_ABUSE_REPORT_FORM_SIDEMODAL, L.F.CHANGE_ABUSE_REPORT_FORM_TYPE, J.rM.CLICK_GIVE_FEEDBACK, J.rM.CLICK_NAVIGATION_TAB, J.rM.CLICK_SEARCH_BY_ZONE_NAME, J.rM.CLICK_SEARCH_BY_VIEW_NAME, J.rM.CLICK_CREATE_AN_INTERNAL_ZONE, J.rM.CLICK_CREATE_A_VIEW, J.rM.CLICK_SAVE_ZONE, J.rM.CLICK_SAVE_VIEW, J.rM.CLICK_SEARCH_BY_RECORD_NAME, J.rM.CLICK_ZONE_NAME, J.rM.CLICK_ADD_A_RECORD, J.rM.CLICK_ADD_RECORD_SAVE, J.rM.CLICK_RECORD_EDIT, J.rM.CLICK_EDIT_RECORD_SAVE, J.rM.CLICK_IMPORT_RECORDS, J.rM.CLICK_MANAGE_LINKED_VIEWS, J.rM.CLICK_SAVE_MANAGE_LINKED_VIEWS, J.rM.CLICK_VIEW_RECORD, D.hw),
				nL = m.eg.exactStrict(m.eg.object({
					".agency": m.eg.any.optional,
					".auction": m.eg.any.optional,
					".bet": m.eg.any.optional,
					".center": m.eg.any.optional,
					".church": m.eg.any.optional,
					".com": m.eg.any.optional,
					".community": m.eg.any.optional,
					".energy": m.eg.any.optional,
					".fitness": m.eg.any.optional,
					".guru": m.eg.any.optional,
					".io": m.eg.any.optional,
					".info": m.eg.any.optional,
					".immo": m.eg.any.optional,
					".lgbt": m.eg.any.optional,
					".life": m.eg.any.optional,
					".live": m.eg.any.optional,
					".media": m.eg.any.optional,
					".mobi": m.eg.any.optional,
					".net": m.eg.any.optional,
					".network": m.eg.any.optional,
					".ninja": m.eg.any.optional,
					".online": m.eg.any.optional,
					".org": m.eg.any.optional,
					".photography": m.eg.any.optional,
					".plus": m.eg.any.optional,
					".press": m.eg.any.optional,
					".pro": m.eg.any.optional,
					".services": m.eg.any.optional,
					".store": m.eg.any.optional,
					".tech": m.eg.any.optional,
					".wiki": m.eg.any.optional,
					".wtf": m.eg.any.optional,
					".xyz": m.eg.any.optional,
					_ga: m.eg.any.optional,
					_lpchecked: m.eg.any.optional,
					a: m.eg.any.optional,
					absolute: m.eg.any.optional,
					access: m.eg.any.optional,
					access_users_allowed: m.eg.any.optional,
					account: m.eg.any.optional,
					accountId: m.eg.any.optional,
					"accountResolver/SELECT_ACCOUNT": m.eg.any.optional,
					"accountResolver/NO_ACTION": m.eg.any.optional,
					accountResolverTotalCpuTime: m.eg.any.optional,
					accountResolverTotalTime: m.eg.any.optional,
					accountResolverTotalUserActionsTime: m.eg.any.optional,
					action: m.eg.any.optional,
					addedRecords: m.eg.any.optional,
					addon: m.eg.any.optional,
					address: m.eg.any.optional,
					apiUrl: m.eg.any.optional,
					argo_accelerated_gigabytes: m.eg.any.optional,
					"aria-current": m.eg.any.optional,
					"aria-controls": m.eg.any.optional,
					"aria-label": m.eg.any.optional,
					"aria-selected": m.eg.any.optional,
					authHeaders: m.eg.any.optional,
					autocomplete: m.eg.any.optional,
					autoRenew: m.eg.any.optional,
					autoSetup: m.eg.any.optional,
					b: m.eg.any.optional,
					buckets: m.eg.string.optional,
					banner: m.eg.any.optional,
					bot: m.eg.any.optional,
					bot_management: m.eg.any.optional,
					brokenExpression: m.eg.any.optional,
					bundle: m.eg.any.optional,
					c: m.eg.any.optional,
					cacheKey: m.eg.any.optional,
					cache_by_device_type: m.eg.any.optional,
					cache_rules: m.eg.any.optional,
					campaignId: m.eg.any.optional,
					campaignID: m.eg.any.optional,
					cancelled: m.eg.any.optional,
					category: m.eg.any.optional,
					cd43: m.eg.any.optional,
					cd45: m.eg.any.optional,
					cd47: m.eg.any.optional,
					certificate_pack_id: m.eg.any.optional,
					certificate_pack_type: m.eg.any.optional,
					cf: m.eg.any.optional,
					cfPlan: m.eg.any.optional,
					chartName: m.eg.any.optional,
					charts: m.eg.any.optional,
					childrenCount: m.eg.any.optional,
					childrenSelected: m.eg.any.optional,
					class: m.eg.any.optional,
					code0: m.eg.any.optional,
					columnName: m.eg.string.optional,
					columns: m.eg.array(m.eg.string).optional,
					completedTasks: m.eg.any.optional,
					component: m.eg.any.optional,
					component_values: m.eg.any.optional,
					configuration_rules: m.eg.any.optional,
					content_signal_policy: m.eg.any.optional,
					contentfulId: m.eg.any.optional,
					country: m.eg.any.optional,
					currentCA: m.eg.any.optional,
					currentPerPage: m.eg.any.optional,
					currentPage: m.eg.any.optional,
					d: m.eg.any.optional,
					dashVersion: m.eg.any.optional,
					"data-children-count": m.eg.any.optional,
					"data-tracking-name": m.eg.any.optional,
					"data-tracking-id": m.eg.any.optional,
					"data-testid": m.eg.any.optional,
					dataset: m.eg.any.optional,
					databaseId: m.eg.any.optional,
					dateCreated: m.eg.any.optional,
					dateModified: m.eg.any.optional,
					ddos: m.eg.any.optional,
					description: m.eg.string.optional,
					dedicated_certificates: m.eg.any.optional,
					dedicated_certificates_custom: m.eg.any.optional,
					deepLink: m.eg.any.optional,
					default: m.eg.any.optional,
					detailType: m.eg.any.optional,
					deviceViewport: m.eg.any.optional,
					direction: m.eg.any.optional,
					directive: m.eg.any.optional,
					"DNS import method": m.eg.any.optional,
					download: m.eg.any.optional,
					duration: m.eg.any.optional,
					dynamic_redirects: m.eg.any.optional,
					e: m.eg.any.optional,
					ecommerce: m.eg.any.optional,
					email_count: m.eg.any.optional,
					empty_state: m.eg.any.optional,
					end: m.eg.any.optional,
					endDate: m.eg.any.optional,
					enabled: m.eg.any.optional,
					entitled: m.eg.any.optional,
					environment: m.eg.string.optional,
					error: m.eg.any.optional,
					error_code: m.eg.any.optional,
					errorCode: m.eg.any.optional,
					errorMessage: m.eg.any.optional,
					expand: m.eg.any.optional,
					experiment: m.eg.any.optional,
					expression: m.eg.any.optional,
					expressionType: m.eg.any.optional,
					features: m.eg.array(m.eg.string).optional,
					failureReasons: m.eg.any.optional,
					featureChange: m.eg.any.optional,
					featureImproved: m.eg.any.optional,
					featureName: m.eg.any.optional,
					featureOriginal: m.eg.any.optional,
					field: m.eg.any.optional,
					fieldName: m.eg.any.optional,
					filterId: m.eg.any.optional,
					firewall_rules: m.eg.any.optional,
					flow: m.eg.any.optional,
					"font-size": m.eg.any.optional,
					form: m.eg.any.optional,
					formView: m.eg.any.optional,
					frequency: m.eg.any.optional,
					fromCategorySearch: m.eg.any.optional,
					fromStreamRatePlanId: m.eg.any.optional,
					functions: m.eg.any.optional,
					toStreamRatePlanId: m.eg.any.optional,
					gatesDelayed: m.eg.any.optional,
					geo: m.eg.any.optional,
					globalNav: m.eg.any.optional,
					guid: m.eg.any.optional,
					hasData: m.eg.any.optional,
					hasRecords: m.eg.any.optional,
					hasSidebarNav: m.eg.boolean.optional,
					"hasTest2019-06-03": m.eg.any.optional,
					hasPayloadLogging: m.eg.any.optional,
					hCaptchaDisplayed: m.eg.any.optional,
					hasEnabledSecurityNavigation: m.eg.any.optional,
					hasEnabledDefaultUnifiedSecurity: m.eg.any.optional,
					hasEnabledSidebarNavGroupings: m.eg.boolean.optional,
					hasZoneNewSecurityNavigation: m.eg.boolean.optional,
					isZoneEligibleForUnification: m.eg.any.optional,
					header_modification: m.eg.any.optional,
					hostname: m.eg.any.optional,
					hostname_count: m.eg.any.optional,
					hostParam: m.eg.any.optional,
					href: m.eg.any.optional,
					id: m.eg.any.optional,
					index: m.eg.any.optional,
					indexLevel: m.eg.any.optional,
					initialRecommendation: m.eg.any.optional,
					ip_access_rules: m.eg.any.optional,
					items: m.eg.number.optional,
					isAuthenticated: m.eg.any.optional,
					isPaused: m.eg.any.optional,
					isCloudflare: m.eg.any.optional,
					isE2e: m.eg.boolean.optional,
					isExpanding: m.eg.boolean.optional,
					isEntAccount: m.eg.boolean.optional,
					isEnterprise: m.eg.boolean.optional,
					isInactive: m.eg.boolean.optional,
					isOpen: m.eg.boolean.optional,
					isScript: m.eg.any.optional,
					isSPA: m.eg.any.optional,
					isStreaming: m.eg.any.optional,
					isParent: m.eg.any.optional,
					isViewAll: m.eg.any.optional,
					isEditingSubscription: m.eg.any.optional,
					is_replacing: m.eg.any.optional,
					isRaw: m.eg.any.optional,
					jurisdiction: m.eg.any.optional,
					key: m.eg.any.optional,
					language: m.eg.any.optional,
					lastTimestamp: m.eg.any.optional,
					last_scan_days_ago: m.eg.any.optional,
					level: m.eg.any.optional,
					limit: m.eg.any.optional,
					link: m.eg.any.optional,
					listType: m.eg.any.optional,
					load_balancing: m.eg.any.optional,
					load_balancing_base: m.eg.any.optional,
					load_balancing_dns_queries: m.eg.any.optional,
					load_balancing_geo_routing: m.eg.any.optional,
					load_balancing_monitor_interval: m.eg.any.optional,
					load_balancing_origins: m.eg.any.optional,
					load_balancing_probe_regions: m.eg.any.optional,
					legacyDeepLink: m.eg.any.optional,
					locale: m.eg.any.optional,
					location: m.eg.any.optional,
					locationHint: m.eg.any.optional,
					maliciousCode: m.eg.any.optional,
					maliciousDomain: m.eg.any.optional,
					maliciousURL: m.eg.any.optional,
					managed_rules: m.eg.any.optional,
					marketingPlan: m.eg.any.optional,
					matchesCount: m.eg.any.optional,
					matchingRequestPercentage: m.eg.any.optional,
					matchingRequests: m.eg.any.optional,
					message0: m.eg.any.optional,
					method: m.eg.any.optional,
					millis: m.eg.any.optional,
					mode: m.eg.any.optional,
					modal_type: m.eg.any.optional,
					monitor: m.eg.string.optional,
					monitorType: m.eg.any.optional,
					mrktCheckboxDisplayed: m.eg.any.optional,
					name: m.eg.any.optional,
					newTotalCount: m.eg.any.optional,
					novalidate: m.eg.any.optional,
					numAccounts: m.eg.any.optional,
					numRecords: m.eg.any.optional,
					numRecordsToApply: m.eg.any.optional,
					numRecordsToPrompt: m.eg.any.optional,
					numRecordsToRemove: m.eg.any.optional,
					numRows: m.eg.any.optional,
					origin_rules: m.eg.any.optional,
					nextPlan: m.eg.any.optional,
					newValue: m.eg.any.optional,
					numFilters: m.eg.any.optional,
					numRawLogs: m.eg.any.optional,
					numSampledLogs: m.eg.any.optional,
					moreRawLogs: m.eg.any.optional,
					old_expires_on: m.eg.any.optional,
					old_mode: m.eg.any.optional,
					oldFrequency: m.eg.string.optional,
					oldPlan: m.eg.any.optional,
					oldPrice: m.eg.number.optional,
					oldRatePlan: m.eg.string.optional,
					oldStep: m.eg.any.optional,
					oldSubscriptionValues: m.eg.record(m.eg.string, m.eg.any).optional,
					oldValue: m.eg.any.optional,
					onboarding: m.eg.any.optional,
					operator: m.eg.any.optional,
					order: m.eg.string.optional,
					order_by: m.eg.any.optional,
					page: m.eg.any.optional,
					page_path: m.eg.any.optional,
					page_referrer: m.eg.any.optional,
					page_rules: m.eg.any.optional,
					page_timestamp: m.eg.any.optional,
					page_title: m.eg.any.optional,
					page_url: m.eg.any.optional,
					pageName: m.eg.any.optional,
					pageNumber: m.eg.any.optional,
					params: m.eg.any.optional,
					paused: m.eg.any.optional,
					phase: m.eg.any.optional,
					origin_url: m.eg.string.optional,
					payment_country: m.eg.string.optional,
					payment_gateway: m.eg.string.optional,
					payment_intent_id: m.eg.any.optional,
					percentages: m.eg.array(m.eg.number).optional,
					permission: m.eg.string.optional,
					personalisation: m.eg.boolean.optional,
					personalized: m.eg.boolean.optional,
					per_page: m.eg.any.optional,
					plan: m.eg.any.optional,
					plans: m.eg.any.optional,
					planVolume: m.eg.any.optional,
					pinned: m.eg.boolean.optional,
					position: m.eg.number.optional,
					prefs: m.eg.any.optional,
					previousPage: m.eg.any.optional,
					previousTotalCount: m.eg.any.optional,
					previousValue: m.eg.any.optional,
					price: m.eg.any.optional,
					priority: m.eg.any.optional,
					product: m.eg.any.optional,
					prioritize_malicious: m.eg.any.optional,
					products: m.eg.any.optional,
					productName: m.eg.any.optional,
					productCategory: m.eg.any.optional,
					provider: m.eg.any.optional,
					proxied: m.eg.boolean.optional,
					query: m.eg.any.optional,
					question: m.eg.any.optional,
					quota: m.eg.any.optional,
					ratePlan: m.eg.any.optional,
					rayId: m.eg.any.optional,
					readTasks: m.eg.any.optional,
					reason: m.eg.any.optional,
					recommendation: m.eg.any.optional,
					recommendationType: m.eg.any.optional,
					recordAdditionMethod: m.eg.any.optional,
					recordTypes: m.eg.any.optional,
					region: m.eg.any.optional,
					registrar: m.eg.any.optional,
					resourceName: m.eg.string.optional,
					result: m.eg.union([m.eg.literal("still_locked"), m.eg.literal("unlocked"), m.eg.literal("error")]).optional,
					rulesCount: m.eg.any.optional,
					rum_status: m.eg.any.optional,
					gclid: m.eg.any.optional,
					gclsrc: m.eg.any.optional,
					dclid: m.eg.any.optional,
					utm_source: m.eg.any.optional,
					utm_medium: m.eg.any.optional,
					utm_campaign: m.eg.any.optional,
					utm_term: m.eg.any.optional,
					utm_content: m.eg.any.optional,
					rangeMax: m.eg.number.optional,
					rangeMin: m.eg.number.optional,
					rate_limiting: m.eg.any.optional,
					ratePlanId: m.eg.any.optional,
					ratePlanName: m.eg.any.optional,
					referring_domain: m.eg.any.optional,
					referrer: m.eg.any.optional,
					registrationPeriod: m.eg.any.optional,
					registrationStatus: m.eg.any.optional,
					rel: m.eg.any.optional,
					relativeTimeRange: m.eg.any.optional,
					resultRank: m.eg.number.optional,
					"rocket_loader-recommendation": m.eg.any.optional,
					role: m.eg.any.optional,
					roles: m.eg.any.optional,
					ruleDescription: m.eg.any.optional,
					ruleId: m.eg.any.optional,
					scanFailed: m.eg.any.optional,
					scope: m.eg.any.optional,
					searchAction: m.eg.any.optional,
					searchDescription: m.eg.any.optional,
					searchParam: m.eg.any.optional,
					searchStatus: m.eg.any.optional,
					searchTerm: m.eg.any.optional,
					searchValue: m.eg.any.optional,
					section: m.eg.any.optional,
					seenOnParam: m.eg.any.optional,
					selected: m.eg.any.optional,
					series: m.eg.any.optional,
					service: m.eg.any.optional,
					setting: m.eg.any.optional,
					setup: m.eg.any.optional,
					shortcutsExpanded: m.eg.any.optional,
					showErrors: m.eg.any.optional,
					sortDirection: m.eg.string.optional,
					sortBy: m.eg.string.optional,
					startDate: m.eg.any.optional,
					state: m.eg.any.optional,
					status: m.eg.any.optional,
					step: m.eg.any.optional,
					storageClass: m.eg.any.optional,
					string: m.eg.any.optional,
					stream_storage_thousand_minutes: m.eg.any.optional,
					stream_viewed_thousand_minutes: m.eg.any.optional,
					subcategory: m.eg.any.optional,
					subscribedToMarketing: m.eg.any.optional,
					subscriptionValues: m.eg.record(m.eg.string, m.eg.any).optional,
					subcomponent: m.eg.string.optional,
					success: m.eg.any.optional,
					supportLevel: m.eg.any.optional,
					survey: m.eg.any.optional,
					surveyType: m.eg.any.optional,
					switchTo: m.eg.any.optional,
					tab: m.eg.any.optional,
					tableName: m.eg.any.optional,
					tag: m.eg.any.optional,
					target: m.eg.any.optional,
					targetPage: m.eg.any.optional,
					targetCA: m.eg.any.optional,
					target_pack_type: m.eg.any.optional,
					task: m.eg.any.optional,
					testType: m.eg.any.optional,
					text: m.eg.any.optional,
					timeRange: m.eg.any.optional,
					time_range_details: m.eg.any.optional,
					timeStamp: m.eg.any.optional,
					title: m.eg.any.optional,
					tld: m.eg.string.optional,
					to: m.eg.any.optional,
					toolCall: m.eg.any.optional,
					touched: m.eg.any.optional,
					total: m.eg.number.optional,
					transform_rules: m.eg.any.optional,
					transaction_id: m.eg.any.optional,
					trialPlan: m.eg.any.optional,
					trialStart: m.eg.any.optional,
					topic: m.eg.any.optional,
					totalCpuTime: m.eg.any.optional,
					totalLevels: m.eg.any.optional,
					totalRequests: m.eg.any.optional,
					totalTime: m.eg.any.optional,
					totalUserActionsTime: m.eg.any.optional,
					type: m.eg.any.optional,
					upgrade: m.eg.boolean.optional,
					uploading: m.eg.any.optional,
					uploadFailed: m.eg.any.optional,
					url_rewrites: m.eg.any.optional,
					userGroupId: m.eg.string.optional,
					hosts: m.eg.string.optional,
					uiType: m.eg.string.optional,
					userId: m.eg.any.optional,
					userType: m.eg.any.optional,
					utm_referrer: m.eg.any.optional,
					version: m.eg.any.optional,
					validation_method: m.eg.any.optional,
					validity_days: m.eg.any.optional,
					value: m.eg.any.optional,
					visibility: m.eg.any.optional,
					vitals: m.eg.any.optional,
					via: m.eg.any.optional,
					waf: m.eg.any.optional,
					wizardName: m.eg.any.optional,
					wordpress: m.eg.any.optional,
					workers: m.eg.any.optional,
					worker_kv_deletes: m.eg.any.optional,
					worker_kv_lists: m.eg.any.optional,
					worker_kv_reads: m.eg.any.optional,
					worker_kv_storage: m.eg.any.optional,
					worker_kv_writes: m.eg.any.optional,
					worker_requests: m.eg.any.optional,
					wp_plugin: m.eg.any.optional,
					write_strategy: m.eg.any.optional,
					zone: m.eg.any.optional,
					zoneId: m.eg.any.optional,
					zoneName: m.eg.any.optional,
					"zoneResolver/NO_ACTION": m.eg.any.optional,
					"zoneResolver/SELECT_ZONE": m.eg.any.optional,
					zoneResolverTotalCpuTime: m.eg.any.optional,
					zoneResolverTotalTime: m.eg.any.optional,
					zoneResolverTotalUserActionsTime: m.eg.any.optional,
					zones: m.eg.any.optional,
					zoneStatus: m.eg.any.optional,
					zoneType: m.eg.any.optional,
					audit: m.eg.any.optional,
					score: m.eg.any.optional,
					potentialSavings: m.eg.any.optional,
					feature: m.eg.any.optional,
					days: m.eg.any.optional,
					minutes: m.eg.any.optional,
					customRange: m.eg.any.optional,
					metric: m.eg.any.optional,
					url: m.eg.any.optional,
					previousPlan: m.eg.any.optional,
					isStarring: m.eg.any.optional,
					isStarred: m.eg.any.optional,
					totalStarredZones: m.eg.number.optional,
					totalZones: m.eg.number.optional,
					widgetName: m.eg.any.optional,
					statusType: m.eg.any.optional,
					outcome: m.eg.any.optional,
					marketingOptInChecked: m.eg.boolean.optional,
					prompt: m.eg.any.optional,
					positive: m.eg.any.optional,
					endpoint: m.eg.any.optional,
					isArgoEnabled: m.eg.any.optional,
					insightId: m.eg.any.optional,
					insightClass: m.eg.string.optional,
					insightType: m.eg.string.optional,
					severity: m.eg.string.optional,
					acknowledged: m.eg.boolean.optional,
					decision: m.eg.any.optional,
					destinationPage: m.eg.string.optional,
					displayedCount: m.eg.number.optional,
					domain: m.eg.any.optional,
					domainCount: m.eg.number.optional,
					domainName: m.eg.any.optional,
					domains: m.eg.any.optional,
					emptyStateType: m.eg.string.optional,
					errors: m.eg.any.optional,
					experience: m.eg.union([m.eg.literal("classic"), m.eg.literal("new")]).optional,
					exact: m.eg.any.optional,
					failureCount: m.eg.number.optional,
					failureType: m.eg.string.optional,
					fees: m.eg.any.optional,
					flowVersion: m.eg.string.optional,
					from: m.eg.string.optional,
					fromStep: m.eg.any.optional,
					hasAuthCode: m.eg.boolean.optional,
					hasCaDomains: m.eg.boolean.optional,
					hasUkDomains: m.eg.boolean.optional,
					hasUsDomains: m.eg.boolean.optional,
					isPaste: m.eg.boolean.optional,
					label: m.eg.any.optional,
					legalType: m.eg.string.optional,
					new_selection: m.eg.any.optional,
					numDomainsInCart: m.eg.any.optional,
					paymentMethod: m.eg.string.optional,
					paymentType: m.eg.string.optional,
					payment_method: m.eg.string.optional,
					payment_option: m.eg.string.optional,
					premium: m.eg.any.optional,
					previous_selection: m.eg.any.optional,
					pricing_local: m.eg.any.optional,
					registrantType: m.eg.string.optional,
					registrars: m.eg.any.optional,
					relatedTld: m.eg.string.optional,
					relatedTlds: m.eg.array(m.eg.string).optional,
					resultsCount: m.eg.number.optional,
					selection: m.eg.any.optional,
					source: m.eg.any.optional,
					successCount: m.eg.number.optional,
					tableType: m.eg.union([m.eg.literal("transfers-in-progress"), m.eg.literal("ready"), m.eg.literal("not-ready"), m.eg.literal("not-available")]).optional,
					tlds: m.eg.string.optional,
					toStep: m.eg.any.optional,
					totalCount: m.eg.number.optional,
					totalDomains: m.eg.number.optional,
					totalPrice: m.eg.number.optional,
					uniqueTopLevelDomains: m.eg.any.optional,
					validationStatus: m.eg.any.optional,
					years: m.eg.number.optional,
					template_name: m.eg.any.optional,
					productResource: m.eg.any.optional,
					snippets: m.eg.any.optional,
					ddos_l7: m.eg.any.optional,
					http_request_transform: m.eg.any.optional,
					http_request_origin: m.eg.any.optional,
					http_request_cache_settings: m.eg.any.optional,
					http_config_settings: m.eg.any.optional,
					http_request_dynamic_redirect: m.eg.any.optional,
					http_request_sbfm: m.eg.any.optional,
					"transform-rules": m.eg.any.optional,
					http_request_snippets: m.eg.any.optional,
					cloud_connector: m.eg.any.optional,
					is_first_project: m.eg.any.optional,
					is_first_scm_connection: m.eg.any.optional,
					is_preview_trigger: m.eg.any.optional,
					scm_type: m.eg.any.optional,
					existing_connection_total: m.eg.any.optional,
					invalid_fields: m.eg.any.optional,
					is_retry: m.eg.any.optional,
					changed_fields: m.eg.any.optional,
					rulesetName: m.eg.string.optional,
					isECCRuleset: m.eg.boolean.optional,
					isLCCEnabled: m.eg.boolean.optional,
					isECCEnabled: m.eg.boolean.optional,
					tabName: m.eg.any.optional,
					repo_owner: m.eg.string.optional,
					repo_name: m.eg.string.optional,
					subdirectory: m.eg.string.optional,
					seed_repo: m.eg.string.optional,
					branch: m.eg.string.optional,
					queryMode: m.eg.any.optional,
					clickType: m.eg.string.optional,
					interactionType: m.eg.string.optional,
					mediaType: m.eg.string.optional,
					agent_present: m.eg.boolean.optional,
					case_id: m.eg.string.optional,
					chat_status: m.eg.string.optional,
					chat_version: m.eg.string.optional,
					closure_source: m.eg.string.optional,
					conversation_id: m.eg.string.optional,
					error_type: m.eg.string.optional,
					has_existing_session: m.eg.boolean.optional,
					message_count: m.eg.number.optional,
					operation: m.eg.string.optional,
					session_duration_ms: m.eg.number.optional,
					sse_connected: m.eg.boolean.optional,
					support_portal_redirect: m.eg.boolean.optional
				})),
				nM = (n, r) => Object.entries(r).reduce((r, e) => {
					let [o, a] = e;
					return n.includes(o) || (r[o] = a), r
				}, {}),
				nP = n => (r, e, o) => {
					let [a, t, i] = ((n, r) => {
						let e, o, [a, t] = (n => {
							let r = nL.decode(n);
							if ((0, m.OC)(r)) {
								let e = r.left.map(n => {
									let {
										context: r
									} = n;
									return r.map(n => {
										let {
											key: r
										} = n;
										return r
									})
								}).reduce((n, r) => n.concat(r), []).filter(r => r in n);
								return [nM(e, n), e]
							}
							return [n, []]
						})(r);
						return (0, m.OC)(nD.decode(n)) && (e = new R.WI(n)), t && t.length > 0 && (o = new R.nK(n, t)), [a, e, o]
					})(e, o);
					if (t) throw t;
					return i && console.error(i), n(r, e, a)
				};
			var nj = e("./utils/zaraz.ts");
			let nU = {
					identify: !0
				},
				nz = n => (r, e, o) => (nU[e] || null === nj.fj || void 0 === nj.fj || nj.fj.track(e, o), n(r, e, o));
			var nF = e("./react/common/selectors/userSelectors.ts"),
				nG = e("./node_modules/uuid/dist/esm-browser/v4.js"),
				nH = ((a = {}).NEW_DOMAIN_REGISTRATION = "new domain registration", a.DOMAIN_TRANSFER = "domain transfer", a);

			function nW(n) {
				for (var r = 1; r < arguments.length; r++) {
					var e = null != arguments[r] ? arguments[r] : {},
						o = Object.keys(e);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), o.forEach(function(r) {
						var o;
						o = e[r], r in n ? Object.defineProperty(n, r, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[r] = o
					})
				}
				return n
			}

			function nK(n, r) {
				return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(n, r) {
					var e = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						e.push.apply(e, o)
					}
					return e
				})(Object(r)).forEach(function(e) {
					Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
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
				nY = new Set(["free", "pro", "business"]),
				nq = n => {
					let {
						price: r,
						ratePlanId: e,
						ratePlanName: o,
						frequency: a,
						isNewSubscription: t,
						category: i
					} = n;
					return {
						event: "purchase",
						new_subscription: t,
						ecommerce: {
							transaction_id: (0, nG.A)(),
							currency: "USD",
							page_timestamp: new Date().toISOString(),
							value: r
						},
						items: [nW({
							item_id: e,
							item_name: o || e,
							frequency: a,
							price: r
						}, i && {
							category: i
						})]
					}
				};

			function nZ(n) {
				for (var r = 1; r < arguments.length; r++) {
					var e = null != arguments[r] ? arguments[r] : {},
						o = Object.keys(e);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), o.forEach(function(r) {
						var o;
						o = e[r], r in n ? Object.defineProperty(n, r, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[r] = o
					})
				}
				return n
			}

			function nQ(n, r) {
				return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(n, r) {
					var e = Object.keys(n);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(n);
						e.push.apply(e, o)
					}
					return e
				})(Object(r)).forEach(function(e) {
					Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
				}), n
			}
			let nX = n => {
					let {
						linkClickType: r,
						page: e
					} = n, {
						origin: o
					} = window.location, a = "".concat(o).concat(e);
					return {
						event: "click_key_interaction",
						link_click_type: r,
						page_path: e,
						page_url: a
					}
				},
				nJ = "pageview",
				n$ = "create zone",
				n0 = "create user",
				n1 = "Plan Purchase Success",
				n5 = "Product Purchase Success",
				n2 = "Plan Update Success",
				n4 = "Product Update Success",
				n3 = nI.FF.completedWCIBuildForNewWorker,
				{
					REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED: n6,
					TRANSFER_DOMAIN_PURCHASE_COMPLETED: n8
				} = Y.C,
				n9 = {
					[nJ]: !0,
					[n$]: !0,
					[n0]: !0,
					[n1]: !0,
					[n5]: !0,
					[n2]: !0,
					[n4]: !0,
					[D.hw]: !0,
					[n6]: !0,
					[n8]: !0,
					[n3]: !0
				},
				n7 = n => (r, e, o) => {
					if (n9[e]) {
						var a;
						let n = ((n, r) => {
							switch (n) {
								case nJ:
									return (n => {
										let r, {
												deviceViewport: e,
												page: o,
												previousPage: a,
												pageName: t,
												utm_campaign: i,
												_ga: l,
												"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": d
											} = n,
											{
												origin: p
											} = window.location,
											g = (0, nF.wz)((0, c.KA)().getState());
										return {
											event: void 0 !== a && o !== a ? "virtual_page_view" : "page_load",
											device_type: e,
											hostname: p,
											language: navigator.language,
											locale: (0, s.j)((0, c.KA)().getState()),
											page_location: o ? "".concat(p).concat(o) : "[redacted]",
											page_path: o ? "".concat(o) : "[redacted]",
											page_referrer: a ? "".concat(p, "/").concat(a) : "[redacted]",
											page_timestamp: new Date().toISOString(),
											page_title: t || "[redacted]",
											page_url: o ? "".concat(p).concat(o) : "[redacted]",
											query: i ? "?utm_campaign=".concat(i) : "[redacted]",
											user_properties: {
												ga_client_id: null != l ? l : void 0,
												ga_client_id_s: l ? "s".concat(l) : void 0,
												user_id: ri() ? null == g ? void 0 : g.id : void 0,
												ecid: d && (r = d.match(/\|MCMID\|([0-9]+)\|/)) ? r[1] : void 0
											}
										}
									})(r);
								case n$:
									return {
										event: "zone_create", page_timestamp: new Date().toISOString(), currency: "USD", value: 0
									};
								case n0:
									return (n => {
										let {
											status: r
										} = n;
										return "success" === r ? {
											event: "new_user_create",
											page_timestamp: new Date().toISOString(),
											currency: "USD",
											value: 0
										} : void 0
									})(r);
								case n1:
									return (n => {
										let {
											price: r,
											frequency: e,
											plan: o,
											ratePlanId: a,
											ratePlanName: t
										} = n;
										return nY.has(o) ? nK(nW({}, nq({
											price: r,
											ratePlanId: a,
											ratePlanName: t,
											frequency: e,
											isNewSubscription: !0
										})), {
											label: o
										}) : void 0
									})(r);
								case n5:
									return (n => {
										let {
											price: r,
											frequency: e,
											ratePlan: o,
											ratePlanName: a
										} = n;
										return nB.has(o) ? nK(nW({}, nq({
											price: r,
											ratePlanId: o,
											ratePlanName: a,
											frequency: e,
											isNewSubscription: !0
										})), {
											label: o
										}) : void 0
									})(r);
								case n2:
									return (n => {
										let {
											price: r,
											frequency: e,
											plan: o,
											ratePlanId: a,
											ratePlanName: t,
											label: i
										} = n;
										return nY.has(o) ? nK(nW({}, nq({
											price: r,
											frequency: e,
											ratePlanId: a,
											ratePlanName: t,
											isNewSubscription: !1
										})), {
											label: i || o
										}) : void 0
									})(r);
								case n4:
									return (n => {
										let {
											price: r,
											frequency: e,
											ratePlan: o,
											ratePlanName: a
										} = n;
										return nB.has(o) ? nK(nW({}, nq({
											price: r,
											frequency: e,
											ratePlanId: o,
											ratePlanName: a,
											isNewSubscription: !1
										})), {
											label: o
										}) : void 0
									})(r);
								case n6:
									return (n => {
										let {
											fees: r
										} = n, {
											DOMAIN_REGISTRATION: e
										} = nV;
										return nK(nW({}, nq({
											price: null == r ? void 0 : r.registration_fee,
											ratePlanId: e.id,
											ratePlanName: e.name,
											frequency: "yearly",
											isNewSubscription: !0,
											category: nH.NEW_DOMAIN_REGISTRATION
										})), {
											label: e.id
										})
									})(r);
								case n8:
									return (n => {
										let {
											fees: r
										} = n, {
											DOMAIN_TRANSFER: e
										} = nV;
										return nK(nW({}, nq({
											price: null == r ? void 0 : r.renewal_fee,
											ratePlanId: e.id,
											ratePlanName: e.name,
											frequency: "yearly",
											isNewSubscription: !0,
											category: nH.DOMAIN_TRANSFER
										})), {
											label: e.id
										})
									})(r);
								case D.hw:
									return (n => {
										let {
											interactionType: r,
											clickType: e,
											id: o,
											text: a,
											href: t,
											page: i
										} = n;
										return nQ(nZ({}, nX({
											linkClickType: e,
											page: i
										})), {
											click_text: a,
											click_url: t,
											interaction_type: r,
											click_target_identifier: o
										})
									})(r);
								case n3:
									return (n => {
										let {
											is_retry: r,
											outcome: e,
											page: o
										} = n;
										return nQ(nZ({}, nX({
											linkClickType: D.e4.COMPLETED_WCI_BUILD,
											page: o
										})), {
											workers_is_retry: r,
											workers_success: e
										})
									})(r);
								default:
									return
							}
						})(e, o);
						window.dataLayer = window.dataLayer || [], n && (null == (a = window.dataLayer) || a.push(n))
					}
					return n(r, e, o)
				};
			var rn = e("./react/utils/cookiePreferences.ts");

			function rr(n) {
				for (var r = 1; r < arguments.length; r++) {
					var e = null != arguments[r] ? arguments[r] : {},
						o = Object.keys(e);
					"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), o.forEach(function(r) {
						var o;
						o = e[r], r in n ? Object.defineProperty(n, r, {
							value: o,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[r] = o
					})
				}
				return n
			}
			let re = n => {
					i().init(rr({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: ra() && !(0, l.gl)() && ri(),
						middlewares: [T, nP, E, nz, n7]
					}, n))
				},
				ro = () => {
					var n, r;
					i().identify((n = rr({}, (0, t.getAttribution)()), r = r = {
						locale: (0, s.j)((0, c.KA)().getState()),
						isCloudflare: !!(0, d.k2)(),
						isE2e: !1
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(n, r) {
						var e = Object.keys(n);
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(n);
							e.push.apply(e, o)
						}
						return e
					})(Object(r)).forEach(function(e) {
						Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
					}), n))
				},
				ra = () => !0,
				rt = () => {
					(0, rn.Yj)("sparrow_id")
				},
				ri = () => (0, rn.xE)()
		},
		"./utils/initStyles.ts": function(n, r, e) {
			"use strict";
			var o = e("../../../node_modules/@cloudflare/style-const/es/index.js"),
				a = e("./react/app/providers/storeContainer.js");
			let t = "cfBaseStyles",
				i = document.head || document.getElementsByTagName("head")[0],
				l = () => {
					let n = (0, o.ud)(),
						r = "\n    @layer cf {\n      * {\n        box-sizing: border-box;\n      }\n\n      ::placeholder {\n        color: ".concat(o.Ee.colors.gray["5"], "\n      }\n\n      wf-html, html, body, button {\n        font-size: 16px;\n      }\n\n      wf-html,\n      html {\n        -webkit-font-smoothing: antialiased;\n        -webkit-text-size-adjust: none;\n      }\n\n      wf-body,\n      body {\n        line-height: 1.5;\n        color: ").concat(o.Ee.colors.gray["1"], ";\n        background-color: ").concat(o.Ee.colors.background, ";\n      }\n\n      text {\n        fill: ").concat(o.Ee.colors.gray["1"], ";\n      }\n\n      wf-html, wf-body, body, html, ul, ol, li, p, h1, h2, h3, h4, h5, h6 {\n        margin: 0;\n        padding: 0;\n      }\n\n      h1, h2, h3, small {\n        line-height: 1.25;\n      }\n\n      h1 {\n        font-size: 32px;\n        font-weight: 400;\n      }\n\n      h2 {\n        font-size: 24px;\n      }\n\n      h3 {\n        font-size: 20px;\n      }\n\n      h4, h5, h6 {\n        font-size: 16px;\n      }\n\n      h2, h3, h4, h5, h6 {\n        font-weight: 600;\n      }\n\n      h3 + p, h4 + p, h5 + p, h6 + p {\n        margin-top: 0.5em;\n      }\n\n      small {\n        font-size: 12px;\n      }\n\n      button {\n        border: none;\n      }\n\n      label {\n        display: block;\n        font-size: 0.875rem;\n        margin-bottom: 0.35938em;\n        min-height: 1.22em;\n      }\n\n      fieldset {\n        border: none;\n      }\n\n      pre {\n        border-radius: 0.5rem;\n        color: ").concat(o.Ee.colors.gray["1"], ";\n        display: block;\n        font-size: 14px;\n        margin: 2rem 0;\n        overflow: auto;\n        padding: 0.5rem 0.75rem;\n        width: 100%;\n      }\n\n      code, pre {\n        background-color: ").concat(n ? o.Ee.colors.gray["8"] : o.Ee.colors.gray["9"], ";\n        border: 1px solid ").concat(n ? o.Ee.colors.gray["7"] : o.Ee.colors.gray["8"], ";\n      }\n\n      section {\n        margin-bottom: 2.5rem;\n        margin-top: 2.5rem;\n      }\n\n      thead {\n        background-color: ").concat(n ? o.Ee.colors.gray["8"] : o.Ee.colors.gray["9"], "\n      }\n\n      th {\n        font-weight: 600;\n      }\n\n      a {\n        color: ").concat(n ? o.Ee.colors.blue["3"] : o.Ee.colors.blue["4"], ";\n        text-decoration: underline;\n        text-underline-offset: 4px;\n        transition: color 150ms ease;\n      }\n\n      a:hover {\n        color: ").concat(n ? o.Ee.colors.orange["3"] : o.Ee.colors.blue["2"], ";\n        cursor: pointer;\n      }\n\n      a:active {\n        color: ").concat(n ? o.Ee.colors.orange["3"] : o.Ee.colors.blue["2"], ";\n        outline: none;\n      }\n\n      a:focus {\n        color: ").concat(o.Ee.colors.blue["5"], ";\n      }\n\n      a svg, a:active svg, a:hover svg {\n        fill: currentColor\n      }\n\n      ol, ul, dl {\n        list-style-position: outside;\n        margin-left: 3em;\n      }\n\n      ul {\n        list-style-type: disc;\n      }\n\n      dd {\n        margin: 0;\n      }\n\n      dt {\n        font-weight: 600;\n        font-size: ").concat(o.Ee.fontSizes["3"], "px\n      }\n\n      p+p, p+ul, p+ol, p+dl, ul+p, ul+h2, ul+h3, ul+h4, ul+h5, ul+h6 {\n        margin-top: 1.5em;\n      }\n\n      hr {\n        border: 0;\n        border-top: 1px solid #d5d7d8;\n        display: block;\n        height: 0;\n        margin: 2rem 0;\n        width: 100%;\n      }\n\n      img, object {\n        height: auto;\n        max-width: 100%;\n      }\n\n      table {\n        border-spacing: 0;\n      }\n\n      legend {\n        padding-inline-start: 0;\n      }\n\n      fieldset {\n        margin-inline-start: 0;\n      }\n\n      input:-webkit-autofill,\n      input:-webkit-autofill:hover,\n      input:-webkit-autofill:focus {\n        background-color: ").concat(o.Ee.colors.background, ";\n        color:  ").concat(o.Ee.colors.gray["8"], "\n      }\n\n      :root {\n        --cf-white: ").concat(o.Ee.colors.white, ";\n        --cf-black: ").concat(o.Ee.colors.black, ";\n        ").concat((n => {
							let r = [];
							for (let e in n.colors) {
								let o = n.colors[e];
								if (Array.isArray(o) && "categorical" !== e)
									for (let n = 0; n < o.length; ++n) r.push("--cf-".concat(e, "-").concat(n, ":").concat(o[n], ";"))
							}
							return r.join("\n")
						})(o.Ee), "\n      }\n\n      .ReactVirtualized__List {\n        outline: none\n      }\n      .grim-scroll-sortable-helper {\n        pointer-events: auto !important;\n        z-index: 2000 !important;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;\n        background-color: white !important;\n      }\n      .grim-scroll-sortable-helper * {\n        cursor: grabbing !important;\n      }\n    }\n  "),
						e = document.getElementById(t);
					e ? e.innerText = "" : ((e = document.createElement("style")).id = t, i.appendChild(e)), e.appendChild(document.createTextNode(r)), (0, a.KA)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, o.wN)(l), r.A = l
		},
		"./utils/sentry/lastSentEventId.ts": function(n, r, e) {
			"use strict";
			let o;
			e.d(r, {
				g: function() {
					return a
				}
			});
			let a = (o = "", {
				setEventId: n => n && "string" == typeof n ? o = n : o,
				getEventId: () => o
			})
		},
		"./utils/zaraz.ts": function(n, r, e) {
			"use strict";
			let o;
			e.d(r, {
				Le: function() {
					return t
				},
				Uf: function() {
					return l
				},
				XH: function() {
					return c
				},
				fj: function() {
					return o
				}
			});
			let a = {
					track: (n, r) => {
						var e, o, a;
						null == (e = window.zaraz) || e.track(n, (o = function(n) {
							for (var r = 1; r < arguments.length; r++) {
								var e = null != arguments[r] ? arguments[r] : {},
									o = Object.keys(e);
								"function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
									return Object.getOwnPropertyDescriptor(e, n).enumerable
								}))), o.forEach(function(r) {
									var o;
									o = e[r], r in n ? Object.defineProperty(n, r, {
										value: o,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : n[r] = o
								})
							}
							return n
						}({}, r), a = a = {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(n, r) {
							var e = Object.keys(n);
							if (Object.getOwnPropertySymbols) {
								var o = Object.getOwnPropertySymbols(n);
								e.push.apply(e, o)
							}
							return e
						})(Object(a)).forEach(function(n) {
							Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(a, n))
						}), o))
					},
					set: (n, r) => {
						var e;
						return null == (e = window.zaraz) ? void 0 : e.set(n, r)
					}
				},
				t = () => {
					window.zaraz, o = a
				},
				i = ["email", "first_name", "last_name"],
				l = n => {
					i.forEach(r => {
						null == o || o.set(r, n[r])
					})
				},
				c = () => {
					l({})
				}
		},
		"../../common/util/previews/preview-helpers.ts": function(n, r, e) {
			"use strict";
			e.d(r, {
				A: function() {
					return i
				},
				Nt: function() {
					return a
				}
			});
			var o = e("../../../node_modules/zod/lib/index.mjs");
			let a = "CF_dash_version",
				t = o.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g);
			o.z.enum(["live", "previews", "canary"]);
			let i = n => {
				let [r, ...e] = t.parse(n).split("-");
				return {
					projectType: r,
					deploymentId: e.join("-")
				}
			}
		},
		"./node_modules/css-loader/index.js!./react/common/out.css": function(n, r, e) {
			(n.exports = e("./node_modules/css-loader/lib/css-base.js")(!1)).push([n.id, '/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */\n@layer properties;\n@layer cf, base, theme, components, utilities;\n:root, :host {\n  --text-color-kumo-default: light-dark(\n    var(--color-neutral-900, oklch(21% 0.006 285.885)),\n    var(--color-neutral-100, oklch(97% 0 0))\n  );\n  --text-color-kumo-inverse: light-dark(\n    var(--color-neutral-100, oklch(97% 0 0)),\n    var(--color-neutral-900, oklch(20.5% 0 0))\n  );\n  --text-color-kumo-strong: light-dark(\n    var(--color-neutral-600, oklch(43.9% 0 0)),\n    var(--color-neutral-400, oklch(70.8% 0 0))\n  );\n  --text-color-kumo-subtle: light-dark(\n    var(--color-neutral-500, oklch(55.6% 0 0)),\n    var(--color-neutral-50, oklch(98.5% 0 0))\n  );\n  --text-color-kumo-inactive: light-dark(\n    var(--color-neutral-400, oklch(70.8% 0 0)),\n    var(--color-neutral-400, oklch(70.8% 0 0))\n  );\n  --text-color-kumo-brand: light-dark(\n    #f6821f,\n    #f6821f\n  );\n  --text-color-kumo-link: light-dark(\n    var(--color-blue-800, oklch(42.4% 0.199 265.638)),\n    var(--color-blue-400, oklch(70.7% 0.165 254.624))\n  );\n  --text-color-kumo-success: light-dark(\n    var(--color-green-500, oklch(72.3% 0.219 149.579)),\n    var(--color-green-500, oklch(72.3% 0.219 149.579))\n  );\n  --text-color-kumo-danger: light-dark(\n    var(--color-red-500, oklch(63.7% 0.237 25.331)),\n    var(--color-red-400, oklch(70.4% 0.191 22.216))\n  );\n  --text-color-kumo-warning: light-dark(\n    var(--color-yellow-800, oklch(47.6% 0.114 61.907)),\n    var(--color-yellow-400, oklch(85.2% 0.199 91.936))\n  );\n  --color-kumo-base: light-dark(\n    var(--color-white, #fff),\n    var(--color-black, #000)\n  );\n  --color-kumo-elevated: light-dark(\n    var(--color-neutral-25, oklch(0.99 0 0)),\n    var(--color-neutral-950, oklch(14.5% 0 0))\n  );\n  --color-kumo-recessed: light-dark(\n    var(--color-neutral-250, oklch(0.9 0 0)),\n    var(--color-neutral-750, oklch(0.31 0 0))\n  );\n  --color-kumo-overlay: light-dark(\n    var(--color-neutral-50, oklch(98.5% 0 0)),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n  --color-kumo-contrast: light-dark(\n    var(--color-neutral-900, oklch(20.5% 0 0)),\n    var(--color-neutral-100, oklch(97% 0 0))\n  );\n  --color-kumo-control: light-dark(\n    var(--color-white, #fff),\n    var(--color-neutral-900, oklch(21% 0.006 285.885))\n  );\n  --color-kumo-tint: light-dark(\n    var(--color-neutral-150, oklch(0.96 0 0)),\n    var(--color-neutral-850, oklch(0.23 0 0))\n  );\n  --color-kumo-interact: light-dark(\n    var(--color-neutral-300, oklch(87% 0 0)),\n    var(--color-neutral-700, oklch(37.1% 0 0))\n  );\n  --color-kumo-fill: light-dark(\n    var(--color-neutral-200, oklch(92.2% 0 0)),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n  --color-kumo-fill-hover: light-dark(\n    var(--color-neutral-200, oklch(92.2% 0 0)),\n    var(--color-neutral-700, oklch(37.1% 0 0))\n  );\n  --color-kumo-brand: light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  );\n  --color-kumo-brand-hover: light-dark(\n    var(--color-blue-700, oklch(48.8% 0.243 264.376)),\n    var(--color-blue-700, oklch(48.8% 0.243 264.376))\n  );\n  --color-kumo-line: light-dark(\n    oklch(14.5% 0 0 / 0.1),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n  --color-kumo-ring: light-dark(\n    var(--color-neutral-400, oklch(70.8% 0 0)),\n    var(--color-neutral-600, oklch(43.9% 0 0))\n  );\n  --color-kumo-tip-shadow: light-dark(\n    var(--color-gray-200, oklch(92.8% 0.006 264.531)),\n    transparent\n  );\n  --color-kumo-tip-stroke: light-dark(\n    transparent,\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n  --color-kumo-info: light-dark(\n    var(--color-blue-500, oklch(62.3% 0.214 259.815)),\n    var(--color-blue-700, oklch(48.8% 0.243 264.376))\n  );\n  --color-kumo-info-tint: light-dark(\n    var(--color-blue-300, oklch(80.9% 0.105 251.813)),\n    var(--color-blue-900, oklch(37.9% 0.146 265.522))\n  );\n  --color-kumo-warning: light-dark(\n    var(--color-yellow-500, oklch(79.5% 0.184 86.047)),\n    var(--color-yellow-700, oklch(55.4% 0.135 66.442))\n  );\n  --color-kumo-warning-tint: light-dark(\n    var(--color-yellow-300, oklch(90.5% 0.182 98.111)),\n    var(--color-yellow-900, oklch(42.1% 0.095 57.708))\n  );\n  --color-kumo-danger: light-dark(\n    var(--color-red-500, oklch(63.7% 0.237 25.331)),\n    var(--color-red-700, oklch(50.5% 0.213 27.518))\n  );\n  --color-kumo-danger-tint: light-dark(\n    var(--color-red-300, oklch(80.8% 0.114 19.571)),\n    var(--color-red-900, oklch(39.6% 0.141 25.723))\n  );\n  --text-xs: 12px;\n  --text-xs--line-height: calc(1 / 0.75);\n  --text-sm: 13px;\n  --text-sm--line-height: calc(1 / 0.85);\n  --text-base: 14px;\n  --text-base--line-height: calc(1.25 / 0.875);\n  --text-lg: 16px;\n  --text-lg--line-height: calc(1.25 / 1);\n  --color-blue-400: oklch(0.707 0.165 254.624);\n  --color-blue-800: oklch(0.424 0.199 265.638);\n  --color-neutral-25: oklch(0.99 0 0);\n  --color-neutral-50: oklch(0.985 0 0);\n  --color-neutral-150: oklch(0.96 0 0);\n  --color-neutral-250: oklch(0.9 0 0);\n  --color-neutral-750: oklch(0.31 0 0);\n  --color-neutral-850: oklch(0.23 0 0);\n  --default-transition-duration: 100ms;\n  --animate-refresh: refresh 0.5s ease-in-out infinite;\n  --animate-right: right 15s linear infinite;\n  --text-color-surface: light-dark(\n    var(--color-neutral-900, oklch(21% 0.006 285.885)),\n    var(--color-neutral-100, oklch(97% 0 0))\n  );\n  --text-color-label: light-dark(\n    var(--color-neutral-600, oklch(43.9% 0 0)),\n    var(--color-neutral-400, oklch(70.8% 0 0))\n  );\n  --text-color-muted: light-dark(\n    var(--color-neutral-500, oklch(55.6% 0 0)),\n    var(--color-neutral-50, oklch(98.5% 0 0))\n  );\n  --text-color-disabled: light-dark(\n    var(--color-neutral-400, oklch(70.8% 0 0)),\n    var(--color-neutral-400, oklch(70.8% 0 0))\n  );\n  --text-color-brand: light-dark(#f6821f, #f6821f);\n  --text-color-info: light-dark(\n    var(--color-blue-800, oklch(42.4% 0.199 265.638)),\n    var(--color-blue-400, oklch(70.7% 0.165 254.624))\n  );\n  --text-color-error: light-dark(\n    var(--color-red-500, oklch(63.7% 0.237 25.331)),\n    var(--color-red-400, oklch(70.4% 0.191 22.216))\n  );\n  --text-color-alert: light-dark(\n    var(--color-yellow-800, oklch(47.6% 0.114 61.907)),\n    var(--color-yellow-400, oklch(85.2% 0.199 91.936))\n  );\n  --color-tooltip-border: light-dark(\n    var(--color-gray-200, oklch(92.8% 0.006 264.531)),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n  --color-surface: light-dark(\n    var(--color-white, #fff),\n    var(--color-black, #000)\n  );\n  --color-surface-2: light-dark(\n    var(--color-neutral-25, oklch(0.99 0 0)),\n    var(--color-neutral-950, oklch(14.5% 0 0))\n  );\n  --color-surface-secondary: light-dark(\n    var(--color-neutral-50, oklch(98.5% 0 0)),\n    #000\n  );\n  --color-active: light-dark(\n    var(--color-neutral-400, oklch(70.8% 0 0)),\n    var(--color-neutral-600, oklch(43.9% 0 0))\n  );\n  --color-muted: light-dark(\n    var(--color-neutral-100, oklch(97% 0.001 106.424)),\n    var(--color-neutral-500, oklch(55.3% 0.013 58.071))\n  );\n  --color-secondary: light-dark(\n    var(--color-white, #fff),\n    var(--color-neutral-900, oklch(21% 0.006 285.885))\n  );\n  --color-subtle: light-dark(\n    var(--color-neutral-50, oklch(98.5% 0 0)),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n  --color-accent: light-dark(\n    var(--color-neutral-150, oklch(0.96 0 0)),\n    var(--color-neutral-850, oklch(0.23 0 0))\n  );\n  --color-color: light-dark(\n    var(--color-neutral-200, oklch(92.2% 0 0)),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n  --color-color-3: light-dark(\n    var(--color-neutral-100, oklch(97% 0 0)),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n  --color-hover: light-dark(\n    var(--color-neutral-300, oklch(87% 0 0)),\n    var(--color-neutral-700, oklch(37.1% 0 0))\n  );\n  --color-border: var(--cf-gray-8);\n  --color-primary: light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  );\n  --color-info-selection: light-dark(\n    var(--color-blue-300, oklch(80.9% 0.105 251.813)),\n    var(--color-blue-900, oklch(37.9% 0.146 265.522))\n  );\n  --color-alert-selection: light-dark(\n    var(--color-yellow-300, oklch(90.5% 0.182 98.111)),\n    var(--color-yellow-900, oklch(42.1% 0.095 57.708))\n  );\n  --color-error: light-dark(\n    var(--color-red-500, oklch(63.7% 0.237 25.331)),\n    var(--color-red-700, oklch(50.5% 0.213 27.518))\n  );\n  --color-error-selection: light-dark(\n    var(--color-red-300, oklch(80.8% 0.114 19.571)),\n    var(--color-red-900, oklch(39.6% 0.141 25.723))\n  );\n  --font-sans: \'Inter Variable\', ui-sans-serif, system-ui, sans-serif,\n    \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\';\n  --font-mono: \'Paper Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco,\n    Consolas, \'Liberation Mono\', \'Courier New\', monospace;\n  --color-red-50: oklch(97.1% 0.013 17.38);\n  --color-red-100: oklch(93.6% 0.032 17.717);\n  --color-red-200: oklch(88.5% 0.062 18.334);\n  --color-red-300: oklch(80.8% 0.114 19.571);\n  --color-red-400: oklch(70.4% 0.191 22.216);\n  --color-red-500: oklch(63.7% 0.237 25.331);\n  --color-red-600: oklch(57.7% 0.245 27.325);\n  --color-red-700: oklch(50.5% 0.213 27.518);\n  --color-red-800: oklch(44.4% 0.177 26.899);\n  --color-red-900: oklch(39.6% 0.141 25.723);\n  --color-red-950: oklch(25.8% 0.092 26.042);\n  --color-orange-100: oklch(95.4% 0.038 75.164);\n  --color-orange-200: oklch(90.1% 0.076 70.697);\n  --color-orange-300: oklch(83.7% 0.128 66.29);\n  --color-orange-400: oklch(75% 0.183 55.934);\n  --color-orange-500: oklch(70.5% 0.213 47.604);\n  --color-orange-600: oklch(64.6% 0.222 41.116);\n  --color-orange-700: oklch(55.3% 0.195 38.402);\n  --color-orange-800: oklch(47% 0.157 37.304);\n  --color-orange-900: oklch(40.8% 0.123 38.172);\n  --color-orange-950: oklch(26.6% 0.079 36.259);\n  --color-amber-50: oklch(98.7% 0.022 95.277);\n  --color-amber-200: oklch(92.4% 0.12 95.746);\n  --color-amber-300: oklch(87.9% 0.169 91.605);\n  --color-amber-400: oklch(82.8% 0.189 84.429);\n  --color-amber-500: oklch(76.9% 0.188 70.08);\n  --color-amber-600: oklch(66.6% 0.179 58.318);\n  --color-amber-700: oklch(55.5% 0.163 48.998);\n  --color-amber-800: oklch(47.3% 0.137 46.201);\n  --color-amber-900: oklch(41.4% 0.112 45.904);\n  --color-yellow-50: oklch(98.7% 0.026 102.212);\n  --color-yellow-100: oklch(97.3% 0.071 103.193);\n  --color-yellow-200: oklch(94.5% 0.129 101.54);\n  --color-yellow-300: oklch(90.5% 0.182 98.111);\n  --color-yellow-400: oklch(85.2% 0.199 91.936);\n  --color-yellow-500: oklch(79.5% 0.184 86.047);\n  --color-yellow-600: oklch(68.1% 0.162 75.834);\n  --color-yellow-700: oklch(55.4% 0.135 66.442);\n  --color-yellow-800: oklch(47.6% 0.114 61.907);\n  --color-yellow-900: oklch(42.1% 0.095 57.708);\n  --color-green-50: oklch(98.2% 0.018 155.826);\n  --color-green-100: oklch(96.2% 0.044 156.743);\n  --color-green-200: oklch(92.5% 0.084 155.995);\n  --color-green-300: oklch(87.1% 0.15 154.449);\n  --color-green-400: oklch(79.2% 0.209 151.711);\n  --color-green-500: oklch(72.3% 0.219 149.579);\n  --color-green-600: oklch(62.7% 0.194 149.214);\n  --color-green-700: oklch(52.7% 0.154 150.069);\n  --color-green-800: oklch(44.8% 0.119 151.328);\n  --color-green-900: oklch(39.3% 0.095 152.535);\n  --color-green-950: oklch(26.6% 0.065 152.934);\n  --color-emerald-500: oklch(69.6% 0.17 162.48);\n  --color-emerald-600: oklch(59.6% 0.145 163.225);\n  --color-cyan-100: oklch(95.6% 0.045 203.388);\n  --color-cyan-800: oklch(45% 0.085 224.283);\n  --color-sky-500: oklch(68.5% 0.169 237.323);\n  --color-blue-50: oklch(97% 0.014 254.604);\n  --color-blue-100: oklch(93.2% 0.032 255.585);\n  --color-blue-200: oklch(88.2% 0.059 254.128);\n  --color-blue-300: oklch(80.9% 0.105 251.813);\n  --color-blue-500: oklch(62.3% 0.214 259.815);\n  --color-blue-600: oklch(54.6% 0.245 262.881);\n  --color-blue-700: oklch(48.8% 0.243 264.376);\n  --color-blue-900: oklch(37.9% 0.146 265.522);\n  --color-blue-950: oklch(28.2% 0.091 267.935);\n  --color-indigo-50: oklch(96.2% 0.018 272.314);\n  --color-indigo-100: oklch(93% 0.034 272.788);\n  --color-indigo-200: oklch(87% 0.065 274.039);\n  --color-indigo-500: oklch(58.5% 0.233 277.117);\n  --color-indigo-600: oklch(51.1% 0.262 276.966);\n  --color-indigo-700: oklch(45.7% 0.24 277.023);\n  --color-indigo-900: oklch(35.9% 0.144 278.697);\n  --color-violet-50: oklch(96.9% 0.016 293.756);\n  --color-violet-100: oklch(94.3% 0.029 294.588);\n  --color-violet-400: oklch(70.2% 0.183 293.541);\n  --color-violet-600: oklch(54.1% 0.281 293.009);\n  --color-violet-900: oklch(38% 0.189 293.745);\n  --color-violet-950: oklch(28.3% 0.141 291.089);\n  --color-purple-200: oklch(90.2% 0.063 306.703);\n  --color-purple-400: oklch(71.4% 0.203 305.504);\n  --color-purple-600: oklch(55.8% 0.288 302.321);\n  --color-purple-800: oklch(43.8% 0.218 303.724);\n  --color-fuchsia-500: oklch(66.7% 0.295 322.15);\n  --color-rose-500: oklch(64.5% 0.246 16.439);\n  --color-gray-50: oklch(98.5% 0.002 247.839);\n  --color-gray-100: oklch(96.7% 0.003 264.542);\n  --color-gray-200: oklch(92.8% 0.006 264.531);\n  --color-gray-300: oklch(87.2% 0.01 258.338);\n  --color-gray-400: oklch(70.7% 0.022 261.325);\n  --color-gray-500: oklch(55.1% 0.027 264.364);\n  --color-gray-600: oklch(44.6% 0.03 256.802);\n  --color-gray-700: oklch(37.3% 0.034 259.733);\n  --color-gray-800: oklch(27.8% 0.033 256.848);\n  --color-gray-900: oklch(21% 0.034 264.665);\n  --color-zinc-500: oklch(55.2% 0.016 285.938);\n  --color-zinc-900: oklch(21% 0.006 285.885);\n  --color-neutral-100: oklch(97% 0 0);\n  --color-neutral-200: oklch(92.2% 0 0);\n  --color-neutral-300: oklch(87% 0 0);\n  --color-neutral-400: oklch(70.8% 0 0);\n  --color-neutral-500: oklch(55.6% 0 0);\n  --color-neutral-600: oklch(43.9% 0 0);\n  --color-neutral-700: oklch(37.1% 0 0);\n  --color-neutral-800: oklch(26.9% 0 0);\n  --color-neutral-900: oklch(20.5% 0 0);\n  --color-neutral-950: oklch(14.5% 0 0);\n  --color-black: #000;\n  --color-white: #fff;\n  --spacing: 0.25rem;\n  --breakpoint-2xl: 96rem;\n  --container-2xs: 18rem;\n  --container-xs: 20rem;\n  --container-sm: 24rem;\n  --container-md: 28rem;\n  --container-lg: 32rem;\n  --container-xl: 36rem;\n  --container-2xl: 42rem;\n  --container-3xl: 48rem;\n  --container-4xl: 56rem;\n  --container-5xl: 64rem;\n  --container-6xl: 72rem;\n  --text-xl: 1.25rem;\n  --text-xl--line-height: calc(1.75 / 1.25);\n  --text-2xl: 1.5rem;\n  --text-2xl--line-height: calc(2 / 1.5);\n  --text-3xl: 1.875rem;\n  --text-3xl--line-height: calc(2.25 / 1.875);\n  --text-4xl: 2.25rem;\n  --text-4xl--line-height: calc(2.5 / 2.25);\n  --text-5xl: 3rem;\n  --text-5xl--line-height: 1;\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semibold: 600;\n  --font-weight-bold: 700;\n  --tracking-tight: -0.025em;\n  --tracking-normal: 0em;\n  --tracking-wide: 0.025em;\n  --tracking-widest: 0.1em;\n  --leading-tight: 1.25;\n  --leading-snug: 1.375;\n  --leading-normal: 1.5;\n  --leading-relaxed: 1.625;\n  --leading-loose: 2;\n  --radius-xs: 0.125rem;\n  --radius-sm: 0.25rem;\n  --radius-md: 0.375rem;\n  --radius-lg: 0.5rem;\n  --radius-xl: 0.75rem;\n  --radius-2xl: 1rem;\n  --radius-3xl: 1.5rem;\n  --ease-in: cubic-bezier(0.4, 0, 1, 1);\n  --ease-out: cubic-bezier(0, 0, 0.2, 1);\n  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n  --animate-spin: spin 1s linear infinite;\n  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --blur-xs: 4px;\n  --blur-sm: 8px;\n  --blur-md: 12px;\n  --aspect-video: 16 / 9;\n  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  --color-bg-primary: var(--color-surface);\n  --color-bg-secondary: var(--color-surface-secondary);\n  --text-color-primary: var(--color-white);\n  --color-cl1-white: var(--cf-white);\n  --color-cl1-black: var(--cf-black);\n  --color-cl1-red-1: var(--cf-red-1);\n  --color-cl1-red-2: var(--cf-red-2);\n  --color-cl1-red-3: var(--cf-red-3);\n  --color-cl1-red-4: var(--cf-red-4);\n  --color-cl1-red-5: var(--cf-red-5);\n  --color-cl1-red-6: var(--cf-red-6);\n  --color-cl1-red-7: var(--cf-red-7);\n  --color-cl1-red-8: var(--cf-red-8);\n  --color-cl1-red-9: var(--cf-red-9);\n  --color-cl1-orange-5: var(--cf-orange-5);\n  --color-cl1-gold-3: var(--cf-gold-3);\n  --color-cl1-gold-5: var(--cf-gold-5);\n  --color-cl1-gold-6: var(--cf-gold-6);\n  --color-cl1-gold-7: var(--cf-gold-7);\n  --color-cl1-green-3: var(--cf-green-3);\n  --color-cl1-green-6: var(--cf-green-6);\n  --color-cl1-cyan-1: var(--cf-cyan-1);\n  --color-cl1-cyan-7: var(--cf-cyan-7);\n  --color-cl1-cyan-8: var(--cf-cyan-8);\n  --color-cl1-cyan-9: var(--cf-cyan-9);\n  --color-cl1-blue-2: var(--cf-blue-2);\n  --color-cl1-blue-3: var(--cf-blue-3);\n  --color-cl1-blue-4: var(--cf-blue-4);\n  --color-cl1-blue-5: var(--cf-blue-5);\n  --color-cl1-blue-6: var(--cf-blue-6);\n  --color-cl1-blue-7: var(--cf-blue-7);\n  --color-cl1-blue-9: var(--cf-blue-9);\n  --color-cl1-violet-4: var(--cf-violet-4);\n  --color-cl1-violet-5: var(--cf-violet-5);\n  --color-cl1-pink-5: var(--cf-pink-5);\n  --color-cl1-pink-6: var(--cf-pink-6);\n  --color-cl1-gray-0: var(--cf-gray-0);\n  --color-cl1-gray-1: var(--cf-gray-1);\n  --color-cl1-gray-2: var(--cf-gray-2);\n  --color-cl1-gray-3: var(--cf-gray-3);\n  --color-cl1-gray-4: var(--cf-gray-4);\n  --color-cl1-gray-5: var(--cf-gray-5);\n  --color-cl1-gray-6: var(--cf-gray-6);\n  --color-cl1-gray-7: var(--cf-gray-7);\n  --color-cl1-gray-8: var(--cf-gray-8);\n  --color-cl1-gray-9: var(--cf-gray-9);\n  --color-cl1-new-gray-1: var(--cf-newGray-1);\n  --color-cl1-new-gray-2: var(--cf-newGray-2);\n  --fedramp-primary-text: #ffffff;\n  --fedramp-primary-background: #5b697c;\n  --fedramp-secondary-background: #525f70;\n  --fedramp-active-background: #c8d4e5;\n  --fedramp-hover-background: #3d4e67;\n  --color-fedramp-primary-text: var(--fedramp-primary-text);\n  --color-fedramp-primary-background: var(--fedramp-primary-background);\n}\n@layer base {\n  [data-theme="fedramp"] {\n    --color-kumo-base: light-dark(\n    #5b697c,\n    #5b697c\n  );\n    --color-kumo-ring: light-dark(\n    #c8d4e5,\n    #c8d4e5\n  );\n  }\n}\n@layer base {\n  :root {\n    color-scheme: light;\n  }\n  [data-mode="dark"] {\n    color-scheme: dark;\n  }\n}\n@layer utilities {\n  .no-scrollbar::-webkit-scrollbar {\n    display: none;\n  }\n  .no-scrollbar {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n  .no-input-spinner {\n    appearance: textfield;\n    ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {\n      appearance: none;\n    }\n  }\n  .link-current {\n    text-decoration-color: currentColor;\n    @supports (color: color-mix(in lab, red, red)) {\n      text-decoration-color: color-mix(in oklch, currentColor 35%, transparent);\n    }\n  }\n  [data-mode="dark"] .link-current {\n    text-decoration-color: currentColor;\n    @supports (color: color-mix(in lab, red, red)) {\n      text-decoration-color: color-mix(in oklch, currentColor 65%, transparent);\n    }\n  }\n  .link-current:hover {\n    text-decoration-color: currentColor;\n  }\n  .link-external-icon {\n    stroke-width: 1.75;\n  }\n  [data-mode="dark"] .link-external-icon {\n    stroke-width: 2;\n  }\n}\n.z-modal {\n  z-index: 9999;\n}\n@keyframes right {\n  to {\n    transform: translateX(100%);\n  }\n}\n.float {\n  animation: float 5s linear infinite alternate;\n}\n@keyframes float {\n  to {\n    transform: translate(5px, 15px);\n  }\n}\n@keyframes refresh {\n  to {\n    transform: rotate(360deg) scale(0.9);\n  }\n}\n@keyframes bounce-in {\n  0% {\n    transform: scale(0.6);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.animate-bounce-in {\n  animation: bounce-in 0.4s ease-out;\n}\n@keyframes shimmer {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n.skeleton-line {\n  position: relative;\n  overflow: hidden;\n  border-radius: 2px;\n  height: var(--skeleton-height, 0.5rem);\n  width: var(--skeleton-width);\n  background-color: #f3f4f6;\n}\n.skeleton-line::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  animation: shimmer var(--shimmer-duration, 1.5s) var(--shimmer-delay, 0s) infinite ease-in-out;\n  content: "";\n  background: linear-gradient( 90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 50%, rgba(0, 0, 0, 0) 100% );\n}\n[data-mode="dark"] .skeleton-line {\n  background-color: rgba(255, 255, 255, 0.06);\n}\n[data-mode="dark"] .skeleton-line::after {\n  background: linear-gradient( 90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100% );\n}\n[data-mode="dark"] .kumo-tooltip-popup, [data-mode="dark"] .kumo-popover-popup {\n  outline-offset: -1px;\n}\n@keyframes skeleton {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.skeleton {\n  background: linear-gradient( 90deg, transparent 0%, rgba(0, 0, 0, 0.05) 50%, transparent 100% );\n  background-size: 200% 100%;\n  animation: skeleton 1.5s ease-in-out infinite;\n}\n[data-mode="dark"] .skeleton {\n  background: linear-gradient( 90deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100% );\n}\n@keyframes refresh {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-refresh {\n  animation: refresh 1s linear infinite;\n}\n@layer theme;\n@layer theme;\n@layer utilities {\n  .\\@container\\/wireframe {\n    container-type: inline-size;\n    container-name: wireframe;\n  }\n  .\\@container {\n    container-type: inline-size;\n  }\n  .\\[pointer-events\\:inherit\\] {\n    pointer-events: inherit;\n  }\n  .pointer-events-auto {\n    pointer-events: auto;\n  }\n  .pointer-events-none {\n    pointer-events: none;\n  }\n  .collapse {\n    visibility: collapse;\n  }\n  .invisible {\n    visibility: hidden;\n  }\n  .visible {\n    visibility: visible;\n  }\n  .visible\\! {\n    visibility: visible !important;\n  }\n  .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip-path: inset(50%);\n    white-space: nowrap;\n    border-width: 0;\n  }\n  .not-sr-only {\n    position: static;\n    width: auto;\n    height: auto;\n    padding: 0;\n    margin: 0;\n    overflow: visible;\n    clip-path: none;\n    white-space: normal;\n  }\n  .\\!static {\n    position: static !important;\n  }\n  .absolute {\n    position: absolute;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .relative {\n    position: relative;\n  }\n  .relative\\! {\n    position: relative !important;\n  }\n  .static {\n    position: static;\n  }\n  .sticky {\n    position: sticky;\n  }\n  .-inset-0\\.5 {\n    inset: calc(var(--spacing) * -0.5);\n  }\n  .-inset-\\[9px\\] {\n    inset: calc(9px * -1);\n  }\n  .inset-0 {\n    inset: calc(var(--spacing) * 0);\n  }\n  .inset-1 {\n    inset: calc(var(--spacing) * 1);\n  }\n  .-inset-x-7 {\n    inset-inline: calc(var(--spacing) * -7);\n  }\n  .inset-x-0 {\n    inset-inline: calc(var(--spacing) * 0);\n  }\n  .inset-x-\\[-9px\\] {\n    inset-inline: -9px;\n  }\n  .inset-y-0 {\n    inset-block: calc(var(--spacing) * 0);\n  }\n  .inset-y-px {\n    inset-block: 1px;\n  }\n  .-top-0\\.5 {\n    top: calc(var(--spacing) * -0.5);\n  }\n  .-top-0\\.25 {\n    top: calc(var(--spacing) * -0.25);\n  }\n  .-top-0\\.75 {\n    top: calc(var(--spacing) * -0.75);\n  }\n  .-top-1 {\n    top: calc(var(--spacing) * -1);\n  }\n  .-top-7 {\n    top: calc(var(--spacing) * -7);\n  }\n  .-top-10 {\n    top: calc(var(--spacing) * -10);\n  }\n  .-top-11 {\n    top: calc(var(--spacing) * -11);\n  }\n  .-top-\\[0\\.5lh\\] {\n    top: calc(0.5lh * -1);\n  }\n  .-top-px {\n    top: -1px;\n  }\n  .top-\\(--active-tab-top\\) {\n    top: var(--active-tab-top);\n  }\n  .top-0 {\n    top: calc(var(--spacing) * 0);\n  }\n  .top-0\\! {\n    top: calc(var(--spacing) * 0) !important;\n  }\n  .top-0\\.5 {\n    top: calc(var(--spacing) * 0.5);\n  }\n  .top-0\\.25 {\n    top: calc(var(--spacing) * 0.25);\n  }\n  .top-1 {\n    top: calc(var(--spacing) * 1);\n  }\n  .top-1\\/2 {\n    top: calc(1/2 * 100%);\n  }\n  .top-1\\/3 {\n    top: calc(1/3 * 100%);\n  }\n  .top-2 {\n    top: calc(var(--spacing) * 2);\n  }\n  .top-2\\.5 {\n    top: calc(var(--spacing) * 2.5);\n  }\n  .top-3 {\n    top: calc(var(--spacing) * 3);\n  }\n  .top-4 {\n    top: calc(var(--spacing) * 4);\n  }\n  .top-5 {\n    top: calc(var(--spacing) * 5);\n  }\n  .top-6 {\n    top: calc(var(--spacing) * 6);\n  }\n  .top-8 {\n    top: calc(var(--spacing) * 8);\n  }\n  .top-9 {\n    top: calc(var(--spacing) * 9);\n  }\n  .top-12 {\n    top: calc(var(--spacing) * 12);\n  }\n  .top-20 {\n    top: calc(var(--spacing) * 20);\n  }\n  .top-22 {\n    top: calc(var(--spacing) * 22);\n  }\n  .top-24 {\n    top: calc(var(--spacing) * 24);\n  }\n  .top-42 {\n    top: calc(var(--spacing) * 42);\n  }\n  .top-45 {\n    top: calc(var(--spacing) * 45);\n  }\n  .top-48 {\n    top: calc(var(--spacing) * 48);\n  }\n  .top-64 {\n    top: calc(var(--spacing) * 64);\n  }\n  .top-\\[0\\.5px\\] {\n    top: 0.5px;\n  }\n  .top-\\[3px\\] {\n    top: 3px;\n  }\n  .top-\\[10vh\\] {\n    top: 10vh;\n  }\n  .top-\\[15px\\] {\n    top: 15px;\n  }\n  .top-\\[30\\%\\] {\n    top: 30%;\n  }\n  .top-\\[33px\\] {\n    top: 33px;\n  }\n  .top-\\[50\\%\\] {\n    top: 50%;\n  }\n  .top-\\[55px\\] {\n    top: 55px;\n  }\n  .top-\\[58px\\] {\n    top: 58px;\n  }\n  .top-\\[80px\\] {\n    top: 80px;\n  }\n  .top-\\[118px\\] {\n    top: 118px;\n  }\n  .top-\\[147px\\] {\n    top: 147px;\n  }\n  .top-\\[185px\\] {\n    top: 185px;\n  }\n  .top-\\[calc\\(50\\%-15px\\)\\] {\n    top: calc(50% - 15px);\n  }\n  .top-auto {\n    top: auto;\n  }\n  .top-full {\n    top: 100%;\n  }\n  .top-px {\n    top: 1px;\n  }\n  .-right-0\\.5 {\n    right: calc(var(--spacing) * -0.5);\n  }\n  .-right-1 {\n    right: calc(var(--spacing) * -1);\n  }\n  .-right-3 {\n    right: calc(var(--spacing) * -3);\n  }\n  .-right-4 {\n    right: calc(var(--spacing) * -4);\n  }\n  .right-0 {\n    right: calc(var(--spacing) * 0);\n  }\n  .right-0\\! {\n    right: calc(var(--spacing) * 0) !important;\n  }\n  .right-1 {\n    right: calc(var(--spacing) * 1);\n  }\n  .right-1\\.5 {\n    right: calc(var(--spacing) * 1.5);\n  }\n  .right-1\\/2 {\n    right: calc(1/2 * 100%);\n  }\n  .right-2 {\n    right: calc(var(--spacing) * 2);\n  }\n  .right-2\\.5 {\n    right: calc(var(--spacing) * 2.5);\n  }\n  .right-3 {\n    right: calc(var(--spacing) * 3);\n  }\n  .right-4 {\n    right: calc(var(--spacing) * 4);\n  }\n  .right-5 {\n    right: calc(var(--spacing) * 5);\n  }\n  .right-6 {\n    right: calc(var(--spacing) * 6);\n  }\n  .right-8 {\n    right: calc(var(--spacing) * 8);\n  }\n  .right-10 {\n    right: calc(var(--spacing) * 10);\n  }\n  .right-32 {\n    right: calc(var(--spacing) * 32);\n  }\n  .right-\\[calc\\(50\\%-12px\\)\\] {\n    right: calc(50% - 12px);\n  }\n  .right-\\[calc\\(100\\%\\+3rem\\)\\] {\n    right: calc(100% + 3rem);\n  }\n  .right-full {\n    right: 100%;\n  }\n  .\\!bottom-20 {\n    bottom: calc(var(--spacing) * 20) !important;\n  }\n  .-bottom-\\[3px\\] {\n    bottom: calc(3px * -1);\n  }\n  .bottom-0 {\n    bottom: calc(var(--spacing) * 0);\n  }\n  .bottom-0\\.5 {\n    bottom: calc(var(--spacing) * 0.5);\n  }\n  .bottom-1 {\n    bottom: calc(var(--spacing) * 1);\n  }\n  .bottom-2 {\n    bottom: calc(var(--spacing) * 2);\n  }\n  .bottom-2\\.5 {\n    bottom: calc(var(--spacing) * 2.5);\n  }\n  .bottom-3 {\n    bottom: calc(var(--spacing) * 3);\n  }\n  .bottom-4 {\n    bottom: calc(var(--spacing) * 4);\n  }\n  .bottom-5 {\n    bottom: calc(var(--spacing) * 5);\n  }\n  .bottom-\\[5px\\] {\n    bottom: 5px;\n  }\n  .-left-1 {\n    left: calc(var(--spacing) * -1);\n  }\n  .-left-1\\.5 {\n    left: calc(var(--spacing) * -1.5);\n  }\n  .-left-3 {\n    left: calc(var(--spacing) * -3);\n  }\n  .-left-4 {\n    left: calc(var(--spacing) * -4);\n  }\n  .-left-\\[5px\\] {\n    left: calc(5px * -1);\n  }\n  .left-\\(--active-tab-left\\) {\n    left: var(--active-tab-left);\n  }\n  .left-0 {\n    left: calc(var(--spacing) * 0);\n  }\n  .left-1 {\n    left: calc(var(--spacing) * 1);\n  }\n  .left-1\\/2 {\n    left: calc(1/2 * 100%);\n  }\n  .left-2 {\n    left: calc(var(--spacing) * 2);\n  }\n  .left-2\\.5 {\n    left: calc(var(--spacing) * 2.5);\n  }\n  .left-3 {\n    left: calc(var(--spacing) * 3);\n  }\n  .left-4 {\n    left: calc(var(--spacing) * 4);\n  }\n  .left-5 {\n    left: calc(var(--spacing) * 5);\n  }\n  .left-6 {\n    left: calc(var(--spacing) * 6);\n  }\n  .left-8 {\n    left: calc(var(--spacing) * 8);\n  }\n  .left-16 {\n    left: calc(var(--spacing) * 16);\n  }\n  .left-\\[-6px\\] {\n    left: -6px;\n  }\n  .left-\\[13px\\] {\n    left: 13px;\n  }\n  .left-\\[19px\\] {\n    left: 19px;\n  }\n  .left-\\[105px\\] {\n    left: 105px;\n  }\n  .left-\\[calc\\(50\\%-12px\\)\\] {\n    left: calc(50% - 12px);\n  }\n  .left-auto {\n    left: auto;\n  }\n  .left-full {\n    left: 100%;\n  }\n  .isolate {\n    isolation: isolate;\n  }\n  .isolation-auto {\n    isolation: auto;\n  }\n  .\\!z-100 {\n    z-index: 100 !important;\n  }\n  .-z-10 {\n    z-index: calc(10 * -1);\n  }\n  .z-0 {\n    z-index: 0;\n  }\n  .z-1 {\n    z-index: 1;\n  }\n  .z-5 {\n    z-index: 5;\n  }\n  .z-10 {\n    z-index: 10;\n  }\n  .z-15 {\n    z-index: 15;\n  }\n  .z-20 {\n    z-index: 20;\n  }\n  .z-30 {\n    z-index: 30;\n  }\n  .z-40 {\n    z-index: 40;\n  }\n  .z-50 {\n    z-index: 50;\n  }\n  .z-60 {\n    z-index: 60;\n  }\n  .z-100 {\n    z-index: 100;\n  }\n  .z-1000 {\n    z-index: 1000;\n  }\n  .z-\\[1\\] {\n    z-index: 1;\n  }\n  .z-\\[99\\] {\n    z-index: 99;\n  }\n  .z-\\[100\\] {\n    z-index: 100;\n  }\n  .z-\\[201\\] {\n    z-index: 201;\n  }\n  .z-\\[998\\] {\n    z-index: 998;\n  }\n  .z-\\[999\\] {\n    z-index: 999;\n  }\n  .z-\\[1000\\] {\n    z-index: 1000;\n  }\n  .z-\\[1100\\] {\n    z-index: 1100;\n  }\n  .z-\\[1150\\] {\n    z-index: 1150;\n  }\n  .z-\\[9999\\] {\n    z-index: 9999;\n  }\n  .z-\\[10000\\] {\n    z-index: 10000;\n  }\n  .z-\\[10001\\] {\n    z-index: 10001;\n  }\n  .z-\\[99999\\] {\n    z-index: 99999;\n  }\n  .z-\\[calc\\(1000-var\\(--toast-index\\)\\)\\] {\n    z-index: calc(1000 - var(--toast-index));\n  }\n  .-order-1 {\n    order: calc(1 * -1);\n  }\n  .order-1 {\n    order: 1;\n  }\n  .col-\\[1\\] {\n    grid-column: 1;\n  }\n  .col-\\[2\\] {\n    grid-column: 2;\n  }\n  .col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n  .col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n  .col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n  .col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n  .col-span-5 {\n    grid-column: span 5 / span 5;\n  }\n  .col-span-6 {\n    grid-column: span 6 / span 6;\n  }\n  .col-span-7 {\n    grid-column: span 7 / span 7;\n  }\n  .col-span-full {\n    grid-column: 1 / -1;\n  }\n  .\\!col-start-1 {\n    grid-column-start: 1 !important;\n  }\n  .col-start-1 {\n    grid-column-start: 1;\n  }\n  .col-start-2 {\n    grid-column-start: 2;\n  }\n  .row-0 {\n    grid-row: 0;\n  }\n  .row-1 {\n    grid-row: 1;\n  }\n  .row-2 {\n    grid-row: 2;\n  }\n  .row-4 {\n    grid-row: 4;\n  }\n  .row-span-2 {\n    grid-row: span 2 / span 2;\n  }\n  .row-start-1 {\n    grid-row-start: 1;\n  }\n  .row-start-5 {\n    grid-row-start: 5;\n  }\n  .float-right {\n    float: right;\n  }\n  .container {\n    width: 100%;\n    @media (width >= 40rem) {\n      max-width: 40rem;\n    }\n    @media (width >= 48rem) {\n      max-width: 48rem;\n    }\n    @media (width >= 64rem) {\n      max-width: 64rem;\n    }\n    @media (width >= 80rem) {\n      max-width: 80rem;\n    }\n    @media (width >= 96rem) {\n      max-width: 96rem;\n    }\n  }\n  .\\!m-0 {\n    margin: calc(var(--spacing) * 0) !important;\n  }\n  .\\!m-1 {\n    margin: calc(var(--spacing) * 1) !important;\n  }\n  .-m-1 {\n    margin: calc(var(--spacing) * -1);\n  }\n  .-m-2 {\n    margin: calc(var(--spacing) * -2);\n  }\n  .-m-\\[1px\\] {\n    margin: calc(1px * -1);\n  }\n  .-m-px {\n    margin: -1px;\n  }\n  .m-0 {\n    margin: calc(var(--spacing) * 0);\n  }\n  .m-0\\! {\n    margin: calc(var(--spacing) * 0) !important;\n  }\n  .m-1 {\n    margin: calc(var(--spacing) * 1);\n  }\n  .m-2 {\n    margin: calc(var(--spacing) * 2);\n  }\n  .m-4 {\n    margin: calc(var(--spacing) * 4);\n  }\n  .m-8 {\n    margin: calc(var(--spacing) * 8);\n  }\n  .m-auto {\n    margin: auto;\n  }\n  .\\!mx-0 {\n    margin-inline: calc(var(--spacing) * 0) !important;\n  }\n  .-mx-0\\.5 {\n    margin-inline: calc(var(--spacing) * -0.5);\n  }\n  .-mx-1 {\n    margin-inline: calc(var(--spacing) * -1);\n  }\n  .-mx-1\\.5 {\n    margin-inline: calc(var(--spacing) * -1.5);\n  }\n  .-mx-2 {\n    margin-inline: calc(var(--spacing) * -2);\n  }\n  .-mx-4 {\n    margin-inline: calc(var(--spacing) * -4);\n  }\n  .-mx-5 {\n    margin-inline: calc(var(--spacing) * -5);\n  }\n  .-mx-6 {\n    margin-inline: calc(var(--spacing) * -6);\n  }\n  .-mx-7 {\n    margin-inline: calc(var(--spacing) * -7);\n  }\n  .-mx-px {\n    margin-inline: -1px;\n  }\n  .mx-0 {\n    margin-inline: calc(var(--spacing) * 0);\n  }\n  .mx-0\\.5 {\n    margin-inline: calc(var(--spacing) * 0.5);\n  }\n  .mx-1 {\n    margin-inline: calc(var(--spacing) * 1);\n  }\n  .mx-1\\.5 {\n    margin-inline: calc(var(--spacing) * 1.5);\n  }\n  .mx-2 {\n    margin-inline: calc(var(--spacing) * 2);\n  }\n  .mx-3 {\n    margin-inline: calc(var(--spacing) * 3);\n  }\n  .mx-4 {\n    margin-inline: calc(var(--spacing) * 4);\n  }\n  .mx-6 {\n    margin-inline: calc(var(--spacing) * 6);\n  }\n  .mx-8 {\n    margin-inline: calc(var(--spacing) * 8);\n  }\n  .mx-auto {\n    margin-inline: auto;\n  }\n  .\\!my-0 {\n    margin-block: calc(var(--spacing) * 0) !important;\n  }\n  .\\!my-4 {\n    margin-block: calc(var(--spacing) * 4) !important;\n  }\n  .-my-0\\.5 {\n    margin-block: calc(var(--spacing) * -0.5);\n  }\n  .-my-1 {\n    margin-block: calc(var(--spacing) * -1);\n  }\n  .-my-2 {\n    margin-block: calc(var(--spacing) * -2);\n  }\n  .my-0 {\n    margin-block: calc(var(--spacing) * 0);\n  }\n  .my-0\\! {\n    margin-block: calc(var(--spacing) * 0) !important;\n  }\n  .my-1 {\n    margin-block: calc(var(--spacing) * 1);\n  }\n  .my-2 {\n    margin-block: calc(var(--spacing) * 2);\n  }\n  .my-3 {\n    margin-block: calc(var(--spacing) * 3);\n  }\n  .my-4 {\n    margin-block: calc(var(--spacing) * 4);\n  }\n  .my-5 {\n    margin-block: calc(var(--spacing) * 5);\n  }\n  .my-6 {\n    margin-block: calc(var(--spacing) * 6);\n  }\n  .my-8 {\n    margin-block: calc(var(--spacing) * 8);\n  }\n  .my-12 {\n    margin-block: calc(var(--spacing) * 12);\n  }\n  .my-\\[0\\.5px\\] {\n    margin-block: 0.5px;\n  }\n  .my-\\[1px\\] {\n    margin-block: 1px;\n  }\n  .my-auto {\n    margin-block: auto;\n  }\n  .my-px {\n    margin-block: 1px;\n  }\n  .ms-1\\.5 {\n    margin-inline-start: calc(var(--spacing) * 1.5);\n  }\n  .\\!-mt-0\\.5 {\n    margin-top: calc(var(--spacing) * -0.5) !important;\n  }\n  .\\!mt-0 {\n    margin-top: calc(var(--spacing) * 0) !important;\n  }\n  .\\!mt-1 {\n    margin-top: calc(var(--spacing) * 1) !important;\n  }\n  .\\!mt-2 {\n    margin-top: calc(var(--spacing) * 2) !important;\n  }\n  .\\!mt-3 {\n    margin-top: calc(var(--spacing) * 3) !important;\n  }\n  .\\!mt-4 {\n    margin-top: calc(var(--spacing) * 4) !important;\n  }\n  .\\!mt-5 {\n    margin-top: calc(var(--spacing) * 5) !important;\n  }\n  .\\!mt-6 {\n    margin-top: calc(var(--spacing) * 6) !important;\n  }\n  .\\!mt-\\[1px\\] {\n    margin-top: 1px !important;\n  }\n  .-mt-0\\.5 {\n    margin-top: calc(var(--spacing) * -0.5);\n  }\n  .-mt-1 {\n    margin-top: calc(var(--spacing) * -1);\n  }\n  .-mt-1\\.5 {\n    margin-top: calc(var(--spacing) * -1.5);\n  }\n  .-mt-2 {\n    margin-top: calc(var(--spacing) * -2);\n  }\n  .-mt-3\\.5 {\n    margin-top: calc(var(--spacing) * -3.5);\n  }\n  .-mt-4 {\n    margin-top: calc(var(--spacing) * -4);\n  }\n  .-mt-6 {\n    margin-top: calc(var(--spacing) * -6);\n  }\n  .-mt-6\\.5 {\n    margin-top: calc(var(--spacing) * -6.5);\n  }\n  .-mt-11 {\n    margin-top: calc(var(--spacing) * -11);\n  }\n  .-mt-\\[3px\\] {\n    margin-top: calc(3px * -1);\n  }\n  .mt-0 {\n    margin-top: calc(var(--spacing) * 0);\n  }\n  .mt-0\\.5 {\n    margin-top: calc(var(--spacing) * 0.5);\n  }\n  .mt-0\\.5\\! {\n    margin-top: calc(var(--spacing) * 0.5) !important;\n  }\n  .mt-1 {\n    margin-top: calc(var(--spacing) * 1);\n  }\n  .mt-1\\.5 {\n    margin-top: calc(var(--spacing) * 1.5);\n  }\n  .mt-2 {\n    margin-top: calc(var(--spacing) * 2);\n  }\n  .mt-2\\.5 {\n    margin-top: calc(var(--spacing) * 2.5);\n  }\n  .mt-3 {\n    margin-top: calc(var(--spacing) * 3);\n  }\n  .mt-3\\.5 {\n    margin-top: calc(var(--spacing) * 3.5);\n  }\n  .mt-4 {\n    margin-top: calc(var(--spacing) * 4);\n  }\n  .mt-5 {\n    margin-top: calc(var(--spacing) * 5);\n  }\n  .mt-5\\.5 {\n    margin-top: calc(var(--spacing) * 5.5);\n  }\n  .mt-6 {\n    margin-top: calc(var(--spacing) * 6);\n  }\n  .mt-6\\.5 {\n    margin-top: calc(var(--spacing) * 6.5);\n  }\n  .mt-7 {\n    margin-top: calc(var(--spacing) * 7);\n  }\n  .mt-7\\.5 {\n    margin-top: calc(var(--spacing) * 7.5);\n  }\n  .mt-8 {\n    margin-top: calc(var(--spacing) * 8);\n  }\n  .mt-9 {\n    margin-top: calc(var(--spacing) * 9);\n  }\n  .mt-10 {\n    margin-top: calc(var(--spacing) * 10);\n  }\n  .mt-12 {\n    margin-top: calc(var(--spacing) * 12);\n  }\n  .mt-\\[-4px\\] {\n    margin-top: -4px;\n  }\n  .mt-\\[-8px\\] {\n    margin-top: -8px;\n  }\n  .mt-\\[1px\\] {\n    margin-top: 1px;\n  }\n  .mt-\\[5px\\] {\n    margin-top: 5px;\n  }\n  .mt-\\[6px\\] {\n    margin-top: 6px;\n  }\n  .mt-\\[10px\\] {\n    margin-top: 10px;\n  }\n  .mt-\\[16px\\] {\n    margin-top: 16px;\n  }\n  .mt-auto {\n    margin-top: auto;\n  }\n  .mt-px {\n    margin-top: 1px;\n  }\n  .\\!-mr-\\[13px\\] {\n    margin-right: calc(13px * -1) !important;\n  }\n  .\\!mr-0 {\n    margin-right: calc(var(--spacing) * 0) !important;\n  }\n  .\\!mr-1 {\n    margin-right: calc(var(--spacing) * 1) !important;\n  }\n  .\\!mr-\\[1px\\] {\n    margin-right: 1px !important;\n  }\n  .-mr-1 {\n    margin-right: calc(var(--spacing) * -1);\n  }\n  .-mr-2 {\n    margin-right: calc(var(--spacing) * -2);\n  }\n  .-mr-3 {\n    margin-right: calc(var(--spacing) * -3);\n  }\n  .-mr-3\\.5 {\n    margin-right: calc(var(--spacing) * -3.5);\n  }\n  .-mr-\\[5px\\] {\n    margin-right: calc(5px * -1);\n  }\n  .-mr-px {\n    margin-right: -1px;\n  }\n  .mr-0 {\n    margin-right: calc(var(--spacing) * 0);\n  }\n  .mr-1 {\n    margin-right: calc(var(--spacing) * 1);\n  }\n  .mr-1\\.5 {\n    margin-right: calc(var(--spacing) * 1.5);\n  }\n  .mr-2 {\n    margin-right: calc(var(--spacing) * 2);\n  }\n  .mr-3 {\n    margin-right: calc(var(--spacing) * 3);\n  }\n  .mr-4 {\n    margin-right: calc(var(--spacing) * 4);\n  }\n  .mr-6 {\n    margin-right: calc(var(--spacing) * 6);\n  }\n  .mr-8 {\n    margin-right: calc(var(--spacing) * 8);\n  }\n  .mr-16 {\n    margin-right: calc(var(--spacing) * 16);\n  }\n  .mr-\\[-4px\\] {\n    margin-right: -4px;\n  }\n  .mr-\\[-12px\\] {\n    margin-right: -12px;\n  }\n  .mr-\\[1px\\] {\n    margin-right: 1px;\n  }\n  .mr-\\[4px\\] {\n    margin-right: 4px;\n  }\n  .mr-auto {\n    margin-right: auto;\n  }\n  .mr-px {\n    margin-right: 1px;\n  }\n  .\\!-mb-20 {\n    margin-bottom: calc(var(--spacing) * -20) !important;\n  }\n  .\\!mb-0 {\n    margin-bottom: calc(var(--spacing) * 0) !important;\n  }\n  .\\!mb-1\\.5 {\n    margin-bottom: calc(var(--spacing) * 1.5) !important;\n  }\n  .\\!mb-2 {\n    margin-bottom: calc(var(--spacing) * 2) !important;\n  }\n  .\\!mb-2\\.5 {\n    margin-bottom: calc(var(--spacing) * 2.5) !important;\n  }\n  .\\!mb-3 {\n    margin-bottom: calc(var(--spacing) * 3) !important;\n  }\n  .\\!mb-4 {\n    margin-bottom: calc(var(--spacing) * 4) !important;\n  }\n  .-mb-0\\.5 {\n    margin-bottom: calc(var(--spacing) * -0.5);\n  }\n  .-mb-1 {\n    margin-bottom: calc(var(--spacing) * -1);\n  }\n  .-mb-1\\.5 {\n    margin-bottom: calc(var(--spacing) * -1.5);\n  }\n  .-mb-2 {\n    margin-bottom: calc(var(--spacing) * -2);\n  }\n  .-mb-4 {\n    margin-bottom: calc(var(--spacing) * -4);\n  }\n  .-mb-5 {\n    margin-bottom: calc(var(--spacing) * -5);\n  }\n  .-mb-6 {\n    margin-bottom: calc(var(--spacing) * -6);\n  }\n  .-mb-7 {\n    margin-bottom: calc(var(--spacing) * -7);\n  }\n  .-mb-\\[1px\\] {\n    margin-bottom: calc(1px * -1);\n  }\n  .-mb-\\[3px\\] {\n    margin-bottom: calc(3px * -1);\n  }\n  .-mb-\\[41px\\] {\n    margin-bottom: calc(41px * -1);\n  }\n  .-mb-px {\n    margin-bottom: -1px;\n  }\n  .mb-0 {\n    margin-bottom: calc(var(--spacing) * 0);\n  }\n  .mb-0\\! {\n    margin-bottom: calc(var(--spacing) * 0) !important;\n  }\n  .mb-0\\.5 {\n    margin-bottom: calc(var(--spacing) * 0.5);\n  }\n  .mb-1 {\n    margin-bottom: calc(var(--spacing) * 1);\n  }\n  .mb-1\\.5 {\n    margin-bottom: calc(var(--spacing) * 1.5);\n  }\n  .mb-2 {\n    margin-bottom: calc(var(--spacing) * 2);\n  }\n  .mb-2\\.5 {\n    margin-bottom: calc(var(--spacing) * 2.5);\n  }\n  .mb-3 {\n    margin-bottom: calc(var(--spacing) * 3);\n  }\n  .mb-3\\! {\n    margin-bottom: calc(var(--spacing) * 3) !important;\n  }\n  .mb-4 {\n    margin-bottom: calc(var(--spacing) * 4);\n  }\n  .mb-5 {\n    margin-bottom: calc(var(--spacing) * 5);\n  }\n  .mb-6 {\n    margin-bottom: calc(var(--spacing) * 6);\n  }\n  .mb-6\\.5 {\n    margin-bottom: calc(var(--spacing) * 6.5);\n  }\n  .mb-7 {\n    margin-bottom: calc(var(--spacing) * 7);\n  }\n  .mb-8 {\n    margin-bottom: calc(var(--spacing) * 8);\n  }\n  .mb-12 {\n    margin-bottom: calc(var(--spacing) * 12);\n  }\n  .mb-\\[2px\\] {\n    margin-bottom: 2px;\n  }\n  .mb-\\[3px\\] {\n    margin-bottom: 3px;\n  }\n  .mb-\\[5px\\] {\n    margin-bottom: 5px;\n  }\n  .mb-\\[60px\\] {\n    margin-bottom: 60px;\n  }\n  .mb-\\[unset\\] {\n    margin-bottom: unset;\n  }\n  .mb-auto {\n    margin-bottom: auto;\n  }\n  .\\!-ml-1 {\n    margin-left: calc(var(--spacing) * -1) !important;\n  }\n  .\\!ml-0 {\n    margin-left: calc(var(--spacing) * 0) !important;\n  }\n  .\\!ml-0\\.5 {\n    margin-left: calc(var(--spacing) * 0.5) !important;\n  }\n  .\\!ml-6 {\n    margin-left: calc(var(--spacing) * 6) !important;\n  }\n  .-ml-0\\.5 {\n    margin-left: calc(var(--spacing) * -0.5);\n  }\n  .-ml-1 {\n    margin-left: calc(var(--spacing) * -1);\n  }\n  .-ml-2 {\n    margin-left: calc(var(--spacing) * -2);\n  }\n  .-ml-3 {\n    margin-left: calc(var(--spacing) * -3);\n  }\n  .-ml-3\\.5 {\n    margin-left: calc(var(--spacing) * -3.5);\n  }\n  .-ml-4 {\n    margin-left: calc(var(--spacing) * -4);\n  }\n  .-ml-\\[1px\\] {\n    margin-left: calc(1px * -1);\n  }\n  .-ml-px {\n    margin-left: -1px;\n  }\n  .ml-0 {\n    margin-left: calc(var(--spacing) * 0);\n  }\n  .ml-0\\! {\n    margin-left: calc(var(--spacing) * 0) !important;\n  }\n  .ml-0\\.5 {\n    margin-left: calc(var(--spacing) * 0.5);\n  }\n  .ml-1 {\n    margin-left: calc(var(--spacing) * 1);\n  }\n  .ml-1\\.5 {\n    margin-left: calc(var(--spacing) * 1.5);\n  }\n  .ml-2 {\n    margin-left: calc(var(--spacing) * 2);\n  }\n  .ml-3 {\n    margin-left: calc(var(--spacing) * 3);\n  }\n  .ml-4 {\n    margin-left: calc(var(--spacing) * 4);\n  }\n  .ml-5 {\n    margin-left: calc(var(--spacing) * 5);\n  }\n  .ml-6 {\n    margin-left: calc(var(--spacing) * 6);\n  }\n  .ml-7 {\n    margin-left: calc(var(--spacing) * 7);\n  }\n  .ml-9\\.5 {\n    margin-left: calc(var(--spacing) * 9.5);\n  }\n  .ml-11 {\n    margin-left: calc(var(--spacing) * 11);\n  }\n  .ml-\\[-\\.5rem\\] {\n    margin-left: -.5rem;\n  }\n  .ml-\\[-6px\\] {\n    margin-left: -6px;\n  }\n  .ml-\\[-96px\\] {\n    margin-left: -96px;\n  }\n  .ml-\\[1px\\] {\n    margin-left: 1px;\n  }\n  .ml-\\[16px\\] {\n    margin-left: 16px;\n  }\n  .ml-auto {\n    margin-left: auto;\n  }\n  .box-border {\n    box-sizing: border-box;\n  }\n  .\\!line-clamp-none {\n    overflow: visible !important;\n    display: block !important;\n    -webkit-box-orient: horizontal !important;\n    -webkit-line-clamp: unset !important;\n  }\n  .line-clamp-1 {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 1;\n  }\n  .line-clamp-2 {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n  }\n  .\\!flex {\n    display: flex !important;\n  }\n  .\\!grid {\n    display: grid !important;\n  }\n  .\\!inline-flex {\n    display: inline-flex !important;\n  }\n  .block {\n    display: block;\n  }\n  .contents {\n    display: contents;\n  }\n  .flex {\n    display: flex;\n  }\n  .flow-root {\n    display: flow-root;\n  }\n  .grid {\n    display: grid;\n  }\n  .hidden {\n    display: none;\n  }\n  .inline {\n    display: inline;\n  }\n  .inline-block {\n    display: inline-block;\n  }\n  .inline-flex {\n    display: inline-flex;\n  }\n  .inline-grid {\n    display: inline-grid;\n  }\n  .inline-table {\n    display: inline-table;\n  }\n  .list-item {\n    display: list-item;\n  }\n  .table {\n    display: table;\n  }\n  .table-caption {\n    display: table-caption;\n  }\n  .table-cell {\n    display: table-cell;\n  }\n  .table-column {\n    display: table-column;\n  }\n  .table-column-group {\n    display: table-column-group;\n  }\n  .table-footer-group {\n    display: table-footer-group;\n  }\n  .table-header-group {\n    display: table-header-group;\n  }\n  .table-row {\n    display: table-row;\n  }\n  .table-row-group {\n    display: table-row-group;\n  }\n  .\\[field-sizing\\:content\\] {\n    field-sizing: content;\n  }\n  .aspect-\\[16\\/9\\] {\n    aspect-ratio: 16/9;\n  }\n  .aspect-square {\n    aspect-ratio: 1 / 1;\n  }\n  .aspect-video {\n    aspect-ratio: var(--aspect-video);\n  }\n  .size-1 {\n    width: calc(var(--spacing) * 1);\n    height: calc(var(--spacing) * 1);\n  }\n  .size-1\\.5 {\n    width: calc(var(--spacing) * 1.5);\n    height: calc(var(--spacing) * 1.5);\n  }\n  .size-2 {\n    width: calc(var(--spacing) * 2);\n    height: calc(var(--spacing) * 2);\n  }\n  .size-2\\.5 {\n    width: calc(var(--spacing) * 2.5);\n    height: calc(var(--spacing) * 2.5);\n  }\n  .size-3 {\n    width: calc(var(--spacing) * 3);\n    height: calc(var(--spacing) * 3);\n  }\n  .size-3\\.5 {\n    width: calc(var(--spacing) * 3.5);\n    height: calc(var(--spacing) * 3.5);\n  }\n  .size-4 {\n    width: calc(var(--spacing) * 4);\n    height: calc(var(--spacing) * 4);\n  }\n  .size-4\\.5 {\n    width: calc(var(--spacing) * 4.5);\n    height: calc(var(--spacing) * 4.5);\n  }\n  .size-5 {\n    width: calc(var(--spacing) * 5);\n    height: calc(var(--spacing) * 5);\n  }\n  .size-6 {\n    width: calc(var(--spacing) * 6);\n    height: calc(var(--spacing) * 6);\n  }\n  .size-6\\.5 {\n    width: calc(var(--spacing) * 6.5);\n    height: calc(var(--spacing) * 6.5);\n  }\n  .size-7 {\n    width: calc(var(--spacing) * 7);\n    height: calc(var(--spacing) * 7);\n  }\n  .size-7\\.5 {\n    width: calc(var(--spacing) * 7.5);\n    height: calc(var(--spacing) * 7.5);\n  }\n  .size-8 {\n    width: calc(var(--spacing) * 8);\n    height: calc(var(--spacing) * 8);\n  }\n  .size-8\\.5 {\n    width: calc(var(--spacing) * 8.5);\n    height: calc(var(--spacing) * 8.5);\n  }\n  .size-9 {\n    width: calc(var(--spacing) * 9);\n    height: calc(var(--spacing) * 9);\n  }\n  .size-10 {\n    width: calc(var(--spacing) * 10);\n    height: calc(var(--spacing) * 10);\n  }\n  .size-12 {\n    width: calc(var(--spacing) * 12);\n    height: calc(var(--spacing) * 12);\n  }\n  .size-15 {\n    width: calc(var(--spacing) * 15);\n    height: calc(var(--spacing) * 15);\n  }\n  .size-\\[7px\\] {\n    width: 7px;\n    height: 7px;\n  }\n  .size-\\[15px\\] {\n    width: 15px;\n    height: 15px;\n  }\n  .size-\\[22px\\] {\n    width: 22px;\n    height: 22px;\n  }\n  .size-\\[26px\\] {\n    width: 26px;\n    height: 26px;\n  }\n  .size-\\[72px\\] {\n    width: 72px;\n    height: 72px;\n  }\n  .size-full {\n    width: 100%;\n    height: 100%;\n  }\n  .\\!h-3\\.5 {\n    height: calc(var(--spacing) * 3.5) !important;\n  }\n  .\\!h-7 {\n    height: calc(var(--spacing) * 7) !important;\n  }\n  .\\!h-8 {\n    height: calc(var(--spacing) * 8) !important;\n  }\n  .\\!h-\\[34px\\] {\n    height: 34px !important;\n  }\n  .\\!h-\\[350px\\] {\n    height: 350px !important;\n  }\n  .\\!h-auto {\n    height: auto !important;\n  }\n  .\\!h-fit {\n    height: fit-content !important;\n  }\n  .\\!h-full {\n    height: 100% !important;\n  }\n  .h-\\(--active-tab-height\\) {\n    height: var(--active-tab-height);\n  }\n  .h-\\(--connector-height\\) {\n    height: var(--connector-height);\n  }\n  .h-0 {\n    height: calc(var(--spacing) * 0);\n  }\n  .h-0\\.5 {\n    height: calc(var(--spacing) * 0.5);\n  }\n  .h-1 {\n    height: calc(var(--spacing) * 1);\n  }\n  .h-1\\.5 {\n    height: calc(var(--spacing) * 1.5);\n  }\n  .h-2 {\n    height: calc(var(--spacing) * 2);\n  }\n  .h-2\\.5 {\n    height: calc(var(--spacing) * 2.5);\n  }\n  .h-3 {\n    height: calc(var(--spacing) * 3);\n  }\n  .h-3\\.5 {\n    height: calc(var(--spacing) * 3.5);\n  }\n  .h-4 {\n    height: calc(var(--spacing) * 4);\n  }\n  .h-4\\.5 {\n    height: calc(var(--spacing) * 4.5);\n  }\n  .h-5 {\n    height: calc(var(--spacing) * 5);\n  }\n  .h-5\\.5 {\n    height: calc(var(--spacing) * 5.5);\n  }\n  .h-6 {\n    height: calc(var(--spacing) * 6);\n  }\n  .h-6\\.5 {\n    height: calc(var(--spacing) * 6.5);\n  }\n  .h-7 {\n    height: calc(var(--spacing) * 7);\n  }\n  .h-7\\.5 {\n    height: calc(var(--spacing) * 7.5);\n  }\n  .h-8 {\n    height: calc(var(--spacing) * 8);\n  }\n  .h-8\\.5 {\n    height: calc(var(--spacing) * 8.5);\n  }\n  .h-8\\/10 {\n    height: calc(8/10 * 100%);\n  }\n  .h-9 {\n    height: calc(var(--spacing) * 9);\n  }\n  .h-9\\.5 {\n    height: calc(var(--spacing) * 9.5);\n  }\n  .h-10 {\n    height: calc(var(--spacing) * 10);\n  }\n  .h-11 {\n    height: calc(var(--spacing) * 11);\n  }\n  .h-12 {\n    height: calc(var(--spacing) * 12);\n  }\n  .h-13 {\n    height: calc(var(--spacing) * 13);\n  }\n  .h-14 {\n    height: calc(var(--spacing) * 14);\n  }\n  .h-16 {\n    height: calc(var(--spacing) * 16);\n  }\n  .h-20 {\n    height: calc(var(--spacing) * 20);\n  }\n  .h-32 {\n    height: calc(var(--spacing) * 32);\n  }\n  .h-44 {\n    height: calc(var(--spacing) * 44);\n  }\n  .h-46 {\n    height: calc(var(--spacing) * 46);\n  }\n  .h-48 {\n    height: calc(var(--spacing) * 48);\n  }\n  .h-64 {\n    height: calc(var(--spacing) * 64);\n  }\n  .h-80 {\n    height: calc(var(--spacing) * 80);\n  }\n  .h-96 {\n    height: calc(var(--spacing) * 96);\n  }\n  .h-\\[0\\.5px\\] {\n    height: 0.5px;\n  }\n  .h-\\[1lh\\] {\n    height: 1lh;\n  }\n  .h-\\[1px\\] {\n    height: 1px;\n  }\n  .h-\\[5px\\] {\n    height: 5px;\n  }\n  .h-\\[10px\\] {\n    height: 10px;\n  }\n  .h-\\[14px\\] {\n    height: 14px;\n  }\n  .h-\\[18px\\] {\n    height: 18px;\n  }\n  .h-\\[19px\\] {\n    height: 19px;\n  }\n  .h-\\[20px\\] {\n    height: 20px;\n  }\n  .h-\\[22px\\] {\n    height: 22px;\n  }\n  .h-\\[24px\\] {\n    height: 24px;\n  }\n  .h-\\[25px\\] {\n    height: 25px;\n  }\n  .h-\\[26px\\] {\n    height: 26px;\n  }\n  .h-\\[28px\\] {\n    height: 28px;\n  }\n  .h-\\[30px\\] {\n    height: 30px;\n  }\n  .h-\\[32px\\] {\n    height: 32px;\n  }\n  .h-\\[34px\\] {\n    height: 34px;\n  }\n  .h-\\[35px\\] {\n    height: 35px;\n  }\n  .h-\\[36px\\] {\n    height: 36px;\n  }\n  .h-\\[40px\\] {\n    height: 40px;\n  }\n  .h-\\[41px\\] {\n    height: 41px;\n  }\n  .h-\\[42px\\] {\n    height: 42px;\n  }\n  .h-\\[45px\\] {\n    height: 45px;\n  }\n  .h-\\[46px\\] {\n    height: 46px;\n  }\n  .h-\\[50px\\] {\n    height: 50px;\n  }\n  .h-\\[58px\\] {\n    height: 58px;\n  }\n  .h-\\[60px\\] {\n    height: 60px;\n  }\n  .h-\\[64px\\] {\n    height: 64px;\n  }\n  .h-\\[80px\\] {\n    height: 80px;\n  }\n  .h-\\[80vh\\] {\n    height: 80vh;\n  }\n  .h-\\[85vh\\] {\n    height: 85vh;\n  }\n  .h-\\[90vh\\] {\n    height: 90vh;\n  }\n  .h-\\[100\\%\\] {\n    height: 100%;\n  }\n  .h-\\[116px\\] {\n    height: 116px;\n  }\n  .h-\\[120px\\] {\n    height: 120px;\n  }\n  .h-\\[125px\\] {\n    height: 125px;\n  }\n  .h-\\[140px\\] {\n    height: 140px;\n  }\n  .h-\\[150px\\] {\n    height: 150px;\n  }\n  .h-\\[225px\\] {\n    height: 225px;\n  }\n  .h-\\[245px\\] {\n    height: 245px;\n  }\n  .h-\\[300px\\] {\n    height: 300px;\n  }\n  .h-\\[312px\\] {\n    height: 312px;\n  }\n  .h-\\[320px\\] {\n    height: 320px;\n  }\n  .h-\\[340px\\] {\n    height: 340px;\n  }\n  .h-\\[350px\\] {\n    height: 350px;\n  }\n  .h-\\[399px\\] {\n    height: 399px;\n  }\n  .h-\\[400px\\] {\n    height: 400px;\n  }\n  .h-\\[500px\\] {\n    height: 500px;\n  }\n  .h-\\[calc\\(50\\%\\+1px\\)\\] {\n    height: calc(50% + 1px);\n  }\n  .h-\\[calc\\(75dvh\\)\\] {\n    height: calc(75dvh);\n  }\n  .h-\\[calc\\(100vh-48px\\)\\] {\n    height: calc(100vh - 48px);\n  }\n  .h-\\[calc\\(100vh-58px\\)\\] {\n    height: calc(100vh - 58px);\n  }\n  .h-\\[calc\\(100vh-116px\\)\\] {\n    height: calc(100vh - 116px);\n  }\n  .h-\\[calc\\(100vh-240px\\)\\] {\n    height: calc(100vh - 240px);\n  }\n  .h-\\[calc\\(var\\(--connector-height\\)\\/2\\)\\] {\n    height: calc(var(--connector-height) / 2);\n  }\n  .h-\\[min\\(50vh\\,600px\\)\\] {\n    height: min(50vh, 600px);\n  }\n  .h-\\[var\\(--height\\)\\] {\n    height: var(--height);\n  }\n  .h-auto {\n    height: auto;\n  }\n  .h-fit {\n    height: fit-content;\n  }\n  .h-fit\\! {\n    height: fit-content !important;\n  }\n  .h-full {\n    height: 100%;\n  }\n  .h-full\\! {\n    height: 100% !important;\n  }\n  .h-lh {\n    height: 1lh;\n  }\n  .h-px {\n    height: 1px;\n  }\n  .h-screen {\n    height: 100vh;\n  }\n  .\\!max-h-\\[calc\\(100vh-350px\\)\\] {\n    max-height: calc(100vh - 350px) !important;\n  }\n  .max-h-0 {\n    max-height: calc(var(--spacing) * 0);\n  }\n  .max-h-7 {\n    max-height: calc(var(--spacing) * 7);\n  }\n  .max-h-8\\/10 {\n    max-height: calc(8/10 * 100%);\n  }\n  .max-h-50 {\n    max-height: calc(var(--spacing) * 50);\n  }\n  .max-h-60 {\n    max-height: calc(var(--spacing) * 60);\n  }\n  .max-h-64 {\n    max-height: calc(var(--spacing) * 64);\n  }\n  .max-h-74 {\n    max-height: calc(var(--spacing) * 74);\n  }\n  .max-h-80 {\n    max-height: calc(var(--spacing) * 80);\n  }\n  .max-h-112 {\n    max-height: calc(var(--spacing) * 112);\n  }\n  .max-h-\\[33px\\] {\n    max-height: 33px;\n  }\n  .max-h-\\[50vh\\] {\n    max-height: 50vh;\n  }\n  .max-h-\\[60vh\\] {\n    max-height: 60vh;\n  }\n  .max-h-\\[80vh\\] {\n    max-height: 80vh;\n  }\n  .max-h-\\[90vh\\] {\n    max-height: 90vh;\n  }\n  .max-h-\\[200px\\] {\n    max-height: 200px;\n  }\n  .max-h-\\[250px\\] {\n    max-height: 250px;\n  }\n  .max-h-\\[300px\\] {\n    max-height: 300px;\n  }\n  .max-h-\\[340px\\] {\n    max-height: 340px;\n  }\n  .max-h-\\[400px\\] {\n    max-height: 400px;\n  }\n  .max-h-\\[420px\\] {\n    max-height: 420px;\n  }\n  .max-h-\\[450px\\] {\n    max-height: 450px;\n  }\n  .max-h-\\[500px\\] {\n    max-height: 500px;\n  }\n  .max-h-\\[512px\\] {\n    max-height: 512px;\n  }\n  .max-h-\\[600px\\] {\n    max-height: 600px;\n  }\n  .max-h-\\[calc\\(75dvh\\)\\] {\n    max-height: calc(75dvh);\n  }\n  .max-h-\\[calc\\(80vh-120px\\)\\] {\n    max-height: calc(80vh - 120px);\n  }\n  .max-h-\\[calc\\(100vh-32px\\)\\] {\n    max-height: calc(100vh - 32px);\n  }\n  .max-h-\\[calc\\(100vh-64px\\)\\] {\n    max-height: calc(100vh - 64px);\n  }\n  .max-h-\\[calc\\(100vh-128px\\)\\] {\n    max-height: calc(100vh - 128px);\n  }\n  .max-h-\\[calc\\(100vh-300px\\)\\] {\n    max-height: calc(100vh - 300px);\n  }\n  .max-h-\\[calc\\(100vh-428px\\)\\] {\n    max-height: calc(100vh - 428px);\n  }\n  .max-h-\\[calc\\(var\\(--footer-max-height\\)-150px\\)\\] {\n    max-height: calc(var(--footer-max-height) - 150px);\n  }\n  .max-h-\\[min\\(23rem\\,var\\(--available-height\\)\\)\\] {\n    max-height: min(23rem, var(--available-height));\n  }\n  .max-h-\\[min\\(310px\\,calc\\(100vh-124px\\)\\)\\] {\n    max-height: min(310px, calc(100vh - 124px));\n  }\n  .max-h-\\[min\\(360px\\,var\\(--available-height\\)\\)\\] {\n    max-height: min(360px, var(--available-height));\n  }\n  .max-h-\\[min\\(var\\(--available-height\\)\\,24rem\\)\\] {\n    max-height: min(var(--available-height), 24rem);\n  }\n  .max-h-full {\n    max-height: 100%;\n  }\n  .max-h-screen {\n    max-height: 100vh;\n  }\n  .\\!min-h-0 {\n    min-height: calc(var(--spacing) * 0) !important;\n  }\n  .\\!min-h-10 {\n    min-height: calc(var(--spacing) * 10) !important;\n  }\n  .min-h-0 {\n    min-height: calc(var(--spacing) * 0);\n  }\n  .min-h-1 {\n    min-height: calc(var(--spacing) * 1);\n  }\n  .min-h-3 {\n    min-height: calc(var(--spacing) * 3);\n  }\n  .min-h-6 {\n    min-height: calc(var(--spacing) * 6);\n  }\n  .min-h-8 {\n    min-height: calc(var(--spacing) * 8);\n  }\n  .min-h-8\\.5 {\n    min-height: calc(var(--spacing) * 8.5);\n  }\n  .min-h-9 {\n    min-height: calc(var(--spacing) * 9);\n  }\n  .min-h-12 {\n    min-height: calc(var(--spacing) * 12);\n  }\n  .min-h-14 {\n    min-height: calc(var(--spacing) * 14);\n  }\n  .min-h-20 {\n    min-height: calc(var(--spacing) * 20);\n  }\n  .min-h-22 {\n    min-height: calc(var(--spacing) * 22);\n  }\n  .min-h-24 {\n    min-height: calc(var(--spacing) * 24);\n  }\n  .min-h-36 {\n    min-height: calc(var(--spacing) * 36);\n  }\n  .min-h-56 {\n    min-height: calc(var(--spacing) * 56);\n  }\n  .min-h-\\[2\\.75rem\\] {\n    min-height: 2.75rem;\n  }\n  .min-h-\\[20px\\] {\n    min-height: 20px;\n  }\n  .min-h-\\[30rem\\] {\n    min-height: 30rem;\n  }\n  .min-h-\\[32px\\] {\n    min-height: 32px;\n  }\n  .min-h-\\[46px\\] {\n    min-height: 46px;\n  }\n  .min-h-\\[47\\.5px\\] {\n    min-height: 47.5px;\n  }\n  .min-h-\\[50vh\\] {\n    min-height: 50vh;\n  }\n  .min-h-\\[60px\\] {\n    min-height: 60px;\n  }\n  .min-h-\\[60vh\\] {\n    min-height: 60vh;\n  }\n  .min-h-\\[118px\\] {\n    min-height: 118px;\n  }\n  .min-h-\\[135px\\] {\n    min-height: 135px;\n  }\n  .min-h-\\[140px\\] {\n    min-height: 140px;\n  }\n  .min-h-\\[200px\\] {\n    min-height: 200px;\n  }\n  .min-h-\\[245px\\] {\n    min-height: 245px;\n  }\n  .min-h-\\[312px\\] {\n    min-height: 312px;\n  }\n  .min-h-\\[350px\\] {\n    min-height: 350px;\n  }\n  .min-h-\\[575px\\] {\n    min-height: 575px;\n  }\n  .min-h-\\[calc\\(100vh-3\\.5rem\\)\\] {\n    min-height: calc(100vh - 3.5rem);\n  }\n  .min-h-\\[calc\\(100vh-56px\\)\\] {\n    min-height: calc(100vh - 56px);\n  }\n  .min-h-\\[calc\\(100vh-100px\\)\\] {\n    min-height: calc(100vh - 100px);\n  }\n  .min-h-\\[calc\\(100vh-160px\\)\\] {\n    min-height: calc(100vh - 160px);\n  }\n  .min-h-screen {\n    min-height: 100vh;\n  }\n  .\\!w-1 {\n    width: calc(var(--spacing) * 1) !important;\n  }\n  .\\!w-3\\.5 {\n    width: calc(var(--spacing) * 3.5) !important;\n  }\n  .\\!w-3xl {\n    width: var(--container-3xl) !important;\n  }\n  .\\!w-7 {\n    width: calc(var(--spacing) * 7) !important;\n  }\n  .\\!w-auto {\n    width: auto !important;\n  }\n  .\\!w-full {\n    width: 100% !important;\n  }\n  .w-\\(--active-tab-width\\) {\n    width: var(--active-tab-width);\n  }\n  .w-0 {\n    width: calc(var(--spacing) * 0);\n  }\n  .w-0\\.5 {\n    width: calc(var(--spacing) * 0.5);\n  }\n  .w-1 {\n    width: calc(var(--spacing) * 1);\n  }\n  .w-1\\.5 {\n    width: calc(var(--spacing) * 1.5);\n  }\n  .w-1\\/2 {\n    width: calc(1/2 * 100%);\n  }\n  .w-1\\/3 {\n    width: calc(1/3 * 100%);\n  }\n  .w-1\\/5 {\n    width: calc(1/5 * 100%);\n  }\n  .w-1\\/6 {\n    width: calc(1/6 * 100%);\n  }\n  .w-1\\/12 {\n    width: calc(1/12 * 100%);\n  }\n  .w-2 {\n    width: calc(var(--spacing) * 2);\n  }\n  .w-2\\.5 {\n    width: calc(var(--spacing) * 2.5);\n  }\n  .w-3 {\n    width: calc(var(--spacing) * 3);\n  }\n  .w-3\\.5 {\n    width: calc(var(--spacing) * 3.5);\n  }\n  .w-3xl {\n    width: var(--container-3xl);\n  }\n  .w-4 {\n    width: calc(var(--spacing) * 4);\n  }\n  .w-5 {\n    width: calc(var(--spacing) * 5);\n  }\n  .w-5\\.5 {\n    width: calc(var(--spacing) * 5.5);\n  }\n  .w-6 {\n    width: calc(var(--spacing) * 6);\n  }\n  .w-6xl {\n    width: var(--container-6xl);\n  }\n  .w-7 {\n    width: calc(var(--spacing) * 7);\n  }\n  .w-8 {\n    width: calc(var(--spacing) * 8);\n  }\n  .w-8\\.5 {\n    width: calc(var(--spacing) * 8.5);\n  }\n  .w-8\\/10 {\n    width: calc(8/10 * 100%);\n  }\n  .w-9 {\n    width: calc(var(--spacing) * 9);\n  }\n  .w-9\\/10 {\n    width: calc(9/10 * 100%);\n  }\n  .w-10 {\n    width: calc(var(--spacing) * 10);\n  }\n  .w-10\\.5 {\n    width: calc(var(--spacing) * 10.5);\n  }\n  .w-11 {\n    width: calc(var(--spacing) * 11);\n  }\n  .w-12 {\n    width: calc(var(--spacing) * 12);\n  }\n  .w-12\\.5 {\n    width: calc(var(--spacing) * 12.5);\n  }\n  .w-14 {\n    width: calc(var(--spacing) * 14);\n  }\n  .w-16 {\n    width: calc(var(--spacing) * 16);\n  }\n  .w-20 {\n    width: calc(var(--spacing) * 20);\n  }\n  .w-24 {\n    width: calc(var(--spacing) * 24);\n  }\n  .w-28 {\n    width: calc(var(--spacing) * 28);\n  }\n  .w-30 {\n    width: calc(var(--spacing) * 30);\n  }\n  .w-32 {\n    width: calc(var(--spacing) * 32);\n  }\n  .w-36 {\n    width: calc(var(--spacing) * 36);\n  }\n  .w-38 {\n    width: calc(var(--spacing) * 38);\n  }\n  .w-40 {\n    width: calc(var(--spacing) * 40);\n  }\n  .w-42 {\n    width: calc(var(--spacing) * 42);\n  }\n  .w-45 {\n    width: calc(var(--spacing) * 45);\n  }\n  .w-48 {\n    width: calc(var(--spacing) * 48);\n  }\n  .w-56 {\n    width: calc(var(--spacing) * 56);\n  }\n  .w-60 {\n    width: calc(var(--spacing) * 60);\n  }\n  .w-64 {\n    width: calc(var(--spacing) * 64);\n  }\n  .w-70 {\n    width: calc(var(--spacing) * 70);\n  }\n  .w-72 {\n    width: calc(var(--spacing) * 72);\n  }\n  .w-74 {\n    width: calc(var(--spacing) * 74);\n  }\n  .w-80 {\n    width: calc(var(--spacing) * 80);\n  }\n  .w-96 {\n    width: calc(var(--spacing) * 96);\n  }\n  .w-120 {\n    width: calc(var(--spacing) * 120);\n  }\n  .w-128 {\n    width: calc(var(--spacing) * 128);\n  }\n  .w-\\[1px\\] {\n    width: 1px;\n  }\n  .w-\\[2px\\] {\n    width: 2px;\n  }\n  .w-\\[3rem\\] {\n    width: 3rem;\n  }\n  .w-\\[5px\\] {\n    width: 5px;\n  }\n  .w-\\[10px\\] {\n    width: 10px;\n  }\n  .w-\\[15\\%\\] {\n    width: 15%;\n  }\n  .w-\\[20\\%\\] {\n    width: 20%;\n  }\n  .w-\\[30\\%\\] {\n    width: 30%;\n  }\n  .w-\\[30px\\] {\n    width: 30px;\n  }\n  .w-\\[32px\\] {\n    width: 32px;\n  }\n  .w-\\[42px\\] {\n    width: 42px;\n  }\n  .w-\\[60px\\] {\n    width: 60px;\n  }\n  .w-\\[80px\\] {\n    width: 80px;\n  }\n  .w-\\[90px\\] {\n    width: 90px;\n  }\n  .w-\\[100px\\] {\n    width: 100px;\n  }\n  .w-\\[125px\\] {\n    width: 125px;\n  }\n  .w-\\[140px\\] {\n    width: 140px;\n  }\n  .w-\\[150px\\] {\n    width: 150px;\n  }\n  .w-\\[168px\\] {\n    width: 168px;\n  }\n  .w-\\[180px\\] {\n    width: 180px;\n  }\n  .w-\\[196px\\] {\n    width: 196px;\n  }\n  .w-\\[200px\\] {\n    width: 200px;\n  }\n  .w-\\[230px\\] {\n    width: 230px;\n  }\n  .w-\\[250px\\] {\n    width: 250px;\n  }\n  .w-\\[252px\\] {\n    width: 252px;\n  }\n  .w-\\[260px\\] {\n    width: 260px;\n  }\n  .w-\\[426px\\] {\n    width: 426px;\n  }\n  .w-\\[446px\\] {\n    width: 446px;\n  }\n  .w-\\[500px\\] {\n    width: 500px;\n  }\n  .w-\\[532px\\] {\n    width: 532px;\n  }\n  .w-\\[700px\\] {\n    width: 700px;\n  }\n  .w-\\[800px\\] {\n    width: 800px;\n  }\n  .w-\\[1400px\\] {\n    width: 1400px;\n  }\n  .w-\\[calc\\(50\\%\\+1px\\)\\] {\n    width: calc(50% + 1px);\n  }\n  .w-\\[calc\\(100\\%\\+1rem\\)\\] {\n    width: calc(100% + 1rem);\n  }\n  .w-\\[calc\\(100\\%\\+2rem\\)\\] {\n    width: calc(100% + 2rem);\n  }\n  .w-\\[calc\\(100\\%\\+12px\\)\\] {\n    width: calc(100% + 12px);\n  }\n  .w-\\[calc\\(100\\%\\+16px\\)\\] {\n    width: calc(100% + 16px);\n  }\n  .w-\\[calc\\(100\\%-2rem\\)\\] {\n    width: calc(100% - 2rem);\n  }\n  .w-\\[var\\(--anchor-width\\)\\] {\n    width: var(--anchor-width);\n  }\n  .w-\\[var\\(--radix-dropdown-menu-trigger-width\\)\\] {\n    width: var(--radix-dropdown-menu-trigger-width);\n  }\n  .w-\\[var\\(--width\\)\\] {\n    width: var(--width);\n  }\n  .w-auto {\n    width: auto;\n  }\n  .w-fit {\n    width: fit-content;\n  }\n  .w-full {\n    width: 100%;\n  }\n  .w-max {\n    width: max-content;\n  }\n  .w-md {\n    width: var(--container-md);\n  }\n  .w-min {\n    width: min-content;\n  }\n  .w-px {\n    width: 1px;\n  }\n  .w-screen {\n    width: 100vw;\n  }\n  .w-xl {\n    width: var(--container-xl);\n  }\n  .w-xs {\n    width: var(--container-xs);\n  }\n  .\\!max-w-3xl {\n    max-width: var(--container-3xl) !important;\n  }\n  .max-w-\\(--available-width\\) {\n    max-width: var(--available-width);\n  }\n  .max-w-0 {\n    max-width: calc(var(--spacing) * 0);\n  }\n  .max-w-2xl {\n    max-width: var(--container-2xl);\n  }\n  .max-w-2xs {\n    max-width: var(--container-2xs);\n  }\n  .max-w-3xl {\n    max-width: var(--container-3xl);\n  }\n  .max-w-4\\! {\n    max-width: calc(var(--spacing) * 4) !important;\n  }\n  .max-w-4xl {\n    max-width: var(--container-4xl);\n  }\n  .max-w-5xl {\n    max-width: var(--container-5xl);\n  }\n  .max-w-6xl {\n    max-width: var(--container-6xl);\n  }\n  .max-w-8\\/10 {\n    max-width: calc(8/10 * 100%);\n  }\n  .max-w-9\\/10 {\n    max-width: calc(9/10 * 100%);\n  }\n  .max-w-10 {\n    max-width: calc(var(--spacing) * 10);\n  }\n  .max-w-28 {\n    max-width: calc(var(--spacing) * 28);\n  }\n  .max-w-30 {\n    max-width: calc(var(--spacing) * 30);\n  }\n  .max-w-32 {\n    max-width: calc(var(--spacing) * 32);\n  }\n  .max-w-48 {\n    max-width: calc(var(--spacing) * 48);\n  }\n  .max-w-50 {\n    max-width: calc(var(--spacing) * 50);\n  }\n  .max-w-56 {\n    max-width: calc(var(--spacing) * 56);\n  }\n  .max-w-64 {\n    max-width: calc(var(--spacing) * 64);\n  }\n  .max-w-70 {\n    max-width: calc(var(--spacing) * 70);\n  }\n  .max-w-80 {\n    max-width: calc(var(--spacing) * 80);\n  }\n  .max-w-124 {\n    max-width: calc(var(--spacing) * 124);\n  }\n  .max-w-140 {\n    max-width: calc(var(--spacing) * 140);\n  }\n  .max-w-800 {\n    max-width: calc(var(--spacing) * 800);\n  }\n  .max-w-\\[10ch\\] {\n    max-width: 10ch;\n  }\n  .max-w-\\[28rem\\] {\n    max-width: 28rem;\n  }\n  .max-w-\\[30ch\\] {\n    max-width: 30ch;\n  }\n  .max-w-\\[38rem\\] {\n    max-width: 38rem;\n  }\n  .max-w-\\[40ch\\] {\n    max-width: 40ch;\n  }\n  .max-w-\\[40em\\] {\n    max-width: 40em;\n  }\n  .max-w-\\[60ch\\] {\n    max-width: 60ch;\n  }\n  .max-w-\\[60rem\\] {\n    max-width: 60rem;\n  }\n  .max-w-\\[70ch\\] {\n    max-width: 70ch;\n  }\n  .max-w-\\[90vw\\] {\n    max-width: 90vw;\n  }\n  .max-w-\\[100\\%\\] {\n    max-width: 100%;\n  }\n  .max-w-\\[120px\\] {\n    max-width: 120px;\n  }\n  .max-w-\\[150px\\] {\n    max-width: 150px;\n  }\n  .max-w-\\[167px\\] {\n    max-width: 167px;\n  }\n  .max-w-\\[180px\\] {\n    max-width: 180px;\n  }\n  .max-w-\\[200ch\\] {\n    max-width: 200ch;\n  }\n  .max-w-\\[200px\\] {\n    max-width: 200px;\n  }\n  .max-w-\\[216px\\] {\n    max-width: 216px;\n  }\n  .max-w-\\[250px\\] {\n    max-width: 250px;\n  }\n  .max-w-\\[260px\\] {\n    max-width: 260px;\n  }\n  .max-w-\\[288px\\] {\n    max-width: 288px;\n  }\n  .max-w-\\[300px\\] {\n    max-width: 300px;\n  }\n  .max-w-\\[310px\\] {\n    max-width: 310px;\n  }\n  .max-w-\\[320px\\] {\n    max-width: 320px;\n  }\n  .max-w-\\[350px\\] {\n    max-width: 350px;\n  }\n  .max-w-\\[365px\\] {\n    max-width: 365px;\n  }\n  .max-w-\\[400px\\] {\n    max-width: 400px;\n  }\n  .max-w-\\[496px\\] {\n    max-width: 496px;\n  }\n  .max-w-\\[500px\\] {\n    max-width: 500px;\n  }\n  .max-w-\\[514px\\] {\n    max-width: 514px;\n  }\n  .max-w-\\[520px\\] {\n    max-width: 520px;\n  }\n  .max-w-\\[560px\\] {\n    max-width: 560px;\n  }\n  .max-w-\\[640px\\] {\n    max-width: 640px;\n  }\n  .max-w-\\[700px\\] {\n    max-width: 700px;\n  }\n  .max-w-\\[800px\\] {\n    max-width: 800px;\n  }\n  .max-w-\\[920px\\] {\n    max-width: 920px;\n  }\n  .max-w-\\[950px\\] {\n    max-width: 950px;\n  }\n  .max-w-\\[1000px\\] {\n    max-width: 1000px;\n  }\n  .max-w-\\[1024px\\] {\n    max-width: 1024px;\n  }\n  .max-w-\\[1136px\\] {\n    max-width: 1136px;\n  }\n  .max-w-\\[1200px\\] {\n    max-width: 1200px;\n  }\n  .max-w-\\[1300px\\] {\n    max-width: 1300px;\n  }\n  .max-w-\\[1348px\\] {\n    max-width: 1348px;\n  }\n  .max-w-\\[1400px\\] {\n    max-width: 1400px;\n  }\n  .max-w-\\[calc\\(100\\%-32px\\)\\] {\n    max-width: calc(100% - 32px);\n  }\n  .max-w-\\[calc\\(100vw-2rem\\)\\] {\n    max-width: calc(100vw - 2rem);\n  }\n  .max-w-\\[calc\\(100vw-3rem\\)\\] {\n    max-width: calc(100vw - 3rem);\n  }\n  .max-w-fit {\n    max-width: fit-content;\n  }\n  .max-w-full {\n    max-width: 100%;\n  }\n  .max-w-lg {\n    max-width: var(--container-lg);\n  }\n  .max-w-md {\n    max-width: var(--container-md);\n  }\n  .max-w-none {\n    max-width: none;\n  }\n  .max-w-prose {\n    max-width: 65ch;\n  }\n  .max-w-screen-2xl {\n    max-width: var(--breakpoint-2xl);\n  }\n  .max-w-sm {\n    max-width: var(--container-sm);\n  }\n  .max-w-xl {\n    max-width: var(--container-xl);\n  }\n  .max-w-xs {\n    max-width: var(--container-xs);\n  }\n  .min-w-\\(--anchor-width\\) {\n    min-width: var(--anchor-width);\n  }\n  .min-w-0 {\n    min-width: calc(var(--spacing) * 0);\n  }\n  .min-w-3 {\n    min-width: calc(var(--spacing) * 3);\n  }\n  .min-w-4\\.5 {\n    min-width: calc(var(--spacing) * 4.5);\n  }\n  .min-w-5 {\n    min-width: calc(var(--spacing) * 5);\n  }\n  .min-w-6 {\n    min-width: calc(var(--spacing) * 6);\n  }\n  .min-w-16 {\n    min-width: calc(var(--spacing) * 16);\n  }\n  .min-w-20 {\n    min-width: calc(var(--spacing) * 20);\n  }\n  .min-w-24 {\n    min-width: calc(var(--spacing) * 24);\n  }\n  .min-w-28 {\n    min-width: calc(var(--spacing) * 28);\n  }\n  .min-w-30 {\n    min-width: calc(var(--spacing) * 30);\n  }\n  .min-w-32 {\n    min-width: calc(var(--spacing) * 32);\n  }\n  .min-w-36 {\n    min-width: calc(var(--spacing) * 36);\n  }\n  .min-w-40 {\n    min-width: calc(var(--spacing) * 40);\n  }\n  .min-w-42 {\n    min-width: calc(var(--spacing) * 42);\n  }\n  .min-w-44 {\n    min-width: calc(var(--spacing) * 44);\n  }\n  .min-w-48 {\n    min-width: calc(var(--spacing) * 48);\n  }\n  .min-w-50 {\n    min-width: calc(var(--spacing) * 50);\n  }\n  .min-w-52 {\n    min-width: calc(var(--spacing) * 52);\n  }\n  .min-w-60 {\n    min-width: calc(var(--spacing) * 60);\n  }\n  .min-w-64 {\n    min-width: calc(var(--spacing) * 64);\n  }\n  .min-w-72 {\n    min-width: calc(var(--spacing) * 72);\n  }\n  .min-w-80 {\n    min-width: calc(var(--spacing) * 80);\n  }\n  .min-w-96 {\n    min-width: calc(var(--spacing) * 96);\n  }\n  .min-w-128 {\n    min-width: calc(var(--spacing) * 128);\n  }\n  .min-w-\\[3px\\] {\n    min-width: 3px;\n  }\n  .min-w-\\[5\\.5rem\\] {\n    min-width: 5.5rem;\n  }\n  .min-w-\\[8rem\\] {\n    min-width: 8rem;\n  }\n  .min-w-\\[9px\\] {\n    min-width: 9px;\n  }\n  .min-w-\\[9rem\\] {\n    min-width: 9rem;\n  }\n  .min-w-\\[10rem\\] {\n    min-width: 10rem;\n  }\n  .min-w-\\[12rem\\] {\n    min-width: 12rem;\n  }\n  .min-w-\\[32rem\\] {\n    min-width: 32rem;\n  }\n  .min-w-\\[34rem\\] {\n    min-width: 34rem;\n  }\n  .min-w-\\[44px\\] {\n    min-width: 44px;\n  }\n  .min-w-\\[48rem\\] {\n    min-width: 48rem;\n  }\n  .min-w-\\[50vw\\] {\n    min-width: 50vw;\n  }\n  .min-w-\\[60px\\] {\n    min-width: 60px;\n  }\n  .min-w-\\[62px\\] {\n    min-width: 62px;\n  }\n  .min-w-\\[64px\\] {\n    min-width: 64px;\n  }\n  .min-w-\\[70px\\] {\n    min-width: 70px;\n  }\n  .min-w-\\[82px\\] {\n    min-width: 82px;\n  }\n  .min-w-\\[90px\\] {\n    min-width: 90px;\n  }\n  .min-w-\\[100px\\] {\n    min-width: 100px;\n  }\n  .min-w-\\[120px\\] {\n    min-width: 120px;\n  }\n  .min-w-\\[150px\\] {\n    min-width: 150px;\n  }\n  .min-w-\\[170px\\] {\n    min-width: 170px;\n  }\n  .min-w-\\[180px\\] {\n    min-width: 180px;\n  }\n  .min-w-\\[200px\\] {\n    min-width: 200px;\n  }\n  .min-w-\\[220px\\] {\n    min-width: 220px;\n  }\n  .min-w-\\[250px\\] {\n    min-width: 250px;\n  }\n  .min-w-\\[280px\\] {\n    min-width: 280px;\n  }\n  .min-w-\\[373px\\] {\n    min-width: 373px;\n  }\n  .min-w-\\[720px\\] {\n    min-width: 720px;\n  }\n  .min-w-\\[800px\\] {\n    min-width: 800px;\n  }\n  .min-w-\\[calc\\(var\\(--anchor-width\\)\\+3px\\)\\] {\n    min-width: calc(var(--anchor-width) + 3px);\n  }\n  .min-w-\\[var\\(--trigger-width\\)\\] {\n    min-width: var(--trigger-width);\n  }\n  .min-w-fit {\n    min-width: fit-content;\n  }\n  .min-w-max {\n    min-width: max-content;\n  }\n  .min-w-sm {\n    min-width: var(--container-sm);\n  }\n  .min-w-xl {\n    min-width: var(--container-xl);\n  }\n  .min-w-xs {\n    min-width: var(--container-xs);\n  }\n  .flex-0 {\n    flex: 0;\n  }\n  .flex-1 {\n    flex: 1;\n  }\n  .flex-2 {\n    flex: 2;\n  }\n  .flex-3 {\n    flex: 3;\n  }\n  .flex-\\[1_1_40ch\\] {\n    flex: 1 1 40ch;\n  }\n  .flex-\\[1_1_auto\\] {\n    flex: 1 1 auto;\n  }\n  .flex-auto {\n    flex: auto;\n  }\n  .flex-initial {\n    flex: 0 auto;\n  }\n  .flex-none {\n    flex: none;\n  }\n  .\\!shrink {\n    flex-shrink: 1 !important;\n  }\n  .flex-shrink {\n    flex-shrink: 1;\n  }\n  .flex-shrink-0 {\n    flex-shrink: 0;\n  }\n  .flex-shrink-\\[2\\] {\n    flex-shrink: 2;\n  }\n  .shrink {\n    flex-shrink: 1;\n  }\n  .shrink-0 {\n    flex-shrink: 0;\n  }\n  .flex-grow {\n    flex-grow: 1;\n  }\n  .flex-grow-0 {\n    flex-grow: 0;\n  }\n  .grow {\n    flex-grow: 1;\n  }\n  .grow-0 {\n    flex-grow: 0;\n  }\n  .grow-1 {\n    flex-grow: 1;\n  }\n  .basis-0 {\n    flex-basis: calc(var(--spacing) * 0);\n  }\n  .basis-1\\/2 {\n    flex-basis: calc(1/2 * 100%);\n  }\n  .basis-40 {\n    flex-basis: calc(var(--spacing) * 40);\n  }\n  .basis-full {\n    flex-basis: 100%;\n  }\n  .table-fixed {\n    table-layout: fixed;\n  }\n  .border-collapse {\n    border-collapse: collapse;\n  }\n  .origin-\\(--transform-origin\\) {\n    transform-origin: var(--transform-origin);\n  }\n  .origin-\\[var\\(--transform-origin\\)\\] {\n    transform-origin: var(--transform-origin);\n  }\n  .origin-bottom {\n    transform-origin: bottom;\n  }\n  .origin-center {\n    transform-origin: center;\n  }\n  .origin-left {\n    transform-origin: 0;\n  }\n  .-translate-x-1 {\n    --tw-translate-x: calc(var(--spacing) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-x-1\\/2 {\n    --tw-translate-x: calc(calc(1/2 * 100%) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-x-2 {\n    --tw-translate-x: calc(var(--spacing) * -2);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-x-4 {\n    --tw-translate-x: calc(var(--spacing) * -4);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-x-full {\n    --tw-translate-x: -100%;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-0 {\n    --tw-translate-x: calc(var(--spacing) * 0);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-1\\/2 {\n    --tw-translate-x: calc(1/2 * 100%);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-4 {\n    --tw-translate-x: calc(var(--spacing) * 4);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-5 {\n    --tw-translate-x: calc(var(--spacing) * 5);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-16 {\n    --tw-translate-x: calc(var(--spacing) * 16);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-\\[-3px\\] {\n    --tw-translate-x: -3px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-\\[10\\.5px\\] {\n    --tw-translate-x: 10.5px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-\\[calc\\(-100\\%\\+4px\\)\\] {\n    --tw-translate-x: calc(-100% + 4px);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-full {\n    --tw-translate-x: 100%;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-x-px {\n    --tw-translate-x: 1px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-0\\.75 {\n    --tw-translate-y: calc(var(--spacing) * -0.75);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-1 {\n    --tw-translate-y: calc(var(--spacing) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-1\\/2 {\n    --tw-translate-y: calc(calc(1/2 * 100%) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-16 {\n    --tw-translate-y: calc(var(--spacing) * -16);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-\\[1px\\] {\n    --tw-translate-y: calc(1px * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-\\[5px\\] {\n    --tw-translate-y: calc(5px * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .-translate-y-full {\n    --tw-translate-y: -100%;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-0 {\n    --tw-translate-y: calc(var(--spacing) * 0);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-0\\.5 {\n    --tw-translate-y: calc(var(--spacing) * 0.5);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-1 {\n    --tw-translate-y: calc(var(--spacing) * 1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-1\\.5 {\n    --tw-translate-y: calc(var(--spacing) * 1.5);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-\\[2px\\] {\n    --tw-translate-y: 2px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-\\[calc\\(-50\\%-1px\\)\\] {\n    --tw-translate-y: calc(-50% - 1px);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-y-px {\n    --tw-translate-y: 1px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n  .translate-none {\n    translate: none;\n  }\n  .scale-50 {\n    --tw-scale-x: 50%;\n    --tw-scale-y: 50%;\n    --tw-scale-z: 50%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-75 {\n    --tw-scale-x: 75%;\n    --tw-scale-y: 75%;\n    --tw-scale-z: 75%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-80 {\n    --tw-scale-x: 80%;\n    --tw-scale-y: 80%;\n    --tw-scale-z: 80%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-95 {\n    --tw-scale-x: 95%;\n    --tw-scale-y: 95%;\n    --tw-scale-z: 95%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-100 {\n    --tw-scale-x: 100%;\n    --tw-scale-y: 100%;\n    --tw-scale-z: 100%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-105 {\n    --tw-scale-x: 105%;\n    --tw-scale-y: 105%;\n    --tw-scale-z: 105%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .-scale-x-100 {\n    --tw-scale-x: calc(100% * -1);\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-x-0 {\n    --tw-scale-x: 0%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-x-100 {\n    --tw-scale-x: 100%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-y-0 {\n    --tw-scale-y: 0%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-y-100 {\n    --tw-scale-y: 100%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n  .scale-3d {\n    scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z);\n  }\n  .scale-\\[0\\.8\\] {\n    scale: 0.8;\n  }\n  .scale-\\[0\\.85\\] {\n    scale: 0.85;\n  }\n  .scale-\\[0\\.833\\] {\n    scale: 0.833;\n  }\n  .-rotate-90 {\n    rotate: calc(90deg * -1);\n  }\n  .-rotate-180 {\n    rotate: calc(180deg * -1);\n  }\n  .rotate-0 {\n    rotate: 0deg;\n  }\n  .rotate-45 {\n    rotate: 45deg;\n  }\n  .rotate-90 {\n    rotate: 90deg;\n  }\n  .rotate-180 {\n    rotate: 180deg;\n  }\n  .\\[transform\\:rotateX\\(180deg\\)\\] {\n    transform: rotateX(180deg);\n  }\n  .\\[transform\\:translateX\\(var\\(--toast-swipe-movement-x\\)\\)_translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)-\\(var\\(--toast-index\\)\\*var\\(--peek\\)\\)-\\(var\\(--shrink\\)\\*var\\(--height\\)\\)\\)\\)_scale\\(var\\(--scale\\)\\)\\] {\n    transform: translateX(var(--toast-swipe-movement-x)) translateY(calc(var(--toast-swipe-movement-y) - (var(--toast-index) * var(--peek)) - (var(--shrink) * var(--height)))) scale(var(--scale));\n  }\n  .transform {\n    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);\n  }\n  .transform-gpu {\n    transform: translateZ(0) var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);\n  }\n  .animate-\\[dash-move-reverse_0\\.4s_linear_infinite\\] {\n    animation: dash-move-reverse 0.4s linear infinite;\n  }\n  .animate-\\[dash-move_0\\.4s_linear_infinite\\] {\n    animation: dash-move 0.4s linear infinite;\n  }\n  .animate-pulse {\n    animation: var(--animate-pulse);\n  }\n  .animate-refresh {\n    animation: var(--animate-refresh);\n  }\n  .animate-right {\n    animation: var(--animate-right);\n  }\n  .animate-spin {\n    animation: var(--animate-spin);\n  }\n  .\\!cursor-not-allowed {\n    cursor: not-allowed !important;\n  }\n  .cursor-col-resize {\n    cursor: col-resize;\n  }\n  .cursor-default {\n    cursor: default;\n  }\n  .cursor-default\\! {\n    cursor: default !important;\n  }\n  .cursor-ew-resize {\n    cursor: ew-resize;\n  }\n  .cursor-grab {\n    cursor: grab;\n  }\n  .cursor-grabbing {\n    cursor: grabbing;\n  }\n  .cursor-help {\n    cursor: help;\n  }\n  .cursor-move {\n    cursor: move;\n  }\n  .cursor-not-allowed {\n    cursor: not-allowed;\n  }\n  .cursor-pointer {\n    cursor: pointer;\n  }\n  .cursor-text {\n    cursor: text;\n  }\n  .cursor-wait {\n    cursor: wait;\n  }\n  .touch-pinch-zoom {\n    --tw-pinch-zoom: pinch-zoom;\n    touch-action: var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,);\n  }\n  .touch-none {\n    touch-action: none;\n  }\n  .resize {\n    resize: both;\n  }\n  .resize-none {\n    resize: none;\n  }\n  .resize-y {\n    resize: vertical;\n  }\n  .snap-x {\n    scroll-snap-type: x var(--tw-scroll-snap-strictness);\n  }\n  .snap-mandatory {\n    --tw-scroll-snap-strictness: mandatory;\n  }\n  .snap-center {\n    scroll-snap-align: center;\n  }\n  .scroll-pt-2 {\n    scroll-padding-top: calc(var(--spacing) * 2);\n  }\n  .scroll-pr-4 {\n    scroll-padding-right: calc(var(--spacing) * 4);\n  }\n  .scroll-pb-2 {\n    scroll-padding-bottom: calc(var(--spacing) * 2);\n  }\n  .list-inside {\n    list-style-position: inside;\n  }\n  .\\!list-none {\n    list-style-type: none !important;\n  }\n  .list-\\[\\"\\+\\"\\] {\n    list-style-type: "+";\n  }\n  .list-decimal {\n    list-style-type: decimal;\n  }\n  .list-disc {\n    list-style-type: disc;\n  }\n  .list-none {\n    list-style-type: none;\n  }\n  .appearance-none {\n    appearance: none;\n  }\n  .grid-flow-col {\n    grid-auto-flow: column;\n  }\n  .grid-flow-dense {\n    grid-auto-flow: dense;\n  }\n  .grid-flow-row {\n    grid-auto-flow: row;\n  }\n  .auto-rows-fr {\n    grid-auto-rows: minmax(0, 1fr);\n  }\n  .auto-rows-min {\n    grid-auto-rows: min-content;\n  }\n  .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n  .grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n  .grid-cols-\\[1fr\\] {\n    grid-template-columns: 1fr;\n  }\n  .grid-cols-\\[1fr_1fr_2fr\\] {\n    grid-template-columns: 1fr 1fr 2fr;\n  }\n  .grid-cols-\\[1fr_2fr\\] {\n    grid-template-columns: 1fr 2fr;\n  }\n  .grid-cols-\\[1fr_3fr\\] {\n    grid-template-columns: 1fr 3fr;\n  }\n  .grid-cols-\\[1fr_16px\\] {\n    grid-template-columns: 1fr 16px;\n  }\n  .grid-cols-\\[1fr_24px\\] {\n    grid-template-columns: 1fr 24px;\n  }\n  .grid-cols-\\[1fr_auto\\] {\n    grid-template-columns: 1fr auto;\n  }\n  .grid-cols-\\[1fr_auto_1fr\\] {\n    grid-template-columns: 1fr auto 1fr;\n  }\n  .grid-cols-\\[1fr_min\\(1348px\\,100\\%\\)_1fr\\] {\n    grid-template-columns: 1fr min(1348px, 100%) 1fr;\n  }\n  .grid-cols-\\[3fr_1fr\\] {\n    grid-template-columns: 3fr 1fr;\n  }\n  .grid-cols-\\[3fr_1fr_1fr\\] {\n    grid-template-columns: 3fr 1fr 1fr;\n  }\n  .grid-cols-\\[20rem_minmax\\(50rem\\,_1fr\\)\\] {\n    grid-template-columns: 20rem minmax(50rem, 1fr);\n  }\n  .grid-cols-\\[70px_60px_1fr_80px_86px\\] {\n    grid-template-columns: 70px 60px 1fr 80px 86px;\n  }\n  .grid-cols-\\[200px_1fr\\] {\n    grid-template-columns: 200px 1fr;\n  }\n  .grid-cols-\\[320px_1fr\\] {\n    grid-template-columns: 320px 1fr;\n  }\n  .grid-cols-\\[auto_1fr\\] {\n    grid-template-columns: auto 1fr;\n  }\n  .grid-cols-\\[auto_1fr_80px_auto\\] {\n    grid-template-columns: auto 1fr 80px auto;\n  }\n  .grid-cols-\\[auto_minmax\\(0\\,1fr\\)_auto\\] {\n    grid-template-columns: auto minmax(0,1fr) auto;\n  }\n  .grid-cols-\\[max-content_1fr\\] {\n    grid-template-columns: max-content 1fr;\n  }\n  .grid-cols-\\[minmax\\(0\\,1fr\\)\\] {\n    grid-template-columns: minmax(0,1fr);\n  }\n  .grid-cols-\\[minmax\\(0\\,3fr\\)_minmax\\(0\\,2fr\\)\\] {\n    grid-template-columns: minmax(0,3fr) minmax(0,2fr);\n  }\n  .grid-cols-\\[repeat\\(7\\,minmax\\(min-content\\,1fr\\)\\)\\] {\n    grid-template-columns: repeat(7,minmax(min-content,1fr));\n  }\n  .grid-cols-\\[repeat\\(auto-fit\\,_minmax\\(120px\\,_1fr\\)\\)\\] {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  }\n  .grid-cols-\\[repeat\\(auto-fit\\,_minmax\\(150px\\,_1fr\\)\\)\\] {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  }\n  .grid-cols-\\[repeat\\(auto-fit\\,_minmax\\(180px\\,_1fr\\)\\)\\] {\n    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  }\n  .grid-cols-\\[repeat\\(auto-fit\\,_minmax\\(190px\\,_1fr\\)\\)\\] {\n    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  }\n  .grid-cols-\\[repeat\\(auto-fit\\,_minmax\\(250px\\,_1fr\\)\\)\\] {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  }\n  .grid-cols-\\[repeat\\(auto-fit\\,minmax\\(250px\\,1fr\\)\\)\\] {\n    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));\n  }\n  .grid-cols-\\[var\\(--cols\\)\\] {\n    grid-template-columns: var(--cols);\n  }\n  .grid-rows-1 {\n    grid-template-rows: repeat(1, minmax(0, 1fr));\n  }\n  .grid-rows-5 {\n    grid-template-rows: repeat(5, minmax(0, 1fr));\n  }\n  .grid-rows-\\[0fr\\] {\n    grid-template-rows: 0fr;\n  }\n  .grid-rows-\\[1fr\\] {\n    grid-template-rows: 1fr;\n  }\n  .grid-rows-\\[3\\.25rem_1fr\\] {\n    grid-template-rows: 3.25rem 1fr;\n  }\n  .grid-rows-\\[auto_1fr\\] {\n    grid-template-rows: auto 1fr;\n  }\n  .grid-rows-\\[auto_auto\\] {\n    grid-template-rows: auto auto;\n  }\n  .grid-rows-subgrid {\n    grid-template-rows: subgrid;\n  }\n  .\\!flex-row {\n    flex-direction: row !important;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .flex-col-reverse {\n    flex-direction: column-reverse;\n  }\n  .flex-row {\n    flex-direction: row;\n  }\n  .flex-row-reverse {\n    flex-direction: row-reverse;\n  }\n  .flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n  .place-content-center {\n    place-content: center;\n  }\n  .place-items-center {\n    place-items: center;\n  }\n  .place-items-stretch {\n    place-items: stretch;\n  }\n  .content-center {\n    align-content: center;\n  }\n  .content-start {\n    align-content: flex-start;\n  }\n  .items-baseline {\n    align-items: baseline;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .items-end {\n    align-items: flex-end;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .items-stretch {\n    align-items: stretch;\n  }\n  .justify-around {\n    justify-content: space-around;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .justify-center\\! {\n    justify-content: center !important;\n  }\n  .justify-end {\n    justify-content: flex-end;\n  }\n  .justify-start {\n    justify-content: flex-start;\n  }\n  .justify-stretch {\n    justify-content: stretch;\n  }\n  .\\!gap-4 {\n    gap: calc(var(--spacing) * 4) !important;\n  }\n  .gap-0 {\n    gap: calc(var(--spacing) * 0);\n  }\n  .gap-0\\.5 {\n    gap: calc(var(--spacing) * 0.5);\n  }\n  .gap-1 {\n    gap: calc(var(--spacing) * 1);\n  }\n  .gap-1\\.5 {\n    gap: calc(var(--spacing) * 1.5);\n  }\n  .gap-2 {\n    gap: calc(var(--spacing) * 2);\n  }\n  .gap-2\\.5 {\n    gap: calc(var(--spacing) * 2.5);\n  }\n  .gap-3 {\n    gap: calc(var(--spacing) * 3);\n  }\n  .gap-3\\.5 {\n    gap: calc(var(--spacing) * 3.5);\n  }\n  .gap-4 {\n    gap: calc(var(--spacing) * 4);\n  }\n  .gap-5 {\n    gap: calc(var(--spacing) * 5);\n  }\n  .gap-6 {\n    gap: calc(var(--spacing) * 6);\n  }\n  .gap-6\\.5 {\n    gap: calc(var(--spacing) * 6.5);\n  }\n  .gap-7 {\n    gap: calc(var(--spacing) * 7);\n  }\n  .gap-8 {\n    gap: calc(var(--spacing) * 8);\n  }\n  .gap-12 {\n    gap: calc(var(--spacing) * 12);\n  }\n  .gap-\\[\\.5rem\\] {\n    gap: .5rem;\n  }\n  .gap-\\[\\.25rem\\] {\n    gap: .25rem;\n  }\n  .gap-\\[0\\.1875em\\] {\n    gap: 0.1875em;\n  }\n  .gap-\\[1ch\\] {\n    gap: 1ch;\n  }\n  .gap-\\[1px\\] {\n    gap: 1px;\n  }\n  .gap-\\[4px\\] {\n    gap: 4px;\n  }\n  .gap-\\[6px\\] {\n    gap: 6px;\n  }\n  .gap-\\[7px\\] {\n    gap: 7px;\n  }\n  .gap-\\[8px\\] {\n    gap: 8px;\n  }\n  .gap-\\[10px\\] {\n    gap: 10px;\n  }\n  .gap-px {\n    gap: 1px;\n  }\n  .space-y-0 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 0) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 0) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-0\\.5 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 0.5) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 0.5) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-1 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-2 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-2\\.5 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-3 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-4 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-5 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-6 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-8 {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));\n      margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-\\[var\\(--gap\\)\\] {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(var(--gap) * var(--tw-space-y-reverse));\n      margin-block-end: calc(var(--gap) * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-px {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 0;\n      margin-block-start: calc(1px * var(--tw-space-y-reverse));\n      margin-block-end: calc(1px * calc(1 - var(--tw-space-y-reverse)));\n    }\n  }\n  .space-y-reverse {\n    :where(& > :not(:last-child)) {\n      --tw-space-y-reverse: 1;\n    }\n  }\n  .gap-x-0\\.5 {\n    column-gap: calc(var(--spacing) * 0.5);\n  }\n  .gap-x-2 {\n    column-gap: calc(var(--spacing) * 2);\n  }\n  .gap-x-3 {\n    column-gap: calc(var(--spacing) * 3);\n  }\n  .gap-x-4 {\n    column-gap: calc(var(--spacing) * 4);\n  }\n  .gap-x-6 {\n    column-gap: calc(var(--spacing) * 6);\n  }\n  .space-x-1 {\n    :where(& > :not(:last-child)) {\n      --tw-space-x-reverse: 0;\n      margin-inline-start: calc(calc(var(--spacing) * 1) * var(--tw-space-x-reverse));\n      margin-inline-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-x-reverse)));\n    }\n  }\n  .space-x-2 {\n    :where(& > :not(:last-child)) {\n      --tw-space-x-reverse: 0;\n      margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));\n      margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));\n    }\n  }\n  .space-x-3 {\n    :where(& > :not(:last-child)) {\n      --tw-space-x-reverse: 0;\n      margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));\n      margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));\n    }\n  }\n  .space-x-4 {\n    :where(& > :not(:last-child)) {\n      --tw-space-x-reverse: 0;\n      margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));\n      margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));\n    }\n  }\n  .space-x-reverse {\n    :where(& > :not(:last-child)) {\n      --tw-space-x-reverse: 1;\n    }\n  }\n  .gap-y-0 {\n    row-gap: calc(var(--spacing) * 0);\n  }\n  .gap-y-0\\.5 {\n    row-gap: calc(var(--spacing) * 0.5);\n  }\n  .gap-y-1 {\n    row-gap: calc(var(--spacing) * 1);\n  }\n  .gap-y-1\\.5 {\n    row-gap: calc(var(--spacing) * 1.5);\n  }\n  .gap-y-2 {\n    row-gap: calc(var(--spacing) * 2);\n  }\n  .gap-y-2\\.5 {\n    row-gap: calc(var(--spacing) * 2.5);\n  }\n  .gap-y-3 {\n    row-gap: calc(var(--spacing) * 3);\n  }\n  .gap-y-4 {\n    row-gap: calc(var(--spacing) * 4);\n  }\n  .gap-y-5 {\n    row-gap: calc(var(--spacing) * 5);\n  }\n  .gap-y-px {\n    row-gap: 1px;\n  }\n  .divide-x {\n    :where(& > :not(:last-child)) {\n      --tw-divide-x-reverse: 0;\n      border-inline-style: var(--tw-border-style);\n      border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));\n      border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n    }\n  }\n  .divide-x-0 {\n    :where(& > :not(:last-child)) {\n      --tw-divide-x-reverse: 0;\n      border-inline-style: var(--tw-border-style);\n      border-inline-start-width: calc(0px * var(--tw-divide-x-reverse));\n      border-inline-end-width: calc(0px * calc(1 - var(--tw-divide-x-reverse)));\n    }\n  }\n  .divide-y {\n    :where(& > :not(:last-child)) {\n      --tw-divide-y-reverse: 0;\n      border-bottom-style: var(--tw-border-style);\n      border-top-style: var(--tw-border-style);\n      border-top-width: calc(1px * var(--tw-divide-y-reverse));\n      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n    }\n  }\n  .divide-y-reverse {\n    :where(& > :not(:last-child)) {\n      --tw-divide-y-reverse: 1;\n    }\n  }\n  .divide-accent {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-accent);\n    }\n  }\n  .divide-border {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-border);\n    }\n  }\n  .divide-cl1-red-8 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-cl1-red-8);\n    }\n  }\n  .divide-color {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-color);\n    }\n  }\n  .divide-gray-200 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-gray-200);\n    }\n  }\n  .divide-gray-300 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-gray-300);\n    }\n  }\n  .divide-kumo-fill {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-kumo-fill);\n    }\n  }\n  .divide-neutral-100 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-neutral-100);\n    }\n  }\n  .divide-neutral-200 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-neutral-200);\n    }\n  }\n  .divide-neutral-250 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-neutral-250);\n    }\n  }\n  .divide-neutral-300 {\n    :where(& > :not(:last-child)) {\n      border-color: var(--color-neutral-300);\n    }\n  }\n  .divide-neutral-950\\/10 {\n    :where(& > :not(:last-child)) {\n      border-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n      }\n    }\n  }\n  .place-self-end {\n    place-self: end;\n  }\n  .self-center {\n    align-self: center;\n  }\n  .self-end {\n    align-self: flex-end;\n  }\n  .self-start {\n    align-self: flex-start;\n  }\n  .self-stretch {\n    align-self: stretch;\n  }\n  .justify-self-center {\n    justify-self: center;\n  }\n  .justify-self-end {\n    justify-self: flex-end;\n  }\n  .justify-self-start {\n    justify-self: flex-start;\n  }\n  .truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .\\!overflow-visible {\n    overflow: visible !important;\n  }\n  .overflow-auto {\n    overflow: auto;\n  }\n  .overflow-clip {\n    overflow: clip;\n  }\n  .overflow-hidden {\n    overflow: hidden;\n  }\n  .overflow-scroll {\n    overflow: scroll;\n  }\n  .overflow-visible {\n    overflow: visible;\n  }\n  .overflow-visible\\! {\n    overflow: visible !important;\n  }\n  .overflow-x-auto {\n    overflow-x: auto;\n  }\n  .overflow-x-clip {\n    overflow-x: clip;\n  }\n  .overflow-x-hidden {\n    overflow-x: hidden;\n  }\n  .overflow-x-scroll {\n    overflow-x: scroll;\n  }\n  .overflow-x-visible {\n    overflow-x: visible;\n  }\n  .\\!overflow-y-auto {\n    overflow-y: auto !important;\n  }\n  .overflow-y-auto {\n    overflow-y: auto;\n  }\n  .overflow-y-clip {\n    overflow-y: clip;\n  }\n  .overflow-y-hidden {\n    overflow-y: hidden;\n  }\n  .overflow-y-scroll {\n    overflow-y: scroll;\n  }\n  .overscroll-contain {\n    overscroll-behavior: contain;\n  }\n  .\\!rounded {\n    border-radius: 0.25rem !important;\n  }\n  .\\!rounded-lg {\n    border-radius: var(--radius-lg) !important;\n  }\n  .\\!rounded-md {\n    border-radius: var(--radius-md) !important;\n  }\n  .\\!rounded-none {\n    border-radius: 0 !important;\n  }\n  .rounded {\n    border-radius: 0.25rem;\n  }\n  .rounded-2xl {\n    border-radius: var(--radius-2xl);\n  }\n  .rounded-3xl {\n    border-radius: var(--radius-3xl);\n  }\n  .rounded-\\[1\\.5px\\] {\n    border-radius: 1.5px;\n  }\n  .rounded-\\[7px\\] {\n    border-radius: 7px;\n  }\n  .rounded-\\[10px\\] {\n    border-radius: 10px;\n  }\n  .rounded-\\[11px\\] {\n    border-radius: 11px;\n  }\n  .rounded-\\[12px\\] {\n    border-radius: 12px;\n  }\n  .rounded-\\[inherit\\] {\n    border-radius: inherit;\n  }\n  .rounded-full {\n    border-radius: calc(infinity * 1px);\n  }\n  .rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .rounded-md {\n    border-radius: var(--radius-md);\n  }\n  .rounded-none {\n    border-radius: 0;\n  }\n  .rounded-sm {\n    border-radius: var(--radius-sm);\n  }\n  .rounded-xl {\n    border-radius: var(--radius-xl);\n  }\n  .rounded-xl\\! {\n    border-radius: var(--radius-xl) !important;\n  }\n  .rounded-xs {\n    border-radius: var(--radius-xs);\n  }\n  .rounded-s {\n    border-start-start-radius: 0.25rem;\n    border-end-start-radius: 0.25rem;\n  }\n  .rounded-ss {\n    border-start-start-radius: 0.25rem;\n  }\n  .rounded-e {\n    border-start-end-radius: 0.25rem;\n    border-end-end-radius: 0.25rem;\n  }\n  .rounded-se {\n    border-start-end-radius: 0.25rem;\n  }\n  .rounded-ee {\n    border-end-end-radius: 0.25rem;\n  }\n  .rounded-es {\n    border-end-start-radius: 0.25rem;\n  }\n  .\\!rounded-t-none {\n    border-top-left-radius: 0 !important;\n    border-top-right-radius: 0 !important;\n  }\n  .rounded-t {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n  }\n  .rounded-t-\\[10px\\] {\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n  }\n  .rounded-t-lg {\n    border-top-left-radius: var(--radius-lg);\n    border-top-right-radius: var(--radius-lg);\n  }\n  .rounded-t-md {\n    border-top-left-radius: var(--radius-md);\n    border-top-right-radius: var(--radius-md);\n  }\n  .rounded-t-none {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n  .rounded-t-xl {\n    border-top-left-radius: var(--radius-xl);\n    border-top-right-radius: var(--radius-xl);\n  }\n  .rounded-t-xs {\n    border-top-left-radius: var(--radius-xs);\n    border-top-right-radius: var(--radius-xs);\n  }\n  .rounded-l {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n  .rounded-l-2xl {\n    border-top-left-radius: var(--radius-2xl);\n    border-bottom-left-radius: var(--radius-2xl);\n  }\n  .rounded-l-\\[50px\\] {\n    border-top-left-radius: 50px;\n    border-bottom-left-radius: 50px;\n  }\n  .rounded-l-lg {\n    border-top-left-radius: var(--radius-lg);\n    border-bottom-left-radius: var(--radius-lg);\n  }\n  .rounded-l-none {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .rounded-l-sm {\n    border-top-left-radius: var(--radius-sm);\n    border-bottom-left-radius: var(--radius-sm);\n  }\n  .rounded-l-xs {\n    border-top-left-radius: var(--radius-xs);\n    border-bottom-left-radius: var(--radius-xs);\n  }\n  .rounded-tl {\n    border-top-left-radius: 0.25rem;\n  }\n  .rounded-tl-\\[5px\\] {\n    border-top-left-radius: 5px;\n  }\n  .rounded-tl-lg {\n    border-top-left-radius: var(--radius-lg);\n  }\n  .rounded-tl-none {\n    border-top-left-radius: 0;\n  }\n  .rounded-tl-xl {\n    border-top-left-radius: var(--radius-xl);\n  }\n  .rounded-r {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n  }\n  .rounded-r-lg {\n    border-top-right-radius: var(--radius-lg);\n    border-bottom-right-radius: var(--radius-lg);\n  }\n  .rounded-r-md {\n    border-top-right-radius: var(--radius-md);\n    border-bottom-right-radius: var(--radius-md);\n  }\n  .rounded-r-none {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .rounded-r-xs {\n    border-top-right-radius: var(--radius-xs);\n    border-bottom-right-radius: var(--radius-xs);\n  }\n  .rounded-tr {\n    border-top-right-radius: 0.25rem;\n  }\n  .rounded-tr-\\[5px\\] {\n    border-top-right-radius: 5px;\n  }\n  .rounded-tr-lg {\n    border-top-right-radius: var(--radius-lg);\n  }\n  .rounded-tr-none {\n    border-top-right-radius: 0;\n  }\n  .rounded-tr-xl {\n    border-top-right-radius: var(--radius-xl);\n  }\n  .rounded-b {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n  .rounded-b-lg {\n    border-bottom-right-radius: var(--radius-lg);\n    border-bottom-left-radius: var(--radius-lg);\n  }\n  .rounded-b-xl {\n    border-bottom-right-radius: var(--radius-xl);\n    border-bottom-left-radius: var(--radius-xl);\n  }\n  .\\!rounded-br-none {\n    border-bottom-right-radius: 0 !important;\n  }\n  .rounded-br {\n    border-bottom-right-radius: 0.25rem;\n  }\n  .rounded-br-\\[5px\\] {\n    border-bottom-right-radius: 5px;\n  }\n  .rounded-br-lg {\n    border-bottom-right-radius: var(--radius-lg);\n  }\n  .rounded-br-xl {\n    border-bottom-right-radius: var(--radius-xl);\n  }\n  .rounded-bl {\n    border-bottom-left-radius: 0.25rem;\n  }\n  .rounded-bl-\\[5px\\] {\n    border-bottom-left-radius: 5px;\n  }\n  .rounded-bl-lg {\n    border-bottom-left-radius: var(--radius-lg);\n  }\n  .rounded-bl-xl {\n    border-bottom-left-radius: var(--radius-xl);\n  }\n  .\\!border {\n    border-style: var(--tw-border-style) !important;\n    border-width: 1px !important;\n  }\n  .\\!border-0 {\n    border-style: var(--tw-border-style) !important;\n    border-width: 0px !important;\n  }\n  .border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .border-0 {\n    border-style: var(--tw-border-style);\n    border-width: 0px;\n  }\n  .border-0\\! {\n    border-style: var(--tw-border-style) !important;\n    border-width: 0px !important;\n  }\n  .border-1 {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .border-2 {\n    border-style: var(--tw-border-style);\n    border-width: 2px;\n  }\n  .border-4 {\n    border-style: var(--tw-border-style);\n    border-width: 4px;\n  }\n  .border-\\[0\\.5px\\] {\n    border-style: var(--tw-border-style);\n    border-width: 0.5px;\n  }\n  .border-\\[1\\.5px\\] {\n    border-style: var(--tw-border-style);\n    border-width: 1.5px;\n  }\n  .border-x {\n    border-inline-style: var(--tw-border-style);\n    border-inline-width: 1px;\n  }\n  .border-x-0 {\n    border-inline-style: var(--tw-border-style);\n    border-inline-width: 0px;\n  }\n  .\\!border-y-0 {\n    border-block-style: var(--tw-border-style) !important;\n    border-block-width: 0px !important;\n  }\n  .border-y {\n    border-block-style: var(--tw-border-style);\n    border-block-width: 1px;\n  }\n  .border-y-0 {\n    border-block-style: var(--tw-border-style);\n    border-block-width: 0px;\n  }\n  .border-s {\n    border-inline-start-style: var(--tw-border-style);\n    border-inline-start-width: 1px;\n  }\n  .border-e {\n    border-inline-end-style: var(--tw-border-style);\n    border-inline-end-width: 1px;\n  }\n  .border-t {\n    border-top-style: var(--tw-border-style);\n    border-top-width: 1px;\n  }\n  .border-t-0 {\n    border-top-style: var(--tw-border-style);\n    border-top-width: 0px;\n  }\n  .border-t-2 {\n    border-top-style: var(--tw-border-style);\n    border-top-width: 2px;\n  }\n  .\\!border-r {\n    border-right-style: var(--tw-border-style) !important;\n    border-right-width: 1px !important;\n  }\n  .\\!border-r-0 {\n    border-right-style: var(--tw-border-style) !important;\n    border-right-width: 0px !important;\n  }\n  .border-r {\n    border-right-style: var(--tw-border-style);\n    border-right-width: 1px;\n  }\n  .border-r-0 {\n    border-right-style: var(--tw-border-style);\n    border-right-width: 0px;\n  }\n  .border-r-2 {\n    border-right-style: var(--tw-border-style);\n    border-right-width: 2px;\n  }\n  .border-b {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 1px;\n  }\n  .border-b-0 {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 0px;\n  }\n  .border-b-1 {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 1px;\n  }\n  .border-b-2 {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 2px;\n  }\n  .border-b-4 {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 4px;\n  }\n  .\\!border-l {\n    border-left-style: var(--tw-border-style) !important;\n    border-left-width: 1px !important;\n  }\n  .\\!border-l-0 {\n    border-left-style: var(--tw-border-style) !important;\n    border-left-width: 0px !important;\n  }\n  .border-l {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 1px;\n  }\n  .border-l\\! {\n    border-left-style: var(--tw-border-style) !important;\n    border-left-width: 1px !important;\n  }\n  .border-l-0 {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 0px;\n  }\n  .border-l-1 {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 1px;\n  }\n  .border-l-2 {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 2px;\n  }\n  .border-l-4 {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 4px;\n  }\n  .\\!border-none {\n    --tw-border-style: none !important;\n    border-style: none !important;\n  }\n  .border-dashed {\n    --tw-border-style: dashed;\n    border-style: dashed;\n  }\n  .border-dotted {\n    --tw-border-style: dotted;\n    border-style: dotted;\n  }\n  .border-none {\n    --tw-border-style: none;\n    border-style: none;\n  }\n  .border-solid {\n    --tw-border-style: solid;\n    border-style: solid;\n  }\n  .\\!border-blue-500 {\n    border-color: var(--color-blue-500) !important;\n  }\n  .\\!border-blue-600 {\n    border-color: var(--color-blue-600) !important;\n  }\n  .\\!border-border {\n    border-color: var(--color-border) !important;\n  }\n  .\\!border-neutral-200 {\n    border-color: var(--color-neutral-200) !important;\n  }\n  .\\!border-neutral-300 {\n    border-color: var(--color-neutral-300) !important;\n  }\n  .border-\\(--color-background\\) {\n    border-color: var(--color-background);\n  }\n  .border-\\(--color-connector\\) {\n    border-color: var(--color-connector);\n  }\n  .border-\\[\\#8d1eb1\\] {\n    border-color: #8d1eb1;\n  }\n  .border-\\[\\#4794FF\\] {\n    border-color: #4794FF;\n  }\n  .border-\\[\\#B6B6B6\\] {\n    border-color: #B6B6B6;\n  }\n  .border-\\[\\#CCCCCC66\\] {\n    border-color: #CCCCCC66;\n  }\n  .border-\\[\\#F42500\\] {\n    border-color: #F42500;\n  }\n  .border-\\[\\#FFC439\\]\\! {\n    border-color: #FFC439 !important;\n  }\n  .border-\\[\\#c05d08\\] {\n    border-color: #c05d08;\n  }\n  .border-\\[\\#e80954\\] {\n    border-color: #e80954;\n  }\n  .border-\\[var\\(--kumo-border\\)\\] {\n    border-color: var(--kumo-border);\n  }\n  .border-\\[var\\(--kumo-muted-foreground\\)\\] {\n    border-color: var(--kumo-muted-foreground);\n  }\n  .border-accent {\n    border-color: var(--color-accent);\n  }\n  .border-active {\n    border-color: var(--color-active);\n  }\n  .border-amber-200 {\n    border-color: var(--color-amber-200);\n  }\n  .border-amber-500\\/30 {\n    border-color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 30%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-amber-500) 30%, transparent);\n    }\n  }\n  .border-black\\/15 {\n    border-color: color-mix(in srgb, #000 15%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-black) 15%, transparent);\n    }\n  }\n  .border-black\\/20 {\n    border-color: color-mix(in srgb, #000 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-black) 20%, transparent);\n    }\n  }\n  .border-blue-100 {\n    border-color: var(--color-blue-100);\n  }\n  .border-blue-200 {\n    border-color: var(--color-blue-200);\n  }\n  .border-blue-300 {\n    border-color: var(--color-blue-300);\n  }\n  .border-blue-400 {\n    border-color: var(--color-blue-400);\n  }\n  .border-blue-500 {\n    border-color: var(--color-blue-500);\n  }\n  .border-blue-500\\/30 {\n    border-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 30%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-blue-500) 30%, transparent);\n    }\n  }\n  .border-blue-600 {\n    border-color: var(--color-blue-600);\n  }\n  .border-blue-600\\/20 {\n    border-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-blue-600) 20%, transparent);\n    }\n  }\n  .border-blue-600\\/25 {\n    border-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-blue-600) 25%, transparent);\n    }\n  }\n  .border-blue-600\\/40 {\n    border-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 40%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-blue-600) 40%, transparent);\n    }\n  }\n  .border-border {\n    border-color: var(--color-border);\n  }\n  .border-border\\/50 {\n    border-color: var(--color-border);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-border) 50%, transparent);\n    }\n  }\n  .border-border\\/60 {\n    border-color: var(--color-border);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-border) 60%, transparent);\n    }\n  }\n  .border-border\\/80 {\n    border-color: var(--color-border);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-border) 80%, transparent);\n    }\n  }\n  .border-cl1-blue-4 {\n    border-color: var(--color-cl1-blue-4);\n  }\n  .border-cl1-gold-5 {\n    border-color: var(--color-cl1-gold-5);\n  }\n  .border-cl1-gray-4 {\n    border-color: var(--color-cl1-gray-4);\n  }\n  .border-cl1-gray-6 {\n    border-color: var(--color-cl1-gray-6);\n  }\n  .border-cl1-gray-7 {\n    border-color: var(--color-cl1-gray-7);\n  }\n  .border-cl1-gray-8 {\n    border-color: var(--color-cl1-gray-8);\n  }\n  .border-cl1-red-3 {\n    border-color: var(--color-cl1-red-3);\n  }\n  .border-cl1-red-4 {\n    border-color: var(--color-cl1-red-4);\n  }\n  .border-cl1-red-6 {\n    border-color: var(--color-cl1-red-6);\n  }\n  .border-cl1-red-7 {\n    border-color: var(--color-cl1-red-7);\n  }\n  .border-color {\n    border-color: var(--color-color);\n  }\n  .border-current {\n    border-color: currentcolor;\n  }\n  .border-error {\n    border-color: var(--color-error);\n  }\n  .border-gray-100 {\n    border-color: var(--color-gray-100);\n  }\n  .border-gray-200 {\n    border-color: var(--color-gray-200);\n  }\n  .border-gray-300 {\n    border-color: var(--color-gray-300);\n  }\n  .border-gray-400 {\n    border-color: var(--color-gray-400);\n  }\n  .border-gray-500 {\n    border-color: var(--color-gray-500);\n  }\n  .border-gray-500\\/30 {\n    border-color: color-mix(in srgb, oklch(55.1% 0.027 264.364) 30%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-gray-500) 30%, transparent);\n    }\n  }\n  .border-green-200 {\n    border-color: var(--color-green-200);\n  }\n  .border-green-300 {\n    border-color: var(--color-green-300);\n  }\n  .border-green-500 {\n    border-color: var(--color-green-500);\n  }\n  .border-hover {\n    border-color: var(--color-hover);\n  }\n  .border-kumo-brand {\n    border-color: var(--color-kumo-brand);\n  }\n  .border-kumo-danger {\n    border-color: var(--color-kumo-danger);\n  }\n  .border-kumo-fill {\n    border-color: var(--color-kumo-fill);\n  }\n  .border-kumo-fill\\/60 {\n    border-color: color-mix(in srgb, light-dark(\n    var(--color-neutral-200, oklch(92.2% 0 0)),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  ) 60%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-kumo-fill) 60%, transparent);\n    }\n  }\n  .border-kumo-info {\n    border-color: var(--color-kumo-info);\n  }\n  .border-kumo-line {\n    border-color: var(--color-kumo-line);\n  }\n  .border-kumo-line\\! {\n    border-color: var(--color-kumo-line) !important;\n  }\n  .border-kumo-warning {\n    border-color: var(--color-kumo-warning);\n  }\n  .border-neutral-100 {\n    border-color: var(--color-neutral-100);\n  }\n  .border-neutral-100\\! {\n    border-color: var(--color-neutral-100) !important;\n  }\n  .border-neutral-150 {\n    border-color: var(--color-neutral-150);\n  }\n  .border-neutral-200 {\n    border-color: var(--color-neutral-200);\n  }\n  .border-neutral-200\\/50 {\n    border-color: color-mix(in srgb, oklch(92.2% 0 0) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-neutral-200) 50%, transparent);\n    }\n  }\n  .border-neutral-200\\/60 {\n    border-color: color-mix(in srgb, oklch(92.2% 0 0) 60%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-neutral-200) 60%, transparent);\n    }\n  }\n  .border-neutral-200\\/70 {\n    border-color: color-mix(in srgb, oklch(92.2% 0 0) 70%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-neutral-200) 70%, transparent);\n    }\n  }\n  .border-neutral-250 {\n    border-color: var(--color-neutral-250);\n  }\n  .border-neutral-300 {\n    border-color: var(--color-neutral-300);\n  }\n  .border-neutral-300\\/75 {\n    border-color: color-mix(in srgb, oklch(87% 0 0) 75%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-neutral-300) 75%, transparent);\n    }\n  }\n  .border-neutral-400 {\n    border-color: var(--color-neutral-400);\n  }\n  .border-neutral-600 {\n    border-color: var(--color-neutral-600);\n  }\n  .border-neutral-700 {\n    border-color: var(--color-neutral-700);\n  }\n  .border-neutral-900 {\n    border-color: var(--color-neutral-900);\n  }\n  .border-neutral-950\\/10 {\n    border-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n    }\n  }\n  .border-neutral-950\\/15 {\n    border-color: color-mix(in srgb, oklch(14.5% 0 0) 15%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-neutral-950) 15%, transparent);\n    }\n  }\n  .border-neutral-950\\/20 {\n    border-color: color-mix(in srgb, oklch(14.5% 0 0) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-neutral-950) 20%, transparent);\n    }\n  }\n  .border-orange-300 {\n    border-color: var(--color-orange-300);\n  }\n  .border-orange-400 {\n    border-color: var(--color-orange-400);\n  }\n  .border-primary {\n    border-color: var(--color-primary);\n  }\n  .border-red-100 {\n    border-color: var(--color-red-100);\n  }\n  .border-red-200 {\n    border-color: var(--color-red-200);\n  }\n  .border-red-300 {\n    border-color: var(--color-red-300);\n  }\n  .border-red-400 {\n    border-color: var(--color-red-400);\n  }\n  .border-red-500 {\n    border-color: var(--color-red-500);\n  }\n  .border-red-500\\/30 {\n    border-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 30%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-red-500) 30%, transparent);\n    }\n  }\n  .border-red-600\\/25 {\n    border-color: color-mix(in srgb, oklch(57.7% 0.245 27.325) 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      border-color: color-mix(in oklab, var(--color-red-600) 25%, transparent);\n    }\n  }\n  .border-red-700 {\n    border-color: var(--color-red-700);\n  }\n  .border-transparent {\n    border-color: transparent;\n  }\n  .border-white {\n    border-color: var(--color-white);\n  }\n  .border-yellow-200 {\n    border-color: var(--color-yellow-200);\n  }\n  .border-yellow-300 {\n    border-color: var(--color-yellow-300);\n  }\n  .border-yellow-500 {\n    border-color: var(--color-yellow-500);\n  }\n  .border-zinc-500 {\n    border-color: var(--color-zinc-500);\n  }\n  .border-t-blue-500 {\n    border-top-color: var(--color-blue-500);\n  }\n  .border-t-neutral-200 {\n    border-top-color: var(--color-neutral-200);\n  }\n  .border-t-transparent {\n    border-top-color: transparent;\n  }\n  .border-r-neutral-900 {\n    border-right-color: var(--color-neutral-900);\n  }\n  .\\!border-b-primary\\/80 {\n    border-bottom-color: color-mix(in srgb, light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  ) 80%, transparent) !important;\n    @supports (color: color-mix(in lab, red, red)) {\n      border-bottom-color: color-mix(in oklab, var(--color-primary) 80%, transparent) !important;\n    }\n  }\n  .border-b-border {\n    border-bottom-color: var(--color-border);\n  }\n  .border-b-neutral-200 {\n    border-bottom-color: var(--color-neutral-200);\n  }\n  .border-b-neutral-900 {\n    border-bottom-color: var(--color-neutral-900);\n  }\n  .border-b-transparent\\! {\n    border-bottom-color: transparent !important;\n  }\n  .border-l-cl1-gray-8 {\n    border-left-color: var(--color-cl1-gray-8);\n  }\n  .border-l-neutral-200 {\n    border-left-color: var(--color-neutral-200);\n  }\n  .\\!bg-\\[\\#f6821f1a\\] {\n    background-color: #f6821f1a !important;\n  }\n  .\\!bg-accent {\n    background-color: var(--color-accent) !important;\n  }\n  .\\!bg-blue-600 {\n    background-color: var(--color-blue-600) !important;\n  }\n  .\\!bg-kumo-contrast {\n    background-color: var(--color-kumo-contrast) !important;\n  }\n  .\\!bg-neutral-50 {\n    background-color: var(--color-neutral-50) !important;\n  }\n  .\\!bg-neutral-100 {\n    background-color: var(--color-neutral-100) !important;\n  }\n  .\\!bg-neutral-300 {\n    background-color: var(--color-neutral-300) !important;\n  }\n  .\\!bg-neutral-500 {\n    background-color: var(--color-neutral-500) !important;\n  }\n  .\\!bg-orange-500 {\n    background-color: var(--color-orange-500) !important;\n  }\n  .\\!bg-surface {\n    background-color: var(--color-surface) !important;\n  }\n  .\\!bg-surface-secondary {\n    background-color: var(--color-surface-secondary) !important;\n  }\n  .\\!bg-transparent {\n    background-color: transparent !important;\n  }\n  .bg-\\(--color-background\\) {\n    background-color: var(--color-background);\n  }\n  .bg-\\(--color-connector\\) {\n    background-color: var(--color-connector);\n  }\n  .bg-\\(--color-connector-active\\) {\n    background-color: var(--color-connector-active);\n  }\n  .bg-\\[\\#6B4FBB\\] {\n    background-color: #6B4FBB;\n  }\n  .bg-\\[\\#4794FF\\]\\/20 {\n    background-color: color-mix(in oklab, #4794FF 20%, transparent);\n  }\n  .bg-\\[\\#4794FF\\]\\/30 {\n    background-color: color-mix(in oklab, #4794FF 30%, transparent);\n  }\n  .bg-\\[\\#F8F8F8\\] {\n    background-color: #F8F8F8;\n  }\n  .bg-\\[\\#F42500\\] {\n    background-color: #F42500;\n  }\n  .bg-\\[\\#F42500\\]\\/20 {\n    background-color: color-mix(in oklab, #F42500 20%, transparent);\n  }\n  .bg-\\[\\#F42500\\]\\/30 {\n    background-color: color-mix(in oklab, #F42500 30%, transparent);\n  }\n  .bg-\\[\\#FC6D26\\] {\n    background-color: #FC6D26;\n  }\n  .bg-\\[\\#FFC439\\]\\! {\n    background-color: #FFC439 !important;\n  }\n  .bg-\\[\\#ccf\\] {\n    background-color: #ccf;\n  }\n  .bg-\\[\\#ebebeb\\] {\n    background-color: #ebebeb;\n  }\n  .bg-\\[\\#f6821f\\] {\n    background-color: #f6821f;\n  }\n  .bg-\\[\\#ffd140\\] {\n    background-color: #ffd140;\n  }\n  .bg-\\[\\#ffe693\\] {\n    background-color: #ffe693;\n  }\n  .bg-\\[rgba\\(255\\,255\\,255\\,0\\.1\\)\\] {\n    background-color: rgba(255,255,255,0.1);\n  }\n  .bg-\\[var\\(--color-accent\\)\\] {\n    background-color: var(--color-accent);\n  }\n  .bg-\\[var\\(--color-kumo-overlay\\)\\] {\n    background-color: var(--color-kumo-overlay);\n  }\n  .bg-\\[var\\(--kumo-muted-foreground\\)\\] {\n    background-color: var(--kumo-muted-foreground);\n  }\n  .bg-accent {\n    background-color: var(--color-accent);\n  }\n  .bg-accent\\/60 {\n    background-color: color-mix(in srgb, light-dark(\n    var(--color-neutral-150, oklch(0.96 0 0)),\n    var(--color-neutral-850, oklch(0.23 0 0))\n  ) 60%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-accent) 60%, transparent);\n    }\n  }\n  .bg-amber-50 {\n    background-color: var(--color-amber-50);\n  }\n  .bg-amber-200 {\n    background-color: var(--color-amber-200);\n  }\n  .bg-amber-500 {\n    background-color: var(--color-amber-500);\n  }\n  .bg-amber-500\\/10 {\n    background-color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-amber-500) 10%, transparent);\n    }\n  }\n  .bg-amber-500\\/30 {\n    background-color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 30%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-amber-500) 30%, transparent);\n    }\n  }\n  .bg-bg-primary {\n    background-color: var(--color-bg-primary);\n  }\n  .bg-bg-secondary {\n    background-color: var(--color-bg-secondary);\n  }\n  .bg-black {\n    background-color: var(--color-black);\n  }\n  .bg-black\\/5 {\n    background-color: color-mix(in srgb, #000 5%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-black) 5%, transparent);\n    }\n  }\n  .bg-black\\/10 {\n    background-color: color-mix(in srgb, #000 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-black) 10%, transparent);\n    }\n  }\n  .bg-black\\/20 {\n    background-color: color-mix(in srgb, #000 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-black) 20%, transparent);\n    }\n  }\n  .bg-black\\/30 {\n    background-color: color-mix(in srgb, #000 30%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-black) 30%, transparent);\n    }\n  }\n  .bg-black\\/40 {\n    background-color: color-mix(in srgb, #000 40%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);\n    }\n  }\n  .bg-black\\/80 {\n    background-color: color-mix(in srgb, #000 80%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-black) 80%, transparent);\n    }\n  }\n  .bg-blue-50 {\n    background-color: var(--color-blue-50);\n  }\n  .bg-blue-50\\/90 {\n    background-color: color-mix(in srgb, oklch(97% 0.014 254.604) 90%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-blue-50) 90%, transparent);\n    }\n  }\n  .bg-blue-100 {\n    background-color: var(--color-blue-100);\n  }\n  .bg-blue-200 {\n    background-color: var(--color-blue-200);\n  }\n  .bg-blue-300 {\n    background-color: var(--color-blue-300);\n  }\n  .bg-blue-300\\/20 {\n    background-color: color-mix(in srgb, oklch(80.9% 0.105 251.813) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-blue-300) 20%, transparent);\n    }\n  }\n  .bg-blue-300\\/50 {\n    background-color: color-mix(in srgb, oklch(80.9% 0.105 251.813) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-blue-300) 50%, transparent);\n    }\n  }\n  .bg-blue-400 {\n    background-color: var(--color-blue-400);\n  }\n  .bg-blue-500 {\n    background-color: var(--color-blue-500);\n  }\n  .bg-blue-500\\/10 {\n    background-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-blue-500) 10%, transparent);\n    }\n  }\n  .bg-blue-500\\/20 {\n    background-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-blue-500) 20%, transparent);\n    }\n  }\n  .bg-blue-600 {\n    background-color: var(--color-blue-600);\n  }\n  .bg-blue-600\\/20 {\n    background-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-blue-600) 20%, transparent);\n    }\n  }\n  .bg-border {\n    background-color: var(--color-border);\n  }\n  .bg-cl1-black {\n    background-color: var(--color-cl1-black);\n  }\n  .bg-cl1-blue-5 {\n    background-color: var(--color-cl1-blue-5);\n  }\n  .bg-cl1-blue-6 {\n    background-color: var(--color-cl1-blue-6);\n  }\n  .bg-cl1-blue-7\\/20 {\n    background-color: var(--color-cl1-blue-7);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-cl1-blue-7) 20%, transparent);\n    }\n  }\n  .bg-cl1-blue-9 {\n    background-color: var(--color-cl1-blue-9);\n  }\n  .bg-cl1-cyan-9 {\n    background-color: var(--color-cl1-cyan-9);\n  }\n  .bg-cl1-gold-6 {\n    background-color: var(--color-cl1-gold-6);\n  }\n  .bg-cl1-gray-5 {\n    background-color: var(--color-cl1-gray-5);\n  }\n  .bg-cl1-gray-6 {\n    background-color: var(--color-cl1-gray-6);\n  }\n  .bg-cl1-gray-7\\/10 {\n    background-color: var(--color-cl1-gray-7);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-cl1-gray-7) 10%, transparent);\n    }\n  }\n  .bg-cl1-gray-8 {\n    background-color: var(--color-cl1-gray-8);\n  }\n  .bg-cl1-gray-9 {\n    background-color: var(--color-cl1-gray-9);\n  }\n  .bg-cl1-green-6 {\n    background-color: var(--color-cl1-green-6);\n  }\n  .bg-cl1-red-6 {\n    background-color: var(--color-cl1-red-6);\n  }\n  .bg-cl1-red-7\\/40 {\n    background-color: var(--color-cl1-red-7);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-cl1-red-7) 40%, transparent);\n    }\n  }\n  .bg-cl1-red-9 {\n    background-color: var(--color-cl1-red-9);\n  }\n  .bg-cl1-white {\n    background-color: var(--color-cl1-white);\n  }\n  .bg-color {\n    background-color: var(--color-color);\n  }\n  .bg-color-3 {\n    background-color: var(--color-color-3);\n  }\n  .bg-current {\n    background-color: currentcolor;\n  }\n  .bg-cyan-100 {\n    background-color: var(--color-cyan-100);\n  }\n  .bg-emerald-600 {\n    background-color: var(--color-emerald-600);\n  }\n  .bg-error\\/20 {\n    background-color: color-mix(in srgb, light-dark(\n    var(--color-red-500, oklch(63.7% 0.237 25.331)),\n    var(--color-red-700, oklch(50.5% 0.213 27.518))\n  ) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-error) 20%, transparent);\n    }\n  }\n  .bg-fedramp-primary-background {\n    background-color: var(--color-fedramp-primary-background);\n  }\n  .bg-gray-50 {\n    background-color: var(--color-gray-50);\n  }\n  .bg-gray-100 {\n    background-color: var(--color-gray-100);\n  }\n  .bg-gray-200 {\n    background-color: var(--color-gray-200);\n  }\n  .bg-gray-300 {\n    background-color: var(--color-gray-300);\n  }\n  .bg-gray-300\\/60 {\n    background-color: color-mix(in srgb, oklch(87.2% 0.01 258.338) 60%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-gray-300) 60%, transparent);\n    }\n  }\n  .bg-gray-500 {\n    background-color: var(--color-gray-500);\n  }\n  .bg-gray-500\\/10 {\n    background-color: color-mix(in srgb, oklch(55.1% 0.027 264.364) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-gray-500) 10%, transparent);\n    }\n  }\n  .bg-green-50 {\n    background-color: var(--color-green-50);\n  }\n  .bg-green-100 {\n    background-color: var(--color-green-100);\n  }\n  .bg-green-200 {\n    background-color: var(--color-green-200);\n  }\n  .bg-green-400\\/50 {\n    background-color: color-mix(in srgb, oklch(79.2% 0.209 151.711) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-green-400) 50%, transparent);\n    }\n  }\n  .bg-green-500 {\n    background-color: var(--color-green-500);\n  }\n  .bg-green-600 {\n    background-color: var(--color-green-600);\n  }\n  .bg-indigo-100 {\n    background-color: var(--color-indigo-100);\n  }\n  .bg-inherit {\n    background-color: inherit;\n  }\n  .bg-kumo-base {\n    background-color: var(--color-kumo-base);\n  }\n  .bg-kumo-brand {\n    background-color: var(--color-kumo-brand);\n  }\n  .bg-kumo-contrast {\n    background-color: var(--color-kumo-contrast);\n  }\n  .bg-kumo-control {\n    background-color: var(--color-kumo-control);\n  }\n  .bg-kumo-control\\/90 {\n    background-color: color-mix(in srgb, light-dark(\n    var(--color-white, #fff),\n    var(--color-neutral-900, oklch(21% 0.006 285.885))\n  ) 90%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-kumo-control) 90%, transparent);\n    }\n  }\n  .bg-kumo-danger {\n    background-color: var(--color-kumo-danger);\n  }\n  .bg-kumo-danger\\/20 {\n    background-color: color-mix(in srgb, light-dark(\n    var(--color-red-500, oklch(63.7% 0.237 25.331)),\n    var(--color-red-700, oklch(50.5% 0.213 27.518))\n  ) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-kumo-danger) 20%, transparent);\n    }\n  }\n  .bg-kumo-elevated {\n    background-color: var(--color-kumo-elevated);\n  }\n  .bg-kumo-fill {\n    background-color: var(--color-kumo-fill);\n  }\n  .bg-kumo-info\\/20 {\n    background-color: color-mix(in srgb, light-dark(\n    var(--color-blue-500, oklch(62.3% 0.214 259.815)),\n    var(--color-blue-700, oklch(48.8% 0.243 264.376))\n  ) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-kumo-info) 20%, transparent);\n    }\n  }\n  .bg-kumo-interact {\n    background-color: var(--color-kumo-interact);\n  }\n  .bg-kumo-interact\\/85 {\n    background-color: color-mix(in srgb, light-dark(\n    var(--color-neutral-300, oklch(87% 0 0)),\n    var(--color-neutral-700, oklch(37.1% 0 0))\n  ) 85%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-kumo-interact) 85%, transparent);\n    }\n  }\n  .bg-kumo-line {\n    background-color: var(--color-kumo-line);\n  }\n  .bg-kumo-overlay {\n    background-color: var(--color-kumo-overlay);\n  }\n  .bg-kumo-recessed {\n    background-color: var(--color-kumo-recessed);\n  }\n  .bg-kumo-ring {\n    background-color: var(--color-kumo-ring);\n  }\n  .bg-kumo-tint {\n    background-color: var(--color-kumo-tint);\n  }\n  .bg-kumo-warning\\/20 {\n    background-color: color-mix(in srgb, light-dark(\n    var(--color-yellow-500, oklch(79.5% 0.184 86.047)),\n    var(--color-yellow-700, oklch(55.4% 0.135 66.442))\n  ) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-kumo-warning) 20%, transparent);\n    }\n  }\n  .bg-kumo-warning\\/50 {\n    background-color: color-mix(in srgb, light-dark(\n    var(--color-yellow-500, oklch(79.5% 0.184 86.047)),\n    var(--color-yellow-700, oklch(55.4% 0.135 66.442))\n  ) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-kumo-warning) 50%, transparent);\n    }\n  }\n  .bg-muted {\n    background-color: var(--color-muted);\n  }\n  .bg-muted\\/40 {\n    background-color: color-mix(in srgb, light-dark(\n    var(--color-neutral-100, oklch(97% 0.001 106.424)),\n    var(--color-neutral-500, oklch(55.3% 0.013 58.071))\n  ) 40%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-muted) 40%, transparent);\n    }\n  }\n  .bg-muted\\/80 {\n    background-color: color-mix(in srgb, light-dark(\n    var(--color-neutral-100, oklch(97% 0.001 106.424)),\n    var(--color-neutral-500, oklch(55.3% 0.013 58.071))\n  ) 80%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-muted) 80%, transparent);\n    }\n  }\n  .bg-neutral-25 {\n    background-color: var(--color-neutral-25);\n  }\n  .bg-neutral-50 {\n    background-color: var(--color-neutral-50);\n  }\n  .bg-neutral-50\\! {\n    background-color: var(--color-neutral-50) !important;\n  }\n  .bg-neutral-50\\/90 {\n    background-color: color-mix(in srgb, oklch(0.985 0 0) 90%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-neutral-50) 90%, transparent);\n    }\n  }\n  .bg-neutral-100 {\n    background-color: var(--color-neutral-100);\n  }\n  .bg-neutral-150 {\n    background-color: var(--color-neutral-150);\n  }\n  .bg-neutral-200 {\n    background-color: var(--color-neutral-200);\n  }\n  .bg-neutral-200\\/50 {\n    background-color: color-mix(in srgb, oklch(92.2% 0 0) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-neutral-200) 50%, transparent);\n    }\n  }\n  .bg-neutral-250 {\n    background-color: var(--color-neutral-250);\n  }\n  .bg-neutral-300 {\n    background-color: var(--color-neutral-300);\n  }\n  .bg-neutral-400 {\n    background-color: var(--color-neutral-400);\n  }\n  .bg-neutral-400\\/70 {\n    background-color: color-mix(in srgb, oklch(70.8% 0 0) 70%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-neutral-400) 70%, transparent);\n    }\n  }\n  .bg-neutral-500 {\n    background-color: var(--color-neutral-500);\n  }\n  .bg-neutral-600 {\n    background-color: var(--color-neutral-600);\n  }\n  .bg-neutral-700 {\n    background-color: var(--color-neutral-700);\n  }\n  .bg-neutral-800 {\n    background-color: var(--color-neutral-800);\n  }\n  .bg-neutral-800\\/50 {\n    background-color: color-mix(in srgb, oklch(26.9% 0 0) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-neutral-800) 50%, transparent);\n    }\n  }\n  .bg-neutral-900 {\n    background-color: var(--color-neutral-900);\n  }\n  .bg-neutral-900\\! {\n    background-color: var(--color-neutral-900) !important;\n  }\n  .bg-neutral-950\\/10 {\n    background-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n    }\n  }\n  .bg-orange-100 {\n    background-color: var(--color-orange-100);\n  }\n  .bg-orange-200 {\n    background-color: var(--color-orange-200);\n  }\n  .bg-orange-500 {\n    background-color: var(--color-orange-500);\n  }\n  .bg-orange-600 {\n    background-color: var(--color-orange-600);\n  }\n  .bg-primary {\n    background-color: var(--color-primary);\n  }\n  .bg-primary\\/5 {\n    background-color: color-mix(in srgb, light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  ) 5%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-primary) 5%, transparent);\n    }\n  }\n  .bg-primary\\/10 {\n    background-color: color-mix(in srgb, light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  ) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-primary) 10%, transparent);\n    }\n  }\n  .bg-primary\\/20 {\n    background-color: color-mix(in srgb, light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  ) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-primary) 20%, transparent);\n    }\n  }\n  .bg-purple-200 {\n    background-color: var(--color-purple-200);\n  }\n  .bg-red-50 {\n    background-color: var(--color-red-50);\n  }\n  .bg-red-50\\! {\n    background-color: var(--color-red-50) !important;\n  }\n  .bg-red-100 {\n    background-color: var(--color-red-100);\n  }\n  .bg-red-200 {\n    background-color: var(--color-red-200);\n  }\n  .bg-red-400 {\n    background-color: var(--color-red-400);\n  }\n  .bg-red-400\\/50 {\n    background-color: color-mix(in srgb, oklch(70.4% 0.191 22.216) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-red-400) 50%, transparent);\n    }\n  }\n  .bg-red-500 {\n    background-color: var(--color-red-500);\n  }\n  .bg-red-500\\/10 {\n    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-red-500) 10%, transparent);\n    }\n  }\n  .bg-red-500\\/20 {\n    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-red-500) 20%, transparent);\n    }\n  }\n  .bg-red-600 {\n    background-color: var(--color-red-600);\n  }\n  .bg-red-600\\/20 {\n    background-color: color-mix(in srgb, oklch(57.7% 0.245 27.325) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-red-600) 20%, transparent);\n    }\n  }\n  .bg-secondary {\n    background-color: var(--color-secondary);\n  }\n  .bg-subtle {\n    background-color: var(--color-subtle);\n  }\n  .bg-surface {\n    background-color: var(--color-surface);\n  }\n  .bg-surface-2 {\n    background-color: var(--color-surface-2);\n  }\n  .bg-surface-secondary {\n    background-color: var(--color-surface-secondary);\n  }\n  .bg-transparent {\n    background-color: transparent;\n  }\n  .bg-transparent\\! {\n    background-color: transparent !important;\n  }\n  .bg-violet-50 {\n    background-color: var(--color-violet-50);\n  }\n  .bg-violet-100 {\n    background-color: var(--color-violet-100);\n  }\n  .bg-white {\n    background-color: var(--color-white);\n  }\n  .bg-white\\/20 {\n    background-color: color-mix(in srgb, #fff 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-white) 20%, transparent);\n    }\n  }\n  .bg-white\\/50 {\n    background-color: color-mix(in srgb, #fff 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-white) 50%, transparent);\n    }\n  }\n  .bg-white\\/75 {\n    background-color: color-mix(in srgb, #fff 75%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-white) 75%, transparent);\n    }\n  }\n  .bg-white\\/80 {\n    background-color: color-mix(in srgb, #fff 80%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-white) 80%, transparent);\n    }\n  }\n  .bg-yellow-50 {\n    background-color: var(--color-yellow-50);\n  }\n  .bg-yellow-100 {\n    background-color: var(--color-yellow-100);\n  }\n  .bg-yellow-200 {\n    background-color: var(--color-yellow-200);\n  }\n  .bg-yellow-300 {\n    background-color: var(--color-yellow-300);\n  }\n  .bg-yellow-500 {\n    background-color: var(--color-yellow-500);\n  }\n  .bg-yellow-500\\/20 {\n    background-color: color-mix(in srgb, oklch(79.5% 0.184 86.047) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-yellow-500) 20%, transparent);\n    }\n  }\n  .bg-yellow-600\\/20 {\n    background-color: color-mix(in srgb, oklch(68.1% 0.162 75.834) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      background-color: color-mix(in oklab, var(--color-yellow-600) 20%, transparent);\n    }\n  }\n  .bg-linear-to-r {\n    --tw-gradient-position: to right;\n    @supports (background-image: linear-gradient(in lab, red, red)) {\n      --tw-gradient-position: to right in oklab;\n    }\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-gradient-to-b {\n    --tw-gradient-position: to bottom in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-gradient-to-br {\n    --tw-gradient-position: to bottom right in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-gradient-to-l {\n    --tw-gradient-position: to left in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-gradient-to-r {\n    --tw-gradient-position: to right in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-gradient-to-t {\n    --tw-gradient-position: to top in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n  .bg-\\[radial-gradient\\(\\#e5e7eb_1px\\,transparent_1px\\)\\] {\n    background-image: radial-gradient(#e5e7eb 1px,transparent 1px);\n  }\n  .bg-\\[radial-gradient\\(circle\\,_\\#ccc_1px\\,_transparent_1px\\)\\] {\n    background-image: radial-gradient(circle, #ccc 1px, transparent 1px);\n  }\n  .from-\\[\\#070033\\] {\n    --tw-gradient-from: #070033;\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-\\[\\#FE7A37\\] {\n    --tw-gradient-from: #FE7A37;\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-blue-50 {\n    --tw-gradient-from: var(--color-blue-50);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-blue-500\\/10 {\n    --tw-gradient-from: color-mix(in srgb, oklch(62.3% 0.214 259.815) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-gradient-from: color-mix(in oklab, var(--color-blue-500) 10%, transparent);\n    }\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-kumo-brand {\n    --tw-gradient-from: var(--color-kumo-brand);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-neutral-50 {\n    --tw-gradient-from: var(--color-neutral-50);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-neutral-100 {\n    --tw-gradient-from: var(--color-neutral-100);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-transparent {\n    --tw-gradient-from: transparent;\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-white {\n    --tw-gradient-from: var(--color-white);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .from-40\\% {\n    --tw-gradient-from-position: 40%;\n  }\n  .via-kumo-brand {\n    --tw-gradient-via: var(--color-kumo-brand);\n    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-via-stops);\n  }\n  .to-\\[\\#070033\\] {\n    --tw-gradient-to: #070033;\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-\\[\\#FC9D3E\\] {\n    --tw-gradient-to: #FC9D3E;\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-blue-500\\/30 {\n    --tw-gradient-to: color-mix(in srgb, oklch(62.3% 0.214 259.815) 30%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-gradient-to: color-mix(in oklab, var(--color-blue-500) 30%, transparent);\n    }\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-indigo-50 {\n    --tw-gradient-to: var(--color-indigo-50);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-kumo-brand {\n    --tw-gradient-to: var(--color-kumo-brand);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-neutral-100 {\n    --tw-gradient-to: var(--color-neutral-100);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-transparent {\n    --tw-gradient-to: transparent;\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-white {\n    --tw-gradient-to: var(--color-white);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n  .to-40\\% {\n    --tw-gradient-to-position: 40%;\n  }\n  .bg-\\[length\\:20px_20px\\] {\n    background-size: 20px 20px;\n  }\n  .bg-size-\\[15px_15px\\] {\n    background-size: 15px 15px;\n  }\n  .bg-clip-border {\n    background-clip: border-box;\n  }\n  .bg-clip-padding {\n    background-clip: padding-box;\n  }\n  .bg-repeat {\n    background-repeat: repeat;\n  }\n  .mask-no-clip {\n    mask-clip: no-clip;\n  }\n  .mask-repeat {\n    mask-repeat: repeat;\n  }\n  .fill-black {\n    fill: var(--color-black);\n  }\n  .fill-cl1-gray-3 {\n    fill: var(--color-cl1-gray-3);\n  }\n  .fill-current {\n    fill: currentcolor;\n  }\n  .fill-kumo-base {\n    fill: var(--color-kumo-base);\n  }\n  .fill-kumo-ring {\n    fill: var(--color-kumo-ring);\n  }\n  .fill-kumo-tip-shadow {\n    fill: var(--color-kumo-tip-shadow);\n  }\n  .fill-kumo-tip-stroke {\n    fill: var(--color-kumo-tip-stroke);\n  }\n  .fill-neutral-200 {\n    fill: var(--color-neutral-200);\n  }\n  .fill-neutral-600 {\n    fill: var(--color-neutral-600);\n  }\n  .fill-neutral-900 {\n    fill: var(--color-neutral-900);\n  }\n  .fill-surface {\n    fill: var(--color-surface);\n  }\n  .fill-white {\n    fill: var(--color-white);\n  }\n  .stroke-\\(--color-connector\\) {\n    stroke: var(--color-connector);\n  }\n  .stroke-black {\n    stroke: var(--color-black);\n  }\n  .stroke-border {\n    stroke: var(--color-border);\n  }\n  .stroke-cl1-blue-5 {\n    stroke: var(--color-cl1-blue-5);\n  }\n  .stroke-red-500 {\n    stroke: var(--color-red-500);\n  }\n  .stroke-red-500\\! {\n    stroke: var(--color-red-500) !important;\n  }\n  .stroke-1 {\n    stroke-width: 1;\n  }\n  .object-contain {\n    object-fit: contain;\n  }\n  .object-cover {\n    object-fit: cover;\n  }\n  .object-fill {\n    object-fit: fill;\n  }\n  .\\!p-0 {\n    padding: calc(var(--spacing) * 0) !important;\n  }\n  .\\!p-1 {\n    padding: calc(var(--spacing) * 1) !important;\n  }\n  .\\!p-3 {\n    padding: calc(var(--spacing) * 3) !important;\n  }\n  .\\!p-4 {\n    padding: calc(var(--spacing) * 4) !important;\n  }\n  .\\!p-5 {\n    padding: calc(var(--spacing) * 5) !important;\n  }\n  .p-0 {\n    padding: calc(var(--spacing) * 0);\n  }\n  .p-0\\! {\n    padding: calc(var(--spacing) * 0) !important;\n  }\n  .p-0\\.5 {\n    padding: calc(var(--spacing) * 0.5);\n  }\n  .p-0\\.75 {\n    padding: calc(var(--spacing) * 0.75);\n  }\n  .p-1 {\n    padding: calc(var(--spacing) * 1);\n  }\n  .p-1\\.5 {\n    padding: calc(var(--spacing) * 1.5);\n  }\n  .p-2 {\n    padding: calc(var(--spacing) * 2);\n  }\n  .p-2\\.5 {\n    padding: calc(var(--spacing) * 2.5);\n  }\n  .p-3 {\n    padding: calc(var(--spacing) * 3);\n  }\n  .p-3\\.5 {\n    padding: calc(var(--spacing) * 3.5);\n  }\n  .p-4 {\n    padding: calc(var(--spacing) * 4);\n  }\n  .p-5 {\n    padding: calc(var(--spacing) * 5);\n  }\n  .p-6 {\n    padding: calc(var(--spacing) * 6);\n  }\n  .p-6\\.5 {\n    padding: calc(var(--spacing) * 6.5);\n  }\n  .p-8 {\n    padding: calc(var(--spacing) * 8);\n  }\n  .p-10 {\n    padding: calc(var(--spacing) * 10);\n  }\n  .p-12 {\n    padding: calc(var(--spacing) * 12);\n  }\n  .p-16 {\n    padding: calc(var(--spacing) * 16);\n  }\n  .p-\\[1px\\] {\n    padding: 1px;\n  }\n  .p-\\[2px\\] {\n    padding: 2px;\n  }\n  .p-px {\n    padding: 1px;\n  }\n  .\\!px-0 {\n    padding-inline: calc(var(--spacing) * 0) !important;\n  }\n  .\\!px-0\\.5 {\n    padding-inline: calc(var(--spacing) * 0.5) !important;\n  }\n  .\\!px-2 {\n    padding-inline: calc(var(--spacing) * 2) !important;\n  }\n  .\\!px-3 {\n    padding-inline: calc(var(--spacing) * 3) !important;\n  }\n  .\\!px-4 {\n    padding-inline: calc(var(--spacing) * 4) !important;\n  }\n  .\\!px-5 {\n    padding-inline: calc(var(--spacing) * 5) !important;\n  }\n  .px-0 {\n    padding-inline: calc(var(--spacing) * 0);\n  }\n  .px-0\\! {\n    padding-inline: calc(var(--spacing) * 0) !important;\n  }\n  .px-0\\.5 {\n    padding-inline: calc(var(--spacing) * 0.5);\n  }\n  .px-1 {\n    padding-inline: calc(var(--spacing) * 1);\n  }\n  .px-1\\.5 {\n    padding-inline: calc(var(--spacing) * 1.5);\n  }\n  .px-2 {\n    padding-inline: calc(var(--spacing) * 2);\n  }\n  .px-2\\! {\n    padding-inline: calc(var(--spacing) * 2) !important;\n  }\n  .px-2\\.5 {\n    padding-inline: calc(var(--spacing) * 2.5);\n  }\n  .px-3 {\n    padding-inline: calc(var(--spacing) * 3);\n  }\n  .px-3\\.5 {\n    padding-inline: calc(var(--spacing) * 3.5);\n  }\n  .px-4 {\n    padding-inline: calc(var(--spacing) * 4);\n  }\n  .px-4\\.5 {\n    padding-inline: calc(var(--spacing) * 4.5);\n  }\n  .px-5 {\n    padding-inline: calc(var(--spacing) * 5);\n  }\n  .px-6 {\n    padding-inline: calc(var(--spacing) * 6);\n  }\n  .px-7 {\n    padding-inline: calc(var(--spacing) * 7);\n  }\n  .px-8 {\n    padding-inline: calc(var(--spacing) * 8);\n  }\n  .px-10 {\n    padding-inline: calc(var(--spacing) * 10);\n  }\n  .px-12 {\n    padding-inline: calc(var(--spacing) * 12);\n  }\n  .px-\\[1px\\] {\n    padding-inline: 1px;\n  }\n  .px-\\[2px\\] {\n    padding-inline: 2px;\n  }\n  .px-\\[3px\\] {\n    padding-inline: 3px;\n  }\n  .px-\\[5px\\] {\n    padding-inline: 5px;\n  }\n  .px-\\[6px\\] {\n    padding-inline: 6px;\n  }\n  .px-\\[7px\\] {\n    padding-inline: 7px;\n  }\n  .px-\\[9px\\] {\n    padding-inline: 9px;\n  }\n  .px-\\[11px\\] {\n    padding-inline: 11px;\n  }\n  .px-px {\n    padding-inline: 1px;\n  }\n  .\\!py-1 {\n    padding-block: calc(var(--spacing) * 1) !important;\n  }\n  .\\!py-1\\.5 {\n    padding-block: calc(var(--spacing) * 1.5) !important;\n  }\n  .\\!py-2 {\n    padding-block: calc(var(--spacing) * 2) !important;\n  }\n  .\\!py-3 {\n    padding-block: calc(var(--spacing) * 3) !important;\n  }\n  .\\!py-4 {\n    padding-block: calc(var(--spacing) * 4) !important;\n  }\n  .py-0 {\n    padding-block: calc(var(--spacing) * 0);\n  }\n  .py-0\\.5 {\n    padding-block: calc(var(--spacing) * 0.5);\n  }\n  .py-0\\.25 {\n    padding-block: calc(var(--spacing) * 0.25);\n  }\n  .py-1 {\n    padding-block: calc(var(--spacing) * 1);\n  }\n  .py-1\\! {\n    padding-block: calc(var(--spacing) * 1) !important;\n  }\n  .py-1\\.5 {\n    padding-block: calc(var(--spacing) * 1.5);\n  }\n  .py-2 {\n    padding-block: calc(var(--spacing) * 2);\n  }\n  .py-2\\.5 {\n    padding-block: calc(var(--spacing) * 2.5);\n  }\n  .py-3 {\n    padding-block: calc(var(--spacing) * 3);\n  }\n  .py-3\\.5 {\n    padding-block: calc(var(--spacing) * 3.5);\n  }\n  .py-4 {\n    padding-block: calc(var(--spacing) * 4);\n  }\n  .py-4\\! {\n    padding-block: calc(var(--spacing) * 4) !important;\n  }\n  .py-5 {\n    padding-block: calc(var(--spacing) * 5);\n  }\n  .py-6 {\n    padding-block: calc(var(--spacing) * 6);\n  }\n  .py-8 {\n    padding-block: calc(var(--spacing) * 8);\n  }\n  .py-10 {\n    padding-block: calc(var(--spacing) * 10);\n  }\n  .py-12 {\n    padding-block: calc(var(--spacing) * 12);\n  }\n  .py-16 {\n    padding-block: calc(var(--spacing) * 16);\n  }\n  .py-20 {\n    padding-block: calc(var(--spacing) * 20);\n  }\n  .py-\\[1px\\] {\n    padding-block: 1px;\n  }\n  .py-\\[1rem\\] {\n    padding-block: 1rem;\n  }\n  .py-\\[2px\\] {\n    padding-block: 2px;\n  }\n  .py-\\[3px\\] {\n    padding-block: 3px;\n  }\n  .py-\\[5px\\] {\n    padding-block: 5px;\n  }\n  .py-\\[6px\\] {\n    padding-block: 6px;\n  }\n  .py-\\[8px\\] {\n    padding-block: 8px;\n  }\n  .py-\\[9px\\] {\n    padding-block: 9px;\n  }\n  .py-\\[11px\\] {\n    padding-block: 11px;\n  }\n  .py-\\[14px\\] {\n    padding-block: 14px;\n  }\n  .py-px {\n    padding-block: 1px;\n  }\n  .\\!pt-2 {\n    padding-top: calc(var(--spacing) * 2) !important;\n  }\n  .pt-0 {\n    padding-top: calc(var(--spacing) * 0);\n  }\n  .pt-0\\.5 {\n    padding-top: calc(var(--spacing) * 0.5);\n  }\n  .pt-1 {\n    padding-top: calc(var(--spacing) * 1);\n  }\n  .pt-1\\.5 {\n    padding-top: calc(var(--spacing) * 1.5);\n  }\n  .pt-2 {\n    padding-top: calc(var(--spacing) * 2);\n  }\n  .pt-3 {\n    padding-top: calc(var(--spacing) * 3);\n  }\n  .pt-3\\.5 {\n    padding-top: calc(var(--spacing) * 3.5);\n  }\n  .pt-4 {\n    padding-top: calc(var(--spacing) * 4);\n  }\n  .pt-4\\.5 {\n    padding-top: calc(var(--spacing) * 4.5);\n  }\n  .pt-5 {\n    padding-top: calc(var(--spacing) * 5);\n  }\n  .pt-6 {\n    padding-top: calc(var(--spacing) * 6);\n  }\n  .pt-6\\.5 {\n    padding-top: calc(var(--spacing) * 6.5);\n  }\n  .pt-7 {\n    padding-top: calc(var(--spacing) * 7);\n  }\n  .pt-8 {\n    padding-top: calc(var(--spacing) * 8);\n  }\n  .pt-10 {\n    padding-top: calc(var(--spacing) * 10);\n  }\n  .pt-14 {\n    padding-top: calc(var(--spacing) * 14);\n  }\n  .pt-20 {\n    padding-top: calc(var(--spacing) * 20);\n  }\n  .pt-\\[3vh\\] {\n    padding-top: 3vh;\n  }\n  .pt-\\[7px\\] {\n    padding-top: 7px;\n  }\n  .pt-\\[13px\\] {\n    padding-top: 13px;\n  }\n  .pt-\\[72px\\] {\n    padding-top: 72px;\n  }\n  .\\!pr-1 {\n    padding-right: calc(var(--spacing) * 1) !important;\n  }\n  .\\!pr-2 {\n    padding-right: calc(var(--spacing) * 2) !important;\n  }\n  .pr-0 {\n    padding-right: calc(var(--spacing) * 0);\n  }\n  .pr-0\\.5 {\n    padding-right: calc(var(--spacing) * 0.5);\n  }\n  .pr-1 {\n    padding-right: calc(var(--spacing) * 1);\n  }\n  .pr-1\\.5 {\n    padding-right: calc(var(--spacing) * 1.5);\n  }\n  .pr-2 {\n    padding-right: calc(var(--spacing) * 2);\n  }\n  .pr-2\\.5 {\n    padding-right: calc(var(--spacing) * 2.5);\n  }\n  .pr-3 {\n    padding-right: calc(var(--spacing) * 3);\n  }\n  .pr-3\\.5 {\n    padding-right: calc(var(--spacing) * 3.5);\n  }\n  .pr-4 {\n    padding-right: calc(var(--spacing) * 4);\n  }\n  .pr-4\\.5 {\n    padding-right: calc(var(--spacing) * 4.5);\n  }\n  .pr-5 {\n    padding-right: calc(var(--spacing) * 5);\n  }\n  .pr-6 {\n    padding-right: calc(var(--spacing) * 6);\n  }\n  .pr-8 {\n    padding-right: calc(var(--spacing) * 8);\n  }\n  .pr-8\\.5 {\n    padding-right: calc(var(--spacing) * 8.5);\n  }\n  .pr-9 {\n    padding-right: calc(var(--spacing) * 9);\n  }\n  .pr-10 {\n    padding-right: calc(var(--spacing) * 10);\n  }\n  .pr-11 {\n    padding-right: calc(var(--spacing) * 11);\n  }\n  .pr-12 {\n    padding-right: calc(var(--spacing) * 12);\n  }\n  .pr-20 {\n    padding-right: calc(var(--spacing) * 20);\n  }\n  .pr-24 {\n    padding-right: calc(var(--spacing) * 24);\n  }\n  .pr-\\[1px\\] {\n    padding-right: 1px;\n  }\n  .pr-\\[2px\\] {\n    padding-right: 2px;\n  }\n  .pr-\\[14px\\] {\n    padding-right: 14px;\n  }\n  .pr-\\[48px\\] {\n    padding-right: 48px;\n  }\n  .\\!pb-1 {\n    padding-bottom: calc(var(--spacing) * 1) !important;\n  }\n  .\\!pb-2 {\n    padding-bottom: calc(var(--spacing) * 2) !important;\n  }\n  .\\!pb-3 {\n    padding-bottom: calc(var(--spacing) * 3) !important;\n  }\n  .pb-0 {\n    padding-bottom: calc(var(--spacing) * 0);\n  }\n  .pb-0\\.5 {\n    padding-bottom: calc(var(--spacing) * 0.5);\n  }\n  .pb-1 {\n    padding-bottom: calc(var(--spacing) * 1);\n  }\n  .pb-1\\! {\n    padding-bottom: calc(var(--spacing) * 1) !important;\n  }\n  .pb-1\\.5 {\n    padding-bottom: calc(var(--spacing) * 1.5);\n  }\n  .pb-2 {\n    padding-bottom: calc(var(--spacing) * 2);\n  }\n  .pb-2\\.5 {\n    padding-bottom: calc(var(--spacing) * 2.5);\n  }\n  .pb-3 {\n    padding-bottom: calc(var(--spacing) * 3);\n  }\n  .pb-3\\.5 {\n    padding-bottom: calc(var(--spacing) * 3.5);\n  }\n  .pb-4 {\n    padding-bottom: calc(var(--spacing) * 4);\n  }\n  .pb-5 {\n    padding-bottom: calc(var(--spacing) * 5);\n  }\n  .pb-6 {\n    padding-bottom: calc(var(--spacing) * 6);\n  }\n  .pb-7 {\n    padding-bottom: calc(var(--spacing) * 7);\n  }\n  .pb-8 {\n    padding-bottom: calc(var(--spacing) * 8);\n  }\n  .pb-10 {\n    padding-bottom: calc(var(--spacing) * 10);\n  }\n  .pb-16 {\n    padding-bottom: calc(var(--spacing) * 16);\n  }\n  .pb-20 {\n    padding-bottom: calc(var(--spacing) * 20);\n  }\n  .pb-30 {\n    padding-bottom: calc(var(--spacing) * 30);\n  }\n  .pb-32 {\n    padding-bottom: calc(var(--spacing) * 32);\n  }\n  .pb-42 {\n    padding-bottom: calc(var(--spacing) * 42);\n  }\n  .pb-48 {\n    padding-bottom: calc(var(--spacing) * 48);\n  }\n  .\\!pl-0 {\n    padding-left: calc(var(--spacing) * 0) !important;\n  }\n  .\\!pl-1 {\n    padding-left: calc(var(--spacing) * 1) !important;\n  }\n  .\\!pl-2 {\n    padding-left: calc(var(--spacing) * 2) !important;\n  }\n  .\\!pl-2\\.5 {\n    padding-left: calc(var(--spacing) * 2.5) !important;\n  }\n  .\\!pl-3 {\n    padding-left: calc(var(--spacing) * 3) !important;\n  }\n  .pl-0 {\n    padding-left: calc(var(--spacing) * 0);\n  }\n  .pl-0\\.5 {\n    padding-left: calc(var(--spacing) * 0.5);\n  }\n  .pl-1 {\n    padding-left: calc(var(--spacing) * 1);\n  }\n  .pl-1\\.5 {\n    padding-left: calc(var(--spacing) * 1.5);\n  }\n  .pl-2 {\n    padding-left: calc(var(--spacing) * 2);\n  }\n  .pl-2\\.5 {\n    padding-left: calc(var(--spacing) * 2.5);\n  }\n  .pl-3 {\n    padding-left: calc(var(--spacing) * 3);\n  }\n  .pl-3\\.5 {\n    padding-left: calc(var(--spacing) * 3.5);\n  }\n  .pl-4 {\n    padding-left: calc(var(--spacing) * 4);\n  }\n  .pl-4\\.5 {\n    padding-left: calc(var(--spacing) * 4.5);\n  }\n  .pl-5 {\n    padding-left: calc(var(--spacing) * 5);\n  }\n  .pl-5\\.5 {\n    padding-left: calc(var(--spacing) * 5.5);\n  }\n  .pl-6 {\n    padding-left: calc(var(--spacing) * 6);\n  }\n  .pl-7 {\n    padding-left: calc(var(--spacing) * 7);\n  }\n  .pl-8 {\n    padding-left: calc(var(--spacing) * 8);\n  }\n  .pl-9 {\n    padding-left: calc(var(--spacing) * 9);\n  }\n  .pl-10 {\n    padding-left: calc(var(--spacing) * 10);\n  }\n  .pl-\\[1px\\] {\n    padding-left: 1px;\n  }\n  .pl-\\[4px\\] {\n    padding-left: 4px;\n  }\n  .pl-\\[6px\\] {\n    padding-left: 6px;\n  }\n  .pl-\\[10px\\] {\n    padding-left: 10px;\n  }\n  .pl-\\[11px\\] {\n    padding-left: 11px;\n  }\n  .pl-\\[14px\\] {\n    padding-left: 14px;\n  }\n  .pl-\\[22px\\] {\n    padding-left: 22px;\n  }\n  .pl-\\[86px\\] {\n    padding-left: 86px;\n  }\n  .pl-px {\n    padding-left: 1px;\n  }\n  .text-center {\n    text-align: center;\n  }\n  .text-end {\n    text-align: end;\n  }\n  .text-left {\n    text-align: left;\n  }\n  .text-right {\n    text-align: right;\n  }\n  .align-bottom {\n    vertical-align: bottom;\n  }\n  .align-middle {\n    vertical-align: middle;\n  }\n  .align-text-bottom {\n    vertical-align: text-bottom;\n  }\n  .align-top {\n    vertical-align: top;\n  }\n  .\\!font-mono {\n    font-family: var(--font-mono) !important;\n  }\n  .\\!font-sans {\n    font-family: var(--font-sans) !important;\n  }\n  .\\[font-family\\:inherit\\] {\n    font-family: inherit;\n  }\n  .font-mono {\n    font-family: var(--font-mono);\n  }\n  .font-mono\\! {\n    font-family: var(--font-mono) !important;\n  }\n  .font-sans {\n    font-family: var(--font-sans);\n  }\n  .\\!text-2xl {\n    font-size: var(--text-2xl) !important;\n    line-height: var(--tw-leading, var(--text-2xl--line-height)) !important;\n  }\n  .\\!text-base {\n    font-size: var(--text-base) !important;\n    line-height: var(--tw-leading, var(--text-base--line-height)) !important;\n  }\n  .\\!text-lg {\n    font-size: var(--text-lg) !important;\n    line-height: var(--tw-leading, var(--text-lg--line-height)) !important;\n  }\n  .\\!text-sm {\n    font-size: var(--text-sm) !important;\n    line-height: var(--tw-leading, var(--text-sm--line-height)) !important;\n  }\n  .\\!text-xl {\n    font-size: var(--text-xl) !important;\n    line-height: var(--tw-leading, var(--text-xl--line-height)) !important;\n  }\n  .\\!text-xs {\n    font-size: var(--text-xs) !important;\n    line-height: var(--tw-leading, var(--text-xs--line-height)) !important;\n  }\n  .text-2xl {\n    font-size: var(--text-2xl);\n    line-height: var(--tw-leading, var(--text-2xl--line-height));\n  }\n  .text-3xl {\n    font-size: var(--text-3xl);\n    line-height: var(--tw-leading, var(--text-3xl--line-height));\n  }\n  .text-4xl {\n    font-size: var(--text-4xl);\n    line-height: var(--tw-leading, var(--text-4xl--line-height));\n  }\n  .text-\\[0\\.78125rem\\]\\/normal {\n    font-size: 0.78125rem;\n    line-height: var(--leading-normal);\n  }\n  .text-\\[11px\\]\\/none {\n    font-size: 11px;\n    line-height: 1;\n  }\n  .text-\\[17px\\]\\/\\[1\\.25\\] {\n    font-size: 17px;\n    line-height: 1.25;\n  }\n  .text-base {\n    font-size: var(--text-base);\n    line-height: var(--tw-leading, var(--text-base--line-height));\n  }\n  .text-base\\/tight {\n    font-size: var(--text-base);\n    line-height: var(--leading-tight);\n  }\n  .text-lg {\n    font-size: var(--text-lg);\n    line-height: var(--tw-leading, var(--text-lg--line-height));\n  }\n  .text-sm {\n    font-size: var(--text-sm);\n    line-height: var(--tw-leading, var(--text-sm--line-height));\n  }\n  .text-sm\\! {\n    font-size: var(--text-sm) !important;\n    line-height: var(--tw-leading, var(--text-sm--line-height)) !important;\n  }\n  .text-sm\\/6 {\n    font-size: var(--text-sm);\n    line-height: calc(var(--spacing) * 6);\n  }\n  .text-sm\\/normal {\n    font-size: var(--text-sm);\n    line-height: var(--leading-normal);\n  }\n  .text-sm\\/snug {\n    font-size: var(--text-sm);\n    line-height: var(--leading-snug);\n  }\n  .text-xl {\n    font-size: var(--text-xl);\n    line-height: var(--tw-leading, var(--text-xl--line-height));\n  }\n  .text-xl\\! {\n    font-size: var(--text-xl) !important;\n    line-height: var(--tw-leading, var(--text-xl--line-height)) !important;\n  }\n  .text-xs {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n  }\n  .text-xs\\! {\n    font-size: var(--text-xs) !important;\n    line-height: var(--tw-leading, var(--text-xs--line-height)) !important;\n  }\n  .text-xs\\/4 {\n    font-size: var(--text-xs);\n    line-height: calc(var(--spacing) * 4);\n  }\n  .text-xs\\/\\[1\\.4\\] {\n    font-size: var(--text-xs);\n    line-height: 1.4;\n  }\n  .text-xs\\/snug {\n    font-size: var(--text-xs);\n    line-height: var(--leading-snug);\n  }\n  .\\!text-\\[10px\\] {\n    font-size: 10px !important;\n  }\n  .\\!text-\\[11px\\] {\n    font-size: 11px !important;\n  }\n  .\\!text-\\[14px\\] {\n    font-size: 14px !important;\n  }\n  .\\!text-\\[16px\\] {\n    font-size: 16px !important;\n  }\n  .text-\\[0\\.63rem\\] {\n    font-size: 0.63rem;\n  }\n  .text-\\[0\\.85rem\\] {\n    font-size: 0.85rem;\n  }\n  .text-\\[0\\.925rem\\] {\n    font-size: 0.925rem;\n  }\n  .text-\\[0\\.975rem\\] {\n    font-size: 0.975rem;\n  }\n  .text-\\[0\\.78125rem\\] {\n    font-size: 0.78125rem;\n  }\n  .text-\\[7pt\\] {\n    font-size: 7pt;\n  }\n  .text-\\[8px\\] {\n    font-size: 8px;\n  }\n  .text-\\[10\\.5px\\] {\n    font-size: 10.5px;\n  }\n  .text-\\[10px\\] {\n    font-size: 10px;\n  }\n  .text-\\[11px\\] {\n    font-size: 11px;\n  }\n  .text-\\[12pt\\] {\n    font-size: 12pt;\n  }\n  .text-\\[12px\\] {\n    font-size: 12px;\n  }\n  .text-\\[13px\\] {\n    font-size: 13px;\n  }\n  .text-\\[14px\\] {\n    font-size: 14px;\n  }\n  .text-\\[15px\\] {\n    font-size: 15px;\n  }\n  .text-\\[20px\\] {\n    font-size: 20px;\n  }\n  .\\!leading-normal {\n    --tw-leading: var(--leading-normal) !important;\n    line-height: var(--leading-normal) !important;\n  }\n  .leading-0 {\n    --tw-leading: calc(var(--spacing) * 0);\n    line-height: calc(var(--spacing) * 0);\n  }\n  .leading-4 {\n    --tw-leading: calc(var(--spacing) * 4);\n    line-height: calc(var(--spacing) * 4);\n  }\n  .leading-5 {\n    --tw-leading: calc(var(--spacing) * 5);\n    line-height: calc(var(--spacing) * 5);\n  }\n  .leading-6 {\n    --tw-leading: calc(var(--spacing) * 6);\n    line-height: calc(var(--spacing) * 6);\n  }\n  .leading-8 {\n    --tw-leading: calc(var(--spacing) * 8);\n    line-height: calc(var(--spacing) * 8);\n  }\n  .leading-\\[0\\] {\n    --tw-leading: 0;\n    line-height: 0;\n  }\n  .leading-\\[1\\.4\\] {\n    --tw-leading: 1.4;\n    line-height: 1.4;\n  }\n  .leading-\\[18px\\] {\n    --tw-leading: 18px;\n    line-height: 18px;\n  }\n  .leading-\\[20px\\] {\n    --tw-leading: 20px;\n    line-height: 20px;\n  }\n  .leading-\\[35px\\] {\n    --tw-leading: 35px;\n    line-height: 35px;\n  }\n  .leading-\\[100\\%\\] {\n    --tw-leading: 100%;\n    line-height: 100%;\n  }\n  .leading-\\[150\\%\\] {\n    --tw-leading: 150%;\n    line-height: 150%;\n  }\n  .leading-loose {\n    --tw-leading: var(--leading-loose);\n    line-height: var(--leading-loose);\n  }\n  .leading-none {\n    --tw-leading: 1;\n    line-height: 1;\n  }\n  .leading-normal {\n    --tw-leading: var(--leading-normal);\n    line-height: var(--leading-normal);\n  }\n  .leading-relaxed {\n    --tw-leading: var(--leading-relaxed);\n    line-height: var(--leading-relaxed);\n  }\n  .leading-snug {\n    --tw-leading: var(--leading-snug);\n    line-height: var(--leading-snug);\n  }\n  .leading-tight {\n    --tw-leading: var(--leading-tight);\n    line-height: var(--leading-tight);\n  }\n  .\\!font-bold {\n    --tw-font-weight: var(--font-weight-bold) !important;\n    font-weight: var(--font-weight-bold) !important;\n  }\n  .\\!font-medium {\n    --tw-font-weight: var(--font-weight-medium) !important;\n    font-weight: var(--font-weight-medium) !important;\n  }\n  .\\!font-semibold {\n    --tw-font-weight: var(--font-weight-semibold) !important;\n    font-weight: var(--font-weight-semibold) !important;\n  }\n  .font-\\[500\\] {\n    --tw-font-weight: 500;\n    font-weight: 500;\n  }\n  .font-\\[550\\] {\n    --tw-font-weight: 550;\n    font-weight: 550;\n  }\n  .font-bold {\n    --tw-font-weight: var(--font-weight-bold);\n    font-weight: var(--font-weight-bold);\n  }\n  .font-bold\\! {\n    --tw-font-weight: var(--font-weight-bold) !important;\n    font-weight: var(--font-weight-bold) !important;\n  }\n  .font-light {\n    --tw-font-weight: var(--font-weight-light);\n    font-weight: var(--font-weight-light);\n  }\n  .font-medium {\n    --tw-font-weight: var(--font-weight-medium);\n    font-weight: var(--font-weight-medium);\n  }\n  .font-normal {\n    --tw-font-weight: var(--font-weight-normal);\n    font-weight: var(--font-weight-normal);\n  }\n  .font-semibold {\n    --tw-font-weight: var(--font-weight-semibold);\n    font-weight: var(--font-weight-semibold);\n  }\n  .font-semibold\\! {\n    --tw-font-weight: var(--font-weight-semibold) !important;\n    font-weight: var(--font-weight-semibold) !important;\n  }\n  .tracking-\\[0\\.25px\\] {\n    --tw-tracking: 0.25px;\n    letter-spacing: 0.25px;\n  }\n  .tracking-normal {\n    --tw-tracking: var(--tracking-normal);\n    letter-spacing: var(--tracking-normal);\n  }\n  .tracking-tight {\n    --tw-tracking: var(--tracking-tight);\n    letter-spacing: var(--tracking-tight);\n  }\n  .tracking-wide {\n    --tw-tracking: var(--tracking-wide);\n    letter-spacing: var(--tracking-wide);\n  }\n  .tracking-widest {\n    --tw-tracking: var(--tracking-widest);\n    letter-spacing: var(--tracking-widest);\n  }\n  .text-balance {\n    text-wrap: balance;\n  }\n  .text-nowrap {\n    text-wrap: nowrap;\n  }\n  .text-pretty {\n    text-wrap: pretty;\n  }\n  .text-wrap {\n    text-wrap: wrap;\n  }\n  .break-normal {\n    overflow-wrap: normal;\n    word-break: normal;\n  }\n  .break-words {\n    overflow-wrap: break-word;\n  }\n  .wrap-anywhere {\n    overflow-wrap: anywhere;\n  }\n  .break-all {\n    word-break: break-all;\n  }\n  .overflow-ellipsis {\n    text-overflow: ellipsis;\n  }\n  .text-clip {\n    text-overflow: clip;\n  }\n  .text-ellipsis {\n    text-overflow: ellipsis;\n  }\n  .whitespace-normal {\n    white-space: normal;\n  }\n  .whitespace-nowrap {\n    white-space: nowrap;\n  }\n  .whitespace-pre {\n    white-space: pre;\n  }\n  .whitespace-pre-line {\n    white-space: pre-line;\n  }\n  .whitespace-pre-wrap {\n    white-space: pre-wrap;\n  }\n  .\\!text-black {\n    color: var(--color-black) !important;\n  }\n  .\\!text-blue-400 {\n    color: var(--color-blue-400) !important;\n  }\n  .\\!text-blue-500 {\n    color: var(--color-blue-500) !important;\n  }\n  .\\!text-blue-600 {\n    color: var(--color-blue-600) !important;\n  }\n  .\\!text-error {\n    color: var(--text-color-error) !important;\n  }\n  .\\!text-inherit {\n    color: inherit !important;\n  }\n  .\\!text-kumo-danger {\n    color: var(--text-color-kumo-danger) !important;\n  }\n  .\\!text-kumo-default {\n    color: var(--text-color-kumo-default) !important;\n  }\n  .\\!text-kumo-inverse {\n    color: var(--text-color-kumo-inverse) !important;\n  }\n  .\\!text-kumo-strong {\n    color: var(--text-color-kumo-strong) !important;\n  }\n  .\\!text-muted {\n    color: var(--text-color-muted) !important;\n  }\n  .\\!text-neutral-500 {\n    color: var(--color-neutral-500) !important;\n  }\n  .\\!text-neutral-600 {\n    color: var(--color-neutral-600) !important;\n  }\n  .\\!text-neutral-700 {\n    color: var(--color-neutral-700) !important;\n  }\n  .\\!text-neutral-800 {\n    color: var(--color-neutral-800) !important;\n  }\n  .\\!text-neutral-900 {\n    color: var(--color-neutral-900) !important;\n  }\n  .\\!text-orange-600 {\n    color: var(--color-orange-600) !important;\n  }\n  .\\!text-primary {\n    color: var(--text-color-primary) !important;\n  }\n  .\\!text-red-500 {\n    color: var(--color-red-500) !important;\n  }\n  .\\!text-red-600 {\n    color: var(--color-red-600) !important;\n  }\n  .\\!text-red-800 {\n    color: var(--color-red-800) !important;\n  }\n  .\\!text-surface {\n    color: var(--text-color-surface) !important;\n  }\n  .\\!text-white {\n    color: var(--color-white) !important;\n  }\n  .\\!text-yellow-600 {\n    color: var(--color-yellow-600) !important;\n  }\n  .text-\\(--color-connector\\) {\n    color: var(--color-connector);\n  }\n  .text-\\(--color-connector-active\\) {\n    color: var(--color-connector-active);\n  }\n  .text-\\[\\#001C43\\] {\n    color: #001C43;\n  }\n  .text-\\[\\#8d1eb1\\] {\n    color: #8d1eb1;\n  }\n  .text-\\[\\#595959\\] {\n    color: #595959;\n  }\n  .text-\\[\\#c05d08\\] {\n    color: #c05d08;\n  }\n  .text-\\[\\#e80954\\] {\n    color: #e80954;\n  }\n  .text-\\[\\#f6821f\\] {\n    color: #f6821f;\n  }\n  .text-\\[var\\(--color-primary\\)\\] {\n    color: var(--color-primary);\n  }\n  .text-\\[var\\(--kumo-destructive\\)\\] {\n    color: var(--kumo-destructive);\n  }\n  .text-\\[var\\(--kumo-primary\\)\\] {\n    color: var(--kumo-primary);\n  }\n  .text-\\[var\\(--light\\)\\] {\n    color: var(--light);\n  }\n  .text-alert {\n    color: var(--text-color-alert);\n  }\n  .text-amber-400 {\n    color: var(--color-amber-400);\n  }\n  .text-amber-500 {\n    color: var(--color-amber-500);\n  }\n  .text-amber-600 {\n    color: var(--color-amber-600);\n  }\n  .text-amber-700 {\n    color: var(--color-amber-700);\n  }\n  .text-black {\n    color: var(--color-black);\n  }\n  .text-blue-500 {\n    color: var(--color-blue-500);\n  }\n  .text-blue-600 {\n    color: var(--color-blue-600);\n  }\n  .text-blue-600\\/50 {\n    color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, var(--color-blue-600) 50%, transparent);\n    }\n  }\n  .text-blue-600\\/75 {\n    color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 75%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, var(--color-blue-600) 75%, transparent);\n    }\n  }\n  .text-blue-700 {\n    color: var(--color-blue-700);\n  }\n  .text-blue-800 {\n    color: var(--color-blue-800);\n  }\n  .text-blue-900 {\n    color: var(--color-blue-900);\n  }\n  .text-blue-900\\/60 {\n    color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 60%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, var(--color-blue-900) 60%, transparent);\n    }\n  }\n  .text-blue-900\\/90 {\n    color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 90%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, var(--color-blue-900) 90%, transparent);\n    }\n  }\n  .text-brand {\n    color: var(--text-color-brand);\n  }\n  .text-cl1-black {\n    color: var(--color-cl1-black);\n  }\n  .text-cl1-blue-4 {\n    color: var(--color-cl1-blue-4);\n  }\n  .text-cl1-blue-9 {\n    color: var(--color-cl1-blue-9);\n  }\n  .text-cl1-cyan-1 {\n    color: var(--color-cl1-cyan-1);\n  }\n  .text-cl1-gold-3 {\n    color: var(--color-cl1-gold-3);\n  }\n  .text-cl1-gold-6 {\n    color: var(--color-cl1-gold-6);\n  }\n  .text-cl1-gray-0 {\n    color: var(--color-cl1-gray-0);\n  }\n  .text-cl1-gray-1 {\n    color: var(--color-cl1-gray-1);\n  }\n  .text-cl1-gray-1\\/70 {\n    color: var(--color-cl1-gray-1);\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, var(--color-cl1-gray-1) 70%, transparent);\n    }\n  }\n  .text-cl1-gray-2 {\n    color: var(--color-cl1-gray-2);\n  }\n  .text-cl1-gray-3 {\n    color: var(--color-cl1-gray-3);\n  }\n  .text-cl1-gray-4 {\n    color: var(--color-cl1-gray-4);\n  }\n  .text-cl1-gray-5 {\n    color: var(--color-cl1-gray-5);\n  }\n  .text-cl1-gray-6 {\n    color: var(--color-cl1-gray-6);\n  }\n  .text-cl1-gray-8 {\n    color: var(--color-cl1-gray-8);\n  }\n  .text-cl1-gray-9 {\n    color: var(--color-cl1-gray-9);\n  }\n  .text-cl1-green-3 {\n    color: var(--color-cl1-green-3);\n  }\n  .text-cl1-green-6 {\n    color: var(--color-cl1-green-6);\n  }\n  .text-cl1-new-gray-1 {\n    color: var(--color-cl1-new-gray-1);\n  }\n  .text-cl1-new-gray-2 {\n    color: var(--color-cl1-new-gray-2);\n  }\n  .text-cl1-orange-5 {\n    color: var(--color-cl1-orange-5);\n  }\n  .text-cl1-pink-5 {\n    color: var(--color-cl1-pink-5);\n  }\n  .text-cl1-red-1 {\n    color: var(--color-cl1-red-1);\n  }\n  .text-cl1-red-2 {\n    color: var(--color-cl1-red-2);\n  }\n  .text-cl1-red-3 {\n    color: var(--color-cl1-red-3);\n  }\n  .text-cl1-red-4 {\n    color: var(--color-cl1-red-4);\n  }\n  .text-cl1-red-5 {\n    color: var(--color-cl1-red-5);\n  }\n  .text-cl1-red-6 {\n    color: var(--color-cl1-red-6);\n  }\n  .text-cl1-violet-4 {\n    color: var(--color-cl1-violet-4);\n  }\n  .text-color {\n    color: var(--color-color);\n  }\n  .text-current {\n    color: currentcolor;\n  }\n  .text-current\\/50 {\n    color: currentcolor;\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, currentcolor 50%, transparent);\n    }\n  }\n  .text-cyan-800 {\n    color: var(--color-cyan-800);\n  }\n  .text-disabled {\n    color: var(--text-color-disabled);\n  }\n  .text-emerald-500 {\n    color: var(--color-emerald-500);\n  }\n  .text-error {\n    color: var(--text-color-error);\n  }\n  .text-fedramp-primary-text {\n    color: var(--color-fedramp-primary-text);\n  }\n  .text-fuchsia-500 {\n    color: var(--color-fuchsia-500);\n  }\n  .text-gray-400 {\n    color: var(--color-gray-400);\n  }\n  .text-gray-500 {\n    color: var(--color-gray-500);\n  }\n  .text-gray-600 {\n    color: var(--color-gray-600);\n  }\n  .text-gray-700 {\n    color: var(--color-gray-700);\n  }\n  .text-gray-800 {\n    color: var(--color-gray-800);\n  }\n  .text-gray-900 {\n    color: var(--color-gray-900);\n  }\n  .text-green-500 {\n    color: var(--color-green-500);\n  }\n  .text-green-600 {\n    color: var(--color-green-600);\n  }\n  .text-green-700 {\n    color: var(--color-green-700);\n  }\n  .text-green-800 {\n    color: var(--color-green-800);\n  }\n  .text-green-900 {\n    color: var(--color-green-900);\n  }\n  .text-indigo-500 {\n    color: var(--color-indigo-500);\n  }\n  .text-indigo-600 {\n    color: var(--color-indigo-600);\n  }\n  .text-indigo-700 {\n    color: var(--color-indigo-700);\n  }\n  .text-info {\n    color: var(--text-color-info);\n  }\n  .text-inherit {\n    color: inherit;\n  }\n  .text-inherit\\! {\n    color: inherit !important;\n  }\n  .text-kumo-brand {\n    color: var(--text-color-kumo-brand);\n  }\n  .text-kumo-danger {\n    color: var(--text-color-kumo-danger);\n  }\n  .text-kumo-default {\n    color: var(--text-color-kumo-default);\n  }\n  .text-kumo-inactive {\n    color: var(--text-color-kumo-inactive);\n  }\n  .text-kumo-inverse {\n    color: var(--text-color-kumo-inverse);\n  }\n  .text-kumo-link {\n    color: var(--text-color-kumo-link);\n  }\n  .text-kumo-strong {\n    color: var(--text-color-kumo-strong);\n  }\n  .text-kumo-subtle {\n    color: var(--text-color-kumo-subtle);\n  }\n  .text-kumo-success {\n    color: var(--text-color-kumo-success);\n  }\n  .text-kumo-warning {\n    color: var(--text-color-kumo-warning);\n  }\n  .text-label {\n    color: var(--text-color-label);\n  }\n  .text-muted {\n    color: var(--text-color-muted);\n  }\n  .text-neutral-100 {\n    color: var(--color-neutral-100);\n  }\n  .text-neutral-200 {\n    color: var(--color-neutral-200);\n  }\n  .text-neutral-300 {\n    color: var(--color-neutral-300);\n  }\n  .text-neutral-400 {\n    color: var(--color-neutral-400);\n  }\n  .text-neutral-500 {\n    color: var(--color-neutral-500);\n  }\n  .text-neutral-600 {\n    color: var(--color-neutral-600);\n  }\n  .text-neutral-700 {\n    color: var(--color-neutral-700);\n  }\n  .text-neutral-800 {\n    color: var(--color-neutral-800);\n  }\n  .text-neutral-900 {\n    color: var(--color-neutral-900);\n  }\n  .text-neutral-900\\! {\n    color: var(--color-neutral-900) !important;\n  }\n  .text-neutral-950 {\n    color: var(--color-neutral-950);\n  }\n  .text-orange-500 {\n    color: var(--color-orange-500);\n  }\n  .text-orange-600 {\n    color: var(--color-orange-600);\n  }\n  .text-orange-800 {\n    color: var(--color-orange-800);\n  }\n  .text-primary {\n    color: var(--text-color-primary);\n  }\n  .text-purple-600 {\n    color: var(--color-purple-600);\n  }\n  .text-purple-800 {\n    color: var(--color-purple-800);\n  }\n  .text-red-300 {\n    color: var(--color-red-300);\n  }\n  .text-red-400 {\n    color: var(--color-red-400);\n  }\n  .text-red-500 {\n    color: var(--color-red-500);\n  }\n  .text-red-600 {\n    color: var(--color-red-600);\n  }\n  .text-red-600\\/75 {\n    color: color-mix(in srgb, oklch(57.7% 0.245 27.325) 75%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      color: color-mix(in oklab, var(--color-red-600) 75%, transparent);\n    }\n  }\n  .text-red-700 {\n    color: var(--color-red-700);\n  }\n  .text-red-800 {\n    color: var(--color-red-800);\n  }\n  .text-red-900 {\n    color: var(--color-red-900);\n  }\n  .text-rose-500 {\n    color: var(--color-rose-500);\n  }\n  .text-secondary {\n    color: var(--color-secondary);\n  }\n  .text-sky-500 {\n    color: var(--color-sky-500);\n  }\n  .text-surface {\n    color: var(--text-color-surface);\n  }\n  .text-transparent {\n    color: transparent;\n  }\n  .text-violet-600 {\n    color: var(--color-violet-600);\n  }\n  .text-violet-900 {\n    color: var(--color-violet-900);\n  }\n  .text-white {\n    color: var(--color-white);\n  }\n  .text-yellow-500 {\n    color: var(--color-yellow-500);\n  }\n  .text-yellow-600 {\n    color: var(--color-yellow-600);\n  }\n  .text-yellow-700 {\n    color: var(--color-yellow-700);\n  }\n  .text-yellow-800 {\n    color: var(--color-yellow-800);\n  }\n  .text-yellow-900 {\n    color: var(--color-yellow-900);\n  }\n  .capitalize {\n    text-transform: capitalize;\n  }\n  .lowercase {\n    text-transform: lowercase;\n  }\n  .normal-case {\n    text-transform: none;\n  }\n  .uppercase {\n    text-transform: uppercase;\n  }\n  .italic {\n    font-style: italic;\n  }\n  .not-italic {\n    font-style: normal;\n  }\n  .diagonal-fractions {\n    --tw-numeric-fraction: diagonal-fractions;\n    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);\n  }\n  .lining-nums {\n    --tw-numeric-figure: lining-nums;\n    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);\n  }\n  .oldstyle-nums {\n    --tw-numeric-figure: oldstyle-nums;\n    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);\n  }\n  .ordinal {\n    --tw-ordinal: ordinal;\n    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);\n  }\n  .proportional-nums {\n    --tw-numeric-spacing: proportional-nums;\n    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);\n  }\n  .slashed-zero {\n    --tw-slashed-zero: slashed-zero;\n    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);\n  }\n  .stacked-fractions {\n    --tw-numeric-fraction: stacked-fractions;\n    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);\n  }\n  .tabular-nums {\n    --tw-numeric-spacing: tabular-nums;\n    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);\n  }\n  .normal-nums {\n    font-variant-numeric: normal;\n  }\n  .\\!no-underline {\n    text-decoration-line: none !important;\n  }\n  .\\!underline {\n    text-decoration-line: underline !important;\n  }\n  .line-through {\n    text-decoration-line: line-through;\n  }\n  .no-underline {\n    text-decoration-line: none;\n  }\n  .no-underline\\! {\n    text-decoration-line: none !important;\n  }\n  .overline {\n    text-decoration-line: overline;\n  }\n  .underline {\n    text-decoration-line: underline;\n  }\n  .decoration-current\\/50 {\n    text-decoration-color: currentcolor;\n    @supports (color: color-mix(in lab, red, red)) {\n      text-decoration-color: color-mix(in oklab, currentcolor 50%, transparent);\n    }\n  }\n  .decoration-neutral-400 {\n    text-decoration-color: var(--color-neutral-400);\n  }\n  .\\!decoration-dashed {\n    text-decoration-style: dashed !important;\n  }\n  .decoration-dotted {\n    text-decoration-style: dotted;\n  }\n  .\\!decoration-\\[0\\.5px\\] {\n    text-decoration-thickness: 0.5px !important;\n  }\n  .decoration-1 {\n    text-decoration-thickness: 1px;\n  }\n  .decoration-\\[0\\.5px\\] {\n    text-decoration-thickness: 0.5px;\n  }\n  .decoration-\\[0\\.0625em\\] {\n    text-decoration-thickness: 0.0625em;\n  }\n  .\\!underline-offset-\\[3px\\] {\n    text-underline-offset: 3px !important;\n  }\n  .underline-offset-1 {\n    text-underline-offset: 1px;\n  }\n  .underline-offset-2 {\n    text-underline-offset: 2px;\n  }\n  .underline-offset-4 {\n    text-underline-offset: 4px;\n  }\n  .underline-offset-\\[0\\.15em\\] {\n    text-underline-offset: 0.15em;\n  }\n  .underline-offset-\\[3px\\] {\n    text-underline-offset: 3px;\n  }\n  .antialiased {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  .subpixel-antialiased {\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto;\n  }\n  .placeholder-color {\n    &::placeholder {\n      color: var(--color-color);\n    }\n  }\n  .caret-color {\n    caret-color: var(--color-color);\n  }\n  .accent-orange-500 {\n    accent-color: var(--color-orange-500);\n  }\n  .opacity-0 {\n    opacity: 0%;\n  }\n  .opacity-20 {\n    opacity: 20%;\n  }\n  .opacity-25 {\n    opacity: 25%;\n  }\n  .opacity-30 {\n    opacity: 30%;\n  }\n  .opacity-40 {\n    opacity: 40%;\n  }\n  .opacity-50 {\n    opacity: 50%;\n  }\n  .opacity-60 {\n    opacity: 60%;\n  }\n  .opacity-70 {\n    opacity: 70%;\n  }\n  .opacity-75 {\n    opacity: 75%;\n  }\n  .opacity-80 {\n    opacity: 80%;\n  }\n  .opacity-85 {\n    opacity: 85%;\n  }\n  .opacity-90 {\n    opacity: 90%;\n  }\n  .opacity-100 {\n    opacity: 100%;\n  }\n  .\\!shadow-none {\n    --tw-shadow: 0 0 #0000 !important;\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow) !important;\n  }\n  .shadow {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-2xl {\n    --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, rgb(0 0 0 / 0.25));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[-1px_0_var\\(--color-neutral-200\\)\\] {\n    --tw-shadow: -1px 0 var(--tw-shadow-color, var(--color-neutral-200));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_0_0_1px_rgba\\(0\\,0\\,0\\,0\\.5\\)_inset\\] {\n    --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(0,0,0,0.5)) inset;\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_1px_1px_0_rgba\\(0\\,0\\,0\\,\\.05\\)\\] {\n    --tw-shadow: 0 1px 1px 0 var(--tw-shadow-color, rgba(0,0,0,.05));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_1px_3px_rgba\\(0\\,0\\,0\\,0\\.25\\)\\] {\n    --tw-shadow: 0 1px 3px var(--tw-shadow-color, rgba(0,0,0,0.25));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_2px_2px_rgb\\(0_0_0\\/5\\%\\)\\,0_0_4px_8px_theme\\(\\"colors\\.neutral\\.50\\"\\)\\] {\n    --tw-shadow: 0 2px 2px var(--tw-shadow-color, rgb(0 0 0/5%)), 0 0 4px 8px var(--tw-shadow-color, oklch(0.985 0 0));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_4px_30px_0_rgba\\(29\\,29\\,29\\,0\\.10\\)\\] {\n    --tw-shadow: 0 4px 30px 0 var(--tw-shadow-color, rgba(29,29,29,0.10));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-\\[0_100px_var\\(--color-bg-secondary\\)\\] {\n    --tw-shadow: 0 100px var(--tw-shadow-color, var(--color-bg-secondary));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-lg {\n    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-md {\n    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-none {\n    --tw-shadow: 0 0 #0000;\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-sm {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-xl {\n    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-xs {\n    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .\\!ring-0 {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor) !important;\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow) !important;\n  }\n  .ring {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .ring-0 {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .ring-1 {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .ring-2 {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .ring-4 {\n    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .inset-ring {\n    --tw-inset-ring-shadow: inset 0 0 0 1px var(--tw-inset-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n  .shadow-black\\/5 {\n    --tw-shadow-color: color-mix(in srgb, #000 5%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-black) 5%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n  .shadow-black\\/7 {\n    --tw-shadow-color: color-mix(in srgb, #000 7%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-black) 7%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n  .shadow-color {\n    --tw-shadow-color: light-dark(\n    var(--color-neutral-200, oklch(92.2% 0 0)),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-shadow-color: color-mix(in oklab, var(--color-color) var(--tw-shadow-alpha), transparent);\n    }\n  }\n  .shadow-kumo-tip-shadow {\n    --tw-shadow-color: light-dark(\n    var(--color-gray-200, oklch(92.8% 0.006 264.531)),\n    transparent\n  );\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-shadow-color: color-mix(in oklab, var(--color-kumo-tip-shadow) var(--tw-shadow-alpha), transparent);\n    }\n  }\n  .shadow-neutral-200 {\n    --tw-shadow-color: oklch(92.2% 0 0);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-shadow-color: color-mix(in oklab, var(--color-neutral-200) var(--tw-shadow-alpha), transparent);\n    }\n  }\n  .shadow-red-500\\/20 {\n    --tw-shadow-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 20%, transparent) var(--tw-shadow-alpha), transparent);\n    }\n  }\n  .\\!ring-kumo-danger {\n    --tw-ring-color: var(--color-kumo-danger) !important;\n  }\n  .\\!ring-neutral-400\\/50 {\n    --tw-ring-color: color-mix(in srgb, oklch(70.8% 0 0) 50%, transparent) !important;\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-neutral-400) 50%, transparent) !important;\n    }\n  }\n  .ring-\\[\\#4794FF\\]\\/50 {\n    --tw-ring-color: color-mix(in oklab, #4794FF 50%, transparent);\n  }\n  .ring-\\[\\#F42500\\]\\/50 {\n    --tw-ring-color: color-mix(in oklab, #F42500 50%, transparent);\n  }\n  .ring-active {\n    --tw-ring-color: var(--color-active);\n  }\n  .ring-amber-700\\/25 {\n    --tw-ring-color: color-mix(in srgb, oklch(55.5% 0.163 48.998) 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-amber-700) 25%, transparent);\n    }\n  }\n  .ring-black\\/10 {\n    --tw-ring-color: color-mix(in srgb, #000 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-black) 10%, transparent);\n    }\n  }\n  .ring-black\\/15 {\n    --tw-ring-color: color-mix(in srgb, #000 15%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-black) 15%, transparent);\n    }\n  }\n  .ring-black\\/20 {\n    --tw-ring-color: color-mix(in srgb, #000 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-black) 20%, transparent);\n    }\n  }\n  .ring-blue-100 {\n    --tw-ring-color: var(--color-blue-100);\n  }\n  .ring-blue-200 {\n    --tw-ring-color: var(--color-blue-200);\n  }\n  .ring-blue-300 {\n    --tw-ring-color: var(--color-blue-300);\n  }\n  .ring-blue-500 {\n    --tw-ring-color: var(--color-blue-500);\n  }\n  .ring-blue-600 {\n    --tw-ring-color: var(--color-blue-600);\n  }\n  .ring-blue-600\\/20 {\n    --tw-ring-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-blue-600) 20%, transparent);\n    }\n  }\n  .ring-blue-600\\/50 {\n    --tw-ring-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-blue-600) 50%, transparent);\n    }\n  }\n  .ring-border {\n    --tw-ring-color: var(--color-border);\n  }\n  .ring-color {\n    --tw-ring-color: var(--color-color);\n  }\n  .ring-green-300 {\n    --tw-ring-color: var(--color-green-300);\n  }\n  .ring-green-600\\/25 {\n    --tw-ring-color: color-mix(in srgb, oklch(62.7% 0.194 149.214) 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-green-600) 25%, transparent);\n    }\n  }\n  .ring-indigo-200 {\n    --tw-ring-color: var(--color-indigo-200);\n  }\n  .ring-kumo-danger {\n    --tw-ring-color: var(--color-kumo-danger);\n  }\n  .ring-kumo-fill {\n    --tw-ring-color: var(--color-kumo-fill);\n  }\n  .ring-kumo-fill-hover {\n    --tw-ring-color: var(--color-kumo-fill-hover);\n  }\n  .ring-kumo-line {\n    --tw-ring-color: var(--color-kumo-line);\n  }\n  .ring-neutral-200 {\n    --tw-ring-color: var(--color-neutral-200);\n  }\n  .ring-neutral-200\\/50 {\n    --tw-ring-color: color-mix(in srgb, oklch(92.2% 0 0) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-neutral-200) 50%, transparent);\n    }\n  }\n  .ring-neutral-300 {\n    --tw-ring-color: var(--color-neutral-300);\n  }\n  .ring-neutral-400 {\n    --tw-ring-color: var(--color-neutral-400);\n  }\n  .ring-neutral-500\\/25 {\n    --tw-ring-color: color-mix(in srgb, oklch(55.6% 0 0) 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-neutral-500) 25%, transparent);\n    }\n  }\n  .ring-neutral-800 {\n    --tw-ring-color: var(--color-neutral-800);\n  }\n  .ring-neutral-800\\/10 {\n    --tw-ring-color: color-mix(in srgb, oklch(26.9% 0 0) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-neutral-800) 10%, transparent);\n    }\n  }\n  .ring-neutral-950\\/10 {\n    --tw-ring-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n    }\n  }\n  .ring-neutral-950\\/15 {\n    --tw-ring-color: color-mix(in srgb, oklch(14.5% 0 0) 15%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 15%, transparent);\n    }\n  }\n  .ring-orange-300 {\n    --tw-ring-color: var(--color-orange-300);\n  }\n  .ring-primary {\n    --tw-ring-color: var(--color-primary);\n  }\n  .ring-red-200 {\n    --tw-ring-color: var(--color-red-200);\n  }\n  .ring-red-300 {\n    --tw-ring-color: var(--color-red-300);\n  }\n  .ring-red-500 {\n    --tw-ring-color: var(--color-red-500);\n  }\n  .ring-red-600\\/50 {\n    --tw-ring-color: color-mix(in srgb, oklch(57.7% 0.245 27.325) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-red-600) 50%, transparent);\n    }\n  }\n  .ring-transparent {\n    --tw-ring-color: transparent;\n  }\n  .ring-white\\/20 {\n    --tw-ring-color: color-mix(in srgb, #fff 20%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-white) 20%, transparent);\n    }\n  }\n  .ring-white\\/25 {\n    --tw-ring-color: color-mix(in srgb, #fff 25%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-white) 25%, transparent);\n    }\n  }\n  .ring-yellow-400 {\n    --tw-ring-color: var(--color-yellow-400);\n  }\n  .ring-yellow-600\\/50 {\n    --tw-ring-color: color-mix(in srgb, oklch(68.1% 0.162 75.834) 50%, transparent);\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-ring-color: color-mix(in oklab, var(--color-yellow-600) 50%, transparent);\n    }\n  }\n  .inset-shadow-color {\n    --tw-inset-shadow-color: light-dark(\n    var(--color-neutral-200, oklch(92.2% 0 0)),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-inset-shadow-color: color-mix(in oklab, var(--color-color) var(--tw-inset-shadow-alpha), transparent);\n    }\n  }\n  .inset-ring-color {\n    --tw-inset-ring-color: var(--color-color);\n  }\n  .ring-offset-0 {\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  }\n  .ring-offset-2 {\n    --tw-ring-offset-width: 2px;\n    --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  }\n  .ring-offset-3 {\n    --tw-ring-offset-width: 3px;\n    --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  }\n  .ring-offset-black {\n    --tw-ring-offset-color: var(--color-black);\n  }\n  .ring-offset-color {\n    --tw-ring-offset-color: var(--color-color);\n  }\n  .outline-hidden {\n    --tw-outline-style: none;\n    outline-style: none;\n    @media (forced-colors: active) {\n      outline: 2px solid transparent;\n      outline-offset: 2px;\n    }\n  }\n  .outline {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n  .outline-0 {\n    outline-style: var(--tw-outline-style);\n    outline-width: 0px;\n  }\n  .outline-1 {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n  .-outline-offset-1 {\n    outline-offset: calc(1px * -1);\n  }\n  .\\[outline-offset\\:2px\\] {\n    outline-offset: 2px;\n  }\n  .outline-color {\n    outline-color: var(--color-color);\n  }\n  .outline-kumo-fill {\n    outline-color: var(--color-kumo-fill);\n  }\n  .outline-neutral-300 {\n    outline-color: var(--color-neutral-300);\n  }\n  .outline-tooltip-border {\n    outline-color: var(--color-tooltip-border);\n  }\n  .blur {\n    --tw-blur: blur(8px);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .drop-shadow {\n    --tw-drop-shadow-size: drop-shadow(0 1px 2px var(--tw-drop-shadow-color, rgb(0 0 0 / 0.1))) drop-shadow(0 1px 1px var(--tw-drop-shadow-color, rgb(0 0 0 / 0.06)));\n    --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow( 0 1px 1px rgb(0 0 0 / 0.06));\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .drop-shadow-color {\n    --tw-drop-shadow-color: light-dark(\n    var(--color-neutral-200, oklch(92.2% 0 0)),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-drop-shadow-color: color-mix(in oklab, var(--color-color) var(--tw-drop-shadow-alpha), transparent);\n    }\n    --tw-drop-shadow: var(--tw-drop-shadow-size);\n  }\n  .grayscale {\n    --tw-grayscale: grayscale(100%);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .invert {\n    --tw-invert: invert(100%);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .sepia {\n    --tw-sepia: sepia(100%);\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .\\!filter {\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,) !important;\n  }\n  .filter {\n    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n  }\n  .backdrop-blur {\n    --tw-backdrop-blur: blur(8px);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-blur-\\[1px\\] {\n    --tw-backdrop-blur: blur(1px);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-blur-\\[2px\\] {\n    --tw-backdrop-blur: blur(2px);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-blur-\\[10px\\] {\n    --tw-backdrop-blur: blur(10px);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-blur-md {\n    --tw-backdrop-blur: blur(var(--blur-md));\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-blur-sm {\n    --tw-backdrop-blur: blur(var(--blur-sm));\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-blur-xs {\n    --tw-backdrop-blur: blur(var(--blur-xs));\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-grayscale {\n    --tw-backdrop-grayscale: grayscale(100%);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-invert {\n    --tw-backdrop-invert: invert(100%);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-sepia {\n    --tw-backdrop-sepia: sepia(100%);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .backdrop-filter {\n    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);\n  }\n  .\\!transition {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events !important;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function)) !important;\n    transition-duration: var(--tw-duration, var(--default-transition-duration)) !important;\n  }\n  .\\!transition-all {\n    transition-property: all !important;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function)) !important;\n    transition-duration: var(--tw-duration, var(--default-transition-duration)) !important;\n  }\n  .\\!transition-colors {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to !important;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function)) !important;\n    transition-duration: var(--tw-duration, var(--default-transition-duration)) !important;\n  }\n  .transition {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[background\\] {\n    transition-property: background;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[color\\,background\\,border\\,box-shadow\\] {\n    transition-property: color,background,border,box-shadow;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[colors\\,margin\\] {\n    transition-property: colors,margin;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[grid-template-columns\\] {\n    transition-property: grid-template-columns;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[grid-template-rows\\,border\\,margin\\] {\n    transition-property: grid-template-rows,border,margin;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[grid-template-rows\\,opacity\\] {\n    transition-property: grid-template-rows,opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[grid-template-rows\\] {\n    transition-property: grid-template-rows;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[left\\,width\\,transform\\] {\n    transition-property: left,width,transform;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[margin-right\\] {\n    transition-property: margin-right;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[opacity\\,transform\\] {\n    transition-property: opacity,transform;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[opacity\\] {\n    transition-property: opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[padding\\,margin\\] {\n    transition-property: padding,margin;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[padding\\] {\n    transition-property: padding;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[transform\\,opacity\\] {\n    transition-property: transform,opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[transform\\,scale\\,opacity\\] {\n    transition-property: transform,scale,opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-\\[width\\] {\n    transition-property: width;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-all {\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-colors {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-opacity {\n    transition-property: opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-shadow {\n    transition-property: box-shadow;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-transform {\n    transition-property: transform, translate, scale, rotate;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .transition-none {\n    transition-property: none;\n  }\n  .delay-200 {\n    transition-delay: 200ms;\n  }\n  .\\!duration-100 {\n    --tw-duration: 100ms !important;\n    transition-duration: 100ms !important;\n  }\n  .duration-100 {\n    --tw-duration: 100ms;\n    transition-duration: 100ms;\n  }\n  .duration-150 {\n    --tw-duration: 150ms;\n    transition-duration: 150ms;\n  }\n  .duration-200 {\n    --tw-duration: 200ms;\n    transition-duration: 200ms;\n  }\n  .duration-250 {\n    --tw-duration: 250ms;\n    transition-duration: 250ms;\n  }\n  .duration-300 {\n    --tw-duration: 300ms;\n    transition-duration: 300ms;\n  }\n  .duration-400 {\n    --tw-duration: 400ms;\n    transition-duration: 400ms;\n  }\n  .duration-500 {\n    --tw-duration: 500ms;\n    transition-duration: 500ms;\n  }\n  .duration-600 {\n    --tw-duration: 600ms;\n    transition-duration: 600ms;\n  }\n  .duration-\\[50\\] {\n    --tw-duration: 50;\n    transition-duration: 50;\n  }\n  .duration-\\[160ms\\] {\n    --tw-duration: 160ms;\n    transition-duration: 160ms;\n  }\n  .duration-\\[250ms\\] {\n    --tw-duration: 250ms;\n    transition-duration: 250ms;\n  }\n  .\\[transition-duration\\:250ms\\] {\n    transition-duration: 250ms;\n  }\n  .\\!ease-in-out {\n    --tw-ease: var(--ease-in-out) !important;\n    transition-timing-function: var(--ease-in-out) !important;\n  }\n  .ease-\\[cubic-bezier\\(0\\.77\\,0\\,0\\.175\\,1\\)\\] {\n    --tw-ease: cubic-bezier(0.77,0,0.175,1);\n    transition-timing-function: cubic-bezier(0.77,0,0.175,1);\n  }\n  .ease-in {\n    --tw-ease: var(--ease-in);\n    transition-timing-function: var(--ease-in);\n  }\n  .ease-in-out {\n    --tw-ease: var(--ease-in-out);\n    transition-timing-function: var(--ease-in-out);\n  }\n  .ease-linear {\n    --tw-ease: linear;\n    transition-timing-function: linear;\n  }\n  .ease-out {\n    --tw-ease: var(--ease-out);\n    transition-timing-function: var(--ease-out);\n  }\n  .will-change-\\[grid-template-columns\\] {\n    will-change: grid-template-columns;\n  }\n  .will-change-\\[width\\] {\n    will-change: width;\n  }\n  .outline-none {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n  .select-all {\n    -webkit-user-select: all;\n    user-select: all;\n  }\n  .select-auto {\n    -webkit-user-select: auto;\n    user-select: auto;\n  }\n  .select-none {\n    -webkit-user-select: none;\n    user-select: none;\n  }\n  .select-text {\n    -webkit-user-select: text;\n    user-select: text;\n  }\n  .\\[--gap\\:0\\.75rem\\] {\n    --gap: 0.75rem;\n  }\n  .\\[--height\\:var\\(--toast-frontmost-height\\,var\\(--toast-height\\)\\)\\] {\n    --height: var(--toast-frontmost-height,var(--toast-height));\n  }\n  .\\[--offset-y\\:calc\\(var\\(--toast-offset-y\\)\\*-1\\+calc\\(var\\(--toast-index\\)\\*var\\(--gap\\)\\*-1\\)\\+var\\(--toast-swipe-movement-y\\)\\)\\] {\n    --offset-y: calc(var(--toast-offset-y) * -1 + calc(var(--toast-index) * var(--gap) * -1) + var(--toast-swipe-movement-y));\n  }\n  .\\[--peek\\:0\\.75rem\\] {\n    --peek: 0.75rem;\n  }\n  .\\[--scale\\:calc\\(max\\(0\\,1-\\(var\\(--toast-index\\)\\*0\\.1\\)\\)\\)\\] {\n    --scale: calc(max(0, 1 - (var(--toast-index) * 0.1)));\n  }\n  .\\[--shrink\\:calc\\(1-var\\(--scale\\)\\)\\] {\n    --shrink: calc(1 - var(--scale));\n  }\n  .\\[-webkit-tap-highlight-color\\:rgba\\(0\\,0\\,0\\,0\\)\\] {\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  }\n  .\\[animation-duration\\:0\\.5s\\] {\n    animation-duration: 0.5s;\n  }\n  .\\[animation-duration\\:0\\.6s\\] {\n    animation-duration: 0.6s;\n  }\n  .\\[counter-increment\\:line_0\\] {\n    counter-increment: line 0;\n  }\n  .\\[counter-reset\\:line\\] {\n    counter-reset: line;\n  }\n  .\\[scroll-timeline\\:--scroller\\] {\n    scroll-timeline: --scroller;\n  }\n  .\\[transition\\:fill-opacity_150ms_ease-out\\] {\n    transition: fill-opacity 150ms ease-out;\n  }\n  .\\[transition\\:opacity_150ms_ease-out\\] {\n    transition: opacity 150ms ease-out;\n  }\n  .\\[transition\\:transform_0\\.5s_cubic-bezier\\(0\\.22\\,1\\,0\\.36\\,1\\)\\,opacity_0\\.5s\\,height_0\\.15s\\] {\n    transition: transform 0.5s cubic-bezier(0.22,1,0.36,1),opacity 0.5s,height 0.15s;\n  }\n  .backface-hidden {\n    backface-visibility: hidden;\n  }\n  .divide-x-reverse {\n    :where(& > :not(:last-child)) {\n      --tw-divide-x-reverse: 1;\n    }\n  }\n  .ring-inset {\n    --tw-ring-inset: inset;\n  }\n  .text-shadow-color {\n    --tw-text-shadow-color: light-dark(\n    var(--color-neutral-200, oklch(92.2% 0 0)),\n    var(--color-neutral-800, oklch(26.9% 0 0))\n  );\n    @supports (color: color-mix(in lab, red, red)) {\n      --tw-text-shadow-color: color-mix(in oklab, var(--color-color) var(--tw-text-shadow-alpha), transparent);\n    }\n  }\n  .\\*\\:w-full {\n    :is(& > *) {\n      width: 100%;\n    }\n  }\n  .\\*\\:max-w-full {\n    :is(& > *) {\n      max-width: 100%;\n    }\n  }\n  .\\*\\:truncate {\n    :is(& > *) {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n  .\\*\\:\\!border-border {\n    :is(& > *) {\n      border-color: var(--color-border) !important;\n    }\n  }\n  .\\*\\:\\!bg-inherit {\n    :is(& > *) {\n      background-color: inherit !important;\n    }\n  }\n  .not-first\\:rounded-t-none {\n    &:not(*:first-child) {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0;\n    }\n  }\n  .not-last\\:rounded-b-none {\n    &:not(*:last-child) {\n      border-bottom-right-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n  }\n  .not-last\\:\\!border-r {\n    &:not(*:last-child) {\n      border-right-style: var(--tw-border-style) !important;\n      border-right-width: 1px !important;\n    }\n  }\n  .not-hover\\:\\!no-underline {\n    &:not(*:hover) {\n      text-decoration-line: none !important;\n    }\n    @media not (hover: hover) {\n      text-decoration-line: none !important;\n    }\n  }\n  .group-first\\:rounded-l-full {\n    &:is(:where(.group):first-child *) {\n      border-top-left-radius: calc(infinity * 1px);\n      border-bottom-left-radius: calc(infinity * 1px);\n    }\n  }\n  .group-last\\:rounded-r-full {\n    &:is(:where(.group):last-child *) {\n      border-top-right-radius: calc(infinity * 1px);\n      border-bottom-right-radius: calc(infinity * 1px);\n    }\n  }\n  .group-focus-within\\:opacity-100 {\n    &:is(:where(.group):focus-within *) {\n      opacity: 100%;\n    }\n  }\n  .group-focus-within\\/container\\:invisible {\n    &:is(:where(.group\\/container):focus-within *) {\n      visibility: hidden;\n    }\n  }\n  .group-focus-within\\/container\\:visible {\n    &:is(:where(.group\\/container):focus-within *) {\n      visibility: visible;\n    }\n  }\n  .group-focus-within\\/container\\:opacity-100 {\n    &:is(:where(.group\\/container):focus-within *) {\n      opacity: 100%;\n    }\n  }\n  .group-focus-within\\/header\\:translate-x-0 {\n    &:is(:where(.group\\/header):focus-within *) {\n      --tw-translate-x: calc(var(--spacing) * 0);\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .group-focus-within\\/header\\:opacity-100 {\n    &:is(:where(.group\\/header):focus-within *) {\n      opacity: 100%;\n    }\n  }\n  .group-hover\\:pointer-events-auto {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        pointer-events: auto;\n      }\n    }\n  }\n  .group-hover\\:visible {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        visibility: visible;\n      }\n    }\n  }\n  .group-hover\\:block {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        display: block;\n      }\n    }\n  }\n  .group-hover\\:flex {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        display: flex;\n      }\n    }\n  }\n  .group-hover\\:scale-105 {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        --tw-scale-x: 105%;\n        --tw-scale-y: 105%;\n        --tw-scale-z: 105%;\n        scale: var(--tw-scale-x) var(--tw-scale-y);\n      }\n    }\n  }\n  .group-hover\\:scale-110 {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        --tw-scale-x: 110%;\n        --tw-scale-y: 110%;\n        --tw-scale-z: 110%;\n        scale: var(--tw-scale-x) var(--tw-scale-y);\n      }\n    }\n  }\n  .group-hover\\:bg-\\[\\#F8F8F8\\] {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        background-color: #F8F8F8;\n      }\n    }\n  }\n  .group-hover\\:bg-accent {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        background-color: var(--color-accent);\n      }\n    }\n  }\n  .group-hover\\:text-\\[\\#f6821f\\] {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        color: #f6821f;\n      }\n    }\n  }\n  .group-hover\\:text-blue-600 {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        color: var(--color-blue-600);\n      }\n    }\n  }\n  .group-hover\\:text-kumo-brand {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        color: var(--text-color-kumo-brand);\n      }\n    }\n  }\n  .group-hover\\:text-kumo-default {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        color: var(--text-color-kumo-default);\n      }\n    }\n  }\n  .group-hover\\:text-orange-600 {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        color: var(--color-orange-600);\n      }\n    }\n  }\n  .group-hover\\:underline {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        text-decoration-line: underline;\n      }\n    }\n  }\n  .group-hover\\:opacity-0 {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        opacity: 0%;\n      }\n    }\n  }\n  .group-hover\\:opacity-100 {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        opacity: 100%;\n      }\n    }\n  }\n  .group-hover\\:ring-kumo-ring {\n    &:is(:where(.group):hover *) {\n      @media (hover: hover) {\n        --tw-ring-color: var(--color-kumo-ring);\n      }\n    }\n  }\n  .group-hover\\/choice\\:translate-x-0 {\n    &:is(:where(.group\\/choice):hover *) {\n      @media (hover: hover) {\n        --tw-translate-x: calc(var(--spacing) * 0);\n        translate: var(--tw-translate-x) var(--tw-translate-y);\n      }\n    }\n  }\n  .group-hover\\/choice\\:text-neutral-950 {\n    &:is(:where(.group\\/choice):hover *) {\n      @media (hover: hover) {\n        color: var(--color-neutral-950);\n      }\n    }\n  }\n  .group-hover\\/choice\\:opacity-100 {\n    &:is(:where(.group\\/choice):hover *) {\n      @media (hover: hover) {\n        opacity: 100%;\n      }\n    }\n  }\n  .group-hover\\/container\\:opacity-100 {\n    &:is(:where(.group\\/container):hover *) {\n      @media (hover: hover) {\n        opacity: 100%;\n      }\n    }\n  }\n  .group-hover\\/escape\\:scale-100 {\n    &:is(:where(.group\\/escape):hover *) {\n      @media (hover: hover) {\n        --tw-scale-x: 100%;\n        --tw-scale-y: 100%;\n        --tw-scale-z: 100%;\n        scale: var(--tw-scale-x) var(--tw-scale-y);\n      }\n    }\n  }\n  .group-hover\\/escape\\:opacity-100 {\n    &:is(:where(.group\\/escape):hover *) {\n      @media (hover: hover) {\n        opacity: 100%;\n      }\n    }\n  }\n  .group-hover\\/expander\\:text-neutral-600 {\n    &:is(:where(.group\\/expander):hover *) {\n      @media (hover: hover) {\n        color: var(--color-neutral-600);\n      }\n    }\n  }\n  .group-hover\\/header\\:translate-x-0 {\n    &:is(:where(.group\\/header):hover *) {\n      @media (hover: hover) {\n        --tw-translate-x: calc(var(--spacing) * 0);\n        translate: var(--tw-translate-x) var(--tw-translate-y);\n      }\n    }\n  }\n  .group-hover\\/header\\:opacity-100 {\n    &:is(:where(.group\\/header):hover *) {\n      @media (hover: hover) {\n        opacity: 100%;\n      }\n    }\n  }\n  .group-hover\\/mask\\:invisible {\n    &:is(:where(.group\\/mask):hover *) {\n      @media (hover: hover) {\n        visibility: hidden;\n      }\n    }\n  }\n  .group-hover\\/mask\\:visible {\n    &:is(:where(.group\\/mask):hover *) {\n      @media (hover: hover) {\n        visibility: visible;\n      }\n    }\n  }\n  .group-hover\\/resize\\:w-0\\.5 {\n    &:is(:where(.group\\/resize):hover *) {\n      @media (hover: hover) {\n        width: calc(var(--spacing) * 0.5);\n      }\n    }\n  }\n  .group-hover\\/resize\\:bg-primary {\n    &:is(:where(.group\\/resize):hover *) {\n      @media (hover: hover) {\n        background-color: var(--color-primary);\n      }\n    }\n  }\n  .group-hover\\/row\\:pointer-events-auto {\n    &:is(:where(.group\\/row):hover *) {\n      @media (hover: hover) {\n        pointer-events: auto;\n      }\n    }\n  }\n  .group-hover\\/row\\:pointer-events-none {\n    &:is(:where(.group\\/row):hover *) {\n      @media (hover: hover) {\n        pointer-events: none;\n      }\n    }\n  }\n  .group-hover\\/row\\:opacity-0 {\n    &:is(:where(.group\\/row):hover *) {\n      @media (hover: hover) {\n        opacity: 0%;\n      }\n    }\n  }\n  .group-hover\\/row\\:opacity-100 {\n    &:is(:where(.group\\/row):hover *) {\n      @media (hover: hover) {\n        opacity: 100%;\n      }\n    }\n  }\n  .group-focus\\:opacity-100 {\n    &:is(:where(.group):focus *) {\n      opacity: 100%;\n    }\n  }\n  .group-focus\\/escape\\:scale-100 {\n    &:is(:where(.group\\/escape):focus *) {\n      --tw-scale-x: 100%;\n      --tw-scale-y: 100%;\n      --tw-scale-z: 100%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .group-focus\\/escape\\:opacity-100 {\n    &:is(:where(.group\\/escape):focus *) {\n      opacity: 100%;\n    }\n  }\n  .group-focus-visible\\/escape\\:ring-neutral-400 {\n    &:is(:where(.group\\/escape):focus-visible *) {\n      --tw-ring-color: var(--color-neutral-400);\n    }\n  }\n  .group-has-\\[\\[data-overflow-trigger\\]\\:focus\\]\\/spark\\:pointer-events-auto {\n    &:is(:where(.group\\/spark):has(*:is([data-overflow-trigger]:focus)) *) {\n      pointer-events: auto;\n    }\n  }\n  .group-has-\\[\\[data-overflow-trigger\\]\\:focus\\]\\/spark\\:pointer-events-none {\n    &:is(:where(.group\\/spark):has(*:is([data-overflow-trigger]:focus)) *) {\n      pointer-events: none;\n    }\n  }\n  .group-has-\\[\\[data-overflow-trigger\\]\\:focus\\]\\/spark\\:opacity-0 {\n    &:is(:where(.group\\/spark):has(*:is([data-overflow-trigger]:focus)) *) {\n      opacity: 0%;\n    }\n  }\n  .group-has-\\[\\[data-overflow-trigger\\]\\[data-popup-open\\]\\]\\/spark\\:pointer-events-auto {\n    &:is(:where(.group\\/spark):has(*:is([data-overflow-trigger][data-popup-open])) *) {\n      pointer-events: auto;\n    }\n  }\n  .group-has-\\[\\[data-overflow-trigger\\]\\[data-popup-open\\]\\]\\/spark\\:pointer-events-none {\n    &:is(:where(.group\\/spark):has(*:is([data-overflow-trigger][data-popup-open])) *) {\n      pointer-events: none;\n    }\n  }\n  .group-has-\\[\\[data-overflow-trigger\\]\\[data-popup-open\\]\\]\\/spark\\:opacity-0 {\n    &:is(:where(.group\\/spark):has(*:is([data-overflow-trigger][data-popup-open])) *) {\n      opacity: 0%;\n    }\n  }\n  .group-data-\\[highlighted\\]\\:opacity-100 {\n    &:is(:where(.group)[data-highlighted] *) {\n      opacity: 100%;\n    }\n  }\n  .group-data-\\[invalid\\]\\:ring-\\[var\\(--text-color-error\\)\\] {\n    &:is(:where(.group)[data-invalid] *) {\n      --tw-ring-color: var(--text-color-error);\n    }\n  }\n  .group-data-\\[panel-open\\]\\:rotate-0 {\n    &:is(:where(.group)[data-panel-open] *) {\n      rotate: 0deg;\n    }\n  }\n  .group-data-\\[selected\\]\\:opacity-100 {\n    &:is(:where(.group)[data-selected] *) {\n      opacity: 100%;\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:fixed {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      position: fixed;\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:top-0 {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      top: calc(var(--spacing) * 0);\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:bottom-0 {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      bottom: calc(var(--spacing) * 0);\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:left-0 {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      left: calc(var(--spacing) * 0);\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:z-\\[1190\\] {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      z-index: 1190;\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:mb-\\[13px\\] {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      margin-bottom: 13px;\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:w-\\[57px\\] {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      width: 57px;\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:overflow-hidden {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      overflow: hidden;\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:\\!overflow-x-hidden {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      overflow-x: hidden !important;\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:border-r {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      border-right-style: var(--tw-border-style);\n      border-right-width: 1px;\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:border-color {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      border-color: var(--color-color);\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:bg-surface-secondary {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      background-color: var(--color-surface-secondary);\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:shadow-none {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      --tw-shadow: 0 0 #0000;\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:ring-transparent {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      --tw-ring-color: transparent;\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:relative {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      position: relative;\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:-mx-7 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      margin-inline: calc(var(--spacing) * -7);\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:my-0 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      margin-block: calc(var(--spacing) * 0);\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:mt-\\[13px\\] {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      margin-top: 13px;\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:w-\\[260px\\] {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      width: 260px;\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:translate-x-0 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      --tw-translate-x: calc(var(--spacing) * 0);\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:scale-100 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      --tw-scale-x: 100%;\n      --tw-scale-y: 100%;\n      --tw-scale-z: 100%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:scale-y-100 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      --tw-scale-y: 100%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:grid-rows-\\[0fr\\] {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      grid-template-rows: 0fr;\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:grid-rows-\\[1fr\\] {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      grid-template-rows: 1fr;\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:border-transparent {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      border-color: transparent;\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:bg-neutral-150 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      background-color: var(--color-neutral-150);\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:px-3 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      padding-inline: calc(var(--spacing) * 3);\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:px-3\\.5 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      padding-inline: calc(var(--spacing) * 3.5);\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:px-4 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      padding-inline: calc(var(--spacing) * 4);\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:pt-4 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      padding-top: calc(var(--spacing) * 4);\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:pb-2 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      padding-bottom: calc(var(--spacing) * 2);\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:pb-\\[13px\\] {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      padding-bottom: 13px;\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:font-medium {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      --tw-font-weight: var(--font-weight-medium);\n      font-weight: var(--font-weight-medium);\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:text-neutral-950 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      color: var(--color-neutral-950);\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:opacity-100 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      opacity: 100%;\n    }\n  }\n  .group-\\[\\&\\:hover\\,\\&\\:focus\\]\\/escape\\:scale-100 {\n    &:is(:is(:where(.group\\/escape):hover,:where(.group\\/escape):focus) *) {\n      --tw-scale-x: 100%;\n      --tw-scale-y: 100%;\n      --tw-scale-z: 100%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .group-\\[\\&\\:hover\\,\\&\\:focus\\]\\/escape\\:opacity-100 {\n    &:is(:is(:where(.group\\/escape):hover,:where(.group\\/escape):focus) *) {\n      opacity: 100%;\n    }\n  }\n  .group-\\[\\&\\:hover\\,\\&\\:focus-visible\\]\\/choice\\:opacity-100 {\n    &:is(:is(:where(.group\\/choice):hover,:where(.group\\/choice):focus-visible) *) {\n      opacity: 100%;\n    }\n  }\n  .group-\\[\\[data-kumo-type\\=\\"entity-list\\"\\]\\]\\:rounded-none {\n    &:is(:where(.group):is([data-kumo-type="entity-list"]) *) {\n      border-radius: 0;\n    }\n  }\n  .group-\\[\\[data-kumo-type\\=\\"entity-list\\"\\]\\]\\:shadow-none {\n    &:is(:where(.group):is([data-kumo-type="entity-list"]) *) {\n      --tw-shadow: 0 0 #0000;\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .group-\\[\\[data-kumo-type\\=\\"entity-list\\"\\]\\]\\:ring-0 {\n    &:is(:where(.group):is([data-kumo-type="entity-list"]) *) {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .peer-checked\\:bg-amber-500 {\n    &:is(:where(.peer):checked ~ *) {\n      background-color: var(--color-amber-500);\n    }\n  }\n  .peer-focus\\:ring-2 {\n    &:is(:where(.peer):focus ~ *) {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .peer-focus\\:ring-amber-500 {\n    &:is(:where(.peer):focus ~ *) {\n      --tw-ring-color: var(--color-amber-500);\n    }\n  }\n  .peer-focus\\:outline-none {\n    &:is(:where(.peer):focus ~ *) {\n      --tw-outline-style: none;\n      outline-style: none;\n    }\n  }\n  .peer-focus-visible\\:ring-active {\n    &:is(:where(.peer):focus-visible ~ *) {\n      --tw-ring-color: var(--color-active);\n    }\n  }\n  .peer-disabled\\:cursor-not-allowed {\n    &:is(:where(.peer):disabled ~ *) {\n      cursor: not-allowed;\n    }\n  }\n  .peer-disabled\\:peer-focus-visible\\:bg-secondary {\n    &:is(:where(.peer):disabled ~ *) {\n      &:is(:where(.peer):focus-visible ~ *) {\n        background-color: var(--color-secondary);\n      }\n    }\n  }\n  .selection\\:bg-alert-selection {\n    & *::selection {\n      background-color: var(--color-alert-selection);\n    }\n    &::selection {\n      background-color: var(--color-alert-selection);\n    }\n  }\n  .selection\\:bg-blue-300 {\n    & *::selection {\n      background-color: var(--color-blue-300);\n    }\n    &::selection {\n      background-color: var(--color-blue-300);\n    }\n  }\n  .selection\\:bg-cl1-blue-7 {\n    & *::selection {\n      background-color: var(--color-cl1-blue-7);\n    }\n    &::selection {\n      background-color: var(--color-cl1-blue-7);\n    }\n  }\n  .selection\\:bg-error-selection {\n    & *::selection {\n      background-color: var(--color-error-selection);\n    }\n    &::selection {\n      background-color: var(--color-error-selection);\n    }\n  }\n  .selection\\:bg-info-selection {\n    & *::selection {\n      background-color: var(--color-info-selection);\n    }\n    &::selection {\n      background-color: var(--color-info-selection);\n    }\n  }\n  .selection\\:bg-kumo-danger-tint {\n    & *::selection {\n      background-color: var(--color-kumo-danger-tint);\n    }\n    &::selection {\n      background-color: var(--color-kumo-danger-tint);\n    }\n  }\n  .selection\\:bg-kumo-info-tint {\n    & *::selection {\n      background-color: var(--color-kumo-info-tint);\n    }\n    &::selection {\n      background-color: var(--color-kumo-info-tint);\n    }\n  }\n  .selection\\:bg-kumo-warning-tint {\n    & *::selection {\n      background-color: var(--color-kumo-warning-tint);\n    }\n    &::selection {\n      background-color: var(--color-kumo-warning-tint);\n    }\n  }\n  .selection\\:bg-red-300 {\n    & *::selection {\n      background-color: var(--color-red-300);\n    }\n    &::selection {\n      background-color: var(--color-red-300);\n    }\n  }\n  .selection\\:bg-yellow-300 {\n    & *::selection {\n      background-color: var(--color-yellow-300);\n    }\n    &::selection {\n      background-color: var(--color-yellow-300);\n    }\n  }\n  .selection\\:text-cl1-black {\n    & *::selection {\n      color: var(--color-cl1-black);\n    }\n    &::selection {\n      color: var(--color-cl1-black);\n    }\n  }\n  .placeholder\\:text-base {\n    &::placeholder {\n      font-size: var(--text-base);\n      line-height: var(--tw-leading, var(--text-base--line-height));\n    }\n  }\n  .placeholder\\:\\!text-cl1-gray-4 {\n    &::placeholder {\n      color: var(--color-cl1-gray-4) !important;\n    }\n  }\n  .placeholder\\:\\!text-muted {\n    &::placeholder {\n      color: var(--text-color-muted) !important;\n    }\n  }\n  .placeholder\\:\\!text-neutral-400 {\n    &::placeholder {\n      color: var(--color-neutral-400) !important;\n    }\n  }\n  .placeholder\\:text-kumo-subtle {\n    &::placeholder {\n      color: var(--text-color-kumo-subtle);\n    }\n  }\n  .placeholder\\:text-muted {\n    &::placeholder {\n      color: var(--text-color-muted);\n    }\n  }\n  .placeholder\\:text-neutral-400 {\n    &::placeholder {\n      color: var(--color-neutral-400);\n    }\n  }\n  .before\\:absolute {\n    &::before {\n      content: var(--tw-content);\n      position: absolute;\n    }\n  }\n  .before\\:inset-x-0 {\n    &::before {\n      content: var(--tw-content);\n      inset-inline: calc(var(--spacing) * 0);\n    }\n  }\n  .before\\:-inset-y-px {\n    &::before {\n      content: var(--tw-content);\n      inset-block: -1px;\n    }\n  }\n  .before\\:top-0 {\n    &::before {\n      content: var(--tw-content);\n      top: calc(var(--spacing) * 0);\n    }\n  }\n  .before\\:top-1\\/2 {\n    &::before {\n      content: var(--tw-content);\n      top: calc(1/2 * 100%);\n    }\n  }\n  .before\\:top-\\[-1px\\] {\n    &::before {\n      content: var(--tw-content);\n      top: -1px;\n    }\n  }\n  .before\\:-right-7 {\n    &::before {\n      content: var(--tw-content);\n      right: calc(var(--spacing) * -7);\n    }\n  }\n  .before\\:-bottom-7 {\n    &::before {\n      content: var(--tw-content);\n      bottom: calc(var(--spacing) * -7);\n    }\n  }\n  .before\\:-left-7 {\n    &::before {\n      content: var(--tw-content);\n      left: calc(var(--spacing) * -7);\n    }\n  }\n  .before\\:left-1\\/2 {\n    &::before {\n      content: var(--tw-content);\n      left: calc(1/2 * 100%);\n    }\n  }\n  .before\\:-z-10 {\n    &::before {\n      content: var(--tw-content);\n      z-index: calc(10 * -1);\n    }\n  }\n  .before\\:mr-2 {\n    &::before {\n      content: var(--tw-content);\n      margin-right: calc(var(--spacing) * 2);\n    }\n  }\n  .before\\:mr-4 {\n    &::before {\n      content: var(--tw-content);\n      margin-right: calc(var(--spacing) * 4);\n    }\n  }\n  .before\\:inline-block {\n    &::before {\n      content: var(--tw-content);\n      display: inline-block;\n    }\n  }\n  .before\\:h-full {\n    &::before {\n      content: var(--tw-content);\n      height: 100%;\n    }\n  }\n  .before\\:h-px {\n    &::before {\n      content: var(--tw-content);\n      height: 1px;\n    }\n  }\n  .before\\:min-h-\\[10px\\] {\n    &::before {\n      content: var(--tw-content);\n      min-height: 10px;\n    }\n  }\n  .before\\:w-4 {\n    &::before {\n      content: var(--tw-content);\n      width: calc(var(--spacing) * 4);\n    }\n  }\n  .before\\:w-full {\n    &::before {\n      content: var(--tw-content);\n      width: 100%;\n    }\n  }\n  .before\\:min-w-\\[10px\\] {\n    &::before {\n      content: var(--tw-content);\n      min-width: 10px;\n    }\n  }\n  .before\\:-translate-x-1\\/2 {\n    &::before {\n      content: var(--tw-content);\n      --tw-translate-x: calc(calc(1/2 * 100%) * -1);\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .before\\:-translate-y-1\\/2 {\n    &::before {\n      content: var(--tw-content);\n      --tw-translate-y: calc(calc(1/2 * 100%) * -1);\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .before\\:\\!border-0 {\n    &::before {\n      content: var(--tw-content);\n      border-style: var(--tw-border-style) !important;\n      border-width: 0px !important;\n    }\n  }\n  .before\\:border-t {\n    &::before {\n      content: var(--tw-content);\n      border-top-style: var(--tw-border-style);\n      border-top-width: 1px;\n    }\n  }\n  .before\\:border-neutral-950\\/10 {\n    &::before {\n      content: var(--tw-content);\n      border-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n      }\n    }\n  }\n  .before\\:bg-color {\n    &::before {\n      content: var(--tw-content);\n      background-color: var(--color-color);\n    }\n  }\n  .before\\:bg-neutral-50 {\n    &::before {\n      content: var(--tw-content);\n      background-color: var(--color-neutral-50);\n    }\n  }\n  .before\\:text-right {\n    &::before {\n      content: var(--tw-content);\n      text-align: right;\n    }\n  }\n  .before\\:font-mono {\n    &::before {\n      content: var(--tw-content);\n      font-family: var(--font-mono);\n    }\n  }\n  .before\\:text-\\[13px\\] {\n    &::before {\n      content: var(--tw-content);\n      font-size: 13px;\n    }\n  }\n  .before\\:text-cl1-gray-5 {\n    &::before {\n      content: var(--tw-content);\n      color: var(--color-cl1-gray-5);\n    }\n  }\n  .before\\:content-\\[\\\'\\\'\\] {\n    &::before {\n      --tw-content: \'\';\n      content: var(--tw-content);\n    }\n  }\n  .before\\:content-\\[\\\'•\\\'\\] {\n    &::before {\n      --tw-content: \'\\2022\';\n      content: var(--tw-content);\n    }\n  }\n  .before\\:content-\\[counter\\(line\\)\\] {\n    &::before {\n      --tw-content: counter(line);\n      content: var(--tw-content);\n    }\n  }\n  .before\\:select-none {\n    &::before {\n      content: var(--tw-content);\n      -webkit-user-select: none;\n      user-select: none;\n    }\n  }\n  .before\\:\\[counter-increment\\:line\\] {\n    &::before {\n      content: var(--tw-content);\n      counter-increment: line;\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:before\\:absolute {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::before {\n        content: var(--tw-content);\n        position: absolute;\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:before\\:-right-1 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::before {\n        content: var(--tw-content);\n        right: calc(var(--spacing) * -1);\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:before\\:-bottom-1 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::before {\n        content: var(--tw-content);\n        bottom: calc(var(--spacing) * -1);\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:before\\:z-10 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::before {\n        content: var(--tw-content);\n        z-index: 10;\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:before\\:size-\\[7px\\] {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::before {\n        content: var(--tw-content);\n        width: 7px;\n        height: 7px;\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:before\\:rounded-\\[1\\.5px\\] {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::before {\n        content: var(--tw-content);\n        border-radius: 1.5px;\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:before\\:bg-neutral-100 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::before {\n        content: var(--tw-content);\n        background-color: var(--color-neutral-100);\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:before\\:ring-1 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::before {\n        content: var(--tw-content);\n        --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:before\\:ring-neutral-400 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::before {\n        content: var(--tw-content);\n        --tw-ring-color: var(--color-neutral-400);\n      }\n    }\n  }\n  .after\\:pointer-events-none {\n    &::after {\n      content: var(--tw-content);\n      pointer-events: none;\n    }\n  }\n  .after\\:absolute {\n    &::after {\n      content: var(--tw-content);\n      position: absolute;\n    }\n  }\n  .after\\:inset-0 {\n    &::after {\n      content: var(--tw-content);\n      inset: calc(var(--spacing) * 0);\n    }\n  }\n  .after\\:inset-1 {\n    &::after {\n      content: var(--tw-content);\n      inset: calc(var(--spacing) * 1);\n    }\n  }\n  .after\\:inset-x-0 {\n    &::after {\n      content: var(--tw-content);\n      inset-inline: calc(var(--spacing) * 0);\n    }\n  }\n  .after\\:inset-x-6 {\n    &::after {\n      content: var(--tw-content);\n      inset-inline: calc(var(--spacing) * 6);\n    }\n  }\n  .after\\:top-0 {\n    &::after {\n      content: var(--tw-content);\n      top: calc(var(--spacing) * 0);\n    }\n  }\n  .after\\:top-1\\/2 {\n    &::after {\n      content: var(--tw-content);\n      top: calc(1/2 * 100%);\n    }\n  }\n  .after\\:top-\\[2px\\] {\n    &::after {\n      content: var(--tw-content);\n      top: 2px;\n    }\n  }\n  .after\\:top-full {\n    &::after {\n      content: var(--tw-content);\n      top: 100%;\n    }\n  }\n  .after\\:-bottom-\\[3px\\] {\n    &::after {\n      content: var(--tw-content);\n      bottom: calc(3px * -1);\n    }\n  }\n  .after\\:bottom-8 {\n    &::after {\n      content: var(--tw-content);\n      bottom: calc(var(--spacing) * 8);\n    }\n  }\n  .after\\:left-0 {\n    &::after {\n      content: var(--tw-content);\n      left: calc(var(--spacing) * 0);\n    }\n  }\n  .after\\:left-\\[2px\\] {\n    &::after {\n      content: var(--tw-content);\n      left: 2px;\n    }\n  }\n  .after\\:-z-10 {\n    &::after {\n      content: var(--tw-content);\n      z-index: calc(10 * -1);\n    }\n  }\n  .after\\:mx-1 {\n    &::after {\n      content: var(--tw-content);\n      margin-inline: calc(var(--spacing) * 1);\n    }\n  }\n  .after\\:h-4 {\n    &::after {\n      content: var(--tw-content);\n      height: calc(var(--spacing) * 4);\n    }\n  }\n  .after\\:h-\\[calc\\(var\\(--gap\\)\\+1px\\)\\] {\n    &::after {\n      content: var(--tw-content);\n      height: calc(var(--gap) + 1px);\n    }\n  }\n  .after\\:w-4 {\n    &::after {\n      content: var(--tw-content);\n      width: calc(var(--spacing) * 4);\n    }\n  }\n  .after\\:w-full {\n    &::after {\n      content: var(--tw-content);\n      width: 100%;\n    }\n  }\n  .after\\:rounded {\n    &::after {\n      content: var(--tw-content);\n      border-radius: 0.25rem;\n    }\n  }\n  .after\\:rounded-\\[7px\\] {\n    &::after {\n      content: var(--tw-content);\n      border-radius: 7px;\n    }\n  }\n  .after\\:rounded-full {\n    &::after {\n      content: var(--tw-content);\n      border-radius: calc(infinity * 1px);\n    }\n  }\n  .after\\:rounded-md {\n    &::after {\n      content: var(--tw-content);\n      border-radius: var(--radius-md);\n    }\n  }\n  .after\\:rounded-xl {\n    &::after {\n      content: var(--tw-content);\n      border-radius: var(--radius-xl);\n    }\n  }\n  .after\\:\\!border-0 {\n    &::after {\n      content: var(--tw-content);\n      border-style: var(--tw-border-style) !important;\n      border-width: 0px !important;\n    }\n  }\n  .after\\:border {\n    &::after {\n      content: var(--tw-content);\n      border-style: var(--tw-border-style);\n      border-width: 1px;\n    }\n  }\n  .after\\:border-dashed {\n    &::after {\n      content: var(--tw-content);\n      --tw-border-style: dashed;\n      border-style: dashed;\n    }\n  }\n  .after\\:border-neutral-950\\/10 {\n    &::after {\n      content: var(--tw-content);\n      border-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n      }\n    }\n  }\n  .after\\:bg-inherit {\n    &::after {\n      content: var(--tw-content);\n      background-color: inherit;\n    }\n  }\n  .after\\:bg-neutral-150 {\n    &::after {\n      content: var(--tw-content);\n      background-color: var(--color-neutral-150);\n    }\n  }\n  .after\\:bg-white {\n    &::after {\n      content: var(--tw-content);\n      background-color: var(--color-white);\n    }\n  }\n  .after\\:text-xs {\n    &::after {\n      content: var(--tw-content);\n      font-size: var(--text-xs);\n      line-height: var(--tw-leading, var(--text-xs--line-height));\n    }\n  }\n  .after\\:text-cl1-gray-6 {\n    &::after {\n      content: var(--tw-content);\n      color: var(--color-cl1-gray-6);\n    }\n  }\n  .after\\:shadow-xs {\n    &::after {\n      content: var(--tw-content);\n      --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .after\\:ring-1 {\n    &::after {\n      content: var(--tw-content);\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .after\\:ring-neutral-300 {\n    &::after {\n      content: var(--tw-content);\n      --tw-ring-color: var(--color-neutral-300);\n    }\n  }\n  .after\\:ring-neutral-900\\! {\n    &::after {\n      content: var(--tw-content);\n      --tw-ring-color: var(--color-neutral-900) !important;\n    }\n  }\n  .after\\:ring-neutral-950\\/15 {\n    &::after {\n      content: var(--tw-content);\n      --tw-ring-color: color-mix(in srgb, oklch(14.5% 0 0) 15%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 15%, transparent);\n      }\n    }\n  }\n  .after\\:ring-transparent {\n    &::after {\n      content: var(--tw-content);\n      --tw-ring-color: transparent;\n    }\n  }\n  .after\\:transition-all {\n    &::after {\n      content: var(--tw-content);\n      transition-property: all;\n      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n      transition-duration: var(--tw-duration, var(--default-transition-duration));\n    }\n  }\n  .after\\:content-\\[\\\'\\\'\\] {\n    &::after {\n      --tw-content: \'\';\n      content: var(--tw-content);\n    }\n  }\n  .after\\:content-\\[\\\'\\/\\\'\\] {\n    &::after {\n      --tw-content: \'/\';\n      content: var(--tw-content);\n    }\n  }\n  .after\\:ring-inset {\n    &::after {\n      content: var(--tw-content);\n      --tw-ring-inset: inset;\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:after\\:absolute {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::after {\n        content: var(--tw-content);\n        position: absolute;\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:after\\:-bottom-1 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::after {\n        content: var(--tw-content);\n        bottom: calc(var(--spacing) * -1);\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:after\\:-left-1 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::after {\n        content: var(--tw-content);\n        left: calc(var(--spacing) * -1);\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:after\\:z-10 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::after {\n        content: var(--tw-content);\n        z-index: 10;\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:after\\:size-\\[7px\\] {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::after {\n        content: var(--tw-content);\n        width: 7px;\n        height: 7px;\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:after\\:rounded-\\[1\\.5px\\] {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::after {\n        content: var(--tw-content);\n        border-radius: 1.5px;\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:after\\:bg-neutral-100 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::after {\n        content: var(--tw-content);\n        background-color: var(--color-neutral-100);\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:after\\:ring-1 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::after {\n        content: var(--tw-content);\n        --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:after\\:ring-neutral-400 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::after {\n        content: var(--tw-content);\n        --tw-ring-color: var(--color-neutral-400);\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:after\\:content-\\[\\\'\\\'\\] {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &::after {\n        --tw-content: \'\';\n        content: var(--tw-content);\n      }\n    }\n  }\n  .peer-checked\\:after\\:translate-x-full {\n    &:is(:where(.peer):checked ~ *) {\n      &::after {\n        content: var(--tw-content);\n        --tw-translate-x: 100%;\n        translate: var(--tw-translate-x) var(--tw-translate-y);\n      }\n    }\n  }\n  .peer-checked\\:after\\:border-white {\n    &:is(:where(.peer):checked ~ *) {\n      &::after {\n        content: var(--tw-content);\n        border-color: var(--color-white);\n      }\n    }\n  }\n  .peer-focus-visible\\:after\\:ring-active {\n    &:is(:where(.peer):focus-visible ~ *) {\n      &::after {\n        content: var(--tw-content);\n        --tw-ring-color: var(--color-active);\n      }\n    }\n  }\n  .first\\:mt-0 {\n    &:first-child {\n      margin-top: calc(var(--spacing) * 0);\n    }\n  }\n  .first\\:mt-1 {\n    &:first-child {\n      margin-top: calc(var(--spacing) * 1);\n    }\n  }\n  .first\\:mb-2 {\n    &:first-child {\n      margin-bottom: calc(var(--spacing) * 2);\n    }\n  }\n  .first\\:rounded-t-md {\n    &:first-child {\n      border-top-left-radius: var(--radius-md);\n      border-top-right-radius: var(--radius-md);\n    }\n  }\n  .first\\:rounded-l-\\[inherit\\] {\n    &:first-child {\n      border-top-left-radius: inherit;\n      border-bottom-left-radius: inherit;\n    }\n  }\n  .first\\:pt-0 {\n    &:first-child {\n      padding-top: calc(var(--spacing) * 0);\n    }\n  }\n  .first\\:pl-2 {\n    &:first-child {\n      padding-left: calc(var(--spacing) * 2);\n    }\n  }\n  .first\\:pl-4 {\n    &:first-child {\n      padding-left: calc(var(--spacing) * 4);\n    }\n  }\n  .last\\:mb-0 {\n    &:last-child {\n      margin-bottom: calc(var(--spacing) * 0);\n    }\n  }\n  .last\\:mb-1 {\n    &:last-child {\n      margin-bottom: calc(var(--spacing) * 1);\n    }\n  }\n  .last\\:rounded-r-\\[inherit\\] {\n    &:last-child {\n      border-top-right-radius: inherit;\n      border-bottom-right-radius: inherit;\n    }\n  }\n  .last\\:rounded-b-md {\n    &:last-child {\n      border-bottom-right-radius: var(--radius-md);\n      border-bottom-left-radius: var(--radius-md);\n    }\n  }\n  .last\\:\\!border-r-0 {\n    &:last-child {\n      border-right-style: var(--tw-border-style) !important;\n      border-right-width: 0px !important;\n    }\n  }\n  .last\\:border-b-0 {\n    &:last-child {\n      border-bottom-style: var(--tw-border-style);\n      border-bottom-width: 0px;\n    }\n  }\n  .last\\:pr-2 {\n    &:last-child {\n      padding-right: calc(var(--spacing) * 2);\n    }\n  }\n  .last\\:pb-0 {\n    &:last-child {\n      padding-bottom: calc(var(--spacing) * 0);\n    }\n  }\n  .last\\:after\\:content-\\[\\\'\\\'\\] {\n    &:last-child {\n      &::after {\n        --tw-content: \'\';\n        content: var(--tw-content);\n      }\n    }\n  }\n  .only\\:pb-3 {\n    &:only-child {\n      padding-bottom: calc(var(--spacing) * 3);\n    }\n  }\n  .empty\\:m-0 {\n    &:empty {\n      margin: calc(var(--spacing) * 0);\n    }\n  }\n  .empty\\:hidden {\n    &:empty {\n      display: none;\n    }\n  }\n  .empty\\:p-0 {\n    &:empty {\n      padding: calc(var(--spacing) * 0);\n    }\n  }\n  .empty\\:after\\:mx-0 {\n    &:empty {\n      &::after {\n        content: var(--tw-content);\n        margin-inline: calc(var(--spacing) * 0);\n      }\n    }\n  }\n  .empty\\:after\\:content-\\[\\\'\\\'\\] {\n    &:empty {\n      &::after {\n        --tw-content: \'\';\n        content: var(--tw-content);\n      }\n    }\n  }\n  .focus-within\\:border-active {\n    &:focus-within {\n      border-color: var(--color-active);\n    }\n  }\n  .focus-within\\:border-gray-400 {\n    &:focus-within {\n      border-color: var(--color-gray-400);\n    }\n  }\n  .focus-within\\:border-primary\\! {\n    &:focus-within {\n      border-color: var(--color-primary) !important;\n    }\n  }\n  .focus-within\\:shadow-sm {\n    &:focus-within {\n      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus-within\\:ring-2 {\n    &:focus-within {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus-within\\:ring-active {\n    &:focus-within {\n      --tw-ring-color: var(--color-active);\n    }\n  }\n  .focus-within\\:ring-kumo-ring {\n    &:focus-within {\n      --tw-ring-color: var(--color-kumo-ring);\n    }\n  }\n  .focus-within\\:ring-primary {\n    &:focus-within {\n      --tw-ring-color: var(--color-primary);\n    }\n  }\n  .focus-within\\:ring-offset-2 {\n    &:focus-within {\n      --tw-ring-offset-width: 2px;\n      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    }\n  }\n  .focus-within\\:outline-2 {\n    &:focus-within {\n      outline-style: var(--tw-outline-style);\n      outline-width: 2px;\n    }\n  }\n  .focus-within\\:-outline-offset-2 {\n    &:focus-within {\n      outline-offset: calc(2px * -1);\n    }\n  }\n  .focus-within\\:outline-blue-700 {\n    &:focus-within {\n      outline-color: var(--color-blue-700);\n    }\n  }\n  .focus-within\\:outline-indigo-600 {\n    &:focus-within {\n      outline-color: var(--color-indigo-600);\n    }\n  }\n  .hover\\:w-1 {\n    &:hover {\n      @media (hover: hover) {\n        width: calc(var(--spacing) * 1);\n      }\n    }\n  }\n  .hover\\:-translate-y-0\\.5 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-translate-y: calc(var(--spacing) * -0.5);\n        translate: var(--tw-translate-x) var(--tw-translate-y);\n      }\n    }\n  }\n  .hover\\:cursor-pointer {\n    &:hover {\n      @media (hover: hover) {\n        cursor: pointer;\n      }\n    }\n  }\n  .hover\\:\\!border-current {\n    &:hover {\n      @media (hover: hover) {\n        border-color: currentcolor !important;\n      }\n    }\n  }\n  .hover\\:border-active {\n    &:hover {\n      @media (hover: hover) {\n        border-color: var(--color-active);\n      }\n    }\n  }\n  .hover\\:border-blue-400 {\n    &:hover {\n      @media (hover: hover) {\n        border-color: var(--color-blue-400);\n      }\n    }\n  }\n  .hover\\:border-blue-500 {\n    &:hover {\n      @media (hover: hover) {\n        border-color: var(--color-blue-500);\n      }\n    }\n  }\n  .hover\\:border-gray-300 {\n    &:hover {\n      @media (hover: hover) {\n        border-color: var(--color-gray-300);\n      }\n    }\n  }\n  .hover\\:border-kumo-interact\\/80 {\n    &:hover {\n      @media (hover: hover) {\n        border-color: color-mix(in srgb, light-dark(\n    var(--color-neutral-300, oklch(87% 0 0)),\n    var(--color-neutral-700, oklch(37.1% 0 0))\n  ) 80%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          border-color: color-mix(in oklab, var(--color-kumo-interact) 80%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:border-kumo-tint {\n    &:hover {\n      @media (hover: hover) {\n        border-color: var(--color-kumo-tint);\n      }\n    }\n  }\n  .hover\\:border-neutral-300 {\n    &:hover {\n      @media (hover: hover) {\n        border-color: var(--color-neutral-300);\n      }\n    }\n  }\n  .hover\\:border-neutral-300\\/80 {\n    &:hover {\n      @media (hover: hover) {\n        border-color: color-mix(in srgb, oklch(87% 0 0) 80%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          border-color: color-mix(in oklab, var(--color-neutral-300) 80%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:border-neutral-900\\/25 {\n    &:hover {\n      @media (hover: hover) {\n        border-color: color-mix(in srgb, oklch(20.5% 0 0) 25%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          border-color: color-mix(in oklab, var(--color-neutral-900) 25%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:border-primary {\n    &:hover {\n      @media (hover: hover) {\n        border-color: var(--color-primary);\n      }\n    }\n  }\n  .hover\\:\\!bg-black {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-black) !important;\n      }\n    }\n  }\n  .hover\\:\\!bg-blue-700 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-blue-700) !important;\n      }\n    }\n  }\n  .hover\\:\\!bg-neutral-100 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-neutral-100) !important;\n      }\n    }\n  }\n  .hover\\:\\!bg-orange-600 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-orange-600) !important;\n      }\n    }\n  }\n  .hover\\:\\!bg-red-50 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-red-50) !important;\n      }\n    }\n  }\n  .hover\\:\\!bg-red-600 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-red-600) !important;\n      }\n    }\n  }\n  .hover\\:\\!bg-white {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-white) !important;\n      }\n    }\n  }\n  .hover\\:bg-\\[\\#6B4FBB\\]\\/80 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in oklab, #6B4FBB 80%, transparent);\n      }\n    }\n  }\n  .hover\\:bg-\\[\\#4794FF\\]\\/10 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in oklab, #4794FF 10%, transparent);\n      }\n    }\n  }\n  .hover\\:bg-\\[\\#E5621F\\] {\n    &:hover {\n      @media (hover: hover) {\n        background-color: #E5621F;\n      }\n    }\n  }\n  .hover\\:bg-\\[\\#F42500\\]\\/10 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in oklab, #F42500 10%, transparent);\n      }\n    }\n  }\n  .hover\\:bg-\\[\\#f0b72e\\] {\n    &:hover {\n      @media (hover: hover) {\n        background-color: #f0b72e;\n      }\n    }\n  }\n  .hover\\:bg-accent {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-accent);\n      }\n    }\n  }\n  .hover\\:bg-amber-400 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-amber-400);\n      }\n    }\n  }\n  .hover\\:bg-bg-secondary {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-bg-secondary);\n      }\n    }\n  }\n  .hover\\:bg-blue-50 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-blue-50);\n      }\n    }\n  }\n  .hover\\:bg-blue-200 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-blue-200);\n      }\n    }\n  }\n  .hover\\:bg-blue-300 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-blue-300);\n      }\n    }\n  }\n  .hover\\:bg-blue-300\\/40 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, oklch(80.9% 0.105 251.813) 40%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-blue-300) 40%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-blue-500 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-blue-500);\n      }\n    }\n  }\n  .hover\\:bg-blue-500\\/30 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 30%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-blue-500) 30%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-blue-600 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-blue-600);\n      }\n    }\n  }\n  .hover\\:bg-blue-700 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-blue-700);\n      }\n    }\n  }\n  .hover\\:bg-cl1-blue-6 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-cl1-blue-6);\n      }\n    }\n  }\n  .hover\\:bg-cl1-gray-7 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-cl1-gray-7);\n      }\n    }\n  }\n  .hover\\:bg-cl1-gray-8 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-cl1-gray-8);\n      }\n    }\n  }\n  .hover\\:bg-cl1-gray-9 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-cl1-gray-9);\n      }\n    }\n  }\n  .hover\\:bg-cl1-red-6\\/40 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-cl1-red-6);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-cl1-red-6) 40%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-gray-50 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-gray-50);\n      }\n    }\n  }\n  .hover\\:bg-gray-100 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-gray-100);\n      }\n    }\n  }\n  .hover\\:bg-gray-200 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-gray-200);\n      }\n    }\n  }\n  .hover\\:bg-gray-700\\/50 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, oklch(37.3% 0.034 259.733) 50%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-gray-700) 50%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-green-100 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-green-100);\n      }\n    }\n  }\n  .hover\\:bg-kumo-brand-hover {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-kumo-brand-hover);\n      }\n    }\n  }\n  .hover\\:bg-kumo-contrast\\/10 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, light-dark(\n    var(--color-neutral-900, oklch(20.5% 0 0)),\n    var(--color-neutral-100, oklch(97% 0 0))\n  ) 10%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-kumo-contrast) 10%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-kumo-danger\\/70 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, light-dark(\n    var(--color-red-500, oklch(63.7% 0.237 25.331)),\n    var(--color-red-700, oklch(50.5% 0.213 27.518))\n  ) 70%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-kumo-danger) 70%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-kumo-danger\\/90 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, light-dark(\n    var(--color-red-500, oklch(63.7% 0.237 25.331)),\n    var(--color-red-700, oklch(50.5% 0.213 27.518))\n  ) 90%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-kumo-danger) 90%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-kumo-fill {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-kumo-fill);\n      }\n    }\n  }\n  .hover\\:bg-kumo-fill-hover {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-kumo-fill-hover);\n      }\n    }\n  }\n  .hover\\:bg-kumo-interact {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-kumo-interact);\n      }\n    }\n  }\n  .hover\\:bg-kumo-tint {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-kumo-tint);\n      }\n    }\n  }\n  .hover\\:bg-muted {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-muted);\n      }\n    }\n  }\n  .hover\\:bg-muted\\/40 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, light-dark(\n    var(--color-neutral-100, oklch(97% 0.001 106.424)),\n    var(--color-neutral-500, oklch(55.3% 0.013 58.071))\n  ) 40%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-muted) 40%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-neutral-50 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-neutral-50);\n      }\n    }\n  }\n  .hover\\:bg-neutral-100 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-neutral-100);\n      }\n    }\n  }\n  .hover\\:bg-neutral-150 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-neutral-150);\n      }\n    }\n  }\n  .hover\\:bg-neutral-200 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-neutral-200);\n      }\n    }\n  }\n  .hover\\:bg-neutral-200\\/50 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, oklch(92.2% 0 0) 50%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-neutral-200) 50%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-neutral-300 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-neutral-300);\n      }\n    }\n  }\n  .hover\\:bg-neutral-700 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-neutral-700);\n      }\n    }\n  }\n  .hover\\:bg-neutral-900\\/90 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, oklch(20.5% 0 0) 90%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-neutral-900) 90%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-orange-100 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-orange-100);\n      }\n    }\n  }\n  .hover\\:bg-orange-700 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-orange-700);\n      }\n    }\n  }\n  .hover\\:bg-primary {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-primary);\n      }\n    }\n  }\n  .hover\\:bg-primary\\/5 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  ) 5%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-primary) 5%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-primary\\/30 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  ) 30%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-primary) 30%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-primary\\/70 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: color-mix(in srgb, light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  ) 70%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-primary) 70%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:bg-red-50 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-red-50);\n      }\n    }\n  }\n  .hover\\:bg-red-200 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-red-200);\n      }\n    }\n  }\n  .hover\\:bg-red-700 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-red-700);\n      }\n    }\n  }\n  .hover\\:bg-surface-secondary {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-surface-secondary);\n      }\n    }\n  }\n  .hover\\:bg-transparent {\n    &:hover {\n      @media (hover: hover) {\n        background-color: transparent;\n      }\n    }\n  }\n  .hover\\:bg-white {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-white);\n      }\n    }\n  }\n  .hover\\:bg-yellow-200 {\n    &:hover {\n      @media (hover: hover) {\n        background-color: var(--color-yellow-200);\n      }\n    }\n  }\n  .hover\\:\\!text-inherit {\n    &:hover {\n      @media (hover: hover) {\n        color: inherit !important;\n      }\n    }\n  }\n  .hover\\:\\!text-neutral-700 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-neutral-700) !important;\n      }\n    }\n  }\n  .hover\\:\\!text-surface {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--text-color-surface) !important;\n      }\n    }\n  }\n  .hover\\:\\!text-white {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-white) !important;\n      }\n    }\n  }\n  .hover\\:text-amber-300 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-amber-300);\n      }\n    }\n  }\n  .hover\\:text-black {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-black);\n      }\n    }\n  }\n  .hover\\:text-blue-600 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-blue-600);\n      }\n    }\n  }\n  .hover\\:text-blue-700 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-blue-700);\n      }\n    }\n  }\n  .hover\\:text-blue-800 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-blue-800);\n      }\n    }\n  }\n  .hover\\:text-cl1-gray-2 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-cl1-gray-2);\n      }\n    }\n  }\n  .hover\\:text-current {\n    &:hover {\n      @media (hover: hover) {\n        color: currentcolor;\n      }\n    }\n  }\n  .hover\\:text-error {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--text-color-error);\n      }\n    }\n  }\n  .hover\\:text-gray-600 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-gray-600);\n      }\n    }\n  }\n  .hover\\:text-kumo-default {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--text-color-kumo-default);\n      }\n    }\n  }\n  .hover\\:text-kumo-strong {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--text-color-kumo-strong);\n      }\n    }\n  }\n  .hover\\:text-kumo-subtle {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--text-color-kumo-subtle);\n      }\n    }\n  }\n  .hover\\:text-muted {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--text-color-muted);\n      }\n    }\n  }\n  .hover\\:text-neutral-500 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-neutral-500);\n      }\n    }\n  }\n  .hover\\:text-neutral-600 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-neutral-600);\n      }\n    }\n  }\n  .hover\\:text-neutral-700 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-neutral-700);\n      }\n    }\n  }\n  .hover\\:text-neutral-800 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-neutral-800);\n      }\n    }\n  }\n  .hover\\:text-neutral-900 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-neutral-900);\n      }\n    }\n  }\n  .hover\\:text-neutral-950 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-neutral-950);\n      }\n    }\n  }\n  .hover\\:text-orange-600 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-orange-600);\n      }\n    }\n  }\n  .hover\\:text-primary\\/70 {\n    &:hover {\n      @media (hover: hover) {\n        color: color-mix(in srgb, #fff 70%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          color: color-mix(in oklab, var(--text-color-primary) 70%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:text-red-500 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-red-500);\n      }\n    }\n  }\n  .hover\\:text-red-600 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-red-600);\n      }\n    }\n  }\n  .hover\\:text-red-700 {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-red-700);\n      }\n    }\n  }\n  .hover\\:text-surface {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--text-color-surface);\n      }\n    }\n  }\n  .hover\\:text-white\\! {\n    &:hover {\n      @media (hover: hover) {\n        color: var(--color-white) !important;\n      }\n    }\n  }\n  .hover\\:\\!underline {\n    &:hover {\n      @media (hover: hover) {\n        text-decoration-line: underline !important;\n      }\n    }\n  }\n  .hover\\:no-underline {\n    &:hover {\n      @media (hover: hover) {\n        text-decoration-line: none;\n      }\n    }\n  }\n  .hover\\:underline {\n    &:hover {\n      @media (hover: hover) {\n        text-decoration-line: underline;\n      }\n    }\n  }\n  .hover\\:underline\\! {\n    &:hover {\n      @media (hover: hover) {\n        text-decoration-line: underline !important;\n      }\n    }\n  }\n  .hover\\:opacity-50 {\n    &:hover {\n      @media (hover: hover) {\n        opacity: 50%;\n      }\n    }\n  }\n  .hover\\:opacity-60 {\n    &:hover {\n      @media (hover: hover) {\n        opacity: 60%;\n      }\n    }\n  }\n  .hover\\:opacity-70 {\n    &:hover {\n      @media (hover: hover) {\n        opacity: 70%;\n      }\n    }\n  }\n  .hover\\:opacity-90 {\n    &:hover {\n      @media (hover: hover) {\n        opacity: 90%;\n      }\n    }\n  }\n  .hover\\:opacity-100 {\n    &:hover {\n      @media (hover: hover) {\n        opacity: 100%;\n      }\n    }\n  }\n  .hover\\:shadow-lg {\n    &:hover {\n      @media (hover: hover) {\n        --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n      }\n    }\n  }\n  .hover\\:shadow-md {\n    &:hover {\n      @media (hover: hover) {\n        --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n      }\n    }\n  }\n  .hover\\:shadow-sm {\n    &:hover {\n      @media (hover: hover) {\n        --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n      }\n    }\n  }\n  .hover\\:shadow-xs {\n    &:hover {\n      @media (hover: hover) {\n        --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));\n        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n      }\n    }\n  }\n  .hover\\:ring {\n    &:hover {\n      @media (hover: hover) {\n        --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n      }\n    }\n  }\n  .hover\\:ring-1 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n      }\n    }\n  }\n  .hover\\:shadow-black\\/10 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-shadow-color: color-mix(in srgb, #000 10%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-black) 10%, transparent) var(--tw-shadow-alpha), transparent);\n        }\n      }\n    }\n  }\n  .hover\\:shadow-blue-500\\/20 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-shadow-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 20%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-blue-500) 20%, transparent) var(--tw-shadow-alpha), transparent);\n        }\n      }\n    }\n  }\n  .hover\\:ring-\\[\\#4794FF\\]\\/30 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-ring-color: color-mix(in oklab, #4794FF 30%, transparent);\n      }\n    }\n  }\n  .hover\\:ring-\\[\\#F42500\\]\\/30 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-ring-color: color-mix(in oklab, #F42500 30%, transparent);\n      }\n    }\n  }\n  .hover\\:ring-blue-500 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-ring-color: var(--color-blue-500);\n      }\n    }\n  }\n  .hover\\:ring-kumo-ring {\n    &:hover {\n      @media (hover: hover) {\n        --tw-ring-color: var(--color-kumo-ring);\n      }\n    }\n  }\n  .hover\\:ring-neutral-200 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-ring-color: var(--color-neutral-200);\n      }\n    }\n  }\n  .hover\\:ring-primary\\/70 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-ring-color: color-mix(in srgb, light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  ) 70%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          --tw-ring-color: color-mix(in oklab, var(--color-primary) 70%, transparent);\n        }\n      }\n    }\n  }\n  .hover\\:brightness-120 {\n    &:hover {\n      @media (hover: hover) {\n        --tw-brightness: brightness(120%);\n        filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n      }\n    }\n  }\n  .not-disabled\\:hover\\:border-secondary\\! {\n    &:not(*:disabled) {\n      &:hover {\n        @media (hover: hover) {\n          border-color: var(--color-secondary) !important;\n        }\n      }\n    }\n  }\n  .not-disabled\\:hover\\:bg-kumo-control {\n    &:not(*:disabled) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-kumo-control);\n        }\n      }\n    }\n  }\n  .hover\\:not-\\[\\:has\\(a\\:hover\\)\\]\\:bg-neutral-50 {\n    &:hover {\n      @media (hover: hover) {\n        &:not(*:is(:has(a:hover))) {\n          background-color: var(--color-neutral-50);\n        }\n      }\n    }\n  }\n  .hover\\:not-\\[\\:has\\(a\\:hover\\)\\]\\:bg-neutral-100 {\n    &:hover {\n      @media (hover: hover) {\n        &:not(*:is(:has(a:hover))) {\n          background-color: var(--color-neutral-100);\n        }\n      }\n    }\n  }\n  .hover\\:after\\:border-neutral-950\\/15 {\n    &:hover {\n      @media (hover: hover) {\n        &::after {\n          content: var(--tw-content);\n          border-color: color-mix(in srgb, oklch(14.5% 0 0) 15%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            border-color: color-mix(in oklab, var(--color-neutral-950) 15%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .focus\\:pointer-events-auto {\n    &:focus {\n      pointer-events: auto;\n    }\n  }\n  .focus\\:z-10 {\n    &:focus {\n      z-index: 10;\n    }\n  }\n  .focus\\:border-active {\n    &:focus {\n      border-color: var(--color-active);\n    }\n  }\n  .focus\\:border-kumo-fill {\n    &:focus {\n      border-color: var(--color-kumo-fill);\n    }\n  }\n  .focus\\:bg-accent {\n    &:focus {\n      background-color: var(--color-accent);\n    }\n  }\n  .focus\\:bg-color-3 {\n    &:focus {\n      background-color: var(--color-color-3);\n    }\n  }\n  .focus\\:bg-kumo-brand-hover {\n    &:focus {\n      background-color: var(--color-kumo-brand-hover);\n    }\n  }\n  .focus\\:bg-kumo-tint {\n    &:focus {\n      background-color: var(--color-kumo-tint);\n    }\n  }\n  .focus\\:text-blue-600 {\n    &:focus {\n      color: var(--color-blue-600);\n    }\n  }\n  .focus\\:text-kumo-default {\n    &:focus {\n      color: var(--text-color-kumo-default);\n    }\n  }\n  .focus\\:text-neutral-700 {\n    &:focus {\n      color: var(--color-neutral-700);\n    }\n  }\n  .focus\\:text-surface {\n    &:focus {\n      color: var(--text-color-surface);\n    }\n  }\n  .focus\\:opacity-100 {\n    &:focus {\n      opacity: 100%;\n    }\n  }\n  .focus\\:ring-1 {\n    &:focus {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus\\:ring-2 {\n    &:focus {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus\\:ring-\\[\\#4794FF\\]\\/50 {\n    &:focus {\n      --tw-ring-color: color-mix(in oklab, #4794FF 50%, transparent);\n    }\n  }\n  .focus\\:ring-\\[\\#F42500\\]\\/50 {\n    &:focus {\n      --tw-ring-color: color-mix(in oklab, #F42500 50%, transparent);\n    }\n  }\n  .focus\\:ring-active {\n    &:focus {\n      --tw-ring-color: var(--color-active);\n    }\n  }\n  .focus\\:ring-amber-500 {\n    &:focus {\n      --tw-ring-color: var(--color-amber-500);\n    }\n  }\n  .focus\\:ring-blue-400 {\n    &:focus {\n      --tw-ring-color: var(--color-blue-400);\n    }\n  }\n  .focus\\:ring-blue-500 {\n    &:focus {\n      --tw-ring-color: var(--color-blue-500);\n    }\n  }\n  .focus\\:ring-kumo-danger {\n    &:focus {\n      --tw-ring-color: var(--color-kumo-danger);\n    }\n  }\n  .focus\\:ring-kumo-ring {\n    &:focus {\n      --tw-ring-color: var(--color-kumo-ring);\n    }\n  }\n  .focus\\:ring-neutral-400 {\n    &:focus {\n      --tw-ring-color: var(--color-neutral-400);\n    }\n  }\n  .focus\\:ring-offset-1 {\n    &:focus {\n      --tw-ring-offset-width: 1px;\n      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    }\n  }\n  .focus\\:outline {\n    &:focus {\n      outline-style: var(--tw-outline-style);\n      outline-width: 1px;\n    }\n  }\n  .focus\\:outline-none {\n    &:focus {\n      --tw-outline-style: none;\n      outline-style: none;\n    }\n  }\n  .focus-visible\\:z-10 {\n    &:focus-visible {\n      z-index: 10;\n    }\n  }\n  .focus-visible\\:rounded-none {\n    &:focus-visible {\n      border-radius: 0;\n    }\n  }\n  .focus-visible\\:rounded-sm {\n    &:focus-visible {\n      border-radius: var(--radius-sm);\n    }\n  }\n  .focus-visible\\:bg-accent {\n    &:focus-visible {\n      background-color: var(--color-accent);\n    }\n  }\n  .focus-visible\\:bg-cl1-blue-9 {\n    &:focus-visible {\n      background-color: var(--color-cl1-blue-9);\n    }\n  }\n  .focus-visible\\:bg-cl1-gray-8 {\n    &:focus-visible {\n      background-color: var(--color-cl1-gray-8);\n    }\n  }\n  .focus-visible\\:bg-neutral-150 {\n    &:focus-visible {\n      background-color: var(--color-neutral-150);\n    }\n  }\n  .focus-visible\\:bg-neutral-200 {\n    &:focus-visible {\n      background-color: var(--color-neutral-200);\n    }\n  }\n  .focus-visible\\:text-neutral-950 {\n    &:focus-visible {\n      color: var(--color-neutral-950);\n    }\n  }\n  .focus-visible\\:ring-1 {\n    &:focus-visible {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus-visible\\:ring-2 {\n    &:focus-visible {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .focus-visible\\:ring-active {\n    &:focus-visible {\n      --tw-ring-color: var(--color-active);\n    }\n  }\n  .focus-visible\\:ring-blue-800 {\n    &:focus-visible {\n      --tw-ring-color: var(--color-blue-800);\n    }\n  }\n  .focus-visible\\:ring-border {\n    &:focus-visible {\n      --tw-ring-color: var(--color-border);\n    }\n  }\n  .focus-visible\\:ring-kumo-ring {\n    &:focus-visible {\n      --tw-ring-color: var(--color-kumo-ring);\n    }\n  }\n  .focus-visible\\:ring-neutral-400 {\n    &:focus-visible {\n      --tw-ring-color: var(--color-neutral-400);\n    }\n  }\n  .focus-visible\\:ring-neutral-800 {\n    &:focus-visible {\n      --tw-ring-color: var(--color-neutral-800);\n    }\n  }\n  .focus-visible\\:ring-red-900\\! {\n    &:focus-visible {\n      --tw-ring-color: var(--color-red-900) !important;\n    }\n  }\n  .focus-visible\\:inset-ring-\\[0\\.5\\] {\n    &:focus-visible {\n      --tw-inset-ring-color: 0.5;\n    }\n  }\n  .focus-visible\\:ring-offset-2 {\n    &:focus-visible {\n      --tw-ring-offset-width: 2px;\n      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    }\n  }\n  .focus-visible\\:outline-hidden {\n    &:focus-visible {\n      --tw-outline-style: none;\n      outline-style: none;\n      @media (forced-colors: active) {\n        outline: 2px solid transparent;\n        outline-offset: 2px;\n      }\n    }\n  }\n  .focus-visible\\:outline {\n    &:focus-visible {\n      outline-style: var(--tw-outline-style);\n      outline-width: 1px;\n    }\n  }\n  .focus-visible\\:outline-2 {\n    &:focus-visible {\n      outline-style: var(--tw-outline-style);\n      outline-width: 2px;\n    }\n  }\n  .focus-visible\\:-outline-offset-2 {\n    &:focus-visible {\n      outline-offset: calc(2px * -1);\n    }\n  }\n  .focus-visible\\:outline-offset-1 {\n    &:focus-visible {\n      outline-offset: 1px;\n    }\n  }\n  .focus-visible\\:outline-offset-3 {\n    &:focus-visible {\n      outline-offset: 3px;\n    }\n  }\n  .focus-visible\\:outline-offset-\\[-2px\\] {\n    &:focus-visible {\n      outline-offset: -2px;\n    }\n  }\n  .focus-visible\\:outline-\\[var\\(--cf-focus-color\\)\\] {\n    &:focus-visible {\n      outline-color: var(--cf-focus-color);\n    }\n  }\n  .focus-visible\\:outline-cl1-blue-5 {\n    &:focus-visible {\n      outline-color: var(--color-cl1-blue-5);\n    }\n  }\n  .focus-visible\\:outline-kumo-ring {\n    &:focus-visible {\n      outline-color: var(--color-kumo-ring);\n    }\n  }\n  .focus-visible\\:outline-primary {\n    &:focus-visible {\n      outline-color: var(--color-primary);\n    }\n  }\n  .focus-visible\\:outline-none {\n    &:focus-visible {\n      --tw-outline-style: none;\n      outline-style: none;\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:focus-visible\\:bg-neutral-200 {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      &:focus-visible {\n        background-color: var(--color-neutral-200);\n      }\n    }\n  }\n  .focus-visible\\:after\\:ring-neutral-400 {\n    &:focus-visible {\n      &::after {\n        content: var(--tw-content);\n        --tw-ring-color: var(--color-neutral-400);\n      }\n    }\n  }\n  .active\\:cursor-grabbing {\n    &:active {\n      cursor: grabbing;\n    }\n  }\n  .active\\:text-blue-600 {\n    &:active {\n      color: var(--color-blue-600);\n    }\n  }\n  .active\\:text-neutral-950 {\n    &:active {\n      color: var(--color-neutral-950);\n    }\n  }\n  .disabled\\:cursor-default {\n    &:disabled {\n      cursor: default;\n    }\n  }\n  .disabled\\:cursor-not-allowed {\n    &:disabled {\n      cursor: not-allowed;\n    }\n  }\n  .disabled\\:border-neutral-400 {\n    &:disabled {\n      border-color: var(--color-neutral-400);\n    }\n  }\n  .disabled\\:\\!bg-neutral-200 {\n    &:disabled {\n      background-color: var(--color-neutral-200) !important;\n    }\n  }\n  .disabled\\:bg-cl1-gray-8 {\n    &:disabled {\n      background-color: var(--color-cl1-gray-8);\n    }\n  }\n  .disabled\\:bg-kumo-brand\\/50 {\n    &:disabled {\n      background-color: color-mix(in srgb, light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  ) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-kumo-brand) 50%, transparent);\n      }\n    }\n  }\n  .disabled\\:bg-kumo-control\\/50 {\n    &:disabled {\n      background-color: color-mix(in srgb, light-dark(\n    var(--color-white, #fff),\n    var(--color-neutral-900, oklch(21% 0.006 285.885))\n  ) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-kumo-control) 50%, transparent);\n      }\n    }\n  }\n  .disabled\\:bg-kumo-overlay {\n    &:disabled {\n      background-color: var(--color-kumo-overlay);\n    }\n  }\n  .disabled\\:bg-muted {\n    &:disabled {\n      background-color: var(--color-muted);\n    }\n  }\n  .disabled\\:bg-neutral-100 {\n    &:disabled {\n      background-color: var(--color-neutral-100);\n    }\n  }\n  .disabled\\:bg-primary\\/50 {\n    &:disabled {\n      background-color: color-mix(in srgb, light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  ) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-primary) 50%, transparent);\n      }\n    }\n  }\n  .disabled\\:bg-secondary\\/50 {\n    &:disabled {\n      background-color: color-mix(in srgb, light-dark(\n    var(--color-white, #fff),\n    var(--color-neutral-900, oklch(21% 0.006 285.885))\n  ) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-secondary) 50%, transparent);\n      }\n    }\n  }\n  .disabled\\:bg-surface-secondary {\n    &:disabled {\n      background-color: var(--color-surface-secondary);\n    }\n  }\n  .disabled\\:\\!text-kumo-danger\\/70 {\n    &:disabled {\n      color: color-mix(in srgb, light-dark(\n    var(--color-red-500, oklch(63.7% 0.237 25.331)),\n    var(--color-red-400, oklch(70.4% 0.191 22.216))\n  ) 70%, transparent) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--text-color-kumo-danger) 70%, transparent) !important;\n      }\n    }\n  }\n  .disabled\\:\\!text-kumo-default\\/70 {\n    &:disabled {\n      color: color-mix(in srgb, light-dark(\n    var(--color-neutral-900, oklch(21% 0.006 285.885)),\n    var(--color-neutral-100, oklch(97% 0 0))\n  ) 70%, transparent) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--text-color-kumo-default) 70%, transparent) !important;\n      }\n    }\n  }\n  .disabled\\:\\!text-neutral-400 {\n    &:disabled {\n      color: var(--color-neutral-400) !important;\n    }\n  }\n  .disabled\\:\\!text-primary\\/70 {\n    &:disabled {\n      color: color-mix(in srgb, #fff 70%, transparent) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--text-color-primary) 70%, transparent) !important;\n      }\n    }\n  }\n  .disabled\\:\\!text-surface\\/70 {\n    &:disabled {\n      color: color-mix(in srgb, light-dark(\n    var(--color-neutral-900, oklch(21% 0.006 285.885)),\n    var(--color-neutral-100, oklch(97% 0 0))\n  ) 70%, transparent) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--text-color-surface) 70%, transparent) !important;\n      }\n    }\n  }\n  .disabled\\:text-cl1-gray-1 {\n    &:disabled {\n      color: var(--color-cl1-gray-1);\n    }\n  }\n  .disabled\\:text-kumo-inactive\\! {\n    &:disabled {\n      color: var(--text-color-kumo-inactive) !important;\n    }\n  }\n  .disabled\\:text-kumo-subtle {\n    &:disabled {\n      color: var(--text-color-kumo-subtle);\n    }\n  }\n  .disabled\\:text-muted {\n    &:disabled {\n      color: var(--text-color-muted);\n    }\n  }\n  .disabled\\:text-surface\\! {\n    &:disabled {\n      color: var(--text-color-surface) !important;\n    }\n  }\n  .disabled\\:opacity-50 {\n    &:disabled {\n      opacity: 50%;\n    }\n  }\n  .disabled\\:opacity-100 {\n    &:disabled {\n      opacity: 100%;\n    }\n  }\n  .disabled\\:ring-primary\\/50 {\n    &:disabled {\n      --tw-ring-color: color-mix(in srgb, light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  ) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-primary) 50%, transparent);\n      }\n    }\n  }\n  .disabled\\:hover\\:bg-neutral-100 {\n    &:disabled {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-100);\n        }\n      }\n    }\n  }\n  .disabled\\:hover\\:bg-transparent {\n    &:disabled {\n      &:hover {\n        @media (hover: hover) {\n          background-color: transparent;\n        }\n      }\n    }\n  }\n  .\\*\\:in-focus\\:opacity-100 {\n    :is(& > *) {\n      :where(*:focus) & {\n        opacity: 100%;\n      }\n    }\n  }\n  .has-\\[\\.overlay-cta\\:focus-visible\\]\\:pointer-events-auto {\n    &:has(*:is(.overlay-cta:focus-visible)) {\n      pointer-events: auto;\n    }\n  }\n  .has-\\[\\.overlay-cta\\:focus-visible\\]\\:opacity-100 {\n    &:has(*:is(.overlay-cta:focus-visible)) {\n      opacity: 100%;\n    }\n  }\n  .has-\\[\\[role\\=switch\\]\\]\\:flex {\n    &:has(*:is([role=switch])) {\n      display: flex;\n    }\n  }\n  .has-\\[\\[role\\=switch\\]\\]\\:grid-cols-\\[auto_1fr\\] {\n    &:has(*:is([role=switch])) {\n      grid-template-columns: auto 1fr;\n    }\n  }\n  .has-\\[\\[role\\=switch\\]\\]\\:flex-row-reverse {\n    &:has(*:is([role=switch])) {\n      flex-direction: row-reverse;\n    }\n  }\n  .has-\\[\\[role\\=switch\\]\\]\\:flex-wrap {\n    &:has(*:is([role=switch])) {\n      flex-wrap: wrap;\n    }\n  }\n  .has-\\[\\[role\\=switch\\]\\]\\:items-center {\n    &:has(*:is([role=switch])) {\n      align-items: center;\n    }\n  }\n  .has-\\[input\\[type\\=checkbox\\]\\]\\:flex {\n    &:has(*:is(input[type=checkbox])) {\n      display: flex;\n    }\n  }\n  .has-\\[input\\[type\\=checkbox\\]\\]\\:grid-cols-\\[auto_1fr\\] {\n    &:has(*:is(input[type=checkbox])) {\n      grid-template-columns: auto 1fr;\n    }\n  }\n  .has-\\[input\\[type\\=checkbox\\]\\]\\:flex-row-reverse {\n    &:has(*:is(input[type=checkbox])) {\n      flex-direction: row-reverse;\n    }\n  }\n  .has-\\[input\\[type\\=checkbox\\]\\]\\:flex-wrap {\n    &:has(*:is(input[type=checkbox])) {\n      flex-wrap: wrap;\n    }\n  }\n  .has-\\[input\\[type\\=checkbox\\]\\]\\:items-center {\n    &:has(*:is(input[type=checkbox])) {\n      align-items: center;\n    }\n  }\n  .has-\\[\\>header\\>a\\:focus\\]\\:bg-neutral-100 {\n    &:has(>header>a:focus) {\n      background-color: var(--color-neutral-100);\n    }\n  }\n  .has-\\[\\>header\\>a\\:focus\\]\\:outline-2 {\n    &:has(>header>a:focus) {\n      outline-style: var(--tw-outline-style);\n      outline-width: 2px;\n    }\n  }\n  .has-\\[\\>header\\>a\\:hover\\]\\:bg-neutral-100 {\n    &:has(>header>a:hover) {\n      background-color: var(--color-neutral-100);\n    }\n  }\n  .aria-selected\\:font-medium {\n    &[aria-selected="true"] {\n      --tw-font-weight: var(--font-weight-medium);\n      font-weight: var(--font-weight-medium);\n    }\n  }\n  .aria-selected\\:text-kumo-default {\n    &[aria-selected="true"] {\n      color: var(--text-color-kumo-default);\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:font-medium {\n    &[aria-current="true"] {\n      --tw-font-weight: var(--font-weight-medium);\n      font-weight: var(--font-weight-medium);\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:text-inherit {\n    &[aria-current="true"] {\n      color: inherit;\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:absolute {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        position: absolute;\n      }\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:top-\\[calc\\(50\\%-8px\\)\\] {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        top: calc(50% - 8px);\n      }\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:right-full {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        right: 100%;\n      }\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:h-4 {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        height: calc(var(--spacing) * 4);\n      }\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:w-\\[3px\\] {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        width: 3px;\n      }\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:rounded-full {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        border-radius: calc(infinity * 1px);\n      }\n    }\n  }\n  .aria-\\[current\\=\\"true\\"\\]\\:before\\:bg-current {\n    &[aria-current="true"] {\n      &::before {\n        content: var(--tw-content);\n        background-color: currentcolor;\n      }\n    }\n  }\n  .data-checked\\:bg-kumo-contrast {\n    &[data-checked] {\n      background-color: var(--color-kumo-contrast);\n    }\n  }\n  .data-disabled\\:pointer-events-none {\n    &[data-disabled] {\n      pointer-events: none;\n    }\n  }\n  .data-disabled\\:opacity-50 {\n    &[data-disabled] {\n      opacity: 50%;\n    }\n  }\n  .data-ending-style\\:scale-90 {\n    &[data-ending-style] {\n      --tw-scale-x: 90%;\n      --tw-scale-y: 90%;\n      --tw-scale-z: 90%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .data-ending-style\\:opacity-0 {\n    &[data-ending-style] {\n      opacity: 0%;\n    }\n  }\n  .data-highlighted\\:bg-kumo-danger\\/5 {\n    &[data-highlighted] {\n      background-color: color-mix(in srgb, light-dark(\n    var(--color-red-500, oklch(63.7% 0.237 25.331)),\n    var(--color-red-700, oklch(50.5% 0.213 27.518))\n  ) 5%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-kumo-danger) 5%, transparent);\n      }\n    }\n  }\n  .data-highlighted\\:bg-kumo-overlay {\n    &[data-highlighted] {\n      background-color: var(--color-kumo-overlay);\n    }\n  }\n  .data-highlighted\\:bg-kumo-tint {\n    &[data-highlighted] {\n      background-color: var(--color-kumo-tint);\n    }\n  }\n  .data-highlighted\\:text-kumo-danger {\n    &[data-highlighted] {\n      color: var(--text-color-kumo-danger);\n    }\n  }\n  .data-instant\\:duration-0 {\n    &[data-instant] {\n      --tw-duration: 0ms;\n      transition-duration: 0ms;\n    }\n  }\n  .data-starting-style\\:scale-90 {\n    &[data-starting-style] {\n      --tw-scale-x: 90%;\n      --tw-scale-y: 90%;\n      --tw-scale-z: 90%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .data-starting-style\\:opacity-0 {\n    &[data-starting-style] {\n      opacity: 0%;\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:data-\\[active\\=true\\]\\:bg-neutral-150 {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      &[data-active="true"] {\n        background-color: var(--color-neutral-150);\n      }\n    }\n  }\n  .group-data-\\[state\\=collapsed\\]\\/sidebar\\:data-\\[active\\=true\\]\\:text-neutral-950 {\n    &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n      &[data-active="true"] {\n        color: var(--color-neutral-950);\n      }\n    }\n  }\n  .data-\\[behind\\]\\:pointer-events-none {\n    &[data-behind] {\n      pointer-events: none;\n    }\n  }\n  .data-\\[behind\\]\\:opacity-0 {\n    &[data-behind] {\n      opacity: 0%;\n    }\n  }\n  .data-\\[checked\\]\\:bg-kumo-contrast {\n    &[data-checked] {\n      background-color: var(--color-kumo-contrast);\n    }\n  }\n  .data-\\[clickable\\]\\:\\!no-underline {\n    &[data-clickable] {\n      text-decoration-line: none !important;\n    }\n  }\n  .data-\\[clickable\\]\\:hover\\:ring {\n    &[data-clickable] {\n      &:hover {\n        @media (hover: hover) {\n          --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n          box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n        }\n      }\n    }\n  }\n  .data-\\[empty\\]\\:p-0 {\n    &[data-empty] {\n      padding: calc(var(--spacing) * 0);\n    }\n  }\n  .data-\\[ending-style\\]\\:translate-x-full {\n    &[data-ending-style] {\n      --tw-translate-x: 100%;\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .data-\\[ending-style\\]\\:scale-90 {\n    &[data-ending-style] {\n      --tw-scale-x: 90%;\n      --tw-scale-y: 90%;\n      --tw-scale-z: 90%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .data-\\[ending-style\\]\\:opacity-0 {\n    &[data-ending-style] {\n      opacity: 0%;\n    }\n  }\n  .data-\\[expanded\\]\\:pointer-events-auto {\n    &[data-expanded] {\n      pointer-events: auto;\n    }\n  }\n  .data-\\[expanded\\]\\:h-\\[var\\(--toast-height\\)\\] {\n    &[data-expanded] {\n      height: var(--toast-height);\n    }\n  }\n  .data-\\[expanded\\]\\:\\[transform\\:translateX\\(var\\(--toast-swipe-movement-x\\)\\)_translateY\\(calc\\(var\\(--offset-y\\)\\)\\)\\] {\n    &[data-expanded] {\n      transform: translateX(var(--toast-swipe-movement-x)) translateY(calc(var(--offset-y)));\n    }\n  }\n  .data-\\[expanded\\]\\:opacity-100 {\n    &[data-expanded] {\n      opacity: 100%;\n    }\n  }\n  .data-\\[highlighted\\]\\:bg-accent {\n    &[data-highlighted] {\n      background-color: var(--color-accent);\n    }\n  }\n  .data-\\[highlighted\\]\\:bg-cl1-gray-8 {\n    &[data-highlighted] {\n      background-color: var(--color-cl1-gray-8);\n    }\n  }\n  .data-\\[highlighted\\]\\:bg-kumo-overlay {\n    &[data-highlighted] {\n      background-color: var(--color-kumo-overlay);\n    }\n  }\n  .data-\\[highlighted\\]\\:bg-red-100 {\n    &[data-highlighted] {\n      background-color: var(--color-red-100);\n    }\n  }\n  .data-\\[highlighted\\]\\:text-error {\n    &[data-highlighted] {\n      color: var(--text-color-error);\n    }\n  }\n  .data-\\[indeterminate\\]\\:bg-kumo-contrast {\n    &[data-indeterminate] {\n      background-color: var(--color-kumo-contrast);\n    }\n  }\n  .data-\\[instant\\]\\:duration-0 {\n    &[data-instant] {\n      --tw-duration: 0ms;\n      transition-duration: 0ms;\n    }\n  }\n  .data-\\[limited\\]\\:opacity-0 {\n    &[data-limited] {\n      opacity: 0%;\n    }\n  }\n  .data-\\[popup-open\\]\\:pointer-events-auto {\n    &[data-popup-open] {\n      pointer-events: auto;\n    }\n  }\n  .data-\\[popup-open\\]\\:bg-accent {\n    &[data-popup-open] {\n      background-color: var(--color-accent);\n    }\n  }\n  .data-\\[popup-open\\]\\:opacity-100 {\n    &[data-popup-open] {\n      opacity: 100%;\n    }\n  }\n  .data-\\[pressed\\]\\:bg-primary {\n    &[data-pressed] {\n      background-color: var(--color-primary);\n    }\n  }\n  .data-\\[pressed\\]\\:\\!text-primary {\n    &[data-pressed] {\n      color: var(--text-color-primary) !important;\n    }\n  }\n  .data-\\[pressed\\]\\:hover\\:bg-primary\\/70 {\n    &[data-pressed] {\n      &:hover {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, light-dark(\n    oklch(0.5772 0.2324 260),\n    oklch(0.5772 0.2324 260)\n  ) 70%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-primary) 70%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .data-\\[rendered\\=false\\]\\:scale-90 {\n    &[data-rendered="false"] {\n      --tw-scale-x: 90%;\n      --tw-scale-y: 90%;\n      --tw-scale-z: 90%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .data-\\[rendered\\=false\\]\\:opacity-0 {\n    &[data-rendered="false"] {\n      opacity: 0%;\n    }\n  }\n  .data-\\[resizing\\=true\\]\\:animate-none {\n    &[data-resizing="true"] {\n      animation: none;\n    }\n  }\n  .data-\\[resizing\\=true\\]\\:transition-none {\n    &[data-resizing="true"] {\n      transition-property: none;\n    }\n  }\n  .data-\\[resizing\\=true\\]\\:duration-0 {\n    &[data-resizing="true"] {\n      --tw-duration: 0ms;\n      transition-duration: 0ms;\n    }\n  }\n  .data-\\[side\\=bottom\\]\\:-top-2 {\n    &[data-side="bottom"] {\n      top: calc(var(--spacing) * -2);\n    }\n  }\n  .data-\\[side\\=bottom\\]\\:top-\\[-8px\\] {\n    &[data-side="bottom"] {\n      top: -8px;\n    }\n  }\n  .data-\\[side\\=bottom\\]\\:top-\\[-11px\\] {\n    &[data-side="bottom"] {\n      top: -11px;\n    }\n  }\n  .data-\\[side\\=bottom\\]\\:top-\\[-15px\\] {\n    &[data-side="bottom"] {\n      top: -15px;\n    }\n  }\n  .data-\\[side\\=left\\]\\:right-\\[-11px\\] {\n    &[data-side="left"] {\n      right: -11px;\n    }\n  }\n  .data-\\[side\\=left\\]\\:right-\\[-13px\\] {\n    &[data-side="left"] {\n      right: -13px;\n    }\n  }\n  .data-\\[side\\=left\\]\\:rotate-90 {\n    &[data-side="left"] {\n      rotate: 90deg;\n    }\n  }\n  .data-\\[side\\=right\\]\\:left-\\[-11px\\] {\n    &[data-side="right"] {\n      left: -11px;\n    }\n  }\n  .data-\\[side\\=right\\]\\:left-\\[-13px\\] {\n    &[data-side="right"] {\n      left: -13px;\n    }\n  }\n  .data-\\[side\\=right\\]\\:-rotate-90 {\n    &[data-side="right"] {\n      rotate: calc(90deg * -1);\n    }\n  }\n  .data-\\[side\\=top\\]\\:-bottom-2 {\n    &[data-side="top"] {\n      bottom: calc(var(--spacing) * -2);\n    }\n  }\n  .data-\\[side\\=top\\]\\:bottom-\\[-8px\\] {\n    &[data-side="top"] {\n      bottom: -8px;\n    }\n  }\n  .data-\\[side\\=top\\]\\:bottom-\\[-11px\\] {\n    &[data-side="top"] {\n      bottom: -11px;\n    }\n  }\n  .data-\\[side\\=top\\]\\:rotate-180 {\n    &[data-side="top"] {\n      rotate: 180deg;\n    }\n  }\n  .data-\\[starting-style\\]\\:translate-x-full {\n    &[data-starting-style] {\n      --tw-translate-x: 100%;\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .data-\\[starting-style\\]\\:scale-90 {\n    &[data-starting-style] {\n      --tw-scale-x: 90%;\n      --tw-scale-y: 90%;\n      --tw-scale-z: 90%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .data-\\[starting-style\\]\\:\\[transform\\:translateY\\(150\\%\\)\\] {\n    &[data-starting-style] {\n      transform: translateY(150%);\n    }\n  }\n  .data-\\[starting-style\\]\\:opacity-0 {\n    &[data-starting-style] {\n      opacity: 0%;\n    }\n  }\n  .data-\\[state\\=\\"open\\"\\]\\:bg-accent {\n    &[data-state="open"] {\n      background-color: var(--color-accent);\n    }\n  }\n  .data-\\[state\\=open\\]\\:bg-accent {\n    &[data-state="open"] {\n      background-color: var(--color-accent);\n    }\n  }\n  .data-\\[state\\=open\\]\\:bg-kumo-control {\n    &[data-state="open"] {\n      background-color: var(--color-kumo-control);\n    }\n  }\n  .data-\\[state\\=open\\]\\:bg-kumo-tint {\n    &[data-state="open"] {\n      background-color: var(--color-kumo-tint);\n    }\n  }\n  .data-\\[state\\=open\\]\\:bg-neutral-200 {\n    &[data-state="open"] {\n      background-color: var(--color-neutral-200);\n    }\n  }\n  .data-\\[ending-style\\]\\:data-\\[swipe-direction\\=down\\]\\:\\[transform\\:translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)\\+150\\%\\)\\)\\] {\n    &[data-ending-style] {\n      &[data-swipe-direction="down"] {\n        transform: translateY(calc(var(--toast-swipe-movement-y) + 150%));\n      }\n    }\n  }\n  .data-\\[expanded\\]\\:data-\\[ending-style\\]\\:data-\\[swipe-direction\\=down\\]\\:\\[transform\\:translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)\\+150\\%\\)\\)\\] {\n    &[data-expanded] {\n      &[data-ending-style] {\n        &[data-swipe-direction="down"] {\n          transform: translateY(calc(var(--toast-swipe-movement-y) + 150%));\n        }\n      }\n    }\n  }\n  .data-\\[ending-style\\]\\:data-\\[swipe-direction\\=left\\]\\:\\[transform\\:translateX\\(calc\\(var\\(--toast-swipe-movement-x\\)-150\\%\\)\\)_translateY\\(var\\(--offset-y\\)\\)\\] {\n    &[data-ending-style] {\n      &[data-swipe-direction="left"] {\n        transform: translateX(calc(var(--toast-swipe-movement-x) - 150%)) translateY(var(--offset-y));\n      }\n    }\n  }\n  .data-\\[expanded\\]\\:data-\\[ending-style\\]\\:data-\\[swipe-direction\\=left\\]\\:\\[transform\\:translateX\\(calc\\(var\\(--toast-swipe-movement-x\\)-150\\%\\)\\)_translateY\\(var\\(--offset-y\\)\\)\\] {\n    &[data-expanded] {\n      &[data-ending-style] {\n        &[data-swipe-direction="left"] {\n          transform: translateX(calc(var(--toast-swipe-movement-x) - 150%)) translateY(var(--offset-y));\n        }\n      }\n    }\n  }\n  .data-\\[ending-style\\]\\:data-\\[swipe-direction\\=right\\]\\:\\[transform\\:translateX\\(calc\\(var\\(--toast-swipe-movement-x\\)\\+150\\%\\)\\)_translateY\\(var\\(--offset-y\\)\\)\\] {\n    &[data-ending-style] {\n      &[data-swipe-direction="right"] {\n        transform: translateX(calc(var(--toast-swipe-movement-x) + 150%)) translateY(var(--offset-y));\n      }\n    }\n  }\n  .data-\\[expanded\\]\\:data-\\[ending-style\\]\\:data-\\[swipe-direction\\=right\\]\\:\\[transform\\:translateX\\(calc\\(var\\(--toast-swipe-movement-x\\)\\+150\\%\\)\\)_translateY\\(var\\(--offset-y\\)\\)\\] {\n    &[data-expanded] {\n      &[data-ending-style] {\n        &[data-swipe-direction="right"] {\n          transform: translateX(calc(var(--toast-swipe-movement-x) + 150%)) translateY(var(--offset-y));\n        }\n      }\n    }\n  }\n  .data-\\[ending-style\\]\\:data-\\[swipe-direction\\=up\\]\\:\\[transform\\:translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)-150\\%\\)\\)\\] {\n    &[data-ending-style] {\n      &[data-swipe-direction="up"] {\n        transform: translateY(calc(var(--toast-swipe-movement-y) - 150%));\n      }\n    }\n  }\n  .data-\\[expanded\\]\\:data-\\[ending-style\\]\\:data-\\[swipe-direction\\=up\\]\\:\\[transform\\:translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)-150\\%\\)\\)\\] {\n    &[data-expanded] {\n      &[data-ending-style] {\n        &[data-swipe-direction="up"] {\n          transform: translateY(calc(var(--toast-swipe-movement-y) - 150%));\n        }\n      }\n    }\n  }\n  .motion-safe\\:transition-opacity {\n    @media (prefers-reduced-motion: no-preference) {\n      transition-property: opacity;\n      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n      transition-duration: var(--tw-duration, var(--default-transition-duration));\n    }\n  }\n  .motion-safe\\:duration-200 {\n    @media (prefers-reduced-motion: no-preference) {\n      --tw-duration: 200ms;\n      transition-duration: 200ms;\n    }\n  }\n  .min-\\[755px\\]\\:block {\n    @media (width >= 755px) {\n      display: block;\n    }\n  }\n  .min-\\[755px\\]\\:hidden {\n    @media (width >= 755px) {\n      display: none;\n    }\n  }\n  .min-\\[1050px\\]\\:grid {\n    @media (width >= 1050px) {\n      display: grid;\n    }\n  }\n  .min-\\[1050px\\]\\:grid-cols-\\[1fr_180px\\] {\n    @media (width >= 1050px) {\n      grid-template-columns: 1fr 180px;\n    }\n  }\n  .min-\\[1050px\\]\\:py-10 {\n    @media (width >= 1050px) {\n      padding-block: calc(var(--spacing) * 10);\n    }\n  }\n  .sm\\:absolute {\n    @media (width >= 40rem) {\n      position: absolute;\n    }\n  }\n  .sm\\:static {\n    @media (width >= 40rem) {\n      position: static;\n    }\n  }\n  .sm\\:top-1\\/2 {\n    @media (width >= 40rem) {\n      top: calc(1/2 * 100%);\n    }\n  }\n  .sm\\:right-8 {\n    @media (width >= 40rem) {\n      right: calc(var(--spacing) * 8);\n    }\n  }\n  .sm\\:bottom-8 {\n    @media (width >= 40rem) {\n      bottom: calc(var(--spacing) * 8);\n    }\n  }\n  .sm\\:my-0 {\n    @media (width >= 40rem) {\n      margin-block: calc(var(--spacing) * 0);\n    }\n  }\n  .sm\\:mt-0 {\n    @media (width >= 40rem) {\n      margin-top: calc(var(--spacing) * 0);\n    }\n  }\n  .sm\\:mb-0 {\n    @media (width >= 40rem) {\n      margin-bottom: calc(var(--spacing) * 0);\n    }\n  }\n  .sm\\:block {\n    @media (width >= 40rem) {\n      display: block;\n    }\n  }\n  .sm\\:flex {\n    @media (width >= 40rem) {\n      display: flex;\n    }\n  }\n  .sm\\:hidden {\n    @media (width >= 40rem) {\n      display: none;\n    }\n  }\n  .sm\\:inline {\n    @media (width >= 40rem) {\n      display: inline;\n    }\n  }\n  .sm\\:h-\\[529px\\] {\n    @media (width >= 40rem) {\n      height: 529px;\n    }\n  }\n  .sm\\:max-h-\\[calc\\(100vh-128px\\)\\] {\n    @media (width >= 40rem) {\n      max-height: calc(100vh - 128px);\n    }\n  }\n  .sm\\:min-h-\\[36px\\] {\n    @media (width >= 40rem) {\n      min-height: 36px;\n    }\n  }\n  .sm\\:w-32 {\n    @media (width >= 40rem) {\n      width: calc(var(--spacing) * 32);\n    }\n  }\n  .sm\\:w-\\[340px\\] {\n    @media (width >= 40rem) {\n      width: 340px;\n    }\n  }\n  .sm\\:w-auto {\n    @media (width >= 40rem) {\n      width: auto;\n    }\n  }\n  .sm\\:max-w-\\[calc\\(100vw-3rem\\)\\] {\n    @media (width >= 40rem) {\n      max-width: calc(100vw - 3rem);\n    }\n  }\n  .sm\\:max-w-xl {\n    @media (width >= 40rem) {\n      max-width: var(--container-xl);\n    }\n  }\n  .sm\\:min-w-96 {\n    @media (width >= 40rem) {\n      min-width: calc(var(--spacing) * 96);\n    }\n  }\n  .sm\\:min-w-\\[150px\\] {\n    @media (width >= 40rem) {\n      min-width: 150px;\n    }\n  }\n  .sm\\:flex-1 {\n    @media (width >= 40rem) {\n      flex: 1;\n    }\n  }\n  .sm\\:flex-none {\n    @media (width >= 40rem) {\n      flex: none;\n    }\n  }\n  .sm\\:-translate-y-1\\/2 {\n    @media (width >= 40rem) {\n      --tw-translate-y: calc(calc(1/2 * 100%) * -1);\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .sm\\:scale-90 {\n    @media (width >= 40rem) {\n      --tw-scale-x: 90%;\n      --tw-scale-y: 90%;\n      --tw-scale-z: 90%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .sm\\:grid-cols-2 {\n    @media (width >= 40rem) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .sm\\:grid-cols-3 {\n    @media (width >= 40rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .sm\\:grid-cols-4 {\n    @media (width >= 40rem) {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  .sm\\:grid-cols-\\[auto_1fr_auto\\] {\n    @media (width >= 40rem) {\n      grid-template-columns: auto 1fr auto;\n    }\n  }\n  .sm\\:grid-cols-\\[max-content_auto\\] {\n    @media (width >= 40rem) {\n      grid-template-columns: max-content auto;\n    }\n  }\n  .sm\\:flex-col {\n    @media (width >= 40rem) {\n      flex-direction: column;\n    }\n  }\n  .sm\\:flex-row {\n    @media (width >= 40rem) {\n      flex-direction: row;\n    }\n  }\n  .sm\\:flex-row-reverse {\n    @media (width >= 40rem) {\n      flex-direction: row-reverse;\n    }\n  }\n  .sm\\:items-center {\n    @media (width >= 40rem) {\n      align-items: center;\n    }\n  }\n  .sm\\:items-end {\n    @media (width >= 40rem) {\n      align-items: flex-end;\n    }\n  }\n  .sm\\:items-start {\n    @media (width >= 40rem) {\n      align-items: flex-start;\n    }\n  }\n  .sm\\:gap-0 {\n    @media (width >= 40rem) {\n      gap: calc(var(--spacing) * 0);\n    }\n  }\n  .sm\\:gap-3 {\n    @media (width >= 40rem) {\n      gap: calc(var(--spacing) * 3);\n    }\n  }\n  .sm\\:space-y-4 {\n    @media (width >= 40rem) {\n      :where(& > :not(:last-child)) {\n        --tw-space-y-reverse: 0;\n        margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));\n        margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));\n      }\n    }\n  }\n  .sm\\:gap-x-3 {\n    @media (width >= 40rem) {\n      column-gap: calc(var(--spacing) * 3);\n    }\n  }\n  .sm\\:gap-y-2 {\n    @media (width >= 40rem) {\n      row-gap: calc(var(--spacing) * 2);\n    }\n  }\n  .sm\\:divide-x {\n    @media (width >= 40rem) {\n      :where(& > :not(:last-child)) {\n        --tw-divide-x-reverse: 0;\n        border-inline-style: var(--tw-border-style);\n        border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));\n        border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n      }\n    }\n  }\n  .sm\\:divide-y-0 {\n    @media (width >= 40rem) {\n      :where(& > :not(:last-child)) {\n        --tw-divide-y-reverse: 0;\n        border-bottom-style: var(--tw-border-style);\n        border-top-style: var(--tw-border-style);\n        border-top-width: calc(0px * var(--tw-divide-y-reverse));\n        border-bottom-width: calc(0px * calc(1 - var(--tw-divide-y-reverse)));\n      }\n    }\n  }\n  .sm\\:rounded-lg {\n    @media (width >= 40rem) {\n      border-radius: var(--radius-lg);\n    }\n  }\n  .sm\\:bg-neutral-50 {\n    @media (width >= 40rem) {\n      background-color: var(--color-neutral-50);\n    }\n  }\n  .sm\\:bg-transparent {\n    @media (width >= 40rem) {\n      background-color: transparent;\n    }\n  }\n  .sm\\:p-0 {\n    @media (width >= 40rem) {\n      padding: calc(var(--spacing) * 0);\n    }\n  }\n  .sm\\:p-4 {\n    @media (width >= 40rem) {\n      padding: calc(var(--spacing) * 4);\n    }\n  }\n  .sm\\:p-6 {\n    @media (width >= 40rem) {\n      padding: calc(var(--spacing) * 6);\n    }\n  }\n  .sm\\:p-8 {\n    @media (width >= 40rem) {\n      padding: calc(var(--spacing) * 8);\n    }\n  }\n  .sm\\:px-3 {\n    @media (width >= 40rem) {\n      padding-inline: calc(var(--spacing) * 3);\n    }\n  }\n  .sm\\:px-6 {\n    @media (width >= 40rem) {\n      padding-inline: calc(var(--spacing) * 6);\n    }\n  }\n  .sm\\:px-8 {\n    @media (width >= 40rem) {\n      padding-inline: calc(var(--spacing) * 8);\n    }\n  }\n  .sm\\:px-\\[1rem\\] {\n    @media (width >= 40rem) {\n      padding-inline: 1rem;\n    }\n  }\n  .sm\\:py-1\\.5 {\n    @media (width >= 40rem) {\n      padding-block: calc(var(--spacing) * 1.5);\n    }\n  }\n  .sm\\:py-8 {\n    @media (width >= 40rem) {\n      padding-block: calc(var(--spacing) * 8);\n    }\n  }\n  .sm\\:pt-4 {\n    @media (width >= 40rem) {\n      padding-top: calc(var(--spacing) * 4);\n    }\n  }\n  .sm\\:pb-2\\.5 {\n    @media (width >= 40rem) {\n      padding-bottom: calc(var(--spacing) * 2.5);\n    }\n  }\n  .sm\\:text-base {\n    @media (width >= 40rem) {\n      font-size: var(--text-base);\n      line-height: var(--tw-leading, var(--text-base--line-height));\n    }\n  }\n  .sm\\:text-sm {\n    @media (width >= 40rem) {\n      font-size: var(--text-sm);\n      line-height: var(--tw-leading, var(--text-sm--line-height));\n    }\n  }\n  .sm\\:text-sm\\/6 {\n    @media (width >= 40rem) {\n      font-size: var(--text-sm);\n      line-height: calc(var(--spacing) * 6);\n    }\n  }\n  .md\\:top-32 {\n    @media (width >= 48rem) {\n      top: calc(var(--spacing) * 32);\n    }\n  }\n  .md\\:bottom-12 {\n    @media (width >= 48rem) {\n      bottom: calc(var(--spacing) * 12);\n    }\n  }\n  .md\\:m-8 {\n    @media (width >= 48rem) {\n      margin: calc(var(--spacing) * 8);\n    }\n  }\n  .md\\:mr-0 {\n    @media (width >= 48rem) {\n      margin-right: calc(var(--spacing) * 0);\n    }\n  }\n  .md\\:-mb-5 {\n    @media (width >= 48rem) {\n      margin-bottom: calc(var(--spacing) * -5);\n    }\n  }\n  .md\\:mb-0 {\n    @media (width >= 48rem) {\n      margin-bottom: calc(var(--spacing) * 0);\n    }\n  }\n  .md\\:block {\n    @media (width >= 48rem) {\n      display: block;\n    }\n  }\n  .md\\:flex {\n    @media (width >= 48rem) {\n      display: flex;\n    }\n  }\n  .md\\:hidden {\n    @media (width >= 48rem) {\n      display: none;\n    }\n  }\n  .md\\:inline {\n    @media (width >= 48rem) {\n      display: inline;\n    }\n  }\n  .md\\:inline-flex {\n    @media (width >= 48rem) {\n      display: inline-flex;\n    }\n  }\n  .md\\:table-cell {\n    @media (width >= 48rem) {\n      display: table-cell;\n    }\n  }\n  .md\\:w-1\\/2 {\n    @media (width >= 48rem) {\n      width: calc(1/2 * 100%);\n    }\n  }\n  .md\\:w-1\\/4 {\n    @media (width >= 48rem) {\n      width: calc(1/4 * 100%);\n    }\n  }\n  .md\\:w-6 {\n    @media (width >= 48rem) {\n      width: calc(var(--spacing) * 6);\n    }\n  }\n  .md\\:w-64 {\n    @media (width >= 48rem) {\n      width: calc(var(--spacing) * 64);\n    }\n  }\n  .md\\:w-auto {\n    @media (width >= 48rem) {\n      width: auto;\n    }\n  }\n  .md\\:max-w-1\\/2 {\n    @media (width >= 48rem) {\n      max-width: calc(1/2 * 100%);\n    }\n  }\n  .md\\:max-w-\\[70vw\\] {\n    @media (width >= 48rem) {\n      max-width: 70vw;\n    }\n  }\n  .md\\:max-w-\\[none\\] {\n    @media (width >= 48rem) {\n      max-width: none;\n    }\n  }\n  .md\\:max-w-xl {\n    @media (width >= 48rem) {\n      max-width: var(--container-xl);\n    }\n  }\n  .md\\:min-w-96 {\n    @media (width >= 48rem) {\n      min-width: calc(var(--spacing) * 96);\n    }\n  }\n  .md\\:flex-1 {\n    @media (width >= 48rem) {\n      flex: 1;\n    }\n  }\n  .md\\:flex-initial {\n    @media (width >= 48rem) {\n      flex: 0 auto;\n    }\n  }\n  .md\\:flex-none {\n    @media (width >= 48rem) {\n      flex: none;\n    }\n  }\n  .md\\:-translate-x-2 {\n    @media (width >= 48rem) {\n      --tw-translate-x: calc(var(--spacing) * -2);\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .md\\:scale-100 {\n    @media (width >= 48rem) {\n      --tw-scale-x: 100%;\n      --tw-scale-y: 100%;\n      --tw-scale-z: 100%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n  }\n  .md\\:grid-cols-2 {\n    @media (width >= 48rem) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .md\\:grid-cols-3 {\n    @media (width >= 48rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .md\\:grid-cols-4 {\n    @media (width >= 48rem) {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  .md\\:grid-cols-\\[1fr_2fr\\] {\n    @media (width >= 48rem) {\n      grid-template-columns: 1fr 2fr;\n    }\n  }\n  .md\\:grid-cols-\\[2fr_1fr\\] {\n    @media (width >= 48rem) {\n      grid-template-columns: 2fr 1fr;\n    }\n  }\n  .md\\:grid-cols-\\[3fr_1fr\\] {\n    @media (width >= 48rem) {\n      grid-template-columns: 3fr 1fr;\n    }\n  }\n  .md\\:grid-cols-\\[160px_1fr\\] {\n    @media (width >= 48rem) {\n      grid-template-columns: 160px 1fr;\n    }\n  }\n  .md\\:grid-cols-\\[auto_auto_1fr_80px_auto\\] {\n    @media (width >= 48rem) {\n      grid-template-columns: auto auto 1fr 80px auto;\n    }\n  }\n  .md\\:flex-row {\n    @media (width >= 48rem) {\n      flex-direction: row;\n    }\n  }\n  .md\\:flex-nowrap {\n    @media (width >= 48rem) {\n      flex-wrap: nowrap;\n    }\n  }\n  .md\\:items-center {\n    @media (width >= 48rem) {\n      align-items: center;\n    }\n  }\n  .md\\:justify-end {\n    @media (width >= 48rem) {\n      justify-content: flex-end;\n    }\n  }\n  .md\\:justify-start {\n    @media (width >= 48rem) {\n      justify-content: flex-start;\n    }\n  }\n  .md\\:gap-1 {\n    @media (width >= 48rem) {\n      gap: calc(var(--spacing) * 1);\n    }\n  }\n  .md\\:gap-2 {\n    @media (width >= 48rem) {\n      gap: calc(var(--spacing) * 2);\n    }\n  }\n  .md\\:gap-4 {\n    @media (width >= 48rem) {\n      gap: calc(var(--spacing) * 4);\n    }\n  }\n  .md\\:gap-6 {\n    @media (width >= 48rem) {\n      gap: calc(var(--spacing) * 6);\n    }\n  }\n  .md\\:gap-8 {\n    @media (width >= 48rem) {\n      gap: calc(var(--spacing) * 8);\n    }\n  }\n  .md\\:gap-10 {\n    @media (width >= 48rem) {\n      gap: calc(var(--spacing) * 10);\n    }\n  }\n  .md\\:space-y-0 {\n    @media (width >= 48rem) {\n      :where(& > :not(:last-child)) {\n        --tw-space-y-reverse: 0;\n        margin-block-start: calc(calc(var(--spacing) * 0) * var(--tw-space-y-reverse));\n        margin-block-end: calc(calc(var(--spacing) * 0) * calc(1 - var(--tw-space-y-reverse)));\n      }\n    }\n  }\n  .md\\:space-y-1 {\n    @media (width >= 48rem) {\n      :where(& > :not(:last-child)) {\n        --tw-space-y-reverse: 0;\n        margin-block-start: calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));\n        margin-block-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)));\n      }\n    }\n  }\n  .md\\:space-y-4 {\n    @media (width >= 48rem) {\n      :where(& > :not(:last-child)) {\n        --tw-space-y-reverse: 0;\n        margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));\n        margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));\n      }\n    }\n  }\n  .md\\:space-y-8 {\n    @media (width >= 48rem) {\n      :where(& > :not(:last-child)) {\n        --tw-space-y-reverse: 0;\n        margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));\n        margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));\n      }\n    }\n  }\n  .md\\:rounded-full {\n    @media (width >= 48rem) {\n      border-radius: calc(infinity * 1px);\n    }\n  }\n  .md\\:border-t-0 {\n    @media (width >= 48rem) {\n      border-top-style: var(--tw-border-style);\n      border-top-width: 0px;\n    }\n  }\n  .md\\:border-r {\n    @media (width >= 48rem) {\n      border-right-style: var(--tw-border-style);\n      border-right-width: 1px;\n    }\n  }\n  .md\\:border-b-0 {\n    @media (width >= 48rem) {\n      border-bottom-style: var(--tw-border-style);\n      border-bottom-width: 0px;\n    }\n  }\n  .md\\:border-l {\n    @media (width >= 48rem) {\n      border-left-style: var(--tw-border-style);\n      border-left-width: 1px;\n    }\n  }\n  .md\\:border-cl1-gray-7 {\n    @media (width >= 48rem) {\n      border-color: var(--color-cl1-gray-7);\n    }\n  }\n  .md\\:bg-accent {\n    @media (width >= 48rem) {\n      background-color: var(--color-accent);\n    }\n  }\n  .md\\:p-6 {\n    @media (width >= 48rem) {\n      padding: calc(var(--spacing) * 6);\n    }\n  }\n  .md\\:p-8 {\n    @media (width >= 48rem) {\n      padding: calc(var(--spacing) * 8);\n    }\n  }\n  .md\\:px-2 {\n    @media (width >= 48rem) {\n      padding-inline: calc(var(--spacing) * 2);\n    }\n  }\n  .md\\:px-3 {\n    @media (width >= 48rem) {\n      padding-inline: calc(var(--spacing) * 3);\n    }\n  }\n  .md\\:px-8 {\n    @media (width >= 48rem) {\n      padding-inline: calc(var(--spacing) * 8);\n    }\n  }\n  .md\\:py-0\\.5 {\n    @media (width >= 48rem) {\n      padding-block: calc(var(--spacing) * 0.5);\n    }\n  }\n  .md\\:py-8 {\n    @media (width >= 48rem) {\n      padding-block: calc(var(--spacing) * 8);\n    }\n  }\n  .md\\:pt-12 {\n    @media (width >= 48rem) {\n      padding-top: calc(var(--spacing) * 12);\n    }\n  }\n  .md\\:pt-\\[10vh\\] {\n    @media (width >= 48rem) {\n      padding-top: 10vh;\n    }\n  }\n  .md\\:pr-1\\.5 {\n    @media (width >= 48rem) {\n      padding-right: calc(var(--spacing) * 1.5);\n    }\n  }\n  .md\\:pb-0 {\n    @media (width >= 48rem) {\n      padding-bottom: calc(var(--spacing) * 0);\n    }\n  }\n  .md\\:text-left {\n    @media (width >= 48rem) {\n      text-align: left;\n    }\n  }\n  .md\\:text-2xl {\n    @media (width >= 48rem) {\n      font-size: var(--text-2xl);\n      line-height: var(--tw-leading, var(--text-2xl--line-height));\n    }\n  }\n  .md\\:text-3xl {\n    @media (width >= 48rem) {\n      font-size: var(--text-3xl);\n      line-height: var(--tw-leading, var(--text-3xl--line-height));\n    }\n  }\n  .md\\:text-sm {\n    @media (width >= 48rem) {\n      font-size: var(--text-sm);\n      line-height: var(--tw-leading, var(--text-sm--line-height));\n    }\n  }\n  .md\\:text-\\[10px\\] {\n    @media (width >= 48rem) {\n      font-size: 10px;\n    }\n  }\n  .md\\:font-medium {\n    @media (width >= 48rem) {\n      --tw-font-weight: var(--font-weight-medium);\n      font-weight: var(--font-weight-medium);\n    }\n  }\n  .md\\:text-label {\n    @media (width >= 48rem) {\n      color: var(--text-color-label);\n    }\n  }\n  .md\\:text-surface {\n    @media (width >= 48rem) {\n      color: var(--text-color-surface);\n    }\n  }\n  .md\\:opacity-0 {\n    @media (width >= 48rem) {\n      opacity: 0%;\n    }\n  }\n  .md\\:group-hover\\:translate-x-0 {\n    @media (width >= 48rem) {\n      &:is(:where(.group):hover *) {\n        @media (hover: hover) {\n          --tw-translate-x: calc(var(--spacing) * 0);\n          translate: var(--tw-translate-x) var(--tw-translate-y);\n        }\n      }\n    }\n  }\n  .md\\:group-hover\\:opacity-100 {\n    @media (width >= 48rem) {\n      &:is(:where(.group):hover *) {\n        @media (hover: hover) {\n          opacity: 100%;\n        }\n      }\n    }\n  }\n  .md\\:hover\\:bg-\\[var\\(--color-kumo-overlay\\)\\] {\n    @media (width >= 48rem) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-kumo-overlay);\n        }\n      }\n    }\n  }\n  .lg\\:absolute {\n    @media (width >= 64rem) {\n      position: absolute;\n    }\n  }\n  .lg\\:order-1 {\n    @media (width >= 64rem) {\n      order: 1;\n    }\n  }\n  .lg\\:order-2 {\n    @media (width >= 64rem) {\n      order: 2;\n    }\n  }\n  .lg\\:col-span-4 {\n    @media (width >= 64rem) {\n      grid-column: span 4 / span 4;\n    }\n  }\n  .lg\\:mt-0 {\n    @media (width >= 64rem) {\n      margin-top: calc(var(--spacing) * 0);\n    }\n  }\n  .lg\\:ml-8 {\n    @media (width >= 64rem) {\n      margin-left: calc(var(--spacing) * 8);\n    }\n  }\n  .lg\\:block {\n    @media (width >= 64rem) {\n      display: block;\n    }\n  }\n  .lg\\:flex {\n    @media (width >= 64rem) {\n      display: flex;\n    }\n  }\n  .lg\\:grid {\n    @media (width >= 64rem) {\n      display: grid;\n    }\n  }\n  .lg\\:hidden {\n    @media (width >= 64rem) {\n      display: none;\n    }\n  }\n  .lg\\:inline {\n    @media (width >= 64rem) {\n      display: inline;\n    }\n  }\n  .lg\\:w-3\\/10 {\n    @media (width >= 64rem) {\n      width: calc(3/10 * 100%);\n    }\n  }\n  .lg\\:w-8 {\n    @media (width >= 64rem) {\n      width: calc(var(--spacing) * 8);\n    }\n  }\n  .lg\\:w-auto {\n    @media (width >= 64rem) {\n      width: auto;\n    }\n  }\n  .lg\\:max-w-2xl {\n    @media (width >= 64rem) {\n      max-width: var(--container-2xl);\n    }\n  }\n  .lg\\:max-w-\\[50vw\\] {\n    @media (width >= 64rem) {\n      max-width: 50vw;\n    }\n  }\n  .lg\\:max-w-\\[798px\\] {\n    @media (width >= 64rem) {\n      max-width: 798px;\n    }\n  }\n  .lg\\:basis-auto {\n    @media (width >= 64rem) {\n      flex-basis: auto;\n    }\n  }\n  .lg\\:snap-none {\n    @media (width >= 64rem) {\n      scroll-snap-type: none;\n    }\n  }\n  .lg\\:columns-2 {\n    @media (width >= 64rem) {\n      columns: 2;\n    }\n  }\n  .lg\\:grid-cols-1 {\n    @media (width >= 64rem) {\n      grid-template-columns: repeat(1, minmax(0, 1fr));\n    }\n  }\n  .lg\\:grid-cols-2 {\n    @media (width >= 64rem) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .lg\\:grid-cols-3 {\n    @media (width >= 64rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .lg\\:grid-cols-4 {\n    @media (width >= 64rem) {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  .lg\\:grid-cols-6 {\n    @media (width >= 64rem) {\n      grid-template-columns: repeat(6, minmax(0, 1fr));\n    }\n  }\n  .lg\\:grid-cols-\\[1fr_250px\\] {\n    @media (width >= 64rem) {\n      grid-template-columns: 1fr 250px;\n    }\n  }\n  .lg\\:grid-cols-\\[1fr_325px\\] {\n    @media (width >= 64rem) {\n      grid-template-columns: 1fr 325px;\n    }\n  }\n  .lg\\:grid-cols-\\[1fr_auto_1fr\\] {\n    @media (width >= 64rem) {\n      grid-template-columns: 1fr auto 1fr;\n    }\n  }\n  .lg\\:grid-cols-\\[auto_auto_1fr_175px_175px_80px_auto\\] {\n    @media (width >= 64rem) {\n      grid-template-columns: auto auto 1fr 175px 175px 80px auto;\n    }\n  }\n  .lg\\:flex-row {\n    @media (width >= 64rem) {\n      flex-direction: row;\n    }\n  }\n  .lg\\:gap-8 {\n    @media (width >= 64rem) {\n      gap: calc(var(--spacing) * 8);\n    }\n  }\n  .lg\\:gap-x-8 {\n    @media (width >= 64rem) {\n      column-gap: calc(var(--spacing) * 8);\n    }\n  }\n  .lg\\:gap-y-2 {\n    @media (width >= 64rem) {\n      row-gap: calc(var(--spacing) * 2);\n    }\n  }\n  .lg\\:rounded-xl {\n    @media (width >= 64rem) {\n      border-radius: var(--radius-xl);\n    }\n  }\n  .lg\\:bg-neutral-150 {\n    @media (width >= 64rem) {\n      background-color: var(--color-neutral-150);\n    }\n  }\n  .lg\\:p-8 {\n    @media (width >= 64rem) {\n      padding: calc(var(--spacing) * 8);\n    }\n  }\n  .lg\\:p-10 {\n    @media (width >= 64rem) {\n      padding: calc(var(--spacing) * 10);\n    }\n  }\n  .lg\\:px-8 {\n    @media (width >= 64rem) {\n      padding-inline: calc(var(--spacing) * 8);\n    }\n  }\n  .lg\\:px-10 {\n    @media (width >= 64rem) {\n      padding-inline: calc(var(--spacing) * 10);\n    }\n  }\n  .lg\\:px-12 {\n    @media (width >= 64rem) {\n      padding-inline: calc(var(--spacing) * 12);\n    }\n  }\n  .lg\\:py-9 {\n    @media (width >= 64rem) {\n      padding-block: calc(var(--spacing) * 9);\n    }\n  }\n  .lg\\:py-10 {\n    @media (width >= 64rem) {\n      padding-block: calc(var(--spacing) * 10);\n    }\n  }\n  .lg\\:pt-4 {\n    @media (width >= 64rem) {\n      padding-top: calc(var(--spacing) * 4);\n    }\n  }\n  .lg\\:pt-8 {\n    @media (width >= 64rem) {\n      padding-top: calc(var(--spacing) * 8);\n    }\n  }\n  .lg\\:pb-0 {\n    @media (width >= 64rem) {\n      padding-bottom: calc(var(--spacing) * 0);\n    }\n  }\n  .lg\\:pb-4 {\n    @media (width >= 64rem) {\n      padding-bottom: calc(var(--spacing) * 4);\n    }\n  }\n  .lg\\:pb-6 {\n    @media (width >= 64rem) {\n      padding-bottom: calc(var(--spacing) * 6);\n    }\n  }\n  .lg\\:pb-8 {\n    @media (width >= 64rem) {\n      padding-bottom: calc(var(--spacing) * 8);\n    }\n  }\n  .lg\\:text-left {\n    @media (width >= 64rem) {\n      text-align: left;\n    }\n  }\n  .lg\\:ring {\n    @media (width >= 64rem) {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .lg\\:ring-neutral-950\\/10 {\n    @media (width >= 64rem) {\n      --tw-ring-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n      }\n    }\n  }\n  .xl\\:absolute {\n    @media (width >= 80rem) {\n      position: absolute;\n    }\n  }\n  .xl\\:static {\n    @media (width >= 80rem) {\n      position: static;\n    }\n  }\n  .xl\\:sticky {\n    @media (width >= 80rem) {\n      position: sticky;\n    }\n  }\n  .xl\\:col-span-6 {\n    @media (width >= 80rem) {\n      grid-column: span 6 / span 6;\n    }\n  }\n  .xl\\:row-span-2 {\n    @media (width >= 80rem) {\n      grid-row: span 2 / span 2;\n    }\n  }\n  .xl\\:mt-0 {\n    @media (width >= 80rem) {\n      margin-top: calc(var(--spacing) * 0);\n    }\n  }\n  .xl\\:ml-16 {\n    @media (width >= 80rem) {\n      margin-left: calc(var(--spacing) * 16);\n    }\n  }\n  .xl\\:block {\n    @media (width >= 80rem) {\n      display: block;\n    }\n  }\n  .xl\\:flex {\n    @media (width >= 80rem) {\n      display: flex;\n    }\n  }\n  .xl\\:hidden {\n    @media (width >= 80rem) {\n      display: none;\n    }\n  }\n  .xl\\:inline-flex {\n    @media (width >= 80rem) {\n      display: inline-flex;\n    }\n  }\n  .xl\\:\\!h-10 {\n    @media (width >= 80rem) {\n      height: calc(var(--spacing) * 10) !important;\n    }\n  }\n  .xl\\:w-\\[380px\\] {\n    @media (width >= 80rem) {\n      width: 380px;\n    }\n  }\n  .xl\\:min-w-\\[380px\\] {\n    @media (width >= 80rem) {\n      min-width: 380px;\n    }\n  }\n  .xl\\:grid-cols-1 {\n    @media (width >= 80rem) {\n      grid-template-columns: repeat(1, minmax(0, 1fr));\n    }\n  }\n  .xl\\:grid-cols-2 {\n    @media (width >= 80rem) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .xl\\:grid-cols-3 {\n    @media (width >= 80rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .xl\\:grid-cols-4 {\n    @media (width >= 80rem) {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  .xl\\:grid-cols-6 {\n    @media (width >= 80rem) {\n      grid-template-columns: repeat(6, minmax(0, 1fr));\n    }\n  }\n  .xl\\:grid-cols-10 {\n    @media (width >= 80rem) {\n      grid-template-columns: repeat(10, minmax(0, 1fr));\n    }\n  }\n  .xl\\:grid-cols-\\[1fr_300px\\] {\n    @media (width >= 80rem) {\n      grid-template-columns: 1fr 300px;\n    }\n  }\n  .xl\\:grid-cols-\\[1fr_400px\\] {\n    @media (width >= 80rem) {\n      grid-template-columns: 1fr 400px;\n    }\n  }\n  .xl\\:grid-cols-\\[2fr_1fr\\] {\n    @media (width >= 80rem) {\n      grid-template-columns: 2fr 1fr;\n    }\n  }\n  .xl\\:grid-cols-\\[3fr_1fr\\] {\n    @media (width >= 80rem) {\n      grid-template-columns: 3fr 1fr;\n    }\n  }\n  .xl\\:grid-cols-\\[auto_1fr_auto\\] {\n    @media (width >= 80rem) {\n      grid-template-columns: auto 1fr auto;\n    }\n  }\n  .xl\\:grid-rows-1 {\n    @media (width >= 80rem) {\n      grid-template-rows: repeat(1, minmax(0, 1fr));\n    }\n  }\n  .xl\\:grid-rows-\\[auto_auto\\] {\n    @media (width >= 80rem) {\n      grid-template-rows: auto auto;\n    }\n  }\n  .xl\\:flex-row {\n    @media (width >= 80rem) {\n      flex-direction: row;\n    }\n  }\n  .xl\\:items-center {\n    @media (width >= 80rem) {\n      align-items: center;\n    }\n  }\n  .xl\\:\\!gap-2 {\n    @media (width >= 80rem) {\n      gap: calc(var(--spacing) * 2) !important;\n    }\n  }\n  .xl\\:gap-6 {\n    @media (width >= 80rem) {\n      gap: calc(var(--spacing) * 6);\n    }\n  }\n  .xl\\:gap-8 {\n    @media (width >= 80rem) {\n      gap: calc(var(--spacing) * 8);\n    }\n  }\n  .xl\\:gap-12 {\n    @media (width >= 80rem) {\n      gap: calc(var(--spacing) * 12);\n    }\n  }\n  .xl\\:p-15 {\n    @media (width >= 80rem) {\n      padding: calc(var(--spacing) * 15);\n    }\n  }\n  .xl\\:\\!px-4 {\n    @media (width >= 80rem) {\n      padding-inline: calc(var(--spacing) * 4) !important;\n    }\n  }\n  .xl\\:px-10 {\n    @media (width >= 80rem) {\n      padding-inline: calc(var(--spacing) * 10);\n    }\n  }\n  .\\32 xl\\:col-start-2 {\n    @media (width >= 96rem) {\n      grid-column-start: 2;\n    }\n  }\n  .\\32 xl\\:col-start-3 {\n    @media (width >= 96rem) {\n      grid-column-start: 3;\n    }\n  }\n  .\\32 xl\\:row-start-1 {\n    @media (width >= 96rem) {\n      grid-row-start: 1;\n    }\n  }\n  .\\32 xl\\:mt-13 {\n    @media (width >= 96rem) {\n      margin-top: calc(var(--spacing) * 13);\n    }\n  }\n  .\\32 xl\\:block {\n    @media (width >= 96rem) {\n      display: block;\n    }\n  }\n  .\\32 xl\\:contents {\n    @media (width >= 96rem) {\n      display: contents;\n    }\n  }\n  .\\32 xl\\:grid {\n    @media (width >= 96rem) {\n      display: grid;\n    }\n  }\n  .\\32 xl\\:hidden {\n    @media (width >= 96rem) {\n      display: none;\n    }\n  }\n  .\\32 xl\\:max-h-82 {\n    @media (width >= 96rem) {\n      max-height: calc(var(--spacing) * 82);\n    }\n  }\n  .\\32 xl\\:w-full {\n    @media (width >= 96rem) {\n      width: 100%;\n    }\n  }\n  .\\32 xl\\:grid-cols-4 {\n    @media (width >= 96rem) {\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n    }\n  }\n  .\\32 xl\\:grid-cols-\\[1fr_minmax\\(auto\\,1000px\\)_1fr\\] {\n    @media (width >= 96rem) {\n      grid-template-columns: 1fr minmax(auto,1000px) 1fr;\n    }\n  }\n  .\\32 xl\\:flex-col {\n    @media (width >= 96rem) {\n      flex-direction: column;\n    }\n  }\n  .\\32 xl\\:items-start {\n    @media (width >= 96rem) {\n      align-items: flex-start;\n    }\n  }\n  .\\32 xl\\:gap-6 {\n    @media (width >= 96rem) {\n      gap: calc(var(--spacing) * 6);\n    }\n  }\n  .\\32 xl\\:gap-x-12 {\n    @media (width >= 96rem) {\n      column-gap: calc(var(--spacing) * 12);\n    }\n  }\n  .\\@max-\\[300px\\]\\:max-w-\\[21ch\\] {\n    @container (width < 300px) {\n      max-width: 21ch;\n    }\n  }\n  .\\@max-\\[300px\\]\\:flex-col {\n    @container (width < 300px) {\n      flex-direction: column;\n    }\n  }\n  .\\@max-\\[200px\\]\\:max-w-\\[11ch\\] {\n    @container (width < 200px) {\n      max-width: 11ch;\n    }\n  }\n  .\\@\\[200px\\]\\:grid-cols-2 {\n    @container (width >= 200px) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .\\@\\[418px\\]\\:\\@max-\\[568px\\]\\:grid-cols-2\\! {\n    @container (width >= 418px) {\n      @container (width < 568px) {\n        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n      }\n    }\n  }\n  .\\@\\[600px\\]\\:grid-cols-2 {\n    @container (width >= 600px) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .\\@min-\\[789px\\]\\:hidden {\n    @container (width >= 789px) {\n      display: none;\n    }\n  }\n  .\\@min-\\[900px\\]\\:sticky {\n    @container (width >= 900px) {\n      position: sticky;\n    }\n  }\n  .\\@min-\\[900px\\]\\:top-\\[58px\\] {\n    @container (width >= 900px) {\n      top: 58px;\n    }\n  }\n  .\\@min-\\[900px\\]\\:block {\n    @container (width >= 900px) {\n      display: block;\n    }\n  }\n  .\\@min-\\[900px\\]\\:grid {\n    @container (width >= 900px) {\n      display: grid;\n    }\n  }\n  .\\@min-\\[900px\\]\\:hidden {\n    @container (width >= 900px) {\n      display: none;\n    }\n  }\n  .\\@min-\\[900px\\]\\:max-h-\\[calc\\(100vh-206px\\)\\] {\n    @container (width >= 900px) {\n      max-height: calc(100vh - 206px);\n    }\n  }\n  .\\@\\[900px\\]\\:grid-cols-3 {\n    @container (width >= 900px) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .\\@min-\\[900px\\]\\:divide-x {\n    @container (width >= 900px) {\n      :where(& > :not(:last-child)) {\n        --tw-divide-x-reverse: 0;\n        border-inline-style: var(--tw-border-style);\n        border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));\n        border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n      }\n    }\n  }\n  .\\@min-\\[900px\\]\\:border-b-0 {\n    @container (width >= 900px) {\n      border-bottom-style: var(--tw-border-style);\n      border-bottom-width: 0px;\n    }\n  }\n  .\\@min-\\[1080px\\]\\:hidden {\n    @container (width >= 1080px) {\n      display: none;\n    }\n  }\n  .\\@min-\\[1400px\\]\\:col-span-2 {\n    @container (width >= 1400px) {\n      grid-column: span 2 / span 2;\n    }\n  }\n  .\\@min-\\[1400px\\]\\:grid-cols-2\\! {\n    @container (width >= 1400px) {\n      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n    }\n  }\n  .\\@min-\\[1400px\\]\\:grid-cols-6\\! {\n    @container (width >= 1400px) {\n      grid-template-columns: repeat(6, minmax(0, 1fr)) !important;\n    }\n  }\n  .\\@xs\\:flex {\n    @container (width >= 20rem) {\n      display: flex;\n    }\n  }\n  .\\@xs\\:hidden {\n    @container (width >= 20rem) {\n      display: none;\n    }\n  }\n  .\\@xs\\:inline-flex {\n    @container (width >= 20rem) {\n      display: inline-flex;\n    }\n  }\n  .\\@md\\:inline {\n    @container (width >= 28rem) {\n      display: inline;\n    }\n  }\n  .\\@lg\\:col-span-2 {\n    @container (width >= 32rem) {\n      grid-column: span 2 / span 2;\n    }\n  }\n  .\\@lg\\:flex {\n    @container (width >= 32rem) {\n      display: flex;\n    }\n  }\n  .\\@lg\\:hidden {\n    @container (width >= 32rem) {\n      display: none;\n    }\n  }\n  .\\@lg\\:grid-cols-2 {\n    @container (width >= 32rem) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .\\@xl\\:col-span-3 {\n    @container (width >= 36rem) {\n      grid-column: span 3 / span 3;\n    }\n  }\n  .\\@xl\\:col-span-4 {\n    @container (width >= 36rem) {\n      grid-column: span 4 / span 4;\n    }\n  }\n  .\\@xl\\:col-span-5 {\n    @container (width >= 36rem) {\n      grid-column: span 5 / span 5;\n    }\n  }\n  .\\@xl\\:row-start-\\[unset\\] {\n    @container (width >= 36rem) {\n      grid-row-start: unset;\n    }\n  }\n  .\\@xl\\:block {\n    @container (width >= 36rem) {\n      display: block;\n    }\n  }\n  .\\@xl\\:flex {\n    @container (width >= 36rem) {\n      display: flex;\n    }\n  }\n  .\\@xl\\:grid-cols-12 {\n    @container (width >= 36rem) {\n      grid-template-columns: repeat(12, minmax(0, 1fr));\n    }\n  }\n  .\\@xl\\:grid-rows-2 {\n    @container (width >= 36rem) {\n      grid-template-rows: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .\\@2xl\\:left-8 {\n    @container (width >= 42rem) {\n      left: calc(var(--spacing) * 8);\n    }\n  }\n  .\\@2xl\\:order-0 {\n    @container (width >= 42rem) {\n      order: 0;\n    }\n  }\n  .\\@2xl\\:flex {\n    @container (width >= 42rem) {\n      display: flex;\n    }\n  }\n  .\\@2xl\\:w-\\[calc\\(100\\%-4rem\\)\\] {\n    @container (width >= 42rem) {\n      width: calc(100% - 4rem);\n    }\n  }\n  .\\@2xl\\:grid-cols-2 {\n    @container (width >= 42rem) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .\\@2xl\\:flex-row {\n    @container (width >= 42rem) {\n      flex-direction: row;\n    }\n  }\n  .\\@2xl\\:gap-6 {\n    @container (width >= 42rem) {\n      gap: calc(var(--spacing) * 6);\n    }\n  }\n  .\\@2xl\\:p-14 {\n    @container (width >= 42rem) {\n      padding: calc(var(--spacing) * 14);\n    }\n  }\n  .\\@2xl\\:py-6 {\n    @container (width >= 42rem) {\n      padding-block: calc(var(--spacing) * 6);\n    }\n  }\n  .\\@2xl\\:py-14 {\n    @container (width >= 42rem) {\n      padding-block: calc(var(--spacing) * 14);\n    }\n  }\n  .\\@2xl\\:pt-14 {\n    @container (width >= 42rem) {\n      padding-top: calc(var(--spacing) * 14);\n    }\n  }\n  .\\@2xl\\:text-5xl {\n    @container (width >= 42rem) {\n      font-size: var(--text-5xl);\n      line-height: var(--tw-leading, var(--text-5xl--line-height));\n    }\n  }\n  .\\@3xl\\:col-span-2 {\n    @container (width >= 48rem) {\n      grid-column: span 2 / span 2;\n    }\n  }\n  .\\@3xl\\:flex {\n    @container (width >= 48rem) {\n      display: flex;\n    }\n  }\n  .\\@3xl\\:min-h-0 {\n    @container (width >= 48rem) {\n      min-height: calc(var(--spacing) * 0);\n    }\n  }\n  .\\@3xl\\:grid-cols-3 {\n    @container (width >= 48rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .\\@4xl\\:grid-cols-1 {\n    @container (width >= 56rem) {\n      grid-template-columns: repeat(1, minmax(0, 1fr));\n    }\n  }\n  .\\@4xl\\:grid-cols-3 {\n    @container (width >= 56rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .\\@4xl\\:flex-row {\n    @container (width >= 56rem) {\n      flex-direction: row;\n    }\n  }\n  .\\@4xl\\:items-center {\n    @container (width >= 56rem) {\n      align-items: center;\n    }\n  }\n  .\\@5xl\\:sticky {\n    @container (width >= 64rem) {\n      position: sticky;\n    }\n  }\n  .\\@5xl\\:block {\n    @container (width >= 64rem) {\n      display: block;\n    }\n  }\n  .\\@5xl\\:hidden {\n    @container (width >= 64rem) {\n      display: none;\n    }\n  }\n  .\\@5xl\\:w-\\[380px\\] {\n    @container (width >= 64rem) {\n      width: 380px;\n    }\n  }\n  .\\@5xl\\:grid-cols-2 {\n    @container (width >= 64rem) {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  .\\@5xl\\:grid-cols-3 {\n    @container (width >= 64rem) {\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n    }\n  }\n  .\\@5xl\\:flex-row {\n    @container (width >= 64rem) {\n      flex-direction: row;\n    }\n  }\n  .\\@5xl\\:gap-8 {\n    @container (width >= 64rem) {\n      gap: calc(var(--spacing) * 8);\n    }\n  }\n  .rtl\\:translate-x-\\[-100\\%\\] {\n    &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {\n      --tw-translate-x: -100%;\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .dark\\:block {\n    &:where(.dark-mode, .dark-mode *) {\n      display: block;\n    }\n  }\n  .dark\\:hidden {\n    &:where(.dark-mode, .dark-mode *) {\n      display: none;\n    }\n  }\n  .dark\\:divide-border {\n    &:where(.dark-mode, .dark-mode *) {\n      :where(& > :not(:last-child)) {\n        border-color: var(--color-border);\n      }\n    }\n  }\n  .dark\\:divide-gray-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      :where(& > :not(:last-child)) {\n        border-color: var(--color-gray-600);\n      }\n    }\n  }\n  .dark\\:divide-gray-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      :where(& > :not(:last-child)) {\n        border-color: var(--color-gray-700);\n      }\n    }\n  }\n  .dark\\:divide-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      :where(& > :not(:last-child)) {\n        border-color: var(--color-neutral-600);\n      }\n    }\n  }\n  .dark\\:divide-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      :where(& > :not(:last-child)) {\n        border-color: var(--color-neutral-700);\n      }\n    }\n  }\n  .dark\\:divide-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      :where(& > :not(:last-child)) {\n        border-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .dark\\:border-1 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-style: var(--tw-border-style);\n      border-width: 1px;\n    }\n  }\n  .dark\\:\\!border-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-600) !important;\n    }\n  }\n  .dark\\:\\!border-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-800) !important;\n    }\n  }\n  .dark\\:border-\\[\\#E81403\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: #E81403;\n    }\n  }\n  .dark\\:border-\\[\\#b73cdf\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: #b73cdf;\n    }\n  }\n  .dark\\:border-\\[\\#f85189\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: #f85189;\n    }\n  }\n  .dark\\:border-\\[\\#ffce4b\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: #ffce4b;\n    }\n  }\n  .dark\\:border-amber-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-amber-800);\n    }\n  }\n  .dark\\:border-blue-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-blue-400);\n    }\n  }\n  .dark\\:border-blue-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-blue-500);\n    }\n  }\n  .dark\\:border-blue-500\\/40 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 40%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-blue-500) 40%, transparent);\n      }\n    }\n  }\n  .dark\\:border-blue-500\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-blue-500) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:border-blue-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-blue-700);\n    }\n  }\n  .dark\\:border-blue-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-blue-800);\n    }\n  }\n  .dark\\:border-cl1-gray-6 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-cl1-gray-6);\n    }\n  }\n  .dark\\:border-gray-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-gray-600);\n    }\n  }\n  .dark\\:border-gray-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-gray-700);\n    }\n  }\n  .dark\\:border-gray-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-gray-800);\n    }\n  }\n  .dark\\:border-green-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-green-500);\n    }\n  }\n  .dark\\:border-green-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-green-800);\n    }\n  }\n  .dark\\:border-green-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(44.8% 0.119 151.328) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-green-800) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:border-neutral-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-100);\n    }\n  }\n  .dark\\:border-neutral-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-400);\n    }\n  }\n  .dark\\:border-neutral-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-500);\n    }\n  }\n  .dark\\:border-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-600);\n    }\n  }\n  .dark\\:border-neutral-600\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(43.9% 0 0) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-600) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:border-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-700);\n    }\n  }\n  .dark\\:border-neutral-700\\/40 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(37.1% 0 0) 40%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-700) 40%, transparent);\n      }\n    }\n  }\n  .dark\\:border-neutral-700\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(37.1% 0 0) 60%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-700) 60%, transparent);\n      }\n    }\n  }\n  .dark\\:border-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-800);\n    }\n  }\n  .dark\\:border-neutral-800\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-800) !important;\n    }\n  }\n  .dark\\:border-neutral-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(26.9% 0 0) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-800) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:border-neutral-800\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(26.9% 0 0) 60%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-800) 60%, transparent);\n      }\n    }\n  }\n  .dark\\:border-neutral-800\\/80 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(26.9% 0 0) 80%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-neutral-800) 80%, transparent);\n      }\n    }\n  }\n  .dark\\:border-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-900);\n    }\n  }\n  .dark\\:border-neutral-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-neutral-950);\n    }\n  }\n  .dark\\:border-orange-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-orange-700);\n    }\n  }\n  .dark\\:border-red-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-red-500);\n    }\n  }\n  .dark\\:border-red-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-red-700);\n    }\n  }\n  .dark\\:border-red-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-red-800);\n    }\n  }\n  .dark\\:border-red-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-red-900);\n    }\n  }\n  .dark\\:border-yellow-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-yellow-500);\n    }\n  }\n  .dark\\:border-yellow-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-yellow-700);\n    }\n  }\n  .dark\\:border-yellow-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: var(--color-yellow-800);\n    }\n  }\n  .dark\\:border-yellow-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-color: color-mix(in srgb, oklch(47.6% 0.114 61.907) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        border-color: color-mix(in oklab, var(--color-yellow-800) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:border-t-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-top-color: var(--color-neutral-700);\n    }\n  }\n  .dark\\:border-r-neutral-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-right-color: var(--color-neutral-100);\n    }\n  }\n  .dark\\:border-b-neutral-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-bottom-color: var(--color-neutral-100);\n    }\n  }\n  .dark\\:border-b-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-bottom-color: var(--color-neutral-600);\n    }\n  }\n  .dark\\:border-l-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      border-left-color: var(--color-neutral-700);\n    }\n  }\n  .dark\\:\\!bg-black {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-black) !important;\n    }\n  }\n  .dark\\:\\!bg-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-700) !important;\n    }\n  }\n  .dark\\:\\!bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-800) !important;\n    }\n  }\n  .dark\\:\\!bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-900) !important;\n    }\n  }\n  .dark\\:\\!bg-neutral-900\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 50%, transparent) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 50%, transparent) !important;\n      }\n    }\n  }\n  .dark\\:\\!bg-neutral-900\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 60%, transparent) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 60%, transparent) !important;\n      }\n    }\n  }\n  .dark\\:\\!bg-neutral-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-950) !important;\n    }\n  }\n  .dark\\:\\!bg-white {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-white) !important;\n    }\n  }\n  .dark\\:bg-\\(--shiki-dark-bg\\)\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--shiki-dark-bg) !important;\n    }\n  }\n  .dark\\:bg-\\[\\#2C2C2C\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: #2C2C2C;\n    }\n  }\n  .dark\\:bg-\\[\\#6B4FBB\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: #6B4FBB;\n    }\n  }\n  .dark\\:bg-\\[\\#111\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: #111;\n    }\n  }\n  .dark\\:bg-\\[\\#916b20\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: #916b20;\n    }\n  }\n  .dark\\:bg-\\[\\#E81403\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: #E81403;\n    }\n  }\n  .dark\\:bg-\\[\\#FC6D26\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: #FC6D26;\n    }\n  }\n  .dark\\:bg-amber-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(47.3% 0.137 46.201) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-amber-800) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-amber-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(41.4% 0.112 45.904) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-amber-900) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-black {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-black);\n    }\n  }\n  .dark\\:bg-black\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, #000 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-black) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-black\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, #000 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-black) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-black\\/75 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, #000 75%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-black) 75%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-black\\/90 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, #000 90%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-black) 90%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-blue-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-blue-500);\n    }\n  }\n  .dark\\:bg-blue-500\\/15 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 15%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-blue-500) 15%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-blue-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-blue-600);\n    }\n  }\n  .dark\\:bg-blue-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-blue-700);\n    }\n  }\n  .dark\\:bg-blue-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-blue-800);\n    }\n  }\n  .dark\\:bg-blue-800\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(0.424 0.199 265.638) 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-blue-800) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-blue-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-blue-900);\n    }\n  }\n  .dark\\:bg-blue-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-blue-900) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-blue-900\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-blue-900) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-blue-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-blue-950);\n    }\n  }\n  .dark\\:bg-blue-950\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(28.2% 0.091 267.935) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-blue-950) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-blue-950\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(28.2% 0.091 267.935) 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-blue-950) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-cl1-cyan-7\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-cyan-7);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-cl1-cyan-7) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-cl1-gray-1 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-1);\n    }\n  }\n  .dark\\:bg-cl1-gray-2 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-2);\n    }\n  }\n  .dark\\:bg-cl1-gray-7 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-7);\n    }\n  }\n  .dark\\:bg-cl1-gray-7\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-7);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-cl1-gray-7) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-cl1-gray-8 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-8);\n    }\n  }\n  .dark\\:bg-cl1-gray-8\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-8);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-cl1-gray-8) 60%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-cl1-gray-9 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-cl1-gray-9);\n    }\n  }\n  .dark\\:bg-gray-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-gray-700);\n    }\n  }\n  .dark\\:bg-gray-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-gray-800);\n    }\n  }\n  .dark\\:bg-gray-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(27.8% 0.033 256.848) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-gray-800) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-gray-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-gray-900);\n    }\n  }\n  .dark\\:bg-gray-900\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(21% 0.034 264.665) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-gray-900) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-green-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-green-500);\n    }\n  }\n  .dark\\:bg-green-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-green-700);\n    }\n  }\n  .dark\\:bg-green-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-green-800);\n    }\n  }\n  .dark\\:bg-green-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-green-900);\n    }\n  }\n  .dark\\:bg-green-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(39.3% 0.095 152.535) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-green-900) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-green-950\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(26.6% 0.065 152.934) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-green-950) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-50);\n    }\n  }\n  .dark\\:bg-neutral-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-100);\n    }\n  }\n  .dark\\:bg-neutral-100\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-100) !important;\n    }\n  }\n  .dark\\:bg-neutral-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-400);\n    }\n  }\n  .dark\\:bg-neutral-500\\/70 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(55.6% 0 0) 70%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-500) 70%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-600);\n    }\n  }\n  .dark\\:bg-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-700);\n    }\n  }\n  .dark\\:bg-neutral-700\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(37.1% 0 0) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-700) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-750 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-750);\n    }\n  }\n  .dark\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-800);\n    }\n  }\n  .dark\\:bg-neutral-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(26.9% 0 0) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-800) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-850 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-850);\n    }\n  }\n  .dark\\:bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-900);\n    }\n  }\n  .dark\\:bg-neutral-900\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-900) !important;\n    }\n  }\n  .dark\\:bg-neutral-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-900\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-900\\/40 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 40%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 40%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-900\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-900\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 60%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 60%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-900\\/80 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(20.5% 0 0) 80%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-900) 80%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-neutral-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-neutral-950);\n    }\n  }\n  .dark\\:bg-neutral-950\\/15 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(14.5% 0 0) 15%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-neutral-950) 15%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-orange-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-orange-500);\n    }\n  }\n  .dark\\:bg-orange-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-orange-900);\n    }\n  }\n  .dark\\:bg-orange-900\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(40.8% 0.123 38.172) 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-orange-900) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-orange-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-orange-950);\n    }\n  }\n  .dark\\:bg-red-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-red-500);\n    }\n  }\n  .dark\\:bg-red-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-red-600);\n    }\n  }\n  .dark\\:bg-red-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-red-800);\n    }\n  }\n  .dark\\:bg-red-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-red-900);\n    }\n  }\n  .dark\\:bg-red-900\\/10\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 10%, transparent) !important;\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-red-900) 10%, transparent) !important;\n      }\n    }\n  }\n  .dark\\:bg-red-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-red-900) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-red-900\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-red-900) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-red-900\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-red-900) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-red-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-red-950);\n    }\n  }\n  .dark\\:bg-red-950\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-red-950) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-red-950\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-red-950) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-secondary {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-secondary);\n    }\n  }\n  .dark\\:bg-surface {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-surface);\n    }\n  }\n  .dark\\:bg-surface-secondary {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-surface-secondary);\n    }\n  }\n  .dark\\:bg-transparent {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: transparent;\n    }\n  }\n  .dark\\:bg-violet-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-violet-900);\n    }\n  }\n  .dark\\:bg-violet-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-violet-950);\n    }\n  }\n  .dark\\:bg-white {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-white);\n    }\n  }\n  .dark\\:bg-white\\/5 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, #fff 5%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-white) 5%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-white\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, #fff 30%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-white) 30%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-white\\/80 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, #fff 80%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-white) 80%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-yellow-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-yellow-600);\n    }\n  }\n  .dark\\:bg-yellow-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-yellow-900);\n    }\n  }\n  .dark\\:bg-yellow-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: color-mix(in srgb, oklch(42.1% 0.095 57.708) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        background-color: color-mix(in oklab, var(--color-yellow-900) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:bg-zinc-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      background-color: var(--color-zinc-900);\n    }\n  }\n  .dark\\:bg-\\[radial-gradient\\(circle\\,_\\#333_1px\\,_transparent_1px\\)\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      background-image: radial-gradient(circle, #333 1px, transparent 1px);\n    }\n  }\n  .dark\\:bg-none {\n    &:where(.dark-mode, .dark-mode *) {\n      background-image: none;\n    }\n  }\n  .dark\\:from-blue-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-gradient-from: color-mix(in srgb, oklch(37.9% 0.146 265.522) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-gradient-from: color-mix(in oklab, var(--color-blue-900) 20%, transparent);\n      }\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  .dark\\:from-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-gradient-from: var(--color-neutral-800);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  .dark\\:from-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-gradient-from: var(--color-neutral-900);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  .dark\\:to-indigo-900\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-gradient-to: color-mix(in srgb, oklch(35.9% 0.144 278.697) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-gradient-to: color-mix(in oklab, var(--color-indigo-900) 20%, transparent);\n      }\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  .dark\\:to-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-gradient-to: var(--color-neutral-700);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  .dark\\:to-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-gradient-to: var(--color-neutral-900);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  .dark\\:to-neutral-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-gradient-to: var(--color-neutral-950);\n      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n    }\n  }\n  .dark\\:fill-neutral-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      fill: var(--color-neutral-400);\n    }\n  }\n  .dark\\:fill-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      fill: var(--color-neutral-800);\n    }\n  }\n  .dark\\:fill-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      fill: var(--color-neutral-900);\n    }\n  }\n  .dark\\:fill-none {\n    &:where(.dark-mode, .dark-mode *) {\n      fill: none;\n    }\n  }\n  .dark\\:fill-white {\n    &:where(.dark-mode, .dark-mode *) {\n      fill: var(--color-white);\n    }\n  }\n  .dark\\:stroke-white {\n    &:where(.dark-mode, .dark-mode *) {\n      stroke: var(--color-white);\n    }\n  }\n  .dark\\:\\!text-black {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-black) !important;\n    }\n  }\n  .dark\\:\\!text-neutral-50 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-50) !important;\n    }\n  }\n  .dark\\:\\!text-neutral-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-100) !important;\n    }\n  }\n  .dark\\:\\!text-neutral-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-200) !important;\n    }\n  }\n  .dark\\:\\!text-neutral-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-300) !important;\n    }\n  }\n  .dark\\:\\!text-neutral-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-400) !important;\n    }\n  }\n  .dark\\:\\!text-neutral-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-500) !important;\n    }\n  }\n  .dark\\:\\!text-orange-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-orange-500) !important;\n    }\n  }\n  .dark\\:\\!text-red-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-200) !important;\n    }\n  }\n  .dark\\:\\!text-red-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-500) !important;\n    }\n  }\n  .dark\\:\\!text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-white) !important;\n    }\n  }\n  .dark\\:text-\\(--shiki-dark\\)\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--shiki-dark) !important;\n    }\n  }\n  .dark\\:text-\\[\\#b73cdf\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      color: #b73cdf;\n    }\n  }\n  .dark\\:text-\\[\\#f85189\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      color: #f85189;\n    }\n  }\n  .dark\\:text-\\[\\#ffce4b\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      color: #ffce4b;\n    }\n  }\n  .dark\\:text-\\[var\\(--dark\\)\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--dark);\n    }\n  }\n  .dark\\:text-amber-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-amber-400);\n    }\n  }\n  .dark\\:text-black\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-black) !important;\n    }\n  }\n  .dark\\:text-blue-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-100);\n    }\n  }\n  .dark\\:text-blue-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-200);\n    }\n  }\n  .dark\\:text-blue-200\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: color-mix(in srgb, oklch(88.2% 0.059 254.128) 60%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--color-blue-200) 60%, transparent);\n      }\n    }\n  }\n  .dark\\:text-blue-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-300);\n    }\n  }\n  .dark\\:text-blue-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-400);\n    }\n  }\n  .dark\\:text-blue-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-500);\n    }\n  }\n  .dark\\:text-blue-500\\/75 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 75%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--color-blue-500) 75%, transparent);\n      }\n    }\n  }\n  .dark\\:text-blue-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-600);\n    }\n  }\n  .dark\\:text-blue-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-700);\n    }\n  }\n  .dark\\:text-blue-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-blue-950);\n    }\n  }\n  .dark\\:text-cl1-black {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-black);\n    }\n  }\n  .dark\\:text-cl1-blue-2 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-blue-2);\n    }\n  }\n  .dark\\:text-cl1-gold-7 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gold-7);\n    }\n  }\n  .dark\\:text-cl1-gray-0 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-0);\n    }\n  }\n  .dark\\:text-cl1-gray-0\\/70 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-0);\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--color-cl1-gray-0) 70%, transparent);\n      }\n    }\n  }\n  .dark\\:text-cl1-gray-1 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-1);\n    }\n  }\n  .dark\\:text-cl1-gray-2 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-2);\n    }\n  }\n  .dark\\:text-cl1-gray-3 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-3);\n    }\n  }\n  .dark\\:text-cl1-gray-4 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-4);\n    }\n  }\n  .dark\\:text-cl1-gray-6 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-6);\n    }\n  }\n  .dark\\:text-cl1-gray-7 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-7);\n    }\n  }\n  .dark\\:text-cl1-gray-8 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-8);\n    }\n  }\n  .dark\\:text-cl1-gray-9 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-gray-9);\n    }\n  }\n  .dark\\:text-cl1-pink-6 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-pink-6);\n    }\n  }\n  .dark\\:text-cl1-red-1 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-red-1);\n    }\n  }\n  .dark\\:text-cl1-violet-5 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-cl1-violet-5);\n    }\n  }\n  .dark\\:text-gray-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-gray-100);\n    }\n  }\n  .dark\\:text-gray-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-gray-200);\n    }\n  }\n  .dark\\:text-gray-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-gray-300);\n    }\n  }\n  .dark\\:text-gray-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-gray-400);\n    }\n  }\n  .dark\\:text-gray-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-gray-500);\n    }\n  }\n  .dark\\:text-green-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-100);\n    }\n  }\n  .dark\\:text-green-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-200);\n    }\n  }\n  .dark\\:text-green-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-300);\n    }\n  }\n  .dark\\:text-green-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-400);\n    }\n  }\n  .dark\\:text-green-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-500);\n    }\n  }\n  .dark\\:text-green-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-700);\n    }\n  }\n  .dark\\:text-green-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-green-800);\n    }\n  }\n  .dark\\:text-inherit {\n    &:where(.dark-mode, .dark-mode *) {\n      color: inherit;\n    }\n  }\n  .dark\\:text-muted {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--text-color-muted);\n    }\n  }\n  .dark\\:text-muted\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: color-mix(in srgb, light-dark(\n    var(--color-neutral-500, oklch(55.6% 0 0)),\n    var(--color-neutral-50, oklch(98.5% 0 0))\n  ) 60%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--text-color-muted) 60%, transparent);\n      }\n    }\n  }\n  .dark\\:text-neutral-50 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-50);\n    }\n  }\n  .dark\\:text-neutral-50\\! {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-50) !important;\n    }\n  }\n  .dark\\:text-neutral-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-100);\n    }\n  }\n  .dark\\:text-neutral-150 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-150);\n    }\n  }\n  .dark\\:text-neutral-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-200);\n    }\n  }\n  .dark\\:text-neutral-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-300);\n    }\n  }\n  .dark\\:text-neutral-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-400);\n    }\n  }\n  .dark\\:text-neutral-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-500);\n    }\n  }\n  .dark\\:text-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-600);\n    }\n  }\n  .dark\\:text-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-800);\n    }\n  }\n  .dark\\:text-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-neutral-900);\n    }\n  }\n  .dark\\:text-orange-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-orange-200);\n    }\n  }\n  .dark\\:text-orange-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-orange-400);\n    }\n  }\n  .dark\\:text-orange-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-orange-500);\n    }\n  }\n  .dark\\:text-primary {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--text-color-primary);\n    }\n  }\n  .dark\\:text-purple-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-purple-400);\n    }\n  }\n  .dark\\:text-red-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-100);\n    }\n  }\n  .dark\\:text-red-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-200);\n    }\n  }\n  .dark\\:text-red-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-300);\n    }\n  }\n  .dark\\:text-red-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-400);\n    }\n  }\n  .dark\\:text-red-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-500);\n    }\n  }\n  .dark\\:text-red-500\\/75 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 75%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--color-red-500) 75%, transparent);\n      }\n    }\n  }\n  .dark\\:text-red-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-600);\n    }\n  }\n  .dark\\:text-red-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-red-700);\n    }\n  }\n  .dark\\:text-surface {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--text-color-surface);\n    }\n  }\n  .dark\\:text-violet-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-violet-100);\n    }\n  }\n  .dark\\:text-violet-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-violet-400);\n    }\n  }\n  .dark\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-white);\n    }\n  }\n  .dark\\:text-white\\/60 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: color-mix(in srgb, #fff 60%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, var(--color-white) 60%, transparent);\n      }\n    }\n  }\n  .dark\\:text-yellow-100 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-yellow-100);\n    }\n  }\n  .dark\\:text-yellow-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-yellow-200);\n    }\n  }\n  .dark\\:text-yellow-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-yellow-300);\n    }\n  }\n  .dark\\:text-yellow-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-yellow-400);\n    }\n  }\n  .dark\\:text-yellow-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      color: var(--color-yellow-500);\n    }\n  }\n  .dark\\:opacity-10 {\n    &:where(.dark-mode, .dark-mode *) {\n      opacity: 10%;\n    }\n  }\n  .dark\\:opacity-50 {\n    &:where(.dark-mode, .dark-mode *) {\n      opacity: 50%;\n    }\n  }\n  .dark\\:shadow-\\[-1px_0_var\\(--color-neutral-800\\)\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-shadow: -1px 0 var(--tw-shadow-color, var(--color-neutral-800));\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .dark\\:shadow-\\[0_0_0_1px_rgba\\(255\\,255\\,255\\,0\\.5\\)_inset\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(255,255,255,0.5)) inset;\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .dark\\:shadow-\\[0_0_5px_6px_\\#111\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-shadow: 0 0 5px 6px var(--tw-shadow-color, #111);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .dark\\:shadow-none {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-shadow: 0 0 #0000;\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .dark\\:\\!ring-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-neutral-800) !important;\n    }\n  }\n  .dark\\:ring-amber-400\\/20 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(82.8% 0.189 84.429) 20%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-amber-400) 20%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-blue-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-blue-500);\n    }\n  }\n  .dark\\:ring-blue-600\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-blue-600) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-blue-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-blue-700);\n    }\n  }\n  .dark\\:ring-blue-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-blue-800);\n    }\n  }\n  .dark\\:ring-blue-900\\/90 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 90%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-blue-900) 90%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-border {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-border);\n    }\n  }\n  .dark\\:ring-color {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-color);\n    }\n  }\n  .dark\\:ring-green-500\\/40 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 40%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-green-500) 40%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-neutral-400\\/40 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(70.8% 0 0) 40%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-neutral-400) 40%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-neutral-600);\n    }\n  }\n  .dark\\:ring-neutral-600\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(43.9% 0 0) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-neutral-600) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-neutral-700);\n    }\n  }\n  .dark\\:ring-neutral-700\\/90 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(37.1% 0 0) 90%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-neutral-700) 90%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-neutral-800);\n    }\n  }\n  .dark\\:ring-orange-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-orange-700);\n    }\n  }\n  .dark\\:ring-red-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-red-700);\n    }\n  }\n  .dark\\:ring-red-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: color-mix(in srgb, oklch(44.4% 0.177 26.899) 50%, transparent);\n      @supports (color: color-mix(in lab, red, red)) {\n        --tw-ring-color: color-mix(in oklab, var(--color-red-800) 50%, transparent);\n      }\n    }\n  }\n  .dark\\:ring-yellow-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-yellow-500);\n    }\n  }\n  .dark\\:ring-yellow-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-color: var(--color-yellow-700);\n    }\n  }\n  .dark\\:ring-offset-neutral-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-ring-offset-color: var(--color-neutral-950);\n    }\n  }\n  .dark\\:-outline-offset-1 {\n    &:where(.dark-mode, .dark-mode *) {\n      outline-offset: calc(1px * -1);\n    }\n  }\n  .dark\\:outline-gray-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      outline-color: var(--color-gray-300);\n    }\n  }\n  .dark\\:outline-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      outline-color: var(--color-neutral-700);\n    }\n  }\n  .dark\\:invert {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-invert: invert(100%);\n      filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n    }\n  }\n  .dark\\:invert-0 {\n    &:where(.dark-mode, .dark-mode *) {\n      --tw-invert: invert(0%);\n      filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);\n    }\n  }\n  .dark\\:group-hover\\:bg-cl1-gray-7 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group):hover *) {\n        @media (hover: hover) {\n          background-color: var(--color-cl1-gray-7);\n        }\n      }\n    }\n  }\n  .dark\\:group-hover\\:text-blue-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group):hover *) {\n        @media (hover: hover) {\n          color: var(--color-blue-400);\n        }\n      }\n    }\n  }\n  .dark\\:group-hover\\:text-orange-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group):hover *) {\n        @media (hover: hover) {\n          color: var(--color-orange-400);\n        }\n      }\n    }\n  }\n  .dark\\:group-hover\\/choice\\:bg-neutral-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group\\/choice):hover *) {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, oklch(26.9% 0 0) 50%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-neutral-800) 50%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:group-hover\\/choice\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group\\/choice):hover *) {\n        @media (hover: hover) {\n          color: var(--color-white);\n        }\n      }\n    }\n  }\n  .dark\\:group-hover\\/expander\\:text-neutral-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group\\/expander):hover *) {\n        @media (hover: hover) {\n          color: var(--color-neutral-400);\n        }\n      }\n    }\n  }\n  .dark\\:group-focus-visible\\/escape\\:ring-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group\\/escape):focus-visible *) {\n        --tw-ring-color: var(--color-neutral-600);\n      }\n    }\n  }\n  .dark\\:group-data-\\[state\\=expanded\\]\\/sidebar\\:bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n        background-color: var(--color-neutral-900);\n      }\n    }\n  }\n  .dark\\:group-data-\\[state\\=expanded\\]\\/sidebar\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n        color: var(--color-white);\n      }\n    }\n  }\n  .group-data-\\[state\\=expanded\\]\\/sidebar\\:dark\\:text-white {\n    &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n      &:where(.dark-mode, .dark-mode *) {\n        color: var(--color-white);\n      }\n    }\n  }\n  .dark\\:peer-focus-visible\\:ring-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.peer):focus-visible ~ *) {\n        --tw-ring-color: var(--color-neutral-600);\n      }\n    }\n  }\n  .dark\\:selection\\:bg-blue-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      & *::selection {\n        background-color: var(--color-blue-900);\n      }\n      &::selection {\n        background-color: var(--color-blue-900);\n      }\n    }\n  }\n  .dark\\:selection\\:bg-red-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      & *::selection {\n        background-color: var(--color-red-900);\n      }\n      &::selection {\n        background-color: var(--color-red-900);\n      }\n    }\n  }\n  .dark\\:selection\\:bg-yellow-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      & *::selection {\n        background-color: var(--color-yellow-900);\n      }\n      &::selection {\n        background-color: var(--color-yellow-900);\n      }\n    }\n  }\n  .dark\\:placeholder\\:\\!text-cl1-gray-2 {\n    &:where(.dark-mode, .dark-mode *) {\n      &::placeholder {\n        color: var(--color-cl1-gray-2) !important;\n      }\n    }\n  }\n  .dark\\:placeholder\\:text-neutral-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      &::placeholder {\n        color: var(--color-neutral-500);\n      }\n    }\n  }\n  .before\\:dark\\:border-neutral-800 {\n    &::before {\n      content: var(--tw-content);\n      &:where(.dark-mode, .dark-mode *) {\n        border-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .dark\\:before\\:bg-neutral-900\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &::before {\n        content: var(--tw-content);\n        background-color: color-mix(in srgb, oklch(20.5% 0 0) 50%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-neutral-900) 50%, transparent);\n        }\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:dark\\:before\\:bg-black {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &:where(.dark-mode, .dark-mode *) {\n        &::before {\n          content: var(--tw-content);\n          background-color: var(--color-black);\n        }\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:dark\\:before\\:ring-neutral-600 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &:where(.dark-mode, .dark-mode *) {\n        &::before {\n          content: var(--tw-content);\n          --tw-ring-color: var(--color-neutral-600);\n        }\n      }\n    }\n  }\n  .after\\:dark\\:border-neutral-600\\/50 {\n    &::after {\n      content: var(--tw-content);\n      &:where(.dark-mode, .dark-mode *) {\n        border-color: color-mix(in srgb, oklch(43.9% 0 0) 50%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          border-color: color-mix(in oklab, var(--color-neutral-600) 50%, transparent);\n        }\n      }\n    }\n  }\n  .dark\\:after\\:bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      &::after {\n        content: var(--tw-content);\n        background-color: var(--color-neutral-900);\n      }\n    }\n  }\n  .after\\:dark\\:ring-neutral-100\\! {\n    &::after {\n      content: var(--tw-content);\n      &:where(.dark-mode, .dark-mode *) {\n        --tw-ring-color: var(--color-neutral-100) !important;\n      }\n    }\n  }\n  .dark\\:after\\:ring-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      &::after {\n        content: var(--tw-content);\n        --tw-ring-color: var(--color-neutral-700);\n      }\n    }\n  }\n  .dark\\:after\\:ring-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &::after {\n        content: var(--tw-content);\n        --tw-ring-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:dark\\:after\\:bg-black {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &:where(.dark-mode, .dark-mode *) {\n        &::after {\n          content: var(--tw-content);\n          background-color: var(--color-black);\n        }\n      }\n    }\n  }\n  .group-\\[\\:not\\(\\:last-child\\)\\]\\/row\\:dark\\:after\\:ring-neutral-600 {\n    &:is(:where(.group\\/row):is(:not(:last-child)) *) {\n      &:where(.dark-mode, .dark-mode *) {\n        &::after {\n          content: var(--tw-content);\n          --tw-ring-color: var(--color-neutral-600);\n        }\n      }\n    }\n  }\n  .dark\\:peer-focus-visible\\:after\\:ring-neutral-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.peer):focus-visible ~ *) {\n        &::after {\n          content: var(--tw-content);\n          --tw-ring-color: var(--color-neutral-950);\n        }\n      }\n    }\n  }\n  .focus-within\\:dark\\:border-neutral-600 {\n    &:focus-within {\n      &:where(.dark-mode, .dark-mode *) {\n        border-color: var(--color-neutral-600);\n      }\n    }\n  }\n  .dark\\:hover\\:border-blue-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          border-color: var(--color-blue-500);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:border-neutral-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          border-color: var(--color-neutral-500);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:border-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          border-color: var(--color-neutral-600);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:border-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          border-color: var(--color-neutral-700);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:border-neutral-700\\/80 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          border-color: color-mix(in srgb, oklch(37.1% 0 0) 80%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            border-color: color-mix(in oklab, var(--color-neutral-700) 80%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:\\!bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-800) !important;\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:\\!bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-900) !important;\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:\\!bg-red-950\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 50%, transparent) !important;\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-red-950) 50%, transparent) !important;\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:\\!bg-white {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-white) !important;\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-\\[\\#6B4FBB\\]\\/80 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: color-mix(in oklab, #6B4FBB 80%, transparent);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-\\[\\#E5621F\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: #E5621F;\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-blue-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-blue-500);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-blue-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-blue-600);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-blue-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-blue-700);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-blue-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-blue-800);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-blue-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-blue-950);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-cl1-gray-7 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-cl1-gray-7);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-cl1-gray-8 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-cl1-gray-8);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-gray-700\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, oklch(37.3% 0.034 259.733) 50%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-gray-700) 50%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-gray-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-gray-800);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-green-800\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, oklch(44.8% 0.119 151.328) 30%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-green-800) 30%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-600);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-700);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-700\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, oklch(37.1% 0 0) 50%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-neutral-700) 50%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-800);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, oklch(26.9% 0 0) 50%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-neutral-800) 50%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-900);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-900\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, oklch(20.5% 0 0) 50%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-neutral-900) 50%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-neutral-950 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-neutral-950);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-orange-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-orange-600);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-red-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-red-700);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-red-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-red-800);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-red-950\\/30 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 30%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-red-950) 30%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:bg-yellow-800\\/50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          background-color: color-mix(in srgb, oklch(47.6% 0.114 61.907) 50%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-yellow-800) 50%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .hover\\:dark\\:bg-neutral-800 {\n    &:hover {\n      @media (hover: hover) {\n        &:where(.dark-mode, .dark-mode *) {\n          background-color: var(--color-neutral-800);\n        }\n      }\n    }\n  }\n  .hover\\:dark\\:bg-neutral-800\\/90 {\n    &:hover {\n      @media (hover: hover) {\n        &:where(.dark-mode, .dark-mode *) {\n          background-color: color-mix(in srgb, oklch(26.9% 0 0) 90%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            background-color: color-mix(in oklab, var(--color-neutral-800) 90%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .hover\\:dark\\:bg-neutral-900 {\n    &:hover {\n      @media (hover: hover) {\n        &:where(.dark-mode, .dark-mode *) {\n          background-color: var(--color-neutral-900);\n        }\n      }\n    }\n  }\n  .hover\\:dark\\:bg-transparent {\n    &:hover {\n      @media (hover: hover) {\n        &:where(.dark-mode, .dark-mode *) {\n          background-color: transparent;\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:\\!text-neutral-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-neutral-300) !important;\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-blue-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-blue-300);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-blue-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-blue-400);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-cl1-gray-1 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-cl1-gray-1);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-gray-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-gray-300);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-neutral-50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-neutral-50);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-neutral-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-neutral-200);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-neutral-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-neutral-300);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-neutral-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-neutral-400);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-orange-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-orange-400);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-red-300 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-red-300);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          color: var(--color-white);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:shadow-blue-500\\/40 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          --tw-shadow-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 40%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-blue-500) 40%, transparent) var(--tw-shadow-alpha), transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:shadow-white\\/10 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          --tw-shadow-color: color-mix(in srgb, #fff 10%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-white) 10%, transparent) var(--tw-shadow-alpha), transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:ring-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          --tw-ring-color: var(--color-neutral-700);\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:ring-neutral-700\\/75 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          --tw-ring-color: color-mix(in srgb, oklch(37.1% 0 0) 75%, transparent);\n          @supports (color: color-mix(in lab, red, red)) {\n            --tw-ring-color: color-mix(in oklab, var(--color-neutral-700) 75%, transparent);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:hover\\:not-\\[\\:has\\(a\\:hover\\)\\]\\:bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:hover {\n        @media (hover: hover) {\n          &:not(*:is(:has(a:hover))) {\n            background-color: var(--color-neutral-900);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:focus\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus {\n        background-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .dark\\:focus\\:text-blue-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus {\n        color: var(--color-blue-400);\n      }\n    }\n  }\n  .dark\\:focus\\:ring-blue-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus {\n        --tw-ring-color: var(--color-blue-500);\n      }\n    }\n  }\n  .dark\\:focus\\:ring-neutral-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus {\n        --tw-ring-color: var(--color-neutral-500);\n      }\n    }\n  }\n  .dark\\:focus-visible\\:bg-cl1-gray-1 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus-visible {\n        background-color: var(--color-cl1-gray-1);\n      }\n    }\n  }\n  .dark\\:focus-visible\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus-visible {\n        background-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .dark\\:focus-visible\\:bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus-visible {\n        background-color: var(--color-neutral-900);\n      }\n    }\n  }\n  .dark\\:focus-visible\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus-visible {\n        color: var(--color-white);\n      }\n    }\n  }\n  .dark\\:focus-visible\\:ring-active {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus-visible {\n        --tw-ring-color: var(--color-active);\n      }\n    }\n  }\n  .dark\\:focus-visible\\:ring-neutral-200 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus-visible {\n        --tw-ring-color: var(--color-neutral-200);\n      }\n    }\n  }\n  .dark\\:focus-visible\\:ring-neutral-600 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus-visible {\n        --tw-ring-color: var(--color-neutral-600);\n      }\n    }\n  }\n  .dark\\:focus-visible\\:outline-cl1-blue-3 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:focus-visible {\n        outline-color: var(--color-cl1-blue-3);\n      }\n    }\n  }\n  .dark\\:group-data-\\[state\\=expanded\\]\\/sidebar\\:focus-visible\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group\\/sidebar)[data-state="expanded"] *) {\n        &:focus-visible {\n          background-color: var(--color-neutral-800);\n        }\n      }\n    }\n  }\n  .dark\\:active\\:text-blue-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:active {\n        color: var(--color-blue-400);\n      }\n    }\n  }\n  .dark\\:active\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      &:active {\n        color: var(--color-white);\n      }\n    }\n  }\n  .dark\\:disabled\\:\\!bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:disabled {\n        background-color: var(--color-neutral-800) !important;\n      }\n    }\n  }\n  .dark\\:disabled\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:disabled {\n        background-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .dark\\:disabled\\:\\!text-neutral-500 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:disabled {\n        color: var(--color-neutral-500) !important;\n      }\n    }\n  }\n  .dark\\:disabled\\:hover\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:disabled {\n        &:hover {\n          @media (hover: hover) {\n            background-color: var(--color-neutral-800);\n          }\n        }\n      }\n    }\n  }\n  .dark\\:has-\\[\\>header\\>a\\:focus\\]\\:bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:has(>header>a:focus) {\n        background-color: var(--color-neutral-900);\n      }\n    }\n  }\n  .dark\\:has-\\[\\>header\\>a\\:hover\\]\\:bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:has(>header>a:hover) {\n        background-color: var(--color-neutral-900);\n      }\n    }\n  }\n  .dark\\:group-data-\\[state\\=collapsed\\]\\/sidebar\\:data-\\[active\\=true\\]\\:bg-neutral-900 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n        &[data-active="true"] {\n          background-color: var(--color-neutral-900);\n        }\n      }\n    }\n  }\n  .dark\\:group-data-\\[state\\=collapsed\\]\\/sidebar\\:data-\\[active\\=true\\]\\:text-white {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:where(.group\\/sidebar)[data-state="collapsed"] *) {\n        &[data-active="true"] {\n          color: var(--color-white);\n        }\n      }\n    }\n  }\n  .data-\\[highlighted\\]\\:dark\\:bg-red-950 {\n    &[data-highlighted] {\n      &:where(.dark-mode, .dark-mode *) {\n        background-color: var(--color-red-950);\n      }\n    }\n  }\n  .dark\\:data-\\[side\\=bottom\\]\\:top-\\[-16px\\] {\n    &:where(.dark-mode, .dark-mode *) {\n      &[data-side="bottom"] {\n        top: -16px;\n      }\n    }\n  }\n  .dark\\:data-\\[state\\=open\\]\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &[data-state="open"] {\n        background-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .sm\\:dark\\:bg-neutral-800\\/50 {\n    @media (width >= 40rem) {\n      &:where(.dark-mode, .dark-mode *) {\n        background-color: color-mix(in srgb, oklch(26.9% 0 0) 50%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          background-color: color-mix(in oklab, var(--color-neutral-800) 50%, transparent);\n        }\n      }\n    }\n  }\n  .sm\\:dark\\:bg-transparent {\n    @media (width >= 40rem) {\n      &:where(.dark-mode, .dark-mode *) {\n        background-color: transparent;\n      }\n    }\n  }\n  .lg\\:dark\\:bg-black {\n    @media (width >= 64rem) {\n      &:where(.dark-mode, .dark-mode *) {\n        background-color: var(--color-black);\n      }\n    }\n  }\n  .lg\\:dark\\:ring-neutral-800 {\n    @media (width >= 64rem) {\n      &:where(.dark-mode, .dark-mode *) {\n        --tw-ring-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .print\\:hidden {\n    @media print {\n      display: none;\n    }\n  }\n  .hocus\\:bg-blue-100 {\n    &:is(:hover, :focus-visible) {\n      background-color: var(--color-blue-100);\n    }\n  }\n  .hocus\\:text-blue-800 {\n    &:is(:hover, :focus-visible) {\n      color: var(--color-blue-800);\n    }\n  }\n  .hocus\\:text-neutral-700 {\n    &:is(:hover, :focus-visible) {\n      color: var(--color-neutral-700);\n    }\n  }\n  .hocus\\:opacity-50 {\n    &:is(:hover, :focus-visible) {\n      opacity: 50%;\n    }\n  }\n  .hocus\\:opacity-100 {\n    &:is(:hover, :focus-visible) {\n      opacity: 100%;\n    }\n  }\n  .dark\\:hocus\\:text-blue-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:hover, :focus-visible) {\n        color: var(--color-blue-400);\n      }\n    }\n  }\n  .dark\\:hocus\\:text-neutral-50 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:is(:hover, :focus-visible) {\n        color: var(--color-neutral-50);\n      }\n    }\n  }\n  .\\[\\&_\\*\\]\\:\\!border-r-0 {\n    & * {\n      border-right-style: var(--tw-border-style) !important;\n      border-right-width: 0px !important;\n    }\n  }\n  .\\[\\&_\\*\\]\\:\\!border-l-0 {\n    & * {\n      border-left-style: var(--tw-border-style) !important;\n      border-left-width: 0px !important;\n    }\n  }\n  .\\[\\&_\\*\\]\\:break-words {\n    & * {\n      overflow-wrap: break-word;\n    }\n  }\n  .data-\\[resizing\\=true\\]\\:\\[\\&_\\*\\]\\:\\!animate-none {\n    &[data-resizing="true"] {\n      & * {\n        animation: none !important;\n      }\n    }\n  }\n  .data-\\[resizing\\=true\\]\\:\\[\\&_\\*\\]\\:\\!transition-none {\n    &[data-resizing="true"] {\n      & * {\n        transition-property: none !important;\n      }\n    }\n  }\n  .data-\\[resizing\\=true\\]\\:\\[\\&_\\*\\]\\:\\!duration-0 {\n    &[data-resizing="true"] {\n      & * {\n        --tw-duration: 0ms !important;\n        transition-duration: 0ms !important;\n      }\n    }\n  }\n  .\\[\\&_\\*\\:after\\]\\:\\!border-r-0 {\n    & *:after {\n      border-right-style: var(--tw-border-style) !important;\n      border-right-width: 0px !important;\n    }\n  }\n  .\\[\\&_\\*\\:before\\]\\:\\!border-l-0 {\n    & *:before {\n      border-left-style: var(--tw-border-style) !important;\n      border-left-width: 0px !important;\n    }\n  }\n  .hover\\:\\[\\&_\\.linkText\\]\\:underline {\n    &:hover {\n      @media (hover: hover) {\n        & .linkText {\n          text-decoration-line: underline;\n        }\n      }\n    }\n  }\n  .hover\\:\\[\\&_\\.linkText\\]\\:decoration-dotted {\n    &:hover {\n      @media (hover: hover) {\n        & .linkText {\n          text-decoration-style: dotted;\n        }\n      }\n    }\n  }\n  .\\[\\&_\\[data-toast-icon\\]\\]\\:text-\\[light-dark\\(var\\(--color-amber-700\\)\\,var\\(--color-amber-500\\)\\)\\] {\n    & [data-toast-icon] {\n      color: light-dark(var(--color-amber-700),var(--color-amber-500));\n    }\n  }\n  .\\[\\&_\\[data-toast-icon\\]\\]\\:text-\\[light-dark\\(var\\(--color-red-600\\)\\,var\\(--color-red-400\\)\\)\\] {\n    & [data-toast-icon] {\n      color: light-dark(var(--color-red-600),var(--color-red-400));\n    }\n  }\n  .\\[\\&_\\[data-toast-title\\]\\]\\:text-\\[light-dark\\(var\\(--color-amber-700\\)\\,var\\(--color-amber-500\\)\\)\\] {\n    & [data-toast-title] {\n      color: light-dark(var(--color-amber-700),var(--color-amber-500));\n    }\n  }\n  .\\[\\&_\\[data-toast-title\\]\\]\\:text-\\[light-dark\\(var\\(--color-red-600\\)\\,var\\(--color-red-400\\)\\)\\] {\n    & [data-toast-title] {\n      color: light-dark(var(--color-red-600),var(--color-red-400));\n    }\n  }\n  .\\[\\&_\\[role\\=\\\'rowgroup\\\'\\]\\]\\:divide-y {\n    & [role=\'rowgroup\'] {\n      :where(& > :not(:last-child)) {\n        --tw-divide-y-reverse: 0;\n        border-bottom-style: var(--tw-border-style);\n        border-top-style: var(--tw-border-style);\n        border-top-width: calc(1px * var(--tw-divide-y-reverse));\n        border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n      }\n    }\n  }\n  .\\[\\&_\\[role\\=\\\'rowgroup\\\'\\]\\]\\:divide-neutral-950\\/10 {\n    & [role=\'rowgroup\'] {\n      :where(& > :not(:last-child)) {\n        border-color: color-mix(in srgb, oklch(14.5% 0 0) 10%, transparent);\n        @supports (color: color-mix(in lab, red, red)) {\n          border-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);\n        }\n      }\n    }\n  }\n  .dark\\:\\[\\&_\\[role\\=\\\'rowgroup\\\'\\]\\]\\:divide-neutral-700 {\n    &:where(.dark-mode, .dark-mode *) {\n      & [role=\'rowgroup\'] {\n        :where(& > :not(:last-child)) {\n          border-color: var(--color-neutral-700);\n        }\n      }\n    }\n  }\n  .\\[\\&_\\[role\\=cell\\]\\:has\\(\\>_label\\)\\]\\:grid {\n    & [role=cell]:has(> label) {\n      display: grid;\n    }\n  }\n  .\\[\\&_\\[role\\=cell\\]\\:has\\(\\>_label\\)\\]\\:place-content-center {\n    & [role=cell]:has(> label) {\n      place-content: center;\n    }\n  }\n  .\\[\\&_\\[role\\=cell\\]\\:has\\(\\[aria-label\\=Actions\\]\\)\\]\\:grid {\n    & [role=cell]:has([aria-label=Actions]) {\n      display: grid;\n    }\n  }\n  .\\[\\&_\\[role\\=cell\\]\\:has\\(\\[aria-label\\=Actions\\]\\)\\]\\:place-content-center {\n    & [role=cell]:has([aria-label=Actions]) {\n      place-content: center;\n    }\n  }\n  .\\[\\&_\\[role\\=menu\\]_div\\:last-of-type\\]\\:\\!mb-0 {\n    & [role=menu] div:last-of-type {\n      margin-bottom: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .\\[\\&_\\[role\\=menu\\]_h2\\]\\:hidden {\n    & [role=menu] h2 {\n      display: none;\n    }\n  }\n  .\\[\\&_\\[role\\=rowgroup\\]\\:last-child_\\[role\\=row\\]\\:last-child_\\[role\\=cell\\]\\]\\:\\!border-b-0 {\n    & [role=rowgroup]:last-child [role=row]:last-child [role=cell] {\n      border-bottom-style: var(--tw-border-style) !important;\n      border-bottom-width: 0px !important;\n    }\n  }\n  .\\[\\&_\\[role\\=table\\]\\]\\:mx-auto\\! {\n    & [role=table] {\n      margin-inline: auto !important;\n    }\n  }\n  .\\[\\&_\\[role\\=table\\]\\]\\:max-w-full {\n    & [role=table] {\n      max-width: 100%;\n    }\n  }\n  .\\[\\&_\\[role\\=table\\]\\]\\:rounded\\! {\n    & [role=table] {\n      border-radius: 0.25rem !important;\n    }\n  }\n  .\\[\\&_\\[role\\=table\\]\\]\\:p-0\\! {\n    & [role=table] {\n      padding: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .\\[\\&_a\\]\\:cursor-pointer {\n    & a {\n      cursor: pointer;\n    }\n  }\n  .\\[\\&_a\\]\\:font-medium {\n    & a {\n      --tw-font-weight: var(--font-weight-medium);\n      font-weight: var(--font-weight-medium);\n    }\n  }\n  .\\[\\&_a\\]\\:break-words {\n    & a {\n      overflow-wrap: break-word;\n    }\n  }\n  .\\[\\&_a\\]\\:text-blue-600 {\n    & a {\n      color: var(--color-blue-600);\n    }\n  }\n  .\\[\\&_a\\]\\:text-cl1-cyan-1 {\n    & a {\n      color: var(--color-cl1-cyan-1);\n    }\n  }\n  .\\[\\&_a\\]\\:no-underline {\n    & a {\n      text-decoration-line: none;\n    }\n  }\n  .\\[\\&_a\\]\\:underline {\n    & a {\n      text-decoration-line: underline;\n    }\n  }\n  .\\[\\&_a\\]\\:decoration-\\[0\\.5px\\] {\n    & a {\n      text-decoration-thickness: 0.5px;\n    }\n  }\n  .\\[\\&_a\\]\\:underline-offset-2 {\n    & a {\n      text-underline-offset: 2px;\n    }\n  }\n  .\\[\\&_a\\]\\:hover\\:bg-cl1-cyan-8 {\n    & a {\n      &:hover {\n        @media (hover: hover) {\n          background-color: var(--color-cl1-cyan-8);\n        }\n      }\n    }\n  }\n  .\\[\\&_a\\]\\:active\\:bg-cl1-cyan-7 {\n    & a {\n      &:active {\n        background-color: var(--color-cl1-cyan-7);\n      }\n    }\n  }\n  .dark\\:\\[\\&_a\\]\\:text-blue-400 {\n    &:where(.dark-mode, .dark-mode *) {\n      & a {\n        color: var(--color-blue-400);\n      }\n    }\n  }\n  .\\[\\&_a\\]\\:hover\\:dark\\:bg-cl1-gray-8 {\n    & a {\n      &:hover {\n        @media (hover: hover) {\n          &:where(.dark-mode, .dark-mode *) {\n            background-color: var(--color-cl1-gray-8);\n          }\n        }\n      }\n    }\n  }\n  .\\[\\&_a\\]\\:active\\:dark\\:bg-cl1-cyan-7 {\n    & a {\n      &:active {\n        &:where(.dark-mode, .dark-mode *) {\n          background-color: var(--color-cl1-cyan-7);\n        }\n      }\n    }\n  }\n  .\\[\\&_a\\:hover\\]\\:underline {\n    & a:hover {\n      text-decoration-line: underline;\n    }\n  }\n  .\\[\\&_blockquote\\]\\:my-2 {\n    & blockquote {\n      margin-block: calc(var(--spacing) * 2);\n    }\n  }\n  .\\[\\&_blockquote\\]\\:border-l-2 {\n    & blockquote {\n      border-left-style: var(--tw-border-style);\n      border-left-width: 2px;\n    }\n  }\n  .\\[\\&_blockquote\\]\\:border-neutral-300 {\n    & blockquote {\n      border-color: var(--color-neutral-300);\n    }\n  }\n  .\\[\\&_blockquote\\]\\:pl-3 {\n    & blockquote {\n      padding-left: calc(var(--spacing) * 3);\n    }\n  }\n  .\\[\\&_blockquote\\]\\:italic {\n    & blockquote {\n      font-style: italic;\n    }\n  }\n  .\\[\\&_button\\]\\:\\!flex {\n    & button {\n      display: flex !important;\n    }\n  }\n  .\\[\\&_button\\]\\:w-max {\n    & button {\n      width: max-content;\n    }\n  }\n  .hover\\:\\[\\&_button\\]\\:opacity-50 {\n    &:hover {\n      @media (hover: hover) {\n        & button {\n          opacity: 50%;\n        }\n      }\n    }\n  }\n  .\\[\\&_button\\,\\[href\\]\\]\\:pointer-events-none {\n    & button,[href] {\n      pointer-events: none;\n    }\n  }\n  .\\[\\&_code\\]\\:rounded {\n    & code {\n      border-radius: 0.25rem;\n    }\n  }\n  .\\[\\&_code\\]\\:bg-neutral-100 {\n    & code {\n      background-color: var(--color-neutral-100);\n    }\n  }\n  .\\[\\&_code\\]\\:px-1 {\n    & code {\n      padding-inline: calc(var(--spacing) * 1);\n    }\n  }\n  .\\[\\&_code\\]\\:py-0\\.5 {\n    & code {\n      padding-block: calc(var(--spacing) * 0.5);\n    }\n  }\n  .\\[\\&_code\\]\\:text-xs {\n    & code {\n      font-size: var(--text-xs);\n      line-height: var(--tw-leading, var(--text-xs--line-height));\n    }\n  }\n  .\\[\\&_code\\]\\:before\\:content-\\[\\\'\\\'\\] {\n    & code {\n      &::before {\n        --tw-content: \'\';\n        content: var(--tw-content);\n      }\n    }\n  }\n  .\\[\\&_code\\]\\:after\\:content-\\[\\\'\\\'\\] {\n    & code {\n      &::after {\n        --tw-content: \'\';\n        content: var(--tw-content);\n      }\n    }\n  }\n  .dark\\:\\[\\&_code\\]\\:bg-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      & code {\n        background-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .\\[\\&_div\\]\\:\\!min-h-\\[27\\.5px\\] {\n    & div {\n      min-height: 27.5px !important;\n    }\n  }\n  .\\[\\&_div\\]\\:\\!py-0 {\n    & div {\n      padding-block: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .\\[\\&_div\\]\\:first\\:my-0 {\n    & div {\n      &:first-child {\n        margin-block: calc(var(--spacing) * 0);\n      }\n    }\n  }\n  .\\[\\&_div_div_svg\\]\\:w-full {\n    & div div svg {\n      width: 100%;\n    }\n  }\n  .\\[\\&_div\\:first-child\\]\\:col-span-6 {\n    & div:first-child {\n      grid-column: span 6 / span 6;\n    }\n  }\n  .\\[\\&_div\\:last-child\\]\\:col-span-4 {\n    & div:last-child {\n      grid-column: span 4 / span 4;\n    }\n  }\n  .xl\\:\\[\\&_div\\:last-child\\]\\:justify-end {\n    @media (width >= 80rem) {\n      & div:last-child {\n        justify-content: flex-end;\n      }\n    }\n  }\n  .\\[\\&_div\\>div\\>div\\]\\:last\\:shrink-0 {\n    & div>div>div {\n      &:last-child {\n        flex-shrink: 0;\n      }\n    }\n  }\n  .\\[\\&_dt\\]\\:text-base {\n    & dt {\n      font-size: var(--text-base);\n      line-height: var(--tw-leading, var(--text-base--line-height));\n    }\n  }\n  .\\[\\&_h1\\]\\:mt-4 {\n    & h1 {\n      margin-top: calc(var(--spacing) * 4);\n    }\n  }\n  .\\[\\&_h1\\]\\:mb-2 {\n    & h1 {\n      margin-bottom: calc(var(--spacing) * 2);\n    }\n  }\n  .\\[\\&_h1\\]\\:text-lg {\n    & h1 {\n      font-size: var(--text-lg);\n      line-height: var(--tw-leading, var(--text-lg--line-height));\n    }\n  }\n  .\\[\\&_h1\\]\\:leading-tight {\n    & h1 {\n      --tw-leading: var(--leading-tight);\n      line-height: var(--leading-tight);\n    }\n  }\n  .\\[\\&_h1\\]\\:font-bold {\n    & h1 {\n      --tw-font-weight: var(--font-weight-bold);\n      font-weight: var(--font-weight-bold);\n    }\n  }\n  .\\[\\&_h2\\]\\:mt-4 {\n    & h2 {\n      margin-top: calc(var(--spacing) * 4);\n    }\n  }\n  .\\[\\&_h2\\]\\:mb-2 {\n    & h2 {\n      margin-bottom: calc(var(--spacing) * 2);\n    }\n  }\n  .\\[\\&_h2\\]\\:text-base {\n    & h2 {\n      font-size: var(--text-base);\n      line-height: var(--tw-leading, var(--text-base--line-height));\n    }\n  }\n  .\\[\\&_h2\\]\\:leading-tight {\n    & h2 {\n      --tw-leading: var(--leading-tight);\n      line-height: var(--leading-tight);\n    }\n  }\n  .\\[\\&_h2\\]\\:font-bold {\n    & h2 {\n      --tw-font-weight: var(--font-weight-bold);\n      font-weight: var(--font-weight-bold);\n    }\n  }\n  .\\[\\&_h3\\]\\:mt-3 {\n    & h3 {\n      margin-top: calc(var(--spacing) * 3);\n    }\n  }\n  .\\[\\&_h3\\]\\:mb-1\\.5 {\n    & h3 {\n      margin-bottom: calc(var(--spacing) * 1.5);\n    }\n  }\n  .\\[\\&_h3\\]\\:text-sm {\n    & h3 {\n      font-size: var(--text-sm);\n      line-height: var(--tw-leading, var(--text-sm--line-height));\n    }\n  }\n  .\\[\\&_h3\\]\\:leading-tight {\n    & h3 {\n      --tw-leading: var(--leading-tight);\n      line-height: var(--leading-tight);\n    }\n  }\n  .\\[\\&_h3\\]\\:font-bold {\n    & h3 {\n      --tw-font-weight: var(--font-weight-bold);\n      font-weight: var(--font-weight-bold);\n    }\n  }\n  .\\[\\&_h4\\]\\:mt-3 {\n    & h4 {\n      margin-top: calc(var(--spacing) * 3);\n    }\n  }\n  .\\[\\&_h4\\]\\:mb-1\\.5 {\n    & h4 {\n      margin-bottom: calc(var(--spacing) * 1.5);\n    }\n  }\n  .\\[\\&_h4\\]\\:text-sm {\n    & h4 {\n      font-size: var(--text-sm);\n      line-height: var(--tw-leading, var(--text-sm--line-height));\n    }\n  }\n  .\\[\\&_h4\\]\\:leading-tight {\n    & h4 {\n      --tw-leading: var(--leading-tight);\n      line-height: var(--leading-tight);\n    }\n  }\n  .\\[\\&_h4\\]\\:font-semibold {\n    & h4 {\n      --tw-font-weight: var(--font-weight-semibold);\n      font-weight: var(--font-weight-semibold);\n    }\n  }\n  .\\[\\&_input\\]\\:m-0 {\n    & input {\n      margin: calc(var(--spacing) * 0);\n    }\n  }\n  .\\[\\&_input\\]\\:m-0\\! {\n    & input {\n      margin: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .\\[\\&_input\\]\\:\\!border-transparent {\n    & input {\n      border-color: transparent !important;\n    }\n  }\n  .\\[\\&_label\\]\\:mb-0 {\n    & label {\n      margin-bottom: calc(var(--spacing) * 0);\n    }\n  }\n  .\\[\\&_li\\]\\:my-0\\.5 {\n    & li {\n      margin-block: calc(var(--spacing) * 0.5);\n    }\n  }\n  .\\[\\&_li\\]\\:leading-\\[1\\.6\\] {\n    & li {\n      --tw-leading: 1.6;\n      line-height: 1.6;\n    }\n  }\n  .\\[\\&_ol\\]\\:my-2 {\n    & ol {\n      margin-block: calc(var(--spacing) * 2);\n    }\n  }\n  .\\[\\&_ol\\]\\:pl-5 {\n    & ol {\n      padding-left: calc(var(--spacing) * 5);\n    }\n  }\n  .\\[\\&_p\\]\\:my-0 {\n    & p {\n      margin-block: calc(var(--spacing) * 0);\n    }\n  }\n  .\\[\\&_p\\]\\:leading-\\[1\\.6\\] {\n    & p {\n      --tw-leading: 1.6;\n      line-height: 1.6;\n    }\n  }\n  .\\[\\&_pre\\]\\:my-2 {\n    & pre {\n      margin-block: calc(var(--spacing) * 2);\n    }\n  }\n  .\\[\\&_pre\\]\\:overflow-x-auto {\n    & pre {\n      overflow-x: auto;\n    }\n  }\n  .\\[\\&_pre\\]\\:pr-12 {\n    & pre {\n      padding-right: calc(var(--spacing) * 12);\n    }\n  }\n  .\\[\\&_pre\\]\\:text-xs {\n    & pre {\n      font-size: var(--text-xs);\n      line-height: var(--tw-leading, var(--text-xs--line-height));\n    }\n  }\n  .\\[\\&_pre\\]\\:break-all {\n    & pre {\n      word-break: break-all;\n    }\n  }\n  .\\[\\&_pre\\]\\:whitespace-pre-wrap {\n    & pre {\n      white-space: pre-wrap;\n    }\n  }\n  .\\[\\&_pre_code\\]\\:bg-transparent {\n    & pre code {\n      background-color: transparent;\n    }\n  }\n  .\\[\\&_pre_code\\]\\:p-0 {\n    & pre code {\n      padding: calc(var(--spacing) * 0);\n    }\n  }\n  .\\[\\&_span\\]\\:w-full {\n    & span {\n      width: 100%;\n    }\n  }\n  .\\[\\&_span\\]\\:min-w-0 {\n    & span {\n      min-width: calc(var(--spacing) * 0);\n    }\n  }\n  .\\[\\&_span\\]\\:truncate {\n    & span {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n  .\\[\\&_strong\\]\\:font-semibold {\n    & strong {\n      --tw-font-weight: var(--font-weight-semibold);\n      font-weight: var(--font-weight-semibold);\n    }\n  }\n  .\\[\\&_svg\\]\\:pointer-events-none {\n    & svg {\n      pointer-events: none;\n    }\n  }\n  .\\[\\&_svg\\]\\:hidden {\n    & svg {\n      display: none;\n    }\n  }\n  .\\[\\&_svg\\]\\:h-auto {\n    & svg {\n      height: auto;\n    }\n  }\n  .\\[\\&_svg\\]\\:w-auto {\n    & svg {\n      width: auto;\n    }\n  }\n  .\\[\\&_svg\\]\\:transition-transform {\n    & svg {\n      transition-property: transform, translate, scale, rotate;\n      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n      transition-duration: var(--tw-duration, var(--default-transition-duration));\n    }\n  }\n  .\\[\\&_svg\\]\\:duration-\\[122ms\\] {\n    & svg {\n      --tw-duration: 122ms;\n      transition-duration: 122ms;\n    }\n  }\n  .hover\\:\\[\\&_svg\\]\\:scale-\\[1\\.1333\\] {\n    &:hover {\n      @media (hover: hover) {\n        & svg {\n          scale: 1.1333;\n        }\n      }\n    }\n  }\n  .\\[\\&_table\\]\\:\\!mx-0 {\n    & table {\n      margin-inline: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .\\[\\&_table\\]\\:h-\\[1px\\] {\n    & table {\n      height: 1px;\n    }\n  }\n  .\\[\\&_table\\]\\:\\!w-full {\n    & table {\n      width: 100% !important;\n    }\n  }\n  .\\[\\&_table\\]\\:\\!bg-transparent {\n    & table {\n      background-color: transparent !important;\n    }\n  }\n  .\\[\\&_table\\]\\:\\!px-0 {\n    & table {\n      padding-inline: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .\\[\\&_table_tbody_tr_td\\:last-child\\]\\:h-full {\n    & table tbody tr td:last-child {\n      height: 100%;\n    }\n  }\n  .\\[\\&_td\\]\\:\\!border-border {\n    & td {\n      border-color: var(--color-border) !important;\n    }\n  }\n  .\\[\\&_td\\]\\:bg-surface {\n    & td {\n      background-color: var(--color-surface);\n    }\n  }\n  .\\[\\&_td\\]\\:py-2 {\n    & td {\n      padding-block: calc(var(--spacing) * 2);\n    }\n  }\n  .\\[\\&_textarea\\]\\:resize-none {\n    & textarea {\n      resize: none;\n    }\n  }\n  .\\[\\&_textarea\\]\\:font-sans {\n    & textarea {\n      font-family: var(--font-sans);\n    }\n  }\n  .\\[\\&_th\\]\\:rounded-t {\n    & th {\n      border-top-left-radius: 0.25rem;\n      border-top-right-radius: 0.25rem;\n    }\n  }\n  .\\[\\&_th\\]\\:border-t {\n    & th {\n      border-top-style: var(--tw-border-style);\n      border-top-width: 1px;\n    }\n  }\n  .\\[\\&_th\\]\\:border-border {\n    & th {\n      border-color: var(--color-border);\n    }\n  }\n  .\\[\\&_th\\]\\:\\!bg-surface {\n    & th {\n      background-color: var(--color-surface) !important;\n    }\n  }\n  .\\[\\&_th\\]\\:first\\:rounded-tl-lg {\n    & th {\n      &:first-child {\n        border-top-left-radius: var(--radius-lg);\n      }\n    }\n  }\n  .\\[\\&_th\\]\\:first\\:border-l {\n    & th {\n      &:first-child {\n        border-left-style: var(--tw-border-style);\n        border-left-width: 1px;\n      }\n    }\n  }\n  .\\[\\&_th\\]\\:last\\:rounded-tr-lg {\n    & th {\n      &:last-child {\n        border-top-right-radius: var(--radius-lg);\n      }\n    }\n  }\n  .\\[\\&_th\\]\\:last\\:border-r {\n    & th {\n      &:last-child {\n        border-right-style: var(--tw-border-style);\n        border-right-width: 1px;\n      }\n    }\n  }\n  .\\[\\&_tr\\]\\:\\[\\&_td\\]\\:first\\:border-l {\n    & tr {\n      & td {\n        &:first-child {\n          border-left-style: var(--tw-border-style);\n          border-left-width: 1px;\n        }\n      }\n    }\n  }\n  .\\[\\&_tr\\]\\:last\\:\\[\\&_td\\]\\:last\\:rounded-br-lg {\n    & tr {\n      &:last-child {\n        & td {\n          &:last-child {\n            border-bottom-right-radius: var(--radius-lg);\n          }\n        }\n      }\n    }\n  }\n  .\\[\\&_tr\\]\\:\\[\\&_td\\]\\:last\\:border-r {\n    & tr {\n      & td {\n        &:last-child {\n          border-right-style: var(--tw-border-style);\n          border-right-width: 1px;\n        }\n      }\n    }\n  }\n  .\\[\\&_tr\\]\\:last\\:\\[\\&_td\\]\\:first\\:rounded-bl-lg {\n    & tr {\n      &:last-child {\n        & td {\n          &:first-child {\n            border-bottom-left-radius: var(--radius-lg);\n          }\n        }\n      }\n    }\n  }\n  .\\[\\&_tr_td\\]\\:border-b {\n    & tr td {\n      border-bottom-style: var(--tw-border-style);\n      border-bottom-width: 1px;\n    }\n  }\n  .\\[\\&_tr_td\\]\\:border-kumo-fill {\n    & tr td {\n      border-color: var(--color-kumo-fill);\n    }\n  }\n  .\\[\\&_tr_td\\]\\:p-3 {\n    & tr td {\n      padding: calc(var(--spacing) * 3);\n    }\n  }\n  .\\[\\&_tr_th\\]\\:border-b {\n    & tr th {\n      border-bottom-style: var(--tw-border-style);\n      border-bottom-width: 1px;\n    }\n  }\n  .\\[\\&_tr_th\\]\\:border-kumo-fill {\n    & tr th {\n      border-color: var(--color-kumo-fill);\n    }\n  }\n  .\\[\\&_tr_th\\]\\:bg-kumo-base {\n    & tr th {\n      background-color: var(--color-kumo-base);\n    }\n  }\n  .\\[\\&_tr_th\\]\\:p-3 {\n    & tr th {\n      padding: calc(var(--spacing) * 3);\n    }\n  }\n  .\\[\\&_tr_th\\]\\:font-semibold {\n    & tr th {\n      --tw-font-weight: var(--font-weight-semibold);\n      font-weight: var(--font-weight-semibold);\n    }\n  }\n  .\\[\\&_tr\\:last-child_td\\]\\:border-b-0 {\n    & tr:last-child td {\n      border-bottom-style: var(--tw-border-style);\n      border-bottom-width: 0px;\n    }\n  }\n  .\\[\\&_ul\\]\\:my-2 {\n    & ul {\n      margin-block: calc(var(--spacing) * 2);\n    }\n  }\n  .\\[\\&_ul\\]\\:pl-5 {\n    & ul {\n      padding-left: calc(var(--spacing) * 5);\n    }\n  }\n  .\\[\\&_ul_li\\:last-child\\]\\:\\!border-b-0 {\n    & ul li:last-child {\n      border-bottom-style: var(--tw-border-style) !important;\n      border-bottom-width: 0px !important;\n    }\n  }\n  .\\[\\&_ul_li\\:last-child_dl_dd\\:last-of-type\\]\\:\\!border-b-0 {\n    & ul li:last-child dl dd:last-of-type {\n      border-bottom-style: var(--tw-border-style) !important;\n      border-bottom-width: 0px !important;\n    }\n  }\n  .\\[\\&_ul_li\\:last-child_dl_dt\\:last-of-type\\]\\:\\!border-b-0 {\n    & ul li:last-child dl dt:last-of-type {\n      border-bottom-style: var(--tw-border-style) !important;\n      border-bottom-width: 0px !important;\n    }\n  }\n  .\\[\\&\\:\\:-webkit-calendar-picker-indicator\\]\\:hidden {\n    &::-webkit-calendar-picker-indicator {\n      display: none;\n    }\n  }\n  .\\[\\&\\:\\:-webkit-calendar-picker-indicator\\]\\:appearance-none {\n    &::-webkit-calendar-picker-indicator {\n      appearance: none;\n    }\n  }\n  .\\[\\&\\:focus-within\\>span\\]\\:ring-kumo-ring {\n    &:focus-within>span {\n      --tw-ring-color: var(--color-kumo-ring);\n    }\n  }\n  .\\[\\&\\:has\\(\\:focus-within\\)\\]\\:ring-active {\n    &:has(:focus-within) {\n      --tw-ring-color: var(--color-active);\n    }\n  }\n  .\\[\\&\\:has\\(\\:focus-within\\)\\]\\:ring-kumo-ring {\n    &:has(:focus-within) {\n      --tw-ring-color: var(--color-kumo-ring);\n    }\n  }\n  .\\[\\&\\:hover\\>span\\]\\:ring-kumo-ring {\n    &:hover>span {\n      --tw-ring-color: var(--color-kumo-ring);\n    }\n  }\n  .\\[\\&\\:not\\(\\:last-child\\)\\]\\:border-x-0 {\n    &:not(:last-child) {\n      border-inline-style: var(--tw-border-style);\n      border-inline-width: 0px;\n    }\n  }\n  .\\[\\&\\:not\\(\\:last-child\\)\\]\\:border-t-0 {\n    &:not(:last-child) {\n      border-top-style: var(--tw-border-style);\n      border-top-width: 0px;\n    }\n  }\n  .\\[\\&\\:not\\(\\:last-child\\)\\]\\:border-b {\n    &:not(:last-child) {\n      border-bottom-style: var(--tw-border-style);\n      border-bottom-width: 1px;\n    }\n  }\n  .\\[\\&\\:not\\(\\:last-child\\)\\]\\:border-dashed {\n    &:not(:last-child) {\n      --tw-border-style: dashed;\n      border-style: dashed;\n    }\n  }\n  .\\[\\&\\:not\\(\\:last-child\\)\\]\\:border-neutral-250 {\n    &:not(:last-child) {\n      border-color: var(--color-neutral-250);\n    }\n  }\n  .dark\\:\\[\\&\\:not\\(\\:last-child\\)\\]\\:border-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &:not(:last-child) {\n        border-color: var(--color-neutral-800);\n      }\n    }\n  }\n  .\\[\\&\\>\\*\\]\\:col-start-2 {\n    &>* {\n      grid-column-start: 2;\n    }\n  }\n  .\\[\\&\\>\\*\\]\\:border {\n    &>* {\n      border-style: var(--tw-border-style);\n      border-width: 1px;\n    }\n  }\n  .\\[\\&\\>\\*\\]\\:border-neutral-300 {\n    &>* {\n      border-color: var(--color-neutral-300);\n    }\n  }\n  .\\[\\&\\>\\*\\]\\:\\!p-0 {\n    &>* {\n      padding: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .\\[\\&\\>\\*\\]\\:align-middle {\n    &>* {\n      vertical-align: middle;\n    }\n  }\n  .\\[\\&\\>\\*\\]\\:dark\\:border-neutral-700 {\n    &>* {\n      &:where(.dark-mode, .dark-mode *) {\n        border-color: var(--color-neutral-700);\n      }\n    }\n  }\n  .\\[\\&\\>\\*\\>div\\]\\:\\!p-0 {\n    &>*>div {\n      padding: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .\\[\\&\\>\\[data-disabled\\]\\]\\:cursor-default {\n    &>[data-disabled] {\n      cursor: default;\n    }\n  }\n  .\\[\\&\\>\\[data-disabled\\]\\]\\:text-disabled {\n    &>[data-disabled] {\n      color: var(--text-color-disabled);\n    }\n  }\n  .\\[\\&\\>div\\]\\:\\!block {\n    &>div {\n      display: block !important;\n    }\n  }\n  .\\[\\&\\>div\\]\\:\\!flex {\n    &>div {\n      display: flex !important;\n    }\n  }\n  .\\[\\&\\>div\\]\\:\\!h-full {\n    &>div {\n      height: 100% !important;\n    }\n  }\n  .\\[\\&\\>div\\]\\:h-full {\n    &>div {\n      height: 100%;\n    }\n  }\n  .\\[\\&\\>div\\]\\:\\!flex-col {\n    &>div {\n      flex-direction: column !important;\n    }\n  }\n  .\\[\\&\\>div\\]\\:overflow-hidden {\n    &>div {\n      overflow: hidden;\n    }\n  }\n  .\\[\\&\\>div\\:first-of-type\\]\\:flex {\n    &>div:first-of-type {\n      display: flex;\n    }\n  }\n  .\\[\\&\\>div\\:first-of-type\\]\\:h-full {\n    &>div:first-of-type {\n      height: 100%;\n    }\n  }\n  .\\[\\&\\>div\\:first-of-type\\]\\:items-center {\n    &>div:first-of-type {\n      align-items: center;\n    }\n  }\n  .\\[\\&\\>div\\>div\\]\\:w-full {\n    &>div>div {\n      width: 100%;\n    }\n  }\n  .\\[\\&\\>header\\>div\\]\\:flex-col {\n    &>header>div {\n      flex-direction: column;\n    }\n  }\n  .sm\\:\\[\\&\\>header\\>div\\]\\:h-\\[20px\\] {\n    @media (width >= 40rem) {\n      &>header>div {\n        height: 20px;\n      }\n    }\n  }\n  .sm\\:\\[\\&\\>header\\>div\\]\\:flex-row {\n    @media (width >= 40rem) {\n      &>header>div {\n        flex-direction: row;\n      }\n    }\n  }\n  .sm\\:\\[\\&\\>header\\>div\\]\\:items-start {\n    @media (width >= 40rem) {\n      &>header>div {\n        align-items: flex-start;\n      }\n    }\n  }\n  .\\[\\&\\>input\\]\\:h-9 {\n    &>input {\n      height: calc(var(--spacing) * 9);\n    }\n  }\n  .\\[\\&\\>input\\]\\:rounded-none {\n    &>input {\n      border-radius: 0;\n    }\n  }\n  .\\[\\&\\>input\\]\\:rounded-tl-lg {\n    &>input {\n      border-top-left-radius: var(--radius-lg);\n    }\n  }\n  .\\[\\&\\>input\\]\\:rounded-tr-lg {\n    &>input {\n      border-top-right-radius: var(--radius-lg);\n    }\n  }\n  .\\[\\&\\>input\\]\\:rounded-br-lg {\n    &>input {\n      border-bottom-right-radius: var(--radius-lg);\n    }\n  }\n  .\\[\\&\\>input\\]\\:rounded-bl-lg {\n    &>input {\n      border-bottom-left-radius: var(--radius-lg);\n    }\n  }\n  .\\[\\&\\>input\\]\\:ring-1 {\n    &>input {\n      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n  .\\[\\&\\>input\\]\\:placeholder\\:\\!text-muted {\n    &>input {\n      &::placeholder {\n        color: var(--text-color-muted) !important;\n      }\n    }\n  }\n  .\\[\\&\\>label\\]\\:flex-1 {\n    &>label {\n      flex: 1;\n    }\n  }\n  .\\[\\&\\>li\\]\\:\\!mb-0 {\n    &>li {\n      margin-bottom: calc(var(--spacing) * 0) !important;\n    }\n  }\n  .\\[\\&\\>li\\]\\:list-none {\n    &>li {\n      list-style-type: none;\n    }\n  }\n  .\\[\\&\\>li\\]\\:\\!border-neutral-200 {\n    &>li {\n      border-color: var(--color-neutral-200) !important;\n    }\n  }\n  .dark\\:\\[\\&\\>li\\]\\:\\!border-neutral-800 {\n    &:where(.dark-mode, .dark-mode *) {\n      &>li {\n        border-color: var(--color-neutral-800) !important;\n      }\n    }\n  }\n  .\\[\\&\\>li\\:first-child\\>a\\]\\:border-l-0 {\n    &>li:first-child>a {\n      border-left-style: var(--tw-border-style);\n      border-left-width: 0px;\n    }\n  }\n  .\\[\\&\\>li\\>a\\]\\:border-l {\n    &>li>a {\n      border-left-style: var(--tw-border-style);\n      border-left-width: 1px;\n    }\n  }\n  .\\[\\&\\>li\\>a\\]\\:border-color {\n    &>li>a {\n      border-color: var(--color-color);\n    }\n  }\n  .\\[\\&\\>li\\>a\\]\\:pl-4 {\n    &>li>a {\n      padding-left: calc(var(--spacing) * 4);\n    }\n  }\n  .\\[\\&\\>li\\>a\\]\\:text-sm {\n    &>li>a {\n      font-size: var(--text-sm);\n      line-height: var(--tw-leading, var(--text-sm--line-height));\n    }\n  }\n  .\\[\\&\\>p\\]\\:my-0 {\n    &>p {\n      margin-block: calc(var(--spacing) * 0);\n    }\n  }\n  .\\[\\&\\>p\\]\\:mt-0 {\n    &>p {\n      margin-top: calc(var(--spacing) * 0);\n    }\n  }\n  .\\[\\&\\>p\\]\\:inline {\n    &>p {\n      display: inline;\n    }\n  }\n  .\\[\\&\\>pre\\]\\:\\!p-2\\.5 {\n    &>pre {\n      padding: calc(var(--spacing) * 2.5) !important;\n    }\n  }\n  .\\[\\&\\>pre\\]\\:p-2\\.5 {\n    &>pre {\n      padding: calc(var(--spacing) * 2.5);\n    }\n  }\n  .\\[\\&\\>pre\\]\\:p-2\\.5\\! {\n    &>pre {\n      padding: calc(var(--spacing) * 2.5) !important;\n    }\n  }\n  .\\[\\&\\>span\\]\\:inline-block {\n    &>span {\n      display: inline-block;\n    }\n  }\n  .\\[\\&\\>span\\]\\:w-full {\n    &>span {\n      width: 100%;\n    }\n  }\n  .\\[\\&\\>span\\]\\:ring-kumo-danger {\n    &>span {\n      --tw-ring-color: var(--color-kumo-danger);\n    }\n  }\n  .\\[\\&\\>svg\\]\\:hidden {\n    &>svg {\n      display: none;\n    }\n  }\n  .\\[\\&\\[data-ending-style\\]\\:not\\(\\[data-limited\\]\\)\\:not\\(\\[data-swipe-direction\\]\\)\\]\\:\\[transform\\:translateY\\(150\\%\\)\\] {\n    &[data-ending-style]:not([data-limited]):not([data-swipe-direction]) {\n      transform: translateY(150%);\n    }\n  }\n  .\\[\\@media\\(max-height\\:750px\\)\\]\\:static {\n    @media (max-height:750px) {\n      position: static;\n    }\n  }\n  .\\[\\@media\\(min-width\\:755px\\)\\]\\:order-2 {\n    @media (min-width:755px) {\n      order: 2;\n    }\n  }\n  .\\[\\@media\\(pointer\\:coarse\\)\\]\\:pointer-events-auto {\n    @media (pointer:coarse) {\n      pointer-events: auto;\n    }\n  }\n  .\\[\\@media\\(pointer\\:coarse\\)\\]\\:pointer-events-none {\n    @media (pointer:coarse) {\n      pointer-events: none;\n    }\n  }\n  .\\[\\@media\\(pointer\\:coarse\\)\\]\\:hidden {\n    @media (pointer:coarse) {\n      display: none;\n    }\n  }\n  .\\[\\@media\\(pointer\\:coarse\\)\\]\\:translate-x-0 {\n    @media (pointer:coarse) {\n      --tw-translate-x: calc(var(--spacing) * 0);\n      translate: var(--tw-translate-x) var(--tw-translate-y);\n    }\n  }\n  .\\[\\@media\\(pointer\\:coarse\\)\\]\\:opacity-0 {\n    @media (pointer:coarse) {\n      opacity: 0%;\n    }\n  }\n  .\\[\\@media\\(pointer\\:coarse\\)\\]\\:opacity-100 {\n    @media (pointer:coarse) {\n      opacity: 100%;\n    }\n  }\n  .\\[\\[is-focus-visible\\]_\\&\\]\\:opacity-50 {\n    [is-focus-visible] & {\n      opacity: 50%;\n    }\n  }\n}\n@layer theme;\n@layer theme;\nhtml.dark-mode {\n  color-scheme: dark;\n}\n@font-face {\n  font-family: \'Inter Variable\';\n  font-weight: 100 900;\n  font-display: swap;\n  src: local(\'Inter Variable\'), url(\'/fonts/inter-variable.woff2\');\n  font-named-instance: \'Regular\';\n  font-style: normal;\n}\n@font-face {\n  font-family: \'Inter Variable\';\n  font-weight: 100 900;\n  font-display: swap;\n  src: local(\'Inter Variable\'), url(\'/fonts/inter-variable-italic.woff2\');\n  font-named-instance: \'Italic\';\n  font-style: italic;\n}\n@font-face {\n  font-family: \'Paper Mono\';\n  font-weight: 400;\n  font-display: swap;\n  font-style: normal;\n  font-named-instance: \'Regular\';\n  src: url(\'/fonts/paper-mono-regular.woff2\') format(\'woff2\');\n}\n@layer base {\n  html, button {\n    font-family: var(--font-sans);\n    --tw-leading: 1.5;\n    line-height: 1.5;\n    --tw-font-weight: var(--font-weight-normal);\n    font-weight: var(--font-weight-normal);\n    --tw-tracking: -.01em;\n    letter-spacing: -.01em;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-feature-settings: \'cv02\', \'cv03\', \'cv04\', \'calt\';\n  }\n  pre, code {\n    font-family: var(--font-mono);\n    --tw-leading: var(--leading-normal);\n    line-height: var(--leading-normal);\n    --tw-tracking: var(--tracking-normal);\n    letter-spacing: var(--tracking-normal);\n  }\n  .font-heading {\n    font-variation-settings: \'opsz\' 32;\n  }\n  .font-title {\n    font-variation-settings: \'opsz\' 24;\n  }\n  .font-mono {\n    --tw-tracking: var(--tracking-normal);\n    letter-spacing: var(--tracking-normal);\n  }\n  button.text-base {\n    font-size: var(--text-base);\n    line-height: var(--tw-leading, var(--text-base--line-height));\n  }\n  button.text-xs {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n  }\n  button.text-lg {\n    font-size: var(--text-lg);\n    line-height: var(--tw-leading, var(--text-lg--line-height));\n  }\n  button.border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n    border-color: var(--color-color);\n  }\n  #react-app {\n    isolation: isolate;\n  }\n}\n@property --tw-translate-x {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-translate-y {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-translate-z {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-scale-x {\n  syntax: "*";\n  inherits: false;\n  initial-value: 1;\n}\n@property --tw-scale-y {\n  syntax: "*";\n  inherits: false;\n  initial-value: 1;\n}\n@property --tw-scale-z {\n  syntax: "*";\n  inherits: false;\n  initial-value: 1;\n}\n@property --tw-rotate-x {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-rotate-y {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-rotate-z {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-skew-x {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-skew-y {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-pan-x {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-pan-y {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-pinch-zoom {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-scroll-snap-strictness {\n  syntax: "*";\n  inherits: false;\n  initial-value: proximity;\n}\n@property --tw-space-y-reverse {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-space-x-reverse {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-divide-x-reverse {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-border-style {\n  syntax: "*";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-divide-y-reverse {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-gradient-position {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-gradient-from {\n  syntax: "<color>";\n  inherits: false;\n  initial-value: #0000;\n}\n@property --tw-gradient-via {\n  syntax: "<color>";\n  inherits: false;\n  initial-value: #0000;\n}\n@property --tw-gradient-to {\n  syntax: "<color>";\n  inherits: false;\n  initial-value: #0000;\n}\n@property --tw-gradient-stops {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-gradient-via-stops {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-gradient-from-position {\n  syntax: "<length-percentage>";\n  inherits: false;\n  initial-value: 0%;\n}\n@property --tw-gradient-via-position {\n  syntax: "<length-percentage>";\n  inherits: false;\n  initial-value: 50%;\n}\n@property --tw-gradient-to-position {\n  syntax: "<length-percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-leading {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-font-weight {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-tracking {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-ordinal {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-slashed-zero {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-numeric-figure {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-numeric-spacing {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-numeric-fraction {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-shadow-color {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-shadow-alpha {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-inset-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-inset-shadow-color {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-inset-shadow-alpha {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-ring-color {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-ring-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-inset-ring-color {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-inset-ring-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-ring-inset {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-ring-offset-width {\n  syntax: "<length>";\n  inherits: false;\n  initial-value: 0px;\n}\n@property --tw-ring-offset-color {\n  syntax: "*";\n  inherits: false;\n  initial-value: #fff;\n}\n@property --tw-ring-offset-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-outline-style {\n  syntax: "*";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-blur {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-brightness {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-contrast {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-grayscale {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-hue-rotate {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-invert {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-opacity {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-saturate {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-sepia {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-drop-shadow {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-drop-shadow-color {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-drop-shadow-alpha {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-drop-shadow-size {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-blur {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-brightness {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-contrast {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-grayscale {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-hue-rotate {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-invert {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-opacity {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-saturate {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-backdrop-sepia {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-duration {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-ease {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-text-shadow-color {\n  syntax: "*";\n  inherits: false;\n}\n@property --tw-text-shadow-alpha {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-content {\n  syntax: "*";\n  initial-value: "";\n  inherits: false;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}\n@layer properties {\n  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {\n    *, ::before, ::after, ::backdrop {\n      --tw-translate-x: 0;\n      --tw-translate-y: 0;\n      --tw-translate-z: 0;\n      --tw-scale-x: 1;\n      --tw-scale-y: 1;\n      --tw-scale-z: 1;\n      --tw-rotate-x: initial;\n      --tw-rotate-y: initial;\n      --tw-rotate-z: initial;\n      --tw-skew-x: initial;\n      --tw-skew-y: initial;\n      --tw-pan-x: initial;\n      --tw-pan-y: initial;\n      --tw-pinch-zoom: initial;\n      --tw-scroll-snap-strictness: proximity;\n      --tw-space-y-reverse: 0;\n      --tw-space-x-reverse: 0;\n      --tw-divide-x-reverse: 0;\n      --tw-border-style: solid;\n      --tw-divide-y-reverse: 0;\n      --tw-gradient-position: initial;\n      --tw-gradient-from: #0000;\n      --tw-gradient-via: #0000;\n      --tw-gradient-to: #0000;\n      --tw-gradient-stops: initial;\n      --tw-gradient-via-stops: initial;\n      --tw-gradient-from-position: 0%;\n      --tw-gradient-via-position: 50%;\n      --tw-gradient-to-position: 100%;\n      --tw-leading: initial;\n      --tw-font-weight: initial;\n      --tw-tracking: initial;\n      --tw-ordinal: initial;\n      --tw-slashed-zero: initial;\n      --tw-numeric-figure: initial;\n      --tw-numeric-spacing: initial;\n      --tw-numeric-fraction: initial;\n      --tw-shadow: 0 0 #0000;\n      --tw-shadow-color: initial;\n      --tw-shadow-alpha: 100%;\n      --tw-inset-shadow: 0 0 #0000;\n      --tw-inset-shadow-color: initial;\n      --tw-inset-shadow-alpha: 100%;\n      --tw-ring-color: initial;\n      --tw-ring-shadow: 0 0 #0000;\n      --tw-inset-ring-color: initial;\n      --tw-inset-ring-shadow: 0 0 #0000;\n      --tw-ring-inset: initial;\n      --tw-ring-offset-width: 0px;\n      --tw-ring-offset-color: #fff;\n      --tw-ring-offset-shadow: 0 0 #0000;\n      --tw-outline-style: solid;\n      --tw-blur: initial;\n      --tw-brightness: initial;\n      --tw-contrast: initial;\n      --tw-grayscale: initial;\n      --tw-hue-rotate: initial;\n      --tw-invert: initial;\n      --tw-opacity: initial;\n      --tw-saturate: initial;\n      --tw-sepia: initial;\n      --tw-drop-shadow: initial;\n      --tw-drop-shadow-color: initial;\n      --tw-drop-shadow-alpha: 100%;\n      --tw-drop-shadow-size: initial;\n      --tw-backdrop-blur: initial;\n      --tw-backdrop-brightness: initial;\n      --tw-backdrop-contrast: initial;\n      --tw-backdrop-grayscale: initial;\n      --tw-backdrop-hue-rotate: initial;\n      --tw-backdrop-invert: initial;\n      --tw-backdrop-opacity: initial;\n      --tw-backdrop-saturate: initial;\n      --tw-backdrop-sepia: initial;\n      --tw-duration: initial;\n      --tw-ease: initial;\n      --tw-text-shadow-color: initial;\n      --tw-text-shadow-alpha: 100%;\n      --tw-content: "";\n    }\n  }\n}\n', ""])
		},
		"./react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(n, r, e) {
			var o = {
				"./favicon-zeit.ico": ["./react/app/assets/favicon-zeit.ico", "98166"],
				"./favicon-cookie.ico": ["./react/app/assets/favicon-cookie.ico", "37052"],
				"./favicon-dev.ico": ["./react/app/assets/favicon-dev.ico", "14073"],
				"./favicon-staging.ico": ["./react/app/assets/favicon-staging.ico", "6679"]
			};

			function a(n) {
				if (!e.o(o, n)) return Promise.resolve().then(function() {
					var r = Error("Cannot find module '" + n + "'");
					throw r.code = "MODULE_NOT_FOUND", r
				});
				var r = o[n],
					a = r[0];
				return e.e(r[1]).then(function() {
					return e.t(a, 17)
				})
			}
			a.keys = function() {
				return Object.keys(o)
			}, a.id = "./react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", n.exports = a
		}
	}
]);
//# debugId=b1a265a0-ff4f-5d31-bff4-4e79e8c13439