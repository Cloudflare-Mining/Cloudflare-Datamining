/**
 * environment-variables-list command
 * @generated from apis/builds/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface EnvironmentVariablesListArgs {
  triggerUuid: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, EnvironmentVariablesListArgs> = {
  command: 'environment-variables-list <triggerUuid>',
  describe: 'Get all environment variables for a trigger',

  builder: (yargs: Argv): Argv<EnvironmentVariablesListArgs> => {
    return yargs
      .positional('triggerUuid', {
        type: 'string',
        description: 'Trigger UUID.',
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
      }) as Argv<EnvironmentVariablesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EnvironmentVariablesListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.triggerUuid as string | undefined, 'triggerUuid');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.builds.triggers.environmentVariablesList(accountId, argv.triggerUuid);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
