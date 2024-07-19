export enum RulesetKind {
  Custom = 'custom',
  Root = 'root',
  Managed = 'managed',
  Zone = 'zone',
  RateLimit = 'ratelimit'
}

export enum RulesetPhase {
  Cache = 'http_request_cache_settings',
  HttpConfigSettings = 'http_config_settings',
  HttpLogCustomFields = 'http_log_custom_fields',
  HttpRateLimit = 'http_ratelimit',
  HttpRequestDynamicRedirect = 'http_request_dynamic_redirect',
  HttpRequestFirewallCustom = 'http_request_firewall_custom',
  HttpRequestFirewallManaged = 'http_request_firewall_managed',
  HttpRequestFirewallRateLimit = 'http_request_firewall_ratelimit',
  HttpRequestLateTransform = 'http_request_late_transform',
  HttpRequestMain = 'http_request_main',
  HttpRequestOrigin = 'http_request_origin',
  HttpRequestRedirect = 'http_request_redirect',
  HttpRequestSanitize = 'http_request_sanitize',
  HttpRequestSBFM = 'http_request_sbfm',
  HttpRequestTransform = 'http_request_transform',
  HttpResponseCompression = 'http_response_compression',
  HttpResponseFirewallManaged = 'http_response_firewall_managed',
  HttpResponseTransform = 'http_response_headers_transform',
  L4DDoS = 'ddos_l4',
  L7DDoS = 'ddos_l7',
  MagicIDS = 'magic_transit_ids_managed',
  MagicManaged = 'magic_transit_managed',
  MagicTransit = 'magic_transit',
  MagicTransitRateLimit = 'magic_transit_rate_limit'
}
export enum Actions {
  Execute = 'execute',
  All = 'all',
  Block = 'block',
  JSChallenge = 'js_challenge',
  Challenge = 'challenge',
  Allow = 'allow',
  Bypass = 'bypass',
  Log = 'log',
  Rewrite = 'rewrite',
  Score = 'score',
  Skip = 'skip',
  Managed_Challenge = 'managed_challenge',
  DDoS_Dynamic = 'ddos_dynamic',
  Select_Config = 'select_config',
  Set_Config = 'set_config',
  Reset = 'reset',
  Redirect = 'redirect'
}

export enum BypassProducts {
  ZONE_LOCKDOWN = 'zoneLockdown',
  UA_BLOCK = 'uaBlock',
  BIC = 'bic',
  HOT = 'hot',
  SECURITY_LEVEL = 'securityLevel',
  RATE_LIMIT = 'rateLimit',
  WAF = 'waf'
}

export enum SensitivityLevels {
  DEFAULT = 'default',
  MEDIUM = 'medium',
  LOW = 'low',
  EOFF = 'eoff',
  HIGH = 'high',
  VERY_HIGH = 'very_high'
}

export enum ContentType {
  DEFAULT = '',
  XML = 'text/xml',
  JSON = 'application/json',
  TEXT = 'text/plain',
  HTML = 'text/html'
}
