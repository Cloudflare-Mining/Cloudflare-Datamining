/**
 * ownership-validate command
 * @generated from apis/magic-transit/schema.ts
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

interface OwnershipValidateArgs {
  'destination-conf': string;
  'ownership-challenge': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, OwnershipValidateArgs> = {
  command: 'ownership-validate',
  describe: 'Validates buckets added to the packet captures API.',

  builder: (yargs: Argv): Argv<OwnershipValidateArgs> => {
    return yargs
      .option('destination-conf', {
        type: 'string',
        description: 'The full URI for the bucket. This field only applies to \`full\` packet captures.',
      })
      .option('ownership-challenge', {
        type: 'string',
        description: 'The ownership challenge filename stored in the bucket.',
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
      }) as Argv<OwnershipValidateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<OwnershipValidateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit pcaps ownership-validate',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/pcaps/ownership/validate`,
          pathParams: {},
          body: { destinationConf: argv.destinationConf, ownershipChallenge: argv.ownershipChallenge },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/pcaps/ownership/validate`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.destinationConf !== undefined) setNestedValue(bodyData, ['destination_conf'], argv.destinationConf);
      if (argv.ownershipChallenge !== undefined)
        setNestedValue(bodyData, ['ownership_challenge'], argv.ownershipChallenge);
      const result = await client.post<unknown>(`/accounts/${accountId}/pcaps/ownership/validate`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
