/**
 * edit command
 * @generated from apis/magic-cloud-networking/schema.ts
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
  syncId: string;
  description?: string;
  name?: string;
  policy?: string;
  'update-mode'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <syncId>',
  describe: 'Update a Catalog Sync (Closed Beta).',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('syncId', {
        type: 'string',
        description: 'Sync ID',
        demandOption: true,
      })
      .option('description', {
        type: 'string',
        description: 'The description field',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
        default: undefined,
      })
      .option('policy', {
        type: 'string',
        description: 'The policy field',
        default: undefined,
      })
      .option('update-mode', {
        type: 'string',
        description: 'The update_mode field',
        choices: ['AUTO', 'MANUAL'] as const,
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
      .choices('update-mode', ['AUTO', 'MANUAL'] as const) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.syncId as string | undefined, 'syncId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-cloud-networking catalog-syncs edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/cloud/catalog-syncs/${argv.syncId ?? '<syncId>'}`,
          pathParams: { syncId: String(argv.syncId ?? '') },
          body: { description: argv.description, name: argv.name, policy: argv.policy, updateMode: argv.updateMode },
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/magic/cloud/catalog-syncs/${argv.syncId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.policy !== undefined) setNestedValue(bodyData, ['policy'], argv.policy);
      if (argv.updateMode !== undefined) setNestedValue(bodyData, ['update_mode'], argv.updateMode);
      const result = await client.patch<unknown>(`/accounts/${accountId}/magic/cloud/catalog-syncs/${argv.syncId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
