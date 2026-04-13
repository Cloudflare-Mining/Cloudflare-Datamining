/**
 * edit command
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
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface EditArgs {
  identifier: string;
  'allowed-origins'?: string;
  creator?: string;
  'max-duration-seconds'?: number;
  'public-details-channel-link'?: string;
  'public-details-logo'?: string;
  'public-details-share-link'?: string;
  'public-details-title'?: string;
  'require-signed-urls'?: boolean;
  'scheduled-deletion'?: string;
  'thumbnail-timestamp-pct'?: number;
  uid?: string;
  'upload-expiry'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <identifier>',
  describe: 'Edit details for a single video.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('identifier', {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for a media item.',
        demandOption: true,
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
      .option('max-duration-seconds', {
        type: 'number',
        description:
          'The maximum duration in seconds for a video upload. Can be set for a video that is not yet uploaded to limit its duration. Uploads that exceed the specified duration will fail during processing. A value of \`-1\` means the value is unknown.',
        default: undefined,
      })
      .option('public-details-channel-link', {
        type: 'string',
        description: 'The publicDetails.channel_link field',
        default: undefined,
      })
      .option('public-details-logo', {
        type: 'string',
        description: 'The publicDetails.logo field',
        default: undefined,
      })
      .option('public-details-share-link', {
        type: 'string',
        description: 'The publicDetails.share_link field',
        default: undefined,
      })
      .option('public-details-title', {
        type: 'string',
        description: 'The publicDetails.title field',
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
      .option('uid', {
        type: 'string',
        description: 'The unique identifier for the video. Can be used to verify the video being updated.',
        default: undefined,
      })
      .option('upload-expiry', {
        type: 'string',
        description: 'The date and time when the video upload URL is no longer valid for direct user uploads.',
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
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.identifier as string | undefined, 'identifier');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf stream edit',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/stream/${argv.identifier ?? '<identifier>'}`,
          pathParams: { identifier: String(argv.identifier ?? '') },
          body: {
            allowedOrigins: argv.allowedOrigins,
            creator: argv.creator,
            maxDurationSeconds: argv.maxDurationSeconds,
            publicDetailsChannelLink: argv.publicDetailsChannelLink,
            publicDetailsLogo: argv.publicDetailsLogo,
            publicDetailsShareLink: argv.publicDetailsShareLink,
            publicDetailsTitle: argv.publicDetailsTitle,
            requireSignedUrls: argv.requireSignedUrls,
            scheduledDeletion: argv.scheduledDeletion,
            thumbnailTimestampPct: argv.thumbnailTimestampPct,
            uid: argv.uid,
            uploadExpiry: argv.uploadExpiry,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/stream/${argv.identifier}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.allowedOrigins !== undefined) setNestedValue(bodyData, ['allowedOrigins'], argv.allowedOrigins);
      if (argv.creator !== undefined) setNestedValue(bodyData, ['creator'], argv.creator);
      if (argv.maxDurationSeconds !== undefined)
        setNestedValue(bodyData, ['maxDurationSeconds'], argv.maxDurationSeconds);
      if (argv.publicDetailsChannelLink !== undefined)
        setNestedValue(bodyData, ['publicDetails', 'channel_link'], argv.publicDetailsChannelLink);
      if (argv.publicDetailsLogo !== undefined)
        setNestedValue(bodyData, ['publicDetails', 'logo'], argv.publicDetailsLogo);
      if (argv.publicDetailsShareLink !== undefined)
        setNestedValue(bodyData, ['publicDetails', 'share_link'], argv.publicDetailsShareLink);
      if (argv.publicDetailsTitle !== undefined)
        setNestedValue(bodyData, ['publicDetails', 'title'], argv.publicDetailsTitle);
      if (argv.requireSignedUrls !== undefined) setNestedValue(bodyData, ['requireSignedURLs'], argv.requireSignedUrls);
      if (argv.scheduledDeletion !== undefined) setNestedValue(bodyData, ['scheduledDeletion'], argv.scheduledDeletion);
      if (argv.thumbnailTimestampPct !== undefined)
        setNestedValue(bodyData, ['thumbnailTimestampPct'], argv.thumbnailTimestampPct);
      if (argv.uid !== undefined) setNestedValue(bodyData, ['uid'], argv.uid);
      if (argv.uploadExpiry !== undefined) setNestedValue(bodyData, ['uploadExpiry'], argv.uploadExpiry);
      const result = await client.post<unknown>(`/accounts/${accountId}/stream/${argv.identifier}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
