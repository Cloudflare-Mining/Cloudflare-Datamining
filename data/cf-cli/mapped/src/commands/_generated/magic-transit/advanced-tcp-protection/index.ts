/**
 * advanced-tcp-protection command group
 * @generated from apis/magic-transit/schema.ts
 */
import type { CommandModule } from 'yargs';
import configsallowlistcreate from './configs-allowlist-create.js';
import configsallowlistdeleteallowlistprefix from './configs-allowlist-delete-allowlist-prefix.js';
import configsallowlistdeleteforaccount from './configs-allowlist-delete-for-account.js';
import configsallowlistget from './configs-allowlist-get.js';
import configsallowlistlist from './configs-allowlist-list.js';
import configsallowlistupdate from './configs-allowlist-update.js';
import configsprefixesbulkcreate from './configs-prefixes-bulk-create.js';
import configsprefixescreate from './configs-prefixes-create.js';
import configsprefixesdeleteforaccount from './configs-prefixes-delete-for-account.js';
import configsprefixesdeleteprefix from './configs-prefixes-delete-prefix.js';
import configsprefixesget from './configs-prefixes-get.js';
import configsprefixeslist from './configs-prefixes-list.js';
import configsprefixesupdate from './configs-prefixes-update.js';
import configssynprotectionfilterscreate from './configs-syn-protection-filters-create.js';
import configssynprotectionfiltersdeleteforaccount from './configs-syn-protection-filters-delete-for-account.js';
import configssynprotectionfiltersdeleteprotectionfilter from './configs-syn-protection-filters-delete-protection-filter.js';
import configssynprotectionfiltersget from './configs-syn-protection-filters-get.js';
import configssynprotectionfilterslist from './configs-syn-protection-filters-list.js';
import configssynprotectionfiltersupdate from './configs-syn-protection-filters-update.js';
import configssynprotectionrulescreate from './configs-syn-protection-rules-create.js';
import configssynprotectionrulesdeleteforaccount from './configs-syn-protection-rules-delete-for-account.js';
import configssynprotectionrulesdeleteprotectionrule from './configs-syn-protection-rules-delete-protection-rule.js';
import configssynprotectionrulesget from './configs-syn-protection-rules-get.js';
import configssynprotectionruleslist from './configs-syn-protection-rules-list.js';
import configssynprotectionrulesupdate from './configs-syn-protection-rules-update.js';
import configstcpflowprotectionfilterscreate from './configs-tcp-flow-protection-filters-create.js';
import configstcpflowprotectionfiltersdeleteforaccount from './configs-tcp-flow-protection-filters-delete-for-account.js';
import configstcpflowprotectionfiltersdeleteprotectionfilter from './configs-tcp-flow-protection-filters-delete-protection-filter.js';
import configstcpflowprotectionfiltersget from './configs-tcp-flow-protection-filters-get.js';
import configstcpflowprotectionfilterslist from './configs-tcp-flow-protection-filters-list.js';
import configstcpflowprotectionfiltersupdate from './configs-tcp-flow-protection-filters-update.js';
import configstcpflowprotectionrulescreate from './configs-tcp-flow-protection-rules-create.js';
import configstcpflowprotectionrulesdeleteforaccount from './configs-tcp-flow-protection-rules-delete-for-account.js';
import configstcpflowprotectionrulesdeleteprotectionrule from './configs-tcp-flow-protection-rules-delete-protection-rule.js';
import configstcpflowprotectionrulesget from './configs-tcp-flow-protection-rules-get.js';
import configstcpflowprotectionruleslist from './configs-tcp-flow-protection-rules-list.js';
import configstcpflowprotectionrulesupdate from './configs-tcp-flow-protection-rules-update.js';
import configstcpprotectionstatusget from './configs-tcp-protection-status-get.js';
import configstcpprotectionstatusupdate from './configs-tcp-protection-status-update.js';

const command: CommandModule = {
  command: 'advanced-tcp-protection',
  describe: 'Advanced Tcp Protection operations',

  builder: (yargs) => {
    return yargs
      .command(configsallowlistcreate)
      .command(configsallowlistdeleteallowlistprefix)
      .command(configsallowlistdeleteforaccount)
      .command(configsallowlistget)
      .command(configsallowlistlist)
      .command(configsallowlistupdate)
      .command(configsprefixesbulkcreate)
      .command(configsprefixescreate)
      .command(configsprefixesdeleteforaccount)
      .command(configsprefixesdeleteprefix)
      .command(configsprefixesget)
      .command(configsprefixeslist)
      .command(configsprefixesupdate)
      .command(configssynprotectionfilterscreate)
      .command(configssynprotectionfiltersdeleteforaccount)
      .command(configssynprotectionfiltersdeleteprotectionfilter)
      .command(configssynprotectionfiltersget)
      .command(configssynprotectionfilterslist)
      .command(configssynprotectionfiltersupdate)
      .command(configssynprotectionrulescreate)
      .command(configssynprotectionrulesdeleteforaccount)
      .command(configssynprotectionrulesdeleteprotectionrule)
      .command(configssynprotectionrulesget)
      .command(configssynprotectionruleslist)
      .command(configssynprotectionrulesupdate)
      .command(configstcpflowprotectionfilterscreate)
      .command(configstcpflowprotectionfiltersdeleteforaccount)
      .command(configstcpflowprotectionfiltersdeleteprotectionfilter)
      .command(configstcpflowprotectionfiltersget)
      .command(configstcpflowprotectionfilterslist)
      .command(configstcpflowprotectionfiltersupdate)
      .command(configstcpflowprotectionrulescreate)
      .command(configstcpflowprotectionrulesdeleteforaccount)
      .command(configstcpflowprotectionrulesdeleteprotectionrule)
      .command(configstcpflowprotectionrulesget)
      .command(configstcpflowprotectionruleslist)
      .command(configstcpflowprotectionrulesupdate)
      .command(configstcpprotectionstatusget)
      .command(configstcpprotectionstatusupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
