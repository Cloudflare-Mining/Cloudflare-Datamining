/**
 * ownership-extra command group
 * @generated from apis/logpush/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import validatecreate from './validate-create.js';

const command: CommandModule = {
  command: 'ownership-extra',
  describe: 'Ownership (additional) operations',

  builder: (yargs) => {
    return yargs.command(create).command(validatecreate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
