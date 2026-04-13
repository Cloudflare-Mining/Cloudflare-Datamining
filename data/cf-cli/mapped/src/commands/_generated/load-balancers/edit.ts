/**
 * edit command
 * @generated from apis/load-balancers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface EditArgs {
  zoneId?: string;
  loadBalancerId: string;
  'adaptive-routing-failover-across-pools'?: boolean;
  'default-pools'?: string;
  description?: string;
  enabled?: boolean;
  'fallback-pool'?: string;
  'location-strategy-mode'?: string;
  'location-strategy-prefer-ecs'?: string;
  name?: string;
  proxied?: boolean;
  'random-steering-default-weight'?: number;
  'session-affinity'?: string;
  'session-affinity-attributes-drain-duration'?: number;
  'session-affinity-attributes-headers'?: string;
  'session-affinity-attributes-require-all-headers'?: boolean;
  'session-affinity-attributes-samesite'?: string;
  'session-affinity-attributes-secure'?: string;
  'session-affinity-attributes-zero-downtime-failover'?: string;
  'session-affinity-ttl'?: number;
  'steering-policy'?: string;
  ttl?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit [zoneId] <loadBalancerId>',
  describe: 'Apply changes to an existing load balancer, overwriting the supplied properties.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Zone ID (or use --zone flag)',
      })
      .positional('loadBalancerId', {
        type: 'string',
        description: 'Load balancer ID',
        demandOption: true,
      })
      .option('adaptive-routing-failover-across-pools', {
        type: 'boolean',
        description:
          'Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. When set false (the default) zero-downtime failover will only occur between origins within the same pool. See \`session_affinity_attributes\` for control over when sessions are broken or reassigned.',
        default: false,
      })
      .option('default-pools', {
        type: 'string',
        description:
          'A list of pool IDs ordered by their failover priority. Pools defined here are used by default, or when region_pools are not configured for a given region.',
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'Object description.',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Whether to enable (the default) this load balancer.',
        default: false,
      })
      .option('fallback-pool', {
        type: 'string',
        description: 'The pool ID to use when all other pools are detected as unhealthy.',
        default: undefined,
      })
      .option('location-strategy-mode', {
        type: 'string',
        description:
          'Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful. - \`"pop"\`: Use the Cloudflare PoP location. - \`"resolver_ip"\`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.',
        choices: ['pop', 'resolver_ip'] as const,
        default: undefined,
      })
      .option('location-strategy-prefer-ecs', {
        type: 'string',
        description:
          'Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location. - \`"always"\`: Always prefer ECS. - \`"never"\`: Never prefer ECS. - \`"proximity"\`: Prefer ECS only when \`steering_policy="proximity"\`. - \`"geo"\`: Prefer ECS only when \`steering_policy="geo"\`.',
        choices: ['always', 'never', 'proximity', 'geo'] as const,
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description:
          "The DNS hostname to associate with your Load Balancer. If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used.",
        default: undefined,
      })
      .option('proxied', {
        type: 'boolean',
        description: 'Whether the hostname should be gray clouded (false) or orange clouded (true).',
        default: false,
      })
      .option('random-steering-default-weight', {
        type: 'number',
        description:
          'The default weight for pools in the load balancer that are not specified in the pool_weights map.',
        default: undefined,
      })
      .option('session-affinity', {
        type: 'string',
        description:
          'Specifies the type of session affinity the load balancer should use unless specified as \`"none"\`. The supported types are: - \`"cookie"\`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used. - \`"ip_cookie"\`: Behaves the same as \`"cookie"\` except the initial origin selection is stable and based on the client\'s ip address. - \`"header"\`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see \`session_affinity_attributes.headers\`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of \`session_affinity_ttl\` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See \`headers\` in \`session_affinity_attributes\` for additional required configuration.',
        choices: ['none', 'cookie', 'ip_cookie', 'header'] as const,
        default: undefined,
      })
      .option('session-affinity-attributes-drain-duration', {
        type: 'number',
        description:
          'Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.',
        default: undefined,
      })
      .option('session-affinity-attributes-headers', {
        type: 'string',
        description:
          'Configures the names of HTTP headers to base session affinity on when header \`session_affinity\` is enabled. At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: \`"cookie:<cookie-name-1>,<cookie-name-2>"\` (example) where everything after the colon is a comma-separated list of cookie names. Providing only \`"cookie"\` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.',
        default: undefined,
      })
      .option('session-affinity-attributes-require-all-headers', {
        type: 'boolean',
        description:
          'When header \`session_affinity\` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. The supported values are: - \`"true"\`: Load balancing requests must contain *all* of the HTTP headers specified by the \`headers\` session affinity attribute, otherwise sessions aren\'t created. - \`"false"\`: Load balancing requests must contain *at least one* of the HTTP headers specified by the \`headers\` session affinity attribute, otherwise sessions aren\'t created.',
        default: false,
      })
      .option('session-affinity-attributes-samesite', {
        type: 'string',
        description:
          'Configures the SameSite attribute on session affinity cookie. Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".',
        choices: ['Auto', 'Lax', 'None', 'Strict'] as const,
        default: undefined,
      })
      .option('session-affinity-attributes-secure', {
        type: 'string',
        description:
          'Configures the Secure attribute on session affinity cookie. Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.',
        choices: ['Auto', 'Always', 'Never'] as const,
        default: undefined,
      })
      .option('session-affinity-attributes-zero-downtime-failover', {
        type: 'string',
        description:
          'Configures the zero-downtime failover between origins within a pool when session affinity is enabled. This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are: - \`"none"\`: No failover takes place for sessions pinned to the origin (default). - \`"temporary"\`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. - \`"sticky"\`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.',
        choices: ['none', 'temporary', 'sticky'] as const,
        default: undefined,
      })
      .option('session-affinity-ttl', {
        type: 'number',
        description:
          'Time, in seconds, until a client\'s session expires after being created. Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per \`session_affinity\` policy are: - \`"cookie"\` / \`"ip_cookie"\`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800]. - \`"header"\`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven\'t been used for the number of seconds specified.',
        default: undefined,
      })
      .option('steering-policy', {
        type: 'string',
        description:
          'Steering Policy for this load balancer. - \`"off"\`: Use \`default_pools\`. - \`"geo"\`: Use \`region_pools\`/\`country_pools\`/\`pop_pools\`. For non-proxied requests, the country for \`country_pools\` is determined by \`location_strategy\`. - \`"random"\`: Select a pool randomly. - \`"dynamic_latency"\`: Use round trip time to select the closest pool in default_pools (requires pool health checks). - \`"proximity"\`: Use the pools\' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by \`location_strategy\` for non-proxied requests. - \`"least_outstanding_requests"\`: Select a pool by taking into consideration \`random_steering\` weights, as well as each pool\'s number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others. - \`"least_connections"\`: Select a pool by taking into consideration \`random_steering\` weights, as well as each pool\'s number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections. - \`""\`: Will map to \`"geo"\` if you use \`region_pools\`/\`country_pools\`/\`pop_pools\` otherwise \`"off"\`.',
        choices: [
          'off',
          'geo',
          'random',
          'dynamic_latency',
          'proximity',
          'least_outstanding_requests',
          'least_connections',
        ] as const,
        default: undefined,
      })
      .option('ttl', {
        type: 'number',
        description:
          'Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. This only applies to gray-clouded (unproxied) load balancers.',
        default: undefined,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      })
      .choices('location-strategy-mode', ['pop', 'resolver_ip'] as const)
      .choices('location-strategy-prefer-ecs', ['always', 'never', 'proximity', 'geo'] as const)
      .choices('session-affinity', ['none', 'cookie', 'ip_cookie', 'header'] as const)
      .choices('session-affinity-attributes-samesite', ['Auto', 'Lax', 'None', 'Strict'] as const)
      .choices('session-affinity-attributes-secure', ['Auto', 'Always', 'Never'] as const)
      .choices('session-affinity-attributes-zero-downtime-failover', ['none', 'temporary', 'sticky'] as const)
      .choices('steering-policy', [
        'off',
        'geo',
        'random',
        'dynamic_latency',
        'proximity',
        'least_outstanding_requests',
        'least_connections',
      ] as const) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.loadBalancerId as string | undefined, 'loadBalancerId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf load-balancers edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/load_balancers/${argv.loadBalancerId ?? '<loadBalancerId>'}`,
          pathParams: { zoneId: String(argv.zoneId ?? ''), loadBalancerId: String(argv.loadBalancerId ?? '') },
          body: {
            adaptiveRoutingFailoverAcrossPools: argv.adaptiveRoutingFailoverAcrossPools,
            defaultPools: argv.defaultPools,
            description: argv.description,
            enabled: argv.enabled,
            fallbackPool: argv.fallbackPool,
            locationStrategyMode: argv.locationStrategyMode,
            locationStrategyPreferEcs: argv.locationStrategyPreferEcs,
            name: argv.name,
            proxied: argv.proxied,
            randomSteeringDefaultWeight: argv.randomSteeringDefaultWeight,
            sessionAffinity: argv.sessionAffinity,
            sessionAffinityAttributesDrainDuration: argv.sessionAffinityAttributesDrainDuration,
            sessionAffinityAttributesHeaders: argv.sessionAffinityAttributesHeaders,
            sessionAffinityAttributesRequireAllHeaders: argv.sessionAffinityAttributesRequireAllHeaders,
            sessionAffinityAttributesSamesite: argv.sessionAffinityAttributesSamesite,
            sessionAffinityAttributesSecure: argv.sessionAffinityAttributesSecure,
            sessionAffinityAttributesZeroDowntimeFailover: argv.sessionAffinityAttributesZeroDowntimeFailover,
            sessionAffinityTtl: argv.sessionAffinityTtl,
            steeringPolicy: argv.steeringPolicy,
            ttl: argv.ttl,
          },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(`/zones/${zoneId}/load_balancers/${argv.loadBalancerId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.adaptiveRoutingFailoverAcrossPools !== undefined)
        setNestedValue(
          bodyData,
          ['adaptive_routing', 'failover_across_pools'],
          argv.adaptiveRoutingFailoverAcrossPools,
        );
      if (argv.defaultPools !== undefined) setNestedValue(bodyData, ['default_pools'], argv.defaultPools);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.fallbackPool !== undefined) setNestedValue(bodyData, ['fallback_pool'], argv.fallbackPool);
      if (argv.locationStrategyMode !== undefined)
        setNestedValue(bodyData, ['location_strategy', 'mode'], argv.locationStrategyMode);
      if (argv.locationStrategyPreferEcs !== undefined)
        setNestedValue(bodyData, ['location_strategy', 'prefer_ecs'], argv.locationStrategyPreferEcs);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.proxied !== undefined) setNestedValue(bodyData, ['proxied'], argv.proxied);
      if (argv.randomSteeringDefaultWeight !== undefined)
        setNestedValue(bodyData, ['random_steering', 'default_weight'], argv.randomSteeringDefaultWeight);
      if (argv.sessionAffinity !== undefined) setNestedValue(bodyData, ['session_affinity'], argv.sessionAffinity);
      if (argv.sessionAffinityAttributesDrainDuration !== undefined)
        setNestedValue(
          bodyData,
          ['session_affinity_attributes', 'drain_duration'],
          argv.sessionAffinityAttributesDrainDuration,
        );
      if (argv.sessionAffinityAttributesHeaders !== undefined)
        setNestedValue(bodyData, ['session_affinity_attributes', 'headers'], argv.sessionAffinityAttributesHeaders);
      if (argv.sessionAffinityAttributesRequireAllHeaders !== undefined)
        setNestedValue(
          bodyData,
          ['session_affinity_attributes', 'require_all_headers'],
          argv.sessionAffinityAttributesRequireAllHeaders,
        );
      if (argv.sessionAffinityAttributesSamesite !== undefined)
        setNestedValue(bodyData, ['session_affinity_attributes', 'samesite'], argv.sessionAffinityAttributesSamesite);
      if (argv.sessionAffinityAttributesSecure !== undefined)
        setNestedValue(bodyData, ['session_affinity_attributes', 'secure'], argv.sessionAffinityAttributesSecure);
      if (argv.sessionAffinityAttributesZeroDowntimeFailover !== undefined)
        setNestedValue(
          bodyData,
          ['session_affinity_attributes', 'zero_downtime_failover'],
          argv.sessionAffinityAttributesZeroDowntimeFailover,
        );
      if (argv.sessionAffinityTtl !== undefined)
        setNestedValue(bodyData, ['session_affinity_ttl'], argv.sessionAffinityTtl);
      if (argv.steeringPolicy !== undefined) setNestedValue(bodyData, ['steering_policy'], argv.steeringPolicy);
      if (argv.ttl !== undefined) setNestedValue(bodyData, ['ttl'], argv.ttl);
      const result = await client.patch<unknown>(`/zones/${zoneId}/load_balancers/${argv.loadBalancerId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
