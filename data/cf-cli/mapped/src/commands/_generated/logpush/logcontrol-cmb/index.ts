/**
 * logcontrol-cmb command group
 * @generated from apis/logpush/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';

const command: CommandModule = {
  command: 'logcontrol-cmb',
  describe: 'Central Management of Billing (CMB) log control configuration',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
