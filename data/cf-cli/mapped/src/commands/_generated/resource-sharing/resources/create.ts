/**
 * create command
 * @generated from apis/resource-sharing/schema.ts
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

interface CreateArgs {
  shareId: string;
  'resource-account-id': string;
  'resource-id': string;
  'resource-type': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create <shareId>',
  describe: 'Adds a resource to an existing share, making it available to share recipients.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('shareId', {
        type: 'string',
        description: 'Share identifier tag.',
        demandOption: true,
      })
      .option('resource-account-id', {
        type: 'string',
        description: 'Account identifier.',
      })
      .option('resource-id', {
        type: 'string',
        description: 'Share Resource identifier.',
      })
      .option('resource-type', {
        type: 'string',
        description: 'Resource Type.',
        choices: [
          'custom-ruleset',
          'gateway-policy',
          'gateway-destination-ip',
          'gateway-block-page-settings',
          'gateway-extended-email-matching',
        ] as const,
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
      .choices('resource-type', [
        'custom-ruleset',
        'gateway-policy',
        'gateway-destination-ip',
        'gateway-block-page-settings',
        'gateway-extended-email-matching',
      ] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.shareId as string | undefined, 'shareId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf resource-sharing resources create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/shares/${argv.shareId ?? '<shareId>'}/resources`,
          pathParams: { shareId: String(argv.shareId ?? '') },
          body: {
            resourceAccountId: argv.resourceAccountId,
            resourceId: argv.resourceId,
            resourceType: argv.resourceType,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/shares/${argv.shareId}/resources`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.resourceAccountId !== undefined)
        setNestedValue(bodyData, ['resource_account_id'], argv.resourceAccountId);
      if (argv.resourceId !== undefined) setNestedValue(bodyData, ['resource_id'], argv.resourceId);
      if (argv.resourceType !== undefined) setNestedValue(bodyData, ['resource_type'], argv.resourceType);
      const result = await client.post<unknown>(`/accounts/${accountId}/shares/${argv.shareId}/resources`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
