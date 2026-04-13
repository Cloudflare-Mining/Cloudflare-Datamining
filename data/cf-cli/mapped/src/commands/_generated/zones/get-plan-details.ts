/**
 * get-plan-details command
 * @generated from apis/zones/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';

interface GetPlanDetailsArgs {
  planIdentifier: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, GetPlanDetailsArgs> = {
  command: 'get-plan-details <planIdentifier> [zoneId]',
  describe: 'Details of the available plan that the zone can subscribe to.',

  builder: (yargs: Argv): Argv<GetPlanDetailsArgs> => {
    return yargs
      .positional('planIdentifier', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier (or use --zone flag)',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<GetPlanDetailsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetPlanDetailsArgs>): Promise<void> => {
    try {
      validateResourceId(argv.planIdentifier as string | undefined, 'planIdentifier');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.zones.getPlanDetails(argv.planIdentifier, zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
