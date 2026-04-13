/**
 * ipsec-tunnels command group
 * @generated from apis/magic-transit/schema.ts
 */
import type { CommandModule } from 'yargs';
import bulkupdate from './bulk-update.js';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import pskgenerate from './psk-generate.js';
import update from './update.js';

const command: CommandModule = {
  command: 'ipsec-tunnels',
  describe: 'IPsec tunnel endpoints with pre-shared key management for encrypted transit',

  builder: (yargs) => {
    return yargs
      .command(bulkupdate)
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(pskgenerate)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
