/**
 * get command
 * @generated from apis/resource-sharing/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';

interface GetArgs {
  shareId: string;
  'include-resources'?: boolean;
  'include-recipient-counts'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get <shareId>',
  describe: 'Fetches share by ID.',

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
      .positional('shareId', {
        type: 'string',
        description: 'Share identifier tag.',
        demandOption: true,
      })
      .option('include-resources', {
        type: 'boolean',
        description: 'Include resources in the response.',
        default: false,
      })
      .option('include-recipient-counts', {
        type: 'boolean',
        description: 'Include recipient counts in the response.',
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
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.shareId as string | undefined, 'shareId');

      const params: Record<string, unknown> = {};
      if (argv.includeResources !== undefined) params['include_resources'] = argv.includeResources;
      if (argv.includeRecipientCounts !== undefined) params['include_recipient_counts'] = argv.includeRecipientCounts;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.resourceSharing.get(
        accountId,
        argv.shareId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
