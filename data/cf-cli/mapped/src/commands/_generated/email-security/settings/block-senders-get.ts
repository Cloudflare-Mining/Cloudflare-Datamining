/**
 * block-senders-get command
 * @generated from apis/email-security/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface BlockSendersGetArgs {
  patternId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, BlockSendersGetArgs> = {
  command: 'block-senders-get <patternId>',
  describe: 'Gets information about a specific blocked sender entry, including the pattern and block reason.',

  builder: (yargs: Argv): Argv<BlockSendersGetArgs> => {
    return yargs
      .positional('patternId', {
        type: 'string',
        description: 'The unique identifier for the allow policy.',
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
      }) as Argv<BlockSendersGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BlockSendersGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.patternId as string | undefined, 'patternId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.emailSecurity.settings.blockSendersGet(accountId, argv.patternId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
