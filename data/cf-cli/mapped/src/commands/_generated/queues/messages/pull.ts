/**
 * pull command
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

interface PullArgs {
  queueId: string;
  'batch-size'?: number;
  'visibility-timeout-ms'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, PullArgs> = {
  command: 'pull <queueId>',
  describe: 'Pull a batch of messages from a Queue',

  builder: (yargs: Argv): Argv<PullArgs> => {
    return yargs
      .positional('queueId', {
        type: 'string',
        description: 'A Resource identifier.',
        demandOption: true,
      })
      .option('batch-size', {
        type: 'number',
        description: 'The maximum number of messages to include in a batch.',
        default: undefined,
      })
      .option('visibility-timeout-ms', {
        type: 'number',
        description:
          'The number of milliseconds that a message is exclusively leased. After the timeout, the message becomes available for another attempt.',
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
      }) as Argv<PullArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PullArgs>): Promise<void> => {
    try {
      validateResourceId(argv.queueId as string | undefined, 'queueId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf queues messages pull',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/queues/${argv.queueId ?? '<queueId>'}/messages/pull`,
          pathParams: { queueId: String(argv.queueId ?? '') },
          body: { batchSize: argv.batchSize, visibilityTimeoutMs: argv.visibilityTimeoutMs },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/queues/${argv.queueId}/messages/pull`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.batchSize !== undefined) setNestedValue(bodyData, ['batch_size'], argv.batchSize);
      if (argv.visibilityTimeoutMs !== undefined)
        setNestedValue(bodyData, ['visibility_timeout_ms'], argv.visibilityTimeoutMs);
      const result = await client.post<unknown>(`/accounts/${accountId}/queues/${argv.queueId}/messages/pull`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
