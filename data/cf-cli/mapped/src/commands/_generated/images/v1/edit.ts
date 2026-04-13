/**
 * edit command
 * @generated from apis/images/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface EditArgs {
  imageId: string;
  creator?: string;
  'require-signed-urls'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <imageId>',
  describe: 'Update image access control. On access control change, all copies of the image are purged from cache.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('imageId', {
        type: 'string',
        description: 'Image unique identifier.',
        demandOption: true,
      })
      .option('creator', {
        type: 'string',
        description: 'Can set the creator field with an internal user ID.',
        default: undefined,
      })
      .option('require-signed-urls', {
        type: 'boolean',
        description:
          'Indicates whether the image can be accessed using only its UID. If set to \`true\`, a signed token needs to be generated with a signing key to view the image. Returns a new UID on a change. No change if not specified.',
        default: false,
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
      validateResourceId(argv.imageId as string | undefined, 'imageId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf images v1 edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/images/v1/${argv.imageId ?? '<imageId>'}`,
          pathParams: { imageId: String(argv.imageId ?? '') },
          body: { creator: argv.creator, requireSignedUrls: argv.requireSignedUrls },
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/images/v1/${argv.imageId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.creator !== undefined) setNestedValue(bodyData, ['creator'], argv.creator);
      if (argv.requireSignedUrls !== undefined) setNestedValue(bodyData, ['requireSignedURLs'], argv.requireSignedUrls);
      const result = await client.patch<unknown>(`/accounts/${accountId}/images/v1/${argv.imageId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
