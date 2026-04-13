/**
 * create command
 * @generated from apis/custom-certificates/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface CreateArgs {
  zoneId?: string;
  'bundle-method'?: string;
  certificate: string;
  'custom-csr-id'?: string;
  deploy?: string;
  'geo-restrictions-label'?: string;
  policy?: string;
  'private-key': string;
  type?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create [zoneId]',
  describe: 'Upload a new SSL certificate for a zone.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('bundle-method', {
        type: 'string',
        description:
          'A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.',
        choices: ['ubiquitous', 'optimal', 'force'] as const,
        default: undefined,
      })
      .option('certificate', {
        type: 'string',
        description: "The zone's SSL certificate or certificate and the intermediate(s).",
      })
      .option('custom-csr-id', {
        type: 'string',
        description: 'The identifier for the Custom CSR that was used.',
        default: undefined,
      })
      .option('deploy', {
        type: 'string',
        description: 'The environment to deploy the certificate to, defaults to production',
        choices: ['staging', 'production'] as const,
        default: undefined,
      })
      .option('geo-restrictions-label', {
        type: 'string',
        description: 'The geo_restrictions.label field',
        choices: ['us', 'eu', 'highest_security'] as const,
        default: undefined,
      })
      .option('policy', {
        type: 'string',
        description:
          'Specify the policy that determines the region where your private key will be held locally. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Any combination of countries, specified by their two letter country code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) can be chosen, such as \'country: IN\', as well as \'region: EU\' which refers to the EU region. If there are too few data centers satisfying the policy, it will be rejected. Note: The API accepts this field as either "policy" or "policy_restrictions" in requests. Responses return this field as "policy_restrictions".',
        default: undefined,
      })
      .option('private-key', {
        type: 'string',
        description: "The zone's private key.",
      })
      .option('type', {
        type: 'string',
        description:
          "The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake.",
        choices: ['legacy_custom', 'sni_custom'] as const,
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
      .choices('bundle-method', ['ubiquitous', 'optimal', 'force'] as const)
      .choices('deploy', ['staging', 'production'] as const)
      .choices('geo-restrictions-label', ['us', 'eu', 'highest_security'] as const)
      .choices('type', ['legacy_custom', 'sni_custom'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf custom-certificates create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/custom_certificates`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            bundleMethod: argv.bundleMethod,
            certificate: argv.certificate,
            customCsrId: argv.customCsrId,
            deploy: argv.deploy,
            geoRestrictionsLabel: argv.geoRestrictionsLabel,
            policy: argv.policy,
            privateKey: argv.privateKey,
            type: argv.type,
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
        const result = await client.post<unknown>(`/zones/${zoneId}/custom_certificates`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.bundleMethod !== undefined) setNestedValue(bodyData, ['bundle_method'], argv.bundleMethod);
      if (argv.certificate !== undefined) setNestedValue(bodyData, ['certificate'], argv.certificate);
      if (argv.customCsrId !== undefined) setNestedValue(bodyData, ['custom_csr_id'], argv.customCsrId);
      if (argv.deploy !== undefined) setNestedValue(bodyData, ['deploy'], argv.deploy);
      if (argv.geoRestrictionsLabel !== undefined)
        setNestedValue(bodyData, ['geo_restrictions', 'label'], argv.geoRestrictionsLabel);
      if (argv.policy !== undefined) setNestedValue(bodyData, ['policy'], argv.policy);
      if (argv.privateKey !== undefined) setNestedValue(bodyData, ['private_key'], argv.privateKey);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      const result = await client.post<unknown>(`/zones/${zoneId}/custom_certificates`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
