/**
 * firewall command
 * @generated from apis/firewall/schema.ts
 */
import type { CommandModule } from 'yargs';
import accessrules from './access-rules/index.js';
import accessrulesextra from './access-rules-extra/index.js';
import lockdowns from './lockdowns/index.js';
import rules from './rules/index.js';
import uarules from './ua-rules/index.js';
import waf from './waf/index.js';
import wafextra from './waf-extra/index.js';

const command: CommandModule = {
  command: 'firewall',
  describe: 'Legacy firewall rules, zone lockdowns, access rules, user-agent blocking, and WAF packages',

  builder: (yargs) => {
    return yargs
      .command(accessrules)
      .command(accessrulesextra)
      .command(lockdowns)
      .command(rules)
      .command(uarules)
      .command(waf)
      .command(wafextra)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
