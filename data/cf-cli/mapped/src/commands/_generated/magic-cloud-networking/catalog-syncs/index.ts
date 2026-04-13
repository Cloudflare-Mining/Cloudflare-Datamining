/**
 * catalog-syncs command group
 * @generated from apis/magic-cloud-networking/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import prebuiltpolicieslist from './prebuilt-policies-list.js';
import refresh from './refresh.js';
import update from './update.js';

const command: CommandModule = {
  command: 'catalog-syncs',
  describe: 'Synchronize cloud resource inventories from AWS, Azure, and GCP into a unified catalog',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(prebuiltpolicieslist)
      .command(refresh)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
