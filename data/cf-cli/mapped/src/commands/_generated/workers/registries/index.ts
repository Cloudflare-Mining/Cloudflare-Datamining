/**
 * registries command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import credentialsgenerate from './credentials-generate.js';

const command: CommandModule = {
  command: 'registries',
  describe: 'Registries operations',

  builder: (yargs) => {
    return yargs.command(credentialsgenerate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
