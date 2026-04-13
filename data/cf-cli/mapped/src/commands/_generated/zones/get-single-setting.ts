/**
 * get-single-setting command
 * @generated from apis/zones/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';

interface GetSingleSettingArgs {
  zoneId?: string;
  settingId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, GetSingleSettingArgs> = {
  command: 'get-single-setting [zoneId] <settingId>',
  describe: 'Fetch a single zone setting by name',

  builder: (yargs: Argv): Argv<GetSingleSettingArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier (or use --zone flag)',
      })
      .positional('settingId', {
        type: 'string',
        description: 'Setting name',
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
      }) as Argv<GetSingleSettingArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetSingleSettingArgs>): Promise<void> => {
    try {
      validateResourceId(argv.settingId as string | undefined, 'settingId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.zones.getSingleSetting(zoneId, argv.settingId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
