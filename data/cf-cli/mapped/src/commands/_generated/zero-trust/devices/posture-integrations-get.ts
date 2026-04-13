/**
 * posture-integrations-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface PostureIntegrationsGetArgs {
  integrationId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PostureIntegrationsGetArgs> = {
  command: 'posture-integrations-get <integrationId>',
  describe: 'Fetches details for a single device posture integration.',

  builder: (yargs: Argv): Argv<PostureIntegrationsGetArgs> => {
    return yargs
      .positional('integrationId', {
        type: 'string',
        description: 'API UUID.',
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
      }) as Argv<PostureIntegrationsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PostureIntegrationsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.integrationId as string | undefined, 'integrationId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.devices.postureIntegrationsGet(argv.integrationId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
