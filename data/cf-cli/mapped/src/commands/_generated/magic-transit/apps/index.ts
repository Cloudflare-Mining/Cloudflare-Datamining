/**
 * apps command group
 * @generated from apis/magic-transit/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'apps',
  describe: 'Application-aware traffic policies for Magic WAN that steer traffic by app type',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(edit).command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
