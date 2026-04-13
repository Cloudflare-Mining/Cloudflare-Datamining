/**
 * get-active-livestreams-for-livestream-id command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetActiveLivestreamsForLivestreamIdArgs {
  appId: string;
  livestreamId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetActiveLivestreamsForLivestreamIdArgs> = {
  command: 'get-active-livestreams-for-livestream-id <appId> <livestreamId>',
  describe:
    'Returns details of all active livestreams for the given livestream ID. Retreive the livestream ID using the \`Start livestreaming a meeting\` API.',

  builder: (yargs: Argv): Argv<GetActiveLivestreamsForLivestreamIdArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The app identifier tag.',
        demandOption: true,
      })
      .positional('livestreamId', {
        type: 'string',
        description: 'Livestream ID',
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
      }) as Argv<GetActiveLivestreamsForLivestreamIdArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetActiveLivestreamsForLivestreamIdArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.livestreamId as string | undefined, 'livestreamId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.livestreams.getActiveLivestreamsForLivestreamId(
        accountId,
        argv.appId,
        argv.livestreamId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
