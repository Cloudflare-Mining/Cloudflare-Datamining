/**
 * triggers-list command
 * @generated from apis/builds/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface TriggersListArgs {
  externalScriptId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TriggersListArgs> = {
  command: 'triggers-list <externalScriptId>',
  describe: 'Get all triggers for a specific worker script',

  builder: (yargs: Argv): Argv<TriggersListArgs> => {
    return yargs
      .positional('externalScriptId', {
        type: 'string',
        description: 'External script identifier.',
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
      }) as Argv<TriggersListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TriggersListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.externalScriptId as string | undefined, 'externalScriptId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.builds.workers.triggersList(accountId, argv.externalScriptId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
