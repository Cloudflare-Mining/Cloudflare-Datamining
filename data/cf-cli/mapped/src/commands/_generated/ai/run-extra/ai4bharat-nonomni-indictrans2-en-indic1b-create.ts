/**
 * ai4bharat-nonomni-indictrans2-en-indic1b-create command
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

interface Ai4bharatNonomniIndictrans2EnIndic1bCreateArgs {
  'queue-request'?: string;
  tags?: string;
  'target-language': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, Ai4bharatNonomniIndictrans2EnIndic1bCreateArgs> = {
  command: 'ai4bharat-nonomni-indictrans2-en-indic1b-create',
  describe: 'Runs inference on the @cf/ai4bharat/nonomni-indictrans2-en-indic-1b model.',

  builder: (yargs: Argv): Argv<Ai4bharatNonomniIndictrans2EnIndic1bCreateArgs> => {
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
      .option('target-language', {
        type: 'string',
        description: 'Target langauge to translate to',
        choices: [
          'asm_Beng',
          'awa_Deva',
          'ben_Beng',
          'bho_Deva',
          'brx_Deva',
          'doi_Deva',
          'eng_Latn',
          'gom_Deva',
          'gon_Deva',
          'guj_Gujr',
          'hin_Deva',
          'hne_Deva',
          'kan_Knda',
          'kas_Arab',
          'kas_Deva',
          'kha_Latn',
          'lus_Latn',
          'mag_Deva',
          'mai_Deva',
          'mal_Mlym',
          'mar_Deva',
          'mni_Beng',
          'mni_Mtei',
          'npi_Deva',
          'ory_Orya',
          'pan_Guru',
          'san_Deva',
          'sat_Olck',
          'snd_Arab',
          'snd_Deva',
          'tam_Taml',
          'tel_Telu',
          'urd_Arab',
          'unr_Deva',
        ] as const,
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
      .choices('target-language', [
        'asm_Beng',
        'awa_Deva',
        'ben_Beng',
        'bho_Deva',
        'brx_Deva',
        'doi_Deva',
        'eng_Latn',
        'gom_Deva',
        'gon_Deva',
        'guj_Gujr',
        'hin_Deva',
        'hne_Deva',
        'kan_Knda',
        'kas_Arab',
        'kas_Deva',
        'kha_Latn',
        'lus_Latn',
        'mag_Deva',
        'mai_Deva',
        'mal_Mlym',
        'mar_Deva',
        'mni_Beng',
        'mni_Mtei',
        'npi_Deva',
        'ory_Orya',
        'pan_Guru',
        'san_Deva',
        'sat_Olck',
        'snd_Arab',
        'snd_Deva',
        'tam_Taml',
        'tel_Telu',
        'urd_Arab',
        'unr_Deva',
      ] as const) as Argv<Ai4bharatNonomniIndictrans2EnIndic1bCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<Ai4bharatNonomniIndictrans2EnIndic1bCreateArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.queueRequest !== undefined) params['queueRequest'] = argv.queueRequest;
      if (argv.tags !== undefined) params['tags'] = argv.tags;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai run-extra ai4bharat-nonomni-indictrans2-en-indic1b-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai/run/@cf/ai4bharat/nonomni-indictrans2-en-indic-1b`,
          pathParams: {},
          body: { ...params, targetLanguage: argv.targetLanguage },
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
          `/accounts/${accountId}/ai/run/@cf/ai4bharat/nonomni-indictrans2-en-indic-1b`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.targetLanguage !== undefined) setNestedValue(bodyData, ['target_language'], argv.targetLanguage);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai/run/@cf/ai4bharat/nonomni-indictrans2-en-indic-1b${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
