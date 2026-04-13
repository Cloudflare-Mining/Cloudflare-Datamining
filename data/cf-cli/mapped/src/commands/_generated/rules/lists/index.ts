/**
 * lists command group
 * @generated from apis/rules/schema.ts
 */
import type { CommandModule } from 'yargs';
import bulkoperationsget from './bulk-operations-get.js';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import itemscreate from './items-create.js';
import itemsdelete from './items-delete.js';
import itemsget from './items-get.js';
import itemslist from './items-list.js';
import itemsupdate from './items-update.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'lists',
  describe: 'Named lists of IPs, hostnames, ASNs, or redirects that can be referenced in rule expressions',

  builder: (yargs) => {
    return yargs
      .command(bulkoperationsget)
      .command(create)
      .command(delete_)
      .command(get)
      .command(itemscreate)
      .command(itemsdelete)
      .command(itemsget)
      .command(itemslist)
      .command(itemsupdate)
      .command(list)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
