/**
 * validate command
 * @generated from apis/logpush/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface ValidateArgs {
  zoneId?: string;
  'destination-conf': string;
  'ownership-challenge': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ValidateArgs> = {
  command: 'validate [zoneId]',
  describe: 'Validates ownership challenge of the destination.',

  builder: (yargs: Argv): Argv<ValidateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('destination-conf', {
        type: 'string',
        description:
          'Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included.',
      })
      .option('ownership-challenge', {
        type: 'string',
        description: 'Ownership challenge token to prove destination ownership.',
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
      }) as Argv<ValidateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ValidateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf logpush ownership validate',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/logpush/ownership/validate`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: { destinationConf: argv.destinationConf, ownershipChallenge: argv.ownershipChallenge },
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/zones/${zoneId}/logpush/ownership/validate`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.destinationConf !== undefined) setNestedValue(bodyData, ['destination_conf'], argv.destinationConf);
      if (argv.ownershipChallenge !== undefined)
        setNestedValue(bodyData, ['ownership_challenge'], argv.ownershipChallenge);
      const result = await client.post<unknown>(`/zones/${zoneId}/logpush/ownership/validate`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
