/**
 * dex-tests-create command
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

interface DexTestsCreateArgs {
  'data-host': string;
  'data-kind': string;
  'data-method'?: string;
  description?: string;
  enabled: boolean;
  interval: string;
  name: string;
  targeted?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DexTestsCreateArgs> = {
  command: 'dex-tests-create',
  describe: 'Create a DEX test.',

  builder: (yargs: Argv): Argv<DexTestsCreateArgs> => {
    return yargs
      .option('data-host', {
        type: 'string',
        description: 'The desired endpoint to test.',
      })
      .option('data-kind', {
        type: 'string',
        description: 'The type of test.',
        choices: ['http', 'traceroute'] as const,
      })
      .option('data-method', {
        type: 'string',
        description: 'The HTTP request method type.',
        choices: ['GET'] as const,
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'Additional details about the test.',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Determines whether or not the test is active.',
      })
      .option('interval', {
        type: 'string',
        description: 'How often the test will run.',
      })
      .option('name', {
        type: 'string',
        description: 'The name of the DEX test. Must be unique.',
      })
      .option('targeted', {
        type: 'boolean',
        description: 'The targeted field',
        default: false,
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
      .choices('data-kind', ['http', 'traceroute'] as const)
      .choices('data-method', ['GET'] as const) as Argv<DexTestsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DexTestsCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust devices dex-tests-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dex/devices/dex_tests`,
          pathParams: {},
          body: {
            dataHost: argv.dataHost,
            dataKind: argv.dataKind,
            dataMethod: argv.dataMethod,
            description: argv.description,
            enabled: argv.enabled,
            interval: argv.interval,
            name: argv.name,
            targeted: argv.targeted,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/dex/devices/dex_tests`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.dataHost !== undefined) setNestedValue(bodyData, ['data', 'host'], argv.dataHost);
      if (argv.dataKind !== undefined) setNestedValue(bodyData, ['data', 'kind'], argv.dataKind);
      if (argv.dataMethod !== undefined) setNestedValue(bodyData, ['data', 'method'], argv.dataMethod);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.interval !== undefined) setNestedValue(bodyData, ['interval'], argv.interval);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.targeted !== undefined) setNestedValue(bodyData, ['targeted'], argv.targeted);
      const result = await client.post<unknown>(`/accounts/${accountId}/dex/devices/dex_tests`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
