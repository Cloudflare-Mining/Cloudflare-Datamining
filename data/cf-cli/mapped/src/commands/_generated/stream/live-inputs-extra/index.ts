/**
 * live-inputs-extra command group
 * @generated from apis/stream/schema.ts
 */
import type { CommandModule } from 'yargs';
import disablecreate from './disable-create.js';
import enablecreate from './enable-create.js';

const command: CommandModule = {
  command: 'live-inputs-extra',
  describe: 'Live Inputs (additional) operations',

  builder: (yargs) => {
    return yargs.command(disablecreate).command(enablecreate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
