/**
 * create command
 * @generated from apis/speed/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface CreateArgs {
  zoneId?: string;
  url: string;
  region?: string;
  frequency?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create [zoneId] <url>',
  describe: 'Creates a scheduled test for a page.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .positional('url', {
        type: 'string',
        description: 'A URL.',
        demandOption: true,
      })
      .option('region', {
        type: 'string',
        description: 'Region',
        default: undefined,
      })
      .option('frequency', {
        type: 'string',
        description: 'The frequency of the scheduled test. Defaults to WEEKLY for free plans, DAILY for paid plans.',
        choices: ['DAILY', 'WEEKLY'] as const,
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
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.url as string | undefined, 'url');

      const params: Record<string, unknown> = {};
      if (argv.region !== undefined) params['region'] = argv.region;
      if (argv.frequency !== undefined) params['frequency'] = argv.frequency;

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf speed schedule create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/speed_api/schedule/${argv.url ?? '<url>'}`,
          pathParams: { zoneId: String(argv.zoneId ?? ''), url: String(argv.url ?? '') },
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

      const result = await client.speed.schedule.create(
        zoneId,
        argv.url,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
