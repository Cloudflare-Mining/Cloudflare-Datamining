/**
 * get-participant-data-from-peer-id command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetParticipantDataFromPeerIdArgs {
  appId: string;
  peerId: string;
  filters?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetParticipantDataFromPeerIdArgs> = {
  command: 'get-participant-data-from-peer-id <appId> <peerId>',
  describe: 'Returns details of the given peer ID along with call statistics for the given session ID.',

  builder: (yargs: Argv): Argv<GetParticipantDataFromPeerIdArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The app identifier tag.',
        demandOption: true,
      })
      .positional('peerId', {
        type: 'string',
        description: 'ID of the peer',
        demandOption: true,
      })
      .option('filters', {
        type: 'string',
        description: 'Comma separated list of filters to apply. Note that there must be no spaces between the filters.',
        choices: ['device_info', 'ip_information', 'precall_network_information', 'events', 'quality_stats'] as const,
        default: undefined,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<GetParticipantDataFromPeerIdArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetParticipantDataFromPeerIdArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.peerId as string | undefined, 'peerId');

      const params: Record<string, unknown> = {};
      if (argv.filters !== undefined) params['filters'] = argv.filters;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.sessions.getParticipantDataFromPeerId(
        accountId,
        argv.appId,
        argv.peerId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
