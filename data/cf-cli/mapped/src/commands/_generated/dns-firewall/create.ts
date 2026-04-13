/**
 * create command
 * @generated from apis/dns-firewall/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface CreateArgs {
  'attack-mitigation-enabled'?: boolean;
  'attack-mitigation-only-when-upstream-unhealthy'?: boolean;
  'deprecate-any-requests'?: boolean;
  'ecs-fallback'?: boolean;
  'maximum-cache-ttl'?: number;
  'minimum-cache-ttl'?: number;
  name?: string;
  'negative-cache-ttl'?: number;
  ratelimit?: number;
  retries?: number;
  'upstream-ips'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Create a DNS Firewall cluster',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('attack-mitigation-enabled', {
        type: 'boolean',
        description: 'When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers',
        default: false,
      })
      .option('attack-mitigation-only-when-upstream-unhealthy', {
        type: 'boolean',
        description: 'Only mitigate attacks when upstream servers seem unhealthy',
        default: false,
      })
      .option('deprecate-any-requests', {
        type: 'boolean',
        description: 'Whether to refuse to answer queries for the ANY type',
        default: false,
      })
      .option('ecs-fallback', {
        type: 'boolean',
        description: 'Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent',
        default: false,
      })
      .option('maximum-cache-ttl', {
        type: 'number',
        description:
          'By default, Cloudflare attempts to cache responses for as long as indicated by the TTL received from upstream nameservers. This setting sets an upper bound on this duration. For caching purposes, higher TTLs will be decreased to the maximum value defined by this setting.  This setting does not affect the TTL value in the DNS response Cloudflare returns to clients. Cloudflare will always forward the TTL value received from upstream nameservers. ',
        default: undefined,
      })
      .option('minimum-cache-ttl', {
        type: 'number',
        description:
          'By default, Cloudflare attempts to cache responses for as long as indicated by the TTL received from upstream nameservers. This setting sets a lower bound on this duration. For caching purposes, lower TTLs will be increased to the minimum value defined by this setting.  This setting does not affect the TTL value in the DNS response Cloudflare returns to clients. Cloudflare will always forward the TTL value received from upstream nameservers.  Note that, even with this setting, there is no guarantee that a response will be cached for at least the specified duration. Cached responses may be removed earlier for capacity or other operational reasons. ',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'DNS Firewall cluster name',
        default: undefined,
      })
      .option('negative-cache-ttl', {
        type: 'number',
        description:
          'This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers.  This setting does not affect the TTL value in the DNS response Cloudflare returns to clients. Cloudflare will always forward the TTL value received from upstream nameservers. ',
        default: undefined,
      })
      .option('ratelimit', {
        type: 'number',
        description:
          'Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster)',
        default: undefined,
      })
      .option('retries', {
        type: 'number',
        description:
          'Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)',
        default: undefined,
      })
      .option('upstream-ips', {
        type: 'string',
        description: 'The upstream_ips field',
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
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf dns-firewall create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dns_firewall`,
          pathParams: {},
          body: {
            attackMitigationEnabled: argv.attackMitigationEnabled,
            attackMitigationOnlyWhenUpstreamUnhealthy: argv.attackMitigationOnlyWhenUpstreamUnhealthy,
            deprecateAnyRequests: argv.deprecateAnyRequests,
            ecsFallback: argv.ecsFallback,
            maximumCacheTtl: argv.maximumCacheTtl,
            minimumCacheTtl: argv.minimumCacheTtl,
            name: argv.name,
            negativeCacheTtl: argv.negativeCacheTtl,
            ratelimit: argv.ratelimit,
            retries: argv.retries,
            upstreamIps: argv.upstreamIps,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/dns_firewall`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.attackMitigationEnabled !== undefined)
        setNestedValue(bodyData, ['attack_mitigation', 'enabled'], argv.attackMitigationEnabled);
      if (argv.attackMitigationOnlyWhenUpstreamUnhealthy !== undefined)
        setNestedValue(
          bodyData,
          ['attack_mitigation', 'only_when_upstream_unhealthy'],
          argv.attackMitigationOnlyWhenUpstreamUnhealthy,
        );
      if (argv.deprecateAnyRequests !== undefined)
        setNestedValue(bodyData, ['deprecate_any_requests'], argv.deprecateAnyRequests);
      if (argv.ecsFallback !== undefined) setNestedValue(bodyData, ['ecs_fallback'], argv.ecsFallback);
      if (argv.maximumCacheTtl !== undefined) setNestedValue(bodyData, ['maximum_cache_ttl'], argv.maximumCacheTtl);
      if (argv.minimumCacheTtl !== undefined) setNestedValue(bodyData, ['minimum_cache_ttl'], argv.minimumCacheTtl);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.negativeCacheTtl !== undefined) setNestedValue(bodyData, ['negative_cache_ttl'], argv.negativeCacheTtl);
      if (argv.ratelimit !== undefined) setNestedValue(bodyData, ['ratelimit'], argv.ratelimit);
      if (argv.retries !== undefined) setNestedValue(bodyData, ['retries'], argv.retries);
      if (argv.upstreamIps !== undefined) setNestedValue(bodyData, ['upstream_ips'], argv.upstreamIps);
      const result = await client.post<unknown>(`/accounts/${accountId}/dns_firewall`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
