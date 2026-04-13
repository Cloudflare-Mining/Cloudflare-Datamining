/**
 * start command
 * @generated from apis/queues/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface StartArgs {
  queueId: string;
  'delete-messages-permanently'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, StartArgs> = {
  command: 'start <queueId>',
  describe: 'Deletes all messages from the Queue.',

  builder: (yargs: Argv): Argv<StartArgs> => {
    return yargs
      .positional('queueId', {
        type: 'string',
        description: 'A Resource identifier.',
        demandOption: true,
      })
      .option('delete-messages-permanently', {
        type: 'boolean',
        description: 'Confimation that all messages will be deleted permanently.',
        default: false,
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
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<StartArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<StartArgs>): Promise<void> => {
    try {
      validateResourceId(argv.queueId as string | undefined, 'queueId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf queues purge start',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/queues/${argv.queueId ?? '<queueId>'}/purge`,
          pathParams: { queueId: String(argv.queueId ?? '') },
          body: { deleteMessagesPermanently: argv.deleteMessagesPermanently },
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/accounts/${accountId}/queues/${argv.queueId}/purge`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.deleteMessagesPermanently !== undefined)
        setNestedValue(bodyData, ['delete_messages_permanently'], argv.deleteMessagesPermanently);
      const result = await client.post<unknown>(`/accounts/${accountId}/queues/${argv.queueId}/purge`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
