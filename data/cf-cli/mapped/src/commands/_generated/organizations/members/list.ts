/**
 * list command
 * @generated from apis/organizations/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ListArgs {
  organizationId: string;
  status?: string;
  'user-email'?: string;
  'user-email-contains'?: string;
  'user-email-starts-with'?: string;
  'user-email-ends-with'?: string;
  'page-token'?: string;
  'page-size'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list <organizationId>',
  describe:
    'List memberships for an Organization. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('organizationId', {
        type: 'string',
        description: 'Organization ID',
        demandOption: true,
      })
      .option('status', {
        type: 'string',
        description: 'Filter the list of memberships by membership status.',
        default: undefined,
      })
      .option('user-email', {
        type: 'string',
        description: 'Filter the list of memberships for a specific email.',
        default: undefined,
      })
      .option('user-email-contains', {
        type: 'string',
        description: 'Filter the list of memberships for a specific email that contains a substring.',
        default: undefined,
      })
      .option('user-email-starts-with', {
        type: 'string',
        description: 'Filter the list of memberships for a specific email that starts with a substring.',
        default: undefined,
      })
      .option('user-email-ends-with', {
        type: 'string',
        description: 'Filter the list of memberships for a specific email that ends with a substring.',
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.organizationId as string | undefined, 'organizationId');

      const params: Record<string, unknown> = {};
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.userEmail !== undefined) params['userEmail'] = argv.userEmail;
      if (argv.userEmailContains !== undefined) params['userEmailContains'] = argv.userEmailContains;
      if (argv.userEmailStartswith !== undefined) params['userEmailStartswith'] = argv.userEmailStartswith;
      if (argv.userEmailEndswith !== undefined) params['userEmailEndswith'] = argv.userEmailEndswith;
      if (argv.pageToken !== undefined) params['page_token'] = argv.pageToken;
      if (argv.pageSize !== undefined) params['page_size'] = argv.pageSize;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.organizations.members.list(
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
