/**
 * zones-available-list command
 * @generated from apis/logpush/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ZonesAvailableListArgs {
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ZonesAvailableListArgs> = {
  command: 'zones-available-list',
  describe:
    'Returns all dataset types that this zone can create. Each entry includes the dataset schema and timestamp field. The schema shows all possible fields for a dataset. However, not all fields may be available for your account. When creating or updating a dataset, only fields available to your account can be enabled. If you request a field that is not available, you will receive an error.',

  builder: (yargs: Argv): Argv<ZonesAvailableListArgs> => {
    return yargs
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<ZonesAvailableListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ZonesAvailableListArgs>): Promise<void> => {
    try {
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.logpush.logexplorerdatasets.zonesAvailableList(zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
