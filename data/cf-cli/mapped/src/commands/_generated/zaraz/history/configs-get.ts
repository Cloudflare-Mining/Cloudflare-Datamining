/**
 * configs-get command
 * @generated from apis/zaraz/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ConfigsGetArgs {
  zoneId?: string;
  ids: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ConfigsGetArgs> = {
  command: 'configs-get [zoneId]',
  describe: 'Gets a history of published Zaraz configurations by ID(s) for a zone.',

  builder: (yargs: Argv): Argv<ConfigsGetArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('ids', {
        type: 'string',
        description: 'Comma separated list of Zaraz configuration IDs',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<ConfigsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConfigsGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.ids !== undefined) params['ids'] = argv.ids;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.zaraz.history.configsGet(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
