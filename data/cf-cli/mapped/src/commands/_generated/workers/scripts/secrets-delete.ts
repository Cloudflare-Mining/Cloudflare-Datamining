/**
 * secrets-delete command
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

interface SecretsDeleteArgs {
  scriptName: string;
  secretName: string;
  'url-encoded'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SecretsDeleteArgs> = {
  command: 'secrets-delete <scriptName> <secretName>',
  describe: 'Remove a secret from a script.',

  builder: (yargs: Argv): Argv<SecretsDeleteArgs> => {
    return yargs
      .positional('scriptName', {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
        demandOption: true,
      })
      .positional('secretName', {
        type: 'string',
        description: 'A JavaScript variable name for the secret binding.',
        demandOption: true,
      })
      .option('url-encoded', {
        type: 'string',
        description: 'Flag that indicates whether the secret name is URL encoded.',
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
      }) as Argv<SecretsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SecretsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.scriptName as string | undefined, 'scriptName');
      validateResourceId(argv.secretName as string | undefined, 'secretName');

      const params: Record<string, unknown> = {};
      if (argv.urlEncoded !== undefined) params['url_encoded'] = argv.urlEncoded;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers scripts secrets-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/scripts/${argv.scriptName ?? '<scriptName>'}/secrets/${argv.secretName ?? '<secretName>'}`,
          pathParams: { scriptName: String(argv.scriptName ?? ''), secretName: String(argv.secretName ?? '') },
          body: { ...params },
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

      const result = await client.workers.scripts.secretsDelete(
        accountId,
        argv.scriptName,
        argv.secretName,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
