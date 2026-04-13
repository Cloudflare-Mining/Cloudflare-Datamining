/**
 * edit command
 * @generated from apis/magic-network-monitoring/schema.ts
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

interface EditArgs {
  'default-sampling'?: number;
  name?: string;
  'router-ips'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit',
  describe: 'Update fields in an existing network monitoring configuration.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .option('default-sampling', {
        type: 'number',
        description:
          'Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the router.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The account name.',
        default: undefined,
      })
      .option('router-ips', {
        type: 'string',
        description: 'The router_ips field',
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
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-network-monitoring configs edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/mnm/config`,
          pathParams: {},
          body: { defaultSampling: argv.defaultSampling, name: argv.name, routerIps: argv.routerIps },
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/mnm/config`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.defaultSampling !== undefined) setNestedValue(bodyData, ['default_sampling'], argv.defaultSampling);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.routerIps !== undefined) setNestedValue(bodyData, ['router_ips'], argv.routerIps);
      const result = await client.patch<unknown>(`/accounts/${accountId}/mnm/config`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
