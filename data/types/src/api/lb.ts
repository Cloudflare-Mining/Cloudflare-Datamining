import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

//
export const Origin = eg.object({
  address: eg.any.optional,
  name: eg.string.optional,
  disabled_at: eg.string.optional,
  enabled: eg.boolean.optional,
  weight: eg.number.optional,
  header: eg.object({
    Host: eg.array(eg.string)
  }).optional
});

export type Origin = TypeFromCodec<typeof Origin>;

export const LoadBalancerMonitor = eg.object({
  description: eg.string,
  created_on: eg.string.optional,
  modified_on: eg.string.optional,
  id: eg.string,
  type: eg.union([
    eg.literal('http'),
    eg.literal('https'),
    eg.literal('tcp'),
    eg.literal('smtp'),
    eg.literal('udp_icmp'),
    eg.literal('udp_icmp'),
    eg.literal('icmp_ping')
  ]),
  interval: eg.number,
  retries: eg.number,
  timeout: eg.number,
  expected_body: eg.string,
  expected_codes: eg.union([eg.string, eg.array(eg.string)]),
  follow_redirects: eg.boolean,
  allow_insecure: eg.boolean,
  probe_zone: eg.string,
  path: eg.string,
  port: eg.number.optional,
  header: eg.any,
  method: eg.string
});

export type LoadBalancerMonitor = TypeFromCodec<typeof LoadBalancerMonitor>;

export const LoadBalancerPool = eg.object({
  id: eg.string,
  name: eg.string,
  healthy: eg.boolean,
  monitor: eg.union([LoadBalancerMonitor, eg.null]).optional,
  origins: eg.array(Origin).optional,
  weight: eg.number.optional,
  disabled_at: eg.string.optional,
  enabled: eg.boolean,
  check_regions: eg.union([eg.array(eg.string), eg.null]),
  minimum_origins: eg.number,
  latitude: eg.number.optional,
  longitude: eg.number.optional,
  load_shedding: eg.object({
    default_percent: eg.number.optional,
    default_policy: eg.union([eg.literal('hash'), eg.literal('random')])
      .optional,
    session_percent: eg.number.optional,
    session_policy: eg.union([eg.literal('hash'), eg.literal('random')])
      .optional
  }).optional,
  origin_steering: eg.object({
    policy: eg.union([eg.literal('random'), eg.literal('hash')])
  }).optional,
  notification_email: eg.union([eg.string, eg.array(eg.string)]),
  notification_filter: eg.object({
    pool: eg.object({
      disable: eg.boolean.optional,
      healthy: eg.union([eg.boolean, eg.null]).optional
    }).optional,
    origin: eg.object({
      disable: eg.boolean.optional,
      healthy: eg.union([eg.boolean, eg.null]).optional
    }).optional
  }).optional
});

export type LoadBalancerPool = TypeFromCodec<typeof LoadBalancerPool>;

export const LoadBalancerRuleOverrides = eg.object({
  session_affinity: eg.union([
    eg.literal('none'),
    eg.literal('cookie'),
    eg.literal('ip_cookie')
  ]).optional,
  session_affinity_ttl: eg.number.optional,
  ttl: eg.number.optional,
  steering_policy: eg.union([
    eg.literal('dynamic_latency'),
    eg.literal('failover'),
    eg.literal('geo'),
    eg.literal('random'),
    eg.literal('off'),
    eg.literal('weighted')
  ]).optional,
  fallback_pool: eg.string.optional,
  default_pools: eg.union([eg.null, eg.array(eg.string)]).optional,
  country_pools: eg.record(eg.string, eg.array(eg.string)).optional,
  region_pools: eg.record(eg.string, eg.array(eg.string)).optional
});

export type LoadBalancerRuleOverrides = TypeFromCodec<
  typeof LoadBalancerRuleOverrides
>;

