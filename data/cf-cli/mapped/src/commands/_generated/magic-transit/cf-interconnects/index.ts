/**
 * cf-interconnects command group
 * @generated from apis/magic-transit/schema.ts
 */
import type { CommandModule } from 'yargs';
import bulkupdate from './bulk-update.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'cf-interconnects',
  describe: 'Cloudflare Network Interconnect (CNI) links for direct physical or virtual peering',

  builder: (yargs) => {
    return yargs.command(bulkupdate).command(get).command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
