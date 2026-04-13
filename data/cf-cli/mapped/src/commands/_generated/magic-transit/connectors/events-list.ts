/**
 * events-list command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface EventsListArgs {
  connectorId: string;
  from: number;
  to: number;
  limit?: number;
  cursor?: string;
  k?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, EventsListArgs> = {
  command: 'events-list <connectorId>',
  describe: 'Lists telemetry events from a Magic WAN Connector, showing connection events and status changes.',

  builder: (yargs: Argv): Argv<EventsListArgs> => {
    return yargs
      .positional('connectorId', {
        type: 'string',
        description: 'Connector ID',
        demandOption: true,
      })
      .option('from', {
        type: 'number',
        description: 'From',
      })
      .option('to', {
        type: 'number',
        description: 'To',
      })
      .option('limit', {
        type: 'number',
        description: 'Limit',
        default: undefined,
      })
      .option('cursor', {
        type: 'string',
        description: 'Cursor',
        default: undefined,
      })
      .option('k', {
        type: 'string',
        description: 'Filter by event kind',
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
      }) as Argv<EventsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EventsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.connectorId as string | undefined, 'connectorId');

      const params: Record<string, unknown> = {};
      if (argv.from !== undefined) params['from'] = argv.from;
      if (argv.to !== undefined) params['to'] = argv.to;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      if (argv.k !== undefined) params['k'] = argv.k;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.magicTransit.connectors.eventsList(
        accountId,
        argv.connectorId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
