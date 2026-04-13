/**
 * page command group
 * @generated from apis/waiting-rooms/schema.ts
 */
import type { CommandModule } from 'yargs';
import preview from './preview.js';

const command: CommandModule = {
  command: 'page',
  describe: 'Custom HTML waiting page templates and preview rendering',

  builder: (yargs) => {
    return yargs.command(preview).demandCommand(1);
  },

  handler: () => {},
};

export default command;
