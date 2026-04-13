/**
 * quota command group
 * @generated from apis/secrets-store/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'quota',
  describe: 'Account quota limits for secrets stores, secrets count, and storage capacity',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
