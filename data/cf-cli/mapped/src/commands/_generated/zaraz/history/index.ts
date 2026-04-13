/**
 * history command group
 * @generated from apis/zaraz/schema.ts
 */
import type { CommandModule } from 'yargs';
import configsget from './configs-get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'history',
  describe: 'Configuration version history — browse and restore previous Zaraz configurations',

  builder: (yargs) => {
    return yargs.command(configsget).command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
