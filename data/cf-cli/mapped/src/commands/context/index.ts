import type { Argv, CommandModule } from 'yargs';
import clearCommand from './clear.js';
import setCommand from './set.js';
import showCommand from './show.js';

const contextCommands: CommandModule & { describe: string } = {
  command: 'context',
  describe: 'Manage default account and zone context',

  builder: (yargs: Argv) => {
    return yargs
      .command(showCommand)
      .command(setCommand)
      .command(clearCommand)
      .demandCommand(1, 'Please specify a subcommand');
  },

  handler: () => {
    // This is required but won't be called due to demandCommand
  },
};

export default contextCommands;