export const LoadBalancerRule = eg.object({
  actions: eg.unknown.optional,
  condition: eg.string,
  disabled: eg.boolean,
  name: eg.string,
  priority: eg.number.optional,
  terminates: eg.boolean.optional,
  overrides: LoadBalancerRuleOverrides,
  fixed_response: eg.object({
    status_code: eg.number.optional,
    content_type: eg.string.optional,
    message_body: eg.string.optional,
    location: eg.string.optional
  }).optional
});

export type LoadBalancerRule = TypeFromCodec<typeof LoadBalancerRule>;

export const LoadBalancer = eg.object({
  id: eg.string,
  description: eg.string.optional,
  created_on: eg.string.optional,
  default_pools: eg.union([eg.array(eg.string), eg.array(LoadBalancerPool)]),
  enabled: eg.boolean,
  fallback_pool: eg.union([eg.string, LoadBalancerPool]).optional,
  name: eg.string,
  modified_on: eg.string.optional,
  pop_pools: eg.any.optional,
  region_pools: eg.object({
    EEU: eg.array(LoadBalancerPool).optional,
    ENAM: eg.array(LoadBalancerPool).optional,
    ME: eg.array(LoadBalancerPool).optional,
    NAF: eg.array(LoadBalancerPool).optional,
    NEAS: eg.array(LoadBalancerPool).optional,
    NSAM: eg.array(LoadBalancerPool).optional,
    OC: eg.array(LoadBalancerPool).optional,
    SAF: eg.array(LoadBalancerPool).optional,
    SAS: eg.array(LoadBalancerPool).optional,
    SEAS: eg.array(LoadBalancerPool).optional,
    SSAM: eg.array(LoadBalancerPool).optional,
    WEU: eg.array(LoadBalancerPool).optional,
    WNAM: eg.array(LoadBalancerPool).optional
  }),
  country_pools: eg.record(eg.string, eg.array(LoadBalancerPool)).optional,
  rules: eg.array(LoadBalancerRule).optional,
  proxied: eg.boolean,
  session_affinity: eg.union([
    eg.literal('none'),
    eg.literal('cookie'),
    eg.literal('ip_cookie')
  ]).optional,
  session_affinity_attributes: eg.object({
    samesite: eg.string,
    secure: eg.string,
    drain_duration: eg.number.optional,
    zero_downtime_failover: eg.union([
      eg.literal('none'),
      eg.literal('temporary'),
      eg.literal('sticky')
    ]).optional
  }),
  session_affinity_ttl: eg.number.optional,
  steering_policy: eg.union([
    eg.literal('off'),
    eg.literal('dynamic_latency'),
    eg.literal('geo'),
    eg.literal('random'),
    eg.literal('gps'),
    eg.literal('proximity')
  ]).optional,
  random_steering: eg.object({
    default_weight: eg.number,
    pool_weights: eg.record(eg.string, eg.number).optional
  }).optional,
  ttl: eg.number.optional,
  check_regions: eg.array(eg.string).optional
});

export type LoadBalancer = TypeFromCodec<typeof LoadBalancer>;

export const LoadBalancerUsage = eg.object({
  load_balancers: eg.number,
  monitors: eg.number,
  origins: eg.number,
  pools: eg.number,
  max_origins_per_pool: eg.number,
  minimum_monitor_interval: eg.number
});

export type LoadBalancerUsage = TypeFromCodec<typeof LoadBalancerUsage>;

export const OriginData = eg.object({
  healthy: eg.boolean,
  rtt: eg.string,
  failure_reason: eg.string
});

export type OriginData = TypeFromCodec<typeof OriginData>;

export const OriginGroup = eg.record(eg.string, OriginData);

export type OriginGroup = TypeFromCodec<typeof OriginGroup>;

export const HealthData = eg.object({
  colo_id: eg.string,
  healthy: eg.boolean,
  origins: eg.array(OriginGroup)
});

export type HealthData = TypeFromCodec<typeof HealthData>;

export const HealthGroup = eg.object({
  pool_id: eg.string,
  pop_health: eg.record(eg.string, HealthData)
});

export type HealthGroup = TypeFromCodec<typeof HealthGroup>;
