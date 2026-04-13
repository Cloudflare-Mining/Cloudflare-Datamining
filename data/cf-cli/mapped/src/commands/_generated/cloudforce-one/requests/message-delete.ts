/**
 * message-delete command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface MessageDeleteArgs {
  requestId: string;
  messageId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, MessageDeleteArgs> = {
  command: 'message-delete <requestId> <messageId>',
  describe: 'Removes a message from a Cloudforce One intelligence request thread.',

  builder: (yargs: Argv): Argv<MessageDeleteArgs> => {
    return yargs
      .positional('requestId', {
        type: 'string',
        description: 'UUID.',
        demandOption: true,
      })
      .positional('messageId', {
        type: 'string',
        description: 'Message ID',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<MessageDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MessageDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.requestId as string | undefined, 'requestId');
      validateResourceId(argv.messageId as string | undefined, 'messageId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one requests message-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/requests/${argv.requestId ?? '<requestId>'}/message/${argv.messageId ?? '<messageId>'}`,
          pathParams: { requestId: String(argv.requestId ?? ''), messageId: String(argv.messageId ?? '') },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.requests.messageDelete(accountId, argv.requestId, argv.messageId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
