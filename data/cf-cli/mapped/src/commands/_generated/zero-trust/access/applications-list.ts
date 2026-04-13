/**
 * applications-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ApplicationsListArgs {
  name?: string;
  domain?: string;
  aud?: string;
  'target-attributes'?: string;
  exact?: boolean;
  search?: string;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ApplicationsListArgs> = {
  command: 'applications-list',
  describe: 'Lists all Access applications in an account.',

  builder: (yargs: Argv): Argv<ApplicationsListArgs> => {
    return yargs
      .option('name', {
        type: 'string',
        description: 'The name of the app.',
        default: undefined,
      })
      .option('domain', {
        type: 'string',
        description: 'The domain of the app.',
        default: undefined,
      })
      .option('aud', {
        type: 'string',
        description: 'The aud of the app.',
        default: undefined,
      })
      .option('target-attributes', {
        type: 'string',
        description: 'Target Criteria attributes in key=value format.',
        default: undefined,
      })
      .option('exact', {
        type: 'boolean',
        description: 'True for only exact string matches against passed name/domain query parameters.',
        default: false,
      })
      .option('search', {
        type: 'string',
        description: 'Search for apps by other listed query parameters.',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of results.',
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
      }) as Argv<ApplicationsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ApplicationsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.domain !== undefined) params['domain'] = argv.domain;
      if (argv.aud !== undefined) params['aud'] = argv.aud;
      if (argv.targetAttributes !== undefined) params['target_attributes'] = argv.targetAttributes;
      if (argv.exact !== undefined) params['exact'] = argv.exact;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.access.applicationsList(
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
