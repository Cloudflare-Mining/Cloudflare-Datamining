! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "89881048-b1f6-5a9b-93c3-cddbaa9cc16e")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.js": function(G, v, n) {
			"use strict";
			n.d(v, {
				J8: function() {
					return s
				},
				Jd: function() {
					return i
				},
				QY: function() {
					return f
				},
				Qw: function() {
					return p
				},
				ki: function() {
					return m
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/utils/url.ts"),
				c = n("../node_modules/query-string/query-string.js"),
				u = n.n(c),
				d = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				a;
			const p = () => Object.keys(d.Z).reduce((E, h) => (h.indexOf("cf_beta.") === 0 && d.Z.get(h) === "true" && E.push(h.split(".").slice(1).join(".")), E), []),
				m = () => {
					var E, h, C;
					return ((E = window) === null || E === void 0 || (h = E.bootstrap) === null || h === void 0 || (C = h.data) === null || C === void 0 ? void 0 : C.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((a = window) === null || a === void 0 ? void 0 : a.location) && d.Z) {
				const E = u().parse(window.location.search);
				E.beta_on && d.Z.set(`cf_beta.${E.beta_on}`, !0), E.beta_off && d.Z.set(`cf_beta.${E.beta_off}`, !1)
			}
			const y = {},
				t = E => {
					var h, C, O;
					return Object.prototype.hasOwnProperty.call(y, E) ? y[E] : ((h = window) === null || h === void 0 || (C = h.bootstrap) === null || C === void 0 || (O = C.data) === null || O === void 0 ? void 0 : O.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(B => B === E) ? (y[E] = !0, !0) : (y[E] = !1, !1)
				},
				r = E => d.Z ? d.Z.get(`cf_beta.${E}`) === !0 : !1,
				s = E => r(E) || t(E),
				l = () => !0,
				i = () => {
					var E, h, C;
					return ((E = window) === null || E === void 0 || (h = E.bootstrap) === null || h === void 0 || (C = h.data) === null || C === void 0 ? void 0 : C.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				f = E => {
					const h = (0, e.uF)(E),
						C = (h == null ? void 0 : h.roles) || [];
					return (0, o.qR)(location.pathname) && C.length === 1 && C.some(O => O === "Administrator Read Only")
				}
		},
		"../init.ts": function(G, v, n) {
			"use strict";
			n.a(G, async function(e, o) {
				try {
					let Z = function(k) {
							for (var _ = 1; _ < arguments.length; _++) {
								var w = arguments[_] != null ? Object(arguments[_]) : {},
									D = Object.keys(w);
								typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(w).filter(function(Y) {
									return Object.getOwnPropertyDescriptor(w, Y).enumerable
								})), D.forEach(function(Y) {
									z(k, Y, w[Y])
								})
							}
							return k
						},
						z = function(k, _, w) {
							return _ = H(_), _ in k ? Object.defineProperty(k, _, {
								value: w,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : k[_] = w, k
						},
						H = function(k) {
							var _ = x(k, "string");
							return typeof _ == "symbol" ? _ : String(_)
						},
						x = function(k, _) {
							if (typeof k != "object" || k === null) return k;
							var w = k[Symbol.toPrimitive];
							if (w !== void 0) {
								var D = w.call(k, _ || "default");
								if (typeof D != "object") return D;
								throw new TypeError("@@toPrimitive must return a primitive value.")
							}
							return (_ === "string" ? String : Number)(k)
						};
					n.r(v);
					var c = n("../../../../node_modules/regenerator-runtime/runtime.js"),
						u = n.n(c),
						d = n("../../../../node_modules/url-search-params-polyfill/index.js"),
						a = n.n(d),
						p = n("../libs/init/initGlobal.ts"),
						m = n.n(p),
						y = n("../libs/init/initFetch.ts"),
						t = n("../../../../node_modules/@sentry/core/esm/exports.js"),
						r = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
						s = n("../react/app/providers/storeContainer.js"),
						l = n("../libs/init/initHashScroll.ts"),
						i = n("../libs/init/loading.ts"),
						f = n("../utils/initStyles.ts"),
						E = n("../utils/sentry/initSentry.ts"),
						h = n("../utils/sentry/setUserId.ts"),
						C = n("../libs/init/initMfePreviewData.ts"),
						O = n("../utils/initGates.ts"),
						B = n("../utils/getDashVersion.ts"),
						L = n("../libs/init/initBootstrap.ts"),
						P = n("../react/utils/history.ts"),
						V = n("../react/initReact.tsx"),
						K = n("../utils/initTracking.ts");
					const $ = k => {
						t.$e(function(_) {
							_.setTag("init", "global"), t.Tb(k)
						}), (0, i.v)(k)
					};
					try {
						n.g.build = Z({}, {
							branch: "master",
							isReleaseCandidate: "true",
							commit: "fe8d0ff6cae3b51338fedbe1062e9cdb8d5c7835",
							dashVersion: "26197958",
							env: "production",
							builtAt: 1723564743302,
							versions: {
								"@cloudflare/app-dash": "25.161.22",
								node: "20.10.0",
								yarn: "3.2.2",
								webpack: "5.88.2"
							}
						}, {
							isPreviewDeploy: (0, B.p)()
						}), (0, E.j)();
						try {
							await n.e(27560).then(n.bind(n, "../react/utils/api.ts"))
						} catch (k) {
							throw t.$e(function(_) {
								_.setTag("init", "utils/api"), t.Tb(k)
							}), k
						}
						try {
							(0, l.d)(P.Z)
						} catch (k) {
							throw t.$e(function(_) {
								_.setTag("init", "hashScroll"), t.Tb(k)
							}), k
						}
						try {
							(0, f.Z)()
						} catch (k) {
							throw t.$e(function(_) {
								_.setTag("init", "styles"), t.Tb(k)
							}), k
						}
						try {
							(0, C.Z)()
						} catch (k) {
							throw t.$e(function(_) {
								_.setTag("init", "mfePreviewData"), t.Tb(k)
							}), k
						}(0, L.k)().then(async k => {
							var _;
							const w = (0, s.bh)(),
								D = (k == null ? void 0 : k.data) || {};
							w.dispatch((0, r.mW)("user", D == null ? void 0 : D.user));
							const Y = k == null || (_ = k.data) === null || _ === void 0 ? void 0 : _.user;
							n.g.bootstrap = k, Y && Y.id && (0, h.I)(Y.id);
							try {
								await (0, O.n)()
							} catch (J) {
								throw t.$e(function(R) {
									R.setTag("init", "gates"), t.Tb(J)
								}), J
							}
							try {
								(0, K.k)()
							} catch (J) {
								throw t.$e(function(R) {
									R.setTag("init", "tracking"), t.Tb(J)
								}), J
							}
							return (0, V.o)()
						}).catch(k => {
							t.$e(function(_) {
								_.setTag("init", "bootstrap"), t.Tb(k)
							}), (0, i.v)(k)
						})
					} catch (k) {
						$(k)
					}
					o()
				} catch (Z) {
					o(Z)
				}
			}, 1)
		},
		"../libs/init/initBootstrap.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				k: function() {
					return c
				}
			});
			class e extends Error {
				constructor(d, a) {
					super(a);
					this.name = `${d} ${a}`
				}
			}
			const o = () => {
					document.cookie.split(";").forEach(d => {
						const [a] = d.trim().split("=");
						document.cookie = `${a}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				c = async () => {
					let u = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!u.ok) throw u.headers.get("content-type") === "text/html" && (await u.text()).toLowerCase().includes("cookie too large") && (o(), window.location.reload()), new e("Bootstrap API Failure", u == null ? void 0 : u.status);
					return (await u.json()).result.data
				}
		},
		"../libs/init/initFetch.ts": function(G, v, n) {
			"use strict";
			var e = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				o = n.n(e),
				c = n("../../../../node_modules/fetch-intercept/lib/browser.js"),
				u = n.n(c);

			function d(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(s).filter(function(i) {
						return Object.getOwnPropertyDescriptor(s, i).enumerable
					})), l.forEach(function(i) {
						a(t, i, s[i])
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
				var r = m(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var l = s.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			const y = t => {
				const r = t && t.headers || {},
					s = new Headers(r);
				return s.append("X-Cross-Site-Security", "dash"), d({}, t, {
					headers: s
				})
			};
			(0, c.register)({
				request: (t, r) => {
					try {
						return new URL(t), t === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", r] : [t, r]
					} catch {
						return [t, y(r)]
					}
				}
			})
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../libs/init/initHashScroll.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				d: function() {
					return u
				}
			});
			let e = "";
			const o = 61;

			function c(d) {
				const a = d.substr(1);
				if (a && e !== a) {
					const p = document.getElementById(a);
					if (p) {
						const m = p.getBoundingClientRect().top;
						if (m > 0) {
							const y = m - o;
							document.documentElement.scrollTop = y
						}
					}
				}
				e = a
			}

			function u(d) {
				d.listen(a => c(a.hash))
			}
		},
		"../libs/init/initMfePreviewData.ts": function(G, v, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const o = () => {
				let c;
				try {
					c = decodeURIComponent(window.location.search)
				} catch {
					console.log("Could not decode query string. Using non-decoded value."), c = window.location.search
				}
				if (!c.includes("remote[")) return;
				const u = new URLSearchParams(c),
					d = {};
				for (let [a, p] of u) a.includes("remote") && (d[a.replace(/remote\[|\]/g, "")] = p);
				e.Z.set("mfe-remotes", JSON.stringify(d))
			};
			v.Z = o
		},
		"../libs/init/loading.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				s: function() {
					return l
				},
				v: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/cookie/index.js"),
				o = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const c = "CF_dash_version",
				u = "current",
				d = "hash",
				a = "deploymentPreview",
				p = f => f === u ? m() : y(),
				m = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				y = (f = 72) => {
					const E = 36e5;
					return new Date(Date.now() + f * E)
				},
				t = f => {
					switch (f) {
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
				r = (f, E = !1) => {
					var h;
					const C = t(f),
						O = `
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
    <h1 id="error-title">${C.title}</h1>
    <p id="error-description">${C.description}</p>
  </div>
  `,
						B = E ? `
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
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(h=window.build)===null||h===void 0?void 0:h.branch}</span>.</p>
      <a href="/version?hash=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return O + B
				},
				s = f => {
					var E;
					const h = document.getElementById(f);
					!h || (E = h.parentNode) === null || E === void 0 || E.removeChild(h)
				};

			function l() {
				const f = document.getElementById("loading-state");
				f == null || f.classList.add("hide"), f == null || f.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(s)
				})
			}

			function i(f) {
				var E;
				const h = document.getElementById("loading-state"),
					C = !!((E = e.parse(document.cookie)) === null || E === void 0 ? void 0 : E[c]);
				!h || (h.innerHTML = r(f == null ? void 0 : f.code, C))
			}
		},
		"../react/app/HoCs/withEntities.tsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../react/app/redux/index.ts"),
				u = n("../react/common/selectors/userSelectors.ts"),
				d = n("../react/common/selectors/zoneSelectors.ts"),
				a = n("../react/common/selectors/accountSelectors.ts"),
				p = n("../react/common/utils/isGuards.ts"),
				m = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				y = n.n(m);

			function t() {
				return t = Object.assign ? Object.assign.bind() : function(l) {
					for (var i = 1; i < arguments.length; i++) {
						var f = arguments[i];
						for (var E in f) Object.prototype.hasOwnProperty.call(f, E) && (l[E] = f[E])
					}
					return l
				}, t.apply(this, arguments)
			}
			const r = l => {
				function i(f) {
					const E = (0, c.UM)(),
						h = (0, m.useHistory)(),
						C = (0, m.useLocation)(),
						O = (0, m.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						B = (0, c.p4)(u.PR) || null,
						L = (0, c.p4)(d.nA) || null,
						P = (0, c.p4)(a.uF),
						V = P ? P.account : null;
					if (!O) return null;
					const {
						accountId: K,
						app: Z,
						tab: z
					} = O.params, H = O.params.zoneName && ((0, p.v5)(O.params.zoneName) || O.params.zoneName.indexOf(".") > 0) ? O.params.zoneName : void 0;
					return o().createElement(l, t({
						dispatch: E,
						history: h,
						location: C,
						match: O,
						user: B,
						membership: K ? P : null,
						account: K ? V : null,
						accountId: K || null,
						zone: H ? L : null,
						zoneName: H || null,
						app: H ? Z : null,
						tab: H ? z : null
					}, f))
				}
				return i.displayName = `withEntities(${s(l)})`, i
			};

			function s(l) {
				return l.displayName || l.name || "Component"
			}
			v.Z = r
		},
		"../react/app/components/DeepLink/actions.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				BQ: function() {
					return m
				},
				Bh: function() {
					return a
				},
				CM: function() {
					return y
				},
				MF: function() {
					return o
				},
				TS: function() {
					return s
				},
				WF: function() {
					return d
				},
				Wz: function() {
					return t
				},
				bk: function() {
					return p
				},
				fj: function() {
					return r
				},
				r4: function() {
					return u
				},
				zq: function() {
					return c
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
				c = (0, e.R)(o.ADD_SITE, l => ({
					payload: l
				})),
				u = (0, e.R)(o.RESOLVING_START),
				d = (0, e.R)(o.RESOLVING_COMPLETE),
				a = (0, e.R)(o.SELECT_ZONE, l => ({
					payload: l
				})),
				p = (0, e.R)(o.SELECT_ACCOUNT, l => ({
					payload: l
				})),
				m = (0, e.R)(o.SELECT_PAGES_PROJECT, l => ({
					payload: l
				})),
				y = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, l => ({
					payload: l
				})),
				t = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, l => ({
					accountIds: l
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				s = (0, e.R)(o.SELECT_WORKER, l => ({
					payload: l
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				BV: function() {
					return e
				},
				Dz: function() {
					return p
				},
				Fj: function() {
					return c
				},
				Kt: function() {
					return u
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return m
				},
				s$: function() {
					return d
				}
			});
			const e = "to",
				o = "_gl",
				c = "deepLinkQueryParams",
				u = "add",
				d = "multiSkuProducts",
				a = "/:account/billing/checkout",
				p = "/:account/:zone/billing/checkout",
				m = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				ZP: function() {
					return z
				},
				U: function() {
					return p.U
				},
				dd: function() {
					return p.dd
				},
				bk: function() {
					return a.bk
				},
				Bh: function() {
					return a.Bh
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n("../react/app/redux/index.ts"),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = n("../react/app/components/DeepLink/utils.ts"),
				d = n("../react/utils/bootstrap.ts"),
				a = n("../react/app/components/DeepLink/actions.ts"),
				p = n("../react/app/components/DeepLink/selectors.ts"),
				m = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				y = n.n(m);

			function t(H) {
				for (var x = 1; x < arguments.length; x++) {
					var $ = arguments[x] != null ? Object(arguments[x]) : {},
						k = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols($).filter(function(_) {
						return Object.getOwnPropertyDescriptor($, _).enumerable
					})), k.forEach(function(_) {
						r(H, _, $[_])
					})
				}
				return H
			}

			function r(H, x, $) {
				return x = s(x), x in H ? Object.defineProperty(H, x, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : H[x] = $, H
			}

			function s(H) {
				var x = l(H, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function l(H, x) {
				if (typeof H != "object" || H === null) return H;
				var $ = H[Symbol.toPrimitive];
				if ($ !== void 0) {
					var k = $.call(H, x || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(H)
			}
			class i {
				constructor(x, $) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", k => {
						this.resolvers.set(k, {
							name: k,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", k => {
						const _ = this.resolvers.get(k);
						_ && (_.endTime = Date.now(), this.resolvers.set(k, _))
					}), r(this, "resolverCancel", k => {
						this.resolverDone(k), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", k => {
						const _ = "NO_ACTION",
							w = {
								actionType: _,
								startTime: 0
							};
						return {
							start: (D = _) => {
								const Y = this.resolvers.get(k);
								w.actionType = D, w.startTime = Date.now(), Y && Y.userActions.push(w)
							},
							finish: (D = _) => {
								w.actionType = D, w.endTime = Date.now()
							},
							cancel: (D = _) => {
								w.actionType = D, w.endTime = Date.now(), this.resolverCancel(k)
							}
						}
					}), this.deepLink = x, this.legacyDeepLink = $, this.resolvers = new Map
				}
				track(x) {
					try {
						if (this._done) return;
						this._done = !0;
						const $ = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: f(this.startTime, this.endTime),
								totalCpuTime: f(this.startTime, this.endTime)
							},
							k = this.resolvers.size === 0 ? $ : Array.from(this.resolvers.values()).reduce((_, w) => {
								const D = f(w.startTime, w.endTime),
									Y = w.userActions.reduce((R, T) => {
										const A = f(T.startTime, T.endTime);
										return {
											totalTime: R.totalTime + A,
											actions: R.actions.set(T.actionType, A)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									J = D - Y.totalTime;
								return t({}, _, {
									totalTime: _.totalTime + D,
									totalUserActionsTime: _.totalUserActionsTime + Y.totalTime,
									totalCpuTime: _.totalCpuTime + J,
									[`${w.name}ResolverTotalTime`]: D,
									[`${w.name}ResolverTotalCpuTime`]: J,
									[`${w.name}ResolverTotalUserActionsTime`]: Y.totalTime
								}, Array.from(Y.actions.keys()).reduce((R, T) => t({}, R, {
									[`${w.name}Resolver/${T}`]: Y.actions.get(T)
								}), {}))
							}, t({}, $, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						y().sendEvent(x, k)
					} catch ($) {
						console.error($)
					}
				}
			}

			function f(H = Date.now(), x = Date.now()) {
				return (x - H) / 1e3
			}
			var E = n("../react/app/components/DeepLink/constants.ts"),
				h = n("../react/common/hooks/useCachedState.ts"),
				C = n("../react/common/hooks/usePrevious.ts");

			function O(H) {
				for (var x = 1; x < arguments.length; x++) {
					var $ = arguments[x] != null ? Object(arguments[x]) : {},
						k = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols($).filter(function(_) {
						return Object.getOwnPropertyDescriptor($, _).enumerable
					})), k.forEach(function(_) {
						B(H, _, $[_])
					})
				}
				return H
			}

			function B(H, x, $) {
				return x = L(x), x in H ? Object.defineProperty(H, x, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : H[x] = $, H
			}

			function L(H) {
				var x = P(H, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function P(H, x) {
				if (typeof H != "object" || H === null) return H;
				var $ = H[Symbol.toPrimitive];
				if ($ !== void 0) {
					var k = $.call(H, x || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(H)
			}
			var K = ({
					children: H
				}) => {
					const x = (0, o.TZ)(),
						$ = (0, c.useHistory)(),
						k = (0, C.Z)($.location.pathname),
						_ = (0, o.p4)(p.dd),
						[w, D] = (0, e.useState)(!0),
						[Y, J] = (0, h.j)(void 0, {
							key: E.Fj
						}),
						[R, T] = (0, h.j)(void 0, {
							key: E.s$
						}),
						A = (0, d.$8)();
					let N = new URLSearchParams($.location.search);
					const Q = (0, u.mL)($.location.pathname, N);
					let X = null,
						M = null;
					if (N.has(E.Tc) && N.delete(E.Tc), N.get(E.BV)) X = N.get(E.BV), $.location.hash && (M = $.location.hash);
					else if (Y) {
						const j = new URLSearchParams(Y);
						j.get(E.BV) && (X = j.get(E.BV), N = j)
					} else Q && (N.set(E.BV, Q), X = Q);
					if (X && E._h.test(X)) {
						const j = N.getAll(E.Kt),
							oe = JSON.stringify(j);
						j.length && oe !== R && T(oe), N.has(E.Tc) && N.delete(E.Tc), N.delete(E.Kt)
					}!A && Y === void 0 && X && J(N.toString());
					const te = async () => {
						try {
							if ((0, u.I3)(X) && A && !_) {
								Y && J(void 0), x.dispatch((0, a.r4)()), D(!0);
								const j = await (0, u.py)(X, D, x, $, k, new i(X, Q ? `${$.location.pathname}${$.location.search}` : void 0));
								N.delete(E.BV);
								const oe = N.toString();
								$.replace(O({}, $.location, {
									pathname: j,
									search: oe
								}, M ? {
									hash: M
								} : {})), x.dispatch((0, a.WF)())
							}
						} catch (j) {
							x.dispatch((0, a.WF)()), console.error(j)
						} finally {
							D(!1)
						}
					};
					return (0, e.useEffect)(() => {
						te()
					}, [$.location.pathname, $.location.search, _]), (w || (0, u.I3)(X)) && A ? null : H
				},
				Z = n("../react/app/components/DeepLink/reducer.ts"),
				z = K
		},
		"../react/app/components/DeepLink/reducer.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				E: function() {
					return u
				},
				r: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				c = n("../react/app/components/DeepLink/actions.ts");
			const u = null,
				d = o().from({
					lastAction: u,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function a(p = d, m) {
				if (m.type === c.MF.RESOLVING_COMPLETE) return d;
				if (m.type === c.MF.RESOLVING_START) return p.set("isResolving", !0);
				if (p.isResolving) {
					if (m.type === c.MF.RESOLVING_COMPLETE) return p.set("isResolving", !1);
					if (m.type === c.MF.SET_FILTERED_ACCOUNT_IDS) return p.set("filteredAccountIds", m.accountIds);
					if (m.type === c.MF.DELETE_FILTERED_ACCOUNT_IDS) return p.set("filteredAccountIds", void 0);
					{
						let y = p;
						try {
							y = p.set("lastAction", m)
						} catch {
							y = p.set("lastAction", {
								type: m.type
							})
						}
						return y
					}
				} else return p
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				U: function() {
					return c
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
				c = u => u.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				I3: function() {
					return l
				},
				X1: function() {
					return r
				},
				mL: function() {
					return C
				},
				py: function() {
					return h
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/components/DeepLink/reducer.ts"),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const u = O => O.replace(c.default.endsWithSlash, ""),
				d = O => {
					const B = u(O).split("/").slice(3);
					return B.length ? "/" + B.join("/") : ""
				},
				a = O => {
					const B = u(O).split("/").slice(2);
					return B.length ? `apps/${B.join("/")}` : "apps"
				};
			var p = n("../react/app/components/DeepLink/selectors.ts"),
				m = n("../react/app/components/DeepLink/constants.ts"),
				y = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = O => (0, y.Lb)(O) && (O.split(".").length > 1 || (0, t.v5)(O)),
				s = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				l = O => typeof O == "string" && O.startsWith("/"),
				i = (O, B) => L => new Promise((P, V) => {
					B.start();
					const K = O.subscribe(() => {
						const Z = (0, p.yI)(O.getState());
						Z === o.E ? (B.cancel(), K(), V("DeepLink: waitForAction out of context.")) : L(Z) && (B.finish(Z.type), K(), P(Z))
					})
				}),
				f = (O, B, L) => (P, V) => new Promise((K, Z) => {
					L.start();
					const z = B.location.pathname;
					P = new URL(P, window.location.href).pathname, z !== P && (L.cancel(), Z(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${P}", but on "${z}". You need to redirect to "${P}", and unblockRouter in your Resolver, before you use this function.`));
					const H = O.subscribe(() => {
						const x = (0, p.yI)(O.getState()),
							$ = B.location.pathname,
							_ = new URLSearchParams(B.location.search).get(m.BV);
						($ !== P || !!_) && (L.cancel(), H(), Z(`DeepLink: waitForPageAction user navigated away from "${P}" to "${$}${_?B.location.search:""}"`)), x === o.E ? (L.cancel(), H(), Z("DeepLink: waitForPageAction out of context.")) : V(x) && (L.finish(x.type), H(), K(x))
					})
				});

			function E(O) {
				const B = [],
					L = O.split("?")[0].split("/");
				for (let P of L) P.length !== 0 && (P.startsWith(":") ? B.push({
					value: P.substring(1),
					type: "dynamic"
				}) : B.push({
					value: P,
					type: "static"
				}));
				return B
			}
			async function h(O, B, L, P, V, K) {
				K.start();
				const Z = E(O),
					H = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(7484), n.e(72775)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					x = {};
				let $ = "";
				for (const [k, _] of Z.entries())
					if (_.type === "static") $ = [$, _.value].join("/");
					else if (_.type === "dynamic" && s.is(_.value) && _.value in H) {
					K.resolverStart(_.value);
					const w = await H[_.value]({
						deepLink: O,
						blockRouter: () => B(!0),
						unblockRouter: () => B(!1),
						routerHistory: P,
						resolvedValues: x,
						store: L,
						referringRoute: V,
						uri: {
							currentPartIdx: k,
							parts: Z
						},
						waitForAction: i(L, K.createUserActionTracker(_.value)),
						waitForPageAction: f(L, P, K.createUserActionTracker(_.value))
					});
					K.resolverDone(_.value), $ = [$, w].join("/"), x[_.value] = w
				} else throw K.cancel(), new Error(`DeepLink: Resolver with name '${_.value}' is not supported.`);
				return K.done(), $
			}

			function C(O, B) {
				const L = ":account",
					P = ":zone",
					V = B.get("zone");
				if (V) return B.delete("zone"), `/${L}/${P}/${V}`;
				const K = B.get("account");
				if (K) return B.delete("account"), `/${L}/${K}`;
				if (O === "/overview") return `/${L}/${P}`;
				if (O === "/apps") return `/${L}/${P}/${a(O)}`;
				const Z = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const z of Z) {
					const H = z.length;
					if (O.startsWith(z) && (O.length === H || O[H] === "/")) return `/${L}/${P}${O}`
				}
				switch (O) {
					case "/account/billing":
						return `/${L}/billing`;
					case "/account/subscriptions":
						return `/${L}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${L}/dns-firewall`;
					case "/account/audit-log":
						return `/${L}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				u = n("../react/app/components/SomethingWrong.jsx"),
				d = n("../utils/sentry/lastSentEventId.ts"),
				a = n("../react/utils/zaraz.ts"),
				p = n("../react/utils/url.ts");
			const m = ({
				sentryTag: y,
				children: t
			}) => o().createElement(c.SV, {
				beforeCapture: r => {
					y && r.setTag("errorBoundary", y), a.tg === null || a.tg === void 0 || a.tg.track("page-error", {
						page: (0, p.Fl)(window.location.pathname)
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
					const l = d.e.getEventId() || s;
					return o().createElement(u.Z, {
						type: "page",
						error: r,
						eventId: l
					})
				}
			}, t);
			v.Z = m
		},
		"../react/app/components/Footer.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				Z: function() {
					return R
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				a = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = n.n(p),
				y = n("../react/common/components/Apple/utils.tsx"),
				t = n("../react/utils/translator.tsx"),
				r = n("../../../../node_modules/moment/moment.js"),
				s = n.n(r);
			const l = () => {
					const T = s()().format("YYYY"),
						A = N => {
							m().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: N
							})
						};
					return o().createElement(i, {
						marginTop: "auto"
					}, o().createElement(f, null, o().createElement(E, null, o().createElement(h, null, "\xA9 ", T, " Cloudflare, Inc."), o().createElement(h, null, o().createElement(C, null, o().createElement(O, {
						showOnDeskTop: !1
					}, o().createElement(B, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => A("Support")
					}, o().createElement(t.cC, {
						id: "common.support"
					}))), o().createElement(O, null, o().createElement(B, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => A("Privacy Policy")
					}, o().createElement(t.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(O, null, o().createElement(B, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => A("Terms of Use")
					}, o().createElement(t.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(O, null, o().createElement(B, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => A("Cookie Preferences")
					}, o().createElement(t.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(O, null, o().createElement(B, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => A("Trademark")
					}, o().createElement(t.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(C, null, o().createElement(O, null, o().createElement(B, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => A("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(t.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				i = (0, a.createComponent)(({
					theme: T,
					marginTop: A
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: A
				})),
				f = (0, a.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				E = (0, a.createComponent)(({
					theme: T
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${T.space[3]}px`
					}
				})),
				h = (0, a.createComponent)(({
					theme: T
				}) => ({
					width: "100%",
					color: T.colors.white,
					fontSize: T.fontSizes[1],
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
				C = (0, a.createComponent)(({
					theme: T
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: T.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				O = (0, a.createComponent)(({
					showOnDeskTop: T = !0,
					theme: A
				}) => ({
					color: A.colors.white,
					fontSize: A.fontSizes[1],
					height: "20px",
					display: T ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: A.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: A.space[3],
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
				B = (0, a.createStyledComponent)(({
					theme: T
				}) => ({
					textDecoration: "none",
					color: T.colors.white,
					"&:hover": {
						color: T.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var L = l,
				P = n("../react/pages/welcome/routes.ts"),
				V = n("../react/utils/cookiePreferences.ts"),
				K = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				Z = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				H = () => {
					const [T, A] = (0, e.useState)(!1), N = (0, V.wV)(), Q = () => {
						A(!0)
					}, X = () => {
						A(!1)
					}, M = N && N === "US" ? (0, t.ZP)("footer.cpra_cta.privacy_choices") : (0, t.ZP)("footer.cpra_cta.cookie_preferences"), te = {
						background: "transparent",
						borderRadius: "none",
						color: T ? (0, K.Yc)() ? "#ee730a" : "#003681" : (0, K.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: T ? "underline" : "none",
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
						style: te,
						onMouseEnter: Q,
						onMouseLeave: X
					}, o().createElement(u.Ei, {
						height: 15,
						src: Z,
						mr: 2,
						alt: M
					}), M)
				};

			function x() {
				return x = Object.assign ? Object.assign.bind() : function(T) {
					for (var A = 1; A < arguments.length; A++) {
						var N = arguments[A];
						for (var Q in N) Object.prototype.hasOwnProperty.call(N, Q) && (T[Q] = N[Q])
					}
					return T
				}, x.apply(this, arguments)
			}

			function $(T, A) {
				if (T == null) return {};
				var N = k(T, A),
					Q, X;
				if (Object.getOwnPropertySymbols) {
					var M = Object.getOwnPropertySymbols(T);
					for (X = 0; X < M.length; X++) Q = M[X], !(A.indexOf(Q) >= 0) && (!Object.prototype.propertyIsEnumerable.call(T, Q) || (N[Q] = T[Q]))
				}
				return N
			}

			function k(T, A) {
				if (T == null) return {};
				var N = {},
					Q = Object.keys(T),
					X, M;
				for (M = 0; M < Q.length; M++) X = Q[M], !(A.indexOf(X) >= 0) && (N[X] = T[X]);
				return N
			}
			const _ = 24,
				w = (0, a.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,K.Yc)()?K.rS.colors.orange[6]:K.rS.colors.blue[4]}`
					}
				}), u.A),
				D = T => {
					let {
						onClick: A
					} = T, N = $(T, ["onClick"]);
					return o().createElement(w, x({
						onClick: Q => {
							m().sendEvent("navigate footer nav", {
								destinationPage: N.href
							}), A && A(Q)
						}
					}, N))
				},
				Y = T => {
					let {
						children: A,
						target: N,
						rel: Q
					} = T, X = $(T, ["children", "target", "rel"]);
					return o().createElement(D, x({
						target: N || "_blank",
						rel: Q || "noopener noreferrer"
					}, X), A, o().createElement(d.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				};
			var R = () => {
				var T, A;
				const N = [P.d.root.pattern].some(Q => (0, c.matchPath)(location.pathname, {
					path: Q
				}));
				return (0, y.PP)() ? o().createElement(L, null) : N ? null : o().createElement(u.$_, {
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: 4,
					px: 3,
					mt: "auto"
				}, o().createElement(u.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, o().createElement(u.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(u.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(u.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.contact")), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.contact_support"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, t.ZP)("footer.contact_sales"))), o().createElement(u.Dd, {
					mt: 3
				}, o().createElement(u.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(D, {
					"aria-label": (0, t.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${_}px`
				}, o().createElement(d.J, {
					type: "twitter",
					size: _
				})), o().createElement(D, {
					"aria-label": (0, t.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${_}px`
				}, o().createElement(d.J, {
					type: "facebook",
					size: _
				})), o().createElement(D, {
					"aria-label": (0, t.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${_}px`
				}, o().createElement(d.J, {
					type: "linkedin",
					size: _
				})))))), o().createElement(u.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(u.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(u.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.what_we_do")), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://www.cloudflare.com/plans"
				}, (0, t.ZP)("footer.plans"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://www.cloudflare.com/overview"
				}, (0, t.ZP)("footer.about"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, t.ZP)("footer.network_map"))))), o().createElement(u.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(u.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(u.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.resources")), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://developers.cloudflare.com"
				}, (0, t.ZP)("footer.product_docs"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://blog.cloudflare.com"
				}, (0, t.ZP)("footer.blog"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, t.ZP)("footer.testimonials"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://partners.cloudflare.com"
				}, (0, t.ZP)("footer.hosting_partners"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://api.cloudflare.com"
				}, (0, t.ZP)("footer.api"))))), o().createElement(u.ZC, {
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
					title: `Current version: ${((T=window)===null||T===void 0||(A=T.build)===null||A===void 0?void 0:A.dashVersion)||"unknown"}`
				}), o().createElement(u.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(u.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.support")), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.help_center"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://community.cloudflare.com"
				}, (0, t.ZP)("footer.community"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://www.cloudflarestatus.com"
				}, (0, t.ZP)("footer.system_status"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, t.ZP)("footer.trust_safety"))))), o().createElement(u.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(u.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(u.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.about_us")), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://www.cloudflare.com/people"
				}, (0, t.ZP)("footer.team"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://www.cloudflare.com/careers"
				}, (0, t.ZP)("footer.careers"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, t.ZP)("footer.press"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, t.ZP)("footer.tos"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, t.ZP)("footer.subs_agreement"))), o().createElement(u.Dd, {
					mb: 2
				}, o().createElement(Y, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, t.ZP)("footer.privacy_policy"))))), o().createElement(H, null)))
			}
		},
		"../react/app/components/GlobalHeader/AddProductDropdown.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				S: function() {
					return V
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = n.n(c),
				d = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				a = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = n.n(p),
				y = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				t = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = n("../react/utils/translator.tsx"),
				s = n("../react/common/components/ButtonWithDropdown.tsx"),
				l = n("../react/common/components/Dropdown/index.tsx"),
				i = n("../react/common/components/AccessControl/index.js");

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(_) {
					for (var w = 1; w < arguments.length; w++) {
						var D = arguments[w];
						for (var Y in D) Object.prototype.hasOwnProperty.call(D, Y) && (_[Y] = D[Y])
					}
					return _
				}, f.apply(this, arguments)
			}

			function E(_, w) {
				if (_ == null) return {};
				var D = h(_, w),
					Y, J;
				if (Object.getOwnPropertySymbols) {
					var R = Object.getOwnPropertySymbols(_);
					for (J = 0; J < R.length; J++) Y = R[J], !(w.indexOf(Y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, Y) || (D[Y] = _[Y]))
				}
				return D
			}

			function h(_, w) {
				if (_ == null) return {};
				var D = {},
					Y = Object.keys(_),
					J, R;
				for (R = 0; R < Y.length; R++) J = Y[R], !(w.indexOf(J) >= 0) && (D[J] = _[J]);
				return D
			}

			function C(_) {
				for (var w = 1; w < arguments.length; w++) {
					var D = arguments[w] != null ? Object(arguments[w]) : {},
						Y = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(D).filter(function(J) {
						return Object.getOwnPropertyDescriptor(D, J).enumerable
					})), Y.forEach(function(J) {
						O(_, J, D[J])
					})
				}
				return _
			}

			function O(_, w, D) {
				return w = B(w), w in _ ? Object.defineProperty(_, w, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[w] = D, _
			}

			function B(_) {
				var w = L(_, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function L(_, w) {
				if (typeof _ != "object" || _ === null) return _;
				var D = _[Symbol.toPrimitive];
				if (D !== void 0) {
					var Y = D.call(_, w || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(_)
			}
			const P = "GLOBAL_ADD_DROPDOWN",
				V = {
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers",
					PAGES: "add pages",
					R2: "add r2 storage",
					ACCOUNT_MEMBERS: "add account members"
				},
				K = [{
					title: o().createElement(r.cC, {
						_: "Existing domain",
						id: "onboarding.add_product.existing_domain.title"
					}),
					trackingEvent: V.EXISTING_DOMAIN,
					icon: "internet-browser",
					url: "?to=/:account/add-site",
					description: o().createElement(r.cC, {
						_: "Optimize web traffic speed and security",
						id: "onboarding.add_product.existing_domain.description"
					}),
					disableOn: "isZoneVersionLocked"
				}, {
					title: o().createElement(r.cC, {
						_: "New domain",
						id: "onboarding.add_product.new_domain.title"
					}),
					trackingEvent: V.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/domains/register",
					description: o().createElement(r.cC, {
						_: "Register domains with zero markup",
						id: "onboarding.add_product.new_domain.description"
					})
				}, {
					title: o().createElement(r.cC, {
						_: "WAF ruleset",
						id: "onboarding.add_product.waf_ruleset.title"
					}),
					trackingEvent: V.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: o().createElement(r.cC, {
						_: "Deploy custom Web App Firewall rulesets",
						id: "onboarding.add_product.waf_ruleset.description"
					})
				}, {
					title: o().createElement(r.cC, {
						_: "Workers",
						id: "common.apps.pages"
					}),
					trackingEvent: V.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: o().createElement(r.cC, {
						_: "Build serverless functions, sites, and apps",
						id: "onboarding.add_product.workers.description"
					})
				}, {
					title: o().createElement(r.cC, {
						_: "Pages",
						id: "common.apps.pages"
					}),
					trackingEvent: V.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: o().createElement(r.cC, {
						_: "Deploy websites and full-stack apps instantly",
						id: "onboarding.add_product.pages.description"
					})
				}, {
					title: o().createElement(r.cC, {
						_: "R2 storage bucket",
						id: "onboarding.add_product.r2.title"
					}),
					trackingEvent: V.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: o().createElement(r.cC, {
						_: "Store files and objects with zero egress fees",
						id: "onboarding.add_product.r2.description"
					})
				}, {
					title: o().createElement(r.cC, {
						_: "Account member",
						id: "onboarding.add_product.account_member.title"
					}),
					trackingEvent: V.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: o().createElement(r.cC, {
						_: "Invite teammates",
						id: "onboarding.add_product.account_member.description"
					}),
					permissionCheck: "#member:edit"
				}],
				Z = (0, y.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					tabletWide: {
						display: "inline-block"
					}
				})),
				z = (0, y.createStyledComponent)(({
					theme: _
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: _.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, t.Yc)() ? _.colors.gray[1] : _.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mt: 3,
					mb: 1,
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, t.Yc)() ? _.colors.gray[8] : _.colors.gray[9]
					}
				}), d.zx),
				H = (0, y.createStyledComponent)(({
					theme: _
				}) => {
					const w = {
						cursor: "pointer",
						backgroundColor: (0, t.Yc)() ? _.colors.gray[8] : _.colors.gray[9],
						color: _.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: _.colors.background,
						color: _.colors.gray[2],
						fontSize: _.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not(:disabled, [aria-disabled="true"])': w,
						':focus-within:not(:disabled, [aria-disabled="true"])': C({}, w, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is(:disabled, [aria-disabled="true"])': {
							color: _.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				}, c.Link),
				x = (0, y.createStyledComponent)(({
					theme: _
				}) => ({
					color: _.colors.gray[4],
					fontSize: _.fontSize[2]
				}), d.Dr),
				$ = _ => {
					let {
						url: w,
						icon: D,
						title: Y,
						trackingEvent: J,
						description: R
					} = _, T = E(_, ["url", "icon", "title", "trackingEvent", "description"]);
					return o().createElement(H, f({
						to: w,
						onClick: () => {
							m().sendEvent(J, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, T), o().createElement(d.ZC, {
						display: "flex"
					}, o().createElement(a.J, {
						type: D,
						size: 24,
						mr: 2
					}), o().createElement(d.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(d.Dr, {
						fontSize: 3
					}, Y), o().createElement(x, null, R))))
				},
				k = ({
					disableProducts: _
				}) => o().createElement(Z, {
					role: "group",
					"data-testid": P
				}, o().createElement(l.Lt, {
					trigger: o().createElement(z, null, o().createElement(a.J, {
						label: "plus",
						type: "plus"
					}), " ", o().createElement(r.cC, {
						_: "Add",
						id: ""
					}), " ", o().createElement(a.J, {
						label: "arrow",
						type: "caret-down"
					})),
					menu: o().createElement(s.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0"
					}, K.map((w, D) => w.permissionCheck ? o().createElement(i.Z, {
						edit: w.permissionCheck
					}, ({
						isEditable: Y
					}) => Y && o().createElement($, f({
						disable: w.disableOn && _.includes({
							id: w.disableOn,
							value: !0
						}),
						key: D
					}, w))) : o().createElement($, f({
						key: D
					}, w))))
				}));
			v.Z = k
		},
		"../react/app/components/LoadingSuspense.tsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				d = n("../react/utils/translator.tsx"),
				a = n("../react/app/components/ErrorStatus.tsx"),
				p = n("../react/common/components/EmptyPage.jsx"),
				m = n("../react/common/hooks/suspenseHelpers.ts");

			function y(s) {
				const [l, i] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const f = window.setTimeout(() => i(!0), s);
					return () => window.clearTimeout(f)
				}, []), l
			}
			const t = ({
					loadingTimeout: s = 1e3,
					stillLoadingTimeout: l = 9e3
				}) => {
					const i = y(s),
						f = y(l);
					if ((0, m.nW)(), !i && !f) return o().createElement(p.Z, null);
					const E = f ? o().createElement(d.cC, {
						id: "common.still_loading"
					}) : i ? o().createElement(d.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(a.Z, {
						size: 5
					}, o().createElement(u.ZC, {
						mr: 3
					}, o().createElement(c.g, {
						size: "2x"
					})), E)
				},
				r = ({
					children: s
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(t, null)
				}, s);
			v.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				C8: function() {
					return m
				},
				d3: function() {
					return p
				},
				dr: function() {
					return d
				},
				lt: function() {
					return a
				},
				m6: function() {
					return t
				},
				n: function() {
					return y
				},
				yl: function() {
					return u
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const c = "/persistence/user",
				u = async () => {
					try {
						return await (await e.get(c, {
							hideErrorAlert: !0
						})).body
					} catch (r) {
						console.error(r)
					}
				}, d = async r => {
					try {
						return await (await e.get(`/accounts/${r}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (s) {
						console.error(s)
					}
				}, a = async (r, s) => {
					try {
						return await (await e.post(`${c}/favorites`, {
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
				}, p = async (r, s) => {
					try {
						return await e.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: s
							}),
							hideErrorAlert: !0
						}), !0
					} catch (l) {
						return console.error(l), !1
					}
				}, m = async r => {
					try {
						return await (await e.post(c, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (s) {
						console.error(s)
					}
				}, y = async r => {
					try {
						return await (await e.post(`${c}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						console.error(s)
					}
				}, t = async r => {
					try {
						return await (await e.post(`${c}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						throw console.error(s), s
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				Wl: function() {
					return y
				},
				lp: function() {
					return E
				},
				Z_: function() {
					return C
				},
				r7: function() {
					return H
				},
				Tv: function() {
					return J
				},
				yZ: function() {
					return O
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../react/app/redux/index.ts"),
				u = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = n.n(u),
				a = n("../react/utils/bootstrap.ts"),
				p = n("../react/common/selectors/zoneSelectors.ts"),
				m = n("../react/app/components/Persistence/api.ts");
			const y = 10;

			function t(R) {
				for (var T = 1; T < arguments.length; T++) {
					var A = arguments[T] != null ? Object(arguments[T]) : {},
						N = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && N.push.apply(N, Object.getOwnPropertySymbols(A).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(A, Q).enumerable
					})), N.forEach(function(Q) {
						r(R, Q, A[Q])
					})
				}
				return R
			}

			function r(R, T, A) {
				return T = s(T), T in R ? Object.defineProperty(R, T, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[T] = A, R
			}

			function s(R) {
				var T = l(R, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function l(R, T) {
				if (typeof R != "object" || R === null) return R;
				var A = R[Symbol.toPrimitive];
				if (A !== void 0) {
					var N = A.call(R, T || "default");
					if (typeof N != "object") return N;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(R)
			}
			const i = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				f = t({}, i, {
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
				E = (0, e.createContext)(f),
				h = E.Consumer,
				C = ({
					children: R,
					onDarkModeChangeCb: T
				}) => {
					const [A, N] = (0, e.useState)(i), [Q, X] = (0, e.useState)(f.isLoading), M = (0, a.$8)(), te = (0, c.p4)(le => (0, p.wH)(le));
					(0, e.useEffect)(() => {
						M ? (0, m.yl)().then(le => {
							le && (N(le), T(le.darkMode))
						}).finally(() => X(!1)) : X(!1)
					}, [M]);
					const j = (le, se) => !!A.favorites.find(pe => pe.type === "zone" && pe.name === le && pe.accountId === se),
						oe = le => A.favorites.filter(pe => pe.type === "zone" && pe.accountId === le).length < y;
					return o().createElement(E.Provider, {
						value: t({}, A, {
							isLoading: Q,
							actions: {
								canAccountStarZone: oe,
								isZoneStarred: j,
								starZone: async (le, se) => {
									var pe;
									const he = !j(le, se),
										Ee = oe(se);
									if (he && !Ee) {
										console.log("can not star zone - account is at limit");
										return
									}
									const ve = await (0, m.lt)(le, se);
									d().sendEvent("click star zone", {
										isStarring: he,
										totalStarredZones: ve.filter(W => W.accountId === se && W.type === "zone").length,
										totalZones: te == null || (pe = te.paginationData) === null || pe === void 0 ? void 0 : pe.info.total_count
									}), N(t({}, A, {
										favorites: ve
									}))
								},
								setDarkMode: async le => {
									const se = await (0, m.C8)(le);
									N(se), T(se.darkMode)
								},
								logRouteVisited: async le => {
									var se;
									const pe = await (0, m.n)(le);
									N((se = pe) !== null && se !== void 0 ? se : t({}, A))
								},
								viewChange: async le => {
									const se = await (0, m.m6)(le);
									N(t({}, A, {
										viewedChanges: se
									}))
								}
							}
						})
					}, R)
				},
				O = () => (0, e.useContext)(E);
			var B = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				L = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function P() {
				return P = Object.assign ? Object.assign.bind() : function(R) {
					for (var T = 1; T < arguments.length; T++) {
						var A = arguments[T];
						for (var N in A) Object.prototype.hasOwnProperty.call(A, N) && (R[N] = A[N])
					}
					return R
				}, P.apply(this, arguments)
			}

			function V(R, T) {
				if (R == null) return {};
				var A = K(R, T),
					N, Q;
				if (Object.getOwnPropertySymbols) {
					var X = Object.getOwnPropertySymbols(R);
					for (Q = 0; Q < X.length; Q++) N = X[Q], !(T.indexOf(N) >= 0) && (!Object.prototype.propertyIsEnumerable.call(R, N) || (A[N] = R[N]))
				}
				return A
			}

			function K(R, T) {
				if (R == null) return {};
				var A = {},
					N = Object.keys(R),
					Q, X;
				for (X = 0; X < N.length; X++) Q = N[X], !(T.indexOf(Q) >= 0) && (A[Q] = R[Q]);
				return A
			}
			const Z = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var H = R => {
					let {
						isStarred: T,
						size: A = 16
					} = R, N = V(R, ["isStarred", "size"]);
					const Q = Z[(0, B.Yc)() ? "dark" : "light"];
					return o().createElement(L.J, P({
						type: T ? "star" : "star-outline",
						color: T ? Q.gold : Q.gray,
						size: A
					}, N))
				},
				x = n("../../../../node_modules/@cloudflare/elements/es/index.js");

			function $(R) {
				for (var T = 1; T < arguments.length; T++) {
					var A = arguments[T] != null ? Object(arguments[T]) : {},
						N = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && N.push.apply(N, Object.getOwnPropertySymbols(A).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(A, Q).enumerable
					})), N.forEach(function(Q) {
						k(R, Q, A[Q])
					})
				}
				return R
			}

			function k(R, T, A) {
				return T = _(T), T in R ? Object.defineProperty(R, T, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[T] = A, R
			}

			function _(R) {
				var T = w(R, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function w(R, T) {
				if (typeof R != "object" || R === null) return R;
				var A = R[Symbol.toPrimitive];
				if (A !== void 0) {
					var N = A.call(R, T || "default");
					if (typeof N != "object") return N;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(R)
			}
			const D = {
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
			var J = (0, e.forwardRef)(({
				featurePreview: R = !1,
				isStarred: T,
				onClickFn: A,
				isDisabled: N,
				testId: Q,
				buttonText: X,
				size: M = "large"
			}, te) => {
				const j = D[(0, B.Yc)() ? "dark" : "light"][T && !R ? "active" : "default"],
					oe = $({}, M === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, M === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return o().createElement(x.zx, {
					innerRef: te,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: oe.paddingRight,
					gap: 1,
					pl: oe.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: R || N ? "default" : "pointer",
					backgroundColor: j.bg,
					color: j.text,
					borderColor: j.border,
					onClick: A,
					opacity: N ? .5 : 1,
					disabled: N,
					fontSize: oe.fontSize,
					height: oe.height,
					"data-testid": Q
				}, o().createElement(H, {
					isStarred: R ? !1 : T,
					size: oe.starIconSize
				}), X)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				u = n.n(c),
				d = n("../../../common/intl/intl-react/src/index.ts"),
				a = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = n("../node_modules/@cloudflare/component-button/es/index.js"),
				m = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				y = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				r = n.n(t),
				s = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				i = n("../react/app/components/Footer.tsx"),
				f = n("../react/utils/url.ts");

			function E($) {
				for (var k = 1; k < arguments.length; k++) {
					var _ = arguments[k] != null ? Object(arguments[k]) : {},
						w = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(_).filter(function(D) {
						return Object.getOwnPropertyDescriptor(_, D).enumerable
					})), w.forEach(function(D) {
						h($, D, _[D])
					})
				}
				return $
			}

			function h($, k, _) {
				return k = C(k), k in $ ? Object.defineProperty($, k, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[k] = _, $
			}

			function C($) {
				var k = O($, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function O($, k) {
				if (typeof $ != "object" || $ === null) return $;
				var _ = $[Symbol.toPrimitive];
				if (_ !== void 0) {
					var w = _.call($, k || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)($)
			}
			const B = (0, a.createComponent)(({
					type: $
				}) => ({
					height: $ !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				L = (0, a.createComponent)(({
					theme: $,
					margin: k,
					size: _ = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: $.colors.gray[3],
					height: k ? "auto" : "100%",
					padding: k ? 0 : $.space[_ > 1 ? _ - 2 : 0],
					margin: k,
					justifyContent: "center",
					alignItems: "center"
				})),
				P = (0, a.createComponent)(() => ({
					textAlign: "left"
				})),
				V = (0, a.createComponent)(() => ({
					textAlign: "right"
				})),
				K = (0, a.createComponent)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[6]
				})),
				Z = (0, a.createComponent)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[4]
				})),
				z = (0, a.createComponent)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[3]
				})),
				H = (0, a.createComponent)(({
					theme: $
				}) => ({
					width: "100%",
					height: 125,
					marginTop: $.space[4],
					padding: $.space[2]
				}), "textarea");
			class x extends o().Component {
				constructor(...k) {
					super(...k);
					h(this, "state", {
						value: "",
						submitted: !1
					}), h(this, "handleTextareaChange", _ => {
						this.setState({
							value: _.target.value
						})
					}), h(this, "sendErrToSentry10", async () => {
						try {
							var _, w, D, Y;
							const J = ((_ = window) === null || _ === void 0 || (w = _.bootstrap) === null || w === void 0 || (D = w.data) === null || D === void 0 || (Y = D.user) === null || Y === void 0 ? void 0 : Y.id) || "Unknown",
								R = this.props.eventId || m.eW(),
								T = {
									name: J,
									email: `${J}@userid.com`,
									comments: this.state.value,
									eventId: R,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: E({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(T)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (J) {
							console.error(J)
						}
					}), h(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), h(this, "renderContent", _ => o().createElement(d.oc, null, w => o().createElement(B, {
						type: _
					}, o().createElement(L, null, o().createElement(P, null, o().createElement(K, null, w.t("error.internal_issues")), o().createElement(Z, null, w.t("error.help_us")), o().createElement(H, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: D => this.handleTextareaChange(D),
						disabled: this.state.submitted,
						placeholder: w.t("error.give_feedback")
					}), o().createElement(V, null, !this.state.submitted && o().createElement(p.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, w.t("common.submit")), this.state.submitted && o().createElement(z, null, w.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const k = this.props.error;
					console.error(`SomethingWrong: ${k}`), y.YA("user_feedback_form_displayed", "yes"), y.YA("normalizedPath", (0, f.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: k
					} = this.props;
					return k === "fullscreen" ? o().createElement("div", null, o().createElement(s.h4, null, o().createElement(t.Link, {
						to: "/"
					}, o().createElement(l.TR, null))), this.renderContent(k), o().createElement(i.Z, null)) : this.renderContent(k)
				}
			}
			x.propTypes = {
				type: u().oneOf(["fullscreen", "page"]),
				error: u().oneOfType([u().string, u().object]),
				eventId: u().string
			}, v.Z = x
		},
		"../react/app/redux/index.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				TZ: function() {
					return c
				},
				UM: function() {
					return d
				},
				ZS: function() {
					return u
				},
				p4: function() {
					return a
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e);
			const c = () => (0, e.useStore)(),
				u = () => c().getState(),
				d = () => (0, e.useDispatch)(),
				a = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(G, v, n) {
			"use strict";
			n.d(v, {
				P1: function() {
					return y
				},
				jQ: function() {
					return p
				},
				qR: function() {
					return t
				},
				uc: function() {
					return m
				}
			});
			var e = n("../react/pages/home/alerts/config.tsx"),
				o = n("../react/pages/workers/entityTypes.ts"),
				c = n("../react/pages/email/types.ts"),
				u = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				d = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				a = n.n(d);
			const p = d.static.from([{
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
					entityType: "firstPartyFonts"
				}, {
					entityType: "imageResizing"
				}, {
					entityType: "rateLimitingAnalytics"
				}, {
					entityType: "rulesets"
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
					entityType: c.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: c.BB.rule,
					idProp: "tag"
				}, {
					entityType: c.BB.rules,
					to: c.BB.rule
				}, {
					entityType: c.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: c.BB.dstAddresses,
					to: c.BB.dstAddress
				}, {
					entityType: c.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: c.BB.dnsRecords,
					to: c.BB.dnsRecord
				}, {
					entityType: c.BB.zone,
					idProp: "tag"
				}]),
				m = r => r.entities,
				y = (...r) => (0, u.P1)(p, m, ...r),
				t = (0, u.QB)(p)
		},
		"../react/app/redux/utils.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				F: function() {
					return c
				},
				_: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const o = u => (d, a, p) => (0, e.SC)(d, a, p, {
					hideErrorAlert: !0
				}).catch(u),
				c = u => d => {
					if (d.status === u) return d;
					throw d
				}
		},
		"../react/common/actionTypes.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Cm: function() {
					return a
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return p
				},
				Li: function() {
					return y
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return c
				},
				Yc: function() {
					return r
				},
				gM: function() {
					return u
				},
				lV: function() {
					return d
				},
				s1: function() {
					return m
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				c = "MODAL_OPEN",
				u = "MODAL_CLOSE",
				d = "TOGGLE_ON",
				a = "TOGGLE_OFF",
				p = "SET_ACTIVE",
				m = "CLEAR_ACTIVE",
				y = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(s) {
				return s.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", s.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", s.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", s.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", s.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", s.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", s.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", s.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", s.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", s
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				AX: function() {
					return s
				},
				YT: function() {
					return y
				},
				ct: function() {
					return p
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

			function c(l) {
				for (var i = 1; i < arguments.length; i++) {
					var f = arguments[i] != null ? Object(arguments[i]) : {},
						E = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(f).filter(function(h) {
						return Object.getOwnPropertyDescriptor(f, h).enumerable
					})), E.forEach(function(h) {
						u(l, h, f[h])
					})
				}
				return l
			}

			function u(l, i, f) {
				return i = d(i), i in l ? Object.defineProperty(l, i, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[i] = f, l
			}

			function d(l) {
				var i = a(l, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function a(l, i) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var E = f.call(l, i || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(l)
			}
			const p = l => {
					const i = l.payload.map(f => c({}, f, {
						membershipId: f.id,
						id: f.account.id
					}));
					return c({}, l, {
						payload: i
					})
				},
				m = l => {
					const i = p(l);
					return Array.isArray(i.payload) ? c({}, l, {
						payload: i.payload[0]
					}) : c({}, l, {
						payload: null
					})
				},
				y = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", p),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...l) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: l
				}),
				s = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", m)
		},
		"../react/common/actions/modalActions.ts": function(G, v, n) {
			"use strict";
			n.r(v), n.d(v, {
				closeModal: function() {
					return u
				},
				openModal: function() {
					return c
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function c(d, a, p = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: d,
						props: a
					},
					options: p
				}
			}

			function u(d) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: d
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				IH: function() {
					return d
				},
				Vp: function() {
					return a
				},
				ZK: function() {
					return m
				},
				um: function() {
					return p
				},
				vU: function() {
					return y
				}
			});
			var e = n("../react/common/actionTypes.ts");

			function o(t) {
				return {
					type: e.Ng,
					notification: t
				}
			}

			function c(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let u = 0;

			function d(t, r, s = {}) {
				return s = s || {},
					function(l) {
						let i = u++,
							f = {
								id: i,
								type: t,
								message: r,
								delay: s.delay,
								persist: s.persist === void 0 ? !1 : s.persist,
								closable: s.closable === void 0 ? !0 : s.closable,
								onClose() {
									l(c(i)), s.onClose && s.onClose.apply(null, arguments)
								}
							};
						l(o(f))
					}
			}

			function a(t, r) {
				return d("success", t, r)
			}

			function p(t, r) {
				return d("info", t, r)
			}

			function m(t, r) {
				return d("warning", t, r)
			}

			function y(t, r) {
				return d("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				BT: function() {
					return p
				},
				Ut: function() {
					return h
				},
				V_: function() {
					return C
				},
				Y9: function() {
					return f
				},
				Z0: function() {
					return B
				},
				mp: function() {
					return E
				},
				r3: function() {
					return O
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/app/redux/utils.ts");

			function c(L) {
				for (var P = 1; P < arguments.length; P++) {
					var V = arguments[P] != null ? Object(arguments[P]) : {},
						K = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && K.push.apply(K, Object.getOwnPropertySymbols(V).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(V, Z).enumerable
					})), K.forEach(function(Z) {
						u(L, Z, V[Z])
					})
				}
				return L
			}

			function u(L, P, V) {
				return P = d(P), P in L ? Object.defineProperty(L, P, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[P] = V, L
			}

			function d(L) {
				var P = a(L, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function a(L, P) {
				if (typeof L != "object" || L === null) return L;
				var V = L[Symbol.toPrimitive];
				if (V !== void 0) {
					var K = V.call(L, P || "default");
					if (typeof K != "object") return K;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(L)
			}
			const p = (0, e.C)("user").get`/user`,
				m = (0, e.C)("user").patch`/user`,
				y = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/two_factor_authentication`,
				l = (0, e.C)("user").delete`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/email`;

			function f(...L) {
				return i(...L)
			}
			const E = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				h = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(L => c({}, L, {
					body: c({}, L.body, {
						result: {}
					})
				}))),
				C = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				O = (0, e.C)("userDetails").get`/user/details`,
				B = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(G, v, n) {
			"use strict";
			n.d(v, {
				a: function() {
					return u
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e),
				c = n("../react/common/selectors/accountSelectors.ts");
			const u = a => {
					if (typeof a != "string") throw new Error("invalid Param Type provided");
					const p = a.slice(1).split(":");
					if (p.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: p[0],
						value: p[1]
					}
				},
				d = (a, p) => {
					const {
						resourceId: m,
						accountId: y,
						legacyPermission: t
					} = p;
					let {
						read: r,
						edit: s
					} = p;
					const l = {};
					t && (s = `#${t}:edit`, r = `#${t}:read`);
					const i = m || y;
					if (r) {
						const f = Array.isArray(r) ? r : [r];
						l.isReadable = f.some(E => {
							const h = u(E);
							return (0, c.DT)(a, i, C => !!(C[h.key] && C[h.key][h.value]))
						})
					}
					if (s) {
						const f = Array.isArray(s) ? s : [s];
						l.isEditable = f.some(E => {
							const h = u(E);
							return (0, c.DT)(a, i, C => !!(C[h.key] && C[h.key][h.value]))
						})
					}
					return l
				};
			v.Z = (0, e.connect)(d)
		},
		"../react/common/components/AccessControl/index.js": function(G, v, n) {
			"use strict";
			var e = n("../../../../node_modules/prop-types/index.js"),
				o = n.n(e),
				c = n("../react/app/HoCs/withEntities.tsx"),
				u = n("../react/common/components/AccessControl/SAAConnect.js");

			function d(r) {
				for (var s = 1; s < arguments.length; s++) {
					var l = arguments[s] != null ? Object(arguments[s]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), i.forEach(function(f) {
						a(r, f, l[f])
					})
				}
				return r
			}

			function a(r, s, l) {
				return s = p(s), s in r ? Object.defineProperty(r, s, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = l, r
			}

			function p(r) {
				var s = m(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function m(r, s) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, s || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}

			function y(r) {
				const l = ["isReadable", "isEditable"].reduce((i, f) => r.hasOwnProperty(f) ? d({}, i, {
					[f]: r[f]
				}) : i, {});
				return r.children(l)
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
			const t = (0, c.Z)((0, u.Z)(y));
			t.displayName = "AccessControl", v.Z = t
		},
		"../react/common/components/Apple/utils.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				PP: function() {
					return r
				},
				RJ: function() {
					return p
				},
				tz: function() {
					return s
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				d = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const a = () => m.test(window.location.pathname) || c.E.has(u.Qq),
				p = () => c.E.get(u.Qq),
				m = /^\/login\/apple(\/)?/,
				t = [m, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let l = !1;
					t.forEach(f => {
						if (f.test(window.location.pathname)) {
							l = !0;
							return
						}
					});
					const i = a() && l;
					return i && (0, d.C8)(d.LF.OFF), i
				},
				s = l => {
					l && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let i = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					l && (i = i + `&jwt=${l}`), window.location.href = i
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				oG: function() {
					return s
				},
				v2: function() {
					return p.v2
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../node_modules/@cloudflare/component-button/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				d = n("../../../common/intl/intl-react/src/index.ts"),
				a = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = n("../react/common/components/Dropdown/index.tsx");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(l) {
					for (var i = 1; i < arguments.length; i++) {
						var f = arguments[i];
						for (var E in f) Object.prototype.hasOwnProperty.call(f, E) && (l[E] = f[E])
					}
					return l
				}, m.apply(this, arguments)
			}

			function y(l, i) {
				if (l == null) return {};
				var f = t(l, i),
					E, h;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(l);
					for (h = 0; h < C.length; h++) E = C[h], !(i.indexOf(E) >= 0) && (!Object.prototype.propertyIsEnumerable.call(l, E) || (f[E] = l[E]))
				}
				return f
			}

			function t(l, i) {
				if (l == null) return {};
				var f = {},
					E = Object.keys(l),
					h, C;
				for (C = 0; C < E.length; C++) h = E[C], !(i.indexOf(h) >= 0) && (f[h] = l[h]);
				return f
			}
			const r = (0, a.createStyledComponent)(({
				theme: l
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${l.radii[2]}px 0 0 ${l.radii[2]}px`,
					borderRight: `1px solid ${l.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${l.radii[2]}px ${l.radii[2]}px 0`,
					paddingRight: l.space[2],
					paddingLeft: l.space[2]
				}
			}));

			function s(l) {
				let {
					menu: i,
					containerProps: f,
					disabled: E,
					disabledDropdown: h = E
				} = l, C = y(l, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: O
				} = (0, d.QT)();
				return o().createElement(r, m({}, f, {
					role: "group"
				}), o().createElement(c.zx, m({}, C, {
					disabled: E
				})), o().createElement(p.Lt, {
					trigger: o().createElement(c.zx, {
						type: C.type,
						"aria-haspopup": "menu",
						disabled: h
					}, o().createElement(u.J, {
						type: "caret-down",
						label: O("common.more"),
						size: 12
					})),
					menu: i
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				v: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				d = n("../react/common/hooks/useIntersectionObserver.ts");

			function a() {
				return a = Object.assign ? Object.assign.bind() : function(m) {
					for (var y = 1; y < arguments.length; y++) {
						var t = arguments[y];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (m[r] = t[r])
					}
					return m
				}, a.apply(this, arguments)
			}

			function p(m) {
				const y = (0, e.useRef)(null),
					[t, r] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const l = y.current;
					if (l) {
						const {
							bottom: i
						} = l.getBoundingClientRect();
						i > window.innerHeight && r(!0)
					}
				}, []);
				const s = (0, d.S)(l => {
					for (const i of l) i.intersectionRatio < 1 && r(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const l = y.current;
					if (l && s) return s.observe(l), () => {
						s.unobserve(l)
					}
				}, [s]), o().createElement(c.ZC, a({
					role: "menu",
					innerRef: y,
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
				}, t ? {
					bottom: "100%",
					mb: "2px"
				} : {
					top: "100%",
					mt: "2px"
				}, {
					zIndex: 1e3,
					minWidth: 170
				}, m))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				s: function() {
					return E
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = n.n(u);

			function a() {
				return a = Object.assign ? Object.assign.bind() : function(h) {
					for (var C = 1; C < arguments.length; C++) {
						var O = arguments[C];
						for (var B in O) Object.prototype.hasOwnProperty.call(O, B) && (h[B] = O[B])
					}
					return h
				}, a.apply(this, arguments)
			}

			function p(h, C) {
				if (h == null) return {};
				var O = m(h, C),
					B, L;
				if (Object.getOwnPropertySymbols) {
					var P = Object.getOwnPropertySymbols(h);
					for (L = 0; L < P.length; L++) B = P[L], !(C.indexOf(B) >= 0) && (!Object.prototype.propertyIsEnumerable.call(h, B) || (O[B] = h[B]))
				}
				return O
			}

			function m(h, C) {
				if (h == null) return {};
				var O = {},
					B = Object.keys(h),
					L, P;
				for (P = 0; P < B.length; P++) L = B[P], !(C.indexOf(L) >= 0) && (O[L] = h[L]);
				return O
			}

			function y(h) {
				for (var C = 1; C < arguments.length; C++) {
					var O = arguments[C] != null ? Object(arguments[C]) : {},
						B = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(O).filter(function(L) {
						return Object.getOwnPropertyDescriptor(O, L).enumerable
					})), B.forEach(function(L) {
						t(h, L, O[L])
					})
				}
				return h
			}

			function t(h, C, O) {
				return C = r(C), C in h ? Object.defineProperty(h, C, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[C] = O, h
			}

			function r(h) {
				var C = s(h, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function s(h, C) {
				if (typeof h != "object" || h === null) return h;
				var O = h[Symbol.toPrimitive];
				if (O !== void 0) {
					var B = O.call(h, C || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(h)
			}
			const l = ({
					theme: h
				}) => {
					const C = {
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
						'&:hover:not(:disabled, [aria-disabled="true"])': C,
						'&:focus-within:not(:disabled, [aria-disabled="true"])': y({}, C, {
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
				i = (0, c.createComponent)(l, "a"),
				f = (0, c.createComponent)(l, "button");

			function E(h) {
				let {
					disabled: C = !1
				} = h, O = p(h, ["disabled"]);
				const B = (0, u.useHistory)(),
					L = {
						role: "menuitem"
					};
				if ("href" in O && typeof O.href == "string") return o().createElement(i, a({
					"aria-disabled": C
				}, L, O, {
					href: C ? void 0 : O.href,
					onClick: V => {
						var K;
						if (C) return V.stopPropagation();
						V.preventDefault(), (K = O.onClick) === null || K === void 0 || K.call(O, V), B.push(O.href)
					}
				}));
				var P;
				return o().createElement(f, a({
					type: (P = O.type) !== null && P !== void 0 ? P : "button"
				}, L, O, {
					disabled: C
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				u = n.n(c),
				d = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const a = ({
				children: p
			}) => o().createElement(d.xu, {
				height: 411
			}, p);
			a.propTypes = {
				children: u().node
			}, v.Z = a
		},
		"../react/common/components/ModalManager.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				ZP: function() {
					return i
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
				c = n("webpack/sharing/consume/default/react-redux/react-redux");
			const u = f => f.application.modals;
			var d = n("../react/common/actions/modalActions.ts"),
				a = n("../../../../node_modules/swr/core/dist/index.mjs"),
				p = n("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(f) {
					for (var E = 1; E < arguments.length; E++) {
						var h = arguments[E];
						for (var C in h) Object.prototype.hasOwnProperty.call(h, C) && (f[C] = h[C])
					}
					return f
				}, m.apply(this, arguments)
			}
			const y = o().createContext(null);
			class t extends o().Component {
				render() {
					const {
						modals: E,
						closeModal: h
					} = this.props;
					return o().createElement(o().Fragment, null, E.map(({
						ModalComponent: C,
						props: O = {},
						id: B
					}) => {
						const L = () => {
							typeof O.onClose == "function" && O.onClose(), h(C)
						};
						return o().createElement(y.Provider, {
							key: B,
							value: {
								closeModal: L
							}
						}, o().createElement(a.J$, {
							value: p.ZP
						}, o().createElement(C, m({}, O, {
							isOpen: !0,
							closeModal: L
						}))))
					}))
				}
			}

			function r() {
				const f = o().useContext(y);
				if (!f) throw new Error("useModalContext must be used within a ModalContext");
				return f
			}

			function s() {
				const f = (0, c.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...E) {
						return f(d.openModal(...E))
					}, [f]),
					closeModal: (0, e.useCallback)(function(...E) {
						return f(d.closeModal(...E))
					}, [f])
				}
			}
			var i = (0, c.connect)(f => ({
				modals: u(f)
			}), d)(t)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				BQ: function() {
					return t
				},
				Gn: function() {
					return m
				},
				JR: function() {
					return y
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return a
				},
				ZI: function() {
					return d
				},
				if: function() {
					return o
				},
				q6: function() {
					return c
				},
				w_: function() {
					return u
				},
				zl: function() {
					return p
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				c = "date-from",
				u = "date-to",
				d = "from",
				a = "to",
				p = "all",
				m = {
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
				t = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/constants/billing/index.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Gq: function() {
					return u
				},
				g$: function() {
					return c
				},
				WX: function() {
					return e
				},
				E0: function() {
					return y
				},
				Hw: function() {
					return a
				},
				Ed: function() {
					return d
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return l
				},
				hQ: function() {
					return p
				},
				SP: function() {
					return m
				}
			});
			let e = function(i) {
				return i.page_rules = "page_rules", i.automatic_platform_optimization = "automatic_platform_optimization", i
			}({});
			const o = "page_rules",
				c = "automatic_platform_optimization",
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
				d = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				a = {
					currency: "USD",
					frequency: "monthly",
					requests_included: 5e5,
					ubb_price: .5,
					ubb_frequency: 5e5
				},
				p = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e4,
					ubb_frequency: 1e4,
					ubb_price: .05
				},
				m = {
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
			var t = n("../react/common/constants/billing/tax.ts"),
				r = n("../react/common/constants/billing/tracking.ts"),
				s = n("../react/common/constants/billing/workers.ts");
			const l = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				FP: function() {
					return e
				},
				Nl: function() {
					return d
				},
				SO: function() {
					return c
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
				c = {
					BILLING: "billing"
				},
				u = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				d = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Dk: function() {
					return l
				},
				Dy: function() {
					return i
				},
				E_: function() {
					return a
				},
				K$: function() {
					return C
				},
				Lv: function() {
					return f
				},
				S4: function() {
					return d
				},
				UM: function() {
					return t
				},
				Xf: function() {
					return y
				},
				Y1: function() {
					return p
				},
				p6: function() {
					return m
				},
				q0: function() {
					return u
				},
				rg: function() {
					return E
				},
				sJ: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = "healthy",
				d = "degraded",
				a = "critical",
				p = "unknown",
				m = "not-monitored",
				y = o().from({
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
					f: y.FREE,
					p: y.PRO,
					b: y.BIZ
				},
				s = "marketing-pt",
				l = () => {
					const O = c.Z.get(s);
					if (!!O) return r[O]
				},
				i = ["gov"],
				f = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				E = "banner-notification-interactions",
				h = null;
			let C = function(O) {
				return O.SUPER_ADMIN = "Super Administrator - All Privileges", O.ADMIN = "Administrator", O.ADMIN_READ_ONLY = "Administrator Read Only", O
			}({})
		},
		"../react/common/constants/index.ts": function(G, v, n) {
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
			var e = n("../react/common/constants/constants.ts"),
				o = n("../react/common/constants/billing/index.ts")
		},
		"../react/common/hooks/suspenseHelpers.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				bt: function() {
					return p
				},
				nW: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const u = "suspenseComplete";

			function d() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(u))
				}, [])
			}

			function a(m) {
				(0, c.OR)(u, () => {
					window.setTimeout(m, 0)
				}, {
					target: window
				})
			}

			function p(...m) {
				const [y, t] = m;
				o().useLayoutEffect(y, t), a(y)
			}
		},
		"../react/common/hooks/useCachedState.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				j: function() {
					return u
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(d, {
				key: a,
				cache: p = c.E
			} = {}) {
				const m = a !== void 0 && p.get(a),
					[y, t] = (0, e.useState)(m || d);
				return [y, s => {
					t(l => (s instanceof Function && (s = s(l)), a !== void 0 && p.set(a, s), s))
				}]
			}
		},
		"../react/common/hooks/useClickOutside.ts": function(G, v, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");

			function o(c, u) {
				(0, e.OR)("click", d => {
					var a;
					d.target instanceof Node && d.target.isConnected && ((a = c.current) === null || a === void 0 ? void 0 : a.contains(d.target)) === !1 && u(d)
				}, {
					capture: !0
				})
			}
			v.Z = o
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				S: function() {
					return c
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function c(u, {
				root: d,
				rootMargin: a,
				threshold: p
			} = {}) {
				const m = (0, e.useRef)(null);

				function y() {
					return m.current === null && (m.current = new IntersectionObserver(u, {
						root: d,
						rootMargin: a,
						threshold: p
					})), m.current
				}
				return (0, e.useEffect)(() => (m.current = new IntersectionObserver(u, {
					root: d,
					rootMargin: a,
					threshold: p
				}), () => {
					var t;
					(t = m.current) === null || t === void 0 || t.disconnect()
				}), [u, d, a, p]), y()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function c(u) {
				const d = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					d.current = u
				}, [u]), d.current
			}
			v.Z = c
		},
		"../react/common/middleware/sparrow/errors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Uh: function() {
					return d
				},
				ez: function() {
					return u
				},
				oV: function() {
					return a
				}
			});

			function e(p, m, y) {
				return m = o(m), m in p ? Object.defineProperty(p, m, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[m] = y, p
			}

			function o(p) {
				var m = c(p, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function c(p, m) {
				if (typeof p != "object" || p === null) return p;
				var y = p[Symbol.toPrimitive];
				if (y !== void 0) {
					var t = y.call(p, m || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(p)
			}
			class u extends Error {
				constructor(m, y) {
					super(y);
					e(this, "eventName", void 0), this.eventName = m, this.name = "SparrowValidationError"
				}
			}
			class d extends u {
				constructor(m) {
					super(m, `Event not allowed: "${m}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class a extends u {
				constructor(m, y) {
					super(m, `Found invalid properties on event: "${m}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = y
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				AC: function() {
					return Be
				},
				Au: function() {
					return S
				},
				B: function() {
					return Re
				},
				B3: function() {
					return ke
				},
				BG: function() {
					return K
				},
				Bp: function() {
					return Ge
				},
				D0: function() {
					return B
				},
				DT: function() {
					return j
				},
				EL: function() {
					return Q
				},
				GE: function() {
					return We
				},
				Ko: function() {
					return te
				},
				Kx: function() {
					return H
				},
				Le: function() {
					return x
				},
				O4: function() {
					return je
				},
				Ou: function() {
					return T
				},
				Py: function() {
					return Fe
				},
				QI: function() {
					return Ue
				},
				RO: function() {
					return me
				},
				T3: function() {
					return Le
				},
				T8: function() {
					return V
				},
				UX: function() {
					return N
				},
				VP: function() {
					return Ce
				},
				Xo: function() {
					return xe
				},
				Xu: function() {
					return Y
				},
				Yi: function() {
					return Ze
				},
				Yj: function() {
					return M
				},
				Zu: function() {
					return X
				},
				bC: function() {
					return se
				},
				f8: function() {
					return _
				},
				hI: function() {
					return Ye
				},
				hN: function() {
					return z
				},
				hX: function() {
					return Te
				},
				iq: function() {
					return we
				},
				nE: function() {
					return Z
				},
				oD: function() {
					return A
				},
				oI: function() {
					return k
				},
				oJ: function() {
					return ne
				},
				uF: function() {
					return J
				},
				ut: function() {
					return De
				},
				vU: function() {
					return Pe
				},
				wQ: function() {
					return Ee
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				c = n.n(o),
				u = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				d = n.n(u),
				a = n("../../../../node_modules/reselect/lib/index.js"),
				p = n("../../../../node_modules/moment/moment.js"),
				m = n.n(p),
				y = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				s = n("../react/common/selectors/entitlementsSelectors.ts"),
				l = n("../react/app/components/DeepLink/selectors.ts"),
				i = n("../react/common/constants/index.ts"),
				f = n("../react/common/utils/hasRole.ts");

			function E(b) {
				for (var U = 1; U < arguments.length; U++) {
					var q = arguments[U] != null ? Object(arguments[U]) : {},
						re = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(q).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(q, ce).enumerable
					})), re.forEach(function(ce) {
						h(b, ce, q[ce])
					})
				}
				return b
			}

			function h(b, U, q) {
				return U = C(U), U in b ? Object.defineProperty(b, U, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[U] = q, b
			}

			function C(b) {
				var U = O(b, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function O(b, U) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var re = q.call(b, U || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(b)
			}
			const B = b => {
					const U = J(b);
					return U == null ? void 0 : U.account
				},
				L = b => {
					const U = (0, r.PR)(b);
					if (U) {
						const q = U.id;
						return b.accountAccess[q] || {}
					}
					return {}
				},
				P = b => b.accountsDetailed,
				V = (0, t.P1)("accountsDetailed", P),
				K = b => b.memberships,
				Z = (0, a.P1)((0, t.P1)("memberships", K), l.U, (b, U) => !!U && !!b ? b.filter(q => U.includes(q.id)) : b),
				z = b => b.accountFlags && b.accountFlags.data,
				H = b => b.accountFlags,
				x = (b, U, q) => {
					const re = z(b);
					return !re || !re[U] ? null : re[U][q]
				},
				$ = b => b.accountFlags.isRequesting,
				k = (b, ...U) => c()(b, ["accountFlagsChanges", "data", ...U]),
				_ = b => b.accountFlagsChanges.isRequesting,
				w = (0, a.P1)(z, H, (b, U) => ({
					data: b,
					meta: U
				})),
				D = (b, U, q) => !!(isEnterpriseSSEnabledSelector(b) && x(b, U, q)),
				Y = b => b.membership,
				J = (0, t.P1)("membership", Y),
				R = (0, a.P1)(J, Y, (b, U) => ({
					data: b,
					meta: U
				})),
				T = b => {
					const {
						roles: U = []
					} = J(b) || {};
					return Boolean(U.find(q => q === "Super Administrator - All Privileges" || q === "Billing"))
				},
				A = b => {
					const U = L(b),
						q = Ae.getMemberships(b) ? d().asMutable(Ae.getMemberships(b)) : [];
					if (!!q) return d().from(q.map(re => E({}, re, {
						lastSeen: U[re.account.id] ? U[re.account.id].lastSeen : null
					})).sort((re, ce) => re.lastSeen && ce.lastSeen ? ce.lastSeen - re.lastSeen : 0))
				},
				N = b => b.filteredMemberships,
				Q = (0, t.P1)("filteredMemberships", N),
				X = (0, a.P1)(J, b => b == null ? void 0 : b.permissions),
				M = (0, a.P1)(X, b => (0, e.Z)(U => {
					var q;
					return (q = b == null ? void 0 : b[U]) !== null && q !== void 0 ? q : {
						read: !1,
						edit: !1
					}
				})),
				te = (0, a.P1)(J, b => b == null ? void 0 : b.policies),
				j = (b, U, q) => {
					let re = Ae.getMembership(b);
					if (!re) {
						const ce = Ae.getMemberships(b);
						if (!ce || !U) return !1;
						re = ce.find(ge => ge.account.id === U)
					}
					if (!re || !q) return !1;
					try {
						return q(re.permissions)
					} catch {
						return !1
					}
				},
				oe = b => {
					var U, q;
					return (U = (q = B(b)) === null || q === void 0 ? void 0 : q.meta.has_pro_zones) !== null && U !== void 0 ? U : !1
				},
				le = b => {
					var U, q;
					return (U = (q = B(b)) === null || q === void 0 ? void 0 : q.meta.has_business_zones) !== null && U !== void 0 ? U : !1
				},
				se = b => le(b) || oe(b),
				pe = (b, U) => {
					const q = he(b, U);
					return !!q && !!q.enabled
				},
				he = (b, U) => {
					const q = Ae.getMembership(b),
						re = q && q.account;
					return re && re.legacy_flags && re.legacy_flags[U]
				},
				Ee = b => pe(b, "custom_pages"),
				ve = b => !!b && b["webhooks.webhooks.enabled"],
				W = b => x(b, "bots", "enabled"),
				ie = b => x(b, "billing", "annual_subscriptions_enable"),
				me = b => b ? Boolean(x(b, "ConstellationAI", "v2_ui")) : !1,
				Te = b => b ? Boolean(x(b, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Re = b => b ? Boolean(x(b, "AIgateway", "enabled")) : !1,
				Me = b => he(b, "enterprise_zone_quota"),
				$e = b => {
					const U = Me(b);
					return !U || !U.available ? -1 : U.available
				},
				we = b => b.accountMembers,
				ke = (0, t.P1)("accountMembers", we),
				je = b => b.accountMember && b.accountMember.isRequesting,
				Ne = b => b.accountRoles,
				Be = (0, t.P1)("accountRoles", Ne),
				Fe = (b, U) => {
					const q = Ae.getMemberships(b),
						re = q && q.find(ye => ye.account.id === U);
					if (re) return re.account.name.replace(" Account", " account");
					const ce = Ae.getMembership(b),
						ge = ce && ce.account;
					return ge && ge.id === U ? ge.name : null
				},
				De = (b, U) => {
					const q = Ae.getMemberships(b),
						re = q && q.find(ye => ye.account.id === U);
					if (re) return re.account.settings.access_approval_expiry;
					const ce = Ae.getMembership(b),
						ge = ce && ce.account;
					return ge && ge.id === U ? ge.settings.access_approval_expiry : null
				},
				xe = (b, U) => {
					const q = De(b, U);
					return q ? m().utc(q).isAfter() : !1
				},
				Le = (b, U, q) => {
					const re = De(b, U);
					let ce = re ? m().utc(re) : null;
					return !ce || !ce.isAfter() ? "" : ce && ce.year() === 3e3 ? q("account.access_approval.card_expiration_forever") : q("account.access_approval.card_expiration_text", {
						expiryTimestamp: ce.local().format(y.U.DateTime)
					})
				},
				ne = b => b && b.member && b.member.edit,
				S = (b, U) => {
					const q = Ae.getMembership(b),
						re = q && q.account;
					return re ? re.id !== U : !1
				},
				F = b => b.dpa,
				ee = (0, t.P1)("dpa", F),
				ue = b => b.webhook,
				fe = b => b.webhooks,
				_e = (0, t.P1)("webhook", fe),
				Ce = b => b.accountLegoContract,
				Se = (0, t.P1)("accountLegoContract", Ce),
				Ue = b => {
					const U = Se(b);
					return (U == null ? void 0 : U.lego_state) ? U.lego_state : ""
				},
				Ve = b => Ue(b) === "signed",
				We = b => Ce(b).isRequesting,
				Pe = b => {
					const U = Se(b);
					return U && U.subscription_type ? U.subscription_type : ""
				},
				Oe = b => Pe(b) !== "",
				Ae = {
					getMembership: J,
					getMemberships: Z,
					getFilteredMemberships: Q,
					getAccountMembers: ke,
					getAccountRoles: Be
				},
				Ge = b => b.accountSingle,
				Ze = (0, t.P1)("accountSingle", Ge),
				Ye = b => {
					const U = [i.K$.SUPER_ADMIN, i.K$.ADMIN];
					return (0, f.n)(b, U)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				$f: function() {
					return i
				},
				AD: function() {
					return d
				},
				BF: function() {
					return l
				},
				Bs: function() {
					return B
				},
				Ci: function() {
					return M
				},
				E6: function() {
					return s
				},
				Hq: function() {
					return Ee
				},
				Ms: function() {
					return V
				},
				Q2: function() {
					return a
				},
				Td: function() {
					return C
				},
				Z: function() {
					return oe
				},
				a: function() {
					return O
				},
				a5: function() {
					return se
				},
				du: function() {
					return m
				},
				ec: function() {
					return _
				},
				f: function() {
					return he
				},
				hL: function() {
					return le
				},
				ji: function() {
					return te
				},
				jo: function() {
					return K
				},
				k4: function() {
					return pe
				},
				lI: function() {
					return u
				},
				p1: function() {
					return E
				},
				pK: function() {
					return ve
				},
				pf: function() {
					return t
				},
				qR: function() {
					return h
				},
				rV: function() {
					return p
				},
				u1: function() {
					return y
				},
				w4: function() {
					return r
				},
				yD: function() {
					return j
				}
			});
			var e = n("../react/utils/url.ts");

			function o(W, ie) {
				return W && W[ie]
			}
			const c = W => !u(W).isRequesting;

			function u(W) {
				return W.entitlements.zone
			}

			function d(W) {
				return u(W).data
			}
			const a = W => {
				var ie, me;
				return ((ie = u(W).paginationData) === null || ie === void 0 || (me = ie.options) === null || me === void 0 ? void 0 : me.editedDate) || {}
			};

			function p(W, ie) {
				const me = d(W);
				return me ? o(me, ie) : void 0
			}
			const m = (W, ie) => p(W, ie) === !0;

			function y(W) {
				return W.entitlements.account
			}

			function t(W) {
				return y(W).data
			}
			const r = W => {
				var ie, me;
				return ((ie = y(W).paginationData) === null || ie === void 0 || (me = ie.options) === null || me === void 0 ? void 0 : me.editedDate) || {}
			};

			function s(W) {
				return !y(W).isRequesting
			}

			function l(W, ie) {
				const me = t(W);
				return me ? o(me, ie) : void 0
			}

			function i(W, ie) {
				return l(W, ie) === !0
			}

			function f(W, ie) {
				return ie.every(me => i(W, me))
			}

			function E(W) {
				return i(W, "contract.customer_enabled")
			}

			function h(W) {
				return i(W, "contract.self_service_allowed")
			}

			function C(W) {
				return i(W, "billing.partners_managed")
			}
			const O = W => E(W) && h(W),
				B = W => i(W, "enterprise.ecp_allowed");

			function L(W) {
				return P(W) || i(W, "argo.allow_smart_routing") || i(W, "argo.allow_tiered_caching") || i(W, "rate_limiting.enabled") || i(W, "ctm.enabled") || i(W, "workers.enabled") || i(W, "workers.kv_store.enabled") || i(W, "stream.enabled")
			}
			const P = W => m(W, "argo.allow_smart_routing") || m(W, "argo.allow_tiered_caching"),
				V = W => i(W, "zone.cname_setup_allowed") || i(W, "zone.partial_setup_allowed") || m(W, "zone.partial_setup_allowed"),
				K = W => i(W, "argo.allow_smart_routing") || m(W, "argo.allow_smart_routing"),
				Z = W => i(W, "argo.allow_tiered_caching") || m(W, "argo.allow_tiered_caching"),
				z = W => K(W) || Z(W),
				H = W => i(W, "ctm.enabled"),
				x = W => {
					const ie = l(W, "ctm.load_balancers");
					return typeof ie == "number" ? ie : 0
				},
				$ = W => {
					const ie = l(W, "ctm.pools");
					return typeof ie == "number" ? ie : 0
				},
				k = W => {
					const ie = l(W, "ctm.origins");
					return typeof ie == "number" ? ie : 0
				},
				_ = W => i(W, "workers.enabled"),
				w = W => i(W, "stream.enabled"),
				D = W => {
					const ie = l(W, "access.users_allowed");
					return typeof ie == "number" ? ie : 0
				},
				Y = W => D(W) > 0,
				J = W => {
					const ie = p(W, "dedicated_certificates");
					return typeof ie == "number" ? ie : 0
				},
				R = W => J(W) > 0,
				T = W => {
					const ie = p(W, "rate_limiting.max_rules");
					return typeof ie == "number" ? ie : 0
				},
				A = W => i(W, "rate_limiting.enabled"),
				N = W => {
					const ie = p(W, "page_rules");
					return typeof ie == "number" ? ie : 0
				},
				Q = W => N(W) > 0,
				X = W => {
					const ie = l(W, "dns_firewall.max_clusters_allowed");
					return typeof ie == "number" ? ie : 0
				},
				M = W => X(W) > 0,
				te = W => m(W, "zone.advanced_certificate_manager") || i(W, "zone.advanced_certificate_manager"),
				j = W => p(W, "authoritative_dns.proxy_record_allowed") === !1 || l(W, "authoritative_dns.proxy_record_allowed") === !1,
				oe = W => i(W, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				le = W => p(W, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				se = W => {
					const ie = p(W, "authoritative_dns.min_record_ttl_allowed");
					return typeof ie == "number" && ie > 1 ? ie : 60
				},
				pe = W => i(W, "foundation_dns.advanced_nameservers_allowed") || m(W, "foundation_dns.advanced_nameservers_allowed"),
				he = (W, ie) => ((0, e.el)(window.location.pathname) ? p : l)(W, ie),
				Ee = W => i(W, "authoritative_dns.multi_provider_allowed") || m(W, "authoritative_dns.multi_provider_allowed"),
				ve = W => i(W, "secondary_dns.secondary_overrides") || m(W, "secondary_dns.secondary_overrides")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				r: function() {
					return u
				},
				v: function() {
					return d
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts"),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = a => {
				const p = a.userCommPreferences.data;
				if (p == null ? void 0 : p["language-locale"]) return c.Z.set(e.ly, p["language-locale"]), p["language-locale"];
				{
					c.Z.has(e.ly) || c.Z.set(e.ly, e.ZW);
					const m = c.Z.get(e.ly);
					return d(m) ? m : e.ZW
				}
			};

			function d(a) {
				const p = Object.keys(o.Q).find(m => o.Q[m] === a);
				return !!a && typeof a == "string" && p != null && (0, e.S8)(!1, p)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				$8: function() {
					return d
				},
				BG: function() {
					return y
				},
				BY: function() {
					return O
				},
				GP: function() {
					return i
				},
				GU: function() {
					return B
				},
				PR: function() {
					return c
				},
				h$: function() {
					return h
				},
				h8: function() {
					return t
				},
				kk: function() {
					return E
				},
				l8: function() {
					return p
				},
				mV: function() {
					return f
				},
				vW: function() {
					return a
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const o = L => L.user,
				c = (0, e.P1)("user", o),
				u = L => {
					var P;
					return (P = c(L)) === null || P === void 0 ? void 0 : P.email.endsWith("@cloudflare.com")
				},
				d = L => {
					var P;
					return !!((P = c(L)) === null || P === void 0 ? void 0 : P.id)
				},
				a = L => {
					const P = c(L);
					if (!!P) return P.first_name && P.last_name ? `${P.first_name} ${P.last_name}` : P.email
				},
				p = L => {
					const P = c(L);
					return P && P.has_enterprise_zones
				},
				m = L => L.userCommPreferences,
				y = (0, e.P1)("userCommPreferences", m),
				t = L => {
					const P = c(L);
					return P && P.email_verified
				},
				r = L => {
					const P = y(L);
					return P && P.preferences.marketing_communication
				},
				s = L => L.userDetails,
				l = (0, e.P1)("userDetails", s),
				i = L => {
					const P = l(L);
					return P && P["2FA-RECOVERY"] === "scheduled"
				},
				f = L => {
					const P = l(L);
					return P && P["2FA-RECOVERY"] === "interrupted"
				},
				E = L => {
					const P = l(L);
					return P == null ? void 0 : P["NEW-USER-EMAIL"]
				},
				h = L => L.gates.assignments,
				C = (L, P) => L && L[P];

			function O(L, P) {
				const V = h(L);
				return V ? C(V, P) : void 0
			}
			const B = (L, P) => O(L, P) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				$4: function() {
					return V
				},
				$t: function() {
					return Fe
				},
				A4: function() {
					return E
				},
				Cu: function() {
					return h
				},
				DQ: function() {
					return pe
				},
				Ej: function() {
					return Z
				},
				FH: function() {
					return O
				},
				ID: function() {
					return A
				},
				Ko: function() {
					return Te
				},
				Le: function() {
					return ve
				},
				Ly: function() {
					return X
				},
				M3: function() {
					return ke
				},
				N8: function() {
					return we
				},
				NY: function() {
					return oe
				},
				Ns: function() {
					return Q
				},
				Ox: function() {
					return Le
				},
				P4: function() {
					return z
				},
				RO: function() {
					return R
				},
				SX: function() {
					return le
				},
				Tr: function() {
					return me
				},
				U: function() {
					return C
				},
				Ug: function() {
					return L
				},
				V6: function() {
					return je
				},
				WR: function() {
					return ne
				},
				Xg: function() {
					return f
				},
				ZB: function() {
					return Ee
				},
				_y: function() {
					return N
				},
				cU: function() {
					return Re
				},
				cg: function() {
					return se
				},
				d2: function() {
					return w
				},
				jN: function() {
					return x
				},
				jg: function() {
					return te
				},
				kC: function() {
					return K
				},
				kf: function() {
					return Ne
				},
				ko: function() {
					return J
				},
				mK: function() {
					return De
				},
				nA: function() {
					return i
				},
				oY: function() {
					return H
				},
				qM: function() {
					return W
				},
				rq: function() {
					return j
				},
				tS: function() {
					return P
				},
				tU: function() {
					return k
				},
				vB: function() {
					return xe
				},
				vM: function() {
					return $
				},
				wH: function() {
					return B
				},
				wn: function() {
					return he
				},
				xU: function() {
					return _
				},
				xw: function() {
					return ie
				},
				z5: function() {
					return T
				},
				zO: function() {
					return Me
				},
				zW: function() {
					return Be
				},
				zh: function() {
					return D
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				c = n("../../../../node_modules/lodash/get.js"),
				u = n.n(c),
				d = n("../../../../node_modules/moment/moment.js"),
				a = n.n(d),
				p = n("../react/common/constants/billing/index.ts");

			function m(S) {
				for (var F = 1; F < arguments.length; F++) {
					var ee = arguments[F] != null ? Object(arguments[F]) : {},
						ue = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(ee).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(ee, fe).enumerable
					})), ue.forEach(function(fe) {
						y(S, fe, ee[fe])
					})
				}
				return S
			}

			function y(S, F, ee) {
				return F = t(F), F in S ? Object.defineProperty(S, F, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[F] = ee, S
			}

			function t(S) {
				var F = r(S, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function r(S, F) {
				if (typeof S != "object" || S === null) return S;
				var ee = S[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ue = ee.call(S, F || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(S)
			}
			const s = (0, o.P1)("zone", S => S.zone),
				l = S => {
					var F;
					return (F = S.zoneVersioning) === null || F === void 0 ? void 0 : F.zoneVersionSelector
				},
				i = (0, e.P1)(s, l, (S, F) => {
					var ee, ue, fe;
					let _e;
					if (Array.isArray(S) && S.length === 1 ? _e = S[0] : S && !Array.isArray(S) && (_e = S), !_e) return;
					const Ce = !!(F == null ? void 0 : F.enabled);
					return m({}, _e, _e.name && {
						name: Ce ? F.rootZoneName : _e.name
					}, {
						versioning: {
							enabled: Ce,
							isRoot: !((ee = _e.name) === null || ee === void 0 ? void 0 : ee.endsWith(".config.cfdata.org")),
							version: Ce ? F.selectedVersion : 0,
							rootZoneId: Ce ? F.rootZoneId : (ue = (fe = _e) === null || fe === void 0 ? void 0 : fe.id) !== null && ue !== void 0 ? ue : ""
						}
					})
				}),
				f = S => S.zone,
				E = (0, e.P1)(i, f, (S, F) => ({
					data: S,
					meta: F
				})),
				h = S => {
					var F, ee;
					return (F = (ee = i(S)) === null || ee === void 0 ? void 0 : ee.id) !== null && F !== void 0 ? F : ""
				},
				C = S => S.zones,
				O = S => S.zonesRoot,
				B = S => S.zonesAccount,
				L = (0, o.P1)("zones", C),
				P = (0, o.P1)("zonesRoot", O),
				V = (0, o.P1)("zonesAccount", B);

			function K(S) {
				const F = i(S);
				return F ? F.created_on : null
			}

			function Z(S, F, ee) {
				const ue = K(S);
				if (!ue) return;
				const fe = a().duration(F, ee),
					_e = new Date(ue),
					Ce = new Date(new Date().getTime() - fe.asMilliseconds());
				return _e.getTime() > Ce.getTime()
			}

			function z(S) {
				const F = i(S);
				return F ? F.status : null
			}

			function H(S) {
				const F = i(S);
				return F ? F.type : null
			}

			function x(S) {
				return S.plan_pending ? S.plan_pending : S.plan
			}

			function $(S) {
				const F = i(S);
				if (!F) return;
				const ee = x(F);
				return ee && ee.legacy_id
			}

			function k(S, F) {
				const ee = x(S);
				return !!ee && p.Gs.indexOf(ee.legacy_id) >= p.Gs.indexOf(F)
			}

			function _(S) {
				return !!S && S.status === "initializing"
			}

			function w(S) {
				return !!S && S.status === "pending"
			}

			function D(S) {
				return !!S && S.status === "active"
			}

			function Y(S, F) {
				if (!S) return !1;
				const ee = x(S);
				return !!ee && ee.legacy_id === F
			}

			function J(S) {
				return Y(S, "enterprise")
			}
			const R = S => J(i(S));

			function T(S) {
				return Y(S, "business")
			}
			const A = S => T(i(S));

			function N(S) {
				return Y(S, "pro")
			}

			function Q(S) {
				return Y(S, "free")
			}

			function X(S) {
				return !J(S)
			}

			function M(S) {
				return S && S.owner
			}

			function te(S, F) {
				const ee = M(F);
				return !!ee && ee.type === "user" && ee.id === S.id
			}

			function j(S) {
				const F = i(S);
				return !!F && F.type === "partial"
			}

			function oe(S) {
				const F = i(S);
				return !!F && F.type === "secondary"
			}

			function le(S) {
				const F = i(S);
				return F && j(S) && F.host
			}
			const se = S => {
					var F;
					const ee = i(S);
					return !!(ee == null ? void 0 : ee.host) && !!((F = ee.plan) === null || F === void 0 ? void 0 : F.externally_managed)
				},
				pe = S => {
					const F = L(S);
					return F && F.some(J)
				},
				he = (S, F) => {
					const ee = i(S);
					return ee && ee.betas ? ee.betas.includes(F) : !1
				},
				Ee = (S, ...F) => u()(S, ["zoneFlags", "data", ...F]),
				ve = (S, ...F) => u()(S, ["accountFlags", "data", ...F]),
				W = S => S.accountFlags.isRequesting,
				ie = S => S.zoneFlags.isRequesting,
				me = (S, ...F) => u()(S, ["zoneFlagsChanges", "data", ...F]),
				Te = S => S.zoneFlagsChanges.isRequesting,
				Re = S => S.zoneFlags && S.zoneFlags.data,
				Me = S => S.zoneFlags,
				$e = (0, e.P1)(Re, Me, (S, F) => ({
					data: S,
					meta: F
				})),
				we = (0, o.P1)("abuseUrls", S => S.overview.abuseUrls),
				ke = S => {
					const F = i(S);
					return F ? `/${F.account.id}/${F.name}` : null
				},
				je = S => S.zoneMarketingCampaigns,
				Ne = S => S.overview.zoneBlocks.data,
				Be = S => S.overview.zoneBlocks.isRequesting,
				Fe = S => S.overview.zoneBlocks.hasData,
				De = S => {
					var F, ee;
					return (S == null || (F = S.overview.zoneBlocks) === null || F === void 0 || (ee = F.paginationData) === null || ee === void 0 ? void 0 : ee.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				xe = S => S.overview.zoneBlocksReview.isRequesting,
				Le = S => S.overview.zoneHold,
				ne = (0, o.P1)("zoneHold", Le)
		},
		"../react/common/utils/formatDate.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			v.Z = (o, c, u = !1) => (0, e.p6)(o, c, u)
		},
		"../react/common/utils/hasRole.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				n: function() {
					return o
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts");
			const o = (c, u) => {
				const {
					roles: d = []
				} = (0, e.uF)(c) || {};
				return u.some(a => d.includes(a))
			}
		},
		"../react/common/utils/isGuards.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Q$: function() {
					return c
				},
				t: function() {
					return a
				},
				v5: function() {
					return u
				},
				zE: function() {
					return d
				}
			});
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const c = p => p ? ["page", "per_page", "count", "total_count"].every(y => y in p && p[y]) : !1,
				u = (p = "") => e.Dy.includes(p.toLowerCase()),
				d = p => p !== null && typeof p == "object" && "name" in p && "size" in p && "type" in p && typeof p.slice == "function",
				a = p => (0, o.Z)(p)
		},
		"../react/common/validators/index.js": function(G, v, n) {
			"use strict";
			n.d(v, {
				K2: function() {
					return o
				},
				Lb: function() {
					return c
				},
				XI: function() {
					return u
				},
				bK: function() {
					return m
				},
				jk: function() {
					return p
				},
				wb: function() {
					return d
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = y => /^https?:\/\/(.*)/.test(y),
				c = y => e.default.hostname.test(y),
				u = y => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(y),
				d = y => /^[!-~]+$/.test(y),
				a = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				p = y => a.test(y),
				m = y => !!y && !!y.length && /^[ -~]+$/.test(y)
		},
		"../react/initReact.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				o: function() {
					return Ye
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = n("webpack/sharing/consume/default/react-dom/react-dom"),
				d = n("webpack/sharing/consume/default/react-redux/react-redux"),
				a = n("../../../../node_modules/swr/core/dist/index.mjs"),
				p = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				m = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				y = n("../react/shims/focus-visible.js"),
				t = n("../react/app/components/DeepLink/index.ts"),
				r = n("../react/utils/history.ts"),
				s = n("../react/app/providers/storeContainer.js"),
				l = n("../../../../node_modules/prop-types/index.js"),
				i = n.n(l),
				f = n("../react/common/selectors/languagePreferenceSelector.ts"),
				E = n("../react/utils/translator.tsx"),
				h = n("../../../common/intl/intl-react/src/index.ts"),
				C = n("../../../dash/intl/intl-translations/src/index.ts"),
				O = n("../node_modules/query-string/query-string.js"),
				B = n.n(O),
				L = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				P = n("../react/common/actions/userActions.ts"),
				V = n("../react/common/selectors/userSelectors.ts"),
				K = n("../react/utils/i18n.ts"),
				Z = n("../react/utils/bootstrap.ts");

			function z(b) {
				for (var U = 1; U < arguments.length; U++) {
					var q = arguments[U] != null ? Object(arguments[U]) : {},
						re = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(q).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(q, ce).enumerable
					})), re.forEach(function(ce) {
						H(b, ce, q[ce])
					})
				}
				return b
			}

			function H(b, U, q) {
				return U = x(U), U in b ? Object.defineProperty(b, U, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[U] = q, b
			}

			function x(b) {
				var U = $(b, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function $(b, U) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var re = q.call(b, U || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(b)
			}
			let k = B().parse(location.search);
			const _ = b => {
					const U = (0, Z.$8)() ? [(0, C.Fy)(C.if.changes), (0, C.Fy)(C.if.common), (0, C.Fy)(C.if.navigation), (0, C.Fy)(C.if.overview), (0, C.Fy)(C.if.onboarding), (0, C.Fy)(C.if.invite), (0, C.Fy)(C.if.login), (0, C.Fy)(C.if.dns), (0, C.Fy)(C.n4.ssl_tls), (0, C.Fy)(C.if.message_inbox)] : [(0, C.Fy)(C.if.common), (0, C.Fy)(C.if.invite), (0, C.Fy)(C.if.login), (0, C.Fy)(C.if.onboarding)];
					k.lang ? w(b) : L.Z.get(K.th) && D(b, L.Z.get(K.ly));
					const q = async re => (await Promise.all(U.map(ge => ge(re)))).reduce((ge, ye) => z({}, ge, ye), {});
					return o().createElement(h.RD.Provider, {
						value: b.languagePreference
					}, o().createElement(h.bd, {
						translator: E.Vb,
						locale: b.languagePreference
					}, o().createElement(h.lm, {
						loadPhrases: q
					}, b.children)))
				},
				w = async b => {
					let U = k.lang.substring(0, k.lang.length - 2) + k.lang.substring(k.lang.length - 2, k.lang.length).toUpperCase();
					if (!(0, f.v)(U)) {
						console.warn(`${U} is not a supported locale.`), delete k.lang, b.history.replace({
							search: B().stringify(k)
						});
						return
					}
					L.Z.set(K.ly, U), delete k.lang, D(b, U), b.isAuthenticated || b.history.replace({
						search: B().stringify(k)
					})
				}, D = async (b, U) => {
					if (b.isAuthenticated) try {
						await b.setUserCommPreferences({
							"language-locale": U
						}, {
							hideErrorAlert: !0
						}), L.Z.remove(K.th), b.history.replace({
							search: B().stringify(k)
						})
					} catch (q) {
						L.Z.set(K.th, !0), console.error(q)
					} else L.Z.set(K.th, !0)
				}, Y = b => {
					const U = (0, V.PR)(b);
					return {
						isAuthenticated: !!(U && U.id),
						languagePreference: L.Z.get(K.ly) || (0, f.r)(b)
					}
				}, J = {
					setUserCommPreferences: P.V_
				};
			var R = (0, c.withRouter)((0, d.connect)(Y, J)(_));
			_.propTypes = {
				history: i().object,
				languagePreference: i().string.isRequired,
				children: i().node.isRequired,
				isAuthenticated: i().bool,
				setUserCommPreferences: i().func.isRequired
			};
			var T = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				A = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				N = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let Q;
			const X = ({
				selectorPrefix: b = "c_"
			} = {}) => (Q || (Q = (0, N.Z)({
				dev: !1,
				selectorPrefix: b
			})), Q);
			var M = n("../react/common/components/ModalManager.tsx"),
				te = n("../react/app/components/ErrorBoundary.tsx"),
				j = n("../react/common/actions/notificationsActions.ts");
			const le = (n.g.bootstrap || {}).data || {};
			class se extends o().Component {
				componentDidMount() {
					le.messages && this.dispatchNotificationActions(le.messages)
				}
				dispatchNotificationActions(U) {
					U.forEach(q => {
						const {
							type: re,
							message: ce,
							persist: ge
						} = q;
						["success", "info", "warn", "error"].includes(re) && this.props.notifyAdd(re, (0, E.ZP)(ce), {
							persist: !!ge
						})
					})
				}
				render() {
					return null
				}
			}
			var he = (0, c.withRouter)((0, d.connect)(null, {
				notifyAdd: j.IH
			})(se));
			se.propTypes = {
				notifyAdd: i().func.isRequired
			};
			var Ee = n("../react/app/redux/index.ts"),
				ve = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function W() {
				var b;
				const U = (0, Ee.p4)(V.PR),
					q = (U == null || (b = U.email) === null || b === void 0 ? void 0 : b.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					re = (0, ve.Yc)();
				(0, e.useEffect)(() => {
					re({
						userType: q
					})
				}, [q, re])
			}
			var ie = n("../react/common/selectors/entitlementsSelectors.ts"),
				me = n("../react/common/selectors/accountSelectors.ts"),
				Te = n("../react/utils/url.ts");
			const Re = ["accountId", "is_ent"];

			function Me() {
				const b = (0, ve.f7)(),
					U = (0, c.useHistory)(),
					q = (0, Te.uW)(U.location.pathname),
					re = (0, ve.Yc)(),
					ce = (0, ve.O$)(),
					ge = (0, Ee.p4)(ie.u1),
					ye = !ge.isRequesting && !!ge.data,
					He = (0, Ee.p4)(ie.p1),
					Je = (0, Ee.p4)(me.Xu),
					Ke = (0, Ee.p4)(me.uF),
					Xe = !Je.isRequesting && !!Je.data;
				(0, e.useEffect)(() => {
					q && Xe && Ke && ye && q === Ke.account.id ? re({
						accountId: Ke.account.id,
						is_ent: He
					}) : (!q || q in b && b.accountId !== q) && ce(Re)
				}, [Xe, Ke, re, ce, ye, He, q, b])
			}
			var $e = n("../react/common/selectors/zoneSelectors.ts");

			function we() {
				const b = (0, Ee.p4)($e.nA),
					U = (0, ve.Yc)();
				(0, e.useEffect)(() => {
					var q;
					U({
						zone_id: b == null ? void 0 : b.id,
						zone_plan: b == null || (q = b.plan) === null || q === void 0 ? void 0 : q.legacy_id
					})
				}, [b, U])
			}
			const ke = () => (W(), Me(), we(), null);
			var je = n("../react/app/components/Persistence/index.tsx"),
				Ne = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				Be = n("../react/app/components/LoadingSuspense.tsx");
			const Fe = o().lazy(() => Promise.all([n.e(11240), n.e(2480), n.e(10008), n.e(57921), n.e(57518), n.e(94012), n.e(72019), n.e(18188), n.e(5668), n.e(78176), n.e(7484), n.e(39760), n.e(94684), n.e(82465), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var xe = () => o().createElement(Be.Z, null, o().createElement(Fe, null)),
				Le = n("../libs/init/loading.ts");
			const ne = () => (e.useEffect(() => Le.s, []), null);
			var S = n("../../../../node_modules/moment/moment.js"),
				F = n.n(S);
			const ee = b => {
					switch (b) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return b.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return b.toLowerCase();
						default:
							return "en"
					}
				},
				ue = () => {
					const b = (0, Ee.p4)(f.r);
					(0, e.useEffect)(() => {
						const U = ee(b);
						U !== F().locale() && F().locale(U), document.documentElement.lang = b
					}, [b])
				},
				fe = () => {
					(0, e.useEffect)(() => {
						async function b() {
							var U, q;
							let re;
							if (((U = window) === null || U === void 0 || (q = U.build) === null || q === void 0 ? void 0 : q.isPreviewDeploy) && (re = "cookie"), !!re) try {
								const ce = document.head.querySelector("link[rel=icon]");
								ce && (ce.href = (await n("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${re}.ico`)).default)
							} catch {}
						}
						b()
					}, [])
				};
			var _e = n("../react/common/constants/constants.ts");
			const Ce = () => {
					var b;
					const U = (0, c.useLocation)(),
						[q, re] = (0, e.useState)(((b = window) === null || b === void 0 ? void 0 : b.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, e.useEffect)(() => {
						const ce = B().parse(U.search);
						if (ce.pt && L.Z.set(_e.sJ, ce.pt), ce == null ? void 0 : ce.devPanel) {
							var ge, ye;
							(ge = window) === null || ge === void 0 || (ye = ge.localStorage) === null || ye === void 0 || ye.setItem("gates_devtools_ui_gates_controller_enabled", "true"), re(!0)
						}
					}, [U.search]), {
						devPanelEnabled: q
					}
				},
				Se = o().lazy(() => Promise.all([n.e(11240), n.e(2480), n.e(10008), n.e(57921), n.e(57518), n.e(94012), n.e(72019), n.e(18188), n.e(14696), n.e(48902), n.e(78176), n.e(7484), n.e(39760), n.e(94684), n.e(82465), n.e(32209), n.e(91984), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				Ue = o().lazy(() => Promise.all([n.e(83741), n.e(65447), n.e(11240), n.e(57518), n.e(14696), n.e(26337), n.e(94684), n.e(69088), n.e(91984), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var We = ({
					userIsAuthed: b
				}) => {
					ue(), fe();
					const {
						devPanelEnabled: U
					} = Ce();
					return o().createElement(e.Suspense, {
						fallback: o().createElement(ne, null)
					}, o().createElement(c.Switch, null, !b && !0 && o().createElement(c.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, o().createElement(Ue, null)), o().createElement(c.Route, {
						render: () => o().createElement(Ne.ZC, {
							minHeight: "100vh"
						}, o().createElement(Se, null))
					})), U && o().createElement(xe, null))
				},
				Pe = n("../../../../node_modules/yup/es/index.js"),
				Oe = n("../../../common/util/types/src/utils/index.ts");
			const Ae = {
				cfEmail: () => Pe.Z_().email((0, E.ZP)("common.validation.email")).required((0, E.ZP)("common.validation.email"))
			};
			(0, Oe.Yd)(Ae).forEach(b => {
				Pe.kM(Pe.Z_, b, Ae[b])
			});
			const Ge = o().lazy(() => Promise.all([n.e(10008), n.e(94012), n.e(6368), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				Ze = () => {
					const b = (0, Z.$8)(),
						[U, q] = (0, e.useState)(b ? Ge : o().Fragment),
						[re, ce] = (0, e.useState)((0, A.Yc)());
					(0, e.useEffect)(() => {
						(0, A.fF)(() => ce((0, A.Yc)()))
					}, []);
					const ge = ye => {
						ce(ye), (0, A.C8)(ye)
					};
					return (0, e.useEffect)(() => {
						q(b ? Ge : o().Fragment)
					}, [b]), (0, e.useEffect)(() => {
						const ye = () => ge(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", ye), () => {
							window.removeEventListener("storage", ye)
						}
					}, []), o().createElement(e.Suspense, {
						fallback: null
					}, o().createElement(d.Provider, {
						store: (0, s.bh)()
					}, o().createElement(c.Router, {
						history: r.Z
					}, o().createElement(U, null, o().createElement(T.Z, {
						renderer: X()
					}, o().createElement(R, null, o().createElement(te.Z, {
						sentryTag: "Root"
					}, o().createElement(a.J$, {
						value: {
							fetcher: ye => fetch(ye).then(He => He.json())
						}
					}, o().createElement(ke, null), o().createElement(he, null), o().createElement(je.Z_, {
						onDarkModeChangeCb: ge
					}, o().createElement(t.ZP, null, o().createElement(We, {
						userIsAuthed: b
					}))), o().createElement(M.ZP, null), o().createElement(p.F0, null)))))))))
				},
				Ye = () => {
					(0, u.render)(o().createElement(Ze, null), document.getElementById("react-app"))
				}
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Jz: function() {
					return y
				},
				OK: function() {
					return d
				},
				_Y: function() {
					return p
				},
				fD: function() {
					return r
				},
				h_: function() {
					return m
				},
				w6: function() {
					return s
				},
				yc: function() {
					return t
				}
			});

			function e(i) {
				for (var f = 1; f < arguments.length; f++) {
					var E = arguments[f] != null ? Object(arguments[f]) : {},
						h = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(E).filter(function(C) {
						return Object.getOwnPropertyDescriptor(E, C).enumerable
					})), h.forEach(function(C) {
						o(i, C, E[C])
					})
				}
				return i
			}

			function o(i, f, E) {
				return f = c(f), f in i ? Object.defineProperty(i, f, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[f] = E, i
			}

			function c(i) {
				var f = u(i, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function u(i, f) {
				if (typeof i != "object" || i === null) return i;
				var E = i[Symbol.toPrimitive];
				if (E !== void 0) {
					var h = E.call(i, f || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(i)
			}
			let d = function(i) {
					return i.Sending = "sending", i.Success = "success", i.Failed = "failed", i.Latent = "latent", i
				}({}),
				a = function(i) {
					return i[i.Success = 200] = "Success", i[i.BadRequest = 400] = "BadRequest", i
				}({});
			const p = {
					status: d.Latent,
					statusCode: void 0
				},
				m = {
					status: d.Sending
				},
				y = {
					status: d.Success,
					statusCode: a.Success
				},
				t = {
					status: d.Failed,
					statusCode: a.BadRequest
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
					}, p),
					installsList: e({
						value: []
					}, p),
					categoriesList: e({
						value: []
					}, p),
					recommendedAppsList: e({
						value: []
					}, p),
					metadata: e({
						value: null
					}, p),
					app: e({
						value: null
					}, p),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, p)
				},
				l = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Ux: function() {
					return r
				},
				cz: function() {
					return l
				},
				im: function() {
					return p
				},
				pG: function() {
					return s
				},
				t$: function() {
					return i
				}
			});
			var e = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(E) {
				for (var h = 1; h < arguments.length; h++) {
					var C = arguments[h] != null ? Object(arguments[h]) : {},
						O = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(C).filter(function(B) {
						return Object.getOwnPropertyDescriptor(C, B).enumerable
					})), O.forEach(function(B) {
						c(E, B, C[B])
					})
				}
				return E
			}

			function c(E, h, C) {
				return h = u(h), h in E ? Object.defineProperty(E, h, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[h] = C, E
			}

			function u(E) {
				var h = d(E, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function d(E, h) {
				if (typeof E != "object" || E === null) return E;
				var C = E[Symbol.toPrimitive];
				if (C !== void 0) {
					var O = C.call(E, h || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(E)
			}
			const a = E => E.test(window.location.hostname),
				p = () => a(e.j9),
				m = () => a(MARKETPLACE_LOCAL_URL_REGEXP),
				y = (E, h) => {
					const C = random(0, 1) ? -1 : 1;
					return E.points === h.points || E.points >= APP_POINTS_THRESHOLD && h.points >= APP_POINTS_THRESHOLD ? C : E.points < 0 || h.points < 0 || E.points >= APP_POINTS_THRESHOLD || h.points >= APP_POINTS_THRESHOLD ? h.points - E.points : C
				},
				t = (E, h, C) => {
					const O = get(h, C),
						B = get(E, C);
					return O && !isEqual(O, B)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (E, h) => h.map(C => E.find(O => O.id === C)),
						addAppVersionInfo: (E, h) => o({}, h, {
							currentVersion: h.versions.find(C => C.tag === E.versionTag),
							latestVersion: h.versions.find(C => C.tag === h.infoVersion)
						}),
						addCurrentSiteInstall: (E, h) => o({}, h, {
							currentSiteInstall: E.find(C => C.appId === h.id)
						})
					}
				},
				s = (E, h, C) => o({}, E, h, C ? {
					value: C
				} : {}),
				l = E => E.map(h => h.status),
				i = E => E.apps ? E.apps : E,
				f = E => {
					let h = ["by-cloudflare"];
					return E.filter(C => !h.includes(C.id) && C.visible).sort((C, O) => C.points < O.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(G, v, n) {
			"use strict";
			n.r(v), n.d(v, {
				categorySlugTranslationKey: function() {
					return d
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return u
				},
				translations: function() {
					return c
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: c,
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

			function d(a) {
				const p = a.replace(/-/g, "_");
				return Object.keys(o).includes(p) ? p : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				L: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/url-join/lib/url-join.js"),
				o = n.n(e),
				c = n("../../../../node_modules/lodash-es/defaults.js"),
				u = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function d(l) {
				for (var i = 1; i < arguments.length; i++) {
					var f = arguments[i] != null ? Object(arguments[i]) : {},
						E = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(f).filter(function(h) {
						return Object.getOwnPropertyDescriptor(f, h).enumerable
					})), E.forEach(function(h) {
						m(l, h, f[h])
					})
				}
				return l
			}

			function a(l, i) {
				if (l == null) return {};
				var f = p(l, i),
					E, h;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(l);
					for (h = 0; h < C.length; h++) E = C[h], !(i.indexOf(E) >= 0) && (!Object.prototype.propertyIsEnumerable.call(l, E) || (f[E] = l[E]))
				}
				return f
			}

			function p(l, i) {
				if (l == null) return {};
				var f = {},
					E = Object.keys(l),
					h, C;
				for (C = 0; C < E.length; C++) h = E[C], !(i.indexOf(h) >= 0) && (f[h] = l[h]);
				return f
			}

			function m(l, i, f) {
				return i = y(i), i in l ? Object.defineProperty(l, i, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[i] = f, l
			}

			function y(l) {
				var i = t(l, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function t(l, i) {
				if (typeof l != "object" || l === null) return l;
				var f = l[Symbol.toPrimitive];
				if (f !== void 0) {
					var E = f.call(l, i || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(l)
			}
			class r {
				constructor(i) {
					m(this, "token", void 0), m(this, "options", void 0), m(this, "setAuthHeader", f => {
						this.token = f
					}), this.token = "", this.options = (0, c.Z)(i, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(i = "GET", f, E = {}) {
					const {
						body: h
					} = E, C = a(E, ["body"]);
					return fetch(o()(this.options.baseUrl, f), d({
						method: i
					}, C, h ? {
						body: JSON.stringify(h)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(d({
							Accept: "application/json, text/plain, */*"
						}, E.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(i, f = {}) {
					const E = await this.request("GET", i, f);
					return this.parseJSONResponse(E)
				}
				async postJSON(i, f = {}) {
					const E = await this.request("POST", i, d({}, f, {
						headers: d({}, f.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(E)
				}
				parseJSONResponse(i) {
					return i.json()
				}
			}
			m(r, "defaults", {
				baseUrl: (0, u.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const s = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				JX: function() {
					return y
				},
				Jb: function() {
					return r
				},
				RX: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/lodash-es/upperFirst.js"),
				o = n("../../../../node_modules/lodash-es/isEmpty.js"),
				c = n("../node_modules/query-string/query-string.js"),
				u = n.n(c),
				d = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				a = n("../react/pages/apps/marketplace/requests/Requester.ts"),
				p = n("../react/pages/apps/marketplace/libraries/resource.ts");

			function* m(i, f, E, h) {
				const C = (0, e.Z)(f),
					[O, B, L] = [`get${C}Sending`, `get${C}Success`, `get${C}Failed`];
				try {
					yield(0, d.gz)(i[O]());
					const P = yield(0, d.RE)(s, E);
					let V = P;
					if (V.error) {
						yield(0, d.gz)(i[L]());
						return
					}
					return h && (V = yield h(P)), yield(0, d.gz)(i[B](V)), V
				} catch {
					yield(0, d.gz)(i[L]())
				}
			}

			function* y(i, f, E, h) {
				const C = (0, e.Z)(f),
					O = `get${C}Sending`,
					B = `get${C}Success`,
					L = `get${C}Failed`;
				try {
					yield(0, d.gz)(i[O]());
					const P = yield(0, d.RE)(l, {
						url: E,
						data: h
					});
					return yield(0, d.gz)(i[B](P)), P
				} catch {
					yield(0, d.gz)(i[L]())
				}
			}
			const t = i => (0, o.Z)(i) ? "" : `?${c.stringify(i)}`,
				r = {
					app: new p.c({
						name: "app",
						url: (i, f) => `apps/${i}${t(f)}`
					}),
					apps: new p.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new p.c({
							name: "installs",
							url: i => `sites/${i}/installs`
						}),
						delete: new p.c({
							name: "installs",
							url: i => `installs/${i}`
						})
					},
					categories: new p.c({
						name: "categories",
						url: (i = {}) => "categories" + t(i)
					}),
					metadata: {
						get: new p.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						}),
						post: new p.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						})
					},
					ratings: {
						default: new p.c({
							name: "ratings",
							url: (i = {}) => "ratings" + t(i)
						}),
						delete: new p.c({
							name: "ratings",
							url: i => `ratings/${i}`
						})
					},
					recommendedApps: new p.c({
						name: "recommendedApps",
						url: (i = {}) => "apps/recommend" + t(i)
					}),
					developedApps: new p.c({
						name: "developedApps",
						url: i => `user/${i}/apps`
					})
				},
				s = async i => a.L.fetchJSON(i), l = async i => {
					const {
						url: f,
						data: E
					} = i;
					return a.L.postJSON(f, {
						body: E
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Nw: function() {
					return m
				},
				U4: function() {
					return p
				},
				XO: function() {
					return a
				},
				ZP: function() {
					return y
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function o(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(s).filter(function(i) {
						return Object.getOwnPropertyDescriptor(s, i).enumerable
					})), l.forEach(function(i) {
						c(t, i, s[i])
					})
				}
				return t
			}

			function c(t, r, s) {
				return r = u(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function u(t) {
				var r = d(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function d(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var l = s.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let a = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				p = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const m = {
				resetState: () => ({
					type: p.ResetState
				}),
				initSaga: t => ({
					type: p.InitSaga,
					zoneId: t
				}),
				setZone: t => ({
					type: p.SetZone,
					zone: t
				}),
				setToken: t => ({
					type: p.SetToken,
					token: t
				}),
				clearToken: () => ({
					type: p.ClearToken
				}),
				setTokenValid: t => ({
					type: p.SetTokenValid,
					isTokenValid: t
				}),
				getCurrentUserSaga: () => ({
					type: p.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: p.CurrentUserSending
				}),
				getCurrentUserSuccess: t => ({
					type: p.CurrentUserSuccess,
					user: t
				}),
				getCurrentUserFailed: () => ({
					type: p.CurrentUserFailed
				})
			};

			function y(t = e.fD, r) {
				switch (r.type) {
					case p.ResetState:
						return o({}, e.fD);
					case p.CurrentUserSending:
						return o({}, t);
					case p.CurrentUserSuccess:
						const {
							user: s
						} = r;
						return o({}, t, {
							user: s
						});
					case p.CurrentUserFailed:
						return o({}, t);
					case p.SetZone:
						const {
							zone: l
						} = r;
						return o({}, t, {
							zone: l
						});
					case p.SetToken:
						const {
							token: i
						} = r;
						return o({}, t, {
							token: i
						});
					case p.ClearToken:
						return o({}, t, {
							token: null
						});
					case p.SetTokenValid:
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
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Nw: function() {
					return y
				},
				U4: function() {
					return m
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return p
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(r) {
				for (var s = 1; s < arguments.length; s++) {
					var l = arguments[s] != null ? Object(arguments[s]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), i.forEach(function(f) {
						u(r, f, l[f])
					})
				}
				return r
			}

			function u(r, s, l) {
				return s = d(s), s in r ? Object.defineProperty(r, s, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = l, r
			}

			function d(r) {
				var s = a(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function a(r, s) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, s || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			let p = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				m = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const y = {
				resetState: () => ({
					type: m.ResetState
				}),
				zoneChangedSaga: () => ({
					type: m.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, s) => ({
					type: m.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: s
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: m.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, s) => ({
					type: m.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: s
				}),
				getDevelopedAppsSending: () => ({
					type: m.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: r => ({
					type: m.GetDevelopedAppsSuccess,
					developedApps: r
				}),
				getDevelopedAppsFailed: () => ({
					type: m.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (r, s, l) => ({
					type: m.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: s,
					version: l
				}),
				setUpdatableInstalls: r => ({
					type: m.SetUpdatableInstalls,
					updatableInstallsList: r
				}),
				getAppSaga: r => ({
					type: m.GetAppSaga,
					appIdentifier: r
				}),
				getAppSending: () => ({
					type: m.GetAppSending
				}),
				getAppSuccess: r => ({
					type: m.GetAppSuccess,
					app: r
				}),
				getAppFailed: () => ({
					type: m.GetAppFailed
				}),
				clearApp: () => ({
					type: m.ClearApp
				}),
				getAppsSaga: () => ({
					type: m.GetAppsSaga
				}),
				getAppsSending: () => ({
					type: m.GetAppsSending
				}),
				getAppsSuccess: r => ({
					type: m.GetAppsSuccess,
					appsList: r
				}),
				getAppsFailed: () => ({
					type: m.GetAppsFailed
				}),
				getInstallsSaga: r => ({
					type: m.GetInstallsSaga,
					zoneId: r
				}),
				getInstallsSending: () => ({
					type: m.GetInstallsSending
				}),
				getInstallsSuccess: r => ({
					type: m.GetInstallsSuccess,
					installsList: r
				}),
				getInstallsFailed: () => ({
					type: m.GetInstallsFailed
				}),
				getCategoriesSaga: r => ({
					type: m.GetCategoriesSaga,
					queryParams: r
				}),
				getCategoriesSending: () => ({
					type: m.GetCategoriesSending
				}),
				getCategoriesSuccess: r => ({
					type: m.GetCategoriesSuccess,
					categoriesList: r
				}),
				getCategoriesFailed: () => ({
					type: m.GetCategoriesFailed
				}),
				getMetadataSaga: r => ({
					type: m.GetMetadataSaga,
					zoneId: r
				}),
				getMetadataSending: () => ({
					type: m.GetMetadataSending
				}),
				getMetadataSuccess: r => ({
					type: m.GetMetadataSuccess,
					metadata: r
				}),
				getMetadataFailed: () => ({
					type: m.GetMetadataFailed
				}),
				postMetadataSaga: (r, s) => ({
					type: m.PostMetadataSaga,
					zoneId: r,
					data: s
				}),
				postMetadataSending: () => ({
					type: m.PostMetadataSending
				}),
				postMetadataSuccess: r => ({
					type: m.PostMetadataSuccess,
					metadata: r
				}),
				postMetadataFailed: () => ({
					type: m.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (r, s, l) => ({
					type: m.GetRecommendedAppsSaga,
					appsList: r,
					installsList: s,
					metadata: l
				}),
				getRecommendedAppsSending: () => ({
					type: m.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: r => ({
					type: m.GetRecommendedAppsSuccess,
					recommendedAppsList: r
				}),
				getRecommendedAppsFailed: () => ({
					type: m.GetRecommendedAppsFailed
				})
			};

			function t(r = e.w6, s) {
				switch (s.type) {
					case m.ResetState:
						return c({}, e.w6);
					case m.ZoneChangedSaga:
						return c({}, r, {
							installsList: c({}, e.w6.installsList),
							recommendedAppsList: c({}, e.w6.recommendedAppsList),
							metadata: c({}, e.w6.metadata)
						});
					case m.GetAppsSending:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.h_))
						});
					case m.GetAppsSuccess:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.Jz, s.appsList))
						});
					case m.GetAppsFailed:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.yc))
						});
					case m.GetInstallsSending:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.h_))
						});
					case m.GetInstallsSuccess:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.Jz, s.installsList))
						});
					case m.GetInstallsFailed:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.yc))
						});
					case m.GetCategoriesSending:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case m.GetCategoriesSuccess:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.Jz, s.categoriesList))
						});
					case m.GetCategoriesFailed:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case m.GetMetadataSending:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.h_))
						});
					case m.GetMetadataSuccess:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.Jz, s.metadata))
						});
					case m.GetMetadataFailed:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.yc))
						});
					case m.PostMetadataSending:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.h_))
						});
					case m.PostMetadataSuccess:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.Jz, s.metadata))
						});
					case m.PostMetadataFailed:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.yc))
						});
					case m.GetRecommendedAppsSending:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case m.GetRecommendedAppsSuccess:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.Jz, s.recommendedAppsList))
						});
					case m.GetRecommendedAppsFailed:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case m.GetAppSending:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.h_))
						});
					case m.GetAppSuccess:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.Jz, s.app))
						});
					case m.GetAppFailed:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.yc))
						});
					case m.ClearApp:
						return c({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case m.SetUpdatableInstalls:
						return c({}, r, {
							updatableInstallsList: s.updatableInstallsList
						});
					case m.GetDevelopedAppsSending:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case m.GetDevelopedAppsSuccess:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.Jz, s.developedApps))
						});
					case m.GetDevelopedAppsFailed:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(G, v, n) {
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
		"../react/pages/dns/dns-records/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				U: function() {
					return e
				},
				X: function() {
					return o
				}
			});
			let e = function(c) {
				return c.DNS_RECORD_CREATE = "create DNS records", c.DNS_RECORD_UPDATE = "update DNS records", c.DNS_RECORD_DELETE = "delete DNS records", c.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", c
			}({});
			const o = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				BB: function() {
					return o
				},
				Pm: function() {
					return c
				},
				UZ: function() {
					return e
				}
			});
			let e = function(d) {
				return d.ROOT = "root", d.DSTADDRS_CARD = "dstaddrs_card", d.RULES_CARD = "rules_card", d.CATCHALL_CARD = "catchall_card", d.SETTINGS_PAGE = "settings_page", d.WORKERS_PAGE = "workers_page", d
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
			let c = function(d) {
				return d[d.Verified = 0] = "Verified", d[d.Pending = 1] = "Pending", d[d.Missing = 2] = "Missing", d[d.WorkerNotFound = 3] = "WorkerNotFound", d[d.Unknown = 4] = "Unknown", d[d.Loading = 5] = "Loading", d
			}({});
			const u = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/analytics/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				AU: function() {
					return f
				},
				Bc: function() {
					return i
				},
				Bd: function() {
					return k
				},
				Bt: function() {
					return s
				},
				Ji: function() {
					return z
				},
				LO: function() {
					return l
				},
				Pk: function() {
					return V
				},
				WB: function() {
					return $
				},
				Wd: function() {
					return x
				},
				Zj: function() {
					return O
				},
				e_: function() {
					return h
				},
				hk: function() {
					return Z
				},
				jY: function() {
					return P
				},
				kF: function() {
					return H
				},
				kg: function() {
					return K
				},
				oD: function() {
					return E
				},
				pP: function() {
					return L
				},
				q4: function() {
					return B
				},
				qC: function() {
					return C
				}
			});
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../../../common/component/component-filter-bar/src/index.js"),
				c = n("../../../../node_modules/@cloudflare/data-locations/es/index.js"),
				u = n("../../../../node_modules/@cloudflare/cf.util.patterns/index.js"),
				d = n.n(u),
				a = n("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				p = n("../react/common/constants/analytics/contentScanTypes.ts");

			function m(_) {
				for (var w = 1; w < arguments.length; w++) {
					var D = arguments[w] != null ? Object(arguments[w]) : {},
						Y = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(D).filter(function(J) {
						return Object.getOwnPropertyDescriptor(D, J).enumerable
					})), Y.forEach(function(J) {
						y(_, J, D[J])
					})
				}
				return _
			}

			function y(_, w, D) {
				return w = t(w), w in _ ? Object.defineProperty(_, w, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[w] = D, _
			}

			function t(_) {
				var w = r(_, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function r(_, w) {
				if (typeof _ != "object" || _ === null) return _;
				var D = _[Symbol.toPrimitive];
				if (D !== void 0) {
					var Y = D.call(_, w || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(_)
			}
			const s = {
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
				l = {
					block: e.Rl.colors.categorical[0],
					allow: e.Rl.colors.categorical[1],
					challenge: e.Rl.colors.categorical[2],
					jschallenge: e.Rl.colors.categorical[3],
					log: e.Rl.colors.categorical[4],
					unknown: e.Rl.colors.categorical[5],
					connection_close: e.Rl.colors.categorical[6],
					bypass: e.Rl.colors.categorical[7],
					managed_challenge: e.Rl.colors.categorical[8],
					rewrite: e.Rl.colors.categorical[9],
					skip: e.Rl.colors.categorical[10],
					force_connection_close: e.Rl.colors.categorical[11]
				},
				i = {
					"Behavioral Analysis": "security_analytics.labels.bot_source.behavioral_analysis",
					Heuristics: "security_analytics.labels.bot_source.heuristics",
					"Machine Learning": "security_analytics.labels.bot_source.machine_learning",
					"Not Computed": "security_analytics.labels.bot_source.not_computed",
					"JS Fingerprinting": "security_analytics.labels.bot_source.js_fingerprinting",
					"Verified Bot": "security_analytics.labels.bot_source.verified_bot",
					"Cloudflare Service": "security_analytics.labels.bot_source.cloudflare_service"
				},
				f = {
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
				E = {
					[f.ASN]: e.Rl.colors.categorical[2],
					[f.COUNTRY]: e.Rl.colors.categorical[1],
					[f.IP]: e.Rl.colors.categorical[15],
					[f.IP_RANGE]: e.Rl.colors.categorical[15],
					[f.BOT_MANAGEMENT]: e.Rl.colors.categorical[14],
					[f.SECURITY_LEVEL]: e.Rl.colors.categorical[13],
					[f.ZONE_LOCKDOWN]: e.Rl.colors.categorical[12],
					[f.WAF]: e.Rl.colors.categorical[11],
					[f.FIREWALL_MANAGED]: e.Rl.colors.categorical[11],
					[f.UA_BLOCK]: e.Rl.colors.categorical[10],
					[f.RATE_LIMIT]: e.Rl.colors.categorical[9],
					[f.FIREWALL_RULES]: e.Rl.colors.categorical[8],
					[f.BIC]: e.Rl.colors.categorical[7],
					[f.HOT]: e.Rl.colors.categorical[6],
					[f.DLP]: e.Rl.colors.categorical[5],
					[f.L7DOS]: e.Rl.colors.categorical[4],
					[f.VALIDATION]: e.Rl.colors.categorical[3],
					[f.BOT_FIGHT_MODE]: e.Rl.colors.categorical[2],
					[f.API_SHIELD]: e.Rl.colors.categorical[1],
					[f.API_SHIELD_SCHEMA_VALIDATION]: e.Rl.colors.categorical[1],
					[f.API_SHIELD_TOKEN_VALIDATION]: e.Rl.colors.categorical[1],
					[f.FIREWALL_CUSTOM]: e.Rl.colors.categorical[0],
					[f.UNKNOWN]: e.Rl.colors.gray[5]
				},
				h = {
					[f.ASN]: "firewall.analytics.services.labels.asn",
					[f.COUNTRY]: "firewall.analytics.services.labels.country",
					[f.IP]: "firewall.analytics.services.labels.ip",
					[f.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[f.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[f.VALIDATION]: "firewall.analytics.services.labels.validation",
					[f.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[f.WAF]: "firewall.analytics.services.labels.waf",
					[f.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[f.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[f.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[f.BIC]: "firewall.analytics.services.labels.bic",
					[f.HOT]: "firewall.analytics.services.labels.hot",
					[f.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[f.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[f.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[f.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[f.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[f.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[f.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[f.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[f.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[f.DLP]: "firewall.analytics.services.labels.dlp",
					[f.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				},
				C = {
					action: {
						label: "firewall.analytics.filters.labels.action",
						type: o.kE.select,
						options: Object.keys(s).filter(_ => !["challenge_solved", "challenge_failed", "challenge_bypassed", "jschallenge_solved", "jschallenge_failed", "jschallenge_bypassed", "unknown"].includes(_)),
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn]
					},
					botScore: {
						label: "firewall.analytics.filters.labels.botScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: _ => parseInt(_, 10),
						validationMessage: "firewall.analytics.filters.errors.botScore",
						validate: _ => {
							const w = parseInt(_, 10);
							return w >= 0 && w <= 100
						},
						urlParam: "botScore"
					},
					botScoreSrcName: {
						label: "firewall.analytics.filters.labels.botScoreSrcName",
						type: o.kE.select,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						options: Object.keys(i),
						urlParam: "botScoreSrcName"
					},
					clientAsn: {
						label: "firewall.analytics.filters.labels.clientAsn",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: 13335,
						validationMessage: "firewall.analytics.filters.errors.asn",
						validate: _ => !isNaN(parseFloat(_)) && isFinite(parseFloat(_)),
						urlParam: "asn"
					},
					clientCountryName: {
						label: "firewall.analytics.filters.labels.clientCountryName",
						type: o.kE.select,
						options: Object.keys(c.zY),
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						urlParam: "country"
					},
					clientIP: {
						label: "firewall.analytics.filters.labels.clientIP",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: "192.0.2.0",
						validationMessage: "firewall.analytics.filters.errors.ip",
						validate: _ => !!_ && !!_.length && (u.ipv4.test(_) || u.ipv6.test(_)),
						urlParam: "ip"
					},
					clientRequestHTTPHost: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPHost",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						example: "example.com",
						urlParam: "host"
					},
					clientRequestHTTPMethodName: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPMethodName",
						type: o.kE.select,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						options: ["GET", "POST", "PURGE", "PUT", "HEAD", "OPTIONS", "DELETE", "PATCH", "CONNECT", "TRACE"],
						urlParam: "http-method"
					},
					clientRequestHTTPProtocol: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPProtocol",
						type: o.kE.select,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						options: ["HTTP/1.0", "HTTP/1.1", "HTTP/1.2", "HTTP/2", "HTTP/3", "SPDY/3.1"],
						urlParam: "http-version"
					},
					contentScanObjResults: {
						label: "firewall.analytics.filters.labels.contentScanObjResults",
						type: o.kE.select,
						operators: [a.Gn.has, a.Gn.notHas, a.Gn.in, a.Gn.notIn],
						options: ["clean", "suspicious", "infected", "not scanned"],
						example: "clean",
						urlParam: "scanned-content-results"
					},
					contentScanObjTypes: {
						label: "firewall.analytics.filters.labels.contentScanObjTypes",
						type: o.kE.select,
						creatable: !0,
						options: Object.keys(p.L),
						operators: [a.Gn.has, a.Gn.notHas, a.Gn.in, a.Gn.notIn],
						example: "application/json",
						urlParam: "scanned-content-types"
					},
					contentScanObjSizes: {
						label: "firewall.analytics.filters.labels.contentScanObjSizes",
						type: o.kE.string,
						parse: _ => parseInt(_, 10),
						operators: [a.Gn.has, a.Gn.notHas, a.Gn.in, a.Gn.notIn],
						example: "1000",
						urlParam: "scanned-content-sizes"
					},
					ja3Hash: {
						label: "firewall.analytics.filters.labels.ja3Hash",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: "df669e7ea913f1ac0c0cce9a201a2ec1",
						urlParam: "ja3-hash"
					},
					ja4: {
						label: "firewall.analytics.filters.labels.ja4",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: "t13d1516h2_8daaf6152771_b186095e22b6",
						urlParam: "ja4"
					},
					apiGatewayMatchedEndpoint: {
						label: "firewall.analytics.filters.labels.apiGatewayMatchedEndpoint",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						urlParam: "api-matched-endpoint",
						example: "/path/{var1}"
					},
					clientRequestPath: {
						label: "firewall.analytics.filters.labels.clientRequestPath",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						example: "/content",
						urlParam: "path"
					},
					clientRequestQuery: {
						label: "firewall.analytics.filters.labels.clientRequestQuery",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						example: "?example=1",
						urlParam: "query"
					},
					source: {
						label: "firewall.analytics.filters.labels.source",
						type: o.kE.select,
						options: Object.keys(h).filter(_ => _ !== "unknown"),
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						urlParam: "service"
					},
					rayName: {
						label: "firewall.analytics.filters.labels.rayName",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals],
						example: "1a79a4d60de6718e",
						urlParam: "ray-id",
						parse: _ => _.replace(/-[A-Z]{3}$/, "")
					},
					ruleId: {
						label: "firewall.analytics.filters.labels.ruleId",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: 100001,
						urlParam: "rule-id"
					},
					rulesetId: {
						label: "firewall.analytics.filters.labels.rulesetId",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						example: "",
						urlParam: "ruleset-id"
					},
					userAgent: {
						label: "firewall.analytics.filters.labels.userAgent",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.contains, a.Gn.notContains, a.Gn.startsWith, a.Gn.notStartsWith, a.Gn.endsWith, a.Gn.notEndsWith, a.Gn.in, a.Gn.notIn],
						example: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)...",
						urlParam: "user-agent"
					},
					wafMlAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlAttackScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: _ => parseInt(_, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: _ => {
							const w = parseInt(_, 10);
							return w >= 0 && w <= 100
						},
						urlParam: "waf-ml-score"
					},
					wafRceAttackScore: {
						label: "firewall.analytics.filters.labels.wafRceAttackScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: _ => parseInt(_, 10),
						validationMessage: "firewall.analytics.filters.errors.wafRceAttackScore",
						validate: _ => {
							const w = parseInt(_, 10);
							return w >= 0 && w <= 100
						},
						urlParam: "waf-rce-score"
					},
					wafMlSqliAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlSqliAttackScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: _ => parseInt(_, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: _ => {
							const w = parseInt(_, 10);
							return w >= 0 && w <= 100
						},
						urlParam: "waf-ml-sqli-score"
					},
					wafMlXssAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlXssAttackScore",
						type: o.kE.string,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.greaterThan, a.Gn.greaterThanOrEqual, a.Gn.lessThan, a.Gn.lessThanOrEqual],
						example: 20,
						parse: _ => parseInt(_, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: _ => {
							const w = parseInt(_, 10);
							return w >= 0 && w <= 100
						},
						urlParam: "waf-ml-xss-score"
					},
					wafAttackScoreClass: {
						label: "firewall.analytics.filters.labels.wafAttackScoreClass",
						type: o.kE.select,
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						options: ["attack", "likely_attack", "likely_clean", "clean", "not_scored"],
						example: "Attack",
						urlParam: "waf-ml-score-class"
					},
					zoneVersion: {
						label: "firewall.analytics.filters.labels.zoneVersion",
						type: o.kE.string,
						example: 3,
						operators: [a.Gn.equals, a.Gn.notEquals],
						parse: _ => parseInt(_, 10),
						validationMessage: "firewall.analytics.filters.errors.zoneVersion",
						validate: _ => parseInt(_) >= 0,
						urlParam: "zone-version"
					},
					zoneTag: {
						label: "firewall.analytics.filters.labels.zoneTag",
						type: o.kE.string,
						example: "c40df159b74f0e1c0deedf29008ffc04",
						operators: [a.Gn.equals, a.Gn.notEquals, a.Gn.in, a.Gn.notIn],
						urlParam: "zone-id"
					}
				},
				O = (_, w, D, Y, J, R, T) => {
					const A = m({}, C);
					return _ || (delete A.botScore, delete A.botScoreSrcName), w || (delete A.ja3Hash, delete A.ja4, delete A.ja4Signals), D || (delete A.wafMlAttackScore, delete A.wafMlSqliAttackScore, delete A.wafMlXssAttackScore, delete A.wafRceAttackScore), R || delete A.wafAttackScoreClass, Y || delete A.zoneVersion, J || delete A.apiGatewayMatchedEndpoint, T || delete A.zoneTag, A
				},
				B = {
					ADD_FILTER: "Add filter",
					EDIT_FILTER: "Edit filter",
					REMOVE_FILTER: "Remove filter",
					CHANGE_TIME: "Change time window",
					FEED_PAGE_FORWARD: "Activity feed next page",
					FEED_PAGE_BACKWARD: "Activity feed previous page",
					FEED_EXPAND_EVENT: "Activity feed expand event",
					FEED_CLOSE_EVENT: "Activity feed close event",
					FEED_EXPAND_MATCHES: "Activity feed expand matches",
					OPEN_DOWNLOAD_MODAL: "Activity feed open download modal",
					CANCEL_DOWNLOAD_MODAL: "Activity feed cancel download modal",
					DOWNLOAD_FROM_DOWNLOAD_MODAL: "Activity feed download from modal",
					DOWNLOAD_FEED: "Activity feed download"
				},
				L = {
					TIMESERIES: "Timeseries Chart",
					DISTRIBUTION: "Source Distribution Chart",
					TOP_N: "Top N",
					FILTER_BAR: "Filter Bar"
				},
				P = "firewall-analytics",
				V = "encrypted_matched_data",
				K = {
					botScore: "cf.bot_management.score",
					clientAsn: "ip.geoip.asnum",
					clientCountryName: "ip.geoip.country",
					clientIP: "ip.src",
					clientRequestHTTPHost: "http.host",
					clientRequestHTTPMethodName: "http.request.method",
					clientRequestHTTPProtocol: "http.request.version",
					clientRequestPath: "http.request.uri.path",
					clientRequestQuery: "http.request.uri.query",
					ja3Hash: "cf.bot_management.ja3_hash",
					ja4: "cf.bot_management.ja4",
					userAgent: "http.user_agent",
					wafMlAttackScore: "cf.waf.score",
					wafAttackScore: "cf.waf.score",
					wafRceAttackScore: "cf.waf.score.rce",
					wafMlSqliAttackScore: "cf.waf.score.sqli",
					wafSqliAttackScore: "cf.waf.score.sqli",
					wafMlXssAttackScore: "cf.waf.score.xss",
					wafXssAttackScore: "cf.waf.score.xss"
				},
				Z = {
					ARGS_GET_NAMES: "http.request.uri.args.names",
					ARGS_GET: "http.request.uri.args",
					ARGS_JSON: "http.request.body.raw",
					ARGS_NAMES: "http.request.uri.args.names or http.request.body.raw",
					ARGS_POST: "http.request.body.raw",
					ARGS: "http.request.uri.args or http.request.body.raw",
					FILES: "Matched a body multipart file",
					QUERY_STRING: "http.request.uri.query",
					REMOTE_ADDR: "ip.src",
					REMOTE_ASN: "ip.geoip.asnum",
					REMOTE_COUNTRY: "ip.geoip.country",
					REQUEST_BODY: "http.request.body.raw",
					REQUEST_FILENAME: "http.request.uri.path",
					REQUEST_HEADERS_NAMES: "http.request.headers.names",
					"REQUEST_HEADERS:HOST": "http.host",
					"REQUEST_HEADERS:REFERER": "http.referer",
					"REQUEST_HEADERS:USER-AGENT": "http.user_agent",
					REQUEST_HEADERS: "http.request.headers",
					REQUEST_LINE: "http.request.method or http.request.uri",
					REQUEST_METHOD: "http.request.method",
					REQUEST_PROTOCOL: "http.request.version",
					REQUEST_URI: "http.request.uri",
					SERVER_PORT: "cf.edge.server_port"
				},
				z = {
					REQUEST_HEADERS_NAMES: "firewall.activity_log.matched_data.request_headers_names",
					FILES: "firewall.activity_log.matched_data.files",
					ARGS: "firewall.activity_log.matched_data.args",
					ARGS_POST_NAMES: "firewall.activity_log.matched_data.args_post_names",
					ARGS_GET_NAMES: "firewall.activity_log.matched_data.args_get_names",
					ARGS_GET: "firewall.activity_log.matched_data.args_get",
					REQUEST_HEADERS: "firewall.activity_log.matched_data.request_headers"
				},
				H = ["REQUEST_HEADERS:HOST", "REQUEST_HEADERS:REFERER", "REQUEST_HEADERS:USER-AGENT"],
				x = {
					OR: [{
						ruleId_like: "999___"
					}, {
						ruleId_like: "900___"
					}, {
						ruleId: "981176"
					}, {
						AND: [{
							ruleId_notlike: "9_____"
						}, {
							ruleId_notlike: "uri-9_____"
						}]
					}]
				},
				$ = "13335",
				k = "https://developers.cloudflare.com/ddos-protection/best-practices/respond-to-ddos-attacks/"
		},
		"../react/pages/firewall/api-shield/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Fj: function() {
					return m
				},
				kq: function() {
					return p
				},
				xr: function() {
					return y
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(t) {
				for (var r = 1; r < arguments.length; r++) {
					var s = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(s).filter(function(i) {
						return Object.getOwnPropertyDescriptor(s, i).enumerable
					})), l.forEach(function(i) {
						u(t, i, s[i])
					})
				}
				return t
			}

			function u(t, r, s) {
				return r = d(r), r in t ? Object.defineProperty(t, r, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = s, t
			}

			function d(t) {
				var r = a(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function a(t, r) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var l = s.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let p = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const m = {
					[p.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[p.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[p.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[p.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[p.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[p.JWT_VALIDATION]: {
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
					[p.SETTINGS]: {
						redirectToFirewallRulesTemplate: "redirect to firewall rules",
						redirectToPages: "redirect to uploaded developer portal on pages",
						listSessionIdentifiers: "list session identifiers",
						listRequestsContainingSessionIdentifiers: "list requests containing session identifiers",
						addOrRemoveSessionIdentifiers: "add or remove session identifiers"
					}
				},
				y = ({
					name: t,
					category: r = "user journey",
					product: s = p.MAIN,
					productName: l,
					additionalData: i
				}) => {
					o().sendEvent(t, c({
						category: r,
						product: s,
						productName: l
					}, i || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				N3: function() {
					return e
				},
				UN: function() {
					return c
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
			const c = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(G, v, n) {
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
		"../react/pages/firewall/rulesets/tracking.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				QK: function() {
					return e
				},
				dy: function() {
					return o
				},
				sO: function() {
					return c
				},
				x4: function() {
					return u
				}
			});
			let e = function(d) {
				return d.DELETE = "delete", d.CREATE = "create", d.GET = "get", d.UPDATE = "update", d
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
				c = (d, a) => {
					var p;
					return `${a} ${(p=o[d])!==null&&p!==void 0?p:d} rule${a===e.GET?"s":""}`
				},
				u = () => {
					var d, a;
					return (d = Object.keys(o)) === null || d === void 0 || (a = d.map(p => {
						var m;
						return (m = Object.values(e)) === null || m === void 0 ? void 0 : m.map(y => c(p, y))
					})) === null || a === void 0 ? void 0 : a.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				AS: function() {
					return d
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
					return p
				},
				o4: function() {
					return l
				},
				oY: function() {
					return c
				},
				qH: function() {
					return y
				},
				x3: function() {
					return a
				}
			});
			var e = n("../react/pages/firewall/analytics/constants.ts");
			const o = ["block", "challenge", "jschallenge", "managedChallenge"],
				c = ["miss", "expired", "bypass", "dynamic"],
				u = i => Object.fromEntries(Object.entries(i).map(([f, E]) => [E, f])),
				d = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				a = u(d),
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
				m = u(p),
				y = {
					"Not Computed": "not_computed",
					"Machine Learning": "machine_learning",
					Heuristics: "heuristics",
					"Behavioral Analysis": "behavioral_analysis",
					"JS Fingerprinting": "js_fingerprinting",
					"Verified Bot": "verified_bot",
					"Cloudflare Service": "cloudflare_service"
				},
				t = u(y);
			let r = function(i) {
				return i.SAMPLED = "sampled", i.RAW = "raw", i
			}({});
			const s = "security-analytics-log-explorer";
			let l = function(i) {
				return i.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', i.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', i.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', i.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', i.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', i
			}({})
		},
		"../react/pages/home/alerts/config.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				jk: function() {
					return h
				},
				w8: function() {
					return C
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				c = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function d(O) {
				for (var B = 1; B < arguments.length; B++) {
					var L = arguments[B] != null ? Object(arguments[B]) : {},
						P = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(L).filter(function(V) {
						return Object.getOwnPropertyDescriptor(L, V).enumerable
					})), P.forEach(function(V) {
						a(O, V, L[V])
					})
				}
				return O
			}

			function a(O, B, L) {
				return B = p(B), B in O ? Object.defineProperty(O, B, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[B] = L, O
			}

			function p(O) {
				var B = m(O, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function m(O, B) {
				if (typeof O != "object" || O === null) return O;
				var L = O[Symbol.toPrimitive];
				if (L !== void 0) {
					var P = L.call(O, B || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(O)
			}
			const y = "Notifications",
				t = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${r}/notifications`,
				l = (0, e.BC)`${s}/destinations`,
				i = (0, e.BC)`${s}/create`,
				f = (0, e.BC)`${i}/${"alertType"}`,
				E = (0, e.BC)`${s}/edit/${"alertId"}`,
				h = d({
					account: r,
					alerts: s,
					destinations: l,
					createAlert: i,
					createAlertWithSelection: f,
					editAlert: E
				}, o._j, c._j),
				C = d({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, u.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				_j: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				c = (0, e.BC)`${o}/pagerduty/connect`,
				u = (0, e.BC)`${o}/pagerduty/register`,
				d = (0, e.BC)`${o}/pagerduty`,
				a = {
					pagerDutyConnect: c,
					pagerDutyRegister: u,
					pagerDutyList: d
				};
			var p = null
		},
		"../react/pages/home/alerts/tracking.ts": function(G, v, n) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(G, v, n) {
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
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(G, v, n) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				AA: function() {
					return se
				},
				AN: function() {
					return ce
				},
				AY: function() {
					return Je
				},
				Am: function() {
					return O
				},
				B2: function() {
					return N
				},
				BB: function() {
					return z
				},
				BF: function() {
					return _e
				},
				BQ: function() {
					return U
				},
				E8: function() {
					return ye
				},
				Fl: function() {
					return Xe
				},
				Fu: function() {
					return $
				},
				G_: function() {
					return h
				},
				Gc: function() {
					return Ae
				},
				Hc: function() {
					return Dt
				},
				IO: function() {
					return q
				},
				JK: function() {
					return we
				},
				K: function() {
					return V
				},
				LI: function() {
					return b
				},
				LX: function() {
					return ue
				},
				L_: function() {
					return Be
				},
				Ly: function() {
					return At
				},
				MR: function() {
					return X
				},
				Mj: function() {
					return te
				},
				NB: function() {
					return Ot
				},
				Or: function() {
					return oe
				},
				P5: function() {
					return Pt
				},
				PE: function() {
					return me
				},
				Pd: function() {
					return St
				},
				Pk: function() {
					return Re
				},
				Pp: function() {
					return xe
				},
				Q1: function() {
					return x
				},
				Qr: function() {
					return fe
				},
				Qv: function() {
					return Te
				},
				Rp: function() {
					return Tt
				},
				Sh: function() {
					return ht
				},
				TZ: function() {
					return le
				},
				Tg: function() {
					return ke
				},
				Tp: function() {
					return Oe
				},
				Uy: function() {
					return yt
				},
				Vw: function() {
					return _
				},
				W3: function() {
					return S
				},
				WR: function() {
					return re
				},
				WX: function() {
					return Ee
				},
				XF: function() {
					return ge
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
					return Ce
				},
				_k: function() {
					return Pe
				},
				b4: function() {
					return he
				},
				c2: function() {
					return Q
				},
				cE: function() {
					return bt
				},
				dh: function() {
					return De
				},
				fE: function() {
					return Fe
				},
				g7: function() {
					return ie
				},
				hO: function() {
					return ne
				},
				hV: function() {
					return It
				},
				hk: function() {
					return B
				},
				hr: function() {
					return pe
				},
				it: function() {
					return Le
				},
				jG: function() {
					return Ue
				},
				jN: function() {
					return $e
				},
				m8: function() {
					return R
				},
				nm: function() {
					return Ct
				},
				oW: function() {
					return He
				},
				oc: function() {
					return C
				},
				pH: function() {
					return T
				},
				pi: function() {
					return J
				},
				rI: function() {
					return M
				},
				s7: function() {
					return Ge
				},
				sO: function() {
					return We
				},
				sg: function() {
					return Qe
				},
				tB: function() {
					return E
				},
				tN: function() {
					return W
				},
				vV: function() {
					return Se
				},
				vc: function() {
					return Me
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				o = n.n(e),
				c = n("../../../../node_modules/moment/moment.js"),
				u = n.n(c),
				d = n("../../../common/util/types/src/api/domain.ts"),
				a = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				p = n("../react/utils/translator.tsx"),
				m = n("../react/utils/url.ts"),
				y = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = n("../react/pages/home/domain-registration/types.ts");

			function s(g) {
				for (var I = 1; I < arguments.length; I++) {
					var ae = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(ae).filter(function(be) {
						return Object.getOwnPropertyDescriptor(ae, be).enumerable
					})), de.forEach(function(be) {
						l(g, be, ae[be])
					})
				}
				return g
			}

			function l(g, I, ae) {
				return I = i(I), I in g ? Object.defineProperty(g, I, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[I] = ae, g
			}

			function i(g) {
				var I = f(g, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function f(g, I) {
				if (typeof g != "object" || g === null) return g;
				var ae = g[Symbol.toPrimitive];
				if (ae !== void 0) {
					var de = ae.call(g, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(g)
			}

			function E(g) {
				return g.filter(I => I.isSelected).reduce((I, {
					transferFee: ae,
					isZoneEntitlementPresent: de
				}) => de ? I : I + ae, 0)
			}

			function h(g) {
				return (g / 100).toLocaleString("en-US", {
					style: "currency",
					currency: "USD"
				})
			}

			function C(g) {
				return g.filter(I => I.registrar.toLowerCase() === "godaddy")
			}
			const O = "MMM D, YYYY";

			function B(g, I, ae, de) {
				var be, ze, qe, et, tt, nt, ot, rt, at, it, st, ct, lt, ut, dt, pt, mt, gt, ft, Et, _t;
				const wt = (((be = I.fees) === null || be === void 0 ? void 0 : be.registration_fee) !== r.Xp && ((ze = I.fees) === null || ze === void 0 ? void 0 : ze.registration_fee) || 0) * 100,
					Lt = (((qe = I.fees) === null || qe === void 0 ? void 0 : qe.transfer_fee) !== r.Xp && ((et = I.fees) === null || et === void 0 ? void 0 : et.transfer_fee) || 0) * 100,
					Rt = (((tt = I.fees) === null || tt === void 0 ? void 0 : tt.registration_fee) !== r.Xp && ((nt = I.fees) === null || nt === void 0 ? void 0 : nt.registration_fee) || 0) * 100,
					Mt = (((ot = I.fees) === null || ot === void 0 ? void 0 : ot.renewal_fee) !== r.Xp && ((rt = I.fees) === null || rt === void 0 ? void 0 : rt.renewal_fee) || 0) * 100,
					kt = (((at = I.fees) === null || at === void 0 ? void 0 : at.redemption_fee) !== r.Xp && ((it = I.fees) === null || it === void 0 ? void 0 : it.redemption_fee) || 0) * 100,
					Ie = g[I.name];
				return {
					name: I.name,
					zone: Ie,
					entitlements: ae,
					registryCheck: de,
					nameservers: I.name_servers,
					isAvailable: I.available,
					lastKnownStatus: I.last_known_status,
					authCode: I.auth_code,
					isEnterpriseZone: (Ie == null || (st = Ie.plan) === null || st === void 0 ? void 0 : st.legacy_id) === "enterprise",
					isActiveZone: (Ie == null ? void 0 : Ie.status) === "active",
					corResponsesPending: I.cor_responses_pending,
					isCorLocked: I.cor_locked,
					corLockedUntil: I.cor_locked_until ? u()(I.cor_locked_until).format(O) : null,
					isFullZone: (Ie == null ? void 0 : Ie.type) == r.xd.Full,
					isLocked: I.locked,
					registrar: I.current_registrar || y.JM,
					zoneId: Ie == null ? void 0 : Ie.id,
					currentExpiration: u()(I.expires_at).format(O),
					newExpiration: u()(I.expires_at).add(1, "year").format(O),
					wholesaleCost: wt,
					transferFee: Lt,
					registrationFee: Rt,
					renewalFee: Mt,
					redemptionFee: kt,
					lastEntitledAt: I.last_entitled_at ? new Date(I.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ae) && !!ae.find(vt => vt.id === y.g5 && vt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: I.transfer_in && P(I.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: I.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: I.transfer_in,
					transferOut: I.transfer_out,
					autoRenew: I.auto_renew === !0,
					lastTransferredAt: I.last_transferred_at,
					createdAt: I.created_at,
					paymentExpiresAt: u()(I.payment_expires_at).isValid() ? u()(I.payment_expires_at) : u()(I.expires_at).isValid() ? u()(I.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (ct = I.contacts) === null || ct === void 0 || (lt = ct.administrator) === null || lt === void 0 ? void 0 : lt.id,
						[r.l2.Billing]: (ut = I.contacts) === null || ut === void 0 || (dt = ut.billing) === null || dt === void 0 ? void 0 : dt.id,
						[r.l2.Registrant]: (pt = I.contacts) === null || pt === void 0 || (mt = pt.registrant) === null || mt === void 0 ? void 0 : mt.id,
						[r.l2.Technical]: (gt = I.contacts) === null || gt === void 0 || (ft = gt.technical) === null || ft === void 0 ? void 0 : ft.id
					},
					landing: I.landing,
					whois: I.whois,
					emailVerified: I.email_verified,
					materialChanges: K(I.material_changes),
					corChanges: I.cor_changes ? z(Object.assign(s({}, L), I.cor_changes)) : {},
					registryStatuses: I.registry_statuses ? I.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Et = I.domain_protection_services) === null || Et === void 0 ? void 0 : Et.status
					},
					deletion: {
						isDeletable: I == null || (_t = I.deletion) === null || _t === void 0 ? void 0 : _t.is_deletable
					},
					premiumType: I == null ? void 0 : I.premium_type,
					fees: I == null ? void 0 : I.fees
				}
			}
			const L = {
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

			function P(g) {
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

			function V(g) {
				let I = g.extensions;
				(I == null ? void 0 : I.application_purpose) && (I == null ? void 0 : I.nexus_category) && (g.extensions = {
					nexusCategory: I.nexus_category,
					applicationPurpose: I.application_purpose
				});
				let ae = s({}, typeof g.id == "string" ? {
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
				return je(ae)
			}

			function K(g) {
				let I = [];
				const ae = {
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
				for (const de in g) {
					const be = g[de],
						ze = ae[be];
					I.push(ze)
				}
				return I
			}
			const Z = g => {
				if (!g) return null;
				let I = g;
				return g.includes("C31") && (I = "C31"), g.includes("C32") && (I = "C32"), I
			};

			function z(g) {
				return s({}, typeof g.id == "string" ? {
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
						nexusCategory: Z(g.extensions.nexus_category),
						applicationPurpose: g.extensions.application_purpose
					}
				} : {})
			}

			function H(g = {}) {
				const I = {
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
					}, g.transferConditions || {}),
					transferIn: s({
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
				return Object.assign(I, g)
			}

			function x(g = {}) {
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

			function $(g) {
				const I = y.Py.concat(y.ui).reduce((ae, de) => s({}, ae, {
					[de]: []
				}), {});
				return g.forEach(ae => {
					let de = k(ae.registrar);
					de in I || (de = y.ui), Qe(ae.name) && (de = "uk"), I[de].push(ae)
				}), Object.keys(I).sort((ae, de) => ae.localeCompare(de)).map(ae => ({
					registrar: ae,
					domains: I[ae]
				})).filter(ae => ae.domains.length > 0)
			}

			function k(g) {
				return g == null ? void 0 : g.toLowerCase().replace(/\s|,|\./g, "")
			}

			function _(g) {
				if (!g || !g.registrar) return "unknown";
				if (Qe(g.name)) return "uk";
				const I = k(g.registrar);
				return I in y.gM ? I : "unknown"
			}
			const w = [];

			function D(g) {
				return w.some(I => g.endsWith("." + I))
			}

			function Y(g) {
				return !g.isEnterpriseZone || !Array.isArray(g.entitlements) ? !1 : !!g.entitlements.find(({
					id: I,
					allocation: ae
				}) => I === y.g5 && ae.value === !0)
			}

			function J(g) {
				var I;
				const ae = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let de = !1,
					be = null;
				return (I = g.registryStatuses) === null || I === void 0 || I.some(ze => {
					ae.includes(ze) && (be = ze, de = !0)
				}), [de, be]
			}

			function R(g, I = !1) {
				if (!g) return [!1, t.keys.cannot_transfer_default];
				if (g.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!g.isFullZone && !Y(g)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (g.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (g.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!g.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (!I && yt(g == null ? void 0 : g.premiumType)) return [!1, t.keys.cannot_transfer_domain_premium];
				if (T(g)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let ae;
				for (ae in g.transferConditions)
					if (ae !== "not_premium" && !g.transferConditions[ae]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (D(g.name)) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [de, be] = J(g);
				return de && be ? [!1, t.keys.cannot_transfer_domain_registry_status[be]] : [!0, ""]
			}

			function T(g) {
				var I, ae;
				return !!g.transferIn && !((I = g.transferConditions) === null || I === void 0 ? void 0 : I.not_started) && !!(Qe(g.name) || ((ae = g.registryStatuses) === null || ae === void 0 ? void 0 : ae.includes(r.rj.PENDING_TRANSFER)))
			}

			function A(g) {
				return !!g.registrar && !!g.currentExpiration
			}

			function N(g, I = !1) {
				const [ae] = R(g, I);
				return A(g) ? ve(g) ? r.M5.InProgressOrOnCF : ae ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function Q(g) {
				return g.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(g.transferIn.enter_auth_code) || !1
			}

			function X(g) {
				return g.registrar === "Cloudflare"
			}

			function M(g) {
				return !!(g == null ? void 0 : g.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function te(g) {
				return !!(g == null ? void 0 : g.includes(r.rj.PENDING_TRANSFER))
			}
			const j = "Invalid date";

			function oe(g) {
				return g.newExpiration === j ? "Unavailable" : g.newExpiration
			}

			function le(g) {
				return g.currentExpiration === j ? "Unavailable" : g.currentExpiration
			}

			function se(g) {
				return g.substring(g.indexOf("."))
			}

			function pe(g) {
				return g.map(I => I.name).map(I => se(I)).filter((I, ae, de) => !de.includes(I, ae + 1))
			}

			function he(g) {
				if (y.no) return [!0, ""];
				if (!X(g)) return [!1, r.ok.NotOnCF];
				if (g.isCorLocked) return [!1, g.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (g.lastTransferredAt) {
					const I = u()(g.lastTransferredAt),
						ae = u().duration(u()().diff(I)).as("days"),
						de = Qe(g.name);
					if (ae < (de ? 1 : 60)) return [!1, de ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (g.createdAt) {
					const I = u()(g.createdAt);
					if (u().duration(u()().diff(I)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Ee(g) {
				return !!(y.Bc || g.transferOut)
			}

			function ve(g) {
				return ie(g) || X(g)
			}

			function W(g) {
				return !ie(g) && X(g)
			}

			function ie(g) {
				return !g || g.lastKnownStatus === "pendingTransfer" || g.lastKnownStatus === "transferFOAPending" || !X(g) && g.transferConditions && !g.transferConditions.not_started || !1
			}

			function me(g) {
				return !(D(g.name) || g.transferConditions && !g.transferConditions.supported_tld)
			}

			function Te(g) {
				return (g == null ? void 0 : g.includes("/")) ? !0 : g.split("").some(I => I.charCodeAt(0) > 123)
			}

			function Re(g) {
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

			function Me(g) {
				return u()(g.paymentExpiresAt).isBefore(u()())
			}

			function $e(g) {
				return g.transferIn && g.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function we(g) {
				const I = ["CU", "KP", "IR", "SY"];
				return g.filter(ae => !I.includes(ae.code))
			}

			function ke(g) {
				if (!!g) return `${g.charAt(0).toUpperCase()}${g.slice(1)}${g.charAt(g.length-1)==="."?"":"."}`
			}

			function je(g) {
				const I = {};
				for (const [ae, de] of Object.entries(g)) {
					if (de && typeof de == "string") {
						Object.assign(I, {
							[ae]: de.trim()
						});
						continue
					}
					Object.assign(I, {
						[ae]: de
					})
				}
				return I
			}

			function Ne(g) {
				return u()(g).add(40, "days")
			}

			function Be(g) {
				const I = g.paymentExpiresAt || g.payment_expires_at,
					ae = Ne(I);
				return u()().isBetween(I, ae)
			}

			function Fe(g) {
				var I;
				return !(g == null ? void 0 : g.registryStatuses) || !Array.isArray(g == null ? void 0 : g.registryStatuses) && !(0, e.isString)(g == null ? void 0 : g.registryStatuses) ? !1 : (I = g.registryStatuses) === null || I === void 0 ? void 0 : I.includes(r.rj.REDEMPTION_PERIOD)
			}

			function De(g) {
				var I;
				return !(g == null ? void 0 : g.registryStatuses) || !Array.isArray(g == null ? void 0 : g.registryStatuses) && !(0, e.isString)(g == null ? void 0 : g.registryStatuses) ? !1 : (I = g.registryStatuses) === null || I === void 0 ? void 0 : I.includes(r.rj.PENDING_DELETE)
			}

			function xe(g) {
				return [".us"].includes(g)
			}

			function Le(g) {
				return [".us"].includes(g)
			}

			function ne(g) {
				switch (g) {
					case ".us":
						return ee();
					default:
						return []
				}
			}

			function S(g) {
				switch (g) {
					case ".us":
						return F;
					default:
						return {}
				}
			}
			const F = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function ee() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([g, I]) => ({
						value: g,
						label: I
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([g, I]) => ({
						value: g,
						label: I
					}))
				}]
			}

			function ue(g, I, ae) {
				return I[I.length - 1][ae] === g[ae]
			}

			function fe(g) {
				return Boolean(Object.keys(g).length === 0)
			}

			function _e(g) {
				return u()().add(g, "year").format(O)
			}

			function Ce({
				accountName: g
			}) {
				var I;
				const ae = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((I = g.toLowerCase().match(ae)) === null || I === void 0 ? void 0 : I[0]) || ""
			}

			function Se(g) {
				return !!g.match(a.default.email)
			}

			function Ue(g) {
				return g === "Registration banned zone error"
			}

			function Ve(g) {
				return g == null ? void 0 : g.startsWith("Quote error")
			}

			function We(g) {
				return g === (0, p.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function Pe(g) {
				return g === "DNS conflict"
			}

			function Oe(g) {
				return g === d.W7.PENDING_UPDATE
			}

			function Ae(g) {
				return g ? Object.values(d.wR).filter(I => I !== d.wR.OFFBOARDED).includes(g) : !1
			}

			function Ge(g) {
				return g ? [d.wR.LOCKED, d.wR.ONBOARDED, d.wR.ONBOARDING_INITIATED, d.wR.PENDING_REGISTRY_LOCK, d.wR.PENDING_REGISTRY_UNLOCK, d.wR.PENDING_UNLOCK_APPROVAL].includes(g) : !1
			}

			function Ze(g) {
				return g ? d.wR.UNLOCKED === g : !1
			}

			function Ye(g) {
				return g ? d.wR.LOCKED === g : !1
			}

			function b(g) {
				return g ? d.wR.PENDING_REGISTRY_LOCK === g : !1
			}

			function U(g) {
				return g ? [d.wR.PENDING_REGISTRY_UNLOCK, d.wR.PENDING_UNLOCK_APPROVAL].includes(g) : !1
			}

			function q(g) {
				var I;
				return !1
			}

			function re(g) {
				var I;
				return !1
			}

			function ce(g) {
				var I;
				return !1
			}

			function ge(g) {
				var I;
				return !1
			}

			function ye(g) {
				var I;
				return !1
			}

			function He(g) {
				return Object.keys(d.wR).find(I => d.wR[I].toLowerCase() === g.toLowerCase())
			}

			function Je(g) {
				var I;
				const ae = (I = He(g)) === null || I === void 0 ? void 0 : I.toLowerCase();
				return ae ? t.keys.protection_status[ae] : t.keys.protection_status.unknown
			}

			function Ke(g) {
				return ["com", "net"].includes(g)
			}

			function Xe(g) {
				const I = (0, m.pu)(g);
				return Ke(I) ? d.wR.PENDING_REGISTRY_LOCK : d.wR.LOCKED
			}

			function ht(g) {
				return (0, m.pu)(g) === "co" ? 5 : 10
			}

			function Ct(g, I) {
				return I ? 1 : (0, m.pu)(g) === "co" ? 5 : (0, m.pu)(g) === "org" ? 1 : 10
			}

			function Qe(g) {
				return (0, m.pu)(g) === "uk"
			}

			function bt(g) {
				return (0, m.pu)(g) === "us"
			}

			function Tt(g) {
				return u()(g).isValid()
			}

			function At(g) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(g)
			}

			function Pt(g) {
				return !!(g == null ? void 0 : g.id)
			}

			function Ot(g) {
				return g ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(g) : !1
			}

			function St(g) {
				return g ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(g) : !1
			}

			function It(g) {
				var I;
				return (g == null ? void 0 : g.lastKnownStatus) ? (I = g.lastKnownStatus) === null || I === void 0 ? void 0 : I.includes("deletionIrredeemable") : !1
			}

			function yt(g) {
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

			function Dt(g) {
				if (!g || !g.message) return r.OJ.DEFAULT;
				const {
					message: I
				} = g;
				switch (!0) {
					case I.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case I.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case I.includes("account blocked"):
						return r.OJ.ACCOUNT_BLOCKED;
					default:
						return r.OJ.DEFAULT
				}
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Bc: function() {
					return y
				},
				Hv: function() {
					return w
				},
				JM: function() {
					return c
				},
				Py: function() {
					return a
				},
				WK: function() {
					return r
				},
				g5: function() {
					return s
				},
				gM: function() {
					return d
				},
				gf: function() {
					return m
				},
				jk: function() {
					return _
				},
				no: function() {
					return t
				},
				uY: function() {
					return p
				},
				ui: function() {
					return u
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../flags.js");
			const c = "Unknown",
				u = "unknown",
				d = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				a = Object.keys(d),
				p = !0,
				m = (0, o.J8)("registrar_mock_data") || !1,
				y = (0, o.J8)("registrar_mock_transfer_out") || !1,
				t = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				s = "cf_registrar.enabled",
				l = "@abcABC1234567890123456",
				i = (0, e.BC)`/${"accountId"}`,
				f = (0, e.BC)`${i}/add-site`,
				E = (0, e.BC)`${i}/domains`,
				h = (0, e.BC)`${E}/${"zoneName"}`,
				C = (0, e.BC)`${h}/configuration`,
				O = (0, e.BC)`${h}/contacts`,
				B = (0, e.BC)`${E}/pricing`,
				L = (0, e.BC)`${E}/protection`,
				P = (0, e.BC)`${E}/register`,
				V = (0, e.BC)`${P}/checkout`,
				K = (0, e.BC)`${P}/success`,
				Z = (0, e.BC)`${E}/tlds`,
				z = (0, e.BC)`${E}/transfer`,
				H = (0, e.BC)`${E}/transfer/${"zoneName"}`,
				x = (0, e.BC)`/registrar/accounts/verify_email`,
				$ = (0, e.BC)`/registrar/domains/verify_email`,
				k = (0, e.BC)`${E}/verify-email`,
				_ = {
					addSite: f,
					domains: E,
					domainsDomain: h,
					domainsDomainConfiguration: C,
					domainsDomainContacts: O,
					domainsPricing: B,
					domainsProtection: L,
					domainsRegister: P,
					domainsRegisterCheckout: V,
					domainsRegisterSuccess: K,
					domainsTlds: Z,
					domainsTransfer: z,
					domainsTransferZone: H,
					registrarAccountsVerifyEmail: x,
					registrarDomainsVerifyEmail: $,
					verifyEmail: k
				},
				w = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(G, v, n) {
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
				c = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = n.n(c),
				d = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function a(s) {
				for (var l = 1; l < arguments.length; l++) {
					var i = arguments[l] != null ? Object(arguments[l]) : {},
						f = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(i).filter(function(E) {
						return Object.getOwnPropertyDescriptor(i, E).enumerable
					})), f.forEach(function(E) {
						p(s, E, i[E])
					})
				}
				return s
			}

			function p(s, l, i) {
				return l = m(l), l in s ? Object.defineProperty(s, l, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[l] = i, s
			}

			function m(s) {
				var l = y(s, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function y(s, l) {
				if (typeof s != "object" || s === null) return s;
				var i = s[Symbol.toPrimitive];
				if (i !== void 0) {
					var f = i.call(s, l || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(s)
			}
			let t = function(s) {
				return s.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", s.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", s.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", s.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", s.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", s.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", s.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", s.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", s.RENEW_DOMAIN_COMPLETED = "domain renewal completed", s.RESTORE_DOMAIN_INIT = "click to open domain restore modal", s.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", s.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", s.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", s.RESTORE_DOMAIN_FAILURE = "domain restore failed", s.RESTORE_DOMAIN_COMPLETED = "domain restore completed", s.DOMAIN_DELETE_INIT = "click to begin domain delete", s.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", s.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", s.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", s.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", s.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", s.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", s.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", s.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", s.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", s.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", s
			}({});

			function r(s, l, i) {
				if (!(l == null ? void 0 : l.name)) return null;
				u().sendEvent(s, a({
					domain: {
						name: l.name,
						premium: (0, d.Uy)(l == null ? void 0 : l.premiumType),
						paymentExpiresAt: o()(l == null ? void 0 : l.paymentExpiresAt).format()
					},
					category: "registrar"
				}, i))
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "update dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				KO: function() {
					return p
				},
				L9: function() {
					return t
				},
				N3: function() {
					return y
				},
				zE: function() {
					return m
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(r) {
				for (var s = 1; s < arguments.length; s++) {
					var l = arguments[s] != null ? Object(arguments[s]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(f) {
						return Object.getOwnPropertyDescriptor(l, f).enumerable
					})), i.forEach(function(f) {
						u(r, f, l[f])
					})
				}
				return r
			}

			function u(r, s, l) {
				return s = d(s), s in r ? Object.defineProperty(r, s, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[s] = l, r
			}

			function d(r) {
				var s = a(r, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function a(r, s) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, s || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(r)
			}
			let p = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r
				}({}),
				m = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				y = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const t = (r, s = {}) => {
				o().sendEvent(r, c({}, s, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				GF: function() {
					return s
				},
				H3: function() {
					return p
				},
				H8: function() {
					return d
				},
				J: function() {
					return i
				},
				Nz: function() {
					return m
				},
				UQ: function() {
					return E
				},
				Up: function() {
					return u
				},
				W8: function() {
					return y
				},
				Ws: function() {
					return h
				},
				Xg: function() {
					return r
				},
				_j: function() {
					return c
				},
				a4: function() {
					return l
				},
				jS: function() {
					return f
				},
				rF: function() {
					return a
				},
				rG: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/utils/translator.tsx");
			const c = {
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
					tunnelHealthCheckTunnelsDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/${"tunnelId"}`
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
				d = C => [{
					value: "low",
					label: C("setting.low")
				}, {
					value: "mid",
					label: C("setting.medium")
				}, {
					value: "high",
					label: C("setting.high")
				}],
				a = C => [{
					value: "request",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				p = C => [{
					value: "unidirectional",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: C("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				m = "magic-transit",
				y = "magic-wan",
				t = "gre_tunnel",
				r = "ipsec_tunnel",
				s = 64,
				l = 1476,
				i = "mid",
				f = "reply",
				E = C => [{
					value: void 0,
					label: C("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: C("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: C("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				h = C => [{
					value: "all",
					label: C("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: C("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: C("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				_u: function() {
					return o
				},
				bK: function() {
					return e
				},
				lC: function() {
					return c
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
				c = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				VZ: function() {
					return u
				},
				lC: function() {
					return c
				},
				r8: function() {
					return o
				},
				uB: function() {
					return d
				}
			});
			var e = n("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				c = "user journey",
				u = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				d = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				W_: function() {
					return o
				},
				X: function() {
					return e
				},
				lC: function() {
					return c
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
				c = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				gb: function() {
					return t
				},
				iP: function() {
					return K
				},
				xL: function() {
					return C
				},
				rD: function() {
					return z
				},
				oT: function() {
					return i
				},
				i2: function() {
					return H
				},
				x1: function() {
					return a
				},
				lW: function() {
					return m
				},
				UA: function() {
					return P
				},
				K5: function() {
					return s
				},
				Ii: function() {
					return B
				},
				PJ: function() {
					return Z
				},
				bK: function() {
					return E
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				d = n("../../../../node_modules/@cloudflare/elements/es/index.js");
			const a = () => o().createElement(p, null, o().createElement("svg", {
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
				p = (0, c.createComponent)(({
					theme: x
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
				m = () => o().createElement(y, null, o().createElement("svg", {
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
				y = (0, c.createComponent)(({
					theme: x
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
				t = () => o().createElement(r, null, o().createElement(d.Ei, {
					alt: "airplane",
					src: u,
					width: "85%"
				})),
				r = (0, c.createComponent)(({
					theme: x
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
				l = (0, c.createComponent)(({
					theme: x
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
				i = () => o().createElement(f, null, o().createElement("svg", {
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
				f = (0, c.createComponent)(({
					theme: x
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
				E = () => o().createElement(h, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				h = (0, c.createComponent)(({
					theme: x
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
				C = () => o().createElement(O, null, o().createElement("svg", {
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
				O = (0, c.createComponent)(({
					theme: x
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
				B = () => o().createElement(L, null, o().createElement("svg", {
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
				L = (0, c.createComponent)(({
					theme: x
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
				P = () => o().createElement(V, null, o().createElement("svg", {
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
				V = (0, c.createComponent)(({
					theme: x
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
				K = () => o().createElement("svg", {
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
				Z = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				A2: function() {
					return p
				},
				He: function() {
					return d
				},
				N$: function() {
					return a
				},
				Qq: function() {
					return c
				},
				ST: function() {
					return u
				},
				wM: function() {
					return o
				}
			});
			var e = n("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				c = "login-apple-jwt",
				u = "cf-test",
				d = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				a = m => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: m ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: m ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: m ? e.rD : e.PJ
				}, {
					title: "apple.sign_in_with_apple.impact.title",
					description: "apple.sign_in_with_apple.impact.description",
					icon: e.i2
				}],
				p = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/pages/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				A: function() {
					return E
				},
				C1: function() {
					return y
				},
				Dp: function() {
					return z
				},
				HD: function() {
					return O
				},
				IK: function() {
					return d
				},
				L7: function() {
					return c
				},
				Li: function() {
					return f
				},
				Ni: function() {
					return V
				},
				OG: function() {
					return _
				},
				QF: function() {
					return $
				},
				QV: function() {
					return P
				},
				Sx: function() {
					return B
				},
				Ub: function() {
					return x
				},
				X3: function() {
					return r
				},
				aP: function() {
					return p
				},
				eO: function() {
					return s
				},
				fH: function() {
					return i
				},
				fQ: function() {
					return h
				},
				fR: function() {
					return e
				},
				hE: function() {
					return H
				},
				iS: function() {
					return C
				},
				ku: function() {
					return Z
				},
				nY: function() {
					return L
				},
				w3: function() {
					return u
				},
				wJ: function() {
					return m
				},
				wp: function() {
					return l
				},
				yu: function() {
					return t
				},
				zG: function() {
					return K
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-pages",
				c = {
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
				u = "Allow Members - Cloudflare Pages",
				d = 58,
				a = {
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
				p = "production",
				m = 2e3,
				y = 100,
				t = 350,
				r = 1e7,
				s = ["Success:", "Error:", "Failed:"],
				l = 10,
				i = "_headers",
				f = "_redirects",
				E = "_routes.json",
				h = "_worker.js",
				C = "do-a-barrel-roll",
				O = [i, f, E, h],
				B = 1024 * 1024 * 25,
				L = 1e3,
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
				V = 1e5,
				K = 75e3,
				Z = "workers",
				z = "cloudflare_pages_build_caching",
				H = 2;
			let x = function(w) {
				return w[w.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", w[w.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", w[w.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", w[w.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", w[w.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", w[w.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", w
			}({});
			const $ = 1,
				k = 2,
				_ = 2
		},
		"../react/pages/pages/routes.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return c
				},
				_j: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
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
				c = {
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
				u = d => `${d.subdomain}.pages.dev`
		},
		"../react/pages/r2/routes.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return c
				},
				Jg: function() {
					return a
				},
				_j: function() {
					return o
				},
				pZ: function() {
					return p
				},
				vF: function() {
					return d
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
				c = {
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
				u = t => {
					const r = "r2.cloudflarestorage.com";
					switch (t) {
						case "default":
							return r;
						case "eu":
							return `eu.${r}`
					}
				},
				d = (t, r) => {
					const s = u(r);
					return `https://${t}.${s}`
				},
				a = (t, r, s) => `${d(t,r)}/${s}`,
				p = () => "r2.dev",
				m = t => {
					const r = p();
					return `https://${t}.${r}`
				},
				y = (t, r) => `${m(t)}/${r}`
		},
		"../react/pages/security-center/tracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				R: function() {
					return e
				},
				v: function() {
					return o
				}
			});
			let e = function(c) {
				return c.LOAD_SCAN_INFO = "load url scan information", c.INITIATE_URL_SCAN = "initiate url scan", c
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
		"../react/pages/spectrum/tracking.tsx": function(G, v, n) {
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
		"../react/pages/traffic/argo/tracking.ts": function(G, v, n) {
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
		"../react/pages/traffic/load-balancing/tracking.ts": function(G, v, n) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(G, v, n) {
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
		"../react/pages/welcome/routes.ts": function(G, v, n) {
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
		"../react/pages/zoneless-workers/constants.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				$2: function() {
					return L
				},
				CI: function() {
					return O
				},
				IS: function() {
					return p
				},
				L7: function() {
					return d
				},
				Oj: function() {
					return s
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
				fE: function() {
					return m
				},
				im: function() {
					return f
				},
				rL: function() {
					return t
				},
				wW: function() {
					return a
				}
			});

			function e(P) {
				for (var V = 1; V < arguments.length; V++) {
					var K = arguments[V] != null ? Object(arguments[V]) : {},
						Z = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(K).filter(function(z) {
						return Object.getOwnPropertyDescriptor(K, z).enumerable
					})), Z.forEach(function(z) {
						o(P, z, K[z])
					})
				}
				return P
			}

			function o(P, V, K) {
				return V = c(V), V in P ? Object.defineProperty(P, V, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[V] = K, P
			}

			function c(P) {
				var V = u(P, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function u(P, V) {
				if (typeof P != "object" || P === null) return P;
				var K = P[Symbol.toPrimitive];
				if (K !== void 0) {
					var Z = K.call(P, V || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(P)
			}
			const d = {
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
							root: "https://developers.cloudflare.com/workers/about/metrics",
							requestsTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#requests",
							cpuTimeTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#cpu-time-per-execution",
							durationTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#duration-per-execution",
							requestDurationTimeseries: "https://developers.cloudflare.com/workers/learning/metrics-and-analytics/#request-duration",
							dataEgressTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#data-egress",
							invocationStatuses: "https://developers.cloudflare.com/workers/about/metrics/#invocation-statuses"
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
				a = 800,
				p = "40rem",
				m = {
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
					clickedDiscordLink: "clicked sidebar Discord link",
					clickedCommunityLink: "clicked sidebar Community Forum link",
					clickDetailTab: "click worker detail tab",
					clickedBundledUsageModel: "Workers:Clicked Bundled Usage Model",
					clickedUnboundUsageModel: "Workers:Clicked Unbound Usage Model",
					clickedGreenComputeSetting: "Workers:Clicked Green Compute Setting",
					clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting"
				},
				i = "workers.dev",
				f = "YYYY-MM-DD HH:mm:SS ZZ",
				E = "active",
				h = ["bundled", "unbound", "standard"],
				C = null,
				O = {
					bandaWorkersCI: "banda-workers-ui"
				};
			let B = function(P) {
				return P[P.NONE = 0] = "NONE", P[P.MISS = 1] = "MISS", P[P.EXPIRED = 2] = "EXPIRED", P[P.UPDATING = 3] = "UPDATING", P[P.STALE = 4] = "STALE", P[P.HIT = 5] = "HIT", P[P.IGNORED = 6] = "IGNORED", P[P.BYPASS = 7] = "BYPASS", P[P.REVALIDATED = 8] = "REVALIDATED", P[P.DYNAMIC = 9] = "DYNAMIC", P[P.STREAM_HIT = 10] = "STREAM_HIT", P[P.DEFERRED = 11] = "DEFERRED", P
			}({});
			const L = [B.HIT, B.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return p
				},
				L: function() {
					return c
				},
				Q9: function() {
					return u
				},
				_j: function() {
					return d
				},
				ky: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = m => `${m}.workers.dev`,
				c = (m, y, t) => `${t?`${t}.`:""}${m}.${o(y)}`,
				u = (m, y, t) => `https://${c(m,y,t)}`,
				d = {
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
					serviceDetailsLogsLive: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/live`,
					serviceDetailsLogpush: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/logpush`,
					serviceDetailsLogsCron: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/cron`,
					serviceDetailsManage: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					serviceDetailsRename: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/rename`,
					createDeployment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deploy-version`,
					deploymentHistory: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deployment-history`,
					createEnvironment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/environment/new`,
					apiKey: (0, e.BC)`/profile/api-tokens`,
					signUp: (0, e.BC)`/sign-up/workers`,
					dns: (0, e.BC)`/${"accountId"}/${"zoneId"}/dns`,
					ssl: (0, e.BC)`/${"accountId"}/${"zoneId"}/ssl-tls/edge-certificates`,
					analyticsEngine: (0, e.BC)`/${"accountId"}/workers/analytics-engine`,
					emailRouting: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes`,
					emailRoutingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes/${"ruleId"}`,
					zones: (0, e.BC)`/${"accountId"}`,
					developerPlatform_workers_create: (0, e.BC)`/${"accountId"}/developer-platform/workers/onboarding`,
					developerPlatform_workers_success: (0, e.BC)`/${"accountId"}/developer-platform/workers/success`,
					logpush: (0, e.BC)`/${"accountId"}/logs`,
					members: (0, e.BC)`/${"accountId"}/members`
				},
				a = "https://cron-triggers.cloudflareworkers.com",
				p = {
					accountMtlsCertificates: (0, e.BC)`/accounts/${"accountId"}/mtls_certificates`,
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/workers/account-settings`,
					builds: {
						build: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}`,
						latestBuildsByWorkers: (0, e.BC)`/accounts/${"accountId"}/builds/builds/latest`,
						buildLogLines: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/logs`,
						buildsByScriptId: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/builds`,
						buildTokens: (0, e.BC)`/accounts/${"accountId"}/builds/tokens`,
						repoConnections: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections`,
						repoConnection: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}`,
						triggers: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}/triggers`,
						trigger: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}/triggers/${"trigger_uuid"}`,
						workerTriggers: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/triggers`
					},
					certificates: (0, e.BC)`/zones/${"zoneId"}/ssl/certificate_packs/${"certId"}`,
					createApiToken: (0, e.BC)`/user/tokens`,
					createTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails`,
					deleteApiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					deleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/deployments`,
					describeCron: `${a}/describe`,
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
					nextCron: `${a}/next`,
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
					validateCron: `${a}/validate`,
					versions: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}`,
					version: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}/detail/${"versionTag"}`,
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				MN: function() {
					return c
				},
				Yg: function() {
					return d
				},
				i$: function() {
					return u
				},
				l3: function() {
					return a
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const c = async ([p, m]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: p,
					variables: m
				})
			})).body, u = async (...p) => (await e.get(...p)).body, d = p => async (m, y) => {
				const t = await fetch(m, y).then(r => r.json());
				return p.assertDecode(t)
			}, a = async (...p) => (await u(...p)).result;
			v.ZP = {
				fetcher: p => Array.isArray(p) ? a(...p) : a(p)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(G, v) {
				v()
			})(this, function() {
				"use strict";

				function G() {
					var n = !0,
						e = !1,
						o = null,
						c = {
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

					function u(E) {
						return !!(E && E !== document && E.nodeName !== "HTML" && E.nodeName !== "BODY" && "classList" in E && "contains" in E.classList)
					}

					function d(E) {
						var h = E.type,
							C = E.tagName;
						return !!(C == "INPUT" && c[h] && !E.readOnly || C == "TEXTAREA" && !E.readOnly || E.isContentEditable)
					}

					function a(E) {
						E.getAttribute("is-focus-visible") !== "" && E.setAttribute("is-focus-visible", "")
					}

					function p(E) {
						E.getAttribute("is-focus-visible") === "" && E.removeAttribute("is-focus-visible")
					}

					function m(E) {
						u(document.activeElement) && a(document.activeElement), n = !0
					}

					function y(E) {
						n = !1
					}

					function t(E) {
						!u(E.target) || (n || d(E.target)) && a(E.target)
					}

					function r(E) {
						!u(E.target) || E.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), p(E.target))
					}

					function s(E) {
						document.visibilityState == "hidden" && (e && (n = !0), l())
					}

					function l() {
						document.addEventListener("mousemove", f), document.addEventListener("mousedown", f), document.addEventListener("mouseup", f), document.addEventListener("pointermove", f), document.addEventListener("pointerdown", f), document.addEventListener("pointerup", f), document.addEventListener("touchmove", f), document.addEventListener("touchstart", f), document.addEventListener("touchend", f)
					}

					function i() {
						document.removeEventListener("mousemove", f), document.removeEventListener("mousedown", f), document.removeEventListener("mouseup", f), document.removeEventListener("pointermove", f), document.removeEventListener("pointerdown", f), document.removeEventListener("pointerup", f), document.removeEventListener("touchmove", f), document.removeEventListener("touchstart", f), document.removeEventListener("touchend", f)
					}

					function f(E) {
						E.target.nodeName.toLowerCase() !== "html" && (n = !1, i())
					}
					document.addEventListener("keydown", m, !0), document.addEventListener("mousedown", y, !0), document.addEventListener("pointerdown", y, !0), document.addEventListener("touchstart", y, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", s, !0), l(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function v(n) {
					var e;

					function o() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && v(G)
			})
		},
		"../react/utils/bootstrap.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
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
					return c
				}
			});
			const e = () => {
					var d, a, p;
					return (d = window) === null || d === void 0 || (a = d.bootstrap) === null || a === void 0 || (p = a.data) === null || p === void 0 ? void 0 : p.security_token
				},
				o = () => {
					var d, a, p;
					return !!((d = n.g.bootstrap) === null || d === void 0 || (a = d.data) === null || a === void 0 || (p = a.user) === null || p === void 0 ? void 0 : p.id)
				},
				c = () => {
					var d, a;
					return !!((d = n.g.bootstrap) === null || d === void 0 || (a = d.data) === null || a === void 0 ? void 0 : a.is_kendo)
				},
				u = () => {
					var d, a, p, m;
					return (d = window) === null || d === void 0 || (a = d.bootstrap) === null || a === void 0 || (p = a.data) === null || p === void 0 || (m = p.user) === null || m === void 0 ? void 0 : m.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				O5: function() {
					return u
				},
				Xm: function() {
					return c
				},
				kT: function() {
					return p
				},
				wV: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				c = () => (o() || "").indexOf("C0002") !== -1,
				u = () => (o() || "").indexOf("C0003") !== -1,
				d = () => (o() || "").indexOf("C0004") !== -1,
				a = () => (o() || "").indexOf("C0005") !== -1,
				p = t => {
					const r = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				m = () => {
					var t;
					const r = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				y = () => parse(document.cookie)
		},
		"../react/utils/history.ts": function(G, v, n) {
			"use strict";
			var e = n("../../../../node_modules/history/esm/history.js");
			const o = (0, e.lX)();
			v.Z = o
		},
		"../react/utils/i18n.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				AI: function() {
					return h
				},
				S8: function() {
					return E
				},
				ZW: function() {
					return a
				},
				ay: function() {
					return C
				},
				fh: function() {
					return O
				},
				ly: function() {
					return m
				},
				th: function() {
					return d
				},
				ti: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				c = n("../../../common/intl/intl-types/src/index.ts"),
				u = n("../../../common/util/types/src/utils/index.ts");
			const d = "cf-sync-locale-with-cps",
				a = c.Q.en_US,
				p = "en_US",
				m = "cf-locale",
				y = V => (0, u.Yd)(c.Q).find(K => c.Q[K] === V) || p,
				t = [],
				r = [],
				s = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.fr_FR, c.Q.it_IT, c.Q.pt_BR, c.Q.ko_KR, c.Q.ja_JP, c.Q.zh_CN, c.Q.zh_TW],
				l = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.es_CL, c.Q.es_EC, c.Q.es_MX, c.Q.es_PE, c.Q.fr_FR, c.Q.it_IT, c.Q.ja_JP, c.Q.ko_KR, c.Q.pt_BR, c.Q.zh_CN, c.Q.zh_TW],
				i = {
					test: [...s, ...r, ...t],
					development: [...s, ...r, ...t],
					staging: [...s, ...r, ...t],
					production: [...s, ...r]
				},
				f = {
					test: [...l, ...r, ...t],
					development: [...l, ...r, ...t],
					staging: [...l, ...r, ...t],
					production: [...l, ...r]
				},
				E = (V, K) => {
					const Z = c.Q[K];
					return V ? i.production.includes(Z) : f.production.includes(Z)
				},
				h = V => Object.keys(c.Q).filter(K => E(V, K)),
				C = V => {
					const K = c.Q[V];
					return r.includes(K)
				},
				O = (V, K) => V ? B[K] : L[K],
				B = {
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
				L = {
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
		"../react/utils/translator.tsx": function(G, v, n) {
			"use strict";
			n.d(v, {
				QT: function() {
					return l
				},
				Vb: function() {
					return p
				},
				Yi: function() {
					return y
				},
				ZP: function() {
					return a
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
				c = n("../../../common/intl/intl-react/src/index.ts"),
				u = n("../flags.js");
			const d = new o.Z({
				pseudoLoc: (0, u.J8)("is_pseudo_loc")
			});

			function a(i, ...f) {
				return d.t(i, ...f)
			}
			const p = d;

			function m(i, ...f) {
				return markdown(a(i, f))
			}

			function y(i) {
				if (Number(i) !== 0) {
					if (i % 86400 == 0) return a("time.num_days", {
						smart_count: i / 86400
					});
					if (i % 3600 == 0) return a("time.num_hours", {
						smart_count: i / 3600
					});
					if (i % 60 == 0) return a("time.num_minutes", {
						smart_count: i / 60
					})
				}
				return a("time.num_seconds", {
					smart_count: i
				})
			}

			function t(i, f) {
				return i in f ? f[i] : void 0
			}
			const r = c.cC,
				s = c.oc,
				l = c.QT
		},
		"../react/utils/url.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Ct: function() {
					return B
				},
				Fl: function() {
					return N
				},
				KT: function() {
					return X
				},
				NF: function() {
					return f
				},
				Nw: function() {
					return C
				},
				Pd: function() {
					return h
				},
				Uh: function() {
					return R
				},
				Y_: function() {
					return i
				},
				e1: function() {
					return O
				},
				el: function() {
					return x
				},
				hW: function() {
					return k
				},
				pu: function() {
					return Q
				},
				qR: function() {
					return H
				},
				td: function() {
					return E
				},
				uW: function() {
					return w
				}
			});
			var e = n("../node_modules/query-string/query-string.js"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = n("../react/pages/stream/routes.ts"),
				d = n("../react/pages/r2/routes.ts"),
				a = n("../react/pages/zoneless-workers/routes.ts"),
				p = n("../react/pages/pages/routes.ts");

			function m(M) {
				for (var te = 1; te < arguments.length; te++) {
					var j = arguments[te] != null ? Object(arguments[te]) : {},
						oe = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(j).filter(function(le) {
						return Object.getOwnPropertyDescriptor(j, le).enumerable
					})), oe.forEach(function(le) {
						y(M, le, j[le])
					})
				}
				return M
			}

			function y(M, te, j) {
				return te = t(te), te in M ? Object.defineProperty(M, te, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[te] = j, M
			}

			function t(M) {
				var te = r(M, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function r(M, te) {
				if (typeof M != "object" || M === null) return M;
				var j = M[Symbol.toPrimitive];
				if (j !== void 0) {
					var oe = j.call(M, te || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(M)
			}
			const {
				endsWithSlash: s
			} = c.default, l = (M, te) => {
				const j = M.replace(s, "").split("/");
				return j.slice(0, 2).concat([te]).concat(j.slice(3)).join("/")
			}, i = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), f = M => `/${M.replace(s,"").replace(/^\//,"")}`, E = M => C("add-site", M), h = M => C("billing", M), C = (M, te) => te ? `/${te}${M?`/${M}`:""}` : `/?to=/:account/${M}`, O = () => {
				const M = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return M ? M[1] : null
			}, B = (M, te) => o().stringify(m({}, o().parse(M), te)), L = (M = "") => M.toString().replace(/([\/]{1,})$/, ""), P = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones"], V = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, K = /^\/(\w{32,})(\/[^.]*)?/, Z = M => P.includes(M), z = M => !Z(M), H = M => !Z(M) && K.test(M), x = M => !Z(M) && V.test(M), $ = M => V.exec(M), k = M => {
				if (x(M)) return M.split("/").filter(te => te.length > 0)[1]
			}, _ = M => K.exec(M), w = M => {
				if (H(M)) {
					const te = _(M);
					if (te) return te[1]
				}
			}, D = M => H(M) && M.split("/")[2] === "register-domain", Y = M => D(M) ? M.split("/") : null, J = M => {
				if (x(M)) {
					const [, , , te, j, oe, le, se] = M.split("/");
					return te === "traffic" && j === "load-balancing" && oe === "pools" && le === "edit" && se
				}
			}, R = M => {
				const te = Y(M);
				if (te) return te[3]
			}, T = (M, te) => {
				var j, oe;
				return ((j = M.pattern.match(/\:/g)) !== null && j !== void 0 ? j : []).length - ((oe = te.pattern.match(/\:/g)) !== null && oe !== void 0 ? oe : []).length
			}, A = [...Object.values(u.C), ...Object.values(d._j), ...Object.values(a._j), ...Object.values(p._j)].sort(T);

			function N(M) {
				if (!z(M)) return M;
				for (const se of A)
					if (se.expression.test(M)) return se.pattern;
				const te = Y(M);
				if (te) {
					const [, , se, , ...pe] = te;
					return `/:accountId/${se}/:domainName/${pe.join("/")}`
				}
				if (J(M)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const oe = $(M);
				if (oe) {
					const [, , , , se] = oe;
					return `/:accountId/:zoneName${se||""}`
				}
				const le = _(M);
				if (le) {
					const [, , se] = le;
					return `/:accountId${se||""}`
				}
				return M
			}

			function Q(M) {
				if (!!M) try {
					const j = M.split(".").pop();
					if (j && j.length > 0) return j
				} catch {}
			}

			function X(M, te = document.location.href) {
				try {
					const j = new URL(M),
						oe = new URL(te);
					if (j.origin === oe.origin) return `${j.pathname}${j.search}${j.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(G, v, n) {
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
		"../utils/getDashVersion.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				p: function() {
					return c
				},
				t: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var u, d;
					return (u = window) === null || u === void 0 || (d = u.build) === null || d === void 0 ? void 0 : d.dashVersion
				},
				c = () => {
					var u;
					return ((0, e.parse)((u = document) === null || u === void 0 ? void 0 : u.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initGates.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				n: function() {
					return m
				}
			});
			var e = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				o = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				c = n("../react/app/providers/storeContainer.js"),
				u = n("../node_modules/uuid/dist/esm-browser/v4.js"),
				d = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const a = "ANON_USER_ID";

			function p() {
				var y, t, r, s;
				let l = (y = n.g) === null || y === void 0 || (t = y.bootstrap) === null || t === void 0 || (r = t.data) === null || r === void 0 || (s = r.user) === null || s === void 0 ? void 0 : s.id;
				if (!l) {
					let i = d.Z.get(a);
					if (!i) {
						let f = (0, u.Z)();
						d.Z.set(a, f), i = f
					}
					return i
				}
				return l
			}
			async function m() {
				const y = (0, c.bh)();
				y.dispatch((0, e.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await y.dispatch((0, o.UL)({
					userId: p()
				}))
			}
		},
		"../utils/initSparrow.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Wi: function() {
					return Le
				},
				IM: function() {
					return xe
				},
				yV: function() {
					return Fe
				},
				Ug: function() {
					return Be
				},
				v_: function() {
					return De
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				c = n("../react/utils/bootstrap.ts"),
				u = n("../react/app/providers/storeContainer.js"),
				d = n("../react/common/selectors/languagePreferenceSelector.ts"),
				a = n("../flags.js"),
				p = n("../../../../node_modules/cookie/index.js"),
				m = n("../react/utils/url.ts"),
				y = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				s = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				l = n("../utils/getDashVersion.ts"),
				i = n("../react/common/selectors/accountSelectors.ts");

			function f(ne) {
				for (var S = 1; S < arguments.length; S++) {
					var F = arguments[S] != null ? Object(arguments[S]) : {},
						ee = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(F).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(F, ue).enumerable
					})), ee.forEach(function(ue) {
						E(ne, ue, F[ue])
					})
				}
				return ne
			}

			function E(ne, S, F) {
				return S = h(S), S in ne ? Object.defineProperty(ne, S, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[S] = F, ne
			}

			function h(ne) {
				var S = C(ne, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function C(ne, S) {
				if (typeof ne != "object" || ne === null) return ne;
				var F = ne[Symbol.toPrimitive];
				if (F !== void 0) {
					var ee = F.call(ne, S || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(ne)
			}
			const O = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				B = (0, r.Z)(ne => {
					try {
						return O.assertDecode((0, p.parse)(ne))
					} catch (S) {
						return console.error(S), {}
					}
				}),
				L = ne => (S, F, ee) => {
					try {
						const Se = window.location.pathname,
							Ue = (0, u.bh)().getState(),
							Ve = B(document.cookie),
							We = f({
								page: (0, m.Fl)(ee.page || window.location.pathname),
								dashVersion: (0, l.t)()
							}, Ve);
						if (S === "identify") {
							var ue, fe;
							const Pe = {
								gates: (0, s.T2)(Ue) || {},
								country: (ue = n.g) === null || ue === void 0 || (fe = ue.bootstrap) === null || fe === void 0 ? void 0 : fe.ip_country
							};
							return ne(S, F, f({}, We, Pe, ee))
						} else {
							const Pe = {
								accountId: (0, m.uW)(Se),
								zoneName: (0, m.hW)(Se),
								domainName: (0, m.Uh)(Se)
							};
							if ((0, m.qR)(Se)) {
								var _e;
								const Oe = (0, i.D0)(Ue);
								Pe.isEntAccount = Oe == null || (_e = Oe.meta) === null || _e === void 0 ? void 0 : _e.has_enterprise_zones
							}
							if ((0, m.el)(Se)) {
								var Ce;
								const Oe = (0, y.nA)(Ue);
								Pe.zoneId = Oe == null ? void 0 : Oe.id, Pe.plan = Oe == null || (Ce = Oe.plan) === null || Ce === void 0 ? void 0 : Ce.legacy_id
							}
							return ne(S, F, f({}, We, Pe, ee))
						}
					} catch (Se) {
						return console.error(Se), ne(S, F, ee)
					}
				},
				P = ne => async (S, F, ee) => {
					try {
						return await ne(S, F, ee)
					} catch (ue) {
						if (console.error(ue), !De()) throw ue;
						return {
							status: "rejected",
							reason: ue
						}
					}
				};
			var V = n("../react/common/middleware/sparrow/errors.ts"),
				K = n("../react/pages/firewall/bots/tracking.ts"),
				Z = n("../react/pages/caching/tracking.tsx"),
				z = n("../react/pages/magic/packet-captures/constants.ts"),
				H = n("../react/pages/firewall/page-shield/tracking.ts"),
				x = n("../react/pages/firewall/rulesets/tracking.tsx"),
				$ = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				k = n("../react/pages/spectrum/tracking.tsx"),
				_ = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				w = n("../react/pages/security-center/tracking.ts"),
				D = n("../react/pages/firewall/api-shield/tracking.ts"),
				Y = n("../react/pages/home/configurations/lists/tracking.ts"),
				J = n("../react/pages/traffic/load-balancing/tracking.ts"),
				R = n("../react/pages/home/alerts/tracking.ts"),
				T = n("../react/pages/dns/dns-records/tracking.ts"),
				A = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				N = n("../react/pages/traffic/argo/tracking.ts"),
				Q = n("../react/pages/magic/network-monitoring/constants.ts"),
				X = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				M = n("../react/pages/magic/overview/tracking.ts"),
				te = n("../react/pages/hyperdrive/tracking.ts"),
				j = n("../react/pages/home/domain-registration/tracking.ts"),
				oe = n("../react/pages/zoneless-workers/constants.ts"),
				le = n("../react/pages/pages/constants.ts"),
				se = n("../react/app/components/GlobalHeader/AddProductDropdown.tsx");
			const he = ((ne, S, ...F) => t.eg.union([t.eg.literal(ne), t.eg.literal(S), ...F.map(ee => t.eg.literal(ee))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click cancel downgrade", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create database dropdown", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open configuration switcher sidemodal", "open create database panel", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", ...Object.keys(se.S), "clicked sidebar Discord link", "clicked sidebar Community Forum link", oe.QV.clickedDownloadAnalytics, oe.QV.clickedPrintAnalytics, oe.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", le.QV.toggledPagesSmartPlacement, le.QV.downloadDemoProject, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", K.N3.INITIAL_FETCH_SCORES, K.N3.FETCH_CONFIGURATION, K.N3.INITIAL_FETCH_TIME_SERIES, K.N3.INITIAL_FETCH_ATTRIBUTES, K.N3.UPDATE_SETTINGS, K.N3.DELETE_RULE, K.N3.UPDATE_RULE, K.N3.FETCH_RULES, K.N3.CONFIGURE_BOT_MANAGEMENT, K.N3.WAF_RULES_REDIRECT, _.F.TOGGLE_TCP_PROTECTION, _.F.GET_TCP_PROTECTION_PREFIXES, _.F.CREATE_TCP_PROTECTION_PREFIXES, _.F.CREATE_TCP_PROTECTION_PREFIX, _.F.UPDATE_TCP_PROTECTION_PREFIX, _.F.DELETE_TCP_PROTECTION_PREFIX, _.F.DELETE_TCP_PROTECTION_PREFIXES, _.F.GET_TCP_PROTECTION_ALLOWLIST, _.F.CREATE_TCP_PROTECTION_ALLOWLIST, _.F.UPDATE_TCP_PROTECTION_ALLOWLIST, _.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, _.F.DELETE_TCP_PROTECTION_ALLOWLIST, _.F.GET_SYN_PROTECTION_RULES, _.F.GET_SYN_PROTECTION_RULE, _.F.CREATE_SYN_PROTECTION_RULE, _.F.UPDATE_SYN_PROTECTION_RULE, _.F.DELETE_SYN_PROTECTION_RULE, _.F.GET_TCP_FLOW_PROTECTION_RULES, _.F.GET_TCP_FLOW_PROTECTION_RULE, _.F.CREATE_TCP_FLOW_PROTECTION_RULE, _.F.UPDATE_TCP_FLOW_PROTECTION_RULE, _.F.DELETE_TCP_FLOW_PROTECTION_RULE, _.F.GET_SYN_PROTECTION_FILTERS, _.F.GET_SYN_PROTECTION_FILTER, _.F.CREATE_SYN_PROTECTION_FILTER, _.F.UPDATE_SYN_PROTECTION_FILTER, _.F.DELETE_SYN_PROTECTION_FILTER, _.F.GET_TCP_FLOW_PROTECTION_FILTERS, _.F.GET_TCP_FLOW_PROTECTION_FILTER, _.F.CREATE_TCP_FLOW_PROTECTION_FILTER, _.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, _.F.DELETE_TCP_FLOW_PROTECTION_FILTER, _.F.GET_DNS_PROTECTION_RULES, _.F.GET_DNS_PROTECTION_RULE, _.F.CREATE_DNS_PROTECTION_RULE, _.F.UPDATE_DNS_PROTECTION_RULE, _.F.DELETE_DNS_PROTECTION_RULE, H.F.MANAGE_PAGE_SHIELD_POLICY, H.F.CONFIGURE_PAGE_SHIELD, H.F.VIEW_DETECTED_CONNECTIONS, H.F.VIEW_DETECTED_SCRIPTS, H.F.VIEW_PAGE_SHIELD_POLICIES, H.F.VIEW_PAGE_SHIELD_SETTINGS, Y.y.CREATE_LIST, Y.y.DELETE_LIST, Y.y.ADD_LIST_ITEM, Y.y.DELETE_LIST_ITEM, te.KO.PURCHASE_WORKERS_PAID, te.KO.LIST_CONFIGS, te.KO.CREATE_HYPERDRIVE_CONFIG, te.KO.VIEW_CONFIG_DETAILS, te.KO.UPDATE_CACHING_SETTINGS, te.KO.DELETE_HYPERDRIVE_CONFIG, te.KO.CLICK_HYPERDRIVE_DOCUMENTATION, te.KO.CLICK_GET_STARTED_GUIDE, te.KO.CLICK_CONNECTIVITY_GUIDES, te.KO.CLICK_QUICK_LINK, k.N.CNAME, k.N.IP_ADDRESS, k.N.LB, k.N.UPDATE_CNAME, k.N.UPDATE_IP_ADDRESS, k.N.UPDATE_LB, k.N.DISABLE, Z.N.TIERED_CACHE, Z.N.CACHE_PURGE, Z.N.CACHE_ANALYTICS, ...(0, x.x4)(), $.N.CREATE, $.N.EVENTS, $.N.ANALYTICS, $.N.UPDATE, $.N.GENERATE_PREVIEW, w.R.INITIATE_URL_SCAN, w.R.LOAD_SCAN_INFO, w.v.EXPAND_INSIGHT_ROW, w.v.CLICK_RESOLVE_BUTTON, w.v.FOLLOW_RESOLVE_URL, w.v.MANAGE_INSIGHT, w.v.CLICK_SCAN_NOW, w.v.CLICK_EXPORT_INSIGHTS, w.v.BULK_ARCHIVE, D.Fj[D.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, D.Fj[D.kq.ENDPOINT_MANAGEMENT].detailedMetrics, D.Fj[D.kq.ENDPOINT_MANAGEMENT].createEndpoint, D.Fj[D.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, D.Fj[D.kq.ENDPOINT_MANAGEMENT].deployRouting, D.Fj[D.kq.ENDPOINT_MANAGEMENT].deleteRouting, D.Fj[D.kq.API_DISCOVERY].viewDiscoveredEndpoints, D.Fj[D.kq.API_DISCOVERY].saveDiscoveredEndpoint, D.Fj[D.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, D.Fj[D.kq.SCHEMA_VALIDATION].viewSchemasList, D.Fj[D.kq.SCHEMA_VALIDATION].uploadSchema, D.Fj[D.kq.SCHEMA_VALIDATION].viewSchemaAdoption, D.Fj[D.kq.SCHEMA_VALIDATION].downloadSchema, D.Fj[D.kq.SCHEMA_VALIDATION].deleteSchema, D.Fj[D.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, D.Fj[D.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, D.Fj[D.kq.SEQUENCE_ANALYTICS].viewSequencesPage, D.Fj[D.kq.JWT_VALIDATION].viewJWTRules, D.Fj[D.kq.JWT_VALIDATION].addJWTRule, D.Fj[D.kq.JWT_VALIDATION].editJWTRule, D.Fj[D.kq.JWT_VALIDATION].deleteJWTRule, D.Fj[D.kq.JWT_VALIDATION].reprioritizeJWTRule, D.Fj[D.kq.JWT_VALIDATION].viewJWTConfigs, D.Fj[D.kq.JWT_VALIDATION].addJWTConfig, D.Fj[D.kq.JWT_VALIDATION].editJWTConfig, D.Fj[D.kq.JWT_VALIDATION].deleteJWTConfig, D.Fj[D.kq.SETTINGS].redirectToFirewallRulesTemplate, D.Fj[D.kq.SETTINGS].redirectToPages, D.Fj[D.kq.SETTINGS].listSessionIdentifiers, D.Fj[D.kq.SETTINGS].listRequestsContainingSessionIdentifiers, D.Fj[D.kq.SETTINGS].addOrRemoveSessionIdentifiers, D.Fj[D.kq.SEQUENCE_RULES].listSequenceRules, D.Fj[D.kq.SEQUENCE_RULES].deleteSequenceRule, D.Fj[D.kq.SEQUENCE_RULES].reorderSequenceRule, D.Fj[D.kq.SEQUENCE_RULES].createSequenceRule, D.Fj[D.kq.SEQUENCE_RULES].editSequenceRule, J.Z.CREATE_AND_DEPLOY, J.Z.ANALYTICS, R.y.SECONDARY_DNS_NOTIFICATION_CREATE, R.y.SECONDARY_DNS_NOTIFICATION_UPDATE, R.y.SECONDARY_DNS_NOTIFICATION_DELETE, T.U.ZONE_TRANSFER_SUCCESS, T.U.DNS_RECORD_CREATE, T.U.DNS_RECORD_UPDATE, T.U.DNS_RECORD_DELETE, A.Y.PEER_DNS_CREATE, A.Y.PEER_DNS_UPDATE, A.Y.PEER_DNS_DELETE, A.Y.ZONE_TRANSFER_ENABLE, A.Y.ZONE_TRANSFER_DISABLE, N.V.ARGO_ENABLEMENT, N.V.ARGO_GEO_ANALYTICS_FETCH, N.V.ARGO_GLOBAL_ANALYTICS_FETCH, z.X.VIEW_BUCKETS_LIST, z.X.CREATE_BUCKET, z.X.VALIDATE_BUCKET, z.X.DELETE_BUCKET, z.X.VIEW_CAPTURES_LIST, z.X.CREATE_SIMPLE_CAPTURE, z.X.CREATE_FULL_CAPTURE, z.X.VIEW_FULL_CAPTURE, z.X.DOWNLOAD_SIMPLE_CAPTURE, Q.bK.VIEW_RULES, Q.bK.CREATE_RULE, Q.bK.UPDATE_RULE, Q.bK.DELETE_RULE, Q.bK.VIEW_CONFIGURATION, Q.bK.CREATE_CONFIGURATION, Q.bK.UPDATE_CONFIGURATION, Q.bK.DELETE_CONFIGURATION, M.r8.VIEW_ALERTS, M.r8.VIEW_ALERTS_HISTORY, M.r8.MAGIC_OVERVIEW_ANALYTICS, M.VZ.CREATE_SITE, M.VZ.CREATE_TUNNEL, M.VZ.CREATE_STATIC_ROUTE, X.o4.CLICK_ADAPTIVE_SAMPLING, X.o4.CLICK_TO_LOG_EXPLORER_BANNER, X.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, X.o4.CLICK_SWITCH_TO_RAW_LOGS, X.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", j.U.REGISTER_DOMAIN_SEARCH_SUBMIT, j.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, j.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, j.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, j.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, j.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, j.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, j.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, j.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, j.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, j.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, j.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, j.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, j.U.REGISTER_DOMAIN_CHECKOUT_ERROR, j.U.TRANSFER_DOMAIN_CHANGE_STEP, j.U.RENEW_DOMAIN_COMPLETED, j.U.RESTORE_DOMAIN_INIT, j.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, j.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, j.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, j.U.RESTORE_DOMAIN_FAILURE, j.U.RESTORE_DOMAIN_COMPLETED, j.U.DOMAIN_DELETE_INIT, j.U.DOMAIN_DELETE_COMPLETED, j.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, j.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, j.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, j.U.DOMAIN_DELETE_CONFIRM_DELETE, j.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, j.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, j.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, j.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, j.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL),
				Ee = t.eg.exactStrict(t.eg.object({
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
				ve = (ne, S) => {
					const [F, ee] = W(S);
					let ue, fe;
					return (0, t.nM)(he.decode(ne)) && (ue = new V.Uh(ne)), ee && ee.length > 0 && (fe = new V.oV(ne, ee)), [F, ue, fe]
				},
				W = ne => {
					const S = Ee.decode(ne);
					if ((0, t.nM)(S)) {
						const F = S.left.map(({
							context: ee
						}) => ee.map(({
							key: ue
						}) => ue)).reduce((ee, ue) => ee.concat(ue), []).filter(ee => ee in ne);
						return [ie(F, ne), F]
					}
					return [ne, []]
				},
				ie = (ne, S) => Object.entries(S).reduce((F, [ee, ue]) => (ne.includes(ee) || (F[ee] = ue), F), {}),
				me = ne => (S, F, ee) => {
					const [ue, fe, _e] = ve(F, ee);
					if (fe) throw fe;
					return _e && console.error(_e), ne(S, F, ue)
				};
			var Te = n("../react/utils/zaraz.ts");
			const Re = {
					identify: !0
				},
				Me = ne => (S, F, ee) => (Re[F] || Te.tg === null || Te.tg === void 0 || Te.tg.track(F, ee), ne(S, F, ee));
			var $e = n("../react/utils/cookiePreferences.ts");

			function we(ne) {
				for (var S = 1; S < arguments.length; S++) {
					var F = arguments[S] != null ? Object(arguments[S]) : {},
						ee = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(F).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(F, ue).enumerable
					})), ee.forEach(function(ue) {
						ke(ne, ue, F[ue])
					})
				}
				return ne
			}

			function ke(ne, S, F) {
				return S = je(S), S in ne ? Object.defineProperty(ne, S, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[S] = F, ne
			}

			function je(ne) {
				var S = Ne(ne, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function Ne(ne, S) {
				if (typeof ne != "object" || ne === null) return ne;
				var F = ne[Symbol.toPrimitive];
				if (F !== void 0) {
					var ee = F.call(ne, S || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(ne)
			}
			const Be = ne => {
					o().init(we({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: De() && !(0, c.gm)() && Le(),
						middlewares: [P, me, L, Me]
					}, ne))
				},
				Fe = () => {
					o().identify(we({}, (0, e.getAttribution)(), {
						locale: (0, d.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, a.Jd)()
					}))
				},
				De = () => !0,
				xe = () => {
					(0, $e.kT)("sparrow_id")
				},
				Le = () => (0, $e.Xm)()
		},
		"../utils/initStyles.ts": function(G, v, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const c = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				d = p => {
					const m = [];
					for (let y in p.colors) {
						const t = p.colors[y];
						if (Array.isArray(t) && y !== "categorical")
							for (let r = 0; r < t.length; ++r) m.push(`--cf-${y}-${r}:${t[r]};`)
					}
					return m.join(`
`)
				},
				a = () => {
					const p = (0, e.Yc)(),
						m = `
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
      background-color: ${p?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${p?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${p?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${p?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${p?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${p?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
      ${d(e.Rl)}
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
					let y = document.getElementById(c);
					y ? y.innerText = "" : (y = document.createElement("style"), y.id = c, u.appendChild(y)), y.appendChild(document.createTextNode(m)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(a), v.Z = a
		},
		"../utils/initTracking.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				k: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				c = n("../react/app/providers/storeContainer.js"),
				u = n("../react/common/selectors/userSelectors.ts"),
				d = n("../utils/initSparrow.ts"),
				a = n("../utils/zaraz.ts");
			const p = () => {
					const y = (0, u.PR)((0, c.bh)().getState());
					m(), (0, d.Ug)(), (0, a.bM)(), (y == null ? void 0 : y.id) && o().setUserId(y == null ? void 0 : y.id), (0, d.yV)(), !(0, d.Wi)() && (0, d.IM)(), y ? (0, a.yn)(y) : (0, a.Ro)()
				},
				m = () => {
					var y, t;
					(y = window) === null || y === void 0 || (t = y.OneTrust) === null || t === void 0 || t.OnConsentChanged(() => {
						const r = (0, u.PR)((0, c.bh)().getState());
						(0, d.Wi)() ? (o().setEnabled(!0), (r == null ? void 0 : r.id) ? (o().setUserId(r.id), (0, a.yn)(r)) : (0, a.Ro)(), (0, d.yV)()) : (o().setEnabled(!1), (0, d.IM)())
					})
				}
		},
		"../utils/sentry/initSentry.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				j: function() {
					return Y
				}
			});
			var e = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				o = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				c = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				u = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				d = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				a = n("../react/utils/history.ts"),
				p = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				m = n("../react/utils/url.ts");
			const y = (0, p.Rf)();
			let t;

			function r(J) {
				return s(J, "react-router-v5")
			}

			function s(J, R) {
				return (T, A = !0, N = !0) => {
					A && y && y.location && (t = T({
						name: (0, m.Fl)(y.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": R
						}
					})), N && J.listen && J.listen((Q, X) => {
						if (X && (X === "PUSH" || X === "POP")) {
							t && t.finish();
							const M = {
								"routing.instrumentation": R
							};
							t = T({
								name: (0, m.Fl)(Q.pathname),
								op: "navigation",
								tags: M
							})
						}
					})
				}
			}
			var l = n("../react/app/providers/storeContainer.js"),
				i = n("../react/common/selectors/languagePreferenceSelector.ts"),
				f = n("../flags.js"),
				E = n("../utils/getDashVersion.ts"),
				h = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				C = n("../../../common/intl/intl-core/src/errors.ts"),
				O = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				B = n("../react/common/middleware/sparrow/errors.ts");
			const L = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				P = !0,
				V = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				K = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function Z(J, R, T) {
				return R = z(R), R in J ? Object.defineProperty(J, R, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : J[R] = T, J
			}

			function z(J) {
				var R = H(J, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function H(J, R) {
				if (typeof J != "object" || J === null) return J;
				var T = J[Symbol.toPrimitive];
				if (T !== void 0) {
					var A = T.call(J, R || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(J)
			}
			class x {
				constructor() {
					Z(this, "name", x.id)
				}
				setupOnce() {
					n.g.console && (0, O.hl)(n.g.console, "error", R => (...T) => {
						const A = T.find(N => N instanceof Error);
						if (L && A) {
							let N, Q = !0;
							if (A instanceof B.ez) {
								const X = A instanceof B.oV ? A.invalidProperties : void 0;
								N = {
									tags: {
										"sparrow.eventName": A.eventName
									},
									extra: {
										sparrow: {
											eventName: A.eventName,
											invalidProperties: X
										}
									},
									fingerprint: [A.name ? A.name : "SparrowValidationError"]
								}, Q = !1
							} else if (A instanceof h.SparrowIdCookieError) N = {
								extra: {
									sparrowIdCookie: A.cookie
								},
								fingerprint: [A.name ? A.name : "SparrowIdCookieError"]
							};
							else if (A.name === "ChunkLoadError") {
								N = {
									fingerprint: [A.name]
								};
								try {
									N.tags = {
										chunkId: A.message.split(" ")[2],
										chunkUrl: A.request
									}
								} catch {}
							} else A instanceof C.YB && (N = {
								fingerprint: ["TranslatorError", A.translationKey]
							});
							Q && u.Tb(A, N)
						}
						typeof R == "function" && R.apply(n.g.console, T)
					})
				}
			}
			Z(x, "id", "ConsoleErrorIntegration");
			var $ = null,
				k = n("../utils/sentry/lastSentEventId.ts"),
				_ = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				w = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const D = J => {
					const R = async T => {
						var A, N;
						const Q = {
							envelope: T.body,
							url: J.url,
							isPreviewDeploy: (A = window) === null || A === void 0 || (N = A.build) === null || N === void 0 ? void 0 : N.isPreviewDeploy,
							release: (0, E.t)()
						};
						try {
							const X = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(Q)
							});
							return {
								statusCode: X.status,
								headers: {
									"x-sentry-rate-limits": X.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": X.headers.get("Retry-After")
								}
							}
						} catch (X) {
							return console.log(X), (0, w.$2)(X)
						}
					};
					return _.q(J, R)
				},
				Y = () => {
					if (L && P) {
						var J, R, T, A, N, Q, X, M, te, j;
						let oe = "production";
						((J = window) === null || J === void 0 || (R = J.build) === null || R === void 0 ? void 0 : R.isPreviewDeploy) && (oe += "-preview"), o.S({
							dsn: L,
							release: (0, E.t)(),
							environment: oe,
							ignoreErrors: K,
							allowUrls: V,
							autoSessionTracking: !1,
							integrations: [new c.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new x, new d.jK.BrowserTracing({
								routingInstrumentation: r(a.Z)
							})],
							tracesSampleRate: 0,
							transport: D,
							beforeSend: se => (k.e.setEventId(se.event_id), se)
						});
						const le = (0, l.bh)().getState();
						u.rJ({
							LOCAL_STORAGE_FLAGS: (0, f.Qw)(),
							USER_BETA_FLAGS: (0, f.ki)(),
							meta: {
								connection: {
									type: (T = window) === null || T === void 0 || (A = T.navigator) === null || A === void 0 || (N = A.connection) === null || N === void 0 ? void 0 : N.effectiveType,
									bandwidth: (Q = window) === null || Q === void 0 || (X = Q.navigator) === null || X === void 0 || (M = X.connection) === null || M === void 0 ? void 0 : M.downlink
								},
								languagePreference: (0, i.r)(le),
								isPreviewDeploy: (te = window) === null || te === void 0 || (j = te.build) === null || j === void 0 ? void 0 : j.isPreviewDeploy
							},
							utilGates: (0, e.T2)(le)
						}), window.addEventListener("unhandledrejection", function(se) {})
					}
				}
		},
		"../utils/sentry/lastSentEventId.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let c = "";
				return {
					setEventId: a => (!a || typeof a != "string" || (c = a), c),
					getEventId: () => c
				}
			})()
		},
		"../utils/sentry/setUserId.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				I: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@sentry/core/esm/exports.js");
			const o = c => {
				c ? e.av({
					id: c
				}) : e.av(null)
			}
		},
		"../utils/zaraz.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Ro: function() {
					return r
				},
				bM: function() {
					return m
				},
				tg: function() {
					return p
				},
				yn: function() {
					return t
				}
			});

			function e(s) {
				for (var l = 1; l < arguments.length; l++) {
					var i = arguments[l] != null ? Object(arguments[l]) : {},
						f = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(i).filter(function(E) {
						return Object.getOwnPropertyDescriptor(i, E).enumerable
					})), f.forEach(function(E) {
						o(s, E, i[E])
					})
				}
				return s
			}

			function o(s, l, i) {
				return l = c(l), l in s ? Object.defineProperty(s, l, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[l] = i, s
			}

			function c(s) {
				var l = u(s, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function u(s, l) {
				if (typeof s != "object" || s === null) return s;
				var i = s[Symbol.toPrimitive];
				if (i !== void 0) {
					var f = i.call(s, l || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(s)
			}
			const d = {
					track: (s, l) => null,
					set: (s, l) => console.log(`zaraz.set(${s}, ${l})`)
				},
				a = {
					track: (s, l) => {
						var i;
						(i = window.zaraz) === null || i === void 0 || i.track(s, e({}, l, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (s, l) => {
						var i;
						return (i = window.zaraz) === null || i === void 0 ? void 0 : i.set(s, l)
					}
				};
			let p;
			const m = () => {
					window.zaraz, p = a
				},
				y = ["email", "first_name", "last_name"],
				t = s => {
					y.forEach(l => {
						var i;
						(i = p) === null || i === void 0 || i.set(l, s[l])
					})
				},
				r = () => {
					t({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = n.n(c),
				d = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				a = n("../../../common/intl/intl-react/src/index.ts"),
				p = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				m = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				y = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				t = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				r = n("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				s = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/elements/es/index.js"),
				l = n("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				i = n("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				f = n("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				E = n("../../../common/component/component-filter-bar/src/constants.js"),
				h = n("../../../common/component/component-filter-bar/src/utils.js");

			function C(R) {
				for (var T = 1; T < arguments.length; T++) {
					var A = arguments[T] != null ? Object(arguments[T]) : {},
						N = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && N.push.apply(N, Object.getOwnPropertySymbols(A).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(A, Q).enumerable
					})), N.forEach(function(Q) {
						O(R, Q, A[Q])
					})
				}
				return R
			}

			function O(R, T, A) {
				return T = B(T), T in R ? Object.defineProperty(R, T, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[T] = A, R
			}

			function B(R) {
				var T = L(R, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function L(R, T) {
				if (typeof R != "object" || R === null) return R;
				var A = R[Symbol.toPrimitive];
				if (A !== void 0) {
					var N = A.call(R, T || "default");
					if (typeof N != "object") return N;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(R)
			}
			const P = 70,
				V = (0, d.createStyledComponent)(({
					showOverflow: R
				}) => C({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, R ? {} : {
					maxHeight: P,
					overflow: "hidden"
				})),
				K = (0, d.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				Z = (0, d.createStyledComponent)(({
					theme: R
				}) => ({
					backgroundColor: R.colors.background,
					py: 1,
					px: 2,
					borderRadius: R.radii[2],
					border: `1px solid ${R.colors.gray[7]}`,
					fontSize: R.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: R.colors.gray[4]
					}
				}), "div"),
				z = (0, d.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				H = (0, d.createStyledComponent)(({
					theme: R
				}) => ({
					color: R.colors.gray[4],
					mr: 1
				}), "span"),
				x = (0, d.createStyledComponent)(() => ({
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
				$ = (0, d.createStyledComponent)(({
					buttonStyle: R
				}) => C({
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
				}, R), m.zx),
				k = (0, d.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				_ = (0, d.createStyledComponent)(({
					theme: R
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: R.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: R.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: R.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: R.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				w = (0, d.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				D = R => R.current ? [...R.current.children].reduce((T, A) => (A.offsetTop >= P && T++, T), 0) : 0;
			let Y = 0;
			class J extends e.Component {
				constructor() {
					super();
					O(this, "overflowWrapper", (0, e.createRef)()), O(this, "hasOverflowed", T => {
						const A = D(this.overflowWrapper);
						T.scrollHeight > P && A >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (T.scrollHeight < P || A === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), O(this, "addNewFilter", () => {
						const {
							filterDefinitions: T
						} = this.props, A = (0, h.TE)(T), N = Object.keys(A)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: N,
								operator: (0, h.uv)(N, A),
								value: (0, h.TT)(N, A)
							}
						})
					}), O(this, "handleOpenFilterEdit", T => {
						this.setState({
							openFilter: T,
							filterChanges: C({}, this.props.filters[T])
						})
					}), O(this, "handleRemoveFilterClick", (T, A) => {
						T.stopPropagation(), this.removeFilter(A)
					}), O(this, "removeFilter", T => {
						const {
							handleFiltersChange: A
						} = this.props, N = [...this.props.filters], Q = N[T];
						N.splice(T, 1), A(N), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: Q.key,
							operator: Q.operator,
							value: Q.value
						})
					}), O(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), O(this, "handleFilterSubmit", T => {
						const {
							filterDefinitions: A
						} = this.props;
						T.preventDefault();
						const {
							filterChanges: N
						} = this.state, Q = typeof A[N.key].parse == "function" ? Array.isArray(N.value) ? N.value.map(A[N.key].parse) : A[N.key].parse(N.value) : N.value;
						if (A[N.key].validate && (Array.isArray(Q) ? !Q.every(A[N.key].validate) : !A[N.key].validate(Q))) return this.setState({
							invalid: !0
						});
						const X = [...this.props.filters],
							M = C({}, N, {
								value: Q
							}),
							te = !X[this.state.openFilter];
						te ? X.push(M) : X[this.state.openFilter] = C({}, N), this.props.handleFiltersChange(X, M), (te ? this.props.onAddFilter : this.props.onEditFilter)({
							field: M.key,
							operator: M.operator,
							value: M.value
						}), this.closeOpenFilterChanges()
					}), O(this, "handlePendingKeyChange", ({
						value: T
					}) => {
						const {
							filterDefinitions: A
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: T,
								operator: (0, h.uv)(T, A),
								value: (0, h.TT)(T, A)
							}
						})
					}), O(this, "handlePendingOperatorChange", ({
						value: T
					}) => {
						let A = C({}, this.state.filterChanges, {
							operator: T
						});
						if ((0, h.dr)(T)) {
							var N, Q;
							((N = this.state.filterChanges) === null || N === void 0 ? void 0 : N.value) && !Array.isArray((Q = this.state.filterChanges) === null || Q === void 0 ? void 0 : Q.value) && (A.value = [this.state.filterChanges.value])
						} else {
							var X, M, te;
							((X = this.state.filterChanges) === null || X === void 0 ? void 0 : X.value) && Array.isArray((M = this.state.filterChanges) === null || M === void 0 ? void 0 : M.value) && ((te = this.state.filterChanges) === null || te === void 0 ? void 0 : te.value.length) > 0 && (A.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: A
						})
					}), O(this, "handlePendingValueChange", T => {
						this.setState({
							invalid: !1,
							filterChanges: C({}, this.state.filterChanges, {
								value: T
							})
						})
					}), O(this, "handleShowOverflow", () => {
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
				componentDidUpdate(T) {
					T.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(T) {
					const {
						formatLabel: A,
						filterDefinitions: N
					} = this.props, {
						operator: Q
					} = this.state.filterChanges, X = N[this.state.filterChanges.key], M = this.state.filterChanges.value, te = j => Array.isArray(j) ? j.map(oe => oe.value) : (j == null ? void 0 : j.value) || null;
					if (X.renderValueComponent) return X.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (X.type) {
						case E.k.select:
							return (0, h.dr)(Q) ? o().createElement(l.Z, {
								searchable: !0,
								multi: !0,
								creatable: !X.options,
								value: typeof M.split == "function" ? M == null ? void 0 : M.split(",") : Array.isArray(M) ? M : [],
								options: X.options ? X.options.map(j => ({
									value: j.value || j,
									label: j.label || A(this.state.filterChanges.key, j, T)
								})) : M ? (Array.isArray(M) ? M : M.split(",")).map(j => ({
									label: j,
									value: j
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(a.cC, {
									id: X.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: X.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: j => {
									this.handlePendingValueChange(te(j))
								},
								isValidNewOption: j => {
									const oe = X.validate;
									return !oe && j || j && oe([j])
								},
								getNewOptionData: (j, oe) => ({
									value: j,
									label: oe
								})
							}) : o().createElement(r.hQ, {
								hideLabel: !0,
								value: M,
								options: X.options.map(j => ({
									value: j,
									label: A(this.state.filterChanges.key, j, T)
								})),
								onChange: ({
									value: j
								}) => this.handlePendingValueChange(j)
							});
						case E.k.string:
						default:
							return (0, h.dr)(Q) ? o().createElement(l.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof M.split == "function" ? M == null ? void 0 : M.split(",") : Array.isArray(M) ? M : [],
								options: M ? (Array.isArray(M) ? M : M.split(",")).map(j => ({
									label: j,
									value: j
								})) : [],
								noOptionsMessage: () => null,
								placeholder: T.t("analytics.report.filters.labels.placeholder", {
									example: N[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: j => {
									this.handlePendingValueChange(te(j))
								},
								isValidNewOption: j => {
									const oe = X.validate;
									return !oe && j || j && oe([j])
								},
								getNewOptionData: (j, oe) => ({
									value: j,
									label: oe
								}),
								formatCreateLabel: j => T.t("filter_editor.value_create_label", {
									value: j
								})
							}) : o().createElement(a.oc, null, j => o().createElement(p.I, {
								value: this.state.filterChanges.value,
								onChange: oe => this.handlePendingValueChange(oe.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: j.t("analytics.report.filters.labels.placeholder", {
									example: N[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: T,
						filterDefinitions: A,
						modalStyles: N,
						filterIconType: Q,
						buttonStyle: X
					} = this.props, M = D(this.overflowWrapper), te = `filterPanel${this.state.id}`, j = this.state.openFilter !== null;
					return o().createElement(a.oc, null, oe => o().createElement(s.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(w, null, o().createElement($, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": j,
						"aria-controls": te,
						inverted: !0,
						buttonStyle: X
					}, o().createElement(y.J, {
						type: Q || "add",
						mr: 1,
						label: oe.t("common.add", {
							_: "Add"
						})
					}), o().createElement(a.cC, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(k, null, o().createElement(a.cC, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(V, {
						innerRef: this.overflowWrapper,
						overflowLimit: P,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((le, se) => {
						const {
							key: pe,
							operator: he,
							value: Ee
						} = le, ve = A[pe].ignoreLabelTranslation ? A[pe].label : oe.t(A[pe].label), W = oe.t(`analytics.report.filters.operators.${he}`), ie = Array.isArray(Ee) ? Ee.map(Te => T(pe, Te, oe)).join(", ") : T(pe, Ee, oe), me = `${ve} ${W} ${ie}`;
						return o().createElement(K, {
							key: `${pe}-${he}-${Ee}`,
							title: me
						}, o().createElement(Z, {
							onClick: () => this.handleOpenFilterEdit(se)
						}, o().createElement(s.ZC, {
							display: "flex"
						}, o().createElement(z, null, ve), o().createElement(H, null, W), o().createElement(x, null, ie), (0, h.oN)(le, A) ? o().createElement(t.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(_, {
							onClick: Te => this.handleRemoveFilterClick(Te, se),
							"aria-label": "remove"
						}, o().createElement(y.J, {
							type: "remove"
						})))))
					})), j && o().createElement(f.Z, {
						id: te,
						filterDefinitions: A,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, h.oN)(this.state.filterChanges, A),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: T,
						modalStyles: N
					}), this.state.hasOverflowed && o().createElement(i.Z, {
						count: M,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			O(J, "propTypes", {
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
			}), v.Z = J
		},
		"../../../common/component/component-filter-bar/src/index.js": function(G, v, n) {
			"use strict";
			n.d(v, {
				ME: function() {
					return o.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return c.k
				},
				oN: function() {
					return u.oN
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = n("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				c = n("../../../common/component/component-filter-bar/src/constants.js"),
				u = n("../../../common/component/component-filter-bar/src/utils.js")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				OZ: function() {
					return d
				},
				YB: function() {
					return u
				}
			});

			function e(p, m, y) {
				return m = o(m), m in p ? Object.defineProperty(p, m, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[m] = y, p
			}

			function o(p) {
				var m = c(p, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function c(p, m) {
				if (typeof p != "object" || p === null) return p;
				var y = p[Symbol.toPrimitive];
				if (y !== void 0) {
					var t = y.call(p, m || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(p)
			}
			class u extends Error {
				constructor(m, y) {
					super(y);
					e(this, "translationKey", void 0), this.translationKey = m, this.name = "TranslatorError"
				}
			}
			class d extends u {
				constructor(m) {
					super(m, `Translation key not found: ${m}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var a = null
		},
		"../../../common/intl/intl-react/src/I18nProvider.tsx": function(G, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function u() {
				return u = Object.assign ? Object.assign.bind() : function(y) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (y[s] = r[s])
					}
					return y
				}, u.apply(this, arguments)
			}

			function d(y, t) {
				if (y == null) return {};
				var r = a(y, t),
					s, l;
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(y);
					for (l = 0; l < i.length; l++) s = i[l], !(t.indexOf(s) >= 0) && (!Object.prototype.propertyIsEnumerable.call(y, s) || (r[s] = y[s]))
				}
				return r
			}

			function a(y, t) {
				if (y == null) return {};
				var r = {},
					s = Object.keys(y),
					l, i;
				for (i = 0; i < s.length; i++) l = s[i], !(t.indexOf(l) >= 0) && (r[l] = y[l]);
				return r
			}
			class p extends e.Component {
				constructor(t) {
					super(t);
					const {
						locale: r,
						phrases: s,
						translator: l
					} = t;
					r && l.locale(r), s && l.extend(s)
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
			const m = y => {
				let {
					translator: t
				} = y, r = d(y, ["translator"]);
				const s = () => e.createElement(c.oc, null, l => e.createElement(p, u({
					translator: l
				}, r)));
				return t ? (t.locale(r.locale), e.createElement(c.bd, {
					value: t
				}, s())) : s()
			};
			v.Z = m
		},
		"../../../common/intl/intl-react/src/index.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				oc: function() {
					return m.oc
				},
				lm: function() {
					return o.Z
				},
				bd: function() {
					return e.Z
				},
				RD: function() {
					return K
				},
				cC: function() {
					return B
				},
				QT: function() {
					return P.Q
				}
			});
			var e = n("../../../common/intl/intl-react/src/I18nProvider.tsx"),
				o = n("../../../common/intl/intl-react/src/I18nLoader.tsx"),
				c = n("webpack/sharing/consume/default/react/react"),
				u = n.n(c),
				d = n("../../../../node_modules/lodash/escape.js"),
				a = n.n(d),
				p = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				m = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function y(Z) {
				for (var z = 1; z < arguments.length; z++) {
					var H = arguments[z] != null ? Object(arguments[z]) : {},
						x = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(H).filter(function($) {
						return Object.getOwnPropertyDescriptor(H, $).enumerable
					})), x.forEach(function($) {
						t(Z, $, H[$])
					})
				}
				return Z
			}

			function t(Z, z, H) {
				return z = r(z), z in Z ? Object.defineProperty(Z, z, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[z] = H, Z
			}

			function r(Z) {
				var z = s(Z, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function s(Z, z) {
				if (typeof Z != "object" || Z === null) return Z;
				var H = Z[Symbol.toPrimitive];
				if (H !== void 0) {
					var x = H.call(Z, z || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(Z)
			}

			function l() {
				return l = Object.assign ? Object.assign.bind() : function(Z) {
					for (var z = 1; z < arguments.length; z++) {
						var H = arguments[z];
						for (var x in H) Object.prototype.hasOwnProperty.call(H, x) && (Z[x] = H[x])
					}
					return Z
				}, l.apply(this, arguments)
			}
			const i = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				f = /(?:\r\n|\r|\n)/g;

			function E(Z, z, H) {
				return c.createElement("span", {
					key: Z,
					"data-testid": H,
					dangerouslySetInnerHTML: {
						__html: z
					}
				})
			}

			function h(Z, z = [], H = [], x) {
				let $ = 0;
				const k = Z.replace(f, "").split(i);
				if (k.length === 1) return [E($, Z, x)];
				const _ = [],
					w = k.shift();
				if (w) {
					const D = E($, w, x);
					_.push(D), typeof D != "string" && $++
				}
				for (const [D, Y, J] of C(k)) {
					z[D] || window.console && console.warn(`Missing Component for translation key: ${Z}, index: ${D}. Fragment will be used.`);
					const R = z[D] || c.Fragment,
						T = H[D] || {},
						A = E(0, Y);
					if (_.push(c.createElement(R, l({
							key: $
						}, T), A)), $++, J) {
						const N = E($, J);
						_.push(N), typeof N != "string" && $++
					}
				}
				return _
			}

			function C(Z) {
				if (!Z.length) return [];
				const [z, H, x, $] = Z.slice(0, 4);
				return [
					[parseInt(z || x), H || "", $]
				].concat(C(Z.slice(4, Z.length)))
			}

			function O({
				id: Z = "",
				smartCount: z,
				_: H,
				values: x,
				applyMarkdown: $,
				Components: k,
				componentProps: _,
				testId: w
			}) {
				return c.createElement(m.oc, null, D => {
					x && Object.keys(x).forEach(T => x[T] = a()(x[T])), _ && _.forEach(T => {
						Object.keys(T).forEach(A => {
							typeof T[A] == "string" && (T[A] = a()(T[A]))
						})
					});
					const Y = y({
							smart_count: z,
							_: H
						}, x),
						J = $ ? (0, p.Z)(D.t(Z.toString(), Y), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : D.t(Z.toString(), Y),
						R = h(J, k, _, w);
					return R.length > 1 ? c.createElement(c.Fragment, null, R) : R[0]
				})
			}
			var B = O,
				L = n("../../../common/intl/intl-react/src/withTranslator.tsx"),
				P = n("../../../common/intl/intl-react/src/useI18n.tsx"),
				V = n("../../../common/intl/intl-types/src/index.ts"),
				K = u().createContext(V.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Aw: function() {
					return V
				},
				Ib: function() {
					return L
				},
				Ks: function() {
					return K
				},
				MS: function() {
					return P
				},
				PN: function() {
					return f
				},
				Pp: function() {
					return u
				},
				Q3: function() {
					return l
				},
				TS: function() {
					return i
				},
				W7: function() {
					return C
				},
				dN: function() {
					return Z
				},
				eF: function() {
					return B
				},
				qp: function() {
					return t
				},
				wR: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				c = e.eg.object({
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
				d = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				a = e.eg.object({
					registrant: u.optional,
					technical: u.optional,
					administrator: u.optional,
					billing: u.optional
				}),
				p = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: a.optional,
					years: e.eg.number
				}),
				m = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let y = function(z) {
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
						status: e.eg.enum(y).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: m.optional,
					landing: e.eg.union([c, e.eg.boolean]).optional,
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
					transfer_conditions: d.optional,
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
				i = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let f = function(z) {
				return z.PENDING = "pending", z.VERIFIED = "verified", z.REJECTED = "rejected", z.PENDING_DELETE = "pending_delete", z.DELETED = "deleted", z
			}({});
			const E = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(f),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				h = e.eg.object({
					designated_approvers: e.eg.array(E)
				});
			let C = function(z) {
				return z.PENDING = "pending", z.PENDING_UPDATE = "pending_update", z.ENABLED = "enabled", z.DISABLED = "disabled", z
			}({});
			const O = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(C)
				}),
				B = e.eg.intersection([O, h]),
				L = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let P = function(z) {
				return z.UNLOCK_APPROVAL = "UnlockApprovalRequest", z.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", z.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", z.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", z
			}({});
			const V = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				K = e.eg.object({
					message: e.eg.string
				}),
				Z = e.eg.object({
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
		"../../../common/util/types/src/utils/index.ts": function(G, v, n) {
			"use strict";
			n.d(v, {
				Yd: function() {
					return e
				},
				vE: function() {
					return o
				}
			});

			function e(c) {
				return Object.keys(c)
			}
			const o = (c, u) => {
				if (u !== void 0) throw new Error("Unexpected object: " + c);
				return u
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(G, v, n) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(c) {
				if (!n.o(e, c)) return Promise.resolve().then(function() {
					var a = new Error("Cannot find module '" + c + "'");
					throw a.code = "MODULE_NOT_FOUND", a
				});
				var u = e[c],
					d = u[0];
				return n.e(u[1]).then(function() {
					return n.t(d, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", G.exports = o
		}
	}
]);

//# debugId=89881048-b1f6-5a9b-93c3-cddbaa9cc16e