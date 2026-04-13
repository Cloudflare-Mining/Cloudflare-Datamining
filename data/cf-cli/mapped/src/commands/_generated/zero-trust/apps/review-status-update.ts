/**
 * review-status-update command
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

interface ReviewStatusUpdateArgs {
  'approved-apps': string;
  'in-review-apps': string;
  'unapproved-apps': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ReviewStatusUpdateArgs> = {
  command: 'review-status-update',
  describe: 'Update the statuses of your applications.',

  builder: (yargs: Argv): Argv<ReviewStatusUpdateArgs> => {
    return yargs
      .option('approved-apps', {
        type: 'string',
        description: 'Contains the ids of the approved applications.',
      })
      .option('in-review-apps', {
        type: 'string',
        description: 'Contains the ids of the applications in review.',
      })
      .option('unapproved-apps', {
        type: 'string',
        description: 'Contains the ids of the unapproved applications.',
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
      }) as Argv<ReviewStatusUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ReviewStatusUpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust apps review-status-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/gateway/apps/review_status`,
          pathParams: {},
          body: {
            approvedApps: argv.approvedApps,
            inReviewApps: argv.inReviewApps,
            unapprovedApps: argv.unapprovedApps,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/gateway/apps/review_status`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.approvedApps !== undefined) setNestedValue(bodyData, ['approved_apps'], argv.approvedApps);
      if (argv.inReviewApps !== undefined) setNestedValue(bodyData, ['in_review_apps'], argv.inReviewApps);
      if (argv.unapprovedApps !== undefined) setNestedValue(bodyData, ['unapproved_apps'], argv.unapprovedApps);
      const result = await client.put<unknown>(`/accounts/${accountId}/gateway/apps/review_status`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
