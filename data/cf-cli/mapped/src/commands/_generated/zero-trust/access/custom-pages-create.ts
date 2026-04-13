/**
 * custom-pages-create command
 * @generated from apis/zero-trust/schema.ts
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

interface CustomPagesCreateArgs {
  'app-count'?: number;
  'custom-html': string;
  name: string;
  type: string;
  uid?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CustomPagesCreateArgs> = {
  command: 'custom-pages-create',
  describe: 'Create a custom page',

  builder: (yargs: Argv): Argv<CustomPagesCreateArgs> => {
    return yargs
      .option('app-count', {
        type: 'number',
        description: 'Number of apps the custom page is assigned to.',
        default: undefined,
      })
      .option('custom-html', {
        type: 'string',
        description: 'Custom page HTML.',
      })
      .option('name', {
        type: 'string',
        description: 'Custom page name.',
      })
      .option('type', {
        type: 'string',
        description: 'Custom page type.',
        choices: ['identity_denied', 'forbidden'] as const,
      })
      .option('uid', {
        type: 'string',
        description: 'UUID.',
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
      .choices('type', ['identity_denied', 'forbidden'] as const) as Argv<CustomPagesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CustomPagesCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust access custom-pages-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/custom_pages`,
          pathParams: {},
          body: {
            appCount: argv.appCount,
            customHtml: argv.customHtml,
            name: argv.name,
            type: argv.type,
            uid: argv.uid,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/access/custom_pages`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.appCount !== undefined) setNestedValue(bodyData, ['app_count'], argv.appCount);
      if (argv.customHtml !== undefined) setNestedValue(bodyData, ['custom_html'], argv.customHtml);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      if (argv.uid !== undefined) setNestedValue(bodyData, ['uid'], argv.uid);
      const result = await client.post<unknown>(`/accounts/${accountId}/access/custom_pages`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
