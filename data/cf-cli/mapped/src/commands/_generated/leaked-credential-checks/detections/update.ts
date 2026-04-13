/**
 * update command
 * @generated from apis/leaked-credential-checks/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface UpdateArgs {
  zoneId?: string;
  detectionId: string;
  password?: string;
  username?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update [zoneId] <detectionId>',
  describe: 'Update user-defined detection pattern for Leaked Credential Checks.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier. (or use --zone flag)',
      })
      .positional('detectionId', {
        type: 'string',
        description: 'Defines the unique ID for this custom detection.',
        demandOption: true,
      })
      .option('password', {
        type: 'string',
        description: 'Defines ehe ruleset expression to use in matching the password in a request.',
        default: undefined,
      })
      .option('username', {
        type: 'string',
        description: 'Defines the ruleset expression to use in matching the username in a request.',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.detectionId as string | undefined, 'detectionId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf leaked-credential-checks detections update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/leaked-credential-checks/detections/${argv.detectionId ?? '<detectionId>'}`,
          pathParams: { zoneId: String(argv.zoneId ?? ''), detectionId: String(argv.detectionId ?? '') },
          body: { password: argv.password, username: argv.username },
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
        const result = await client.put<unknown>(
          `/zones/${zoneId}/leaked-credential-checks/detections/${argv.detectionId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.password !== undefined) setNestedValue(bodyData, ['password'], argv.password);
      if (argv.username !== undefined) setNestedValue(bodyData, ['username'], argv.username);
      const result = await client.put<unknown>(
        `/zones/${zoneId}/leaked-credential-checks/detections/${argv.detectionId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
