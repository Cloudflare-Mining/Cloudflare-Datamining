/**
 * tags-patch command
 * @generated from apis/cloudforce-one/schema.ts
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

interface TagsPatchArgs {
  tagUuid: string;
  'active-duration'?: string;
  'actor-category'?: string;
  'alias-group-names'?: string;
  'alias-group-names-internal'?: string;
  'analytic-priority'?: number;
  'attribution-confidence'?: string;
  'attribution-organization'?: string;
  'category-uuid'?: string;
  'external-reference-links'?: string;
  'internal-description'?: string;
  motive?: string;
  'opsec-level'?: string;
  'origin-country-iso'?: string;
  priority?: number;
  'sophistication-level'?: string;
  value?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, TagsPatchArgs> = {
  command: 'tags-patch <tagUuid>',
  describe: 'Updates a Source-of-Truth tag by UUID.',

  builder: (yargs: Argv): Argv<TagsPatchArgs> => {
    return yargs
      .positional('tagUuid', {
        type: 'string',
        description: 'Tag UUID.',
        demandOption: true,
      })
      .option('active-duration', {
        type: 'string',
        description: 'The activeDuration field',
        default: undefined,
      })
      .option('actor-category', {
        type: 'string',
        description: 'The actorCategory field',
        default: undefined,
      })
      .option('alias-group-names', {
        type: 'string',
        description: 'The aliasGroupNames field',
        default: undefined,
      })
      .option('alias-group-names-internal', {
        type: 'string',
        description: 'The aliasGroupNamesInternal field',
        default: undefined,
      })
      .option('analytic-priority', {
        type: 'number',
        description: 'The analyticPriority field',
        default: undefined,
      })
      .option('attribution-confidence', {
        type: 'string',
        description: 'The attributionConfidence field',
        default: undefined,
      })
      .option('attribution-organization', {
        type: 'string',
        description: 'The attributionOrganization field',
        default: undefined,
      })
      .option('category-uuid', {
        type: 'string',
        description: 'The categoryUuid field',
        default: undefined,
      })
      .option('external-reference-links', {
        type: 'string',
        description: 'The externalReferenceLinks field',
        default: undefined,
      })
      .option('internal-description', {
        type: 'string',
        description: 'The internalDescription field',
        default: undefined,
      })
      .option('motive', {
        type: 'string',
        description: 'The motive field',
        default: undefined,
      })
      .option('opsec-level', {
        type: 'string',
        description: 'The opsecLevel field',
        default: undefined,
      })
      .option('origin-country-iso', {
        type: 'string',
        description: 'The originCountryISO field',
        default: undefined,
      })
      .option('priority', {
        type: 'number',
        description: 'The priority field',
        default: undefined,
      })
      .option('sophistication-level', {
        type: 'string',
        description: 'The sophisticationLevel field',
        default: undefined,
      })
      .option('value', {
        type: 'string',
        description: 'The value field',
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
      }) as Argv<TagsPatchArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TagsPatchArgs>): Promise<void> => {
    try {
      validateResourceId(argv.tagUuid as string | undefined, 'tagUuid');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events tags-patch',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/tags/${argv.tagUuid ?? '<tagUuid>'}`,
          pathParams: { tagUuid: String(argv.tagUuid ?? '') },
          body: {
            activeDuration: argv.activeDuration,
            actorCategory: argv.actorCategory,
            aliasGroupNames: argv.aliasGroupNames,
            aliasGroupNamesInternal: argv.aliasGroupNamesInternal,
            analyticPriority: argv.analyticPriority,
            attributionConfidence: argv.attributionConfidence,
            attributionOrganization: argv.attributionOrganization,
            categoryUuid: argv.categoryUuid,
            externalReferenceLinks: argv.externalReferenceLinks,
            internalDescription: argv.internalDescription,
            motive: argv.motive,
            opsecLevel: argv.opsecLevel,
            originCountryIso: argv.originCountryIso,
            priority: argv.priority,
            sophisticationLevel: argv.sophisticationLevel,
            value: argv.value,
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
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/cloudforce-one/events/tags/${argv.tagUuid}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.activeDuration !== undefined) setNestedValue(bodyData, ['activeDuration'], argv.activeDuration);
      if (argv.actorCategory !== undefined) setNestedValue(bodyData, ['actorCategory'], argv.actorCategory);
      if (argv.aliasGroupNames !== undefined) setNestedValue(bodyData, ['aliasGroupNames'], argv.aliasGroupNames);
      if (argv.aliasGroupNamesInternal !== undefined)
        setNestedValue(bodyData, ['aliasGroupNamesInternal'], argv.aliasGroupNamesInternal);
      if (argv.analyticPriority !== undefined) setNestedValue(bodyData, ['analyticPriority'], argv.analyticPriority);
      if (argv.attributionConfidence !== undefined)
        setNestedValue(bodyData, ['attributionConfidence'], argv.attributionConfidence);
      if (argv.attributionOrganization !== undefined)
        setNestedValue(bodyData, ['attributionOrganization'], argv.attributionOrganization);
      if (argv.categoryUuid !== undefined) setNestedValue(bodyData, ['categoryUuid'], argv.categoryUuid);
      if (argv.externalReferenceLinks !== undefined)
        setNestedValue(bodyData, ['externalReferenceLinks'], argv.externalReferenceLinks);
      if (argv.internalDescription !== undefined)
        setNestedValue(bodyData, ['internalDescription'], argv.internalDescription);
      if (argv.motive !== undefined) setNestedValue(bodyData, ['motive'], argv.motive);
      if (argv.opsecLevel !== undefined) setNestedValue(bodyData, ['opsecLevel'], argv.opsecLevel);
      if (argv.originCountryIso !== undefined) setNestedValue(bodyData, ['originCountryISO'], argv.originCountryIso);
      if (argv.priority !== undefined) setNestedValue(bodyData, ['priority'], argv.priority);
      if (argv.sophisticationLevel !== undefined)
        setNestedValue(bodyData, ['sophisticationLevel'], argv.sophisticationLevel);
      if (argv.value !== undefined) setNestedValue(bodyData, ['value'], argv.value);
      const result = await client.patch<unknown>(`/accounts/${accountId}/cloudforce-one/events/tags/${argv.tagUuid}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
