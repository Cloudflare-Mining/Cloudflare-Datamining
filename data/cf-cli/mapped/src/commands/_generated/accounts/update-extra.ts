/**
 * update-extra command
 * @generated from apis/accounts/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface UpdateExtraArgs {
  'business-address': string;
  'business-email': string;
  'business-name': string;
  'business-phone': string;
  'external-metadata': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateExtraArgs> = {
  command: 'update-extra',
  describe:
    'Updates the profile information for a Cloudflare account. Allows modification of account-level settings and organizational details. Requires Account Settings Write permission.',

  builder: (yargs: Argv): Argv<UpdateExtraArgs> => {
    return yargs
      .option('business-address', {
        type: 'string',
        description: 'The business_address field',
      })
      .option('business-email', {
        type: 'string',
        description: 'The business_email field',
      })
      .option('business-name', {
        type: 'string',
        description: 'The business_name field',
      })
      .option('business-phone', {
        type: 'string',
        description: 'The business_phone field',
      })
      .option('external-metadata', {
        type: 'string',
        description: 'The external_metadata field',
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
      }) as Argv<UpdateExtraArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateExtraArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf accounts update-extra',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/profile`,
          pathParams: {},
          body: {
            businessAddress: argv.businessAddress,
            businessEmail: argv.businessEmail,
            businessName: argv.businessName,
            businessPhone: argv.businessPhone,
            externalMetadata: argv.externalMetadata,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/profile`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.businessAddress !== undefined) setNestedValue(bodyData, ['business_address'], argv.businessAddress);
      if (argv.businessEmail !== undefined) setNestedValue(bodyData, ['business_email'], argv.businessEmail);
      if (argv.businessName !== undefined) setNestedValue(bodyData, ['business_name'], argv.businessName);
      if (argv.businessPhone !== undefined) setNestedValue(bodyData, ['business_phone'], argv.businessPhone);
      if (argv.externalMetadata !== undefined) setNestedValue(bodyData, ['external_metadata'], argv.externalMetadata);
      const result = await client.put<unknown>(`/accounts/${accountId}/profile`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
