/**
 * list command
 * @generated from apis/organizations/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ListArgs {
  organizationId: string;
  status?: string;
  kind?: string;
  'target-type'?: string;
  'resource-types'?: string;
  order?: string;
  direction?: string;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list <organizationId>',
  describe: 'Lists all organization shares.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('organizationId', {
        type: 'string',
        description: 'Organization identifier.',
        demandOption: true,
      })
      .option('status', {
        type: 'string',
        description: 'Filter shares by status.',
        choices: ['active', 'deleting', 'deleted'] as const,
        default: undefined,
      })
      .option('kind', {
        type: 'string',
        description: 'Filter shares by kind.',
        choices: ['sent', 'received'] as const,
        default: undefined,
      })
      .option('target-type', {
        type: 'string',
        description: 'Filter shares by target_type.',
        choices: ['account', 'organization'] as const,
        default: undefined,
      })
      .option('resource-types', {
        type: 'string',
        description: 'Filter share resources by resource_types.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Order shares by values in the given field.',
        choices: ['name', 'created'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'Direction to sort objects.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page number.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of objects to return per page.',
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.organizationId as string | undefined, 'organizationId');

      const params: Record<string, unknown> = {};
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.kind !== undefined) params['kind'] = argv.kind;
      if (argv.targetType !== undefined) params['target_type'] = argv.targetType;
      if (argv.resourceTypes !== undefined) params['resource_types'] = argv.resourceTypes;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.organizations.shares.list(
        argv.organizationId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
