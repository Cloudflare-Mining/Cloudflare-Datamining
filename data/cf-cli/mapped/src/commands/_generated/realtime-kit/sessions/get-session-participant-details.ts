/**
 * get-session-participant-details command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetSessionParticipantDetailsArgs {
  appId: string;
  participantId: string;
  sessionId: string;
  filters?: string;
  'include-peer-events'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetSessionParticipantDetailsArgs> = {
  command: 'get-session-participant-details <appId> <participantId> <sessionId>',
  describe: 'Returns details of the given participant ID along with call statistics for the given session ID.',

  builder: (yargs: Argv): Argv<GetSessionParticipantDetailsArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The app identifier tag.',
        demandOption: true,
      })
      .positional('participantId', {
        type: 'string',
        description: 'ID of the participant',
        demandOption: true,
      })
      .positional('sessionId', {
        type: 'string',
        description: 'ID of the session',
        demandOption: true,
      })
      .option('filters', {
        type: 'string',
        description: 'Comma separated list of filters to apply. Note that there must be no spaces between the filters.',
        choices: ['device_info', 'ip_information', 'precall_network_information', 'events', 'quality_stats'] as const,
        default: undefined,
      })
      .option('include-peer-events', {
        type: 'boolean',
        description: 'if true, response includes all the peer events of participant.',
        default: false,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<GetSessionParticipantDetailsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetSessionParticipantDetailsArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.participantId as string | undefined, 'participantId');
      validateResourceId(argv.sessionId as string | undefined, 'sessionId');

      const params: Record<string, unknown> = {};
      if (argv.filters !== undefined) params['filters'] = argv.filters;
      if (argv.includePeerEvents !== undefined) params['include_peer_events'] = argv.includePeerEvents;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.sessions.getSessionParticipantDetails(
        accountId,
        argv.appId,
        argv.participantId,
        argv.sessionId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
