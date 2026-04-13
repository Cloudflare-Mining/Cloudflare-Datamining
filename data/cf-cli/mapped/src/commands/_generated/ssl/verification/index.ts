/**
 * verification command group
 * @generated from apis/ssl/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'verification',
  describe: 'Check or modify the domain control validation (DCV) method for pending certificate orders',

  builder: (yargs) => {
    return yargs.command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
