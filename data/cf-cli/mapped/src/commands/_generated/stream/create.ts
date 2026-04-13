/**
 * create command
 * @generated from apis/stream/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';

interface CreateArgs {
  'direct-user'?: string;
  'tus-resumable': string;
  'upload-creator'?: string;
  'upload-length': string;
  'upload-metadata'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe:
    'Initiates a video upload using the TUS protocol. On success, the server responds with a status code 201 (created) and includes a \`location\` header to indicate where the content should be uploaded. Refer to https://tus.io for protocol details.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('direct-user', {
        type: 'string',
        description:
          'Provisions a URL to let your end users upload videos directly to Cloudflare Stream without exposing your API token to clients.',
        default: undefined,
      })
      .option('tus-resumable', {
        type: 'string',
        description:
          'Specifies the TUS protocol version. This value must be included in every upload request. Notes: The only supported version of TUS protocol is 1.0.0.',
      })
      .option('upload-creator', {
        type: 'string',
        description: 'A user-defined identifier for the media creator.',
        default: undefined,
      })
      .option('upload-length', {
        type: 'string',
        description: 'Indicates the size of the entire upload in bytes. The value must be a non-negative integer.',
      })
      .option('upload-metadata', {
        type: 'string',
        description:
          'Comma-separated key-value pairs following the TUS protocol specification. Values are Base-64 encoded. Supported keys: \`name\`, \`requiresignedurls\`, \`allowedorigins\`, \`thumbnailtimestamppct\`, \`watermark\`, \`scheduleddeletion\`, \`maxdurationseconds\`.',
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
      const params: Record<string, unknown> = {};
      if (argv.directUser !== undefined) params['direct_user'] = argv.directUser;

      const headers: Record<string, string> = {};
      if (argv.tusResumable !== undefined) headers['Tus-Resumable'] = String(argv.tusResumable);
      if (argv.uploadCreator !== undefined) headers['Upload-Creator'] = String(argv.uploadCreator);
      if (argv.uploadLength !== undefined) headers['Upload-Length'] = String(argv.uploadLength);
      if (argv.uploadMetadata !== undefined) headers['Upload-Metadata'] = String(argv.uploadMetadata);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf stream create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/stream`,
          pathParams: {},
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
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.post<unknown>(`/accounts/${accountId}/stream`, {
        query: Object.keys(params).length > 0 ? params : undefined,
        headers: Object.keys(headers).length > 0 ? headers : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
