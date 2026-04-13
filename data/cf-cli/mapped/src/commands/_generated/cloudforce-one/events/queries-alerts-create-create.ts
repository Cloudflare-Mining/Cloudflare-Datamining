/**
 * queries-alerts-create-create command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface QueriesAlertsCreateCreateArgs {
  enabled?: boolean;
  frequency?: string;
  'notification-type'?: string;
  'query-id': number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, QueriesAlertsCreateCreateArgs> = {
  command: 'queries-alerts-create-create',
  describe: 'Create a new alert subscription for an event query',

  builder: (yargs: Argv): Argv<QueriesAlertsCreateCreateArgs> => {
    return yargs
      .option('enabled', {
        type: 'boolean',
        description: 'Whether the alert is enabled',
        default: false,
      })
      .option('frequency', {
        type: 'string',
        description: 'Alert frequency (immediate or daily)',
        choices: ['immediate', 'daily'] as const,
        default: undefined,
      })
      .option('notification-type', {
        type: 'string',
        description: 'Type of notification (e.g., ans)',
        default: undefined,
      })
      .option('query-id', {
        type: 'number',
        description: 'ID of the event query to create an alert for',
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
      .choices('frequency', ['immediate', 'daily'] as const) as Argv<QueriesAlertsCreateCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<QueriesAlertsCreateCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events queries-alerts-create-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/queries/alerts/create`,
          pathParams: {},
          body: {
            enabled: argv.enabled,
            frequency: argv.frequency,
            notificationType: argv.notificationType,
            queryId: argv.queryId,
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/cloudforce-one/events/queries/alerts/create`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.frequency !== undefined) setNestedValue(bodyData, ['frequency'], argv.frequency);
      if (argv.notificationType !== undefined) setNestedValue(bodyData, ['notification_type'], argv.notificationType);
      if (argv.queryId !== undefined) setNestedValue(bodyData, ['query_id'], argv.queryId);
      const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/queries/alerts/create`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
