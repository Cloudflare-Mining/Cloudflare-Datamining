/**
 * variants-edit command
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

interface VariantsEditArgs {
  variantId: string;
  'never-require-signed-urls'?: boolean;
  'options-fit': string;
  'options-height': number;
  'options-metadata': string;
  'options-width': number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, VariantsEditArgs> = {
  command: 'variants-edit <variantId>',
  describe: 'Updating a variant purges the cache for all images associated with the variant.',

  builder: (yargs: Argv): Argv<VariantsEditArgs> => {
    return yargs
      .positional('variantId', {
        type: 'string',
        description: 'Variant ID',
        demandOption: true,
      })
      .option('never-require-signed-urls', {
        type: 'boolean',
        description:
          'Indicates whether the variant can access an image without a signature, regardless of image access control.',
        default: false,
      })
      .option('options-fit', {
        type: 'string',
        description: 'The fit property describes how the width and height dimensions should be interpreted.',
        choices: ['scale-down', 'contain', 'cover', 'crop', 'pad'] as const,
      })
      .option('options-height', {
        type: 'number',
        description: 'Maximum height in image pixels.',
      })
      .option('options-metadata', {
        type: 'string',
        description: 'What EXIF data should be preserved in the output image.',
        choices: ['keep', 'copyright', 'none'] as const,
      })
      .option('options-width', {
        type: 'number',
        description: 'Maximum width in image pixels.',
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
      .choices('options-fit', ['scale-down', 'contain', 'cover', 'crop', 'pad'] as const)
      .choices('options-metadata', ['keep', 'copyright', 'none'] as const) as Argv<VariantsEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<VariantsEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.variantId as string | undefined, 'variantId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf images v1 variants-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/images/v1/variants/${argv.variantId ?? '<variantId>'}`,
          pathParams: { variantId: String(argv.variantId ?? '') },
          body: {
            neverRequireSignedUrls: argv.neverRequireSignedUrls,
            optionsFit: argv.optionsFit,
            optionsHeight: argv.optionsHeight,
            optionsMetadata: argv.optionsMetadata,
            optionsWidth: argv.optionsWidth,
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/images/v1/variants/${argv.variantId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.neverRequireSignedUrls !== undefined)
        setNestedValue(bodyData, ['neverRequireSignedURLs'], argv.neverRequireSignedUrls);
      if (argv.optionsFit !== undefined) setNestedValue(bodyData, ['options', 'fit'], argv.optionsFit);
      if (argv.optionsHeight !== undefined) setNestedValue(bodyData, ['options', 'height'], argv.optionsHeight);
      if (argv.optionsMetadata !== undefined) setNestedValue(bodyData, ['options', 'metadata'], argv.optionsMetadata);
      if (argv.optionsWidth !== undefined) setNestedValue(bodyData, ['options', 'width'], argv.optionsWidth);
      const result = await client.patch<unknown>(`/accounts/${accountId}/images/v1/variants/${argv.variantId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
