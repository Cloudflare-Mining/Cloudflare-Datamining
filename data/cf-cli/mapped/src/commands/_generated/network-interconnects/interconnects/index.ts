/**
 * interconnects command group
 * @generated from apis/network-interconnects/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import loa from './loa.js';
import status from './status.js';

const command: CommandModule = {
  command: 'interconnects',
  describe: 'Physical cross-connect and partner interconnect sessions with LOA and status tracking',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(loa)
      .command(status)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
