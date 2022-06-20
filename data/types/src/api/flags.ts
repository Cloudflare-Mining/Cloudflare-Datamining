import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const AccountFlags = eg.object({
  access: eg.object({
    access_service_tokens: eg.boolean.optional,
    custom_auth_domain: eg.boolean.optional,
    disable_login_lockdown: eg.boolean.optional,
    tls_client_auth: eg.boolean.optional,
    use_workers_kv: eg.boolean.optional,
    wildcard_subdomains: eg.boolean.optional
  }).optional,
  billing: eg.object({
    no_cf_free_zero_cost: eg.boolean.optional,
    ui_refresh: eg.boolean.optional,
    'invoices-view-disallowed': eg.boolean.optional,
    'email-pref-disallowed': eg.boolean.optional
  }).optional,
  bots: eg.object({
    enabled: eg.boolean.optional
  }).optional,
  http_applications: eg.object({
    beta_access: eg.boolean.optional
  }),
  kv: eg.object({
    enabled: eg.boolean.optional
  }).optional,
  registrar: eg.object({
    donated: eg.boolean.optional,
    enabled: eg.boolean.optional,
    global_wave: eg.number.optional,
    opted_in: eg.boolean.optional,
    tweeted: eg.boolean.optional
  }).optional,
  stream: eg.object({
    '4k': eg.boolean.optional,
    canaryEncoding: eg.boolean.optional,
    enabled: eg.boolean.optional,
    maxUploadSizeMib: eg.number.optional,
    maxUploadTotalMib: eg.number.optional,
    priorityModifier: eg.number.optional,
    remoteCopy: eg.boolean.optional,
    webhook: eg.boolean.optional
  }).optional,
  workers: eg.object({
    appworker_develop: eg.boolean.optional,
    enabled: eg.boolean.optional,
    origin_workers: eg.boolean.optional,
    triggers_ui: eg.boolean.optional,
    same_zone_worker_on_subrequest: eg.boolean.optional,
    scripts: eg.number.optional,
    use_pipeline: eg.boolean.optional
  }).optional
});

export type AccountFlags = TypeFromCodec<typeof AccountFlags>;

export const ZoneFlags = eg.union([
  AccountFlags,
  eg.object({
    analytics: eg.object({
      secondary_nav: eg.boolean.optional
    }).optional,
    firewall: eg.object({
      analytics_load_on_scroll: eg.boolean.optional,
      filter_ui: eg.boolean.optional,
      rule_preview: eg.boolean.optional,
      tab_analytics: eg.boolean.optional
    }).optional,
    quic: eg.object({
      enabled: eg.boolean.optional,
      show_signup_ui: eg.boolean.optional
    }).optional,
    spectrum: eg.object({
      byoip: eg.boolean.optional,
      cdn: eg.boolean.optional,
      enabled: eg.boolean.optional,
      ftp: eg.boolean.optional,
      payg: eg.boolean.optional,
      subscribed: eg.boolean.optional,
      udp: eg.boolean.optional
    }).optional,
    speed: eg.object({
      enabled: eg.boolean.optional
    }).optional,
    ssl: eg.object({
      show_ussl_ca_selector_card: eg.boolean.optional
    }).optional,
    warp: eg.object({
      allowedTunnels: eg.number.optional,
      enabled: eg.boolean.optional,
      maxConnectionsPerHostname: eg.number.optional
    }).optional
  })
]);

export type ZoneFlags = TypeFromCodec<typeof ZoneFlags>;

export const FlagValue = eg.union([eg.boolean, eg.number]);

export type FlagValue = TypeFromCodec<typeof FlagValue>;

export const ZoneFlagChange = eg.object({
  id: eg.number,
  status: eg.string,
  feature: eg.string,
  value: eg.boolean,
  scope: eg.string,
  created_on: eg.string
});

export type ZoneFlagChange = TypeFromCodec<typeof ZoneFlagChange>;

export const AccountFlagChange = eg.object({
  id: eg.number,
  status: eg.string,
  feature: eg.string,
  value: eg.boolean,
  scope: eg.string,
  created_on: eg.string
});

export type AccountFlagChange = TypeFromCodec<typeof AccountFlagChange>;
