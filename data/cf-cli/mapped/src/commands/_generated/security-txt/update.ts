/**
 * update command
 * @generated from apis/security-txt/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface UpdateArgs {
  zoneId?: string;
  acknowledgments?: string;
  canonical?: string;
  contact?: string;
  enabled?: boolean;
  encryption?: string;
  expires?: string;
  hiring?: string;
  policy?: string;
  'preferred-languages'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update [zoneId]',
  describe:
    'Updates the security.txt file configuration for a zone, which provides security researchers with vulnerability reporting information.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('acknowledgments', {
        type: 'string',
        description: 'The acknowledgments field',
        default: undefined,
      })
      .option('canonical', {
        type: 'string',
        description: 'The canonical field',
        default: undefined,
      })
      .option('contact', {
        type: 'string',
        description: 'The contact field',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'The enabled field',
        default: false,
      })
      .option('encryption', {
        type: 'string',
        description: 'The encryption field',
        default: undefined,
      })
      .option('expires', {
        type: 'string',
        description: 'The expires field',
        default: undefined,
      })
      .option('hiring', {
        type: 'string',
        description: 'The hiring field',
        default: undefined,
      })
      .option('policy', {
        type: 'string',
        description: 'The policy field',
        default: undefined,
      })
      .option('preferred-languages', {
        type: 'string',
        description: 'The preferred_languages field',
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
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf security-txt update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/security-center/securitytxt`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            acknowledgments: argv.acknowledgments,
            canonical: argv.canonical,
            contact: argv.contact,
            enabled: argv.enabled,
            encryption: argv.encryption,
            expires: argv.expires,
            hiring: argv.hiring,
            policy: argv.policy,
            preferredLanguages: argv.preferredLanguages,
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
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/zones/${zoneId}/security-center/securitytxt`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.acknowledgments !== undefined) setNestedValue(bodyData, ['acknowledgments'], argv.acknowledgments);
      if (argv.canonical !== undefined) setNestedValue(bodyData, ['canonical'], argv.canonical);
      if (argv.contact !== undefined) setNestedValue(bodyData, ['contact'], argv.contact);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.encryption !== undefined) setNestedValue(bodyData, ['encryption'], argv.encryption);
      if (argv.expires !== undefined) setNestedValue(bodyData, ['expires'], argv.expires);
      if (argv.hiring !== undefined) setNestedValue(bodyData, ['hiring'], argv.hiring);
      if (argv.policy !== undefined) setNestedValue(bodyData, ['policy'], argv.policy);
      if (argv.preferredLanguages !== undefined)
        setNestedValue(bodyData, ['preferred_languages'], argv.preferredLanguages);
      const result = await client.put<unknown>(`/zones/${zoneId}/security-center/securitytxt`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
