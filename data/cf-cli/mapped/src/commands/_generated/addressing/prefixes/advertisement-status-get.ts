/**
 * advertisement-status-get command
 * @generated from apis/addressing/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface AdvertisementStatusGetArgs {
  prefixId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AdvertisementStatusGetArgs> = {
  command: 'advertisement-status-get <prefixId>',
  describe:
    'View the current advertisement state for a prefix. **Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for advertising and withdrawing subnets of an IP prefix.',

  builder: (yargs: Argv): Argv<AdvertisementStatusGetArgs> => {
    return yargs
      .positional('prefixId', {
        type: 'string',
        description: 'Identifier of an IP Prefix.',
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
      }) as Argv<AdvertisementStatusGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AdvertisementStatusGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.prefixId as string | undefined, 'prefixId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.addressing.prefixes.advertisementStatusGet(argv.prefixId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
