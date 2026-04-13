/**
 * bgp-prefixes-get command
 * @generated from apis/addressing/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface BgpPrefixesGetArgs {
  prefixId: string;
  bgpPrefixId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, BgpPrefixesGetArgs> = {
  command: 'bgp-prefixes-get <prefixId> <bgpPrefixId>',
  describe: 'Retrieve a single BGP Prefix according to its identifier',

  builder: (yargs: Argv): Argv<BgpPrefixesGetArgs> => {
    return yargs
      .positional('prefixId', {
        type: 'string',
        description: 'Identifier of an IP Prefix.',
        demandOption: true,
      })
      .positional('bgpPrefixId', {
        type: 'string',
        description: 'Identifier of BGP Prefix.',
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
      }) as Argv<BgpPrefixesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BgpPrefixesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.prefixId as string | undefined, 'prefixId');
      validateResourceId(argv.bgpPrefixId as string | undefined, 'bgpPrefixId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.addressing.prefixes.bgpPrefixesGet(accountId, argv.prefixId, argv.bgpPrefixId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
