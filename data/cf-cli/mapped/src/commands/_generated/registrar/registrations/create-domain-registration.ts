/**
 * create-domain-registration command
 * @generated from apis/registrar/schema.ts
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

interface CreateDomainRegistrationArgs {
  'idempotency-key': string;
  prefer?: string;
  'acknowledgements-fees-currency': string;
  'acknowledgements-fees-registration-fee'?: string;
  'acknowledgements-fees-renewal-fee'?: string;
  'acknowledgements-fees-transfer-fee'?: string;
  'acknowledgements-non-government-organization'?: boolean;
  'acknowledgements-travel-industry'?: boolean;
  'contact-extensions-ca-ca-legal-type': string;
  'contact-extensions-ca-ca-trademark': number;
  'contact-extensions-uk-registrant-type': string;
  'contact-extensions-us-application-purpose': string;
  'contact-extensions-us-nexus-category': string;
  'domain-name': string;
  'privacy-enabled'?: boolean;
  'registrant-contact-id'?: string;
  years: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateDomainRegistrationArgs> = {
  command: 'create-domain-registration',
  describe:
    'Starts a domain registration workflow. By default, the server holds the connection for up to 10 seconds while the registration completes. Most registrations finish within this window and return \`201 Created\` with a completed workflow status. If the registration is still processing after 10 seconds, the server returns \`202 Accepted\`. Poll the URL in \`links.self\` to track progress. To skip the wait and receive an immediate \`202\`, send \`Prefer: respond-async\`.',

  builder: (yargs: Argv): Argv<CreateDomainRegistrationArgs> => {
    return yargs
      .option('idempotency-key', {
        type: 'string',
        description: 'Client-generated idempotency key to dedupe retries.',
      })
      .option('prefer', {
        type: 'string',
        description:
          'Set to \`respond-async\` to receive an immediate \`202 Accepted\` without waiting for the operation to complete (RFC 7240).',
        default: undefined,
      })
      .option('acknowledgements-fees-currency', {
        type: 'string',
        description: 'The acknowledgements.fees.currency field',
        choices: ['USD'] as const,
      })
      .option('acknowledgements-fees-registration-fee', {
        type: 'string',
        description: 'Registration fee acknowledged by the client.',
        default: undefined,
      })
      .option('acknowledgements-fees-renewal-fee', {
        type: 'string',
        description: 'Renewal fee acknowledged by the client.',
        default: undefined,
      })
      .option('acknowledgements-fees-transfer-fee', {
        type: 'string',
        description: 'Transfer fee acknowledged by the client.',
        default: undefined,
      })
      .option('acknowledgements-non-government-organization', {
        type: 'boolean',
        description: 'Acknowledgement required for .ngo and .ong.',
        default: false,
      })
      .option('acknowledgements-travel-industry', {
        type: 'boolean',
        description: 'Acknowledgement required for .travel.',
        default: false,
      })
      .option('contact-extensions-ca-ca-legal-type', {
        type: 'string',
        description: 'CIRA legal type code.',
        choices: [
          'ABO',
          'ASS',
          'CCO',
          'CCT',
          'EDU',
          'GOV',
          'HOP',
          'INB',
          'LAM',
          'LGR',
          'MAJ',
          'OMK',
          'PLT',
          'PRT',
          'RES',
          'TDM',
          'TRD',
          'TRS',
        ] as const,
      })
      .option('contact-extensions-ca-ca-trademark', {
        type: 'number',
        description: 'Trademark indicator (0 or 1).',
      })
      .option('contact-extensions-uk-registrant-type', {
        type: 'string',
        description: 'Type of registrant entity.',
        choices: [
          'LTD',
          'PLC',
          'LLP',
          'IP',
          'IND',
          'STRA',
          'FIND',
          'PTNR',
          'SCH',
          'RCHAR',
          'GOV',
          'CRC',
          'STAT',
          'OTHER',
          'FCORP',
          'FOTHER',
        ] as const,
      })
      .option('contact-extensions-us-application-purpose', {
        type: 'string',
        description: 'Application purpose code.',
        choices: ['P1', 'P2', 'P3', 'P4', 'P5'] as const,
      })
      .option('contact-extensions-us-nexus-category', {
        type: 'string',
        description: 'Nexus category code.',
      })
      .option('domain-name', {
        type: 'string',
        description: 'Domain name.',
      })
      .option('privacy-enabled', {
        type: 'boolean',
        description: 'Enable WHOIS privacy.',
        default: false,
      })
      .option('registrant-contact-id', {
        type: 'string',
        description: 'Contact ID for registrant.',
        default: undefined,
      })
      .option('years', {
        type: 'number',
        description: 'Number of years to register.',
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
      .choices('acknowledgements-fees-currency', ['USD'] as const)
      .choices('contact-extensions-ca-ca-legal-type', [
        'ABO',
        'ASS',
        'CCO',
        'CCT',
        'EDU',
        'GOV',
        'HOP',
        'INB',
        'LAM',
        'LGR',
        'MAJ',
        'OMK',
        'PLT',
        'PRT',
        'RES',
        'TDM',
        'TRD',
        'TRS',
      ] as const)
      .choices('contact-extensions-uk-registrant-type', [
        'LTD',
        'PLC',
        'LLP',
        'IP',
        'IND',
        'STRA',
        'FIND',
        'PTNR',
        'SCH',
        'RCHAR',
        'GOV',
        'CRC',
        'STAT',
        'OTHER',
        'FCORP',
        'FOTHER',
      ] as const)
      .choices('contact-extensions-us-application-purpose', [
        'P1',
        'P2',
        'P3',
        'P4',
        'P5',
      ] as const) as Argv<CreateDomainRegistrationArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateDomainRegistrationArgs>): Promise<void> => {
    try {
      const headers: Record<string, string> = {};
      if (argv.idempotencyKey !== undefined) headers['Idempotency-Key'] = String(argv.idempotencyKey);
      if (argv.prefer !== undefined) headers['Prefer'] = String(argv.prefer);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf registrar registrations create-domain-registration',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/registrar/registrations`,
          pathParams: {},
          body: {
            acknowledgementsFeesCurrency: argv.acknowledgementsFeesCurrency,
            acknowledgementsFeesRegistrationFee: argv.acknowledgementsFeesRegistrationFee,
            acknowledgementsFeesRenewalFee: argv.acknowledgementsFeesRenewalFee,
            acknowledgementsFeesTransferFee: argv.acknowledgementsFeesTransferFee,
            acknowledgementsNonGovernmentOrganization: argv.acknowledgementsNonGovernmentOrganization,
            acknowledgementsTravelIndustry: argv.acknowledgementsTravelIndustry,
            contactExtensionsCaCaLegalType: argv.contactExtensionsCaCaLegalType,
            contactExtensionsCaCaTrademark: argv.contactExtensionsCaCaTrademark,
            contactExtensionsUkRegistrantType: argv.contactExtensionsUkRegistrantType,
            contactExtensionsUsApplicationPurpose: argv.contactExtensionsUsApplicationPurpose,
            contactExtensionsUsNexusCategory: argv.contactExtensionsUsNexusCategory,
            domainName: argv.domainName,
            privacyEnabled: argv.privacyEnabled,
            registrantContactId: argv.registrantContactId,
            years: argv.years,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/registrar/registrations`, {
          body: bodyData,
          headers: Object.keys(headers).length > 0 ? headers : undefined,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.acknowledgementsFeesCurrency !== undefined)
        setNestedValue(bodyData, ['acknowledgements', 'fees', 'currency'], argv.acknowledgementsFeesCurrency);
      if (argv.acknowledgementsFeesRegistrationFee !== undefined)
        setNestedValue(
          bodyData,
          ['acknowledgements', 'fees', 'registration_fee'],
          argv.acknowledgementsFeesRegistrationFee,
        );
      if (argv.acknowledgementsFeesRenewalFee !== undefined)
        setNestedValue(bodyData, ['acknowledgements', 'fees', 'renewal_fee'], argv.acknowledgementsFeesRenewalFee);
      if (argv.acknowledgementsFeesTransferFee !== undefined)
        setNestedValue(bodyData, ['acknowledgements', 'fees', 'transfer_fee'], argv.acknowledgementsFeesTransferFee);
      if (argv.acknowledgementsNonGovernmentOrganization !== undefined)
        setNestedValue(
          bodyData,
          ['acknowledgements', 'non_government_organization'],
          argv.acknowledgementsNonGovernmentOrganization,
        );
      if (argv.acknowledgementsTravelIndustry !== undefined)
        setNestedValue(bodyData, ['acknowledgements', 'travel_industry'], argv.acknowledgementsTravelIndustry);
      if (argv.contactExtensionsCaCaLegalType !== undefined)
        setNestedValue(bodyData, ['contact_extensions', 'ca', 'ca_legal_type'], argv.contactExtensionsCaCaLegalType);
      if (argv.contactExtensionsCaCaTrademark !== undefined)
        setNestedValue(bodyData, ['contact_extensions', 'ca', 'ca_trademark'], argv.contactExtensionsCaCaTrademark);
      if (argv.contactExtensionsUkRegistrantType !== undefined)
        setNestedValue(
          bodyData,
          ['contact_extensions', 'uk', 'registrant_type'],
          argv.contactExtensionsUkRegistrantType,
        );
      if (argv.contactExtensionsUsApplicationPurpose !== undefined)
        setNestedValue(
          bodyData,
          ['contact_extensions', 'us', 'application_purpose'],
          argv.contactExtensionsUsApplicationPurpose,
        );
      if (argv.contactExtensionsUsNexusCategory !== undefined)
        setNestedValue(bodyData, ['contact_extensions', 'us', 'nexus_category'], argv.contactExtensionsUsNexusCategory);
      if (argv.domainName !== undefined) setNestedValue(bodyData, ['domain_name'], argv.domainName);
      if (argv.privacyEnabled !== undefined) setNestedValue(bodyData, ['privacy_enabled'], argv.privacyEnabled);
      if (argv.registrantContactId !== undefined)
        setNestedValue(bodyData, ['registrant_contact_id'], argv.registrantContactId);
      if (argv.years !== undefined) setNestedValue(bodyData, ['years'], argv.years);
      if (argv.idempotencyKey !== undefined) bodyData['idempotency_key'] = argv.idempotencyKey;
      const result = await client.post<unknown>(`/accounts/${accountId}/registrar/registrations`, {
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
