/**
 * raw-get command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface RawGetArgs {
  eventId: string;
  rawId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RawGetArgs> = {
  command: 'raw-get <eventId> <rawId>',
  describe: 'Retrieves raw threat event data for a specific event in Cloudforce One.',

  builder: (yargs: Argv): Argv<RawGetArgs> => {
    return yargs
      .positional('eventId', {
        type: 'string',
        description: 'Event UUID.',
        demandOption: true,
      })
      .positional('rawId', {
        type: 'string',
        description: 'Raw Event UUID.',
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
      }) as Argv<RawGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RawGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.eventId as string | undefined, 'eventId');
      validateResourceId(argv.rawId as string | undefined, 'rawId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.threatevents.rawGet(accountId, argv.eventId, argv.rawId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
