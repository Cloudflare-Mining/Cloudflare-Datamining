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
  'script-name'?: string;
  'settings-batch-size'?: number;
  'settings-max-concurrency'?: number;
  'settings-max-retries'?: number;
  'settings-max-wait-time-ms'?: number;
  'settings-retry-delay'?: number;
  type: string;
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
      .option('script-name', {
        type: 'string',
        description: 'Name of a Worker',
        default: undefined,
      })
      .option('settings-batch-size', {
        type: 'number',
        description: 'The maximum number of messages to include in a batch.',
        default: undefined,
      })
      .option('settings-max-concurrency', {
        type: 'number',
        description:
          "Maximum number of concurrent consumers that may consume from this Queue. Set to \`null\` to automatically opt in to the platform's maximum (recommended).",
        default: undefined,
      })
      .option('settings-max-retries', {
        type: 'number',
        description: 'The maximum number of retries',
        default: undefined,
      })
      .option('settings-max-wait-time-ms', {
        type: 'number',
        description: 'The number of milliseconds to wait for a batch to fill up before attempting to deliver it',
        default: undefined,
      })
      .option('settings-retry-delay', {
        type: 'number',
        description: 'The number of seconds to delay before making the message available for another attempt.',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'The type field',
        choices: ['worker'] as const,
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
      })
      .choices('type', ['worker'] as const) as Argv<UpdateArgs>;
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
          body: {
            deadLetterQueue: argv.deadLetterQueue,
            scriptName: argv.scriptName,
            settingsBatchSize: argv.settingsBatchSize,
            settingsMaxConcurrency: argv.settingsMaxConcurrency,
            settingsMaxRetries: argv.settingsMaxRetries,
            settingsMaxWaitTimeMs: argv.settingsMaxWaitTimeMs,
            settingsRetryDelay: argv.settingsRetryDelay,
            type: argv.type,
          },
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
      if (argv.scriptName !== undefined) setNestedValue(bodyData, ['script_name'], argv.scriptName);
      if (argv.settingsBatchSize !== undefined)
        setNestedValue(bodyData, ['settings', 'batch_size'], argv.settingsBatchSize);
      if (argv.settingsMaxConcurrency !== undefined)
        setNestedValue(bodyData, ['settings', 'max_concurrency'], argv.settingsMaxConcurrency);
      if (argv.settingsMaxRetries !== undefined)
        setNestedValue(bodyData, ['settings', 'max_retries'], argv.settingsMaxRetries);
      if (argv.settingsMaxWaitTimeMs !== undefined)
        setNestedValue(bodyData, ['settings', 'max_wait_time_ms'], argv.settingsMaxWaitTimeMs);
      if (argv.settingsRetryDelay !== undefined)
        setNestedValue(bodyData, ['settings', 'retry_delay'], argv.settingsRetryDelay);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
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
