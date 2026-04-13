/**
 * webhooks-delete command
 * @generated from apis/alerting/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface WebhooksDeleteArgs {
  webhookId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, WebhooksDeleteArgs> = {
  command: 'webhooks-delete <webhookId>',
  describe: 'Delete a configured webhook destination.',

  builder: (yargs: Argv): Argv<WebhooksDeleteArgs> => {
    return yargs
      .positional('webhookId', {
        type: 'string',
        description: 'The unique identifier of a webhook',
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
      }) as Argv<WebhooksDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<WebhooksDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.webhookId as string | undefined, 'webhookId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf alerting destinations webhooks-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/alerting/v3/destinations/webhooks/${argv.webhookId ?? '<webhookId>'}`,
          pathParams: { webhookId: String(argv.webhookId ?? '') },
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

      const result = await client.alerting.destinations.webhooksDelete(argv.webhookId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
