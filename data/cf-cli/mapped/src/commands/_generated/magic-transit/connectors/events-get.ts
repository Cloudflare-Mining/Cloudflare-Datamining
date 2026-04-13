/**
 * events-get command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface EventsGetArgs {
  connectorId: string;
  eventT: string;
  eventN: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, EventsGetArgs> = {
  command: 'events-get <connectorId> <eventT> <eventN>',
  describe: 'Retrieves a specific telemetry event from a Magic WAN Connector for troubleshooting and monitoring.',

  builder: (yargs: Argv): Argv<EventsGetArgs> => {
    return yargs
      .positional('connectorId', {
        type: 'string',
        description: 'Connector ID',
        demandOption: true,
      })
      .positional('eventT', {
        type: 'string',
        description: 'Event t',
        demandOption: true,
      })
      .positional('eventN', {
        type: 'string',
        description: 'Event n',
        demandOption: true,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<EventsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EventsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.connectorId as string | undefined, 'connectorId');
      validateResourceId(argv.eventT as string | undefined, 'eventT');
      validateResourceId(argv.eventN as string | undefined, 'eventN');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.magicTransit.connectors.eventsGet(
        accountId,
        argv.connectorId,
        argv.eventT,
        argv.eventN,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
