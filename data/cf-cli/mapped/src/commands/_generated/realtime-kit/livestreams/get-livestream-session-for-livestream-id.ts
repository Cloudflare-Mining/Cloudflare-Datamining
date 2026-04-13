/**
 * get-livestream-session-for-livestream-id command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetLivestreamSessionForLivestreamIdArgs {
  appId: string;
  livestreamId: string;
  'page-no'?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetLivestreamSessionForLivestreamIdArgs> = {
  command: 'get-livestream-session-for-livestream-id <appId> <livestreamId>',
  describe:
    'Returns details of a livestream with sessions for the given livestream ID. Retreive the livestream ID using the \`Start livestreaming a meeting\` API.',

  builder: (yargs: Argv): Argv<GetLivestreamSessionForLivestreamIdArgs> => {
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
      .option('page-no', {
        type: 'number',
        description: 'The page number from which you want your page search results to be displayed.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of results per page.',
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
      }) as Argv<GetLivestreamSessionForLivestreamIdArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetLivestreamSessionForLivestreamIdArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.livestreamId as string | undefined, 'livestreamId');

      const params: Record<string, unknown> = {};
      if (argv.pageNo !== undefined) params['page_no'] = argv.pageNo;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.livestreams.getLivestreamSessionForLivestreamId(
        accountId,
        argv.appId,
        argv.livestreamId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
