/**
 * tests-delete command
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

interface TestsDeleteArgs {
  zoneId?: string;
  url: string;
  region?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, TestsDeleteArgs> = {
  command: 'tests-delete [zoneId] <url>',
  describe:
    'Deletes all tests for a specific webpage from a specific region. Deleted tests are still counted as part of the quota.',

  builder: (yargs: Argv): Argv<TestsDeleteArgs> => {
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
      }) as Argv<TestsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TestsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.url as string | undefined, 'url');

      const params: Record<string, unknown> = {};
      if (argv.region !== undefined) params['region'] = argv.region;

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf speed pages tests-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/speed_api/pages/${argv.url ?? '<url>'}/tests`,
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

      const result = await client.speed.pages.testsDelete(
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
