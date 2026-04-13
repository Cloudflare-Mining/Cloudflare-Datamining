/**
 * edit command
 * @generated from apis/magic-transit/schema.ts
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
  accountAppId: string;
  hostnames?: string;
  name?: string;
  type?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <accountAppId>',
  describe: 'Updates an Account App',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('accountAppId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .option('hostnames', {
        type: 'string',
        description: 'FQDNs to associate with traffic decisions.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Display name for the app.',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'Category of the app.',
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
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.accountAppId as string | undefined, 'accountAppId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit apps edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/apps/${argv.accountAppId ?? '<accountAppId>'}`,
          pathParams: { accountAppId: String(argv.accountAppId ?? '') },
          body: { hostnames: argv.hostnames, name: argv.name, type: argv.type },
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/magic/apps/${argv.accountAppId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.hostnames !== undefined) setNestedValue(bodyData, ['hostnames'], argv.hostnames);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      const result = await client.patch<unknown>(`/accounts/${accountId}/magic/apps/${argv.accountAppId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
