/**
 * members-list command
 * @generated from apis/iam/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface MembersListArgs {
  userGroupId: string;
  page?: number;
  'per-page'?: number;
  'fuzzy-email'?: string;
  direction?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, MembersListArgs> = {
  command: 'members-list <userGroupId>',
  describe: 'List all the members attached to a user group.',

  builder: (yargs: Argv): Argv<MembersListArgs> => {
    return yargs
      .positional('userGroupId', {
        type: 'string',
        description: 'User Group identifier tag.',
        demandOption: true,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Maximum number of results per page.',
        default: undefined,
      })
      .option('fuzzy-email', {
        type: 'string',
        description: 'A string used for filtering members by partial email match.',
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'The sort order of returned user group members by email.',
        choices: ['asc', 'desc'] as const,
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
      }) as Argv<MembersListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MembersListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.userGroupId as string | undefined, 'userGroupId');

      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.fuzzyEmail !== undefined) params['fuzzyEmail'] = argv.fuzzyEmail;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.iam.usergroups.membersList(
        accountId,
        argv.userGroupId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
