/**
 * user-get command
 * @generated from apis/api-gateway/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface UserGetArgs {
  'with-mapped-resource-counts'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UserGetArgs> = {
  command: 'user-get',
  describe: 'Retrieve user label',

  builder: (yargs: Argv): Argv<UserGetArgs> => {
    return yargs
      .option('with-mapped-resource-counts', {
        type: 'boolean',
        description: 'Include \`mapped_resources\` for each label',
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
      }) as Argv<UserGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UserGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.withMappedResourceCounts !== undefined)
        params['with_mapped_resource_counts'] = argv.withMappedResourceCounts;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.apiGateway.labels.userGet(
        zoneId,
        argv.name as string,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
