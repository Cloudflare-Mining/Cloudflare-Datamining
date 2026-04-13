/**
 * rules command group
 * @generated from apis/token-validation/schema.ts
 */
import type { CommandModule } from 'yargs';
import bulkcreate from './bulk-create.js';
import bulkedit from './bulk-edit.js';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'rules',
  describe: 'Validation rules that enforce token requirements on specific API endpoints',

  builder: (yargs) => {
    return yargs
      .command(bulkcreate)
      .command(bulkedit)
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
