/**
 * v1-extra command group
 * @generated from apis/images/schema.ts
 */
import type { CommandModule } from 'yargs';
import variantsflatget from './variants-flat-get.js';

const command: CommandModule = {
  command: 'v1-extra',
  describe: 'V1 (additional) operations',

  builder: (yargs) => {
    return yargs.command(variantsflatget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
