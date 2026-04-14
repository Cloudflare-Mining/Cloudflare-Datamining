/**
 * zone-sending-get command
 * @generated from apis/email-routing/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ZoneSendingGetArgs {
  zoneId?: string;
  suppressionId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ZoneSendingGetArgs> = {
  command: 'zone-sending-get [zoneId] <suppressionId>',
  describe: 'Get a zone sending suppression entry',

  builder: (yargs: Argv): Argv<ZoneSendingGetArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Zone ID (or use --zone flag)',
      })
      .positional('suppressionId', {
        type: 'string',
        description: 'Suppression ID',
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
      }) as Argv<ZoneSendingGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ZoneSendingGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.suppressionId as string | undefined, 'suppressionId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.emailRouting.suppression.zoneSendingGet(zoneId, argv.suppressionId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
