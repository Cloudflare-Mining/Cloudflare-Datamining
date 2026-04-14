/**
 * get-action-log command
 * @generated from apis/email-security/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetActionLogArgs {
  investigateId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetActionLogArgs> = {
  command: 'get-action-log <investigateId>',
  describe:
    'Returns the list of post-delivery actions (moves, quarantine releases, previews, etc.) that have been applied to a specific email message.',

  builder: (yargs: Argv): Argv<GetActionLogArgs> => {
    return yargs
      .positional('investigateId', {
        type: 'string',
        description: 'The investigation identifier for an email message.',
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
      }) as Argv<GetActionLogArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetActionLogArgs>): Promise<void> => {
    try {
      validateResourceId(argv.investigateId as string | undefined, 'investigateId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.emailSecurity.investigate.getActionLog(accountId, argv.investigateId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
