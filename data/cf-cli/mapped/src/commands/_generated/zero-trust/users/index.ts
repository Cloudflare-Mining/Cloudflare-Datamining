/**
 * users command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import mfaauthenticatorsdelete from './mfa-authenticators-delete.js';

const command: CommandModule = {
  command: 'users',
  describe: 'Users operations',

  builder: (yargs) => {
    return yargs.command(mfaauthenticatorsdelete).demandCommand(1);
  },

  handler: () => {},
};

export default command;
