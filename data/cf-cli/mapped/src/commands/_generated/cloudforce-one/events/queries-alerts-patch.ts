/**
 * queries-alerts-patch command
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
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface QueriesAlertsPatchArgs {
  alertId: string;
  enabled?: boolean;
  frequency?: string;
  'notification-type'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, QueriesAlertsPatchArgs> = {
  command: 'queries-alerts-patch <alertId>',
  describe: 'Update an existing event query alert by its ID',

  builder: (yargs: Argv): Argv<QueriesAlertsPatchArgs> => {
    return yargs
      .positional('alertId', {
        type: 'string',
        description: 'Event query alert ID',
        demandOption: true,
      })
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
      .choices('frequency', ['immediate', 'daily'] as const) as Argv<QueriesAlertsPatchArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<QueriesAlertsPatchArgs>): Promise<void> => {
    try {
      validateResourceId(argv.alertId as string | undefined, 'alertId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events queries-alerts-patch',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/queries/alerts/${argv.alertId ?? '<alertId>'}`,
          pathParams: { alertId: String(argv.alertId ?? '') },
          body: { enabled: argv.enabled, frequency: argv.frequency, notificationType: argv.notificationType },
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
          `/accounts/${accountId}/cloudforce-one/events/queries/alerts/${argv.alertId}`,
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
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/cloudforce-one/events/queries/alerts/${argv.alertId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
