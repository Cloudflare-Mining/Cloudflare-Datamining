/**
 * hyperdrive command
 * @generated from apis/hyperdrive/schema.ts
 */
import type { CommandModule } from 'yargs';
import configs from './configs/index.js';

const command: CommandModule = {
  command: 'hyperdrive',
  describe: 'Accelerate access to existing databases by caching queries and pooling connections at the edge',

  builder: (yargs) => {
    return yargs.command(configs).demandCommand(1);
  },

  handler: () => {},
};

export default command;
