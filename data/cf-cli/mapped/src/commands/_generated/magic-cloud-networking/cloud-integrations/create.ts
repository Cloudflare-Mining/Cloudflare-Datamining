/**
 * create command
 * @generated from apis/magic-cloud-networking/schema.ts
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

interface CreateArgs {
  forwarded?: string;
  'cloud-type': string;
  description?: string;
  'friendly-name': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Create a new Cloud Integration (Closed Beta).',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('forwarded', {
        type: 'string',
        description: 'The forwarded header',
        default: undefined,
      })
      .option('cloud-type', {
        type: 'string',
        description: 'The cloud_type field',
        choices: ['AWS', 'AZURE', 'GOOGLE', 'CLOUDFLARE'] as const,
      })
      .option('description', {
        type: 'string',
        description: 'The description field',
        default: undefined,
      })
      .option('friendly-name', {
        type: 'string',
        description: 'The friendly_name field',
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
      .choices('cloud-type', ['AWS', 'AZURE', 'GOOGLE', 'CLOUDFLARE'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      const headers: Record<string, string> = {};
      if (argv.forwarded !== undefined) headers['forwarded'] = String(argv.forwarded);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-cloud-networking cloud-integrations create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/cloud/providers`,
          pathParams: {},
          body: { cloudType: argv.cloudType, description: argv.description, friendlyName: argv.friendlyName },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/magic/cloud/providers`, {
          body: bodyData,
          headers: Object.keys(headers).length > 0 ? headers : undefined,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.cloudType !== undefined) setNestedValue(bodyData, ['cloud_type'], argv.cloudType);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.friendlyName !== undefined) setNestedValue(bodyData, ['friendly_name'], argv.friendlyName);
      const result = await client.post<unknown>(`/accounts/${accountId}/magic/cloud/providers`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
        headers: Object.keys(headers).length > 0 ? headers : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
