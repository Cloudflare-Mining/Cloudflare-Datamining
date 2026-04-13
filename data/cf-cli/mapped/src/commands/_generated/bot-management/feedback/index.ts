/**
 * feedback command group
 * @generated from apis/bot-management/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import list from './list.js';

const command: CommandModule = {
  command: 'feedback',
  describe: 'Feedback operations',

  builder: (yargs) => {
    return yargs.command(create).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
