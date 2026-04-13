/**
 * metadata-index-delete command
 * @generated from apis/vectorize/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface MetadataIndexDeleteArgs {
  indexName: string;
  'property-name': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, MetadataIndexDeleteArgs> = {
  command: 'metadata-index-delete <indexName>',
  describe: 'Allow Vectorize to delete the specified metadata index.',

  builder: (yargs: Argv): Argv<MetadataIndexDeleteArgs> => {
    return yargs
      .positional('indexName', {
        type: 'string',
        description: 'Index name',
        demandOption: true,
      })
      .option('property-name', {
        type: 'string',
        description: 'Specifies the metadata property for which the index must be deleted.',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<MetadataIndexDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MetadataIndexDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.indexName as string | undefined, 'indexName');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf vectorize indexes metadata-index-delete',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/vectorize/v2/indexes/${argv.indexName ?? '<indexName>'}/metadata_index/delete`,
          pathParams: { indexName: String(argv.indexName ?? '') },
          body: { propertyName: argv.propertyName },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(
          `/accounts/${accountId}/vectorize/v2/indexes/${argv.indexName}/metadata_index/delete`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.propertyName !== undefined) setNestedValue(bodyData, ['propertyName'], argv.propertyName);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/vectorize/v2/indexes/${argv.indexName}/metadata_index/delete`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
