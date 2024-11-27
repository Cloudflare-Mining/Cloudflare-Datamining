[![NPM version][npm-image]][npm-url]
[![Downloads][download-badge]][npm-url]

# CloudFlare API v4

The Cloudflare4 module allows you to communicate with the [CloudFlare V4 API](https://api.cloudflare.com) from node.js in a promise friendly manner.

It also supports automatic request retries.

## Installation

This module is published in NPM:

```
npm install cloudflare4 --save
```

The `--save` tells NPM to automatically add it to your `package.json` file

## Usage

```js
// Import a module
var CloudFlareAPI = require('cloudflare4');

// Create an instance with your API V4 credentials
var api = new CloudFlareAPI({email: 'email@domain.com', key: 'my_key'});

// Get things done
api.userFirewallAccessRuleGetAll().then(function (rules) {
	console.log(rules);
});
```

## Config
```js
new CloudFlareAPI({
	email: 'email@domain.com',
	key: 'my_key',
	itemsPerPage: 100, // default=100
	maxRetries: 5, // default=5
	raw: false // default=false,
	autoPagination: false, // default=false
	autoPaginationConcurrency: 1 // default=1
});
```

## Pagination
you can pass pagination params into any method that has a `body` or `query` argument.

```js
api.userFirewallAccessRuleGetAll({per_page: 1, page: 2}).then(function (rules) {
	console.log(rules);
});
```

or with auto-pagination

```js
api.userFirewallAccessRuleGetAll({auto_pagination: true, auto_pagination_concurrency: 1}).then(function (rules) {
	console.log(rules);
});
```

**Note: if you use auto_pagination for a GetAll the raw argument is no longer respected**

## Raw
if you set raw it will return the full response body including pagination details

```js
api.userGet(true)
```

would return
```
{
	result: { 
		id: 'dc19c3231tds452eb4ebc123d6eb4c99',
		email: 'email@domain.com',
		username: 'username',
		first_name: 'Foo',
		last_name: 'Bar',
		telephone: '5555555555',
		country: null,
		zipcode: null,
		two_factor_authentication_enabled: false,
		two_factor_authentication_locked: false,
		created_on: '2014-09-29T13:21:56.807670Z',
		modified_on: '2015-10-04T00:02:50.855108Z',
		organizations: null,
		has_pro_zones: true,
		has_business_zones: false,
		has_enterprise_zones: false
	},
	success: true,
	errors: [],
	messages: []
}
```

and with raw set to false (the default), it would return

```
{ 
	id: 'dc19c3231tds452eb4ebc123d6eb4c99',
	email: 'email@domain.com',
	username: 'username',
	first_name: 'Foo',
	last_name: 'Bar',
	telephone: '5555555555',
	country: null,
	zipcode: null,
	two_factor_authentication_enabled: false,
	two_factor_authentication_locked: false,
	created_on: '2014-09-29T13:21:56.807670Z',
	modified_on: '2015-10-04T00:02:50.855108Z',
	organizations: null,
	has_pro_zones: true,
	has_business_zones: false,
	has_enterprise_zones: false
}
```

## Debugging
we use the debug module so you can debug the http requests by doing the following

```
DEBUG=http node myfile.js
```

also all methods enforce type checking so invalid usage would result in errors like this

![Debug Example](https://img42.com/AvvQr+)

## Methods

All methods follow the [official API documentation](https://api.cloudflare.com/).

## [User](https://api.cloudflare.com/#user)
- [userGet([Boolean raw])](https://api.cloudflare.com/#user-user-details)
- [userUpdate(Object body [, Boolean raw])](https://api.cloudflare.com/#user-update-user)

## [User Billing Profile](https://api.cloudflare.com/#user-billing-profile)
- [userBillingProfileGet([Boolean raw])](https://api.cloudflare.com/#user-billing-profile-billing-profile)
- [userBillingProfileNew(Object body [, Boolean raw])](https://api.cloudflare.com/#user-billing-profile-create-billing-profile)
- [userBillingProfileUpdate(Object body [, Boolean raw])](https://api.cloudflare.com/#user-billing-profile-update-billing-profile)
- [userBillingProfileVATUpdate(Object body [, Boolean raw])](https://api.cloudflare.com/#user-billing-profile-update-particular-elements-of-your-billing-profile)
- [userBillingProfileDestroy([Boolean raw])](https://api.cloudflare.com/#user-billing-profile-delete-billing-profile)

## [User Billing History](https://api.cloudflare.com/#user-billing-history)
- [userBillingHistoryGetAll(Object body [, Boolean raw])](https://api.cloudflare.com/#user-billing-history-billing-history)

## [App Subscription](https://api.cloudflare.com/#app-subscription)
- [userBillingSubscriptionsAppGetAll(Object body [, Boolean raw])](https://api.cloudflare.com/#app-subscription-search-sort-and-paginate)
- [userBillingSubscriptionsAppGet(String identifer [, Boolean raw])](https://api.cloudflare.com/#app-subscription-info)

## [Zone Subscription](https://api.cloudflare.com/#zone-subscription)
- [userBillingSubscriptionsZoneGetAll(Object body [, Boolean raw])](https://api.cloudflare.com/#zone-subscription-search-sort-and-paginate)
- [userBillingSubscriptionsZoneGet(String identifer [, Boolean raw])](https://api.cloudflare.com/#zone-subscription-info)

## [User-level Firewall access rule](https://api.cloudflare.com/#user-level-firewall-access-rule)
- [userFirewallAccessRuleGetAll([Object query, Boolean raw])](https://api.cloudflare.com/#user-level-firewall-access-rule-list-access-rules)
- [userFirewallAccessRuleNew(Object body [, Boolean raw])](https://api.cloudflare.com/#user-level-firewall-access-rule-create-access-rule)
- [userFirewallAccessRuleUpdate(String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#user-level-firewall-access-rule-update-access-rule)
- [userFirewallAccessRuleDestroy(String identifier [, Boolean raw])](https://api.cloudflare.com/#user-level-firewall-access-rule-delete-access-rule)

## [User&#x27;s Organizations](https://api.cloudflare.com/#user-s-organizations)
- [userOrganizationGetAll([Object query, Boolean raw])](https://api.cloudflare.com/#user-s-organizations-list-organizations)
- [userOrganizationGet(String identifier [, Boolean raw])](https://api.cloudflare.com/#user-s-organizations-organization-details)
- [userOrganizationDestroy(String identifier [, Boolean raw])](https://api.cloudflare.com/#user-s-organizations-leave-organization)

## [User&#x27;s Invites](https://api.cloudflare.com/#user-s-invites)
- [userInviteGetAll([Object query, Boolean raw])](https://api.cloudflare.com/#user-s-invites-list-invitations)
- [userInviteGet(String identifier [, Boolean raw])](https://api.cloudflare.com/#user-s-invites-invitation-details)
- [userInviteUpdate(String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#user-s-invites-respond-to-invitation)

## [Zone](https://api.cloudflare.com/#zone)
- [zoneNew(Object body [, Boolean raw])](https://api.cloudflare.com/#zone-create-a-zone)
- [zoneActivationCheckNew(String identifier [, Boolean raw])](https://api.cloudflare.com/#zone-initiate-another-zone-activation-check)
- [zoneGetAll([Object query, Boolean raw])](https://api.cloudflare.com/#zone-list-zones)
- [zoneGet(String identifier [, Boolean raw])](https://api.cloudflare.com/#zone-zone-details)
- [zoneUpdate(String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-edit-zone-properties)
- [zonePurgeCache(String identifier [, Boolean raw])](https://api.cloudflare.com/#zone-purge-all-files)
- [zonePurgeCacheBy(String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-purge-individual-files-by-url-and-cache-tags)
- [zoneDestroy(String identifier, [, Boolean raw])](https://api.cloudflare.com/#zone-delete-a-zone)

## [Zone Plan](https://api.cloudflare.com/#zone-plan)
- [zoneAvailablePlanGetAll(String identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#zone-plan-available-plans)
- [zoneAvailablePlanGet(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#zone-plan-plan-details)

## [Worker Script](https://api.cloudflare.com/#worker-script-properties)
- [zoneWorkersScriptGet (String identifier)](https://api.cloudflare.com/#worker-script-download-worker)
- [zoneWorkersScriptUpdate (String identifier, String script)](https://api.cloudflare.com/#worker-script-upload-worker)

## [Zone Settings](https://api.cloudflare.com/#zone-settings)
- [zoneSettingsGetAll(String zone_identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-all-zone-settings)
- [zoneSettingsAdvancedDDOSGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-advanced-ddos-setting)
- [zoneSettingsAlwaysOnlineGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-always-online-setting)
- [zoneSettingsBrowserCacheTTLGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-browser-cache-ttl-setting)
- [zoneSettingsBrowserCheckGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-browser-check-setting)
- [zoneSettingsCacheLevelGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-cache-level-setting)
- [zoneSettingsChallengeTTLGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-challenge-ttl-setting)
- [zoneSettingsDevelopmentModeGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-development-mode-setting)
- [zoneSettingsEmailObfuscationGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-email-obfuscation-setting)
- [zoneSettingsHotlinkProtectionGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-hotlink-protection-setting)
- [zoneSettingsIPGeolocationGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-ip-geolocation-setting)
- [zoneSettingsIPv6Get(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-ipv6-setting)
- [zoneSettingsMinifyGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-minify-setting)
- [zoneSettingsMobileRedirectGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-mobile-redirect-setting)
- [zoneSettingsMirageGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-mirage-setting)
- [zoneSettingsOriginErrorPagePassThruGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-enable-error-pages-on-setting)
- [zoneSettingsPolishGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-polish-setting)
- [zoneSettingsPrefetchPreloadGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-prefetch-preload-setting)
- [zoneSettingsResponseBufferingGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-response-buffering-setting)
- [zoneSettingsRocketLoaderGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-rocket-loader-setting)
- [zoneSettingsSecurityHeaderGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-security-header-hsts-setting)
- [zoneSettingsSecurityLevelGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-security-level-setting)
- [zoneSettingsServerSideExcludeGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-server-side-exclude-setting)
- [zoneSettingsSortQueryStringForCacheGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-enable-query-string-sort-setting)
- [zoneSettingsSSLGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-ssl-setting)
- [zoneSettingsTLS1Point2OnlyGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-zone-enable-tls-1-2-setting)
- [zoneSettingsTLSClientAuthGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-tls-client-auth-setting)
- [zoneSettingsTrueClientIPHeaderGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-true-client-ip-setting)
- [zoneSettingsWAFGet(String zone_identifier [, Boolean raw])](https://api.cloudflare.com/#zone-settings-get-web-application-firewall-waf-setting)
- [zoneSettingsUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-edit-zone-settings-info)
- [zoneSettingsAlwaysOnlineUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-always-online-setting)
- [zoneSettingsBrowserCacheTTLUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-browser-cache-ttl-setting)
- [zoneSettingsBrowserCheckUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-browser-check-setting)
- [zoneSettingsCacheLevelUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-cache-level-setting)
- [zoneSettingsChallengeTTLUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-challenge-ttl-setting)
- [zoneSettingsDevelopmentModeUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-development-mode-setting)
- [zoneSettingsEmailObfuscationUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-email-obfuscation-setting)
- [zoneSettingsOriginErrorPagePassThruUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-enable-error-pages-on-setting)
- [zoneSettingsSortQueryStringForCacheUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-enable-query-string-sort-setting)
- [zoneSettingsHotlinkProtectionUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-hotlink-protection-setting)
- [zoneSettingsIPGeolocationUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-ip-geolocation-setting)
- [zoneSettingsIPv6Update(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-ipv6-setting)
- [zoneSettingsMinifyUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-minify-setting)
- [zoneSettingsMobileRedirectUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-mobile-redirect-setting)
- [zoneSettingsMirageUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-mirage-setting)
- [zoneSettingsPolishUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-polish-setting)
- [zoneSettingsPrefetchPreloadUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-prefetch-preload-setting)
- [zoneSettingsResponseBufferingUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-response-buffering-setting)
- [zoneSettingsRocketLoaderUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-rocket-loader-setting)
- [zoneSettingsSecurityHeaderUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-security-header-hsts-setting)
- [zoneSettingsSecurityLevelUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-security-level-setting)
- [zoneSettingsServerSideExcludeUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-server-side-exclude-setting)
- [zoneSettingsSSLUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-ssl-setting)
- [zoneSettingsTLSClientAuthUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-tls-client-auth-setting)
- [zoneSettingsTrueClientIPHeaderUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-true-client-ip-setting)
- [zoneSettingsTLS1Point2OnlyUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-tls-1-2-setting)
- [zoneSettingsWAFUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#zone-settings-change-web-application-firewall-waf-setting)

## [DNS Records for a Zone](https://api.cloudflare.com/#dns-records-for-a-zone)
- [zoneDNSRecordNew(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#dns-records-for-a-zone-create-dns-record)
- [zoneDNSRecordGetAll(String zone_identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#dns-records-for-a-zone-list-dns-records)
- [zoneDNSRecordGet(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#dns-records-for-a-zone-dns-record-details)
- [zoneDNSRecordUpdate(String zone_identifier, String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#dns-records-for-a-zone-update-dns-record)
- [zoneDNSRecordDestroy(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#dns-records-for-a-zone-delete-dns-record)

## [Railgun connections for a Zone](https://api.cloudflare.com/#railgun-connections-for-a-zone)
- [zoneRailgunGetAll(String zone_identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#railgun-connections-for-a-zone-get-available-railguns)
- [zoneRailgunGet(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#railgun-connections-for-a-zone-get-railgun-details)
- [zoneRailgunDiagnoseGet(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#railgun-connections-for-a-zone-test-railgun-connection)
- [zoneRailgunConnectedUpdate(String zone_identifier, String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#railgun-connections-for-a-zone-connect-or-disconnect-a-railgun)

## [Zone Analytics](https://api.cloudflare.com/#zone-analytics)
- [zoneAnalyticsDashboardGet(String zone_identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#zone-analytics-dashboard)
- [zoneAnalyticsColosGetAll(String zone_identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#zone-analytics-analytics-by-co-locations)

## [Railgun](https://api.cloudflare.com/#railgun)
- [railgunNew(Object body [, Boolean raw])](https://api.cloudflare.com/#railgun-create-railgun)
- [railgunGetAll([Object query, Boolean raw])](https://api.cloudflare.com/#railgun-list-railguns)
- [railgunGet(String identifier [, Boolean raw])](https://api.cloudflare.com/#railgun-railgun-details)
- [railgunZoneGetAll(String identifier, [Object query, Boolean raw])](https://api.cloudflare.com/#railgun-get-zones-connected-to-a-railgun)
- [railgunEnabledUpdate(String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#railgun-enable-or-disable-a-railgun)
- [railgunDestroy(String identifier [, Boolean raw])](https://api.cloudflare.com/#railgun-delete-railgun)

## [Custom Pages for a Zone](https://api.cloudflare.com/#custom-pages-for-a-zone)
- [zoneCustomPageGetAll(String zone_identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#custom-pages-for-a-zone-available-custom-pages)
- [zoneCustomPageGet(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#custom-pages-for-a-zone-custom-page-details)
- [zoneCustomPageUpdate(String zone_identifier, String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#custom-pages-for-a-zone-update-custom-page-url)

## [Custom SSL for a Zone](https://api.cloudflare.com/#custom-ssl-for-a-zone)
- [zoneCustomCertificateNew(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#custom-ssl-for-a-zone-create-ssl-configuration)
- [zoneCustomCertificateGetAll(String zone_identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#custom-ssl-for-a-zone-list-ssl-configurations)
- [zoneCustomCertificateGet(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#custom-ssl-for-a-zone-ssl-configuration-details)
- [zoneCustomCertificateUpdate(String zone_identifier, String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#custom-ssl-for-a-zone-update-ssl-configuration)
- [zoneCustomCertificatePriorityUpdate(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#custom-ssl-for-a-zone-re-prioritize-ssl-certificates)
- [zoneCustomCertificateDestroy(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#custom-ssl-for-a-zone-delete-an-ssl-certificate)

## [Keyless SSL for a Zone](https://api.cloudflare.com/#keyless-ssl-for-a-zone)
- [zoneKeylessCertificateNew(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#keyless-ssl-for-a-zone-create-a-keyless-ssl-configuration)
- [zoneKeylessCertificateGetAll(String zone_identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#keyless-ssl-for-a-zone-list-keyless-ssl-configurations)
- [zoneKeylessCertificateGet(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#keyless-ssl-for-a-zone-keyless-ssl-details)
- [zoneKeylessCertificateUpdate(String zone_identifier, String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#keyless-ssl-for-a-zone-update-keyless-configuration)
- [zoneKeylessCertificateDestroy(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#keyless-ssl-for-a-zone-delete-keyless-configuration)

## [Firewall access rule for a Zone](https://api.cloudflare.com/#firewall-access-rule-for-a-zone)
- [zoneFirewallAccessRuleGetAll(String zone_identifier, [Object query, Boolean raw])](https://api.cloudflare.com/#firewall-access-rule-for-a-zone-list-access-rules)
- [zoneFirewallAccessRuleNew(String zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#firewall-access-rule-for-a-zone-create-access-rule)
- [zoneFirewallAccessRuleUpdate(String zone_identifier, String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#firewall-access-rule-for-a-zone-update-access-rule)
- [zoneFirewallAccessRuleDestroy(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#firewall-access-rule-for-a-zone-delete-access-rule)

## [WAF Rule Packages](https://api.cloudflare.com/#waf-rule-packages)
- [zoneFirewallWAFPackageGetAll(String zone_identifier, [Object query, Boolean raw])](https://api.cloudflare.com/#waf-rule-packages-list-firewall-packages)
- [zoneFirewallWAFPackageGet(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#waf-rule-packages-firewall-package-info)
- [zoneFirewallWAFPackageUpdate(String zone_identifier, String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#waf-rule-packages-change-anomaly-detection-web-application-firewall-package-settings)

## [WAF Rule Groups](https://api.cloudflare.com/#waf-rule-groups)
- [zoneFirewallWAFRuleGroupGetAll(String zone_identifier, String package_identifier, [Object query, Boolean raw])](https://api.cloudflare.com/#waf-rule-groups-list-rule-groups)
- [zoneFirewallWAFRuleGroupGet(String zone_identifier, String package_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#waf-rule-groups-rule-group-info)
- [zoneFirewallWAFRuleGroupUpdate(String zone_identifier, String package_identifier, String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#waf-rule-groups-update-rule-group)

## [WAF Rules](https://api.cloudflare.com/#waf-rules)
- [zoneFirewallWAFPackageRuleGetAll(String zone_identifier, String package_identifier, [Object query, Boolean raw])](https://api.cloudflare.com/#waf-rules-list-rules)
- [zoneFirewallWAFPackageRuleGet(String zone_identifier, String package_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#waf-rules-rule-info)
- [zoneFirewallWAFPackageRuleUpdate(String zone_identifier, String package_identifier, String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#waf-rules-update-rule)

## [Organizations](https://api.cloudflare.com/#organizations)
- [organizationGet(String organization_identifier [, Boolean raw])](https://api.cloudflare.com/#organizations-organization-details)
- [organizationUpdate(String organization_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#organizations-update-organization)

## [Organization Members](https://api.cloudflare.com/#organization-members)
- [organizationMemberGetAll(String organization_identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#organization-members-list-members)
- [organizationMemberGet(String organization_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#organization-members-member-details)
- [organizationMemberUpdate(String organization_identifier, String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#organization-members-update-member-roles)
- [organizationMemberDestroy(String organization_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#organization-members-remove-member)

## [Organization Invites](https://api.cloudflare.com/#organization-invites)
- [organizationInviteNew(String organization_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#organization-invites-create-invitation)
- [organizationInviteGetAll(String organization_identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#organization-invites-list-invitations)
- [organizationInviteGet(String organization_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#organization-invites-invitation-details)
- [organizationInviteUpdate(String organization_identifier, String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#organization-invites-update-invitation-roles)
- [organizationInviteDestroy(String organization_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#organization-invites-cancel-invitation)

## [Organization Roles](https://api.cloudflare.com/#organization-roles)
- [organizationRoleGetAll(String organization_identifier, String identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#organization-roles-list-roles)
- [organizationRoleGet(String organization_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#organization-roles-role-details)

## [Organization-level Firewall access rule](https://api.cloudflare.com/#organization-level-firewall-access-rule)
- [organizationFirewallAccessRuleGetAll(String organization_identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#organization-level-firewall-access-rule-list-access-rules)
- [organizationFirewallAccessRuleNew(String organization_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#organization-level-firewall-access-rule-create-access-rule)
- [organizationFirewallAccessRuleUpdate(String organization_identifier, String identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#organization-level-firewall-access-rule-update-access-rule)
- [organizationFirewallAccessRuleDestroy(String organization_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#organization-level-firewall-access-rule-delete-access-rule)
## [Page rules for a Zone](https://api.cloudflare.com/#page-rules-for-a-zone)
- [zonePageRulesGetAll(String zone_identifier [, Object query, Boolean raw])](https://api.cloudflare.com/#page-rules-for-a-zone-list-page-rules)
- [zonePageRulesGet(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#page-rules-for-a-zone-page-rule-details)
- [zonePageRulesNew(Striung zone_identifier, Object body [, Boolean raw])](https://api.cloudflare.com/#page-rules-for-a-zone-create-a-page-rule)
- [zonePageRulesUpdate(String zone_identifier, String identifier , Object body [, Boolean raw])](https://api.cloudflare.com/#page-rules-for-a-zone-update-a-page-rule)
- [zonePageRulesChange(String zone_identifier, String identifier [, Object body , Boolean raw])](https://api.cloudflare.com/#page-rules-for-a-zone-change-a-page-rule)
- [zonePageRulesDestroy(String zone_identifier, String identifier [, Boolean raw])](https://api.cloudflare.com/#page-rules-for-a-zone-delete-a-page-rule)

[npm-url]: https://npmjs.org/package/cloudflare4
[npm-image]: https://img.shields.io/npm/v/cloudflare4.svg?style=flat-square
[download-badge]: http://img.shields.io/npm/dm/cloudflare4.svg?style=flat-square
