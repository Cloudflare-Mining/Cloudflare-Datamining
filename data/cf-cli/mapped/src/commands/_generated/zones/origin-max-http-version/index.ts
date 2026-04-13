/**
 * origin-max-http-version command group
 * @generated from apis/zones/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'origin-max-http-version',
  describe: 'Origin Max Http Version operations',

  builder: (yargs) => {
    return yargs.command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
