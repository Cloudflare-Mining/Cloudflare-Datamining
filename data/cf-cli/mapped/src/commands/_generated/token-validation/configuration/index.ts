/**
 * configuration command group
 * @generated from apis/token-validation/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import credentialsupdate from './credentials-update.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'configuration',
  describe: 'Token validation configurations defining JWT sources, JWKS endpoints, and claim requirements',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(credentialsupdate)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
