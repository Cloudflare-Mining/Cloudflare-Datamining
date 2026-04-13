/**
 * dataset-events-get command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface DatasetEventsGetArgs {
  datasetId: string;
  eventId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DatasetEventsGetArgs> = {
  command: 'dataset-events-get <datasetId> <eventId>',
  describe: 'Retrieves a specific event by its UUID.',

  builder: (yargs: Argv): Argv<DatasetEventsGetArgs> => {
    return yargs
      .positional('datasetId', {
        type: 'string',
        description: 'Dataset ID.',
        demandOption: true,
      })
      .positional('eventId', {
        type: 'string',
        description: 'Event UUID.',
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
      }) as Argv<DatasetEventsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetEventsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');
      validateResourceId(argv.eventId as string | undefined, 'eventId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.datasetEventsGet(accountId, argv.datasetId, argv.eventId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
