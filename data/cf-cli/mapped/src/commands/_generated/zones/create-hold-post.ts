/**
 * create-hold-post command
 * @generated from apis/zones/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';

interface CreateHoldPostArgs {
  zoneId?: string;
  'include-subdomains'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CreateHoldPostArgs> = {
  command: 'create-hold-post [zoneId]',
  describe: "Enforce a zone hold on the zone, blocking the creation and activation of zones with this zone's hostname.",

  builder: (yargs: Argv): Argv<CreateHoldPostArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Zone ID (or use --zone flag)',
      })
      .option('include-subdomains', {
        type: 'boolean',
        description:
          "If provided, the zone hold will extend to block any subdomain of the given zone, as well as SSL4SaaS Custom Hostnames. For example, a zone hold on a zone with the hostname 'example.com' and include_subdomains=true will block 'example.com', 'staging.example.com', 'api.staging.example.com', etc.",
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
      }) as Argv<CreateHoldPostArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateHoldPostArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.includeSubdomains !== undefined) params['include_subdomains'] = argv.includeSubdomains;

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf zones create-hold-post',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/hold`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: { ...params },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.zones.createHoldPost(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
