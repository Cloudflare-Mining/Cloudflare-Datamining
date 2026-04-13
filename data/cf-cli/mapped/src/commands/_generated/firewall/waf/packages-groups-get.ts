/**
 * packages-groups-get command
 * @generated from apis/firewall/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface PackagesGroupsGetArgs {
  groupId: string;
  packageId: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, PackagesGroupsGetArgs> = {
  command: 'packages-groups-get <groupId> <packageId> [zoneId]',
  describe:
    'Fetches the details of a WAF rule group. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',

  builder: (yargs: Argv): Argv<PackagesGroupsGetArgs> => {
    return yargs
      .positional('groupId', {
        type: 'string',
        description: 'Defines the unique identifier of a WAF package.',
        demandOption: true,
      })
      .positional('packageId', {
        type: 'string',
        description: 'Defines the unique identifier of a WAF package.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier of a schema. (or use --zone flag)',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<PackagesGroupsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PackagesGroupsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.groupId as string | undefined, 'groupId');
      validateResourceId(argv.packageId as string | undefined, 'packageId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.firewall.waf.packagesGroupsGet(argv.groupId, argv.packageId, zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
