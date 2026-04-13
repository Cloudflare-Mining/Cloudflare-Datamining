/**
 * namespaces-scripts-secrets-list command
 * @generated from apis/workers-for-platforms/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface NamespacesScriptsSecretsListArgs {
  dispatchNamespace: string;
  scriptName: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, NamespacesScriptsSecretsListArgs> = {
  command: 'namespaces-scripts-secrets-list <dispatchNamespace> <scriptName>',
  describe: 'List secrets bound to a script uploaded to a Workers for Platforms namespace.',

  builder: (yargs: Argv): Argv<NamespacesScriptsSecretsListArgs> => {
    return yargs
      .positional('dispatchNamespace', {
        type: 'string',
        description: 'Name of the Workers for Platforms dispatch namespace.',
        demandOption: true,
      })
      .positional('scriptName', {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
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
      }) as Argv<NamespacesScriptsSecretsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<NamespacesScriptsSecretsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.dispatchNamespace as string | undefined, 'dispatchNamespace');
      validateResourceId(argv.scriptName as string | undefined, 'scriptName');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workersForPlatforms.dispatch.namespacesScriptsSecretsList(
        accountId,
        argv.dispatchNamespace,
        argv.scriptName,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
