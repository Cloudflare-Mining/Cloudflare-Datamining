/**
 * monitor-groups command group
 * @generated from apis/load-balancers/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'monitor-groups',
  describe: 'Group monitors together for shared configuration and bulk management',

  builder: (yargs) => {
    return yargs
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
