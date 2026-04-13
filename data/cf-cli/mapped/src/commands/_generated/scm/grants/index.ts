/**
 * grants command group
 * @generated from apis/scm/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import listbranches from './list-branches.js';

const command: CommandModule = {
  command: 'grants',
  describe: 'Repository connection grants and webhook subscriptions for automated workflows',

  builder: (yargs) => {
    return yargs.command(create).command(listbranches).demandCommand(1);
  },

  handler: () => {},
};

export default command;
