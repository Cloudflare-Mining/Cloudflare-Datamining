/**
 * infrastructure-targets-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface InfrastructureTargetsGetArgs {
  targetId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, InfrastructureTargetsGetArgs> = {
  command: 'infrastructure-targets-get <targetId>',
  describe:
    'Retrieves details for a specific infrastructure access target, including its hostname, IP, and access configuration.',

  builder: (yargs: Argv): Argv<InfrastructureTargetsGetArgs> => {
    return yargs
      .positional('targetId', {
        type: 'string',
        description: 'Target identifier',
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
      }) as Argv<InfrastructureTargetsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InfrastructureTargetsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.targetId as string | undefined, 'targetId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.access.infrastructureTargetsGet(accountId, argv.targetId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
