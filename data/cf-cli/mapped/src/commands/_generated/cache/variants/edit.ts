/**
 * edit command
 * @generated from apis/cache/schema.ts
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

interface EditArgs {
  zoneId?: string;
  'value-avif'?: string;
  'value-bmp'?: string;
  'value-gif'?: string;
  'value-jp2'?: string;
  'value-jpeg'?: string;
  'value-jpg'?: string;
  'value-jpg2'?: string;
  'value-png'?: string;
  'value-tif'?: string;
  'value-tiff'?: string;
  'value-webp'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit [zoneId]',
  describe:
    "Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.",

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('value-avif', {
        type: 'string',
        description: 'List of strings with the MIME types of all the variants that should be served for avif.',
        default: undefined,
      })
      .option('value-bmp', {
        type: 'string',
        description: 'List of strings with the MIME types of all the variants that should be served for bmp.',
        default: undefined,
      })
      .option('value-gif', {
        type: 'string',
        description: 'List of strings with the MIME types of all the variants that should be served for gif.',
        default: undefined,
      })
      .option('value-jp2', {
        type: 'string',
        description: 'List of strings with the MIME types of all the variants that should be served for jp2.',
        default: undefined,
      })
      .option('value-jpeg', {
        type: 'string',
        description: 'List of strings with the MIME types of all the variants that should be served for jpeg.',
        default: undefined,
      })
      .option('value-jpg', {
        type: 'string',
        description: 'List of strings with the MIME types of all the variants that should be served for jpg.',
        default: undefined,
      })
      .option('value-jpg2', {
        type: 'string',
        description: 'List of strings with the MIME types of all the variants that should be served for jpg2.',
        default: undefined,
      })
      .option('value-png', {
        type: 'string',
        description: 'List of strings with the MIME types of all the variants that should be served for png.',
        default: undefined,
      })
      .option('value-tif', {
        type: 'string',
        description: 'List of strings with the MIME types of all the variants that should be served for tif.',
        default: undefined,
      })
      .option('value-tiff', {
        type: 'string',
        description: 'List of strings with the MIME types of all the variants that should be served for tiff.',
        default: undefined,
      })
      .option('value-webp', {
        type: 'string',
        description: 'List of strings with the MIME types of all the variants that should be served for webp.',
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
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf cache variants edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/cache/variants`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            valueAvif: argv.valueAvif,
            valueBmp: argv.valueBmp,
            valueGif: argv.valueGif,
            valueJp2: argv.valueJp2,
            valueJpeg: argv.valueJpeg,
            valueJpg: argv.valueJpg,
            valueJpg2: argv.valueJpg2,
            valuePng: argv.valuePng,
            valueTif: argv.valueTif,
            valueTiff: argv.valueTiff,
            valueWebp: argv.valueWebp,
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
        const result = await client.patch<unknown>(`/zones/${zoneId}/cache/variants`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.valueAvif !== undefined) setNestedValue(bodyData, ['value', 'avif'], argv.valueAvif);
      if (argv.valueBmp !== undefined) setNestedValue(bodyData, ['value', 'bmp'], argv.valueBmp);
      if (argv.valueGif !== undefined) setNestedValue(bodyData, ['value', 'gif'], argv.valueGif);
      if (argv.valueJp2 !== undefined) setNestedValue(bodyData, ['value', 'jp2'], argv.valueJp2);
      if (argv.valueJpeg !== undefined) setNestedValue(bodyData, ['value', 'jpeg'], argv.valueJpeg);
      if (argv.valueJpg !== undefined) setNestedValue(bodyData, ['value', 'jpg'], argv.valueJpg);
      if (argv.valueJpg2 !== undefined) setNestedValue(bodyData, ['value', 'jpg2'], argv.valueJpg2);
      if (argv.valuePng !== undefined) setNestedValue(bodyData, ['value', 'png'], argv.valuePng);
      if (argv.valueTif !== undefined) setNestedValue(bodyData, ['value', 'tif'], argv.valueTif);
      if (argv.valueTiff !== undefined) setNestedValue(bodyData, ['value', 'tiff'], argv.valueTiff);
      if (argv.valueWebp !== undefined) setNestedValue(bodyData, ['value', 'webp'], argv.valueWebp);
      const result = await client.patch<unknown>(`/zones/${zoneId}/cache/variants`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
