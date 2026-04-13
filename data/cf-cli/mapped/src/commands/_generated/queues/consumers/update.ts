/**
 * update command
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

interface UpdateArgs {
  consumerId: string;
  queueId: string;
  'dead-letter-queue'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <consumerId> <queueId>',
  describe: 'Updates the consumer for a queue, or creates one if it does not exist.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('consumerId', {
        type: 'string',
        description: 'A Resource identifier.',
        demandOption: true,
      })
      .positional('queueId', {
        type: 'string',
        description: 'A Resource identifier.',
        demandOption: true,
      })
      .option('dead-letter-queue', {
        type: 'string',
        description: 'The dead_letter_queue field',
        default: undefined,
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.consumerId as string | undefined, 'consumerId');
      validateResourceId(argv.queueId as string | undefined, 'queueId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf queues consumers update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/queues/${argv.queueId ?? '<queueId>'}/consumers/${argv.consumerId ?? '<consumerId>'}`,
          pathParams: { consumerId: String(argv.consumerId ?? ''), queueId: String(argv.queueId ?? '') },
          body: { deadLetterQueue: argv.deadLetterQueue },
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
        const result = await client.put<unknown>(
          `/accounts/${accountId}/queues/${argv.queueId}/consumers/${argv.consumerId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.deadLetterQueue !== undefined) setNestedValue(bodyData, ['dead_letter_queue'], argv.deadLetterQueue);
      const result = await client.put<unknown>(
        `/accounts/${accountId}/queues/${argv.queueId}/consumers/${argv.consumerId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
