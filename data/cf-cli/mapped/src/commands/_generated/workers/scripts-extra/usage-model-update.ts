/**
 * usage-model-update command
 * @generated from apis/workers/schema.ts
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

interface UsageModelUpdateArgs {
  scriptName: string;
  'usage-model'?: string;
  'user-limits-cpu-ms'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UsageModelUpdateArgs> = {
  command: 'usage-model-update <scriptName>',
  describe: 'Updates the Usage Model for a given Worker. Requires a Workers Paid subscription.',

  builder: (yargs: Argv): Argv<UsageModelUpdateArgs> => {
    return yargs
      .positional('scriptName', {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
        demandOption: true,
      })
      .option('usage-model', {
        type: 'string',
        description: 'Usage model for the Worker invocations.',
        choices: ['standard', 'bundled', 'unbound'] as const,
        default: undefined,
      })
      .option('user-limits-cpu-ms', {
        type: 'number',
        description: 'The amount of CPU time this Worker can use in milliseconds.',
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
      .choices('usage-model', ['standard', 'bundled', 'unbound'] as const) as Argv<UsageModelUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UsageModelUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.scriptName as string | undefined, 'scriptName');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers scripts-extra usage-model-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/scripts/${argv.scriptName ?? '<scriptName>'}/usage-model`,
          pathParams: { scriptName: String(argv.scriptName ?? '') },
          body: { usageModel: argv.usageModel, userLimitsCpuMs: argv.userLimitsCpuMs },
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
        const result = await client.put<unknown>(
          `/accounts/${accountId}/workers/scripts/${argv.scriptName}/usage-model`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.usageModel !== undefined) setNestedValue(bodyData, ['usage_model'], argv.usageModel);
      if (argv.userLimitsCpuMs !== undefined) setNestedValue(bodyData, ['user_limits', 'cpu_ms'], argv.userLimitsCpuMs);
      const result = await client.put<unknown>(
        `/accounts/${accountId}/workers/scripts/${argv.scriptName}/usage-model`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
