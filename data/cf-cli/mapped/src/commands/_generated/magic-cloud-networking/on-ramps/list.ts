/**
 * list command
 * @generated from apis/magic-cloud-networking/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  'order-by'?: string;
  desc?: boolean;
  status?: boolean;
  vpcs?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'List On-ramps (Closed Beta).',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('order-by', {
        type: 'string',
        description: 'One of ["updated_at", "id", "cloud_type", "name"].',
        default: undefined,
      })
      .option('desc', {
        type: 'boolean',
        description: 'Desc',
        default: false,
      })
      .option('status', {
        type: 'boolean',
        description: 'Status',
        default: false,
      })
      .option('vpcs', {
        type: 'boolean',
        description: 'Vpcs',
        default: false,
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
      const params: Record<string, unknown> = {};
      if (argv.orderBy !== undefined) params['order_by'] = argv.orderBy;
      if (argv.desc !== undefined) params['desc'] = argv.desc;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.vpcs !== undefined) params['vpcs'] = argv.vpcs;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.magicCloudNetworking.onramps.list(
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
