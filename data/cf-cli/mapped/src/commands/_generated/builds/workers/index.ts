/**
 * workers command group
 * @generated from apis/builds/schema.ts
 */
import type { CommandModule } from 'yargs';
import buildslist from './builds-list.js';
import triggerslist from './triggers-list.js';

const command: CommandModule = {
  command: 'workers',
  describe: 'Workers operations',

  builder: (yargs) => {
    return yargs.command(buildslist).command(triggerslist).demandCommand(1);
  },

  handler: () => {},
};

export default command;
