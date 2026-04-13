/**
 * pcaps command group
 * @generated from apis/magic-transit/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import downloadget from './download-get.js';
import get from './get.js';
import list from './list.js';
import ownershipcreate from './ownership-create.js';
import ownershipdelete from './ownership-delete.js';
import ownershipget from './ownership-get.js';
import ownershipvalidate from './ownership-validate.js';
import stop from './stop.js';

const command: CommandModule = {
  command: 'pcaps',
  describe: 'Packet capture requests for debugging traffic flowing through Magic Transit tunnels',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(downloadget)
      .command(get)
      .command(list)
      .command(ownershipcreate)
      .command(ownershipdelete)
      .command(ownershipget)
      .command(ownershipvalidate)
      .command(stop)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
