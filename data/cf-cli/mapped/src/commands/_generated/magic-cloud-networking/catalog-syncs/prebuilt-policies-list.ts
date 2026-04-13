/**
 * prebuilt-policies-list command
 * @generated from apis/magic-cloud-networking/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface PrebuiltPoliciesListArgs {
  'destination-type'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PrebuiltPoliciesListArgs> = {
  command: 'prebuilt-policies-list',
  describe: 'List prebuilt catalog sync policies (Closed Beta).',

  builder: (yargs: Argv): Argv<PrebuiltPoliciesListArgs> => {
    return yargs
      .option('destination-type', {
        type: 'string',
        description: 'Specify type of destination, omit to return all.',
        choices: ['NONE', 'ZERO_TRUST_LIST'] as const,
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
      }) as Argv<PrebuiltPoliciesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PrebuiltPoliciesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.destinationType !== undefined) params['destination_type'] = argv.destinationType;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.magicCloudNetworking.catalogsyncs.prebuiltPoliciesList(
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
