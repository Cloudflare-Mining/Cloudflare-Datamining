/**
 * details-get command
 * @generated from apis/waiting-rooms/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface DetailsGetArgs {
  eventId: string;
  waitingRoomId: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, DetailsGetArgs> = {
  command: 'details-get <eventId> <waitingRoomId> [zoneId]',
  describe:
    "Previews an event's configuration as if it was active. Inherited fields from the waiting room will be displayed with their current values.",

  builder: (yargs: Argv): Argv<DetailsGetArgs> => {
    return yargs
      .positional('eventId', {
        type: 'string',
        description: 'Event ID',
        demandOption: true,
      })
      .positional('waitingRoomId', {
        type: 'string',
        description: 'Waiting room ID',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<DetailsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DetailsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.eventId as string | undefined, 'eventId');
      validateResourceId(argv.waitingRoomId as string | undefined, 'waitingRoomId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.waitingRooms.events.detailsGet(argv.eventId, argv.waitingRoomId, zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
