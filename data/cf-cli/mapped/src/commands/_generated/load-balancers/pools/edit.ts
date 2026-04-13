/**
 * edit command
 * @generated from apis/load-balancers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface EditArgs {
  poolId: string;
  'check-regions'?: string;
  description?: string;
  enabled?: boolean;
  latitude?: number;
  'load-shedding-default-percent'?: number;
  'load-shedding-default-policy'?: string;
  'load-shedding-session-percent'?: number;
  'load-shedding-session-policy'?: string;
  longitude?: number;
  'minimum-origins'?: number;
  monitor?: string;
  'monitor-group'?: string;
  name?: string;
  'notification-email'?: string;
  'notification-filter-origin-disable'?: boolean;
  'notification-filter-origin-healthy'?: boolean;
  'notification-filter-pool-disable'?: boolean;
  'notification-filter-pool-healthy'?: boolean;
  'origin-steering-policy'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <poolId>',
  describe: 'Apply changes to an existing pool, overwriting the supplied properties.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('poolId', {
        type: 'string',
        description: 'Pool ID',
        demandOption: true,
      })
      .option('check-regions', {
        type: 'string',
        description: 'A list of regions from which to run health checks. Null means every Cloudflare data center.',
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'A human-readable description of the pool.',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description:
          'Whether to enable (the default) or disable this pool. Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover to the next pool (if any).',
        default: false,
      })
      .option('latitude', {
        type: 'number',
        description:
          'The latitude of the data center containing the origins used in this pool in decimal degrees. If this is set, longitude must also be set.',
        default: undefined,
      })
      .option('load-shedding-default-percent', {
        type: 'number',
        description:
          'The percent of traffic to shed from the pool, according to the default policy. Applies to new sessions and traffic without session affinity.',
        default: undefined,
      })
      .option('load-shedding-default-policy', {
        type: 'string',
        description:
          'The default policy to use when load shedding. A random policy randomly sheds a given percent of requests. A hash policy computes a hash over the CF-Connecting-IP address and sheds all requests originating from a percent of IPs.',
        choices: ['random', 'hash'] as const,
        default: undefined,
      })
      .option('load-shedding-session-percent', {
        type: 'number',
        description: 'The percent of existing sessions to shed from the pool, according to the session policy.',
        default: undefined,
      })
      .option('load-shedding-session-policy', {
        type: 'string',
        description: 'Only the hash policy is supported for existing sessions (to avoid exponential decay).',
        choices: ['hash'] as const,
        default: undefined,
      })
      .option('longitude', {
        type: 'number',
        description:
          'The longitude of the data center containing the origins used in this pool in decimal degrees. If this is set, latitude must also be set.',
        default: undefined,
      })
      .option('minimum-origins', {
        type: 'number',
        description:
          'The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and will failover to the next available pool.',
        default: undefined,
      })
      .option('monitor', {
        type: 'string',
        description: 'The ID of the Monitor to use for checking the health of origins within this pool.',
        default: undefined,
      })
      .option('monitor-group', {
        type: 'string',
        description: 'The ID of the Monitor Group to use for checking the health of origins within this pool.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description:
          'A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed.',
        default: undefined,
      })
      .option('notification-email', {
        type: 'string',
        description:
          "This field is now deprecated. It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send health status notifications to. This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.",
        default: undefined,
      })
      .option('notification-filter-origin-disable', {
        type: 'boolean',
        description: 'If set true, disable notifications for this type of resource (pool or origin).',
        default: false,
      })
      .option('notification-filter-origin-healthy', {
        type: 'boolean',
        description:
          'If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).',
        default: false,
      })
      .option('notification-filter-pool-disable', {
        type: 'boolean',
        description: 'If set true, disable notifications for this type of resource (pool or origin).',
        default: false,
      })
      .option('notification-filter-pool-healthy', {
        type: 'boolean',
        description:
          'If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).',
        default: false,
      })
      .option('origin-steering-policy', {
        type: 'string',
        description:
          'The type of origin steering policy to use. - \`"random"\`: Select an origin randomly. - \`"hash"\`: Select an origin by computing a hash over the CF-Connecting-IP address. - \`"least_outstanding_requests"\`: Select an origin by taking into consideration origin weights, as well as each origin\'s number of outstanding requests. Origins with more pending requests are weighted proportionately less relative to others. - \`"least_connections"\`: Select an origin by taking into consideration origin weights, as well as each origin\'s number of open connections. Origins with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.',
        choices: ['random', 'hash', 'least_outstanding_requests', 'least_connections'] as const,
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
      .choices('load-shedding-default-policy', ['random', 'hash'] as const)
      .choices('load-shedding-session-policy', ['hash'] as const)
      .choices('origin-steering-policy', [
        'random',
        'hash',
        'least_outstanding_requests',
        'least_connections',
      ] as const) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.poolId as string | undefined, 'poolId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf load-balancers pools edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/load_balancers/pools/${argv.poolId ?? '<poolId>'}`,
          pathParams: { poolId: String(argv.poolId ?? '') },
          body: {
            checkRegions: argv.checkRegions,
            description: argv.description,
            enabled: argv.enabled,
            latitude: argv.latitude,
            loadSheddingDefaultPercent: argv.loadSheddingDefaultPercent,
            loadSheddingDefaultPolicy: argv.loadSheddingDefaultPolicy,
            loadSheddingSessionPercent: argv.loadSheddingSessionPercent,
            loadSheddingSessionPolicy: argv.loadSheddingSessionPolicy,
            longitude: argv.longitude,
            minimumOrigins: argv.minimumOrigins,
            monitor: argv.monitor,
            monitorGroup: argv.monitorGroup,
            name: argv.name,
            notificationEmail: argv.notificationEmail,
            notificationFilterOriginDisable: argv.notificationFilterOriginDisable,
            notificationFilterOriginHealthy: argv.notificationFilterOriginHealthy,
            notificationFilterPoolDisable: argv.notificationFilterPoolDisable,
            notificationFilterPoolHealthy: argv.notificationFilterPoolHealthy,
            originSteeringPolicy: argv.originSteeringPolicy,
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
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(`/accounts/${accountId}/load_balancers/pools/${argv.poolId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.checkRegions !== undefined) setNestedValue(bodyData, ['check_regions'], argv.checkRegions);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.latitude !== undefined) setNestedValue(bodyData, ['latitude'], argv.latitude);
      if (argv.loadSheddingDefaultPercent !== undefined)
        setNestedValue(bodyData, ['load_shedding', 'default_percent'], argv.loadSheddingDefaultPercent);
      if (argv.loadSheddingDefaultPolicy !== undefined)
        setNestedValue(bodyData, ['load_shedding', 'default_policy'], argv.loadSheddingDefaultPolicy);
      if (argv.loadSheddingSessionPercent !== undefined)
        setNestedValue(bodyData, ['load_shedding', 'session_percent'], argv.loadSheddingSessionPercent);
      if (argv.loadSheddingSessionPolicy !== undefined)
        setNestedValue(bodyData, ['load_shedding', 'session_policy'], argv.loadSheddingSessionPolicy);
      if (argv.longitude !== undefined) setNestedValue(bodyData, ['longitude'], argv.longitude);
      if (argv.minimumOrigins !== undefined) setNestedValue(bodyData, ['minimum_origins'], argv.minimumOrigins);
      if (argv.monitor !== undefined) setNestedValue(bodyData, ['monitor'], argv.monitor);
      if (argv.monitorGroup !== undefined) setNestedValue(bodyData, ['monitor_group'], argv.monitorGroup);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.notificationEmail !== undefined)
        setNestedValue(bodyData, ['notification_email'], argv.notificationEmail);
      if (argv.notificationFilterOriginDisable !== undefined)
        setNestedValue(bodyData, ['notification_filter', 'origin', 'disable'], argv.notificationFilterOriginDisable);
      if (argv.notificationFilterOriginHealthy !== undefined)
        setNestedValue(bodyData, ['notification_filter', 'origin', 'healthy'], argv.notificationFilterOriginHealthy);
      if (argv.notificationFilterPoolDisable !== undefined)
        setNestedValue(bodyData, ['notification_filter', 'pool', 'disable'], argv.notificationFilterPoolDisable);
      if (argv.notificationFilterPoolHealthy !== undefined)
        setNestedValue(bodyData, ['notification_filter', 'pool', 'healthy'], argv.notificationFilterPoolHealthy);
      if (argv.originSteeringPolicy !== undefined)
        setNestedValue(bodyData, ['origin_steering', 'policy'], argv.originSteeringPolicy);
      const result = await client.patch<unknown>(`/accounts/${accountId}/load_balancers/pools/${argv.poolId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
