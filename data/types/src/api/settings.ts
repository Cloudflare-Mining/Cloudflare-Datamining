import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const SettingsId = eg.union([
  eg.literal('advanced_ddos'),
  eg.literal('always_online'),
  eg.literal('always_use_https'),
  eg.literal('automatic_https_rewrites'),
  eg.literal('brotli'),
  eg.literal('browser_cache_ttl'),
  eg.literal('browser_check'),
  eg.literal('cache_level'),
  eg.literal('challenge_ttl'),
  eg.literal('cname_flattening'),
  eg.literal('development_mode'),
  eg.literal('early_hints'),
  eg.literal('edge_cache_ttl'),
  eg.literal('email_obfuscation'),
  eg.literal('hotlink_protection'),
  eg.literal('http2'),
  eg.literal('ip_geolocation'),
  eg.literal('ipv6'),
  eg.literal('max_upload'),
  eg.literal('min_tls_version'),
  eg.literal('minify'),
  eg.literal('mirage'),
  eg.literal('mobile_redirect'),
  eg.literal('opportunistic_encryption'),
  eg.literal('opportunistic_onion'),
  eg.literal('origin_error_page_pass_thru'),
  eg.literal('polish'),
  eg.literal('prefetch_preload'),
  eg.literal('privacy_pass'),
  eg.literal('pseudo_ipv4'),
  eg.literal('response_buffering'),
  eg.literal('rocket_loader'),
  eg.literal('security_header'),
  eg.literal('security_level'),
  eg.literal('server_side_exclude'),
  eg.literal('sha1_support'),
  eg.literal('sort_query_string_for_cache'),
  eg.literal('ssl'),
  eg.literal('tls_1_2_only'),
  eg.literal('tls_1_3'),
  eg.literal('tls_client_auth'),
  eg.literal('true_client_ip_header'),
  eg.literal('waf'),
  eg.literal('webp'),
  eg.literal('websockets')
]);

export type SettingsId = TypeFromCodec<typeof SettingsId>;

// TODO: strongly type extra props to only settings which contain them. E.g. only 'development_mode' contains 'time_remaining'
// See https://bitbucket.cfdata.org/projects/WWW/repos/api-docs/browse/schemas/client/definitions/zone.json#64,460-461 and the zone settings API for details
export const Settings = eg.object({
  id: SettingsId,
  value: eg.any,
  modified_on: eg.union([eg.string, eg.null]),
  editable: eg.boolean,
  v2: eg.string.optional, // for 'always_online'
  time_remaining: eg.string.optional, // for 'development_mode',
  certificate_status: eg.string.optional, // for 'ssl'
  validation_errors: eg.array(eg.any).optional // for 'ssl'
});

export type Settings = TypeFromCodec<typeof Settings>;

export type SettingsMap = {
  [Key in SettingsId]: Settings;
};
