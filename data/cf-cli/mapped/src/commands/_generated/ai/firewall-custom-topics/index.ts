/**
 * firewall-custom-topics command group
 * @generated from apis/ai/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'firewall-custom-topics',
  describe: 'Firewall for AI custom topics management',

  builder: (yargs) => {
    return yargs.command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
