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
  name?: string;
  opacity?: number;
  padding?: number;
  position?: string;
  scale?: number;
  url?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  file?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Creates watermark profiles using a single \`HTTP POST multipart/form-data\` request.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('name', {
        type: 'string',
        description: 'A short description of the watermark profile.',
        default: undefined,
      })
      .option('opacity', {
        type: 'number',
        description:
          'The translucency of the image. A value of \`0.0\` makes the image completely transparent, and \`1.0\` makes the image completely opaque. Note that if the image is already semi-transparent, setting this to \`1.0\` will not make the image completely opaque.',
        default: undefined,
      })
      .option('padding', {
        type: 'number',
        description:
          'The whitespace between the adjacent edges (determined by position) of the video and the image. \`0.0\` indicates no padding, and \`1.0\` indicates a fully padded video width or length, as determined by the algorithm.',
        default: undefined,
      })
      .option('position', {
        type: 'string',
        description:
          'The location of the image. Valid positions are: \`upperRight\`, \`upperLeft\`, \`lowerLeft\`, \`lowerRight\`, and \`center\`. Note that \`center\` ignores the \`padding\` parameter.',
        default: undefined,
      })
      .option('scale', {
        type: 'number',
        description:
          'The size of the image relative to the overall size of the video. This parameter will adapt to horizontal and vertical videos automatically. \`0.0\` indicates no scaling (use the size of the image as-is), and \`1.0 \`fills the entire video.',
        default: undefined,
      })
      .option('url', {
        type: 'string',
        description: 'URL of the watermark image to copy.',
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
      })
      .option('file', {
        type: 'string',
        description: 'Path to a file to upload as the request body',
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf stream watermarks create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/stream/watermarks`,
          pathParams: {},
          body: {
            name: argv.name,
            opacity: argv.opacity,
            padding: argv.padding,
            position: argv.position,
            scale: argv.scale,
            url: argv.url,
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

      if (argv.file) {
        const { readFileSync } = await import('node:fs');
        const { resolve } = await import('node:path');
        const filePath = resolve(argv.file);
        const fileContent = readFileSync(filePath);
        const formData = new FormData();
        formData.append('file', new Blob([fileContent]), argv.file.split('/').pop());
        const result = await client.post<unknown>(`/accounts/${accountId}/stream/watermarks`, { body: formData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/accounts/${accountId}/stream/watermarks`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.opacity !== undefined) setNestedValue(bodyData, ['opacity'], argv.opacity);
      if (argv.padding !== undefined) setNestedValue(bodyData, ['padding'], argv.padding);
      if (argv.position !== undefined) setNestedValue(bodyData, ['position'], argv.position);
      if (argv.scale !== undefined) setNestedValue(bodyData, ['scale'], argv.scale);
      if (argv.url !== undefined) setNestedValue(bodyData, ['url'], argv.url);
      const result = await client.post<unknown>(`/accounts/${accountId}/stream/watermarks`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
