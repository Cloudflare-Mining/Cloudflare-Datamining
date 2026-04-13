/**
 * update command
 * @generated from apis/bot-management/schema.ts
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

interface UpdateArgs {
  zoneId?: string;
  'ai-bots-protection'?: string;
  'cf-robots-variant'?: string;
  'crawler-protection'?: string;
  'enable-js'?: boolean;
  'is-robots-txt-managed'?: boolean;
  'fight-mode'?: boolean;
  'optimize-wordpress'?: boolean;
  'sbfm-definitely-automated'?: string;
  'sbfm-static-resource-protection'?: boolean;
  'sbfm-verified-bots'?: string;
  'sbfm-likely-automated'?: string;
  'auto-update-model'?: boolean;
  'bm-cookie-enabled'?: boolean;
  'suppress-session-score'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update [zoneId]',
  describe:
    'Updates the Bot Management configuration for a zone. This API is used to update: - **Bot Fight Mode** - **Super Bot Fight Mode** - **Bot Management for Enterprise** See [Bot Plans](https://developers.cloudflare.com/bots/plans/) for more information on the different plans \\ If you recently upgraded or downgraded your plan, refer to the following examples to clean up old configurations. Copy and paste the example body to remove old zone configurations based on your current plan. #### Clean up configuration for Bot Fight Mode plan \`\`\`json { "sbfm_likely_automated": "allow", "sbfm_definitely_automated": "allow", "sbfm_verified_bots": "allow", "sbfm_static_resource_protection": false, "optimize_wordpress": false, "suppress_session_score": false } \`\`\` #### Clean up configuration for SBFM Pro plan \`\`\`json { "sbfm_likely_automated": "allow", "fight_mode": false } \`\`\` #### Clean up configuration for SBFM Biz plan \`\`\`json { "fight_mode": false } \`\`\` #### Clean up configuration for BM Enterprise Subscription plan It is strongly recommended that you ensure you have [custom rules](https://developers.cloudflare.com/waf/custom-rules/) in place to protect your zone before disabling the SBFM rules. Without these protections, your zone is vulnerable to attacks. \`\`\`json { "sbfm_likely_automated": "allow", "sbfm_definitely_automated": "allow", "sbfm_verified_bots": "allow", "sbfm_static_resource_protection": false, "optimize_wordpress": false, "fight_mode": false } \`\`\`',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('ai-bots-protection', {
        type: 'string',
        description:
          'Enable rule to block AI Scrapers and Crawlers. Please note the value \`only_on_ad_pages\` is currently not available for Enterprise customers.',
        choices: ['block', 'disabled', 'only_on_ad_pages'] as const,
        default: undefined,
      })
      .option('cf-robots-variant', {
        type: 'string',
        description: 'Specifies the Robots Access Control License variant to use.',
        choices: ['off', 'policy_only'] as const,
        default: undefined,
      })
      .option('crawler-protection', {
        type: 'string',
        description: 'Enable rule to punish AI Scrapers and Crawlers via a link maze.',
        choices: ['enabled', 'disabled'] as const,
        default: undefined,
      })
      .option('enable-js', {
        type: 'boolean',
        description:
          'Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).',
        default: false,
      })
      .option('is-robots-txt-managed', {
        type: 'boolean',
        description:
          'Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt.',
        default: false,
      })
      .option('fight-mode', {
        type: 'boolean',
        description: 'Whether to enable Bot Fight Mode.',
        default: false,
      })
      .option('optimize-wordpress', {
        type: 'boolean',
        description: 'Whether to optimize Super Bot Fight Mode protections for Wordpress.',
        default: false,
      })
      .option('sbfm-definitely-automated', {
        type: 'string',
        description: 'Super Bot Fight Mode (SBFM) action to take on definitely automated requests.',
        choices: ['allow', 'block', 'managed_challenge'] as const,
        default: undefined,
      })
      .option('sbfm-static-resource-protection', {
        type: 'boolean',
        description:
          'Super Bot Fight Mode (SBFM) to enable static resource protection. Enable if static resources on your application need bot protection. Note: Static resource protection can also result in legitimate traffic being blocked. ',
        default: false,
      })
      .option('sbfm-verified-bots', {
        type: 'string',
        description: 'Super Bot Fight Mode (SBFM) action to take on verified bots requests.',
        choices: ['allow', 'block'] as const,
        default: undefined,
      })
      .option('sbfm-likely-automated', {
        type: 'string',
        description: 'Super Bot Fight Mode (SBFM) action to take on likely automated requests.',
        choices: ['allow', 'block', 'managed_challenge'] as const,
        default: undefined,
      })
      .option('auto-update-model', {
        type: 'boolean',
        description:
          'Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes)',
        default: false,
      })
      .option('bm-cookie-enabled', {
        type: 'boolean',
        description:
          'Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true',
        default: false,
      })
      .option('suppress-session-score', {
        type: 'boolean',
        description: 'Whether to disable tracking the highest bot score for a session in the Bot Management cookie.',
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
      })
      .conflicts('fight-mode', [
        'optimizeWordpress',
        'sbfmDefinitelyAutomated',
        'sbfmStaticResourceProtection',
        'sbfmVerifiedBots',
        'sbfmLikelyAutomated',
        'autoUpdateModel',
        'bmCookieEnabled',
        'suppressSessionScore',
      ])
      .conflicts('optimize-wordpress', ['fightMode', 'autoUpdateModel', 'bmCookieEnabled', 'suppressSessionScore'])
      .conflicts('sbfm-definitely-automated', [
        'fightMode',
        'autoUpdateModel',
        'bmCookieEnabled',
        'suppressSessionScore',
      ])
      .conflicts('sbfm-static-resource-protection', [
        'fightMode',
        'autoUpdateModel',
        'bmCookieEnabled',
        'suppressSessionScore',
      ])
      .conflicts('sbfm-verified-bots', ['fightMode', 'autoUpdateModel', 'bmCookieEnabled', 'suppressSessionScore'])
      .conflicts('sbfm-likely-automated', ['fightMode', 'autoUpdateModel', 'bmCookieEnabled', 'suppressSessionScore'])
      .conflicts('auto-update-model', [
        'fightMode',
        'optimizeWordpress',
        'sbfmDefinitelyAutomated',
        'sbfmStaticResourceProtection',
        'sbfmVerifiedBots',
        'sbfmLikelyAutomated',
      ])
      .conflicts('bm-cookie-enabled', [
        'fightMode',
        'optimizeWordpress',
        'sbfmDefinitelyAutomated',
        'sbfmStaticResourceProtection',
        'sbfmVerifiedBots',
        'sbfmLikelyAutomated',
      ])
      .conflicts('suppress-session-score', [
        'fightMode',
        'optimizeWordpress',
        'sbfmDefinitelyAutomated',
        'sbfmStaticResourceProtection',
        'sbfmVerifiedBots',
        'sbfmLikelyAutomated',
      ])
      .choices('ai-bots-protection', ['block', 'disabled', 'only_on_ad_pages'] as const)
      .choices('cf-robots-variant', ['off', 'policy_only'] as const)
      .choices('crawler-protection', ['enabled', 'disabled'] as const)
      .choices('sbfm-definitely-automated', ['allow', 'block', 'managed_challenge'] as const)
      .choices('sbfm-verified-bots', ['allow', 'block'] as const)
      .choices('sbfm-likely-automated', ['allow', 'block', 'managed_challenge'] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf bot-management update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/bot_management`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            aiBotsProtection: argv.aiBotsProtection,
            cfRobotsVariant: argv.cfRobotsVariant,
            crawlerProtection: argv.crawlerProtection,
            enableJs: argv.enableJs,
            isRobotsTxtManaged: argv.isRobotsTxtManaged,
            fightMode: argv.fightMode,
            optimizeWordpress: argv.optimizeWordpress,
            sbfmDefinitelyAutomated: argv.sbfmDefinitelyAutomated,
            sbfmStaticResourceProtection: argv.sbfmStaticResourceProtection,
            sbfmVerifiedBots: argv.sbfmVerifiedBots,
            sbfmLikelyAutomated: argv.sbfmLikelyAutomated,
            autoUpdateModel: argv.autoUpdateModel,
            bmCookieEnabled: argv.bmCookieEnabled,
            suppressSessionScore: argv.suppressSessionScore,
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
        const result = await client.put<unknown>(`/zones/${zoneId}/bot_management`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.aiBotsProtection !== undefined) setNestedValue(bodyData, ['ai_bots_protection'], argv.aiBotsProtection);
      if (argv.cfRobotsVariant !== undefined) setNestedValue(bodyData, ['cf_robots_variant'], argv.cfRobotsVariant);
      if (argv.crawlerProtection !== undefined)
        setNestedValue(bodyData, ['crawler_protection'], argv.crawlerProtection);
      if (argv.enableJs !== undefined) setNestedValue(bodyData, ['enable_js'], argv.enableJs);
      if (argv.isRobotsTxtManaged !== undefined)
        setNestedValue(bodyData, ['is_robots_txt_managed'], argv.isRobotsTxtManaged);
      if (argv.fightMode !== undefined) setNestedValue(bodyData, ['fight_mode'], argv.fightMode);
      if (argv.optimizeWordpress !== undefined)
        setNestedValue(bodyData, ['optimize_wordpress'], argv.optimizeWordpress);
      if (argv.sbfmDefinitelyAutomated !== undefined)
        setNestedValue(bodyData, ['sbfm_definitely_automated'], argv.sbfmDefinitelyAutomated);
      if (argv.sbfmStaticResourceProtection !== undefined)
        setNestedValue(bodyData, ['sbfm_static_resource_protection'], argv.sbfmStaticResourceProtection);
      if (argv.sbfmVerifiedBots !== undefined) setNestedValue(bodyData, ['sbfm_verified_bots'], argv.sbfmVerifiedBots);
      if (argv.sbfmLikelyAutomated !== undefined)
        setNestedValue(bodyData, ['sbfm_likely_automated'], argv.sbfmLikelyAutomated);
      if (argv.autoUpdateModel !== undefined) setNestedValue(bodyData, ['auto_update_model'], argv.autoUpdateModel);
      if (argv.bmCookieEnabled !== undefined) setNestedValue(bodyData, ['bm_cookie_enabled'], argv.bmCookieEnabled);
      if (argv.suppressSessionScore !== undefined)
        setNestedValue(bodyData, ['suppress_session_score'], argv.suppressSessionScore);
      const result = await client.put<unknown>(`/zones/${zoneId}/bot_management`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
