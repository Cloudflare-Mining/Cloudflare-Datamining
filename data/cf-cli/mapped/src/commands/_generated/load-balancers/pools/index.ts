/**
 * pools command group
 * @generated from apis/load-balancers/schema.ts
 */
import type { CommandModule } from 'yargs';
import bulkedit from './bulk-edit.js';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import healthcreate from './health-create.js';
import healthget from './health-get.js';
import list from './list.js';
import referencesget from './references-get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'pools',
  describe: 'Origin server pools with weighted traffic distribution, health thresholds, and geographic preferences',

  builder: (yargs) => {
    return yargs
      .command(bulkedit)
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(healthcreate)
      .command(healthget)
      .command(list)
      .command(referencesget)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
