/**
 * get-v2 command
 * @generated from apis/custom-pages/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetV2Args {
  assetName: string;
  zoneIdentifier: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, GetV2Args> = {
  command: 'get-v2 <assetName> <zoneIdentifier>',
  describe: 'Fetches the details of a custom asset.',

  builder: (yargs: Argv): Argv<GetV2Args> => {
    return yargs
      .positional('assetName', {
        type: 'string',
        description:
          'The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).',
        demandOption: true,
      })
      .positional('zoneIdentifier', {
        type: 'string',
        description: 'Identifier.',
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
      }) as Argv<GetV2Args>;
  },

  handler: async (argv: ArgumentsCamelCase<GetV2Args>): Promise<void> => {
    try {
      validateResourceId(argv.assetName as string | undefined, 'assetName');
      validateResourceId(argv.zoneIdentifier as string | undefined, 'zoneIdentifier');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.customPages.assets.getV2(argv.assetName, zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
