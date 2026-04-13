/**
 * configs command group
 * @generated from apis/magic-network-monitoring/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import fullget from './full-get.js';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'configs',
  describe: 'Account-level monitoring configuration — sampling rates, thresholds, and notification settings',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(fullget)
      .command(get)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
