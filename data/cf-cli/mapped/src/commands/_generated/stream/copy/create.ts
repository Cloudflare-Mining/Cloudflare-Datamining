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
  'upload-creator'?: string;
  'allowed-origins'?: string;
  creator?: string;
  input?: string;
  name?: string;
  'require-signed-urls'?: boolean;
  'scheduled-deletion'?: string;
  'thumbnail-timestamp-pct'?: number;
  url?: string;
  'watermark-uid'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Uploads a video to Stream from a provided URL.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('upload-creator', {
        type: 'string',
        description: 'A user-defined identifier for the media creator.',
        default: undefined,
      })
      .option('allowed-origins', {
        type: 'string',
        description:
          'Lists the origins allowed to display the video. Enter allowed origin domains in an array and use \`*\` for wildcard subdomains. Empty arrays allow the video to be viewed on any origin.',
        default: undefined,
      })
      .option('creator', {
        type: 'string',
        description: 'A user-defined identifier for the media creator.',
        default: undefined,
      })
      .option('input', {
        type: 'string',
        description:
          "A video's URL. The server must be publicly routable and support \`HTTP HEAD\` requests and \`HTTP GET\` range requests. The server should respond to \`HTTP HEAD\` requests with a \`content-range\` header that includes the size of the file. This is the preferred field over \`url\`.",
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: "A video's name. Used for legacy compatibility.",
        default: undefined,
      })
      .option('require-signed-urls', {
        type: 'boolean',
        description:
          'Indicates whether the video can be a accessed using the UID. When set to \`true\`, a signed token must be generated with a signing key to view the video.',
        default: false,
      })
      .option('scheduled-deletion', {
        type: 'string',
        description:
          'Indicates the date and time at which the video will be deleted. Omit the field to indicate no change, or include with a \`null\` value to remove an existing scheduled deletion. If specified, must be at least 30 days from upload time.',
        default: undefined,
      })
      .option('thumbnail-timestamp-pct', {
        type: 'number',
        description:
          "The timestamp for a thumbnail image calculated as a percentage value of the video's duration. To convert from a second-wise timestamp to a percentage, divide the desired timestamp by the total duration of the video.  If this value is not set, the default thumbnail image is taken from 0s of the video.",
        default: undefined,
      })
      .option('url', {
        type: 'string',
        description:
          "A video's URL. The server must be publicly routable and support \`HTTP HEAD\` requests and \`HTTP GET\` range requests. The server should respond to \`HTTP HEAD\` requests with a \`content-range\` header that includes the size of the file. This field is deprecated in favor of \`input\`.",
        default: undefined,
      })
      .option('watermark-uid', {
        type: 'string',
        description: 'The unique identifier for the watermark profile.',
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
      const headers: Record<string, string> = {};
      if (argv.uploadCreator !== undefined) headers['Upload-Creator'] = String(argv.uploadCreator);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf stream copy create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/stream/copy`,
          pathParams: {},
          body: {
            allowedOrigins: argv.allowedOrigins,
            creator: argv.creator,
            input: argv.input,
            name: argv.name,
            requireSignedUrls: argv.requireSignedUrls,
            scheduledDeletion: argv.scheduledDeletion,
            thumbnailTimestampPct: argv.thumbnailTimestampPct,
            url: argv.url,
            watermarkUid: argv.watermarkUid,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/stream/copy`, {
          body: bodyData,
          headers: Object.keys(headers).length > 0 ? headers : undefined,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.allowedOrigins !== undefined) setNestedValue(bodyData, ['allowedOrigins'], argv.allowedOrigins);
      if (argv.creator !== undefined) setNestedValue(bodyData, ['creator'], argv.creator);
      if (argv.input !== undefined) setNestedValue(bodyData, ['input'], argv.input);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.requireSignedUrls !== undefined) setNestedValue(bodyData, ['requireSignedURLs'], argv.requireSignedUrls);
      if (argv.scheduledDeletion !== undefined) setNestedValue(bodyData, ['scheduledDeletion'], argv.scheduledDeletion);
      if (argv.thumbnailTimestampPct !== undefined)
        setNestedValue(bodyData, ['thumbnailTimestampPct'], argv.thumbnailTimestampPct);
      if (argv.url !== undefined) setNestedValue(bodyData, ['url'], argv.url);
      if (argv.watermarkUid !== undefined) setNestedValue(bodyData, ['watermark', 'uid'], argv.watermarkUid);
      const result = await client.post<unknown>(`/accounts/${accountId}/stream/copy`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
        headers: Object.keys(headers).length > 0 ? headers : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
