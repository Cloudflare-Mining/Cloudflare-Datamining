/**
 * monitors command group
 * @generated from apis/load-balancers/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import previewscreate from './previews-create.js';
import referencesget from './references-get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'monitors',
  describe: 'Health check configurations that probe origin servers and determine pool availability',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(previewscreate)
      .command(referencesget)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
