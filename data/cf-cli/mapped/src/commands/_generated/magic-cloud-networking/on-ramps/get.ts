/**
 * get command
 * @generated from apis/magic-cloud-networking/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetArgs {
  onrampId: string;
  status?: boolean;
  vpcs?: boolean;
  'post-apply-resources'?: boolean;
  'planned-resources'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get <onrampId>',
  describe: 'Read an On-ramp (Closed Beta).',

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
      .positional('onrampId', {
        type: 'string',
        description: 'Onramp ID',
        demandOption: true,
      })
      .option('status', {
        type: 'boolean',
        description: 'Status',
        default: false,
      })
      .option('vpcs', {
        type: 'boolean',
        description: 'Vpcs',
        default: false,
      })
      .option('post-apply-resources', {
        type: 'boolean',
        description: 'Post apply resources',
        default: false,
      })
      .option('planned-resources', {
        type: 'boolean',
        description: 'Planned resources',
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
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.onrampId as string | undefined, 'onrampId');

      const params: Record<string, unknown> = {};
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.vpcs !== undefined) params['vpcs'] = argv.vpcs;
      if (argv.postApplyResources !== undefined) params['post_apply_resources'] = argv.postApplyResources;
      if (argv.plannedResources !== undefined) params['planned_resources'] = argv.plannedResources;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.magicCloudNetworking.onramps.get(
        accountId,
        argv.onrampId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
