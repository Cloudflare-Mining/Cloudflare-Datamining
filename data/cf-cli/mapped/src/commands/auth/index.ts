import type { Argv, CommandModule } from 'yargs';
import loginCommand from './login.js';
import logoutCommand from './logout.js';
import whoamiCommand from './whoami.js';

const authCommands: CommandModule & { describe: string } = {
  command: 'auth',
  describe: 'Authentication commands (login, logout, whoami)',

  builder: (yargs: Argv) => {
    return yargs
      .command(loginCommand)
      .command(logoutCommand)
      .command(whoamiCommand)
      .demandCommand(1, 'Please specify a subcommand');
  },

  handler: () => {
    // This is required but won't be called due to demandCommand
  },
};

// Also export individual commands for top-level aliases
export { loginCommand, logoutCommand, whoamiCommand };
export default authCommands;
