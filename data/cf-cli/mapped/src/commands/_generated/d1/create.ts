/**
 * create command
 * @generated from apis/d1/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface CreateArgs {
  jurisdiction?: string;
  name: string;
  'primary-location-hint'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Returns the created D1 database.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('jurisdiction', {
        type: 'string',
        description:
          'Specify the location to restrict the D1 database to run and store data. If this option is present, the location hint is ignored.',
        choices: ['eu', 'fedramp'] as const,
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'D1 database name.',
      })
      .option('primary-location-hint', {
        type: 'string',
        description:
          'Specify the region to create the D1 primary, if available. If this option is omitted, the D1 will be created as close as possible to the current user.',
        choices: ['wnam', 'enam', 'weur', 'eeur', 'apac', 'oc'] as const,
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
      .choices('jurisdiction', ['eu', 'fedramp'] as const)
      .choices('primary-location-hint', ['wnam', 'enam', 'weur', 'eeur', 'apac', 'oc'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf d1 create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/d1/database`,
          pathParams: {},
          body: { jurisdiction: argv.jurisdiction, name: argv.name, primaryLocationHint: argv.primaryLocationHint },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/d1/database`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.jurisdiction !== undefined) setNestedValue(bodyData, ['jurisdiction'], argv.jurisdiction);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.primaryLocationHint !== undefined)
        setNestedValue(bodyData, ['primary_location_hint'], argv.primaryLocationHint);
      const result = await client.post<unknown>(`/accounts/${accountId}/d1/database`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
