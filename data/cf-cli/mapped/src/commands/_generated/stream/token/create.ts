/**
 * create command
 * @generated from apis/stream/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CreateArgs {
  identifier: string;
  downloadable?: boolean;
  exp?: number;
  'flags-original'?: boolean;
  id?: string;
  nbf?: number;
  pem?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create <identifier>',
  describe:
    'Creates a signed URL token for a video. If a body is not provided in the request, a token is created with default values.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('identifier', {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for a media item.',
        demandOption: true,
      })
      .option('downloadable', {
        type: 'boolean',
        description:
          'The optional boolean value that enables using signed tokens to access MP4 download links for a video.',
        default: false,
      })
      .option('exp', {
        type: 'number',
        description:
          'The optional unix epoch timestamp that specficies the time after a token is not accepted. The maximum time specification is 24 hours from issuing time. If this field is not set, the default is one hour after issuing.',
        default: undefined,
      })
      .option('flags-original', {
        type: 'boolean',
        description: 'Whether to return the original video without transformations.',
        default: false,
      })
      .option('id', {
        type: 'string',
        description: 'The optional ID of a Stream signing key. If present, the \`pem\` field is also required.',
        default: undefined,
      })
      .option('nbf', {
        type: 'number',
        description:
          'The optional unix epoch timestamp that specifies the time before a the token is not accepted. If this field is not set, the default is one hour before issuing.',
        default: undefined,
      })
      .option('pem', {
        type: 'string',
        description:
          'The optional base64 encoded private key in PEM format associated with a Stream signing key. If present, the \`id\` field is also required.',
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
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.identifier as string | undefined, 'identifier');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf stream token create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/stream/${argv.identifier ?? '<identifier>'}/token`,
          pathParams: { identifier: String(argv.identifier ?? '') },
          body: {
            downloadable: argv.downloadable,
            exp: argv.exp,
            flagsOriginal: argv.flagsOriginal,
            id: argv.id,
            nbf: argv.nbf,
            pem: argv.pem,
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
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/accounts/${accountId}/stream/${argv.identifier}/token`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.downloadable !== undefined) setNestedValue(bodyData, ['downloadable'], argv.downloadable);
      if (argv.exp !== undefined) setNestedValue(bodyData, ['exp'], argv.exp);
      if (argv.flagsOriginal !== undefined) setNestedValue(bodyData, ['flags', 'original'], argv.flagsOriginal);
      if (argv.id !== undefined) setNestedValue(bodyData, ['id'], argv.id);
      if (argv.nbf !== undefined) setNestedValue(bodyData, ['nbf'], argv.nbf);
      if (argv.pem !== undefined) setNestedValue(bodyData, ['pem'], argv.pem);
      const result = await client.post<unknown>(`/accounts/${accountId}/stream/${argv.identifier}/token`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
