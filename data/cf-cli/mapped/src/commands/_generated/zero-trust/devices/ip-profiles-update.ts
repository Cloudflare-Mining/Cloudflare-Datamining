/**
 * ip-profiles-update command
 * @generated from apis/zero-trust/schema.ts
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

interface IPProfilesUpdateArgs {
  profileId: string;
  description?: string;
  enabled?: boolean;
  match?: string;
  name?: string;
  precedence?: number;
  'subnet-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, IPProfilesUpdateArgs> = {
  command: 'ip-profiles-update <profileId>',
  describe: 'Updates a WARP Device IP profile. Currently, only IPv4 Device subnets can be associated.',

  builder: (yargs: Argv): Argv<IPProfilesUpdateArgs> => {
    return yargs
      .positional('profileId', {
        type: 'string',
        description: 'Profile ID',
        demandOption: true,
      })
      .option('description', {
        type: 'string',
        description: 'An optional description of the Device IP profile.',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Whether the Device IP profile is enabled.',
        default: false,
      })
      .option('match', {
        type: 'string',
        description:
          'The wirefilter expression to match registrations. Available values: "identity.name", "identity.email", "identity.groups.id", "identity.groups.name", "identity.groups.email", "identity.saml_attributes".',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'A user-friendly name for the Device IP profile.',
        default: undefined,
      })
      .option('precedence', {
        type: 'number',
        description:
          'The precedence of the Device IP profile. Lower values indicate higher precedence. Device IP profile will be evaluated in ascending order of this field.',
        default: undefined,
      })
      .option('subnet-id', {
        type: 'string',
        description: 'The ID of the Subnet.',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<IPProfilesUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IPProfilesUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.profileId as string | undefined, 'profileId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust devices ip-profiles-update',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/devices/ip-profiles/${argv.profileId ?? '<profileId>'}`,
          pathParams: { profileId: String(argv.profileId ?? '') },
          body: {
            description: argv.description,
            enabled: argv.enabled,
            match: argv.match,
            name: argv.name,
            precedence: argv.precedence,
            subnetId: argv.subnetId,
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/devices/ip-profiles/${argv.profileId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.match !== undefined) setNestedValue(bodyData, ['match'], argv.match);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.precedence !== undefined) setNestedValue(bodyData, ['precedence'], argv.precedence);
      if (argv.subnetId !== undefined) setNestedValue(bodyData, ['subnet_id'], argv.subnetId);
      const result = await client.patch<unknown>(`/accounts/${accountId}/devices/ip-profiles/${argv.profileId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
