/**
 * zones-can-be-enabled command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import querycreate from './query-create.js';

const command: CommandModule = {
  command: 'zones-can-be-enabled',
  describe: 'Zones Can Be Enabled operations',

  builder: (yargs) => {
    return yargs.command(edit).command(querycreate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
