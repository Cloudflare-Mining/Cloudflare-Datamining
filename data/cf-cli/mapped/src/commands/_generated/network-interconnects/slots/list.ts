/**
 * list command
 * @generated from apis/network-interconnects/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  'address-contains'?: string;
  site?: string;
  speed?: string;
  occupied?: boolean;
  cursor?: number;
  limit?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'Lists all available infrastructure slots for the account, showing allocation status and capacity.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('address-contains', {
        type: 'string',
        description: 'If specified, only show slots with the given text in their address field',
        default: undefined,
      })
      .option('site', {
        type: 'string',
        description: 'If specified, only show slots located at the given site',
        default: undefined,
      })
      .option('speed', {
        type: 'string',
        description: 'If specified, only show slots that support the given speed',
        default: undefined,
      })
      .option('occupied', {
        type: 'boolean',
        description: 'If specified, only show slots with a specific occupied/unoccupied state',
        default: false,
      })
      .option('cursor', {
        type: 'number',
        description: 'Cursor',
        default: undefined,
      })
      .option('limit', {
        type: 'number',
        description: 'Limit',
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
      const params: Record<string, unknown> = {};
      if (argv.addressContains !== undefined) params['address_contains'] = argv.addressContains;
      if (argv.site !== undefined) params['site'] = argv.site;
      if (argv.speed !== undefined) params['speed'] = argv.speed;
      if (argv.occupied !== undefined) params['occupied'] = argv.occupied;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.networkInterconnects.slots.list(
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
