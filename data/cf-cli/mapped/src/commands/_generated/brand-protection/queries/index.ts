/**
 * queries command group
 * @generated from apis/brand-protection/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import list from './list.js';

const command: CommandModule = {
  command: 'queries',
  describe: 'Brand monitoring queries that define search patterns for detecting brand abuse',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
