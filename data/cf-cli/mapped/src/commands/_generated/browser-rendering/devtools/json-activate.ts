/**
 * json-activate command
 * @generated from apis/browser-rendering/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface JsonActivateArgs {
  sessionId: string;
  targetId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, JsonActivateArgs> = {
  command: 'json-activate <sessionId> <targetId>',
  describe: 'Activates (brings to front) a specific browser target by its ID.',

  builder: (yargs: Argv): Argv<JsonActivateArgs> => {
    return yargs
      .positional('sessionId', {
        type: 'string',
        description: 'Browser session ID.',
        demandOption: true,
      })
      .positional('targetId', {
        type: 'string',
        description: 'Target ID to activate.',
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
      }) as Argv<JsonActivateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<JsonActivateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.sessionId as string | undefined, 'sessionId');
      validateResourceId(argv.targetId as string | undefined, 'targetId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.browserRendering.devtools.jsonActivate(argv.sessionId, accountId, argv.targetId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
