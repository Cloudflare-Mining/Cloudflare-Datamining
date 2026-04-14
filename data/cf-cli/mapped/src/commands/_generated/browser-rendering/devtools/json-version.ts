/**
 * json-version command
 * @generated from apis/browser-rendering/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface JsonVersionArgs {
  sessionId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, JsonVersionArgs> = {
  command: 'json-version <sessionId>',
  describe: 'Get browser version metadata.',

  builder: (yargs: Argv): Argv<JsonVersionArgs> => {
    return yargs
      .positional('sessionId', {
        type: 'string',
        description: 'Browser session ID.',
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
      }) as Argv<JsonVersionArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<JsonVersionArgs>): Promise<void> => {
    try {
      validateResourceId(argv.sessionId as string | undefined, 'sessionId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.browserRendering.devtools.jsonVersion(accountId, argv.sessionId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
