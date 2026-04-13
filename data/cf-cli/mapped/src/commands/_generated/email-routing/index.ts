/**
 * email-routing command
 * @generated from apis/email-routing/schema.ts
 */
import type { CommandModule } from 'yargs';
import disable from './disable.js';
import enable from './enable.js';
import get from './get.js';
import addresses from './addresses/index.js';
import dns from './dns/index.js';
import rules from './rules/index.js';
import sending from './sending/index.js';

const command: CommandModule = {
  command: 'email-routing',
  describe:
    'Route incoming emails to destination addresses using custom rules, catch-all handlers, and DNS configuration',

  builder: (yargs) => {
    return yargs
      .command(disable)
      .command(enable)
      .command(get)
      .command(addresses)
      .command(dns)
      .command(rules)
      .command(sending)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
