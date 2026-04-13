/**
 * webhooks-update command
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
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface WebhooksUpdateArgs {
  webhookId: string;
  name: string;
  secret?: string;
  url: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, WebhooksUpdateArgs> = {
  command: 'webhooks-update <webhookId>',
  describe: 'Update a webhook destination.',

  builder: (yargs: Argv): Argv<WebhooksUpdateArgs> => {
    return yargs
      .positional('webhookId', {
        type: 'string',
        description: 'The unique identifier of a webhook',
        demandOption: true,
      })
      .option('name', {
        type: 'string',
        description:
          'The name of the webhook destination. This will be included in the request body when you receive a webhook notification.',
      })
      .option('secret', {
        type: 'string',
        description:
          'Optional secret that will be passed in the \`cf-webhook-auth\` header when dispatching generic webhook notifications or formatted for supported destinations. Secrets are not returned in any API response body.',
        default: undefined,
      })
      .option('url', {
        type: 'string',
        description: 'The POST endpoint to call when dispatching a notification.',
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
      }) as Argv<WebhooksUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<WebhooksUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.webhookId as string | undefined, 'webhookId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf alerting destinations webhooks-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/alerting/v3/destinations/webhooks/${argv.webhookId ?? '<webhookId>'}`,
          pathParams: { webhookId: String(argv.webhookId ?? '') },
          body: { name: argv.name, secret: argv.secret, url: argv.url },
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
          `/accounts/${accountId}/alerting/v3/destinations/webhooks/${argv.webhookId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.secret !== undefined) setNestedValue(bodyData, ['secret'], argv.secret);
      if (argv.url !== undefined) setNestedValue(bodyData, ['url'], argv.url);
      const result = await client.put<unknown>(
        `/accounts/${accountId}/alerting/v3/destinations/webhooks/${argv.webhookId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
