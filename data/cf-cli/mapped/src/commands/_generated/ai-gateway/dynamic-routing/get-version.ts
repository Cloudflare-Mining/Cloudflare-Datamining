/**
 * get-version command
 * @generated from apis/ai-gateway/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetVersionArgs {
  gatewayId: string;
  id: string;
  versionId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetVersionArgs> = {
  command: 'get-version <gatewayId> <id> <versionId>',
  describe: 'Get an AI Gateway Dynamic Route Version.',

  builder: (yargs: Argv): Argv<GetVersionArgs> => {
    return yargs
      .positional('gatewayId', {
        type: 'string',
        description: 'Gateway ID',
        demandOption: true,
      })
      .positional('id', {
        type: 'string',
        description: 'ID',
        demandOption: true,
      })
      .positional('versionId', {
        type: 'string',
        description: 'Version ID',
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
      }) as Argv<GetVersionArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetVersionArgs>): Promise<void> => {
    try {
      validateResourceId(argv.gatewayId as string | undefined, 'gatewayId');
      validateResourceId(argv.id as string | undefined, 'id');
      validateResourceId(argv.versionId as string | undefined, 'versionId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.aiGateway.dynamicrouting.getVersion(
        accountId,
        argv.gatewayId,
        argv.id,
        argv.versionId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
