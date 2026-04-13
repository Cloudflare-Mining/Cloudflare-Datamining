/**
 * stabilityai-stable-diffusion-xl-base10-create command
 * @generated from apis/ai/schema.ts
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

interface StabilityaiStableDiffusionXlBase10CreateArgs {
  'queue-request'?: string;
  tags?: string;
  guidance?: number;
  height?: number;
  image?: string;
  'image-b64'?: string;
  mask?: string;
  'negative-prompt'?: string;
  'num-steps'?: number;
  prompt: string;
  seed?: number;
  strength?: number;
  width?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, StabilityaiStableDiffusionXlBase10CreateArgs> = {
  command: 'stabilityai-stable-diffusion-xl-base10-create',
  describe: 'Runs inference on the @cf/stabilityai/stable-diffusion-xl-base-1.0 model.',

  builder: (yargs: Argv): Argv<StabilityaiStableDiffusionXlBase10CreateArgs> => {
    return yargs
      .option('queue-request', {
        type: 'string',
        description: 'QueueRequest',
        default: undefined,
      })
      .option('tags', {
        type: 'string',
        description: 'Tags',
        default: undefined,
      })
      .option('guidance', {
        type: 'number',
        description:
          'Controls how closely the generated image should adhere to the prompt; higher values make the image more aligned with the prompt',
        default: undefined,
      })
      .option('height', {
        type: 'number',
        description: 'The height of the generated image in pixels',
        default: undefined,
      })
      .option('image', {
        type: 'string',
        description:
          'For use with img2img tasks. An array of integers that represent the image data constrained to 8-bit unsigned integer values',
        default: undefined,
      })
      .option('image-b64', {
        type: 'string',
        description: 'For use with img2img tasks. A base64-encoded string of the input image',
        default: undefined,
      })
      .option('mask', {
        type: 'string',
        description:
          'An array representing An array of integers that represent mask image data for inpainting constrained to 8-bit unsigned integer values',
        default: undefined,
      })
      .option('negative-prompt', {
        type: 'string',
        description: 'Text describing elements to avoid in the generated image',
        default: undefined,
      })
      .option('num-steps', {
        type: 'number',
        description: 'The number of diffusion steps; higher values can improve quality but take longer',
        default: undefined,
      })
      .option('prompt', {
        type: 'string',
        description: 'A text description of the image you want to generate',
      })
      .option('seed', {
        type: 'number',
        description: 'Random seed for reproducibility of the image generation',
        default: undefined,
      })
      .option('strength', {
        type: 'number',
        description:
          'A value between 0 and 1 indicating how strongly to apply the transformation during img2img tasks; lower values make the output closer to the input image',
        default: undefined,
      })
      .option('width', {
        type: 'number',
        description: 'The width of the generated image in pixels',
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
      }) as Argv<StabilityaiStableDiffusionXlBase10CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<StabilityaiStableDiffusionXlBase10CreateArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.queueRequest !== undefined) params['queueRequest'] = argv.queueRequest;
      if (argv.tags !== undefined) params['tags'] = argv.tags;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai run-extra stabilityai-stable-diffusion-xl-base10-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`,
          pathParams: {},
          body: {
            ...params,
            guidance: argv.guidance,
            height: argv.height,
            image: argv.image,
            imageB64: argv.imageB64,
            mask: argv.mask,
            negativePrompt: argv.negativePrompt,
            numSteps: argv.numSteps,
            prompt: argv.prompt,
            seed: argv.seed,
            strength: argv.strength,
            width: argv.width,
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.guidance !== undefined) setNestedValue(bodyData, ['guidance'], argv.guidance);
      if (argv.height !== undefined) setNestedValue(bodyData, ['height'], argv.height);
      if (argv.image !== undefined) setNestedValue(bodyData, ['image'], argv.image);
      if (argv.imageB64 !== undefined) setNestedValue(bodyData, ['image_b64'], argv.imageB64);
      if (argv.mask !== undefined) setNestedValue(bodyData, ['mask'], argv.mask);
      if (argv.negativePrompt !== undefined) setNestedValue(bodyData, ['negative_prompt'], argv.negativePrompt);
      if (argv.numSteps !== undefined) setNestedValue(bodyData, ['num_steps'], argv.numSteps);
      if (argv.prompt !== undefined) setNestedValue(bodyData, ['prompt'], argv.prompt);
      if (argv.seed !== undefined) setNestedValue(bodyData, ['seed'], argv.seed);
      if (argv.strength !== undefined) setNestedValue(bodyData, ['strength'], argv.strength);
      if (argv.width !== undefined) setNestedValue(bodyData, ['width'], argv.width);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
