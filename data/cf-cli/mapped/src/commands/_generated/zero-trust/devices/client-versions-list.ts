/**
 * client-versions-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ClientVersionsListArgs {
  'target-environment': string;
  'release-track': string;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ClientVersionsListArgs> = {
  command: 'client-versions-list',
  describe:
    'Lists available WARP client versions for a specific target environment and release track. This endpoint is in Beta.',

  builder: (yargs: Argv): Argv<ClientVersionsListArgs> => {
    return yargs
      .option('target-environment', {
        type: 'string',
        description: 'The target environment for the client version (e.g., windows, macos).',
      })
      .option('release-track', {
        type: 'string',
        description: 'The release track (ga for General Availability, beta for Beta releases).',
        choices: ['ga', 'beta'] as const,
      })
      .option('page', {
        type: 'number',
        description: 'The page number to return.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'The maximum number of versions to return per page.',
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
      }) as Argv<ClientVersionsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ClientVersionsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.targetEnvironment !== undefined) params['target_environment'] = argv.targetEnvironment;
      if (argv.releaseTrack !== undefined) params['release_track'] = argv.releaseTrack;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.devices.clientVersionsList(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
