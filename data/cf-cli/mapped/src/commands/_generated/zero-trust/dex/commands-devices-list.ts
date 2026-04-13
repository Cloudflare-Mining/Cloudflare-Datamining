/**
 * commands-devices-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface CommandsDevicesListArgs {
  page: number;
  'per-page': number;
  search?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, CommandsDevicesListArgs> = {
  command: 'commands-devices-list',
  describe: 'List devices with WARP client support for remote captures which have been connected in the last 1 hour.',

  builder: (yargs: Argv): Argv<CommandsDevicesListArgs> => {
    return yargs
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results',
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of items per page',
      })
      .option('search', {
        type: 'string',
        description: 'Filter devices by name or email',
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
      }) as Argv<CommandsDevicesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CommandsDevicesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.search !== undefined) params['search'] = argv.search;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.commandsDevicesList(
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
