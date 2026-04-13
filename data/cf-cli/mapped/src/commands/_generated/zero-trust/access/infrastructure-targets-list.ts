/**
 * infrastructure-targets-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface InfrastructureTargetsListArgs {
  hostname?: string;
  'hostname-contains'?: string;
  'virtual-network-id'?: string;
  'ip-v4'?: string;
  'ip-v6'?: string;
  'created-before'?: string;
  'created-after'?: string;
  'modified-before'?: string;
  'modified-after'?: string;
  ips?: string;
  'target-ids'?: string;
  'ip-like'?: string;
  'ipv4-start'?: string;
  'ipv4-end'?: string;
  'ipv6-start'?: string;
  'ipv6-end'?: string;
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, InfrastructureTargetsListArgs> = {
  command: 'infrastructure-targets-list',
  describe: 'Lists and sorts an account’s targets. Filters are optional and are ANDed together.',

  builder: (yargs: Argv): Argv<InfrastructureTargetsListArgs> => {
    return yargs
      .option('hostname', {
        type: 'string',
        description: 'Hostname of a target',
        default: undefined,
      })
      .option('hostname-contains', {
        type: 'string',
        description: 'Partial match to the hostname of a target',
        default: undefined,
      })
      .option('virtual-network-id', {
        type: 'string',
        description: 'Private virtual network identifier of the target',
        default: undefined,
      })
      .option('ip-v4', {
        type: 'string',
        description: 'IPv4 address of the target',
        default: undefined,
      })
      .option('ip-v6', {
        type: 'string',
        description: 'IPv6 address of the target',
        default: undefined,
      })
      .option('created-before', {
        type: 'string',
        description: 'Date and time at which the target was created before (inclusive)',
        default: undefined,
      })
      .option('created-after', {
        type: 'string',
        description: 'Date and time at which the target was created after (inclusive)',
        default: undefined,
      })
      .option('modified-before', {
        type: 'string',
        description: 'Date and time at which the target was modified before (inclusive)',
        default: undefined,
      })
      .option('modified-after', {
        type: 'string',
        description: 'Date and time at which the target was modified after (inclusive)',
        default: undefined,
      })
      .option('ips', {
        type: 'string',
        description:
          'Filters for targets that have any of the following IP addresses. Specify \`ips\` multiple times in query parameter to build list of candidates.',
        default: undefined,
      })
      .option('target-ids', {
        type: 'string',
        description:
          'Filters for targets that have any of the following UUIDs. Specify \`target_ids\` multiple times in query parameter to build list of candidates.',
        default: undefined,
      })
      .option('ip-like', {
        type: 'string',
        description:
          'Filters for targets whose IP addresses look like the specified string. Supports \`*\` as a wildcard character',
        default: undefined,
      })
      .option('ipv4-start', {
        type: 'string',
        description:
          "Defines an IPv4 filter range's starting value (inclusive). Requires \`ipv4_end\` to be specified as well.",
        default: undefined,
      })
      .option('ipv4-end', {
        type: 'string',
        description:
          "Defines an IPv4 filter range's ending value (inclusive). Requires \`ipv4_start\` to be specified as well.",
        default: undefined,
      })
      .option('ipv6-start', {
        type: 'string',
        description:
          "Defines an IPv6 filter range's starting value (inclusive). Requires \`ipv6_end\` to be specified as well.",
        default: undefined,
      })
      .option('ipv6-end', {
        type: 'string',
        description:
          "Defines an IPv6 filter range's ending value (inclusive). Requires \`ipv6_start\` to be specified as well.",
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Current page in the response',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Max amount of entries returned per page',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'The field to sort by.',
        choices: ['hostname', 'created_at'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'The sorting direction.',
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
      }) as Argv<InfrastructureTargetsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InfrastructureTargetsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.hostname !== undefined) params['hostname'] = argv.hostname;
      if (argv.hostnameContains !== undefined) params['hostname_contains'] = argv.hostnameContains;
      if (argv.virtualNetworkId !== undefined) params['virtual_network_id'] = argv.virtualNetworkId;
      if (argv.ipV4 !== undefined) params['ip_v4'] = argv.ipV4;
      if (argv.ipV6 !== undefined) params['ip_v6'] = argv.ipV6;
      if (argv.createdBefore !== undefined) params['created_before'] = argv.createdBefore;
      if (argv.createdAfter !== undefined) params['created_after'] = argv.createdAfter;
      if (argv.modifiedBefore !== undefined) params['modified_before'] = argv.modifiedBefore;
      if (argv.modifiedAfter !== undefined) params['modified_after'] = argv.modifiedAfter;
      if (argv.ips !== undefined) params['ips'] = argv.ips;
      if (argv.targetIds !== undefined) params['target_ids'] = argv.targetIds;
      if (argv.ipLike !== undefined) params['ip_like'] = argv.ipLike;
      if (argv.ipv4Start !== undefined) params['ipv4_start'] = argv.ipv4Start;
      if (argv.ipv4End !== undefined) params['ipv4_end'] = argv.ipv4End;
      if (argv.ipv6Start !== undefined) params['ipv6_start'] = argv.ipv6Start;
      if (argv.ipv6End !== undefined) params['ipv6_end'] = argv.ipv6End;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.access.infrastructureTargetsList(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
