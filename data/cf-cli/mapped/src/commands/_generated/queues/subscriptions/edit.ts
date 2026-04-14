/**
 * edit command
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

interface EditArgs {
  subscriptionId: string;
  'destination-queue-id': string;
  'destination-type': string;
  enabled?: boolean;
  events?: string;
  name?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <subscriptionId>',
  describe: 'Update an existing event subscription',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('subscriptionId', {
        type: 'string',
        description: 'A Resource identifier.',
        demandOption: true,
      })
      .option('destination-queue-id', {
        type: 'string',
        description: 'ID of the target queue',
      })
      .option('destination-type', {
        type: 'string',
        description: 'Type of destination',
        choices: ['queues.queue'] as const,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Whether the subscription is active',
        default: false,
      })
      .option('events', {
        type: 'string',
        description: 'List of event types this subscription handles',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Name of the subscription',
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
      })
      .choices('destination-type', ['queues.queue'] as const) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.subscriptionId as string | undefined, 'subscriptionId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf queues subscriptions edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/event_subscriptions/subscriptions/${argv.subscriptionId ?? '<subscriptionId>'}`,
          pathParams: { subscriptionId: String(argv.subscriptionId ?? '') },
          body: {
            destinationQueueId: argv.destinationQueueId,
            destinationType: argv.destinationType,
            enabled: argv.enabled,
            events: argv.events,
            name: argv.name,
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
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/event_subscriptions/subscriptions/${argv.subscriptionId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.destinationQueueId !== undefined)
        setNestedValue(bodyData, ['destination', 'queue_id'], argv.destinationQueueId);
      if (argv.destinationType !== undefined) setNestedValue(bodyData, ['destination', 'type'], argv.destinationType);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.events !== undefined) setNestedValue(bodyData, ['events'], argv.events);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/event_subscriptions/subscriptions/${argv.subscriptionId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
