/**
 * create command
 * @generated from apis/request-tracers/schema.ts
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
  'body-base64'?: string;
  'body-plain-text'?: string;
  'context-bot-score'?: number;
  'context-geoloc-city'?: string;
  'context-geoloc-continent'?: string;
  'context-geoloc-is-eu-country'?: boolean;
  'context-geoloc-iso-code'?: string;
  'context-geoloc-latitude'?: number;
  'context-geoloc-longitude'?: number;
  'context-geoloc-postal-code'?: string;
  'context-geoloc-region-code'?: string;
  'context-geoloc-subdivision-2-iso-code'?: string;
  'context-geoloc-timezone'?: string;
  'context-skip-challenge'?: boolean;
  'context-threat-score'?: number;
  method: string;
  protocol?: string;
  'skip-response'?: boolean;
  url: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe:
    "Traces a simulated HTTP request through Cloudflare's edge to analyze how rules, settings, and configurations would process the request. Useful for debugging firewall rules, page rules, and other request transformations without sending actual traffic. Supports custom headers, cookies, body content, and geolocation context.",

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('body-base64', {
        type: 'string',
        description: 'Base64 encoded request body',
        default: undefined,
      })
      .option('body-plain-text', {
        type: 'string',
        description: 'Request body as plain text',
        default: undefined,
      })
      .option('context-bot-score', {
        type: 'number',
        description: 'Bot score used for evaluating tracing request processing',
        default: undefined,
      })
      .option('context-geoloc-city', {
        type: 'string',
        description: 'The context.geoloc.city field',
        default: undefined,
      })
      .option('context-geoloc-continent', {
        type: 'string',
        description: 'The context.geoloc.continent field',
        default: undefined,
      })
      .option('context-geoloc-is-eu-country', {
        type: 'boolean',
        description: 'The context.geoloc.is_eu_country field',
        default: false,
      })
      .option('context-geoloc-iso-code', {
        type: 'string',
        description: 'The context.geoloc.iso_code field',
        default: undefined,
      })
      .option('context-geoloc-latitude', {
        type: 'number',
        description: 'The context.geoloc.latitude field',
        default: undefined,
      })
      .option('context-geoloc-longitude', {
        type: 'number',
        description: 'The context.geoloc.longitude field',
        default: undefined,
      })
      .option('context-geoloc-postal-code', {
        type: 'string',
        description: 'The context.geoloc.postal_code field',
        default: undefined,
      })
      .option('context-geoloc-region-code', {
        type: 'string',
        description: 'The context.geoloc.region_code field',
        default: undefined,
      })
      .option('context-geoloc-subdivision-2-iso-code', {
        type: 'string',
        description: 'The context.geoloc.subdivision_2_iso_code field',
        default: undefined,
      })
      .option('context-geoloc-timezone', {
        type: 'string',
        description: 'The context.geoloc.timezone field',
        default: undefined,
      })
      .option('context-skip-challenge', {
        type: 'boolean',
        description: 'Whether to skip any challenges for tracing request (e.g.: captcha)',
        default: false,
      })
      .option('context-threat-score', {
        type: 'number',
        description: 'Threat score used for evaluating tracing request processing',
        default: undefined,
      })
      .option('method', {
        type: 'string',
        description: 'HTTP Method of tracing request',
      })
      .option('protocol', {
        type: 'string',
        description: 'HTTP Protocol of tracing request',
        default: undefined,
      })
      .option('skip-response', {
        type: 'boolean',
        description: 'Skip sending the request to the Origin server after all rules evaluation',
        default: false,
      })
      .option('url', {
        type: 'string',
        description: 'URL to which perform tracing request',
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
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf request-tracers traces create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/request-tracer/trace`,
          pathParams: {},
          body: {
            bodyBase64: argv.bodyBase64,
            bodyPlainText: argv.bodyPlainText,
            contextBotScore: argv.contextBotScore,
            contextGeolocCity: argv.contextGeolocCity,
            contextGeolocContinent: argv.contextGeolocContinent,
            contextGeolocIsEuCountry: argv.contextGeolocIsEuCountry,
            contextGeolocIsoCode: argv.contextGeolocIsoCode,
            contextGeolocLatitude: argv.contextGeolocLatitude,
            contextGeolocLongitude: argv.contextGeolocLongitude,
            contextGeolocPostalCode: argv.contextGeolocPostalCode,
            contextGeolocRegionCode: argv.contextGeolocRegionCode,
            contextGeolocSubdivision2IsoCode: argv.contextGeolocSubdivision2IsoCode,
            contextGeolocTimezone: argv.contextGeolocTimezone,
            contextSkipChallenge: argv.contextSkipChallenge,
            contextThreatScore: argv.contextThreatScore,
            method: argv.method,
            protocol: argv.protocol,
            skipResponse: argv.skipResponse,
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/accounts/${accountId}/request-tracer/trace`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.bodyBase64 !== undefined) setNestedValue(bodyData, ['body', 'base64'], argv.bodyBase64);
      if (argv.bodyPlainText !== undefined) setNestedValue(bodyData, ['body', 'plain_text'], argv.bodyPlainText);
      if (argv.contextBotScore !== undefined) setNestedValue(bodyData, ['context', 'bot_score'], argv.contextBotScore);
      if (argv.contextGeolocCity !== undefined)
        setNestedValue(bodyData, ['context', 'geoloc', 'city'], argv.contextGeolocCity);
      if (argv.contextGeolocContinent !== undefined)
        setNestedValue(bodyData, ['context', 'geoloc', 'continent'], argv.contextGeolocContinent);
      if (argv.contextGeolocIsEuCountry !== undefined)
        setNestedValue(bodyData, ['context', 'geoloc', 'is_eu_country'], argv.contextGeolocIsEuCountry);
      if (argv.contextGeolocIsoCode !== undefined)
        setNestedValue(bodyData, ['context', 'geoloc', 'iso_code'], argv.contextGeolocIsoCode);
      if (argv.contextGeolocLatitude !== undefined)
        setNestedValue(bodyData, ['context', 'geoloc', 'latitude'], argv.contextGeolocLatitude);
      if (argv.contextGeolocLongitude !== undefined)
        setNestedValue(bodyData, ['context', 'geoloc', 'longitude'], argv.contextGeolocLongitude);
      if (argv.contextGeolocPostalCode !== undefined)
        setNestedValue(bodyData, ['context', 'geoloc', 'postal_code'], argv.contextGeolocPostalCode);
      if (argv.contextGeolocRegionCode !== undefined)
        setNestedValue(bodyData, ['context', 'geoloc', 'region_code'], argv.contextGeolocRegionCode);
      if (argv.contextGeolocSubdivision2IsoCode !== undefined)
        setNestedValue(
          bodyData,
          ['context', 'geoloc', 'subdivision_2_iso_code'],
          argv.contextGeolocSubdivision2IsoCode,
        );
      if (argv.contextGeolocTimezone !== undefined)
        setNestedValue(bodyData, ['context', 'geoloc', 'timezone'], argv.contextGeolocTimezone);
      if (argv.contextSkipChallenge !== undefined)
        setNestedValue(bodyData, ['context', 'skip_challenge'], argv.contextSkipChallenge);
      if (argv.contextThreatScore !== undefined)
        setNestedValue(bodyData, ['context', 'threat_score'], argv.contextThreatScore);
      if (argv.method !== undefined) setNestedValue(bodyData, ['method'], argv.method);
      if (argv.protocol !== undefined) setNestedValue(bodyData, ['protocol'], argv.protocol);
      if (argv.skipResponse !== undefined) setNestedValue(bodyData, ['skip_response'], argv.skipResponse);
      if (argv.url !== undefined) setNestedValue(bodyData, ['url'], argv.url);
      const result = await client.post<unknown>(`/accounts/${accountId}/request-tracer/trace`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
