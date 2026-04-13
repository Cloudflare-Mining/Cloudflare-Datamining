/**
 * validate-extra command group
 * @generated from apis/logpush/schema.ts
 */
import type { CommandModule } from 'yargs';
import destinationdelete from './destination-delete.js';
import destinationexistsdelete from './destination-exists-delete.js';
import origincreate from './origin-create.js';

const command: CommandModule = {
  command: 'validate-extra',
  describe: 'Validate (additional) operations',

  builder: (yargs) => {
    return yargs.command(destinationdelete).command(destinationexistsdelete).command(origincreate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
