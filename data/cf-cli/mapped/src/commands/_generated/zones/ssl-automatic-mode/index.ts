/**
 * ssl-automatic-mode command group
 * @generated from apis/zones/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'ssl-automatic-mode',
  describe: 'Ssl Automatic Mode operations',

  builder: (yargs) => {
    return yargs.command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
