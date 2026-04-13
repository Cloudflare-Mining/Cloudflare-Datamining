/**
 * validate command group
 * @generated from apis/logpush/schema.ts
 */
import type { CommandModule } from 'yargs';
import destination from './destination.js';
import destinationexists from './destination-exists.js';
import origin from './origin.js';

const command: CommandModule = {
  command: 'validate',
  describe: 'Validate destination credentials and connectivity before creating a Logpush job',

  builder: (yargs) => {
    return yargs.command(destination).command(destinationexists).command(origin).demandCommand(1);
  },

  handler: () => {},
};

export default command;
