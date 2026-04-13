/**
 * rules command group
 * @generated from apis/waiting-rooms/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'rules',
  describe: 'Rules that bypass or modify waiting room behavior for specific request patterns',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(edit).command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
