/**
 * routes command group
 * @generated from apis/magic-transit/schema.ts
 */
import type { CommandModule } from 'yargs';
import bulkupdate from './bulk-update.js';
import create from './create.js';
import delete_ from './delete.js';
import empty from './empty.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'routes',
  describe: 'Static routes that direct IP prefix traffic through specific GRE/IPsec tunnels',

  builder: (yargs) => {
    return yargs
      .command(bulkupdate)
      .command(create)
      .command(delete_)
      .command(empty)
      .command(get)
      .command(list)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
