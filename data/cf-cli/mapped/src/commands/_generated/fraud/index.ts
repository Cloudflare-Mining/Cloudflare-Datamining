/**
 * fraud command
 * @generated from apis/fraud/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'fraud',
  describe:
    'Fraud detection for login and signup flows — identify credential stuffing, account takeover, and fake accounts',

  builder: (yargs) => {
    return yargs.command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
