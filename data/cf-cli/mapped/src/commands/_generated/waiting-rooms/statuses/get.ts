/**
 * get command
 * @generated from apis/waiting-rooms/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetArgs {
  waitingRoomId: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get <waitingRoomId> [zoneId]',
  describe:
    "Fetches the status of a configured waiting room. Response fields include: 1. \`status\`: String indicating the status of the waiting room. The possible status are: - **not_queueing** indicates that the configured thresholds have not been met and all users are going through to the origin. - **queueing** indicates that the thresholds have been met and some users are held in the waiting room. - **event_prequeueing** indicates that an event is active and is currently prequeueing users before it starts. - **suspended** indicates that the room is suspended. 2. \`event_id\`: String of the current event's \`id\` if an event is active, otherwise an empty string. 3. \`estimated_queued_users\`: Integer of the estimated number of users currently waiting in the queue. 4. \`estimated_total_active_users\`: Integer of the estimated number of users currently active on the origin. 5. \`max_estimated_time_minutes\`: Integer of the maximum estimated time currently presented to the users.",

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
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
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.waitingRoomId as string | undefined, 'waitingRoomId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.waitingRooms.statuses.get(argv.waitingRoomId, zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
