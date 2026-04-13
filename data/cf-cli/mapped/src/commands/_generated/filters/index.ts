/**
 * filters command
 * @generated from apis/filters/schema.ts
 */
import type { CommandModule } from 'yargs';
import bulkdelete from './bulk-delete.js';
import bulkupdate from './bulk-update.js';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'filters',
  describe:
    'Filter expressions used by legacy firewall rules to match requests — prefer Rulesets for new configurations',

  builder: (yargs) => {
    return yargs
      .command(bulkdelete)
      .command(bulkupdate)
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
