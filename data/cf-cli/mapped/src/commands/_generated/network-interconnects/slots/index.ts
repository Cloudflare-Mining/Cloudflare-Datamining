/**
 * slots command group
 * @generated from apis/network-interconnects/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'slots',
  describe: 'Available interconnect facility slots showing port capacity at Cloudflare data centers',

  builder: (yargs) => {
    return yargs.command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
