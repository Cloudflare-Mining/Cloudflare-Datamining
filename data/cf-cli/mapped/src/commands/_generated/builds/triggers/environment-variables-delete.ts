/**
 * environment-variables-delete command
 * @generated from apis/builds/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface EnvironmentVariablesDeleteArgs {
  triggerUuid: string;
  environmentVariableKey: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, EnvironmentVariablesDeleteArgs> = {
  command: 'environment-variables-delete <triggerUuid> <environmentVariableKey>',
  describe: 'Remove a specific environment variable from a trigger',

  builder: (yargs: Argv): Argv<EnvironmentVariablesDeleteArgs> => {
    return yargs
      .positional('triggerUuid', {
        type: 'string',
        description: 'Trigger UUID.',
        demandOption: true,
      })
      .positional('environmentVariableKey', {
        type: 'string',
        description: 'Environment variable key.',
        demandOption: true,
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
      }) as Argv<EnvironmentVariablesDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EnvironmentVariablesDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.triggerUuid as string | undefined, 'triggerUuid');
      validateResourceId(argv.environmentVariableKey as string | undefined, 'environmentVariableKey');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf builds triggers environment-variables-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/builds/triggers/${argv.triggerUuid ?? '<triggerUuid>'}/environment_variables/${argv.environmentVariableKey ?? '<environmentVariableKey>'}`,
          pathParams: {
            triggerUuid: String(argv.triggerUuid ?? ''),
            environmentVariableKey: String(argv.environmentVariableKey ?? ''),
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

      const result = await client.builds.triggers.environmentVariablesDelete(
        accountId,
        argv.triggerUuid,
        argv.environmentVariableKey,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
