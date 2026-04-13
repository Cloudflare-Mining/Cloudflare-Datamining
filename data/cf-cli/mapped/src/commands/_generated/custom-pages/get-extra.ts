/**
 * get-extra command
 * @generated from apis/custom-pages/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';

interface GetExtraArgs {
  identifier: string;
  zoneIdentifier: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, GetExtraArgs> = {
  command: 'get-extra <identifier> <zoneIdentifier>',
  describe: 'Fetches the details of a custom page.',

  builder: (yargs: Argv): Argv<GetExtraArgs> => {
    return yargs
      .positional('identifier', {
        type: 'string',
        description: 'Error Page Types',
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
      }) as Argv<GetExtraArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetExtraArgs>): Promise<void> => {
    try {
      validateResourceId(argv.identifier as string | undefined, 'identifier');
      validateResourceId(argv.zoneIdentifier as string | undefined, 'zoneIdentifier');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.customPages.getExtra(argv.identifier, zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
