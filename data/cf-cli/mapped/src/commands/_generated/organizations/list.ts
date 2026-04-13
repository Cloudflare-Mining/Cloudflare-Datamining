/**
 * list command
 * @generated from apis/organizations/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';

interface ListArgs {
  id?: string;
  name?: string;
  'name-starts-with'?: string;
  'name-ends-with'?: string;
  'name-contains'?: string;
  'containing-account'?: string;
  'containing-user'?: string;
  'containing-organization'?: string;
  'parent-id'?: string;
  'page-token'?: string;
  'page-size'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe:
    'Retrieve a list of organizations a particular user has access to. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('id', {
        type: 'string',
        description:
          'Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description:
          '(case-sensitive) Filter the list of organizations to where the name is equal to a particular string.',
        default: undefined,
      })
      .option('name-starts-with', {
        type: 'string',
        description:
          '(case-insensitive) Filter the list of organizations to where the name starts with a particular string.',
        default: undefined,
      })
      .option('name-ends-with', {
        type: 'string',
        description:
          '(case-insensitive) Filter the list of organizations to where the name ends with a particular string.',
        default: undefined,
      })
      .option('name-contains', {
        type: 'string',
        description:
          '(case-insensitive) Filter the list of organizations to where the name contains a particular string.',
        default: undefined,
      })
      .option('containing-account', {
        type: 'string',
        description: 'Filter the list of organizations to the ones that contain this particular account.',
        default: undefined,
      })
      .option('containing-user', {
        type: 'string',
        description:
          'Filter the list of organizations to the ones that contain this particular user.  IMPORTANT: Just because an organization "contains" a user is not a representation of any authorization or privilege to manage any resources therein. An organization "containing" a user simply means the user is managed by that organization.',
        default: undefined,
      })
      .option('containing-organization', {
        type: 'string',
        description: 'Filter the list of organizations to the ones that contain this particular organization.',
        default: undefined,
      })
      .option('parent-id', {
        type: 'string',
        description:
          'Filter the list of organizations to the ones that are a sub-organization of the specified organization.  "null" is a valid value to provide for this parameter. It means "where an organization has no parent (i.e. it is a \'root\' organization)."',
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
      const params: Record<string, unknown> = {};
      if (argv.id !== undefined) params['id'] = argv.id;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.nameStartswith !== undefined) params['nameStartswith'] = argv.nameStartswith;
      if (argv.nameEndswith !== undefined) params['nameEndswith'] = argv.nameEndswith;
      if (argv.nameContains !== undefined) params['nameContains'] = argv.nameContains;
      if (argv.containingAccount !== undefined) params['containingAccount'] = argv.containingAccount;
      if (argv.containingUser !== undefined) params['containingUser'] = argv.containingUser;
      if (argv.containingOrganization !== undefined) params['containingOrganization'] = argv.containingOrganization;
      if (argv.parentId !== undefined) params['parentId'] = argv.parentId;
      if (argv.pageToken !== undefined) params['page_token'] = argv.pageToken;
      if (argv.pageSize !== undefined) params['page_size'] = argv.pageSize;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.organizations.list(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
