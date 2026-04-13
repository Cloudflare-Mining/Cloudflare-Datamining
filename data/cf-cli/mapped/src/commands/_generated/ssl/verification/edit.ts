/**
 * edit command
 * @generated from apis/ssl/schema.ts
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

interface EditArgs {
  certificatePackId: string;
  zoneId: string;
  'validation-method': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <certificatePackId> [zoneId]',
  describe:
    'Edit SSL validation method for a certificate pack. A PATCH request will request an immediate validation check on any certificate, and return the updated status. If a validation method is provided, the validation will be immediately attempted using that method.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('certificatePackId', {
        type: 'string',
        description: 'Certificate Pack UUID.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('validation-method', {
        type: 'string',
        description: 'Desired validation method.',
        choices: ['http', 'cname', 'txt', 'email'] as const,
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
      })
      .choices('validation-method', ['http', 'cname', 'txt', 'email'] as const) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.certificatePackId as string | undefined, 'certificatePackId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf ssl verification edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/ssl/verification/${argv.certificatePackId ?? '<certificatePackId>'}`,
          pathParams: { certificatePackId: String(argv.certificatePackId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: { validationMethod: argv.validationMethod },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(`/zones/${argv.zoneId}/ssl/verification/${argv.certificatePackId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.validationMethod !== undefined) setNestedValue(bodyData, ['validation_method'], argv.validationMethod);
      const result = await client.patch<unknown>(`/zones/${argv.zoneId}/ssl/verification/${argv.certificatePackId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
