/**
 * settings command group
 * @generated from apis/schema-validation/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';
import operationsbulkedit from './operations-bulk-edit.js';
import operationsdelete from './operations-delete.js';
import operationsget from './operations-get.js';
import operationslist from './operations-list.js';
import operationsupdate from './operations-update.js';
import update from './update.js';

const command: CommandModule = {
  command: 'settings',
  describe: 'Zone-level schema validation settings including default actions for unmatched requests',

  builder: (yargs) => {
    return yargs
      .command(edit)
      .command(get)
      .command(operationsbulkedit)
      .command(operationsdelete)
      .command(operationsget)
      .command(operationslist)
      .command(operationsupdate)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
