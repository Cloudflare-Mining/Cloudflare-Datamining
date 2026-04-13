/**
 * edit command
 * @generated from apis/queues/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface EditArgs {
  queueId: string;
  'queue-name'?: string;
  'settings-delivery-delay'?: number;
  'settings-delivery-paused'?: boolean;
  'settings-message-retention-period'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <queueId>',
  describe: 'Updates a Queue.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('queueId', {
        type: 'string',
        description: 'A Resource identifier.',
        demandOption: true,
      })
      .option('queue-name', {
        type: 'string',
        description: 'The queue_name field',
        default: undefined,
      })
      .option('settings-delivery-delay', {
        type: 'number',
        description: 'Number of seconds to delay delivery of all messages to consumers.',
        default: undefined,
      })
      .option('settings-delivery-paused', {
        type: 'boolean',
        description: 'Indicates if message delivery to consumers is currently paused.',
        default: false,
      })
      .option('settings-message-retention-period', {
        type: 'number',
        description: 'Number of seconds after which an unconsumed message will be delayed.',
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
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.queueId as string | undefined, 'queueId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf queues edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/queues/${argv.queueId ?? '<queueId>'}`,
          pathParams: { queueId: String(argv.queueId ?? '') },
          body: {
            queueName: argv.queueName,
            settingsDeliveryDelay: argv.settingsDeliveryDelay,
            settingsDeliveryPaused: argv.settingsDeliveryPaused,
            settingsMessageRetentionPeriod: argv.settingsMessageRetentionPeriod,
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/queues/${argv.queueId}`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.queueName !== undefined) setNestedValue(bodyData, ['queue_name'], argv.queueName);
      if (argv.settingsDeliveryDelay !== undefined)
        setNestedValue(bodyData, ['settings', 'delivery_delay'], argv.settingsDeliveryDelay);
      if (argv.settingsDeliveryPaused !== undefined)
        setNestedValue(bodyData, ['settings', 'delivery_paused'], argv.settingsDeliveryPaused);
      if (argv.settingsMessageRetentionPeriod !== undefined)
        setNestedValue(bodyData, ['settings', 'message_retention_period'], argv.settingsMessageRetentionPeriod);
      const result = await client.patch<unknown>(`/accounts/${accountId}/queues/${argv.queueId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
