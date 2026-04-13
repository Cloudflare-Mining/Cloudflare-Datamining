/**
 * subnets-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface SubnetsListArgs {
  name?: string;
  comment?: string;
  network?: string;
  'existed-at'?: string;
  'address-family'?: string;
  'is-default-network'?: boolean;
  'is-deleted'?: boolean;
  'sort-order'?: string;
  'subnet-types'?: string;
  'per-page'?: string;
  page?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SubnetsListArgs> = {
  command: 'subnets-list',
  describe: 'Lists and filters subnets in an account.',

  builder: (yargs: Argv): Argv<SubnetsListArgs> => {
    return yargs
      .option('name', {
        type: 'string',
        description: 'If set, only list subnets with the given name',
        default: undefined,
      })
      .option('comment', {
        type: 'string',
        description: 'If set, only list subnets with the given comment.',
        default: undefined,
      })
      .option('network', {
        type: 'string',
        description: 'If set, only list the subnet whose network exactly matches the given CIDR.',
        default: undefined,
      })
      .option('existed-at', {
        type: 'string',
        description:
          'If provided, include only resources that were created (and not deleted) before this time. URL encoded.',
        default: undefined,
      })
      .option('address-family', {
        type: 'string',
        description: 'If set, only include subnets in the given address family - \`v4\` or \`v6\`',
        choices: ['v4', 'v6'] as const,
        default: undefined,
      })
      .option('is-default-network', {
        type: 'boolean',
        description:
          'If \`true\`, only include default subnets. If \`false\`, exclude default subnets subnets. If not set, all subnets will be included.',
        default: false,
      })
      .option('is-deleted', {
        type: 'boolean',
        description:
          'If \`true\`, only include deleted subnets. If \`false\`, exclude deleted subnets. If not set, all subnets will be included.',
        default: false,
      })
      .option('sort-order', {
        type: 'string',
        description:
          'Sort order of the results. \`asc\` means oldest to newest, \`desc\` means newest to oldest. If not set, they will not be in any particular order.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('subnet-types', {
        type: 'string',
        description: 'If set, the types of subnets to include, separated by comma.',
        choices: ['cloudflare_source', 'warp'] as const,
        default: undefined,
      })
      .option('per-page', {
        type: 'string',
        description: 'Number of results to display.',
        default: undefined,
      })
      .option('page', {
        type: 'string',
        description: 'Page number of paginated results.',
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
      }) as Argv<SubnetsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SubnetsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.comment !== undefined) params['comment'] = argv.comment;
      if (argv.network !== undefined) params['network'] = argv.network;
      if (argv.existedAt !== undefined) params['existed_at'] = argv.existedAt;
      if (argv.addressFamily !== undefined) params['address_family'] = argv.addressFamily;
      if (argv.isDefaultNetwork !== undefined) params['is_default_network'] = argv.isDefaultNetwork;
      if (argv.isDeleted !== undefined) params['is_deleted'] = argv.isDeleted;
      if (argv.sortOrder !== undefined) params['sort_order'] = argv.sortOrder;
      if (argv.subnetTypes !== undefined) params['subnet_types'] = argv.subnetTypes;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.page !== undefined) params['page'] = argv.page;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.networks.subnetsList(
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
