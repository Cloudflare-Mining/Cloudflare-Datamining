/**
 * rules command group
 * @generated from apis/magic-network-monitoring/schema.ts
 */
import type { CommandModule } from 'yargs';
import advertisementsedit from './advertisements-edit.js';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'rules',
  describe: 'Monitoring rules that define traffic thresholds and trigger alerts or prefix advertisements',

  builder: (yargs) => {
    return yargs
      .command(advertisementsedit)
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
