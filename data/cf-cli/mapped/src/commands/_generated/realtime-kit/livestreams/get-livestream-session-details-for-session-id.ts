/**
 * get-livestream-session-details-for-session-id command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetLivestreamSessionDetailsForSessionIdArgs {
  appId: string;
  livestreamSessionId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetLivestreamSessionDetailsForSessionIdArgs> = {
  command: 'get-livestream-session-details-for-session-id <appId> <livestreamSessionId>',
  describe:
    'Returns livestream session details for the given livestream session ID. Retrieve the \`livestream_session_id\`using the \`Fetch livestream session details using a session ID\` API.',

  builder: (yargs: Argv): Argv<GetLivestreamSessionDetailsForSessionIdArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The app identifier tag.',
        demandOption: true,
      })
      .positional('livestreamSessionId', {
        type: 'string',
        description: 'Livestream-session-id',
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
      }) as Argv<GetLivestreamSessionDetailsForSessionIdArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetLivestreamSessionDetailsForSessionIdArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.livestreamSessionId as string | undefined, 'livestreamSessionId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.livestreams.getLivestreamSessionDetailsForSessionId(
        accountId,
        argv.appId,
        argv.livestreamSessionId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
