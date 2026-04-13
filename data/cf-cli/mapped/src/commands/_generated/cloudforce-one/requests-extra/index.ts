/**
 * requests-extra command group
 * @generated from apis/cloudforce-one/schema.ts
 */
import type { CommandModule } from 'yargs';
import assetnewcreate from './asset-new-create.js';
import prioritycreate from './priority-create.js';

const command: CommandModule = {
  command: 'requests-extra',
  describe: 'Requests (additional) operations',

  builder: (yargs) => {
    return yargs.command(assetnewcreate).command(prioritycreate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
