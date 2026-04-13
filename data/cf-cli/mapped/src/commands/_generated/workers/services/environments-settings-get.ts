/**
 * environments-settings-get command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface EnvironmentsSettingsGetArgs {
  serviceName: string;
  environmentName: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, EnvironmentsSettingsGetArgs> = {
  command: 'environments-settings-get <serviceName> <environmentName>',
  describe: 'Get script settings from a worker with an environment.',

  builder: (yargs: Argv): Argv<EnvironmentsSettingsGetArgs> => {
    return yargs
      .positional('serviceName', {
        type: 'string',
        description: 'Name of Worker to bind to.',
        demandOption: true,
      })
      .positional('environmentName', {
        type: 'string',
        description: 'Optional environment if the Worker utilizes one.',
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
      }) as Argv<EnvironmentsSettingsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EnvironmentsSettingsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.serviceName as string | undefined, 'serviceName');
      validateResourceId(argv.environmentName as string | undefined, 'environmentName');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.services.environmentsSettingsGet(
        accountId,
        argv.serviceName,
        argv.environmentName,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
