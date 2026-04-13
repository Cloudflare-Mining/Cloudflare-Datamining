/**
 * search command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import global from './global.js';

const command: CommandModule = {
  command: 'search',
  describe: 'Search Radar data across IPs, ASNs, domains, and locations',

  builder: (yargs) => {
    return yargs.command(global).demandCommand(1);
  },

  handler: () => {},
};

export default command;
