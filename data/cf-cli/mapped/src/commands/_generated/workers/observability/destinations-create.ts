/**
 * destinations-create command
 * @generated from apis/workers/schema.ts
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

interface DestinationsCreateArgs {
  'configuration-type': string;
  'configuration-url': string;
  enabled: boolean;
  name: string;
  'skip-preflight-check'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DestinationsCreateArgs> = {
  command: 'destinations-create',
  describe: 'Create a new Workers Observability Telemetry Destination.',

  builder: (yargs: Argv): Argv<DestinationsCreateArgs> => {
    return yargs
      .option('configuration-type', {
        type: 'string',
        description: 'The configuration.type field',
        choices: ['logpush'] as const,
      })
      .option('configuration-url', {
        type: 'string',
        description: 'The configuration.url field',
      })
      .option('enabled', {
        type: 'boolean',
        description: 'The enabled field',
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
      })
      .option('skip-preflight-check', {
        type: 'boolean',
        description: 'The skipPreflightCheck field',
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
      .choices('configuration-type', ['logpush'] as const) as Argv<DestinationsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DestinationsCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers observability destinations-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/observability/destinations`,
          pathParams: {},
          body: {
            configurationType: argv.configurationType,
            configurationUrl: argv.configurationUrl,
            enabled: argv.enabled,
            name: argv.name,
            skipPreflightCheck: argv.skipPreflightCheck,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/workers/observability/destinations`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.configurationType !== undefined)
        setNestedValue(bodyData, ['configuration', 'type'], argv.configurationType);
      if (argv.configurationUrl !== undefined)
        setNestedValue(bodyData, ['configuration', 'url'], argv.configurationUrl);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.skipPreflightCheck !== undefined)
        setNestedValue(bodyData, ['skipPreflightCheck'], argv.skipPreflightCheck);
      const result = await client.post<unknown>(`/accounts/${accountId}/workers/observability/destinations`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
