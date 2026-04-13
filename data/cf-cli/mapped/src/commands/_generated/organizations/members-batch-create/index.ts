/**
 * members-batch-create command group
 * @generated from apis/organizations/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'members-batch-create',
  describe: 'Members Batch Create operations',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
