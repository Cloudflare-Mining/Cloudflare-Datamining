/**
 * update command
 * @generated from apis/organizations/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface UpdateArgs {
  organizationId: string;
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

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <organizationId>',
  describe:
    'Modify organization profile. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('organizationId', {
        type: 'string',
        description: 'Organization ID',
        demandOption: true,
      })
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.organizationId as string | undefined, 'organizationId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf organizations organization-profile update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/organizations/${argv.organizationId ?? '<organizationId>'}/profile`,
          pathParams: { organizationId: String(argv.organizationId ?? '') },
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/organizations/${argv.organizationId}/profile`, { body: bodyData });
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
      const result = await client.put<unknown>(`/organizations/${argv.organizationId}/profile`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
