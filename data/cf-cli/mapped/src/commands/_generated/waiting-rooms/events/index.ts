/**
 * events command group
 * @generated from apis/waiting-rooms/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import detailsget from './details-get.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'events',
  describe: 'Scheduled events that temporarily override waiting room settings for sales, launches, etc.',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(detailsget)
      .command(edit)
      .command(get)
      .command(list)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
