/**
 * event-notifications-delete command
 * @generated from apis/r2/schema.ts
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

interface EventNotificationsDeleteArgs {
  queueId: string;
  bucketName: string;
  'cf-r2-jurisdiction'?: string;
  'rule-ids'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EventNotificationsDeleteArgs> = {
  command: 'event-notifications-delete <queueId> <bucketName>',
  describe:
    'Delete an event notification rule. **If no body is provided, all rules for specified queue will be deleted**.',

  builder: (yargs: Argv): Argv<EventNotificationsDeleteArgs> => {
    return yargs
      .positional('queueId', {
        type: 'string',
        description: 'Queue ID.',
        demandOption: true,
      })
      .positional('bucketName', {
        type: 'string',
        description: 'Name of the bucket.',
        demandOption: true,
      })
      .option('cf-r2-jurisdiction', {
        type: 'string',
        description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
        default: undefined,
      })
      .option('rule-ids', {
        type: 'string',
        description: 'Array of rule ids to delete.',
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
      }) as Argv<EventNotificationsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EventNotificationsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.queueId as string | undefined, 'queueId');
      validateResourceId(argv.bucketName as string | undefined, 'bucketName');

      const headers: Record<string, string> = {};
      if (argv.cfR2Jurisdiction !== undefined) headers['cf-r2-jurisdiction'] = String(argv.cfR2Jurisdiction);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf r2 buckets event-notifications-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/event_notifications/r2/${argv.bucketName ?? '<bucketName>'}/configuration/queues/${argv.queueId ?? '<queueId>'}`,
          pathParams: { queueId: String(argv.queueId ?? ''), bucketName: String(argv.bucketName ?? '') },
          body: { ruleIds: argv.ruleIds },
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
        const result = await client.delete<unknown>(
          `/accounts/${accountId}/event_notifications/r2/${argv.bucketName}/configuration/queues/${argv.queueId}`,
          { body: bodyData, headers: Object.keys(headers).length > 0 ? headers : undefined },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.ruleIds !== undefined) setNestedValue(bodyData, ['ruleIds'], argv.ruleIds);
      const result = await client.delete<unknown>(
        `/accounts/${accountId}/event_notifications/r2/${argv.bucketName}/configuration/queues/${argv.queueId}`,
        {
          body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
          headers: Object.keys(headers).length > 0 ? headers : undefined,
        },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
