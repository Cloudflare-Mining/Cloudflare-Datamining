! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d4baf80a-88e5-5013-991c-a74ec4e00049")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.js": function(W, v, n) {
			"use strict";
			n.d(v, {
				J8: function() {
					return s
				},
				Jd: function() {
					return a
				},
				QY: function() {
					return y
				},
				Qw: function() {
					return l
				},
				ki: function() {
					return g
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/utils/url.ts"),
				i = n("../node_modules/query-string/query-string.js"),
				d = n.n(i),
				p = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f;
			const l = () => Object.keys(p.Z).reduce((m, C) => (C.indexOf("cf_beta.") === 0 && p.Z.get(C) === "true" && m.push(C.split(".").slice(1).join(".")), m), []),
				g = () => {
					var m, C, h;
					return ((m = window) === null || m === void 0 || (C = m.bootstrap) === null || C === void 0 || (h = C.data) === null || h === void 0 ? void 0 : h.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((f = window) === null || f === void 0 ? void 0 : f.location) && p.Z) {
				const m = d().parse(window.location.search);
				m.beta_on && p.Z.set(`cf_beta.${m.beta_on}`, !0), m.beta_off && p.Z.set(`cf_beta.${m.beta_off}`, !1)
			}
			const E = {},
				t = m => {
					var C, h, S;
					return Object.prototype.hasOwnProperty.call(E, m) ? E[m] : ((C = window) === null || C === void 0 || (h = C.bootstrap) === null || h === void 0 || (S = h.data) === null || S === void 0 ? void 0 : S.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some($ => $ === m) ? (E[m] = !0, !0) : (E[m] = !1, !1)
				},
				r = m => p.Z ? p.Z.get(`cf_beta.${m}`) === !0 : !1,
				s = m => r(m) || t(m),
				u = () => !0,
				a = () => {
					var m, C, h;
					return ((m = window) === null || m === void 0 || (C = m.bootstrap) === null || C === void 0 || (h = C.data) === null || h === void 0 ? void 0 : h.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				y = m => {
					const C = (0, e.uF)(m),
						h = (C == null ? void 0 : C.roles) || [];
					return (0, o.qR)(location.pathname) && h.length === 1 && h.some(S => S === "Administrator Read Only")
				}
		},
		"../init.ts": function(W, v, n) {
			"use strict";
			n.a(W, async function(e, o) {
				try {
					let Y = function(L) {
							for (var I = 1; I < arguments.length; I++) {
								var X = arguments[I] != null ? Object(arguments[I]) : {},
									N = Object.keys(X);
								typeof Object.getOwnPropertySymbols == "function" && N.push.apply(N, Object.getOwnPropertySymbols(X).filter(function(ee) {
									return Object.getOwnPropertyDescriptor(X, ee).enumerable
								})), N.forEach(function(ee) {
									z(L, ee, X[ee])
								})
							}
							return L
						},
						z = function(L, I, X) {
							return I = H(I), I in L ? Object.defineProperty(L, I, {
								value: X,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : L[I] = X, L
						},
						H = function(L) {
							var I = U(L, "string");
							return typeof I == "symbol" ? I : String(I)
						},
						U = function(L, I) {
							if (typeof L != "object" || L === null) return L;
							var X = L[Symbol.toPrimitive];
							if (X !== void 0) {
								var N = X.call(L, I || "default");
								if (typeof N != "object") return N;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return (I === "string" ? String : Number)(L)
						};
					n.r(v);
					var i = n("../../../../node_modules/regenerator-runtime/runtime.js"),
						d = n.n(i),
						p = n("../../../../node_modules/url-search-params-polyfill/index.js"),
						f = n.n(p),
						l = n("../libs/init/initGlobal.ts"),
						g = n.n(l),
						E = n("../libs/init/initFetch.ts"),
						t = n("../../../../node_modules/@sentry/core/esm/exports.js"),
						r = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
						s = n("../react/app/providers/storeContainer.js"),
						u = n("../libs/init/initHashScroll.ts"),
						a = n("../libs/init/loading.ts"),
						y = n("../utils/initStyles.ts"),
						m = n("../utils/sentry/initSentry.ts"),
						C = n("../utils/sentry/setUserId.ts"),
						h = n("../libs/init/initMfePreviewData.ts"),
						S = n("../utils/initGates.ts"),
						$ = n("../utils/getDashVersion.ts"),
						k = n("../libs/init/initBootstrap.ts"),
						P = n("../react/utils/history.ts"),
						Q = n("../react/initReact.tsx"),
						V = n("../utils/initTracking.ts");
					const F = L => {
						t.$e(function(I) {
							I.setTag("init", "global"), t.Tb(L)
						}), (0, a.v)(L)
					};
					try {
						n.g.build = Y({}, {
							branch: "master",
							isReleaseCandidate: "true",
							commit: "feb3319555e67d9c5a94898f334fa42fff0a95b4",
							dashVersion: "26666906",
							env: "production",
							builtAt: 1724874769635,
							versions: {
								"@cloudflare/app-dash": "25.161.22",
								node: "20.10.0",
								yarn: "3.2.2",
								webpack: "5.88.2"
							}
						}, {
							isPreviewDeploy: (0, $.p)()
						}), (0, m.j)();
						try {
							await n.e(27560).then(n.bind(n, "../react/utils/api.ts"))
						} catch (L) {
							throw t.$e(function(I) {
								I.setTag("init", "utils/api"), t.Tb(L)
							}), L
						}
						try {
							(0, u.d)(P.Z)
						} catch (L) {
							throw t.$e(function(I) {
								I.setTag("init", "hashScroll"), t.Tb(L)
							}), L
						}
						try {
							(0, y.Z)()
						} catch (L) {
							throw t.$e(function(I) {
								I.setTag("init", "styles"), t.Tb(L)
							}), L
						}
						try {
							(0, h.Z)()
						} catch (L) {
							throw t.$e(function(I) {
								I.setTag("init", "mfePreviewData"), t.Tb(L)
							}), L
						}(0, k.k)().then(async L => {
							var I;
							const X = (0, s.bh)(),
								N = (L == null ? void 0 : L.data) || {};
							X.dispatch((0, r.mW)("user", N == null ? void 0 : N.user));
							const ee = L == null || (I = L.data) === null || I === void 0 ? void 0 : I.user;
							n.g.bootstrap = L, ee && ee.id && (0, C.I)(ee.id);
							try {
								await (0, S.n)()
							} catch (te) {
								throw t.$e(function(G) {
									G.setTag("init", "gates"), t.Tb(te)
								}), te
							}
							try {
								(0, V.k)()
							} catch (te) {
								throw t.$e(function(G) {
									G.setTag("init", "tracking"), t.Tb(te)
								}), te
							}
							return (0, Q.o)()
						}).catch(L => {
							t.$e(function(I) {
								I.setTag("init", "bootstrap"), t.Tb(L)
							}), (0, a.v)(L)
						})
					} catch (L) {
						F(L)
					}
					o()
				} catch (Y) {
					o(Y)
				}
			}, 1)
		},
		"../libs/init/initBootstrap.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				k: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/@sentry/core/esm/exports.js");
			class o extends Error {
				constructor(f, l) {
					super(l);
					this.name = `${f} ${l}`
				}
			}
			const i = () => {
					document.cookie.split(";").forEach(f => {
						const [l] = f.trim().split("=");
						document.cookie = `${l}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				d = async () => {
					let p = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!p.ok) throw p.headers.get("content-type") === "text/html" && (await p.text()).toLowerCase().includes("cookie too large") && (e.$e(function(E) {
						E.setTag("init", "cookieTooLarge"), e.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), i(), window.location.reload()), new o("Bootstrap API Failure", p == null ? void 0 : p.status);
					return (await p.json()).result.data
				}
		},
		"../libs/init/initFetch.ts": function(W, v, n) {
			"use strict";
			var e = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				o = n.n(e),
				i = n("../../../../node_modules/fetch-intercept/lib/browser.js"),
				d = n.n(i);

			function p(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(s).filter(function(a) {
						return Object.getOwnPropertyDescriptor(s, a).enumerable
					})), u.forEach(function(a) {
						f(t, a, s[a])
					})
				}
				return t
			}

			function f(t, r, s) {
				return r = l(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function l(t) {
				var r = g(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var u = s.call(t, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			const E = t => {
				const r = t && t.headers || {},
					s = new Headers(r);
				return s.append("X-Cross-Site-Security", "dash"), p({}, t, {
					headers: s
				})
			};
			(0, i.register)({
				request: (t, r) => {
					try {
						return new URL(t), t === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", r] : [t, r]
					} catch {
						return [t, E(r)]
					}
				}
			})
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../libs/init/initHashScroll.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				d: function() {
					return d
				}
			});
			let e = "";
			const o = 61;

			function i(p) {
				const f = p.substr(1);
				if (f && e !== f) {
					const l = document.getElementById(f);
					if (l) {
						const g = l.getBoundingClientRect().top;
						if (g > 0) {
							const E = g - o;
							document.documentElement.scrollTop = E
						}
					}
				}
				e = f
			}

			function d(p) {
				p.listen(f => i(f.hash))
			}
		},
		"../libs/init/initMfePreviewData.ts": function(W, v, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const o = () => {
				let i;
				try {
					i = decodeURIComponent(window.location.search)
				} catch {
					console.log("Could not decode query string. Using non-decoded value."), i = window.location.search
				}
				if (!i.includes("remote[")) return;
				const d = new URLSearchParams(i),
					p = {};
				for (let [f, l] of d) f.includes("remote") && (p[f.replace(/remote\[|\]/g, "")] = l);
				e.Z.set("mfe-remotes", JSON.stringify(p))
			};
			v.Z = o
		},
		"../libs/init/loading.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				s: function() {
					return u
				},
				v: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/cookie/index.js"),
				o = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const i = "CF_dash_version",
				d = "current",
				p = "hash",
				f = "deploymentPreview",
				l = y => y === d ? g() : E(),
				g = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				E = (y = 72) => {
					const m = 36e5;
					return new Date(Date.now() + y * m)
				},
				t = y => {
					switch (y) {
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
				r = (y, m = !1) => {
					var C;
					const h = t(y),
						S = `
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
    <h1 id="error-title">${h.title}</h1>
    <p id="error-description">${h.description}</p>
  </div>
  `,
						$ = m ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${o.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(C=window.build)===null||C===void 0?void 0:C.branch}</span>.</p>
      <a href="/version?hash=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return S + $
				},
				s = y => {
					var m;
					const C = document.getElementById(y);
					!C || (m = C.parentNode) === null || m === void 0 || m.removeChild(C)
				};

			function u() {
				const y = document.getElementById("loading-state");
				y == null || y.classList.add("hide"), y == null || y.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(s)
				})
			}

			function a(y) {
				var m;
				const C = document.getElementById("loading-state"),
					h = !!((m = e.parse(document.cookie)) === null || m === void 0 ? void 0 : m[i]);
				!C || (C.innerHTML = r(y == null ? void 0 : y.code, h))
			}
		},
		"../react/app/HoCs/withEntities.tsx": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("../react/app/redux/index.ts"),
				d = n("../react/common/selectors/userSelectors.ts"),
				p = n("../react/common/selectors/zoneSelectors.ts"),
				f = n("../react/common/selectors/accountSelectors.ts"),
				l = n("../react/common/utils/isGuards.ts"),
				g = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				E = n.n(g);

			function t() {
				return t = Object.assign ? Object.assign.bind() : function(u) {
					for (var a = 1; a < arguments.length; a++) {
						var y = arguments[a];
						for (var m in y) Object.prototype.hasOwnProperty.call(y, m) && (u[m] = y[m])
					}
					return u
				}, t.apply(this, arguments)
			}
			const r = u => {
				function a(y) {
					const m = (0, i.UM)(),
						C = (0, g.useHistory)(),
						h = (0, g.useLocation)(),
						S = (0, g.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						$ = (0, i.p4)(d.PR) || null,
						k = (0, i.p4)(p.nA) || null,
						P = (0, i.p4)(f.uF),
						Q = P ? P.account : null;
					if (!S) return null;
					const {
						accountId: V,
						app: Y,
						tab: z
					} = S.params, H = S.params.zoneName && ((0, l.v5)(S.params.zoneName) || S.params.zoneName.indexOf(".") > 0) ? S.params.zoneName : void 0;
					return o().createElement(u, t({
						dispatch: m,
						history: C,
						location: h,
						match: S,
						user: $,
						membership: V ? P : null,
						account: V ? Q : null,
						accountId: V || null,
						zone: H ? k : null,
						zoneName: H || null,
						app: H ? Y : null,
						tab: H ? z : null
					}, y))
				}
				return a.displayName = `withEntities(${s(u)})`, a
			};

			function s(u) {
				return u.displayName || u.name || "Component"
			}
			v.Z = r
		},
		"../react/app/components/DeepLink/actions.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				BQ: function() {
					return g
				},
				Bh: function() {
					return f
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
					return p
				},
				Wz: function() {
					return t
				},
				bk: function() {
					return l
				},
				fj: function() {
					return r
				},
				r4: function() {
					return d
				},
				zq: function() {
					return i
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
				i = (0, e.R)(o.ADD_SITE, u => ({
					payload: u
				})),
				d = (0, e.R)(o.RESOLVING_START),
				p = (0, e.R)(o.RESOLVING_COMPLETE),
				f = (0, e.R)(o.SELECT_ZONE, u => ({
					payload: u
				})),
				l = (0, e.R)(o.SELECT_ACCOUNT, u => ({
					payload: u
				})),
				g = (0, e.R)(o.SELECT_PAGES_PROJECT, u => ({
					payload: u
				})),
				E = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, u => ({
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
		"../react/app/components/DeepLink/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				BV: function() {
					return e
				},
				Dz: function() {
					return g
				},
				Fj: function() {
					return d
				},
				Kt: function() {
					return p
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return E
				},
				dB: function() {
					return i
				},
				s$: function() {
					return f
				}
			});
			const e = "to",
				o = "_gl",
				i = "freeTrial",
				d = "deepLinkQueryParams",
				p = "add",
				f = "multiSkuProducts",
				l = "/:account/billing/checkout",
				g = "/:account/:zone/billing/checkout",
				E = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				ZP: function() {
					return z
				},
				U: function() {
					return l.U
				},
				dd: function() {
					return l.dd
				},
				bk: function() {
					return f.bk
				},
				Bh: function() {
					return f.Bh
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n("../react/app/redux/index.ts"),
				i = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = n("../react/app/components/DeepLink/utils.ts"),
				p = n("../react/utils/bootstrap.ts"),
				f = n("../react/app/components/DeepLink/actions.ts"),
				l = n("../react/app/components/DeepLink/selectors.ts"),
				g = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = n.n(g);

			function t(H) {
				for (var U = 1; U < arguments.length; U++) {
					var F = arguments[U] != null ? Object(arguments[U]) : {},
						L = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(F).filter(function(I) {
						return Object.getOwnPropertyDescriptor(F, I).enumerable
					})), L.forEach(function(I) {
						r(H, I, F[I])
					})
				}
				return H
			}

			function r(H, U, F) {
				return U = s(U), U in H ? Object.defineProperty(H, U, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : H[U] = F, H
			}

			function s(H) {
				var U = u(H, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function u(H, U) {
				if (typeof H != "object" || H === null) return H;
				var F = H[Symbol.toPrimitive];
				if (F !== void 0) {
					var L = F.call(H, U || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(H)
			}
			class a {
				constructor(U, F) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", L => {
						this.resolvers.set(L, {
							name: L,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", L => {
						const I = this.resolvers.get(L);
						I && (I.endTime = Date.now(), this.resolvers.set(L, I))
					}), r(this, "resolverCancel", L => {
						this.resolverDone(L), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", L => {
						const I = "NO_ACTION",
							X = {
								actionType: I,
								startTime: 0
							};
						return {
							start: (N = I) => {
								const ee = this.resolvers.get(L);
								X.actionType = N, X.startTime = Date.now(), ee && ee.userActions.push(X)
							},
							finish: (N = I) => {
								X.actionType = N, X.endTime = Date.now()
							},
							cancel: (N = I) => {
								X.actionType = N, X.endTime = Date.now(), this.resolverCancel(L)
							}
						}
					}), this.deepLink = U, this.legacyDeepLink = F, this.resolvers = new Map
				}
				track(U) {
					try {
						if (this._done) return;
						this._done = !0;
						const F = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: y(this.startTime, this.endTime),
								totalCpuTime: y(this.startTime, this.endTime)
							},
							L = this.resolvers.size === 0 ? F : Array.from(this.resolvers.values()).reduce((I, X) => {
								const N = y(X.startTime, X.endTime),
									ee = X.userActions.reduce((G, w) => {
										const M = y(w.startTime, w.endTime);
										return {
											totalTime: G.totalTime + M,
											actions: G.actions.set(w.actionType, M)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									te = N - ee.totalTime;
								return t({}, I, {
									totalTime: I.totalTime + N,
									totalUserActionsTime: I.totalUserActionsTime + ee.totalTime,
									totalCpuTime: I.totalCpuTime + te,
									[`${X.name}ResolverTotalTime`]: N,
									[`${X.name}ResolverTotalCpuTime`]: te,
									[`${X.name}ResolverTotalUserActionsTime`]: ee.totalTime
								}, Array.from(ee.actions.keys()).reduce((G, w) => t({}, G, {
									[`${X.name}Resolver/${w}`]: ee.actions.get(w)
								}), {}))
							}, t({}, F, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						E().sendEvent(U, L)
					} catch (F) {
						console.error(F)
					}
				}
			}

			function y(H = Date.now(), U = Date.now()) {
				return (U - H) / 1e3
			}
			var m = n("../react/app/components/DeepLink/constants.ts"),
				C = n("../react/common/hooks/useCachedState.ts"),
				h = n("../react/common/hooks/usePrevious.ts");

			function S(H) {
				for (var U = 1; U < arguments.length; U++) {
					var F = arguments[U] != null ? Object(arguments[U]) : {},
						L = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(F).filter(function(I) {
						return Object.getOwnPropertyDescriptor(F, I).enumerable
					})), L.forEach(function(I) {
						$(H, I, F[I])
					})
				}
				return H
			}

			function $(H, U, F) {
				return U = k(U), U in H ? Object.defineProperty(H, U, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : H[U] = F, H
			}

			function k(H) {
				var U = P(H, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function P(H, U) {
				if (typeof H != "object" || H === null) return H;
				var F = H[Symbol.toPrimitive];
				if (F !== void 0) {
					var L = F.call(H, U || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(H)
			}
			var V = ({
					children: H
				}) => {
					const U = (0, o.TZ)(),
						F = (0, i.useHistory)(),
						L = (0, h.Z)(F.location.pathname),
						I = (0, o.p4)(l.dd),
						[X, N] = (0, e.useState)(!0),
						[ee, te] = (0, C.j)(void 0, {
							key: m.Fj
						}),
						[G, w] = (0, C.j)(void 0, {
							key: m.s$
						}),
						M = (0, p.$8)();
					let b = new URLSearchParams(F.location.search);
					const D = (0, d.mL)(F.location.pathname, b);
					let x = null,
						O = null;
					if (b.has(m.Tc) && b.delete(m.Tc), b.get(m.BV)) x = b.get(m.BV), F.location.hash && (O = F.location.hash);
					else if (ee) {
						const K = new URLSearchParams(ee);
						K.get(m.BV) && (x = K.get(m.BV), b = K)
					} else D && (b.set(m.BV, D), x = D);
					if (x && m._h.test(x)) {
						const K = b.getAll(m.Kt),
							se = JSON.stringify(K);
						K.length && se !== G && w(se), b.has(m.Tc) && b.delete(m.Tc), b.delete(m.Kt)
					}!M && ee === void 0 && x && te(b.toString());
					const Z = async () => {
						try {
							if ((0, d.I3)(x) && M && !I) {
								ee && te(void 0), U.dispatch((0, f.r4)()), N(!0);
								const K = await (0, d.py)(x, N, U, F, L, new a(x, D ? `${F.location.pathname}${F.location.search}` : void 0));
								b.delete(m.BV);
								const se = b.toString();
								F.replace(S({}, F.location, {
									pathname: K,
									search: se
								}, O ? {
									hash: O
								} : {})), U.dispatch((0, f.WF)())
							}
						} catch (K) {
							U.dispatch((0, f.WF)()), console.error(K)
						} finally {
							N(!1)
						}
					};
					return (0, e.useEffect)(() => {
						Z()
					}, [F.location.pathname, F.location.search, I]), (X || (0, d.I3)(x)) && M ? null : H
				},
				Y = n("../react/app/components/DeepLink/reducer.ts"),
				z = V
		},
		"../react/app/components/DeepLink/reducer.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				E: function() {
					return d
				},
				r: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				i = n("../react/app/components/DeepLink/actions.ts");
			const d = null,
				p = o().from({
					lastAction: d,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function f(l = p, g) {
				if (g.type === i.MF.RESOLVING_COMPLETE) return p;
				if (g.type === i.MF.RESOLVING_START) return l.set("isResolving", !0);
				if (l.isResolving) {
					if (g.type === i.MF.RESOLVING_COMPLETE) return l.set("isResolving", !1);
					if (g.type === i.MF.SET_FILTERED_ACCOUNT_IDS) return l.set("filteredAccountIds", g.accountIds);
					if (g.type === i.MF.DELETE_FILTERED_ACCOUNT_IDS) return l.set("filteredAccountIds", void 0);
					{
						let E = l;
						try {
							E = l.set("lastAction", g)
						} catch {
							E = l.set("lastAction", {
								type: g.type
							})
						}
						return E
					}
				} else return l
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				U: function() {
					return i
				},
				dd: function() {
					return o
				},
				yI: function() {
					return e
				}
			});
			const e = d => d.deepLink.lastAction,
				o = d => d.deepLink.isResolving,
				i = d => d.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				I3: function() {
					return u
				},
				X1: function() {
					return r
				},
				mL: function() {
					return h
				},
				py: function() {
					return C
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/components/DeepLink/reducer.ts"),
				i = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const d = S => S.replace(i.default.endsWithSlash, ""),
				p = S => {
					const $ = d(S).split("/").slice(3);
					return $.length ? "/" + $.join("/") : ""
				},
				f = S => {
					const $ = d(S).split("/").slice(2);
					return $.length ? `apps/${$.join("/")}` : "apps"
				};
			var l = n("../react/app/components/DeepLink/selectors.ts"),
				g = n("../react/app/components/DeepLink/constants.ts"),
				E = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = S => (0, E.Lb)(S) && (S.split(".").length > 1 || (0, t.v5)(S)),
				s = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				u = S => typeof S == "string" && S.startsWith("/"),
				a = (S, $) => k => new Promise((P, Q) => {
					$.start();
					const V = S.subscribe(() => {
						const Y = (0, l.yI)(S.getState());
						Y === o.E ? ($.cancel(), V(), Q("DeepLink: waitForAction out of context.")) : k(Y) && ($.finish(Y.type), V(), P(Y))
					})
				}),
				y = (S, $, k) => (P, Q) => new Promise((V, Y) => {
					k.start();
					const z = $.location.pathname;
					P = new URL(P, window.location.href).pathname, z !== P && (k.cancel(), Y(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${P}", but on "${z}". You need to redirect to "${P}", and unblockRouter in your Resolver, before you use this function.`));
					const H = S.subscribe(() => {
						const U = (0, l.yI)(S.getState()),
							F = $.location.pathname,
							I = new URLSearchParams($.location.search).get(g.BV);
						(F !== P || !!I) && (k.cancel(), H(), Y(`DeepLink: waitForPageAction user navigated away from "${P}" to "${F}${I?$.location.search:""}"`)), U === o.E ? (k.cancel(), H(), Y("DeepLink: waitForPageAction out of context.")) : Q(U) && (k.finish(U.type), H(), V(U))
					})
				});

			function m(S) {
				const $ = [],
					k = S.split("?")[0].split("/");
				for (let P of k) P.length !== 0 && (P.startsWith(":") ? $.push({
					value: P.substring(1),
					type: "dynamic"
				}) : $.push({
					value: P,
					type: "static"
				}));
				return $
			}
			async function C(S, $, k, P, Q, V) {
				V.start();
				const Y = m(S),
					H = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(7484), n.e(72775)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					U = {};
				let F = "";
				for (const [L, I] of Y.entries())
					if (I.type === "static") F = [F, I.value].join("/");
					else if (I.type === "dynamic" && s.is(I.value) && I.value in H) {
					V.resolverStart(I.value);
					const X = await H[I.value]({
						deepLink: S,
						blockRouter: () => $(!0),
						unblockRouter: () => $(!1),
						routerHistory: P,
						resolvedValues: U,
						store: k,
						referringRoute: Q,
						uri: {
							currentPartIdx: L,
							parts: Y
						},
						waitForAction: a(k, V.createUserActionTracker(I.value)),
						waitForPageAction: y(k, P, V.createUserActionTracker(I.value))
					});
					V.resolverDone(I.value), F = [F, X].join("/"), U[I.value] = X
				} else throw V.cancel(), new Error(`DeepLink: Resolver with name '${I.value}' is not supported.`);
				return V.done(), F
			}

			function h(S, $) {
				const k = ":account",
					P = ":zone",
					Q = $.get("zone");
				if (Q) return $.delete("zone"), `/${k}/${P}/${Q}`;
				const V = $.get("account");
				if (V) return $.delete("account"), `/${k}/${V}`;
				if (S === "/overview") return `/${k}/${P}`;
				if (S === "/apps") return `/${k}/${P}/${f(S)}`;
				const Y = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const z of Y) {
					const H = z.length;
					if (S.startsWith(z) && (S.length === H || S[H] === "/")) return `/${k}/${P}${S}`
				}
				switch (S) {
					case "/account/billing":
						return `/${k}/billing`;
					case "/account/subscriptions":
						return `/${k}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${k}/dns-firewall`;
					case "/account/audit-log":
						return `/${k}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				d = n("../react/app/components/SomethingWrong.jsx"),
				p = n("../utils/sentry/lastSentEventId.ts"),
				f = n("../react/utils/zaraz.ts"),
				l = n("../react/utils/url.ts");
			const g = ({
				sentryTag: E,
				children: t
			}) => o().createElement(i.SV, {
				beforeCapture: r => {
					E && r.setTag("errorBoundary", E), f.tg === null || f.tg === void 0 || f.tg.track("page-error", {
						page: (0, l.Fl)(window.location.pathname)
					})
				},
				onError: r => {
					({
						REDUX_LOGGER: void 0
					}).TESTING && n.g.logAppError(r)
				},
				fallback: ({
					error: r,
					eventId: s
				}) => {
					const u = p.e.getEventId() || s;
					return o().createElement(d.Z, {
						type: "page",
						error: r,
						eventId: u
					})
				}
			}, t);
			v.Z = g
		},
		"../react/app/components/Footer.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				Z: function() {
					return G
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				p = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = n.n(l),
				E = n("../react/common/components/Apple/utils.tsx"),
				t = n("../react/utils/translator.tsx"),
				r = n("../../../../node_modules/moment/moment.js"),
				s = n.n(r);
			const u = () => {
					const w = s()().format("YYYY"),
						M = b => {
							g().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: b
							})
						};
					return o().createElement(a, {
						marginTop: "auto"
					}, o().createElement(y, null, o().createElement(m, null, o().createElement(C, null, "\xA9 ", w, " Cloudflare, Inc."), o().createElement(C, null, o().createElement(h, null, o().createElement(S, {
						showOnDeskTop: !1
					}, o().createElement($, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => M("Support")
					}, o().createElement(t.cC, {
						id: "common.support"
					}))), o().createElement(S, null, o().createElement($, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => M("Privacy Policy")
					}, o().createElement(t.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(S, null, o().createElement($, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => M("Terms of Use")
					}, o().createElement(t.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(S, null, o().createElement($, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => M("Cookie Preferences")
					}, o().createElement(t.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(S, null, o().createElement($, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => M("Trademark")
					}, o().createElement(t.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(h, null, o().createElement(S, null, o().createElement($, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => M("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(t.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				a = (0, f.createComponent)(({
					theme: w,
					marginTop: M
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: M
				})),
				y = (0, f.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				m = (0, f.createComponent)(({
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
				C = (0, f.createComponent)(({
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
				h = (0, f.createComponent)(({
					theme: w
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: w.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				S = (0, f.createComponent)(({
					showOnDeskTop: w = !0,
					theme: M
				}) => ({
					color: M.colors.white,
					fontSize: M.fontSizes[1],
					height: "20px",
					display: w ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: M.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: M.space[3],
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
				$ = (0, f.createStyledComponent)(({
					theme: w
				}) => ({
					textDecoration: "none",
					color: w.colors.white,
					"&:hover": {
						color: w.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var k = u,
				P = n("../react/pages/welcome/routes.ts"),
				Q = n("../react/utils/cookiePreferences.ts"),
				V = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				Y = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				H = () => {
					const [w, M] = (0, e.useState)(!1), b = (0, Q.wV)(), D = () => {
						M(!0)
					}, x = () => {
						M(!1)
					}, O = b && b === "US" ? (0, t.ZP)("footer.cpra_cta.privacy_choices") : (0, t.ZP)("footer.cpra_cta.cookie_preferences"), Z = {
						background: "transparent",
						borderRadius: "none",
						color: w ? (0, V.Yc)() ? "#ee730a" : "#003681" : (0, V.Yc)() ? "#4693ff" : "#0051c3",
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
					return o().createElement(d.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: Z,
						onMouseEnter: D,
						onMouseLeave: x
					}, o().createElement(d.Ei, {
						height: 15,
						src: Y,
						mr: 2,
						alt: O
					}), O)
				};

			function U() {
				return U = Object.assign ? Object.assign.bind() : function(w) {
					for (var M = 1; M < arguments.length; M++) {
						var b = arguments[M];
						for (var D in b) Object.prototype.hasOwnProperty.call(b, D) && (w[D] = b[D])
					}
					return w
				}, U.apply(this, arguments)
			}

			function F(w, M) {
				if (w == null) return {};
				var b = L(w, M),
					D, x;
				if (Object.getOwnPropertySymbols) {
					var O = Object.getOwnPropertySymbols(w);
					for (x = 0; x < O.length; x++) D = O[x], !(M.indexOf(D) >= 0) && (!Object.prototype.propertyIsEnumerable.call(w, D) || (b[D] = w[D]))
				}
				return b
			}

			function L(w, M) {
				if (w == null) return {};
				var b = {},
					D = Object.keys(w),
					x, O;
				for (O = 0; O < D.length; O++) x = D[O], !(M.indexOf(x) >= 0) && (b[x] = w[x]);
				return b
			}
			const I = 24,
				X = (0, f.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,V.Yc)()?V.rS.colors.orange[6]:V.rS.colors.blue[4]}`
					}
				}), d.A),
				N = w => {
					let {
						onClick: M
					} = w, b = F(w, ["onClick"]);
					return o().createElement(X, U({
						onClick: D => {
							g().sendEvent("navigate footer nav", {
								destinationPage: b.href
							}), M && M(D)
						}
					}, b))
				},
				ee = w => {
					let {
						children: M,
						target: b,
						rel: D
					} = w, x = F(w, ["children", "target", "rel"]);
					return o().createElement(N, U({
						target: b || "_blank",
						rel: D || "noopener noreferrer"
					}, x), M, o().createElement(p.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				};
			var G = () => {
				var w, M;
				const b = [P.d.root.pattern].some(D => (0, i.matchPath)(location.pathname, {
					path: D
				}));
				return (0, E.PP)() ? o().createElement(k, null) : b ? null : o().createElement(d.$_, {
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: 4,
					px: 3,
					mt: "auto"
				}, o().createElement(d.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, o().createElement(d.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.contact")), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.contact_support"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, t.ZP)("footer.contact_sales"))), o().createElement(d.Dd, {
					mt: 3
				}, o().createElement(d.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(N, {
					"aria-label": (0, t.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${I}px`
				}, o().createElement(p.J, {
					type: "twitter",
					size: I
				})), o().createElement(N, {
					"aria-label": (0, t.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${I}px`
				}, o().createElement(p.J, {
					type: "facebook",
					size: I
				})), o().createElement(N, {
					"aria-label": (0, t.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${I}px`
				}, o().createElement(p.J, {
					type: "linkedin",
					size: I
				})))))), o().createElement(d.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.what_we_do")), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://www.cloudflare.com/plans"
				}, (0, t.ZP)("footer.plans"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://www.cloudflare.com/overview"
				}, (0, t.ZP)("footer.about"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, t.ZP)("footer.network_map"))))), o().createElement(d.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.resources")), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://developers.cloudflare.com"
				}, (0, t.ZP)("footer.product_docs"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://blog.cloudflare.com"
				}, (0, t.ZP)("footer.blog"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, t.ZP)("footer.testimonials"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://partners.cloudflare.com"
				}, (0, t.ZP)("footer.hosting_partners"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://api.cloudflare.com"
				}, (0, t.ZP)("footer.api"))))), o().createElement(d.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5],
					position: "relative"
				}, o().createElement("div", {
					style: {
						position: "absolute",
						top: "0",
						left: "0",
						height: "24px",
						width: "100%"
					},
					"aria-hidden": "true",
					title: `Current version: ${((w=window)===null||w===void 0||(M=w.build)===null||M===void 0?void 0:M.dashVersion)||"unknown"}`
				}), o().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.support")), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.help_center"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://community.cloudflare.com"
				}, (0, t.ZP)("footer.community"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://www.cloudflarestatus.com"
				}, (0, t.ZP)("footer.system_status"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, t.ZP)("footer.trust_safety"))))), o().createElement(d.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.about_us")), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://www.cloudflare.com/people"
				}, (0, t.ZP)("footer.team"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://www.cloudflare.com/careers"
				}, (0, t.ZP)("footer.careers"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, t.ZP)("footer.press"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, t.ZP)("footer.tos"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, t.ZP)("footer.subs_agreement"))), o().createElement(d.Dd, {
					mb: 2
				}, o().createElement(ee, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, t.ZP)("footer.privacy_policy"))))), o().createElement(H, null)))
			}
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				S: function() {
					return r
				},
				Z: function() {
					return M
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				p = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = n("../react/common/components/AccessControl/index.js"),
				g = n("../react/common/components/ButtonWithDropdown.tsx"),
				E = n("../react/common/components/Dropdown/index.tsx"),
				t = n("../react/utils/translator.tsx");
			const r = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				s = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: r.EXISTING_DOMAIN,
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
					trackingEvent: r.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/domains/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: r.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: r.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: r.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: r.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: r.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var u = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				a = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				y = n.n(a);

			function m(b) {
				for (var D = 1; D < arguments.length; D++) {
					var x = arguments[D] != null ? Object(arguments[D]) : {},
						O = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(x).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(x, Z).enumerable
					})), O.forEach(function(Z) {
						C(b, Z, x[Z])
					})
				}
				return b
			}

			function C(b, D, x) {
				return D = h(D), D in b ? Object.defineProperty(b, D, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = x, b
			}

			function h(b) {
				var D = S(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function S(b, D) {
				if (typeof b != "object" || b === null) return b;
				var x = b[Symbol.toPrimitive];
				if (x !== void 0) {
					var O = x.call(b, D || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}

			function $() {
				return $ = Object.assign ? Object.assign.bind() : function(b) {
					for (var D = 1; D < arguments.length; D++) {
						var x = arguments[D];
						for (var O in x) Object.prototype.hasOwnProperty.call(x, O) && (b[O] = x[O])
					}
					return b
				}, $.apply(this, arguments)
			}

			function k(b, D) {
				if (b == null) return {};
				var x = P(b, D),
					O, Z;
				if (Object.getOwnPropertySymbols) {
					var K = Object.getOwnPropertySymbols(b);
					for (Z = 0; Z < K.length; Z++) O = K[Z], !(D.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(b, O) || (x[O] = b[O]))
				}
				return x
			}

			function P(b, D) {
				if (b == null) return {};
				var x = {},
					O = Object.keys(b),
					Z, K;
				for (K = 0; K < O.length; K++) Z = O[K], !(D.indexOf(Z) >= 0) && (x[Z] = b[Z]);
				return x
			}
			const Q = b => {
					let {
						title: D,
						trackingEvent: x,
						icon: O,
						url: Z,
						description: K,
						disabled: se
					} = b, ce = k(b, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(V, $({
						to: !se && Z || "#",
						"aria-disabled": se,
						onClick: () => {
							y().sendEvent(x, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, ce), o().createElement(d.ZC, {
						display: "flex"
					}, o().createElement(i.J, {
						type: O,
						size: 24,
						mr: 2
					}), o().createElement(d.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(d.ZC, {
						fontSize: 3
					}, o().createElement(t.cC, D)), o().createElement(d.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(t.cC, K)))))
				},
				V = (0, f.createStyledComponent)(({
					theme: b
				}) => {
					const D = {
						cursor: "pointer",
						backgroundColor: (0, p.Yc)() ? b.colors.gray[8] : b.colors.gray[9],
						color: b.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: b.colors.background,
						color: b.colors.gray[2],
						fontSize: b.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': D,
						':focus-within:not([aria-disabled="true"])': m({}, D, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: b.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, u.Link);
			var Y = Q;

			function z() {
				return z = Object.assign ? Object.assign.bind() : function(b) {
					for (var D = 1; D < arguments.length; D++) {
						var x = arguments[D];
						for (var O in x) Object.prototype.hasOwnProperty.call(x, O) && (b[O] = x[O])
					}
					return b
				}, z.apply(this, arguments)
			}

			function H(b) {
				for (var D = 1; D < arguments.length; D++) {
					var x = arguments[D] != null ? Object(arguments[D]) : {},
						O = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(x).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(x, Z).enumerable
					})), O.forEach(function(Z) {
						U(b, Z, x[Z])
					})
				}
				return b
			}

			function U(b, D, x) {
				return D = F(D), D in b ? Object.defineProperty(b, D, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = x, b
			}

			function F(b) {
				var D = L(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function L(b, D) {
				if (typeof b != "object" || b === null) return b;
				var x = b[Symbol.toPrimitive];
				if (x !== void 0) {
					var O = x.call(b, D || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}

			function I(b, D) {
				if (b == null) return {};
				var x = X(b, D),
					O, Z;
				if (Object.getOwnPropertySymbols) {
					var K = Object.getOwnPropertySymbols(b);
					for (Z = 0; Z < K.length; Z++) O = K[Z], !(D.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(b, O) || (x[O] = b[O]))
				}
				return x
			}

			function X(b, D) {
				if (b == null) return {};
				var x = {},
					O = Object.keys(b),
					Z, K;
				for (K = 0; K < O.length; K++) Z = O[K], !(D.indexOf(Z) >= 0) && (x[Z] = b[Z]);
				return x
			}
			const N = "GLOBAL_ADD_DROPDOWN",
				ee = ({
					disableProducts: b
				}) => o().createElement(te, {
					role: "group",
					"data-testid": N
				}, o().createElement(E.Lt, {
					trigger: o().createElement(G, null, o().createElement(i.J, {
						label: "plus",
						type: "plus"
					}), " ", o().createElement(t.cC, {
						id: "common.add"
					}), " ", o().createElement(i.J, {
						label: "arrow",
						type: "caret-down"
					})),
					menu: o().createElement(g.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0"
					}, s.map(D => {
						const x = D || {},
							{
								disableOn: O,
								permissionCheck: Z
							} = x,
							K = I(x, ["disableOn", "permissionCheck"]),
							se = O && b[O],
							ce = H({}, K, {
								disabled: se
							});
						return Z ? o().createElement(l.Z, {
							key: D.title.id,
							edit: Z
						}, ({
							isEditable: ie
						}) => ie && o().createElement(Y, ce)) : o().createElement(Y, z({
							key: D.url
						}, ce))
					}))
				})),
				te = (0, f.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					tabletWide: {
						display: "inline-block"
					}
				})),
				G = (0, f.createStyledComponent)(({
					theme: b
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: b.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, p.Yc)() ? b.colors.gray[1] : b.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mt: 3,
					mb: 1,
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, p.Yc)() ? b.colors.gray[8] : b.colors.gray[9]
					}
				}), d.zx);
			var w = ee,
				M = w
		},
		"../react/app/components/LoadingSuspense.tsx": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				p = n("../react/utils/translator.tsx"),
				f = n("../react/app/components/ErrorStatus.tsx"),
				l = n("../react/common/components/EmptyPage.jsx"),
				g = n("../react/common/hooks/suspenseHelpers.ts");

			function E(s) {
				const [u, a] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const y = window.setTimeout(() => a(!0), s);
					return () => window.clearTimeout(y)
				}, []), u
			}
			const t = ({
					loadingTimeout: s = 1e3,
					stillLoadingTimeout: u = 9e3
				}) => {
					const a = E(s),
						y = E(u);
					if ((0, g.nW)(), !a && !y) return o().createElement(l.Z, null);
					const m = y ? o().createElement(p.cC, {
						id: "common.still_loading"
					}) : a ? o().createElement(p.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(f.Z, {
						size: 5
					}, o().createElement(d.ZC, {
						mr: 3
					}, o().createElement(i.g, {
						size: "2x"
					})), m)
				},
				r = ({
					children: s
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(t, null)
				}, s);
			v.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				C8: function() {
					return g
				},
				d3: function() {
					return l
				},
				dr: function() {
					return p
				},
				lt: function() {
					return f
				},
				m6: function() {
					return t
				},
				n: function() {
					return E
				},
				yl: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const i = "/persistence/user",
				d = async () => {
					try {
						return await (await e.get(i, {
							hideErrorAlert: !0
						})).body
					} catch (r) {
						console.error(r)
					}
				}, p = async r => {
					try {
						return await (await e.get(`/accounts/${r}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (s) {
						console.error(s)
					}
				}, f = async (r, s) => {
					try {
						return await (await e.post(`${i}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: s
							}),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						return console.error(u), []
					}
				}, l = async (r, s) => {
					try {
						return await e.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: s
							}),
							hideErrorAlert: !0
						}), !0
					} catch (u) {
						return console.error(u), !1
					}
				}, g = async r => {
					try {
						return await (await e.post(i, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (s) {
						console.error(s)
					}
				}, E = async r => {
					try {
						return await (await e.post(`${i}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						console.error(s)
					}
				}, t = async r => {
					try {
						return await (await e.post(`${i}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						throw console.error(s), s
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				Wl: function() {
					return E
				},
				lp: function() {
					return m
				},
				Z_: function() {
					return h
				},
				r7: function() {
					return H
				},
				Tv: function() {
					return te
				},
				yZ: function() {
					return S
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("../react/app/redux/index.ts"),
				d = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = n.n(d),
				f = n("../react/utils/bootstrap.ts"),
				l = n("../react/common/selectors/zoneSelectors.ts"),
				g = n("../react/app/components/Persistence/api.ts");
			const E = 10;

			function t(G) {
				for (var w = 1; w < arguments.length; w++) {
					var M = arguments[w] != null ? Object(arguments[w]) : {},
						b = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(M).filter(function(D) {
						return Object.getOwnPropertyDescriptor(M, D).enumerable
					})), b.forEach(function(D) {
						r(G, D, M[D])
					})
				}
				return G
			}

			function r(G, w, M) {
				return w = s(w), w in G ? Object.defineProperty(G, w, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[w] = M, G
			}

			function s(G) {
				var w = u(G, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function u(G, w) {
				if (typeof G != "object" || G === null) return G;
				var M = G[Symbol.toPrimitive];
				if (M !== void 0) {
					var b = M.call(G, w || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(G)
			}
			const a = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				y = t({}, a, {
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
				m = (0, e.createContext)(y),
				C = m.Consumer,
				h = ({
					children: G,
					onDarkModeChangeCb: w
				}) => {
					const [M, b] = (0, e.useState)(a), [D, x] = (0, e.useState)(y.isLoading), O = (0, f.$8)(), Z = (0, i.p4)(ce => (0, l.wH)(ce));
					(0, e.useEffect)(() => {
						O ? (0, g.yl)().then(ce => {
							ce && (b(ce), w(ce.darkMode))
						}).finally(() => x(!1)) : x(!1)
					}, [O]);
					const K = (ce, ie) => !!M.favorites.find(fe => fe.type === "zone" && fe.name === ce && fe.accountId === ie),
						se = ce => M.favorites.filter(fe => fe.type === "zone" && fe.accountId === ce).length < E;
					return o().createElement(m.Provider, {
						value: t({}, M, {
							isLoading: D,
							actions: {
								canAccountStarZone: se,
								isZoneStarred: K,
								starZone: async (ce, ie) => {
									var fe;
									const Te = !K(ce, ie),
										ve = se(ie);
									if (Te && !ve) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Ce = await (0, g.lt)(ce, ie);
									p().sendEvent("click star zone", {
										isStarring: Te,
										totalStarredZones: Ce.filter(j => j.accountId === ie && j.type === "zone").length,
										totalZones: Z == null || (fe = Z.paginationData) === null || fe === void 0 ? void 0 : fe.info.total_count
									}), b(t({}, M, {
										favorites: Ce
									}))
								},
								setDarkMode: async ce => {
									const ie = await (0, g.C8)(ce);
									b(ie), w(ie.darkMode)
								},
								logRouteVisited: async ce => {
									var ie;
									const fe = await (0, g.n)(ce);
									b((ie = fe) !== null && ie !== void 0 ? ie : t({}, M))
								},
								viewChange: async ce => {
									const ie = await (0, g.m6)(ce);
									b(t({}, M, {
										viewedChanges: ie
									}))
								}
							}
						})
					}, G)
				},
				S = () => (0, e.useContext)(m);
			var $ = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				k = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function P() {
				return P = Object.assign ? Object.assign.bind() : function(G) {
					for (var w = 1; w < arguments.length; w++) {
						var M = arguments[w];
						for (var b in M) Object.prototype.hasOwnProperty.call(M, b) && (G[b] = M[b])
					}
					return G
				}, P.apply(this, arguments)
			}

			function Q(G, w) {
				if (G == null) return {};
				var M = V(G, w),
					b, D;
				if (Object.getOwnPropertySymbols) {
					var x = Object.getOwnPropertySymbols(G);
					for (D = 0; D < x.length; D++) b = x[D], !(w.indexOf(b) >= 0) && (!Object.prototype.propertyIsEnumerable.call(G, b) || (M[b] = G[b]))
				}
				return M
			}

			function V(G, w) {
				if (G == null) return {};
				var M = {},
					b = Object.keys(G),
					D, x;
				for (x = 0; x < b.length; x++) D = b[x], !(w.indexOf(D) >= 0) && (M[D] = G[D]);
				return M
			}
			const Y = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var H = G => {
					let {
						isStarred: w,
						size: M = 16
					} = G, b = Q(G, ["isStarred", "size"]);
					const D = Y[(0, $.Yc)() ? "dark" : "light"];
					return o().createElement(k.J, P({
						type: w ? "star" : "star-outline",
						color: w ? D.gold : D.gray,
						size: M
					}, b))
				},
				U = n("../../../../node_modules/@cloudflare/elements/es/index.js");

			function F(G) {
				for (var w = 1; w < arguments.length; w++) {
					var M = arguments[w] != null ? Object(arguments[w]) : {},
						b = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(M).filter(function(D) {
						return Object.getOwnPropertyDescriptor(M, D).enumerable
					})), b.forEach(function(D) {
						L(G, D, M[D])
					})
				}
				return G
			}

			function L(G, w, M) {
				return w = I(w), w in G ? Object.defineProperty(G, w, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[w] = M, G
			}

			function I(G) {
				var w = X(G, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function X(G, w) {
				if (typeof G != "object" || G === null) return G;
				var M = G[Symbol.toPrimitive];
				if (M !== void 0) {
					var b = M.call(G, w || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(G)
			}
			const N = {
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
			var te = (0, e.forwardRef)(({
				featurePreview: G = !1,
				isStarred: w,
				onClickFn: M,
				isDisabled: b,
				testId: D,
				buttonText: x,
				size: O = "large"
			}, Z) => {
				const K = N[(0, $.Yc)() ? "dark" : "light"][w && !G ? "active" : "default"],
					se = F({}, O === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, O === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return o().createElement(U.zx, {
					innerRef: Z,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: se.paddingRight,
					gap: 1,
					pl: se.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: G || b ? "default" : "pointer",
					backgroundColor: K.bg,
					color: K.text,
					borderColor: K.border,
					onClick: M,
					opacity: b ? .5 : 1,
					disabled: b,
					fontSize: se.fontSize,
					height: se.height,
					"data-testid": D
				}, o().createElement(H, {
					isStarred: G ? !1 : w,
					size: se.starIconSize
				}), x)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("../../../../node_modules/prop-types/index.js"),
				d = n.n(i),
				p = n("../../../common/intl/intl-react/src/index.ts"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = n("../node_modules/@cloudflare/component-button/es/index.js"),
				g = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				E = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				r = n.n(t),
				s = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				a = n("../react/app/components/Footer.tsx"),
				y = n("../react/utils/url.ts");

			function m(F) {
				for (var L = 1; L < arguments.length; L++) {
					var I = arguments[L] != null ? Object(arguments[L]) : {},
						X = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(I).filter(function(N) {
						return Object.getOwnPropertyDescriptor(I, N).enumerable
					})), X.forEach(function(N) {
						C(F, N, I[N])
					})
				}
				return F
			}

			function C(F, L, I) {
				return L = h(L), L in F ? Object.defineProperty(F, L, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[L] = I, F
			}

			function h(F) {
				var L = S(F, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function S(F, L) {
				if (typeof F != "object" || F === null) return F;
				var I = F[Symbol.toPrimitive];
				if (I !== void 0) {
					var X = I.call(F, L || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(F)
			}
			const $ = (0, f.createComponent)(({
					type: F
				}) => ({
					height: F !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				k = (0, f.createComponent)(({
					theme: F,
					margin: L,
					size: I = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: F.colors.gray[3],
					height: L ? "auto" : "100%",
					padding: L ? 0 : F.space[I > 1 ? I - 2 : 0],
					margin: L,
					justifyContent: "center",
					alignItems: "center"
				})),
				P = (0, f.createComponent)(() => ({
					textAlign: "left"
				})),
				Q = (0, f.createComponent)(() => ({
					textAlign: "right"
				})),
				V = (0, f.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[6]
				})),
				Y = (0, f.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[4]
				})),
				z = (0, f.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[3]
				})),
				H = (0, f.createComponent)(({
					theme: F
				}) => ({
					width: "100%",
					height: 125,
					marginTop: F.space[4],
					padding: F.space[2]
				}), "textarea");
			class U extends o().Component {
				constructor(...L) {
					super(...L);
					C(this, "state", {
						value: "",
						submitted: !1
					}), C(this, "handleTextareaChange", I => {
						this.setState({
							value: I.target.value
						})
					}), C(this, "sendErrToSentry10", async () => {
						try {
							var I, X, N, ee;
							const te = ((I = window) === null || I === void 0 || (X = I.bootstrap) === null || X === void 0 || (N = X.data) === null || N === void 0 || (ee = N.user) === null || ee === void 0 ? void 0 : ee.id) || "Unknown",
								G = this.props.eventId || g.eW(),
								w = {
									name: te,
									email: `${te}@userid.com`,
									comments: this.state.value,
									eventId: G,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: m({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(w)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (te) {
							console.error(te)
						}
					}), C(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), C(this, "renderContent", I => o().createElement(p.oc, null, X => o().createElement($, {
						type: I
					}, o().createElement(k, null, o().createElement(P, null, o().createElement(V, null, X.t("error.internal_issues")), o().createElement(Y, null, X.t("error.help_us")), o().createElement(H, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: N => this.handleTextareaChange(N),
						disabled: this.state.submitted,
						placeholder: X.t("error.give_feedback")
					}), o().createElement(Q, null, !this.state.submitted && o().createElement(l.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, X.t("common.submit")), this.state.submitted && o().createElement(z, null, X.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const L = this.props.error;
					console.error(`SomethingWrong: ${L}`), E.YA("user_feedback_form_displayed", "yes"), E.YA("normalizedPath", (0, y.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: L
					} = this.props;
					return L === "fullscreen" ? o().createElement("div", null, o().createElement(s.h4, null, o().createElement(t.Link, {
						to: "/"
					}, o().createElement(u.TR, null))), this.renderContent(L), o().createElement(a.Z, null)) : this.renderContent(L)
				}
			}
			U.propTypes = {
				type: d().oneOf(["fullscreen", "page"]),
				error: d().oneOfType([d().string, d().object]),
				eventId: d().string
			}, v.Z = U
		},
		"../react/app/redux/index.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				TZ: function() {
					return i
				},
				UM: function() {
					return p
				},
				ZS: function() {
					return d
				},
				p4: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e);
			const i = () => (0, e.useStore)(),
				d = () => i().getState(),
				p = () => (0, e.useDispatch)(),
				f = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(W, v, n) {
			"use strict";
			n.d(v, {
				P1: function() {
					return E
				},
				jQ: function() {
					return l
				},
				qR: function() {
					return t
				},
				uc: function() {
					return g
				}
			});
			var e = n("../react/pages/home/alerts/config.tsx"),
				o = n("../react/pages/workers/entityTypes.ts"),
				i = n("../react/pages/email/types.ts"),
				d = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				p = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				f = n.n(p);
			const l = p.static.from([{
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
					entityType: "advancedTCPPrefix"
				}, {
					entityType: "advancedTCPPrefixes",
					to: "advancedTCPPrefix"
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
					entityType: "speculation"
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
					entityType: i.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: i.BB.rule,
					idProp: "tag"
				}, {
					entityType: i.BB.rules,
					to: i.BB.rule
				}, {
					entityType: i.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: i.BB.dstAddresses,
					to: i.BB.dstAddress
				}, {
					entityType: i.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: i.BB.dnsRecords,
					to: i.BB.dnsRecord
				}, {
					entityType: i.BB.zone,
					idProp: "tag"
				}]),
				g = r => r.entities,
				E = (...r) => (0, d.P1)(l, g, ...r),
				t = (0, d.QB)(l)
		},
		"../react/app/redux/utils.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				F: function() {
					return i
				},
				_: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const o = d => (p, f, l) => (0, e.SC)(p, f, l, {
					hideErrorAlert: !0
				}).catch(d),
				i = d => p => {
					if (p.status === d) return p;
					throw p
				}
		},
		"../react/common/actionTypes.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Cm: function() {
					return f
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return l
				},
				Li: function() {
					return E
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return i
				},
				Yc: function() {
					return r
				},
				gM: function() {
					return d
				},
				lV: function() {
					return p
				},
				s1: function() {
					return g
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				i = "MODAL_OPEN",
				d = "MODAL_CLOSE",
				p = "TOGGLE_ON",
				f = "TOGGLE_OFF",
				l = "SET_ACTIVE",
				g = "CLEAR_ACTIVE",
				E = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(s) {
				return s.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", s.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", s.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", s.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", s.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", s.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", s.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", s.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", s.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", s
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				AX: function() {
					return s
				},
				YT: function() {
					return E
				},
				ct: function() {
					return l
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

			function i(u) {
				for (var a = 1; a < arguments.length; a++) {
					var y = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(y).filter(function(C) {
						return Object.getOwnPropertyDescriptor(y, C).enumerable
					})), m.forEach(function(C) {
						d(u, C, y[C])
					})
				}
				return u
			}

			function d(u, a, y) {
				return a = p(a), a in u ? Object.defineProperty(u, a, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[a] = y, u
			}

			function p(u) {
				var a = f(u, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(u, a) {
				if (typeof u != "object" || u === null) return u;
				var y = u[Symbol.toPrimitive];
				if (y !== void 0) {
					var m = y.call(u, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(u)
			}
			const l = u => {
					const a = u.payload.map(y => i({}, y, {
						membershipId: y.id,
						id: y.account.id
					}));
					return i({}, u, {
						payload: a
					})
				},
				g = u => {
					const a = l(u);
					return Array.isArray(a.payload) ? i({}, u, {
						payload: a.payload[0]
					}) : i({}, u, {
						payload: null
					})
				},
				E = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", l),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...u) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: u
				}),
				s = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", g)
		},
		"../react/common/actions/modalActions.ts": function(W, v, n) {
			"use strict";
			n.r(v), n.d(v, {
				closeModal: function() {
					return d
				},
				openModal: function() {
					return i
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function i(p, f, l = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: p,
						props: f
					},
					options: l
				}
			}

			function d(p) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: p
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				IH: function() {
					return p
				},
				Vp: function() {
					return f
				},
				ZK: function() {
					return g
				},
				um: function() {
					return l
				},
				vU: function() {
					return E
				}
			});
			var e = n("../react/common/actionTypes.ts");

			function o(t) {
				return {
					type: e.Ng,
					notification: t
				}
			}

			function i(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let d = 0;

			function p(t, r, s = {}) {
				return s = s || {},
					function(u) {
						let a = d++,
							y = {
								id: a,
								type: t,
								message: r,
								delay: s.delay,
								persist: s.persist === void 0 ? !1 : s.persist,
								closable: s.closable === void 0 ? !0 : s.closable,
								onClose() {
									u(i(a)), s.onClose && s.onClose.apply(null, arguments)
								}
							};
						u(o(y))
					}
			}

			function f(t, r) {
				return p("success", t, r)
			}

			function l(t, r) {
				return p("info", t, r)
			}

			function g(t, r) {
				return p("warning", t, r)
			}

			function E(t, r) {
				return p("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				BT: function() {
					return l
				},
				Ut: function() {
					return C
				},
				V_: function() {
					return h
				},
				Y9: function() {
					return y
				},
				Z0: function() {
					return $
				},
				mp: function() {
					return m
				},
				r3: function() {
					return S
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/app/redux/utils.ts");

			function i(k) {
				for (var P = 1; P < arguments.length; P++) {
					var Q = arguments[P] != null ? Object(arguments[P]) : {},
						V = Object.keys(Q);
					typeof Object.getOwnPropertySymbols == "function" && V.push.apply(V, Object.getOwnPropertySymbols(Q).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(Q, Y).enumerable
					})), V.forEach(function(Y) {
						d(k, Y, Q[Y])
					})
				}
				return k
			}

			function d(k, P, Q) {
				return P = p(P), P in k ? Object.defineProperty(k, P, {
					value: Q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[P] = Q, k
			}

			function p(k) {
				var P = f(k, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function f(k, P) {
				if (typeof k != "object" || k === null) return k;
				var Q = k[Symbol.toPrimitive];
				if (Q !== void 0) {
					var V = Q.call(k, P || "default");
					if (typeof V != "object") return V;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(k)
			}
			const l = (0, e.C)("user").get`/user`,
				g = (0, e.C)("user").patch`/user`,
				E = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/two_factor_authentication`,
				u = (0, e.C)("user").delete`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/email`;

			function y(...k) {
				return a(...k)
			}
			const m = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				C = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(k => i({}, k, {
					body: i({}, k.body, {
						result: {}
					})
				}))),
				h = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				S = (0, e.C)("userDetails").get`/user/details`,
				$ = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(W, v, n) {
			"use strict";
			n.d(v, {
				a: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e),
				i = n("../react/common/selectors/accountSelectors.ts");
			const d = f => {
					if (typeof f != "string") throw new Error("invalid Param Type provided");
					const l = f.slice(1).split(":");
					if (l.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: l[0],
						value: l[1]
					}
				},
				p = (f, l) => {
					const {
						resourceId: g,
						accountId: E,
						legacyPermission: t
					} = l;
					let {
						read: r,
						edit: s
					} = l;
					const u = {};
					t && (s = `#${t}:edit`, r = `#${t}:read`);
					const a = g || E;
					if (r) {
						const y = Array.isArray(r) ? r : [r];
						u.isReadable = y.some(m => {
							const C = d(m);
							return (0, i.DT)(f, a, h => !!(h[C.key] && h[C.key][C.value]))
						})
					}
					if (s) {
						const y = Array.isArray(s) ? s : [s];
						u.isEditable = y.some(m => {
							const C = d(m);
							return (0, i.DT)(f, a, h => !!(h[C.key] && h[C.key][C.value]))
						})
					}
					return u
				};
			v.Z = (0, e.connect)(p)
		},
		"../react/common/components/AccessControl/index.js": function(W, v, n) {
			"use strict";
			var e = n("../../../../node_modules/prop-types/index.js"),
				o = n.n(e),
				i = n("../react/app/HoCs/withEntities.tsx"),
				d = n("../react/common/components/AccessControl/SAAConnect.js");

			function p(r) {
				for (var s = 1; s < arguments.length; s++) {
					var u = arguments[s] != null ? Object(arguments[s]) : {},
						a = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(u).filter(function(y) {
						return Object.getOwnPropertyDescriptor(u, y).enumerable
					})), a.forEach(function(y) {
						f(r, y, u[y])
					})
				}
				return r
			}

			function f(r, s, u) {
				return s = l(s), s in r ? Object.defineProperty(r, s, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = u, r
			}

			function l(r) {
				var s = g(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function g(r, s) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var a = u.call(r, s || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}

			function E(r) {
				const u = ["isReadable", "isEditable"].reduce((a, y) => r.hasOwnProperty(y) ? p({}, a, {
					[y]: r[y]
				}) : a, {});
				return r.children(u)
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
			const t = (0, i.Z)((0, d.Z)(E));
			t.displayName = "AccessControl", v.Z = t
		},
		"../react/common/components/Apple/utils.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				PP: function() {
					return r
				},
				RJ: function() {
					return l
				},
				tz: function() {
					return s
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				i = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				p = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const f = () => g.test(window.location.pathname) || i.E.has(d.Qq),
				l = () => i.E.get(d.Qq),
				g = /^\/login\/apple(\/)?/,
				t = [g, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let u = !1;
					t.forEach(y => {
						if (y.test(window.location.pathname)) {
							u = !0;
							return
						}
					});
					const a = f() && u;
					return a && (0, p.C8)(p.LF.OFF), a
				},
				s = u => {
					u && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let a = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					u && (a = a + `&jwt=${u}`), window.location.href = a
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				oG: function() {
					return u
				},
				v2: function() {
					return l.v2
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("../node_modules/@cloudflare/component-button/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				p = n("../../../common/intl/intl-react/src/index.ts"),
				f = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = n("../react/common/components/Dropdown/index.tsx"),
				g = n("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function E() {
				return E = Object.assign ? Object.assign.bind() : function(a) {
					for (var y = 1; y < arguments.length; y++) {
						var m = arguments[y];
						for (var C in m) Object.prototype.hasOwnProperty.call(m, C) && (a[C] = m[C])
					}
					return a
				}, E.apply(this, arguments)
			}

			function t(a, y) {
				if (a == null) return {};
				var m = r(a, y),
					C, h;
				if (Object.getOwnPropertySymbols) {
					var S = Object.getOwnPropertySymbols(a);
					for (h = 0; h < S.length; h++) C = S[h], !(y.indexOf(C) >= 0) && (!Object.prototype.propertyIsEnumerable.call(a, C) || (m[C] = a[C]))
				}
				return m
			}

			function r(a, y) {
				if (a == null) return {};
				var m = {},
					C = Object.keys(a),
					h, S;
				for (S = 0; S < C.length; S++) h = C[S], !(y.indexOf(h) >= 0) && (m[h] = a[h]);
				return m
			}
			const s = (0, f.createStyledComponent)(({
				theme: a
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${a.radii[2]}px 0 0 ${a.radii[2]}px`,
					borderRight: `1px solid ${a.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${a.radii[2]}px ${a.radii[2]}px 0`,
					paddingRight: a.space[2],
					paddingLeft: a.space[2]
				},
				"& button": {
					color: (0, g.Yc)() ? a.colors.text : void 0
				},
				"& button:hover": {
					color: (0, g.Yc)() ? a.colors.text : void 0
				}
			}));

			function u(a) {
				let {
					menu: y,
					containerProps: m,
					disabled: C,
					disabledDropdown: h = C
				} = a, S = t(a, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: $
				} = (0, p.QT)();
				return o().createElement(s, E({}, m, {
					role: "group"
				}), o().createElement(i.zx, E({}, S, {
					disabled: C
				})), o().createElement(l.Lt, {
					trigger: o().createElement(i.zx, {
						type: S.type,
						"aria-haspopup": "menu",
						disabled: h
					}, o().createElement(d.J, {
						type: "caret-down",
						label: $("common.more"),
						size: 12
					})),
					menu: y
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("../../../../node_modules/prop-types/index.js"),
				d = n.n(i),
				p = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const f = ({
				children: l
			}) => o().createElement(p.xu, {
				height: 411
			}, l);
			f.propTypes = {
				children: d().node
			}, v.Z = f
		},
		"../react/common/components/ModalManager.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				ZP: function() {
					return a
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
				i = n("webpack/sharing/consume/default/react-redux/react-redux");
			const d = y => y.application.modals;
			var p = n("../react/common/actions/modalActions.ts"),
				f = n("../../../../node_modules/swr/core/dist/index.mjs"),
				l = n("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(y) {
					for (var m = 1; m < arguments.length; m++) {
						var C = arguments[m];
						for (var h in C) Object.prototype.hasOwnProperty.call(C, h) && (y[h] = C[h])
					}
					return y
				}, g.apply(this, arguments)
			}
			const E = o().createContext(null);
			class t extends o().Component {
				render() {
					const {
						modals: m,
						closeModal: C
					} = this.props;
					return o().createElement(o().Fragment, null, m.map(({
						ModalComponent: h,
						props: S = {},
						id: $
					}) => {
						const k = () => {
							typeof S.onClose == "function" && S.onClose(), C(h)
						};
						return o().createElement(E.Provider, {
							key: $,
							value: {
								closeModal: k
							}
						}, o().createElement(f.J$, {
							value: l.ZP
						}, o().createElement(h, g({}, S, {
							isOpen: !0,
							closeModal: k
						}))))
					}))
				}
			}

			function r() {
				const y = o().useContext(E);
				if (!y) throw new Error("useModalContext must be used within a ModalContext");
				return y
			}

			function s() {
				const y = (0, i.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...m) {
						return y(p.openModal(...m))
					}, [y]),
					closeModal: (0, e.useCallback)(function(...m) {
						return y(p.closeModal(...m))
					}, [y])
				}
			}
			var a = (0, i.connect)(y => ({
				modals: d(y)
			}), p)(t)
		},
		"../react/common/constants/billing/index.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Gq: function() {
					return d
				},
				g$: function() {
					return i
				},
				WX: function() {
					return e
				},
				E0: function() {
					return E
				},
				Hw: function() {
					return f
				},
				Ed: function() {
					return p
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return u
				},
				hQ: function() {
					return l
				},
				SP: function() {
					return g
				}
			});
			let e = function(a) {
				return a.page_rules = "page_rules", a.automatic_platform_optimization = "automatic_platform_optimization", a
			}({});
			const o = "page_rules",
				i = "automatic_platform_optimization",
				d = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					volume_included: 1,
					ubb_frequency: 1,
					ubb_price: .1,
					ubb_unit: "gigabyte"
				},
				p = {
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
				l = {
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
			var t = n("../react/common/constants/billing/tax.ts"),
				r = n("../react/common/constants/billing/tracking.ts"),
				s = n("../react/common/constants/billing/workers.ts");
			const u = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				FP: function() {
					return e
				},
				Nl: function() {
					return p
				},
				SO: function() {
					return i
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
				i = {
					BILLING: "billing"
				},
				d = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				p = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Dk: function() {
					return u
				},
				Dy: function() {
					return a
				},
				E_: function() {
					return f
				},
				K$: function() {
					return h
				},
				Lv: function() {
					return y
				},
				S4: function() {
					return p
				},
				UM: function() {
					return t
				},
				Xf: function() {
					return E
				},
				Y1: function() {
					return l
				},
				p6: function() {
					return g
				},
				q0: function() {
					return d
				},
				rg: function() {
					return m
				},
				sJ: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				i = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const d = "healthy",
				p = "degraded",
				f = "critical",
				l = "unknown",
				g = "not-monitored",
				E = o().from({
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
					f: E.FREE,
					p: E.PRO,
					b: E.BIZ
				},
				s = "marketing-pt",
				u = () => {
					const S = i.Z.get(s);
					if (!!S) return r[S]
				},
				a = ["gov"],
				y = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				m = "banner-notification-interactions",
				C = null;
			let h = function(S) {
				return S.SUPER_ADMIN = "Super Administrator - All Privileges", S.ADMIN = "Administrator", S.ADMIN_READ_ONLY = "Administrator Read Only", S
			}({})
		},
		"../react/common/constants/index.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
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
		"../react/common/hooks/suspenseHelpers.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				bt: function() {
					return l
				},
				nW: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const d = "suspenseComplete";

			function p() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(d))
				}, [])
			}

			function f(g) {
				(0, i.OR)(d, () => {
					window.setTimeout(g, 0)
				}, {
					target: window
				})
			}

			function l(...g) {
				const [E, t] = g;
				o().useLayoutEffect(E, t), f(E)
			}
		},
		"../react/common/hooks/useCachedState.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				j: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function d(p, {
				key: f,
				cache: l = i.E
			} = {}) {
				const g = f !== void 0 && l.get(f),
					[E, t] = (0, e.useState)(g || p);
				return [E, s => {
					t(u => (s instanceof Function && (s = s(u)), f !== void 0 && l.set(f, s), s))
				}]
			}
		},
		"../react/common/hooks/useClickOutside.ts": function(W, v, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");

			function o(i, d) {
				(0, e.OR)("click", p => {
					var f;
					p.target instanceof Node && p.target.isConnected && ((f = i.current) === null || f === void 0 ? void 0 : f.contains(p.target)) === !1 && d(p)
				}, {
					capture: !0
				})
			}
			v.Z = o
		},
		"../react/common/hooks/usePrevious.ts": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function i(d) {
				const p = (0, e.useRef)(d);
				return (0, e.useEffect)(() => {
					p.current = d
				}, [d]), p.current
			}
			v.Z = i
		},
		"../react/common/middleware/sparrow/errors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Uh: function() {
					return p
				},
				ez: function() {
					return d
				},
				oV: function() {
					return f
				}
			});

			function e(l, g, E) {
				return g = o(g), g in l ? Object.defineProperty(l, g, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[g] = E, l
			}

			function o(l) {
				var g = i(l, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function i(l, g) {
				if (typeof l != "object" || l === null) return l;
				var E = l[Symbol.toPrimitive];
				if (E !== void 0) {
					var t = E.call(l, g || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(l)
			}
			class d extends Error {
				constructor(g, E) {
					super(E);
					e(this, "eventName", void 0), this.eventName = g, this.name = "SparrowValidationError"
				}
			}
			class p extends d {
				constructor(g) {
					super(g, `Event not allowed: "${g}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class f extends d {
				constructor(g, E) {
					super(g, `Found invalid properties on event: "${g}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = E
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				AC: function() {
					return Be
				},
				Au: function() {
					return T
				},
				B: function() {
					return ke
				},
				B3: function() {
					return Me
				},
				BG: function() {
					return V
				},
				Bp: function() {
					return ze
				},
				D0: function() {
					return $
				},
				DT: function() {
					return K
				},
				EL: function() {
					return D
				},
				GE: function() {
					return We
				},
				Ko: function() {
					return Z
				},
				Kx: function() {
					return H
				},
				Le: function() {
					return U
				},
				O4: function() {
					return je
				},
				Ou: function() {
					return w
				},
				Py: function() {
					return Fe
				},
				QI: function() {
					return Ue
				},
				RO: function() {
					return pe
				},
				T3: function() {
					return De
				},
				T8: function() {
					return Q
				},
				UX: function() {
					return b
				},
				VP: function() {
					return _e
				},
				Xo: function() {
					return $e
				},
				Xu: function() {
					return ee
				},
				Yi: function() {
					return Ke
				},
				Yj: function() {
					return O
				},
				Zu: function() {
					return x
				},
				bC: function() {
					return ie
				},
				f8: function() {
					return I
				},
				hN: function() {
					return z
				},
				hX: function() {
					return Se
				},
				iq: function() {
					return we
				},
				nE: function() {
					return Y
				},
				oD: function() {
					return M
				},
				oI: function() {
					return L
				},
				oJ: function() {
					return ne
				},
				uF: function() {
					return te
				},
				ut: function() {
					return Le
				},
				vU: function() {
					return be
				},
				wQ: function() {
					return ve
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				i = n.n(o),
				d = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				p = n.n(d),
				f = n("../../../../node_modules/reselect/lib/index.js"),
				l = n("../../../../node_modules/moment/moment.js"),
				g = n.n(l),
				E = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				s = n("../react/common/selectors/entitlementsSelectors.ts"),
				u = n("../react/app/components/DeepLink/selectors.ts"),
				a = n("../react/common/constants/index.ts"),
				y = n("../react/common/utils/hasRole.ts");

			function m(_) {
				for (var R = 1; R < arguments.length; R++) {
					var J = arguments[R] != null ? Object(arguments[R]) : {},
						oe = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(J).filter(function(le) {
						return Object.getOwnPropertyDescriptor(J, le).enumerable
					})), oe.forEach(function(le) {
						C(_, le, J[le])
					})
				}
				return _
			}

			function C(_, R, J) {
				return R = h(R), R in _ ? Object.defineProperty(_, R, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[R] = J, _
			}

			function h(_) {
				var R = S(_, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function S(_, R) {
				if (typeof _ != "object" || _ === null) return _;
				var J = _[Symbol.toPrimitive];
				if (J !== void 0) {
					var oe = J.call(_, R || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(_)
			}
			const $ = _ => {
					const R = te(_);
					return R == null ? void 0 : R.account
				},
				k = _ => {
					const R = (0, r.PR)(_);
					if (R) {
						const J = R.id;
						return _.accountAccess[J] || {}
					}
					return {}
				},
				P = _ => _.accountsDetailed,
				Q = (0, t.P1)("accountsDetailed", P),
				V = _ => _.memberships,
				Y = (0, f.P1)((0, t.P1)("memberships", V), u.U, (_, R) => !!R && !!_ ? _.filter(J => R.includes(J.id)) : _),
				z = _ => _.accountFlags && _.accountFlags.data,
				H = _ => _.accountFlags,
				U = (_, R, J) => {
					const oe = z(_);
					return !oe || !oe[R] ? null : oe[R][J]
				},
				F = _ => _.accountFlags.isRequesting,
				L = (_, ...R) => i()(_, ["accountFlagsChanges", "data", ...R]),
				I = _ => _.accountFlagsChanges.isRequesting,
				X = (0, f.P1)(z, H, (_, R) => ({
					data: _,
					meta: R
				})),
				N = (_, R, J) => !!(isEnterpriseSSEnabledSelector(_) && U(_, R, J)),
				ee = _ => _.membership,
				te = (0, t.P1)("membership", ee),
				G = (0, f.P1)(te, ee, (_, R) => ({
					data: _,
					meta: R
				})),
				w = _ => {
					const {
						roles: R = []
					} = te(_) || {};
					return Boolean(R.find(J => J === "Super Administrator - All Privileges" || J === "Billing"))
				},
				M = _ => {
					const R = k(_),
						J = Pe.getMemberships(_) ? p().asMutable(Pe.getMemberships(_)) : [];
					if (!!J) return p().from(J.map(oe => m({}, oe, {
						lastSeen: R[oe.account.id] ? R[oe.account.id].lastSeen : null
					})).sort((oe, le) => oe.lastSeen && le.lastSeen ? le.lastSeen - oe.lastSeen : 0))
				},
				b = _ => _.filteredMemberships,
				D = (0, t.P1)("filteredMemberships", b),
				x = (0, f.P1)(te, _ => _ == null ? void 0 : _.permissions),
				O = (0, f.P1)(x, _ => (0, e.Z)(R => {
					var J;
					return (J = _ == null ? void 0 : _[R]) !== null && J !== void 0 ? J : {
						read: !1,
						edit: !1
					}
				})),
				Z = (0, f.P1)(te, _ => _ == null ? void 0 : _.policies),
				K = (_, R, J) => {
					let oe = Pe.getMembership(_);
					if (!oe) {
						const le = Pe.getMemberships(_);
						if (!le || !R) return !1;
						oe = le.find(ge => ge.account.id === R)
					}
					if (!oe || !J) return !1;
					try {
						return J(oe.permissions)
					} catch {
						return !1
					}
				},
				se = _ => {
					var R, J;
					return (R = (J = $(_)) === null || J === void 0 ? void 0 : J.meta.has_pro_zones) !== null && R !== void 0 ? R : !1
				},
				ce = _ => {
					var R, J;
					return (R = (J = $(_)) === null || J === void 0 ? void 0 : J.meta.has_business_zones) !== null && R !== void 0 ? R : !1
				},
				ie = _ => ce(_) || se(_),
				fe = (_, R) => {
					const J = Te(_, R);
					return !!J && !!J.enabled
				},
				Te = (_, R) => {
					const J = Pe.getMembership(_),
						oe = J && J.account;
					return oe && oe.legacy_flags && oe.legacy_flags[R]
				},
				ve = _ => fe(_, "custom_pages"),
				Ce = _ => !!_ && _["webhooks.webhooks.enabled"],
				j = _ => U(_, "bots", "enabled"),
				ae = _ => U(_, "billing", "annual_subscriptions_enable"),
				pe = _ => _ ? Boolean(U(_, "ConstellationAI", "v2_ui")) : !1,
				Se = _ => _ ? Boolean(U(_, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				ke = _ => _ ? Boolean(U(_, "AIgateway", "enabled")) : !1,
				Re = _ => Te(_, "enterprise_zone_quota"),
				xe = _ => {
					const R = Re(_);
					return !R || !R.available ? -1 : R.available
				},
				we = _ => _.accountMembers,
				Me = (0, t.P1)("accountMembers", we),
				je = _ => _.accountMember && _.accountMember.isRequesting,
				Ne = _ => _.accountRoles,
				Be = (0, t.P1)("accountRoles", Ne),
				Fe = (_, R) => {
					const J = Pe.getMemberships(_),
						oe = J && J.find(Ee => Ee.account.id === R);
					if (oe) return oe.account.name.replace(" Account", " account");
					const le = Pe.getMembership(_),
						ge = le && le.account;
					return ge && ge.id === R ? ge.name : null
				},
				Le = (_, R) => {
					const J = Pe.getMemberships(_),
						oe = J && J.find(Ee => Ee.account.id === R);
					if (oe) return oe.account.settings.access_approval_expiry;
					const le = Pe.getMembership(_),
						ge = le && le.account;
					return ge && ge.id === R ? ge.settings.access_approval_expiry : null
				},
				$e = (_, R) => {
					const J = Le(_, R);
					return J ? g().utc(J).isAfter() : !1
				},
				De = (_, R, J) => {
					const oe = Le(_, R);
					let le = oe ? g().utc(oe) : null;
					return !le || !le.isAfter() ? "" : le && le.year() === 3e3 ? J("account.access_approval.card_expiration_forever") : J("account.access_approval.card_expiration_text", {
						expiryTimestamp: le.local().format(E.U.DateTime)
					})
				},
				ne = _ => _ && _.member && _.member.edit,
				T = (_, R) => {
					const J = Pe.getMembership(_),
						oe = J && J.account;
					return oe ? oe.id !== R : !1
				},
				B = _ => _.dpa,
				q = (0, t.P1)("dpa", B),
				ue = _ => _.webhook,
				me = _ => _.webhooks,
				ye = (0, t.P1)("webhook", me),
				_e = _ => _.accountLegoContract,
				Ie = (0, t.P1)("accountLegoContract", _e),
				Ue = _ => {
					const R = Ie(_);
					return (R == null ? void 0 : R.lego_state) ? R.lego_state : ""
				},
				Ve = _ => Ue(_) === "signed",
				We = _ => _e(_).isRequesting,
				be = _ => {
					const R = Ie(_);
					return R && R.subscription_type ? R.subscription_type : ""
				},
				Ae = _ => be(_) !== "",
				Pe = {
					getMembership: te,
					getMemberships: Y,
					getFilteredMemberships: D,
					getAccountMembers: Me,
					getAccountRoles: Be
				},
				ze = _ => _.accountSingle,
				Ke = (0, t.P1)("accountSingle", ze),
				Je = _ => {
					const R = [ROLES.SUPER_ADMIN, ROLES.ADMIN];
					return hasRole(_, R)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				$f: function() {
					return a
				},
				AD: function() {
					return p
				},
				BF: function() {
					return u
				},
				Bs: function() {
					return $
				},
				Ci: function() {
					return O
				},
				E6: function() {
					return s
				},
				Hq: function() {
					return ve
				},
				Ms: function() {
					return Q
				},
				Q2: function() {
					return f
				},
				Td: function() {
					return h
				},
				Z: function() {
					return se
				},
				a: function() {
					return S
				},
				a5: function() {
					return ie
				},
				du: function() {
					return g
				},
				ec: function() {
					return I
				},
				f: function() {
					return Te
				},
				hL: function() {
					return ce
				},
				ji: function() {
					return Z
				},
				jo: function() {
					return V
				},
				k4: function() {
					return fe
				},
				lI: function() {
					return d
				},
				p1: function() {
					return m
				},
				pK: function() {
					return Ce
				},
				pf: function() {
					return t
				},
				qR: function() {
					return C
				},
				rV: function() {
					return l
				},
				u1: function() {
					return E
				},
				w4: function() {
					return r
				},
				yD: function() {
					return K
				}
			});
			var e = n("../react/utils/url.ts");

			function o(j, ae) {
				return j && j[ae]
			}
			const i = j => !d(j).isRequesting;

			function d(j) {
				return j.entitlements.zone
			}

			function p(j) {
				return d(j).data
			}
			const f = j => {
				var ae, pe;
				return ((ae = d(j).paginationData) === null || ae === void 0 || (pe = ae.options) === null || pe === void 0 ? void 0 : pe.editedDate) || {}
			};

			function l(j, ae) {
				const pe = p(j);
				return pe ? o(pe, ae) : void 0
			}
			const g = (j, ae) => l(j, ae) === !0;

			function E(j) {
				return j.entitlements.account
			}

			function t(j) {
				return E(j).data
			}
			const r = j => {
				var ae, pe;
				return ((ae = E(j).paginationData) === null || ae === void 0 || (pe = ae.options) === null || pe === void 0 ? void 0 : pe.editedDate) || {}
			};

			function s(j) {
				return !E(j).isRequesting
			}

			function u(j, ae) {
				const pe = t(j);
				return pe ? o(pe, ae) : void 0
			}

			function a(j, ae) {
				return u(j, ae) === !0
			}

			function y(j, ae) {
				return ae.every(pe => a(j, pe))
			}

			function m(j) {
				return a(j, "contract.customer_enabled")
			}

			function C(j) {
				return a(j, "contract.self_service_allowed")
			}

			function h(j) {
				return a(j, "billing.partners_managed")
			}
			const S = j => m(j) && C(j),
				$ = j => a(j, "enterprise.ecp_allowed");

			function k(j) {
				return P(j) || a(j, "argo.allow_smart_routing") || a(j, "argo.allow_tiered_caching") || a(j, "rate_limiting.enabled") || a(j, "ctm.enabled") || a(j, "workers.enabled") || a(j, "workers.kv_store.enabled") || a(j, "stream.enabled")
			}
			const P = j => g(j, "argo.allow_smart_routing") || g(j, "argo.allow_tiered_caching"),
				Q = j => a(j, "zone.cname_setup_allowed") || a(j, "zone.partial_setup_allowed") || g(j, "zone.partial_setup_allowed"),
				V = j => a(j, "argo.allow_smart_routing") || g(j, "argo.allow_smart_routing"),
				Y = j => a(j, "argo.allow_tiered_caching") || g(j, "argo.allow_tiered_caching"),
				z = j => V(j) || Y(j),
				H = j => a(j, "ctm.enabled"),
				U = j => {
					const ae = u(j, "ctm.load_balancers");
					return typeof ae == "number" ? ae : 0
				},
				F = j => {
					const ae = u(j, "ctm.pools");
					return typeof ae == "number" ? ae : 0
				},
				L = j => {
					const ae = u(j, "ctm.origins");
					return typeof ae == "number" ? ae : 0
				},
				I = j => a(j, "workers.enabled"),
				X = j => a(j, "stream.enabled"),
				N = j => {
					const ae = u(j, "access.users_allowed");
					return typeof ae == "number" ? ae : 0
				},
				ee = j => N(j) > 0,
				te = j => {
					const ae = l(j, "dedicated_certificates");
					return typeof ae == "number" ? ae : 0
				},
				G = j => te(j) > 0,
				w = j => {
					const ae = l(j, "rate_limiting.max_rules");
					return typeof ae == "number" ? ae : 0
				},
				M = j => a(j, "rate_limiting.enabled"),
				b = j => {
					const ae = l(j, "page_rules");
					return typeof ae == "number" ? ae : 0
				},
				D = j => b(j) > 0,
				x = j => {
					const ae = u(j, "dns_firewall.max_clusters_allowed");
					return typeof ae == "number" ? ae : 0
				},
				O = j => x(j) > 0,
				Z = j => g(j, "zone.advanced_certificate_manager") || a(j, "zone.advanced_certificate_manager"),
				K = j => l(j, "authoritative_dns.proxy_record_allowed") === !1 || u(j, "authoritative_dns.proxy_record_allowed") === !1,
				se = j => a(j, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				ce = j => l(j, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				ie = j => {
					const ae = l(j, "authoritative_dns.min_record_ttl_allowed");
					return typeof ae == "number" && ae > 1 ? ae : 60
				},
				fe = j => a(j, "foundation_dns.advanced_nameservers_allowed") || g(j, "foundation_dns.advanced_nameservers_allowed"),
				Te = (j, ae) => ((0, e.el)(window.location.pathname) ? l : u)(j, ae),
				ve = j => a(j, "authoritative_dns.multi_provider_allowed") || g(j, "authoritative_dns.multi_provider_allowed"),
				Ce = j => a(j, "secondary_dns.secondary_overrides") || g(j, "secondary_dns.secondary_overrides")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				r: function() {
					return d
				},
				v: function() {
					return p
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts"),
				i = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const d = f => {
				const l = f.userCommPreferences.data;
				if (l == null ? void 0 : l["language-locale"]) return i.Z.set(e.ly, l["language-locale"]), l["language-locale"];
				{
					i.Z.has(e.ly) || i.Z.set(e.ly, e.ZW);
					const g = i.Z.get(e.ly);
					return p(g) ? g : e.ZW
				}
			};

			function p(f) {
				const l = Object.keys(o.Q).find(g => o.Q[g] === f);
				return !!f && typeof f == "string" && l != null && (0, e.S8)(!1, l)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				$8: function() {
					return p
				},
				BG: function() {
					return E
				},
				GP: function() {
					return a
				},
				GU: function() {
					return $
				},
				PR: function() {
					return i
				},
				h$: function() {
					return C
				},
				h8: function() {
					return t
				},
				kk: function() {
					return m
				},
				l8: function() {
					return l
				},
				mV: function() {
					return y
				},
				vW: function() {
					return f
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const o = k => k.user,
				i = (0, e.P1)("user", o),
				d = k => {
					var P;
					return (P = i(k)) === null || P === void 0 ? void 0 : P.email.endsWith("@cloudflare.com")
				},
				p = k => {
					var P;
					return !!((P = i(k)) === null || P === void 0 ? void 0 : P.id)
				},
				f = k => {
					const P = i(k);
					if (!!P) return P.first_name && P.last_name ? `${P.first_name} ${P.last_name}` : P.email
				},
				l = k => {
					const P = i(k);
					return P && P.has_enterprise_zones
				},
				g = k => k.userCommPreferences,
				E = (0, e.P1)("userCommPreferences", g),
				t = k => {
					const P = i(k);
					return P && P.email_verified
				},
				r = k => {
					const P = E(k);
					return P && P.preferences.marketing_communication
				},
				s = k => k.userDetails,
				u = (0, e.P1)("userDetails", s),
				a = k => {
					const P = u(k);
					return P && P["2FA-RECOVERY"] === "scheduled"
				},
				y = k => {
					const P = u(k);
					return P && P["2FA-RECOVERY"] === "interrupted"
				},
				m = k => {
					const P = u(k);
					return P == null ? void 0 : P["NEW-USER-EMAIL"]
				},
				C = k => k.gates.assignments,
				h = (k, P) => k && k[P];

			function S(k, P) {
				const Q = C(k);
				return Q ? h(Q, P) : void 0
			}
			const $ = (k, P) => S(k, P) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				$4: function() {
					return Q
				},
				$t: function() {
					return Fe
				},
				A4: function() {
					return m
				},
				Cu: function() {
					return C
				},
				DQ: function() {
					return fe
				},
				Ej: function() {
					return Y
				},
				FH: function() {
					return S
				},
				ID: function() {
					return M
				},
				Ko: function() {
					return Se
				},
				Le: function() {
					return Ce
				},
				Ly: function() {
					return x
				},
				M3: function() {
					return Me
				},
				N8: function() {
					return we
				},
				NY: function() {
					return se
				},
				Ns: function() {
					return D
				},
				Ox: function() {
					return De
				},
				P4: function() {
					return z
				},
				RO: function() {
					return G
				},
				SX: function() {
					return ce
				},
				Tr: function() {
					return pe
				},
				U: function() {
					return h
				},
				Ug: function() {
					return k
				},
				V6: function() {
					return je
				},
				WR: function() {
					return ne
				},
				Xg: function() {
					return y
				},
				ZB: function() {
					return ve
				},
				_y: function() {
					return b
				},
				cU: function() {
					return ke
				},
				cg: function() {
					return ie
				},
				d2: function() {
					return X
				},
				jN: function() {
					return U
				},
				jg: function() {
					return Z
				},
				kC: function() {
					return V
				},
				kf: function() {
					return Ne
				},
				ko: function() {
					return te
				},
				mK: function() {
					return Le
				},
				nA: function() {
					return a
				},
				oY: function() {
					return H
				},
				qM: function() {
					return j
				},
				rq: function() {
					return K
				},
				tS: function() {
					return P
				},
				tU: function() {
					return L
				},
				vB: function() {
					return $e
				},
				vM: function() {
					return F
				},
				wH: function() {
					return $
				},
				wn: function() {
					return Te
				},
				xU: function() {
					return I
				},
				xw: function() {
					return ae
				},
				z5: function() {
					return w
				},
				zO: function() {
					return Re
				},
				zW: function() {
					return Be
				},
				zh: function() {
					return N
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				i = n("../../../../node_modules/lodash/get.js"),
				d = n.n(i),
				p = n("../../../../node_modules/moment/moment.js"),
				f = n.n(p),
				l = n("../react/common/constants/billing/index.ts");

			function g(T) {
				for (var B = 1; B < arguments.length; B++) {
					var q = arguments[B] != null ? Object(arguments[B]) : {},
						ue = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(q).filter(function(me) {
						return Object.getOwnPropertyDescriptor(q, me).enumerable
					})), ue.forEach(function(me) {
						E(T, me, q[me])
					})
				}
				return T
			}

			function E(T, B, q) {
				return B = t(B), B in T ? Object.defineProperty(T, B, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[B] = q, T
			}

			function t(T) {
				var B = r(T, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function r(T, B) {
				if (typeof T != "object" || T === null) return T;
				var q = T[Symbol.toPrimitive];
				if (q !== void 0) {
					var ue = q.call(T, B || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(T)
			}
			const s = (0, o.P1)("zone", T => T.zone),
				u = T => {
					var B;
					return (B = T.zoneVersioning) === null || B === void 0 ? void 0 : B.zoneVersionSelector
				},
				a = (0, e.P1)(s, u, (T, B) => {
					var q, ue, me;
					let ye;
					if (Array.isArray(T) && T.length === 1 ? ye = T[0] : T && !Array.isArray(T) && (ye = T), !ye) return;
					const _e = !!(B == null ? void 0 : B.enabled);
					return g({}, ye, ye.name && {
						name: _e ? B.rootZoneName : ye.name
					}, {
						versioning: {
							enabled: _e,
							isRoot: !((q = ye.name) === null || q === void 0 ? void 0 : q.endsWith(".config.cfdata.org")),
							version: _e ? B.selectedVersion : 0,
							rootZoneId: _e ? B.rootZoneId : (ue = (me = ye) === null || me === void 0 ? void 0 : me.id) !== null && ue !== void 0 ? ue : ""
						}
					})
				}),
				y = T => T.zone,
				m = (0, e.P1)(a, y, (T, B) => ({
					data: T,
					meta: B
				})),
				C = T => {
					var B, q;
					return (B = (q = a(T)) === null || q === void 0 ? void 0 : q.id) !== null && B !== void 0 ? B : ""
				},
				h = T => T.zones,
				S = T => T.zonesRoot,
				$ = T => T.zonesAccount,
				k = (0, o.P1)("zones", h),
				P = (0, o.P1)("zonesRoot", S),
				Q = (0, o.P1)("zonesAccount", $);

			function V(T) {
				const B = a(T);
				return B ? B.created_on : null
			}

			function Y(T, B, q) {
				const ue = V(T);
				if (!ue) return;
				const me = f().duration(B, q),
					ye = new Date(ue),
					_e = new Date(new Date().getTime() - me.asMilliseconds());
				return ye.getTime() > _e.getTime()
			}

			function z(T) {
				const B = a(T);
				return B ? B.status : null
			}

			function H(T) {
				const B = a(T);
				return B ? B.type : null
			}

			function U(T) {
				return T.plan_pending ? T.plan_pending : T.plan
			}

			function F(T) {
				const B = a(T);
				if (!B) return;
				const q = U(B);
				return q && q.legacy_id
			}

			function L(T, B) {
				const q = U(T);
				return !!q && l.Gs.indexOf(q.legacy_id) >= l.Gs.indexOf(B)
			}

			function I(T) {
				return !!T && T.status === "initializing"
			}

			function X(T) {
				return !!T && T.status === "pending"
			}

			function N(T) {
				return !!T && T.status === "active"
			}

			function ee(T, B) {
				if (!T) return !1;
				const q = U(T);
				return !!q && q.legacy_id === B
			}

			function te(T) {
				return ee(T, "enterprise")
			}
			const G = T => te(a(T));

			function w(T) {
				return ee(T, "business")
			}
			const M = T => w(a(T));

			function b(T) {
				return ee(T, "pro")
			}

			function D(T) {
				return ee(T, "free")
			}

			function x(T) {
				return !te(T)
			}

			function O(T) {
				return T && T.owner
			}

			function Z(T, B) {
				const q = O(B);
				return !!q && q.type === "user" && q.id === T.id
			}

			function K(T) {
				const B = a(T);
				return !!B && B.type === "partial"
			}

			function se(T) {
				const B = a(T);
				return !!B && B.type === "secondary"
			}

			function ce(T) {
				const B = a(T);
				return B && K(T) && B.host
			}
			const ie = T => {
					var B;
					const q = a(T);
					return !!(q == null ? void 0 : q.host) && !!((B = q.plan) === null || B === void 0 ? void 0 : B.externally_managed)
				},
				fe = T => {
					const B = k(T);
					return B && B.some(te)
				},
				Te = (T, B) => {
					const q = a(T);
					return q && q.betas ? q.betas.includes(B) : !1
				},
				ve = (T, ...B) => d()(T, ["zoneFlags", "data", ...B]),
				Ce = (T, ...B) => d()(T, ["accountFlags", "data", ...B]),
				j = T => T.accountFlags.isRequesting,
				ae = T => T.zoneFlags.isRequesting,
				pe = (T, ...B) => d()(T, ["zoneFlagsChanges", "data", ...B]),
				Se = T => T.zoneFlagsChanges.isRequesting,
				ke = T => T.zoneFlags && T.zoneFlags.data,
				Re = T => T.zoneFlags,
				xe = (0, e.P1)(ke, Re, (T, B) => ({
					data: T,
					meta: B
				})),
				we = (0, o.P1)("abuseUrls", T => T.overview.abuseUrls),
				Me = T => {
					const B = a(T);
					return B ? `/${B.account.id}/${B.name}` : null
				},
				je = T => T.zoneMarketingCampaigns,
				Ne = T => T.overview.zoneBlocks.data,
				Be = T => T.overview.zoneBlocks.isRequesting,
				Fe = T => T.overview.zoneBlocks.hasData,
				Le = T => {
					var B, q;
					return (T == null || (B = T.overview.zoneBlocks) === null || B === void 0 || (q = B.paginationData) === null || q === void 0 ? void 0 : q.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				$e = T => T.overview.zoneBlocksReview.isRequesting,
				De = T => T.overview.zoneHold,
				ne = (0, o.P1)("zoneHold", De)
		},
		"../react/common/utils/formatDate.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			v.Z = (o, i, d = !1) => (0, e.p6)(o, i, d)
		},
		"../react/common/utils/hasRole.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				n: function() {
					return o
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts");
			const o = (i, d) => {
				const {
					roles: p = []
				} = (0, e.uF)(i) || {};
				return d.some(f => p.includes(f))
			}
		},
		"../react/common/utils/isGuards.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Q$: function() {
					return i
				},
				t: function() {
					return f
				},
				v5: function() {
					return d
				},
				zE: function() {
					return p
				}
			});
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const i = l => l ? ["page", "per_page", "count", "total_count"].every(E => E in l && l[E]) : !1,
				d = (l = "") => e.Dy.includes(l.toLowerCase()),
				p = l => l !== null && typeof l == "object" && "name" in l && "size" in l && "type" in l && typeof l.slice == "function",
				f = l => (0, o.Z)(l)
		},
		"../react/common/validators/index.js": function(W, v, n) {
			"use strict";
			n.d(v, {
				K2: function() {
					return o
				},
				Lb: function() {
					return i
				},
				XI: function() {
					return d
				},
				bK: function() {
					return g
				},
				jk: function() {
					return l
				},
				wb: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = E => /^https?:\/\/(.*)/.test(E),
				i = E => e.default.hostname.test(E),
				d = E => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(E),
				p = E => /^[!-~]+$/.test(E),
				f = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				l = E => f.test(E),
				g = E => !!E && !!E.length && /^[ -~]+$/.test(E)
		},
		"../react/initReact.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				o: function() {
					return Je
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = n("webpack/sharing/consume/default/react-dom/react-dom"),
				p = n("webpack/sharing/consume/default/react-redux/react-redux"),
				f = n("../../../../node_modules/swr/core/dist/index.mjs"),
				l = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				g = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				E = n("../react/shims/focus-visible.js"),
				t = n("../react/app/components/DeepLink/index.ts"),
				r = n("../react/utils/history.ts"),
				s = n("../react/app/providers/storeContainer.js"),
				u = n("../../../../node_modules/prop-types/index.js"),
				a = n.n(u),
				y = n("../react/common/selectors/languagePreferenceSelector.ts"),
				m = n("../react/utils/translator.tsx"),
				C = n("../../../common/intl/intl-react/src/index.ts"),
				h = n("../../../dash/intl/intl-translations/src/index.ts"),
				S = n("../node_modules/query-string/query-string.js"),
				$ = n.n(S),
				k = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				P = n("../react/common/actions/userActions.ts"),
				Q = n("../react/common/selectors/userSelectors.ts"),
				V = n("../react/utils/i18n.ts"),
				Y = n("../react/utils/bootstrap.ts");

			function z(_) {
				for (var R = 1; R < arguments.length; R++) {
					var J = arguments[R] != null ? Object(arguments[R]) : {},
						oe = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(J).filter(function(le) {
						return Object.getOwnPropertyDescriptor(J, le).enumerable
					})), oe.forEach(function(le) {
						H(_, le, J[le])
					})
				}
				return _
			}

			function H(_, R, J) {
				return R = U(R), R in _ ? Object.defineProperty(_, R, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[R] = J, _
			}

			function U(_) {
				var R = F(_, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function F(_, R) {
				if (typeof _ != "object" || _ === null) return _;
				var J = _[Symbol.toPrimitive];
				if (J !== void 0) {
					var oe = J.call(_, R || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(_)
			}
			let L = $().parse(location.search);
			const I = _ => {
					const R = (0, Y.$8)() ? [(0, h.Fy)(h.if.changes), (0, h.Fy)(h.if.common), (0, h.Fy)(h.if.navigation), (0, h.Fy)(h.if.overview), (0, h.Fy)(h.if.onboarding), (0, h.Fy)(h.if.invite), (0, h.Fy)(h.if.login), (0, h.Fy)(h.if.dns), (0, h.Fy)(h.n4.ssl_tls), (0, h.Fy)(h.if.message_inbox)] : [(0, h.Fy)(h.if.common), (0, h.Fy)(h.if.invite), (0, h.Fy)(h.if.login), (0, h.Fy)(h.if.onboarding)];
					L.lang ? X(_) : k.Z.get(V.th) && N(_, k.Z.get(V.ly));
					const J = async oe => (await Promise.all(R.map(ge => ge(oe)))).reduce((ge, Ee) => z({}, ge, Ee), {});
					return o().createElement(C.RD.Provider, {
						value: _.languagePreference
					}, o().createElement(C.bd, {
						translator: m.Vb,
						locale: _.languagePreference
					}, o().createElement(C.lm, {
						loadPhrases: J
					}, _.children)))
				},
				X = async _ => {
					let R = L.lang.substring(0, L.lang.length - 2) + L.lang.substring(L.lang.length - 2, L.lang.length).toUpperCase();
					if (!(0, y.v)(R)) {
						console.warn(`${R} is not a supported locale.`), delete L.lang, _.history.replace({
							search: $().stringify(L)
						});
						return
					}
					k.Z.set(V.ly, R), delete L.lang, N(_, R), _.isAuthenticated || _.history.replace({
						search: $().stringify(L)
					})
				}, N = async (_, R) => {
					if (_.isAuthenticated) try {
						await _.setUserCommPreferences({
							"language-locale": R
						}, {
							hideErrorAlert: !0
						}), k.Z.remove(V.th), _.history.replace({
							search: $().stringify(L)
						})
					} catch (J) {
						k.Z.set(V.th, !0), console.error(J)
					} else k.Z.set(V.th, !0)
				}, ee = _ => {
					const R = (0, Q.PR)(_);
					return {
						isAuthenticated: !!(R && R.id),
						languagePreference: k.Z.get(V.ly) || (0, y.r)(_)
					}
				}, te = {
					setUserCommPreferences: P.V_
				};
			var G = (0, i.withRouter)((0, p.connect)(ee, te)(I));
			I.propTypes = {
				history: a().object,
				languagePreference: a().string.isRequired,
				children: a().node.isRequired,
				isAuthenticated: a().bool,
				setUserCommPreferences: a().func.isRequired
			};
			var w = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				M = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				b = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let D;
			const x = ({
				selectorPrefix: _ = "c_"
			} = {}) => (D || (D = (0, b.Z)({
				dev: !1,
				selectorPrefix: _
			})), D);
			var O = n("../react/common/components/ModalManager.tsx"),
				Z = n("../react/app/components/ErrorBoundary.tsx"),
				K = n("../react/common/actions/notificationsActions.ts");
			const ce = (n.g.bootstrap || {}).data || {};
			class ie extends o().Component {
				componentDidMount() {
					ce.messages && this.dispatchNotificationActions(ce.messages)
				}
				dispatchNotificationActions(R) {
					R.forEach(J => {
						const {
							type: oe,
							message: le,
							persist: ge
						} = J;
						["success", "info", "warn", "error"].includes(oe) && this.props.notifyAdd(oe, (0, m.ZP)(le), {
							persist: !!ge
						})
					})
				}
				render() {
					return null
				}
			}
			var Te = (0, i.withRouter)((0, p.connect)(null, {
				notifyAdd: K.IH
			})(ie));
			ie.propTypes = {
				notifyAdd: a().func.isRequired
			};
			var ve = n("../react/app/redux/index.ts"),
				Ce = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function j() {
				var _;
				const R = (0, ve.p4)(Q.PR),
					J = (R == null || (_ = R.email) === null || _ === void 0 ? void 0 : _.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					oe = (0, Ce.Yc)();
				(0, e.useEffect)(() => {
					oe({
						userType: J
					})
				}, [J, oe])
			}
			var ae = n("../react/common/selectors/entitlementsSelectors.ts"),
				pe = n("../react/common/selectors/accountSelectors.ts"),
				Se = n("../react/utils/url.ts");
			const ke = ["accountId", "is_ent"];

			function Re() {
				const _ = (0, Ce.f7)(),
					R = (0, i.useHistory)(),
					J = (0, Se.uW)(R.location.pathname),
					oe = (0, Ce.Yc)(),
					le = (0, Ce.O$)(),
					ge = (0, ve.p4)(ae.u1),
					Ee = !ge.isRequesting && !!ge.data,
					He = (0, ve.p4)(ae.p1),
					Ye = (0, ve.p4)(pe.Xu),
					Ze = (0, ve.p4)(pe.uF),
					Xe = !Ye.isRequesting && !!Ye.data;
				(0, e.useEffect)(() => {
					J && Xe && Ze && Ee && J === Ze.account.id ? oe({
						accountId: Ze.account.id,
						is_ent: He
					}) : (!J || J in _ && _.accountId !== J) && le(ke)
				}, [Xe, Ze, oe, le, Ee, He, J, _])
			}
			var xe = n("../react/common/selectors/zoneSelectors.ts");

			function we() {
				const _ = (0, ve.p4)(xe.nA),
					R = (0, Ce.Yc)();
				(0, e.useEffect)(() => {
					var J;
					R({
						zone_id: _ == null ? void 0 : _.id,
						zone_plan: _ == null || (J = _.plan) === null || J === void 0 ? void 0 : J.legacy_id
					})
				}, [_, R])
			}
			const Me = () => (j(), Re(), we(), null);
			var je = n("../react/app/components/Persistence/index.tsx"),
				Ne = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				Be = n("../react/app/components/LoadingSuspense.tsx");
			const Fe = o().lazy(() => Promise.all([n.e(78042), n.e(2480), n.e(10008), n.e(56310), n.e(21634), n.e(48155), n.e(94012), n.e(72019), n.e(49861), n.e(5668), n.e(81252), n.e(7484), n.e(39760), n.e(94684), n.e(82465), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var $e = () => o().createElement(Be.Z, null, o().createElement(Fe, null)),
				De = n("../libs/init/loading.ts");
			const ne = () => (e.useEffect(() => De.s, []), null);
			var T = n("../../../../node_modules/moment/moment.js"),
				B = n.n(T);
			const q = _ => {
					switch (_) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return _.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return _.toLowerCase();
						default:
							return "en"
					}
				},
				ue = () => {
					const _ = (0, ve.p4)(y.r);
					(0, e.useEffect)(() => {
						const R = q(_);
						R !== B().locale() && B().locale(R), document.documentElement.lang = _
					}, [_])
				},
				me = () => {
					(0, e.useEffect)(() => {
						async function _() {
							var R, J;
							let oe;
							if (((R = window) === null || R === void 0 || (J = R.build) === null || J === void 0 ? void 0 : J.isPreviewDeploy) && (oe = "cookie"), !!oe) try {
								const le = document.head.querySelector("link[rel=icon]");
								le && (le.href = (await n("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${oe}.ico`)).default)
							} catch {}
						}
						_()
					}, [])
				};
			var ye = n("../react/common/constants/constants.ts");
			const _e = () => {
					var _;
					const R = (0, i.useLocation)(),
						[J, oe] = (0, e.useState)(((_ = window) === null || _ === void 0 ? void 0 : _.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, e.useEffect)(() => {
						const le = $().parse(R.search);
						if (le.pt && k.Z.set(ye.sJ, le.pt), le == null ? void 0 : le.devPanel) {
							var ge, Ee;
							(ge = window) === null || ge === void 0 || (Ee = ge.localStorage) === null || Ee === void 0 || Ee.setItem("gates_devtools_ui_gates_controller_enabled", "true"), oe(!0)
						}
					}, [R.search]), {
						devPanelEnabled: J
					}
				},
				Ie = o().lazy(() => Promise.all([n.e(78042), n.e(2480), n.e(10008), n.e(56310), n.e(21634), n.e(48155), n.e(94012), n.e(72019), n.e(49861), n.e(14696), n.e(82869), n.e(81252), n.e(7484), n.e(39760), n.e(94684), n.e(82465), n.e(18828), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				Ue = o().lazy(() => Promise.all([n.e(83741), n.e(65447), n.e(78042), n.e(48155), n.e(14696), n.e(26337), n.e(94684), n.e(69088), n.e(18828), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var We = ({
					userIsAuthed: _
				}) => {
					ue(), me();
					const {
						devPanelEnabled: R
					} = _e();
					return o().createElement(e.Suspense, {
						fallback: o().createElement(ne, null)
					}, o().createElement(i.Switch, null, !_ && !0 && o().createElement(i.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, o().createElement(Ue, null)), o().createElement(i.Route, {
						render: () => o().createElement(Ne.ZC, {
							minHeight: "100vh"
						}, o().createElement(Ie, null))
					})), R && o().createElement($e, null))
				},
				be = n("../../../../node_modules/yup/es/index.js"),
				Ae = n("../../../common/util/types/src/utils/index.ts");
			const Pe = {
				cfEmail: () => be.Z_().email((0, m.ZP)("common.validation.email")).required((0, m.ZP)("common.validation.email"))
			};
			(0, Ae.Yd)(Pe).forEach(_ => {
				be.kM(be.Z_, _, Pe[_])
			});
			const ze = o().lazy(() => Promise.all([n.e(6368), n.e(10008), n.e(94012), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				Ke = () => {
					const _ = (0, Y.$8)(),
						[R, J] = (0, e.useState)(_ ? ze : o().Fragment),
						[oe, le] = (0, e.useState)((0, M.Yc)());
					(0, e.useEffect)(() => {
						(0, M.fF)(() => le((0, M.Yc)()))
					}, []);
					const ge = Ee => {
						le(Ee), (0, M.C8)(Ee)
					};
					return (0, e.useEffect)(() => {
						J(_ ? ze : o().Fragment)
					}, [_]), (0, e.useEffect)(() => {
						const Ee = () => ge(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Ee), () => {
							window.removeEventListener("storage", Ee)
						}
					}, []), o().createElement(e.Suspense, {
						fallback: null
					}, o().createElement(p.Provider, {
						store: (0, s.bh)()
					}, o().createElement(i.Router, {
						history: r.Z
					}, o().createElement(R, null, o().createElement(w.Z, {
						renderer: x()
					}, o().createElement(G, null, o().createElement(Z.Z, {
						sentryTag: "Root"
					}, o().createElement(f.J$, {
						value: {
							fetcher: Ee => fetch(Ee).then(He => He.json())
						}
					}, o().createElement(Me, null), o().createElement(Te, null), o().createElement(je.Z_, {
						onDarkModeChangeCb: ge
					}, o().createElement(t.ZP, null, o().createElement(We, {
						userIsAuthed: _
					}))), o().createElement(O.ZP, null), o().createElement(l.F0, null)))))))))
				},
				Je = () => {
					(0, d.render)(o().createElement(Ke, null), document.getElementById("react-app"))
				}
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Jz: function() {
					return E
				},
				OK: function() {
					return p
				},
				_Y: function() {
					return l
				},
				fD: function() {
					return r
				},
				h_: function() {
					return g
				},
				w6: function() {
					return s
				},
				yc: function() {
					return t
				}
			});

			function e(a) {
				for (var y = 1; y < arguments.length; y++) {
					var m = arguments[y] != null ? Object(arguments[y]) : {},
						C = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(m).filter(function(h) {
						return Object.getOwnPropertyDescriptor(m, h).enumerable
					})), C.forEach(function(h) {
						o(a, h, m[h])
					})
				}
				return a
			}

			function o(a, y, m) {
				return y = i(y), y in a ? Object.defineProperty(a, y, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[y] = m, a
			}

			function i(a) {
				var y = d(a, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function d(a, y) {
				if (typeof a != "object" || a === null) return a;
				var m = a[Symbol.toPrimitive];
				if (m !== void 0) {
					var C = m.call(a, y || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(a)
			}
			let p = function(a) {
					return a.Sending = "sending", a.Success = "success", a.Failed = "failed", a.Latent = "latent", a
				}({}),
				f = function(a) {
					return a[a.Success = 200] = "Success", a[a.BadRequest = 400] = "BadRequest", a
				}({});
			const l = {
					status: p.Latent,
					statusCode: void 0
				},
				g = {
					status: p.Sending
				},
				E = {
					status: p.Success,
					statusCode: f.Success
				},
				t = {
					status: p.Failed,
					statusCode: f.BadRequest
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
					}, l),
					installsList: e({
						value: []
					}, l),
					categoriesList: e({
						value: []
					}, l),
					recommendedAppsList: e({
						value: []
					}, l),
					metadata: e({
						value: null
					}, l),
					app: e({
						value: null
					}, l),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, l)
				},
				u = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Ux: function() {
					return r
				},
				cz: function() {
					return u
				},
				im: function() {
					return l
				},
				pG: function() {
					return s
				},
				t$: function() {
					return a
				}
			});
			var e = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(m) {
				for (var C = 1; C < arguments.length; C++) {
					var h = arguments[C] != null ? Object(arguments[C]) : {},
						S = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(h).filter(function($) {
						return Object.getOwnPropertyDescriptor(h, $).enumerable
					})), S.forEach(function($) {
						i(m, $, h[$])
					})
				}
				return m
			}

			function i(m, C, h) {
				return C = d(C), C in m ? Object.defineProperty(m, C, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[C] = h, m
			}

			function d(m) {
				var C = p(m, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function p(m, C) {
				if (typeof m != "object" || m === null) return m;
				var h = m[Symbol.toPrimitive];
				if (h !== void 0) {
					var S = h.call(m, C || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(m)
			}
			const f = m => m.test(window.location.hostname),
				l = () => f(e.j9),
				g = () => f(MARKETPLACE_LOCAL_URL_REGEXP),
				E = (m, C) => {
					const h = random(0, 1) ? -1 : 1;
					return m.points === C.points || m.points >= APP_POINTS_THRESHOLD && C.points >= APP_POINTS_THRESHOLD ? h : m.points < 0 || C.points < 0 || m.points >= APP_POINTS_THRESHOLD || C.points >= APP_POINTS_THRESHOLD ? C.points - m.points : h
				},
				t = (m, C, h) => {
					const S = get(C, h),
						$ = get(m, h);
					return S && !isEqual(S, $)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (m, C) => C.map(h => m.find(S => S.id === h)),
						addAppVersionInfo: (m, C) => o({}, C, {
							currentVersion: C.versions.find(h => h.tag === m.versionTag),
							latestVersion: C.versions.find(h => h.tag === C.infoVersion)
						}),
						addCurrentSiteInstall: (m, C) => o({}, C, {
							currentSiteInstall: m.find(h => h.appId === C.id)
						})
					}
				},
				s = (m, C, h) => o({}, m, C, h ? {
					value: h
				} : {}),
				u = m => m.map(C => C.status),
				a = m => m.apps ? m.apps : m,
				y = m => {
					let C = ["by-cloudflare"];
					return m.filter(h => !C.includes(h.id) && h.visible).sort((h, S) => h.points < S.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(W, v, n) {
			"use strict";
			n.r(v), n.d(v, {
				categorySlugTranslationKey: function() {
					return p
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return d
				},
				translations: function() {
					return i
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: i,
				namespace: d
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

			function p(f) {
				const l = f.replace(/-/g, "_");
				return Object.keys(o).includes(l) ? l : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				L: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/url-join/lib/url-join.js"),
				o = n.n(e),
				i = n("../../../../node_modules/lodash-es/defaults.js"),
				d = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function p(u) {
				for (var a = 1; a < arguments.length; a++) {
					var y = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(y).filter(function(C) {
						return Object.getOwnPropertyDescriptor(y, C).enumerable
					})), m.forEach(function(C) {
						g(u, C, y[C])
					})
				}
				return u
			}

			function f(u, a) {
				if (u == null) return {};
				var y = l(u, a),
					m, C;
				if (Object.getOwnPropertySymbols) {
					var h = Object.getOwnPropertySymbols(u);
					for (C = 0; C < h.length; C++) m = h[C], !(a.indexOf(m) >= 0) && (!Object.prototype.propertyIsEnumerable.call(u, m) || (y[m] = u[m]))
				}
				return y
			}

			function l(u, a) {
				if (u == null) return {};
				var y = {},
					m = Object.keys(u),
					C, h;
				for (h = 0; h < m.length; h++) C = m[h], !(a.indexOf(C) >= 0) && (y[C] = u[C]);
				return y
			}

			function g(u, a, y) {
				return a = E(a), a in u ? Object.defineProperty(u, a, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[a] = y, u
			}

			function E(u) {
				var a = t(u, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function t(u, a) {
				if (typeof u != "object" || u === null) return u;
				var y = u[Symbol.toPrimitive];
				if (y !== void 0) {
					var m = y.call(u, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(u)
			}
			class r {
				constructor(a) {
					g(this, "token", void 0), g(this, "options", void 0), g(this, "setAuthHeader", y => {
						this.token = y
					}), this.token = "", this.options = (0, i.Z)(a, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(a = "GET", y, m = {}) {
					const {
						body: C
					} = m, h = f(m, ["body"]);
					return fetch(o()(this.options.baseUrl, y), p({
						method: a
					}, h, C ? {
						body: JSON.stringify(C)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(p({
							Accept: "application/json, text/plain, */*"
						}, m.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(a, y = {}) {
					const m = await this.request("GET", a, y);
					return this.parseJSONResponse(m)
				}
				async postJSON(a, y = {}) {
					const m = await this.request("POST", a, p({}, y, {
						headers: p({}, y.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(m)
				}
				parseJSONResponse(a) {
					return a.json()
				}
			}
			g(r, "defaults", {
				baseUrl: (0, d.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const s = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				JX: function() {
					return E
				},
				Jb: function() {
					return r
				},
				RX: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/lodash-es/upperFirst.js"),
				o = n("../../../../node_modules/lodash-es/isEmpty.js"),
				i = n("../node_modules/query-string/query-string.js"),
				d = n.n(i),
				p = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				f = n("../react/pages/apps/marketplace/requests/Requester.ts"),
				l = n("../react/pages/apps/marketplace/libraries/resource.ts");

			function* g(a, y, m, C) {
				const h = (0, e.Z)(y),
					[S, $, k] = [`get${h}Sending`, `get${h}Success`, `get${h}Failed`];
				try {
					yield(0, p.gz)(a[S]());
					const P = yield(0, p.RE)(s, m);
					let Q = P;
					if (Q.error) {
						yield(0, p.gz)(a[k]());
						return
					}
					return C && (Q = yield C(P)), yield(0, p.gz)(a[$](Q)), Q
				} catch {
					yield(0, p.gz)(a[k]())
				}
			}

			function* E(a, y, m, C) {
				const h = (0, e.Z)(y),
					S = `get${h}Sending`,
					$ = `get${h}Success`,
					k = `get${h}Failed`;
				try {
					yield(0, p.gz)(a[S]());
					const P = yield(0, p.RE)(u, {
						url: m,
						data: C
					});
					return yield(0, p.gz)(a[$](P)), P
				} catch {
					yield(0, p.gz)(a[k]())
				}
			}
			const t = a => (0, o.Z)(a) ? "" : `?${i.stringify(a)}`,
				r = {
					app: new l.c({
						name: "app",
						url: (a, y) => `apps/${a}${t(y)}`
					}),
					apps: new l.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new l.c({
							name: "installs",
							url: a => `sites/${a}/installs`
						}),
						delete: new l.c({
							name: "installs",
							url: a => `installs/${a}`
						})
					},
					categories: new l.c({
						name: "categories",
						url: (a = {}) => "categories" + t(a)
					}),
					metadata: {
						get: new l.c({
							name: "metadata",
							url: a => `sites/${a}/metadata`
						}),
						post: new l.c({
							name: "metadata",
							url: a => `sites/${a}/metadata`
						})
					},
					ratings: {
						default: new l.c({
							name: "ratings",
							url: (a = {}) => "ratings" + t(a)
						}),
						delete: new l.c({
							name: "ratings",
							url: a => `ratings/${a}`
						})
					},
					recommendedApps: new l.c({
						name: "recommendedApps",
						url: (a = {}) => "apps/recommend" + t(a)
					}),
					developedApps: new l.c({
						name: "developedApps",
						url: a => `user/${a}/apps`
					})
				},
				s = async a => f.L.fetchJSON(a), u = async a => {
					const {
						url: y,
						data: m
					} = a;
					return f.L.postJSON(y, {
						body: m
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Nw: function() {
					return g
				},
				U4: function() {
					return l
				},
				XO: function() {
					return f
				},
				ZP: function() {
					return E
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function o(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(s).filter(function(a) {
						return Object.getOwnPropertyDescriptor(s, a).enumerable
					})), u.forEach(function(a) {
						i(t, a, s[a])
					})
				}
				return t
			}

			function i(t, r, s) {
				return r = d(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function d(t) {
				var r = p(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function p(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var u = s.call(t, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let f = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				l = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const g = {
				resetState: () => ({
					type: l.ResetState
				}),
				initSaga: t => ({
					type: l.InitSaga,
					zoneId: t
				}),
				setZone: t => ({
					type: l.SetZone,
					zone: t
				}),
				setToken: t => ({
					type: l.SetToken,
					token: t
				}),
				clearToken: () => ({
					type: l.ClearToken
				}),
				setTokenValid: t => ({
					type: l.SetTokenValid,
					isTokenValid: t
				}),
				getCurrentUserSaga: () => ({
					type: l.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: l.CurrentUserSending
				}),
				getCurrentUserSuccess: t => ({
					type: l.CurrentUserSuccess,
					user: t
				}),
				getCurrentUserFailed: () => ({
					type: l.CurrentUserFailed
				})
			};

			function E(t = e.fD, r) {
				switch (r.type) {
					case l.ResetState:
						return o({}, e.fD);
					case l.CurrentUserSending:
						return o({}, t);
					case l.CurrentUserSuccess:
						const {
							user: s
						} = r;
						return o({}, t, {
							user: s
						});
					case l.CurrentUserFailed:
						return o({}, t);
					case l.SetZone:
						const {
							zone: u
						} = r;
						return o({}, t, {
							zone: u
						});
					case l.SetToken:
						const {
							token: a
						} = r;
						return o({}, t, {
							token: a
						});
					case l.ClearToken:
						return o({}, t, {
							token: null
						});
					case l.SetTokenValid:
						const {
							isTokenValid: y
						} = r;
						return o({}, t, {
							isTokenValid: y
						});
					default:
						return t
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Nw: function() {
					return E
				},
				U4: function() {
					return g
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return l
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function i(r) {
				for (var s = 1; s < arguments.length; s++) {
					var u = arguments[s] != null ? Object(arguments[s]) : {},
						a = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(u).filter(function(y) {
						return Object.getOwnPropertyDescriptor(u, y).enumerable
					})), a.forEach(function(y) {
						d(r, y, u[y])
					})
				}
				return r
			}

			function d(r, s, u) {
				return s = p(s), s in r ? Object.defineProperty(r, s, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = u, r
			}

			function p(r) {
				var s = f(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(r, s) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var a = u.call(r, s || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			let l = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				g = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const E = {
				resetState: () => ({
					type: g.ResetState
				}),
				zoneChangedSaga: () => ({
					type: g.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, s) => ({
					type: g.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: s
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: g.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, s) => ({
					type: g.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: s
				}),
				getDevelopedAppsSending: () => ({
					type: g.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: r => ({
					type: g.GetDevelopedAppsSuccess,
					developedApps: r
				}),
				getDevelopedAppsFailed: () => ({
					type: g.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (r, s, u) => ({
					type: g.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: s,
					version: u
				}),
				setUpdatableInstalls: r => ({
					type: g.SetUpdatableInstalls,
					updatableInstallsList: r
				}),
				getAppSaga: r => ({
					type: g.GetAppSaga,
					appIdentifier: r
				}),
				getAppSending: () => ({
					type: g.GetAppSending
				}),
				getAppSuccess: r => ({
					type: g.GetAppSuccess,
					app: r
				}),
				getAppFailed: () => ({
					type: g.GetAppFailed
				}),
				clearApp: () => ({
					type: g.ClearApp
				}),
				getAppsSaga: () => ({
					type: g.GetAppsSaga
				}),
				getAppsSending: () => ({
					type: g.GetAppsSending
				}),
				getAppsSuccess: r => ({
					type: g.GetAppsSuccess,
					appsList: r
				}),
				getAppsFailed: () => ({
					type: g.GetAppsFailed
				}),
				getInstallsSaga: r => ({
					type: g.GetInstallsSaga,
					zoneId: r
				}),
				getInstallsSending: () => ({
					type: g.GetInstallsSending
				}),
				getInstallsSuccess: r => ({
					type: g.GetInstallsSuccess,
					installsList: r
				}),
				getInstallsFailed: () => ({
					type: g.GetInstallsFailed
				}),
				getCategoriesSaga: r => ({
					type: g.GetCategoriesSaga,
					queryParams: r
				}),
				getCategoriesSending: () => ({
					type: g.GetCategoriesSending
				}),
				getCategoriesSuccess: r => ({
					type: g.GetCategoriesSuccess,
					categoriesList: r
				}),
				getCategoriesFailed: () => ({
					type: g.GetCategoriesFailed
				}),
				getMetadataSaga: r => ({
					type: g.GetMetadataSaga,
					zoneId: r
				}),
				getMetadataSending: () => ({
					type: g.GetMetadataSending
				}),
				getMetadataSuccess: r => ({
					type: g.GetMetadataSuccess,
					metadata: r
				}),
				getMetadataFailed: () => ({
					type: g.GetMetadataFailed
				}),
				postMetadataSaga: (r, s) => ({
					type: g.PostMetadataSaga,
					zoneId: r,
					data: s
				}),
				postMetadataSending: () => ({
					type: g.PostMetadataSending
				}),
				postMetadataSuccess: r => ({
					type: g.PostMetadataSuccess,
					metadata: r
				}),
				postMetadataFailed: () => ({
					type: g.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (r, s, u) => ({
					type: g.GetRecommendedAppsSaga,
					appsList: r,
					installsList: s,
					metadata: u
				}),
				getRecommendedAppsSending: () => ({
					type: g.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: r => ({
					type: g.GetRecommendedAppsSuccess,
					recommendedAppsList: r
				}),
				getRecommendedAppsFailed: () => ({
					type: g.GetRecommendedAppsFailed
				})
			};

			function t(r = e.w6, s) {
				switch (s.type) {
					case g.ResetState:
						return i({}, e.w6);
					case g.ZoneChangedSaga:
						return i({}, r, {
							installsList: i({}, e.w6.installsList),
							recommendedAppsList: i({}, e.w6.recommendedAppsList),
							metadata: i({}, e.w6.metadata)
						});
					case g.GetAppsSending:
						return i({}, r, {
							appsList: i({}, (0, o.pG)(r.appsList, e.h_))
						});
					case g.GetAppsSuccess:
						return i({}, r, {
							appsList: i({}, (0, o.pG)(r.appsList, e.Jz, s.appsList))
						});
					case g.GetAppsFailed:
						return i({}, r, {
							appsList: i({}, (0, o.pG)(r.appsList, e.yc))
						});
					case g.GetInstallsSending:
						return i({}, r, {
							installsList: i({}, (0, o.pG)(r.installsList, e.h_))
						});
					case g.GetInstallsSuccess:
						return i({}, r, {
							installsList: i({}, (0, o.pG)(r.installsList, e.Jz, s.installsList))
						});
					case g.GetInstallsFailed:
						return i({}, r, {
							installsList: i({}, (0, o.pG)(r.installsList, e.yc))
						});
					case g.GetCategoriesSending:
						return i({}, r, {
							categoriesList: i({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case g.GetCategoriesSuccess:
						return i({}, r, {
							categoriesList: i({}, (0, o.pG)(r.categoriesList, e.Jz, s.categoriesList))
						});
					case g.GetCategoriesFailed:
						return i({}, r, {
							categoriesList: i({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case g.GetMetadataSending:
						return i({}, r, {
							metadata: i({}, (0, o.pG)(r.metadata, e.h_))
						});
					case g.GetMetadataSuccess:
						return i({}, r, {
							metadata: i({}, (0, o.pG)(r.metadata, e.Jz, s.metadata))
						});
					case g.GetMetadataFailed:
						return i({}, r, {
							metadata: i({}, (0, o.pG)(r.metadata, e.yc))
						});
					case g.PostMetadataSending:
						return i({}, r, {
							metadata: i({}, (0, o.pG)(r.metadata, e.h_))
						});
					case g.PostMetadataSuccess:
						return i({}, r, {
							metadata: i({}, (0, o.pG)(r.metadata, e.Jz, s.metadata))
						});
					case g.PostMetadataFailed:
						return i({}, r, {
							metadata: i({}, (0, o.pG)(r.metadata, e.yc))
						});
					case g.GetRecommendedAppsSending:
						return i({}, r, {
							recommendedAppsList: i({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case g.GetRecommendedAppsSuccess:
						return i({}, r, {
							recommendedAppsList: i({}, (0, o.pG)(r.recommendedAppsList, e.Jz, s.recommendedAppsList))
						});
					case g.GetRecommendedAppsFailed:
						return i({}, r, {
							recommendedAppsList: i({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case g.GetAppSending:
						return i({}, r, {
							app: i({}, (0, o.pG)(r.app, e.h_))
						});
					case g.GetAppSuccess:
						return i({}, r, {
							app: i({}, (0, o.pG)(r.app, e.Jz, s.app))
						});
					case g.GetAppFailed:
						return i({}, r, {
							app: i({}, (0, o.pG)(r.app, e.yc))
						});
					case g.ClearApp:
						return i({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case g.SetUpdatableInstalls:
						return i({}, r, {
							updatableInstallsList: s.updatableInstallsList
						});
					case g.GetDevelopedAppsSending:
						return i({}, r, {
							developedApps: i({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case g.GetDevelopedAppsSuccess:
						return i({}, r, {
							developedApps: i({}, (0, o.pG)(r.developedApps, e.Jz, s.developedApps))
						});
					case g.GetDevelopedAppsFailed:
						return i({}, r, {
							developedApps: i({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/dns/dns-records/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				U: function() {
					return e
				},
				X: function() {
					return o
				}
			});
			let e = function(i) {
				return i.DNS_RECORD_CREATE = "create DNS records", i.DNS_RECORD_UPDATE = "update DNS records", i.DNS_RECORD_DELETE = "delete DNS records", i.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", i
			}({});
			const o = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				BB: function() {
					return o
				},
				Pm: function() {
					return i
				},
				UZ: function() {
					return e
				}
			});
			let e = function(p) {
				return p.ROOT = "root", p.DSTADDRS_CARD = "dstaddrs_card", p.RULES_CARD = "rules_card", p.CATCHALL_CARD = "catchall_card", p.SETTINGS_PAGE = "settings_page", p.WORKERS_PAGE = "workers_page", p
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
			let i = function(p) {
				return p[p.Verified = 0] = "Verified", p[p.Pending = 1] = "Pending", p[p.Missing = 2] = "Missing", p[p.WorkerNotFound = 3] = "WorkerNotFound", p[p.Unknown = 4] = "Unknown", p[p.Loading = 5] = "Loading", p
			}({});
			const d = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/analytics/labels.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				AU: function() {
					return i
				},
				Bc: function() {
					return o
				},
				Bt: function() {
					return e
				},
				e_: function() {
					return d
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
				i = {
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
				d = {
					[i.ASN]: "firewall.analytics.services.labels.asn",
					[i.COUNTRY]: "firewall.analytics.services.labels.country",
					[i.IP]: "firewall.analytics.services.labels.ip",
					[i.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[i.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[i.VALIDATION]: "firewall.analytics.services.labels.validation",
					[i.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[i.WAF]: "firewall.analytics.services.labels.waf",
					[i.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[i.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[i.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[i.BIC]: "firewall.analytics.services.labels.bic",
					[i.HOT]: "firewall.analytics.services.labels.hot",
					[i.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[i.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[i.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[i.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[i.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[i.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[i.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[i.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[i.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[i.DLP]: "firewall.analytics.services.labels.dlp",
					[i.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				}
		},
		"../react/pages/firewall/api-shield/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Fj: function() {
					return g
				},
				kq: function() {
					return l
				},
				xr: function() {
					return E
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function i(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						u = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(s).filter(function(a) {
						return Object.getOwnPropertyDescriptor(s, a).enumerable
					})), u.forEach(function(a) {
						d(t, a, s[a])
					})
				}
				return t
			}

			function d(t, r, s) {
				return r = p(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function p(t) {
				var r = f(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function f(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var u = s.call(t, r || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let l = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const g = {
					[l.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[l.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[l.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[l.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[l.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[l.JWT_VALIDATION]: {
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
					[l.SETTINGS]: {
						redirectToFirewallRulesTemplate: "redirect to firewall rules",
						redirectToPages: "redirect to uploaded developer portal on pages",
						listSessionIdentifiers: "list session identifiers",
						listRequestsContainingSessionIdentifiers: "list requests containing session identifiers",
						addOrRemoveSessionIdentifiers: "add or remove session identifiers"
					}
				},
				E = ({
					name: t,
					category: r = "user journey",
					product: s = l.MAIN,
					productName: u,
					additionalData: a
				}) => {
					o().sendEvent(t, i({
						category: r,
						product: s,
						productName: u
					}, a || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				N3: function() {
					return e
				},
				UN: function() {
					return i
				},
				h1: function() {
					return o
				}
			});
			let e = function(d) {
					return d.INITIAL_FETCH_SCORES = "view bots scores distribution", d.FETCH_CONFIGURATION = "view bots configuration page", d.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", d.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", d.UPDATE_SETTINGS = "update bots settings", d.DELETE_RULE = "delete bots ruleset", d.UPDATE_RULE = "update bots ruleset", d.FETCH_RULES = "view bots ruleset", d.CONFIGURE_BOT_MANAGEMENT = "view bots management", d.WAF_RULES_REDIRECT = "redirect waf rules", d
				}({}),
				o = function(d) {
					return d.PROVIDED_TEMPLATE = "provided template link in detection card", d.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", d.USE_TEMPLATE = "use template", d.CREATE_FIREWALL_RULE = "create firewall rule", d.WAF_RULES = "waf rules", d
				}({});
			const i = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				F: function() {
					return e
				}
			});
			const e = {
				CONFIGURE_PAGE_SHIELD: "configure page shield",
				VIEW_PAGE_SHIELD_SETTINGS: "view page shield settings",
				VIEW_DETECTED_SCRIPTS: "view detected scripts",
				VIEW_DETECTED_CONNECTIONS: "view detected connections",
				VIEW_DETECTED_COOKIES: "view detected cookies",
				MANAGE_PAGE_SHIELD_POLICY: "manage page shield policy",
				VIEW_PAGE_SHIELD_POLICIES: "view page shield policies"
			}
		},
		"../react/pages/firewall/rulesets/tracking.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				QK: function() {
					return e
				},
				dy: function() {
					return o
				},
				sO: function() {
					return i
				},
				x4: function() {
					return d
				}
			});
			let e = function(p) {
				return p.DELETE = "delete", p.CREATE = "create", p.GET = "get", p.UPDATE = "update", p
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
				i = (p, f) => {
					var l;
					return `${f} ${(l=o[p])!==null&&l!==void 0?l:p} rule${f===e.GET?"s":""}`
				},
				d = () => {
					var p, f;
					return (p = Object.keys(o)) === null || p === void 0 || (f = p.map(l => {
						var g;
						return (g = Object.values(e)) === null || g === void 0 ? void 0 : g.map(E => i(l, E))
					})) === null || f === void 0 ? void 0 : f.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				AS: function() {
					return p
				},
				Gf: function() {
					return t
				},
				IK: function() {
					return r
				},
				Ki: function() {
					return o
				},
				Lz: function() {
					return s
				},
				nT: function() {
					return l
				},
				o4: function() {
					return u
				},
				oY: function() {
					return i
				},
				qH: function() {
					return E
				},
				x3: function() {
					return f
				}
			});
			var e = n("../react/pages/firewall/analytics/labels.ts");
			const o = ["block", "challenge", "jschallenge", "managedChallenge"],
				i = ["miss", "expired", "bypass", "dynamic"],
				d = a => Object.fromEntries(Object.entries(a).map(([y, m]) => [m, y])),
				p = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				f = d(p),
				l = {
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
				g = d(l),
				E = {
					"Not Computed": "not_computed",
					"Machine Learning": "machine_learning",
					Heuristics: "heuristics",
					"Behavioral Analysis": "behavioral_analysis",
					"JS Fingerprinting": "js_fingerprinting",
					"Verified Bot": "verified_bot",
					"Cloudflare Service": "cloudflare_service"
				},
				t = d(E);
			let r = function(a) {
				return a.SAMPLED = "sampled", a.RAW = "raw", a
			}({});
			const s = "security-analytics-log-explorer";
			let u = function(a) {
				return a.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', a.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', a.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', a.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', a.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', a
			}({})
		},
		"../react/pages/home/alerts/config.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				jk: function() {
					return C
				},
				w8: function() {
					return h
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				i = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				d = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function p(S) {
				for (var $ = 1; $ < arguments.length; $++) {
					var k = arguments[$] != null ? Object(arguments[$]) : {},
						P = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(k).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(k, Q).enumerable
					})), P.forEach(function(Q) {
						f(S, Q, k[Q])
					})
				}
				return S
			}

			function f(S, $, k) {
				return $ = l($), $ in S ? Object.defineProperty(S, $, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[$] = k, S
			}

			function l(S) {
				var $ = g(S, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function g(S, $) {
				if (typeof S != "object" || S === null) return S;
				var k = S[Symbol.toPrimitive];
				if (k !== void 0) {
					var P = k.call(S, $ || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(S)
			}
			const E = "Notifications",
				t = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${s}/destinations`,
				a = (0, e.BC)`${s}/create`,
				y = (0, e.BC)`${a}/${"alertType"}`,
				m = (0, e.BC)`${s}/edit/${"alertId"}`,
				C = p({
					account: r,
					alerts: s,
					destinations: u,
					createAlert: a,
					createAlertWithSelection: y,
					editAlert: m
				}, o._j, i._j),
				h = p({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, d.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				_j: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				i = (0, e.BC)`${o}/pagerduty/connect`,
				d = (0, e.BC)`${o}/pagerduty/register`,
				p = (0, e.BC)`${o}/pagerduty`,
				f = {
					pagerDutyConnect: i,
					pagerDutyRegister: d,
					pagerDutyList: p
				};
			var l = null
		},
		"../react/pages/home/alerts/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				AA: function() {
					return ie
				},
				AN: function() {
					return ge
				},
				AY: function() {
					return Ze
				},
				Am: function() {
					return S
				},
				B2: function() {
					return b
				},
				BB: function() {
					return z
				},
				BF: function() {
					return ye
				},
				BQ: function() {
					return J
				},
				E8: function() {
					return He
				},
				Fl: function() {
					return Ct
				},
				Fu: function() {
					return F
				},
				G_: function() {
					return C
				},
				Gc: function() {
					return ze
				},
				Hc: function() {
					return wt
				},
				IO: function() {
					return oe
				},
				JK: function() {
					return we
				},
				K: function() {
					return Q
				},
				LI: function() {
					return R
				},
				LX: function() {
					return ue
				},
				L_: function() {
					return Be
				},
				Ly: function() {
					return Pt
				},
				M9: function() {
					return We
				},
				MR: function() {
					return x
				},
				Mj: function() {
					return Z
				},
				NB: function() {
					return Ot
				},
				Or: function() {
					return se
				},
				P5: function() {
					return It
				},
				PE: function() {
					return pe
				},
				Pd: function() {
					return St
				},
				Pk: function() {
					return ke
				},
				Pp: function() {
					return $e
				},
				Q1: function() {
					return U
				},
				Qr: function() {
					return me
				},
				Qv: function() {
					return Se
				},
				Rp: function() {
					return At
				},
				Sh: function() {
					return ht
				},
				TZ: function() {
					return ce
				},
				Tg: function() {
					return Me
				},
				Tp: function() {
					return Pe
				},
				Uy: function() {
					return vt
				},
				Vw: function() {
					return I
				},
				W3: function() {
					return T
				},
				WR: function() {
					return le
				},
				WX: function() {
					return ve
				},
				XF: function() {
					return Ee
				},
				Xc: function() {
					return Ve
				},
				ZB: function() {
					return H
				},
				Zs: function() {
					return Ne
				},
				_f: function() {
					return _e
				},
				_k: function() {
					return Ae
				},
				b4: function() {
					return Te
				},
				c2: function() {
					return D
				},
				cE: function() {
					return bt
				},
				dh: function() {
					return Le
				},
				fE: function() {
					return Fe
				},
				g7: function() {
					return ae
				},
				hO: function() {
					return ne
				},
				hV: function() {
					return Lt
				},
				hk: function() {
					return $
				},
				hr: function() {
					return fe
				},
				it: function() {
					return De
				},
				jG: function() {
					return Ue
				},
				jN: function() {
					return xe
				},
				m8: function() {
					return G
				},
				nm: function() {
					return Tt
				},
				oW: function() {
					return Ye
				},
				oc: function() {
					return h
				},
				pH: function() {
					return w
				},
				pi: function() {
					return te
				},
				rI: function() {
					return O
				},
				s7: function() {
					return Ke
				},
				sO: function() {
					return be
				},
				sg: function() {
					return Qe
				},
				tB: function() {
					return m
				},
				tN: function() {
					return j
				},
				vV: function() {
					return Ie
				},
				vc: function() {
					return Re
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				o = n.n(e),
				i = n("../../../../node_modules/moment/moment.js"),
				d = n.n(i),
				p = n("../../../common/util/types/src/api/domain.ts"),
				f = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				l = n("../react/utils/translator.tsx"),
				g = n("../react/utils/url.ts"),
				E = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = n("../react/pages/home/domain-registration/types.ts");

			function s(c) {
				for (var A = 1; A < arguments.length; A++) {
					var re = arguments[A] != null ? Object(arguments[A]) : {},
						de = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(re).filter(function(he) {
						return Object.getOwnPropertyDescriptor(re, he).enumerable
					})), de.forEach(function(he) {
						u(c, he, re[he])
					})
				}
				return c
			}

			function u(c, A, re) {
				return A = a(A), A in c ? Object.defineProperty(c, A, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[A] = re, c
			}

			function a(c) {
				var A = y(c, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function y(c, A) {
				if (typeof c != "object" || c === null) return c;
				var re = c[Symbol.toPrimitive];
				if (re !== void 0) {
					var de = re.call(c, A || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(c)
			}

			function m(c) {
				return c.filter(A => A.isSelected).reduce((A, {
					transferFee: re,
					isZoneEntitlementPresent: de
				}) => de ? A : A + re, 0)
			}

			function C(c) {
				return (c / 100).toLocaleString("en-US", {
					style: "currency",
					currency: "USD"
				})
			}

			function h(c) {
				return c.filter(A => A.registrar.toLowerCase() === "godaddy")
			}
			const S = "MMM D, YYYY";

			function $(c, A, re, de) {
				var he, Ge, qe, et, tt, nt, ot, rt, at, it, st, ct, lt, ut, dt, pt, gt, mt, ft, yt, Et;
				const Dt = (((he = A.fees) === null || he === void 0 ? void 0 : he.registration_fee) !== r.Xp && ((Ge = A.fees) === null || Ge === void 0 ? void 0 : Ge.registration_fee) || 0) * 100,
					kt = (((qe = A.fees) === null || qe === void 0 ? void 0 : qe.transfer_fee) !== r.Xp && ((et = A.fees) === null || et === void 0 ? void 0 : et.transfer_fee) || 0) * 100,
					Rt = (((tt = A.fees) === null || tt === void 0 ? void 0 : tt.registration_fee) !== r.Xp && ((nt = A.fees) === null || nt === void 0 ? void 0 : nt.registration_fee) || 0) * 100,
					Mt = (((ot = A.fees) === null || ot === void 0 ? void 0 : ot.renewal_fee) !== r.Xp && ((rt = A.fees) === null || rt === void 0 ? void 0 : rt.renewal_fee) || 0) * 100,
					Nt = (((at = A.fees) === null || at === void 0 ? void 0 : at.redemption_fee) !== r.Xp && ((it = A.fees) === null || it === void 0 ? void 0 : it.redemption_fee) || 0) * 100,
					Oe = c[A.name];
				return {
					name: A.name,
					zone: Oe,
					entitlements: re,
					registryCheck: de,
					nameservers: A.name_servers,
					isAvailable: A.available,
					lastKnownStatus: A.last_known_status,
					authCode: A.auth_code,
					isEnterpriseZone: (Oe == null || (st = Oe.plan) === null || st === void 0 ? void 0 : st.legacy_id) === "enterprise",
					isActiveZone: (Oe == null ? void 0 : Oe.status) === "active",
					corResponsesPending: A.cor_responses_pending,
					isCorLocked: A.cor_locked,
					corLockedUntil: A.cor_locked_until ? d()(A.cor_locked_until).format(S) : null,
					isFullZone: (Oe == null ? void 0 : Oe.type) == r.xd.Full,
					isLocked: A.locked,
					registrar: A.current_registrar || E.JM,
					zoneId: Oe == null ? void 0 : Oe.id,
					currentExpiration: d()(A.expires_at).format(S),
					newExpiration: d()(A.expires_at).add(1, "year").format(S),
					wholesaleCost: Dt,
					transferFee: kt,
					registrationFee: Rt,
					renewalFee: Mt,
					redemptionFee: Nt,
					lastEntitledAt: A.last_entitled_at ? new Date(A.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(re) && !!re.find(_t => _t.id === E.g5 && _t.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: A.transfer_in && P(A.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: A.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: A.transfer_in,
					transferOut: A.transfer_out,
					autoRenew: A.auto_renew === !0,
					lastTransferredAt: A.last_transferred_at,
					createdAt: A.created_at,
					paymentExpiresAt: d()(A.payment_expires_at).isValid() ? d()(A.payment_expires_at) : d()(A.expires_at).isValid() ? d()(A.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (ct = A.contacts) === null || ct === void 0 || (lt = ct.administrator) === null || lt === void 0 ? void 0 : lt.id,
						[r.l2.Billing]: (ut = A.contacts) === null || ut === void 0 || (dt = ut.billing) === null || dt === void 0 ? void 0 : dt.id,
						[r.l2.Registrant]: (pt = A.contacts) === null || pt === void 0 || (gt = pt.registrant) === null || gt === void 0 ? void 0 : gt.id,
						[r.l2.Technical]: (mt = A.contacts) === null || mt === void 0 || (ft = mt.technical) === null || ft === void 0 ? void 0 : ft.id
					},
					landing: A.landing,
					whois: A.whois,
					emailVerified: A.email_verified,
					materialChanges: V(A.material_changes),
					corChanges: A.cor_changes ? z(Object.assign(s({}, k), A.cor_changes)) : {},
					registryStatuses: A.registry_statuses ? A.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (yt = A.domain_protection_services) === null || yt === void 0 ? void 0 : yt.status
					},
					deletion: {
						isDeletable: A == null || (Et = A.deletion) === null || Et === void 0 ? void 0 : Et.is_deletable
					},
					premiumType: A == null ? void 0 : A.premium_type,
					fees: A == null ? void 0 : A.fees
				}
			}
			const k = {
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

			function P(c) {
				switch (c.enter_auth_code) {
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

			function Q(c) {
				let A = c.extensions;
				(A == null ? void 0 : A.application_purpose) && (A == null ? void 0 : A.nexus_category) && (c.extensions = {
					nexusCategory: A.nexus_category,
					applicationPurpose: A.application_purpose
				});
				let re = s({}, typeof c.id == "string" ? {
					id: c.id
				} : {}, {
					first_name: c.firstName,
					organization: c.organization,
					address: c.address1,
					city: c.city,
					state: c.state || "N/A",
					zip: c.zip,
					country: c.country,
					phone: c.phone,
					email: c.email,
					fax: "",
					last_name: c.lastName,
					address2: c.address2,
					email_verified: c.emailVerified
				}, c.extensions ? {
					extensions: {
						nexus_category: c.extensions.nexusCategory,
						application_purpose: c.extensions.applicationPurpose
					}
				} : {});
				return je(re)
			}

			function V(c) {
				let A = [];
				const re = {
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
				for (const de in c) {
					const he = c[de],
						Ge = re[he];
					A.push(Ge)
				}
				return A
			}
			const Y = c => {
				if (!c) return null;
				let A = c;
				return c.includes("C31") && (A = "C31"), c.includes("C32") && (A = "C32"), A
			};

			function z(c) {
				return s({}, typeof c.id == "string" ? {
					id: c.id
				} : {}, {
					firstName: c.first_name,
					organization: c.organization,
					address1: c.address,
					city: c.city,
					state: c.state,
					zip: c.zip,
					country: c.country,
					phone: c.phone.trim(),
					email: c.email.trim(),
					lastName: c.last_name,
					address2: c.address2,
					emailVerified: c.email_verified
				}, c.extensions ? {
					extensions: {
						nexusCategory: Y(c.extensions.nexus_category),
						applicationPurpose: c.extensions.application_purpose
					}
				} : {})
			}

			function H(c = {}) {
				const A = {
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
						}, c.zone && c.zone.plan || {}),
						type: r.xd.Full
					}, c.zone || {}),
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
					wholesaleCost: 8.79,
					transferFee: 8.79,
					registrationFee: 8.79,
					renewalFee: 10.76,
					redemptionFee: 10.76,
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
					}, c.transferConditions || {}),
					transferIn: s({
						unlock_domain: r.lW.UNKNOWN,
						disable_privacy: r.lW.UNKNOWN,
						enter_auth_code: r.lW.UNKNOWN,
						approve_transfer: r.lW.UNKNOWN,
						accept_foa: r.lW.UNKNOWN,
						can_cancel_transfer: !1
					}, c.transferIn || {}),
					lastTransferredAt: "",
					paymentExpiresAt: "",
					contactIds: {},
					landing: {
						eligible: !1,
						enabled: !1
					},
					whois: {
						raw: "",
						privacy: !0
					},
					materialChanges: [],
					corChanges: {},
					registryStatuses: null,
					deletion: {
						isDeletable: !1
					},
					premiumType: r.Vs.Not_Premium,
					fees: null
				};
				return Object.assign(A, c)
			}

			function U(c = {}) {
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
				}, c)
			}

			function F(c) {
				const A = E.Py.concat(E.ui).reduce((re, de) => s({}, re, {
					[de]: []
				}), {});
				return c.forEach(re => {
					let de = L(re.registrar);
					de in A || (de = E.ui), Qe(re.name) && (de = "uk"), A[de].push(re)
				}), Object.keys(A).sort((re, de) => re.localeCompare(de)).map(re => ({
					registrar: re,
					domains: A[re]
				})).filter(re => re.domains.length > 0)
			}

			function L(c) {
				return c == null ? void 0 : c.toLowerCase().replace(/\s|,|\./g, "")
			}

			function I(c) {
				if (!c || !c.registrar) return "unknown";
				if (Qe(c.name)) return "uk";
				const A = L(c.registrar);
				return A in E.gM ? A : "unknown"
			}
			const X = [];

			function N(c) {
				return X.some(A => c.endsWith("." + A))
			}

			function ee(c) {
				return !c.isEnterpriseZone || !Array.isArray(c.entitlements) ? !1 : !!c.entitlements.find(({
					id: A,
					allocation: re
				}) => A === E.g5 && re.value === !0)
			}

			function te(c) {
				var A;
				const re = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let de = !1,
					he = null;
				return (A = c.registryStatuses) === null || A === void 0 || A.some(Ge => {
					re.includes(Ge) && (he = Ge, de = !0)
				}), [de, he]
			}

			function G(c, A = !1) {
				if (!c) return [!1, t.keys.cannot_transfer_default];
				if (c.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!c.isFullZone && !ee(c)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (c.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (c.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!c.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (!A && vt(c == null ? void 0 : c.premiumType)) return [!1, t.keys.cannot_transfer_domain_premium];
				if (w(c)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let re;
				for (re in c.transferConditions)
					if (re !== "not_premium" && !c.transferConditions[re]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (N(c.name)) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [de, he] = te(c);
				return de && he ? [!1, t.keys.cannot_transfer_domain_registry_status[he]] : [!0, ""]
			}

			function w(c) {
				var A, re;
				return !!c.transferIn && !((A = c.transferConditions) === null || A === void 0 ? void 0 : A.not_started) && !!(Qe(c.name) || ((re = c.registryStatuses) === null || re === void 0 ? void 0 : re.includes(r.rj.PENDING_TRANSFER)))
			}

			function M(c) {
				return !!c.registrar && !!c.currentExpiration
			}

			function b(c, A = !1) {
				const [re] = G(c, A);
				return M(c) ? Ce(c) ? r.M5.InProgressOrOnCF : re ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function D(c) {
				return c.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(c.transferIn.enter_auth_code) || !1
			}

			function x(c) {
				return c.registrar === "Cloudflare"
			}

			function O(c) {
				return !!(c == null ? void 0 : c.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function Z(c) {
				return !!(c == null ? void 0 : c.includes(r.rj.PENDING_TRANSFER))
			}
			const K = "Invalid date";

			function se(c) {
				return c.newExpiration === K ? "Unavailable" : c.newExpiration
			}

			function ce(c) {
				return c.currentExpiration === K ? "Unavailable" : c.currentExpiration
			}

			function ie(c) {
				return c.substring(c.indexOf("."))
			}

			function fe(c) {
				return c.map(A => A.name).map(A => ie(A)).filter((A, re, de) => !de.includes(A, re + 1))
			}

			function Te(c) {
				if (E.no) return [!0, ""];
				if (!x(c)) return [!1, r.ok.NotOnCF];
				if (c.isCorLocked) return [!1, c.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (c.lastTransferredAt) {
					const A = d()(c.lastTransferredAt),
						re = d().duration(d()().diff(A)).as("days"),
						de = Qe(c.name);
					if (re < (de ? 1 : 60)) return [!1, de ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (c.createdAt) {
					const A = d()(c.createdAt);
					if (d().duration(d()().diff(A)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function ve(c) {
				return !!(E.Bc || c.transferOut)
			}

			function Ce(c) {
				return ae(c) || x(c)
			}

			function j(c) {
				return !ae(c) && x(c)
			}

			function ae(c) {
				return !c || c.lastKnownStatus === "pendingTransfer" || c.lastKnownStatus === "transferFOAPending" || !x(c) && c.transferConditions && !c.transferConditions.not_started || !1
			}

			function pe(c) {
				return !(N(c.name) || c.transferConditions && !c.transferConditions.supported_tld)
			}

			function Se(c) {
				return (c == null ? void 0 : c.includes("/")) ? !0 : c.split("").some(A => A.charCodeAt(0) > 123)
			}

			function ke(c) {
				switch (c) {
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

			function Re(c) {
				return d()(c.paymentExpiresAt).isBefore(d()())
			}

			function xe(c) {
				return c.transferIn && c.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function we(c) {
				const A = ["CU", "KP", "IR", "SY"];
				return c.filter(re => !A.includes(re.code))
			}

			function Me(c) {
				if (!!c) return `${c.charAt(0).toUpperCase()}${c.slice(1)}${c.charAt(c.length-1)==="."?"":"."}`
			}

			function je(c) {
				const A = {};
				for (const [re, de] of Object.entries(c)) {
					if (de && typeof de == "string") {
						Object.assign(A, {
							[re]: de.trim()
						});
						continue
					}
					Object.assign(A, {
						[re]: de
					})
				}
				return A
			}

			function Ne(c) {
				return d()(c).add(40, "days")
			}

			function Be(c) {
				const A = c.paymentExpiresAt || c.payment_expires_at,
					re = Ne(A);
				return d()().isBetween(A, re)
			}

			function Fe(c) {
				var A;
				return !(c == null ? void 0 : c.registryStatuses) || !Array.isArray(c == null ? void 0 : c.registryStatuses) && !(0, e.isString)(c == null ? void 0 : c.registryStatuses) ? !1 : (A = c.registryStatuses) === null || A === void 0 ? void 0 : A.includes(r.rj.REDEMPTION_PERIOD)
			}

			function Le(c) {
				var A;
				return !(c == null ? void 0 : c.registryStatuses) || !Array.isArray(c == null ? void 0 : c.registryStatuses) && !(0, e.isString)(c == null ? void 0 : c.registryStatuses) ? !1 : (A = c.registryStatuses) === null || A === void 0 ? void 0 : A.includes(r.rj.PENDING_DELETE)
			}

			function $e(c) {
				return [".us"].includes(c)
			}

			function De(c) {
				return [".us"].includes(c)
			}

			function ne(c) {
				switch (c) {
					case ".us":
						return q();
					default:
						return []
				}
			}

			function T(c) {
				switch (c) {
					case ".us":
						return B;
					default:
						return {}
				}
			}
			const B = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function q() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([c, A]) => ({
						value: c,
						label: A
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([c, A]) => ({
						value: c,
						label: A
					}))
				}]
			}

			function ue(c, A, re) {
				return A[A.length - 1][re] === c[re]
			}

			function me(c) {
				return Boolean(Object.keys(c).length === 0)
			}

			function ye(c) {
				return d()().add(c, "year").format(S)
			}

			function _e({
				accountName: c
			}) {
				var A;
				const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((A = c.toLowerCase().match(re)) === null || A === void 0 ? void 0 : A[0]) || ""
			}

			function Ie(c) {
				return !!c.match(f.default.email)
			}

			function Ue(c) {
				return c === "Registration banned zone error"
			}

			function Ve(c) {
				return c == null ? void 0 : c.startsWith("Quote error")
			}

			function We(c) {
				return c == null ? void 0 : c.startsWith("Invalid acknowledgement")
			}

			function be(c) {
				return c === (0, l.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function Ae(c) {
				return c === "DNS conflict"
			}

			function Pe(c) {
				return c === p.W7.PENDING_UPDATE
			}

			function ze(c) {
				return c ? Object.values(p.wR).filter(A => A !== p.wR.OFFBOARDED).includes(c) : !1
			}

			function Ke(c) {
				return c ? [p.wR.LOCKED, p.wR.ONBOARDED, p.wR.ONBOARDING_INITIATED, p.wR.PENDING_REGISTRY_LOCK, p.wR.PENDING_REGISTRY_UNLOCK, p.wR.PENDING_UNLOCK_APPROVAL].includes(c) : !1
			}

			function Je(c) {
				return c ? p.wR.UNLOCKED === c : !1
			}

			function _(c) {
				return c ? p.wR.LOCKED === c : !1
			}

			function R(c) {
				return c ? p.wR.PENDING_REGISTRY_LOCK === c : !1
			}

			function J(c) {
				return c ? [p.wR.PENDING_REGISTRY_UNLOCK, p.wR.PENDING_UNLOCK_APPROVAL].includes(c) : !1
			}

			function oe(c) {
				var A;
				return !1
			}

			function le(c) {
				var A;
				return !1
			}

			function ge(c) {
				var A;
				return !1
			}

			function Ee(c) {
				var A;
				return !1
			}

			function He(c) {
				var A;
				return !1
			}

			function Ye(c) {
				return Object.keys(p.wR).find(A => p.wR[A].toLowerCase() === c.toLowerCase())
			}

			function Ze(c) {
				var A;
				const re = (A = Ye(c)) === null || A === void 0 ? void 0 : A.toLowerCase();
				return re ? t.keys.protection_status[re] : t.keys.protection_status.unknown
			}

			function Xe(c) {
				return ["com", "net"].includes(c)
			}

			function Ct(c) {
				const A = (0, g.pu)(c);
				return Xe(A) ? p.wR.PENDING_REGISTRY_LOCK : p.wR.LOCKED
			}

			function ht(c) {
				return (0, g.pu)(c) === "co" ? 5 : 10
			}

			function Tt(c, A) {
				return A ? 1 : (0, g.pu)(c) === "co" ? 5 : (0, g.pu)(c) === "org" ? 1 : 10
			}

			function Qe(c) {
				return (0, g.pu)(c) === "uk"
			}

			function bt(c) {
				return (0, g.pu)(c) === "us"
			}

			function At(c) {
				return d()(c).isValid()
			}

			function Pt(c) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(c)
			}

			function It(c) {
				return !!(c == null ? void 0 : c.id)
			}

			function Ot(c) {
				return c ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(c) : !1
			}

			function St(c) {
				return c ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(c) : !1
			}

			function Lt(c) {
				var A;
				return (c == null ? void 0 : c.lastKnownStatus) ? (A = c.lastKnownStatus) === null || A === void 0 ? void 0 : A.includes("deletionIrredeemable") : !1
			}

			function vt(c) {
				switch (c) {
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

			function wt(c) {
				if (!c || !c.message) return r.OJ.DEFAULT;
				const {
					message: A
				} = c;
				switch (!0) {
					case A.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case A.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case A.includes("account blocked"):
						return r.OJ.ACCOUNT_BLOCKED;
					default:
						return r.OJ.DEFAULT
				}
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Bc: function() {
					return E
				},
				Hv: function() {
					return X
				},
				JM: function() {
					return i
				},
				Py: function() {
					return f
				},
				WK: function() {
					return r
				},
				g5: function() {
					return s
				},
				gM: function() {
					return p
				},
				gf: function() {
					return g
				},
				jk: function() {
					return I
				},
				no: function() {
					return t
				},
				uY: function() {
					return l
				},
				ui: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../flags.js");
			const i = "Unknown",
				d = "unknown",
				p = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				f = Object.keys(p),
				l = !0,
				g = (0, o.J8)("registrar_mock_data") || !1,
				E = (0, o.J8)("registrar_mock_transfer_out") || !1,
				t = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				s = "cf_registrar.enabled",
				u = "@abcABC1234567890123456",
				a = (0, e.BC)`/${"accountId"}`,
				y = (0, e.BC)`${a}/add-site`,
				m = (0, e.BC)`${a}/domains`,
				C = (0, e.BC)`${m}/${"zoneName"}`,
				h = (0, e.BC)`${C}/configuration`,
				S = (0, e.BC)`${C}/contacts`,
				$ = (0, e.BC)`${m}/pricing`,
				k = (0, e.BC)`${m}/protection`,
				P = (0, e.BC)`${m}/register`,
				Q = (0, e.BC)`${P}/checkout`,
				V = (0, e.BC)`${P}/success`,
				Y = (0, e.BC)`${m}/tlds`,
				z = (0, e.BC)`${m}/transfer`,
				H = (0, e.BC)`${m}/transfer/${"zoneName"}`,
				U = (0, e.BC)`/registrar/accounts/verify_email`,
				F = (0, e.BC)`/registrar/domains/verify_email`,
				L = (0, e.BC)`${m}/verify-email`,
				I = {
					addSite: y,
					domains: m,
					domainsDomain: C,
					domainsDomainConfiguration: h,
					domainsDomainContacts: S,
					domainsPricing: $,
					domainsProtection: k,
					domainsRegister: P,
					domainsRegisterCheckout: Q,
					domainsRegisterSuccess: V,
					domainsTlds: Y,
					domainsTransfer: z,
					domainsTransferZone: H,
					registrarAccountsVerifyEmail: U,
					registrarDomainsVerifyEmail: F,
					verifyEmail: L
				},
				X = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				J: function() {
					return r
				},
				U: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				i = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = n.n(i),
				p = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function f(s) {
				for (var u = 1; u < arguments.length; u++) {
					var a = arguments[u] != null ? Object(arguments[u]) : {},
						y = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), y.forEach(function(m) {
						l(s, m, a[m])
					})
				}
				return s
			}

			function l(s, u, a) {
				return u = g(u), u in s ? Object.defineProperty(s, u, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[u] = a, s
			}

			function g(s) {
				var u = E(s, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function E(s, u) {
				if (typeof s != "object" || s === null) return s;
				var a = s[Symbol.toPrimitive];
				if (a !== void 0) {
					var y = a.call(s, u || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(s)
			}
			let t = function(s) {
				return s.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", s.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", s.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", s.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", s.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", s.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", s.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", s.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", s.RENEW_DOMAIN_COMPLETED = "domain renewal completed", s.RESTORE_DOMAIN_INIT = "click to open domain restore modal", s.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", s.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", s.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", s.RESTORE_DOMAIN_FAILURE = "domain restore failed", s.RESTORE_DOMAIN_COMPLETED = "domain restore completed", s.DOMAIN_DELETE_INIT = "click to begin domain delete", s.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", s.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", s.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", s.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", s.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", s.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", s.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", s.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", s.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", s.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", s
			}({});

			function r(s, u, a) {
				if (!(u == null ? void 0 : u.name)) return null;
				d().sendEvent(s, f({
					domain: {
						name: u.name,
						premium: (0, p.Uy)(u == null ? void 0 : u.premiumType),
						paymentExpiresAt: o()(u == null ? void 0 : u.paymentExpiresAt).format()
					},
					category: "registrar"
				}, a))
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				KO: function() {
					return l
				},
				L9: function() {
					return t
				},
				N3: function() {
					return E
				},
				zE: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function i(r) {
				for (var s = 1; s < arguments.length; s++) {
					var u = arguments[s] != null ? Object(arguments[s]) : {},
						a = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(u).filter(function(y) {
						return Object.getOwnPropertyDescriptor(u, y).enumerable
					})), a.forEach(function(y) {
						d(r, y, u[y])
					})
				}
				return r
			}

			function d(r, s, u) {
				return s = p(s), s in r ? Object.defineProperty(r, s, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = u, r
			}

			function p(r) {
				var s = f(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function f(r, s) {
				if (typeof r != "object" || r === null) return r;
				var u = r[Symbol.toPrimitive];
				if (u !== void 0) {
					var a = u.call(r, s || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			let l = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r
				}({}),
				g = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				E = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const t = (r, s = {}) => {
				o().sendEvent(r, i({}, s, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				GF: function() {
					return s
				},
				H3: function() {
					return l
				},
				H8: function() {
					return p
				},
				J: function() {
					return a
				},
				Nz: function() {
					return g
				},
				UQ: function() {
					return m
				},
				Up: function() {
					return d
				},
				W8: function() {
					return E
				},
				Ws: function() {
					return C
				},
				Xg: function() {
					return r
				},
				_j: function() {
					return i
				},
				a4: function() {
					return u
				},
				jS: function() {
					return y
				},
				rF: function() {
					return f
				},
				rG: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/utils/translator.tsx");
			const i = {
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
					magicFirewallRules: (0, e.BC)`/${"accountId"}/network-security/magic_firewall`,
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
					tunnelHealthCheckTunnels: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels`,
					tunnelHealthCheckTunnelsList: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/list`,
					tunnelHealthCheckTunnelsHighlight: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight`,
					tunnelHealthCheckTunnelsHighlightDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight/${"tunnelId"}`,
					tunnelHealthCheckTunnelsDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/${"tunnelId"}`
				},
				d = () => [{
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
				p = h => [{
					value: "low",
					label: h("setting.low")
				}, {
					value: "mid",
					label: h("setting.medium")
				}, {
					value: "high",
					label: h("setting.high")
				}],
				f = h => [{
					value: "request",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				l = h => [{
					value: "unidirectional",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				g = "magic-transit",
				E = "magic-wan",
				t = "gre_tunnel",
				r = "ipsec_tunnel",
				s = 64,
				u = 1476,
				a = "mid",
				y = "reply",
				m = h => [{
					value: void 0,
					label: h("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: h("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: h("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				C = h => [{
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
		"../react/pages/magic/network-monitoring/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				_u: function() {
					return o
				},
				bK: function() {
					return e
				},
				lC: function() {
					return i
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
				i = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				VZ: function() {
					return d
				},
				lC: function() {
					return i
				},
				r8: function() {
					return o
				},
				uB: function() {
					return p
				}
			});
			var e = n("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				i = "user journey",
				d = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				p = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				W_: function() {
					return o
				},
				X: function() {
					return e
				},
				lC: function() {
					return i
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
				i = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				gb: function() {
					return t
				},
				iP: function() {
					return V
				},
				xL: function() {
					return h
				},
				rD: function() {
					return z
				},
				oT: function() {
					return a
				},
				i2: function() {
					return H
				},
				x1: function() {
					return f
				},
				lW: function() {
					return g
				},
				UA: function() {
					return P
				},
				K5: function() {
					return s
				},
				Ii: function() {
					return $
				},
				PJ: function() {
					return Y
				},
				bK: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				p = n("../../../../node_modules/@cloudflare/elements/es/index.js");
			const f = () => o().createElement(l, null, o().createElement("svg", {
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
				l = (0, i.createComponent)(({
					theme: U
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
				g = () => o().createElement(E, null, o().createElement("svg", {
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
				E = (0, i.createComponent)(({
					theme: U
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
				t = () => o().createElement(r, null, o().createElement(p.Ei, {
					alt: "airplane",
					src: d,
					width: "85%"
				})),
				r = (0, i.createComponent)(({
					theme: U
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
				u = (0, i.createComponent)(({
					theme: U
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
				a = () => o().createElement(y, null, o().createElement("svg", {
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
				y = (0, i.createComponent)(({
					theme: U
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
				m = () => o().createElement(C, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				C = (0, i.createComponent)(({
					theme: U
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
				h = () => o().createElement(S, null, o().createElement("svg", {
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
				S = (0, i.createComponent)(({
					theme: U
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
				$ = () => o().createElement(k, null, o().createElement("svg", {
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
				k = (0, i.createComponent)(({
					theme: U
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
				P = () => o().createElement(Q, null, o().createElement("svg", {
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
				Q = (0, i.createComponent)(({
					theme: U
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
				V = () => o().createElement("svg", {
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
				Y = () => o().createElement("svg", {
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
				z = () => o().createElement("svg", {
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
				H = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				A2: function() {
					return l
				},
				He: function() {
					return p
				},
				N$: function() {
					return f
				},
				Qq: function() {
					return i
				},
				ST: function() {
					return d
				},
				wM: function() {
					return o
				}
			});
			var e = n("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				i = "login-apple-jwt",
				d = "cf-test",
				p = {
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
				l = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/pages/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				A: function() {
					return m
				},
				C1: function() {
					return E
				},
				Dp: function() {
					return z
				},
				HD: function() {
					return S
				},
				IK: function() {
					return p
				},
				L7: function() {
					return i
				},
				Li: function() {
					return y
				},
				Ni: function() {
					return Q
				},
				OG: function() {
					return I
				},
				QF: function() {
					return F
				},
				QV: function() {
					return P
				},
				Sx: function() {
					return $
				},
				Ub: function() {
					return U
				},
				X3: function() {
					return r
				},
				aP: function() {
					return l
				},
				eO: function() {
					return s
				},
				fH: function() {
					return a
				},
				fQ: function() {
					return C
				},
				fR: function() {
					return e
				},
				hE: function() {
					return H
				},
				iS: function() {
					return h
				},
				ku: function() {
					return Y
				},
				nY: function() {
					return k
				},
				w3: function() {
					return d
				},
				wJ: function() {
					return g
				},
				wp: function() {
					return u
				},
				yu: function() {
					return t
				},
				zG: function() {
					return V
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-pages",
				i = {
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
					webAnalytics: "https://developers.cloudflare.com/analytics/web-analytics/"
				},
				d = "Allow Members - Cloudflare Pages",
				p = 58,
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
				l = "production",
				g = 2e3,
				E = 100,
				t = 350,
				r = 1e7,
				s = ["Success:", "Error:", "Failed:"],
				u = 10,
				a = "_headers",
				y = "_redirects",
				m = "_routes.json",
				C = "_worker.js",
				h = "do-a-barrel-roll",
				S = [a, y, m, C],
				$ = 1024 * 1024 * 25,
				k = 1e3,
				P = {
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
				Q = 1e5,
				V = 75e3,
				Y = "workers",
				z = "cloudflare_pages_build_caching",
				H = 2;
			let U = function(X) {
				return X[X.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", X[X.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", X[X.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", X[X.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", X[X.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", X[X.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", X
			}({});
			const F = 1,
				L = 2,
				I = 2
		},
		"../react/pages/pages/routes.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return i
				},
				_j: function() {
					return o
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
				i = {
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
				d = p => `${p.subdomain}.pages.dev`
		},
		"../react/pages/r2/routes.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return i
				},
				Jg: function() {
					return f
				},
				_j: function() {
					return o
				},
				pZ: function() {
					return l
				},
				vF: function() {
					return p
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
					migrator: (0, e.BC)`/${"accountId"}/r2/slurper`
				},
				i = {
					canUnsubscribe: (0, e.BC)`/accounts/${"accountId"}/r2/canUnsubscribe`,
					defaultRegion: (0, e.BC)`/accounts/${"accountId"}/r2/defaultRegion`,
					buckets: (0, e.BC)`/accounts/${"accountId"}/r2/buckets`,
					bucket: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}`,
					objects: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects`,
					object: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects/${"objectKey"}`,
					bucketUsage: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/usage`,
					bucketAccess: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/policy`,
					bucketCustomDomains: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/custom_domains`,
					bucketCustomDomain: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/custom_domains/${"domainName"}`,
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
				d = t => {
					const r = "r2.cloudflarestorage.com";
					switch (t) {
						case "default":
							return r;
						case "eu":
							return `eu.${r}`;
						case "fedramp":
							return `fedramp.${r}`
					}
				},
				p = (t, r) => {
					const s = d(r);
					return `https://${t}.${s}`
				},
				f = (t, r, s) => `${p(t,r)}/${s}`,
				l = () => "r2.dev",
				g = t => {
					const r = l();
					return `https://${t}.${r}`
				},
				E = (t, r) => `${g(t)}/${r}`
		},
		"../react/pages/security-center/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				R: function() {
					return e
				},
				v: function() {
					return o
				}
			});
			let e = function(i) {
				return i.LOAD_SCAN_INFO = "load url scan information", i.INITIATE_URL_SCAN = "initiate url scan", i
			}({});
			const o = {
				MANAGE_INSIGHT: "manage security insight",
				BULK_ARCHIVE: "bulk archive security insights",
				EXPAND_INSIGHT_ROW: "expand security issue row",
				CLICK_RESOLVE_BUTTON: "click resolve security issue button",
				FOLLOW_RESOLVE_URL: "follow security issue resolve url",
				CLICK_SCAN_NOW: "run security scan",
				CLICK_EXPORT_INSIGHTS: "click export insights"
			}
		},
		"../react/pages/spectrum/tracking.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/traffic/argo/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/tracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE = "create waiting room", o.UPDATE = "update waiting room", o.EVENTS = "view waiting rooms events", o.ANALYTICS = "view waiting room analytics", o.GENERATE_PREVIEW = "generate waiting room preview link", o
			}({})
		},
		"../react/pages/welcome/routes.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				d: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				default: (0, e.BC)`/${"accountId"}/`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`
			}
		},
		"../react/pages/zoneless-workers/constants.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				$2: function() {
					return k
				},
				CI: function() {
					return S
				},
				IS: function() {
					return l
				},
				L7: function() {
					return p
				},
				Oj: function() {
					return s
				},
				QV: function() {
					return u
				},
				X$: function() {
					return C
				},
				X6: function() {
					return E
				},
				fE: function() {
					return g
				},
				im: function() {
					return y
				},
				rL: function() {
					return t
				},
				wW: function() {
					return f
				}
			});

			function e(P) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var V = arguments[Q] != null ? Object(arguments[Q]) : {},
						Y = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(V).filter(function(z) {
						return Object.getOwnPropertyDescriptor(V, z).enumerable
					})), Y.forEach(function(z) {
						o(P, z, V[z])
					})
				}
				return P
			}

			function o(P, Q, V) {
				return Q = i(Q), Q in P ? Object.defineProperty(P, Q, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[Q] = V, P
			}

			function i(P) {
				var Q = d(P, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function d(P, Q) {
				if (typeof P != "object" || P === null) return P;
				var V = P[Symbol.toPrimitive];
				if (V !== void 0) {
					var Y = V.call(P, Q || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(P)
			}
			const p = {
					documentation: {
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
						kvBindings: "https://developers.cloudflare.com/workers/runtime-apis/kv#kv-bindings",
						kvNamespaces: "https://developers.cloudflare.com/workers/reference/storage/namespaces/",
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
						configureQueues: "https://developers.cloudflare.com/queues/configuration/configure-queues/"
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
				l = "40rem",
				g = {
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
					clickedDiscordLink: "clicked sidebar Discord link",
					clickedCommunityLink: "clicked sidebar Community Forum link",
					clickDetailTab: "click worker detail tab",
					clickedBundledUsageModel: "Workers:Clicked Bundled Usage Model",
					clickedUnboundUsageModel: "Workers:Clicked Unbound Usage Model",
					clickedGreenComputeSetting: "Workers:Clicked Green Compute Setting",
					clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting"
				},
				a = "workers.dev",
				y = "YYYY-MM-DD HH:mm:SS ZZ",
				m = "active",
				C = ["bundled", "unbound", "standard"],
				h = null,
				S = {
					bandaWorkersCI: "banda-workers-ui"
				};
			let $ = function(P) {
				return P[P.NONE = 0] = "NONE", P[P.MISS = 1] = "MISS", P[P.EXPIRED = 2] = "EXPIRED", P[P.UPDATING = 3] = "UPDATING", P[P.STALE = 4] = "STALE", P[P.HIT = 5] = "HIT", P[P.IGNORED = 6] = "IGNORED", P[P.BYPASS = 7] = "BYPASS", P[P.REVALIDATED = 8] = "REVALIDATED", P[P.DYNAMIC = 9] = "DYNAMIC", P[P.STREAM_HIT = 10] = "STREAM_HIT", P[P.DEFERRED = 11] = "DEFERRED", P
			}({});
			const k = [$.HIT, $.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return l
				},
				L: function() {
					return i
				},
				Q9: function() {
					return d
				},
				_j: function() {
					return p
				},
				ky: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = g => `${g}.workers.dev`,
				i = (g, E, t) => `${t?`${t}.`:""}${g}.${o(E)}`,
				d = (g, E, t) => `https://${i(g,E,t)}`,
				p = {
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
					createService: (0, e.BC)`/${"accountId"}/workers/services/new`,
					manageService: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					renameService: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/rename`,
					serviceDetailsRoot: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}`,
					serviceDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}`,
					serviceDetailsBuildDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/builds/${"build_uuid"}`,
					serviceDetailsDeployments: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/deployments`,
					serviceDetailsIntegrationsFlow: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/${"integrationId"}/integrations-setup`,
					serviceDetailsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/triggers`,
					serviceDetailsIntegrations: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/integrations`,
					serviceDetailsSettings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings`,
					serviceDetailsSettingsGeneral: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/general`,
					serviceDetailsSettingsBindings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/bindings`,
					serviceDetailsSettingsBuilds: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/builds`,
					serviceDetailsSettingsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/triggers`,
					serviceDetailsLogs: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs`,
					serviceDetailsLogsSearch: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/search`,
					serviceDetailsLogsLive: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/live`,
					serviceDetailsLogpush: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/logpush`,
					serviceDetailsLogsCron: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/cron`,
					serviceDetailsManage: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					serviceDetailsRename: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/rename`,
					createDeployment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deploy-version`,
					deploymentHistory: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deployment-history`,
					buildHistory: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/builds`,
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
				f = "https://cron-triggers.cloudflareworkers.com",
				l = {
					accountMtlsCertificates: (0, e.BC)`/accounts/${"accountId"}/mtls_certificates`,
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/workers/account-settings`,
					builds: {
						build: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}`,
						latestBuildsByWorkers: (0, e.BC)`/accounts/${"accountId"}/builds/builds/latest`,
						buildLogs: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/logs`,
						buildsByScriptId: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/builds`,
						buildsByVersionIds: (0, e.BC)`/accounts/${"accountId"}/builds/builds`,
						buildTokens: (0, e.BC)`/accounts/${"accountId"}/builds/tokens`,
						repoConnections: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections`,
						repoConnection: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}`,
						triggers: (0, e.BC)`/accounts/${"accountId"}/builds/triggers`,
						trigger: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}`,
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
						ruok: (0, e.BC)`/accounts/${"accountId"}/workers/observability/ruok`,
						queryRun: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/query-run`,
						keys: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/keys`,
						values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`
					},
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				MN: function() {
					return i
				},
				Yg: function() {
					return p
				},
				i$: function() {
					return d
				},
				l3: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const i = async ([l, g]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: l,
					variables: g
				})
			})).body, d = async (...l) => (await e.get(...l)).body, p = l => async (g, E) => {
				const t = await fetch(g, E).then(r => r.json());
				return l.assertDecode(t)
			}, f = async (...l) => (await d(...l)).result;
			v.ZP = {
				fetcher: l => Array.isArray(l) ? f(...l) : f(l)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(W, v) {
				v()
			})(this, function() {
				"use strict";

				function W() {
					var n = !0,
						e = !1,
						o = null,
						i = {
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

					function d(m) {
						return !!(m && m !== document && m.nodeName !== "HTML" && m.nodeName !== "BODY" && "classList" in m && "contains" in m.classList)
					}

					function p(m) {
						var C = m.type,
							h = m.tagName;
						return !!(h == "INPUT" && i[C] && !m.readOnly || h == "TEXTAREA" && !m.readOnly || m.isContentEditable)
					}

					function f(m) {
						m.getAttribute("is-focus-visible") !== "" && m.setAttribute("is-focus-visible", "")
					}

					function l(m) {
						m.getAttribute("is-focus-visible") === "" && m.removeAttribute("is-focus-visible")
					}

					function g(m) {
						d(document.activeElement) && f(document.activeElement), n = !0
					}

					function E(m) {
						n = !1
					}

					function t(m) {
						!d(m.target) || (n || p(m.target)) && f(m.target)
					}

					function r(m) {
						!d(m.target) || m.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), l(m.target))
					}

					function s(m) {
						document.visibilityState == "hidden" && (e && (n = !0), u())
					}

					function u() {
						document.addEventListener("mousemove", y), document.addEventListener("mousedown", y), document.addEventListener("mouseup", y), document.addEventListener("pointermove", y), document.addEventListener("pointerdown", y), document.addEventListener("pointerup", y), document.addEventListener("touchmove", y), document.addEventListener("touchstart", y), document.addEventListener("touchend", y)
					}

					function a() {
						document.removeEventListener("mousemove", y), document.removeEventListener("mousedown", y), document.removeEventListener("mouseup", y), document.removeEventListener("pointermove", y), document.removeEventListener("pointerdown", y), document.removeEventListener("pointerup", y), document.removeEventListener("touchmove", y), document.removeEventListener("touchstart", y), document.removeEventListener("touchend", y)
					}

					function y(m) {
						m.target.nodeName.toLowerCase() !== "html" && (n = !1, a())
					}
					document.addEventListener("keydown", g, !0), document.addEventListener("mousedown", E, !0), document.addEventListener("pointerdown", E, !0), document.addEventListener("touchstart", E, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", s, !0), u(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function v(n) {
					var e;

					function o() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && v(W)
			})
		},
		"../react/utils/bootstrap.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				$8: function() {
					return o
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return d
				},
				gm: function() {
					return i
				}
			});
			const e = () => {
					var p, f, l;
					return (p = window) === null || p === void 0 || (f = p.bootstrap) === null || f === void 0 || (l = f.data) === null || l === void 0 ? void 0 : l.security_token
				},
				o = () => {
					var p, f, l;
					return !!((p = n.g.bootstrap) === null || p === void 0 || (f = p.data) === null || f === void 0 || (l = f.user) === null || l === void 0 ? void 0 : l.id)
				},
				i = () => {
					var p, f;
					return !!((p = n.g.bootstrap) === null || p === void 0 || (f = p.data) === null || f === void 0 ? void 0 : f.is_kendo)
				},
				d = () => {
					var p, f, l, g;
					return (p = window) === null || p === void 0 || (f = p.bootstrap) === null || f === void 0 || (l = f.data) === null || l === void 0 || (g = l.user) === null || g === void 0 ? void 0 : g.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				O5: function() {
					return d
				},
				Xm: function() {
					return i
				},
				kT: function() {
					return l
				},
				wV: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				i = () => (o() || "").indexOf("C0002") !== -1,
				d = () => (o() || "").indexOf("C0003") !== -1,
				p = () => (o() || "").indexOf("C0004") !== -1,
				f = () => (o() || "").indexOf("C0005") !== -1,
				l = t => {
					const r = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				g = () => {
					var t;
					const r = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				E = () => parse(document.cookie)
		},
		"../react/utils/history.ts": function(W, v, n) {
			"use strict";
			var e = n("../../../../node_modules/history/esm/history.js");
			const o = (0, e.lX)();
			v.Z = o
		},
		"../react/utils/i18n.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				AI: function() {
					return C
				},
				S8: function() {
					return m
				},
				ZW: function() {
					return f
				},
				ay: function() {
					return h
				},
				fh: function() {
					return S
				},
				ly: function() {
					return g
				},
				th: function() {
					return p
				},
				ti: function() {
					return E
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				i = n("../../../common/intl/intl-types/src/index.ts"),
				d = n("../../../common/util/types/src/utils/index.ts");
			const p = "cf-sync-locale-with-cps",
				f = i.Q.en_US,
				l = "en_US",
				g = "cf-locale",
				E = Q => (0, d.Yd)(i.Q).find(V => i.Q[V] === Q) || l,
				t = [],
				r = [],
				s = [i.Q.de_DE, i.Q.en_US, i.Q.es_ES, i.Q.fr_FR, i.Q.it_IT, i.Q.pt_BR, i.Q.ko_KR, i.Q.ja_JP, i.Q.zh_CN, i.Q.zh_TW],
				u = [i.Q.de_DE, i.Q.en_US, i.Q.es_ES, i.Q.es_CL, i.Q.es_EC, i.Q.es_MX, i.Q.es_PE, i.Q.fr_FR, i.Q.it_IT, i.Q.ja_JP, i.Q.ko_KR, i.Q.pt_BR, i.Q.zh_CN, i.Q.zh_TW],
				a = {
					test: [...s, ...r, ...t],
					development: [...s, ...r, ...t],
					staging: [...s, ...r, ...t],
					production: [...s, ...r]
				},
				y = {
					test: [...u, ...r, ...t],
					development: [...u, ...r, ...t],
					staging: [...u, ...r, ...t],
					production: [...u, ...r]
				},
				m = (Q, V) => {
					const Y = i.Q[V];
					return Q ? a.production.includes(Y) : y.production.includes(Y)
				},
				C = Q => Object.keys(i.Q).filter(V => m(Q, V)),
				h = Q => {
					const V = i.Q[Q];
					return r.includes(V)
				},
				S = (Q, V) => Q ? $[V] : k[V],
				$ = {
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
				k = {
					de_DE: "Deutsch",
					en_US: "English (US)",
					es_CL: "Espa\xF1ol (Chile)",
					es_EC: "Espa\xF1ol (Ecuador)",
					es_ES: "Espa\xF1ol (Espa\xF1a)",
					es_MX: "Espa\xF1ol (Mexico)",
					es_PE: "Espa\xF1ol (Peru)",
					fr_FR: "Fran\xE7ais (France)",
					ja_JP: "\u65E5\u672C\u8A9E",
					ko_KR: "\uD55C\uAD6D\uC5B4(\uB300\uD55C\uBBFC\uAD6D)",
					it_IT: "Italiano (Italia)",
					pt_BR: "Portugu\xEAs (Brasil)",
					zh_CN: "\u7B80\u4F53\u4E2D\u6587",
					zh_TW: "\u4E2D\u6587 (\u53F0\u7063)"
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
		"../react/utils/translator.tsx": function(W, v, n) {
			"use strict";
			n.d(v, {
				QT: function() {
					return u
				},
				Vb: function() {
					return l
				},
				Yi: function() {
					return E
				},
				ZP: function() {
					return f
				},
				_m: function() {
					return t
				},
				cC: function() {
					return r
				},
				oc: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = n("../../../common/intl/intl-core/src/Translator.ts"),
				i = n("../../../common/intl/intl-react/src/index.ts"),
				d = n("../flags.js");
			const p = new o.Z({
				pseudoLoc: (0, d.J8)("is_pseudo_loc")
			});

			function f(a, ...y) {
				return p.t(a, ...y)
			}
			const l = p;

			function g(a, ...y) {
				return markdown(f(a, y))
			}

			function E(a) {
				if (Number(a) !== 0) {
					if (a % 86400 == 0) return f("time.num_days", {
						smart_count: a / 86400
					});
					if (a % 3600 == 0) return f("time.num_hours", {
						smart_count: a / 3600
					});
					if (a % 60 == 0) return f("time.num_minutes", {
						smart_count: a / 60
					})
				}
				return f("time.num_seconds", {
					smart_count: a
				})
			}

			function t(a, y) {
				return a in y ? y[a] : void 0
			}
			const r = i.cC,
				s = i.oc,
				u = i.QT
		},
		"../react/utils/url.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Ct: function() {
					return $
				},
				Fl: function() {
					return b
				},
				KT: function() {
					return x
				},
				NF: function() {
					return y
				},
				Nw: function() {
					return h
				},
				Pd: function() {
					return C
				},
				Uh: function() {
					return G
				},
				Y_: function() {
					return a
				},
				e1: function() {
					return S
				},
				el: function() {
					return U
				},
				hW: function() {
					return L
				},
				pu: function() {
					return D
				},
				qR: function() {
					return H
				},
				td: function() {
					return m
				},
				uW: function() {
					return X
				}
			});
			var e = n("../node_modules/query-string/query-string.js"),
				o = n.n(e),
				i = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				d = n("../react/pages/stream/routes.ts"),
				p = n("../react/pages/r2/routes.ts"),
				f = n("../react/pages/zoneless-workers/routes.ts"),
				l = n("../react/pages/pages/routes.ts");

			function g(O) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var K = arguments[Z] != null ? Object(arguments[Z]) : {},
						se = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && se.push.apply(se, Object.getOwnPropertySymbols(K).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(K, ce).enumerable
					})), se.forEach(function(ce) {
						E(O, ce, K[ce])
					})
				}
				return O
			}

			function E(O, Z, K) {
				return Z = t(Z), Z in O ? Object.defineProperty(O, Z, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[Z] = K, O
			}

			function t(O) {
				var Z = r(O, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function r(O, Z) {
				if (typeof O != "object" || O === null) return O;
				var K = O[Symbol.toPrimitive];
				if (K !== void 0) {
					var se = K.call(O, Z || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(O)
			}
			const {
				endsWithSlash: s
			} = i.default, u = (O, Z) => {
				const K = O.replace(s, "").split("/");
				return K.slice(0, 2).concat([Z]).concat(K.slice(3)).join("/")
			}, a = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), y = O => `/${O.replace(s,"").replace(/^\//,"")}`, m = O => h("add-site", O), C = O => h("billing", O), h = (O, Z) => Z ? `/${Z}${O?`/${O}`:""}` : `/?to=/:account/${O}`, S = () => {
				const O = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return O ? O[1] : null
			}, $ = (O, Z) => o().stringify(g({}, o().parse(O), Z)), k = (O = "") => O.toString().replace(/([\/]{1,})$/, ""), P = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], Q = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, V = /^\/(\w{32,})(\/[^.]*)?/, Y = O => P.includes(O), z = O => !Y(O), H = O => !Y(O) && V.test(O), U = O => !Y(O) && Q.test(O), F = O => Q.exec(O), L = O => {
				if (U(O)) return O.split("/").filter(Z => Z.length > 0)[1]
			}, I = O => V.exec(O), X = O => {
				if (H(O)) {
					const Z = I(O);
					if (Z) return Z[1]
				}
			}, N = O => H(O) && O.split("/")[2] === "register-domain", ee = O => N(O) ? O.split("/") : null, te = O => {
				if (U(O)) {
					const [, , , Z, K, se, ce, ie] = O.split("/");
					return Z === "traffic" && K === "load-balancing" && se === "pools" && ce === "edit" && ie
				}
			}, G = O => {
				const Z = ee(O);
				if (Z) return Z[3]
			}, w = (O, Z) => {
				var K, se;
				return ((K = O.pattern.match(/\:/g)) !== null && K !== void 0 ? K : []).length - ((se = Z.pattern.match(/\:/g)) !== null && se !== void 0 ? se : []).length
			}, M = [...Object.values(d.C), ...Object.values(p._j), ...Object.values(f._j), ...Object.values(l._j)].sort(w);

			function b(O) {
				if (!z(O)) return O;
				for (const ie of M)
					if (ie.expression.test(O)) return ie.pattern;
				const Z = ee(O);
				if (Z) {
					const [, , ie, , ...fe] = Z;
					return `/:accountId/${ie}/:domainName/${fe.join("/")}`
				}
				if (te(O)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const se = F(O);
				if (se) {
					const [, , , , ie] = se;
					return `/:accountId/:zoneName${ie||""}`
				}
				const ce = I(O);
				if (ce) {
					const [, , ie] = ce;
					return `/:accountId${ie||""}`
				}
				return O
			}

			function D(O) {
				if (!!O) try {
					const K = O.split(".").pop();
					if (K && K.length > 0) return K
				} catch {}
			}

			function x(O, Z = document.location.href) {
				try {
					const K = new URL(O),
						se = new URL(Z);
					if (K.origin === se.origin) return `${K.pathname}${K.search}${K.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = n("../utils/zaraz.ts")
		},
		"../utils/getDashVersion.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				p: function() {
					return i
				},
				t: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var d, p;
					return (d = window) === null || d === void 0 || (p = d.build) === null || p === void 0 ? void 0 : p.dashVersion
				},
				i = () => {
					var d;
					return ((0, e.parse)((d = document) === null || d === void 0 ? void 0 : d.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initGates.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				n: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				o = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				i = n("../react/app/providers/storeContainer.js"),
				d = n("../node_modules/uuid/dist/esm-browser/v4.js"),
				p = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const f = "ANON_USER_ID";

			function l() {
				var E, t, r, s;
				let u = (E = n.g) === null || E === void 0 || (t = E.bootstrap) === null || t === void 0 || (r = t.data) === null || r === void 0 || (s = r.user) === null || s === void 0 ? void 0 : s.id;
				if (!u) {
					let a = p.Z.get(f);
					if (!a) {
						let y = (0, d.Z)();
						p.Z.set(f, y), a = y
					}
					return a
				}
				return u
			}
			async function g() {
				const E = (0, i.bh)();
				E.dispatch((0, e.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await E.dispatch((0, o.UL)({
					userId: l()
				}))
			}
		},
		"../utils/initSparrow.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Wi: function() {
					return De
				},
				IM: function() {
					return $e
				},
				yV: function() {
					return Fe
				},
				Ug: function() {
					return Be
				},
				v_: function() {
					return Le
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				i = n("../react/utils/bootstrap.ts"),
				d = n("../react/app/providers/storeContainer.js"),
				p = n("../react/common/selectors/languagePreferenceSelector.ts"),
				f = n("../flags.js"),
				l = n("../../../../node_modules/cookie/index.js"),
				g = n("../react/utils/url.ts"),
				E = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				s = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				u = n("../utils/getDashVersion.ts"),
				a = n("../react/common/selectors/accountSelectors.ts");

			function y(ne) {
				for (var T = 1; T < arguments.length; T++) {
					var B = arguments[T] != null ? Object(arguments[T]) : {},
						q = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(B).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(B, ue).enumerable
					})), q.forEach(function(ue) {
						m(ne, ue, B[ue])
					})
				}
				return ne
			}

			function m(ne, T, B) {
				return T = C(T), T in ne ? Object.defineProperty(ne, T, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[T] = B, ne
			}

			function C(ne) {
				var T = h(ne, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function h(ne, T) {
				if (typeof ne != "object" || ne === null) return ne;
				var B = ne[Symbol.toPrimitive];
				if (B !== void 0) {
					var q = B.call(ne, T || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(ne)
			}
			const S = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				$ = (0, r.Z)(ne => {
					try {
						return S.assertDecode((0, l.parse)(ne))
					} catch (T) {
						return console.error(T), {}
					}
				}),
				k = ne => (T, B, q) => {
					try {
						const Ie = window.location.pathname,
							Ue = (0, d.bh)().getState(),
							Ve = $(document.cookie),
							We = y({
								page: (0, g.Fl)(q.page || window.location.pathname),
								dashVersion: (0, u.t)()
							}, Ve);
						if (T === "identify") {
							var ue, me;
							const be = {
								gates: (0, s.T2)(Ue) || {},
								country: (ue = n.g) === null || ue === void 0 || (me = ue.bootstrap) === null || me === void 0 ? void 0 : me.ip_country
							};
							return ne(T, B, y({}, We, be, q))
						} else {
							const be = {
								accountId: (0, g.uW)(Ie),
								zoneName: (0, g.hW)(Ie),
								domainName: (0, g.Uh)(Ie)
							};
							if ((0, g.qR)(Ie)) {
								var ye;
								const Ae = (0, a.D0)(Ue);
								be.isEntAccount = Ae == null || (ye = Ae.meta) === null || ye === void 0 ? void 0 : ye.has_enterprise_zones
							}
							if ((0, g.el)(Ie)) {
								var _e;
								const Ae = (0, E.nA)(Ue);
								be.zoneId = Ae == null ? void 0 : Ae.id, be.plan = Ae == null || (_e = Ae.plan) === null || _e === void 0 ? void 0 : _e.legacy_id
							}
							return ne(T, B, y({}, We, be, q))
						}
					} catch (Ie) {
						return console.error(Ie), ne(T, B, q)
					}
				},
				P = ne => async (T, B, q) => {
					try {
						return await ne(T, B, q)
					} catch (ue) {
						if (console.error(ue), !Le()) throw ue;
						return {
							status: "rejected",
							reason: ue
						}
					}
				};
			var Q = n("../react/common/middleware/sparrow/errors.ts"),
				V = n("../react/pages/firewall/bots/tracking.ts"),
				Y = n("../react/pages/caching/tracking.tsx"),
				z = n("../react/pages/magic/packet-captures/constants.ts"),
				H = n("../react/pages/firewall/page-shield/tracking.ts"),
				U = n("../react/pages/firewall/rulesets/tracking.tsx"),
				F = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				L = n("../react/pages/spectrum/tracking.tsx"),
				I = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				X = n("../react/pages/security-center/tracking.ts"),
				N = n("../react/pages/firewall/api-shield/tracking.ts"),
				ee = n("../react/pages/home/configurations/lists/tracking.ts"),
				te = n("../react/pages/traffic/load-balancing/tracking.ts"),
				G = n("../react/pages/home/alerts/tracking.ts"),
				w = n("../react/pages/dns/dns-records/tracking.ts"),
				M = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				b = n("../react/pages/traffic/argo/tracking.ts"),
				D = n("../react/pages/magic/network-monitoring/constants.ts"),
				x = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				O = n("../react/pages/magic/overview/tracking.ts"),
				Z = n("../react/pages/hyperdrive/tracking.ts"),
				K = n("../react/pages/home/domain-registration/tracking.ts"),
				se = n("../react/pages/zoneless-workers/constants.ts"),
				ce = n("../react/pages/pages/constants.ts"),
				ie = n("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx");
			const Te = ((ne, T, ...B) => t.eg.union([t.eg.literal(ne), t.eg.literal(T), ...B.map(q => t.eg.literal(q))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", se.QV.clickedDownloadAnalytics, se.QV.clickedPrintAnalytics, se.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", ce.QV.toggledPagesSmartPlacement, ce.QV.downloadDemoProject, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", V.N3.INITIAL_FETCH_SCORES, V.N3.FETCH_CONFIGURATION, V.N3.INITIAL_FETCH_TIME_SERIES, V.N3.INITIAL_FETCH_ATTRIBUTES, V.N3.UPDATE_SETTINGS, V.N3.DELETE_RULE, V.N3.UPDATE_RULE, V.N3.FETCH_RULES, V.N3.CONFIGURE_BOT_MANAGEMENT, V.N3.WAF_RULES_REDIRECT, I.F.TOGGLE_TCP_PROTECTION, I.F.GET_TCP_PROTECTION_PREFIXES, I.F.CREATE_TCP_PROTECTION_PREFIXES, I.F.CREATE_TCP_PROTECTION_PREFIX, I.F.UPDATE_TCP_PROTECTION_PREFIX, I.F.DELETE_TCP_PROTECTION_PREFIX, I.F.DELETE_TCP_PROTECTION_PREFIXES, I.F.GET_TCP_PROTECTION_ALLOWLIST, I.F.CREATE_TCP_PROTECTION_ALLOWLIST, I.F.UPDATE_TCP_PROTECTION_ALLOWLIST, I.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, I.F.DELETE_TCP_PROTECTION_ALLOWLIST, I.F.GET_SYN_PROTECTION_RULES, I.F.GET_SYN_PROTECTION_RULE, I.F.CREATE_SYN_PROTECTION_RULE, I.F.UPDATE_SYN_PROTECTION_RULE, I.F.DELETE_SYN_PROTECTION_RULE, I.F.GET_TCP_FLOW_PROTECTION_RULES, I.F.GET_TCP_FLOW_PROTECTION_RULE, I.F.CREATE_TCP_FLOW_PROTECTION_RULE, I.F.UPDATE_TCP_FLOW_PROTECTION_RULE, I.F.DELETE_TCP_FLOW_PROTECTION_RULE, I.F.GET_SYN_PROTECTION_FILTERS, I.F.GET_SYN_PROTECTION_FILTER, I.F.CREATE_SYN_PROTECTION_FILTER, I.F.UPDATE_SYN_PROTECTION_FILTER, I.F.DELETE_SYN_PROTECTION_FILTER, I.F.GET_TCP_FLOW_PROTECTION_FILTERS, I.F.GET_TCP_FLOW_PROTECTION_FILTER, I.F.CREATE_TCP_FLOW_PROTECTION_FILTER, I.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, I.F.DELETE_TCP_FLOW_PROTECTION_FILTER, I.F.GET_DNS_PROTECTION_RULES, I.F.GET_DNS_PROTECTION_RULE, I.F.CREATE_DNS_PROTECTION_RULE, I.F.UPDATE_DNS_PROTECTION_RULE, I.F.DELETE_DNS_PROTECTION_RULE, H.F.MANAGE_PAGE_SHIELD_POLICY, H.F.CONFIGURE_PAGE_SHIELD, H.F.VIEW_DETECTED_CONNECTIONS, H.F.VIEW_DETECTED_SCRIPTS, H.F.VIEW_PAGE_SHIELD_POLICIES, H.F.VIEW_PAGE_SHIELD_SETTINGS, ee.y.CREATE_LIST, ee.y.DELETE_LIST, ee.y.ADD_LIST_ITEM, ee.y.DELETE_LIST_ITEM, Z.KO.PURCHASE_WORKERS_PAID, Z.KO.LIST_CONFIGS, Z.KO.CREATE_HYPERDRIVE_CONFIG, Z.KO.VIEW_CONFIG_DETAILS, Z.KO.UPDATE_CACHING_SETTINGS, Z.KO.DELETE_HYPERDRIVE_CONFIG, Z.KO.CLICK_HYPERDRIVE_DOCUMENTATION, Z.KO.CLICK_GET_STARTED_GUIDE, Z.KO.CLICK_CONNECTIVITY_GUIDES, Z.KO.CLICK_QUICK_LINK, L.N.CNAME, L.N.IP_ADDRESS, L.N.LB, L.N.UPDATE_CNAME, L.N.UPDATE_IP_ADDRESS, L.N.UPDATE_LB, L.N.DISABLE, Y.N.TIERED_CACHE, Y.N.CACHE_PURGE, Y.N.CACHE_ANALYTICS, ...(0, U.x4)(), F.N.CREATE, F.N.EVENTS, F.N.ANALYTICS, F.N.UPDATE, F.N.GENERATE_PREVIEW, X.R.INITIATE_URL_SCAN, X.R.LOAD_SCAN_INFO, X.v.EXPAND_INSIGHT_ROW, X.v.CLICK_RESOLVE_BUTTON, X.v.FOLLOW_RESOLVE_URL, X.v.MANAGE_INSIGHT, X.v.CLICK_SCAN_NOW, X.v.CLICK_EXPORT_INSIGHTS, X.v.BULK_ARCHIVE, N.Fj[N.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, N.Fj[N.kq.ENDPOINT_MANAGEMENT].detailedMetrics, N.Fj[N.kq.ENDPOINT_MANAGEMENT].createEndpoint, N.Fj[N.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, N.Fj[N.kq.ENDPOINT_MANAGEMENT].deployRouting, N.Fj[N.kq.ENDPOINT_MANAGEMENT].deleteRouting, N.Fj[N.kq.API_DISCOVERY].viewDiscoveredEndpoints, N.Fj[N.kq.API_DISCOVERY].saveDiscoveredEndpoint, N.Fj[N.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, N.Fj[N.kq.SCHEMA_VALIDATION].viewSchemasList, N.Fj[N.kq.SCHEMA_VALIDATION].uploadSchema, N.Fj[N.kq.SCHEMA_VALIDATION].viewSchemaAdoption, N.Fj[N.kq.SCHEMA_VALIDATION].downloadSchema, N.Fj[N.kq.SCHEMA_VALIDATION].deleteSchema, N.Fj[N.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, N.Fj[N.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, N.Fj[N.kq.SEQUENCE_ANALYTICS].viewSequencesPage, N.Fj[N.kq.JWT_VALIDATION].viewJWTRules, N.Fj[N.kq.JWT_VALIDATION].addJWTRule, N.Fj[N.kq.JWT_VALIDATION].editJWTRule, N.Fj[N.kq.JWT_VALIDATION].deleteJWTRule, N.Fj[N.kq.JWT_VALIDATION].reprioritizeJWTRule, N.Fj[N.kq.JWT_VALIDATION].viewJWTConfigs, N.Fj[N.kq.JWT_VALIDATION].addJWTConfig, N.Fj[N.kq.JWT_VALIDATION].editJWTConfig, N.Fj[N.kq.JWT_VALIDATION].deleteJWTConfig, N.Fj[N.kq.SETTINGS].redirectToFirewallRulesTemplate, N.Fj[N.kq.SETTINGS].redirectToPages, N.Fj[N.kq.SETTINGS].listSessionIdentifiers, N.Fj[N.kq.SETTINGS].listRequestsContainingSessionIdentifiers, N.Fj[N.kq.SETTINGS].addOrRemoveSessionIdentifiers, N.Fj[N.kq.SEQUENCE_RULES].listSequenceRules, N.Fj[N.kq.SEQUENCE_RULES].deleteSequenceRule, N.Fj[N.kq.SEQUENCE_RULES].reorderSequenceRule, N.Fj[N.kq.SEQUENCE_RULES].createSequenceRule, N.Fj[N.kq.SEQUENCE_RULES].editSequenceRule, te.Z.CREATE_AND_DEPLOY, te.Z.ANALYTICS, G.y.SECONDARY_DNS_NOTIFICATION_CREATE, G.y.SECONDARY_DNS_NOTIFICATION_UPDATE, G.y.SECONDARY_DNS_NOTIFICATION_DELETE, w.U.ZONE_TRANSFER_SUCCESS, w.U.DNS_RECORD_CREATE, w.U.DNS_RECORD_UPDATE, w.U.DNS_RECORD_DELETE, M.Y.PEER_DNS_CREATE, M.Y.PEER_DNS_UPDATE, M.Y.PEER_DNS_DELETE, M.Y.ZONE_TRANSFER_ENABLE, M.Y.ZONE_TRANSFER_DISABLE, b.V.ARGO_ENABLEMENT, b.V.ARGO_GEO_ANALYTICS_FETCH, b.V.ARGO_GLOBAL_ANALYTICS_FETCH, z.X.VIEW_BUCKETS_LIST, z.X.CREATE_BUCKET, z.X.VALIDATE_BUCKET, z.X.DELETE_BUCKET, z.X.VIEW_CAPTURES_LIST, z.X.CREATE_SIMPLE_CAPTURE, z.X.CREATE_FULL_CAPTURE, z.X.VIEW_FULL_CAPTURE, z.X.DOWNLOAD_SIMPLE_CAPTURE, D.bK.VIEW_RULES, D.bK.CREATE_RULE, D.bK.UPDATE_RULE, D.bK.DELETE_RULE, D.bK.VIEW_CONFIGURATION, D.bK.CREATE_CONFIGURATION, D.bK.UPDATE_CONFIGURATION, D.bK.DELETE_CONFIGURATION, O.r8.VIEW_ALERTS, O.r8.VIEW_ALERTS_HISTORY, O.r8.MAGIC_OVERVIEW_ANALYTICS, O.VZ.CREATE_SITE, O.VZ.CREATE_TUNNEL, O.VZ.CREATE_STATIC_ROUTE, x.o4.CLICK_ADAPTIVE_SAMPLING, x.o4.CLICK_TO_LOG_EXPLORER_BANNER, x.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, x.o4.CLICK_SWITCH_TO_RAW_LOGS, x.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", K.U.REGISTER_DOMAIN_SEARCH_SUBMIT, K.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, K.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, K.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, K.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, K.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, K.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, K.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, K.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, K.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, K.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, K.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, K.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, K.U.REGISTER_DOMAIN_CHECKOUT_ERROR, K.U.TRANSFER_DOMAIN_CHANGE_STEP, K.U.RENEW_DOMAIN_COMPLETED, K.U.RESTORE_DOMAIN_INIT, K.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, K.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, K.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, K.U.RESTORE_DOMAIN_FAILURE, K.U.RESTORE_DOMAIN_COMPLETED, K.U.DOMAIN_DELETE_INIT, K.U.DOMAIN_DELETE_COMPLETED, K.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, K.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, K.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, K.U.DOMAIN_DELETE_CONFIRM_DELETE, K.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, K.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, K.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, K.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, K.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, ie.S.EXISTING_DOMAIN, ie.S.NEW_DOMAIN, ie.S.WAF_RULESET, ie.S.WORKERS, ie.S.PAGES, ie.S.R2, ie.S.ACCOUNT_MEMBERS),
				ve = t.eg.exactStrict(t.eg.object({
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
					isExpanding: t.eg.boolean.optional,
					isEntAccount: t.eg.boolean.optional,
					isEnterprise: t.eg.boolean.optional,
					isInactive: t.eg.boolean.optional,
					isOpen: t.eg.boolean.optional,
					isScript: t.eg.any.optional,
					isSPA: t.eg.any.optional,
					isStreaming: t.eg.any.optional,
					isStripeBilling: t.eg.boolean.optional,
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
					success: t.eg.any.optional,
					supportLevel: t.eg.any.optional,
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
					uniqueTopLevelDomains: t.eg.any.optional
				})),
				Ce = (ne, T) => {
					const [B, q] = j(T);
					let ue, me;
					return (0, t.nM)(Te.decode(ne)) && (ue = new Q.Uh(ne)), q && q.length > 0 && (me = new Q.oV(ne, q)), [B, ue, me]
				},
				j = ne => {
					const T = ve.decode(ne);
					if ((0, t.nM)(T)) {
						const B = T.left.map(({
							context: q
						}) => q.map(({
							key: ue
						}) => ue)).reduce((q, ue) => q.concat(ue), []).filter(q => q in ne);
						return [ae(B, ne), B]
					}
					return [ne, []]
				},
				ae = (ne, T) => Object.entries(T).reduce((B, [q, ue]) => (ne.includes(q) || (B[q] = ue), B), {}),
				pe = ne => (T, B, q) => {
					const [ue, me, ye] = Ce(B, q);
					if (me) throw me;
					return ye && console.error(ye), ne(T, B, ue)
				};
			var Se = n("../react/utils/zaraz.ts");
			const ke = {
					identify: !0
				},
				Re = ne => (T, B, q) => (ke[B] || Se.tg === null || Se.tg === void 0 || Se.tg.track(B, q), ne(T, B, q));
			var xe = n("../react/utils/cookiePreferences.ts");

			function we(ne) {
				for (var T = 1; T < arguments.length; T++) {
					var B = arguments[T] != null ? Object(arguments[T]) : {},
						q = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(B).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(B, ue).enumerable
					})), q.forEach(function(ue) {
						Me(ne, ue, B[ue])
					})
				}
				return ne
			}

			function Me(ne, T, B) {
				return T = je(T), T in ne ? Object.defineProperty(ne, T, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[T] = B, ne
			}

			function je(ne) {
				var T = Ne(ne, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function Ne(ne, T) {
				if (typeof ne != "object" || ne === null) return ne;
				var B = ne[Symbol.toPrimitive];
				if (B !== void 0) {
					var q = B.call(ne, T || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(ne)
			}
			const Be = ne => {
					o().init(we({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Le() && !(0, i.gm)() && De(),
						middlewares: [P, pe, k, Re]
					}, ne))
				},
				Fe = () => {
					o().identify(we({}, (0, e.getAttribution)(), {
						locale: (0, p.r)((0, d.bh)().getState()),
						isCloudflare: !!(0, f.Jd)()
					}))
				},
				Le = () => !0,
				$e = () => {
					(0, xe.kT)("sparrow_id")
				},
				De = () => (0, xe.Xm)()
		},
		"../utils/initStyles.ts": function(W, v, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const i = "cfBaseStyles",
				d = document.head || document.getElementsByTagName("head")[0],
				p = l => {
					const g = [];
					for (let E in l.colors) {
						const t = l.colors[E];
						if (Array.isArray(t) && E !== "categorical")
							for (let r = 0; r < t.length; ++r) g.push(`--cf-${E}-${r}:${t[r]};`)
					}
					return g.join(`
`)
				},
				f = () => {
					const l = (0, e.Yc)(),
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
      background-color: ${l?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${l?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${l?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${l?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${l?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${l?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
      ${p(e.Rl)}
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
					let E = document.getElementById(i);
					E ? E.innerText = "" : (E = document.createElement("style"), E.id = i, d.appendChild(E)), E.appendChild(document.createTextNode(g)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(f), v.Z = f
		},
		"../utils/initTracking.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				k: function() {
					return l
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				i = n("../react/app/providers/storeContainer.js"),
				d = n("../react/common/selectors/userSelectors.ts"),
				p = n("../utils/initSparrow.ts"),
				f = n("../utils/zaraz.ts");
			const l = () => {
					const E = (0, d.PR)((0, i.bh)().getState());
					g(), (0, p.Ug)(), (0, f.bM)(), (E == null ? void 0 : E.id) && o().setUserId(E == null ? void 0 : E.id), (0, p.yV)(), !(0, p.Wi)() && (0, p.IM)(), E ? (0, f.yn)(E) : (0, f.Ro)()
				},
				g = () => {
					var E, t;
					(E = window) === null || E === void 0 || (t = E.OneTrust) === null || t === void 0 || t.OnConsentChanged(() => {
						const r = (0, d.PR)((0, i.bh)().getState());
						(0, p.Wi)() ? (o().setEnabled(!0), (r == null ? void 0 : r.id) ? (o().setUserId(r.id), (0, f.yn)(r)) : (0, f.Ro)(), (0, p.yV)()) : (o().setEnabled(!1), (0, p.IM)())
					})
				}
		},
		"../utils/sentry/initSentry.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				j: function() {
					return ee
				}
			});
			var e = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				o = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				i = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				d = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				p = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				f = n("../react/utils/history.ts"),
				l = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				g = n("../react/utils/url.ts");
			const E = (0, l.Rf)();
			let t;

			function r(te) {
				return s(te, "react-router-v5")
			}

			function s(te, G) {
				return (w, M = !0, b = !0) => {
					M && E && E.location && (t = w({
						name: (0, g.Fl)(E.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": G
						}
					})), b && te.listen && te.listen((D, x) => {
						if (x && (x === "PUSH" || x === "POP")) {
							t && t.finish();
							const O = {
								"routing.instrumentation": G
							};
							t = w({
								name: (0, g.Fl)(D.pathname),
								op: "navigation",
								tags: O
							})
						}
					})
				}
			}
			var u = n("../react/app/providers/storeContainer.js"),
				a = n("../react/common/selectors/languagePreferenceSelector.ts"),
				y = n("../flags.js"),
				m = n("../utils/getDashVersion.ts"),
				C = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				h = n("../../../common/intl/intl-core/src/errors.ts"),
				S = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				$ = n("../react/common/middleware/sparrow/errors.ts");
			const k = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				P = !0,
				Q = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				V = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function Y(te, G, w) {
				return G = z(G), G in te ? Object.defineProperty(te, G, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : te[G] = w, te
			}

			function z(te) {
				var G = H(te, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function H(te, G) {
				if (typeof te != "object" || te === null) return te;
				var w = te[Symbol.toPrimitive];
				if (w !== void 0) {
					var M = w.call(te, G || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(te)
			}
			class U {
				constructor() {
					Y(this, "name", U.id)
				}
				setupOnce() {
					n.g.console && (0, S.hl)(n.g.console, "error", G => (...w) => {
						const M = w.find(b => b instanceof Error);
						if (k && M) {
							let b, D = !0;
							if (M instanceof $.ez) {
								const x = M instanceof $.oV ? M.invalidProperties : void 0;
								b = {
									tags: {
										"sparrow.eventName": M.eventName
									},
									extra: {
										sparrow: {
											eventName: M.eventName,
											invalidProperties: x
										}
									},
									fingerprint: [M.name ? M.name : "SparrowValidationError"]
								}, D = !1
							} else if (M instanceof C.SparrowIdCookieError) b = {
								extra: {
									sparrowIdCookie: M.cookie
								},
								fingerprint: [M.name ? M.name : "SparrowIdCookieError"]
							};
							else if (M.name === "ChunkLoadError") {
								b = {
									fingerprint: [M.name]
								};
								try {
									b.tags = {
										chunkId: M.message.split(" ")[2],
										chunkUrl: M.request
									}
								} catch {}
							} else M instanceof h.YB && (b = {
								fingerprint: ["TranslatorError", M.translationKey]
							});
							D && d.Tb(M, b)
						}
						typeof G == "function" && G.apply(n.g.console, w)
					})
				}
			}
			Y(U, "id", "ConsoleErrorIntegration");
			var F = null,
				L = n("../utils/sentry/lastSentEventId.ts"),
				I = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				X = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const N = te => {
					const G = async w => {
						var M, b;
						const D = {
							envelope: w.body,
							url: te.url,
							isPreviewDeploy: (M = window) === null || M === void 0 || (b = M.build) === null || b === void 0 ? void 0 : b.isPreviewDeploy,
							release: (0, m.t)()
						};
						try {
							const x = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(D)
							});
							return {
								statusCode: x.status,
								headers: {
									"x-sentry-rate-limits": x.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": x.headers.get("Retry-After")
								}
							}
						} catch (x) {
							return console.log(x), (0, X.$2)(x)
						}
					};
					return I.q(te, G)
				},
				ee = () => {
					if (k && P) {
						var te, G, w, M, b, D, x, O, Z, K;
						let se = "production";
						((te = window) === null || te === void 0 || (G = te.build) === null || G === void 0 ? void 0 : G.isPreviewDeploy) && (se += "-preview"), o.S({
							dsn: k,
							release: (0, m.t)(),
							environment: se,
							ignoreErrors: V,
							allowUrls: Q,
							autoSessionTracking: !1,
							integrations: [new i.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new U, new p.jK.BrowserTracing({
								routingInstrumentation: r(f.Z)
							})],
							tracesSampleRate: 0,
							transport: N,
							beforeSend: ie => (L.e.setEventId(ie.event_id), ie)
						});
						const ce = (0, u.bh)().getState();
						d.rJ({
							LOCAL_STORAGE_FLAGS: (0, y.Qw)(),
							USER_BETA_FLAGS: (0, y.ki)(),
							meta: {
								connection: {
									type: (w = window) === null || w === void 0 || (M = w.navigator) === null || M === void 0 || (b = M.connection) === null || b === void 0 ? void 0 : b.effectiveType,
									bandwidth: (D = window) === null || D === void 0 || (x = D.navigator) === null || x === void 0 || (O = x.connection) === null || O === void 0 ? void 0 : O.downlink
								},
								languagePreference: (0, a.r)(ce),
								isPreviewDeploy: (Z = window) === null || Z === void 0 || (K = Z.build) === null || K === void 0 ? void 0 : K.isPreviewDeploy
							},
							utilGates: (0, e.T2)(ce)
						}), window.addEventListener("unhandledrejection", function(ie) {})
					}
				}
		},
		"../utils/sentry/lastSentEventId.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let i = "";
				return {
					setEventId: f => (!f || typeof f != "string" || (i = f), i),
					getEventId: () => i
				}
			})()
		},
		"../utils/sentry/setUserId.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				I: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@sentry/core/esm/exports.js");
			const o = i => {
				i ? e.av({
					id: i
				}) : e.av(null)
			}
		},
		"../utils/zaraz.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Ro: function() {
					return r
				},
				bM: function() {
					return g
				},
				tg: function() {
					return l
				},
				yn: function() {
					return t
				}
			});

			function e(s) {
				for (var u = 1; u < arguments.length; u++) {
					var a = arguments[u] != null ? Object(arguments[u]) : {},
						y = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), y.forEach(function(m) {
						o(s, m, a[m])
					})
				}
				return s
			}

			function o(s, u, a) {
				return u = i(u), u in s ? Object.defineProperty(s, u, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[u] = a, s
			}

			function i(s) {
				var u = d(s, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function d(s, u) {
				if (typeof s != "object" || s === null) return s;
				var a = s[Symbol.toPrimitive];
				if (a !== void 0) {
					var y = a.call(s, u || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(s)
			}
			const p = {
					track: (s, u) => null,
					set: (s, u) => console.log(`zaraz.set(${s}, ${u})`)
				},
				f = {
					track: (s, u) => {
						var a;
						(a = window.zaraz) === null || a === void 0 || a.track(s, e({}, u, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (s, u) => {
						var a;
						return (a = window.zaraz) === null || a === void 0 ? void 0 : a.set(s, u)
					}
				};
			let l;
			const g = () => {
					window.zaraz, l = f
				},
				E = ["email", "first_name", "last_name"],
				t = s => {
					E.forEach(u => {
						var a;
						(a = l) === null || a === void 0 || a.set(u, s[u])
					})
				},
				r = () => {
					t({})
				}
		},
		"../../../common/intl/intl-core/src/errors.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				OZ: function() {
					return p
				},
				YB: function() {
					return d
				}
			});

			function e(l, g, E) {
				return g = o(g), g in l ? Object.defineProperty(l, g, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[g] = E, l
			}

			function o(l) {
				var g = i(l, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function i(l, g) {
				if (typeof l != "object" || l === null) return l;
				var E = l[Symbol.toPrimitive];
				if (E !== void 0) {
					var t = E.call(l, g || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(l)
			}
			class d extends Error {
				constructor(g, E) {
					super(E);
					e(this, "translationKey", void 0), this.translationKey = g, this.name = "TranslatorError"
				}
			}
			class p extends d {
				constructor(g) {
					super(g, `Translation key not found: ${g}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var f = null
		},
		"../../../common/intl/intl-react/src/I18nProvider.tsx": function(W, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				i = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function d() {
				return d = Object.assign ? Object.assign.bind() : function(E) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (E[s] = r[s])
					}
					return E
				}, d.apply(this, arguments)
			}

			function p(E, t) {
				if (E == null) return {};
				var r = f(E, t),
					s, u;
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(E);
					for (u = 0; u < a.length; u++) s = a[u], !(t.indexOf(s) >= 0) && (!Object.prototype.propertyIsEnumerable.call(E, s) || (r[s] = E[s]))
				}
				return r
			}

			function f(E, t) {
				if (E == null) return {};
				var r = {},
					s = Object.keys(E),
					u, a;
				for (a = 0; a < s.length; a++) u = s[a], !(t.indexOf(u) >= 0) && (r[u] = E[u]);
				return r
			}
			class l extends e.Component {
				constructor(t) {
					super(t);
					const {
						locale: r,
						phrases: s,
						translator: u
					} = t;
					r && u.locale(r), s && u.extend(s)
				}
				componentDidUpdate(t) {
					t.phrases !== this.props.phrases && this.props.phrases && this.props.translator.locale(this.props.locale)
				}
				render() {
					const {
						children: t
					} = this.props;
					return t
				}
			}
			const g = E => {
				let {
					translator: t
				} = E, r = p(E, ["translator"]);
				const s = () => e.createElement(i.oc, null, u => e.createElement(l, d({
					translator: u
				}, r)));
				return t ? (t.locale(r.locale), e.createElement(i.bd, {
					value: t
				}, s())) : s()
			};
			v.Z = g
		},
		"../../../common/intl/intl-react/src/index.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				oc: function() {
					return g.oc
				},
				lm: function() {
					return o.Z
				},
				bd: function() {
					return e.Z
				},
				RD: function() {
					return V
				},
				cC: function() {
					return $
				},
				QT: function() {
					return P.Q
				}
			});
			var e = n("../../../common/intl/intl-react/src/I18nProvider.tsx"),
				o = n("../../../common/intl/intl-react/src/I18nLoader.tsx"),
				i = n("webpack/sharing/consume/default/react/react"),
				d = n.n(i),
				p = n("../../../../node_modules/lodash/escape.js"),
				f = n.n(p),
				l = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				g = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function E(Y) {
				for (var z = 1; z < arguments.length; z++) {
					var H = arguments[z] != null ? Object(arguments[z]) : {},
						U = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(H).filter(function(F) {
						return Object.getOwnPropertyDescriptor(H, F).enumerable
					})), U.forEach(function(F) {
						t(Y, F, H[F])
					})
				}
				return Y
			}

			function t(Y, z, H) {
				return z = r(z), z in Y ? Object.defineProperty(Y, z, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[z] = H, Y
			}

			function r(Y) {
				var z = s(Y, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function s(Y, z) {
				if (typeof Y != "object" || Y === null) return Y;
				var H = Y[Symbol.toPrimitive];
				if (H !== void 0) {
					var U = H.call(Y, z || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(Y)
			}

			function u() {
				return u = Object.assign ? Object.assign.bind() : function(Y) {
					for (var z = 1; z < arguments.length; z++) {
						var H = arguments[z];
						for (var U in H) Object.prototype.hasOwnProperty.call(H, U) && (Y[U] = H[U])
					}
					return Y
				}, u.apply(this, arguments)
			}
			const a = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				y = /(?:\r\n|\r|\n)/g;

			function m(Y, z, H) {
				return i.createElement("span", {
					key: Y,
					"data-testid": H,
					dangerouslySetInnerHTML: {
						__html: z
					}
				})
			}

			function C(Y, z = [], H = [], U) {
				let F = 0;
				const L = Y.replace(y, "").split(a);
				if (L.length === 1) return [m(F, Y, U)];
				const I = [],
					X = L.shift();
				if (X) {
					const N = m(F, X, U);
					I.push(N), typeof N != "string" && F++
				}
				for (const [N, ee, te] of h(L)) {
					z[N] || window.console && console.warn(`Missing Component for translation key: ${Y}, index: ${N}. Fragment will be used.`);
					const G = z[N] || i.Fragment,
						w = H[N] || {},
						M = m(0, ee);
					if (I.push(i.createElement(G, u({
							key: F
						}, w), M)), F++, te) {
						const b = m(F, te);
						I.push(b), typeof b != "string" && F++
					}
				}
				return I
			}

			function h(Y) {
				if (!Y.length) return [];
				const [z, H, U, F] = Y.slice(0, 4);
				return [
					[parseInt(z || U), H || "", F]
				].concat(h(Y.slice(4, Y.length)))
			}

			function S({
				id: Y = "",
				smartCount: z,
				_: H,
				values: U,
				applyMarkdown: F,
				Components: L,
				componentProps: I,
				testId: X
			}) {
				return i.createElement(g.oc, null, N => {
					U && Object.keys(U).forEach(w => U[w] = f()(U[w])), I && I.forEach(w => {
						Object.keys(w).forEach(M => {
							typeof w[M] == "string" && (w[M] = f()(w[M]))
						})
					});
					const ee = E({
							smart_count: z,
							_: H
						}, U),
						te = F ? (0, l.Z)(N.t(Y.toString(), ee), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : N.t(Y.toString(), ee),
						G = C(te, L, I, X);
					return G.length > 1 ? i.createElement(i.Fragment, null, G) : G[0]
				})
			}
			var $ = S,
				k = n("../../../common/intl/intl-react/src/withTranslator.tsx"),
				P = n("../../../common/intl/intl-react/src/useI18n.tsx"),
				Q = n("../../../common/intl/intl-types/src/index.ts"),
				V = d().createContext(Q.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Aw: function() {
					return Q
				},
				Ib: function() {
					return k
				},
				Ks: function() {
					return V
				},
				MS: function() {
					return P
				},
				PN: function() {
					return y
				},
				Pp: function() {
					return d
				},
				Q3: function() {
					return u
				},
				TS: function() {
					return a
				},
				W7: function() {
					return h
				},
				dN: function() {
					return Y
				},
				eF: function() {
					return $
				},
				qp: function() {
					return t
				},
				wR: function() {
					return E
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				i = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				d = e.eg.object({
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
				p = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				f = e.eg.object({
					registrant: d.optional,
					technical: d.optional,
					administrator: d.optional,
					billing: d.optional
				}),
				l = e.eg.object({
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
			let E = function(z) {
				return z.ONBOARDING_INITIATED = "Onboarding Initiated", z.ONBOARDED = "Onboarded", z.PENDING_REGISTRY_LOCK = "Pending Registry Lock", z.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", z.REGISTRY_UNLOCKED = "Registry Unlocked", z.LOCKED = "Locked", z.FAILED_TO_LOCK = "Failed To Lock", z.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", z.UNLOCKED = "Unlocked", z.OFFBOARDED = "Offboarded", z
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
						status: e.eg.enum(E).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: g.optional,
					landing: e.eg.union([i, e.eg.boolean]).optional,
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
					transfer_conditions: p.optional,
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
				a = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let y = function(z) {
				return z.PENDING = "pending", z.VERIFIED = "verified", z.REJECTED = "rejected", z.PENDING_DELETE = "pending_delete", z.DELETED = "deleted", z
			}({});
			const m = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(y),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				C = e.eg.object({
					designated_approvers: e.eg.array(m)
				});
			let h = function(z) {
				return z.PENDING = "pending", z.PENDING_UPDATE = "pending_update", z.ENABLED = "enabled", z.DISABLED = "disabled", z
			}({});
			const S = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(h)
				}),
				$ = e.eg.intersection([S, C]),
				k = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let P = function(z) {
				return z.UNLOCK_APPROVAL = "UnlockApprovalRequest", z.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", z.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", z.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", z
			}({});
			const Q = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				V = e.eg.object({
					message: e.eg.string
				}),
				Y = e.eg.object({
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
		"../../../common/util/types/src/utils/index.ts": function(W, v, n) {
			"use strict";
			n.d(v, {
				Yd: function() {
					return e
				},
				vE: function() {
					return o
				}
			});

			function e(i) {
				return Object.keys(i)
			}
			const o = (i, d) => {
				if (d !== void 0) throw new Error("Unexpected object: " + i);
				return d
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(W, v, n) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(i) {
				if (!n.o(e, i)) return Promise.resolve().then(function() {
					var f = new Error("Cannot find module '" + i + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				});
				var d = e[i],
					p = d[0];
				return n.e(d[1]).then(function() {
					return n.t(p, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", W.exports = o
		}
	}
]);

//# debugId=d4baf80a-88e5-5013-991c-a74ec4e00049