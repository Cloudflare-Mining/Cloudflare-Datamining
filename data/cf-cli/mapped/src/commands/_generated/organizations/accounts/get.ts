/**
 * get command
 * @generated from apis/organizations/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetArgs {
  organizationId: string;
  'account-pubname'?: string;
  'account-pubname-starts-with'?: string;
  'account-pubname-ends-with'?: string;
  'account-pubname-contains'?: string;
  name?: string;
  'name-starts-with'?: string;
  'name-ends-with'?: string;
  'name-contains'?: string;
  'order-by'?: string;
  direction?: string;
  'page-token'?: string;
  'page-size'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get <organizationId>',
  describe:
    'Retrieve a list of accounts that belong to a specific organization. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)',

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
      .positional('organizationId', {
        type: 'string',
        description: 'The ID of the organization to retrieve a list of accounts for.',
        demandOption: true,
      })
      .option('account-pubname', {
        type: 'string',
        description:
          '(case-insensitive) Filter the list of accounts to where the account_pubname is equal to a particular string.',
        default: undefined,
      })
      .option('account-pubname-starts-with', {
        type: 'string',
        description:
          '(case-insensitive) Filter the list of accounts to where the account_pubname starts with a particular string.',
        default: undefined,
      })
      .option('account-pubname-ends-with', {
        type: 'string',
        description:
          '(case-insensitive) Filter the list of accounts to where the account_pubname ends with a particular string.',
        default: undefined,
      })
      .option('account-pubname-contains', {
        type: 'string',
        description:
          '(case-insensitive) Filter the list of accounts to where the account_pubname contains a particular string.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description:
          '(case-insensitive) Filter the list of accounts to where the name is equal to a particular string.',
        default: undefined,
      })
      .option('name-starts-with', {
        type: 'string',
        description:
          '(case-insensitive) Filter the list of accounts to where the name starts with a particular string.',
        default: undefined,
      })
      .option('name-ends-with', {
        type: 'string',
        description: '(case-insensitive) Filter the list of accounts to where the name ends with a particular string.',
        default: undefined,
      })
      .option('name-contains', {
        type: 'string',
        description: '(case-insensitive) Filter the list of accounts to where the name contains a particular string.',
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description:
          'Field to order results by. Currently supported values: \`account_name\`. When not specified, results are ordered by internal account ID.',
        choices: ['account_name'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description:
          'Sort direction for the order_by field. Valid values: \`asc\`, \`desc\`. Defaults to \`asc\` when order_by is specified.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('page-token', {
        type: 'string',
        description:
          'An opaque token returned from the last list response that when provided will retrieve the next page.  Parameters used to filter the retrieved list must remain in subsequent requests with a page token.',
        default: undefined,
      })
      .option('page-size', {
        type: 'number',
        description: 'The amount of items to return. Defaults to 10.',
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
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.organizationId as string | undefined, 'organizationId');

      const params: Record<string, unknown> = {};
      if (argv.accountPubname !== undefined) params['account_pubname'] = argv.accountPubname;
      if (argv.accountPubnameStartswith !== undefined)
        params['accountPubnameStartswith'] = argv.accountPubnameStartswith;
      if (argv.accountPubnameEndswith !== undefined) params['accountPubnameEndswith'] = argv.accountPubnameEndswith;
      if (argv.accountPubnameContains !== undefined) params['accountPubnameContains'] = argv.accountPubnameContains;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.nameStartswith !== undefined) params['nameStartswith'] = argv.nameStartswith;
      if (argv.nameEndswith !== undefined) params['nameEndswith'] = argv.nameEndswith;
      if (argv.nameContains !== undefined) params['nameContains'] = argv.nameContains;
      if (argv.orderBy !== undefined) params['order_by'] = argv.orderBy;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.pageToken !== undefined) params['page_token'] = argv.pageToken;
      if (argv.pageSize !== undefined) params['page_size'] = argv.pageSize;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.organizations.accounts.get(
        argv.organizationId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
