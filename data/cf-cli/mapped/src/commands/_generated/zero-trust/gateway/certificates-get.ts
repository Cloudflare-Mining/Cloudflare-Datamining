/**
 * certificates-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface CertificatesGetArgs {
  certificateId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, CertificatesGetArgs> = {
  command: 'certificates-get <certificateId>',
  describe: 'Get a single Zero Trust certificate.',

  builder: (yargs: Argv): Argv<CertificatesGetArgs> => {
    return yargs
      .positional('certificateId', {
        type: 'string',
        description: 'Identify the certificate with a UUID.',
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
      }) as Argv<CertificatesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CertificatesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.certificateId as string | undefined, 'certificateId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.gateway.certificatesGet(argv.certificateId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
