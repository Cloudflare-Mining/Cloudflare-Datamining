/**
 * usage command group
 * @generated from apis/dns/schema.ts
 */
import type { CommandModule } from 'yargs';
import getaccountusage from './get-account-usage.js';
import getzoneusage from './get-zone-usage.js';

const command: CommandModule = {
  command: 'usage',
  describe: 'Usage operations',

  builder: (yargs) => {
    return yargs.command(getaccountusage).command(getzoneusage).demandCommand(1);
  },

  handler: () => {},
};

export default command;
