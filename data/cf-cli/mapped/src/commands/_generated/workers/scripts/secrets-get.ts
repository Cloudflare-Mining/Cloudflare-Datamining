/**
 * secrets-get command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface SecretsGetArgs {
  scriptName: string;
  secretName: string;
  'url-encoded'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SecretsGetArgs> = {
  command: 'secrets-get <scriptName> <secretName>',
  describe: 'Get a given secret binding (value omitted) on a script.',

  builder: (yargs: Argv): Argv<SecretsGetArgs> => {
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
      }) as Argv<SecretsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SecretsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.scriptName as string | undefined, 'scriptName');
      validateResourceId(argv.secretName as string | undefined, 'secretName');

      const params: Record<string, unknown> = {};
      if (argv.urlEncoded !== undefined) params['url_encoded'] = argv.urlEncoded;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.scripts.secretsGet(
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
