/**
 * edit-webhook command
 * @generated from apis/realtime-kit/schema.ts
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

interface EditWebhookArgs {
  appId: string;
  webhookId: string;
  enabled?: boolean;
  events?: string;
  name?: string;
  url?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditWebhookArgs> = {
  command: 'edit-webhook <appId> <webhookId>',
  describe: 'Edits the webhook details for the given webhook ID.',

  builder: (yargs: Argv): Argv<EditWebhookArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The app identifier tag.',
        demandOption: true,
      })
      .positional('webhookId', {
        type: 'string',
        description: 'ID of the webhook',
        demandOption: true,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'The enabled field',
        default: false,
      })
      .option('events', {
        type: 'string',
        description: 'Events that the webhook will get triggered by',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Name of the webhook',
        default: undefined,
      })
      .option('url', {
        type: 'string',
        description: 'URL the webhook will send events to',
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
      }) as Argv<EditWebhookArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditWebhookArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.webhookId as string | undefined, 'webhookId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf realtime-kit webhooks edit-webhook',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/realtime/kit/${argv.appId ?? '<appId>'}/webhooks/${argv.webhookId ?? '<webhookId>'}`,
          pathParams: { appId: String(argv.appId ?? ''), webhookId: String(argv.webhookId ?? '') },
          body: { enabled: argv.enabled, events: argv.events, name: argv.name, url: argv.url },
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
          `/accounts/${accountId}/realtime/kit/${argv.appId}/webhooks/${argv.webhookId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.events !== undefined) setNestedValue(bodyData, ['events'], argv.events);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.url !== undefined) setNestedValue(bodyData, ['url'], argv.url);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/realtime/kit/${argv.appId}/webhooks/${argv.webhookId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
