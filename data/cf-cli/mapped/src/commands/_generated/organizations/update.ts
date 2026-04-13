/**
 * update command
 * @generated from apis/organizations/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface UpdateArgs {
  organizationId: string;
  name: string;
  'parent-id': string;
  'profile-business-address': string;
  'profile-business-email': string;
  'profile-business-name': string;
  'profile-business-phone': string;
  'profile-external-metadata': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <organizationId>',
  describe:
    'Modify organization. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('organizationId', {
        type: 'string',
        description: 'The ID of the organization to modify.',
        demandOption: true,
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
      })
      .option('parent-id', {
        type: 'string',
        description: 'The parent.id field',
      })
      .option('profile-business-address', {
        type: 'string',
        description: 'The profile.business_address field',
      })
      .option('profile-business-email', {
        type: 'string',
        description: 'The profile.business_email field',
      })
      .option('profile-business-name', {
        type: 'string',
        description: 'The profile.business_name field',
      })
      .option('profile-business-phone', {
        type: 'string',
        description: 'The profile.business_phone field',
      })
      .option('profile-external-metadata', {
        type: 'string',
        description: 'The profile.external_metadata field',
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
          command: 'cf organizations update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/organizations/${argv.organizationId ?? '<organizationId>'}`,
          pathParams: { organizationId: String(argv.organizationId ?? '') },
          body: {
            name: argv.name,
            parentId: argv.parentId,
            profileBusinessAddress: argv.profileBusinessAddress,
            profileBusinessEmail: argv.profileBusinessEmail,
            profileBusinessName: argv.profileBusinessName,
            profileBusinessPhone: argv.profileBusinessPhone,
            profileExternalMetadata: argv.profileExternalMetadata,
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
        const result = await client.put<unknown>(`/organizations/${argv.organizationId}`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.parentId !== undefined) setNestedValue(bodyData, ['parent', 'id'], argv.parentId);
      if (argv.profileBusinessAddress !== undefined)
        setNestedValue(bodyData, ['profile', 'business_address'], argv.profileBusinessAddress);
      if (argv.profileBusinessEmail !== undefined)
        setNestedValue(bodyData, ['profile', 'business_email'], argv.profileBusinessEmail);
      if (argv.profileBusinessName !== undefined)
        setNestedValue(bodyData, ['profile', 'business_name'], argv.profileBusinessName);
      if (argv.profileBusinessPhone !== undefined)
        setNestedValue(bodyData, ['profile', 'business_phone'], argv.profileBusinessPhone);
      if (argv.profileExternalMetadata !== undefined)
        setNestedValue(bodyData, ['profile', 'external_metadata'], argv.profileExternalMetadata);
      const result = await client.put<unknown>(`/organizations/${argv.organizationId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
