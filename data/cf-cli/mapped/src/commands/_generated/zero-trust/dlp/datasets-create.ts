/**
 * datasets-create command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface DatasetsCreateArgs {
  'case-sensitive'?: boolean;
  description?: string;
  'encoding-version'?: number;
  name: string;
  secret?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DatasetsCreateArgs> = {
  command: 'datasets-create',
  describe:
    'Creates a new DLP (Data Loss Prevention) dataset for storing custom detection patterns. Datasets can contain exact match data, word lists, or EDM (Exact Data Match) configurations.',

  builder: (yargs: Argv): Argv<DatasetsCreateArgs> => {
    return yargs
      .option('case-sensitive', {
        type: 'boolean',
        description:
          'Only applies to custom word lists. Determines if the words should be matched in a case-sensitive manner Cannot be set to false if \`secret\` is true or undefined',
        default: false,
      })
      .option('description', {
        type: 'string',
        description: 'The description of the dataset.',
        default: undefined,
      })
      .option('encoding-version', {
        type: 'number',
        description:
          'Dataset encoding version  Non-secret custom word lists with no header are always version 1. Secret EDM lists with no header are version 1. Multicolumn CSV with headers are version 2. Omitting this field provides the default value 0, which is interpreted the same as 1.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
      })
      .option('secret', {
        type: 'boolean',
        description:
          'Generate a secret dataset.  If true, the response will include a secret to use with the EDM encoder. If false, the response has no secret and the dataset is uploaded in plaintext.',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<DatasetsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetsCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust dlp datasets-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/datasets`,
          pathParams: {},
          body: {
            caseSensitive: argv.caseSensitive,
            description: argv.description,
            encodingVersion: argv.encodingVersion,
            name: argv.name,
            secret: argv.secret,
          },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/dlp/datasets`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.caseSensitive !== undefined) setNestedValue(bodyData, ['case_sensitive'], argv.caseSensitive);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.encodingVersion !== undefined) setNestedValue(bodyData, ['encoding_version'], argv.encodingVersion);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.secret !== undefined) setNestedValue(bodyData, ['secret'], argv.secret);
      const result = await client.post<unknown>(`/accounts/${accountId}/dlp/datasets`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
