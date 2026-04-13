/**
 * services-list command
 * @generated from apis/connectivity/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ServicesListArgs {
  type?: string;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ServicesListArgs> = {
  command: 'services-list',
  describe: 'Lists all connectivity service entries in the directory.',

  builder: (yargs: Argv): Argv<ServicesListArgs> => {
    return yargs
      .option('type', {
        type: 'string',
        description: 'Type',
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
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<ServicesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ServicesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.type !== undefined) params['type'] = argv.type;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.connectivity.directory.servicesList(
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
