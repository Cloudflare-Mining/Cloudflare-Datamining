/**
 * downloads-extra command group
 * @generated from apis/stream/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';

const command: CommandModule = {
  command: 'downloads-extra',
  describe: 'Downloads (additional) operations',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).demandCommand(1);
  },

  handler: () => {},
};

export default command;
