/**
 * organizations-extra command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import get from './get.js';
import revokeusercreate from './revoke-user-create.js';
import update from './update.js';

const command: CommandModule = {
  command: 'organizations-extra',
  describe: 'Organizations (additional) operations',

  builder: (yargs) => {
    return yargs.command(create).command(get).command(revokeusercreate).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
