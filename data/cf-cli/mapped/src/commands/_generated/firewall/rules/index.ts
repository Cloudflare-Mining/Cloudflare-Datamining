/**
 * rules command group
 * @generated from apis/firewall/schema.ts
 */
import type { CommandModule } from 'yargs';
import bulkdelete from './bulk-delete.js';
import bulkedit from './bulk-edit.js';
import bulkupdate from './bulk-update.js';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'rules',
  describe: 'Legacy firewall rules with filter expressions — prefer Rulesets for new configurations',

  builder: (yargs) => {
    return yargs
      .command(bulkdelete)
      .command(bulkedit)
      .command(bulkupdate)
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
